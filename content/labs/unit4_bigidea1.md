---
title: "Unit 4 · Big Idea 1 — The Model"
short_title: "Lab 4.1"
weight: 190
nav: labs
track: c
mission_id: unit4_bigidea1
eyebrow: "Unit 4 · Big Idea 1"
heading: "The Model"
subheading: "Student Lab · Teaching the Robot to Predict Distance"
credit: "KIPR · Botball Explorer · Unit 4 Big Idea 1 — Student Lab"
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine know where it is and where it is going?"
  - term: "Big Idea"
    definition: "Models Can Predict Outcomes"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems use models to predict what should happen next."
  - term: "CS1 Concepts"
    definition: "The double Type · Mathematical Models · [[CALIBRATION|Calibration]] · Prediction"
  - term: "Game Context"
    definition: "Driving an exact distance in inches"
  - term: "What You Need"
    definition: "Explorer robot · calibrated Tophat ([[ANALOG|analog]] 0) · right starting box with the black line · ruler · this lab sheet"
---

## Overview

Up to now, when you wanted the robot to drive somewhere, you guessed at a [[TICK|tick]] count and tested until it looked right. That works, but it's slow — and the ticks mean nothing to a human. Today you'll teach your robot something powerful: the **relationship** between ticks and inches. Once it knows that, you can tell it to drive "12 inches" and it will *predict* the right number of ticks on its own. You're building a **model** — and that's one of the most important ideas in all of robotics and AI.

{{% callout title="Core Insight" %}}
A model is a relationship the robot can use to predict. If it knows how many ticks make one inch, it can predict the ticks for *any* distance — without guessing.
{{% /callout %}}

### By the end of this activity you will be able to:

- Use the `double` type to store numbers with decimals.
- Explain what `ticks_per_inch` is and why it's a model.
- Build a calibration [[FUNCTION|function]] that measures your robot's `ticks_per_inch`.
- Write a `Drive(double inches)` function that predicts ticks from inches.
{.obj}

## Phase 1 — New Tool: The double Type

{{< concept "int throws away decimals — double keeps them" >}}
- text: |
    You've always used `int` for whole numbers. But the relationship between ticks and inches won't be a whole number — it might be **41.7** ticks per inch. And you might want to drive **6.5** inches. An `int` can't hold those — it would chop off the decimals and ruin your accuracy.
- code: |
    int    a = 41.7;   // becomes 41: decimal LOST
    double b = 41.7;   // stays 41.7: decimal KEPT
- text: |
    A `double` is just a number that can have a decimal point. You use it exactly like an `int`, but it remembers the fractional part. For measurements and math, that precision matters.
{{< /concept >}}

{{< ask key="p1_why_double" label="Why double" >}}Why would using an `int` for `ticks_per_inch` make your robot's driving less accurate? Use the 41.7 example.{{< /ask >}}

## Phase 2 — Concept: A Model Is a Relationship

{{< concept "ticks_per_inch — the bridge between ticks and inches" >}}
- text: |
    Your [[ENCODER|encoder]] counts **ticks**. You measure the world in **inches**. A model connects the two with a single number: how many ticks happen in one inch.
- code: |
    double ticks_per_inch;   // the MODEL: ticks in a single inch
- text: |
    If you drive a known distance and count the ticks, you can *compute* that number:
{{< /concept >}}

{{< calc title="The model is built by dividing" >}}
- formula: "ticks_per_inch = ticks measured ÷ inches traveled"
- note: |
    Example: if the robot counted 250 ticks while traveling 6 inches, then ticks_per_inch = 250 ÷ 6 = 41.7
{{< /calc >}}

{{< concept "Once you have the model, you can predict" >}}
- text: |
    Flip the math around, and the model *predicts* ticks for any distance you want:
- code: |
    ticks = inches * ticks_per_inch;   // predict ticks for ANY distance
- text: |
    Want to drive 12 inches? Predict: 12 × 41.7 = 500 ticks. No more guessing — the model does the work.
{{< /concept >}}

{{< ask key="p2_model_meaning" label="Model meaning" >}}In your own words, what does `ticks_per_inch` let the robot do that a plain tick count never could?{{< /ask >}}

## Phase 3 — Build: The Calibration Function

To find *your* robot's `ticks_per_inch`, you let the robot measure itself. Set the robot against the **back wall of the right starting box**, with the black line ahead of it. The robot drives straight forward until its Tophat [[SENSOR|sensor]] reaches the black line, counting ticks the whole way. You measure the real distance it traveled, in inches, and the function does the division.

{{% callout title="Measure first" variant="navy" %}}
Before running, use your ruler to measure the distance from where the **Tophat sensor starts** (robot against the back wall) to the **black line**. That real-world distance, in inches, is what you'll pass into the function.
{{% /callout %}}

{{< code >}}
// Unit 4, Big Idea 1: The Model
// Name: _______________________   Date: ___________

#include <kipr/wombat.h>

int    MIDPOINT = @@____@@;   // your Tophat threshold from before
double ticks_per_inch;       // the MODEL: calibration will set this

void calibrate_ticks_per_inch(double inches);   // PROTOTYPE

int main() {
    // robot starts against the back wall of the right starting box
    calibrate_ticks_per_inch(@@____@@);   // pass in YOUR measured inches to the line
    printf("ticks_per_inch = %f\n", ticks_per_inch);  // see your model
    return 0;
}

void calibrate_ticks_per_inch(double inches) {
    cmpc(0);                          // clear the tick counter
    while (analog(0) < MIDPOINT) {     // drive while sensor sees WHITE (low)...
        motor(0, 50);                 // ...straight forward...
        motor(1, 50);
    }                                 // ...stops when it hits BLACK (high)
    motor(0, 0); motor(1, 0); msleep(50);   // brake

    ticks_per_inch = gmpc(0) / inches;      // MODEL = ticks measured / inches known
}
{{< /code >}}

Remember your convention: black reads *higher* than white, so `analog(0) < MIDPOINT` is true on white and the robot keeps driving — then stops the instant it crosses onto black.
{.muted}

### Record Your Calibration

{{< gridtable >}}
columns:
  - head: Measurement
    width: 60%
  - head: Value
rows:
  - - seed: Inches you measured (sensor start → black line)
    - key: cal_inches
  - - seed: Ticks the robot counted (gmpc 0)
    - key: cal_ticks
  - - seed: ticks_per_inch the program printed
    - key: cal_tpi
{{< /gridtable >}}

{{< calc title="Check the math yourself" >}}
- eq:
  - input: { key: cal_check_ticks, placeholder: ticks, aria: ticks }
  - op: "÷"
  - input: { key: cal_check_inches, placeholder: inches, aria: inches }
  - op: "="
  - input: { key: cal_check_result, placeholder: ticks_per_inch, aria: result }
- note: "Does your hand calculation match what the program printed? It should."
{{< /calc >}}

## Phase 4 — Build: The Drive Function

Now the payoff. With `ticks_per_inch` known, `Drive` takes a distance in **inches** (a `double`), predicts the ticks, and drives. You command in human units; the model handles the rest.

{{< code >}}
void Drive(double inches);   // PROTOTYPE (add near your others)

void Drive(double inches) {
    int ticks = inches * ticks_per_inch;   // PREDICT ticks from the model
    cmpc(0);                               // clear the counter
    while (gmpc(0) < ticks) {               // drive until we reach the predicted ticks
        motor(0, 50);
        motor(1, 50);
    }
    motor(0, 0); motor(1, 0); msleep(50);  // brake
}
{{< /code >}}

Test it: after calibrating, call `Drive(12.0);` and measure how far the robot actually went. Then try a few more distances.

{{< gridtable caption="Predict, drive, measure" >}}
columns:
  - head: Try
    width: 14%
  - head: You asked for (inches)
    width: 30%
  - head: Actual distance traveled (inches)
rows:
  - - num: "1"
    - seed: "12.0"
    - key: d_t1
  - - num: "2"
    - key: d_t2_ask
    - key: d_t2_act
  - - num: "3"
    - key: d_t3_ask
    - key: d_t3_act
  - - num: "4"
    - key: d_t4_ask
    - key: d_t4_act
{{< /gridtable >}}

{{< ask key="p4_accuracy" label="Drive accuracy" >}}How close was the actual distance to what you asked for? If it was off, what might make the prediction imperfect?{{< /ask >}}

## Phase 5 — A Model Can Go Stale

{{% warn title="⚠ Your ticks_per_inch will change over time" %}}
The number you just measured is true *right now* — but it won't stay true forever. Your `ticks_per_inch` can drift as your robot changes:

- **Battery level** — a fresh battery drives stronger than a low one, changing how far each tick carries.
- **Grease and wear in the motors** — a freshly greased or broken-in motor behaves differently than a dry or stiff one.
- **Motor aging** — over weeks and months, motors simply change.

So if your driving starts going long or short for no obvious reason, **recalibrate**. Running your calibration function again rebuilds the model for your robot's [[CONDITION|condition]] *today*.

To keep track, add a comment to your `ticks_per_inch` variable with the last date you calibrated it.
{{% /warn %}}

{{< ask key="p5_stale_model" label="Stale model" >}}Your robot was driving perfectly last week, but today it always stops a little short. Nothing in your code changed. What probably happened, and what should you do?{{< /ask >}}

## Phase 6 — Add to [[LIBRARY|Library]] & Connect

Add `ticks_per_inch`, `calibrate_ticks_per_inch`, and `Drive` to your library, fully commented. From now on you can drive in inches in any mission.

{{% callout title="AI Literacy Thread" %}}
Intelligent systems use models to predict what should happen next.
{{% /callout %}}

You just built a model and used it to predict. This is everywhere in intelligent systems: a weather model predicts tomorrow's temperature; a self-driving car models how far it travels at a given speed; an AI predicts the next word from patterns it measured. And like your `ticks_per_inch`, real models must be **recalibrated** when the world changes — a model trained on old data slowly stops matching reality. Measuring a relationship, using it to predict, and refreshing it when conditions shift is the heartbeat of how machines reason about the world.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_model_power" label="Model power" >}}A plain tick count only works for one exact distance. Why is a *model* like `ticks_per_inch` more powerful than memorizing tick counts for each distance?{{< /ask >}}

{{< ask key="p6_retraining" label="Retraining parallel" >}}Real AI models also go stale and need retraining when the world changes. How is that like recalibrating your `ticks_per_inch`?{{< /ask >}}

## Phase 7 — Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_double" label="Reflection 1" n=1 >}}What is a `double`, and why did this lab need one instead of an `int`?{{< /ask >}}

{{< ask key="p7_q2_calibration" label="Reflection 2" n=2 >}}Explain how the calibration function builds the `ticks_per_inch` model.{{< /ask >}}

{{< ask key="p7_q3_drive" label="Reflection 3" n=3 >}}How does `Drive` use the model to predict ticks from inches?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete in 2–3 sentences: "Intelligent systems use models to predict what should happen next. This means a robot can plan its actions by..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A — Calibrate Twice

- Run your calibration two or three times and compare the `ticks_per_inch` values. Are they identical? What does the spread tell you about measurement?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B — Low Battery Test

- If you can, calibrate with a full battery and again with a lower one. Did `ticks_per_inch` change? By how much?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C — A Turn Model

- Your turns still use raw ticks. Could you build a `ticks_per_degree` model the same way, so you could call `Turn(90.0)`? Sketch how you'd measure it.

{{< answer key="ext_c" label="Extension C" >}}

### Extension D — Rewrite a Mission in Inches

- Take your double-stack mission and replace the raw `Tick_Drive` calls with `Drive` in inches. Is the mission easier to read and plan now? Why?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E — The Same Idea, Somewhere Else

- The calibration idea you built today — measure once, build a numeric model from that measurement, then reuse the model going forward — isn't unique to robots.
- Name two other fields (cooking, medicine dosing, engineering, sports, anything) where that same idea would apply, and explain one of them in 2-3 sentences.

{{< answer key="ext_e" label="Extension E" >}}

### Extension F — Average Your Calibration

- You calibrated 2-3 times in Extension A and got slightly different `ticks_per_inch` values each time. Write a few lines of code that take those readings and compute their average (sum divided by count) instead of eyeballing which one to use.
- Use that averaged value as your real `ticks_per_inch` going forward. Does it change your accuracy on a test drive?

{{< answer key="ext_f" label="Extension F" >}}

### Extension G — Type In a Test Value

- This extension requires running the program manually via SSH or the terminal. While testing (not during a competition run), use `scanf` to read a number typed by a teammate instead of hard-coding it — the same way `printf` already sends output to the console, `scanf` reads input from it.

{{< code size="small" >}}
double distance;
printf("Enter a distance to drive (inches): ");
scanf("%lf", &distance);
Drive(distance);
{{< /code >}}

- Try it for a couple of different distances. Why is typing in a test value faster for testing than editing your code and re-running it each time?

{{< answer key="ext_g" label="Extension G" >}}
