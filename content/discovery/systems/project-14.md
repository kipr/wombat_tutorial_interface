---
title: "Systems Project 14 — Plans and Feedback"
short_title: "Systems Project 14"
linkTitle: "Plans and Feedback"
description: "Building a project timeline that survives contact with reality, and asking for feedback in a way that gets you something useful."
weight: 14
nav: discovery
mission_id: discovery_systems_14
mission_title: "Systems Project 14 — Plans and Feedback"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 14
strand: systems
phase: "Phase E · Working as a Team"
phase_order: 5
time: "One class period"
pace:
  kind: anytime
  label: "Any time · earlier is better"
eyebrow: "Discovery · Systems Project 14"
heading: "Plans and Feedback"
subheading: "Everything takes longer than you think. Then somebody tells you what you missed."
credit: "KIPR · Botball Explorer · Discovery"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Systems Project 14"
  - term: "Strand"
    definition: "Systems"
  - term: "Phase"
    definition: "Working as a Team"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Finding out how badly your team estimates time, building a timeline that survives contact with a real challenge, and then handing your work to somebody who will tell you what is wrong with it."
  - term: "Strand Link"
    definition: "Any time — best after Project 13"
  - term: "Before You Start"
    definition: "Systems Project 13. You need roles assigned and goals ranked before a timeline means anything."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your team and your robot"
      - key: need_2
        label: "A timer or a clock you can see"
      - key: need_3
        label: "Your notebook"
      - key: need_4
        label: "A challenge nobody has solved yet"
      - key: need_5
        label: "Somebody outside your team to review your work"
---

## Try It --- Guess, Then Time It

Before you do anything, write down how long you think each of these will take your team. Guess in minutes.

Then actually do them, and time them.

{{< gridtable >}}
columns:
  - head: "Task"
    width: 40%
  - head: "Our guess"
    width: 20%
  - head: "Actual"
    width: 20%
  - head: "Out by"
rows:
  -
    - text: "Write a program that drives forward one foot and stops"
    - key: p1_t1_g
      aria: "Guess 1"
    - key: p1_t1_a
      aria: "Actual 1"
    - key: p1_t1_d
      aria: "Diff 1"
  -
    - text: "Take the claw off and put it back on"
    - key: p1_t2_g
      aria: "Guess 2"
    - key: p1_t2_a
      aria: "Actual 2"
    - key: p1_t2_d
      aria: "Diff 2"
  -
    - text: "Score any one mission three times in a row"
    - key: p1_t3_g
      aria: "Guess 3"
    - key: p1_t3_a
      aria: "Actual 3"
    - key: p1_t3_d
      aria: "Diff 3"
{{< /gridtable >}}

{{< gridtable >}}
columns:
  - head: "Question"
    width: 52%
  - head: "My answer"
rows:
  -
    - text: "How many did you guess too low?"
    - key: p1_low
      aria: "Too low"
  -
    - text: "Which was furthest out?"
    - key: p1_worst
      aria: "Worst"
  -
    - text: "What took time that you had not counted?"
    - key: p1_unseen
      aria: "Unseen time"
{{< /gridtable >}}

{{< callout variant="gold" title="Almost Everybody Guesses Too Low" >}}
Not because people are bad at math. Because when you picture a job, you picture it going well --- you do not picture the bolt rolling under the table or the program not compiling.

Professional engineers get this wrong too. The fix is not to guess better. It is to write the guess down, then find out how wrong it was.
{{< /callout >}}

## Learn It --- Timelines and Honest Answers

A timeline is a list of what has to be done, in order, with a time against each one.

Each thing that must be finished before the next can start is a [[MILESTONE|milestone]]. Milestones are how you find out you are behind while there is still time to do something about it.

{{< gridtable >}}
columns:
  - head: "A timeline gives you..."
    width: 30%
  - head: "Which matters because"
rows:
  -
    - text: "An order"
    - text: "Some jobs cannot start until another is done"
  -
    - text: "A time for each"
    - text: "You can tell early whether you are behind"
  -
    - text: "A name against each"
    - text: "Everyone knows what is theirs"
  -
    - text: "Slack"
    - text: "Something always goes wrong, and a plan with no room breaks"
{{< /gridtable >}}

{{< callout variant="red" title="⚠ One Late Task Is Not One Late Task" >}}
If the claw is not built on time, the person who was going to program the claw cannot start either. A delay in one place moves everything downstream of it.

That is why you say something the moment you know you will be late --- not when the deadline arrives.
{{< /callout >}}

### Feedback

[[FEEDBACK|Feedback]] is somebody telling you what they actually saw, so you can make the thing better. It is not the same as being marked, and it is not the same as being criticised.
Giving it
- Be specific. "The turn [[OVERSHOOT|overshoots]]" is better than "it does not work".
- Talk about the work, not the person.
- Remember how long they spent on it.
- Say what is good as well. You are not being kind, you are being accurate.
Receiving it
- Listen to all of it before you answer.
- Ask a question if you do not understand.
- They want you to succeed. That is why they bothered.
- You do not have to take every suggestion --- but say why not.

### The end user

The [[END USER|end user]] is whoever the thing is actually for. Not you, and not your teacher marking it.

They know things you do not, because they are the ones who will use it. Asking them *before* you build saves you building the wrong thing.

{{< callout variant="navy" title="You Have Already Met This" >}}
In Systems Project 12 you designed something for a person who could not do a task. The rule there was **ask, do not assume**.

Same rule. The end user is the person you ask.
{{< /callout >}}

## Do It --- Plan It, Run It, Hand It Over

### 1. A goal for each role

Pick a challenge your team has not solved. Using your roles from Project 13, give every person one thing they are responsible for finishing.

{{< gridtable >}}
columns:
  - head: "Role"
    width: 22%
  - head: "Who"
    width: 22%
  - head: "Their goal for this challenge"
rows:
  -
    - text: "Driver"
    - key: p3_g_dr_w
      aria: "Driver who"
    - key: p3_g_dr
      aria: "Driver goal"
  -
    - text: "Navigator"
    - key: p3_g_na_w
      aria: "Navigator who"
    - key: p3_g_na
      aria: "Navigator goal"
  -
    - text: "Strategist"
    - key: p3_g_st_w
      aria: "Strategist who"
    - key: p3_g_st
      aria: "Strategist goal"
  -
    - text: "Builder"
    - key: p3_g_bu_w
      aria: "Builder who"
    - key: p3_g_bu
      aria: "Builder goal"
{{< /gridtable >}}

### 2. Build the timeline

Break the challenge into steps. Put them in order, guess a time for each, and say who owns it.

{{< gridtable >}}
columns:
  - head: "#"
    width: 10%
  - head: "Step"
    width: 38%
  - head: "Who"
    width: 18%
  - head: "Minutes"
    width: 16%
  - head: "Done by"
rows:
  -
    - text: "1"
    - key: p3_s1
      aria: "Step 1"
    - key: p3_s1_w
      aria: "Who 1"
    - key: p3_s1_m
      aria: "Mins 1"
    - key: p3_s1_b
      aria: "By 1"
  -
    - text: "2"
    - key: p3_s2
      aria: "Step 2"
    - key: p3_s2_w
      aria: "Who 2"
    - key: p3_s2_m
      aria: "Mins 2"
    - key: p3_s2_b
      aria: "By 2"
  -
    - text: "3"
    - key: p3_s3
      aria: "Step 3"
    - key: p3_s3_w
      aria: "Who 3"
    - key: p3_s3_m
      aria: "Mins 3"
    - key: p3_s3_b
      aria: "By 3"
  -
    - text: "4"
    - key: p3_s4
      aria: "Step 4"
    - key: p3_s4_w
      aria: "Who 4"
    - key: p3_s4_m
      aria: "Mins 4"
    - key: p3_s4_b
      aria: "By 4"
  -
    - text: "5"
    - key: p3_s5
      aria: "Step 5"
    - key: p3_s5_w
      aria: "Who 5"
    - key: p3_s5_m
      aria: "Mins 5"
    - key: p3_s5_b
      aria: "By 5"
{{< /gridtable >}}
{{< short-answer key="p3_depends" label="Dependency" prompt="Which step cannot start until another one is finished?" >}}

{{< callout variant="gold" title="Add a Quarter Back On" >}}
Look at your Try It numbers. If your team guessed low every time, add a quarter to every estimate before you start.

That is not cheating. It is using evidence you collected ten minutes ago.
{{< /callout >}}
{{< short-answer key="p3_total" label="Total expected" prompt="Total time we expect this to take:" >}}

### 3. Run it, and watch the clock

Do the challenge. Tick each step off as it finishes and write down the real time.

{{< gridtable >}}
columns:
  - head: "#"
    width: 10%
  - head: "Planned"
    width: 24%
  - head: "Actual"
    width: 24%
  - head: "Why the difference"
rows:
  -
    - text: "1"
    - key: p3_r1_p
      aria: "Planned 1"
    - key: p3_r1_a
      aria: "Actual 1"
    - key: p3_r1_y
      aria: "Why 1"
  -
    - text: "2"
    - key: p3_r2_p
      aria: "Planned 2"
    - key: p3_r2_a
      aria: "Actual 2"
    - key: p3_r2_y
      aria: "Why 2"
  -
    - text: "3"
    - key: p3_r3_p
      aria: "Planned 3"
    - key: p3_r3_a
      aria: "Actual 3"
    - key: p3_r3_y
      aria: "Why 3"
  -
    - text: "4"
    - key: p3_r4_p
      aria: "Planned 4"
    - key: p3_r4_a
      aria: "Actual 4"
    - key: p3_r4_y
      aria: "Why 4"
  -
    - text: "5"
    - key: p3_r5_p
      aria: "Planned 5"
    - key: p3_r5_a
      aria: "Actual 5"
    - key: p3_r5_y
      aria: "Why 5"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_finished
  label: "We finished the challenge"
{{< /checklist >}}

### 4. Look back at it together

{{< gridtable >}}
columns:
  - head: "Question"
    width: 52%
  - head: "Our answer"
rows:
  -
    - text: "Did everyone meet their own goal?"
    - key: p3_goals_met
      aria: "Goals met"
  -
    - text: "Did we finish inside our total time?"
    - key: p3_on_time
      aria: "On time"
  -
    - text: "Which step blew the timeline?"
    - key: p3_blew
      aria: "Blew it"
  -
    - text: "Did that push anything else late?"
    - key: p3_knock
      aria: "Knock-on"
{{< /gridtable >}}
{{< ask key="p3_say_it" label="How to say it" >}}Somebody missed their step. How does your team say so without it turning into blame? Write the actual sentence you would use.{{< /ask >}}

### 5. A job for somebody else

Now a real one. Your teacher gives your team a project with an **end user** who is not you.
Option A
A robot that puts recyclables into the right bin.
Option B
A robot that greets people by waving as they come into the classroom.
Option C
A robot that works as a quiz timer --- starts driving and waving when time is up.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 34%
  - head: "Our answer"
rows:
  -
    - text: "We picked"
    - key: p3_pick
      aria: "Picked"
  -
    - text: "Who is the end user?"
    - key: p3_user
      aria: "End user"
  -
    - text: "What do they need it to do?"
    - key: p3_need
      aria: "What they need"
  -
    - text: "How will we know it worked for them?"
    - key: p3_know
      aria: "How we know"
{{< /gridtable >}}

### 6. Ask before you build

Go and ask your end user two questions before designing anything.
{{< ask key="p3_asked" label="What they said" >}}What we asked, and what they said:{{< /ask >}}
{{< short-answer key="p3_changed_plan" label="Changed plan" prompt="Did their answer change your plan?" >}}

### 7. Design it, time it, build it

Write a short timeline for this one and work through it.

{{< gridtable >}}
columns:
  - head: "#"
    width: 10%
  - head: "Step"
    width: 48%
  - head: "Minutes"
    width: 20%
  - head: "Who"
rows:
  -
    - text: "1"
    - key: p3_p1
      aria: "P step 1"
    - key: p3_p1_m
      aria: "P mins 1"
    - key: p3_p1_w
      aria: "P who 1"
  -
    - text: "2"
    - key: p3_p2
      aria: "P step 2"
    - key: p3_p2_m
      aria: "P mins 2"
    - key: p3_p2_w
      aria: "P who 2"
  -
    - text: "3"
    - key: p3_p3
      aria: "P step 3"
    - key: p3_p3_m
      aria: "P mins 3"
    - key: p3_p3_w
      aria: "P who 3"
  -
    - text: "4"
    - key: p3_p4
      aria: "P step 4"
    - key: p3_p4_m
      aria: "P mins 4"
    - key: p3_p4_w
      aria: "P who 4"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_built
  label: "We have something working well enough to show"
{{< /checklist >}}

### 8. Hand it over and be told what is wrong

Show it to your end user and your teacher. Ask one question: *what did we not think of?*

{{< gridtable >}}
columns:
  - head: "Who"
    width: 26%
  - head: "What they said"
    width: 40%
  - head: "What we will change"
rows:
  -
    - text: "Our end user"
    - key: p3_f_user
      aria: "User feedback"
    - key: p3_f_user_c
      aria: "User change"
  -
    - text: "Our teacher"
    - key: p3_f_teach
      aria: "Teacher feedback"
    - key: p3_f_teach_c
      aria: "Teacher change"
  -
    - text: "Another team"
    - key: p3_f_team
      aria: "Team feedback"
    - key: p3_f_team_c
      aria: "Team change"
{{< /gridtable >}}
{{< ask key="p3_never_thought" label="Never considered" >}}Did anybody raise something your team had never considered? What was it?{{< /ask >}}

{{< callout variant="red" title="⚠ You Do Not Have to Do Everything Suggested" >}}
Some feedback will not fit your [[CONSTRAINT|constraints]], and some of it will be wrong. That is allowed.

What is not allowed is ignoring it silently. Say which suggestions you took, which you did not, and why.
{{< /callout >}}

### 9. Change it and show them again

Make the changes you decided on. Take it back to the same people.
{{< ask key="p3_round2" label="Round two" >}}What did you change, and were they satisfied?{{< /ask >}}
{{< ask key="p3_declined" label="Declined suggestion" >}}Which suggestion did you decide not to take, and why?{{< /ask >}}

{{< checklist >}}
- key: p3_second
  label: "We went round the loop at least twice"
{{< /checklist >}}

## Score It --- Checkpoint

### Better feedback

Rewrite each one so it is specific and about the work.

{{< gridtable >}}
columns:
  - head: "Somebody says"
    width: 44%
  - head: "Better version"
rows:
  -
    - text: "\"Your program is rubbish.\""
    - key: p4_f1
      aria: "F1"
  -
    - text: "\"It didn't work.\""
    - key: p4_f2
      aria: "F2"
  -
    - text: "\"You always take too long.\""
    - key: p4_f3
      aria: "F3"
  -
    - text: "\"Yeah, it's fine I guess.\""
    - key: p4_f4
      aria: "F4"
{{< /gridtable >}}

### Who is the end user?

{{< gridtable >}}
columns:
  - head: "For this project, the end user is..."
    width: 62%
  - head: "Who"
rows:
  -
    - text: "A robot that sorts recycling in your classroom"
    - key: p4_u1
      aria: "U1"
  -
    - text: "A quiz timer for your teacher's lessons"
    - key: p4_u2
      aria: "U2"
  -
    - text: "The claw you built in Project 7"
    - key: p4_u3
      aria: "U3"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_est
  label: "I know my team tends to guess low, and by roughly how much"
- key: p4_can_time
  label: "I can build a timeline with an order, times, and names"
- key: p4_can_dep
  label: "I can spot which step is holding up the others"
- key: p4_can_late
  label: "I say I am going to be late before the deadline, not after"
- key: p4_can_give
  label: "I can give feedback that is specific and about the work"
- key: p4_can_take
  label: "I can hear feedback without defending straight away"
- key: p4_can_user
  label: "I ask the end user before I build, not after"
{{< /checklist >}}

### Think about it
{{< ask key="p4_why_persist" label="Why it persists" >}}Your team guessed low in Try It and probably guessed low again on the timeline. Why does knowing about the problem not fix it?{{< /ask >}}
{{< ask key="p4_week_earlier" label="A week earlier" >}}A teammate tells you at the deadline that they have not started. What could your team have done differently a week earlier?{{< /ask >}}
{{< ask key="p4_bad_idea" label="Bad idea" >}}Your end user asked for something you think is a bad idea. What do you do?{{< /ask >}}

### Next

That is the Systems strand finished. You have taken a machine apart, designed for a real problem, built the arm your robot needed, worked out how machines talk, protected what is yours, and learnt to work with people.

Everything from here is the **Coding strand** --- and every gate is now open.

*Take your team goals from Project 13 back out and see how many you have met.*
