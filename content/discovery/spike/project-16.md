---
title: "Coding Project 16 — Building Your Toolbox"
short_title: "Coding Project 16"
linkTitle: "Building Your Toolbox"
description: "One master Toolbox project every mission starts from. Best blocks in, improvements to the master first, and a backup nobody touches."
weight: 16
nav: "discovery"
mission_id: "discovery_spike_coding_16"
mission_title: "Discovery Project 16 (SPIKE) — Building Your Toolbox"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 16
strand: "coding"
platform: "spike"
phase: "Phase 6 · Clean It Up"
phase_order: 6
time: "One class period"
eyebrow: "Discovery · SPIKE Coding Project 16"
heading: "Building Your Toolbox"
subheading: "Write it once. Use it in every project you ever make."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Building Your Toolbox"
mission_label: "No field mission — refactor"
no_mission: true
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 16"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Clean It Up"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Gathering your best blocks and variables into one master Toolbox project that every new mission starts from."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Tablet or Chromebook with the SPIKE App"
      - key: need_2
        label: "Your robot, for testing"
      - key: need_3
        label: "Every project you have built since Project 12"
  - term: "Before You Start"
    definition: "Project 12 onward — you need a set of working My Blocks worth keeping."
---
## Try It --- How Many Copies Do You Have?

Open your projects from 12 onwards, one at a time, and count.

{{< gridtable >}}
columns:
- head: "Project"
- head: "Has a drive block?"
- head: "Has a turn block?"
rows:
  - class: trial
    cells:
      - text: "12 --- Teaching Your Robot New Moves"
      - key: p1_c12_d
        aria: "P12 drive"
      - key: p1_c12_t
        aria: "P12 turn"
  - class: trial
    cells:
      - text: "13 --- Deciding What to Do"
      - key: p1_c13_d
        aria: "P13 drive"
      - key: p1_c13_t
        aria: "P13 turn"
  - class: trial
    cells:
      - text: "14 --- Seeing Light and Dark"
      - key: p1_c14_d
        aria: "P14 drive"
      - key: p1_c14_t
        aria: "P14 turn"
  - class: trial
    cells:
      - text: "15 --- Following the Line"
      - key: p1_c15_d
        aria: "P15 drive"
      - key: p1_c15_t
        aria: "P15 turn"
{{< /gridtable >}}

### Now find out whether they match

Open the *define turn right 90* stacks from two different projects side by side and compare them block for block.

{{< short-answer key="p1_identical" label="Identical" prompt="Are they identical?" >}}

{{< ask key="p1_best_where" label="Best version where" >}}Somewhere along the way you improved one of these --- a better overshoot number, a cleaner stop. Which project has your **best** version, and do the others have it?{{< /ask >}}

{{< safety title="⚠ Your Good Work Is Trapped" >}}
Project 12 fixed the problem of building the same thing twice *inside one program*. It did nothing about building it again in the *next* program.

Right now every improvement you make lives in exactly one project, and the others quietly keep the old broken version.
{{< /safety >}}

{{< ask key="p1_four_people" label="Four people" >}}Your team has four people, each working on a different mission in a different project. One of them finds a much better turn. How does that reach everyone else?{{< /ask >}}

## Learn It --- One Master Project

A [[LIBRARY|library]] is a collection of ready-made pieces that any program can use. You have been using one since Project 1: **the block shelf itself**. Every block on it is somebody's finished, tested, named work, handed to you so you never build it again.

### Two shelves

| Code / part | What it means |
| --- | --- |
| the shelf that came with the app | Movement, Motors, Sensors, Control... You cannot change these --- they belong to everyone. |
| My Blocks | The shelf *you* fill. Since Project 12, everything you put here is your own library --- but it is trapped inside whichever project you built it in. |

### The Toolbox project

Here is the fix, and it is a habit more than a feature. You build **one master project** --- call it `Team Toolbox v1` --- that contains:

| Code / part | What it means |
| --- | --- |
| under the hat | All your *set* blocks --- every variable on your cards: positions, speeds, threshold, degrees-per-inch --- and nothing else. |
| beside it on the canvas | Every define stack you own: drive forward, turn right 90, turn left 90, grab, drop off, follow the line... |
| and no mission blocks | The Toolbox never drives a mission. It is the workshop, not the match. |

Then the rule that makes it work: **every new mission starts by duplicating the Toolbox** in your project list, renaming the copy, and building the mission in the copy. Open a fresh duplicate and everything is already there --- variables set, blocks on the shelf, waiting.

{{< callout title="Improvements Go to the Master First" variant="gold" >}}
Find a better overshoot number? A cleaner drop-off? **Fix it in the Toolbox**, then in whatever mission copy you are working in. Every duplicate you make from that day on carries the fix.
{{< /callout >}}

{{< safety title="⚠ Copies Do Not Update Themselves" >}}
Be honest about the limit: a mission project you duplicated *last week* still has last week's blocks. Duplicating spreads your best work **forward**, not backward. Old copies have to be fixed by hand --- which is exactly why the master must always hold the best version, and why the team has to know it.
{{< /safety >}}

### Name it like you mean it

One master, clearly named, and a version number that moves: `Team Toolbox v1`, `v2`, `v3`. Mission copies get mission names: `M8 Dock Run`, not `Team Toolbox v2 copy copy`. Five minutes of naming saves an hour of "wait, which one is real?"

## Do It --- Build the Toolbox

### Step 1 --- Gather your best

For each block, decide which project holds your best version --- the one with the corrected numbers and the clean endings. Write it down before you copy anything.

{{< gridtable >}}
columns:
- head: "Block"
- head: "Best version lives in..."
- head: "Why it is the best"
rows:
  - class: trial
    cells:
      - text: "drive forward (inches)"
      - key: p3_b_drive
        aria: "Best drive"
      - key: p3_b_drive_w
        aria: "Best drive why"
  - class: trial
    cells:
      - text: "turn right 90 / turn left 90"
      - key: p3_b_turn
        aria: "Best turn"
      - key: p3_b_turn_w
        aria: "Best turn why"
  - class: trial
    cells:
      - text: "grab / drop off"
      - key: p3_b_grab
        aria: "Best grab"
      - key: p3_b_grab_w
        aria: "Best grab why"
  - class: trial
    cells:
      - text: "line follow"
      - key: p3_b_line
        aria: "Best line"
      - key: p3_b_line_w
        aria: "Best line why"
{{< /gridtable >}}

### Step 2 --- Build Team Toolbox v1

New project called `Team Toolbox v1`. Under *when program starts*: every set block from your cards --- motor card, measuring card, sensor card. Then rebuild each define stack, best version, on the canvas beside it.

Finish the hat's stack with a single beep, so running the Toolbox proves it is alive without moving the robot.

{{< checklist >}}
- key: p3_tb_vars
  label: "Every variable from my cards is set under the hat"
- key: p3_tb_defs
  label: "Every define stack is in, best version, and nothing mission-shaped anywhere"
- key: p3_tb_runs
  label: "Running it beeps and does nothing else"
{{< /checklist >}}

### Step 3 --- Duplicate and build from it

In the project list, duplicate the Toolbox. Rename the copy `Toolbox Test`. Open it --- your whole shelf is waiting. Snap a tiny mission onto the hat: drive forward 12, turn right 90, grab.

{{< short-answer key="p3_dup_time" label="Duplicate time" prompt="How long did it take to start this \"new project,\" compared with building those blocks from scratch?" >}}

{{< checklist >}}
- key: p3_dup_works
  label: "A duplicated Toolbox runs a mission using my blocks, with nothing rebuilt"
{{< /checklist >}}

### Step 4 --- Fix it once, watch it spread forward

Change your turn overshoot number in the **master** Toolbox --- even by 1, just to trace it. Duplicate again into `Toolbox Test 2` and check the number arrived.

Now open your old `Toolbox Test` and look at the same number.

{{< ask key="p3_spread_rule" label="Spread rule" >}}Which copies got the fix, and which did not? Say the rule this proves.{{< /ask >}}

### Step 5 --- Write the instructions

On paper or in your team notes, write the three team rules: where new missions come from, where improvements go first, and what the master is never used for. Hand them to a teammate and have them start a new mission using only what you wrote.

{{< checklist >}}
- key: p3_teammate_test
  label: "A teammate started a mission from the Toolbox using only my instructions"
{{< /checklist >}}

### Step 6 --- Back it up

Duplicate the master one more time and name it `Toolbox v1 BACKUP`. Never open it. If the master ever gets wrecked --- a mission built into it by accident, a define deleted --- the backup is your way home.

{{< checklist >}}
- key: p3_backup
  label: "A backup copy exists and the team knows not to touch it"
{{< /checklist >}}

## Score It --- Checkpoint

No mission points this time. What you built is the thing that makes every future run faster to write.

### My toolbox

{{< gridtable >}}
columns:
- head: "Block in the Toolbox"
- head: "Inputs"
- head: "What it does"
rows:
  - class: trial
    cells:
      - key: p4_tb1
        aria: "TB 1"
      - key: p4_tb1_a
        aria: "TB 1 in"
      - key: p4_tb1_d
        aria: "TB 1 does"
  - class: trial
    cells:
      - key: p4_tb2
        aria: "TB 2"
      - key: p4_tb2_a
        aria: "TB 2 in"
      - key: p4_tb2_d
        aria: "TB 2 does"
  - class: trial
    cells:
      - key: p4_tb3
        aria: "TB 3"
      - key: p4_tb3_a
        aria: "TB 3 in"
      - key: p4_tb3_d
        aria: "TB 3 does"
  - class: trial
    cells:
      - key: p4_tb4
        aria: "TB 4"
      - key: p4_tb4_a
        aria: "TB 4 in"
      - key: p4_tb4_d
        aria: "TB 4 does"
  - class: trial
    cells:
      - key: p4_tb5
        aria: "TB 5"
      - key: p4_tb5_a
        aria: "TB 5 in"
      - key: p4_tb5_d
        aria: "TB 5 does"
{{< /gridtable >}}

### Which project?

{{< gridtable >}}
columns:
- head: "Where does it happen?"
- head: "Project"
rows:
  - class: trial
    cells:
      - text: "An improvement to the turn block goes here first"
      - key: p4_wp_1
        aria: "WP 1"
  - class: trial
    cells:
      - text: "Mission blocks get built here"
      - key: p4_wp_2
        aria: "WP 2"
  - class: trial
    cells:
      - text: "This one is never opened at all"
      - key: p4_wp_3
        aria: "WP 3"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_two
  label: "I can explain the two shelves --- the one that came with the app, and the one I fill"
- key: p4_can_master
  label: "My team has one master Toolbox, clearly named, with a version number"
- key: p4_can_dup
  label: "Every new mission starts as a duplicate of the Toolbox"
- key: p4_can_first
  label: "Improvements go to the master first, and I know why old copies do not get them"
- key: p4_can_backup
  label: "A backup exists and nobody builds missions in the master"
- key: p4_can_teach
  label: "A teammate can use the Toolbox from my written instructions alone"
{{< /checklist >}}

### Think about it

{{< ask key="p4_what_kind" label="What kind of work" >}}Nothing your robot does changed today, again. Project 9 was the same. What kind of work is this, if it is not making the robot better --- and why does it keep winning you time anyway?{{< /ask >}}

{{< ask key="p4_their_rules" label="Their rules" >}}The block shelf that came with the app was somebody's Toolbox once. What do you think their rules were for what got to go on it?{{< /ask >}}

{{< ask key="p4_backport" label="Backporting" >}}Your Toolbox rule spreads fixes forward but not backward. Real software teams have the same problem with old versions. What would it take to fix an old mission copy --- and when is it not worth doing?{{< /ask >}}

### Next

One project left. Several missions still have a bonus that means nothing more than "now do that again" --- and you are going to stop doing it by hand.

In **Project 17 --- Repeating Without Retyping**, you meet the last loop.
