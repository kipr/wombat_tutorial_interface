---
title: "Coding Project 14 — Seeing Light and Dark"
short_title: "Coding Project 14"
linkTitle: "Seeing Light and Dark"
description: "A sensor that answers with a number. Find your own threshold, drive until the line, start on a light — then place Botguy and both cones exactly inside the zone."
weight: 14
nav: discovery
mission_id: discovery_coding_14
mission_title: "Coding Project 14 — Seeing Light and Dark"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 14
strand: coding
phase: "Phase 5 · Make It Smart"
phase_order: 5
time: "One class period"
eyebrow: "Discovery · Coding Project 14"
heading: "Seeing Light and Dark"
subheading: "A sensor that answers with a number, not a yes."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Seeing Light and Dark"
mission_label: "Missions 14 · 18 — 35 points"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: Project
    definition: "Coding Project 14"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Make It Smart"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Reading a [[SENSOR|sensor]] that measures brightness, choosing your own decision point, and using the black line to place things exactly inside the Loading Zone."
  - term: "Mission Anchor"
    definition: "[[@14:bonus|Mission 14]] bonus · [[@18:bonus|Mission 18]] bonus + advanced — 35 points"
  - term: "Before You Start"
    definition: "Projects 10, 11, and 13 — loops, [[TICK|ticks]], and `if` [[STATEMENT|statements]]."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Robot with arm and claw"
      - key: need_2
        label: "[[REFLECTANCE|reflectance]] (tophat) [[SENSOR|sensor]]"
      - key: need_3
        label: "Light sensor"
      - key: need_4
        label: Wombat
      - key: need_5
        label: "Charged battery"
      - key: need_6
        label: "The game field"
---

## Try It --- How Dark Is It?

Your touch sensor answers one question: *am I [[TOUCHING]] something?* Yes or no. Nothing else.

This one is different. Plug the [[REFLECTANCE|reflectance]] sensor --- the little one, sometimes called a tophat --- into an **[[ANALOG|analog]]** [[PORT|port]]. Then open the Sensor List on the Wombat and watch the number while you hold it over things.

{{< figrow >}}
- src: kit/2smalltophat.jpg
  alt: "The reflectance (tophat) sensor."
{{< /figrow >}}

{{< safety title="⚠ Hold It About a Quarter Inch Up" >}}
Pointed straight down, roughly 1/4 inch off the surface. [[TOUCHING]] the surface or held way up both give you useless numbers.
{{< /safety >}}

{{< gridtable >}}
columns:
- head: "Held over..."
- head: Reading
  aria: "White reading"
rows:
  - cells:
      - text: "The white part of the game field"
      - key: p1_v_white
        aria: "White reading"
  - cells:
      - text: "A black line on the field"
      - key: p1_v_black
        aria: "Black reading"
  - cells:
      - text: "Your desk"
      - key: p1_v_desk
        aria: "Desk reading"
  - cells:
      - text: "Your hand"
      - key: p1_v_hand
        aria: "Hand reading"
  - cells:
      - text: "Something dark you find in the room"
      - key: p1_v_dark
        aria: "Dark object reading"
  - cells:
      - text: "Something light you find in the room"
      - key: p1_v_light
        aria: "Light object reading"
{{< /gridtable >}}
{{< short-answer key="p1_which_bigger" label="Which is bigger" prompt="Which gives the bigger number --- dark surfaces or light ones?" >}}

{{< ask key="p1_why" label="Why the numbers" >}}The sensor shines a tiny light down and measures how much bounces back. Use that to explain why the numbers came out the way they did.{{< /ask >}}

{{< callout title="There Is No \"Black\" Reading" variant="gold" >}}
You did not get a yes or a no. You got a number somewhere in a big range, and it drifts a little every time you look.

So *you* have to decide where black starts. The sensor will not do it for you.
{{< /callout >}}

## Learn It --- Pick Your Own Dividing Line

{{< figrow >}}
- src: kit/analogsensors.jpg
  alt: "Analog sensors --- reflectance, light, and the ET rangefinder."
{{< /figrow >}}
An analog sensor reports a value across a wide range instead of just 0 or 1.

- Values around 1000: white, lots of light bounced back.
- Values around 3000: black, most light absorbed

Your numbers may not match anyone else's. Different sensor, different mounting height, different room lighting.

### Your threshold

A [[THRESHOLD|threshold]] is the number you pick as the dividing line. Below it, call it white. Above it, call it black.

The usual starting point is halfway between your two readings:

{{< figrow >}}
- src: threshold.svg
  alt: "Finding your threshold"
{{< /figrow >}}


```c
threshold = (white + black) / 2

// For example: (800 + 3500) / 2 = 2150
```

That is a starting guess, not a final answer. You will adjust it.

### Reading it in code

| Code / part | What it means |
| --- | --- |
| `analog(1);` | Gives you the number from the analog sensor in port 1. Compare it against your threshold to decide what the robot is looking at. |

### Your third kind of loop condition

The loop has not changed at all. Only the [[CONDITION|condition]] it watches.

**Switch**

In project 10, you watched a switch with two possible values.

```c
while (digital(bump) == 0)
{
	drive();
}
```


**Count**

In project 11, you watched a motor position counter that climbed steadily.

```c
while (gmpc(left) < 4000)
{
	drive();
}
```

**Now, watch a brightness**

Now, you are watching a brightness number that jumps around.

```c
while (analog(line) < threshold)
{
	drive();
}
```

Read the new one out loud: *"While the sensor is seeing something lighter than my threshold, keep driving. The moment it sees something darker, stop."*

{{< callout title="When It Does Not Work, Move the Threshold" variant="navy" >}}
**Stops too early, before reaching black?** Your threshold is too low. Move it up, toward your black value.

**Drives straight over the line and keeps going?** Your threshold is too high. Move it down, toward your white value.

Also check the position of the sensor: is the sensor pointed straight down, about a quarter inch off the surface?
{{< /callout >}}

### Starting on a light

The light sensor does one job, and it is the job every Botball robot needs: it waits for the lights to come on, then starts the match.

```c
// Wait for light on port 3, then continue
wait_for_light(3);
```

- You do not have to mount it on the robot.
- It runs its own [[CALIBRATION|calibration]] routine on screen --- follow the steps it gives you.
- Call it near the very top of your program.
- Any **moderately powerful flashlight** should work with the light sensor, including a phone flashlight. Point the light at the sensor and watch the reading change.
- More light means a *lower* reading, which is the opposite of what most people guess.

## Do It --- Find the Line, Then Use It

### Step 1 --- Mount it and set your threshold

Fix the reflectance sensor to the front underside of your robot, pointing straight down, about 1/4 inch clear of the mat. Then take fresh readings from the mounted position --- they will not match what you got holding it in your hand.

{{< gridtable >}}
columns:
- head: Measurement
- head: Value
  aria: "Analog port"
rows:
  - cells:
      - text: "Analog port I used"
      - key: p3_port
        aria: "Analog port"
  - cells:
      - text: "White reading, mounted"
      - key: p3_white
        aria: "White mounted"
  - cells:
      - text: "Black reading, mounted"
      - key: p3_black
        aria: "Black mounted"
  - cells:
      - text: "My threshold --- (white + black) / 2"
      - key: p3_threshold
        aria: Threshold
{{< /gridtable >}}

### Step 2 --- Find the Line

Create a new project called `Find the Line`. Drive forward until the sensor sees black, then stop.

```c
// 1. Print "Looking for the black line"
// 2. While the sensor reads less than my threshold, drive forward
// 3. Fall out of the loop when it reads more than the threshold
// 4. Stop everything
```

Use [[VARIABLE|variables]] for your motors and your threshold --- you have known better than bare numbers since Project 9.

{{< gridtable >}}
columns:
- head: Try
- head: Threshold
  aria: "Try 1 threshold"
- head: "What happened"
  aria: "Try 1 result"
rows:
  - cells:
      - text: 1
      - key: p3_t1_th
        aria: "Try 1 threshold"
      - key: p3_t1_res
        aria: "Try 1 result"
  - cells:
      - text: 2
      - key: p3_t2_th
        aria: "Try 2 threshold"
      - key: p3_t2_res
        aria: "Try 2 result"
  - cells:
      - text: 3
      - key: p3_t3_th
        aria: "Try 3 threshold"
      - key: p3_t3_res
        aria: "Try 3 result"
{{< /gridtable >}}
{{< checklist >}}
- key: p3_finds_line
  label: "My robot stops on the black line"
{{< /checklist >}}

### Step 3 --- Three lines, three distances

The real test of a threshold is whether it works when you did not tune it for that exact spot.

Set your robot at three different distances from a line and run the same program each time, changing nothing.

{{< gridtable >}}
columns:
- head: "Starting distance"
  aria: "Line 1 distance"
- head: "Did it stop on the line?"
  aria: "Line 1 result"
rows:
  - cells:
      - key: p3_l1_dist
        aria: "Line 1 distance"
      - key: p3_l1_res
        aria: "Line 1 result"
  - cells:
      - key: p3_l2_dist
        aria: "Line 2 distance"
      - key: p3_l2_res
        aria: "Line 2 result"
  - cells:
      - key: p3_l3_dist
        aria: "Line 3 distance"
      - key: p3_l3_res
        aria: "Line 3 result"
{{< /gridtable >}}
{{< callout title="This Is Something Ticks Cannot Do" variant="gold" >}}
A [[TICK|tick]] count only works from a known starting point. This program finds the line from *anywhere* --- it does not care where it began.
{{< /callout >}}

### Step 4 --- Drive to black, back up to black

Now do it twice in a row. Drive forward to a line, stop, then reverse until you find a line again.

{{< safety title="⚠ Think Before You Write This One" >}}
When the robot stops, it is *sitting on black*. If you immediately start a loop that says "back up while you see white," what does the sensor see on the very first check?
{{< /safety >}}

{{< ask key="p3_off_first_line" label="Getting off the line" >}}What did you have to do to get off the first line before looking for the next one?{{< /ask >}}

{{< checklist >}}
- key: p3_two_lines
  label: "My robot finds a line going forward and another going backward"
{{< /checklist >}}

### Step 5 --- Start on a light

Add `wait_for_light()` to the top of a program and follow the calibration routine on the Wombat's screen.

Now your robot sits still until someone shines a light at it.

{{< checklist >}}
- key: p3_light_start
  label: "My robot waits for a light before it runs"
{{< /checklist >}}
{{< ask key="p3_why_light" label="Why light start" >}}Why would every robot at a tournament need to start this way, rather than someone pressing a button on each one?{{< /ask >}}

### Step 6 --- Mission 14 Bonus --- A cone [[IN THE ZONE]] · 7 pts

{{< mission-summary mission="14" video=true >}}
{{< /mission-summary >}}
{{< safety title="⚠ The Base Still Has to Hold" >}}
You cannot score this bonus unless **both** cones are [[OFF]] the black line --- including the one you left behind. If your second cone drifted back onto the line, the bonus is worth nothing.
{{< /safety >}}

Use your line-finding program to drive to the Loading Zone [[BOUNDARY|boundary]], then place the cone.

{{< checklist >}}
- key: p3_m14_bonus
  label: "A cone is [[IN]] the Loading Zone and the other is still [[OFF]] the line"
{{< /checklist >}}

### Step 7 --- Mission 18 --- Botguy and both cones for 28 points

{{< mission-summary mission="18" video=true >}}
{{< /mission-summary >}}
{{< safety title="⚠ [[IN]] and [[FULLY WITHIN]] Are Not the Same Thing" >}}
Mission 14's bonus only needs a cone **[[IN]]** the zone --- any part of it poking into the interior counts.

Mission 18 needs the cones **[[FULLY WITHIN]]** --- every single part inside, nothing touching or crossing the boundary.

A cone half over the line scores Mission 14 and *nothing* from Mission 18. This is exactly why you need the sensor: it tells you where the boundary actually is.
{{< /safety >}}

{{< score-examples >}}
scores:
  - "Botguy and one cone [[FULLY WITHIN]] the zone."
  - "Botguy and both cones [[FULLY WITHIN]] the zone."
  - "Botguy and the cones do not have to touch each other."
does_not_score:
  - "A cone is [[IN THE ZONE]] but Botguy is not."
  - "Botguy touching only the outside boundary of the zone."
  - "Botguy and only one cone, for the Advanced Bonus."
{{< /score-examples >}}
{{< callout title="One Delivery, Three Scores" variant="gold" >}}
Put Botguy and **both** cones fully inside the Loading Zone and you collect Mission 14's bonus, Mission 18's bonus, and Mission 18's advanced --- 35 points from one trip pattern.

Every part of this is final position, so nothing may drift out before the match ends.
{{< /callout >}}

{{< ask key="p3_delivery_order" label="Delivery order" >}}Which order will you deliver them in, and why that order?{{< /ask >}}

{{< checklist >}}
- key: p3_m18_botguy
  label: "Botguy is [[IN]] the Loading Zone"
- key: p3_m18_cone1
  label: "One cone is [[FULLY WITHIN]] --- no part over the boundary"
- key: p3_m18_cone2
  label: "The second cone is [[FULLY WITHIN]] too"
- key: p3_m18_nothing_moved
  label: "Nothing got knocked out while placing the last one"
{{< /checklist >}}

### Step 8 --- Run it five times

{{< gridtable >}}
columns:
- head: Run
- head: "M14 bonus"
  aria: "R1 M14"
- head: "M18 bonus"
  aria: "R1 M18 bonus"
- head: "M18 advanced"
  aria: "R1 M18 adv"
- head: Points
  aria: "R1 points"
rows:
  - cells:
      - text: 1
      - key: p3_r1_m14
        aria: "R1 M14"
      - key: p3_r1_m18b
        aria: "R1 M18 bonus"
      - key: p3_r1_m18a
        aria: "R1 M18 adv"
      - key: p3_r1_pts
        aria: "R1 points"
  - cells:
      - text: 2
      - key: p3_r2_m14
        aria: "R2 M14"
      - key: p3_r2_m18b
        aria: "R2 M18 bonus"
      - key: p3_r2_m18a
        aria: "R2 M18 adv"
      - key: p3_r2_pts
        aria: "R2 points"
  - cells:
      - text: 3
      - key: p3_r3_m14
        aria: "R3 M14"
      - key: p3_r3_m18b
        aria: "R3 M18 bonus"
      - key: p3_r3_m18a
        aria: "R3 M18 adv"
      - key: p3_r3_pts
        aria: "R3 points"
  - cells:
      - text: 4
      - key: p3_r4_m14
        aria: "R4 M14"
      - key: p3_r4_m18b
        aria: "R4 M18 bonus"
      - key: p3_r4_m18a
        aria: "R4 M18 adv"
      - key: p3_r4_pts
        aria: "R4 points"
  - cells:
      - text: 5
      - key: p3_r5_m14
        aria: "R5 M14"
      - key: p3_r5_m18b
        aria: "R5 M18 bonus"
      - key: p3_r5_m18a
        aria: "R5 M18 adv"
      - key: p3_r5_pts
        aria: "R5 points"
{{< /gridtable >}}
{{< short-answer key="p3_what_failed" label="What failed" prompt="If a placement failed, was it the driving or the letting go?" >}}

## Score It --- Checkpoint

### My score

{{< gridtable >}}
columns:
- head: "Mission part"
- head: Scored?
  aria: "Score M14"
- head: Points
rows:
  - cells:
      - text: "Mission 14 --- Bonus (a cone [[IN]] the Loading Zone)"
      - key: p4_s_m14
        aria: "Score M14"
      - text: 7
  - cells:
      - text: "Mission 18 --- Bonus (Botguy + one cone [[FULLY WITHIN]])"
      - key: p4_s_m18b
        aria: "Score M18 bonus"
      - text: 13
  - cells:
      - text: "Mission 18 --- Advanced (Botguy + both cones [[FULLY WITHIN]])"
      - key: p4_s_m18a
        aria: "Score M18 advanced"
      - text: 15
  - cells:
      - text: "My total"
      - key: p4_total
        aria: Total
      - text: 35
{{< /gridtable >}}

### My sensor card

{{< gridtable >}}
columns:
- head: Measurement
- head: Value
  aria: Port
rows:
  - cells:
      - text: "Reflectance sensor analog port"
      - key: p4_port
        aria: Port
  - cells:
      - text: "White reading"
      - key: p4_white
        aria: White
  - cells:
      - text: "Black reading"
      - key: p4_black
        aria: Black
  - cells:
      - text: "Threshold I actually use"
      - key: p4_thresh
        aria: Threshold
  - cells:
      - text: "Light sensor port"
      - key: p4_light_port
        aria: "Light port"
{{< /gridtable >}}

### [[IN]] or [[FULLY WITHIN]]?

Say whether each one satisfies [[IN]], [[FULLY WITHIN]], both, or neither.

{{< gridtable >}}
columns:
- head: "The cone is..."
- head: "Which definition?"
  aria: "Definition 1"
rows:
  - cells:
      - text: "Sitting well inside the zone, nothing near the edge"
      - key: p4_def1
        aria: "Definition 1"
  - cells:
      - text: "Mostly inside, with its base edge resting on the boundary line"
      - key: p4_def2
        aria: "Definition 2"
  - cells:
      - text: "Just its tip poking over the boundary into the zone"
      - key: p4_def3
        aria: "Definition 3"
  - cells:
      - text: "Right beside the zone, touching the outside of the line"
      - key: p4_def4
        aria: "Definition 4"
{{< /gridtable >}}

### Fix the threshold

{{< gridtable >}}
columns:
- head: "The robot..."
- head: "Move the threshold which way?"
  aria: "Fix 1"
rows:
  - cells:
      - text: "Stops before it reaches the black line"
      - key: p4_fix1
        aria: "Fix 1"
  - cells:
      - text: "Drives over the line and keeps going"
      - key: p4_fix2
        aria: "Fix 2"
  - cells:
      - text: "Stops in a different place each run"
      - key: p4_fix3
        aria: "Fix 3"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_analog
  label: "I can explain how an analog sensor differs from a [[DIGITAL|digital]] one"
- key: p4_can_mount
  label: "I can mount a reflectance sensor at the right height and angle"
- key: p4_can_readings
  label: "I can take white and black readings and work out a threshold"
- key: p4_can_findline
  label: "I can write a loop that drives until the sensor sees black"
- key: p4_can_tune
  label: "I know which way to move my threshold when it stops too early or too late"
- key: p4_can_light
  label: "I can start a program with `wait_for_light()`"
- key: p4_can_defs
  label: "I can tell [[IN]] from [[FULLY WITHIN]] and place an object to satisfy the stricter one"
{{< /checklist >}}

### Think about it

{{< ask key="p4_bright_room" label="Bright room" >}}Your threshold works perfectly in your classroom. The tournament room has huge windows and much brighter light. What might happen, and what would you do about it on the day?{{< /ask >}}

{{< ask key="p4_which_trust" label="Which to trust" >}}Your robot now has three ways to know where it is: bumping something, counting ticks, and reading brightness. Which one would you trust most, and does the answer change depending on the job?{{< /ask >}}

{{< ask key="p4_keep_reading" label="Keep reading" >}}Right now the sensor only tells your robot to stop. What if it kept reading while driving, and steered based on what it saw?{{< /ask >}}

### Next

That last question is the whole of the next project. In **Project 15 --- Following the Line**, the sensor stops being a stop sign and becomes a steering wheel.

KIPR · Botball Explorer --- Discovery Projects · © KISS Institute for Practical Robotics 1997--2026
