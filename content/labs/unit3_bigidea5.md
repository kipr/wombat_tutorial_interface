---
title: "Unit 3 · Big Idea 5 — The Double Stack"
short_title: "Lab 3.5"
weight: 180
nav: labs
track: c
mission_id: unit3_bigidea5
eyebrow: "Unit 3 · Big Idea 5 · Capstone"
heading: "The Double Stack"
subheading: "Student Lab · Mission 3 — Stack Both Cubes"
credit: "KIPR · Botball Explorer · Unit 3 Big Idea 5 — Capstone Lab"
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine act on the world, not just move through it?"
  - term: "Big Idea"
    definition: "A Full Mission Is Composed From Tested Tools"
  - term: "AI Literacy Thread"
    definition: "Complex tasks are accomplished by sequencing reliable, reusable behaviors."
  - term: "CS1 Concepts"
    definition: "Composition · Sequencing · Top-Down Planning · Repositioning"
  - term: "Game Context"
    definition: "[[@3|Mission 3]] — stack a cube on an opposite-color cube, then do it again"
  - term: "What You Need"
    definition: "Explorer robot · your [[LIBRARY|library]] · green &amp; yellow cubes · game field · this lab sheet"
---

## Overview

This is it — the moment everything comes together. Over this unit you built a whole toolbox: driving a measured distance, turning a reliable 90°, and lifting with a safe, smooth arm and claw. Today you'll **compose** those tools into a complete mission. Your robot will drive to a cube, pick it up, stack it on a cube of the opposite color — then **reposition itself** and do it a second time for the bonus. No new commands today. The challenge is *planning*: putting your tested tools in exactly the right order.

{{% callout title="Core Insight" %}}
A complex mission isn't built from new code — it's built by sequencing reliable tools you already trust. The hard part is the plan, not the parts.
{{% /callout %}}

### By the end of this activity you will be able to:

- Plan a full multi-step mission before writing any code.
- Compose your library [[FUNCTION|function]]s into a working stack sequence.
- Reposition the robot to line up with a second target using turns and driving.
- Complete Mission 3 — two cubes stacked on opposite-color cubes.
{.obj}

{{% callout title="Your toolbox (all from your library)" variant="navy" %}}
`Tick_Drive(ticks)` · `Back_Drive(ticks)` · `turn_right()` · `turn_left()` · `move_arm(position)` · `move_claw(position)` — plus your tuned values `ARM_MIN`, `ARM_MAX`, `CLAW_OPEN`, `CLAW_SHUT`. You'll build `Back_Drive` in Phase 2.
{{% /callout %}}

## Phase 1 — Understand the Mission

{{< figrow >}}
- src: servo/what-is-a-claw.jpg
  alt: The claw on the robot has to close together to hold or pick up something.
{{< /figrow >}}

{{% callout title="Mission 3 — Stack a Cube, Then Stack Another" %}}
**Base:** stack a green or yellow cube [[ON TOP OF]] a cube of the *opposite* color.

**Bonus (your goal today):** do it *twice* — build two stacks.

The two stacks are in different spots, so after finishing the first, your robot has to move over and line up with the second. That repositioning is the new challenge.
{{% /callout %}}

{{< ask key="p1_restate" label="Restate mission" >}}Say the mission back in your own words. What makes the *second* stack harder than the first?{{< /ask >}}

## Phase 2 — Build a Missing Tool: Back_Drive

Your library can drive *forward* a measured distance with `Tick_Drive` — but a real stack needs the robot to **back away** after placing a cube, so it doesn't knock the stack over. You don't have a backward version yet. Let's build one, and the trick is in the [[ENCODER|encoder]] math.

{{< concept "The number-line problem" >}}
- text: |
    When the robot drives *forward*, the encoder counts **up**: 0, 1, 2, 3... So `Tick_Drive` waits with `while (gmpc(0) < ticks)` — keep going until the count climbs to the target.
- text: |
    When the robot drives *backward*, the wheel turns the other way, so the encoder counts **down** into negatives:
- code: |
    forward:    0  ->  1  ->  2  ->  3  ... up to +1000
    backward:   0  -> -1  -> -2  -> -3  ... down to -1000
- text: |
    So to back up the same distance as `Tick_Drive(1000)`, you wait until the count reaches **−1000**. The question is how to write that comparison.
{{< /concept >}}

{{< concept "Keep going while the count is still ABOVE the negative target" >}}
- text: |
    Picture the number line. You start at 0 and slide left toward −1000. The whole time, your count is *greater than* −1000 — until you arrive. So the loop runs **while `gmpc(0) > -ticks`**:
- code: |
    void Back_Drive(int ticks) {
        cmpc(0);                       // clear the counter to 0
        while (gmpc(0) > -ticks) {      // count DOWN until we reach -ticks
            motor(0, -50);             // both wheels backward
            motor(1, -50);
        }
        motor(0, 0); motor(1, 0); msleep(50);   // brake
    }
- text: |
    You still pass in a *positive* number — `Back_Drive(1000)` — and the function flips the sign for you. The `-ticks` turns your 1000 into the −1000 target.
{{< /concept >}}

{{< ask key="p2_backdrive_math" label="Back_Drive math" >}}Explain in your own words why the loop uses `> -ticks` instead of `< ticks`. What is the encoder count doing as the robot backs up?{{< /ask >}}

{{< ask key="p2_backdrive_test" label="Back_Drive test" >}}Test it: call `Back_Drive(1000)` right after a `Tick_Drive(1000)`. Did the robot return to about where it started? Add `Back_Drive` to your library when it works.{{< /ask >}}

## Phase 3 — Plan: Map the Field

Before a single line of code, draw your plan. Mark your starting box (drawn for you), both cube pairs (the cube to lift and the cube to stack on), and the path your robot will travel. This map is what your whole program will be built from.

{{< sketch aria="Field mapping sketch area" startbox="left"
           tag="Sketch: starting box, both cube pairs, and your path"
           note="Draw on the printed copy, or describe the layout in the box below." >}}

{{< answer key="p2_layout" label="Layout description"
           placeholder="Where is each cube pair? Which cube do you lift, which do you stack on? Where does the robot start?" >}}

## Phase 4 — Plan: Write the Sequence for Stack 1

Now turn your map into an ordered list of moves — in plain English first, then the library function each one becomes. Think through the whole grab: arm up and claw open to start, drive to the cube, lower, grab, lift, carry, lower onto the base cube, release.

{{< gridtable caption="Stack 1 — plan each step" >}}
columns:
  - head: "&#35;"
    width: 8%
  - head: What the robot does (plain English)
    width: 50%
  - head: Library call
rows:
  - - num: "1"
    - seed: Arm up, claw open (get ready)
    - key: s1_1_call
  - - num: "2"
    - key: s1_2_eng
    - key: s1_2_call
  - - num: "3"
    - key: s1_3_eng
    - key: s1_3_call
  - - num: "4"
    - key: s1_4_eng
    - key: s1_4_call
  - - num: "5"
    - key: s1_5_eng
    - key: s1_5_call
  - - num: "6"
    - key: s1_6_eng
    - key: s1_6_call
  - - num: "7"
    - key: s1_7_eng
    - key: s1_7_call
  - - num: "8"
    - key: s1_8_eng
    - key: s1_8_call
{{< /gridtable >}}

## Phase 5 — Plan: Reposition to the Second Stack

With stack 1 done, your robot has to move over and line up with the second pair of cubes. You'll do this with the tools you have: **turn, drive, turn back**. Turn to face the direction of the second stack, drive over to it, then turn back to face the cubes — squared up and ready to repeat.

{{< concept "The shift: turn · drive · turn back" >}}
- text: |
    For example, to shift to the right and face forward again:
- code: |
    turn_right();      // face sideways toward stack 2
    Tick_Drive(____);  // drive over to line up with it
    turn_left();       // turn back to face the cubes
- text: |
    The two turns cancel out your heading, so you end up facing the same way — just shifted over. The drive distance lines you up with the second pair.
{{< /concept >}}

{{< ask key="p4_reposition" label="Reposition plan" >}}Which way does your robot need to shift for stack 2 — left or right? Write the three calls (turn, drive, turn back) you'll use, with your [[TICK|tick]] value. (You can use `Tick_Drive` or `Back_Drive` depending on your path.){{< /ask >}}

## Phase 6 — Build: The Whole Mission in main()

Now write it for real. Here is the **frame** — nothing more. Include your library, enable your [[SERVO|servo]]s, and you'll fill each section with the calls **from your own planning tables** in Phases 4 and 5. There are no answers to copy here on purpose: the sequence lives in your plan, and only you have it.

{{< code >}}
#include <kipr/wombat.h>
#include <@yourname@.h>     // all your tuned tools

int main() {
    enable_servo(0);          // arm
    enable_servo(1);          // claw

    // ===== STACK 1 =====
    // (write your calls from your Phase 4 plan)


    // ===== REPOSITION to stack 2 =====
    // (your turn / drive / turn-back from Phase 5)


    // ===== STACK 2 =====
    // (your calls)


    return 0;
}
{{< /code >}}

Translate your plan line by line. Each row of your Phase 4 table is one function call. If you skipped the planning, this is where it catches up with you — go back and finish your map first.
{.muted}

{{< ask key="p6_read_aloud" label="Read aloud check" >}}Before you run it: read your `main()` out loud as a list of actions. Does it match the path you mapped in Phase 3? Fix any step that's out of order.{{< /ask >}}

## Phase 7 — Run, Test, and Tune

Run the mission. It almost certainly won't be perfect the first time — that's normal for a full mission. Test it in pieces: get stack 1 working first, then the reposition, then stack 2. Record what you fix.

{{% callout title="Debug in chunks" variant="gold" %}}
Don't try to fix the whole run at once. [[COMMENT|Comment]] out everything after stack 1 and get that perfect. Then add the reposition. Then stack 2. A mission is easiest to fix one piece at a time.
{{% /callout %}}

{{< gridtable count=5 prefix="debug" label="Debug" numbered=true number_head="Try" number_width="8%" >}}
- head: Which part failed?
  key: part
  width: 28%
- head: Why (your best guess)
  key: why
  width: 34%
- head: What you changed
  key: change
{{< /gridtable >}}

### Mission [[CHECKLIST|Checklist]]

{{< gridtable >}}
columns:
  - head: Goal
    width: 70%
  - head: Done? (✓)
rows:
  - - seed: "Stack 1: cube placed on opposite-color cube"
    - key: check_stack1
  - - seed: "Reposition: robot lined up with second pair"
    - key: check_reposition
  - - seed: "Stack 2: second cube placed on opposite-color cube"
    - key: check_stack2
{{< /gridtable >}}

{{< ask key="p6_hardest" label="Hardest part" >}}Which part of the mission was hardest to get right — a stack, or the reposition? Why?{{< /ask >}}

## Phase 8 — Connect &amp; Reflect

{{% callout title="AI Literacy Thread" %}}
Complex tasks are accomplished by sequencing reliable, reusable behaviors.
{{% /callout %}}

You just completed a real mission — and you did it without writing a single new low-level command. Every piece was a tool you'd already built and tested. That's how all complex automation works: a warehouse robot fulfilling an order, a factory line assembling a product, a Mars rover collecting a sample — each is a *sequence* of reliable, reusable behaviors, planned carefully and run in order. The intelligence is in the planning and the trust you've earned in each part.

Complete the reflection on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_planning" label="Reflection 1" n=1 >}}You wrote a whole mission using only library functions. Why was planning the sequence the hardest part, not the code itself?{{< /ask >}}

{{< ask key="p7_q2_reposition" label="Reflection 2" n=2 >}}Explain how the reposition (turn, drive, turn back) lined the robot up with the second stack without changing the direction it faced.{{< /ask >}}

{{< ask key="p7_q3_one_off" label="Reflection 3" n=3 >}}If one library function (say `turn_right`) was slightly off, how would that affect the whole mission? Connect this to why you tuned each tool carefully first.{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete in 2–3 sentences: "Complex tasks are accomplished by sequencing reliable, reusable behaviors. This means that to build a hard mission, I should first..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A — Make the Stacks Opposite Colors

- Mission 3's top bonus is making the two stacks opposite colors from each other. Plan how your cube choices would change to earn it.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B — Speed It Up

- Where is your mission slowest? Could a shorter `msleep` in your servo moves, or a faster drive, save time without losing reliability? Test it.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C — Recover From a Miss

- If the robot drops a cube, what could it do to try again? Sketch an idea using your existing tools.

{{< answer key="ext_c" label="Extension C" >}}

### Extension D — Add a Third

- If there were a third pair of cubes, what would you add to your mission? Write the plan for reaching and stacking it.

{{< answer key="ext_d" label="Extension D" >}}

### Extension E — Beyond the Classroom

- This course leads to a real KIPR Botball tournament, where your robot competes against other schools' teams — a real event beyond your classroom.
- In 2-3 sentences, what's one way your work in this course could be useful or interesting to someone outside your school — a younger student, a parent, a future employer?

{{< answer key="ext_e" label="Extension E" >}}
