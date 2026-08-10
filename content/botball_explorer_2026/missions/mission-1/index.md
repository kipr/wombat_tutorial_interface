---
title: "Mission 1 — Waypoint Alpha"
linkTitle: "Waypoint Alpha"
layout: mission
nav: missions
hub: true
body_class: explorer
styles: ["site-base", "hub", "explorer"]
mission_number: 1
weight: 1
skill: "Basic autonomous navigation and stopping at a specified location."
video: mission.mp4
tiers:
  - id: base
    points: 1
    difficulty: 1
    judging: live
    description: "A robot enters the zone adjacent to the left starting box and comes to a clear and complete stop while [[IN THE ZONE]]."
  - id: bonus
    points: 1
    difficulty: 1
    judging: live
    description: "The same robot that completed the Base Mission subsequently returns [[FULLY WITHIN]] a starting box and comes to a clear and complete stop."
---

{{< score-examples >}}
scores:
  - "Robot enters the zone and visibly stops."
  - "Robot enters the zone, stops, later returns [[FULLY WITHIN]] a starting box, and visibly stops."
  - "Robot enters the zone, pauses, performs a servo action while remaining stationary, and then departs."
does_not_score:
  - "Robot drives through the zone without stopping."
  - "Robot slows significantly but never clearly stops."
  - "Robot enters the zone, immediately reverses direction, and leaves without stopping."
  - "One robot completes the Base Mission while a different robot completes the Bonus Mission."
{{< /score-examples >}}

## Judge Notes

- Judges should use common sense when determining whether a robot has come to a clear and complete stop.
- Motion of servos, arms, claws, or other mechanisms does not prevent a robot from being considered stopped, provided the robot's position on the field is not changing.
- If a judge cannot clearly determine that the robot stopped, the mission should not be scored.
