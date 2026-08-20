---
title: "Unit 4 · Big Idea 3 — The Turn Model"
short_title: "Python 4.3"
hub_unit: 4
description: "strings and len(), for loops, and Boolean returns — build one Turn(direction, angle) function from a ticks_per_degree model."
weight: 210
nav: python
track: python
type: labs
mission_id: unit4_bigidea3
eyebrow: "Unit 4 · Big Idea 3"
heading: "The Turn Model"
subheading: "Student Lab · Turn Any Angle, in Either Direction"
credit: "KIPR · Botball Explorer · Unit 4 Big Idea 3 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine know where it is and where it is going?"
  - term: "Big Idea"
    definition: "One Smart [[FUNCTION|Function]] Can Handle Many Cases"
  - term: "AI Literacy Thread"
    definition: "Models are best-fit approximations — never perfect, but good enough to act on."
  - term: "CS1 Concepts"
    definition: "[[STRING|Strings]] and len() · [[FOR LOOP|for loops]] · Multiple [[PARAMETER|Parameters]] · [[RETURN VALUE|Return Values]] · Defensive Code"
  - term: "Game Context"
    definition: "One Turn function for every angle your missions need"
  - term: "What You Need"
    definition: "Explorer robot · open floor · protractor or angle marks · this lab sheet"
---

## Overview

Your turns right now are stuck at 90°. But missions need all kinds of angles --- 45°, 180°, whatever the field demands. Today you'll build one flexible function, `Turn`, that takes a **direction** and an **angle** and handles them all. Along the way you'll meet four new tools: a new [[VARIABLE|variable]] type for letters, a new kind of loop, functions that take more than one input, and functions that hand a value back. And you'll discover something real engineers live with every day: a [[MODEL|model]] is never perfect --- it's the best fit you can find.

{{< callout title="Core Insight" >}}
A model like "[[TICK|ticks]] per degree" lets one function turn *any* angle. But the real world fights back --- [[INERTIA|inertia]] and friction mean no single number is perfect. You find the one that fits *best*.
{{< /callout >}}

### By the end of this activity you will be able to:

- Use `len()` to confirm a string is exactly one letter long.
- Use a `for` loop to repeat an action a set number of times.
- Write a function that takes two parameters and *returns* a value.
- Build a `ticks_per_degree` model and a flexible `Turn` function.
{.obj}

## Phase 1 --- New Tool: Checking Length With len()

{{< concept "A string can hold any number of letters --- including just one" >}}
- text: |
    Python doesn't have a separate type for "one letter" --- a single character is just a string that happens to be one letter long:
- code: |
    direction = 'R'   # a string, one letter long
- text: |
    This is perfect for telling the robot which way to turn: `'R'` for right, `'L'` for left. But because Python doesn't enforce a length for you, nothing stops someone from typing `'Right'` by mistake --- so you need a way to check.
{{< /concept >}}

{{< concept "len() tells you how many characters are in a string" >}}
- text: |
    `len()` returns the number of characters in a string. Use it to *confirm* you actually got a single letter before you trust it:
- code: |
    print(len('R'))        # 1
    print(len('Right'))    # 5
    print(len('R') == 1)   # True confirms that this is a single letter.
- text: |
    And remember: `'R'` and `'r'` are still *different* strings to the computer --- capitalization matters.
{{< /concept >}}

{{< ask key="p1_char" label="len() meaning" >}}What does `len()` tell you about a string? Why is checking `len(direction) == 1` a useful safeguard when Python doesn't have a separate type just for single letters?{{< /ask >}}

## Phase 2 --- New Tool: The for Loop

{{< concept "A for loop repeats a set number of times" >}}
- text: |
    You've used [[WHILE LOOP|while loops]] that run until something changes. A `for` loop with `range()` is for when you know *exactly how many times* to repeat. It counts for you:
- code: |
    for i in range(4):   # run 4 times: i = 0, 1, 2, 3
        # ...do this each time...
- text: |
    `range(4)` counts **0, 1, 2, 3** --- four values, even though it stops before reaching 4. Each time through, `i` holds the next number, and the loop keeps going until `range()` runs out.
{{< /concept >}}

{{< ask key="p2_for" label="for loop" >}}How is a `for` loop different from the `while` loops you've used? When would you reach for a `for` loop instead?{{< /ask >}}

## Phase 3 --- Calibrate: Find ticks_per_degree

Just like `ticks_per_inch` told you ticks-to-inches, you now need **ticks_per_degree**: how many [[ENCODER|encoder]] ticks make one degree of turning. The clever way to measure it: make the robot spin all the way around --- a full **360°** --- counting ticks, then divide.

{{< calc title="The turning model" >}}
- formula: "ticks_per_degree = total ticks for a full spin ÷ 360"
{{< /calc >}}

Here's where the `for` loop shines. A full 360° spin can be built three different ways --- and they should all equal 360°:

{{< gridtable >}}
columns:
  - head: ""
    width: 10%
  - head: The for loop
    width: 45%
  - head: Total turn
rows:
  - - text: A
    - text: "for i in range(4) → 90° each"
    - text: "4 × 90° = 360°"
  - - text: B
    - text: "for i in range(8) → 45° each"
    - text: "8 × 45° = 360°"
  - - text: C
    - text: "for i in range(2) → 180° each"
    - text: "2 × 180° = 360°"
{{< /gridtable >}}

{{< concept "A test spin built with a for loop (uses mav)" >}}
- text: |
    This example pivots in chunks using a `for` loop. Notice it uses **`mav`**, not `motor` --- [[VELOCITY|velocity]] control is smoother for turning. Use a **slow** speed so the robot doesn't [[OVERSHOOT|overshoot]] from its own momentum.
- code: |
    k.cmpc(0)                         # clear the counter once, before the spin
    for i in range(4):                # Four chunks make one full 360-degree spin.
        target = (i + 1) * CHUNK_TICKS   # how far we should be after this chunk
        while k.gmpc(0) < target:
            k.mav(0, 300)              # Use a SLOW velocity while the left wheel moves forward.
            k.mav(3, -300)             # right wheel backward (pivot right)
            k.msleep(10)
    k.motor(0,0); k.motor(3,0); k.msleep(50)   # brake-settle
    print(f"total ticks = {k.gmpc(0)}")
- text: |
    Run all three versions (A, B, C). After each full spin, read the total ticks and compute `ticks_per_degree`. Mark the robot's start so you can see how close it lands to a true 360°.
{{< /concept >}}

### [[CALIBRATION|Calibration]] Data

{{< gridtable caption="Run each version --- all should be 360°" >}}
columns:
  - head: Version
    width: 34%
  - head: Total ticks for 360°
    width: 33%
  - head: "ticks ÷ 360 = ticks_per_degree"
rows:
  - - text: "A --- four 90° turns"
    - key: cal_a_ticks
    - key: cal_a_tpd
  - - text: "B --- eight 45° turns"
    - key: cal_b_ticks
    - key: cal_b_tpd
  - - text: "C --- two 180° turns"
    - key: cal_c_ticks
    - key: cal_c_tpd
{{< /gridtable >}}

{{< callout title="They won't perfectly agree --- and that's the lesson" variant="gold" >}}
You'll find it's *incredibly hard* to make all three land on a perfect 360°. Every time the robot starts and stops a chunk, **inertia** carries it a little extra, and friction varies. More chunks (eight 45s) means more start-stops and more error pile-up. There is no single perfect `ticks_per_degree` --- your job is to find the value that fits your robot **best across the cases you care about**.
{{< /callout >}}

{{< ask key="p3_disagree" label="Why they disagree" >}}Did your three `ticks_per_degree` values come out the same? Why might the eight-turn version (B) drift more than the two-turn version (C)?{{< /ask >}}

{{< ask key="p3_chosen" label="Chosen model" >}}Which `ticks_per_degree` value will you use as your model, and why did you pick it?{{< /ask >}}

## Phase 4 --- Build: The Turn Function

Now build `Turn` --- and it introduces two more new ideas at once: it takes **two parameters** (a direction and an angle), and it **returns a value** to report whether it worked.

{{< concept "Two parameters, two different types" >}}
- text: |
    Until now your functions took one input (or none). In `def Turn(direction, angle):`, `direction` and `angle` are the two named parameters. In each call below, values such as `'R'` and `90.0` are the arguments supplied to those parameters:
- code: |
    Turn('R', 90.0)    # turn right 90 degrees
    Turn('L', 45.0)    # turn left 45 degrees
{{< /concept >}}

{{< concept "A function that returns True or False for success or failure" >}}
- text: |
    Every function you've built so far hasn't handed anything back. `Turn` is different: it **returns** a value that reports what happened. Python has a real type for exactly this --- **[[BOOLEAN|Booleans]]**, which are just `True` and `False`. We'll return `True` for success and `False` for failure (a bad direction). `return` also *immediately exits* the function --- so a bad input never reaches the turning code.
{{< /concept >}}

{{< concept "Defensive: forgive upper OR lower case" >}}
- text: |
    A good function is easy to use and hard to break. Instead of demanding a capital `'R'`, accept either case with the **OR** keyword `or` --- true if *either* side is true. That way a user who types `'r'` still succeeds --- one less thing to remember.
- code: |
    if direction == 'R' or direction == 'r':   # either capital or lowercase
{{< /concept >}}

{{< code >}}

#!/usr/bin/python3

# Unit 4, Big Idea 3: The Turn Model

# Name: _______________________   Date: ___________

import os, sys
sys.path.append("/usr/lib")
import _kipr as k
from @@yourname@@ import *

ticks_per_degree = @@____@@   # YOUR best value from Phase 3

def main():
    Turn('R', 90.0)      # right 90
    Turn('l', 45.0)      # Turn left 45 degrees. Lowercase works too!

def Turn(direction, angle):
    if len(direction) != 1:                          # defensive: must be a single letter
        print("Invalid direction! Use 'R' or 'L'.")
        return False                                  # report FAILURE and stop here

    ticks = round(angle * ticks_per_degree)   # PREDICT ticks from the model

    if direction == 'R' or direction == 'r':      # RIGHT (either case)
        k.cmpc(0)                                 # right pivot watches left wheel
        while k.gmpc(0) < ticks:
            k.mav(0, 300)                          # slow velocity, left forward
            k.mav(3, -300)                         # right backward
            k.msleep(10)
    elif direction == 'L' or direction == 'l':    # LEFT (either case)
        k.cmpc(1)                                 # left pivot watches right wheel
        while k.gmpc(1) < ticks:
            k.mav(0, -300)
            k.mav(3, 300)
            k.msleep(10)
    else:                                          # Any value other than R/r or L/l is invalid input.
        print("Invalid direction! Use 'R' or 'L'.")
        return False                                # report FAILURE and stop here

    k.motor(0, 0); k.motor(3, 0); k.msleep(50)      # brake-settle (your usual stop)
    return True                                     # report SUCCESS

main()
{{< /code >}}

{{< ask key="p4_defensive_test" label="Defensive test" >}}Test `Turn('R', 90.0)` and `Turn('l', 90.0)`. Did both work, even with the lowercase L? Why does accepting both cases make your function easier for someone else to use?{{< /ask >}}

{{< ask key="p4_bad_input" label="Bad input test" >}}Now try a bad input like `Turn('X', 90.0)`. What did the robot do, what got printed, and what did the function return?{{< /ask >}}

## Phase 5 --- Test Your Model on Real Angles

Your model should now turn any angle. Test a range, both directions, and measure how close each lands. Remember: it's a best-fit, so expect small errors --- especially on bigger angles.

{{< gridtable caption="Ask for an angle, measure what you got" >}}
columns:
  - head: Try
    width: 10%
  - head: Turn call
    width: 34%
  - head: Actual angle turned (degrees)
rows:
  - - text: "1"
    - text: "Turn('R', 90.0)"
    - key: ang_t1
  - - text: "2"
    - text: "Turn('L', 45.0)"
    - key: ang_t2
  - - text: "3"
    - key: ang_t3_call
    - key: ang_t3_act
  - - text: "4"
    - key: ang_t4_call
    - key: ang_t4_act
{{< /gridtable >}}

{{< ask key="p5_accuracy" label="Angle accuracy" >}}How close were your turns to the angles you asked for? Were small angles or big angles more accurate? Why might that be?{{< /ask >}}

## Phase 6 --- Add to [[LIBRARY|Library]] & Connect

Add `ticks_per_degree` and your `Turn` function to your library. Now any mission can turn any angle, either direction, with one readable call --- and you can retire the old fixed 90° turns.

{{< callout title="AI Literacy Thread" >}}
Models are best-fit approximations --- never perfect, but good enough to act on.
{{< /callout >}}

Your three calibration runs disagreed, and no single `ticks_per_degree` was perfect. That's not failure --- that's how models work everywhere in AI. A weather model, a self-driving car's physics, a language model's predictions: none are exactly right. They're the *best fit* to messy real-world data, good enough to act on while never being flawless. The skill isn't finding a perfect model --- it's finding one that fits well enough and knowing its limits.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_bestfit" label="Best fit" >}}Why is it impossible to find one `ticks_per_degree` that turns every angle perfectly? Connect this to why real AI models are never 100% accurate.{{< /ask >}}

{{< ask key="p6_return" label="Return value use" >}}Your `Turn` function returns `True` for success and `False` for failure. Why is it useful for a function to report back whether it worked?{{< /ask >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_char" label="Reflection 1" n=1 >}}Why doesn't Python need a separate type just for single letters, and what does `len(direction) == 1` check for that Python won't guarantee on its own?{{< /ask >}}

{{< ask key="p7_q2_for" label="Reflection 2" n=2 >}}Explain the three parts of a `for` loop, using your calibration spin as the example.{{< /ask >}}

{{< ask key="p7_q3_function" label="Reflection 3" n=3 >}}Your `Turn` takes two parameters and returns a value. What are the two inputs, and what does the return value tell you?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete in 2--3 sentences: "Models are best-fit approximations, never perfect. This means that when my robot turns, I should expect..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Slow vs. Fast

- Recalibrate at a faster `mav` speed. Does the robot overshoot more from inertia? How does that change your best `ticks_per_degree`?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- A Full Circle Test

- Use a `for` loop to call `Turn('R', 90.0)` four times. Does the robot return to its start? Compare to your old fixed turns.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Check the Return Value

- Store the return: `ok = Turn('X', 90.0)` then [[PRINT|print]] whether it succeeded. How could a mission use that to react to a failed turn?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Retire the Old Turns

- Find an old program that used `turn_left()`/`turn_right()` and replace them with `Turn`. Is the new version easier to read and change?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E --- The Recursive Version

- Extension B used a `for` loop to call `Turn('R', 90.0)` four times. A **recursive** function could do the same thing by calling itself: a function that turns once, then calls itself again with one fewer turn remaining, until it hits zero.
- Sketch (in words or [[PSEUDOCODE|pseudocode]]) what that recursive version would look like. Why might a loop be the more natural choice than recursion for this particular task?

{{< answer key="ext_e" label="Extension E" >}}
