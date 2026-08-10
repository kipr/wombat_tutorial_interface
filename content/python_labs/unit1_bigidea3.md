---
title: "Unit 1 · Big Idea 3 — The Freight Sorter"
short_title: "Python 1.3"
hub_unit: 1
description: "Decisions with if/else — make the robot choose an action based on a rule you write."
weight: 50
nav: python
track: python
type: labs
mission_id: unit1_bigidea3
eyebrow: "Unit 1 · Big Idea 3"
heading: "Computers Make Decisions Using Rules"
subheading: "Student Lab · The Freight Sorter"
credit: "KIPR · Botball Explorer · Unit 1 Big Idea 3 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine understand and act within the world?"
  - term: "Big Idea"
    definition: "Computers Make [[DECISION|Decisions]] Using Rules"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems identify patterns and use rules to make decisions."
  - term: "CS1 Concepts"
    definition: "Classification · Logic · Pattern Recognition · Decision Making"
  - term: "Game Context"
    definition: "Freight Objects — sorting by type"
  - term: "What You Need"
    definition: "Explorer robot kit · game field · this lab sheet"
---

## Overview

So far, your robot has done exactly what you told it, in exactly the order you wrote it. Today that changes. You'll write a program that **makes a choice** — it looks at a value and decides what to do based on a rule. The robot will sort freight: one action for one kind, a different action for another.

{{< callout title="Core Insight" >}}
A decision is a rule the computer follows: "IF this is true, do one thing; OTHERWISE, do something else."

The robot doesn't "know" anything. It checks a value against a rule you wrote — and that is what makes it look intelligent.
{{< /callout >}}

### By the end of this activity you will be able to:

- Explain what a *[[CONDITION|Condition]]* is and how an `if` statement uses one to make a decision.
- Use `if` / `else` to make a robot take different actions for different values.
- Predict what a program will do by reading its rule before you run it.
- Connect rule-based decisions to how intelligent systems classify and respond to the world.
{.obj}

### New This Time: Making a Decision

You already know [[VARIABLE|variables]], [[FUNCTION|functions]], and the commands `k.motor()`, `k.msleep()`, and `k.ao()`. Today you add one new tool: the `if` statement.
{.muted}

{{< concept "An if statement — a rule the computer checks" >}}
- text: |
    An `if` statement checks whether something is true. If it is, the computer runs the indented code underneath it. If it is not, it can run a different [[BLOCK|block]] after `else` instead.
- code: |
    freight_type = 1             # a number YOU set

    if freight_type == 1:        # IF freight_type is 1...
        drive_forward()           # ...do this
    else:                         # OTHERWISE...
        turn_right()              # ...do this instead
- text: |
    Change `freight_type` to a different number, and the robot makes a different choice — without you rewriting the rule.
{{< /concept >}}

{{< concept "== means \"is it equal?\"" >}}
- text: |
    Watch the symbol carefully. There are **two** equals signs in a rule, not one:
- code: |
    freight_type = 1      # ONE equals  =   SETS the value to 1

    if freight_type == 1:  # TWO equals  ==  ASKS "is it equal to 1?"
- text: |
    A single `=` *sets* a value. A double `==` *asks a question*. Using one when you mean the other is one of the most common bugs in all of programming — so check it every time.
{{< /concept >}}

## Phase 1 — Activate: The Bouncer at the Door

Imagine you are a bouncer at the door of an event. You have exactly one rule: **if a person's ticket says "VIP," send them left; otherwise, send them right.** You don't know these people. You don't judge them. You just check the ticket against the rule and act.

{{< callout title="Think it through" variant="navy" >}}
You see 5 people in a row. Their tickets say: VIP, General, VIP, General, General. Which way does each person go?

Did you have to "think" about each person, or did you just apply the rule?
{{< /callout >}}

Send each person left or right by your rule:
{.group-label}

{{< gridtable >}}
columns:
  - head: Person
    width: 20%
  - head: Ticket says
    width: 40%
  - head: Left or Right?
rows:
  - - text: "1"
    - text: VIP
    - key: p1_person1
      aria: Person 1 direction
  - - text: "2"
    - text: General
    - key: p1_person2
      aria: Person 2 direction
  - - text: "3"
    - text: VIP
    - key: p1_person3
      aria: Person 3 direction
  - - text: "4"
    - text: General
    - key: p1_person4
      aria: Person 4 direction
  - - text: "5"
    - text: General
    - key: p1_person5
      aria: Person 5 direction
{{< /gridtable >}}

{{< ask key="p1_bouncer_like_computer" label="Bouncer like a computer" >}}A bouncer follows a rule without deciding who "deserves" what. How is that like the way a computer makes a decision?{{< /ask >}}

## Phase 2 — Concept: Conditions, Rules, and Classification

### A Condition Is a True/False Question

Every decision a computer makes starts with a *condition* — a question that is either true or false. `freight_type == 1` is a condition. Right now it is either true (the value really is 1) or false (it is anything else). There is no "maybe." This is called **[[BOOLEAN|Boolean]]** thinking: every condition is true or false, nothing in between.

### Classification

When a computer sorts things into groups using rules, that is *classification*. A mail machine reads a ZIP code and sends each letter to the right bin. Your program reads a freight value and sends the robot in the right direction. Same idea: a rule turns information into an action.

### Pattern Recognition

Rules let a system respond to a *pattern* instead of a single fixed case. Your one rule — "if type 1, go straight; else turn" — handles every freight value you could ever set, not just one. Write the rule once, and it works for the whole pattern of cases.

{{< callout title="Example" variant="gold" >}}
"If the light is red, stop; otherwise, go." That one rule covers every red light and every non-red light in the world. You don't write a new rule for each intersection — the pattern is handled by a single condition.
{{< /callout >}}

{{< ask key="p2_fixed_vs_decision" label="Fixed steps versus decision" >}}In your own words: what is the difference between a program that follows a fixed list of steps and one that makes a decision?{{< /ask >}}

## Phase 3 — Plan

### The Sorting Task

{{< callout title="Your Goal" >}}
Your robot is a freight sorter. A freight value is set at the top of the program. Your robot must take **one action** if the freight is type 1, and a **different action** if it is anything else.

You choose what "type 1" and "anything else" mean for the robot — for example, drive straight to one bin, or turn toward another.
{{< /callout >}}

### Step 1 — Write Your Rule in Plain English

Before any code, write your sorting rule as a sentence in the form "IF ... THEN ... OTHERWISE ...".

{{< answer key="p3_rule_plain_english" label="Rule in plain English" >}}

### Step 2 — Predict the Two Outcomes

Fill in what the robot should do for each freight value.

{{< gridtable >}}
columns:
  - head: "If `freight_type` is..."
    width: 34%
  - head: "...the robot should"
rows:
  - - text: "1"
    - key: p3_outcome_type1
      aria: Outcome for type 1
  - - text: "anything else (2, 3, ...)"
    - key: p3_outcome_else
      aria: Outcome for else
{{< /gridtable >}}

### Step 3 — Trace the Rule by Hand

Before you run anything, predict the robot's action for each value. This is called *tracing* — following the rule the way the computer will.

{{< gridtable >}}
columns:
  - head: "`freight_type` set to"
    width: 34%
  - head: Condition true or false?
    width: 30%
  - head: What the robot does
rows:
  - - text: "1"
    - key: p3_trace1_tf
      aria: Trace 1 true/false
    - key: p3_trace1_action
      aria: Trace 1 action
  - - text: "2"
    - key: p3_trace2_tf
      aria: Trace 2 true/false
    - key: p3_trace2_action
      aria: Trace 2 action
  - - text: "5"
    - key: p3_trace3_tf
      aria: Trace 3 true/false
    - key: p3_trace3_action
      aria: Trace 3 action
{{< /gridtable >}}

## Phase 4 — Build & Run

### Starting Code Template

Type this program into your robot [[CONTROLLER|controller]]. The rule lives inside `main()`. Change `freight_type` at the top to test both paths. Fill in the actions to match your Phase 3 plan.

{{< code >}}
#!/usr/bin/python3
# Unit 1, Big Idea 3: Freight Sorter
# Name: _______________________   Date: ___________

import os, sys
sys.path.append("/usr/lib")
import _kipr as k

DRIVE_SPEED = 50

# A number YOU set. Think of it as the freight you're sorting.
# Change this value and the robot makes a different decision.
freight_type = @@1@@     # try 1, then try 2

def drive_forward():
    k.motor(0, DRIVE_SPEED)
    k.motor(3, DRIVE_SPEED)
    k.msleep(1000)
    k.ao()

def turn_right():
    k.motor(0, DRIVE_SPEED)
    k.motor(3, -DRIVE_SPEED)
    k.msleep(600)
    k.ao()

def main():

    if freight_type == 1:       # IF the freight is type 1...
        drive_forward()          # ...send it straight ahead
    else:                        # OTHERWISE (it's not type 1)...
        turn_right()             # ...send it to the right instead

main()
{{< /code >}}

### Run It Both Ways — Results

Run the program with `freight_type = 1`, then change it to `2` and run again. Record what the robot actually did.

{{< gridtable >}}
columns:
  - head: "`freight_type` value"
    width: 30%
  - head: What you predicted
    width: 35%
  - head: What actually happened
rows:
  - - text: "1"
    - key: p4_run1_predict
    - key: p4_run1_actual
  - - text: "2"
    - key: p4_run2_predict
    - key: p4_run2_actual
{{< /gridtable >}}

### [[CHECKLIST|Checklist]]

- You used `==` (two equals) inside the `if`, not a single `=`
- Every [[BLOCK|BLOCK]] is indented to the same level
- You tested BOTH values, not just one
- The robot did something different for each value

## Phase 5 — Debug

Decisions create a brand-new kind of bug: the robot does the *wrong* action, even though it runs without an error. That means the rule ran fine — but it was the wrong rule, or the value was not what you thought.

{{< callout title="The most common decision bugs" variant="gold" >}}
**Wrong value:** If the robot turned when you expected straight, check what `freight_type` is actually set to at the top.

**Incorrect indentation:** Any line that is not indented correctly will cause an error.
{{< /callout >}}

### [[DEBUGGING|Debugging]] Log

{{< repeattable count=4 prefix="debug" >}}
- kind: number
  head: "Try"
  width: "8%"
- head: What went wrong
  key: wrong
  width: 30%
- head: Why (your best guess)
  key: why
  width: 30%
- head: How you fixed it
  key: fix
{{< /repeattable >}}

{{< ask key="p5_bug" label="Bug description" >}}Describe one decision bug you hit. Did the robot do the wrong thing, or refuse to run? How did you find the cause?{{< /ask >}}

## Phase 6 — Connect: The AI Literacy Bridge

{{< callout title="Big Idea 3 — AI Literacy Thread" >}}
Intelligent systems identify patterns and use rules to make decisions.
{{< /callout >}}

Your robot did not "understand" the freight. It checked a value against a rule you wrote and acted. Almost every intelligent system works this way underneath: an email app checks features of a message against rules and decides "spam or not spam." A photo app checks patterns and decides "face or not a face." The system is not judging — it is classifying with rules. The intelligence is in the rules, and a human wrote them.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_self_checkout" label="Self-checkout scenario" >}}A self-checkout machine decides whether the item you scanned matches its weight. What is the rule it is checking? What happens when the rule is wrong?{{< /ask >}}

{{< ask key="p6_else_problem" label="Problem with a broad else" >}}Your freight sorter only knows two outcomes: type 1, or everything else. A real sorting system might have ten kinds of freight. What is one problem with a rule that lumps everything that isn't type 1 into a single "else"?{{< /ask >}}

{{< ask key="p6_responsibility" label="Responsibility for misclassification" >}}Who is responsible when an automated system classifies something wrong — sends the wrong freight, flags the wrong email? Connect this to the fact that a person wrote the rule.{{< /ask >}}

## Phase 7 — Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_condition" label="Reflection 1" n=1 >}}What is a condition? Write a definition in your own words.{{< /ask >}}

{{< ask key="p7_q2_equals" label="Reflection 2" n=2 >}}Explain the difference between `=` and `==`. Why does it matter inside an `if` statement?{{< /ask >}}

{{< ask key="p7_q3_why_powerful" label="Reflection 3" n=3 >}}Today your robot took different actions for different values without you rewriting the rule. Why is making a decision more powerful than a fixed list of steps?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete this in 2–3 sentences: "Intelligent systems identify patterns and use rules to make decisions. This means that when an AI system classifies something wrong..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A — A Third Choice

- Right now your rule has two outcomes. Add a middle case using `elif`: type 1 does one thing, type 2 does another, everything else does a third.
- Trace your new rule by hand for `freight_type` = 1, 2, and 9 before you run it.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B — Flip the Rule

- Change your condition so the robot does the OPPOSITE — drives straight for everything *except* type 1.
- What did you change? Did you change the condition, the actions, or both?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C — Greater Than

- `==` is not the only test. Try `if (freight_type > 3)` — "is the value greater than 3?"
- Predict, then test: what does the robot do for values 1, 3, and 7?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D — Two Rules in a Row

- What happens if you write two separate `if` statements one after another, each checking `freight_type`?
- Could the robot ever do two actions in one run? When would that be useful, and when would it be a bug?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E — Random Freight

- Real freight wouldn't always be the same type every run. Add `import random` to the line after `import _kipr as k`, then use `random.randint(1, 10)` to generate a random `freight_type` each time your program runs.
- Run it several times. Does your sorting rule still make the correct choice across many random values?

{{< answer key="ext_e" label="Extension E" >}}
