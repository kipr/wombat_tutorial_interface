#!/usr/bin/env node
"use strict";

// Compare the published worksheets with the source contract captured before
// manual corrections. This catches dropped prose, fields, units, and diagrams.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const build = process.argv[2];
assert.ok(build, "Usage: node tests/test_mechanical_migration.js <build_dir>");
const inventory = require("../data/mechanical-legacy-inventory.json");
const entities = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  mdash: "—", ndash: "–", rsquo: "’", lsquo: "‘", rdquo: "”",
  ldquo: "“", hellip: "…", times: "×", divide: "÷", minus: "−",
  middot: "·", Prime: "″", deg: "°", le: "≤", rarr: "→", larr: "←", frac12: "½", frac14: "¼", frac34: "¾"
};
function decode(value) {
  return value.replace(/&(#x[\da-f]+|#\d+|\w+);/gi, (match, entity) => {
    if (entity.startsWith("#x")) return String.fromCodePoint(parseInt(entity.slice(2), 16));
    if (entity.startsWith("#")) return String.fromCodePoint(Number(entity.slice(1)));
    return entities[entity] ?? match;
  });
}
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)]
    .map(([, key, value]) => [key, decode(value)]));
}
function plain(html) {
  return decode(html.replace(/<!--[\s\S]*?-->/g, "").replace(/<[^>]*>/g, " "));
}
function normalize(text) {
  return decode(text).replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
    .replace(/—/g, "---").replace(/–/g, "--").replace(/…/g, "...")
    .replace(/\s+/g, "");
}

let fields = 0;
let figures = 0;
// These specific redrawn figures deliberately correct the source descriptions.
// Keep the frozen inventory as evidence and require the revised wording exactly.
const revisedFigureAlts = {
  "mech06_crank-diagram-01.svg": "Three snapshots of the same crank turning counterclockwise. The fixed axle and guide stay in place. With the pin pointing right, the pusher is farthest out. After a quarter-turn, the pin is above the axle, the rod tilts, and the pusher moves inward. After a half-turn, the pin points left and the pusher is farthest in. Both rod ends pivot; the next half-turn brings the pusher back out. Stroke is twice the axle-to-pin offset.",
  "mech19_gear_45-diagram-01.svg": "Three shaft arrangements compared. In-line shafts use a coupling; spur gears use parallel axes. The kit's bevel gears connect shafts at ninety degrees. A universal joint connects shafts at forty-five degrees; the kit's ninety-degree bevel gears do not fit that bend.",
  "mech19_gear_45-diagram-02.svg": "Two arrangements. On the left a single universal joint connects shafts at forty-five degrees, and output speed varies twice per turn. On the right two joints connect parallel end shafts through equal and opposite forty-five-degree bends. The yokes on the middle shaft are aligned so the second joint cancels the first joint's speed variation.",
  "mech21_parallelogram-diagram-01.svg": "A slider-crank lifts a guided platform. The solid upper and dashed lower positions share the same wheel axle, pin offset, and rod length. The platform reverses at each end while the wheel keeps turning in one direction. Guides prevent sideways motion; lift is twice the pin offset.",
  "mech21_parallelogram-diagram-02.svg": "Two four-bar linkages with their traced paths and an alternate position in grey. The parallelogram keeps its blue platform level while its marked midpoint follows an arc. The unequal-link example traces a nearly vertical segment with the tip of its extended blue coupler, which tilts. The grey return path curves away from that segment.",
  "mech22_rack_slide-diagram-01.svg": "Top views of two platforms, each attached to a rack driven by a fixed 24-tooth pinion. Without guides, a dashed outline shows unwanted platform rotation. With two long guide rails, the platform can only slide along them. The pinion teeth enter the rack gaps.",
  "mech22_rack_slide-diagram-02.svg": "Cutaway top view of a seven by two inch platform. A rack attached underneath meshes with a fixed 24-tooth pinion driven by a motor below the deck. Long stationary rails guide both sides over the full travel. The dashed platform outline is shifted two inches to the right.",
  "mech23_gear_linkage-diagram-01.svg": "Side view of a gear-driven parallelogram claw with two fixed pivots. A 12-tooth motor pinion meshes with a 24-tooth crank gear. Equal cranks raise and lower a level coupler; grey shows the raised position. The solid claw is parked around a one-inch cube on the ground. With the motor off, moving the structure right creates a leftward drag load on the claw.",
  "mech23_gear_linkage-diagram-02.svg": "Two ways to resist a load. A self-locking worm drive at left prevents the output from turning the input backwards; test whether your own drive holds. At right, a triangular brace limits bending. Its grey dashed outline exaggerates the elastic deflection under a leftward force.",
  "mech24_worm_fundamentals-diagram-01.svg": "Power-flow schematic of one motor driving two branches at once. The direct branch drives the striker at motor speed. The slow branch uses a single-start worm and a wheel with exactly 24 teeth, giving one wheel-axle turn per 24 motor turns. Arrows trace power paths rather than physical shaft layouts.",
  "mech24_worm_fundamentals-diagram-02.svg": "Scaled side view of a car creeping right while its front striker rotates clockwise. The one-inch-tall face reaches the top pom of a three-pom stack while clearing the lower two. The lowest point of its dashed circular sweep is one and a quarter inches above the ground. The face is two inches wide across the car, out of this side view."
};
const revisedFigureCaptions = {
  "mech21_parallelogram-diagram-02.svg": "Both are four-bar linkages. Changing the link lengths and the tracing point changes the path. The unequal-link example travels nearly straight during part of its cycle.",
  "mech23_gear_linkage-diagram-02.svg": "Both may hold the cube. Test whether your drive locks or your structure flexes under load."
};
const revisedFigureLabels = {
  "mech23_gear_linkage-diagram-02.svg": {
    "Nothing is locked \\u2014 the bracing": "Nothing is locked — the bracing"
  },
  "mech19_gear_45-diagram-01.svg": {
    "no gear is cut": "kit bevel gears",
    "for this angle": "fit 90°, not 45°."
  }
};
for (const page of inventory.pages) {
  const slug = page.file.replace(/\.md$/, "");
  const file = path.join(build, "mechanical", slug, "index.html");
  assert.ok(fs.existsSync(file), `${slug}: emitted page`);
  const html = fs.readFileSync(file, "utf8");
  assert.equal(attributes(html.match(/<body\b[^>]*>/)[0])["data-mission-id"], page.mission_id);
  assert.doesNotMatch(html, /raw HTML omitted|MECHANICALTOKEN|\[\[/, `${slug}: no conversion residue`);
  const labels = new Map([...html.matchAll(/<label\b([^>]*)>([\s\S]*?)<\/label>/g)]
    .map(([, attrs, body]) => [attributes(attrs).for, plain(body).trim()]));
  const controls = [...html.matchAll(/<(input|textarea)\b[^>]*>/g)]
    .map(([tag, kind]) => ({kind, ...attributes(tag)})).filter(a => a["data-key"]);
  assert.equal(controls.length, page.fields.length, `${slug}: field count`);
  assert.equal(new Set(controls.map(a => a["data-key"])).size, controls.length, `${slug}: unique keys`);
  for (const field of page.fields) {
    const actual = controls.find(a => a["data-key"] === field.key);
    assert.ok(actual, `${slug}: ${field.key}`);
    assert.equal(actual.kind === "textarea" ? "textarea" : actual.type, field.type, `${slug}: ${field.key} type`);
    assert.equal(actual.value ?? "", field.value ?? "", `${slug}: ${field.key} initial value`);
    const label = actual["aria-label"] ?? labels.get(actual.id);
    assert.equal(normalize(label ?? ""), normalize(field.label), `${slug}: ${field.key} label`);
  }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, `${slug}: unique IDs`);
  const terms = [...html.matchAll(/<button\b[^>]*class="def-term"[^>]*>/g)]
    .map(([tag]) => attributes(tag)["data-term"]);
  const expectedTerms = page.terms.map(term => term === "SLOT" ? "SLOT:mechanical" : term);
  assert.deepEqual(terms.sort(), expectedTerms.sort(), `${slug}: glossary references`);
  const images = [...html.matchAll(/<img\b[^>]*>/g)].map(([tag]) => attributes(tag));
  for (const figure of page.figures) {
    const expectedAlt = revisedFigureAlts[figure.src] ?? figure.alt;
    assert.ok(images.some(image => image.src.endsWith("/" + figure.src) && image.alt === expectedAlt), `${slug}: ${figure.src} and alt text`);
    assert.ok(normalize(plain(html)).includes(normalize(revisedFigureCaptions[figure.src] ?? figure.caption)), `${slug}: figure caption`);
    assert.ok(fs.existsSync(path.join(build, "mechanical", figure.src)), `${slug}: published SVG`);
    const svg = fs.readFileSync(path.join(build, "mechanical", figure.src), "utf8");
    assert.doesNotMatch(svg, /&amp;(?:\w+|#\d+);/, `${slug}: no double-escaped diagram labels`);
    for (const label of figure.text) {
      const expectedLabel = revisedFigureLabels[figure.src]?.[label] ?? label;
      assert.ok(normalize(plain(svg)).includes(normalize(expectedLabel)), `${slug}: diagram label ${expectedLabel}`);
    }
  }
  for (const video of page.videos) {
    const frames = [...html.matchAll(/<iframe\b[^>]*>/g)].map(([tag]) => attributes(tag));
    assert.ok(frames.some(frame => frame.src.startsWith(`https://www.youtube-nocookie.com/embed/${video.id}?`) && frame.title === video.title), `${slug}: video and title`);
  }
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
  const rendered = normalize(plain(main));
  for (const prose of page.prose) {
    const expectedProse = slug === "mech06_crank"
      ? prose.replace("In both of the positions drawn,", "In snapshots 1 and 3,")
      : prose;
    assert.ok(rendered.includes(normalize(expectedProse)), `${slug}: missing source text: ${expectedProse}`);
  }
  fields += controls.length;
  figures += page.figures.length;
}
const hub = fs.readFileSync(path.join(build, "mechanical/index.html"), "utf8");
for (const page of inventory.pages) {
  assert.ok(hub.includes(page.file.replace(/\.md$/, "/")), `hub links ${page.file}`);
}
assert.ok(hub.includes("Challenges 25–28 are not yet available"), "missing source challenges are explained");
console.log(`mechanical migration OK: ${inventory.pages.length} worksheets, ${fields} fields, ${figures} diagrams`);
