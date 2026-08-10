---
title: "PreLab 1 — The Toolchain"
short_title: "Python PreLab 1"
hub_title: "The Toolchain"
hub_unit: 0
description: "Boot the Wombat, connect to it, and run a Python program you typed yourself. Lab 1.1 assumes all of this already works."
weight: 20
type: labs
nav: python
track: python
mission_id: prelab1_python_labs
eyebrow: "PreLab 1 · Before Unit 1"
heading: "The Toolchain"
subheading: "PreLab · Python track — completion checklist"
credit: "KIPR · Botball Explorer — CS1 + AI Literacy · © KISS Institute for Practical Robotics 1997–2026"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Purpose"
    definition: "Boot the Wombat, connect to it, and run a Python program you typed yourself."
  - term: "Where This Sits"
    definition: "<strong>After PreLab 0, before Lab 1.1.</strong> Lab 1.1 assumes all of this already works."
  - term: "How It Is Assessed"
    definition: "Completion only. Tick boxes and record your robot's address — there is nothing to write up."
  - term: "What You Need"
    definition: "Your robot · a charged battery · a computer on the same network · about one session"
---

## PreLab 1 — Get the Robot Listening to You

Completion only again. The point is that by the end of this page your robot has run
a program that you typed, and you have written down the numbers you will need every session after this.
{.muted}

{{< plsec n="Part 1" title="Power up and connect" >}}

{{< figrow >}}
- src: botui/wombat-screen-lan.jpg
  alt: "The Wombat's About page."
- src: ide/chromebook-connection-guide.png
  alt: "Connect to Wombat through computer's Wi-Fi settings."
- src: ide/software-suite.jpg
  alt: "The KIPR Software Suite — click KISS IDE."
- src: ide/new-folder-a.jpg
  alt: "Project Explorer — add a user folder."
{{< /figrow >}}

{{< checklist >}}
- key: c_batt
  label: "Battery charged and connected; the Wombat boots to its home screen."
- key: c_wifi
  label: "I found the Wombat's network name and joined it from my computer."
- key: c_ip
  label: "I found the [[IP ADDRESS|IP address]] on the Wombat's screen and typed it into a browser."
- key: c_port
  label: "I added the [[PORT NUMBER|port number]] **8888** after the address, and the [[IDE|IDE]] loaded."
{{< /checklist >}}

{{< rec >}}
- key: rec_ip
  label: Our Wombat's IP address
  placeholder: "e.g. 192.168.x.x"
- key: rec_name
  label: Our Wombat's name or number
{{< /rec >}}

Write these in your notebook as well. You will type them at the start of every session.
{.muted}

{{< endplsec >}}

{{< plsec n="Part 2" title="Hardware, software, and what sits between" >}}

Python is read line by line rather than compiled ahead of time, but the same rules from C still hold — the machine cannot guess what you meant. Unlike C, indentation is part of the instruction, so incorrect indentation will cause an error.

{{< checklist >}}
- key: t_hw
  label: "I can say what [[HARDWARE|hardware]] is on my robot and point at three pieces."
- key: t_sw
  label: "I can say what [[SOFTWARE|software]] is and where mine is stored."
- key: t_cc
  label: "I know what pressing **Run** actually does, and that it cannot guess what I meant."
{{< /checklist >}}

{{< endplsec >}}

{{< plsec n="Part 3" title="Write and run" >}}

{{< figrow >}}
- src: ide/code_template_py.png
  alt: "Every new project starts like this."
- src: ide/compile-succeeded_py.png
  alt: "\"Compilation succeeded\" — it is on the robot."
{{< /figrow >}}

Make a new project called **hello** and type this in. Do not paste it — type it.

{{< code >}}
#!/usr/bin/python3
import os, sys
sys.path.append("/usr/lib")
import _kipr as k

def main():
    print("Ready?")
    print("Go!")

main()
{{< /code >}}

{{< checklist >}}
- key: t_typed
  label: "I typed it myself and it ran with no errors."
- key: t_ran
  label: "I ran it on the robot and saw `Ready?` appear on one line, then `Go!` on the next."
- key: t_fixed
  label: "I made an indentation error on purpose, read the message, and fixed it."
{{< /checklist >}}

{{< endplsec >}}

{{< plsec n="Part 4" title="Know where your work lives" >}}

{{< figrow >}}
- src: botui/shutdown_guide.png
  alt: "Shut down from the menu — never straight off the switch."
{{< /figrow >}}

{{< checklist >}}
- key: w_find
  label: "I can find my saved projects again after the Wombat is switched off and back on."
- key: w_name
  label: "Our team has agreed how projects are named, so we can find each other's work."
- key: w_backup
  label: "I know where a copy of our code is kept *off* the robot."
- key: w_pw
  label: "I know our Wombat's password is not shared outside the team."
{{< /checklist >}}

{{< endplsec >}}

{{< signoff >}}
check:
  key: done_all
  label: "My robot has run a program I typed, and my teacher has seen it work."
fields:
  - key: rec_team
    label: Team name or number
  - key: rec_date
    label: Date completed
{{< /signoff >}}

{{% gate title="You are ready" %}}
**Lab 1.1 — Computers Follow Instructions** assumes everything on this page.
Start there.
{{% /gate %}}
