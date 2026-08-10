---
title: "Systems Project 3 — Who's Driving?"
short_title: "Systems Project 3"
linkTitle: "Who's Driving?"
description: "Autonomous, semi-autonomous, and remote control. Be the Robot — find out how exact an instruction has to be."
weight: 3
nav: discovery
mission_id: discovery_systems_03
mission_title: "Systems Project 3 — Who's Driving?"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 3
strand: systems
phase: "Phase B · Think Like an Engineer"
phase_order: 2
time: "One class period"
pace:
  kind: suggested
  label: "Before Coding 4"
eyebrow: "Discovery · Systems Project 3"
heading: "Who's Driving?"
subheading: "Some machines wait for you. Some don't need you at all."
credit: "KIPR · Botball Explorer · Discovery"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Systems Project 3"
  - term: "Strand"
    definition: "Systems"
  - term: "Phase"
    definition: "Think Like an Engineer"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Moving a person across the room two different ways. Then sorting machines into three kinds of control."
  - term: "Strand Link"
    definition: "Do this before Coding Project 4"
  - term: "Before You Start"
    definition: "Systems Project 2. You should know the six parts of a robot."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Paper and a pencil"
      - key: need_2
        label: "A clear space to walk in"
      - key: need_3
        label: "A few chairs or boxes"
      - key: need_4
        label: "Three big sheets of paper for the class"
---

## Try It — Move a Person

Pick a partner. One of you is the **driver**. One of you is the **robot**.

Put a chair in the middle of the room. The robot has to walk around it and touch the far wall.

{{< callout variant="red" title="⚠ Rules for the Robot" >}}
Keep your eyes open. But do **only** what you are told. Do not help. Do not guess.

If the driver says "walk," you walk. You do not stop until you are told to stop.
{{< /callout >}}

### Round 1 — talk them through it

The driver stands and watches. Say each step out loud as the robot goes.

You can see what happens. You can fix it right away.
{{< short-answer key="p1_r1_time" label="Round 1 time" prompt="How long did Round 1 take?" >}}
{{< short-answer key="p1_r1_bump" label="Round 1 bump" prompt="Did the robot bump the chair?" >}}

### Round 2 — write it down first

Now swap jobs. This time the driver may not talk at all.

Write the whole plan on paper first. Every step. Then hand the paper to the robot.

The robot reads it and follows it. The driver stays quiet the whole time.

{{< gridtable >}}
columns:
  - head: "Step"
    width: 14%
  - head: "What the robot must do"
rows:
  -
    - text: "1"
    - key: p1_plan1
      aria: "Plan step 1"
  -
    - text: "2"
    - key: p1_plan2
      aria: "Plan step 2"
  -
    - text: "3"
    - key: p1_plan3
      aria: "Plan step 3"
  -
    - text: "4"
    - key: p1_plan4
      aria: "Plan step 4"
  -
    - text: "5"
    - key: p1_plan5
      aria: "Plan step 5"
  -
    - text: "6"
    - key: p1_plan6
      aria: "Plan step 6"
{{< /gridtable >}}
{{< ask key="p1_r2_wrong" label="What went wrong" >}}What went wrong in Round 2?{{< /ask >}}
{{< ask key="p1_harder" label="Which was harder" >}}Which round was harder for the driver? Say why.{{< /ask >}}

{{< callout variant="gold" title="You Just Did Both Kinds" >}}
In Round 1 you were in charge the whole time. You could fix things as they went wrong.

In Round 2 you had to think of everything first. Once you handed over the paper, you were done.

**Round 2 is how your Botball robot works.**
{{< /callout >}}

## Learn It — Three Kinds of Control

Machines can be sorted by one question. **Who is in charge while it runs?**

#### Remote Control

It does not move on its own. A person must control it.

Let go of the buttons and it stops.

*Examples: A toy car. A drone with a pilot. A crane.*

#### Semi-Autonomous

A person controls some of it. The machine does the rest by itself.

You share the job.

*Examples: A car that parks itself. A plane on autopilot.*

#### Autonomous

It moves around on its own. No person is controlling it.

You start it and step back.

*Examples: A robot vacuum. A Mars rover. Your Botball robot.*

### Which one is your robot?

Your Botball robot is [[AUTONOMOUS|autonomous]].

You may touch it before the match. You may not touch it during the match.

That is the whole reason your code has to be so careful. Nobody can help it once it starts.

{{< callout variant="navy" title="Being Autonomous Costs You Something" >}}
A [[REMOTE CONTROL|remote control]] robot has a person watching. If a cube rolls away, the person just steers around it.

An autonomous robot has nobody. If a cube rolls away, it drives right into the empty spot anyway.

You get speed and you get to run many robots at once. You give up the chance to fix things.
{{< /callout >}}

### The line is fuzzy

Some machines are easy to sort. Many are not.

A dishwasher runs by itself once you press start. But it never moves anywhere.

A [[SEMI-AUTONOMOUS|semi-autonomous]] machine sits in the middle. You do part of the job. It does the rest.

*When two people sort the same machine differently, that is worth talking about. Both of you noticed something real.*

## Do It — Sort the World

### 1. Build a course

Set up three or four things to walk around. Chairs and boxes work well.

Pick a start spot and a finish spot. Mark them both.

{{< checklist >}}
- key: p3_course
  label: "Our course is set up and marked"
{{< /checklist >}}

### 2. Program a person

Write a plan that gets your robot through the whole course. Write it before anyone moves.

{{< callout variant="red" title="⚠ One Leg at a Time" >}}
To move forward you must tell each leg to move. And you must say how far.

"Walk to the door" is not a step. "Move your left leg one step forward" is a step.
{{< /callout >}}

Hand it over. Say nothing. Watch what happens.
{{< short-answer key="p3_ended_up" label="Where robot ended up" prompt="Where did your robot end up?" >}}

### 3. Fix it and run it again

Find the step that went wrong. Change it. Run the whole plan again.

Keep going until your robot finishes the course.

{{< gridtable >}}
columns:
  - head: "Try"
    width: 14%
  - head: "What I changed"
    width: 44%
  - head: "How far it got"
rows:
  -
    - text: "1"
    - key: p3_t1_chg
      aria: "Try 1 change"
    - key: p3_t1_got
      aria: "Try 1 got"
  -
    - text: "2"
    - key: p3_t2_chg
      aria: "Try 2 change"
    - key: p3_t2_got
      aria: "Try 2 got"
  -
    - text: "3"
    - key: p3_t3_chg
      aria: "Try 3 change"
    - key: p3_t3_got
      aria: "Try 3 got"
  -
    - text: "4"
    - key: p3_t4_chg
      aria: "Try 4 change"
    - key: p3_t4_got
      aria: "Try 4 got"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_finished
  label: "My robot finished the course"
{{< /checklist >}}
{{< short-answer key="p3_tries" label="Number of tries" prompt="How many tries did it take?" >}}

### 4. Talk about what was hard

Tell your partner what you learned. Then write down the two biggest things.

{{< gridtable >}}
columns:
  - head: "Thing I learned"
    width: 44%
  - head: "Why it caused trouble"
rows:
  -
    - key: p3_l1
      aria: "Learned 1"
    - key: p3_l1_why
      aria: "Learned 1 why"
  -
    - key: p3_l2
      aria: "Learned 2"
    - key: p3_l2_why
      aria: "Learned 2 why"
{{< /gridtable >}}

*Most teams find the same things. Left and right get mixed up. Steps are too big. Nobody said when to stop.*

### 5. Three posters

Your class needs three big sheets of paper. Head them **Remote Control**, **Semi-Autonomous**, and **Autonomous**.

Think of machines. Write each one on a sticky note. Stick it on the poster where you think it goes.

Write down four of your own here.

{{< gridtable >}}
columns:
  - head: "Machine"
    width: 50%
  - head: "Which poster"
rows:
  -
    - key: p3_m1
      aria: "Machine 1"
    - key: p3_m1_kind
      aria: "Machine 1 kind"
  -
    - key: p3_m2
      aria: "Machine 2"
    - key: p3_m2_kind
      aria: "Machine 2 kind"
  -
    - key: p3_m3
      aria: "Machine 3"
    - key: p3_m3_kind
      aria: "Machine 3 kind"
  -
    - key: p3_m4
      aria: "Machine 4"
    - key: p3_m4_kind
      aria: "Machine 4 kind"
{{< /gridtable >}}

### 6. Walk around and look

Now visit all three posters. Read what other people put up.

Look for one you would move to a different poster.
{{< short-answer key="p3_would_move" label="Would move" prompt="Which one would you move, and where to?" >}}
{{< ask key="p3_move_why" label="Why move it" >}}Why does it belong there instead?{{< /ask >}}

### 7. The hard ones

Some machines will not sit still in one group. Try these.

{{< gridtable >}}
columns:
  - head: "Machine"
    width: 38%
  - head: "Which kind?"
    width: 26%
  - head: "What makes it tricky"
rows:
  -
    - text: "A dishwasher"
    - key: p3_h1
      aria: "Dishwasher kind"
    - key: p3_h1_why
      aria: "Dishwasher why"
  -
    - text: "A lift in a building"
    - key: p3_h2
      aria: "Lift kind"
    - key: p3_h2_why
      aria: "Lift why"
  -
    - text: "A robot vacuum you send to one room"
    - key: p3_h3
      aria: "Vacuum kind"
    - key: p3_h3_why
      aria: "Vacuum why"
  -
    - text: "A traffic light"
    - key: p3_h4
      aria: "Traffic light kind"
    - key: p3_h4_why
      aria: "Traffic light why"
{{< /gridtable >}}
{{< ask key="p3_argument" label="Biggest argument" >}}Did your class agree on all four? Which one caused the biggest argument?{{< /ask >}}

### 8. Your own robot, minute by minute

Your Botball robot is autonomous during a match. But not every minute of the day.

Write which kind it is at each of these times.

{{< gridtable >}}
columns:
  - head: "Right now my robot is…"
    width: 56%
  - head: "Which kind?"
rows:
  -
    - text: "Sitting on the table with no program"
    - key: p3_o1
      aria: "Own 1"
  -
    - text: "Being dragged by me on the Motors screen"
    - key: p3_o2
      aria: "Own 2"
  -
    - text: "Waiting for me to press the A button"
    - key: p3_o3
      aria: "Own 3"
  -
    - text: "Running its program in a match"
    - key: p3_o4
      aria: "Own 4"
{{< /gridtable >}}
{{< short-answer key="p3_changes" label="When it changes" prompt="One of those four is the moment it changes. Which one?" >}}

## Score It — Checkpoint

### Sort these

{{< gridtable >}}
columns:
  - head: "Machine"
    width: 56%
  - head: "Which kind?"
rows:
  -
    - text: "A drone with a person holding the controls"
    - key: p4_s1
      aria: "Sort 1"
  -
    - text: "A Mars rover driving across a crater"
    - key: p4_s2
      aria: "Sort 2"
  -
    - text: "A car that steers itself but needs your hands on the wheel"
    - key: p4_s3
      aria: "Sort 3"
  -
    - text: "Your Botball robot during a match"
    - key: p4_s4
      aria: "Sort 4"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_three
  label: "I can name all three kinds of control"
- key: p4_can_sort
  label: "I can sort a machine into one of them and say why"
- key: p4_can_own
  label: "I know which kind my Botball robot is during a match"
- key: p4_can_steps
  label: "I can write steps small enough for a robot to follow"
- key: p4_can_before
  label: "I know I have to think of everything before the robot starts"
- key: p4_can_cost
  label: "I can say one good thing and one hard thing about being autonomous"
{{< /checklist >}}

### Think about it
{{< ask key="p4_safer_faster" label="Safer or faster" >}}In Round 1 you could fix mistakes right away. In Round 2 you could not. Which felt safer? Which got the job done faster?{{< /ask >}}
{{< ask key="p4_whose_mistake" label="Whose mistake" >}}Your robot cannot see that a cube has rolled away. It drives to the empty spot anyway. Whose mistake is that?{{< /ask >}}
{{< ask key="p4_mars" label="Mars rover" >}}A Mars rover takes about 20 minutes to get a message from Earth. Why does that make it autonomous, whether anyone wanted it that way or not?{{< /ask >}}

### Next

Writing your plan on paper worked. But a long list of steps is hard to read.

In **Systems Project 4 — Draw the Plan**, you learn to draw a plan instead of writing one.

*You are also ready for **Coding Project 4**. That is the first run your robot does on its own.*
