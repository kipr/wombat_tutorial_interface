---
title: "Mechanical Design · Challenge 13 — The Bevel Drive"
short_title: "Challenge 13"
description: "A second way to turn a corner, and why a worm gear would ruin this one. The first build that drives."
mission_id: "mech13_bevel_drive"
mission_title: "Mechanical Design · Challenge 13 — The Bevel Drive"
eyebrow: "Mechanical Design · Challenge 13"
heading: "The Bevel Drive"
subheading: "Student Challenge · Turning a Corner Without Losing Anything"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 13 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "We already have one way to turn a drive through 90°. Why would we need another?"
  -
    term: "Big Idea"
    definition: "[[BEVEL GEAR|Bevel gears]] pass power around a corner while keeping the speed and most of the efficiency."
  -
    term: "Mechanism"
    definition: "Bevel gear pair"
  -
    term: "Design Concepts"
    definition: "[[INTERSECTING AXES|Intersecting axes]] · [[EFFICIENCY|Efficiency]] · [[BACK-DRIVABLE|Back-drivable]] · [[CHASSIS|Chassis]]"
  -
    term: "Materials"
    definition: "Kit parts, or a custom chassis"
  -
    term: "What You Need"
    definition: "LEGO kit · bevel gears · one or two motors · Wombat controller · wheels · a chassis · a tape measure · open floor"
  -
    term: "Prerequisites"
    definition: "Challenge 9 for the worm gear. You will compare the two directly."
weight: 14
hub_unit: 5
hub_title: "The Bevel Drive"
hub_label: "Challenge 13"
---

## Overview

You already know how to turn a drive through 90°. The worm gear in Challenge 9 did exactly that. So why is there a second challenge about the same problem?

Because a worm gear would be a terrible way to drive a wheel, and understanding *why* is the point of this challenge.

{{< callout title="Core Insight" >}}
Two mechanisms can solve the same geometric problem and still be completely different tools. The worm buys you huge reduction and a grip that holds. Bevel gears buy you speed and efficiency. Which one you want depends on the job, not on the geometry.
{{< /callout >}}

{{< callout title="This One Drives" variant="navy" >}}
Every challenge so far has started with "the overall device must be stationary." This one does not. You are building a vehicle that moves under its own power, on a [[CHASSIS|chassis]], across the floor.

That changes how you test. A mechanism that works on the bench can still fail once the whole thing is rolling.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain how bevel gears differ from a worm gear, in geometry and in behavior.
- Say why a wheel drive wants a [[BACK-DRIVABLE|back-drivable]] mechanism, not a self-locking one.
- Build a chassis where the motor points one way and the wheels turn another.
- Test a moving vehicle for repeatability rather than a bench mechanism.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="IhglF4fMY9c" title="LEGO bevel drive" >}}

Simple mechanics --- LEGO bevel drive.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Compare the input speed to the output speed. Is the output slower, like the worm gear was?
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

This turns the drive through 90°, and so did the worm gear in Challenge 9. Name one thing that is clearly different about this one.

{{< answer key="p1_difference" label="Difference from worm" >}}

## Phase 2 --- Concept: Bevel Gears, and Why Not a Worm

A [[BEVEL GEAR|bevel gear]] is an ordinary gear whose teeth are cut on a slanted face instead of a straight rim --- the body is shaped like a cone with its point cut off. Mesh two of them and the drive turns a corner.

The teeth themselves behave exactly like spur gear teeth. They roll against each other, the tooth counts set the ratio, and very little is lost along the way.

### The Geometry Is Different

Both mechanisms turn the drive 90°, but they do it differently, and the difference is easy to see once you look for it.

{{< figrow tall=true >}}
- src: "mech13_bevel_drive-diagram-01.svg"
  alt: "A comparison of two right-angle drives. In a worm drive the worm's axis and the wheel's axis are perpendicular but offset, so they never meet. In a bevel drive the two axes are perpendicular and cross at a single point where the two cones meet."
  caption: "The worm sits beside its wheel. Bevel gears meet corner to corner."
{{< /figrow >}}

### The Behavior Is Very Different

|  | Worm drive | Bevel drive |
| --- | --- | --- |
| Ratio from one pair | Huge --- the wheel's whole tooth count, often 24:1 | Ordinary --- set by tooth counts, often 1:1 |
| Speed at the output | Much slower than the motor | Can be exactly the motor's speed |
| Efficiency | Poor --- the screw slides against the teeth and wastes energy as heat | High --- the teeth roll against each other, like spur gears |
| Can the output drive the input? | No. It self-locks. | Yes, freely. |
| Best used for | Holding a position, or a big slowdown in a small space | Passing power around a corner without giving up speed |

{{< callout title="Why a Worm Would Ruin This Vehicle" >}}
Look at the row about self-locking. On a gripper that was the best feature the worm had. On a wheel it is a disaster.

A self-locking drive cannot coast. The vehicle stops dead the instant power is cut, you cannot push it by hand, and it fights every bump instead of rolling over it. Add the 24:1 slowdown and the wasted energy, and you have a vehicle that is slow, inefficient, and awkward.

Driving a wheel is the case where you want the exact opposite of everything a worm gear offers.
{{< /callout >}}

{{< callout title="You Have Seen This Before" variant="navy" >}}
Go back to Challenge 1 and the automotive differential. The reason a car's driveshaft can run front to back while its wheels turn side to side is a pair of bevel gears inside the differential housing.

You met this mechanism on the first day of the module, before you had a name for it.
{{< /callout >}}

Name one job on a robot where you would deliberately pick the worm over bevel gears, even knowing everything in the table above.

{{< answer key="p2_pick_worm" label="When to pick the worm" >}}

## Phase 3 --- Build the Bare Mechanism

Mesh two bevel gears at right angles. Do not build the chassis yet --- get the gear pair turning cleanly on its own first.

{{< callout title="Before You Go On" variant="navy" >}}
Turn the input by hand through five full rotations. The output should turn smoothly with no clicking or grinding.

Bevel gears push each other *apart* along their shafts as they work --- that is what the slanted teeth do. If your shafts are not held firmly at the right spacing, the gears will separate under load and skip. Brace both shafts before you put a motor on it.
{{< /callout >}}

### Test the Difference

Turn the output gear by hand and see whether it drives the input backwards. Compare that to what happened when you tried the same thing on your worm gear in Challenge 9.

Did the output drive the input? Describe what happened, and how it differed from the worm.

{{< answer key="p3_backdrive" label="Back-drive test" >}}

Count the teeth on both gears. What is your ratio, and how does the output speed compare to the input?

{{< answer key="p3_ratio" label="Ratio" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, modify and attach it in such a fashion that it will turn a wheel perpendicular to the rotation of the drive motor.
{{< /callout >}}

### Mental Picture

Think of a rear-wheel-drive car. The engine sits at the front and its driveshaft runs the length of the car, front to back. The wheels turn on an axle that runs side to side. Somewhere under the back of the car, a pair of bevel gears makes that corner --- the same corner you are about to build.

### Constraints

Every one of these must be true for your design to count as finished.

1.  Your vehicle may use one motor driving a single bevel system, or two motors each driving their own bevel system.
2.  The bevel system must be firmly attached to a LEGO or custom chassis.
3.  The wheel must turn on an axis perpendicular to the motor's drive shaft.
4.  If you build a single bevel system, decide in advance whether your vehicle will travel in a straight line or turn --- then make it do that same thing every run.
5.  The vehicle must travel at least 24 inches under its own power, doing what you said it would do, on more than 90% of attempts over at least 10 runs.

### Visual Representation

{{< figrow tall=true >}}
- src: "mech13_bevel_drive-diagram-02.svg"
  alt: "Top view of the vehicle. A motor at the left drives a shaft running to the right. At the end of the shaft a pair of bevel gears turns the drive ninety degrees onto an axle running toward the bottom of the page, where a wheel is mounted. The whole assembly sits on a chassis, and the vehicle travels left to right."
  caption: "Top view. The motor points along the vehicle; the wheel turns across it."
{{< /figrow >}}

### Your Plan --- Before You Build

One bevel system or two? Straight line or turn? Decide now and write it down.

{{< answer key="p4_decision" label="Design decision" >}}

How will you keep the two bevel gears from pushing apart under load?

{{< answer key="p4_bracing" label="Bracing plan" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your vehicle fail first by the gears skipping, by wandering off course, or by not having enough grip to move?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="Testing a Vehicle Is Different" >}}
A bench mechanism either works or it does not. A vehicle can work and still be wrong, because it drifts.

Mark a start line and a straight reference line on the floor. Run the vehicle 24 inches and measure how far sideways it ended up from that line. Do it ten times. A vehicle that lands in a different place every run has not met the need, even if it moved every time.
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
      text: "Teeth on the drive bevel gear"
    -
      key: "p5_drive_teeth"
      aria: "Drive teeth"
    -
      key: "p5_drive_teeth_unit"
      aria: "Unit"
      value: "teeth"
  -
    -
      text: "Teeth on the driven bevel gear"
    -
      key: "p5_driven_teeth"
      aria: "Driven teeth"
    -
      key: "p5_driven_teeth_unit"
      aria: "Unit"
      value: "teeth"
  -
    -
      text: "Your bevel ratio"
    -
      key: "p5_ratio"
      aria: "Ratio"
    -
      key: "p5_ratio_unit"
      aria: "Unit"
      value: ": 1"
  -
    -
      text: "Angle between the motor shaft and the wheel axle"
    -
      key: "p5_angle"
      aria: "Shaft angle"
    -
      key: "p5_angle_unit"
      aria: "Unit"
      value: "degrees"
  -
    -
      text: "Distance traveled in 5 seconds"
    -
      key: "p5_distance5"
      aria: "Distance in five seconds"
    -
      key: "p5_distance5_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Sideways drift over 24 inches, worst run"
    -
      key: "p5_drift"
      aria: "Drift"
    -
      key: "p5_drift_unit"
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
      text: "Runs that did what you predicted"
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
- head: "Went 24″?"
- head: "Drift (in)"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_distance"
      aria: "Trial 1 went 24 inches"
    - key: "trial1_drift"
      aria: "Trial 1 drift"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_distance"
      aria: "Trial 2 went 24 inches"
    - key: "trial2_drift"
      aria: "Trial 2 drift"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_distance"
      aria: "Trial 3 went 24 inches"
    - key: "trial3_drift"
      aria: "Trial 3 drift"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_distance"
      aria: "Trial 4 went 24 inches"
    - key: "trial4_drift"
      aria: "Trial 4 drift"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_distance"
      aria: "Trial 5 went 24 inches"
    - key: "trial5_drift"
      aria: "Trial 5 drift"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_distance"
      aria: "Trial 6 went 24 inches"
    - key: "trial6_drift"
      aria: "Trial 6 drift"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_distance"
      aria: "Trial 7 went 24 inches"
    - key: "trial7_drift"
      aria: "Trial 7 drift"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_distance"
      aria: "Trial 8 went 24 inches"
    - key: "trial8_drift"
      aria: "Trial 8 drift"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_distance"
      aria: "Trial 9 went 24 inches"
    - key: "trial9_drift"
      aria: "Trial 9 drift"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_distance"
      aria: "Trial 10 went 24 inches"
    - key: "trial10_drift"
      aria: "Trial 10 drift"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_motors"
  label: "One motor with one bevel system, or two motors each with their own."
- key: "p5_check_chassis"
  label: "The bevel system is firmly attached to the chassis and does not shift while driving."
- key: "p5_check_perp"
  label: "The wheel turns on an axis perpendicular to the motor's drive shaft."
- key: "p5_check_behavior"
  label: "The vehicle did what you said it would --- straight line or turn --- every successful run."
- key: "p5_check_distance"
  label: "Traveled at least 24 inches under its own power."
- key: "p5_check_rate"
  label: "Succeeded on more than 90% of runs, counted over at least 10 tries."
{{< /checklist >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

Cut the power while the vehicle is moving. Does it coast, or stop dead? Explain what you saw using what you know about bevel gears.

{{< answer key="p5_coast" label="Coast test" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Motors are boxy and wheels are round, and they rarely want to point the same way. Where the motor can sit is one of the first things that decides what a robot looks like.
{{< /callout >}}

A bevel drive means a motor no longer has to line up with the wheel it turns. It can lie along the length of the robot, or stand upright, or tuck into whatever space is left over --- and the wheel still gets full speed.

Sketch or describe a robot layout that would only be possible because of a bevel drive. What does turning the corner let you fit in?

{{< answer key="p6_layout" label="Robot layout" >}}

You now know two right-angle drives. Write the one-sentence rule you would give a teammate for choosing between them.

{{< answer key="p6_rule" label="Selection rule" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Describe the geometric difference between a worm drive and a bevel drive, using the word *axes*.

{{< answer key="p7_q1_geometry" label="Reflection 1" >}}

2\. Self-locking was the best feature of the worm gear in Challenge 10 and would be a serious problem here. Explain why the same property can be good in one place and bad in another.

{{< answer key="p7_q2_context" label="Reflection 2" >}}

3\. This was your first build that had to drive rather than sit still. What did that change about how you tested it?

{{< answer key="p7_q3_mobile" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "Two mechanisms can solve the same problem and still be different tools. This means that when I already know one solution, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Build the Bad Version

- Replace the bevel pair with a worm drive and run the vehicle again.
- Time it over 24 inches, then try pushing it by hand with the power off.
- Record both results. Was the worm version as bad as the table predicted, or worse?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Two Systems

- If you built one bevel system, build the two-motor version now. If you built two, build the single.
- Measure the drift over 24 inches for both.
- Which is straighter, and why? Which would you take to a competition?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Change the Ratio

- Use bevel gears with different tooth counts so the wheel turns slower than the motor.
- Time the vehicle over 24 inches before and after.
- Did it get slower by exactly the ratio you calculated? If not, where did the rest go?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Find the Differential

- Rewatch the differential video from Challenge 1, now that you know what a bevel gear is.
- Identify where the bevel gears are and what job each one does.
- Why does a differential need more than one pair? Answer in terms of the problem it was solving.

{{< answer key="ext_d" label="Extension D" >}}
