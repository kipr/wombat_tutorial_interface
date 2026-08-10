---
title: "Coding Project 1 — Wake Up Your Wombat"
short_title: "Coding Project 1"
linkTitle: "Wake Up Your Wombat"
description: "Power, battery care, connecting by Wi-Fi or Ethernet, creating your folder and project, and running your first program."
weight: 1
nav: discovery
mission_id: discovery_coding_01
mission_title: "Coding Project 1 — Wake Up Your Wombat"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 1
strand: coding
phase: "Phase 1 · Get Connected"
phase_order: 1
time: "One class period"
eyebrow: "Discovery · Coding Project 1"
heading: "Wake Up Your Wombat"
subheading: "Get your robot's brain powered on, connected, and running its first program."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Wake Up Your Wombat"
mission_label: "No field mission"
no_mission: true
meta:
  - term: Project
    definition: "Coding Project 1"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Get Connected"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Powering on the Wombat, connecting your computer to it, and running a program that is already written for you."
  - term: "Before You Start"
    definition: "Nothing. This is the first project."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Wombat [[CONTROLLER|controller]]"
      - key: need_2
        label: Battery
      - key: need_3
        label: Charger
      - key: need_4
        label: "Your computer or Chromebook"
      - key: need_5
        label: "This project sheet"
---

## Try It — Meet the Machine

Before you turn anything on, look closely at your [[CONTROLLER|controller]]. It is a small computer, and it is about to become the brain of your robot.

Find each part below. Check the box when you have found it.

{{< checklist >}}
- key: p1_find_switch
  label: "The **power switch** — on the side, right next to the battery cable"
- key: p1_find_battery
  label: "The **yellow battery connectors** — one on the battery, one on the Wombat"
- key: p1_find_screen
  label: "The **touchscreen** — this is where the Wombat shows you things"
- key: p1_find_usb
  label: "The **USB [[PORT|ports]]** — on the side"
- key: p1_find_motor
  label: "The **motor ports** — you will use these later"
- key: p1_find_leds
  label: "The **red power light** and the **yellow light** next to it"
{{< /checklist >}}
{{% safety title="⚠ You Are In Charge of This Battery" %}}
The battery can be ruined permanently if it is treated badly. These rules are not suggestions.

- Use **only** the charger that came with your controller.
- Never leave a battery charging unattended.
- Charge in a cool, open space — away from anything that can burn.
- When you are finished for the day: **turn the Wombat off, then unplug the battery.**

If you leave the battery plugged in and the Wombat switched on, the battery will drain so far that it can never be charged again.
{{% /safety %}}

{{< ask key="p1_battery_why" label="Why leaving the battery plugged in is bad" >}}Why do you think leaving the battery plugged in overnight would be worse than leaving a phone plugged in overnight?{{< /ask >}}

## Learn It — How You Talk to a Robot

You will not write your programs on the Wombat itself. You will write them on your own computer, in a web browser such as Chrome, Edge, or Safari — and then send them over to the Wombat.

For that to work, your computer and the Wombat have to be on the same network. So the Wombat makes its own.

{{% callout title="The Big Idea" variant="navy" %}}
Your Wombat creates its own small Wi-Fi network, like a tiny hotspot. Your computer joins that network. Then your browser can reach the Wombat's programming tools.
{{% /callout %}}

### Two numbers you will need

Every device on a network has an [[IP ADDRESS|IP address]]. Think of it as a building address — it tells your browser *which machine* to talk to.

But a single machine can run many different services at once. So you also need a [[PORT NUMBER|port number]] — think of it as *which door to knock on*. For the Wombat's programming tools, that door is always `8888`.

You put them together with a colon between them, like this:

```text
192.168.125.1:8888
   ↑              ↑
which machine   which door
```

The Wombat makes its own network, and on that network its address is usually the same on every robot — it is the **port** that never changes at all. Check yours anyway and write it down; if your Wombat is joined to a school network instead, the address will be different.
{.muted}

### What you will see

Once you get there, you will be looking at the [[IDE|IDE]] — the place where you write code, check it, and send it to the robot.

{{< ask key="p2_ip_vs_port" label="Difference between IP address and port number" >}}In your own words: what is the difference between an IP address and a port number?{{< /ask >}}

## Do It — Get Connected

Work through these in order. Check each one off as you finish it.

### Step 1 — Power on

{{< figrow >}}
- src: kit/batterycharger.jpg
  alt: "Use only the power supply that came with your controller."
{{< /figrow >}}
Flip the black power switch on the side of the Wombat. Wait for the home screen to appear.

{{< checklist >}}
- key: p3_step_power
  label: "Home screen is showing"
{{< /checklist >}}
### Step 2 — Find your network information

On the Wombat's screen, tap **About**. Look for the rows labeled **SSID**, **Password**, and **Wi-Fi**. Write them on your card below — you will need them every time.

{{% callout title="If the Wi-Fi line is blank" variant="gold" %}}
This is a known problem on older Wombat software. The real fix is to update the Wombat (instructions are at kipr.org). The quick fix:

- Set **Event Mode** to *Enabled*.
- Go back to the Home Screen. Wait at least 5 seconds. Return to **About**.
- Set **Event Mode** back to *Disabled*.
- Go Home again, wait 5 seconds, return to **About**. Numbers should now appear.
{{% /callout %}}

### Step 3 — Write down your Wombat's information

Record these values:

- Wi-Fi IP address

{{< rec >}}
- key: p3_ssid
  label: "Wombat SSID"
- key: p3_password
  label: "Wombat password"
- key: p3_wifi_ip
  label: "Wombat Wi-Fi IP address"
- key: p3_full_url
  label: "Full address with port"
  placeholder: "the IP, then :8888"
{{< /rec >}}
Keep this card. Every project after this one starts by connecting the same way.
{.muted}

### Step 4 — Join the Wombat's network

Open the Wi-Fi settings on your computer. Find the network name from your card, select it, and enter the password.

{{% callout title="This warning is normal" %}}
You will probably see something like *"no internet connection"* or *"connected with limited access."* Nothing is wrong. The Wombat is not the internet — it is just a robot. Keep going.
{{% /callout %}}

{{< checklist >}}
- key: p3_step_joined
  label: "My computer is connected to the Wombat's network"
{{< /checklist >}}
### Step 5 — Open the programming tools

{{< figrow >}}
- src: ide/software-suite.jpg
  alt: "The KIPR Software Suite. Click KISS IDE."
{{< /figrow >}}
Open a web browser. In the address bar, type the full web address from your card — the IP address, a colon, then `8888`. Match the punctuation exactly.

You should land on the KIPR Software Suite. Click **KISS IDE**.

{{< checklist >}}
- key: p3_step_ide
  label: "I can see the KISS IDE"
{{< /checklist >}}
### Step 6 — Make your own folder

{{< figrow >}}
- src: ide/new-folder-a.jpg
  alt: "Project Explorer — click + to add a user."
- src: ide/new-folder-b.jpg
  alt: "Type your name, then Create."
{{< /figrow >}}
In **Project Explorer**, click the **+** to add a user. Type your name. Click **Create**.

{{% safety title="⚠ Naming rules — these matter" %}}
No periods. No apostrophes. No exclamation points. No emojis. No symbols of any kind. Letters, numbers, and plain spaces only.

**Good:** `sarah folder` · `Botguy folder` · `First Project`

             **Bad:** `m.j.c.` · `my amazing project!` · `Mrs Davis's project` · `:)`

A bad name will not fail right away. It will break something later, and it will be hard to find.
{{% /safety %}}

Do not use the default user folder. Make your own.
{.muted}

### Step 7 — Add a project

{{< figrow >}}
- src: ide/add-project.jpg
  alt: "Pick your folder, then + Add Project."
- src: ide/name-project.jpg
  alt: "Give the project a descriptive name."
{{< /figrow >}}
Go back to **Project Explorer** and pick your folder from the drop down. Click **+ Add Project**.

Name it `First Project`. Leave the language set to **C** and the source file name as `main.c`. Click **Create**.

{{< rec >}}
- key: p3_user_folder
  label: "User folder name"
- key: p3_project_name
  label: "Project name"
{{< /rec >}}
You will need both of these in a moment, when you go to the robot to run your program.
{.muted}

### Step 8 — Look around the editor

{{< figrow >}}
- src: ide/code-template.png
  alt: "This is how every new project looks when you open it."
{{< /figrow >}}
Find each button before you use it.

| Button | What it does |
| --- | --- |
| **Menu** | Takes you back to the main menu of the Software Suite. |
| **Save main.c** | Saves your code. A successful compile also saves it for you. |
| **File Menu** | Delete or download `main.c` to your computer. One way to back up your work. |
| **Project Menu** | Delete or download the whole project. |
| **Undo / Redo** | Undo your last keystrokes, or put them back. |
| **Indent** | Cleans up the spacing so your code is readable. Use this often. |
| **Compile** | Turns your code into something the robot can actually run. |
| **Run** | Runs the program that was compiled. |

### Step 9 — Compile it

{{< figrow >}}
- src: ide/compile-succeeded.png
  alt: "Compilation succeeded — your project is now on the Wombat."
  caption: "\"Compilation succeeded\" — your project is now on the Wombat."
{{< /figrow >}}
There is already code in the editor. You did not write it and you do not need to understand it yet — that is Project 2. Press **Compile**.

[[COMPILE|Compile]] translates what you see into instructions the robot's processor can follow. If it works, your code is saved automatically. If it doesn't, you get a message telling you where the problem is.

{{< checklist >}}
- key: p3_step_compiled
  label: "It compiled with no errors"
{{< /checklist >}}
### Step 10 — Run it — on the robot

{{< figrow >}}
- src: botui/home_page.png
  alt: "The Wombat's Home page — where you find Programs."
- src: botui/wombat-screen-lan.jpg
  alt: "The Wombat's About page."
{{< /figrow >}}
Pressing **Run** in the editor sends your program across and runs it, but the output comes back to
        *your computer*, in the console at the bottom of the browser. The Wombat's own screen stays where it was.

To watch it run **on the robot**, go to the Wombat itself:

| On the robot | Do this |
| --- | --- |
| 1 | From the **Home Screen**, tap **Programs**. |
| 2 | Find your user folder, then find your project in the list. |
| 3 | **Highlight the program in the list** — tap it once so it is selected. |
| 4 | Press **Run**. Now watch the Wombat's screen. |

{{% callout title="Two Different Run Buttons" variant="navy" %}}
The one in the editor is for checking your code quickly from your computer. The one on the Wombat is how the
          robot actually runs on its own — which is what it will be doing in a match, with nobody touching it.
{{% /callout %}}

{{< short-answer key="p3_run_saw" label="What appeared on the Wombat screen" prompt="What appeared on the Wombat's screen?" >}}

{{< checklist >}}
- key: p3_step_run_ide
  label: "I ran it from the editor and saw the output on my computer"
- key: p3_step_run_bot
  label: "I ran it from the robot's Programs list and saw it on the Wombat's screen"
{{< /checklist >}}
### Step 11 — Shut down properly

{{< figrow >}}
- src: botui/home_page.png
  alt: "Select Shutdown."
- src: botui/shut-down-confirm.png
  alt: "Confirm when it asks."
{{< /figrow >}}
{{< figrow >}}
- src: kit/wambatside-batterycable.jpg
  alt: "Wait for it to finish before the switch."
{{< /figrow >}}
Do not just flip the switch. Do it in this order:

- On the Home Screen, press **Shutdown**.
- Press **Yes** to confirm.
- Wait for it to finish, then flip the power switch off.
- Unplug the battery — **hold the yellow connectors, never the wires.**

{{< checklist >}}
- key: p3_step_shutdown
  label: "Shut down in the correct order"
{{< /checklist >}}
{{% callout title="Back Up Your Work" variant="navy" %}}
Code that only exists on the robot can disappear. Three ways to keep a copy:

- Copy the code out of the editor and paste it into a document.
- Download it from the **File Menu** or **Project Menu**.
- Plug a USB drive into the Wombat, then **Settings → Backup → Backup**.

To bring code back from a USB drive, use **Settings → Backup → Restore**.
{{% /callout %}}

{{% callout title="Lost the Home Screen?" variant="gold" %}}
If the Wombat's screen ends up showing a desktop instead of the usual home screen, tap the **Botguy icon** in the top row to get back.
{{% /callout %}}

## Score It — Checkpoint

There is no field mission yet. Your score for this project is whether you can do the whole thing again without the sheet.

### Can you do it again?

{{< checklist >}}
- key: p4_can_power
  label: "I can power the Wombat on and off correctly, in the right order"
- key: p4_can_find_ip
  label: "I can find my Wombat's IP address on the About screen"
- key: p4_can_connect
  label: "I can connect my computer to the Wombat's network"
- key: p4_can_open_ide
  label: "I can reach the KISS IDE in my browser"
- key: p4_can_project
  label: "I can create a user folder and a project with a legal name"
- key: p4_can_compile_run
  label: "I can compile a program and run it on the robot"
- key: p4_can_backup
  label: "I know at least one way to back up my code"
{{< /checklist >}}
### Trouble log

Something almost certainly went wrong. That is normal and it is worth writing down — you will hit the same thing again.
{.muted}

{{< gridtable >}}
columns:
- head: "What went wrong"
  aria: "Problem 1"
- head: "How I fixed it"
  aria: "Fix 1"
rows:
  - cells:
      - key: p4_trouble_1a
        aria: "Problem 1"
      - key: p4_trouble_1b
        aria: "Fix 1"
  - cells:
      - key: p4_trouble_2a
        aria: "Problem 2"
      - key: p4_trouble_2b
        aria: "Fix 2"
  - cells:
      - key: p4_trouble_3a
        aria: "Problem 3"
      - key: p4_trouble_3b
        aria: "Fix 3"
{{< /gridtable >}}
### Think about it

{{< ask key="p4_who_decided" label="Who decided what the robot did" >}}You pressed Run and the robot did something. Who decided what it would do — you, or the person who wrote the code that was already there?{{< /ask >}}

{{< ask key="p4_advice" label="Advice for a teammate" >}}Name one thing on this sheet you would tell a teammate to be careful about, and why.{{< /ask >}}

### Next

In **Project 2 — Your First Program**, you will open that same code and find out what every line of it actually means. Then you will change it and make it yours.

KIPR · Botball Explorer — Discovery Projects · © KISS Institute for Practical Robotics 1997–2026
