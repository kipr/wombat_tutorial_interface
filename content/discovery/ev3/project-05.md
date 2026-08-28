---
title: "Coding Project 5 — Learning to Turn"
short_title: "Coding Project 5"
linkTitle: "Learning to Turn"
description: "One dial, three turn shapes — radius, one-wheel, and zero radius. Wheel degrees are not robot degrees; build a repeatable 90&deg; turn anyway."
weight: 5
nav: "discovery"
mission_id: "discovery_ev3_coding_05"
mission_title: "Discovery Project 5 (EV3) — Learning to Turn"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 5
strand: "coding"
platform: "ev3"
phase: "Phase 2 · Make It Move"
phase_order: 2
time: "One class period"
eyebrow: "Discovery · EV3 Coding Project 5"
heading: "Learning to Turn"
subheading: "Two knobs, three shapes — and your first drive to somewhere that isn't straight ahead."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Learning to Turn"
mission_label: "Mission 12 — approach only"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 5"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Make It Move"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Finding out how a robot turns, learning the three shapes a turn can have, and driving from your starting box to the spilled cubes."
  - term: "Mission Anchor"
    definition: "[[@12:base|Mission 12]] — Restack the Freight (approach only — you will finish it in Project 8)"
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your LEGO EV3 driving base"
      - key: need_2
        label: "Tablet or Chromebook with the EV3 Classroom app"
      - key: need_3
        label: "Charged brick"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "Open floor space"
      - key: need_6
        label: "A chair"
      - key: need_7
        label: "A small box"
      - key: need_8
        label: "Your Project 4 numbers"
  - term: "Before You Start"
    definition: "Project 4 — you need your straight-driving steering value and your starting position method."
---
## Try It --- Break the Straight Line

In Project 4 you worked hard to make your robot drive straight. Now you are going to ruin it on purpose --- and pay close attention while you do.

Start a new project called `Turns`. Build one single move block --- **move (steering) for 3.5 rotations** --- and keep the rotations the same for every single run.

Then change **only the steering dial**. Set it to each value below, run it, and describe the path the robot took.

{{< safety title="⚠ Floor, Not Table" >}}
These runs go in circles and curves. Do this on an open floor with nothing in the way --- not on a table, not on the field.
{{< /safety >}}

{{< gridtable >}}
columns:
- head: "Steering value"
- head: "What path did the robot take?"
rows:
  - class: trial
    cells:
      - text: "0"
      - key: p1_path_same
        aria: "Path at steering 0"
  - class: trial
    cells:
      - text: "10"
      - key: p1_path_70
        aria: "Path at steering 10"
  - class: trial
    cells:
      - text: "25"
      - key: p1_path_55
        aria: "Path at steering 25"
  - class: trial
    cells:
      - text: "40"
      - key: p1_path_20
        aria: "Path at steering 40"
  - class: trial
    cells:
      - text: "50"
      - key: p1_path_10
        aria: "Path at steering 50"
  - class: trial
    cells:
      - text: "65"
      - key: p1_path_0
        aria: "Path at steering 65"
  - class: trial
    cells:
      - text: "85"
      - key: p1_path_neg50
        aria: "Path at steering 85"
  - class: trial
    cells:
      - text: "100"
      - key: p1_path_neg100
        aria: "Path at steering 100"
{{< /gridtable >}}

### What did your data tell you?

Fill in the blanks from your own runs:

{{< gridtable >}}
columns:
- head: "When the steering number is..."
- head: "The robot..."
rows:
  - cells:
      - text: "close to 0"
      - key: p1_rule_close
        aria: "Rule near zero"
  - cells:
      - text: "getting bigger"
      - key: p1_rule_far
        aria: "Rule as steering grows"
  - cells:
      - text: "exactly 50"
      - key: p1_rule_zero
        aria: "Rule at fifty"
  - cells:
      - text: "all the way at 100"
      - key: p1_rule_opposite
        aria: "Rule at one hundred"
{{< /gridtable >}}

{{< ask key="p1_p3_prediction" label="Project 3 prediction check" >}}In Project 3 you predicted what the robot would do when both motors got the *same* arrow. Somewhere in this table, exactly that happened to the wheels. Which steering value was it --- and were you right?{{< /ask >}}

## Learn It --- Two Knobs, Three Shapes

You only have two things to adjust, and they do completely different jobs.

| Code / part | What it means |
| --- | --- |
| the steering dial | **Sets the shape of the path.** One number decides whether the robot goes straight, curves gently, curves hard, or spins on the spot. |
| the amount | **Sets how far along that path the robot travels** --- rotations, degrees, or seconds. It does not change the shape at all, only how much of it you get. |

{{< callout title="The Two Rules You Just Discovered" variant="gold" >}}
**The closer the steering is to 0, the straighter the robot goes.**

**The bigger the number, the sharper the curve.**

Everything else in this project is those two sentences applied on purpose.
{{< /callout >}}

### The three shapes

| Turn | What it means | Steering |
| --- | --- | --- |
| [[RADIUS TURN\|radius turn]] | [[RADIUS TURN\|radius turn]]  Both wheels go the same direction at different speeds. The robot sweeps a wide arc, like a car going around a bend.  Sharpness comes from how big the steering number is. | steering  / 1 to 49 |
| [[ONE-WHEEL TURN\|one-wheel turn]] | [[ONE-WHEEL TURN\|one-wheel turn]]  One wheel drives, the other sits still. The robot swings around the stopped wheel --- like ring around the rosie.  More speed means a faster swing, not a tighter one. | steering  / exactly 50 |
| [[ZERO RADIUS TURN\|zero radius turn]] | [[ZERO RADIUS TURN\|zero radius turn]]  The wheels go opposite directions. The robot spins in place without moving forward or backward at all.  Also called a pivot or spin turn. This is what you use for precise angles. | steering  / all the way: 100 |

{{< callout title="Which One Should You Use?" variant="navy" >}}
**Zero radius** when you need to point a different direction without giving up your position --- the usual choice on a crowded field.

**Radius** when you want to travel *and* turn at the same time, like driving around an obstacle.

**One-wheel** when you want to swing around something you are already next to.
{{< /callout >}}

{{< callout title="Friction Matters More Than You Think" >}}
Two moving wheels fight friction better than one moving wheel does. A [[ONE-WHEEL TURN|one-wheel turn]] asks a stopped wheel to skid sideways, so it is the least repeatable of the three. If a turn will not come out the same twice, try the same turn as zero radius instead.
{{< /callout >}}

{{< callout title="New Number Alert: Degrees on a Move Block" variant="gold" >}}
When you set a move block's unit to **degrees**, it counts how far the *wheels* turn --- not how far the *robot* turns. Spin at steering 100 for 90 degrees and the robot turns far less than a right angle, because each wheel only rolled a quarter of the way around.

Nobody can work out the right number from their chair. You find *your* robot's 90° the same way you found your distances: test, nudge, test again.
{{< /callout >}}

One more dial fact: steering works on both sides. Positive numbers turn right, negative numbers turn left --- a spin to the *left* is steering −100.
{.muted}

### Where you are headed

{{< mission-summary mission="12" video=true >}}
{{< /mission-summary >}}

## Do It --- Learn to Aim

### Step 1 --- Drive a big circle

New project called `Circles`. Put a chair in the middle of an open floor.

Write a program that drives your robot in one big circle all the way around the chair, without [[TOUCHING|TOUCHING]] it. Use **one single move block** --- no stopping and restarting.

{{< gridtable >}}
columns:
- head: "Steering value"
- head: "Distance (in.)"
rows:
  - cells:
      - key: p3_big_steer
        aria: "Big circle steering"
      - key: p3_big_in
        aria: "Big circle distance"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_step_big_circle
  label: "One full circle around the chair, no contact"
{{< /checklist >}}

### Step 2 --- Drive a tight circle

Swap the chair for something small --- a tissue box works. Circle that instead, same rule: one set of commands.

{{< gridtable >}}
columns:
- head: "Steering value"
- head: "Distance (in.)"
rows:
  - cells:
      - key: p3_tight_steer
        aria: "Tight circle steering"
      - key: p3_tight_in
        aria: "Tight circle distance"
{{< /gridtable >}}

{{< ask key="p3_circle_compare" label="Comparing circle numbers" >}}Compare your two sets of numbers. What did you change to make the circle smaller?{{< /ask >}}

### Step 3 --- Try all three shapes

Run each one and record what the robot actually does.

{{< gridtable >}}
columns:
- head: "Turn type"
- head: "My steering"
- head: "What it did"
rows:
  - class: trial
    cells:
      - text: "Radius"
      - key: p3_shape_radius_pw
        aria: "Radius powers"
      - key: p3_shape_radius_obs
        aria: "Radius observation"
  - class: trial
    cells:
      - text: "One-wheel"
      - key: p3_shape_onewheel_pw
        aria: "One-wheel powers"
      - key: p3_shape_onewheel_obs
        aria: "One-wheel observation"
  - class: trial
    cells:
      - text: "Zero radius"
      - key: p3_shape_zero_pw
        aria: "Zero radius powers"
      - key: p3_shape_zero_obs
        aria: "Zero radius observation"
{{< /gridtable >}}

{{< ask key="p3_least_distance" label="Which moved least" >}}Which of the three moved the robot the least distance across the floor? Why does that matter on a crowded field?{{< /ask >}}

### Step 4 --- Build a 90° turn

New project called `Right Angle`. Use a **zero radius** turn --- steering 100 --- and find the **degrees** value that gives you a true 90° robot turn.

Keep the steering at 100 the whole time. Change only the degrees.

{{< gridtable >}}
columns:
- head: "Try"
- head: "Degrees"
- head: "Too far, not far enough, or right?"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_a1_ms
        aria: "Angle try 1"
      - key: p3_a1_res
        aria: "Angle result 1"
  - class: trial
    cells:
      - text: "2"
      - key: p3_a2_ms
        aria: "Angle try 2"
      - key: p3_a2_res
        aria: "Angle result 2"
  - class: trial
    cells:
      - text: "3"
      - key: p3_a3_ms
        aria: "Angle try 3"
      - key: p3_a3_res
        aria: "Angle result 3"
  - class: trial
    cells:
      - text: "4"
      - key: p3_a4_ms
        aria: "Angle try 4"
      - key: p3_a4_res
        aria: "Angle result 4"
  - class: trial
    cells:
      - text: "5"
      - key: p3_a5_ms
        aria: "Angle try 5"
      - key: p3_a5_res
        aria: "Angle result 5"
{{< /gridtable >}}

{{< callout title="Test One Step at a Time" variant="gold" >}}
Get the turn right on its own before you attach it to anything else. [[DEBUGGING|Debugging]] one command is easy. [[DEBUGGING|Debugging]] a whole run to find out which command was wrong is not.
{{< /callout >}}

### Step 5 --- Prove it with a square

Here is the honest test of a 90° turn: **do it four times and see if you end up where you started, facing the way you started.**

Drive forward, turn 90°. Repeat four times total.

{{< checklist >}}
- key: p3_step_square
  label: "My robot came back close to its starting spot"
- key: p3_step_facing
  label: "It ended up facing the same direction it started"
{{< /checklist >}}

{{< ask key="p3_square_error" label="Square error analysis" >}}If your robot did not close the square, was each turn too much or too little? How could you tell?{{< /ask >}}

A small error in one turn becomes a big error after four. This is why turning by wheel-count alone is hard --- and why Project 11 hands you a sensor that can feel the robot itself turning.
{.muted}

### Step 6 --- Drive to the spilled cubes

Onto the field. New project called `Approach 12`.

Start in your starting box, exactly the way you decided in Project 4. Drive out, turn, and stop next to the spilled cube area --- close enough and square enough that a claw could pick a cube up.

Write your plan as [[PSEUDOCODE|pseudocode]] first:

| Code / part | What it means |
| --- | --- |
| 1. Drive forward | Out of the starting box. |
| 2. Turn | Toward the spilled cubes. |
| 3. Drive up to them | Close enough to work from. |
| 4. Stop | Square to the cubes. |

{{< gridtable >}}
columns:
- head: "Move"
- head: "Steering"
- head: "Amount"
- head: "Unit (in. or deg)"
rows:
  - class: trial
    cells:
      - text: "Forward"
      - key: p3_ap_fwd_steer
        aria: "Approach forward steering"
      - key: p3_ap_fwd_amt
        aria: "Approach forward amount"
      - key: p3_ap_fwd_unit
        aria: "Approach forward unit"
  - class: trial
    cells:
      - text: "Turn"
      - key: p3_ap_turn_steer
        aria: "Approach turn steering"
      - key: p3_ap_turn_amt
        aria: "Approach turn amount"
      - key: p3_ap_turn_unit
        aria: "Approach turn unit"
  - class: trial
    cells:
      - text: "Approach"
      - key: p3_ap_app_steer
        aria: "Approach final steering"
      - key: p3_ap_app_amt
        aria: "Approach final amount"
      - key: p3_ap_app_unit
        aria: "Approach final unit"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_step_arrived
  label: "My robot stops at the spilled cubes"
- key: p3_step_square_on
  label: "It is square to the cubes, not at an angle"
- key: p3_step_no_knock
  label: "It did not knock any cubes out of the area on the way in"
{{< /checklist >}}

### Step 7 --- Run it five times

Same rule as Project 4. One good approach is luck.

{{< gridtable >}}
columns:
- head: "Run"
- head: "Did it arrive in a position a claw could work from?"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_run1
        aria: "Approach run 1"
  - class: trial
    cells:
      - text: "2"
      - key: p3_run2
        aria: "Approach run 2"
  - class: trial
    cells:
      - text: "3"
      - key: p3_run3
        aria: "Approach run 3"
  - class: trial
    cells:
      - text: "4"
      - key: p3_run4
        aria: "Approach run 4"
  - class: trial
    cells:
      - text: "5"
      - key: p3_run5
        aria: "Approach run 5"
{{< /gridtable >}}

{{< short-answer key="p3_weakest_part" label="Least reliable part" prompt="Which part of the run was least reliable --- the drive out, the turn, or the final approach?" >}}

## Score It --- Checkpoint

No points yet --- Mission 12 does not score until something gets stacked. What you have built is the half of the mission that has to work before the other half matters.

### My turning numbers

Every project from here uses these. Write them down properly.
{.muted}

{{< gridtable >}}
columns:
- head: "Setting"
- head: "Value"
rows:
  - cells:
      - text: "[[ZERO RADIUS TURN|zero radius turn]] --- steering value"
      - key: p4_spin_steer
        aria: "Spin steering value"
  - cells:
      - text: "Degrees for a 90° turn"
      - key: p4_deg_90
        aria: "90 degree value"
  - cells:
      - text: "Degrees for a 180° turn"
      - key: p4_deg_180
        aria: "180 degree value"
  - cells:
      - text: "Degrees for a 45° turn"
      - key: p4_deg_45
        aria: "45 degree value"
{{< /gridtable >}}

{{< ask key="p4_scaling" label="Does turn time scale" >}}You worked out 90° by testing. Did doubling it give you a good 180°? Did halving it give you a good 45°?{{< /ask >}}

### Match the turn to the job

{{< gridtable >}}
columns:
- head: "The robot needs to..."
- head: "Which turn type?"
rows:
  - cells:
      - text: "Face the other way without leaving its spot"
      - key: p4_match_reverse
        aria: "Match face other way"
  - cells:
      - text: "Curve around a cone while still moving down the field"
      - key: p4_match_curve
        aria: "Match curve around"
  - cells:
      - text: "Swing its front end around a cube it is already beside"
      - key: p4_match_swing
        aria: "Match swing around"
  - cells:
      - text: "Make a small heading correction while driving straight"
      - key: p4_match_correct
        aria: "Match small correction"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_two_rules
  label: "I can explain what happens as the steering number moves from 0 toward 100"
- key: p4_can_name_three
  label: "I can name all three turn types and build the move block for each"
- key: p4_can_knobs
  label: "I know which knob changes the shape of the path and which changes how far along it I go"
- key: p4_can_90
  label: "I can make a repeatable 90° turn"
- key: p4_can_combine
  label: "I can chain drive, turn, and drive into one run"
- key: p4_can_approach
  label: "My robot reaches the spilled cubes in a workable position five times running"
{{< /checklist >}}

### Think about it

{{< ask key="p4_error_source" label="Where the error came from" >}}Your square test almost certainly did not close perfectly. Where did the error come from --- was the robot doing the wrong thing, or was your program asking for something it cannot deliver?{{< /ask >}}

{{< ask key="p4_surface_change" label="Surface change question" >}}A teammate's robot turns 90° perfectly on the carpet but [[OVERSHOOT|overshoot]]s on the field mat. Nothing in the program changed. What happened?{{< /ask >}}

{{< ask key="p4_whats_next" label="What is needed next" >}}You now have a robot that gets to the right place and points the right way. What is the next thing it needs before Mission 12 can actually score?{{< /ask >}}

### Next

In **Project 6 --- Bulldoze Run**, you put driving and turning together to score four missions at once --- and you do it all without a claw, by pushing.
