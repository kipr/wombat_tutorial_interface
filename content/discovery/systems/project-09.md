---
title: "Systems Project 9 — Sending Messages"
short_title: "Systems Project 9"
linkTitle: "Sending Messages"
description: "Senders, distributors, and receivers. Common protocols, and writing a message only your partner can read."
weight: 9
nav: discovery
mission_id: discovery_systems_09
mission_title: "Systems Project 9 — Sending Messages"
styles: ["site-base", "worksheet", "syntax", "discovery", "print"]
project_number: 9
strand: systems
phase: "Phase C · How Machines Talk"
phase_order: 3
time: "One class period"
pace:
  kind: anytime
  label: "Any time"
eyebrow: "Discovery · Systems Project 9"
heading: "Sending Messages"
subheading: "Take it apart. Push it through a tube. Put it back together at the other end."
credit: "KIPR · Botball Explorer · Discovery"
sidebar:
  title: "Activity Sections"
  start_level: 2
  end_level: 2
  numbered: false
meta:
  - term: "Project"
    definition: "Systems Project 9"
  - term: "Strand"
    definition: "Systems"
  - term: "Phase"
    definition: "How Machines Talk"
  - term: "Time"
    definition: "One class period"
  - term: "What You Are Doing"
    definition: "Sending a picture through a tube one piece at a time, working out the rules that make it reassemble, then hiding a message so only the right person can read it."
  - term: "Strand Link"
    definition: "Any time"
  - term: "Before You Start"
    definition: "Systems Project 8. You should know what input and output mean."
  - term: "What You Need"
    checklist:
      - key: need_1
        label: "A picture or small puzzle to cut up"
      - key: need_2
        label: "Empty kitchen-roll tubes"
      - key: need_3
        label: "Coloured paper"
      - key: need_4
        label: "Scissors"
      - key: need_5
        label: "Your notebook"
---

## Try It --- It Will Not Fit Through the Tube

Take a picture. Try to pass it to your partner through a kitchen-roll tube.

It does not fit. So cut it into small pieces and send them one at a time.

Your partner cannot see the pieces coming and must put the picture back together at the other end.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 52%
  - head: "My answer"
rows:
  -
    - text: "How many pieces did you send?"
    - key: p1_pieces
      aria: "How many pieces"
  -
    - text: "How long did it take to rebuild?"
    - key: p1_time
      aria: "Rebuild time"
  -
    - text: "Did any piece end up in the wrong place?"
    - key: p1_wrong
      aria: "Wrong place"
{{< /gridtable >}}

### Now make it easier

Mix the pieces up and do it again. But first, agree on **one rule** that will make rebuilding faster.
{{< short-answer key="p1_rule" label="Our rule" prompt="Our rule:" >}}

{{< gridtable >}}
columns:
  - head: "Round"
    width: 40%
  - head: "Time to rebuild"
    width: 30%
  - head: "Pieces in the wrong place"
rows:
  -
    - text: "First try, no rule"
    - key: p1_r1_t
      aria: "Round 1 time"
    - key: p1_r1_w
      aria: "Round 1 wrong"
  -
    - text: "Second try, with our rule"
    - key: p1_r2_t
      aria: "Round 2 time"
    - key: p1_r2_w
      aria: "Round 2 wrong"
{{< /gridtable >}}

{{< callout variant="gold" title="You Just Invented a Protocol" >}}
Most groups end up numbering the pieces. That is a rule both ends agreed on before sending anything, and it is the only reason the picture came back together.

Computers do exactly this, millions of times a second.
{{< /callout >}}

## Learn It --- Packets, Rules, and Secrets

Big things do not travel well. So computers chop information into small pieces called [[PACKET|packets]], send them separately, and rebuild them at the far end.

A [[PROTOCOL|protocol]] is the set of rules both ends agreed on beforehand --- how to number the packets, what to do if one goes missing, how to know when the message is complete.

{{< callout variant="navy" title="Packets Do Not Travel Together" >}}
Pieces of the same picture can take different routes and arrive out of order. They can even arrive after pieces of somebody else's picture.

The protocol is what sorts that out. Without it, everything is just a pile.
{{< /callout >}}

### HTTP and HTTPS

When you load a web page, your computer uses a protocol called **HTTP** --- Hypertext Transfer Protocol. It is the agreement that lets any browser talk to any web server.

You will more often see **HTTPS**. The extra **S** stands for **secure**. It means the browser is using a **protected connection** to the website --- the packets are scrambled so people along the way cannot easily read them.

{{< callout variant="red" title="⚠ How to Check Before You Type Anything Private" >}}
Look at the start of the address. Prefer addresses that begin with `https://`.

A browser might also show a **connection** or **site-controls** icon near the address. It may look like a padlock --- or it may not. Different browsers show this differently, so do not hunt for one special picture.

If the browser says **Not secure** or shows a warning, **stop**. Ask a trusted adult before you enter a password, address, or other private information.

HTTPS protects the **connection**. It does **not** mean everything on the page is true or safe.
{{< /callout >}}

### Encryption

[[ENCRYPTION|Encryption]] scrambles a message so that only the intended reader can unscramble it.

The scrambling follows a rule, and that rule is the [[KEY|key]]. Whoever has the key can read the message. Whoever does not, cannot.

Here is a simple key. Every letter shifts three places along the alphabet.

| plain | A | B | C | D | E | F | G | H | I | J | K | L | M |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| coded | D | E | F | G | H | I | J | K | L | M | N | O | P |
| plain | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| coded | Q | R | S | T | U | V | W | X | Y | Z | A | B | C |

*Notice the end wraps round: X becomes A, Y becomes B, Z becomes C.*

## Do It --- Send It, Sort It, Hide It

### 1. Three groups, three jobs

Your class splits into senders, distributors, and receivers. Each sender has a different colour of paper, cut into twelve numbered pieces.

#### Senders

Push your pieces through the tube, one at a time, into the middle.

Do not hand them to anybody.

#### Distributors

Take each piece from the pile and work out who it belongs to.

Send it down that receiver's tube.

#### Receivers

Collect what comes out of your tube.

Rebuild your sheet in number order.

{{< checklist >}}
- key: p3_ran
  label: "Every receiver rebuilt their whole sheet"
{{< /checklist >}}
{{< ask key="p3_how_known" label="How distributors knew" >}}How did the distributors know where each piece belonged?{{< /ask >}}

### 2. Break it on purpose

Run it again, but this time the senders use paper that is **all the same colour**.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 52%
  - head: "My answer"
rows:
  -
    - text: "Could the distributors still sort the pieces?"
    - key: p3_b_sort
      aria: "Could sort"
  -
    - text: "What information was missing?"
    - key: p3_b_missing
      aria: "Missing info"
  -
    - text: "What would you add to each piece to fix it?"
    - key: p3_b_fix
      aria: "Fix"
{{< /gridtable >}}

{{< callout variant="gold" title="Every Real Packet Carries an Address" >}}
The colour was doing the job an address does. A real packet says who it is for, who it came from, and where it belongs in the message.
{{< /callout >}}

### 3. Lose one on purpose

Run it once more. This time a distributor quietly drops one piece on the floor.
{{< ask key="p3_lost" label="Noticed the loss" >}}Did the receiver notice? How?{{< /ask >}}
{{< short-answer key="p3_lost_fix" label="What to do" prompt="What should the receiver do about a missing piece?" >}}

*Real protocols do exactly what you just suggested. The receiver asks for that packet again.*

### 4. Go and look at real protocols

Open a browser. Look at the address bar on several sites, including the KIPR site.

{{< gridtable >}}
columns:
  - head: "Site"
    width: 46%
  - head: "HTTP or HTTPS?"
    width: 22%
  - head: "Looks protected? (icon / warning)"
rows:
  -
    - key: p3_w1
      aria: "Site 1"
    - key: p3_w1_p
      aria: "Protocol 1"
    - key: p3_w1_l
      aria: "Lock 1"
  -
    - key: p3_w2
      aria: "Site 2"
    - key: p3_w2_p
      aria: "Protocol 2"
    - key: p3_w2_l
      aria: "Lock 2"
  -
    - key: p3_w3
      aria: "Site 3"
    - key: p3_w3_p
      aria: "Protocol 3"
    - key: p3_w3_l
      aria: "Lock 3"
  -
    - key: p3_w4
      aria: "Site 4"
    - key: p3_w4_p
      aria: "Protocol 4"
    - key: p3_w4_l
      aria: "Lock 4"
{{< /gridtable >}}
{{< short-answer key="p3_insecure" label="Insecure site" prompt="Did you find any that were not secure or showed a warning? What kind of site was it?" >}}

### 5. Decode this

Somebody sent you a message. Use the key from Learn It to read it.
NHHS BRXU SDVVZRUG VHFUHW{{< short-answer key="p3_decoded" label="Decoded message" prompt="The message says:" >}}

{{< gridtable >}}
columns:
  - head: "Question"
    width: 52%
  - head: "My answer"
rows:
  -
    - text: "Who was the sender and encrypter?"
    - key: p3_who_send
      aria: "Sender"
  -
    - text: "Who was the receiver and decoder?"
    - key: p3_who_recv
      aria: "Receiver"
  -
    - text: "Why does the key matter?"
    - key: p3_why_key
      aria: "Why key matters"
{{< /gridtable >}}

### 6. Make your own key

Invent your own way of scrambling letters. It does not have to be a shift --- swap pairs, reverse the alphabet, use symbols.
{{< ask key="p3_my_key" label="My key" >}}My key works like this:{{< /ask >}}
{{< short-answer key="p3_my_secret" label="My encrypted message" prompt="My short message, encrypted:" >}}

### 7. Trade and decode

Swap encrypted messages with a partner --- **and** swap keys. Decode theirs.
{{< short-answer key="p3_their_msg" label="Their message" prompt="Their message said:" >}}

{{< checklist >}}
- key: p3_decoded_ok
  label: "I decoded my partner's message correctly"
{{< /checklist >}}

### 8. Now try it without the key

Get a message from a different pair, but do **not** take their key. Try to crack it.

{{< gridtable >}}
columns:
  - head: "Question"
    width: 52%
  - head: "My answer"
rows:
  -
    - text: "Did you crack it?"
    - key: p3_cracked
      aria: "Cracked"
  -
    - text: "What did you try first?"
    - key: p3_tried
      aria: "What you tried"
  -
    - text: "Which letters gave the most away?"
    - key: p3_letters
      aria: "Telling letters"
{{< /gridtable >}}

{{< callout variant="red" title="⚠ Simple Keys Are Easy to Break" >}}
A letter shift can be cracked by trying all twenty-five of them. Real encryption uses keys so large that guessing them all would take longer than anyone has.

The idea is the same. The size is not.
{{< /callout >}}

## Score It --- Checkpoint

### Say what it means

{{< gridtable >}}
columns:
  - head: "Word"
    width: 26%
  - head: "In my own words"
rows:
  -
    - text: "Packet"
    - key: p4_d1
      aria: "Packet"
  -
    - text: "Protocol"
    - key: p4_d2
      aria: "Protocol"
  -
    - text: "Encryption"
    - key: p4_d3
      aria: "Encryption"
  -
    - text: "Key"
    - key: p4_d4
      aria: "Key"
  -
    - text: "The S in HTTPS"
    - key: p4_d5
      aria: "HTTPS"
{{< /gridtable >}}

### Quick decode

Same key as before. Shift each letter back three places.

{{< gridtable >}}
columns:
  - head: "Coded"
    width: 46%
  - head: "Says"
rows:
  -
    - text: "URERW"
    - key: p4_c1
      aria: "Decode 1"
  -
    - text: "VHQVRU"
    - key: p4_c2
      aria: "Decode 2"
  -
    - text: "SDFNHW"
    - key: p4_c3
      aria: "Decode 3"
{{< /gridtable >}}

### Can you do it again?

{{< checklist >}}
- key: p4_can_packet
  label: "I can explain why big messages get broken into packets"
- key: p4_can_proto
  label: "I can explain what a protocol is and why both ends need the same one"
- key: p4_can_addr
  label: "I can say what information a packet has to carry besides its contents"
- key: p4_can_https
  label: "I check for HTTPS before typing anything private"
- key: p4_can_encrypt
  label: "I can encrypt and decrypt a message using a key"
- key: p4_can_weak
  label: "I can explain why a simple key is not very safe"
{{< /checklist >}}

### Think about it
{{< ask key="p4_out_of_order" label="Out of order" >}}In the tube activity, the pieces arrived out of order and it still worked. Why is that better than insisting everything arrives in the right order?{{< /ask >}}
{{< ask key="p4_share_key" label="Sharing the key" >}}You had to share your key with your partner before they could read anything. If someone were listening, how would you get a key to them safely?{{< /ask >}}
{{< ask key="p4_partial" label="Partial program" >}}Your robot's program is a message from you to the Wombat. What would go wrong if part of it arrived and part of it did not?{{< /ask >}}

### Next

You have seen how easily a message can be read by somebody it was not meant for. Most of what you send every day is about you.

In **Systems Project 10 --- Guarding Your Information**, you find out what you are giving away and how to stop.
