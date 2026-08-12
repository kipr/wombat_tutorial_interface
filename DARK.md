# Dark-mode implementation plan

## Goal

Add an accessible light/dark theme control to every Hugo-rendered page. The
choice must persist between page loads and browser sessions without affecting
saved worksheet answers. On a first visit, before the student has made an
explicit choice, the site should follow the operating-system color preference.

The implementation should avoid a flash of the wrong theme, preserve the
existing print presentation, remain usable when JavaScript or browser storage
is unavailable, and keep all authored Markdown and persistence identifiers
unchanged.

Estimated implementation time: **16–24 hours (2–3 working days)** for one
contributor familiar with the repository. Palette review or broader visual
redesign is not included in that estimate.

## Scope

In scope:

- Every page rendered through `layouts/baseof.html`, including home and section
  hubs, C and Python worksheets, Discovery hubs and projects, Explorer index,
  missions and rules, and the glossary.
- A binary light/dark control in both shared navigation variants.
- A system-preference default for visitors who have not used the control.
- Persistence through `localStorage` under a theme-specific key.
- Dark treatments for shared screen CSS, form controls, code highlighting,
  dialogs, cards, tables, and page-family components.
- Light-only print output.
- Dependency-free automated regression coverage and representative manual
  browser review.

Out of scope:

- `static/score.html`. It is a standalone legacy application and will not get
  the theme control or share the saved preference.
- Recoloring photographs, videos, or authored SVG artwork. Figures that need a
  light canvas for legibility should retain one in both themes.
- Changing content, `mission_id`, field `key`/`data-key`, worksheet draft
  payloads, navigation data, or page URLs.
- Introducing a JavaScript framework, package manager, theme library, or
  browser-test dependency.
- A three-state light/dark/system selector. System is the initial default;
  after the student uses the binary control, their explicit light or dark
  choice takes precedence.

## Current architecture and constraints

- All pages in scope share `layouts/baseof.html` and `layouts/_partials/head.html`.
- Navigation is split between `layouts/_partials/topbar.html` for worksheets
  and `layouts/_partials/hub-nav.html` for hubs.
- Page families compose seven screen stylesheets: `site-base.css`, `hub.css`,
  `worksheet.css`, `syntax.css`, `discovery.css`, `explorer.css`, and
  `glossary.css`. `print.css` is deliberately separate and normally loaded
  last on worksheets.
- The base palette already uses custom properties, but several variables have
  ambiguous roles. In particular, `--navy` is used as both a dark navigation
  surface and dark heading text. It cannot simply be assigned a light value in
  dark mode without breaking navigation contrast.
- The screen stylesheets contain many literal light surfaces and foreground
  colors. These must be classified as semantic UI colors, intentional brand
  colors, or intentional light image canvases.
- `static/js/lab.js` already treats blocked or full `localStorage` as a
  recoverable condition. Theme persistence should follow that defensive
  pattern but remain in a separate global script.
- Relative asset URLs are a compatibility contract. The theme script must be
  linked through `relative-url.html` so nested pages and project-mounted builds
  continue to work.
- Direct `file://` browsing must still render a usable theme, but persistence
  is best-effort because browsers do not define consistent shared storage
  behavior for local files.

## Theme behavior contract

Use the following names consistently in tests and implementation:

- Storage key: `kipr_theme`
- Valid stored values: `light`, `dark`
- Root state: `data-theme="light"` or `data-theme="dark"` on `<html>`
- Control ID: `themeToggle`

Initial selection precedence:

1. Use a valid value from `localStorage`.
2. Otherwise use `window.matchMedia("(prefers-color-scheme: dark)")`.
3. If media-query detection is unavailable, default to light.

An invalid stored value is equivalent to no stored value. A storage read
failure is also equivalent to no stored value. Before the student makes an
explicit choice, an operating-system preference change should update the page.
After the student activates the control, apply the opposite of the currently
rendered theme immediately and try to save it. If saving fails, the choice must
still remain active for the current page.

The control is a native `<button type="button">` with visible text, a clear
accessible name, `aria-pressed`, and an ordinary keyboard/focus interaction.
`aria-pressed="true"` means dark mode is active. Do not use an unlabeled
sun/moon icon as the only state indicator.

## Work item 1: Add automated contract tests first (3–4 hours)

This is the red phase of the work. Add the tests before adding any theme
production code, run them, and confirm that they fail because the declared
theme contract is missing rather than because the fixtures or test harness are
broken.

### 1.1 Theme behavior test

Create `tests/test_theme.js`, following the dependency-free `node:assert`,
`node:fs`, and `node:vm` approach used by the existing JavaScript tests. Provide
small mocks for `document.documentElement`, `document`, `localStorage`, and
`matchMedia`.

Cover at least these cases:

- Stored `dark` is applied to the root before control initialization.
- Stored `light` overrides a dark operating-system preference.
- No stored value follows both light and dark operating-system preferences.
- Missing `matchMedia` falls back to light.
- Invalid stored data is ignored.
- A thrown `localStorage.getItem` does not stop initialization.
- The control receives the correct initial `aria-pressed` state and visible
  label.
- Clicking the control changes the root theme and control state.
- Clicking writes exactly `light` or `dark` to `kipr_theme`.
- A thrown `localStorage.setItem` does not undo the on-page theme change.
- A media-query change updates the theme only while no explicit preference has
  been selected during the page session.
- Unrelated worksheet draft keys are never read, changed, or removed.

The test should exercise the production `static/js/theme.js` file rather than
copying theme logic into the test. Its initial expected failure may be the
absence of that file.

### 1.2 Core palette contrast test

Create `tests/test_theme_contrast.js`. Keep it dependency-free: extract the
literal color values for the core semantic tokens from `site-base.css`, convert
hex colors to relative luminance, and assert the WCAG contrast ratios for
declared foreground/background pairs.

At minimum, check both light and dark values for:

- Primary text on the page surface and panel surface: at least 4.5:1.
- Muted text on the page surface and panel surface: at least 4.5:1.
- Input text on the input surface: at least 4.5:1.
- Link/accent text on ordinary surfaces: at least 4.5:1.
- Navigation text on the navigation surface: at least 4.5:1.
- The focus indicator against adjacent page and control surfaces: at least
  3:1.

This test deliberately covers the canonical palette, not every contextual
status chip or image. Those still require component review.

### 1.3 Generated-output contract check

Create `tools/check_theme_output.js` accepting a fresh Hugo destination in the
same style as `check_syntax_highlighting.js`. Exclude the copied
`static/score.html` file explicitly. Verify that every Hugo-rendered HTML page:

- Includes the global theme script exactly once.
- Emits the script through a relative URL ending in `js/theme.js`.
- Places the synchronous theme script before the first screen stylesheet so
  the root theme is selected before paint.
- Includes exactly one `#themeToggle` control.
- Gives the control `type="button"`, `aria-pressed`, visible text, and the
  shared `no-print` class.

Also sample output at multiple nesting depths so an accidentally root-relative
theme script path is caught.

### 1.4 Red-phase command sequence

Run the targeted tests and record the expected contract failures:

```sh
node tests/test_theme.js
node tests/test_theme_contrast.js

build_dir="$(mktemp -d)"
hugo --buildDrafts --destination "$build_dir" --printPathWarnings --logLevel error
node tools/check_theme_output.js "$build_dir"
```

Do not weaken assertions merely to make this phase green. If a contract proves
impractical during implementation, update this plan and explain the behavior
change before changing the test.

## Work item 2: Implement pre-paint state and persistence (2–3 hours)

Create `static/js/theme.js` as a small, framework-free IIFE. Load it
synchronously from `layouts/_partials/head.html` before the stylesheet links.
Because `<html>` already exists while the head is parsed, the script can set
`document.documentElement.dataset.theme` before CSS is applied and then defer
control binding until `DOMContentLoaded`.

Responsibilities of the script:

- Read and validate `kipr_theme` inside `try`/`catch`.
- Evaluate `prefers-color-scheme` only when there is no valid explicit choice.
- Apply exactly one valid root theme.
- Expose no worksheet state and do not modify `static/js/lab.js`.
- Bind the shared button when the DOM is ready.
- Keep visible text and `aria-pressed` synchronized with the active theme.
- Persist an explicit selection when possible.
- Listen for operating-system preference changes only while the session is
  still following the system preference.
- Avoid theme-change animation during initial page load.

Keep the file small because it intentionally blocks stylesheet discovery for
long enough to prevent a wrong-theme flash. It must not fetch dependencies or
wait for fonts, images, or the rest of the page.

Run `node tests/test_theme.js` repeatedly until the behavior test is green.

## Work item 3: Add the shared accessible control (1–2 hours)

Create `layouts/_partials/theme-toggle.html` and call it from both navigation
partials. Keep ownership in one partial so the ID, text, accessible state, and
CSS hooks cannot drift between hubs and worksheets.

Control requirements:

- Native button semantics and `type="button"`.
- Visible text that remains understandable without an icon.
- Initial server-rendered `aria-pressed="false"`; JavaScript corrects it before
  interaction based on the selected theme.
- `no-print` so the action never appears on paper.
- At least a 44-by-44 CSS-pixel hit target where the surrounding navigation
  permits it.
- A distinct `:focus-visible` treatment in both themes.
- No collision with the worksheet PIN/submit controls.
- Responsive behavior at the existing 820 px and 600 px navigation
  breakpoints. It may join the wrapping navigation row, but must not obscure
  links or force horizontal scrolling.

Rebuild and run `tools/check_theme_output.js` until the generated contract is
green. Confirm the script URL from the home page, a worksheet, and a nested
Explorer mission.

## Work item 4: Establish semantic palette tokens (4–6 hours)

Refactor `assets/css/site-base.css` before adding broad component overrides.
Separate brand colors from UI roles so a variable never has to be both a dark
surface and light foreground.

Define light values in `:root` and dark values in
`:root[data-theme="dark"]`. The exact token list may be adjusted while keeping
the contrast test readable, but it should cover these roles:

- `--surface-page`
- `--surface-panel`
- `--surface-subtle`
- `--surface-input`
- `--surface-input-focus`
- `--surface-code`
- `--text-primary`
- `--text-muted`
- `--text-on-dark`
- `--border-default`
- `--nav-background`
- `--focus-ring`
- `--shadow-color`
- `--code-ink`

Keep the Botball red family as brand/accent tokens. Adjust the dark-theme
accent value if needed for contrast, but do not treat brand red as a general
background or foreground role. Existing variables can remain temporarily as
compatibility aliases while selectors migrate, but new theme-sensitive rules
should use semantic roles.

Add `color-scheme: light` or `dark` at the root so browser-rendered form
controls, selection UI, and scrollbars match the active theme where supported.
Also retain a no-JavaScript fallback:

- Light remains the base declaration.
- Under `prefers-color-scheme: dark`, apply the dark token values only when no
  explicit `data-theme` is present.

Replace theme-sensitive literal whites, pale backgrounds, grays, and black
text in the base sheet. Preserve intentional white-on-brand combinations,
modal backdrops, video black, and light image canvases.

Run `tests/test_theme_contrast.js` while choosing the palette. Do not rely on
visual judgment alone for core text contrast.

## Work item 5: Migrate and review each component family (4–6 hours)

Work from shared primitives outward so later family sheets inherit as much as
possible.

### 5.1 Shared base components

Review body, navigation, hero, metadata table, semantic panels, glossary
definition dialog, figure cards/captions, breadcrumbs, document sidebar,
mission links, and score-comparison cards in `site-base.css`.

Keep figure image areas light where transparent diagrams or embedded labels
would lose meaning on a dark canvas. The caption and surrounding card may
still use dark-theme surfaces.

### 5.2 Hubs and Discovery

Review cards, hover states, footer, phase labels, pace badges, legends, and
build gates in `hub.css` and `discovery.css`. Dark hover states should change
border/surface emphasis without producing a bright flash. Preserve visible
keyboard focus independently of hover.

### 5.3 Worksheets

Review every interactive and printable component in `worksheet.css`, including:

- PIN and submission status colors.
- Markdown tables and authored grid tables.
- Text inputs, textareas, checkboxes, focus rings, and placeholder contrast.
- Sketch/grid surfaces and labels.
- Mission summaries and video disclosure controls.
- Name bars, reminders, bottom submission cards, and navigation buttons.
- Concept, calculation, pre-lab, signoff, truth-table, zone-bar, and image
  checklist components.

Do not change control IDs, names, values, `data-key` attributes, or autosave
behavior. Dark mode is presentation-only.

### 5.4 Syntax highlighting

Add a dark-theme token palette in `syntax.css`. Validate comments, keywords,
types, functions, strings, numbers, operators, errors, highlighted teaching
tokens, and plain text. Retain the existing print-specific syntax colors.

### 5.5 Explorer and glossary

Review Explorer mission cards, scoring chips, tiers, summaries, rules panels,
mission navigation, and video captions in `explorer.css`. Review glossary
search, category badges, highlights, variants, empty state, and sticky controls
in `glossary.css`.

Do not assume that a light chip palette remains readable after only changing
the parent surface; give semantic chip categories intentional dark values.

## Work item 6: Lock print and fallback behavior (1–2 hours)

Dark screen state must never leak into printed worksheets or rules pages.

- Reset semantic variables to the light/print palette inside the print rules,
  with sufficient selector strength to override `data-theme="dark"`.
- Set print `color-scheme: light`.
- Confirm the shared control and navigation remain hidden through `no-print`
  and existing print rules.
- Preserve code highlighting, answer fields, borders, figure meaning, and page
  breaks in print preview.
- With JavaScript disabled, confirm that the site follows the system media
  query and remains navigable.
- With storage access blocked, confirm that the theme works for the current
  page and fails gracefully only in persistence.

## Work item 7: Full verification and visual acceptance (2–4 hours)

### Automated verification

Build into a new destination and run all existing and new checks:

```sh
build_dir="$(mktemp -d)"
hugo --buildDrafts --destination "$build_dir" --printPathWarnings --logLevel error
node tools/check_syntax_highlighting.js "$build_dir"
node tools/check_theme_output.js "$build_dir"
node tests/test_theme.js
node tests/test_theme_contrast.js
node tests/test_lab_persistence.js
node tests/test_glossary_dialog.js
```

All checks must pass without changing existing worksheet persistence fixtures
or broadening migration exceptions.

### Manual browser matrix

Inspect both themes at desktop and narrow/mobile widths on at least:

- Home hub and one lab index.
- One C or Python worksheet containing inputs, tables, code, panels, and bottom
  navigation.
- One pre-lab containing checklist/image controls.
- Discovery root, one strand hub, and one Discovery project.
- Explorer root, one mission detail page, and the rules document/sidebar.
- Glossary search and category badges.
- A glossary definition dialog and figure zoom dialog.

For each representative page, check:

- No flash of the incorrect theme on a cold load or reload.
- Initial system preference, explicit toggle, reload persistence, and
  cross-page persistence.
- Toggle label, pressed state, keyboard operation, visible focus, and hit area.
- Text, muted text, links, borders, status colors, placeholders, disabled
  states, and hover/focus states.
- Worksheet typing, autosave, restore, export, and print submission behavior.
- Images, SVGs, videos, and transparent diagrams against their chosen canvas.
- Sticky navigation/sidebar positioning and lack of horizontal overflow.
- Print preview while dark mode is active.

Where practical, spot-check current Chrome/Chromium, Firefox, and Safari/WebKit.
If only one engine is available during implementation, record that limitation
in the final handoff.

## Completion criteria

The work is complete when:

- Every Hugo-rendered page has one accessible theme control and the pre-paint
  script; `static/score.html` remains untouched.
- First visits follow the system setting, explicit choices persist across
  in-scope pages and sessions, and storage failures are harmless.
- Core palette pairs meet the automated contrast thresholds and representative
  components have been visually reviewed in both themes.
- Dark mode does not change authored content, worksheet storage keys or
  payloads, relative URLs, keyboard behavior, or print meaning.
- Print output is light regardless of the active screen theme.
- The fresh Hugo build, all existing tests, and all new theme tests pass.
- The final handoff lists automated commands, manual pages/browsers checked,
  any remaining visual limitations, and confirmation that the standalone score
  page was intentionally excluded.
