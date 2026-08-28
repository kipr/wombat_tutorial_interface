---
title: "Coding Project 10 — Feeling for Things"
short_title: "Coding Project 10"
linkTitle: "Feeling for Things"
description: "The touch sensor, and the loop that keeps checking it. Drive until bump, find a wall you can trust, then stack all three unstraight cubes."
weight: 10
nav: discovery
mission_id: discovery_coding_10
mission_title: "Coding Project 10 — Feeling for Things"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 10
strand: coding
platform: wombat
phase: "Phase 4 · Make It Reliable"
phase_order: 4
time: "One class period"
eyebrow: "Discovery · Coding Project 10"
heading: "Feeling for Things"
subheading: ""
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Feeling for Things"
mission_label: "Mission 13 advanced — 13 points"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: Project
    definition: "Coding Project 10"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Make It Reliable"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Mounting a touch [[SENSOR|sensor]], learning the loop that keeps checking it, and using contact to find a position your robot can trust."
  - term: "Mission Anchor"
    definition: "[[@13:base|Mission 13]] — Straighten Up (advanced bonus) — 13 points"
  - term: "Before You Start"
    definition: "Project 9 — you need to be comfortable writing and using [[VARIABLE|variables]]."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Robot with arm and claw"
      - key: need_2
        label: "Touch [[SENSOR|sensor]]"
      - key: need_3
        label: Wombat
      - key: need_4
        label: "Charged battery"
      - key: need_5
        label: "The game field"
      - key: need_6
        label: "Your Project 9 program"
---

## Try It --- Walking in the Dark

Imagine the power is out and you are trying to cross a room you know well. Your eyes are useless. So you put a hand out in front of you and start walking.

**Actually do it.** Stand a few steps from a wall, close your eyes, put one hand out, and walk slowly toward it until you touch it.

{{< short-answer key="p1_how_many_checks" label="How many checks" prompt="How many times did you check whether your hand had reached the wall?" >}}

{{< ask key="p1_what_doing" label="What you were doing" >}}You did not check once and hope. What were you doing the whole time you were walking?{{< /ask >}}

{{< callout title="That Is a Loop" variant="gold" >}}
Check. Step. Check. Step. Check --- *touched something* --- stop and do something different.

Repeating an action while you wait for something to become true is called **looping**, and it is the whole idea of this project.
{{< /callout >}}

### Sort your sensors

Tip your kit's sensors out on the table. Without looking anything up, sort them into **two piles**. You decide the rule.

{{< gridtable >}}
columns:
- head: "My rule for splitting them"
- head: "What went in each pile"
  aria: "Pile 1"
rows:
  - cells:
      - text: "Pile 1"
      - key: p1_pile1
        aria: "Pile 1"
  - cells:
      - text: "Pile 2"
      - key: p1_pile2
        aria: "Pile 2"
{{< /gridtable >}}
{{< short-answer key="p1_sort_rule" label="Sorting rule" prompt="What rule did you use?" >}}

{{< callout title="One Split Matters More Than the Others" variant="navy" >}}
Some of your sensors work like a **light switch** --- pressed or not pressed, and nothing in between. Others give you a whole range of readings.

If that is how you sorted them, you found the split that programmers care about. If not, re-sort them that way now.
{{< /callout >}}

## Learn It --- Keep Checking Until

{{< figrow >}}
- src: kit/digitalsensors.jpg
  alt: "Digital sensors --- the long lever and large touch sensors."
{{< /figrow >}}
A [[SENSOR|sensor]] turns something physical --- a touch, a brightness, a distance --- into a number your program can read.

### Digital --- What you have today

A [[DIGITAL|digital]] sensor is like a light switch. Two readings, nothing between:

- `0`: not touched
- `1`: touched

A touch sensor is a mechanical switch. Pressing it pushes two contacts together and completes a circuit.
{.muted}

### Analog --- Introduced in project 14

An [[ANALOG|analog]] sensor gives a whole range of numbers, from `0` to `4095`. Light sensors and rangefinders work this way --- "how bright," not "bright or dark."

You will meet these later. Today, everything is 0 or 1.
{.muted}

{{< callout title="0 and 1 Mean More Than Numbers" variant="navy" >}}
In programming, **1 means true, yes, on** and **0 means false, no, off**. That is why a sensor reading of 1 can be read as "yes, I am touching something."
{{< /callout >}}

### Why msleep cannot help you here

Every time you needed the robot to wait, you used `msleep()`. That will not work now.

**The program cannot read a sensor while it is sleeping.** If you tell it to sleep for two seconds and the sensor is pressed after half a second, the robot never notices.

You need it to keep checking --- over and over, as fast as it can. That is what a loop is for.

### Comparing two values

To check something, you compare two values. These are the comparisons you can use:

| Symbol | Means | Example |
| --- | --- | --- |
| `==` | is equal to | `5 == 4` is false |
| `!=` | is not equal to | `5 != 4` is true |
| `>` | is greater than | `5 > 4` is true |
| `<` | is less than | `5 < 4` is false |
| `>=` | is greater than or equal to | `5 >= 5` is true |
| `<=` | is less than or equal to | `5 <= 5` is true |

{{< safety title="⚠ Two Equals Signs, Not One" >}}
One `=` means *make this equal to that* --- it is what you used to set a [[VARIABLE|variable]] in Project 9.

Two `==` means *is this equal to that?* --- it is a question.

Use one where you meant two and your program may still [[COMPILE|compile]] and run, then do something wrong. This is one of the hardest bugs to find, so check it every time.
{{< /safety >}}

### The while loop

Say it in plain English before you say it in C:

```text
while it is raining
{
    my umbrella is open and over my head
}

close the umbrella
```

The umbrella stays up *the whole time* the [[CONDITION|condition]] is true. The moment it stops raining, you fall out of the [[BLOCK|block]] and close it.

| Code / part | What it means |
| --- | --- |
| while (condition) | Ask the question. **No [[SEMICOLON\|semicolon]] here** --- the braces do that job, same as `int main ()`. |
| `{ ... }` | Everything inside runs, over and over, as long as the answer is true. |
| `after the }` | The moment the answer is false, the robot jumps down here. |

### Reading a touch sensor

`digital(0)` reads the digital sensor plugged into [[PORT|port]] 0. It gives you a `0` or a `1`.

```c
// While not touched
while (digital(0) == 0)
{
	// Keep driving
	motor(0, 100);
	motor(3, 100);
	// Tiny pause to avoid overworking the controller
	msleep(10);
}

motor(0, 0);
motor(3, 0);
// Touched: Stop
msleep(30);
```

{{< callout title="Read It Out Loud" variant="gold" >}}
*"While the sensor in port 0 reads zero --- while nothing is [[TOUCHING]] it --- keep both motors running. As soon as it reads one, stop."*

Notice the loop condition is checking for **0**, not 1. You keep going while it is *not* pressed. Students often mix this up.
{{< /callout >}}

{{< safety title="⚠ No msleep, No ao Inside the Loop" >}}
Do not put a long `msleep()` in the loop --- it stops the checking. Do not put `ao()` in the loop either, or the robot will start and stop over and over instead of driving.

The `ao()` goes **after** the closing brace. That is the whole point: the loop is the driving, and what comes after is what happens when the condition finally changes.
{{< /safety >}}

## Do It --- Drive Until Bump

### Step 1 --- Mount the sensor and read it live

Mount your touch sensor on the front of the robot so it hits things before anything else does. Plug it into a digital port and write down which one.

On the Wombat, open the **sensor list**. Press the sensor with your finger and watch the number.

{{< figrow >}}
- src: botui/sensor_list.webp
  alt: "The sensor list on the Wombat"
  caption: "The sensor list on the Wombat."
{{< /figrow >}}
{{< gridtable >}}
columns:
- head: Question
- head: "My answer"
  aria: "Sensor port"
rows:
  - cells:
      - text: "Which digital port is my touch sensor in?"
      - key: p3_port
        aria: "Sensor port"
  - cells:
      - text: "What does it read when nothing touches it?"
      - key: p3_read_open
        aria: "Reading open"
  - cells:
      - text: "What does it read when I press it?"
      - key: p3_read_pressed
        aria: "Reading pressed"
{{< /gridtable >}}
{{< checklist >}}
- key: p3_sensor_works
  label: "My sensor changes between 0 and 1 when I press it"
{{< /checklist >}}

### Step 2 --- Drive Until Bump --- in your hands first

{{< safety title="⚠ Hold the Robot in the Air for the First Run" >}}
Do not put this on a table or the field yet. **Hold the robot up** so the wheels spin freely, run the program, then press the sensor with your finger and watch the wheels stop.

A loop that never sees its sensor never stops. Find that out in your hands, not off the edge of a table.
{{< /safety >}}

Create a new project called `Drive Until Bump`. Plan it as [[PSEUDOCODE|pseudocode]] first, then write it.

```c
// 1. Print a message so I know it started
// 2. While the sensor is NOT pressed, drive forward
// 3. When it is pressed, fall out of the loop
// 4. Stop
```

{{< checklist >}}
- key: p3_hands_test
  label: "Wheels stop when I press the sensor with my finger"
- key: p3_floor_test
  label: "It works on the floor against a wall or a book"
{{< /checklist >}}

### Step 3 --- Put your variables back in

You spent Project 9 learning why bare numbers are a bad idea. Do not abandon that now.

```c
int left  = 0;
int right = 3;
// Front touch sensor
int bump  = 0;

while (digital(bump) == 0)
{
	motor(left, 100);
	motor(right, 100);
	msleep(10);
}
motor(0, 0);
motor(3, 0);
msleep(30);
```

Note that `bump` and `left` both hold 0 --- but they mean completely different things. One is a digital port, one is a motor port. The names are what keep them straight.
{.muted}

{{< checklist >}}
- key: p3_variables_in
  label: "My program uses variables and still works"
{{< /checklist >}}

### Step 4 --- Flip the condition and predict

Change `== 0` to `== 1`. **Before you run it,** write down what you think will happen.

{{< ask key="p3_predict" label=Prediction >}}My prediction:{{< /ask >}}

Now run it. Then run it again while holding the sensor pressed the whole time.

{{< ask key="p3_flip_result" label="Flip result" >}}What actually happened, both times?{{< /ask >}}

{{< ask key="p3_flip_why" label=Why >}}Explain why, using the words "true" and "false".{{< /ask >}}

Put it back to `== 0`.

### Step 5 --- Bump and Go Home

Here is what makes a touch sensor genuinely useful: **a wall is a place your robot can always find.**

New project. Drive *backward* until the sensor presses against the starting box wall, then drive forward a set distance into the box and stop.

```c
// 1. Drive backward while the sensor is not pressed
// 2. Exit the loop when it touches the wall
// 3. Stop and settle
// 4. Drive forward a set distance
// 5. Stop
```

{{< callout title="Why This Matters More Than It Looks" variant="gold" >}}
No matter where the robot wandered off to, it can come back and touch a wall --- and now it knows *exactly* where it is. Every measurement after that starts from a spot it can trust.
{{< /callout >}}

{{< checklist >}}
- key: p3_go_home
  label: "My robot finds the wall and ends up in the same place every time"
{{< /checklist >}}

### Step 6 --- Add a stop and settle

A robot that has been driving is still moving when the loop ends. Momentum does not care about your program.

Put a proper stop between the loop and whatever comes next:

```c
motor(0, 0);
motor(3, 0);
msleep(30);
// Let the robot actually stop moving
msleep(500);
```

Run it with and without the pause and compare.

{{< ask key="p3_settle" label="Settle difference" >}}What difference did the pause make?{{< /ask >}}

### Step 7 --- Wait for a button before starting

The Wombat has one physical push button and three soft buttons on screen, named a, b, and c. Each has a [[FUNCTION|function]] that returns 1 when pressed and 0 when not.

```c
printf("Press A to start\n");

while (a_button() == 0)
{
	// Wait: do nothing at all
	msleep(10);
}

// Run the mission
```

Add this to the top of a program. Now your robot waits for you instead of driving off the second it compiles.

{{< checklist >}}
- key: p3_button_start
  label: "My robot waits for a button press before it moves"
{{< /checklist >}}
{{< ask key="p3_empty_loop" label="Empty loop" >}}This loop has nothing inside it but a tiny pause. Is it still doing something? What?{{< /ask >}}

### Step 8 --- Mission 13 Advanced --- all three cubes for 13 points

{{< mission-summary mission="13" video=true >}}
{{< /mission-summary >}}
{{< callout title="A Pyramid Counts --- and It Is Easier" variant="gold" >}}
Read the scoring examples again. **A pyramid scores exactly the same as a three-high tower.** Two cubes on the bottom, one on top.

This is a final-position mission, so whatever you build has to still be standing when the match ends. A pyramid is far harder to knock over than a tower. Take the easy 13 points.
{{< /callout >}}

Use the touch sensor to make your approach repeatable. If your robot can find a wall or a cube by contact instead of by timing, every placement after that starts from a known spot.

{{< ask key="p3_sensor_where" label="Where sensor helps" >}}Where in your run does the touch sensor help most --- finding the cubes, or finding your way back?{{< /ask >}}

{{< checklist >}}
- key: p3_m13_three
  label: "All three Unstraight Cubes are in one stack or pyramid"
- key: p3_m13_stands
  label: "It is still standing after the robot backs away"
{{< /checklist >}}

### Step 9 --- Run it five times

{{< gridtable >}}
columns:
- head: Run
- head: "All three stacked?"
  aria: "R1 stacked"
- head: "Still standing at the end?"
  aria: "R1 standing"
- head: Points
  aria: "R1 points"
rows:
  - cells:
      - text: 1
      - key: p3_r1_stack
        aria: "R1 stacked"
      - key: p3_r1_stand
        aria: "R1 standing"
      - key: p3_r1_pts
        aria: "R1 points"
  - cells:
      - text: 2
      - key: p3_r2_stack
        aria: "R2 stacked"
      - key: p3_r2_stand
        aria: "R2 standing"
      - key: p3_r2_pts
        aria: "R2 points"
  - cells:
      - text: 3
      - key: p3_r3_stack
        aria: "R3 stacked"
      - key: p3_r3_stand
        aria: "R3 standing"
      - key: p3_r3_pts
        aria: "R3 points"
  - cells:
      - text: 4
      - key: p3_r4_stack
        aria: "R4 stacked"
      - key: p3_r4_stand
        aria: "R4 standing"
      - key: p3_r4_pts
        aria: "R4 points"
  - cells:
      - text: 5
      - key: p3_r5_stack
        aria: "R5 stacked"
      - key: p3_r5_stand
        aria: "R5 standing"
      - key: p3_r5_pts
        aria: "R5 points"
{{< /gridtable >}}
{{< ask key="p3_fell" label="Why it fell" >}}Did the stack fall over on any run? What knocked it --- the robot leaving, or the stack itself?{{< /ask >}}

## Score It --- Checkpoint

### My score

{{< gridtable >}}
columns:
- head: "Mission part"
- head: Scored?
  aria: "Score M13 advanced"
- head: Points
rows:
  - cells:
      - text: "Mission 13 --- Advanced Bonus (all three cubes stacked)"
      - key: p4_s_m13adv
        aria: "Score M13 advanced"
      - text: 13
  - cells:
      - text: "My total"
      - key: p4_total
        aria: Total
      - text: 13
{{< /gridtable >}}
With Project 6 and Project 8, Mission 13 is now worth 21 points across all three parts --- the most any single mission has given you.
{.muted}

### Finish the loop

Write the condition for each one.

{{< gridtable >}}
columns:
- head: "I want the robot to..."
- head: "The condition is"
  aria: "Condition not pressed"
rows:
  - cells:
      - text: "Drive while the sensor in port 0 is not pressed"
      - key: p4_cond_notpressed
        aria: "Condition not pressed"
  - cells:
      - text: "Drive while the sensor in port 1 *is* pressed"
      - key: p4_cond_pressed
        aria: "Condition pressed"
  - cells:
      - text: "Wait until someone presses button A"
      - key: p4_cond_button
        aria: "Condition button"
{{< /gridtable >}}

### Spot the bug

Each of these is wrong. Say what happens when you run it.

{{< gridtable >}}
columns:
- head: Code
- head: "What goes wrong"
  aria: "Bug one equals"
rows:
  - cells:
      - text: "`while (digital(0) = 0)`"
      - key: p4_bug_assign
        aria: "Bug one equals"
  - cells:
      - text: "`while (digital(0) == 0);`"
      - key: p4_bug_semicolon
        aria: "Bug semicolon"
  - cells:
      - text: "`ao();` written *inside* the loop"
      - key: p4_bug_ao_inside
        aria: "Bug ao inside"
  - cells:
      - text: "`msleep(2000);` inside the loop"
      - key: p4_bug_long_sleep
        aria: "Bug long sleep"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_digital
  label: "I can explain what makes a sensor digital and what its only two values mean"
- key: p4_can_read
  label: "I can read a live sensor value on the Wombat before I write any code"
- key: p4_can_while
  label: "I can write a `while` loop with the braces and no semicolon after the condition"
- key: p4_can_equals
  label: "I know the difference between `=` and `==` and I check it every time"
- key: p4_can_placement
  label: "I know what goes inside the loop and what goes after it"
- key: p4_can_test_safe
  label: "I test a new sensor program with the robot in my hands first"
- key: p4_can_known_spot
  label: "I can use contact with a wall to give my robot a position it can trust"
{{< /checklist >}}

### Think about it

{{< ask key="p4_time_vs_touch" label="Time vs touch" >}}Since Project 3, every distance your robot has driven was really a length of *time*. What does a touch sensor give you that a stopwatch never could?{{< /ask >}}

{{< ask key="p4_bad_to_bump" label="Bad to bump" >}}A touch sensor only tells you something when you are already touching it. Name one thing on the field you would want to stop at, where bumping into it first would be a bad idea.{{< /ask >}}

{{< ask key="p4_what_else" label="What else to watch" >}}Your loop asks a question over and over. So far the question has always been about a sensor. What else could a robot count or measure that a loop could watch?{{< /ask >}}

### Next

A wall tells you where you are, but only if there is a wall. Most of the field has nothing to bump into.

In **Project 11 --- Counting Wheel [[TICK|ticks]]**, you point the same loop at a number instead of a switch --- and your robot can finally measure how far it has actually gone.

KIPR · Botball Explorer --- Discovery Projects · © KISS Institute for Practical Robotics 1997--2027
