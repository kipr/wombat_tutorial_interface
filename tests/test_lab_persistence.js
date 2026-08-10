#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

function keyed(key, type, value, checked) {
  return {
    type,
    value: value || "",
    checked: Boolean(checked),
    getAttribute(name) { return name === "data-key" ? key : null; },
    matches(selector) { return selector.includes("[data-key]"); }
  };
}

const checkbox = keyed("check", "checkbox", "browser-default-value", false);
const unchecked = keyed("empty_check", "checkbox", "browser-default-value", true);
const text = keyed("short", "text", "old", false);
const textarea = keyed("long", "textarea", "old long", false);
const controls = [checkbox, unchecked, text, textarea];
const documentListeners = {};
const buttonListeners = {};
const pin = {
  value: "2468",
  focus() {},
  matches(selector) { return selector.includes("#pin"); }
};
const elements = {
  pin,
  status: {textContent: "", className: ""},
  statusBottom: {textContent: ""},
  pinEcho: {textContent: ""},
  submitTop: {addEventListener(type, callback) { buttonListeners[type] = callback; }},
  submitBottom: {addEventListener() {}}
};
const saved = new Map([
  ["kipr_fixture_draft", JSON.stringify({
    pin: "1357",
    answers: {check: "yes", empty_check: "", short: "restored", long: "restored long"}
  })]
]);
let downloadedBlob = null;
let printed = false;

const document = {
  title: "Fixture",
  body: {
    style: {},
    getAttribute(name) {
      return name === "data-mission-id" ? "fixture" : name === "data-mission-title" ? "Fixture title" : null;
    },
    appendChild() {},
    removeChild() {}
  },
  querySelectorAll(selector) { return selector === "[data-key]" ? controls : []; },
  getElementById(id) { return elements[id] || null; },
  addEventListener(type, callback) { documentListeners[type] = callback; },
  createElement() { return {click() {}}; }
};
const window = {
  localStorage: {
    getItem(key) { return saved.get(key) || null; },
    setItem(key, value) { saved.set(key, value); }
  },
  print() { printed = true; },
  KIPR_GLOSSARY: {}
};
const context = {
  document,
  window,
  Blob: class Blob { constructor(parts) { this.text = parts.join(""); } },
  URL: {
    createObjectURL(blob) { downloadedBlob = blob; return "blob:fixture"; },
    revokeObjectURL() {}
  },
  Date,
  setTimeout(callback) { callback(); }
};
vm.runInNewContext(fs.readFileSync("static/js/lab.js", "utf8"), context, {filename: "lab.js"});

assert.equal(checkbox.checked, true, "checked state restores from yes");
assert.equal(unchecked.checked, false, "unchecked state restores from empty string");
assert.equal(checkbox.value, "browser-default-value", "checkbox restoration does not overwrite value");
assert.equal(text.value, "restored");
assert.equal(textarea.value, "restored long");

const persistence = window.KIPR_WORKSHEET_PERSISTENCE;
assert.deepEqual(
  JSON.parse(JSON.stringify(persistence.collectAnswers(document))),
  {check: "yes", empty_check: "", short: "restored", long: "restored long"}
);

checkbox.checked = false;
text.value = "saved by input";
documentListeners.input({target: text});
let draft = JSON.parse(saved.get("kipr_fixture_draft"));
assert.equal(draft.answers.check, "");
assert.equal(draft.answers.short, "saved by input");

checkbox.checked = true;
documentListeners.change({target: checkbox});
draft = JSON.parse(saved.get("kipr_fixture_draft"));
assert.equal(draft.answers.check, "yes", "change events save checkbox state");

buttonListeners.click();
const payload = JSON.parse(downloadedBlob.text);
assert.equal(payload.answers.check, "yes", "submission/export uses checkbox serialization");
assert.equal(payload.answers.empty_check, "");
assert.equal(payload.answers.short, "saved by input");
assert.equal(payload.mission, "fixture");
assert.equal(payload.pin, "1357");
assert.equal(printed, true);

persistence.restoreAnswers(document, {check: "", empty_check: "yes", short: "reset", long: ""});
assert.equal(checkbox.checked, false);
assert.equal(unchecked.checked, true);
assert.equal(text.value, "reset");
assert.equal(textarea.value, "");

console.log("worksheet persistence OK: reload, input/change save, reset, export, and submission payload");
