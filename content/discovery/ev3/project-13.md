---
title: "Coding Project 13 — Deciding What to Do"
short_title: "Coding Project 13"
linkTitle: "Deciding What to Do"
description: "if, if/else, and chains. Asking once versus asking forever — and a claw that notices when it grabbed nothing."
weight: 13
nav: "discovery"
mission_id: "discovery_ev3_coding_13"
mission_title: "Discovery Project 13 (EV3) — Deciding What to Do"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 13
strand: "coding"
platform: "ev3"
phase: "Phase 5 · Make It Smart"
phase_order: 5
time: "One class period"
eyebrow: "Discovery · EV3 Coding Project 13"
heading: "Deciding What to Do"
subheading: "Until now your robot has followed orders. Today it starts choosing."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Deciding What to Do"
mission_label: "Mission 3 advanced — 22 pts"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 13"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Make It Smart"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Writing code that asks a question once and picks a path based on the answer — then using it to build two stacks that have to come out different."
  - term: "Mission Anchor"
    definition: "[[@3:base|Mission 3]] — Mixed Freight (advanced bonus) — 13 points"
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your robot with arm, claw, and force [[SENSOR|sensor]]"
      - key: need_2
        label: "Tablet or Chromebook with the EV3 Classroom app"
      - key: need_3
        label: "Charged brick"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "Your block list from Project 12"
  - term: "Before You Start"
    definition: "Projects 10 and 12 — you need wait until and your own My Blocks."
---
## Try It --- Sabotage Your Own Robot

Load your Project 12 program --- the blue pom run. Before you press start, **move the first pom about four inches to one side.** Now run it and watch closely.

{{< gridtable >}}
columns:
- head: "Question"
- head: "What happened"
rows:
  - class: trial
    cells:
      - text: "Did the claw close on anything?"
      - key: p1_sab_1
        aria: "Sabotage 1"
  - class: trial
    cells:
      - text: "What did the robot do next?"
      - key: p1_sab_2
        aria: "Sabotage 2"
  - class: trial
    cells:
      - text: "Did it drive to the basket anyway?"
      - key: p1_sab_3
        aria: "Sabotage 3"
  - class: trial
    cells:
      - text: "Did it open the claw at the end?"
      - key: p1_sab_4
        aria: "Sabotage 4"
{{< /gridtable >}}

{{< safety title="⚠ Your Robot Has No Idea Anything Went Wrong" >}}
It drove to a spot, closed a claw on empty air, carried nothing across the field, and carefully placed nothing in the basket. Then it backed away pleased with itself.

Every program you have built does this. They all assume everything goes right.
{{< /safety >}}

{{< ask key="p1_how_ruined" label="How much ruined" >}}Something goes slightly wrong in a real match --- a cube got bumped, your robot drifted an inch. How much of your run is ruined?{{< /ask >}}

### You do this all day

You never follow a plan blindly. You check things and pick. Fill in what *you* would do:

{{< gridtable >}}
columns:
- head: "If this is true..."
- head: "...I do this. Otherwise I do this."
rows:
  - class: trial
    cells:
      - text: "It is raining outside"
      - key: p1_you_1
        aria: "You 1"
  - class: trial
    cells:
      - text: "The milk smells bad"
      - key: p1_you_2
        aria: "You 2"
  - class: trial
    cells:
      - text: "My bag feels lighter than it should"
      - key: p1_you_3
        aria: "You 3"
{{< /gridtable >}}

That last one is exactly what your robot needs --- a way to notice that it is carrying nothing.
{.muted}

## Learn It --- Ask Once, Then Choose

The orange Control shelf has one more pair of jaws: the **if-then** block. It asks a hexagon question **once**, and only runs what is in its jaws when the answer is true.

{{< wordblocks aria="if 1 is pressed then play beep" >}}
rows:
  - control:
      category: control
      head:
        - text: "if "
        - slot:
            kind: condition
            style: sensor
            parts:
              - slot:
                  kind: dropdown
                  text: "1"
              - text: " is pressed?"
        - text: " then"
      body:
        - block:
            category: display
            parts:
              - text: "play beep for "
              - slot:
                  kind: value
                  text: "0.2"
              - text: " seconds"
{{< /wordblocks >}}

The hexagon is written exactly the way your *wait until* and *repeat until* hexagons are --- same shapes, same comparisons, same *not*.

### The one difference that matters

| Code / part | What it means |
| --- | --- |
| wait until / repeat until | **Keeps asking.** Checks, runs, checks again... until the answer changes. The robot stays there. |
| if --- asks once | **Checks once.** Runs the jaws once if true, skips them if false. Either way the robot moves on immediately. |

{{< callout title="Same Hexagons, Completely Different Job" variant="gold" >}}
*Until* = "keep doing this until something changes." *If* = "look at this once, then decide what happens next."

Swap one for the other by accident and your robot either freezes in place or blows straight past a check it needed to make.
{{< /callout >}}

### Three shapes

| Code / part | What it means |
| --- | --- |
| two separate ifs | *if (shoes are on) --- go for a walk. if (I am hungry) --- eat a snack.* Two questions about different things. Both can be true, both false. They do not affect each other. |
| if / else | *if (shoes are on) --- go for a walk. **else** --- watch TV.* The if-then-**else** block has two mouths, and **exactly one** of them runs, always. Else has no hexagon --- it means "every other possibility." |
| a chain of choices | Need three paths? Put a second if-then-else *inside the else mouth* of the first. Checked top to bottom --- the first true one runs, and everything below is skipped even if it is also true. |

{{< callout title="Order Changes the Answer" variant="navy" >}}
In a chain, the robot stops at the first true question. So put the most specific check first and the catch-all last --- or your specific case will never get a look in.
{{< /callout >}}

### How does a robot know it grabbed nothing?

Here is the check that fixes your sabotaged run --- and it costs no extra sensor at all.

Think about what "closed" means. Your *claw closed* number is where the claw stops **because the cube is in the way**. Close the claw on empty air and nothing stops it --- it swings *past* that number.

For that trick to work, the close itself has to change. A run-for block always swings the exact degrees you asked for --- cube or no cube, it lands on the same count, and the count tells you nothing. So the grab check uses a **timed squeeze** instead: switch the claw motor on toward closed, give it a second, switch it off. A cube stops the squeeze early. Empty air lets it swing right on past.

{{< wordblocks aria="Timed squeeze: start motor D closing, wait 1 second, stop motor D" >}}
rows:
  - block:
      category: motors
      parts:
        - text: "start motor "
        - slot:
            kind: dropdown
            text: "D"
        - slot:
            kind: dropdown
            text: "↻"
      note: "gentle speed, from the safe shape"
  - block:
      category: control
      parts:
        - text: "wait "
        - slot:
            kind: value
            text: "1"
        - text: " seconds"
  - block:
      category: motors
      parts:
        - text: "stop motor "
        - slot:
            kind: dropdown
            text: "D"
      note: "wherever it got to --- that is the clue"
{{< /wordblocks >}}

{{< wordblocks aria="if D degrees counted greater than claw closed plus 10 then the claw is empty" >}}
rows:
  - control:
      category: control
      head:
        - text: "if "
        - slot:
            kind: condition
            parts:
              - slot:
                  kind: variable
                  text: "D degrees counted"
              - text: " > "
              - slot:
                  kind: variable
                  text: "claw closed"
              - text: " + "
              - slot:
                  kind: value
                  text: "10"
        - text: " then"
      body:
        - block:
            category: display
            parts:
              - text: "display image "
              - slot:
                  kind: dropdown
                  text: "Sad"
            note: "I grabbed air"
{{< /wordblocks >}}

The claw motor's own degree count, which the brick has been keeping since Project 3, just became a sensor. It starts at 0 at claw-open --- that is the Start Pose Rule earning its keep. Whether your empty claw ends up at a *bigger* or *smaller* number than your grip point depends on which way your claw closes --- check yours by hand and flip the hexagon if needed.
{.muted}

## Do It --- Choose a Path

### Step 1 --- Your first decision

New project called `Decisions`. Build: *if (1 is pressed?) then --- play beep for 0.2 seconds*. Run it twice --- once holding the sensor pressed, once not.

{{< ask key="p3_first_if" label="First if" >}}What happened each time --- and how fast did the program end when you were not pressing?{{< /ask >}}

### Step 2 --- Swap if for wait-until and watch what breaks

Replace the *if* with *wait until (1 is pressed?)*, beep after it. Run it without pressing.

{{< ask key="p3_swap_wait" label="Swap for wait" >}}What is the robot doing now, and how is it different from the if version? Use the words "once" and "keeps".{{< /ask >}}

Swap it back.

### Step 3 --- Pick a side with a press

Now a real two-way choice. Build: at the start of a program, *wait 3 seconds* --- your window to press or not --- then:

{{< wordblocks aria="if pressed turn right else turn left" >}}
rows:
  - control:
      category: control
      head:
        - text: "if "
        - slot:
            kind: condition
            style: sensor
            parts:
              - slot:
                  kind: dropdown
                  text: "1"
              - text: " is pressed?"
        - text: " then"
      body:
        - block:
            category: myblocks
            parts:
              - text: "turn right 90"
      branches:
        - label: "else"
          rows:
            - block:
                category: myblocks
                parts:
                  - text: "turn left 90"
{{< /wordblocks >}}

Hold the sensor during the wait → robot turns right. Do not → it turns left. One program, two behaviours, chosen at run time.

{{< checklist >}}
- key: p3_pick_side
  label: "My robot picks a different turn depending on whether I pressed"
{{< /checklist >}}

### Step 4 --- Did I actually grab it?

Open your `grab` block from Project 12. Swap its claw-close for the **timed squeeze** from Learn It, then add the empty-claw check right after it: if the claw count is past *claw closed* by more than about 10, show the sad face and stop; else, carry on.

Test it honestly: run with a cube in place, then run with the cube moved away.

{{< checklist >}}
- key: p3_grab_check_full
  label: "With the cube there, the run carries on normally"
- key: p3_grab_check_empty
  label: "With the cube missing, my robot notices and says so"
{{< /checklist >}}

{{< ask key="p3_what_do" label="What to do about it" >}}Your robot just told you something went wrong instead of carrying air across the field. What should it *do* about it --- try again, skip to the next mission, or stop? Who decides?{{< /ask >}}

### Step 5 --- A three-way choice

Build a chain: press within the first 3 seconds → the full run; press *and hold* → just the grab test; no press → a beep and stop. Use an if-then-else with a second if-then-else inside the else mouth.

{{< checklist >}}
- key: p3_three_way
  label: "Three different behaviours from one program, and I can trigger each on purpose"
{{< /checklist >}}

{{< ask key="p3_order_matters" label="Order matters" >}}Why does the order of the questions in your chain matter? What would go wrong if you asked them the other way round?{{< /ask >}}

### Step 6 --- Mission 3 Advanced --- two opposite stacks13 pts

{{< mission-summary mission="3" video=true >}}
{{< /mission-summary >}}

{{< callout title="Going for Advanced Gets You the Bonus Too" variant="gold" >}}
Two opposite stacks *are* two stacks. Score the Advanced Bonus and the 9-point Bonus comes with it --- 22 points from this one run.
{{< /callout >}}

{{< score-examples >}}
scores:
- "Two stacks with opposite colour arrangements."
- "The stacks do not need to be next to each other."
- "The shape of the stack does not matter --- only the ON TOP OF relationships."
does_not_score:
- "Green on Green, or Yellow on Yellow."
- "A single three-cube stack counted as two stacks."
- "**Reusing a cube from the first stack in the second.**"
{{< /score-examples >}}

{{< callout title="⚠ Four Cubes, Four Jobs" >}}
Each cube may contribute to **only one** scoring stack. You need two greens and two yellows, and every one of them has a specific place to be. Get the second stack's colours the wrong way round and you drop from 22 points to 9.
{{< /callout >}}

**Where the decisions go.** This run has four grabs and four placements in a row. If grab two fails and the robot does not notice, everything after it is wasted. Put a check after each grab --- the pattern from step 4 --- so a miss costs you one cube instead of the whole mission.

Plan it out. Which cube goes where, and in what order?

{{< gridtable >}}
columns:
- head: "Step"
- head: "Cube"
- head: "Goes where"
- head: "Check after?"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_plan1_cube
        aria: "Plan 1 cube"
      - key: p3_plan1_where
        aria: "Plan 1 where"
      - key: p3_plan1_check
        aria: "Plan 1 check"
  - class: trial
    cells:
      - text: "2"
      - key: p3_plan2_cube
        aria: "Plan 2 cube"
      - key: p3_plan2_where
        aria: "Plan 2 where"
      - key: p3_plan2_check
        aria: "Plan 2 check"
  - class: trial
    cells:
      - text: "3"
      - key: p3_plan3_cube
        aria: "Plan 3 cube"
      - key: p3_plan3_where
        aria: "Plan 3 where"
      - key: p3_plan3_check
        aria: "Plan 3 check"
  - class: trial
    cells:
      - text: "4"
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

### Step 7 --- Run it five times

{{< gridtable >}}
columns:
- head: "Run"
- head: "Two stacks?"
- head: "Opposite arrangement?"
- head: "Did a check catch a miss?"
- head: "Points"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_r1_two
        aria: "R1 two"
      - key: p3_r1_opp
        aria: "R1 opposite"
      - key: p3_r1_catch
        aria: "R1 catch"
      - key: p3_r1_pts
        aria: "R1 points"
  - class: trial
    cells:
      - text: "2"
      - key: p3_r2_two
        aria: "R2 two"
      - key: p3_r2_opp
        aria: "R2 opposite"
      - key: p3_r2_catch
        aria: "R2 catch"
      - key: p3_r2_pts
        aria: "R2 points"
  - class: trial
    cells:
      - text: "3"
      - key: p3_r3_two
        aria: "R3 two"
      - key: p3_r3_opp
        aria: "R3 opposite"
      - key: p3_r3_catch
        aria: "R3 catch"
      - key: p3_r3_pts
        aria: "R3 points"
  - class: trial
    cells:
      - text: "4"
      - key: p3_r4_two
        aria: "R4 two"
      - key: p3_r4_opp
        aria: "R4 opposite"
      - key: p3_r4_catch
        aria: "R4 catch"
      - key: p3_r4_pts
        aria: "R4 points"
  - class: trial
    cells:
      - text: "5"
      - key: p3_r5_two
        aria: "R5 two"
      - key: p3_r5_opp
        aria: "R5 opposite"
      - key: p3_r5_catch
        aria: "R5 catch"
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
      - text: "Mission 3 --- Bonus (a second mixed stack)"
      - key: p4_s_m3bo
        aria: "Score M3 bonus"
      - text: "9"
  - cells:
      - text: "Mission 3 --- Advanced (opposite arrangements)"
      - key: p4_s_m3adv
        aria: "Score M3 advanced"
      - text: "13"
  - class: total
    cells:
      - text: "My total this project"
      - key: p4_total
        aria: "Total"
      - text: "22"
{{< /gridtable >}}

### if or until?

Which tool fits each job --- an *if*, a *wait until*, or a *repeat until*?

{{< gridtable >}}
columns:
- head: "The robot should..."
- head: "Tool"
rows:
  - class: trial
    cells:
      - text: "Keep driving until the sensor is pressed"
      - key: p4_iw_1
        aria: "IW 1"
  - class: trial
    cells:
      - text: "Check once whether the claw is empty, then choose"
      - key: p4_iw_2
        aria: "IW 2"
  - class: trial
    cells:
      - text: "Do nothing until the match-start tap"
      - key: p4_iw_3
        aria: "IW 3"
  - class: trial
    cells:
      - text: "Steer left or right depending on what it sees, over and over"
      - key: p4_iw_4
        aria: "IW 4"
{{< /gridtable >}}

### Spot the bug

{{< gridtable >}}
columns:
- head: "The stack"
- head: "What goes wrong"
rows:
  - class: trial
    cells:
      - text: "An *if (pressed?)* used to wait for the match-start tap"
      - key: p4_sb_1
        aria: "SB 1"
  - class: trial
    cells:
      - text: "A *wait until (pressed?)* where a quick one-time check was meant"
      - key: p4_sb_2
        aria: "SB 2"
  - class: trial
    cells:
      - text: "In a chain, the catch-all question placed first"
      - key: p4_sb_3
        aria: "SB 3"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_once
  label: "I can explain the difference between *if* and *until* using \"once\" and \"keeps\""
- key: p4_can_else
  label: "I know exactly one mouth of an if-then-else always runs"
- key: p4_can_chain
  label: "I can build a three-way chain and say why its order matters"
- key: p4_can_empty
  label: "My robot can notice an empty claw using the claw motor's own degree count"
- key: p4_can_pick
  label: "One of my programs behaves differently depending on what it finds"
{{< /checklist >}}

### Think about it

{{< ask key="p4_whose_mistake" label="Whose mistake" >}}In Try It your robot carried nothing across the field and placed it carefully in a basket. Would you call that a mistake by the robot, or a mistake by the programmer?{{< /ask >}}

{{< ask key="p4_smarter" label="Is it smarter" >}}A robot that checks its own work looks smarter than one that does not. Is it actually smarter, or is it something else?{{< /ask >}}

{{< ask key="p4_how_much" label="How much vs yes no" >}}Every decision you made today came from a switch --- pressed or not pressed. What kinds of choices could your robot make if it could tell *how much* of something there is, instead of just yes or no?{{< /ask >}}

### Next

Everything your robot senses right now is on or off. The field is not like that --- a black line and a white mat are not two states of a switch, they are two brightnesses.

In **Project 14 --- Seeing Light and Dark**, your robot gets a sensor that answers with a number instead of a yes.
