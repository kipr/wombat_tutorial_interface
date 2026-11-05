---
title: "Mechanical Design · Challenge 12 — The Coulisse Mechanism"
short_title: "Challenge 12"
description: "A pin riding in a slot makes one stroke fast and the other slow, from a wheel turning at a steady rate."
mission_id: "mech12_coulisse"
mission_title: "Mechanical Design · Challenge 12 — The Coulisse Mechanism"
eyebrow: "Mechanical Design · Challenge 12"
heading: "The Coulisse Mechanism"
subheading: "Student Challenge · Fast One Way, Slow the Other"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 12 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How do we make a mechanism move faster one way than the other, from a motor that spins evenly?"
  -
    term: "Big Idea"
    definition: "A pin riding in a [[SLOT:mechanical|slot]] can drive an arm through an uneven cycle --- a fast strike and a slow reset."
  -
    term: "Mechanism"
    definition: "[[COULISSE|Coulisse]], also called a slotted lever"
  -
    term: "Design Concepts"
    definition: "[[CRANK PIN|Crank pin]] · [[OSCILLATION|Oscillation]] · [[QUICK RETURN|Quick return]]"
  -
    term: "Materials"
    definition: "Kit parts only"
  -
    term: "What You Need"
    definition: "LEGO kit · one motor · Wombat controller · at least 3 poms · ruler · stopwatch"
  -
    term: "Prerequisite"
    definition: "Challenge 6 --- the crank. This one breaks the crank's symmetry on purpose."
weight: 13
hub_unit: 5
hub_title: "The Coulisse Mechanism"
hub_label: "Challenge 12"
---

## Overview

The word *coulisse* is French for a groove or a slide. That is the whole idea: this mechanism has a pin that rides inside a slot, and the slot is cut into an arm.

Your crank in Challenge 6 was perfectly even --- out and back, the same speed both ways, every turn. This one is deliberately uneven. It sweeps one direction quickly and crawls back the other way, and the motor spins at a constant rate the whole time.

{{< callout title="Core Insight" >}}
Where you put the pivot decides how the time gets divided. Move it, and you change how much of each turn is spent going one way instead of the other.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain how a pin sliding in a slot converts steady rotation into an uneven swing.
- Measure the [[QUICK RETURN|quick-return]] ratio of your own build.
- Explain why an uneven cycle is useful for striking something.
- Build a mechanism that removes one object without disturbing the ones under it.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice, and on the second viewing count along with the motion.

{{< youtube id="y70LE45o7kE" title="LEGO coulisse mechanism" >}}

Simple mechanics --- LEGO coulisse mechanism.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Time the arm swinging one way, then time it swinging back. Are the two the same?
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

Find the pin and the slot. Describe what the pin does inside the slot as the wheel goes around.

{{< answer key="p1_pin_slot" label="Pin and slot observation" >}}

Was the swing the same speed in both directions? If not, which direction was faster?

{{< answer key="p1_uneven" label="Uneven swing" >}}

## Phase 2 --- Concept: A Pin in a Slot

A wheel turns, carrying a [[CRANK PIN|crank pin]] near its edge --- so far this is exactly the crank from Challenge 6. What is different is what the pin connects to.

Instead of a rod, the pin sits inside a slot cut lengthwise into a long arm. The arm is pivoted at one end, far from the wheel. As the wheel turns, the pin is forced around its circle, and it drags the arm along with it --- but because the pin can also slide up and down inside the slot, the arm does not have to follow the circle. It just swings.

The result is [[OSCILLATION|oscillation]]: the arm rocks back and forth between two limits, over and over.

{{< figrow tall=true >}}
- src: "mech12_coulisse-diagram-01.svg"
  alt: "A coulisse mechanism. A pin travels around a circle at constant speed while riding inside a slot cut in a long arm pivoted below. The arm swings between two extreme positions. The crank spends about two hundred twenty six degrees of each turn driving the arm one way and only about one hundred thirty four degrees driving it back, so one stroke is much faster than the other."
  caption: "The two extreme arm positions split the pin's circle into a long arc and a short one."
{{< /figrow >}}

### Where the Unevenness Comes From

The arm reaches the end of its swing at two particular moments in the wheel's turn. Those two moments cut the pin's circular path into two arcs --- and the arcs are not the same size.

The wheel turns at a steady rate, so the bigger arc takes more time. The arm spends most of the turn going one direction and only a small part coming back. That is [[QUICK RETURN|quick return]].

{{< calc title="Calculation" >}}
- formula: "time one way ÷ time the other way = the two arcs, compared"
- note: "the wheel's speed never changes; only how much of it is spent on each stroke"
{{< /calc >}}

{{< callout title="Why That Is Worth Having" >}}
Some jobs need speed in one direction only. A strike, a stamp, a cut, a slap --- the working stroke wants to be fast and forceful, and the return is dead time you would rather get over with.

Your task in this challenge is exactly that shape. You need to hit a pom hard enough to knock it clear. Coming back afterwards accomplishes nothing.
{{< /callout >}}

Compare this to your crank. In a crank, is there any way to make one stroke faster than the other? Explain why or why not.

{{< answer key="p2_vs_crank" label="Comparison to the crank" >}}

## Phase 3 --- Build the Bare Mechanism

Build the wheel, the pin, and the slotted arm. Do not attach an effector yet. Get the arm swinging freely first.

{{< callout title="Before You Go On" variant="navy" >}}
Turn the wheel by hand through five full rotations. The pin should slide smoothly along the slot without binding, and the arm should reverse cleanly at both ends.

The most common problem is a slot that is too tight or too short. If the pin jams at the far end of its travel, the slot needs to be longer.
{{< /callout >}}

### Measure the Unevenness

Run the motor and time each stroke with a stopwatch. Because the strokes are short, time ten full cycles and divide, rather than trying to catch one.

Then find the two reversal points: turn the wheel slowly by hand and mark the pin's position at the exact moments the arm stops and changes direction. Those two marks divide the circle into your two arcs.

Which stroke was faster, and roughly by how much?

{{< answer key="p3_which_faster" label="Which stroke faster" >}}

Where did you place the pivot relative to the wheel? What do you think would happen to the unevenness if you moved it closer?

{{< answer key="p3_pivot_predict" label="Pivot prediction" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, modify and attach it in such a fashion that it would be able to "slap" the top pom off of a stack of poms.
{{< /callout >}}

### Mental Picture

Think of flicking the top card off a deck. One quick strike, the card is gone, and the rest of the deck has not moved at all.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The overall device must be stationary. Only the coulisse mechanism and effector arm may move.
2.  The arm must be between ¾″ and 2″ tall.
3.  The base of the arm must sit between 1¼″ and 1¾″ off the ground.
4.  Only the top pom may come off. The poms underneath must stay where they are.
5.  The device must succeed on more than 90% of attempts, counted over at least 10 tries.
6.  Kit parts only.

{{< callout title="Those Two Height Numbers Are the Whole Problem" >}}
Constraints 2 and 3 look like arbitrary dimensions. They are not. Together they define a window: the arm has to pass *above* the bottom layer of poms and still be tall enough to catch the one sitting on top.

Too low and you plough through the base of the stack. Too high and you swing over everything and hit nothing. Get the window right and constraint 4 takes care of itself.
{{< /callout >}}

### Visual Representation

{{< figrow tall=true >}}
- src: "mech12_coulisse-diagram-02.svg"
  alt: "Side view. A stationary base at the left carries an effector arm that extends to the right at a set height. Two poms rest on the ground with a third balanced on top of them. The arm passes above the bottom two poms and strikes only the top one, knocking it clear."
  caption: "Side view. The arm's height window is what lets it clear the bottom poms and still reach the top one."
{{< /figrow >}}

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
      text: "Height of the top of your bottom poms"
    -
      key: "p4_bottom_top"
      aria: "Bottom pom top height"
    -
      key: "p4_bottom_top_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Height of the center of your top pom"
    -
      key: "p4_top_center"
      aria: "Top pom center height"
    -
      key: "p4_top_center_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Height you will set the arm base to"
    -
      key: "p4_arm_base"
      aria: "Planned arm base height"
    -
      key: "p4_arm_base_unit"
      aria: "Unit"
      value: "in"
{{< /gridtable >}}

### Your Plan --- Before You Build

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your device fail first by missing the top pom, by knocking over the bottom ones, or by being too gentle to move anything?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

Rebuild the stack the same way every time. If the stack is different on each run, you are testing your stacking rather than your mechanism.

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
      text: "Height of your arm"
    -
      key: "p5_arm_height"
      aria: "Arm height"
    -
      key: "p5_arm_height_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Height of the arm's base off the ground"
    -
      key: "p5_arm_base"
      aria: "Arm base height"
    -
      key: "p5_arm_base_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Time for 10 full cycles"
    -
      key: "p5_ten_cycles"
      aria: "Ten cycle time"
    -
      key: "p5_ten_cycles_unit"
      aria: "Unit"
      value: "seconds"
  -
    -
      text: "Fraction of each cycle spent on the strike"
    -
      key: "p5_strike_fraction"
      aria: "Strike fraction"
    -
      key: "p5_strike_fraction_unit"
      aria: "Unit"
      value: "%"
  -
    -
      text: "Distance the top pom traveled"
    -
      key: "p5_pom_distance"
      aria: "Pom distance"
    -
      key: "p5_pom_distance_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Runs attempted"
    -
      key: "p5_runs"
      aria: "Runs attempted"
    -
      key: "p5_runs_unit"
      aria: "Unit"
      value: "runs"
  -
    -
      text: "Runs where only the top pom moved"
    -
      key: "p5_successes"
      aria: "Successes"
    -
      key: "p5_successes_unit"
      aria: "Unit"
      value: "runs"
{{< /gridtable >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Top pom off?"
- head: "Bottom poms still in place?"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_topoff"
      aria: "Trial 1 top pom off"
    - key: "trial1_bottomok"
      aria: "Trial 1 bottom poms in place"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_topoff"
      aria: "Trial 2 top pom off"
    - key: "trial2_bottomok"
      aria: "Trial 2 bottom poms in place"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_topoff"
      aria: "Trial 3 top pom off"
    - key: "trial3_bottomok"
      aria: "Trial 3 bottom poms in place"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_topoff"
      aria: "Trial 4 top pom off"
    - key: "trial4_bottomok"
      aria: "Trial 4 bottom poms in place"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_topoff"
      aria: "Trial 5 top pom off"
    - key: "trial5_bottomok"
      aria: "Trial 5 bottom poms in place"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_topoff"
      aria: "Trial 6 top pom off"
    - key: "trial6_bottomok"
      aria: "Trial 6 bottom poms in place"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_topoff"
      aria: "Trial 7 top pom off"
    - key: "trial7_bottomok"
      aria: "Trial 7 bottom poms in place"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_topoff"
      aria: "Trial 8 top pom off"
    - key: "trial8_bottomok"
      aria: "Trial 8 bottom poms in place"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_topoff"
      aria: "Trial 9 top pom off"
    - key: "trial9_bottomok"
      aria: "Trial 9 bottom poms in place"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_topoff"
      aria: "Trial 10 top pom off"
    - key: "trial10_bottomok"
      aria: "Trial 10 bottom poms in place"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_stationary"
  label: "The base did not shift, tip, or need a hand on it while running."
- key: "p5_check_armheight"
  label: "The arm measures between ¾″ and 2″ tall."
- key: "p5_check_basegap"
  label: "The arm's base sits between 1¼″ and 1¾″ off the ground."
- key: "p5_check_toponly"
  label: "Only the top pom came off. The poms underneath stayed put."
- key: "p5_check_rate"
  label: "Worked on more than 90% of attempts, counted over at least 10 tries."
- key: "p5_check_materials"
  label: "Kit parts only."
{{< /checklist >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

Did the fast stroke or the slow stroke do the work? What would have happened if the mechanism ran the other way round?

{{< answer key="p5_which_stroke" label="Which stroke worked" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Matches are timed. Any part of a cycle that does not accomplish anything is time you are giving away.
{{< /callout >}}

A mechanism that works fast and resets slowly is one answer. A mechanism that works slowly and resets fast is the opposite, and it is just as easy to build --- you only have to move the pivot to the other side. Which one you want depends entirely on which stroke does the job.

Name a Botball task where the working stroke should be fast and the reset can be slow. Then name one where it is the other way round.

{{< answer key="p6_both_ways" label="Both directions" >}}

Your task was to remove one object without disturbing others. Name a Botball situation where that precision matters more than speed or force.

{{< answer key="p6_precision" label="Precision application" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain how a wheel turning at a constant speed can drive an arm that moves faster one way than the other.

{{< answer key="p7_q1_uneven" label="Reflection 1" >}}

2\. The slot is what makes this mechanism different from a crank. Explain what the slot lets the pin do that a solid rod would not.

{{< answer key="p7_q2_slot" label="Reflection 2" >}}

3\. Two constraints set the arm's height. Explain in your own words what those numbers were actually protecting against.

{{< answer key="p7_q3_heights" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "A cycle does not have to be even. This means that when only one direction of a motion does useful work, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Measure the Ratio

- Mark the pin's position at both moments the arm reverses direction.
- Estimate the two arcs in degrees, and work out the ratio between them.
- Now time the two strokes with a stopwatch. Do the two methods agree?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Move the Pivot

- Move the arm's pivot closer to the wheel's center, then farther away.
- Measure the quick-return ratio at three different pivot distances.
- Which direction makes the mechanism more uneven? Write the relationship as a rule.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Taller Stack

- Build a stack three poms tall and take off only the top one.
- What had to change? Could the same arm do both heights?
- Design a version that handles either stack without adjustment. Is it possible?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Crank Versus Coulisse

- Build a plain crank-driven arm that strikes at the same height.
- Run both at the same motor power, 10 attempts each.
- Which knocks the pom cleaner, and which disturbs the stack more? Explain the result using the speed of the strike.

{{< answer key="ext_d" label="Extension D" >}}
