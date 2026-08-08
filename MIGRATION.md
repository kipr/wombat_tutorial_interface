# Migrating the tutorial site into Hugo

This guide explains how to convert one of the hand-written pages under `docs/`
into a Hugo content file, and how to prove the conversion is correct before you
throw the original away.

It assumes no prior knowledge of this repository. It does assume you can read
HTML and are willing to learn a small amount of Hugo template syntax.

**Contents**

1. [Why this migration exists](#1-why-this-migration-exists)
2. [Quick start](#2-quick-start)
3. [How a page is built](#3-how-a-page-is-built)
4. [Migrating a page, step by step](#4-migrating-a-page-step-by-step)
5. [Front matter reference](#5-front-matter-reference)
6. [Inline references: glossary terms and missions](#6-inline-references-glossary-terms-and-missions)
7. [Shortcode reference](#7-shortcode-reference)
8. [Data files](#8-data-files)
9. [Rules that are easy to get wrong](#9-rules-that-are-easy-to-get-wrong)
10. [Verifying a migration](#10-verifying-a-migration)
11. [What fails the build](#11-what-fails-the-build)
12. [Deployment](#12-deployment)
13. [Remaining work](#13-remaining-work)

---

## 1. Why this migration exists

`docs/` contains 114 hand-written HTML files: 28 C labs, 28 Python labs, 35
Discovery projects, and a handful of index and glossary pages. Every one of them
carries its own inline copy of:

- the top navigation bar,
- roughly 10 KB of JavaScript (autosave, PIN submit, glossary popups, field
  diagram overlays, image zoom),
- a `@media print` stylesheet,
- a `var DEFS = {...}` block redefining every glossary term the page uses,
- a `var M = {...}` block redefining every mission the page references.

That duplication is the actual problem. A glossary term was defined 944 times
across the site, and the copies had drifted apart. Fixing a typo in the submit
logic meant editing 114 files. Adding a lab meant hand-editing the previous
lab's "next" link, which had already been missed at least once.

Hugo replaces all of that with one copy of each thing. Interactivity is
unaffected, because it was never per-page logic in the first place — the
JavaScript uses event delegation driven by `data-` attributes, so it works
identically no matter how the HTML got there.

**Result for a converted page:** the authored source drops by 59–65%, the shipped
HTML by about 20%, and the rendered output is pixel-identical to the original.

---

## 2. Quick start

### Get Hugo

You need **Hugo v0.164.0, extended**. The version matters: this project uses
template features and deprecations specific to it. `Dockerfile` pins the same
version.

```bash
# Option A: container (matches CI exactly)
docker build -t wombat-hugo .
docker run --rm -v "$PWD":/src -w /src wombat-hugo hugo

# Option B: local binary
curl -sL -o /tmp/hugo.tar.gz \
  https://github.com/gohugoio/hugo/releases/download/v0.164.0/hugo_extended_0.164.0_linux-amd64.tar.gz
tar -xzf /tmp/hugo.tar.gz -C /tmp hugo
/tmp/hugo version
```

### Build and preview

```bash
hugo                 # one-shot build into public/
hugo server          # live-reloading preview at http://localhost:1313
python3 server.py    # serves the already-built public/ at http://127.0.0.1:8765
```

`hugo server` is the normal choice while authoring. `server.py` exists for
checking a finished build the way a static host would serve it.

### Repository layout

| Path | What lives there |
|---|---|
| `content/` | Markdown source of migrated pages |
| `layouts/` | Page templates, partials, shortcodes, render hooks |
| `data/` | Canonical glossary, missions, navigation |
| `assets/` | CSS processed and published by Hugo |
| `static/` | Files copied verbatim (currently `js/lab.js`) |
| `docs/` | The original hand-written site, still live |
| `tools/` | Migration and verification scripts |
| `public/` | Build output (git-ignored) |

---

## 3. How a page is built

Understanding this pipeline is what makes the gotchas in section 9 make sense.

```
content/labs/foo.md
   │
   │  Goldmark renders markdown to HTML.
   │  Shortcodes ({{< … >}}) are expanded and their output is protected
   │  from being re-read as markdown.
   │  Headings pass through layouts/_markup/render-heading.html, which adds
   │  the .phase-head / .sub classes and the .pnum badge.
   ▼
rendered HTML fragment
   │
   │  layouts/_partials/termify.html
   │  Rewrites [[TERM]] and [[@2:bonus]] tokens into <span> elements, and
   │  records which terms/missions the page used in .Store.
   ▼
   │  layouts/_partials/sectionize.html
   │  Splits on <h2 class="phase-head"> and wraps each phase in <section>.
   ▼
layouts/labs/single.html
   │  Adds hero, meta table, PIN bar, submit buttons, credit line.
   ▼
layouts/baseof.html
   │  <head>, top nav, overlays, per-page glossary JSON, <script src=lab.js>.
   ▼
public/labs/foo.html
```

Two design decisions in that chain are worth knowing up front.

**Sections are not authored.** You write plain `## Phase 1 — …` headings.
`sectionize.html` wraps them afterwards. This is not just convenience: it keeps
every widget shortcode at the top level of the markdown document, which is the
only place Hugo reliably protects raw HTML from being re-parsed. See section 9.

**Glossary data is per-page and derived.** `termify.html` records the terms a
page actually referenced; `page-data.html` then emits only those definitions as
`window.KIPR_GLOSSARY`. You never hand-maintain a `DEFS` block again, and a page
never ships definitions it doesn't use.

---

## 4. Migrating a page, step by step

Work on one page at a time and verify it before starting the next.

### Step 1 — Read the original and inventory what it needs

```bash
python3 - <<'PY'
import re, pathlib
src = pathlib.Path('docs/labs/unit1_bigidea3.html').read_text()
body = re.sub(r'<script\b[^>]*>.*?</script>', '', src, flags=re.S)
for name, pattern in {
    'sections':        r'<section>',
    'callouts':        r'<div class="callout([^"]*)"',
    'code blocks':     r'<div class="code([^"]*)"',
    'concept boxes':   r'<div class="concept"',
    'grid tables':     r'<table class="grid"',
    'command tables':  r'<table class="cmd-table"',
    'step lists':      r'<ul class="steps"',
    'figure rows':     r'<div class="figrow',
    'name bars':       r'<div class="namebar"',
    'textareas':       r'<textarea',
    'seeded cells':    r'<div class="seed"',
    'glossary terms':  r'data-term="([^"]+)"',
    'mission refs':    r'data-m="(\d+)" data-tier="(\w+)"',
    'JS-built rows':   r'<tbody id="(\w+)">',
}.items():
    found = re.findall(pattern, body)
    if found:
        print(f'{name:16} {len(found):3}  {sorted(set(map(str, found)))[:8]}')
PY
```

Anything in that list maps onto an existing shortcode. If something genuinely
new appears, add a shortcode rather than pasting raw HTML into the content file
— see step 6.

Pay particular attention to `JS-built rows`. Several original pages build table
rows in an inline `buildRows()` function at load time. Read that function: it
tells you the row count, the `data-key` naming, and the `aria-label` wording you
must reproduce.

### Step 2 — Confirm the data it references already exists

```bash
python3 - <<'PY'
import yaml, re, pathlib
src = pathlib.Path('docs/labs/unit1_bigidea3.html').read_text()
glossary = yaml.safe_load(open('data/glossary.yaml'))
missions = yaml.safe_load(open('data/missions.yaml'))
for term in sorted(set(re.findall(r'data-term="([^"]+)"', src))):
    print(f"  {'ok     ' if term in glossary else 'MISSING'} {term}")
for num, tier in sorted(set(re.findall(r'data-m="(\d+)" data-tier="(\w+)"', src))):
    entry = missions.get(num)
    ok = entry and tier in entry['tiers']
    print(f"  {'ok     ' if ok else 'MISSING'} mission {num}:{tier}")
PY
```

Missing entries mean the page introduces a term or mission that
`tools/extract_data.py` never saw. Add it to the data file by hand.

### Step 3 — Create the content file

Copy the front matter from an existing lab (`content/labs/unit1_bigidea1.md` is
the reference implementation) and fill in the values from the original's hero
block, `<title>`, `.meta` table, and `.credit` line. See section 5.

### Step 4 — Convert the body

Work top to bottom. Prose becomes markdown; every recognised widget becomes its
shortcode. The mapping is:

| Original HTML | Becomes |
|---|---|
| `<section><h2 class="phase-head">…` | `## Phase 1 — …` (sections are automatic) |
| `<h3 class="sub">` | `### …` |
| `<p class="muted">` | paragraph followed by `{.muted}` |
| `<ul class="obj">` | list followed by `{.obj}` |
| `<p class="group-label">` | paragraph followed by `{.group-label}` |
| `<span class="def-term" data-term="X">y</span>` | `[[X\|y]]` |
| `<span class="fieldref" data-m="2" data-tier="base">z</span>` | `[[@2\|z]]` |
| `<div class="callout navy">` | `{{% callout title="…" variant="navy" %}}` |
| `<div class="code">` | `{{< code >}}` |
| `<div class="concept">` | `{{< concept "title" >}}` |
| `<table class="cmd-table">` | `{{< commands >}}` |
| `<table class="grid">` with inputs | `{{< gridtable >}}` |
| `<ul class="steps">` | `{{< steps >}}` |
| `<p class="q">` + `<textarea>` | `{{< ask >}}` |
| bare `<textarea class="answer">` | `{{< answer >}}` |
| `<div class="figrow">` | `{{< figrow >}}` |
| `<div class="namebar">` | `{{< namebar >}}` |

Preserve `data-key` values and `aria-label` text **exactly**. Those keys are the
submission payload; changing one silently orphans student work saved under the
old key.

### Step 5 — Build

```bash
hugo --logLevel error
```

The build fails loudly on a mistyped glossary term, an unknown mission, a
missing shortcode parameter, or a missing stylesheet. See section 11.

### Step 6 — If the page needs something new

Add a shortcode in `layouts/_shortcodes/`. Follow the conventions in the
existing ones:

- Start the file with a `{{- /* … */ -}}` comment showing example usage.
- Validate required parameters with
  `{{ partial "require.html" (dict "sc" . "name" "key") }}`.
- Take structured input as YAML in `.Inner` via `transform.Unmarshal`.
- **Never indent the emitted HTML.** See section 9.

Prefer generalising an existing shortcode over adding a near-duplicate.
`gridtable` began as a trial-log-only shortcode and now covers four different
table shapes across two labs.

### Step 7 — Verify

Run the checks in section 10. Do not delete the original until they pass.

---

## 5. Front matter reference

```yaml
---
title: "Unit 1 · Big Idea 2 — The Red Cube Breakdown"   # <title> and fallback heading
short_title: "Lab 1.2"          # prev/next link text and index listing
weight: 40                      # ordering within the section; drives prev/next
nav: labs                       # which data/nav.yaml entry gets class="here"
track: c                        # c | python — selects the python: glossary variant
mission_id: unit1_bigidea2      # enables PIN bar, submit buttons, autosave key
eyebrow: "Unit 1 · Big Idea 2"  # hero kicker
heading: "Problems Can Be Broken Into Smaller Problems"   # hero <h1>
subheading: "Student Lab · The Red Cube Breakdown"        # hero .sub
credit: "KIPR · Botball Explorer · Unit 1 Big Idea 2 — Student Lab"
styles: ["site-base", "worksheet", "print"]   # optional; this is the default
meta:                           # the definition list under the hero
  - term: "Unit Guiding Question"
    definition: "How can a machine understand and act within the world?"
  - term: "CS1 Concepts"
    definition: "[[DECOMPOSITION|Decomposition]] · Planning · [[ABSTRACTION|Abstraction]]"
---
```

Notes:

- `meta` definitions are run through `termify`, so `[[…]]` works there too.
- Omit `mission_id` on pages with no submit workflow. The PIN bar, the printed
  PIN echo, the "before you start" reminder, and the bottom submit block all
  disappear together.
- `weight` is what `botnav.html` uses to compute previous/next. Leave gaps
  (10, 20, 30…) so a lab can be inserted without renumbering.
- Do **not** use a front matter key named `lang`. It is deprecated in this Hugo
  version and will emit a warning. This project uses `track` instead.

Section index pages (`content/labs/_index.md`) take a much smaller set:

```yaml
---
title: "C Labs"
index_label: "All C Labs"   # text of the "← back" link in botnav
nav: labs
---
```

---

## 6. Inline references: glossary terms and missions

`termify.html` rewrites bracket tokens anywhere in the rendered body and in
front matter `meta` definitions.

### Glossary terms

```markdown
[[ENCODER]]                     → shows "ENCODER", pops the ENCODER definition
[[ENCODER|encoders]]            → shows "encoders", pops the ENCODER definition
[[PROTOTYPE:design|prototype]]  → shows "prototype", pops the design sense
```

A bare `[[TERM]]` renders **the token exactly as typed**, not the glossary's
title. This matters because the original pages write terms like `ON TOP OF` in
caps mid-sentence; using the glossary title would render "On Top Of" and change
the copy. Supply an explicit label whenever you want different casing.

The label must cover the **whole word as it appears in the sentence**, even when
that form differs from the glossary stem (plural, possessive, conjugated, and
so on). Leaving a suffix outside the brackets makes only part of the word a
definition link.

```markdown
✗  no missing [[SEMICOLON|semicolon]]s
✓  no missing [[SEMICOLON|semicolons]]
```

The token stays `SEMICOLON`; only the display label changes. The same rule is
why `[[ENCODER|encoders]]` wraps the full plural rather than writing
`[[ENCODER|encoder]]s`.

### Senses (homonyms)

Some words mean genuinely different things in different parts of the site.
`PROTOTYPE` is a C function declaration in the labs and a first-draft build in
the Discovery projects. Rather than forcing one definition, the entry carries
alternate senses:

```yaml
"PROTOTYPE":
  title: "Prototype"
  body: "A single line near the top of your program announcing that a function name exists…"
  senses:
    design:
      title: "Prototype"
      body: "A first version built to be tested rather than kept…"
```

Labs keep writing `[[PROTOTYPE|prototype]]`. Discovery pages write
`[[PROTOTYPE:design|prototype]]`. Both senses can appear on the same page; each
ships under its own key (`PROTOTYPE` and `PROTOTYPE:design`) and the popup shows
the right one. A sense may also define its own `python:` variant.

Use senses only for true homonyms. If two pages word the *same* idea
differently, that is a conflict to resolve, not a sense to add.

### Missions

```markdown
[[@2]]                → shows the mission title, base tier diagram
[[@2|Mission 2]]      → custom link text
[[@2:bonus|Mission 2]] → the bonus scoring diagram
```

The tier must exist in `data/missions.yaml` or the build fails. The overlay
image path is derived at runtime as
`img/missions/mission-<NN>-<tier>.jpg`, using the `data-img-base` attribute that
`baseof.html` sets to a page-relative path.

---

## 7. Shortcode reference

Two syntaxes exist and the difference is critical:

- `{{< name >}}` — inner content is **raw**; the shortcode's output is protected
  from markdown re-parsing.
- `{{% name %}}` — inner content is **rendered as markdown** first.

Use `{{%  %}}` only for containers holding nothing but prose. See section 9 for
why nesting a code block inside one breaks.

### `callout` — a highlighted box

```markdown
{{% callout title="Core Insight" %}}
A robot does exactly what you tell it to do — no more, no less.
{{% /callout %}}

{{% callout title="Example" variant="gold" %}}…{{% /callout %}}
```

`variant` is appended as a class: omit it for the default red, or use `navy` or
`gold`.

### `code` — a source listing

```markdown
{{< code >}}
#include <kipr/wombat.h>

int main() {
    motor(0, 100);  // this turns one of the motors on
    ao();           // stop
}
{{< /code >}}
```

Content is HTML-escaped automatically, so write `<kipr/wombat.h>` literally.
Comments are wrapped in `<span class="c">` automatically — never hand-write
those spans.

- `size="small"` → `class="code small"`
- `comment="#"` → use a different comment marker (Python labs)

### `concept` — a boxed explanation mixing prose and code

```markdown
{{< concept "An int — a named number" >}}
- text: |
    `int` stands for *[[INTEGER|Integer]]* — a whole number.
- code: |
    int DRIVE_SPEED = 50;   // name a number

    motor(0, DRIVE_SPEED);  // same as writing motor(0, 50);
- text: |
    Change it once at the top and every use updates.
{{< /concept >}}
```

The inner content is YAML, a list of `text:` and `code:` parts in display order.
This is deliberate: a raw code listing nested inside a markdown-rendered
container gets split at its blank lines. Declaring the parts keeps the listing
intact while the prose stays markdown.

### `commands` — reference table of built-in commands

```markdown
{{< commands >}}
- cmd: "motor(port, power)"
  desc: "Turns the motor on the given [[PORT|port]] at a power level from −100 to 100."
{{< /commands >}}
```

`heading` overrides the first column header.

### `gridtable` — any repeating table of answer boxes

The most general shortcode. It covers trial logs, build logs, and planning grids.

```markdown
{{< gridtable count=6 prefix="trial" label="Trial" numbered=true >}}
- head: What you changed
  key: changed
  width: 16%
- head: What you observed
  key: observed
{{< /gridtable >}}
```

Parameters:

| Name | Meaning |
|---|---|
| `count` | number of answer rows (required) |
| `prefix` | `data-key` prefix (required) |
| `label` | `aria-label` prefix; omit entirely for tables with no aria labels |
| `numbered` | `true` prepends a row-number column |
| `number_head` | header for that column (default `Trial`) |

Per-column keys: `head`, `key`, `width`, plus two ways to pre-fill examples:

- `example:` — adds one fully worked row **above** the answer rows.
- `seed:` — replaces the input in the **first** answer row with static text.

`data-key` values come out as `<prefix><n>_<key>`; aria labels as
`<label> <n> <key>`. Both match what the original pages generated in JavaScript.

### `steps` — a numbered run of one-line answer boxes

```markdown
{{< steps key="p3_planB" label="Plan B step" start=4 count=2
          group="Phase B: Stop in the zone" >}}
```

Produces `data-key` values `p3_planB_4` … `p3_planB_5`. `group` renders a
`<p class="group-label">` above the list and may be omitted.

### `ask` — a question with its answer box

```markdown
{{< ask key="p3_predict" label="Prediction" >}}What do you predict will go wrong?{{< /ask >}}
{{< ask key="p7_q1" label="Reflection 1" n=1 >}}What is an algorithm?{{< /ask >}}
{{< ask key="p5_fail" label="Integration failure" size="tall" >}}What happened?{{< /ask >}}
```

The inner text is rendered as inline markdown, so backticks and emphasis work.
`n` adds a numbered `<span class="n">` badge. `size="tall"` adds the `tall`
class.

### `answer` — a standalone answer box

For prompts written as ordinary prose or a bullet list.

```markdown
{{< answer key="ext_a" label="Extension A" >}}
```

Also accepts `size`.

### `measures` — labelled measurement table

```markdown
{{< measures >}}
- label: Distance from starting box to the zone
  key: p3_dist_to_zone
  aria: Distance to zone
- label: Motor speed we plan to use
  key: p3_motor_speed
  aria: Motor speed
  unit: "% power"
{{< /measures >}}
```

Each row gets a value input plus a unit input keyed `<key>_unit`. `unit`
pre-fills the unit box.

### `kv` — a static label/value grid

```markdown
{{< kv >}}
- label: Inputs
  value: "Motor speed · time to run · starting position"
{{< /kv >}}
```

### `figrow` — a row of click-to-zoom figures

```markdown
{{< figrow >}}
- src: ide/code-template.jpg
  alt: The template you start from.
{{< /figrow >}}
```

`src` is relative to the image root. `caption` defaults to `alt`. Using this
shortcode is what causes the zoom overlay markup to be emitted at all.

Column class follows the figure count: 2 → `two`, 3 → `three`, 4 or more →
`two` (a 2×N grid, matching originals that mark four figures as
`figrow two`). Override with `cols="two"` or `cols="three"` when needed.

### `namebar` — name and date fields

```markdown
{{< namebar >}}
```

Keys default to `reflect_name` / `reflect_date`; override with `name_key` and
`date_key`.

### `safety` — a red hardware / safety warning

```markdown
{{% safety title="⚠ Hold the robot and watch the first run" noprint=true %}}
Run this with the robot held still…
{{% /safety %}}
```

Same furniture as `callout`, different class. `noprint=true` adds
`class="no-print"` for screen-only hands-first checks.

### `widgetstep` — a navy controller / widget walkthrough

```markdown
{{% widgetstep title="Use the servo widget" %}}
Open the **Motors and Sensors** widget…
{{% /widgetstep %}}
```

Always screen-only (`class="widget-step no-print"`).

### `sketch` — a printable field-sketch area

```markdown
{{< sketch aria="Field mapping sketch area" startbox="left"
           tag="Sketch: starting box, both cube pairs, and your path" >}}
```

`startbox` is `left` or `right`. Optional `note` prints an italic hint under
the box; optional `label` overrides the start-box text.

### `filetab` — a filename tab above a code listing

Use the block form (filename on its own line) so Goldmark does not wrap
the tab in a `<p>`.

```markdown
{{< filetab >}}
yourname.h
{{< /filetab >}}
{{< code >}}…{{< /code >}}
```

### `checklist` — checkbox items with `data-key`s

```markdown
{{< checklist >}}
- key: p5_test_tick_drive
  label: "`Tick_Drive()` drove the measured distance"
- key: p5_test_move_arm
  label: "`move_arm()` moved the arm smoothly and safely"
{{< /checklist >}}
```

`id` defaults to the key with underscores turned into hyphens. Labels are
inline markdown.

---

## 8. Data files

### `data/glossary.yaml`

The single source of truth for every definition popup.

```yaml
"ENCODER":
  title: "Encoder"
  body: "A sensor that counts how far a motor shaft has turned…"
  python: "…"        # optional: wording used on track: python pages
  senses:            # optional: alternate meanings, see section 6
    design:
      title: "…"
      body: "…"
```

Keys are the uppercase token used in `[[…]]`. `title` is the popup heading;
`body` is the popup text.

### `data/missions.yaml`

```yaml
"2":
  title: "Mission 2 — Relocate the Red Cube"
  tiers:
    - "base"
    - "bonus"
```

### `data/nav.yaml`

The top navigation, defined once. `id` is matched against a page's `nav` front
matter to apply `class="here"`.

### `data/glossary-conflicts.yaml`

A worklist, not an input to the build. `tools/extract_data.py` writes any term
that was defined more than one way across the old site, so a human can settle
it. It should normally be empty. Homonyms that intentionally keep both meanings
belong under `senses:` instead.

### Regenerating the data files

```bash
python3 tools/extract_data.py
```

This is a **one-shot migration helper** that re-reads the `var DEFS` and `var M`
blocks out of `docs/`. Running it again will overwrite hand-made edits,
including `senses:`. Once `docs/` is gone, delete the script.

---

## 9. Rules that are easy to get wrong

These are the failure modes that actually came up. Most produce wrong output
rather than an error, so they are worth reading before you start.

### 9.1 Never indent a shortcode template

Markdown treats four leading spaces as a code block. If a shortcode template
emits indented HTML, the page renders visible `<section>` tags wrapped in
`<pre><code>`.

```
✗  <div class="callout">
     <p>…</p>
   </div>

✓  <div class="callout">
<p>…</p>
</div>
```

Every line of shortcode output must start at column 0.

### 9.2 Do not nest a code block inside a `{{% %}}` shortcode

CommonMark ends an HTML block at the first blank line. A `{{% %}}` shortcode
renders its inner content as markdown, so a nested `{{< code >}}` listing
containing a blank line is split into fragments and the tags become visible
text.

Solutions, in order of preference:

1. Keep the widget at the top level of the document, not inside a container.
2. Give the container structured YAML input, as `concept` does.
3. If the container really only holds prose, `{{% %}}` is fine.

This is also why sections are applied by `sectionize.html` after rendering
rather than by a `{{% section %}}` shortcode.

### 9.3 `RenderString` is inline by default

Calling `.Page.RenderString "some text"` produces no `<p>` wrapper. For
block-level content:

```go-html-template
{{ $.Page.RenderString (dict "display" "block") .text }}
```

Getting this wrong silently drops paragraph tags, which changes spacing.

### 9.4 `{{< … >}}` inner content is raw text

A `<`-style shortcode receives `.Inner` unrendered. If the inner text should
support markdown — backticks around `drive_forward()`, for example — the
shortcode must call `.Page.RenderString` on it. `ask` does this; `code`
deliberately does not.

### 9.5 Escape literal numbered text

Markdown turns a line beginning `1.` into an ordered list. When the original
prose numbers steps inside a paragraph, escape them:

```markdown
1\. In the boxes below, write step-by-step instructions.
```

### 9.6 All URLs must be page-relative

The old site links everything relatively (`../site-base.css`), which is why it
works unchanged from a local preview, a `file://` path, a project page under
`/Wombat-Tutorial-Interface/`, and a custom domain. Absolute paths tie the
output to exactly one mount point.

Never hand-write a URL in a template. Use:

| Partial | Purpose |
|---|---|
| `urlprefix.html` | the `../` prefix from the current page to the site root |
| `rootpath.html` | a page's path relative to the site root |
| `asset.html` | a page-relative URL to a file under `assets/`, publishing it |

```go-html-template
{{ $prefix := partial "urlprefix.html" . }}
<a href="{{ $prefix }}glossary.html">Glossary</a>
<a href="{{ $prefix }}{{ partial "rootpath.html" $otherPage }}">…</a>
<link rel="stylesheet" href="{{ partial "asset.html" (dict "page" $ "path" "css/print.css") }}" />
```

Hugo's `relativeURLs = true` config option is **not** used, because it only
rewrites `href`/`src` attributes. It would miss `data-img-base`, which the field
diagram JavaScript reads to build image paths.

### 9.7 Files under `assets/` are only published if you ask for their URL

This is the subtlest trap in the project. `resources.Get "css/print.css"`
returns a resource but does **not** emit the file. Only touching
`.RelPermalink` (or calling `.Publish`) makes Hugo write it to `public/`.

Building the href by hand therefore produces a link to a file that was never
created — a 404 with no build error. `asset.html` exists to make this impossible
to get wrong. Files under `static/` are copied unconditionally and need no such
care.

### 9.8 Prefer build-time HTML over JavaScript-injected HTML

Several original pages inject table rows at load time. The migrated versions
emit those rows during the build instead. Same keys, same aria labels, same
column widths — but the tables now print correctly and work with JavaScript
disabled.

Expect this to show up as a large difference in any static-HTML comparison. It
is the intended behaviour, and section 10 explains how to verify it properly.

### 9.9 Deprecated APIs in this Hugo version

| Don't use | Use instead |
|---|---|
| `languageCode` in config | `locale` |
| `lang` in front matter | `track` (this project's own key) |
| `.Site.Data` / `site.Data` | `hugo.Data` |
| `required` function | `partial "require.html"` |
| `keys` function | not available; restructure the check |

### 9.10 Strip non-ASCII characters from code snippets

Non-ASCII / multi-byte characters — for example `·` (middle dot) or `—`
(em dash) — break the KISS IDE when a student copies a listing into it. When
migrating a page, remove them from every code snippet (including `code` and
`concept` listings). Prose outside code blocks may keep them.

Do **not** swap those characters for a bare hyphen and leave the rest unchanged.
Hyphen chains read as broken em-dash leftovers (`Unit 1 - Big Idea 1 - Title`,
`CLEAR - reset…`). Rewrite the comment or header into brief, natural ASCII —
a short complete sentence, or clear phrasing with commas / colons — still
concise, never wordy.

| Original (non-ASCII) | Avoid (naive hyphen) | Prefer |
|---|---|---|
| `// Unit 1 · Big Idea 1 — Waypoint Navigator` | `// Unit 1 - Big Idea 1 - Waypoint Navigator` | `// Unit 1, Big Idea 1: Waypoint Navigator` |
| `// CLEAR — reset port 0's counter back to 0` | `// CLEAR - reset port 0's counter back to 0` | `// CLEAR: reset port 0's counter back to 0` |

See `content/labs/unit1_bigidea1.md` for the established header style.

### 9.11 Harmless differences you can ignore

- **`&quot;` in the output.** Goldmark escapes double quotes in text nodes. It
  renders identically to `"`. `tools/compare_render.py` decodes entities, so it
  will not report these; an ad-hoc regex diff will.
- **Comment colouring in the first lines of a code block.** The original pages
  left the `// Name: ___` header lines uncoloured by hand. The `code` shortcode
  colours every `//` comment consistently. This is an intentional improvement.
- **`../labs/index.html` instead of `index.html`.** Generated links are always
  written from the site root, so a same-directory link gets a `../section/`
  prefix. It resolves to the same file.
- **Whole-word glossary labels.** Many originals leave a plural (or other)
  suffix outside the span — `<span …>semicolon</span>s`. Migrated pages wrap
  the full surface form (`[[SEMICOLON|semicolons]]`). `compare_render.py`
  section 1 will show a few text-token diffs for those; sections 2–4 (keys,
  `data-term` sets, definition payloads) stay identical and are what matter.
- **Non-ASCII characters rewritten in code snippets.** Originals sometimes use
  characters such as `·` or `—` inside listings; those break the KISS IDE, so
  migrated snippets are rewritten to brief natural ASCII (see 9.10). Treat any
  resulting text-token diffs as intentional.

---

## 10. Verifying a migration

Four checks, in increasing order of strength. Run all of them on the first few
pages; once you trust a shortcode, the first two are usually enough.

### 10.1 Structural comparison

```bash
python3 tools/compare_render.py \
    docs/labs/unit1_bigidea2.html \
    public/labs/unit1_bigidea2.html \
    --page-url /labs/unit1_bigidea2.html \
    --show 40
```

Pass `--page-url` matching the page's location so relative links resolve
correctly; the default assumes `/labs/unit1_bigidea1.html`.

The report covers the element tree, the full set of `data-key` fields, the
glossary and mission references, the definitions delivered to the page, and how
much inline script and style moved out. Read every reported difference and
account for it.

### 10.2 Link check

Confirms nothing points at a file that was never published — the failure mode
from section 9.7.

```bash
python3 - <<'PY'
import re, pathlib
root, legacy = pathlib.Path('public'), pathlib.Path('docs')
broken, pending, ok = [], set(), 0
for page in sorted(root.rglob('*.html')):
    text = page.read_text()
    refs = set(re.findall(r'(?:href|src)="([^"]+)"', text))
    base = (re.findall(r'data-img-base="([^"]+)"', text) or [''])[0]
    for num, tier in re.findall(r'data-m="(\d+)" data-tier="(\w+)"', text):
        refs.add(f'{base}missions/mission-{int(num):02d}-{tier}.jpg')
    for ref in refs:
        if ref.startswith(('http://', 'https://', '#', 'mailto:')):
            continue
        target = (page.parent / ref).resolve()
        if target.exists():
            ok += 1
        elif (legacy / target.relative_to(root.resolve())).exists():
            pending.add(ref)          # not migrated yet, will resolve later
        else:
            broken.append((page.relative_to(root).as_posix(), ref))
print(f'resolved: {ok}')
print(f'awaiting migration: {sorted(pending)}')
print(f'broken: {len(broken)} {broken}')
PY
```

`broken` must be zero. Entries in `pending` are links to pages that still live
only in `docs/`; they resolve as those pages are converted.

### 10.3 Runtime DOM comparison

This is the check that settles JavaScript-injected content. Serve the site so
that both the original and the generated page are reachable, open the
**original** in a browser, let its scripts run, then fetch the generated page
into the same document and compare.

```bash
hugo --destination /tmp/poc
# serve a directory containing both docs/ and the generated build
```

Then in the browser console on the original page:

```js
const gen = await (await fetch('/poc/labs/unit1_bigidea2.html')).text();
const genDoc = new DOMParser().parseFromString(gen, 'text/html');

const fields = d => [...d.querySelectorAll('[data-key]')].map(el =>
  [el.tagName, el.type || '', el.className, el.dataset.key,
   el.getAttribute('aria-label') || ''].join('|'));
const seeds = d => [...d.querySelectorAll('.seed')].map(e => e.textContent.trim());
const terms = d => [...d.querySelectorAll('.def-term')].map(e => e.dataset.term);
const cols  = d => [...d.querySelectorAll('table.grid thead th')]
                     .map(e => (e.getAttribute('style') || '') + ' ' + e.textContent.trim());

for (const [name, fn] of Object.entries({ fields, seeds, terms, cols })) {
  const a = fn(document), b = fn(genDoc);
  console.log(name, JSON.stringify(a) === JSON.stringify(b)
    ? `identical (${a.length})`
    : { onlyOriginal: a.filter(x => !b.includes(x)),
        onlyGenerated: b.filter(x => !a.includes(x)) });
}
```

Every line should read `identical`.

### 10.4 Layout comparison

Renders the generated page in an iframe at the same width and compares geometry.
Stronger than a screenshot, and immune to font-loading timing.

```js
const f = document.createElement('iframe');
f.style.cssText = 'position:absolute;left:-99999px;top:0;border:0';
f.width = String(window.innerWidth);
f.height = String(document.documentElement.scrollHeight + 4000);
f.src = '/poc/labs/unit1_bigidea2.html';
document.body.appendChild(f);
await new Promise(r => f.addEventListener('load', r, { once: true }));
await f.contentDocument.fonts.ready;
await new Promise(r => setTimeout(r, 400));

const probe = d => {
  const s = d.querySelector('.sheet').getBoundingClientRect();
  return [...d.querySelectorAll('.sheet h2, .sheet h3, .sheet table.grid, .sheet .code, '
                              + '.sheet .callout, .sheet .concept, .sheet textarea, .sheet ul.steps')]
    .map(el => { const r = el.getBoundingClientRect();
                 return [Math.round(r.left - s.left), Math.round(r.top - s.top),
                         Math.round(r.width), Math.round(r.height)]; });
};
const a = probe(document), b = probe(f.contentDocument);
console.log('elements:', a.length, b.length,
  'largest delta:', Math.max(...a.flatMap((v, i) => v.map((x, j) => Math.abs(x - b[i][j])))));
f.remove();
```

Both labs migrated so far report a largest delta of **0px** across 62 probed
elements, with identical total sheet height.

### 10.5 Interactivity spot-check

On the generated page, confirm by hand or by script that: a glossary term opens
the popup with the right heading and body and closes on Escape; a mission
reference opens the field overlay, loads its image, and switches tiers; typing
writes a `localStorage` draft; submitting with an empty PIN is blocked; and
submitting with a PIN produces a JSON payload containing every `data-key`.

### A note on local preview

If a browser cannot reach your preview server, check for a stale server from an
earlier session holding the port — `server.py` defaults to 8765 and serves
`public/`, so an old instance whose directory was deleted answers 404 to
everything. `ps -eo pid,args | grep http.server` will show it.

---

## 11. What fails the build

Broken references stop the build rather than shipping a popup that does nothing
when a student clicks it. Verified failure modes:

| Mistake | Error |
|---|---|
| `[[DECOMPOSITON]]` | `[[DECOMPOSITON]] is not a term in data/glossary.yaml` |
| `[[@99]]` | `refers to mission "99", which is not in data/missions.yaml` |
| `[[@2:triple]]` | `asks for tier "triple" but mission 2 only has [base bonus]` |
| `[[PROTOTYPE:widget]]` | `asks for sense "widget", which is not defined under PROTOTYPE.senses` |
| `[[ALGORITHM:design]]` | `asks for sense "design" but ALGORITHM has no senses` |
| `[[A:b:c]]` | `has too many ':' segments; use TERM or TERM:sense` |
| `{{< gridtable count=4 >}}` | `shortcode "gridtable" needs a "prefix" parameter` |
| `styles: ["nope"]` | `assets/css/nope.css does not exist` |

All exit non-zero. Shortcode errors include the exact file and line.

A clean build currently emits one warning — `found no layout file for "html" for
kind "home"` — because the home page has not been migrated yet. It is expected
until section 13 is finished.

---

## 12. Deployment

The site is served by GitHub Pages from `docs/`, so during the migration
`docs/` holds the live hand-written site while Hugo builds into `public/`
(git-ignored).

That has to change once enough pages are converted. Pick one:

1. **Build into `docs/`.** Set `publishDir = 'docs'` in `hugo.toml` and commit
   the output. Requires no Pages reconfiguration but puts generated files in
   version control.
2. **GitHub Actions.** Build with Hugo v0.164.0 and publish the artifact to
   Pages. `docs/` then holds only un-migrated originals until it is deleted.
   This is the cleaner end state.

Either way `baseURL` in `hugo.toml` must keep matching where the site is served.
Because every link is page-relative (section 9.6), getting `baseURL` wrong
degrades gracefully rather than breaking the site.

`uglyURLs = true` is deliberate: it keeps `.html` extensions so existing
bookmarks, printed handouts, and cross-links from un-migrated pages keep working.
Do not turn it off.

---

## 13. Remaining work

Migrated so far (proof of concept):

- `content/labs/unit1_bigidea1.md` — the reference implementation
- `content/labs/unit1_bigidea2.md` — the shortcode generality check
- `content/labs/prelab1.md` — placeholder, front matter only
- `content/labs/_index.md` — section index

Still to do:

- 26 remaining C labs under `docs/labs/`
- 28 Python labs under `docs/Python_Labs/` — these need `track: python`, which
  selects the `python:` wording of any term that has one
- 35 Discovery projects under `docs/discovery/` — different page furniture; expect
  to add shortcodes, and note that these are the pages needing
  `[[PROTOTYPE:design]]`
- The five root pages: `index.html`, `glossary.html`, `2026-missions.html`, and
  the `discovery/` and `Python_Labs/` landing pages. `glossary.html` should be
  generated from `data/glossary.yaml` rather than converted by hand, and should
  render alternate senses as separate entries under one heading.

When `docs/` is finally empty:

- Move `docs/img/` to `static/img/` and delete the `[[module.mounts]]` entry for
  it in `hugo.toml`.
- Move `assets/css/site-base.css` and `assets/css/worksheet.css` out of the
  temporary copies they currently are, and delete the originals under `docs/`.
- Delete `tools/extract_data.py`.
- Point `tools/compare_render.py` at an archived copy of the old site, or delete
  it too.
