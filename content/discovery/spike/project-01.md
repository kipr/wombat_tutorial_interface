---
title: "Coding Project 1 — Wake Up Your Robot"
short_title: "Coding Project 1"
linkTitle: "Wake Up Your Robot"
description: "The hub, charging, Bluetooth, naming your hub, your Robot Card, and running your first program from the SPIKE App."
weight: 1
nav: "discovery"
mission_id: "discovery_spike_coding_01"
mission_title: "Discovery Project 1 (SPIKE) — Wake Up Your Robot"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 1
strand: "coding"
platform: "spike"
phase: "Phase 1 · Get Connected"
phase_order: 1
time: "One class period"
eyebrow: "Discovery · SPIKE Coding Project 1"
heading: "Wake Up Your Robot"
subheading: "Get your robot's brain powered on, connected, and running its first program."
credit: "KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026"
hub_title: "Wake Up Your Robot"
mission_label: "No field mission"
no_mission: true
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Coding Project 1"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Get Connected"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Powering on the [[HUB|hub]], connecting the SPIKE App to it, and running a program that is already planned for you."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "SPIKE Prime hub"
      - key: need_2
        label: "Charging cable"
      - key: need_3
        label: "Tablet or Chromebook with the SPIKE App"
      - key: need_4
        label: "This project sheet"
  - term: "Before You Start"
    definition: "Nothing. This is the first project."
---
## Try It --- Meet the Machine

Before you turn anything on, look closely at your [[HUB|hub]]. It is a small computer, and it is about to become the brain of your robot.

Find each part below. Check the box when you have found it.

{{< checklist >}}
- key: p1_find_center
  label: "The **center button** --- the big one in the middle of the face"
- key: p1_find_bt
  label: "The **[[BLUETOOTH|Bluetooth]] button** --- on the side, with its own tiny light"
- key: p1_find_ports
  label: "The **six lettered ports** --- A, C, and E down one side; B, D, and F down the other"
- key: p1_find_matrix
  label: "The **light grid** --- a 5×5 square of tiny lights on the face"
- key: p1_find_usb
  label: "The **USB port** --- on the end, where the charging cable goes"
- key: p1_find_speaker
  label: "The **speaker holes** --- the robot can make sounds too"
{{< /checklist >}}

{{< safety title="⚠ You Are In Charge of This Battery" >}}
The battery lives inside the hub, and it is your team's job to keep it ready. These rules are not suggestions.

- Charge with the cable and charger your teacher gave you --- nothing else.
- Never leave a battery charging unattended overnight.
- Charge in a cool, open space --- never buried under a pile of LEGO.
- **Put the robot away charged.** The next class starts where you left it.
- If a hub will not wake up, plug it in for ten minutes before you decide it is broken.
{{< /safety >}}

{{< ask key="p1_charged_fair" label="Why put it away charged" >}}Why is "put it away charged" a rule about being fair to the next team as much as it is about the battery?{{< /ask >}}

## Learn It --- How You Talk to a Robot

You will not build your programs on the hub itself. You will build them in the **SPIKE App** on your tablet or Chromebook --- and then send them over to the hub.

The program travels across a short-range radio link called [[BLUETOOTH|Bluetooth]]. No wires, no internet --- just your device and your robot, talking directly to each other. (A USB cable works too, and your teacher may have you use one.)

{{< callout title="The Big Idea" variant="gold" >}}
The program **runs on the hub**, not on your tablet. The app is just the workbench. Once your program is across, the robot can run it with no tablet anywhere near it --- and that is exactly what happens in a match.
{{< /callout >}}

### One robot among many

Every hub has a **name**. Here is why that matters: your classroom has a whole shelf of hubs that look exactly alike, and Bluetooth does not care about that --- the app lists *every* hub it can hear.

Pick the wrong name from that list and your program lands on someone else's robot. Their robot starts doing your program, your robot does nothing, and both teams spend ten minutes confused.

{{< ask key="p1_why_name" label="Why hubs need names" >}}In your own words: why does your hub need a name that is different from every other hub in the room?{{< /ask >}}

### What you will see

Inside the app you will work in the **coding canvas** --- a big open space where blocks snap together into programs, with a colorful shelf of blocks down the side. You will learn what every part of it does in this project and the next.

## Do It --- Get Connected

Work through these in order. Check each one off as you finish it.

### Step 1 --- Power on

Press and hold the **center button** until the hub plays a sound and the light grid wakes up.

{{< checklist >}}
- key: p1_step_power
  label: "The hub is on and the light grid is showing something"
{{< /checklist >}}

### Step 2 --- Find your hub's name

Your teacher may have put the name on a sticker, or assigned your team a hub. Find the name and write it on your card below --- you will need it every single time.

### My Robot Card

{{< gridtable >}}
columns:
- head: ""
- head: ""
rows:
  - cells:
      - text: "Hub name"
      - key: p1_card_hubname
        aria: "Hub name"
  - cells:
      - text: "Tablet or Chromebook I use (number or label)"
      - key: p1_card_device
        aria: "Device used"
  - cells:
      - text: "My project name (fill in two steps from now)"
      - key: p1_card_project
        aria: "Project name"
{{< /gridtable >}}

Keep this card. Every project after this one starts by connecting the same way.
{.muted}

### Step 3 --- Make your project

Open the SPIKE App. Choose **New Project**, and pick **Word Blocks**. Name it `First Project` --- and put your names in the project name too.

{{< safety title="⚠ Naming rules --- these matter" >}}
Letters, numbers, and plain spaces. Say what the project *is* and *whose* it is.

**Good:** `First Project - Sam and Ava`  ·  `Waypoint - Team 3`

**Bad:** `Untitled 7`  ·  `project final FINAL v2!!!`  ·  `:)`

A bad name will not fail today. It will hide from you in a month, when the list has forty projects in it.
{{< /safety >}}

{{< checklist >}}
- key: p1_step_project
  label: "My project exists, with a real name, and it is on my Robot Card"
{{< /checklist >}}

### Step 4 --- Connect to your robot

Press the hub's **[[BLUETOOTH|Bluetooth]] button** --- its little light starts blinking. In the app, open the connect screen and look at the list. Find **your hub's name from your card** and pick it.

{{< callout title="This screen is normal" >}}
The app may say your hub needs an **update** before it can connect. Nothing is wrong --- get your teacher. Updates are routine and take a few minutes.
{{< /callout >}}

{{< checklist >}}
- key: p1_step_connect
  label: "The app shows my hub connected, with a little battery meter for it"
{{< /checklist >}}

### Step 5 --- Look around the canvas

Find each of these before you use any of them.

| Part | What it does |
| --- | --- |
| **Block shelf** | The colored categories down the side. Every command you will ever give this robot lives on this shelf. |
| **Canvas** | The open space where blocks snap together into a program. |
| **Run button** | Sends your program across to the hub and starts it. |
| **Stop button** | Stops whatever the hub is doing. Know where this is *before* you need it. |
| **Connect icon** | Shows which hub you are talking to, and its battery level. |
| **Project name** | At the top. Tap it to rename the project. |

### Step 6 --- Run a program somebody else planned

Build this exactly as shown --- drag the yellow block out first, then snap the purple one underneath. You did not plan this program and you do not need to understand it yet. That is Project 2.

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

Press **Run**. Watch the hub --- not the tablet.

{{< checklist >}}
- key: p1_step_run_app
  label: "Letters scrolled across the hub's light grid"
{{< /checklist >}}

{{< ask key="p1_how_travel" label="How the program traveled" >}}You pressed a button on the tablet, but the letters appeared on the robot. How did the program get from one to the other?{{< /ask >}}

### Step 7 --- Run it on the robot --- no tablet

When you pressed Run, the app also parked your program in a numbered [[SLOT|slot]] on the hub. The hub keeps it there even with the app closed. Prove it:

| On the robot | Do this |
| --- | --- |
| 1 | Put the tablet down. Step away from it. |
| 2 | Use the hub's **left and right buttons** until the light grid shows your program's slot number. |
| 3 | Press the **center button**. Watch. |

{{< callout title="Two Different Run Buttons" variant="navy" >}}
The one in the app is for checking your work quickly while you build. The one on the hub is how the robot runs **on its own** --- which is what it will be doing in a match, with nobody touching it.
{{< /callout >}}

{{< checklist >}}
- key: p1_step_run_hub
  label: "I ran the program from the hub itself, with no tablet in my hands"
{{< /checklist >}}

### Step 8 --- Shut down properly

Do it in this order:

1. Hold the **center button** until the hub plays its shutdown sound and the lights go out.
2. Check the battery. Low? Plug it in to charge.
3. Wrap the cable. Put the robot away the way you would want to find it.

{{< checklist >}}
- key: p1_step_shutdown
  label: "Shut down in the correct order, battery checked"
{{< /checklist >}}

{{< callout title="Where Your Work Lives" >}}
Your project is saved **on the device you used** --- not on the hub, and not in the sky. Use a different tablet tomorrow and your project will not be on it. That is why the device number is on your Robot Card: same team, same device, every time.
{{< /callout >}}

{{< callout title="Hub Acting Frozen?" >}}
If the hub stops responding, hold the center button down until it switches all the way off, then power it on again. That fixes almost everything.
{{< /callout >}}

## Score It --- Checkpoint

There is no field mission yet. Your score for this project is whether you can do the whole thing again without the sheet.

### Can you do it again?

{{< checklist >}}
- key: p1_can_power
  label: "I can power the hub on and off correctly, in the right order"
- key: p1_can_name
  label: "I know my hub's name and where to find it"
- key: p1_can_connect
  label: "I can connect the app to *my* hub --- not someone else's"
- key: p1_can_project
  label: "I can create a Word Blocks project with a name my team can find again"
- key: p1_can_run_app
  label: "I can run a program from the app"
- key: p1_can_run_hub
  label: "I can run a program from the hub's slot, with no tablet"
- key: p1_can_saved
  label: "I know which device my project is saved on"
{{< /checklist >}}

### Trouble log

Something almost certainly went wrong. That is normal and it is worth writing down --- you will hit the same thing again.

{{< gridtable >}}
columns:
- head: "What went wrong"
- head: "How I fixed it"
rows:
  - class: trial
    cells:
      - key: p1_trouble1_what
        aria: "Trouble 1"
      - key: p1_trouble1_fix
        aria: "Trouble 1 fix"
  - class: trial
    cells:
      - key: p1_trouble2_what
        aria: "Trouble 2"
      - key: p1_trouble2_fix
        aria: "Trouble 2 fix"
{{< /gridtable >}}

### Think about it

{{< ask key="p1_who_decided" label="Who decided" >}}You pressed Run and the robot did something. Who decided what it would do --- you, or the person who planned the blocks you copied?{{< /ask >}}

{{< ask key="p1_teammate_warning" label="Teammate warning" >}}Name one thing on this sheet you would tell a teammate to be careful about, and why.{{< /ask >}}

### Next

In **Project 2 --- Your First Program**, you will pull that little two-block program apart and find out what every block actually does. Then you will change it and make it yours.
