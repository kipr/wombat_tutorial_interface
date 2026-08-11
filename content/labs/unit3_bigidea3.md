---
title: "Unit 3 · Big Idea 3 — Build Your Library"
short_title: "Lab 3.3"
hub_unit: 3
description: "Libraries and #include — switch to Advanced mode and gather all your functions into one reusable header file."
weight: 160
nav: labs
track: c
mission_id: unit3_bigidea3
eyebrow: "Unit 3 · Big Idea 3"
heading: "Build Your Library"
subheading: "Student Lab · Write Once, Use Everywhere"
credit: "KIPR · Botball Explorer · Unit 3 Big Idea 3 — Student Lab"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine act on the world, not just move through it?"
  - term: "Big Idea"
    definition: "Reusable Code Is Organized Into Libraries"
  - term: "AI Literacy Thread"
    definition: "Complex intelligent systems are built from organized, reusable building blocks."
  - term: "CS1 Concepts"
    definition: "Libraries · [[HEADER FILE|Header Files]] · #include · Code Organization · Documentation"
  - term: "Game Context"
    definition: "Packaging every tool you've built for use in any mission"
  - term: "What You Need"
    definition: "Computer with the KIPR [[IDE]] · your programs from earlier labs · this lab sheet"
---

## Overview

You've built a lot of useful [[FUNCTION|functions]] --- `move_arm`, `move_claw`, `back_until_pressed`, `Tick_Drive`, `line_follow` --- but every time you start a new program, you've had to type them all again. That ends today. You'll gather all your best functions into one **[[LIBRARY|library]]**: a single file you write once and pull into *any* program with one line. Real programmers don't rewrite their tools; they build a toolbox and carry it everywhere.

{{< callout title="Core Insight" >}}
A library lets you write a function once and reuse it in every program forever. Your `main` stays short and readable, and all your tools live in one organized place.
{{< /callout >}}

### By the end of this activity you will be able to:

- Switch the KIPR IDE to Advanced mode to see source and header files.
- Create a header-file library named after yourself and add it to your project.
- Move your reusable functions into the library, organized and documented.
- Include your library with `#include` and call its functions from `main`.
{.obj}

## Phase 1 --- Turn On Advanced Mode

The IDE normally hides its more powerful features to keep things simple. To work with libraries, you need **Advanced** mode. This is a setting on the *user* --- so it must be turned on for any user you want to have advanced features.

1. Click the **menu button** in the **upper-left** corner.
2. Open **User Preferences**.
3. Change the interface setting to **Advanced**.
4. Go **back to the project menu**.

{{< callout title="What changed?" variant="navy" >}}
Back in your project, look at the **right side of the screen**. You'll see **new areas** that weren't there before --- including places for your project's source files and header files. That's where your library will live.
{{< /callout >}}

{{< ask key="p1_new_areas" label="New areas observed" >}}After switching to Advanced and returning to your project, what new areas appeared on the right side of the screen that you didn't see before?{{< /ask >}}

## Phase 2 --- Concept: What a Library Is

{{< concept "A library is a file full of reusable functions" >}}
- text: |
    Every program you've written already uses a library: the very first line, `#include <kipr/wombat.h>`, pulls in KIPR's library --- that's where `motor`, `analog`, `set_servo_position`, and all the rest come from. You never wrote those; you *included* them.

    Today you build your **own** library the same way: a file holding your functions, that you pull into any program with one `#include` line.
{{< /concept >}}

{{< concept "A header file holds the code; #include pastes it in" >}}
- text: |
    Your library will be a **header file** --- its name ends in `.h`. When you write:
- code: |
    #include <@@yourname@@.h>   // pulls your whole library into this program
- text: |
    ...the IDE drops everything from your header right into your program before it builds. Your functions become available, just like KIPR's. Because your library lives in the same project folder, the IDE knows where to find it.
{{< /concept >}}

{{< ask key="p2_include_meaning" label="What include does" >}}You've been using `#include <kipr/wombat.h>` all along. Now that you know what it does, explain in your own words what an `#include` line actually does.{{< /ask >}}

## Phase 3 --- Create Your Library File

In the new file area on the right, create a new **header file**. Name it after yourself, using your **first name** followed by `.h` --- for example, `maria.h` or `devon.h`. This is *your* library.

{{< gridtable >}}
columns:
  - head: Your library file name
    width: 55%
  - head: Write it here
rows:
  - - text: your first name + .h
    - key: p3_filename
      aria: Library filename
      placeholder: e.g. maria.h
{{< /gridtable >}}

{{< callout title="It's portable" variant="gold" >}}
Once your library exists, you can take it anywhere. Select it and use the **File menu** to **download** it, then drop it into any other project. Write your tools once, carry them forever.
{{< /callout >}}

## Phase 4 --- Move Your Functions Into the Library

Now fill your header with every reusable function you've built. Organize it in three clear sections, in this order: **[[VARIABLE|variables]] at the top**, then **function [[PROTOTYPE|prototypes]]**, then **function definitions**. This is the same structure you've used all along --- now it lives in your library.

{{< code filename="yourname.h" >}}
// ============================================================
// yourname.h: My Botball function library
// Every reusable tool I've built, in one place.
// ============================================================

#include <stdlib.h>  // provides abs() for the smooth-movement functions

// ---- VARIABLES (my robot's tuned values) ----
// These live here so the whole library can use them. You can also
// move them into main() if you'd rather set them per program.
int ARM_MIN   = @@____@@;
int ARM_MAX   = @@____@@;
int CLAW_OPEN = @@____@@;
int CLAW_SHUT = @@____@@;
int MIDPOINT  = @@____@@;
int FAST = @@____@@;
int SLOW = @@____@@;

// ---- FUNCTION PROTOTYPES (the promises) ----
void move_arm(int target_position);
void move_claw(int target_position);
void back_until_pressed();
void Tick_Drive(int ticks);
void line_follow(int ticks);

// ---- FUNCTION DEFINITIONS (the recipes) ----

// Servo movement notes:
//   - A one-tick command does not actually move the servo, so step by two.
//   - Repeated get_servo_position calls can overload the controller. Store
//     each reading in current_position and refresh it once per loop.

// move_arm: Smoothly moves the arm servo (port 0) to a position.
//   - Clamps the value into the safe range so the servo can't be
//     forced past a hard stop and burned out.
//   - Steps two ticks at a time for smooth motion.
//   Pass in the arm position you want (e.g. ARM_MAX to raise).
void move_arm(int target_position) {
    if (target_position > ARM_MAX) target_position = ARM_MAX;
    if (target_position < ARM_MIN) target_position = ARM_MIN;
    int current_position = get_servo_position(0);
    while (current_position != target_position) {
        // A 2-tick step could skip a target that is only 1 tick away.
        if (abs(current_position - target_position) == 1) {
            set_servo_position(0, target_position);
        } else if (current_position < target_position) {
            set_servo_position(0, current_position + 2);
        } else {
            set_servo_position(0, current_position - 2);
        }
        msleep(1);
        current_position = get_servo_position(0);
    }
}

// move_claw: Smoothly moves the claw servo (port 3) to a position.
//   Works just like move_arm, but for the claw. Clamps between
//   CLAW_SHUT and CLAW_OPEN so the claw never strains.
//   Pass in CLAW_OPEN to open, CLAW_SHUT to close on a cube.
void move_claw(int target_position) {
    if (target_position > CLAW_OPEN) target_position = CLAW_OPEN;
    if (target_position < CLAW_SHUT) target_position = CLAW_SHUT;
    int current_position = get_servo_position(1);
    while (current_position != target_position) {
        // A 2-tick step could skip a target that is only 1 tick away.
        if (abs(current_position - target_position) == 1) {
            set_servo_position(3, target_position);
        } else if (current_position < target_position) {
            set_servo_position(3, current_position + 2);
        } else {
            set_servo_position(3, current_position - 2);
        }
        msleep(1);
        current_position = get_servo_position(1);
    }
}

// back_until_pressed: Drives the robot straight backward until the
//   touch sensor on digital(0) is pressed against a wall, then stops.
//   Use it to return to a wall and reset to a known position.
void back_until_pressed() {
    while (digital(0) == 0) {
        motor(0, -50);
        motor(3, -50);
        msleep(10);
    }
    motor(0, 0); motor(3, 0); msleep(50);
}

// Tick_Drive: Drives the robot straight forward a measured distance.
//   Pass in the number of encoder ticks to travel. Clears the
//   counter, drives until it reaches 'ticks', then brakes.
void Tick_Drive(int ticks) {
    cmpc(0);
    while (gmpc(0) < ticks) {
        motor(0, 50);
        motor(3, 50);
    }
    motor(0, 0); motor(3, 0); msleep(50);
}

// line_follow: Follows a line for a measured distance using the
//   Tophat sensor on analog(0). Steers with mav based on whether
//   the reading is above MIDPOINT (black) or below (white).
//   Pass in the number of ticks to follow before stopping.
void line_follow(int ticks) {
    cmpc(0);
    while (gmpc(0) < ticks) {
        if (analog(0) > MIDPOINT) { mav(0, FAST); mav(1, SLOW); }
        else                      { mav(0, SLOW); mav(1, FAST); }
    }
    motor(0, 0); motor(3, 0); msleep(50);
}
{{< /code >}}

{{< callout title="[[COMMENT|Comment]] like a teacher" variant="navy" >}}
Notice every function has a comment explaining what it does, written for someone who has *never seen it before*. That's your job here: above each function, write a clear note saying what it does, what you pass in, and what happens. One day that "someone" will be you, six months from now --- and you'll be glad you wrote it.
{{< /callout >}}

{{< ask key="p4_your_comment" label="Your function comment" >}}Pick one of your functions. Write the comment you'd put above it to explain it to a brand-new user who has never seen your code.{{< /ask >}}

## Phase 5 --- Include It and Call Every Function

Now the payoff. In your main program, add your library with an `#include` line at the top --- right under the KIPR one. Then your `main` can call any function in your library. Test **every** function once to prove the library works.

{{< code filename="main.c" >}}

#include <kipr/wombat.h>   // KIPR's library

#include <@@yourname@@.h>     // YOUR library: all your tools, in one line

int main() {
    enable_servo(0);
    enable_servo(1);

    // Call each library function once to test it:
    Tick_Drive(2000);        // drive forward a measured distance
    back_until_pressed();    // back into the wall
    line_follow(1500);       // follow the line a while
    move_claw(CLAW_OPEN);    // open the claw
    move_arm(ARM_MIN);       // lower the arm
    move_claw(CLAW_SHUT);    // close on a cube
    move_arm(ARM_MAX);       // raise it up

    return 0;
}
{{< /code >}}

See how short and readable `main` is now? Every line says *what* happens, and the *how* lives in your library. That's the power of organizing your code.
{.muted}

### Test Each Function

Run your program and check off each function as you confirm it works from the library.

{{< checklist >}}
- key: p5_test_tick_drive
  label: "`Tick_Drive()` drove the measured distance"
- key: p5_test_back_until_pressed
  label: "`back_until_pressed()` backed into the wall and stopped"
- key: p5_test_line_follow
  label: "`line_follow()` followed the line"
- key: p5_test_move_arm
  label: "`move_arm()` moved the arm smoothly and safely"
- key: p5_test_move_claw
  label: "`move_claw()` opened and closed the claw"
{{< /checklist >}}

{{< ask key="p5_all_worked" label="All worked" >}}Did every function work when called from your library? If one didn't, what was the problem and how did you fix it?{{< /ask >}}

## Phase 6 --- Connect: The AI Literacy Bridge

{{< callout title="AI Literacy Thread" >}}
Complex intelligent systems are built from organized, reusable building blocks.
{{< /callout >}}

No one builds a giant intelligent system as one enormous program. They build small, tested, reusable pieces and organize them into libraries --- then combine those pieces into something big. The code that runs a self-driving car, a phone, or an AI model is built on layers of libraries, most written by other people, each one a tool someone built once and shared. Today you took your own scattered tools and organized them into a library. That's exactly how real software is built: not by rewriting everything, but by standing on well-organized, reusable parts.

Read each scenario. Think it through, then write your answer.
{.muted}

{{< ask key="p6_one_library" label="One library benefit" >}}Why is it better to keep your functions in one library than to copy-paste them into every new program? Think about what happens when you find a bug.{{< /ask >}}

{{< ask key="p6_documentation" label="Documentation importance" >}}You wrote comments for a user who's never seen your code. Why is clear documentation so important when code is meant to be reused by others --- or by your future self?{{< /ask >}}

## Phase 7 --- Individual Reflection

Complete this section on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_library" label="Reflection 1" n=1 >}}What is a library, and what does the `#include` line do?{{< /ask >}}

{{< ask key="p7_q2_sections" label="Reflection 2" n=2 >}}What three sections did you organize your library into, and in what order?{{< /ask >}}

{{< ask key="p7_q3_readable" label="Reflection 3" n=3 >}}How does moving your functions into a library make your `main` program easier to read?{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete in 2--3 sentences: "Complex intelligent systems are built from organized, reusable building blocks. This means that a good programmer spends time..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A --- Add a Helper

- Write one brand-new function (like `stop_and_hold()` or `open_then_lower()`) and add it to your library, fully commented. Call it from `main`.

{{< answer key="ext_a" label="Extension A" >}}

### Extension B --- Share It

- Download your library through the File menu and trade with a partner. Can you read and use *their* functions from *their* comments alone? What made it easy or hard?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C --- A Combined Behavior

- Write a function in your library that *calls other library functions* --- for example, `grab_cube()` that opens, lowers, closes, and raises. Why is building big functions from small ones powerful?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D --- Looking Ahead: Turns

- Soon you'll need the robot to turn exactly 90° left and right. What would you name those functions, and where will they go once you've perfected them?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E --- Whose Code Is It?

- You just shared your library with a partner (Extension B). If you posted it online for any team to download, what could they do with it --- use it as-is? Modify it and call it theirs? Sell it?
- Write one sentence saying what you *would* and *wouldn't* allow, and give your library a one-line "license" note at the top of the file.

{{< answer key="ext_e" label="Extension E" >}}

### Extension F --- Ready for Strangers?

- Extension B had one partner try your library. Now imagine every Botball team in your region wanted to use it. What would you need to add or change (documentation, defaults, error-checking) before a total stranger could use it without you there to explain anything?
- Would your library work unmodified on a different KIPR [[CONTROLLER|controller]] model, or would some functions need adjusting? Sketch what "version 2" would need before a public release.

{{< answer key="ext_f" label="Extension F" >}}
