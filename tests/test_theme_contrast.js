#!/usr/bin/env node
"use strict";

const fs = require("node:fs");

const BASE_CSS_PATH = "assets/css/site-base.css";
const palettePaths = [
  BASE_CSS_PATH,
  "assets/css/syntax.css",
  "assets/css/explorer.css",
  "assets/css/glossary.css"
];
const errors = [];

const requiredTokens = [
  "--surface-page",
  "--surface-panel",
  "--surface-input",
  "--text-primary",
  "--text-muted",
  "--text-accent",
  "--text-on-dark",
  "--nav-background",
  "--focus-ring"
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function balancedBlock(source, openBrace, label) {
  let depth = 0;
  for (let index = openBrace; index < source.length; index += 1) {
    if (source[index] === "{") depth += 1;
    if (source[index] === "}") depth -= 1;
    if (depth === 0) return source.slice(openBrace + 1, index);
  }
  errors.push(`${label}: unclosed block`);
  return "";
}

function atRuleBody(source, pattern, label) {
  const match = pattern.exec(source);
  if (!match) {
    errors.push(`${label}: missing media rule`);
    return "";
  }
  const openBrace = source.indexOf("{", match.index);
  return balancedBlock(source, openBrace, label);
}

function ruleBody(source, selector, label) {
  const match = new RegExp(`${escapeRegExp(selector)}\\s*\\{`, "m").exec(source);
  if (!match) {
    errors.push(`${label}: missing ${selector} palette rule`);
    return "";
  }
  const openBrace = source.indexOf("{", match.index);
  return balancedBlock(source, openBrace, label);
}

function declarationsFrom(body) {
  const declarations = new Map();
  const pattern = /([\w-]+)\s*:\s*([^;{}]+);/g;
  let declaration;
  while ((declaration = pattern.exec(body)) !== null) {
    declarations.set(declaration[1], declaration[2].trim());
  }
  return declarations;
}

function normalizeValue(value) {
  return value.toLowerCase().replace(/\s+/g, "");
}

function compareDeclarations(path, expectedName, expected, actualName, actual) {
  for (const [property, expectedValue] of expected) {
    if (!actual.has(property)) {
      errors.push(`${path}: ${actualName} is missing ${property} from ${expectedName}`);
      continue;
    }
    const actualValue = actual.get(property);
    if (normalizeValue(actualValue) !== normalizeValue(expectedValue)) {
      errors.push(
        `${path}: ${actualName} ${property} is ${actualValue}, ` +
        `expected ${expectedValue} from ${expectedName}`
      );
    }
  }
}

function validateFallbackAndPrintPalettes(path) {
  const source = fs.readFileSync(path, "utf8");
  const light = declarationsFrom(ruleBody(source, ":root", `${path} light`));
  const dark = declarationsFrom(ruleBody(source, ':root[data-theme="dark"]', `${path} dark`));
  const systemMedia = atRuleBody(
    source,
    /@media\s*\(\s*prefers-color-scheme\s*:\s*dark\s*\)\s*\{/m,
    `${path} system dark`
  );
  const systemDark = declarationsFrom(
    ruleBody(systemMedia, ":root:not([data-theme])", `${path} system dark`)
  );
  const printMedia = atRuleBody(source, /@media\s+print\s*\{/m, `${path} print`);
  const printSelector = /:root\s*,\s*:root\[data-theme=["']dark["']\]\s*,\s*:root:not\(\[data-theme\]\)\s*\{/m;
  if (!printSelector.test(printMedia)) {
    errors.push(
      `${path} print: palette selector must cover :root, explicit dark, and absent data-theme states`
    );
  }
  const print = declarationsFrom(
    ruleBody(printMedia, ":root:not([data-theme])", `${path} print`)
  );

  compareDeclarations(path, "explicit dark", dark, "system dark fallback", systemDark);

  const lightThemeValues = new Map();
  for (const property of dark.keys()) {
    if (!light.has(property)) {
      errors.push(`${path}: light palette is missing dark-mode property ${property}`);
      continue;
    }
    lightThemeValues.set(property, light.get(property));
  }
  compareDeclarations(path, "light palette", lightThemeValues, "print palette", print);

  return {light, dark};
}

const basePalettes = validateFallbackAndPrintPalettes(BASE_CSS_PATH);
for (const path of palettePaths.slice(1)) validateFallbackAndPrintPalettes(path);

function readContrastPalette(declarations, theme) {
  const palette = {};
  for (const token of requiredTokens) {
    if (!declarations.has(token)) {
      errors.push(`${theme}: missing ${token} in ${BASE_CSS_PATH}`);
      continue;
    }
    const value = declarations.get(token);
    if (!/^#(?:[\da-f]{3}|[\da-f]{6})$/i.test(value)) {
      errors.push(`${theme}: ${token} must be a literal three- or six-digit hex color, got ${value}`);
      continue;
    }
    palette[token] = value;
  }
  return palette;
}

function rgbFromHex(hex) {
  let digits = hex.slice(1);
  if (digits.length === 3) {
    digits = digits.split("").map((digit) => digit + digit).join("");
  }
  return [0, 2, 4].map((offset) => Number.parseInt(digits.slice(offset, offset + 2), 16) / 255);
}

function luminance(hex) {
  const channels = rgbFromHex(hex).map((channel) =>
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  );
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(first, second) {
  const lighter = Math.max(luminance(first), luminance(second));
  const darker = Math.min(luminance(first), luminance(second));
  return (lighter + 0.05) / (darker + 0.05);
}

const pairs = [
  ["primary text on page", "--text-primary", "--surface-page", 4.5],
  ["primary text on panel", "--text-primary", "--surface-panel", 4.5],
  ["muted text on page", "--text-muted", "--surface-page", 4.5],
  ["muted text on panel", "--text-muted", "--surface-panel", 4.5],
  ["input text on input", "--text-primary", "--surface-input", 4.5],
  ["accent text on page", "--text-accent", "--surface-page", 4.5],
  ["accent text on panel", "--text-accent", "--surface-panel", 4.5],
  ["navigation text on navigation", "--text-on-dark", "--nav-background", 4.5],
  ["focus ring on page", "--focus-ring", "--surface-page", 3],
  ["focus ring on input", "--focus-ring", "--surface-input", 3]
];

const palettes = [
  ["light", readContrastPalette(basePalettes.light, "light")],
  ["dark", readContrastPalette(basePalettes.dark, "dark")]
];

if (errors.length === 0) {
  for (const [theme, palette] of palettes) {
    for (const [label, foreground, background, minimum] of pairs) {
      const ratio = contrastRatio(palette[foreground], palette[background]);
      if (ratio + Number.EPSILON < minimum) {
        errors.push(
          `${theme}: ${label} is ${ratio.toFixed(2)}:1 ` +
          `(${foreground} ${palette[foreground]} on ${background} ${palette[background]}), ` +
          `expected at least ${minimum}:1`
        );
      }
    }
  }
}

if (errors.length > 0) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    `theme contrast OK: ${pairs.length * palettes.length} light/dark palette pairs; ` +
    `${palettePaths.length} fallback/print palettes`
  );
}
