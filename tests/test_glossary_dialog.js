#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

function classList() {
  const values = new Set();
  return {
    add(value) { values.add(value); },
    remove(value) { values.delete(value); },
    contains(value) { return values.has(value); }
  };
}

const listeners = {};
const closeListeners = {};
let closeFocused = false;
let triggerFocused = false;
const overlay = {
  hidden: true,
  classList: classList(),
  addEventListener(type, callback) { listeners[`overlay:${type}`] = callback; }
};
const closeButton = {
  focus() { closeFocused = true; },
  addEventListener(type, callback) { closeListeners[type] = callback; }
};
const term = {
  dataset: {term: "PROTOTYPE:design"},
  focus() { triggerFocused = true; },
  closest(selector) { return selector === ".def-term" ? this : null; }
};
const elements = {
  defOverlay: overlay,
  defTerm: {textContent: ""},
  defBody: {textContent: ""},
  defClose: closeButton
};
const document = {
  title: "Glossary fixture",
  body: {style: {}, getAttribute() { return null; }},
  getElementById(id) { return elements[id] || null; },
  addEventListener(type, callback) { listeners[type] = callback; }
};
const window = {
  KIPR_GLOSSARY: {
    "PROTOTYPE:design": {title: "Prototype", body: "A first design used to learn and improve."}
  }
};
vm.runInNewContext(fs.readFileSync("static/js/lab.js", "utf8"), {document, window}, {filename: "lab.js"});

let prevented = false;
listeners.click({target: term, preventDefault() { prevented = true; }});
assert.equal(prevented, true);
assert.equal(overlay.hidden, false);
assert.equal(overlay.classList.contains("open"), true);
assert.equal(elements.defTerm.textContent, "Prototype");
assert.equal(closeFocused, true, "opening moves focus into the dialog");

closeListeners.click();
assert.equal(overlay.hidden, true);
assert.equal(overlay.classList.contains("open"), false);
assert.equal(triggerFocused, true, "closing returns focus to the glossary trigger");

triggerFocused = false;
listeners.click({target: term, preventDefault() {}});
listeners.keydown({key: "Escape"});
assert.equal(triggerFocused, true, "Escape closes and restores focus");

console.log("glossary dialog OK: semantic click activation, Escape/click close, and focus return");
