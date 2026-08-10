---
title: "Coding Project 13 — Deciding What to Do"
short_title: "Coding Project 13"
linkTitle: "Deciding What to Do"
description: "if, if/else, else if, and nesting. The difference between asking once and asking repeatedly — then a run that notices when a grab fails."
weight: 13
nav: discovery
mission_id: discovery_coding_13
mission_title: "Coding Project 13 — Deciding What to Do"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 13
strand: coding
phase: "Phase 5 · Make It Smart"
phase_order: 5
time: "One class period"
eyebrow: "Discovery · Coding Project 13"
heading: "Deciding What to Do"
subheading: "Until now your robot has followed orders. Today it starts choosing."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Deciding What to Do"
mission_label: "Mission 3 advanced — 22 pts"
meta:
  - term: Project
    definition: "Coding Project 13"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Make It Smart"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Writing code that asks a question once and picks a path based on the answer — then using it to build two stacks that have to come out different."
  - term: "Mission Anchor"
    definition: "[[@3:base|Mission 3]] — Mixed Freight (advanced bonus) — 13 points"
  - term: "Before You Start"
    definition: "Projects 10 and 12 — you need `while` loops and your own [[FUNCTION|functions]]."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Robot with arm, claw, and touch [[SENSOR|sensor]]"
      - key: need_2
        label: Wombat
      - key: need_3
        label: "Charged battery"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "Your [[FUNCTION|function]] list from Project 12"
---

## Try It — Sabotage Your Own Robot

Load your Project 12 program — the blue pom run. Before you press start, **move the first pom about four inches to one side.**

Now run it and watch closely.

{{< gridtable >}}
columns:
- head: Question
- head: "What happened"
  aria: "Did it grab"
rows:
  - cells:
      - text: "Did the claw close on anything?"
      - key: p1_grabbed
        aria: "Did it grab"
  - cells:
      - text: "What did the robot do next?"
      - key: p1_next
        aria: "What next"
  - cells:
      - text: "Did it drive to the basket anyway?"
      - key: p1_basket
        aria: "Went to basket"
  - cells:
      - text: "Did it open the claw at the end?"
      - key: p1_released
        aria: "Opened claw"
{{< /gridtable >}}
{{% safety title="⚠ Your Robot Has No Idea Anything Went Wrong" %}}
It drove to a spot, closed a claw on empty air, carried nothing across the field, and carefully placed nothing in the basket. Then it backed away pleased with itself.

Every program you have written does this. They all assume everything goes right.
{{% /safety %}}

{{< ask key="p1_how_much_ruined" label="How much ruined" >}}Something goes slightly wrong in a real match — a cube got bumped, your robot drifted an inch. How much of your run is ruined?{{< /ask >}}

### You do this all day

You never follow a plan blindly. You check things and pick.

Fill in what *you* would do:

{{< gridtable >}}
columns:
- head: "If this is true..."
- head: "...I do this. Otherwise I do this."
  aria: Rain
rows:
  - cells:
      - text: "It is raining outside"
      - key: p1_rain
        aria: Rain
  - cells:
      - text: "My shoes are already on"
      - key: p1_shoes
        aria: Shoes
  - cells:
      - text: "The milk smells bad"
      - key: p1_milk
        aria: Milk
  - cells:
      - text: "My bag feels lighter than it should"
      - key: p1_bag
        aria: Bag
{{< /gridtable >}}
That last one is exactly what your robot needs — a way to notice that it is carrying nothing.
{.muted}

## Learn It — Ask Once, Then Choose

An `if` [[STATEMENT|statement]] asks a question and only runs its [[BLOCK|block]] when the answer is true.

```text
if (digital(bump) == 1)
{
    printf("I am touching something!\n");
}
```

The [[CONDITION|condition]] in the parentheses is written exactly the same way as a `while` condition — same symbols, same rules, same `==` trap.

### The one difference that matters

**while — keeps asking**

```text
while (digital(bump) == 0)
{
    motor(left, 50);
    motor(right, 50);
}
```

Checks, runs the

block

, checks again, runs again… until the answer changes.

The robot stays here.

**if — asks once**

```text
if (digital(bump) == 0)
{
    motor(left, 50);
    motor(right, 50);
}
```

Checks once. Runs the block once if true, skips it if false. Either way

the robot moves on immediately.

{{% callout title="Same Words, Completely Different Job" variant="gold" %}}
**while** = "keep doing this until something changes."

         **if** = "look at this once, then decide what happens next."

Swap one for the other by accident and your robot either freezes in place or blows straight past a check it needed to make.
{{% /callout %}}

### Three shapes

Two separate ifs

```text
if (shoes are on)
{
    go for a walk;
}

if (I am hungry)
{
    eat a snack;
}
```

Two questions about

different things

. Both can be true. Both can be false. They do not affect each other.

if / else

```text
if (shoes are on)
{
    go for a walk;
}
else
{
    watch TV;
}
```

Exactly one

of these runs, always.

else

has no

condition

— it means "every other possibility."

if / else if / else

```text
if (shoes are on)
{
    go for a walk;
}
else if (shoes are by door)
{
    put them on;
}
else
{
    watch TV;
}
```

Checked top to bottom. The

first

true one runs and the rest are skipped, even if they are also true.

{{% callout title="Order Changes the Answer" variant="navy" %}}
In an `else if` chain the robot stops at the first true condition. So put the most specific check first and the catch-all last — or your specific case will never get a look in.
{{% /callout %}}

### A decision inside a decision

You can put an `if` inside another `if`. That is called [[NESTED|nested]].

```text
if (digital(claw_switch) == 1)     // did I grab something?
{
    if (gmpc(left) > 3000)          // am I far enough along?
    {
        release();
    }
    else
    {
        drive_forward(1000);
        release();
    }
}
else
{
    printf("Grab failed - trying again\n");
    grab();
}
```

Nesting more than two deep gets hard to read fast. If you need three, that is usually a sign the code wants to be a function.
{.muted}

{{% safety title="⚠ No Semicolon After the Condition" %}}
`if (digital(bump) == 1);` — that stray [[SEMICOLON|semicolon]] makes an empty `if`. The block after it then runs **every single time**, condition or not.

Same rule as `while`, and it is just as hard to spot.
{{% /safety %}}

## Do It — Make It Choose

### Step 1 — Your first decision

New project called `Choices`. Write a program that checks the touch [[SENSOR|sensor]] once and prints a different message either way.

```text
if (digital(bump) == 1)
{
    printf("Something is there\n");
}
else
{
    printf("Nothing there\n");
}
msleep(3000);
```

Run it twice — once holding the sensor pressed, once not.

{{< checklist >}}
- key: p3_first_if
  label: "I get a different message depending on the sensor"
{{< /checklist >}}
### Step 2 — Swap if for while and watch what breaks

Change your `if` to a `while`. Leave everything else alone. Run it without [[TOUCHING]] the sensor.

{{< ask key="p3_while_swap" label="While swap result" >}}What happened?{{< /ask >}}

Change it back. You have just seen the difference from the inside.

### Step 3 — Pick a side with a button

Real teams run one program from either starting box. The driver presses a button to say which side.

```text
printf("Press A for left box, B for right\n");

while (a_button() == 0 && b_button() == 0)
{
    msleep(10);              // wait for either button
}

if (a_button() == 1)
{
    run_left_plan();
}
else
{
    run_right_plan();
}
```

{{% callout title="Remember Waypoint Alpha and Bravo?" variant="gold" %}}
Back in Project 4 you wrote two nearly identical programs — one for Mission 1 on the left, one for Mission 10 on the right. Now they can be one program that asks which side it is on.
{{% /callout %}}

The `&&` means "and" — keep waiting while *neither* button is pressed. You do not need to master it today; copy the pattern and it works.
{.muted}

{{< checklist >}}
- key: p3_side_select
  label: "One program runs from either starting box"
{{< /checklist >}}
### Step 4 — Did I actually grab it?

This is the fix for what you saw in Try It. Put a touch sensor where a held cube presses it, or check whether the claw closed further than it should have.

```text
grab();

if (digital(claw_switch) == 1)
{
    printf("Got it\n");
    carry_to_basket();
}
else
{
    printf("Missed - backing up to retry\n");
    drive_backward(300);
    grab();
}
```

Now sabotage it again — move the pom aside like you did in Try It.

{{< ask key="p3_retry_result" label="Retry result" >}}What did the robot do differently this time?{{< /ask >}}

{{< checklist >}}
- key: p3_verify_grab
  label: "My robot notices a failed grab and does something about it"
{{< /checklist >}}
### Step 5 — A three-way choice

Use `else if` to pick between three actions based on how far along the robot is.

```text
if (gmpc(left) < 1000)
{
    printf("Barely started\n");
}
else if (gmpc(left) < 3000)
{
    printf("About halfway\n");
}
else
{
    printf("Nearly there\n");
}
```

{{< ask key="p3_order_matters" label="Order matters" >}}Swap the first two conditions around and run it again. What goes wrong, and why?{{< /ask >}}

### Step 6 — Mission 3 Advanced — two opposite stacks13 pts

{{< mission-summary mission="3" >}}
{{< /mission-summary >}}
{{% callout title="Going for Advanced Gets You the Bonus Too" variant="gold" %}}
Two opposite stacks *are* two stacks. Score the Advanced Bonus and the 9-point Bonus comes with it — 22 points from this one run.
{{% /callout %}}

{{< score-examples >}}
scores:
  - "Two stacks with opposite colour arrangements."
  - "The stacks do not need to be next to each other."
  - "The shape of the stack does not matter — only the [[ON TOP OF]] relationships."
does_not_score:
  - "Green on Green, or Yellow on Yellow."
  - "A single three-cube stack counted as two stacks."
  - "**Reusing a cube from the first stack in the second.**"
{{< /score-examples >}}
{{% safety title="⚠ Four Cubes, Four Jobs" %}}
Each cube may contribute to **only one** scoring stack. You need two greens and two yellows, and every one of them has a specific place to be. Get the second stack's colours the wrong way round and you drop from 22 points to 9.
{{% /safety %}}

**Where the decisions go.** This run has four grabs and four placements in a row. If grab two fails and the robot does not notice, everything after it is wasted. Put a check after each grab — the pattern from step 4 — so a miss costs you one cube instead of the whole mission.

{{< gridtable >}}
columns:
- head: Step
- head: Cube
  aria: "Plan 1 cube"
- head: "Goes where"
  aria: "Plan 1 where"
- head: "Check after?"
  aria: "Plan 1 check"
rows:
  - cells:
      - text: 1
      - key: p3_plan1_cube
        aria: "Plan 1 cube"
      - key: p3_plan1_where
        aria: "Plan 1 where"
      - key: p3_plan1_check
        aria: "Plan 1 check"
  - cells:
      - text: 2
      - key: p3_plan2_cube
        aria: "Plan 2 cube"
      - key: p3_plan2_where
        aria: "Plan 2 where"
      - key: p3_plan2_check
        aria: "Plan 2 check"
  - cells:
      - text: 3
      - key: p3_plan3_cube
        aria: "Plan 3 cube"
      - key: p3_plan3_where
        aria: "Plan 3 where"
      - key: p3_plan3_check
        aria: "Plan 3 check"
  - cells:
      - text: 4
      - key: p3_plan4_cube
        aria: "Plan 4 cube"
      - key: p3_plan4_where
        aria: "Plan 4 where"
      - key: p3_plan4_check
        aria: "Plan 4 check"
{{< /gridtable >}}
{{< checklist >}}
- key: p3_m3_two
  label: "I have two mixed-colour stacks"
- key: p3_m3_opposite
  label: "The two stacks are arranged opposite ways round"
- key: p3_m3_nocheck
  label: "No cube is shared between the two stacks"
{{< /checklist >}}
### Step 7 — Run it five times

{{< gridtable >}}
columns:
- head: Run
- head: "Two stacks?"
  aria: "R1 two"
- head: "Opposite arrangement?"
  aria: "R1 opposite"
- head: "Did a check catch a miss?"
  aria: "R1 catch"
- head: Points
  aria: "R1 points"
rows:
  - cells:
      - text: 1
      - key: p3_r1_two
        aria: "R1 two"
      - key: p3_r1_opp
        aria: "R1 opposite"
      - key: p3_r1_catch
        aria: "R1 catch"
      - key: p3_r1_pts
        aria: "R1 points"
  - cells:
      - text: 2
      - key: p3_r2_two
        aria: "R2 two"
      - key: p3_r2_opp
        aria: "R2 opposite"
      - key: p3_r2_catch
        aria: "R2 catch"
      - key: p3_r2_pts
        aria: "R2 points"
  - cells:
      - text: 3
      - key: p3_r3_two
        aria: "R3 two"
      - key: p3_r3_opp
        aria: "R3 opposite"
      - key: p3_r3_catch
        aria: "R3 catch"
      - key: p3_r3_pts
        aria: "R3 points"
  - cells:
      - text: 4
      - key: p3_r4_two
        aria: "R4 two"
      - key: p3_r4_opp
        aria: "R4 opposite"
      - key: p3_r4_catch
        aria: "R4 catch"
      - key: p3_r4_pts
        aria: "R4 points"
  - cells:
      - text: 5
      - key: p3_r5_two
        aria: "R5 two"
      - key: p3_r5_opp
        aria: "R5 opposite"
      - key: p3_r5_catch
        aria: "R5 catch"
      - key: p3_r5_pts
        aria: "R5 points"
{{< /gridtable >}}
## Score It — Checkpoint

### My score

{{< gridtable >}}
columns:
- head: "Mission part"
- head: Scored?
  aria: "Score M3 bonus"
- head: Points
rows:
  - cells:
      - text: "Mission 3 — Bonus (a second mixed stack)"
      - key: p4_s_m3bo
        aria: "Score M3 bonus"
      - text: 9
  - cells:
      - text: "Mission 3 — Advanced (opposite arrangements)"
      - key: p4_s_m3adv
        aria: "Score M3 advanced"
      - text: 13
  - cells:
      - text: "My total this project"
      - key: p4_total
        aria: Total
      - text: 22
{{< /gridtable >}}
### if or while?

For each one, say which you would use and why.

{{< gridtable >}}
columns:
- head: "I want the robot to..."
- head: "if or while?"
  aria: "IW 1"
- head: Why
  aria: "IW 1 why"
rows:
  - cells:
      - text: "Drive forward until it bumps a wall"
      - key: p4_iw1
        aria: "IW 1"
      - key: p4_iw1_why
        aria: "IW 1 why"
  - cells:
      - text: "Check whether the grab worked, then move on"
      - key: p4_iw2
        aria: "IW 2"
      - key: p4_iw2_why
        aria: "IW 2 why"
  - cells:
      - text: "Wait for someone to press a button"
      - key: p4_iw3
        aria: "IW 3"
      - key: p4_iw3_why
        aria: "IW 3 why"
  - cells:
      - text: "Pick which starting box plan to run"
      - key: p4_iw4
        aria: "IW 4"
      - key: p4_iw4_why
        aria: "IW 4 why"
{{< /gridtable >}}
### Spot the bug

{{< gridtable >}}
columns:
- head: Code
- head: "What goes wrong"
  aria: "Bug semicolon"
rows:
  - cells:
      - text: "`if (digital(0) == 1);`"
      - key: p4_bug_semi
        aria: "Bug semicolon"
  - cells:
      - text: "`if (digital(0) = 1)`"
      - key: p4_bug_assign
        aria: "Bug assign"
  - cells:
      - text: "`else` with a condition in parentheses"
      - key: p4_bug_else_cond
        aria: "Bug else condition"
  - cells:
      - text: "Catch-all `else if` placed first in the chain"
      - key: p4_bug_order
        aria: "Bug order"
{{< /gridtable >}}
### Can you do it again?

{{< checklist >}}
- key: p4_can_if
  label: "I can write an `if` statement with a condition and a block"
- key: p4_can_ifwhile
  label: "I can explain the difference between `if` and `while`"
- key: p4_can_else
  label: "I know that `else` takes no condition of its own"
- key: p4_can_chain
  label: "I can write an `else if` chain and put the conditions in a sensible order"
- key: p4_can_nested
  label: "I can nest one decision inside another"
- key: p4_can_verify
  label: "I check whether a grab worked instead of assuming it did"
- key: p4_can_sides
  label: "I can write one program that runs from either starting box"
{{< /checklist >}}
### Think about it

{{< ask key="p4_whose_mistake" label="Whose mistake" >}}In Try It your robot carried nothing across the field and placed it carefully in a basket. Would you call that a mistake by the robot, or a mistake by the programmer?{{< /ask >}}

{{< ask key="p4_smarter" label="Is it smarter" >}}A robot that checks its own work looks smarter than one that does not. Is it actually smarter, or is it something else?{{< /ask >}}

{{< ask key="p4_how_much" label="How much vs yes no" >}}Every decision you made today came from a switch — pressed or not pressed. What kinds of choices could your robot make if it could tell *how much* of something there is, instead of just yes or no?{{< /ask >}}

### Next

Everything your robot senses right now is on or off. The field is not like that — a black line and a white mat are not two states of a switch, they are two brightnesses.

In **Project 14 — Seeing Light and Dark**, your robot gets a sensor that answers with a number instead of a yes.

KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026
