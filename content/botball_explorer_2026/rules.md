---
title: "Competition Rules"
linkTitle: "Rules"
layout: rules
nav: missions
hub: true
body_class: explorer
styles: ["site-base", "hub", "explorer"]
eyebrow: "KIPR Botball Explorer — 2026 Missions · Stack Attack"
subtitle: "The complete rulebook for the 2026-2027 Botball Explorer season — divisions, match structure, robot requirements, scoring framework, and judging definitions."
sidebar:
  title: "Rule Sections"
  start_level: 2
  end_level: 2
  numbered: true
---

## Competition Overview {#overview}

### Competition Divisions

**Discovery.** Students in Grade 6 and below are eligible for Discovery competition. Eligible students may compete in either Discovery or Expedition.

**Expedition.** Any student currently enrolled in a K–12 educational program is eligible to compete in Expedition.

{{% callout title="Play-Up Rule" %}}
Students may compete in a higher division than their grade level would otherwise require.
{{% /callout %}}

{{% callout title="Play-Down Rule" %}}
Students may not compete in a division below their eligibility level.
{{% /callout %}}

{{% callout title="Discovery — Field Setup" %}}
Discovery teams may remove any game pieces from the field before the match begins.
{{% /callout %}}

### Philosophy

The game is designed to reward autonomy, allow recovery from failures, preserve earned accomplishments, and encourage skill progression. It functions as both a robotics competition and a curriculum assessment system.

### Tournament Format

- Each team receives five (5) matches.
- The best four (4) match scores count toward final ranking.
- The lowest score is discarded.
- Teams are ranked by the sum of their four highest match scores.
- The highest-ranked team is the winner.

### Awards

- **Discovery Champion**
- **Expedition Champion**
- **Overall Champion** — highest-ranked team regardless of division.

### Tie Breakers

Applied in order until the tie is resolved:

1. Fewest Touches / Timeout Cards used
2. Highest raw score before penalties
3. Most distinct missions scored
4. Tie-break match
5. Coin flip

### Spirit of Botball

This competition promotes creativity, engineering, teamwork, problem solving, and gracious competition. Teams compete with honesty, integrity, and respect for competitors, judges, volunteers, and spectators. Winning matters, but learning, innovation, and teamwork are valued equally.

**Teams may not** intentionally damage the field, game objects, or another team's equipment; interfere with another team's match; use abusive or inappropriate behavior; or gain an unfair advantage through deception.

{{% warn title="Violations" %}}
may result in a verbal warning, score adjustment, match forfeiture, or disqualification, as determined by tournament officials based on severity.
{{% /warn %}}

## Game Format & Match Structure {#format}

{{% callout title="Match duration" %}}
Each match lasts **150 seconds**. Expedition Division Timeout periods do not count toward this duration.
{{% /callout %}}

### Official Playing Area

- Interior dimensions: 93 in × 45 in.
- Official grid spacing: 2 in × 2 in.
- Origin (0,0) at the lower-left corner; X-axis along the long side (0–93), Y-axis along the short side (0–45).

### Mission Types

Every mission component is one of two types:

{{% callout title="Live Judged" %}}
The judge must observe the action occur (e.g. touching Botguy, stacking cubes, moving cones off the line).
{{% /callout %}}

{{% callout title="Final Position Judged" %}}
The judge determines success from the final board state after time expires (e.g. poms in baskets, objects on platforms or in loading zones).
{{% /callout %}}

### Progressive Mission Logic

Missions may contain a Base, a Bonus, and an Advanced Bonus task. Completing one stage unlocks eligibility for the next.

### Match Flow

**Pre-match —** teams declare intended missions. **Live match —** only active live-scoring items are displayed; when a live mission is completed the judge checks it, it leaves the active list, and associated bonuses become available. **Final scoring —** the judge evaluates all final-position missions. **Review —** before submission the judge may modify items and correct mistakes.

### Match End

At 150 seconds the match immediately ends. No additional robot movement, settling time, or task completion is permitted afterward. Scoring is based on the condition of the field at the moment the match ends.

## Robots & Equipment {#robots}

### Robots

- Teams may operate up to two robots, working independently or cooperatively.
- Any robot platform capable of autonomous operation is permitted.

### 3D Printed Components

{{% callout title="Discovery" %}}
3D printed robot components are prohibited.
{{% /callout %}}

{{% callout title="Expedition" %}}
3D printed robot components are permitted, limited to one large printed part no larger than 220 mm × 220 mm × 250 mm, plus up to six small printed parts each no larger than 75 mm × 75 mm × 85 mm. Additional restrictions may be published in future updates.
{{% /callout %}}

### Starting Conditions

At the start of a match, all robots and independent structures must be fully contained within the vertical projection of a starting box, with a maximum starting height of 15 inches. The **Starting Volume** is the starting-box vertical projection up to that 15-inch height. Robots may expand beyond their starting dimensions after the match begins.

### Independent Structures

- No more than two detached independent structures on the field at any time.
- All must begin within the Starting Volume and may only enter the field through deployment by a robot after the start.
- They remain part of the team's robot system.

{{% warn title="An independent structure may not contain" %}}
an active controller, a battery, or a powered actuator.
{{% /warn %}}

### Communication & Autonomy

After the match begins, robots must operate autonomously — no wireless control, remote control, teleoperation, or human communication. Programs and configurations may be modified between matches only; recompiling is permitted between matches only. During authorized Touch or Timeout periods teams may adjust mechanical issues but may not modify software.

### Safety

Robots may not contain components intended to damage the field, field elements, or game objects, or to create unsafe conditions. The Head Judge may prohibit any robot or component deemed unsafe, and that determination is final.

## Match Procedures & Recovery {#procedures}

{{% callout title="Legal recovery opportunity" %}}
A legal recovery opportunity is any Touch (Discovery) or Timeout Card (Expedition).
{{% /callout %}}

### Discovery Touches

- A Touch may only occur after the robot is returned completely within a legal starting position.
- The match clock continues to run during all Touches; there is no limit to the number permitted.
- Touches are tracked at the team level and shared across all robots.

{{% warn title="Touch penalty" %}}
Each Touch reduces the team's final match score by **5%**. Penalties are additive and applied after all mission scoring is complete. Final score is never reduced below zero.
{{% /warn %}}

### Expedition Timeout Cards

- Each Expedition team receives two (2) Timeout Cards per tournament.
- Any robot continuing in the match must be returned to a legal starting position before play resumes; independent structures need not be returned.
- The match timer stops during a Timeout and resumes when play restarts. Activation consumes one card regardless of duration.

If a robot is controlling a scoring object when a Timeout Card is played, the controlled object (or full controlled assembly) is removed from the field, becomes ineligible for scoring, and remains removed for the rest of the match. During a Timeout, teams may not reposition game pieces or field elements or alter field setup.

### Independent Structures During Recovery

If an accidental detachment causes a team to exceed two independent structures, one or more must be removed during the team's next legal recovery opportunity. The removal may not cause a mission to score or become unscored, reposition game objects or field elements, or otherwise alter the field. Judges may deny or modify a removal that would affect scoring or gameplay.

## Scoring Framework {#scoring}

{{% callout %}}
Mission-specific scoring requirements supersede general definitions when a conflict exists.
{{% /callout %}}

### Multi-Scoring Policy

The game rewards efficient design and task integration. A single robot action, object movement, placement, delivery, or final configuration may satisfy multiple missions simultaneously unless a rule specifically prohibits it. If all requirements of multiple missions are satisfied, all applicable points are awarded.

**Valid multi-scoring combinations**

- [[@2|M2 · Relocate the Red Cube]], [[@5|M5 · Top Shelf Delivery]], and [[@8|M8 · Deliver the Red Cube]] — same palletized red-cube assembly.
- [[@12|M12 · Restack the Freight]] and [[@16|M16 · Freight Shelving]] — spilled-cube stack on the Green Cube.
- [[@13|M13 · Rebuild the Shipment]] and [[@17|M17 · Freight Racking]] — unstraight-cube stack on the Brown Cube.
- [[@9|M9 · Recover Botguy]] and [[@18|M18 · Safety First, All Hands on Deck]] — Botguy.
- [[@14|M14 · Traffic Control]] and [[@18|M18 · Safety First, All Hands on Deck]] — Traffic Cones.

### Scoring Restrictions

{{% warn title="Basket Exclusivity" %}}
If a team attempts both Hazard Disposal and Hazard Disposal #2, the basket used for each must be different. A single basket may not score both.
{{% /warn %}}

{{% warn title="Waypoint Independence" %}}
Waypoint Alpha and Waypoint Bravo are completed independently. A single return to a starting box may not satisfy the Bonus requirements of both.
{{% /warn %}}

### Live & Final Scoring

**Live Judged —** the judge must observe the scoring condition occur; once awarded it remains earned unless the mission specifies otherwise. **Final Position Judged —** only the final state of the field is considered. Before submission, judges may modify scores and correct scoring or data-entry errors.

## Definitions & Interpretations {#definitions}

These definitions apply throughout unless an individual mission specifies otherwise. Mission-specific requirements take precedence when a conflict exists.

### Touching

{{< rule-definition term="TOUCHING" >}}

{{< score-examples >}}
scores:
  - "A robot physically touching Botguy."
  - "A cube physically touching another cube."
  - "A cone physically touching a game object."
does_not_score:
  - "Objects connected only through a robot."
  - "Objects connected only through another game object."
  - "Objects connected only through a field element."
{{< /score-examples >}}

### On Top Of

{{< rule-definition term="ON TOP OF" >}}

{{< score-examples >}}
scores:
  - "A cube resting on another cube."
  - "A cube touching the upper surface of the Large Red Cube."
  - "A cube touching the Green Cube while leaning against a wall."
  - "A cube touching the Brown Cube while also supported by a robot."
does_not_score:
  - "A cube touching only the side or a vertical face."
  - "A cube hovering above without direct contact."
{{< /score-examples >}}

### In

{{< rule-definition term="IN" >}}

{{< score-examples >}}
scores:
  - "A pom partially inside a basket or PVC enclosure."
  - "A cube or cone partially inside a loading zone."
does_not_score:
  - "An object completely outside the container."
  - "An object touching only the exterior."
  - "An object resting on a basket rim without entering it."
{{< /score-examples >}}

### Off

{{< rule-definition term="OFF" >}}

{{< score-examples >}}
scores:
  - "A cube, pom, or cone completely clear of black line."
  - "A robot completely clear of a boundary line."
does_not_score:
  - "Any portion touching, resting on, or leaning onto black line."
{{< /score-examples >}}

### In a Zone

{{< rule-definition term="IN THE ZONE" >}}

{{< score-examples >}}
scores:
  - "A robot touching only the intended zone."
  - "A robot extending over a line boundary or adjacent zone without touching it."
does_not_score:
  - "A robot touching a black line boundary or an adjacent zone."
  - "A robot resting on any boundary line."
{{< /score-examples >}}

### Simultaneously

{{< rule-definition term="SIMULTANEOUSLY" >}}

{{< score-examples >}}
scores:
  - "An orange and a blue pom both off the line at the same moment."
  - "Two required objects touching the same target at the same moment."
does_not_score:
  - "Conditions satisfied sequentially rather than concurrently."
{{< /score-examples >}}

- Judges need not measure time — only observe a single instant where all required conditions are true.

### Fully Within

{{< rule-definition term="FULLY WITHIN" >}}

{{< score-examples >}}
scores:
  - "A robot entirely within a starting box, loading area, or parking area."
  - "All attachments contained within the area's vertical projection."
does_not_score:
  - "A wheel, attachment, or cable extending beyond the boundary."
  - "Any portion crossing outside the vertical projection."
{{< /score-examples >}}

- When uncertain, the robot is not fully within until judges are satisfied all portions are contained.

### Controlled Object

{{< rule-definition term="CONTROLLED OBJECT" >}}

### Legal Starting Position

{{< rule-definition term="LEGAL STARTING POSITION" >}}

{{% callout title="Stack interpretation" %}}
“Stack” is used for readability only. Scoring is determined solely by the [[ON TOP OF]] and [[TOUCHING]] definitions—traditional, pyramid, or mixed arrangements all score as long as the required relationships exist. Side-by-side, touching-only, or separated arrangements do not.
{{% /callout %}}

{{% warn title="Mission-specific exceptions" %}}
**Warehouse Zone Pom —** a pom is not [[IN]] the Warehouse Zone if any portion touches a black line boundary. **Traffic Cone OFF-Line —** a cone is not [[OFF]] the line if any portion touches the line.
{{% /warn %}}

## Field Elements & Setup {#field}

### Fixed Field Elements

Not intended to move during a match: PVC enclosures, the loading dock, field walls, starting-box walls, field lines, and any permanently attached structure. Teams may not intentionally reposition fixed elements for advantage.

### Movable Objects

Intended to move during a match: baskets, pallets, cubes, poms, traffic cones, Botguy, and any mission-specific object. These may be pushed, pulled, carried, lifted, transported, stacked, or relocated unless a mission prohibits it. Baskets may be freely moved anywhere on the field.

### Field Setup & Reset

Before each match the field is reset per the official setup guide; the Head Judge verifies readiness. Pallet orientation and basket placement may be chosen by teams provided each stays within its designated location. Once a match begins, the setup is official.

{{% callout title="After match start" %}}
Minor setup variations are not grounds for replay or adjustment. The only exception is a setup error that directly causes a team to receive points that would not otherwise be earned — in which case the Head Judge may make scoring adjustments. The Head Judge's decision is final.
{{% /callout %}}

### Displaced or Damaged Elements

If a fixed element is accidentally displaced, judges may restore it when doing so gives no advantage or disadvantage. If a robot intentionally repositions a fixed element, judges may restore it, disallow resulting score, require corrective action, or apply penalties. If an element becomes damaged, the Head Judge decides whether to continue, restore, or replay.

## Inspection & Operations {#inspection}

### Robot Inspection

Inspection verifies that robots are safe, autonomous, and rules-compliant. It does not evaluate quality, engineering approach, programming language, sensor selection, or design choices. A robot that passes inspection is legal unless subsequently modified.

Inspection verifies starting-configuration legality, autonomous operation, power-system safety, and general field compatibility. At the start of a match no game objects may be possessed, held, supported, or controlled by a robot or independent structure. Teams may be reinspected after modifications or whenever officials determine it necessary.

### Judge Review & Appeals

A scoring review may be requested by a designated student representative or a coach, immediately after scoring and before the field is reset. Reviews are limited to scoring errors, data-entry errors, and mission-interpretation errors — not robot performance, programming, mechanical failures, or in-match strategy.

{{% callout title="Review procedure" %}}
Each team may request one scoring review per match. The Head Judge may increase, decrease, or leave a score unchanged. The decision is final and no additional appeals are permitted.
{{% /callout %}}

## Governance & Authority {#governance}

### Official Clarifications

Tournament organizers may issue official clarifications carrying the same authority as published rules. They may explain rules, resolve ambiguities, correct errors, and provide guidance, and are enforced as part of the competition rules.

### Rule Precedence

If a conflict exists, the higher item takes precedence:

1. Official Clarifications
2. Written Rules
3. Setup Diagrams
4. Photographs

### Head Judge Authority

The Head Judge interprets and enforces the rules — resolving disputes, interpreting ambiguity, determining scoring when required, and directing corrective action. The Head Judge does not create new rules but may interpret existing rules and clarifications.

{{% warn title="Final authority" %}}
Tournament officials may take any action necessary to preserve the safety, fairness, and integrity of the competition. Such decisions should be limited to circumstances not adequately addressed by existing rules. The Head Judge's decision is final.
{{% /warn %}}
