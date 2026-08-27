# Development and verification

## Environment

The supported container is defined by `Dockerfile` and `.devcontainer/`:

- Hugo `v0.164.0` from the official extended image;
- Node for the dependency-free build-output validator and browser-behavior
  tests.

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

### Pilot build target

The optional `pilot` target publishes a curated set of missions, educator
resources, labs, and Discovery projects. It does not change the default build
or filter files below `static/`.

Preview the target with:

```sh
hugo server --config hugo.toml,build-targets/pilot.toml
```

Build it into a fresh destination with:

```sh
pilot_dir="$(mktemp -d)"
hugo --config hugo.toml,build-targets/pilot.toml \
  --destination "$pilot_dir" --printPathWarnings --logLevel error
node tools/check_internal_links.js "$pilot_dir"
```

Each target configuration is a complete allow-list for the content mount.
Include branch `_index.md` files needed for hubs and every referenced Hugo page
that should remain linked. The full build remains the authoritative content
and syntax validation pass.

## Page exists but the browser shows 404

A successful build does not prove that every discovered content page produced
an output file. Hugo can know about a page (so `site.GetPage` and a validated
card link resolve) but omit its HTML when it cannot find a matching layout.

Start by asking Hugo what it inferred for the page:

```sh
hugo list all | rg 'content/path/to/page|expected-url'
```

Check the row's `kind`, permalink, and especially `type`, then build into a
fresh directory and inspect the expected output rather than an older `public/`
tree:

```sh
build_dir="$(mktemp -d)"
hugo --buildDrafts --destination "$build_dir" --printPathWarnings --logLevel error
find "$build_dir" -path '*expected-url*' -print
```

If the page is listed but its `index.html` is absent, compare its front matter
and location with the available files under `layouts/`. Remember:

- `layout: rules` does not mean “use any `rules.html` in the repository”; Hugo
  combines it with the page type;
- moving a copied page to another top-level section can change or remove its
  inferred type;
- a top-level `name/index.md` leaf bundle can therefore need an explicit
  `type`, even when the original `section/name.md` did not; and
- `index.md` creates a leaf page while `_index.md` creates a branch/section.

For an intentional cross-section reuse, set the original page-family type
explicitly, for example:

```yaml
type: botball_explorer_2027
layout: rules
```

If the page is absent from `hugo list all`, check spelling, front-matter syntax,
and `draft`, `date`, `publishDate`, and `expiryDate` instead. If the output file
exists but the browser still returns 404, verify the requested URL includes the
configured project mount (`/wombat-tutorial-interface/` for the published
site) and restart `hugo server` if it was not watching the new directory.

## Verification commands

Run these from the repository root against that fresh build:

```sh
node tools/check_syntax_highlighting.js "$build_dir"
node tools/check_internal_links.js "$build_dir"
node tests/test_lab_persistence.js
node tests/test_glossary_dialog.js
```

What they cover:

| Check | Main contract |
| --- | --- |
| Hugo build | Template evaluation, required content, references, resources, and shortcode validation. |
| `check_syntax_highlighting.js` | Languages, Chroma output, copied code, `@@...@@` emphasis, and stylesheet publication. |
| `check_internal_links.js` | Generated relative `href`, `src`, and `poster` targets and HTML fragments. |
| `test_lab_persistence.js` | Checkbox/text restore, autosave, export payload, and print submission flow. |
| `test_glossary_dialog.js` | Semantic activation, close behavior, Escape, and focus return. |

The Node tests execute `static/js/lab.js` in small mocked DOMs. They do not
require a browser or npm dependencies.

## Publishing

Publish a newly built destination as one artifact. Do not overlay it on an old
deployment: obsolete flat `.html` files and the former uppercase
`Python_Labs` tree can otherwise survive even though Hugo no longer generates
them.

The GitHub Pages workflow runs the same verification commands before creating
and deploying its production build. The commands above are the repository's
executable verification contract.
