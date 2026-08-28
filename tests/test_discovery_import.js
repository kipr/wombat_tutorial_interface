#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const {spawnSync} = require("node:child_process");

const importer = require("../tools/discovery-importer/import.js");
const WRITER = path.resolve("tools/discovery-importer/writer.lua");
const SOURCE = path.resolve("tbc");

function convertFragment(html) {
  const wrapped = `<!DOCTYPE html><html><body>${html}</body></html>`;
  return spawnSync(
    "pandoc",
    ["--from=html+raw_html", `--to=${WRITER}`, "--metadata=platform=ev3"],
    {input: wrapped, encoding: "utf8", maxBuffer: 2 * 1024 * 1024}
  );
}

function htmlKeys(html) {
  return [...html.matchAll(/data-key="([^"]+)"/g)].map((match) => match[1]);
}

function markdownKeys(text) {
  const keys = [];
  for (const match of text.matchAll(/\bkey:\s*([A-Za-z0-9_]+)/g)) keys.push(match[1]);
  for (const match of text.matchAll(/\bkey="([^"]+)"/g)) keys.push(match[1]);
  return keys;
}

function htmlWordblocks(html) {
  return [...html.matchAll(/<div class="wb-prog"[^>]*aria-label="([^"]+)"/g)].map((match) => match[1]);
}

function markdownWordblocks(text) {
  return [...text.matchAll(/\{\{<\s*wordblocks\s+aria="([^"]+)"\s*>\}\}/g)].map((match) => match[1]);
}

function assertFails(html, snippet) {
  const result = convertFragment(html);
  assert.notEqual(result.status, 0, "expected writer failure");
  const err = `${result.stderr || ""}\n${result.stdout || ""}`;
  assert.match(err, snippet);
}

const temp = fs.mkdtempSync(path.join(os.tmpdir(), "discovery-import-"));
const first = importer.convertAll({source: SOURCE, out: temp, force: false});
assert.equal(first.written.length, 42);
assert.equal(
  fs.readdirSync(path.join(temp, "discovery", "ev3")).filter((name) => name.startsWith("project-")).length,
  17
);
assert.equal(
  fs.readdirSync(path.join(temp, "discovery", "spike")).filter((name) => name.startsWith("project-")).length,
  17
);

assert.throws(
  () => importer.convertAll({source: SOURCE, out: temp, force: false}),
  (error) => /refusing to overwrite/.test(error.message)
);

const second = importer.convertAll({source: SOURCE, out: temp, force: true});
assert.equal(second.written.length, first.written.length);

for (const platform of ["ev3", "spike"]) {
  const expected = platform === "ev3" ? 1218 : 1216;
  const sourceRoot = path.join(
    SOURCE,
    platform === "ev3" ? "discovery-ev3-complete/discovery-ev3" : "discovery-spike-complete/discovery-spike"
  );
  let fields = 0;
  let programs = 0;
  for (let number = 1; number <= 17; number += 1) {
    const htmlFile = path.join(sourceRoot, "coding", `project-${number}.html`);
    const padded = path.join(sourceRoot, "coding", `project-${String(number).padStart(2, "0")}.html`);
    const html = fs.readFileSync(fs.existsSync(htmlFile) ? htmlFile : padded, "utf8");
    const md = fs.readFileSync(
      path.join(temp, "discovery", platform, `project-${String(number).padStart(2, "0")}.md`),
      "utf8"
    );
    assert.match(md, /^---\n/, `${platform} project ${number} has front matter`);
    assert.match(md, new RegExp(`mission_id: "discovery_${platform}_coding_${String(number).padStart(2, "0")}"`));
    assert.doesNotMatch(md, /<[a-zA-Z]/, `${platform} project ${number} has no raw HTML`);
    const fromHtml = htmlKeys(html);
    const fromMd = markdownKeys(md);
    assert.deepEqual(
      [...fromMd].sort(),
      [...fromHtml].sort(),
      `${platform} project ${number} persisted keys`
    );
    fields += fromHtml.length;
    const htmlAria = htmlWordblocks(html);
    const mdAria = markdownWordblocks(md);
    assert.equal(mdAria.length, htmlAria.length, `${platform} project ${number} word-block count`);
    programs += htmlAria.length;
  }
  assert.equal(fields, expected, `${platform} field inventory`);
  assert.equal(programs, 40, `${platform} word-block inventory`);

  const hub = fs.readFileSync(path.join(temp, "discovery", platform, "_index.md"), "utf8");
  assert.match(hub, new RegExp(`platform: "${platform}"`));
  assert.match(hub, /heading_accent: "Coding"/);
  assert.ok(fs.existsSync(path.join(temp, "discovery", platform, "builds", "arm.md")));
  assert.ok(fs.existsSync(path.join(temp, "discovery", platform, "builds", "claw.md")));
}

assertFails(
  '<div class="mystery"><p>nope</p></div>',
  /unknown class mystery/
);
assertFails(
  '<div class="wb-prog"><div class="wb-row"><div class="wb hat ev">when program starts</div></div></div>',
  /missing aria-label/
);
assertFails(
  '<textarea class="answer" data-key="dup" aria-label="One"></textarea><textarea class="answer" data-key="dup" aria-label="Two"></textarea>',
  /duplicate key dup/
);

process.stdout.write("test_discovery_import.js: ok\n");
