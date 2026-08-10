---
title: "Systems Project 2 — What Makes a Robot a Robot?"
short_title: "Systems Project 2"
linkTitle: "What Makes a Robot a Robot?"
description: "Robot or not a robot — and why the line is harder to draw than it looks. Robot components and what each one is for."
weight: 2
nav: discovery
mission_id: discovery_systems_02
mission_title: "Systems Project 2 — What Makes a Robot a Robot?"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 2
strand: systems
phase: "Phase A · Know Your Machine"
phase_order: 1
time: "One class period"
pace:
  kind: suggested
  label: "Before Coding 3"
eyebrow: "Discovery · Systems Project 2"
heading: "What Makes a Robot a Robot?"
subheading: "Harder to answer than it sounds — and the answer is a list of six things."
credit: "KIPR · Botball Explorer · Discovery"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Systems Project 2"
  - term: "Strand"
    definition: "Systems"
  - term: "Phase"
    definition: "Know Your Machine"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Arguing about what counts as a robot, then finding the six parts every robot has — including yours, and including you."
  - term: "Strand Link"
    definition: "Do this before Coding Project 3"
  - term: "Before You Start"
    definition: "Systems Project 1 — you should be able to name the parts in your kit."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your kit"
      - key: need_2
        label: "Your notebook"
      - key: need_3
        label: "Scrap paper"
      - key: need_4
        label: "A partner and a class to argue with"
---

## Try It --- Robot or Not?

Go down this list. For each one, decide **yes** or **no** --- and write the reason that made you choose.

*Do this on your own first. No talking yet.*

{{< gridtable >}}
columns:
  - head: "Is this a robot?"
    width: 36%
  - head: "Yes / No"
    width: 16%
  - head: "Because..."
rows:
  -
    - text: "A robot vacuum cleaner"
    - key: p1_r1
      aria: "Vacuum yes no"
    - key: p1_r1_why
      aria: "Vacuum why"
  -
    - text: "A washing machine"
    - key: p1_r2
      aria: "Washing machine yes no"
    - key: p1_r2_why
      aria: "Washing machine why"
  -
    - text: "A remote-control car"
    - key: p1_r3
      aria: "RC car yes no"
    - key: p1_r3_why
      aria: "RC car why"
  -
    - text: "A thermostat on the wall"
    - key: p1_r4
      aria: "Thermostat yes no"
    - key: p1_r4_why
      aria: "Thermostat why"
  -
    - text: "A factory welding arm"
    - key: p1_r5
      aria: "Welding arm yes no"
    - key: p1_r5_why
      aria: "Welding arm why"
  -
    - text: "A doll that talks when you pull a string"
    - key: p1_r6
      aria: "Doll yes no"
    - key: p1_r6_why
      aria: "Doll why"
  -
    - text: "A self-checkout till"
    - key: p1_r7
      aria: "Self checkout yes no"
    - key: p1_r7_why
      aria: "Self checkout why"
  -
    - text: "A drone flown by a person"
    - key: p1_r8
      aria: "Drone yes no"
    - key: p1_r8_why
      aria: "Drone why"
  -
    - text: "A car that parks itself"
    - key: p1_r9
      aria: "Self parking car yes no"
    - key: p1_r9_why
      aria: "Self parking car why"
  -
    - text: "Your Wombat, sitting switched off"
    - key: p1_r10
      aria: "Wombat off yes no"
    - key: p1_r10_why
      aria: "Wombat off why"
{{< /gridtable >}}

### Now argue

Turn to the person next to you and compare. Find one you disagreed on and try to talk each other round.
{{< short-answer key="p1_disagreed" label="Most disagreed" prompt="Which one did you disagree about most?" >}}
{{< ask key="p1_changed_mind" label="Changed mind" >}}Did either of you change your mind? What was the argument that did it?{{< /ask >}}

{{< callout variant="gold" title="You Have Been Using a Rule Without Saying It" >}}
To answer any of those, you had to have some idea in your head of what a robot *is*. You have never written it down.

Do it now, in one sentence: **a robot is...**
{{< /callout >}}
{{< ask key="p1_my_definition" label="My definition" >}}My definition of a robot:{{< /ask >}}

## Learn It --- Six Things Every Robot Has

{{< figrow >}}
- src: kit/wambatmotors.jpg
  alt: "The controller and its motors --- computation and actuators in one picture."
{{< /figrow >}}

People have argued about the definition of "robot" for a hundred years and have not settled it. But engineers agree on something more useful: **what a robot is made of.**

Every robot --- yours, a factory arm, a Mars rover --- has these six.

#### Structure

Holds everything together and holds the [[SENSOR|sensors]] in position. Your skeleton does this job.

Joints usually have an [[ACTUATOR|actuator]] attached --- the robot's equivalent of a muscle.

*Examples: Chassis, brackets, frame*

#### Effectors

An [[EFFECTOR|effector]] changes the [[STATE|state]] of the robot, or changes the state of the world.

*Examples: Motors, arms, legs, thrusters --- and also buzzers, lights, and speakers*

#### Sensors

How the robot finds things out instead of assuming.

Some report on the **world**. Some report on the **robot itself**.

*Examples: Touch, light, range*

#### Power

Where the energy comes from, how it gets around, and how it is kept steady.

*Examples: Batteries, solar panels, springs, hydraulics --- and the wires and regulators that move and manage it*

#### Computation

The part that reads the sensor values, works out what they mean, and decides which effector command to send.

*Examples: Your Wombat's processor*

#### Information

What the robot knows. How to read its sensors, how to build commands, what has happened so far --- and the program that decides what it does.

*Examples: Your code*

{{< callout variant="navy" title="Computation and Information Are Not the Same Thing" >}}
**Computation** is the machinery that thinks. **Information** is what it thinks about and what it thinks with.

Same Wombat, different program, completely different robot. The hardware did not change --- the information did.
{{< /callout >}}

### Two kinds of sensing

- **External** --- Reports on the **world around** the robot. A touch sensor pressing a wall. A light sensor reading the mat.

- **[[PROPRIOCEPTIVE|Proprioceptive]]** --- Reports on the **robot's own state**. Proprioceptive sensing is how you know you are sitting down with your eyes shut.

{{< callout variant="gold" title="You Will Meet Both in the Coding Strand" >}}
The touch sensor and the light sensor look outward. But the counter inside each motor, telling the robot how far its own wheels have turned, looks *inward* --- that one is proprioceptive.

Same idea as knowing where your hand is without looking at it.
{{< /callout >}}

## Do It --- Find the Six

### 1. Snowball your definition

Copy your one-sentence definition from Try It onto scrap paper. No name on it.

Screw it into a ball. On the count of three, everyone throws. Pick up whichever one lands near you.

Read it. Now improve it --- add something it missed, or cut something that is not really needed.
{{< short-answer key="p3_snowball_got" label="Definition picked up" prompt="The definition I picked up said:" >}}
{{< ask key="p3_snowball_changed" label="What I changed" >}}What I changed, and why:{{< /ask >}}

Throw again. Do it twice more. Then read a few out to the class.
{{< ask key="p3_class_definition" label="Class definition" >}}After hearing everyone's, what does the class definition need that yours did not have?{{< /ask >}}

### 2. Become the expert on one component

Split the six components across your team, one each --- or one per pair if you are a small team.

Yours is the one you have to explain to everybody else. Write it in your own words, not copied from above, and find **one example that is not on this sheet**.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 26%
  - head: "My answer"
rows:
  -
    - text: "My component"
    - key: p3_my_comp
      aria: "My component"
  -
    - text: "In my own words"
    - key: p3_my_words
      aria: "In my own words"
  -
    - text: "An example nobody gave me"
    - key: p3_my_example
      aria: "My example"
  -
    - text: "What breaks without it"
    - key: p3_my_without
      aria: "Without it"
{{< /gridtable >}}

Teach yours. Take notes on the other five as they are taught.

{{< checklist >}}
- key: p3_taught
  label: "I taught mine and I have notes on all six"
{{< /checklist >}}

### 3. Match it up

People and robots solve the same problems in different materials. Match each one on the left to its opposite number on the right.

#### People

1. Bones
2. Muscles
3. Senses
4. Brain
5. Digestion and breathing
6. Knowledge

#### Robots

- Computer
- Power
- Computer program
- Sensors
- Effectors
- Mechanical structures

{{< gridtable >}}
columns:
  - head: "People"
    width: 30%
  - head: "Robots --- letter"
    width: 30%
  - head: "Why that one"
rows:
  -
    - text: "1 · Bones"
    - key: p3_m1
      aria: "Match bones"
    - key: p3_m1_why
      aria: "Match bones why"
  -
    - text: "2 · Muscles"
    - key: p3_m2
      aria: "Match muscles"
    - key: p3_m2_why
      aria: "Match muscles why"
  -
    - text: "3 · Senses"
    - key: p3_m3
      aria: "Match senses"
    - key: p3_m3_why
      aria: "Match senses why"
  -
    - text: "4 · Brain"
    - key: p3_m4
      aria: "Match brain"
    - key: p3_m4_why
      aria: "Match brain why"
  -
    - text: "5 · Digestion and breathing"
    - key: p3_m5
      aria: "Match digestion"
    - key: p3_m5_why
      aria: "Match digestion why"
  -
    - text: "6 · Knowledge"
    - key: p3_m6
      aria: "Match knowledge"
    - key: p3_m6_why
      aria: "Match knowledge why"
{{< /gridtable >}}
{{< ask key="p3_awkward_pairs" label="Awkward pairs" >}}Two of those pairs are much harder to justify than the others. Which two, and what makes them awkward?{{< /ask >}}

### 4. Find all six in your own kit

Back to the table. For each component, point at the actual part.

{{< gridtable >}}
columns:
  - head: "Component"
    width: 26%
  - head: "In my kit, this is..."
    width: 38%
  - head: "Do I have more than one option?"
rows:
  -
    - text: "Structure"
    - key: p3_k_structure
      aria: "Kit structure"
    - key: p3_k_structure_alt
      aria: "Kit structure alt"
  -
    - text: "Effectors"
    - key: p3_k_effectors
      aria: "Kit effectors"
    - key: p3_k_effectors_alt
      aria: "Kit effectors alt"
  -
    - text: "Sensors"
    - key: p3_k_sensors
      aria: "Kit sensors"
    - key: p3_k_sensors_alt
      aria: "Kit sensors alt"
  -
    - text: "Power"
    - key: p3_k_power
      aria: "Kit power"
    - key: p3_k_power_alt
      aria: "Kit power alt"
  -
    - text: "Computation"
    - key: p3_k_computation
      aria: "Kit computation"
    - key: p3_k_computation_alt
      aria: "Kit computation alt"
  -
    - text: "Information"
    - key: p3_k_information
      aria: "Kit information"
    - key: p3_k_information_alt
      aria: "Kit information alt"
{{< /gridtable >}}

{{< callout variant="red" title="⚠ One of Them Is Not in the Box" >}}
Five of these you can hold. One of them you have not made yet.

Which one --- and what does that tell you about who finishes building this robot?
{{< /callout >}}

{{< answer key="p3_not_in_box" label="Not in the box" >}}

### 5. Take one away

Pick any of the six and imagine your robot without it. Describe what is left.

{{< gridtable >}}
columns:
  - head: "Remove this"
    width: 30%
  - head: "What the robot could still do, and what it could not"
rows:
  -
    - key: p3_rm1
      aria: "Remove 1"
    - key: p3_rm1_res
      aria: "Remove 1 result"
  -
    - key: p3_rm2
      aria: "Remove 2"
    - key: p3_rm2_res
      aria: "Remove 2 result"
  -
    - key: p3_rm3
      aria: "Remove 3"
    - key: p3_rm3_res
      aria: "Remove 3 result"
{{< /gridtable >}}
{{< ask key="p3_which_essential" label="Which is essential" >}}Which one, taken away, stops it being a robot at all --- rather than just a worse robot?{{< /ask >}}

### 6. Go back to your list

Return to the ten things in Try It. Run each one through the six components and see how many it actually has.

{{< gridtable >}}
columns:
  - head: "Thing"
    width: 36%
  - head: "How many of the six?"
    width: 22%
  - head: "Any I would change my mind on?"
rows:
  -
    - text: "A washing machine"
    - key: p3_re_washer
      aria: "Recheck washer"
    - key: p3_re_washer_c
      aria: "Recheck washer change"
  -
    - text: "A remote-control car"
    - key: p3_re_rc
      aria: "Recheck RC"
    - key: p3_re_rc_c
      aria: "Recheck RC change"
  -
    - text: "A thermostat"
    - key: p3_re_therm
      aria: "Recheck thermostat"
    - key: p3_re_therm_c
      aria: "Recheck thermostat change"
  -
    - text: "A talking doll"
    - key: p3_re_doll
      aria: "Recheck doll"
    - key: p3_re_doll_c
      aria: "Recheck doll change"
{{< /gridtable >}}
{{< ask key="p3_easier" label="Easier to settle" >}}Did having the six components make the arguments easier to settle, or did it just move them somewhere else?{{< /ask >}}

### 7. Robots at home

As a class, list every robot you can find in your homes and around your community. Push past the obvious ones.

{{< gridtable >}}
columns:
  - head: "Where I found it"
    width: 44%
  - head: "What it does"
rows:
  -
    - key: p3_h1
      aria: "Home robot 1"
    - key: p3_h1_does
      aria: "Home robot 1 does"
  -
    - key: p3_h2
      aria: "Home robot 2"
    - key: p3_h2_does
      aria: "Home robot 2 does"
  -
    - key: p3_h3
      aria: "Home robot 3"
    - key: p3_h3_does
      aria: "Home robot 3 does"
  -
    - key: p3_h4
      aria: "Home robot 4"
    - key: p3_h4_does
      aria: "Home robot 4 does"
{{< /gridtable >}}
{{< short-answer key="p3_surprising" label="Surprising count" prompt="How many did the class find that nobody would have called a robot an hour ago?" >}}

## Score It --- Checkpoint

### Name the component

{{< gridtable >}}
columns:
  - head: "This part of a robot..."
    width: 56%
  - head: "Which of the six?"
rows:
  -
    - text: "Holds the sensors where they need to be"
    - key: p4_c1
      aria: "Component 1"
  -
    - text: "Reads a value and works out what to do about it"
    - key: p4_c2
      aria: "Component 2"
  -
    - text: "Changes something about the world outside the robot"
    - key: p4_c3
      aria: "Component 3"
  -
    - text: "Keeps the voltage steady on the way to the motors"
    - key: p4_c4
      aria: "Component 4"
  -
    - text: "Remembers what has happened so far this run"
    - key: p4_c5
      aria: "Component 5"
  -
    - text: "Tells the robot the wall is right there"
    - key: p4_c6
      aria: "Component 6"
{{< /gridtable >}}

### External or proprioceptive?

{{< gridtable >}}
columns:
  - head: "Sensor"
    width: 56%
  - head: "Which kind?"
rows:
  -
    - text: "A touch sensor on the front bumper"
    - key: p4_s1
      aria: "Sensor 1"
  -
    - text: "The counter inside a motor tracking how far the wheel turned"
    - key: p4_s2
      aria: "Sensor 2"
  -
    - text: "A light sensor reading the mat"
    - key: p4_s3
      aria: "Sensor 3"
  -
    - text: "A battery meter reporting charge left"
    - key: p4_s4
      aria: "Sensor 4"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_six
  label: "I can name all six components without looking"
- key: p4_can_point
  label: "I can point to all six on my own robot kit"
- key: p4_can_comp_info
  label: "I can explain the difference between computation and information"
- key: p4_can_sensor_kinds
  label: "I can tell an external sensor from a proprioceptive one"
- key: p4_can_effector
  label: "I can say what an effector is and give three different examples"
- key: p4_can_body
  label: "I can match a robot's parts to the parts of a human body"
- key: p4_can_argue
  label: "I can argue for or against something being a robot, using the six"
{{< /checklist >}}

### Think about it
{{< ask key="p4_definition_now" label="Definition now" >}}Look at the definition you wrote at the start of Try It. Would you write it the same way now?{{< /ask >}}
{{< ask key="p4_washer_vs_rover" label="Washer versus rover" >}}A washing machine has structure, effectors, sensors, power, computation, and information. So does a Mars rover. If they both have all six, what is actually different between them?{{< /ask >}}
{{< ask key="p4_is_it_yet" label="Is it a robot yet" >}}Your Wombat sits on the table, switched off, with no program in it. Is it a robot yet? Does your answer change once you write the code?{{< /ask >}}

### Next

You have found that some machines do what they are told the instant you tell them, and some are left to get on with it alone. That difference has a name, and it turns out to matter more than almost anything else.

In **Systems Project 3 --- Who's Driving?**, you sort the world into three kinds of control.

*You are also ready for **Coding Project 3**, where the effectors on your own robot start turning.*
