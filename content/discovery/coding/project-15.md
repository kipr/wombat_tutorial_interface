---
title: "Coding Project 15 — Following the Line"
short_title: "Coding Project 15"
linkTitle: "Following the Line"
description: "Steer from a sensor reading. Follow the edge, not the middle — then use the lines to reach four of the hardest scoring targets on the field."
weight: 15
nav: discovery
mission_id: discovery_coding_15
mission_title: "Coding Project 15 — Following the Line"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 15
strand: coding
phase: "Phase 5 · Make It Smart"
phase_order: 5
time: "One class period"
eyebrow: "Discovery · Coding Project 15"
heading: "Following the Line"
subheading: "The sensor stops being a stop sign and becomes a steering wheel."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Following the Line"
mission_label: "Missions 6 · 7 · 16 · 17 — 51 points"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: Project
    definition: "Coding Project 15"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Make It Smart"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Steering from a [[SENSOR|sensor]] reading instead of driving blind, then using the lines to reach four of the hardest scoring targets on the field."
  - term: "Mission Anchor"
    definition: "[[@6:base|Mission 6]] · [[@7:base|Mission 7]] base · [[@16:base|Mission 16]] base · [[@17:base|Mission 17]] base — 51 points"
  - term: "Before You Start"
    definition: "Project 14 — you need a working [[THRESHOLD|threshold]] and a robot that can find a line."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Robot with arm, claw, and [[REFLECTANCE|reflectance]] [[SENSOR|sensor]]"
      - key: need_2
        label: Wombat
      - key: need_3
        label: "Charged battery"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "Your sensor card from Project 14"
---

## Try It --- Where Is the Line, Exactly?

Put your robot on the field with the sensor over a black line. Open the Sensor List, then **push the robot sideways by hand**, slowly, across the line and off the other side. Watch the number the whole way.

{{< gridtable >}}
columns:
- head: "Sensor sitting..."
- head: Reading
  aria: White
rows:
  - cells:
      - text: "Well off the line, on white"
      - key: p1_v_white
        aria: White
  - cells:
      - text: "Right at the edge, half on and half off"
      - key: p1_v_edge
        aria: Edge
  - cells:
      - text: "Dead center of the line"
      - key: p1_v_center
        aria: Center
  - cells:
      - text: "Right at the other edge"
      - key: p1_v_edge2
        aria: "Other edge"
  - cells:
      - text: "Well off the other side, on white"
      - key: p1_v_white2
        aria: "Other white"
{{< /gridtable >}}

### Now the question that matters

{{< short-answer key="p1_tell_apart" label="Can it tell apart" prompt="Look at your first reading and your last reading --- both on white, one either side of the line. Can the sensor tell them apart?" >}}

{{< ask key="p1_which_way" label="Which way drifted" >}}Your robot drifts off the line. Just from the number, can it work out *which way* it drifted?{{< /ask >}}

{{< safety title="⚠ One Sensor Cannot Stay on the Middle" >}}
Sitting on the center of the line, everything looks the same in both directions. Drift left, the reading goes up. Drift right, the reading goes up. The robot has no idea which happened, so it cannot know how to correct.

Following the middle of a line with one sensor is impossible. So you do not.
{{< /safety >}}

## Learn It --- Follow the Edge, Not the Line

Put the sensor on **one edge** of the line and everything becomes answerable. Now dark and light mean two different directions, which you can write using two conditions.


- Reading is high: Drifted onto black, so steer away from the line.
- Reading is low: Drifted onto white so teer back toward the line.

{{< callout title="The Robot Won't Straight" variant="gold" >}}
It zigzags. Too dark, arc one way. Too light, arc back. Over and over, several times a second.

From a distance it looks like the robot is following the line. Up close it is constantly overcorrecting --- and that is exactly what makes it work.
{{< /callout >}}

### Two choices, checked forever

This is a `while` loop with an `if` inside it. You have had both since Projects 10 and 13 --- this is the first time they work together.

```c
// Keep going until someone stops me
while (a_button() == 0)
{
	// I see black: I drifted onto the line
	if (analog(line) > threshold)
	{
		// Arc away from it
		motor(left,  20);
		motor(right, 60);
	}
	// I see white: I drifted off the line
	else
	{
		// Arc back toward it
		motor(left,  60);
		motor(right, 20);
	}
}
motor(0, 0);
motor(3, 0);
msleep(30);
```

| Code / part | What it means |
| --- | --- |
| `while (...)` | Keeps the whole thing repeating. Without it the robot checks once and gives up. |
| `if / else` | Picks one of two steering actions, every single time through. |
| no `ao()` inside | Never stop the motors inside a line-follow loop. The robot should steer continuously, not stutter. |

{{< safety title="⚠ Never One Motor Forward and One Backward" >}}
It is tempting to make the turns sharper by reversing a wheel. **Do not.** In a loop that switches direction several times a second, reversing a motor over and over will burn it out.

Use two *different positive* speeds. A big gap between them gives a sharp turn; a small gap gives a gentle one.
{{< /safety >}}

That is the same rule you found in Project 5 --- the further apart the two power numbers, the sharper the curve. It has been true this whole time.
{.muted}

### Tuning it

| Problem | Try this |
| --- | --- |
| Wanders off the line and never comes back | Bigger gap between the two speeds --- turn harder |
| Zigzags so wildly it barely moves forward | Smaller gap --- turn more gently |
| Loses the line on sharp corners only | Slow the whole thing down, or sharpen just the inside turn |
| Follows for a while then drives off | Check your threshold --- it may be right for one part of the field and wrong for another |

### Following until something else happens

Line following on its own goes forever. To be useful it has to *stop* for a reason --- a [[TICK|tick]] count, a bump, or a second line crossing the first.

```c
cmpc(left);

// Follow for this far, then move on
while (gmpc(left) < 5000)
{
	if (analog(line) > threshold)
	{
		// Arc away
	}
	else
	{
		// Arc back
	}
}
motor(0, 0);
motor(3, 0);
msleep(30);
```

Now the line keeps you straight and the counter tells you when you have arrived. Two sensors doing two different jobs in one loop.

## Do It --- Steer and Deliver

### Step 1 --- Build the follower

Create a new project called `Line Follow`. Start with the two-choice loop. Put the sensor on the **left** edge of a line and let it run until you press a button.

{{< gridtable >}}
columns:
- head: Try
- head: "Slow motor"
  aria: "Try 1 slow"
- head: "Fast motor"
  aria: "Try 1 fast"
- head: "What it did"
  aria: "Try 1 result"
rows:
  - cells:
      - text: 1
      - key: p3_t1_slow
        aria: "Try 1 slow"
      - key: p3_t1_fast
        aria: "Try 1 fast"
      - key: p3_t1_res
        aria: "Try 1 result"
  - cells:
      - text: 2
      - key: p3_t2_slow
        aria: "Try 2 slow"
      - key: p3_t2_fast
        aria: "Try 2 fast"
      - key: p3_t2_res
        aria: "Try 2 result"
  - cells:
      - text: 3
      - key: p3_t3_slow
        aria: "Try 3 slow"
      - key: p3_t3_fast
        aria: "Try 3 fast"
      - key: p3_t3_res
        aria: "Try 3 result"
  - cells:
      - text: 4
      - key: p3_t4_slow
        aria: "Try 4 slow"
      - key: p3_t4_fast
        aria: "Try 4 fast"
      - key: p3_t4_res
        aria: "Try 4 result"
{{< /gridtable >}}
{{< checklist >}}
- key: p3_follows
  label: "My robot follows a straight line without losing it"
{{< /checklist >}}

### Step 2 --- Switch edges

Move the robot to the **other** edge of the same line and run the identical program.

{{< ask key="p3_other_edge" label="Other edge" >}}What happened, and why?{{< /ask >}}

{{< short-answer key="p3_edge_fix" label="Edge fix" prompt="What single change makes it follow the right edge instead?" >}}

### Step 3 --- Follow a curve

Straight lines are easy. Find a line on the field that bends and follow that.

{{< checklist >}}
- key: p3_curve
  label: "My robot stays on the line around a bend"
- key: p3_no_reverse
  label: "Neither motor ever runs backward in my loop"
{{< /checklist >}}
{{< short-answer key="p3_curve_change" label="Curve change" prompt="Did you have to change anything from your straight-line settings?" >}}

### Step 4 --- Follow, then stop for a reason

Wrap the follower in a tick count so it travels a set distance and then hands over to whatever comes next. This is the pattern every mission below uses.

Turn it into a [[FUNCTION|function]] while you are at it --- `follow_line(int ticks)`.

{{< checklist >}}
- key: p3_follow_fn
  label: "I have a `follow_line()` function that stops after a set distance"
{{< /checklist >}}

### Step 5 --- Mission 16 --- Freight Shelving for 9 points

{{< mission-summary mission="16" video=true >}}
{{< /mission-summary >}}
{{< safety title="⚠ The Large Green Cube, Not a Small One" >}}
The target is the **large palletized Green Cube** field element --- not the small green cubes you have been stacking since Project 8. Make sure your team is aiming at the right thing.
{{< /safety >}}

Robot support is permitted, but this is final position scored --- so the cube has to still be up there at the end, which means letting go cleanly.
{.muted}

{{< checklist >}}
- key: p3_m16
  label: "A spilled cube is [[ON TOP OF]] the Large Green Cube and stays there"
{{< /checklist >}}

### Step 6 --- Mission 17 --- Freight Racking for 9 points

{{< mission-summary mission="17" video=true >}}
{{< /mission-summary >}}
{{< callout title="Same Job, Different Address" variant="gold" >}}
This is Mission 16 with two words changed. If you wrote Mission 16 as a function with [[ARGUMENT|arguments]], this one costs you almost nothing --- which is the reward for the work you did in Project 12.
{{< /callout >}}

{{< safety title="⚠ Watch Your Cube Budget" >}}
The Unstraight Cubes are the same three you stacked for Mission 13 back in Project 10. A cube can only be in one place at the end of the match. Decide now which missions you are actually going for.
{{< /safety >}}

{{< checklist >}}
- key: p3_m17
  label: "An unstraight cube is [[ON TOP OF]] the Large Brown Cube and stays there"
{{< /checklist >}}

### Step 7 --- Mission 7 --- Hazard Containment for 11 points

{{< mission-summary mission="7" video=true >}}
{{< /mission-summary >}}
Two colours, one enclosure. Poms roll, so the second delivery is the one that knocks the first one out --- go slowly and back straight away.
{.muted}

{{< checklist >}}
- key: p3_m7
  label: "One blue and one orange pom are both [[FULLY WITHIN]] the same enclosure"
{{< /checklist >}}

### Step 8 --- Mission 6 --- Pallet Builder · 22 pts

{{< mission-summary mission="6" video=true >}}
{{< /mission-summary >}}
{{< callout title="The Arrangement Does Not Matter" variant="gold" >}}
Four cubes flat on the [[PALLET|pallet]], a four-high tower, or anything in between --- all of it scores, as long as every cube is part of one palletized load. Pick whatever your claw finds easiest.

Better still: the cubes are **not required to stay on the pallet after the base is scored**. It is live judged, so once the judge has seen four cubes on the pallet, you can go on and move the pallet without worrying about a cube rolling off.
{{< /callout >}}

{{< safety title="⚠ Not [[TOUCHING]] Any Black Line" >}}
The bonus is stricter than it looks. The pallet must be [[FULLY WITHIN]] the starting box *and* not [[TOUCHING]] any black line. Push it in too far or not far enough and you get nothing.
{{< /safety >}}

{{< ask key="p3_cube_plan" label="Cube plan" >}}These are the same four green and yellow cubes you used for Mission 3 in Projects 8 and 13. What is your plan --- Mission 3's stacks or Mission 6's pallet?{{< /ask >}}

{{< checklist >}}
- key: p3_m6_base
  label: "All four cubes are on one pallet"
- key: p3_m6_bonus
  label: "The pallet ends [[FULLY WITHIN]] a starting box, off every line"
{{< /checklist >}}

### Step 9 --- Run it five times

{{< gridtable >}}
columns:
- head: Run
- head: M16
  aria: "R1 M16"
- head: M17
  aria: "R1 M17"
- head: M7
  aria: "R1 M7"
- head: "M6 base"
  aria: "R1 M6 base"
- head: "M6 bonus"
  aria: "R1 M6 bonus"
- head: Points
  aria: "R1 points"
rows:
  - cells:
      - text: 1
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
  - cells:
      - text: 2
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
  - cells:
      - text: 3
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
  - cells:
      - text: 4
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
  - cells:
      - text: 5
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
- head: Scored?
  aria: "Score M16"
- head: Points
rows:
  - cells:
      - text: "Mission 16 --- Base (spilled cube on the Large Green Cube)"
      - key: p4_s_m16
        aria: "Score M16"
      - text: 9
  - cells:
      - text: "Mission 17 --- Base (unstraight cube on the Large Brown Cube)"
      - key: p4_s_m17
        aria: "Score M17"
      - text: 9
  - cells:
      - text: "Mission 7 --- Base (blue + orange in one enclosure)"
      - key: p4_s_m7
        aria: "Score M7"
      - text: 11
  - cells:
      - text: "Mission 6 --- Base (four cubes on one pallet)"
      - key: p4_s_m6b
        aria: "Score M6 base"
      - text: 15
  - cells:
      - text: "Mission 6 --- Bonus (pallet in a starting box)"
      - key: p4_s_m6bo
        aria: "Score M6 bonus"
      - text: 7
  - cells:
      - text: "My total"
      - key: p4_total
        aria: Total
      - text: 51
{{< /gridtable >}}

### My line-following settings

{{< gridtable >}}
columns:
- head: Setting
- head: Value
  aria: Threshold
rows:
  - cells:
      - text: "Threshold I use for following"
      - key: p4_thresh
        aria: Threshold
  - cells:
      - text: "Slow motor power"
      - key: p4_slow
        aria: Slow
  - cells:
      - text: "Fast motor power"
      - key: p4_fast
        aria: Fast
  - cells:
      - text: "Which edge I follow (left or right)"
      - key: p4_edge
        aria: Edge
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_edge
  label: "I can explain why one sensor follows an edge and not the middle"
- key: p4_can_loop
  label: "I can put an `if`/`else` inside a `while` loop and say what each part does"
- key: p4_can_sharp
  label: "I can make a turn sharper or gentler without reversing a motor"
- key: p4_can_swap
  label: "I know what to change to follow the other edge"
- key: p4_can_stop
  label: "I can make a line follower stop for a reason instead of running forever"
- key: p4_can_fn
  label: "My line follower is a function I can call with a distance"
- key: p4_can_budget
  label: "I can work out which missions compete for the same cubes"
{{< /checklist >}}

### Think about it

{{< ask key="p4_person_analogy" label="Person analogy" >}}Your line follower checks and steers several times a second and never drives perfectly straight. Would a person following a line with their eyes shut, feeling for the edge with a foot, do anything different?{{< /ask >}}

{{< ask key="p4_two_sensors" label="Two sensors" >}}A second sensor, mounted a few inches away from the first, would let the robot see both edges at once. What could it do then that it cannot do now?{{< /ask >}}

{{< ask key="p4_do_again" label="Do it again" >}}Missions 16 and 17 want *two or more* cubes for the bonus, and Mission 7 wants a second enclosure. Look at how you wrote these runs. What would it take to do each one a second time?{{< /ask >}}

### Next

You have written every skill this game needs. What you have not done is tidy up --- your functions live in one long file, and half your missions have a bonus that just means "now do that again."

In **Project 16 --- Building Your Toolbox**, your functions move into a [[LIBRARY|library]] you can carry between projects.

KIPR · Botball Explorer --- Discovery Projects · © KISS Institute for Practical Robotics 1997--2027
