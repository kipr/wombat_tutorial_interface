# Development and verification

## Environment

The supported container is defined by `Dockerfile` and `.devcontainer/`:

- Hugo `v0.164.0` from the official extended image;
- Python 3 for repository validators; and
- Node for dependency-free browser-behavior tests.

There is no package installation step and no task runner. If working outside
the container, use the pinned Hugo version to avoid template or Goldmark drift.

Check the active version:

```sh
hugo version
```

## Preview and build

For normal authoring:

```sh
hugo server
```

Include drafts when working on the syntax fixture or a newly created draft:

```sh
hugo server --buildDrafts
```

For a production-style build, use a new destination rather than `public/` from
an earlier run:

```sh
build_dir="$(mktemp -d)"
hugo --destination "$build_dir" --printPathWarnings --logLevel error
```

The syntax validator requires the draft-only fixture, so the full verification
build is:

```sh
build_dir="$(mktemp -d)"
hugo --buildDrafts --destination "$build_dir" --printPathWarnings --logLevel error
```

## Verification commands

Run these from the repository root against that fresh build:

```sh
python3 tools/check_syntax_highlighting.py "$build_dir"
python3 tools/check_explorer_migration.py "$build_dir"
python3 tools/check_discovery_migration.py --mode full "$build_dir"
node tests/test_lab_persistence.js
node tests/test_glossary_dialog.js
```

What they cover:

| Check | Main contract |
| --- | --- |
| Hugo build | Template evaluation, required content, references, resources, and shortcode validation. |
| `check_syntax_highlighting.py` | Languages, Chroma output, copied code, `@@...@@` emphasis, and stylesheet publication. |
| `check_explorer_migration.py` | Explorer hierarchy, 18 missions, tiers, videos, score data, rules, sidebars, IDs, and links. |
| `check_discovery_migration.py` | Clean URLs, accessible fields, assets, persistence, and legacy Discovery contracts. |
| `test_lab_persistence.js` | Checkbox/text restore, autosave, export payload, and print submission flow. |
| `test_glossary_dialog.js` | Semantic activation, close behavior, Escape, and focus return. |

The Node tests execute `static/js/lab.js` in small mocked DOMs. They do not
require a browser or npm dependencies.

### Current Discovery checker status

As audited on 2026-08-10, the Hugo build, syntax check, Explorer check, and both
Node tests pass. The complete Discovery checker reaches all 31 project pages
but reports 48 existing contract differences: glossary term/sense multisets on
30 pages, saved controls on 11 pages, and image metadata/order on 7 pages. That
is an open baseline/exception reconciliation issue, not a reason to skip the
check.

The checker's `fixture` mode belongs to the earlier Stage 1 infrastructure
phase and now fails because the fixture bodies have been replaced. Use `full`
for the current content and report its known glossary differences until the
baseline or approved exceptions are reconciled.

## Migration-only tools

`tools/discovery_inventory.py` parses frozen HTML into, or checks it against,
the immutable Discovery inventory. Its default input is `backup/discovery`, so
that legacy tree must be present:

```sh
python3 tools/discovery_inventory.py --check data/discovery-legacy-inventory.json
```

`tools/compare_render.py` compares one legacy and generated page by normalized
DOM, fields, glossary keys, and mission links. Use `--help` for URL-normalizing
options.

`tools/migrate_discovery_coding.py` is a source-writing migration utility. With
no arguments it rewrites all 17 Coding projects; numeric arguments restrict it
to selected projects. It also normalizes Coding persistence IDs in the legacy
inventory. Review the worktree before and after running it.

## Publishing

Publish a newly built destination as one artifact. Do not overlay it on an old
deployment: obsolete flat `.html` files and the former uppercase
`Python_Labs` tree can otherwise survive even though Hugo no longer generates
them.

No checked-in CI workflow currently defines an additional build or deploy
process. The commands above are the repository's executable verification
contract.
