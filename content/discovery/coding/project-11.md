---
title: "Coding Project 11 — Counting Wheel Ticks"
short_title: "Coding Project 11"
linkTitle: "Counting Wheel Ticks"
description: "Point the same loop at a number. Ticks per inch, correcting for overshoot, turns by count — and the square from Project 5 finally closes."
weight: 11
nav: discovery
mission_id: discovery_coding_11
mission_title: "Coding Project 11 — Counting Wheel Ticks"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 11
strand: coding
phase: "Phase 4 · Make It Reliable"
phase_order: 4
time: "One class period"
eyebrow: "Discovery · Coding Project 11"
heading: "Counting Wheel Ticks"
subheading: "Same loop as last time — but now it watches a number instead of a switch."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Counting Wheel Ticks"
mission_label: "Missions 9 · 8 · 18 — 40 points"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: Project
    definition: "Coding Project 11"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Make It Reliable"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Reading the counter built into every motor, driving exact distances instead of guessing with time, and delivering freight to the loading dock."
  - term: "Mission Anchor"
    definition: "[[@9:bonus|Mission 9]] bonus · [[@8:base|Mission 8]] · [[@18:base|Mission 18]] base — 40 points"
  - term: "Before You Start"
    definition: "Project 10 — you must be comfortable writing a `while` loop and know where `ao()` goes."
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
        label: "A ruler or tape measure"
      - key: need_6
        label: "Your Project 5 turn numbers"
---

## Try It --- The Counter Was Always There

Back in Project 3 you dragged the slider on the Motors screen and noticed a number changing next to each [[PORT|port]]. You were told to remember it. Here it is.

Open the **Motors** screen on the Wombat. Do not run anything --- just turn a wheel with your hand and watch.

{{< figrow >}}
- src: botui/motor_widget_counter.png
  alt: "The motor widget on the Wombat showing the motor counter"
  caption: "The motor widget on the Wombat showing the motor counter."
{{< /figrow >}}
{{< gridtable >}}
columns:
- head: Question
- head: "What I saw"
  aria: "Rolling forward"
rows:
  - cells:
      - text: "What happens to the number when I roll the wheel forward?"
      - key: p1_forward
        aria: "Rolling forward"
  - cells:
      - text: "What happens when I roll it backward?"
      - key: p1_backward
        aria: "Rolling backward"
  - cells:
      - text: "What happens if I roll it backward past where I started?"
      - key: p1_past_zero
        aria: "Past zero"
{{< /gridtable >}}
{{< callout title="Every Motor Has Been Counting This Whole Time" variant="gold" >}}
Since Project 3, your motors have been keeping track of exactly how far they turned. You just didn't know how to ask them.
{{< /callout >}}

### Find your ticks per inch

[[TICK|Ticks]] are the motor's own unit. To use them you need to know how many make an inch on *your* robot.

- Put the robot on the floor and mark where the front edge sits.
- Clear the counter on the Motors screen.
- Push the robot straight forward exactly **24 inches**. Slowly, and in a straight line.
- Read the counter.

{{< gridtable >}}
columns:
- head: Try
- head: "Ticks for 24 inches"
  aria: "Ticks try 1"
- head: "Ticks per inch (divide by 24)"
  aria: "TPI 1"
rows:
  - cells:
      - text: 1
      - key: p1_tpi_t1
        aria: "Ticks try 1"
      - key: p1_tpi_c1
        aria: "TPI 1"
  - cells:
      - text: 2
      - key: p1_tpi_t2
        aria: "Ticks try 2"
      - key: p1_tpi_c2
        aria: "TPI 2"
  - cells:
      - text: 3
      - key: p1_tpi_t3
        aria: "Ticks try 3"
      - key: p1_tpi_c3
        aria: "TPI 3"
  - cells:
      - text: Average
      - text: "---"
      - key: p1_tpi_avg
        aria: "Average TPI"
{{< /gridtable >}}
{{< safety title="⚠ Measure Long, Not Short" >}}
Use 24 inches, not 3. A small error in a short push turns into a big error per inch. Anything under about a foot is not worth measuring.
{{< /safety >}}

{{< ask key="p1_why_differ" label="Why measurements differ" >}}Your three numbers are not identical. Why not --- and which one should you use?{{< /ask >}}

## Learn It --- A Number Instead of a Switch

A tick is one small step of the motor shaft. There are about **1820 ticks in one full revolution** of the shaft.

{{< callout title="Wheel Size Does Not Change the Ticks" variant="navy" >}}
1820 ticks is one turn of the *motor shaft*, no matter what wheel you bolt to it. But a bigger wheel travels further in that one turn --- which is exactly why your ticks-per-inch is yours and not somebody else's.
{{< /callout >}}

### Two commands

| Code / part | What it means |
| --- | --- |
| `clear_motor_position_counter(0);` | Sets the counter for port 0 back to zero. Short name: `cmpc(0)`. |
| `get_motor_position_counter(0);` | Gives you the number of ticks that motor has turned. Short name: `gmpc(0)`. |

Both names do the same thing. The short ones are quicker to type and you will see both in other people's code.
{.muted}

### The same loop you already know

Look at these two side by side. Only the [[CONDITION|condition]] changed.

**Project 10 --- a switch**

```c
while (digital(bump) == 0)
{
    motor(left, 50);
    motor(right, 50);
}
motor(0, 0);
motor(3, 0);
msleep(30);
```

**Project 11 --- a number**

```c
while (gmpc(left) < 4000)
{
    motor(left, 50);
    motor(right, 50);
}
motor(0, 0);
motor(3, 0);
msleep(30);
```

Read the new one out loud: *"While the left motor has turned fewer than 4000 ticks, keep driving. The moment it reaches 4000, stop."*

{{< callout title="Why This Is Better Than a Wall" variant="gold" >}}
A touch [[SENSOR|sensor]] only helps where there is something to touch. A tick counter works **anywhere on the field** --- open floor, mid-turn, anywhere. Your robot finally has a way to know how far it has gone without hitting something.
{{< /callout >}}

Always clear before you count:

```c
// Start counting from zero
cmpc(left);

while (gmpc(left) < 4000)
{
    motor(left, 50);
    motor(right, 50);
}

motor(0, 0);
motor(3, 0);
msleep(30);
// Let it settle
msleep(500);
```

### It will go too far. Every time.

Run that program with a target of 4000 and then check the Motors screen. You will not see 4000. You will see something like **4310**.

Nothing is broken. Your robot has [[INERTIA|inertia]] --- it is moving, and when the loop shuts the motors off it keeps coasting.

{{< callout title="The Fix Is Subtraction" variant="navy" >}}
Ask for 4000. Get 4310. The [[OVERSHOOT|overshoot]] is **4310 − 4000 = 310**.

So ask for **4000 − 310 = 3690** instead, and you will land on 4000.

Every robot has its own overshoot. Faster power means more of it.
{{< /callout >}}

### Going backward makes the number go down

Driving in reverse decreases the counter, and it will go negative. That gives you two ways to come home.

**Do not clear --- count back to 0**

```c
cmpc(left);
// Drive Out
while (gmpc(left) < 4000) {
	motor(0, 0);
	motor(3, 0);
	msleep(500);
}

// Drive Home
while (gmpc(left) > 0) {
	motor(0, 0);
	motor(3, 0);
	msleep(30);
}
```

**Clear again --- count to −4000**

```c
cmpc(left);
// Drive Out
while (gmpc(left) < 4000) {
	motor(0, 0);
	motor(3, 0);
	msleep(500);
}

cmpc(left);
// Drive Home
while (gmpc(left) > -4000) {
	motor(0, 0);
	motor(3, 0);
	msleep(30);
}
```

Both work. The first one always returns to where it started, no matter how far out it went. The second one always travels the same distance back. Those are not the same thing, and one day the difference will matter.
{.muted}

{{< safety title="⚠ Get the Direction Right or the Loop Never Ends" >}}
Driving backward with `while (gmpc(left) < 4000)` is a loop that can never finish --- the number is going down, away from 4000, forever.

Going forward, count **up** with `<`. Going backward, count **down** with `>`. Check this before every run.
{{< /safety >}}

## Do It --- Drive by the Numbers

### Step 1 --- Measure your overshoot

Create a new project called `Ticks`. Clear, drive to 4000 ticks, stop. Then check the Motors screen for what you actually got.

{{< gridtable >}}
columns:
- head: Power
- head: "Asked for"
- head: "Actually got"
  aria: "Got at 30"
- head: Overshoot
  aria: "Overshoot at 30"
rows:
  - cells:
      - text: 30
      - text: 4000
      - key: p3_over30_got
        aria: "Got at 30"
      - key: p3_over30
        aria: "Overshoot at 30"
  - cells:
      - text: 50
      - text: 4000
      - key: p3_over50_got
        aria: "Got at 50"
      - key: p3_over50
        aria: "Overshoot at 50"
  - cells:
      - text: 100
      - text: 4000
      - key: p3_over100_got
        aria: "Got at 100"
      - key: p3_over100
        aria: "Overshoot at 100"
{{< /gridtable >}}
{{< ask key="p3_power_overshoot" label="Power and overshoot" >}}What is the relationship between power and overshoot?{{< /ask >}}

{{< short-answer key="p3_chosen_power" label="Chosen power" prompt="Which power will you use for the rest of this project, and why?" >}}

### Step 2 --- Correct for it

Subtract your overshoot from your target and run again. Keep adjusting until the robot lands on 4000.

{{< gridtable >}}
columns:
- head: Try
- head: "Target in my code"
  aria: "Correction target 1"
- head: "Where it actually stopped"
  aria: "Correction actual 1"
rows:
  - cells:
      - text: 1
      - key: p3_c1_target
        aria: "Correction target 1"
      - key: p3_c1_actual
        aria: "Correction actual 1"
  - cells:
      - text: 2
      - key: p3_c2_target
        aria: "Correction target 2"
      - key: p3_c2_actual
        aria: "Correction actual 2"
  - cells:
      - text: 3
      - key: p3_c3_target
        aria: "Correction target 3"
      - key: p3_c3_actual
        aria: "Correction actual 3"
{{< /gridtable >}}
{{< checklist >}}
- key: p3_corrected
  label: "My robot lands within about 50 ticks of where I asked"
{{< /checklist >}}

### Step 3 --- Drive a real distance

Use your ticks-per-inch from Try It. Work out the ticks for each distance, then test it with a ruler.

{{< gridtable >}}
columns:
- head: "I want"
- head: "Ticks (inches × TPI)"
  aria: "6 inch ticks"
- head: "How far it really went"
  aria: "6 inch actual"
rows:
  - cells:
      - text: "6 inches"
      - key: p3_d6_ticks
        aria: "6 inch ticks"
      - key: p3_d6_actual
        aria: "6 inch actual"
  - cells:
      - text: "12 inches"
      - key: p3_d12_ticks
        aria: "12 inch ticks"
      - key: p3_d12_actual
        aria: "12 inch actual"
  - cells:
      - text: "24 inches"
      - key: p3_d24_ticks
        aria: "24 inch ticks"
      - key: p3_d24_actual
        aria: "24 inch actual"
{{< /gridtable >}}
{{< ask key="p3_least_accurate" label="Least accurate distance" >}}Which distance was least accurate? Why do you think that is?{{< /ask >}}

### Step 4 --- Out and back

Drive out 4000 ticks, stop and settle, then return to exactly where you started. Use whichever of the two methods from Learn It you prefer.

{{< short-answer key="p3_which_method" label="Which return method" prompt="Which method did you use, and why that one?" >}}

{{< checklist >}}
- key: p3_out_back
  label: "My robot returns to its starting mark"
{{< /checklist >}}
Compare this to Project 4, where you did the same thing with a stopwatch. Notice how much less tuning it took.
{.muted}

### Step 5 --- Turn by ticks

Create a new project called `Right Turn`. [[ZERO RADIUS TURN|Zero radius turn]] --- one wheel forward, one back, same speed --- but this time stop it by counting ticks instead of by time.

```c
cmpc(left);

while (gmpc(left) < turnTicks)
{
    motor(left, 50);
    motor(right, -50);
}
motor(0, 0);
motor(3, 0);
msleep(30);
```

{{< gridtable >}}
columns:
- head: Try
- head: Ticks
  aria: "Turn try 1"
- head: "Too far, not far enough, or right?"
  aria: "Turn result 1"
rows:
  - cells:
      - text: 1
      - key: p3_t1_ticks
        aria: "Turn try 1"
      - key: p3_t1_res
        aria: "Turn result 1"
  - cells:
      - text: 2
      - key: p3_t2_ticks
        aria: "Turn try 2"
      - key: p3_t2_res
        aria: "Turn result 2"
  - cells:
      - text: 3
      - key: p3_t3_ticks
        aria: "Turn try 3"
      - key: p3_t3_res
        aria: "Turn result 3"
  - cells:
      - text: 4
      - key: p3_t4_ticks
        aria: "Turn try 4"
      - key: p3_t4_res
        aria: "Turn result 4"
{{< /gridtable >}}

### Step 6 --- The square, again

In Project 5 you drove a square with four timed turns and it did not close. Do it again --- same square, but every distance and every turn counted in ticks.

{{< gridtable >}}
columns:
- head: Question
- head: "Project 5 (time)"
  aria: "Old square position"
- head: "Now (ticks)"
  aria: "New square position"
rows:
  - cells:
      - text: "How close to the starting spot?"
      - key: p3_sq_old_pos
        aria: "Old square position"
      - key: p3_sq_new_pos
        aria: "New square position"
  - cells:
      - text: "Facing the same way?"
      - key: p3_sq_old_face
        aria: "Old square facing"
      - key: p3_sq_new_face
        aria: "New square facing"
{{< /gridtable >}}
{{< callout title="This Is the Whole Point of the Project" variant="gold" >}}
Same robot. Same square. The only thing that changed is *what the robot was measuring* --- and suddenly it can come back to where it started.
{{< /callout >}}

{{< ask key="p3_no_drift" label="Why no drift" >}}Your timed square drifted a little more with every corner. Why does a tick-counted square not do that?{{< /ask >}}

### Step 7 --- Mission 9 Bonus --- get Botguy out for 9 points

{{< mission-summary mission="9" video=true >}}
{{< /mission-summary >}}
{{< score-examples >}}
scores:
  - "Botguy is completely outside the [[ENCLOSURE|enclosure]] and [[TOUCHING]] the warehouse floor."
  - "Botguy is touching the floor **while being held by a robot**."
does_not_score:
  - "Botguy touches the floor but is still touching the enclosure."
  - "Botguy is out of the enclosure but not touching the floor."
{{< /score-examples >}}
Your claw can still be holding him. He just has to be clear of the enclosure and down on the floor at the same instant.
{.muted}

{{< checklist >}}
- key: p3_m9_bonus
  label: "Botguy is out of the enclosure and touching the floor"
{{< /checklist >}}

### Step 8 --- Mission 18 Base --- take him to the loading zone for 11 points

{{< mission-summary mission="18" video=true >}}
{{< /mission-summary >}}
{{< callout title="One Trip, Two Missions, Twenty Points" variant="gold" >}}
You just lifted Botguy out of the enclosure for Mission 9. Do not put him down --- **carry him to the Loading Zone** and Mission 18's base scores too.

This is exactly the kind of thing to look for when you plan a full match: one action, more than one mission.
{{< /callout >}}

Mission 18 is final position, so Botguy has to still be [[IN THE ZONE]] when the match ends. Set him down properly and back straight away.
{.muted}

{{< short-answer key="p3_ticks_to_zone" label="Ticks to loading zone" prompt="Roughly how many ticks is it from the enclosure to the loading zone?" >}}

{{< checklist >}}
- key: p3_m18_base
  label: "Botguy is [[IN]] the Loading Zone and stays there"
{{< /checklist >}}

### Step 9 --- Mission 8 --- deliver the red cube for 20 points

{{< mission-summary mission="8" video=true >}}
{{< /mission-summary >}}
{{< safety title="⚠ The Pallet and the Cube Travel Together" >}}
Read the failures carefully. **The Large Red Cube on the Loading Dock without the pallet does not score.** Neither does a pallet on the dock with the cube fallen off.

They both have to end up there, cube on pallet, pallet on dock.
{{< /safety >}}

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

### Step 10 --- Run it five times

{{< gridtable >}}
columns:
- head: Run
- head: "M9 bonus"
  aria: "R1 M9"
- head: "M18 base"
  aria: "R1 M18"
- head: "M8 base"
  aria: "R1 M8 base"
- head: "M8 bonus"
  aria: "R1 M8 bonus"
- head: Points
  aria: "R1 points"
rows:
  - cells:
      - text: 1
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
  - cells:
      - text: 2
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
  - cells:
      - text: 3
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
  - cells:
      - text: 4
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
  - cells:
      - text: 5
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
- head: Scored?
  aria: "Score M9"
- head: Points
rows:
  - cells:
      - text: "Mission 9 --- Bonus (Botguy out and on the floor)"
      - key: p4_s_m9
        aria: "Score M9"
      - text: 9
  - cells:
      - text: "Mission 18 --- Base (Botguy in the Loading Zone)"
      - key: p4_s_m18
        aria: "Score M18"
      - text: 11
  - cells:
      - text: "Mission 8 --- Base (pallet + cube on the dock)"
      - key: p4_s_m8b
        aria: "Score M8 base"
      - text: 11
  - cells:
      - text: "Mission 8 --- Bonus (small red cube on top up there)"
      - key: p4_s_m8bo
        aria: "Score M8 bonus"
      - text: 9
  - cells:
      - text: "My total"
      - key: p4_total
        aria: Total
      - text: 40
{{< /gridtable >}}

### My tick card

These replace every timing number you have been carrying since Project 4.
{.muted}

{{< gridtable >}}
columns:
- head: Measurement
- head: Value
  aria: TPI
rows:
  - cells:
      - text: "Ticks per inch"
      - key: p4_tpi
        aria: TPI
  - cells:
      - text: "Driving power I use"
      - key: p4_power
        aria: Power
  - cells:
      - text: "My overshoot at that power"
      - key: p4_overshoot
        aria: Overshoot
  - cells:
      - text: "Ticks for a 90° turn"
      - key: p4_ticks90
        aria: "Ticks 90"
  - cells:
      - text: "Ticks for a 180° turn"
      - key: p4_ticks180
        aria: "Ticks 180"
  - cells:
      - text: "Ticks from my starting box to the loading dock"
      - key: p4_ticks_dock
        aria: "Ticks to dock"
{{< /gridtable >}}

### Write the condition

{{< gridtable >}}
columns:
- head: "I want the robot to..."
- head: "The condition is"
  aria: "Condition forward"
rows:
  - cells:
      - text: "Drive forward until it has turned 2500 ticks"
      - key: p4_cond_fwd
        aria: "Condition forward"
  - cells:
      - text: "Drive backward until it is back at zero"
      - key: p4_cond_back
        aria: "Condition back"
  - cells:
      - text: "Drive forward 8 inches, using my ticks per inch"
      - key: p4_cond_inches
        aria: "Condition inches"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_read
  label: "I can read a motor's position counter on the Wombat screen"
- key: p4_can_tpi
  label: "I can work out my robot's ticks per inch and convert a distance into ticks"
- key: p4_can_clear
  label: "I always clear the counter before I start counting"
- key: p4_can_overshoot
  label: "I measure my overshoot and subtract it from my target"
- key: p4_can_direction
  label: "I use `<` going forward and `>` going backward, and I check it before running"
- key: p4_can_turn
  label: "I can make a repeatable 90° turn using ticks instead of time"
- key: p4_can_close
  label: "My square closes"
{{< /checklist >}}

### Think about it

{{< ask key="p4_low_battery" label="Low battery" >}}Your battery is half flat, so the robot drives slower. What happens to a run built on `msleep()`? What happens to a run built on ticks?{{< /ask >}}

{{< ask key="p4_wheels_vs_robot" label="Wheels vs robot" >}}Ticks tell you how far the *wheels turned* --- not how far the robot moved. Name a situation where those two are different.{{< /ask >}}

{{< ask key="p4_rather_do" label="Rather do" >}}You have now written the drive-a-set-distance code and the turn-90° code several times each, in several projects. What would you rather do than keep retyping them?{{< /ask >}}

### Next

You have a robot that can measure. You also have a program that says the same twenty lines over and over.

In **Project 12 --- Teaching Your Robot New Moves**, you give those twenty lines a name --- and then you just say the name.

KIPR · Botball Explorer --- Discovery Projects · © KISS Institute for Practical Robotics 1997--2026
