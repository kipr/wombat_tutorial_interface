---
title: "Coding Project 1 — Wake Up Your Robot"
short_title: "Coding Project 1"
linkTitle: "Wake Up Your Robot"
description: "The brick, charging, Bluetooth, naming your brick, your Robot Card, and running your first program from the EV3 Classroom app."
weight: 1
nav: "discovery"
mission_id: "discovery_ev3_coding_01"
mission_title: "Discovery Project 1 (EV3) — Wake Up Your Robot"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 1
strand: "coding"
platform: "ev3"
phase: "Phase 1 · Get Connected"
phase_order: 1
time: "One class period"
eyebrow: "Discovery · EV3 Coding Project 1"
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
    definition: "Powering on the [[BRICK|brick]], connecting the EV3 Classroom app to it, and running a program that is already planned for you."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "EV3 Brick"
      - key: need_2
        label: "Battery charger (or spare AA batteries — ask your teacher which your brick uses)"
      - key: need_3
        label: "Tablet, Chromebook, or computer with the EV3 Classroom app"
      - key: need_4
        label: "This project sheet"
  - term: "Before You Start"
    definition: "Nothing. This is the first project."
---
## Try It --- Meet the Machine

Before you turn anything on, look closely at your [[BRICK|brick]]. It is a small computer, and it is about to become the brain of your robot.

Find each part below. Check the box when you have found it.

{{< checklist >}}
- key: p1_find_center
  label: "The **center button** --- the dark one in the middle of the button cluster, ringed by four gray arrow buttons"
- key: p1_find_back
  label: "The **back button** --- the small one just above and to the left of the button cluster. It steps you backward through menus, and it is also how the brick shuts down"
- key: p1_find_ports
  label: "The **four lettered motor ports** --- A, B, C, D across the top edge --- and the **four numbered sensor ports** --- 1, 2, 3, 4 across the bottom edge. Motors plug in up top; sensors plug in down below"
- key: p1_find_screen
  label: "The **screen** --- the gray display on the face. It shows menus, your program names, and anything your programs write"
- key: p1_find_usb
  label: "The **PC port** --- the small USB socket on the end nearest the screen, where a cable to the computer goes. (If your brick has a rechargeable battery, its charger plugs into the battery pack itself --- not this port)"
- key: p1_find_speaker
  label: "The **speaker holes** --- the robot can make sounds too"
{{< /checklist >}}

{{< safety title="⚠ You Are In Charge of This Battery" >}}
The battery lives inside the brick, and it is your team's job to keep it ready. These rules are not suggestions.

- Charge only with the charger your teacher gave you, plugged into the battery pack --- nothing else. (AA-battery bricks do not charge at all: tell your teacher when the brick starts complaining about power.)
- Never leave a battery charging unattended overnight.
- Charge in a cool, open space --- never buried under a pile of LEGO.
- **Put the robot away charged.** The next class starts where you left it.
- If a brick will not wake up, plug it in for ten minutes before you decide it is broken.
{{< /safety >}}

{{< ask key="p1_charged_fair" label="Why put it away charged" >}}Why is "put it away charged" a rule about being fair to the next team as much as it is about the battery?{{< /ask >}}

## Learn It --- How You Talk to a Robot

You will not build your programs on the brick itself. You will build them in the **EV3 Classroom app** on your tablet or Chromebook --- and then send them over to the brick.

The program travels either down a **USB cable** or across a short-range radio link called [[BLUETOOTH|Bluetooth]] --- no internet either way, just your device and your robot talking directly to each other. Many EV3 classrooms use the cable, because it never picks the wrong robot. Your teacher will tell you which way your room connects.

{{< callout title="The Big Idea" variant="gold" >}}
The program **runs on the brick**, not on your tablet. The app is just the workbench. Once your program is across, the robot can run it with no tablet anywhere near it --- and that is exactly what happens in a match.
{{< /callout >}}

### One robot among many

Every brick has a **name**, shown on the top line of its screen. Out of the box it is just "EV3," so your teacher has probably renamed it or put it on a sticker. Here is why that matters: your classroom has a whole shelf of bricks that look exactly alike, and Bluetooth does not care about that --- the app lists *every* brick it can hear.

Pick the wrong name from that list and your program lands on someone else's robot. Their robot starts doing your program, your robot does nothing, and both teams spend ten minutes confused.

{{< ask key="p1_why_name" label="Why hubs need names" >}}In your own words: why does your brick need a name that is different from every other brick in the room?{{< /ask >}}

### What you will see

Inside the app you will work in the **coding canvas** --- a big open space where blocks snap together into programs, with a colorful shelf of blocks down the side. You will learn what every part of it does in this project and the next.

## Do It --- Get Connected

Work through these in order. Check each one off as you finish it.

### Step 1 --- Power on

Press the **center button** once. The red status light comes on, the brick clicks and hums for a moment while it starts up, and then the screen shows its menu and the light around the buttons turns green. Starting up takes about half a minute --- that is normal.

{{< checklist >}}
- key: p1_step_power
  label: "The brick is on, the light around the buttons is green, and the screen shows the menu"
{{< /checklist >}}

### Step 2 --- Find your brick's name

Your teacher may have put the name on a sticker, or assigned your team a brick. Find the name and write it on your card below --- you will need it every single time.

### My Robot Card

{{< gridtable >}}
columns:
- head: ""
- head: ""
rows:
  - cells:
      - text: "Brick name"
      - key: p1_card_hubname
        aria: "Brick name"
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

Open the EV3 Classroom app. Choose **New Project** --- in EV3 Classroom, every project is a word-block project. Name it `First Project` --- and put your names in the project name too.

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

**Cable room?** Plug the USB cable into the brick's PC port and the computer, and the app connects to that brick --- the one on your table, guaranteed. **[[BLUETOOTH|Bluetooth]] room?** On the brick, arrow over to the Settings screen (the wrench), open **Bluetooth**, and make sure it is checked on. Then, in the app, open the connect screen, look at the list, find **your brick's name from your card**, and pick it.

{{< callout title="This screen is normal" >}}
The app may say your brick needs an **update** before it can connect. Nothing is wrong --- get your teacher. Updates are routine and take a few minutes.
{{< /callout >}}

{{< checklist >}}
- key: p1_step_connect
  label: "The app shows my brick connected, with a little battery meter for it"
{{< /checklist >}}

### Step 5 --- Look around the canvas

Find each of these before you use any of them.

| Part | What it does |
| --- | --- |
| **Block shelf** | The colored categories down the side. Every command you will ever give this robot lives on this shelf. |
| **Canvas** | The open space where blocks snap together into a program. |
| **Download and Run button** | Sends your program across to the brick and starts it. |
| **Stop button** | Stops whatever the brick is doing. Know where this is *before* you need it. |
| **Connect icon** | Shows which brick you are talking to, and its battery level. |
| **Project name** | At the top. Tap it to rename the project. |

### Step 6 --- Run a program somebody else planned

Build this exactly as shown --- drag the yellow block out first, then snap the display block underneath. You did not plan this program and you do not need to understand it yet. That is Project 2.

{{< wordblocks aria="Word-block stack: when program starts, write Hi! at line 1" >}}
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
        - text: " at line "
        - slot:
            kind: value
            text: "1"
{{< /wordblocks >}}

Press **Download and Run**. Watch the brick --- not the tablet.

{{< checklist >}}
- key: p1_step_run_app
  label: "The word appeared on the brick's screen"
{{< /checklist >}}

{{< ask key="p1_how_travel" label="How the program traveled" >}}You pressed a button on the tablet, but the letters appeared on the robot. How did the program get from one to the other?{{< /ask >}}

### Step 7 --- Run it on the robot --- no tablet

When you pressed Download and Run, the app also saved a copy of your program [[BRICK_MEMORY|on the brick itself]], filed under your project's name. The brick keeps it there even with the app closed. Prove it:

| On the robot | Do this |
| --- | --- |
| 1 | Put the tablet down. Step away from it. |
| 2 | On the brick, use the **arrow buttons** to reach the **file screen** (the tab that lists saved things). Find your project's name in the list and press the center button to open it. Your program is inside. |
| 3 | With your program picked out, press the **center button** to run it. Watch. |

{{< callout title="Two Different Run Buttons" variant="navy" >}}
The one in the app is for checking your work quickly while you build. The one on the brick is how the robot runs **on its own** --- which is what it will be doing in a match, with nobody touching it.
{{< /callout >}}

{{< checklist >}}
- key: p1_step_run_hub
  label: "I ran the program from the brick itself, with no tablet in my hands"
{{< /checklist >}}

### Step 8 --- Shut down properly

Do it in this order:

1. Press the **back button** until a shutdown box appears on the screen, pick the **check mark**, and press the center button. The screen and lights go out.
2. Check the battery. Low? Plug it in to charge.
3. Wrap the cable. Put the robot away the way you would want to find it.

{{< checklist >}}
- key: p1_step_shutdown
  label: "Shut down in the correct order, battery checked"
{{< /checklist >}}

{{< callout title="Where Your Work Lives" >}}
Your project is saved **on the device you used** --- not on the brick, and not in the sky. Use a different tablet tomorrow and your project will not be on it. That is why the device number is on your Robot Card: same team, same device, every time.
{{< /callout >}}

{{< callout title="Brick Acting Frozen?" >}}
If the brick stops responding, hold the **back button and the center button down together** until the screen goes dark, then let go and power it on again. That fixes almost everything.
{{< /callout >}}

## Score It --- Checkpoint

There is no field mission yet. Your score for this project is whether you can do the whole thing again without the sheet.

### Can you do it again?

{{< checklist >}}
- key: p1_can_power
  label: "I can power the brick on and off correctly, in the right order"
- key: p1_can_name
  label: "I know my brick's name and where to find it"
- key: p1_can_connect
  label: "I can connect the app to *my* brick --- not someone else's"
- key: p1_can_project
  label: "I can create a project with a name my team can find again"
- key: p1_can_run_app
  label: "I can run a program from the app"
- key: p1_can_run_hub
  label: "I can run a program from the brick's own file screen, with no tablet"
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
