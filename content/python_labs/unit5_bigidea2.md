---
title: "Unit 5 · Big Idea 2 — Ease On, Ease Off"
short_title: "Python 5.2"
hub_unit: 5
description: "elif chains and linear speed ramps — rebuild Drive() to accelerate, cruise, and decelerate instead of one fixed speed."
weight: 250
nav: python
track: python
type: labs
mission_id: unit5_bigidea2
eyebrow: "Unit 5 · Big Idea 2"
heading: "Ease On, Ease Off"
subheading: "Student Lab · Driving Like a Car, Not a Light Switch"
credit: "KIPR · Botball Explorer · Unit 5 Big Idea 2"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine operate reliably in an imperfect world?"
  - term: "Big Idea"
    definition: "Robust Systems Tolerate Uncertainty"
  - term: "AI Literacy Thread"
    definition: "Reliable systems respond proportionally to how close they are to a goal, instead of acting the same way right up until they suddenly stop."
  - term: "CS1 Concepts"
    definition: "elif Chains · Multi-Branch [[DECISION|Decisions]] · Linear [[FUNCTION|Functions]] in Code (y = mx + b) · Reliability-Oriented Motor Control"
  - term: "Game Context"
    definition: "[[@18|Mission 18]] — move Botguy to the loading zone (final position judged)"
  - term: "What You Need"
    definition: "Explorer robot · full [[LIBRARY|library]] · Botguy · the game field · this lab sheet"
---

## Overview

Every `Drive()` you've written so far does the same thing the whole way: full speed, then slam to a stop the instant the [[TICK|tick]] count is reached. That works, but think about how a car actually drives --- it eases onto the gas, cruises, then eases onto the brake well before the stop sign. It never slams from 60 to 0 in one instant. Today you rebuild `Drive()` to do the same thing: ease on for the first few ticks, cruise in the middle, and ease off for the last several hundred ticks before the target --- using a new tool, the **elif chain**, to decide which of those three zones the robot is in right now.

{{< callout title="The Big Idea of This Unit" >}}
A robust system doesn't treat "far from the goal" and "about to arrive" the same way. It measures how close it is and adjusts its behavior smoothly --- proportional response instead of all-or-nothing.
{{< /callout >}}

### By the end of this activity you will be able to:

- Explain what an `elif` chain does and when it's the right tool versus separate [[IF STATEMENT|if statements]].
- Describe motor speed as a linear function of position, in the form y = mx + b.
- Rebuild `Drive()` so it accelerates, cruises, and decelerates instead of running at one fixed speed.
- Tune the constants in that linear function by testing, not by guessing.
{.obj}

## Phase 1 --- The Mission: Move Botguy

{{< callout title="The run" variant="navy" >}}
Today's goal is just the base mission: moving Botguy into the loading zone.
{{< /callout >}}

{{< mission-summary mission="18" video=true >}}
{{< /mission-summary >}}

Here's why this mission is a perfect fit for today: Botguy isn't fixed to the floor. If your robot arrives at full speed and slams to a stop, the impact can shove Botguy off target in the last instant --- the exact moment accuracy matters most. A robot that eases off its speed as it approaches is far less likely to [[OVERSHOOT|overshoot]] the zone or knock Botguy out of position on contact.

{{< ask key="p1_restate" label="Restate mission" >}}Say the mission back in your own words. Why would a sudden stop right at the end be especially risky for *this* mission compared to, say, just driving to an empty spot on the floor?{{< /ask >}}

## Phase 2 --- Concept: elif Chains

{{< concept "What is elif?" >}}
- text: |
    You already know `if` and `else`. Python's **elif** (short for "else if") adds one or more extra checks in between, for when there are more than two possible situations:
- code: |
    if condition_1:
        # runs only if condition_1 is true
    elif condition_2:
        # runs only if condition_1 was false AND condition_2 is true
    else:
        # runs only if BOTH conditions above were false
- text: |
    The chain is checked **top to bottom**, and the instant one [[CONDITION|condition]] is true, its [[BLOCK|block]] runs and **every condition below it is skipped** --- even if one of them would also have been true. Only one block in the whole chain ever runs.
{{< /concept >}}

{{< concept "When is it the right tool?" >}}
- text: |
    **Good fit:** when the situations are *mutually exclusive zones* --- a value falls into exactly one of them, never more than one. A speed limit that's 20 mph in a school zone, 35 in a residential zone, and 55 on the highway is a perfect `elif` chain: any one location is in exactly one zone.

    **Poor fit:** when the conditions are *independent* --- more than one could be true at the same time, and you need to react to each one separately. "It's raining" and "it's nighttime" can both be true at once. Chaining them with `elif` would silently skip the nighttime check whenever it's already raining --- that's a bug, not a design choice. Two separate `if` statements are correct there.
{{< /concept >}}

{{< ask key="p2_elseif" label="elif concept" >}}In your own words: what does an elif chain do differently from writing separate if statements? Give one example (robot or not) where elif is the right tool, and one where it would cause a bug.{{< /ask >}}

## Phase 3 --- Concept: Three Zones, One Drive

A car doesn't drive at one constant speed and then slam the brakes. It **eases onto the gas** leaving a stop sign, **cruises** once it's up to speed, and **eases onto the brake** well before the next stop. Your `Drive()` is going to do the same thing, split into three zones based on tick position:

{{< zonebar >}}

Exactly one of these zones applies at any instant while the robot is driving --- which makes this a textbook `if` / `elif` / `else` chain.

{{< concept "Speed as a line: y = mx + b" >}}
- text: |
    In the deceleration zone, speed isn't fixed --- it depends on how many ticks are **left** to travel. The fewer ticks remaining, the slower you want to go. That relationship is a straight line, exactly like `y = mx + b` from math class:
- formula: "motor_speed = (ticks_remaining) × m + b"
- text: |
    Here, `ticks_remaining` is your **x**, `motor_speed` is your **y**, `m` is how steeply speed drops as you get closer, and `b` is a small base speed so the robot never fully stalls before it actually reaches the target. A starting point to test:
- formula: "motor_speed = (desired_ticks - current_ticks) × 2 + 150"
- text: |
    where `desired_ticks - current_ticks` is exactly `ticks_remaining`. The acceleration zone works the same way, just measuring from the *start* instead of the end --- speed ramps **up** as `current_ticks` grows from 0 toward 50.
{{< /concept >}}

{{< ask key="p3_linear" label="Linear speed concept" >}}Why does deceleration speed depend on ticks *remaining* rather than ticks *already driven*? What would go wrong if you used the wrong one?{{< /ask >}}

## Phase 4 --- Build: Rebuild Drive()

Replace your single fixed-speed loop with the three-zone `if` / `elif` / `else` chain. This checks the zone **every trip through the loop**, so speed updates continuously as ticks change.

{{< code filename="yourname.py" >}}
def Drive(inches):
    # Remember that if ticks_per_inch is a float,
    # we need to round it to the whole number nearest tick
    # so that our deceleration equation produces a whole number.
    desired_ticks = round(inches * ticks_per_inch)
    k.cmpc(0)
    current_ticks = k.gmpc(0)

    while current_ticks < desired_ticks:
        current_ticks = k.gmpc(0)

        if current_ticks < 50:
            # ACCELERATION ZONE: Ramp the speed UP from a slow start.
            motor_speed = current_ticks * @@12@@ + @@150@@
        elif (desired_ticks - current_ticks) < 500:
            # DECELERATION ZONE: Ramp the speed DOWN as the remaining ticks decrease.
            motor_speed = round(desired_ticks - current_ticks) * @@2@@ + @@150@@
        else:
            # CRUISE ZONE: Use full speed because neither ramp applies.
            motor_speed = @@750@@

        k.mav(0, motor_speed)
        k.mav(3, motor_speed)

    k.mav(0, 0); k.mav(3, 0); k.msleep(50)   # brake
{{< /code >}}

{{< ask key="p4_walkthrough" label="Drive walkthrough" >}}Walk through the three branches in your own words: what triggers each one, and what does each one do to `motor_speed`?{{< /ask >}}

## Phase 5 --- Run It, Then Tune the Constants

Test your new `Drive()` on a medium-to-long distance (24+ inches works well, so all three zones actually get used). Watch the robot closely as it drives --- does it visibly ease on, cruise, then ease off? Or does something look off?

{{< warn title="⚠ Something to watch for" >}}
The cruise speed in the skeleton is **750**. Plug `ticks_remaining = 500` (the instant deceleration begins) into the decel formula: `500 × 2 + 150 = 1150`. That's *faster* than cruise speed --- the robot would speed up right as it's supposed to start slowing down. Watch for this when you test. If you see it, that's not a mistake in the lab --- it's your `m` and `b` constants not yet matching your cruise speed.
{{< /warn >}}

{{< gridtable caption="Tune your constants" >}}
columns:
  - head: Constant
    width: 22%
  - head: Starting value
    width: 16%
  - head: Your tuned value
    width: 16%
  - head: Why you changed it
rows:
  - - text: Accel slope (m)
    - text: "12"
    - key: p5_accel_m
    - key: p5_accel_m_why
  - - text: Accel base (b)
    - text: "150"
    - key: p5_accel_b
    - key: p5_accel_b_why
  - - text: Decel slope (m)
    - text: "2"
    - key: p5_decel_m
    - key: p5_decel_m_why
  - - text: Decel base (b)
    - text: "150"
    - key: p5_decel_b
    - key: p5_decel_b_why
  - - text: Cruise speed
    - text: "750"
    - key: p5_cruise
    - key: p5_cruise_why
{{< /gridtable >}}

{{< ask key="p5_tune" label="Tuning result" >}}Did you hit the speed-jump problem described above? How did you change your constants so decel speed at 500 ticks remaining lines up with your cruise speed instead of exceeding it?{{< /ask >}}

## Phase 6 --- Run the Mission

Using your tuned `Drive()`, drive to Botguy and move him into the loading zone. Run it several times.

{{< repeattable count=4 prefix="run" caption="Run it 4+ times --- how consistent is the final position?" >}}
- kind: number
  head: "Run"
  width: "10%"
- head: Botguy fully in the loading zone?
  key: botguy
  width: 35%
  aria: botguy
- head: Did the stop feel smooth, or still abrupt?
  key: smooth
  aria: smoothness
{{< /repeattable >}}

{{< ask key="p6_consistency" label="Mission consistency" >}}Compare this to a flat-speed `Drive()` from Unit 4. Was Botguy's final position more consistent with easing on/off? Why would a reliability engineer care about that consistency more than raw speed?{{< /ask >}}

## Phase 7 --- Connect & Reflect

{{< callout title="AI Literacy Thread" >}}
Reliable systems respond proportionally to how close they are to a goal, instead of acting the same way right up until they suddenly stop.
{{< /callout >}}

This idea shows up everywhere intelligent systems need to be trusted with something delicate. A self-driving car doesn't brake at one constant rate regardless of following distance --- it eases harder the closer it gets to a stopped car ahead. A robotic arm placing a fragile part slows dramatically in its last few millimeters of travel. Even a thermostat easing a heater's output as room temperature approaches the target, instead of blasting full heat until the exact instant it's satisfied, is the same pattern: **proportional response near the goal, not all-or-nothing action right up to it.**

Complete the reflection on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_elseif" label="Reflection 1" n=1 >}}What does an elif chain do that separate if statements don't, and why did the three speed zones need one?{{< /ask >}}

{{< ask key="p7_q2_formula" label="Reflection 2" n=2 >}}Explain the decel formula `motor_speed = ticks_remaining × m + b` the way you'd explain y = mx + b to a friend who hasn't seen this lab.{{< /ask >}}

{{< ask key="p7_q3_tuning" label="Reflection 3" n=3 >}}Why does tuning constants by testing beat guessing a value and hoping it works?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete in 2--3 sentences: "Reliable systems respond proportionally instead of all-or-nothing. This means that near a goal, a system should..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Ease Your Turns Too

- Apply the same three-zone idea to `Turn()`. Does a turn need as large a deceleration zone as a long drive? Why or why not?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Does It Scale?

- Test your tuned `Drive()` on a very short distance (6 inches) and a very long one (48+ inches). Does the same accel/decel zone size work well for both? What would you change if not?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Name the Cruise Zone

- Rewrite the plain `else` as an explicit `elif` that checks both bounds of the cruise zone directly. Was `elif` necessary? What did plain `else` save you from writing?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Should It Exist?

- Find one credible news article (not a blog or forum post) about a real self-driving car incident, or a robot that failed in the field.
- In 3-4 sentences: what happened, was the technology more beneficial or harmful overall, and how do you think it will need to change in the next 10 years to be trusted?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E --- Absolute Value and Check

- Use `abs()` on the difference between your tuned decel speed at 500 ticks remaining and your cruise speed --- how close did your tuning actually get them?

{{< answer key="ext_e" label="Extension E" >}}
