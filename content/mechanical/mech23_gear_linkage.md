---
title: "Mechanical Design · Challenge 23 — Gear and Linkage Mechanism"
short_title: "Challenge 23"
description: "Park the effector, cut the power, and drag the load. Then find out whether it held because it locks or because it is stiff."
mission_id: "mech23_gear_linkage"
mission_title: "Mechanical Design · Challenge 23 — Gear and Linkage Mechanism"
eyebrow: "Mechanical Design · Challenge 23"
heading: "Gear and Linkage Mechanism"
subheading: "Student Challenge · Stopping Where You Left It"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 23 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "When the power stops, what actually holds a mechanism where it is?"
  -
    term: "Big Idea"
    definition: "A mechanism can hold position for two completely different reasons, and knowing which one yours uses tells you when it will let go."
  -
    term: "Mechanism"
    definition: "Gear-driven linkage [[EFFECTOR|effector]]"
  -
    term: "Design Concepts"
    definition: "[[CYCLICAL MOTION|Cyclical motion]] · [[BACK-DRIVABLE|Back-drivable]] · [[SELF-LOCKING|Self-locking]] · [[STIFFNESS|Stiffness]]"
  -
    term: "Materials"
    definition: "Kit parts only"
  -
    term: "What You Need"
    definition: "LEGO kit · one motor · Wombat controller · a 1″ cube · ruler · a smooth surface to drag on"
  -
    term: "Prerequisites"
    definition: "Challenge 21 for one-way drives, Challenges 9 and 10 for self-locking"
weight: 24
hub_unit: 8
hub_title: "Gear and Linkage Mechanism"
hub_label: "Challenge 23"
---

## Overview

The first half of this challenge you have already solved. A motor spinning one way, driving something that drops and comes back up --- that is the elevator from Challenge 21 pointed at the ground.

The second half is new, and it is in the last constraint. Stop the motor with the effector down, then pick up the whole machine and move it. The object in the claw has to come along.

{{< callout title="Core Insight" >}}
Cutting the power does not mean a mechanism stops where you left it. Something has to be holding it --- and there are two very different things that could be doing the holding.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Build a cyclical effector driven by a motor that never reverses.
- Test whether your drive train is [[BACK-DRIVABLE|back-drivable]].
- Tell the difference between a mechanism that locks and one that is merely stiff.
- Explain which of the two your own build relies on, with evidence.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="g9nYKdroNhM" title="LEGO gear and linkage mechanism" >}}

Simple mechanics --- gear and linkage mechanism.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Does the effector spend equal time down and up, or more time in one position than the other?
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

Trace the path of the very tip of the effector through one full cycle. What shape does it make?

{{< answer key="p1_tip_path" label="Tip path" >}}

What LEGO pieces might take the place of each of the pieces you see?

{{< answer key="p1_pieces" label="LEGO substitutions" >}}

## Phase 2 --- Concept: What Holds It When the Power Is Off

Your effector runs a cycle: down, hold, up, round, down again. That part is Challenge 21's trick --- a one-way motor turning a gear that drives a linkage, so the effector reverses without the motor ever doing so.

{{< figrow tall=true >}}
- src: "mech23_gear_linkage-diagram-01.svg"
  alt: "Side view of a gear-driven parallelogram claw with two fixed pivots. A 12-tooth motor pinion meshes with a 24-tooth crank gear. Equal cranks raise and lower a level coupler; grey shows the raised position. The solid claw is parked around a one-inch cube on the ground. With the motor off, moving the structure right creates a leftward drag load on the claw."
  caption: "Parked in the down position with the motor off, the claw has to resist being pushed backwards by the cube."
{{< /figrow >}}

### Two Ways to Stay Put

When you drag the machine, the cube pushes back against the claw. Something has to stop the effector from simply folding up out of the way. There are two entirely different things that could be doing it.

{{< figrow tall=true >}}
- src: "mech23_gear_linkage-diagram-02.svg"
  alt: "Two ways to resist a load. A self-locking worm drive at left prevents the output from turning the input backwards; test whether your own drive holds. At right, a triangular brace limits bending. Its grey dashed outline exaggerates the elastic deflection under a leftward force."
  caption: "Both may hold the cube. Test whether your drive locks or your structure flexes under load."
{{< /figrow >}}

{{< callout title="How to Tell Which One You Built" >}}
With the power off and the effector down, push the claw backwards by hand and watch the motor shaft.

**If the motor shaft turns** as the effector moves, your drive is back-drivable. Nothing is locking. Whatever holding you have is coming from friction and from how stiffly it is built --- and it will let go under a big enough load.

**If the effector refuses to move and the motor shaft stays still**, something in your drive train is [[SELF-LOCKING|self-locking]]. It will hold until a part breaks.

**If it gives a little and springs back** when you let go, that is [[STIFFNESS|flex]], not holding. Note how much it moved.
{{< /callout >}}

Before you build: which of the two do you intend to rely on, and how will you get it?

{{< answer key="p2_intent" label="Holding strategy intent" >}}

## Phase 3 --- Build the Bare Mechanism

Build the gear and linkage first, with no claw. Get the effector cycling up and down from a one-way drive before you add anything to the end of it.

{{< callout title="Before You Go On" variant="navy" >}}
Turn the drive by hand through five complete cycles. It must get all the way round without reaching a position it cannot pass --- check the link lengths against the test from Challenge 8 if it locks up.

This matters especially here. Your motor never reverses, so a mechanism that jams mid-cycle will simply be pushed against until something gives.
{{< /callout >}}

### Run the Hand Test Now

Stop the mechanism with the effector down. Push the effector backwards by hand and watch the motor shaft. Record what happened --- you will compare it to your later result.

Did the motor shaft turn when you pushed the effector? Describe exactly what you saw.

{{< answer key="p3_hand_test" label="Hand test result" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, create an effector that drops down and goes back up without changing the direction that the motor is spinning.
{{< /callout >}}

### Mental Picture

Think of the bucket on a backhoe. It drops, digs in, and lifts back out --- and when the operator parks it down and drives forward, the bucket drags its load along the ground with it.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The action must be cyclical and controlled by a motor.
2.  The motor may only spin in one direction.
3.  The claw on the end of the effector must be capable of securing an object 1″ × 1″ × 1″.
4.  With the motor stopped and the effector in the down position, moving the whole structure must slide the object along with it.
5.  The cycle must repeat 10 times without the claw losing the object or the mechanism jamming.
6.  Kit parts only.

{{< callout title="Constraint 4 Is the One That Will Catch You Out" >}}
Everything else is about making the mechanism move. This one is about making it *not* move, at the moment when nothing is powering it.

A design that cycles beautifully can still fail here, because the drag load pushes the effector in exactly the direction the linkage wants to fold. Think about it before you build, not after.
{{< /callout >}}

### Your Plan --- Before You Build

Which direction does the drag load push your effector? Will the linkage fold that way or resist it?

{{< answer key="p4_drag_direction" label="Drag direction analysis" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your machine fail on the cycle, on the grip, or on the drag?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="The Drag Test" >}}
Park the effector down on the cube with the motor off. Now push the whole structure along a smooth surface and measure how far the cube travels before it escapes.

Do it three times. If you get three different distances, the holding is coming from friction rather than from anything locking.
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
      text: "Time for one complete cycle"
    -
      key: "p5_cycle_time"
      aria: "Cycle time"
    -
      key: "p5_cycle_time_unit"
      aria: "Unit"
      value: "seconds"
  -
    -
      text: "How far the effector drops, top to bottom"
    -
      key: "p5_drop"
      aria: "Drop distance"
    -
      key: "p5_drop_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Claw opening at its widest"
    -
      key: "p5_claw_open"
      aria: "Claw opening"
    -
      key: "p5_claw_open_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Drag distance, attempt 1"
    -
      key: "p5_drag1"
      aria: "Drag 1"
    -
      key: "p5_drag1_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Drag distance, attempt 2"
    -
      key: "p5_drag2"
      aria: "Drag 2"
    -
      key: "p5_drag2_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Drag distance, attempt 3"
    -
      key: "p5_drag3"
      aria: "Drag 3"
    -
      key: "p5_drag3_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Did the motor shaft turn during the hand test?"
    -
      key: "p5_shaft_turned"
      aria: "Shaft turned"
    -
      key: "p5_shaft_turned_unit"
      aria: "Unit"
      value: "yes / no"
  -
    -
      text: "How far the effector flexed before springing back"
    -
      key: "p5_flex"
      aria: "Flex"
    -
      key: "p5_flex_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Cycles completed without losing the cube"
    -
      key: "p5_cycles"
      aria: "Cycles"
    -
      key: "p5_cycles_unit"
      aria: "Unit"
      value: "cycles"
{{< /gridtable >}}

### Which One Is Yours?

Based on the hand test and the drag test, is your mechanism holding because something locks, or because it is stiff? Give the evidence, not just the answer.

{{< answer key="p5_which_mechanism" label="Which holding mechanism" >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Cycled OK?"
- head: "Drag (in)"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_cycled"
      aria: "Trial 1 cycled"
    - key: "trial1_drag"
      aria: "Trial 1 drag distance"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_cycled"
      aria: "Trial 2 cycled"
    - key: "trial2_drag"
      aria: "Trial 2 drag distance"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_cycled"
      aria: "Trial 3 cycled"
    - key: "trial3_drag"
      aria: "Trial 3 drag distance"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_cycled"
      aria: "Trial 4 cycled"
    - key: "trial4_drag"
      aria: "Trial 4 drag distance"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_cycled"
      aria: "Trial 5 cycled"
    - key: "trial5_drag"
      aria: "Trial 5 drag distance"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_cycled"
      aria: "Trial 6 cycled"
    - key: "trial6_drag"
      aria: "Trial 6 drag distance"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_cycled"
      aria: "Trial 7 cycled"
    - key: "trial7_drag"
      aria: "Trial 7 drag distance"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_cycled"
      aria: "Trial 8 cycled"
    - key: "trial8_drag"
      aria: "Trial 8 drag distance"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_cycled"
      aria: "Trial 9 cycled"
    - key: "trial9_drag"
      aria: "Trial 9 drag distance"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_cycled"
      aria: "Trial 10 cycled"
    - key: "trial10_drag"
      aria: "Trial 10 drag distance"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_cyclical"
  label: "The action is cyclical and driven by the motor."
- key: "p5_check_oneway"
  label: "The motor spun in one direction only, and never reversed."
- key: "p5_check_claw"
  label: "The claw secured a 1″ × 1″ × 1″ object."
- key: "p5_check_drag"
  label: "With the motor off and the effector down, moving the structure slid the object along."
- key: "p5_check_ten"
  label: "Completed 10 cycles without losing the object or jamming."
- key: "p5_check_materials"
  label: "Kit parts only."
{{< /checklist >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Knowing that a mechanism holds is not the same as knowing why. The difference decides whether it will still hold on the day it matters.
{{< /callout >}}

A mechanism held by friction and stiffness works right up until something gets heavier, or the surface gets grippier, or a collision knocks it. A mechanism held by a locking drive keeps holding. Both look identical on the bench.

Name a Botball mechanism that has to hold position with the motor off. Would you want it locked or merely stiff? Say why.

{{< answer key="p6_which_want" label="Locked or stiff" >}}

Dragging an object is not the same as carrying it. Name a Botball task where dragging would be the better choice.

{{< answer key="p6_dragging" label="Dragging application" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Describe the test you used to find out whether your drive was back-drivable, and what it told you.

{{< answer key="p7_q1_test" label="Reflection 1" >}}

2\. Explain the difference between a mechanism that locks and one that is merely stiff. Which fails more gracefully?

{{< answer key="p7_q2_difference" label="Reflection 2" >}}

3\. Challenge 21 also used a one-way motor. What did this challenge ask for that the elevator did not?

{{< answer key="p7_q3_vs_c21" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "Two mechanisms can behave the same on the bench for different reasons. This means that before I trust one, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Load It Until It Lets Go

- Park the effector down and add weight to the object until the claw gives way.
- Record that weight. Then repeat three times --- does it fail at the same number each time?
- A locking mechanism fails at a consistent load. A friction one does not. Which is yours?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Build the Other Kind

- If yours holds by stiffness, add a worm gear to the drive train. If it already locks, remove the locking and brace it instead.
- Repeat the hand test and the drag test on the new version.
- Compare the two on holding, on speed, and on how easy each was to build.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Change the Surface

- Run the drag test on a smooth surface, then on something with more grip.
- Measure the drag distance on both.
- Did the surface change the result? What does that tell you about where the holding comes from?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Faster Cycle

- Halve the time for one complete cycle without losing the object.
- What did you change, and what got worse?
- At what speed does the claw start missing the object on the way down?

{{< answer key="ext_d" label="Extension D" >}}
