---
title: "Unit 4 · Big Idea 3 — The Turn Model"
short_title: "Lab 4.3"
weight: 210
nav: labs
track: c
mission_id: unit4_bigidea3
eyebrow: "Unit 4 · Big Idea 3"
heading: "The Turn Model"
subheading: "Student Lab · Turn Any Angle, in Either Direction"
credit: "KIPR · Botball Explorer · Unit 4 Big Idea 3 — Student Lab"
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine know where it is and where it is going?"
  - term: "Big Idea"
    definition: "One Smart [[FUNCTION|Function]] Can Handle Many Cases"
  - term: "AI Literacy Thread"
    definition: "Models are best-fit approximations — never perfect, but good enough to act on."
  - term: "CS1 Concepts"
    definition: "char Type · [[FOR LOOP|for loops]] · Multiple [[PARAMETER|Parameters]] · [[RETURN VALUE|Return Values]] · Defensive Code"
  - term: "Game Context"
    definition: "One Turn function for every angle your missions need"
  - term: "What You Need"
    definition: "Explorer robot · open floor · protractor or angle marks · this lab sheet"
---

## Overview

Your turns right now are stuck at 90°. But missions need all kinds of angles — 45°, 180°, whatever the field demands. Today you'll build one flexible function, `Turn`, that takes a **direction** and an **angle** and handles them all. Along the way you'll meet four new tools: a new [[VARIABLE|variable]] type for letters, a new kind of loop, functions that take more than one input, and functions that hand a value back. And you'll discover something real engineers live with every day: a model is never perfect — it's the best fit you can find.

{{% callout title="Core Insight" %}}
A model like "[[TICK|ticks]] per degree" lets one function turn *any* angle. But the real world fights back — [[INERTIA|inertia]] and friction mean no single number is perfect. You find the one that fits *best*.
{{% /callout %}}

### By the end of this activity you will be able to:

- Use a `char` to store a single letter like `'R'` or `'L'`.
- Use a `for` loop to repeat an action a set number of times.
- Write a function that takes two parameters and *returns* a value.
- Build a `ticks_per_degree` model and a flexible `Turn` function.
{.obj}

## Phase 1 — New Tool: The char Type

{{< concept "A char holds one single character" >}}
- text: |
    You've used `int` and `double` for numbers. A `char` holds a single **character** — one letter, written in **single quotes**:
- code: |
    char direction = 'R';   // one character, in SINGLE quotes
- text: |
    This is perfect for telling the robot which way to turn: `'R'` for right, `'L'` for left.
{{< /concept >}}

{{% callout title="Single quotes, not double" variant="navy" %}}
`'R'` (single quotes) is a `char` — one character. `"R"` (double quotes) is a *[[STRING|string]]* — a whole different, more complicated type. For one letter, always use single quotes. And remember: `'R'` and `'r'` are *different* characters to the computer.
{{% /callout %}}

{{< ask key="p1_char" label="char meaning" >}}What is a `char`, and how is `'R'` different from `"R"`? Why is a `char` a good fit for a turn direction?{{< /ask >}}

## Phase 2 — New Tool: The for Loop

{{< concept "A for loop repeats a set number of times" >}}
- text: |
    You've used `while` loops that run until something changes. A `for` loop is for when you know *exactly how many times* to repeat. It counts for you:
- code: |
    for (int i = 0; i < 4; i++) {   // run 4 times: i = 0, 1, 2, 3
        // ...do this each time...
    }
- text: |
    Three parts in the parentheses: **start** (`int i = 0`), **keep going while** (`i < 4`), and **each time, do this** (`i++`, which adds 1 to `i`). When `i` reaches 4, it stops — so the body ran exactly 4 times.
{{< /concept >}}

{{< ask key="p2_for" label="for loop" >}}How is a `for` loop different from the `while` loops you've used? When would you reach for a `for` loop instead?{{< /ask >}}

## Phase 3 — Calibrate: Find ticks_per_degree

Just like `ticks_per_inch` told you ticks-to-inches, you now need **ticks_per_degree**: how many [[ENCODER|encoder]] ticks make one degree of turning. The clever way to measure it: make the robot spin all the way around — a full **360°** — counting ticks, then divide.

{{< calc title="The turning model" >}}
- formula: "ticks_per_degree = total ticks for a full spin ÷ 360"
{{< /calc >}}

Here's where the `for` loop shines. A full 360° spin can be built three different ways — and they should all equal 360°:

{{< gridtable >}}
columns:
  - head: ""
    width: 10%
  - head: The for loop
    width: 45%
  - head: Total turn
rows:
  - - num: A
    - seedmono: "for (i=0; i<4; i++) → 90° each"
    - seed: "4 × 90° = 360°"
  - - num: B
    - seedmono: "for (i=0; i<8; i++) → 45° each"
    - seed: "8 × 45° = 360°"
  - - num: C
    - seedmono: "for (i=0; i<2; i++) → 180° each"
    - seed: "2 × 180° = 360°"
{{< /gridtable >}}

{{< concept "A test spin built with a for loop (uses mav)" >}}
- text: |
    This example pivots in chunks using a `for` loop. Notice it uses **`mav`**, not `motor` — [[VELOCITY|velocity]] control is smoother for turning. Use a **slow** speed so the robot doesn't [[OVERSHOOT|overshoot]] from its own momentum.
- code: |
    cmpc(0);                          // clear the counter once, before the spin
    for (int i = 0; i < 4; i++) {     // four chunks = one full 360 degree spin
        long target = (i + 1) * CHUNK_TICKS;   // how far we should be after this chunk
        while (gmpc(0) < target) {
            mav(0, 300);              // SLOW velocity: left wheel forward
            mav(1, -300);             // right wheel backward (pivot right)
        }
    }
    motor(0,0); motor(1,0); msleep(50);   // brake-settle
    printf("total ticks = %d\n", gmpc(0));
- text: |
    Run all three versions (A, B, C). After each full spin, read the total ticks and compute `ticks_per_degree`. Mark the robot's start so you can see how close it lands to a true 360°.
{{< /concept >}}

### [[CALIBRATION|Calibration]] Data

{{< gridtable caption="Run each version — all should be 360°" >}}
columns:
  - head: Version
    width: 34%
  - head: Total ticks for 360°
    width: 33%
  - head: "ticks ÷ 360 = ticks_per_degree"
rows:
  - - seed: "A — four 90° turns"
    - key: cal_a_ticks
    - key: cal_a_tpd
  - - seed: "B — eight 45° turns"
    - key: cal_b_ticks
    - key: cal_b_tpd
  - - seed: "C — two 180° turns"
    - key: cal_c_ticks
    - key: cal_c_tpd
{{< /gridtable >}}

{{% callout title="They won't perfectly agree — and that's the lesson" variant="gold" %}}
You'll find it's *incredibly hard* to make all three land on a perfect 360°. Every time the robot starts and stops a chunk, **inertia** carries it a little extra, and friction varies. More chunks (eight 45s) means more start-stops and more error pile-up. There is no single perfect `ticks_per_degree` — your job is to find the value that fits your robot **best across the cases you care about**.
{{% /callout %}}

{{< ask key="p3_disagree" label="Why they disagree" >}}Did your three `ticks_per_degree` values come out the same? Why might the eight-turn version (B) drift more than the two-turn version (C)?{{< /ask >}}

{{< ask key="p3_chosen" label="Chosen model" >}}Which `ticks_per_degree` value will you use as your model, and why did you pick it?{{< /ask >}}

## Phase 4 — Build: The Turn Function

Now build `Turn` — and it introduces two more new ideas at once: it takes **two parameters** (a `char` and a `double`), and it **returns a value** to report whether it worked.

{{< concept "Two parameters, two different types" >}}
- text: |
    Until now your functions took one input (or none). `Turn` takes two, separated by a comma — a direction *and* an angle:
- code: |
    Turn('R', 90.0);    // turn right 90 degrees
    Turn('L', 45.0);    // turn left 45 degrees
{{< /concept >}}

{{< concept "An int function that returns success or failure" >}}
- text: |
    Every function you've built has been `void` — it did something but handed nothing back. `Turn` is an `int` function: it **returns** a number that reports what happened. We'll use **1 for success** and **0 for failure** (a bad direction). `return` also *immediately exits* the function — so a bad input never reaches the turning code.
{{< /concept >}}

{{< concept "Defensive: forgive upper OR lower case" >}}
- text: |
    A good function is easy to use and hard to break. Instead of demanding a capital `'R'`, accept either case with the **OR** operator `||` — true if *either* side is true. That way a user who types `'r'` still succeeds — one less thing to remember.
- code: |
    if (direction == 'R' || direction == 'r') { // either capital or lowercase }
{{< /concept >}}

{{< code >}}
// Unit 4, Big Idea 3: The Turn Model
// Name: _______________________   Date: ___________

#include <kipr/wombat.h>
#include <@@yourname@@.h>

double ticks_per_degree = @@____@@;   // YOUR best value from Phase 3

int Turn(char direction, double angle);   // PROTOTYPE (note: returns an int)

int main() {
    Turn('R', 90.0);      // right 90
    Turn('l', 45.0);      // left 45: lowercase works too!
    return 0;
}

int Turn(char direction, double angle) {
    int ticks = angle * ticks_per_degree;   // PREDICT ticks from the model

    if (direction == 'R' || direction == 'r') {     // RIGHT (either case)
        cmpc(0);                                    // right pivot watches left wheel
        while (gmpc(0) < ticks) {
            mav(0, 300);                            // slow velocity, left forward
            mav(1, -300);                           // right backward
        }
    } else if (direction == 'L' || direction == 'l') {  // LEFT (either case)
        cmpc(1);                                    // left pivot watches right wheel
        while (gmpc(1) < ticks) {
            mav(0, -300);
            mav(1, 300);
        }
    } else {                                        // not R/r or L/l: bad input!
        printf("Invalid direction! Use 'R' or 'L'.\n");
        return 0;                                   // report FAILURE and stop here
    }

    motor(0, 0); motor(1, 0); msleep(50);           // brake-settle (your usual stop)
    return 1;                                       // report SUCCESS
}
{{< /code >}}

{{< ask key="p4_defensive_test" label="Defensive test" >}}Test `Turn('R', 90.0)` and `Turn('l', 90.0)`. Did both work, even with the lowercase L? Why does accepting both cases make your function easier for someone else to use?{{< /ask >}}

{{< ask key="p4_bad_input" label="Bad input test" >}}Now try a bad input like `Turn('X', 90.0)`. What did the robot do, what got printed, and what did the function return?{{< /ask >}}

## Phase 5 — Test Your Model on Real Angles

Your model should now turn any angle. Test a range, both directions, and measure how close each lands. Remember: it's a best-fit, so expect small errors — especially on bigger angles.

{{< gridtable caption="Ask for an angle, measure what you got" >}}
columns:
  - head: Try
    width: 10%
  - head: Turn call
    width: 34%
  - head: Actual angle turned (degrees)
rows:
  - - num: "1"
    - seed: "Turn('R', 90.0)"
    - key: ang_t1
  - - num: "2"
    - seed: "Turn('L', 45.0)"
    - key: ang_t2
  - - num: "3"
    - key: ang_t3_call
    - key: ang_t3_act
  - - num: "4"
    - key: ang_t4_call
    - key: ang_t4_act
{{< /gridtable >}}

{{< ask key="p5_accuracy" label="Angle accuracy" >}}How close were your turns to the angles you asked for? Were small angles or big angles more accurate? Why might that be?{{< /ask >}}

## Phase 6 — Add to [[LIBRARY|Library]] & Connect

Add `ticks_per_degree` and your `Turn` function to your library. Now any mission can turn any angle, either direction, with one readable call — and you can retire the old fixed 90° turns.

{{% callout title="AI Literacy Thread" %}}
Models are best-fit approximations — never perfect, but good enough to act on.
{{% /callout %}}

Your three calibration runs disagreed, and no single `ticks_per_degree` was perfect. That's not failure — that's how models work everywhere in AI. A weather model, a self-driving car's physics, a language model's predictions: none are exactly right. They're the *best fit* to messy real-world data, good enough to act on while never being flawless. The skill isn't finding a perfect model — it's finding one that fits well enough and knowing its limits.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_bestfit" label="Best fit" >}}Why is it impossible to find one `ticks_per_degree` that turns every angle perfectly? Connect this to why real AI models are never 100% accurate.{{< /ask >}}

{{< ask key="p6_return" label="Return value use" >}}Your `Turn` function returns 1 for success and 0 for failure. Why is it useful for a function to report back whether it worked?{{< /ask >}}

## Phase 7 — Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_char" label="Reflection 1" n=1 >}}What is a `char`, and why must `'R'` use single quotes?{{< /ask >}}

{{< ask key="p7_q2_for" label="Reflection 2" n=2 >}}Explain the three parts of a `for` loop, using your calibration spin as the example.{{< /ask >}}

{{< ask key="p7_q3_function" label="Reflection 3" n=3 >}}Your `Turn` takes two parameters and returns a value. What are the two inputs, and what does the return value tell you?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete in 2–3 sentences: "Models are best-fit approximations, never perfect. This means that when my robot turns, I should expect..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A — Slow vs. Fast

- Recalibrate at a faster `mav` speed. Does the robot overshoot more from inertia? How does that change your best `ticks_per_degree`?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B — A Full Circle Test

- Use a `for` loop to call `Turn('R', 90.0)` four times. Does the robot return to its start? Compare to your old fixed turns.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C — Check the Return Value

- Store the return: `int ok = Turn('X', 90.0);` then `printf` whether it succeeded. How could a mission use that to react to a failed turn?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D — Retire the Old Turns

- Find an old program that used `turn_left()`/`turn_right()` and replace them with `Turn`. Is the new version easier to read and change?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E — The Recursive Version

- Extension B used a `for` loop to call `Turn('R', 90.0)` four times. A **recursive** function could do the same thing by calling itself: a function that turns once, then calls itself again with one fewer turn remaining, until it hits zero.
- Sketch (in words or [[PSEUDOCODE|pseudocode]]) what that recursive version would look like. Why might a loop be the more natural choice than recursion for this particular task?

{{< answer key="ext_e" label="Extension E" >}}
