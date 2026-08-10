---
title: "Coding Project 8 — Arm and Claw Together"
short_title: "Coding Project 8"
linkTitle: "Arm and Claw Together"
description: "Two servos as one system — grab, carry, stack, release. Live-judged versus final-position scoring, and 37 points across four missions."
weight: 8
nav: discovery
mission_id: discovery_coding_08
mission_title: "Coding Project 8 — Arm and Claw Together"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 8
strand: coding
phase: "Phase 3 · Make It Grab"
phase_order: 3
time: "One class period"
eyebrow: "Discovery · Coding Project 8"
heading: "Arm and Claw Together"
subheading: "Two servos, one system. This is the biggest scoring project in the whole strand."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Arm and Claw Together"
mission_label: "Missions 12 · 3 · 11 · 13 bonus — 37 pts"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: Project
    definition: "Coding Project 8"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Make It Grab"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Adding a claw to your arm, learning to grab, carry, and release — then stacking cubes and dropping poms into baskets."
  - term: "Mission Anchor"
    definition: "[[@12:base|Mission 12]] complete · [[@3:base|Mission 3]] base · [[@11:base|Mission 11]] base · [[@13:bonus|Mission 13]] bonus — 37 points"
  - term: "Before You Start"
    definition: "Project 7 — and your claw must be built. That build lives in the Systems strand."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Robot with arm and claw (two [[SERVO|servos]])"
      - key: need_2
        label: Wombat
      - key: need_3
        label: "Charged battery"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "Your Project 5 and 7 numbers"
---

## Try It --- Be the Robot

A claw is an [[EFFECTOR|effector]] --- the part of the robot that does work on the world. In Project 6 your effector was the front of the robot, and it could only shove. A claw can hold.

{{< callout title="Structure and Function" variant="navy" >}}
A claw is **bad at pushing** and **great at grabbing.** The blade you used in Project 6 was the opposite. Neither one is better --- they are shaped for different jobs, and the shape is what decides the job.
{{< /callout >}}

### Two servos, two jobs

| Servo | Its job | Its two or three positions |
| --- | --- | --- |
| Arm | Raise and lower | up · horizontal · down |
| Claw | Open and close | open · closed |

### Now act it out

Put a cube on the table in front of you. Pick it up with one hand, move it, and set it back down.

Do it again --- slowly this time --- and write down **every separate movement**, in order. Do not skip anything, even the parts that feel too obvious to write.

{{< gridtable >}}
columns:
- head: Step
- head: "What my hand did"
  aria: "Hand step 1"
rows:
  - cells:
      - text: 1
      - key: p1_hand_1
        aria: "Hand step 1"
  - cells:
      - text: 2
      - key: p1_hand_2
        aria: "Hand step 2"
  - cells:
      - text: 3
      - key: p1_hand_3
        aria: "Hand step 3"
  - cells:
      - text: 4
      - key: p1_hand_4
        aria: "Hand step 4"
  - cells:
      - text: 5
      - key: p1_hand_5
        aria: "Hand step 5"
  - cells:
      - text: 6
      - key: p1_hand_6
        aria: "Hand step 6"
  - cells:
      - text: 7
      - key: p1_hand_7
        aria: "Hand step 7"
{{< /gridtable >}}
{{< ask key="p1_swap_steps" label="What goes wrong when steps swap" >}}Try swapping any two of your steps. Pick a pair and describe what would go wrong.{{< /ask >}}

{{< callout title="That List Is Your Program" variant="gold" >}}
Grabbing is not one action. It is five or six small ones that only work in one order. Close the claw before the arm is down and you grab nothing. Raise the arm before you close the claw and you lift nothing.

**The whole skill in this project is sequence.**
{{< /callout >}}

## Learn It --- Five Numbers and an Order

{{< figrow >}}
- src: servo/what-is-a-claw.jpg
  alt: "What a claw has to do to hold something."
- src: servo/servo-positions.jpg
  alt: "Find the positions for up, down, horizontal, open and close."
{{< /figrow >}}
You already know every command you need. Nothing new gets introduced here --- you just use two [[SERVO|servos]] instead of one.

### Write down all five positions

Put them at the top of every program, in the **name = number** format:

```text
// Your positions will be different --- do not copy these!
// arm        = 0
// up         = 1234
// horizontal = 1000
// down       = 230
//
// claw       = 3
// open       = 1246
// closed     = 340
```

Notice the first line of each group is the *[[PORT|port]]*, not a position. You now have seven numbers to keep straight, and every one of them is buried somewhere in your code.
{.muted}

### Preset both servos

Project 7 taught you the preset trick for one servo. With two, it matters twice as much --- an arm that slams down *and* a claw that snaps shut is a good way to break something.

```text
set_servo_position(0, 1234);   // arm up
set_servo_position(3, 1246);   // claw open
enable_servos();
msleep(1000);
```

Arm up, claw open, *then* enable. The robot wakes up in a known, safe shape every single time.

### The grab sequence

| Code / part | What it means |
| --- | --- |
| `1. Arm up, claw open` | Preset, then enable. Safe starting shape. |
| `2. Drive to the object` | Arm stays up and out of the way while driving. |
| `3. Stop --- ao()` | Do not grab while still rolling. |
| `4. Arm down` | Claw comes down around the object. Wait for it. |
| `5. Close claw` | Now, and only now, grip. |
| `6. Arm up` | Lift. The object comes with it. |

Every single grab in this project is that sequence. You will type it four times today. Remember how that feels --- Project 12 is about fixing it.

### Live judged or final position --- this changes your strategy

Look at how a mission is scored, not just what it asks for. Two missions can want the same thing and mean very different things by it.

| Code / part | What it means |
| --- | --- |
| `⚡ Live Judged` | A judge watches it happen during the match. It counts the moment it is true --- even if it falls apart afterwards. **Your robot may be holding it.** |
| `📋 Final Position` | Scored after the match ends, from whatever is left on the field. Your robot has to let go and the result has to survive on its own. |

{{< callout title="Robot Support Is Allowed --- Sometimes" variant="gold" >}}
The [[ON TOP OF]] definition says support from a robot is permitted. So for a live-judged stack, your claw can still be holding the cube in place when the judge sees it.

For a final-position stack, that is worth nothing. Let go, back away, and the stack has to stand by itself.
{{< /callout >}}

### Setting an object down is harder than picking it up

Opening the claw is easy. Opening the claw *without dragging, tipping, or flicking the object* is the actual skill.

- Lower the arm before you open, so the object has a short drop, not a long one.
- Open, then **pause**, then back away. Backing off while still opening drags the object with you.
- Back straight away, not on a curve. A curve sweeps the claw sideways through what you just placed.

{{< safety title="⚠ Basket Exclusivity" >}}
Mission 11 uses orange poms. Mission 15 (Project 12) uses blue poms. If your team attempts both, **they must go in different baskets.** Decide now which basket belongs to which mission, and write it down.
{{< /safety >}}

## Do It --- Grab, Carry, Stack

### Step 1 --- Find your claw positions

Servo Widget again. Your arm numbers are already on your Project 7 card --- now add the claw.

{{< gridtable >}}
columns:
- head: Position
- head: Number
  aria: "Claw open"
- head: Notes
  aria: "Claw open note"
rows:
  - cells:
      - text: "Claw open"
      - key: p3_claw_open
        aria: "Claw open"
      - key: p3_claw_open_note
        aria: "Claw open note"
  - cells:
      - text: "Claw closed on a cube"
      - key: p3_claw_closed
        aria: "Claw closed"
      - key: p3_claw_closed_note
        aria: "Claw closed note"
  - cells:
      - text: "Claw closed on a pom"
      - key: p3_claw_pom
        aria: "Claw pom"
      - key: p3_claw_pom_note
        aria: "Claw pom note"
{{< /gridtable >}}
{{< safety title="⚠ Closed Does Not Mean All the Way Shut" >}}
"Closed" is whatever number grips the cube --- not the smallest number the claw can reach. If you send the claw past where the cube stops it, the servo strains against the cube and burns out. Find the number that just grips, and stay there.
{{< /safety >}}

A pom squashes, a cube does not. That is why they get different numbers.
{.muted}

### Step 2 --- Grab it

New project called `Grab`. No driving at all --- place a cube inside the open claw by hand.

Write the [[PSEUDOCODE|pseudocode]] first. Two rules: the arm **starts up** and the claw **starts open**.

```text
// 1. Preset arm up and claw open, then enable
// 2. Move the arm down
// 3. Close the claw
// 4. Move the arm up
// 5. Disable servos
```

{{< checklist >}}
- key: p3_grab_works
  label: "The cube comes up off the table when the arm rises"
{{< /checklist >}}
{{< ask key="p3_msleep_where" label="Where msleep is needed" >}}Did you need an `msleep()` between every step, or only some of them? How did you decide?{{< /ask >}}

### Step 3 --- Go grab

New project called `Go Grab`. Now add driving --- the cube sits a short distance away.

```text
// 1. Preset arm up, claw open, enable
// 2. Drive forward to the cube
// 3. Stop  --- ao()
// 4. Arm down
// 5. Close claw
// 6. Arm up
// 7. Disable servos
```

{{< checklist >}}
- key: p3_gograb_works
  label: "My robot drives to the cube and lifts it"
- key: p3_gograb_noknock
  label: "It does not knock the cube over on the way in"
{{< /checklist >}}
{{< ask key="p3_gograb_first" label="First attempt result" >}}What happened the first time? Most robots either stop too early, stop too late, or push the cube away before the claw gets down.{{< /ask >}}

### Step 4 --- Put it down without wrecking it

Add to the end of your program: carry the cube somewhere, set it down, and back away leaving it standing.

{{< checklist >}}
- key: p3_place_upright
  label: "The cube stays upright after I let go"
- key: p3_place_nodrag
  label: "Backing away does not drag or knock it"
{{< /checklist >}}
{{< ask key="p3_drag_fix" label="Drag fix" >}}What did you have to change to stop dragging the cube when you backed off?{{< /ask >}}

### Step 5 --- Mission 13 Bonus --- your first stack7 pts

{{< mission-summary mission="13" >}}
{{< /mission-summary >}}
Start here because it is the easiest stack on the field --- the cubes are close together, and it is live judged, so your claw can still be holding the top cube when the judge looks.

{{< callout title="Both Cubes Must Come From the Same Area" variant="navy" >}}
Both cubes have to originate from the Unstraight Cube area. Stacking an unstraight cube on a cube borrowed from somewhere else scores nothing.
{{< /callout >}}

{{< checklist >}}
- key: p3_m13_stack
  label: "One Unstraight Cube is [[ON TOP OF]] another"
{{< /checklist >}}
### Step 6 --- Mission 12 --- complete it16 pts

{{< mission-summary mission="12" >}}
{{< /mission-summary >}}
You already know how to get here --- that was Project 5. Reuse your approach code and add the grab.

{{< callout title="Two Different Jobs in One Mission" variant="gold" >}}
The **base** is live judged, so your claw may still be holding the top cube. The **bonus** is final position --- you must let go, back off, and the stack has to survive until the match ends.

Get the base first. Then work on letting go cleanly.
{{< /callout >}}

{{< score-examples >}}
scores:
  - "One spilled cube is [[ON TOP OF]] another spilled cube."
  - "A robot is supporting one or both cubes while the [[ON TOP OF]] relationship exists."
  - "The stack exists and the lower cube is [[TOUCHING]] the black line."
does_not_score:
  - "Two spilled cubes touching side-by-side."
  - "A spilled cube stacked on a cube from a different area."
  - "The stack no longer exists at final scoring."
  - "The upper cube touches black line but the lower one does not."
{{< /score-examples >}}
{{< checklist >}}
- key: p3_m12_base
  label: "Two spilled cubes are stacked"
- key: p3_m12_bonus
  label: "The stack stands on its own with the lower cube on the black line"
{{< /checklist >}}
{{< ask key="p3_lower_cube" label="Why lower cube" >}}Read the "does not score" list again. Why does the *lower* cube have to be the one touching the line?{{< /ask >}}

### Step 7 --- Mission 3 --- Mixed Freight7 pts

{{< mission-summary mission="3" >}}
{{< /mission-summary >}}
Either order works for the base. Green on yellow, yellow on green --- both score. Same colour on same colour scores nothing.

{{< checklist >}}
- key: p3_m3_base
  label: "I have one mixed-colour stack"
{{< /checklist >}}
### Step 8 --- Mission 11 --- Hazard Disposal7 pts

{{< mission-summary mission="11" >}}
{{< /mission-summary >}}
A different grip problem. Poms squash, so your closed position for a pom is not the same as for a cube.

{{< callout title="[[IN]] Is Generous" >}}
A pom only has to *partially extend into* the interior of the basket. It does not need to be sitting neatly at the bottom. But touching the outside of the basket, or resting on top of it, is not [[IN]].
{{< /callout >}}

{{< short-answer key="p3_basket_plan" label="Basket plan" prompt="Which basket did you use, and which one are you saving for Mission 15?" >}}

{{< checklist >}}
- key: p3_m11_base
  label: "An orange pom is [[IN]] a basket and stays there"
{{< /checklist >}}
### Step 9 --- Run the whole thing five times

Chain all four missions into one program, same as Project 6 --- [[COMMENT|comment]] banners, one section at a time.

{{< gridtable >}}
columns:
- head: Run
- head: "M13 bonus"
  aria: "R1 M13"
- head: "M12 base"
  aria: "R1 M12 base"
- head: "M12 bonus"
  aria: "R1 M12 bonus"
- head: M3
  aria: "R1 M3"
- head: M11
  aria: "R1 M11"
- head: Points
  aria: "R1 points"
rows:
  - cells:
      - text: 1
      - key: p3_r1_m13
        aria: "R1 M13"
      - key: p3_r1_m12b
        aria: "R1 M12 base"
      - key: p3_r1_m12bo
        aria: "R1 M12 bonus"
      - key: p3_r1_m3
        aria: "R1 M3"
      - key: p3_r1_m11
        aria: "R1 M11"
      - key: p3_r1_pts
        aria: "R1 points"
  - cells:
      - text: 2
      - key: p3_r2_m13
        aria: "R2 M13"
      - key: p3_r2_m12b
        aria: "R2 M12 base"
      - key: p3_r2_m12bo
        aria: "R2 M12 bonus"
      - key: p3_r2_m3
        aria: "R2 M3"
      - key: p3_r2_m11
        aria: "R2 M11"
      - key: p3_r2_pts
        aria: "R2 points"
  - cells:
      - text: 3
      - key: p3_r3_m13
        aria: "R3 M13"
      - key: p3_r3_m12b
        aria: "R3 M12 base"
      - key: p3_r3_m12bo
        aria: "R3 M12 bonus"
      - key: p3_r3_m3
        aria: "R3 M3"
      - key: p3_r3_m11
        aria: "R3 M11"
      - key: p3_r3_pts
        aria: "R3 points"
  - cells:
      - text: 4
      - key: p3_r4_m13
        aria: "R4 M13"
      - key: p3_r4_m12b
        aria: "R4 M12 base"
      - key: p3_r4_m12bo
        aria: "R4 M12 bonus"
      - key: p3_r4_m3
        aria: "R4 M3"
      - key: p3_r4_m11
        aria: "R4 M11"
      - key: p3_r4_pts
        aria: "R4 points"
  - cells:
      - text: 5
      - key: p3_r5_m13
        aria: "R5 M13"
      - key: p3_r5_m12b
        aria: "R5 M12 base"
      - key: p3_r5_m12bo
        aria: "R5 M12 bonus"
      - key: p3_r5_m3
        aria: "R5 M3"
      - key: p3_r5_m11
        aria: "R5 M11"
      - key: p3_r5_pts
        aria: "R5 points"
{{< /gridtable >}}
{{< ask key="p3_weakest_grab" label="Weakest grab" >}}Which grab was least reliable, and what made that one harder than the others?{{< /ask >}}

## Score It --- Checkpoint

### My best run

{{< gridtable >}}
columns:
- head: "Mission part"
- head: Scored?
  aria: "Score M13 bonus"
- head: Points
rows:
  - cells:
      - text: "Mission 13 --- Bonus (two unstraight cubes stacked)"
      - key: p4_s_m13
        aria: "Score M13 bonus"
      - text: 7
  - cells:
      - text: "Mission 12 --- Base (two spilled cubes stacked)"
      - key: p4_s_m12b
        aria: "Score M12 base"
      - text: 11
  - cells:
      - text: "Mission 12 --- Bonus (stack survives, lower cube on line)"
      - key: p4_s_m12bo
        aria: "Score M12 bonus"
      - text: 5
  - cells:
      - text: "Mission 3 --- Base (mixed-colour stack)"
      - key: p4_s_m3
        aria: "Score M3"
      - text: 7
  - cells:
      - text: "Mission 11 --- Base (orange pom in a basket)"
      - key: p4_s_m11
        aria: "Score M11"
      - text: 7
  - cells:
      - text: "My total"
      - key: p4_total
        aria: Total
      - text: 37
{{< /gridtable >}}
### My full servo card

Seven numbers now. Copy them somewhere you will not lose them.
{.muted}

{{< gridtable >}}
columns:
- head: Setting
- head: Value
  aria: "Arm port"
rows:
  - cells:
      - text: "Arm servo port"
      - key: p4_arm_port
        aria: "Arm port"
  - cells:
      - text: "Arm up"
      - key: p4_arm_up
        aria: "Arm up"
  - cells:
      - text: "Arm horizontal"
      - key: p4_arm_horiz
        aria: "Arm horizontal"
  - cells:
      - text: "Arm down"
      - key: p4_arm_down
        aria: "Arm down"
  - cells:
      - text: "Claw servo port"
      - key: p4_claw_port
        aria: "Claw port"
  - cells:
      - text: "Claw open"
      - key: p4_claw_open
        aria: "Claw open"
  - cells:
      - text: "Claw closed on a cube"
      - key: p4_claw_cube
        aria: "Claw cube"
  - cells:
      - text: "Claw closed on a pom"
      - key: p4_claw_pom
        aria: "Claw pom"
  - cells:
      - text: "Basket I used for Mission 11"
      - key: p4_basket
        aria: "Basket used"
{{< /gridtable >}}
### Live or final?

Say how each one is judged, and what that means for whether your claw can still be holding it.

{{< gridtable >}}
columns:
- head: "Mission part"
- head: "Live or final?"
  aria: "M12 base judging"
- head: "Can the robot be holding it?"
  aria: "M12 base holding"
rows:
  - cells:
      - text: "Mission 12 Base"
      - key: p4_j_m12b
        aria: "M12 base judging"
      - key: p4_h_m12b
        aria: "M12 base holding"
  - cells:
      - text: "Mission 12 Bonus"
      - key: p4_j_m12bo
        aria: "M12 bonus judging"
      - key: p4_h_m12bo
        aria: "M12 bonus holding"
  - cells:
      - text: "Mission 11 Base"
      - key: p4_j_m11
        aria: "M11 judging"
      - key: p4_h_m11
        aria: "M11 holding"
{{< /gridtable >}}
### Can you do it again?

{{< checklist >}}
- key: p4_can_positions
  label: "I can find and record open and closed positions for different objects"
- key: p4_can_preset2
  label: "I preset both servos before enabling, so the robot always starts in a safe shape"
- key: p4_can_sequence
  label: "I can write the grab sequence in the right order without looking it up"
- key: p4_can_place
  label: "I can set an object down and back away without knocking it over"
- key: p4_can_stack
  label: "I can stack one cube on another"
- key: p4_can_judging
  label: "I can tell a live-judged mission from a final-position one and change my plan to match"
- key: p4_can_nostrain
  label: "I never close the claw past the point where the object stops it"
{{< /checklist >}}
### Think about it

{{< ask key="p4_edit_count" label="Edit count" >}}Count how many times the six-step grab sequence appears in your program. Now imagine your claw's closed position changes by 30. How many separate places would you have to edit?{{< /ask >}}

{{< ask key="p4_bonus_lost" label="Why bonus was lost" >}}A judge tells your team the Mission 12 stack scored the base but not the bonus. Your robot did everything you programmed. What most likely happened between the judge seeing it and the end of the match?{{< /ask >}}

{{< ask key="p4_time_vs_distance" label="Time vs distance" >}}Your robot can now drive, turn, grab, carry, stack, and release. Everything it does is still measured in *time* --- how long to push, how long to turn. What would change if it could measure in *distance* instead?{{< /ask >}}

### Next

You are carrying seven numbers around in comments, retyping them everywhere, and one rebuild would break all of it.

In **Project 9 --- Names for Your Numbers**, those comments become real. You give each number a name once, and the whole program starts using it.

KIPR · Botball Explorer --- Discovery Projects · © KISS Institute for Practical Robotics 1997--2026
