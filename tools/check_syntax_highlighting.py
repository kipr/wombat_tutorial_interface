#!/usr/bin/env python3
"""Verify that built Hugo code blocks are highlighted without changing code."""

from __future__ import annotations

import argparse
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path
import re
import sys


@dataclass
class CodeBlock:
    language: str = ""
    text: list[str] = field(default_factory=list)
    token_classes: set[str] = field(default_factory=set)
    emphasis_count: int = 0
    has_error: bool = False

    @property
    def source(self) -> str:
        return "".join(self.text).rstrip("\n")


class CodeBlockParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.blocks: list[CodeBlock] = []
        self._block: CodeBlock | None = None
        self._wrapper_depth = 0
        self._code_depth = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        classes = set((attributes.get("class") or "").split())

        if self._block is None and tag == "div" and "code" in classes:
            self._block = CodeBlock()
            self._wrapper_depth = 1
            return

        if self._block is None:
            return

        self._wrapper_depth += 1
        self._block.token_classes.update(classes)
        if "code-emphasis" in classes:
            self._block.emphasis_count += 1
        if "err" in classes:
            self._block.has_error = True
        if tag == "code":
            self._code_depth += 1
            self._block.language = attributes.get("data-lang") or next(
                (name.removeprefix("language-") for name in classes if name.startswith("language-")),
                "",
            )

    def handle_endtag(self, tag: str) -> None:
        if self._block is None:
            return
        if tag == "code" and self._code_depth:
            self._code_depth -= 1
        self._wrapper_depth -= 1
        if self._wrapper_depth == 0:
            self.blocks.append(self._block)
            self._block = None

    def handle_data(self, data: str) -> None:
        if self._block is not None and self._code_depth:
            self._block.text.append(data)


def parse_blocks(path: Path) -> list[CodeBlock]:
    parser = CodeBlockParser()
    parser.feed(path.read_text(encoding="utf-8"))
    parser.close()
    return parser.blocks


def fail(errors: list[str], message: str) -> None:
    errors.append(message)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("build", type=Path, help="Hugo destination built with --buildDrafts")
    parser.add_argument(
        "--source",
        type=Path,
        default=Path("content"),
        help="content tree used to count @@…@@ teaching-emphasis markers",
    )
    args = parser.parse_args()

    errors: list[str] = []
    pages = sorted(args.build.rglob("*.html"))
    if not pages:
        fail(errors, f"no HTML pages found below {args.build}")

    blocks_by_page = {page: parse_blocks(page) for page in pages}
    all_blocks = [block for blocks in blocks_by_page.values() for block in blocks]
    if not all_blocks:
        fail(errors, "build contains no .code wrappers")

    for page, blocks in blocks_by_page.items():
        for number, block in enumerate(blocks, 1):
            where = f"{page.relative_to(args.build)} code block {number}"
            if not block.language:
                fail(errors, f"{where} has no language metadata")
            if block.has_error:
                fail(errors, f"{where} contains a Chroma lexer error token")
            if "WOMBATCODEHIGHLIGHT" in block.source:
                fail(errors, f"{where} leaked an internal emphasis placeholder")
            if "@@" in block.source:
                fail(errors, f"{where} leaked an authoring emphasis marker")

    source_markers = 0
    for source in args.source.rglob("*.md"):
        source_markers += len(re.findall(r"@@([^\n]+?)@@", source.read_text(encoding="utf-8")))
    output_emphasis = sum(block.emphasis_count for block in all_blocks)
    if output_emphasis != source_markers:
        fail(
            errors,
            f"teaching-emphasis count differs: source {source_markers}, output {output_emphasis}",
        )

    fixture = args.build / "labs" / "syntax-highlighting-fixture.html"
    if not fixture.exists():
        fail(errors, f"missing {fixture}; build Hugo with --buildDrafts")
    else:
        fixture_blocks = parse_blocks(fixture)
        expected = [
            (
                "c",
                "#include <kipr/wombat.h>\n"
                "int main() {\n"
                "    int speed = 750;  // highlighted value\n"
                "    return 0;\n"
                "}",
                {"cp", "kt", "nf", "mi", "c1"},
            ),
            (
                "python",
                "#!/usr/bin/python3\n"
                "import _kipr as k\n\n"
                "@staticmethod\n"
                "def report(score: int) -> str:\n"
                '    message = f"Score: {score}"\n'
                "    return message  # highlighted name",
                {"ch", "kn", "nf", "s2", "c1"},
            ),
            (
                "python",
                "def drive(speed):\n"
                "    k.motor(0, speed)",
                {"k", "nf", "mi"},
            ),
        ]
        if len(fixture_blocks) != len(expected):
            fail(errors, f"fixture has {len(fixture_blocks)} code blocks, expected {len(expected)}")
        for number, (block, (language, source, tokens)) in enumerate(
            zip(fixture_blocks, expected), 1
        ):
            if block.language != language:
                fail(errors, f"fixture block {number} language is {block.language!r}, expected {language!r}")
            if block.source != source:
                fail(errors, f"fixture block {number} copied text differs from its source")
            missing = tokens - block.token_classes
            if missing:
                fail(errors, f"fixture block {number} is missing Chroma token classes {sorted(missing)}")
        if sum(block.emphasis_count for block in fixture_blocks) != 3:
            fail(errors, "fixture should contain exactly three token-emphasis spans")

    fixture_markup = fixture.read_text(encoding="utf-8") if fixture.exists() else ""
    if "css/syntax.css" not in fixture_markup:
        fail(errors, "fixture page does not link the syntax stylesheet")

    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        return 1

    languages = sorted({block.language for block in all_blocks})
    print(
        f"syntax highlighting OK: {len(all_blocks)} blocks, "
        f"{output_emphasis} emphasized tokens, languages {', '.join(languages)}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
