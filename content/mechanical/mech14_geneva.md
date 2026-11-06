---
title: "Mechanical Design · Challenge 14 — The Geneva Drive"
short_title: "Challenge 14"
description: "Four exact stops every minute, locked in place by shape between each one. Dwell is the useful part."
mission_id: "mech14_geneva"
mission_title: "Mechanical Design · Challenge 14 — The Geneva Drive"
eyebrow: "Mechanical Design · Challenge 14"
heading: "The Geneva Drive"
subheading: "Student Challenge · Four Stops, Every Sixty Seconds"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 14 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How do we make something move in exact steps, and hold perfectly still in between?"
  -
    term: "Big Idea"
    definition: "A [[GENEVA DRIVE|Geneva drive]] converts steady rotation into a repeating cycle of one precise step and one long stop."
  -
    term: "Mechanism"
    definition: "Geneva drive, also called the Maltese cross mechanism"
  -
    term: "Design Concepts"
    definition: "[[INDEXING|Indexing]] · [[DWELL|Dwell]] · [[DRIVE PIN|Drive pin]] · [[LOCKING|Locking]]"
  -
    term: "Materials"
    definition: "Kit parts only"
  -
    term: "What You Need"
    definition: "LEGO kit · one motor · Wombat controller · gears for reduction · a stopwatch"
  -
    term: "Prerequisites"
    definition: "Challenge 7 for intermittent motion, Challenge 9 if you need a big slowdown"
weight: 15
hub_unit: 5
hub_title: "The Geneva Drive"
hub_label: "Challenge 14"
---

## Overview

Your cam in Challenge 7 gave you motion that happened only part of the time. That was useful, but it was rough --- the follower rose and fell wherever the cam profile happened to put it, and nothing held it still.

This mechanism does the same job with precision. It moves its output exactly one quarter turn, stops it dead, holds it locked in place, then moves it exactly one quarter turn again. The stops are not approximate. They are the same four positions every single cycle, forever.

{{< callout title="About the Name" variant="navy" >}}
You may see this called the *Maltese mechanism*, because the slotted wheel is shaped like a Maltese cross. Engineers usually call it a **Geneva drive**, after the Geneva-made watch movements it was first used in. If you go looking for more information, search for the Geneva drive --- you will find far more.
{{< /callout >}}

{{< callout title="Core Insight" >}}
Most mechanisms are built to move something. This one is built to move something and then *refuse to let it move* until the next step is due.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Name the parts of a Geneva drive and explain how the pin and slot work together.
- Explain what [[DWELL|dwell]] is and why this mechanism has so much of it.
- Explain how the drive locks its output between steps.
- Tune a mechanism to hit a timing target by measuring and adjusting.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="MTrv1-tQh_s" title="LEGO Maltese cross mechanism" >}}

Simple mechanics --- LEGO Maltese cross, or Geneva drive.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Count how many times the driving wheel goes around for one complete turn of the slotted wheel.
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

How many turns of the driver did it take for one full turn of the slotted wheel? What does that number have to do with the number of slots?

{{< answer key="p1_count" label="Turn count" >}}

Between steps, does the slotted wheel drift or wobble at all, or does it hold completely still?

{{< answer key="p1_hold" label="Holding observation" >}}

## Phase 2 --- Concept: How a Geneva Drive Works

There are two wheels. The **driver** turns continuously, carrying a [[DRIVE PIN|drive pin]] near its edge. The **slotted wheel** --- the Maltese cross --- is the output, and it has slots cut inward from its rim.

Once per turn of the driver, the pin swings into one of those slots. While it is inside, it pushes the slot sideways and rotates the cross by exactly one step. Then the pin leaves the slot and the cross stops.

{{< figrow tall=true >}}
- src: "mech14_geneva-diagram-01.svg"
  alt: "A Geneva drive. A driver wheel on the left carries a pin near its rim and a raised lock disc. A slotted cross on the right has four slots cut in from the rim. The pin enters a slot, turns the cross a quarter turn, then leaves, and the lock disc holds the cross still until the next pass."
  caption: "The pin is about to enter the left slot. One pass through a slot moves the cross a quarter turn."
{{< /figrow >}}

### Four Slots Means Four Turns

Each pass of the pin advances the cross by one slot. With four slots, the cross needs four passes to come all the way around --- which means the driver turns four times for every one turn of the output.

That is a 4:1 slowdown before you add any gears at all, and it comes with something gears cannot give you: exact, repeatable stopping positions.

### Dwell --- the Part Where Nothing Happens

The pin is only inside a slot for a small portion of the driver's turn. For the rest of it, the pin is swinging around outside the cross doing nothing at all, and the cross sits motionless.

That motionless stretch has a name: [[DWELL|dwell]]. In a Geneva drive, most of every cycle is dwell.

{{< figrow tall=true >}}
- src: "mech14_geneva-diagram-02.svg"
  alt: "A graph of the arm's position over one minute. The line is flat for fifteen seconds, then jumps up, then is flat again for fifteen seconds, and so on, four times. The flat stretches are labelled dwell and the jumps are labelled index."
  caption: "Four quick steps and four long stops. The steps are what you notice; the stops are what the mechanism is for."
{{< /figrow >}}

### The Part That Does the Locking

Look at the raised disc on the driver, around its center. While the pin is outside the slots, that disc rides against the curved cutouts on the edge of the cross --- and its shape physically blocks the cross from turning.

This is [[LOCKING|locking]], and it is the difference between this and the cam. Nudge the arm of a cam-driven mechanism and it moves. Nudge the arm here and nothing happens. It is not being held by friction or by the motor. It is held by shape.

Compare this to the cam from Challenge 7. Both give you motion that happens only part of the time. Name two things the Geneva drive does that the cam cannot.

{{< answer key="p2_vs_cam" label="Comparison to the cam" >}}

## Phase 3 --- Build the Bare Mechanism

Build the driver, the pin, and the slotted cross. Do not worry about timing yet --- get the indexing working first.

{{< callout title="Before You Go On" variant="navy" >}}
Turn the driver by hand through eight full rotations, slowly. Watch for three things: the pin should enter each slot cleanly without catching on the slot mouth, the cross should advance exactly one slot per pass, and the cross should not creep at all between passes.

If the pin jams entering a slot, the slot mouth needs to be wider or the pin needs to sit at a different radius. If the cross drifts between passes, your locking is not working --- that is normal on a first build, and it is what you fix next.
{{< /callout >}}

### Add the Locking

Once indexing works, add something to the driver that blocks the cross between passes. A raised disc is the usual answer, but any shape that fills the gap and clears the slot mouth at the right moment will do.

Test it by trying to turn the cross by hand while the pin is outside a slot. It should refuse.

Did the pin enter cleanly on the first build? What did you change?

{{< answer key="p3_pin_entry" label="Pin entry" >}}

Describe how you locked the cross between steps, and how you tested that it was actually locked.

{{< answer key="p3_locking" label="Locking method" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, modify and attach it in such a fashion that it will function as a clock, completing one full rotation every 60 seconds and having 4 distinct positions that occur at 15-second increments.
{{< /callout >}}

### Mental Picture

Think of a clock with only four marks on its face --- and a hand that does not sweep. It sits on one mark, then jumps to the next.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The overall device must be stationary, with only the arm rotating.
2.  The rotation of the clock arm cannot be continuous. It must be distinct in its segments.
3.  The arm must complete one full rotation every 60 seconds.
4.  The arm must have 4 distinct positions, reached at 15-second increments.
5.  Run it for three full minutes without resetting. Every step must land within 2 seconds of its target time.
6.  Kit parts only.

{{< callout title="Getting to 60 Seconds" >}}
Your motor spins far too fast for this. Even with the Geneva drive's own 4:1 slowdown, the arm will race around in a few seconds on your first build.

You will need a lot of reduction between the motor and the driver. Do not try to calculate it --- build something, time it with a stopwatch, and then add or remove reduction until the arm comes around in 60 seconds. Getting there by measuring and adjusting is exactly how this would be done in practice.

If you need a very large slowdown in a small space, remember what the worm gear in Challenge 9 could do from a single pair of parts.
{{< /callout >}}

### Your Plan --- Before You Build

How are you getting the driver down to roughly one turn every 15 seconds? Describe your reduction plan.

{{< answer key="p4_reduction_plan" label="Reduction plan" >}}

How will you mark the four positions so you can tell whether the arm is landing in the same places every cycle?

{{< answer key="p4_marking" label="Position marking" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your first build be too fast or too slow? By roughly how much?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="How to Tune It" >}}
Time one full rotation of the arm. If it takes 20 seconds, you need three times as much reduction. If it takes 100 seconds, you need less. Change one thing, time it again, and record both numbers.

Do not adjust motor power to fix the timing. Power settings drift as the battery drains, and a clock that runs fast when the battery is fresh is not a clock. Fix it with gears.
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
      text: "Slots on your cross"
    -
      key: "p5_slots"
      aria: "Slot count"
    -
      key: "p5_slots_unit"
      aria: "Unit"
      value: "slots"
  -
    -
      text: "Driver turns for one full turn of the arm"
    -
      key: "p5_driver_turns"
      aria: "Driver turns"
    -
      key: "p5_driver_turns_unit"
      aria: "Unit"
      value: "turns"
  -
    -
      text: "Time for one full rotation, first build"
    -
      key: "p5_time_first"
      aria: "First time"
    -
      key: "p5_time_first_unit"
      aria: "Unit"
      value: "seconds"
  -
    -
      text: "Time for one full rotation, final build"
    -
      key: "p5_time_final"
      aria: "Final time"
    -
      key: "p5_time_final_unit"
      aria: "Unit"
      value: "seconds"
  -
    -
      text: "Time the arm spends actually moving, per step"
    -
      key: "p5_index_time"
      aria: "Index time"
    -
      key: "p5_index_time_unit"
      aria: "Unit"
      value: "seconds"
  -
    -
      text: "Time the arm spends stopped, per step"
    -
      key: "p5_dwell_time"
      aria: "Dwell time"
    -
      key: "p5_dwell_time_unit"
      aria: "Unit"
      value: "seconds"
  -
    -
      text: "Worst error over three minutes"
    -
      key: "p5_worst_error"
      aria: "Worst error"
    -
      key: "p5_worst_error_unit"
      aria: "Unit"
      value: "seconds"
{{< /gridtable >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Full rotation (s)"
- head: "All 4 stops distinct?"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_time"
      aria: "Trial 1 full rotation time"
    - key: "trial1_stops"
      aria: "Trial 1 four stops distinct"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_time"
      aria: "Trial 2 full rotation time"
    - key: "trial2_stops"
      aria: "Trial 2 four stops distinct"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_time"
      aria: "Trial 3 full rotation time"
    - key: "trial3_stops"
      aria: "Trial 3 four stops distinct"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_time"
      aria: "Trial 4 full rotation time"
    - key: "trial4_stops"
      aria: "Trial 4 four stops distinct"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_time"
      aria: "Trial 5 full rotation time"
    - key: "trial5_stops"
      aria: "Trial 5 four stops distinct"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_time"
      aria: "Trial 6 full rotation time"
    - key: "trial6_stops"
      aria: "Trial 6 four stops distinct"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_time"
      aria: "Trial 7 full rotation time"
    - key: "trial7_stops"
      aria: "Trial 7 four stops distinct"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_time"
      aria: "Trial 8 full rotation time"
    - key: "trial8_stops"
      aria: "Trial 8 four stops distinct"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_time"
      aria: "Trial 9 full rotation time"
    - key: "trial9_stops"
      aria: "Trial 9 four stops distinct"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_time"
      aria: "Trial 10 full rotation time"
    - key: "trial10_stops"
      aria: "Trial 10 four stops distinct"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_stationary"
  label: "The base stayed still. Only the arm rotated."
- key: "p5_check_stepped"
  label: "The arm's motion is stepped, not continuous."
- key: "p5_check_minute"
  label: "One full rotation takes 60 seconds."
- key: "p5_check_four"
  label: "The arm reaches 4 distinct positions, 15 seconds apart."
- key: "p5_check_threemin"
  label: "Ran three full minutes with every step landing within 2 seconds of target."
- key: "p5_check_locked"
  label: "The arm cannot be turned by hand between steps."
- key: "p5_check_materials"
  label: "Kit parts only."
{{< /checklist >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

Did the error grow over three minutes, or stay steady? What does that tell you about where the error is coming from?

{{< answer key="p5_drift" label="Error drift" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Sometimes the hard part is not getting something to a position. It is getting it to the *same* position, every time, without a sensor telling you where it is.
{{< /callout >}}

A Geneva drive gives you that for free. The stopping positions are built into the shape of the parts, so they cannot drift, cannot be knocked off, and do not need to be checked. Run the motor for long enough and the output will be at one of exactly four places.

Name a Botball task where a mechanism needs to stop at the same few positions repeatedly. Would you solve it mechanically like this, or with a sensor and code? Defend your choice.

{{< answer key="p6_botball_index" label="Botball indexing application" >}}

This mechanism spends most of its time doing nothing. Explain to someone who thinks that is wasteful why the dwell is the useful part.

{{< answer key="p6_dwell_value" label="Value of dwell" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain in your own words what dwell is, using your clock as the example.

{{< answer key="p7_q1_dwell" label="Reflection 1" >}}

2\. The cross is held still between steps by shape rather than by the motor. Explain why that is better than holding it with the motor.

{{< answer key="p7_q2_locking" label="Reflection 2" >}}

3\. You tuned the timing by measuring and adjusting instead of calculating. What was good about working that way, and what was frustrating?

{{< answer key="p7_q3_tuning" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "Some mechanisms are built to hold still as much as to move. This means that when a design keeps ending up in the wrong place, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Six Stops

- Rebuild the cross with six slots instead of four.
- Predict how many driver turns one full output rotation will now take, then check it.
- What happens to the length of each dwell? Time it and explain the result.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Split the Cycle

- Time how long the arm is moving and how long it is stopped, in one 15-second step.
- Work out what fraction of the cycle is dwell.
- Could you make the moving part faster without changing the 60-second total? What would you have to change?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Break the Lock

- Remove your locking disc and run the clock again.
- Try to nudge the arm between steps. How far can you move it?
- Run three minutes without the lock and measure the worst error. How much was the lock worth?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Cam Clock

- Try to build the same four-position clock using a cam from Challenge 7 instead.
- Where does it fall short? Be specific about which requirement it fails.
- What does that tell you about choosing a mechanism to match a requirement?

{{< answer key="ext_d" label="Extension D" >}}
