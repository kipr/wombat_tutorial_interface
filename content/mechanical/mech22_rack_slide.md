---
title: "Mechanical Design · Challenge 22 — The Sliding Platform"
short_title: "Challenge 22"
description: "Most of the work in a slide is preventing motion, not creating it. Skew, guides, and binding."
mission_id: "mech22_rack_slide"
mission_title: "Mechanical Design · Challenge 22 — The Sliding Platform"
eyebrow: "Mechanical Design · Challenge 22"
heading: "The Sliding Platform"
subheading: "Student Challenge · One Motor, One Direction, No Twisting"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 22 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How do we stop something from moving in every direction except the one we want?"
  -
    term: "Big Idea"
    definition: "A [[LINEAR SLIDE|slide]] works by taking motions away. What is left is the one you meant."
  -
    term: "Mechanism"
    definition: "Rack and pinion driving a guided platform"
  -
    term: "Design Concepts"
    definition: "[[GUIDE|Guides]] · [[SKEW|Skew]] · [[BINDING|Binding]] · [[DEGREES OF FREEDOM|Degrees of freedom]]"
  -
    term: "Materials"
    definition: "Kit parts only"
  -
    term: "What You Need"
    definition: "LEGO kit · rack pieces · one motor · Wombat controller · a 6 oz weight · ruler"
  -
    term: "Prerequisites"
    definition: "Challenge 11 for rack and pinion, Challenge 16 for degrees of freedom"
weight: 23
hub_unit: 8
hub_title: "The Sliding Platform"
hub_label: "Challenge 22"
---

## Overview

Rack and pinion again --- the third time in this module. The technology is familiar by now. What is new is what you have to stop the platform from doing.

In Challenge 16 you counted the ways a flat object can move on a flat surface, and got three: two directions of sliding, plus rotation. A sliding platform is a mechanism built to allow exactly one of those three and forbid the other two.

{{< callout title="Core Insight" >}}
Most of the work in a slide is not in driving it. It is in preventing everything else. A platform pushed at one point will happily twist instead of travelling, and it will jam solid when it does.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain how a guide removes unwanted degrees of freedom.
- Recognise [[SKEW|skew]] and explain why it leads to [[BINDING|binding]].
- Measure whether a platform is running square rather than judging by eye.
- Build a slide that carries a load smoothly through its whole range.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="uEGpsi4upw8" title="LEGO rack and pinion slide" >}}

Simple mechanics --- rack and pinion driving a slide.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. The pinion pushes the platform at one point only. What stops the platform swinging around that point?
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

Find whatever is holding the platform straight. Describe where it is and what it touches.

{{< answer key="p1_guides" label="Guides observed" >}}

What LEGO pieces might take the place of each of the pieces you see?

{{< answer key="p1_pieces" label="LEGO substitutions" >}}

## Phase 2 --- Concept: Taking Motions Away

A platform lying on a table has three [[DEGREES OF FREEDOM|degrees of freedom]] --- you met them in Challenge 16. It can slide two ways and it can spin.

Your rack and pinion drives one of those. It does nothing at all about the other two, so unless you take them away, the platform will use them.

{{< figrow tall=true >}}
- src: "mech22_rack_slide-diagram-01.svg"
  alt: "Top views of two platforms, each attached to a rack driven by a fixed 24-tooth pinion. Without guides, a dashed outline shows unwanted platform rotation. With two long guide rails, the platform can only slide along them. The pinion teeth enter the rack gaps."
  caption: "The pinion supplies the motion. The guides remove the two you did not want."
{{< /figrow >}}

### Skew, and Why It Jams

When a platform twists out of square in its guides, that is called [[SKEW|skew]]. A small amount is unavoidable. Too much and the platform's corners dig into the guides, friction climbs sharply, and the whole thing stops dead --- that is [[BINDING|binding]].

{{< callout title="You Already Know This Feeling" >}}
Pull one corner of a drawer and it goes crooked and sticks. Push it square and it slides. That is skew and binding, and it is the same problem you are about to build.

The fix in a drawer is the same as the fix here: guides that are long enough, far enough apart, and close-fitting enough that the platform simply cannot get very far out of square.
{{< /callout >}}

Where do you think your platform is most likely to bind --- at the ends of its travel or in the middle? Say why.

{{< answer key="p2_bind_predict" label="Binding prediction" >}}

## Phase 3 --- Build the Bare Mechanism

Build the platform, the guides, and the rack and pinion. Do not add a motor or a load yet --- push the platform through its travel with one finger.

{{< callout title="Before You Go On" variant="navy" >}}
Push the platform from the middle, then push it from one corner. If it moves smoothly when pushed in the middle and jams when pushed at a corner, your guides are too short or too close together.

Long guides, set well apart, are what stop skew. Two short guides right next to each other allow the platform to twist between them, no matter how tightly they fit.
{{< /callout >}}

Does the platform move smoothly when pushed at a corner? If not, what did you change?

{{< answer key="p3_corner_push" label="Corner push test" >}}

How far apart are your guides, and how long is each one? Record both.

{{< answer key="p3_guide_geometry" label="Guide geometry" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, create a sliding platform that has at least a 2″ range of motion.
{{< /callout >}}

### Mental Picture

Think of a desk drawer. It runs on rails on both sides, and as long as it stays square it slides with one finger. Pull one corner and it wedges itself solid.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The platform must be a solid flat structure that will accept a LEGO or screw mount.
2.  The platform must be at least 2″ wide and 7″ long.
3.  The platform must have a range of motion of at least 2″.
4.  The platform must carry a 6 oz load through its full travel without binding.
5.  The platform must travel smoothly: no sticking, jumping, or needing a hand to help it along, anywhere in its range.
6.  The slide must complete 10 full out-and-back cycles, loaded, on more than 90% of attempts.
7.  Kit parts only.

{{< figrow tall=true >}}
- src: "mech22_rack_slide-diagram-02.svg"
  alt: "Cutaway top view of a seven by two inch platform. A rack attached underneath meshes with a fixed 24-tooth pinion driven by a motor below the deck. Long stationary rails guide both sides over the full travel. The dashed platform outline is shifted two inches to the right."
  caption: "Top view. The rails run the length of the platform's travel; the rack is fixed under it."
{{< /figrow >}}

### Your Plan --- Before You Build

Where will your guides be, how long, and how far apart? Say why those choices.

{{< answer key="p4_guide_plan" label="Guide plan" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your slide fail by binding, by the rack skipping teeth, or by the platform flexing under the load?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="Measure Skew, Do Not Eyeball It" >}}
Pick one edge of the platform and measure the gap between it and its guide rail --- first at the front corner, then at the back corner of the same edge.

If the two gaps are the same, the platform is running square. If they differ, that difference is your skew. Take the measurement at three points across the travel: near one end, in the middle, and near the other end.
{{< /callout >}}

### Skew Across the Travel

{{< gridtable >}}
columns:
  -
    head: "Position"
  -
    head: "Gap at front"
  -
    head: "Gap at back"
  -
    head: "Difference"
rows:
  -
    -
      text: "Near the start"
    -
      key: "p5_skew_start_front"
      aria: "Start front gap"
    -
      key: "p5_skew_start_back"
      aria: "Start back gap"
    -
      key: "p5_skew_start_diff"
      aria: "Start difference"
  -
    -
      text: "Middle of the travel"
    -
      key: "p5_skew_mid_front"
      aria: "Middle front gap"
    -
      key: "p5_skew_mid_back"
      aria: "Middle back gap"
    -
      key: "p5_skew_mid_diff"
      aria: "Middle difference"
  -
    -
      text: "Near the end"
    -
      key: "p5_skew_end_front"
      aria: "End front gap"
    -
      key: "p5_skew_end_back"
      aria: "End back gap"
    -
      key: "p5_skew_end_diff"
      aria: "End difference"
{{< /gridtable >}}

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
      text: "Platform width"
    -
      key: "p5_width"
      aria: "Platform width"
    -
      key: "p5_width_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Platform length"
    -
      key: "p5_length"
      aria: "Platform length"
    -
      key: "p5_length_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Range of motion"
    -
      key: "p5_range"
      aria: "Range of motion"
    -
      key: "p5_range_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Distance between your guides"
    -
      key: "p5_guide_spacing"
      aria: "Guide spacing"
    -
      key: "p5_guide_spacing_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Load carried through the full travel"
    -
      key: "p5_load"
      aria: "Load"
    -
      key: "p5_load_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "Largest skew you measured"
    -
      key: "p5_max_skew"
      aria: "Max skew"
    -
      key: "p5_max_skew_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Weight at which the slide first stuck"
    -
      key: "p5_stick_weight"
      aria: "Sticking weight"
    -
      key: "p5_stick_weight_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "Cycles completed loaded"
    -
      key: "p5_cycles"
      aria: "Cycles"
    -
      key: "p5_cycles_unit"
      aria: "Unit"
      value: "cycles"
{{< /gridtable >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Full travel?"
- head: "Where it stuck"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_travel"
      aria: "Trial 1 full travel"
    - key: "trial1_stuck"
      aria: "Trial 1 where it stuck"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_travel"
      aria: "Trial 2 full travel"
    - key: "trial2_stuck"
      aria: "Trial 2 where it stuck"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_travel"
      aria: "Trial 3 full travel"
    - key: "trial3_stuck"
      aria: "Trial 3 where it stuck"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_travel"
      aria: "Trial 4 full travel"
    - key: "trial4_stuck"
      aria: "Trial 4 where it stuck"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_travel"
      aria: "Trial 5 full travel"
    - key: "trial5_stuck"
      aria: "Trial 5 where it stuck"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_travel"
      aria: "Trial 6 full travel"
    - key: "trial6_stuck"
      aria: "Trial 6 where it stuck"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_travel"
      aria: "Trial 7 full travel"
    - key: "trial7_stuck"
      aria: "Trial 7 where it stuck"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_travel"
      aria: "Trial 8 full travel"
    - key: "trial8_stuck"
      aria: "Trial 8 where it stuck"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_travel"
      aria: "Trial 9 full travel"
    - key: "trial9_stuck"
      aria: "Trial 9 where it stuck"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_travel"
      aria: "Trial 10 full travel"
    - key: "trial10_stuck"
      aria: "Trial 10 where it stuck"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_mount"
  label: "The platform is solid and flat, and will take a LEGO or screw mount."
- key: "p5_check_size"
  label: "The platform measures at least 2″ wide and 7″ long."
- key: "p5_check_range"
  label: "Range of motion measured at 2″ or more."
- key: "p5_check_load"
  label: "Carried a 6 oz load through the full travel without binding."
- key: "p5_check_smooth"
  label: "Travelled smoothly with no sticking, jumping, or help needed."
- key: "p5_check_cycles"
  label: "Completed 10 loaded out-and-back cycles at better than 90%."
- key: "p5_check_materials"
  label: "Kit parts only."
{{< /checklist >}}

Was the skew the same all the way across the travel, or worse in one place? What does that tell you about your guides?

{{< answer key="p5_skew_pattern" label="Skew pattern" >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
A mechanism that binds does not fail slowly. It works, works, works, and then stops completely --- usually the one time it matters.
{{< /callout >}}

Binding is one of the most common ways a competition robot fails, and it almost never shows up on the bench. It appears when something flexes under load, or when a part shifts a fraction of an inch after a collision, and suddenly the mechanism that ran all week will not move at all.

Name a Botball mechanism that would jam if it went slightly out of square. What would you add to it to stop that happening?

{{< answer key="p6_botball_binding" label="Botball binding" >}}

Your platform will take a mount. Name two different things you could bolt onto it from earlier challenges, and what each would let the robot do.

{{< answer key="p6_mounts" label="What to mount" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. A flat object has three degrees of freedom. Explain what your slide does about each of them.

{{< answer key="p7_q1_dof" label="Reflection 1" >}}

2\. Explain skew and binding to someone who has never built a slide, using the drawer as your example.

{{< answer key="p7_q2_skew" label="Reflection 2" >}}

3\. This is the third rack and pinion you have built. What did this one demand that the others did not?

{{< answer key="p7_q3_third" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "Most of the work in a slide is preventing motion, not creating it. This means that when a mechanism keeps jamming, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Take a Guide Away

- Remove one guide and run the slide again, loaded.
- Measure the skew at the same three positions. How much worse is it?
- Does it still complete the travel, or does it bind? At what load?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Move the Guides Closer

- Keep both guides but bring them close together, near the middle of the platform.
- Re-measure skew and try the corner-push test.
- Why does guide *spacing* matter as much as how tightly they fit?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Longer Travel

- Get 4 inches of travel instead of 2, on the same platform.
- Did skew get worse at the far end of the new range?
- What did you have to lengthen to keep it running square?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Load It Off-Centre

- Put the 6 oz load on one corner of the platform instead of the middle.
- Does the slide still run? Measure the skew again.
- What does this tell you about where things should be mounted on a slide?

{{< answer key="ext_d" label="Extension D" >}}
