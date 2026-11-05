---
title: "Mechanical Design · Challenge 24 — One Motor, Two Speeds"
short_title: "Challenge 24"
description: "Split a drive train and each branch gets its own gearing. A striker spinning fast while the car crawls forward."
mission_id: "mech24_worm_fundamentals"
mission_title: "Mechanical Design · Challenge 24 — One Motor, Two Speeds"
eyebrow: "Mechanical Design · Challenge 24"
heading: "One Motor, Two Speeds"
subheading: "Student Challenge · Splitting a Drive Train"
credit: "KIPR · Botball Explorer · Mechanical Design Challenge 24 — Student Sheet"
sidebar:
  min: 2
  max: 2
meta:
  -
    term: "Module Guiding Question"
    definition: "Can one motor run two things at once, at completely different speeds?"
  -
    term: "Big Idea"
    definition: "A [[DRIVE TRAIN|drive train]] can split. Each [[BRANCHED DRIVE|branch]] gets its own gearing, so one input can produce as many different speeds as you have branches."
  -
    term: "Mechanism"
    definition: "Branched drive train with a worm gear on one side"
  -
    term: "Design Concepts"
    definition: "[[TIP SPEED|Tip speed]] · [[GEAR REDUCTION|Gear reduction]] · [[EFFECTOR|Effector]]"
  -
    term: "Materials"
    definition: "Kit parts only"
  -
    term: "What You Need"
    definition: "LEGO kit · one motor · Wombat controller · worm gear · wheels · a chassis · at least 3 poms · ruler · stopwatch"
  -
    term: "Prerequisites"
    definition: "Challenge 9 for the worm gear, Challenge 13 for building a vehicle"
  -
    term: "Source Title"
    definition: "This challenge appears in the original deck as \"Fundamentals of a Worm Gear.\""
weight: 25
hub_unit: 8
hub_title: "One Motor, Two Speeds"
hub_label: "Challenge 24"
---

## Overview

Every mechanism you have built so far had one motor doing one job, or several motors each doing their own. This one has a single motor doing two jobs at the same time --- and the two jobs need wildly different speeds.

The striker on the front has to spin fast enough to knock a pom clear. The wheels have to creep forward slowly enough that the striker gets a chance to do it. Same motor, same instant, roughly twenty times the difference.

{{< callout title="Core Insight" >}}
A drive train does not have to be a single line from motor to output. Split it, and each branch can have completely different gearing. One motor, as many speeds as you need.
{{< /callout >}}

### By the end of this challenge you will be able to:

- Split a drive train into two branches from a single motor.
- Give each branch its own gear ratio and predict the resulting speeds.
- Explain why the tip of a spinning arm moves far faster than the shaft it is on.
- Build a moving vehicle whose effector works while it drives.

## Phase 1 --- Observe: Watch the Mechanism

Watch the video below. Do not build anything yet. Watch it at least twice.

{{< youtube id="zqYFVNY1CYA" title="LEGO worm gear fundamentals" >}}

Simple mechanics --- fundamentals of a worm gear.

{{< callout title="Watch For" variant="navy" >}}
1\. What do you notice?

2\. What is happening?

3\. Follow the power from the motor. Where does it split, and what does each path drive?
{{< /callout >}}

What do you notice? Describe what the mechanism is doing.

{{< answer key="p1_notice" label="What do you notice" >}}

Trace the path from the motor to each output. Where exactly does the power divide?

{{< answer key="p1_split" label="Where the power splits" >}}

What LEGO pieces might take the place of each of the pieces you see?

{{< answer key="p1_pieces" label="LEGO substitutions" >}}

## Phase 2 --- Concept: Splitting the Drive

A [[DRIVE TRAIN|drive train]] is everything between the motor and the thing being driven. Up to now yours have been a single chain: motor, gears, output.

They do not have to be. Take power off the motor shaft at two points and you have two [[BRANCHED DRIVE|branches]], and each branch can be geared however you like.

{{< figrow tall=true >}}
- src: "mech24_worm_fundamentals-diagram-01.svg"
  alt: "A drive train splitting into two branches from one motor. The upper branch runs straight to a spinning striker and turns at full motor speed. The lower branch passes through a worm gear before reaching the wheels, so they turn far more slowly."
  caption: "The branch point is where the design decision lives. Everything after it is just gearing."
{{< /figrow >}}

{{< callout title="Why the Worm Belongs on the Slow Branch" variant="navy" >}}
You need an enormous slowdown on the wheels and none at all on the striker. A worm gear gives you roughly a 24:1 reduction from a single pair of parts --- which is exactly why it goes on that branch and nowhere near the other one.

Building the same reduction from spur gears would take three or four pairs and a great deal more space.
{{< /callout >}}

### The Striker Moves Faster Than Its Shaft

A shaft turning at, say, two turns per second does not sound fast. But the face of a striker mounted three inches out from that shaft travels the whole way around a circle nearly nineteen inches long, twice every second.

That is [[TIP SPEED|tip speed]], and it is why a modest motor can knock a pom clear across a table. Move the face further out and it goes faster still, for free.

Your striker has to hit hard and your wheels have to crawl. Which branch needs the worm, and what would happen if you put it on the other one?

{{< answer key="p2_which_branch" label="Which branch gets the worm" >}}

## Phase 3 --- Build the Bare Mechanism

Build the split first: motor, branch point, and both branches turning --- with no striker face and no chassis. Confirm that both outputs turn from the one motor before you build anything onto them.

{{< callout title="Before You Go On" variant="navy" >}}
Turn the motor shaft by hand. Both branches should move together, at obviously different speeds. If only one turns, the split is not actually splitting.

Watch the worm branch especially. Under load it will try to push itself out of mesh, and if it does, the wheels stop while the striker keeps spinning --- which looks like a wiring fault and is not one.
{{< /callout >}}

### Measure Both Speeds

Count how many times the striker shaft turns while the wheel axle turns once. That number is the difference between your two branches.

How many striker turns per single wheel-axle turn? Does it match what the gearing predicted?

{{< answer key="p3_ratio_measured" label="Measured ratio" >}}

## Phase 4 --- Engineering to Meet a Need

{{< callout title="The Need" >}}
Using your newly created LEGO contraption, create an effector that spins at the speed of the motor in front and rotates an effector that can knock off the top pom of a stack of poms. The worm gear will turn a drive axle at the slower speed.
{{< /callout >}}

### Mental Picture

Think of a propeller plane taxiing. The propeller is a blur while the plane rolls forward at walking pace --- one engine, two completely different speeds, at the same time.

### Constraints

Every one of these must be true for your design to count as finished.

1.  Only one motor can be used.
2.  The "golf club" must have a face approximately 1″ tall and 2″ wide. At the bottom of its arc, the bottom of the face should sit approximately 1¼″ off the surface.
3.  The motor must drive a straight axle as well as the propeller on the front of the car.

{{< callout title="That 1¼″ Is Not Arbitrary" >}}
You met this in Challenge 12. The height sets a window: low enough for the face to catch the pom on top of the stack, high enough to sweep over the poms holding it up.

The difference this time is that the whole machine is moving while it happens. The face passes through that window once per revolution, and the car is somewhere slightly different each time.
{{< /callout >}}

{{< figrow tall=true >}}
- src: "mech24_worm_fundamentals-diagram-02.svg"
  alt: "Side view of the car. The striker arm rotates on the front, its face sweeping down to about one and a quarter inches above the surface, where it strikes the top pom of a three pom stack while the car creeps forward."
  caption: "The face sweeps through the gap between the top pom and the two beneath it, once every revolution."
{{< /figrow >}}

### Do the Math First

{{< gridtable >}}
columns:
  -
    head: "Planned value"
  -
    head: "Your Value"
  -
    head: "Unit"
rows:
  -
    -
      text: "Gearing on the striker branch"
    -
      key: "p4_striker_ratio"
      aria: "Striker ratio"
    -
      key: "p4_striker_ratio_unit"
      aria: "Unit"
      value: ": 1"
  -
    -
      text: "Gearing on the wheel branch"
    -
      key: "p4_wheel_ratio"
      aria: "Wheel ratio"
    -
      key: "p4_wheel_ratio_unit"
      aria: "Unit"
      value: ": 1"
  -
    -
      text: "Distance from the striker shaft to the bottom of the face"
    -
      key: "p4_arm_radius"
      aria: "Arm radius"
    -
      key: "p4_arm_radius_unit"
      aria: "Unit"
      value: "in"
{{< /gridtable >}}

### Your Plan --- Before You Build

Break the build into manageable steps.

{{< steps key="p4_step" label="Build step" start=1 count=5 >}}

Predict: will your car fail by driving too fast to hit anything, by the striker missing the window, or by knocking the whole stack over?

{{< answer key="p4_predict" label="Prediction" >}}

## Phase 5 --- Test & Iterate

{{< callout title="Set the Stack Up the Same Way Every Time" >}}
Mark the spot, use the same poms, and start the car from the same line. The car is moving while it strikes, so where it starts decides where the face lands.

If the result changes run to run and you have not changed anything, check your setup before you change the machine.
{{< /callout >}}

### Your Numbers

{{< gridtable >}}
columns:
  -
    head: "Measurement"
  -
    head: "Your Value"
  -
    head: "Unit"
rows:
  -
    -
      text: "Striker revolutions in 10 seconds"
    -
      key: "p5_striker_revs"
      aria: "Striker revolutions"
    -
      key: "p5_striker_revs_unit"
      aria: "Unit"
      value: "turns"
  -
    -
      text: "Wheel-axle revolutions in the same 10 seconds"
    -
      key: "p5_wheel_revs"
      aria: "Wheel revolutions"
    -
      key: "p5_wheel_revs_unit"
      aria: "Unit"
      value: "turns"
  -
    -
      text: "Ratio between the two branches"
    -
      key: "p5_branch_ratio"
      aria: "Branch ratio"
    -
      key: "p5_branch_ratio_unit"
      aria: "Unit"
      value: ": 1"
  -
    -
      text: "Distance the car travelled in 10 seconds"
    -
      key: "p5_distance"
      aria: "Distance travelled"
    -
      key: "p5_distance_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Height of the bottom of the face at the bottom of its arc"
    -
      key: "p5_face_height"
      aria: "Face height"
    -
      key: "p5_face_height_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Face dimensions"
    -
      key: "p5_face_size"
      aria: "Face dimensions"
    -
      key: "p5_face_size_unit"
      aria: "Unit"
      value: "in × in"
  -
    -
      text: "How far the struck pom travelled"
    -
      key: "p5_pom_distance"
      aria: "Pom distance"
    -
      key: "p5_pom_distance_unit"
      aria: "Unit"
      value: "in"
  -
    -
      text: "Runs where the bottom poms stayed put"
    -
      key: "p5_clean_runs"
      aria: "Clean runs"
    -
      key: "p5_clean_runs_unit"
      aria: "Unit"
      value: "of 10"
{{< /gridtable >}}

### Trial Log

Complete one row for every run. Never skip a row --- failed runs contain the most information.

{{< gridtable caption="Trial Log" >}}
columns:
- head: "Trial"
- head: "What you changed"
- head: "Top pom off?"
- head: "Bottom poms in place?"
- head: "What you observed"
rows:
  -
    - text: "1"
    - key: "trial1_changed"
      aria: "Trial 1 changed"
    - key: "trial1_topoff"
      aria: "Trial 1 top pom off"
    - key: "trial1_bottomok"
      aria: "Trial 1 bottom poms in place"
    - key: "trial1_observed"
      aria: "Trial 1 observed"
  -
    - text: "2"
    - key: "trial2_changed"
      aria: "Trial 2 changed"
    - key: "trial2_topoff"
      aria: "Trial 2 top pom off"
    - key: "trial2_bottomok"
      aria: "Trial 2 bottom poms in place"
    - key: "trial2_observed"
      aria: "Trial 2 observed"
  -
    - text: "3"
    - key: "trial3_changed"
      aria: "Trial 3 changed"
    - key: "trial3_topoff"
      aria: "Trial 3 top pom off"
    - key: "trial3_bottomok"
      aria: "Trial 3 bottom poms in place"
    - key: "trial3_observed"
      aria: "Trial 3 observed"
  -
    - text: "4"
    - key: "trial4_changed"
      aria: "Trial 4 changed"
    - key: "trial4_topoff"
      aria: "Trial 4 top pom off"
    - key: "trial4_bottomok"
      aria: "Trial 4 bottom poms in place"
    - key: "trial4_observed"
      aria: "Trial 4 observed"
  -
    - text: "5"
    - key: "trial5_changed"
      aria: "Trial 5 changed"
    - key: "trial5_topoff"
      aria: "Trial 5 top pom off"
    - key: "trial5_bottomok"
      aria: "Trial 5 bottom poms in place"
    - key: "trial5_observed"
      aria: "Trial 5 observed"
  -
    - text: "6"
    - key: "trial6_changed"
      aria: "Trial 6 changed"
    - key: "trial6_topoff"
      aria: "Trial 6 top pom off"
    - key: "trial6_bottomok"
      aria: "Trial 6 bottom poms in place"
    - key: "trial6_observed"
      aria: "Trial 6 observed"
  -
    - text: "7"
    - key: "trial7_changed"
      aria: "Trial 7 changed"
    - key: "trial7_topoff"
      aria: "Trial 7 top pom off"
    - key: "trial7_bottomok"
      aria: "Trial 7 bottom poms in place"
    - key: "trial7_observed"
      aria: "Trial 7 observed"
  -
    - text: "8"
    - key: "trial8_changed"
      aria: "Trial 8 changed"
    - key: "trial8_topoff"
      aria: "Trial 8 top pom off"
    - key: "trial8_bottomok"
      aria: "Trial 8 bottom poms in place"
    - key: "trial8_observed"
      aria: "Trial 8 observed"
  -
    - text: "9"
    - key: "trial9_changed"
      aria: "Trial 9 changed"
    - key: "trial9_topoff"
      aria: "Trial 9 top pom off"
    - key: "trial9_bottomok"
      aria: "Trial 9 bottom poms in place"
    - key: "trial9_observed"
      aria: "Trial 9 observed"
  -
    - text: "10"
    - key: "trial10_changed"
      aria: "Trial 10 changed"
    - key: "trial10_topoff"
      aria: "Trial 10 top pom off"
    - key: "trial10_bottomok"
      aria: "Trial 10 bottom poms in place"
    - key: "trial10_observed"
      aria: "Trial 10 observed"
{{< /gridtable >}}


### Check Against the Constraints

Check a box only after you have actually observed it --- not because you think it should be true.

{{< checklist >}}
- key: "p5_check_onemotor"
  label: "Only one motor is used anywhere in the machine."
- key: "p5_check_face"
  label: "The face measures about 1″ tall and 2″ wide."
- key: "p5_check_height"
  label: "At the bottom of its arc, the bottom of the face sits about 1¼″ off the surface."
- key: "p5_check_both"
  label: "The motor drives both the straight axle and the propeller on the front."
{{< /checklist >}}

Compare your two branch speeds. Was the difference as large as your gearing predicted? If not, where did it go?

{{< answer key="p5_speed_compare" label="Speed comparison" >}}

Describe one specific failure. What was the symptom? What was the cause? How did you fix it?

{{< answer key="p5_failure" label="Failure description" >}}

## Phase 6 --- Connect: Where This Helps in Botball

{{< callout title="Transfer" >}}
Motors are the thing you run out of first. A drive train that splits turns one motor into two, at whatever speeds you need.
{{< /callout >}}

The cost is that the two branches can never be controlled separately. Start one and you start both; stop one and you stop both. That is a real limitation, and it is the price of the motor you saved.

Name a Botball job where two mechanisms could share a motor because they always run together. Name one where they could not.

{{< answer key="p6_sharing" label="Sharing a motor" >}}

Your striker knocked the pom without the robot having to stop and aim. What does that buy you in a timed match?

{{< answer key="p6_no_stopping" label="Working while moving" >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.

{{< namebar >}}

1\. Explain how one motor can drive two things at different speeds at the same time.

{{< answer key="p7_q1_split" label="Reflection 1" >}}

2\. Why did the worm gear belong on the wheel branch rather than the striker branch?

{{< answer key="p7_q2_worm_placement" label="Reflection 2" >}}

3\. Explain tip speed, and say how you would make your striker hit harder without changing any gearing.

{{< answer key="p7_q3_tip_speed" label="Reflection 3" >}}

4\. Complete this in 2--3 sentences: "A drive train can split, but the branches can never be controlled separately. This means that before I share a motor, I should..."

{{< answer key="p7_q4_complete" label="Reflection 4" >}}

## Extension Challenges

Finished early? Try one or more of these.

### Change One Branch Only

- Add reduction to the wheel branch so the car creeps at half the speed.
- Measure the striker speed before and after.
- Did the striker change at all? What does that tell you about how branches relate to each other?

{{< answer key="ext_a" label="Extension A" >}}

### Longer Arm, Faster Face

- Move the striker face further out from its shaft, keeping the 1¼″ height by raising the shaft.
- Measure how far the pom travels before and after.
- The shaft speed never changed. Explain why the pom went further.

{{< answer key="ext_b" label="Extension B" >}}

### Against the Coulisse

- Set up your Challenge 12 mechanism, which knocked the top pom off a stationary stack.
- Run both on identical stacks, 10 attempts each, and count clean removals.
- Which is more reliable? Which would you rather have on a robot, and why is that a different question?

{{< answer key="ext_c" label="Extension C" >}}

### Swap the Branches

- Put the worm on the striker branch and drive the wheels directly.
- Run it and describe what happens.
- Why is this arrangement useless for the task, and can you think of a task it would suit?

{{< answer key="ext_d" label="Extension D" >}}
