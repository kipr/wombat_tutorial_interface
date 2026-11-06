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
    // The crank figure was deliberately redrawn as three snapshots. Keep the
    // frozen source inventory and require the revised accessible description.
    const expectedAlt = figure.src === "mech06_crank-diagram-01.svg"
      ? "Three snapshots of the same crank turning counterclockwise. The fixed axle and guide stay in place. With the pin pointing right, the pusher is farthest out. After a quarter-turn, the pin is above the axle, the rod tilts, and the pusher moves inward. After a half-turn, the pin points left and the pusher is farthest in. Both rod ends pivot; the next half-turn brings the pusher back out. Stroke is twice the axle-to-pin offset."
      : figure.alt;
    assert.ok(images.some(image => image.src.endsWith("/" + figure.src) && image.alt === expectedAlt), `${slug}: ${figure.src} and alt text`);
    assert.ok(normalize(plain(html)).includes(normalize(figure.caption)), `${slug}: figure caption`);
    assert.ok(fs.existsSync(path.join(build, "mechanical", figure.src)), `${slug}: published SVG`);
    const svg = fs.readFileSync(path.join(build, "mechanical", figure.src), "utf8");
    assert.doesNotMatch(svg, /&amp;(?:\w+|#\d+);/, `${slug}: no double-escaped diagram labels`);
    for (const label of figure.text) {
      assert.ok(normalize(plain(svg)).includes(normalize(label)), `${slug}: diagram label ${label}`);
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
