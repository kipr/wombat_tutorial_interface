#!/usr/bin/env python3
"""Validate Discovery's Stage 1 fixtures or a complete Stage 2 migration."""

from __future__ import annotations

import argparse
import collections
import copy
import json
import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit

from discovery_inventory import TreeParser, closest, control_label, node_text


def parse(path: Path):
    parser = TreeParser()
    parser.feed(path.read_text(encoding="utf-8"))
    nodes = list(parser.root.walk())
    by_id = {node.attrs["id"]: node for node in nodes if node.attrs.get("id")}
    labels = {
        node.attrs["for"]: node_text(node)
        for node in nodes if node.tag == "label" and node.attrs.get("for")
    }
    return parser.root, nodes, by_id, labels


def classes(node) -> set[str]:
    return set(node.attrs.get("class", "").split())


def controls(nodes, by_id, labels):
    result = []
    for node in nodes:
        key = node.attrs.get("data-key")
        if not key or node.tag not in {"input", "textarea"}:
            continue
        kind = "textarea" if node.tag == "textarea" else node.attrs.get("type", "text").lower()
        result.append({
            "key": key,
            "type": kind,
            "label": control_label(node, by_id, labels),
            "placeholder": node.attrs.get("placeholder", ""),
            "initial_value": "yes" if kind == "checkbox" and "checked" in node.attrs else node.attrs.get("value", ""),
        })
    return result


def figures(nodes):
    result = []
    for node in nodes:
        if node.tag != "img" or not node.attrs.get("src"):
            continue
        figure = closest(node, "figure")
        caption = ""
        if figure:
            caption_node = next((item for item in figure.walk() if item.tag == "figcaption"), None)
            caption = node_text(caption_node)
        result.append({
            "src": Path(urlsplit(node.attrs["src"]).path).name,
            "alt": node.attrs.get("alt", ""),
            "caption": caption or node.attrs.get("data-cap", ""),
        })
    return result


def apply_exceptions(baseline: dict, page_exceptions: dict, errors: list[str]) -> dict:
    expected = copy.deepcopy(baseline)
    for collection_name in ("controls", "figures"):
        for change in page_exceptions.get(collection_name, []):
            reason = change.get("reason", "").strip()
            index = change.get("index")
            field = change.get("field")
            if not reason or not isinstance(index, int) or index < 0:
                fail(errors, f"{baseline['source']}: malformed {collection_name} exception")
                continue
            collection = expected[collection_name]
            if index >= len(collection) or field not in collection[index]:
                fail(errors, f"{baseline['source']}: {collection_name} exception target does not exist")
                continue
            if collection[index][field] != change.get("from"):
                fail(errors, f"{baseline['source']}: {collection_name}[{index}].{field} exception has stale from value")
                continue
            collection[index][field] = change.get("to")
    return expected


def fail(errors: list[str], message: str):
    errors.append(message)


def validate_document(path: Path, build: Path, errors: list[str]):
    markup = path.read_text(encoding="utf-8")
    _, nodes, by_id, labels = parse(path)
    relative = path.relative_to(build)
    ids = [node.attrs["id"] for node in nodes if node.attrs.get("id")]
    duplicates = sorted(key for key, count in collections.Counter(ids).items() if count > 1)
    if duplicates:
        fail(errors, f"{relative}: duplicate IDs {duplicates}")
    page_controls = controls(nodes, by_id, labels)
    duplicate_keys = sorted(key for key, count in collections.Counter(item["key"] for item in page_controls).items() if count > 1)
    if duplicate_keys:
        fail(errors, f"{relative}: duplicate data keys {duplicate_keys}")
    for control in page_controls:
        if not control["label"]:
            fail(errors, f"{relative}: {control['type']} {control['key']!r} has no accessible label")
    if re.fullmatch(r"discovery/(?:coding|systems)/project-\d+/index\.html", relative.as_posix()):
        styles = [
            Path(urlsplit(node.attrs.get("href", "")).path).stem
            for node in nodes if node.tag == "link" and node.attrs.get("rel") == "stylesheet"
            and "/css/" in node.attrs.get("href", "")
        ]
        expected_styles = ["site-base", "worksheet", "syntax", "discovery", "print"]
        if styles[-5:] != expected_styles:
            fail(errors, f"{relative}: worksheet stylesheet order is {styles[-5:]}")

    forbidden = ("KIPR_MISSIONS", "fldOverlay", "fieldref", "data-img-base", "<style", "<script data-page")
    for token in forbidden:
        if token in markup:
            fail(errors, f"{relative}: obsolete token remains: {token}")
    if re.search(r"\son[a-z]+\s*=", markup, re.I):
        fail(errors, f"{relative}: inline event handler remains")
    if re.search(r'href="[^"]*(?:project-\d+|(?:coding|systems)/index|discovery/index)\.html(?:[#?][^"]*)?"', markup):
        fail(errors, f"{relative}: legacy Discovery .html link remains")

    for node in nodes:
        attribute = "href" if node.tag in {"a", "link"} else "src" if node.tag in {"img", "script"} else ""
        raw = node.attrs.get(attribute, "") if attribute else ""
        if not raw or raw.startswith(("#", "data:", "mailto:", "tel:")):
            continue
        split = urlsplit(raw)
        if split.scheme or split.netloc:
            continue
        target = (path.parent / unquote(split.path)).resolve()
        if split.path.endswith("/"):
            target = target / "index.html"
        elif target.is_dir():
            target = target / "index.html"
        if target == build / "index.html":
            # The existing global nav still points at the not-yet-Hugo home
            # page. Discovery migration validation does not expand that scope.
            continue
        if not target.exists():
            fail(errors, f"{relative}: unresolved {attribute} {raw!r}")
            continue
        if node.tag == "a" and split.fragment and target.suffix == ".html":
            target_markup = target.read_text(encoding="utf-8")
            if not re.search(rf'\bid="{re.escape(unquote(split.fragment))}"', target_markup):
                fail(errors, f"{relative}: unresolved fragment in {raw!r}")


def fixture_checks(build: Path, errors: list[str]):
    paths = {
        "root": build / "discovery" / "index.html",
        "coding": build / "discovery" / "coding" / "index.html",
        "systems": build / "discovery" / "systems" / "index.html",
        "coding1": build / "discovery" / "coding" / "project-01" / "index.html",
        "coding3": build / "discovery" / "coding" / "project-03" / "index.html",
        "systems1": build / "discovery" / "systems" / "project-01" / "index.html",
    }
    for name, path in paths.items():
        if not path.is_file():
            fail(errors, f"missing Stage 1 {name} fixture: {path.relative_to(build)}")
    if errors:
        return
    root = paths["root"].read_text(encoding="utf-8")
    coding = paths["coding"].read_text(encoding="utf-8")
    systems = paths["systems"].read_text(encoding="utf-8")
    fixture = paths["coding1"].read_text(encoding="utf-8")
    if root.count('class="choice-card"') != 2:
        fail(errors, "Discovery root fixture must derive two strand cards from section children")
    if coding.count('class="proj-card') != 2 or coding.count('class="discovery-phase"') != 2:
        fail(errors, "Coding hub fixture does not derive two cards in two phases")
    if coding.count('class="buildgate"') != 1:
        fail(errors, "Coding hub fixture does not render its between-phase build gate")
    if systems.count('class="proj-card') != 1 or 'aria-label="Systems project pace legend"' not in systems:
        fail(errors, "Systems hub fixture is missing its derived card or pace legend")
    for phase in ("Try It", "Learn It", "Do It", "Score It"):
        if not re.search(rf'<span class="pnum">{phase}</span>', fixture):
            fail(errors, f"Discovery heading fixture does not render {phase!r} as a phase badge")
    if not re.search(r'<button type="button" class="def-term"[^>]+data-term="PROTOTYPE:design"', fixture):
        fail(errors, "glossary fixture is not a semantic button using PROTOTYPE:design")
    if 'class="mission-summary"' not in fixture or 'mission-2/#base' not in fixture:
        fail(errors, "canonical mission-summary fixture did not resolve Mission 2 tiers")
    if 'data-key="fixture_short"' not in fixture or 'placeholder="Write one observation"' not in fixture:
        fail(errors, "short-answer fixture did not preserve its key or placeholder")
    if 'data-key="need_1"' not in fixture or '<ul class="needs">' not in fixture:
        fail(errors, "structured What You Need checklist did not use the shared checkbox path")
    if 'href="../../../discovery/coding/"' not in fixture or 'href="../../../discovery/coding/project-03/"' not in fixture:
        fail(errors, "nested worksheet navigation did not resolve the next project cleanly")
    styles = re.findall(r'<link rel="stylesheet" href="[^"]*css/([^/"?#]+)\.css"', fixture)
    if styles[-5:] != ["site-base", "worksheet", "syntax", "discovery", "print"]:
        fail(errors, f"Discovery worksheet stylesheet order is {styles[-5:]}")
    if (build / "discovery" / "coding" / "project-01.html").exists():
        fail(errors, "legacy .html alias was generated for a clean Discovery URL")


def full_checks(build: Path, inventory_path: Path, exceptions_path: Path, errors: list[str]):
    inventory = json.loads(inventory_path.read_text(encoding="utf-8"))
    exception_data = json.loads(exceptions_path.read_text(encoding="utf-8")) if exceptions_path.is_file() else {"pages": {}}
    expected = {"coding": 17, "systems": 14}
    discovery_root = build / "discovery"
    strand_hubs = sorted(
        path.name for path in discovery_root.iterdir()
        if path.is_dir() and (path / "index.html").is_file()
    ) if discovery_root.is_dir() else []
    if strand_hubs != ["coding", "systems"]:
        fail(errors, f"Discovery strand hubs are {strand_hubs}; expected exactly coding and systems")
    for strand, count in expected.items():
        paths = sorted((build / "discovery" / strand).glob("project-*/index.html"))
        if len(paths) != count:
            fail(errors, f"Discovery {strand} has {len(paths)} pages; expected {count}")
    for hub in (build / "discovery" / "index.html", build / "discovery" / "coding" / "index.html", build / "discovery" / "systems" / "index.html"):
        if not hub.is_file():
            fail(errors, f"missing generated hub {hub.relative_to(build)}")
    if errors:
        return

    for baseline in inventory["pages"]:
        match = re.fullmatch(r"(coding|systems)/project-(\d+)\.html", baseline["source"])
        if not match:
            continue
        expected_page = apply_exceptions(baseline, exception_data.get("pages", {}).get(baseline["source"], {}), errors)
        strand, number = match.groups()
        path = build / "discovery" / strand / f"project-{number}" / "index.html"
        _, nodes, by_id, labels = parse(path)
        actual = controls(nodes, by_id, labels)
        if actual != expected_page["controls"]:
            fail(errors, f"{path.relative_to(build)}: saved control contract differs from legacy inventory")
        body = next((node for node in nodes if node.tag == "body"), None)
        if not body or body.attrs.get("data-mission-id") != expected_page["persistence_id"]:
            fail(errors, f"{path.relative_to(build)}: persistence identifier changed")
        glossary = [node.attrs["data-term"] for node in nodes if "def-term" in classes(node) and node.attrs.get("data-term")]
        if collections.Counter(glossary) != collections.Counter(expected_page["glossary"]):
            fail(errors, f"{path.relative_to(build)}: glossary term/sense multiset differs")
        mission_links = [node for node in nodes if node.tag == "a" and "mission-ref" in classes(node)]
        if len(mission_links) != len(expected_page["mission_references"]):
            fail(errors, f"{path.relative_to(build)}: mission-reference count differs")
        expected_figures = [
            {"src": Path(item["src"]).name, "alt": item["alt"], "caption": item["caption"]}
            for item in expected_page["figures"]
        ]
        if figures(nodes) != expected_figures:
            fail(errors, f"{path.relative_to(build)}: image source, alternative text, caption, or order differs")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("build", type=Path)
    parser.add_argument("--mode", choices=("fixture", "full"), default="full")
    parser.add_argument("--inventory", type=Path, default=Path("data/discovery-legacy-inventory.json"))
    parser.add_argument("--exceptions", type=Path, default=Path("data/discovery-migration-exceptions.json"))
    parser.add_argument("--source", type=Path, default=Path("content/discovery"))
    args = parser.parse_args()
    build = args.build.resolve()
    errors: list[str] = []
    if args.mode == "fixture":
        fixture_checks(build, errors)
    else:
        full_checks(build, args.inventory, args.exceptions, errors)
    discovery = build / "discovery"
    if discovery.exists():
        for path in sorted(discovery.rglob("*.html")):
            if path.name != "index.html":
                fail(errors, f"legacy HTML-shaped output exists: {path.relative_to(build)}")
            validate_document(path, build, errors)
    for source in sorted(args.source.rglob("*.md")):
        authored = source.read_text(encoding="utf-8")
        if re.search(r"<\s*(?:style|script)\b|\sstyle\s*=|\son[a-z]+\s*=", authored, re.I):
            fail(errors, f"{source}: authored inline style, script, or event handler remains")
    script = build / "js" / "lab.js"
    if not script.is_file():
        fail(errors, "shared worksheet script was not published")
    else:
        source = script.read_text(encoding="utf-8")
        for token in ('el.checked ? "yes" : ""', 'el.checked = value === "yes"', 'document.addEventListener("input"', 'document.addEventListener("change"'):
            if token not in source:
                fail(errors, f"shared checkbox persistence is missing {token!r}")
    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        return 1
    print(f"Discovery {args.mode} validation OK")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
