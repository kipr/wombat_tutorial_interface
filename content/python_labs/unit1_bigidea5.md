---
title: "Unit 1 · Big Idea 5 — The Pom Pusher"
short_title: "Python 1.5"
hub_unit: 1
description: "Modularity and reuse — build behaviors from small functions and reuse them across a scattered field."
weight: 70
nav: python
track: python
type: labs
mission_id: unit1_bigidea5
eyebrow: "Unit 1 · Big Idea 5"
heading: "Complex Behaviors Are Built From Smaller Behaviors"
subheading: "Student Lab · The Pom Pusher"
credit: "KIPR · Botball Explorer · Unit 1 Big Idea 5 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine understand and act within the world?"
  - term: "Big Idea"
    definition: "Complex Behaviors Are Built From Smaller Behaviors"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems combine simple behaviors to accomplish complex goals."
  - term: "CS1 Concepts"
    definition: "[[FUNCTION|Functions]] · Reuse · [[MODULARITY|Modularity]] · Building Larger Systems"
  - term: "Game Context"
    definition: "[[@4|Mission 4]] — Push the orange pom off the line (right starting box)"
  - term: "What You Need"
    definition: "Explorer robot kit · game field · this lab sheet · pencil for mapping"
---

## Overview

This is the capstone of Unit 1. Your robot starts in the **right starting box** and must push poms off the line --- Mission 4. The poms are **not** in a neat row, and there are other objects on the field to work around. You won't write a brand-new command for every move. Instead, you'll build a few small, reliable behaviors and **reuse** them --- in different combinations --- to handle a messy, real layout.

{{< callout title="Core Insight" >}}
Big behaviors are built from small ones. A few reliable building blocks, combined in the right order, can solve a complex task --- without writing anything new.
{{< /callout >}}

### By the end of this activity you will be able to:

- Use `id()` to see that a name is a label pointing at something, not a box holding it.
- Build a larger behavior by combining smaller functions (*composition*).
- Reuse the same building blocks in different combinations to solve a non-uniform layout.
- Connect modular code to the AI literacy idea that complex behavior is built from simple, reusable parts.
{.obj}

### New This Time: A Name Is a Label, Not a Box

You already build functions with `def`. Today you learn what a name *actually* is in Python --- and why that makes `def` simpler than it looks.
{.muted}

{{< concept "A name points at something --- it doesn't hold it" >}}
- text: |
    Until now, we've been referring to [[VARIABLE|variables]] as a labeled box with a value inside. Python doesn't work that way. A name is more like a **sticky note pointing at** something that lives somewhere else. You can prove it with `id()`, which returns the number of wherever that "somewhere else" is, in the Python you're using on the Wombat:
- code: |
    x = 5
    print(id(x))       # This number identifies where the value 5 lives.

    y = x               # y is a SECOND sticky note, pointing at the SAME place
    print(id(y))        # the exact same number as id(x)
- text: |
    Nothing got copied into a box called `y`. The name `y` just points at the same spot `x` already points at.
{{< /concept >}}

{{< concept "A function name works exactly the same way" >}}
- text: |
    When you write `def push_off_line():`, Python builds the function and then does the *exact same thing* it did with `x = 5` --- it points the name `push_off_line` at it. There's no separate "promise" step to declare first; the name-to-function connection happens the moment `def` runs:
- code: |
    def push_off_line():        # the name now points at this function
        drive_forward()
        drive_forward()

    print(id(push_off_line))    # This number identifies where THIS function lives.

    do_it = push_off_line       # a SECOND name, pointing at the SAME function
    do_it()                      # calling do_it() runs push_off_line's code
- text: |
    That's why Python doesn't need a [[PROTOTYPE|prototype]] declared above `main()` the way some other languages (like C) do: the name-to-function connection is made once, right where you write `def`, and every later use of that name just follows the same pointer.
{{< /concept >}}

{{< ask key="p0_names_as_labels" label="Names as labels" >}}In your own words: what does `id()` show you about a name? Why is "a name points at something" a more accurate picture than "a name is a box holding something"?{{< /ask >}}

## Phase 1 --- Activate: One Move, Many Uses

Think about a single dance move --- say, a step-and-clap. On its own it's tiny. But a whole routine is just that move and a few others, combined in different orders. You don't invent a new body each time; you **reuse** moves you already have, arranged to fit the music.

{{< callout title="Think it through" variant="navy" >}}
You know three small moves: *step forward*, *turn*, and *clap*. Using only those three, how many different short routines could you make?

If you wanted to add a "spin" to every routine, would you rather rewrite each routine, or build "spin" once and drop it in?
{{< /callout >}}

{{< ask key="p1_reuse_power" label="Power of reusable moves" >}}Why is it powerful to have a few small moves you can reuse, instead of memorizing every full routine from scratch?{{< /ask >}}

## Phase 2 --- Concept: Modularity, Reuse, and Composition

### Modularity

A program is *modular* when it's built from small, separate pieces --- [[MODULE|modules]] --- that each do one job. Your `drive_forward()` and `turn_right()` are modules. Modular code is easier to read, easier to fix, and easier to grow, because each piece can be understood and tested on its own.

These modules come from from decomposing larger problems like you learned about in Big Idea 2.

### Reuse

The whole point of a module is that you write it once and *reuse* it many times. Today you'll call `drive_forward()` and `turn_right()` over and over --- sometimes straight from `main()`, sometimes from inside a bigger function. Same block, used again and again, in different places.

### Composition

When you build a bigger behavior out of smaller ones, that's *composition*. A function like `push_off_line()` doesn't contain new motor commands --- it's *composed* of calls to building blocks you already trust. You stack the simple to make the complex.

{{< callout title="Example" variant="gold" >}}
A music app's "play" button is composed of smaller behaviors: find the file, read it, send sound to the speaker, update the screen. Nobody rewrites "send sound to the speaker" for every song --- it's a reusable block, called whenever it's needed.
{{< /callout >}}

{{< ask key="p2_giant_vs_modular" label="Giant versus modular" >}}In your own words: what is the difference between writing one giant function that does everything, and building the same behavior out of small reusable pieces?{{< /ask >}}

## Phase 3 --- Plan

### The Mission

{{< callout title="Mission 4 --- Push the Pom Off the Line" >}}
**Start:** your robot begins in the **right starting box**.

**Base:** push the orange pom off the line.

**Watch out:** the poms are scattered --- not in a straight line --- and there are other objects on the field you must drive around. The path from one pom to the next is different each time.
{{< /callout >}}

### Step 1 --- Map the Field

Before any code, sketch what you see. Mark the right starting box (drawn for you), the poms (use a circle for each), and any obstacles (use an X). This map is what your plan is built on.

{{< sketch aria="Field mapping sketch area" startbox="right"
           tag="Sketch your field here --- poms = ◯, obstacles = ✕"
           note="Draw on a printed copy, or describe the layout in the box below." >}}

{{< answer key="p3_layout_description" label="Field layout description"
           placeholder="Describe where the poms and obstacles are relative to the right starting box..." >}}

### Step 2 --- Plan Your Reuse

For each pom, plan which building blocks get the robot there and push it off the line. Notice you'll reuse the same blocks (`drive_forward`, `turn_right`) in a different order for each one --- because each pom sits in a different place.

{{< gridtable >}}
columns:
  - head: Pom
    width: 14%
  - head: Building blocks to get there &amp; push (in order)
    width: 50%
  - head: Obstacle to avoid?
rows:
  - - text: 1 (orange)
    - key: p3_pom1_blocks
      aria: Pom 1 blocks
    - key: p3_pom1_obstacle
      aria: Pom 1 obstacle
  - - text: "2"
    - key: p3_pom2_blocks
      aria: Pom 2 blocks
    - key: p3_pom2_obstacle
      aria: Pom 2 obstacle
  - - text: "3"
    - key: p3_pom3_blocks
      aria: Pom 3 blocks
    - key: p3_pom3_obstacle
      aria: Pom 3 obstacle
{{< /gridtable >}}

### Step 3 --- Decide Your Building Blocks

List the small functions you will build and reuse, and the one bigger behavior you'll compose from them.

{{< gridtable >}}
columns:
  - head: Function name
    width: 34%
  - head: What it does
    width: 42%
  - head: Built from?
rows:
  - - text: drive_forward()
    - text: Drive straight for a set time, then stop
    - text: motor, msleep, ao
  - - key: p3_fn2_name
    - key: p3_fn2_does
    - key: p3_fn2_from
  - - key: p3_fn3_name
    - key: p3_fn3_does
    - key: p3_fn3_from
{{< /gridtable >}}

## Phase 4 --- Build &amp; Run

### Example Program --- A Pattern to Learn From

{{< callout title="This is an example, not a copy-me template" variant="gold" >}}
The program below shows the *pattern*: a readable `main()` at the top calling functions that are defined below it, with building blocks reused in different combinations. Your poms are in different places than this example, so **your** `main()` will have a different order of moves. Use this to learn the shape --- then write your own from your Phase 3 plan.
{{< /callout >}}

{{< code >}}

#!/usr/bin/python3

# Unit 1, Big Idea 5: Pom Pusher (EXAMPLE; yours will differ)

# Name: _______________________   Date: ___________

import os, sys
sys.path.append("/usr/lib")
import _kipr as k

DRIVE_SPEED = 50

# MAIN: This is your plan. The poms are NOT in a line, so the path

#    between them is different every time. You decide how to reuse

#    your building blocks to get from one pom to the next.
def main():

    push_off_line()    # first pom

    turn_right()       # The next pom is not straight ahead.
    drive_forward()    # reuse the building blocks to reach it
    push_off_line()    # second pom

    drive_forward()    # a different path again to the third
    push_off_line()    # third pom

# DEFINITIONS: Each name below points at the recipe it runs.
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

# push_off_line is a BIGGER behavior built from SMALLER ones:
def push_off_line():
    drive_forward()    # drive into the pom, pushing it off the line
    drive_forward()    # keep going to clear it fully

main()
{{< /code >}}

### Count Your Reuse

After you write your own program, count how many times you used each building block. Reuse is the whole point --- high numbers are good here.

{{< gridtable >}}
columns:
  - head: Building block
    width: 40%
  - head: Times called in main()
    width: 30%
  - head: Times called inside other functions
rows:
  - - text: drive_forward()
    - key: p4_df_main
      aria: drive_forward in main
    - key: p4_df_inside
      aria: drive_forward inside
  - - text: turn_right()
    - key: p4_tr_main
      aria: turn_right in main
    - key: p4_tr_inside
      aria: turn_right inside
  - - key: p4_fn3_name
      aria: third block name
    - key: p4_fn3_main
      aria: third in main
    - key: p4_fn3_inside
      aria: third inside
{{< /gridtable >}}

### [[CHECKLIST|Checklist]]

- Every function is defined with `def` before the point where it gets called
- `main()` reads like a plan --- mostly function calls, not raw motor commands
- At least one building block is reused in more than one place
- Your `main()` matches the path you mapped in Phase 3 (it is not a copy of the example)

## Phase 5 --- Debug &amp; Integrate

When you reuse one building block everywhere, a single weak block causes failures all over the run. The flip side: fix that one block, and every place that uses it improves at once. That is the power --- and the risk --- of reuse.

{{< callout title="Common reuse bugs" variant="gold" >}}
**One block is slightly off:** if `drive_forward()` goes a little too far, every pom is reached a little too far. Fix the block, not each call.

**Called before it's defined:** if `main()` tries to call a function whose `def` comes later in the file, Python stops with `NameError: name 'push_off_line' is not defined` --- the name doesn't point at anything yet. Check that every `def` comes before the point where it's actually run.

**Right blocks, wrong order:** the robot does real moves but ends up in the wrong place. Re-check the order in `main()` against your map.
{{< /callout >}}

### [[DEBUGGING|Debugging]] Log

{{< repeattable count=4 prefix="debug" >}}
- kind: number
  head: "Try"
  width: "8%"
- head: What went wrong
  key: wrong
  width: 32%
- head: Was it the block, or the order?
  key: blockorder
  width: 30%
  aria: block or order
- head: How you fixed it
  key: fix
{{< /repeattable >}}

{{< ask key="p5_one_fix_many" label="One fix, many places" >}}Did fixing one building block fix problems in more than one place? Describe what happened.{{< /ask >}}

## Phase 6 --- Connect: The AI Literacy Bridge

{{< callout title="Big Idea 5 --- AI Literacy Thread" >}}
Intelligent systems combine simple behaviors to accomplish complex goals.
{{< /callout >}}

Your pom-pushing run looked complex, but it was built from a few simple behaviors reused in different orders. Every large intelligent system works this way: a self-driving car combines "stay in lane," "keep distance," and "obey signals" into a full trip; a warehouse robot combines "navigate," "grab," and "place" into an entire shift. No one writes a single giant behavior for "drive across the country." They compose it from small, tested parts.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_decompose_complex" label="Decompose a complex task" >}}Name a complex task a robot or app does, and break it into at least three smaller behaviors it is probably built from.{{< /ask >}}

{{< ask key="p6_why_reliable" label="Why reuse is reliable" >}}You reused one building block many times. Why does building from small, tested parts make a big system more reliable than writing it all as one piece?{{< /ask >}}

{{< ask key="p6_shared_weakness" label="Shared weakness from reuse" >}}If one small behavior in a self-driving car (say, "detect a stop sign") is slightly wrong, it affects the whole system. How is that the same lesson you saw when one of your building blocks was off?{{< /ask >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_prototype" label="Reflection 1" n=1 >}}What does `id()` show you about a function's name? Why didn't you need to declare anything before `main()` the way some other languages require?{{< /ask >}}

{{< ask key="p7_q2_composition" label="Reflection 2" n=2 >}}Explain *composition* in your own words. Give one example of a bigger behavior you built from smaller ones today.{{< /ask >}}

{{< ask key="p7_q3_reuse_layout" label="Reflection 3" n=3 >}}The poms were not in a line. How did reusing the same building blocks in different orders help you handle a messy layout?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete this in 2--3 sentences: "Intelligent systems combine simple behaviors to accomplish complex goals. This means that to build something complex, a programmer should..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Go for the Bonus (Blue Pom)

- Mission 4's bonus is to also get a blue pom off the line at the same time.
- Where is the blue pom on your map? Plan which building blocks reach it, and where that fits in your sequence.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- A Higher-Level Behavior

- Build one more "big" function that composes several pushes and moves --- for example, `clear_left_side()`.
- Rewrite part of `main()` to call your new high-level function. Does `main()` read more clearly now?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Name It Better

- Look at your function names. Could someone read your `main()` and understand the plan without seeing the definitions?
- Rename any function whose name doesn't clearly say what it does. Why do good names make reuse easier?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Looking Ahead: A Shared [[LIBRARY|Library]]

- Imagine your `drive_forward()` and `turn_right()` were saved in a separate file you could load into any mission.
- Which of your functions would you put in that shared file, and which are specific to just this pom mission? Why?

{{< answer key="ext_d" label="Extension D" >}}
