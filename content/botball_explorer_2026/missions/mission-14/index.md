---
title: "Mission 14 — Traffic Control"
linkTitle: "Traffic Control"
layout: mission
nav: missions
hub: true
body_class: explorer
styles: ["site-base", "hub", "explorer"]
mission_number: 14
weight: 14
skill: "Precision bulldozing and object delivery."
notice: "⚠️ Exception: A Traffic Cone is not considered [[OFF]] the line if any portion of the Traffic Cone is touching the line."
video: mission.mp4
tiers:
  - id: base
    points: 3
    difficulty: 2
    judging: live
    description: "Both Traffic Cones satisfy the [[OFF]] definition."
  - id: bonus
    points: 7
    difficulty: 4
    judging: final
    description: "A Traffic Cone is [[IN]] the Loading Zone. The Base Mission must be satisfied to score the Bonus Mission."
---

{{< score-examples >}}
scores:
  - "Both Traffic Cones are [[OFF]] the black line."
  - "A Traffic Cone is [[IN]] the Loading Zone while the other remains elsewhere on the field."
  - "The same Traffic Cone used for Base Mission is placed [[IN]] the Loading Zone."
does_not_score:
  - "Either Traffic Cone is touching black line."
  - "Only one Traffic Cone is [[OFF]] the black line."
  - "A Traffic Cone is [[IN]] the Loading Zone but the second cone is still touching black line."
  - "The Base Mission has not been satisfied."
{{< /score-examples >}}

## Judge Notes

- The Base Mission is live scored.
- The Bonus Mission is final position scored.
- [[OFF]] is determined using the [[OFF]] definition.
- [[IN]] is determined using the [[IN]] definition.
- Both Traffic Cones must satisfy the [[OFF]] definition before the Bonus Mission may be scored.
- A Traffic Cone is not considered [[OFF]] the line if any portion is touching the line.
