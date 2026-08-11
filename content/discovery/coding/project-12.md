---
title: "Coding Project 12 — Teaching Your Robot New Moves"
short_title: "Coding Project 12"
linkTitle: "Teaching Your Robot New Moves"
description: "Write your own commands. Prototype, definition, call — plus arguments and functions that call functions. Then double a mission score with one extra line."
weight: 12
nav: discovery
mission_id: discovery_coding_12
mission_title: "Coding Project 12 — Teaching Your Robot New Moves"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 12
strand: coding
phase: "Phase 4 · Make It Reliable"
phase_order: 4
time: "One class period"
eyebrow: "Discovery · Coding Project 12"
heading: "Teaching Your Robot New Moves"
subheading: "Give twenty lines a name. Then just say the name."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Teaching Your Robot New Moves"
mission_label: "Mission 15 — base + bonus · 18 pts"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: Project
    definition: "Coding Project 12"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Make It Reliable"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Writing your own commands — drive, turn, grab — and calling them instead of retyping them. Then using one of them twice to double a score."
  - term: "Mission Anchor"
    definition: "[[@15:base|Mission 15]] — Hazard Disposal #2 (base + bonus) — 18 points"
  - term: "Before You Start"
    definition: "Project 11 — your drive and turn code must already work in [[TICK|ticks]]."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Robot with arm and claw"
      - key: need_2
        label: Wombat
      - key: need_3
        label: "Charged battery"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "Your [[TICK|tick]] card from Project 11"
---

## Try It --- Brain Dump

Without looking anything up, write down every command you know. Fill as many boxes as you can.

{{< gridtable >}}
columns:
- head: Command
  aria: "Command 1"
- head: Command
  aria: "Command 2"
- head: Command
  aria: "Command 3"
rows:
  - cells:
      - key: p1_bd1
        aria: "Command 1"
      - key: p1_bd2
        aria: "Command 2"
      - key: p1_bd3
        aria: "Command 3"
  - cells:
      - key: p1_bd4
        aria: "Command 4"
      - key: p1_bd5
        aria: "Command 5"
      - key: p1_bd6
        aria: "Command 6"
  - cells:
      - key: p1_bd7
        aria: "Command 7"
      - key: p1_bd8
        aria: "Command 8"
      - key: p1_bd9
        aria: "Command 9"
  - cells:
      - key: p1_bd10
        aria: "Command 10"
      - key: p1_bd11
        aria: "Command 11"
      - key: p1_bd12
        aria: "Command 12"
{{< /gridtable >}}
Now compare with a partner, then look at your whole list at once.

{{< ask key="p1_commonalities" label=Commonalities >}}What do all of them have in common? Find at least two things.{{< /ask >}}

{{< callout title="You Should Have Found These" variant="gold" >}}
- Every one of them has a **name**.
- Every one of them has a pair of **parentheses** after the name.
- Some need information inside the parentheses --- `motor(0, 100)`, `msleep(3000)`.
- Some need nothing at all --- `ao()`, `enable_servos()`.

**Every command you have ever typed is a [[FUNCTION|function]].** Somebody wrote them, put them in the KIPR [[LIBRARY|library]], and gave you the names. Today you join them.
{{< /callout >}}

### Count your own repetition

Open your Project 11 program. Go through it and count.

{{< gridtable >}}
columns:
- head: "How many times did you type..."
- head: Times
  aria: "Drive count"
- head: "Lines each"
  aria: "Drive lines"
rows:
  - cells:
      - text: "The clear-then-loop [[BLOCK|block]] for driving forward"
      - key: p1_cnt_drive
        aria: "Drive count"
      - key: p1_len_drive
        aria: "Drive lines"
  - cells:
      - text: "The block for a 90° turn"
      - key: p1_cnt_turn
        aria: "Turn count"
      - key: p1_len_turn
        aria: "Turn lines"
  - cells:
      - text: "The six-step grab sequence"
      - key: p1_cnt_grab
        aria: "Grab count"
      - key: p1_len_grab
        aria: "Grab lines"
{{< /gridtable >}}
{{< short-answer key="p1_repeated_lines" label="Repeated lines" prompt="Multiply those out. Roughly how many lines of your program are copies of something you already wrote?" >}}

## Learn It --- Three Parts, In This Order

Writing your own function is like adding a word to a dictionary. You need the word listed, you need its meaning written down, and then you can use it in a sentence.

1. [[PROTOTYPE\|Prototype]]: The prototype goes on the line after `#include`, before `int main()`. It is the **word in the vocabulary list** --- it tells the [[COMPILER\|compiler]] this name exists.
2. Definition: Goes **after the last closing brace** of your program. This is the **definition of the word** --- what the robot actually does.
3. Call: Inside `main`, where you would have typed all those lines. This is **using the word in a sentence**.

### What void means

[[VOID|Void]] means the function *does a job but hands nothing back*. `ao()` is like that --- it stops the motors, it does not give you an answer.

You have seen the other kind too. `digital(0)` and `gmpc(0)` hand you a number. Yours will not, so yours say `void`.
{.muted}

### Naming rules

- Make it **obvious**. `drive_forward`, not `thing2`.
- No spaces --- use an underscore: `drive_forward`.
- It cannot start with a number.
- It cannot have the same name as a command that already exists. You cannot call yours `motor`.

### The whole thing, side by side

**Before --- twice**

```c
int main()
{
	cmpc(left);
	while (gmpc(left) < 4000)
	{
		motor(left, 50);
		motor(right, 50);
	}
	motor(0, 0);
	motor(3, 0);
	msleep(30);
	msleep(500);

	cmpc(left);
	while (gmpc(left) < 4000)
	{
		motor(left, 50);
		motor(right, 50);
	}
	motor(0, 0);
	motor(3, 0);
	msleep(30);
	msleep(500);

	return 0;
}
```

**After --- a function**

```c
#include <kipr/wombat.h>

// 1. Prototype
void drive_forward();

int main()
{
	// 3. Call
	drive_forward();
	drive_forward();

	return 0;
}

// 2. Definition
void drive_forward()
{
	cmpc(left);
	while (gmpc(left) < 4000)
	{
		motor(left, 50);
		motor(right, 50);
	}
	motor(0, 0);
	motor(3, 0);
	msleep(30);
	msleep(500);
}
```

{{< safety title="⚠ The Prototype Gets a Semicolon. The Definition Does Not." >}}
`void drive_forward();` --- [[SEMICOLON|semicolon]]. It is a [[STATEMENT|statement]] announcing the name.

`void drive_forward()` followed by `{` --- no semicolon. The braces do that job, exactly like `int main()`.

Putting a semicolon on the definition is the most common mistake in this project.
{{< /safety >}}

### Arguments --- one function, many distances

`drive_forward()` always drives 4000 ticks. That is fine until you need 2000.

Put a [[VARIABLE|variable]] in the parentheses and you can decide the number every time you call it. That variable is an **[[ARGUMENT|argument]]** --- the same word you met back in Project 3.

```c
// Prototype says what it needs
void drive_forward(int ticks);

...

// Call: go 4000
drive_forward(4000);
// Call: go 1200
drive_forward(1200);

...

// Definition uses the name
void drive_forward(int ticks)
{
	cmpc(left);
	while (gmpc(left) < ticks)
	{
		motor(left, 50);
		motor(right, 50);
	}
	motor(0, 0);
	motor(3, 0);
	msleep(30);
	msleep(500);
}
```

Two arguments? Separate them with a comma --- exactly like `motor(port, power)` does.
{.muted}

### A function can call another function

Once `drive_forward()` and `turn_right()` exist, a bigger function can just use them.

```c
void drive_square()
{
	drive_forward(4000);
	turn_right();
	drive_forward(4000);
	turn_right();
	drive_forward(4000);
	turn_right();
	drive_forward(4000);
	turn_right();
}
```

Now `drive_square();` is one line. This is how a whole match run eventually becomes a short, readable list of things your robot does.

## Do It --- Build Your Own Commands

### Step 1 --- My first function

Create a new project called `Functions`. Take your working drive-forward code from Project 11 and turn it into a function with all three parts.

Call it twice in `main`. The robot should drive the distance, then drive it again.

{{< checklist >}}
- key: p3_first_fn
  label: "My function [[COMPILE|compiles]] and the robot drives twice"
- key: p3_no_semi
  label: "Prototype has a semicolon, definition does not"
{{< /checklist >}}
{{< short-answer key="p3_fn_name" label="Function name" prompt="What did you name it, and why that name?" >}}

### Step 2 --- Break the prototype on purpose

Delete the prototype line. Compile.

{{< short-answer key="p3_no_prototype_err" label="No prototype error" prompt="What did the error say?" >}}

Put it back. Now add a semicolon to the end of the *definition* line and compile again.

{{< short-answer key="p3_semi_err" label="Semicolon error" prompt="What happened this time?" >}}

Fix it. You have now seen both of the mistakes everyone makes here.

### Step 3 --- A turn function

Same three parts, using your 90° turn from Project 11.

{{< checklist >}}
- key: p3_turn_fn
  label: "My turn function works"
{{< /checklist >}}

### Step 4 --- The square --- one more time

You have now driven this square three times. Do it once more, using only function calls.

{{< gridtable >}}
columns:
- head: Version
- head: "Roughly how many lines?"
  aria: "P5 lines"
- head: "Did it close?"
  aria: "P5 closed"
rows:
  - cells:
      - text: "Project 5 --- timed"
      - key: p3_sq_p5_lines
        aria: "P5 lines"
      - key: p3_sq_p5_close
        aria: "P5 closed"
  - cells:
      - text: "Project 11 --- ticks"
      - key: p3_sq_p11_lines
        aria: "P11 lines"
      - key: p3_sq_p11_close
        aria: "P11 closed"
  - cells:
      - text: "Now --- functions"
      - key: p3_sq_p12_lines
        aria: "P12 lines"
      - key: p3_sq_p12_close
        aria: "P12 closed"
{{< /gridtable >}}
{{< callout title="Two Different Kinds of Better" variant="gold" >}}
Project 11 made the square **work**. This project makes it **readable**. Those are separate problems, and you have now solved both.
{{< /callout >}}

### Step 5 --- Add an argument

Change your drive function so the distance comes from an argument. Then drive a **rectangle** --- two long sides, two short ones --- with the same function called four times.

```c
drive_forward(4000);
turn_right();
drive_forward(2000);
turn_right();
drive_forward(4000);
turn_right();
drive_forward(2000);
turn_right();
```

{{< checklist >}}
- key: p3_rectangle
  label: "My robot drives a rectangle using one drive function"
{{< /checklist >}}
{{< short-answer key="p3_without_arg" label="Without argument" prompt="Without the argument, how many separate functions would a rectangle have needed?" >}}

### Step 6 --- Wrap the grab

The six-step grab sequence from Project 8 is your best candidate. Turn it into `grab()` and `release()`.

```c
void grab()
{
	set_servo_position(arm, down);
	msleep(700);
	set_servo_position(claw, closed);
	msleep(700);
	set_servo_position(arm, up);
	msleep(700);
}
```

Now write a bigger function that uses them:

```c
void fetch_pom()
{
	drive_forward(2000);
	grab();
	turn_right();
	drive_forward(1500);
	release();
}
```

{{< checklist >}}
- key: p3_grab_fn
  label: "I have a function that calls my other functions"
{{< /checklist >}}

### Step 7 --- Mission 15 --- one blue pom for 9 points

{{< mission-summary mission="15" video=true >}}
{{< /mission-summary >}}
{{< safety title="⚠ Not the Basket You Used in Project 8" >}}
Mission 11 (orange poms) and Mission 15 (blue poms) **must use different baskets.** In Project 8 you wrote down which basket you were saving for this. Use that one.
{{< /safety >}}

Build the run out of the functions you just wrote. Your whole `main` should read like a list of instructions, not a wall of code.

{{< checklist >}}
- key: p3_m15_base
  label: "One blue pom is [[IN]] a basket and stays there"
{{< /checklist >}}

### Step 8 --- Mission 15 Bonus --- do it again for 9 points

Here is the payoff for the whole project. To score the bonus you need a second blue pom in the **same** basket.

You do not write any new code. **You call your function a second time.**

```c
fetch_pom();
fetch_pom();
```

{{< callout title="Nine Points for One Line" variant="gold" >}}
If your function had been twenty lines of copied code, doubling this mission would have meant twenty more lines to write, test, and keep in step. Instead it is one line.

That is the entire argument for functions, and you just got paid for it.
{{< /callout >}}

The second pom is somewhere different from the first, so your function will need a way to handle that --- an argument, or a small drive between the two calls.
{.muted}

{{< ask key="p3_second_pom" label="Second pom approach" >}}How did you get the second call to reach a different pom?{{< /ask >}}

{{< checklist >}}
- key: p3_m15_bonus
  label: "Two blue poms are in the same basket at the end"
{{< /checklist >}}

### Step 9 --- Run it five times

{{< gridtable >}}
columns:
- head: Run
- head: "One pom in?"
  aria: "R1 base"
- head: "Two in the same basket?"
  aria: "R1 bonus"
- head: Points
  aria: "R1 points"
rows:
  - cells:
      - text: 1
      - key: p3_r1_base
        aria: "R1 base"
      - key: p3_r1_bonus
        aria: "R1 bonus"
      - key: p3_r1_pts
        aria: "R1 points"
  - cells:
      - text: 2
      - key: p3_r2_base
        aria: "R2 base"
      - key: p3_r2_bonus
        aria: "R2 bonus"
      - key: p3_r2_pts
        aria: "R2 points"
  - cells:
      - text: 3
      - key: p3_r3_base
        aria: "R3 base"
      - key: p3_r3_bonus
        aria: "R3 bonus"
      - key: p3_r3_pts
        aria: "R3 points"
  - cells:
      - text: 4
      - key: p3_r4_base
        aria: "R4 base"
      - key: p3_r4_bonus
        aria: "R4 bonus"
      - key: p3_r4_pts
        aria: "R4 points"
  - cells:
      - text: 5
      - key: p3_r5_base
        aria: "R5 base"
      - key: p3_r5_bonus
        aria: "R5 bonus"
      - key: p3_r5_pts
        aria: "R5 points"
{{< /gridtable >}}

## Score It --- Checkpoint

### My score

{{< gridtable >}}
columns:
- head: "Mission part"
- head: Scored?
  aria: "Score M15 base"
- head: Points
rows:
  - cells:
      - text: "Mission 15 --- Base (one blue pom in a basket)"
      - key: p4_s_m15b
        aria: "Score M15 base"
      - text: 9
  - cells:
      - text: "Mission 15 --- Bonus (two in the same basket)"
      - key: p4_s_m15bo
        aria: "Score M15 bonus"
      - text: 9
  - cells:
      - text: "My total"
      - key: p4_total
        aria: Total
      - text: 18
{{< /gridtable >}}

### My function list

Write down every function you built. This list is the start of something you will finish in Project 16.
{.muted}

{{< gridtable >}}
columns:
- head: "Function name"
  aria: "Function 1 name"
- head: Arguments
  aria: "Function 1 args"
- head: "What it does"
  aria: "Function 1 does"
rows:
  - cells:
      - key: p4_fn1_name
        aria: "Function 1 name"
      - key: p4_fn1_args
        aria: "Function 1 args"
      - key: p4_fn1_does
        aria: "Function 1 does"
  - cells:
      - key: p4_fn2_name
        aria: "Function 2 name"
      - key: p4_fn2_args
        aria: "Function 2 args"
      - key: p4_fn2_does
        aria: "Function 2 does"
  - cells:
      - key: p4_fn3_name
        aria: "Function 3 name"
      - key: p4_fn3_args
        aria: "Function 3 args"
      - key: p4_fn3_does
        aria: "Function 3 does"
  - cells:
      - key: p4_fn4_name
        aria: "Function 4 name"
      - key: p4_fn4_args
        aria: "Function 4 args"
      - key: p4_fn4_does
        aria: "Function 4 does"
  - cells:
      - key: p4_fn5_name
        aria: "Function 5 name"
      - key: p4_fn5_args
        aria: "Function 5 args"
      - key: p4_fn5_does
        aria: "Function 5 does"
{{< /gridtable >}}

### Where does each part go?

{{< gridtable >}}
columns:
- head: Part
- head: "Where in the program"
  aria: "Where prototype"
rows:
  - cells:
      - text: Prototype
      - key: p4_where_proto
        aria: "Where prototype"
  - cells:
      - text: Definition
      - key: p4_where_def
        aria: "Where definition"
  - cells:
      - text: Call
      - key: p4_where_call
        aria: "Where call"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_three
  label: "I can name the three parts of a function and say where each one goes"
- key: p4_can_semi
  label: "I know which one gets a semicolon and which one does not"
- key: p4_can_void
  label: "I can explain what `void` means"
- key: p4_can_name
  label: "I can name a function so a teammate knows what it does without reading it"
- key: p4_can_args
  label: "I can write a function that takes an argument and use it with different values"
- key: p4_can_nested
  label: "I can write a function that calls my other functions"
- key: p4_can_read_main
  label: "My `main` reads like a list of what the robot does"
{{< /checklist >}}

### Think about it

{{< ask key="p4_fix_one_place" label="Fix in one place" >}}Your robot's turn is 15 ticks off. With functions, how many places do you edit? Without them, how many?{{< /ask >}}

{{< ask key="p4_naming_pattern" label="Naming pattern" >}}In Project 9 you gave names to numbers. Here you gave names to actions. What is the same about those two ideas?{{< /ask >}}

{{< ask key="p4_dont_need_to_know" label="Do they need to know" >}}A new teammate joins and opens your program. They see `fetch_pom();` and have no idea how it works. Is that a problem?{{< /ask >}}

### Next

Your robot follows the same plan every time, no matter what it finds. If a cube is not where you expected, it grabs at nothing and carries on regardless.

In **Project 13 --- Deciding What to Do**, it stops following orders blindly and starts choosing.

KIPR · Botball Explorer --- Discovery Projects · © KISS Institute for Practical Robotics 1997--2026
