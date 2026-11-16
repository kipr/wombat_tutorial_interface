#!/usr/bin/env node
"use strict";

// Standalone publication contract; detailed worksheet compatibility remains in
// test_mechanical_migration.js. Shared static downloads are deliberately allowed.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const buildDir = process.argv[2];
if (!buildDir) {
  process.stderr.write("Usage: node tests/test_mechanical_target.js <build_dir>\n");
  process.exit(1);
}
const build = path.resolve(buildDir);
assert.ok(fs.statSync(build).isDirectory(), "build_dir is a directory");
const inventory = require("../data/mechanical-legacy-inventory.json");
const worksheets = inventory.pages.map(page => `mechanical/${page.file.replace(/\.md$/, "")}/index.html`);
assert.equal(worksheets.length, 28, "canonical inventory contains 28 worksheets");
assert.equal(new Set(worksheets).size, 28, "canonical worksheet paths are unique");

// Read just the simple canonical navigation record, not a second target catalog.
const navSource = fs.readFileSync(path.join(__dirname, "../data/nav.yaml"), "utf8");
const mechanicalNav = navSource.split(/(?=^-\s+id:)/m)
  .find(entry => /^-\s+id:\s*mechanical\s*$/m.test(entry));
assert.ok(mechanicalNav, "canonical Mechanical navigation entry exists");
function navValue(key) {
  const match = mechanicalNav.match(new RegExp(`^\\s+${key}:\\s*(.+?)\\s*$`, "m"));
  assert.ok(match, `canonical Mechanical navigation defines ${key}`);
  return match[1].replace(/^(["'])(.*)\1$/, "$2");
}
const navName = navValue("name");
const navTarget = `${navValue("page").replace(/^\/+|\/+$/g, "")}/index.html`;
assert.equal(navTarget, "mechanical/index.html", "Mechanical navigation retains its section path");

function decode(value) {
  const entities = {amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " "};
  return value.replace(/&(#x[\da-f]+|#\d+|\w+);/gi, (match, entity) => {
    if (/^#x/i.test(entity)) return String.fromCodePoint(parseInt(entity.slice(2), 16));
    if (entity.startsWith("#")) return String.fromCodePoint(Number(entity.slice(1)));
    return entities[entity] ?? match;
  });
}
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g)]
    .map(([, key, double, single, bare]) => [key.toLowerCase(), decode(double ?? single ?? bare)]));
}
function plain(html) {
  return decode(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}
function elements(html, tag) {
  return [...html.matchAll(new RegExp(`<${tag}\\b([^>]*)>([\\s\\S]*?)<\\/${tag}\\s*>`, "gi"))]
    .map(([html, attrs, body]) => ({html, attrs: attributes(attrs), body}));
}
function links(html) {
  return elements(html, "a").filter(link => link.attrs.href !== undefined);
}
function readPage(file) {
  const full = path.join(build, file);
  assert.ok(fs.existsSync(full), `${file}: published page`);
  return fs.readFileSync(full, "utf8").replace(/<!--[\s\S]*?-->/g, "");
}
function indexPages(dir) {
  if (!fs.existsSync(path.join(build, dir))) return [];
  return fs.readdirSync(path.join(build, dir), {withFileTypes: true}).flatMap(entry => {
    const file = path.posix.join(dir, entry.name);
    return entry.isDirectory() ? indexPages(file) : entry.name === "index.html" ? [file] : [];
  });
}

// Resolve the same literal URL at two deployment depths. A root-absolute URL or
// excessive ../ traversal must not silently escape an arbitrary hosting mount.
function localTarget(href, file) {
  assert.ok(href && href === href.trim(), `${file}: nonempty relative URL: ${href}`);
  assert.doesNotMatch(href, /^(?:\/|\\|[a-z][\w+.-]*:)/i, `${file}: relative URL: ${href}`);
  assert.doesNotMatch(href, /\\/, `${file}: URL uses forward slashes: ${href}`);
  const targets = ["/", "/arbitrary/member/mount/"].map(mount => {
    const url = new URL(href, `https://mechanical.example${mount}${file}`);
    assert.equal(url.origin, "https://mechanical.example", `${file}: local URL origin`);
    assert.ok(url.pathname.startsWith(mount), `${file}: URL stays inside mount: ${href}`);
    const relative = decodeURIComponent(url.pathname.slice(mount.length));
    return relative.endsWith("/") || !relative ? `${relative}index.html` : relative;
  });
  assert.equal(targets[0], targets[1], `${file}: URL resolves consistently across mounts: ${href}`);
  return targets[0];
}
function publishedTarget(href, file) {
  const target = localTarget(href, file);
  assert.ok(fs.existsSync(path.join(build, target)), `${file}: published target ${target}`);
  return target;
}
function shellLinks(html, file) {
  for (const link of links(html)) {
    const href = link.attrs.href;
    assert.doesNotMatch(`${plain(link.body)} ${href}`, /dashboard|simulator|botballacademy/i,
      `${file}: no dashboard or simulator shell navigation`);
    if (/^https?:\/\//i.test(href)) {
      const url = new URL(href);
      assert.match(url.hostname, /^(?:www\.)?kipr\.org$/i, `${file}: only KIPR organization link leaves target`);
      assert.equal(url.pathname, "/", `${file}: organization link goes to kipr.org, not a BEX section`);
    } else {
      const target = publishedTarget(href, file);
      assert.ok(target === "index.html" || target.startsWith("mechanical/"),
        `${file}: shell link stays within root/mechanical: ${href}`);
    }
  }
}
const brand = /\bKIPR\s+Mechanical\s+Design\b/i;
const bexBrand = /Botball\s+Explorer|\bBEX\b|\b20\d{2}\s+Missions\b/i;
const hubs = ["index.html", "mechanical/index.html"];
const curriculum = [...new Set([...hubs, ...worksheets, ...indexPages("mechanical")])];

for (const section of ["missions", "botball_explorer_2027", "labs", "python_labs", "introductory", "resources", "glossary", "standards-correlations"]) {
  assert.deepEqual(indexPages(section), [], `${section}: excluded Hugo pages are not published`);
}

for (const file of curriculum) {
  const html = readPage(file);
  assert.doesNotMatch(html, /<base\b[^>]*\bhref\s*=/i, `${file}: no base element overrides relative URLs`);
  const head = elements(html, "head")[0];
  assert.ok(head, `${file}: document head`);
  const metadata = [...head.body.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => attributes(tag));
  assert.ok(metadata.some(meta => meta.name?.toLowerCase() === "robots"
    && meta.content?.toLowerCase().split(/[\s,]+/).includes("noindex")), `${file}: robots noindex metadata`);

  const navs = elements(html, "nav");
  const mainNav = navs.filter(nav => /^main$/i.test(nav.attrs["aria-label"] ?? ""));
  assert.equal(mainNav.length, 1, `${file}: one Main navigation landmark`);
  const mainLinks = links(mainNav[0].body);
  assert.equal(mainLinks.length, 1, `${file}: only Mechanical in Main navigation`);
  assert.equal(plain(mainLinks[0].body), navName, `${file}: canonical Mechanical navigation label`);
  assert.equal(publishedTarget(mainLinks[0].attrs.href, file), navTarget, `${file}: canonical Mechanical navigation destination`);

  const breadcrumbs = navs.filter(nav => /^breadcrumbs?$/i.test(nav.attrs["aria-label"] ?? ""));
  assert.equal(breadcrumbs.length, 1, `${file}: breadcrumb navigation landmark`);
  assert.match(plain(breadcrumbs[0].body), brand, `${file}: Mechanical breadcrumb branding`);
  for (const nav of [...mainNav, ...breadcrumbs]) shellLinks(nav.body, file);
  // Restrict branding checks to the shell: source credits and lesson prose may
  // legitimately mention Botball Explorer.
  for (const shell of [...elements(html, "header"), ...breadcrumbs, ...elements(html, "footer")]) {
    assert.doesNotMatch(plain(shell.body), bexBrand, `${file}: no BEX branding in shell`);
  }

  const styles = [...html.matchAll(/<link\b[^>]*>/gi)].map(([tag]) => attributes(tag))
    .filter(attrs => attrs.rel?.toLowerCase().split(/\s+/).includes("stylesheet"))
    .filter(attrs => !/^(?:https?:)?\/\//i.test(attrs.href ?? ""));
  assert.ok(styles.length, `${file}: local stylesheet references retained`);
  for (const style of styles) publishedTarget(style.href, file);
  const scripts = elements(html, "script")
    .filter(script => script.attrs.src && !/^(?:https?:)?\/\//i.test(script.attrs.src));
  assert.ok(scripts.length, `${file}: local script references retained`);
  const scriptPaths = scripts.map(script => publishedTarget(script.attrs.src, file));

  if (hubs.includes(file)) {
    const footers = elements(html, "footer");
    assert.ok(footers.length, `${file}: hub footer`);
    assert.match(plain(footers.map(footer => footer.body).join(" ")), brand, `${file}: Mechanical footer branding`);
    const main = elements(html, "main");
    assert.equal(main.length, 1, `${file}: catalog main landmark`);
    const catalog = [];
    for (const link of links(main[0].body)) {
      assert.doesNotMatch(`${plain(link.body)} ${link.attrs.href}`, /python/i, `${file}: no Python toggle link`);
      const isCard = (link.attrs.class ?? "").split(/\s+/).some(name => /^(?:[\w-]+-)?card$/.test(name));
      if (/^(?:[a-z][\w+.-]*:|\/\/)/i.test(link.attrs.href)) {
        assert.ok(!isCard, `${file}: catalog cards do not leave the worksheet catalog`);
        continue;
      }
      const target = localTarget(link.attrs.href, file);
      if (worksheets.includes(target) || isCard) {
        assert.ok(worksheets.includes(target), `${file}: catalog card targets a canonical worksheet: ${target}`);
        assert.ok(plain(link.body), `${file}: worksheet catalog link has a label`);
        catalog.push(target);
      }
    }
    assert.deepEqual(catalog.sort(), [...worksheets].sort(), `${file}: same 28 canonical worksheet catalog links, each once`);
  } else {
    const page = inventory.pages.find(page => file === `mechanical/${page.file.replace(/\.md$/, "")}/index.html`);
    if (!page) continue;
    const body = html.match(/<body\b[^>]*>/i);
    assert.ok(body, `${file}: document body`);
    assert.equal(attributes(body[0])["data-mission-id"], page.mission_id, `${file}: unchanged persistence identity`);
    assert.ok(scriptPaths.includes("js/lab.js"), `${file}: worksheet persistence and glossary activation script`);
    if (!page.terms.length) continue;
    const terms = elements(html, "button").filter(button => (button.attrs.class ?? "").split(/\s+/).includes("def-term"));
    assert.ok(terms.length, `${file}: inline glossary activation buttons`);
    const glossaryScript = elements(html, "script").find(script => /window\.KIPR_GLOSSARY\s*=/.test(script.body));
    assert.ok(glossaryScript, `${file}: inline glossary data retained without a glossary page`);
    const data = glossaryScript.body.match(/^\s*window\.KIPR_GLOSSARY\s*=\s*\{[\s\S]*\}\s*;?\s*$/);
    assert.ok(data, `${file}: isolated glossary object assignment`);
    // Hugo's JS minifier may turn JSON into an equivalent JavaScript literal.
    const sandbox = {window: {}};
    vm.runInNewContext(data[0], sandbox, {timeout: 1000, filename: `${file}:glossary`});
    const definitions = sandbox.window.KIPR_GLOSSARY;
    assert.ok(definitions && typeof definitions === "object" && !Array.isArray(definitions),
      `${file}: glossary data evaluates to an object`);
    for (const term of terms) {
      const entry = definitions[term.attrs["data-term"]];
      assert.ok(entry?.title && entry?.body, `${file}: glossary button has a populated definition: ${term.attrs["data-term"]}`);
    }
    const tags = [...html.matchAll(/<[a-z][\w:-]*\b[^>]*>/gi)].map(([tag]) => attributes(tag));
    const dialog = tags.find(tag => tag.id === "defOverlay");
    assert.ok(dialog, `${file}: glossary dialog retained`);
    assert.equal(dialog.role, "dialog", `${file}: glossary dialog semantics`);
    assert.equal(dialog["aria-modal"], "true", `${file}: modal glossary semantics`);
    for (const id of [dialog["aria-labelledby"], "defTerm", "defBody", "defClose"]) {
      assert.ok(id && tags.some(tag => tag.id === id), `${file}: glossary dialog control ${id}`);
    }
  }
}

console.log(`mechanical target OK: 2 catalogs, ${worksheets.length} worksheets, ${curriculum.length} curriculum pages checked`);
