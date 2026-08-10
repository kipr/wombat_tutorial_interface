---
title: "Systems Project 6 — Structure and Function"
short_title: "Systems Project 6"
linkTitle: "Structure and Function"
description: "Why shape decides the job. Compare effectors, then design and build a bulldozer blade for your robot."
weight: 6
nav: discovery
mission_id: discovery_systems_06
mission_title: "Systems Project 6 — Structure and Function"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 6
strand: systems
phase: "Phase B · Think Like an Engineer"
phase_order: 2
time: "One class period"
pace:
  kind: required
  label: "Required before Coding 6"
eyebrow: "Discovery · Systems Project 6"
heading: "Structure and Function"
subheading: "Decide what it has to do. Then build the shape that does it."
credit: "KIPR · Botball Explorer · Discovery"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Systems Project 6"
  - term: "Strand"
    definition: "Systems"
  - term: "Phase"
    definition: "Think Like an Engineer"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Working out why tools are shaped the way they are, then designing and building the blade your robot needs to push things off the black line."
  - term: "Strand Link"
    definition: "REQUIRED before Coding Project 6 — that project cannot be run without this blade"
  - term: "Before You Start"
    definition: "Systems Project 5. You need the [[DESIGN PROCESS|design process]], because you are about to run the whole thing."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your robot"
      - key: need_2
        label: "LEGO and card"
      - key: need_3
        label: "A spoon and a fork"
      - key: need_4
        label: "A few empty cans"
      - key: need_5
        label: "Game cubes, poms and cones"
      - key: need_6
        label: "Your notebook"
---

## Try It — Why Is a Spoon That Shape?

Put a spoon and a fork on the table in front of you.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 30%
  - head: "Spoon"
    width: 35%
  - head: "Fork"
rows:
  -
    - text: "What is its job?"
    - key: p1_job_spoon
      aria: "Spoon job"
    - key: p1_job_fork
      aria: "Fork job"
  -
    - text: "What shape lets it do that?"
    - key: p1_shape_spoon
      aria: "Spoon shape"
    - key: p1_shape_fork
      aria: "Fork shape"
  -
    - text: "What is it bad at?"
    - key: p1_bad_spoon
      aria: "Spoon bad at"
    - key: p1_bad_fork
      aria: "Fork bad at"
{{< /gridtable >}}

### Now move something

Put a small pile of poms on the table. Move the whole pile about a foot, three different ways.

{{< gridtable >}}
columns:
  - head: "Push it with…"
    width: 32%
  - head: "How many arrived?"
    width: 24%
  - head: "What went wrong"
rows:
  -
    - text: "The flat edge of a ruler"
    - key: p1_ruler_n
      aria: "Ruler count"
    - key: p1_ruler_w
      aria: "Ruler problem"
  -
    - text: "Your two hands, cupped"
    - key: p1_hands_n
      aria: "Hands count"
    - key: p1_hands_w
      aria: "Hands problem"
  -
    - text: "An open book, standing up"
    - key: p1_book_n
      aria: "Book count"
    - key: p1_book_w
      aria: "Book problem"
{{< /gridtable >}}
{{< ask key="p1_escape" label="Where poms escaped" >}}The flat ruler let poms escape. Where did they go, and what would have stopped them?{{< /ask >}}

{{< callout variant="gold" title="Shape Decides What a Tool Can Do" >}}
Nobody chose the spoon's curve at random. Somebody worked out what it had to do — hold liquid on the way to a mouth — and then built a shape that does exactly that.

Engineers do this in one direction: **[[FUNCTION|function]] first, then structure.**
{{< /callout >}}

## Learn It — Blades Have Shapes for Reasons

An [[EFFECTOR|effector]] is the part of a robot that changes the world. A blade is an effector, and so is a claw, a spoon, and a bulldozer.

Real bulldozers come with different blades. Each shape does one job well.

{{< figrow >}}
- src: discovery/systems/project-06/bulldozer-blade-shapes.svg
  alt: "Three bulldozer blade shapes seen from above: straight S-blade, universal U-blade with large side wings, and the S-U combination"
{{< /figrow >}}

Seen from above. The wings are the whole difference.

### Which one do you need?

- A **flat front** works — until there is too much stuff, and then it spills round the sides.
- **Sides help** hold things in while you push.
- If you have to **turn or back up**, sides and a front both help.
- If the front can be **lowered over** an object, you can turn and reverse without losing it.

{{< callout variant="navy" title="Three Questions Before You Design Anything" >}}
**What is the challenge?** Say exactly what has to move, and where to.

**What are the limits?** What is not allowed, and what will not fit.

**What do we already know?** You have seen blades before. Use that.
{{< /callout >}}

### Requirements and Constraints are not the same

A [[REQUIREMENT|requirement]] is what your design *must do*. A [[CONSTRAINT|constraint]] is a limit it must stay inside.

{{< gridtable >}}
columns:
  - head: "Kind of limit"
    width: 28%
  - head: "Means"
    width: 32%
  - head: "Example on your robot"
rows:
  -
    - text: "Maximum"
    - text: "No bigger than this"
    - text: "The robot must fit inside the starting box"
  -
    - text: "Minimum"
    - text: "No smaller than this"
    - text: "The blade must be wide enough to catch a pom"
  -
    - text: "About right"
    - text: "Close enough to work"
    - text: "Roughly the height of a small cube"
{{< /gridtable >}}

{{< callout variant="red" title="⚠ The Starting Box Is a Hard Constraint" >}}
Your robot must start **[[FULLY WITHIN]]** the starting box. If your blade is so wide that the robot no longer fits, you cannot start a match at all.

Measure the box before you build. A brilliant blade that gets you disqualified is not a brilliant blade.
{{< /callout >}}

### A bulldozer only pushes

You cannot lift with it and you cannot grab with it. That is not a fault — it is the trade for being simple and strong.

*Pushing also depends on *where* you push. High up, tall things tip over. Low down, they slide. Fast, they scatter. That is worth remembering before you test.*

## Do It — Design the Blade

### 1. Look at what you actually have to push

Coding Project 6 asks your robot to push four different kinds of thing off the black line. They do not behave the same.

Put each one on the table and push it with a flat piece of card. Watch what it does.

{{< gridtable >}}
columns:
  - head: "Object"
    width: 24%
  - head: "What it does when pushed"
    width: 26%
  - head: "What that means for my blade"
rows:
  -
    - text: "Large red cube on its [[PALLET|pallet]]"
    - key: p3_o1_does
      aria: "Cube behaviour"
    - key: p3_o1_means
      aria: "Cube implication"
  -
    - text: "Small cubes"
    - key: p3_o2_does
      aria: "Small cube behaviour"
    - key: p3_o2_means
      aria: "Small cube implication"
  -
    - text: "Poms"
    - key: p3_o3_does
      aria: "Pom behaviour"
    - key: p3_o3_means
      aria: "Pom implication"
  -
    - text: "Traffic cones"
    - key: p3_o4_does
      aria: "Cone behaviour"
    - key: p3_o4_means
      aria: "Cone implication"
{{< /gridtable >}}

{{< callout variant="red" title="⚠ Two of Them Will Cause You Trouble" >}}
Poms roll away sideways. Cones tip over if you catch them too high. One blade has to handle both.
{{< /callout >}}

### 2. Define the problem

One sentence. What must the blade do, to what, and how will you know it worked?

{{< answer key="p3_problem" label="Defined problem" >}}

### 3. Write requirements and constraints

{{< gridtable >}}
columns:
  - head: "#"
    width: 14%
  - head: "My blade must…"
    width: 44%
  - head: "Requirement or constraint?"
rows:
  -
    - text: "1"
    - key: p3_r1
      aria: "Requirement 1"
    - key: p3_r1_k
      aria: "Kind 1"
  -
    - text: "2"
    - key: p3_r2
      aria: "Requirement 2"
    - key: p3_r2_k
      aria: "Kind 2"
  -
    - text: "3"
    - key: p3_r3
      aria: "Requirement 3"
    - key: p3_r3_k
      aria: "Kind 3"
  -
    - text: "4"
    - key: p3_r4
      aria: "Requirement 4"
    - key: p3_r4_k
      aria: "Kind 4"
{{< /gridtable >}}
{{< short-answer key="p3_box_width" label="Starting box width" prompt="Measure the starting box. How wide can your robot be, blade included?" >}}

{{< checklist >}}
- key: p3_measured
  label: "I measured the box before designing anything"
{{< /checklist >}}

### 4. Sketch three blades

One straight. One with big wings. One in between. Draw each from above.

*Three sketches, seen from above, in your notebook*

{{< gridtable >}}
columns:
  - head: "Design"
    width: 16%
  - head: "What it is good at"
    width: 42%
  - head: "What it is bad at"
rows:
  -
    - text: "A"
    - key: p3_dA_good
      aria: "A good"
    - key: p3_dA_bad
      aria: "A bad"
  -
    - text: "B"
    - key: p3_dB_good
      aria: "B good"
    - key: p3_dB_bad
      aria: "B bad"
  -
    - text: "C"
    - key: p3_dC_good
      aria: "C good"
    - key: p3_dC_bad
      aria: "C bad"
{{< /gridtable >}}

### 5. Choose one, and say why
{{< ask key="p3_chose" label="Chosen design" >}}I am building design ___ because:{{< /ask >}}
{{< short-answer key="p3_weakest" label="Weakest against" prompt="Which object is it weakest against?" >}}

### 6. Build it and test on cans first

Build your blade from LEGO, card, or whatever your class is using. Fit it to the robot.

Test on empty cans before you touch the game field. Cans are cheap, big, and easy to see.

{{< gridtable >}}
columns:
  - head: "Try"
    width: 14%
  - head: "Cans pushed"
    width: 30%
  - head: "Any tip over?"
    width: 26%
  - head: "What I changed"
rows:
  -
    - text: "1"
    - key: p3_c1_n
      aria: "Cans 1"
    - key: p3_c1_tip
      aria: "Tip 1"
    - key: p3_c1_chg
      aria: "Change 1"
  -
    - text: "2"
    - key: p3_c2_n
      aria: "Cans 2"
    - key: p3_c2_tip
      aria: "Tip 2"
    - key: p3_c2_chg
      aria: "Change 2"
  -
    - text: "3"
    - key: p3_c3_n
      aria: "Cans 3"
    - key: p3_c3_tip
      aria: "Tip 3"
    - key: p3_c3_chg
      aria: "Change 3"
{{< /gridtable >}}

### 7. Push high, low, and fast

Three quick experiments with the same can.

{{< gridtable >}}
columns:
  - head: "Try this"
    width: 34%
  - head: "What happened to the can"
rows:
  -
    - text: "Push near the top of the can"
    - key: p3_e_high
      aria: "Push high"
  -
    - text: "Push near the bottom"
    - key: p3_e_low
      aria: "Push low"
  -
    - text: "Push fast instead of slowly"
    - key: p3_e_fast
      aria: "Push fast"
{{< /gridtable >}}
{{< ask key="p3_height" label="Blade height" >}}What height should your blade catch things at, and why?{{< /ask >}}

### 8. Now test on the real thing

Take it to the game field and try all four object types.

{{< gridtable >}}
columns:
  - head: "Object"
    width: 28%
  - head: "Went [[OFF]] the line?"
    width: 24%
  - head: "What went wrong"
rows:
  -
    - text: "Large red cube + pallet"
    - key: p3_g1
      aria: "Game cube"
    - key: p3_g1_w
      aria: "Game cube problem"
  -
    - text: "Small cubes"
    - key: p3_g2
      aria: "Game small"
    - key: p3_g2_w
      aria: "Game small problem"
  -
    - text: "Poms"
    - key: p3_g3
      aria: "Game poms"
    - key: p3_g3_w
      aria: "Game poms problem"
  -
    - text: "Traffic cones"
    - key: p3_g4
      aria: "Game cones"
    - key: p3_g4_w
      aria: "Game cones problem"
{{< /gridtable >}}

{{< callout variant="gold" title="A Cone Lying on Its Side Still Counts" >}}
[[@14:base|Mission 14]] asks for the cones to be [[OFF]] the black line. It does not say they have to stay standing.

Check the mission wording yourself before you spend an afternoon designing around a rule that is not there.
{{< /callout >}}

### 9. Fix the worst failure

Pick the object that went worst. Change the blade. Test it again.
{{< ask key="p3_fix" label="Fix" >}}What failed, what did I change, and did it work?{{< /ask >}}
{{< short-answer key="p3_tradeoff" label="Trade-off" prompt="Did fixing that one make anything else worse?" >}}

### 10. Check it still fits, then lock it in

Put the robot in the starting box one last time, blade attached.

{{< checklist >}}
- key: p3_fits
  label: "The whole robot is [[FULLY WITHIN]] the starting box"
- key: p3_firm
  label: "The blade does not wobble or fall off when it hits something"
- key: p3_sketch
  label: "I drew my final blade and wrote down its measurements"
- key: p3_rebuild
  label: "I could rebuild it exactly from my notes if it broke"
{{< /checklist >}}

{{< callout variant="navy" title="Hand This Over" >}}
Your class can now start **Coding Project 6 — Bulldoze Run**. That project scores sixteen points entirely by pushing, and none of it works without what you just built.
{{< /callout >}}

## Score It — Checkpoint

### Function first

For each tool, name the job, then the shape that does it.

{{< gridtable >}}
columns:
  - head: "Tool"
    width: 24%
  - head: "Its job"
    width: 36%
  - head: "The shape that serves it"
rows:
  -
    - text: "A rake"
    - key: p4_t1_j
      aria: "Rake job"
    - key: p4_t1_s
      aria: "Rake shape"
  -
    - text: "A funnel"
    - key: p4_t2_j
      aria: "Funnel job"
    - key: p4_t2_s
      aria: "Funnel shape"
  -
    - text: "A robot claw"
    - key: p4_t3_j
      aria: "Claw job"
    - key: p4_t3_s
      aria: "Claw shape"
{{< /gridtable >}}

### Requirement or constraint?

{{< gridtable >}}
columns:
  - head: "Statement"
    width: 62%
  - head: "Which one"
rows:
  -
    - text: "The blade must push a pom without letting it escape sideways"
    - key: p4_c1
      aria: "Kind 1"
  -
    - text: "The robot must fit inside the starting box"
    - key: p4_c2
      aria: "Kind 2"
  -
    - text: "The blade must move a cone off the black line"
    - key: p4_c3
      aria: "Kind 3"
  -
    - text: "We only have the LEGO that came in the kit"
    - key: p4_c4
      aria: "Kind 4"
{{< /gridtable >}}

### My blade

{{< gridtable >}}
columns:
  - head: "Measurement"
    width: 56%
  - head: "Value"
rows:
  -
    - text: "Width"
    - key: p4_w
      aria: "Width"
  -
    - text: "Height off the floor"
    - key: p4_h
      aria: "Height"
  -
    - text: "Wing depth, if any"
    - key: p4_wing
      aria: "Wing depth"
  -
    - text: "Robot width with the blade on"
    - key: p4_total
      aria: "Total width"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_ff
  label: "I work out the function before I design the structure"
- key: p4_can_blades
  label: "I can name the three blade shapes and what each is good at"
- key: p4_can_rc
  label: "I can tell a requirement from a constraint"
- key: p4_can_measure
  label: "I check the limits before building, not after"
- key: p4_can_test
  label: "I test on something cheap before I test on the real field"
- key: p4_can_tradeoff
  label: "I can explain what my design gives up to be good at its job"
- key: p4_can_notes
  label: "My blade is written down well enough to rebuild"
{{< /checklist >}}

### Think about it
{{< ask key="p4_why_blade" label="Why a blade" >}}A blade cannot lift and cannot grab. Why build one at all, instead of putting a claw on everything?{{< /ask >}}
{{< ask key="p4_compromise" label="Compromise" >}}You had one blade and four different objects to push. Where did you have to compromise?{{< /ask >}}
{{< ask key="p4_next_season" label="Next season" >}}Next season the game changes and there are no cones. What would you keep from this blade, and what would you throw away?{{< /ask >}}

### Next

A blade pushes. It cannot pick anything up, and half the missions on the field need exactly that.

In **Systems Project 7**, you build the arm and claw — and that one unlocks everything from Coding Project 7 onwards.
