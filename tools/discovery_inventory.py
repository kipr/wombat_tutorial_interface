#!/usr/bin/env python3
"""Create the immutable behavioral baseline from legacy Discovery HTML."""

from __future__ import annotations

import argparse
import collections
import json
from html.parser import HTMLParser
from pathlib import Path


class Node:
    def __init__(self, tag: str = "", attrs=(), parent: "Node | None" = None):
        self.tag = tag
        self.attrs = dict(attrs)
        self.parent = parent
        self.children: list[Node | str] = []

    @property
    def classes(self) -> set[str]:
        return set(self.attrs.get("class", "").split())

    def walk(self):
        yield self
        for child in self.children:
            if isinstance(child, Node):
                yield from child.walk()


class TreeParser(HTMLParser):
    VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("root")
        self.current = self.root

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs, self.current)
        self.current.children.append(node)
        if tag not in self.VOID:
            self.current = node

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in self.VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        node = self.current
        while node is not self.root and node.tag != tag:
            node = node.parent
        if node is not self.root:
            self.current = node.parent

    def handle_data(self, data):
        self.current.children.append(data)


def node_text(node: Node | None) -> str:
    if node is None:
        return ""
    value = "".join(child if isinstance(child, str) else node_text(child) for child in node.children)
    return " ".join(value.split())


def closest(node: Node, tag: str) -> Node | None:
    current = node.parent
    while current:
        if current.tag == tag:
            return current
        current = current.parent
    return None


def control_label(node: Node, by_id: dict[str, Node], labels: dict[str, str]) -> str:
    if node.attrs.get("aria-label"):
        return node.attrs["aria-label"].strip()
    control_id = node.attrs.get("id", "")
    if control_id in labels:
        return labels[control_id]
    parent = node.parent
    while parent:
        if parent.tag == "label":
            return node_text(parent)
        parent = parent.parent
    aria = node.attrs.get("aria-labelledby", "").split()
    return " ".join(node_text(by_id.get(item)) for item in aria).strip()


def parse_page(path: Path, root: Path) -> dict:
    parser = TreeParser()
    parser.feed(path.read_text(encoding="utf-8"))
    nodes = list(parser.root.walk())
    by_id = {node.attrs["id"]: node for node in nodes if node.attrs.get("id")}
    labels = {
        node.attrs["for"]: node_text(node)
        for node in nodes
        if node.tag == "label" and node.attrs.get("for")
    }

    controls = []
    for node in nodes:
        key = node.attrs.get("data-key")
        if not key or node.tag not in {"input", "textarea"}:
            continue
        kind = "textarea" if node.tag == "textarea" else node.attrs.get("type", "text").lower()
        initial = "yes" if kind == "checkbox" and "checked" in node.attrs else node.attrs.get("value", "")
        controls.append({
            "key": key,
            "type": kind,
            "label": control_label(node, by_id, labels),
            "placeholder": node.attrs.get("placeholder", ""),
            "initial_value": initial,
        })

    figures = []
    for node in nodes:
        if node.tag == "img" and node.attrs.get("src"):
            figure = closest(node, "figure")
            caption = ""
            if figure:
                caption_node = next((item for item in figure.walk() if item.tag == "figcaption"), None)
                caption = node_text(caption_node)
            figures.append({
                "kind": "image",
                "src": node.attrs["src"],
                "alt": node.attrs.get("alt", ""),
                "caption": caption or node.attrs.get("data-cap", ""),
            })
        elif node.tag == "svg":
            figures.append({
                "kind": "inline-svg",
                "src": "",
                "alt": node.attrs.get("aria-label", ""),
                "caption": "",
            })

    body = next((node for node in nodes if node.tag == "body"), None)
    ids = [node.attrs["id"] for node in nodes if node.attrs.get("id")]
    return {
        "source": path.relative_to(root).as_posix(),
        "persistence_id": body.attrs.get("data-mission-id", "") if body else "",
        "controls": controls,
        "duplicate_keys": sorted(key for key, count in collections.Counter(item["key"] for item in controls).items() if count > 1),
        "duplicate_ids": sorted(key for key, count in collections.Counter(ids).items() if count > 1),
        "glossary": [node.attrs["data-term"] for node in nodes if "def-term" in node.classes and node.attrs.get("data-term")],
        "mission_references": [
            {"mission": int(node.attrs["data-m"]), "tier": node.attrs.get("data-tier", "base"), "label": node_text(node)}
            for node in nodes if "fieldref" in node.classes and node.attrs.get("data-m", "").isdigit()
        ],
        "headings": [
            {"level": int(node.tag[1]), "id": node.attrs.get("id", ""), "text": node_text(node)}
            for node in nodes if node.tag in {"h1", "h2", "h3", "h4", "h5", "h6"}
        ],
        "links": [
            {"href": node.attrs["href"], "text": node_text(node)}
            for node in nodes if node.tag == "a" and node.attrs.get("href")
        ],
        "figures": figures,
    }


def build_inventory(legacy_root: Path) -> dict:
    sources = [legacy_root / "index.html", legacy_root / "coding" / "index.html", legacy_root / "systems" / "index.html"]
    sources += sorted((legacy_root / "coding").glob("project-*.html"))
    sources += sorted((legacy_root / "systems").glob("project-*.html"))
    missing = [path for path in sources if not path.is_file()]
    if missing:
        raise SystemExit(f"missing legacy source: {missing[0]}")
    pages = [parse_page(path, legacy_root) for path in sources]
    project_pages = [page for page in pages if "/project-" in page["source"]]
    controls = [control for page in project_pages for control in page["controls"]]
    summary = {
        "root_hubs": 1,
        "strand_hubs": 2,
        "coding_projects": sum(page["source"].startswith("coding/project-") for page in pages),
        "systems_projects": sum(page["source"].startswith("systems/project-") for page in pages),
        "saved_controls": len(controls),
        "checkboxes": sum(control["type"] == "checkbox" for control in controls),
        "glossary_occurrences": sum(len(page["glossary"]) for page in project_pages),
        "glossary_terms": len({term for page in project_pages for term in page["glossary"]}),
        "mission_references": sum(len(page["mission_references"]) for page in project_pages),
        "authored_images": len({
            figure["src"]
            for page in project_pages for figure in page["figures"]
            if figure["kind"] == "image"
        }) + sum(figure["kind"] == "inline-svg" for page in project_pages for figure in page["figures"]),
        "image_occurrences": sum(len(page["figures"]) for page in project_pages),
        "inline_svgs": sum(figure["kind"] == "inline-svg" for page in project_pages for figure in page["figures"]),
    }
    return {"format": 1, "source_root": legacy_root.as_posix(), "summary": summary, "pages": pages}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--legacy", type=Path, default=Path("docs/discovery"))
    parser.add_argument("--output", type=Path)
    parser.add_argument("--check", type=Path, help="compare freshly parsed legacy HTML with an existing inventory")
    args = parser.parse_args()
    inventory = build_inventory(args.legacy)
    rendered = json.dumps(inventory, indent=2, ensure_ascii=False) + "\n"
    if args.check:
        expected = args.check.read_text(encoding="utf-8")
        if expected != rendered:
            print(f"Discovery inventory is stale: regenerate {args.check}")
            return 1
        print(f"Discovery inventory OK: {inventory['summary']}")
        return 0
    if not args.output:
        print(rendered, end="")
        return 0
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(rendered, encoding="utf-8")
    print(f"Wrote {args.output}: {inventory['summary']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
