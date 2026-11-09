---
title: "Mechanical Design · Challenge 3 — The Pincer"
short_title: "Challenge 3"
description: "Meshed gears reverse direction. Build a grabber where both arms close together instead of one shoving the object sideways."
mission_id: "mech03_pincer"
mission_title: "Mechanical Design · Challenge 3 — The Pincer"
eyebrow: "Mechanical Design · Challenge 3"
heading: "The Pincer"
subheading: "Student Challenge · Building a Claw Where Both Sides Move"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 3 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How do we make two parts move in coordination from one motor?"
  -
    term: "Big Idea"
    definition: "Meshed gears lock two motions together in a predictable relationship."
  -
    term: "Design Concepts"
    definition: "[[PINCER|Pincer]] · [[MESH|Mesh]] · [[IDLER GEAR|Idler gear]] · [[BACKLASH|Backlash]] · [[STABILITY|Stability]]"
  -
    term: "Materials"
    definition: "Kit parts only. No metal pieces other than screws, bolts, and nuts."
  -
    term: "What You Need"
    definition: "LEGO kit · gears · one servo or motor · Wombat controller · at least 3 poms · ruler"
  -
    term: "Prerequisite"
    definition: "Challenge 1 --- you attempted a pincer there without instruction. This is where it gets solved."
weight: 4
hub_unit: 3
hub_title: "The Pincer"
hub_label: "Challenge 3"
---

## Overview

Back in Challenge 1 you were asked to build a pincer with no instruction at all, and told to keep notes on what fought you. This is the challenge where that gets answered.

The problem you almost certainly hit: making *both* arms move, in coordination, from a single motor. One arm is easy. Two arms that mirror each other is a different problem --- and the solution is gears.

{{< callout title="Core Insight" >}}
Two meshed gears cannot move independently. Turn one and the other must turn, in the opposite direction, by an amount you can predict exactly.

That is not a limitation. It is the whole point --- it is how you get coordination without a second motor.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain why a claw with one fixed side pushes objects sideways, and a [[PINCER|pincer]] does not.
- Predict the direction a meshed gear will turn.
- Use an [[IDLER GEAR|idler gear]] to make two arms turn the same way instead of opposite ways.
- Build a stable pincer that grabs and lifts poms reliably.

Look back at your Challenge 1 notes before you start. What you wrote there is about to be useful.

## Phase 1 --- Observe: Two Kinds of Claw

A demo bot claw usually has one jaw fixed in place and one jaw that swings. It works, and it is simple to build. But it does something to the object that you may not want.

{{< figrow tall=true >}}
- src: "mech03_pincer-diagram-01.svg"
  alt: "Two claw types compared. In a fixed claw, one jaw is stationary and the moving jaw shoves the object sideways until it is pinned against the fixed jaw. In a pincer, both jaws close inward and the object stays where it started."
  caption: "The fixed claw drags the object to itself. The pincer closes around whatever is already there."
{{< /figrow >}}

Why would shoving the object sideways be a problem on a game field? Name a situation where it would cost you.

{{< answer key="p1_why_problem" label="Why shoving is a problem" >}}

## Phase 2 --- Concept: Meshed Gears Turn Opposite Ways

Gears have teeth. When two gears are close enough for their teeth to interlock, they [[MESH|mesh]] --- and from that moment neither can move without the other.

{{< callout title="The Direction Rule" >}}
Two meshed gears always turn in **opposite** directions. If one goes clockwise, the other goes counterclockwise. There is no exception.
{{< /callout >}}

That rule is exactly what a pincer needs. Put a gear at the base of each arm, mesh the two gears together, and drive just one of them. The other is forced to turn the opposite way --- which swings the second arm inward as the first swings inward.

{{< figrow tall=true >}}
- src: "mech03_pincer-diagram-02.svg"
  alt: "Two meshed gears, each carrying an arm. When the left gear turns clockwise, the right gear is forced counterclockwise, and the two arms swing toward each other to close on a pom."
  caption: "One motor, one driven gear, two coordinated arms. A 10-tooth gear at the base of each arm is a good starting point."
{{< /figrow >}}

### Answer These Before You Build

If the gear on the left turns clockwise, what happens to its own arm?

{{< answer key="p2_left_arm" label="Left arm direction" >}}

What direction does that cause the other arm to move?

{{< answer key="p2_right_arm" label="Right arm direction" >}}

Does that meet the need --- do both arms close on the pom together?

{{< answer key="p2_meets_need" label="Does it meet the need" >}}

## Phase 3 --- Concept: The Idler Gear

Sometimes you want the opposite of a pincer --- two arms moving the *same* direction together, like a pair of sweepers or a conveyor. Two meshed gears cannot do that. But three can.

{{< callout title="The Trick" variant="navy" >}}
Put a third gear *between* the two. It reverses the direction once, and then reverses it again --- so the two outer gears end up turning the same way.

That middle gear is called an [[IDLER GEAR|idler gear]]. It changes direction without changing speed at all.
{{< /callout >}}

{{< figrow tall=true >}}
- src: "mech03_pincer-diagram-03.svg"
  alt: "Three gears in a row. The left gear turns clockwise, the middle idler gear turns counterclockwise, and the right gear turns clockwise again. The two outer gears turn the same direction as each other."
  caption: "The idler gear can sit staggered or in a straight line — its position does not matter, only that it sits between the other two."
{{< /figrow >}}

You will not need an idler for this challenge --- a pincer wants opposite directions. But remember it exists. It is one of the most reusable tricks in this module.

Name a robot job that would need two arms turning the same direction rather than closing on each other.

{{< answer key="p3_idler_use" label="Idler use case" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="Project Overview" >}}
Using your kit, design, create, and modify a pincer that is stable, can effectively grab 3 poms or more, and lift them with a success rate greater than 90%.
{{< /callout >}}

### Needs

- Pick up multiple poms with a great degree of confidence.
- The pincer must be attached to a servo or motor.
- The mounting system must be low enough to let the robot pick poms up from the surface, and must be easily detachable from the robot with 2 screws or nuts or fewer.

### Constraints

Every one of these must be true for your design to count as finished.

1.  Use no metal pieces other than screws, bolts, and nuts.
2.  The claw needs a 5″ minimum width when open.
3.  The claw must reach to within 1″ of the surface to grab and hold poms sitting on it.
4.  No non-kit parts can be used.

{{< callout title="Why This One Is Strict" variant="navy" >}}
This is the tightest materials rule in the whole module --- kit parts only, and no metal beyond fasteners. That is deliberate. Without a metal bar to make a rigid linkage, the only way to coordinate two arms is to solve it with gears, which is the thing this challenge is teaching.

Later challenges open up. This one does not.
{{< /callout >}}

### Your Plan --- Before You Build

Run the five steps from Challenge 1 on paper first.

What went wrong with your Challenge 1 pincer attempt? Be specific.

{{< answer key="p4_c1_lookback" label="Challenge 1 look back" >}}

Write the need as one testable sentence.

{{< answer key="p4_need" label="Need statement" >}}

How many teeth are on the gears you plan to use, and where does the motor connect?

{{< answer key="p4_gear_plan" label="Gear plan" >}}

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: what will be harder --- getting the arms to close together, or getting them to hold on once closed?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="Expect Slop" >}}
Meshed gears never fit perfectly. There is always a little play between the teeth, so an arm can wiggle a small amount before the gear actually catches. That play is called [[BACKLASH|backlash]].

Backlash is why your pincer may not close to exactly the same spot every time. Some is unavoidable. Too much means your gears are mounted too far apart, or something is flexing.
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
      text: "Claw width when fully open"
    -
      key: "p5_open_width"
      aria: "Open width"
    -
      key: "p5_open_width_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Lowest the grabbing surface reaches above the floor"
    -
      key: "p5_reach_low"
      aria: "Lowest reach"
    -
      key: "p5_reach_low_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Teeth on the gear at each arm base"
    -
      key: "p5_teeth"
      aria: "Tooth count"
    -
      key: "p5_teeth_unit"
      aria: "Unit"
      value: "teeth"
  -
    -
      text: "Most poms grabbed and lifted at once"
    -
      key: "p5_poms"
      aria: "Poms lifted"
    -
      key: "p5_poms_unit"
      aria: "Unit"
      value: "poms"
  -
    -
      text: "Fasteners needed to detach it from the robot"
    -
      key: "p5_fasteners"
      aria: "Fastener count"
    -
      key: "p5_fasteners_unit"
      aria: "Unit"
      value: "screws/nuts"
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
- head: "Poms held"
- head: "Lifted clear?"
- head: "Where it went wrong"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_poms"
      aria: "Trial 1 poms held"
    - key: "trial1_lifted"
      aria: "Trial 1 lifted clear"
    - key: "trial1_observed"
      aria: "Trial 1 where it went wrong"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_poms"
      aria: "Trial 2 poms held"
    - key: "trial2_lifted"
      aria: "Trial 2 lifted clear"
    - key: "trial2_observed"
      aria: "Trial 2 where it went wrong"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_poms"
      aria: "Trial 3 poms held"
    - key: "trial3_lifted"
      aria: "Trial 3 lifted clear"
    - key: "trial3_observed"
      aria: "Trial 3 where it went wrong"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_poms"
      aria: "Trial 4 poms held"
    - key: "trial4_lifted"
      aria: "Trial 4 lifted clear"
    - key: "trial4_observed"
      aria: "Trial 4 where it went wrong"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_poms"
      aria: "Trial 5 poms held"
    - key: "trial5_lifted"
      aria: "Trial 5 lifted clear"
    - key: "trial5_observed"
      aria: "Trial 5 where it went wrong"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_poms"
      aria: "Trial 6 poms held"
    - key: "trial6_lifted"
      aria: "Trial 6 lifted clear"
    - key: "trial6_observed"
      aria: "Trial 6 where it went wrong"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_poms"
      aria: "Trial 7 poms held"
    - key: "trial7_lifted"
      aria: "Trial 7 lifted clear"
    - key: "trial7_observed"
      aria: "Trial 7 where it went wrong"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_poms"
      aria: "Trial 8 poms held"
    - key: "trial8_lifted"
      aria: "Trial 8 lifted clear"
    - key: "trial8_observed"
      aria: "Trial 8 where it went wrong"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_poms"
      aria: "Trial 9 poms held"
    - key: "trial9_lifted"
      aria: "Trial 9 lifted clear"
    - key: "trial9_observed"
      aria: "Trial 9 where it went wrong"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_poms"
      aria: "Trial 10 poms held"
    - key: "trial10_lifted"
      aria: "Trial 10 lifted clear"
    - key: "trial10_observed"
      aria: "Trial 10 where it went wrong"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_bothsides"
  label: "Both sides of the claw move. It is a true pincer."
- key: "p5_check_width"
  label: "Measured at least 5″ wide when fully open."
- key: "p5_check_low"
  label: "Reaches to within 1″ of the surface and can grab poms sitting on it."
- key: "p5_check_three"
  label: "Grabbed and lifted 3 or more poms at once."
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

Wiggle one arm gently without running the motor. How far does it move before the gear catches? That is your backlash. Is it enough to cause a miss?

{{< answer key="p5_backlash" label="Backlash observation" >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
The detachability constraint is not busywork. Effectors get swapped between games, and sometimes between rounds.
{{< /callout >}}

You built a grabber that mounts and dismounts in seconds and works from one motor. That combination --- coordinated, cheap in motors, quick to change --- is why pincers show up on competition robots year after year.

Name a Botball task where a pincer beats a scoop or a pusher. What is it about the object that makes grabbing the right answer?

{{< answer key="p6_botball_pincer" label="Botball pincer application" >}}

Your pincer uses one motor for two arms. If you had used two motors instead --- one per arm --- what would you have gained, and what new problem would you have created?

{{< answer key="p6_two_motors" label="Two motor tradeoff" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain in your own words why two meshed gears cannot turn the same direction. Do not use the word "opposite."

{{< answer key="p7_q1_direction" label="Reflection 1" >}}

2\. In Challenge 1 you tried to build a pincer with no help. Compare what you tried then to what you built now. What did you not know at the time?

{{< answer key="p7_q2_compare" label="Reflection 2" >}}

3\. The constraint banned metal parts other than fasteners. Now that you have finished, what do you think that constraint was really for?

{{< answer key="p7_q3_constraint" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "Two meshed gears cannot move independently. This means that when I want two parts to work together, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Raise the Count

- Grab 6 poms at once, then 9. Record the point where the design stops working.
- What failed first --- grip strength, claw width, or the motor?
- What single change bought you the most poms?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Build the Idler

- Rebuild with a third gear between the two, so both arms turn the same direction.
- What is this version good at that the pincer is not?
- Invent a task it would win at, and test whether it actually does.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Hunt the Backlash

- Close your pincer on a pom ten times and mark where the arm tips land each time.
- How much do the landing spots vary? Try moving the gears closer together and repeat.
- Can you get the variation to zero? If not, why not?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- One Fastener

- The constraint allows 2 screws or nuts to detach. Get it down to 1.
- Does it still hold rigidly under load, or does it twist?
- What did you have to add elsewhere to make one fastener enough?

{{< answer key="ext_d" label="Extension D" >}}
