---
title: "Mechanical Design · Challenge 1 — Thinking Like an Engineer"
short_title: "Challenge 1"
description: "What engineering actually is, the five-step design process, needs versus constraints — the philosophy every build here runs on. Nothing to build yet."
mission_id: "mech01_design_foundations"
mission_title: "Mechanical Design · Challenge 1 — Thinking Like an Engineer"
eyebrow: "Mechanical Design · Challenge 1"
heading: "Thinking Like an Engineer"
subheading: "Foundation · The Philosophy of Engineering Design"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 1 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How do engineers turn a vague problem into a machine that solves it?"
  -
    term: "Big Idea"
    definition: "Every design begins with a clearly defined problem, a stated need, and known limits."
  -
    term: "Design Concepts"
    definition: "[[ENGINEERING|Engineering]] · [[NEED|Needs]] · [[CONSTRAINT|Constraints]] · [[ADDED VALUE|Added value]] · [[ITERATION|Iteration]] · [[SUCCESS RATE|Success rate]]"
  -
    term: "Materials"
    definition: "None. There is nothing to build on this sheet."
  -
    term: "What You Need"
    definition: "This challenge sheet and your own thinking · about one session"
  -
    term: "Position in Module"
    definition: "First challenge. This is the philosophy every build in the module runs on. The building starts in Challenge 3."
weight: 1
hub_unit: 1
hub_title: "Design Foundations"
hub_label: "Challenge 1"
---

## Overview

This is the first challenge in the module, and it is different from every one that follows: you will not build anything today. Before you build a single mechanism, you need a way of thinking about problems --- a process you can run every time, whether the problem is sorting poms or lifting a load or moving something across a field.

You will learn that process here and watch it applied to a real engineering problem that took decades to solve. Every challenge sheet after this one is written in its language --- a Problem, a Need, Constraints, and sometimes an Added Value --- so an hour spent here pays off twenty-six times.

{{< callout title="Core Insight" >}}
Engineers do not start by building. They start by defining --- what the problem actually is, what the solution must do, and what limits it has to stay inside.

A design that solves the wrong problem beautifully is still a failure.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain what makes engineering different from science.
- Name and use the five steps of the [[ENGINEERING DESIGN PROCESS|engineering design process]], and recognize the same work in an eight-step version.
- Tell the difference between a need and a constraint, and write both clearly.
- Explain what a [[SUCCESS RATE|success rate]] is, and why engineers measure with a count instead of an impression.

Portions of this module are adapted from materials freely distributed by the Royal Academy of Engineering.

## Phase 1 --- What Is Engineering?

Engineering is the branch of STEM concerned with the design, building, and use of engines, machines, and structures. It is a wide field, so it is usually broken into disciplines --- mechanical, electrical, civil, chemical, software, and many more.

### How Engineering Differs from Science

Science asks what is true. Engineering asks what can be made. The dividing line is design.

{{< callout title="From the Royal Academy of Engineering" variant="navy" >}}
Design is the essential creative process of engineering, which distinguishes it from science, and which calls for imagination, creativity, the knowledge and application of technical and scientific skills, and skillful use of materials.
{{< /callout >}}

Read that again and notice what is in the list. *Imagination* and *creativity* come first --- before technical skill. That is not decoration. An engineer who knows every formula but cannot picture a new arrangement of parts will not produce a new machine.

In your own words: what is the difference between a scientist studying how gears transmit force and an engineer using gears to build a claw?

{{< answer key="p1_science_vs_eng" label="Science versus engineering" >}}

## Phase 2 --- The Engineering Design Process

There is more than one way to describe how engineering gets done. The version below has five steps. You will use it on every challenge in this module, so learn it here.

{{< figrow tall=true >}}
- src: "mech01_design_foundations-diagram-01.svg"
  alt: "Flowchart of the five-step engineering design process. Step one, clearly define the problem. Step two, determine the needs to be met. Step three, determine the constraints. Step four, break the project into manageable and attainable steps. Step five, a decision: does the result meet the needs? If yes, the process ends. If no, the process returns to step one."
  caption: "The five-step engineering design process. The loop back is not a punishment — it is the normal path."
{{< /figrow >}}

### A Second Way to Describe the Same Work

Engineers do not all use the same map. Here is an eight-step version of the same territory. Read it next to the five-step flowchart above.

1.  Define the Problem
2.  Do Background Research
3.  Specify Requirements
4.  Brainstorm Solutions
5.  Choose the Best Solution
6.  Do Development Work
7.  Build a Prototype
8.  Test and Redesign

Notice that nothing new appears --- the eight steps slice the same loaf thinner. "Specify Requirements" is needs and constraints. "Test and Redesign" is the loop back at the bottom of the flowchart. The number of steps is a choice; the discipline of defining before building is not.

Match them up: which of the eight steps fold into step 1 of the five-step process, and which fold into step 5? Where does brainstorming fit?

{{< answer key="p2_compare_steps" label="Compare the two process versions" >}}

### Needs and Constraints Are Not the Same Thing

Students mix these up constantly, so be precise. A **need** is what the design must accomplish. A **constraint** is a limit the design must stay inside while accomplishing it.

|  |  |
| --- | --- |
| Need | What the thing has to *do*. "Lift four poms into a container." |
| Constraint | A limit it has to *obey*. "Using no more than two motors." |

Constraints come in three shapes:

- **Minimums** --- the design must reach at least this much. *At least 3 inches wide.*
- **Maximums** --- the design must not exceed this. *No more than two motors.*
- **Approximations** --- close enough counts. *Roughly the size of a soda can.*

{{< callout title="Added Value" variant="navy" >}}
Some challenges also list an **added value**: something beyond the minimum that makes the design genuinely better. Meeting the need gets you a working machine. Added value gets you a good one.
{{< /callout >}}

Write one need and one constraint for a completely different problem --- a backpack, a bike rack, a lunch tray, anything. Make sure the need says what it does and the constraint says what limits it.

{{< answer key="p2_own_example" label="Your own need and constraint" >}}

## Phase 3 --- A Worked Example: The Turning Car

Here is the process run on a real problem. It is worth studying because the problem was not obvious --- it stayed hidden inside a bigger machine for years before anyone named it properly.

### Step 1 --- Define the Problem

When a car turns a corner, the two rear wheels do not travel the same distance. The wheel on the inside of the turn follows a tighter circle than the wheel on the outside. The outside wheel has farther to go, in the same amount of time.

{{< figrow tall=true >}}
- src: "mech01_design_foundations-diagram-02.svg"
  alt: "Diagram of a car turning right. The inner wheel follows a tighter arc than the outer wheel, so the outer wheel travels a longer path in the same amount of time."
  caption: "Turning right. Both wheels are on one axle, but the paths are different lengths."
{{< /figrow >}}

In cars built in the 1920s, the rear wheels were fixed to a single solid axle. The motor drove both wheels at exactly the same speed. But the road demanded different speeds. Something had to give --- and what gave was the inside tire, which slipped and scrubbed across the pavement on every turn, wearing out early.

### Step 2 --- Determine the Need

Find a way to let the two wheels spin at different rates while the car turns, while still letting the motor power both of them.

### Step 3 --- Determine the Constraints

- The mechanism must fit inside the chassis of the car.
- It must be cheap enough to justify putting in every car built.
- It must not interfere with the other jobs the rear axle already does.

### Step 4 --- Break It Down

Engineers did not solve this in one leap. They broke it into stages:

- Create a device that lets the wheels turn independently of each other.
- Modify that system so it responds automatically instead of being set by hand.
- Convert it into a sealed, self-contained unit that fits the space and wastes little motor power.

### Step 5 --- Does It Meet the Need?

Watch what they arrived at. This mechanism is in nearly every car on the road today.

{{< youtube id="K4JhruinbWc" title="How a differential works" >}}

The automotive differential.

Which of the three constraints do you think was hardest to satisfy, and why?

{{< answer key="p3_hardest_constraint" label="Hardest constraint" >}}

Step 4 broke one huge problem into three smaller ones. Why does breaking a problem down make it easier to solve --- and not just easier to describe?

{{< answer key="p3_why_breakdown" label="Why break the problem down" >}}

## Phase 4 --- How Engineers Measure Success

Step 5 of the process asks whether the result meets the needs. That question sounds like an opinion. Engineers refuse to let it be one.

{{< callout title="A Count, Not an Impression" >}}
A [[SUCCESS RATE|success rate]] is not a feeling about how well something went. Run a device **10 times** and count how many times it fully worked. That count is the percentage --- 9 successes out of 10 runs is 90%.

Many challenges in this module set a bar of *greater than* 90%. To beat it, you need 10 out of 10, or 19 out of 20. That bar is demanding on purpose: a machine that works 8 times out of 10 will fail you at a competition.
{{< /callout >}}

This is also why [[ITERATION|iteration]] is step 5's loop back and not a punishment. The first version is expected to fail some runs. The count tells you honestly how often, and the failed runs tell you what to change.

A teammate says, "It basically works --- it sorted the poms both times we tried it." Using what you just read, explain what is wrong with that sentence, and what you would ask the teammate to do next.

{{< answer key="p4_count_vs_impression" label="Count versus impression" >}}

## Phase 5 --- Connect: Where This Shows Up in Botball

{{< callout title="Transfer" >}}
Every challenge sheet in this module is written in the language you just learned: a Problem, a Need, Constraints, and sometimes an Added Value. So is Botball itself. A game rulebook is one long list of needs and constraints --- what scores, what is allowed, what size box the robot must start inside.
{{< /callout >}}

The working end of every machine you will build here --- the claw, the scoop, the arm --- is called an [[EFFECTOR|effector]]. Every mechanism in Challenges 3 through 28 exists to make some effector do its job, and every one of those sheets will hand you a need and a set of constraints first. Now you know why.

{{< callout title="Where the Design Projects Went" variant="navy" >}}
The original version of this material ends with open design projects --- a pom sorter and a 17-inch lift --- where you run the whole process on a problem with no instructions. Those projects are still here, waiting at the end of the module as **Design Project A** and **Design Project B**. Come back to them once you own a few mechanisms; they will go far better then.
{{< /callout >}}

Pick any scoring task from this year's Botball game. Write it as one need and two constraints, and mark each constraint as a minimum, a maximum, or an approximation.

{{< answer key="p5_botball_need_constraints" label="Botball need and constraints" >}}

Botball could simply say "build the best robot you can." Instead it sets strict constraints --- a starting size box, banned materials, a time limit. What do constraints like these do *for* the teams, not just to them?

{{< answer key="p5_constraints_value" label="Value of constraints" >}}

## Phase 6 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. List the five steps of the engineering design process from memory. Then say which one you think teams skip most often --- and what goes wrong when they do.

{{< answer key="p6_q1_five_steps" label="Reflection 1" >}}

2\. Explain the difference between a need and a constraint, using one example of each that you wrote today.

{{< answer key="p6_q2_need_constraint" label="Reflection 2" >}}

3\. The turning-car problem hid inside a bigger machine for years before anyone defined it clearly. Why does a fuzzy problem statement make a problem so much harder to solve?

{{< answer key="p6_q3_define_first" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "A design that solves the wrong problem beautifully is still a failure. This means that before I build anything, I should..."

{{< answer key="p6_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these. Still no parts required.

### Extension A --- Spec an Everyday Object

- Pick a machine you used today --- a stapler, a bike, a vending machine, a door closer.
- Reverse-engineer its paperwork: write the Problem it solves, its Need, three Constraints its designers must have faced, and one Added Value it delivers.
- Mark each constraint as a minimum, a maximum, or an approximation.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Constraint Hunt in the Rulebook

- Open this year's Botball game rules.
- Find one minimum constraint, one maximum constraint, and one approximation. Quote or paraphrase each.
- Which single constraint do you think will shape robot designs the most this season, and why?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Run the Process on Paper

- Take the turning-car problem and pretend the differential was never invented.
- Brainstorm two *other* ways to let two wheels turn at different speeds. Wild ideas welcome --- brainstorming forbids criticizing.
- For each idea, name the constraint from Step 3 it would struggle with most.

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Write the Challenge

- Invent a new design problem for a classmate. Write it as a Problem, a Need, and three Constraints.
- Trade with someone and critique each other's: is the need testable? Is each constraint classified correctly? Could you tell, with a count, whether a design succeeded?
- What was hard about writing constraints that were demanding but still possible?

{{< answer key="ext_d" label="Extension D" >}}
