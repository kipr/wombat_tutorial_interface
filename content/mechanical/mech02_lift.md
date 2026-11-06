---
title: "Mechanical Design · Challenge 2 — Getting It Up There"
short_title: "Challenge 2"
description: "An earlier version of the 17-inch lift activity: deploy from below 12 inches, reach the container, and measure reliability."
mission_id: "mech02_lift"
mission_title: "Mechanical Design · Challenge 2 — Getting It Up There"
eyebrow: "Mechanical Design · Challenge 2"
heading: "Getting It Up There"
subheading: "Student Challenge · Effector Design #2 — The 17-Inch Lift"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 2 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How can a machine end up taller than it started?"
  -
    term: "Big Idea"
    definition: "A machine that must fit in a small space and reach a tall one has to change shape while it runs."
  -
    term: "Design Concepts"
    definition: "[[DEPLOYMENT|Deployment]] · [[REACH|Reach]] · [[CENTER OF GRAVITY|Center of gravity]] · [[STABILITY|Stability]] · [[MOMENT ARM|Moment arm]]"
  -
    term: "Materials"
    definition: "LEGO structure and KIPR electronics only"
  -
    term: "What You Need"
    definition: "LEGO kit · motors or servos · Wombat controller · at least 4 poms · a container with its top 17″ above the floor · ruler or tape measure"
  -
    term: "Prerequisite"
    definition: "Challenge 1 --- you will run the same five-step process here"
weight: 32
hub_unit: 11
hub_title: "Getting It Up There"
hub_label: "Supplementary Lift Challenge"
---

## Overview

In Challenge 1 you moved poms sideways. Now you have to move them up --- into a container whose opening is well above your machine's head.

This challenge looks like a lifting problem. It is really a *shape-changing* problem, and the numbers in the constraints are where that hides. Read them carefully before you start planning.

{{< callout title="Core Insight" >}}
A machine is not stuck at the size it starts. Arms swing, sections slide, linkages unfold. Almost every tall robot you have seen began the match short.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Find a hidden requirement by comparing two numbers in a set of constraints.
- Describe at least three mechanical ways a machine can gain height after it starts.
- Explain why a tall, loaded machine tips, using [[CENTER OF GRAVITY|center of gravity]].
- Build and refine an [[EFFECTOR|effector]] that lifts and releases a load at height, reliably.

## Phase 1 --- Find the Problem

Before reading any further, look at these two numbers from the challenge and work out what they mean together.

|  |  |
| --- | --- |
| Container opening | 17 inches above the floor |
| Your machine at the start | must be less than 12 inches tall |

Subtract. How many inches of height must your machine gain *after* the run begins?

{{< answer key="p1_gap" label="Height gap" >}}

{{< callout title="The Real Problem" variant="navy" >}}
You are not being asked to build something 17 inches tall. You are being asked to build something under 12 inches tall that *becomes* tall enough. That is a different machine entirely.

A design that ignores this will pass every test on the workbench and fail the moment it is measured at the start line.
{{< /callout >}}

{{< figrow tall=true >}}
- src: "mech02_lift-diagram-01.svg"
  alt: "Side view. A starting envelope 12 inches tall sits at the left, with the machine required to fit entirely inside it before the run. A container at the right has its opening 17 inches above the floor. The difference of more than 5 inches must be gained after the run begins."
  caption: "Side view. Fit under the dashed line at the start; reach above the solid line during the run."
{{< /figrow >}}

## Phase 2 --- Concept: Ways to Gain Height

Machines that start small and end tall use one of a handful of tricks. Here are four. Each has a cost as well as a benefit --- there is no free height.

{{< figrow tall=true >}}
- src: "mech02_lift-diagram-02.svg"
  alt: "Four strategies for gaining height. A pivoting arm swings up through an arc. A telescoping section slides up out of another. A scissor linkage unfolds upward. A tipping bin rotates to pour its contents out at height."
  caption: "Four ways to end up taller than you started. Most real designs combine two."
{{< /figrow >}}

Which of the four would you try first, and what is the biggest risk in that choice?

{{< answer key="p2_strategy_choice" label="Strategy choice" >}}

## Phase 3 --- Concept: Why Tall Machines Fall Over

Every object behaves as though its entire weight is concentrated at a single point. That point is the [[CENTER OF GRAVITY|center of gravity]]. For a machine sitting on the floor, one rule decides whether it stands or falls:

{{< callout title="The Tipping Rule" >}}
If the center of gravity stays above the machine's base, it stands. If it moves out past the edge of the base, it tips.
{{< /callout >}}

This is why your challenge gets harder as your lift rises. Raising poms moves weight upward, and swinging an arm out moves weight sideways. Both push the center of gravity toward the edge of the base --- and a machine that was perfectly stable while loading can topple at full extension.

### Three Things You Can Do About It

- **Widen the base.** The farther apart the feet, the farther the center of gravity can travel before it escapes.
- **Keep the weight low.** Put motors and heavy parts near the floor, not up on the arm.
- **Counterweight.** Add weight on the opposite side of the pivot to pull the center of gravity back.

### Reach Costs Torque

There is a second penalty. The farther your load sits from the pivot, the harder the motor has to work to hold it --- that distance is called the [[MOMENT ARM|moment arm]]. Doubling the length of an arm roughly doubles the strain on whatever is driving it, with the same poms in the bucket.

You will put real numbers on this in Challenge 5. For now, just know the penalty exists, and expect a long arm to struggle where a short one did not.

Predict where your design will be least stable --- at rest, mid-lift, or fully extended? Explain using the tipping rule.

{{< answer key="p3_stability_predict" label="Stability prediction" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Problem" >}}
Poms need to be placed into a container whose top is 17 inches above ground level.
{{< /callout >}}

### The Need

Lift poms from ground level to a height of more than 17 inches and release them into the container.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The total height of your robot and lifting system must be less than 12 inches before you start your run.
2.  You must lift at least 4 poms and place them into the container.
3.  Your device must consistently grab, elevate, and drop poms into the container: a success rate greater than 90%.
4.  LEGO structure and KIPR electronics only. No other materials on this challenge.

### Added Value

- Your device lifts several groups of poms rather than one, or
- Your device runs a continuous "supply chain" of poms into the bin.

### Your Plan --- Before You Build

Run the five steps from Challenge 1 on paper first. Do not pick up parts yet.

State the problem in your own words. Include the height gain you calculated in Phase 1.

{{< answer key="p4_problem" label="Problem statement" >}}

Write the need as one testable sentence.

{{< answer key="p4_need" label="Need statement" >}}

List each constraint in your own words. Mark each as a minimum, a maximum, or an approximation.

{{< steps key="p4_constraint" label="Constraint" start=1 count=4 >}}

Which height strategy from Phase 2 are you using, and how will the poms be released at the top?

{{< answer key="p4_strategy" label="Chosen strategy" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

## Phase 5 --- Test & Iterate

{{< callout title="Measure the Envelope First" variant="navy" >}}
Before any trial, measure your machine's height while it is folded for the start. If it is over 12 inches, nothing else you test today counts. Fix that first.
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
      text: "Height of the machine, folded, before the run"
    -
      key: "p5_start_height"
      aria: "Starting height"
    -
      key: "p5_start_height_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Highest point the poms reached"
    -
      key: "p5_max_height"
      aria: "Maximum height"
    -
      key: "p5_max_height_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Height gained during the run"
    -
      key: "p5_height_gain"
      aria: "Height gained"
    -
      key: "p5_height_gain_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Poms delivered in one trip"
    -
      key: "p5_poms_per_trip"
      aria: "Poms per trip"
    -
      key: "p5_poms_per_trip_unit"
      aria: "Unit"
      value: "poms"
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
  -
    -
      text: "Your success rate"
    -
      key: "p5_rate"
      aria: "Success rate"
    -
      key: "p5_rate_unit"
      aria: "Unit"
      value: "%"
{{< /gridtable >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Poms in bin"
- head: "Stayed upright?"
- head: "Where it went wrong"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_poms"
      aria: "Trial 1 poms in bin"
    - key: "trial1_upright"
      aria: "Trial 1 stayed upright"
    - key: "trial1_observed"
      aria: "Trial 1 where it went wrong"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_poms"
      aria: "Trial 2 poms in bin"
    - key: "trial2_upright"
      aria: "Trial 2 stayed upright"
    - key: "trial2_observed"
      aria: "Trial 2 where it went wrong"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_poms"
      aria: "Trial 3 poms in bin"
    - key: "trial3_upright"
      aria: "Trial 3 stayed upright"
    - key: "trial3_observed"
      aria: "Trial 3 where it went wrong"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_poms"
      aria: "Trial 4 poms in bin"
    - key: "trial4_upright"
      aria: "Trial 4 stayed upright"
    - key: "trial4_observed"
      aria: "Trial 4 where it went wrong"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_poms"
      aria: "Trial 5 poms in bin"
    - key: "trial5_upright"
      aria: "Trial 5 stayed upright"
    - key: "trial5_observed"
      aria: "Trial 5 where it went wrong"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_poms"
      aria: "Trial 6 poms in bin"
    - key: "trial6_upright"
      aria: "Trial 6 stayed upright"
    - key: "trial6_observed"
      aria: "Trial 6 where it went wrong"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_poms"
      aria: "Trial 7 poms in bin"
    - key: "trial7_upright"
      aria: "Trial 7 stayed upright"
    - key: "trial7_observed"
      aria: "Trial 7 where it went wrong"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_poms"
      aria: "Trial 8 poms in bin"
    - key: "trial8_upright"
      aria: "Trial 8 stayed upright"
    - key: "trial8_observed"
      aria: "Trial 8 where it went wrong"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_poms"
      aria: "Trial 9 poms in bin"
    - key: "trial9_upright"
      aria: "Trial 9 stayed upright"
    - key: "trial9_observed"
      aria: "Trial 9 where it went wrong"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_poms"
      aria: "Trial 10 poms in bin"
    - key: "trial10_upright"
      aria: "Trial 10 stayed upright"
    - key: "trial10_observed"
      aria: "Trial 10 where it went wrong"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_envelope"
  label: "Measured under 12″ tall, folded, before the run started."
- key: "p5_check_four"
  label: "Lifted at least 4 poms and released them into the container."
- key: "p5_check_rate"
  label: "Worked on more than 90% of runs, counted over at least 10 runs."
- key: "p5_check_upright"
  label: "The machine never tipped over during a successful run."
- key: "p5_check_materials"
  label: "The device uses LEGO and KIPR electronics only."
- key: "p5_check_addedvalue"
  label: "Added value: several groups of poms, or a continuous supply chain."
{{< /checklist >}}

Look back at your Phase 3 prediction. Where was your machine actually least stable? Did the tipping rule explain it?

{{< answer key="p5_stability_result" label="Stability result" >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Starting-size limits are not a classroom invention. Botball games set a size box every robot must fit inside before the match begins.
{{< /callout >}}

That rule is why competitive robots unfold. A team that designs to the size box from the first sketch has a working machine. A team that builds a tall robot and then tries to make it shorter usually starts over.

Name a Botball task that needs height your robot would not have at the start line. Which of the four strategies from Phase 2 would you use, and why that one?

{{< answer key="p6_botball_height" label="Botball height application" >}}

Your design had to be both short and tall. Name another pair of requirements that pull against each other in robot design, and say how you would settle the conflict.

{{< answer key="p6_tradeoff" label="Competing requirements" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. The 12-inch limit was never stated as "your machine must change shape." How did you work that out from the numbers? What does that suggest about reading constraints carefully?

{{< answer key="p7_q1_hidden" label="Reflection 1" >}}

2\. Explain the tipping rule in your own words, using your machine as the example.

{{< answer key="p7_q2_tipping" label="Reflection 2" >}}

3\. Compare this challenge to Challenge 1. Which was harder, and was it harder for a different reason than you expected?

{{< answer key="p7_q3_compare" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "A machine does not have to stay the size it started. This means that when I am given a size limit, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Raise the Bar

- Keep the same starting envelope, but deliver into a container with its top at 22 inches.
- What broke first --- reach, stability, or motor strength?
- How much height can your strategy give you before it stops working entirely?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Shrink the Envelope

- Rebuild so the machine fits under 8 inches at the start instead of 12.
- Did you have to change strategy, or just proportions?
- Which of the four approaches folds down smallest?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Find the Tipping Point

- Load your lift with more and more poms until it tips. Record the number that did it.
- Widen the base and repeat. Record the new number.
- Add a counterweight and repeat again. Which change bought you the most, and was that what you expected?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Supply Chain

- Build the added-value version: poms feeding continuously into the bin rather than one load at a time.
- Time how long 12 poms take, continuous versus one trip at a time.
- At what number of poms does the continuous design finally win?

{{< answer key="ext_d" label="Extension D" >}}
