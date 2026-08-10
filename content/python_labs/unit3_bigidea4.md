---
title: "Unit 3 · Big Idea 4 — Perfect Turns"
short_title: "Python 3.4"
hub_unit: 3
description: "Tick-based 90° turns — tune left and right pivots by trial-and-error, then expose hidden drift with an 8-turn test."
weight: 170
nav: python
track: python
type: labs
mission_id: unit3_bigidea4
eyebrow: "Unit 3 · Big Idea 4"
heading: "Perfect Turns"
subheading: "Student Lab · Building Reliable 90° Turns"
credit: "KIPR · Botball Explorer · Unit 3 Big Idea 4 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine act on the world, not just move through it?"
  - term: "Big Idea"
    definition: "Precise Motion Is Built and Tested, Not Assumed"
  - term: "AI Literacy Thread"
    definition: "Small errors compound — intelligent systems must measure and correct for drift."
  - term: "CS1 Concepts"
    definition: "Pivot Turns · [[ENCODER|Encoders]] · Trial-and-Error Tuning · Accumulated Error"
  - term: "Game Context"
    definition: "The left and right turns every stacking mission needs"
  - term: "What You Need"
    definition: "Explorer robot · open floor space · protractor or angle guide · this lab sheet"
---

## Overview

Every stacking mission needs your robot to turn — left to face a cube, right to face the [[PALLET|pallet]]. But a turn that's "about 90°" will wreck a mission: after a few turns, the robot is pointing the wrong way entirely. Today you'll build **reliable** 90° turns, left and right, by counting encoder [[TICK|ticks]] — and then you'll run a clever test that reveals exactly how much error hides in each turn. This is the heart of *localization*: knowing, and trusting, where your robot is pointed.

{{% callout title="Core Insight" %}}
A turn is never perfect on the first try. You build a good turn by testing it, measuring the error, and adjusting — until it's reliable enough to trust again and again.
{{% /callout %}}

### By the end of this activity you will be able to:

- Make the robot pivot in place by driving its wheels in opposite directions.
- Use encoder ticks to control how far the robot turns.
- Tune `turn_left` and `turn_right` to a true 90° through trial-and-error.
- Run a repeat-test that exposes accumulated error, and correct for it.
{.obj}

## Phase 1 — Concept: Pivot Turning

{{< concept "Opposite wheels make the robot spin in place" >}}
- text: |
    To turn without driving forward, you run the two wheels in **opposite** directions. One wheel goes forward, the other backward, and the robot pivots around its own center.
- code: |
    k.motor(0,  50)   # left wheel forward
    k.motor(3, -50)   # right wheel backward  -> robot pivots RIGHT
- text: |
    Flip which wheel goes which way, and it pivots the other direction.
{{< /concept >}}

{{< concept "Count ticks to control how far it turns" >}}
- text: |
    Just like driving a distance, you use the encoder to control *how far* the robot pivots — keep turning until a wheel has counted enough ticks, then brake.
- code: |
    k.cmpc(0)                        # clear the counter
    while k.gmpc(0) < TURN_TICKS:     # pivot until we've turned far enough
        k.motor(0, 50)
        k.motor(3, -50)
- text: |
    The number of ticks that makes exactly 90° is something you'll have to **find by testing** — it depends on your robot's wheels and width.
{{< /concept >}}

{{% callout title="Watch the forward wheel" variant="gold" %}}
Here's the catch: in a pivot, one wheel rolls forward (its tick count climbs) and one rolls backward (its count goes negative). Always count the wheel that's going **forward**. So a right pivot watches the left wheel — `k.gmpc(0)` — and a left pivot watches the right wheel — `k.gmpc(1)`.
{{% /callout %}}

## Phase 2 — Build &amp; Tune the Right Turn

Build `turn_right` with a tick value you'll tune. Start with a guess, run it, measure the actual angle with a protractor, and adjust `RIGHT_TICKS` until it's a true 90°.

{{< code >}}
#!/usr/bin/python3
# Unit 3, Big Idea 4: Perfect Turns
# Name: _______________________   Date: ___________

import os, sys
sys.path.append("/usr/lib")
import _kipr as k

RIGHT_TICKS = @@____@@   # Tune this tick count for a 90-degree RIGHT pivot.
LEFT_TICKS  = @@____@@   # Set the tick count for a 90-degree LEFT pivot in Phase 3.

def main():
    turn_right()    # test one right turn, then measure the angle

def turn_right():
    k.cmpc(0)                            # clear the LEFT wheel's counter
    while k.gmpc(0) < RIGHT_TICKS:        # left wheel rolls forward as we pivot right
        k.motor(0,  50)                  # left wheel forward
        k.motor(3, -50)                  # right wheel backward
    k.motor(0, 0); k.motor(3, 0); k.msleep(50)   # brake

main()
{{< /code >}}

### Tuning Log — Right Turn

{{< gridtable caption="Adjust RIGHT_TICKS until the turn is a true 90°" >}}
columns:
  - head: Try
    width: 12%
  - head: RIGHT_TICKS value
    width: 30%
  - head: Actual angle turned (degrees)
rows:
  - - text: "1"
    - key: r_t1_ticks
    - key: r_t1_angle
  - - text: "2"
    - key: r_t2_ticks
    - key: r_t2_angle
  - - text: "3"
    - key: r_t3_ticks
    - key: r_t3_angle
  - - text: "4"
    - key: r_t4_ticks
    - key: r_t4_angle
{{< /gridtable >}}

{{< ask key="p2_right_best" label="Best right ticks" >}}What `RIGHT_TICKS` value gave you the closest to a true 90°? How did you decide which way to adjust when it was off?{{< /ask >}}

## Phase 3 — Build &amp; Tune the Left Turn

Now the left turn. It's the mirror image — wheels swapped — and it watches the **right** wheel (`k.gmpc(1)`), because that's the one rolling forward this time. Tune `LEFT_TICKS` the same way.

{{< code >}}
def turn_left():
    k.cmpc(1)                          # clear the RIGHT wheel's counter this time
    while k.gmpc(1) < LEFT_TICKS:       # right wheel rolls forward as we pivot left
        k.motor(0, -50)                # left wheel backward
        k.motor(3,  50)                # right wheel forward
    k.motor(0, 0); k.motor(3, 0); k.msleep(50)   # brake
{{< /code >}}

{{% callout title="Why a separate number?" variant="navy" %}}
Your left and right turns may need *different* tick values. Motors aren't perfectly matched, weight isn't perfectly centered — so `LEFT_TICKS` might not equal `RIGHT_TICKS`. That's normal. Tune each one on its own.
{{% /callout %}}

### Tuning Log — Left Turn

{{< gridtable caption="Adjust LEFT_TICKS until the turn is a true 90°" >}}
columns:
  - head: Try
    width: 12%
  - head: LEFT_TICKS value
    width: 30%
  - head: Actual angle turned (degrees)
rows:
  - - text: "1"
    - key: l_t1_ticks
    - key: l_t1_angle
  - - text: "2"
    - key: l_t2_ticks
    - key: l_t2_angle
  - - text: "3"
    - key: l_t3_ticks
    - key: l_t3_angle
  - - text: "4"
    - key: l_t4_ticks
    - key: l_t4_angle
{{< /gridtable >}}

{{< ask key="p3_left_vs_right" label="Left vs right ticks" >}}Did your `LEFT_TICKS` end up the same as `RIGHT_TICKS`, or different? Why might the two directions need different numbers?{{< /ask >}}

## Phase 4 — The Drift Test: Eight Turns

A single 90° turn might look perfect — but a tiny error you can't see adds up. Here's how to expose it: turn the **same direction 8 times**. That's 8 × 90° = **720°**, two full spins, so the robot should end up facing *exactly* where it started. Any gap is your hidden error, multiplied by eight and now impossible to miss.

{{< concept "A loop that repeats the turn 8 times" >}}
- code: |
    i = 0
    while i < 8:              # Repeat the turn 8 times for a total of 720 degrees.
        turn_right()
        k.msleep(300)         # brief pause so you can watch each step
        i = i + 1
- text: |
    Mark the robot's starting direction with a piece of tape. Run the eight turns. Where does it end up pointing?
{{< /concept >}}

### Mark, Run, Measure

{{< gridtable >}}
columns:
  - head: After 8 turns (720°), the robot...
    width: 50%
  - head: Your estimate
rows:
  - - text: Landed OVER or UNDER a full return?
    - key: p4_over_under
      aria: Over or under
  - - text: About how many degrees off? (your best guess)
    - key: p4_degrees_off
      aria: Degrees off
{{< /gridtable >}}

{{% callout title="Now correct it" variant="gold" %}}
If the robot turned too far (over), your tick value is a little too big — lower it slightly. If it didn't turn far enough (under), raise it. Because 8 turns multiplied the error, even a small tick change makes a big difference. Adjust and run the eight-turn test again.
{{% /callout %}}

### Correction Log

{{< repeattable count=4 prefix="drift" >}}
- kind: number
  head: "Round"
  width: "12%"
- head: Tick value used
  key: ticks
  width: 30%
- head: Where it landed after 8 turns
  key: landed
{{< /repeattable >}}

{{< ask key="p4_drift_finding" label="Drift finding" >}}After adjusting, did the eight-turn test land closer to the start? Explain how the 8× test made a tiny per-turn error easy to see and fix.{{< /ask >}}

## Phase 5 — Add Your Turns to the [[LIBRARY|Library]]

Your tuned turns are tools you'll use in every mission — so they belong in your library. Add `turn_left` and `turn_right` (and your `LEFT_TICKS`/`RIGHT_TICKS` values) to your library file from Big Idea 3, fully commented.

{{< code >}}
# turn_right: Pivots the robot 90 degrees to the right in place.
#   Watches the left wheel's encoder (gmpc 0). Tuned with
#   RIGHT_TICKS for a true 90-degree turn. Takes no input.
def turn_right():
    k.cmpc(0)
    while k.gmpc(0) < RIGHT_TICKS:
        k.motor(0, 50); k.motor(3, -50)
    k.motor(0, 0); k.motor(3, 0); k.msleep(50)

# turn_left: Pivots the robot 90 degrees to the left in place.
#   Watches the right wheel's encoder (gmpc 1). Tuned with
#   LEFT_TICKS for a true 90-degree turn. Takes no input.
def turn_left():
    k.cmpc(1)
    while k.gmpc(1) < LEFT_TICKS:
        k.motor(0, -50); k.motor(3, 50)
    k.motor(0, 0); k.motor(3, 0); k.msleep(50)
{{< /code >}}

{{< ask key="p5_combo_line" label="Combo line" >}}Now that your turns are in the library, write a single line for `main` that would drive forward, turn right, and drive forward again (using your library [[FUNCTION|functions]]).{{< /ask >}}

## Phase 6 — Connect: The AI Literacy Bridge

{{% callout title="AI Literacy Thread" %}}
Small errors compound — intelligent systems must measure and correct for drift.
{{% /callout %}}

One turn looked fine, but eight turns revealed an error hiding in every single one. This is one of the most important truths in robotics and AI: **small errors add up**. A self-driving car that misjudges its heading by 1° is fine for a second and lost after a mile. A spacecraft off by a fraction of a degree misses a planet by thousands of miles. Smart systems don't assume they're perfect — they constantly measure their drift and correct it. Your eight-turn test is exactly the kind of test real engineers run to catch errors that are invisible at small scale.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_compound" label="Compounding error" >}}A single turn was off by just 2°. After 8 turns, how far off was it? Why is an error that's "too small to notice" still dangerous in a long mission?{{< /ask >}}

{{< ask key="p6_why_8x" label="Why 8x test" >}}Why is running a turn 8 times a smarter test than running it once? What did multiplying the error let you see?{{< /ask >}}

## Phase 7 — Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_pivot" label="Reflection 1" n=1 >}}How does a robot pivot in place? Why does a right turn watch `k.gmpc(0)` but a left turn watch `k.gmpc(1)`?{{< /ask >}}

{{< ask key="p7_q2_tuning" label="Reflection 2" n=2 >}}You found your turn's tick value by trial-and-error. Describe that process — how did you know which way to adjust?{{< /ask >}}

{{< ask key="p7_q3_drift" label="Reflection 3" n=3 >}}What did the eight-turn (720°) test reveal that a single turn hid?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete in 2–3 sentences: "Small errors compound, so intelligent systems must measure and correct for drift. This means that in a long mission, a robot should..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A — Drive a Square

- Combine `Tick_Drive` and `turn_right` to drive a square: forward, turn, four times. Does the robot return to its start? How far off is it?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B — Left Square vs. Right Square

- Drive a square turning left, then one turning right. Is one more accurate than the other? What does that say about your two tick values?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C — A turn(int degrees) Idea

- Right now 90° is baked in. How could a function take the *number of degrees* as an [[PARAMETER|parameter]] and compute the ticks? Sketch the idea. (You'll have the tools for this soon.)

{{< answer key="ext_c" label="Extension C" >}}

### Extension D — Looking Ahead: Stacking

- You now have driving, turning, and an arm. List the steps — in library function calls — to drive to a cube, pick it up, turn, and place it on the pallet.

{{< answer key="ext_d" label="Extension D" >}}
