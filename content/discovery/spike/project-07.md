---
title: "Coding Project 7 — Your Robot's Arm"
short_title: "Coding Project 7"
linkTitle: "Your Robot's Arm"
description: "A motor that goes to a place instead of just going. Positions on a circle, gentle speeds, chosen directions, and a touch on Botguy."
weight: 7
nav: "discovery"
mission_id: "discovery_spike_coding_07"
mission_title: "Discovery Project 7 (SPIKE) — Your Robot's Arm"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 7
strand: "coding"
platform: "spike"
phase: "Phase 3 · Make It Grab"
phase_order: 3
time: "One class period"
eyebrow: "Discovery · SPIKE Coding Project 7"
heading: "Your Robot's Arm"
subheading: "A motor that goes to a place instead of just going. Seven points for touching one plastic guy."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Your Robot’s Arm"
mission_label: "Mission 9 — base"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
pace:
  kind: "required"
  label: "Needs the arm build"
meta:
  - term: "Project"
    definition: "Coding Project 7"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Make It Grab"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Giving a motor a new kind of job — going to a place — then using an arm to reach into the [[ENCLOSURE|enclosure]] and touch Botguy."
  - term: "Mission Anchor"
    definition: "[[@9:base|Mission 9]] — Recover Botguy (base)"
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your driving base with the arm attachment built"
      - key: need_2
        label: "Tablet or Chromebook with the SPIKE App"
      - key: need_3
        label: "Charged hub"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "Your Robot Card"
      - key: need_6
        label: "Your Project 4 and 5 numbers"
  - term: "Before You Start"
    definition: "Project 6 — and your arm must be built, with the arm motor plugged into port C . Open the Arm Build Guide Build guide coming soon — ask your teacher if this link is not live yet"
---
## Try It --- A Different Kind of Job

Your arm motor is the exact same kind of motor as your wheels. What changes today is not the motor --- it is the *job*.

|  | A wheel's job | An arm's job |
| --- | --- | --- |
| What it does | Rolls round and round | Swings between a few poses |
| What you tell it | How far to roll from wherever it is | **Exactly where to be** |
| When it is done | When the distance is used up | When it arrives at the place |

Remember the number from Project 3 --- the one that changed when you turned a wheel by hand? The hub is counting every motor's position, all the time. Today that counting stops being a curiosity and becomes the whole point: **"up" is a place, not a push.**

### Feel the places

Arm motor in [[PORT|port]] **C**. Connect the app and open the view that shows the connected devices, so you can see the arm motor's live number.

**Move the arm gently with your hand**, from one end of its swing to the other, and watch the number.

{{< checklist >}}
- key: p2_arm_port_c
  label: "My arm motor is in port C and shows up in the app"
- key: p2_arm_moved
  label: "I moved the arm by hand and watched its number change"
{{< /checklist >}}

{{< gridtable >}}
columns:
- head: "Where the arm is"
- head: "Roughly what number the app shows"
rows:
  - class: trial
    cells:
      - text: "All the way up"
      - key: p2_rough_up
        aria: "Rough up number"
  - class: trial
    cells:
      - text: "All the way down"
      - key: p2_rough_down
        aria: "Rough down number"
{{< /gridtable >}}

{{< ask key="p2_roll_vs_place" label="Roll versus place" >}}In your own words: what is the difference between telling a motor how far to roll and telling it where to be?{{< /ask >}}

## Learn It --- Positions, Not Spins

One block does today's job. It needs three pieces of information: *which* motor, *which way round*, and *which place*.

{{< wordblocks aria="Word block: run C shortest path to position 90 degrees" >}}
rows:
  - block:
      category: motors
      parts:
        - text: "run "
        - slot:
            kind: dropdown
            text: "C"
        - slot:
            kind: dropdown
            text: "shortest path"
        - text: " to position "
        - slot:
            kind: value
            text: "90"
        - text: " degrees"
{{< /wordblocks >}}

### Positions live on a circle

A motor's positions run from **0 to 359 degrees**, like the face of a clock. And 0 is not random: look closely at the motor and you will find two **little marks** on its case. When the marks line up, the motor is at position 0. That is its home, and it is the same home every time --- which is exactly what an arm needs.

### This block finishes the trip

A *go to position* block does not start the arm and let go. It moves the arm all the way to the place, and **only then** does the next block run --- just like your move-for blocks on the wheels.

{{< safety title="⚠ An Arm Has Ends --- Respect Them" >}}
Once the arm is built, the motor cannot swing a full circle any more. Somewhere there is a frame, a floor, a robot in the way.

Command a position the arm physically cannot reach and two bad things happen at once: the motor strains against the obstacle, and --- because the block is still waiting to arrive --- **your whole program stands still with it**.

Find your arm's real ends by hand first, and never command past them.
{{< /safety >}}

{{< callout title="Set the Speed Before the First Move" variant="gold" >}}
Motor speed starts out fast --- fine for wheels, violent for an arm. A full-speed arm slams down hard enough to shake the robot, scatter what you were reaching for, and loosen your build.

So the first arm rule: **a set speed block for port C, at something gentle like 20%, before any arm move.** Every arm program starts that way from now on.
{{< /callout >}}

{{< callout title="Shortest Path Can Be the Wrong Path" variant="navy" >}}
That *shortest path* dropdown means "go whichever way round is closer." Helpful --- until the closer way round is *through the table*, through your own robot, or through the cube you were about to pick up.

When the route matters, do not let the motor choose. Pick clockwise or counterclockwise on purpose.
{{< /callout >}}

### Where you are headed

{{< mission-summary mission="9" video=true >}}
{{< /mission-summary >}}

Seven points for one touch. It is the best points-per-effort deal on the field --- as long as you actually make contact.
{.muted}

## Do It --- Reach and Touch

### Step 1 --- Find your arm's home

New project called `Arm` --- names in the project name. Build just this, and run it:

{{< wordblocks aria="Stack: when program starts, set speed C to 20 percent, run C shortest path to position 0 degrees" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
  - block:
      category: motors
      parts:
        - text: "set speed "
        - slot:
            kind: dropdown
            text: "C"
        - text: " to "
        - slot:
            kind: value
            text: "20"
        - text: " %"
  - block:
      category: motors
      parts:
        - text: "run "
        - slot:
            kind: dropdown
            text: "C"
        - slot:
            kind: dropdown
            text: "shortest path"
        - text: " to position "
        - slot:
            kind: value
            text: "0"
        - text: " degrees"
{{< /wordblocks >}}

Watch where the arm ends up. That is *your* arm's position 0 --- its home. Everything else gets measured from here.

{{< short-answer key="p3_zero_points" label="Where the arm points at zero" prompt="Where does my arm point at position 0?" >}}

### Step 2 --- Find your three positions

Now move the arm **by hand**, slowly, and read its live number in the app at each pose. These three numbers are about to run your whole season.

{{< gridtable >}}
columns:
- head: "Arm position"
- head: "Degrees"
rows:
  - class: trial
    cells:
      - text: "Up --- clear of everything, safe for driving"
      - key: p3_pos_up
        aria: "Up degrees"
  - class: trial
    cells:
      - text: "Horizontal --- straight out in front"
      - key: p3_pos_horiz
        aria: "Horizontal degrees"
  - class: trial
    cells:
      - text: "Down --- just above the floor"
      - key: p3_pos_down
        aria: "Down degrees"
{{< /gridtable >}}

{{< safety title="⚠ \"Down\" Is Not \"Into the Floor\"" >}}
Do not pick a down that presses the arm against the floor. The motor strains at a place it cannot reach --- and every block after it waits forever for an arrival that never comes.
{{< /safety >}}

### Step 3 --- The Wave

Make the arm visit all three positions, holding each one long enough to see. Plan it as [[PSEUDOCODE|pseudocode]] first --- speed, then up, pause, horizontal, pause, down, pause, back up --- then build it:

{{< wordblocks aria="Stack: set speed, go up, wait, go horizontal, wait, go down, wait, go up" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
  - block:
      category: motors
      parts:
        - text: "set speed "
        - slot:
            kind: dropdown
            text: "C"
        - text: " to "
        - slot:
            kind: value
            text: "20"
        - text: " %"
  - block:
      category: motors
      parts:
        - text: "run "
        - slot:
            kind: dropdown
            text: "C"
        - slot:
            kind: dropdown
            text: "shortest path"
        - text: " to position "
        - slot:
            kind: value
            text: "your up"
        - text: " degrees"
  - block:
      category: control
      parts:
        - text: "wait "
        - slot:
            kind: value
            text: "1"
        - text: " seconds"
  - block:
      category: motors
      parts:
        - text: "run "
        - slot:
            kind: dropdown
            text: "C"
        - slot:
            kind: dropdown
            text: "shortest path"
        - text: " to position "
        - slot:
            kind: value
            text: "horizontal"
        - text: " degrees"
  - block:
      category: control
      parts:
        - text: "wait "
        - slot:
            kind: value
            text: "1"
        - text: " seconds"
  - block:
      category: motors
      parts:
        - text: "run "
        - slot:
            kind: dropdown
            text: "C"
        - slot:
            kind: dropdown
            text: "shortest path"
        - text: " to position "
        - slot:
            kind: value
            text: "your down"
        - text: " degrees"
  - block:
      category: control
      parts:
        - text: "wait "
        - slot:
            kind: value
            text: "1"
        - text: " seconds"
  - block:
      category: motors
      parts:
        - text: "run "
        - slot:
            kind: dropdown
            text: "C"
        - slot:
            kind: dropdown
            text: "shortest path"
        - text: " to position "
        - slot:
            kind: value
            text: "your up"
        - text: " degrees"
{{< /wordblocks >}}

{{< checklist >}}
- key: p3_wave_works
  label: "My arm moves to all three positions with a pause between each"
{{< /checklist >}}

{{< ask key="p3_why_waits" label="Why the waits" >}}The position block already finishes the trip before the next block runs. So what are the wait blocks for?{{< /ask >}}

### Step 4 --- Prove the speed matters

Change the set speed block to **100%** and run the Wave again. Stand back a little.

{{< short-answer key="p3_speed_100" label="Arm at full speed" prompt="What did the arm do?" >}}

Put it back to a gentle number. That is the arm's speed from now on.

{{< checklist >}}
- key: p3_speed_back
  label: "The speed is back to gentle"
{{< /checklist >}}

### Step 5 --- Prove the direction matters

Pick one position block and change *shortest path* to the arrow that goes the **long** way round. Run it --- with your hand ready near the stop button.

{{< ask key="p3_wrong_way" label="Wrong way result" >}}What happened, and what could that do on a real field?{{< /ask >}}

Set it back. From now on, the direction dropdown is a decision, not a default.

{{< checklist >}}
- key: p3_dir_back
  label: "Every position block is back to a route I chose on purpose"
{{< /checklist >}}

### Step 6 --- Drive and touch

New project called `Reach`. Practice away from the field first: put any object a short drive away, then drive to it and touch it with the arm.

Two rules, borrowed from how the mission works:

- The arm must **start up** and move down to touch. No driving around with the arm already out front.
- Touch it with the arm only --- not with the robot's body.

| Code / part | What it means |
| --- | --- |
| 1. Arm starts up |  |
| 2. Drive to the object |  |
| 3. Stop |  |
| 4. Lower the arm to touch it |  |
| 5. Raise the arm again |  |

{{< checklist >}}
- key: p3_reach_works
  label: "I can drive to an object and touch it with the arm"
{{< /checklist >}}

### Step 7 --- Mission 9 --- touch Botguy7 pts

Onto the field. New project called `Botguy`.

Botguy is inside the enclosure. Your robot has to reach in and make contact --- direct contact, arm to Botguy.

{{< callout title="TOUCHING Means Direct Contact" variant="navy" >}}
Two objects are TOUCHING when they are in direct physical contact. Contact through something else --- a cube, a wall, another field element --- does not count. Your arm has to reach Botguy himself.
{{< /callout >}}

{{< gridtable >}}
columns:
- head: "Try"
- head: "What I changed"
- head: "Did the arm reach him?"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_bg_t1_chg
        aria: "Botguy try 1 change"
      - key: p3_bg_t1_res
        aria: "Botguy try 1 result"
  - class: trial
    cells:
      - text: "2"
      - key: p3_bg_t2_chg
        aria: "Botguy try 2 change"
      - key: p3_bg_t2_res
        aria: "Botguy try 2 result"
  - class: trial
    cells:
      - text: "3"
      - key: p3_bg_t3_chg
        aria: "Botguy try 3 change"
      - key: p3_bg_t3_res
        aria: "Botguy try 3 result"
  - class: trial
    cells:
      - text: "4"
      - key: p3_bg_t4_chg
        aria: "Botguy try 4 change"
      - key: p3_bg_t4_res
        aria: "Botguy try 4 result"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_m9_touch
  label: "My arm makes direct contact with Botguy"
- key: p3_m9_no_knock
  label: "I did not knock the enclosure out of place getting there"
{{< /checklist >}}

{{< short-answer key="p3_harder_part" label="Which was harder" prompt="Which was harder --- getting the robot into position, or getting the arm to the right height?" >}}

### Step 8 --- Run it five times

{{< gridtable >}}
columns:
- head: "Run"
- head: "Touched Botguy?"
rows:
  - class: trial
    cells:
      - text: "1"
      - key: p3_r1
        aria: "Run 1"
  - class: trial
    cells:
      - text: "2"
      - key: p3_r2
        aria: "Run 2"
  - class: trial
    cells:
      - text: "3"
      - key: p3_r3
        aria: "Run 3"
  - class: trial
    cells:
      - text: "4"
      - key: p3_r4
        aria: "Run 4"
  - class: trial
    cells:
      - text: "5"
      - key: p3_r5
        aria: "Run 5"
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
      - text: "Mission 9 --- Base (robot TOUCHING Botguy)"
      - key: p4_s_m9
        aria: "Score M9"
      - text: "7"
  - class: total
    cells:
      - text: "My total"
      - key: p4_total
        aria: "Total"
      - text: "7"
{{< /gridtable >}}

### My arm card

Keep these next to your driving numbers. Everything from here uses them.
{.muted}

{{< gridtable >}}
columns:
- head: "Setting"
- head: "Value"
rows:
  - cells:
      - text: "Port my arm motor is in"
      - key: p4_arm_port
        aria: "Arm port"
  - cells:
      - text: "Arm up position"
      - key: p4_arm_up
        aria: "Arm up"
  - cells:
      - text: "Arm horizontal position"
      - key: p4_arm_horiz
        aria: "Arm horizontal"
  - cells:
      - text: "Arm down position"
      - key: p4_arm_down
        aria: "Arm down"
  - cells:
      - text: "Arm position for touching Botguy"
      - key: p4_arm_botguy
        aria: "Botguy position"
  - cells:
      - text: "Speed I use for arm moves (%)"
      - key: p4_arm_ms
        aria: "Arm speed"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_tell
  label: "I can point to the little marks that show a motor's position 0"
- key: p4_can_wire
  label: "I know which port my arm is in, and my blocks all say the same port"
- key: p4_can_limits
  label: "I know my arm's real ends and never command a place past them"
- key: p4_can_commands
  label: "I can build a go-to-position block with the right port, direction, and degrees"
- key: p4_can_preset
  label: "I set a gentle speed before the first arm move, so the arm never slams"
- key: p4_can_center
  label: "I know where my arm points at position 0"
- key: p4_can_combine
  label: "I can combine driving and arm movement in one run"
{{< /checklist >}}

### Think about it

{{< ask key="p4_why_position" label="Why position vs power" >}}A move block tells the wheels how far to roll from wherever they are. A position block tells the arm exactly where to end up. Why does the arm need the second kind?{{< /ask >}}

{{< ask key="p4_scattered_numbers" label="Scattered numbers problem" >}}Your position numbers are scattered through your program as bare numbers. If you rebuilt your arm slightly differently tomorrow, how many places would you have to change?{{< /ask >}}

{{< ask key="p4_claw_need" label="What a claw adds" >}}You can touch Botguy but you cannot get him out of the enclosure. What exactly can a claw do that a single arm cannot?{{< /ask >}}

### Next

In **Project 8 --- Arm and Claw Together**, a second motor joins the first. Two motors working as one system means you can finally grab, carry, and release --- and a whole set of missions opens up at once.
