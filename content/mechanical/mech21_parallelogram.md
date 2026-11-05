---
title: "Mechanical Design · Challenge 21 — The Parallelogram Elevator"
short_title: "Challenge 21"
description: "Up and down from a motor that never reverses. Level platform or straight path — you cannot easily have both."
mission_id: "mech21_parallelogram"
mission_title: "Mechanical Design · Challenge 21 — The Parallelogram Elevator"
eyebrow: "Mechanical Design · Challenge 21"
heading: "The Parallelogram Elevator"
subheading: "Student Challenge · Up and Down from a Motor That Only Goes One Way"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 21 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How does a machine reverse direction when its motor never does?"
  -
    term: "Big Idea"
    definition: "A [[UNIDIRECTIONAL DRIVE|one-way drive]] can produce two-way motion, and the shape of the linkage decides what path that motion takes."
  -
    term: "Mechanism"
    definition: "Four-bar elevator"
  -
    term: "Design Concepts"
    definition: "[[RECIPROCATION|Reciprocation]] · [[COUPLER CURVE|Coupler curve]] · [[PARALLELOGRAM LINKAGE|Parallelogram linkage]] · [[STRAIGHT-LINE LINKAGE|Straight-line linkage]]"
  -
    term: "Materials"
    definition: "Kit parts only"
  -
    term: "What You Need"
    definition: "LEGO kit · one motor · Wombat controller · a 4 oz weight · ruler · marker and paper"
  -
    term: "Prerequisites"
    definition: "Challenge 6 for the crank, Challenge 8 for four-bar linkages, Challenge 17 for lifting"
weight: 22
hub_unit: 8
hub_title: "The Parallelogram Elevator"
hub_label: "Challenge 21"
---

## Overview

Your scissor lift in Challenge 17 went up when the motor ran forward and came down when it ran backward. That is the obvious way to build a lift, and this challenge forbids it.

Here the motor turns one way and never stops or reverses --- and the platform still has to rise and fall. That single constraint changes the whole problem.

{{< callout title="Core Insight" >}}
You already solved this in Challenge 6. A crank turns endless rotation into back-and-forth motion, without the motor ever changing direction. An elevator is the same trick pointed upward.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain how a one-way motor produces two-way motion.
- Describe what a [[COUPLER CURVE|coupler curve]] is and trace one.
- Explain the difference between a parallelogram linkage and a [[STRAIGHT-LINE LINKAGE|straight-line linkage]].
- Choose between a level platform and a straight path, and defend the choice.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="mP6WFS0_1jM" title="LEGO parallelogram concepts" >}}

Simple mechanics --- application of parallelogram concepts.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Pick one point on the moving platform and follow only that point through a whole cycle. What shape does it trace?
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

Does the platform stay level as it moves, or does it tilt? Does it travel straight up, or does it swing sideways as well?

{{< answer key="p1_path" label="Path and tilt" >}}

What LEGO pieces might take the place of each of the pieces you see?

{{< answer key="p1_pieces" label="LEGO substitutions" >}}

## Phase 2 --- Concept: One Way Round, Two Ways Up

A motor that only spins one direction seems like a poor way to build something that has to go up and then down again. It is not. It is how almost every engine-driven machine in the world works.

{{< figrow tall=true >}}
- src: "mech21_parallelogram-diagram-01.svg"
  alt: "A wheel turning in one direction only, with a pin near its rim connected by a rod to a platform above. As the pin goes round, the platform rises and falls, even though the wheel never reverses."
  caption: "The wheel does the same thing forever. The platform gets its two directions from where the pin happens to be."
{{< /figrow >}}

{{< callout title="Compare to Challenge 17" variant="navy" >}}
Your scissor lift needed the motor to run forward, stop, and run backward. That means someone or something has to decide when to reverse --- a program, a switch, or a limit.

This elevator needs none of that. Turn it on and it cycles by itself, forever, with no decisions made anywhere. Fewer decisions means fewer things that can go wrong.
{{< /callout >}}

Name one advantage of a lift that reverses on command, and one advantage of a lift that simply cycles. When would you want each?

{{< answer key="p2_compare_c17" label="Comparison to Challenge 17" >}}

## Phase 3 --- Concept: The Shape of the Path, Then Build

Back in Challenge 8 you may have taped a marker to the middle link of a four-bar and let it draw. The shape it drew has a name: the [[COUPLER CURVE|coupler curve]] --- the path traced by a point on the coupler as the mechanism runs.

That curve is not usually a circle, and it is not usually a straight line. And here is the useful part: *you can change its shape by changing the link lengths*.

{{< figrow tall=true >}}
- src: "mech21_parallelogram-diagram-02.svg"
  alt: "Two four-bar linkages compared. In a parallelogram, where both moving links are equal, the platform stays level but swings through an arc. With unequal links, a point on the coupler traces a path that is very nearly a straight vertical line, but the platform tilts as it moves."
  caption: "Both are four-bar linkages. The only difference is the link lengths — and the paths come out completely different."
{{< /figrow >}}

{{< callout title="You Cannot Have Both, Easily" >}}
A parallelogram keeps the platform level, because both moving links stay parallel to each other. But the platform swings on an arc, so it drifts sideways as it rises.

Unequal links can make a point travel almost perfectly straight up --- mechanisms like this are called [[STRAIGHT-LINE LINKAGE|straight-line linkages]], and engineers used them long before straight rails were easy to make. The cost is that the coupler rotates, so the platform tilts.

Which one you want depends on your cargo. Decide before you build, and be ready to say why.
{{< /callout >}}

### Build the Bare Mechanism

Build the linkage first, without the motor. Move it through its full travel by hand.

{{< callout title="Before You Go On" variant="navy" >}}
Run the linkage through five complete cycles by hand. It must be able to go all the way round without jamming --- check the link lengths against the test from Challenge 8 if it locks up.

This matters more here than usual. Your motor never reverses, so if the mechanism reaches a position it cannot get past, the motor will simply push against it until something breaks.
{{< /callout >}}

Which version did you build, and why that one?

{{< answer key="p3_which_version" label="Version chosen" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, create an elevator. You may want to modify it so that the moveable parallelogram is a different quadrilateral, or align the sprockets so that the movement is in a more vertical direction.
{{< /callout >}}

### Mental Picture

Think of the pedals on a bicycle. Your foot goes up and then down, over and over --- but the crank only ever turns one way, and the rider never has to think about reversing anything.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The elevator must have a total lift of 3″ or more.
2.  The rise and fall must be run by a motor in a constant spin orientation. The motor may not turn clockwise *and* counterclockwise.
3.  The surface of the elevator must be at least 9 square inches --- a 3″ × 3″ platform, or anything larger.
4.  The platform must carry a 4 oz load through the whole cycle without dropping it.
5.  The elevator must complete 10 full up-and-down cycles without fault.
6.  Kit parts only.

{{< callout title="Constraint 2 Is the Whole Challenge" variant="navy" >}}
It is easy to read past. It says your motor runs and keeps running --- one direction, no stopping, no reversing --- and the platform still has to come back down on its own.

If you find yourself planning to switch the motor direction at the top, you have not met the constraint. The mechanism has to do it.
{{< /callout >}}

### Your Design Decision

Level platform on an arc, or straighter path with some tilt? Write your choice and what your cargo needs.

{{< answer key="p4_decision" label="Design decision" >}}

### Do the Math First

{{< gridtable >}}
columns:
  -
    head: "Planned value"
  -
    head: "Your Value"
  -
    head: "Unit"
rows:
  -
    -
      text: "Lift you need"
    -
      key: "p4_lift_needed"
      aria: "Lift needed"
    -
      key: "p4_lift_needed_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Pin offset that would give you that lift"
    -
      key: "p4_offset"
      aria: "Pin offset"
    -
      key: "p4_offset_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Platform dimensions you will build"
    -
      key: "p4_platform"
      aria: "Platform dimensions"
    -
      key: "p4_platform_unit"
      aria: "Unit"
      value: "in × in"
{{< /gridtable >}}

### Your Plan --- Before You Build

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your elevator lose its load by tilting, by drifting sideways, or by jerking at the top and bottom?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="Measure the Path, Not Just the Height" >}}
Stand a ruler upright beside the platform at the bottom of its travel and mark where the platform's edge sits. Run it to the top and mark again.

The vertical difference is your lift. The *horizontal* difference is the drift, and that is what tells you how vertical your path really is.

Then measure the tilt: platform height at its front edge and at its back edge, at the top of the travel.
{{< /callout >}}

### Your Numbers

{{< gridtable >}}
columns:
  -
    head: "Measurement"
  -
    head: "Your Value"
  -
    head: "Unit"
rows:
  -
    -
      text: "Total lift, bottom to top"
    -
      key: "p5_lift"
      aria: "Total lift"
    -
      key: "p5_lift_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Sideways drift between bottom and top"
    -
      key: "p5_drift"
      aria: "Sideways drift"
    -
      key: "p5_drift_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Platform dimensions"
    -
      key: "p5_platform"
      aria: "Platform dimensions"
    -
      key: "p5_platform_unit"
      aria: "Unit"
      value: "in × in"
  -
    -
      text: "Platform surface area"
    -
      key: "p5_area"
      aria: "Platform area"
    -
      key: "p5_area_unit"
      aria: "Unit"
      value: "sq in"
  -
    -
      text: "Front-to-back height difference at the top"
    -
      key: "p5_tilt"
      aria: "Tilt at top"
    -
      key: "p5_tilt_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Time for one complete up-and-down cycle"
    -
      key: "p5_cycle_time"
      aria: "Cycle time"
    -
      key: "p5_cycle_time_unit"
      aria: "Unit"
      value: "seconds"
  -
    -
      text: "Cycles completed carrying the load"
    -
      key: "p5_cycles"
      aria: "Cycles"
    -
      key: "p5_cycles_unit"
      aria: "Unit"
      value: "cycles"
  -
    -
      text: "Times the motor had to reverse"
    -
      key: "p5_reversals"
      aria: "Motor reversals"
    -
      key: "p5_reversals_unit"
      aria: "Unit"
      value: "should be 0"
{{< /gridtable >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Lift (in)"
- head: "Kept the load?"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_lift"
      aria: "Trial 1 lift"
    - key: "trial1_load"
      aria: "Trial 1 kept the load"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_lift"
      aria: "Trial 2 lift"
    - key: "trial2_load"
      aria: "Trial 2 kept the load"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_lift"
      aria: "Trial 3 lift"
    - key: "trial3_load"
      aria: "Trial 3 kept the load"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_lift"
      aria: "Trial 4 lift"
    - key: "trial4_load"
      aria: "Trial 4 kept the load"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_lift"
      aria: "Trial 5 lift"
    - key: "trial5_load"
      aria: "Trial 5 kept the load"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_lift"
      aria: "Trial 6 lift"
    - key: "trial6_load"
      aria: "Trial 6 kept the load"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_lift"
      aria: "Trial 7 lift"
    - key: "trial7_load"
      aria: "Trial 7 kept the load"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_lift"
      aria: "Trial 8 lift"
    - key: "trial8_load"
      aria: "Trial 8 kept the load"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_lift"
      aria: "Trial 9 lift"
    - key: "trial9_load"
      aria: "Trial 9 kept the load"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_lift"
      aria: "Trial 10 lift"
    - key: "trial10_load"
      aria: "Trial 10 kept the load"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_lift"
  label: "Total lift measured at 3″ or more."
- key: "p5_check_oneway"
  label: "The motor ran in one direction only, and never reversed."
- key: "p5_check_area"
  label: "The platform measures at least 9 square inches."
- key: "p5_check_load"
  label: "Carried a 4 oz load through the whole cycle without dropping it."
- key: "p5_check_cycles"
  label: "Completed 10 full up-and-down cycles without fault."
- key: "p5_check_materials"
  label: "Kit parts only."
{{< /checklist >}}

How much did the platform drift sideways, and did that cause any trouble for the load?

{{< answer key="p5_drift_effect" label="Drift effect" >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Every decision a robot has to make during a match is a chance for it to make the wrong one. Mechanisms that need no decisions are the most reliable things on a robot.
{{< /callout >}}

A lift that reverses needs to know when it has reached the top. That means a sensor, or a timer, or a limit switch --- and all three can fail. A lift that just cycles needs none of them. Switch it on and it works.

Name a Botball task where a mechanism that cycles endlessly would beat one you have to command. What does it save you?

{{< answer key="p6_cycling" label="Cycling application" >}}

Now name a task where cycling would be exactly wrong, and you would need the lift to stop where you told it.

{{< answer key="p6_when_not" label="When cycling fails" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain how a motor that never reverses can drive something that goes up and then down.

{{< answer key="p7_q1_oneway" label="Reflection 1" >}}

2\. What is a coupler curve? Describe the one your own mechanism traced.

{{< answer key="p7_q2_coupler_curve" label="Reflection 2" >}}

3\. A parallelogram stays level but swings. Unequal links go straighter but tilt. Which did you choose, and would you choose the same again?

{{< answer key="p7_q3_tradeoff" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "Link lengths decide the shape of the path. This means that when a mechanism moves along the wrong path, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Build the Other One

- If you built the parallelogram, build the unequal-link version. If you built unequal links, build the parallelogram.
- Measure lift, sideways drift, and tilt for both.
- Put all six numbers side by side. Which version would you take to a competition, and for what cargo?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Draw the Curve

- Tape a marker to the platform and let it draw on paper taped upright beside the mechanism.
- Run one full cycle and look at the shape.
- Move the marker to a different point on the coupler and run it again. How much did the curve change?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Raise the Lift

- Get 5 inches of lift instead of 3, still with a one-way motor.
- What did you have to lengthen, and what happened to the sideways drift?
- Did the mechanism still clear its whole cycle without jamming?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Carry Something That Spills

- Replace the weight with a shallow cup holding a few poms, or something else that will fall out if the platform tips.
- Run 10 cycles and count how many poms are left.
- Does this change which version you would choose? Explain.

{{< answer key="ext_d" label="Extension D" >}}
