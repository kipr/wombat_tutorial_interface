# Content authoring

## Choose the closest page family

There is no universal worksheet schema. Copy a nearby page of the same family
and track, then change its content. `archetypes/discovery.md` is a useful
starting point for a Discovery project; the default Hugo archetype creates only
a title, date, and draft flag.

Copying front matter alone does not necessarily preserve rendering. Hugo
normally infers a page's `type` from its content section, while `layout` only
names a template within that type. If a page is moved outside its original
section, either give it the same explicit `type` because it truly belongs to
that page family, or add a renderer for its new family. For example, a
top-level leaf bundle that intentionally uses the Explorer rules renderer
needs:

```yaml
type: botball_explorer_2026
layout: rules
```

Choose the filename according to the page being authored:

- use `name.md` for an ordinary page;
- use `name/index.md` for a leaf bundle when the page owns colocated resources;
- use `name/_index.md` for a section or other branch bundle with child pages.

Both `name.md` and `name/index.md` normally publish at `/name/`; `_index.md`
changes the page kind and is not a substitute for `index.md`. See
[Content paths, page kinds, and template lookup](architecture.md#content-paths-page-kinds-and-template-lookup)
for the complete lookup caveat.

### C and Python labs

Lab pages live in `content/labs/` and `content/python_labs/`. Python's section
cascade sets `type: labs`, so both tracks share layouts. Typical page front
matter contains:

- `title`, `short_title`, `description`, `weight`, and `hub_unit` for the hub;
- `nav` and `track` (`c` or `python`);
- stable `mission_id` for persistence and exported filenames;
- `eyebrow`, `heading`, `subheading`, and `credit` for the worksheet shell;
- `meta`, usually including purpose/concepts/context and "What You Need"; and
- an optional `sidebar` heading range.

Set `hide_botnav: true` only on a standalone worksheet shared across sections.
This prevents the previous/next renderer from treating unrelated root pages as
siblings; the main site navigation remains available.

The two tracks mirror the same curriculum and interaction keys. Preserve the
teaching sequence and `data-key` contract when adapting C prose/code to Python.

### Discovery projects

Projects use clean paths such as
`content/discovery/coding/project-03.md`. Their build-enforced identity fields
are:

- `title`, `short_title`, `description`, `weight`;
- `mission_id`, `styles`, `project_number`, and `strand`;
- `phase`, `phase_order`, and `time`;
- `eyebrow`, `heading`, `subheading`, and `credit`; and
- `meta` with exactly one non-empty, structured `What You Need` checklist.

`weight` must equal the project number. Coding has 17 projects, Systems has 14,
filenames are zero-padded, persistence IDs use
`discovery_<strand>_<two-digit-number>`, and project styles must be exactly:

```yaml
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
```

Optional hub metadata includes `hub_title`, `mission_label`, `no_mission`,
`build_project`, `pace`, and a between-phase `build_gate`. A gate's `page` is a
lowercase Hugo page reference and must resolve.

### Explorer missions

Each mission is a leaf bundle named `mission-N` with `index.md` and one
explanatory video. The required identity is `layout: mission`,
`mission_number: N`, and `weight: N`; `video` names an existing video resource
in the bundle. `tiers` must be ordered `base`, `bonus`, then optional
`advanced`. Each tier supplies positive integer `points`, difficulty 1-8,
judging `live` or `final`, and a description.

H.264 video in an MP4 container is the preferred single-file delivery format.
The mission renderer infers the source MIME type from the named page resource,
so a future format change does not require layout markup changes.

Every mission body uses `score-examples` followed by ordinary `## Judge Notes`.
The mission front matter is canonical for mission cards and any
`mission-summary` embedded elsewhere.

### Rules and glossary

Rules prose lives in `content/botball_explorer_2026/rules.md`. Keep official
definition bodies in `data/glossary.yaml` with `source: rules`, and insert them
with `rule-definition`.

Curriculum definitions use an uppercase lookup key plus `title` and `body`.
Optional `python` wording overrides the C/default definition. True homonyms use
named `senses`; unresolved editorial conflicts belong in
`data/glossary-conflicts.yaml` until a human chooses the canonical wording.

### Educator resources and standards correlations

The Educator Resources hub lives at `content/resources/`. Its front-matter
cards define exactly one lowercase Hugo `page` reference or literal static
`url`; set `download: true` for downloadable files.

The Standards Correlations page lives at `content/standards-correlations/` and
uses `download_directory: standards-correlations`. To publish a new state
workbook, drop `{State_Name}_CS1_State_Standards.xlsx` into
`static/standards-correlations/` (underscores in the filename become spaces in
the label). Keep the single `ISTE_Standards.xlsx` file. Do not add a YAML
catalog or a Markdown page per state; unexpected filenames fail the build.

## Structure and voice

The site addresses students directly in plain, concrete language. Match these
patterns:

- lead with an observable task, question, or goal;
- use "you" and "your robot," short paragraphs, and active instructions;
- explain abstractions through physical analogies before formal vocabulary;
- scaffold work as predict/try, learn, plan, build, test, record, and reflect;
- make safety directions explicit and explain the consequence;
- ask one focused question per response field and supply a useful accessible
  `label`, not merely "answer"; and
- distinguish what the machine literally does from what a student intended.

C/Python labs normally use `## Overview`, numbered `## Phase N --- ...`
sections, and `## Extension Challenges`. Discovery projects use the exact
level-two family `Try It`, `Learn It`, `Do It`, and, when authored, `Score It`.
The heading render hook supplies the visual phase badge; do not hand-code it.

Punctuation rules differ by where the text lives:

- **Front matter** is not run through Goldmark, so write the final characters
  there: curly quotes, en/em dashes (`–` / `—`), and ellipses (`…`).
- **Markdown prose** (page bodies and shortcode Markdown) uses plain ASCII
  (`"`, `'`, `--`, `---`, `...`). Typographer converts those on render.

All-caps glossary display is reserved mainly for official competition terms.

## Markdown conventions

Prefer ordinary Markdown for prose, lists, static tables, and code fences that
need neither a filename nor teaching emphasis. Use fenced blocks with an
explicit Chroma language; use `text {.console}` for console output.

Displayed C examples use Allman-style curly braces, with each brace on its own
line, and literal tabs for indentation. The syntax stylesheet displays tabs at
four columns.

Block attributes go on their own line after the paragraph or list:

```markdown
This note is quieter than the surrounding instructions.
{.muted}
```

Do not author raw HTML in Markdown, shortcode bodies, or front matter. Use
Markdown emphasis, block attributes such as `{.muted}`, or a shared shortcode
from the catalog. Goldmark is configured with `unsafe = false`, so raw HTML is
escaped rather than emitted.

Panel shortcodes take a Markdown body. Use `{{< >}}` delimiters (not
`{{% %}}`) so Goldmark does not re-parse the panel HTML. The shortcode renders
the body with `RenderString`:

```markdown
{{< callout title="Core Insight" >}}
Markdown is rendered inside this panel.
{{< /callout >}}
```

Use the same `{{< >}}` form for YAML-bodied widgets and field components. YAML
strings containing Markdown, colons, or special punctuation are safest when
quoted.

## References and links

Reference canonical data instead of copying it:

```text
[[ENCODER]]
[[ENCODER|encoders]]
[[PROTOTYPE:design|prototype]]
[[@2|Mission 2]]
[[@2:bonus|Mission 2 bonus]]
```

Unknown terms, senses, missions, and tiers fail the build. Python pages select
Python definition wording when one exists. The page payload includes only the
glossary entries that page uses.

In front matter and navigation data, use lowercase Hugo page references such
as `/labs`, `/python_labs`, `/discovery`, and `/glossary`. Use a literal URL
only for a non-Hugo static target such as `score.html`; do not write legacy
`.html` URLs for content pages.

## Fields, assets, print, and accessibility

A field's `key` becomes `data-key` and stored/exported data. Do not rename,
reuse, or "clean up" an existing key during editorial work. Renderers derive
DOM IDs from keys; authors should not supply IDs.

Every input needs a meaningful visible label or renderer-provided accessible
name. Every figure needs accurate `alt`; `figrow` uses it as the caption unless
`caption` is supplied. Do not put instructions that are essential to a printed
worksheet inside `.no-print`; use `noprint=true` only for genuinely
interactive-only material.

For a shared `figrow` image, write its path below `static/img/`, for example
`kit/assembly/step-01a.jpg`. For a project-owned figure, colocate it in the
project's content section and use its bare filename. Put a mission video in the
mission bundle and name it with the mission's top-level `video` front-matter
field.

## Author checklist

- Copy the nearest same-family page and preserve stable identity/key fields.
- When copying across content sections, verify the inferred or explicit `type`
  still selects an existing layout.
- Use the established heading sequence and student-facing voice.
- Reuse a shortcode from the catalog; do not add authored raw HTML.
- Resolve glossary, mission, image, page, and stylesheet references.
- Check screen and print meaning, labels, alt text, keyboard behavior, and
  duplicate keys/IDs.
- Build and run the relevant checks from [development.md](development.md).
