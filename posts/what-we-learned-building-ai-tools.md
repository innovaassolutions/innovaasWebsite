---
title: "What We Learned Building AI Tools for Real Businesses"
date: "2025-01-15"
author: "Todd Abraham"
image: "/SpaceShip.webp"
slug: "what-we-learned-building-ai-tools"
---

Over the past year, we've been building AI-powered tools — FlowForge for workflow automation and NovaCRM for customer relationship management. I want to share some of what we've learned, not because we've figured it all out (we definitely haven't), but because the lessons keep surprising us and I think they're worth talking about.

Building AI tools for real businesses is a fundamentally different exercise than building AI demos. Demos are impressive. Products are useful. And the gap between those two things is wider than most people appreciate.

## AI Is Only as Good as the Process Around It

This was our first and hardest lesson. Early on, we built some genuinely clever AI features for FlowForge. Intelligent task routing, automated decision trees, predictive workflow optimization. Technically impressive stuff. And in testing, it worked beautifully.

Then we put it in front of real users with real workflows, and the results were... humbling.

The problem wasn't the AI. The problem was that most businesses don't have clean, well-defined processes to begin with. You can't intelligently route tasks if the rules for routing aren't clear. You can't optimize a workflow that nobody has actually mapped out. The AI was trying to improve something that didn't have a solid foundation.

So we took a step back. Before any AI feature kicks in, FlowForge now walks users through defining their process clearly. It sounds boring compared to "AI-powered automation," but it's the part that actually creates value. The AI makes it better. The process definition makes it work.

## Users Don't Care About the AI

This one took a while to fully internalize. When we talked to our early users about NovaCRM, we'd excitedly describe the AI capabilities — the intelligent lead scoring, the automated follow-up suggestions, the sentiment analysis on customer communications.

They'd nod politely and then ask: "But will it help me stop losing track of deals?"

That was the moment it clicked. Our users weren't looking for AI. They were looking for a CRM that actually worked for how their business operated. The AI was interesting to us as builders, but for the people using the tool every day, it was invisible plumbing. They cared about the outcome — fewer dropped balls, faster responses, better customer relationships — not the mechanism.

We restructured our entire product messaging around outcomes, not technology. "Never lose track of a deal" instead of "AI-powered pipeline management." "Know exactly when to follow up" instead of "machine learning-based engagement scoring." It seems obvious in retrospect, but when you're deep in the technology, it's easy to lose sight of what actually matters to the person on the other side.

## Start with the Problem, Not the Technology

Early in our development process, we'd have conversations that started with "What can we do with AI here?" We'd look at a feature area and brainstorm ways to add intelligence to it. Sometimes that led to useful things. More often, it led to features that were technically interesting but practically unnecessary.

The shift happened when we started every feature discussion with: "What problem are our users actually having?" and only then asked: "Could AI help solve this?"

For example, one of the most-loved features in NovaCRM isn't particularly sophisticated from an AI perspective. It reads incoming emails and automatically links them to the right contact and deal in the system. Technically, it's mostly pattern matching and entity extraction — not exactly cutting-edge. But it saves our users significant time every single day because they no longer have to manually file communications.

Meanwhile, a much more technically impressive feature — predictive deal scoring using historical conversion patterns — gets used far less frequently. It's a nice-to-have, not a must-have. If we'd built the product starting from the AI capabilities, we would have gotten the priorities exactly backwards.

## The Hardest Part Isn't the AI

I assumed, going into this, that the technical challenges of building AI features would be the hard part. Getting the models right, managing training data, handling edge cases in the AI's decision-making.

I was wrong. The hardest part is understanding how people actually work.

Every business thinks their processes are straightforward until you start mapping them. Then you discover the exceptions, the workarounds, the "oh, but when this happens, we do this instead" branches that nobody documented. Real business processes are messy, context-dependent, and full of implicit knowledge that experienced employees carry around in their heads.

Building AI tools that work in this reality means spending enormous amounts of time listening, observing, and asking questions. It means watching people do their work — not how they describe their work, but how they actually do it. The gap between those two things is always significant.

We've learned to budget more time for discovery and user research than for actual development. That ratio felt wrong initially, but the products that came out of deeper understanding were dramatically better than the ones we built on assumptions.

## What I'd Tell Someone Starting Now

If you're a business owner evaluating AI tools, here's what I'd want you to know based on what we've learned.

Be skeptical of tools that lead with the AI. The best AI-powered products don't need to advertise the AI — the value speaks for itself. If a vendor spends more time talking about their models than about your problems, that's a signal.

Look for tools that start with process. Any good AI tool should help you understand and define your current processes before it tries to improve them. If it just drops AI on top of whatever mess currently exists, it'll create more problems than it solves.

Ask about outcomes, not features. Instead of asking "does it have AI?" ask "how will this change my team's daily work?" and "how will I know if it's working?" Those questions cut through the hype faster than anything.

And be patient with yourself. Adopting new tools is hard, and AI-powered tools can be especially disorienting because they behave differently over time as they learn. Give your team space to adapt, provide feedback, and find their rhythm with the new way of working.

## We're Still Learning

I want to be honest: we don't have this all figured out. Every week, we learn something new about how businesses actually work and how AI can genuinely help — and where it falls short. Building these tools has made us better at understanding businesses, which has made us better at everything else we do.

That, more than any specific technical capability, might be the most valuable thing to come out of this work.
