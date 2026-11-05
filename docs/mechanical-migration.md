# Mechanical Design migration

The authored curriculum lives under `content/mechanical/`. It was imported from
[`rclement-afk/Wombat-Tutorial-Interface`, `docs/Mechanical_Challenges`](https://github.com/rclement-afk/Wombat-Tutorial-Interface/tree/43754cfdd82b268b242bdf13abbbc557544fd299/docs/Mechanical_Challenges)
at commit `43754cfdd82b268b242bdf13abbbc557544fd299`.

## Conversion and review

The first pass used Pandoc 3.6.4 (`--from=html+raw_html --to=gfm-raw_html
--wrap=none`). Preprocessing isolated worksheet content, metadata, fields,
panels, diagrams, and video targets from the legacy shell. Pandoc converted the
prose, lists, and static tables before the results were corrected as authored
Markdown. Do not regenerate the pages over subsequent editorial changes.

Manual corrections restored table headings, separated formula notes, decoded
entities in standalone SVG labels, and replaced response widgets with existing
shortcodes. The original `buildTrials` scripts were evaluated against a small
mock document to capture their ten trial rows. These contributed 990 fields
that are absent from the original HTML markup. Explicit `gridtable` rows retain
their original keys and accessible labels without changing the shared table
renderer. Numbered plan fields use `steps`.

The section reuses `labs` layouts and existing shortcodes; it adds no renderer.
Original persistence IDs and all 2,401 field keys, types, labels, and initial
values remain intact. The 56 inline diagrams became section-owned SVG resources
shown with `figrow`, retaining captions and alternative text. Nineteen video
targets use Hugo's built-in YouTube shortcode and privacy-enhanced embeds;
the unfilmed survey clip in Challenge 15 retains its placeholder directions.
Video frames are omitted from print while captions and instructions remain.

Definitions are canonical in `data/glossary.yaml`. Existing terms keep their
definitions; new mechanical terms consolidate repeated definitions from the
source sheets. `SLOT:mechanical` distinguishes a physical slot from a program
slot. Shared download instructions accurately describe saving answers locally
and giving the file to the teacher.

## Available source material

The upstream directory contains 28 worksheets: Challenges 1–24, a gear-mounting
PreLab, Design Projects A and B, and an older lift worksheet named
`mech02_lift.html`. Both that worksheet and `projectB_lift.html` are preserved
under separate identities. The older lift is listed as a supplementary activity.

The upstream index advertises Challenges 25–28, but their files are absent:

- The String-Driven Extension Arm
- The Shaft Rotation Limiter
- Keeping Direction the Same While in Rotation
- The Pom Dispenser

The Hugo hub explains their availability and does not create broken links or
invent replacement lessons. References within the supplied worksheets remain
as authored, including references to older challenge sequences.

## Verification contract

`data/mechanical-legacy-inventory.json` freezes the source text blocks, field
inventory (including generated rows), persistence IDs, diagram labels and
captions, glossary references, and video targets. It is source evidence, not a
snapshot to regenerate to make a check pass.

After a fresh draft-inclusive Hugo build, run:

```sh
node tests/test_mechanical_migration.js "$build_dir"
node tools/check_internal_links.js "$build_dir"
node tests/test_lab_persistence.js
node tests/test_glossary_dialog.js
```

The migration check compares all worksheets with the frozen evidence, including
every original prose block, diagram label, input label, prefilled unit, and hub
link. The standard development checks and CI run it against the full build.
