---
title: "Unit 2 · Big Idea 5 — Tuning the Follow"
short_title: "Python 2.5"
hub_unit: 2
description: "The mav command and speed ratios — run an organized experiment to tune your line-follow to its best."
weight: 120
nav: python
track: python
type: labs
mission_id: unit2_bigidea5
eyebrow: "Unit 2 · Big Idea 5"
heading: "Tuning the Follow"
subheading: "Student Lab · Speed, Precision, and the mav Command"
credit: "KIPR · Botball Explorer · Unit 2 Big Idea 5 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine make increasingly intelligent [[DECISION|decisions]]?"
  - term: "Focus"
    definition: "Precision control, speed ratios, and tuning with data"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems are tuned and optimized using evidence, not guesses."
  - term: "CS1 Concepts"
    definition: "The mav command · [[VELOCITY|Velocity]] vs. Power · Ratios · Experimental Tuning"
  - term: "Game Context"
    definition: "Optimizing your line-follow from Unit 2"
  - term: "What You Need"
    definition: "Explorer robot · calibrated Tophat ([[ANALOG|analog]] 0) · taped line · this lab sheet"
---

## Overview

Your robot already follows a line --- but does it follow it *well*? Does it wobble wildly, or glide smoothly? Today you'll find out, by treating your line-follow like an engineer treats an engine: you'll change the speeds in a careful, organized way and measure what happens. Along the way you'll trade in your old `k.motor()` command for a more precise one --- `k.mav()` --- that gives you far finer control over speed.

{{< callout title="Core Insight" >}}
There's no single "right" speed. The best line-follow is found by testing --- changing one thing at a time and letting the robot's behavior tell you what works.
{{< /callout >}}

### By the end of this activity you will be able to:

- Use `k.mav()` to drive motors by velocity ([[TICK|ticks]] per second) instead of percent power.
- Explain why `k.mav()` gives much finer speed control than `k.motor()`.
- Run an organized experiment changing total speed and the gap between wheel speeds.
- Use your results to tune your line-follow to its best performance.
{.obj}

### New This Time: The mav Command

{{< concept "mav --- move at velocity" >}}
- text: |
    You've used `k.motor(port, power)`, where power is a percent from −100 to 100. Now meet its precise cousin:
- code: |
    k.mav(0, 750)   # move motor 0 at 750 ticks per second
- text: |
    `mav` stands for **move at velocity**. Instead of a percent, you give it a speed in *ticks per second* --- the same ticks your [[ENCODER|encoder]] counts. Its range is −1500 to 1500.
{{< /concept >}}

{{< concept "Why mav is 15× more precise" >}}
- text: |
    Look at the two ranges side by side:
- code: |
    motor:  -100  ...  100     # 100 steps each direction
    mav:   -1500  ... 1500     # 1500 steps each direction
- text: |
    That's **15 times** as many speed values to choose from. With `motor`, the smallest change you can make is 1 percent. With `mav`, you can fine-tune speed in much smaller steps --- which matters a lot when you're trying to stop a line-follow from wobbling.
- text: |
    To convert your old `motor` numbers to `mav`, multiply by 15: `motor` 50 becomes `mav` 750; `motor` 100 becomes `mav` 1500 (the top speed).
    {.muted}
{{< /concept >}}

{{< concept "Swapping motor for mav in line_follow" >}}
- text: |
    Your steering logic doesn't change at all --- only the command and the numbers do:
- code: |
    if k.analog(0) > MIDPOINT:    # on black, steer right
        k.mav(0, @@750@@)            # was k.motor(0, 50)
        k.mav(1, @@300@@)            # was k.motor(3, 20)
    else:                          # on white, steer left
        k.mav(0, @@300@@)
        k.mav(1, @@750@@)
{{< /concept >}}

## Phase 1 --- Activate: Coarse vs. Fine Control

Imagine a faucet with only 3 settings: off, trickle, blast. Now imagine one with a smooth dial you can turn to any flow you want. Which one lets you fill a cup to exactly the right level without overflowing? The dial --- because it gives you *finer control*. `motor` is the 3-setting faucet compared to `mav`'s smooth dial.

{{< callout title="Think it through" variant="navy" >}}
When your line-follow wobbles, you want to make a *small* speed change to calm it down. Why is that easier with 1500 possible speeds than with 100?
{{< /callout >}}

{{< ask key="p1_fine_control" label="Fine control reasoning" >}}Why does having more possible speed values (finer control) help you tune a robot that's wobbling? Use the faucet idea if it helps.{{< /ask >}}

## Phase 2 --- Concept: Total Speed and the Gap

Your line-follow has two numbers that matter: the **fast wheel** speed and the **slow wheel** speed. Two different things change how the robot behaves:

- **Total speed** --- how fast both wheels go overall. Faster covers ground quicker, but gives the robot less time to react, so it can [[OVERSHOOT|overshoot]] and jitter.
- **The gap** --- the difference between fast and slow. A bigger gap turns harder each correction; a smaller gap turns gently.

{{< callout title="The experiment plan" variant="gold" >}}
You'll run two organized series. In **Series 1**, the gap stays at 30 (×15 = 450 in mav terms) while total speed climbs. In **Series 2**, the gap widens to 40 (×15 = 600) and total speed climbs again. By changing one thing at a time, you'll see what each does.
{{< /callout >}}

{{< ask key="p2_predict_speed" label="Speed prediction" >}}Predict: as total speed goes up, do you think the robot will follow the line *better* or *worse*? Why?{{< /ask >}}

## Phase 3 --- Series 1: Hold the Gap, Raise the Speed

Start from your Unit 2 speeds and raise both wheels by 10 (×15 = 150 in mav) each trial, keeping the gap at 30 (×15 = 450). After each run, rate how well the robot followed the line: **poor / ok / great**. Also note if it jittered.

{{< safety title="⚠ Same line, same start" noprint="true" >}}
Run every trial on the same line from the same starting spot, so the only thing changing is the speed. That's what makes it a fair test.
{{< /safety >}}

{{< gridtable caption="Series 1 --- Gap of 30 (mav gap 450)" >}}
columns:
  - head: Trial
    width: 12%
  - head: Fast / Slow (mav)
    width: 30%
  - head: Rating (poor/ok/great)
    width: 28%
  - head: Jitter? notes
rows:
  - - text: "1"
    - text: "750 / 300"
    - key: s1_t1_rating
    - key: s1_t1_notes
  - - text: "2"
    - text: "900 / 450"
    - key: s1_t2_rating
    - key: s1_t2_notes
  - - text: "3"
    - text: "1050 / 600"
    - key: s1_t3_rating
    - key: s1_t3_notes
  - - text: "4"
    - text: "1200 / 750"
    - key: s1_t4_rating
    - key: s1_t4_notes
  - - text: "5"
    - text: "1350 / 900"
    - key: s1_t5_rating
    - key: s1_t5_notes
  - - text: "6"
    - text: "1500 / 1050"
    - key: s1_t6_rating
    - key: s1_t6_notes
{{< /gridtable >}}

{{< ask key="p3_series1_finding" label="Series 1 finding" >}}As total speed went up (gap held at 450), what happened to how well the robot followed? At what speed did it start to struggle?{{< /ask >}}

## Phase 4 --- Series 2: Widen the Gap

Now widen the gap to 40 (×15 = 600) --- the slow wheel drops, so each correction turns harder. Climb the total speed again and rate each trial the same way.

{{< gridtable caption="Series 2 --- Gap of 40 (mav gap 600)" >}}
columns:
  - head: Trial
    width: 12%
  - head: Fast / Slow (mav)
    width: 30%
  - head: Rating (poor/ok/great)
    width: 28%
  - head: Jitter? notes
rows:
  - - text: "1"
    - text: "750 / 150"
    - key: s2_t1_rating
    - key: s2_t1_notes
  - - text: "2"
    - text: "900 / 300"
    - key: s2_t2_rating
    - key: s2_t2_notes
  - - text: "3"
    - text: "1050 / 450"
    - key: s2_t3_rating
    - key: s2_t3_notes
  - - text: "4"
    - text: "1200 / 600"
    - key: s2_t4_rating
    - key: s2_t4_notes
  - - text: "5"
    - text: "1350 / 750"
    - key: s2_t5_rating
    - key: s2_t5_notes
  - - text: "6"
    - text: "1500 / 900"
    - key: s2_t6_rating
    - key: s2_t6_notes
{{< /gridtable >}}

{{< ask key="p4_series2_finding" label="Series 2 finding" >}}Compare Series 2 to Series 1. Did the wider gap (harder turns) help the robot stay on the line, or make it wobble more? At what speed?{{< /ask >}}

## Phase 5 --- Find Your Best Setting

Now you're the engineer. Using what your two series showed, pick your own fast and slow `mav` values and try to get the smoothest, most reliable follow you can. Test, adjust, test again. Your goal: the best line-follow on your robot.

{{< repeattable count=5 prefix="tune" >}}
- kind: number
  head: "Try"
  width: "10%"
- head: Your fast / slow (mav)
  key: speeds
  width: 30%
- head: How well did it follow?
  key: result
{{< /repeattable >}}

{{< ask key="p5_best_setting" label="Best setting" >}}What was your best fast/slow setting, and why do you think it worked best on your robot?{{< /ask >}}

{{< ask key="p5_why_different" label="Why different robots differ" >}}Your best numbers are probably different from a neighbor's. Why might the same settings work differently on two robots?{{< /ask >}}

## Phase 6 --- Connect: The AI Literacy Bridge

{{< callout title="AI Literacy Thread" >}}
Intelligent systems are tuned and optimized using evidence, not guesses.
{{< /callout >}}

You didn't find your best settings by guessing --- you ran an organized experiment, changed one thing at a time, and let the data guide you. This is exactly how real intelligent systems get good. Engineers tuning a self-driving car, or researchers training an AI model, adjust settings (called *[[PARAMETER|parameters]]*), measure the result, and adjust again --- thousands of times. The "intelligence" of a system is often the result of careful tuning, not a single lucky setting.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_one_at_a_time" label="One at a time" >}}You changed only one thing at a time (first speed, then the gap). Why would changing both at once make it hard to know what actually helped?{{< /ask >}}

{{< ask key="p6_repeated_tuning" label="Repeated tuning" >}}Engineers tuning a real system test settings over and over instead of picking one and hoping. Why is repeated, measured tuning more trustworthy than a single guess?{{< /ask >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_mav" label="Reflection 1" n=1 >}}What does `k.mav()` do, and how is it different from `k.motor()`? Why is it more precise?{{< /ask >}}

{{< ask key="p7_q2_total_speed" label="Reflection 2" n=2 >}}In your experiment, what was the effect of raising the *total speed* on how well the robot followed the line?{{< /ask >}}

{{< ask key="p7_q3_gap" label="Reflection 3" n=3 >}}What did changing the *gap* between the fast and slow wheel do to the robot's turning?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete this in 2--3 sentences: "Intelligent systems are tuned using evidence, not guesses. This means that to make a robot perform its best, I should..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Find the Breaking Point

- Push the total speed as high as it will go and still follow the line. What's the fastest your robot can reliably go before it loses the line?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Tiny Gaps

- Try a very small gap (like 750 / 700). What does an almost-no-turn correction do? Now a huge gap (1500 / 0). Describe both.

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- Make the Speeds [[VARIABLE|Variables]]

- Put your best fast and slow speeds in two variables at the top (like `FAST` and `SLOW`). Now you can re-tune by changing two numbers in one place. Why is that better?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Looking Ahead: Knowing When to Stop

- Your follow is smooth now --- but it runs for a fixed number of ticks. What if the robot needs to stop when it reaches an object instead? What kind of [[SENSOR|sensor]] would tell it something is ahead? (Next lab.)

{{< answer key="ext_d" label="Extension D" >}}
