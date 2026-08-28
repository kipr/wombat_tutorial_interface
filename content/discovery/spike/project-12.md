---
title: "Coding Project 12 — Teaching Your Robot New Moves"
short_title: "Coding Project 12"
linkTitle: "Teaching Your Robot New Moves"
description: "Make your own blocks. The shelf, the define hat, and the call — plus inputs, and blocks that call your other blocks."
weight: 12
nav: "discovery"
mission_id: "discovery_spike_coding_12"
mission_title: "Discovery Project 12 (SPIKE) — Teaching Your Robot New Moves"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 12
strand: "coding"
platform: "spike"
phase: "Phase 4 · Make It Reliable"
phase_order: 4
time: "One class period"
eyebrow: "Discovery · SPIKE Coding Project 12"
heading: "Teaching Your Robot New Moves"
subheading: "Give a whole stack a name. Then just say the name."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Teaching Your Robot New Moves"
mission_label: "Mission 15 — base + bonus · 18 pts"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 12"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Make It Reliable"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Writing your own commands — drive, turn, grab — and calling them instead of retyping them. Then using one of them twice to double a score."
  - term: "Mission Anchor"
    definition: "[[@15:base|Mission 15]] — Hazard Disposal #2 (base + bonus) — 18 points"
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
        label: "Your measuring card from Project 11"
  - term: "Before You Start"
    definition: "Project 11 — your yaw-angle turn must already work, and your measuring card must be filled in."
---
## Try It --- Brain Dump

Without looking anything up, write down every block you know. Fill as many boxes as you can --- just the name of each is fine.

{{< gridtable >}}
columns:
- head: ""
- head: ""
- head: ""
rows:
  - class: trial
    cells:
      - key: p1_bd_1
        aria: "Block 1"
      - key: p1_bd_2
        aria: "Block 2"
      - key: p1_bd_3
        aria: "Block 3"
  - class: trial
    cells:
      - key: p1_bd_4
        aria: "Block 4"
      - key: p1_bd_5
        aria: "Block 5"
      - key: p1_bd_6
        aria: "Block 6"
  - class: trial
    cells:
      - key: p1_bd_7
        aria: "Block 7"
      - key: p1_bd_8
        aria: "Block 8"
      - key: p1_bd_9
        aria: "Block 9"
{{< /gridtable >}}

{{< ask key="p1_common" label="What blocks have in common" >}}Now compare with a partner, then look at your whole list at once. What do all of them have in common? Find at least two things.{{< /ask >}}

{{< callout title="You Should Have Found These" variant="gold" >}}
- Every one of them has a **name** that says what it does.
- Some need information --- the ovals and dropdowns you fill in. Some need nothing at all.
- Somebody *built* every one of them, decided what it needs, and put it on the shelf with a name.

**Today you join them.** The shelf has room for blocks of your own.
{{< /callout >}}

### Count your own repetition

Open your Project 11 program. Go through it and count.

{{< gridtable >}}
columns:
- head: "How many times did you build..."
- head: "Times"
- head: "Blocks each"
rows:
  - class: trial
    cells:
      - text: "The reset-spin-wait-stop turn"
      - key: p1_rep_turn
        aria: "Turn count"
      - key: p1_rep_turn_n
        aria: "Turn blocks"
  - class: trial
    cells:
      - text: "The six-step grab sequence"
      - key: p1_rep_grab
        aria: "Grab count"
      - key: p1_rep_grab_n
        aria: "Grab blocks"
  - class: trial
    cells:
      - text: "The safe-shape opener"
      - key: p1_rep_safe
        aria: "Safe count"
      - key: p1_rep_safe_n
        aria: "Safe blocks"
{{< /gridtable >}}

{{< short-answer key="p1_rep_total" label="Repetition total" prompt="Multiply those out. Roughly how much of your program is copies of something you already built?" >}}

## Learn It --- Three Parts, In This Order

Making your own block is like adding a word to the dictionary. You need the word listed, you need its meaning written down, and then you can use it in a sentence.

Open the **My Blocks** category and press **Make a Block**. Name it `turn right 90`. Two things appear at once:

| Code / part | What it means |
| --- | --- |
| 1 --- the block on the shelf | Your new block, sitting in My Blocks like it has always been there. This is the *word in the dictionary*. |
| 2 --- a "define" hat on the canvas | A hat block reading *define turn right 90*. What you snap under this hat is the *meaning of the word* --- what the robot actually does. |
| 3 --- the call | Drag your new block into your program wherever you would have built all those blocks. This is *using the word in a sentence*. |

### The whole thing, side by side

{{< wordblocks aria="Define turn right 90 with the turn stack under it" >}}
rows:
  - block:
      category: myblocks
      shape: hat
      parts:
        - text: "define "
        - slot:
            kind: value
            text: "turn right 90"
      note: "the meaning"
  - block:
      category: movement
      parts:
        - text: "set yaw angle to "
        - slot:
            kind: value
            text: "0"
  - block:
      category: movement
      parts:
        - text: "start moving "
        - slot:
            kind: steering
            value: "100"
  - block:
      category: control
      parts:
        - text: "wait until "
        - slot:
            kind: condition
            parts:
              - slot:
                  kind: variable
                  text: "yaw angle"
              - text: " > "
              - slot:
                  kind: value
                  text: "83"
  - block:
      category: movement
      parts:
        - text: "stop moving"
{{< /wordblocks >}}

{{< wordblocks aria="Main program calling turn right 90 twice" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
      note: "the sentence"
  - block:
      category: movement
      parts:
        - text: "move "
        - slot:
            kind: steering
            value: "0"
        - text: " for "
        - slot:
            kind: value
            text: "24"
        - slot:
            kind: dropdown
            text: "in."
  - block:
      category: myblocks
      parts:
        - text: "turn right 90"
  - block:
      category: movement
      parts:
        - text: "move "
        - slot:
            kind: steering
            value: "0"
        - text: " for "
        - slot:
            kind: value
            text: "24"
        - slot:
            kind: dropdown
            text: "in."
  - block:
      category: myblocks
      parts:
        - text: "turn right 90"
{{< /wordblocks >}}

Read the second stack out loud. It is not a pile of machinery any more --- it is a **list of what the robot does**.

{{< safety title="⚠ Two Hats, Two Different Jobs" >}}
The define hat's stack runs **only when your block is called** --- never on its own, and never when the program starts. The most common mistake in this project is snapping mission blocks under the define hat by accident, then wondering why the robot does them at the wrong moment --- or building the meaning under *when program starts* and wondering why the new block does nothing.

One canvas, several stacks, and every block belongs to exactly one hat. Check which hat before you snap.
{{< /safety >}}

### Naming rules

Make it obvious: `turn right 90`, not `thing2`. Say what it does, not how it works. Your teammate should be able to read your main stack top to bottom and narrate the run.

### Inputs --- one block, many distances

A `drive forward` block that always drives 24 inches is fine until you need 12.

When you make a block, **Add an input**. Name the input `inches`. Now your block has a white hole in it, and the number you type there gets handed to the meaning every time you call it --- a different number every call, if you like.

{{< wordblocks aria="define drive forward inches, and two calls with different values" >}}
rows:
  - block:
      category: myblocks
      shape: hat
      parts:
        - text: "define "
        - slot:
            kind: value
            text: "drive forward"
        - slot:
            kind: variable
            text: "inches"
  - block:
      category: movement
      parts:
        - text: "move "
        - slot:
            kind: steering
            value: "0"
        - text: " for "
        - slot:
            kind: variable
            text: "inches"
        - slot:
            kind: dropdown
            text: "in."
      note: "the input oval drops into the hole"
{{< /wordblocks >}}

{{< wordblocks aria="Calls: drive forward 24, drive forward 12" >}}
rows:
  - block:
      category: myblocks
      parts:
        - text: "drive forward "
        - slot:
            kind: value
            text: "24"
      note: "go 24"
  - block:
      category: myblocks
      parts:
        - text: "drive forward "
        - slot:
            kind: value
            text: "12"
      note: "go 12"
{{< /wordblocks >}}

The input oval lives on the define hat. Drag it off the hat into the blocks below --- that is how the meaning gets the number. Need two inputs? Add two. This is the same idea as the holes in *every block you have ever used*.
{.muted}

### A block can call another block

Once `drive forward` and `turn right 90` exist, a bigger block can just use them:

{{< wordblocks aria="define drive square using drive forward and turn right 90" >}}
rows:
  - block:
      category: myblocks
      shape: hat
      parts:
        - text: "define "
        - slot:
            kind: value
            text: "drive square"
  - control:
      category: control
      head:
        - text: "repeat "
        - slot:
            kind: value
            text: "4"
      body:
        - block:
            category: myblocks
            parts:
              - text: "drive forward "
              - slot:
                  kind: value
                  text: "24"
        - block:
            category: myblocks
            parts:
              - text: "turn right 90"
{{< /wordblocks >}}

Blocks made of blocks made of blocks. That is not a trick --- it is how every real program you have ever used is built.

## Do It --- Build Your Own Commands

### Step 1 --- My first block

New project called `Moves`, with your usual [[VARIABLE|variable]]s at the top. Make a block called `turn right 90`, and snap your working Project 11 turn under its define hat --- your corrected hexagon number and all.

Call it twice in a row from *when program starts*. The robot should end up facing backwards.

{{< checklist >}}
- key: p3_first_block
  label: "Two calls, and the robot faces exactly backwards"
{{< /checklist >}}

### Step 2 --- Break it on purpose

Drag one *turn right 90* call out of the main stack and drop it loose on the canvas. Run.

{{< ask key="p3_loose_call" label="Loose call result" >}}What happened, and why? (Think about which hat the loose block belongs to: none.){{< /ask >}}

Now snap a *play beep* block under the **define** hat, at the bottom of the meaning, and run the program again.

{{< ask key="p3_beep_when" label="When the beep ran" >}}When did the beep happen --- and what does that tell you about when a define stack runs?{{< /ask >}}

Put everything back.

### Step 3 --- Add an input

Make `drive forward` with an `inches` input, exactly as in Learn It. Call it with 24, then 12, then 6 --- one program, three different distances, one define.

{{< checklist >}}
- key: p3_input_works
  label: "One block drives three different distances depending on the number I hand it"
{{< /checklist >}}

### Step 4 --- The square --- one more time

Make `drive square`, built from your two new blocks and a repeat 4, exactly as in Learn It. Run it.

{{< short-answer key="p3_square_count" label="Block count difference" prompt="Count the blocks in your main stack now, versus the square you built in Project 11. What is the difference?" >}}

{{< checklist >}}
- key: p3_square_block
  label: "My square is one call in the main stack, and it still closes"
{{< /checklist >}}

### Step 5 --- Wrap the grab

The big one. Make a block called `grab` and put the whole six-step sequence from Project 8 inside its define --- arm down, close, arm up, with its waits.

Then make `drop off` for the release rules --- arm down, open, pause, back straight away.

{{< short-answer key="p3_grab_edits" label="Grab edit count" prompt="Your grab uses the claw-closed variable inside the define. If the claw changes tomorrow, how many places do you edit now --- counting both the variable and the block?" >}}

{{< checklist >}}
- key: p3_grab_block
  label: "My robot grabs and releases using my own two blocks"
{{< /checklist >}}

### Step 6 --- Mission 15 --- one blue pom9 pts

{{< mission-summary mission="15" video=true >}}
{{< /mission-summary >}}

{{< callout title="⚠ Not the Basket You Used in Project 8" >}}
Mission 11 (orange poms) and Mission 15 (blue poms) **must use different baskets.** In Project 8 you wrote down which basket you were saving for this. Use that one.
{{< /callout >}}

Build the run out of the functions you just wrote. Your whole `main` should read like a list of instructions, not a wall of code.

{{< checklist >}}
- key: p3_m15_base
  label: "One blue pom is IN a basket and stays there"
{{< /checklist >}}

### Step 7 --- Mission 15 Bonus --- do it again9 pts

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

### Step 8 --- Run it five times

{{< gridtable >}}
columns:
- head: "Run"
- head: "One pom in?"
- head: "Two in the same basket?"
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
      - text: "Mission 15 --- Base (one blue pom in a basket)"
      - key: p4_s_m15b
        aria: "Score M15 base"
      - text: "9"
  - cells:
      - text: "Mission 15 --- Bonus (two in the same basket)"
      - key: p4_s_m15bo
        aria: "Score M15 bonus"
      - text: "9"
  - class: total
    cells:
      - text: "My total"
      - key: p4_total
        aria: "Total"
      - text: "18"
{{< /gridtable >}}

### My block list

Write down every block you built. This list is the start of something you will finish in Project 16.

{{< gridtable >}}
columns:
- head: "Block name"
- head: "Inputs"
- head: "What it does"
rows:
  - class: trial
    cells:
      - key: p4_fn1
        aria: "Block 1 name"
      - key: p4_fn1_a
        aria: "Block 1 inputs"
      - key: p4_fn1_d
        aria: "Block 1 does"
  - class: trial
    cells:
      - key: p4_fn2
        aria: "Block 2 name"
      - key: p4_fn2_a
        aria: "Block 2 inputs"
      - key: p4_fn2_d
        aria: "Block 2 does"
  - class: trial
    cells:
      - key: p4_fn3
        aria: "Block 3 name"
      - key: p4_fn3_a
        aria: "Block 3 inputs"
      - key: p4_fn3_d
        aria: "Block 3 does"
  - class: trial
    cells:
      - key: p4_fn4
        aria: "Block 4 name"
      - key: p4_fn4_a
        aria: "Block 4 inputs"
      - key: p4_fn4_d
        aria: "Block 4 does"
{{< /gridtable >}}

### Where does each part go?

{{< gridtable >}}
columns:
- head: "Part"
- head: "Where it lives"
rows:
  - class: trial
    cells:
      - text: "The block itself"
      - key: p4_where_1
        aria: "Where block"
  - class: trial
    cells:
      - text: "The meaning"
      - key: p4_where_2
        aria: "Where meaning"
  - class: trial
    cells:
      - text: "The call"
      - key: p4_where_3
        aria: "Where call"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_three
  label: "I can name the three parts of my own block and say where each one lives"
- key: p4_can_hats
  label: "I know a define stack runs only when called --- and I check which hat before I snap"
- key: p4_can_name
  label: "I can name a block so a teammate knows what it does without opening it"
- key: p4_can_input
  label: "I can make a block with an input and call it with different values"
- key: p4_can_nested
  label: "I can make a block that calls my other blocks"
- key: p4_can_reads
  label: "My main stack reads like a list of what the robot does"
{{< /checklist >}}

### Think about it

{{< ask key="p4_edit_places" label="Edit places" >}}Your robot's 90° turn is a few degrees off. With your own blocks, how many places do you edit? Without them, how many?{{< /ask >}}

{{< ask key="p4_same_idea" label="Same idea" >}}In Project 9 you gave names to numbers. Here you gave names to actions. What is the same about those two ideas?{{< /ask >}}

{{< ask key="p4_black_box" label="Black box question" >}}A new teammate joins and opens your program. They see a block called `fetch pom` and have no idea how the inside works. Is that a problem?{{< /ask >}}

### Next

Your robot follows the same plan every time, no matter what it finds. If a cube is not where you expected, it grabs at nothing and carries on regardless.

In **Project 13 --- Deciding What to Do**, it stops following orders blindly and starts choosing.
