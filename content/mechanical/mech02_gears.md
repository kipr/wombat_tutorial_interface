---
title: "Mechanical Design · Challenge 2 — How Gears Work"
short_title: "Challenge 2"
description: "Teeth, mesh, direction, ratio, torque, and compound gearing — the language every mechanism from Challenge 3 onward speaks."
mission_id: "mech02_gears"
mission_title: "Mechanical Design · Challenge 2 — How Gears Work"
eyebrow: "Mechanical Design · Challenge 2"
heading: "How Gears Work"
subheading: "Foundation · The Language of Mechanisms"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 2 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How does one motor's motion become exactly the motion a mechanism needs?"
  -
    term: "Big Idea"
    definition: "Two meshed gears trade speed, torque, and direction in exact, countable ways --- and never for free."
  -
    term: "Design Concepts"
    definition: "[[MESH|Mesh]] · [[GEAR RATIO|Gear ratio]] · [[TORQUE|Torque]] · [[IDLER GEAR|Idler gear]] · [[COMPOUND GEARING|Compound gearing]]"
  -
    term: "Materials"
    definition: "None required. A few gears from your kit are helpful but optional."
  -
    term: "What You Need"
    definition: "This challenge sheet · optionally two or three gears from your LEGO kit · about one session"
  -
    term: "Prerequisite"
    definition: "Challenge 1 --- the design process. This sheet is the other foundation: the component language."
weight: 2
hub_unit: 1
hub_title: "How Gears Work"
hub_label: "Challenge 2"
---

## Overview

Challenge 1 gave you the process. This sheet gives you the component that nearly every mechanism in this module is built from: the gear. Like Challenge 1, there is nothing to build today --- this is knowledge you will spend from Challenge 3 onward.

Gears look like magic the first time you watch a small motor lift something heavy through them. They are not magic. Everything a gear pair does --- reversing direction, trading speed for strength, holding a load --- comes down to counting teeth. By the end of this sheet you will be able to do that counting yourself.

{{< callout title="Core Insight" >}}
Gears aren't magic. For everything we gain, we give something else up.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Explain why meshed gears must turn in opposite directions, and how an [[IDLER GEAR|idler gear]] changes that.
- Predict how far one gear turns when another turns, by counting teeth.
- Calculate a [[GEAR RATIO|gear ratio]], and say which way it trades speed against [[TORQUE|torque]].
- Multiply ratios through [[COMPOUND GEARING|compound gearing]] --- and name the price you pay for the gain.

## Phase 1 --- Why Gears? A Claw With a Problem

Here is where the need comes from. A simple demo-bot claw has one *fixed* side and one moving side. It works --- but as the moving jaw closes, it shoves the object sideways against the fixed jaw. For some tasks that is fine. For many, it is not.

Suppose the task needs *both* sides of the claw to move in and out, in coordination with each other --- a [[PINCER|pincer]]. Presumably we want each arm to mirror its counterpart exactly. But how is this accomplished?

{{< callout title="The Answer, and the Whole Point of This Sheet" variant="navy" >}}
One way to make both arms move in predictable patterns compared to one another is with gears at the base of each arm. Put a gear on each arm, mesh the two gears together, and turning one arm *must* turn the other. From that moment on, the arms cannot disagree.
{{< /callout >}}

{{< figrow tall=true >}}
- src: "mech02_gears-diagram-01.svg"
  alt: "Two pincer arms, each mounted on a gear at its base. The two gears mesh at the center. The left gear turns clockwise and its arm swings inward; the meshed right gear is forced to turn counterclockwise, so its arm swings inward too, and the jaws close together."
  caption: "A gear at the base of each arm, meshed at the center. The arms can be connected on the side of the gear or through its middle."
{{< /figrow >}}

If the gear on the left turns clockwise, what happens to its arm?

{{< answer key="p1_left_arm" label="Left arm motion" >}}

What direction does this force the other arm to move? Does this meet the need --- both jaws closing together?

{{< answer key="p1_right_arm" label="Right arm motion" >}}

## Phase 2 --- Teeth and the Mesh

Gears, or sprockets, have a set number of teeth. For a pair of gears to work together, their teeth must share a [[MESH|mesh]] location --- a spot where the teeth of one interlock with the teeth of the other. Once two gears mesh, neither can turn without turning the other.

Here is the model that makes everything on this sheet countable. Every tooth that passes through the mesh is one **click**. Both gears feel every click --- the mesh guarantees it.

{{< figrow tall=true >}}
- src: "mech02_gears-diagram-02.svg"
  alt: "A 10-tooth gear meshed with an 8-tooth gear. For the 10-tooth gear to make one full rotation, ten teeth must pass through the mesh. Those same ten clicks pass through the 8-tooth gear, which only needs eight clicks per rotation."
  caption: "The click model. This gear has 10 teeth, so one full rotation must click 10 times. Its 8-tooth partner needs only 8 clicks per rotation."
{{< /figrow >}}

So turn the 10-tooth gear one full rotation: 10 clicks pass through the mesh. The 8-tooth gear receives those same 10 clicks --- but it only needs 8 for a full turn. It turns a full rotation *and then some*. The smaller gear always spins farther than the larger one it meshes with.

{{< callout title="If Your Kit Is Nearby (Optional)" variant="navy" >}}
Everything on this sheet can be answered without parts. But if your kit is in reach, mesh a small gear with a large one, mark one tooth on each with a bit of tape, and turn the small gear exactly one rotation. Watch what the large one does. The click model is not a metaphor --- you can hear it.
{{< /callout >}}

A 16-tooth gear makes one full rotation. How many clicks pass through the mesh? If it is meshed with an 8-tooth gear, how many rotations does the 8-tooth gear make from those clicks?

{{< answer key="p2_click_count" label="Click counting" >}}

## Phase 3 --- Direction: The Rule and the Trick

Look back at the pincer diagram in Phase 1 and notice what the mesh did to direction.

{{< callout title="The Direction Rule" >}}
Two meshed gears always turn in opposite directions. Always. The teeth leave them no choice.
{{< /callout >}}

For the pincer that rule was exactly what we wanted --- opposite rotations close the two jaws together. But suppose a task needs two arms to move in the *same* direction. Are gears useless then?

No --- place a third gear *between* them. Direction now reverses twice: the left gear reverses the middle one, and the middle one reverses the right one. The two outer gears end up turning the same way. A gear used like this --- in the middle, only to manage direction --- is called an [[IDLER GEAR|idler gear]]. It changes direction without changing the ratio between the outer gears.

The three gears can be drawn staggered or sit in a straight line --- the geometry does not change the rule.

{{< figrow tall=true >}}
- src: "mech02_gears-diagram-03.svg"
  alt: "Three gears in a row. The left gear turns clockwise, the middle idler gear is forced counterclockwise, and the right gear is forced clockwise again — the two outer gears turn the same way."
  caption: "The idler trick. Two reversals put the outer gears back in agreement."
{{< /figrow >}}

Four gears sit in a straight line, all meshed neighbor-to-neighbor. The leftmost turns clockwise. Work along the line: what direction does each of the other three turn? State the pattern for any number of gears.

{{< answer key="p3_four_gears" label="Four gear directions" >}}

## Phase 4 --- Gear Ratio: Trading Speed for Strength

Now use the click model on gears of different sizes --- this is where gears earn their keep. Mesh an 8-tooth gear with a 16-tooth gear and turn the 8-tooth gear one full rotation clockwise. Eight clicks pass through the mesh. The 16-tooth gear needs sixteen clicks for a full turn, so it turns exactly **half a rotation** --- counterclockwise, by the direction rule.

That pair has a [[GEAR RATIO|gear ratio]] of 16:8, which reduces to **2:1** --- the [[DRIVE GEAR|drive gear]] (the one the motor turns) must turn twice for every one turn of the [[DRIVEN GEAR|driven gear]] (the one being turned).

{{< callout title="Torque" >}}
Just as a linear force is a push or a pull, a [[TORQUE|torque]] can be thought of as a twist to an object.
{{< /callout >}}

Using meshed gears with different tooth counts gives us an advantage, and it runs both ways:

- **Turn the smaller gear** in the pair, and the larger one turns slower but with *more torque* --- a stronger twist.
- **Turn the larger gear**, and the smaller one turns faster but with *less torque* --- more speed.

If you want a very large amount of torque, turn a gear with a low number of teeth against a gear with a high number of teeth. An 8-tooth gear driving a 30-tooth gear gives a 30:8 ratio --- **3.75:1**.

A 12-tooth drive gear meshes with a 36-tooth driven gear. Write the ratio in both forms (teeth and reduced). If the drive gear turns 6 full rotations clockwise, how many rotations does the driven gear make, and in which direction?

{{< answer key="p4_ratio_calc" label="Ratio calculation" >}}

You are choosing gears for a claw that must squeeze hard but can close slowly. Which gear does the servo turn --- the smaller or the larger of the pair? Explain using the click model, not just the rule.

{{< answer key="p4_torque_choice" label="Torque choice" >}}

## Phase 5 --- Compound Gearing: Multiplying the Trade

A 3.75:1 ratio is good. What if you need far more? You could hunt for a giant gear --- or you could stack the trick.

Put two gears of different sizes on the *same axle*, connected so they must turn at the same rate. Now drive the large one of the pair from one stage, and let the small one drive the next stage. Each stage keeps its own ratio --- and the ratios **multiply**. This is [[COMPOUND GEARING|compound gearing]].

|  |  |
| --- | --- |
| Stage 1 | 8-tooth driving 30-tooth --- 30:8, or 3.75:1 |
| Stage 2 | 8-tooth driving 30-tooth --- 30:8, or 3.75:1 |
| Combined | **30/8 × 30/8 = 900/64 = 14.06:1**  ---  3.75 × 3.75 = 14.06 |

That could be a lot of torque!

{{< callout title="Remember --- Gears Aren't Magic" >}}
For everything we gain we give something else up. In the 14.06:1 train above, if a motor turns the gear on the far left, it must make **14 complete revolutions** before the gear on the far right completes one. You bought a fourteen-fold stronger twist and paid for it with fourteen-fold slower output. The trade is exact, every time.
{{< /callout >}}

Build a compound train on paper from two stages, each an 8-tooth gear driving a 24-tooth gear. What is each stage's ratio, what is the combined ratio, and how many motor revolutions does one output revolution cost?

{{< answer key="p5_compound_calc" label="Compound calculation" >}}

## Phase 6 --- Connect: Where This Shows Up in Botball

{{< callout title="Transfer" >}}
You now hold the language of the next dozen challenge sheets. Challenge 3 builds the pincer from Phase 1 for real. Challenge 4 changes its ratio on purpose. Challenge 5 pushes torque until it has to be measured. Challenges 9 through 14 are gears doing stranger and stranger jobs.
{{< /callout >}}

On a competition robot, every [[EFFECTOR|effector]] faces the same trade you learned in Phase 4. A claw wants torque and can accept slow. A launcher wants speed and can accept weak. Drive wheels want a compromise. The team that can *count* the trade builds the ratio it needs; the team that cannot swaps gears at random until something sort of works.

Name one job on a Botball robot where you would gear for torque, and one where you would gear for speed. For each, say what you are giving up and why that cost is acceptable there.

{{< answer key="p6_botball_gearing" label="Botball gearing choices" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain the click model in your own words, and use it to show why a small gear driving a big gear produces a slower, stronger output.

{{< answer key="p7_q1_click_model" label="Reflection 1" >}}

2\. Two meshed gears must turn opposite ways, yet a pincer needs its jaws to close *together*, and some mechanisms need two parts turning the *same* way. Explain how gears serve both needs.

{{< answer key="p7_q2_direction" label="Reflection 2" >}}

3\. "Gears aren't magic." State the trade precisely for a 5:1 gear train --- what exactly is gained, and what exactly is paid?

{{< answer key="p7_q3_trade" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "When I watch any geared machine now, the first two things I will look for are..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these. Extensions C and D use parts if you have them.

### Extension A --- The Ratio Table

- List the tooth counts of every gear size in your kit.
- Build a table of every two-gear pairing and its reduced ratio.
- Circle the largest single-pair ratio your kit can make. Keep this table --- you will use it for the rest of the module.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Design a Ratio on Paper

- A mechanism needs its output to turn once for every 9 turns of the motor.
- Using only the gear sizes from Extension A, design a train that gets as close to 9:1 as possible. Compound stages are allowed.
- Show the multiplication, and state how close you got.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Hear the Clicks

- Mesh two different-sized gears from your kit and mark one tooth on each with tape.
- Turn the small gear exactly five rotations. Predict first, then count, how many rotations the large gear makes.
- Did the count match the tooth math exactly? If it was off, what happened?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Gear Hunt

- Find a geared machine outside robotics --- a bicycle, a hand whisk, a wind-up toy, a pepper grinder.
- Work out whether it gears for speed or for torque, and how you can tell.
- Where is its drive gear, and where is its driven gear?

{{< answer key="ext_d" label="Extension D" >}}
