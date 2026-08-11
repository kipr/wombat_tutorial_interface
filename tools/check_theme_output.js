#!/usr/bin/env node
"use strict";

/** Verify the theme script and accessible control in Hugo-rendered output. */

const fs = require("node:fs");
const path = require("node:path");

function usage() {
  console.error("Usage: node tools/check_theme_output.js <build>");
}

function parseArguments(argv) {
  if (argv.length !== 1 || argv[0] === "--help" || argv[0] === "-h") {
    if (argv.length === 1 && (argv[0] === "--help" || argv[0] === "-h")) {
      usage();
      process.exit(0);
    }
    throw new Error("a single Hugo build destination is required");
  }
  return path.resolve(argv[0]);
}

function filesBelow(root, extension) {
  if (!fs.existsSync(root)) return [];
  const found = [];
  const pending = [root];
  while (pending.length > 0) {
    const directory = pending.pop();
    for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        pending.push(entryPath);
      } else if (entry.isFile() && entry.name.endsWith(extension)) {
        found.push(entryPath);
      }
    }
  }
  return found.sort();
}

function attributesFrom(tag) {
  const name = tag.match(/^<\s*[A-Za-z][\w:-]*/);
  const attributes = {};
  const body = tag.slice(name ? name[0].length : 0, tag.endsWith(">") ? -1 : undefined);
  const pattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;
  while ((match = pattern.exec(body)) !== null) {
    attributes[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4] ?? "";
  }
  return attributes;
}

function decodeHtml(text) {
  const named = {amp: "&", apos: "'", gt: ">", lt: "<", nbsp: "\u00a0", quot: '"'};
  return text.replace(/&(#x[\da-f]+|#\d+|[a-z][a-z\d]+);/gi, (entity, value) => {
    if (value[0] === "#") {
      const hexadecimal = value[1].toLowerCase() === "x";
      const number = Number.parseInt(value.slice(hexadecimal ? 2 : 1), hexadecimal ? 16 : 10);
      return Number.isNaN(number) ? entity : String.fromCodePoint(number);
    }
    return Object.hasOwn(named, value.toLowerCase()) ? named[value.toLowerCase()] : entity;
  });
}

function relativeTo(root, filename) {
  return path.relative(root, filename).split(path.sep).join("/");
}

function themeScripts(markup) {
  const scripts = [];
  for (const match of markup.matchAll(/<script\b[^>]*>/gi)) {
    const attributes = attributesFrom(match[0]);
    const pathname = typeof attributes.src === "string"
      ? attributes.src.split(/[?#]/, 1)[0]
      : "";
    if (/(?:^|\/)js\/theme\.js$/.test(pathname)) {
      scripts.push({attributes, index: match.index});
    }
  }
  return scripts;
}

function firstStylesheetIndex(markup) {
  for (const match of markup.matchAll(/<link\b[^>]*>/gi)) {
    const attributes = attributesFrom(match[0]);
    const relationships = new Set((attributes.rel || "").toLowerCase().split(/\s+/));
    if (relationships.has("stylesheet")) return match.index;
  }
  return -1;
}

function themeControls(markup) {
  const controls = [];
  for (const match of markup.matchAll(/<([A-Za-z][\w:-]*)\b[^>]*>/g)) {
    const attributes = attributesFrom(match[0]);
    if (attributes.id !== "themeToggle") continue;
    let innerText = "";
    if (match[1].toLowerCase() === "button") {
      const afterStart = match.index + match[0].length;
      const closing = markup.slice(afterStart).match(/<\/button\s*>/i);
      if (closing) {
        innerText = decodeHtml(
          markup.slice(afterStart, afterStart + closing.index).replace(/<[^>]+>/g, " ")
        ).replace(/\s+/g, " ").trim();
      }
    }
    controls.push({tagName: match[1].toLowerCase(), attributes, innerText});
  }
  return controls;
}

function main() {
  let build;
  try {
    build = parseArguments(process.argv.slice(2));
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    usage();
    return 2;
  }

  const errors = [];
  const pages = filesBelow(build, ".html").filter(
    (filename) => relativeTo(build, filename) !== "score.html"
  );
  if (pages.length === 0) {
    errors.push(`no Hugo-rendered HTML pages found below ${build}`);
  }

  const themeTarget = path.join(build, "js", "theme.js");
  const depths = new Set();

  for (const page of pages) {
    const where = relativeTo(build, page);
    const markup = fs.readFileSync(page, "utf8");
    depths.add(where.split("/").length - 1);

    const scripts = themeScripts(markup);
    if (scripts.length !== 1) {
      errors.push(`${where} has ${scripts.length} theme scripts, expected exactly one`);
    } else {
      const script = scripts[0];
      const source = script.attributes.src;
      if (!/(?:^|\/)js\/theme\.js$/.test(source)) {
        errors.push(`${where} theme script URL must end in js/theme.js: ${JSON.stringify(source)}`);
      } else if (source.startsWith("/") || /^[a-z][a-z\d+.-]*:/i.test(source)) {
        errors.push(`${where} theme script URL is not relative: ${JSON.stringify(source)}`);
      } else {
        const resolved = path.resolve(path.dirname(page), ...source.split("/"));
        if (resolved !== themeTarget) {
          errors.push(
            `${where} theme script resolves to ${relativeTo(build, resolved)}, expected js/theme.js`
          );
        }
      }
      const stylesheetIndex = firstStylesheetIndex(markup);
      if (stylesheetIndex < 0) {
        errors.push(`${where} has no stylesheet link to compare with the theme script`);
      } else if (script.index > stylesheetIndex) {
        errors.push(`${where} loads the theme script after its first stylesheet`);
      }
    }

    const controls = themeControls(markup);
    if (controls.length !== 1) {
      errors.push(`${where} has ${controls.length} #themeToggle controls, expected exactly one`);
      continue;
    }
    const control = controls[0];
    if (control.tagName !== "button") {
      errors.push(`${where} #themeToggle is <${control.tagName}>, expected <button>`);
    }
    if (control.attributes.type !== "button") {
      errors.push(`${where} #themeToggle must have type="button"`);
    }
    if (control.attributes["aria-pressed"] !== "false") {
      errors.push(`${where} #themeToggle must initially have aria-pressed="false"`);
    }
    const classes = new Set((control.attributes.class || "").split(/\s+/).filter(Boolean));
    if (!classes.has("no-print")) {
      errors.push(`${where} #themeToggle is missing the no-print class`);
    }
    if (!control.innerText) {
      errors.push(`${where} #themeToggle has no visible text`);
    }
  }

  if (pages.length > 0 && depths.size < 3) {
    errors.push("theme output check did not cover pages at three or more nesting depths");
  }

  if (errors.length > 0) {
    for (const error of errors) console.error(`ERROR: ${error}`);
    return 1;
  }

  console.log(
    `theme output OK: ${pages.length} Hugo pages across depths ${[...depths].sort().join(", ")}`
  );
  return 0;
}

process.exitCode = main();
