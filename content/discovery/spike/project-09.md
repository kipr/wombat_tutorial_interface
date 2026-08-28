---
title: "Coding Project 9 — Names for Your Numbers"
short_title: "Coding Project 9"
linkTitle: "Names for Your Numbers"
description: "Make variables, set them at the top, and drop the orange ovals into your blocks. Change a number once instead of everywhere — then stack for twenty points."
weight: 9
nav: "discovery"
mission_id: "discovery_spike_coding_09"
mission_title: "Discovery Project 9 (SPIKE) — Names for Your Numbers"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 9
strand: "coding"
platform: "spike"
phase: "Phase 4 · Make It Reliable"
phase_order: 4
time: "One class period"
eyebrow: "Discovery · SPIKE Coding Project 9"
heading: "Names for Your Numbers"
subheading: "Your comments become real code. Change a number once, and the whole program changes with it."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Names for Your Numbers"
mission_label: "Mission 5 — base + bonus · 20 pts"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 9"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Make It Reliable"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Turning the numbers scattered through your programs into named [[VARIABLE|variable]]s, then using that cleaner code to stack the red cubes."
  - term: "Mission Anchor"
    definition: "[[@5:base|Mission 5]] — Top Shelf Delivery (base + bonus) — 20 points"
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your robot with arm and claw"
      - key: need_2
        label: "Tablet or Chromebook with the SPIKE App"
      - key: need_3
        label: "Charged hub"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "Your Project 8 program and motor card"
  - term: "Before You Start"
    definition: "Project 8 — you need a working grab sequence and all seven numbers on your motor card."
---
## Try It --- Count the Damage

Open your Project 8 program --- the big one with all four missions in it. Scroll through it slowly.

How many blocks contain each of these as a bare number?

{{< gridtable >}}
columns:
- head: ""
- head: "Count"
rows:
  - class: trial
    cells:
      - text: "My arm's \"up\" position"
      - key: p1_count_up
        aria: "Count up"
  - class: trial
    cells:
      - text: "My arm's \"down\" position"
      - key: p1_count_down
        aria: "Count down"
  - class: trial
    cells:
      - text: "My claw's \"open\" position"
      - key: p1_count_open
        aria: "Count open"
  - class: trial
    cells:
      - text: "My claw's \"closed on a cube\" position"
      - key: p1_count_closed
        aria: "Count closed"
  - class: trial
    cells:
      - text: "My arm speed"
      - key: p1_count_speed
        aria: "Count speed"
{{< /gridtable >}}

### Now break it

{{< safety title="⚠ Your Teammate Rebuilt the Claw Last Night" >}}
It grips better now. But the closed position is different --- it is **30 lower** than it was.

Find every block that number lives in and change it. **Time yourself.**
{{< /safety >}}

{{< gridtable >}}
columns:
- head: "Question"
- head: "Answer"
rows:
  - class: trial
    cells:
      - text: "How long did it take?"
      - key: p1_fix_time
        aria: "Fix time"
  - class: trial
    cells:
      - text: "How many blocks did you have to edit?"
      - key: p1_fix_count
        aria: "Fix count"
  - class: trial
    cells:
      - text: "Are you certain you got them all?"
      - key: p1_fix_sure
        aria: "Fix certainty"
{{< /gridtable >}}

{{< ask key="p1_missed_one" label="What if one was missed" >}}That last question is the real problem. If you missed one, what would happen --- and how would you find out?{{< /ask >}}

{{< callout title="This Gets Worse, Not Better" >}}
Your program is going to keep growing. By the time you are running a full match, that number could be in twenty blocks. There is a fix, it takes one block, and you are about to learn it.
{{< /callout >}}

## Learn It --- Give the Number a Name

A [[VARIABLE|variable]] is a **name that holds a value**. You set it once at the top of your program, then use the name everywhere instead of the number.

### Making one

Open the orange **Variables** category and press **Make a Variable**. Name it `arm up`. Two new things appear:

| Code / part | What it means |
| --- | --- |
| a round orange oval | The variable itself. This oval *is* the name --- and it fits into any white number hole in any block. |
| a "set ... to" block | Gives the name its value. |

{{< wordblocks aria="Word block: set arm up to 130" >}}
rows:
  - block:
      category: variables
      parts:
        - text: "set "
        - slot:
            kind: dropdown
            text: "arm up"
        - text: " to "
        - slot:
            kind: value
            text: "130"
{{< /wordblocks >}}

### Where variables go

The set blocks go **at the very top of the stack** --- right under the hat, above everything else. Not scattered through the middle of your program. One place, all together, where anyone can find them.

### From card to code

You have been writing your positions on your Robot Card in **name = number** form since Project 7. There was a reason for that. Each line on the card becomes one variable and one set block:

| Code / part | What it means |
| --- | --- |
| card: up = 130 | Make a Variable named `arm up`  →  *set arm up to 130* at the top of the stack. |
| card: closed = 55 | Make a Variable named `claw closed`  →  *set claw closed to 55*. |

### Then use the names

Here is the part that feels like magic the first time: **drag the orange oval and drop it into the white number hole** of any block.

{{< wordblocks aria="Before: run C to position 55. After: run C to position claw closed" >}}
rows:
  - block:
      category: motors
      parts:
        - text: "run "
        - slot:
            kind: dropdown
            text: "C"
        - slot:
            kind: dropdown
            text: "shortest path"
        - text: " to position "
        - slot:
            kind: value
            text: "55"
        - text: " degrees"
      note: "before --- a bare number"
  - block:
      category: motors
      parts:
        - text: "run "
        - slot:
            kind: dropdown
            text: "C"
        - slot:
            kind: dropdown
            text: "shortest path"
        - text: " to position "
        - slot:
            kind: variable
            text: "claw closed"
        - text: " degrees"
      note: "after --- the name"
{{< /wordblocks >}}

Read both versions out loud. One is a list of numbers. The other tells you what the robot is doing.

{{< callout title="Five Reasons This Is Worth the Trouble" variant="gold" >}}
- You do not have to remember which number is up, down, open, or closed --- the program remembers for you.
- Your program is easier to read.
- Your program is easier to debug.
- Anyone on your team can work on it.
- If a position changes, **you change one set block.**
{{< /callout >}}

### Name things properly

Make it obvious: `arm up`, not `thing2`. A name nobody can decode is barely better than a bare number.

{{< callout title="The Leftover-Oval Check" >}}
The Variables shelf lists every variable you have made. A variable sitting on the shelf that never got dropped into a single block usually means one thing: **somewhere in your stack, a bare number is still hiding.** When you finish converting a program, read it top to bottom hunting for naked numbers.
{{< /callout >}}

### Variables can change

Most of your variables hold one value forever --- up is always up. But a variable is called a *variable* because it can vary. Two ways to change one:

{{< wordblocks aria="set position to 90, change position by 10" >}}
rows:
  - block:
      category: variables
      parts:
        - text: "set "
        - slot:
            kind: dropdown
            text: "position"
        - text: " to "
        - slot:
            kind: value
            text: "90"
  - block:
      category: variables
      parts:
        - text: "change "
        - slot:
            kind: dropdown
            text: "position"
        - text: " by "
        - slot:
            kind: value
            text: "10"
      note: "now 100"
  - block:
      category: variables
      parts:
        - text: "change "
        - slot:
            kind: dropdown
            text: "position"
        - text: " by "
        - slot:
            kind: value
            text: "-10"
      note: "back to 90"
{{< /wordblocks >}}

*Change by* is the shorthand for "take what it holds and add this." You will meet the real use for it in Project 10, once you have a loop to put it in.
{.muted}

## Do It --- Clean It Up, Then Score

### Step 1 --- Convert one small program first

Open your `Arm` Wave program from Project 7. Make variables for the three positions, set them at the top, then drop the ovals into the position blocks in place of the numbers.

Run it. It should behave *exactly* as before.

{{< checklist >}}
- key: p3_wave_same
  label: "Wave runs the same with variables as it did with numbers"
{{< /checklist >}}

If it behaves differently, you swapped two values. That is the most common mistake here.
{.muted}

### Step 2 --- Do the leftover-oval check on purpose

Make a variable called `not used` and never drop it into anything. Now look at your Variables shelf.

{{< short-answer key="p3_notused_spot" label="Spotting an unused variable" prompt="How would you spot, a week from now, that this variable never made it into the program?" >}}

Delete it, so the shelf only lists names that are really in use.

### Step 3 --- Convert your big Project 8 program

This is the real job. Make all your variables, set them at the top, then work down the stack replacing bare numbers with ovals.

{{< gridtable >}}
columns:
- head: "Variable"
- head: "My value"
- head: "Done?"
rows:
  - class: trial
    cells:
      - text: "arm up"
      - key: p3_v_up
        aria: "Value up"
      - key: p3_d_up
        aria: "Done up"
  - class: trial
    cells:
      - text: "arm horizontal"
      - key: p3_v_horiz
        aria: "Value horizontal"
      - key: p3_d_horiz
        aria: "Done horizontal"
  - class: trial
    cells:
      - text: "arm down"
      - key: p3_v_down
        aria: "Value down"
      - key: p3_d_down
        aria: "Done down"
  - class: trial
    cells:
      - text: "claw open"
      - key: p3_v_open
        aria: "Value open"
      - key: p3_d_open
        aria: "Done open"
  - class: trial
    cells:
      - text: "claw closed"
      - key: p3_v_closed
        aria: "Value closed"
      - key: p3_d_closed
        aria: "Done closed"
  - class: trial
    cells:
      - text: "arm speed"
      - key: p3_v_speed
        aria: "Value speed"
      - key: p3_d_speed
        aria: "Done speed"
{{< /gridtable >}}

{{< callout title="Convert One Mission Section at a Time" variant="gold" >}}
Same rule as building it in the first place. Convert one section, run it, then move on. Converting all four at once and finding it broken tells you nothing about where.
{{< /callout >}}

{{< checklist >}}
- key: p3_big_converted
  label: "My whole Project 8 program uses variables and still scores the same"
{{< /checklist >}}

### Step 4 --- Now do the claw change again

Same problem as Try It. Your claw's closed position drops by 30. Change it.

{{< gridtable >}}
columns:
- head: "Question"
- head: "Answer"
rows:
  - class: trial
    cells:
      - text: "How long did it take this time?"
      - key: p3_fix2_time
        aria: "Second fix time"
  - class: trial
    cells:
      - text: "How many places did you edit?"
      - key: p3_fix2_count
        aria: "Second fix count"
{{< /gridtable >}}

Compare those two numbers with the ones you wrote in Try It.
{.muted}

### Step 5 --- Try changing a variable while the program runs

Small experiment. Build this and watch the arm.

{{< wordblocks aria="Set position 90, move, change by 30, move, change by 30, move" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
  - block:
      category: variables
      parts:
        - text: "set "
        - slot:
            kind: dropdown
            text: "position"
        - text: " to "
        - slot:
            kind: value
            text: "90"
  - block:
      category: motors
      parts:
        - text: "run "
        - slot:
            kind: dropdown
            text: "C"
        - slot:
            kind: dropdown
            text: "shortest path"
        - text: " to position "
        - slot:
            kind: variable
            text: "position"
        - text: " degrees"
  - block:
      category: control
      parts:
        - text: "wait "
        - slot:
            kind: value
            text: "0.5"
        - text: " seconds"
  - block:
      category: variables
      parts:
        - text: "change "
        - slot:
            kind: dropdown
            text: "position"
        - text: " by "
        - slot:
            kind: value
            text: "30"
  - block:
      category: motors
      parts:
        - text: "run "
        - slot:
            kind: dropdown
            text: "C"
        - slot:
            kind: dropdown
            text: "shortest path"
        - text: " to position "
        - slot:
            kind: variable
            text: "position"
        - text: " degrees"
  - block:
      category: control
      parts:
        - text: "wait "
        - slot:
            kind: value
            text: "0.5"
        - text: " seconds"
  - block:
      category: variables
      parts:
        - text: "change "
        - slot:
            kind: dropdown
            text: "position"
        - text: " by "
        - slot:
            kind: value
            text: "30"
  - block:
      category: motors
      parts:
        - text: "run "
        - slot:
            kind: dropdown
            text: "C"
        - slot:
            kind: dropdown
            text: "shortest path"
        - text: " to position "
        - slot:
            kind: variable
            text: "position"
        - text: " degrees"
{{< /wordblocks >}}

{{< ask key="p3_thirty_hops" label="Thirty hops" >}}The arm moved in three hops instead of one jump. What would you have to do to make it move in *thirty* small hops?{{< /ask >}}

Hold that thought. Project 10 gives you the tool that makes it three blocks instead of thirty.
{.muted}

### Step 6 --- Mission 5 --- Top Shelf Delivery20 pts

{{< mission-summary mission="5" video=true >}}
{{< /mission-summary >}}

This one asks your arm to reach higher than anything so far. The large red cube is the platform; the small ones go [[ON TOP OF|ON TOP OF]] it.

{{< score-examples >}}
scores:
- "One Small Red Cube is ON TOP OF the Large Red Cube."
- "A Small Red Cube touches the upper surface while supported by a robot."
- "A Small Red Cube is ON TOP OF, and later falls off."
- "Both Small Red Cubes are ON TOP OF at the same time."
does_not_score:
- "A Small Red Cube [[TOUCHING|TOUCHING]] only the *side* of the Large Red Cube."
- "A Small Red Cube hovering above without [[TOUCHING|TOUCHING]]."
- "Only one Small Red Cube up there, for the Bonus."
{{< /score-examples >}}

{{< callout title="Live Judged Is On Your Side Here" variant="gold" >}}
Robot support is permitted, and the cubes do not have to stay up there. Once the judge has seen it, it counts --- even if it falls a second later.
{{< /callout >}}

{{< safety title="⚠ Check What Mission 2 Did to These Cubes" >}}
In Project 6 you pushed the Large Red Cube, its [[PALLET|pallet]], and both Small Red Cubes off the black line. Those are the same cubes you need here. Where they ended up decides how hard this is --- so plan the two missions together, not separately.
{{< /safety >}}

{{< ask key="p3_m2_interaction" label="Mission 2 interaction" >}}Where do your red cubes end up after your Mission 2 push? Does that help or hurt you here?{{< /ask >}}

{{< checklist >}}
- key: p3_m5_base
  label: "One Small Red Cube is ON TOP OF the Large Red Cube"
- key: p3_m5_bonus
  label: "Both Small Red Cubes are up there at the same time"
{{< /checklist >}}

{{< ask key="p3_second_harder" label="Why second is harder" >}}The bonus needs both cubes up there *at the same time*. Why does that make the second one harder than the first?{{< /ask >}}

### Step 7 --- Run it five times

{{< gridtable >}}
columns:
- head: "Run"
- head: "First cube on top?"
- head: "Both at once?"
- head: "Points"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_r1_base
        aria: "R1 base"
      - key: p3_r1_bonus
        aria: "R1 bonus"
      - key: p3_r1_pts
        aria: "R1 points"
  - class: trial
    cells:
      - text: "2"
      - key: p3_r2_base
        aria: "R2 base"
      - key: p3_r2_bonus
        aria: "R2 bonus"
      - key: p3_r2_pts
        aria: "R2 points"
  - class: trial
    cells:
      - text: "3"
      - key: p3_r3_base
        aria: "R3 base"
      - key: p3_r3_bonus
        aria: "R3 bonus"
      - key: p3_r3_pts
        aria: "R3 points"
  - class: trial
    cells:
      - text: "4"
      - key: p3_r4_base
        aria: "R4 base"
      - key: p3_r4_bonus
        aria: "R4 bonus"
      - key: p3_r4_pts
        aria: "R4 points"
  - class: trial
    cells:
      - text: "5"
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
- head: "Scored?"
- head: "Points"
rows:
  - cells:
      - text: "Mission 5 --- Base (one small red cube on top)"
      - key: p4_s_m5b
        aria: "Score M5 base"
      - text: "9"
  - cells:
      - text: "Mission 5 --- Bonus (both small red cubes on top)"
      - key: p4_s_m5bo
        aria: "Score M5 bonus"
      - text: "11"
  - class: total
    cells:
      - text: "My total"
      - key: p4_total
        aria: "Total"
      - text: "20"
{{< /gridtable >}}

### Make the variable

For each card line, say what you would do in the app.

{{< gridtable >}}
columns:
- head: "Card line"
- head: "In the app I would..."
rows:
  - class: trial
    cells:
      - text: "open = 145"
      - key: p4_mk_open
        aria: "Make open"
  - class: trial
    cells:
      - text: "down = 40"
      - key: p4_mk_down
        aria: "Make down"
  - class: trial
    cells:
      - text: "arm speed = 20"
      - key: p4_mk_speed
        aria: "Make speed"
{{< /gridtable >}}

### Read the blocks

Given *set arm down to 40* at the top of a stack --- what does each of these do?

{{< gridtable >}}
columns:
- head: "Block"
- head: "What it does"
rows:
  - class: trial
    cells:
      - text: "run C to position (arm down) degrees"
      - key: p4_read_1
        aria: "Read one"
  - class: trial
    cells:
      - text: "change (arm down) by -50"
      - key: p4_read_2
        aria: "Read two"
  - class: trial
    cells:
      - text: "set (arm down) to (arm up)"
      - key: p4_read_3
        aria: "Read three"
{{< /gridtable >}}

{{< ask key="p4_read_trap" label="Read trap" >}}That last one is a legal block that does something you almost certainly do not want. Say what it actually does.{{< /ask >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_make
  label: "I can make a [[VARIABLE|variable]], name it well, and set its value"
- key: p4_can_top
  label: "My set blocks live at the top of the stack, right under the hat"
- key: p4_can_card
  label: "I can turn a *name = number* card line into a variable and a set block"
- key: p4_can_drop
  label: "I drop variable ovals into blocks instead of typing bare numbers"
- key: p4_can_names
  label: "My variable names make sense to someone else on my team"
- key: p4_can_leftover
  label: "I do the leftover-oval check when I finish converting a program"
- key: p4_can_change
  label: "I can change a variable's value part-way through a program"
{{< /checklist >}}

### Think about it

{{< ask key="p4_what_better" label="What got better" >}}Nothing your robot does changed in this project --- it drives, grabs, and stacks exactly as it did before. So what actually got better?{{< /ask >}}

{{< ask key="p4_vars_enough" label="Would variables fix repetition" >}}Variables fixed the problem of one number appearing in many places. But your program still has the six-step grab sequence built out four separate times. Would variables fix that too? Why or why not?{{< /ask >}}

{{< ask key="p4_who_for" label="Who code is for" >}}Your teammate opens your program for the first time. Which version could they work on --- the one from Project 8, or this one? What does that tell you about who you are really writing programs for?{{< /ask >}}

### Next

Your robot still cannot tell when it has arrived anywhere. It drives for a length of time and hopes.

In **Project 10 --- Feeling for Things**, it gets its first sense: a switch that knows when it has touched something --- and the loop that keeps checking.
