---
title: "Unit 2 · Big Idea 4 — Reading the Line"
short_title: "Lab 2.4"
hub_unit: 2
description: "Analog sensors and thresholds — calibrate a Tophat, find the midpoint, and steer along a line with if/else."
weight: 110
nav: labs
track: c
mission_id: unit2_bigidea4
eyebrow: "Unit 2 · Big Idea 4"
heading: "Information Must Be Interpreted"
subheading: "Student Lab · Reading the Line"
credit: "KIPR · Botball Explorer · Unit 2 Big Idea 4 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine sense and respond to the world around it?"
  - term: "Big Idea"
    definition: "Information Must Be Interpreted Before It Becomes Useful"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems transform raw [[SENSOR|sensor]] data into meaningful information."
  - term: "CS1 Concepts"
    definition: "[[ANALOG|Analog]] Sensors · Raw Data · [[CALIBRATION|Calibration]] · [[THRESHOLD|Thresholds]] · if/else on a live sensor"
  - term: "Game Context"
    definition: "Detecting the line — steering along a line"
  - term: "What You Need"
    definition: "Explorer robot · Tophat sensor · ruler · black line on a white board · this lab sheet"
---

## Overview

Your touch sensor gave a clean yes-or-no. Today's sensor is different. A **Tophat** sensor shines infrared light at the floor and measures how much bounces back --- white reflects a lot, black line reflects little. But it doesn't return 0 or 1. It returns a **number** from a big range, and that number is *noisy* --- it jumps around even when nothing moves. Before this sensor is useful, you have to **interpret** it: figure out what counts as "black" and what counts as "white." That work is most of this lab, and almost all of it happens before you write a single line of code.

{{< callout title="Core Insight" >}}
Raw sensor data is messy and meaningless on its own. The intelligence is in turning a jumpy number into a clear [[DECISION|decision]]: "this means line, that means floor."
{{< /callout >}}

### By the end of this activity you will be able to:

- Read an *analog* sensor with `analog(0)` and explain why its values are noisy.
- Calibrate the sensor: measure black and white, and find the best mounting height.
- Calculate a *threshold* (midpoint) that separates "black" from "white."
- Use `if/else` on the live reading to steer a robot along a line.
{.obj}

{{< callout title="A heads-up" variant="navy" >}}
This is the biggest lab yet. You'll do a lot of measuring and thinking before any driving. Take your time on the data --- the better your calibration, the better your robot follows the line.
{{< /callout >}}

## Phase 1 --- Mount the Sensor & Find Its Values

{{< figrow >}}
- src: kit/analogsensors.jpg
  alt: Analog sensors give a range of values, not a yes or no.
{{< /figrow >}}

### Mount It

{{< callout title="Setup" variant="navy" >}}
Mount the **Tophat sensor** on the **front** of your robot, facing down at the floor, about **1/4 inch** off the surface.

Plug it into **analog [[PORT|port]] 0**. In code, `analog(0)` reads this sensor.
{{< /callout >}}

### Find It on the [[CONTROLLER|Controller]]

{{< widgetstep title="Watch the raw values" >}}
On the Wombat, open the **Motors and Sensors** widget, then the **sensor list**. Find the **analog port 0** reading.

Hold the sensor still over a white part of the board and just watch the number. **It bounces.** It won't sit on one value --- it jitters up and down. That jitter is normal; it's *raw data*, and it's exactly why we can't just check for one exact number.
{{< /widgetstep >}}

{{< ask key="p1_white_bounce" label="White bounce range" >}}Hold the sensor still over white and watch the port-0 value for a few seconds. What was the lowest number you saw, and the highest? How much did it bounce?{{< /ask >}}

{{< ask key="p1_why_bounce_problem" label="Why bounce is a problem" >}}Why is a sensor that bounces around a problem if you wanted to check for one exact value like `analog(0) == 2000`?{{< /ask >}}

## Phase 2 --- Find the Best Height

The sensor's height off the floor changes how well it can tell black from white. Too close or too far, and black and white start to look the same. You want the height where the **difference** between a black reading and a white reading is as **big** as possible --- a big gap is easy to split; a small gap is not.

### Step 1 --- Read at Different Heights Over WHITE

Hold the sensor at each height over a plain white area. Record the value you see (pick the middle of the bounce).

{{< gridtable caption="Over WHITE" >}}
columns:
  - head: Height off surface
    width: 40%
  - head: Sensor value (analog 0)
rows:
  - - text: 1/8 inch
    - key: white_h1
  - - text: 1/4 inch
    - key: white_h2
  - - text: 1/2 inch
    - key: white_h3
  - - text: 3/4 inch
    - key: white_h4
{{< /gridtable >}}

### Step 2 --- Read at Different Heights Over BLACK

Now the same heights, over black line.

{{< gridtable caption="Over BLACK" >}}
columns:
  - head: Height off surface
    width: 40%
  - head: Sensor value (analog 0)
rows:
  - - text: 1/8 inch
    - key: black_h1
  - - text: 1/4 inch
    - key: black_h2
  - - text: 1/2 inch
    - key: black_h3
  - - text: 3/4 inch
    - key: black_h4
{{< /gridtable >}}

### Step 3 --- Find the Biggest Difference

For each height, subtract: black value − white value. The bigger the difference, the easier it is to tell them apart.

{{< gridtable >}}
columns:
  - head: Height
    width: 34%
  - head: Difference (black − white)
    width: 33%
  - head: Biggest gap? (✓)
rows:
  - - text: 1/8 inch
    - key: diff_h1
    - key: best_h1
  - - text: 1/4 inch
    - key: diff_h2
    - key: best_h2
  - - text: 1/2 inch
    - key: diff_h3
    - key: best_h3
  - - text: 3/4 inch
    - key: diff_h4
    - key: best_h4
{{< /gridtable >}}

{{< ask key="p2_best_height" label="Best height reasoning" >}}Which height gave the biggest difference between black and white? Why is a bigger gap better for telling the line from the floor?{{< /ask >}}

## Phase 3 --- Calibrate & Find the Midpoint

Now mount the sensor firmly at your best height (around 1/4 inch). With it mounted exactly where it will drive, take your real readings --- these are the numbers your code will trust.

### Step 1 --- Mounted Readings

{{< gridtable >}}
columns:
  - head: Sensor over...
    width: 50%
  - head: Mounted value (analog 0)
rows:
  - - text: WHITE floor
    - key: mounted_white
      aria: Mounted white
  - - text: Black line
    - key: mounted_black
      aria: Mounted black
{{< /gridtable >}}

### Step 2 --- Calculate the Midpoint

The **midpoint** is the value exactly halfway between black and white. It's your *threshold*: above it means black, below it means white. Add your two readings and divide by 2.

{{< calc title="Midpoint = ( black + white ) ÷ 2" noprint=true >}}
- equation:
  - text: "("
  - input:
      key: calc_black
      aria: black value
      placeholder: black
  - text: "+"
  - input:
      key: calc_white
      aria: white value
      placeholder: white
  - text: ") ÷ 2 ="
  - input:
      key: calc_midpoint
      aria: midpoint
      placeholder: midpoint
{{< /calc >}}

{{< callout title="This number is the heart of the lab" variant="gold" >}}
Your midpoint is the line between "I see black" and "I see white." Write it down --- you'll type it into your code as `MIDPOINT`. Every robot's number is a little different, because every sensor is a little different.
{{< /callout >}}

{{< ask key="p3_midpoint_meaning" label="Midpoint meaning" >}}Write your final midpoint value here, and explain in one sentence what it means.{{< /ask >}}

## Phase 4 --- Concept: Threshold & Steering

{{< concept "Analog: a range, not a switch" >}}
- text: |
    Your touch sensor was *[[DIGITAL|digital]]* --- only 0 or 1. The Tophat is *analog* --- it returns a number across a wide range. That's more information, but it's also messier: it bounces, and there's no single "line" value. You have to decide where the line *is*.
{{< /concept >}}

{{< concept "A threshold turns a number into a decision" >}}
- text: |
    A **threshold** is a cutoff. Once you have your midpoint, every reading becomes a yes-or-no again:
- code: |
    if (analog(0) > MIDPOINT) {   // reading is HIGH: that's BLACK
        // ...we're on the line
    } else {                       // reading is LOW: that's WHITE
        // ...we're on the floor
    }
- text: |
    This is the same `if/else` you learned in Unit 1 --- but now the [[CONDITION|condition]] reads a **live sensor**, not a number you typed. The robot is interpreting the real world.
{{< /concept >}}

{{< concept "Following the EDGE of the line" >}}
- text: |
    With one sensor, the trick is to ride the **edge** of the line --- half on black, half on white. Every time the robot drifts, the reading tells it which way it slipped, and it steers back:

    - Reading **above** midpoint → drifted onto **black** → steer one way
    - Reading **below** midpoint → drifted onto **white** → steer the other way

    Constantly correcting back and forth, the robot wiggles its way right along the edge of the line.
{{< /concept >}}

## Phase 5 --- Build the line_follow [[FUNCTION|Function]]

{{< safety title="⚠ Test in your hands first" noprint=true >}}
Hold the robot up and pass the line under the sensor by hand. Watch the wheels change speed as you move from white to black. Only put it on the board once the steering reacts the right way.
{{< /safety >}}

You'll reuse the [[ENCODER|encoder]] skeleton from `Tick_Drive` --- clear the counter, loop to a [[TICK|tick]] target, brake at the end --- but inside the loop you'll put the `if/else` that steers. Type your own `MIDPOINT` from Phase 3 at the top. [[PROTOTYPE|Prototype]] above `main()`, definition below.

{{< code >}}
// Unit 2, Big Idea 4: Reading the Line
// Name: _______________________   Date: ___________

#include <kipr/wombat.h>

int MIDPOINT = @@____@@;   // YOUR midpoint from Phase 3 (black + white) / 2

void line_follow(int ticks);   // PROTOTYPE: drive this far while steering on the line

int main() {
    line_follow(3000);         // follow the line for this many ticks
    return 0;
}

void line_follow(int ticks) {
    cmpc(0);                       // clear the wheel counter

    while (gmpc(0) < ticks) {       // keep going until we've driven far enough
        if (analog(0) > MIDPOINT) { // HIGH reading means BLACK, so steer right
            motor(0, 50);          // left motor faster
            motor(3, 20);          // right motor slower
        } else {                   // LOW reading means WHITE, so steer left
            motor(0, 20);          // left motor slower
            motor(3, 50);          // right motor faster
        }
    }

    motor(0, 0);                   // brake (from Big Idea 2)
    motor(3, 0);
    msleep(50);
}
{{< /code >}}

{{< callout title="If your robot steers the WRONG way --- flip the branches" variant="gold" >}}
Every robot is wired a little differently. If your robot veers off the line instead of hugging it, swap the two motor [[BLOCK|blocks]]: put the white block's speeds in the black branch and the black block's speeds in the white branch. The logic is right; it just needs to match how *your* motors are wired.
{{< /callout >}}

### Tuning Log

Run it on the line. Adjust your speeds (the 50 and 20) and re-test. Record what you tried.

{{< repeattable count=5 prefix="tune" >}}
- kind: number
  head: "Try"
  width: "8%"
- head: Speeds you used (fast / slow)
  key: speeds
  width: 30%
- head: How well did it follow the line?
  key: result
{{< /repeattable >}}

### [[CHECKLIST|Checklist]]

- You typed your own measured `MIDPOINT` at the top
- The `if` tests `analog(0) > MIDPOINT`
- The black branch and white branch set the two motors to different speeds
- The loop still uses `cmpc(0)` and `gmpc(0) < ticks` to control distance
- The robot brakes at the end

## Phase 6 --- Connect: The AI Literacy Bridge

{{< callout title="Big Idea --- AI Literacy Thread" >}}
Intelligent systems transform raw sensor data into meaningful information.
{{< /callout >}}

Your sensor handed you a noisy, jumpy number. On its own, it meant nothing. You turned it into meaning by calibrating and setting a threshold --- and only then could the robot act on it. Every intelligent system does this. A voice assistant gets a messy sound wave and has to decide "was that a word?" A medical device reads a noisy heartbeat signal and decides "is that a real beat?" The raw data is always messy; the intelligence is in interpreting it well. A bad threshold makes a bad decision, no matter how good everything else is.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_calibrate_each" label="Why calibrate each" >}}Your midpoint was different from your neighbor's, even with the same kind of sensor. Why must each robot be calibrated for itself instead of using one number for everyone?{{< /ask >}}

{{< ask key="p6_bad_threshold" label="Bad threshold effects" >}}Imagine you set your threshold too low, so the robot calls almost everything "black." What would the robot do wrong? Now too high --- what goes wrong then?{{< /ask >}}

{{< ask key="p6_other_system" label="Another system" >}}A raw sensor value is just a noisy number until it's interpreted. Name another machine that has to turn messy raw data into a clear decision, and say what its "threshold" decides.{{< /ask >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_analog_digital" label="Reflection 1" n=1 >}}What is the difference between a *digital* sensor (the touch button) and an *analog* sensor (the Tophat)?{{< /ask >}}

{{< ask key="p7_q2_threshold" label="Reflection 2" n=2 >}}What is a *threshold*, and how did you calculate yours? Why is the midpoint a good choice?{{< /ask >}}

{{< ask key="p7_q3_live_sensor" label="Reflection 3" n=3 >}}In Unit 1, your `if/else` tested a number you typed. Today it tested a live sensor. Why is testing a real sensor more powerful?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete this in 2--3 sentences: "Intelligent systems transform raw sensor data into meaningful information. This means that before a robot can trust a sensor, someone must..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Smoother Steering

- Your robot probably wiggles. Try making the fast/slow speeds closer together (like 45 and 30). Does it wobble less? What's the trade-off?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Re-calibrate Under Different Light

- Move to a brighter or darker spot and re-read black and white. Did your midpoint change? What does that tell you about trusting old calibration data?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Make is_on_black()

- Write a small helper function (prototype above, definition below) that returns whether the sensor sees black, using your threshold. How could that make `line_follow` easier to read?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Two Sensors (a peek ahead)

- If you had a Tophat on the left AND the right, how could the robot follow the line more smoothly? Sketch the idea in words. (We'll build toward this.)

{{< answer key="ext_d" label="Extension D" >}}
