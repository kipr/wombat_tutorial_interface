# Contributor guide for agents

This repository contains the Hugo source for KIPR's student-facing Botball
worksheets, Discovery projects, and Botball Explorer materials. Treat Markdown,
YAML, layouts, and static assets as source; do not edit generated `public/` or
`resources/_gen/` output.

## Start here

Read the [documentation index](docs/README.md) and the guide relevant to the
task before making changes:

- [Architecture](docs/architecture.md) explains page families, canonical data,
  rendering paths, and asset ownership.
- [Development and verification](docs/development.md) contains the authoritative
  build and test commands.
- [Content authoring](docs/content-authoring.md) defines front matter, student
  voice, references, field keys, accessibility, and asset conventions.
- [Shortcode reference](docs/shortcodes.md) is the public component API for
  authored Markdown.
- [Migration contracts](docs/migration-contracts.md) identifies behavior that
  must remain compatible with legacy pages and saved student work.

## Working rules

- Make the smallest change that fits an existing page family or shared
  component. Search `layouts/_shortcodes/`, `layouts/_partials/`, and the
  shortcode reference before adding markup or a new renderer.
- Do not add raw HTML to content. Use Markdown, block attributes, or an existing
  shortcode; Goldmark intentionally renders with authored raw HTML disabled.
- Preserve existing `mission_id`, field `key`/`data-key`, page identity, and
  persistence values unless the task explicitly changes their compatibility
  contract. Renaming them can discard students' saved worksheet data.
- Keep definitions and repeated facts canonical. Glossary and official rule
  text belong in `data/glossary.yaml`; Explorer mission metadata belongs in the
  mission leaf bundle; navigation belongs in `data/nav.yaml`.
- Use lowercase Hugo page references for content and literal URLs only for
  static targets. Preserve the shared relative-URL path so builds work at a
  domain root, project mount, and from local files.
- Preserve useful labels, alternative text, keyboard behavior, print meaning,
  and stable links when changing UI or content.
- Treat `backup/` and `data/discovery-legacy-inventory.json` as reference
  evidence. Do not casually regenerate baselines or broaden migration
  exceptions to make a check pass.
- Review the existing worktree before editing and leave unrelated changes
  untouched.

## Verification

Use the pinned Hugo environment. Build into a fresh directory so stale output
cannot hide missing pages or assets:

```sh
build_dir="$(mktemp -d)"
hugo --buildDrafts --destination "$build_dir" --printPathWarnings --logLevel error
```

Run the checks that cover the changed area, following
[docs/development.md](docs/development.md) for the full commands. At minimum, a
source or template change should receive a fresh Hugo build. JavaScript
behavior changes should run the relevant dependency-free Node test.

In the final handoff, report which checks ran and any failures.

## Cursor Cloud specific instructions

The cloud VM does not use the repo `Dockerfile`/`.devcontainer/`. Hugo
`v0.164.0` extended is installed to `/usr/local/bin/hugo` by the startup update
script; `node` is preinstalled. There is no `package.json`, no `npm install`
step, and the `tools/` and `tests/` scripts use only Node built-ins, so the
build, lint, and test commands documented under `docs/` run as-is.

Pandoc `3.6.4` and its custom-writer documentation are required for Discovery
HTML imports. Repository Cloud Agent setup runs `sh tools/cloud-install.sh`
(see `.cursor/environment.json`). If `pandoc` is missing in an already-running
VM, run that script once:

```sh
sh tools/cloud-install.sh
ls /usr/local/share/doc/pandoc/custom-writers.html
```

The importer is:

```sh
node tools/discovery-importer/import.js --help
```

It reads `html+raw_html` through the Lua writer at
`tools/discovery-importer/writer.lua` and refuses to overwrite existing
Markdown unless `--force` is passed. Leave `tbc/` unchanged; generated
Markdown under `content/discovery/` is the authored source after import.

Non-obvious gotchas when serving the dev server here:

- The configured `baseURL` includes the project mount, so a default
  `hugo server` serves pages under `/wombat-tutorial-interface/`. To browse at
  the localhost root instead, override the base URL:
  `hugo server --buildDrafts --bind 0.0.0.0 --port 1313 --baseURL http://localhost:1313/`.
  Pages are then at e.g. `http://localhost:1313/labs/prelab0/` (the root path
  `/` returns 200; the un-overridden `/wombat-tutorial-interface/` path returns
  404 in this mode).
- Worksheet auto-save/restore (`static/js/lab.js`) is keyed by page
  `mission_id` and persists every `[data-key]` control to
  `localStorage["kipr_<mission_id>_draft"]`. Verify it deterministically in the
  browser console (read `document.getElementById(...).value` after a reload)
  rather than by eye — small form text is easy to misread in screenshots/video.
- `node tools/check_theme_output.js <build_dir>` reports a pre-existing failure
  on the static `ISTE_Standards.html` download page; it is not part of the
  documented verification command set under `docs/`.
