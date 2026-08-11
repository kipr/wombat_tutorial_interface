---
title: "Coding Project 2 — Your First Program"
short_title: "Coding Project 2"
linkTitle: "Your First Program"
description: "The C template line by line, printing to the screen, timing with msleep, comments and attribution, and reading error messages."
weight: 2
nav: discovery
mission_id: discovery_coding_02
mission_title: "Coding Project 2 — Your First Program"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 2
strand: coding
phase: "Phase 1 · Get Connected"
phase_order: 1
time: "One class period"
eyebrow: "Discovery · Coding Project 2"
heading: "Your First Program"
subheading: "Find out what every line of that code actually means — then change it and make it yours."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Your First Program"
mission_label: "No field mission"
no_mission: true
build_gate:
  title: "Build required first — the bulldozer blade"
  description: "Project 6 pushes cubes, poms and cones off the black line. Build the blade in Systems before you reach it."
  page: /discovery/systems/project-06
  label: "Go build the blade →"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: Project
    definition: "Coding Project 2"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Get Connected"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Reading the C template line by line, writing your own text to the screen, controlling timing, and learning to read error messages."
  - term: "Before You Start"
    definition: "Project 1 — you must be able to connect, create a project, [[COMPILE|compile]], and run."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Wombat [[CONTROLLER|controller]]"
      - key: need_2
        label: Battery
      - key: need_3
        label: "Your computer or Chromebook"
      - key: need_4
        label: "This project sheet"
---

## Try It --- Guess Before You Know

In Project 1 you compiled and ran code that somebody else wrote. Here it is again.

```c
#include <kipr/wombat.h>

int main ()
{
	printf("Hello World!\n");
	return 0;
}
```

Do not look anything up. Do not ask anyone. Just guess --- you will find out in a few minutes whether you were right.

{{< ask key="p1_guess_other_lines" label="Guess what the other lines do" >}}Line 5 is the only line that made something happen on the screen. What do you think the other lines are for?{{< /ask >}}

{{< ask key="p1_guess_line1" label="Guess about line 1" >}}Line 1 has a `#` and no [[SEMICOLON|semicolon]] at the end. Every other line looks different from it. Why might that be?{{< /ask >}}

{{< ask key="p1_guess_braces" label="Guess about curly braces" >}}There are exactly two curly braces, `{` and `}`. What do you think they are doing?{{< /ask >}}

{{< callout title="Keep Your Guesses" variant="gold" >}}
Do not erase them, even if they turn out to be wrong. Being wrong and then finding out why is how this works.
{{< /callout >}}

## Learn It --- The Template, Line by Line

Every C program you write on the Wombat starts from this same shape. It is called the **template**.

| Code / part | What it means |
| --- | --- |
| `#include <kipr/wombat.h>` | Brings in the KIPR [[LIBRARY\|library]] --- a big collection of ready-made commands for driving motors, moving [[SERVO\|servos]], and reading [[SENSOR\|sensors]]. Every program needs this line. Without it, the robot does not know what `printf` or `motor` mean. |
| `int main ()` | Defines the `main` [[FUNCTION\|function]]. When you press Run, the robot always starts here. Every program has exactly one `main`. |
| `{` | Opens a [[BLOCK\|block]]. Everything between this brace and its partner belongs to `main`. |
| `printf("Hello World!\n");` | A programming [[STATEMENT\|statement]] --- one action for the robot to carry out. This one prints text to the Wombat's screen. |
| `return 0;` | Reports back to the [[CONTROLLER\|controller]] that the program finished. `0` means "no problems." This is always the last statement before the closing brace. |
| `}` | Closes the block. The program stops here. |

### Semicolons end statements

Look at lines 5 and 6. Both end with a semicolon.

A semicolon does the same job as the period at the end of an English sentence: it says *this thought is finished, move on.* Leave one out and the [[COMPILER|compiler]] runs two statements together, the way a sentence without a period becomes a run-on.

Lines that open a new block --- like `int main ()` --- do **not** get a semicolon. The brace does that job instead.
{.muted}

### Order matters, and speed is not the point

The controller reads your program like you read a book: top line first, then down, one line at a time.

It is fast. The Wombat's processor runs at 800 MHz, so it moves from one line to the next far quicker than you can blink. That becomes a problem the moment you want the robot to *hold* a wheel on, or leave a message on screen long enough to read. You will fix that with `msleep()` in a minute.

### Colors are a hint

The KISS [[IDE|IDE]] colors your code as you type. That coloring is a free error check --- if something is the wrong color, you have made a mistake before you even [[COMPILE|compile]].

| Color | What it is |
| --- | --- |
| Green | [[COMMENT\|comments]] --- the computer ignores these |
| Bold blue | Keywords, like `int` and `return` |
| Red | Text [[STRING\|strings]] --- anything inside quotation marks |
| Aqua | Numbers |

{{< callout title="A Quick Trick" variant="gold" >}}
If you open a quotation mark and forget to close it, everything after it turns red. Spotting that color spreading down the page is faster than reading an error message.
{{< /callout >}}

### Comments

A comment starts with two slashes. The computer ignores everything after them on that line --- comments are for people, not machines.

```c
#include <kipr/wombat.h>

int main ()
{
	// You can put a comment on its own line
	printf("Hello World!\n"); // You can also put a comment after a statement
	return 0;
}
```

Comments have three jobs, and you will use all three:

- **Explain** what a line does, so you still understand it next week.
- **Plan** --- writing your steps as comments first is called [[PSEUDOCODE|pseudocode]].
- **Give credit** --- if you borrow code, you say so in a comment.

### Commands you already have

These come with the KIPR library. You do not have to write them. You will meet most of these in later projects --- this list is here so you know they exist.
{.muted}

| Command | What it does |
| --- | --- |
| `printf("text\n");` | Prints text to the Wombat's screen |
| `msleep(milliseconds);` | Pauses the program for that many milliseconds |
| `motor(port, power);` | Runs the motor in that [[PORT\|port]] at that power level |
| `ao();` | "All off" --- stops every motor at once |
| `enable_servos();` | Turns the servo ports on |
| `set_servo_position(port, position);` | Moves the servo in that port to a position |
| `disable_servos();` | Turns the servo ports off |
| `digital(port);` | Reads a [[DIGITAL\|digital]] sensor |
| `analog(port);` | Reads an [[ANALOG\|analog]] sensor |

### Back to your guesses

{{< ask key="p2_guess_review" label="Reviewing your guesses" >}}Look at what you wrote in Try It. Which guess were you closest on, and which one were you furthest off?{{< /ask >}}

## Do It --- Make It Yours

Connect to your Wombat the same way you did in Project 1. Open your `First Project`.

### Step 1 --- Add a comment and prove it does nothing

Click at the end of the `printf` line and type:

```c
// Prints "Hello World!" to the screen
printf("Hello World!\n");
```

Compile. Then run it on the Wombat: from the Home Screen tap **Programs**, pick your program, press **Run**.

{{< short-answer key="p3_comment_appeared" label="Did the comment appear" prompt="Did your comment appear on the Wombat's screen?" >}}

{{< ask key="p3_comment_why" label="Why the comment did not appear" >}}Why not?{{< /ask >}}

### Step 2 --- Sign your work

Add three comment lines at the very top, above the `#include`:

```c
// Author: your name here
// Program purpose: prints text to the screen
// Created: today's date
```

This is called [[ATTRIBUTION|attribution]]. From now on, every program you write gets these three lines.

{{< callout title="Borrowing Code" variant="navy" >}}
If you use part of a teammate's code, you say so in a comment --- where it came from, and where the borrowed part ends. That holds even when you change their idea a little to fit your robot.
{{< /callout >}}

{{< ask key="p3_attribution_where" label="Where else attribution matters" >}}Where else in school are you expected to give credit for someone else's work?{{< /ask >}}

### Step 3 --- Start a new project and say hello yourself

Go to **Project Explorer**, pick your folder, click **+ Add Project**, and name it `Printf Statements`.

Write a program that prints `Hello World!` and then prints your own name on the next line.

Plan it as pseudocode first:

```c
// 1. Display "Hello World!" on the screen
// 2. Display my name on the screen
```

{{< callout title="What does `\\n` do?" variant="gold" >}}
It is like pressing Enter at the end of the line. Leave it out and your next `printf` starts on the same line, jammed against the last one.
{{< /callout >}}

Compile until you see **Compilation Succeeded**, then run it.

{{< checklist >}}
- key: p3_step_printf
  label: "Both lines showed up on the Wombat's screen"
{{< /checklist >}}
{{< ask key="p3_same_instant" label="Why both lines appeared at once" >}}The two lines appeared at what looked like the same instant. Why?{{< /ask >}}

### Step 4 --- Slow it down

`msleep()` pauses the program. The number inside is milliseconds --- thousandths of a second.

```c
// Pause for 1 second
msleep(1000);
```

Fill this in before you write any code:

{{< gridtable >}}
columns:
- head: "You want to wait..."
- head: Write
  aria: "Milliseconds for 2 seconds"
rows:
  - cells:
      - text: "2 seconds"
      - key: p3_ms_2sec
        aria: "Milliseconds for 2 seconds"
  - cells:
      - text: "3 seconds"
      - key: p3_ms_3sec
        aria: "Milliseconds for 3 seconds"
  - cells:
      - text: "4 seconds"
      - key: p3_ms_4sec
        aria: "Milliseconds for 4 seconds"
  - cells:
      - text: "Half a second"
      - key: p3_ms_half
        aria: "Milliseconds for half a second"
{{< /gridtable >}}
Now put a two-second pause between your two `printf` lines. Compile and run.

{{< checklist >}}
- key: p3_step_msleep
  label: "My name appeared two seconds after Hello World"
{{< /checklist >}}

### Step 5 --- Turn your pseudocode into real comments

Good programmers leave the plan in the finished program. Add a comment to the end of each line describing what it does, so your program reads like this:

```c
#include <kipr/wombat.h>

int main ()
{
	// Print "Hello World"
	printf("Hello World!\n");
	// Pause for 2 seconds
	msleep(2000);
	// Print my name
	printf("Hello Sam!\n");
	return 0;
}
```

### Step 6 --- Break it on purpose

Now the important part. You are going to make five mistakes deliberately, one at a time, so that when you make them by accident you already know what they look like.

**For each one:** break it → compile → write down what the error said → fix it → compile again.

{{< safety title="⚠ How to Read an Error Message" >}}
- **Fix the top error first.** One mistake often produces a pile of errors. Fixing the first may clear all of them.
- **The line number is a hint, not an answer.** If it says line 6, the real mistake is often on line 5 --- or earlier, if there are blank lines.
- **Ignore the second number.** `5:28` means line 5, column 28. You cannot see columns. Ignore the 28.
- **Change one thing, then recompile.** Do not fix four things at once.
{{< /safety >}}

{{< gridtable >}}
columns:
- head: "Break this"
- head: "What the error message said"
  aria: "Missing semicolon error"
rows:
  - cells:
      - text: "Delete a semicolon"
      - key: p3_err_semicolon
        aria: "Missing semicolon error"
  - cells:
      - text: "Misspell `msleep` as `mlseep`"
      - key: p3_err_misspell
        aria: "Misspelled function error"
  - cells:
      - text: "Write `msleep(2,000);`"
      - key: p3_err_comma
        aria: "Comma in argument error"
  - cells:
      - text: "Delete the closing `}`"
      - key: p3_err_brace
        aria: "Missing brace error"
  - cells:
      - text: "Change `return 0;` to `return O;`"
      - key: p3_err_oh_zero
        aria: "Letter O instead of zero error"
{{< /gridtable >}}
{{< callout title="Two Messages Worth Recognizing" >}}
**"implicit declaration of function"** almost always means you spelled a command wrong.

**"too many [[ARGUMENT|arguments]] to function"** means you gave a command more information than it wanted. `msleep` takes one number. Writing `2,000` looks like two things to the compiler: `2` and `000`. Never put commas in numbers in code.
{{< /callout >}}

{{< checklist >}}
- key: p3_step_all_fixed
  label: "All five bugs broken, read, and fixed --- program compiles cleanly"
{{< /checklist >}}
{{< ask key="p3_hardest_bug" label="Hardest bug to find" >}}Which of the five bugs would have been hardest to find if you had made it by accident? Why that one?{{< /ask >}}

{{< ask key="p3_debugging_reflection" label="Reflection on debugging" >}}Professional programmers spend most of their working time [[DEBUGGING|debugging]]. Does that surprise you? What does it tell you about what a bug actually means?{{< /ask >}}

### Next

You can now make the robot say things and wait. In **Project 3 --- Motors and Ports**, it stops talking and starts moving.

KIPR · Botball Explorer --- Discovery Projects · © KISS Institute for Practical Robotics 1997--2026
