# Project documentation

This directory is a concise guide to the current Hugo implementation. It is
intended for maintainers and curriculum authors who need to change the site
without rediscovering its migration constraints.

Start with the document that matches the work:

- [Architecture](architecture.md) explains the repository, page families,
  rendering pipeline, data, assets, and browser behavior.
- [Development and verification](development.md) covers the pinned Hugo
  environment, local builds, checks, and publishing discipline.
- [Content authoring](content-authoring.md) describes front matter, page
  structure, references, assets, and the curriculum's writing style.
- [Shortcode reference](shortcodes.md) is the author-facing component catalog
  with the most common forms and parameters.
- [Migration contracts](migration-contracts.md) records what must survive an
  HTML-to-Hugo migration and how the migration tools fit together.

`MIGRATION.md` remains the long-form source for component schemas, examples,
expected build failures, and migration rationale. These files organize the
same system around day-to-day tasks and note where the checked-in site has
moved beyond older migration-stage descriptions.

## Guiding principles

1. Treat Markdown and shortcodes as the authored source; generated HTML is an
   artifact.
2. Preserve behavior and stored worksheet data, not incidental legacy markup.
3. Reuse shared rendering paths before introducing new HTML or CSS variants.
4. Make invalid content fail during the Hugo build.
5. Build into a fresh destination before validating or publishing.

