---
title: "Coding Project 15 — Following the Line"
short_title: "Coding Project 15"
linkTitle: "Following the Line"
description: "Steer from a sensor reading. Follow the edge, not the middle, keep the dial under 50 — then reach four of the hardest targets on the field."
weight: 15
nav: "discovery"
mission_id: "discovery_ev3_coding_15"
mission_title: "Discovery Project 15 (EV3) — Following the Line"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 15
strand: "coding"
platform: "ev3"
phase: "Phase 5 · Make It Smart"
phase_order: 5
time: "One class period"
eyebrow: "Discovery · EV3 Coding Project 15"
heading: "Following the Line"
subheading: "The sensor stops being a stop sign and becomes a steering wheel."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Following the Line"
mission_label: "Missions 6 · 7 · 16 · 17 — 51 pts"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 15"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Make It Smart"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Steering from a [[SENSOR|sensor]] reading instead of driving blind, then using the lines to reach four of the hardest scoring targets on the field."
  - term: "Mission Anchor"
    definition: "[[@6:base|Mission 6]] · [[@7:base|Mission 7]] base · [[@16:base|Mission 16]] base · [[@17:base|Mission 17]] base — 51 points"
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your robot with arm, claw, and color [[SENSOR|sensor]]"
      - key: need_2
        label: "Tablet or Chromebook with the EV3 Classroom app"
      - key: need_3
        label: "Charged brick"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "Your sensor card from Project 14"
  - term: "Before You Start"
    definition: "Project 14 — you need a working [[THRESHOLD|threshold]] and a robot that can find a line."
---
## Try It --- Where Is the Line, Exactly?

Put your robot on the field with the sensor over a black line. Open the live reading, then **push the robot sideways by hand**, slowly, across the line and off the other side. Watch the number the whole way.

{{< gridtable >}}
columns:
- head: "Sensor sitting..."
- head: "Reading"
rows:
  - class: trial
    cells:
      - text: "Well off the line, on white"
      - key: p1_pos_1
        aria: "Position 1"
  - class: trial
    cells:
      - text: "Right at the edge, half on and half off"
      - key: p1_pos_2
        aria: "Position 2"
  - class: trial
    cells:
      - text: "Dead centre of the line"
      - key: p1_pos_3
        aria: "Position 3"
  - class: trial
    cells:
      - text: "Right at the other edge"
      - key: p1_pos_4
        aria: "Position 4"
  - class: trial
    cells:
      - text: "Well off the other side, on white"
      - key: p1_pos_5
        aria: "Position 5"
{{< /gridtable >}}

### Now the question that matters

{{< short-answer key="p1_tell_apart" label="Tell apart" prompt="Look at your first reading and your last reading --- both on white, one either side of the line. Can the sensor tell them apart?" >}}

{{< ask key="p1_which_way" label="Which way" >}}Your robot drifts off the line. Just from the number, can it work out *which way* it drifted?{{< /ask >}}

{{< safety title="⚠ One Sensor Cannot Stay on the Middle" >}}
Sitting on the centre of the line, everything looks the same in both directions. Drift left, the reading climbs toward white. Drift right, the reading climbs toward white. The robot has no idea which happened, so it cannot know how to correct.

Following the *middle* of a line with one sensor is impossible. So you do not.
{{< /safety >}}

## Learn It --- Follow the Edge, Not the Line

Put the sensor on **one edge** of the line and everything becomes answerable. Now dark and light mean two different directions.

| Code / part | What it means |
| --- | --- |
| On the edge | Exactly where you want to be. Reading sits near your [[THRESHOLD\\|threshold]]. |
| Drifted onto black | Reading is **low**. Steer *away* from the line. |
| Drifted onto white | Reading is **high**. Steer *back toward* the line. |

{{< callout title="The Robot Never Drives Straight" variant="gold" >}}
It zigzags. Too dark, arc one way. Too light, arc back. Over and over, several times a second.

From a distance it looks like the robot is following the line. Up close it is constantly overcorrecting --- and that is exactly what makes it work.
{{< /callout >}}

### Two choices, checked forever

This is a repeating loop with an **if-then-else** inside it. You have had both since Projects 10 and 13 --- this is the first time they work together.

{{< wordblocks aria="repeat until pressed, if light below threshold steer right else steer left" >}}
rows:
  - control:
      category: control
      head:
        - text: "repeat until "
        - slot:
            kind: condition
            style: sensor
            parts:
              - slot:
                  kind: dropdown
                  text: "1"
              - text: " is pressed?"
      body:
        - control:
            category: control
            head:
              - text: "if "
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
              - text: " then"
            body:
              - block:
                  category: movement
                  parts:
                    - text: "start moving "
                    - slot:
                        kind: steering
                        value: "30"
                  note: "on black --- arc away"
            branches:
              - label: "else"
                rows:
                  - block:
                      category: movement
                      parts:
                        - text: "start moving "
                        - slot:
                            kind: steering
                            value: "-30"
                      note: "on white --- arc back"
{{< /wordblocks >}}

{{< wordblocks aria="stop moving after the loop" >}}
rows:
  - block:
      category: movement
      parts:
        - text: "stop moving"
      note: "after the jaws --- the stop you asked for"
{{< /wordblocks >}}

| Code / part | What it means |
| --- | --- |
| repeat until (...) | Keeps the whole thing going. Without it the robot checks once and gives up. |
| if / else | Picks one of two steering arcs, every single trip round. |
| no stop inside | Never stop the motors inside the jaws. The robot should steer continuously, not stutter. |

{{< safety title="⚠ Keep the Steering Under 50" >}}
It is tempting to make the corrections sharper by cranking the steering toward 100. **Do not.** Past 50, the inside wheel starts running *backward* --- and in a loop that flips direction several times a second, that slams the drivetrain back and forth violently and makes the robot lurch instead of flow.

Stay in arc territory: two mirrored values under 50. A big number gives a sharp correction; a small one gives a gentle glide. That is the same steering rule you found in Project 5 --- it has been true this whole time.
{{< /safety >}}

### Tuning it

| Problem | Try this |
| --- | --- |
| Wanders off the line and never comes back | Bigger steering number --- correct harder |
| Zigzags so wildly it barely moves forward | Smaller steering number --- correct more gently |
| Loses the line on sharp corners only | Slow the speed down, or sharpen just the inside arc |
| Follows for a while then drives off | Check your threshold --- right for one part of the field, wrong for another |

### Following until something else happens

Line following on its own goes forever. To be useful it has to **stop for a reason** --- a distance travelled, a bump, or a second line crossing the first.

Swap the hexagon on the outer jaws. Reset a wheel's count first, then *repeat until (A degrees counted > your degrees-per-inch × the distance)* --- the same if/else inside.

Now the line keeps you straight and the counter tells you when you have arrived. **Two sensors doing two different jobs in one loop.**

## Do It --- Steer and Deliver

### Step 1 --- Build the follower

New project called `Line Follow`. Build the two-choice loop from Learn It. Put the sensor on the **left** edge of a line and let it run until you press the touch sensor.

{{< gridtable >}}
columns:
- head: "Try"
- head: "Steering ±"
- head: "Speed"
- head: "What it did"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_f1_s
        aria: "Follow 1 steering"
      - key: p3_f1_p
        aria: "Follow 1 speed"
      - key: p3_f1_r
        aria: "Follow 1 result"
  - class: trial
    cells:
      - text: "2"
      - key: p3_f2_s
        aria: "Follow 2 steering"
      - key: p3_f2_p
        aria: "Follow 2 speed"
      - key: p3_f2_r
        aria: "Follow 2 result"
  - class: trial
    cells:
      - text: "3"
      - key: p3_f3_s
        aria: "Follow 3 steering"
      - key: p3_f3_p
        aria: "Follow 3 speed"
      - key: p3_f3_r
        aria: "Follow 3 result"
  - class: trial
    cells:
      - text: "4"
      - key: p3_f4_s
        aria: "Follow 4 steering"
      - key: p3_f4_p
        aria: "Follow 4 speed"
      - key: p3_f4_r
        aria: "Follow 4 result"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_follows
  label: "My robot follows a straight line without losing it"
{{< /checklist >}}

### Step 2 --- Switch edges

Move the robot to the **other** edge of the same line and run the identical program.

{{< ask key="p3_switch_what" label="Switch result" >}}What happened, and why?{{< /ask >}}

{{< short-answer key="p3_switch_fix" label="Switch fix" prompt="What single change makes it follow the right edge instead?" >}}

### Step 3 --- Follow a curve

Straight lines are easy. Find a line on the field that bends and follow that.

{{< checklist >}}
- key: p3_curve
  label: "My robot stays on the line around a bend"
- key: p3_no_reverse
  label: "My steering values stay under 50, so no wheel ever runs backward"
{{< /checklist >}}

{{< short-answer key="p3_curve_changes" label="Curve changes" prompt="Did you have to change anything from your straight-line settings?" >}}

### Step 4 --- Follow, then stop for a reason

Wrap the follower in the counted version from Learn It: reset the wheel count, follow the line until the count says you have gone your chosen distance, then stop and settle.

{{< checklist >}}
- key: p3_stop_reason
  label: "My robot follows the line a set distance, then stops on purpose"
{{< /checklist >}}

{{< ask key="p3_two_jobs" label="Two jobs" >}}Two readings are steering one loop. Say in one sentence what each one is responsible for.{{< /ask >}}

### Step 5 --- Mission 16 --- Freight Shelving9 pts

{{< mission-summary mission="16" video=true >}}
{{< /mission-summary >}}

{{< safety title="⚠ The Large Green Cube, Not a Small One" >}}
The target is the **large palletized Green Cube** field element --- not the small green cubes you have been stacking since Project 8. Make sure your team is aiming at the right thing.
{{< /safety >}}

Robot support is permitted, but this is final position scored --- so the cube has to still be up there at the end, which means letting go cleanly.
{.muted}

{{< checklist >}}
- key: p3_m16
  label: "A spilled cube is [[ON TOP OF|ON TOP OF]] the Large Green Cube and stays there"
{{< /checklist >}}

### Step 6 --- Mission 17 --- Freight Racking9 pts

{{< mission-summary mission="17" video=true >}}
{{< /mission-summary >}}

{{< callout title="Same Job, Different Address" variant="gold" >}}
This is Mission 16 with two words changed. If you built Mission 16 as a My Block with inputs, this one costs you almost nothing --- which is the reward for the work you did in Project 12.
{{< /callout >}}

{{< callout title="⚠ Watch Your Cube Budget" >}}
The Unstraight Cubes are the same three you stacked for Mission 13 back in Project 10. A cube can only be in one place at the end of the match. Decide now which missions you are actually going for.
{{< /callout >}}

{{< checklist >}}
- key: p3_m17
  label: "An unstraight cube is ON TOP OF the Large Brown Cube and stays there"
{{< /checklist >}}

### Step 7 --- Mission 7 --- Hazard Containment11 pts

{{< mission-summary mission="7" video=true >}}
{{< /mission-summary >}}

Two colours, one enclosure. Poms roll, so the second delivery is the one that knocks the first one out --- go slowly and back straight away.
{.muted}

{{< checklist >}}
- key: p3_m7
  label: "One blue and one orange pom are both [[FULLY WITHIN|FULLY WITHIN]] the same enclosure"
{{< /checklist >}}

### Step 8 --- Mission 6 --- Pallet Builder22 pts

{{< mission-summary mission="6" video=true >}}
{{< /mission-summary >}}

{{< callout title="The Arrangement Does Not Matter" variant="gold" >}}
Four cubes flat on the pallet, a four-high tower, or anything in between --- all of it scores, as long as every cube is part of one palletized load. Pick whatever your claw finds easiest.

Better still: the cubes are **not required to stay on the pallet after the base is scored**. It is live judged, so once the judge has seen four cubes on the pallet, you can go on and move the pallet without worrying about a cube rolling off.
{{< /callout >}}

{{< callout title="⚠ Not TOUCHING Any Black Line" >}}
The bonus is stricter than it looks. The pallet must be FULLY WITHIN the starting box *and* clear of every black line. Push it in too far or not far enough and you get nothing.
{{< /callout >}}

{{< ask key="p3_cube_plan" label="Cube plan" >}}These are the same four green and yellow cubes you used for Mission 3 in Projects 8 and 13. What is your plan --- Mission 3's stacks or Mission 6's pallet?{{< /ask >}}

{{< checklist >}}
- key: p3_m6_base
  label: "All four cubes are on one pallet"
- key: p3_m6_bonus
  label: "The pallet ends FULLY WITHIN a starting box, off every line"
{{< /checklist >}}

### Step 9 --- Run it five times

{{< gridtable >}}
columns:
- head: "Run"
- head: "M16"
- head: "M17"
- head: "M7"
- head: "M6 base"
- head: "M6 bonus"
- head: "Points"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_r1_m16
        aria: "R1 M16"
      - key: p3_r1_m17
        aria: "R1 M17"
      - key: p3_r1_m7
        aria: "R1 M7"
      - key: p3_r1_m6b
        aria: "R1 M6 base"
      - key: p3_r1_m6bo
        aria: "R1 M6 bonus"
      - key: p3_r1_pts
        aria: "R1 points"
  - class: trial
    cells:
      - text: "2"
      - key: p3_r2_m16
        aria: "R2 M16"
      - key: p3_r2_m17
        aria: "R2 M17"
      - key: p3_r2_m7
        aria: "R2 M7"
      - key: p3_r2_m6b
        aria: "R2 M6 base"
      - key: p3_r2_m6bo
        aria: "R2 M6 bonus"
      - key: p3_r2_pts
        aria: "R2 points"
  - class: trial
    cells:
      - text: "3"
      - key: p3_r3_m16
        aria: "R3 M16"
      - key: p3_r3_m17
        aria: "R3 M17"
      - key: p3_r3_m7
        aria: "R3 M7"
      - key: p3_r3_m6b
        aria: "R3 M6 base"
      - key: p3_r3_m6bo
        aria: "R3 M6 bonus"
      - key: p3_r3_pts
        aria: "R3 points"
  - class: trial
    cells:
      - text: "4"
      - key: p3_r4_m16
        aria: "R4 M16"
      - key: p3_r4_m17
        aria: "R4 M17"
      - key: p3_r4_m7
        aria: "R4 M7"
      - key: p3_r4_m6b
        aria: "R4 M6 base"
      - key: p3_r4_m6bo
        aria: "R4 M6 bonus"
      - key: p3_r4_pts
        aria: "R4 points"
  - class: trial
    cells:
      - text: "5"
      - key: p3_r5_m16
        aria: "R5 M16"
      - key: p3_r5_m17
        aria: "R5 M17"
      - key: p3_r5_m7
        aria: "R5 M7"
      - key: p3_r5_m6b
        aria: "R5 M6 base"
      - key: p3_r5_m6bo
        aria: "R5 M6 bonus"
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
      - text: "Mission 16 --- Base (spilled cube on the Large Green Cube)"
      - key: p4_s_m16
        aria: "Score M16"
      - text: "9"
  - cells:
      - text: "Mission 17 --- Base (unstraight cube on the Large Brown Cube)"
      - key: p4_s_m17
        aria: "Score M17"
      - text: "9"
  - cells:
      - text: "Mission 7 --- Base (blue + orange in one enclosure)"
      - key: p4_s_m7
        aria: "Score M7"
      - text: "11"
  - cells:
      - text: "Mission 6 --- Base (four cubes on one pallet)"
      - key: p4_s_m6b
        aria: "Score M6 base"
      - text: "15"
  - cells:
      - text: "Mission 6 --- Bonus (pallet in a starting box)"
      - key: p4_s_m6bo
        aria: "Score M6 bonus"
      - text: "7"
  - class: total
    cells:
      - text: "My total"
      - key: p4_total
        aria: "Total"
      - text: "51"
{{< /gridtable >}}

### My line-following settings

{{< gridtable >}}
columns:
- head: "Setting"
- head: "Value"
rows:
  - cells:
      - text: "Steering toward the line / away from the line"
      - key: p4_lf_steer
        aria: "LF steering"
  - cells:
      - text: "Speed while following"
      - key: p4_lf_speed
        aria: "LF speed"
  - cells:
      - text: "Which edge my robot follows"
      - key: p4_lf_edge
        aria: "LF edge"
  - cells:
      - text: "Threshold I follow with"
      - key: p4_lf_thresh
        aria: "LF threshold"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_edge
  label: "I can explain why one sensor follows an edge, not the middle"
- key: p4_can_zigzag
  label: "I know the zigzag is the method, not a fault"
- key: p4_can_combo
  label: "I can put an if-then-else inside a repeat-until and say what each layer does"
- key: p4_can_under50
  label: "My steering stays under 50 so no wheel ever reverses in the loop"
- key: p4_can_reason
  label: "My follower stops for a reason, not just when someone grabs it"
- key: p4_can_switch
  label: "I can switch which edge I follow with one change"
{{< /checklist >}}

### Think about it

{{< ask key="p4_person_analogy" label="Person analogy" >}}Your line follower checks and steers several times a second and never drives perfectly straight. Would a person following a line with their eyes shut, feeling for the edge with a foot, do anything different?{{< /ask >}}

{{< ask key="p4_two_sensors" label="Two sensors" >}}A second sensor, mounted a few inches away from the first, would let the robot see both edges at once. What could it do then that it cannot do now?{{< /ask >}}

{{< ask key="p4_do_again" label="Do it again" >}}Missions 16 and 17 want *two or more* cubes for the bonus, and Mission 7 wants a second enclosure. Look at how you wrote these runs. What would it take to do each one a second time?{{< /ask >}}

### Next

You have built every skill this game needs. What you have not done is tidy up --- your best blocks are scattered across a dozen projects, and half your missions have a bonus that just means "now do that again."

In **Project 16 --- Building Your Toolbox**, your blocks move into one master project that every new mission starts from.
