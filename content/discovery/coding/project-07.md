---
title: "Coding Project 7 — Your Robot’s Arm"
short_title: "Coding Project 7"
linkTitle: "Your Robot’s Arm"
description: "Servos go to a position instead of just spinning. Wiring, safe limits, centring the horn, the preset trick — then reach into the enclosure and touch Botguy."
weight: 7
nav: discovery
mission_id: discovery_coding_07
mission_title: "Coding Project 7 — Your Robot’s Arm"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 7
strand: coding
phase: "Phase 3 · Make It Grab"
phase_order: 3
time: "One class period"
eyebrow: "Discovery · Coding Project 7"
heading: "Your Robot’s Arm"
subheading: "A motor that goes to a place instead of just going. Seven points for touching one plastic guy."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Your Robot’s Arm"
mission_label: "Mission 9 — base"
meta:
  - term: Project
    definition: "Coding Project 7"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Make It Grab"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Wiring up a [[SERVO|servo]], finding its safe positions, and using an arm to reach into the [[ENCLOSURE|enclosure]] and touch Botguy."
  - term: "Mission Anchor"
    definition: "[[@9:base|Mission 9]] — Recover Botguy (base)"
  - term: "Before You Start"
    definition: "Project 6 — and your arm must be built. The build lives in the Systems strand."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Built robot with one [[SERVO|servo]] and a servo horn"
      - key: need_2
        label: Wombat
      - key: need_3
        label: "Charged battery"
      - key: need_4
        label: "The game field"
      - key: need_5
        label: "A small screwdriver"
      - key: need_6
        label: "Your Project 4 and 5 numbers"
---

## Try It — A Different Kind of Motor

Hold a wheel motor in one hand and a [[SERVO|servo]] in the other. They look similar. They are not.

|  | Wheel motor | Servo |
| --- | --- | --- |
| Wires | Two — red and black | **Three** — orange, red, brown |
| Plug | Two metal prongs | Black plastic plug |
| How far it turns | Round and round, forever | About half a circle, then stops |
| What you tell it | How hard to push | **Where to go** |

{{% callout title="The Real Difference" variant="navy" %}}
You never tell a wheel motor *where* to stop — only how hard to push and for how long. A servo is the opposite: you tell it a position and it goes there and holds.

That is exactly what an arm needs. "Up" is a place, not a push.
{{% /callout %}}

### Plug it in — the wire order matters

{{< figrow >}}
- src: kit/servo_port_plugin.png
  alt: "Servo wires — check the colours before you push the plug in."
{{< /figrow >}}
There are four servo [[PORT|ports]], numbered **0 to 3**. Each one has three pins, and putting the plug in backwards will not work.

| Code / part | What it means |
| --- | --- |
| `S — orange wire` | Signal. This is the wire that carries the position you asked for. |
| `+ — red wire` | Power. |
| `− — brown wire` | Ground. Remember it as: *the ground is down, and down is negative.* |

Plug your servo into **port 0**, brown wire toward the minus side.

{{< checklist >}}
- key: p1_wired
  label: "My servo is in port 0 with the wires the right way round"
- key: p1_horn
  label: "A servo horn is attached — washer first, then horn, then the small screw"
{{< /checklist >}}
### Try the widget before you write anything

On the Wombat's Home Screen, tap **Servos**. Enable port 0 and drag the slider slowly.

{{< short-answer key="p1_widget_watch" label="What the arm does" prompt="What does the arm do as you drag?" >}}

{{< ask key="p1_push_arm" label="Pushing the arm" >}}Now let go of the slider and try to push the arm with your finger. What happens?{{< /ask >}}

{{% callout title="It Pushes Back" variant="gold" %}}
A servo does not just move to a position — it *holds* that position and fights anything that tries to move it. That is why it can lift something and keep holding it there.
{{% /callout %}}

## Learn It — Positions, Not Powers

{{< figrow >}}
- src: servo/range-of-motion.jpg
  alt: "A servo’s range is like a protractor — 180° split into positions 0 to 2047."
{{< /figrow >}}
A servo turns about 180°, and that half circle is divided into **2048 positions**, numbered 0 to 2047.

Counting from zero again — same as the motor ports.
{.muted}

Position **1024** is the middle. That is where a servo goes by default.

{{% safety title="⚠ Never Below 150 or Above 1900" %}}
The numbers go to 2047, but your servo physically cannot reach the ends. Sending it past its limit makes it strain against its own stop, and **it will burn out.** A burnt servo does not come back.

**Stay between 150 and 1900. Always.**
{{% /safety %}}

{{% safety title="⚠ API range vs classroom safe limits" %}}
The servo API accepts positions **0 to 2047** (about 180°). Classroom hardware must stay in the conservative safe band **150–1900**, with centre near **1024**. Sending commands into the burn zones (below 150 or above 1900) can destroy the servo.
{{% /safety %}}

### The four commands

| Code / part | What it means |
| --- | --- |
| `enable_servos();` | Turns on all four servo ports. Nothing works until you call this. |
| `set_servo_position(0, 800);` | Sends the servo in port 0 to position 800. Two [[ARGUMENT\|arguments]] — port first, then position. |
| `msleep(500);` | Gives the servo time to actually get there. Not optional. |
| `disable_servos();` | Turns the servo ports off at the end of your program. |

{{% callout title="Why msleep Again?" %}}
Same reason as the wheel motors. `set_servo_position()` tells the servo to *start* moving — it does not wait for it to arrive. Without an `msleep()`, the next line runs while the arm is still halfway there.
{{% /callout %}}

### The gotcha that catches everybody

When you call `enable_servos()`, every servo immediately jumps to **whatever position it was in last time.** Which might be anywhere.

If your arm was down when you last ran a program, it will slam down again the instant your new program enables the servos — possibly into the field, or into a cube, or into your hand.

{{% callout title="The Preset Trick" variant="gold" %}}
Call `set_servo_position()` *before* `enable_servos()`. The servo then wakes up already knowing where to go, and moves there instead of to its old position.
{{% /callout %}}

```text
// Risky — arm snaps to wherever it was last
enable_servos();
set_servo_position(0, 524);

// Better — arm wakes up already aimed at 524
set_servo_position(0, 524);
enable_servos();
```

### Write your positions down

Position numbers mean nothing on their own. `set_servo_position(0, 1746);` tells you nothing about what the arm is doing. [[COMMENT|Comment]] every one:

```text
// up         = 524
// horizontal = 1566
// down       = 1746
```

Use the format **name = number**. There is a reason for that — in Project 9 those names stop being comments and become part of the program.
{.muted}

### Where you are headed

{{< mission-summary mission="9" >}}
{{< /mission-summary >}}
{{< score-examples >}}
scores:
  - "A robot is [[TOUCHING]] Botguy."
does_not_score:
  - "A robot is near Botguy but not touching him."
{{< /score-examples >}}
Seven points for one touch. It is the best points-per-effort deal on the field — as long as you actually make contact.
{.muted}

## Do It — Reach and Touch

{{< figrow >}}
- src: servo/servo-ports.jpg
  alt: "The servo ports on the Wombat."
- src: servo/plugged-port-0.jpg
  alt: "A servo plugged into port 0."
{{< /figrow >}}
### Step 1 — Centre the horn first

{{< figrow >}}
- src: servo/widget.jpg
  alt: "The servo page on the Wombat."
- src: servo/widget-testing.jpg
  alt: "Drag the slider to test a servo before you write any code."
{{< /figrow >}}
Your servo can only reach half a circle — but looking at it, you cannot tell *which* half. Fix that mechanically before you write any code.

- Unscrew the servo horn.
- In the Servo Widget, enable the servo and set it to **1024**.
- Put the horn back on pointing at the middle of the range you actually want.
- Check both directions with the widget. Screw it back down when it is right.

{{< checklist >}}
- key: p3_centered
  label: "My horn is centred and screwed down"
{{< /checklist >}}
Skip this and you will spend the rest of the project fighting an arm that runs out of travel halfway through a move.
{.muted}

### Step 2 — Find your three positions

Using the widget, find the number for each of these and write it down. Stay inside 150–1900.

{{< gridtable >}}
columns:
- head: "Arm position"
- head: Number
  aria: "Up position"
- head: "What it looks like"
  aria: "Up description"
rows:
  - cells:
      - text: "Up (straight up)"
      - key: p3_pos_up
        aria: "Up position"
      - key: p3_pos_up_desc
        aria: "Up description"
  - cells:
      - text: "Horizontal (level)"
      - key: p3_pos_horiz
        aria: "Horizontal position"
      - key: p3_pos_horiz_desc
        aria: "Horizontal description"
  - cells:
      - text: "Down (not touching the floor)"
      - key: p3_pos_down
        aria: "Down position"
      - key: p3_pos_down_desc
        aria: "Down description"
{{< /gridtable >}}
{{% safety title="⚠ Down Means Nearly Down" %}}
Do not find a "down" that presses the arm into the floor. The servo will keep straining to reach a position it cannot get to, and that is exactly how servos die.
{{% /safety %}}

### Step 3 — The Wave

New project called `Wave`. Move the arm to all three positions with a one-second pause between each. Put your position comments at the top.

```c
#include <kipr/wombat.h>

int main ()
{
    // up         = 524
    // horizontal = 1566
    // down       = 1746

    set_servo_position(0, 1746);   // preset to down
   enable_servos();
   msleep(1000);

   set_servo_position(0, 1566);   // horizontal
   msleep(1000);

   set_servo_position(0, 524);    // up
   msleep(1000);

   disable_servos();
   return 0;
 }
```

Use *your* numbers, not these. [[COMPILE|Compile]] and run.

{{< checklist >}}
- key: p3_wave_works
  label: "My arm moves to all three positions with a pause between each"
{{< /checklist >}}
### Step 4 — Prove the msleep matters

Delete all three `msleep()` lines. Compile. Run. Watch closely.

{{< ask key="p3_no_msleep" label="Arm without msleep" >}}What did the arm do?{{< /ask >}}

Put them back.

### Step 5 — Prove the preset trick matters

Run your Wave program so the arm finishes **up**. Now swap lines 9 and 10 so `enable_servos()` comes first, and run it again.

{{< ask key="p3_preset_test" label="Preset test" >}}What did the arm do the instant the program started?{{< /ask >}}

{{< ask key="p3_preset_why" label="Why preset matters" >}}Why could that be a problem in the middle of a match?{{< /ask >}}

Put it back the safe way round.

### Step 6 — Drive and touch

New project called `Reach`. Practice away from the field first: put any object a short drive away, then drive to it and touch it with the arm.

Two rules, borrowed from how the mission works:

- The arm must **start up** and move down to touch. No driving around with the arm already out front.
- Touch it with the arm only — not with the robot's body.

```text
// 1. Arm starts up
// 2. Drive to the object
// 3. Stop
// 4. Lower the arm to touch it
// 5. Raise the arm again
```

{{< checklist >}}
- key: p3_reach_works
  label: "I can drive to an object and touch it with the arm"
{{< /checklist >}}
### Step 7 — Mission 9 — touch Botguy7 pts

Onto the field. New project called `Botguy`.

Botguy is inside the enclosure. Your robot has to reach in and make contact — direct contact, arm to Botguy.

{{% callout title="[[TOUCHING]] Means Direct Contact" variant="navy" %}}
Two objects are [[TOUCHING]] when they are in direct physical contact. Contact through something else — a cube, a wall, another field element — does not count. Your arm has to reach Botguy himself.
{{% /callout %}}

{{< gridtable >}}
columns:
- head: Try
- head: "What I changed"
  aria: "Botguy try 1 change"
- head: "Did the arm reach him?"
  aria: "Botguy try 1 result"
rows:
  - cells:
      - text: 1
      - key: p3_bg_t1_chg
        aria: "Botguy try 1 change"
      - key: p3_bg_t1_res
        aria: "Botguy try 1 result"
  - cells:
      - text: 2
      - key: p3_bg_t2_chg
        aria: "Botguy try 2 change"
      - key: p3_bg_t2_res
        aria: "Botguy try 2 result"
  - cells:
      - text: 3
      - key: p3_bg_t3_chg
        aria: "Botguy try 3 change"
      - key: p3_bg_t3_res
        aria: "Botguy try 3 result"
  - cells:
      - text: 4
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
{{< short-answer key="p3_harder_part" label="Which was harder" prompt="Which was harder — getting the robot into position, or getting the arm to the right height?" >}}

### Step 8 — Run it five times

{{< gridtable >}}
columns:
- head: Run
- head: "Touched Botguy?"
  aria: "Run 1"
rows:
  - cells:
      - text: 1
      - key: p3_r1
        aria: "Run 1"
  - cells:
      - text: 2
      - key: p3_r2
        aria: "Run 2"
  - cells:
      - text: 3
      - key: p3_r3
        aria: "Run 3"
  - cells:
      - text: 4
      - key: p3_r4
        aria: "Run 4"
  - cells:
      - text: 5
      - key: p3_r5
        aria: "Run 5"
{{< /gridtable >}}
## Score It — Checkpoint

### My score

{{< gridtable >}}
columns:
- head: "Mission part"
- head: Scored?
  aria: "Score M9"
- head: Points
rows:
  - cells:
      - text: "Mission 9 — Base (robot [[TOUCHING]] Botguy)"
      - key: p4_s_m9
        aria: "Score M9"
      - text: 7
  - cells:
      - text: "My total"
      - key: p4_total
        aria: Total
      - text: 7
{{< /gridtable >}}
### My servo card

Keep these next to your driving numbers. Everything from here uses them.
{.muted}

{{< gridtable >}}
columns:
- head: Setting
- head: Value
  aria: "Arm port"
rows:
  - cells:
      - text: "Servo port my arm is in"
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
      - text: "msleep needed for a full up-to-down move"
      - key: p4_arm_ms
        aria: "Arm move time"
{{< /gridtable >}}
### Can you do it again?

{{< checklist >}}
- key: p4_can_tell
  label: "I can tell a servo from a wheel motor by looking at it"
- key: p4_can_wire
  label: "I can plug a servo in with the wires the right way round"
- key: p4_can_limits
  label: "I know the safe range is 150 to 1900 and I never leave it"
- key: p4_can_commands
  label: "I can write all four servo commands in the right order"
- key: p4_can_preset
  label: "I set a position before enabling, so the arm never snaps somewhere unexpected"
- key: p4_can_center
  label: "I can centre a servo horn using the widget"
- key: p4_can_combine
  label: "I can combine driving and arm movement in one run"
{{< /checklist >}}
### Think about it

{{< ask key="p4_why_position" label="Why position vs power" >}}A wheel motor takes a power. A servo takes a position. Why does an arm need a position and a wheel does not?{{< /ask >}}

{{< ask key="p4_scattered_numbers" label="Scattered numbers problem" >}}Your position numbers are scattered through your program as bare numbers with comments next to them. If you rebuilt your arm slightly differently tomorrow, how many places would you have to change?{{< /ask >}}

{{< ask key="p4_claw_need" label="What a claw adds" >}}You can touch Botguy but you cannot get him out of the enclosure. What exactly can a claw do that a single arm cannot?{{< /ask >}}

### Next

In **Project 8 — Arm and Claw Together**, a second servo joins the first. Two servos working as one system means you can finally grab, carry, and release — and a whole set of missions opens up at once.

KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026
