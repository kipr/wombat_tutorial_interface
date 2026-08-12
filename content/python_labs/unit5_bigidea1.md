---
title: "Unit 5 · Big Idea 1 — The Second Attempt"
short_title: "Python 5.1"
hub_unit: 5
description: "Lists and indexed state — track a believed pose (x, y, heading) and update it only at real reset checkpoints."
weight: 240
nav: python
track: python
type: labs
mission_id: unit5_bigidea1
eyebrow: "Unit 5 · Big Idea 1"
heading: "The Second Attempt"
subheading: "Student Lab · Tracking What the Robot Believes About Itself"
credit: "KIPR · Botball Explorer · Unit 5 Big Idea 1"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine operate reliably in an imperfect world?"
  - term: "Big Idea"
    definition: "Systems Must Handle Failure"
  - term: "AI Literacy Thread"
    definition: "A system can't catch its own failures unless it keeps track of what it believes about itself."
  - term: "CS1 Concepts"
    definition: "[[LIST|Lists]] · Indexed State · Helper [[FUNCTION|Functions]] · Conditional State Updates"
  - term: "Game Context"
    definition: "[[@7|Mission 7]] — deliver 2 orange + 2 blue poms to two different PVC [[ENCLOSURE|enclosures]]"
  - term: "What You Need"
    definition: "Explorer robot · full [[LIBRARY|library]] · 4 poms (2 orange, 2 blue) · two PVC enclosures · the game field · this lab sheet"
---

## Overview

The Long Run taught you that error piles up over a mission, and that square-ups and backward touches reset it back to zero. But here's a question those labs never asked: **how would the robot know it had drifted, if nobody ever wrote the number down?** A reset only helps if something is keeping track of what the robot currently believes about its own position. Today you build that something: a small [[LIST|list]] that holds your robot's **believed pose** --- its x, y, and heading --- and you update it honestly every time you get a real chance to check it against the truth.

{{< callout title="The Big Idea of This Unit" >}}
A system can't recognize failure it isn't tracking. Before a robot can debug itself, recover from a bad turn, or know its plan has gone wrong, it needs some internal record of where it thinks it is --- a record it can compare against reality.
{{< /callout >}}

### By the end of this activity you will be able to:

- Declare and use a small list to hold related values as one structure.
- Write helper functions that read and write specific elements of that list.
- Update believed position only at real, verified reset checkpoints.
- Explain why an untracked system can't tell the difference between success and failure.
{.obj}

## Phase 1 --- The Mission: Hazard Containment

{{< mission-summary mission="7" video=true >}}
{{< /mission-summary >}}

### What counts

- A pom counts as "in" an enclosure if any part of it crosses into the enclosure's interior, or it's [[TOUCHING]] the interior-facing surface.
- Base and Bonus must use **different** enclosures --- the field has three to choose from.
- A pom used for the Base Mission can't also be counted for the Bonus Mission.

{{< ask key="p1_restate" label="Restate mission" >}}Say the mission back in your own words. Which two enclosures will you use, and why did you pick those two (think about which is easier to reach first)?{{< /ask >}}

## Phase 2 --- Concept: Lists

{{< concept "What is a list?" >}}
- text: |
    So far, every value you've stored has had its own [[VARIABLE|variable]] name --- `score`, `ticks_per_inch`, `pin`. A **list** is what you use when you have several *related* values and giving each one a separate name would hide the fact that they belong together.
- code: |
    # Three separate variables work, but they are not obviously connected.
    x = 0.0
    y = 0.0
    heading = 0.0

    # One list stores three related values in one structure.
    pose = [0.0, 0.0, 0.0]
- text: |
    Think of `pose` as one locker-bank holding 3 numbered lockers. Locker `pose[0]`, locker `pose[1]`, locker `pose[2]` --- counting starts at **0**, so a 3-locker list's lockers are numbered 0 through 2, never 1 through 3. `pose[0] = 14.5` puts a value in locker 0, the exact same way you'd assign any variable. `pose[0]` on its own reads back whatever's currently in that locker.
{{< /concept >}}

{{< ask key="p2_list" label="List concept" >}}In your own words, what is a list? Why does grouping x, y, and heading into one `pose` list make more sense here than three separate variables?{{< /ask >}}

{{< concept "Naming an [[INDEX|index]]: ALL_CAPS is a promise, not a rule" >}}
- text: |
    A bare `pose[0]` doesn't say what it means. Give the index a name instead, so `pose[POSE_X]` reads exactly like what it is:
- code: |
    POSE_X = 0
    POSE_Y = 1
    POSE_R = 2   # R = heading, in degrees

    # now pose[POSE_X] means exactly what it says, instead of a bare, meaningless pose[0]
- text: |
    `POSE_X` is written in **ALL_CAPS** on purpose --- that's a Python convention meaning "treat this as a constant; don't reassign it." But notice it's still just a regular variable --- nothing in the language actually *stops* you from writing `POSE_X = 5` later and breaking everything that depends on it. The ALL_CAPS name is a promise you make to yourself and anyone reading your code, not a rule Python enforces for you.
{{< /concept >}}

{{< ask key="p2_define" label="ALL_CAPS concept" >}}What does writing a name in ALL_CAPS signal to someone reading your code? Since Python doesn't actually stop you from changing it, why write it that way at all?{{< /ask >}}

## Phase 3 --- Concept: Reading and Writing the Pose

{{< concept "Helper functions keep the list honest" >}}
- text: |
    Nothing stops you from writing `pose[POSE_X] = 14.0` directly anywhere in your code. But that gets messy fast and makes it easy to update the wrong slot by accident. Instead, write small helper functions that are the *only* places that touch the list directly.

    `initPose(x, y, r)` runs once, at the very top of `main()` --- before the robot moves. It sets your robot's **starting belief**. You'll determine this starting (x, y) by measuring where the **centerpoint between your two wheels** sits --- that's the exact point the robot pivots around during a zero-point turn, so it's the natural place to call "the robot's position."

    `setX(knownX)` and `setY(knownY)` are for later --- for the moments *during* the run when you get real evidence of where you are, not a guess.

    `printPose()` prints the current believed pose so you (and later, the robot) can inspect it.
{{< /concept >}}

{{< gridtable caption="Measure your robot's starting pose" >}}
columns:
  - head: What to measure
    width: 34%
  - head: Your value
rows:
  - - text: Distance from your reference wall to the wheel centerpoint (x, inches)
    - key: p3_startx
      aria: Start x
  - - text: Distance from your reference wall to the wheel centerpoint (y, inches)
    - key: p3_starty
      aria: Start y
  - - text: Starting heading, facing straight out of the box
    - text: "0.0° (by convention)"
{{< /gridtable >}}

{{< ask key="p3_initpose" label="initPose reasoning" >}}Why does it matter that `initPose` runs only *once*, before the robot ever moves --- what would go wrong if you called it again in the middle of the run?{{< /ask >}}

## Phase 4 --- Concept: Turn() Now Updates R Too

{{< concept "The [[RETURN VALUE|return value]] finally does something" >}}
- text: |
    Back in Unit 4, `Turn(direction, angle)` already returned `True` for success or `False` for an invalid direction --- but nothing in your code actually *used* that value. Today it matters: `Turn()` should only update `pose[POSE_R]` when the turn actually succeeds. A failed call shouldn't change what the robot believes about its own heading.
{{< /concept >}}

{{< resetbox title="Convention" >}}
Turning **left** increases heading (`pose[POSE_R] += degrees`); turning **right** decreases it (`pose[POSE_R] -= degrees`). Heading 0° faces straight out of the starting box. Stay consistent with this the whole run.
{{< /resetbox >}}

{{< code filename="yourname.py" >}}
def Turn(direction, angle):
    if direction == 'L' or direction == 'l':
        @@# ...existing tick-turn logic for a left turn...@@
        pose[POSE_R] += angle    # only on a real, successful turn
        return True
    elif direction == 'R' or direction == 'r':
        @@# ...existing tick-turn logic for a right turn...@@
        pose[POSE_R] -= angle
        return True
    else:
        print(f"Invalid direction: {direction}")
        return False                # No movement happened, so do not change the pose.
{{< /code >}}

{{< ask key="p4_turn" label="Turn and pose" >}}Why should a *failed* `Turn()` call leave `pose[POSE_R]` unchanged? What would happen to your believed heading if it updated R even on failure?{{< /ask >}}

## Phase 5 --- Plan: Legs, Resets, and Prints

Walk your path from the starting box to both enclosures. Mark every leg, whether a real reset (`back_until_pressed` or `square_up`) happens there, and whether you print the pose. You need **at least 2 resets** tied to a `setX`/`setY` call, and **5 total prints**: one right after `initPose`, then one after each of your 4 pom drop-offs.

{{< repeattable count=8 prefix="plan" caption="Plan each leg of the run" >}}
- kind: number
  head: "#"
  width: "8%"
- head: Leg (what the robot does)
  key: leg
  width: 40%
- head: Library call(s)
  key: call
  width: 20%
- head: Pose update
  key: reset
  width: 16%
  align: center
- head: Print pose?
  key: print
  align: center
{{< /repeattable >}}

{{< ask key="p5_resets" label="Reset placement" >}}Where did you place your 2 resets, and what known value did you set `x` or `y` to at each one? How did you know that value was actually true (not a guess)?{{< /ask >}}

## Phase 6 --- Build: The Run in main()

First add the pose list, the index names, and the helper functions to your library. Then write the run in `main()`, following your Phase 5 plan.

{{< code filename="yourname.py" >}}
POSE_X = 0
POSE_Y = 1
POSE_R = 2

pose = [0.0, 0.0, 0.0]   # These values represent the believed x, y, and heading.

def initPose(startX, startY, startR):
    pose[POSE_X] = startX
    pose[POSE_Y] = startY
    pose[POSE_R] = startR

def setX(knownX):
    pose[POSE_X] = knownX

def setY(knownY):
    pose[POSE_Y] = knownY

def printPose():
    print(f"Pose: x={pose[POSE_X]:.2f} y={pose[POSE_Y]:.2f} R={pose[POSE_R]:.2f}")
{{< /code >}}

{{< code filename="main.py" >}}

#!/usr/bin/python3

# Unit 5, Big Idea 1: The Second Attempt

# Name: _______________________   Date: ___________

import os, sys
sys.path.append("/usr/lib")
import _kipr as k
from @@yourname@@ import *     # your full library

def main():
    k.enable_servo(0)
    k.enable_servo(1)

    # ===== INITIALIZE BELIEF =====
    initPose(@@START_X@@, @@START_Y@@, 0.0)   # measured wheel-centerpoint, facing out
    printPose()                             # PRINT 1 reports the starting belief.

    # ===== VERIFY START =====
    back_until_pressed()       # backward touch against the wall
    setY(@@0.0@@)                  # RESET #1 records the known truth that y = 0 at this wall.

    # ===== LEG 1: pom 1 (orange) to Enclosure A =====
    @@# Drive(...) / Turn(...) to pom 1, pick it up@@
    @@# Drive(...) / Turn(...) to Enclosure A, drop it@@
    printPose()                 # PRINT 2 reports the pose after drop-off 1.

    # ===== LEG 2: Move pom 2 (blue) to Enclosure A. The Base Mission is complete. =====
    @@# Drive(...) / Turn(...) to pom 2, pick it up@@
    @@# Drive(...) / Turn(...) to Enclosure A, drop it@@
    printPose()                 # PRINT 3 reports the pose after drop-off 2.

    # ===== RESET before crossing to the second enclosure =====
    square_up()                 # known heading/position against a line
    setX(@@KNOWN_X@@)              # RESET #2 records the known truth from this square-up.

    # ===== LEG 3: pom 3 (orange) to Enclosure B =====
    @@# Drive(...) / Turn(...) to pom 3, pick it up@@
    @@# Drive(...) / Turn(...) to Enclosure B, drop it@@
    printPose()                 # PRINT 4 reports the pose after drop-off 3.

    # ===== LEG 4: Move pom 4 (blue) to Enclosure B. The Bonus Mission is complete. =====
    @@# Drive(...) / Turn(...) to pom 4, pick it up@@
    @@# Drive(...) / Turn(...) to Enclosure B, drop it@@
    printPose()                 # PRINT 5 reports the final belief.

main()
{{< /code >}}

{{< callout title="[[REQUIREMENT|Requirement]] check" variant="gold" >}}
2 orange + 2 blue poms delivered, split across **two different** PVC enclosures. `initPose` called once. At least **2 real resets** each paired with a `setX`/`setY` call. **5 total** `printPose()` calls. `Turn()` only updates `pose[POSE_R]` on success.
{{< /callout >}}

## Phase 7 --- Run It and Check the Belief Against Reality

Run the mission. Each time it prints a pose, pause and physically measure where the robot actually is. Compare the printed number to your measurement --- that gap is your robot's **drift**, and it's the first real evidence you've collected about where your model breaks down.

{{< repeattable count=5 prefix="drift" caption="Compare believed pose to measured pose, at each print" >}}
- kind: number
  head: "Print #"
  width: "14%"
- head: Printed pose (x, y, R)
  key: printed
  width: 28%
- head: Measured pose (x, y, R)
  key: measured
  width: 28%
- head: Gap / likely cause
  key: cause
{{< /repeattable >}}

{{< ask key="p7_drift" label="Drift analysis" >}}Where was the gap biggest? Was it right after a reset, or right before the next one? What does that tell you about where error was actually coming from --- a bad turn, a drive distance being off, or something else?{{< /ask >}}

## Phase 8 --- Connect & Reflect

{{< callout title="AI Literacy Thread" >}}
A system can't catch its own failures unless it keeps track of what it believes about itself.
{{< /callout >}}

Every intelligent system that operates reliably keeps some version of what you built today: a running record of its own believed state, updated honestly at moments of real evidence and left alone otherwise. A GPS-guided drone tracks believed position between satellite fixes. A robot vacuum tracks believed position between wall bumps. None of them are ever perfectly right --- but because they keep the number written down, they can catch the moment it drifts too far, and that is the very first requirement for [[DEBUGGING|debugging]] a failure at all: you have to know what you expected before you can recognize that something went wrong.

Complete the reflection on your own.
{.muted}

{{< namebar >}}

{{< ask key="p8_q1_list" label="Reflection 1" n=1 >}}What is a list, and why did grouping x, y, and R into `pose` make more sense than three separate variables?{{< /ask >}}

{{< ask key="p8_q2_setters" label="Reflection 2" n=2 >}}Why should `setX`/`setY` only ever be called right after a real reset (a square-up or backward touch), never as a guess?{{< /ask >}}

{{< ask key="p8_q3_return" label="Reflection 3" n=3 >}}How did making `Turn()`'s return value actually matter (updating R only on success) connect back to what you learned about return values in Unit 4?{{< /ask >}}

{{< ask key="p8_q4_complete" label="Reflection 4" n=4 >}}Complete in 2--3 sentences: "A system can't recognize its own failure unless it keeps track of what it believes about itself. This means that before a robot can debug or recover from a mistake, it must first..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- A Third Enclosure

- Could your pose list help you plan a path to a *third* PVC enclosure too? Sketch how you'd extend the run, including where a new reset would go.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Detect the Failure, Don't Just Log It

- Right now you compare printed vs. measured pose by hand. Sketch (in words, not code) how a program could compare two pose values itself and decide "that's too far off --- something failed."

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- A Fourth List Slot

- If you added a 4th slot to track something else about the robot's state during this run (battery voltage, pom count carried, elapsed time), what would you add, and why would it help catch a failure?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Chart the Drift

- Sketch a simple bar chart (or line chart) of the 5 gap sizes from your Phase 7 table, one bar per checkpoint.
- Which checkpoint had the least drift? Does the chart make the pattern easier to see than the table did?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E --- Bundled Like an Object

- Python supports bundling data with the functions that use it through a feature called a **class** --- beyond what this course covers, but worth knowing it exists. Your `pose` list plus its helper functions (`initPose`, `setX`, `setY`, `printPose`) would likely be bundled together into one `Pose` object --- the data and the functions that use it, packaged as a single unit. This idea is called **encapsulation**.
- What's one advantage of bundling `pose` with its own functions into one object, instead of keeping the list and the functions separate the way we did?

{{< answer key="ext_e" label="Extension E" >}}

### Extension F --- Lists Are Already Passed by Reference

- Right now, `printPose()` and friends reach out and grab the global `pose` list directly. Try rewriting `printPose` to instead take the list as a [[PARAMETER|parameter]]: `def printPose(p):` called as `printPose(pose)`. Python passes the list itself --- the function works with the exact same list in memory, not a copy. You didn't have to ask for that; it's just how Python handles lists.
- Now compare: if a function took a plain number instead (`def addOne(n): n = n + 1`) and you called it with a variable, would the caller's variable change? Try it. Why does a list behave differently from a plain number when you pass it into a function?

{{< answer key="ext_f" label="Extension F" >}}

### Extension G --- Write the Guide

- Imagine a teammate's robot is drifting a lot more than yours. Using what you learned in Phase 7, write a short troubleshooting guide (3-4 steps) they could follow to find out why --- without you being there to help directly.

{{< answer key="ext_g" label="Extension G" >}}
