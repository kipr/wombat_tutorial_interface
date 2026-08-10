---
title: "Coding Project 1 — Stage 1 Component Fixture"
short_title: "Coding Project 1"
linkTitle: "Stage 1 Component Fixture"
description: "Stage 1 fixture for shared worksheet metadata, responses, phase headings, glossary controls, and mission summaries."
weight: 1
stage1_fixture: true
nav: discovery
mission_id: discovery_coding_01
mission_title: "Coding Project 1 — Stage 1 Component Fixture"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 1
strand: coding
phase: "Phase 1 · Infrastructure Fixtures"
phase_order: 1
time: "20 minutes"
eyebrow: "Discovery · Coding Project 1"
heading: "Stage 1 Component Fixture"
subheading: "Infrastructure demonstration"
credit: "KIPR · Botball Explorer · Discovery"
meta:
  - term: "Project"
    definition: "Coding Project 1"
  - term: "Strand"
    definition: "Coding"
  - term: "Phase"
    definition: "Infrastructure Fixtures"
  - term: "Time"
    definition: "20 minutes"
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "A Wombat controller"
      - key: need_2
        label: "This worksheet"
build_gate:
  title: "Build required before the next phase"
  description: "The gate target is resolved as a Hugo page, so a missing Systems project fails the build."
  page: "/discovery/systems/project-01"
  label: "Open Systems fixture"
---

## Try It — Observe the Wombat

Use the one-line response for a short observation.

{{< short-answer key="fixture_short" label="Wombat observation" placeholder="Write one observation" >}}

## Learn It — Use Canonical Terms

A [[PROTOTYPE:design|design prototype]] is resolved from the canonical glossary. Its trigger is a real keyboard-focusable button.

{{< mission-summary mission="2" >}}
base: "already done"
bonus: "your task"
{{< /mission-summary >}}

## Do It — Record a Longer Answer

{{< ask key="fixture_long" label="Fixture reflection" >}}How is a checkbox response different from a written response?{{< /ask >}}

## Score It — Check the Result

{{< checklist >}}
- key: fixture_done
  label: "I tested the fixture controls."
{{< /checklist >}}
