---
title: "Coding Project 4 — Out and Back"
short_title: "Coding Project 4"
linkTitle: "Out and Back"
description: "Drive out of the starting box, stop where a judge can see it, and return fully within the box. Fixing drift, and making it repeat five times."
weight: 4
nav: discovery
mission_id: discovery_coding_04
mission_title: "Coding Project 4 — Out and Back"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 4
strand: coding
phase: "Phase 2 · Make It Move"
phase_order: 2
time: "One class period"
eyebrow: "Discovery · Coding Project 4"
heading: "Out and Back"
subheading: "Off the block and onto the field. This is the first project that scores points."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Out and Back"
mission_label: "Mission 1 · Mission 10 — base + bonus"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: Project
    definition: "Coding Project 4"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Make It Move"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Driving out of the starting box, stopping clearly [[IN THE ZONE]], and driving back in — then making it work the same way every time."
  - term: "Mission Anchor"
    definition: "[[@1:base|Mission 1]] — Waypoint Alpha · [[@10:base|Mission 10]] — Waypoint Bravo (base + bonus)"
  - term: "Before You Start"
    definition: "Project 3 — motors plugged in, both LEDs green, and you can write a working `motor()` program."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Built robot"
      - key: need_2
        label: Wombat
      - key: need_3
        label: "Charged battery"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "A tape measure"
      - key: need_6
        label: "This project sheet"
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

{{< callout title="The Judge Has to See It" variant="navy" >}}
If a judge cannot clearly tell that your robot stopped, the mission does not score --- even if you know it stopped. A stop that is too short to see is worth zero.

Moving an arm or claw while the robot stays in place is still stopped. What matters is that its *position on the field* is not changing.
{{< /callout >}}

### Walk it first

Do not program yet. Put your robot in the starting box, then push it by hand through the whole mission --- out to the zone, stop, back into the box.

Now measure and write down what you just did.

{{< gridtable >}}
columns:
- head: Measurement
- head: Mine
  aria: "Distance to zone"
- head: Unit
rows:
  - cells:
      - text: "Distance from the starting box to the middle of the zone"
      - key: p1_dist_to_zone
        aria: "Distance to zone"
      - text: inches
  - cells:
      - text: "How far the zone reaches, front to back"
      - key: p1_zone_depth
        aria: "Zone depth"
      - text: inches
  - cells:
      - text: "How wide my robot is"
      - key: p1_robot_width
        aria: "Robot width"
      - text: inches
  - cells:
      - text: "How long my robot is"
      - key: p1_robot_length
        aria: "Robot length"
      - text: inches
{{< /gridtable >}}
{{< ask key="p1_room_for_error" label="Room for error" >}}Look at the zone depth and your robot's length. How much room for error do you actually have?{{< /ask >}}

## Learn It --- Straight Is Harder Than It Looks

You already know how to make both wheels turn. Here is the part nobody warns you about: **equal power does not mean equal speed.**

Send 50 to both motors and your robot will drift. Every robot does. The reasons are physical, not programming mistakes:

- No two motors are built exactly alike.
- The wheels may not be mounted perfectly straight.
- One wheel has more friction than the other.
- Weight is not spread evenly across the robot.

{{< callout title="The Fix Is in the Numbers" variant="gold" >}}
You cannot make the motors identical. You *can* give them different numbers so they end up going the same speed.

If your robot drifts **left**, the left wheel is going too slow --- or the right one too fast. Speed up the left, or slow down the right.

If it drifts **right**, do the opposite.

Change one wheel at a time, by 2 or 3 at a time. Big jumps [[OVERSHOOT|overshoot]] and you'll struggle to align the wheels.
{{< /callout >}}

{{< callout title="It Will Drift Again Later" >}}
The correction that works on a cold robot may not work after twenty runs --- motors change as they warm up. The more power you use, the bigger the correction you need. Expect to re-check this on competition day.
{{< /callout >}}

### Reverse is just a minus sign

Positive power drives forward. Put a minus in front of both numbers and the robot backs up along the same path.

```c
// Forward
motor(0, 50);
motor(3, 50);

// Backward
motor(0, -50);
motor(3, -50);
```

{{< callout title="Watch Out" variant="navy" >}}
If your straight-driving fix was `motor(0, 50); motor(3, 47);`, then reverse is `motor(0, -50); motor(3, -47);` --- the *same* correction, both numbers negative. Students often flip which wheel gets the smaller number and then wonder why the robot curves on the way home.
{{< /callout >}}

### Shape of the program

Every out-and-back run has the same five moves. Write it as [[PSEUDOCODE|pseudocode]] before you write it as code.

| Code / part | What it means |
| --- | --- |
| `1. Drive forward` | Out of the starting box, toward the zone. |
| `2. Stop` | Not a slow-down. A stop. |
| `3. Wait` | Long enough for the judge to see it. Base mission scored here. |
| `4. Drive backward` | Back toward the starting box. |
| `5. Stop` | [[FULLY WITHIN]] the box. Bonus scored here. |

{{< ask key="p2_why_wait" label="Why the wait matters" >}}Why does step 3 exist? What happens to your score without it?{{< /ask >}}

### White space is free

Leave a blank line between each move. It costs nothing and makes the sections of your program obvious at a glance.

```c
// Out
motor(0, 50);
motor(3, 50);
msleep(2000);

// Stop and hold
ao();
msleep(30);
msleep(3000);

// Back
motor(0, -50);
motor(3, -50);
msleep(2000);

// Stop in the box
ao();
msleep(30);
```

## Do It --- Drive the Mission

### Step 1 --- Mark your starting position

Your robot must start in the same spot every single run, or nothing you measure means anything. Put it in the starting box and decide exactly how you will place it --- against a wall, on a mark, lined up with a corner.

{{< ask key="p3_start_method" label="How you place the robot" >}}Describe how you place your robot so it starts identically every time:{{< /ask >}}

### Step 2 --- Get out to the zone

Create a new project called `Waypoint`. Put [[ATTRIBUTION|attribution]] [[COMMENT|comments]] at the top. Drive forward and stop --- that is all for now.

Start with power 50 and guess a time. Run it. If you stopped short, add time. If you overshot, take time away.

{{< gridtable >}}
columns:
- head: Try
- head: "msleep value"
  aria: "Try 1 milliseconds"
- head: "Where the robot ended up"
  aria: "Try 1 result"
rows:
  - cells:
      - text: 1
      - key: p3_t1_ms
        aria: "Try 1 milliseconds"
      - key: p3_t1_result
        aria: "Try 1 result"
  - cells:
      - text: 2
      - key: p3_t2_ms
        aria: "Try 2 milliseconds"
      - key: p3_t2_result
        aria: "Try 2 result"
  - cells:
      - text: 3
      - key: p3_t3_ms
        aria: "Try 3 milliseconds"
      - key: p3_t3_result
        aria: "Try 3 result"
  - cells:
      - text: 4
      - key: p3_t4_ms
        aria: "Try 4 milliseconds"
      - key: p3_t4_result
        aria: "Try 4 result"
{{< /gridtable >}}
{{< checklist >}}
- key: p3_step_in_zone
  label: "My robot stops [[IN THE ZONE]]"
{{< /checklist >}}

### Step 3 --- Fix the drift

Watch which way your robot pulls as it drives out. Then adjust one wheel's power --- small changes only.

{{< gridtable >}}
columns:
- head: Try
- head: "Left power"
  aria: "Drift try 1 left"
- head: "Right power"
  aria: "Drift try 1 right"
- head: "Which way did it drift?"
  aria: "Drift try 1 direction"
rows:
  - cells:
      - text: 1
      - key: p3_drift1_l
        aria: "Drift try 1 left"
      - key: p3_drift1_r
        aria: "Drift try 1 right"
      - key: p3_drift1_dir
        aria: "Drift try 1 direction"
  - cells:
      - text: 2
      - key: p3_drift2_l
        aria: "Drift try 2 left"
      - key: p3_drift2_r
        aria: "Drift try 2 right"
      - key: p3_drift2_dir
        aria: "Drift try 2 direction"
  - cells:
      - text: 3
      - key: p3_drift3_l
        aria: "Drift try 3 left"
      - key: p3_drift3_r
        aria: "Drift try 3 right"
      - key: p3_drift3_dir
        aria: "Drift try 3 direction"
  - cells:
      - text: 4
      - key: p3_drift4_l
        aria: "Drift try 4 left"
      - key: p3_drift4_r
        aria: "Drift try 4 right"
      - key: p3_drift4_dir
        aria: "Drift try 4 direction"
{{< /gridtable >}}
{{< gridtable >}}
columns:
- head: "Left wheel power"
  aria: "Final left power"
- head: "Right wheel power"
  aria: "Final right power"
rows:
  - cells:
      - key: p3_final_left
        aria: "Final left power"
      - key: p3_final_right
        aria: "Final right power"
{{< /gridtable >}}

### Step 4 --- Make the stop obvious

Add `ao();` then `msleep()` so the robot sits still in the zone. The mission says stop --- the judge needs to see it.

{{< short-answer key="p3_wait_length" label="How long the robot waits" prompt="How long did you make the robot wait, and how did you decide?" >}}

{{< checklist >}}
- key: p3_step_visible_stop
  label: "A person watching can clearly tell my robot stopped"
{{< /checklist >}}
**Test it on a person.** Have a teammate watch a run and ask them, without warning, whether the robot stopped. If they hesitate, it is not long enough.
{.muted}

### Step 5 --- Come home

Now add the return trip. Same powers, both negative. Same drift correction --- do not swap which wheel gets the smaller number.

The robot must end **[[FULLY WITHIN]]** the starting box. Not [[TOUCHING]] the line. Not hanging over the edge. Every part inside.

{{< checklist >}}
- key: p3_step_back_in
  label: "My robot returns [[FULLY WITHIN]] the starting box and stops"
- key: p3_step_no_touch
  label: "No part of the robot touches or crosses the box line"
{{< /checklist >}}
{{< ask key="p3_back_time_diff" label="Backward time difference" >}}Did you have to make the backward time different from the forward time? Why might that happen?{{< /ask >}}

### Step 6 --- Run it five times

One good run is luck. Five good runs is a program. Run the whole mission five times without changing anything and record what happens.

{{< gridtable >}}
columns:
- head: Run
- head: "Stopped in the zone?"
  aria: "Run 1 zone"
- head: "Returned fully within?"
  aria: "Run 1 back"
- head: Points
  aria: "Run 1 points"
rows:
  - cells:
      - text: 1
      - key: p3_r1_zone
        aria: "Run 1 zone"
      - key: p3_r1_back
        aria: "Run 1 back"
      - key: p3_r1_pts
        aria: "Run 1 points"
  - cells:
      - text: 2
      - key: p3_r2_zone
        aria: "Run 2 zone"
      - key: p3_r2_back
        aria: "Run 2 back"
      - key: p3_r2_pts
        aria: "Run 2 points"
  - cells:
      - text: 3
      - key: p3_r3_zone
        aria: "Run 3 zone"
      - key: p3_r3_back
        aria: "Run 3 back"
      - key: p3_r3_pts
        aria: "Run 3 points"
  - cells:
      - text: 4
      - key: p3_r4_zone
        aria: "Run 4 zone"
      - key: p3_r4_back
        aria: "Run 4 back"
      - key: p3_r4_pts
        aria: "Run 4 points"
  - cells:
      - text: 5
      - key: p3_r5_zone
        aria: "Run 5 zone"
      - key: p3_r5_back
        aria: "Run 5 back"
      - key: p3_r5_pts
        aria: "Run 5 points"
{{< /gridtable >}}
{{< ask key="p3_consistency" label="Run consistency" >}}Did all five runs come out the same? If not, what changed between them?{{< /ask >}}

### Step 7 --- Do the other side

{{< mission-summary mission="10" video=true >}}
{{< /mission-summary >}}

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
- head: Scored?
  aria: "Mission 1 base"
- head: Points
rows:
  - cells:
      - text: "Mission 1 --- Base (stop [[IN THE ZONE]])"
      - key: p4_m1_base
        aria: "Mission 1 base"
      - text: 1
  - cells:
      - text: "Mission 1 --- Bonus (return [[FULLY WITHIN]])"
      - key: p4_m1_bonus
        aria: "Mission 1 bonus"
      - text: 1
  - cells:
      - text: "Mission 10 --- Base (stop [[IN THE ZONE]])"
      - key: p4_m10_base
        aria: "Mission 10 base"
      - text: 1
  - cells:
      - text: "Mission 10 --- Bonus (return [[FULLY WITHIN]])"
      - key: p4_m10_bonus
        aria: "Mission 10 bonus"
      - text: 1
  - cells:
      - text: "**My total**"
      - key: p4_total
        aria: "Total points"
      - text: "**4**"
{{< /gridtable >}}

### My numbers

Keep these. Project 5 starts from your straight-driving powers.
{.muted}

{{< gridtable >}}
columns:
- head: Setting
- head: Value
  aria: "Left power"
rows:
  - cells:
      - text: "Left wheel power for driving straight"
      - key: p4_num_left
        aria: "Left power"
  - cells:
      - text: "Right wheel power for driving straight"
      - key: p4_num_right
        aria: "Right power"
  - cells:
      - text: "Time to reach the zone (ms)"
      - key: p4_num_out_ms
        aria: "Out time"
  - cells:
      - text: "Time to get back to the box (ms)"
      - key: p4_num_back_ms
        aria: "Back time"
  - cells:
      - text: "How long the robot holds still (ms)"
      - key: p4_num_hold_ms
        aria: "Hold time"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_start_same
  label: "I can place my robot in the same starting position every time"
- key: p4_can_distance
  label: "I can change the `msleep()` value to change how far the robot goes"
- key: p4_can_straight
  label: "I can tell which wheel to adjust when the robot drifts, and fix it"
- key: p4_can_reverse
  label: "I can drive the same path in reverse with the correction still right"
- key: p4_can_visible_stop
  label: "I can make a stop that a judge can clearly see"
- key: p4_can_read_mission
  label: "I can read a mission and say exactly what has to happen to score it"
- key: p4_can_repeat
  label: "My program scored on five runs in a row"
{{< /checklist >}}

### Think about it

{{< ask key="p4_timing_risk" label="Risks of timing-based driving" >}}Your robot scored, but nothing in your program knows where the robot actually is. It only knows how long to push. What could go wrong on competition day that would make your timing wrong?{{< /ask >}}

{{< ask key="p4_overshoot_fix" label="Fixing an overshoot" >}}A teammate's robot stops just past the zone line every time. Name two different things they could change, and say which one you would try first.{{< /ask >}}

{{< ask key="p4_harder_part" label="Which was harder" >}}Which was harder --- getting the robot to the right place, or getting it to do the same thing five times? What does that tell you?{{< /ask >}}

### Next

In **Project 5 --- Learning to Turn**, the robot stops going in straight lines. You will use your straight-driving numbers as the starting point and learn the two ways to make a turn --- and the three shapes a turn can have.

KIPR · Botball Explorer --- Discovery Projects · © KISS Institute for Practical Robotics 1997--2027
