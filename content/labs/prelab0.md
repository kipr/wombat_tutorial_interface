---
title: "PreLab 0 — The Machine"
short_title: "PreLab 0"
hub_unit: 0
hub_label: "PreLab 0"
description: "Check your kit, find the six subsystems on your own robot, and agree how you work safely. Completion checklist — nothing to write up."
weight: 10
nav: labs
track: c
mission_id: prelab0_labs
eyebrow: "PreLab 0 · Before Unit 1"
heading: "The Machine"
subheading: "PreLab · C track — completion checklist"
credit: "KIPR · Botball Explorer — CS1 + AI Literacy · © KISS Institute for Practical Robotics 1997–2026"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Purpose"
    definition: "Know your kit, your robot’s six subsystems, and how to work safely — before you write any code."
  - term: "Where This Sits"
    definition: "**Before Unit 1, Big Idea 1.** Do PreLab 0, then PreLab 1, then start Lab 1.1."
  - term: "How It Is Assessed"
    definition: "Completion only. Tick boxes and record four values — there is nothing to write up."
  - term: "What You Need"
    definition: "Your robot kit · your team · about one session"
---

## PreLab 0 --- Know the Machine Before You Program It

Nothing here is graded on how well you write. Work through it, tick each box honestly,
and record the four values you will need later. It should take one session.
{.muted}

{{< plsec n="Part 1" title="Check the kit against the list" >}}

Lay everything out. Anything missing is far cheaper to find now than in the middle of Unit 3.

Check each item off the list below. If anything is missing, report it to your teacher.

{{< figrow >}}
- src: kit/wambatfaceon.jpg
  alt: "2 × KIPR Wombat controllers."
  check_id: wombat-controller
- src: kit/battery.jpg
  alt: "2 × batteries."
  check_id: battery
- src: kit/batterycharger.jpg
  alt: "2 × chargers."
  check_id: battery-charger
- src: kit/2ETsensor.jpg
  alt: "2 × ET sensors."
  check_id: ET-sensor
- src: kit/2lightsensors.jpg
  alt: "2 × light sensors."
  check_id: light-sensor
- src: kit/2smalltophat.jpg
  alt: "2 × small tophat sensors."
  check_id: small-tophat-sensor
- src: kit/2largetophat.jpg
  alt: "2 × large tophat sensors."
  check_id: large-tophat-sensor
- src: kit/leversensors.jpg
  alt: "2 × lever sensors."
  check_id: lever-sensor
- src: kit/largetouchsensors.png
  alt: "2 × large touch sensors."
  check_id: large-touch-sensor
- src: kit/bagofscrews.jpg
  alt: "2 × sets of screws (shown above is ×1 set)"
  check_id: screw-bag
- src: kit/4motors.jpg
  alt: "4 × motors."
  check_id: motors
- src: kit/4servos.jpg
  alt: "4 × servos."
  check_id: servo
- src: kit/caster.jpg
  alt: "2 × casters."
  check_id: caster
- src: kit/4wheels.jpg
  alt: "4 × wheels."
  check_id: wheels
- src: "kit/2(1x10)metalstraps.jpg"
  alt: "2 × (1×10) metal straps."
  check_id: metal-strap
- src: kit/2anglebrackets.jpg
  alt: "2 × angle brackets."
  check_id: angle-bracket
- src: kit/chassis.jpg
  alt: "2 × chassis."
  check_id: chassis
- src: kit/4servobrackets.jpg
  alt: "4 × servo brackets."
  check_id: servo-bracket
- src: kit/screwdriver.jpg
  alt: "A screwdriver."
  check_id: screwdriver
- src: kit/4metalservohorns.webp
  alt: "4 × metal servo horns, screws, and washers."
  check_id: metal-servo-horns
- src: "kit/4_bag_lego_pieces.jpg"
  alt: "A collection of LEGO pieces."
  check_id: lego-pieces
{{< /figrow >}}

{{< endplsec >}}

{{< plsec n="Part 2" title="Find each subsystem on your own robot" >}}

Every robot is built from the same six kinds of part. Point at each one on your actual robot before you tick it.

{{< checklist >}}
- key: s_sensor
  label: "**[[SENSOR|Sensors]]** --- how it takes information in. I can point at two."
- key: s_comp
  label: "**[[COMPUTATION|Computation]]** --- where the decisions happen. I can point at it."
- key: s_act
  label: "**[[ACTUATOR|Actuators]]** --- what makes movement. I can point at three."
- key: s_eff
  label: "**[[EFFECTOR|Effectors]]** --- what acts on the world. I can name what mine will be."
- key: s_power
  label: "**Power** --- where the energy comes from and how it is charged."
- key: s_prop
  label: "**[[PROPRIOCEPTIVE|Proprioceptive]] sense** --- how it senses *itself*. Mine is the motor [[ENCODER|encoders]]."
{{< /checklist >}}

{{< endplsec >}}

{{< plsec n="Part 3" title="Know which kind of robot you are building" >}}

{{< checklist >}}
- key: a_auto
  label: "I can explain what [[AUTONOMOUS|autonomous]] means, and I know that once a match starts nobody may touch the robot."
- key: a_rc
  label: "I can say how that differs from [[REMOTE CONTROL|remote control]] and [[SEMI-AUTONOMOUS|semi‑autonomous]]."
- key: a_why
  label: "I understand why that makes testing matter more than it would otherwise."
{{< /checklist >}}

{{< endplsec >}}

{{< plsec n="Part 4" title="Safety and looking after the kit" >}}

### Stop a Running Program

If a program is going to damage your equipment, you can stop it immediately by hitting the **Stop** button.

{{< figrow >}}
- src: botui/programs_stop.webp
  alt: Stop button
{{< /figrow >}}

{{< checklist >}}
- key: sf_hands
  label: "Hands clear of wheels, gears, and the claw whenever power is on."
- key: sf_stop
  label: "I know how to stop a running program immediately."
- key: sf_servo
  label: "I will not force a servo by hand --- it strips the gears."
- key: sf_batt
  label: "I know how the battery is charged and that it is never left on the floor."
- key: sf_wires
  label: "Wires are routed so nothing is trapped or pulled when the robot moves."
- key: sf_pack
  label: "Everything goes back in the kit at the end of every session."
{{< /checklist >}}

{{< endplsec >}}

{{< signoff >}}
check:
  key: done_all
  label: "Every box above is ticked honestly, and my teacher has seen my robot."
fields:
  - key: rec_team
    label: Team name or number
  - key: rec_date
    label: Date completed
{{< /signoff >}}

{{< gate title="Next" >}}
**PreLab 1 --- The Toolchain.** You cannot start Lab 1.1 until your robot boots, connects, and runs a program you wrote.
{{< /gate >}}
