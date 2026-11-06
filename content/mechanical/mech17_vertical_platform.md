---
title: "Mechanical Design · Challenge 17 — The Vertical Transitioning Platform"
short_title: "Challenge 17"
description: "Two pounds, five inches, one motor. Mechanical advantage gets its name here — and its price."
mission_id: "mech17_vertical_platform"
mission_title: "Mechanical Design · Challenge 17 — The Vertical Transitioning Platform"
eyebrow: "Mechanical Design · Challenge 17"
heading: "The Vertical Transitioning Platform"
subheading: "Student Challenge · Two Pounds, Five Inches, One Motor"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 17 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How does one small motor lift something far heavier than it could ever lift directly?"
  -
    term: "Big Idea"
    definition: "[[MECHANICAL ADVANTAGE|Mechanical advantage]] trades distance for force, and the trade is exact."
  -
    term: "Mechanism"
    definition: "[[SCISSOR LIFT|Scissor lift]]"
  -
    term: "Design Concepts"
    definition: "[[WORK|Work]] · [[LOAD|Load]] · [[SLIDING END|Sliding end]] · [[STABILITY|Stability]]"
  -
    term: "Materials"
    definition: "Kit parts only"
  -
    term: "What You Need"
    definition: "LEGO kit · one motor or servo · Wombat controller · gears for reduction · a 2 lb weight · ruler · scale"
  -
    term: "Prerequisites"
    definition: "Challenge 4 for gear ratios, Challenge 5 for torque, Challenge 9 for big reductions"
weight: 18
hub_unit: 7
hub_title: "The Vertical Transitioning Platform"
hub_label: "Challenge 17"
---

## Overview

Two pounds is 32 ounces. Go back to Challenge 5 for a moment: there, an 8 to 12 ounce object at the end of a 12-inch arm already put you at the 120 oz-in limit of a single motor.

Now you have to lift three times that weight, five inches straight up, with one motor. A plain arm will not do it. Nothing you have built so far will do it without help.

{{< callout title="Core Insight" >}}
A motor's strength is fixed. What you can change is how far it has to turn. Make it turn much further and it can lift much more --- and there is an exact exchange rate between the two.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain how a scissor lift raises a platform while keeping it level.
- Define mechanical advantage and calculate what you need for a given load.
- Explain why gearing down for force always costs speed, using [[WORK|work]].
- Diagnose why a scissor lift struggles most at the very bottom of its travel.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="cJIUVR_I7Z8" title="LEGO vertical transitioning platform" >}}

Simple mechanics --- vertical transitioning platform.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Watch the bottom ends of the links. Do both of them stay put, or does one slide?
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

The platform goes straight up, but nothing in the mechanism moves straight up. Where does the motion actually come from?

{{< answer key="p1_source" label="Source of motion" >}}

What LEGO pieces might take the place of each of the pieces you see?

{{< answer key="p1_pieces" label="LEGO substitutions" >}}

## Phase 2 --- Concept: The Scissor Lift

A [[SCISSOR LIFT|scissor lift]] is built from pairs of links crossed in an X and pinned together at their middle. Stack several X's on top of each other and you have a lift.

At each level, one end of the pair is pinned in place and the other is a [[SLIDING END|sliding end]] that can travel horizontally. Push the sliding ends inward and the X's stand up taller. Let them spread apart and the whole stack folds flat.

{{< figrow tall=true >}}
- src: "mech17_vertical_platform-diagram-01.svg"
  alt: "A scissor lift shown collapsed on the left and extended on the right. Crossed links pinned at their centres form stacked X shapes. One end of each pair is a fixed pivot and the other slides horizontally. The platform on top stays level in both positions."
  caption: "Two stacked X's. Each pair you add lifts further for the same amount of sliding at the bottom."
{{< /figrow >}}

### Why It Stays Level

The two links in each X are the same length and cross at their exact centers, so both sides of the platform rise by the same amount at the same time. Nothing has to be adjusted or controlled --- the geometry does it.

This is the fourth way you have met of keeping something level: pivoting arms in Challenge 4, a parallelogram in Challenge 8, straight-line sliding in Challenge 11, and now symmetry.

{{< callout title="The Bottom Is the Hard Part" >}}
When the scissor is nearly flat, the links are almost horizontal. Pushing them inward barely lifts anything at first --- but it has to push against the entire weight of the load through a very shallow angle.

That means a scissor lift is hardest to start and easiest once it is already up. If your build lifts fine when you help it off the ground but stalls from fully collapsed, nothing is broken. That is the mechanism behaving normally, and it is what you have to design around.
{{< /callout >}}

Predict: at what point in its travel will your lift struggle most? Say why before you build it.

{{< answer key="p2_predict_struggle" label="Struggle prediction" >}}

## Phase 3 --- Concept: Mechanical Advantage, Then Build

You have been using this idea since Challenge 4 without a name for it. Here is the name.

{{< calc title="Calculation" >}}
- formula: "mechanical advantage = force out ÷ force in"
- note: "a mechanical advantage of 10 means you get ten times the push you put in"
{{< /calc >}}

Gearing down 10:1 gives you a mechanical advantage of about 10. A lever with a long arm three times the short one gives you 3. Stack them and they multiply, exactly as gear ratios did in Challenge 5.

### And Here Is What It Costs

Nothing is free, and the reason is simple enough to write in one line. [[WORK|Work]] is force multiplied by distance, and a machine cannot produce more work than you put into it.

{{< calc title="Calculation" >}}
- formula: "work = force × distance"
- note: "whatever you gain in force, you give back in distance"
{{< /calc >}}

{{< figrow tall=true >}}
- src: "mech17_vertical_platform-diagram-02.svg"
  alt: "Two rectangles of equal area. The wide flat one represents a small force applied over a long distance. The narrow tall one represents a large force applied over a short distance. Because their areas are equal, they represent the same amount of work."
  caption: "Force times distance is an area. Change the shape however you like; the area stays the same."
{{< /figrow >}}

{{< callout title="What This Means for Your Build" variant="navy" >}}
To lift 2 pounds with a motor that cannot lift 2 pounds, gear it down. Gear it down 20:1 and it can push twenty times harder --- and it must turn twenty times as far to raise the platform the same 5 inches.

So your lift will be slow. That is not a fault in your design. It is the price, and it is exactly the price the equation says it should be.
{{< /callout >}}

### Build the Bare Mechanism

Build the scissor stack first, with no motor and no load. Raise and lower it by hand.

{{< callout title="Before You Go On" >}}
Work it through its full range by hand five times. Check three things: the sliding ends actually slide freely, the platform stays level all the way up, and the whole stack does not rack sideways when you push on a corner.

Racking is the usual problem. A scissor built on one plane folds over sideways under load --- real ones are built as two scissor stacks side by side, tied together.
{{< /callout >}}

Does your platform stay level through the whole travel? How did you check, rather than judging by eye?

{{< answer key="p3_level_check" label="Level check" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, modify and attach it in such a fashion that it will lift 2 lbs a distance of 5 inches or more using only a single servo or motor.
{{< /callout >}}

### Mental Picture

Think of a scissor lift on a work site --- the kind that carries two people and their tools up to a ceiling. One hydraulic cylinder pushing sideways at the bottom raises the whole platform, and the deck stays flat enough to stand on the entire way up.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The platform must have a surface area of more than 16 square inches.
2.  The platform must be stable and very near horizontal at all times.
3.  The lift must raise 2 lbs a distance of 5 inches or more.
4.  Only a single servo or motor may be used.
5.  The lift must work on more than 90% of attempts, counted over at least 10 lifts.
6.  Kit parts only.

### Do the Math First

Work out roughly what reduction you need before you build it. You will not get this exactly right, and that is fine --- the point is to start close instead of guessing.

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
      text: "Weight you must lift"
    -
      key: "p4_weight"
      aria: "Weight"
    -
      key: "p4_weight_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "Most weight one motor lifted in an earlier challenge"
    -
      key: "p4_prior_weight"
      aria: "Prior weight"
    -
      key: "p4_prior_weight_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "Mechanical advantage you will need, roughly"
    -
      key: "p4_ma_needed"
      aria: "Mechanical advantage needed"
    -
      key: "p4_ma_needed_unit"
      aria: "Unit"
      value: "×"
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

How will you drive the sliding ends? A rack and pinion, a lead screw, a linkage, something else?

{{< answer key="p4_drive_plan" label="Drive plan" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your lift fail by stalling, by racking sideways, or by the platform tilting?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="How to Check \"Very Near Horizontal\"" >}}
Do not judge it by eye. Measure the height of the platform at its front edge and again at its back edge, at the top of the travel. If the two numbers match, it is level. Then do it again halfway up.

Record the difference. That number is what "very near horizontal" actually means for your build.
{{< /callout >}}

{{< callout title="Build Up to the Full Load" variant="navy" >}}
Do not start at 2 lbs. Start with nothing on the platform, then add weight in steps, recording the point where the lift slows noticeably and the point where it stops entirely.

Those two numbers tell you far more than a single pass or fail at 2 lbs would.
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
      text: "Platform dimensions"
    -
      key: "p5_platform_dims"
      aria: "Platform dimensions"
    -
      key: "p5_platform_dims_unit"
      aria: "Unit"
      value: "in × in"
  -
    -
      text: "Platform surface area"
    -
      key: "p5_platform_area"
      aria: "Platform area"
    -
      key: "p5_platform_area_unit"
      aria: "Unit"
      value: "sq in"
  -
    -
      text: "Scissor stages you built"
    -
      key: "p5_stages"
      aria: "Scissor stages"
    -
      key: "p5_stages_unit"
      aria: "Unit"
      value: "X pairs"
  -
    -
      text: "Total gear reduction"
    -
      key: "p5_reduction"
      aria: "Reduction"
    -
      key: "p5_reduction_unit"
      aria: "Unit"
      value: ": 1"
  -
    -
      text: "Height lifted with no load"
    -
      key: "p5_height_empty"
      aria: "Height unloaded"
    -
      key: "p5_height_empty_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Height lifted with 2 lbs"
    -
      key: "p5_height_loaded"
      aria: "Height loaded"
    -
      key: "p5_height_loaded_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Weight at which the lift first slowed noticeably"
    -
      key: "p5_slow_weight"
      aria: "Slowing weight"
    -
      key: "p5_slow_weight_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "Weight at which it stalled completely"
    -
      key: "p5_stall_weight"
      aria: "Stall weight"
    -
      key: "p5_stall_weight_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "Time to lift 2 lbs the full 5 inches"
    -
      key: "p5_lift_time"
      aria: "Lift time"
    -
      key: "p5_lift_time_unit"
      aria: "Unit"
      value: "seconds"
  -
    -
      text: "Front-to-back height difference at full extension"
    -
      key: "p5_tilt"
      aria: "Tilt at top"
    -
      key: "p5_tilt_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Did it start from fully collapsed, unassisted?"
    -
      key: "p5_cold_start"
      aria: "Cold start"
    -
      key: "p5_cold_start_unit"
      aria: "Unit"
      value: "yes / no"
{{< /gridtable >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Load (oz)"
- head: "Height reached"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_load"
      aria: "Trial 1 load"
    - key: "trial1_height"
      aria: "Trial 1 height reached"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_load"
      aria: "Trial 2 load"
    - key: "trial2_height"
      aria: "Trial 2 height reached"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_load"
      aria: "Trial 3 load"
    - key: "trial3_height"
      aria: "Trial 3 height reached"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_load"
      aria: "Trial 4 load"
    - key: "trial4_height"
      aria: "Trial 4 height reached"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_load"
      aria: "Trial 5 load"
    - key: "trial5_height"
      aria: "Trial 5 height reached"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_load"
      aria: "Trial 6 load"
    - key: "trial6_height"
      aria: "Trial 6 height reached"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_load"
      aria: "Trial 7 load"
    - key: "trial7_height"
      aria: "Trial 7 height reached"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_load"
      aria: "Trial 8 load"
    - key: "trial8_height"
      aria: "Trial 8 height reached"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_load"
      aria: "Trial 9 load"
    - key: "trial9_height"
      aria: "Trial 9 height reached"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_load"
      aria: "Trial 10 load"
    - key: "trial10_height"
      aria: "Trial 10 height reached"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_area"
  label: "The platform measures more than 16 square inches."
- key: "p5_check_level"
  label: "Front and back edge heights matched closely, at the top and halfway up."
- key: "p5_check_lift"
  label: "Raised 2 lbs at least 5 inches."
- key: "p5_check_onemotor"
  label: "Only one servo or motor is used anywhere in the machine."
- key: "p5_check_stable"
  label: "The lift did not rack sideways or need a hand on it under load."
- key: "p5_check_rate"
  label: "Worked on more than 90% of attempts, counted over at least 10 lifts."
- key: "p5_check_materials"
  label: "Kit parts only."
{{< /checklist >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

Did your lift struggle most at the bottom, as Phase 2 predicted? Describe what it did.

{{< answer key="p5_bottom_check" label="Bottom of travel behavior" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Every time you gear down for strength, you are spending time. In a timed match, that is a real cost --- and sometimes the right one.
{{< /callout >}}

The question is never simply "can my robot lift this." It is "can it lift this fast enough to matter." Mechanical advantage tells you the first answer, and the work equation tells you the second one comes out of the same budget.

Name a Botball task where you would gear down heavily and accept a slow mechanism. What makes the slowness acceptable there?

{{< answer key="p6_slow_ok" label="When slow is acceptable" >}}

A scissor lift folds nearly flat. Look back at the starting-size limit from Challenge 2. What does that make a scissor lift good for on a competition robot?

{{< answer key="p6_folding" label="Folding advantage" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Define mechanical advantage in your own words, and give the figure for your own lift.

{{< answer key="p7_q1_ma" label="Reflection 1" >}}

2\. Explain, using work, why a machine that lifts more must move slower. Do not use the word "magic."

{{< answer key="p7_q2_work" label="Reflection 2" >}}

3\. Explain why a scissor lift keeps its platform level, and how that differs from the parallelogram in Challenge 8.

{{< answer key="p7_q3_level" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "Whatever is gained in force is given back in distance. This means that when a motor is not strong enough, I should --- and I should expect..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Add a Stage

- Add one more X pair to the stack and measure the new lift height.
- Did the height go up by as much as you expected?
- What happened to the weight it could lift, and to how steady it was at full extension?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Measure the Trade

- Time the lift, then halve your gear reduction and time it again with a lighter load.
- Record force and time for both versions.
- Does the product of the two stay roughly constant? Where did the difference go?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Find the Minimum

- Reduce your gearing step by step until the lift can only just raise 2 lbs.
- Record that reduction --- it is the least you can get away with.
- Would you build a competition robot at that number, or leave margin? Defend your answer.

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Beat the Bottom

- Get your lift to start reliably from fully collapsed, carrying the full 2 lbs.
- Try moving where the drive pushes, or starting the scissor at a slight angle rather than flat.
- Which change helped most, and why does it help?

{{< answer key="ext_d" label="Extension D" >}}
