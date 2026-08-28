  # Pandoc Discovery HTML-to-Hugo Importer

  ## Summary

  - Implement a documented new-style Lua Writer(doc, opts) for the installed Pandoc 3.6.4. Invoke it with --from=html+raw_html so form controls and their persisted keys remain in the AST.
  - Convert all 40 supplied HTML files: 34 worksheets, two track hubs, and four arm/claw placeholders.
  - Publish the new tracks at /discovery/ev3/ and /discovery/spike/, while preserving the existing Wombat URLs under /discovery/coding/.
  - Treat the generated Markdown as authoritative after migration; leave tbc/ unchanged as reference evidence.

  ## Importer and Content Conversion

  - Add a dependency-free conversion driver and Lua writer. The driver processes both source trees, maps files to their Hugo destinations, writes to a temporary directory for tests, and refuses to overwrite existing Markdown unless explicitly forced.
  - Use the Pandoc AST for authored content and inspect the original input only for information Pandoc excludes, such as embedded MISSION_ID scripts and index-card metadata. Validate inferred platform, project number, and persistence ID against the source.
  - Generate complete front matter from each project plus its index card: titles, descriptions, ordering, platform, phase metadata, one-class-period duration, exact source mission_id, hero/footer fields, sidebar configuration, mission labels, build requirements, and structured “What You Need” checklists.
  - Convert semantic structures as follows:
      - ordinary prose, lists, static tables, and the lone C example to Markdown;
      - phase headings and ordered activity steps to the established ## Try/Learn/Do/Score It and ### Step N forms;
      - keyed controls to ask, short-answer, answer, checklist, and gridtable, preserving every key, type, label, and initial value;
      - panels to callout, warn, or safety based on their source role and warning title;
      - definition spans to [[TERM|label]];
      - field references and legacy mission cards to canonical mission references and mission-summary shortcodes, discarding duplicated legacy scoring prose already supplied by the canonical mission;
      - score comparisons not associated with a mission summary to score-examples.
  - Fail with a source-positioned error on unsupported structures, missing labels, duplicate keys, unknown classes, malformed mission cards, or residual raw HTML instead of silently emitting incomplete Markdown.

  - Add the eight source terms absent from data/glossary.yaml—including BRICK, HUB, BLUETOOTH, HAT BLOCK, STACK, SLOT, STEERING, and BRICK_MEMORY—using the definitions embedded in the supplied HTML.

  ## Hugo Integration and Interfaces

  - Add platform: wombat|ev3|spike to coding hubs/projects. Extend Discovery validation while retaining the existing Wombat ID form and requiring discovery_ev3_coding_NN or discovery_spike_coding_NN for the new tracks.
  - Update the Discovery root into a four-choice hub: shared Systems plus Wombat, EV3, and SPIKE Coding. Systems prerequisite relationships will resolve and display corresponding projects for all three coding platforms.
  - Extend build_gate compatibly: accept either the existing single page/label pair or a validated links list. EV3/SPIKE gates will link to their separate arm and claw placeholders.
  - Add a validated wordblocks shortcode backed by a recursive partial and shared Discovery CSS. Its YAML model will contain:
      - rows containing either a block or nested control structure;
      - blocks with an allowed category, optional shape, ordered inline parts, and optional note;
      - control structures with a head, body rows, and optional branches;
      - inline parts containing text or whitelisted slots such as value, dropdown, variable, operator, condition, steering dial, or LED matrix.

  - Render word-block programs as responsive, printable colored blocks with the source aria-label exposed as the accessible description and the decorative internal structure hidden from assistive technology.
  - Update the shortcode, authoring, architecture, migration, and verification documentation with the importer command, html+raw_html requirement, platform model, new shortcode schema, and overwrite policy.

  ## Test Plan

  - Run the importer against all 40 HTML files in a temporary directory and assert deterministic output, valid front matter, no raw HTML, and explicit failure for malformed/unknown fixtures.

  - Compare source and converted inventories page by page:
      - all 1,218 EV3 and 1,216 SPIKE persisted fields;
      - key, control type, accessible label, and initial value;
      - exact persistence IDs;
      - all 40 word-block programs per platform and their accessible descriptions;
      - hub cards, build links, and previous/next ordering.
      - absence of duplicate IDs or keys.

  - Run the fresh Hugo build, internal-link and syntax validators, persistence and glossary browser-behavior tests, plus focused rendered-markup assertions for the new word-block shortcode.
  - Inspect representative simple and nested word-block programs, an editable table, a mission-heavy worksheet, and both build placeholders at desktop/mobile widths and in print.

  ## Assumptions

  - Existing Wombat content, URLs, field keys, and persistence IDs remain unchanged apart from adding platform metadata and clearer chooser labels.
  - time: "One class period" follows the existing parallel Coding curriculum because the supplied HTML contains no duration metadata.
  - Shared Hugo navigation, submission, persistence, glossary, mission, and dialog behavior replaces the duplicated CSS and JavaScript embedded in the legacy HTML.
  - Legacy field-diagram popups are replaced by this repository’s canonical mission links, summaries, examples, and videos; unavailable legacy mission-image assets are not invented.