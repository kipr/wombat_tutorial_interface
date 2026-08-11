# Wombat Tutorial Interface

This repository contains the Hugo source for KIPR's student-facing Botball
worksheets, Discovery projects, and Botball Explorer materials. Content is
authored in Markdown and YAML, then rendered through shared layouts and
shortcodes into an accessible, printable static site.

## Quick start

The development container includes the pinned Hugo version and all validation
runtimes. From the repository root, start a local preview with:

```sh
hugo server --buildDrafts
```

There is no package-install step. For a production-style check, build into a
fresh temporary directory and run the validators described in the development
guide; generated `public/` and `resources/_gen/` output is not source.

## Documentation

Start with the [documentation index](docs/README.md), which routes common work
to the relevant guide:

- [Architecture](docs/architecture.md) for the repository map and rendering
  pipeline.
- [Development and verification](docs/development.md) for supported versions,
  build commands, and checks.
- [Content authoring](docs/content-authoring.md) for page families, front
  matter, links, assets, accessibility, and writing conventions.
- [Shortcode reference](docs/shortcodes.md) for reusable authoring components.
- [Migration contracts](docs/migration-contracts.md) for persistence, legacy
  compatibility, and intentional exceptions.

When changing content, copy the nearest page from the same family and preserve
stable `mission_id` and field `key` values: they identify saved student work.
