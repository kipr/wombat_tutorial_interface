---
title: "Pre-Lab Exercise · Build Your Demobot"
short_title: "Build Your Demobot"
type: labs
styles: ["site-base", "worksheet", "syntax", "print"]
hide_botnav: true
eyebrow: "Pre-Lab · Build Guide"
heading: "Build Your Demobot"
subheading: "Complete this before Lab 1 of any path. Every C lab, Python lab, and Discovery project runs on the robot you are about to build."
credit: "KIPR · Botball Explorer Pre-Lab Exercise · Special thanks to Infosys Foundation USA · © KISS Institute for Practical Robotics 1997–2026"
sidebar:
  title: "Build Phases"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Time Needed"
    definition: "60–90 minutes"
  - term: "Work In"
    definition: "Pairs or small teams"
  - term: "You Need"
    definition: "Wombat kit · screwdriver · charged battery"
  - term: "Finish Line"
    definition: "Servo Demobot with arm and claw"
---

Work through the steps below at your own pace. Read each instruction fully, look at the pictures, and check your work against the finish photos before moving on.

## Phase 0 --- Before You Build

{{< warn title="Do this first" >}}
Find your **battery** and **battery charger** and plug the battery in to charge *now*, while you complete the rest of the build. A dead battery at the end means waiting instead of driving.
{{< /warn >}}

Video coming soon.
{.muted .no-print}

Your kit is organized into **labeled bags**. The instructions will always tell you which bag a part comes from --- for example **(Screw Bag A)** or **(LEGO Bag)**. Keep the bags closed until a step asks for something inside.

{{< figrow >}}
- src: kit/full_demobot_build/bag1.webp
  alt: "Labeled kit bag 1."
- src: kit/full_demobot_build/bag2.webp
  alt: "Labeled kit bag 2."
- src: kit/full_demobot_build/bag3.webp
  alt: "Labeled kit bag 3."
- src: kit/full_demobot_build/bag4.webp
  alt: "Labeled kit bag 4."
- src: kit/full_demobot_build/bag5.webp
  alt: "Labeled kit bag 5."
- src: kit/full_demobot_build/bag6.webp
  alt: "Labeled kit bag 6."
- src: kit/full_demobot_build/bag7.webp
  alt: "Labeled kit bag 7."
- src: kit/full_demobot_build/bag8.webp
  alt: "Labeled kit bag 8."
{{< /figrow >}}

## Phase 1 --- Know Your Parts

These are the small parts you will use over and over. Learn their names now --- every build step names its parts exactly.

Parts video coming soon.
{.muted .no-print}

### Advised parts

This is everything required by the full build.
Quantities for bolts and nuts are generous so that when you drop pieces, you can grab a spare and keep moving.

#### Pins & Standoffs

{{< checklist >}}
- key: a
  label: Axle pin **× 1**
- key: a
  label: Pin **× 6**
- key: a
  label: 1.5 Pin **× 1**
- key: a
  label: ¾ Pin **× 2**
- key: a
  label: H Pin **× 1**
- key: a
  label: 0.5′ Standoff **× 2**
- key: a
  label: 1′ Standoff **× 1**
- key: a
  label: 2′ Standoff **× 1**
- key: a
  label: 3′ Standoff **× 1**
{{< /checklist >}}

#### Nuts, Bolts, and Motor/Servo Hardware

{{< checklist >}}
- key: a
  label: 0.25′ Bolts (Short) **× 12 or so**
- key: a
  label: 0.5′ Bolts (Medium) **× 12 or so**
- key: a
  label: 0.75′ Bolts (Long) **× 12 or so**
- key: a
  label: Spike Nuts **× 12**
- key: a
  label: Small black motor bolts (Motor Bag) **× 2**
- key: a
  label: Small silver servo horn screws (5-Hole Servo Horn Bag) **× 2**
- key: a
  label: Washers (5-Hole Servo Horn Bag) **× 2**
{{< /checklist >}}

#### Lego & Servo Pieces

{{< checklist >}}
- key: a
  label: 1×9 Liftarm **× 2**
- key: a
  label: 1×11 Liftarm **× 1**
- key: a
  label: Thin 1×3 Liftarm **× 1**
- key: a
  label: 1×7 Liftarm **× 1**
- key: a
  label: 1×5 Liftarm **× 1**
- key: a
  label: 3×7 Bent Liftarm **× 1**
- key: a
  label: Claw Liftarm **× 2**
- key: a
  label: H LEGO Piece **× 1**
- key: a
  label: 1×5 Servo Horn **× 2**

{{< /checklist >}}

### LEGO Pins

{{< callout title="Heads up" variant="gold" >}}
The color of a LEGO piece in your kit may be different from the pictures in this guide. Match the *shape and size*, not the color.
{{< /callout >}}

{{< figrow >}}
- src: kit/full_demobot_build/part_axle_pin.webp
  alt: "Axle pin, 1 required"
- src: kit/full_demobot_build/part_pin.webp
  alt: "LEGO pin, 6 required"
- src: kit/full_demobot_build/part_pin_15.webp
  alt: "Long 1.5 LEGO pin, 1 required"
- src: kit/full_demobot_build/part_pin_34.webp
  alt: "Short, three-quarter LEGO pin, 2 required"
- src: kit/full_demobot_build/part_pin_h.webp
  alt: "H pin with four posts, 1 required"
{{< /figrow >}}

### Standoffs

{{< figrow >}}
- src: kit/full_demobot_build/part_standoff_05.webp
  alt: "Half-inch standoff, 2 required"
- src: kit/full_demobot_build/part_standoff_1.webp
  alt: "One-inch standoff, 1 required"
- src: kit/full_demobot_build/part_standoff_2.webp
  alt: "Two-inch standoff, 1 required"
- src: kit/full_demobot_build/part_standoff_3.webp
  alt: "Three-inch standoff, 1 required"
{{< /figrow >}}

### Nuts & Bolts

{{< figrow >}}
- src: kit/full_demobot_build/part_nut.webp
  alt: "Spike nut, at least 12 required"
- src: kit/full_demobot_build/part_bolt_short.webp
  alt: "Short quarter-inch bolt, 12 required"
- src: kit/full_demobot_build/part_bolt_med.webp
  alt: "Medium half-inch bolt, 12 required"
- src: kit/full_demobot_build/part_bolt_long.webp
  alt: "Long three-quarter-inch bolt, 12 required"
{{< /figrow >}}

### Motor & Servo Hardware

These screws are in the motor and servo bags, not the screw bags.
There are no extras, so be careful not to lose these.

{{< figrow >}}
- src: kit/4metalservohorns.webp
  alt: "Small silver servo screws and washers. 3 pictured, 2 required"
- src: kit/motor_screw.webp
  alt: "Small black motor bolt"
{{< /figrow >}}

## Phase 2 --- Build the Basic Demobot

The Basic Demobot is the driving base: chassis, two motors, two wheels, a caster, and the Wombat controller. Follow the steps in order and check every picture.

### 1. Attach the 1×9 Liftarm

Video coming soon.
{.muted .no-print}

1. Line up a **1×9 LEGO Liftarm (LEGO Bag)** on the **short end** of the chassis as shown.
2. Attach the piece to the chassis with two **medium bolts (Screw Bag A)** and two **nuts (Screw Bag C)**.
3. Add two **black LEGO pins (LEGO Bag)** to the end of the 1×9 Liftarm as shown.

Chassis found in the Botball Metal Pieces Box.
{.muted}

{{< figrow >}}
- src: kit/full_demobot_build/s01a.webp
  alt: "Line up the 1×9 liftarm on the short end of the chassis."
  caption: "1 · Line up on the short side"
- src: kit/full_demobot_build/s01b.webp
  alt: "Bolt the 1×9 liftarm to the chassis."
  caption: "2 · Bolt it down"
- src: kit/full_demobot_build/s01c.webp
  alt: "Add two black pins to the liftarm."
  caption: "3 · Add two pins"
{{< /figrow >}}

### 2. Attach the 1×11 Liftarm

Video coming soon.
{.muted .no-print}

1. Line up a **1×11 LEGO Liftarm (LEGO Bag)** on the short end of the chassis as shown.
2. Attach the piece to the chassis with two **long bolts (Screw Bag B)** and two **nuts (Screw Bag C)**.

{{< figrow >}}
- src: kit/full_demobot_build/s02a.webp
  alt: "Line up the 1×11 liftarm on the chassis."
  caption: "1 · Line it up"
- src: kit/full_demobot_build/s02b.webp
  alt: "Bolt the 1×11 liftarm to the chassis."
  caption: "2 · Bolt it down"
{{< /figrow >}}

### 3. Mount the First Motor

Video coming soon.
{.muted .no-print}

1. Line up a **motor (Motor Bag)** with the **wire end going in first** and the **spline** of the motor on the same side as the **short end** of the chassis.
2. Attach the motor to the chassis with two **medium bolts (Screw Bag A)** and two **nuts (Screw Bag C)**.

{{< figrow >}}
- src: kit/full_demobot_build/s03a.webp
  alt: "Motor lined up with its spline toward the short side of the chassis."
  caption: "1 · Spline toward the short side"
- src: kit/full_demobot_build/s03b.webp
  alt: "Motor bolted to the chassis."
  caption: "2 · Bolt it down"
{{< /figrow >}}

### 4. Attach the Wheel --- Then Repeat the Other Side

Video coming soon.
{.muted .no-print}

1. Find the **small black bolt** in the small bag of black pieces that came with the motor **(Motor Bag)**.
2. With a screwdriver, **slightly enlarge the hole** in the wheel where the small black bolt will be inserted.
3. Attach the wheel to the **spline** of the motor with the small black bolt.
4. **Repeat Steps 3 and 4 on the other side** of the chassis, so you have two motors and two wheels.

Wheel found in the Electronics Bag.
{.muted}

{{< figrow >}}
- src: kit/full_demobot_build/s04a.webp
  alt: "Wheel and small black bolt."
  caption: "Wheel + small black bolt"
- src: kit/full_demobot_build/s04b.webp
  alt: "Wheel attached to the motor spline."
  caption: "Attached to the spline"
{{< /figrow >}}

### Check Your Work

{{< figrow >}}
- src: kit/full_demobot_build/s05.webp
  alt: "Chassis with two motors, two wheels, and both liftarms attached."
{{< /figrow >}}

Your chassis should look like this now --- two motors, two wheels, both liftarms on the short end.

### 5. Prepare the Caster

Video coming soon.
{.muted .no-print}

1. **Remove the ball** from the holder with a screwdriver.
2. Insert the **two long bolts that came in the bag** into the two small holes on the *inside* of the holder.
3. **Replace the ball** in the holder. This helps keep the bolts in while you are putting things together.

Caster found in the Electronics Bag.
{.muted}

{{< figrow >}}
- src: kit/full_demobot_build/s06a.webp
  alt: "Caster before disassembly."
  caption: "Start"
- src: kit/full_demobot_build/s06b.webp
  alt: "Ball removed from the caster holder."
  caption: "1 · Remove the ball"
- src: kit/full_demobot_build/s06c.webp
  alt: "Bolts inserted into the caster holder."
  caption: "2 · Insert the bolts"
- src: kit/full_demobot_build/s06d.webp
  alt: "Ball replaced in the caster holder."
  caption: "3 · Replace the ball"
{{< /figrow >}}

### 6. Build the Caster Arm

1. Take a **1×9 Liftarm**, a **¾ Pin**, and a **Thin 1×3 Liftarm (LEGO Bag)**.
2. Attach the Thin 1×3 Liftarm to the 1×9 Liftarm using the ¾ Pin as shown.

{{< figrow >}}
- src: kit/full_demobot_build/s07.webp
  alt: "Caster arm assembled from a 1×9 liftarm, a three-quarter pin, and a thin 1×3 liftarm."
  caption: "Caster arm assembly"
{{< /figrow >}}

### 7. Assemble the Caster Onto the Arm

1. Get the **small nuts** and the **Thick and Thin Spacers** out of the Caster bag.
2. Slide the **Thick Spacer** onto the caster bolts.
3. Slide the bolts **through the holes in the LEGO**.
4. Slide the **Thin Spacer** onto the bolts.
5. Secure all these pieces with the **two small nuts**.

A spare screw and small nut can be found in Screw Bag F.
{.muted}

{{< figrow >}}
- src: kit/full_demobot_build/s08.webp
  alt: "Caster assembly order with thick spacer, LEGO arm, thin spacer, and small nuts."
  caption: "Thick spacer → LEGO → thin spacer → small nuts"
{{< /figrow >}}

### 8. Add the Standoffs

1. Attach two **½-inch Standoffs (Screw Bag D)** to the ends of the LEGO piece as shown.
2. Attach them with two **medium bolts (Screw Bag A)**.

{{< figrow >}}
- src: kit/full_demobot_build/s09.webp
  alt: "Two half-inch standoffs bolted to the caster arm."
  caption: "Two ½-inch standoffs on the caster arm"
{{< /figrow >}}

### 9. Mount the Wombat

Video coming soon.
{.muted .no-print}

1. Line up the holes on the **back of the Wombat** with the holes on the **back end of the chassis**.

{{< figrow >}}
- src: kit/full_demobot_build/s10a.webp
  alt: "Wombat lined up over the chassis."
  caption: "Line up the back holes"
- src: kit/full_demobot_build/s10b.webp
  alt: "Wombat seated on the chassis."
  caption: "Seated on the chassis"
{{< /figrow >}}

### 10. Attach the Caster Assembly

Video coming soon.
{.muted .no-print}

1. Line up the caster assembly with the holes on the **back of the robot** as shown.
2. Do this with the robot **right side up, balanced on the caster assembly**.
3. Using two **small bolts (Screw Bag D)**, attach the assembly to the chassis.

{{< figrow >}}
- src: kit/full_demobot_build/s11a.webp
  alt: "Caster assembly lined up under the back of the upright robot."
  caption: "1 · Line it up, robot right side up"
- src: kit/full_demobot_build/s11b.webp
  alt: "Caster assembly bolted to the chassis."
  caption: "2–3 · Bolt it to the chassis"
{{< /figrow >}}

### 11. Install the Battery

Video coming soon.
{.muted .no-print}

1. Slide the battery into the **back slot** of the Wombat case.

{{< figrow >}}
- src: kit/full_demobot_build/s12a.webp
  alt: "Battery ready to slide into the Wombat's back slot."
  caption: "Battery + back slot"
- src: kit/full_demobot_build/s12b.webp
  alt: "Battery installed in the Wombat."
  caption: "Installed"
{{< /figrow >}}

### Basic Demobot Finished!

{{< figrow >}}
- src: kit/full_demobot_build/basic_done.webp
  alt: "Completed Basic Demobot with motors, wheels, caster, Wombat, and battery in place."
{{< /figrow >}}

Compare your robot to this photo before continuing. Motors, wheels, caster, Wombat, and battery should all be in place.

## Phase 3 --- Add the Arm and Claw: Servo Demobot

Now you will add two servos: one that raises and lowers an **arm**, and one that opens and closes a **claw**. Servo steps must be done in order --- especially the servo-horn steps, which set the servo to a known position before you attach anything.

### 12. Attach the Arm Servo Bracket

Video coming soon.
{.muted .no-print}

1. Line up a **servo bracket** as shown, then secure it to the chassis with two **medium bolts (Screw Bag A)** and two **nuts (Screw Bag C)**.

{{< figrow >}}
- src: kit/full_demobot_build/s13a.webp
  alt: "Servo bracket lined up on the chassis."
  caption: "Line up the bracket"
- src: kit/full_demobot_build/s13b.webp
  alt: "Servo bracket bolted to the chassis."
  caption: "Bolt it down"
{{< /figrow >}}

### 13. Install the Arm Servo

1. Slide a **servo** into the servo bracket, **wire end first**, with the **spline toward the front** of the robot.
2. Secure it to the bracket with two **medium bolts (Screw Bag A)** and two **nuts (Screw Bag C)**.

{{< figrow >}}
- src: kit/full_demobot_build/s14a.webp
  alt: "Arm servo sliding wire-end first into its bracket."
  caption: "1 · Wire end first"
- src: kit/full_demobot_build/s14b.webp
  alt: "Arm servo seated with its spline toward the front."
  caption: "Spline toward the front"
- src: kit/full_demobot_build/s14c.webp
  alt: "Arm servo bolted into its bracket."
  caption: "2 · Bolt it in"
{{< /figrow >}}

### 14. Wind the Arm Servo to Its Stop

Video coming soon.
{.muted .no-print}

1. Place the **1×5 Servo Horn (5-Hole Servo Horn Bag)** on the servo as shown --- do *not* bolt it yet.
2. Rotate the servo head with the 1×5 Servo Horn **all the way toward the robot**.
3. Lift the horn off, reset it, and **repeat until the servo can no longer turn**.

{{< figrow >}}
- src: kit/full_demobot_build/s15a.webp
  alt: "Servo horn placed on the arm servo."
  caption: "1 · Place the horn"
- src: kit/full_demobot_build/s15b.webp
  alt: "Arm servo rotated toward the robot."
  caption: "2 · Rotate toward the robot"
{{< /figrow >}}

### 15. Bolt On the Arm Servo Horn

Video coming soon.
{.muted .no-print}

1. With the horn in the **upright position**, attach the 1×5 Servo Horn --- with a **washer under it** --- to the servo using the **small silver bolt** that came in the **5-Hole Servo Horn Bag**.

{{< figrow >}}
- src: kit/full_demobot_build/s16.webp
  alt: "Arm servo horn bolted upright with a washer underneath."
  caption: "Upright, washer under the horn"
{{< /figrow >}}

### 16. Start the Claw Frame

Video coming soon.
{.muted .no-print}

1. Attach the **1×7 Liftarm (LEGO Claw Bag)** to a **servo bracket** as shown, using a **medium bolt (Screw Bag A)** and a **nut (Screw Bag C)**. The other hole will be secured in a bit.
2. Attach an **H LEGO piece (LEGO Claw Bag)** to the bracket as shown, using two **medium bolts (Screw Bag A)** and two **nuts (Screw Bag C)**.

{{< figrow >}}
- src: kit/full_demobot_build/s17a.webp
  alt: "1×7 liftarm attached to the servo bracket."
  caption: "1 · 1×7 liftarm on the bracket"
- src: kit/full_demobot_build/s17b.webp
  alt: "H LEGO piece attached to the servo bracket."
  caption: "2 · Add the H piece"
{{< /figrow >}}

### 17. Add the 1×5 Liftarm

1. Attach a **1×5 Liftarm** to the H LEGO piece as shown **(LEGO Bag)**.
2. Attach a **black pin** to the 1×5 Liftarm **(LEGO Bag)**.

{{< figrow >}}
- src: kit/full_demobot_build/s18.webp
  alt: "1×5 liftarm and black pin attached to the H piece."
  caption: "1×5 liftarm + pin"
{{< /figrow >}}

### 18. Add the 3×7 Bent Liftarm

1. Attach a **3×7 Bent Liftarm** to the 1×5 Liftarm as shown **(LEGO Claw Bag)**.
2. Push a **long black LEGO pin** --- long end first --- all the way through as shown **(LEGO Bag)**.
3. Attach an **axle pin** to the end of the 3×7 Bent Liftarm **(LEGO Claw Bag)**.

{{< figrow >}}
- src: kit/full_demobot_build/s19.webp
  alt: "3×7 bent liftarm attached with a long pin and axle pin."
  caption: "Bent liftarm, long pin, axle pin"
{{< /figrow >}}

### 19. Install the Claw Servo

Video coming soon.
{.muted .no-print}

1. Slide a **servo** into the servo bracket, **wire end first**, with the **spline toward the bent end** of the 3×7 Bent Liftarm.
2. Secure it to the bracket with two **medium bolts (Screw Bag A)** and two **nuts (Screw Bag C)**.

{{< figrow >}}
- src: kit/full_demobot_build/s20a.webp
  alt: "Claw servo sliding wire-end first into its bracket."
  caption: "1 · Wire end first"
- src: kit/full_demobot_build/s20b.webp
  alt: "Claw servo secured with its spline toward the bent end."
  caption: "2 · Spline toward the bent end"
{{< /figrow >}}

### 20. Wind the Claw Servo to Its Stop

1. Place the **1×5 Servo Horn (5-Hole Servo Horn Bag)** on the servo as shown.
2. Rotate the servo head with the horn **all the way toward the LEGO piece**.
3. Repeat until the servo **can no longer turn**.

{{< figrow >}}
- src: kit/full_demobot_build/s21a.webp
  alt: "Servo horn placed on the claw servo."
  caption: "1 · Place the horn"
- src: kit/full_demobot_build/s21b.webp
  alt: "Claw servo rotated toward the LEGO piece."
  caption: "2 · Rotate toward the LEGO piece"
{{< /figrow >}}

### 21. Bolt On the Claw Servo Horn

1. Attach a **1×5 Servo Horn** --- with a **washer under it** --- to the servo using the **small silver screw** that came in the **5-Hole Servo Horn Bag**.

{{< figrow >}}
- src: kit/full_demobot_build/s22.webp
  alt: "Claw servo horn bolted on with a washer underneath."
  caption: "Washer under the horn"
{{< /figrow >}}

### 22. Attach the Fixed Claw Jaw

Video coming soon.
{.muted .no-print}

1. Attach a **Claw Liftarm (LEGO Claw Bag)** to the **3×7 Bent Liftarm** using an **axle pin (LEGO Claw Bag)** as shown.
2. Secure the LEGO pieces together using a **long bolt (Screw Bag B)** and a **nut (Screw Bag C)**.

{{< figrow >}}
- src: kit/full_demobot_build/s23a.webp
  alt: "Claw liftarm attached to the axle pin."
  caption: "1 · Axle pin connection"
- src: kit/full_demobot_build/s23b.webp
  alt: "Fixed claw liftarm secured with a bolt and nut."
  caption: "2 · Bolt + nut"
{{< /figrow >}}

### 23. Attach the Moving Claw Jaw

1. Line up a **Claw Liftarm (LEGO Claw Bag)** on the **1×5 Servo Horn** as shown.
2. Secure it using two **long bolts (Screw Bag B)** and **nuts (Screw Bag C)**.

{{< figrow >}}
- src: kit/full_demobot_build/s24a.webp
  alt: "Moving claw liftarm lined up on the servo horn."
  caption: "1 · Line up on the horn"
- src: kit/full_demobot_build/s24b.webp
  alt: "Moving claw liftarm bolted to the servo horn."
  caption: "2 · Two long bolts + nuts"
{{< /figrow >}}

### Check Your Work --- The Claw Assembly

{{< figrow >}}
- src: kit/full_demobot_build/claw_done.webp
  alt: "Completed claw assembly with claw servo, both jaws, and bent liftarm frame."
{{< /figrow >}}

Your finished claw assembly should look like this: claw servo, both jaws, and the bent liftarm frame.

### 24. Mount the Claw Assembly to the Arm

Video coming soon.
{.muted .no-print}

1. Line up **3 holes** on the arm's **1×5 Servo Horn** with the **1×7 Liftarm** from the claw assembly.
2. Secure it using two **long bolts (Screw Bag B)** and **nuts (Screw Bag C)**. Make sure the **left bolt goes through the claw servo bracket** as well.

{{< figrow >}}
- src: kit/full_demobot_build/s25a.webp
  alt: "Claw assembly lined up with three holes on the arm servo horn."
  caption: "1 · Line up 3 holes"
- src: kit/full_demobot_build/s25b.webp
  alt: "Claw assembly bolted to the arm with the left bolt passing through the bracket."
  caption: "2 · Left bolt through the bracket"
{{< /figrow >}}

### Servo Demobot Finished!

{{< figrow >}}
- src: kit/full_demobot_build/servo_done.webp
  alt: "Completed Servo Demobot with driving base, arm servo, and claw servo."
{{< /figrow >}}

This is the robot you will use for the labs: driving base + arm servo + claw servo.

{{< gate title="You're Ready for Lab 1" >}}
Put your battery in --- it should be charged by now --- plug the motor and servo wires into the Wombat, and head to the first lab of your path: C, Python, or Discovery. Keep this guide handy; if a piece ever comes loose, come back to the matching step.
{{< /gate >}}
