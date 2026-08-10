---
title: "Unit 2 · Big Idea 1 — The Touch Sensor"
short_title: "Lab 2.1"
hub_unit: 2
description: "Sensors and while loops — drive backward until a touch sensor feels the wall, then reset the origin."
weight: 80
nav: labs
track: c
mission_id: unit2_bigidea1
eyebrow: "Unit 2 · Big Idea 1"
heading: "Computers Gather Information From Their Environment"
subheading: "Student Lab · The Touch Sensor"
credit: "KIPR · Botball Explorer · Unit 2 Big Idea 1 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine sense and respond to the world around it?"
  - term: "Big Idea"
    definition: "Computers Gather Information From Their Environment"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems rely on [[SENSOR|sensors]] to gather information about the world around them."
  - term: "CS1 Concepts"
    definition: "Inputs · Sensors · [[DIGITAL|Digital]] Sensors · while Loops · Observation"
  - term: "Game Context"
    definition: "Back into the starting box using touch · reset the origin"
  - term: "What You Need"
    definition: "Explorer robot · push button (touch) sensor · game field · this lab sheet"
---

## Overview

All through Unit 1, your robot was blind. It drove for a set time and hoped for the best — it could not feel the world at all. Today that changes. You'll attach a **touch sensor** to the back of your robot and write a program that drives backward and **stops the instant it feels a wall**. For the first time, the robot reacts to something real instead of a guessed-at time.

{{< callout title="Core Insight" >}}
A sensor is how a machine gathers information about the world. Without sensors, a robot can only follow a script. With them, it can respond to what is actually happening.
{{< /callout >}}

### By the end of this activity you will be able to:

- Explain what a *digital sensor* is and read the touch sensor with `digital(0)`.
- Write a `while` loop that repeats an action until a [[CONDITION|condition]] changes.
- Drive the robot backward until the touch sensor is pressed, then stop.
- Use reaching the wall as a known spot to reset the robot's stored origin.
{.obj}

### Set Up Your Sensor

{{< callout title="Before any code" variant="navy" >}}
Attach the push button (touch) sensor to the **back** of your robot, facing backward, so it will press when the robot backs into a wall.

Plug it into **digital [[PORT|port]] 0**.

In your program, `digital(0)` reads this sensor: it is **0 when the button is open** and **1 when the button is pressed**.
{{< /callout >}}

### New This Time: The while Loop

{{< concept "A while loop repeats code as long as something is true" >}}
- text: |
    Until now your code ran top to bottom, once. A `while` loop lets a [[BLOCK|block]] run **over and over**, checking a condition each time before it repeats.
- code: |
    while (condition) {
        // this runs again and again,
        // as long as the condition is true
    }
- text: |
    How it works, step by step:

    1. Check the condition in the parentheses.
    2. If it is **true**, run the code in the braces — then go back to step 1.
    3. If it is **false**, skip the braces and move on.

    The loop keeps checking. That is what lets a robot *wait for* something to happen instead of guessing how long it will take. To drive until the button is pressed, we loop **while the button is NOT pressed**:
- code: |
    while (digital(0) == 0) {   // while the button is NOT pressed...
        // keep driving and keep checking
    }
- text: |
    The moment the button reads 1, the condition `digital(0) == 0` becomes false, the loop stops, and the program moves on.
{{< /concept >}}

{{< concept "Why a tiny msleep goes inside the loop" >}}
- text: |
    You've used `msleep()` to drive for a set time. Inside a loop it does something different — and much smaller.
- code: |
    while (digital(0) == 0) {
        motor(0, -50);   // drive backward
        motor(3, -50);
        msleep(10);      // tiny pause, just 10 ms
    }
- text: |
    That `msleep(10)` is **not** how long you drive. The loop checks the button hundreds of times a second. Without a small pause, it would check *as fast as the computer possibly can* — and that **bogs down the [[CONTROLLER|controller]]** for no benefit. A 10 ms pause slows the checking to a sensible rate so the computer isn't overwhelmed, while still feeling instant to us.

    Notice how small this is compared to before: `msleep(1000)` used to mean "drive for a whole second." Here `msleep(10)` just means "wait a blink before checking the button again." Same command, completely different job.
    {.muted}
{{< /concept >}}

## Phase 1 — Activate: How Do You Know to Stop?

{{< figrow >}}
- src: kit/digitalsensors.jpg
  alt: Digital sensors — either pressed or not, nothing in between.
{{< /figrow >}}

Close your eyes and slowly back up toward a wall with your hand out behind you. You don't count steps — you wait until your hand *feels* the wall, then stop. You are using a sensor (your hand) and checking it constantly until it tells you something changed.

{{< callout title="Think it through" variant="navy" >}}
Why is "feel for the wall, then stop" more reliable than "take exactly 7 steps back"?

How many times per second do you think your hand was "checking" for the wall?
{{< /callout >}}

{{< ask key="p1_timed_vs_sensed" label="Timed versus sensed" >}}A timed move (drive for 1 second) and a sensed move (drive until you feel the wall) can both reach a wall. Why is the sensed move better when you don't know exactly how far away the wall is?{{< /ask >}}

## Phase 2 — Concept: Inputs, Sensors, and Digital Values

### A Sensor Is an Input

An *input* is information coming *into* the program from the outside world. A sensor is a device that turns something physical — a touch, a distance, a brightness — into a number the program can read. Reading `digital(0)` is the robot gathering an input.

### Digital Means Two States

A *digital* sensor has only two possible readings: **0 or 1**. Your touch sensor is digital — the button is either open (0) or pressed (1). There is no "halfway." This is the same true/false, [[BOOLEAN|Boolean]] thinking you used with `if` [[STATEMENT|statements]], now coming from the real world.

{{< callout title="Digital vs. [[ANALOG|Analog]] (a look ahead)" variant="gold" >}}
Some sensors are *analog* — they return a whole range of numbers, not just 0 or 1 (like a distance sensor reading "how far"). You'll meet those soon. Today's touch sensor is the simplest kind: just 0 or 1.
{{< /callout >}}

{{< ask key="p2_digital_meaning" label="What digital means" >}}In your own words: what does it mean that the touch sensor is "digital"? What are its only two possible values, and what does each one mean?{{< /ask >}}

## Phase 3 — Plan

### The Goal

{{< callout title="Back Into the Box" >}}
Your robot starts in the field. It must drive **backward** until its touch sensor presses against the **starting-box wall**, then stop. Reaching that wall means it is home — a known, reliable spot.
{{< /callout >}}

### Step 1 — Predict the Sensor Readings

Fill in what `digital(0)` reads in each situation, and what the loop should do.

{{< gridtable >}}
columns:
  - head: Situation
    width: 46%
  - head: "`digital(0)` reads"
    width: 27%
  - head: Loop keeps going?
rows:
  - - text: Driving back, not at wall yet
    - key: p3_reading_open
      aria: Reading when open
    - key: p3_loop_open
      aria: Loop when open
  - - text: Button hits the wall
    - key: p3_reading_pressed
      aria: Reading when pressed
    - key: p3_loop_pressed
      aria: Loop when pressed
{{< /gridtable >}}

### Step 2 — Write the Plan in Plain English

Before any code, describe your program in order — including what happens the moment the button is pressed.

{{< steps key="p3_plan" label="Plan step" count=4 >}}

## Phase 4 — Build &amp; Run

{{< safety title="⚠ Test in your hands FIRST" noprint="true" >}}
Before you ever put this on the board, **hold the robot up off the ground** and run the program. The wheels will spin backward. Press the button with your finger and watch the wheels stop. Only once that works should you set it on the field. This keeps the robot from driving off a table while you test.
{{< /safety >}}

### Starting Code Template

Type this program. The position [[VARIABLE|variables]] are back from before — you'll reset `y_position` to zero the moment the robot reaches the wall.

{{< code >}}
// Unit 2, Big Idea 1: The Touch Sensor
// Name: _______________________   Date: ___________

#include <kipr/wombat.h>

// The robot's stored position (from Unit 1). Start at the origin.
int x_position = 0;
int y_position = 0;

int main() {

    // Drive BACKWARD and keep checking the button.
    // digital(0) is 0 when open, 1 when pressed.
    while (digital(0) == 0) {   // while the button is NOT pressed...
        motor(0, -50);          // ...drive backward
        motor(3, -50);
        msleep(10);             // tiny pause so we don't overwork the computer
    }

    ao();              // button was pressed: stop the motors
    y_position = 0;    // we're home against the wall: reset our origin

    return 0;
}
{{< /code >}}

Looking ahead: next lab, you'll move the two `motor()` lines to just *above* the loop, so the loop body is only the `msleep`. The motors will already be running, and the loop will just wait and watch the sensor.
{.muted}

### Run Log

Test in your hands first, then on the board. Record each.

{{< gridtable >}}
columns:
  - head: Test
    width: 30%
  - head: What you expected
    width: 35%
  - head: What actually happened
rows:
  - - text: In hand, press by finger
    - key: p4_hand_expect
    - key: p4_hand_actual
  - - text: On board, back into wall
    - key: p4_board_expect
    - key: p4_board_actual
{{< /gridtable >}}

### [[CHECKLIST|Checklist]]

- You tested in your hands and saw the wheels stop when you pressed the button
- The loop condition is `digital(0) == 0` (keep going while NOT pressed)
- There is an `msleep(10)` inside the loop
- `ao()` comes right after the loop, so the robot stops when pressed
- `y_position = 0;` resets the origin once the robot is home

## Phase 5 — Make It a Reusable Behavior

Once your program works, wrap the whole back-until-pressed behavior into a [[FUNCTION|function]] so you can reuse it. Build it the way you've been doing it: write the **[[PROTOTYPE|prototype]]** above `main()`, call it inside `main()`, and put the full **definition** below.

{{< code >}}
#include <kipr/wombat.h>

int x_position = 0;
int y_position = 0;

void back_until_pressed();   // PROTOTYPE: the promise, above main()

int main() {
    back_until_pressed();    // CALL: drive home using the sensor, then reset zero
    return 0;
}

void back_until_pressed() {  // DEFINITION: the recipe, below main()
    while (digital(0) == 0) { // while the button is NOT pressed...
        motor(0, -50);
        motor(3, -50);
        msleep(10);
    }
    ao();              // stop
    y_position = 0;    // home: reset origin
}
{{< /code >}}

{{< ask key="p5_function_value" label="Value of the function" >}}Now that `main()` just says `back_until_pressed()`, what does it read like? Why is wrapping the loop in a named function helpful for the rest of the game?{{< /ask >}}

### [[DEBUGGING|Debugging]] Log

{{< repeattable count=4 prefix="debug" >}}
- kind: number
  head: "Try"
  width: "8%"
- head: What went wrong
  key: wrong
  width: 36%
- head: Why (your best guess)
  key: why
  width: 26%
- head: How you fixed it
  key: fix
{{< /repeattable >}}

## Phase 6 — Connect: The AI Literacy Bridge

{{< callout title="Big Idea 1 — AI Literacy Thread" >}}
Intelligent systems rely on sensors to gather information about the world around them.
{{< /callout >}}

Today your robot stopped because it *felt* a wall, not because a timer ran out. That is the foundation of every intelligent machine: it senses the world and responds to what is really there. A phone screen senses your touch; a car senses the car ahead; a thermostat senses the room's temperature. None of them follow a fixed script — they all watch a sensor and react. And just like you, they check that sensor over and over, many times a second.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_sensor_machine" label="A sensor machine" >}}Name a machine you use that reacts to a sensor instead of a timer. What is it sensing, and what does it do when the sensor changes?{{< /ask >}}

{{< ask key="p6_landmark_reset" label="Landmark reset" >}}Your robot reaching the wall told it "I am home." Why is a sensed, physical landmark a more trustworthy way to reset position than just hoping the robot drove the right distance?{{< /ask >}}

{{< ask key="p6_keep_checking" label="Why keep checking" >}}The loop checks the sensor many times a second, with a tiny pause each time. Why does an intelligent system need to keep checking, rather than reading a sensor just once?{{< /ask >}}

## Phase 7 — Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_digital" label="Reflection 1" n=1 >}}What is a digital sensor? What two values can `digital(0)` return, and what does each mean for the touch button?{{< /ask >}}

{{< ask key="p7_q2_while" label="Reflection 2" n=2 >}}Explain what a `while` loop does, in your own words. What makes it stop?{{< /ask >}}

{{< ask key="p7_q3_msleep" label="Reflection 3" n=3 >}}Why is there a small `msleep(10)` inside the loop? What would happen to the controller without it?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete this in 2–3 sentences: "Intelligent systems rely on sensors to gather information about the world. This means that a robot without sensors can only..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A — Drive Forward After Resetting

- After `back_until_pressed()` resets your origin, add a known forward move and update `y_position` as you go (like Unit 1 Big Idea 4).
- Because you started from a trusted zero, your stored position should now be accurate. Test whether it is.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B — Change the Speed

- Try a slower backward speed (for example −30). Does the robot stop more precisely at the wall? Why might slower be more accurate?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C — Try a Different msleep

- Change the loop's `msleep(10)` to `msleep(200)`. Press the button quickly and release. Does the robot still catch it? What does this tell you about how often it's checking?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D — Reset Both Coordinates

- If backing straight into the wall sets a known spot, should `x_position` reset too? Decide what makes sense for your robot's path and explain your reasoning.

{{< answer key="ext_d" label="Extension D" >}}

### Extension E — What If It Were Event-Driven?

- Everything you've built waits and checks in a loop (polling) — repeatedly asking "are we there yet?" An **event-driven** system instead sits idle until something happens, then a designated function runs automatically.
- In words (not code), rewrite how `back_until_pressed()` could work if it were event-driven instead of polling: what would the "event" be, and what function would run when it fires?

{{< answer key="ext_e" label="Extension E" >}}
