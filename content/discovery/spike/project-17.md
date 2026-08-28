---
title: "Coding Project 17 — Repeating Without Rebuilding"
short_title: "Coding Project 17"
linkTitle: "Repeating Without Rebuilding"
description: "The loop that counts for you. Smooth the arm, repeat the base for the bonus — and collect the last thirty-eight points."
weight: 17
nav: "discovery"
mission_id: "discovery_spike_coding_17"
mission_title: "Discovery Project 17 (SPIKE) — Repeating Without Retyping"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 17
strand: "coding"
platform: "spike"
phase: "Phase 6 · Clean It Up"
phase_order: 6
time: "One class period"
eyebrow: "Discovery · SPIKE Coding Project 17"
heading: "Repeating Without Rebuilding"
subheading: "The last loop — and the last thirty-eight points on the field."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Repeating Without Rebuilding"
mission_label: "Missions 7 · 11 · 16 · 17 — 38 pts"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 17"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Clean It Up"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Learning the loop that counts, then using it to collect every bonus that just means \"now do that again.\""
  - term: "Mission Anchor"
    definition: "[[@7:base|Mission 7]] · 11 · 16 · 17 bonuses — 38 points"
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your robot with arm, claw, and sensors"
      - key: need_2
        label: "Tablet or Chromebook with the SPIKE App"
      - key: need_3
        label: "Charged hub"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "Your Toolbox from Project 16"
  - term: "Before You Start"
    definition: "Project 16 — your blocks should live in your Toolbox by now, and this project starts as a duplicate of it."
---
## Try It --- Thirty Small Hops

Back in Project 9 you moved the arm in three big jumps and were asked what it would take to move it in thirty small ones. Here is the answer you were promised.

{{< wordblocks aria="Counter loop: set position to arm down, repeat until position past arm up, change by 5, run to position" >}}
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
            kind: variable
            text: "arm down"
  - control:
      category: control
      head:
        - text: "repeat until "
        - slot:
            kind: condition
            parts:
              - slot:
                  kind: variable
                  text: "position"
              - text: " > "
              - slot:
                  kind: variable
                  text: "arm up"
      body:
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
                  text: "5"
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

Read it with a partner before you run it, and answer these from the blocks alone.

{{< gridtable >}}
columns:
- head: "Question"
- head: "My answer"
rows:
  - class: trial
    cells:
      - text: "Where does *position* start?"
      - key: p1_q_start
        aria: "Where it starts"
  - class: trial
    cells:
      - text: "What makes the loop stop?"
      - key: p1_q_stop
        aria: "What stops it"
  - class: trial
    cells:
      - text: "How much does it change each trip round?"
      - key: p1_q_step
        aria: "The step"
  - class: trial
    cells:
      - text: "So how many times does the loop run?"
      - key: p1_q_count
        aria: "How many times"
{{< /gridtable >}}

Now run it with your own arm numbers and watch.

{{< ask key="p1_vs_single" label="Versus single block" >}}How is this different from a single *run C to position (arm up)* block on its own?{{< /ask >}}

{{< callout title="A Smooth Arm Is a Careful Arm" variant="gold" >}}
An arm that snaps to a position throws whatever it is holding. An arm that creeps there sets things down gently --- which matters for every final-position mission you have.
{{< /callout >}}

### Where the counting lives

Look at that loop again. The three things that control the counting are in three different places: the **start** is in the set block above the jaws, the **stopping point** is in the hexagon, and the **step** is buried inside.

{{< ask key="p1_eyes_jump" label="Where eyes jump" >}}If a teammate asked you "how many times does that run?", how long would it take to work out --- and where would your eyes have to jump?{{< /ask >}}

## Learn It --- The Loop That Counts For You

When what you really mean is *"do this N times,"* there is a block that says exactly that --- and the count sits right on its face where anyone can read it:

{{< wordblocks aria="repeat 2 fetch pom" >}}
rows:
  - control:
      category: control
      head:
        - text: "repeat "
        - slot:
            kind: value
            text: "2"
      body:
        - block:
            category: myblocks
            parts:
              - text: "fetch pom"
{{< /wordblocks >}}

No variable to set, no hexagon to aim, no step to hide. **The loop does the counting for you.** You have already used it once --- the repeat 4 in your drive square, back in Project 12. Now you know what family it belongs to.

### Three loops, three jobs

| Code / part | What it means |
| --- | --- |
| repeat N | You know *how many*. Two poms, four sides, three cubes. The count is the point. |
| repeat until / wait until | You are waiting for the *world* --- a press, a line, an angle. You have no idea how many trips it will take, and you do not care. |
| a counter in the jaws | The number itself is doing work --- like *position* creeping upward in the smoother. The variable is not just counting trips; every value it passes through matters. |

{{< callout title="The Bonus Pattern" variant="gold" >}}
Go back and read the missions you have already scored. Over and over, the bonus is just the base *again*: a second pom, a second cone, one cube higher.

You built the base as a block. The bonus is that block in a **repeat**. That is the whole project.
{{< /callout >}}

### Repeats hold anything

Jaws are jaws. A repeat can hold your My Blocks, an if-then-else, even another repeat. The square is a repeat holding two of your blocks; a two-tier pom run is a repeat holding fetch-and-drop; the smoother is a repeat holding a change and a move. Same block, every time.

## Do It --- Do It Again --- Automatically

### Step 1 --- Build the smoother

Duplicate your Toolbox for this project. Build the Try It smoother with your own numbers, then wrap it in a My Block called `arm up gently`, and make `arm down gently` to match --- same loop, counting the other way.

{{< short-answer key="p3_count_down" label="Counting down" prompt="What did you change to make it count down?" >}}

{{< checklist >}}
- key: p3_smoother
  label: "My arm creeps up and down gently, each as one block"
{{< /checklist >}}

### Step 2 --- The square, one last time

Rebuild the square as *repeat 4 { drive forward 24 · turn right 90 }* --- three visible blocks in the main stack.

{{< short-answer key="p3_sq_eyes" label="Square eyes" prompt="A teammate reads it. How long does it take them to answer \"how many sides?\" --- and where do their eyes go?" >}}

{{< checklist >}}
- key: p3_sq_repeat
  label: "My square is a repeat 4 and still closes"
{{< /checklist >}}

### Step 3 --- Mission 11 Bonus --- two orange poms7 pts

{{< mission-summary mission="11" video=true >}}
{{< /mission-summary >}}

Start here --- it is the simplest "do it twice" on the field, and you already own the block.

{{< callout title="Two Ways, Both Fine" variant="gold" >}}
Call your block twice, or wrap one call in a *repeat 2*. Try both and see which reads better to you.

The loop wins the moment the number might change --- and at a tournament it always might.
{{< /callout >}}

The second pom is somewhere different, so your block needs an input or a short drive between trips. Same problem you solved for Mission 15 in Project 12.
{.muted}

{{< checklist >}}
- key: p3_m11
  label: "Two orange poms are in the same basket at the end"
{{< /checklist >}}

### Step 4 --- Missions 16 and 17 Bonuses --- stack them higher22 pts

{{< mission-summary mission="16" video=true >}}
{{< /mission-summary >}}

{{< callout title="A Cube On a Cube Still Counts" variant="navy" >}}
Read the scoring examples: *one cube ON TOP OF another cube that is ON TOP OF the Large Green Cube* scores. So the second cube can go on the pile rather than beside it --- whichever your claw does more reliably.
{{< /callout >}}

{{< callout title="⚠ Final Position --- Both Have to Survive" >}}
Delivering the second cube is where the first one gets knocked off. Approach the same way each trip, and back straight away rather than turning while you are still close.
{{< /callout >}}

{{< checklist >}}
- key: p3_m16
  label: "Two spilled cubes are on the Large Green Cube at the end"
- key: p3_m17
  label: "Two unstraight cubes are on the Large Brown Cube at the end"
{{< /checklist >}}

{{< ask key="p3_knocked_off" label="Knocked off" >}}Did the second delivery ever knock the first one off? What fixed it?{{< /ask >}}

### Step 5 --- Mission 7 Bonus --- a second enclosure9 pts

{{< mission-summary mission="7" video=true >}}
{{< /mission-summary >}}

This is the same delivery as the base, aimed somewhere else --- which is exactly the case for a block with an input called twice, or a repeat over two destinations.

{{< checklist >}}
- key: p3_m7
  label: "Two enclosures each hold a blue and an orange pom"
{{< /checklist >}}

### Step 6 --- Put the loops in your Toolbox

Anything you wrapped in a loop that worked --- `deliver poms (how many)`, `arm up gently` --- belongs in the master Toolbox. Add it there first, and note it in your team instructions.

{{< checklist >}}
- key: p3_toolbox
  label: "My new loop blocks are in the master Toolbox and written in the team notes"
{{< /checklist >}}

### Step 7 --- Run it five times

{{< gridtable >}}
columns:
- head: "Run"
- head: "M11"
- head: "M16"
- head: "M17"
- head: "M7"
- head: "Points"
rows:
  - class: trial
    cells:
      - text: "1"
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
  - class: trial
    cells:
      - text: "2"
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
  - class: trial
    cells:
      - text: "3"
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
  - class: trial
    cells:
      - text: "4"
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
  - class: trial
    cells:
      - text: "5"
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
- head: "Scored?"
- head: "Points"
rows:
  - cells:
      - text: "Mission 11 --- Bonus (two orange poms, same basket)"
      - key: p4_s_m11
        aria: "Score M11"
      - text: "7"
  - cells:
      - text: "Mission 16 --- Bonus (two spilled cubes on the green)"
      - key: p4_s_m16
        aria: "Score M16"
      - text: "11"
  - cells:
      - text: "Mission 17 --- Bonus (two unstraight cubes on the brown)"
      - key: p4_s_m17
        aria: "Score M17"
      - text: "11"
  - cells:
      - text: "Mission 7 --- Bonus (a second enclosure)"
      - key: p4_s_m7
        aria: "Score M7"
      - text: "9"
  - class: total
    cells:
      - text: "My total this project"
      - key: p4_total
        aria: "Total"
      - text: "38"
{{< /gridtable >}}

### Which loop?

Pick the right tool: *repeat N*, *repeat until* / *wait until*, or a counter in the jaws.

{{< gridtable >}}
columns:
- head: "The robot should..."
- head: "Loop"
rows:
  - class: trial
    cells:
      - text: "Fetch exactly three cubes"
      - key: p4_wl_1
        aria: "WL 1"
  - class: trial
    cells:
      - text: "Drive until it sees the black line"
      - key: p4_wl_2
        aria: "WL 2"
  - class: trial
    cells:
      - text: "Sweep the arm through every position from down to up, slowly"
      - key: p4_wl_3
        aria: "WL 3"
  - class: trial
    cells:
      - text: "Beep five times"
      - key: p4_wl_4
        aria: "WL 4"
{{< /gridtable >}}

### How many times?

From the blocks alone, how many trips through the jaws?

{{< gridtable >}}
columns:
- head: "The loop"
- head: "Trips"
rows:
  - class: trial
    cells:
      - text: "repeat 6 { beep }"
      - key: p4_hm_1
        aria: "HM 1"
  - class: trial
    cells:
      - text: "set n to 0 · repeat until (n > 3) { change n by 1 · beep }"
      - key: p4_hm_2
        aria: "HM 2"
  - class: trial
    cells:
      - text: "set n to 10 · repeat until (n > 3) { change n by 1 · beep }"
      - key: p4_hm_3
        aria: "HM 3"
{{< /gridtable >}}

{{< ask key="p4_hm_trap" label="HM trap" >}}That last one is legal and runs. What does it actually do, and why is it a trap?{{< /ask >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_pick
  label: "I can pick between repeat N, repeat until, and a counter --- and say why"
- key: p4_can_readcount
  label: "I can read a counter loop and work out how many times it runs"
- key: p4_can_smooth
  label: "My arm can creep to a position instead of snapping there"
- key: p4_can_bonus
  label: "I can turn a \"do it again\" bonus into a repeat around a block I already own"
- key: p4_can_nest
  label: "I can put my own blocks, ifs, and repeats inside a repeat"
- key: p4_can_toolbox
  label: "My smoothers live in the Toolbox now, master first"
{{< /checklist >}}

### Every point on the field

Add up what you scored across the whole strand. The right-hand column is what was available.
{.muted}

{{< gridtable >}}
columns:
- head: "Project"
- head: "I scored"
- head: "Available"
rows:
  - cells:
      - text: "4 --- Out and Back"
      - key: p4_t04
        aria: "P4 total"
      - text: "4"
  - cells:
      - text: "6 --- Bulldoze Run"
      - key: p4_t06
        aria: "P6 total"
      - text: "16"
  - cells:
      - text: "7 --- Your Robot's Arm"
      - key: p4_t07
        aria: "P7 total"
      - text: "7"
  - cells:
      - text: "8 --- Arm and Claw Together"
      - key: p4_t08
        aria: "P8 total"
      - text: "37"
  - cells:
      - text: "9 --- Names for Your Numbers"
      - key: p4_t09
        aria: "P9 total"
      - text: "20"
  - cells:
      - text: "10 --- Feeling for Things"
      - key: p4_t10
        aria: "P10 total"
      - text: "13"
  - cells:
      - text: "11 --- Counting Wheel Ticks"
      - key: p4_t11
        aria: "P11 total"
      - text: "40"
  - cells:
      - text: "12 --- Teaching Your Robot New Moves"
      - key: p4_t12
        aria: "P12 total"
      - text: "18"
  - cells:
      - text: "13 --- Deciding What to Do"
      - key: p4_t13
        aria: "P13 total"
      - text: "22"
  - cells:
      - text: "14 --- Seeing Light and Dark"
      - key: p4_t14
        aria: "P14 total"
      - text: "35"
  - cells:
      - text: "15 --- Following the Line"
      - key: p4_t15
        aria: "P15 total"
      - text: "51"
  - cells:
      - text: "17 --- Repeating Without Retyping"
      - key: p4_t17
        aria: "P17 total"
      - text: "38"
  - class: grand
    cells:
      - text: "Total"
      - key: p4_grand
        aria: "Grand total"
      - text: "301"
{{< /gridtable >}}

{{< callout title="301 Is the Whole Game" variant="gold" >}}
Add up every base, bonus, and advanced bonus across all eighteen Stack Attack missions and the number is 301.

There is nothing on that field you have not been taught how to reach.
{{< /callout >}}

### Think about it

{{< ask key="p4_hardest_loop" label="Hardest loop" >}}You have built four kinds of loop question now --- a switch, a wheel count, a brightness, and a plain count. Which was hardest to get right, and why that one?{{< /ask >}}

{{< ask key="p4_first_program" label="First program" >}}In Project 1 you ran a program somebody else wrote and did not understand a line of it. Go back and read that program now. What does it say to you?{{< /ask >}}

{{< ask key="p4_intelligent" label="Is it intelligent" >}}Your robot does exactly what it is told, every time, and has no idea what any of it means. After seventeen projects, does it seem intelligent to you? Say what makes you answer that way.{{< /ask >}}

### That Is the Coding Strand

Seventeen projects ago your robot could not be switched on. It now drives measured distances, turns to an angle, grabs and stacks and places, feels for walls, counts its own wheels, reads light and dark, follows a line, checks its own work, and decides what to do when something goes wrong.

All of it built from about a dozen commands and four ideas: **do this, do it if, do it while, do it again.**

Take your Toolbox with you. Next season the field will be different and most of what is in that project will still work.
