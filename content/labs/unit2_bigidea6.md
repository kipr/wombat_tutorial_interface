---
title: "Unit 2 · Big Idea 6 — Two Sensors, One Decision"
short_title: "Lab 2.6"
weight: 130
nav: labs
track: c
mission_id: unit2_bigidea6
eyebrow: "Unit 2 · Big Idea 6"
heading: "Two Sensors, One Decision"
subheading: "Student Lab · Follow the Line, Stop at the Object"
credit: "KIPR · Botball Explorer · Unit 2 Big Idea 6 — Student Lab"
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine sense and respond to the world around it?"
  - term: "Big Idea"
    definition: "Complex Behavior Emerges From Multiple Inputs"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems combine multiple sources of information to make [[DECISION|decisions]]."
  - term: "CS1 Concepts"
    definition: "Multi-Sensor Logic · ET Distance [[SENSOR|Sensor]] · [[SENSOR FUSION|Sensor Fusion]] · Non-linear Data"
  - term: "Game Context"
    definition: "Follow the line until an object is just ahead, then stop"
  - term: "What You Need"
    definition: "Explorer robot · Tophat ([[ANALOG|analog]] 0) · ET sensor (analog 1) · ruler · object · this lab sheet"
---

## Overview

So far, each behavior used one sensor. Your line-follow watches the Tophat. Your touch-stop watched the button. Today the robot uses **two sensors at the same time**: the Tophat to stay on the line, and a new **ET distance sensor** to watch for an object ahead. The robot will follow the line — and the moment something appears in front of it, stop. Neither sensor could do this alone. Together, they can.

{{% callout title="Core Insight" %}}
The smartest behavior comes from combining sensors. One answers "which way?" The other answers "stop yet?" Put together, the robot does something neither sensor could do by itself.
{{% /callout %}}

### By the end of this activity you will be able to:

- Read an **ET distance sensor** with `analog(1)` and explain what its values mean.
- Map the ET's value-to-distance relationship, and find its close-range blind spot.
- Combine two sensors in one loop — one to steer, one to decide when to stop.
- Connect multi-sensor decisions to how intelligent systems fuse many inputs.
{.obj}

## Phase 1 — Meet the ET Sensor

{{< figrow >}}
- src: kit/1ETsensor.jpg
  alt: The ET rangefinder.
{{< /figrow >}}

{{% callout title="Setup" variant="navy" %}}
Mount the **ET distance sensor** on the **front** of your robot, facing **forward** (looking out ahead, not down at the floor like the Tophat).

Plug it into **analog [[PORT|port]] 1**. In code, `analog(1)` reads the ET. Your Tophat is still on `analog(0)`.
{{% /callout %}}

{{< concept "The ET is a distance sensor — and it works backwards from what you'd guess" >}}
- text: |
    The ET shines infrared light forward and measures how much bounces back off an object. The key rule:

    <p style="text-align:center;font-weight:600;color:var(--navy)">The CLOSER the object, the HIGHER the value.</p>

    So a far-away object gives a low number, and as it gets nearer the number climbs. It's not a neat straight line, either — the value changes faster up close than far away. That's why you have to measure it yourself.
{{< /concept >}}

{{% widgetstep title="Watch it on the [[CONTROLLER|controller]]" %}}
Open the **Motors and Sensors** widget, then the **sensor list**, and find **analog port 1**. Move your hand toward and away from the sensor and watch the number rise as you get closer, fall as you back away.
{{% /widgetstep %}}

{{< ask key="p1_et_behavior" label="ET behavior" >}}Move an object from far to near while watching analog(1). Describe what the number did. Did it climb steadily, or faster at some distances than others?{{< /ask >}}

## Phase 2 — Map Value vs. Distance

Place an object squarely in front of the sensor at each distance and record the ET value (pick the middle of the bounce). This table is your map from "value" to "real distance."

{{< gridtable caption="ET value at each distance" >}}
columns:
  - head: Distance to object
    width: 34%
  - head: ET value (analog 1)
    width: 40%
  - head: Notes
rows:
  - - seedmono: "12 in"
    - key: et_12in
    - key: et_12in_note
  - - seedmono: "10 in"
    - key: et_10in
    - key: et_10in_note
  - - seedmono: "8 in"
    - key: et_8in
    - key: et_8in_note
  - - seedmono: "6 in"
    - key: et_6in
    - key: et_6in_note
  - - seedmono: "4 in"
    - key: et_4in
    - key: et_4in_note
{{< /gridtable >}}

### Now Investigate the Close Range

{{% safety title="⚠ The blind spot — read this" %}}
The ET sensor stops behaving below about **3 inches**. Get closer than that and the reading does something strange — it can *drop* or bounce even as the object gets nearer. The sensor has a close-range **blind spot** where its numbers can't be trusted.
{{% /safety %}}

Carefully push the object in past 3 inches and watch what the value does. Record it — this is real data about where the sensor fails.

{{< gridtable caption="Close range — the blind spot" >}}
columns:
  - head: Distance to object
    width: 34%
  - head: ET value (analog 1)
    width: 40%
  - head: Acting normal?
rows:
  - - seedmono: "3 in"
    - key: et_3in
    - key: et_3in_ok
  - class: blind
    cells:
      - label: "2 in (blind spot)"
      - key: et_2in
      - key: et_2in_ok
  - class: blind
    cells:
      - label: "1 in (blind spot)"
      - key: et_1in
      - key: et_1in_ok
{{< /gridtable >}}

{{< ask key="p2_blind_spot" label="Blind spot observations" >}}What happened to the value when you went closer than 3 inches? Why is it dangerous to trust the sensor in that range?{{< /ask >}}

## Phase 3 — Choose Your Stop Value

You want the robot to stop with the object close — but **before** it enters the untrustworthy blind spot. A safe target is around **4 inches**: close enough to count as "reached the object," but safely outside the bad zone under 3 inches.

{{< calcbox title="My stop value" >}}
- prose: |
    From your Phase 2 table, copy the ET value you measured at about 4 inches. That's the value your loop will watch for.
- text: "ET value at ~4 in ="
- input:
    key: stop_value
    aria: stop value
    placeholder: stop_value
{{< /calcbox >}}

{{% callout title="Why outside the blind spot" variant="gold" %}}
If you set your stop value too high (too close), the robot would have to drive into the blind spot to reach it — where the reading misbehaves and the robot might never see the right number. Stopping around 4 inches keeps you on the part of the curve you can trust.
{{% /callout %}}

{{< ask key="p3_why_4in" label="Why 4 inches" >}}Why did you pick a stop value from around 4 inches instead of 1 or 2 inches, even though closer would "reach" the object more?{{< /ask >}}

## Phase 4 — Concept: Two Sensors in One Loop

{{< concept "Each sensor answers a different question" >}}
- text: |
    Your loop will now read two sensors, each with its own job:

    - **Tophat** (`analog(0)`) → *"Which way do I steer to stay on the line?"*
    - **ET** (`analog(1)`) → *"Is there an object close enough to stop?"*

    Combining sensors like this is called **sensor fusion** — using more than one input together to make a decision neither could make alone.
{{< /concept >}}

{{< concept "The loop checks the ET; the body steers with the Tophat" >}}
- text: |
    The `while` [[CONDITION|Condition]] watches the ET: keep going while the object is still far (the value is still *below* your stop value). Inside the loop, the same `if/else` steering you tuned before keeps the robot on the line.
- code: |
    while (analog(1) < STOP_VALUE) {   // ET: still far? keep going
        if (analog(0) > MIDPOINT) {     // Tophat: steer on the line
            ...
        } else {
            ...
        }
        msleep(10);                     // tiny pause (like the touch-sensor lab)
    }
- text: |
    That `msleep(10)` is the same idea you used with the touch sensor: the loop checks the sensors hundreds of times a second, and a small pause keeps it from overworking the controller.
    {.muted}
{{< /concept >}}

## Phase 5 — Build line_follow_until_object

{{% safety title="⚠ Test in your hands first" noprint=true %}}
Hold the robot up. Pass the line under the Tophat and watch it steer. Then move your hand toward the ET and watch the wheels brake when your hand gets close. Only put it on the board once both reactions look right.
{{% /safety %}}

Start from your tuned line-follow. Add an ET check to the loop condition and your stop value at the top. Use **your own** `MIDPOINT`, `STOP_VALUE`, and the `mav` speeds you found best. [[PROTOTYPE|Prototype]] above `main()`, definition below.

{{< code >}}
// Unit 2, Big Idea 6: Two Sensors, One Decision
// Name: _______________________   Date: ___________

#include <kipr/wombat.h>

int MIDPOINT   = @____@;   // your Tophat threshold (from BI4)
int STOP_VALUE = @____@;   // your ET value at ~4 inches (from Phase 3)
int FAST       = @____@;   // your best mav fast speed (from BI5)
int SLOW       = @____@;   // your best mav slow speed (from BI5)

void line_follow_until_object();   // PROTOTYPE

int main() {
    line_follow_until_object();    // follow the line, stop at the object
    return 0;
}

void line_follow_until_object() {
    while (analog(1) < STOP_VALUE) {   // ET: object still far? keep going
        if (analog(0) > MIDPOINT) {    // Tophat: on black, steer right
            mav(0, FAST);
            mav(1, SLOW);
        } else {                       // on white, steer left
            mav(0, SLOW);
            mav(1, FAST);
        }
        msleep(10);                    // tiny pause so we don't overwork the controller
    }

    motor(0, 0);                       // object is close: brake
    motor(1, 0);
    msleep(50);                        // let the brake settle
}
{{< /code >}}

{{% callout title="Reminders from earlier labs" variant="gold" %}}
If the steering goes the wrong way, flip the two `mav` [[BLOCK|blocks]] (from Big Idea 4). The brake-and-settle at the end is from Big Idea 2. The `msleep(10)` in the loop is from Big Idea 1.
{{% /callout %}}

### Test Log

{{< gridtable count=4 prefix="test" label="Test" numbered=true number_head="Try" number_width="8%" >}}
- head: What you changed
  key: changed
  width: 30%
- head: Did it follow the line AND stop at the object?
  key: result
{{< /gridtable >}}

### [[CHECKLIST|Checklist]]

- The loop condition reads the ET: `analog(1) < STOP_VALUE`
- The `if/else` inside reads the Tophat: `analog(0) > MIDPOINT`
- There is an `msleep(10)` inside the loop
- Your `STOP_VALUE` is a ~4 inch reading — outside the blind spot
- The robot brakes after the loop

## Phase 6 — Connect: The AI Literacy Bridge

{{% callout title="Big Idea — AI Literacy Thread" %}}
Intelligent systems combine multiple sources of information to make decisions.
{{% /callout %}}

Your robot just did something it never could with one sensor: it stayed on a path *and* watched for an obstacle, at the same time. This is called **sensor fusion**, and it's how every advanced intelligent system works. A self-driving car blends cameras, radar, and GPS at once — no single one is enough. Your phone blends the touchscreen, the accelerometer, and the light sensor to decide what to show. Intelligence grows when a system stops relying on one input and starts combining many.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_both_needed" label="Both sensors needed" >}}Your robot used the Tophat AND the ET together. Describe a task that needs *both* — something neither sensor could accomplish alone.{{< /ask >}}

{{< ask key="p6_trust_limits" label="Knowing sensor limits" >}}You learned the ET can't be trusted closer than ~3 inches. Why is it important for an intelligent system to know not just what its sensors say, but *when not to trust them*?{{< /ask >}}

{{< ask key="p6_why_combine" label="Why combine sensors" >}}A self-driving car combines cameras, radar, and GPS. Why is combining several sensors safer than relying on the single "best" one?{{< /ask >}}

## Phase 7 — Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_et_relation" label="Reflection 1" n=1 >}}How does the ET sensor's value relate to distance? What's surprising about it compared to "bigger number means farther"?{{< /ask >}}

{{< ask key="p7_q2_blind_spot" label="Reflection 2" n=2 >}}What is the ET's blind spot, and how did it affect the stop value you chose?{{< /ask >}}

{{< ask key="p7_q3_two_questions" label="Reflection 3" n=3 >}}In your loop, what question did the Tophat answer, and what question did the ET answer? Why did you need both?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete this in 2–3 sentences: "Intelligent systems combine multiple sources of information to make decisions. This means that the more a system can sense, the better it can..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A — Back Off to a Safe Distance

- After stopping, what if the object is a little too close? Add a short backward move so the robot ends at a consistent distance. How does this avoid the blind spot entirely?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B — Report the Distance

- Use your Phase 2 table to turn the stopping ET value back into an approximate distance, and `printf` it. Roughly how far away did the robot actually stop?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C — Two Conditions to Keep Going

- What if you wanted the robot to also stop after a maximum number of [[TICK|ticks]], even if it never sees an object? How could the loop check the ET *and* the [[ENCODER|encoder]]? (Think about combining conditions.)

{{< answer key="ext_c" label="Extension C" >}}

### Extension D — Add a Third Sensor

- Imagine adding the touch sensor from Big Idea 1 as a backup bumper. How would three sensors together make the robot even more reliable? Sketch the idea in words.

{{< answer key="ext_d" label="Extension D" >}}

### Extension E — Automatic Data Collection

- Your ET sensor automatically collects distance data the entire time your robot runs — no one approves each individual reading. Real devices do this constantly: traffic cameras, smart doorbells, fitness trackers.
- What privacy concerns come up when a device collects data automatically instead of only when someone asks it to? Who should get to see that data, and who should decide?

{{< answer key="ext_e" label="Extension E" >}}

### Extension F — A Simple Rule-Based Decision

- Right now your robot stops using one rule: distance < [[THRESHOLD|threshold]]. A basic rule-based decision system combines multiple pieces of evidence before acting, instead of reacting to a single reading.
- Add a second condition: only stop if the object reads close on **three readings in a row**, not just one (to ignore a single noisy blip). Does requiring repeated evidence reduce false stops?

{{< answer key="ext_f" label="Extension F" >}}
