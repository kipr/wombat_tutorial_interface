---
title: "Unit 5 · Big Idea 3 — Backing Up Your Work"
short_title: "Python 5.3"
hub_unit: 5
description: "Version control from scratch — create a GitHub account, a licensed repository, and understand push/pull, browser-first and from the command line."
weight: 260
nav: python
track: python
type: labs
mission_id: unit5_bigidea3
eyebrow: "Unit 5 · Big Idea 3"
heading: "Backing Up Your Work"
subheading: "Student Lab · Getting Your Library onto GitHub"
credit: "KIPR · Botball Explorer · Unit 5 Big Idea 3 — Student Lab"
meta:
  - term: "Unit Guiding Question"
    definition: "How can a machine operate reliably in an imperfect world?"
  - term: "Big Idea"
    definition: "A Reliable System Keeps a Recoverable History"
  - term: "AI Literacy Thread"
    definition: "A robust workflow doesn't trust one file on one computer — it keeps a recoverable history of every change, and lets others build on it safely."
  - term: "CS1 Concepts"
    definition: "[[VERSION CONTROL|Version Control]] · Repositories · [[COMMIT|Commits]] · Push / Pull · Software Licensing"
  - term: "Game Context"
    definition: "N/A — this lab is about your development workflow, not a mission run"
  - term: "What You Need"
    definition: "A computer with a web browser and internet access · an email address · your [[LIBRARY|library]] file, downloaded from the [[IDE|IDE]] · this lab sheet"
---

## Overview

Right now, your library — every [[FUNCTION|function]] you've written across every lab — lives in exactly one place: the IDE. If that IDE account is lost, if a Chromebook gets wiped, if you simply want to work on your code somewhere else, your work is gone unless you've backed it up. Today you're going to give your library a permanent, recoverable home using **GitHub**, the tool almost every professional software team on Earth uses to store and share code.

{{% callout title="The Big Idea of This Unit" %}}
A reliable system doesn't depend on one fragile copy of anything. It keeps a history it can recover from — the same reason your pose [[LIST|list]] kept a record of belief in Big Idea 1, GitHub keeps a record of every version of your code.
{{% /callout %}}

### By the end of this activity you will be able to:

- Create a GitHub account.
- Create a [[REPOSITORY|repository]], including a README and an open-source license.
- Upload a file to a repository using only a web browser.
- Explain, in your own words, what "push" and "pull" mean.
- Describe how a developer pushes a change from the command line.
{.obj}

## Phase 1 — Get Your Library Off the IDE

Before you can back anything up, you need a copy of it on your own computer.

1. In the KISS IDE, click the **Files** page at the top of the screen.
2. Find your library file (`yourname.h`) in the file list.
3. Download it. It should land in your computer's **Downloads** folder.
4. Confirm you can find it — open your Downloads folder and check the file is really there before moving on.
{.steps}

{{< ask key="p1_filename" label="Downloaded filename" >}}Where did the file end up, and what is it named? (Write the exact filename — you'll need it in a few minutes.){{< /ask >}}

## Phase 2 — Create a GitHub Account

1. Go to **github.com** and click **Sign up**.
2. Enter an email address you can actually check, and create a password.
3. Choose a **username**. Pick something professional — future employers and college programs can see this. Avoid a nickname you'll be embarrassed by in five years.
4. Verify your email if GitHub asks you to (check your inbox for a confirmation link or code).
{.steps}

{{% callout title="Why this matters beyond today" variant="gold" %}}
A GitHub account is something you'll likely keep for your entire career. Many software job applications ask for your GitHub username directly.
{{% /callout %}}

{{< gridtable caption="Your account" >}}
columns:
  - head: ""
    width: 35%
  - head: ""
rows:
  - - text: GitHub username
    - key: p2_username
{{< /gridtable >}}

## Phase 3 — Create a Repository

A **repository** (or "repo") is a project's folder on GitHub — it holds your files and every past version of them.

1. Click the **+** icon near the top right of GitHub, then **New repository**.
2. Name it something clear, like `wombat-library` or `yourname-botball`.
3. Choose **Public** (so it also works as something to show off later) or **Private**, if you'd rather keep it to yourself for now.
4. Check the box for **Add a README file**.
5. Under **Choose a license**, select **MIT License**.
6. Click **Create repository**.
{.steps}

{{< concept "What is the MIT License actually saying?" >}}
- text: |
    A license is a set of rules for what other people are legally allowed to do with your code — you ran into this idea in Unit 3's "Whose Code Is It?" extension. The **MIT License** is one of the most permissive licenses that exists: anyone can use your code, modify it, or even sell something built on it — the one condition is they have to keep your name credited somewhere. It's a popular choice for student and open-source projects because it puts almost no restrictions on how your work gets used.
{{< /concept >}}

{{< ask key="p3_license" label="License reasoning" >}}Why might a license matter for a file you're about to make public on the internet? What could go wrong if you skipped adding one entirely?{{< /ask >}}

{{< gridtable caption="Your repository" >}}
columns:
  - head: ""
    width: 35%
  - head: ""
rows:
  - - text: Repository name
    - key: p3_reponame
  - - text: Repository URL
    - key: p3_repourl
      placeholder: "https://github.com/yourusername/your-repo"
{{< /gridtable >}}

## Phase 4 — Upload Your File (No Terminal Needed)

You don't need any special software to get a file onto GitHub. This path works on any computer, including school Chromebooks.

1. Open your new repository's page on GitHub.
2. Click **Add file**, then **Upload files**.
3. Drag your `yourname.h` file from your Downloads folder into the browser window — or click **choose your files** and select it.
4. Scroll down and click **Commit changes**. This is the moment your file actually becomes part of the repository's history.
5. Refresh the page and confirm you can see your file listed.
{.steps}

{{< ask key="p4_backup" label="Backup reasoning" >}}Your library file now exists in two places. What are they, and what happens to the GitHub copy if your school Chromebook is wiped tomorrow?{{< /ask >}}

## Phase 5 — Concept: Push and Pull

{{< concept "Two copies, one project" >}}
- text: |
    Once you're working with GitHub for real, your project usually exists in two places at once: a **remote** copy (living on GitHub's servers) and a **local** copy (living on your own computer). Those two copies need a way to stay in sync.

    **Push** sends changes from your local copy *up* to the remote. **Pull** brings changes from the remote *down* to your local copy. Think of the remote as the single source of truth everyone agrees on, and push/pull as the two directions you move information relative to it.

    When you uploaded your file through the browser in Phase 4, you technically just performed a push — GitHub's website did it for you with no separate command needed. That's the easy path. Most real software teams instead work with a **local** copy of the repo on their own machine using a tool called **git**, which makes push and pull explicit commands they run themselves.
{{< /concept >}}

{{< ask key="p5_pushpull" label="Push and pull concept" >}}In your own words: what's the difference between push and pull? If two teammates are both editing the same repo, why would they each need to pull before they start working?{{< /ask >}}

## Phase 6 — How Push Actually Works on the Command Line

{{% warn title="⚠ You probably can't run this at school" %}}
Most school Chromebooks don't give you a terminal or let you install `git`. That's completely normal — this phase is for understanding what's happening under the hood, not something you need to complete hands-on today. If you have a laptop at home with git installed, feel free to actually try it.
{{% /warn %}}

Here's the sequence a developer runs from a terminal to get a local change onto GitHub:

{{< code filename="terminal" lang="bash" >}}
# one-time setup: copy the remote repo down to your computer
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# ...edit yourname.h in a text editor...

# Stage the change to tell git which files to include.
git add yourname.h

# Commit to save a labeled snapshot of that change locally.
git commit -m "Added the pose list functions"

# Push to send that commit to GitHub.
git push

# Pull anyone else's commits before you start editing again.
git pull
{{< /code >}}

Notice this is the exact same push/pull idea from Phase 5 — just as explicit typed commands instead of browser buttons. `git add` and `git commit` happen entirely on your computer; nothing reaches GitHub until `git push` actually runs.

{{< ask key="p6_walkthrough" label="Command walkthrough" >}}Walk through what each of the five commands above does, in order, in your own words.{{< /ask >}}

## Phase 7 — Connect & Reflect

{{% callout title="AI Literacy Thread" %}}
A robust workflow doesn't trust one file on one computer — it keeps a recoverable history of every change, and lets others build on it safely.
{{% /callout %}}

Every serious software project — the operating system on your phone, the app you use to message friends, the code running self-driving cars — is built this way: many people push and pull changes to a shared, recoverable history, instead of emailing files back and forth and hoping nothing gets overwritten. The license you added in Phase 3 is part of that same reliability story — it's what lets other people build on your work with confidence, instead of guessing whether they're allowed to.

Complete the reflection on your own.
{.muted}

{{< namebar >}}

{{< ask key="p7_q1_repo" label="Reflection 1" n=1 >}}What is a repository, and how is it different from just a folder on your own computer?{{< /ask >}}

{{< ask key="p7_q2_license" label="Reflection 2" n=2 >}}What does the MIT License let other people do with your code, and what's the one thing it requires of them?{{< /ask >}}

{{< ask key="p7_q3_pushpull" label="Reflection 3" n=3 >}}Explain push and pull to someone who has never heard either term.{{< /ask >}}

{{< ask key="p7_q4_complete" label="Reflection 4" n=4 >}}Complete in 2–3 sentences: "A reliable system keeps a recoverable history instead of trusting one copy. For my own code, this means..."{{< /ask >}}

## Extension Challenges

Finished early? Try one or more of these.
{.muted}

### Extension A — Write a Real README

- Edit your repository's README file to actually describe your library: what functions it has, and what each one does. Would a stranger be able to understand your code from the README alone?

{{< answer key="ext_a" label="Extension A" >}}

### Extension B — Make a Second Commit

- Edit your uploaded file directly on GitHub (click the pencil icon), change something small, and commit again with a clear commit message. Then look at your repository's "commits" history — can you see both versions?

{{< answer key="ext_b" label="Extension B" >}}

### Extension C — Try It From Home

- If you have a computer at home, install git, and actually run the `clone` / `add` / `commit` / `push` sequence from Phase 6 for real. What was different about doing it for real versus reading about it?

{{< answer key="ext_c" label="Extension C" >}}

### Extension D — Who's Left Out?

- Not every student has a home computer, reliable internet, or money for paid tools professionals use. If a class assignment required GitHub, a paid IDE, or a fast home computer, who would that leave out?
- What social or economic factors affect who gets to become a programmer? Who's missing from the room when software gets built, and what effect might that have on what gets built?

{{< answer key="ext_d" label="Extension D" >}}

### Extension E — Ethical Use and the Rules

- If you found someone else's code on GitHub with no license at all, would it be ethical to copy it into your own project without asking? What does your school's Acceptable Use Policy say about copying digital work?
- Should there be a law requiring all public code to have a license, or should it be left up to each programmer? Give your position and one reason.
- GitHub connects programmers across the entire world, not just your classroom. How might a tool like this change who you could realistically collaborate with on a project, compared to before it existed?

{{< answer key="ext_e" label="Extension E" >}}

### Extension F — Talking to a Server

- When you pushed (or uploaded through the browser), your file traveled over the internet to GitHub's servers, potentially thousands of miles away. What has to go right for that to work reliably — address routing, server uptime, your own connection?
- What would happen to millions of programmers worldwide if GitHub's servers went down for a day? Why do large services like GitHub use many servers instead of just one?

{{< answer key="ext_f" label="Extension F" >}}

### Extension G — Secret Messages

- When you log into GitHub, your password travels over the internet — but not as plain, readable text. Look up what "HTTPS" stands for and why the "s" matters.
- In your own words, why is it risky to type a password into a site that only uses "HTTP" without the "s"?

{{< answer key="ext_g" label="Extension G" >}}

### Extension H — Find the Community

- GitHub isn't just storage — it's a community. Public repos can get "stars" from people who find them useful, and anyone can open an "Issue" to suggest an improvement or report a problem.
- Search for 2-3 real public student or hobbyist robotics repositories on GitHub (try "wombat robot" or "botball"). What's one thing you could learn from how someone else organized or documented their project?

{{< answer key="ext_h" label="Extension H" >}}
