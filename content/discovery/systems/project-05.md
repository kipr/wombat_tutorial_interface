---
title: "Systems Project 5 — The Design Process"
short_title: "Systems Project 5"
linkTitle: "The Design Process"
description: "Define, brainstorm, build, test, improve — practised on the tallest tower you can make that stays up."
weight: 5
nav: discovery
mission_id: discovery_systems_05
mission_title: "Systems Project 5 — The Design Process"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 5
strand: systems
phase: "Phase B · Think Like an Engineer"
phase_order: 2
time: "One class period"
pace:
  kind: suggested
  label: "Before Coding 6"
eyebrow: "Discovery · Systems Project 5"
heading: "The Design Process"
subheading: "Build it, watch it fall over, and find out that was the plan."
credit: "KIPR · Botball Explorer · Discovery"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Systems Project 5"
  - term: "Strand"
    definition: "Systems"
  - term: "Phase"
    definition: "Think Like an Engineer"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Building a tower that has to hold a can of soup, twice — once by guessing, and once by working through the process engineers use."
  - term: "Strand Link"
    definition: "Do this before Coding Project 6"
  - term: "Before You Start"
    definition: "Systems Project 4. You should be able to draw a plan before you build one."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your LEGO"
      - key: need_2
        label: "A can of soup"
      - key: need_3
        label: "A ruler or tape measure"
      - key: need_4
        label: "Your notebook"
      - key: need_5
        label: "A timer"
---

## Try It — Five Minutes, No Planning

Build the tallest tower you can that will hold a can of soup on top.

You get **five minutes**. Start now. Do not plan, do not sketch, just build.

{{< callout variant="red" title="⚠ One Rule" >}}
You may not just stack bricks in a straight pile. A tower has to be built, not piled.
{{< /callout >}}

When the time is up, put the can on top.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 56%
  - head: "My answer"
rows:
  -
    - text: "How tall was it?"
    - key: p1_height
      aria: "Height"
  -
    - text: "Did it hold the can?"
    - key: p1_held
      aria: "Held the can"
  -
    - text: "If it fell, which part gave way first?"
    - key: p1_gave_way
      aria: "What gave way"
  -
    - text: "How much of your five minutes was spent rebuilding?"
    - key: p1_rebuild
      aria: "Rebuild time"
{{< /gridtable >}}
{{< ask key="p1_would_change" label="What you would change" >}}If you got another five minutes right now, what is the first thing you would change?{{< /ask >}}

{{< callout variant="gold" title="You Just Did Engineering — Badly" >}}
You had a problem, you tried something, it worked or it did not, and you learned something.

That is the right idea. But you learned it slowly and by accident. Engineers do the same thing on purpose, in an order, and they write it down.
{{< /callout >}}

## Learn It — Eight Steps, In Order

The [[DESIGN PROCESS|design process]] is how engineers turn a problem into something that works. It is not a straight line — you go back and around it many times.

1. **Define the problem** — Say exactly what has to be solved. This is the most important step and the one most often rushed.

2. **Do background research** — Find out what already exists. Somebody has probably solved something close to this.

3. **Specify requirements** — List what your answer must do to count as working. A [[REQUIREMENT|requirement]] is a test it has to pass.

4. **Brainstorm solutions** — Get several different ideas out. Not one idea. Several.

5. **Choose the best one** — Compare your ideas against the requirements and pick. Say why you picked it.

6. **Do development work** — Work the chosen idea up properly. Sketch it. Decide the details.

7. **Build a [[PROTOTYPE:design|prototype]]** — Make a first version. A prototype is meant to be tested, not admired.

8. **Test and redesign** — Find out where it fails, change it, and go round again.

{{< callout variant="navy" title="Step 1 Is Where Projects Go Wrong" >}}
"Build a tall tower" is not a defined problem. **"Build the tallest tower that will hold a can of soup without falling over"** is.

The second one tells you when you have finished and how to tell if you failed. The first one does not.
{{< /callout >}}

### A real example

When a car turns a corner, the outside wheel travels further than the inside wheel.

In the 1920s both back wheels were fixed to one bar, so the engine drove them at the same speed. The inside wheel had to skid across the road on every corner. Tyres wore out fast.

**The defined problem:** let the two wheels turn at different speeds while the engine still drives them both.

*Someone had to notice the skidding, work out why it happened, and say what a solution would have to do — before anyone could design one.*

### Steps 7 and 8 are a loop

Build, test, find the weakness, change it, build again. Engineers expect to go round this several times.

A prototype that fails is not a wasted afternoon. It is the step that tells you what to fix.

{{< callout variant="gold" title="Draw That Loop" >}}
In Systems Project 4 you learned to send an arrow back up to an earlier box. The design process is exactly that shape — test, and if it failed, go back to step 6.
{{< /callout >}}

## Do It — The Tower, Properly

### 1. Define the problem

Write it in one sentence. It must say what you are building, what it has to hold, and how you will know it worked.
{{< ask key="p3_problem" label="Defined problem" >}}My problem:{{< /ask >}}

*Read it back. Could somebody else tell whether you had succeeded, just from that sentence? If not, rewrite it.*

### 2. Look at towers that already exist

Think of tall structures you have seen — bridges, cranes, pylons, radio masts, scaffolding.

{{< gridtable >}}
columns:
  - head: "Structure"
    width: 34%
  - head: "What makes it strong"
    width: 33%
  - head: "What it costs"
rows:
  -
    - key: p3_r1
      aria: "Structure 1"
    - key: p3_r1_s
      aria: "Strength 1"
    - key: p3_r1_c
      aria: "Cost 1"
  -
    - key: p3_r2
      aria: "Structure 2"
    - key: p3_r2_s
      aria: "Strength 2"
    - key: p3_r2_c
      aria: "Cost 2"
  -
    - key: p3_r3
      aria: "Structure 3"
    - key: p3_r3_s
      aria: "Strength 3"
    - key: p3_r3_c
      aria: "Cost 3"
{{< /gridtable >}}
{{< short-answer key="p3_shape" label="Recurring shape" prompt="Look for the shape that keeps appearing. What is it?" >}}

### 3. Write your requirements

List what your tower must do. Each one has to be something you can measure or test.

{{< gridtable >}}
columns:
  - head: "#"
    width: 14%
  - head: "My tower must…"
    width: 52%
  - head: "How I will test it"
rows:
  -
    - text: "1"
    - key: p3_q1
      aria: "Requirement 1"
    - key: p3_q1_t
      aria: "Test 1"
  -
    - text: "2"
    - key: p3_q2
      aria: "Requirement 2"
    - key: p3_q2_t
      aria: "Test 2"
  -
    - text: "3"
    - key: p3_q3
      aria: "Requirement 3"
    - key: p3_q3_t
      aria: "Test 3"
{{< /gridtable >}}

{{< callout variant="red" title="⚠ &quot;Strong&quot; Is Not a Requirement" >}}
You cannot test "strong." You can test "holds a full can of soup for thirty seconds without leaning."
{{< /callout >}}

### 4. Brainstorm — three ideas, not one

Sketch three different towers. Genuinely different, not the same one three times.

*Three sketches in your notebook*

{{< gridtable >}}
columns:
  - head: "Idea"
    width: 20%
  - head: "How it works"
    width: 40%
  - head: "Its biggest weakness"
rows:
  -
    - text: "A"
    - key: p3_iA
      aria: "Idea A"
    - key: p3_iA_w
      aria: "Weakness A"
  -
    - text: "B"
    - key: p3_iB
      aria: "Idea B"
    - key: p3_iB_w
      aria: "Weakness B"
  -
    - text: "C"
    - key: p3_iC
      aria: "Idea C"
    - key: p3_iC_w
      aria: "Weakness C"
{{< /gridtable >}}

*Naming the weakness now is not pessimism. It is how you choose.*

### 5. Choose, and say why

Compare all three against your requirements. Pick one.
{{< ask key="p3_chose" label="Which idea and why" >}}I chose idea ___ because:{{< /ask >}}
{{< short-answer key="p3_giving_up" label="Trade-off" prompt="What am I giving up by not choosing the other two?" >}}

### 6. Build the prototype

Build your chosen design. Work from your sketch, not from memory.

{{< checklist >}}
- key: p3_built
  label: "My tower is built and matches my sketch"
- key: p3_no_stack
  label: "It is a built structure, not a stack of bricks"
{{< /checklist >}}

### 7. Test it, three rounds

Put the can on. Measure the height. Write down what happened. Then improve it and go again.

{{< gridtable >}}
columns:
  - head: "Round"
    width: 12%
  - head: "Height"
    width: 18%
  - head: "Held the can?"
    width: 20%
  - head: "What failed"
    width: 26%
  - head: "What I changed next"
rows:
  -
    - text: "1"
    - key: p3_t1_h
      aria: "R1 height"
    - key: p3_t1_held
      aria: "R1 held"
    - key: p3_t1_fail
      aria: "R1 failed"
    - key: p3_t1_chg
      aria: "R1 changed"
  -
    - text: "2"
    - key: p3_t2_h
      aria: "R2 height"
    - key: p3_t2_held
      aria: "R2 held"
    - key: p3_t2_fail
      aria: "R2 failed"
    - key: p3_t2_chg
      aria: "R2 changed"
  -
    - text: "3"
    - key: p3_t3_h
      aria: "R3 height"
    - key: p3_t3_held
      aria: "R3 held"
    - key: p3_t3_fail
      aria: "R3 failed"
    - key: p3_t3_chg
      aria: "R3 changed"
{{< /gridtable >}}
{{< ask key="p3_trend" label="Height trend" >}}Did your tower get taller each round, or did one change make it worse?{{< /ask >}}

### 8. Compare with Try It

{{< gridtable >}}
columns:
  - head: "Question"
    width: 40%
  - head: "Try It (guessing)"
    width: 30%
  - head: "Now (process)"
rows:
  -
    - text: "Tallest height"
    - key: p3_c_h1
      aria: "Compare height 1"
    - key: p3_c_h2
      aria: "Compare height 2"
  -
    - text: "Held the can?"
    - key: p3_c_held1
      aria: "Compare held 1"
    - key: p3_c_held2
      aria: "Compare held 2"
  -
    - text: "Could I rebuild it exactly?"
    - key: p3_c_rb1
      aria: "Compare rebuild 1"
    - key: p3_c_rb2
      aria: "Compare rebuild 2"
{{< /gridtable >}}

{{< callout variant="gold" title="The Last Row Is the Real Difference" >}}
A tower you got by guessing is a tower you cannot repeat. A tower you designed is one you can build again, explain to somebody else, and improve next week.
{{< /callout >}}

### 9. Make it harder

Two cans. Or a can balanced off to one side. Pick a harder test and run the loop again.
{{< ask key="p3_harder" label="Harder test" >}}What harder test did you try, and did it survive?{{< /ask >}}

{{< checklist >}}
- key: p3_optimized
  label: "I made at least one change that came from a failed test"
{{< /checklist >}}

## Score It — Checkpoint

### Which step is this?

{{< gridtable >}}
columns:
  - head: "What the engineer is doing"
    width: 60%
  - head: "Step number"
rows:
  -
    - text: "Writing down that the claw must hold a cube for ten seconds"
    - key: p4_s1
      aria: "Step 1"
  -
    - text: "Looking at how other teams built their arms last season"
    - key: p4_s2
      aria: "Step 2"
  -
    - text: "Sketching four different claw shapes"
    - key: p4_s3
      aria: "Step 3"
  -
    - text: "Dropping the cube on purpose to see what breaks"
    - key: p4_s4
      aria: "Step 4"
  -
    - text: "Deciding the real trouble is that cubes slip, not that the arm is weak"
    - key: p4_s5
      aria: "Step 5"
{{< /gridtable >}}

### Problem or not?

Say whether each one is properly defined. If not, rewrite it so it is.

{{< gridtable >}}
columns:
  - head: "Statement"
    width: 44%
  - head: "Defined?"
    width: 18%
  - head: "Better version"
rows:
  -
    - text: "Make the robot better"
    - key: p4_p1
      aria: "Defined 1"
    - key: p4_p1_b
      aria: "Better 1"
  -
    - text: "Build a claw that lifts a cube without dropping it"
    - key: p4_p2
      aria: "Defined 2"
    - key: p4_p2_b
      aria: "Better 2"
  -
    - text: "Make it go fast"
    - key: p4_p3
      aria: "Defined 3"
    - key: p4_p3_b
      aria: "Better 3"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_steps
  label: "I can name the eight steps in order"
- key: p4_can_define
  label: "I can turn a vague wish into a defined problem"
- key: p4_can_req
  label: "I can write a requirement that can actually be tested"
- key: p4_can_three
  label: "I come up with several ideas before choosing one"
- key: p4_can_why
  label: "I can say why I picked one design over another"
- key: p4_can_loop
  label: "I treat a failed test as information, not as a wasted afternoon"
- key: p4_can_record
  label: "I write down what I changed, so I can rebuild it later"
{{< /checklist >}}

### Think about it
{{< ask key="p4_taller" label="Was it a waste" >}}Your Try It tower may well have been taller than your designed one. Does that mean the process was a waste of time?{{< /ask >}}
{{< ask key="p4_rush" label="Rushing step 1" >}}Step 1 is the one people rush. What actually goes wrong later when the problem was never properly defined?{{< /ask >}}
{{< ask key="p4_bulldoze" label="Bulldoze problem" >}}Your robot has to push objects off a line. Write that as a defined problem — one sentence, with a test in it.{{< /ask >}}

### Next

You have the process. Now you point it at a real part of your robot.

In **Systems Project 6 — Structure and [[FUNCTION|Function]]**, you design the blade your robot needs — and your class cannot attempt Coding Project 6 until you do.
