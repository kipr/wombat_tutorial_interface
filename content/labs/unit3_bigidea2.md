---
title: "Unit 3 · Big Idea 2 — Smooth Operator"
short_title: "Lab 3.2"
hub_unit: 3
description: "Clamping and step loops — build move_arm and move_claw that stay safe and move smoothly to stack a cube."
weight: 150
nav: labs
track: c
mission_id: unit3_bigidea2
eyebrow: "Unit 3 · Big Idea 2"
heading: "Smooth Operator"
subheading: "Student Lab · Safe, Smooth Servo Motion"
credit: "KIPR · Botball Explorer · Unit 3 Big Idea 2 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine act on the world, not just move through it?"
  - term: "Big Idea"
    definition: "Good [[FUNCTION|Functions]] Protect the Hardware and Control the Motion"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems control their actions smoothly and safely, not just quickly."
  - term: "CS1 Concepts"
    definition: "Clamping Values · Reading State · Step Loops · Timing"
  - term: "Game Context"
    definition: "Stacking a green/yellow cube onto the [[PALLET|pallet]]"
  - term: "What You Need"
    definition: "Explorer robot · arm + claw [[SERVO|servos]] · cubes · pallet · ruler · this lab sheet"
---

## Overview

Last lab you found your servos' safe limits --- but right now, nothing *stops* you from typing a dangerous number by accident. Today you'll build two functions, `move_arm` and `move_claw`, that protect the servo automatically. Then you'll make them move **slowly and smoothly**, one tiny step at a time --- because a cube balanced on a stack will topple if the arm jerks. By the end you'll stack a cube on the pallet with smooth, controlled motion.

{{< callout title="Core Insight" >}}
A good function does more than move the servo --- it guards against bad values, and it controls *how* the motion happens. Fast and jerky knocks the stack over; slow and smooth places it gently.
{{< /callout >}}

### By the end of this activity you will be able to:

- Write a function that *[[CLAMP|clamps]]* a value so it can never exceed the safe range.
- Read a servo's current position with `get_servo_position`.
- Move a servo smoothly by stepping two ticks at a time in a loop, with a one-tick final move when needed.
- Experiment with timing to control how fast or smooth the motion is.
{.obj}

{{< callout title="You'll reuse your values from last lab" variant="navy" >}}
Keep your `ARM_MIN`, `ARM_MAX`, `CLAW_OPEN`, and `CLAW_SHUT` from Big Idea 1 handy --- you'll use them again here.
{{< /callout >}}

## Phase 1 --- Concept: A Function That Protects Itself

{{< figrow >}}
- src: servo/servo-positions.jpg
  alt: Up, down, horizontal, open, close --- the positions worth recording.
- src: servo/attach-horn.jpg
  alt: Washer on the spline first, then the horn.
{{< /figrow >}}

{{< concept "Clamping --- forcing a value inside a safe range" >}}
- text: |
    Right now, you have to remember not to type a dangerous servo number. That's risky --- one typo could burn out a servo. A better idea: build a function that **fixes** any out-of-range value before it ever reaches the servo. This is called *clamping*.
- code: |
    if (position > ARM_MAX) position = ARM_MAX;   // above the maximum? use the maximum
    if (position < ARM_MIN) position = ARM_MIN;   // below the minimum? use the minimum
- text: |
    **Note:** The single line if statement is a shorthand way to write an if statement; that's why you don't see any curly brackets after "if". This *only* works when the instructions inside the curly brackets is a single line, not multiple.

    After these two lines, `position` is *guaranteed* to be inside your safe range --- no matter what number came in. Even if someone asks for 3000, the servo only ever sees `ARM_MAX`.
{{< /concept >}}

{{< ask key="p1_why_clamp" label="Why clamp" >}}Why is it safer to build the limits *into the function* than to just remember them in your head each time you call `set_servo_position`?{{< /ask >}}

## Phase 2 --- Build: move_arm and move_claw (Clamped)

Build both functions with clamping. They take the position you *want*, fix it if it's unsafe, then move. [[PROTOTYPE|Prototype]] above `main()`, definitions below --- your usual structure.

{{< code >}}
// Unit 3, Big Idea 2: Smooth Operator
// Name: _______________________   Date: ___________

#include <kipr/wombat.h>

#include <stdlib.h>            // provides abs() for the smooth-movement loop

int ARM_MIN   = @@____@@;   // your safe values from Big Idea 1
int ARM_MAX   = @@____@@;
int CLAW_OPEN = @@____@@;
int CLAW_SHUT = @@____@@;

void move_arm(int position);    // PROTOTYPES
void move_claw(int position);

int main()
{
	enable_servo(0);            // arm
	enable_servo(1);            // claw

	move_arm(ARM_MIN);          // safe: moves to the top
	move_arm(3000);             // UNSAFE number, but the clamp saves us:
	                            // the arm only goes to ARM_MAX, not 3000
	return 0;
}

void move_arm(int position)
{
	if (position > ARM_MAX) position = ARM_MAX;   // clamp high
	if (position < ARM_MIN) position = ARM_MIN;   // clamp low
	set_servo_position(0, position);              // now it's guaranteed safe
}

void move_claw(int position)
{
	// the claw's safe ends are CLAW_OPEN and CLAW_SHUT: clamp between them
	if (position < CLAW_OPEN) position = CLAW_OPEN;
	if (position > CLAW_SHUT) position = CLAW_SHUT;
	set_servo_position(3, position);
}
{{< /code >}}

Note: this assumes `CLAW_OPEN` is the smaller number and `CLAW_SHUT` the larger. If yours are the other way around, swap them in the two `if` lines so the bigger value is the high clamp.
{.muted}

{{< ask key="p2_clamp_test" label="Clamp test result" >}}Test it: call `move_arm` with a number way above `ARM_MAX`. What does the arm actually do? Why didn't it strain?{{< /ask >}}

## Phase 3 --- Concept: Smooth, One Step at a Time

Right now `set_servo_position` sends the servo to the target as fast as it can --- a sudden jerk. That jerk can knock over a cube you're trying to stack. To move **smoothly**, you creep there two ticks at a time, with a tiny pause between steps.

{{< callout title="Why two ticks --- and why store the reading?" variant="navy" >}}
A one-tick command is too small to make the servo actually move, so these functions normally step by two ticks. Each call to `get_servo_position` asks the controller for another reading; calling it several times during every loop can overload the controller. Store the reading in `current_position`, reuse that variable for the comparisons and next command, then refresh it once at the end of the loop.
{{< /callout >}}

{{< concept "Read where you are, step toward where you want to be" >}}
- text: |
    A new command lets you read the servo's current spot:
- code: |
    get_servo_position(0);   // returns the servo's current position on port 0
- text: |
    With that, a loop can walk the servo to its target one step at a time --- usually moving **+2** if it's below the target or **−2** if it's above. When the target is only one tick away, it moves that final tick directly so it cannot skip over the target:
- code: |
    int current_position = get_servo_position(0);
    while (current_position != target_position)  // until we arrive...
    {
    	if (abs(current_position - target_position) == 1)
    	{
    		set_servo_position(0, target_position);   // move the final tick
    	}
    	else if (current_position < target_position)
    	{
    		set_servo_position(0, current_position + 2);   // step up
    	}
    	else
    	{
    		set_servo_position(0, current_position - 2);   // step down
    	}
    	msleep(1);   // tiny pause: this is what makes it smooth
    	current_position = get_servo_position(0);
    }
- text: |
    Because the loop updates `current_position` after each step, it figures out which way to go on its own. You never tell it where it started --- only where to end.
{{< /concept >}}

{{< ask key="p3_no_start" label="Why no start needed" >}}The loop decides to step up or down by reading `get_servo_position`. Why does this mean you don't need to tell the function the servo's starting position?{{< /ask >}}

## Phase 4 --- Build: Smooth move_arm and move_claw

{{< safety title="⚠ Keep the clamp" noprint="true" >}}
The smooth version still clamps first. Clamp the target into the safe range, *then* step toward it. That way the loop can never walk the servo past a safe limit.
{{< /safety >}}

Rewrite both functions to clamp, then step smoothly to the target. Start with `msleep(1)` in the loop.

{{< code >}}
void move_arm(int target_position)
{
	if (target_position > ARM_MAX) target_position = ARM_MAX;   // clamp first
	if (target_position < ARM_MIN) target_position = ARM_MIN;

	int current_position = get_servo_position(0);   // read once to avoid overloading the controller
	while (current_position != target_position)     // step until we arrive
	{
		// A 2-tick step could skip a target that is only 1 tick away.
		if (abs(current_position - target_position) == 1)
		{
			set_servo_position(0, target_position);
		}
		else if (current_position < target_position)
		{
			set_servo_position(0, current_position + 2);
		}
		else
		{
			set_servo_position(0, current_position - 2);
		}
		msleep(@@1@@);   // 1 ms per step = smooth motion
		current_position = get_servo_position(0);
	}
}

void move_claw(int target_position)
{
	if (target_position < CLAW_OPEN) target_position = CLAW_OPEN;   // clamp first
	if (target_position > CLAW_SHUT) target_position = CLAW_SHUT;

	int current_position = get_servo_position(1);   // read once to avoid overloading the controller
	while (current_position != target_position)     // step until we arrive
	{
		// A 2-tick step could skip a target that is only 1 tick away.
		if (abs(current_position - target_position) == 1)
		{
			set_servo_position(3, target_position);
		}
		else if (current_position < target_position)
		{
			set_servo_position(3, current_position + 2);
		}
		else
		{
			set_servo_position(3, current_position - 2);
		}
		msleep(@@1@@);
		current_position = get_servo_position(1);
	}
}
{{< /code >}}

{{< ask key="p4_smooth_observe" label="Smooth observation" >}}Run it and watch the arm. How is the motion different from last lab's instant `set_servo_position`? Describe what you see.{{< /ask >}}

## Phase 5 --- Experiment: Tune the Timing

The `msleep` inside the loop controls how fast each step happens --- and so how fast and smooth the whole motion is. Try three values and feel the difference. Use the same arm move (say, `ARM_MIN` to `ARM_MAX`) each time so it's a fair test.

{{< gridtable caption="Step timing --- same move, three pauses" >}}
columns:
  - head: msleep in loop
    width: 22%
  - head: How fast did the arm move?
    width: 38%
  - head: How smooth / steady? (cube safe?)
rows:
  - - text: 1 ms
    - key: t1_speed
    - key: t1_smooth
  - - text: 2 ms
    - key: t2_speed
    - key: t2_smooth
  - - text: 3 ms
    - key: t3_speed
    - key: t3_smooth
{{< /gridtable >}}

{{< ask key="p5_timing_finding" label="Timing finding" >}}As the `msleep` got bigger (1 → 2 → 3 ms), what happened to the speed? What happened to the smoothness? Which felt best for carrying a cube?{{< /ask >}}

{{< ask key="p5_why_slower_gentler" label="Why slower and gentler" >}}Why does a longer pause between single steps make the motion slower *and* gentler at the same time?{{< /ask >}}

## Phase 6 --- Apply: Stack a Cube on the Pallet

Now put it to work. Using your smooth `move_arm` and `move_claw`, pick up a cube and place it on the pallet --- gently enough that it stays put. Pick the timing that worked best in Phase 5.

{{< callout title="Measure the lift" variant="gold" >}}
A servo position is a measurement --- and so is the cube's real height. Record how high off the table the cube sits at each stage, so you can see your arm positions turn into real-world height.
{{< /callout >}}

{{< gridtable >}}
columns:
  - head: Stage
    width: 50%
  - head: Cube height off the table (inches)
rows:
  - - text: Cube on the table (start)
    - key: h_start
  - - text: Cube lifted (arm raised)
    - key: h_lifted
  - - text: Cube placed on the pallet
    - key: h_pallet
{{< /gridtable >}}

### Stacking Log

{{< repeattable count=4 prefix="stack" >}}
- kind: number
  head: "Try"
  width: "8%"
- head: What happened (did the cube stay on the pallet?)
  key: what
  width: 46%
- head: What you adjusted
  key: adjust
{{< /repeattable >}}

{{< ask key="p6_smooth_helped" label="Smooth helped" >}}Did smooth motion help the cube stay on the pallet compared to a sudden move? Why would a jerky arm knock it off?{{< /ask >}}

## Phase 7 --- Connect &amp; Reflect

{{< callout title="AI Literacy Thread" >}}
Intelligent systems control their actions smoothly and safely, not just quickly.
{{< /callout >}}

A robot that slams its arm to a position is fast but useless for delicate work. Real systems --- a robot arm placing a chip on a circuit board, a crane lowering a load, a surgical tool --- move *smoothly and within safe limits* on purpose. You built both of those ideas into your functions: the clamp keeps the motion safe, and the step loop keeps it smooth. That's what separates a tool that works from one that breaks things.

Complete the reflection on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_clamp" label="Reflection 1" n=1 >}}What does it mean to *clamp* a value? How do your `move_arm`/`move_claw` functions protect the servo?{{< /ask >}}

{{< ask key="p7_q2_loop" label="Reflection 2" n=2 >}}Explain how the step loop moves the servo smoothly. Why doesn't it need a starting position?{{< /ask >}}

{{< ask key="p7_q3_timing" label="Reflection 3" n=3 >}}What did changing the `msleep` (1, 2, 3 ms) do to the motion? What's the trade-off between speed and smoothness?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete in 2--3 sentences: "Intelligent systems control their actions smoothly and safely, not just quickly. This means that to place a cube without knocking it over, a robot must..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Step by More Than One

- Change the step from `+ 2` to `+ 4` (and `- 4`). How would you adjust the near-target check so the loop cannot skip over its target? What happens to speed and smoothness?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Stack Two Cubes

- Stack a second cube [[ON TOP OF]] the first. Does smooth motion matter even more with a taller stack? What did you have to change?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- A Speed [[ARGUMENT|Argument]]

- Imagine `move_arm` could also take a speed (the `msleep` value) as a second input. Why might you want fast motion sometimes and slow motion other times in the same mission?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Looking Ahead: Your Toolbox Is Growing

- You now have `move_arm` and `move_claw` that you'll want in *every* future mission. Wouldn't it be nice to write them once and reuse them everywhere, instead of copying them into each program? Next lab, you'll do exactly that --- build a **[[LIBRARY|library]]**.

{{< answer key="ext_d" label="Extension D" >}}
