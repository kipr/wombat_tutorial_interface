# Hugo migration and authoring guide

This project keeps worksheet content in Markdown and centralizes repeated HTML in Hugo shortcodes and partials. The generated pages remain relative-link friendly, printable, accessible without JavaScript, and compatible with the submission script through stable `data-key` values.

## Migration standard: preserve behavior, reuse structure

A Hugo migration does not need to reproduce the source page byte for byte. Whitespace, wrapper elements, generated IDs, CSS classes, attribute order, and minor visual details may change when Hugo, Goldmark, or a shared renderer can express the same page more simply.

Judge a migration by the behavior people and integrations depend on:

- the same authored information and interactive fields remain available;
- submission `data-key` values and initial field values remain compatible;
- glossary terms, senses, mission references, and page-data payloads still resolve;
- links and published assets still reach the same targets from every supported mount point;
- controls remain labelled, IDs remain unique, and keyboard/screen-reader behavior remains sound;
- content intended for print or screen retains that visibility;
- essential visible meaning is preserved, even when markup or low-value styling is normalized.

Byte-identical output is required only when an explicit contract demands it-for example, a snapshot specifically designated as canonical or an external consumer that parses an exact fragment. Do not treat a raw HTML diff by itself as a migration failure.

### Reuse order

Before adding markup or a new component, use this order:

1. Prefer ordinary Markdown for prose, lists, static tables, and standard fenced code.
2. Reuse an existing shortcode when its authoring meaning fits.
3. Compose an existing partial behind a thin semantic shortcode when the content deserves a distinct public name but not a distinct renderer.
4. Extend a shared partial or shortcode only when the new option is broadly useful and does not weaken its contract.
5. Add a new partial for genuinely reusable internal rendering behavior, or a new shortcode for a genuinely new content-authoring concept.

Search `layouts/_shortcodes/`, `layouts/_partials/`, and this catalog before implementing a new component. Prefer a small semantic alias over copied HTML. Avoid generic variant parameters when an established semantic shortcode communicates intent more clearly.

Shortcodes are the public API used by Markdown authors. Partials are internal building blocks used by layouts and shortcodes; content files should not call them directly.

## Compatibility boundaries

- A field's `key` becomes its `data-key`. Treat it as stored data: do not rename it casually.
- Form-control IDs are generated from keys by changing underscores to hyphens. Do not author IDs.
- Every text input needs either a visible label or an accessible name derived by its renderer.
- Site links and assets are emitted as relative URLs so builds work at a domain root, under a project path, and from local files.
- Hugo content links use lowercase page references (for example, `/labs`, `/python_labs`, and `/glossary`) and resolve to page objects at build time. Use literal paths only for legacy static pages that are not managed by Hugo.
- `.no-print` is the shared way to hide interactive-only material on paper.

These are compatibility boundaries, not a demand for identical DOM structure. When one of them intentionally changes, document the migration and update the relevant consumer or test.

## Discovery content model

Discovery uses clean Hugo section URLs and no legacy aliases:

```text
content/discovery/_index.md
content/discovery/coding/_index.md
content/discovery/coding/project-01.md ... project-17.md
content/discovery/ev3/_index.md
content/discovery/ev3/project-01.md ... project-17.md
content/discovery/ev3/builds/arm.md
content/discovery/ev3/builds/claw.md
content/discovery/spike/_index.md
content/discovery/spike/project-01.md ... project-17.md
content/discovery/spike/builds/arm.md
content/discovery/spike/builds/claw.md
content/discovery/systems/_index.md
content/discovery/systems/project-01.md ... project-14.md
```

Every project uses `type: discovery` implicitly from its section and is
validated at build time. The required project front matter is:

| Field | Contract |
| --- | --- |
| `title`, `short_title`, `description`, `weight` | Page, navigation, and hub-card text/order. Weight equals the project number. |
| `mission_id` | Exact persistence identifier: `discovery_coding_NN` (Wombat), `discovery_ev3_coding_NN`, `discovery_spike_coding_NN`, or `discovery_systems_NN`. |
| `styles` | Exactly `site-base`, `worksheet`, `syntax`, `discovery`, `print`, in that order. |
| `project_number`, `strand` | Numeric project identity and either `coding` or `systems`. Coding projects also set `platform: wombat`, `ev3`, or `spike`. |
| `phase`, `phase_order`, `time` | Hub grouping plus worksheet metadata. |
| `meta` | Labelled definition rows and exactly one `What You Need` row whose `checklist` items each contain stable `key` and accessible `label` values. |
| `eyebrow`, `heading`, `subheading`, `credit` | Shared worksheet hero and footer content. |

Optional card fields are `hub_title`, `mission_label`, `no_mission`, `build`,
and a `pace` mapping with `kind` (`required`, `suggested`, or `anytime`) and
`label`. A Coding page may place a `build_gate` after its phase; supply either
`page`/`label` or a `links` list of page/label pairs. Each target is a Hugo
page reference and therefore fails the build if it is missing.
The root and strand hubs derive cards, phase groups, counts, links, badges, and
gates from section children rather than maintaining a separate project list.

Discovery-owned extracted diagrams are colocated with the Markdown files in
their content section and referenced by bare filename. Shared images remain
below `static/img/`; assembly sequences live in `static/img/kit/assembly/`.
Figure source paths are resolved through the existing
`figrow`/`figure-grid.html` path, so project Markdown does not introduce a
Discovery-only image renderer.

Discovery phase headings use one Markdown convention:

```markdown
## Try It - Observe the Wombat
## Learn It - Understand the Sensor
## Do It - Test Your Program
## Score It - Check the Result
```

Only headings present in the authored source are rendered; `Score It` is not
added automatically. The checked-in Stage 1 project pages are explicit
`stage1_fixture` pages that exercise the infrastructure before Stage 2 replaces
their bodies with migrated curriculum.

## Partials and shortcodes

### Shortcode catalog

Reuse these author-facing APIs from Markdown:

| Shortcode | Purpose and reuse guidance |
| --- | --- |
| `answer` | Standalone response textarea. Reuses the shared textarea renderer. |
| `ask` | Question plus response textarea; use when the prompt and answer belong together. |
| `calc` | Ordered prose, formula, equation-input, and note parts in one calculation panel. |
| `callout` | General red/navy/gold panel. Prefer a semantic panel alias below when one fits. |
| `checklist` | YAML checkbox list with stable submission keys and shared tick styling. |
| `code` | Chroma code with optional filename and `@@...@@` teaching emphasis. Use a normal fence without those features. |
| `concept` | Structured concept explanation containing ordered text, code, truth, formula, or image parts. |
| `plsec` / `endplsec` | Paired PreLab section shell. Keep widgets between the pair at document top level. |
| `figrow` | Captioned, zoomable image row; also supports PreLab inventory checks through `check_id`. |
| `gate` | Semantic red panel for PreLab readiness/next-step gates. |
| `gridtable` | Explicit YAML columns and rows with static or editable cells. |
| `namebar` | Parameterless reflection name/date fields with fixed compatibility keys. |
| `mission-summary` | Canonical mission tier summary resolved by mission number or page reference; its optional YAML body adds tier status annotations. |
| `rec` | YAML list of visibly labelled recording fields. |
| `repeattable` | Generated rows with predictable `<prefix><row>_<key>` submission keys. |
| `resetbox` | Semantic gold panel for error-reset checkpoints. |
| `rule-definition` | Emits one canonical competition definition from `data/glossary.yaml`; rules definitions only. |
| `safety` | Semantic red safety panel; optionally screen-only with `noprint=true`. |
| `score-examples` | Required `scores` and `does_not_score` YAML lists rendered as a responsive comparison. |
| `short-answer` | One-line response using the shared labelled text-input renderer; requires `key` and `label`, with optional `placeholder` or Markdown `prompt`. |
| `signoff` | PreLab completion check plus labelled team/date-style fields. |
| `sketch` | Printable field-sketch area using the field SVG for the chosen start-box side. |
| `steps` | Generated numbered single-line response fields. |
| `warn` | Semantic red caution panel for drift or values that may change. |
| `widgetstep` | Semantic navy walkthrough panel that is always screen-only. |
| `zonebar` | Parameterless shared acceleration/cruise/deceleration diagram. |

Use ordinary Markdown instead of a shortcode for static tables, ordinary prose/lists, and code fences that do not need filenames or token emphasis.

### Partial catalog

Partials are internal APIs. Reuse them from layouts or shortcode implementations rather than copying their markup or logic.

| Partial | Role and reuse guidance |
| --- | --- |
| `asset.html` | Publishes an `assets/` resource and returns its URL relative to the source page. Use it for processed CSS or other Hugo resources. |
| `botnav.html` | Previous, next, section, and glossary navigation for worksheet pages. |
| `checkbox.html` | Validated keyed checkbox plus associated label; derives the DOM ID from the key. |
| `codeblock.html` | Shared language validation, Chroma rendering, shortcode emphasis, fence options/classes, and filename tabs. Route every code path through it. |
| `document-shell.html` | Shared two-column document shell for a heading-derived sidebar and existing main content. |
| `document-sidebar.html` | Validates sidebar configuration and renders desktop/mobile navigation from `.Fragments.Headings`. |
| `figure-grid.html` | Normalized, keyboard-operable figure grid used by `figrow` and mission page resources. |
| `glossary-entry.html` | Validates and resolves a glossary base term/sense with track-specific wording. |
| `glossary-page-meta.html` | Produces label, class, rank, and sort metadata for glossary usage links. |
| `glossary-page-terms.html` | Discovers the base glossary terms referenced by a page using the shared parser. |
| `head.html` | Shared document metadata, fonts, and stylesheet links. |
| `hub-nav.html` | Hub-page navigation shell; delegates individual data-driven links to `navigation-link.html`. |
| `mission-summary.html` | Renders canonical mission tiers for the `mission-summary` shortcode, with optional authored status annotations. |
| `mission-tier-title.html` / `mission-judging-label.html` | Shared canonical display labels used by both mission pages and Discovery summaries. |
| `navigation-link.html` | Shared navigation anchor with configurable active class and consistent `aria-current`. |
| `overlays.html` | Emits glossary and figure dialogs only when the rendered page used them. |
| `page-data.html` | Serializes only the glossary definitions referenced by the current page. |
| `panel.html` | Shared red/navy/gold panel furniture used by all semantic panel shortcodes. |
| `parse-reference.html` | Parses glossary and mission token syntax, including display labels and qualifiers. |
| `relative-url.html` | Returns a relative URL from a source page to either a target page or site-relative path. Route internal page, image, script, and asset URLs through it. |
| `require.html` | Reads a required shortcode parameter and reports a source-positioned build error when absent. |
| `resolve-reference.html` | Dispatches a parsed reference to glossary or mission validation/resolution. |
| `sectionize.html` | Wraps rendered worksheet phases in sections without requiring raw wrapper HTML in Markdown. |
| `table-cell.html` | Shared static, number, and accessible input-cell renderer for both table shortcodes. |
| `score-comparison.html` | Shared responsive Scores / Does Not Score renderer. |
| `termify.html` | Rewrites rendered glossary tokens into popup controls and mission tokens into validated page links. |
| `text-input.html` | Validated visibly labelled text field used by recording, sign-off, and name/date components. |
| `textarea.html` | Validated accessible response textarea used by `answer` and `ask`. |
| `topbar.html` | Worksheet top bar, main navigation, PIN field, and submission controls. |
| `truthtable.html` | Core structured truth-table renderer used by concept content. |
| `validate-discovery-project.html` | Enforces Discovery filenames, numbering, persistence IDs, stylesheet order, phase/time fields, and the structured What You Need checklist. |
| `worksheet-metadata.html` | Renders definition rows and structured metadata checklists through the shared glossary and checkbox paths. |

When adding a semantic alias around an existing partial, keep the alias thin: collect/validate only its distinct authoring parameters, then delegate rendering.

## Panels

Panel shortcodes share one renderer and consistent title markup. Their semantic names remain useful in source:

```markdown
{{% callout title="Core Insight" %}}
The default callout is red.
{{% /callout %}}

{{% callout title="Think it through" variant="navy" %}}
Navy and gold are the two optional callout modifiers.
{{% /callout %}}

{{% safety title="⚠ Test in your hands first" noprint=true %}}
Hold the robot clear of the floor.
{{% /safety %}}
```

| Shortcode | Parameters | Rendering behavior |
| --- | --- | --- |
| `callout` | optional `title`; optional `variant="navy"` or `variant="gold"` | red by default |
| `safety` | optional `title`; optional `noprint=true` | red |
| `warn` | optional `title` | red |
| `widgetstep` | optional `title` | navy and always screen-only |
| `gate` | required `title` | red |
| `resetbox` | required `title` | gold |

Use `%` delimiters for panel bodies so Markdown inside the panel is rendered.

## Textareas and labelled fields

All response textareas use one standard height.

```markdown
{{< ask key="p3_predict" label="Prediction" n=1 >}}
What do you predict will happen?
{{< /ask >}}

{{< answer key="ext_a" label="Extension A" placeholder="Write here" >}}
```

`ask` requires `key` and `label`; `n` is optional. `answer` requires `key` and `label`; `placeholder` is optional.

Recording fields use YAML with `key`, `label`, and an optional `placeholder`:

```markdown
{{< rec >}}
- key: rec_ip
  label: Our Wombat's IP address
  placeholder: e.g. 192.168.x.x
- key: rec_name
  label: Our Wombat's name or number
{{< /rec >}}
```

`namebar` is parameterless and emits the stable keys `reflect_name` and `reflect_date`.

## Checklists and sign-off

All checklists use the tick presentation.

```markdown
{{< checklist >}}
- key: p5_test_drive
  label: "`Drive()` moved the measured distance"
- key: p5_test_arm
  label: "The arm moved smoothly and safely"
{{< /checklist >}}
```

Labels support inline Markdown and glossary references.

```markdown
{{< signoff >}}
check:
  key: done_all
  label: Every box above is ticked honestly.
fields:
  - key: rec_team
    label: Team name or number
  - key: rec_date
    label: Date completed
{{< /signoff >}}
```

The sign-off title is fixed as "Sign off."

## Tables

### Ordinary Markdown tables

Use an ordinary Markdown table for static reference information. Tables without an authored class receive the worksheet table styling automatically.

```markdown
| Command | What it does |
| --- | --- |
| `ao()` | Turns every motor off. |
| `msleep(ms)` | Pauses for a number of milliseconds. |
```

### Repeated rows

`repeattable` requires `count` and `prefix`; `caption` is optional. Its body is a YAML list of columns.

```markdown
{{< repeattable count=4 prefix="trial" caption="Run log" >}}
- kind: number
  head: Try
  width: 8%
- head: What changed
  key: changed
  width: 35%
- head: What happened
  key: result
  aria: observed result
{{< /repeattable >}}
```

A number column uses `kind: number`, `head`, and optional `width`. Input columns accept:

| Field | Meaning |
| --- | --- |
| `key` | required key suffix; row 2 becomes `<prefix>2_<key>` |
| `head` | column heading and default accessible name |
| `width` | optional CSS width |
| `aria` | optional accessible-name override |
| `align` | optional input text alignment |
| `example` | value in a worked example row above the answer rows |
| `seed` | static value replacing the first row's input |

Repeated input accessible names append the row number.

### Explicit rows

`gridtable` accepts only an optional `caption` parameter. Its YAML contains `columns` and `rows`.

```markdown
{{< gridtable caption="Sensor readings" >}}
columns:
  - head: Surface
    width: 40%
  - head: Reading
  - head: Unit
rows:
  - - text: White floor
    - key: white_reading
      placeholder: analog value
    - key: white_unit
      value: ticks
  - class: blind
    cells:
      - text: 1 inch (blind spot)
      - key: blind_reading
      - text: ticks
{{< /gridtable >}}
```

Static cells are `{text: ...}`. Input cells require `key` and optionally accept `aria`, `placeholder`, `value`, and `align`. A row can be a cell list or a map with `class` and `cells`, which supports cases such as the `blind` row treatment.

Input labels fall back in this order:

1. the cell's explicit `aria`;
2. the column heading;
3. the row's first static text cell;
4. the humanized key.

If every column heading is empty, the renderer omits `<thead>` and uses a `<colgroup>` for widths.

## Calculations

`calc` requires `title`. Add `noprint=true` only when the activity must remain screen-only. Its YAML is an ordered list; each item contains exactly one of `prose`, `formula`, `equation`, or `note`.

```markdown
{{< calc title="Check the math yourself" >}}
- prose: Copy the two values from your table.
- formula: "ticks_per_inch = ticks ÷ inches"
- equation:
  - input: {key: cal_ticks, placeholder: ticks}
  - text: "÷"
  - input: {key: cal_inches, placeholder: inches}
  - text: "="
  - input: {key: cal_result, aria: result}
- note: Does your hand calculation match the program?
{{< /calc >}}
```

Equation tokens contain either `text` or `input`. An input requires `key` and may provide `placeholder` and `aria`. Its accessible name falls back from `aria` to `placeholder` to a humanized key.

## Code

Use the `code` shortcode for tutorial token emphasis or a filename tab:

```markdown
{{< code lang="c" filename="main.c" >}}
int speed = @@750@@;
{{< /code >}}
```

`lang` defaults to the page's `track`. `filename` is optional. Wrap tutorial-emphasis text in `@@...@@`; copied code contains only the inner text.

Use ordinary fenced blocks when emphasis and a filename are unnecessary:

````markdown
```python
def drive(speed):
    motor(0, speed)
```
````

Fences support Goldmark classes and Chroma options. Console output uses a text fence with the `console` class:

````markdown
```text {.console}
> Run started. Score: 0
> Final score: 40
```
````

Every block must have a valid Chroma language. Emphasis markers are interpreted only in `code` shortcode and `concept` code content.

## Figures and fixed diagrams

`figrow` infers its columns from the figure count. Each figure requires `src` and `alt`; `alt` is also its visible caption. `check_id` remains available for PreLab inventory overlays and produces the stable key `part_<check_id>`. Images are rendered inside native buttons, so Enter and Space work without custom keyboard handlers. Closing the shared zoom dialog returns focus to that button.

```markdown
{{< figrow >}}
- src: kit/controller.jpg
  alt: KIPR Wombat controller
  check_id: wombat-controller
- src: kit/motor.jpg
  alt: Motor and cable
{{< /figrow >}}
```

The acceleration/cruise/deceleration bar has fixed shared content:

```markdown
{{< zonebar >}}
```

`sketch` requires `aria`, `tag`, and `startbox="left"` or `startbox="right"`; `note` is optional. The start-box side selects `b3x_lsb.svg` or `b3x_rsb.svg` from `static/img/field`.

## Structured concept blocks

`concept` keeps its positional title and ordered YAML part model. Supported parts remain `text`, `code`, `truth`, `formula`, and `image`.

```markdown
{{< concept "A named number" >}}
- text: An integer stores a whole number.
- code: |
    int speed = @@750@@;
- formula: "distance = speed × time"
{{< /concept >}}
```

The `plsec`/`endplsec` pair, `concept`, overlays, asset publishing, section splitting, required-parameter helper, and core truth-table renderer retain their specialized structure.

## Glossary and mission references

The shared reference parser accepts:

| Syntax | Meaning |
| --- | --- |
| `[[ENCODER]]` | glossary entry |
| `[[ENCODER\|encoders]]` | glossary entry with display label |
| `[[PROTOTYPE:design\|prototype]]` | named glossary sense |
| `[[@2\|Mission 2]]` | mission reference |
| `[[@2:bonus\|Mission 2]]` | mission tier reference |

Unknown terms, senses, missions, and tiers fail the build. Mission references resolve from the mission page collection-not a parallel data file-and link to the stable `#base`, `#bonus`, or `#advanced` tier anchor. Page data contains only glossary references actually used on that page, with Python wording selected when `track: python` is set.

## 2027 Explorer missions and rules

The 2027 Explorer is ordinary Hugo content with no URL overrides or aliases:

```text
content/botball_explorer_2027/
├── _index.md
├── rules.md
└── missions/
    ├── mission-1/
    │   ├── index.md
    │   └── mission.mp4
    └── mission-18/
        ├── index.md
        └── mission.mp4
```

Do not add `missions/_index.md`. The Explorer root is the only mission index, and each mission is a leaf bundle whose explanatory video is a page resource.

Mission front matter is the source of truth for index cards, tier cards, video, and scoring summaries:

```yaml
title: "Mission 1 - Waypoint Alpha"
linkTitle: "Waypoint Alpha"
layout: mission
nav: missions
hub: true
body_class: explorer
styles: ["site-base", "hub", "explorer"]
mission_number: 1
weight: 1
skill: "Basic autonomous navigation and stopping at a specified location."
video: mission.mp4
tiers:
  - id: base
    points: 1
    difficulty: 1
    judging: live
    description: "A robot stops while [[IN THE ZONE]]."
  - id: bonus
    points: 1
    difficulty: 1
    judging: live
    description: "The robot returns [[FULLY WITHIN]] a starting box."
```

Mission rendering validates the mission number, bundle name, weight, tier order, point and difficulty ranges, judging mode, and every named page resource. The root build additionally requires the unique mission numbers 1 through 18.

Every mission body contains the comparison and ordinary Judge Notes:

```markdown
{{< score-examples >}}
scores:
  - "A robot enters and visibly stops."
does_not_score:
  - "The robot drives through without stopping."
{{< /score-examples >}}

## Judge Notes

- Judges must clearly observe the stop.
```

Competition definitions are maintained canonical data in `data/glossary.yaml` with `source: rules`. Rules Markdown supplies the heading, examples, and notes while definition prose comes from data:

```markdown
### Touching

{{< rule-definition term="TOUCHING" >}}
```

The former extraction script, `data/missions.yaml`, field-popup payload, and `window.KIPR_MISSIONS` are intentionally absent. Never regenerate curated rule definitions from legacy HTML.

## Document sidebar

Pages opt into the heading-derived sidebar in front matter:

```yaml
sidebar:
  title: "Rule Sections"
  start_level: 2
  end_level: 2
  numbered: true
```

Levels must be integers from 1 through 6 and the end cannot precede the start. Enabling the sidebar without a heading in that range fails the build. Labels and targets always come from Hugo's heading fragments; do not author a second navigation list. Desktop uses the sticky aside, mobile uses a closed `<details>` menu, and both are hidden in print. The `.is-active` class is reserved for a future enhancement; no scrollspy runs today.

## Expected failures

| Invalid source | Build failure |
| --- | --- |
| `{{< repeattable count=4 >}}` | missing required `prefix` |
| `{{< gridtable >}}` without `columns` | missing columns list |
| an explicit table input without `key` | input cell needs a key |
| a calc part with an unknown key | part must be prose, formula, equation, or note |
| a calc equation token without `text` or `input` | invalid equation token |
| a code fence without a language | code block has no language |
| `{{< code lang="not-a-language" >}}` | unsupported Chroma language |
| an unmatched shortcode emphasis marker | unmatched emphasis marker |
| an unknown `[[TERM]]` | term is absent from glossary data |
| an unknown mission tier | tier is absent from the resolved mission page |
| a mission video missing from its leaf bundle | mission video is not a page resource |
| an empty side navigation range | sidebar has no headings in its configured range |

## Page references and legacy paths

Navigation entries define exactly one destination: `page` for Hugo content or `url` for a still-static legacy page. Page references must be lowercase and must resolve during the build.

```yaml
- id: labs
  name: C Labs
  page: /labs
- id: missions
  name: 2027 Missions
  page: /botball_explorer_2027
```

Section edition toggles follow the same rule through the `toggle_page` front matter field. Do not write `.html` paths for Hugo content; page-object links emit the configured canonical URL automatically.

## Verification

Build drafts and validate syntax highlighting:

```sh
build_dir="$(mktemp -d)"
hugo --buildDrafts --destination "$build_dir" --printPathWarnings --logLevel error
node tools/check_syntax_highlighting.js "$build_dir"
node tests/test_lab_persistence.js
node tests/test_glossary_dialog.js
```

The migration-specific validators and utilities were retired after the Hugo
migration was accepted. The frozen inventory and exception data remain as
historical evidence, but are not part of routine verification.

Always publish from a newly created destination and replace the deployed Hugo artifact as a unit. Reusing an earlier output directory can retain obsolete flat `.html` files or the old uppercase `Python_Labs` tree.

For a migration, capture a baseline build when one is available, but compare contracts rather than raw files. Appropriate checks include:

- each page's sorted `data-key` multiset and keyed initial values;
- duplicate keys, duplicate IDs, unresolved `label[for]` values, and unlabelled controls;
- glossary references, serialized glossary payloads, and resolved mission/tier links;
- resolved `href`/`src` targets and the published static-asset inventory;
- figure sources/alts, overlay availability, and screen/print visibility;
- copied code text, syntax languages, emphasis markers, and filename tabs;
- visible content and representative screen/print appearance.

Normalize or deliberately ignore incidental differences such as whitespace, attribute order, generated IDs, wrapper depth, semantic CSS-class consolidation, and visual differences explicitly accepted by the migration. If a comparison reports a difference, decide whether it crosses a compatibility boundary before changing shared code to imitate old markup.

Always spot-check at least one representative use of every component family affected by the migration. A successful build alone does not prove accessibility, print behavior, or submission compatibility; conversely, a non-identical HTML file is not evidence of a regression by itself.
