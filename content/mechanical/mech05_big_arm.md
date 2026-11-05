---
title: "Mechanical Design · Challenge 5 — The Big Arm"
short_title: "Challenge 5"
description: "Degrees of freedom, torque measured in oz-in, and counterweights — all under a 120 oz-in ceiling."
mission_id: "mech05_big_arm"
mission_title: "Mechanical Design · Challenge 5 — The Big Arm"
eyebrow: "Mechanical Design · Challenge 5"
heading: "The Big Arm"
subheading: "Student Challenge · Three Joints, Real Weight, and a Torque Budget"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 5 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How much can a motor actually lift, and how do we find out before we build?"
  -
    term: "Big Idea"
    definition: "Torque can be calculated in advance. A design can be checked on paper before a single part is placed."
  -
    term: "Design Concepts"
    definition: "[[DEGREES OF FREEDOM|Degrees of freedom]] · [[TORQUE|Torque]] · [[MOMENT ARM|Moment arm]] · [[COUNTERWEIGHT|Counterweight]] · [[GEAR REDUCTION|Gear reduction]]"
  -
    term: "Materials"
    definition: "Kit parts, few metal pieces beyond fasteners, plus counterweights --- up to 100 pennies or a robot controller"
  -
    term: "What You Need"
    definition: "LEGO kit · assorted gears · multiple motors or servos · Wombat controller · an 8--12 oz object about the size of a soda can, or a plush Botguy · a bin with its rim 14″ above the floor · a scale · ruler"
  -
    term: "Prerequisites"
    definition: "Challenges 2, 3, and 4. This one uses all three."
weight: 6
hub_unit: 3
hub_title: "The Big Arm"
hub_label: "Challenge 5"
---

## Overview

This is where the first four challenges come together. You are going to build an arm that folds under a starting height limit, unfolds to reach a bin, grabs a real object with a true pincer, and does all of it without overworking a single motor.

|  |  |
| --- | --- |
| From Challenge 2 | The 12″ starting envelope, and the tipping rule for a loaded arm. |
| From Challenge 3 | A true pincer where both jaws move, driven by meshed gears. |
| From Challenge 4 | Gear ratios --- and this time you will use them to survive a load, not to aim a jaw. |

{{< callout title="Core Insight" >}}
Up to now you have found out whether a design works by building it and watching. This time you can know beforehand. Torque is arithmetic, and the arithmetic is not hard.
{{< /callout >}}

{{< callout title="Materials Open Up Here" variant="navy" >}}
Challenges 3 and 4 were strictly kit parts. This one permits a few metal pieces beyond fasteners, and it permits counterweights --- up to 100 pennies, or a robot controller. That is not a loophole. It is a tool you are expected to use.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Count and name the [[DEGREES OF FREEDOM|degrees of freedom]] in a mechanism.
- Calculate the torque at a joint from weight and distance.
- Reduce the torque a motor experiences using a [[COUNTERWEIGHT|counterweight]] or [[GEAR REDUCTION|gear reduction]].
- Verify on paper that a design meets a numeric limit before building it.

## Phase 1 --- Concept: Degrees of Freedom

The challenge asks for "no less than 3 axis of movement." The proper name for what it is counting is [[DEGREES OF FREEDOM|degrees of freedom]], usually shortened to DOF.

{{< callout title="The Definition" >}}
A degree of freedom is one independent way a mechanism can move. Independent means it can change without anything else having to change.

Count the joints that a motor or servo can drive separately. That is your DOF count.
{{< /callout >}}

Your Challenge 3 pincer had exactly one. Both arms moved --- but they were geared together, so they were not independent. One motor, one motion, one degree of freedom.

{{< figrow tall=true >}}
- src: "mech05_big_arm-diagram-01.svg"
  alt: "Side view of a three degree of freedom arm. The shoulder joint at the base raises and lowers the upper arm. The elbow joint folds the forearm. The gripper at the end opens and closes. Each joint is driven independently."
  caption: "Shoulder, elbow, gripper. The gripper counts as one of the three."
{{< /figrow >}}

{{< callout title="A Practical Note About Your Kit" variant="navy" >}}
A base that spins the whole arm around a vertical axis is the fourth joint you may be imagining. It is hard to build well with the parts you have, because there is no large ring bearing to carry the arm's weight while it turns.

Shoulder, elbow, and gripper is the achievable three. If you want a fourth, add a wrist that tilts the gripper.
{{< /callout >}}

List the three joints you plan to build and say what each one does.

{{< answer key="p1_dof_plan" label="Degrees of freedom plan" >}}

## Phase 2 --- Concept: Calculating Torque

In Challenge 4 you learned that torque is a twist. Now you need a number for it.

{{< calc title="Calculation" >}}
- formula: "torque = weight × distance from the pivot"
- note: "ounces × inches gives you [[OUNCE INCH|ounce-inches]], written oz-in"
{{< /calc >}}

That distance from the pivot to the load is the [[MOMENT ARM|moment arm]]. It matters as much as the weight does --- and it is the part students forget.

{{< figrow tall=true >}}
- src: "mech05_big_arm-diagram-02.svg"
  alt: "An arm pivoting at a point. A ten ounce object sits twelve inches out on the right, producing one hundred twenty ounce-inches. A nine ounce counterweight sits five inches out on the left, producing forty five ounce-inches in the opposite direction, which subtracts from the total."
  caption: "Net torque at this pivot: 120 − 45 = 75 oz-in."
{{< /figrow >}}

### Do Not Forget the Arm Itself

Your arm has weight too, and that weight also sits out at a distance. Treat the arm as though all of its weight acts at its middle --- that is its [[CENTER OF GRAVITY|center of gravity]] --- and add its torque to the load's.

{{< calc title="Calculation" >}}
- formula: "total = (load × its distance) + (arm × half its length) − (counterweight × its distance)"
{{< /calc >}}

### Worked Example

- A 10 oz object, 12 inches out: 10 × 12 = **120 oz-in**
- The arm weighs 4 oz and is 12 inches long, so its weight acts 6 inches out: 4 × 6 = **24 oz-in**
- A counterweight of 9 oz sits 5 inches out on the other side: 9 × 5 = **45 oz-in**
- Total at the shoulder: 120 + 24 − 45 = **99 oz-in**

A US penny weighs roughly 0.09 oz, so 100 pennies come to about 9 oz. Weigh your controller rather than guessing --- they are heavier than students expect.

99 oz-in is under the 120 limit. But this arm is only 12 inches long. What happens to the number if you need 18 inches of reach instead? Work it out.

{{< answer key="p2_longer_arm" label="Longer arm calculation" >}}

## Phase 3 --- Concept: Staying Under the Limit

You have a budget: no motor or servo may experience more than 120 oz-in. There are four ways to stay inside it.

|  |  |
| --- | --- |
| Shorten the arm | Torque scales directly with distance. Half the reach is half the torque. Cheapest fix, but you still have to reach the bin. |
| Lighten the arm | Every ounce you remove from the far end removes several oz-in. Move motors toward the base. |
| Counterweight | Weight on the far side of the pivot subtracts. Up to 100 pennies or a controller is permitted here. |
| Gear reduction | The one that changes what the *motor* feels rather than what the joint feels. |

### How Gear Reduction Helps

The first three change the torque at the joint. Gearing down changes how much of that torque reaches the motor.

{{< calc title="Calculation" >}}
- formula: "torque at the motor = torque at the joint ÷ gear ratio"
- note: "a 3.75:1 reduction means the motor feels 3.75 times less"
{{< /calc >}}

So a joint carrying 150 oz-in --- over the limit --- driven through a 3.75:1 reduction puts 150 ÷ 3.75 = 40 oz-in on the motor. Comfortably inside the budget.

{{< callout title="Remember What It Costs" >}}
Gears are not magic. That same 3.75:1 reduction means the motor must turn 3.75 times for every one turn of the joint. Your arm gets strong and slow at exactly the same rate.
{{< /callout >}}

{{< callout title="If One Reduction Is Not Enough" variant="navy" >}}
Gear pairs can be stacked, and their ratios multiply. Two 3.75:1 pairs in series give 3.75 × 3.75 = 14.06:1 --- a very large reduction from a small stack of gears.

That is called compound gearing, and you will work with it properly later in the module. For now, know that the option exists if a single pair leaves you over budget.
{{< /callout >}}

Which of the four will you try first, and why that one?

{{< answer key="p3_strategy" label="Torque strategy" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="Project Overview" >}}
Using your kit, design, create, and modify a Big Arm that has no less than 3 axes of movement. One of them should be a pincer that can grab an 8--12 oz object roughly the size of a soda can. You may use a plush Botguy if you have one.
{{< /callout >}}

### Needs

- Pick up an object similar in size to Botguy and place it in a bin 14″ above ground level.
- The arm must be attached to multiple servos or motors.
- The base device does not have to be mobile.

### Constraints

Every one of these must be true for your design to count as finished.

1.  Use few metal pieces other than screws, bolts, and nuts.
2.  By the use of counterweights --- no more than 100 pennies or a robot controller --- gear ratios, or other mechanical systems, no motor or servo in your system may experience more than 120 oz-in of torque.
3.  The pincer used to grab the object must be a true pincer design, with both sides of the claw moving.
4.  The pincer's open-and-close function may serve as one of the 3 points of rotation. Additional points can make the arm swivel or move.
5.  At rest and before beginning its pickup routine, the Big Arm must be no taller than 12″ at any point. After it has begun its function, it may expand in size.

### Do the Math First

This is the first challenge where you can check your design before you build it. Estimate your numbers, run the calculation, and only then start assembling.

{{< gridtable >}}
columns:
  -
    head: "Planned value"
  -
    head: "Estimate"
  -
    head: "Unit"
rows:
  -
    -
      text: "Weight of the object you will lift"
    -
      key: "p4_obj_weight"
      aria: "Object weight"
    -
      key: "p4_obj_weight_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "Planned reach from the shoulder to the object"
    -
      key: "p4_reach"
      aria: "Planned reach"
    -
      key: "p4_reach_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Predicted torque at the shoulder (weight × distance)"
    -
      key: "p4_predicted_torque"
      aria: "Predicted torque"
    -
      key: "p4_predicted_torque_unit"
      aria: "Unit"
      value: "oz-in"
  -
    -
      text: "Is that already over 120?"
    -
      key: "p4_over_limit"
      aria: "Over limit"
    -
      key: "p4_over_limit_unit"
      aria: "Unit"
      value: "yes / no"
{{< /gridtable >}}

If you are over, what is your plan to get under? Be specific about which of the four tools you are using and by how much.

{{< answer key="p4_plan_under" label="Plan to get under the limit" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=6 >}}

Predict: which joint will be the one that struggles --- shoulder, elbow, or gripper? Explain using torque.

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

### Torque Worksheet --- Your Worst Joint

Fill this in for the joint carrying the most load, almost always the shoulder. Measure rather than estimate wherever you can.

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
      text: "A · Object weight"
    -
      key: "p5_a_obj_w"
      aria: "Object weight"
    -
      key: "p5_a_obj_w_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "B · Distance, pivot to object"
    -
      key: "p5_b_obj_d"
      aria: "Object distance"
    -
      key: "p5_b_obj_d_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "C · Object torque (A × B)"
    -
      key: "p5_c_obj_t"
      aria: "Object torque"
    -
      key: "p5_c_obj_t_unit"
      aria: "Unit"
      value: "oz-in"
  -
    -
      text: "D · Arm weight"
    -
      key: "p5_d_arm_w"
      aria: "Arm weight"
    -
      key: "p5_d_arm_w_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "E · Distance, pivot to the arm's middle"
    -
      key: "p5_e_arm_d"
      aria: "Arm center distance"
    -
      key: "p5_e_arm_d_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "F · Arm torque (D × E)"
    -
      key: "p5_f_arm_t"
      aria: "Arm torque"
    -
      key: "p5_f_arm_t_unit"
      aria: "Unit"
      value: "oz-in"
  -
    -
      text: "G · Counterweight weight"
    -
      key: "p5_g_cw_w"
      aria: "Counterweight weight"
    -
      key: "p5_g_cw_w_unit"
      aria: "Unit"
      value: "oz"
  -
    -
      text: "H · Distance, pivot to counterweight"
    -
      key: "p5_h_cw_d"
      aria: "Counterweight distance"
    -
      key: "p5_h_cw_d_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "I · Counterweight torque (G × H)"
    -
      key: "p5_i_cw_t"
      aria: "Counterweight torque"
    -
      key: "p5_i_cw_t_unit"
      aria: "Unit"
      value: "oz-in"
  -
    -
      text: "J · Torque at the joint (C + F − I)"
    -
      key: "p5_j_joint_t"
      aria: "Joint torque"
    -
      key: "p5_j_joint_t_unit"
      aria: "Unit"
      value: "oz-in"
  -
    -
      text: "K · Gear ratio driving this joint"
    -
      key: "p5_k_ratio"
      aria: "Gear ratio"
    -
      key: "p5_k_ratio_unit"
      aria: "Unit"
      value: ": 1"
  -
    -
      text: "L · Torque at the motor (J ÷ K)"
    -
      key: "p5_l_motor_t"
      aria: "Motor torque"
    -
      key: "p5_l_motor_t_unit"
      aria: "Unit"
      value: "oz-in"
  -
    -
      text: "Is L under 120?"
    -
      key: "p5_under_limit"
      aria: "Under limit"
    -
      key: "p5_under_limit_unit"
      aria: "Unit"
      value: "yes / no"
{{< /gridtable >}}

### Other Measurements

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
      text: "Height of the arm, folded, before the run"
    -
      key: "p5_folded_height"
      aria: "Folded height"
    -
      key: "p5_folded_height_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Degrees of freedom you actually built"
    -
      key: "p5_dof_count"
      aria: "DOF count"
    -
      key: "p5_dof_count_unit"
      aria: "Unit"
      value: "joints"
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
- head: "Grabbed it?"
- head: "Into the bin?"
- head: "Where it went wrong"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_grabbed"
      aria: "Trial 1 grabbed"
    - key: "trial1_binned"
      aria: "Trial 1 into the bin"
    - key: "trial1_observed"
      aria: "Trial 1 where it went wrong"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_grabbed"
      aria: "Trial 2 grabbed"
    - key: "trial2_binned"
      aria: "Trial 2 into the bin"
    - key: "trial2_observed"
      aria: "Trial 2 where it went wrong"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_grabbed"
      aria: "Trial 3 grabbed"
    - key: "trial3_binned"
      aria: "Trial 3 into the bin"
    - key: "trial3_observed"
      aria: "Trial 3 where it went wrong"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_grabbed"
      aria: "Trial 4 grabbed"
    - key: "trial4_binned"
      aria: "Trial 4 into the bin"
    - key: "trial4_observed"
      aria: "Trial 4 where it went wrong"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_grabbed"
      aria: "Trial 5 grabbed"
    - key: "trial5_binned"
      aria: "Trial 5 into the bin"
    - key: "trial5_observed"
      aria: "Trial 5 where it went wrong"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_grabbed"
      aria: "Trial 6 grabbed"
    - key: "trial6_binned"
      aria: "Trial 6 into the bin"
    - key: "trial6_observed"
      aria: "Trial 6 where it went wrong"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_grabbed"
      aria: "Trial 7 grabbed"
    - key: "trial7_binned"
      aria: "Trial 7 into the bin"
    - key: "trial7_observed"
      aria: "Trial 7 where it went wrong"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_grabbed"
      aria: "Trial 8 grabbed"
    - key: "trial8_binned"
      aria: "Trial 8 into the bin"
    - key: "trial8_observed"
      aria: "Trial 8 where it went wrong"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_grabbed"
      aria: "Trial 9 grabbed"
    - key: "trial9_binned"
      aria: "Trial 9 into the bin"
    - key: "trial9_observed"
      aria: "Trial 9 where it went wrong"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_grabbed"
      aria: "Trial 10 grabbed"
    - key: "trial10_binned"
      aria: "Trial 10 into the bin"
    - key: "trial10_observed"
      aria: "Trial 10 where it went wrong"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_dof"
  label: "The arm has at least 3 independently driven joints."
- key: "p5_check_torque"
  label: "Calculated torque at every motor is under 120 oz-in --- shown in the worksheet above."
- key: "p5_check_pincer"
  label: "The gripper is a true pincer. Both sides move."
- key: "p5_check_envelope"
  label: "Measured no taller than 12″ at any point before the run started."
- key: "p5_check_bin"
  label: "Placed the object in a bin 14″ above the floor."
- key: "p5_check_weight"
  label: "The object weighed between 8 and 12 oz."
- key: "p5_check_counterweight"
  label: "Counterweights, if used, are no more than 100 pennies or one robot controller."
- key: "p5_check_stable"
  label: "The base stayed put and never tipped during a successful run."
{{< /checklist >}}

Compare your Phase 4 prediction to the number you calculated in Phase 5. How far off were you, and what did you underestimate?

{{< answer key="p5_prediction_vs_actual" label="Prediction versus actual" >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Every competitive robot has a torque budget, whether or not anyone writes it down. Motors have limits, and the arm that ignores them stalls in the middle of a match.
{{< /callout >}}

What you did here is the thing that separates guessing from engineering: you found out whether the design would work *before* committing parts and hours to it. A team that can estimate torque on paper eliminates bad designs in minutes instead of days.

Name a Botball task that needs a multi-joint arm rather than a simple grabber. What does the extra joint buy you?

{{< answer key="p6_botball_arm" label="Botball arm application" >}}

A teammate proposes an arm twice as long so the robot can stay farther from the scoring zone. Using torque, explain what that would cost --- and what you would need to change to make it work.

{{< answer key="p6_longer_arm_argument" label="Longer arm argument" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain how to calculate torque, and why the distance matters as much as the weight.

{{< answer key="p7_q1_torque" label="Reflection 1" >}}

2\. Define degrees of freedom in your own words, then say how many your arm has and how you counted them.

{{< answer key="p7_q2_dof" label="Reflection 2" >}}

3\. This challenge used work from Challenges 2, 3, and 4. Which of the three helped you most here, and why that one?

{{< answer key="p7_q3_capstone" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "Torque can be calculated before anything is built. This means that when someone proposes a design, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Find the Real Limit

- Add weight to your object a little at a time until a motor stalls.
- Calculate the torque at the moment it stalled. How close was that to 120 oz-in?
- If the numbers disagree, what did the calculation not account for?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Lose the Counterweight

- Remove the counterweight entirely and get back under 120 oz-in using only gearing and arm design.
- What did that cost you in speed?
- Which version would you take to a competition, and why?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Add a Fourth Joint

- Add a wrist that tilts the gripper independently.
- What can the arm now do that it could not before?
- What did the extra joint add to the torque at the shoulder? Calculate it.

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Reach Farther

- Deliver into a bin at 20″ instead of 14″, still folding under 12″ at the start.
- Recalculate the torque budget before building anything.
- Did your first calculation predict what actually happened? Where was it wrong?

{{< answer key="ext_d" label="Extension D" >}}
