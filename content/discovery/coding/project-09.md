---
title: "Coding Project 9 — Names for Your Numbers"
short_title: "Coding Project 9"
linkTitle: "Names for Your Numbers"
description: "Turn your position comments into real variables. Change a number once instead of everywhere — then stack the red cubes on the top shelf."
weight: 9
nav: discovery
mission_id: discovery_coding_09
mission_title: "Coding Project 9 — Names for Your Numbers"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 9
strand: coding
phase: "Phase 4 · Make It Reliable"
phase_order: 4
time: "One class period"
eyebrow: "Discovery · Coding Project 9"
heading: "Names for Your Numbers"
subheading: "Your comments become real code. Change a number once, and the whole program changes with it."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Names for Your Numbers"
mission_label: "Mission 5 — base + bonus · 20 pts"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: Project
    definition: "Coding Project 9"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Make It Reliable"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Turning the numbers scattered through your programs into named [[VARIABLE|variables]], then using that cleaner code to stack the red cubes."
  - term: "Mission Anchor"
    definition: "[[@5:base|Mission 5]] — Top Shelf Delivery (base + bonus) — 20 points"
  - term: "Before You Start"
    definition: "Project 8 — you need a working grab sequence and all seven of your [[SERVO|servo]] numbers."
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
        label: "Your Project 8 program and [[SERVO|servo]] card"
---

## Try It — Count the Damage

Open your Project 8 program — the big one with all four missions in it. Scroll through it slowly.

{{< gridtable >}}
columns:
- head: "How many times does this appear as a bare number?"
- head: Count
  aria: "Count arm port"
rows:
  - cells:
      - text: "My arm's servo [[PORT|port]]"
      - key: p1_count_armport
        aria: "Count arm port"
  - cells:
      - text: "My arm's \"up\" position"
      - key: p1_count_up
        aria: "Count up"
  - cells:
      - text: "My arm's \"down\" position"
      - key: p1_count_down
        aria: "Count down"
  - cells:
      - text: "My claw's \"open\" position"
      - key: p1_count_open
        aria: "Count open"
  - cells:
      - text: "My claw's \"closed on a cube\" position"
      - key: p1_count_closed
        aria: "Count closed"
{{< /gridtable >}}
### Now break it

{{% safety title="⚠ Your Teammate Rebuilt the Claw Last Night" %}}
It grips better now. But the closed position is different — it is **200 lower** than it was.

Find every place that number appears in your program and change it. **Time yourself.**
{{% /safety %}}

{{< gridtable >}}
columns:
- head: Question
- head: Answer
  aria: "Time taken"
rows:
  - cells:
      - text: "How long did it take?"
      - key: p1_time_taken
        aria: "Time taken"
  - cells:
      - text: "How many places did you have to edit?"
      - key: p1_places
        aria: "Places edited"
  - cells:
      - text: "Are you certain you got them all?"
      - key: p1_certain
        aria: Certain
{{< /gridtable >}}
{{< ask key="p1_missed_one" label="What if you missed one" >}}That last question is the real problem. If you missed one, what would happen — and how would you find out?{{< /ask >}}

{{% callout title="This Gets Worse, Not Better" variant="gold" %}}
Your program is going to keep growing. By the time you are running a full match, that number could be in twenty places. There is a fix, it takes one line, and you are about to learn it.
{{% /callout %}}

## Learn It — Give the Number a Name

A [[VARIABLE|variable]] is a name that holds a value. You set it once at the top of your program, then use the name everywhere instead of the number.

Here is the whole idea in one line:

```text
int arm = 0;
```

| Code / part | What it means |
| --- | --- |
| `int` | Short for [[INTEGER\|integer]] — a whole number. Ports and servo positions are always whole numbers. |
| `arm` | The name. Pick something you and your team will understand next month. |
| `= 0` | The value it holds. |
| `;` | A [[SEMICOLON\|semicolon]], same as any other [[STATEMENT\|statement]]. |

{{% callout title="Where Variables Go" variant="navy" %}}
Inside the [[BLOCK|block]] — after the opening `{` of `main`, above everything else. Not outside the braces, and not scattered through the middle of your program.
{{% /callout %}}

### Comments to code: three small edits

You have been writing your positions as [[COMMENT|comments]] since Project 7, in the **name = number** format. There was a reason for that. Turning a comment into a variable takes three changes:

- Delete the two slashes.
- Add `int` at the front.
- Add a semicolon at the end.

**Before — comments**

```c
int main ()
{
    // arm  = 0
    // up   = 1234
    // down = 230

    ...
}
```

**After — variables**

```c
int main ()
{
    int arm  = 0;
    int up   = 1234;
    int down = 230;

    ...
}
```

### Then use the names

**Before**

```text
set_servo_position(0, 230);
msleep(500);
set_servo_position(0, 1234);

motor(0, 50);
motor(3, 50);
```

**After**

```text
set_servo_position(arm, down);
msleep(500);
set_servo_position(arm, up);

motor(left, 50);
motor(right, 50);
```

Read both versions out loud. One is a list of numbers. The other tells you what the robot is doing.
{.muted}

### Five reasons this is worth the trouble

- You do not have to remember which port is the arm and which is the claw — the computer remembers for you.
- You do not have to remember which number is up, down, open, or closed.
- Your program is easier to read.
- Your program is easier to debug.
- If a port or a position changes, **you change one line.**

### Name things properly

Short names are fine if they are obvious. If they are not obvious, explain them:

```text
int L = 0;   // L is my left wheel
int R = 3;   // R is my right wheel
```

A name nobody can decode is barely better than a bare number.
{.muted}

{{% callout title="A Yellow Banner Is Not an Error" %}}
If you declare a variable and never use it, you will get *Compilation Succeeded with Warnings* — a yellow banner instead of a green one. The program still runs.

But warnings exist for a reason. A variable you declared and never used usually means you forgot to swap out one of the bare numbers.
{{% /callout %}}

### Variables can change

Most of your variables hold one value forever — a port is always the same port. But a variable is called a *variable* because it can vary.

```text
int position = 250;

position = position + 10;   // now 260
position = position - 10;   // back to 250
```

Adding or subtracting one is so common it has its own shorthand:

| Code / part | What it means |
| --- | --- |
| `position++;` | Exactly the same as `position = position + 1;` |
| `position--;` | Exactly the same as `position = position - 1;` |

You will meet the real use for these in Project 10, once you have a loop to put them in.
{.muted}

## Do It — Clean It Up, Then Score

### Step 1 — Convert one small program first

Open your `Wave` program from Project 7. Turn the three position comments into variables, then replace the numbers in the `set_servo_position()` lines with the names.

[[COMPILE|Compile]]. Run. It should behave **exactly** as before.

{{< checklist >}}
- key: p3_wave_converted
  label: "Wave runs the same with variables as it did with numbers"
{{< /checklist >}}
If it behaves differently, you swapped two values. That is the most common mistake here.
{.muted}

### Step 2 — Trigger the yellow banner on purpose

Add a variable you do not use anywhere:

```text
int notused = 999;
```

Compile and look at the banner colour.

{{< short-answer key="p3_warning_text" label="Warning text" prompt="What did the warning say?" >}}

Delete the line. Get your green banner back.

### Step 3 — Convert your big Project 8 program

This is the real job. Declare all your variables at the top, then work down the program replacing bare numbers with names.

{{< gridtable >}}
columns:
- head: Variable
- head: "My value"
  aria: "left value"
- head: Done?
  aria: "left done"
rows:
  - cells:
      - text: left
      - key: p3_v_left
        aria: "left value"
      - key: p3_v_left_done
        aria: "left done"
  - cells:
      - text: right
      - key: p3_v_right
        aria: "right value"
      - key: p3_v_right_done
        aria: "right done"
  - cells:
      - text: arm
      - key: p3_v_arm
        aria: "arm value"
      - key: p3_v_arm_done
        aria: "arm done"
  - cells:
      - text: claw
      - key: p3_v_claw
        aria: "claw value"
      - key: p3_v_claw_done
        aria: "claw done"
  - cells:
      - text: up
      - key: p3_v_up
        aria: "up value"
      - key: p3_v_up_done
        aria: "up done"
  - cells:
      - text: horizontal
      - key: p3_v_horiz
        aria: "horizontal value"
      - key: p3_v_horiz_done
        aria: "horizontal done"
  - cells:
      - text: down
      - key: p3_v_down
        aria: "down value"
      - key: p3_v_down_done
        aria: "down done"
  - cells:
      - text: open
      - key: p3_v_open
        aria: "open value"
      - key: p3_v_open_done
        aria: "open done"
  - cells:
      - text: closed
      - key: p3_v_closed
        aria: "closed value"
      - key: p3_v_closed_done
        aria: "closed done"
{{< /gridtable >}}
{{% callout title="Convert One Mission Section at a Time" variant="gold" %}}
Same rule as building it in the first place. Convert one section, compile, run it, then move on. Converting all four at once and finding it broken tells you nothing about where.
{{% /callout %}}

{{< checklist >}}
- key: p3_big_converted
  label: "My whole Project 8 program uses variables and still scores the same"
{{< /checklist >}}
### Step 4 — Now do the claw change again

Same problem as Try It. Your claw's closed position drops by 200. Change it.

{{< gridtable >}}
columns:
- head: Question
- head: Answer
  aria: "Time this time"
rows:
  - cells:
      - text: "How long did it take this time?"
      - key: p3_time2
        aria: "Time this time"
  - cells:
      - text: "How many places did you edit?"
      - key: p3_places2
        aria: "Places this time"
{{< /gridtable >}}
{{< ask key="p3_compare" label="Compare before and after" >}}Compare those two numbers with the ones you wrote in Try It.{{< /ask >}}

### Step 5 — Try changing a variable while the program runs

Small experiment. Add this to a test program and watch the arm.

```text
int arm = 0;
int position = 250;

set_servo_position(arm, position);
enable_servos();
msleep(500);

position = position + 300;      // change the variable
set_servo_position(arm, position);
msleep(500);

position = position + 300;      // and again
set_servo_position(arm, position);
msleep(500);

disable_servos();
```

{{< ask key="p3_thirty_hops" label="Thirty hops" >}}The arm moved in three hops instead of one jump. What would you have to do to make it move in *thirty* small hops?{{< /ask >}}

Hold that thought. Project 10 gives you the tool that makes it one line instead of thirty.
{.muted}

### Step 6 — Mission 5 — Top Shelf Delivery20 pts

{{< mission-summary mission="5" >}}
{{< /mission-summary >}}
This one asks your arm to reach higher than anything so far. The large red cube is the platform; the small ones go [[ON TOP OF]] it.

{{< score-examples >}}
scores:
  - "One Small Red Cube is [[ON TOP OF]] the Large Red Cube."
  - "A Small Red Cube touches the upper surface while supported by a robot."
  - "A Small Red Cube is [[ON TOP OF]], and later falls off."
  - "Both Small Red Cubes are [[ON TOP OF]] at the same time."
does_not_score:
  - "A Small Red Cube [[TOUCHING]] only the *side* of the Large Red Cube."
  - "A Small Red Cube hovering above without [[TOUCHING]]."
  - "Only one Small Red Cube up there, for the Bonus."
{{< /score-examples >}}
{{% callout title="Live Judged Is On Your Side Here" variant="gold" %}}
Robot support is permitted, and the cubes do not have to stay up there. Once the judge has seen it, it counts — even if it falls a second later.
{{% /callout %}}

{{% safety title="⚠ Check What Mission 2 Did to These Cubes" %}}
In Project 6 you pushed the Large Red Cube, its [[PALLET|pallet]], and both Small Red Cubes off the black line. Those are the same cubes you need here. Where they ended up decides how hard this is — so plan the two missions together, not separately.
{{% /safety %}}

{{< ask key="p3_m2_interaction" label="Mission 2 interaction" >}}Where do your red cubes end up after your Mission 2 push? Does that help or hurt you here?{{< /ask >}}

{{< checklist >}}
- key: p3_m5_base
  label: "One Small Red Cube is [[ON TOP OF]] the Large Red Cube"
- key: p3_m5_bonus
  label: "Both Small Red Cubes are up there at the same time"
{{< /checklist >}}
{{< ask key="p3_second_harder" label="Why second is harder" >}}The bonus needs both cubes up there *at the same time*. Why does that make the second one harder than the first?{{< /ask >}}

### Step 7 — Run it five times

{{< gridtable >}}
columns:
- head: Run
- head: "First cube on top?"
  aria: "R1 base"
- head: "Both at once?"
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
## Score It — Checkpoint

### My score

{{< gridtable >}}
columns:
- head: "Mission part"
- head: Scored?
  aria: "Score M5 base"
- head: Points
rows:
  - cells:
      - text: "Mission 5 — Base (one small red cube on top)"
      - key: p4_s_m5b
        aria: "Score M5 base"
      - text: 9
  - cells:
      - text: "Mission 5 — Bonus (both small red cubes on top)"
      - key: p4_s_m5bo
        aria: "Score M5 bonus"
      - text: 11
  - cells:
      - text: "My total"
      - key: p4_total
        aria: Total
      - text: 20
{{< /gridtable >}}
### Write the variable

Turn each comment into a proper variable declaration.

{{< gridtable >}}
columns:
- head: Comment
- head: Variable
  aria: "Write claw variable"
rows:
  - cells:
      - text: "`// claw = 3`"
      - key: p4_write_claw
        aria: "Write claw variable"
  - cells:
      - text: "`// open = 1246`"
      - key: p4_write_open
        aria: "Write open variable"
  - cells:
      - text: "`// left = 0`"
      - key: p4_write_left
        aria: "Write left variable"
{{< /gridtable >}}
### Read the code

Given `int arm = 0;` and `int down = 230;` — what does each line do?

{{< gridtable >}}
columns:
- head: Line
- head: "What it does"
  aria: "Read line 1"
rows:
  - cells:
      - text: "`set_servo_position(arm, down);`"
      - key: p4_read_1
        aria: "Read line 1"
  - cells:
      - text: "`down = down - 50;`"
      - key: p4_read_2
        aria: "Read line 2"
  - cells:
      - text: "`arm++;`"
      - key: p4_read_3
        aria: "Read line 3"
{{< /gridtable >}}
That last one is legal code that does something you almost certainly do not want. Say what it actually does.
{.muted}

### Can you do it again?

{{< checklist >}}
- key: p4_can_declare
  label: "I can declare a variable with `int`, a name, a value, and a semicolon"
- key: p4_can_place
  label: "I know variables go inside the block, at the top of `main`"
- key: p4_can_convert
  label: "I can turn a `// name = number` comment into a variable in three edits"
- key: p4_can_use
  label: "I use variable names inside `motor()` and `set_servo_position()` instead of bare numbers"
- key: p4_can_name
  label: "My variable names make sense to someone else on my team"
- key: p4_can_warning
  label: "I know what a yellow warning banner means and what usually causes it"
- key: p4_can_change
  label: "I can change a variable's value part-way through a program"
{{< /checklist >}}
### Think about it

{{< ask key="p4_what_improved" label="What improved" >}}Nothing your robot does changed in this project — it drives, grabs, and stacks exactly as it did before. So what actually got better?{{< /ask >}}

{{< ask key="p4_variables_vs_repetition" label="Variables vs repetition" >}}Variables fixed the problem of one number appearing in many places. But your program still has the six-step grab sequence typed out four separate times. Would variables fix that too? Why or why not?{{< /ask >}}

{{< ask key="p4_who_for" label="Who code is for" >}}Your teammate opens your program for the first time. Which version would they be able to work on — the one from Project 8, or this one? What does that tell you about who you are really writing code for?{{< /ask >}}

### Next

Your robot still cannot tell when it has arrived anywhere. It drives for a length of time and hopes.

In **Project 10 — Feeling for Things**, it gets its first sense: a switch that knows when it has touched something — and the loop that keeps checking.

KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026
