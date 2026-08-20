---
title: "Unit 1 · Big Idea 1 — The Waypoint Navigator"
short_title: "Python 1.1"
hub_unit: 1
description: "Algorithms and sequencing — write, run, and debug a program that drives to a target and stops."
weight: 30
nav: python
track: python
type: labs
mission_id: unit1_bigidea1
eyebrow: "Unit 1 · Big Idea 1"
heading: "Computers Follow Instructions"
subheading: "Student Lab · The Waypoint Navigator"
credit: "KIPR · Botball Explorer · Unit 1 Big Idea 1 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine understand and act within the world?"
  - term: "Big Idea"
    definition: "Computers Follow Instructions"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems require instructions before they can act."
  - term: "CS1 Concepts"
    definition: "[[ALGORITHM|Algorithms]] · Sequencing · Precision · [[DEBUGGING|Debugging]] · Inputs &amp; Outputs"
  - term: "Game Context"
    definition: "[[@1|Mission 1]] — Waypoint Alpha"
  - term: "What You Need"
    definition: "Explorer robot kit · game field · this lab sheet"
---

## Overview

In this activity you will write, run, and debug a program that navigates a robot to a specific location on the Foundations field and stops. That sounds simple --- and the goal is simple --- but the path from idea to working program will reveal something important.

{{< callout title="Core Insight" >}}
A robot does exactly what you tell it to do --- no more, no less.

If the robot does the wrong thing, the instructions are wrong. Your job is to find out why.
{{< /callout >}}

### By the end of this activity you will be able to:

- Define *algorithm* and explain why order matters in a sequence of instructions.
- Write a precise, step-by-step program that moves a robot to a target zone.
- Use a structured debugging process to find and fix errors in your code.
- Connect robot behavior to the AI literacy idea that all intelligent systems begin with instructions.
{.obj}

### Commands You Will Use

These are built-in commands the robot already understands. You will use them inside your program. You don't have to write them --- they come with the [[CONTROLLER|controller]].
{.muted}

| Command | What it does |
| --- | --- |
| `motor(port, power)` | Turns the motor on the given [[PORT\|port]] at a power level from −100 to 100. Example: `motor(0, 100)` runs motor 0 forward at full power. |
| `msleep(ms)` | Pauses the program for the given number of milliseconds (1000 ms = 1 second). The robot keeps doing whatever it was last told to do during the pause. |
| `ao()` | "All off." Turns every motor port off at once. Use it to make the robot stop. |
| `alloff()` | Turns all motors off --- the same idea as `ao()`. Either one brings the robot to a complete stop. |

## Phase 1 --- Activate: The Literal Robot

### The Sandwich Test

Before you program a robot, it helps to feel what it is like to be one. A robot follows every instruction exactly as written. It cannot guess what you meant. It does only what you said --- even when that is obviously not what you wanted.

{{< callout title="Your Task" variant="navy" >}}
1\. In the boxes below, write step-by-step instructions for making a peanut butter sandwich.

2\. When you are done, read your instructions back out loud --- and imagine following them as literally as possible.

3\. Every time an instruction is unclear or could go wrong, mark it.
{{< /callout >}}

{{< steps key="p1_sandwich" label="Sandwich step" count=6
          group="My sandwich instructions (write them first):" >}}

{{< ask key="p1_what_went_wrong" label="What would go wrong" >}}Reading them back literally, what would go wrong?{{< /ask >}}

{{< ask key="p1_why" label="Why the robot does something unintended" >}}Why would the robot do something you did not intend? What does that tell you about instructions?{{< /ask >}}

## Phase 2 --- Concept: What Is an Algorithm?

An algorithm is a precise, ordered sequence of instructions that tells a system exactly what to do. Every program you write is an algorithm. Every [[AUTONOMOUS|autonomous]] robot runs an algorithm.

### Four Properties of a Good Algorithm

1. **Complete** --- every step needed to finish the task is included.
2. **Ordered** --- the steps happen in the right sequence.
3. **Precise** --- each step is specific enough that it can be followed without guessing.
4. **Correct** --- following the steps produces the intended result.

### Inputs and Outputs

Every algorithm takes *inputs* (information it needs) and produces *outputs* (the result). For a robot navigation program:

| | |
| --- | --- |
| Inputs | Motor speed · time to run · starting position of the robot |
| Outputs | Robot position on the field · whether the mission scored |

{{< ask key="p2_algorithm_vs_ideas" label="Algorithm versus a list of ideas" >}}In your own words: what is the difference between an algorithm and just a list of ideas?{{< /ask >}}

## Phase 3 --- Plan

### Mission 1 --- Waypoint Alpha [[REQUIREMENT|Requirement]]

{{< mission-summary mission="1" video=true >}}
{{< /mission-summary >}}

### Step 1 --- Field Orientation

Before writing code, you need to know where things are. Measure or estimate these values on the real field and record them here.

{{< gridtable >}}
columns:
  - head: Measurement
    width: 58%
  - head: Your Estimate
    width: 27%
  - head: Unit
    width: 15%
rows:
  - - text: Distance from starting box edge to Waypoint Alpha zone
    - key: p3_dist_to_zone
    - key: p3_dist_to_zone_unit
  - - text: Width of the Waypoint Alpha zone (front to back)
    - key: p3_zone_width
    - key: p3_zone_width_unit
  - - text: Distance from Waypoint Alpha zone back to starting box
    - key: p3_dist_back
    - key: p3_dist_back_unit
  - - text: Motor speed we plan to use
    - key: p3_motor_speed
    - key: p3_motor_speed_unit
      value: "% power"
{{< /gridtable >}}

### Step 2 --- Write Your Algorithm in Plain English

Write your plan as a numbered list. Do not write code yet. Be specific enough that someone who has not seen the field could follow your instructions.

{{< steps key="p3_planA" label="Plan A step" count=3
          group="Phase A: Travel to Waypoint Alpha" >}}

{{< steps key="p3_planB" label="Plan B step" start=4 count=2
          group="Phase B: Stop in the zone" >}}

{{< steps key="p3_planC" label="Plan C step" start=6 count=3
          group="Phase C: Return to starting box (Bonus Mission)" >}}

### Step 3 --- Predict

{{< ask key="p3_predict" label="Prediction" >}}Before you run anything: what do you predict will go wrong on the first try, and why?{{< /ask >}}

## Phase 4 --- Build  & Run

{{< figrow >}}
- src: ide/code_template_py.png
  alt: The template you start from.
- src: ide/compile-succeeded_py.png
  alt: What success looks like.
{{< /figrow >}}

### Starting Code Template

Type this program into your robot controller exactly as shown. Each line has a [[COMMENT|comment]] (after the `#`) that explains what it does. The comments are notes for you --- the robot ignores them.

{{< code >}}

#!/usr/bin/python3

# Unit 1, Big Idea 1: Waypoint Navigator

# Name: _______________________   Date: ___________

import os, sys
sys.path.append("/usr/lib")
import _kipr as k

def main():
    k.motor(0, 100)  # this turns one of the motors on
    k.motor(3, 100)  # this turns the other motor on
    k.msleep(1000)   # drive forward for one second
    k.ao()           # turns the motors off after the msleep has completed
    k.msleep(1000)   # hold still so the stop is visible
    # Add your Bonus Mission call here when ready.

main()
{{< /code >}}

### Before You Press Run --- [[CHECKLIST|Checklist]]

- Your program is typed in exactly as shown, with indentation matching the template
- Robot is fully inside the starting box
- You know exactly what "success" looks like before the run starts
- You are watching to see whether the robot reaches the zone and stops

## Phase 5 --- Debug

Debugging is not guessing. It is a structured process of observation, hypothesis, and testing. Every time something goes wrong, use this process instead of randomly changing numbers.

### Structured Debugging --- Four Questions

1. **OBSERVE:** What exactly happened? (Not "it didn't work" --- be specific.)
2. **COMPARE:** What did you expect to happen? What was the gap?
3. **HYPOTHESIZE:** What is the most likely cause of that gap?
4. **TEST:** Change one thing, run again, and record what changed.

### Trial Log

Complete one row for every run. Never skip a row --- even failed runs contain information.

{{< repeattable count=6 prefix="trial" >}}
- kind: number
  head: "Trial"
  width: "7%"
- head: What you changed
  key: changed
  width: 16%
- head: Reached zone?
  key: reached
  width: 13%
- head: Stopped in zone?
  key: stopped
  width: 14%
- head: Returned to box?
  key: returned
  width: 14%
- head: What you observed
  key: observed
{{< /repeattable >}}

{{< ask key="p5_bug" label="Bug description" >}}Describe one specific bug you found. What was the symptom? What was the cause? How did you fix it?{{< /ask >}}

## Phase 6 --- Connect: The AI Literacy Bridge

{{< callout title="Big Idea 1 --- AI Literacy Thread" >}}
Intelligent systems require instructions before they can act.
{{< /callout >}}

Your robot did not decide to navigate to Waypoint Alpha. It followed the instructions you wrote. Every intelligent system --- from a robot to a [[RECOMMENDATION_ENGINE|recommendation engine]] to a self-driving car --- begins with someone writing instructions that tell the system what to do and how to do it. The quality of the system depends directly on the quality of those instructions.

Read each scenario below. Think it through, then write a short answer.
{.muted}

{{< ask key="p6_navapp" label="Navigation app scenario" >}}A navigation app tells you to turn right --- into a wall. Who wrote the instructions that caused this? What probably went wrong?{{< /ask >}}

{{< ask key="p6_spam" label="Spam filter scenario" >}}A spam filter marks an important email as junk. What does this tell you about the instructions the filter was given?{{< /ask >}}

{{< ask key="p6_responsibility" label="Responsibility scenario" >}}In both cases above --- and in your robot runs today --- who is responsible for fixing the instructions? What does that mean for how we should think about AI systems?{{< /ask >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_definition" label="Reflection 1" n=1 >}}What is an algorithm? Write a definition in your own words --- do not use the word "instructions."{{< /ask >}}

{{< ask key="p7_q2_variable" label="Reflection 2" n=2 >}}What was the most important [[VARIABLE|variable]] in your program today? How did changing it affect the robot's behavior?{{< /ask >}}

{{< ask key="p7_q3_precision" label="Reflection 3" n=3 >}}Precision matters in algorithms. Give one example from today where being imprecise caused a problem, and explain how you fixed it.{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete this in 2--3 sentences: "Intelligent systems require instructions before they can act. This means that when an AI system makes a mistake..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Precision Tuning

- Add a variable called SPEED to your program and connect it to your motor calls.
- Run 5 trials at SPEED = 30, then 5 at SPEED = 70.
- Record how speed affects your travel time. What relationship do you notice?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- The Pause Problem

- The rules say the stop must be clearly visible. What is the minimum pause value that reliably gets credit?
- Design an experiment: run 5 trials at each of three different pause values.
- What is the minimum pause you would use in a real competition run, and why?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Sequence Matters

- What happens if you tell the robot to drive back before it ever reaches Waypoint Alpha? Predict the outcome, then test it.
- Why does sequence matter in an algorithm? Write 2--3 sentences connecting this to how AI systems are designed.

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Inputs as Numbers

- Change the two motor power numbers and the msleep number, and predict what each change will do before you run it.
- What advantage would changing a number in one place give you over changing it in many places?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E --- Blocks vs. Text

- If you've used a block-based tool before (Scratch, Blockly, etc.), compare it to the Python you just wrote. What can you do in Python that blocks make awkward? What did blocks make easier?
- Why might a real robot controller prefer a text language like Python over a block-based one?

{{< answer key="ext_e" label="Extension E" >}}

### Extension F --- Why a PIN?

- Every lab in this course has asked for your PIN before you could submit. That's a simple password system protecting your identity so no one else's work gets mixed up with yours.
- What's one weakness of a short numeric PIN compared to a longer password? If someone guessed your PIN, what's one change to this system that would make that harder --- and how would that change actually fix the weakness you named?

{{< answer key="ext_f" label="Extension F" >}}
