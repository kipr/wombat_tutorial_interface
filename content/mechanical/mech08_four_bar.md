---
title: "Mechanical Design · Challenge 8 — The Four-Bar Linkage"
short_title: "Challenge 8"
description: "Four links, one of them invisible, and an arithmetic test that decides whether the motor will spin or jam."
mission_id: "mech08_four_bar"
mission_title: "Mechanical Design · Challenge 8 — The Four-Bar Linkage"
eyebrow: "Mechanical Design · Challenge 8"
heading: "The Four-Bar Linkage"
subheading: "Student Challenge · Reach Out, Grab, Pull Back"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 8 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How can a few straight bars produce a motion that is not a circle and not a line?"
  -
    term: "Big Idea"
    definition: "The lengths you choose for the bars decide what the mechanism can do --- including whether it can move at all."
  -
    term: "Mechanism"
    definition: "[[FOUR-BAR LINKAGE|Four-bar linkage]]"
  -
    term: "Design Concepts"
    definition: "[[LINK|Links]] · [[GROUND LINK|Ground link]] · [[COUPLER|Coupler]] · [[ROCKER|Rocker]] · [[PARALLELOGRAM LINKAGE|Parallelogram linkage]]"
  -
    term: "Materials"
    definition: "Kit parts, plus rubber bands on the grabber"
  -
    term: "What You Need"
    definition: "LEGO kit · one motor · Wombat controller · poms · rubber bands · ruler"
  -
    term: "Prerequisites"
    definition: "Challenges 6 and 7 --- the crank and the cam"
weight: 9
hub_unit: 4
hub_title: "The Four-Bar Linkage"
hub_label: "Challenge 8"
---

## Overview

Your crank pushed in a straight line. Your cam lifted straight up. Both are useful, and both are limited --- the motion goes one way and comes back the same way.

A four-bar linkage does something neither can. The end of it can swing out, dip down, come back along a different path than it went, and return to where it started. It is made of nothing but straight bars and pins, and the shape of the motion comes entirely from how long you make each bar.

{{< callout title="Core Insight" >}}
In a linkage, the lengths are the design. Change one bar by a small amount and the whole path the mechanism traces changes with it.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Name the four [[LINK|links]] in a four-bar linkage, including the one that does not move.
- Test four link lengths with arithmetic to find out whether a motor can drive them all the way around.
- Explain why a linkage might rock but refuse to rotate.
- Build a linkage that reaches out, grabs an object, and draws it back.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="84Nswqm7D2A" title="LEGO four-bar linkage" >}}

Simple mechanics 1 --- LEGO four-bar linkage.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Pick one point at the end of the mechanism and follow only that point through a whole cycle. What shape does it trace?
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

Count the bars you can see moving. Write down your number --- you will check it in Phase 2.

{{< answer key="p1_bar_count" label="Bar count" >}}

Does the end of the mechanism travel back along the same path it went out on, or a different one?

{{< answer key="p1_path" label="Path observation" >}}

## Phase 2 --- Concept: The Four Links

You almost certainly counted three moving bars. The name says four. Both are correct.

{{< callout title="The Fourth Bar Is the One That Does Not Move" >}}
Two of the pivots are anchored to your base and never go anywhere. The distance between those two anchored pivots is itself a link --- it is just built into the frame instead of being a separate piece.

That is the [[GROUND LINK|ground link]]. It counts, because if you moved those two anchor points closer together or farther apart, the whole mechanism would behave differently. Its length is part of the design.
{{< /callout >}}

{{< figrow tall=true >}}
- src: "mech08_four_bar-diagram-01.svg"
  alt: "A four-bar linkage. Two pivots are anchored to the base and the dashed line between them is the ground link. A short crank turns at the left anchor, a coupler spans across, and a rocker swings at the right anchor."
  caption: "Four links, four pivots. The two open circles are bolted to your base and never move."
{{< /figrow >}}

### The Names You Will Use

|  |  |
| --- | --- |
| Ground link | The fixed distance between the two anchored pivots. Does not move. |
| Crank | The input link, driven by your motor. If the lengths are right, it goes all the way around. |
| Coupler | The link joining the crank to the rocker. It is attached to nothing fixed, which is why its motion is the most interesting. |
| Rocker | The output link. Usually it swings back and forth rather than spinning. |

{{< callout title="A Special Case Worth Knowing" variant="navy" >}}
If the crank and rocker are the same length, and the coupler and ground link are the same length, you get a [[PARALLELOGRAM LINKAGE|parallelogram linkage]]. In that arrangement the coupler stays parallel to the ground link no matter where the mechanism is in its swing.

That is one of the ways to solve the tilted-jaw problem from Challenge 4 --- a gripper mounted on a parallelogram stays flat all the way through its travel.
{{< /callout >}}

## Phase 3 --- Build It, Then Test the Lengths

Build the linkage out of LEGO. Do not attach a grabber yet. Get the four bars pinned together and anchored to a base first.

{{< callout title="The Problem You Are About to Have" >}}
Attach a motor to the crank and one of two things happens. Either the crank spins all the way around, over and over --- or it swings partway, hits a position it cannot get past, and stalls.

Which one you get is not luck, and it is not the motor. It is decided entirely by the four lengths, and you can check it with arithmetic before you ever turn the power on.
{{< /callout >}}

### The Length Test

Measure all four links. Count holes, count studs, use inches --- any unit works as long as you use the same one for all four. Then sort them:

{{< calc title="Calculation" >}}
- formula: "shortest + longest ≤ the other two added together"
- note: "if this is true, one link can rotate all the way around"
{{< /calc >}}

### Worked Example

Suppose your four links measure 2, 4, 5, and 6 holes.

- Shortest is 2. Longest is 6. Added: **8**
- The other two are 4 and 5. Added: **9**
- 8 is less than 9, so the test passes. Something can rotate fully.

Now suppose they measure 2, 3, 4, and 8 instead.

- Shortest 2 plus longest 8 is **10**
- The other two, 3 and 4, add to **7**
- 10 is greater than 7, so the test fails. Nothing will rotate fully. Every link will only rock back and forth, and a motor attached to the crank will jam.

{{< callout title="One More Rule" variant="navy" >}}
Passing the test means *a* link can rotate. To make sure it is the one your motor is driving, put the motor on the **shortest** link.
{{< /callout >}}

### Now Test Yours

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
      text: "Crank length"
    -
      key: "p3_len_crank"
      aria: "Crank length"
    -
      key: "p3_len_crank_unit"
      aria: "Unit"
      value: "holes"
  -
    -
      text: "Coupler length"
    -
      key: "p3_len_coupler"
      aria: "Coupler length"
    -
      key: "p3_len_coupler_unit"
      aria: "Unit"
      value: "holes"
  -
    -
      text: "Rocker length"
    -
      key: "p3_len_rocker"
      aria: "Rocker length"
    -
      key: "p3_len_rocker_unit"
      aria: "Unit"
      value: "holes"
  -
    -
      text: "Ground link length (between your anchored pivots)"
    -
      key: "p3_len_ground"
      aria: "Ground link length"
    -
      key: "p3_len_ground_unit"
      aria: "Unit"
      value: "holes"
  -
    -
      text: "Shortest + longest"
    -
      key: "p3_sum_sl"
      aria: "Shortest plus longest"
    -
      key: "p3_sum_sl_unit"
      aria: "Unit"
      value: "holes"
  -
    -
      text: "The other two added"
    -
      key: "p3_sum_pq"
      aria: "Other two added"
    -
      key: "p3_sum_pq_unit"
      aria: "Unit"
      value: "holes"
  -
    -
      text: "Does it pass the test?"
    -
      key: "p3_passes"
      aria: "Passes test"
    -
      key: "p3_passes_unit"
      aria: "Unit"
      value: "yes / no"
{{< /gridtable >}}

Turn the crank by hand through five full rotations. Did the arithmetic predict what actually happened?

{{< answer key="p3_prediction_check" label="Prediction check" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, modify and attach it in such a fashion that it will be able to grab and pull back an object --- preferably a pom.
{{< /callout >}}

### Mental Picture

Think of the children's game Hungry Hungry Hippo. The head lunges forward, sweeps something in, and drags it back --- all from one push on a lever.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The overall device must be stationary. Only the linkage mechanism can move.
2.  The system must be able to bring a pom back from 3 inches away.
3.  The grabber must be at least 2 inches wide, or have a cup on the end.
4.  The grabber may use rubber bands.

{{< figrow tall=true >}}
- src: "mech08_four_bar-diagram-02.svg"
  alt: "Top view. A stationary base at the left anchors two pivots. Links reach out to the right carrying a grabber, which extends to a pom three inches away and then draws it back toward the base."
  caption: "Grey dashed shows the linkage retracted; solid shows it extended out to the pom."
{{< /figrow >}}

### Your Plan --- Before You Build

How will the grabber hold onto the pom on the way back? Rubber bands, a cup, or something else?

{{< answer key="p4_grab_plan" label="Grab plan" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your device fail first by not reaching far enough, by losing the pom on the way back, or by jamming?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

Run it repeatedly, change one thing at a time, and write down what changed. If you adjust a link length, re-run the length test --- a change that fixes your reach can quietly break the rotation.

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
      text: "Farthest the grabber reached from the base"
    -
      key: "p5_reach"
      aria: "Reach"
    -
      key: "p5_reach_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "How far it brought the pom back"
    -
      key: "p5_pullback"
      aria: "Pull back distance"
    -
      key: "p5_pullback_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Width of your grabber"
    -
      key: "p5_grabber_width"
      aria: "Grabber width"
    -
      key: "p5_grabber_width_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Rubber bands used"
    -
      key: "p5_bands"
      aria: "Rubber bands"
    -
      key: "p5_bands_unit"
      aria: "Unit"
      value: "bands"
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
- head: "Reached it?"
- head: "Kept the pom?"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_reached"
      aria: "Trial 1 reached"
    - key: "trial1_kept"
      aria: "Trial 1 kept the pom"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_reached"
      aria: "Trial 2 reached"
    - key: "trial2_kept"
      aria: "Trial 2 kept the pom"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_reached"
      aria: "Trial 3 reached"
    - key: "trial3_kept"
      aria: "Trial 3 kept the pom"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_reached"
      aria: "Trial 4 reached"
    - key: "trial4_kept"
      aria: "Trial 4 kept the pom"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_reached"
      aria: "Trial 5 reached"
    - key: "trial5_kept"
      aria: "Trial 5 kept the pom"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_reached"
      aria: "Trial 6 reached"
    - key: "trial6_kept"
      aria: "Trial 6 kept the pom"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_reached"
      aria: "Trial 7 reached"
    - key: "trial7_kept"
      aria: "Trial 7 kept the pom"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_reached"
      aria: "Trial 8 reached"
    - key: "trial8_kept"
      aria: "Trial 8 kept the pom"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_reached"
      aria: "Trial 9 reached"
    - key: "trial9_kept"
      aria: "Trial 9 kept the pom"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_reached"
      aria: "Trial 10 reached"
    - key: "trial10_kept"
      aria: "Trial 10 kept the pom"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_stationary"
  label: "The base did not shift, tip, or need a hand on it while running."
- key: "p5_check_onlylinkage"
  label: "Only the linkage mechanism moved. Nothing else on the device did."
- key: "p5_check_three"
  label: "Brought a pom back from 3 inches away."
- key: "p5_check_grabber"
  label: "The grabber is at least 2″ wide, or has a cup on the end."
- key: "p5_check_rotation"
  label: "The crank rotated fully under motor power without jamming."
- key: "p5_check_repeat"
  label: "It worked five times in a row without a rebuild."
{{< /checklist >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

Did you change any link length during testing? If so, what else changed as a result that you were not expecting?

{{< answer key="p5_length_change" label="Length change effects" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Reaching out past your own footprint and bringing something home is one of the most common jobs on a game field.
{{< /callout >}}

A linkage does that with one motor and no sensors. It also reaches farther than its own parts are long, because the links extend past each other as they swing --- which means a small mechanism can work on something well outside the robot's body.

Name a Botball task where reaching out and dragging something back beats driving over to it. What does staying put buy you?

{{< answer key="p6_botball_reach" label="Botball reach application" >}}

You have now built three mechanisms: crank, cam, and linkage. If you had to keep only one for a competition robot, which would it be and why?

{{< answer key="p6_pick_one" label="Pick one mechanism" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain to someone who has never seen one why a mechanism with three moving bars is called a four-bar linkage.

{{< answer key="p7_q1_fourth_bar" label="Reflection 1" >}}

2\. State the length test in your own words, and give the four numbers from your own build.

{{< answer key="p7_q2_length_test" label="Reflection 2" >}}

3\. A teammate's linkage stalls halfway through every turn. They want to swap in a stronger motor. What would you tell them to check first, and why?

{{< answer key="p7_q3_diagnose" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "In a linkage, the lengths are the design. This means that before I change any bar, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Break It on Purpose

- Change one link length so the test fails, then predict exactly what will happen before you run the motor.
- Run it. Where does it stall --- and is that where you expected?
- What is the smallest change that takes it from passing to failing?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Reach Farther

- Get the grabber out to 5 inches instead of 3, without making the base any bigger.
- Which link did you lengthen, and did the mechanism still pass the length test afterward?
- What did the extra reach cost you elsewhere?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Build a Parallelogram

- Rebuild so the crank and rocker are equal, and the coupler and ground link are equal.
- Watch the coupler through a full swing. What stays true about it the whole way?
- Go back to Challenge 4. Would this have solved the tilted-jaw problem? Explain how.

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Trace the Path

- Tape a marker to the middle of the coupler and let it draw on paper as the mechanism runs a full cycle.
- Is the shape a circle? A line? Something else?
- Move the marker to a different spot on the coupler and run it again. What changed?

{{< answer key="ext_d" label="Extension D" >}}
