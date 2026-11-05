---
title: "Mechanical Design · Challenge 7 — The Cam"
short_title: "Challenge 7"
description: "The profile decides the motion. Lift, the pause between, and the return force that keeps the follower down."
mission_id: "mech07_cam"
mission_title: "Mechanical Design · Challenge 7 — The Cam"
eyebrow: "Mechanical Design · Challenge 7"
heading: "The Cam"
subheading: "Student Challenge · One Push per Turn"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 7 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How do we make a motor that never stops turning produce a motion that only happens sometimes?"
  -
    term: "Big Idea"
    definition: "The shape of a [[CAM|cam]] decides when its [[FOLLOWER|follower]] moves and when it sits still."
  -
    term: "Mechanism"
    definition: "Cam and follower"
  -
    term: "Design Concepts"
    definition: "[[CAM PROFILE|Cam profile]] · [[INTERMITTENT MOTION|Intermittent motion]] · [[RETURN FORCE|Return force]]"
  -
    term: "Materials"
    definition: "Kit parts, plus up to 5 rubber bands on the whole apparatus"
  -
    term: "What You Need"
    definition: "LEGO kit · one motor · Wombat controller · rubber bands · an object to push · protractor · ruler"
  -
    term: "Prerequisite"
    definition: "Challenge 6 --- the crank. This one does the opposite job."
weight: 8
hub_unit: 4
hub_title: "The Cam"
hub_label: "Challenge 7"
---

## Overview

Your crank pushed and pulled, forward and back, over and over, evenly. Every part of every turn did something.

Sometimes that is wrong. Sometimes you want a motor to run continuously but the machine to act only once in a while --- a nudge, then nothing, then another nudge. That is what a cam does, and the shape of the cam decides exactly when the nudge happens.

{{< callout title="Core Insight" >}}
A crank gives you the same motion throughout every turn. A cam lets you choose which part of the turn does the work --- and the rest of the turn does nothing at all.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain the difference between a cam and a crank.
- Shape a [[CAM PROFILE|cam profile]] so its raised section covers a measured portion of the turn.
- Explain why every cam needs a [[RETURN FORCE|return force]].
- Build a mechanism that grabs and pushes an object [[INTERMITTENT MOTION|intermittently]].

{{< callout title="Materials Note" variant="navy" >}}
This challenge permits rubber bands --- up to 5 on the entire apparatus. That is the first time since Challenge 5 that anything beyond kit parts is allowed, and as you will see in Phase 2, it is not a convenience. A cam needs it.
{{< /callout >}}

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="dCDd2iOa2mE" title="LEGO cam mechanism" >}}

Simple mechanics --- LEGO cam mechanism.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Watch one full turn of the wheel. What fraction of that turn does the moving part actually spend moving?
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

The wheel turns at a steady rate the whole time. Does the part it lifts move at a steady rate? Describe what you saw.

{{< answer key="p1_steady" label="Steady rate observation" >}}

Compare it to your crank from Challenge 6. What is different about when the work happens?

{{< answer key="p1_vs_crank" label="Comparison to the crank" >}}

## Phase 2 --- Concept: How a Cam Works

A cam is a wheel that is not perfectly round. The part that rides against it is the [[FOLLOWER|follower]]. As the cam turns, the follower rides along its edge --- so wherever the edge bulges out, the follower gets pushed.

The shape of that edge is the [[CAM PROFILE|cam profile]], and it is the whole design. A round cam does nothing at all. A cam with one bump lifts the follower once per turn. A cam with a bump covering half the wheel lifts it for half of every turn.

{{< figrow tall=true >}}
- src: "mech07_cam-diagram-01.svg"
  alt: "A cam wheel with a raised lobe at the top spanning forty-five degrees of its rotation. A follower rests on the cam edge. While the lobe passes underneath, the follower is pushed up; for the rest of the turn it sits low."
  caption: "Your constraint asks for a lobe covering 45° of the turn, give or take 5°. That is one-eighth of a rotation."
{{< /figrow >}}

### How to Measure the 45°

The angle is measured at the center of the cam, between the two edges of the raised section. Mark your cam like a clock face before you build it: a full turn is 360°, so 45° is one-eighth of the way around. Check it with a protractor rather than judging by eye.

{{< callout title="A Cam Can Only Push" >}}
This is the rule that catches everyone. The cam pushes the follower out --- but when the lobe rotates away, nothing pulls the follower back. The cam has no grip on it.

So every cam mechanism needs a second force to bring the follower home: gravity, a spring, or a rubber band. That is why your constraints mention it. It is not an optional extra. Without it, your mechanism works exactly once.
{{< /callout >}}

Which return force will you use --- gravity or a rubber band? What made you choose it?

{{< answer key="p2_return_choice" label="Return force choice" >}}

## Phase 3 --- Build the Bare Mechanism

Build the cam and its follower out of LEGO. Do not attach anything else yet. Get the cam turning and the follower riding on it cleanly first.

{{< callout title="Before You Go On" variant="navy" >}}
Turn the cam by hand through five full rotations. The follower should rise while the lobe passes, then come all the way back down on its own. If it stays up, your return force is too weak. If it never rises, your lobe is too small or the follower is not resting on the cam.
{{< /callout >}}

### Check Your Angle

Measure the raised section of your cam with a protractor. It must cover 45° of the turn, within 5° either way --- so anywhere from 40° to 50°.

What angle did you measure, and did you have to reshape the cam to get it in range?

{{< answer key="p3_angle_check" label="Angle check" >}}

Does the follower return all the way down on its own, every time, through five turns? If not, what did you change?

{{< answer key="p3_return_check" label="Return check" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, modify and attach it in such a fashion that it will be able to intermittently "grab" and push a device located above the base structure.
{{< /callout >}}

### Mental Picture

Think of a conveyor at a checkout that gives the bag a shove every few seconds. The motor never stops, but the shove only happens now and then.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The overall device must be stationary. Only the cam mechanism can move.
2.  The cam must have a path of motion that is 45° +/− 5.
3.  The cam can use gravity or rubber band power to return to its low position.
4.  The end of the cam arm may use rubber bands to gain grip on the object it is attempting to move. No more than 5 rubber bands on the entire apparatus.

### Visual Representation

{{< figrow tall=true >}}
- src: "mech07_cam-diagram-02.svg"
  alt: "Side view. A stationary base sits at the lower left. A cam-driven arm rises from it to reach an object resting on a horizontal surface above the base. Rubber bands at the tip of the arm give it grip, and the object slides to the right along the surface."
  caption: "Side view. The base never moves. The arm rises once per cam revolution to bump the object along."
{{< /figrow >}}

### Your Plan --- Before You Build

How will the arm get enough grip to move the object rather than slipping off it?

{{< answer key="p4_grip_plan" label="Grip plan" >}}

Count your rubber bands before you start. Where is each one going, and what is it doing?

{{< steps key="p4_band" label="Rubber band" start=1 count=5 >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your device fail first by not gripping, by not returning, or by the base creeping out of position?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

Run it repeatedly, change one thing at a time, and write down what changed. A mechanism that pushes once and then stalls has not met the need --- the word in the need is *intermittently*, which means it has to keep happening.

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
      text: "Angle covered by your cam's raised section"
    -
      key: "p5_lobe_angle"
      aria: "Lobe angle"
    -
      key: "p5_lobe_angle_unit"
      aria: "Unit"
      value: "degrees"
  -
    -
      text: "Rubber bands used, whole apparatus"
    -
      key: "p5_bands"
      aria: "Rubber band count"
    -
      key: "p5_bands_unit"
      aria: "Unit"
      value: "bands"
  -
    -
      text: "How far the object moved in one push"
    -
      key: "p5_push_distance"
      aria: "Push distance"
    -
      key: "p5_push_distance_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Consecutive pushes before anything slipped or stuck"
    -
      key: "p5_cycles"
      aria: "Consecutive cycles"
    -
      key: "p5_cycles_unit"
      aria: "Unit"
      value: "cycles"
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
- head: "Object moved?"
- head: "Arm returned?"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_moved"
      aria: "Trial 1 object moved"
    - key: "trial1_returned"
      aria: "Trial 1 arm returned"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_moved"
      aria: "Trial 2 object moved"
    - key: "trial2_returned"
      aria: "Trial 2 arm returned"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_moved"
      aria: "Trial 3 object moved"
    - key: "trial3_returned"
      aria: "Trial 3 arm returned"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_moved"
      aria: "Trial 4 object moved"
    - key: "trial4_returned"
      aria: "Trial 4 arm returned"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_moved"
      aria: "Trial 5 object moved"
    - key: "trial5_returned"
      aria: "Trial 5 arm returned"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_moved"
      aria: "Trial 6 object moved"
    - key: "trial6_returned"
      aria: "Trial 6 arm returned"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_moved"
      aria: "Trial 7 object moved"
    - key: "trial7_returned"
      aria: "Trial 7 arm returned"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_moved"
      aria: "Trial 8 object moved"
    - key: "trial8_returned"
      aria: "Trial 8 arm returned"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_moved"
      aria: "Trial 9 object moved"
    - key: "trial9_returned"
      aria: "Trial 9 arm returned"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_moved"
      aria: "Trial 10 object moved"
    - key: "trial10_returned"
      aria: "Trial 10 arm returned"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_stationary"
  label: "The base did not shift, tip, or need a hand on it while running."
- key: "p5_check_onlycam"
  label: "Only the cam mechanism moved. Nothing else on the device did."
- key: "p5_check_angle"
  label: "Measured the raised section at 40--50° with a protractor."
- key: "p5_check_return"
  label: "The arm returned to its low position on its own, every cycle."
- key: "p5_check_push"
  label: "The object above the base was gripped and pushed along, repeatedly."
- key: "p5_check_bands"
  label: "5 or fewer rubber bands on the entire apparatus."
{{< /checklist >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

Your motor turned at a constant speed. Did the object move at a constant speed? Explain what you saw in terms of the cam's shape.

{{< answer key="p5_speed_analysis" label="Speed analysis" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Sometimes the useful thing is not doing more. It is doing something at the right moment and nothing the rest of the time.
{{< /callout >}}

A cam gives you timing from shape alone --- no sensor, no code, no second motor. Once the cam is cut right, the mechanism repeats the same action at the same point in every rotation, forever.

Name a Botball task where a robot needs to act once in a while rather than continuously. Would a cam solve it, or would you rather do it in code? Defend your answer.

{{< answer key="p6_botball_timing" label="Botball timing application" >}}

You have now built a crank and a cam. Give one job the crank is better at, and one job the cam is better at.

{{< answer key="p6_crank_vs_cam" label="Crank versus cam" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain in your own words how the shape of a cam controls when its follower moves.

{{< answer key="p7_q1_shape" label="Reflection 1" >}}

2\. Why does a cam need gravity or a rubber band to work more than once? Answer as though explaining it to someone who has never seen one.

{{< answer key="p7_q2_return" label="Reflection 2" >}}

3\. Your cam's raised section covers 45° out of 360°. What fraction of each turn is that, and what does the mechanism do for the rest of the turn?

{{< answer key="p7_q3_fraction" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "The shape of a part can control timing. This means that when I need something to happen at a particular moment, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Change the Angle

- Rebuild the cam with a raised section covering roughly 90° instead of 45°.
- What changes about how the object moves? Does it travel farther, or just differently?
- Which angle would you choose for a task that needs a long steady shove, and which for a quick tap?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Gravity Only

- Remove every rubber band used for the return and make gravity do the whole job.
- What did you have to change about the arm to make that work?
- Which return is more reliable across 20 cycles? Count and find out.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Two Bumps

- Add a second raised section on the opposite side of the cam.
- Predict what the follower will do before you run it, then run it.
- Time how long it takes to move the object 12 inches with one bump versus two. Is it twice as fast? If not, why not?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Grip Test

- Run 10 cycles with rubber bands on the arm tip, then 10 with a bare tip.
- Record how far the object traveled in each set.
- What exactly are the rubber bands doing at the contact point? Explain it in terms of friction.

{{< answer key="ext_d" label="Extension D" >}}
