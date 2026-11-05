---
title: "Mechanical Design · Challenge 19 — Drive at 45 Degrees"
short_title: "Challenge 19"
description: "Gears are cut for one angle. A joint bends to any angle — and gives up a perfectly even output to do it."
mission_id: "mech19_gear_45"
mission_title: "Mechanical Design · Challenge 19 — Drive at 45 Degrees"
eyebrow: "Mechanical Design · Challenge 19"
heading: "Drive at 45 Degrees"
subheading: "Student Challenge · Turning a Corner That Isn't a Right Angle"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 19 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "Bevel gears turn a drive 90°. What do we use when the corner is not 90°?"
  -
    term: "Big Idea"
    definition: "A [[UNIVERSAL JOINT|universal joint]] passes rotation through a bend at almost any angle --- but not at a perfectly steady speed."
  -
    term: "Mechanism"
    definition: "Angled drive"
  -
    term: "Design Concepts"
    definition: "[[SHAFT ANGLE|Shaft angle]] · [[YOKE|Yoke]] · [[CONSTANT VELOCITY|Constant velocity]] · [[DOUBLE JOINT|Double joint]]"
  -
    term: "Materials"
    definition: "Kit parts only"
  -
    term: "What You Need"
    definition: "LEGO kit · one motor · Wombat controller · universal joints or angled gearing · protractor · marker"
  -
    term: "Prerequisite"
    definition: "Challenge 13 --- the bevel drive. This is the same problem at a different angle."
weight: 20
hub_unit: 7
hub_title: "Drive at 45 Degrees"
hub_label: "Challenge 19"
---

## Overview

In Challenge 13 you turned a drive through a right angle with bevel gears. That worked because bevel gears are made for exactly that corner --- the teeth are cut on cones that meet at 90°, and nothing else.

Real machines rarely get to choose 90°. A motor has to go where there is room for it, and the thing it drives has to go where the job is. The angle between them is whatever is left over.

{{< callout title="Core Insight" >}}
Gears are made for one fixed angle. A joint is not --- it bends to whatever angle you need. What you give up is that the output no longer turns at a perfectly even rate.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain why bevel gears cannot solve every angled-drive problem.
- Describe how a universal joint carries rotation through a bend.
- Measure the speed variation a single joint produces.
- Explain how a second joint cancels that variation.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="h6SRmSO2Mzo" title="LEGO 45 degree gear rotation" >}}

Simple mechanics --- 45 degree gear rotation.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. The two shafts are not lined up and they are not at a right angle. What sits between them, and how does it bend?
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

Watch the output shaft closely through several full turns. Does it turn at a steady rate, or does it seem to hurry and then hesitate?

{{< answer key="p1_steady" label="Steadiness observation" >}}

What LEGO pieces might take the place of each of the pieces you see?

{{< answer key="p1_pieces" label="LEGO substitutions" >}}

## Phase 2 --- Concept: Angles Between Shafts

The angle between an input shaft and an output shaft is the [[SHAFT ANGLE|shaft angle]]. Two of them are easy, and everything else needs something different.

{{< figrow tall=true >}}
- src: "mech19_gear_45-diagram-01.svg"
  alt: "Three shaft arrangements compared. At zero degrees the shafts are in line and ordinary gears or a coupling will do. At ninety degrees bevel gears are made for exactly that corner. At forty-five degrees neither fits, and a joint is needed instead."
  caption: "Gears are manufactured for a particular shaft angle. Between the standard ones, you need a mechanism that bends."
{{< /figrow >}}

### The Universal Joint

A [[UNIVERSAL JOINT|universal joint]] is two forked ends --- each one is called a [[YOKE|yoke]] --- connected by a cross-shaped pin in the middle. Each yoke can pivot on one arm of the cross, and because the two arms are at right angles to each other, the pair together can bend in any direction.

Turn one shaft and the cross carries the twist round to the other, whatever angle the two shafts happen to make.

{{< figrow tall=true >}}
- src: "mech19_gear_45-diagram-02.svg"
  alt: "Two arrangements. On the left a single universal joint carries drive from a horizontal input shaft to an output shaft at forty-five degrees, and the output speed varies through each turn. On the right two joints are used with an intermediate shaft, and the second joint cancels the variation of the first."
  caption: "One joint gets you round the corner. Two get you round it smoothly."
{{< /figrow >}}

{{< callout title="Why a Single Joint Is Not Smooth" >}}
Turn the input at a perfectly steady rate and the output does not keep up evenly. It runs slightly ahead for part of the turn and slightly behind for the rest, twice every revolution.

At a small angle you would barely notice. At 45° it is obvious, and you will measure it in Phase 5.

A drive that keeps the output exactly in step with the input is called [[CONSTANT VELOCITY|constant velocity]]. A single universal joint is not one. A [[DOUBLE JOINT|double joint]], with equal and opposite bends, very nearly is.
{{< /callout >}}

Compare this to the worm gear in Challenge 9 and the coulisse in Challenge 12. Which of the three gives the steadiest output, and which is deliberately the least steady?

{{< answer key="p2_steadiness" label="Steadiness comparison" >}}

## Phase 3 --- Build the Bare Mechanism

Build a drive that carries rotation from one shaft to another at roughly 45°. Do not attach a motor or a load yet --- turn it by hand.

{{< callout title="Before You Go On" variant="navy" >}}
Turn the input by hand through five full rotations. The output should follow all the way round without catching or locking.

Both shafts have to be supported on their own. A joint carries twist, not weight --- if either shaft is only being held up by the joint, it will bind or pull apart under load.
{{< /callout >}}

What did you use to get round the 45° corner? Describe your solution.

{{< answer key="p3_solution" label="Solution used" >}}

Turn the input slowly and watch the output. Can you see it running ahead and then falling behind? Describe what you see.

{{< answer key="p3_variation_observed" label="Variation observed" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, modify and attach it in such a fashion that a motor lying flat on the base drives an output shaft mounted on a surface angled roughly 45° away from it. The output must turn continuously and smoothly enough to drive an effector.
{{< /callout >}}

### Mental Picture

Think of a socket wrench with a swivel adapter on it. The handle sits off at whatever angle your hand can reach, and the socket still turns squarely on the bolt. The bend is in the middle, and the turning goes straight through it.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The base structure must be stationary. Only the drive train may move.
2.  The motor must lie flat on the base. It may not be tilted to line itself up with the output.
3.  The output shaft must be mounted at roughly 45° to the motor's shaft.
4.  The output must turn continuously through at least 20 full revolutions without binding, slipping, or coming apart.
5.  The drive must keep turning the output when you press a finger against it. It cannot slip free under a light load.
6.  Kit parts only.

{{< callout title="About the Angle" variant="navy" >}}
There is no tolerance on the 45° in this challenge. Get it close and move on --- what is being tested is whether the drive works at an awkward angle, not whether you hit a number.

Measure what you actually built and write it down, though. You will need it when you compare your speed variation to someone else's.
{{< /callout >}}

### Your Plan --- Before You Build

How will you support both shafts so the joint only has to carry twist and not weight?

{{< answer key="p4_support" label="Shaft support plan" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your drive fail by binding, by pulling apart, or by slipping under load?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="Measure the Speed Variation" >}}
Here is how to see something that happens too fast to watch. Mark a line on the input shaft and another on the output shaft, and set both to a starting position.

Now turn the input by hand in eight equal steps of 45° each --- one full revolution. After each step, measure how far the output has turned *since the last step*, and write it down.

If the drive were perfectly even, all eight numbers would be 45°. They will not be.
{{< /callout >}}

### The Eight-Step Test

{{< gridtable >}}
columns:
  -
    head: "Input step"
  -
    head: "Output moved"
  -
    head: "Difference from 45°"
rows:
  -
    -
      text: "Step 1 --- input 0° to 45°"
    -
      key: "p5_step1_out"
      aria: "Step 1 output"
    -
      key: "p5_step1_diff"
      aria: "Step 1 difference"
  -
    -
      text: "Step 2 --- 45° to 90°"
    -
      key: "p5_step2_out"
      aria: "Step 2 output"
    -
      key: "p5_step2_diff"
      aria: "Step 2 difference"
  -
    -
      text: "Step 3 --- 90° to 135°"
    -
      key: "p5_step3_out"
      aria: "Step 3 output"
    -
      key: "p5_step3_diff"
      aria: "Step 3 difference"
  -
    -
      text: "Step 4 --- 135° to 180°"
    -
      key: "p5_step4_out"
      aria: "Step 4 output"
    -
      key: "p5_step4_diff"
      aria: "Step 4 difference"
  -
    -
      text: "Step 5 --- 180° to 225°"
    -
      key: "p5_step5_out"
      aria: "Step 5 output"
    -
      key: "p5_step5_diff"
      aria: "Step 5 difference"
  -
    -
      text: "Step 6 --- 225° to 270°"
    -
      key: "p5_step6_out"
      aria: "Step 6 output"
    -
      key: "p5_step6_diff"
      aria: "Step 6 difference"
  -
    -
      text: "Step 7 --- 270° to 315°"
    -
      key: "p5_step7_out"
      aria: "Step 7 output"
    -
      key: "p5_step7_diff"
      aria: "Step 7 difference"
  -
    -
      text: "Step 8 --- 315° to 360°"
    -
      key: "p5_step8_out"
      aria: "Step 8 output"
    -
      key: "p5_step8_diff"
      aria: "Step 8 difference"
{{< /gridtable >}}

Add up all eight of your output figures. Do they come to 360°? Explain why they must, even though the individual steps are uneven.

{{< answer key="p5_sum_360" label="Sum to 360" >}}

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
      text: "Shaft angle you actually built"
    -
      key: "p5_angle"
      aria: "Shaft angle"
    -
      key: "p5_angle_unit"
      aria: "Unit"
      value: "degrees"
  -
    -
      text: "Largest output step from the eight-step test"
    -
      key: "p5_max_step"
      aria: "Largest step"
    -
      key: "p5_max_step_unit"
      aria: "Unit"
      value: "degrees"
  -
    -
      text: "Smallest output step"
    -
      key: "p5_min_step"
      aria: "Smallest step"
    -
      key: "p5_min_step_unit"
      aria: "Unit"
      value: "degrees"
  -
    -
      text: "Spread between them"
    -
      key: "p5_spread"
      aria: "Spread"
    -
      key: "p5_spread_unit"
      aria: "Unit"
      value: "degrees"
  -
    -
      text: "Revolutions completed without failure"
    -
      key: "p5_revs"
      aria: "Revolutions"
    -
      key: "p5_revs_unit"
      aria: "Unit"
      value: "turns"
{{< /gridtable >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Revs held"
- head: "Held under load?"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_revs"
      aria: "Trial 1 revolutions held"
    - key: "trial1_load"
      aria: "Trial 1 held under load"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_revs"
      aria: "Trial 2 revolutions held"
    - key: "trial2_load"
      aria: "Trial 2 held under load"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_revs"
      aria: "Trial 3 revolutions held"
    - key: "trial3_load"
      aria: "Trial 3 held under load"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_revs"
      aria: "Trial 4 revolutions held"
    - key: "trial4_load"
      aria: "Trial 4 held under load"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_revs"
      aria: "Trial 5 revolutions held"
    - key: "trial5_load"
      aria: "Trial 5 held under load"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_revs"
      aria: "Trial 6 revolutions held"
    - key: "trial6_load"
      aria: "Trial 6 held under load"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_revs"
      aria: "Trial 7 revolutions held"
    - key: "trial7_load"
      aria: "Trial 7 held under load"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_revs"
      aria: "Trial 8 revolutions held"
    - key: "trial8_load"
      aria: "Trial 8 held under load"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_revs"
      aria: "Trial 9 revolutions held"
    - key: "trial9_load"
      aria: "Trial 9 held under load"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_revs"
      aria: "Trial 10 revolutions held"
    - key: "trial10_load"
      aria: "Trial 10 held under load"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_stationary"
  label: "The base did not shift or need a hand on it while running."
- key: "p5_check_flat"
  label: "The motor lies flat on the base and is not tilted toward the output."
- key: "p5_check_angle"
  label: "The output shaft is mounted at roughly 45° to the motor shaft."
- key: "p5_check_revs"
  label: "Turned 20 full revolutions without binding, slipping, or coming apart."
- key: "p5_check_load"
  label: "Kept turning the output with a finger pressed against it."
- key: "p5_check_materials"
  label: "Kit parts only."
{{< /checklist >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Where a motor can physically fit is one of the first things that limits a robot design. A drive that bends removes that limit.
{{< /callout >}}

With bevel gears the motor has to sit square to what it drives. With a joint it can sit anywhere there is room, at any angle, and the drive still gets where it is going. That is often the difference between a layout that fits inside the size box and one that does not.

Describe a robot layout problem that a bending drive would solve. What are you able to fit in that you could not before?

{{< answer key="p6_layout" label="Layout problem" >}}

Your drive does not turn the output at a perfectly even rate. Name a Botball job where that would not matter at all, and one where it would cause real trouble.

{{< answer key="p6_when_matters" label="When variation matters" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain why bevel gears could not solve this challenge, even though they turn a drive through a corner.

{{< answer key="p7_q1_why_not_bevel" label="Reflection 1" >}}

2\. Describe the speed variation you measured. Was it as large as you expected?

{{< answer key="p7_q2_variation" label="Reflection 2" >}}

3\. Explain how a second joint cancels the unevenness of the first. Use the words *equal* and *opposite*.

{{< answer key="p7_q3_double" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "A joint bends to any angle, but does not turn evenly. This means that when I need a drive at an awkward angle, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Build the Double Joint

- Add a second joint with an equal and opposite bend, and an intermediate shaft between them.
- Run the eight-step test again and record all eight output figures.
- How much smaller is the spread than it was with one joint? Did it disappear completely?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Change the Angle

- Rebuild at roughly 20°, then at as steep an angle as your joint will take.
- Run the eight-step test at each angle.
- How does the spread change as the angle gets steeper? Write the relationship as a rule.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Drive Something Real

- Put an effector on the angled output --- a pincer from Challenge 3, or a cam from Challenge 7.
- Run it 20 cycles under load.
- Did the joint hold up? What failed first, the joint or something else?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Bevel Versus Joint

- Build a bevel drive at 90° and run the eight-step test on it too.
- Compare its spread to your angled joint's.
- Which would you use where evenness matters, and what did that choice cost you?

{{< answer key="ext_d" label="Extension D" >}}
