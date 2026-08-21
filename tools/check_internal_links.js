#!/usr/bin/env node
"use strict";

/** Verify local links and resource references in Hugo-rendered HTML. */

const fs = require("node:fs");
const path = require("node:path");

function usage() {
  console.error("Usage: node tools/check_internal_links.js <build>");
}

function parseArguments(argv) {
  if (argv.length !== 1 || argv[0] === "--help" || argv[0] === "-h") {
    if (argv.length === 1 && (argv[0] === "--help" || argv[0] === "-h")) {
      usage();
      process.exit(0);
    }
    throw new Error("a single Hugo build destination is required");
  }

  const build = path.resolve(argv[0]);
  if (!fs.existsSync(build) || !fs.statSync(build).isDirectory()) {
    throw new Error(`build destination is not a directory: ${build}`);
  }
  return build;
}

function filesBelow(root, extension) {
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

function decodeUrlComponent(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function relativeTo(root, filename) {
  return path.relative(root, filename).split(path.sep).join("/");
}

function localReferences(markup) {
  const references = [];
  for (const match of markup.matchAll(/<[A-Za-z][\w:-]*\b[^>]*>/g)) {
    const attributes = attributesFrom(match[0]);
    for (const name of ["href", "src", "poster"]) {
      if (typeof attributes[name] === "string") {
        references.push({name, value: decodeHtml(attributes[name])});
      }
    }
  }
  return references;
}

function splitReference(reference) {
  const hashIndex = reference.indexOf("#");
  const beforeHash = hashIndex < 0 ? reference : reference.slice(0, hashIndex);
  const fragment = hashIndex < 0 ? "" : decodeUrlComponent(reference.slice(hashIndex + 1));
  const queryIndex = beforeHash.indexOf("?");
  const pathname = queryIndex < 0 ? beforeHash : beforeHash.slice(0, queryIndex);
  return {pathname: decodeUrlComponent(pathname), fragment};
}

function isExternal(reference) {
  return reference.startsWith("//") || /^[A-Za-z][A-Za-z\d+.-]*:/.test(reference);
}

function resolveTarget(build, source, pathname) {
  const candidate = pathname.startsWith("/")
    ? path.resolve(build, `.${pathname}`)
    : path.resolve(path.dirname(source), pathname || path.basename(source));

  if (candidate !== build && !candidate.startsWith(`${build}${path.sep}`)) return null;
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
    const index = path.join(candidate, "index.html");
    return fs.existsSync(index) && fs.statSync(index).isFile() ? index : candidate;
  }
  if (!path.extname(candidate)) {
    const index = path.join(candidate, "index.html");
    if (fs.existsSync(index) && fs.statSync(index).isFile()) return index;
  }
  return candidate;
}

function fragmentExists(filename, fragment, cache) {
  if (!fragment || path.extname(filename).toLowerCase() !== ".html") return true;
  let identifiers = cache.get(filename);
  if (!identifiers) {
    identifiers = new Set();
    const markup = fs.readFileSync(filename, "utf8");
    for (const match of markup.matchAll(/<[A-Za-z][\w:-]*\b[^>]*>/g)) {
      const attributes = attributesFrom(match[0]);
      if (attributes.id) identifiers.add(decodeHtml(attributes.id));
      if (attributes.name) identifiers.add(decodeHtml(attributes.name));
    }
    cache.set(filename, identifiers);
  }
  return identifiers.has(fragment);
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
  const fragmentCache = new Map();
  const pages = filesBelow(build, ".html");
  if (pages.length === 0) {
    errors.push(`no HTML documents found below ${build}`);
  }

  let checked = 0;
  for (const page of pages) {
    const where = relativeTo(build, page);
    const markup = fs.readFileSync(page, "utf8");
    for (const reference of localReferences(markup)) {
      if (!reference.value || isExternal(reference.value)) continue;
      const {pathname, fragment} = splitReference(reference.value);
      const target = resolveTarget(build, page, pathname);
      checked += 1;
      if (!target || !fs.existsSync(target) || !fs.statSync(target).isFile()) {
        errors.push(
          `${where} ${reference.name}=${JSON.stringify(reference.value)} does not resolve below the build`
        );
      } else if (!fragmentExists(target, fragment, fragmentCache)) {
        errors.push(
          `${where} ${reference.name}=${JSON.stringify(reference.value)} has no matching fragment in ${relativeTo(build, target)}`
        );
      }
    }
  }

  if (errors.length > 0) {
    for (const error of errors) console.error(`ERROR: ${error}`);
    return 1;
  }

  console.log(`internal links OK: ${checked} references across ${pages.length} HTML documents`);
  return 0;
}

process.exitCode = main();
