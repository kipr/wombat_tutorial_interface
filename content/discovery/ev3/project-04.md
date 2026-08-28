---
title: "Coding Project 4 — Out and Back"
short_title: "Coding Project 4"
linkTitle: "Out and Back"
description: "Turn tape-measure inches into wheel rotations, drive out of the starting box, stop where a judge can see it, and return fully within the box. Fixing drift with the steering dial."
weight: 4
nav: "discovery"
mission_id: "discovery_ev3_coding_04"
mission_title: "Discovery Project 4 (EV3) — Out and Back"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 4
strand: "coding"
platform: "ev3"
phase: "Phase 2 · Make It Move"
phase_order: 2
time: "One class period"
eyebrow: "Discovery · EV3 Coding Project 4"
heading: "Out and Back"
subheading: "Off the block and onto the field. This is the first project that scores points."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Out and Back"
mission_label: "Mission 1 · Mission 10 — base + bonus"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 4"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Make It Move"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Driving out of the starting box, stopping clearly [[IN THE ZONE|IN THE ZONE]], and driving back in — then making it work the same way every time."
  - term: "Mission Anchor"
    definition: "[[@1:base|Mission 1]] — Waypoint Alpha · [[@10:base|Mission 10]] — Waypoint Bravo (base + bonus)"
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your LEGO EV3 driving base"
      - key: need_2
        label: "Tablet or Chromebook with the EV3 Classroom app"
      - key: need_3
        label: "Charged brick"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "A tape measure"
      - key: need_6
        label: "This project sheet"
  - term: "Before You Start"
    definition: "Project 3 — wheel motors plugged into ports A (left) and E (right), the brick connected to the EV3 Classroom app, and you can run a program that moves the robot."
---
## Try It --- Read the Mission First

You are about to score real points. Before you write a single line of code, find out exactly what the judge is looking for.

{{< mission-summary mission="1" video=true >}}
{{< /mission-summary >}}

**Mission 10 --- Waypoint Bravo** is the same mission on the other side: the zone next to the **right** starting box. Everything you learn here works for both.

{{< safety title="⚠ They Do Not Share a Return Trip" >}}
Mission 1 and Mission 10 must be completed **independently**. One drive back into a starting box cannot pay for both bonuses. Each one needs its own out-and-back run.
{{< /safety >}}

### What scores and what does not

{{< score-examples >}}
scores:
- "Robot enters the zone and visibly stops."
- "Robot enters, stops, later returns [[FULLY WITHIN|FULLY WITHIN]] a starting box, and visibly stops."
- "Robot enters, pauses, moves an arm motor while staying still, then leaves."
does_not_score:
- "Robot drives through the zone without stopping."
- "Robot slows down a lot but never clearly stops."
- "Robot enters, instantly reverses, and leaves without stopping."
- "One robot does the base, a different robot does the bonus."
{{< /score-examples >}}

{{< callout title="The Judge Has to See It" variant="navy" >}}
If a judge cannot clearly tell that your robot stopped, the mission does not score --- even if you know it stopped. A stop that is too short to see is worth zero.

Moving an arm or claw while the robot stays in place is still stopped. What matters is that its *position on the field* is not changing.
{{< /callout >}}

### Walk it first

Do not program yet. Put your robot in the starting box, then push it by hand through the whole mission --- out to the zone, stop, back into the box.

Now measure and write down what you just did.

{{< gridtable >}}
columns:
- head: "Measurement"
- head: "Mine"
- head: "Unit"
rows:
  - cells:
      - text: "Distance from the starting box to the middle of the zone"
      - key: p1_dist_to_zone
        aria: "Distance to zone"
      - text: "inches"
  - cells:
      - text: "How far the zone reaches, front to back"
      - key: p1_zone_depth
        aria: "Zone depth"
      - text: "inches"
  - cells:
      - text: "How wide my robot is"
      - key: p1_robot_width
        aria: "Robot width"
      - text: "inches"
  - cells:
      - text: "How long my robot is"
      - key: p1_robot_length
        aria: "Robot length"
      - text: "inches"
{{< /gridtable >}}

{{< ask key="p1_room_for_error" label="Room for error" >}}Look at the zone depth and your robot's length. How much room for error do you actually have?{{< /ask >}}

## Learn It --- Straight Is (Still) Not Automatic

In the EV3 Classroom app you do not drive each wheel on its own. A **movement block** drives both wheels together as one matched pair --- the brick keeps the two motors in step for you.

### Meet the blocks

Every driving program in this project starts the same way: a hat block that starts the program, one block that tells the brick *which two motors* are the wheels, and one that sets how fast they go.

{{< wordblocks aria="Word-block stack: when program starts, set movement motors to A plus E, set movement speed to 50 percent" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
  - block:
      category: movement
      parts:
        - text: "set movement motors to "
        - slot:
            kind: dropdown
            text: "B+C"
      note: "B is the left wheel, C is the right"
  - block:
      category: movement
      parts:
        - text: "set movement speed to "
        - slot:
            kind: value
            text: "50"
        - text: " %"
{{< /wordblocks >}}

The colors match the EV3 Classroom app, so you can find each block by its color: **yellow = Events**, **pink = Movement**, **orange = Control**.
{.muted}

### The move block

One block does the driving. It has three parts, and you will use all three today:

{{< wordblocks aria="Word block: move, steering zero, for 3.5 rotations" >}}
rows:
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
            text: "3.5"
        - slot:
            kind: dropdown
            text: "rotations"
{{< /wordblocks >}}

- The dial is the [[STEERING|steering]] number. **0 means straight.** Positive numbers bend the path to the right, negative numbers bend it to the left.
- The middle number is **how far** to go.
- The last part is the **unit**. The dropdown offers **rotations**, degrees, and seconds. We will use rotations --- one rotation means each wheel turns all the way around once.

{{< callout title="Your Tape Measure Speaks Inches. Your Robot Speaks Rotations." variant="gold" >}}
The brick does not know what an inch is --- it only knows how many times its wheels have turned. So you need one magic number: **how far your robot rolls in one rotation.**

Find it once: put a piece of tape on a wheel, roll the robot by hand until the tape comes all the way around, and measure the distance with your tape measure. Write it here:

{{< gridtable >}}
columns:
- head: ""
- head: ""
rows:
  - cells:
      - text: "One rotation rolls my robot this far"
      - key: p2_in_per_rot
        aria: "Inches per rotation"
{{< /gridtable >}}

From now on: **rotations = distance in inches ÷ that number.** Need to go 24 inches, and one rotation is about 7? That is 24 ÷ 7 ≈ **3.5 rotations**. Decimals are fine --- the brick is happy to turn a wheel half way.
{{< /callout >}}

Steering 0 *should* mean perfectly straight. Here is the part nobody warns you about: **on a real robot, it usually almost does --- but not quite.** The brick keeps the motors matched, but it cannot fix things that are not motors:

- The wheels may not be mounted perfectly straight.
- One wheel has more friction than the other.
- Weight is not spread evenly across the robot.
- A tire that is dusty or worn grips differently than a clean one.

{{< callout title="The Fix Is in the Number" variant="gold" >}}
You cannot make the robot perfect. You *can* give the steering dial a small number that cancels the drift.

If your robot drifts **left**, nudge the steering a little **positive** --- steer it back toward the right.

If it drifts **right**, nudge it a little **negative**.
{{< /callout >}}

Change the steering by 1 or 2 at a time. Big jumps [[OVERSHOOT|overshoot]] and you end up chasing it.
{.muted}

{{< callout title="It Will Drift Again Later" >}}
The steering number that works on a cold robot may not work after twenty runs --- motors change as they warm up, and a battery that is running low changes things too. Expect to re-check this on competition day.
{{< /callout >}}

### Reverse is just a minus sign

A positive distance drives forward. Put a minus in front of the distance and the robot backs up along the same path.

{{< wordblocks aria="Two move blocks: move steering 0 for 3.5 rotations forward, move steering 0 for negative 3.5 rotations backward" >}}
rows:
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
            text: "3.5"
        - slot:
            kind: dropdown
            text: "rotations"
      note: "forward"
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
            text: "-3.5"
        - slot:
            kind: dropdown
            text: "rotations"
      note: "backward"
{{< /wordblocks >}}

{{< callout title="Watch Out" variant="navy" >}}
The minus sign goes on the *distance* --- never on the steering. If your straight-driving fix was steering **2**, then the trip home is steering **2** with distance **-24**. The robot retraces the same gentle curve in reverse. Students often flip the steering sign for the return trip and then wonder why the robot curves away from the box on the way home.
{{< /callout >}}

### Shape of the program

Every out-and-back run has the same five moves. Write it as [[PSEUDOCODE|pseudocode]] before you build it from blocks.

| Code / part | What it means |
| --- | --- |
| 1. Drive forward | Out of the starting box, toward the zone. |
| 2. Stop | Not a slow-down. A stop. |
| 3. Wait | Long enough for the judge to see it. Base mission scored here. |
| 4. Drive backward | Back toward the starting box. |
| 5. Stop | [[FULLY WITHIN\\|FULLY WITHIN]] the box. Bonus scored here. |

Five moves --- but only three blocks. A *move for* block does its own stopping when it finishes. What it does **not** do is wait around afterward. That is the wait block's job.

{{< ask key="p2_why_wait" label="Why the wait matters" >}}Why does step 3 exist? What happens to your score without it?{{< /ask >}}

### Read it top to bottom

Blocks snap into one stack, and the robot runs them from the top down. Here is the whole mission:

{{< wordblocks aria="Full program: when program starts, set movement motors A plus E, set movement speed 50 percent, move steering 0 for 3.5 rotations, wait 3 seconds, move steering 0 for negative 3.5 rotations" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
  - block:
      category: movement
      parts:
        - text: "set movement motors to "
        - slot:
            kind: dropdown
            text: "B+C"
  - block:
      category: movement
      parts:
        - text: "set movement speed to "
        - slot:
            kind: value
            text: "50"
        - text: " %"
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
            text: "3.5"
        - slot:
            kind: dropdown
            text: "rotations"
      note: "Out --- stops by itself"
  - block:
      category: control
      parts:
        - text: "wait "
        - slot:
            kind: value
            text: "3"
        - text: " seconds"
      note: "Stop and hold --- base scored here"
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
            text: "-3.5"
        - slot:
            kind: dropdown
            text: "rotations"
      note: "Back --- stops in the box"
{{< /wordblocks >}}

Your numbers will not be 3.5 --- they will come from *your* field measurements and *your* inches-per-rotation. That is what the next phase is for.
{.muted}

## Do It --- Drive the Mission

### Step 1 --- Mark your starting position

Your robot must start in the same spot every single run, or nothing you measure means anything. Put it in the starting box and decide exactly how you will place it --- against a wall, on a mark, lined up with a corner.

{{< ask key="p3_start_method" label="How you place the robot" >}}Describe how you place your robot so it starts identically every time:{{< /ask >}}

### Step 2 --- Get out to the zone

New project called `Waypoint`, with your names in the project name --- that is your [[ATTRIBUTION|attribution]]. Drive forward and stop --- that is all for now.

Start from your tape measure: turn your measured distance into rotations (inches ÷ your inches-per-rotation) and put that into the move block. Run it. Watch where the robot *really* stops. Short? Add a little. Past the zone? Take a little away. A quarter rotation is a good-sized nudge.

{{< gridtable >}}
columns:
- head: "Try"
- head: "Rotations in the move block"
- head: "Where the robot ended up"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_t1_in
        aria: "Try 1 rotations"
      - key: p3_t1_result
        aria: "Try 1 result"
  - class: trial
    cells:
      - text: "2"
      - key: p3_t2_in
        aria: "Try 2 rotations"
      - key: p3_t2_result
        aria: "Try 2 result"
  - class: trial
    cells:
      - text: "3"
      - key: p3_t3_in
        aria: "Try 3 rotations"
      - key: p3_t3_result
        aria: "Try 3 result"
  - class: trial
    cells:
      - text: "4"
      - key: p3_t4_in
        aria: "Try 4 rotations"
      - key: p3_t4_result
        aria: "Try 4 result"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_step_in_zone
  label: "My robot stops [[IN THE ZONE|IN THE ZONE]]"
{{< /checklist >}}

### Step 3 --- Fix the drift

Movement blocks keep the wheels matched, so your robot drifts less than most --- but less is not never. Watch which way your robot pulls as it drives out. Then nudge the steering number --- 1 or 2 at a time, no more.

{{< gridtable >}}
columns:
- head: "Try"
- head: "Steering value"
- head: "Which way did it drift?"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_drift1_steer
        aria: "Drift try 1 steering value"
      - key: p3_drift1_dir
        aria: "Drift try 1 direction"
  - class: trial
    cells:
      - text: "2"
      - key: p3_drift2_steer
        aria: "Drift try 2 steering value"
      - key: p3_drift2_dir
        aria: "Drift try 2 direction"
  - class: trial
    cells:
      - text: "3"
      - key: p3_drift3_steer
        aria: "Drift try 3 steering value"
      - key: p3_drift3_dir
        aria: "Drift try 3 direction"
  - class: trial
    cells:
      - text: "4"
      - key: p3_drift4_steer
        aria: "Drift try 4 steering value"
      - key: p3_drift4_dir
        aria: "Drift try 4 direction"
{{< /gridtable >}}

My final straight-driving steering value is:

{{< gridtable >}}
columns:
- head: "Steering value"
rows:
  - cells:
      - key: p3_final_steer
        aria: "Final steering value"
{{< /gridtable >}}

### Step 4 --- Make the stop obvious

Your move block stops the robot on its own --- but it does not make it *sit* there. Add a **wait** block after it so the robot holds still in the zone. The mission says stop --- the judge needs to see it.

{{< short-answer key="p3_wait_length" label="How long the robot waits" prompt="How long did you make the robot wait, and how did you decide?" >}}

{{< checklist >}}
- key: p3_step_visible_stop
  label: "A person watching can clearly tell my robot stopped"
{{< /checklist >}}

**Test it on a person.** Have a teammate watch a run and ask them, without warning, whether the robot stopped. If they hesitate, it is not long enough.
{.muted}

### Step 5 --- Come home

Now add the return trip: one more move block, with a minus sign on the rotations. Keep the *same* steering number --- the minus goes on the rotations, never on the steering.

The robot must end **FULLY WITHIN** the starting box. Not [[TOUCHING|TOUCHING]] the line. Not hanging over the edge. Every part inside.

{{< checklist >}}
- key: p3_step_back_in
  label: "My robot returns FULLY WITHIN the starting box and stops"
- key: p3_step_no_touch
  label: "No part of the robot touches or crosses the box line"
{{< /checklist >}}

{{< ask key="p3_back_dist_diff" label="Backward distance difference" >}}Did you have to make the backward rotations different from the forward rotations? Why might that happen?{{< /ask >}}

### Step 6 --- Run it five times

One good run is luck. Five good runs is a program. Run the whole mission five times without changing anything and record what happens.

{{< gridtable >}}
columns:
- head: "Run"
- head: "Stopped in the zone?"
- head: "Returned fully within?"
- head: "Points"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_r1_zone
        aria: "Run 1 zone"
      - key: p3_r1_back
        aria: "Run 1 back"
      - key: p3_r1_pts
        aria: "Run 1 points"
  - class: trial
    cells:
      - text: "2"
      - key: p3_r2_zone
        aria: "Run 2 zone"
      - key: p3_r2_back
        aria: "Run 2 back"
      - key: p3_r2_pts
        aria: "Run 2 points"
  - class: trial
    cells:
      - text: "3"
      - key: p3_r3_zone
        aria: "Run 3 zone"
      - key: p3_r3_back
        aria: "Run 3 back"
      - key: p3_r3_pts
        aria: "Run 3 points"
  - class: trial
    cells:
      - text: "4"
      - key: p3_r4_zone
        aria: "Run 4 zone"
      - key: p3_r4_back
        aria: "Run 4 back"
      - key: p3_r4_pts
        aria: "Run 4 points"
  - class: trial
    cells:
      - text: "5"
      - key: p3_r5_zone
        aria: "Run 5 zone"
      - key: p3_r5_back
        aria: "Run 5 back"
      - key: p3_r5_pts
        aria: "Run 5 points"
{{< /gridtable >}}

{{< ask key="p3_consistency" label="Run consistency" >}}Did all five runs come out the same? If not, what changed between them?{{< /ask >}}

### Step 7 --- Do the other side

Copy your program into a new project called `Waypoint Bravo` and run Mission 10 from the **right** starting box.

Remember the rule: each mission needs its own out-and-back. You cannot score both bonuses with one trip home.

{{< checklist >}}
- key: p3_step_mission10
  label: "Mission 10 scores too"
{{< /checklist >}}

{{< ask key="p3_other_side" label="Other side differences" >}}Did the same numbers work on the other side, or did you have to change them? Why do you think that is?{{< /ask >}}

## Score It --- Checkpoint

### My score

{{< gridtable >}}
columns:
- head: "Mission part"
- head: "Scored?"
- head: "Points"
rows:
  - cells:
      - text: "Mission 1 --- Base (stop IN THE ZONE)"
      - key: p4_m1_base
        aria: "Mission 1 base"
      - text: "1"
  - cells:
      - text: "Mission 1 --- Bonus (return FULLY WITHIN)"
      - key: p4_m1_bonus
        aria: "Mission 1 bonus"
      - text: "1"
  - cells:
      - text: "Mission 10 --- Base (stop IN THE ZONE)"
      - key: p4_m10_base
        aria: "Mission 10 base"
      - text: "1"
  - cells:
      - text: "Mission 10 --- Bonus (return FULLY WITHIN)"
      - key: p4_m10_bonus
        aria: "Mission 10 bonus"
      - text: "1"
  - cells:
      - text: "**My total**"
      - key: p4_total
        aria: "Total points"
      - text: "**4**"
{{< /gridtable >}}

### My numbers

Keep these. Project 5 starts from your straight-driving steering value.
{.muted}

{{< gridtable >}}
columns:
- head: "Setting"
- head: "Value"
rows:
  - cells:
      - text: "Steering value for driving straight"
      - key: p4_num_steer
        aria: "Steering value"
  - cells:
      - text: "Movement speed (%)"
      - key: p4_num_speed
        aria: "Movement speed"
  - cells:
      - text: "Rotations out to the zone"
      - key: p4_num_out_in
        aria: "Out distance"
  - cells:
      - text: "Rotations back to the box"
      - key: p4_num_back_in
        aria: "Back distance"
  - cells:
      - text: "How long the robot holds still (seconds)"
      - key: p4_num_hold_s
        aria: "Hold time"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_start_same
  label: "I can place my robot in the same starting position every time"
- key: p4_can_distance
  label: "I can change the distance in the move block to change how far the robot goes"
- key: p4_can_straight
  label: "I can tell which way to nudge the steering number when the robot drifts, and fix it"
- key: p4_can_reverse
  label: "I can drive the same path in reverse with the steering still right"
- key: p4_can_visible_stop
  label: "I can make a stop that a judge can clearly see"
- key: p4_can_read_mission
  label: "I can read a mission and say exactly what has to happen to score it"
- key: p4_can_repeat
  label: "My program scored on five runs in a row"
{{< /checklist >}}

### Think about it

{{< ask key="p4_distance_risk" label="Risks of distance-based driving" >}}Your robot scored, but nothing in your program knows where the robot actually is on the field. It only knows how far to spin its wheels --- and wheels can slip. What could go wrong on competition day that would make your distances wrong?{{< /ask >}}

{{< ask key="p4_overshoot_fix" label="Fixing an overshoot" >}}A teammate's robot stops just past the zone line every time. Name two different things they could change, and say which one you would try first.{{< /ask >}}

{{< ask key="p4_harder_part" label="Which was harder" >}}Which was harder --- getting the robot to the right place, or getting it to do the same thing five times? What does that tell you?{{< /ask >}}

### Next

In **Project 5 --- Learning to Turn**, the robot stops going in straight lines. You will crank the steering dial past a gentle nudge --- all the way to a one-wheel turn and a spin in place --- and learn the three shapes a turn can have.
