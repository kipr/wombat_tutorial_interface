---
title: "Systems Project 10 — Guarding Your Information"
short_title: "Systems Project 10"
linkTitle: "Guarding Your Information"
description: "What counts as personal information, how someone would go looking for yours, phishing, and passwords worth having."
weight: 10
nav: discovery
mission_id: discovery_systems_10
mission_title: "Systems Project 10 — Guarding Your Information"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 10
strand: systems
phase: "Phase D · You and the Digital World"
phase_order: 4
time: "One class period"
pace:
  kind: anytime
  label: "Any time"
eyebrow: "Discovery · Systems Project 10"
heading: "Guarding Your Information"
subheading: "It takes fewer clues than you think to work out who someone is."
credit: "KIPR · Botball Explorer · Discovery"
meta:
  - term: "Project"
    definition: "Systems Project 10"
  - term: "Strand"
    definition: "Systems"
  - term: "Phase"
    definition: "You and the Digital World"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Working out what counts as private, where it leaks out, how people try to trick you into handing it over, and how to build a [[PASSWORD|password]] worth having."
  - term: "Strand Link"
    definition: "Any time"
  - term: "Before You Start"
    definition: "Systems Project 9. You should know what [[ENCRYPTION|encryption]] is and why HTTPS matters."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "Your notebook"
      - key: need_2
        label: "A pencil"
      - key: need_3
        label: "A partner"
      - key: need_4
        label: "A large sheet of paper for the class chart"
---

## Try It — How Many Clues Does It Take?

Your teacher is going to describe somebody in a story — not anyone in the room — one clue at a time.

Put your hand up the moment you think you could pick that person out of a crowd. Then count how many clues it took.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 56%
  - head: "My answer"
rows:
  -
    - text: "How many clues before I was sure?"
    - key: p1_clues
      aria: "Number of clues"
  -
    - text: "Which clue narrowed it down the most?"
    - key: p1_biggest
      aria: "Biggest clue"
  -
    - text: "Was any single clue enough on its own?"
    - key: p1_single
      aria: "Single clue enough"
{{< /gridtable >}}

{{% callout variant="gold" title="No Single Clue Gave It Away" %}}
Hair colour on its own tells you almost nothing. Neither does a town, or a school, or a birthday.

Put four of them together and there is usually only one person left. **That is how information about you works.** Each piece looks harmless on its own.
{{% /callout %}}

### Sort it yourself

Which of these would you happily tell a stranger, and which would you not?

{{< gridtable >}}
columns:
  - head: "This information"
    width: 44%
  - head: "Fine to share?"
    width: 24%
  - head: "Why"
rows:
  -
    - text: "My favourite colour"
    - key: p1_s1
      aria: "Colour share"
    - key: p1_s1_w
      aria: "Colour why"
  -
    - text: "The name of my school"
    - key: p1_s2
      aria: "School share"
    - key: p1_s2_w
      aria: "School why"
  -
    - text: "My birthday"
    - key: p1_s3
      aria: "Birthday share"
    - key: p1_s3_w
      aria: "Birthday why"
  -
    - text: "A photo of my street"
    - key: p1_s4
      aria: "Street share"
    - key: p1_s4_w
      aria: "Street why"
  -
    - text: "My favourite animal"
    - key: p1_s5
      aria: "Animal share"
    - key: p1_s5_w
      aria: "Animal why"
{{< /gridtable >}}
{{< ask key="p1_riskier" label="Riskier ones" >}}Two of those are riskier than they look. Which two, and what could someone work out from them?{{< /ask >}}

## Learn It — What to Keep, and How

[[PERSONAL INFORMATION|Personal information]] is anything that could be used to work out who you are, where you are, or how to reach you.
Usually safe to share
*Things that describe your taste, not your life*

{{< answer key="p2_safe" label="Safe information" placeholder="Favourite ice cream, favourite animal, favourite colour…" >}}
Keep to yourself
*Things that lead someone to you*

{{< answer key="p2_unsafe" label="Unsafe information" placeholder="Address, phone number, date of birth, passwords…" >}}

### Four rules that cover most of it

- Share private things only with people you **actually know and trust**.
- Never post anything you would mind being seen by everybody.
- Do not over-share. Fewer clues is always safer.
- **Do not post where you are.** Not your address, and not a photo that shows it.

{{% callout variant="navy" title="The Internet Does Not Forget" %}}
Something deleted has usually already been copied, saved, or screenshotted by somebody. The safest moment to protect information is *before* you post it.
{{% /callout %}}

### Phishing

[[PHISHING|Phishing]] is when a message pretends to be from someone you trust so that you hand over information without thinking.

It usually looks like an email or a message from a real company, a game, or even a friend. The signs are nearly always the same.

{{< gridtable >}}
columns:
  - head: "Warning sign"
    width: 40%
  - head: "Why it works"
rows:
  -
    - text: "\"Act now or your account closes\""
    - text: "Panic stops people checking"
  -
    - text: "\"You have won a prize\""
    - text: "Excitement stops people checking"
  -
    - text: "Asks for a password or a code"
    - text: "No real company ever does this"
  -
    - text: "Spelling mistakes, odd address"
    - text: "Real companies proofread"
  -
    - text: "A link that looks nearly right"
    - text: "One changed letter is easy to miss"
{{< /gridtable >}}

{{% callout variant="red" title="⚠ The One Rule That Always Works" %}}
If a message asks for private information, **do not answer it** — even if it looks real. Show it to a parent or your teacher instead.

You will never get in trouble for checking with an adult first.
{{% /callout %}}

### Passwords

A [[PASSWORD|password]] is the lock on everything else. A weak one takes seconds to guess.

**These are practice examples only. Never reuse them for a real account.**

- `12345` — *weak:* Short and everyone tries it first.
- `password` — *weak:* Another guess people try immediately.
- `Rufus2015` — *weak:* A pet name and a year someone could look up about you.
- `correct-horse-battery-staple` — *stronger example:* A long, memorable **passphrase** made of unrelated words. Length and uniqueness matter more than sprinkling in a single symbol.

What makes a password or passphrase stronger for you:

- **Longer is usually stronger.** A memorable phrase with several words is easier to remember and harder to guess than a short word with one number stuck on.
- **Unique matters.** Do not reuse one password everywhere. One break-in can then open everything else.
- **Ask a trusted adult** before choosing passwords for school or shared accounts. A **password manager** (with an adult's help) can store long unique secrets so you do not have to memorize dozens.
- **Extra checks help.** Many accounts offer a second step after the password (a code, an app prompt, or another check). That second step is often called multifactor authentication — it means a stolen password alone is not enough.

Do **not** invent, type, exchange, or guess a password you actually use. This lesson only uses clearly marked fictional examples.

{{% callout variant="red" title="⚠ This Includes Your Robot" %}}
Your Wombat has a password. Do not share it outside your team unless your teacher says so. Somebody with it could change or delete every program you have written.
{{% /callout %}}

## Do It — Find the Leaks

### 1. Where does information get out?

As a class, list the places and moments where somebody might get information about you. Write down five here.

{{< gridtable >}}
columns:
  - head: "Where or when"
    width: 44%
  - head: "What could be given away"
rows:
  -
    - key: p3_l1
      aria: "Leak 1"
    - key: p3_l1_w
      aria: "Leak 1 what"
  -
    - key: p3_l2
      aria: "Leak 2"
    - key: p3_l2_w
      aria: "Leak 2 what"
  -
    - key: p3_l3
      aria: "Leak 3"
    - key: p3_l3_w
      aria: "Leak 3 what"
  -
    - key: p3_l4
      aria: "Leak 4"
    - key: p3_l4_w
      aria: "Leak 4 what"
  -
    - key: p3_l5
      aria: "Leak 5"
    - key: p3_l5_w
      aria: "Leak 5 what"
{{< /gridtable >}}

*Most classes end up with: someone asking you directly, shopping sites, social media, any site with a login, and photos that show more than you meant.*

### 2. Write the class definition of phishing

On your own first, without looking back: what do you think phishing is?

{{< answer key="p3_phish_mine" label="My phishing definition" >}}

Now compare with a partner, then agree one definition as a class.
{{< ask key="p3_phish_class" label="Class phishing definition" >}}Our class definition:{{< /ask >}}

### 3. Spot the fake

For each message, decide whether it is safe or phishing, and say what gave it away.

{{< gridtable >}}
columns:
  - head: "The message says"
    width: 46%
  - head: "Safe or phishing?"
    width: 20%
  - head: "What gave it away"
rows:
  -
    - text: "\"Your game account will be deleted in 24 hours unless you confirm your password here.\""
    - key: p3_f1
      aria: "Fake 1"
    - key: p3_f1_w
      aria: "Fake 1 why"
  -
    - text: "\"Hi, this is your school. Parents evening is on Thursday at 6pm.\""
    - key: p3_f2
      aria: "Fake 2"
    - key: p3_f2_w
      aria: "Fake 2 why"
  -
    - text: "\"CONGRATULATIONS!! You are our 1000th visiter! Click to claim your free tablet.\""
    - key: p3_f3
      aria: "Fake 3"
    - key: p3_f3_w
      aria: "Fake 3 why"
  -
    - text: "\"Hey it's me, I lost my phone — what's your address again? I'll come round.\""
    - key: p3_f4
      aria: "Fake 4"
    - key: p3_f4_w
      aria: "Fake 4 why"
{{< /gridtable >}}
{{< ask key="p3_known_sender" label="Known sender" >}}The last one comes from someone you know. Does that make it safe?{{< /ask >}}

### 4. Compare fictional passwords (do not invent a real one)

**Do not write a password you actually use.** Do not invent one to save, swap, or guess with a partner.

Use only these **fictional classroom examples** (never reuse them):

| Example | Notes |
| --- | --- |
| `kit` | Very short |
| `BlueSky` | Short and easy to guess |
| `orange-river-candle-maple` | Longer memorable passphrase |

Talk with a partner about the examples above — without typing any real secret.

{{< gridtable >}}
columns:
  - head: "Check (about the fictional examples)"
    width: 56%
  - head: "Yes or no"
rows:
  -
    - text: "Is the longest example clearly longer than the short ones?"
    - key: p3_pw_len
      aria: "Length check"
  -
    - text: "Could somebody who knows you still guess a short example like BlueSky?"
    - key: p3_pw_guess
      aria: "Guess check"
  -
    - text: "Would reusing one short example on every site be risky?"
    - key: p3_pw_unique
      aria: "Unique check"
{{< /gridtable >}}

*A trusted adult or a password manager can help store long unique passwords. A second login check (multifactor authentication) adds another layer when it is available.*

### 5. What would you do?

Work through these with a partner. There is no trick — just say what you would do and why.

#### Scenario 1

You are at the library with a parent. A member of staff walks over and asks for your birthday. What do you do?

{{< short-answer key="p3_sc1" label="Scenario 1" >}}

#### Scenario 2

You left your lunch at home again. Your teacher asks for your parent's mobile number so they can call. What do you do?

{{< short-answer key="p3_sc2" label="Scenario 2" >}}

#### Scenario 3

A free game site at school asks for your address. It says the field is optional. What do you do?

{{< short-answer key="p3_sc3" label="Scenario 3" >}}

#### Scenario 4

You need a password for a school blog. You are thinking of using 12345. Is that a good idea?

{{< short-answer key="p3_sc4" label="Scenario 4" >}}

#### Scenario 5

Someone in your group says they know how to switch off the school's firewall to reach a blocked site. What do you do?

{{< short-answer key="p3_sc5" label="Scenario 5" >}}

#### Scenario 6

A family member has left their account logged in on a shared computer and has gone out. What do you do?

{{< short-answer key="p3_sc6" label="Scenario 6" >}}

#### Scenario 7

You need a new password but you already have one you remember. You know you should not reuse it. What do you do?

{{< short-answer key="p3_sc7" label="Scenario 7" >}}

{{% callout variant="gold" title="Two of Those Are About Trust, Not Rules" %}}
Scenarios 1 and 2 both involve an adult asking for real information — and the answers are different. Working out *why* they are different is the whole point.
{{% /callout %}}
{{< short-answer key="p3_disagree" label="Disagreed scenario" prompt="Which scenario did you and your partner disagree on?" >}}

### 6. Match the locks

Every [[DIGITAL|digital]] protection has a real-world twin. Match them up.

{{< gridtable >}}
columns:
  - head: "In the real world"
    width: 46%
  - head: "The digital version is…"
rows:
  -
    - text: "A key on your front door"
    - key: p3_m1
      aria: "Match 1"
  -
    - text: "A fence with a gate and a guard"
    - key: p3_m2
      aria: "Match 2"
  -
    - text: "A spare copy of your photos at your grandparents' house"
    - key: p3_m3
      aria: "Match 3"
  -
    - text: "Shredding old letters before you bin them"
    - key: p3_m4
      aria: "Match 4"
  -
    - text: "Writing a note in a code only your friend knows"
    - key: p3_m5
      aria: "Match 5"
{{< /gridtable >}}
{{< short-answer key="p3_own_match" label="Own match" prompt="Add one of your own — a real-world protection and its digital twin." >}}

### 7. Protect your own work

Everything you have built this season is worth protecting too.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 56%
  - head: "My answer"
rows:
  -
    - text: "Where is my [[LIBRARY|library]] file backed up?"
    - key: p3_backup
      aria: "Backup"
  -
    - text: "Who outside my team knows the robot's password?"
    - key: p3_who_knows
      aria: "Who knows"
  -
    - text: "If the Wombat were wiped today, what would I lose?"
    - key: p3_lose
      aria: "What I'd lose"
{{< /gridtable >}}

{{< checklist >}}
- key: p3_backed
  label: "My code is saved somewhere other than the robot"
- key: p3_pwsafe
  label: "Our robot's password is not written anywhere public"
{{< /checklist >}}

## Score It — Checkpoint

### Share or keep?

{{< gridtable >}}
columns:
  - head: "Someone online asks for…"
    width: 62%
  - head: "Share or keep?"
rows:
  -
    - text: "Your favourite band"
    - key: p4_a1
      aria: "A1"
  -
    - text: "Your home address"
    - key: p4_a2
      aria: "A2"
  -
    - text: "The password to your school account"
    - key: p4_a3
      aria: "A3"
  -
    - text: "Your favourite kind of pizza"
    - key: p4_a4
      aria: "A4"
  -
    - text: "A photo of you outside your house with the number showing"
    - key: p4_a5
      aria: "A5"
{{< /gridtable >}}

### Strong or weak?

{{< gridtable >}}
columns:
  - head: "Password"
    width: 40%
  - head: "Strong or weak?"
    width: 22%
  - head: "Why"
rows:
  -
    - text: "qwerty"
    - key: p4_p1
      aria: "P1"
    - key: p4_p1_w
      aria: "P1 why"
  -
    - text: "Fluffy2014"
    - key: p4_p2
      aria: "P2"
    - key: p4_p2_w
      aria: "P2 why"
  -
    - text: "orange-river-candle-maple (fictional example — never reuse)"
    - key: p4_p3
      aria: "P3"
    - key: p4_p3_w
      aria: "P3 why"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_pi
  label: "I can tell safe information from private information"
- key: p4_can_add
  label: "I understand that harmless clues add up to something that is not harmless"
- key: p4_can_phish
  label: "I can spot the warning signs of a phishing message"
- key: p4_can_ask
  label: "I know to check with an adult instead of replying"
- key: p4_can_pw
  label: "I can explain what makes a password or passphrase stronger (length, uniqueness) without inventing a real one"
- key: p4_can_reuse
  label: "I know why reusing one password everywhere is risky"
- key: p4_can_protect
  label: "I have protected my own code and my robot"
{{< /checklist >}}

### Think about it
{{< ask key="p4_one_thing" label="Just one thing" >}}In Try It, no single clue identified anyone. Why does that make sharing "just one small thing" harder to judge than it sounds?{{< /ask >}}
{{< ask key="p4_feelings" label="Why feelings work" >}}A phishing message works by making you feel something — panic, excitement, sympathy. Why do those feelings make people skip checking?{{< /ask >}}
{{< ask key="p4_tradeoff" label="Trade-off" >}}A longer unique passphrase is safer but harder to remember without help. What is the trade between safe and easy, and where would you draw the line?{{< /ask >}}

### Next

Protecting your own information is half of it. The other half is how you treat everybody else's.

In **Systems Project 11 — Living Well Online**, you look at what your words do once they leave your hands.
