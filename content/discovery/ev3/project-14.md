---
title: "Coding Project 14 — Seeing Light and Dark"
short_title: "Coding Project 14"
linkTitle: "Seeing Light and Dark"
description: "Reflected light answers with a number, and black is the low one. Pick your own threshold, find the line from anywhere, start on a signal."
weight: 14
nav: "discovery"
mission_id: "discovery_ev3_coding_14"
mission_title: "Discovery Project 14 (EV3) — Seeing Light and Dark"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 14
strand: "coding"
platform: "ev3"
phase: "Phase 5 · Make It Smart"
phase_order: 5
time: "One class period"
eyebrow: "Discovery · EV3 Coding Project 14"
heading: "Seeing Light and Dark"
subheading: "A sensor that answers with a number, not a yes."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Seeing Light and Dark"
mission_label: "Missions 14 · 18 — 35 pts"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 14"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Make It Smart"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Reading a [[SENSOR|sensor]] that measures brightness, choosing your own decision point, and using the black line to place things exactly inside the Loading Zone."
  - term: "Mission Anchor"
    definition: "[[@14:base|Mission 14]] bonus · [[@18:base|Mission 18]] bonus + advanced — 35 points"
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your robot with arm and claw"
      - key: need_2
        label: "Color [[SENSOR|sensor]]"
      - key: need_3
        label: "A flashlight (any kind)"
      - key: need_4
        label: "Tablet or Chromebook with the EV3 Classroom app"
      - key: need_5
        label: "Charged brick"
      - key: need_6
        label: "The game field"
  - term: "Before You Start"
    definition: "Projects 10, 11, and 13 — checking, measuring, and choosing."
---
## Try It --- How Dark Is It?

Your touch sensor answers one question: *am I pressed?* Yes or no. Nothing else.

This one is different. Plug the **color sensor** into sensor port **3** and write that on your card. On the brick, open **Port View** on port 3, and press the center button until the mode reads **reflected light** (the brick calls it COL-REFLECT). Then watch the number while you hold the sensor over things.

{{< safety title="⚠ Hold It Close, Not Touching" >}}
Pointed straight down, roughly half an inch off the surface. Pressed against the surface or held way up both give you useless numbers.
{{< /safety >}}

{{< gridtable >}}
columns:
- head: "Held over..."
- head: "Reading (%)"
rows:
  - class: trial
    cells:
      - text: "The white part of the game field"
      - key: p1_read_white
        aria: "Read white"
  - class: trial
    cells:
      - text: "A black line on the field"
      - key: p1_read_black
        aria: "Read black"
  - class: trial
    cells:
      - text: "Your desk"
      - key: p1_read_desk
        aria: "Read desk"
  - class: trial
    cells:
      - text: "Something dark you find in the room"
      - key: p1_read_dark
        aria: "Read dark"
  - class: trial
    cells:
      - text: "Something light you find in the room"
      - key: p1_read_light
        aria: "Read light"
{{< /gridtable >}}

{{< short-answer key="p1_bigger" label="Which is bigger" prompt="Which gives the bigger number --- dark surfaces or light ones?" >}}

{{< ask key="p1_why_numbers" label="Why the numbers" >}}The sensor shines a tiny light down and measures how much bounces back. Use that to explain why the numbers came out the way they did.{{< /ask >}}

{{< callout title="There Is No \"Black\" Reading" variant="gold" >}}
You did not get a yes or a no. You got a number somewhere between 0 and 100, and it wobbles a little every time you look.

So **you** have to decide where black starts. The sensor will not do it for you.
{{< /callout >}}

## Learn It --- Pick Your Own Dividing Line

Reflected light is a **range** reading, not a switch --- the other pile from your Project 10 sort, finally in play.

| Code / part | What it means |
| --- | --- |
| ~95 | White --- nearly all the light bounced back. |
| ~10 | Black --- most of the light was swallowed. |

Your numbers will not match anyone else's. Different mounting height, different room lighting, different sensor.
{.muted}

### Your threshold

A [[THRESHOLD|threshold]] is the number *you* pick as the dividing line. **Above it, call it white. Below it, call it black.**

The usual starting point is halfway between your two readings:

| Code / part | What it means |
| --- | --- |
| threshold = (white + black) ÷ 2 | For example: (95 + 10) ÷ 2 ≈ 52. A starting guess, not a final answer. You will adjust it. |

Make it a [[VARIABLE|variable]] called `threshold`, set at the top with the rest --- you have known better than bare numbers since Project 9.

### Your third kind of question

The checking has not changed at all. Only what it watches.

{{< wordblocks aria="Three wait-until hexagons: pressed, angle, reflected light" >}}
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
                  text: "83"
      note: "Project 11 --- a count"
  - block:
      category: control
      parts:
        - text: "wait until "
        - slot:
            kind: condition
            parts:
              - slot:
                  kind: variable
                  text: "3 reflected light"
              - text: " < "
              - slot:
                  kind: variable
                  text: "threshold"
      note: "now --- a brightness"
{{< /wordblocks >}}

Read the new one out loud: "keep checking the brightness --- the moment it drops below my threshold, the sensor is seeing black. Move on."

{{< callout title="Dark Means Down" variant="navy" >}}
With this sensor, black is a **small** number. Finding the line means waiting for the reading to **fall** --- the hexagon is **<**. Students flip this constantly. When your robot sails straight over a line it was supposed to stop at, check the direction of your hexagon first.
{{< /callout >}}

{{< callout title="When It Does Not Work, Move the Threshold" variant="gold" >}}
**Stops too early, on plain white?** Your threshold is too high --- the wobble dips under it. Move it down, toward your black value.

**Drives straight over the line?** Your threshold is too low. Move it up, toward your white value.

Also check the obvious: is the sensor pointed straight down, about half an inch off the mat?
{{< /callout >}}

### Starting the match

Your match start has been a tap on the touch sensor since Project 10. The same brightness trick gives you a second option: point a color sensor *up*, and wait until its reading **jumps** --- the moment a light comes on over it, or a flashlight hits it.

{{< wordblocks aria="wait until reflected light above 50 then start" >}}
rows:
  - block:
      category: control
      parts:
        - text: "wait until "
        - slot:
            kind: condition
            parts:
              - slot:
                  kind: variable
                  text: "3 reflected light"
              - text: " > "
              - slot:
                  kind: value
                  text: "50"
      note: "waiting in the dark for the signal"
{{< /wordblocks >}}

Which start your tournament uses is a rules question --- check with your coach. The blocks are ready either way.
{.muted}

## Do It --- Find the Line, Then Use It

### Step 1 --- Mount it and set your threshold

Fix the color sensor to the front underside of your robot, pointing straight down, about half an inch clear of the mat. Then take **fresh readings from the mounted position** --- they will not match what you got holding it in your hand.

{{< gridtable >}}
columns:
- head: "Measurement"
- head: "Value"
rows:
  - class: trial
    cells:
      - text: "Port I used"
      - key: p3_port
        aria: "Port"
  - class: trial
    cells:
      - text: "White reading, mounted"
      - key: p3_white
        aria: "White mounted"
  - class: trial
    cells:
      - text: "Black reading, mounted"
      - key: p3_black
        aria: "Black mounted"
  - class: trial
    cells:
      - text: "My threshold --- (white + black) ÷ 2"
      - key: p3_thresh
        aria: "Threshold"
{{< /gridtable >}}

### Step 2 --- Find the Line

New project called `Find the Line`. Drive forward until the sensor sees black, then stop: start moving, *wait until reflected light < threshold*, stop moving, settle. Threshold and steering as variables at the top.

{{< gridtable >}}
columns:
- head: "Try"
- head: "Threshold"
- head: "What happened"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_t1
        aria: "Try 1 threshold"
      - key: p3_t1_r
        aria: "Try 1 result"
  - class: trial
    cells:
      - text: "2"
      - key: p3_t2
        aria: "Try 2 threshold"
      - key: p3_t2_r
        aria: "Try 2 result"
  - class: trial
    cells:
      - text: "3"
      - key: p3_t3
        aria: "Try 3 threshold"
      - key: p3_t3_r
        aria: "Try 3 result"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_stops_black
  label: "My robot stops on the black line"
{{< /checklist >}}

### Step 3 --- Three lines, three distances

The real test of a threshold is whether it works when you did not tune it for that exact spot. Set your robot at three different distances from a line and run the same program each time, changing nothing.

{{< gridtable >}}
columns:
- head: "Starting distance"
- head: "Did it stop on the line?"
rows:
  - class: trial
    cells:
      - key: p3_dist1
        aria: "Distance 1"
      - key: p3_dist1_r
        aria: "Distance 1 result"
  - class: trial
    cells:
      - key: p3_dist2
        aria: "Distance 2"
      - key: p3_dist2_r
        aria: "Distance 2 result"
  - class: trial
    cells:
      - key: p3_dist3
        aria: "Distance 3"
      - key: p3_dist3_r
        aria: "Distance 3 result"
{{< /gridtable >}}

{{< callout title="This Is Something a Counter Cannot Do" variant="gold" >}}
A distance only works from a known starting point. This program finds the line from *anywhere* --- it does not care where it began.
{{< /callout >}}

### Step 4 --- Drive to black, back up to black

Now do it twice in a row. Drive forward to a line, stop, then reverse until you find a line again.

{{< safety title="⚠ Think Before You Build This One" >}}
When the robot stops, it is **sitting on black**. Start the reverse check immediately and it succeeds on the very line you are still on. You have to get back onto white first --- wait until the reading climbs *above* the threshold --- and only then start looking for the next fall below it.
{{< /safety >}}

{{< checklist >}}
- key: p3_twice_works
  label: "My robot finds a line forward, then finds a line in reverse, without fooling itself"
{{< /checklist >}}

{{< ask key="p3_check_order" label="Order of checks" >}}Write the order of checks you ended up with, in plain words.{{< /ask >}}

### Step 5 --- Start on a signal

Add a match start to the top of the program --- your force-sensor tap, or the point-a-sensor-up light start from Learn It if your tournament uses lights. Test it: the robot must sit dead still until the signal, then go.

{{< checklist >}}
- key: p3_start_signal
  label: "My robot waits for the start signal, then runs"
{{< /checklist >}}

### Step 6 --- Mission 14 Bonus --- a cone IN THE ZONE7 pts

{{< mission-summary mission="14" video=true >}}
{{< /mission-summary >}}

{{< callout title="⚠ The Base Still Has to Hold" >}}
You cannot score this bonus unless **both** cones are OFF the black line --- including the one you left behind. If your second cone drifted back onto the line, the bonus is worth nothing.
{{< /callout >}}

Use your line-finding program to drive to the Loading Zone [[BOUNDARY|boundary]], then place the cone.

{{< checklist >}}
- key: p3_m14_bonus
  label: "A cone is IN the Loading Zone and the other is still OFF the line"
{{< /checklist >}}

### Step 7 --- Mission 18 --- Botguy and both cones28 pts

{{< mission-summary mission="18" video=true >}}
{{< /mission-summary >}}

{{< callout title="⚠ IN and FULLY WITHIN Are Not the Same Thing" >}}
Mission 14's bonus only needs a cone **IN** the zone --- any part of it poking into the interior counts.

Mission 18 needs the cones **FULLY WITHIN** --- every single part inside, nothing touching or crossing the [[BOUNDARY|boundary]].

A cone half over the line scores Mission 14 and *nothing* from Mission 18. This is exactly why you need the sensor: it tells you where the boundary actually is.
{{< /callout >}}

{{< score-examples >}}
scores:
- "Botguy and one cone FULLY WITHIN the zone."
- "Botguy and both cones FULLY WITHIN the zone."
- "Botguy and the cones do not have to touch each other."
does_not_score:
- "A cone is [[IN THE ZONE|IN THE ZONE]] but Botguy is not."
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
  label: "Botguy is IN the Loading Zone"
- key: p3_m18_cone1
  label: "One cone is FULLY WITHIN --- no part over the boundary"
- key: p3_m18_cone2
  label: "The second cone is FULLY WITHIN too"
- key: p3_m18_nothing_moved
  label: "Nothing got knocked out while placing the last one"
{{< /checklist >}}

### Step 8 --- Run it five times

{{< gridtable >}}
columns:
- head: "Run"
- head: "M14 bonus"
- head: "M18 bonus"
- head: "M18 advanced"
- head: "Points"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_r1_m14
        aria: "R1 M14"
      - key: p3_r1_m18b
        aria: "R1 M18 bonus"
      - key: p3_r1_m18a
        aria: "R1 M18 adv"
      - key: p3_r1_pts
        aria: "R1 points"
  - class: trial
    cells:
      - text: "2"
      - key: p3_r2_m14
        aria: "R2 M14"
      - key: p3_r2_m18b
        aria: "R2 M18 bonus"
      - key: p3_r2_m18a
        aria: "R2 M18 adv"
      - key: p3_r2_pts
        aria: "R2 points"
  - class: trial
    cells:
      - text: "3"
      - key: p3_r3_m14
        aria: "R3 M14"
      - key: p3_r3_m18b
        aria: "R3 M18 bonus"
      - key: p3_r3_m18a
        aria: "R3 M18 adv"
      - key: p3_r3_pts
        aria: "R3 points"
  - class: trial
    cells:
      - text: "4"
      - key: p3_r4_m14
        aria: "R4 M14"
      - key: p3_r4_m18b
        aria: "R4 M18 bonus"
      - key: p3_r4_m18a
        aria: "R4 M18 adv"
      - key: p3_r4_pts
        aria: "R4 points"
  - class: trial
    cells:
      - text: "5"
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
- head: "Scored?"
- head: "Points"
rows:
  - cells:
      - text: "Mission 14 --- Bonus (a cone IN the Loading Zone)"
      - key: p4_s_m14
        aria: "Score M14"
      - text: "7"
  - cells:
      - text: "Mission 18 --- Bonus (Botguy + one cone FULLY WITHIN)"
      - key: p4_s_m18b
        aria: "Score M18 bonus"
      - text: "13"
  - cells:
      - text: "Mission 18 --- Advanced (Botguy + both cones FULLY WITHIN)"
      - key: p4_s_m18a
        aria: "Score M18 advanced"
      - text: "15"
  - class: total
    cells:
      - text: "My total"
      - key: p4_total
        aria: "Total"
      - text: "35"
{{< /gridtable >}}

### My sensor card

{{< gridtable >}}
columns:
- head: "Setting"
- head: "Value"
rows:
  - cells:
      - text: "Port my color sensor is in"
      - key: p4_sc_port
        aria: "Card port"
  - cells:
      - text: "White reading, mounted"
      - key: p4_sc_white
        aria: "Card white"
  - cells:
      - text: "Black reading, mounted"
      - key: p4_sc_black
        aria: "Card black"
  - cells:
      - text: "My working threshold"
      - key: p4_sc_thresh
        aria: "Card threshold"
{{< /gridtable >}}

### IN or FULLY WITHIN?

Say whether each one satisfies IN, FULLY WITHIN, both, or neither.

{{< gridtable >}}
columns:
- head: "The cone is..."
- head: "Which definition?"
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

A teammate's robot misbehaves. Say which way their threshold should move --- remember: with this sensor, black is *low*.

{{< gridtable >}}
columns:
- head: "The robot..."
- head: "Move the threshold..."
rows:
  - class: trial
    cells:
      - text: "Stops on plain white, before any line"
      - key: p4_ft_1
        aria: "Fix 1"
  - class: trial
    cells:
      - text: "Drives straight over the line and keeps going"
      - key: p4_ft_2
        aria: "Fix 2"
  - class: trial
    cells:
      - text: "Works on one side of the field but not the other"
      - key: p4_ft_3
        aria: "Fix 3"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_range
  label: "I can explain the difference between a switch reading and a range reading"
- key: p4_can_thresh
  label: "I can pick a [[THRESHOLD|threshold]] from my own two readings and adjust it when it is wrong"
- key: p4_can_low
  label: "I remember that black is a low number, and my hexagon points the right way"
- key: p4_can_anywhere
  label: "My robot can find a line from anywhere, without knowing where it started"
- key: p4_can_twice
  label: "I can find a line twice in a row without the robot fooling itself"
- key: p4_can_start
  label: "My program waits for a start signal before it moves"
{{< /checklist >}}

### Think about it

{{< ask key="p4_bright_room" label="Bright room" >}}Your threshold works perfectly in your classroom. The tournament room has huge windows and much brighter light. What might happen, and what would you do about it on the day?{{< /ask >}}

{{< ask key="p4_which_trust" label="Which to trust" >}}Your robot now has three ways to know where it is: bumping something, counting wheel degrees, and reading brightness. Which one would you trust most, and does the answer change depending on the job?{{< /ask >}}

{{< ask key="p4_keep_reading" label="Keep reading" >}}Right now the sensor only tells your robot to stop. What if it kept reading while driving, and steered based on what it saw?{{< /ask >}}

### Next

That last question is the whole of the next project. In **Project 15 --- Following the Line**, the sensor stops being a stop sign and becomes a steering wheel.
