---
title: "Unit 1 · Big Idea 2 — The Red Cube Breakdown"
short_title: "Lab 1.2"
weight: 40
nav: labs
track: c
mission_id: unit1_bigidea2
eyebrow: "Unit 1 · Big Idea 2"
heading: "Problems Can Be Broken Into Smaller Problems"
subheading: "Student Lab · The Red Cube Breakdown"
credit: "KIPR · Botball Explorer · Unit 1 Big Idea 2 — Student Lab"
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine understand and act within the world?"
  - term: "Big Idea"
    definition: "Problems Can Be Broken Into Smaller Problems"
  - term: "AI Literacy Thread"
    definition: "Intelligent systems solve complex problems by breaking them into smaller parts."
  - term: "CS1 Concepts"
    definition: "[[DECOMPOSITION|Decomposition]] · Computational Thinking · Planning · [[ABSTRACTION|Abstraction]]"
  - term: "Game Context"
    definition: "[[@2|Mission 2]] — Relocate the Red Cube (drive, push, return) · builds toward [[@8|Mission 8]] — Deliver the Red Cube"
  - term: "What You Need"
    definition: "Explorer robot kit · game field · this lab sheet · sticky notes (optional)"
---

## Overview

Today's challenge looks impossible at first glance. Mission 2 — Relocate the Red Cube — requires your robot to drive to the Large Red Cube (which starts [[ON TOP OF]] its [[PALLET|pallet]]), push the whole palletized assembly off the black line, and then return to its starting box. That's not one task. That's a system of tasks.

{{% callout title="Core Insight" %}}
No intelligent system solves a complex problem all at once.

It solves many small problems in sequence — and the intelligence lies in knowing how to break the big problem apart.
{{% /callout %}}

### By the end of this activity you will be able to:

- Define *decomposition* and explain why it is a foundational strategy for both programmers and AI systems.
- Break a multi-stage game mission into independent sub-problems and identify dependencies between them.
- Write modular code where each [[FUNCTION|function]] solves exactly one sub-problem.
- Connect the structure of your program to how large intelligent systems are architected.
{.obj}

### New This Time: [[VARIABLE|Variable]]s and Functions

Two new tools you'll use today. You already know `motor()`, `msleep()`, and `ao()` — these let you organize them.
{.muted}

{{< concept "An int — a named number" >}}
- text: |
    `int` stands for *[[INTEGER|Integer]]* — a whole number. When you write an `int`, you give a number a **name**, so you can use the name instead of typing the number everywhere. Change it once at the top, and every place that uses the name updates.
- code: |
    int DRIVE_SPEED = 50;   // name a number: DRIVE_SPEED now means 50

    motor(0, DRIVE_SPEED);  // same as writing motor(0, 50);
    motor(1, DRIVE_SPEED);  // same as writing motor(1, 50);
- text: |
    Here you've named your motors' speed once. If you want them slower later, you change `50` in one spot instead of hunting through your whole program.
{{< /concept >}}

{{< concept "A function — a name for a group of commands" >}}
- text: |
    A function lets you take several commands and give them **one name**. After you build it once, you can run all of those commands by just writing its name. `void` means the function does a job but doesn't hand a number back.
- code: |
    void drive_forward() {     // make a new command called drive_forward
        motor(0, DRIVE_SPEED);  // these lines are the job it does
        motor(1, DRIVE_SPEED);
        msleep(1000);
        ao();                   // stop at the end
    }
- text: |
    Now, anywhere in your program, writing `drive_forward();` runs all of those lines. You built your own command.
{{< /concept >}}

## Phase 1 — Activate: The Impossible Errand

Imagine someone gives you one instruction: **"Make dinner."**

{{% callout title="Think it through" variant="navy" %}}
Why is "Make dinner" not actually a useful instruction for a robot?

What does a robot need before it can act on a task that big?

Break "Make dinner" into the smallest steps you can. How many steps do you end up with?
{{% /callout %}}

{{< steps key="p1_dinner" label="Dinner step" count=8
          group="Break it down — list as many sub-steps as you can think of:" >}}

{{< ask key="p1_stop_point" label="When you stopped decomposing" >}}At what point did you stop breaking it down? What made you decide a step was "small enough"?{{< /ask >}}

{{< ask key="p1_similar_to_mission" label="Similarity to a robot mission" >}}How is "Make dinner" similar to a robot mission on the Foundations field?{{< /ask >}}

## Phase 2 — Concept: Decomposition &amp; Abstraction

### Decomposition

Decomposition is the process of breaking a complex problem into smaller sub-problems that are each simple enough to solve independently. It is one of the four pillars of computational thinking and one of the most important strategies in both programming and AI system design.

Why Decomposition Works
{.group-label}

1. Each sub-problem can be solved and tested independently.
2. Sub-problems can be worked on by different people (or different parts of a system) at the same time.
3. A solution to one sub-problem can often be reused in a different context.
4. When something breaks, you know exactly which sub-problem to fix.

### Abstraction

Abstraction means hiding the details of how something works so you can use it without thinking about those details. When you call `drive_forward()`, you don't think about motor power, wheel friction, or timing. You just think: "the robot drives forward." That's abstraction. In this activity, every function you write is an abstraction — once it works, you use it without thinking about its internals.

### Dependencies

When decomposing a problem, some sub-problems must be solved before others. This ordering relationship is called a *dependency*. Identifying dependencies before you code prevents wasted effort.

{{% callout title="Example" variant="gold" %}}
You cannot push the palletized cube off the line until the robot has driven to it. "Drive to the cube" is a dependency of "push the cube" — so you build and test the driving first, before you write a single line of the pushing. Get the order wrong and you waste time testing a push on a robot that isn't even in the right place yet.
{{% /callout %}}

{{< ask key="p2_decomp_vs_list" label="Decomposition versus a list" >}}In your own words: what is the difference between decomposition and just "making a list"?{{< /ask >}}

## Phase 3 — Analyze

### Mission 2 — What Must Happen?

{{% callout title="Mission 2 — Relocate the Red Cube" %}}
**Starting state:** The Large Red Cube begins ON TOP OF its pallet.

**Base:** The Large Red Cube AND its pallet are both OFF the black line.

**Bonus:** Both Small Red Cubes are also OFF the black line.

**Key rule:** Both the cube AND the pallet must independently satisfy the OFF definition. The cube rides on the pallet, so pushing the assembly together is what scores — no lifting required.
{{% /callout %}}

{{% callout title="Your target today: drive, push, return" variant="navy" %}}
Your robot will use only the driving and turning commands you already have. It drives to the palletized cube, pushes the whole assembly off the black line, and returns to its starting box. No arm, no lifting — that comes in a later lesson.
{{% /callout %}}

{{% callout title="Looking ahead — Mission 8" variant="gold" %}}
Later in the game, Mission 8 — Deliver the Red Cube asks the robot to lift that same palletized cube up onto the Loading Dock. That takes an arm, which means [[SERVO|servo]]s — a tool you haven't met yet. We'll worry about that lifting motion in a later lesson. For now, notice that the very first part of Mission 8 is the same as Mission 2: drive to the cube. The work you do today is a piece you'll reuse.
{{% /callout %}}

### Step 1 — Identify the Sub-Problems

Before writing any code, decompose Mission 2 into its smallest independent pieces. List every distinct action your robot must perform, in order — from leaving the starting box to returning to it.

{{< steps key="p3_subtask" label="Sub-task" count=6 >}}

### Step 2 — Identify Dependencies

For each sub-task, note what must happen first, and whether you could test it on its own. The first row is filled in as an example.

{{< gridtable count=5 prefix="p3_dep" >}}
- head: Sub-Task
  key: task
  width: 36%
  example: Drive to the cube
- head: Depends On (must happen first)
  key: depends
  width: 40%
  example: Start position
- head: Test alone?
  key: testalone
  width: 24%
  example: "Yes"
{{< /gridtable >}}

### Step 3 — Name Your Functions

Each sub-task should become its own function. Name them here before you write any code. Good function names describe exactly what the function does. The first row is an example.

{{< gridtable count=5 prefix="p3_fn" >}}
- head: Function Name
  key: name
  width: 30%
  example: drive_to_cube()
- head: What it does (one sentence)
  key: does
  width: 46%
  example: Drive from the start box to the cube
- head: Output / Effect
  key: effect
  width: 24%
  example: Robot at the cube
{{< /gridtable >}}

{{< ask key="p3_uncertain_fn" label="Most uncertain function" >}}Look at your function list. Which function are you most uncertain about? What specifically makes it hard?{{< /ask >}}

## Phase 4 — Build

{{% callout title="The One-Function Rule" variant="navy" %}}
Build and test one function at a time. Do not write the next function until the current one works reliably.

A function "works" when it produces the correct result on 3 runs in a row without adjustment. This is the same discipline used to build every large software system ever written.
{{% /callout %}}

### Code Scaffold

{{% callout title="Where do functions go?" variant="gold" %}}
A function has to be defined *before* the code that uses it. Since `main()` is what runs your program, your functions live **above** `main()`. The computer reads top to bottom, so it needs to know what `drive_forward()` means before it reaches the line that calls it.
{{% /callout %}}

Your program structure should look like this. Notice the movement commands are now **functions you name**, and each uses the `int` speeds set at the top. Fill in each function body from your Phase 3 decomposition. Only add a function call in `main()` once that function is tested and working.

{{< code >}}
// Unit 1 · Big Idea 2 — Red Cube Breakdown
// Name: _______________________   Date: ___________

#include <kipr/wombat.h>

// ── Named numbers (int) — change these as you test ──
int DRIVE_SPEED = 50;
int TURN_SPEED  = 40;

// ── Movement commands you can reuse (no parameters yet) ──
void drive_forward() {
    motor(0, DRIVE_SPEED);
    motor(1, DRIVE_SPEED);
    msleep(1000);
    ao();
}

void turn_right() {
    motor(0, TURN_SPEED);
    motor(1, -TURN_SPEED);
    msleep(600);
    ao();
}

// ── Your sub-task functions — write ONE, test it, then write the next ──
// Build each one out of drive_forward() and turn_right().
// Name them using your Phase 3 list — for example, a function that
// drives the robot to the cube, one that pushes it off the line,
// or one that returns to the starting box.


// ── Integration — only add a call here after that function passes 3 runs ──
int main() {
    // Add each call only after that function works:
    // your_first_function();
    // your_second_function();
    // your_third_function();
    return 0;
}
{{< /code >}}

### Build Log — Track Each Function

Complete one row when you finish building and testing each function. Do not move to the next function until the current one passes 3 runs in a row.

{{< gridtable count=6 prefix="build" label="Build" >}}
- head: Function Name
  key: name
  width: 26%
  seed: drive_to_cube()
- head: Runs tried
  key: runs
  width: 12%
- head: Passes (3 needed)
  key: passes
  width: 14%
- head: Problem encountered
  key: problem
  width: 24%
- head: How you fixed it
  key: fix
{{< /gridtable >}}

## Phase 5 — Integrate

Once all your individual functions pass, add all the calls in `main()` and run the complete sequence. Record what happens.

{{% callout title="What to watch for during integration" variant="gold" %}}
Functions that worked alone sometimes fail when combined. Why? Because the robot's position at the end of one function is the starting position for the next.

If function B fails after function A, the problem is usually function A — it left the robot in the wrong position. Fix function A before [[TOUCHING]] function B.
{{% /callout %}}

### Integration Trial Log

{{< gridtable count=4 prefix="integ" label="Integration" numbered=true number_head="Trial" >}}
- head: Last function reached
  key: reached
  width: 24%
- head: Where it failed
  key: failed
  width: 23%
- head: Root cause
  key: cause
  width: 22%
- head: Fix applied
  key: fix
{{< /gridtable >}}

{{< ask key="p5_integration_fail" label="Integration failure description" size="tall" >}}Did any function that passed alone fail during integration? Describe exactly what happened and why.{{< /ask >}}

## Phase 6 — Connect: The AI Literacy Bridge

{{% callout title="Big Idea 2 — AI Literacy Thread" %}}
Intelligent systems solve complex problems by breaking them into smaller parts.
{{% /callout %}}

A self-driving car doesn't "drive." It runs hundreds of sub-systems at once: one detects lane markings, one tracks other vehicles, one monitors speed, one predicts pedestrian movement, one manages braking, one handles steering. Each sub-system is a decomposed piece of the larger problem. The complexity of the whole emerges from the coordination of the parts. Today, you built that coordination from scratch.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_search_decomp" label="Search engine decomposition" size="tall" >}}A search engine returns results in under a second for any query ever typed. Decompose this: what are at least four distinct sub-problems the system must solve to do this?{{< /ask >}}

{{< ask key="p6_abstraction" label="Abstraction question" >}}Each sub-task function you wrote is an abstraction — once it works, you call it by name without thinking about the `drive_forward()` and `turn_right()` steps inside it. Pick one of your functions: what details does it hide from the rest of your program? Why does hiding those details make your code better?{{< /ask >}}

{{< ask key="p6_integration_lesson" label="Integration lesson" >}}In Phase 5 you may have found that functions interacted in unexpected ways during integration. What does this tell you about the challenge of building large AI systems from many smaller components?{{< /ask >}}

## Phase 7 — Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_decomposition" label="Reflection 1" n=1 >}}Define decomposition in your own words. What problem does it solve for a programmer?{{< /ask >}}

{{< ask key="p7_q2_dependency" label="Reflection 2" n=2 >}}What is a dependency? Give one example of a dependency from your robot program today.{{< /ask >}}

{{< ask key="p7_q3_one_function_rule" label="Reflection 3" n=3 >}}The One-Function Rule says: don't write the next function until the current one works. Why is this discipline hard to follow? What happens when you skip it?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete this in 2–3 sentences: "Intelligent systems solve complex problems by breaking them into smaller parts. This means that when an AI system fails at a complex task..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A — Going for the Bonus

- The Mission 2 bonus also requires both Small Red Cubes to be OFF the black line.
- Where are the small cubes relative to your push path? Could one push clear everything, or do you need a separate move?
- Decompose the bonus: what new sub-task(s) would you add, and where in your sequence would they go?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B — Dependency Map

- Create a visual dependency map of your full program. Each function is a node; draw an arrow from A to B if B depends on A.
- What shape does your map have — a linear chain, a branching tree, something else?
- What does the shape tell you about the structure of your solution?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C — The Reuse Test

- Can any of your sub-task functions be reused for a different mission?
- Which functions are specific to Mission 2? Which are general-purpose?
- Which function would you redesign to be more general, and how?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D — Abstraction Levels

- Right now your program has two levels: `main()` calls sub-task functions, which call movement functions.
- Add a third level: group your sub-task functions into two or three higher-level functions (e.g., `relocate_cube()`, `return_home()`).
- Rewrite `main()` to call only those high-level functions. How does this make the program easier to read and modify?

{{< answer key="ext_d" label="Extension D" >}}
