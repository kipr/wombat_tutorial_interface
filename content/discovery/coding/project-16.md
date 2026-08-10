---
title: "Coding Project 16 — Building Your Toolbox"
short_title: "Coding Project 16"
linkTitle: "Building Your Toolbox"
description: "Move your functions into a header file your whole team can share. Fix something once and every project that includes it gets better."
weight: 16
nav: discovery
mission_id: discovery_coding_16
mission_title: "Coding Project 16 — Building Your Toolbox"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 16
strand: coding
phase: "Phase 6 · Clean It Up"
phase_order: 6
time: "One class period"
eyebrow: "Discovery · Coding Project 16"
heading: "Building Your Toolbox"
subheading: "Write it once. Use it in every project you ever make."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Building Your Toolbox"
mission_label: "No field mission — refactor"
no_mission: true
meta:
  - term: Project
    definition: "Coding Project 16"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Clean It Up"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Moving your [[FUNCTION|functions]] out of one program and into a [[LIBRARY|library]] file your whole team can share and carry forward."
  - term: "Before You Start"
    definition: "Project 12 onward — you need a set of working [[FUNCTION|functions]] worth keeping."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: Wombat
      - key: need_2
        label: "Your computer"
      - key: need_3
        label: "Every project you have written since Project 12"
---

## Try It — How Many Copies Do You Have?

Open your projects from 12 onwards, one at a time, and count.

{{< gridtable >}}
columns:
- head: Project
- head: "Has a drive function?"
  aria: "P12 drive"
- head: "Has a turn function?"
  aria: "P12 turn"
rows:
  - cells:
      - text: "12 — Teaching Your Robot New Moves"
      - key: p1_p12_drive
        aria: "P12 drive"
      - key: p1_p12_turn
        aria: "P12 turn"
  - cells:
      - text: "13 — Deciding What to Do"
      - key: p1_p13_drive
        aria: "P13 drive"
      - key: p1_p13_turn
        aria: "P13 turn"
  - cells:
      - text: "14 — Seeing Light and Dark"
      - key: p1_p14_drive
        aria: "P14 drive"
      - key: p1_p14_turn
        aria: "P14 turn"
  - cells:
      - text: "15 — Following the Line"
      - key: p1_p15_drive
        aria: "P15 drive"
      - key: p1_p15_turn
        aria: "P15 turn"
{{< /gridtable >}}
### Now find out whether they match

Put the drive functions from two different projects side by side and compare them line for line.

{{< short-answer key="p1_identical" label="Are they identical" prompt="Are they identical?" >}}

{{< ask key="p1_best_version" label="Best version" >}}Somewhere along the way you improved one of these — a better [[OVERSHOOT|overshoot]] number, a cleaner stop. Which project has your *best* version, and do the others have it?{{< /ask >}}

{{% safety title="⚠ Your Good Work Is Trapped" %}}
Project 12 fixed the problem of writing the same code twice *inside one program*. It did nothing about writing it again in the *next* program.

Right now every improvement you make lives in exactly one project, and the others quietly keep the old broken version.
{{% /safety %}}

{{< ask key="p1_team_sharing" label="Team sharing" >}}Your team has four people, each working on a different mission in a different project. One of them finds a much better turn. How does that reach everyone else?{{< /ask >}}

## Learn It — Your Own header file

A [[LIBRARY|library]] is a collection of functions kept in a separate file that any program can include.

You have been using one since Project 2. It is the very first line of every program you have ever written:

```c
#include <kipr/wombat.h>
```

That is the KIPR library. You cannot change it — but you can make your own beside it.

### Two kinds of include

| Code / part | What it means |
| --- | --- |
| `#include <kipr/wombat.h>` | **Angle brackets** mean "a library that came with the system." The Wombat knows where to find it. |
| `#include "myLibrary.h"` | **Quotation marks** mean "a file sitting in my own project." That is the one you are about to write. |

Get the brackets wrong and the [[COMPILER|compiler]] goes looking in the wrong place. It is a small detail that causes a confusing error.
{.muted}

### What goes in your header file

Your [[HEADER FILE|header file]] holds everything. Your [[PROTOTYPE|prototypes]] and your definitions, all in the one `.h` file.

{{% callout title="Include the KIPR Library Inside Your Library" variant="gold" %}}
Your functions call `motor()`, `msleep()`, `analog()`. Those come from KIPR — so your `.h` file needs its own `#include <kipr/wombat.h>` at the top.

Leave it out and every function inside your library breaks, even though the code looks perfect.
{{% /callout %}}

myLibrary.h

```c
#include <kipr/wombat.h>

void drive_forward(int ticks);
void turn_right();

void drive_forward(int ticks)
{
    cmpc(0);
    while (gmpc(0) < ticks)
    {
        motor(0, 50);
        motor(3, 50);
    }
    motor(0, 0);
    motor(3, 0);
    msleep(30);
    msleep(500);
}

void turn_right()
{
    // your turn code
}
```

main.c

```c
#include <kipr/wombat.h>
#include "myLibrary.h"

int main()
{
    drive_forward(4000);
    turn_right();
    drive_forward(2000);

    return 0;
}
```

Look at what `main.c` became. Two includes and a list of what the robot does. Nothing else.

### Making one

- On the KIPR Software Suite home screen, click **User Preferences** and switch on the advanced interface. Without this you will not see the file options.
- In the KISS [[IDE|IDE]], select your user folder.
- Under **Include File**, click **+ Add File**.
- Name it — something short and yours, like your team name.
- Click **Create**.

Include files are `.h` files. You may also see an option for source files, which are `.c` — you do not need those for this.
{.muted}

{{% safety title="⚠ Save. Every Time." %}}
Editing a `.h` file and forgetting to save it is the number one reason a library "does not work." Your changes are sitting in the editor and the compiler never saw them.

Save the `.h`, then [[COMPILE|compile]].
{{% /safety %}}

### When it will not compile

| Check this | In which file |
| --- | --- |
| Did I include the KIPR library? | Both `main.c` and my `.h` |
| Did I include my own library, with quotation marks? | `main.c` |
| Does the name in the include exactly match the file name? | `main.c` |
| Did I save the `.h` file after my last edit? | My `.h` |
| Is every function's prototype above its definition? | My `.h` |

## Do It — Move In

### Step 1 — Turn on the advanced interface

Software Suite home screen → **User Preferences** → switch on the advanced interface.

{{< checklist >}}
- key: p3_prefs
  label: "I can see the Include File option in the KISS IDE"
{{< /checklist >}}
### Step 2 — Create your library file

Add an include file and name it. Then put the KIPR include at the top and save it immediately, before you write anything else.

{{< gridtable >}}
columns:
- head: Question
- head: "My answer"
  aria: "Library name"
rows:
  - cells:
      - text: "What did I name my library?"
      - key: p3_lib_name
        aria: "Library name"
  - cells:
      - text: "What line do I put in `main.c` to use it?"
      - key: p3_include_line
        aria: "Include line"
{{< /gridtable >}}
### Step 3 — Move one function — just one

Pick your drive function. Cut the prototype and the definition out of a project and paste both into your `.h` file. Save it.

Then add the include to `main.c` and compile.

{{% callout title="One at a Time, Same as Always" variant="gold" %}}
Move one function, compile, run it on the robot. If it works, move the next. Moving six at once and finding it broken tells you nothing about which one broke it.
{{% /callout %}}

{{< checklist >}}
- key: p3_one_moved
  label: "One function lives in my library and my program still runs"
{{< /checklist >}}
### Step 4 — Break it four ways

Each of these is a mistake you will make for real one day. Make it now, on purpose, and write down what the compiler says.

{{< gridtable >}}
columns:
- head: "Break this"
- head: "What the error said"
  aria: "No include error"
rows:
  - cells:
      - text: "Delete `#include \"myLibrary.h\"` from main.c"
      - key: p3_err_no_include
        aria: "No include error"
  - cells:
      - text: "Delete the KIPR include from your `.h`"
      - key: p3_err_no_kipr
        aria: "No KIPR error"
  - cells:
      - text: "Edit the `.h` and compile *without* saving"
      - key: p3_err_no_save
        aria: "No save error"
  - cells:
      - text: "Use `<angle brackets>` for your own library"
      - key: p3_err_brackets
        aria: "Brackets error"
{{< /gridtable >}}
{{< short-answer key="p3_least_helpful" label="Least helpful error" prompt="Which of those four gave the least helpful error message?" >}}

### Step 5 — Move the rest

Go through the function list you wrote in Project 12 and move each one across, compiling as you go. For each function, take the **best** version you have written — not just the first one you find.

{{< gridtable >}}
columns:
- head: Function
  aria: "Function 1"
- head: "Best version came from"
  aria: "Function 1 from"
- head: Moved?
  aria: "Function 1 done"
rows:
  - cells:
      - key: p3_f1
        aria: "Function 1"
      - key: p3_f1_from
        aria: "Function 1 from"
      - key: p3_f1_done
        aria: "Function 1 done"
  - cells:
      - key: p3_f2
        aria: "Function 2"
      - key: p3_f2_from
        aria: "Function 2 from"
      - key: p3_f2_done
        aria: "Function 2 done"
  - cells:
      - key: p3_f3
        aria: "Function 3"
      - key: p3_f3_from
        aria: "Function 3 from"
      - key: p3_f3_done
        aria: "Function 3 done"
  - cells:
      - key: p3_f4
        aria: "Function 4"
      - key: p3_f4_from
        aria: "Function 4 from"
      - key: p3_f4_done
        aria: "Function 4 done"
  - cells:
      - key: p3_f5
        aria: "Function 5"
      - key: p3_f5_from
        aria: "Function 5 from"
      - key: p3_f5_done
        aria: "Function 5 done"
  - cells:
      - key: p3_f6
        aria: "Function 6"
      - key: p3_f6_from
        aria: "Function 6 from"
      - key: p3_f6_done
        aria: "Function 6 done"
  - cells:
      - key: p3_f7
        aria: "Function 7"
      - key: p3_f7_from
        aria: "Function 7 from"
      - key: p3_f7_done
        aria: "Function 7 done"
  - cells:
      - key: p3_f8
        aria: "Function 8"
      - key: p3_f8_from
        aria: "Function 8 from"
      - key: p3_f8_done
        aria: "Function 8 done"
{{< /gridtable >}}
{{< checklist >}}
- key: p3_all_moved
  label: "All my functions are in my library and my program still scores"
{{< /checklist >}}
### Step 6 — Start fresh and pull it in

Make a brand new project. Do not write a single function in it.

```c
#include <kipr/wombat.h>
#include "myLibrary.h"

int main()
{
    // write a short run using only functions from your library

    return 0;
}
```

To use your library in a new project, add it under **Include File** and choose **upload a file**, then pick your `.h`.

{{< checklist >}}
- key: p3_new_project
  label: "A brand new project runs a real sequence using only my library"
{{< /checklist >}}
{{< short-answer key="p3_new_lines" label="New main lines" prompt="How many lines is your new `main.c`?" >}}

### Step 7 — Fix it once, watch it spread

Change something in your library — sharpen the turn, adjust the overshoot. Save. Then run **two different projects** that both include it.

{{< ask key="p3_spread" label="Change spread" >}}What happened in the project you did not touch?{{< /ask >}}

{{% callout title="That Is the Whole Point" variant="gold" %}}
One edit, in one place, and every program that includes your library got better at the same instant. That is what a library buys you.
{{% /callout %}}

### Step 8 — Write the instructions

A library nobody can use is not much good. Put a [[COMMENT|comment]] [[BLOCK|block]] at the top of your `.h` file listing what is in it.

```text
// ============================================
// Team Bulldogs robot library
// Last updated: 12 March
//
// drive_forward(ticks)  - drives straight, given distance
// turn_right()          - zero radius 90 degrees right
// grab()                - arm down, close claw, arm up
// release()             - arm down, open claw, back away
// follow_line(ticks)    - follows the left edge for a distance
// ============================================
```

Then hand your library to another team and ask them to write a short program with it — without asking you any questions.

{{< checklist >}}
- key: p3_documented
  label: "Another team used my library without me explaining it"
{{< /checklist >}}
{{< ask key="p3_stuck_on" label="What they got stuck on" >}}What did they get stuck on? That is the thing your comments should have said.{{< /ask >}}

### Step 9 — Back it up

Your library is now the most valuable file your team owns. Download it from the **File Menu** and keep a copy somewhere off the robot.

{{< checklist >}}
- key: p3_backed_up
  label: "My library is saved somewhere other than the Wombat"
{{< /checklist >}}
Same lesson as Project 1. Code that only exists in one place is code you are about to lose.
{.muted}

## Score It — Checkpoint

No mission points this time. What you built is the thing that makes every future run faster to write.

### My library

{{< gridtable >}}
columns:
- head: Question
- head: "My answer"
  aria: "Library name"
rows:
  - cells:
      - text: "Library file name"
      - key: p4_name
        aria: "Library name"
  - cells:
      - text: "How many functions are in it?"
      - key: p4_count
        aria: "Function count"
  - cells:
      - text: "Where is my backup copy?"
      - key: p4_backup
        aria: "Backup location"
  - cells:
      - text: "Who else on my team has a copy?"
      - key: p4_who_has
        aria: "Who has it"
{{< /gridtable >}}
### Which file?

Say whether each line belongs in your `.h` file, in `main.c`, or in both.

{{< gridtable >}}
columns:
- head: Line
- head: "Which file"
  aria: "Which file KIPR"
rows:
  - cells:
      - text: "`#include <kipr/wombat.h>`"
      - key: p4_which_kipr
        aria: "Which file KIPR"
  - cells:
      - text: "`#include \"myLibrary.h\"`"
      - key: p4_which_mine
        aria: "Which file mine"
  - cells:
      - text: "`void turn_right();`"
      - key: p4_which_proto
        aria: "Which file prototype"
  - cells:
      - text: "The body of `turn_right()`"
      - key: p4_which_def
        aria: "Which file definition"
  - cells:
      - text: "`int main()`"
      - key: p4_which_main
        aria: "Which file main"
{{< /gridtable >}}
### Can you do it again?

{{< checklist >}}
- key: p4_can_explain
  label: "I can explain what a library is and why one is worth building"
- key: p4_can_create
  label: "I can create a new include file in the KISS IDE"
- key: p4_can_brackets
  label: "I know when to use angle brackets and when to use quotation marks"
- key: p4_can_kipr
  label: "I know my library needs its own KIPR include"
- key: p4_can_save
  label: "I save the `.h` file before every compile"
- key: p4_can_new
  label: "I can pull my library into a brand new project"
- key: p4_can_document
  label: "My library has comments that let someone else use it"
{{< /checklist >}}
### Think about it

{{< ask key="p4_never_seen" label="Never seen inside" >}}The KIPR library was written by people you will never meet, and you have used it in every program since Project 2 without ever seeing inside it. Is that a problem?{{< /ask >}}

{{< ask key="p4_next_season" label="Next season" >}}Next season the game changes and the field is completely different. Which parts of your library would still be useful, and which would you throw away?{{< /ask >}}

{{< ask key="p4_biggest_difference" label="Biggest difference" >}}Look at what you have built across sixteen projects. Which one thing made the biggest difference to how your code works — [[VARIABLE|variables]], functions, [[SENSOR|sensors]], or the library?{{< /ask >}}

### Next

One project left. Several missions still have a bonus that means nothing more than "now do that again" — and you are going to stop doing it by hand.

In **Project 17 — Repeating Without Retyping**, you meet the last loop.

KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026
