---
title: "Systems Project 7 — The Arm and the Claw"
short_title: "Systems Project 7"
linkTitle: "The Arm and the Claw"
description: "Twelve illustrated steps. Two servos, a lifting arm and a gripping claw — everything the Coding strand does from Project 7 onward needs this."
weight: 7
nav: discovery
mission_id: discovery_systems_07
mission_title: "Systems Project 7 — The Arm and the Claw"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 7
strand: systems
phase: "Phase B · Think Like an Engineer"
phase_order: 2
time: "One class period"
pace:
  kind: required
  label: "Required before Coding 7"
build_project: true
eyebrow: "Discovery · Systems Project 7"
heading: "The Arm and the Claw"
subheading: "Twelve steps, and then your robot can pick things up."
credit: "KIPR · Botball Explorer · Discovery"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Systems Project 7"
  - term: "Strand"
    definition: "Systems"
  - term: "Phase"
    definition: "Think Like an Engineer"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Building the two-servo arm and claw onto your demobot, then checking it can actually reach and hold a cube."
  - term: "Strand Link"
    definition: "REQUIRED before Coding Project 7 — and everything after it"
  - term: "Before You Start"
    definition: "**Your base demobot must already be built** — chassis, wheels, drive motors and [[CONTROLLER|controller]]. This project adds to it."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "A built base demobot"
      - key: need_2
        label: "Two servos"
      - key: need_3
        label: "Two servo brackets"
      - key: need_4
        label: "Two 1×5 servo horns"
      - key: need_5
        label: "An L bracket"
      - key: need_6
        label: "A 1×7 liftarm"
      - key: need_7
        label: "A 3×7 bent liftarm"
      - key: need_8
        label: "Two claw liftarms"
      - key: need_9
        label: "A LEGO H‑pin"
      - key: need_10
        label: "Two blue axle pins"
      - key: need_11
        label: "One black pin"
      - key: need_12
        label: "Washers"
      - key: need_13
        label: "Medium, long and small silver bolts and nuts"
---

## Try It --- Look Before You Build

{{< figrow >}}
- src: discovery/systems/project-07/finished.jpg
  alt: "The completed servo demobot with arm and claw attached to the chassis"
  caption: "The finished servo demobot"
{{< /figrow >}}
Before you start, check you have two [[SERVO|servos]], two servo brackets, and two 1×5 servo horns ready to go.



This is what you are making. Look at it properly before you pick up a single bolt.

What you are building

{{< gridtable >}}
columns:
  - head: "Question"
    width: 52%
  - head: "My answer"
rows:
  -
    - text: "How many joints can move?"
    - key: p1_joints
      aria: "Joints"
  -
    - text: "How many servos can you count?"
    - key: p1_servos
      aria: "Servos"
  -
    - text: "Which part goes up and down?"
    - key: p1_updown
      aria: "Up and down"
  -
    - text: "Which part opens and shuts?"
    - key: p1_grip
      aria: "Opens and shuts"
{{< /gridtable >}}
{{< ask key="p1_new_ability" label="New ability" >}}Your robot can already push things. What will it be able to do after this that it cannot do now?{{< /ask >}}

{{< callout variant="gold" title="Two Servos, Two Different Jobs" >}}
One servo lifts the whole arm. The other opens and closes the claw. Neither can do the other's job.

In Systems Project 6 you decided a blade's shape from its [[FUNCTION|function]]. Same rule here --- the arm is shaped the way it is because of what it has to reach and hold.
{{< /callout >}}

### Sort your parts first

Lay everything out and count it before you start. A missing nut found at step 9 costs far more than one found now.

*Your parts list is at the top of this page --- tick each item off as you find it, and sort out anything missing now.*

## Learn It --- Three Things That Will Trip You Up

Most of this build is bolting things together. Three details are not obvious, and all three assemble perfectly and then fail later.

### 1. Which way round the servo goes

{{< figrow >}}
- src: kit/servo_port_plugin.png
  alt: "Servo wires --- check the colours before you push the plug in."
{{< /figrow >}}

A servo has a wire coming out of one end and a [[SPLINE|spline]] --- the toothed shaft that actually turns --- on the top.

The build tells you **wire end first** and **spline towards the front**. Fit it backwards and it bolts up fine, but your arm will swing the wrong way and the wire will be trapped where you cannot reach it.

### 2. Where the horn starts

{{< figrow >}}
- src: servo/centering-horn.jpg
  alt: "Finding the middle of a servo's travel before the horn goes on."
{{< /figrow >}}

The [[SERVO HORN|servo horn]] is the arm that clips onto the spline. Here is the part people skip.

A servo does not turn forever. It has a start and an end, maybe half a circle apart. Whichever way the horn is pointing when you push it on is where that range begins.

{{< callout variant="red" title="⚠ Step 3 Is a Setup Step, Not an Assembly Step" >}}
You will rotate the horn to the very end of its travel, take it off, put it back a notch further, and repeat --- until it will not go any further. Only then do you bolt it down, facing as far down as it will go.

Get this wrong and everything still fits. Then in Coding Project 7 your arm runs out of movement halfway through a lift, and nothing in your program will fix it.
{{< /callout >}}

### 3. The washer goes underneath

{{< figrow >}}
- src: servo/attach-horn.jpg
  alt: "Washer on the spline first, then the horn."
{{< /figrow >}}

Twice in this build a claw part mounts onto a servo with a washer *beneath* it, held by the small silver bolt that came with the horn.

The washer spreads the load so the plastic does not get chewed up. Leave it out and the joint works loose after a few dozen grabs.

{{< callout variant="navy" title="Build It Once, Properly" >}}
Every step here has a photo. Match your robot to the photo before you move on, and if it does not look the same, it is not the same.
{{< /callout >}}

## Do It --- Twelve Steps
Servo bracket onto the chassis
{{< figrow >}}
- src: discovery/systems/project-07/step-01a.jpg
  alt: "A servo bracket lined up on the short end of the chassis"
  caption: "Step 1 --- line up the bracket"
{{< /figrow >}}

{{< figrow >}}
- src: discovery/systems/project-07/step-01b.jpg
  alt: "The bracket bolted to the chassis with two medium bolts and nuts"
  caption: "Step 1 --- bolt it down"
{{< /figrow >}}

1. Line up a servo bracket on the **short end** of the chassis as shown.
2. Attach the bracket to the chassis with two medium bolts and two nuts.

**Parts** servo bracket · 2 medium bolts · 2 nuts

{{< checklist >}}
- key: p3_b1
  label: "Done and it matches the photo"
{{< /checklist >}}
{{< figrow >}}
- src: discovery/systems/project-07/step-02a.jpg
  alt: "A servo sliding into the servo bracket, wire end first"
  caption: "Step 2 --- wire end first"
{{< /figrow >}}

{{< figrow >}}
- src: discovery/systems/project-07/step-02b.jpg
  alt: "The servo secured in the bracket with two medium bolts and nuts"
  caption: "Step 2 --- secure it"
{{< /figrow >}}

1. Slide a servo into the servo bracket, **wire end first**, with the spline towards the front of the robot.
2. Secure it to the servo bracket with two medium bolts and two nuts.

**Parts** servo · 2 medium bolts · 2 nuts

{{< callout variant="gold" title="Check before you bolt" >}}
Wire end in first, spline facing the front. Backwards fits just as well and swings the wrong way.
{{< /callout >}}

{{< checklist >}}
- key: p3_b2
  label: "Done and it matches the photo"
{{< /checklist >}}
{{< figrow >}}
- src: discovery/systems/project-07/step-03.jpg
  alt: "A 1x5 servo horn placed on the servo on the robot"
  caption: "Step 3 --- the horn on the servo"
{{< /figrow >}}

1. Place the 1×5 servo horn on the robot as shown.
2. Rotate the servo head with the horn all the way **away from the robot**.
3. Repeat until the servo can turn no further, then seat the horn so that it faces as far down as it will go.

**Parts** 1×5 servo horn
This is the one that mattersYou are finding the end of the servo's range, not just fitting a part. Take the horn off and re-seat it as many times as it takes.
{{< checklist >}}
- key: p3_b3
  label: "The servo will not turn any further and the horn faces as far down as it goes"
{{< /checklist >}}
The servo will not turn any further and the horn faces as far down as it goesH‑pin onto the liftarm
{{< figrow >}}
- src: kit/h_pin_attach.png
  alt: "A LEGO H-pin attached to one end of a 1x7 liftarm with a long bolt and nut"
  caption: "Step 4 --- H-pin on the liftarm"
{{< /figrow >}}

1. On one end of a 1×7 liftarm, attach a LEGO H‑pin.
2. Secure it in place using a long bolt and nut.

**Parts** 1×7 liftarm · LEGO H‑pin · 1 long bolt · 1 nut

{{< checklist >}}
- key: p3_b4
  label: "Done and it matches the photo"
{{< /checklist >}}
{{< figrow >}}
- src: discovery/systems/project-07/step-05.jpg
  alt: "An L bracket attached to a servo bracket with a medium bolt and nut"
  caption: "Step 5 --- L bracket to servo bracket"
{{< /figrow >}}

Attach an L bracket to a servo bracket using a medium bolt and nut as shown.

**Parts** L bracket · servo bracket · 1 medium bolt · 1 nut

{{< checklist >}}
- key: p3_b5
  label: "Done and it matches the photo"
{{< /checklist >}}
{{< figrow >}}
- src: discovery/systems/project-07/step-06.jpg
  alt: "The liftarm and H-pin assembly bolted to the top of the L bracket"
  caption: "Step 6 --- assembly onto the L bracket"
{{< /figrow >}}

Attach the LEGO assembly from step 4 to the top of the L bracket using two medium bolts and nuts.

**Parts** 2 medium bolts · 2 nuts

{{< checklist >}}
- key: p3_b6
  label: "Done and it matches the photo"
{{< /checklist >}}
{{< figrow >}}
- src: discovery/systems/project-07/step-07a.jpg
  alt: "The assembly flipped over with a servo placed in the servo bracket wire first"
  caption: "Step 7 --- flip and place"
{{< /figrow >}}

{{< figrow >}}
- src: discovery/systems/project-07/step-07b.jpg
  alt: "The second servo secured with a medium bolt and nut"
  caption: "Step 7 --- secure it"
{{< /figrow >}}

1. Flip the assembly over and place a servo in the servo bracket **wire first**.
2. Secure it in place using a medium bolt and nut.

**Parts** servo · 1 medium bolt · 1 nut

{{< checklist >}}
- key: p3_b7
  label: "Done and it matches the photo"
{{< /checklist >}}
{{< figrow >}}
- src: discovery/systems/project-07/step-08a.jpg
  alt: "A 3x7 bent liftarm joined to a claw liftarm with two blue axle pins and one black pin"
  caption: "Step 8 --- join the liftarms"
{{< /figrow >}}

{{< figrow >}}
- src: discovery/systems/project-07/step-08b.jpg
  alt: "The assembly flipped back and bolted to the servo bracket with two long bolts and nuts"
  caption: "Step 8 --- bolt to the bracket"
{{< /figrow >}}

1. Attach a 3×7 bent liftarm, short end first, to the long end of a claw liftarm using **two blue axle pins and one black pin**.
2. Flip the assembly back over and secure it to the servo bracket using two long bolts and nuts as shown.

**Parts** 3×7 bent liftarm · claw liftarm · 2 blue axle pins · 1 black pin · 2 long bolts · 2 nuts
Pin orderBlue, black, blue. The black pin is the one that lets the joint pivot --- putting a blue one there locks it solid.
{{< checklist >}}
- key: p3_b8
  label: "Done and it matches the photo"
{{< /checklist >}}
{{< figrow >}}
- src: kit/claw_liftarm_servo_horn.png
  alt: "A claw liftarm attached to a 1x5 servo horn with two long bolts and nuts"
  caption: "Step 9 --- claw liftarm to horn"
{{< /figrow >}}

Attach a claw liftarm to a 1×5 servo horn using two long bolts and nuts.

**Parts** claw liftarm · 1×5 servo horn · 2 long bolts · 2 nuts

{{< checklist >}}
- key: p3_b9
  label: "Done and it matches the photo"
{{< /checklist >}}
{{< figrow >}}
- src: kit/claw_onto_servo.png
  alt: "The claw attached to the servo with a washer beneath it and the small silver bolt"
  caption: "Step 10 --- washer, then claw"
{{< /figrow >}}

Attach the claw to the servo with a **washer beneath it** and the small silver bolt that came with the 1×5 servo horn.

**Parts** 1 washer · small silver bolt
Washer underneathIt spreads the load. Without it the joint works loose after a few dozen grabs.
{{< checklist >}}
- key: p3_b10
  label: "Done and the washer is underneath"
{{< /checklist >}}
{{< figrow >}}
- src: discovery/systems/project-07/step-11.jpg
  alt: "A 1x5 servo horn attached to the LEGO H-pin with two long bolts and nuts"
  caption: "Step 11 --- horn onto the H-pin"
{{< /figrow >}}

Attach a 1×5 servo horn to the LEGO H‑pin using two long bolts and nuts, so that **two of the middle holes** on the servo horn line up with the holes on the pin.

**Parts** 1×5 servo horn · 2 long bolts · 2 nuts
*Note: The servo horn may still be attached to your robot while you do this. That is fine.*
{{< checklist >}}
- key: p3_b11
  label: "Done and the middle holes line up"
{{< /checklist >}}
{{< figrow >}}
- src: discovery/systems/project-07/step-12.jpg
  alt: "The claw assembly attached to the servo on the robot with a washer and small silver bolt"
  caption: "Step 12 --- claw assembly onto the robot"
{{< /figrow >}}

Attach the claw assembly to the servo on the robot: **washer on first**, then the claw assembly, then secure it with a small silver bolt from the 1×5 servo horns and washers.

**Parts** 1 washer · small silver bolt

{{< checklist >}}
- key: p3_b12
  label: "Done and it matches the photo"
{{< /checklist >}}
Servo Demobot Finished

### Now test it by hand

Do not plug anything in yet. Move the arm and the claw with your fingers.

{{< gridtable >}}
columns:
  - head: "Check"
    width: 52%
  - head: "What happened"
rows:
  -
    - text: "Does the arm swing up and down freely?"
    - key: p3_t_arm
      aria: "Arm swing"
  -
    - text: "Does the claw open and close?"
    - key: p3_t_claw
      aria: "Claw open"
  -
    - text: "Does anything catch or rub?"
    - key: p3_t_catch
      aria: "Catches"
  -
    - text: "Are both servo wires free, not trapped?"
    - key: p3_t_wires
      aria: "Wires free"
  -
    - text: "Does the robot still fit in the starting box?"
    - key: p3_t_box
      aria: "Starting box"
{{< /gridtable >}}

{{< callout variant="red" title="⚠ Do Not Force a Servo By Hand" >}}
Turning a servo hard against its stop can strip the gears inside. Move things gently, and if something will not go, find out why instead of pushing harder.
{{< /callout >}}
{{< ask key="p3_reach" label="Reach test" >}}Can the claw reach the floor? Can it reach high enough to place a cube [[ON TOP OF]] another one?{{< /ask >}}
{{< short-answer key="p3_hold" label="Hold test" prompt="Put a cube between the claw fingers and close it by hand. Does it hold?" >}}

{{< callout variant="gold" title="If the Arm Runs Out of Movement" >}}
Go back to step 3. Take the horn off, rotate the servo to its stop again, and re-seat the horn one notch at a time until the arm covers the whole range you need.

It is a five-minute fix now. It is an unsolvable programming problem later.
{{< /callout >}}

{{< checklist >}}
- key: p3_f_photo
  label: "I took a photo of my finished robot for my notebook"
- key: p3_f_spare
  label: "Spare bolts, nuts and washers are back in the kit, not on the floor"
{{< /checklist >}}

{{< figrow >}}
- src: discovery/systems/project-07/finished.jpg
  alt: "The completed servo demobot"
  caption: "Servo demobot finished"
{{< /figrow >}}

## Score It --- Checkpoint

### Which part is which?

{{< gridtable >}}
columns:
  - head: "The part that..."
    width: 56%
  - head: "Is called"
rows:
  -
    - text: "Is the toothed shaft the servo actually turns"
    - key: p4_n1
      aria: "N1"
  -
    - text: "Clips onto that shaft and carries the arm"
    - key: p4_n2
      aria: "N2"
  -
    - text: "Spreads the load under a bolt so plastic is not chewed"
    - key: p4_n3
      aria: "N3"
  -
    - text: "Lets the claw joint pivot instead of locking solid"
    - key: p4_n4
      aria: "N4"
{{< /gridtable >}}

### What goes wrong if...

{{< gridtable >}}
columns:
  - head: "You..."
    width: 56%
  - head: "The result is"
rows:
  -
    - text: "Fit the servo wire end last"
    - key: p4_w1
      aria: "W1"
  -
    - text: "Skip the rotating in step 3"
    - key: p4_w2
      aria: "W2"
  -
    - text: "Leave out the washer"
    - key: p4_w3
      aria: "W3"
  -
    - text: "Use a blue pin where the black one goes"
    - key: p4_w4
      aria: "W4"
{{< /gridtable >}}

### My robot

{{< gridtable >}}
columns:
  - head: "Measurement"
    width: 56%
  - head: "Value"
rows:
  -
    - text: "How far the claw reaches in front of the wheels"
    - key: p4_m1
      aria: "Reach"
  -
    - text: "Highest the claw will go off the floor"
    - key: p4_m2
      aria: "Height"
  -
    - text: "Widest the claw opens"
    - key: p4_m3
      aria: "Opening"
  -
    - text: "Robot width with the arm fitted"
    - key: p4_m4
      aria: "Width"
{{< /gridtable >}}

*Write these in your notebook too. You will need them in Coding Project 8.*

### Can you do it again?

{{< checklist >}}
- key: p4_can_build
  label: "My arm and claw are built and move freely"
- key: p4_can_orient
  label: "I can explain why a servo goes in wire end first"
- key: p4_can_horn
  label: "I can explain what step 3 was actually doing"
- key: p4_can_washer
  label: "I know why the washer goes underneath"
- key: p4_can_two
  label: "I can say what each of the two servos does"
- key: p4_can_test
  label: "I tested the whole range by hand before powering anything"
- key: p4_can_rebuild
  label: "I could rebuild this from the photos if it came apart"
{{< /checklist >}}

### Think about it
{{< ask key="p4_why_step3" label="Why step 3" >}}Step 3 takes longer than any other step and adds no parts to the robot. Why is it in the build at all?{{< /ask >}}
{{< ask key="p4_fits_vs_right" label="Fits versus right" >}}Fitting a servo backwards still bolts up perfectly. What does that tell you about checking your work against the photo rather than against whether it fits?{{< /ask >}}
{{< ask key="p4_blade_vs_claw" label="Blade versus claw" >}}Your blade from Project 6 could push. This claw can lift and hold. Is there anything the blade does better?{{< /ask >}}

### Next

Your robot has an arm and a claw and no idea how to use them.

**Coding Project 7 --- Your Robot's Arm** is now unlocked, and so is everything after it. Between them, the arm and claw missions are worth more than half the points on the field.
