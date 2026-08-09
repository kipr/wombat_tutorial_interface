# Discovery Curriculum Hugo Migration Plan

This plan covers the migration of the legacy Discovery curriculum in `docs/discovery` to Hugo. It follows the behavioral-contract guidance in `MIGRATION.md`: preserve saved-answer keys, values, accessibility relationships, navigation behavior, glossary behavior, mission references, assets, and print behavior while replacing legacy page-specific markup and scripts with shared Hugo components.

The work is deliberately split into two stages. Stage 1 establishes and verifies the shared Hugo infrastructure. Stage 2 migrates the curriculum onto that infrastructure.

## Agreed migration decisions

- Use Hugo's clean URLs. The site has not been deployed, so do not create aliases or redirects for the legacy `.html` URLs.
- Extract the four inline SVG diagrams into standalone SVG assets rather than retaining raw inline SVG in Markdown.
- Replace the password-writing activity with clearly fictional examples. Students must not enter, save, exchange, or download a real password.
- Update the password lesson using the current NIST guidance identified under “Systems Project 10: strong passwords.”
- Rewrite the Systems Project 9 HTTPS explanation in simple, browser-neutral language suitable for kindergarten through sixth grade.
- Rewrite the Coding Project 14 light-source guidance to say that any moderately powerful flashlight should work, including a phone flashlight.
- Use the existing canonical Hugo glossary and mission pages. Do not migrate the legacy Discovery glossary, page-local glossary dictionaries, old mission popups, or duplicated mission facts.

## Migration inventory and contracts

The legacy source contains:

- One Discovery landing page, one Coding hub, and one Systems hub
- 17 Coding projects and 14 Systems projects
- Saved text inputs, textareas, and 538 checkboxes identified by `data-key`
- 496 glossary-term occurrences covering 92 canonical terms
- 27 mission references and 27 embedded mission-summary cards
- 50 authored image occurrences, including four inline SVG diagrams
- Repeated worksheet structures for requirements, phases, procedures, callouts, recording tables, score examples, and bottom navigation

Before conversion begins, generate a machine-readable inventory directly from the legacy files. That inventory is the migration baseline for per-page `data-key` multisets, control types, placeholders, initial values, labels, mission IDs, glossary references, headings, links, images, captions, and alternative text. If a curriculum correction intentionally changes one of those values, record the exception instead of weakening the comparison.

Persisted identifiers are contracts. In particular, retain exact page identifiers such as `discovery_coding_14` and `discovery_systems_07`, because the current worksheet system uses them for local storage, submission payloads, and download filenames. Retain each response control's exact `data-key` unless an intentional exception is documented.

# Stage 1: Hugo structural updates

Stage 1 must be completed and tested before migrating project bodies. Its goal is to make Discovery pages expressible using shared layouts, partials, shortcodes, assets, and client-side behavior without copying legacy scripts or page-level CSS.

## 1. Define the Discovery content model and clean URL structure

Use the following content hierarchy:

```text
content/discovery/_index.md
content/discovery/coding/_index.md
content/discovery/coding/project-01.md
...
content/discovery/coding/project-17.md
content/discovery/systems/_index.md
content/discovery/systems/project-01.md
...
content/discovery/systems/project-14.md
```

This produces canonical URLs such as `/discovery/`, `/discovery/coding/`, and `/discovery/coding/project-01/`. Do not add `.html` aliases.

Define and document the page front matter before migrating bodies. At minimum, project pages need:

- `title`, `short_title`, and `weight`
- The exact legacy persistence identifier, currently exposed as `mission_id`
- Stylesheet selection for the shared worksheet, syntax, Discovery, and print styles
- Structured metadata for project number, strand, phase, time, and “What You Need” items
- Optional hub-card metadata such as a short description or pace label

Keep the existing `mission_id` field for compatibility unless a new, backward-compatible alias is added to the shared worksheet code. Do not rename it as part of this migration alone.

## 2. Add Discovery layouts and hub partials

Add a thin `layouts/discovery/single.html` that delegates project rendering to the existing shared worksheet layout.

Add a Discovery list layout, with small internal partials where useful, that can render:

- The root choice between Coding and Systems
- Phase-grouped project cards on both strand hubs
- The Systems pace legend
- Coding build gates between phases
- Hugo-resolved links to every project

Hub data should come from section children and front matter rather than a second hand-maintained project list. Project cards and gates are presentation components and should remain layout partials, not author-facing shortcodes.

The existing bottom navigation should support the nested Coding and Systems sections once weights, `short_title`, and section `index_label` values are present. Verify this rather than creating a Discovery-specific navigation implementation.

Update `data/nav.yaml` so the Discovery item resolves `page: /discovery` instead of using the legacy literal `discovery/index.html` URL.

## 3. Extend shared worksheet metadata

Extend the worksheet metadata renderer to support a labeled list of keyed checkboxes for “What You Need.” Each item must use the shared checkbox rendering path and preserve its source `data-key` and accessible label.

Prefer a structured front-matter representation, for example a metadata row containing a `checklist` or `items` collection, rather than embedding raw HTML in the definition string. Extract a worksheet-metadata partial if that keeps the shared layout small.

Regression-test existing Labs and Python Labs after changing the shared worksheet layout.

## 4. Support Discovery phase headings

Extend the shared heading render hook to recognize these Discovery phases:

- Try It
- Learn It
- Do It
- Score It

The generated `h2` elements must retain the `phase-head` class expected by worksheet sectioning and should render the phase name consistently with existing numbered phase badges. Establish one Markdown heading convention and use it throughout the migration, for example `## Try It — Observe the Wombat`.

Do not force a `Score It` section onto a source page that intentionally lacks one. Systems Project 14 is currently an outlier and should be reviewed during Stage 2.

## 5. Add the two missing authoring primitives

Add a thin one-line response shortcode, such as `short-answer`, backed by the shared text-input partial. It must support at least:

- `key`
- An accessible label
- Optional placeholder text
- Optional visible prompt or surrounding author-supplied Markdown

Use the existing `ask` and `answer` components for multiline responses; do not silently convert single-line inputs into textareas.

Add a mission-summary shortcode backed by a resolver partial. It should accept a canonical mission number or page reference and render tier details from that mission page's front matter. It may also accept Discovery-specific authored annotations such as “already done,” “not yet,” or “your task.” Mission title, tier title, points, judging text, and tier description must come from the canonical mission content rather than copied Discovery markup.

For inline mission references, use the existing syntax, for example `[[@2:core|Mission 2 Core]]`. Do not recreate the legacy image popup, `fieldref` elements, overlay script, or `KIPR_MISSIONS` data.

## 6. Correct shared persistence behavior

Update `static/js/lab.js` so keyed checkboxes save and restore checked state correctly. The legacy Discovery contract serializes a checked box as `"yes"` and an unchecked box as an empty string. Restoration must assign `.checked`, not `.value`.

The shared code should distinguish controls by type:

- Checkboxes: save `"yes"` or `""`; restore `.checked`
- Text inputs and textareas: save and restore `.value`

Verify both `input` and `change` interactions, data reload, reset, export, and any submission payload. Run regression tests against existing worksheets because this is a shared script change.

## 7. Make glossary interactions keyboard accessible

The canonical glossary already contains all terms used by Discovery, including the `design` sense of `PROTOTYPE`. Continue using `data/glossary.yaml`; do not copy the per-page dictionaries or the old standalone `docs/discovery/glossary.html` page.

Update glossary triggers to be semantic, keyboard-focusable controls. Opening a definition must work from the keyboard, and closing it must return focus to the trigger. Preserve inline visual styling with CSS rather than using a click-only `span`.

Use `[[PROTOTYPE:design]]` where the Systems curriculum means a design prototype. Verify every rendered term and sense against the canonical glossary payload.

## 8. Establish Discovery styling and asset conventions

Move the reusable rules from `docs/discovery.css` into `assets/css/discovery.css`, consolidating them with existing worksheet styles where appropriate. Do not copy the repeated inline style block from each source page.

Use the stylesheet stack in a consistent order so print rules win where intended. The likely worksheet stack is site base, worksheet, syntax, Discovery, and print; hubs should use site base, hub, and Discovery styles.

Use ordinary Markdown before introducing new components. Existing components should cover most source structures:

- `callout`, `gate`, `warn`, and `safety`
- `checklist`
- `gridtable` and `repeattable`
- `ask` and `answer`
- `figrow`
- `rec`
- `score-examples`
- Standard Markdown tables, lists, headings, and fenced code

Normalize one-off anatomy rows, role cards, static comparisons, and procedure wrappers to these primitives where their special legacy classes do not provide meaningful behavior. Add another shortcode only if a repeated authoring need cannot be represented clearly with the existing set.

Adopt `static/img/discovery/<strand>/<project>/...` for Discovery-owned raster and SVG assets so the existing figure component can resolve them consistently. Shared images already mounted from `docs/img` may remain shared. Stage 2 will copy the referenced Systems build images and extract the inline diagrams into this structure.

## 9. Add Discovery migration checks

Extend the migration tooling or add a focused Discovery checker. It should support pretty Hugo URLs and verify:

- Exactly one root hub, two strand hubs, 17 Coding pages, and 14 Systems pages
- Exact per-page saved-key multisets and control types
- Checkbox `"yes"`/`""` save-and-restore behavior
- No duplicate keys or IDs
- An accessible label for every response control
- Preserved placeholders and intentional initial values
- Canonical glossary terms and senses
- Resolved mission and tier links
- All authored images, captions, and alternative text
- Valid internal links and existing assets
- No obsolete popup markup, embedded glossary dictionaries, page scripts, or inline styles
- No legacy `.html` links or aliases
- Screen and print worksheet behavior

Build into a fresh destination for every migration comparison so stale legacy files cannot make a broken link appear valid. Do not fail the migration merely because Hugo's DOM structure differs from the legacy HTML; compare the behavioral contracts identified in `MIGRATION.md`.

## Stage 1 completion criteria

Stage 1 is complete when representative fixture content can demonstrate all Discovery-specific structures, the shared checkbox and glossary behavior passes regression testing, both hub types render from section data, clean URLs resolve, and the current non-Discovery Hugo content still passes its existing build and validation checks.

# Stage 2: Curriculum migration

Stage 2 converts the actual hubs and 31 project worksheets, applies the approved curriculum corrections, and validates the complete site against the Stage 1 baseline.

## 1. Migrate the three hubs

Create the Discovery, Coding, and Systems section pages using the Stage 1 list layout and front-matter schema.

- Preserve the curriculum's strand descriptions, phase organization, project order, coding gates, and Systems pace legend.
- Generate project links and cards from Hugo page data.
- Remove the stale “in progress” label from the Systems strand; all 14 Systems projects exist.
- Use only clean Hugo page references.
- Do not migrate the old Discovery glossary link as a separate content page; point glossary access to the canonical site glossary.

Validate the complete hub-to-project and project-to-hub navigation before migrating all project bodies.

## 2. Migrate project worksheets in representative batches

Migrate a small representative set first to exercise every component family:

- Coding Project 1 for general worksheet structure, images, and recording fields
- A Coding mission project such as Project 4 or 6 for mission summaries and score examples
- Coding Project 7 for servo safety and figures
- Coding Project 11 or 14 for calculations, tables, code, and mission references
- Systems Projects 4, 6, or 8 for extracted diagrams
- Systems Project 7 for the local build-photo sequence
- Systems Projects 9 and 10 for the approved security and password revisions

Run the complete behavioral comparison after this representative batch. Once the components are stable, migrate the remaining pages phase by phase.

For every worksheet:

1. Add front matter using the Stage 1 schema and preserve the exact persistence identifier.
2. Convert the “What You Need” list through the structured metadata checklist.
3. Convert phase sections using the agreed heading convention.
4. Map interactive fields to shared shortcodes while preserving keys, control types, labels, placeholders, and order.
5. Convert static tables and lists to Markdown where possible.
6. Convert legacy highlighted code to valid fenced code or the existing code shortcode. Use `c` for C code and `text` for console output, formulas, or pseudocode. Check that `#include` lines cannot be parsed as headings.
7. Replace legacy glossary markup with canonical glossary syntax and explicit senses where required.
8. Replace field popups with canonical inline mission references and replace copied mission cards with the mission-summary component.
9. Convert figures through the shared figure component with meaningful alternative text and captions.
10. Remove legacy scripts, embedded dictionaries, inline styles, and presentation-only wrappers.

## 3. Migrate and extract assets

Copy every Discovery-owned image referenced by the migrated pages into the agreed `static/img/discovery/...` hierarchy. Do not copy unused source images merely because they are present in a legacy directory; first verify whether the three apparently unused Systems step images are truly obsolete.

Extract each of the four inline SVG diagrams into a standalone `.svg` file:

- Preserve the original visual meaning and labels.
- Add an appropriate accessible title or expose equivalent alternative text through the figure component.
- Ensure IDs inside each SVG are unique and self-contained.
- Preserve legibility at worksheet, mobile, and print sizes.
- Do not rasterize the diagrams.

Correct the malformed alternative text on Coding Project 1 while migrating its compilation-success image.

## 4. Apply curriculum and editorial updates

Apply these approved changes as intentional baseline exceptions.

### Systems Project 9: HTTPS

Replace browser-specific “padlock shown?” language with a short, browser-neutral explanation suitable for kindergarten through sixth grade. The revised lesson should teach:

- `https://` means the browser is using a protected connection to the website.
- A browser might show a connection or site-controls icon; it may not show a padlock.
- If the browser says “Not secure” or shows a warning, stop and ask a trusted adult before entering information.
- HTTPS protects the connection, but it does not guarantee that everything on a website is true or safe.

Keep the activity focused on recognizing the address and warnings, not on browser-specific icon names. Use Google Chrome's current connection-security guidance as the browser-behavior reference:

- Google Chrome Help, “Check if a site's connection is secure”: https://support.google.com/chrome/answer/95617

### Systems Project 10: strong passwords

Rewrite the password guidance around length, uniqueness, memorable passphrases, password managers, and multifactor authentication. Do not teach mandatory character mixing as the main measure of password strength.

Use these exact primary sources during migration:

- NIST, “How Do I Create a Good Password?”: https://www.nist.gov/cybersecurity-and-privacy/how-do-i-create-good-password
- NIST Special Publication 800-63B-4, section 3.1.1.2, “Password Verifiers”: https://pages.nist.gov/800-63-4/sp800-63b.html#passwordver

The NIST material should guide the curriculum update, but the student-facing wording must be adapted for the age group. Emphasize that a longer, unique passphrase is easier to remember and harder to guess, and that a trusted adult or password manager can help store passwords. Do not present the NIST verifier minimum as a universal classroom formula for children to apply to every account.

Replace any prompt that asks students to invent, type, exchange, or guess their own password with supplied fictional examples. Clearly mark them as examples that must never be reused, such as comparing a short fictional password with a longer fictional passphrase. Do not persist a field that could invite a real secret. Retain only non-sensitive reflection fields, if useful.

### Coding Project 14: flashlight guidance

Replace the confusing distinction between a phone flashlight and a “plain LED.” State simply that any moderately powerful flashlight should work with the light sensor, including a phone flashlight. Keep the instruction focused on pointing the light at the sensor and observing the reading or calibration response. Avoid unsupported claims about the light source's internal technology.

### Other known corrections

- Remove the stray backtick in the word “where” in Coding Project 1.
- Correct Coding Project 1's malformed compilation-success image alternative text.
- Resolve the stale embedded titles for Missions 2, 4, 13, and 14 by sourcing all mission titles from canonical mission pages.
- Review Systems Project 14's missing `Score It` section. Preserve the omission if it is pedagogically intentional; otherwise add a curriculum-approved section and record it as an intentional source change.
- Review servo range and safety wording against the currently used classroom hardware. Keep supported API ranges distinct from conservative classroom operating limits.

## 5. Validate each migrated batch

After every phase or representative batch:

- Build Hugo into a fresh temporary destination.
- Run existing syntax, glossary, and Explorer checks plus the new Discovery checker.
- Compare the rendered page with its legacy behavioral inventory.
- Test keyboard navigation, glossary open/close and focus return, form labels, checkbox save/restore, reset, download, and submission payloads.
- Check figures and extracted SVGs at desktop and mobile widths.
- Check print output, including page breaks, hidden controls, code wrapping, tables, captions, and grayscale readability.
- Follow every hub, previous/next, mission, glossary, and asset link.

For intentional curriculum changes, update the migration exception record with the source page, old behavior or wording, new behavior or wording, and reason.

## 6. Perform the clean cutover

When all pages pass validation:

- Confirm the generated site contains only the canonical clean Discovery URLs.
- Confirm no content or navigation points to `docs/discovery/*.html`, `2026-missions.html`, or the legacy standalone glossary.
- Confirm no legacy field-popup assets or scripts are required at runtime.
- Confirm all 31 projects appear in the correct order on their strand hubs and in bottom navigation.
- Run a final fresh build and the complete repository validation suite.
- Spot-check at least one project from every phase, plus all pages containing mission summaries, extracted SVGs, local Systems build images, and the revised security lessons.

## Stage 2 completion criteria

The migration is complete when all three hubs and 31 worksheets render at clean Hugo URLs; all persisted-answer contracts pass except documented curriculum changes; canonical mission and glossary data resolve correctly; all images and extracted SVGs are accessible and print correctly; the approved HTTPS, password, flashlight, and editorial updates are present; no legacy runtime code is needed; and the full Hugo build and validation suite passes from a fresh destination.
