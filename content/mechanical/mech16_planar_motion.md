---
title: "Mechanical Design · Challenge 16 — Planar Motion with Three Inputs"
short_title: "Challenge 16"
description: "A flat object has exactly three degrees of freedom, so it takes exactly three drives. Parallel machines versus serial ones."
mission_id: "mech16_planar_motion"
mission_title: "Mechanical Design · Challenge 16 — Planar Motion with Three Inputs"
eyebrow: "Mechanical Design · Challenge 16"
heading: "Planar Motion with Three Inputs"
subheading: "Student Challenge · Three Ways to Move, Three Ways to Drive"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 16 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How many inputs does it take to control something completely?"
  -
    term: "Big Idea"
    definition: "A flat object has exactly three [[DEGREES OF FREEDOM|degrees of freedom]], so three [[ACTUATOR|actuators]] can control it completely."
  -
    term: "Mechanism"
    definition: "[[PARALLEL MECHANISM|Parallel mechanism]] with three inputs"
  -
    term: "Design Concepts"
    definition: "[[PLANAR MOTION|Planar motion]] · [[SERIAL MECHANISM|Serial]] vs parallel · [[WORKSPACE|Workspace]]"
  -
    term: "Materials"
    definition: "Kit parts only"
  -
    term: "What You Need"
    definition: "LEGO kit · exactly 3 motors or servos · Wombat controller · at least 4 poms · ruler"
  -
    term: "Prerequisites"
    definition: "Challenge 5 for degrees of freedom, Challenge 15 for chaining mechanisms"
weight: 17
hub_unit: 7
hub_title: "Planar Motion with Three Inputs"
hub_label: "Challenge 16"
---

## Overview

The number three in this challenge's title is not a suggestion. It is the exact number of independent motions a flat object can make, and therefore the exact number of drives it takes to control one completely.

This is also a different *kind* of machine than anything you have built. Your Big Arm in Challenge 5 was a chain --- the shoulder carried the elbow, which carried the gripper. Here, three separate drives all grip the same platform at once and move it together.

{{< callout title="Core Insight" >}}
Count how many ways a thing can move. That number tells you how many drives you need --- no more, and no fewer.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Name the three degrees of freedom of an object moving in a plane.
- Explain why three inputs is the right number, rather than two or four.
- Describe the difference between a [[SERIAL MECHANISM|serial]] and a [[PARALLEL MECHANISM|parallel]] mechanism, and what each is better at.
- Build a scoop that collects, lifts, and holds a load through a move.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="trtH7Id7HSA" title="LEGO planar motion with three inputs" >}}

Simple mechanics --- planar motion with three inputs.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Count the drives. Then watch what happens to the platform when only one of them moves.
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

Are the drives stacked one on top of another, or do they all connect to the same part? Describe the arrangement.

{{< answer key="p1_arrangement" label="Arrangement" >}}

What LEGO pieces might take the place of each of the pieces you see?

{{< answer key="p1_pieces" label="LEGO substitutions" >}}

## Phase 2 --- Concept: Three Ways to Move

In Challenge 5 you counted degrees of freedom on an arm --- one for each joint that could be driven independently. Now count them a different way: not on the machine, but on the *thing being moved*.

Put a flat object on a table and slide it around without lifting it. There are exactly three things you can do to it.

{{< figrow tall=true >}}
- src: "mech16_planar_motion-diagram-01.svg"
  alt: "A flat platform seen from above, with three arrows showing its three possible motions: sliding side to side, sliding forward and back, and rotating in place."
  caption: "Anything flat, moving on a flat surface, has exactly these three freedoms and no others."
{{< /figrow >}}

{{< callout title="Why Exactly Three Drives" >}}
Each drive you add lets you command one motion. With two drives you can put the platform anywhere you like, but you cannot choose which way it faces --- the angle is whatever the geometry gives you.

With three, you control position *and* angle. With four you have one more drive than there are motions to command, and the extra one has to fight the others.

Three is not a design preference here. It is the count.
{{< /callout >}}

Your scoop has to reach down, lift up, and tip its load out. Match each of those to one of the three motions above.

{{< answer key="p2_mapping" label="Motion mapping" >}}

## Phase 3 --- Concept: Parallel or Serial? Then Build

There are two ways to arrange several drives, and you have already built one of them.

{{< figrow tall=true >}}
- src: "mech16_planar_motion-diagram-02.svg"
  alt: "Two machine layouts compared. On the left, a serial arm where each joint carries the next in a single chain. On the right, a parallel mechanism where three separate legs all attach to one platform."
  caption: "Your Big Arm was the left-hand picture. This challenge is the right-hand one."
{{< /figrow >}}

|  | Serial | Parallel |
| --- | --- | --- |
| Arrangement | Joints stacked in a chain, one after another | Several drives all attached to the same platform |
| Reach | Large --- every link adds to it | Small --- limited to where all the legs can reach at once |
| Stiffness | Floppy at the far end. Each joint carries everything past it. | Stiff. The load is shared between all the legs. |
| Slop | Adds up along the chain | Partly cancels --- the legs hold each other in place |

The area a machine can actually reach is called its [[WORKSPACE|workspace]]. That is the real trade here: parallel machines are better at everything except how far they can go.

### Build the Bare Mechanism

Build the three-drive platform first, with no scoop attached. Get all three drives moving it before you worry about poms.

{{< callout title="Before You Go On" variant="navy" >}}
Move each drive on its own and watch the platform. If moving one drive forces the others to move too, something is over-constrained --- a joint somewhere needs to be free to slide or pivot that currently is not.

This is the most common problem with parallel machines, and it will lock up your build completely if you leave it.
{{< /callout >}}

Can you move each drive independently? If not, which joint did you have to free up?

{{< answer key="p3_independence" label="Independence check" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, modify and attach it in such a fashion that it will scoop up poms and elevate them for transporting to another location.
{{< /callout >}}

### Mental Picture

Think of a front-end loader on a construction site. The boom raises and lowers, the arm reaches in and out, and the bucket tips --- three separate controls, and the operator uses all of them to get a load off the ground and carry it away.

### Constraints

Every one of these must be true for your design to count as finished.

1.  The scoop must collect at least 4 poms in a single pass from a flat surface.
2.  Poms must be lifted to a minimum of 6 inches above the surface and held there.
3.  The loaded scoop must retain all poms while the structure is moved 12 inches by hand.
4.  Exactly 3 motors or servos, all driving the same platform.
5.  The scoop must reach its load position without any part of the structure touching the poms first and scattering them.
6.  The device must succeed on more than 9 of 10 attempts.

{{< callout title="Constraint 5 Is the Hard One" >}}
Poms are light and they roll. A scoop that drops onto them from above pushes them out of the way before it can collect them, and a leg that swings through the pile scatters it.

The approach path matters as much as the scoop does. Work out where every part of your machine will be as it comes down, not just where the scoop ends up.
{{< /callout >}}

### Your Plan --- Before You Build

Name each of your three drives and say what motion it controls.

{{< steps key="p4_drive" label="Drive" start=1 count=3 >}}

Describe the path the scoop takes as it approaches the poms. Where is every other part of the machine during that approach?

{{< answer key="p4_approach" label="Approach path" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will you lose poms on the scoop, on the lift, or on the carry?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="Set the Poms Up the Same Way Every Time" >}}
Mark the spot and use the same number of poms in the same arrangement for every run. A scoop that works on a tidy pile and fails on a scattered one has not met the need --- but you cannot tell the difference unless the setup is identical.
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
      text: "Motors or servos in your machine"
    -
      key: "p5_actuators"
      aria: "Actuator count"
    -
      key: "p5_actuators_unit"
      aria: "Unit"
      value: "drives"
  -
    -
      text: "Most poms collected in a single pass"
    -
      key: "p5_poms"
      aria: "Poms collected"
    -
      key: "p5_poms_unit"
      aria: "Unit"
      value: "poms"
  -
    -
      text: "Height the load was lifted to"
    -
      key: "p5_height"
      aria: "Lift height"
    -
      key: "p5_height_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Poms still aboard after the 12-inch carry"
    -
      key: "p5_retained"
      aria: "Poms retained"
    -
      key: "p5_retained_unit"
      aria: "Unit"
      value: "poms"
  -
    -
      text: "Poms scattered on approach, worst run"
    -
      key: "p5_scattered"
      aria: "Poms scattered"
    -
      key: "p5_scattered_unit"
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
{{< /gridtable >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Poms scooped"
- head: "Poms after carry"
- head: "Where it went wrong"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_scooped"
      aria: "Trial 1 poms scooped"
    - key: "trial1_carried"
      aria: "Trial 1 poms after carry"
    - key: "trial1_observed"
      aria: "Trial 1 where it went wrong"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_scooped"
      aria: "Trial 2 poms scooped"
    - key: "trial2_carried"
      aria: "Trial 2 poms after carry"
    - key: "trial2_observed"
      aria: "Trial 2 where it went wrong"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_scooped"
      aria: "Trial 3 poms scooped"
    - key: "trial3_carried"
      aria: "Trial 3 poms after carry"
    - key: "trial3_observed"
      aria: "Trial 3 where it went wrong"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_scooped"
      aria: "Trial 4 poms scooped"
    - key: "trial4_carried"
      aria: "Trial 4 poms after carry"
    - key: "trial4_observed"
      aria: "Trial 4 where it went wrong"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_scooped"
      aria: "Trial 5 poms scooped"
    - key: "trial5_carried"
      aria: "Trial 5 poms after carry"
    - key: "trial5_observed"
      aria: "Trial 5 where it went wrong"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_scooped"
      aria: "Trial 6 poms scooped"
    - key: "trial6_carried"
      aria: "Trial 6 poms after carry"
    - key: "trial6_observed"
      aria: "Trial 6 where it went wrong"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_scooped"
      aria: "Trial 7 poms scooped"
    - key: "trial7_carried"
      aria: "Trial 7 poms after carry"
    - key: "trial7_observed"
      aria: "Trial 7 where it went wrong"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_scooped"
      aria: "Trial 8 poms scooped"
    - key: "trial8_carried"
      aria: "Trial 8 poms after carry"
    - key: "trial8_observed"
      aria: "Trial 8 where it went wrong"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_scooped"
      aria: "Trial 9 poms scooped"
    - key: "trial9_carried"
      aria: "Trial 9 poms after carry"
    - key: "trial9_observed"
      aria: "Trial 9 where it went wrong"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_scooped"
      aria: "Trial 10 poms scooped"
    - key: "trial10_carried"
      aria: "Trial 10 poms after carry"
    - key: "trial10_observed"
      aria: "Trial 10 where it went wrong"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_four"
  label: "Collected at least 4 poms in a single pass from a flat surface."
- key: "p5_check_height"
  label: "Lifted the load at least 6 inches above the surface and held it there."
- key: "p5_check_carry"
  label: "Kept every pom aboard while the structure was moved 12 inches by hand."
- key: "p5_check_three"
  label: "Exactly 3 motors or servos, all driving the same platform."
- key: "p5_check_approach"
  label: "Nothing on the machine touched the poms before the scoop did."
- key: "p5_check_rate"
  label: "Succeeded on more than 9 of 10 attempts."
{{< /checklist >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

Push down on the loaded platform with a finger. Does it flex? Compare that to how your Big Arm from Challenge 5 felt under the same test.

{{< answer key="p5_stiffness" label="Stiffness comparison" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Motors are the scarcest thing on a robot. Knowing the smallest number that will do a job is worth more than knowing how to add another one.
{{< /callout >}}

Counting degrees of freedom is how you find that number. Work out how many ways the thing you are moving actually needs to move, and that is how many drives to budget --- before you build anything, and before you find out you are one motor short.

Pick a Botball task and count its degrees of freedom. How many drives does it genuinely need, and how many would you have guessed before this challenge?

{{< answer key="p6_count_dof" label="Counting DOF" >}}

Parallel machines are stiffer but reach less far. Name a Botball job where you would take the stiffness, and one where you would need the reach.

{{< answer key="p6_tradeoff" label="Stiffness versus reach" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Name the three degrees of freedom of a flat object on a flat surface, and explain why there is no fourth.

{{< answer key="p7_q1_three" label="Reflection 1" >}}

2\. Explain the difference between a serial and a parallel mechanism to someone who has built neither.

{{< answer key="p7_q2_serial_parallel" label="Reflection 2" >}}

3\. If you had been given a fourth motor, would your machine have been better? Answer using degrees of freedom, not opinion.

{{< answer key="p7_q3_fourth" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "The number of drives a machine needs is the number of ways its output has to move. This means that before I add a motor, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Take One Away

- Disconnect one of your three drives and lock it in place.
- What can the machine no longer do? Be specific about which motion you lost.
- Can you still complete the task with two? If so, what does that say about the task?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Build the Serial Version

- Build a serial arm with three joints that does the same job.
- Load both machines and push down on each. Which flexes more?
- Measure how far each one can reach. Which trade would you take, and for what task?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Higher and Farther

- Lift the load to 10 inches instead of 6, and carry it 24 inches instead of 12.
- Which requirement broke first?
- Was the limit the workspace of your parallel machine, or something else?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Map the Workspace

- Move your platform to as many positions as it will reach and mark each one on paper.
- Draw the outline of everything it can get to. That shape is your workspace.
- Where is it biggest, and where does it run out? What would you change to grow it?

{{< answer key="ext_d" label="Extension D" >}}
