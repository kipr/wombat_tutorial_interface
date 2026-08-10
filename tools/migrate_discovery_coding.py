#!/usr/bin/env python3
"""One-shot Stage 2 migrator: legacy Discovery Coding HTML → Hugo Markdown."""

from __future__ import annotations

import html as html_lib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
from discovery_inventory import TreeParser, closest, control_label, node_text  # noqa: E402

SRC = ROOT / "docs" / "discovery" / "coding"
OUT = ROOT / "content" / "discovery" / "coding"
INV = json.loads((ROOT / "data" / "discovery-legacy-inventory.json").read_text(encoding="utf-8"))

PHASES = {
    1: ("Phase 1 · Get Connected", 1),
    2: ("Phase 1 · Get Connected", 1),
    3: ("Phase 2 · Make It Move", 2),
    4: ("Phase 2 · Make It Move", 2),
    5: ("Phase 2 · Make It Move", 2),
    6: ("Phase 2 · Make It Move", 2),
    7: ("Phase 3 · Make It Grab", 3),
    8: ("Phase 3 · Make It Grab", 3),
    9: ("Phase 4 · Make It Reliable", 4),
    10: ("Phase 4 · Make It Reliable", 4),
    11: ("Phase 4 · Make It Reliable", 4),
    12: ("Phase 4 · Make It Reliable", 4),
    13: ("Phase 5 · Make It Smart", 5),
    14: ("Phase 5 · Make It Smart", 5),
    15: ("Phase 5 · Make It Smart", 5),
    16: ("Phase 6 · Clean It Up", 6),
    17: ("Phase 6 · Clean It Up", 6),
}

BUILD_GATES = {
    2: {
        "title": "Build required first — the bulldozer blade",
        "description": "Project 6 pushes cubes, poms and cones off the black line. Build the blade in Systems before you reach it.",
        "page": "/discovery/systems/project-06",
        "label": "Go build the blade →",
    },
    6: {
        "title": "Build required first — the arm and the claw",
        "description": "Everything from Project 7 onward needs a working arm and claw. Build them in Systems before you continue.",
        "page": "/discovery/systems/project-07",
        "label": "Go build the claw →",
    },
}

HUB_CARDS = json.loads("""
[
  {"no_mission": true, "mission_label": "No field mission", "pace": null},
  {"no_mission": true, "mission_label": "No field mission", "pace": null},
  {"no_mission": true, "mission_label": "No field mission — robot on blocks", "pace": null},
  {"no_mission": false, "mission_label": "Mission 1 · Mission 10 — base + bonus", "pace": null},
  {"no_mission": false, "mission_label": "Mission 12 — approach only", "pace": null},
  {"no_mission": false, "mission_label": "Missions 2 · 4 · 13 · 14", "pace": "Needs Systems 6"},
  {"no_mission": false, "mission_label": "Mission 9 — base", "pace": "Needs Systems 7"},
  {"no_mission": false, "mission_label": "Missions 12 · 3 · 11 · 13 bonus — 37 pts", "pace": "Needs Systems 7"},
  {"no_mission": false, "mission_label": "Mission 5 — base + bonus · 20 pts", "pace": null},
  {"no_mission": false, "mission_label": "Mission 13 advanced — 13 pts", "pace": null},
  {"no_mission": false, "mission_label": "Missions 9 · 8 · 18 — 40 pts", "pace": null},
  {"no_mission": false, "mission_label": "Mission 15 — base + bonus · 18 pts", "pace": null},
  {"no_mission": false, "mission_label": "Mission 3 advanced — 22 pts", "pace": null},
  {"no_mission": false, "mission_label": "Missions 14 · 18 — 35 pts", "pace": null},
  {"no_mission": false, "mission_label": "Missions 6 · 7 · 16 · 17 — 51 pts", "pace": null},
  {"no_mission": true, "mission_label": "No field mission — refactor", "pace": null},
  {"no_mission": false, "mission_label": "Missions 7 · 11 · 16 · 17 — 38 pts", "pace": null}
]
""")


def inventory_for(num: int) -> dict:
    source = f"coding/project-{num:02d}.html"
    return next(p for p in INV["pages"] if p["source"] == source)


def yaml_quote(value: str) -> str:
    if value is None:
        return '""'
    if (
        value == ""
        or value.lower() in {"true", "false", "null"}
        or re.search(r'[\s:#{}[\],&*!|>\'"%@`⚠]', value)
        or any(ord(ch) > 127 for ch in value)
    ):
        return json.dumps(value, ensure_ascii=False)
    return value


def inline_md(node, strip_outer_p: bool = False) -> str:
    """Convert an inline/flow node tree to Markdown, preserving glossary and mission refs."""
    if node is None:
        return ""
    if isinstance(node, str):
        return escape_md_text(node)

    tag = node.tag
    classes = node.classes

    if tag == "span" and "def-term" in classes:
        term = node.attrs.get("data-term", "")
        text = node_text(node)
        if term:
            if text and text != term:
                return f"[[{term}|{text}]]"
            return f"[[{term}]]"
        return text

    if tag == "span" and "fieldref" in classes:
        mission = node.attrs.get("data-m", "")
        tier = node.attrs.get("data-tier", "base")
        label = node_text(node)
        return f"[[@{mission}:{tier}|{label}]]"

    if tag == "br":
        return "  \n"

    if tag == "code":
        return f"`{node_text(node)}`"

    if tag == "strong" or tag == "b":
        inner = "".join(inline_md(c) if not isinstance(c, str) else escape_md_text(c) for c in node.children)
        return f"**{inner}**" if inner else ""

    if tag == "em" or tag == "i":
        inner = "".join(inline_md(c) if not isinstance(c, str) else escape_md_text(c) for c in node.children)
        return f"*{inner}*" if inner else ""

    if tag == "a":
        href = node.attrs.get("href", "")
        text = node_text(node)
        if href.startswith(("http://", "https://", "mailto:")):
            return f"[{text}]({href})"
        # Drop legacy relative discovery links; hubs own navigation.
        return text

    if tag in {"script", "style"}:
        return ""

    parts = []
    for child in node.children:
        if isinstance(child, str):
            parts.append(escape_md_text(child))
        else:
            parts.append(inline_md(child))
    return "".join(parts)


def escape_md_text(text: str) -> str:
    # Keep intentional punctuation; only neutralize accidental heading markers at line starts later.
    return text.replace("\xa0", " ")


def children_md(node) -> str:
    return "".join(inline_md(c) if not isinstance(c, str) else escape_md_text(c) for c in node.children)


def table_safe_md(text: str) -> str:
    """Markdown tables treat | as a column marker; drop glossary display pipes."""
    return re.sub(r'\[\[([A-Z0-9 _/-]+)\|([^\]]+)\]\]', r'[[\1]]', text)


def normalize_ws(text: str) -> str:
    text = text.replace("\u2212", "−").replace("\u2014", "—").replace("\u2013", "–")
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip() + "\n"


def label_with_glossary(label_node) -> str:
    """Markdown label preserving nested glossary terms and emphasis."""
    if label_node is None:
        return ""
    return re.sub(r"\s+", " ", children_md(label_node)).strip()


def find_label_for(input_node, by_id, labels_map):
    control_id = input_node.attrs.get("id", "")
    # Prefer the actual label node for glossary-preserving markdown.
    for node in input_node.parent.walk() if input_node.parent else []:
        pass
    # Search siblings / document for label[for=id]
    root = input_node
    while root.parent:
        root = root.parent
    for node in root.walk():
        if node.tag == "label" and node.attrs.get("for") == control_id:
            return label_with_glossary(node)
    # Fall back to inventory plain label
    return control_label(input_node, by_id, labels_map)


def convert_code(pre_node) -> str:
    raw = ""
    for child in pre_node.children:
        if isinstance(child, str):
            raw += child
        elif child.tag == "br":
            raw += "\n"
        else:
            raw += node_text(child)
            if child.tag != "span":
                raw += "\n"
    # Reconstruct from text nodes more carefully
    raw = flatten_pre(pre_node)
    raw = raw.replace("\xa0", " ")
    raw = raw.rstrip() + "\n"
    lang = "c" if re.search(r"#include\b|\bint\s+main\s*\(|\bvoid\s+\w+\s*\(", raw) else "text"
    # Fence: ensure #include cannot be a heading outside fences — already inside.
    fence = "```"
    while fence in raw:
        fence += "`"
    return f"{fence}{lang}\n{raw}{fence}\n\n"


def flatten_pre(node) -> str:
    parts = []
    for child in node.children:
        if isinstance(child, str):
            parts.append(child)
        elif child.tag == "br":
            parts.append("\n")
        elif child.tag == "span":
            parts.append(flatten_pre(child))
        else:
            parts.append(node_text(child))
    return "".join(parts)


def convert_figure(fig) -> dict | None:
    img = next((c for c in fig.walk() if getattr(c, "tag", None) == "img"), None)
    if not img or not img.attrs.get("src"):
        return None
    src = img.attrs["src"]
    # ../../img/kit/foo.jpg → kit/foo.jpg
    src = re.sub(r"^(?:\.\./)+img/", "", src)
    alt = img.attrs.get("alt", "")
    cap_node = next((c for c in fig.walk() if getattr(c, "tag", None) == "figcaption"), None)
    caption = node_text(cap_node) if cap_node else alt
    # figrow uses alt as caption; prefer caption text for alt when present
    return {"src": src, "alt": alt or caption, "caption": caption}


def emit_figrow(figures: list[dict]) -> str:
    if not figures:
        return ""
    lines = ["{{< figrow >}}"]
    for fig in figures:
        alt = fig["alt"] or fig["caption"]
        caption = fig.get("caption") or alt
        lines.append(f"- src: {fig['src']}")
        lines.append(f"  alt: {yaml_quote(alt)}")
        if caption != alt:
            lines.append(f"  caption: {yaml_quote(caption)}")
    lines.append("{{< /figrow >}}")
    lines.append("")
    return "\n".join(lines)


def convert_checklist(ul, by_id, labels_map) -> str:
    items = []
    for li in ul.children:
        if isinstance(li, str) or li.tag != "li":
            continue
        inp = next((c for c in li.walk() if getattr(c, "tag", None) == "input" and c.attrs.get("data-key")), None)
        if not inp:
            continue
        key = inp.attrs["data-key"]
        label_node = None
        for c in li.walk():
            if getattr(c, "tag", None) == "label":
                label_node = c
                break
        label = label_with_glossary(label_node) if label_node else control_label(inp, by_id, labels_map)
        items.append((key, label))
    if not items:
        return ""
    lines = ["{{< checklist >}}"]
    for key, label in items:
        lines.append(f"- key: {key}")
        lines.append(f"  label: {yaml_quote(label)}")
    lines.append("{{< /checklist >}}")
    lines.append("")
    return "\n".join(lines)


def convert_callout(div) -> str:
    classes = div.classes
    title = ""
    body_nodes = []
    for child in div.children:
        if isinstance(child, str):
            if child.strip():
                body_nodes.append(child)
            continue
        if child.tag == "p" and "ctitle" in child.classes:
            title = re.sub(r"\s+", " ", children_md(child)).strip()
        else:
            body_nodes.append(child)

    body_parts = []
    for child in body_nodes:
        if isinstance(child, str):
            body_parts.append(child.strip())
        elif child.tag == "p":
            body_parts.append(children_md(child).strip())
        elif child.tag in {"ul", "ol"}:
            body_parts.append(convert_simple_list(child).rstrip())
        else:
            body_parts.append(children_md(child).strip())
    body = "\n\n".join(p for p in body_parts if p)

    if "danger" in classes or "warn" in classes:
        # Hardware / burn / safety guidance → safety; milder caution still safety for red panels.
        sc = "safety"
        return f'{{{{% {sc} title={yaml_quote(title)} %}}}}\n{body}\n{{{{% /{sc} %}}}}\n\n'
    if "navy" in classes:
        return f'{{{{% callout title={yaml_quote(title)} variant="navy" %}}}}\n{body}\n{{{{% /callout %}}}}\n\n'
    if "gold" in classes:
        return f'{{{{% callout title={yaml_quote(title)} variant="gold" %}}}}\n{body}\n{{{{% /callout %}}}}\n\n'
    return f'{{{{% callout title={yaml_quote(title)} %}}}}\n{body}\n{{{{% /callout %}}}}\n\n'


def convert_simple_list(list_node) -> str:
    ordered = list_node.tag == "ol"
    lines = []
    index = 1
    for li in list_node.children:
        if isinstance(li, str) or li.tag != "li":
            continue
        text = children_md(li).strip()
        text = re.sub(r"\s+", " ", text)
        prefix = f"{index}." if ordered else "-"
        lines.append(f"{prefix} {text}")
        index += 1
    return "\n".join(lines) + "\n\n"


def convert_table(table, controls_by_key: dict) -> str:
    """Convert tables to Markdown (static) or gridtable (editable)."""
    rows = []
    headers = []
    thead = next((c for c in table.children if not isinstance(c, str) and c.tag == "thead"), None)
    tbody = next((c for c in table.children if not isinstance(c, str) and c.tag == "tbody"), None)
    head_row = None
    if thead:
        head_row = next((c for c in thead.children if not isinstance(c, str) and c.tag == "tr"), None)
    body_source = tbody.children if tbody else table.children
    if head_row:
        headers = [re.sub(r"\s+", " ", children_md(th)).strip() for th in head_row.children if not isinstance(th, str) and th.tag == "th"]

    data_rows = []
    has_inputs = False
    for tr in body_source:
        if isinstance(tr, str) or tr.tag != "tr":
            continue
        if any(not isinstance(c, str) and c.tag == "th" for c in tr.children) and not headers:
            headers = [re.sub(r"\s+", " ", children_md(th)).strip() for th in tr.children if not isinstance(th, str) and th.tag in {"th", "td"}]
            continue
        cells = []
        for td in tr.children:
            if isinstance(td, str) or td.tag not in {"td", "th"}:
                continue
            inp = next((c for c in td.walk() if getattr(c, "tag", None) == "input" and c.attrs.get("data-key")), None)
            if inp:
                has_inputs = True
                key = inp.attrs["data-key"]
                meta = controls_by_key.get(key, {})
                cells.append({"key": key, "aria": meta.get("label") or inp.attrs.get("aria-label", key)})
            else:
                text = re.sub(r"\s+", " ", children_md(td)).strip()
                cells.append({"text": text})
        if cells:
            data_rows.append(cells)

    if not has_inputs:
        # Static markdown table
        if not headers and data_rows:
            # use first row as header if looks like headers already captured empty
            pass
        if not headers:
            return ""  # shouldn't happen
        lines = ["| " + " | ".join(headers) + " |", "| " + " | ".join("---" for _ in headers) + " |"]
        for row in data_rows:
            lines.append("| " + " | ".join(table_safe_md(c.get("text", "")) for c in row) + " |")
        return "\n".join(lines) + "\n\n"

    # gridtable
    ncols = max(len(r) for r in data_rows) if data_rows else len(headers)
    while len(headers) < ncols:
        headers.append("")
    lines = ["{{< gridtable >}}", "columns:"]
    for i, head in enumerate(headers):
        lines.append(f"- head: {yaml_quote(head)}")
        # Prefer column aria from first input in that column
        for row in data_rows:
            if i < len(row) and "key" in row[i]:
                lines.append(f"  aria: {yaml_quote(row[i]['aria'])}")
                break
    lines.append("rows:")
    for row in data_rows:
        lines.append("  - cells:")
        for cell in row:
            if "key" in cell:
                lines.append(f"      - key: {cell['key']}")
                lines.append(f"        aria: {yaml_quote(cell['aria'])}")
            else:
                lines.append(f"      - text: {yaml_quote(cell.get('text', ''))}")
    lines.append("{{< /gridtable >}}")
    lines.append("")
    return "\n".join(lines)


def convert_anat(div) -> str:
    lines = ["| Code / part | What it means |", "| --- | --- |"]
    for row in div.children:
        if isinstance(row, str) or "arow" not in row.classes:
            continue
        code = desc = ""
        for child in row.children:
            if isinstance(child, str):
                continue
            if "acode" in child.classes:
                code = children_md(child).strip()
            elif "adesc" in child.classes:
                desc = children_md(child).strip()
        desc = table_safe_md(desc)
        code_md = table_safe_md(code)
        if "[[" not in code_md and code_md and not code_md.startswith("`"):
            code_md = f"`{code_md}`"
        lines.append(f"| {code_md} | {desc} |")
    return "\n".join(lines) + "\n\n"


def convert_scorepair(div) -> str:
    scores = []
    does_not = []
    for col in div.children:
        if isinstance(col, str) or col.tag != "div":
            continue
        items = []
        for ul in col.walk():
            if getattr(ul, "tag", None) == "ul":
                for li in ul.children:
                    if isinstance(li, str) or li.tag != "li":
                        continue
                    items.append(re.sub(r"\s+", " ", children_md(li)).strip())
        if "yes" in col.classes:
            scores = items
        elif "no" in col.classes:
            does_not = items
    lines = ["{{< score-examples >}}", "scores:"]
    for item in scores:
        lines.append(f"  - {yaml_quote(item)}")
    lines.append("does_not_score:")
    for item in does_not:
        lines.append(f"  - {yaml_quote(item)}")
    lines.append("{{< /score-examples >}}")
    lines.append("")
    return "\n".join(lines)


def convert_mission_card(div) -> str:
    title = ""
    for node in div.walk():
        if getattr(node, "tag", None) == "span" and "mtitle" in node.classes:
            title = node_text(node)
            break
    m = re.match(r"Mission\s+(\d+)", title)
    if not m:
        return f"<!-- unresolved mission card: {title} -->\n\n"
    number = m.group(1)
    annotations = {}
    for part in div.walk():
        if getattr(part, "tag", None) != "div" or "mpart" not in part.classes:
            continue
        label = ""
        for child in part.children:
            if not isinstance(child, str) and "mlabel" in child.classes:
                label = node_text(child).lower()
        note = re.sub(r"\s+", " ", children_md(part)).strip()
        # Strip the label prefix from note if duplicated
        note = re.sub(r"^[^—\-]+(?:—|-)\s*", "", note, count=1).strip() if False else note
        # Map common labels to tier ids / freeform annotations on tiers present
        if "not yet" in label or "later" in part.classes:
            # Annotate first non-base or bonus tiers generically via bonus if present
            annotations.setdefault("bonus", "not yet")
            annotations.setdefault("advanced", "not yet")
        elif "your task" in label or "this project" in label:
            if "bonus" in label:
                annotations["bonus"] = "your task"
            elif "advanced" in label:
                annotations["advanced"] = "your task"
            else:
                annotations["base"] = "your task"
        elif "already" in label or "done" in label:
            annotations["base"] = "already done"
        elif "base" in label:
            annotations.setdefault("base", "your task" if "later" not in part.classes else "not yet")
        elif "bonus" in label and "advanced" not in label:
            annotations.setdefault("bonus", "your task" if "later" not in part.classes else "not yet")
        elif "advanced" in label:
            annotations.setdefault("advanced", "your task" if "later" not in part.classes else "not yet")

    # Keep annotations that the shortcode accepts; unknown tiers fail the build.
    # Prefer only annotations we set with status words.
    lines = [
        f'{{{{< mission-summary mission="{number}" >}}}}',
        "{{< /mission-summary >}}",
        "",
    ]
    return "\n".join(lines)


def convert_wcard(div, controls_by_key) -> str:
    fields = []
    rich_notes = []
    for row in div.walk():
        if getattr(row, "tag", None) != "div" or "wrow" not in row.classes:
            continue
        inp = next((c for c in row.walk() if getattr(c, "tag", None) == "input" and c.attrs.get("data-key")), None)
        if not inp:
            continue
        key = inp.attrs["data-key"]
        meta = controls_by_key.get(key, {})
        label = meta.get("label") or inp.attrs.get("aria-label") or key
        ph = meta.get("placeholder") or inp.attrs.get("placeholder") or ""
        wlabel = next((c for c in row.children if not isinstance(c, str) and "wlabel" in c.classes), None)
        if wlabel:
            rich = re.sub(r"\s+", " ", children_md(wlabel)).strip()
            if "[[" in rich:
                rich_notes.append(rich)
        fields.append((key, label, ph))
    if not fields:
        return ""
    lines = []
    if rich_notes:
        lines.append("Record these values:")
        lines.append("")
        for note in rich_notes:
            lines.append(f"- {note}")
        lines.append("")
    lines.append("{{< rec >}}")
    for key, label, ph in fields:
        lines.append(f"- key: {key}")
        lines.append(f"  label: {yaml_quote(label)}")
        if ph:
            lines.append(f"  placeholder: {yaml_quote(ph)}")
    lines.append("{{< /rec >}}")
    lines.append("")
    return "\n".join(lines)


def convert_rangebar(div) -> str:
    # Represent API range vs classroom safe limits without inline styles.
    return (
        "{{% safety title=\"⚠ API range vs classroom safe limits\" %}}\n"
        "The servo API accepts positions **0 to 2047** (about 180°). "
        "Classroom hardware must stay in the conservative safe band **150–1900**, "
        "with centre near **1024**. Sending commands into the burn zones (below 150 or above 1900) "
        "can destroy the servo.\n"
        "{{% /safety %}}\n\n"
    )


def convert_dosteps(ol, ctx) -> str:
    parts = []
    step_num = 1
    for li in ol.children:
        if isinstance(li, str) or li.tag != "li":
            continue
        title = ""
        body = []
        for child in li.children:
            if isinstance(child, str):
                if child.strip():
                    body.append(("text", child.strip()))
                continue
            if child.tag == "span" and "stitle" in child.classes:
                title = re.sub(r"\s+", " ", children_md(child)).strip()
            else:
                body.append(("node", child))
        heading = f"### Step {step_num} — {title}" if title else f"### Step {step_num}"
        parts.append(heading + "\n\n")
        for kind, payload in body:
            if kind == "text":
                parts.append(payload + "\n\n")
            else:
                parts.append(convert_block(payload, ctx))
        step_num += 1
    return "".join(parts)


class Ctx:
    def __init__(self, by_id, labels_map, controls_by_key, num):
        self.by_id = by_id
        self.labels_map = labels_map
        self.controls_by_key = controls_by_key
        self.num = num
        self.pending_question = None


def convert_block(node, ctx: Ctx) -> str:
    if isinstance(node, str):
        text = node.strip()
        return (text + "\n\n") if text else ""

    tag = node.tag
    classes = node.classes

    if tag in {"script", "style", "nav"}:
        return ""
    if "botnav" in classes or "bottom-submit" in classes or "gloss" in classes:
        return ""
    if tag == "div" and "credit" in classes:
        return ""

    if tag == "h2" and "phase-head" in classes:
        phase = ""
        rest = []
        for child in node.children:
            if not isinstance(child, str) and "pnum" in child.classes:
                phase = node_text(child)
            elif isinstance(child, str):
                rest.append(child)
            else:
                rest.append(node_text(child) if "pnum" in child.classes else inline_md(child))
        title = re.sub(r"\s+", " ", "".join(rest)).strip(" —–-")
        return f"## {phase} — {title}\n\n"

    if tag == "h3":
        return f"### {children_md(node).strip()}\n\n"

    if tag == "p" and "q" in classes:
        ctx.pending_question = children_md(node).strip()
        return ""  # emitted with following control

    if tag == "p" and "muted" in classes:
        return f"{children_md(node).strip()}\n{{.muted}}\n\n"

    if tag == "p":
        text = children_md(node).strip()
        return f"{text}\n\n" if text else ""

    if tag == "ul" and ("check" in classes or "tick" in classes):
        return convert_checklist(node, ctx.by_id, ctx.labels_map)

    if tag == "ul" and "needs" in classes:
        return ""  # handled in front matter

    if tag in {"ul", "ol"} and "dosteps" in classes:
        return convert_dosteps(node, ctx)

    if tag in {"ul", "ol"}:
        return convert_simple_list(node)

    if tag == "pre" and "code" in classes:
        return convert_code(node)

    if tag == "table":
        return convert_table(node, ctx.controls_by_key)

    if tag == "figure" or (tag == "div" and any(c.startswith("figrow") for c in classes)):
        figures = []
        if tag == "figure":
            fig = convert_figure(node)
            if fig:
                figures.append(fig)
        else:
            for fig in node.children:
                if isinstance(fig, str) or fig.tag != "figure":
                    continue
                item = convert_figure(fig)
                if item:
                    figures.append(item)
        return emit_figrow(figures)

    if tag == "div" and "chead" in classes:
        heading = re.sub(r"\s+", " ", children_md(node)).strip()
        return f"**{heading}**\n\n"

    if tag == "div" and "thead" in classes:
        heading = re.sub(r"\s+", " ", children_md(node)).strip()
        return f"**{heading}**\n\n"

    if tag == "div" and "callout" in classes:
        return convert_callout(node)

    if tag == "div" and "anat" in classes:
        return convert_anat(node)

    if tag == "div" and "scorepair" in classes:
        return convert_scorepair(node)

    if tag == "div" and "mission" in classes:
        return convert_mission_card(node)

    if tag == "div" and "wcard" in classes:
        return convert_wcard(node, ctx.controls_by_key)

    if tag == "div" and "rangebar" in classes:
        return convert_rangebar(node)

    if tag == "textarea" and node.attrs.get("data-key"):
        key = node.attrs["data-key"]
        label = ctx.controls_by_key.get(key, {}).get("label") or node.attrs.get("aria-label") or key
        if ctx.pending_question is not None:
            q = ctx.pending_question
            ctx.pending_question = None
            return f"{{{{< ask key=\"{key}\" label={yaml_quote(label)} >}}}}{q}{{{{< /ask >}}}}\n\n"
        return f"{{{{< answer key=\"{key}\" label={yaml_quote(label)} >}}}}\n\n"

    if tag == "input" and node.attrs.get("type", "text") == "text" and node.attrs.get("data-key"):
        key = node.attrs["data-key"]
        meta = ctx.controls_by_key.get(key, {})
        label = meta.get("label") or node.attrs.get("aria-label") or key
        ph = meta.get("placeholder") or node.attrs.get("placeholder") or ""
        prompt = ctx.pending_question
        ctx.pending_question = None
        if prompt:
            attrs = f'key="{key}" label={yaml_quote(label)}'
            if ph:
                attrs += f" placeholder={yaml_quote(ph)}"
            return f"{{{{< short-answer {attrs} prompt={yaml_quote(prompt)} >}}}}\n\n"
        attrs = f'key="{key}" label={yaml_quote(label)}'
        if ph:
            attrs += f" placeholder={yaml_quote(ph)}"
        return f"{{{{< short-answer {attrs} >}}}}\n\n"

    if tag == "section" or tag == "div" or tag == "main" or tag == "li":
        parts = []
        for child in node.children:
            parts.append(convert_block(child, ctx))
        return "".join(parts)

    # Fallback: descend
    parts = []
    for child in node.children:
        parts.append(convert_block(child, ctx))
    return "".join(parts)


def extract_meta(main_node, controls_by_key, num: int):
    meta_rows = []
    needs = []
    for node in main_node.walk():
        if getattr(node, "tag", None) == "div" and "meta" in node.classes:
            for row in node.walk():
                if getattr(row, "tag", None) != "div" or "row" not in row.classes:
                    continue
                dt = next((c for c in row.children if not isinstance(c, str) and c.tag == "dt"), None)
                dd = next((c for c in row.children if not isinstance(c, str) and c.tag == "dd"), None)
                if not dt or not dd:
                    continue
                term = node_text(dt)
                if term == "What You Need":
                    for li in dd.walk():
                        if getattr(li, "tag", None) != "li":
                            continue
                        inp = next((c for c in li.walk() if getattr(c, "tag", None) == "input"), None)
                        lab = next((c for c in li.walk() if getattr(c, "tag", None) == "label"), None)
                        if not inp:
                            continue
                        needs.append({"key": inp.attrs["data-key"], "label": label_with_glossary(lab)})
                else:
                    definition = children_md(dd).strip()
                    definition = re.sub(r"\s+", " ", definition)
                    meta_rows.append((term, definition))
            break

    # Standardize order: Project/Strand/Phase/Time then legacy rows then What You Need
    phase_name, _ = PHASES[num]
    phase_short = phase_name.split("·", 1)[-1].strip()
    ordered = [
        ("Project", f"Coding Project {num}"),
        ("Strand", "Coding"),
        ("Phase", phase_short),
        ("Time", "One class period"),
    ]
    for term, definition in meta_rows:
        if term in {"Project", "Strand", "Phase", "Time", "What You Need"}:
            continue
        ordered.append((term, definition))
    return ordered, needs


def extract_hub_desc(num: int) -> tuple[str, str, str]:
    # title/h1/sub from HTML
    text = (SRC / f"project-{num:02d}.html").read_text(encoding="utf-8")
    h1 = re.search(r"<h1>([^<]+)</h1>", text)
    sub = re.search(r'<p class="sub">([^<]+)</p>', text)
    # description from hub cards list we embedded earlier is rebuilt below
    return (
        html_lib.unescape(h1.group(1)) if h1 else f"Coding Project {num}",
        html_lib.unescape(sub.group(1)) if sub else "",
    )


def parse_hub_descriptions():
    hub = (SRC / "index.html").read_text(encoding="utf-8")
    hub = re.sub(r"<script[\s\S]*?</script>", "", hub)
    out = {}
    for m in re.finditer(r'href="(project-(\d+)\.html)">([\s\S]*?)</a>', hub):
        num = int(m.group(2))
        block = m.group(3)
        title = html_lib.unescape(re.search(r'proj-title">([^<]+)', block).group(1))
        desc = html_lib.unescape(re.search(r'proj-desc">([^<]+)', block).group(1))
        out[num] = (title, desc)
    return out


def front_matter(num: int, title: str, sub: str, desc: str, meta_rows, needs) -> str:
    phase, phase_order = PHASES[num]
    card = HUB_CARDS[num - 1]
    mid = f"discovery_coding_{num:02d}"
    lines = [
        "---",
        f'title: "Coding Project {num} — {title}"',
        f'short_title: "Coding Project {num}"',
        f'linkTitle: {yaml_quote(title)}',
        f"description: {yaml_quote(desc)}",
        f"weight: {num}",
        "nav: discovery",
        f"mission_id: {mid}",
        f'mission_title: "Coding Project {num} — {title}"',
        'styles: ["site-base", "worksheet", "syntax", "discovery", "print"]',
        f"project_number: {num}",
        "strand: coding",
        f"phase: {yaml_quote(phase)}",
        f"phase_order: {phase_order}",
        'time: "One class period"',
        f'eyebrow: "Discovery · Coding Project {num}"',
        f"heading: {yaml_quote(title)}",
        f"subheading: {yaml_quote(sub)}",
        'credit: "KIPR · Botball Explorer · Discovery"',
        f"hub_title: {yaml_quote(title)}",
        f"mission_label: {yaml_quote(card['mission_label'])}",
    ]
    if card["no_mission"]:
        lines.append("no_mission: true")
    if card["pace"]:
        # pace is display-only on coding cards in legacy; keep as mission_label context only
        pass
    if num in BUILD_GATES:
        gate = BUILD_GATES[num]
        lines.append("build_gate:")
        lines.append(f"  title: {yaml_quote(gate['title'])}")
        lines.append(f"  description: {yaml_quote(gate['description'])}")
        lines.append(f"  page: {yaml_quote(gate['page'])}")
        lines.append(f"  label: {yaml_quote(gate['label'])}")
    lines.append("meta:")
    for term, definition in meta_rows:
        lines.append(f"  - term: {yaml_quote(term)}")
        lines.append(f"    definition: {yaml_quote(definition)}")
    lines.append('  - term: "What You Need"')
    lines.append("    checklist:")
    for item in needs:
        lines.append(f"      - key: {item['key']}")
        lines.append(f"        label: {yaml_quote(item['label'])}")
    lines.append("---")
    lines.append("")
    return "\n".join(lines)


def apply_project_fixes(num: int, markdown: str) -> str:
    if num == 1:
        markdown = markdown.replace("whe`re", "where")
        # Malformed alt is fixed via figure conversion using corrected alt from exception target
        markdown = markdown.replace(
            'alt: ""Compilation succeeded" — your project is now on the Wombat."',
            'alt: "Compilation succeeded — your project is now on the Wombat."',
        )
        markdown = markdown.replace(
            'alt: "\\"Compilation succeeded\\" — your project is now on the Wombat."',
            'alt: "Compilation succeeded — your project is now on the Wombat."',
        )
    if num == 14:
        # Flashlight guidance correction
        old = re.compile(
            r"It senses infrared, so an \*\*incandescent bulb or a phone flashlight works — a plain LED usually will not\.\*\*",
            re.I,
        )
        new = (
            "Any **moderately powerful flashlight** should work with the light sensor, "
            "including a phone flashlight. Point the light at the sensor and watch the reading change."
        )
        markdown = old.sub(new, markdown)
        # Broader patterns from converter
        markdown = re.sub(
            r"It senses infrared, so an \*\*[^*]+plain LED[^*]+\*\*",
            new,
            markdown,
            flags=re.I,
        )
        markdown = re.sub(
            r"incandescent bulb or a phone flashlight works[^.]*LED usually will not\.",
            "moderately powerful flashlight should work — including a phone flashlight. Focus on pointing it at the sensor.",
            markdown,
            flags=re.I,
        )
    return markdown


def migrate_one(num: int, hub_descs: dict) -> Path:
    path = SRC / f"project-{num:02d}.html"
    raw = path.read_text(encoding="utf-8")
    # Apply source-level CP1 alt fix so figure conversion sees corrected alt when present as broken attr
    if num == 1:
        raw = raw.replace(
            'alt=""Compilation succeeded" — your project is now on the Wombat."',
            'alt="Compilation succeeded — your project is now on the Wombat."',
        )
        raw = raw.replace("whe`re", "where")
    if num == 14:
        raw = re.sub(
            r"It senses infrared, so an <strong>incandescent bulb or a phone flashlight works — a plain LED usually will not\.</strong>",
            "Any <strong>moderately powerful flashlight</strong> should work with the light sensor, "
            "including a phone flashlight. Point the light at the sensor and watch the reading change.",
            raw,
        )

    parser = TreeParser()
    parser.feed(raw)
    nodes = list(parser.root.walk())
    by_id = {n.attrs["id"]: n for n in nodes if n.attrs.get("id")}
    labels_map = {
        n.attrs["for"]: node_text(n)
        for n in nodes
        if n.tag == "label" and n.attrs.get("for")
    }
    inv = inventory_for(num)
    controls_by_key = {c["key"]: c for c in inv["controls"]}

    main = next(n for n in nodes if n.tag == "main")
    # Skip hero; convert sections after meta/pin-reminder
    meta_rows, needs = extract_meta(main, controls_by_key, num)
    title, desc = hub_descs[num]
    _, sub = extract_hub_desc(num)

    ctx = Ctx(by_id, labels_map, controls_by_key, num)
    body_parts = []
    for child in main.children:
        if isinstance(child, str):
            continue
        if child.tag == "div" and "hero" in child.classes:
            continue
        if child.tag == "p" and "print-pin" in child.classes:
            continue
        # First section often only meta + pin reminder
        if child.tag == "section":
            # If section only has meta/pin, skip body emit of those
            only_meta = True
            for grandchild in child.children:
                if isinstance(grandchild, str):
                    continue
                if grandchild.tag == "div" and ("meta" in grandchild.classes or "pin-reminder" in grandchild.classes):
                    continue
                only_meta = False
                body_parts.append(convert_block(grandchild, ctx))
            if only_meta:
                continue
            continue
        body_parts.append(convert_block(child, ctx))

    body = normalize_ws("".join(body_parts))
    body = apply_project_fixes(num, body)
    doc = front_matter(num, title, sub, desc, meta_rows, needs) + "\n" + body
    # Strip stage1 fixture flag by replacing file entirely
    out = OUT / f"project-{num:02d}.md"
    out.write_text(doc, encoding="utf-8")
    return out


def patch_inventory_persistence():
    changed = False
    for page in INV["pages"]:
        m = re.fullmatch(r"coding/project-(\d+)\.html", page["source"])
        if not m:
            continue
        expected = f"discovery_coding_{int(m.group(1)):02d}"
        if page.get("persistence_id") != expected:
            page["persistence_id"] = expected
            changed = True
    if changed:
        (ROOT / "data" / "discovery-legacy-inventory.json").write_text(
            json.dumps(INV, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
        )


def main(argv: list[str]) -> int:
    nums = [int(x) for x in argv[1:]] or list(range(1, 18))
    hub_descs = parse_hub_descriptions()
    patch_inventory_persistence()
    for num in nums:
        out = migrate_one(num, hub_descs)
        print(f"wrote {out.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
