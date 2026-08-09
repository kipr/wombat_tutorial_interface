---
title: "Mission 9 — Recover Botguy"
linkTitle: "Recover Botguy"
layout: mission
nav: missions
hub: true
body_class: explorer
styles: ["site-base", "hub", "explorer"]
mission_number: 9
weight: 9
skill: "Navigating to a known coordinate and extracting a high-mass object."
tiers:
  - id: base
    points: 7
    difficulty: 4
    judging: live
    image: base.jpg
    description: "A robot is [[TOUCHING]] Botguy."
  - id: bonus
    points: 9
    difficulty: 5
    judging: live
    image: bonus.jpg
    description: "Botguy is [[COMPLETELY]] outside the enclosure AND is touching the warehouse floor."
---

{{< score-examples >}}
scores:
  - "A robot is touching Botguy."
  - "Botguy is completely outside the enclosure and touching the warehouse floor."
  - "Botguy is touching the warehouse floor while being held by a robot."
does_not_score:
  - "A robot is near Botguy but not touching him."
  - "Botguy is touching the warehouse floor but still touching the enclosure."
  - "Botguy is removed from the enclosure but not touching the warehouse floor."
{{< /score-examples >}}

## Judge Notes

- This is a live-scored mission.
- [[TOUCHING]] is determined using the [[TOUCHING]] definition.
- Botguy is considered removed from the enclosure when Botguy is completely outside and no portion of Botguy is touching the enclosure.
- Any portion of Botguy touching the warehouse floor satisfies the floor requirement.
- Both Bonus Mission requirements must be true at the same moment in time.
