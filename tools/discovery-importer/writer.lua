-- New-style Pandoc 3.6.4 writer: Writer(doc, opts)
-- Converts Discovery EV3/SPIKE HTML (html+raw_html) into Hugo Markdown.

local stringify = pandoc.utils.stringify
local SOURCE = "input"
local PLATFORM = ""

local CATEGORY = {
  ev = "events",
  mv = "movement",
  ct = "control",
  lt = "display",
  mo = "motors",
  vr = "variables",
  sn = "sensors",
  my = "myblocks",
}

local KNOWN_DIV = {
  section = true, muted = true, q = true, callout = true, warn = true,
  navy = true, gold = true, danger = true, anat = true, arow = true, acode = true,
  adesc = true, ["wb-prog"] = true, ["wb-row"] = true, wb = true,
  ["wb-cwrap"] = true, ["wb-cbody"] = true, mission = true,
  ["mission-head"] = true, ["mission-body"] = true, mpart = true,
  later = true, scorepair = true, col = true, yes = true, no = true,
  chead = true, hat = true, ev = true, mv = true, ct = true, lt = true,
  mo = true, vr = true, sn = true, my = true, ["cb-top"] = true,
  ["cb-end"] = true, ["cb-branch"] = true, finale = true, turns = true,
  turn = true, thead = true, tbody = true, tcode = true, ["no-print"] = true,
}

local KNOWN_SPAN = {
  ["def-term"] = true, fieldref = true, pnum = true, stitle = true,
  pill = true, dd = true, var = true, steer = true, dial = true,
  mx = true, hex = true, sn2 = true, ["wb-note"] = true, mtitle = true,
  mpts = true, mlabel = true, spts = true, op = true, muted = true,
  ctitle = true, jtag = true, live = true, final = true, ctr = true,
  thing = true, gloss = true, on = true, small = true,
}

local seen_keys = {}

local function fail(msg)
  error(string.format("%s: %s", SOURCE, msg), 0)
end

local function classes_of(el)
  if not el or not el.classes then return {} end
  return el.classes
end

local function has_class(el, name)
  for _, c in ipairs(classes_of(el)) do
    if c == name then return true end
  end
  return false
end

local function attr(el, name)
  if not el or not el.attributes then return nil end
  return el.attributes[name]
end

local function is_raw_block(el)
  return el and el.t == "RawBlock" and el.format == "html"
end

local function raw_text(el)
  return (el and el.text) or ""
end

local function yaml_quote(s)
  s = tostring(s or "")
  s = s:gsub("\\", "\\\\"):gsub('"', '\\"')
  return '"' .. s .. '"'
end

local function decode_entities(s)
  s = s:gsub("&nbsp;", " ")
  s = s:gsub("&amp;", "&")
  s = s:gsub("&lt;", "<")
  s = s:gsub("&gt;", ">")
  s = s:gsub("&quot;", '"')
  s = s:gsub("&#(%d+);", function(n) return utf8.char(tonumber(n)) end)
  s = s:gsub("&#x(%x+);", function(n) return utf8.char(tonumber(n, 16)) end)
  return s
end

local function ascii_md(s)
  s = s:gsub("\u{2014}", "---"):gsub("\u{2013}", "--")
  s = s:gsub("\u{2018}", "'"):gsub("\u{2019}", "'")
  s = s:gsub("\u{201C}", '"'):gsub("\u{201D}", '"')
  s = s:gsub("\u{2026}", "...")
  return s
end

local function parse_attrs(tag)
  local attrs = {}
  for key, quote, value in tag:gmatch('([%w:_-]+)%s*=%s*(["\'])(.-)%2') do
    attrs[key] = decode_entities(value)
  end
  return attrs
end

local function register_key(key, kind)
  if not key or key == "" then fail("keyed " .. kind .. " is missing a key") end
  if seen_keys[key] then fail("duplicate key " .. key) end
  seen_keys[key] = kind
end

local convert_inlines
local convert_blocks

local function escape_md(s)
  s = ascii_md(s)
  s = s:gsub("([\\`*%[%]])", "\\%1")
  return s
end

convert_inlines = function(inlines)
  local parts = {}
  if not inlines then return "" end
  if inlines.t then inlines = pandoc.List{inlines} end
  local i = 1
  while i <= #inlines do
    local el = inlines[i]
    local t = el.t
    if t == "Str" then
      parts[#parts + 1] = escape_md(el.text)
    elseif t == "Space" or t == "SoftBreak" then
      parts[#parts + 1] = " "
    elseif t == "LineBreak" then
      parts[#parts + 1] = "  \n"
    elseif t == "Emph" then
      parts[#parts + 1] = "*" .. convert_inlines(el.content) .. "*"
    elseif t == "Strong" then
      parts[#parts + 1] = "**" .. convert_inlines(el.content) .. "**"
    elseif t == "Code" then
      parts[#parts + 1] = "`" .. el.text:gsub("`", "``") .. "`"
    elseif t == "Quoted" then
      parts[#parts + 1] = '"' .. convert_inlines(el.content) .. '"'
    elseif t == "Link" then
      local href = el.target or ""
      local label = convert_inlines(el.content)
      if href:match("glossary") or href == "" then
        parts[#parts + 1] = label
      else
        local build = href:match("builds/(arm)") or href:match("builds/(claw)")
        if build then
          local platform = PLATFORM
          if platform == "" then fail("build link needs a platform") end
          parts[#parts + 1] = string.format("[%s](/discovery/%s/builds/%s)", label, platform, build)
        else
          fail("unsupported link: " .. href)
        end
      end
    elseif t == "Span" then
      if has_class(el, "def-term") then
        local term = attr(el, "term") or attr(el, "data-term")
        if not term or term == "" then fail("definition span is missing data-term") end
        local label = ascii_md(stringify(el.content))
        if label == "" then fail("definition span " .. term .. " is missing a label") end
        parts[#parts + 1] = string.format("[[%s|%s]]", term, label)
      elseif has_class(el, "fieldref") then
        local mission = attr(el, "m") or attr(el, "data-m")
        local tier = attr(el, "tier") or attr(el, "data-tier") or "base"
        if not mission then fail("field reference is missing a mission number") end
        local label = ascii_md(stringify(el.content))
        if label == "" then label = "Mission " .. mission end
        parts[#parts + 1] = string.format("[[@%s:%s|%s]]", mission, tier, label)
      elseif has_class(el, "pnum") or has_class(el, "stitle") or has_class(el, "spts")
          or has_class(el, "mtitle") or has_class(el, "mpts") or has_class(el, "mlabel")
          or has_class(el, "ctitle") or has_class(el, "muted") or has_class(el, "jtag")
          or has_class(el, "live") or has_class(el, "final") or has_class(el, "small") then
        parts[#parts + 1] = convert_inlines(el.content)
      elseif has_class(el, "wb-note") or has_class(el, "pill") or has_class(el, "hex")
          or has_class(el, "dial") then
        parts[#parts + 1] = convert_inlines(el.content)
      else
        for _, c in ipairs(classes_of(el)) do
          if not KNOWN_SPAN[c] then fail("unknown span class " .. c) end
        end
        parts[#parts + 1] = convert_inlines(el.content)
      end
    elseif t == "RawInline" then
      local raw = el.text or ""
      if raw:match("^</?label") or raw:match("^<!--") or raw == "" then
        -- skip label wrappers and comments
      elseif raw:match("^<br%s*/?>") then
        parts[#parts + 1] = "  \n"
      else
        fail("residual raw HTML: " .. raw:sub(1, 120))
      end
    elseif t == "Strikeout" then
      parts[#parts + 1] = convert_inlines(el.content)
    elseif t == "Note" then
      fail("unsupported footnote")
    else
      local text = stringify(el)
      if text ~= "" then parts[#parts + 1] = escape_md(text) end
    end
    i = i + 1
  end
  local result = table.concat(parts):gsub(" +", " "):gsub(" +$", ""):gsub("^ +", "")
  return result
end

local function para_md(blocks_or_inlines)
  if blocks_or_inlines.t == "Para" or blocks_or_inlines.t == "Plain" then
    return convert_inlines(blocks_or_inlines.content)
  end
  return convert_inlines(blocks_or_inlines)
end

local function is_textarea(el)
  if is_raw_block(el) and raw_text(el):match("^<textarea") then return true end
  if el and (el.t == "Para" or el.t == "Plain") then
    for _, inline in ipairs(el.content or {}) do
      if inline.t == "RawInline" and (inline.text or ""):match("^<textarea") then
        return true
      end
    end
  end
  return false
end

local function is_text_input(el)
  if is_raw_block(el) and raw_text(el):match("<input[^>]*type=\"text\"") then
    return true
  end
  if el and (el.t == "Para" or el.t == "Plain") then
    for _, inline in ipairs(el.content or {}) do
      if inline.t == "RawInline" and (inline.text or ""):match("<input[^>]*type=\"text\"") then
        return true
      end
    end
  end
  return false
end

local function control_tag(el)
  if is_raw_block(el) then return raw_text(el) end
  if el and (el.t == "Para" or el.t == "Plain") then
    for _, inline in ipairs(el.content or {}) do
      if inline.t == "RawInline" and (inline.text or ""):match("^<input") then
        return inline.text
      end
      if inline.t == "RawInline" and (inline.text or ""):match("^<textarea") then
        return inline.text
      end
    end
  end
  return raw_text(el)
end

local function shortcode_ask(key, label, prompt)
  register_key(key, "textarea")
  if not label or label == "" then fail("textarea " .. key .. " is missing a label") end
  return string.format("{{< ask key=%s label=%s >}}%s{{< /ask >}}",
    yaml_quote(key), yaml_quote(label), prompt)
end

local function shortcode_answer(key, label)
  register_key(key, "textarea")
  if not label or label == "" then fail("textarea " .. key .. " is missing a label") end
  return string.format("{{< answer key=%s label=%s >}}", yaml_quote(key), yaml_quote(label))
end

local function shortcode_short(key, label, prompt)
  register_key(key, "text")
  if not label or label == "" then fail("text input " .. key .. " is missing a label") end
  if prompt and prompt ~= "" then
    return string.format("{{< short-answer key=%s label=%s prompt=%s >}}",
      yaml_quote(key), yaml_quote(label), yaml_quote(prompt))
  end
  return string.format("{{< short-answer key=%s label=%s >}}", yaml_quote(key), yaml_quote(label))
end

local function emit_textarea(tag)
  local a = parse_attrs(tag)
  local key = a["data-key"]
  local label = a["aria-label"]
  return shortcode_answer(key, label)
end

local function consume_checklist(blocks, start)
  local items = {}
  local i = start + 1
  local current_key, current_label
  local function flush()
    if current_key then
      register_key(current_key, "checkbox")
      if not current_label or current_label == "" then
        fail("checkbox " .. current_key .. " is missing a label")
      end
      table.insert(items, { key = current_key, label = current_label })
      current_key, current_label = nil, nil
    end
  end
  while i <= #blocks do
    local b = blocks[i]
    if is_raw_block(b) then
      local t = raw_text(b)
      if t:match("^</ul>") then
        flush()
        local lines = { "{{< checklist >}}" }
        for _, item in ipairs(items) do
          table.insert(lines, "- key: " .. item.key)
          table.insert(lines, "  label: " .. yaml_quote(item.label))
        end
        table.insert(lines, "{{< /checklist >}}")
        if #items == 0 then fail("checklist is empty") end
        return table.concat(lines, "\n"), i + 1
      elseif t:match("^<li") then
        flush()
      elseif t:match("^</li>") then
        flush()
      elseif t:match("^<input") then
        local a = parse_attrs(t)
        current_key = a["data-key"]
        if a["aria-label"] then current_label = a["aria-label"] end
      elseif t:match("^<ul class=\"check\"") then
        fail("nested checklist")
      else
        fail("residual raw HTML in checklist: " .. t:sub(1, 80))
      end
    elseif b.t == "Plain" or b.t == "Para" then
      local label = convert_inlines(b.content)
      if current_label and current_label ~= "" and label ~= "" then
        current_label = current_label .. " " .. label
      elseif label ~= "" then
        current_label = label
      end
    else
      fail("unsupported structure inside checklist: " .. b.t)
    end
    i = i + 1
  end
  fail("checklist is missing a closing tag")
end

local function yaml_parts(parts, indent)
  local sp = string.rep(" ", indent)
  local lines = {}
  for _, part in ipairs(parts) do
    if part.text then
      table.insert(lines, sp .. "- text: " .. yaml_quote(part.text))
    elseif part.slot then
      local slot = part.slot
      table.insert(lines, sp .. "- slot:")
      table.insert(lines, sp .. "    kind: " .. slot.kind)
      if slot.text then
        table.insert(lines, sp .. "    text: " .. yaml_quote(slot.text))
      end
      if slot.value then
        table.insert(lines, sp .. "    value: " .. yaml_quote(slot.value))
      end
      if slot.pattern then
        table.insert(lines, sp .. "    pattern: " .. yaml_quote(slot.pattern))
      end
      if slot.style then
        table.insert(lines, sp .. "    style: " .. slot.style)
      end
      if slot.parts then
        table.insert(lines, sp .. "    parts:")
        local inner = yaml_parts(slot.parts, indent + 6)
        table.insert(lines, inner)
      end
    end
  end
  return table.concat(lines, "\n")
end

local function flush_text(buf, parts)
  local text = table.concat(buf)
  text = text:gsub(" +", " ")
  if text:match("%S") then
    table.insert(parts, { text = ascii_md(text) })
  end
  for i = #buf, 1, -1 do buf[i] = nil end
end

local function parts_from_inlines(inlines)
  local parts, buf = {}, {}
  local function add(s) table.insert(buf, s) end
  for _, el in ipairs(inlines) do
    if el.t == "Str" then
      add(el.text)
    elseif el.t == "Space" or el.t == "SoftBreak" then
      add(" ")
    elseif el.t == "Code" then
      add(el.text)
    elseif el.t == "Span" and has_class(el, "pill") then
      flush_text(buf, parts)
      if has_class(el, "steer") then
        local value = stringify(el.content):gsub("%s+", "")
        table.insert(parts, { slot = { kind = "steering", value = value } })
      elseif has_class(el, "mx") then
        local pattern = attr(el, "pattern") or attr(el, "data-pattern")
        if not pattern or #pattern ~= 25 then
          fail("LED matrix is missing a 25-cell pattern")
        end
        table.insert(parts, { slot = { kind = "matrix", pattern = pattern } })
      elseif has_class(el, "dd") then
        local text = ascii_md(stringify(el.content))
        text = text:gsub("▾", ""):gsub("▼", ""):gsub("\u{25BE}", ""):gsub("\u{25BC}", "")
        text = text:gsub("\u{00A0}", " "):gsub("%s+$", ""):gsub("^%s+", "")
        table.insert(parts, { slot = { kind = "dropdown", text = text } })
      elseif has_class(el, "var") then
        table.insert(parts, { slot = { kind = "variable", text = ascii_md(stringify(el.content)) } })
      elseif has_class(el, "op") then
        table.insert(parts, { slot = { kind = "operator", text = ascii_md(stringify(el.content)) } })
      else
        local text = ascii_md(stringify(el.content))
        if text:find("▾", 1, true) or text:find("▼", 1, true)
            or text:find("\u{25BE}", 1, true) or text:find("\u{25BC}", 1, true) then
          text = text:gsub("▾", ""):gsub("▼", ""):gsub("\u{25BE}", ""):gsub("\u{25BC}", "")
          text = text:gsub("\u{00A0}", " "):gsub("%s+$", ""):gsub("^%s+", "")
          table.insert(parts, { slot = { kind = "dropdown", text = text } })
        else
          table.insert(parts, { slot = { kind = "value", text = ascii_md(text) } })
        end
      end
    elseif el.t == "Span" and has_class(el, "hex") then
      flush_text(buf, parts)
      local inner = parts_from_inlines(el.content)
      local slot = { kind = "condition", parts = inner }
      if has_class(el, "sn2") then slot.style = "sensor" end
      table.insert(parts, { slot = slot })
    elseif el.t == "Emph" or el.t == "Strong" then
      add(stringify(el))
    elseif el.t == "Span" and has_class(el, "dial") then
      -- decorative
    else
      local text = stringify(el)
      if text ~= "" then add(text) end
    end
  end
  flush_text(buf, parts)
  if #parts == 0 then fail("word-block has no parts") end
  return parts
end

local function inlines_of_block(el)
  if el.t == "Plain" or el.t == "Para" then return el.content end
  if el.content and el.content[1] and (el.content[1].t == "Plain" or el.content[1].t == "Para") then
    return el.content[1].content
  end
  return {}
end

local function note_from_row(row)
  for _, child in ipairs(row.content) do
    if child.t == "Plain" or child.t == "Para" then
      if has_class(child, "wb-note") then return ascii_md(stringify(child)) end
      for _, inline in ipairs(child.content) do
        if inline.t == "Span" and has_class(inline, "wb-note") then
          return ascii_md(stringify(inline))
        end
      end
    elseif child.t == "Span" and has_class(child, "wb-note") then
      return ascii_md(stringify(child))
    end
  end
  return nil
end

local function category_of(el)
  for _, c in ipairs(classes_of(el)) do
    if CATEGORY[c] then return CATEGORY[c] end
  end
  fail("word-block is missing an allowed category (classes: " .. table.concat(classes_of(el), " ") .. ")")
end

local convert_wb_rows

local function convert_wb_block(el, note)
  local shape = has_class(el, "hat") and "hat" or nil
  local parts = parts_from_inlines(inlines_of_block(el))
  return {
    kind = "block",
    category = category_of(el),
    shape = shape,
    parts = parts,
    note = note,
  }
end

local function convert_wb_control(wrap)
  local head, body, branches, pending_branch
  local function take_cbody(el)
    return convert_wb_rows(el.content)
  end
  for _, child in ipairs(wrap.content) do
    if child.t == "Div" and has_class(child, "wb-row") then
      local inner
      for _, el in ipairs(child.content) do
        if el.t == "Div" and has_class(el, "wb") then inner = el end
      end
      if inner and has_class(inner, "cb-end") then
        -- closing bar
      elseif inner and has_class(inner, "cb-top") then
        local label = ascii_md(stringify(inner))
        if not head then
          head = {
            category = category_of(inner),
            parts = parts_from_inlines(inlines_of_block(inner)),
          }
        else
          pending_branch = label
        end
      elseif inner and has_class(inner, "wb-cwrap") then
        -- nested control stored as a row inside cwrap; rare
      end
    elseif child.t == "Div" and has_class(child, "wb-cbody") then
      local rows = take_cbody(child)
      if pending_branch then
        branches = branches or {}
        table.insert(branches, { label = pending_branch, rows = rows })
        pending_branch = nil
      elseif not body then
        body = rows
      else
        fail("word-block control has an extra body")
      end
    elseif child.t == "Div" and has_class(child, "wb-cwrap") then
      -- nested wrap as a row
      body = body or {}
      table.insert(body, { kind = "control", control = convert_wb_control(child) })
    end
  end
  if not head then fail("word-block control is missing a head") end
  return {
    category = head.category,
    head = head.parts,
    body = body or {},
    branches = branches,
  }
end

convert_wb_rows = function(nodes)
  local rows = {}
  for _, node in ipairs(nodes) do
    if node.t == "Div" and has_class(node, "wb-row") then
      local block, wrap, note
      for _, child in ipairs(node.content) do
        if child.t == "Div" and has_class(child, "wb-cwrap") then
          wrap = child
        elseif child.t == "Div" and has_class(child, "wb") then
          block = child
        end
      end
      note = note_from_row(node)
      if wrap then
        table.insert(rows, { kind = "control", control = convert_wb_control(wrap) })
      elseif block and not has_class(block, "cb-end") then
        if has_class(block, "cb-top") then
          -- stray control head; ignore here, handled by cwrap
        else
          table.insert(rows, convert_wb_block(block, note))
        end
      else
        local hex
        for _, child in ipairs(node.content) do
          if child.t == "Span" and has_class(child, "hex") then
            hex = child
          elseif (child.t == "Plain" or child.t == "Para") then
            for _, inline in ipairs(child.content) do
              if inline.t == "Span" and has_class(inline, "hex") then
                hex = inline
              end
            end
          end
        end
        if hex then
          local inner = parts_from_inlines(hex.content)
          table.insert(rows, {
            kind = "block",
            category = has_class(hex, "sn2") and "sensors" or "control",
            parts = { { slot = {
              kind = "condition",
              style = has_class(hex, "sn2") and "sensor" or nil,
              parts = inner,
            } } },
            note = note,
          })
        end
      end
    elseif node.t == "Div" and has_class(node, "wb-cwrap") then
      table.insert(rows, { kind = "control", control = convert_wb_control(node) })
    elseif node.t == "Div" and has_class(node, "wb") then
      table.insert(rows, convert_wb_block(node, nil))
    end
  end
  return rows
end

local function emit_wb_rows(rows, indent)
  local sp = string.rep(" ", indent)
  local lines = {}
  for _, row in ipairs(rows) do
    if row.kind == "block" then
      table.insert(lines, sp .. "- block:")
      table.insert(lines, sp .. "    category: " .. row.category)
      if row.shape then table.insert(lines, sp .. "    shape: " .. row.shape) end
      table.insert(lines, sp .. "    parts:")
      table.insert(lines, yaml_parts(row.parts, indent + 6))
      if row.note and row.note ~= "" then
        table.insert(lines, sp .. "    note: " .. yaml_quote(row.note))
      end
    elseif row.kind == "control" then
      local c = row.control
      table.insert(lines, sp .. "- control:")
      table.insert(lines, sp .. "    category: " .. c.category)
      table.insert(lines, sp .. "    head:")
      table.insert(lines, yaml_parts(c.head, indent + 6))
      table.insert(lines, sp .. "    body:")
      if c.body and #c.body > 0 then
        table.insert(lines, emit_wb_rows(c.body, indent + 6))
      else
        table.insert(lines, sp .. "      []")
      end
      if c.branches and #c.branches > 0 then
        table.insert(lines, sp .. "    branches:")
        for _, br in ipairs(c.branches) do
          table.insert(lines, sp .. "      - label: " .. yaml_quote(br.label))
          table.insert(lines, sp .. "        rows:")
          table.insert(lines, emit_wb_rows(br.rows, indent + 10))
        end
      end
    end
  end
  return table.concat(lines, "\n")
end

local function emit_wordblocks(div)
  local aria = attr(div, "aria-label") or attr(div, "aria_label")
  if not aria or aria == "" then fail("word-block program is missing aria-label") end
  local rows = convert_wb_rows(div.content)
  if #rows == 0 then fail("word-block program is empty") end
  local lines = {
    string.format("{{< wordblocks aria=%s >}}", yaml_quote(ascii_md(aria))),
    "rows:",
    emit_wb_rows(rows, 2),
    "{{< /wordblocks >}}",
  }
  return table.concat(lines, "\n")
end

local function emit_callout(div)
  local title = ""
  local body_blocks = {}
  for idx, child in ipairs(div.content) do
    if idx == 1 and (child.t == "Para" or child.t == "Plain") then
      title = ascii_md(stringify(child.content))
    else
      table.insert(body_blocks, child)
    end
  end
  local body = convert_blocks(body_blocks)
  local is_warn = has_class(div, "warn")
  local is_navy = has_class(div, "navy")
  local is_gold = has_class(div, "gold")
  local name, extra = "callout", ""
  local is_safety = is_warn and (title:find("⚠", 1, true) or title:find("\u{26A0}"))
  if is_safety then
    name = "safety"
  elseif is_warn then
    name = "warn"
  elseif is_navy then
    extra = ' variant="navy"'
  elseif is_gold then
    extra = ' variant="gold"'
  end
  local title_attr = ""
  if title ~= "" then title_attr = " title=" .. yaml_quote(title) end
  return string.format("{{< %s%s%s >}}\n%s\n{{< /%s >}}", name, title_attr, extra, body, name)
end

local function emit_anat(div)
  local lines = { "| Code / part | What it means |", "| --- | --- |" }
  for _, row in ipairs(div.content) do
    if row.t == "Div" and has_class(row, "arow") then
      local code, desc = "", ""
      for _, cell in ipairs(row.content) do
        if has_class(cell, "acode") then code = convert_blocks(cell.content) end
        if has_class(cell, "adesc") then desc = convert_blocks(cell.content) end
      end
      code = code:gsub("\n", " "):gsub("|", "\\|")
      desc = desc:gsub("\n", " "):gsub("|", "\\|")
      table.insert(lines, string.format("| %s | %s |", (code:gsub("|", "\\|")), (desc:gsub("|", "\\|"))))
    end
  end
  return table.concat(lines, "\n")
end

local function mission_number_from(div)
  local text = stringify(div)
  local n = text:match("[Mm]ission%s+(%d+)")
  return n
end

local function emit_mission(div)
  local n = mission_number_from(div)
  if not n then fail("malformed mission card: missing mission number") end
  return string.format("{{< mission-summary mission=%q video=true >}}\n{{< /mission-summary >}}", n)
end

local function list_items_md(list)
  local items = {}
  for _, item in ipairs(list.content) do
    table.insert(items, convert_blocks(item))
  end
  return items
end

local function emit_scorepair(div)
  local scores, misses = {}, {}
  for _, col in ipairs(div.content) do
    if col.t == "Div" and has_class(col, "col") then
      local items = {}
      for _, child in ipairs(col.content) do
        if child.t == "BulletList" then
          items = list_items_md(child)
        end
      end
      if has_class(col, "yes") then scores = items else misses = items end
    end
  end
  if #scores == 0 or #misses == 0 then fail("score comparison is missing scores or does_not_score") end
  local lines = { "{{< score-examples >}}", "scores:" }
  for _, s in ipairs(scores) do table.insert(lines, "- " .. yaml_quote(s)) end
  table.insert(lines, "does_not_score:")
  for _, s in ipairs(misses) do table.insert(lines, "- " .. yaml_quote(s)) end
  table.insert(lines, "{{< /score-examples >}}")
  return table.concat(lines, "\n")
end

local function cell_has_input(cell)
  local function walk(ns)
    for _, n in ipairs(ns or {}) do
      if n.t == "RawInline" and (n.text or ""):match("<input") then return n.text end
      if n.t == "RawBlock" and (n.text or ""):match("<input") then return n.text end
      if n.content then
        local found = walk(n.content)
        if found then return found end
      end
    end
    return nil
  end
  return walk(cell.contents or cell.content)
end

local function emit_table(tbl)
  local heads = {}
  if tbl.head and tbl.head.rows then
    for _, row in ipairs(tbl.head.rows) do
      for _, cell in ipairs(row.cells) do
        table.insert(heads, convert_blocks(cell.contents or cell.content or {}))
      end
    end
  end
  local body_rows = {}
  local has_input = false
  for _, body in ipairs(tbl.bodies or {}) do
    for _, row in ipairs(body.body or {}) do
      local cells = {}
      local row_class = nil
      if row.classes and #row.classes > 0 then row_class = row.classes[1] end
      for _, cell in ipairs(row.cells) do
        local input = cell_has_input(cell)
        if input then
          has_input = true
          local a = parse_attrs(input)
          table.insert(cells, {
            key = a["data-key"],
            aria = a["aria-label"],
            value = a.value,
          })
        else
          table.insert(cells, { text = convert_blocks(cell.contents or cell.content or {}) })
        end
      end
      table.insert(body_rows, { class = row_class, cells = cells })
    end
  end
  if not has_input then
    if #heads == 0 then
      -- key/value card: first cell is label, rest joined
      local lines = { "| | |", "| --- | --- |" }
      -- rebuild without header using body as two columns
      local out = { }
      for _, row in ipairs(body_rows) do
        local left = row.cells[1] and (row.cells[1].text or "") or ""
        local right = {}
        for i = 2, #row.cells do right[#right + 1] = row.cells[i].text or "" end
        out[#out + 1] = string.format("| %s | %s |", (left:gsub("|", "\\|")), (table.concat(right, " "):gsub("|", "\\|")))
      end
      if #out == 0 then fail("static table is empty") end
      return table.concat({ "| | |", "| --- | --- |", table.concat(out, "\n") }, "\n")
    end
    local lines = {}
    local head_line, sep = {}, {}
    for _, h in ipairs(heads) do
      head_line[#head_line + 1] = (h:gsub("|", "\\|"))
      sep[#sep + 1] = "---"
    end
    lines[#lines + 1] = "| " .. table.concat(head_line, " | ") .. " |"
    lines[#lines + 1] = "| " .. table.concat(sep, " | ") .. " |"
    for _, row in ipairs(body_rows) do
      local cols = {}
      for _, cell in ipairs(row.cells) do
        cols[#cols + 1] = ((cell.text or ""):gsub("|", "\\|"))
      end
      lines[#lines + 1] = "| " .. table.concat(cols, " | ") .. " |"
    end
    return table.concat(lines, "\n")
  end
  local lines = { "{{< gridtable >}}", "columns:" }
  local colcount = #heads
  if colcount == 0 and body_rows[1] then colcount = #body_rows[1].cells end
  for i = 1, colcount do
    local head = heads[i] or ""
    table.insert(lines, "- head: " .. yaml_quote(head))
  end
  table.insert(lines, "rows:")
  for _, row in ipairs(body_rows) do
    table.insert(lines, "  - cells:")
    if row.class then
      -- rewrite as map form
      lines[#lines] = "  - class: " .. row.class
      table.insert(lines, "    cells:")
    end
    for _, cell in ipairs(row.cells) do
      if cell.key then
        register_key(cell.key, "text")
        table.insert(lines, "      - key: " .. cell.key)
        if cell.aria and cell.aria ~= "" then
          table.insert(lines, "        aria: " .. yaml_quote(cell.aria))
        end
        if cell.value and cell.value ~= "" then
          table.insert(lines, "        value: " .. yaml_quote(cell.value))
        end
      else
        table.insert(lines, "      - text: " .. yaml_quote(cell.text or ""))
      end
    end
  end
  table.insert(lines, "{{< /gridtable >}}")
  return table.concat(lines, "\n")
end

local function emit_turns(div)
  local lines = { "| Turn | What it means | Steering |", "| --- | --- | --- |" }
  local found = false
  for _, turn in ipairs(div.content) do
    if turn.t == "Div" and has_class(turn, "turn") then
      local name, desc, code = "", {}, ""
      for _, part in ipairs(turn.content) do
        if has_class(part, "thead") then
          name = convert_blocks(part.content):gsub("\n", " ")
        elseif has_class(part, "tbody") then
          local body = convert_blocks(part.content):gsub("\n", " ")
          table.insert(desc, body)
        elseif has_class(part, "tcode") then
          code = convert_blocks(part.content):gsub("\n", " / ")
        end
      end
      table.insert(lines, string.format("| %s | %s | %s |",
        name:gsub("|", "\\|"),
        table.concat(desc, " "):gsub("|", "\\|"),
        code:gsub("|", "\\|")))
      found = true
    end
  end
  if not found then fail("turn comparison is empty") end
  return table.concat(lines, "\n")
end

local function emit_header(el)
  local text = ascii_md(stringify(el.content)):gsub("^%s+", ""):gsub("%s+$", "")
  if el.level == 2 and has_class(el, "phase-head") then
    local name, rest
    for _, phase in ipairs({"Try It", "Learn It", "Do It", "Score It"}) do
      local found = text:match("^" .. phase .. "%s+(.*)$")
      if found then name, rest = phase, found break end
    end
    if not name then fail("phase heading is not Try/Learn/Do/Score It: " .. text) end
    return "## " .. name .. " --- " .. rest
  elseif el.level == 3 then
    return "### " .. text
  else
    return string.rep("#", el.level) .. " " .. text
  end
end

local function emit_list(el, ordered)
  local lines = {}
  for n, item in ipairs(el.content) do
    local body = convert_blocks(item)
    local prefix = ordered and (tostring(n) .. ". ") or "- "
    local parts = {}
    for line in (body .. "\n"):gmatch("(.-)\n") do
      table.insert(parts, line)
    end
    if #parts == 0 then parts = { "" } end
    parts[1] = prefix .. parts[1]
    for i = 2, #parts do
      parts[i] = "  " .. parts[i]
    end
    table.insert(lines, table.concat(parts, "\n"))
  end
  return table.concat(lines, "\n")
end

local function consume_dosteps(blocks, start)
  local step_num = 0
  local i = start + 1
  local chunks = {}
  local step_blocks = {}
  local function flush_step()
    if #step_blocks == 0 then return end
    step_num = step_num + 1
    local title = "Step"
    local body = {}
    for _, b in ipairs(step_blocks) do
      if (b.t == "Plain" or b.t == "Para") then
        local first = b.content[1]
        if first and first.t == "Span" and has_class(first, "stitle") then
          title = ascii_md(stringify(b.content))
        else
          table.insert(body, b)
        end
      else
        table.insert(body, b)
      end
    end
    table.insert(chunks, "### Step " .. step_num .. " --- " .. title)
    local md = convert_blocks(body)
    if md ~= "" then table.insert(chunks, md) end
    step_blocks = {}
  end
  while i <= #blocks do
    local b = blocks[i]
    if is_raw_block(b) then
      local t = raw_text(b)
      if t:match("^</ol>") then
        flush_step()
        return table.concat(chunks, "\n\n"), i + 1
      elseif t:match("^<li") then
        flush_step()
      elseif t:match("^</li>") then
        flush_step()
      elseif t:match("^<ul class=\"check\"") then
        local md, ni = consume_checklist(blocks, i)
        table.insert(step_blocks, pandoc.RawBlock("markdown", md))
        i = ni - 1
      elseif t:match("^<textarea") or t:match("^<input") then
        table.insert(step_blocks, b)
      elseif t:match("^<ol class=\"dosteps\"") then
        fail("nested activity steps")
      else
        fail("residual raw HTML in activity steps: " .. t:sub(1, 80))
      end
    else
      table.insert(step_blocks, b)
    end
    i = i + 1
  end
  fail("activity steps are missing a closing tag")
end

convert_blocks = function(blocks)
  local out = {}
  local i = 1
  local skip_next_score = false
  while i <= #blocks do
    local b = blocks[i]
    if not b then break end
    if is_raw_block(b) then
      local t = raw_text(b)
      if t:match("^<ul class=\"check\"") then
        local md, ni = consume_checklist(blocks, i)
        table.insert(out, md)
        i = ni
        skip_next_score = false
      elseif t:match("^<ol class=\"dosteps\"") then
        local md, ni = consume_dosteps(blocks, i)
        table.insert(out, md)
        i = ni
        skip_next_score = false
      elseif t:match("^<textarea") then
        table.insert(out, emit_textarea(t))
        i = i + 1
        skip_next_score = false
      elseif t:match("^<input[^>]*type=\"text\"") then
        local a = parse_attrs(t)
        table.insert(out, shortcode_short(a["data-key"], a["aria-label"]))
        i = i + 1
        skip_next_score = false
      elseif t:match("^</?section") or t:match("^<!--") or t:match("^</?main")
          or t:match("^</?div") and not t:match("class=") then
        i = i + 1
      else
        fail("residual raw HTML: " .. t:sub(1, 160))
      end
    elseif b.t == "RawBlock" and b.format == "markdown" then
      table.insert(out, b.text)
      i = i + 1
    elseif b.t == "Header" then
      table.insert(out, emit_header(b))
      i = i + 1
      skip_next_score = false
    elseif b.t == "Para" or b.t == "Plain" then
      if is_text_input(b) then
        local a = parse_attrs(control_tag(b))
        table.insert(out, shortcode_short(a["data-key"], a["aria-label"]))
        i = i + 1
      else
        local text = convert_inlines(b.content)
        if text ~= "" then table.insert(out, text) end
        i = i + 1
      end
      skip_next_score = false
    elseif b.t == "Div" then
      for _, c in ipairs(classes_of(b)) do
        if not KNOWN_DIV[c] then fail("unknown class " .. c) end
      end
      if has_class(b, "section") then
        local inner = convert_blocks(b.content)
        if inner ~= "" then table.insert(out, inner) end
        i = i + 1
      elseif has_class(b, "muted") then
        local inner = convert_blocks(b.content)
        table.insert(out, inner .. "\n{.muted}")
        i = i + 1
        skip_next_score = false
      elseif has_class(b, "q") then
        if i + 1 <= #blocks and is_textarea(blocks[i + 1]) then
          local a = parse_attrs(control_tag(blocks[i + 1]))
          table.insert(out, shortcode_ask(a["data-key"], a["aria-label"], convert_blocks(b.content)))
          i = i + 2
        elseif i + 1 <= #blocks and is_text_input(blocks[i + 1]) then
          local a = parse_attrs(control_tag(blocks[i + 1]))
          table.insert(out, shortcode_short(a["data-key"], a["aria-label"], convert_blocks(b.content)))
          i = i + 2
        else
          local text = convert_blocks(b.content)
          if text ~= "" then table.insert(out, text) end
          i = i + 1
        end
        skip_next_score = false
      elseif has_class(b, "callout") then
        table.insert(out, emit_callout(b))
        i = i + 1
        skip_next_score = false
      elseif has_class(b, "wb-prog") then
        table.insert(out, emit_wordblocks(b))
        i = i + 1
        skip_next_score = false
      elseif has_class(b, "anat") then
        table.insert(out, emit_anat(b))
        i = i + 1
        skip_next_score = false
      elseif has_class(b, "mission") then
        table.insert(out, emit_mission(b))
        skip_next_score = true
        i = i + 1
      elseif has_class(b, "scorepair") then
        if skip_next_score then
          skip_next_score = false
        else
          table.insert(out, emit_scorepair(b))
        end
        i = i + 1
      elseif has_class(b, "turns") then
        table.insert(out, emit_turns(b))
        i = i + 1
        skip_next_score = false
      elseif has_class(b, "finale") then
        local inner = convert_blocks(b.content)
        if inner ~= "" then table.insert(out, inner) end
        i = i + 1
        skip_next_score = false
      else
        local inner = convert_blocks(b.content)
        if inner ~= "" then table.insert(out, inner) end
        i = i + 1
      end
    elseif b.t == "Table" then
      table.insert(out, emit_table(b))
      i = i + 1
      skip_next_score = false
    elseif b.t == "BulletList" then
      table.insert(out, emit_list(b, false))
      i = i + 1
      skip_next_score = false
    elseif b.t == "OrderedList" then
      table.insert(out, emit_list(b, true))
      i = i + 1
      skip_next_score = false
    elseif b.t == "CodeBlock" then
      local lang = "c"
      if b.classes and b.classes[1] and b.classes[1] ~= "code" then
        lang = b.classes[1]
      end
      table.insert(out, "```" .. lang .. "\n" .. b.text .. "\n```")
      i = i + 1
      skip_next_score = false
    elseif b.t == "HorizontalRule" or b.t == "Null" then
      i = i + 1
    elseif b.t == "BlockQuote" then
      local inner = convert_blocks(b.content)
      local quoted = inner:gsub("\n", "\n> ")
      table.insert(out, quoted)
      i = i + 1
    else
      fail("unsupported structure: " .. tostring(b.t))
    end
  end
  local md = table.concat(out, "\n\n")
  md = md:gsub("\n\n\n+", "\n\n")
  return md
end

function Writer(doc, opts)
  SOURCE = (doc.meta and doc.meta.source_file and stringify(doc.meta.source_file)) or SOURCE
  PLATFORM = (doc.meta and doc.meta.platform and stringify(doc.meta.platform)) or ""
  if (not SOURCE or SOURCE == "" or SOURCE == "-") and PANDOC_STATE and PANDOC_STATE.input_files and PANDOC_STATE.input_files[1] then
    SOURCE = PANDOC_STATE.input_files[1]
  end
  seen_keys = {}
  local body = convert_blocks(doc.blocks)
  if body:match("<[a-zA-Z]") then
    fail("residual raw HTML in Markdown output")
  end
  return body .. "\n"
end

function Template()
  return "$body$"
end
