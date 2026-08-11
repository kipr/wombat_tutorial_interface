#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const THEME_PATH = "static/js/theme.js";

assert.ok(
  fs.existsSync(THEME_PATH),
  `${THEME_PATH} is required by the dark-mode behavior contract`
);
const source = fs.readFileSync(THEME_PATH, "utf8");

function makeControl() {
  const attributes = new Map();
  const listeners = {};
  return {
    textContent: "",
    addEventListener(type, callback) { listeners[type] = callback; },
    getAttribute(name) { return attributes.get(name) ?? null; },
    setAttribute(name, value) { attributes.set(name, String(value)); },
    click() {
      assert.equal(typeof listeners.click, "function", "theme control binds a click handler");
      listeners.click({currentTarget: this, target: this});
    }
  };
}

function createHarness(options = {}) {
  const root = {dataset: {}};
  const documentListeners = {};
  const stored = new Map(Object.entries(options.stored || {}));
  const storageCalls = {get: [], set: [], remove: []};
  let control = null;

  const storage = {
    getItem(key) {
      storageCalls.get.push(key);
      if (options.throwOnGet) throw new Error("storage read blocked");
      return stored.has(key) ? stored.get(key) : null;
    },
    setItem(key, value) {
      storageCalls.set.push([key, value]);
      if (options.throwOnSet) throw new Error("storage write blocked");
      stored.set(key, value);
    },
    removeItem(key) {
      storageCalls.remove.push(key);
      stored.delete(key);
    }
  };

  const mediaListeners = [];
  const media = {
    matches: Boolean(options.systemDark),
    addEventListener(type, callback) {
      if (type === "change") mediaListeners.push(callback);
    },
    removeEventListener() {}
  };

  const document = {
    documentElement: root,
    readyState: "loading",
    addEventListener(type, callback) { documentListeners[type] = callback; },
    getElementById(id) { return id === "themeToggle" ? control : null; }
  };
  const window = {};
  let storageAccesses = 0;
  if (options.throwOnStorageAccess) {
    Object.defineProperty(window, "localStorage", {
      get() {
        storageAccesses += 1;
        throw new Error("storage access blocked");
      }
    });
  } else {
    window.localStorage = storage;
  }
  if (options.hasMatchMedia !== false) {
    window.matchMedia = function (query) {
      assert.equal(query, "(prefers-color-scheme: dark)");
      return media;
    };
  }

  const context = {document, localStorage: storage, window};
  if (window.matchMedia) context.matchMedia = window.matchMedia;
  vm.runInNewContext(source, context, {filename: "theme.js"});

  return {
    root,
    stored,
    storageCalls,
    get storageAccesses() { return storageAccesses; },
    themeBeforeControl: root.dataset.theme,
    initializeControl() {
      control = makeControl();
      document.readyState = "interactive";
      assert.equal(
        typeof documentListeners.DOMContentLoaded,
        "function",
        "theme script defers control binding until DOMContentLoaded"
      );
      documentListeners.DOMContentLoaded();
      return control;
    },
    changeSystemPreference(dark) {
      media.matches = dark;
      mediaListeners.forEach((callback) => callback({matches: dark}));
    }
  };
}

function assertControl(control, dark) {
  assert.equal(control.getAttribute("aria-pressed"), dark ? "true" : "false");
  assert.equal(control.textContent, dark ? "Dark mode: On" : "Dark mode: Off");
}

{
  const harness = createHarness({stored: {kipr_theme: "dark"}, systemDark: false});
  assert.equal(harness.themeBeforeControl, "dark", "stored dark is applied before control binding");
  assertControl(harness.initializeControl(), true);
}

{
  const harness = createHarness({stored: {kipr_theme: "light"}, systemDark: true});
  assert.equal(harness.themeBeforeControl, "light", "stored light overrides a dark system setting");
  assertControl(harness.initializeControl(), false);
}

for (const dark of [false, true]) {
  const harness = createHarness({systemDark: dark});
  assert.equal(
    harness.themeBeforeControl,
    dark ? "dark" : "light",
    "an unset preference follows the operating-system setting"
  );
}

{
  const harness = createHarness({hasMatchMedia: false});
  assert.equal(harness.themeBeforeControl, "light", "missing matchMedia falls back to light");
}

{
  const harness = createHarness({stored: {kipr_theme: "sepia"}, systemDark: true});
  assert.equal(harness.themeBeforeControl, "dark", "invalid storage is ignored");
}

{
  const harness = createHarness({throwOnGet: true, systemDark: true});
  assert.equal(harness.themeBeforeControl, "dark", "a storage read failure does not stop setup");
  assertControl(harness.initializeControl(), true);
}

{
  const harness = createHarness({throwOnStorageAccess: true, systemDark: true});
  assert.equal(harness.themeBeforeControl, "dark", "blocked storage access still follows the system");
  const control = harness.initializeControl();
  control.click();
  assert.equal(harness.root.dataset.theme, "light", "blocked storage does not undo the page theme");
  assertControl(control, false);
  harness.changeSystemPreference(true);
  assert.equal(harness.root.dataset.theme, "light", "a click still stops following the system");
  assert.equal(harness.storageAccesses, 2, "storage is attempted only during initialization and save");
}

{
  const harness = createHarness({systemDark: false});
  const control = harness.initializeControl();
  assertControl(control, false);
  control.click();
  assert.equal(harness.root.dataset.theme, "dark");
  assertControl(control, true);
  control.click();
  assert.equal(harness.root.dataset.theme, "light");
  assertControl(control, false);
  assert.deepEqual(
    harness.storageCalls.set,
    [["kipr_theme", "dark"], ["kipr_theme", "light"]],
    "clicks persist only valid theme values under the theme key"
  );
}

{
  const harness = createHarness({systemDark: false, throwOnSet: true});
  const control = harness.initializeControl();
  control.click();
  assert.equal(harness.root.dataset.theme, "dark", "a failed write does not undo the page theme");
  assertControl(control, true);
  harness.changeSystemPreference(false);
  assert.equal(
    harness.root.dataset.theme,
    "dark",
    "a click stops following the system even when persistence fails"
  );
}

{
  const harness = createHarness({systemDark: false});
  const control = harness.initializeControl();
  harness.changeSystemPreference(true);
  assert.equal(harness.root.dataset.theme, "dark", "system changes apply without an explicit choice");
  assertControl(control, true);
  control.click();
  assert.equal(harness.root.dataset.theme, "light");
  harness.changeSystemPreference(true);
  assert.equal(harness.root.dataset.theme, "light", "system changes stop after an explicit choice");
}

{
  const harness = createHarness({stored: {kipr_theme: "dark"}, systemDark: false});
  harness.initializeControl();
  harness.changeSystemPreference(false);
  assert.equal(harness.root.dataset.theme, "dark", "a stored choice does not follow system changes");
}

{
  const draftKey = "kipr_fixture_draft";
  const draftValue = JSON.stringify({pin: "2468", answers: {check: "yes"}});
  const harness = createHarness({stored: {[draftKey]: draftValue}, systemDark: false});
  const control = harness.initializeControl();
  control.click();
  assert.deepEqual(harness.storageCalls.get, ["kipr_theme"]);
  assert.deepEqual(harness.storageCalls.set, [["kipr_theme", "dark"]]);
  assert.deepEqual(harness.storageCalls.remove, []);
  assert.equal(harness.stored.get(draftKey), draftValue, "worksheet draft data remains untouched");
}

console.log("theme behavior OK: initialization, toggle state, storage failures, system changes, and isolation");
