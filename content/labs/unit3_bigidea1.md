---
title: "Unit 3 · Big Idea 1 — Meet the Servos"
short_title: "Lab 3.1"
hub_unit: 3
description: "Servo basics and safe ranges — calibrate an arm and claw, find their limits, and try a first cube pick-up."
weight: 140
nav: labs
track: c
mission_id: unit3_bigidea1
eyebrow: "Unit 3 · Big Idea 1"
heading: "Meet the Servos"
subheading: "Student Lab · Calibrating an Arm and Claw"
credit: "KIPR · Botball Explorer · Unit 3 Big Idea 1 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine act on the world, not just move through it?"
  - term: "Big Idea"
    definition: "Machines Act on the World Through Controlled Motion"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems must know the limits of their own bodies to act safely."
  - term: "CS1 Concepts"
    definition: "[[SERVO|Servos]] · Position Values · Safe Ranges · Measurement"
  - term: "Game Context"
    definition: "Preparing to lift and stack the green and yellow cubes"
  - term: "What You Need"
    definition: "Explorer robot · demobot arm + claw servos · a cube · this lab sheet"
---

## Overview

Your robot can drive, sense, and follow lines --- but it can't yet *touch* the world. To stack cubes, it needs an arm and a claw. Those are run by **servos**: motors that move to an exact position and hold it. Today you'll build a demobot arm and claw, learn to move each servo to a precise spot, and --- most important --- find the **safe limits** of your servos so you never damage them. Then you'll try your first pick-up.

{{< callout title="Core Insight" >}}
A servo doesn't spin like a wheel --- it goes to a *position* and holds. That precision is what lets a robot grab, lift, and place objects exactly.
{{< /callout >}}

### By the end of this activity you will be able to:

- Enable and move a servo to an exact position with `enable_servo` and `set_servo_position`.
- Use the servo widget to find your arm and claw's safe minimum and maximum.
- Explain why staying inside the safe range protects the servo from burning out.
- Write a sequence that opens, lowers, closes, and lifts --- a first cube pick-up.
{.obj}

### Build &amp; Plug In the Servos

{{< callout title="Wiring --- get this right before powering on" variant="navy" >}}
Plug the **arm** servo into **servo [[PORT|port]] 0** and the **claw** servo into **servo port 3**.

On each servo cord, the **orange wire must be closest to the screen**. Plugging it in backward can damage the servo or the [[CONTROLLER|controller]] --- double-check before you power on.
{{< /callout >}}

## Phase 1 --- Concept: How a Servo Works

{{< figrow >}}
- src: servo/range-of-motion.jpg
  alt: "A servo's travel is a protractor --- 180° as positions 0 to 2047."
- src: servo/servo-functions.jpg
  alt: What has to be in place before a servo will move.
{{< /figrow >}}

{{< concept "A servo goes to a position, like a protractor" >}}
- text: |
    A motor spins freely. A **servo** is different: it turns to a specific *position* in its range and holds there. Think of a protractor --- its arm can point to any angle and stay. A servo's range is divided into numbered positions from **0 to 2047**.
- code: |
    enable_servo(0);              // turn on the servo on port 0
    set_servo_position(0, 1024);  // send it to position 1024 (the center)
- text: |
    The bigger the number, the farther it turns one way; the smaller, the farther the other way.
{{< /concept >}}

{{< concept "Enabling sends servos to 1024" >}}
- text: |
    The moment you call `enable_servo`, that servo jumps to position **1024** (the center) --- unless you've already told it to go somewhere else. So when your code first runs, expect the arm and claw to snap to their middle position. Plan for that, so the arm doesn't swing into something.
{{< /concept >}}

{{< concept "Position is a measurement" >}}
- text: |
    Here's the powerful part: a servo's position number *is* a measurement. A bigger arm number lowers the arm, and a smaller arm number raises it. A bigger claw number means the claw is open a different amount. Instead of measuring how far the robot drove, today you measure **how high the arm lifts** and **how far the claw opens** --- all by position value.
{{< /concept >}}

## Phase 2 --- Find the Arm's Safe Range

{{< figrow >}}
- src: servo/servo-ports.jpg
  alt: The servo ports.
- src: servo/plugging-in.jpg
  alt: Check the wire colours before you push a plug in.
- src: servo/plugged-port-0.jpg
  alt: A servo in port 0.
- src: servo/centering-horn.jpg
  alt: center the horn before you trust any position number.
{{< /figrow >}}

{{< safety title="⚠ This step protects your servo --- do it carefully" noprint=true >}}
A servo can only turn so far before it hits a hard mechanical stop. If you command it *past* that stop, the motor keeps straining against the wall and can **burn out**. You must find the highest and lowest positions your arm can reach *without* forcing it, and never command outside them.
{{< /safety >}}

{{< widgetstep title="Use the servo widget" >}}
Open the **Motors and [[SENSOR|Sensors]]** widget and find the **servo** page. Select **port 0** (the arm). Slowly move the position up and down. **Watch and listen:** stop the moment the arm reaches its physical limit --- do not push it into a strain or buzzing sound.

Record the minimum safe value (arm all the way up) and the maximum safe value (arm all the way down). On this robot, lower servo values raise the arm and higher values lower it.
{{< /widgetstep >}}

{{< figrow >}}
- src: servo/widget.jpg
  alt: The servo page on the Wombat.
- src: servo/widget-testing.jpg
  alt: Drag the slider to find a position before you code it.
{{< /figrow >}}

{{< gridtable caption="Arm (port 0) safe range" >}}
columns:
  - head: Arm position
    width: 55%
  - head: Value (0--2047)
rows:
  - - text: Minimum safe value (arm up) --- your ARM_MIN
    - key: arm_min
      aria: Arm min
  - - text: Maximum safe value (arm down) --- your ARM_MAX
    - key: arm_max
      aria: Arm max
  - - text: Resting / centered position
    - key: arm_rest
      aria: Arm rest
{{< /gridtable >}}

{{< ask key="p2_arm_limit" label="How you found the arm limit" >}}How did you know you'd reached the arm's limit? What did you see or hear that told you to stop before forcing it?{{< /ask >}}

## Phase 3 --- Find the Claw's Safe Range

{{< widgetstep title="Same careful process, port 3" >}}
Select **port 3** (the claw) in the servo widget. Slowly open and close it. Find the position where it's **open** wide enough to fit around a cube, and the position where it's **closed** snugly on the cube --- without straining past either stop.
{{< /widgetstep >}}

{{< gridtable caption="Claw (port 3) safe range" >}}
columns:
  - head: Claw position
    width: 55%
  - head: Value (0--2047)
rows:
  - - text: Open wide (fits around cube) --- your CLAW_OPEN
    - key: claw_open
      aria: Claw open
  - - text: Closed on the cube --- your CLAW_SHUT
    - key: claw_shut
      aria: Claw shut
{{< /gridtable >}}

{{< ask key="p3_position_meaning" label="Position as measurement" >}}A servo position is a measurement. In your own words, what does a bigger claw number mean physically? What does a bigger arm number mean?{{< /ask >}}

## Phase 4 --- Build: Your First Pick-Up

{{< safety title="⚠ Never command past your safe values" noprint=true >}}
Every `set_servo_position` in your code must use a number between the safe values you found. If you type a number outside them, you risk burning out the servo. Use your `ARM_MIN`, `ARM_MAX`, `CLAW_OPEN`, and `CLAW_SHUT` --- not random numbers.
{{< /safety >}}

Type your four safe values at the top, then build the grab sequence: open the claw, lower the arm, close on the cube, and lift. Each move gets a pause so the servo has time to arrive.

{{< code >}}
// Unit 3, Big Idea 1: Meet the Servos
// Name: _______________________   Date: ___________

#include <kipr/wombat.h>

// YOUR safe values from the widget: never command past these,
// or you can BURN OUT the servo by forcing it into a hard stop.
int ARM_MIN   = @@____@@;   // minimum safe value (arm up)
int ARM_MAX   = @@____@@;   // maximum safe value (arm down)
int CLAW_OPEN = @@____@@;   // safe open claw position
int CLAW_SHUT = @@____@@;   // safe closed-on-cube claw position

int main()
{
	enable_servo(0);    // arm servo on port 0
	enable_servo(1);    // claw servo on port 3
	// (enabling sends each servo to 1024 unless told otherwise)

	set_servo_position(3, CLAW_OPEN);   // 1. open the claw
	msleep(1000);                       // give the servo time to get there

	set_servo_position(0, ARM_MAX);     // 2. lower the arm to the cube
	msleep(1000);

	set_servo_position(3, CLAW_SHUT);   // 3. close on the cube
	msleep(1000);

	set_servo_position(0, ARM_MIN);     // 4. raise the cube up
	msleep(1000);

	return 0;
}
{{< /code >}}

About the `msleep(1000)`: servos don't move instantly, so you wait for each one to arrive before the next command. We use a full second for safety while you're learning --- once you know your servos, you can shorten it.
{.muted}

{{< safety title="⚠ Hold the robot and watch the first run" noprint=true >}}
Run this with the robot held still on a table, cube in reach. Watch each move happen. If anything strains, buzzes, or pushes against a stop, **stop the program immediately** and re-check your values.
{{< /safety >}}

### Pick-Up Log

{{< repeattable count=4 prefix="try" >}}
- kind: number
  head: "Try"
  width: "8%"
- head: What happened at each step (open / lower / close / lift)
  key: what
  width: 46%
- head: What you adjusted
  key: adjust
{{< /repeattable >}}

{{< ask key="p4_pickup_result" label="Pick-up result" >}}Did your robot pick up the cube? If a step didn't work (claw missed, arm too low/high), which safe value did you adjust, and why?{{< /ask >}}

## Phase 5 --- Measure the Motion

Servo positions are numbers, so you can measure your robot's reach the same way you measured driving distance. Use your values to answer these.

{{< gridtable >}}
columns:
  - head: Measurement
    width: 60%
  - head: Value
rows:
  - - text: Arm travel = ARM_MAX − ARM_MIN (how far the arm swings)
    - key: p5_arm_travel
      aria: Arm travel
  - - text: Claw travel = CLAW_OPEN − CLAW_SHUT (how far the claw moves)
    - key: p5_claw_travel
      aria: Claw travel
{{< /gridtable >}}

{{< ask key="p5_compare_travel" label="Compare travel" >}}Which has more travel --- your arm or your claw? Why might one need a bigger range of motion than the other?{{< /ask >}}

## Phase 6 --- Connect: The AI Literacy Bridge

{{< callout title="AI Literacy Thread" >}}
Intelligent systems must know the limits of their own bodies to act safely.
{{< /callout >}}

Before your robot could safely lift anything, you had to teach it the limits of its own arm and claw --- how far they can go before they break. Every robot that acts on the world has this problem. A factory arm knows exactly how far each joint can bend; a surgical robot has hard limits built in so it can never over-extend. Knowing your own physical limits isn't a weakness --- it's what makes safe, precise action possible. A system that doesn't know its limits will eventually destroy itself.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_know_limits" label="Knowing limits" >}}Why is commanding a servo past its hard stop dangerous? Connect this to why a robot must "know its own body."{{< /ask >}}

{{< ask key="p6_own_limits" label="Own limits" >}}Your safe values are probably a little different from a neighbor's, even with the same parts. Why must each robot find its own limits rather than sharing one set of numbers?{{< /ask >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_servo" label="Reflection 1" n=1 >}}How is a servo different from a regular motor? What does `set_servo_position` do?{{< /ask >}}

{{< ask key="p7_q2_enable" label="Reflection 2" n=2 >}}What happens the moment you call `enable_servo`, and why do you need to plan for it?{{< /ask >}}

{{< ask key="p7_q3_safe_range" label="Reflection 3" n=3 >}}Why is finding the safe minimum and maximum so important? What can happen if you ignore them?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete this in 2--3 sentences: "Intelligent systems must know the limits of their own bodies to act safely. This means that before a robot uses an arm, it must..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Set It Down Gently

- Add steps to lower the arm and open the claw to place the cube back down. Does the order matter? Test it.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- How Slow Can the Pause Go?

- Shorten the `msleep` after each move (try 700, then 500). What's the shortest pause where the servo still fully arrives before the next move? What happens if it's too short?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- A Middle Height

- Find an arm value *between* your min and max that holds the cube at a useful "carry" height. Why might you want to carry a cube partway up instead of fully raised?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Looking Ahead: Reusing These Moves

- You'll use "open," "close," "raise," and "lower" over and over in future missions. How could turning each into its own [[FUNCTION|function]] make stacking cubes easier later? (We'll build toward a shared [[LIBRARY|library]].)

{{< answer key="ext_d" label="Extension D" >}}

### Extension E --- What's the Computer, What's the Peripheral?

- The Wombat controller has a processor running your compiled program, memory holding that program while it runs, and things it commands --- like your servos. Which parts of your robot are "the computer," and which are peripherals it's controlling?
- Where does a sensor fit into that picture?

{{< answer key="ext_e" label="Extension E" >}}

### Extension F --- Compiled, Typed, and Running on Something

- Extension E called your program "compiled." Look up what compiling means, and contrast it with an **interpreted** language (like Python) that runs line-by-line instead. Which would you guess is faster for a robot that needs to react in real time, and why?
- C is a **strongly typed** language --- every [[VARIABLE|variable]] has a fixed type (double, int, char) that can't silently change. Some languages are more loosely typed, letting a variable hold different kinds of values over its life. What's one bug that strong typing might catch for you automatically that a loosely-typed language wouldn't?
- Your program also runs on top of an operating system on the Wombat controller. Name one thing you'd guess the OS is doing while your program runs, besides running your program.

{{< answer key="ext_f" label="Extension F" >}}
