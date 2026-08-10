# Migration contracts

## Preserve behavior, not bytes

A successful migration does not reproduce legacy HTML byte for byte. Hugo,
Goldmark, and shared renderers may change whitespace, wrapper depth, generated
IDs, CSS classes, attribute order, and minor styling.

Preserve what people and integrations use:

- authored meaning, activities, and interactive fields;
- every field's stable `data-key`, type, label, initial value, and persistence
  identifier;
- glossary terms/senses, mission references, and page-specific data payloads;
- working links and assets from all supported mount locations;
- unique IDs, associated labels, useful accessible names, keyboard behavior,
  and focus return;
- copied code, declared language, emphasis, and filename tabs; and
- intended screen/print visibility.

Exact markup is a contract only when an explicitly identified external
consumer or canonical snapshot requires it.

## Reuse order

Before adding a component:

1. Use Markdown for prose, lists, static tables, and ordinary code fences.
2. Use an existing semantic shortcode.
3. Add a thin semantic shortcode over an existing partial when a distinct
   authoring name is valuable.
4. Extend shared behavior only when the option is broadly useful and keeps the
   existing contract intact.
5. Add a new partial or shortcode only for a genuinely new reusable concept.

Search `layouts/_shortcodes/`, `layouts/_partials/`, and
[shortcodes.md](shortcodes.md) before writing markup. A shortcode validates
author input; a partial owns internal rendering. Avoid copied HTML and generic
variant switches when an existing semantic component communicates intent.

## Hard compatibility boundaries

### Stored worksheet data

`mission_id` determines the local-storage slot and exported result filename.
`key` determines `data-key` and therefore the `answers` property in saved and
exported JSON. Renaming either loses compatibility with existing student work
and downstream consumers.

When a field renderer emits a control ID, it derives that ID from the key by
replacing underscores with hyphens. Do not author IDs. All controls need
visible labels or accessible names supplied through their renderer.

### References and URLs

Hugo content references are lowercase page paths resolved at build time.
Static legacy files use literal paths. Shared relative-URL rendering is what
keeps nested pages, project mounts, and local-file output working; do not bypass
it in layouts.

Glossary and mission token resolution is strict. Never replace a canonical
mission summary or rules definition with copied prose that can drift from its
source page/data.

### Print and interaction

`.no-print` is the common screen-only contract. Use it for controls or actions
that cannot be performed on paper, not for information a printed worksheet
needs. Figure and definition dialogs must remain keyboard-operable and return
focus to their trigger.

## Migration workflow

1. Capture or confirm the frozen legacy contract before changing authored
   content.
2. Inventory fields, persistence IDs, glossary/mission tokens, figures, links,
   and initial values.
3. Choose the closest current page and shared shortcodes.
4. Move page identity and repeated display data into front matter or canonical
   data files.
5. Move shared behavior into a partial only when existing renderers do not fit.
6. Build into a brand-new destination with drafts.
7. Run validators and compare one representative page from every affected
   component family.
8. Review screen, print, labels, keyboard use, and visible meaning in addition
   to automated output.

Do not change shared rendering merely to silence an incidental raw-HTML diff.
First decide whether the difference crosses one of the contracts above.

## Baselines and intentional exceptions

`data/discovery-legacy-inventory.json` is the machine-readable frozen
Discovery baseline. `tools/discovery_inventory.py` creates or verifies it from
legacy HTML. Treat the inventory as immutable evidence, not as expected output
to update casually.

Intentional contract changes belong in
`data/discovery-migration-exceptions.json`. Keep each exception narrow: identify
the page, collection/index or stable field, exact old and new value, and a
human-readable reason. The checker verifies the old value so stale exceptions
do not silently weaken a whole class of comparison.

`data/glossary-conflicts.yaml` is a holding area for terms whose competing
definitions still require a human decision. Intentional homonyms that should
remain live belong as named `senses` in `data/glossary.yaml`.

## Tool roles

| Tool | Use |
| --- | --- |
| `discovery_inventory.py` | Extract or verify the legacy Discovery behavior inventory. |
| `migrate_discovery_coding.py` | Rewrite selected/all Coding project sources; source-mutating, so review carefully. |
| `compare_render.py` | Normalize and compare a legacy page with one generated page. |
| `check_discovery_migration.py` | Validate generated Discovery structure and, in full mode, the inventory contract. |
| `check_explorer_migration.py` | Validate the canonical Explorer hierarchy, rules, missions, tiers, videos, and links. |
| `check_syntax_highlighting.py` | Validate all generated code paths and teaching emphasis. |

The former extracted mission data/script payload is intentionally absent.
Explorer mission leaf-bundle front matter is the source of truth. Curated
competition definitions must not be regenerated from legacy HTML.

## Review checklist

- Compare sorted `data-key` multisets, types, labels, and initial values.
- Check duplicate keys/IDs, unresolved `label[for]`, and unlabeled controls.
- Compare glossary term/sense multisets and mission/tier targets.
- Resolve every `href` and `src`; compare relevant published static assets.
- Compare figure order, source, alt, caption, zoom availability, and focus.
- Compare copied code, language, emphasis markers, and filename labels.
- Check relative URLs at multiple nesting depths.
- Inspect representative screen and print output.
- Publish only from a clean destination so obsolete routes cannot survive.
