---
title: "Systems Project 4 — Draw the Plan"
short_title: "Systems Project 4"
linkTitle: "Draw the Plan"
description: "Flowchart symbols, decision points, and charting a robot's path before writing a line of code."
weight: 4
nav: discovery
mission_id: discovery_systems_04
mission_title: "Systems Project 4 — Draw the Plan"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 4
strand: systems
phase: "Phase B · Think Like an Engineer"
phase_order: 2
time: "One class period"
pace:
  kind: suggested
  label: "Before Coding 6"
eyebrow: "Discovery · Systems Project 4"
heading: "Draw the Plan"
subheading: "A picture of your program, before you write a line of it."
credit: "KIPR · Botball Explorer · Discovery"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Systems Project 4"
  - term: "Strand"
    definition: "Systems"
  - term: "Phase"
    definition: "Think Like an Engineer"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Learning the four shapes engineers use to draw a plan, then swapping charts with a partner to see if yours can be followed."
  - term: "Strand Link"
    definition: "Do this before Coding Project 6"
  - term: "Before You Start"
    definition: "Systems Project 3. You should have written a plan for a person to follow."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Paper and a pencil"
      - key: need_2
        label: "Four colours if you have them"
      - key: need_3
        label: "Scissors if your class is cutting out shapes"
      - key: need_4
        label: "A partner"
---

## Try It --- Follow This Chart

Here is a plan for a robot. Nobody has told you how to read it. Work it out.

{{< figrow >}}
- src: square-path-flowchart.svg
  alt: "A flowchart: start, then a loop of drive forward two feet and turn right, repeated four times, then stop"
{{< /figrow >}}

*Read it from the top down. Follow the arrows.*

In your notebook, draw the path this robot takes. Then answer here.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 56%
  - head: "My answer"
rows:
  -
    - text: "What shape does the robot's path make on the floor?"
    - key: p1_shape
      aria: "Path shape"
  -
    - text: "Where does it finish, compared to where it started?"
    - key: p1_finish
      aria: "Where it finishes"
  -
    - text: "How many times does it drive forward?"
    - key: p1_forwards
      aria: "How many forwards"
{{< /gridtable >}}

Now compare your drawing with a partner's.
{{< ask key="p1_compare" label="Compare paths" >}}Did you both draw the same path? If not, where did you differ?{{< /ask >}}

{{< callout variant="gold" title="You Read It Without Being Taught" >}}
Nobody explained the shapes. You worked out that the oval starts things, the rectangles are jobs to do, and the diamond asks a question.

That is the whole point of a [[FLOWCHART|flowchart]]. The shapes are the same everywhere in the world, so anyone can read your plan.
{{< /callout >}}

## Learn It --- Four Shapes and Some Arrows

An [[ALGORITHM|algorithm]] is a list of steps that solves a problem. A flowchart is a way to draw one.

Engineers draw the chart **before** writing any code. It is far easier to fix a picture than to fix a program.

{{< figrow >}}
- src: flowchart-shapes.svg
  alt: "The four flowchart shapes: oval for start and stop, rectangle for an action, diamond for a decision, arrow for flow"
{{< /figrow >}}

{{< callout variant="navy" title="Everyone Uses the Same Shapes" >}}
These are not KIPR's shapes. Engineers all over the world use them. A flowchart drawn in Oklahoma can be read by someone in Japan who does not speak a word of English.
{{< /callout >}}

### The diamond is the interesting one

Every other shape has one arrow in and one arrow out. A [[DECISION|decision]] has **one in and two out** --- one for yes, one for no.

Label both. An unlabelled diamond is a chart nobody can follow.

{{< callout variant="red" title="⚠ Arrows Can Go Back Up" >}}
Look again at the chart in Try It. The "no" arrow goes back up to an earlier box.

That is how a plan repeats itself without you drawing the same boxes four times.
{{< /callout >}}

### Rules that keep a chart readable

- One START at the top. One STOP at the bottom.
- Every box has an arrow leading into it and an arrow leading out.
- Only diamonds get two arrows out, and both are labelled.
- One job per rectangle. "Drive forward and turn" is two boxes, not one.

## Do It --- Draw, Swap, Fix

### 1. Three feet forward

Draw a flowchart for the simplest program there is.

- START
- Move forward 3 feet
- STOP

*Draw this one in your notebook*
{{< short-answer key="p3_s1_count" label="Shape count" prompt="How many shapes did you use?" >}}

### 2. There and back

Now add to it. Forward 3 feet, then backward 3 feet, then stop.
{{< short-answer key="p3_s2_count" label="Shape count 2" prompt="How many shapes now? What changed?" >}}

{{< checklist >}}
- key: p3_s2_done
  label: "Every box has one arrow in and one arrow out"
{{< /checklist >}}

### 3. Chart a path you invent

Draw a route on paper --- a path with at least four turns in it. Do not show anyone.

Now draw the flowchart that would make a robot follow that route.

*Route on one page, flowchart on the next*

{{< checklist >}}
- key: p3_route
  label: "My route and my flowchart are both drawn"
{{< /checklist >}}

### 4. Swap and test

Hand your partner **only the flowchart**. Keep your route hidden.

They draw the path your chart describes. Then compare it with your original route.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 56%
  - head: "My answer"
rows:
  -
    - text: "Did their path match my route?"
    - key: p3_match
      aria: "Did it match"
  -
    - text: "Where did it first go wrong?"
    - key: p3_wrong
      aria: "Where it went wrong"
  -
    - text: "Was the chart unclear, or was a step missing?"
    - key: p3_why
      aria: "Unclear or missing"
{{< /gridtable >}}

Fix your chart and have them try again.

{{< checklist >}}
- key: p3_fixed
  label: "After my fix, their path matched my route"
{{< /checklist >}}

### 5. Add a decision

Draw a new chart. This one must have a diamond in it with two labelled ways out.

Something like: *drive forward --- is there a wall? --- if yes turn, if no keep going.*

*Draw it with a diamond in the middle*
{{< short-answer key="p3_question" label="Diamond question" prompt="What question does your diamond ask?" >}}
{{< ask key="p3_yes_no" label="Yes and no branches" >}}What happens on yes? What happens on no?{{< /ask >}}

### 6. Swap the decision chart

Hand it over. Your partner draws the path twice --- once as if the answer were yes, once as if it were no.
{{< short-answer key="p3_two_paths" label="Two paths" prompt="Did they get two different paths?" >}}

{{< callout variant="gold" title="If Both Paths Were the Same, the Decision Did Nothing" >}}
A diamond only earns its place when the two answers lead somewhere different. If they end up the same either way, you did not need to ask.
{{< /callout >}}

### 7. Chart a real mission

Pick any mission from the game field. Draw the flowchart your robot would follow to score it.

Include at least one decision --- something the robot should check before it carries on.

*Mission flowchart*

{{< gridtable >}}
columns:
  - head: "Question"
    width: 38%
  - head: "My answer"
rows:
  -
    - text: "Which mission?"
    - key: p3_mission
      aria: "Which mission"
  -
    - text: "How many rectangles?"
    - key: p3_rects
      aria: "Rectangles"
  -
    - text: "What does the robot check?"
    - key: p3_check
      aria: "What it checks"
{{< /gridtable >}}

{{< callout variant="navy" title="Keep This One" >}}
In Coding Project 6 you will chain several missions into a single run. This chart is where that run starts.
{{< /callout >}}

{{< checklist >}}
- key: p3_mission_chart
  label: "My mission flowchart is in my notebook, dated"
{{< /checklist >}}

## Score It --- Checkpoint

### Name the shape

{{< gridtable >}}
columns:
  - head: "I need to show..."
    width: 56%
  - head: "Which shape?"
rows:
  -
    - text: "The robot closes its claw"
    - key: p4_s1
      aria: "Shape 1"
  -
    - text: "The very beginning of the program"
    - key: p4_s2
      aria: "Shape 2"
  -
    - text: "Is the [[SENSOR|sensor]] pressed?"
    - key: p4_s3
      aria: "Shape 3"
  -
    - text: "Which box comes next"
    - key: p4_s4
      aria: "Shape 4"
  -
    - text: "The end of the run"
    - key: p4_s5
      aria: "Shape 5"
{{< /gridtable >}}

### Spot the mistake

{{< gridtable >}}
columns:
  - head: "In this chart..."
    width: 56%
  - head: "What is wrong"
rows:
  -
    - text: "A diamond has only one arrow coming out"
    - key: p4_m1
      aria: "Mistake 1"
  -
    - text: "A rectangle says \"drive forward and turn right\""
    - key: p4_m2
      aria: "Mistake 2"
  -
    - text: "Two arrows leave a diamond but neither is labelled"
    - key: p4_m3
      aria: "Mistake 3"
  -
    - text: "There is no oval anywhere"
    - key: p4_m4
      aria: "Mistake 4"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_read
  label: "I can read a flowchart somebody else drew"
- key: p4_can_shapes
  label: "I know what each of the four shapes means"
- key: p4_can_draw
  label: "I can draw a chart for a plan with several steps"
- key: p4_can_diamond
  label: "I can put a decision in a chart and label both ways out"
- key: p4_can_loop
  label: "I can send an arrow back up to repeat part of a plan"
- key: p4_can_fix
  label: "I can find the broken step when someone follows my chart wrongly"
{{< /checklist >}}

### Think about it
{{< ask key="p4_list_vs_chart" label="List versus chart" >}}In Systems Project 3 you wrote your plan as a list. Here you drew it. Which one is easier to check for a missing step, and why?{{< /ask >}}
{{< ask key="p4_whose_fault" label="Whose fault" >}}Your partner followed your chart and got the wrong path. They did exactly what it said. Whose fault is that?{{< /ask >}}
{{< ask key="p4_skip_cost" label="Cost of skipping" >}}Engineers draw the chart before writing the program. What would it cost you to skip that and go straight to code?{{< /ask >}}

### Next

You can draw a plan for something you already know how to do. But most engineering starts with a problem nobody has solved yet.

In **Systems Project 5 --- The Design Process**, you get a problem and the steps for working through it.

*You are also ready for **Coding Project 6**, where several missions become one run.*
