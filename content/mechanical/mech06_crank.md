---
title: "Mechanical Design · Challenge 6 — The Crank"
short_title: "Challenge 6"
description: "Rotation into straight-line motion. Stroke is twice the pin offset, and dead points stop everything."
mission_id: "mech06_crank"
mission_title: "Mechanical Design · Challenge 6 — The Crank"
eyebrow: "Mechanical Design · Challenge 6"
heading: "The Crank"
subheading: "Student Challenge · Turning Rotation Into a Straight Push"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 6 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How do we turn one kind of motion into a different kind of motion?"
  -
    term: "Big Idea"
    definition: "A [[CRANK|crank]] converts turning into a back-and-forth push, by a distance you can calculate."
  -
    term: "Mechanism"
    definition: "Crank and slider"
  -
    term: "Design Concepts"
    definition: "[[ROTARY MOTION|Rotary motion]] · [[LINEAR MOTION|Linear motion]] · [[STROKE|Stroke]] · [[CONNECTING ROD|Connecting rod]] · [[DEAD POINT|Dead point]]"
  -
    term: "Materials"
    definition: "Kit parts only. No metal pieces other than screws, bolts, and nuts."
  -
    term: "What You Need"
    definition: "LEGO kit · one motor · Wombat controller · poms · ruler · this challenge sheet"
  -
    term: "Prerequisites"
    definition: "Challenges 1--5. This begins a new set: mechanisms that change the *kind* of motion, not just the amount."
weight: 7
hub_unit: 4
hub_title: "The Crank"
hub_label: "Challenge 6"
---

## Overview

Motors turn. That is the only thing they do. Gears change how fast and how hard they turn --- that was Challenges 3 through 5 --- but the motion coming out is still rotation.

Most jobs a robot has to do are not turning jobs. They are pushing, lifting, sliding, and grabbing jobs. Somewhere between the motor and the task, the *kind* of motion has to change. That is what this new set of challenges is about, and the crank is the simplest example of it.

{{< callout title="Core Insight" >}}
A mechanism is a translator. It takes the motion a motor can make and turns it into the motion the job actually needs.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain how a crank converts rotary motion into linear motion.
- Predict the [[STROKE|stroke]] of a crank from the position of its pin, before building it.
- Identify the two [[DEAD POINT|dead points]] in a crank cycle and explain why they matter.
- Modify a mechanism to meet a stated need under stated constraints.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it more than once --- the first time you will see the whole thing move, and the second time you will start to see which part causes which.

{{< youtube id="W_I_ZVlhn5U" title="LEGO crank mechanism" >}}

Simple mechanics 9 --- LEGO crank mechanism.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Find the exact place where the motion stops being a turn and starts being a slide.
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

Where does the turning become a push? Name the part where the motion changes.

{{< answer key="p1_where_changes" label="Where the motion changes" >}}

Watch the pushing part carefully. Does it move at the same speed all the way across, or does it speed up and slow down?

{{< answer key="p1_speed" label="Speed observation" >}}

## Phase 2 --- Concept: How a Crank Works

A crank has three working parts. A **wheel or arm** turns around a fixed center. A **pin** is attached to that wheel, off to one side of the center --- not in the middle. A [[CONNECTING ROD|connecting rod]] links that pin to whatever you want to push.

Because the pin is off-center, it travels in a circle. The far end of the connecting rod cannot travel in a circle --- it is held so that it can only slide back and forth. So every full turn of the wheel drives the far end forward once and back once.

### The Two Motions

|  |  |
| --- | --- |
| Rotary motion | Turning around a center point. This is what a motor produces. |
| Linear motion | Moving in a straight line, back and forth. This is what a pusher needs. |

### You Can Calculate the Stroke

How far the pin sits from the center of the wheel decides exactly how far your pusher travels. Not roughly --- exactly.

{{< calc title="Calculation" >}}
- formula: "stroke = 2 × pin offset"
- note: "the pusher travels the full diameter of the circle the pin makes"
{{< /calc >}}

{{< figrow tall=true >}}
- src: "mech06_crank-diagram-01.svg"
  alt: "Three snapshots of the same crank turning counterclockwise. The fixed axle and guide stay in place. With the pin pointing right, the pusher is farthest out. After a quarter-turn, the pin is above the axle, the rod tilts, and the pusher moves inward. After a half-turn, the pin points left and the pusher is farthest in. Both rod ends pivot; the next half-turn brings the pusher back out. Stroke is twice the axle-to-pin offset."
  caption: "Follow snapshots 1–3: the wheel keeps turning in one direction while the pusher moves in, then back out on the next half-turn. Move the pin out and the push gets longer. Move it in toward the center and the push gets shorter."
{{< /figrow >}}

### The Two Dead Points

Look at the diagram again. In snapshots 1 and 3, the connecting rod and the crank arm are lined up in a straight row. Those two moments are called [[DEAD POINT|dead points]], and they are where the mechanism has the least ability to push.

It matters for two reasons. A crank started from a dead point may just jam instead of turning. And the pusher does not travel at a steady speed --- it is slowest at the ends of its stroke and fastest in the middle.

Predict: if you move the pin twice as far from the center of the wheel, what happens to the stroke? Give a number, not a description. You will test it in Phase 5.

{{< answer key="p2_predict_stroke" label="Stroke prediction" >}}

## Phase 3 --- Build the Bare Mechanism

Build the crank out of LEGO. Match what you saw in the video as closely as you can. Do not attach it to anything else yet --- build the mechanism by itself and get it turning cleanly first.

{{< callout title="Before You Go On" variant="navy" >}}
Turn your crank by hand through five full rotations. If it catches, sticks, or forces at any point, fix it now. A mechanism that binds by hand will bind far worse under motor power, and it will be much harder to diagnose once there is a motor and a pusher attached to it.
{{< /callout >}}

### Find Your Dead Points

Turn the wheel slowly until the connecting rod and the crank arm line up. That is a dead point. There are two of them, half a turn apart. Mark both on your wheel with a piece of tape or a marker.

Did anything bind or catch on the first build? What did you change?

{{< answer key="p3_binding" label="Binding notes" >}}

Set the crank exactly on a dead point and try to push the slider by hand. What happens, and why?

{{< answer key="p3_dead_point_test" label="Dead point test" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly developed LEGO contraption, modify and attach it in such a fashion that it will repeatedly push poms or other soft objects from one place to another.
{{< /callout >}}

### Mental Picture

Think of the way a trash compactor works. One flat face advances, pushes everything in front of it, and then pulls back to make room for more.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The overall device must be stationary. Only the crank mechanism can move.
2.  The device must be capable of moving poms from within ½ inch of the station to at least 3 inches away.
3.  The "push blade" must be at least 3″ wide and ¾″ tall.
4.  Kit parts only. No metal pieces other than screws, bolts, and nuts.

### Visual Representation

{{< figrow tall=true >}}
- src: "mech06_crank-diagram-02.svg"
  alt: "Top view of the required device: a stationary base holds a crank-driven arm that pushes a blade to the right, moving a pom from within one-half inch of the station to at least three inches away."
  caption: "Top view. The base stays put; only the crank, connecting rod, and push blade move."
{{< /figrow >}}

### Do the Math First

You know the stroke formula. Use it before you build.

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
      text: "Stroke you need (from the constraint)"
    -
      key: "p4_stroke_needed"
      aria: "Stroke needed"
    -
      key: "p4_stroke_needed_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Pin offset that gives you that stroke"
    -
      key: "p4_offset_needed"
      aria: "Offset needed"
    -
      key: "p4_offset_needed_unit"
      aria: "Unit"
      value: "in"
{{< /gridtable >}}

### Your Plan --- Before You Build

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your device fail first by not pushing far enough, by the base sliding, or by the poms escaping around the blade?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

Testing a mechanism is not watching it once and deciding it works. Run it repeatedly, change one thing at a time, and write down what changed. A mechanism that works once and fails the next four times has not met the need.

### Predict, Then Measure

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
      text: "Pin offset from the center of the wheel"
    -
      key: "p5_pin_offset"
      aria: "Pin offset"
    -
      key: "p5_pin_offset_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Stroke you predicted (2 × offset)"
    -
      key: "p5_stroke_predicted"
      aria: "Predicted stroke"
    -
      key: "p5_stroke_predicted_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Stroke you measured"
    -
      key: "p5_stroke_measured"
      aria: "Measured stroke"
    -
      key: "p5_stroke_measured_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Width of your push blade"
    -
      key: "p5_blade_width"
      aria: "Blade width"
    -
      key: "p5_blade_width_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Height of your push blade"
    -
      key: "p5_blade_height"
      aria: "Blade height"
    -
      key: "p5_blade_height_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Farthest a pom traveled in one push"
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
- head: "Pom moved 3″?"
- head: "Base stayed put?"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_moved"
      aria: "Trial 1 moved three inches"
    - key: "trial1_stable"
      aria: "Trial 1 base stayed put"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_moved"
      aria: "Trial 2 moved three inches"
    - key: "trial2_stable"
      aria: "Trial 2 base stayed put"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_moved"
      aria: "Trial 3 moved three inches"
    - key: "trial3_stable"
      aria: "Trial 3 base stayed put"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_moved"
      aria: "Trial 4 moved three inches"
    - key: "trial4_stable"
      aria: "Trial 4 base stayed put"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_moved"
      aria: "Trial 5 moved three inches"
    - key: "trial5_stable"
      aria: "Trial 5 base stayed put"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_moved"
      aria: "Trial 6 moved three inches"
    - key: "trial6_stable"
      aria: "Trial 6 base stayed put"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_moved"
      aria: "Trial 7 moved three inches"
    - key: "trial7_stable"
      aria: "Trial 7 base stayed put"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_moved"
      aria: "Trial 8 moved three inches"
    - key: "trial8_stable"
      aria: "Trial 8 base stayed put"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_moved"
      aria: "Trial 9 moved three inches"
    - key: "trial9_stable"
      aria: "Trial 9 base stayed put"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_moved"
      aria: "Trial 10 moved three inches"
    - key: "trial10_stable"
      aria: "Trial 10 base stayed put"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_stationary"
  label: "The base did not shift, tip, or need a hand on it while running."
- key: "p5_check_onlycrank"
  label: "Only the crank mechanism moved. Nothing else on the device did."
- key: "p5_check_distance"
  label: "A pom starting within ½″ of the station ended at least 3″ away."
- key: "p5_check_blade"
  label: "The push blade measures at least 3″ wide and ¾″ tall."
- key: "p5_check_repeat"
  label: "It worked five times in a row without a rebuild."
- key: "p5_check_materials"
  label: "Kit parts only. No metal except screws, bolts, and nuts."
{{< /checklist >}}

Compare your predicted stroke to the one you measured. If they differ, where did the difference come from?

{{< answer key="p5_stroke_compare" label="Stroke comparison" >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
A mechanism you cannot find a use for is a trick. A mechanism you can place on a real field is a tool.
{{< /callout >}}

You now have a device that pushes things a fixed distance, repeatedly, from a base that does not move. That is a narrow ability --- and narrow abilities often win game tasks, because they are fast and they are reliable.

Name a Botball task where pushing an object a fixed distance would work better than picking it up and carrying it. Explain why pushing wins there.

{{< answer key="p6_botball_use" label="Botball application" >}}

Compare this to the pincer you built in Challenge 3. What can the crank do that the pincer cannot, and what can the pincer do that the crank cannot?

{{< answer key="p6_vs_pincer" label="Crank versus pincer" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain in your own words how a crank turns rotation into a straight push. Do not use the word "crank" in your answer.

{{< answer key="p7_q1_explain" label="Reflection 1" >}}

2\. You could calculate the stroke before you built anything. Where else in Challenges 1--5 were you able to predict a result with arithmetic instead of testing for it?

{{< answer key="p7_q2_prediction" label="Reflection 2" >}}

3\. Explain what a dead point is and why a designer would care about where it falls.

{{< answer key="p7_q3_dead_point" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "A mechanism translates one kind of motion into another. This means that when a motor cannot do a job directly, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Prove the Formula

- Build your crank so the pin can be moved to three different distances from the center.
- Predict the stroke at each position, then measure all three.
- Does stroke = 2 × offset hold every time? If a measurement is off, find out why before you blame the formula.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Start on a Dead Point

- Set the crank exactly on a dead point, then run the motor.
- Does it start? Try it five times from each of the two dead points.
- Real engines solve this with a flywheel. What could you add to your build that does the same job?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Wider Is Not Always Better

- Make your push blade twice as wide as the minimum and test it.
- Does it move more poms per push? Does anything get worse?
- Where is the tradeoff between a wide blade and a narrow one?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Reverse the Job

- Your crank pushes. Could the same mechanism pull something toward the base instead?
- Predict what you would have to change, then build it and find out.
- What did you have to change that you did not expect?

{{< answer key="ext_d" label="Extension D" >}}
