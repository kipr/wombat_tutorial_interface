#!/usr/bin/env node
"use strict";

const fs = require("node:fs");

const CSS_PATH = "assets/css/site-base.css";
const css = fs.readFileSync(CSS_PATH, "utf8");
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

function declarationsFor(selector, theme) {
  const match = css.match(new RegExp(`${escapeRegExp(selector)}\\s*\\{([^}]*)\\}`, "m"));
  if (!match) {
    errors.push(`${theme}: missing ${selector} palette rule in ${CSS_PATH}`);
    return new Map();
  }

  const declarations = new Map();
  const pattern = /(--[\w-]+)\s*:\s*([^;]+);/g;
  let declaration;
  while ((declaration = pattern.exec(match[1])) !== null) {
    declarations.set(declaration[1], declaration[2].trim());
  }
  return declarations;
}

function readPalette(selector, theme) {
  const declarations = declarationsFor(selector, theme);
  const palette = {};
  for (const token of requiredTokens) {
    if (!declarations.has(token)) {
      errors.push(`${theme}: missing ${token} in ${selector}`);
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
  ["light", readPalette(":root", "light")],
  ["dark", readPalette(':root[data-theme="dark"]', "dark")]
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
  console.log(`theme contrast OK: ${pairs.length * palettes.length} light/dark palette pairs`);
}
