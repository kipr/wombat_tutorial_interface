#!/usr/bin/env python3
"""Validate the generated 2026 Explorer hierarchy and its stable contracts."""

from __future__ import annotations

import argparse
import collections
import pathlib
import re
import sys
from html.parser import HTMLParser
from urllib.parse import urlparse


EXPECTED_TIERS = {
    1: (("base", 1, 1, "live"), ("bonus", 1, 1, "live")),
    2: (("base", 1, 1, "live"), ("bonus", 3, 2, "live")),
    3: (("base", 7, 4, "live"), ("bonus", 9, 5, "live"), ("advanced", 13, 7, "live")),
    4: (("base", 3, 2, "live"), ("bonus", 5, 3, "live")),
    5: (("base", 9, 5, "live"), ("bonus", 11, 6, "live")),
    6: (("base", 15, 8, "live"), ("bonus", 7, 4, "final")),
    7: (("base", 11, 6, "final"), ("bonus", 9, 5, "final")),
    8: (("base", 11, 6, "final"), ("bonus", 9, 5, "final")),
    9: (("base", 7, 4, "live"), ("bonus", 9, 5, "live")),
    10: (("base", 1, 1, "live"), ("bonus", 1, 1, "live")),
    11: (("base", 7, 4, "final"), ("bonus", 7, 4, "final")),
    12: (("base", 11, 6, "live"), ("bonus", 5, 3, "final")),
    13: (("base", 1, 1, "live"), ("bonus", 7, 4, "live"), ("advanced", 13, 7, "final")),
    14: (("base", 3, 2, "live"), ("bonus", 7, 4, "final")),
    15: (("base", 9, 5, "final"), ("bonus", 9, 5, "final")),
    16: (("base", 9, 5, "final"), ("bonus", 11, 6, "final")),
    17: (("base", 9, 5, "final"), ("bonus", 11, 6, "final")),
    18: (("base", 11, 6, "final"), ("bonus", 13, 7, "final"), ("advanced", 15, 8, "final")),
}

RULE_SECTION_IDS = (
    "overview", "format", "robots", "procedures", "scoring",
    "definitions", "field", "inspection", "governance",
)

RULE_DEFINITIONS = (
    "Two objects are TOUCHING only when in direct physical contact. Contact through a robot, attachment, field element, or another game object does not count.",
    "An object is ON TOP OF another when in direct contact with the uppermost surface of the target. If there is no horizontal upper surface, the surface closest to horizontal is used. Additional support from a robot, field element, or structure is permitted unless a mission says otherwise.",
    "An object is IN a container, enclosure, basket, or zone when any portion extends into its interior space, unless a mission says otherwise.",
    "An object is OFF a line, tape, boundary, or zone edge when no portion is touching it.",
    "A robot is IN A ZONE when touching the specified zone and not touching any black line boundary or adjacent zone.",
    "Two or more conditions are SIMULTANEOUS if all are true at the same moment. No minimum duration is required unless a mission specifies one.",
    "An object or robot is FULLY WITHIN an area when every part lies inside the interior vertical projection of that area’s boundaries.",
    "A Controlled Object is any game object being carried, lifted, supported, restrained, held, pushed, pulled, trapped, or otherwise actively manipulated by a robot. Brief incidental contact does not constitute control.",
    "A robot is in a LEGAL STARTING POSITION when fully within the vertical projection of any starting box and otherwise compliant with all starting requirements.",
)

LAB_SECTION_IDS = (
    "overview",
    "phase-1--activate-the-literal-robot",
    "phase-2--concept-what-is-an-algorithm",
    "phase-3--plan",
    "phase-4--build--run",
    "phase-5--debug",
    "phase-6--connect-the-ai-literacy-bridge",
    "phase-7--individual-reflection",
    "extension-challenges",
)


class Node:
    def __init__(self, tag="", attrs=(), parent=None):
        self.tag = tag
        self.attrs = dict(attrs)
        self.parent = parent
        self.children = []

    def has_class(self, name):
        return name in self.attrs.get("class", "").split()

    def walk(self):
        for child in self.children:
            if isinstance(child, Node):
                yield child
                yield from child.walk()

    def all(self, tag=None, class_name=None):
        return [
            node for node in self.walk()
            if (tag is None or node.tag == tag)
            and (class_name is None or node.has_class(class_name))
        ]

    def find(self, tag=None, class_name=None):
        return next(iter(self.all(tag, class_name)), None)


class DocumentParser(HTMLParser):
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

    def handle_endtag(self, tag):
        node = self.current
        while node is not self.root and node.tag != tag:
            node = node.parent
        if node is not self.root:
            self.current = node.parent

    def handle_data(self, data):
        self.current.children.append(data)


def parse(path):
    parser = DocumentParser()
    parser.feed(path.read_text())
    return parser.root


def text(node):
    if node is None:
        return ""
    value = "".join(
        child if isinstance(child, str) else text(child) for child in node.children
    )
    return re.sub(r"\s+", " ", value).strip()


def fail(errors, message):
    errors.append(message)


def sidebar_targets(markup):
    return re.findall(r'data-sidebar-target="([^"]+)"', markup)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("build_dir", type=pathlib.Path)
    args = parser.parse_args()
    build = args.build_dir.resolve()
    explorer = build / "botball_explorer_2026"
    errors = []

    expected_pages = [explorer / "index.html", explorer / "rules" / "index.html"]
    expected_pages += [
        explorer / "missions" / f"mission-{number}" / "index.html"
        for number in range(1, 19)
    ]
    for path in expected_pages:
        if not path.is_file():
            fail(errors, f"missing generated page: {path.relative_to(build)}")
    for path in (build / "2026-missions.html", build / "rules.html", explorer / "missions" / "index.html"):
        if path.exists():
            fail(errors, f"obsolete output exists: {path.relative_to(build)}")
    if errors:
        for error in errors:
            print(f"ERROR {error}")
        return 1

    index_markup = expected_pages[0].read_text()
    if index_markup.count('class="explorer-mission-card"') != 18:
        fail(errors, "explorer index does not contain 18 mission cards")

    for number, tiers in EXPECTED_TIERS.items():
        path = explorer / "missions" / f"mission-{number}" / "index.html"
        markup = path.read_text()
        document = parse(path)
        ids = collections.Counter(node.attrs["id"] for node in document.walk() if "id" in node.attrs)
        duplicate_ids = sorted(key for key, count in ids.items() if count > 1)
        if duplicate_ids:
            fail(errors, f"mission {number} has duplicate IDs: {duplicate_ids}")
        tier_nodes = document.all(class_name="explorer-tier")
        found_ids = tuple(node.attrs.get("id") for node in tier_nodes)
        expected_ids = tuple(tier[0] for tier in tiers)
        if found_ids != expected_ids:
            fail(errors, f"mission {number} tier order {found_ids}, expected {expected_ids}")
        videos = document.all("video", class_name="explorer-mission-video-player")
        if len(videos) != 1:
            fail(errors, f"mission {number} must contain one explanatory video")
        else:
            video = videos[0]
            for attribute in ("controls", "playsinline"):
                if attribute not in video.attrs:
                    fail(errors, f"mission {number} video is missing {attribute}")
            if video.attrs.get("width") != "1280" or video.attrs.get("height") != "720":
                fail(errors, f"mission {number} video dimensions are not 1280x720")
            sources = video.all("source")
            if len(sources) != 1:
                fail(errors, f"mission {number} video must contain one source")
            else:
                source = sources[0]
                resource_name = pathlib.PurePosixPath(
                    urlparse(source.attrs.get("src", "")).path
                ).name
                if not resource_name or not (path.parent / resource_name).is_file():
                    fail(errors, f"mission {number} video source does not resolve")
                if not source.attrs.get("type", "").startswith("video/"):
                    fail(errors, f"mission {number} source does not have a video MIME type")
        if document.all(class_name="figure-card"):
            fail(errors, f"mission {number} still contains field-diagram figures")
        for tier_id, points, difficulty, judging in tiers:
            tier = next((node for node in tier_nodes if node.attrs.get("id") == tier_id), None)
            score = tier.find(class_name="explorer-tier-score") if tier else None
            score_text = text(score)
            for expected in (f"{points} {'pt' if points == 1 else 'pts'}", f"Difficulty {difficulty}", f"{judging.title()} judged"):
                if expected not in score_text:
                    fail(errors, f"mission {number} {tier_id} is missing {expected!r}")
        maximum = sum(tier[1] for tier in tiers)
        if f"{maximum} pts" not in text(document.find(class_name="explorer-summary-max")):
            fail(errors, f"mission {number} maximum is not {maximum}")
        if markup.count('class="score-comparison"') != 1:
            fail(errors, f"mission {number} must contain one score comparison")
        has_notice = bool(document.all(class_name="panel"))
        if has_notice != (number in {11, 14, 15}):
            fail(errors, f"mission {number} special-notice state is incorrect")

    rules_path = explorer / "rules" / "index.html"
    rules_markup = rules_path.read_text()
    rules_doc = parse(rules_path)
    rules_ids = [node.attrs["id"] for node in rules_doc.walk() if "id" in node.attrs]
    if len(rules_ids) != len(set(rules_ids)):
        fail(errors, "rules page contains duplicate IDs")
    rules_body = rules_doc.find(class_name="explorer-rules-body")
    section_ids = tuple(node.attrs.get("id") for node in rules_body.all("h2"))
    if section_ids != RULE_SECTION_IDS:
        fail(errors, f"rules section IDs/order are {section_ids}")
    targets = sidebar_targets(rules_markup)
    if collections.Counter(targets) != collections.Counter({key: 2 for key in RULE_SECTION_IDS}):
        fail(errors, "rules desktop/mobile sidebar targets are incorrect")
    if rules_markup.count('<ol class="document-sidebar-list">') != 2 or "&lt;ol" in rules_markup:
        fail(errors, "rules sidebars are not rendered as ordered lists")
    if rules_markup.count("<details>") != 1 or "<details open" in rules_markup:
        fail(errors, "rules mobile sidebar is not a single closed details menu")
    definitions = tuple(text(node) for node in rules_doc.all(class_name="rule-definition"))
    if definitions != RULE_DEFINITIONS:
        fail(errors, "rendered rule definitions differ from canonical wording")
    if rules_markup.count('class="score-comparison"') != 7:
        fail(errors, "rules page must contain seven non-empty score comparisons")

    for match in re.finditer(r'class="mission-ref" href="([^"]*mission-(\d+)/#(base|bonus|advanced))"', rules_markup):
        _, number_text, tier = match.groups()
        target = explorer / "missions" / f"mission-{int(number_text)}" / "index.html"
        if not target.is_file() or f'id="{tier}"' not in target.read_text():
            fail(errors, f"unresolved rules mission reference: {match.group(1)}")

    lab_path = build / "labs" / "unit1_bigidea1" / "index.html"
    lab_markup = lab_path.read_text()
    lab_targets = sidebar_targets(lab_markup)
    if collections.Counter(lab_targets) != collections.Counter({key: 2 for key in LAB_SECTION_IDS}):
        fail(errors, "Lab 1.1 desktop/mobile sidebar targets are incorrect")
    if lab_markup.count('<ul class="document-sidebar-list">') != 2 or "&lt;ul" in lab_markup:
        fail(errors, "Lab 1.1 sidebars are not rendered as unordered lists")
    if lab_markup.count("<details>") != 1 or "<details open" in lab_markup:
        fail(errors, "Lab 1.1 mobile sidebar is not a single closed details menu")
    lab_ids = re.findall(r'\bid="([^"]+)"', lab_markup)
    if len(lab_ids) != len(set(lab_ids)):
        fail(errors, "Lab 1.1 contains duplicate IDs")

    prelab_markup = (build / "labs" / "prelab0" / "index.html").read_text()
    if prelab_markup.count('class="figure-zoom"') != 21:
        fail(errors, "PreLab 0 does not contain 21 keyboard figure controls")
    if len(re.findall(r'data-key="part_[^"]+"', prelab_markup)) != 21:
        fail(errors, "PreLab 0 inventory submission keys changed")

    all_explorer = "\n".join(path.read_text() for path in expected_pages)
    forbidden = ("KIPR_MISSIONS", "fldOverlay", "fieldref", "data-img-base")
    for token in forbidden:
        if token in all_explorer:
            fail(errors, f"obsolete field-popup token remains: {token}")
    if re.search(r"\sstyle=|\son[a-z]+=", all_explorer):
        fail(errors, "Explorer output contains an inline style or event handler")
    if 'class="document-sidebar-link is-active"' in all_explorer:
        fail(errors, "sidebar active state was emitted without scrollspy")

    if errors:
        for error in errors:
            print(f"ERROR {error}")
        return 1
    print("Explorer migration validation passed: 20 pages, 18 missions, 18 videos.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
