---
title: "Systems Project 8 — Hardware and Software"
short_title: "Systems Project 8"
linkTitle: "Hardware and Software"
description: "One partner is the software, one is the robot. Input, output, and what happens when instructions are followed exactly."
weight: 8
nav: discovery
mission_id: discovery_systems_08
mission_title: "Systems Project 8 — Hardware and Software"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 8
strand: systems
phase: "Phase C · How Machines Talk"
phase_order: 3
time: "One class period"
pace:
  kind: suggested
  label: "Before Coding 10"
eyebrow: "Discovery · Systems Project 8"
heading: "Hardware and Software"
subheading: "One of you is the body. One of you is the instructions. Neither works alone."
credit: "KIPR · Botball Explorer · Discovery"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Systems Project 8"
  - term: "Strand"
    definition: "Systems"
  - term: "Phase"
    definition: "How Machines Talk"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Being the [[HARDWARE|hardware]] and the [[SOFTWARE|software]] in turn, adding a translator between them, then drawing the whole system your robot actually is."
  - term: "Strand Link"
    definition: "Do this before Coding Project 10"
  - term: "Before You Start"
    definition: "Systems Project 2. You should know the six parts of a robot."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "A clear space to walk in"
      - key: need_2
        label: "An object to pick up"
      - key: need_3
        label: "Paper and a pencil"
      - key: need_4
        label: "A folder or box"
      - key: need_5
        label: "Two or three people"
---

## Try It — Be the Machine

Work in pairs. One of you is the **software**. One of you is the **hardware**.

Put an object across the room. The hardware has to walk over and pick it up.

{{% callout variant="red" title="⚠ The Rules Are Strict" %}}
**Software** may only speak. No pointing, no walking over, no doing it yourself.

**Hardware** may not speak at all, and does *exactly* what it is told. Not what it thinks you meant.

If the software says "walk forward," you keep walking forward until you are told to stop.
{{% /callout %}}

Run it. Then swap and run it again.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 52%
  - head: "My answer"
rows:
  -
    - text: "How long did it take?"
    - key: p1_time
      aria: "Time"
  -
    - text: "Did the hardware walk into anything?"
    - key: p1_bump
      aria: "Walked into"
  -
    - text: "Which instruction was hardest to give?"
    - key: p1_hardest
      aria: "Hardest instruction"
{{< /gridtable >}}
{{< ask key="p1_knew_meant" label="Knew what they meant" >}}Being the hardware, was there a moment you knew what your partner meant but had to do something else? What happened?{{< /ask >}}

### What went in, what came out

Every system takes something in and puts something out. Work out what yours were.

{{< gridtable >}}
columns:
  - head: "Part of the system"
    width: 34%
  - head: "In this activity, that was…"
rows:
  -
    - text: "The input"
    - key: p1_input
      aria: "Input"
  -
    - text: "The output"
    - key: p1_output
      aria: "Output"
{{< /gridtable >}}

{{% callout variant="gold" title="Neither One Is the Robot" %}}
The software could not move. The hardware could not decide. Only the two together got the object picked up.

That is exactly the deal between your program and your Wombat.
{{% /callout %}}

## Learn It — They Do Not Speak the Same Language

[[HARDWARE|Hardware]] is the body of a machine — the parts you can drop on your foot. [[SOFTWARE|software]] is the instructions you give it.

There is a problem. You write instructions in something close to English. The hardware only understands numbers.

{{< figrow >}}
- src: discovery/systems/project-08/software-hardware-chain.svg
  alt: "A chain: software, then translator, then hardware, with input arriving and output leaving"
{{< /figrow >}}

The middle box is the part you have been using without noticing.

{{% callout variant="navy" title="You Have Met the Translator Already" %}}
Every time you press **[[COMPILE|Compile]]**, a translator turns what you typed into numbers the Wombat can follow.

That is why a spelling mistake stops everything. The translator cannot guess — it can only translate.
{{% /callout %}}

### Input, output, and the bit in between

{{< gridtable >}}
columns:
  - head: "Word"
    width: 26%
  - head: "Means"
    width: 36%
  - head: "On your robot"
rows:
  -
    - text: "[[INPUT|Input]]"
    - text: "Information coming in"
    - text: "A [[SENSOR|sensor]] reading, a button press"
  -
    - text: "Processing"
    - text: "Working out what to do"
    - text: "Your program deciding"
  -
    - text: "[[OUTPUT|Output]]"
    - text: "Something happening in the world"
    - text: "A motor turning, a claw closing"
  -
    - text: "Storage"
    - text: "Keeping it for later"
    - text: "Your saved program, your [[LIBRARY|library]] file"
{{< /gridtable >}}

*Every computer system you will ever meet is some arrangement of those four.*

## Do It — Add a Translator

### 1. Three roles this time

Work in threes. Same task — cross the room and pick up an object — but now nobody can talk to the person they need to reach.

#### Software

You know what has to happen.

**You may not speak.** Act it out, like charades, to the translator only.

#### Translator

You watch the charades.

You **write** instructions on paper, then read them aloud to the hardware.

#### Hardware

You must **not watch** the charades. Face away.

You may not speak. Do exactly what is read to you.

{{< checklist >}}
- key: p3_ran3
  label: "Our hardware picked up the object"
{{< /checklist >}}
{{< ask key="p3_lost" label="Where meaning was lost" >}}Where did meaning get lost — between software and translator, or between translator and hardware?{{< /ask >}}

### 2. Swap roles and go again

Everyone should be the translator once. It is the hardest job and the most interesting one.
{{< ask key="p3_guess" label="What you guessed" >}}As translator, what did you have to guess at?{{< /ask >}}
{{< short-answer key="p3_guess_right" label="Was the guess right" prompt="Was your guess right?" >}}

{{% callout variant="red" title="⚠ A Real Translator Never Guesses" %}}
You could guess because you are a person. The [[COMPILER|compiler]] on your Wombat cannot. If your instruction is unclear, it stops and shows you an error instead.
{{% /callout %}}

### 3. Put the instructions away

Label your written instructions and put them in a folder or box. Do not throw them out.
{{< ask key="p3_storage" label="What storage does" >}}Tomorrow someone could take those out and run them again without the software person being there. What does that folder do for a computer?{{< /ask >}}

{{< checklist >}}
- key: p3_stored
  label: "Our instructions are labelled and stored"
{{< /checklist >}}

### 4. Do the same thing again, faster

Get the instructions back out and have a *different* hardware person run them, with no software and no translator in the room.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 52%
  - head: "My answer"
rows:
  -
    - text: "Did it work with a different person?"
    - key: p3_reuse
      aria: "Worked with different person"
  -
    - text: "Was it faster than the first time?"
    - key: p3_faster
      aria: "Faster"
  -
    - text: "What had to be written more clearly?"
    - key: p3_clearer
      aria: "Clearer"
{{< /gridtable >}}

*This is why programs are worth saving. Written down once, run any number of times, by anybody.*

### 5. Map your own robot

Draw your actual robot as a system. Show every input, where the processing happens, every output, and where things are stored.

*Your robot as a system diagram*

{{< gridtable >}}
columns:
  - head: "Part"
    width: 26%
  - head: "On my robot, this is…"
rows:
  -
    - text: "Inputs"
    - key: p3_m_in
      aria: "My inputs"
  -
    - text: "Processing"
    - key: p3_m_proc
      aria: "My processing"
  -
    - text: "Outputs"
    - key: p3_m_out
      aria: "My outputs"
  -
    - text: "Storage"
    - key: p3_m_store
      aria: "My storage"
  -
    - text: "Where the translating happens"
    - key: p3_m_trans
      aria: "My translator"
{{< /gridtable >}}

### 6. Present it

Show your diagram to another team. Have them find one thing you left out.
{{< short-answer key="p3_spotted" label="What they spotted" prompt="What did they spot?" >}}

{{< checklist >}}
- key: p3_presented
  label: "Another team checked my diagram and I fixed what they found"
{{< /checklist >}}

### 7. Sort the machines

For each machine, name one input and one output.

{{< gridtable >}}
columns:
  - head: "Machine"
    width: 32%
  - head: "An input"
    width: 34%
  - head: "An output"
rows:
  -
    - text: "A microwave"
    - key: p3_s1_i
      aria: "Microwave input"
    - key: p3_s1_o
      aria: "Microwave output"
  -
    - text: "A cash machine"
    - key: p3_s2_i
      aria: "Cash machine input"
    - key: p3_s2_o
      aria: "Cash machine output"
  -
    - text: "Your Wombat"
    - key: p3_s3_i
      aria: "Wombat input"
    - key: p3_s3_o
      aria: "Wombat output"
  -
    - text: "A set of traffic lights"
    - key: p3_s4_i
      aria: "Traffic input"
    - key: p3_s4_o
      aria: "Traffic output"
{{< /gridtable >}}

## Score It — Checkpoint

Remember: pressing Compile is what runs the translator.


### Hardware or software?

{{< gridtable >}}
columns:
  - head: "This is…"
    width: 62%
  - head: "Which one"
rows:
  -
    - text: "The motor on the left wheel"
    - key: p4_h1
      aria: "H1"
  -
    - text: "Your `drive_forward()` [[FUNCTION|function]]"
    - key: p4_h2
      aria: "H2"
  -
    - text: "The touch sensor"
    - key: p4_h3
      aria: "H3"
  -
    - text: "The library file you wrote"
    - key: p4_h4
      aria: "H4"
  -
    - text: "The Wombat's screen"
    - key: p4_h5
      aria: "H5"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_hs
  label: "I can explain the difference between hardware and software"
- key: p4_can_trans
  label: "I can say what a translator does and why one is needed"
- key: p4_can_compile
  label: "I know what pressing Compile actually does"
- key: p4_can_io
  label: "I can find the input and output of any machine"
- key: p4_can_storage
  label: "I can explain why saving a program matters"
- key: p4_can_map
  label: "I can draw my own robot as a system"
{{< /checklist >}}

### Think about it
{{< ask key="p4_frustrating" label="Frustrating" >}}As the hardware, you had to do exactly what you were told even when you knew better. Was that frustrating? Is a machine that behaves that way a good thing or a bad thing?{{< /ask >}}
{{< ask key="p4_cleverness" label="Where cleverness comes from" >}}A translator turns your instructions into numbers. Nothing is added and nothing is understood. So where does the cleverness in a robot actually come from?{{< /ask >}}
{{< ask key="p4_rather_wrong" label="Rather get wrong" >}}Your robot's software can be swapped in a minute. Its hardware takes an afternoon. Which one would you rather get wrong?{{< /ask >}}

### Next

One machine talking to itself is one thing. Machines talking to *each other* is a different problem, and it needs rules everybody agrees on.

In **Systems Project 9 — Sending Messages**, you take something apart, push it through a tube, and try to put it back together at the other end.

*You are also ready for **Coding Project 10**, where your robot gets its first real input.*
