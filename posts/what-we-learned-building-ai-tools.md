---
title: "What We Learned Building AI Tools for Real Businesses"
date: "2025-01-15"
author: "Todd Abraham"
image: "/SpaceShip.webp"
slug: "what-we-learned-building-ai-tools"
---

Over the past year, we've been building AI-powered tools — FlowForge for workflow automation and NovaCRM for customer relationship management. I want to share some of what we've learned. Not because we've got it all figured out (we definitely don't), but because the lessons keep surprising us and I think they're worth talking about.

Building AI tools for real businesses is a fundamentally different exercise than building AI demos. Demos are impressive. Products are useful. The gap between those two things is way wider than most people appreciate.

## AI Is Only as Good as the Process Around It

This was our first lesson and our hardest. Early on, we built some genuinely clever AI features for FlowForge — intelligent task routing, automated decision trees, predictive workflow optimization. Technically impressive. In testing, it all worked beautifully.

Then we put it in front of real users with real workflows.

The results were humbling. The problem wasn't the AI. The problem was that most businesses don't have clean, well-defined processes to begin with. You can't intelligently route tasks if the routing rules aren't clear. You can't optimize a workflow nobody's actually mapped out. The AI was trying to improve something that didn't have a solid foundation.

So we stepped back. Before any AI feature kicks in, FlowForge now walks users through defining their process clearly. Sounds boring compared to "AI-powered automation," but it's the part that actually creates value. The AI makes it better. The process definition makes it work.

## Users Don't Care About the AI

This took a while to fully sink in. When we talked to early NovaCRM users, we'd excitedly describe the AI capabilities — intelligent lead scoring, automated follow-up suggestions, sentiment analysis on customer communications.

They'd nod politely and ask: "But will it help me stop losing track of deals?"

That was the moment it clicked. Nobody was shopping for AI. They wanted a CRM that actually worked for how their business ran. The AI was interesting to us as builders. To the people using it every day, it was invisible plumbing. They cared about fewer dropped balls, faster responses, better customer relationships — not the mechanism underneath.

We restructured our entire product messaging around outcomes. "Never lose track of a deal" instead of "AI-powered pipeline management." "Know exactly when to follow up" instead of "machine learning-based engagement scoring." Obvious in retrospect. But when you're deep in the technology, it's easy to lose sight of what matters to the person on the other side.

## Start with the Problem, Not the Technology

Early in development, we'd have conversations that started with "What can we do with AI here?" We'd look at a feature area and brainstorm ways to add intelligence. Sometimes that led somewhere useful. More often, it produced features that were technically interesting but practically unnecessary.

The shift happened when we flipped the question: "What problem are our users actually having?" — and only then, "Could AI help solve this?"

One of the most-loved features in NovaCRM isn't particularly sophisticated from an AI standpoint. It reads incoming emails and automatically links them to the right contact and deal. Mostly pattern matching and entity extraction — not exactly cutting-edge. But it saves users real time every day because they no longer have to manually file communications.

Meanwhile, a much more technically impressive feature — predictive deal scoring using historical conversion patterns — barely gets used. Nice-to-have, not must-have. If we'd built the product starting from AI capabilities outward, we would have gotten the priorities exactly backwards.

## The Hardest Part Isn't the AI

Going in, I assumed the technical challenges would be the hard part. Getting models right, managing training data, handling edge cases in AI decision-making.

Wrong. The hardest part is understanding how people actually work.

Every business thinks their processes are straightforward until you start mapping them. Then you hit the exceptions, the workarounds, the "oh, but when this happens, we do this instead" branches that nobody documented. Real business processes are messy, context-dependent, and full of implicit knowledge that experienced employees carry around in their heads.

Building tools that work in this reality means spending enormous amounts of time listening, observing, and asking questions. Watching people do their work — not how they describe it, but how they actually do it. There's always a gap between those two things.

We've learned to budget more time for discovery and user research than for development itself. That ratio felt wrong at first, but the products that came out of deeper understanding were dramatically better than the ones we built on assumptions.

## What I'd Tell a Business Owner Evaluating AI Tools

Based on what we've learned:

Be skeptical of products that lead with the AI. The best AI-powered tools don't need to advertise the AI — the value speaks for itself. If a vendor spends more time talking about their models than your problems, take note.

Look for tools that start with process. Any decent AI tool should help you understand and define your current workflows before trying to improve them. If it just drops AI on top of whatever mess currently exists, expect more problems, not fewer.

Ask about outcomes, not features. Skip "does it have AI?" and ask "how will this change my team's daily work?" and "how will I know if it's working?" Those questions cut through the hype faster than anything.

Be patient with your team. Adopting new tools is hard. AI-powered tools can be especially disorienting because they behave differently over time as they learn. Give people space to adapt, provide feedback, and find their rhythm.

## We're Still Learning

I want to be straight about this: we don't have it all figured out. Every week we learn something new about how businesses actually work, where AI genuinely helps, and where it falls short. Building these tools has made us better at understanding businesses, which has made us better at everything else we do.

That might be the most valuable thing to come out of this whole effort — more than any specific feature we've shipped.
