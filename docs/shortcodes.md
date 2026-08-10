# Shortcode reference

Shortcodes are the Markdown author's component API. Their implementations live
in `layouts/_shortcodes/`; shared partials are internal and must not be called
from content. Hugo deliberately fails on missing required parameters, invalid
YAML shapes, inaccessible fields, unsupported code languages, and unresolved
references.

Use plain Markdown when it already expresses the content. `MIGRATION.md`
contains the most detailed schemas and failure examples; this is the working
catalog.

## Response and checklist fields

| Shortcode | Required input | Optional input / behavior |
| --- | --- | --- |
| `ask` | `key`, `label`, body prompt | `n` displays a question number; emits a textarea. |
| `answer` | `key`, `label` | `placeholder`; standalone textarea. |
| `short-answer` | `key`, `label` | `prompt`, `placeholder`; one-line input. |
| `steps` | `key`, `label`, `count` | `start=1`, `group`; keys become `<key>_<number>`. |
| `checklist` | YAML list of `key` and `label` | Labels support inline Markdown and references. |
| `rec` | YAML list of `key` and `label` | Per-field `placeholder`; compact recording grid. |
| `namebar` | None | Fixed keys `reflect_name` and `reflect_date`. |
| `signoff` | YAML `check` map and `fields` list | Each entry requires `key` and `label`; title is fixed. |

```markdown
{{< ask key="p3_predict" label="Prediction" n=1 >}}
What do you predict the robot will do?
{{< /ask >}}

{{< checklist >}}
- key: p3_tested
  label: "We tested with the wheels clear of the floor."
{{< /checklist >}}
```

Keys are persisted data contracts. Preserve existing values during edits and
migration.

## Panels

Panel bodies are Markdown. Use `{{< >}}` delimiters; each panel shortcode
renders its body with `RenderString` so the wrapper HTML is not re-parsed.
Do not nest other shortcodes inside a panel body: Hugo expands the nested
shortcode first, leaving raw HTML in `.Inner`, which Goldmark then omits.

| Shortcode | Parameters | Meaning |
| --- | --- | --- |
| `callout` | optional `title`; `variant=red|navy|gold` | General-purpose panel; red is default. |
| `safety` | optional `title`; `noprint=true` | Hardware or operational safety warning. |
| `warn` | optional `title` | Caution about drift, changing values, or constraints. |
| `widgetstep` | optional `title` | Navy controller walkthrough; always screen-only. |
| `gate` | required `title` | Red PreLab readiness or next-step gate. |
| `resetbox` | required `title` | Gold error-reset checkpoint. |

```markdown
{{< safety title="⚠ Test in your hands first" noprint=true >}}
Hold the robot clear of the floor before running the program.
{{< /safety >}}
```

Prefer a semantic panel name over using a color to imply the meaning.

## Tables and calculations

Use a Markdown table for static reference data.

`repeattable` generates predictable rows. It requires `count` and `prefix` and
accepts an optional `caption`. Its YAML body is a column list. A number column
uses `kind: number`; input columns require `key` and may set `head`, `width`,
`aria`, `align`, `example`, or a static first-row `seed`. Row keys become
`<prefix><row>_<key>`.

```markdown
{{< repeattable count=4 prefix="trial" caption="Run log" >}}
- kind: number
  head: Try
- head: Target
  key: target
- head: Result
  key: result
{{< /repeattable >}}
```

`gridtable` represents explicit columns and rows and accepts only optional
`caption`. Its body has `columns` and `rows`. Static cells use `text`; editable
cells require `key` and may use `aria`, `placeholder`, `value`, or `align`. A
row may be a cell list or `{class, cells}`. Input labels fall back through the
explicit `aria`, column heading, first static row cell, then humanized key.

`calc` requires `title`, optionally accepts `noprint=true`, and takes an ordered
YAML list containing one `prose`, `formula`, `equation`, or `note` part per
item. Equation tokens contain either `text` or an `input` map; an input requires
`key` and may set `placeholder` and `aria`.

## Code and concepts

Use a normal fenced block with an explicit language for ordinary code. Use
`code` for a filename tab or `@@...@@` teaching emphasis:

```markdown
{{< code lang="c" filename="main.c" >}}
int speed = @@750@@;
{{< /code >}}
```

`lang` defaults to the page's `track`; `filename` is optional. The copied code
contains the emphasized text without the markers. Every code path uses the
same Chroma renderer and rejects unknown or missing languages.

`concept` takes a positional title and an ordered YAML body. Parts may be
`text`, `code`, `truth`, `formula`, or `image`. Code uses the page track and
supports teaching emphasis. Truth data supplies `heads` and `rows`; image data
requires `src` and may set `alt`.

```markdown
{{< concept "A named number" >}}
- text: An integer stores a whole number.
- code: |
    int speed = @@750@@;
- formula: "distance = speed × time"
{{< /concept >}}
```

## Figures and diagrams

`figrow` takes a non-empty YAML list. Every item requires `src` below
`static/img/` and `alt`. Optional `caption` overrides the visible caption;
`check_id` adds a PreLab inventory checkbox with key `part_<check_id>`. Columns,
zoom controls, keyboard behavior, and focus return are shared.

```markdown
{{< figrow >}}
- src: kit/controller.jpg
  alt: KIPR Wombat controller
- src: kit/motor.jpg
  alt: Motor and cable
{{< /figrow >}}
```

`sketch` creates a printable field area. It requires `aria`, `tag`, and
`startbox=left|right`; `note` adds a screen-only instruction.

`zonebar` is parameterless fixed content for the shared acceleration, cruise,
and deceleration diagram.

## PreLab structure

`plsec` requires `n` and `title` and opens a PreLab part. Close it with
`endplsec`. Keep all intervening widgets at document top level:

```markdown
{{< plsec n="Part 1" title="Check the kit" >}}

Ordinary prose and other shortcodes go here.

{{< endplsec >}}
```

This unusual pair avoids Hugo reparsing mixed shortcode output as nested
Markdown.

## Missions and rules

`mission-summary` renders canonical tier data. Supply exactly one of
`mission="2"` or `page="/botball_explorer_2026/missions/mission-2"`. Its
optional YAML body maps tier IDs to short status annotations.

`score-examples` requires non-empty `scores` and `does_not_score` YAML lists.
It is the shared responsive comparison on mission and rules pages.

`rule-definition` requires `term` and only accepts glossary entries marked
`source: rules`.

