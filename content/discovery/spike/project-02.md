---
title: "Coding Project 2 — Your First Program"
short_title: "Coding Project 2"
linkTitle: "Your First Program"
description: "Hats, stacks, and the block shelf. Timing with wait blocks, lighting the hub display, and five deliberate bugs to find and fix."
weight: 2
nav: "discovery"
mission_id: "discovery_spike_coding_02"
mission_title: "Discovery Project 2 (SPIKE) — Your First Program"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 2
strand: "coding"
platform: "spike"
phase: "Phase 1 · Get Connected"
phase_order: 1
time: "One class period"
eyebrow: "Discovery · SPIKE Coding Project 2"
heading: "Your First Program"
subheading: "Find out what every block in that program actually does — then change it and make it yours."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Your First Program"
mission_label: "No field mission"
no_mission: true
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 2"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Get Connected"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Reading a word-block program piece by piece, writing your own messages on the light grid, controlling timing, and learning what a bug looks like — by making five of them on purpose."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "SPIKE Prime hub, charged"
      - key: need_2
        label: "Tablet or Chromebook with the SPIKE App"
      - key: need_3
        label: "Your Robot Card from Project 1"
      - key: need_4
        label: "This project sheet"
  - term: "Before You Start"
    definition: "Project 1 — you must be able to connect to your hub, open your project, and run it."
---
## Try It --- Guess Before You Know

In Project 1 you ran a program that somebody else planned. Here it is again.

{{< wordblocks aria="Word-block stack: when program starts, write Hi!" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
  - block:
      category: display
      parts:
        - text: "write "
        - slot:
            kind: value
            text: "Hi!"
{{< /wordblocks >}}

Do not look anything up. Do not ask anyone. Just guess --- you will find out in a few minutes whether you were right.

{{< ask key="p2_guess_yellow" label="Guess about the yellow block" >}}The purple block is the only one that made something happen on the light grid. What do you think the yellow one is for?{{< /ask >}}

{{< ask key="p2_guess_curve" label="Guess about the curved top" >}}The yellow block has a curved top, and nothing can snap in above it. Every other block is flat on top. Why might that be?{{< /ask >}}

{{< ask key="p2_guess_snap" label="Guess about snapping" >}}The two blocks are snapped together, not floating apart. What do you think the snapping means?{{< /ask >}}

{{< callout title="Keep Your Guesses" >}}
Do not erase them, even if they turn out to be wrong. Being wrong and then finding out why is how this works.
{{< /callout >}}

## Learn It --- The Program, Piece by Piece

Every word-block program you write has the same shape: one special block on top, and instructions snapped underneath it.

| Code / part | What it means |
| --- | --- |
| when program starts | The [[HAT BLOCK\\|hat block]]. When you press Run, the robot always starts here --- at the hat --- and works its way down. Nothing can snap above it. Every program needs one. |
| write "Hi!" | An instruction --- one action for the robot to carry out. This one scrolls text across the light grid. The white oval is the part you can change. |

### Snapping is the grammar

Blocks snapped into a column make a [[STACK|stack]]. The robot runs a stack from the top down, one block at a time. A block that is not snapped into the stack is not part of the program --- it just sits on the canvas, ignored.

And here is something quietly wonderful: **blocks that do not belong together will not snap together.** The shapes only fit the ways that make sense. In block coding, you cannot misspell a command or forget a piece of punctuation --- the snapping is the grammar, and it checks itself.

### The shelf is a library

Every block on the colored shelf is a ready-made command --- for driving motors, lighting up the grid, playing sounds, and reading [[SENSOR|sensor]]s. You do not have to build them. The colors are the filing system:

| Color | Category |
| --- | --- |
| **Yellow** | **Events** --- hat blocks. Where programs start. |
| **Purple** | **Light** --- the 5×5 grid: write text, show pictures. |
| **Orange** | **Control** --- waiting, repeating, deciding. |
| **Pink** | **Motors** and **Movement** --- you will meet these in Projects 3 and 4. |
| **Magenta** | **Sound** --- beeps and effects. |
| **Light blue** | **Sensors** --- coming in Project 10. |

### Order matters, and speed is not the point

The hub reads your stack like you read a book: top block first, then down, one at a time.

It is *fast* --- it moves from one block to the next far quicker than you can blink. Watch what that does to this program, which shows a happy face and then a heart:

{{< wordblocks aria="Word-block stack: when program starts, turn on happy face image, turn on heart image" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
  - block:
      category: display
      parts:
        - text: "turn on "
        - slot:
            kind: matrix
            pattern: "0101001010000001000101110"
  - block:
      category: display
      parts:
        - text: "turn on "
        - slot:
            kind: matrix
            pattern: "0101011111111110111000100"
{{< /wordblocks >}}

Run this and you will only ever see the heart. The happy face *was* there --- for a sliver of a second, before the next block replaced it, faster than your eye can catch.

{{< callout title="Turning Something On Is Not \"For a While\"" variant="gold" >}}
A *turn on* block means "show this, starting now, until something replaces it." It does not mean "show this for a while." If you want *a while*, you have to ask for it --- and that is the **wait** block's whole job.
{{< /callout >}}

{{< wordblocks aria="Fixed stack: when program starts, turn on happy face, wait 2 seconds, turn on heart" >}}
rows:
  - block:
      category: events
      shape: hat
      parts:
        - text: "when program starts"
  - block:
      category: display
      parts:
        - text: "turn on "
        - slot:
            kind: matrix
            pattern: "0101001010000001000101110"
  - block:
      category: control
      parts:
        - text: "wait "
        - slot:
            kind: value
            text: "2"
        - text: " seconds"
      note: "the happy face stays up this whole time"
  - block:
      category: display
      parts:
        - text: "turn on "
        - slot:
            kind: matrix
            pattern: "0101011111111110111000100"
{{< /wordblocks >}}

### The wait block counts in seconds

The number in a wait block is **seconds** --- and it does not have to be a whole number. Half a second is `0.5`. Fill this in before you build anything:

{{< gridtable >}}
columns:
- head: "You want to wait..."
- head: "Write"
rows:
  - class: trial
    cells:
      - text: "2 seconds"
      - key: p2_sec_2
        aria: "Two seconds"
  - class: trial
    cells:
      - text: "3 seconds"
      - key: p2_sec_3
        aria: "Three seconds"
  - class: trial
    cells:
      - text: "Half a second"
      - key: p2_sec_half
        aria: "Half a second"
  - class: trial
    cells:
      - text: "A second and a half"
      - key: p2_sec_1_5
        aria: "A second and a half"
{{< /gridtable >}}

### Plan before you build

Before you drag a single block, write your plan in plain language. That plan is called [[PSEUDOCODE|pseudocode]], and good programmers never skip it:

| Code / part | What it means |
| --- | --- |
| 1. Show the happy face |  |
| 2. Hold it for 2 seconds |  |
| 3. Show the heart |  |

And your work is *yours*: your names go in the project name. That is your [[ATTRIBUTION|attribution]]. If you borrow a teammate's idea, say so out loud and give them credit --- that holds even when you change their idea a little to fit your program.

{{< ask key="p2_credit_where" label="Where credit is expected" >}}Where else in school are you expected to give credit for someone else's work?{{< /ask >}}

### Back to your guesses

{{< ask key="p2_guess_review" label="Guess review" >}}Look at what you wrote in Try It. Which guess were you closest on, and which one were you furthest off?{{< /ask >}}

## Do It --- Make It Yours

Connect to your hub the same way you did in Project 1 --- check your Robot Card. Open your `First Project`.

### Step 1 --- Say hello yourself

Tap the white oval in the *write* block and change `Hi!` to your own name. Run it.

{{< checklist >}}
- key: p2_step_ownname
  label: "My name scrolled across the light grid"
{{< /checklist >}}

{{< ask key="p2_block_vs_oval" label="Block versus oval" >}}You changed the oval, not the block. What is the difference between the block and the oval inside it?{{< /ask >}}

### Step 2 --- Build the two-picture program

Make a new project called `Pictures` --- names in the project name. Build the happy-face-then-heart program **without** the wait block first, exactly as it appeared in Learn It. Run it.

{{< ask key="p2_no_wait_result" label="Result without wait" >}}What did you see on the light grid, and what did you *not* see?{{< /ask >}}

### Step 3 --- Slow it down

Now snap a **wait 2 seconds** block between the two pictures. Run it again.

{{< checklist >}}
- key: p2_step_wait
  label: "The happy face held for two seconds, then the heart appeared"
{{< /checklist >}}

{{< ask key="p2_wait_doing" label="What wait does" >}}The wait block does not show anything on the grid. What is it actually doing while the happy face is up?{{< /ask >}}

### Step 4 --- Make it three of your own

Add a third picture of your choice to the end, with a wait before it, so the program shows three pictures with time to see each one. Plan it as pseudocode on paper first: three *show* lines, two *hold* lines.

{{< checklist >}}
- key: p2_step_three
  label: "Three pictures, each on screen long enough to see"
{{< /checklist >}}

### Step 5 --- Break it on purpose

Now the important part. You are going to make five mistakes deliberately, one at a time, so that when you make them by accident you already know what they look like.

For each one: **break it → run → write down what happened → fix it → run again.**

{{< gridtable >}}
columns:
- head: "Break this"
- head: "What happened when you ran it"
rows:
  - class: trial
    cells:
      - text: "Drag a picture block *off* the stack so it floats alone on the canvas"
      - key: p2_bug1
        aria: "Bug 1 result"
  - class: trial
    cells:
      - text: "Move the wait block *above* the first picture"
      - key: p2_bug2
        aria: "Bug 2 result"
  - class: trial
    cells:
      - text: "Change wait `2` to wait `0.2`"
      - key: p2_bug3
        aria: "Bug 3 result"
  - class: trial
    cells:
      - text: "Add a *second* hat block with a sound block under it"
      - key: p2_bug4
        aria: "Bug 4 result"
  - class: trial
    cells:
      - text: "Turn the hub off, then press Run in the app"
      - key: p2_bug5
        aria: "Bug 5 result"
{{< /gridtable >}}

{{< safety title="⚠ When a Program \"Does Nothing\"" >}}
Blocks cannot be misspelled --- the snapping is the grammar. So your bugs will not look like errors. They will look like a robot *quietly doing the wrong thing*. When that happens, check three things, in this order:

- Is the hub actually connected?
- Is every block snapped into a stack under a hat?
- Is anything happening too fast to see?

Change one thing, then run again. Do not fix four things at once.
{{< /safety >}}

{{< callout title="Two Signs Worth Recognizing" variant="navy" >}}
A block with a **warning mark** is asking for something that is not there --- later, that will usually mean a motor or sensor missing from the port the block names.

The app **asking you to connect** when you press Run means your program has nowhere to go. The robot is not broken. It just is not listening.
{{< /callout >}}

{{< checklist >}}
- key: p2_step_bugs
  label: "All five bugs made, watched, and fixed --- the program runs correctly again"
{{< /checklist >}}

{{< ask key="p2_hardest_bug" label="Hardest bug" >}}Which of the five bugs would have been hardest to find if you had made it by accident? Why that one?{{< /ask >}}

## Score It --- Checkpoint

No field mission yet --- that starts in Project 4. This checkpoint is about whether you can read a program and predict it.

### Read the program

{{< ask key="p2_read_program" label="Read the program" >}}A team builds this: hat block, heart picture, wait `0.5`, happy face, wait `0.5`, heart again. Describe exactly what the light grid will do, from Run to finish.{{< /ask >}}

### Can you do it again?

{{< checklist >}}
- key: p2_can_hat
  label: "I can say what the [[HAT BLOCK|hat block]] does and why nothing snaps above it"
- key: p2_can_stack
  label: "I can explain how the robot reads a [[STACK|stack]]: top down, one block at a time"
- key: p2_can_write
  label: "I can put my own words and pictures on the light grid"
- key: p2_can_wait
  label: "I can use wait blocks --- including times like 0.5 --- to control what people see"
- key: p2_can_plan
  label: "I plan with [[PSEUDOCODE|pseudocode]] before I build"
- key: p2_can_debug
  label: "When a program does nothing, I know the three things to check first"
{{< /checklist >}}

### Think about it

{{< ask key="p2_debug_time" label="Debugging time" >}}Professional programmers spend most of their working time [[DEBUGGING|debugging]]. Does that surprise you? What does it tell you about what a bug actually means?{{< /ask >}}

### Next

You can now make the robot say things and wait. In **Project 3 --- Motors and Ports**, it stops talking and starts moving.
