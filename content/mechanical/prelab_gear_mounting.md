---
title: "Mechanical Design · PreLab — Mounting a Gear"
short_title: "PreLab"
description: "LEGO gears do not directly match up to motors and servos. A servo horn, four small screws, and the concept that makes it all work: concentricity."
mission_id: "prelab_gear_mounting"
mission_title: "Mechanical Design · PreLab — Mounting a Gear"
eyebrow: "Mechanical Design · PreLab"
heading: "Mounting a Gear"
subheading: "Guided Build · Concentricity, the Servo Horn, and Four Small Screws"
credit: "KIPR · Botball Explorer · Mechanical Design PreLab — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "How do you attach a LEGO gear to a shaft it was never designed for?"
  -
    term: "Big Idea"
    definition: "A gear only works if its center sits exactly on the axis it spins around. Everything in this PreLab serves that one requirement."
  -
    term: "Design Concepts"
    definition: "[[CONCENTRICITY|Concentricity]] · [[ECCENTRIC|Eccentric]] · [[SERVO HORN|Servo horn]] · [[AXIS OF ROTATION|Axis of rotation]] · [[MESH|Mesh]]"
  -
    term: "Materials"
    definition: "LEGO structure and KIPR electronics only"
  -
    term: "What You Need"
    definition: "One 24-tooth or 40-tooth LEGO gear · one black plastic servo horn (round or cross) · 4 small servo screws · small screwdriver · a servo or motor to mount to"
  -
    term: "Position in Module"
    definition: "Between Challenges 2 and 3. This is not numbered because it is not a design challenge --- it is a shop skill. Every powered mechanism from Challenge 3 onward begins with this mounting."
weight: 3
hub_unit: 2
hub_title: "Mounting a Gear"
hub_label: "PreLab"
---

## Overview

Challenge 2 taught you what gears do. There is one practical problem standing between that knowledge and Challenge 3: **LEGO gears do not directly match up to KIPR motors and servos.** The center of a LEGO gear is a cross-shaped axle hole. The output shaft of a servo or motor is nothing like a LEGO axle. Push them together and nothing connects.

The bridge is a part you will use hundreds of times in this program: the black plastic [[SERVO HORN|servo horn]]. The horn fits the shaft; the gear screws to the horn. This PreLab walks you through that mounting step by step --- and teaches the one idea that separates a mounting that works from one that wobbles, binds, and strips.

{{< callout title="Core Insight" >}}
The gear does not just need to be *attached*. It needs to be attached with its center exactly on the axis it spins around. Off by a millimeter, and the gear is a different size on every side of its rotation.
{{< /callout >}}

### By the end of this PreLab you will be able to:

- Explain why LEGO gears cannot mount directly to a servo or motor shaft.
- Define [[CONCENTRICITY|concentricity]] and explain what goes wrong when a gear is mounted [[ECCENTRIC|eccentric]].
- Mount a 24- or 40-tooth gear to a servo horn with four screws, centered, in a cross pattern.
- Run a spin test and read what a wobble is telling you.

## Phase 1 --- Observe: Two Parts That Do Not Match

Hold a LEGO gear in one hand and look at a servo or motor shaft next to it. Look closely at both centers.

- The gear's center is a **cross-shaped hole**, made for a LEGO axle.
- The shaft is a short **splined cylinder** --- ringed with fine ridges, made to grip a servo horn pressed onto it.

Neither was designed with the other in mind. The horn was: its center is splined to match the shaft, it comes with a center screw to lock it on, and its body is soft black plastic --- soft on purpose, as you are about to use.

{{< figrow tall=true >}}
- src: "prelab_gear_mounting-diagram-01.svg"
  alt: "Three parts side by side. A LEGO gear with a cross-shaped axle hole at its center. A servo output shaft, a short splined cylinder. Between them, a black servo horn: its center matches the shaft, and its body gives the gear something to screw onto."
  caption: "The mismatch, and the part that bridges it. Gear screws to horn; horn presses onto shaft."
{{< /figrow >}}

In your own words: why can't the gear go straight onto the shaft, and what two jobs does the horn do at once?

{{< answer key="p1_mismatch" label="The mismatch" >}}

## Phase 2 --- Concept: Concentricity

Two circles are [[CONCENTRICITY|concentric]] when they share the same center. For your mounting, three things must all share one center: the gear, the horn, and the shaft's [[AXIS OF ROTATION|axis of rotation]] --- the invisible line the shaft spins around.

Mount the gear even slightly off that center and it is [[ECCENTRIC|eccentric]]. The gear is still round --- but it no longer spins around its own middle. One side of the gear now sweeps a wider circle than the other, once every revolution.

{{< figrow tall=true >}}
- src: "prelab_gear_mounting-diagram-02.svg"
  alt: "Two mountings compared. Left, concentric: the gear's center sits on the axis of rotation and the rim sweeps one clean circle. Right, eccentric: the gear's center sits beside the axis, so the rim sweeps a wobbling ring — too far from the meshing gear on one side of the revolution and too close on the other."
  caption: "Same gear, two mountings. The dashed line is the path the rim actually sweeps around the axis."
{{< /figrow >}}

Now remember the [[MESH|mesh]] from Challenge 2. Two meshed gears are spaced so their teeth interlock properly. An eccentric gear breaks that spacing once per turn:

- On the **far side** of its wobble, the teeth pull away from the mesh --- they skip or barely touch.
- On the **near side**, the teeth jam into the mesh --- the train binds tight.

{{< callout title="What Eccentricity Sounds and Feels Like" >}}
A rhythmic click or grind, once per revolution. A tight spot you can feel when turning by hand. A servo that stalls or chatters at the same point every turn. Teeth that strip in one place on the gear. If a mechanism does any of these on a steady beat, check the mounting before you blame anything else.
{{< /callout >}}

A gear mounted 1 mm off-center is only wrong by 1 mm --- yet the mechanism binds. Using the two bullet points above, explain why such a small error causes so much trouble.

{{< answer key="p2_why_small_error" label="Why small errors matter" >}}

## Phase 3 --- The Build: Gear to Horn to Shaft

Follow the steps in order. The order is doing real work --- it is what keeps the gear centered.

1.  **Pick the gear and the horn.** Use a **24-tooth or 40-tooth** LEGO gear --- both have holes around the center that screws can pass through. Use either horn: **round** or **cross**. Hold the horn against the gear and pick the one whose body sits behind the gear's holes best.
2.  **Center the horn on the gear.** Line up the horn's center hole with the gear's cross axle hole and sight straight through both. Look from directly above --- viewing at an angle will fool you. This is the step where concentricity is won or lost.
3.  **Drive the four screws in a cross pattern.** Push the 4 small servo screws through the gear's holes and drive them into the black plastic of the horn --- there are no threaded holes waiting for them; the screws *dig their own threads* into the soft plastic. Start all four loosely first. Then snug them in a cross pattern --- one, then the one across from it, then the third, then across again --- a little at a time, checking center as you go.
4.  **Mount the horn on the shaft.** Press the finished gear-and-horn onto the servo or motor shaft and drive the center screw in to lock it. The technique is identical for a motor.
5.  **Spin test.** Rotate the shaft slowly --- command the servo through its range, or turn the motor gently by hand. Fix your eye on one point of the gear's rim against something stationary behind it. A concentric gear holds its distance. An eccentric one visibly breathes in and out, once per revolution.

{{< callout title="Why a Cross Pattern, and Why Only Snug" variant="navy" >}}
Tighten one screw fully first and it drags the gear toward its own corner --- perfectly tight, and perfectly off-center. Alternating across the circle pulls the gear down evenly, the way lug nuts go onto a car wheel. And stop at snug: these screws hold by biting into plastic, and plastic that is crushed or stripped never grips again.
{{< /callout >}}

Which gear and which horn did you use, and why did that pairing line up best?

{{< answer key="p3_parts_choice" label="Parts chosen" >}}

Describe your first spin test honestly. Clean circle, or breathing rim? If it wobbled, what did you loosen and re-center?

{{< answer key="p3_first_spin" label="First spin test" >}}

## Phase 4 --- Test: Prove the Mounting

A mounting is not done when the screws are in. It is done when it passes two tests.

### Test 1 --- The Spin Test

{{< gridtable >}}
columns:
  -
    head: "Observation"
  -
    head: "Your Result"
  -
    head: ""
rows:
  -
    -
      text: "Rim wobble, watched over 3 slow revolutions"
    -
      key: "p4_wobble"
      aria: "Wobble observed"
    -
      key: "p4_wobble_unit"
      aria: "Unit"
      value: "none / slight / obvious"
  -
    -
      text: "Sound during rotation"
    -
      key: "p4_sound"
      aria: "Sound observed"
    -
      key: "p4_sound_unit"
      aria: "Unit"
      value: "describe"
{{< /gridtable >}}

### Test 2 --- The Mesh Test

Hold or mount a second gear so it meshes with your mounted one. Turn through at least three full revolutions.

{{< checklist >}}
- key: "p4_check_smooth"
  label: "The mesh runs smoothly through three full revolutions --- no tight spot, no skipping."
- key: "p4_check_centered"
  label: "The spin test shows no visible wobble at the rim."
- key: "p4_check_snug"
  label: "All four screws are snug, driven in a cross pattern, none stripped."
- key: "p4_check_locked"
  label: "The horn's center screw is in and the gear does not slip on the shaft."
{{< /checklist >}}

If your mesh test caught a tight spot the spin test missed --- or the other way around --- what does each test measure that the other does not?

{{< answer key="p4_two_tests" label="What each test measures" >}}

## Phase 5 --- Connect: Where This Shows Up in Botball

{{< callout title="Transfer" >}}
Challenge 3's pincer is driven through exactly the mounting you just made. So is nearly every powered mechanism in the rest of this module, and most of the ones on a competition robot.
{{< /callout >}}

Competition adds one more enemy: vibration. A robot that drives, bumps, and lifts all match long will slowly work screws loose --- and screws that bite into plastic loosen quietly. Good teams put the spin test in their pre-match routine, because a mounting that was concentric last week is a claim, not a fact.

Your robot's claw starts clicking once per revolution during a practice run. Walk through what you would check, in order, and why in that order.

{{< answer key="p5_diagnose" label="Diagnosis order" >}}

## Phase 6 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Define concentricity in your own words, without using the word "center."

{{< answer key="p6_q1_define" label="Reflection 1" >}}

2\. Explain why the screws go in a cross pattern, a little at a time --- and what would likely happen if you fully tightened them one by one around the circle instead.

{{< answer key="p6_q2_cross" label="Reflection 2" >}}

3\. The horn is soft plastic and the screws cut their own threads into it. What does that make easy, and what risk does it create?

{{< answer key="p6_q3_plastic" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "Attached is not the same as mounted. Before I power any gear from now on, I will..."

{{< answer key="p6_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Extension A --- Break It on Purpose

- Remount your gear deliberately off-center by a small amount.
- Run the spin test and the mesh test. Record every symptom --- sight, sound, feel.
- You now know what eccentricity looks like from experience. Why is breaking something on purpose a legitimate engineering technique?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- The Other Gear

- Mount the gear size you did not use the first time (24-tooth or 40-tooth) on a second horn.
- Which was easier to center, and why? Which would you rather diagnose a wobble on?
- Keep both mountings --- Challenge 3 and Challenge 4 will use them.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Why Four Screws?

- Thought experiment: mount the gear with only one screw, dead center of one hole. It is attached. What happens when the servo applies torque?
- Now two screws, opposite each other. Better? What load does each screw carry?
- Write one sentence on what the four-screw pattern is really for, beyond just "holding it on."

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Concentricity Hunt

- Find two machines outside robotics that depend on concentric mounting --- a car wheel on its lug pattern, a bicycle sprocket, a fan blade, a drill bit in a chuck.
- For each: how does its design force the part onto center? What is its version of the cross pattern?
- What happens to each machine when concentricity fails?

{{< answer key="ext_d" label="Extension D" >}}
