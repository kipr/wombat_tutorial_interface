---
title: "Mechanical Design · Challenge 4 — The Modified Pincer"
short_title: "Challenge 4"
description: "Gear ratios trade speed for torque, and swinging jaws tilt against a flat face. Gears are not magic."
mission_id: "mech04_modified_pincer"
mission_title: "Mechanical Design · Challenge 4 — The Modified Pincer"
eyebrow: "Mechanical Design · Challenge 4"
heading: "The Modified Pincer"
subheading: "Student Challenge · Gripping Flat Faces with Gear Ratios"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 4 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How do we control exactly how far each part of a mechanism moves?"
  -
    term: "Big Idea"
    definition: "The tooth counts of two meshed gears set the exact relationship between their motions."
  -
    term: "Design Concepts"
    definition: "[[GEAR RATIO|Gear ratio]] · [[DRIVE GEAR|Drive]] and [[DRIVEN GEAR|driven]] gears · [[TORQUE|Torque]] · [[RANGE OF MOTION|Range of motion]]"
  -
    term: "Materials"
    definition: "Kit parts only. No metal pieces other than screws, bolts, and nuts."
  -
    term: "What You Need"
    definition: "LEGO kit · assorted gears · one servo or motor · Wombat controller · a 4″ foam or cardboard cube · ruler · protractor"
  -
    term: "Prerequisite"
    definition: "Challenge 3 --- this rebuilds the pincer you already have"
weight: 5
hub_unit: 3
hub_title: "The Modified Pincer"
hub_label: "Challenge 4"
---

## Overview

Your Challenge 3 pincer grabs poms. Poms are soft, small, and round --- they do not care much where the jaws touch them.

Now you have to grab a 4-inch cube. A cube has flat sides, and this challenge demands that your jaws lie *along* those sides rather than poking at them. Try it with your existing pincer first. It will almost certainly fail, and the way it fails is the lesson.

{{< callout title="Core Insight" >}}
Gears do not just transmit motion --- they set the exact amount of it. Change the tooth counts and you change how far each arm swings.

That is the tool you need here, because the two sides of this grabber do not have to move the same distance.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Count teeth and calculate the [[GEAR RATIO|gear ratio]] between two meshed gears.
- Predict how far a driven gear turns when the drive gear turns once.
- Explain the trade between [[TORQUE|torque]] and speed.
- Use tooth counts to give two arms different [[RANGE OF MOTION|ranges of motion]] on purpose.

## Phase 1 --- Try It First, Then Read On

Take the pincer you built in Challenge 3 and try to grab the cube with it. Do not modify anything yet. Just try.

What happened? Where exactly did the jaws touch the cube?

{{< answer key="p1_first_try" label="First attempt with the old pincer" >}}

### Why It Fails

Arms that pivot swing through an arc. That means the jaw faces are only parallel to the cube at one exact moment of the swing --- and at the point where the jaws actually make contact, they are usually tilted. A tilted jaw touches a flat face at a corner, not along its length.

{{< figrow tall=true >}}
- src: "mech04_modified_pincer-diagram-01.svg"
  alt: "Two grippers on a cube. On the left, pivoting jaws are tilted and touch the cube only at single corner points, leaving wedge-shaped gaps. On the right, jaws parallel to the cube faces make full contact along three inches of each side."
  caption: "The constraint asking for 3″ of contact on both sides is really asking you to solve the tilt."
{{< /figrow >}}

There is more than one way out of this. You can add a second pivot at the jaw so it can swivel flat. You can build a linkage that keeps the jaws parallel. Or you can shorten the swing so the jaws barely rotate at all --- which is where gear ratios come in.

## Phase 2 --- Concept: Teeth, Mesh, and Ratio

Gears, or sprockets, have a set number of teeth. For two gears to work together, their teeth must have a [[MESH|mesh]] location --- a place where they interlock.

Now think about counting. A 10-tooth gear has to click through 10 teeth to make one full rotation. An 8-tooth gear only has to click through 8. So if you mesh them and turn one, they do *not* come out even.

{{< callout title="Work It Out Before You Read the Answer" variant="navy" >}}
The gear on the left has 8 teeth. The gear on the right has 16. If you turn the left gear one full rotation clockwise, what happens to the gear on the right?
{{< /callout >}}

Your answer, before you look:

{{< answer key="p2_predict_ratio" label="Ratio prediction" >}}

{{< figrow tall=true >}}
- src: "mech04_modified_pincer-diagram-02.svg"
  alt: "Two gear pairs. On the left, an eight tooth gear meshes with a sixteen tooth gear, giving a two to one ratio. On the right, an eight tooth gear meshes with a thirty tooth gear, giving a three point seven five to one ratio."
  caption: "Divide the driven gear's teeth by the drive gear's teeth. That number is the ratio."
{{< /figrow >}}

{{< callout title="The Answer" >}}
If the gear on the left turns one full rotation clockwise, the gear on the right turns **half** a rotation counterclockwise. That is a 2:1 gear ratio.

The rule: divide the [[DRIVEN GEAR|driven gear's]] teeth by the [[DRIVE GEAR|drive gear's]] teeth. 16 ÷ 8 = 2, so a 2:1 ratio. An 8-tooth driving a 30-tooth gives 30 ÷ 8 = 3.75, so 3.75:1.
{{< /callout >}}

Your Challenge 3 pincer used the same gear on both sides --- a 1:1 ratio. What did that guarantee about how the two arms moved?

{{< answer key="p2_one_to_one" label="What 1 to 1 guaranteed" >}}

## Phase 3 --- Concept: What a Ratio Buys You

Gears that mesh but have different tooth counts give you an advantage. Which advantage depends on which gear you drive.

|  |  |
| --- | --- |
| Drive the small gear | You gain **torque**. The output turns slower but pushes harder. Use this when something is heavy or stubborn. |
| Drive the large gear | You gain **speed**. The output turns faster but pushes with less force. Use this when something needs to move quickly. |

{{< callout title="What Torque Actually Means" variant="navy" >}}
A linear force is a push or a pull. A [[TORQUE|torque]] is a *twist* --- the turning equivalent of a push.

When you say a gear train "has more torque," you mean the output shaft can twist against more resistance before it stalls.
{{< /callout >}}

{{< callout title="Gears Are Not Magic" >}}
Everything you gain, you give up somewhere else. A 3.75:1 ratio gives you 3.75 times the twist --- and costs you 3.75 times the rotations to get there. There is no arrangement of gears that gives you more of both.
{{< /callout >}}

### Why This Matters Here

Read the third constraint of this challenge again: *both sides of the pincer must rotate, however they do not have to have the same range of motion.*

That sentence is permission. You are allowed to put a different gear on one side than the other --- so one arm sweeps far while the other barely moves. Used well, that is one way to keep a jaw face flat against the cube.

If you put a 16-tooth gear on one arm and an 8-tooth gear on the other, both driven by the same gear, which arm sweeps farther, and by how much?

{{< answer key="p3_different_arms" label="Different arm ranges" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="Project Overview" >}}
Using your kit, design, create, and modify a modified pincer that is stable and can effectively grab an object 4″ tall and 4″ wide, with a success rate greater than 90%.
{{< /callout >}}

### Needs

- Pick up a 4″ × 4″ × 4″ cube --- foam preferred, cardboard is an acceptable substitute.
- The pincer must be attached to a servo or motor.
- The mounting system must be low enough to pick the cube up from ground level, and must be easily detachable from the robot with 2 screws or nuts or fewer.

### Constraints

Every one of these must be true for your design to count as finished.

1.  Use no metal pieces other than screws, bolts, and nuts.
2.  The modified pincer must remain in contact with both sides of the cube for at least 3″ of the cube's height and depth --- both sides nearly fully in contact with two opposite faces.
3.  Both sides of the pincer must rotate. They do not have to have the same range of motion.

### Your Plan --- Before You Build

How will you solve the tilt problem? Name your approach: swiveling jaw, parallel linkage, shortened swing, or something else.

{{< answer key="p4_tilt_solution" label="Tilt solution" >}}

Write the need as one testable sentence.

{{< answer key="p4_need" label="Need statement" >}}

What gears are you putting on each arm, and what ratio does that give you?

- {{< short-answer key="p4_gear_left" label="Left arm gear plan" >}}

- {{< short-answer key="p4_gear_right" label="Right arm gear plan" >}}

- {{< short-answer key="p4_gear_ratio_plan" label="Planned ratio" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your design fail first by losing grip, by tilting the jaws, or by stalling the motor?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="How to Check the 3-Inch Contact" variant="navy" >}}
Close the pincer on the cube, then hold a ruler flat against the jaw. Measure the length actually touching the cube face --- not the length of the jaw. A jaw can be 5 inches long and touch for half an inch.

Do this on both sides. The constraint applies to both.
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
      text: "Teeth on the drive gear"
    -
      key: "p5_drive_teeth"
      aria: "Drive gear teeth"
    -
      key: "p5_drive_teeth_unit"
      aria: "Unit"
      value: "teeth"
  -
    -
      text: "Teeth on the driven gear"
    -
      key: "p5_driven_teeth"
      aria: "Driven gear teeth"
    -
      key: "p5_driven_teeth_unit"
      aria: "Unit"
      value: "teeth"
  -
    -
      text: "Your gear ratio (driven ÷ drive)"
    -
      key: "p5_ratio"
      aria: "Gear ratio"
    -
      key: "p5_ratio_unit"
      aria: "Unit"
      value: ": 1"
  -
    -
      text: "Range of motion, arm A"
    -
      key: "p5_rom_a"
      aria: "Range of motion A"
    -
      key: "p5_rom_a_unit"
      aria: "Unit"
      value: "degrees"
  -
    -
      text: "Range of motion, arm B"
    -
      key: "p5_rom_b"
      aria: "Range of motion B"
    -
      key: "p5_rom_b_unit"
      aria: "Unit"
      value: "degrees"
  -
    -
      text: "Contact length, side A"
    -
      key: "p5_contact_a"
      aria: "Contact A"
    -
      key: "p5_contact_a_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Contact length, side B"
    -
      key: "p5_contact_b"
      aria: "Contact B"
    -
      key: "p5_contact_b_unit"
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
- head: "Contact both sides?"
- head: "Lifted clear?"
- head: "Where it went wrong"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_contact"
      aria: "Trial 1 contact both sides"
    - key: "trial1_lifted"
      aria: "Trial 1 lifted clear"
    - key: "trial1_observed"
      aria: "Trial 1 where it went wrong"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_contact"
      aria: "Trial 2 contact both sides"
    - key: "trial2_lifted"
      aria: "Trial 2 lifted clear"
    - key: "trial2_observed"
      aria: "Trial 2 where it went wrong"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_contact"
      aria: "Trial 3 contact both sides"
    - key: "trial3_lifted"
      aria: "Trial 3 lifted clear"
    - key: "trial3_observed"
      aria: "Trial 3 where it went wrong"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_contact"
      aria: "Trial 4 contact both sides"
    - key: "trial4_lifted"
      aria: "Trial 4 lifted clear"
    - key: "trial4_observed"
      aria: "Trial 4 where it went wrong"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_contact"
      aria: "Trial 5 contact both sides"
    - key: "trial5_lifted"
      aria: "Trial 5 lifted clear"
    - key: "trial5_observed"
      aria: "Trial 5 where it went wrong"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_contact"
      aria: "Trial 6 contact both sides"
    - key: "trial6_lifted"
      aria: "Trial 6 lifted clear"
    - key: "trial6_observed"
      aria: "Trial 6 where it went wrong"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_contact"
      aria: "Trial 7 contact both sides"
    - key: "trial7_lifted"
      aria: "Trial 7 lifted clear"
    - key: "trial7_observed"
      aria: "Trial 7 where it went wrong"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_contact"
      aria: "Trial 8 contact both sides"
    - key: "trial8_lifted"
      aria: "Trial 8 lifted clear"
    - key: "trial8_observed"
      aria: "Trial 8 where it went wrong"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_contact"
      aria: "Trial 9 contact both sides"
    - key: "trial9_lifted"
      aria: "Trial 9 lifted clear"
    - key: "trial9_observed"
      aria: "Trial 9 where it went wrong"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_contact"
      aria: "Trial 10 contact both sides"
    - key: "trial10_lifted"
      aria: "Trial 10 lifted clear"
    - key: "trial10_observed"
      aria: "Trial 10 where it went wrong"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_bothrotate"
  label: "Both sides of the pincer rotate."
- key: "p5_check_contact"
  label: "Measured at least 3″ of contact on *both* opposite faces of the cube."
- key: "p5_check_lift"
  label: "Grabbed the 4″ cube from ground level and lifted it clear."
- key: "p5_check_rate"
  label: "Worked on more than 90% of runs, counted over at least 10 runs."
- key: "p5_check_motor"
  label: "Driven by a servo or motor, not by hand."
- key: "p5_check_detach"
  label: "Detaches from the robot with 2 screws or nuts or fewer."
- key: "p5_check_materials"
  label: "Kit parts only. No metal except screws, bolts, and nuts."
- key: "p5_check_stable"
  label: "Stable --- it did not flex, sag, or need a hand on it while lifting."
{{< /checklist >}}

Did changing the gear ratio actually change the contact length, or did you solve the tilt some other way? Explain what worked.

{{< answer key="p5_ratio_effect" label="Effect of the ratio" >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Game pieces are rarely all the same shape. A grabber tuned perfectly for one object is often useless on the next.
{{< /callout >}}

You have now built two grabbers: one for small round objects, one for a large flat-sided one. The difference between them is mostly gearing and jaw geometry --- not a whole new machine. Recognizing that saves an enormous amount of build time in a season.

Name a Botball object that would need a different grabber than either of yours. What specifically about its shape drives the change?

{{< answer key="p6_botball_shape" label="Botball object shape" >}}

You traded some speed for a firmer grip, or the other way around. In a timed match, when would you deliberately choose the faster, weaker version?

{{< answer key="p6_speed_tradeoff" label="Speed tradeoff" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain how to calculate a gear ratio, then give the ratio you used and what it did for your design.

{{< answer key="p7_q1_ratio" label="Reflection 1" >}}

2\. "Gears aren't magic. For everything we gain we give something else up." What did you give up in this build, and was it worth it?

{{< answer key="p7_q2_tradeoff" label="Reflection 2" >}}

3\. The constraint said the two sides did not need the same range of motion. Did you use that permission? If not, would it have helped?

{{< answer key="p7_q3_permission" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "Tooth counts set how far each part moves. This means that when a mechanism moves the wrong amount, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Deliberately Uneven

- Rebuild so one arm sweeps exactly twice as far as the other.
- What gear pair did that take? Verify with a protractor rather than by eye.
- Find a grabbing job where an uneven pincer beats an even one.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Ratio Hunt

- Try three different gear ratios on the same pincer body.
- For each, record contact length and whether the motor stalled.
- Which ratio gripped best, and was it the one you expected?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- One Grabber, Two Shapes

- Without rebuilding, make your modified pincer also pick up 3 poms.
- What did you have to add? Did it hurt the cube grip?
- Is a grabber that does two jobs adequately better than two that each do one job well? Defend your answer.

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Load It Up

- Add weight inside or on top of the cube, a little at a time.
- Record the weight at which the cube first slips, and the weight at which the motor stalls.
- Which limit did you hit first --- grip or torque? What would you change to raise that limit?

{{< answer key="ext_d" label="Extension D" >}}
