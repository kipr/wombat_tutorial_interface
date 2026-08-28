---
title: "Coding Project 10 — Feeling for Things"
short_title: "Coding Project 10"
linkTitle: "Feeling for Things"
description: "The force sensor, hexagons, and the checking that never sleeps. Drive until bump, find a wall you can trust, and stack the pyramid."
weight: 10
nav: "discovery"
mission_id: "discovery_spike_coding_10"
mission_title: "Discovery Project 10 (SPIKE) — Feeling for Things"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 10
strand: "coding"
platform: "spike"
phase: "Phase 4 · Make It Reliable"
phase_order: 4
time: "One class period"
eyebrow: "Discovery · SPIKE Coding Project 10"
heading: "Feeling for Things"
subheading: "Your robot gets its first sense — and its first way of saying keep going until ."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Feeling for Things"
mission_label: "Mission 13 advanced — 13 pts"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 10"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Make It Reliable"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Mounting a touch [[SENSOR|sensor]], learning the loop that keeps checking it, and using contact to find a position your robot can trust."
  - term: "Mission Anchor"
    definition: "[[@13:base|Mission 13]] — Straighten Up (advanced bonus) — 13 points"
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your robot with arm and claw"
      - key: need_2
        label: "Force [[SENSOR|sensor]]"
      - key: need_3
        label: "Tablet or Chromebook with the SPIKE App"
      - key: need_4
        label: "Charged hub"
      - key: need_5
        label: "The game field"
      - key: need_6
        label: "Your Project 9 program"
  - term: "Before You Start"
    definition: "Project 9 — you need to be comfortable writing and using [[VARIABLE|variable]]s."
---
## Try It --- Walking in the Dark

Imagine the power is out and you are trying to cross a room you know well. Your eyes are useless. So you put a hand out in front of you and start walking.

**Actually do it.** Stand a few steps from a wall, close your eyes, put one hand out, and walk slowly toward it until you touch it.

{{< short-answer key="p1_check_count" label="How many checks" prompt="How many times did you check whether your hand had reached the wall?" >}}

{{< ask key="p1_whole_time" label="What you were doing" >}}You did not check once and hope. What were you doing the whole time you were walking?{{< /ask >}}

{{< callout title="That Is a Loop" variant="gold" >}}
Check. Step. Check. Step. Check --- *touched something* --- stop and do something different.

Repeating a check while you wait for something to become true is called **looping**, and it is the whole idea of this project.
{{< /callout >}}

### Sort your sensors

Get your kit's three sensors out on the table --- force, color, distance. Without looking anything up, sort them into **two piles**. You decide the rule.

{{< gridtable >}}
columns:
- head: ""
- head: "What went in it"
rows:
  - class: trial
    cells:
      - text: "Pile 1"
      - key: p1_pile_1
        aria: "Pile one"
  - class: trial
    cells:
      - text: "Pile 2"
      - key: p1_pile_2
        aria: "Pile two"
{{< /gridtable >}}

{{< short-answer key="p1_pile_rule" label="Sorting rule" prompt="What rule did you use?" >}}

{{< callout title="One Split Matters More Than the Others" >}}
Some sensor questions work like a **light switch** --- yes or no, and nothing in between. *Is the button pressed?* Others answer with a whole range --- *how bright? how far?*

If that is how you sorted them, you found the split programmers care about. Today is a light-switch day: the **force sensor**, asked one yes-or-no question.
{{< /callout >}}

## Learn It --- Keep Checking Until

A [[SENSOR|sensor]] turns something physical --- a press, a color, a distance --- into something your program can read.

### True or false

The force sensor's yes-or-no question comes as a **six-sided block** --- a hexagon. Hexagons do not *do* anything on their own. Each one is a question with exactly two possible answers: **true** or **false**.

{{< wordblocks aria="Hexagon: F is pressed?" >}}
rows:
  - block:
      category: sensors
      parts:
        - slot:
            kind: condition
            style: sensor
            parts:
              - slot:
                  kind: dropdown
                  text: "F"
              - text: " is pressed?"
{{< /wordblocks >}}

Not pressed → the hexagon answers **false**. Pressed → it answers **true**. Nothing in between --- a light switch, exactly like your sorting rule.

### Why the wait block cannot help you here

Every time you needed the robot to wait, you used *wait 2 seconds*. That will not work now. **A sleeping program cannot notice anything.** If you tell it to wait two seconds and the sensor is pressed after half a second, the robot never knows.

You need it to keep checking --- over and over, as fast as it can. Hexagons snap into two Control blocks built for exactly that:

{{< wordblocks aria="wait until F is pressed" >}}
rows:
  - block:
      category: control
      parts:
        - text: "wait until "
        - slot:
            kind: condition
            style: sensor
            parts:
              - slot:
                  kind: dropdown
                  text: "F"
              - text: " is pressed?"
{{< /wordblocks >}}

*Wait until* asks its question as fast as it can, thousands of times a second, and does not let the next block run until the answer is **true**. It is your hand-out-in-the-dark, as a block.

{{< wordblocks aria="repeat until raining stops, umbrella stays up" >}}
rows:
  - control:
      category: control
      head:
        - text: "repeat until "
        - slot:
            kind: condition
            parts:
              - text: "it stopped raining?"
      body:
        - block:
            category: display
            parts:
              - text: "keep the umbrella up"
{{< /wordblocks >}}

*Repeat until* is the same idea with a mouth: everything held **inside its jaws** runs over and over, as long as the answer is still false. The moment the answer turns true, the robot falls out of the jaws and moves on to whatever comes after.

{{< callout title="Inside the Jaws, and After Them" variant="gold" >}}
What goes **inside** is the thing to keep doing. What goes **after** is what happens when the answer finally changes. Deciding which is which is the whole skill.
{{< /callout >}}

### Drive until bump

Put it together. Read it out loud: "start driving --- keep checking until the sensor is pressed --- then stop."

{{< wordblocks aria="start moving, wait until pressed, stop moving" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
  - block:
      category: movement
      parts:
        - text: "start moving "
        - slot:
            kind: steering
            value: "0"
  - block:
      category: control
      parts:
        - text: "wait until "
        - slot:
            kind: condition
            style: sensor
            parts:
              - slot:
                  kind: dropdown
                  text: "F"
              - text: " is pressed?"
      note: "checking, thousands of times a second"
  - block:
      category: movement
      parts:
        - text: "stop moving"
{{< /wordblocks >}}

{{< safety title="⚠ The Stop Goes After, Not Inside" >}}
The *wait until* is the checking. The *stop moving* is what happens when the checking succeeds. Put the stop before the wait and the robot never moves; forget the *start moving* and the robot waits forever at a standstill, checking a sensor nothing will ever press.
{{< /safety >}}

### Comparing numbers

Hexagons are not only about sensors. The green **Operators** shelf has three comparison hexagons, and they turn any pair of numbers into a true-or-false question:

| Hexagon | Asks | Example |
| --- | --- | --- |
| **<** | is the left smaller? | 5 < 4 is **false** |
| **=** | are they equal? | 5 = 5 is **true** |
| **>** | is the left bigger? | 5 > 4 is **true** |

Today your question is *is pressed?* and you will not need these. But hold on to them --- in Project 11 the loop stops watching a switch and starts watching a **number**, and these hexagons are how you ask about numbers.
{.muted}

One more: the green **not** hexagon flips an answer. *not (F is pressed?)* is true exactly when the sensor is *not* pressed. You will want it the moment you need "keep going while nothing is touching."

## Do It --- Drive Until Bump

### Step 1 --- Mount the sensor and read it live

Mount your force sensor on the front of the robot so it hits things before anything else does. Plug it into port **F**.

In the app, open the device view. Press the sensor with your finger and watch what it reports.

{{< gridtable >}}
columns:
- head: "Question"
- head: "My answer"
rows:
  - class: trial
    cells:
      - text: "Which port is my force sensor in?"
      - key: p3_sensor_port
        aria: "Sensor port"
  - class: trial
    cells:
      - text: "What does it show when nothing touches it?"
      - key: p3_sensor_idle
        aria: "Sensor idle"
  - class: trial
    cells:
      - text: "What does it show when I press it?"
      - key: p3_sensor_pressed
        aria: "Sensor pressed"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_sensor_works
  label: "My sensor changes when I press it, and I watched it happen before writing any blocks"
{{< /checklist >}}

### Step 2 --- Drive Until Bump --- in your hands first

{{< safety title="⚠ Hold the Robot in the Air for the First Run" >}}
Do not put this on a table or the field yet. **Hold the robot up** so the wheels spin freely, run the program, then press the sensor with your finger and watch the wheels stop.

A loop that never sees its sensor never stops. Find that out in your hands, not off the edge of a table.
{{< /safety >}}

New project called `Drive Until Bump`. Plan it as [[PSEUDOCODE|pseudocode]] first, then build the start-moving / wait-until / stop-moving stack from Learn It.

{{< checklist >}}
- key: p3_bump_hands
  label: "Wheels stop when I press the sensor with my finger"
- key: p3_bump_floor
  label: "It works on the floor against a wall or a book"
{{< /checklist >}}

### Step 3 --- Flip the condition and predict

Wrap the hexagon in a green **not**: *wait until not (F is pressed?)*. Before you run it, **write down what you think will happen.**

{{< short-answer key="p3_flip_predict" label="Flip prediction" prompt="My prediction:" >}}

Now run it. Then run it again while holding the sensor pressed the whole time.

{{< ask key="p3_flip_result" label="Flip result" >}}What actually happened, both times? Explain why, using the words "true" and "false".{{< /ask >}}

Take the *not* back out.

### Step 4 --- Bump and Go Home

Here is what makes a force sensor genuinely useful: **a wall is a place your robot can always find.**

New project. Mount or turn the sensor so it faces backward --- then drive *backward* until the sensor presses against the starting box wall, and drive forward a set distance into the box and stop.

| Code / part | What it means |
| --- | --- |
| 1. Start moving backward | A negative speed, or steering with a backward start --- your choice. |
| 2. Wait until pressed | The wall ends the trip, wherever the robot wandered from. |
| 3. Stop and settle |  |
| 4. Move forward a set distance | Into the box. |

{{< callout title="Why This Matters More Than It Looks" variant="gold" >}}
No matter where the robot wandered off to, it can come back and touch a wall --- and now it knows *exactly* where it is. Every measurement after that starts from a spot it can trust.
{{< /callout >}}

{{< checklist >}}
- key: p3_home_works
  label: "My robot finds the wall and ends up in the same place every time"
{{< /checklist >}}

### Step 5 --- Add a stop and settle

A robot that has been driving is still rocking when the checking ends. Momentum does not care about your program. Put a short *wait 0.5 seconds* between the stop and whatever comes next, and compare runs with and without it.

{{< short-answer key="p3_settle_diff" label="Settle difference" prompt="What difference did the pause make?" >}}

### Step 6 --- Wait for a press before starting

One more use for the same idea. Put a *wait until (F is pressed?)* block at the very top of a mission program, before anything moves.

Now your robot waits for a tap on its sensor instead of driving off the second you press Run --- which is exactly how you want to start a match.

{{< checklist >}}
- key: p3_start_press
  label: "My robot waits for a press before it moves"
{{< /checklist >}}

{{< ask key="p3_empty_loop" label="What the empty loop does" >}}That wait-until block has no jaws and nothing inside it. Is it still doing something the whole time? What?{{< /ask >}}

### Step 7 --- Mission 13 Advanced --- all three cubes13 pts

{{< mission-summary mission="13" video=true >}}
{{< /mission-summary >}}

{{< callout title="A Pyramid Counts --- and It Is Easier" variant="gold" >}}
Read the scoring examples again. **A pyramid scores exactly the same as a three-high tower.** Two cubes on the bottom, one on top.

This is a final-position mission, so whatever you build has to still be standing when the match ends. A pyramid is far harder to knock over than a tower. Take the easy 13 points.
{{< /callout >}}

Use the force sensor to make your approach repeatable. If your robot can find a wall or a cube by contact instead of by timing, every placement after that starts from a known spot.

{{< ask key="p3_sensor_where" label="Where sensor helps" >}}Where in your run does the force sensor help most --- finding the cubes, or finding your way back?{{< /ask >}}

{{< checklist >}}
- key: p3_m13_three
  label: "All three Unstraight Cubes are in one stack or pyramid"
- key: p3_m13_stands
  label: "It is still standing after the robot backs away"
{{< /checklist >}}

### Step 8 --- Run it five times

{{< gridtable >}}
columns:
- head: "Run"
- head: "All three stacked?"
- head: "Still standing at the end?"
- head: "Points"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_r1_stack
        aria: "R1 stacked"
      - key: p3_r1_stand
        aria: "R1 standing"
      - key: p3_r1_pts
        aria: "R1 points"
  - class: trial
    cells:
      - text: "2"
      - key: p3_r2_stack
        aria: "R2 stacked"
      - key: p3_r2_stand
        aria: "R2 standing"
      - key: p3_r2_pts
        aria: "R2 points"
  - class: trial
    cells:
      - text: "3"
      - key: p3_r3_stack
        aria: "R3 stacked"
      - key: p3_r3_stand
        aria: "R3 standing"
      - key: p3_r3_pts
        aria: "R3 points"
  - class: trial
    cells:
      - text: "4"
      - key: p3_r4_stack
        aria: "R4 stacked"
      - key: p3_r4_stand
        aria: "R4 standing"
      - key: p3_r4_pts
        aria: "R4 points"
  - class: trial
    cells:
      - text: "5"
      - key: p3_r5_stack
        aria: "R5 stacked"
      - key: p3_r5_stand
        aria: "R5 standing"
      - key: p3_r5_pts
        aria: "R5 points"
{{< /gridtable >}}

{{< ask key="p3_fell" label="Why it fell" >}}Did the stack fall over on any run? What knocked it --- the robot leaving, or the stack itself?{{< /ask >}}

## Score It --- Checkpoint

### My score

{{< gridtable >}}
columns:
- head: "Mission part"
- head: "Scored?"
- head: "Points"
rows:
  - cells:
      - text: "Mission 13 --- Advanced Bonus (all three cubes stacked)"
      - key: p4_s_m13adv
        aria: "Score M13 advanced"
      - text: "13"
  - class: total
    cells:
      - text: "My total"
      - key: p4_total
        aria: "Total"
      - text: "13"
{{< /gridtable >}}

With Project 6 and Project 8, Mission 13 is now worth 21 points across all three parts --- the most any single mission has given you.
{.muted}

### Finish the check

Say which blocks you would use for each.

{{< gridtable >}}
columns:
- head: "I want the robot to..."
- head: "My blocks"
rows:
  - class: trial
    cells:
      - text: "Drive until the sensor is pressed"
      - key: p4_fin_1
        aria: "Finish one"
  - class: trial
    cells:
      - text: "Drive while the sensor *is* pressed, stop when released"
      - key: p4_fin_2
        aria: "Finish two"
  - class: trial
    cells:
      - text: "Do nothing until someone taps the sensor"
      - key: p4_fin_3
        aria: "Finish three"
{{< /gridtable >}}

### Spot the bug

Each of these is wrong. Say what happens when you run it.

{{< gridtable >}}
columns:
- head: "The stack"
- head: "What goes wrong"
rows:
  - class: trial
    cells:
      - text: "start moving · **wait 2 seconds** · stop moving --- used to \"wait for the bump\""
      - key: p4_bug_1
        aria: "Bug one"
  - class: trial
    cells:
      - text: "wait until pressed · start moving · stop moving"
      - key: p4_bug_2
        aria: "Bug two"
  - class: trial
    cells:
      - text: "**stop moving** inside the jaws of a repeat-until that is supposed to be driving"
      - key: p4_bug_3
        aria: "Bug three"
  - class: trial
    cells:
      - text: "wait until pressed, with no *start moving* anywhere"
      - key: p4_bug_4
        aria: "Bug four"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_hex
  label: "I can explain what a hexagon block is and what its only two answers mean"
- key: p4_can_live
  label: "I read a sensor live in the app before I build any blocks with it"
- key: p4_can_until
  label: "I know what *wait until* does the whole time it is waiting"
- key: p4_can_jaws
  label: "I know what goes inside a repeat-until's jaws and what goes after them"
- key: p4_can_hands
  label: "I test a new sensor program with the robot in my hands first"
- key: p4_can_wall
  label: "I can use contact with a wall to give my robot a position it can trust"
{{< /checklist >}}

### Think about it

{{< ask key="p4_time_vs_touch" label="Time vs touch" >}}Since Project 3, every distance your robot has driven was really a length of *time*. What does a force sensor give you that a stopwatch never could?{{< /ask >}}

{{< ask key="p4_bad_to_bump" label="Bad to bump" >}}A force sensor only tells you something when you are already touching it. Name one thing on the field you would want to stop at, where bumping into it first would be a bad idea.{{< /ask >}}

{{< ask key="p4_what_else" label="What else to watch" >}}Your loop asks a question over and over. So far the question has always been about a sensor. What else could a robot count or measure that a loop could watch?{{< /ask >}}

### Next

A wall tells you where you are, but only if there is a wall. Most of the field has nothing to bump into.

In **Project 11 --- Counting and Turning by Feel**, you point the same checking at a *number* instead of a switch --- the degrees your wheels have rolled, and the angle the whole robot has turned. The hub has been measuring both all along.
