---
title: "Coding Project 3 — Motors and Ports"
short_title: "Coding Project 3"
linkTitle: "Motors and Ports"
description: "Motor ports, checking direction with the wheel-spin trick, the motor() command, power from −100 to 100, and why every motor program needs msleep."
weight: 3
nav: discovery
mission_id: discovery_coding_03
mission_title: "Coding Project 3 — Motors and Ports"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 3
strand: coding
phase: "Phase 2 · Make It Move"
phase_order: 2
time: "One class period"
eyebrow: "Discovery · Coding Project 3"
heading: "Motors and Ports"
subheading: "Your robot stops talking and starts moving — with its wheels safely off the ground."
credit: "KIPR · Botball Explorer · Discovery"
hub_title: "Motors and Ports"
mission_label: "No field mission — robot on blocks"
no_mission: true
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: Project
    definition: "Coding Project 3"
  - term: Strand
    definition: Coding
  - term: Phase
    definition: "Make It Move"
  - term: Time
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Plugging in motors, checking their direction, and writing your first program that makes something turn."
  - term: "Before You Start"
    definition: "Projects 1 and 2 — you must be able to connect, write, [[COMPILE|compile]], and run a program."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Built robot"
      - key: need_2
        label: "2 motors"
      - key: need_3
        label: Wombat
      - key: need_4
        label: Battery
      - key: need_5
        label: "A block or thick book to raise the wheels"
      - key: need_6
        label: "Your computer"
---

{{< safety title="⚠ Wheels Off the Ground --- All Project" >}}
Put your robot on a block or a thick book so the wheels spin freely in the air. Every single thing you do in this project happens with the robot up on a block.

A robot that drives off a table lands on the floor. Do not find out.
{{< /safety >}}

## Try It --- Which Way Does It Go?

Think about walking across the room. Your brain does not send one signal to "your body." It sends a signal to your *left* leg and a separate signal to your *right* leg.

The Wombat works the same way. Two motors, two wheels, two separate commands.

### Find the ports

Look at the Wombat. There are four [[PORT|ports]] for motors. Two on the left, two on the right.

0

Left side

1

Left side

2

Right side

3

Right side

{{< figrow >}}
- src: kit/zoommotorports.jpg
  alt: "The Wombat controller with its two drive motors."
{{< /figrow >}}
{{< callout title="Counting Starts at Zero" variant="navy" >}}
The ports are numbered 0, 1, 2, 3 --- not 1, 2, 3, 4. Computer scientists start counting at zero, and you will see this everywhere from now on. There is no port 4.
{{< /callout >}}

### Find your motors and plug them in

A motor has a **two-prong plug** and a **double wire** --- one red, one black.

Plug one motor into **port 0** and the other into **port 3**.

{{< checklist >}}
- key: p1_found_ports
  label: "I found all four motor ports and can point to 0, 1, 2, and 3"
- key: p1_plugged_in
  label: "One motor is in port 0 and one is in port 3"
- key: p1_on_block
  label: "My robot is on a block with the wheels in the air"
{{< /checklist >}}
### The plug goes in two ways --- and it matters

There is no mark on the motor plug telling you which way is right. You can put it in either way around, and the two ways do opposite things.

A motor spins in whichever direction the electricity flows through it. Flip the plug, and the wheel spins the other way.

{{< callout title="The Wheel-Spin Trick" variant="gold" >}}
You do not need a program to find out which way a motor is wired. **Turn the wheel with your hand** and watch the little light next to that [[PORT NUMBER|port number]] on the board.
{{< /callout >}}

Green

--- that direction is forward (+)

Red

--- that direction is reverse (−)

Spin both wheels the direction you want the robot to drive *forward*. Record what you see.

{{< gridtable >}}
columns:
- head: Port
- head: "LED color when I spin it forward"
  aria: "LED color port 0"
- head: "Do I need to flip this plug?"
  aria: "Flip port 0"
rows:
  - cells:
      - text: 0
      - key: p1_led_port0
        aria: "LED color port 0"
      - key: p1_flip_port0
        aria: "Flip port 0"
  - cells:
      - text: 3
      - key: p1_led_port3
        aria: "LED color port 3"
      - key: p1_flip_port3
        aria: "Flip port 3"
{{< /gridtable >}}
{{< callout title="If One Is Green and One Is Red" >}}
Unplug the red one, turn the plug 180°, and plug it back in. Spin the wheel again. Both should now be green when the wheels turn forward.

If you skip this, your robot will not drive forward --- it will spin in a circle, because one wheel is going forward and the other backward.
{{< /callout >}}

{{< checklist >}}
- key: p1_both_green
  label: "Both LEDs are green when I spin the wheels forward"
{{< /checklist >}}
{{< ask key="p1_why_circle" label="Why the robot spins in a circle" >}}Why does a robot spin in a circle when one motor runs forward and the other runs backward?{{< /ask >}}

## Learn It --- The motor() Command

One command runs a motor. It needs two pieces of information: *which* motor, and *how hard*.

```text
motor(0, 50);
      ↑   ↑
   port  power
```

Each piece of information inside the parentheses is called an [[PARAMETER|parameter]]. `printf()` took one parameter. `motor()` takes two, port and power, separated by a comma.

An [[ARGUMENT|argument]] is the actual value you provide to a parameter when you call a function. For example, in `motor(0, 50)`, `0` and `50` are arguments.

{{< callout title="Remember This From Project 2?" variant="gold" >}}
"Too many arguments to [[FUNCTION|function]]" was one of the errors you triggered on purpose. Now you know what an argument is --- and why `msleep(2,000)` looked like two of them.
{{< /callout >}}

### Power runs from −100 to 100

| Power value | What the wheel does |
| --- | --- |
| 100 | Full speed forward |
| 50 | About half speed forward |
| 0 | Nothing |
| −50 | About half speed backward |
| −100 | Full speed backward |

A minus sign in front of the power number reverses that motor. This is how you back up, and later, how you turn.
{.muted}

{{< figrow >}}
- src: kit/wambatmotors.jpg
  alt: "Motors plugged in --- ports 0 and 3."
  caption: "A motor plugged in --- ports 0 and 3."
{{< /figrow >}}
### Which end is the front?

Your robot has two driven wheels and one small free-rolling wheel called a [[CASTER|caster]].
    Before you send it anywhere, decide which end is the front --- because that decides what
    `motor(0, 100)` actually does.

{{< callout title="Pull the Caster, Do Not Push It" variant="gold" >}}
A caster swivels. Pushed from behind it wanders, wobbles, and takes a moment to swing round every
      time you change direction. **Pulled along behind the driven wheels it tracks straight.**

So the driven wheels go at the **front**, and the caster trails.
{{< /callout >}}

Set your robot up so that the **green power LED and the ports face forward** --- the same end
    the arm will eventually go on. That end is the front, and everything you write from now on assumes it.

{{< safety title="⚠ Decide Now, Not Later" >}}
If half your team calls one end the front and the other half calls the other end the front, your turns
      will go the wrong way and nobody will be able to see why.

Agree it, and write it in your notebook: *the front of our robot is the end with ___ on it.*
{{< /safety >}}

### Turning motors off

`ao()` stands for **a**ll **o**ff. It stops every motor at once and takes no arguments --- just empty parentheses.

### A stop is not instant either

`ao()` cuts the power. It does not grab the wheels and hold them --- the robot is still
    moving when that line finishes, and it coasts a little further before it truly stops.

So give it a moment to settle before you do anything else:

```text
motor(0, 50);
motor(3, 50);
msleep(2000);
ao();
msleep(30);
msleep(30);   // let it come to rest
```

Thirty milliseconds is not long enough to notice, and it is long enough to matter. Without it, your next
    command starts while the robot is still drifting --- and a turn that begins mid-drift ends up somewhere
    you did not ask for.

From here on, every `ao()` in this curriculum is followed by
    `msleep(30)`. Get in the habit now.
{.muted}

### Why you always need msleep()

Here is the thing that surprises everyone. Look at this program:

```text
motor(0, 50);
motor(3, 50);
ao();
msleep(30);
```

The wheels will not move. Not even a twitch.

The [[CONTROLLER|controller]] turns both motors on, and then --- faster than you can blink --- reads the next line and turns them off again. Remember from Project 2: it moves through lines far quicker than your eye can follow.

**Turning a motor on does not mean "run for a while." It means "run, starting now, until something tells you to stop."** The `msleep()` is what gives it that while.

| Code / part | What it means |
| --- | --- |
| `motor(0, 50);` | Start motor 0 at half power. Keep going. |
| `motor(3, 50);` | Start motor 3 at half power. Keep going. |
| `msleep(2000);` | Wait 2 seconds. The motors are still running the whole time. |
| `ao();` | Stop everything. |

{{< ask key="p2_msleep_role" label="What msleep does while motors run" >}}In your own words: what is `msleep()` actually doing while the motors run?{{< /ask >}}

## Do It --- Make It Turn

{{< figrow >}}
- src: botui/motor_widget.png
  alt: "The motor widget on the Wombat"
  caption: "The motor widget on the Wombat."
{{< /figrow >}}
Robot on the block. Wheels in the air. Every time.

### Step 1 --- Drive the motors by hand first

Find the red line for a port and drag it left and right with your finger.

{{< short-answer key="p3_widget_wheels" label="What the wheels do" prompt="What do the wheels do as you drag?" >}}

{{< short-answer key="p3_widget_position" label="Does the position number change" prompt="Watch the position number for that motor. Does it change?" >}}

Remember that number. You will use it in a much later project to drive exact distances.
{.muted}

### Step 2 --- Write your first motor program

Make a new project called `Motors`. Do not forget your [[ATTRIBUTION|attribution]] [[COMMENT|comments]] at the top.

```c
#include <kipr/wombat.h>

int main ()
{
    motor(0, 50);      // Motor 0 on at 50% power
    motor(3, 50);      // Motor 3 on at 50% power
    msleep(2000);      // Keep them running for 2 seconds
    ao();
      msleep(30);               // All off
    return 0;
 }
```

[[COMPILE|Compile]] and run it. Watch the wheels.

{{< checklist >}}
- key: p3_step_first_run
  label: "Both wheels spun the same direction for about 2 seconds"
{{< /checklist >}}
{{< ask key="p3_same_direction" label="Did both wheels spin the same way" >}}Did both wheels spin the same way? If not, what does that tell you about your plugs?{{< /ask >}}

### Step 3 --- Prove that msleep matters

Delete the `msleep(2000);` line. Compile. Run.

{{< short-answer key="p3_no_msleep" label="What happened without msleep" prompt="What happened?" >}}

Now put it back.

{{< checklist >}}
- key: p3_step_msleep_back
  label: "msleep is back and the program works again"
{{< /checklist >}}
### Step 4 --- Prove that ao() matters

Now delete the `ao();` line instead. Compile. Run. Watch carefully.

{{< short-answer key="p3_no_ao" label="What happened without ao" prompt="What happened this time?" >}}

Put it back. Leaving motors running with no `ao()` is one of the most common bugs in Botball --- and on a real field it means a robot that will not stop.

{{< checklist >}}
- key: p3_step_ao_back
  label: "ao() is back"
{{< /checklist >}}
### Step 5 --- Explore power

Change both power numbers, run, and record what you notice. Keep `msleep(2000)` the same every time so it is a fair test.

{{< gridtable >}}
columns:
- head: Power
- head: "What I noticed"
  aria: "Observation at power 25"
rows:
  - cells:
      - text: 25
      - key: p3_power_25
        aria: "Observation at power 25"
  - cells:
      - text: 50
      - key: p3_power_50
        aria: "Observation at power 50"
  - cells:
      - text: 75
      - key: p3_power_75
        aria: "Observation at power 75"
  - cells:
      - text: 100
      - key: p3_power_100
        aria: "Observation at power 100"
{{< /gridtable >}}
{{< ask key="p3_power_double" label="Is 100 twice as fast as 50" >}}Is power 100 exactly twice as fast as power 50? What makes you say that?{{< /ask >}}

### Step 6 --- Go backward

Put a minus sign in front of both power numbers:

```text
motor(0, -50);
motor(3, -50);
```

Run it and watch the LEDs by the ports as well as the wheels.

{{< short-answer key="p3_reverse_leds" label="LED color in reverse" prompt="What color are the LEDs now?" >}}

{{< checklist >}}
- key: p3_step_reverse
  label: "Both wheels spun backward"
{{< /checklist >}}
### Step 7 --- Make it disagree with itself

Now give the two motors opposite powers:

```text
motor(0, 50);
motor(3, -50);
```

Run it. The wheels are in the air, so watch what *would* happen on the ground.

{{< ask key="p3_opposite_prediction" label="What the robot would do on the floor" >}}If this robot were on the floor, what would it do?{{< /ask >}}

Hold on to this. It is exactly how you will make the robot turn in Project 5.
{.muted}

### Step 8 --- Write three of your own

Write a command for each of these. Do not run them yet --- just write them.

{{< gridtable >}}
columns:
- head: "I want to..."
- head: "The command is"
  aria: "Command for full power"
rows:
  - cells:
      - text: "Run port 0 at full power forward"
      - key: p3_write_full
        aria: "Command for full power"
  - cells:
      - text: "Run port 3 at 80% power forward"
      - key: p3_write_80
        aria: "Command for 80 percent"
  - cells:
      - text: "Run port 1 at quarter power backward"
      - key: p3_write_quarter_rev
        aria: "Command for quarter power reverse"
  - cells:
      - text: "Stop everything"
      - key: p3_write_stop
        aria: "Command to stop"
  - cells:
      - text: "Wait three seconds"
      - key: p3_write_wait3
        aria: "Command to wait three seconds"
{{< /gridtable >}}
Now pick one and actually run it, to check you were right.

{{< checklist >}}
- key: p3_step_own_command
  label: "I tested one of my own commands and it did what I expected"
{{< /checklist >}}
## Score It --- Checkpoint

No field mission yet --- that starts in Project 4. This checkpoint is about whether your motors are set up correctly and whether you can control them on purpose.

### My robot's setup

Write this down. Every program you write from now on depends on it.
{.muted}

{{< gridtable >}}
columns:
- head: Question
- head: "My answer"
  aria: "Left wheel port"
rows:
  - cells:
      - text: "Which port is my left wheel in?"
      - key: p4_left_port
        aria: "Left wheel port"
  - cells:
      - text: "Which port is my right wheel in?"
      - key: p4_right_port
        aria: "Right wheel port"
  - cells:
      - text: "Did I have to flip either plug?"
      - key: p4_flipped
        aria: "Did I flip a plug"
  - cells:
      - text: "What power makes a good steady speed?"
      - key: p4_good_power
        aria: "Good steady power"
{{< /gridtable >}}
### Read the code

What will this program do? Write it out before you run it.

```text
motor(0, 100);
motor(3, 100);
msleep(1000);
motor(0, -100);
motor(3, -100);
msleep(1000);
ao();
  msleep(30);```

{{< answer key="p4_predict_program" label="Predict what the program does" >}}

{{< ask key="p4_predict_result" label="Were you right" >}}Now run it. Were you right? If not, what did you miss?{{< /ask >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_ports
  label: "I can name all four motor ports and know counting starts at 0"
- key: p4_can_led
  label: "I can use the wheel-spin trick to check a motor's direction without running a program"
- key: p4_can_fix_plug
  label: "I can fix a backward motor by flipping the plug"
- key: p4_can_motor
  label: "I can write `motor()` with the right port and power"
- key: p4_can_negative
  label: "I can make a motor run backward using a negative power"
- key: p4_can_explain_msleep
  label: "I can explain why a motor program needs `msleep()`"
- key: p4_can_ao
  label: "I always finish a motor program with `ao()`"
{{< /checklist >}}
### Think about it

{{< ask key="p4_troubleshoot" label="Two things to check" >}}A teammate says their robot "just doesn't work" --- they run the program and nothing moves. Name two things you would check first, and why.{{< /ask >}}

{{< ask key="p4_far_enough" label="Is power and time enough" >}}Nothing in this project told the robot how far to go --- only how hard to push and for how long. Do you think that is enough to hit a target on the field? Why or why not?{{< /ask >}}

### Next

In **Project 4 --- Out and Back**, the robot comes off the block and onto the field. You will drive out of the starting box, park [[IN THE ZONE]], and drive back --- and that scores a real mission.

KIPR · Botball Explorer --- Discovery Projects · © KISS Institute for Practical Robotics 1997--2026
