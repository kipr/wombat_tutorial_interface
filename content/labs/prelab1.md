---
title: "PreLab 1 — The Toolchain"
short_title: "PreLab 1"
hub_title: "The Toolchain"
hub_unit: 0
description: "Boot the Wombat, connect to it, and run a program you typed yourself. Lab 1.1 assumes all of this already works."
weight: 20
nav: labs
track: c
mission_id: prelab1_labs
eyebrow: "PreLab 1 · Before Unit 1"
heading: "The Toolchain"
subheading: "PreLab · C track — completion checklist"
credit: "KIPR · Botball Explorer — CS1 + AI Literacy · © KISS Institute for Practical Robotics 1997–2026"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Purpose"
    definition: "Boot the Wombat, connect to it, and run a C program you typed yourself."
  - term: "Where This Sits"
    definition: "**After PreLab 0, before Lab 1.1.** Lab 1.1 assumes all of this already works."
  - term: "How It Is Assessed"
    definition: "Completion only. Tick boxes and record your robot's address — there is nothing to write up."
  - term: "What You Need"
    definition: "Your robot · a charged battery · a computer on the same network · about one session"
---

## PreLab 1 --- Get the Robot Listening to You

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
  alt: "The KIPR Software Suite --- click KISS IDE."
- src: ide/new-folder-a.jpg
  alt: "Project Explorer --- add a user folder."
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

The IDE turns your C into numbers the Wombat can follow. That step is called compiling, and it is why a single missing semicolon stops everything.

{{< checklist >}}
- key: t_hw
  label: "I can say what [[HARDWARE|hardware]] is on my robot and point at three pieces."
- key: t_sw
  label: "I can say what [[SOFTWARE|software]] is and where mine is stored."
- key: t_cc
  label: "I know what pressing **Compile** actually does, and that it cannot guess what I meant."
{{< /checklist >}}

{{< endplsec >}}

{{< plsec n="Part 3" title="Write, compile, run" >}}

{{< figrow >}}
- src: ide/code-template.png
  alt: "Every new project starts like this."
- src: ide/compile-succeeded.png
  alt: "\"Compilation succeeded\" --- it is on the robot."
{{< /figrow >}}

Make a new project called **hello_c** and type this in. Do not paste it --- type it.

{{< code >}}

#include <kipr/wombat.h>

int main()
{
	printf("ready\n");
	return 0;
}
{{< /code >}}

### Anatomy of This Program

For now, treat the first and last lines as **boilerplate** --- standard pieces you copy into every program:

- `#include <kipr/wombat.h>` makes the Wombat's robot commands available.
- `int main()` and its curly braces mark the part of the program that runs.
- `return 0;` tells the controller the program finished normally.

The line to understand today is `printf("ready\n");`. `printf` prints a message in the IDE's output area. The text between the quotation marks is what appears, and `\n` means **start a new line** after it.

You can also leave a *placeholder* inside the message and supply its value after the quotation marks:

```c
printf("Trial: %d\n", 1);
```

Here `%d` is a placeholder for a whole number, so the output is `Trial: 1`. When a message has more than one placeholder, the values after the quotation marks fill them from left to right.

{{< checklist >}}
- key: t_typed
  label: "I typed it myself and it compiled with no errors."
- key: t_ran
  label: "I ran it on the robot and saw `ready` appear."
- key: t_semicolon
  label: "I have seen what a missing semicolon looks like as an error, on purpose."
- key: t_fixed
  label: "I made that error on purpose, read the message, and fixed it."
{{< /checklist >}}

{{< endplsec >}}

{{< plsec n="Part 4" title="Know where your work lives" >}}

{{< figrow >}}
- src: botui/shutdown_guide.png
  alt: "Shut down from the menu --- never straight off the switch."
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

{{< gate title="You are ready" >}}
**Lab 1.1 --- Computers Follow Instructions** assumes everything on this page.
Start there.
{{< /gate >}}
