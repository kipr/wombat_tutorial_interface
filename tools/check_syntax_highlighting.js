#!/usr/bin/env node
"use strict";

/** Verify that built Hugo code blocks are highlighted without changing code. */

const fs = require("node:fs");
const path = require("node:path");

function usage() {
  console.error(
    "Usage: node tools/check_syntax_highlighting.js <build> [--source <content-dir>]"
  );
}

function parseArguments(argv) {
  let build = null;
  let source = "content";

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--source") {
      index += 1;
      if (index >= argv.length) {
        throw new Error("--source requires a path");
      }
      source = argv[index];
    } else if (argument === "--help" || argument === "-h") {
      usage();
      process.exit(0);
    } else if (argument.startsWith("-")) {
      throw new Error(`unknown option: ${argument}`);
    } else if (build === null) {
      build = argument;
    } else {
      throw new Error(`unexpected argument: ${argument}`);
    }
  }

  if (build === null) {
    throw new Error("a Hugo build destination is required");
  }
  return {build: path.resolve(build), source: path.resolve(source)};
}

function filesBelow(root, extension) {
  if (!fs.existsSync(root)) {
    return [];
  }

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
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: "\u00a0",
    quot: '"'
  };
  return text.replace(/&(#x[\da-f]+|#\d+|[a-z][a-z\d]+);/gi, (entity, value) => {
    if (value[0] === "#") {
      const hexadecimal = value[1].toLowerCase() === "x";
      const number = Number.parseInt(value.slice(hexadecimal ? 2 : 1), hexadecimal ? 16 : 10);
      return Number.isNaN(number) ? entity : String.fromCodePoint(number);
    }
    return Object.hasOwn(named, value.toLowerCase()) ? named[value.toLowerCase()] : entity;
  });
}

function parseBlocks(markup) {
  const blocks = [];
  let block = null;
  let wrapperDepth = 0;
  let codeDepth = 0;
  const tokens = markup.match(/<[^>]+>|[^<]+/g) || [];

  for (const token of tokens) {
    if (!token.startsWith("<")) {
      if (block !== null && codeDepth > 0) {
        block.text.push(decodeHtml(token));
      }
      continue;
    }

    const endTag = token.match(/^<\s*\/\s*([A-Za-z][\w:-]*)/);
    if (endTag) {
      if (block === null) {
        continue;
      }
      if (endTag[1].toLowerCase() === "code" && codeDepth > 0) {
        codeDepth -= 1;
      }
      wrapperDepth -= 1;
      if (wrapperDepth === 0) {
        block.source = block.text.join("").replace(/\n+$/, "");
        delete block.text;
        blocks.push(block);
        block = null;
      }
      continue;
    }

    const startTag = token.match(/^<\s*([A-Za-z][\w:-]*)/);
    if (!startTag || token.startsWith("<!")) {
      continue;
    }
    const tagName = startTag[1].toLowerCase();
    const attributes = attributesFrom(token);
    const classes = new Set((attributes.class || "").split(/\s+/).filter(Boolean));

    if (block === null && tagName === "div" && classes.has("code")) {
      block = {
        language: "",
        text: [],
        tokenClasses: new Set(),
        emphasisCount: 0,
        hasError: false
      };
      wrapperDepth = 1;
      continue;
    }
    if (block === null) {
      continue;
    }

    wrapperDepth += 1;
    for (const className of classes) {
      block.tokenClasses.add(className);
    }
    if (classes.has("code-emphasis")) {
      block.emphasisCount += 1;
    }
    if (classes.has("err")) {
      block.hasError = true;
    }
    if (tagName === "code") {
      codeDepth += 1;
      block.language = attributes["data-lang"] ||
        [...classes].find((className) => className.startsWith("language-"))?.slice(9) || "";
    }
  }

  return blocks;
}

function relativeTo(root, filename) {
  return path.relative(root, filename).split(path.sep).join("/");
}

function main() {
  let options;
  try {
    options = parseArguments(process.argv.slice(2));
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    usage();
    return 2;
  }

  const errors = [];
  const pages = filesBelow(options.build, ".html");
  if (pages.length === 0) {
    errors.push(`no HTML pages found below ${options.build}`);
  }

  const blocksByPage = new Map(
    pages.map((page) => [page, parseBlocks(fs.readFileSync(page, "utf8"))])
  );
  const allBlocks = [...blocksByPage.values()].flat();
  if (allBlocks.length === 0) {
    errors.push("build contains no .code wrappers");
  }

  for (const [page, blocks] of blocksByPage) {
    blocks.forEach((block, index) => {
      const where = `${relativeTo(options.build, page)} code block ${index + 1}`;
      if (!block.language) {
        errors.push(`${where} has no language metadata`);
      }
      if (block.hasError) {
        errors.push(`${where} contains a Chroma lexer error token`);
      }
      if (block.source.includes("WOMBATCODEHIGHLIGHT")) {
        errors.push(`${where} leaked an internal emphasis placeholder`);
      }
      if (block.source.includes("@@")) {
        errors.push(`${where} leaked an authoring emphasis marker`);
      }
    });
  }

  let sourceMarkers = 0;
  for (const source of filesBelow(options.source, ".md")) {
    sourceMarkers += [...fs.readFileSync(source, "utf8").matchAll(/@@([^\n]+?)@@/g)].length;
  }
  const outputEmphasis = allBlocks.reduce((total, block) => total + block.emphasisCount, 0);
  if (outputEmphasis !== sourceMarkers) {
    errors.push(
      `teaching-emphasis count differs: source ${sourceMarkers}, output ${outputEmphasis}`
    );
  }

  const fixture = path.join(options.build, "labs", "syntax-highlighting-fixture", "index.html");
  if (!fs.existsSync(fixture)) {
    errors.push(`missing ${fixture}; build Hugo with --buildDrafts`);
  } else {
    const fixtureBlocks = parseBlocks(fs.readFileSync(fixture, "utf8"));
    const expected = [
      [
        "c",
        "#include <kipr/wombat.h>\n" +
          "int main()\n" +
          "{\n" +
          "\tint speed = 750;  // highlighted value\n" +
          "\treturn 0;\n" +
          "}",
        new Set(["cp", "kt", "nf", "mi", "c1"])
      ],
      [
        "python",
        "#!/usr/bin/python3\n" +
          "import _kipr as k\n\n" +
          "@staticmethod\n" +
          "def report(score: int) -> str:\n" +
          '    message = f"Score: {score}"\n' +
          "    return message  # highlighted name",
        new Set(["ch", "kn", "nf", "s2", "c1"])
      ],
      [
        "python",
        "def drive(speed):\n" +
          "    k.motor(0, speed)",
        new Set(["k", "nf", "mi"])
      ]
    ];

    if (fixtureBlocks.length !== expected.length) {
      errors.push(`fixture has ${fixtureBlocks.length} code blocks, expected ${expected.length}`);
    }
    fixtureBlocks.slice(0, expected.length).forEach((block, index) => {
      const [language, source, tokenClasses] = expected[index];
      if (block.language !== language) {
        errors.push(
          `fixture block ${index + 1} language is ${JSON.stringify(block.language)}, ` +
            `expected ${JSON.stringify(language)}`
        );
      }
      if (block.source !== source) {
        errors.push(`fixture block ${index + 1} copied text differs from its source`);
      }
      const missing = [...tokenClasses].filter((name) => !block.tokenClasses.has(name)).sort();
      if (missing.length > 0) {
        errors.push(
          `fixture block ${index + 1} is missing Chroma token classes ${JSON.stringify(missing)}`
        );
      }
    });
    const fixtureEmphasis = fixtureBlocks.reduce(
      (total, block) => total + block.emphasisCount,
      0
    );
    if (fixtureEmphasis !== 3) {
      errors.push("fixture should contain exactly three token-emphasis spans");
    }

    if (!fs.readFileSync(fixture, "utf8").includes("css/syntax.css")) {
      errors.push("fixture page does not link the syntax stylesheet");
    }
  }

  if (errors.length > 0) {
    for (const error of errors) {
      console.error(`ERROR: ${error}`);
    }
    return 1;
  }

  const languages = [...new Set(allBlocks.map((block) => block.language))].sort();
  console.log(
    `syntax highlighting OK: ${allBlocks.length} blocks, ` +
      `${outputEmphasis} emphasized tokens, languages ${languages.join(", ")}`
  );
  return 0;
}

process.exitCode = main();
