---
title: "Mechanical Design · Challenge 9 — The Worm Gear"
short_title: "Challenge 9"
description: "24:1 from two parts, a right-angle turn, and a drive that holds its position with the power off."
mission_id: "mech09_worm_circle"
mission_title: "Mechanical Design · Challenge 9 — The Worm Gear"
eyebrow: "Mechanical Design · Challenge 9"
heading: "The Worm Gear"
subheading: "Student Challenge · Drawing a Circle, Slowly"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 9 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How do we get an enormous slowdown, and a change of direction, out of two parts?"
  -
    term: "Big Idea"
    definition: "A [[WORM|worm]] advances its wheel by exactly one tooth per turn --- so the tooth count is the ratio."
  -
    term: "Mechanism"
    definition: "Worm and worm wheel"
  -
    term: "Design Concepts"
    definition: "[[WORM WHEEL|Worm wheel]] · [[RIGHT-ANGLE DRIVE|Right-angle drive]] · [[SELF-LOCKING|Self-locking]] · [[GEAR REDUCTION|Gear reduction]]"
  -
    term: "Materials"
    definition: "Kit parts, plus rubber bands or tacky material to hold the marker"
  -
    term: "What You Need"
    definition: "LEGO kit · worm gear · one motor · Wombat controller · a marker · paper · a stopwatch · rubber bands or tacky material"
  -
    term: "Prerequisites"
    definition: "Challenge 4 for gear ratios, Challenge 5 for torque"
weight: 10
hub_unit: 5
hub_title: "The Worm Gear"
hub_label: "Challenge 9"
---

## Overview

In Challenge 4 you worked hard for a 3.75:1 gear ratio. It took two gears of very different sizes, and it took up real space on your build.

A worm gear will give you 24:1 from two small parts. It will also turn the drive through a right angle, and it will hold whatever it is driving in place when the power goes off. Three useful things at once --- and it gives up something significant in return.

{{< callout title="Core Insight" >}}
A worm is a screw. Turn it once and it pushes the wheel along by exactly one tooth. So the number of teeth on the wheel *is* the ratio --- no arithmetic required.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Name the two parts of a worm gear set and explain how they mesh.
- Work out the ratio by counting teeth on the wheel.
- Explain what [[SELF-LOCKING|self-locking]] means and why it matters for a robot arm.
- Build a mechanism that moves slowly and at a steady rate, and prove it with a stopwatch.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="ORg4bBCemgs" title="LEGO worm gear" >}}

Simple mechanics --- LEGO worm gear.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Compare the speed of the input to the speed of the output. Which is turning faster, and by roughly how much?
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

Look at the two shafts. How are they pointed relative to each other? This is different from every gear pair you have built so far.

{{< answer key="p1_shafts" label="Shaft orientation" >}}

Compare this to the cam in Challenge 7 and the crank in Challenge 6. Does the output here speed up and slow down, or move at a steady rate?

{{< answer key="p1_steady" label="Steady rate" >}}

## Phase 2 --- Concept: The Worm and the Wheel

A worm gear set has two parts. The [[WORM|worm]] is the screw --- it looks like a threaded rod, and it is what your motor turns. The [[WORM WHEEL|worm wheel]] is the toothed wheel that the screw drives.

People often call the whole set "a worm gear," and sometimes call just the wheel that. When it matters, say *worm* for the screw and *worm wheel* for the wheel.

{{< figrow tall=true >}}
- src: "mech09_worm_circle-diagram-01.svg"
  alt: "Top view of a worm gear set. A motor turns a threaded worm whose axis runs left to right. The worm meshes with the rim of a toothed wheel whose axis points straight up out of the surface. One full turn of the worm advances the wheel by exactly one tooth."
  caption: "Looking down at the table. The worm lies flat; the wheel spins about a vertical axis."
{{< /figrow >}}

### The Ratio Is the Tooth Count

The worm's thread is a single continuous spiral. Each full turn of the worm slides that spiral along by one tooth of the wheel. So the wheel advances one tooth per turn, and no more.

{{< calc title="Calculation" >}}
- formula: "ratio = number of teeth on the worm wheel"
- note: "a 24-tooth wheel gives 24:1 from one pair of parts"
{{< /calc >}}

Compare that to Challenge 4, where an 8-tooth gear driving a 30-tooth gear gave you 3.75:1 and took up far more room.

### The Drive Turns a Corner

Notice the shafts in the diagram. The worm's axis and the wheel's axis are at 90° to each other. That is not optional --- it is how a worm gear has to be built. It is called a [[RIGHT-ANGLE DRIVE|right-angle drive]], and it is genuinely useful: a motor lying flat on a surface can turn something that spins about a vertical axis.

That property is what makes this challenge possible at all.

{{< callout title="The Best Part: It Locks" >}}
Turn the worm and the wheel turns. Now try the reverse --- grab the wheel and try to turn it. It will not go. The screw thread simply jams against the teeth.

This is called [[SELF-LOCKING|self-locking]], and it is why worm gears show up on robot arms everywhere.

Think back to Challenge 5. Your Big Arm needed the motor working constantly just to hold a load in the air. On a worm drive it would not --- cut the power and the arm stays exactly where it is, holding its position with no motor effort at all.
{{< /callout >}}

{{< callout title="What You Give Up" variant="navy" >}}
Gears are still not magic. A 24:1 ratio means the output turns 24 times slower than the input. A worm drive is also less efficient than spur gears --- a good deal of the motor's effort goes into friction between the screw and the teeth rather than into useful work.

You buy torque, holding power, and a right-angle turn. You pay in speed and in wasted energy.
{{< /callout >}}

Name one job on a robot where you would want the output to hold its position after the power is cut. Why does that matter there?

{{< answer key="p2_selflock_use" label="Self-locking application" >}}

## Phase 3 --- Build It and Check the Claims

Build the worm and worm wheel out of LEGO. Do not attach the arm or marker yet. Mount the worm so it meshes cleanly with the wheel and turn it by hand.

### Test 1 --- Count the Ratio Yourself

Put a mark on one tooth of the worm wheel. Now turn the worm slowly, counting full turns, until the mark comes all the way back around. The number of turns should equal the number of teeth on the wheel.

### Test 2 --- Try to Back-Drive It

Hold the worm loosely and try to turn the *wheel* by hand. Then try turning the worm. Note what happens in each direction.

{{< callout title="Before You Go On" variant="navy" >}}
Turn the worm through five full rotations. It should feel smooth and steady with no catching. Worm gears push sideways as well as around, so if your worm is not held firmly in place it will try to walk away from the wheel and skip.
{{< /callout >}}

How many turns of the worm did one full turn of the wheel take? How many teeth does your wheel have? Do they match?

{{< answer key="p3_ratio_count" label="Ratio count" >}}

What happened when you tried to turn the wheel by hand? Describe it.

{{< answer key="p3_backdrive" label="Back-drive test" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, modify and attach it in such a fashion that you can slowly rotate a marker to create a perfect circle.
{{< /callout >}}

### Mental Picture

Your contraption will act like a protractor --- one fixed center, one arm of fixed length, sweeping a smooth arc all the way around.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The overall device must be stationary. Only the worm gear and arm mechanism can move.
2.  The mechanism must draw a complete, closed circle.
3.  The motor lies flat on the surface, and the marker draws on that same surface. Turning the drive through 90° is the worm gear's job --- that is what makes this possible.
4.  The marker must move at a constant speed, and one full 360° circle must take more than 60 seconds.
5.  You may use rubber bands or tacky material to attach the marker to the arm.

{{< figrow tall=true >}}
- src: "mech09_worm_circle-diagram-02.svg"
  alt: "Side view. A motor lies flat on the table driving a worm. The worm turns a wheel whose shaft points straight up. An arm on that shaft carries a marker down onto the paper, where it traces a circle."
  caption: "Side view. The worm gear is what lets a flat-lying motor spin something about a vertical axis."
{{< /figrow >}}

### Your Plan --- Before You Build

How will you hold the marker so its tip stays pressed on the paper the whole way around, without dragging the arm off course?

{{< answer key="p4_marker_plan" label="Marker mounting plan" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your first circle take more or less than 60 seconds? Say why you think so.

{{< answer key="p4_predict_time" label="Time prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="Time It First" >}}
Run one full circle with a stopwatch before you change anything else. The 60-second requirement is the constraint most likely to fail on your first build, because a single worm pair may not slow things down as much as you expect.

If your circle finishes too fast, you have three ways to fix it: use a worm wheel with more teeth, add another reduction between the worm wheel and the arm, or lower the motor's power setting. The first two are mechanical solutions and will hold steady. Think about which one you would trust in a competition.
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
      text: "Teeth on your worm wheel"
    -
      key: "p5_teeth"
      aria: "Worm wheel teeth"
    -
      key: "p5_teeth_unit"
      aria: "Unit"
      value: "teeth"
  -
    -
      text: "Worm turns counted for one wheel turn"
    -
      key: "p5_turns"
      aria: "Worm turns"
    -
      key: "p5_turns_unit"
      aria: "Unit"
      value: "turns"
  -
    -
      text: "Extra reduction added, if any"
    -
      key: "p5_extra_ratio"
      aria: "Extra reduction"
    -
      key: "p5_extra_ratio_unit"
      aria: "Unit"
      value: ": 1"
  -
    -
      text: "Length of your arm, center to marker"
    -
      key: "p5_arm_length"
      aria: "Arm length"
    -
      key: "p5_arm_length_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Diameter of the circle you drew"
    -
      key: "p5_circle_diameter"
      aria: "Circle diameter"
    -
      key: "p5_circle_diameter_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Time for one full circle, first attempt"
    -
      key: "p5_time_first"
      aria: "First time"
    -
      key: "p5_time_first_unit"
      aria: "Unit"
      value: "seconds"
  -
    -
      text: "Time for one full circle, final build"
    -
      key: "p5_time_final"
      aria: "Final time"
    -
      key: "p5_time_final_unit"
      aria: "Unit"
      value: "seconds"
{{< /gridtable >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Time (s)"
- head: "Circle closed?"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_time"
      aria: "Trial 1 time"
    - key: "trial1_closed"
      aria: "Trial 1 circle closed"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_time"
      aria: "Trial 2 time"
    - key: "trial2_closed"
      aria: "Trial 2 circle closed"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_time"
      aria: "Trial 3 time"
    - key: "trial3_closed"
      aria: "Trial 3 circle closed"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_time"
      aria: "Trial 4 time"
    - key: "trial4_closed"
      aria: "Trial 4 circle closed"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_time"
      aria: "Trial 5 time"
    - key: "trial5_closed"
      aria: "Trial 5 circle closed"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_time"
      aria: "Trial 6 time"
    - key: "trial6_closed"
      aria: "Trial 6 circle closed"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_time"
      aria: "Trial 7 time"
    - key: "trial7_closed"
      aria: "Trial 7 circle closed"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_time"
      aria: "Trial 8 time"
    - key: "trial8_closed"
      aria: "Trial 8 circle closed"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_time"
      aria: "Trial 9 time"
    - key: "trial9_closed"
      aria: "Trial 9 circle closed"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_time"
      aria: "Trial 10 time"
    - key: "trial10_closed"
      aria: "Trial 10 circle closed"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_stationary"
  label: "The base did not shift, tip, or need a hand on it while running."
- key: "p5_check_closed"
  label: "The marker drew a complete circle that closed back on itself."
- key: "p5_check_flat"
  label: "The motor lay flat and the marker drew on that same surface."
- key: "p5_check_time"
  label: "Timed at more than 60 seconds for the full 360°."
- key: "p5_check_constant"
  label: "The marker moved at a constant speed --- no visible speeding up or slowing down."
- key: "p5_check_marker"
  label: "The marker stayed put in its mount for the whole circle."
{{< /checklist >}}

Look at the circle you drew. Is it actually round, or is it lumpy in places? If it is lumpy, what in the mechanism caused that?

{{< answer key="p5_roundness" label="Roundness analysis" >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
An arm that stays where you put it, with the motor switched off, is worth more than an arm that is merely strong.
{{< /callout >}}

A motor holding a load against gravity draws current the whole time, heats up, and drifts. A worm drive holds it for free. That single property is why worm gears turn up on lift arms, on camera mounts, and on anything that has to stop at a position and stay there.

Go back to your Big Arm from Challenge 5. If you rebuilt the shoulder joint on a worm drive, what would get better --- and what would get worse?

{{< answer key="p6_big_arm_rebuild" label="Big Arm rebuild" >}}

Name a Botball task where being slow is genuinely acceptable, and one where it would cost you the match.

{{< answer key="p6_slow_ok" label="When slow is acceptable" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain why the number of teeth on a worm wheel is the same as the gear ratio. Use the idea of a screw in your answer.

{{< answer key="p7_q1_ratio" label="Reflection 1" >}}

2\. Explain self-locking to someone who has never heard the word, and give one reason a robot builder would want it.

{{< answer key="p7_q2_selflock" label="Reflection 2" >}}

3\. You have now built a crank, a cam, a linkage, and a worm drive. Which one moves its output at the steadiest rate, and why does that suit this challenge?

{{< answer key="p7_q3_steady" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "A worm gear buys torque, holding power, and a right-angle turn. This means that when I need those things, I should --- and when I need speed instead, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Slowest Circle

- Add reduction until a single circle takes more than 5 minutes.
- What total ratio did that take? Show how you worked it out.
- At what point does the mechanism become so slow that friction stalls it entirely?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- The Holding Test

- Hang a weight on the end of your arm and switch the motor off. Does the arm hold?
- Now rebuild the same arm driven by a spur gear pair instead, and repeat.
- How much weight can each version hold with the power off? Record both numbers.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Predict the Circle

- Measure your arm from the center of the shaft to the marker tip.
- Predict the diameter of the circle it will draw before you run it.
- Run it and measure. Was your prediction right? What is the relationship between arm length and circle diameter?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Draw Something Else

- Replace the fixed arm with a linkage from Challenge 8 and let the marker ride on the coupler.
- Run a full cycle and see what shape comes out.
- Why is it no longer a circle? Explain in terms of what the marker is attached to.

{{< answer key="ext_d" label="Extension D" >}}
