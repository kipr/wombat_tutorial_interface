---
title: "Unit 4 · Big Idea 4 — Keeping Score"
short_title: "Lab 4.4"
hub_unit: 4
description: "Accumulating state and printf logging — a full red-cube run that stacks, docks, and tracks its own points."
weight: 220
nav: labs
track: c
mission_id: unit4_bigidea4
eyebrow: "Unit 4 · Big Idea 4"
heading: "Keeping Score"
subheading: "Student Lab · A Full Red-Cube Run That Tracks Its Own Points"
credit: "KIPR · Botball Explorer · Unit 4 Big Idea 4 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine know where it is and where it is going?"
  - term: "Big Idea"
    definition: "A Program Can Track Its Own Progress"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems track their own [[STATE|state]] and report what they have done."
  - term: "CS1 Concepts"
    definition: "Accumulating [[VARIABLE|Variables]] · State · printf Logging · Integration"
  - term: "Game Context"
    definition: "Stack the red cubes, then dock the [[PALLET|pallet]] — scoring as you go"
  - term: "What You Need"
    definition: "Explorer robot · your full [[LIBRARY|library]] · red cubes · pallet · dock · this lab sheet"
---

## Overview

Time to bring it *all* together. You'll write a complete red-cube run that drives, squares up, stacks cubes, and docks the pallet --- using every major tool in your library. But this run does something new: it **keeps its own score**. After each point-scoring maneuver, the program adds the points to a running total and **prints a report** of what it just did and where the score stands. By the end, your robot narrates its own competition run.

{{< callout title="Core Insight" >}}
A single variable can hold a running total that grows as the program runs. Printing it after each step turns your robot into something that reports its own progress --- exactly how real systems keep track of what they've accomplished.
{{< /callout >}}

### By the end of this activity you will be able to:

- Use an `int` variable to accumulate a running score.
- Print a status report with `printf` after each maneuver.
- Combine your whole library into one complete scored run.
- Read the real Botball point values for the maneuvers you complete.
{.obj}

{{< callout title="Every one of these must appear in your run" variant="navy" >}}
`back_until_pressed()` · `square_up()` · `Drive()` · `Turn()` · `move_arm()` · `move_claw()` --- your full toolbox, working together.
{{< /callout >}}

## Phase 1 --- Concept: A Variable That Remembers

{{< concept "An accumulating variable holds a running total" >}}
- text: |
    You've used variables to store fixed values. Now you'll use one that **changes over time** --- a score that starts at zero and grows. The key line takes the score's current value, adds points, and stores the result back:
- code: |
    int score = 0;        // start with no points
    score = score + 9;    // add 9 --- score is now 9
    score = score + 11;   // add 11 --- score is now 20
- text: |
    Read `score = score + 9` as "make score equal to *whatever it is now*, plus 9." The variable *remembers* its total between steps. This is called **state** --- information the program carries as it runs.
{{< /concept >}}

{{< ask key="p1_accumulate" label="Accumulate meaning" >}}Explain what `score = score + 9;` does. Why does the variable need to "remember" its old value to work?{{< /ask >}}

## Phase 2 --- Concept: Reporting With printf

{{< concept "Print a message and the current score" >}}
- text: |
    You met `printf` when you printed your `ticks_per_inch`. Here you'll use it to **report each maneuver**. To print a number inside a message, use `%d` where the number goes, then list the variable after the text:
- code: |
    printf("Stacked first red cube. Score: %d\n", score);
- text: |
    The `%d` gets replaced by the value of `score`, and `\n` starts a new line. After your robot adds points, a line like this tells you exactly what happened and the new total.
{{< /concept >}}

{{< callout title="The pattern: do → score → report" variant="navy" >}}
Every scoring maneuver follows the same three-step rhythm: **do** the maneuver (library calls), **add** the points to `score`, then **print** the report. Do, score, report --- every time.
{{< /callout >}}

{{< ask key="p2_printf" label="printf meaning" >}}What does the `%d` do inside a `printf`? Why is printing a report after each maneuver useful during a competition run?{{< /ask >}}

## Phase 3 --- The Real Point Values

These are the actual Botball points for the maneuvers in your run. Each maneuver's difficulty maps to a score --- harder tasks are worth more.

{{< gridtable caption="Your run's scoring maneuvers" >}}
columns:
  - head: Maneuver
    width: 54%
  - head: Difficulty
    width: 20%
  - head: Points
rows:
  - - text: "Place 1st small red cube on the large red cube"
    - text: "5"
    - text: "9"
  - - text: "Place 2nd small red cube on the large red cube"
    - text: "6"
    - text: "11"
  - - text: "Place the pallet (with large red cube) on the dock"
    - text: "6"
    - text: "11"
  - - text: "Small red cube still on top when docked"
    - text: "5"
    - text: "9"
{{< /gridtable >}}

{{< calc title="Perfect run total: 9 + 11 + 11 + 9 = 40 points" >}}
{{< /calc >}}

{{< ask key="p3_partial_score" label="Partial score" >}}If your robot completed only the first two stacks but failed to dock, what would the score be? Show your addition.{{< /ask >}}

## Phase 4 --- Plan the Run

Before coding, map your run as a list of actions and the points each scores. Think through the whole path: find the wall to reset, square up, drive and turn to the cubes, stack them, then move the pallet to the dock. Mark which library [[FUNCTION|function]] does each step.

{{< repeattable count=8 prefix="plan" >}}
- kind: number
  head: "#"
  width: "8%"
- head: What the robot does
  key: what
  width: 48%
- head: Library call(s)
  key: call
  width: 24%
- head: Points (if any)
  key: pts
  aria: points
{{< /repeattable >}}

You don't need to score on every line --- driving and turning set up the scoring maneuvers. Mark points only on the lines that actually score.
{.muted}

## Phase 5 --- Build: The Scored Run

Now write it. Start `score` at 0. Follow the **do → score → report** rhythm: run the maneuver with your library functions, add the points, then `printf` the report. The skeleton below shows the structure and the scoring/reporting lines --- **you fill in the driving, turning, and stacking** from your Phase 4 plan.

{{< code >}}
// Unit 4, Big Idea 4: Keeping Score
// Name: _______________________   Date: ___________

#include <kipr/wombat.h>

#include <@@yourname@@.h>     // your full library

int main() {
    enable_servo(0);
    enable_servo(1);

    int score = 0;                          // running total starts at zero
    printf("Run started. Score: %d\n", score);

    // --- Reset to a known position ---
    back_until_pressed();                   // back into the wall to reset
    square_up();                            // straighten against the line

    // --- Drive/turn to the cubes (your plan) ---
    @@// Drive(...)  Turn(...)  as needed@@

    // --- SCORE: first small red cube on the large cube ---
    @@// move_arm(...) / move_claw(...) to make the stack@@
    score = score + 9;                      // difficulty 5 = 9 points
    printf("Stacked first red cube. Score: %d\n", score);

    // --- SCORE: second small red cube ---
    @@// reposition + move_arm / move_claw@@
    score = score + 11;                     // difficulty 6 = 11 points
    printf("Stacked second red cube. Score: %d\n", score);

    // --- SCORE: dock the pallet ---
    @@// Drive / Turn the pallet onto the dock@@
    score = score + 11;                     // difficulty 6 = 11 points
    printf("Pallet on the dock. Score: %d\n", score);

    // --- SCORE: cube still on top when docked ---
    score = score + 9;                      // difficulty 5 = 9 points
    printf("Cube held on top. Final score: %d\n", score);

    return 0;
}
{{< /code >}}

{{< callout title="[[REQUIREMENT|Requirement]] check" variant="gold" >}}
Your finished run must use all six: `back_until_pressed`, `square_up`, `Drive`, `Turn`, `move_arm`, and `move_claw`. Fill the planning blanks with real calls so each one appears.
{{< /callout >}}

## Phase 6 --- Run It and Read the Report

Run your program and watch the console. A perfect run prints a growing score, ending at 40. Here's what a clean run looks like:

```text {.console}
> Run started. Score: 0
> Stacked first red cube. Score: 9
> Stacked second red cube. Score: 20
> Pallet on the dock. Score: 31
> Cube held on top. Final score: 40
```

### Your Run Log

{{< repeattable count=4 prefix="run" >}}
- kind: number
  head: "Try"
  width: "8%"
- head: What the console printed (final score)
  key: printed
  width: 40%
- head: What worked / what you fixed
  key: fixed
{{< /repeattable >}}

{{< ask key="p6_final_score" label="Final score" >}}What final score did your run reach? If it was below 40, which maneuver fell short, and how did the printed report help you find it?{{< /ask >}}

## Phase 7 --- Connect &amp; Reflect

{{< callout title="AI Literacy Thread" >}}
Intelligent systems track their own state and report what they have done.
{{< /callout >}}

Your robot didn't just act --- it *kept track of its own progress and reported it*. That's everywhere in real systems. A delivery robot logs each package dropped; a game tracks your score; a fitness band counts your steps and tells you the total. Keeping a running state and reporting it is how machines stay accountable --- to their users and to the people [[DEBUGGING|debugging]] them. The printed log you built is exactly the kind of record engineers rely on to see what a system actually did, step by step.

Complete the reflection on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_state" label="Reflection 1" n=1 >}}How does an accumulating variable like `score` "remember" a running total as the program runs?{{< /ask >}}

{{< ask key="p7_q2_logging" label="Reflection 2" n=2 >}}Why is printing a report after each maneuver helpful when something in the run goes wrong?{{< /ask >}}

{{< ask key="p7_q3_library" label="Reflection 3" n=3 >}}This run used your whole library. Name two functions you called and what each contributed to the run.{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete in 2--3 sentences: "Intelligent systems track their own state and report what they have done. This means a well-built robot can tell you..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Use the Turn [[RETURN VALUE|Return Value]]

- Your `Turn` returns 1 for success. Only add points if a maneuver's setup turn succeeded. How would you use the return value to protect your score?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- A Scoring Function

- Write a helper like `score_points(int current, int add)` that adds points and prints the report in one call. Why might that be cleaner than repeating the two lines?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Count Maneuvers Too

- Add a second accumulating variable that counts how many maneuvers you completed. Print both score and count at the end.

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Time It

- A real run has a time limit. How could you report points-per-second, or warn if the run is taking too long? Sketch the idea.

{{< answer key="ext_d" label="Extension D" >}}

### Extension E --- One Combined Message

- Right now your score report prints as several separate `printf` lines. Use `sprintf` to build one combined summary [[STRING|string]] --- for example, your score and maneuver count in a single sentence --- before printing it in one call.
- What's one advantage of building one complete string before printing, instead of printing pieces as you go?

{{< answer key="ext_e" label="Extension E" >}}
