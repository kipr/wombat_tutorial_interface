---
title: "Unit 2 · Big Idea 2 — Brake vs. Coast"
short_title: "Python 2.2"
hub_unit: 2
description: "Motor braking vs. neutral — run a 5-trial experiment and let the data show which stop is more consistent."
weight: 90
nav: python
track: python
type: labs
mission_id: unit2_bigidea2
eyebrow: "Unit 2 · Big Idea 2"
heading: "Stopping Is Not the Same as Being Stopped"
subheading: "Student Lab · Brake vs. Coast"
credit: "KIPR · Botball Explorer · Unit 2 Big Idea 2 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine sense and respond to the world around it?"
  - term: "Focus"
    definition: "Motor control, reliability, and measuring consistency"
  - term: "AI Literacy Thread"
    definition: "Reliable systems are tested with data, not assumed to work."
  - term: "CS1 Concepts"
    definition: "Braking vs. Neutral · Settle Time · Experiments · Data &amp; Consistency"
  - term: "Game Context"
    definition: "[[SENSOR|Sensor]] homing + repeatable forward moves from a reset origin"
  - term: "What You Need"
    definition: "Explorer robot · touch sensor ([[PORT|port]] 0) · ruler/tape measure · game field · this lab sheet"
---

## Overview

Last lab, your robot used its touch sensor to back into the wall and reset its origin. Today you'll use that same reliable starting point to run an **experiment**. You'll drive forward a short distance and stop — two different ways — and measure which way is more consistent. The two ways of "stopping" are not the same, and your own data is going to prove it.

{{% callout title="Core Insight" %}}
Telling a motor to stop and a motor actually holding still are two different things. How you stop changes how consistent — and how straight — your robot is.
{{% /callout %}}

### By the end of this activity you will be able to:

- Explain the difference between *braking* a motor and letting it go *neutral*.
- Reuse `back_until_pressed()` to start every trial from the same reset origin.
- Run a controlled experiment: same move, two stopping methods, five trials each.
- Use your own data to decide which method is more consistent in distance and direction.
{.obj}

### New This Time: Brake vs. Neutral

{{< concept "Two different ways to \"stop\"" >}}
- text: |
    There are two ways to end a motor's motion, and they behave very differently:
- code: |
    k.motor(0, 0)   # BRAKE actively holds the motor at zero and resists motion.
    k.motor(3, 0)

    k.ao()          # "All off" cuts power, so the motors go NEUTRAL and COAST.
- text: |
    **`k.motor(0,0)` brakes.** It actively holds the wheel at zero and resists it turning — like pressing the brake pedal. The robot stops where it is and holds the line.

    **`k.ao()` goes neutral.** It shuts the power off and lets the motors spin freely — like shifting a car into neutral and coasting. The robot drifts to a stop on its own momentum.
{{< /concept >}}

{{< concept "Why coasting drifts — and why settle time matters" >}}
- text: |
    When motors coast, the two wheels almost never coast *equally* — one carries a little more momentum than the other. That difference makes the robot **veer off a straight line** as it rolls to a stop, and it stops at a slightly different distance each time.

    Braking fights that. And after you brake, a short pause lets the motors fully settle into their hold before the next command:
- code: |
    k.motor(0, 0)
    k.motor(3, 0)
    k.msleep(50)    # give the motors a moment to settle and lock
- text: |
    That `k.msleep(50)` isn't a drive time — it's just enough time for the brake to take hold before the robot does anything else.
{{< /concept >}}

## Phase 1 — Activate: Two Ways to Stop a Bike

{{< figrow >}}
- src: drive/motor-plugged-in.jpg
  alt: Motors in ports 0 and 3 — the pair every experiment here assumes.
{{< /figrow >}}

Picture riding a bike to a line on the ground. You could **squeeze the brakes** and stop right on it — or you could just **stop pedaling** and coast, hoping you roll to a stop at the right spot. One is controlled. The other depends on your speed, the ground, and luck.

{{% callout title="Think it through" variant="navy" %}}
Which method stops you closer to the exact line every time — braking, or coasting?

If you coasted to a stop ten times, would you land on the exact same spot each time? Why or why not?
{{% /callout %}}

{{< ask key="p1_bike" label="Bike braking versus coasting" >}}A coasting bike and a braking bike can both stop. Why is the braking one more *predictable*? Connect this to a robot that needs to stop in the same place every run.{{< /ask >}}

## Phase 2 — Concept: Consistency and Evidence

### Consistency Is a Measurable Thing

A robot that drives "about 6 inches" isn't good enough for a competition — you need it to drive the same distance every single time. *Consistency* means the results cluster tightly together. You can't tell how consistent something is from one run; you have to run it several times and look at the spread.

### An Experiment Compares One Change

To test which stopping method is better, you change **only** the stop — everything else stays the same. Same start (the wall reset), same forward move, same five trials. The only difference is brake vs. coast. That's a fair experiment: when one thing changes and the rest is held still, you know the difference is caused by that one thing.

{{% callout title="Why the wall reset matters here" variant="gold" %}}
Because `back_until_pressed()` resets the origin against the wall every trial, it does not matter how far from the wall the robot started — it always re-establishes the **same zero**. That gives every trial a fair, identical starting line to measure from.
{{% /callout %}}

{{< ask key="p2_why_five" label="Why five trials" >}}Why can't you judge which stopping method is more consistent from just one run of each? What does running five trials let you see that one run hides?{{< /ask >}}

## Phase 3 — Plan

### The Experiment

{{% callout title="What Each Trial Does" %}}
1\. `back_until_pressed()` — back into the wall, reset the origin.

2\. Drive forward about 6 inches.

3\. Stop — using **coast** (`k.ao()`) for Version A, or **brake** (`k.motor(0,0); k.motor(3,0); k.msleep(50)`) for Version B.

4\. Measure how far the robot actually traveled, and note whether it stayed straight or drifted.

You'll run Version A five times, then Version B five times.
{{% /callout %}}

### Predict First

{{< ask key="p3_prediction" label="Prediction" >}}Before you run anything: which version — coast or brake — do you think will be more consistent in distance? Which will stay straighter? Why?{{< /ask >}}

### Set Your Forward Distance

You'll reuse your `drive_forward()` [[FUNCTION|function]] and pick a time that travels roughly 6 inches. What time will you start with?

{{< gridtable >}}
columns:
  - head: Forward move
    width: 60%
  - head: msleep time to try (ms)
rows:
  - - text: Drive forward ~6 inches
    - key: p3_forward_ms
      aria: Forward time
{{< /gridtable >}}

## Phase 4 — Build &amp; Run the Experiment

{{% safety title="⚠ Test in your hands first" noprint="true" %}}
As always, hold the robot off the ground and run the program once to confirm it backs up, presses, then drives forward — before you set it on the field.
{{% /safety %}}

### The Two Versions

Both versions are identical except for how they stop. Build Version A first, run your five trials, then change only the stop to make Version B and run five more. Define both helper functions above `main()`, as always.

{{< code >}}
#!/usr/bin/python3
# Unit 2, Big Idea 2: Brake vs. Coast
# Name: _______________________   Date: ___________

import os, sys
sys.path.append("/usr/lib")
import _kipr as k

x_position = 0
y_position = 0

def main():
    back_until_pressed()    # reset to a known zero at the wall
    drive_forward()         # move forward about 6 inches

    # ---- VERSION A: COAST (neutral) ----
    k.ao()                    # Cut power so the motors coast to a stop.

    # ---- VERSION B: BRAKE (active hold) ----
    # Comment out the k.ao() above and use these three lines instead:
    # k.motor(0, 0)
    # k.motor(3, 0)
    # k.msleep(50)            # let the brake settle and hold

def drive_forward():
    k.motor(0, 50)
    k.motor(3, 50)
    k.msleep(____)            # your ~6-inch time from Phase 3

def back_until_pressed():
    global x_position, y_position
    while k.digital(0) == 0:
        k.motor(0, -50)
        k.motor(3, -50)
        k.msleep(10)
    k.ao()
    y_position = 0            # We are home, so reset the origin.

main()
{{< /code >}}

### Version A — Coast (`k.ao()`)

Run five trials. After each, measure the distance the robot traveled forward, and note whether it stayed straight or drifted (and which way).

{{< gridtable caption="Version A · Coast" >}}
columns:
  - head: Trial
    width: 14%
  - head: Distance traveled (inches)
    width: 43%
  - head: Straight, or drifted? (which way?)
rows:
  - - text: "1"
    - key: a_t1_dist
    - key: a_t1_drift
  - - text: "2"
    - key: a_t2_dist
    - key: a_t2_drift
  - - text: "3"
    - key: a_t3_dist
    - key: a_t3_drift
  - - text: "4"
    - key: a_t4_dist
    - key: a_t4_drift
  - - text: "5"
    - key: a_t5_dist
    - key: a_t5_drift
{{< /gridtable >}}

### Version B — Brake (`k.motor(0,0); k.motor(3,0); k.msleep(50)`)

Change only the stop. Run five more trials and record the same way.

{{< gridtable caption="Version B · Brake" >}}
columns:
  - head: Trial
    width: 14%
  - head: Distance traveled (inches)
    width: 43%
  - head: Straight, or drifted? (which way?)
rows:
  - - text: "1"
    - key: b_t1_dist
    - key: b_t1_drift
  - - text: "2"
    - key: b_t2_dist
    - key: b_t2_drift
  - - text: "3"
    - key: b_t3_dist
    - key: b_t3_drift
  - - text: "4"
    - key: b_t4_dist
    - key: b_t4_drift
  - - text: "5"
    - key: b_t5_dist
    - key: b_t5_drift
{{< /gridtable >}}

## Phase 5 — Analyze Your Data

Now look at your two sets of five. Don't guess — read what your numbers actually say.

{{< gridtable >}}
columns:
  - head: Question
    width: 40%
  - head: Version A (Coast)
    width: 30%
  - head: Version B (Brake)
rows:
  - - text: Shortest distance
    - key: an_a_min
    - key: an_b_min
  - - text: Longest distance
    - key: an_a_max
    - key: an_b_max
  - - text: Spread (longest − shortest)
    - key: an_a_spread
    - key: an_b_spread
  - - text: How many trials drifted?
    - key: an_a_drifts
    - key: an_b_drifts
{{< /gridtable >}}

{{< ask key="p5_more_consistent_distance" label="More consistent in distance" >}}**Based on your data:** which version looks more consistent in distance? A smaller spread means more consistent.{{< /ask >}}

{{< ask key="p5_straighter" label="Which stayed straighter" >}}**Based on your data:** which version stayed straighter? What did the drift notes show?{{< /ask >}}

{{< ask key="p5_vs_prediction" label="Versus prediction" >}}Did your data match your Phase 3 prediction? If it surprised you, what surprised you?{{< /ask >}}

## Phase 6 — Connect: The AI Literacy Bridge

{{% callout title="Reliability Comes From Evidence" %}}
Intelligent systems aren't trusted because someone hopes they work — they're trusted because they've been tested and the data shows they're consistent.
{{% /callout %}}

Today you didn't take anyone's word for which stop was better — you ran it ten times and let the numbers decide. That's exactly how real [[AUTONOMOUS|autonomous]] systems are built. A self-driving car's braking isn't shipped because it "seemed fine"; it's tested thousands of times and measured for consistency. When a system has to do the same thing reliably, engineers gather data on how much it varies — just like you did.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_accumulating_error" label="Accumulating error" >}}A robot drives "about 6 inches" but sometimes 5 and sometimes 7. Across a long mission with many moves, why does a small inconsistency on each move become a big problem by the end?{{< /ask >}}

{{< ask key="p6_data_vs_opinion" label="Data versus opinion" >}}You proved which stop was better with data instead of opinion. Why is "the data shows it" more trustworthy than "it felt better" when building something that has to work every time?{{< /ask >}}

## Phase 7 — Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_brake_vs_coast" label="Reflection 1" n=1 >}}Explain the difference between `k.motor(0,0)` and `k.ao()` in your own words. Which one brakes, and which one coasts?{{< /ask >}}

{{< ask key="p7_q2_drift" label="Reflection 2" n=2 >}}Why does coasting tend to make the robot drift off a straight line?{{< /ask >}}

{{< ask key="p7_q3_settle" label="Reflection 3" n=3 >}}What is the `k.msleep(50)` after the brake for? What is it NOT for?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete this in 2–3 sentences: "A reliable robot is built on data, not hope. This means that before I trust a behavior in a real match, I should..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A — Does Settle Time Matter?

- Try the brake version with `k.msleep(50)`, then again with no pause, then with `k.msleep(200)`.
- Does more settle time change the consistency? What's the smallest pause that still holds well?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B — Faster Speed, Bigger Difference?

- Run both versions again at a higher motor power. Does coasting get even less consistent when the robot is moving faster? Why would that be?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C — Stack Five Moves

- Make the robot do five forward-and-brake moves in a row in one run. Does the braking version land where you'd predict after all five? Compare to coasting.

{{< answer key="ext_c" label="Extension C" >}}

### Extension D — Build a "stop_and_hold" Function

- Wrap the brake-and-settle lines into their own function, defined above where you call it, so you can reuse one clean call every time you stop.
- What did you name it? Where would you use it across the whole game?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E — Check It Against Reality

- Look up one real, credible source (a robotics or automotive article/spec sheet — not a forum post) about why sudden braking causes more positional error than gradual braking. Note where you found it.
- Log your 5 trial results in a spreadsheet instead of just this table. Does a spreadsheet make the pattern easier to spot than the table did?

{{< answer key="ext_e" label="Extension E" >}}
