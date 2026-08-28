# Architecture

## Stack

The site is a custom Hugo site with no theme, Hugo module, JavaScript package
manager, or application framework. The container pins Hugo
`v0.164.0`; the JavaScript validator and tests use only Node's built-in
modules.

Goldmark is configured in `hugo.toml` to:

- reject authored raw HTML (`unsafe = false`); pages use Markdown, shortcodes, and block attributes instead;
- enable typographer so ASCII quotes, dashes, and ellipses in Markdown prose become curly quotes, en/em dashes, and ellipses on render (front matter is not Markdown, so it must already contain those final characters);
- allow block attributes such as `{.muted}` and `{.obj}`;
- leave standalone images unwrapped; and
- use class-based Chroma highlighting with the palette in `assets/css/syntax.css`.

The configured `baseURL` includes the GitHub project path. Internal renderers
still deliberately emit relative URLs so the output works at a domain root,
under a project mount, and when opened from a local directory.

## Repository map

| Path | Responsibility |
| --- | --- |
| `content/` | Markdown, front matter, Explorer mission leaf bundles, and educator-facing hubs. |
| `layouts/` | Base template, page-family layouts, render hooks, shortcodes, and internal partials. |
| `assets/css/` | CSS minified and fingerprinted through Hugo Pipes when referenced by a page's `styles` list. |
| `static/` | Files copied as-is: images, JavaScript, PDF, SVG, and the legacy scoring app. |
| `build-targets/` | Optional Hugo configuration overlays that publish curated content selections. |
| `data/nav.yaml` | Canonical top-level navigation. |
| `data/glossary.yaml` | Canonical curriculum and competition definitions. |
| `data/discovery-*.json` | Frozen legacy contract and narrowly approved migration exceptions. |
| `tools/` | The build-output validator. |
| `tests/` | Dependency-free Node regression tests for worksheet browser behavior. |
| `archetypes/` | Generic Hugo draft and a Discovery project starting point. |
| `backup/` | Legacy/reference material; it is not published by Hugo. |

## Page families

### Content paths, page kinds, and template lookup

Hugo uses a content file's location for more than its URL. The location can
also determine the page kind, section, and inferred content `type`, which in
turn control template lookup.

- `content/example.md` is a regular page at `/example/`.
- `content/example/index.md` is a leaf bundle at the same `/example/` URL; the
  directory may also contain page-owned resources.
- `content/example/_index.md` is a branch bundle (usually a section or hub),
  not an interchangeable spelling of `index.md`.

The front-matter `layout` value is a template name, not a global template path.
Hugo considers it together with the page's `type`. For example,
`content/botball_explorer_2027/rules.md` inherits the
`botball_explorer_2027` type and `layout: rules` selects
`layouts/botball_explorer_2027/rules.html`. Copying that file to a top-level
leaf bundle such as `content/example/index.md` does not carry the inferred
type with it. To intentionally reuse that renderer, declare both values:

```yaml
type: botball_explorer_2027
layout: rules
```

Otherwise, provide a layout for the new page family. Do not set an unrelated
type merely to make a page render; the type is the page's renderer contract,
not just a build workaround.

One especially confusing failure mode is that Hugo may discover such a page,
allow `site.GetPage` (and therefore a validated card or navigation reference)
to resolve it, and still emit no HTML when no matching layout exists. The build
can finish successfully while the link leads to a 404. See the missing-page
checks in [Development and verification](development.md#page-exists-but-the-browser-shows-404).

### Home and section hubs

`content/_index.md` drives the home cards. The C and Python lab indexes group
The Discovery root is a four-choice hub: shared Systems plus Wombat, EV3, and
SPIKE Coding. Coding hubs set `platform` and `heading_accent: Coding`. Systems
prerequisite badges resolve the matching project on every coding platform.

Educator Resources (`content/resources/`) is the teacher-facing hub for guides,
research, and standards materials. Its cards can resolve Hugo pages or literal
static-file targets. The Standards Correlations page remains at
`content/standards-correlations/`; its list layout globs
`static/standards-correlations/` at build time: exactly one
`ISTE_Standards.xlsx` plus any
`{Name}_CS1_State_Standards.xlsx` files (`New_York` → `New York`). Unexpected
files or subdirectories fail the build. There is no separate YAML catalog for
those downloads.

Pages with `hub: true` use hub navigation and the hub footer. Other pages use
the worksheet top bar. A card or navigation entry must define exactly one of a
Hugo `page` reference or a literal `url` for a static legacy target.

### Worksheets

`content/labs/`, `content/python_labs/`, and Discovery project pages ultimately
use the `labs` or `discovery` single layout. Both delegate the main document to
`layouts/_partials/worksheet-main.html`. EV3 and SPIKE arm/claw placeholders
use `layouts/discovery/build-placeholder.html`.

That renderer adds the hero, metadata, PIN/submission controls, authored
content, previous/next navigation, and credit. It then:

1. resolves `[[...]]` glossary and mission references;
2. renders level-two worksheet headings and splits them into semantic sections;
3. optionally wraps the result in the heading-derived document sidebar; and
4. emits glossary/figure dialogs and page-specific glossary JSON only when used.

`mission_id` activates local draft persistence and submission UI. Every
element carrying `data-key` is saved in `localStorage`, exported in the result
JSON, and restored on reload by `static/js/lab.js`.

### Explorer missions and rules

The Explorer root is the only mission index. Its layout requires exactly 18
mission pages numbered 1 through 18. Each mission is a leaf bundle under
`content/botball_explorer_2027/missions/mission-N/`; front matter supplies the
tier cards, and one explanatory video is a page resource in the same bundle.

The rules page uses its own layout plus the shared document sidebar. Official
definition prose lives in `data/glossary.yaml`, marked `source: rules`, and is
inserted with `rule-definition`; it is not duplicated in rules Markdown.

### Glossary

The glossary page is generated from `data/glossary.yaml`. Non-rules entries
appear as glossary cards; rules entries remain available to reference tokens
and the rulebook but are omitted from the curriculum glossary list. The build
also discovers which pages use each term. `static/js/glossary.js` adds client-
side filtering and highlighting.

## Templates and public APIs

`layouts/_shortcodes/` is the public API for Markdown authors. Shortcodes
validate their own authoring input and delegate reusable markup to
`layouts/_partials/`. Content should never call a partial directly.

Important internal paths include:

- `codeblock.html` for both fenced code and the `code`/`concept` shortcodes;
- `panel.html` for all semantic panel shortcodes;
- `text-input.html`, `textarea.html`, and `checkbox.html` for accessible fields;
- `relative-url.html` for content, assets, scripts, and static files;
- `parse-reference.html` and `resolve-reference.html` for glossary and mission
  tokens; and
- `validate-discovery-project.html` and `validate-mission.html` for build-time
  content contracts.

The default heading render hook styles worksheet headings. The Explorer rules
section overrides it to preserve explicitly authored heading attributes.

## CSS and static assets

A page's `styles` front-matter list names files under `assets/css/` without the
extension. `head.html` asks `asset.html` to publish each file through Hugo
Pipes (`minify | fingerprint`) and return a page-relative URL. The default
worksheet set is `site-base`, `worksheet`, `syntax`, and `print`.

Files under `static/` keep their site-relative paths. For `figrow`, paths with
a slash are resolved below `static/img/`. Shared kit and controller images stay
under their shared `static/img/...` directories, including assembly sequences
under `static/img/kit/assembly/`. The `sketch` shortcode uses the Botball field
diagrams in `static/img/field/`. A bare filename resolves to a page resource
colocated in the current content section. Mission videos are page resources in
their mission leaf bundles. Standards correlation workbooks live in
`static/standards-correlations/` and are listed by that section's list layout,
not by hand-written page links.

`static/score.html` is still a standalone legacy application. Link to it with a
literal URL rather than a Hugo page reference.
