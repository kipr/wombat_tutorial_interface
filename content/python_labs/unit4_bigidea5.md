---
title: "Unit 4 · Big Idea 5 — The Long Run"
short_title: "Python 4.5"
hub_unit: 4
description: "A long Botguy-and-cones run that stays accurate by resetting accumulated error with 6+ square-up checkpoints."
weight: 230
nav: python
track: python
type: labs
mission_id: unit4_bigidea5
eyebrow: "Unit 4 · Big Idea 5 · Capstone"
heading: "The Long Run"
subheading: "Student Lab · Reliability Across a Whole Mission"
credit: "KIPR · Botball Explorer · Unit 4 Big Idea 5 — Capstone Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine know where it is and where it is going?"
  - term: "Big Idea"
    definition: "Systems Must Handle Uncertainty Across a Long Run"
  - term: "AI Literacy Thread"
    definition: "Reliable systems constantly re-check reality and reset their accumulated error."
  - term: "CS1 Concepts"
    definition: "Integration · Error Correction · Robust Sequencing · State Reset"
  - term: "Game Context"
    definition: "Touch Botguy and return both cones to the starting box — one run"
  - term: "What You Need"
    definition: "Explorer robot · full [[LIBRARY|library]] · Botguy · two cones · the game field · this lab sheet"
---

## Overview

Every lab so far taught you that the real world is imperfect --- motors [[OVERSHOOT|overshoot]], turns drift, batteries fade, models are never exact. A short move can hide those errors. But a **long run** with many steps? The tiny errors pile up until the robot is completely lost. Today's capstone is the reliability answer: a long, multi-part mission where the robot **constantly re-checks reality and wipes out its accumulated error** along the way. You'll touch Botguy and return both cones to the starting box --- and stay accurate the whole time by squaring up again and again.

{{< callout title="The Big Idea of This Unit" >}}
You cannot stop errors from happening. But you *can* keep resetting them. A reliable robot doesn't trust its own dead reckoning across a long run --- it keeps re-referencing known features (walls, lines) to zero out drift before it grows dangerous.
{{< /callout >}}

### By the end of this activity you will be able to:

- Plan a long, multi-objective run that avoids obstacles.
- Use square-ups as deliberate error-reset checkpoints.
- Combine your whole library into one reliable competition run.
- Explain how re-referencing known features keeps a long run accurate.
{.obj}

## Phase 1 --- The Mission  & Its Rules

{{< callout title="The run" >}}
**Start** in the **right starting box**. In one continuous run: **touch Botguy**, then **move both cones back into the starting box**, and finish.
{{< /callout >}}

### The rules that make it hard

- **Verify your start:** begin with a **backward touch** (`back_until_pressed`) against the wall --- this confirms you're really in the starting box and resets your origin before you move.
- **Avoid the large cube:** there's a large cube on the [[PALLET|pallet]] right next to the starting box. Your path must **not touch it**. Plan around it.
- **Stay accurate:** your run must include **at least 6 square-ups**, placed as error-reset checkpoints throughout.

{{< ask key="p1_restate" label="Restate mission" >}}Say the mission back in your own words, including the three rules. Why does starting with a backward touch make the whole rest of the run more trustworthy?{{< /ask >}}

## Phase 2 --- Concept: The Square-Up Is an Error Reset

{{< concept "Error accumulates --- resets erase it" >}}
- text: |
    Think back to the 8-turn drift test: one turn looked fine, but eight turns stacked a tiny error into a big one. The same thing happens across a long run --- every drive and turn adds a little error, and it never goes away on its own. It just **grows**.
- text: |
    A square-up fixes this. When the robot squares up against a line, it forces itself into a *known, exact* position and heading --- no matter how crooked it had drifted. All the accumulated error is **wiped back to zero**. The robot gets a fresh, trustworthy starting point for the next leg.
{{< /concept >}}

{{< resetbox title="Error Reset Checkpoint" >}}
Every time you call `square_up()` (or `back_until_pressed()`), think of it as a checkpoint that says: "I don't care how much I drifted --- I now know *exactly* where I am again." That's why this run needs at least six of them.
{{< /resetbox >}}

{{< ask key="p2_reset" label="Reset concept" >}}In your own words, why does error "accumulate" over a long run? How does a square-up reset it?{{< /ask >}}

## Phase 3 --- Plan: Map the Path

Draw your whole run. Mark the right starting box (drawn for you), Botguy, both cones, and the large cube you must avoid. Sketch the path: out to Botguy, over to the cones, and back to the box --- routed clear of the large cube.

{{< sketch aria="Field path sketch area" startbox="right"
           tag="Sketch: Botguy, both cones, the large cube to avoid, and your path"
           note="Draw on the printed copy, or describe your planned path below." >}}

{{< answer key="p3_path" label="Path description"
           placeholder="Where is Botguy? Where are the cones? Where is the large cube? What path avoids it?" >}}

## Phase 4 --- Plan: Place Your 6+ Error Resets

Now walk your path and decide *where* each square-up goes. Good reset points are right before something precise ([[TOUCHING]] Botguy, grabbing a cone, entering the box) --- so you're accurate exactly when it matters. List each leg of the run and mark where you reset.

{{< repeattable count=8 prefix="plan" caption="Plan each leg --- mark your resets (need at least 6)" >}}
- kind: number
  head: "#"
  width: "8%"
- head: Leg of the run (what the robot does)
  key: leg
  width: 52%
- head: Library call(s)
  key: call
  width: 18%
- head: Reset here?
  key: reset
  align: center
{{< /repeattable >}}

{{< ask key="p4_reset_placement" label="Reset placement" >}}How many square-ups did you plan, and where did you put them? Why did you choose those spots instead of others?{{< /ask >}}

## Phase 5 --- Build: The Run in main()

Write your run in `main()`, translating your plan into library calls. Start with the backward touch, then follow your path --- and put a `square_up()` at each reset checkpoint you planned. Scoring is optional here; you can `print()` milestones if you like, but the real goal is a **reliable, accurate run**.

{{< code >}}

#!/usr/bin/python3

# Unit 4, Big Idea 5: The Long Run

# Name: _______________________   Date: ___________

import os, sys
sys.path.append("/usr/lib")
import _kipr as k
from @@yourname@@ import *     # your full library

def main():
    k.enable_servo(0)
    k.enable_servo(1)

    # ===== VERIFY START =====
    back_until_pressed()       # backward touch: confirm we're in the box, reset origin
    square_up()                # RESET #1 establishes a known heading before we move.

    # ===== LEG 1: to Botguy (avoid the large cube!) =====
    @@# Drive(...) / Turn(...) around the large cube to Botguy@@
    square_up()                # RESET #2 squares up before the precise touch.
    @@# ...touch Botguy...@@

    # ===== LEG 2: to the first cone =====
    @@# Drive(...) / Turn(...) to cone 1@@
    square_up()                # RESET #3
    @@# ...collect / push cone 1...@@

    # ===== LEG 3: to the second cone =====
    @@# Drive(...) / Turn(...) to cone 2@@
    square_up()                # RESET #4
    @@# ...collect / push cone 2...@@

    # ===== LEG 4: back to the starting box =====
    @@# Drive(...) / Turn(...) toward the box@@
    square_up()                # RESET #5
    @@# ...bring the cones into the box...@@
    square_up()                # RESET #6 provides the final alignment in the box.

main()
{{< /code >}}

{{< callout title="[[REQUIREMENT|Requirement]] check" variant="gold" >}}
At least **6** square-ups, a **backward touch** to start, a path that **avoids the large cube**, and it must **touch Botguy** and **return both cones**. The skeleton shows six reset points --- fill the driving/turning/collecting from your Phase 3--4 plan.
{{< /callout >}}

## Phase 6 --- Run It, Then Test Its Reliability

Get it working one leg at a time. Then do the real reliability test: run the *whole* thing several times from the same start, and see how **consistent** it is. A reliable run succeeds the same way every time.

{{< callout title="Reliability = repeatability" >}}
A run that works once might be luck. A run that works 4 times out of 4 is *reliable*. Your square-up resets are what turn a lucky run into a repeatable one.
{{< /callout >}}

{{< repeattable count=4 prefix="run" caption="Run it 4+ times --- how consistent is it?" >}}
- kind: number
  head: "Run"
  width: "10%"
- head: Touched Botguy?
  key: botguy
  width: 30%
- head: Both cones in the box?
  key: cones
  width: 30%
- head: Where it drifted / what you fixed
  key: drift
{{< /repeattable >}}

{{< ask key="p6_reliability" label="Reliability finding" >}}How many of your runs fully succeeded? If a run failed, was it because a square-up was missing where you needed one? Where would adding a reset help?{{< /ask >}}

## Phase 7 --- Connect  & Reflect

{{< callout title="AI Literacy Thread" >}}
Reliable systems constantly re-check reality and reset their accumulated error.
{{< /callout >}}

Your robot succeeded across a long run not by being perfect, but by *never trusting its own drift for too long*. Every square-up pulled it back to a known truth. This is one of the deepest ideas in reliable autonomy. A spacecraft re-checks its position against the stars. A self-driving car re-locates itself against lane lines and landmarks constantly. A surveyor re-references known benchmarks. None of them assume their internal estimate is still correct --- they keep measuring reality and correcting. You just built that same discipline into a robot: act, but keep re-checking the world and resetting your error before it grows.

Complete the reflection on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_accumulate" label="Reflection 1" n=1 >}}Why does error accumulate over a long run, and why can't you just "drive more carefully" to avoid it?{{< /ask >}}

{{< ask key="p7_q2_reset" label="Reflection 2" n=2 >}}How does a square-up reset accumulated error? Why did this run need at least six of them?{{< /ask >}}

{{< ask key="p7_q3_repeatable" label="Reflection 3" n=3 >}}Why is a run that succeeds 4 out of 4 times better than one that scores higher but only works sometimes?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete in 2--3 sentences: "Reliable systems constantly re-check reality and reset their error. This means that over a long mission, a robot should..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Remove a Reset

- Delete one of your square-ups and run it several times. Does the run get less reliable? Which reset mattered most?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Score It

- Add score tracking with `print()` like the red-cube run. Touching Botguy and returning cones are worth real points --- report your total.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Handle a Failure

- What if the robot misses a cone? Sketch a recovery: how could it back up, re-square, and try again instead of continuing blindly?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Fewer, Smarter Resets

- Could you succeed with only 4 well-placed resets instead of 6? Where would the *most valuable* resets be, and why?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E --- Splitting the Work

- If you'd built today's Long Run with a partner instead of solo, how would you split the work into roles --- for example, one person tunes `Drive`/`Turn` constants while the other plans the reset sequence?
- What collaborative tool (a shared doc, GitHub, a group chat) would help you combine your work without overwriting each other's changes?

{{< answer key="ext_e" label="Extension E" >}}
