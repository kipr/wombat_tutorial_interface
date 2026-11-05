---
title: "Mechanical Design · Design Project A — The Pom Sort"
short_title: "Design Project A"
description: "Two motors, four poms, a 90% bar, and no instructions. Run the full design process on an open sorting problem. Best after Challenge 5."
mission_id: "projectA_pom_sort"
mission_title: "Mechanical Design · Design Project A — The Pom Sort"
eyebrow: "Mechanical Design · Design Project A"
heading: "The Pom Sort"
subheading: "Open Design Project · Effector Design #1"
credit: "KIPR · Botball Explorer · Mechanical Design Project A — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "Can you run the whole design process on a problem with no instructions?"
  -
    term: "Big Idea"
    definition: "An open problem is solved by process --- define, plan, build, measure, iterate --- not by luck."
  -
    term: "Design Concepts"
    definition: "[[NEED|Needs]] · [[CONSTRAINT|Constraints]] · [[ADDED VALUE|Added value]] · [[SUCCESS RATE|Success rate]] · [[ITERATION|Iteration]]"
  -
    term: "Materials"
    definition: "LEGO structure and KIPR electronics only"
  -
    term: "What You Need"
    definition: "LEGO kit · up to 2 motors or servos · Wombat controller · 4 poms in two colors · this project sheet"
  -
    term: "Prerequisites"
    definition: "Challenge 1 (the design process) and Challenge 2 (gears). Challenge 3's pincer strongly recommended --- the added value asks for one. Best attempted after Challenge 5."
weight: 30
hub_unit: 10
hub_title: "The Pom Sort"
hub_label: "Design Project A"
---

## Overview

Every numbered challenge in this module hands you a mechanism and shows you how it works. This project hands you a task and nothing else. There is no build to copy and no mechanism named in the constraints --- choosing the mechanism *is* the work.

That is what makes this an open design project, and it is why it lives at the end of the module rather than the beginning. The process comes from Challenge 1. The parts language comes from Challenge 2. The mechanisms come from everything since. Here you put them in service of a job.

{{< callout title="Core Insight" >}}
Engineers do not start by building. They start by defining. On an open problem, the definition --- the problem, the need, the constraints --- is the only ground you have to stand on.
{{< /callout >}}

### By the end of this project you will be able to:

- Run the full five-step design process on an open problem, unprompted.
- Design, build, and refine an [[EFFECTOR|effector]] that performs a sorting task.
- Prove your design works with a measured success rate, not an impression.

## Phase 1 --- The Problem

Now you run the process with no instructions. Everything from here is yours.

{{< callout title="The Problem" >}}
A pile of 4 poms will be in a set location. Within this stack, the bottom 3 are all the same color, and the top one is a different color.
{{< /callout >}}

{{< callout title="Read This Carefully" variant="navy" >}}
Your machine does not need to *see* color. The odd pom is always the one on top, and it is always in the same place. That means this is a **position** problem, not a sensing problem --- you already know where the different pom is before the run starts.
{{< /callout >}}

### The Need

Perform a mechanical sort on the poms so that one color ends up on the left and the other color ends up on the right.

### Constraints

Every one of these must be true for your design to count as finished.

1.  You may use only 2 motors, servos, or micro servos --- total.
2.  Your device must separate the poms consistently: a success rate greater than 90%.
3.  LEGO structure and KIPR electronics only. No other materials on this challenge.

### Added Value

- Your "claw" is a [[PINCER|pincer]] --- a grabber where *both* sides move, not just one.
- You use fewer than 35 LEGO pieces.

{{< callout title="About That Pincer" >}}
You own this one now. Challenge 2 gave you the gear language, and Challenge 3 taught the arrangement that makes a pincer work properly. This added value asks you to put that knowledge in service of a task --- which is a different skill from building it on a worksheet.
{{< /callout >}}

## Phase 2 --- Your Plan: Run the Process on Paper

Run the five steps of the [[ENGINEERING DESIGN PROCESS|engineering design process]] on paper first. Do not pick up parts yet.

In your own words, what is the problem you are solving?

{{< answer key="p4_problem" label="Problem statement" >}}

What must your device do? Write the need as one sentence.

{{< answer key="p4_need" label="Need statement" >}}

List the constraints in your own words. Mark each one as a minimum, a maximum, or an approximation.

{{< steps key="p4_constraint" label="Constraint" start=1 count=3 >}}

Break the build into manageable steps. What will you make first, second, third?

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: which step do you think will give you the most trouble, and why?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 3 --- Build, Test & Iterate

{{< callout title="Reminder --- Measure, Don't Guess" >}}
You learned this in Challenge 1: a success rate is a count, not an impression. To beat 90%, you need at least 10 successes out of 10, or 19 out of 20. Run it, count it, write it down.
{{< /callout >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Sorted correctly?"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_sorted"
      aria: "Trial 1 sorted correctly"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_sorted"
      aria: "Trial 2 sorted correctly"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_sorted"
      aria: "Trial 3 sorted correctly"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_sorted"
      aria: "Trial 4 sorted correctly"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_sorted"
      aria: "Trial 5 sorted correctly"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_sorted"
      aria: "Trial 6 sorted correctly"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_sorted"
      aria: "Trial 7 sorted correctly"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_sorted"
      aria: "Trial 8 sorted correctly"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_sorted"
      aria: "Trial 9 sorted correctly"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_sorted"
      aria: "Trial 10 sorted correctly"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
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
  -
    -
      text: "Number of LEGO pieces used"
    -
      key: "p5_pieces"
      aria: "Piece count"
    -
      key: "p5_pieces_unit"
      aria: "Unit"
      value: "pieces"
  -
    -
      text: "Motors and servos used"
    -
      key: "p5_actuators"
      aria: "Actuator count"
    -
      key: "p5_actuators_unit"
      aria: "Unit"
      value: "total"
{{< /gridtable >}}

### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_actuators"
  label: "The device uses 2 or fewer motors, servos, or micro servos in total."
- key: "p5_check_rate"
  label: "The device sorted correctly on more than 90% of runs, counted over at least 10 runs."
- key: "p5_check_materials"
  label: "The device uses LEGO and KIPR electronics only."
- key: "p5_check_pincer"
  label: "Added value: both sides of the claw move."
- key: "p5_check_pieces"
  label: "Added value: fewer than 35 LEGO pieces."
{{< /checklist >}}

Describe one specific thing that failed. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

You just ran step 5 of the design process and looped back --- that loop is [[ITERATION|iteration]] doing its job. What did you change on the second pass, and which earlier step did the change actually come from --- the problem, the need, or the constraints?

{{< answer key="p5_loop" label="Loop back reflection" >}}

## Phase 4 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Sorting is not a made-up classroom task. Nearly every Botball game asks a robot to tell one thing from another and put them in different places.
{{< /callout >}}

Your machine solved the problem without sensing anything, using position alone. That is worth noticing: knowing *where* something will be is often cheaper and far more reliable than building a machine that can figure out *what* it is.

Name a Botball task where your robot needs to separate one kind of object from another. Could position alone solve it, or would the robot genuinely need to sense something? Explain.

{{< answer key="p6_botball_sort" label="Botball sorting application" >}}

Your constraint was 2 motors. If you had been given 4, would your design have been better --- or just bigger? What does that suggest about why engineers set constraints on purpose?

{{< answer key="p6_constraints_value" label="Value of constraints" >}}

## Phase 5 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. List the five steps of the engineering design process from memory. Then say which one you spent the most time on today.

{{< answer key="p7_q1_five_steps" label="Reflection 1" >}}

2\. Explain the difference between a need and a constraint using your own device as the example.

{{< answer key="p7_q2_need_constraint" label="Reflection 2" >}}

3\. Challenge 3 taught you the pincer arrangement on a worksheet. Using it here, in service of a task, was different. What changed when the pincer had a job to do?

{{< answer key="p7_q3_pincer_attempt" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "A design that solves the wrong problem beautifully is still a failure. This means that before I build anything, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- One Motor

- Rebuild your sorter using only **one** motor or servo instead of two.
- What did you have to give up? Did the success rate change?
- Tighter constraints often force better designs. Did that happen here, or not?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Piece Golf

- Count your pieces. Now rebuild the same function using as few as you can.
- Record your lowest working count.
- Why would a real engineering team care about part count, beyond cost?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Break the Assumption

- Your design assumes the odd pom is on top. What if it were on the bottom?
- Test it. Does your device still work, or does it fail completely?
- A design that only works under one exact setup is called *brittle*. How would you make yours less brittle?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Write the Challenge

- Invent a new sorting problem for a classmate. Write it as a Problem, a Need, and three Constraints.
- Trade with someone and build each other's challenge.
- What was hard about writing constraints that were demanding but still possible?

{{< answer key="ext_d" label="Extension D" >}}
