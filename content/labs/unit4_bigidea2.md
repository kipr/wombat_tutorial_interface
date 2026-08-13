---
title: "Unit 4 · Big Idea 2 — Squaring Up"
short_title: "Lab 4.2"
hub_unit: 4
description: "Two tophat sensors and boolean && — each wheel watches its own sensor to straighten the robot against a line."
weight: 200
nav: labs
track: c
mission_id: unit4_bigidea2
eyebrow: "Unit 4 · Big Idea 2"
heading: "Squaring Up"
subheading: "Student Lab · Two Sensors, Two Wheels, One Straight Line"
credit: "KIPR · Botball Explorer · Unit 4 Big Idea 2 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine know where it is and where it is going?"
  - term: "Big Idea"
    definition: "A Robot Can Correct Its Own Heading"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems use feedback from multiple inputs to correct themselves."
  - term: "CS1 Concepts"
    definition: "Two [[SENSOR|Sensors]] at Once · [[BOOLEAN|Boolean]] Operators (&&) · Independent [[CONDITION|Conditions]]"
  - term: "Game Context"
    definition: "Squaring up in the right starting box to set up the spilled cubes"
  - term: "What You Need"
    definition: "Explorer robot · two front tophat sensors · right starting box with two lines · this lab sheet"
---

## Overview

A robot that drives "mostly straight" slowly turns crooked --- and a crooked robot misses everything it's aiming for. Today you'll fix that with a **square-up**: using *two* front sensors, the robot lines itself up perfectly straight against a line, fixing its own heading. This is your setup move for the spilled-cubes mission --- squaring up in the right starting box so you can bulldoze straight and true.

{{< callout title="Heads-up: this is a first draft" variant="gold" >}}
There are **a lot** of ways to square up, and many are smoother and smarter than this one. We're starting with the simplest version that works, so you can see the idea clearly. Once you understand it, you'll have plenty of ideas to make it better --- and that's the point.
{{< /callout >}}

### By the end of this activity you will be able to:

- Mount and name two front tophat sensors, one per side.
- Let each wheel react to its *own* sensor independently.
- Use the boolean `&&` operator to check two conditions at once.
- Square the robot up to a line, skip a gap, and square up on a second line.
{.obj}

## Phase 1 --- Set Up Two Front Sensors

Until now you had one line sensor. Square-up needs **two** --- one watching each front corner --- so the robot can tell if one side reached the line before the other. Move your existing sensor to one side and add a second on the other.

{{< callout title="Wiring and names" variant="navy" >}}
Mount one tophat sensor at the front-left, one at the front-right. Plug them in so:

`TOPHAT_LEFT` = `analog(0)` · `TOPHAT_RIGHT` = `analog(1)`

You'll add these names to your [[LIBRARY|library]] as [[VARIABLE|variables]], so your code reads `analog(TOPHAT_LEFT)` instead of a bare number --- much easier to understand.
{{< /callout >}}

{{< code >}}
// add these to your library, with your other variables
int TOPHAT_LEFT  = 0;    // front-left tophat sensor on analog port 0
int TOPHAT_RIGHT = 1;    // front-right tophat sensor on analog port 1
{{< /code >}}

{{< callout title="The key pairing" >}}
Each sensor controls the wheel on *its own side*: `TOPHAT_LEFT` drives the **left** wheel `motor(0)`, and `TOPHAT_RIGHT` drives the **right** wheel `motor(3)`. If these get crossed, the robot will chase the line the wrong way --- so double-check.
{{< /callout >}}

{{< ask key="p1_two_sensors" label="Why two sensors" >}}Why does squaring up need two sensors instead of one? What can two sensors tell the robot that one cannot?{{< /ask >}}

## Phase 2 --- Concept: Each Wheel Watches Its Own Sensor

{{< concept "The simple idea" >}}
- text: |
    Picture the robot rolling toward a line at a slight angle. One front corner reaches the black line before the other. Here's the trick: **each wheel only cares about the sensor on its own side.**

    - If a side's sensor is still on **white** (below the midpoint), that wheel keeps **driving forward**.
    - The instant that sensor hits **black** (above the midpoint), that wheel **freezes**.

    So the side that's behind keeps creeping forward while the side that arrived waits --- and the robot naturally straightens out until both sides are on the line. Then it's square.
{{< /concept >}}

{{< callout title="Remember your color convention" variant="navy" >}}
Black reads *higher* than white. So "still on white" means `analog(...) < MIDPOINT`, and "reached black" means the reading has climbed above `MIDPOINT`.
{{< /callout >}}

{{< ask key="p2_tilt" label="Tilt reasoning" >}}If the robot approaches the line tilted with its left corner ahead, which wheel reaches black first and freezes? What does the other wheel keep doing until the robot is square?{{< /ask >}}

## Phase 3 --- New Tool: The && Operator

{{< concept "&& means \"both must be true\"" >}}
- text: |
    The square-up is finished only when **both** sensors are on black at the same time. You need a way to check two conditions together --- that's the **logical AND** operator, written `&&`.
- code: |
    analog(TOPHAT_LEFT) > MIDPOINT && analog(TOPHAT_RIGHT) > MIDPOINT
    // true ONLY when BOTH sensors are on black
- text: |
    It's true only if the thing on its left is true *and* the thing on its right is true. If either side is still on white, the whole thing is false.
- truth:
    heads:
      - "Left on black?"
      - "Right on black?"
      - "&& result"
    rows:
      - ["no", "no", "false"]
      - ["yes", "no", "false"]
      - ["no", "yes", "false"]
      - cells: ["yes", "yes", "true"]
        class: yes
{{< /concept >}}

{{< concept "Keep looping until both are on black" >}}
- text: |
    You want the loop to *keep going* while it's NOT yet done. The `!` (NOT) operator flips true and false, so "keep going while we are not yet both-on-black" looks like:
- code: |
    while ( !(analog(TOPHAT_LEFT) > MIDPOINT && analog(TOPHAT_RIGHT) > MIDPOINT) )
    {
    	// ... keep squaring up ...
    }
- text: |
    When both sensors finally read black, the inside becomes true, the `!` flips it to false, and the loop stops.
{{< /concept >}}

{{< ask key="p3_and_meaning" label="AND meaning" >}}In your own words, what does `&&` do? Why is it the right operator for "stop when BOTH sensors are on the line"?{{< /ask >}}

## Phase 4 --- Build: The square_up [[FUNCTION|Function]]

Put it together. The loop runs until both sensors are on black. Inside, each wheel has its **own** [[IF STATEMENT|if statement]], checking its own sensor and either driving or freezing. Use a slow speed so it has time to react.

{{< code >}}
// Unit 4, Big Idea 2: Squaring Up
// Name: _______________________   Date: ___________

#include <kipr/wombat.h>

#include <@@yourname@@.h>     // has TOPHAT_LEFT, TOPHAT_RIGHT, MIDPOINT

void square_up();   // PROTOTYPE

int main()
{
	square_up();    // straighten up against the line
	return 0;
}

void square_up()
{
	// keep going until BOTH sensors are on black
	while ( !(analog(TOPHAT_LEFT) > MIDPOINT && analog(TOPHAT_RIGHT) > MIDPOINT) )
	{

		// LEFT wheel watches the LEFT sensor
		if (analog(TOPHAT_LEFT) < MIDPOINT)   // still on white?
		{
			motor(0, 30);                   // drive the left wheel forward
		}
		else                              // reached black
		{
			motor(0, 0);                    // freeze the left wheel
		}

		// RIGHT wheel watches the RIGHT sensor
		if (analog(TOPHAT_RIGHT) < MIDPOINT)  // still on white?
		{
			motor(3, 30);                   // drive the right wheel forward
		}
		else                                  // reached black
		{
			motor(3, 0);                    // freeze the right wheel
		}

		msleep(10);   // small pause so we don't overwork the controller
	}
	motor(0, 0); motor(3, 0);   // both on black: full stop, squared up
}
{{< /code >}}

{{< safety title="⚠ Start slow, hands ready" noprint=true >}}
Use a low speed (around 30) and keep a hand near the robot the first run. If a wheel drives the wrong way or never stops, check your sensor-to-wheel pairing and your MIDPOINT.
{{< /safety >}}

{{< ask key="p4_squareup_result" label="Square up result" >}}Run it from a slight angle. Did the robot straighten out and stop square on the line? Describe what each wheel did.{{< /ask >}}

## Phase 5 --- Apply: Square Up on Two Lines

Now the full move for the spilled-cubes setup. Starting in the right starting box, the robot squares up on the **first** line, drives forward just enough to **clear that line**, then squares up again to land on the **second** line --- straight and true both times.

{{< callout title="Use your model from last lab" variant="gold" >}}
To skip over the first line, drive a few inches with the `Drive` function you built: `Drive(3.0);` moves about 3 inches past the line so your sensors clear it before the second square-up. Adjust the number if your line spacing is different.
{{< /callout >}}

{{< code >}}
int main()
{
	square_up();      // straighten up on the FIRST line
	Drive(3.0);       // skip forward over the line (about 3 inches)
	square_up();      // straighten up on the SECOND line
	return 0;
}
{{< /code >}}

See how clean this reads? Three lines, three clear actions --- because `square_up` and `Drive` already do the hard work. That's your library paying off.
{.muted}

### Run Log

{{< repeattable count=4 prefix="run" >}}
- kind: number
  head: "Try"
  width: "8%"
- head: What happened (squared line 1? cleared the line? squared line 2?)
  key: what
  width: 46%
- head: What you changed
  key: changed
{{< /repeattable >}}

{{< ask key="p5_skip" label="Skip distance" >}}Did your `Drive(3.0)` clear the first line cleanly? If the second square-up started while a sensor was still on the first line, what would go wrong --- and how would you fix the skip distance?{{< /ask >}}

## Phase 6 --- Connect: The AI Literacy Bridge

{{< callout title="AI Literacy Thread" >}}
Intelligent systems use feedback from multiple inputs to correct themselves.
{{< /callout >}}

Your robot didn't just drive blindly --- it *watched two sensors and corrected its own heading* until it was straight. That's a feedback loop: sense, compare, adjust, repeat, until a goal is met. It's everywhere in intelligent systems. A plane's autopilot constantly nudges itself level using multiple sensors; a thermostat watches temperature and corrects; a robot vacuum squares itself to walls. None of them assume they're aligned --- they measure and fix it. You just built the same idea from two sensors and two `if` statements.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_feedback" label="Feedback loop" >}}How is your square-up a "feedback loop"? Name the sense → adjust → repeat steps your robot went through.{{< /ask >}}

{{< ask key="p6_better" label="Better way" >}}We said this is just one simple way to square up. Now that you've built it, describe one way you think it could be done *better* or smoother.{{< /ask >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_each_wheel" label="Reflection 1" n=1 >}}Explain how letting each wheel watch its own sensor makes the robot straighten out.{{< /ask >}}

{{< ask key="p7_q2_and" label="Reflection 2" n=2 >}}What does the `&&` operator do, and why did the loop need it to know when to stop?{{< /ask >}}

{{< ask key="p7_q3_skip" label="Reflection 3" n=3 >}}Why did you use `Drive(3.0)` between the two square-ups instead of just squaring up twice in a row?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete in 2--3 sentences: "Intelligent systems use feedback from multiple inputs to correct themselves. This means that to stay on course, a robot should..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Add square_up to Your Library

- Move `square_up` into your library, fully commented, so any mission can call it. Where does it belong among your other functions?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Tune the Speed

- Try the square-up at speed 20, then 50. Does slower square up more accurately? Does faster [[OVERSHOOT|overshoot]] the line? Find your best speed.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Bulldoze Setup

- This square-up sets you up to bulldoze the spilled cubes. After squaring on the second line, what would your robot do next to push cubes? Sketch the plan in library calls.

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- The Better Way

- Take your idea from Phase 6 for a smoother square-up and try to build it. What changed? Was it actually better?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E --- A Basic Building Block of AI

- Your square-up used a sense → compare → adjust loop. Many real AI systems (a self-driving car staying in its lane, a drone stabilizing itself) use this same repeating loop as a basic building block of their decision-making.
- In your own words, describe how a sense-compare-adjust loop like yours could "drive" a bigger AI system --- like a self-driving car deciding when to brake.

{{< answer key="ext_e" label="Extension E" >}}
