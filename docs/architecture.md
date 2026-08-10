# Architecture

## Stack

The site is a custom Hugo site with no theme, Hugo module, JavaScript package
manager, or application framework. The container pins Hugo
`v0.164.0`; Python verification scripts use only the standard library, and the
JavaScript tests use Node's built-in modules.

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
| `content/` | Markdown, front matter, and Explorer mission leaf bundles. |
| `layouts/` | Base template, page-family layouts, render hooks, shortcodes, and internal partials. |
| `assets/css/` | CSS published through Hugo Pipes when referenced by a page's `styles` list. |
| `static/` | Files copied as-is: images, JavaScript, PDF, SVG, and the legacy scoring app. |
| `data/nav.yaml` | Canonical top-level navigation. |
| `data/glossary.yaml` | Canonical curriculum and competition definitions. |
| `data/discovery-*.json` | Frozen legacy contract and narrowly approved migration exceptions. |
| `tools/` | Build-output validators, migration helpers, and render comparison tools. |
| `tests/` | Dependency-free Node regression tests for worksheet browser behavior. |
| `archetypes/` | Generic Hugo draft and a Discovery project starting point. |
| `backup/` | Legacy/reference material; it is not published by Hugo. |

## Page families

### Home and section hubs

`content/_index.md` drives the home cards. The C and Python lab indexes group
their regular pages by `hub_unit`; Discovery hubs derive strand, phase, count,
pace, and gate cards from their child pages. Do not maintain a second list of
Discovery projects.

Pages with `hub: true` use hub navigation and the hub footer. Other pages use
the worksheet top bar. A card or navigation entry must define exactly one of a
Hugo `page` reference or a literal `url` for a static legacy target.

### Worksheets

`content/labs/`, `content/python_labs/`, and Discovery project pages ultimately
use the `labs` or `discovery` single layout. Both delegate the main document to
`layouts/_partials/worksheet-main.html`.

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
`content/botball_explorer_2026/missions/mission-N/`; front matter supplies the
tier cards and images are page resources in the same bundle.

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
extension. `head.html` resolves and publishes each resource. The default
worksheet set is `site-base`, `worksheet`, `syntax`, and `print`.

Files under `static/` keep their site-relative paths. In particular,
`figrow` prepends `img/` to its authored `src`. Discovery-owned figures use
`static/img/discovery/<strand>/<project>/...`; shared kit and controller images
stay under their shared `static/img/...` directories. Mission diagrams are the
exception: they are colocated page resources in mission leaf bundles.

`static/score.html` is still a standalone legacy application. Link to it with a
literal URL rather than a Hugo page reference.
