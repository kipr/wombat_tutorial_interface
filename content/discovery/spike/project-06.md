---
title: "Coding Project 6 — Bulldoze Run"
short_title: "Coding Project 6"
linkTitle: "Bulldoze Run"
description: "Four missions and sixteen points using nothing but driving. The OFF definition, pushing technique, and the two kinds of stop."
weight: 6
nav: "discovery"
mission_id: "discovery_spike_coding_06"
mission_title: "Discovery Project 6 (SPIKE) — Bulldoze Run"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 6
strand: "coding"
platform: "spike"
phase: "Phase 2 · Make It Move"
phase_order: 2
time: "One class period"
eyebrow: "Discovery · SPIKE Coding Project 6"
heading: "Bulldoze Run"
subheading: "Four missions. Sixteen points. No claw — you push."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Bulldoze Run"
mission_label: "Missions 2 · 4 · 13 · 14"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
build_gate:
  title: "Build required first — the arm and the claw"
  description: "Everything from Project 7 onward needs a motorized arm with a claw on the end — arm motor in port C, claw motor in port D. The SPIKE build guides are on their way; ask your teacher if the links are not live yet."
  links:
    - page: "/discovery/spike/builds/arm"
      label: "Arm build guide"
    - page: "/discovery/spike/builds/claw"
      label: "Claw build guide"
meta:
  - term: "Project"
    definition: "Coding Project 6"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Make It Move"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Putting driving and turning together to clear objects off the black line, one mission at a time, then chaining them into a single run."
  - term: "Mission Anchor"
    definition: "[[@2:base|Mission 2]] · [[@4:base|Mission 4]] · [[@13:base|Mission 13]] base · [[@14:base|Mission 14]] base"
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your SPIKE Prime driving base"
      - key: need_2
        label: "Tablet or Chromebook with the SPIKE App"
      - key: need_3
        label: "Charged hub"
      - key: need_4
        label: "The game field with all elements set"
      - key: need_5
        label: "A stopwatch"
      - key: need_6
        label: "Your Project 4 and 5 numbers"
  - term: "Before You Start"
    definition: "Projects 4 and 5 — you need straight driving, a repeatable 90° turn, and a consistent starting position."
---
## Try It --- Sixteen Points Without a Claw

Your robot cannot pick anything up yet. It can only drive and turn.

That turns out to be enough for four whole missions, because those missions do not ask you to *hold* anything. They just ask you to get things **off the black line**.

### What OFF actually means

Everything in this project depends on one word. Read it carefully.

{{< callout title="The OFF Definition" variant="gold" >}}
An object is [[OFF|OFF]] a line, [[BOUNDARY|boundary]], or zone edge when **no portion** of the object is [[TOUCHING|TOUCHING]] that line, [[BOUNDARY|boundary]], or zone edge.

**No portion.** A cube resting with one corner on the line is not OFF. A cone leaning so its base just grazes the line is not OFF. Close does not count.
{{< /callout >}}

### Walk the field

Before you write anything, go look. Find each of these on the field and fill in the table.

{{< gridtable >}}
columns:
- head: "Object"
- head: "Which way is the shortest push to get it OFF?"
- head: "How far, roughly?"
rows:
  - class: trial
    cells:
      - text: "Large Red Cube + [[PALLET|pallet]]"
      - key: p1_dir_largered
        aria: "Direction large red"
      - key: p1_dist_largered
        aria: "Distance large red"
  - class: trial
    cells:
      - text: "Small Red Cubes"
      - key: p1_dir_smallred
        aria: "Direction small red"
      - key: p1_dist_smallred
        aria: "Distance small red"
  - class: trial
    cells:
      - text: "Unstraight Cubes (3)"
      - key: p1_dir_unstraight
        aria: "Direction unstraight"
      - key: p1_dist_unstraight
        aria: "Distance unstraight"
  - class: trial
    cells:
      - text: "Traffic Cones (2)"
      - key: p1_dir_cones
        aria: "Direction cones"
      - key: p1_dist_cones
        aria: "Distance cones"
  - class: trial
    cells:
      - text: "Orange Pom"
      - key: p1_dir_orange
        aria: "Direction orange pom"
      - key: p1_dist_orange
        aria: "Distance orange pom"
  - class: trial
    cells:
      - text: "Blue Pom"
      - key: p1_dir_blue
        aria: "Direction blue pom"
      - key: p1_dist_blue
        aria: "Distance blue pom"
{{< /gridtable >}}

{{< ask key="p1_two_at_once" label="Two objects one push" >}}Which two objects are closest together? Could one push move both?{{< /ask >}}

{{< ask key="p1_front_width" label="Robot front width" >}}Look at the front of your robot. How wide is the part that would do the pushing, and does that width help or hurt you?{{< /ask >}}

## Learn It --- Pushing Is a Skill

Pushing looks like the easy version of picking something up. It is not --- it is a different problem with its own rules.

### Where you hit it decides where it goes

| Code / part | What it means |
| --- | --- |
| Dead center | The object slides forward in a straight line, roughly where you aimed. This is what you want. |
| Off to one side | The object spins away at an angle. It may end up somewhere you cannot reach again. |
| Too high | Tall objects tip over instead of sliding. A tipped cone still counts as OFF --- but only if the whole thing cleared the line. |
| At an angle | The object skids sideways. Hard to predict, hard to repeat. |

{{< callout title="Square Up Before You Push" variant="navy" >}}
This is why Project 5 spent so long on turns. Arriving *pointed the right way* matters more than arriving in exactly the right spot. A robot that is square to the object and an inch off center will still push it straight. A robot in the perfect spot but angled 20° will send it sideways.
{{< /callout >}}

### Push far enough, then a bit more

You cannot see the line edge from inside your program. Your robot pushes for a set distance and stops, and whatever happened, happened.

So [[OVERSHOOT|overshoot]] on purpose. If the object needs to travel four inches to clear the line, push it six. There is no penalty for being further OFF, and there is a big penalty for being one millimeter short.

{{< safety title="⚠ But Not Into Somewhere Worse" >}}
Do not push an object into a wall, off the field, or [[ON TOP OF|ON TOP OF]] something you need later. Look at where it will end up before you decide how hard to shove.
{{< /safety >}}

### SIMULTANEOUSLY --- the trap in Mission 4

Mission 4's bonus does not just ask for an orange pom OFF and a blue pom OFF. It asks for both [[SIMULTANEOUSLY|SIMULTANEOUSLY]] --- true at the same moment.

{{< score-examples >}}
scores:
- "An orange pom and a blue pom are both OFF the line at the same moment."
- "An orange pom is lifted completely clear of the line."
does_not_score:
- "Any portion of the orange pom is [[TOUCHING|TOUCHING]] the line."
- "The orange pom is OFF, then later the blue pom is OFF --- they are never OFF at the same time."
{{< /score-examples >}}

That last one is the whole problem. Clear one pom, come back, clear the other, and if the first one rolled back onto the line in between, you get the base and not the bonus.

The reliable answer is one push that takes both. That is a positioning problem, not a programming problem.
{.muted}

### One run, four missions

Build each mission on its own first. Get it working. *Then* join them together.

The order matters --- after every push, your robot is somewhere new, facing a new direction, and the next section has to start from there.

| Code / part | What it means |
| --- | --- |
| M13 | drive, push, back off |
| M14 | turn, drive, push |
| M2 | ... |
| M4 | ... |

Name the four small projects exactly like that --- `M13`, `M14`, `M2`, `M4` --- and **keep them even after you combine them**. They are your section map. When one mission stops working inside the big run, open that mission's own little project and fix it there, where nothing else can confuse you. Then carry the fix across.

## Do It --- Clear the Line

One mission at a time. New project for each, then a combined one at the end.

### Step 1 --- Mission 13 --- Unstraight Cubes1 pt

{{< mission-summary mission="13" video=true >}}
{{< /mission-summary >}}

All three. Leave one cube grazing the line and you score nothing.

{{< gridtable >}}
columns:
- head: "Try"
- head: "Push distance (in.)"
- head: "How many cubes ended up OFF?"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_m13_t1_ms
        aria: "M13 try 1 ms"
      - key: p3_m13_t1_res
        aria: "M13 try 1 result"
  - class: trial
    cells:
      - text: "2"
      - key: p3_m13_t2_ms
        aria: "M13 try 2 ms"
      - key: p3_m13_t2_res
        aria: "M13 try 2 result"
  - class: trial
    cells:
      - text: "3"
      - key: p3_m13_t3_ms
        aria: "M13 try 3 ms"
      - key: p3_m13_t3_res
        aria: "M13 try 3 result"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_m13_done
  label: "All three Unstraight Cubes are OFF the black line"
{{< /checklist >}}

### Step 2 --- Mission 14 --- Traffic Cones3 pts

{{< mission-summary mission="14" video=true >}}
{{< /mission-summary >}}

{{< safety title="⚠ A Tipped Cone Still Has to Be Clear" >}}
Cones tip easily. That is fine --- a cone on its side can still be OFF. But a tipped cone takes up more floor, so the part that lands might reach back onto the line. Push further than feels necessary.
{{< /safety >}}

{{< checklist >}}
- key: p3_m14_cone1
  label: "First cone is completely OFF"
- key: p3_m14_cone2
  label: "Second cone is completely OFF"
{{< /checklist >}}

{{< ask key="p3_m14_method" label="Cone method" >}}Did one push clear both cones, or did you need two moves? Describe what you did.{{< /ask >}}

### Step 3 --- Mission 2 --- Red Cubes4 pts

{{< mission-summary mission="2" video=true >}}
{{< /mission-summary >}}

{{< callout title="Two Objects, Judged Separately" variant="navy" >}}
The cube and the pallet are checked independently. Both must be OFF. Shoving the cube off while the pallet stays behind on the line scores nothing --- so push low enough to move them together, or move the pallet after.
{{< /callout >}}

Good news on the bonus: the small red cubes do not have to stay stacked. Knocking them apart is fine as long as both end up OFF.
{.muted}

{{< checklist >}}
- key: p3_m2_cube
  label: "Large Red Cube is OFF"
- key: p3_m2_pallet
  label: "The pallet is OFF too"
- key: p3_m2_small
  label: "Both Small Red Cubes are OFF"
{{< /checklist >}}

### Step 4 --- Mission 4 --- The Poms8 pts

{{< mission-summary mission="4" video=true >}}
{{< /mission-summary >}}

This is the biggest score in the project and the fussiest. Poms are light --- they roll, they bounce, and they do not always go where you pushed them.

Get the base first: one orange pom, completely OFF. Then work out how to take a blue one with it in the same motion.

{{< gridtable >}}
columns:
- head: "Try"
- head: "What I changed"
- head: "Orange OFF? Blue OFF? Same time?"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_m4_t1_chg
        aria: "M4 try 1 change"
      - key: p3_m4_t1_res
        aria: "M4 try 1 result"
  - class: trial
    cells:
      - text: "2"
      - key: p3_m4_t2_chg
        aria: "M4 try 2 change"
      - key: p3_m4_t2_res
        aria: "M4 try 2 result"
  - class: trial
    cells:
      - text: "3"
      - key: p3_m4_t3_chg
        aria: "M4 try 3 change"
      - key: p3_m4_t3_res
        aria: "M4 try 3 result"
  - class: trial
    cells:
      - text: "4"
      - key: p3_m4_t4_chg
        aria: "M4 try 4 change"
      - key: p3_m4_t4_res
        aria: "M4 try 4 result"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_m4_base
  label: "An Orange Pom is completely OFF the line"
- key: p3_m4_bonus
  label: "Orange and Blue are OFF at the same moment"
{{< /checklist >}}

### Step 5 --- Chain them into one run

New project called `Bulldoze`. Rebuild the blocks of your four working programs into it, one mission after another, in your chosen order --- and keep the four small projects open in your list as your section map.

Now the hard part: the end of one section is the start of the next. After a push, your robot is not where it began --- you need to drive it from wherever it ended up to wherever the next mission starts.

{{< callout title="Add One Section at a Time" variant="gold" >}}
Get mission one working from the starting box. Then add mission two and test the whole thing. Then add three. Never add two sections between tests --- if it breaks you will not know which one did it.
{{< /callout >}}

{{< ask key="p3_order_reason" label="Mission order reasoning" >}}What order did you put the four missions in, and why that order?{{< /ask >}}

{{< checklist >}}
- key: p3_chained
  label: "All four missions run from one program, one start"
{{< /checklist >}}

### Step 6 --- Run it five times and time it

Same standard as always. Reset the field between runs. Time each one with a stopwatch.

{{< gridtable >}}
columns:
- head: "Run"
- head: "M13"
- head: "M14"
- head: "M2"
- head: "M4"
- head: "Points"
- head: "Time"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_r1_m13
        aria: "Run 1 M13"
      - key: p3_r1_m14
        aria: "Run 1 M14"
      - key: p3_r1_m2
        aria: "Run 1 M2"
      - key: p3_r1_m4
        aria: "Run 1 M4"
      - key: p3_r1_pts
        aria: "Run 1 points"
      - key: p3_r1_time
        aria: "Run 1 time"
  - class: trial
    cells:
      - text: "2"
      - key: p3_r2_m13
        aria: "Run 2 M13"
      - key: p3_r2_m14
        aria: "Run 2 M14"
      - key: p3_r2_m2
        aria: "Run 2 M2"
      - key: p3_r2_m4
        aria: "Run 2 M4"
      - key: p3_r2_pts
        aria: "Run 2 points"
      - key: p3_r2_time
        aria: "Run 2 time"
  - class: trial
    cells:
      - text: "3"
      - key: p3_r3_m13
        aria: "Run 3 M13"
      - key: p3_r3_m14
        aria: "Run 3 M14"
      - key: p3_r3_m2
        aria: "Run 3 M2"
      - key: p3_r3_m4
        aria: "Run 3 M4"
      - key: p3_r3_pts
        aria: "Run 3 points"
      - key: p3_r3_time
        aria: "Run 3 time"
  - class: trial
    cells:
      - text: "4"
      - key: p3_r4_m13
        aria: "Run 4 M13"
      - key: p3_r4_m14
        aria: "Run 4 M14"
      - key: p3_r4_m2
        aria: "Run 4 M2"
      - key: p3_r4_m4
        aria: "Run 4 M4"
      - key: p3_r4_pts
        aria: "Run 4 points"
      - key: p3_r4_time
        aria: "Run 4 time"
  - class: trial
    cells:
      - text: "5"
      - key: p3_r5_m13
        aria: "Run 5 M13"
      - key: p3_r5_m14
        aria: "Run 5 M14"
      - key: p3_r5_m2
        aria: "Run 5 M2"
      - key: p3_r5_m4
        aria: "Run 5 M4"
      - key: p3_r5_pts
        aria: "Run 5 points"
      - key: p3_r5_time
        aria: "Run 5 time"
{{< /gridtable >}}

{{< ask key="p3_weakest_mission" label="Weakest mission" >}}Which mission failed most often across your five runs, and what do you think caused it?{{< /ask >}}

### One last thing before the arm

Every move block you have used ends the same way: when it finishes its distance, it **brakes** --- the motors grip and the robot stops where it is.

But there is another kind of stop, and you have probably caused it by accident already: the program simply *ends* while the robot is still moving. When that happens, the hub cuts power to everything and the robot **coasts** --- it rolls on until friction wins.

| This | Does | Robot behaves like |
| --- | --- | --- |
| The program ends mid-drive | Cuts the power | A bike with the pedals let go --- it rolls on |
| A move block finishing its distance | Brakes the motors | A bike with the brakes held --- it stops where it is |

That has not mattered much so far. From the next project it will, because you are about to add an arm --- and an arm changes where the weight sits. A robot that coasts is a robot that keeps creeping after you thought it stopped.

{{< callout title="Try Both, Right Now" variant="gold" >}}
Build *start moving* straight, then *wait 2 seconds* --- and nothing after it. Run it, and mark where the robot ends up when the program dies out from under it.

Reset, and run a plain *move for 24 in.* instead. Mark that spot too.
{{< /callout >}}

{{< gridtable >}}
columns:
- head: "Stopped by"
- head: "Where it finished"
- head: "Any creep after stopping?"
rows:
  - class: trial
    cells:
      - text: "the program just ending"
      - key: p3_stop_ao
        aria: "Coast stop position"
      - key: p3_stop_ao_creep
        aria: "Coast creep"
  - class: trial
    cells:
      - text: "a move block braking"
      - key: p3_stop_frz
        aria: "Brake stop position"
      - key: p3_stop_frz_creep
        aria: "Brake creep"
{{< /gridtable >}}

{{< short-answer key="p3_stop_gap" label="Gap between the two stops" prompt="How far apart were the two finishing points?" >}}

{{< safety title="⚠ From Here On" >}}
The robot's last motion is always a move-for block or an explicit *stop moving* --- never just the end of the program. If you reuse anything you built in Projects 3 to 6, check how it ends before you trust it.
{{< /safety >}}

{{< checklist >}}
- key: p3_freeze_tested
  label: "I tested both kinds of stop and measured the difference"
- key: p3_freeze_get
  label: "I can explain the difference between a stop I asked for and a stop that just happened"
{{< /checklist >}}

## Score It --- Checkpoint

### My best run

{{< gridtable >}}
columns:
- head: "Mission part"
- head: "Scored?"
- head: "Points"
rows:
  - cells:
      - text: "Mission 13 --- Base (all three cubes OFF)"
      - key: p4_s_m13
        aria: "Score M13"
      - text: "1"
  - cells:
      - text: "Mission 2 --- Base (large cube + pallet OFF)"
      - key: p4_s_m2b
        aria: "Score M2 base"
      - text: "1"
  - cells:
      - text: "Mission 2 --- Bonus (both small red cubes OFF)"
      - key: p4_s_m2bo
        aria: "Score M2 bonus"
      - text: "3"
  - cells:
      - text: "Mission 14 --- Base (both cones OFF)"
      - key: p4_s_m14
        aria: "Score M14"
      - text: "3"
  - cells:
      - text: "Mission 4 --- Base (orange pom OFF)"
      - key: p4_s_m4b
        aria: "Score M4 base"
      - text: "3"
  - cells:
      - text: "Mission 4 --- Bonus (orange + blue simultaneously)"
      - key: p4_s_m4bo
        aria: "Score M4 bonus"
      - text: "5"
  - class: total
    cells:
      - text: "My total"
      - key: p4_total
        aria: "Total points"
      - text: "16"
{{< /gridtable >}}

### Fastest clean run

{{< gridtable >}}
columns:
- head: "Question"
- head: "My answer"
rows:
  - cells:
      - text: "Fastest run that scored all six parts"
      - key: p4_best_time
        aria: "Best time"
  - cells:
      - text: "Total blocks in my program"
      - key: p4_cmd_count
        aria: "Block count"
  - cells:
      - text: "Which section takes the longest?"
      - key: p4_slowest_section
        aria: "Slowest section"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_off
  label: "I can state the OFF definition and judge whether an object satisfies it"
- key: p4_can_square
  label: "I can square my robot up to an object before pushing it"
- key: p4_can_overshoot
  label: "I push past the line on purpose instead of stopping right at it"
- key: p4_can_simul
  label: "I can explain why the Mission 4 bonus needs one motion, not two"
- key: p4_can_chain
  label: "I can chain several missions into a single run that starts once"
- key: p4_can_banner
  label: "I keep each mission's own small project as my section map for the big run"
- key: p4_can_add_one
  label: "I add one section at a time and test before adding the next"
{{< /checklist >}}

### Think about it

{{< ask key="p4_repetition" label="Repetition problem" >}}Your program is getting long, and big chunks of it are nearly identical --- drive, turn, drive, push, back off, over and over. What is annoying about that?{{< /ask >}}

{{< ask key="p4_ripple" label="Ripple effect" >}}You change one distance near the start of the run. What happens to every mission that comes after it, and why?{{< /ask >}}

{{< ask key="p4_tournament_gap" label="Practice vs match gap" >}}A team at a tournament has a robot that scores 16 points in practice and 3 points in the actual match. Nothing about the program changed. Give two possible explanations.{{< /ask >}}

### Next

You have taken pushing about as far as it goes. Everything left on the field has to be *lifted* --- and that needs a claw.

Before **Project 7 --- Your Robot's Arm**, go build one.

[Open the Arm Build Guide](/discovery/spike/builds/arm) — *Build guide coming soon --- ask your teacher if this link is not live yet*
