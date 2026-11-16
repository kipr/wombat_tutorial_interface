# Standalone Mechanical curriculum interface — plan

Status: standalone build target implemented; deployment to `kipr.org` and the
WordPress member entry link are pending.

## Goal

Reuse the existing Mechanical Design curriculum in an independent interface for
Botball users, without the full Botball Explorer (BEX) navigation and landing
experience. Maintain one curriculum source rather than a copied curriculum or
separate application.

## Decisions agreed so far

- Include all existing mechanical material: Challenges 1–24, the gear-mounting
  PreLab, Design Projects A and B, and the supplementary older lift worksheet
  (28 worksheets total). Challenges 25–28 are not available; do not invent them.
- Keep the authored curriculum in `content/mechanical/` and reuse the existing
  worksheet renderer and components. This is an alternate interface, not a
  rewrite of the lessons or their Botball connections.
- Leave the existing full BEX and preview publications available. The mechanical
  material is already public; this project does not make it exclusive.
- Use integration Option A: a restricted page in the existing WordPress Botball
  members area links to the standalone static interface. There is precedent for
  this arrangement.
- The standalone interface will have a different URL under `kipr.org`; its
  exact location and deployment mechanism are not yet decided.
- WordPress continues to control access to the member entry page. Direct access
  to the standalone destination is acceptable; do not build Hugo authentication
  or assume WordPress protects static files automatically.
- Build a focused interface, not a strictly minimal artifact: exclude unrelated
  Hugo curriculum pages, but allow unused shared static files to be copied and
  remain directly accessible. No separate static-asset allow-list is required
  for v1.

## Technical direction

The Hugo overlay is `build-targets/mechanical.toml`, following the existing
preview pattern, with `just build-mechanical` and `just serve-mechanical`
shortcuts. The build defaults to `dist/mechanical/`, separate from the BEX Pages
artifact. No new worksheet renderer or curriculum repository is needed.

Shared changes must preserve default BEX and preview behavior. Keep glossary
text canonical in `data/glossary.yaml` and navigation definitions canonical in
`data/nav.yaml`. Preserve worksheet `mission_id`, field keys, labels, and
persistence behavior.

## Packaging decision — A selected

Both choices below deliver a mechanical-only student experience. The difference
is what unused files may be present in the deployment artifact.

### A. Focused interface; shared static files allowed (selected for v1)

- Mount only mechanical Hugo content, a target-specific landing page, and any
  deliberately selected supporting pages.
- Scope navigation, branding, breadcrumbs, footer, and hub cross-links to the
  standalone experience. Do not retain links to excluded BEX sections.
- Continue copying the shared `static/` tree, as the preview target does today.
- Accept that unrelated static files may remain directly addressable, even
  though the mechanical interface does not link to them. Examples include
  `score.html`, the BEX quick-reference PDF, and standards downloads.

This avoids maintaining a separate static dependency selection. It does not
mean shipping the full set of BEX Hugo pages or merely hiding their navigation.
It also does not mean that all included files are private, used, or necessary.

A local measurement during planning found `static/` occupies approximately
20 MB on disk, about 19 MB of it under `static/img/`. This is an approximate
source footprint, not an artifact-size budget or browser download estimate:
unused copied files are not automatically downloaded by a browser.

### B. Focused interface and strictly scoped artifact (deferred alternative)

- Make all the interface/content changes in A.
- Also filter static mounts to the shared scripts, branding images, and other
  files required by the selected pages.
- Include the mechanical section's SVG resources and generated CSS as usual.
- Define and test permitted output paths so unrelated apps, documents, and
  images cannot silently enter the artifact later.

This produces a cleaner, smaller handoff but adds asset discovery, configuration,
and maintenance. A valid internal-link check catches missing referenced files;
it does not establish that an artifact contains no unrelated files. That needs
an additional output-scope check. Avoid post-build deletion as the primary
filtering strategy.

### Rationale and conditions for revisiting

A was selected because the goal is a focused student experience, not content
exclusivity or a minimal package. Revisit B if the receiving host requires a
minimal package, transfer size becomes operationally significant, or KIPR wants
to avoid publishing unrelated static files at this new location.

A can later become B without changing worksheet identities or the student-facing
URL structure, provided any paths students actually use remain available. Keep
target configuration separate now so asset filtering can be added there later.

## Agreed interface defaults

- Display name: **KIPR Mechanical Design**, without BEX season branding in the
  shared shell. Preserve instructional Botball references in the lessons.
- Entry experience: show the existing grouped mechanical catalog at the target
  root, rather than an extra welcome page. Retain the mechanical section and
  worksheet paths internally; avoid maintaining a duplicate catalog definition.
- Glossary: retain worksheet glossary dialogs; defer a separate glossary browsing
  page for v1.
- Search: request `noindex` for the alternate publication so the original site
  remains the discoverable public edition. This is not access control.

All four interface defaults above are agreed for v1.

## Implementation and deployment outline

1. Implemented: direct catalog entry and shared catalog rendering without a
   duplicate worksheet catalog definition.
2. Implemented: target configuration and shared-shell options with strict
   page-reference validation; the Python-lab cross-link is omitted only in the
   standalone catalog.
3. Implemented: preserved mechanical section hierarchy and resources. The base
   URL is configurable; the default is root-relative until deployment is set.
4. Implemented: shared static copying and build/serve shortcuts with an explicit
   destination. The existing Pages production artifact and `just build-all` do
   not include the mechanical variant.
5. Implemented: standalone output regression test and CI verification in addition
   to the existing full/preview checks. See the development guide for commands.
6. Pending: arrange deployment with the WordPress/hosting maintainer and add the
   member entry link after the destination works.

## Verification to add or run during implementation

- Fresh Hugo builds for the full site, preview, and standalone target.
- Internal-link validation against the standalone output.
- Mechanical migration test against standalone output, preserving all 28
  worksheets, source contracts, diagrams, and fields.
- Existing persistence and glossary-dialog tests; relevant tests for any new
  JavaScript behavior, if needed.
- Target-specific assertions for expected pages and absence of excluded Hugo
  sections. A static-output allow-list is out of scope for v1.
- Browser checks at the deployed path: member entry, direct destination access,
  in-target navigation, answer save/reload, download, print, and mobile layout.

## Remaining decisions and integration questions


- Before deployment: final URL, exact hostname, hosting owner, and upload process.
  The base URL remains configurable; these do not block the local build.
- A separate glossary browsing page and stricter static packaging can be
  revisited later without changing the agreed curriculum scope.
- Saved drafts are origin-scoped: different paths on the same origin share
  storage for matching IDs, but different schemes, hostnames, or ports do not.
  Preserving IDs alone does not transfer drafts between origins.

## References

- [Architecture](architecture.md)
- [Development and verification](development.md#preview-build-target)
- [Mechanical migration and source availability](mechanical-migration.md)
- Existing target: `build-targets/preview.toml`
- Existing shortcuts: `Justfile`
