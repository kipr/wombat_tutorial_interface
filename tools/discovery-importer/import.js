#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const {spawnSync} = require("node:child_process");

const REPO_ROOT = path.resolve(__dirname, "../..");
const WRITER = path.join(__dirname, "writer.lua");
const DEFAULT_SOURCE = path.join(REPO_ROOT, "tbc");
const DEFAULT_OUT = path.join(REPO_ROOT, "content");

const PHASES = [
  {order: 1, name: "Phase 1 · Get Connected", through: 2},
  {order: 2, name: "Phase 2 · Make It Move", through: 6},
  {order: 3, name: "Phase 3 · Make It Grab", through: 8},
  {order: 4, name: "Phase 4 · Make It Reliable", through: 12},
  {order: 5, name: "Phase 5 · Make It Smart", through: 15},
  {order: 6, name: "Phase 6 · Clean It Up", through: 17}
];

function usage() {
  process.stderr.write(`Usage: node tools/discovery-importer/import.js [options]

Convert the 40 Discovery EV3/SPIKE HTML files into Hugo Markdown.

Options:
  --source DIR   HTML trees (default: tbc)
  --out DIR      Destination content root (default: content)
  --force        Overwrite existing Markdown
  --help         Show this help

Pandoc is invoked as:
  pandoc --from=html+raw_html --to=writer.lua
`);
}

function parseArgs(argv) {
  const options = {source: DEFAULT_SOURCE, out: DEFAULT_OUT, force: false};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") {
      usage();
      process.exit(0);
    } else if (arg === "--force") {
      options.force = true;
    } else if (arg === "--source" || arg === "--out") {
      i += 1;
      if (i >= argv.length) throw new Error(`${arg} requires a path`);
      options[arg.slice(2)] = path.resolve(argv[i]);
    } else {
      throw new Error(`unknown option: ${arg}`);
    }
  }
  return options;
}

function walkHtml(root) {
  const found = [];
  const pending = [root];
  while (pending.length > 0) {
    const dir = pending.pop();
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) pending.push(full);
      else if (entry.isFile() && entry.name.endsWith(".html")) found.push(full);
    }
  }
  return found.sort();
}

function yamlQuote(value) {
  return JSON.stringify(String(value ?? ""));
}

function yamlScalar(value) {
  if (typeof value === "boolean" || typeof value === "number") return String(value);
  return yamlQuote(value);
}

function decodeEntities(text) {
  return String(text)
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&ndash;/g, "\u2013")
    .replace(/&reg;/g, "®")
    .replace(/&trade;/g, "™")
    .replace(/&rarr;/g, "→")
    .replace(/&larr;/g, "←")
    .replace(/&times;/g, "×")
    .replace(/&divide;/g, "÷")
    .replace(/&plusmn;/g, "±")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCharCode(parseInt(n, 16)));
}

function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function innerTextKeepRefs(html) {
  let text = html.replace(
    /<span class="def-term"[^>]*data-term="([^"]+)"[^>]*>([\s\S]*?)<\/span>/g,
    (_, term, label) => `[[${term}|${stripTags(label)}]]`
  );
  text = text.replace(
    /<span class="fieldref"[^>]*data-m="(\d+)"[^>]*(?:data-tier="([^"]*)")?[^>]*>([\s\S]*?)<\/span>/g,
    (_, mission, tier, label) => `[[@${mission}:${tier || "base"}|${stripTags(label)}]]`
  );
  return decodeEntities(text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function phaseFor(number) {
  for (const phase of PHASES) {
    if (number <= phase.through) return phase;
  }
  throw new Error(`no phase for project ${number}`);
}

function mapSource(file, sourceRoot) {
  const rel = path.relative(sourceRoot, file).replaceAll("\\", "/");
  const ev3 = rel.match(/^discovery-ev3-complete\/discovery-ev3\/(.+)$/);
  const spike = rel.match(/^discovery-spike-complete\/discovery-spike\/(.+)$/);
  const rest = ev3 ? ev3[1] : spike ? spike[1] : null;
  const platform = ev3 ? "ev3" : spike ? "spike" : null;
  if (!rest || !platform) return null;
  if (rest === "coding/index.html") {
    return {kind: "hub", platform, dest: path.join("discovery", platform, "_index.md"), source: file};
  }
  const project = rest.match(/^coding\/project-(\d+)\.html$/);
  if (project) {
    const number = Number(project[1]);
    return {
      kind: "project",
      platform,
      number,
      dest: path.join("discovery", platform, `project-${String(number).padStart(2, "0")}.md`),
      source: file
    };
  }
  const build = rest.match(/^builds\/(arm|claw)\.html$/);
  if (build) {
    return {
      kind: "placeholder",
      platform,
      name: build[1],
      dest: path.join("discovery", platform, "builds", `${build[1]}.md`),
      source: file
    };
  }
  return null;
}

function extractMission(html) {
  const id = html.match(/var MISSION_ID = "([^"]+)"/);
  const title = html.match(/var MISSION_TITLE = "([^"]+)"/);
  return {
    missionId: id ? decodeEntities(id[1]) : "",
    missionTitle: title ? decodeEntities(title[1]) : ""
  };
}

function extractHero(html) {
  const eyebrow = html.match(/<p class="eyebrow">([\s\S]*?)<\/p>/);
  const heading = html.match(/<div class="hero">[\s\S]*?<h1>([\s\S]*?)<\/h1>/);
  const sub = html.match(/<p class="sub">([\s\S]*?)<\/p>/);
  const credit = html.match(/<p class="credit">([\s\S]*?)<\/p>/);
  return {
    eyebrow: eyebrow ? stripTags(eyebrow[1]) : "",
    heading: heading ? decodeEntities(heading[1].replace(/<[^>]+>/g, "")).trim() : "",
    subheading: sub ? stripTags(sub[1]) : "",
    credit: credit ? stripTags(credit[1]) : "KIPR · Botball Explorer · Discovery"
  };
}

function extractMeta(html) {
  const inner = extractInner(html, "div", "meta");
  if (!inner) return [];
  const rows = [];
  const rowRe = /<div class="row"><dt>([\s\S]*?)<\/dt><dd[^>]*>([\s\S]*?)<\/dd><\/div>/g;
  let match;
  while ((match = rowRe.exec(inner)) !== null) {
    const term = stripTags(match[1]);
    if (term === "What You Need") {
      const items = [];
      const itemRe = /<li>[\s\S]*?data-key="([^"]+)"[\s\S]*?<label[^>]*>([\s\S]*?)<\/label>/g;
      let item;
      while ((item = itemRe.exec(match[2])) !== null) {
        items.push({key: item[1], label: innerTextKeepRefs(item[2])});
      }
      rows.push({term, checklist: items});
    } else {
      rows.push({term, definition: innerTextKeepRefs(match[2])});
    }
  }
  return rows;
}

function parseIndex(html) {
  const eyebrow = html.match(/<p class="page-eyebrow">([\s\S]*?)<\/p>/);
  const title = html.match(/<h1 class="page-title">([\s\S]*?)<\/h1>/);
  const sub = html.match(/<p class="page-sub">([\s\S]*?)<\/p>/);
  const cards = {};
  const cardRe = /<a class="proj-card" href="project-(\d+)\.html">([\s\S]*?)<\/a>/g;
  let card;
  while ((card = cardRe.exec(html)) !== null) {
    const number = Number(card[1]);
    const body = card[2];
    const hubTitle = stripTags((body.match(/<span class="proj-title">([\s\S]*?)<\/span>/) || ["", ""])[1]);
    const description = stripTags((body.match(/<span class="proj-desc">([\s\S]*?)<\/span>/) || ["", ""])[1]);
    const anchor = body.match(/<span class="proj-anchor([^"]*)">([\s\S]*?)<\/span>/);
    const pace = body.match(/<span class="pace">([\s\S]*?)<\/span>/);
    cards[number] = {
      hubTitle,
      description,
      missionLabel: anchor ? stripTags(anchor[2]) : "",
      noMission: Boolean(anchor && anchor[1].includes("none")),
      pace: pace ? stripTags(pace[1]) : ""
    };
  }
  const gate = html.match(/<div class="buildgate">([\s\S]*?)<\/div>\s*<p class="phase-label">/);
  let buildGate = null;
  if (gate) {
    const title = stripTags((gate[1].match(/<p class="bg-t">([\s\S]*?)<\/p>/) || ["", ""])[1]);
    const description = stripTags((gate[1].match(/<p class="bg-d">([\s\S]*?)<\/p>/) || ["", ""])[1]);
    const links = [];
    const linkRe = /<a class="bg-btn" href="([^"]+)">([\s\S]*?)<\/a>/g;
    let link;
    while ((link = linkRe.exec(gate[1])) !== null) {
      links.push({href: link[1], label: stripTags(link[2]).replace(/→/g, "").trim()});
    }
    buildGate = {title, description, links};
  }
  const upcoming = html.match(/<div class="upcoming">([\s\S]*?)<\/div>/);
  return {
    eyebrow: eyebrow ? stripTags(eyebrow[1]) : "",
    titleHtml: title ? title[1] : "",
    subheading: sub ? stripTags(sub[1]) : "",
    cards,
    buildGate,
    body: upcoming ? stripTags(upcoming[1].replace(/<h2>[\s\S]*?<\/h2>/, "")).replace(/^Strand complete\.?/, "**Strand complete.**") : ""
  };
}

function extractInner(html, tag, className) {
  const openRe = new RegExp(
    `<${tag}\\b[^>]*class="[^"]*\\b${className}\\b[^"]*"[^>]*>`,
    "i"
  );
  const match = openRe.exec(html);
  if (!match) return null;
  const afterOpen = match.index + match[0].length;
  const openTag = new RegExp(`<${tag}\\b`, "gi");
  const closeTag = new RegExp(`</${tag}>`, "gi");
  let depth = 1;
  let i = afterOpen;
  let closeStart = -1;
  while (i < html.length && depth > 0) {
    openTag.lastIndex = i;
    closeTag.lastIndex = i;
    const nextOpen = openTag.exec(html);
    const nextClose = closeTag.exec(html);
    if (!nextClose) throw new Error(`unclosed <${tag} class="${className}">`);
    if (nextOpen && nextOpen.index < nextClose.index) {
      depth += 1;
      i = nextOpen.index + nextOpen[0].length;
    } else {
      depth -= 1;
      closeStart = nextClose.index;
      i = nextClose.index + nextClose[0].length;
    }
  }
  return html.slice(afterOpen, closeStart);
}

function stripElement(html, tag, className) {
  const openRe = new RegExp(
    `<${tag}\\b[^>]*class="[^"]*\\b${className}\\b[^"]*"[^>]*>`,
    "i"
  );
  let result = html;
  for (;;) {
    const match = openRe.exec(result);
    if (!match) break;
    const start = match.index;
    const afterOpen = start + match[0].length;
    const openTag = new RegExp(`<${tag}\\b`, "gi");
    const closeTag = new RegExp(`</${tag}>`, "gi");
    let depth = 1;
    let i = afterOpen;
    while (i < result.length && depth > 0) {
      openTag.lastIndex = i;
      closeTag.lastIndex = i;
      const nextOpen = openTag.exec(result);
      const nextClose = closeTag.exec(result);
      if (!nextClose) {
        throw new Error(`unclosed <${tag} class="${className}">`);
      }
      if (nextOpen && nextOpen.index < nextClose.index) {
        depth += 1;
        i = nextOpen.index + nextOpen[0].length;
      } else {
        depth -= 1;
        i = nextClose.index + nextClose[0].length;
      }
    }
    result = result.slice(0, start) + result.slice(i);
    openRe.lastIndex = 0;
  }
  return result;
}

function preprocess(html) {
  let body = html;
  body = body.replace(/<p class="muted">([\s\S]*?)<\/p>/g, '<div class="muted"><p>$1</p></div>');
  body = body.replace(/<p class="q">([\s\S]*?)<\/p>/g, '<div class="q"><p>$1</p></div>');
  body = body.replace(/<span class="pill mx">([\s\S]*?)<\/span>/g, (_, inner) => {
    const cells = [...inner.matchAll(/<s([^>]*)>/g)].map((m) => /class="on"/.test(m[1]) ? "1" : "0");
    if (cells.length !== 25) {
      throw new Error(`LED matrix has ${cells.length} cells, expected 25`);
    }
    return `<span class="pill mx" data-pattern="${cells.join("")}"></span>`;
  });
  const main = body.match(/<main class="sheet">([\s\S]*?)<\/main>/);
  if (!main) throw new Error("worksheet is missing <main class=\"sheet\">");
  let fragment = main[1];
  fragment = stripElement(fragment, "div", "hero");
  fragment = fragment.replace(/<p class="print-pin">[\s\S]*?<\/p>/, "");
  fragment = stripElement(fragment, "div", "meta");
  fragment = stripElement(fragment, "div", "pin-reminder");
  fragment = stripElement(fragment, "div", "bottom-submit");
  fragment = fragment.replace(/<nav class="botnav[\s\S]*?<\/nav>/, "");
  fragment = fragment.replace(/<p class="credit">[\s\S]*?<\/p>/, "");
  return `<!DOCTYPE html><html><body>${fragment}</body></html>`;
}

function runPandoc(html, sourceFile, extraMeta) {
  const args = [
    "--from=html+raw_html",
    `--to=${WRITER}`,
    `--metadata=source_file=${sourceFile}`
  ];
  for (const [key, value] of Object.entries(extraMeta || {})) {
    args.push(`--metadata=${key}=${value}`);
  }
  const result = spawnSync(
    "pandoc",
    args,
    {input: html, encoding: "utf8", maxBuffer: 20 * 1024 * 1024}
  );
  if (result.status !== 0) {
    const err = (result.stderr || result.stdout || "pandoc failed").trim();
    throw new Error(err);
  }
  return result.stdout;
}

function emitFrontMatter(fields) {
  const lines = ["---"];
  for (const [key, value] of fields) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      if (value.length > 0 && typeof value[0] === "object") {
        lines.push(`${key}:`);
        for (const item of value) {
          if (item.checklist) {
            lines.push(`  - term: ${yamlQuote(item.term)}`);
            lines.push("    checklist:");
            for (const check of item.checklist) {
              lines.push(`      - key: ${check.key}`);
              lines.push(`        label: ${yamlQuote(check.label)}`);
            }
          } else {
            const keys = Object.keys(item);
            lines.push(`  - ${keys[0]}: ${yamlQuote(item[keys[0]])}`);
            for (const nested of keys.slice(1)) {
              if (typeof item[nested] === "object") {
                lines.push(`    ${nested}:`);
                for (const [nk, nv] of Object.entries(item[nested])) {
                  lines.push(`      ${nk}: ${yamlQuote(nv)}`);
                }
              } else {
                lines.push(`    ${nested}: ${yamlQuote(item[nested])}`);
              }
            }
          }
        }
      } else {
        lines.push(`${key}: [${value.map(yamlQuote).join(", ")}]`);
      }
    } else if (typeof value === "object") {
      lines.push(`${key}:`);
      for (const [nested, nestedValue] of Object.entries(value)) {
        if (Array.isArray(nestedValue)) {
          lines.push(`  ${nested}:`);
          for (const item of nestedValue) {
            if (typeof item === "object") {
              const keys = Object.keys(item);
              lines.push(`    - ${keys[0]}: ${yamlQuote(item[keys[0]])}`);
              for (const extra of keys.slice(1)) {
                lines.push(`      ${extra}: ${yamlQuote(item[extra])}`);
              }
            } else {
              lines.push(`    - ${yamlQuote(item)}`);
            }
          }
        } else if (typeof nestedValue === "boolean") {
          lines.push(`  ${nested}: ${nestedValue}`);
        } else {
          lines.push(`  ${nested}: ${yamlScalar(nestedValue)}`);
        }
      }
    } else if (typeof value === "boolean") {
      lines.push(`${key}: ${value}`);
    } else if (typeof value === "number") {
      lines.push(`${key}: ${value}`);
    } else {
      lines.push(`${key}: ${yamlQuote(value)}`);
    }
  }
  lines.push("---", "");
  return lines.join("\n");
}

function convertProject(job, index, options) {
  const html = fs.readFileSync(job.source, "utf8");
  const {missionId, missionTitle} = extractMission(html);
  const expectedId = `discovery_${job.platform}_coding_${String(job.number).padStart(2, "0")}`;
  if (missionId !== expectedId) {
    throw new Error(`${job.source}: persistence ID ${missionId || "(missing)"} does not match ${expectedId}`);
  }
  const hero = extractHero(html);
  const metaRows = extractMeta(html);
  const card = index.cards[job.number];
  if (!card) throw new Error(`${job.source}: missing index card`);
  const phase = phaseFor(job.number);
  const platformLabel = job.platform === "ev3" ? "EV3" : "SPIKE";
  const fields = [
    ["title", `Coding Project ${job.number} — ${hero.heading}`],
    ["short_title", `Coding Project ${job.number}`],
    ["linkTitle", hero.heading],
    ["description", card.description],
    ["weight", job.number],
    ["nav", "discovery"],
    ["mission_id", missionId],
    ["mission_title", missionTitle || `Coding Project ${job.number} — ${hero.heading}`],
    ["styles", ["site-base", "worksheet", "syntax", "discovery", "print"]],
    ["project_number", job.number],
    ["strand", "coding"],
    ["platform", job.platform],
    ["phase", phase.name],
    ["phase_order", phase.order],
    ["time", "One class period"],
    ["eyebrow", `Discovery · ${platformLabel} Coding Project ${job.number}`],
    ["heading", hero.heading],
    ["subheading", hero.subheading],
    ["credit", hero.credit],
    ["hub_title", card.hubTitle || hero.heading],
    ["mission_label", card.missionLabel],
    card.noMission ? ["no_mission", true] : null,
    ["sidebar", {title: "Activity Sections", start_level: 2, end_level: 2, numbered: false}]
  ].filter(Boolean);

  if (card.pace) {
    fields.push(["pace", {kind: "required", label: card.pace}]);
  }

  if (job.number === 6 && index.buildGate) {
    const links = index.buildGate.links.map((link) => {
      const name = /arm/i.test(link.href) ? "arm" : "claw";
      return {
        page: `/discovery/${job.platform}/builds/${name}`,
        "label": link.label.replace(/→/g, "").replace(/←/g, "").trim()
      };
    });
    fields.push(["build_gate", {
      title: index.buildGate.title,
      description: index.buildGate.description,
      links
    }]);
  }

  const hasProject = metaRows.some((row) => row.term === "Project");
  const meta = [];
  if (!hasProject) {
    meta.push({term: "Project", definition: `Coding Project ${job.number}`});
    meta.push({term: "Strand", definition: "Coding"});
    meta.push({term: "Phase", definition: phase.name.replace(/^Phase \d+ · /, "")});
    meta.push({term: "Time", definition: "One class period"});
  }
  meta.push(...metaRows);
  fields.push(["meta", meta]);

  const fragment = preprocess(html);
  const body = runPandoc(fragment, job.source, {platform: job.platform});
  return emitFrontMatter(fields) + body.trim() + "\n";
}

function convertHub(job, index) {
  const platformLabel = job.platform === "ev3" ? "EV3" : "SPIKE";
  const headingText = stripTags((index.titleHtml || "").replace(/<span>[\s\S]*?<\/span>/, "")).replace(/—.*$/, "").trim();
  const fields = [
    ["title", `Coding Projects — Discovery ${platformLabel} Track · KIPR Botball 2026-2027`],
    ["index_label", `All ${platformLabel} Coding Projects`],
    ["nav", "discovery"],
    ["hub", true],
    ["weight", job.platform === "ev3" ? 3 : 4],
    ["strand", "coding"],
    ["platform", job.platform],
    ["kicker", platformLabel],
    ["styles", ["site-base", "hub", "discovery"]],
    ["eyebrow", index.eyebrow],
    ["heading", platformLabel],
    ["heading_accent", "Coding"],
    ["description", index.subheading],
    ["subheading", index.subheading]
  ];
  const body = index.body
    ? `**Strand complete.** ${index.body.replace(/^\*\*Strand complete\.\*\*\s*/, "")}\n`
    : `**Strand complete.** All 17 ${platformLabel}-track projects are here.\n`;
  return emitFrontMatter(fields) + body;
}

function convertPlaceholder(job) {
  const html = fs.readFileSync(job.source, "utf8");
  const heading = stripTags((html.match(/<h1>([\s\S]*?)<\/h1>/) || ["", job.name])[1]);
  const eyebrow = stripTags((html.match(/<p class="eyebrow">([\s\S]*?)<\/p>/) || ["", ""])[1]);
  const card = html.match(/<div class="card">([\s\S]*?)<\/div>/);
  const paras = [];
  if (card) {
    const re = /<p([^>]*)>([\s\S]*?)<\/p>/g;
    let match;
    while ((match = re.exec(card[1])) !== null) {
      const text = innerTextKeepRefs(match[2]);
      if (match[1].includes("big")) paras.push(`**${text}**`);
      else paras.push(text);
    }
  }
  const platformLabel = job.platform === "ev3" ? "EV3" : "SPIKE";
  const fields = [
    ["title", heading],
    ["nav", "discovery"],
    ["layout", "build-placeholder"],
    ["styles", ["site-base", "hub", "discovery"]],
    ["eyebrow", eyebrow],
    ["heading", heading],
    ["platform", job.platform],
    ["back", {page: `/discovery/${job.platform}`, label: `← Back to ${platformLabel} Coding Projects`}]
  ];
  return emitFrontMatter(fields) + paras.join("\n\n") + "\n";
}

function annotateWombat(contentRoot, force) {
  const codingDir = path.join(contentRoot, "discovery", "coding");
  if (!fs.existsSync(codingDir)) return [];
  const changed = [];
  for (const name of fs.readdirSync(codingDir)) {
    if (!name.endsWith(".md")) continue;
    const file = path.join(codingDir, name);
    let text = fs.readFileSync(file, "utf8");
    if (/^platform:/m.test(text)) continue;
    if (!/^strand: coding$/m.test(text)) continue;
    const next = text.replace(/^(strand: coding)$/m, "$1\nplatform: wombat");
    if (next !== text) {
      if (!force && name !== "_index.md") {
        // Wombat worksheets already exist; platform is additive metadata.
      }
      fs.writeFileSync(file, next);
      changed.push(file);
    }
  }
  return changed;
}

function convertAll(options) {
  const files = walkHtml(options.source);
  const jobs = files.map((file) => mapSource(file, options.source)).filter(Boolean);
  if (jobs.length !== 40) {
    throw new Error(`expected 40 HTML files, found ${jobs.length}`);
  }
  const indexes = {};
  for (const job of jobs.filter((item) => item.kind === "hub")) {
    indexes[job.platform] = parseIndex(fs.readFileSync(job.source, "utf8"));
  }
  const written = [];
  for (const job of jobs) {
    const dest = path.join(options.out, job.dest);
    if (fs.existsSync(dest) && !options.force) {
      throw new Error(`refusing to overwrite ${dest} (pass --force)`);
    }
    let markdown;
    if (job.kind === "hub") markdown = convertHub(job, indexes[job.platform]);
    else if (job.kind === "placeholder") markdown = convertPlaceholder(job);
    else markdown = convertProject(job, indexes[job.platform], options);
    fs.mkdirSync(path.dirname(dest), {recursive: true});
    fs.writeFileSync(dest, markdown);
    written.push(dest);
  }
  for (const platform of ["ev3", "spike"]) {
    const dest = path.join(options.out, "discovery", platform, "builds", "_index.md");
    if (!fs.existsSync(dest) || options.force) {
      fs.mkdirSync(path.dirname(dest), {recursive: true});
      fs.writeFileSync(dest, `---
title: "Build guides"
build:
  render: never
  list: never
---
`);
      written.push(dest);
    }
  }
  const wombat = annotateWombat(options.out, options.force);
  return {written, wombat};
}

function main() {
  try {
    const options = parseArgs(process.argv.slice(2));
    const result = convertAll(options);
    process.stdout.write(`Wrote ${result.written.length} Markdown files under ${options.out}\n`);
    if (result.wombat.length) {
      process.stdout.write(`Annotated platform: wombat on ${result.wombat.length} existing coding files\n`);
    }
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exit(1);
  }
}

module.exports = {
  convertAll,
  mapSource,
  preprocess,
  stripElement,
  extractInner,
  parseIndex,
  extractMission,
  walkHtml,
  parseArgs
};

if (require.main === module) {
  main();
}
