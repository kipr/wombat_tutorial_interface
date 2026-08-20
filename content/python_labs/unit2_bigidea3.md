---
title: "Unit 2 · Big Idea 3 — Drive by the Numbers"
short_title: "Python 2.3"
hub_unit: 2
description: "Encoders, parameters, and arguments — use gmpc/cmpc and a function that takes a distance to drive out and touch Botguy."
weight: 100
nav: python
track: python
type: labs
mission_id: unit2_bigidea3
eyebrow: "Unit 2 · Big Idea 3"
heading: "Drive by the Numbers"
subheading: "Student Lab · Touch Botguy with Encoders"
credit: "KIPR · Botball Explorer · Unit 2 Big Idea 3 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine sense and respond to the world around it?"
  - term: "Focus"
    definition: "[[ENCODER|Encoders]], measured driving, and [[FUNCTION|functions]] that take a value"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems sense their own actions and use that feedback to act precisely."
  - term: "CS1 Concepts"
    definition: "Function [[PARAMETER|Parameters]] and [[ARGUMENT|Arguments]] · Encoders (gmpc / cmpc) · Numeric Loop [[CONDITION|Conditions]]"
  - term: "Game Context"
    definition: "[[@9|Mission 9]] — drive from the right starting box and touch Botguy"
  - term: "What You Need"
    definition: "Explorer robot · game field with Botguy · this lab sheet"
---

## Overview

Until now, your robot drove for a set *time* and hoped it went the right distance --- and last lab proved how inconsistent that can be. Today the robot measures its **own wheels**. Each motor has a built-in counter that [[TICK|ticks]] up as it turns. By watching that counter, the robot can drive an exact distance instead of an exact time. You'll use this to drive out from the starting box and touch Botguy --- Mission 9.

{{< callout title="Core Insight" >}}
A robot that can measure its own movement can act precisely. Instead of "drive for one second," it can say "drive until I've turned exactly this far."
{{< /callout >}}

### By the end of this activity you will be able to:

- Read a motor's encoder with `k.gmpc()` and reset it with `k.cmpc()`.
- Write a [[WHILE LOOP|while loop]] that exits on a number you choose, not just a button.
- Distinguish a function's *parameter* from the *argument* supplied when you call it.
- Drive a measured distance from the starting box to touch Botguy.
{.obj}

### First: Meet the Motor Graph on the [[CONTROLLER|Controller]]

{{< widgetstep title="Watch the counter move --- before any code" >}}
On the Wombat controller, open the **motors / [[SENSOR|sensors]] graph widget** (the live readout screen). Find the position counter for the motor on **[[PORT|Port]] 0**.

Now **turn that wheel by hand**, slowly. Watch the number on the screen climb as the wheel turns forward, and fall as you turn it backward. Those are *ticks* --- the counter is counting how far the wheel has rotated.

This is where your robot's movement data lives. When your code reads `k.gmpc(0)`, it is reading this exact number.
{{< /widgetstep >}}

{{< ask key="widget_ticks_per_turn" label="Ticks per turn observed" >}}Turn the port-0 wheel one full turn by hand. About how many ticks did the counter change? Write the number you saw.{{< /ask >}}

### New This Time: Encoders and a Numeric Loop

{{< concept "gmpc and cmpc --- reading and resetting the wheel counter" >}}
- text: |
    Each motor counts how far it has turned, in *ticks*. Two commands let you use that counter:
- code: |
    k.cmpc(0)    # CLEAR resets port 0's counter to 0.
    k.gmpc(0)    # GET reads how many ticks port 0 has turned.
- text: |
    The pattern is: clear the counter to zero, start driving, and keep checking the counter until it reaches the distance you want.
- code: |
    k.cmpc(0)                    # start counting from 0
    while k.gmpc(0) < 2000:      # while we haven't gone 2000 ticks yet...
        k.motor(0, 50)            # ...keep driving
        k.motor(3, 50)
        k.msleep(10)
- text: |
    We're reading just port 0 for now. Later, we may come back and read *both* wheels at once to help the robot drive straighter.
    {.muted}
{{< /concept >}}

{{< concept "A new kind of loop exit --- a number, not a button" >}}
- text: |
    Last unit, your loop watched a touch sensor: `k.digital(0)` was only ever 0 or 1 --- two possibilities. This loop watches a *counter* that climbs through **thousands** of values: 0, 1, 2, ... all the way up to your target.

    The condition `k.gmpc(0) < 2000` stays true while the count is below 2000, and flips false the instant it reaches it. The loop isn't waiting for an on/off --- it's waiting for a number to grow big enough.
{{< /concept >}}

{{< concept "A parameter receives an argument" >}}
- text: |
    So far your functions ran the same way every time. A **parameter** is the named input in a function definition. An **argument** is the value you supply when you call the function.
- code: |
    def Tick_Drive(@@ticks@@):   # PARAMETER: the named input is ticks
        ...

    Tick_Drive(@@2000@@)   # ARGUMENT: pass in the value 2000
    Tick_Drive(@@1000@@)   # ARGUMENT: pass in 1000 instead
- text: |
    Inside the function, the parameter `ticks` receives whichever argument you supplied. One function, any distance --- no copying and pasting.
{{< /concept >}}

## Phase 1 --- Activate: Counting Your Own Steps

{{< figrow >}}
- src: kit/motor.jpg
  alt: The motor ports. The encoder that counts ticks lives inside the motor.
{{< /figrow >}}

Imagine you're told "walk to the door." You could guess at the time it takes --- or you could **count your steps**. If the door is 10 steps away, you walk until your step count reaches 10, then stop. You're not timing yourself; you're measuring your own movement and stopping at a number.

{{< callout title="Think it through" variant="navy" >}}
Why is "walk until I've taken 10 steps" more reliable than "walk for 6 seconds"?

The robot's wheel counter is its version of counting steps. What is one "step" for the robot called?
{{< /callout >}}

{{< ask key="p1_counting_steps" label="Counting steps analogy" >}}How is counting your steps to a target like the robot counting encoder ticks to a target? Why does measuring movement beat guessing at time?{{< /ask >}}

## Phase 2 --- Concept: Feedback, Parameters, and Arguments

### An Encoder Is the Robot Sensing Itself

Earlier sensors told the robot about the *outside* world --- a wall, a button. An encoder is different: it tells the robot about **itself** --- how far its own wheels have turned. This is called *feedback*: the robot watches the result of its own action and uses it to decide when to stop.

### A Parameter and Its Arguments Make One Function Flexible

You've built functions that always did exactly the same thing. In `def Tick_Drive(ticks):`, `ticks` is the *parameter*: the named input in the function definition. In `Tick_Drive(2000)`, `2000` is the *argument*: the value supplied at that call. `Tick_Drive(2000)` and `Tick_Drive(1000)` call the same function with different arguments, so it drives two different distances.

{{< callout title="Why this matters for a real run" variant="gold" >}}
To touch Botguy you need one exact distance. But a whole mission needs many different distances. With an argument, you write `Tick_Drive()` once and call it with whatever number each leg of the trip needs --- instead of writing a new function for every distance.
{{< /callout >}}

{{< ask key="p2_argument_meaning" label="Parameters and arguments" >}}In your own words: what is the parameter in `def Tick_Drive(ticks):`, and what is the argument in `Tick_Drive(2000)`? How does changing the argument change what the function does?{{< /ask >}}

## Phase 3 --- Plan

### The Mission

{{< mission-summary mission="9" video=true >}}
{{< /mission-summary >}}

Your goal today is simply to touch Botguy.
The bonus mission requires removing Botguy from his [[ENCLOSURE|enclosure]] and getting him to the warehouse floor.
That needs an arm, which is a manipulation task for a future lesson.

### Step 1 --- Find Your Target Number

You need to know how many ticks it takes to reach Botguy. Use the motor graph: clear the counter, drive toward Botguy by hand or with a short test, and read the tick count when the robot reaches him. Write your best target.

{{< gridtable >}}
columns:
  - head: Measurement
    width: 60%
  - head: Your value (ticks)
rows:
  - - text: 'Ticks from start box to [[TOUCHING]] Botguy'
    - key: p3_target_ticks
      aria: Target ticks
{{< /gridtable >}}

### Step 2 --- Plan in Plain English

Describe your program in order --- including clearing the counter, the loop, and the brake.

{{< steps key="p3_plan" label="Plan step" count=4 >}}

## Phase 4 --- Build  & Run

{{< safety title="⚠ Test in your hands first" noprint=true >}}
Hold the robot off the ground and run the program once. Watch the wheels spin and then brake to a stop on their own when the count is reached --- before you put it on the field toward Botguy.
{{< /safety >}}

### Starting Code Template

Type this program. Notice that `ticks` is the parameter in the `Tick_Drive` definition. The value in a call such as `Tick_Drive(2000)` is the argument. Define the function above `main()`, as always.

{{< code >}}

#!/usr/bin/python3

# Unit 2, Big Idea 3: Drive by the Numbers

# Name: _______________________   Date: ___________

import os, sys
sys.path.append("/usr/lib")
import _kipr as k

def main():
    Tick_Drive(@@2000@@)   # CALL: 2000 is the argument.
                       # (use YOUR target number from Phase 3)

def Tick_Drive(@@ticks@@):     # DEFINITION: ticks is the parameter.
    k.cmpc(0)                     # clear port 0's counter to 0

    while k.gmpc(0) < @@ticks@@:   # while we haven't reached the target...
        k.motor(0, 50)            # ...keep driving
        k.motor(3, 50)
        k.msleep(10)

    k.motor(0, 0)                 # BRAKE (from last lab)
    k.motor(3, 0)
    k.msleep(50)                  # let the brake settle

main()
{{< /code >}}

### Tune to Botguy

Run it, see where the robot stops, and adjust the number you pass to `Tick_Drive()` until it reaches Botguy. Record each try.

{{< gridtable >}}
columns:
  - head: Try
    width: 14%
  - head: Ticks you passed in
    width: 30%
  - head: Where the robot stopped (short / on Botguy / too far)
rows:
  - - text: "1"
    - key: p4_try1_ticks
    - key: p4_try1_result
  - - text: "2"
    - key: p4_try2_ticks
    - key: p4_try2_result
  - - text: "3"
    - key: p4_try3_ticks
    - key: p4_try3_result
  - - text: "4"
    - key: p4_try4_ticks
    - key: p4_try4_result
{{< /gridtable >}}

### [[CHECKLIST|Checklist]]

- `ticks` is the parameter in the `Tick_Drive` definition
- The number in a call such as `Tick_Drive(2000)` is the argument
- `k.cmpc(0)` clears the counter *before* the loop
- The loop condition is `k.gmpc(0) < ticks`
- The robot brakes with `k.motor(0,0); k.motor(3,0); k.msleep(50)` after the loop
- You changed only the number passed in to tune the distance --- not the function itself

## Phase 5 --- Debug  & Extend

{{< callout title="Common encoder bugs" variant="gold" >}}
**Forgot `k.cmpc(0)`:** the counter still holds ticks from a previous run, so the robot stops early (or doesn't move). Always clear before the loop.

**Robot never stops:** if the motors aren't actually turning port 0, `k.gmpc(0)` never climbs and the loop runs forever. Check your wiring and that you're reading the right port.

**Brake missing:** no `k.motor(0,0)` after the loop means the robot coasts past Botguy --- remember last lab.
{{< /callout >}}

### [[DEBUGGING|Debugging]] Log

{{< repeattable count=4 prefix="debug" >}}
- kind: number
  head: "Try"
  width: "8%"
- head: What went wrong
  key: wrong
  width: 36%
- head: Why (your best guess)
  key: why
  width: 26%
- head: How you fixed it
  key: fix
{{< /repeattable >}}

{{< ask key="p5_two_calls" label="Two calls reflection" >}}Once Botguy works, try calling `Tick_Drive()` twice with different numbers in a row. What happened? Why is one flexible function better than writing a separate function for each distance?{{< /ask >}}

## Phase 6 --- Connect: The AI Literacy Bridge

{{< callout title="Big Idea --- AI Literacy Thread" >}}
Intelligent systems sense their own actions and use that feedback to act precisely.
{{< /callout >}}

Your robot didn't just act --- it *watched itself* act and stopped at exactly the right point. That's feedback, and it's everywhere in intelligent systems. A 3D printer counts the steps of its motors to place plastic precisely; a robot arm in a factory knows the angle of every joint; a self-driving car tracks its own wheel rotation to know how far it's gone. None of them guess --- they measure their own motion and adjust. Today your robot joined them: it sensed its own wheels and used that number to reach a goal.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_feedback_reliable" label="Why feedback is reliable" >}}A delivery robot needs to stop exactly at a doorway. Why is "count my own wheel turns" more reliable than "drive forward for 4 seconds"? What could change between runs that time can't account for?{{< /ask >}}

{{< ask key="p6_self_sensing" label="Self sensing" >}}An encoder is a system sensing *itself*, not the outside world. Why is it powerful for an intelligent system to have information about its own actions, not just its surroundings?{{< /ask >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_encoders" label="Reflection 1" n=1 >}}What do `k.cmpc(0)` and `k.gmpc(0)` each do? Why must you clear before you read in a loop?{{< /ask >}}

{{< ask key="p7_q2_argument" label="Reflection 2" n=2 >}}What is the difference between a *parameter* and an *argument*? Identify each one in `def Tick_Drive(ticks):` and `Tick_Drive(2000)`, then explain how one function can drive many distances.{{< /ask >}}

{{< ask key="p7_q3_numeric_loop" label="Reflection 3" n=3 >}}This loop exits on a number climbing to a target, not an on/off button. How is that different from the touch-sensor loop you wrote before?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete this in 2--3 sentences: "Intelligent systems sense their own actions and use that feedback to act precisely. This means a robot that can measure its own movement can..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Two Legs to Botguy

- Call `Tick_Drive()` with one number, then a turn, then `Tick_Drive()` with another number, to reach Botguy on an L-shaped path.
- How does having an argument make the two-leg path easy to write?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- How Many Ticks Per Inch?

- Drive a known distance (say 12 inches) and read the tick count. How many ticks is one inch on your robot?
- Now you can turn any distance in inches into a tick number. Try it.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Read Both Wheels (a peek ahead)

- [[PRINT|Print]] `k.gmpc(0)` and the other drive motor's counter side by side as the robot drives. Do they climb at exactly the same rate?
- If they don't, what might that tell you about why the robot drifts? (We'll use this idea later.)

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- A Backward Version

- Could `Tick_Drive()` handle backward too? Think about what the counter does when the wheel turns backward, and what your loop condition would need.

{{< answer key="ext_d" label="Extension D" >}}
