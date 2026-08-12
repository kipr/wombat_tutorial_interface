---
title: "Coding Project 17 — Repeating Without Retyping"
short_title: "Coding Project 17"
linkTitle: "Repeating Without Retyping"
description: "The loop that counts. Start, stop, and step all on one line — then collect every bonus that just means \"now do that again.\""
weight: 17
nav: discovery
mission_id: discovery_coding_17
mission_title: "Coding Project 17 — Repeating Without Retyping"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 17
strand: coding
phase: "Phase 6 · Clean It Up"
phase_order: 6
time: "One class period"
eyebrow: "Discovery · Coding Project 17"
heading: "Repeating Without Retyping"
subheading: "The last loop — and the last thirty-eight points on the field."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Repeating Without Retyping"
mission_label: "Missions 7 · 11 · 16 · 17 — 38 points"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: Project
    definition: "Coding Project 17"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Clean It Up"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Learning the loop that counts, then using it to collect every bonus that just means \"now do that again.\""
  - term: "Mission Anchor"
    definition: "[[@7:base|Mission 7]] · 11 · 16 · 17 bonuses — 38 points"
  - term: "Before You Start"
    definition: "Project 16 — your [[FUNCTION|functions]] should live in your [[LIBRARY|library]] by now."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Robot with arm, claw, and [[SENSOR|sensors]]"
      - key: need_2
        label: Wombat
      - key: need_3
        label: "Charged battery"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "Your [[LIBRARY|library]] from Project 16"
---

## Try It --- Thirty Small Hops

Back in Project 9 you moved a [[SERVO|servo]] in three big jumps and were asked what it would take to move it in thirty small ones. Here is the answer you were promised.

```c
#include <kipr/wombat.h>

int main ()
{
	int arm = 0;
	int position = 200;

	enable_servos();
	while (position < 1800)
	{
		position = position + 10;
		set_servo_position(arm, position);
		msleep(5);
	}
	disable_servos();
	return 0;
}
```

Read it with a partner before you run it, and answer these from the code alone.

{{< gridtable >}}
columns:
- head: Question
- head: "My answer"
  aria: "Kind of loop"
rows:
  - cells:
      - text: "What kind of loop is this?"
      - key: p1_kind
        aria: "Kind of loop"
  - cells:
      - text: "Where does `position` start?"
      - key: p1_start
        aria: Start
  - cells:
      - text: "What makes it stop?"
      - key: p1_stop
        aria: Stop
  - cells:
      - text: "How much does it change each time round?"
      - key: p1_step
        aria: Step
  - cells:
      - text: "So how many times does the loop run?"
      - key: p1_times
        aria: Times
{{< /gridtable >}}
Now run it with your own arm positions and watch.

{{< ask key="p1_vs_single" label="Versus single move" >}}How is this different from `set_servo_position(arm, 1800);` on its own?{{< /ask >}}

{{< callout title="A Smooth Arm Is a Careful Arm" variant="gold" >}}
An arm that snaps to a position throws whatever it is holding. An arm that creeps there sets things down gently --- which matters for every final-position mission you have.
{{< /callout >}}

### Where the counting lives

Look at that loop again. The three things that control the counting are in three different places:

- The start is on **line 6**, above the loop.
- The stopping point is on **line 9**, in the [[CONDITION|condition]].
- The step is on **line 11**, buried inside the [[BLOCK|block]].

{{< short-answer key="p1_how_long" label="How long to work out" prompt="If a teammate asked you \"how many times does that run?\", how long would it take you to work it out?" >}}

## Learn It --- All Three on One Line

A [[FOR LOOP|for loop]] does exactly the same job, but it puts the start, the stop, and the step together where you can see all three at once.

```text
for (position = 200; position < 1800; position++)
      ↑              ↑                  ↑
    start          stop               step
```

| Code / part | What it means |
| --- | --- |
| `position = 200` | Where the counting begins. Runs once, before anything else. |
| `position < 1800` | Checked before every trip through the block. The moment it is false, the loop ends. |
| `position++` | Runs at the end of every trip. `++` means add one --- the shorthand you met in Project 9. |

Two [[SEMICOLON|semicolons]] inside the parentheses, and none after the closing one. Same rule as `while` and `if` --- the braces finish the [[STATEMENT|statement]].
{.muted}

### The same loop, both ways

**while**

```c
int position = 200;

while (position < 1800)
{
	set_servo_position(arm, position);
	msleep(5);
	position++;
}
```

Three pieces in three places. Forget the last one and it never ends.

**for**

```c
int position;

for (position = 200; position < 1800; position++)
{
	set_servo_position(arm, position);
	msleep(5);
}
```

All three in one place. Hard to forget the step when it is right there.

### Which one, when?

| Use `while` when... | Use `for` when... |
| --- | --- |
| You do not know how many times --- it depends on a [[SENSOR\|sensor]]. | You know the count before you start. Four corners. Two poms. |
| There is more than one way out of the loop. | You are counting up or down by a steady amount. |
| Nothing needs to change by a set step each time. | You want the whole plan readable on one line. |

{{< callout title="Look Back at Every Loop You Have Written" variant="navy" >}}
Drive until bump. Drive until 4000 [[TICK|ticks]]. Follow until you see black. **Every one of them was a `while`, and every one had to be** --- the robot could not know in advance how many times round it would go.

Now think about "put two poms in the basket." You know it is two. That is what `for` is for.
{{< /callout >}}

### Counting repeats, not values

The counter does not have to control anything. It can just count how many times you have gone round.

```c
int count;

for (count = 0; count < 4; count++)
{
	drive_forward(4000);
	turn_right();
}
```

That is a square. Four sides, four corners, four lines of code --- and to make it a pentagon you change one number.

{{< safety title="⚠ Starting at 0 Means Stopping Before the Count" >}}
`count = 0; count < 4` gives you 0, 1, 2, 3 --- that is **four** trips, not three, and not five.

Counting from zero again, same as the motor [[PORT|ports]] back in Project 3. Write out the numbers if you are not sure.
{{< /safety >}}

## Do It --- Do It Again, Automatically

### Step 1 --- Convert the smoother

Take the `while` version from Try It and rewrite it as a `for` loop. The arm should move identically.

{{< checklist >}}
- key: p3_converted
  label: "My `for` version moves the arm exactly like the `while` version did"
{{< /checklist >}}
{{< short-answer key="p3_bigger_step" label="Bigger step" prompt="Change the step from `position++` to `position = position + 40`. What happened to the movement?" >}}

### Step 2 --- A square in four lines

The square, for the last time. Use a `for` loop and your library [[FUNCTION|functions]].

{{< gridtable >}}
columns:
- head: Version
- head: "Lines in main"
  aria: "P11 lines"
- head: "Change it to a pentagon by..."
  aria: "P11 pentagon"
rows:
  - cells:
      - text: "Project 11 --- ticks, written out"
      - key: p3_sq_p11
        aria: "P11 lines"
      - key: p3_sq_p11_penta
        aria: "P11 pentagon"
  - cells:
      - text: "Project 12 --- functions"
      - key: p3_sq_p12
        aria: "P12 lines"
      - key: p3_sq_p12_penta
        aria: "P12 pentagon"
  - cells:
      - text: "Now --- a for loop"
      - key: p3_sq_p17
        aria: "P17 lines"
      - key: p3_sq_p17_penta
        aria: "P17 pentagon"
{{< /gridtable >}}
{{< checklist >}}
- key: p3_square
  label: "My robot drives a square from a four-iteration loop"
{{< /checklist >}}

### Step 3 --- Mission 11 Bonus --- two orange poms for 7 points

{{< mission-summary mission="11" video=true >}}
{{< /mission-summary >}}
Start here --- it is the simplest "do it twice" on the field, and you already have the function.

{{< callout title="Two Ways, Both Fine" variant="gold" >}}
Call your function twice, or wrap it in a two-iteration `for` loop. Try both and see which reads better to you.

The loop wins the moment the number might change --- and at a tournament it always might.
{{< /callout >}}

The second pom is somewhere different, so your function needs an [[ARGUMENT|argument]] or a short drive between trips. Same problem you solved for Mission 15 in Project 12.
{.muted}

{{< checklist >}}
- key: p3_m11
  label: "Two orange poms are in the same basket at the end"
{{< /checklist >}}

### Step 4 --- Missions 16 and 17 Bonuses --- stack them higher for 22 points

<!-- unresolved mission card: Missions 16 & 17 --- Shelving and Racking -->

{{< callout title="A Cube On a Cube Still Counts" variant="navy" >}}
Read the scoring examples: *one cube [[ON TOP OF]] another cube that is [[ON TOP OF]] the Large Green Cube* scores. So the second cube can go on the pile rather than beside it --- whichever your claw does more reliably.
{{< /callout >}}

{{< safety title="⚠ Final Position --- Both Have to Survive" >}}
Delivering the second cube is where the first one gets knocked off. Approach the same way each trip, and back straight away rather than turning while you are still close.
{{< /safety >}}

{{< checklist >}}
- key: p3_m16
  label: "Two spilled cubes are on the Large Green Cube at the end"
- key: p3_m17
  label: "Two unstraight cubes are on the Large Brown Cube at the end"
{{< /checklist >}}
{{< ask key="p3_knocked_off" label="Knocked off" >}}Did the second delivery ever knock the first one off? What fixed it?{{< /ask >}}

### Step 5 --- Mission 7 Bonus --- a second enclosure · 9 pts

{{< mission-summary mission="7" video=true >}}
{{< /mission-summary >}}
This is the same delivery as the base, aimed somewhere else --- which is exactly the case for a function with an argument called twice, or a loop over two destinations.

{{< checklist >}}
- key: p3_m7
  label: "Two enclosures each hold a blue and an orange pom"
{{< /checklist >}}

### Step 6 --- Put the loops in your library

Anything you wrapped in a loop that worked --- `deliver_poms(int howMany)`, `smooth_arm(int from, int to)` --- belongs in your library file. Add it, save, and note it in your [[COMMENT|comment]] block.

{{< checklist >}}
- key: p3_library
  label: "My new loop functions are in my library and documented"
{{< /checklist >}}

### Step 7 --- Run it five times

{{< gridtable >}}
columns:
- head: Run
- head: M11
  aria: "R1 M11"
- head: M16
  aria: "R1 M16"
- head: M17
  aria: "R1 M17"
- head: M7
  aria: "R1 M7"
- head: Points
  aria: "R1 points"
rows:
  - cells:
      - text: 1
      - key: p3_r1_m11
        aria: "R1 M11"
      - key: p3_r1_m16
        aria: "R1 M16"
      - key: p3_r1_m17
        aria: "R1 M17"
      - key: p3_r1_m7
        aria: "R1 M7"
      - key: p3_r1_pts
        aria: "R1 points"
  - cells:
      - text: 2
      - key: p3_r2_m11
        aria: "R2 M11"
      - key: p3_r2_m16
        aria: "R2 M16"
      - key: p3_r2_m17
        aria: "R2 M17"
      - key: p3_r2_m7
        aria: "R2 M7"
      - key: p3_r2_pts
        aria: "R2 points"
  - cells:
      - text: 3
      - key: p3_r3_m11
        aria: "R3 M11"
      - key: p3_r3_m16
        aria: "R3 M16"
      - key: p3_r3_m17
        aria: "R3 M17"
      - key: p3_r3_m7
        aria: "R3 M7"
      - key: p3_r3_pts
        aria: "R3 points"
  - cells:
      - text: 4
      - key: p3_r4_m11
        aria: "R4 M11"
      - key: p3_r4_m16
        aria: "R4 M16"
      - key: p3_r4_m17
        aria: "R4 M17"
      - key: p3_r4_m7
        aria: "R4 M7"
      - key: p3_r4_pts
        aria: "R4 points"
  - cells:
      - text: 5
      - key: p3_r5_m11
        aria: "R5 M11"
      - key: p3_r5_m16
        aria: "R5 M16"
      - key: p3_r5_m17
        aria: "R5 M17"
      - key: p3_r5_m7
        aria: "R5 M7"
      - key: p3_r5_pts
        aria: "R5 points"
{{< /gridtable >}}

## Score It --- Checkpoint

### My score

{{< gridtable >}}
columns:
- head: "Mission part"
- head: Scored?
  aria: "Score M11"
- head: Points
rows:
  - cells:
      - text: "Mission 11 --- Bonus (two orange poms, same basket)"
      - key: p4_s_m11
        aria: "Score M11"
      - text: 7
  - cells:
      - text: "Mission 16 --- Bonus (two spilled cubes on the green)"
      - key: p4_s_m16
        aria: "Score M16"
      - text: 11
  - cells:
      - text: "Mission 17 --- Bonus (two unstraight cubes on the brown)"
      - key: p4_s_m17
        aria: "Score M17"
      - text: 11
  - cells:
      - text: "Mission 7 --- Bonus (a second enclosure)"
      - key: p4_s_m7
        aria: "Score M7"
      - text: 9
  - cells:
      - text: "My total this project"
      - key: p4_total
        aria: Total
      - text: 38
{{< /gridtable >}}

### Which loop?

{{< gridtable >}}
columns:
- head: "The robot needs to..."
- head: "while or for?"
  aria: "Loop 1"
rows:
  - cells:
      - text: "Drive until it touches a wall"
      - key: p4_l1
        aria: "Loop 1"
  - cells:
      - text: "Put three cubes on a [[PALLET|pallet]]"
      - key: p4_l2
        aria: "Loop 2"
  - cells:
      - text: "Follow a line until it has gone 5000 ticks"
      - key: p4_l3
        aria: "Loop 3"
  - cells:
      - text: "Lower the arm in small steps from 200 to 1800"
      - key: p4_l4
        aria: "Loop 4"
  - cells:
      - text: "Wait for someone to press a button"
      - key: p4_l5
        aria: "Loop 5"
{{< /gridtable >}}

### How many times?

{{< gridtable >}}
columns:
- head: "The loop"
- head: "Runs how many times?"
  aria: "Count 1"
rows:
  - cells:
      - text: "`for (i = 0; i < 5; i++)`"
      - key: p4_c1
        aria: "Count 1"
  - cells:
      - text: "`for (i = 1; i <= 5; i++)`"
      - key: p4_c2
        aria: "Count 2"
  - cells:
      - text: "`for (i = 0; i < 10; i = i + 2)`"
      - key: p4_c3
        aria: "Count 3"
  - cells:
      - text: "`for (i = 10; i > 0; i--)`"
      - key: p4_c4
        aria: "Count 4"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_parts
  label: "I can name the three parts of a `for` loop and say what each does"
- key: p4_can_semis
  label: "I put two semicolons inside the parentheses and none after them"
- key: p4_can_count
  label: "I can work out how many times a `for` loop will run"
- key: p4_can_choose
  label: "I can choose between `while` and `for` and explain why"
- key: p4_can_convert
  label: "I can rewrite a `while` loop as a `for` loop"
- key: p4_can_repeat_fn
  label: "I can repeat a whole function call with a loop"
- key: p4_can_smooth
  label: "I can move a servo smoothly instead of snapping it"
{{< /checklist >}}

### Every point on the field

Add up what you scored across the whole strand. The right-hand column is what was available.
{.muted}

{{< gridtable >}}
columns:
- head: Project
- head: "I scored"
  aria: "P4 total"
- head: Available
rows:
  - cells:
      - text: "4 --- Out and Back"
      - key: p4_t04
        aria: "P4 total"
      - text: 4
  - cells:
      - text: "6 --- Bulldoze Run"
      - key: p4_t06
        aria: "P6 total"
      - text: 16
  - cells:
      - text: "7 --- Your Robot's Arm"
      - key: p4_t07
        aria: "P7 total"
      - text: 7
  - cells:
      - text: "8 --- Arm and Claw Together"
      - key: p4_t08
        aria: "P8 total"
      - text: 37
  - cells:
      - text: "9 --- Names for Your Numbers"
      - key: p4_t09
        aria: "P9 total"
      - text: 20
  - cells:
      - text: "10 --- Feeling for Things"
      - key: p4_t10
        aria: "P10 total"
      - text: 13
  - cells:
      - text: "11 --- Counting Wheel Ticks"
      - key: p4_t11
        aria: "P11 total"
      - text: 40
  - cells:
      - text: "12 --- Teaching Your Robot New Moves"
      - key: p4_t12
        aria: "P12 total"
      - text: 18
  - cells:
      - text: "13 --- Deciding What to Do"
      - key: p4_t13
        aria: "P13 total"
      - text: 22
  - cells:
      - text: "14 --- Seeing Light and Dark"
      - key: p4_t14
        aria: "P14 total"
      - text: 35
  - cells:
      - text: "15 --- Following the Line"
      - key: p4_t15
        aria: "P15 total"
      - text: 51
  - cells:
      - text: "17 --- Repeating Without Retyping"
      - key: p4_t17
        aria: "P17 total"
      - text: 38
  - cells:
      - text: Total
      - key: p4_grand
        aria: "Grand total"
      - text: 301
{{< /gridtable >}}
{{< callout title="301 Is the Whole Game" variant="gold" >}}
Add up every base, bonus, and advanced bonus across all eighteen Stack Attack missions and the number is 301.

There is nothing on that field you have not been taught how to reach.
{{< /callout >}}

### Think about it

{{< ask key="p4_hardest_loop" label="Hardest loop" >}}You have written four kinds of loop condition now --- a switch, a tick count, a brightness, and a plain count. Which was hardest to get right, and why that one?{{< /ask >}}

{{< ask key="p4_first_program" label="First program" >}}In Project 1 you ran a program somebody else wrote and did not understand a line of it. Go back and read that program now. What does it say to you?{{< /ask >}}

{{< ask key="p4_intelligent" label="Is it intelligent" >}}Your robot does exactly what it is told, every time, and has no idea what any of it means. After seventeen projects, does it seem intelligent to you? Say what makes you answer that way.{{< /ask >}}

### That Is the Coding Strand

Seventeen projects ago your robot could not be switched on. It now drives measured distances, turns to an angle, grabs and stacks and places, feels for walls, counts its own wheels, reads light and dark, follows a line, checks its own work, and decides what to do when something goes wrong.

All of it built from about a dozen commands and four ideas: **do this, do it if, do it while, do it again.**

Take your library with you. Next season the field will be different and most of what is in that file will still work.

KIPR · Botball Explorer --- Discovery Projects · © KISS Institute for Practical Robotics 1997--2026
