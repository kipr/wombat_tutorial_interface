---
title: "Mechanical Design · Challenge 15 — Combining Mechanisms"
short_title: "Challenge 15"
description: "Halfway. Chain at least two of the nine mechanisms you have built and produce more than six inches of travel."
mission_id: "mech15_synthesis"
mission_title: "Mechanical Design · Challenge 15 — Combining Mechanisms"
eyebrow: "Mechanical Design · Challenge 15"
heading: "Combining Mechanisms"
subheading: "Student Challenge · Six Inches from Parts You Already Have"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 15 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "What can two mechanisms do together that neither could do alone?"
  -
    term: "Big Idea"
    definition: "The output of one mechanism can be the input of the next --- and [[DISPLACEMENT|displacement]] can be traded for force."
  -
    term: "Mechanism"
    definition: "Your choice --- at least two from Challenges 6--14"
  -
    term: "Design Concepts"
    definition: "[[SERIES|Series]] · [[INTERFACE|Interface]] · [[BACKLASH|Backlash]] · [[STABILITY|Stability]]"
  -
    term: "Materials"
    definition: "Whatever was permitted in the challenges you are combining"
  -
    term: "What You Need"
    definition: "LEGO kit · one motor · Wombat controller · ruler · your notes from Challenges 6--14"
  -
    term: "Position in Module"
    definition: "Midpoint. This one looks back before the second half begins."
weight: 16
hub_unit: 6
hub_title: "Combining Mechanisms"
hub_label: "Challenge 15"
---

## Overview

You have built nine mechanisms. Each one solved a problem on its own, and each one had a limit --- a crank can only stroke twice its pin offset, a cam can only lift as far as its lobe, a Geneva drive only ever gives you four stops.

Real machines are rarely one mechanism. They are two or three chained together, where each one's output becomes the next one's input. That is what this challenge is about, and it is deliberately placed at the halfway mark: before you learn nine more, prove you can use the ones you have.

{{< callout title="Core Insight" >}}
A mechanism's limit is rarely the end of the story. Feed its output into something else and the limit moves.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Describe what each mechanism from Challenges 6--14 is good at, from memory.
- Chain two mechanisms in [[SERIES|series]] so one drives the other.
- Explain how a lever trades force for distance.
- Find the weakest [[INTERFACE|interface]] in a machine and strengthen it.

## Phase 1 --- Take Stock of What You Have

{{< callout title="Video coming" >}}
A short survey clip will go here. Until then, work from the mechanisms you have already built --- everything you need for this challenge is on the list below.
{{< /callout >}}

Mechanism survey --- clip to be added.

### Your Toolkit

Fill this in from memory first, then check your old sheets. Say what each mechanism is genuinely good at in a few words, and whether it could help you produce a long straight push.

{{< gridtable >}}
columns:
  -
    head: "Mechanism"
  -
    head: "What it is good at"
  -
    head: "Useful here?"
rows:
  -
    -
      text: "6 · Crank"
    -
      key: "inv_crank_use"
      aria: "Crank use"
    -
      key: "inv_crank_here"
      aria: "Crank useful here"
  -
    -
      text: "7 · Cam"
    -
      key: "inv_cam_use"
      aria: "Cam use"
    -
      key: "inv_cam_here"
      aria: "Cam useful here"
  -
    -
      text: "8 · Four-bar linkage"
    -
      key: "inv_fourbar_use"
      aria: "Four-bar use"
    -
      key: "inv_fourbar_here"
      aria: "Four-bar useful here"
  -
    -
      text: "9 · Worm gear"
    -
      key: "inv_worm_use"
      aria: "Worm use"
    -
      key: "inv_worm_here"
      aria: "Worm useful here"
  -
    -
      text: "10 · Worm-driven pincer"
    -
      key: "inv_wormpincer_use"
      aria: "Worm pincer use"
    -
      key: "inv_wormpincer_here"
      aria: "Worm pincer useful here"
  -
    -
      text: "11 · Rack and pinion"
    -
      key: "inv_rack_use"
      aria: "Rack use"
    -
      key: "inv_rack_here"
      aria: "Rack useful here"
  -
    -
      text: "12 · Coulisse"
    -
      key: "inv_coulisse_use"
      aria: "Coulisse use"
    -
      key: "inv_coulisse_here"
      aria: "Coulisse useful here"
  -
    -
      text: "13 · Bevel drive"
    -
      key: "inv_bevel_use"
      aria: "Bevel use"
    -
      key: "inv_bevel_here"
      aria: "Bevel useful here"
  -
    -
      text: "14 · Geneva drive"
    -
      key: "inv_geneva_use"
      aria: "Geneva use"
    -
      key: "inv_geneva_here"
      aria: "Geneva useful here"
{{< /gridtable >}}

Which one of the nine gives you the longest straight travel on its own, and what limits it?

{{< answer key="p1_longest" label="Longest travel" >}}

## Phase 2 --- Concept: Putting Mechanisms in Series

Two mechanisms are in [[SERIES|series]] when the output of the first is the input of the second. The motor drives mechanism one, mechanism one drives mechanism two, and mechanism two does the actual job.

{{< figrow tall=true >}}
- src: "mech15_synthesis-diagram-01.svg"
  alt: "Three blocks in a row connected by arrows: mechanism one, mechanism two, and the output. The two connection points between the blocks are marked as interfaces, where most failures happen."
  caption: "The mechanisms are the easy part. The joins between them are where machines come apart."
{{< /figrow >}}

{{< callout title="Slop Adds Up" >}}
You met [[BACKLASH|backlash]] in Challenge 3 --- the small amount of free play in any joint. One joint's worth is usually tolerable.

Chain two mechanisms and you have at least two more joints. Their slop does not cancel out. It adds, and by the far end of the machine a small looseness at the motor has become a large wobble at the output.
{{< /callout >}}

### Trading Force for Distance

Here is the trick that will probably get you past 6 inches. Drive the short end of a lever, and the long end moves further --- in exact proportion to the arm lengths.

{{< figrow tall=true >}}
- src: "mech15_synthesis-diagram-02.svg"
  alt: "A lever on a pivot. The input is applied close to the pivot and moves a short distance. The output at the far end of the lever moves three times as far, because its arm is three times as long, but it pushes with one third the force."
  caption: "Arm lengths in a 1:3 ratio turn a 2-inch stroke into a 6-inch one."
{{< /figrow >}}

{{< calc title="Calculation" >}}
- formula: "output stroke = input stroke × (long arm ÷ short arm)"
- note: "and the force at the output is divided by exactly the same number"
{{< /calc >}}

{{< callout title="You Have Heard This Before" variant="navy" >}}
In Challenge 4 the rule was that gears are not magic --- everything gained is given up somewhere else. Levers obey the same rule. Three times the distance costs you two thirds of your force.

If your machine reaches 6 inches but is suddenly too weak to push anything, that is not a bug. That is the trade, and you may need to gear down at the motor to pay for it.
{{< /callout >}}

Which pairing are you leaning toward, and which mechanism is doing which job?

{{< answer key="p2_pairing" label="Planned pairing" >}}

## Phase 3 --- Build the Chain

Build your first mechanism and confirm it works alone. Measure its stroke. Then build the second and connect them.

{{< callout title="Before You Go On" variant="navy" >}}
Turn the whole chain by hand through five full cycles before you attach a motor. Watch each interface as it moves.

If something binds, it is almost always at a join --- two parts that each move fine alone but fight each other when connected. Look for a joint being asked to move in a direction it cannot.
{{< /callout >}}

Measure the stroke of your first mechanism on its own. Record it.

{{< answer key="p3_first_stroke" label="First mechanism stroke" >}}

Now measure the stroke at the output of the whole chain. How much did the second mechanism add?

{{< answer key="p3_chain_stroke" label="Chain stroke" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Combine mechanisms you have already built so that the total linear movement --- the [[DISPLACEMENT|displacement]] between the beginning of the stroke and the end --- is more than 6 inches. The structure must be stable enough to make multiple passes through the cycle without falling apart.
{{< /callout >}}

### Constraints

Every one of these must be true for your design to count as finished.

1.  You must combine at least two of the mechanisms from Challenges 6--14. More than two is allowed.
2.  Total linear displacement, measured from the start of the stroke to its end, must be greater than 6 inches.
3.  The structure must complete 10 consecutive cycles without loosening, binding, or shedding parts.
4.  Name each mechanism you used, and say what job it does in your machine.
5.  You may use any materials that were permitted in the challenges you are combining.

### Name Your Mechanisms

- {{< short-answer key="p4_mech_1" label="Mechanism 1 and its job" >}}

- {{< short-answer key="p4_mech_2" label="Mechanism 2 and its job" >}}

- {{< short-answer key="p4_mech_3" label="Mechanism 3 and its job, if used" >}}

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
      text: "Stroke your first mechanism produces on its own"
    -
      key: "p4_stroke_in"
      aria: "Input stroke"
    -
      key: "p4_stroke_in_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Multiplier you need to clear 6 inches"
    -
      key: "p4_multiplier"
      aria: "Multiplier needed"
    -
      key: "p4_multiplier_unit"
      aria: "Unit"
      value: "×"
  -
    -
      text: "Arm lengths that would give you that multiplier"
    -
      key: "p4_arm_ratio"
      aria: "Arm ratio"
    -
      key: "p4_arm_ratio_unit"
      aria: "Unit"
      value: "short : long"
{{< /gridtable >}}

### Your Plan --- Before You Build

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict which interface will give you trouble, and why that one.

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="Measuring Displacement" >}}
Mark the output's position at the very back of its stroke and again at the very front. The distance between those two marks is your displacement --- not the length of any part, and not how far the motor turned.

Measure it three times. If you get three different numbers, you have found slop before you found your stroke.
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
      text: "Number of mechanisms in your chain"
    -
      key: "p5_count"
      aria: "Mechanism count"
    -
      key: "p5_count_unit"
      aria: "Unit"
      value: "mechanisms"
  -
    -
      text: "Displacement, measurement 1"
    -
      key: "p5_disp1"
      aria: "Displacement 1"
    -
      key: "p5_disp1_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Displacement, measurement 2"
    -
      key: "p5_disp2"
      aria: "Displacement 2"
    -
      key: "p5_disp2_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Displacement, measurement 3"
    -
      key: "p5_disp3"
      aria: "Displacement 3"
    -
      key: "p5_disp3_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Spread between your largest and smallest measurement"
    -
      key: "p5_spread"
      aria: "Measurement spread"
    -
      key: "p5_spread_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Consecutive cycles completed without failure"
    -
      key: "p5_cycles"
      aria: "Cycles completed"
    -
      key: "p5_cycles_unit"
      aria: "Unit"
      value: "cycles"
  -
    -
      text: "Where the first failure happened"
    -
      key: "p5_failure_point"
      aria: "Failure point"
    -
      key: "p5_failure_point_unit"
      aria: "Unit"
      value: "location"
{{< /gridtable >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Displacement (in)"
- head: "Cycles held"
- head: "Where it went wrong"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_disp"
      aria: "Trial 1 displacement"
    - key: "trial1_cycles"
      aria: "Trial 1 cycles held"
    - key: "trial1_observed"
      aria: "Trial 1 where it went wrong"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_disp"
      aria: "Trial 2 displacement"
    - key: "trial2_cycles"
      aria: "Trial 2 cycles held"
    - key: "trial2_observed"
      aria: "Trial 2 where it went wrong"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_disp"
      aria: "Trial 3 displacement"
    - key: "trial3_cycles"
      aria: "Trial 3 cycles held"
    - key: "trial3_observed"
      aria: "Trial 3 where it went wrong"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_disp"
      aria: "Trial 4 displacement"
    - key: "trial4_cycles"
      aria: "Trial 4 cycles held"
    - key: "trial4_observed"
      aria: "Trial 4 where it went wrong"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_disp"
      aria: "Trial 5 displacement"
    - key: "trial5_cycles"
      aria: "Trial 5 cycles held"
    - key: "trial5_observed"
      aria: "Trial 5 where it went wrong"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_disp"
      aria: "Trial 6 displacement"
    - key: "trial6_cycles"
      aria: "Trial 6 cycles held"
    - key: "trial6_observed"
      aria: "Trial 6 where it went wrong"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_disp"
      aria: "Trial 7 displacement"
    - key: "trial7_cycles"
      aria: "Trial 7 cycles held"
    - key: "trial7_observed"
      aria: "Trial 7 where it went wrong"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_disp"
      aria: "Trial 8 displacement"
    - key: "trial8_cycles"
      aria: "Trial 8 cycles held"
    - key: "trial8_observed"
      aria: "Trial 8 where it went wrong"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_disp"
      aria: "Trial 9 displacement"
    - key: "trial9_cycles"
      aria: "Trial 9 cycles held"
    - key: "trial9_observed"
      aria: "Trial 9 where it went wrong"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_disp"
      aria: "Trial 10 displacement"
    - key: "trial10_cycles"
      aria: "Trial 10 cycles held"
    - key: "trial10_observed"
      aria: "Trial 10 where it went wrong"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_two"
  label: "The machine combines at least two mechanisms from Challenges 6--14."
- key: "p5_check_six"
  label: "Measured displacement is greater than 6 inches."
- key: "p5_check_cycles"
  label: "Completed 10 consecutive cycles with nothing loosening or falling off."
- key: "p5_check_named"
  label: "Every mechanism used is named, with its job stated."
- key: "p5_check_repeatable"
  label: "Three separate measurements of the displacement agreed closely."
{{< /checklist >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

Did your machine get weaker as it got longer? Test it by pushing against the output. What did you notice?

{{< answer key="p5_force_loss" label="Force loss" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Nobody hands you a mechanism that fits your problem exactly. What you get is a shelf of mechanisms that each do part of it.
{{< /callout >}}

The skill this challenge is building is not any one mechanism. It is looking at a task, recognizing which two things you already know will get you there, and knowing what it will cost to connect them.

Describe a Botball task that no single mechanism from Challenges 6--14 could handle alone. Which two would you chain, and in what order?

{{< answer key="p6_botball_chain" label="Botball chaining" >}}

Your machine has more joints than anything you have built so far. What does that predict about how reliable it will be in a match, compared to a simpler design that does slightly less?

{{< answer key="p6_reliability" label="Reliability tradeoff" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain what it means for two mechanisms to be in series, using your own machine as the example.

{{< answer key="p7_q1_series" label="Reflection 1" >}}

2\. Explain the trade a lever makes. Give the numbers from your own build if you used one.

{{< answer key="p7_q2_lever" label="Reflection 2" >}}

3\. Of the nine mechanisms from Challenges 6--14, which did you understand better after trying to combine it with another? What did you not realize before?

{{< answer key="p7_q3_understanding" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "A mechanism's limit is rarely the end of the story. This means that when something I have built cannot quite do the job, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Double It

- Get the displacement past 12 inches.
- Did you add a third mechanism, or stretch the two you had?
- At what point did the machine become too weak or too floppy to be useful?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Do It With Less

- Remove one mechanism from your chain and try to reach 6 inches with what is left.
- Is it possible? What would you have to change about the remaining mechanism?
- Which version is more reliable over 20 cycles? Count and find out.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Measure the Cost

- Find out how much your machine can push at the far end of its stroke --- add weight until it stalls.
- Now do the same at the output of your first mechanism alone, before any amplification.
- Compare the two numbers to the distance multiplier. Do they match what the lever rule predicts?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Hunt the Weak Join

- Hold each part of the chain in turn and wiggle the output. Which join contributes the most play?
- Strengthen only that one join, then measure the total slop again.
- How much of the machine's wobble came from a single interface?

{{< answer key="ext_d" label="Extension D" >}}
