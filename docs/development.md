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

## Verification commands

Run these from the repository root against that fresh build:

```sh
node tools/check_syntax_highlighting.js "$build_dir"
node tests/test_lab_persistence.js
node tests/test_glossary_dialog.js
```

What they cover:

| Check | Main contract |
| --- | --- |
| Hugo build | Template evaluation, required content, references, resources, and shortcode validation. |
| `check_syntax_highlighting.js` | Languages, Chroma output, copied code, `@@...@@` emphasis, and stylesheet publication. |
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
