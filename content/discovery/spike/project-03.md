---
title: "Coding Project 3 — Motors and Ports"
short_title: "Coding Project 3"
linkTitle: "Motors and Ports"
description: "Lettered ports, checking direction with the mirror rule, the wheel-spin trick, and the number the hub is always counting."
weight: 3
nav: "discovery"
mission_id: "discovery_spike_coding_03"
mission_title: "Discovery Project 3 (SPIKE) — Motors and Ports"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 3
strand: "coding"
platform: "spike"
phase: "Phase 2 · Make It Move"
phase_order: 2
time: "One class period"
eyebrow: "Discovery · SPIKE Coding Project 3"
heading: "Motors and Ports"
subheading: "Your robot stops talking and starts moving — with its wheels safely off the ground."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Motors and Ports"
mission_label: "No field mission — robot on blocks"
no_mission: true
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 3"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Make It Move"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Plugging in motors, checking their direction, and writing your first program that makes something turn."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your SPIKE Prime driving base"
      - key: need_2
        label: "Charged hub"
      - key: need_3
        label: "Tablet or Chromebook with the SPIKE App"
      - key: need_4
        label: "A block or thick book to raise the wheels"
      - key: need_5
        label: "Your Robot Card"
  - term: "Before You Start"
    definition: "Projects 1 and 2 — you must be able to connect, build a stack, and run it."
---
{{< safety title="⚠ Wheels Off the Ground --- All Project" >}}
Put your robot on a block or a thick book so the wheels spin freely in the air. Every single thing you do in this project happens with the robot up on a block.

A robot that drives off a table lands on the floor. Do not find out.
{{< /safety >}}

## Try It --- Which Way Does It Go?

Think about walking across the room. Your brain does not send one signal to "your body." It sends a signal to your **left** leg and a separate signal to your **right** leg.

The hub works the same way. Two motors, two wheels, two separate commands.

### Find the ports

Look at the hub. There are six [[PORT|port]]s, each with its own letter: **A, C, E** down one side, **B, D, F** down the other.

{{< callout title="Any Device, Any Port" >}}
Letters, not numbers --- and no port is special. A motor works in any of the six, because the hub can *tell* what is plugged into each one. What matters is that your **program** and your **plugs** agree. Our convention for the driving base, from now until the end of the season: **left wheel in A, right wheel in E.**
{{< /callout >}}

{{< checklist >}}
- key: p3_step_ports
  label: "I found all six ports and can point to A, B, C, D, E, and F"
- key: p3_step_plugged
  label: "The left wheel motor is in port A and the right wheel motor is in port E"
- key: p3_step_block
  label: "My robot is on a block with the wheels in the air"
{{< /checklist >}}

### The robot is a mirror of itself

Here is something strange, and it matters for everything you do later. The two wheel motors are identical --- but they are mounted **facing opposite directions**, one on each side of the robot.

So "clockwise" does not mean the same thing to both wheels. Spin both motors clockwise and one wheel rolls the robot forward while the other rolls it backward.

### The wheel-spin trick

You do not need a program to see this. Connect the app to your hub and open the view that shows the connected devices --- you will see a live number for each motor.

**Turn each wheel with your hand**, in the direction that would drive the robot *forward*, and watch that motor's number in the app.

{{< gridtable >}}
columns:
- head: "Port"
- head: "When I spin it forward, the number..."
- head: "So \"forward\" for this wheel is..."
rows:
  - class: trial
    cells:
      - text: "A"
      - key: p3_spin_a_num
        aria: "Port A number direction"
      - key: p3_spin_a_dir
        aria: "Port A forward direction"
  - class: trial
    cells:
      - text: "E"
      - key: p3_spin_e_num
        aria: "Port E number direction"
      - key: p3_spin_e_dir
        aria: "Port E forward direction"
{{< /gridtable >}}

{{< ask key="p3_mirror_why" label="Why the numbers disagree" >}}Both wheels moved the robot's-forward direction under your hand --- but the two numbers changed in opposite ways. What does that tell you about the two motors?{{< /ask >}}

{{< callout title="Hold On to That Number" variant="navy" >}}
The hub is *counting* how far each wheel has turned, all the time, even when no program is running. Remember that it can. In a much later project, that counting is how you will drive exact distances.
{{< /callout >}}

## Learn It --- The Motor Blocks

The pink **Motors** category runs one motor at a time. Its main block needs three pieces of information: *which* motor, *which way*, and *how much*.

{{< wordblocks aria="Word block: run A clockwise for 1 rotations" >}}
rows:
  - block:
      category: motors
      parts:
        - text: "run "
        - slot:
            kind: dropdown
            text: "A"
        - slot:
            kind: dropdown
            text: "↻"
        - text: " for "
        - slot:
            kind: value
            text: "1"
        - slot:
            kind: dropdown
            text: "rotations"
{{< /wordblocks >}}

- The first dropdown is the [[PORT|port]] --- which motor.
- The arrow is the direction: **↻ clockwise** or **↺ counterclockwise** --- from the *motor's* point of view, not the robot's. That distinction is the whole mirror lesson from a minute ago.
- The number and unit say how much: rotations, degrees, or seconds.

Speed is a separate block, and it is a percentage --- set it once and every motor block after it uses it:

{{< wordblocks aria="Word block: set speed A to 50 percent" >}}
rows:
  - block:
      category: motors
      parts:
        - text: "set speed "
        - slot:
            kind: dropdown
            text: "A"
        - text: " to "
        - slot:
            kind: value
            text: "50"
        - text: " %"
{{< /wordblocks >}}

| Speed | What the wheel does |
| --- | --- |
| 100 | Full speed |
| 50 | About half speed |
| 25 | Slow and controlled |
| 0 | Nothing |

### Two kinds of motor block

Look closely at the shelf and you will find two different ways to run a motor --- and the difference between them is the most important idea in this project.

| Code / part | What it means |
| --- | --- |
| run A ↻ for 1 rotations | **Finishes its own job.** The motor turns exactly one rotation, stops, and only then does the next block run. |
| start motor A ↻ | **Starts and lets go.** The motor switches on and the very next block runs immediately --- while the motor keeps spinning, until something tells it to stop. |
| stop motor A | The something. Switches that motor off. |

### Why you always need the wait

Here is the thing that surprises everyone. Look at this program:

{{< wordblocks aria="Stack: when program starts, start motor A, start motor E, stop motor A, stop motor E" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
  - block:
      category: motors
      parts:
        - text: "start motor "
        - slot:
            kind: dropdown
            text: "A"
        - slot:
            kind: dropdown
            text: "↺"
  - block:
      category: motors
      parts:
        - text: "start motor "
        - slot:
            kind: dropdown
            text: "E"
        - slot:
            kind: dropdown
            text: "↻"
  - block:
      category: motors
      parts:
        - text: "stop motor "
        - slot:
            kind: dropdown
            text: "A"
  - block:
      category: motors
      parts:
        - text: "stop motor "
        - slot:
            kind: dropdown
            text: "E"
{{< /wordblocks >}}

**The wheels will not move. Not even a twitch.**

The hub switches both motors on, and then --- faster than you can blink --- reads the next blocks and switches them off again. Remember from Project 2: it moves through blocks far quicker than your eye can follow.

{{< callout title="Starting a Motor Is Not \"For a While\"" variant="gold" >}}
*Start motor* means "run, starting now, until something tells you to stop." It does not mean "run for a while." The **wait** block is what gives it that while --- exactly the same lesson as the two pictures in Project 2.
{{< /callout >}}

| Code / part | What it means |
| --- | --- |
| start motor A ↺ | Left wheel on. Keep going. |
| start motor E ↻ | Right wheel on. Keep going. |
| wait 2 seconds | The motors are still running this whole time. |
| stop motor A · stop motor E | Now everything stops. |

{{< ask key="p3_wait_doing" label="What the wait block does" >}}In your own words: what is the wait block actually doing while the motors run?{{< /ask >}}

### A stop is not instant

*Stop motor* switches the power off --- but a spinning wheel does not freeze mid-turn. On the ground, the robot coasts a little further before it truly stops. Keep that in the back of your mind: it is why, in the next project, a stop always gets a moment to settle before anything else happens.

### Which end is the front?

Your driving base has two driven wheels and one small free-rolling ball --- a [[CASTER|caster]] --- that just holds the robot up. The driven wheels are the front; the caster trails along behind.

{{< safety title="⚠ Decide Now, Not Later" >}}
If half your team calls one end the front and the other half calls the other end the front, your turns will go the wrong way and nobody will be able to see why. Agree it, and write it down: *the front of our robot is the end with ___ on it.*
{{< /safety >}}

{{< short-answer key="p3_front_is" label="The front of our robot" >}}

## Do It --- Make It Turn

Robot on the block. Wheels in the air. Every time.

### Step 1 --- Write your first motor program

Make a new project called `Motors` --- names in the project name, that is your [[ATTRIBUTION|attribution]]. Build the start-wait-stop program from Learn It: left wheel counterclockwise, right wheel clockwise, wait 2 seconds, both stops. Run it. Watch the wheels.

{{< checklist >}}
- key: p3_step_first_run
  label: "Both wheels spun the robot's-forward direction for about 2 seconds"
{{< /checklist >}}

{{< ask key="p3_direction_check" label="Direction check" >}}Did both wheels spin the robot forward? If one went backward, which part of which block do you need to change?{{< /ask >}}

### Step 2 --- Prove the wait matters

Delete the wait block. Run.

{{< short-answer key="p3_no_wait" label="What happened without wait" prompt="What happened?" >}}

Now put it back.

{{< checklist >}}
- key: p3_step_wait_back
  label: "The wait is back and the program works again"
{{< /checklist >}}

### Step 3 --- Prove the stops matter

Now delete both *stop motor* blocks instead. Run. Watch carefully --- including what happens *after* the program looks finished.

{{< short-answer key="p3_no_stop" label="What happened without stops" prompt="What happened this time?" >}}

Put them back. Getting into the habit now matters: a robot on a real field with nothing telling its motors to stop is a robot leaving the table.

{{< checklist >}}
- key: p3_step_stop_back
  label: "The stops are back"
{{< /checklist >}}

### Step 4 --- Explore speed

Add *set speed* blocks for both motors at the top of the stack. Change the percentage, run, and record what you notice. Keep the wait at 2 seconds every time so it is a fair test.

{{< gridtable >}}
columns:
- head: "Speed (%)"
- head: "What I noticed"
rows:
  - class: trial
    cells:
      - text: "25"
      - key: p3_speed_25
        aria: "Speed 25"
  - class: trial
    cells:
      - text: "50"
      - key: p3_speed_50
        aria: "Speed 50"
  - class: trial
    cells:
      - text: "75"
      - key: p3_speed_75
        aria: "Speed 75"
  - class: trial
    cells:
      - text: "100"
      - key: p3_speed_100
        aria: "Speed 100"
{{< /gridtable >}}

{{< ask key="p3_speed_double" label="Speed doubling" >}}Is speed 100 exactly twice as fast as speed 50? What makes you say that?{{< /ask >}}

### Step 5 --- Go backward

Flip the direction arrow on both *start motor* blocks --- clockwise becomes counterclockwise and counterclockwise becomes clockwise. Run it.

{{< checklist >}}
- key: p3_step_backward
  label: "Both wheels spun the robot's-backward direction"
{{< /checklist >}}

### Step 6 --- Make it agree with itself --- and see what happens

Now set **both** motors to the *same* arrow --- both clockwise. Run it. The wheels are in the air, so watch what *would* happen on the ground.

{{< ask key="p3_same_dir" label="Same direction result" >}}If this robot were on the floor, what would it do --- and why? (Think about the mirror.){{< /ask >}}

Hold on to this. It is exactly how you will make the robot spin in place in Project 5.
{.muted}

### Step 7 --- Plan three of your own

Describe the blocks for each of these. Do not build them yet --- just write them.

{{< gridtable >}}
columns:
- head: "I want to..."
- head: "The block says"
rows:
  - class: trial
    cells:
      - text: "Run the left wheel forward at full speed"
      - key: p3_own_1
        aria: "Own command 1"
  - class: trial
    cells:
      - text: "Run the right wheel forward at 80%"
      - key: p3_own_2
        aria: "Own command 2"
  - class: trial
    cells:
      - text: "Turn the right wheel exactly 2 rotations"
      - key: p3_own_3
        aria: "Own command 3"
  - class: trial
    cells:
      - text: "Wait three seconds"
      - key: p3_own_4
        aria: "Own command 4"
{{< /gridtable >}}

Now pick one and actually build and run it, to check you were right.

{{< checklist >}}
- key: p3_step_own
  label: "I tested one of my own commands and it did what I expected"
{{< /checklist >}}

## Score It --- Checkpoint

No field mission yet --- that starts in Project 4. This checkpoint is about whether your motors are set up correctly and whether you can control them on purpose.

### My robot's setup

Write this down. Every program you write from now on depends on it.
{.muted}

{{< gridtable >}}
columns:
- head: "Question"
- head: "My answer"
rows:
  - cells:
      - text: "Which port is my left wheel in?"
      - key: p3_setup_left
        aria: "Left wheel port"
  - cells:
      - text: "Which port is my right wheel in?"
      - key: p3_setup_right
        aria: "Right wheel port"
  - cells:
      - text: "Which arrow is \"robot forward\" for the left wheel?"
      - key: p3_setup_left_dir
        aria: "Left wheel forward arrow"
  - cells:
      - text: "Which arrow is \"robot forward\" for the right wheel?"
      - key: p3_setup_right_dir
        aria: "Right wheel forward arrow"
  - cells:
      - text: "What speed makes a good steady pace?"
      - key: p3_setup_speed
        aria: "Good steady speed"
{{< /gridtable >}}

### Read the program

What will this program do? Write it out before you build it.

{{< wordblocks aria="Stack: start A counterclockwise, start E clockwise, wait 1 second, start A clockwise, start E counterclockwise, wait 1 second, stop A, stop E" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
  - block:
      category: motors
      parts:
        - text: "start motor "
        - slot:
            kind: dropdown
            text: "A"
        - slot:
            kind: dropdown
            text: "↺"
  - block:
      category: motors
      parts:
        - text: "start motor "
        - slot:
            kind: dropdown
            text: "E"
        - slot:
            kind: dropdown
            text: "↻"
  - block:
      category: control
      parts:
        - text: "wait "
        - slot:
            kind: value
            text: "1"
        - text: " seconds"
  - block:
      category: motors
      parts:
        - text: "start motor "
        - slot:
            kind: dropdown
            text: "A"
        - slot:
            kind: dropdown
            text: "↻"
  - block:
      category: motors
      parts:
        - text: "start motor "
        - slot:
            kind: dropdown
            text: "E"
        - slot:
            kind: dropdown
            text: "↺"
  - block:
      category: control
      parts:
        - text: "wait "
        - slot:
            kind: value
            text: "1"
        - text: " seconds"
  - block:
      category: motors
      parts:
        - text: "stop motor "
        - slot:
            kind: dropdown
            text: "A"
  - block:
      category: motors
      parts:
        - text: "stop motor "
        - slot:
            kind: dropdown
            text: "E"
{{< /wordblocks >}}

{{< ask key="p3_read_predict" label="Program prediction" >}}My prediction:{{< /ask >}}

{{< ask key="p3_read_result" label="Program result" >}}Now build and run it. Were you right? If not, what did you miss?{{< /ask >}}

### Can you do it again?

{{< checklist >}}
- key: p3_can_ports
  label: "I can name all six ports and know a motor works in any of them"
- key: p3_can_spin
  label: "I can use the wheel-spin trick to check a motor's direction without running a program"
- key: p3_can_mirror
  label: "I can explain why the two wheels need opposite arrows to drive the robot forward"
- key: p3_can_block
  label: "I can build a motor block with the right port, arrow, and amount"
- key: p3_can_wait
  label: "I can explain why a start-motor program needs a wait block"
- key: p3_can_stop
  label: "I always finish a start-motor program with stop blocks"
{{< /checklist >}}

### Think about it

{{< ask key="p3_troubleshoot" label="Troubleshooting" >}}A teammate says their robot "just doesn't work" --- they run the program and nothing moves. Name two things you would check first, and why.{{< /ask >}}

{{< ask key="p3_enough" label="Is it enough" >}}Nothing in this project told the robot how far to go --- only which way to spin and for how long. Do you think that is enough to hit a target on the field? Why or why not?{{< /ask >}}

### Next

In **Project 4 --- Out and Back**, the robot comes off the block and onto the field. You will meet the **Movement** blocks --- which handle the mirror for you --- drive out of the starting box, park [[IN THE ZONE|IN THE ZONE]], and drive back. And that scores a real mission.
