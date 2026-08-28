#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const buildDir = process.argv[2];
if (!buildDir) {
  process.stderr.write("Usage: node tests/test_wordblocks_markup.js <build_dir>\n");
  process.exit(1);
}

function findPage(dir, fragment) {
  const pending = [dir];
  while (pending.length) {
    const current = pending.pop();
    if (!fs.existsSync(current)) continue;
    for (const entry of fs.readdirSync(current, {withFileTypes: true})) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) pending.push(full);
      else if (entry.name === "index.html" && full.replaceAll("\\", "/").includes(fragment)) {
        return full;
      }
    }
  }
  return null;
}

function assertProgram(html, ariaSnippet) {
  const figure = html.match(
    new RegExp(`<figure class="wb-prog" role="img" aria-label="[^"]*${ariaSnippet}[^"]*"[\\s\\S]*?</figure>`)
  );
  assert.ok(figure, `missing word-block program containing ${ariaSnippet}`);
  const block = figure[0];
  assert.match(block, /<div class="wb-prog-visual" aria-hidden="true">/);
  assert.doesNotMatch(block, /<div class="wb-prog-visual"(?! aria-hidden="true")/);
  return block;
}

const simplePage = findPage(buildDir, "/discovery/ev3/project-01/");
assert.ok(simplePage, "EV3 project 1 is in the build");
const simple = fs.readFileSync(simplePage, "utf8");
const hat = assertProgram(simple, "when program starts, write Hi!");
assert.match(hat, /class="wb ev hat"/);
assert.match(hat, /class="wb lt"/);
assert.match(hat, /<span class="pill">Hi!<\/span>/);

const nestedPage = findPage(buildDir, "/discovery/ev3/project-15/")
  || findPage(buildDir, "/discovery/spike/project-15/");
assert.ok(nestedPage, "project 15 is in the build");
const nested = fs.readFileSync(nestedPage, "utf8");
const loop = assertProgram(nested, "repeat until pressed");
assert.match(loop, /class="wb-cwrap"/);
assert.match(loop, /class="wb ct cb-top"/);
assert.match(loop, /class="wb-cbody"/);
assert.match(loop, />else</);
assert.match(loop, /class="pill steer"/);

const matrixPage = findPage(buildDir, "/discovery/spike/project-02/");
if (matrixPage) {
  const matrixHtml = fs.readFileSync(matrixPage, "utf8");
  if (matrixHtml.includes('class="pill mx"')) {
    assert.match(matrixHtml, /<span class="pill mx">/);
    assert.match(matrixHtml, /<s class="on"><\/s>/);
  }
}

process.stdout.write("test_wordblocks_markup.js: ok\n");
