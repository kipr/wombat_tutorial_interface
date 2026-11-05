---
title: "Mechanical Design · Challenge 18 — The Four-Bar Linkage Crane"
short_title: "Challenge 18"
description: "Mechanical advantage is not a single number. Find the hardest position and size the motor for that one."
mission_id: "mech18_crane"
mission_title: "Mechanical Design · Challenge 18 — The Four-Bar Linkage Crane"
eyebrow: "Mechanical Design · Challenge 18"
heading: "The Four-Bar Linkage Crane"
subheading: "Student Challenge · Where a Crane Is Strong, and Where It Is Not"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 18 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "Why does the same mechanism feel easy at one point in its travel and impossible at another?"
  -
    term: "Big Idea"
    definition: "[[MECHANICAL ADVANTAGE|Mechanical advantage]] is not one number. In a linkage it changes with every degree of movement."
  -
    term: "Mechanism"
    definition: "[[FOUR-BAR LINKAGE|Four-bar linkage]] arranged as a crane"
  -
    term: "Design Concepts"
    definition: "[[DRIVING LINK|Driving link]] · [[MOMENT ARM|Moment arm]] · [[REACH|Reach]] · [[COUPLER|Coupler]]"
  -
    term: "Materials"
    definition: "Kit parts only"
  -
    term: "What You Need"
    definition: "LEGO kit · one motor · Wombat controller · gears for reduction · an 8 oz weight · ruler · scale"
  -
    term: "Prerequisites"
    definition: "Challenge 8 for four-bar geometry, Challenge 5 for torque, Challenge 17 for mechanical advantage"
weight: 19
hub_unit: 7
hub_title: "The Four-Bar Linkage Crane"
hub_label: "Challenge 18"
---

## Overview

You built a four-bar linkage back in Challenge 8. That one was about geometry --- four links, four pivots, and an arithmetic test for whether the crank could go all the way around.

This is the same family of mechanism asked a different question. Not *can it move*, but *how hard is it to move, and does that change as it goes?*

{{< callout title="Core Insight" >}}
In Challenge 17 mechanical advantage was a number you could calculate once. In a linkage it is not a number at all. It is a value that rises and falls continuously as the mechanism travels, and the same motor that lifts easily in one position will stall in another.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Identify the [[DRIVING LINK|driving link]] in a crane linkage and explain what it controls.
- Explain why a crane gets harder to hold as it extends, using [[MOMENT ARM|moment arm]].
- Find, by measuring, where in its travel a mechanism works hardest.
- Size a gear reduction for the worst position rather than the average one.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="QGKnTEqHSS8" title="LEGO four-bar linkage crane" >}}

Simple mechanics --- four-bar linkage crane.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Find the link that goes down to the base and drives everything else. That is the one your motor will turn.
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

Does the tip of the crane travel in a circle, a straight line, or some other path? Follow it all the way through.

{{< answer key="p1_tip_path" label="Tip path" >}}

What LEGO pieces might take the place of each of the pieces you see?

{{< answer key="p1_pieces" label="LEGO substitutions" >}}

## Phase 2 --- Concept: The Crane Linkage

The crane is a four-bar, arranged so that one of its links carries on past a joint and becomes the boom. Turn the short link at the base and the boom swings out or draws back in.

That short link at the base is the [[DRIVING LINK|driving link]] --- in the video it is the blue rod. It is the one the motor turns, and every other part of the crane follows from it.

{{< figrow tall=true >}}
- src: "mech18_crane-diagram-01.svg"
  alt: "A crane built from a four-bar linkage. Two pivots are anchored to a stationary base. A short driving link runs up from the left pivot and is turned by a motor. A coupler links across and continues past its joint to form the boom, which carries a load at its tip. A dashed arc shows the range the tip travels between contracted and extended."
  caption: "The short blue link at the base is the input. Everything else is a consequence of where it is pointing."
{{< /figrow >}}

### Why the Effort Changes

Go back to the torque rule from Challenge 5: torque is weight multiplied by the distance from the pivot. On a crane, that distance is not fixed. It grows every inch the boom reaches further out.

{{< figrow tall=true >}}
- src: "mech18_crane-diagram-02.svg"
  alt: "The same crane at three positions carrying the same eight ounce load. As the boom reaches further out, the horizontal distance from the pivot to the load grows from four inches to eight to ten, and the torque grows from thirty-two to sixty-four to eighty ounce-inches."
  caption: "The load never changes. The distance does, and torque follows it."
{{< /figrow >}}

{{< calc title="Calculation" >}}
- formula: "torque = load × distance out from the pivot"
- note: "the load stays the same; the distance is what your linkage is changing"
{{< /calc >}}

{{< callout title="Size for the Worst Position" >}}
This is the practical consequence, and it is the reason the challenge has "physics" in its title. If you gear your motor for how the crane feels halfway through its travel, it will stall before it reaches full extension.

Work out the hardest position first, gear for that, and everything easier takes care of itself.
{{< /callout >}}

Where do you expect your crane to be hardest to move --- fully contracted, halfway, or fully extended? Say why.

{{< answer key="p2_predict_hardest" label="Hardest position prediction" >}}

## Phase 3 --- Build the Bare Mechanism

Build the crane linkage with no motor and no load. Move it through its full travel by hand.

{{< callout title="Before You Go On" variant="navy" >}}
Work it from fully contracted to fully extended five times. Nothing should catch, and the linkage should not reach a position it cannot get out of.

If your crane locks up at one end of the travel, check the link lengths against the test from Challenge 8 --- shortest plus longest against the other two. A linkage that fails that test will jam.
{{< /callout >}}

### Feel Where It Is Hard

Now hang the load on the tip and move the crane by hand again, slowly. Pay attention to where it takes real effort and where it moves easily.

Where did it take the most effort by hand? Did that match your Phase 2 prediction?

{{< answer key="p3_effort" label="Effort by hand" >}}

Measure the horizontal distance from the base pivot to the load, contracted and extended. Record both.

{{< answer key="p3_distances" label="Distances" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, modify it so that there is a motor --- perhaps geared up or down --- attached to the bottom of the blue rod of the crane. The crane arm should extend or contract with the use of just one motor.

The blue rod is the driving link: the short link running down to the base pivot, which every other part of the crane follows. If your kit's colours differ, look for that link rather than for the colour.
{{< /callout >}}

### Mental Picture

Think of an excavator boom folding out over a trench. One cylinder near the base does all the work, and the whole arm reaches further with every inch that cylinder moves.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The base of the crane, as well as the motor, must be stationary.
2.  The crane arm must extend and contract using just one motor.
3.  The tip must travel at least 6 inches between fully contracted and fully extended.
4.  The crane must carry a load of at least 8 oz at its tip through the whole travel, in both directions.
5.  The crane must complete the full travel on more than 90% of attempts, counted over at least 10 cycles.
6.  Kit parts only.

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
      text: "Load at the tip"
    -
      key: "p4_load"
      aria: "Load"
    -
      key: "p4_load_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "Horizontal distance to the load, fully extended"
    -
      key: "p4_max_distance"
      aria: "Max distance"
    -
      key: "p4_max_distance_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Torque at the worst position (load × distance)"
    -
      key: "p4_worst_torque"
      aria: "Worst torque"
    -
      key: "p4_worst_torque_unit"
      aria: "Unit"
      value: "oz-in"
  -
    -
      text: "Gear reduction you plan to use"
    -
      key: "p4_reduction"
      aria: "Planned reduction"
    -
      key: "p4_reduction_unit"
      aria: "Unit"
      value: ": 1"
{{< /gridtable >}}

### Your Plan --- Before You Build

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your crane stall on the way out, on the way back in, or neither?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="Map the Effort Across the Travel" >}}
Do not just record whether it worked. Divide the travel into three parts --- near contracted, middle, near extended --- and add weight in each until the crane stalls there.

Three stall weights tell you the shape of the problem. One pass or fail tells you nothing about where to make the fix.
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
      text: "Reach, fully contracted"
    -
      key: "p5_reach_in"
      aria: "Reach contracted"
    -
      key: "p5_reach_in_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Reach, fully extended"
    -
      key: "p5_reach_out"
      aria: "Reach extended"
    -
      key: "p5_reach_out_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Total tip travel (extended − contracted)"
    -
      key: "p5_travel"
      aria: "Tip travel"
    -
      key: "p5_travel_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Load carried at the tip"
    -
      key: "p5_load"
      aria: "Load carried"
    -
      key: "p5_load_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "Torque at full extension (load × distance)"
    -
      key: "p5_torque"
      aria: "Torque at extension"
    -
      key: "p5_torque_unit"
      aria: "Unit"
      value: "oz-in"
  -
    -
      text: "Stall weight near contracted"
    -
      key: "p5_stall_in"
      aria: "Stall weight contracted"
    -
      key: "p5_stall_in_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "Stall weight at the middle"
    -
      key: "p5_stall_mid"
      aria: "Stall weight middle"
    -
      key: "p5_stall_mid_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "Stall weight near extended"
    -
      key: "p5_stall_out"
      aria: "Stall weight extended"
    -
      key: "p5_stall_out_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "Total gear reduction used"
    -
      key: "p5_reduction"
      aria: "Reduction used"
    -
      key: "p5_reduction_unit"
      aria: "Unit"
      value: ": 1"
{{< /gridtable >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Full travel?"
- head: "Where it struggled"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_travel"
      aria: "Trial 1 full travel"
    - key: "trial1_struggled"
      aria: "Trial 1 where it struggled"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_travel"
      aria: "Trial 2 full travel"
    - key: "trial2_struggled"
      aria: "Trial 2 where it struggled"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_travel"
      aria: "Trial 3 full travel"
    - key: "trial3_struggled"
      aria: "Trial 3 where it struggled"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_travel"
      aria: "Trial 4 full travel"
    - key: "trial4_struggled"
      aria: "Trial 4 where it struggled"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_travel"
      aria: "Trial 5 full travel"
    - key: "trial5_struggled"
      aria: "Trial 5 where it struggled"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_travel"
      aria: "Trial 6 full travel"
    - key: "trial6_struggled"
      aria: "Trial 6 where it struggled"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_travel"
      aria: "Trial 7 full travel"
    - key: "trial7_struggled"
      aria: "Trial 7 where it struggled"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_travel"
      aria: "Trial 8 full travel"
    - key: "trial8_struggled"
      aria: "Trial 8 where it struggled"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_travel"
      aria: "Trial 9 full travel"
    - key: "trial9_struggled"
      aria: "Trial 9 where it struggled"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_travel"
      aria: "Trial 10 full travel"
    - key: "trial10_struggled"
      aria: "Trial 10 where it struggled"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_stationary"
  label: "The base and the motor stayed put throughout."
- key: "p5_check_onemotor"
  label: "Only one motor is used anywhere in the machine."
- key: "p5_check_travel"
  label: "The tip travels at least 6 inches between the two extremes."
- key: "p5_check_load"
  label: "Carried at least 8 oz through the whole travel, extending and contracting."
- key: "p5_check_rate"
  label: "Completed the full travel on more than 90% of attempts, over at least 10 cycles."
- key: "p5_check_materials"
  label: "Kit parts only."
{{< /checklist >}}

Compare your three stall weights. Where was the crane weakest, and by how much?

{{< answer key="p5_stall_compare" label="Stall comparison" >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
A mechanism tested only in the easy part of its range will fail in the match, at the one position that matters.
{{< /callout >}}

The habit worth taking from this challenge is not about cranes. It is about testing at the worst case rather than the typical one, and sizing motors for that worst case with something left over.

Name a Botball mechanism whose difficulty would change as it moves. Where in its range would you test it, and why there?

{{< answer key="p6_worst_case" label="Worst case testing" >}}

Compare this crane to the Big Arm from Challenge 5. Both reach out and carry a load. What does the linkage give you that the plain arm did not?

{{< answer key="p6_vs_big_arm" label="Comparison to Big Arm" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain why a crane carrying the same load gets harder to hold as it extends.

{{< answer key="p7_q1_harder" label="Reflection 1" >}}

2\. In Challenge 17 mechanical advantage was one number. Explain why that is not true for a linkage.

{{< answer key="p7_q2_varies" label="Reflection 2" >}}

3\. You built a four-bar in Challenge 8 as well. What did you learn here that the first one did not teach you?

{{< answer key="p7_q3_compare_c8" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "A mechanism has a worst position. This means that when I size a motor, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Attach a Counterweight

- Add a counterweight on the opposite side of the base pivot, as you did in Challenge 5.
- Re-measure your three stall weights.
- Did the counterweight help equally at all three positions, or more at one? Explain the result.

{{< answer key="ext_a" label="Extension A" >}}

### Change the Driving Link

- Lengthen the blue driving link and run the crane again.
- What happened to the total tip travel, and what happened to the effort needed?
- Write the tradeoff as a rule someone else could use.

{{< answer key="ext_b" label="Extension B" >}}

### Reach Farther

- Get 10 inches of tip travel instead of 6, carrying the same 8 oz.
- What did you have to add to the gear train to pay for it?
- How much slower did the crane get?

{{< answer key="ext_c" label="Extension C" >}}

### Plot the Curve

- Measure the horizontal distance from the pivot to the load at six points across the travel.
- Calculate the torque at each, and plot torque against position on graph paper.
- Is the curve a straight line? What does its shape tell you about where to be careful?

{{< answer key="ext_d" label="Extension D" >}}
