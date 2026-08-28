---
title: "Coding Project 11 — Counting and Turning by Feel"
short_title: "Coding Project 11"
linkTitle: "Counting and Turning by Feel"
description: "Degrees per inch behind the move block — and the gyro that feels the whole robot turn. Correct the overshoot, and the square finally closes."
weight: 11
nav: "discovery"
mission_id: "discovery_ev3_coding_11"
mission_title: "Discovery Project 11 (EV3) — Counting and Turning by Feel"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 11
strand: "coding"
platform: "ev3"
phase: "Phase 4 · Make It Reliable"
phase_order: 4
time: "One class period"
eyebrow: "Discovery · EV3 Coding Project 11"
heading: "Counting and Turning by Feel"
subheading: "Same checking as last time — but now it watches a number instead of a switch. Two numbers, actually."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Counting and Turning by Feel"
mission_label: "Missions 9 · 8 · 18 — 40 pts"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 11"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Make It Reliable"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Reading the counter built into every motor, meeting the sense that feels the whole robot turn, and delivering freight to the loading dock."
  - term: "Mission Anchor"
    definition: "[[@9:base|Mission 9]] bonus · [[@8:base|Mission 8]] · [[@18:base|Mission 18]] base — 40 points"
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your robot with arm and claw"
      - key: need_2
        label: "Tablet or Chromebook with the EV3 Classroom app"
      - key: need_3
        label: "Charged brick"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "A ruler or tape measure"
      - key: need_6
        label: "Your Project 5 turn numbers"
  - term: "Before You Start"
    definition: "Project 10 — you must be comfortable with wait until , hexagons, and where the stop goes."
---
## Try It --- The Counter Was Always There

Back in Project 3 you turned a wheel with your hand and watched a number change in Port View. You were told to remember it. Here it is.

Open **Port View** on a wheel motor's port. Do not run anything --- just roll that wheel with your hand and watch its number.

{{< gridtable >}}
columns:
- head: "Question"
- head: "What I saw"
rows:
  - class: trial
    cells:
      - text: "What happens to the number when I roll the wheel forward?"
      - key: p1_roll_fwd
        aria: "Roll forward"
  - class: trial
    cells:
      - text: "What happens when I roll it backward?"
      - key: p1_roll_back
        aria: "Roll backward"
{{< /gridtable >}}

{{< callout title="Every Motor Has Been Counting This Whole Time" variant="gold" >}}
Since Project 3, your motors have been keeping track of exactly how far they turned --- in **degrees**. Every *move for rotations* block you have ever run was secretly this count --- one rotation is just 360 of these degrees. And degrees are about to earn their keep.
{{< /callout >}}

### Find your degrees per inch

Degrees are the motor's own unit. To connect them to the real world you need to know how many make an inch on *your* robot.

1. Put the robot on the floor and mark where the front edge sits.
2. Note the wheel's number in Port View (or roll it to a nice round number).
3. Push the robot straight forward exactly **24 inches**. Slowly, and in a straight line.
4. Read the number again. The difference is your degrees for 24 inches.

{{< gridtable >}}
columns:
- head: "Try"
- head: "Degrees for 24 inches"
- head: "Degrees per inch (divide by 24)"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p1_deg24_1
        aria: "Degrees try 1"
      - key: p1_dpi_1
        aria: "DPI try 1"
  - class: trial
    cells:
      - text: "2"
      - key: p1_deg24_2
        aria: "Degrees try 2"
      - key: p1_dpi_2
        aria: "DPI try 2"
  - class: trial
    cells:
      - text: "3"
      - key: p1_deg24_3
        aria: "Degrees try 3"
      - key: p1_dpi_3
        aria: "DPI try 3"
  - class: trial
    cells:
      - text: "Average"
      - text: "---"
      - key: p1_dpi_avg
        aria: "DPI average"
{{< /gridtable >}}

{{< safety title="⚠ Measure Long, Not Short" >}}
Use 24 inches, not 3. A small error in a short push turns into a big error per inch. Anything under about a foot is not worth measuring.
{{< /safety >}}

{{< ask key="p1_why_differ" label="Why numbers differ" >}}Your three numbers are not identical. Why not --- and which one should you use?{{< /ask >}}

{{< callout title="Wheel Size Decides the Number" >}}
One full wheel turn is 360 degrees no matter what wheel is bolted on. But a bigger wheel travels further in that turn --- which is exactly why your degrees-per-inch is *yours* and not somebody else's. Change your wheels, and this number changes with them.
{{< /callout >}}

{{< ask key="p1_curtain" label="Behind the curtain" >}}Check the curtain: multiply your degrees-per-inch by 24. Is that close to what a *move for 24 in.* block must be counting to? What does that tell you about how the move block works?{{< /ask >}}

## Learn It --- A Number Instead of a Switch

Project 10's checking watched a switch. The exact same checking can watch a **number** --- and the brick hands you two of them as round reporter ovals that fit into any hexagon.

| Code / part | What it means |
| --- | --- |
| A degrees counted | How far that wheel has rolled since its count was reset. This is the counter from Try It. |
| angle | How far the *whole robot* has turned. Not the wheels --- the robot. It comes from the **gyro sensor**, a small sensor that feels rotation the way your inner ear does when you spin with your eyes shut. Ours plugs into sensor port **2**. |

Both reporters are on the regular shelf: *degrees counted* in the Motors category, *angle* in the light-blue Sensors category.
{.muted}

{{< safety title="⚠ The Gyro's One Demand: Hold Still" >}}
Mount the gyro sensor flat on the robot and plug it into port **2** --- *while the robot is sitting perfectly still*. The gyro learns what "not turning" feels like at the moment it wakes up. Plug it in, or power the brick on, while the robot is moving and the angle will slowly drift all by itself for the rest of the session. If your angle wanders while the robot sits still: unplug the gyro, hold the robot still, and plug it back in.
{{< /safety >}}

### The same checking you already know

Look at these two side by side. Only the **question** changed.

{{< wordblocks aria="Project 10: wait until pressed. Project 11: wait until angle greater than 89" >}}
rows:
  - block:
      category: control
      parts:
        - text: "wait until "
        - slot:
            kind: condition
            style: sensor
            parts:
              - slot:
                  kind: dropdown
                  text: "1"
              - text: " is pressed?"
      note: "Project 10 --- a switch"
  - block:
      category: control
      parts:
        - text: "wait until "
        - slot:
            kind: condition
            parts:
              - slot:
                  kind: variable
                  text: "angle"
              - text: " > "
              - slot:
                  kind: value
                  text: "89"
      note: "Project 11 --- a number"
{{< /wordblocks >}}

Read the new one out loud: "keep checking the robot's heading --- the moment it has turned past 89 degrees, move on." The green **>** hexagon from Project 10 finally gets its job.

### Turning by feel

In Project 5 you tuned a 90° turn by trial and error, because wheel degrees are not robot degrees. The angle *is* robot degrees. Here is the turn, rebuilt:

{{< wordblocks aria="reset angle, start moving steering 100, wait until angle greater than 89, stop moving" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
  - block:
      category: sensors
      parts:
        - text: "reset angle"
      note: "always reset before you count"
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
                  text: "angle"
              - text: " > "
              - slot:
                  kind: value
                  text: "89"
  - block:
      category: movement
      parts:
        - text: "stop moving"
{{< /wordblocks >}}

{{< callout title="Why This Beats a Wall" variant="gold" >}}
A touch sensor only helps where there is something to touch. The angle works **anywhere on the field** --- open floor, mid-run, anywhere. And unlike wheel counting, it does not care if a wheel slipped. It feels the robot itself.
{{< /callout >}}

### It will go too far. Every time.

Run that turn and then read the angle in Port View on port 2. You asked to stop past 89. You will see something like **96**.

Nothing is broken. Your robot has **inertia** --- it is spinning, and when the checking succeeds and the motors stop, it keeps swinging a little further.

{{< callout title="The Fix Is Subtraction" variant="navy" >}}
Ask for 89. Land on 96. The [[OVERSHOOT|overshoot]] is 96 − 90 = 6.

So ask for **89 − 6 = 83** instead, and you will land on 90. Every robot has its own overshoot, and faster speed means more of it.
{{< /callout >}}

### Left turns count down

Turning right, the angle climbs. Turning **left**, it falls --- through zero and into negative numbers. That flips your hexagon:

| Code / part | What it means |
| --- | --- |
| right turn | steering 100  ·  wait until angle **>** 83 |
| left turn | steering −100  ·  wait until angle **<** −83 |

{{< safety title="⚠ Get the Direction Right or the Checking Never Ends" >}}
Spin left while waiting for the angle to pass **>** 83 and you have a check that can never succeed --- the number is falling, away from 83, forever, while the robot spins on the spot like a figure skater who forgot the rest of the routine.

Turning right, count **up** with >. Turning left, count **down** with <. Check this before every run.
{{< /safety >}}

## Do It --- Turn by the Numbers

### Step 1 --- Measure your overshoot

New project called `Gyro Turn`. Build the Learn It turn --- reset angle, spin at steering 100, wait until past 89, stop. Run it, then read the final angle in Port View on port 2.

{{< gridtable >}}
columns:
- head: "Speed (%)"
- head: "Asked to pass"
- head: "Actually landed on"
- head: "Overshoot"
rows:
  - class: trial
    cells:
      - text: "30"
      - text: "89"
      - key: p3_ov_30
        aria: "Overshoot at 30"
      - key: p3_ov_30_o
        aria: "Overshoot value 30"
  - class: trial
    cells:
      - text: "50"
      - text: "89"
      - key: p3_ov_50
        aria: "Overshoot at 50"
      - key: p3_ov_50_o
        aria: "Overshoot value 50"
  - class: trial
    cells:
      - text: "100"
      - text: "89"
      - key: p3_ov_100
        aria: "Overshoot at 100"
      - key: p3_ov_100_o
        aria: "Overshoot value 100"
{{< /gridtable >}}

{{< ask key="p3_ov_pattern" label="Overshoot pattern" >}}What is the relationship between speed and overshoot? Which speed will you use for turns, and why?{{< /ask >}}

### Step 2 --- Correct for it

Subtract your overshoot from the target and run again. Keep adjusting until the robot lands on 90.

{{< gridtable >}}
columns:
- head: "Try"
- head: "Number in my hexagon"
- head: "Where the angle actually landed"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_c1_t
        aria: "Correct try 1 target"
      - key: p3_c1_r
        aria: "Correct try 1 result"
  - class: trial
    cells:
      - text: "2"
      - key: p3_c2_t
        aria: "Correct try 2 target"
      - key: p3_c2_r
        aria: "Correct try 2 result"
  - class: trial
    cells:
      - text: "3"
      - key: p3_c3_t
        aria: "Correct try 3 target"
      - key: p3_c3_r
        aria: "Correct try 3 result"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_lands_90
  label: "My robot lands within a couple of degrees of 90"
{{< /checklist >}}

### Step 3 --- A left turn too

Copy the turn, flip the steering to −100, flip the hexagon to **< −83** (your corrected number, negative). Run it.

{{< checklist >}}
- key: p3_left_works
  label: "My robot turns 90° to the left as reliably as to the right"
{{< /checklist >}}

### Step 4 --- The square, again --- and this time it closes

In Project 5 you drove a square with four wheel-counted turns and it did not close. Do it again --- same square, distances with *move for rotations*, but every corner turned by the gyro.

{{< gridtable >}}
columns:
- head: "Question"
- head: "Project 5"
- head: "Now"
rows:
  - class: trial
    cells:
      - text: "How close to the starting spot?"
      - key: p3_sq_then
        aria: "Square then"
      - key: p3_sq_now
        aria: "Square now"
  - class: trial
    cells:
      - text: "Facing the same way?"
      - key: p3_sq_then_f
        aria: "Facing then"
      - key: p3_sq_now_f
        aria: "Facing now"
{{< /gridtable >}}

{{< callout title="This Is the Whole Point of the Project" variant="gold" >}}
Same robot. Same square. The only thing that changed is **what the robot was measuring** --- and suddenly it can come back to where it started.
{{< /callout >}}

{{< ask key="p3_why_closes" label="Why it closes" >}}Your wheel-counted square drifted a little more with every corner. Why does a gyro-turned square not do that?{{< /ask >}}

{{< checklist >}}
- key: p3_square_closes
  label: "My square closes"
{{< /checklist >}}

### Step 5 --- Drive a checked distance

One more trick with the wheel counter, so you have it when you need it. Reset the count, start moving, wait until *A degrees counted* passes your degrees-per-inch times 12, stop. That is a 12-inch drive built out of raw checking --- the thing *move for inches* does for you.

{{< gridtable >}}
columns:
- head: "I want"
- head: "Degrees (inches × DPI)"
- head: "How far it really went"
rows:
  - class: trial
    cells:
      - text: "6 inches"
      - key: p3_d6
        aria: "Degrees for 6"
      - key: p3_d6_r
        aria: "Result 6"
  - class: trial
    cells:
      - text: "12 inches"
      - key: p3_d12
        aria: "Degrees for 12"
      - key: p3_d12_r
        aria: "Result 12"
{{< /gridtable >}}

{{< ask key="p3_when_raw" label="When to use raw counting" >}}When would you build a drive this way instead of using a plain *move for inches* block? (Hint: what if you wanted to check *two* things at once while driving?){{< /ask >}}

### Step 6 --- Mission 9 Bonus --- get Botguy out9 pts

{{< mission-summary mission="9" video=true >}}
{{< /mission-summary >}}

Your claw can still be holding him. He just has to be clear of the enclosure and down on the floor at the same instant.
{.muted}

{{< checklist >}}
- key: p3_m9_bonus
  label: "Botguy is out of the enclosure and touching the floor"
{{< /checklist >}}

### Step 7 --- Mission 18 Base --- take him to the loading zone11 pts

{{< mission-summary mission="18" video=true >}}
{{< /mission-summary >}}

{{< callout title="One Trip, Two Missions, Twenty Points" variant="gold" >}}
You just lifted Botguy out of the enclosure for Mission 9. Do not put him down --- **carry him to the Loading Zone** and Mission 18's base scores too.

This is exactly the kind of thing to look for when you plan a full match: one action, more than one mission.
{{< /callout >}}

Mission 18 is final position, so Botguy has to still be [[IN THE ZONE|IN THE ZONE]] when the match ends. Set him down properly and back straight away.
{.muted}

{{< short-answer key="p3_inches_to_zone" label="Inches to loading zone" prompt="Roughly how many inches is it from the enclosure to the loading zone?" >}}

{{< checklist >}}
- key: p3_m18_base
  label: "Botguy is IN the Loading Zone and stays there"
{{< /checklist >}}

### Step 8 --- Mission 8 --- deliver the red cube20 pts

{{< mission-summary mission="8" video=true >}}
{{< /mission-summary >}}

{{< callout title="⚠ The Pallet and the Cube Travel Together" >}}
Read the failures carefully. **The Large Red Cube on the Loading Dock without the pallet does not score.** Neither does a pallet on the dock with the cube fallen off.

They both have to end up there, cube on pallet, pallet on dock.
{{< /callout >}}

{{< callout title="Look at What You Already Did to These Cubes" variant="navy" >}}
In Project 6 you shoved the Large Red Cube and its pallet off the black line. In Project 9 you stacked Small Red Cubes on top of it for Mission 5.

Mission 8's bonus asks for a Small Red Cube on the Large Red Cube *again* --- this time with the pallet on the dock. Plan Missions 2, 5, and 8 as one sequence rather than three separate problems, and check with your judges how the scoring overlaps.
{{< /callout >}}

{{< checklist >}}
- key: p3_m8_base
  label: "Pallet and Large Red Cube are both on the Loading Dock"
- key: p3_m8_bonus
  label: "A Small Red Cube is on top of the Large Red Cube up there"
{{< /checklist >}}

{{< short-answer key="p3_m8_harder" label="M8 harder part" prompt="Which was harder --- driving to the dock, or getting the pallet onto it?" >}}

### Step 9 --- Run it five times

{{< gridtable >}}
columns:
- head: "Run"
- head: "M9 bonus"
- head: "M18 base"
- head: "M8 base"
- head: "M8 bonus"
- head: "Points"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_r1_m9
        aria: "R1 M9"
      - key: p3_r1_m18
        aria: "R1 M18"
      - key: p3_r1_m8b
        aria: "R1 M8 base"
      - key: p3_r1_m8bo
        aria: "R1 M8 bonus"
      - key: p3_r1_pts
        aria: "R1 points"
  - class: trial
    cells:
      - text: "2"
      - key: p3_r2_m9
        aria: "R2 M9"
      - key: p3_r2_m18
        aria: "R2 M18"
      - key: p3_r2_m8b
        aria: "R2 M8 base"
      - key: p3_r2_m8bo
        aria: "R2 M8 bonus"
      - key: p3_r2_pts
        aria: "R2 points"
  - class: trial
    cells:
      - text: "3"
      - key: p3_r3_m9
        aria: "R3 M9"
      - key: p3_r3_m18
        aria: "R3 M18"
      - key: p3_r3_m8b
        aria: "R3 M8 base"
      - key: p3_r3_m8bo
        aria: "R3 M8 bonus"
      - key: p3_r3_pts
        aria: "R3 points"
  - class: trial
    cells:
      - text: "4"
      - key: p3_r4_m9
        aria: "R4 M9"
      - key: p3_r4_m18
        aria: "R4 M18"
      - key: p3_r4_m8b
        aria: "R4 M8 base"
      - key: p3_r4_m8bo
        aria: "R4 M8 bonus"
      - key: p3_r4_pts
        aria: "R4 points"
  - class: trial
    cells:
      - text: "5"
      - key: p3_r5_m9
        aria: "R5 M9"
      - key: p3_r5_m18
        aria: "R5 M18"
      - key: p3_r5_m8b
        aria: "R5 M8 base"
      - key: p3_r5_m8bo
        aria: "R5 M8 bonus"
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
      - text: "Mission 9 --- Bonus (Botguy out and on the floor)"
      - key: p4_s_m9
        aria: "Score M9"
      - text: "9"
  - cells:
      - text: "Mission 18 --- Base (Botguy in the Loading Zone)"
      - key: p4_s_m18
        aria: "Score M18"
      - text: "11"
  - cells:
      - text: "Mission 8 --- Base (pallet + cube on the dock)"
      - key: p4_s_m8b
        aria: "Score M8 base"
      - text: "11"
  - cells:
      - text: "Mission 8 --- Bonus (small red cube on top up there)"
      - key: p4_s_m8bo
        aria: "Score M8 bonus"
      - text: "9"
  - class: total
    cells:
      - text: "My total"
      - key: p4_total
        aria: "Total"
      - text: "40"
{{< /gridtable >}}

### My measuring card

These join your motor card. Every precise move from here on uses them.
{.muted}

{{< gridtable >}}
columns:
- head: "Measurement"
- head: "Value"
rows:
  - cells:
      - text: "Degrees per inch"
      - key: p4_dpi
        aria: "Degrees per inch"
  - cells:
      - text: "Turning speed I use"
      - key: p4_turn_speed
        aria: "Turn speed"
  - cells:
      - text: "My turn overshoot at that speed"
      - key: p4_yaw_ov
        aria: "Turn overshoot"
  - cells:
      - text: "Hexagon number for a 90° right turn"
      - key: p4_hex_90
        aria: "Hex for 90"
  - cells:
      - text: "Hexagon number for a 90° left turn"
      - key: p4_hex_90l
        aria: "Hex for left 90"
  - cells:
      - text: "Inches from my starting box to the loading dock"
      - key: p4_in_dock
        aria: "Inches to dock"
{{< /gridtable >}}

### Write the check

{{< gridtable >}}
columns:
- head: "I want the robot to..."
- head: "The wait-until hexagon says"
rows:
  - class: trial
    cells:
      - text: "Spin right until it has turned past 45°"
      - key: p4_wc_1
        aria: "Check one"
  - class: trial
    cells:
      - text: "Spin left until it has turned past 90° the other way"
      - key: p4_wc_2
        aria: "Check two"
  - class: trial
    cells:
      - text: "Drive until the left wheel has rolled 8 inches, using my DPI"
      - key: p4_wc_3
        aria: "Check three"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_read
  label: "I can read a wheel's degree count and the angle live in the app"
- key: p4_can_dpi
  label: "I can work out my robot's degrees per inch and convert a distance"
- key: p4_can_reset
  label: "I always reset the angle before I start counting a turn"
- key: p4_can_ov
  label: "I measure my overshoot and subtract it from my target"
- key: p4_can_dir
  label: "I use > turning right and < turning left, and I check it before running"
- key: p4_can_90
  label: "I can make a repeatable 90° turn by feel instead of by wheel count"
- key: p4_can_square
  label: "My square closes"
{{< /checklist >}}

### Think about it

{{< ask key="p4_battery" label="Battery question" >}}Your battery is half flat, so the robot turns slower. What happens to a turn tuned by wheel degrees in Project 5? What happens to a turn that waits for the angle?{{< /ask >}}

{{< ask key="p4_wheels_vs_robot" label="Wheels versus robot" >}}Wheel degrees tell you how far the *wheels turned* --- not how far the robot moved. Name a situation where those two are different.{{< /ask >}}

{{< ask key="p4_rather" label="What you would rather do" >}}You have now built the reset-spin-wait-stop turn several times, in several projects. What would you rather do than keep rebuilding it?{{< /ask >}}

### Next

You have a robot that can measure. You also have a program that says the same twenty lines over and over.

In **Project 12 --- Teaching Your Robot New Moves**, you give that whole stack a name --- and then you just say the name.
