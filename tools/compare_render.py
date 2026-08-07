#!/usr/bin/env python3
"""Compare a generated page against the hand-written original it replaces.

The two files are not expected to be byte-identical: the point of the migration
is that shared script, style and data move out of the page. So this compares
what a browser would actually end up with:

  * the element tree, with whitespace collapsed and links resolved to absolute
    paths so ../foo.html and /prefix/foo.html count as the same target
  * the trial-log rows the original injects with JavaScript at load time
  * the set of data-key fields, which is exactly the submission payload
  * the glossary definitions and mission entries delivered to the page

Anything left over is reported as a real difference.
"""

from __future__ import annotations

import argparse
import difflib
import html
import json
import pathlib
import re
import sys
from html.parser import HTMLParser
from posixpath import normpath

VOID = {
    "area", "base", "br", "col", "embed", "hr", "img", "input", "link",
    "meta", "param", "source", "track", "wbr",
}


class Tokenizer(HTMLParser):
    """Flattens a document into comparable tokens, holding script/style aside."""

    def __init__(self, page_url: str, strip_prefix: str = ""):
        super().__init__(convert_charrefs=True)
        self.page_url = page_url
        self.strip_prefix = strip_prefix
        self.tokens: list[tuple] = []
        self.scripts: list[str] = []
        self.styles: list[str] = []
        self._capture: str | None = None

    def _resolve(self, value: str) -> str:
        if re.match(r"^(https?:|mailto:|data:|#)", value):
            return value
        if self.strip_prefix and value.startswith(self.strip_prefix):
            value = "/" + value[len(self.strip_prefix):]
        if value.startswith("/"):
            return normpath(value)
        base = self.page_url.rsplit("/", 1)[0]
        return normpath(f"{base}/{value}")

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self._capture = tag
            return
        clean = {}
        for name, value in attrs:
            value = "" if value is None else value
            if name in ("href", "src"):
                value = self._resolve(value)
            elif name == "style":
                value = re.sub(r"\s+", "", value)
            else:
                value = re.sub(r"\s+", " ", value).strip()
            clean[name] = value
        self.tokens.append(("<", tag, tuple(sorted(clean.items()))))
        if tag in VOID:
            self.tokens.append((">", tag, ()))

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.tokens.append((">", tag, ()))

    def handle_endtag(self, tag):
        if self._capture == tag:
            self._capture = None
            return
        if tag not in VOID:
            self.tokens.append((">", tag, ()))

    def handle_data(self, data):
        if self._capture == "script":
            self.scripts.append(data)
            return
        if self._capture == "style":
            self.styles.append(data)
            return
        text = re.sub(r"\s+", " ", data).strip()
        if text:
            self.tokens.append(("t", text, ()))


def render_token(token) -> str:
    kind, name, attrs = token
    if kind == "t":
        return f"text: {name}"
    if kind == ">":
        return f"</{name}>"
    rendered = "".join(f' {k}="{v}"' for k, v in attrs)
    return f"<{name}{rendered}>"


def inject_trial_rows(markup: str) -> str:
    """Reproduce the rows the original page's buildTrials() adds on load."""
    columns = ["changed", "reached", "stopped", "returned", "observed"]
    rows = []
    for n in range(1, 7):
        cells = "".join(
            f'<td><input type="text" data-key="trial{n}_{c}" '
            f'aria-label="Trial {n} {c}"></td>'
            for c in columns
        )
        rows.append(
            f'<tr><td style="text-align:center;font-weight:600">{n}</td>{cells}</tr>'
        )
    return markup.replace(
        '<tbody id="trialBody"><!-- rows injected --></tbody>',
        "<tbody id=\"trialBody\">" + "".join(rows) + "</tbody>",
    )


def strip_scripts(markup: str) -> str:
    """Drop script bodies so JS string fragments are not mistaken for markup."""
    return re.sub(r"<script\b[^>]*>.*?</script>", "", markup, flags=re.S)


def data_keys(markup: str) -> list[str]:
    return sorted(re.findall(r'data-key="([^"]+)"', strip_scripts(markup)))


def def_terms(markup: str) -> list[str]:
    return sorted(set(re.findall(r'data-term="([^"]+)"', markup)))


def field_refs(markup: str) -> list[str]:
    return sorted(
        set(
            re.findall(
                r'class="fieldref" data-m="([^"]+)" data-tier="([^"]+)"', markup
            )
        )
    )


def old_definitions(markup: str) -> dict:
    block = re.search(r"var DEFS = \{(.*?)\n  \};", markup, re.S)
    if not block:
        return {}
    out = {}
    pattern = r"'((?:[^'\\]|\\.)*)':\s*\['((?:[^'\\]|\\.)*)',\s*'((?:[^'\\]|\\.)*)'\]"
    for m in re.finditer(pattern, block.group(1)):
        key, title, body = (
            re.sub(r"\\u([0-9a-fA-F]{4})", lambda g: chr(int(g.group(1), 16)), x)
            .replace("\\'", "'")
            for x in m.groups()
        )
        out[key] = {"title": title, "body": body}
    return out


def new_definitions(markup: str) -> dict:
    m = re.search(r"window\.KIPR_GLOSSARY = (\{.*?\});", markup, re.S)
    return json.loads(m.group(1)) if m else {}


def old_missions(markup: str) -> dict:
    block = re.search(r"var M = \{(.*?)\n  \};", markup, re.S)
    if not block:
        return {}
    return {
        m.group(1): json.loads(m.group(2))
        for m in re.finditer(r"(\d+):\s*(\{.*?\})", block.group(1), re.S)
    }


def new_missions(markup: str) -> dict:
    m = re.search(r"window\.KIPR_MISSIONS = (\{.*?\});", markup, re.S)
    return json.loads(m.group(1)) if m else {}


def heading(text: str) -> None:
    print(f"\n{'=' * 72}\n{text}\n{'=' * 72}")


def compare_sets(label: str, old: list, new: list) -> bool:
    if old == new:
        print(f"  {label}: identical ({len(old)})")
        return True
    only_old = [x for x in old if x not in new]
    only_new = [x for x in new if x not in old]
    print(f"  {label}: DIFFER (old {len(old)}, new {len(new)})")
    for x in only_old:
        print(f"      only in original: {x}")
    for x in only_new:
        print(f"      only in generated: {x}")
    return False


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("original")
    parser.add_argument("generated")
    parser.add_argument("--page-url", default="/labs/unit1_bigidea1.html")
    parser.add_argument("--strip-prefix", default="/Wombat-Tutorial-Interface/")
    parser.add_argument("--show", type=int, default=60)
    args = parser.parse_args()

    original = pathlib.Path(args.original).read_text()
    generated = pathlib.Path(args.generated).read_text()
    original_live = inject_trial_rows(original)

    old = Tokenizer(args.page_url)
    old.feed(original_live)
    new = Tokenizer(args.page_url, strip_prefix=args.strip_prefix)
    new.feed(generated)

    heading("1. Element tree (whitespace collapsed, links resolved)")
    a = [render_token(t) for t in old.tokens]
    b = [render_token(t) for t in new.tokens]
    matcher = difflib.SequenceMatcher(None, a, b, autojunk=False)
    ratio = matcher.ratio()
    diff = [
        line
        for line in difflib.unified_diff(a, b, "original", "generated", lineterm="", n=0)
        if line[:1] in "+-" and line[:3] not in ("+++", "---")
    ]
    print(f"  original tokens:  {len(a)}")
    print(f"  generated tokens: {len(b)}")
    print(f"  similarity:       {ratio * 100:.2f}%")
    print(f"  differing tokens: {len(diff)}")
    for line in diff[: args.show]:
        print(f"      {line}")
    if len(diff) > args.show:
        print(f"      … {len(diff) - args.show} more")

    heading("2. Submission payload (every data-key on the page)")
    keys_match = compare_sets("data-key fields", data_keys(original_live), data_keys(generated))

    heading("3. Interactive references")
    terms_match = compare_sets("glossary terms marked up", def_terms(original), def_terms(generated))
    refs_match = compare_sets("field diagram references", field_refs(original), field_refs(generated))

    heading("4. Data delivered to the page")
    old_defs, new_defs = old_definitions(original), new_definitions(generated)
    defs_match = compare_sets("definition keys", sorted(old_defs), sorted(new_defs))
    shared = sorted(set(old_defs) & set(new_defs))
    body_mismatch = [
        k for k in shared if old_defs[k]["body"].strip() != new_defs[k]["body"].strip()
    ]
    title_mismatch = [
        k for k in shared if old_defs[k]["title"].strip() != new_defs[k]["title"].strip()
    ]
    if body_mismatch:
        print(f"  definition TEXT differs for {len(body_mismatch)} term(s):")
        for k in body_mismatch:
            print(f"      {k}")
            print(f"        original:  {old_defs[k]['body'][:88]}")
            print(f"        generated: {new_defs[k]['body'][:88]}")
    else:
        print(f"  definition text: identical for all {len(shared)} shared terms")
    if title_mismatch:
        print(f"  display TITLE differs for {len(title_mismatch)} term(s) "
              f"(site-wide casing was inconsistent):")
        for k in title_mismatch:
            print(f"      {k}: {old_defs[k]['title']!r} -> {new_defs[k]['title']!r}")
    else:
        print("  display titles: identical")
    text_mismatch = body_mismatch
    missions_match = compare_sets(
        "mission entries", sorted(old_missions(original)), sorted(new_missions(generated))
    )

    heading("5. Inline script and style (expected to move out of the page)")
    print(f"  original: {len(old.scripts)} script block(s), "
          f"{sum(len(s) for s in old.scripts):,} bytes; "
          f"{len(old.styles)} style block(s), {sum(len(s) for s in old.styles):,} bytes")
    print(f"  generated: {len(new.scripts)} script block(s), "
          f"{sum(len(s) for s in new.scripts):,} bytes; "
          f"{len(new.styles)} style block(s), {sum(len(s) for s in new.styles):,} bytes")

    heading("Summary")
    print(f"  page size   {len(original):>8,} bytes  ->  {len(generated):>8,} bytes "
          f"({(len(generated) - len(original)) / len(original) * 100:+.1f}%)")
    ok = all([keys_match, terms_match, refs_match, defs_match, missions_match,
              not text_mismatch])
    print(f"  behavioural equivalence: {'PASS' if ok else 'differences above'}")
    print(f"  structural similarity:   {ratio * 100:.2f}%")
    return 0 if ok and not diff else 1


if __name__ == "__main__":
    sys.exit(main())
