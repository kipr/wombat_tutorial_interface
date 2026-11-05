---
title: "Mechanical Design · Challenge 11 — The Rack and Pinion"
short_title: "Challenge 11"
description: "A jaw that slides cannot tilt. Prove the jaws are parallel by measuring, not by looking."
mission_id: "mech11_rack_pinion"
mission_title: "Mechanical Design · Challenge 11 — The Rack and Pinion"
eyebrow: "Mechanical Design · Challenge 11"
heading: "The Rack and Pinion"
subheading: "Student Challenge · Jaws That Never Tilt"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 11 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How do we turn rotation into travel in a straight line, for as far as we want?"
  -
    term: "Big Idea"
    definition: "A [[RACK|rack]] is a gear stretched flat. Meshing it with a round gear converts turning into sliding."
  -
    term: "Mechanism"
    definition: "Rack and pinion"
  -
    term: "Design Concepts"
    definition: "[[PINION|Pinion]] · [[TRANSLATION|Translation]] · [[LINEAR MOTION|Linear motion]] · [[MESH|Mesh]]"
  -
    term: "Materials"
    definition: "Kit parts only"
  -
    term: "What You Need"
    definition: "LEGO kit · rack pieces · gears · one motor · Wombat controller · a block about 4″ × 4″ · ruler"
  -
    term: "Prerequisites"
    definition: "Challenge 4 for the jaw-tilt problem, Challenge 8 for one solution to it"
weight: 12
hub_unit: 5
hub_title: "The Rack and Pinion"
hub_label: "Challenge 11"
---

## Overview

You have met this problem before. In Challenge 4 you had to grip a 4-inch cube with jaws that stayed flat against its faces, and pivoting arms fought you the whole way, because an arm that swings puts its jaw at an angle.

Challenge 8 gave you one way out --- a parallelogram linkage, which keeps the jaw level while still swinging. This challenge gives you the other way, and it is more direct: build jaws that do not swing at all.

{{< callout title="Core Insight" >}}
A jaw that slides in a straight line cannot tilt. There is no rotation anywhere in its motion, so there is nothing to correct for.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain what a rack is and how it meshes with a round gear.
- Predict how far a rack travels for one turn of the [[PINION|pinion]].
- Use one pinion to drive two racks in opposite directions.
- Build a grabber whose jaws stay parallel through the whole motion, and prove it by measuring.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="8bZ0E8Uivyw" title="LEGO rack and gear drive" >}}

Simple mechanics --- LEGO rack and gear drive.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Compare this to the crank in Challenge 6. Both turn rotation into straight-line motion. What is different about how far each one can travel?
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

Your crank pushed out and pulled back the same distance every time, forever. Could this mechanism go farther if you wanted it to? What would you have to change?

{{< answer key="p1_vs_crank" label="Comparison to the crank" >}}

## Phase 2 --- Concept: The Rack and the Pinion

A [[RACK|rack]] is a straight bar with gear teeth along one edge. You can think of it as a gear that has been unrolled --- take a gear with a huge radius and only look at a small piece of its rim, and it is a straight toothed bar.

The round gear that drives it is called the [[PINION|pinion]]. Turn the pinion, and its teeth walk along the rack's teeth, dragging the rack sideways.

{{< figrow tall=true >}}
- src: "mech11_rack_pinion-diagram-01.svg"
  alt: "A round pinion gear meshing with a straight toothed rack below it. As the pinion turns, its teeth walk along the rack teeth and push the rack sideways."
  caption: "Teeth are teeth. The only difference is that one set is arranged in a circle and the other in a line."
{{< /figrow >}}

### You Can Predict the Travel

Every tooth of the pinion that passes the rack drags the rack along by exactly one tooth. So a pinion with 24 teeth, turned once all the way around, moves the rack by 24 rack teeth.

{{< calc title="Calculation" >}}
- formula: "travel per turn = the pinion's tooth count, measured in rack teeth"
- note: "count the teeth, then count that many along your rack to see how far it will go"
{{< /calc >}}

{{< callout title="How This Differs From the Crank" variant="navy" >}}
Your crank in Challenge 6 also turned rotation into straight-line motion, but its stroke was fixed --- twice the pin offset, out and back, forever.

A rack and pinion has no fixed stroke. It keeps going as long as the rack keeps going. Want twice the travel? Use a longer rack. The pinion neither knows nor cares.
{{< /callout >}}

### Why the Jaws Stay Parallel

A part on a rack moves in pure [[TRANSLATION|translation]] --- every point on it travels the same distance in the same direction. Nothing rotates. A jaw mounted on a rack is pointed exactly the same way at the end of its travel as at the start, without you doing anything to make that happen.

Go back to your Challenge 4 notes. What exactly went wrong with the pivoting jaws on the cube, and why does translation fix it?

{{< answer key="p2_c4_lookback" label="Challenge 4 look back" >}}

## Phase 3 --- Build It: Two Racks, One Pinion

One rack gives you one moving jaw. For this challenge both jaws must move, and they must move toward each other by the same amount at the same time.

Put the pinion between two racks, one on each side. The pinion's teeth push one rack one way and the other rack the opposite way --- the same trick you used in Challenge 10, where one worm drove two gears in opposite directions.

{{< figrow tall=true >}}
- src: "mech11_rack_pinion-diagram-02.svg"
  alt: "Top view. A stationary base at the left carries a pinion. A rack runs vertically on each side of the pinion. One rack rises while the other falls, and each carries a horizontal jaw. The two jaws close on a four inch square block, staying parallel throughout."
  caption: "One pinion between two racks. Grey shows the jaws open; red dashed shows them closed on the block."
{{< /figrow >}}

{{< callout title="Before You Go On" variant="navy" >}}
Turn the pinion by hand. Both racks should slide, in opposite directions, by the same amount. If one slides and the other does not, that rack is not properly meshed. If a rack lifts away from the pinion under load, it needs a guide holding it against the teeth.

Racks skip more easily than gears do, because only two or three teeth are in contact at a time. Support the rack along its whole length if you can.
{{< /callout >}}

Turn the pinion one full revolution and measure how far one rack moved. Does it match the pinion's tooth count?

{{< answer key="p3_travel_check" label="Travel check" >}}

Did both racks move by the same amount? How did you check?

{{< answer key="p3_symmetry" label="Symmetry check" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, modify and attach it in such a fashion that it would be able to precisely grab an object that is about 4″ wide and 4″ tall. The grabber arms must remain parallel at all points in the motion.
{{< /callout >}}

### Mental Picture

Think of elevator doors. Two panels, one drive, sliding apart and back together --- and they stay perfectly parallel the whole way, because neither one ever turns.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The overall device must be stationary. Only the rack and gear system and arms may move.
2.  Both grabber arms must move, and they must stay parallel to each other at every point in the motion.
3.  At rest, the gap between the arms must be *smaller* than the block. The mechanism has to open before it can go around the block, then close on it.
4.  The device must grab a block about 4″ wide and 4″ tall.
5.  The device must grab successfully on more than 90% of attempts, counted over at least 10 tries.
6.  Kit parts only.

{{< callout title="Read Constraint 3 Again" >}}
It is easy to miss what it is asking. If the jaws started wider than the block, you could just slide the whole thing over it and squeeze --- the mechanism would only ever need to close.

Starting narrower forces your rack to travel both ways from its resting position: open first, then close. Make sure you have rack length in both directions before you build the jaws.
{{< /callout >}}

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
      text: "Gap between jaws at rest"
    -
      key: "p4_gap_rest"
      aria: "Gap at rest"
    -
      key: "p4_gap_rest_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Gap you need when fully open"
    -
      key: "p4_gap_open"
      aria: "Gap open"
    -
      key: "p4_gap_open_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "How far each rack must travel to get from rest to fully open"
    -
      key: "p4_rack_travel"
      aria: "Rack travel needed"
    -
      key: "p4_rack_travel_unit"
      aria: "Unit"
      value: "in"
{{< /gridtable >}}

### Your Plan --- Before You Build

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your device fail first by the racks skipping teeth, by the jaws going out of parallel, or by running out of rack?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="How to Prove the Jaws Are Parallel" >}}
Do not judge it by eye. Close the jaws on the block and measure the gap at the **front** of the jaws and again at the **back**. If the two measurements are the same, the jaws are parallel. If they differ, one end is pinching and the other is loose.

Then do it again with the jaws fully open. Parallel at one position is not the same as parallel at every position, and the requirement says every point in the motion.
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
      text: "Teeth on your pinion"
    -
      key: "p5_pinion_teeth"
      aria: "Pinion teeth"
    -
      key: "p5_pinion_teeth_unit"
      aria: "Unit"
      value: "teeth"
  -
    -
      text: "Rack travel for one full pinion turn"
    -
      key: "p5_travel"
      aria: "Travel per turn"
    -
      key: "p5_travel_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Gap between jaws at rest"
    -
      key: "p5_gap_rest"
      aria: "Gap at rest"
    -
      key: "p5_gap_rest_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Gap between jaws fully open"
    -
      key: "p5_gap_open"
      aria: "Gap fully open"
    -
      key: "p5_gap_open_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Gap at the front of the jaws, closed on the block"
    -
      key: "p5_gap_front"
      aria: "Gap at front"
    -
      key: "p5_gap_front_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Gap at the back of the jaws, closed on the block"
    -
      key: "p5_gap_back"
      aria: "Gap at back"
    -
      key: "p5_gap_back_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Difference between those two gaps"
    -
      key: "p5_gap_diff"
      aria: "Gap difference"
    -
      key: "p5_gap_diff_unit"
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
      text: "Runs that fully worked"
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
- head: "Opened enough?"
- head: "Gripped it?"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_opened"
      aria: "Trial 1 opened enough"
    - key: "trial1_gripped"
      aria: "Trial 1 gripped"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_opened"
      aria: "Trial 2 opened enough"
    - key: "trial2_gripped"
      aria: "Trial 2 gripped"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_opened"
      aria: "Trial 3 opened enough"
    - key: "trial3_gripped"
      aria: "Trial 3 gripped"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_opened"
      aria: "Trial 4 opened enough"
    - key: "trial4_gripped"
      aria: "Trial 4 gripped"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_opened"
      aria: "Trial 5 opened enough"
    - key: "trial5_gripped"
      aria: "Trial 5 gripped"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_opened"
      aria: "Trial 6 opened enough"
    - key: "trial6_gripped"
      aria: "Trial 6 gripped"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_opened"
      aria: "Trial 7 opened enough"
    - key: "trial7_gripped"
      aria: "Trial 7 gripped"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_opened"
      aria: "Trial 8 opened enough"
    - key: "trial8_gripped"
      aria: "Trial 8 gripped"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_opened"
      aria: "Trial 9 opened enough"
    - key: "trial9_gripped"
      aria: "Trial 9 gripped"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_opened"
      aria: "Trial 10 opened enough"
    - key: "trial10_gripped"
      aria: "Trial 10 gripped"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_stationary"
  label: "The base did not shift, tip, or need a hand on it while running."
- key: "p5_check_botharms"
  label: "Both arms move, by the same amount, in opposite directions."
- key: "p5_check_parallel"
  label: "Front and back gaps measured the same, both closed and fully open."
- key: "p5_check_rest"
  label: "At rest, the gap is smaller than the block."
- key: "p5_check_grab"
  label: "Opened around the 4″ block and closed on it."
- key: "p5_check_rate"
  label: "Worked on more than 90% of attempts, counted over at least 10 tries."
- key: "p5_check_materials"
  label: "Kit parts only."
{{< /checklist >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

If a rack skipped teeth at any point, what was pushing it away from the pinion? What did you add to stop it?

{{< answer key="p5_skipping" label="Tooth skipping" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
You have now solved the same gripping problem three separate ways. That is not repetition --- that is a toolkit.
{{< /callout >}}

Challenge 4 gave you pivoting jaws, which are simple and compact but tilt. Challenge 8 gave you a parallelogram, which stays level while swinging. This gives you pure sliding, which never rotates at all. Each is right for a different situation, and knowing all three means you pick rather than guess.

Name a Botball task where sliding jaws beat pivoting ones, and one where the pivoting version would be the better choice. What decides it?

{{< answer key="p6_which_when" label="Which mechanism when" >}}

A rack and pinion can travel as far as the rack is long. Name a Botball use for straight-line motion that has nothing to do with gripping.

{{< answer key="p6_other_uses" label="Other uses" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain what a rack is by describing its relationship to an ordinary round gear.

{{< answer key="p7_q1_rack" label="Reflection 1" >}}

2\. Explain why jaws mounted on racks stay parallel without anyone having to make them do so.

{{< answer key="p7_q2_parallel" label="Reflection 2" >}}

3\. You have solved the parallel-jaw problem three ways now --- Challenge 4, Challenge 8, and this one. Rank them for a competition robot and defend your first choice.

{{< answer key="p7_q3_rank" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "A part that slides cannot tilt. This means that when a design keeps going out of alignment, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Prove the Travel Rule

- Try three pinions with different tooth counts on the same rack.
- Predict the travel per turn for each before you test it, then measure all three.
- Does the rule hold every time? If a measurement is off, find out why before blaming the rule.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- One Grabber, Any Width

- Without rebuilding, grab a 2″ object and then a 6″ object.
- What limits you at each end --- rack length, jaw length, or something else?
- What is the full range of widths your grabber can handle?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Three Ways, One Cube

- Set up your Challenge 4 pincer, your Challenge 8 linkage, and this grabber side by side.
- Grip the same cube with each and measure the contact length on the face.
- Time each one. Which is most accurate, and which is fastest? Are they the same one?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Break the Symmetry

- Remove one rack so only a single jaw moves against a fixed one.
- Grip the block again. Are the jaws still parallel? Is anything worse?
- What did the second rack actually buy you? Answer in terms of where the block ends up.

{{< answer key="ext_d" label="Extension D" >}}
