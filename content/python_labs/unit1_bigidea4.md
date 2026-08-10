---
title: "Unit 1 · Big Idea 4 — The Position Keeper"
short_title: "Python 1.4"
hub_unit: 1
description: "Variables and state — store and update the robot's position from a zero origin, then test it."
weight: 60
nav: python
track: python
type: labs
mission_id: unit1_bigidea4
eyebrow: "Unit 1 · Big Idea 4"
heading: "Computers Store Information"
subheading: "Student Lab · The Position Keeper"
credit: "KIPR · Botball Explorer · Unit 1 Big Idea 4 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine understand and act within the world?"
  - term: "Big Idea"
    definition: "Computers Store Information"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems build and update models of the world using data."
  - term: "CS1 Concepts"
    definition: "Data · [[VARIABLE|Variables]] · Coordinates · State · Representation"
  - term: "Game Context"
    definition: "Field Maps &amp; Objects — tracking position"
  - term: "What You Need"
    definition: "Explorer robot kit · game field · this lab sheet"
---

## Overview

Your robot has followed instructions, broken problems apart, and made [[DECISION|decisions]]. But it has had no **memory** — once a command finished, the robot forgot it ever happened. Today the robot starts keeping track. It will store its own position in variables and update them as it moves, so at any moment it can answer: "Where am I now?"

{{% callout title="Core Insight" %}}
A robot doesn't magically know where it is. It knows only what it has *stored* — and that is only correct if it started from a known zero and updated honestly after every move.
{{% /callout %}}

### By the end of this activity you will be able to:

- Explain what it means for a program to *store* information in a variable.
- Set a starting *origin* (zero) and update stored values as the robot moves.
- Use coordinates (x, y) to represent the robot's position on the field.
- Connect stored variables to the AI literacy idea that systems build and update a model of the world.
{.obj}

### New This Time: Memory That Changes

You already know how to create a variable and set it once. Today the variable becomes a **running record** — the program changes it as it goes.

{{< concept "Set a zero before you start — the origin" >}}
- text: |
    You can't track position without a starting point to measure from. Before the robot moves, set its position to zero. This is the **origin** — everywhere else is measured from this spot.
- code: |
    x_position = 0   # start at the origin
    y_position = 0   # both zero before the first move
- text: |
    The robot doesn't know where it is on the planet. It only knows where it is *compared to this zero*.
{{< /concept >}}

{{< concept "Updating a variable using itself" >}}
- text: |
    To remember a move, you change a variable based on its *own* current value:
- code: |
    y_position = y_position + 1
- text: |
    Read it right to left: take what's stored in `y_position`, add 1, and store the result back into `y_position`. If it held 2, now it holds 3. The variable remembers its new position.

    It looks strange at first — how can something equal itself plus one? The trick is that the right side is calculated *first*, then the answer is stored back on the left.
    {.muted}
{{< /concept >}}

## Phase 1 — Activate: Eyes Closed

Picture walking across a room with your eyes closed. You can't see where you are — but if you started at a known spot and counted every step, you could still say roughly where you've ended up. That counting is memory. It's the only way you know your position without looking.

{{% callout title="Think it through" variant="navy" %}}
You start at a doorway (your zero). You take 3 steps forward, then 2 steps forward. How many steps from the door are you now?

If you forgot to count one step, would your answer still be right? What does that tell you about keeping a record?
{{% /callout %}}

Track the steps from your zero:
{.group-label}

{{< gridtable >}}
columns:
  - head: Move
    width: 50%
  - head: Total steps from the door (your stored position)
rows:
  - - text: Start at the doorway
    - text: "0"
  - - text: Take 3 steps forward
    - key: p1_after_3
      aria: Position after 3 steps
  - - text: Take 2 more steps forward
    - key: p1_after_2_more
      aria: Position after 2 more steps
{{< /gridtable >}}

{{< ask key="p1_how_you_knew" label="How you knew your position" >}}You knew your position the whole time without seeing it. How did you do that? How is it like what a robot must do?{{< /ask >}}

## Phase 2 — Concept: Variables, State, and Representation

### A Variable Stores Information

A variable is a named box that holds a value. Until now, you set the box once and left it alone. Today the box is active — the program reads it, changes it, and stores a new value back. What a variable holds *right now* is part of the program's **state**: everything the program currently remembers.

### Coordinates Represent Position

To describe where something is on a flat field, we use two numbers: `x` (how far across) and `y` (how far forward). Together, `(x, y)` is a coordinate. Starting at the origin, `(0, 0)` means "right where I began."

### Representation

The robot's real position is out there on the field. The two numbers in memory are a *representation* of it — a model. If the model is updated correctly, it matches reality. If the robot slips or you forget to update, the model and reality drift apart, and the robot "believes" something false about where it is.

{{% callout title="Example" variant="gold" %}}
A phone's map shows a blue dot for "you are here." That dot is a *representation* stored in the phone. When it's updated well, it tracks you. When the signal drops, the dot keeps showing the last stored spot — the model, not reality.
{{% /callout %}}

{{< ask key="p2_real_vs_stored" label="Real versus stored position" >}}In your own words: what is the difference between where the robot really is and what the robot has *stored* about where it is?{{< /ask >}}

## Phase 3 — Plan

### The Tracking Task

{{% callout title="Your Goal" %}}
Your robot will drive forward two times. It starts at the origin `(0, 0)`. After each forward move, it updates `y_position` so its stored memory always matches how far it has gone.

Each `drive_forward()` counts as one step in `y`. We are only moving forward this time, so `x_position` stays at 0.
{{% /callout %}}

### Step 1 — Set Your Zero

Before anything moves, what are the robot's stored coordinates? Write them in.

{{< gridtable >}}
columns:
  - head: Variable
    width: 50%
  - head: Starting value (the origin)
rows:
  - - text: x_position
    - key: p3_x_zero
      aria: x starting value
  - - text: y_position
    - key: p3_y_zero
      aria: y starting value
{{< /gridtable >}}

### Step 2 — Trace the Memory by Hand

Before you run anything, predict what is stored after each move. Each forward move adds 1 to `y_position`.

{{< gridtable >}}
columns:
  - head: After this happens...
    width: 46%
  - head: x_position
    width: 27%
  - head: y_position
    width: 27%
rows:
  - - text: Start (origin)
    - text: "0"
    - text: "0"
  - - text: drive_forward() once
    - key: p3_trace1_x
    - key: p3_trace1_y
  - - text: drive_forward() again
    - key: p3_trace2_x
    - key: p3_trace2_y
{{< /gridtable >}}

{{< ask key="p3_final_coord" label="Final stored coordinate" >}}What is the robot's final stored coordinate after both moves? Write it as (x, y).{{< /ask >}}

## Phase 4 — Build &amp; Run

### Starting Code Template

Type this program into your robot [[CONTROLLER|controller]]. Notice the two position variables set to zero at the top, and how each move updates `y_position` right after it happens. The `print()` line shows you what the robot has stored.

{{< code >}}
#!/usr/bin/python3
# Unit 1, Big Idea 4: Position Keeper
# Name: _______________________   Date: ___________

import os, sys
sys.path.append("/usr/lib")
import _kipr as k

DRIVE_SPEED = 50

# The robot's stored position. We set BOTH to zero before we start.
# This is our "origin." Every move is measured from here.
x_position = 0
y_position = 0

def drive_forward():
    k.motor(0, DRIVE_SPEED)
    k.motor(3, DRIVE_SPEED)
    k.msleep(1000)
    k.ao()

def main():
    global x_position, y_position  # tells Python: change the stored values above, not a new local copy

    drive_forward()                # move the robot one step forward
    y_position = y_position + 1    # update memory: we moved +1 in y

    drive_forward()                # move again
    y_position = y_position + 1    # update memory again

    # Show what the robot has stored about where it is now
    print(f"x = {x_position}, y = {y_position}")

main()
{{< /code >}}

### Run It — Measure the Real Distance

Your program drives the same way every time, so it should travel the same distance every time. Let's find out if it really does. Line the robot up against a wall at the start. Run the program **5 times**. After each run, measure the **exact distance from the wall** to the front of the robot, in inches.

{{% callout title="How to use this table" variant="navy" %}}
Trial 1 is your **expected distance** — the first result you got. For trials 2–5, write the measured distance, then the difference from Trial 1 (how far off it was). A difference of 0 means it matched exactly.
{{% /callout %}}

{{< gridtable >}}
columns:
  - head: Trial
    width: 14%
  - head: Measured distance from wall (inches)
    width: 43%
  - head: Difference from Trial 1 (inches)
rows:
  - - text: 1 (expected)
    - key: p4_trial1_dist
      aria: Trial 1 distance
    - text: 0 (this is the baseline)
  - - text: "2"
    - key: p4_trial2_dist
      aria: Trial 2 distance
    - key: p4_trial2_diff
      aria: Trial 2 difference
  - - text: "3"
    - key: p4_trial3_dist
      aria: Trial 3 distance
    - key: p4_trial3_diff
      aria: Trial 3 difference
  - - text: "4"
    - key: p4_trial4_dist
      aria: Trial 4 distance
    - key: p4_trial4_diff
      aria: Trial 4 difference
  - - text: "5"
    - key: p4_trial5_dist
      aria: Trial 5 distance
    - key: p4_trial5_diff
      aria: Trial 5 difference
{{< /gridtable >}}

{{< ask key="p4_variation_observed" label="Variation observed" >}}Did all 5 trials travel the exact same distance? What was the biggest difference you measured between any two trials?{{< /ask >}}

{{< ask key="p4_memory_vs_reality" label="Memory versus real measurement" >}}Your robot stored `y = 2` in memory every single run — its memory said the same thing each time. But the real distance changed. What does that tell you about trusting stored numbers over real measurement?{{< /ask >}}

{{< ask key="p4_why_variation" label="Why variation happens" >}}Why might the same program drive a slightly different distance each time? List as many reasons as you can think of.{{< /ask >}}

### [[CHECKLIST|Checklist]]

- Both position variables are set to `0` before `main()` does anything
- There is one update line for each `drive_forward()`
- The update uses `y_position = y_position + 1` (the variable on both sides)
- You lined the robot up at the same starting spot for all 5 trials
- You measured to the same point on the robot each time (its front edge)

## Phase 5 — Debug

Memory bugs are sneaky: the robot moves perfectly, but its stored position is wrong. The wheels and the memory got out of sync. The program runs with no error — the numbers just don't match reality.

{{% callout title="The most common memory bugs" variant="gold" %}}
**Forgot to update:** the robot drove but you didn't add to `y_position`. It moved in real life but not in memory.

**Updated twice:** two update lines for one move means the memory counts a step that never happened.

**Never set the zero:** if you don't start the variables at 0, every stored number is off from the very first move.
{{% /callout %}}

### [[DEBUGGING|Debugging]] Log

{{< repeattable count=4 prefix="debug" >}}
- kind: number
  head: "Try"
  width: "8%"
- head: Stored number that was wrong
  key: wrong
  width: 34%
- head: Why (your best guess)
  key: why
  width: 28%
- head: How you fixed it
  key: fix
{{< /repeattable >}}

{{< ask key="p5_bug" label="Memory mismatch description" >}}Describe one time your robot's stored position did not match where it really was. What caused the mismatch?{{< /ask >}}

## Phase 6 — Connect: The AI Literacy Bridge

{{% callout title="Big Idea 4 — AI Literacy Thread" %}}
Intelligent systems build and update models of the world using data.
{{% /callout %}}

Your robot built a tiny model of the world — two numbers that say where it is. Every move, it updated that model. Big intelligent systems do exactly this at a huge scale: a delivery app stores where every driver is and updates it constantly; a game stores where every character is; a self-driving car keeps a live model of every nearby vehicle. The system acts on its stored model — so when the model is wrong, the system is wrong, even if every other part works perfectly.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_delivery_drift" label="Delivery app drift" >}}A delivery app shows your driver two streets away, but they are actually at your door. The app's stored model is wrong. List two things that could have caused the stored position to drift from reality.{{< /ask >}}

{{< ask key="p6_danger_trust" label="Danger of trusting stored data" >}}Your robot never "sees" the field — it only trusts its stored numbers. What is the danger of acting on stored information without ever checking it against the real world?{{< /ask >}}

{{< ask key="p6_why_zero_matters" label="Why the zero matters" >}}Why does setting a correct zero at the start matter so much? Connect it to the idea that everything the system stores afterward is measured from that origin.{{< /ask >}}

## Phase 7 — Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_store" label="Reflection 1" n=1 >}}What does it mean for a program to "store" information? Use the word *variable* in your answer.{{< /ask >}}

{{< ask key="p7_q2_update" label="Reflection 2" n=2 >}}Explain what `y_position = y_position + 1` does, step by step, as if teaching a classmate.{{< /ask >}}

{{< ask key="p7_q3_origin" label="Reflection 3" n=3 >}}Why must you set the origin to zero *before* the robot moves? What goes wrong if you don't?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete this in 2–3 sentences: "Intelligent systems build and update models of the world using data. This means that when a system's stored model is wrong..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A — Track X Too

- Add a sideways move and update `x_position` the same way you updated `y_position`.
- Trace the new path by hand first: what (x, y) should the robot store at the end?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B — Going Backward

- If driving forward adds 1 to `y_position`, what should driving backward do to it?
- Write the update line for a backward move, then test that the stored number goes the right direction.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C — Bigger Steps

- What if one `drive_forward()` actually covers 2 grid squares, not 1? Change your update line to match.
- Why is it important that the number you add matches what the robot really does?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D — Print After Every Move

- Add a `print()` line after each update so you can watch the stored position change step by step.
- How does seeing the memory update after every move help you find a mistake faster?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E — Counting Like a Computer

- Every number your robot stores is actually just 1s and 0s in memory — binary. Convert the number 13 to binary by hand (hint: which powers of 2 add up to 13?).
- Python variables can, in theory, store infinitely large numbers. What do you think would actually happen if you tried to keep growing a variable forever?

{{< answer key="ext_e" label="Extension E" >}}
