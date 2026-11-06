---
title: "Mechanical Design · Challenge 10 — The Worm-Driven Pincer"
short_title: "Challenge 10"
description: "One worm drives two gears in opposite directions — and the grip stays clamped after the motor stops."
mission_id: "mech10_worm_pincer"
mission_title: "Mechanical Design · Challenge 10 — The Worm-Driven Pincer"
eyebrow: "Mechanical Design · Challenge 10"
heading: "The Worm-Driven Pincer"
subheading: "Student Challenge · A Grip That Holds Without Power"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 10 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How do we combine two mechanisms we already know into something neither could do alone?"
  -
    term: "Big Idea"
    definition: "One [[WORM|worm]] can drive two gears in opposite directions at the same time."
  -
    term: "Mechanism"
    definition: "Worm-driven pincer"
  -
    term: "Design Concepts"
    definition: "[[MESH|Mesh]] · [[PINCER|Pincer]] · [[SELF-LOCKING|Self-locking]] · [[WORM WHEEL|Worm wheel]]"
  -
    term: "Materials"
    definition: "Kit parts only"
  -
    term: "What You Need"
    definition: "LEGO kit · worm gear · two matching gears · one motor · Wombat controller · an object 2--3″ across · ruler · stopwatch"
  -
    term: "Prerequisites"
    definition: "Challenge 3 for the pincer, Challenge 9 for the worm gear. This combines them."
weight: 11
hub_unit: 5
hub_title: "The Worm-Driven Pincer"
hub_label: "Challenge 10"
---

## Overview

This challenge does not introduce a new mechanism. It asks you to put two you already have together --- the pincer from Challenge 3 and the worm gear from Challenge 9 --- and it turns out the combination is better than either piece suggested.

Every gripper you have built so far needed the motor working the whole time it was holding something. Let go of the power and the grip goes with it. This one does not.

{{< callout title="Core Insight" >}}
A worm can mesh with two gears at once --- one above it, one below. Because they sit on opposite sides of the same screw, they are forced to turn in opposite directions. That is a pincer, with no second gear mesh and no idler.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain how one worm drives two gears in opposite directions.
- Build a [[PINCER|pincer]] from a worm drive rather than from meshed gears.
- Test whether a grip holds after the power is cut, and say why.
- Compare two ways of solving the same problem and judge which is better for a given job.

## Phase 1 --- Observe: Watch It Again

This is the same video you watched for Challenge 9. Watch it once more, but this time with a different question in mind: the worm has two sides. What could you put on the other one?

{{< youtube id="ORg4bBCemgs" title="LEGO worm gear" >}}

Simple mechanics --- LEGO worm gear.

{{< callout title="Watch For" variant="navy" >}}
1\. Where exactly does the screw touch the gear teeth?

2\. If you put a second gear on the opposite side of the worm, which way would it turn?

3\. Would both gears turn at the same speed?
{{< /callout >}}

Predict: with a second gear on the other side of the worm, would the two gears turn the same direction or opposite directions? Explain your reasoning before you read on.

{{< answer key="p1_predict_direction" label="Direction prediction" >}}

## Phase 2 --- Concept: One Worm, Two Gears

Think about where the screw thread pushes. As the worm turns, its thread travels along the worm's length, and it shoves whatever tooth it is touching in that same direction.

A gear sitting above the worm gets pushed at its lowest tooth. A gear sitting below gets pushed at its highest tooth. Same push, opposite ends of each gear --- so the two gears are forced to spin opposite ways.

{{< figrow tall=true >}}
- src: "mech10_worm_pincer-diagram-01.svg"
  alt: "A worm with one gear above it and one gear below. The thread pushes both gears in the same direction along the worm, but because it contacts the upper gear at its bottom and the lower gear at its top, the two gears rotate in opposite directions."
  caption: "The screw pushes both gears the same way along its length. Contacting them at opposite ends is what reverses one of them."
{{< /figrow >}}

{{< callout title="Compare to Challenge 3" variant="navy" >}}
In Challenge 3 you got two arms moving toward each other by meshing two gears directly together. That worked, and it needed the two gears touching each other.

Here the two gears never touch. The worm alone does the whole job, and it adds an enormous reduction on the way through --- which means the grip is far stronger for the same motor.
{{< /callout >}}

### And the Grip Stays

Remember from Challenge 9: a worm drive is [[SELF-LOCKING|self-locking]]. The worm can turn the gears, but the gears cannot turn the worm.

Applied to a pincer, that means something genuinely useful. Close the jaws on an object, cut the power, and the object stays clamped. The gears cannot spread apart, because spreading apart would require them to back-drive the screw --- and they cannot.

Your Challenge 3 pincer needed the motor holding it closed the whole time. Name one problem that causes over a long match.

{{< answer key="p2_holding_problem" label="Problem with powered holding" >}}

## Phase 3 --- Build the Bare Mechanism

Mount the worm so it meshes with two gears, one on each side. Do not attach arms yet. Both gears must engage the screw firmly --- a gear that only just touches will skip under load.

{{< callout title="Before You Go On" variant="navy" >}}
Turn the worm by hand. Both gears should turn together, in opposite directions, smoothly. If only one turns, that gear is meshed and the other is not. If either one clicks or jumps, the spacing is wrong.

Worms push sideways as well as around. Brace the worm at both ends or it will walk out of mesh the moment there is load on it.
{{< /callout >}}

### Test the Lock

Hold one gear and try to turn it by hand. Then turn the worm instead. Note what happens each way --- you will use this in Phase 5.

Did both gears turn in opposite directions on the first try? If not, what was wrong?

{{< answer key="p3_both_turn" label="Both gears turning" >}}

What happened when you tried to turn a gear by hand?

{{< answer key="p3_lock_test" label="Lock test" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, modify and attach it in such a fashion that it drives both arms of a pincer contraption.
{{< /callout >}}

### Mental Picture

Think of a vise or a C-clamp on a workbench. You turn the screw, the jaws close on the work --- and then you let go of the handle entirely and it stays clamped. The screw is what makes that possible.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The overall device must be stationary. Only the worm gear driven pincer apparatus can move.
2.  Both arms of the pincer must move. Neither side may be fixed.
3.  The pincer must close on an object between 2 and 3 inches across.
4.  Once closed, the pincer must hold that object for at least 10 seconds without slipping while you tug on it gently.
5.  Your device must grab and hold successfully on more than 90% of attempts, counted over at least 10 tries.
6.  Kit parts only.

### Visual Representation

{{< figrow tall=true >}}
- src: "mech10_worm_pincer-diagram-02.svg"
  alt: "Top view. A stationary base at the left carries a worm running to the right. One gear sits above the worm and one below, each carrying a long arm that extends to the right. The two arms splay apart when open and swing together to grip an object between their tips."
  caption: "Top view. One worm, two gears, two arms. Grey shows the pincer open; red dashed shows it closed on the object."
{{< /figrow >}}

### Your Plan --- Before You Build

What object are you gripping, and how wide is it?

{{< answer key="p4_object" label="Object description" >}}

How will you keep the worm from walking out of mesh when the arms push back against it?

{{< answer key="p4_bracing" label="Bracing plan" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: compared to your Challenge 3 pincer, will this one grip harder or more gently? Say why.

{{< answer key="p4_predict_grip" label="Grip prediction" >}}

## Phase 5 --- Test & Iterate

### The Power-Off Test

{{< callout title="Not Required --- But Do It Anyway" >}}
Close the pincer on your object. Now cut the power to the motor completely and let go.

Record what happens. If the grip holds, your worm drive is doing something none of your earlier grippers could do. If it slips, find out why --- a worm that can be back-driven usually means the mesh is loose or the arms are flexing rather than the gears turning.
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
      text: "Width of the object you gripped"
    -
      key: "p5_object_width"
      aria: "Object width"
    -
      key: "p5_object_width_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Teeth on each gear"
    -
      key: "p5_teeth"
      aria: "Gear teeth"
    -
      key: "p5_teeth_unit"
      aria: "Unit"
      value: "teeth"
  -
    -
      text: "Gap between the tips when fully open"
    -
      key: "p5_open_gap"
      aria: "Open gap"
    -
      key: "p5_open_gap_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Seconds to close from fully open"
    -
      key: "p5_close_time"
      aria: "Close time"
    -
      key: "p5_close_time_unit"
      aria: "Unit"
      value: "seconds"
  -
    -
      text: "Did the grip hold with the power off?"
    -
      key: "p5_poweroff_hold"
      aria: "Power off hold"
    -
      key: "p5_poweroff_hold_unit"
      aria: "Unit"
      value: "yes / no"
  -
    -
      text: "Longest it held with the power off"
    -
      key: "p5_poweroff_time"
      aria: "Power off duration"
    -
      key: "p5_poweroff_time_unit"
      aria: "Unit"
      value: "seconds"
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
- head: "Gripped it?"
- head: "Held 10 s?"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_gripped"
      aria: "Trial 1 gripped"
    - key: "trial1_held"
      aria: "Trial 1 held ten seconds"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_gripped"
      aria: "Trial 2 gripped"
    - key: "trial2_held"
      aria: "Trial 2 held ten seconds"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_gripped"
      aria: "Trial 3 gripped"
    - key: "trial3_held"
      aria: "Trial 3 held ten seconds"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_gripped"
      aria: "Trial 4 gripped"
    - key: "trial4_held"
      aria: "Trial 4 held ten seconds"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_gripped"
      aria: "Trial 5 gripped"
    - key: "trial5_held"
      aria: "Trial 5 held ten seconds"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_gripped"
      aria: "Trial 6 gripped"
    - key: "trial6_held"
      aria: "Trial 6 held ten seconds"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_gripped"
      aria: "Trial 7 gripped"
    - key: "trial7_held"
      aria: "Trial 7 held ten seconds"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_gripped"
      aria: "Trial 8 gripped"
    - key: "trial8_held"
      aria: "Trial 8 held ten seconds"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_gripped"
      aria: "Trial 9 gripped"
    - key: "trial9_held"
      aria: "Trial 9 held ten seconds"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_gripped"
      aria: "Trial 10 gripped"
    - key: "trial10_held"
      aria: "Trial 10 held ten seconds"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_stationary"
  label: "The base did not shift, tip, or need a hand on it while running."
- key: "p5_check_botharms"
  label: "Both arms move. Neither side is fixed."
- key: "p5_check_size"
  label: "Closed on an object between 2 and 3 inches across."
- key: "p5_check_hold"
  label: "Held the object for 10 seconds under a gentle tug, without slipping."
- key: "p5_check_rate"
  label: "Worked on more than 90% of attempts, counted over at least 10 tries."
- key: "p5_check_materials"
  label: "Kit parts only."
{{< /checklist >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

Go get your Challenge 3 pincer if you still have it, or rebuild it quickly. Grip the same object with both. Which grips harder, and which closes faster?

{{< answer key="p5_compare" label="Comparison to Challenge 3" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
A robot has a limited number of motors and a limited amount of current. A gripper that holds for free gives you back both.
{{< /callout >}}

Once an object is clamped in a worm-driven pincer, that motor is finished with the job. It can be switched off, and on some robots it can even be reused for something else. Compare that to a gripper that must be held closed for the entire match.

Name a Botball task where a robot has to hold something for a long stretch while doing something else. What does the worm drive buy you there?

{{< answer key="p6_botball_hold" label="Botball holding application" >}}

Now argue the other side. Name a task where you would choose the Challenge 3 pincer over this one, and say why.

{{< answer key="p6_argue_other" label="Argument for the simpler pincer" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain why two gears on opposite sides of the same worm turn in opposite directions.

{{< answer key="p7_q1_opposite" label="Reflection 1" >}}

2\. A vise stays clamped after you let go of the handle. Explain what a vise and your pincer have in common.

{{< answer key="p7_q2_vise" label="Reflection 2" >}}

3\. You have now built the same thing --- a pincer --- two different ways. What did building it a second way teach you that building it once did not?

{{< answer key="p7_q3_two_ways" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "Two mechanisms I already know can combine into something neither could do alone. This means that when I face a new problem, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- The Hold Contest

- Clamp an object, cut the power, and hang weight from it until the grip finally gives.
- Do the same with your Challenge 3 pincer, power on, and record both numbers.
- Which holds more? Was the difference as large as you expected?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Don't Crush It

- Grip something fragile --- a paper cup, an empty can, a cracker.
- A worm drive is strong enough to destroy it. How do you stop the mechanism at the right moment?
- Solve it mechanically rather than by timing the motor carefully. What did you add?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Uneven Arms

- Use gears with different tooth counts on the two sides.
- Predict what happens to the two arms before you run it.
- Is the result useful for anything, or just wrong? Defend your answer.

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Open It Faster

- Your worm drive is slow. Time how long a full open-and-close cycle takes.
- Get it faster without giving up the power-off hold.
- What did you change, and what did it cost you?

{{< answer key="ext_d" label="Extension D" >}}
