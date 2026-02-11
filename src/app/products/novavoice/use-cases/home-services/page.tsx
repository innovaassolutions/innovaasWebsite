"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function HomeServicesUseCasePage() {
  const headingColor = useColorModeValue("#181f2a", "#fff");
  const bodyTextColor = useColorModeValue("#222", "#d1d5db");
  const cardBg = useColorModeValue("white", "#232b39");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const mutedText = useColorModeValue("#555", "#a0aec0");
  const problemBg = useColorModeValue("gray.50", "#1a2130");
  const highlightBg = useColorModeValue("#fff5ed", "#2a1f14");
  const highlightBorder = useColorModeValue("#fed7aa", "#5c3a1a");
  const transcriptBg = useColorModeValue("#f7fafc", "#1a2233");
  const transcriptBorder = useColorModeValue("#e2e8f0", "#2d3748");

  return (
    <>
      <Hero
        image="/hero-services.webp"
        heading="NovaVoice for Home Services"
        subheading="How Summit Roofing stopped wasting $18,000/month on unqualified leads — by letting AI pre-qualify every caller before they hit the CRM."
        buttonText="See the Results"
        buttonLink="#results"
      />

      <Box maxW="1000px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>

        {/* Case Study Header */}
        <Flex gap={2} mb={6} flexWrap="wrap">
          <Box bg={highlightBg} px={3} py={1} borderRadius="full" borderWidth="1px" borderColor={highlightBorder}>
            <Text fontSize="xs" fontWeight={700} color="#F25C05">CASE STUDY</Text>
          </Box>
          <Box bg={highlightBg} px={3} py={1} borderRadius="full" borderWidth="1px" borderColor={highlightBorder}>
            <Text fontSize="xs" fontWeight={700} color="#F25C05">HOME SERVICES</Text>
          </Box>
          <Box bg={highlightBg} px={3} py={1} borderRadius="full" borderWidth="1px" borderColor={highlightBorder}>
            <Text fontSize="xs" fontWeight={700} color="#F25C05">LEAD QUALIFICATION</Text>
          </Box>
        </Flex>

        <Heading
          as="h2"
          size="xl"
          mb={2}
          color={headingColor}
          fontWeight={900}
          fontFamily="Montserrat, Arial, sans-serif"
        >
          Summit Roofing &amp; Exteriors
        </Heading>
        <Text fontSize="lg" fontStyle="italic" color={mutedText} mb={8}>
          A 12-person roofing company running $3.2M in annual revenue — with a sales pipeline full of leads that could never afford the work.
        </Text>

        {/* The Challenge */}
        <Box mb={16} bg={problemBg} mx={{ base: 0, md: -8 }} px={{ base: 4, md: 8 }} py={10} borderRadius="xl">
          <Heading
            as="h2"
            size="lg"
            mb={4}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            The Challenge
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            Summit Roofing spent heavily on Google Ads and local SEO to drive inbound calls. It was working — they were getting 80-100 calls per week. The problem was what happened next. Every call went into the CRM as a lead. A salesperson drove to the property for an estimate. But nearly half of those leads turned out to be unqualified: homeowners on a $5,000 budget for a $15,000 roof replacement, renters who didn&apos;t own the property, people looking for a quick patch job when the roof needed a full tear-off, or callers who were just price-shopping with no intent to buy.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="3xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif" mb={2}>47%</Text>
              <Text fontSize="md" color={bodyTextColor}>
                of leads in the CRM were unqualified — wrong budget, wrong scope, or no real purchase intent
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="3xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif" mb={2}>$380</Text>
              <Text fontSize="md" color={bodyTextColor}>
                average cost per wasted site visit — including salesperson time, vehicle costs, and opportunity cost of not being with a qualified lead
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="3xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif" mb={2}>$18K+</Text>
              <Text fontSize="md" color={bodyTextColor}>
                estimated monthly cost of chasing unqualified leads — nearly 7% of annual revenue spent on dead-end estimates
              </Text>
            </Box>
          </SimpleGrid>
          <Text fontSize="md" color={bodyTextColor} mt={6}>
            The sales team was demoralized. They were driving across town for estimates that had no chance of closing. The owner, Mike, had tried adding qualification questions to their website form — but most leads still came through the phone, and his office manager didn&apos;t have time (or the training) to ask the right qualifying questions under pressure. She was answering, getting a name and address, and sending the lead straight into the pipeline.
          </Text>
        </Box>

        {/* The Solution */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={4}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            The Solution
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            We built a NovaVoice agent for Summit Roofing with one specific mission: assess every caller&apos;s budget readiness and project fit before a single lead enters the CRM or a salesperson&apos;s calendar. Only qualified, budget-ready leads get passed through.
          </Text>

          <Heading
            as="h3"
            size="md"
            mb={4}
            color="#F25C05"
            fontWeight={700}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Pre-Qualification That Feels Like a Conversation, Not an Interrogation
          </Heading>
          <Text fontSize="md" color={bodyTextColor} mb={6}>
            The key challenge was qualifying callers without making them feel like they&apos;re being screened out. Nobody wants to feel judged on the phone. Summit&apos;s NovaVoice agent was designed to gather qualification data through a helpful, consultative conversation — educating the caller about what their project might involve while naturally surfacing budget readiness.
          </Text>

          <List spacing={4} color={bodyTextColor} pl={2} mb={8}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Scope Assessment:</b> The agent asks about the project — what&apos;s happening with the roof, when they first noticed the issue, how old the roof is, square footage of the home, number of stories, and what material the current roof is. These aren&apos;t interrogation questions — they&apos;re what a knowledgeable estimator would ask. The answers tell the agent whether this is a repair, partial replacement, or full tear-off.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Budget Readiness Assessment:</b> Rather than asking &quot;what&apos;s your budget?&quot; — which callers rarely answer honestly — the agent uses a consultative approach. Based on the scope, it provides a realistic range: &quot;For a full replacement on a 2,000 sq ft ranch with architectural shingles, most homeowners in your area are looking at $12,000 to $18,000. Does that align with what you were expecting?&quot; This naturally surfaces budget mismatches without putting the caller on the spot.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Ownership &amp; Decision-Maker Verification:</b> The agent confirms the caller owns the property (not a renter), verifies they&apos;re the decision-maker (or that the other decision-maker is aligned), and checks whether they&apos;re working with insurance on a claim. Insurance jobs have different qualification criteria — the agent adjusts its questions accordingly.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Timeline &amp; Intent Scoring:</b> &quot;When are you hoping to get this done?&quot; and &quot;Have you gotten any other estimates yet?&quot; tell the agent whether the caller is ready to move or just casually exploring. Combined with scope and budget alignment, the agent assigns a lead score: hot, warm, or cold.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Conditional CRM Integration:</b> This is the key differentiator. Only leads that meet Summit&apos;s qualification criteria — budget-aligned, property owner, decision-maker, realistic timeline — are pushed into the CRM with a full lead profile. Unqualified callers are politely guided: &quot;Based on what you&apos;ve described, a full replacement may not be in scope right now — but I can note your information and we&apos;ll follow up if we have any promotions or financing options that might help.&quot; They&apos;re not rejected — they&apos;re deferred.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Financing Awareness:</b> For callers who are budget-constrained but otherwise qualified, the agent can introduce Summit&apos;s financing options: &quot;We do work with financing partners who offer 12-month same-as-cash plans. Would you like me to include financing information when we schedule your estimate?&quot; This converts some &quot;cold&quot; leads into warm ones by addressing the budget objection.
            </ListItem>
          </List>
        </Box>

        {/* Sample Conversation */}
        <Box mb={16}>
          <Heading
            as="h3"
            size="md"
            mb={4}
            color={headingColor}
            fontWeight={700}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            A Qualified Lead Call
          </Heading>
          <Box bg={transcriptBg} borderRadius="xl" borderWidth="1px" borderColor={transcriptBorder} p={{ base: 4, md: 8 }} fontSize="md" mb={8}>
            <Flex direction="column" gap={4}>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Thanks for calling Summit Roofing &amp; Exteriors! Are you calling about a roofing project?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>Yeah, I think I need a new roof. We had some storm damage last month and now I&apos;ve got a leak in the upstairs bedroom.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>I&apos;m sorry to hear about the storm damage. Let me ask a few questions so we can understand the scope and get you a proper estimate. First, do you know roughly how old your current roof is?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>It was done about 18 years ago. Standard asphalt shingles.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Got it — at 18 years with storm damage, a full replacement is likely the best path rather than a patch repair. Can you tell me roughly how big your home is and whether it&apos;s a one-story or two-story?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>It&apos;s a two-story colonial, about 2,400 square feet.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Thanks. For a 2,400 square foot two-story with architectural shingles, homeowners in your area typically see full replacement costs in the $14,000 to $20,000 range — depending on the complexity and any underlying damage. Since you mentioned storm damage, have you filed a homeowner&apos;s insurance claim? That often covers most or all of the replacement cost.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>I haven&apos;t yet but my neighbor said his insurance covered everything. I was planning to file one. Does that price range sound about right? I was expecting somewhere around 15 to 18 thousand.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>That&apos;s right in the range, and if your insurance covers it like your neighbor&apos;s, your out-of-pocket would likely just be your deductible. Summit works directly with insurance companies on claims, which makes the process much smoother. Are you the homeowner and the person who&apos;d be making the decision on this project?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>Yes, it&apos;s my house. My wife and I would decide together, but she&apos;s on board — we know we need to get it done.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Perfect. And when are you hoping to get this taken care of? Are you looking to move quickly given the active leak, or is there flexibility?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>Sooner the better, honestly. The bucket in the bedroom isn&apos;t a long-term solution.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Completely understand. I&apos;m going to get you set up for a free on-site estimate. We have availability this Thursday afternoon or Friday morning — one of our project managers will come out, inspect the roof and the interior damage, take photos for your insurance claim, and walk you through your options. Which works better?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>Friday morning would be great.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>You&apos;re all set for Friday morning. Can I get your name, address, and the best number to reach you?</Text>
              </Box>
              <Box bg={highlightBg} p={3} borderRadius="lg" borderWidth="1px" borderColor={highlightBorder}>
                <Text fontSize="sm" color="#F25C05" fontWeight={600}>
                  Lead scored as HOT — budget aligned, homeowner, decision-maker engaged, urgent timeline, insurance likely. Full lead profile pushed to CRM with qualification notes and estimate appointment booked.
                </Text>
              </Box>
            </Flex>
          </Box>

          <Heading
            as="h3"
            size="md"
            mb={4}
            color={headingColor}
            fontWeight={700}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            A Deferred (Unqualified) Call
          </Heading>
          <Box bg={transcriptBg} borderRadius="xl" borderWidth="1px" borderColor={transcriptBorder} p={{ base: 4, md: 8 }} fontSize="md">
            <Flex direction="column" gap={4}>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>...For a project like that — replacing the shingles on a 1,600 square foot ranch — homeowners in your area typically see costs in the $11,000 to $15,000 range. Does that align with what you had in mind?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>Whoa, I was thinking more like four or five thousand. Can&apos;t you just patch the area that&apos;s leaking?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>I understand — roofing costs can be higher than expected. With a 22-year-old roof that&apos;s showing leaks, a patch repair might buy some time but typically isn&apos;t a long-term solution. Summit does offer financing through our partners — 12-month same-as-cash plans that can spread the cost out. Would you like me to include financing information when we follow up with you?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Caller</Text>
                <Text color={bodyTextColor}>I don&apos;t know... five thousand is really my max right now. Maybe next year.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>That&apos;s completely fine. I&apos;ll save your information and we can reach out when we have seasonal promotions or if financing terms change. In the meantime, if the leak gets worse, don&apos;t hesitate to call us — we can always do a temporary tarp or emergency repair to protect the interior. Can I get your name and email so we can stay in touch?</Text>
              </Box>
              <Box bg={problemBg} p={3} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                <Text fontSize="sm" color={mutedText} fontWeight={600}>
                  Lead scored as COLD — significant budget gap, no insurance, deferring to next year. Contact saved to nurture list but NOT pushed to sales pipeline. No estimate appointment booked. Sales team&apos;s time protected.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* Results */}
        <Box mb={16} id="results">
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            The Results
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            After 90 days with NovaVoice pre-qualifying every inbound call:
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="2px" borderColor="#F25C05">
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={1}>Unqualified Leads in CRM</Text>
              <Flex align="baseline" gap={3}>
                <Text fontSize="2xl" fontWeight={900} color="#ef4444" textDecoration="line-through" fontFamily="Montserrat, Arial, sans-serif">47%</Text>
                <Text fontSize="3xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">Under 8%</Text>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                Only budget-aligned, decision-ready leads enter the sales pipeline — the rest are routed to a nurture list
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="2px" borderColor="#F25C05">
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={1}>Estimate-to-Close Rate</Text>
              <Flex align="baseline" gap={3}>
                <Text fontSize="2xl" fontWeight={900} color="#ef4444" textDecoration="line-through" fontFamily="Montserrat, Arial, sans-serif">22%</Text>
                <Text fontSize="3xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">41%</Text>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                Sales team closes nearly double the rate because they&apos;re only visiting qualified, budget-ready prospects
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="2px" borderColor="#F25C05">
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={1}>Wasted Site Visits Per Month</Text>
              <Flex align="baseline" gap={3}>
                <Text fontSize="2xl" fontWeight={900} color="#ef4444" textDecoration="line-through" fontFamily="Montserrat, Arial, sans-serif">~48</Text>
                <Text fontSize="3xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">~8</Text>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                40 fewer dead-end estimates per month — saving ~$15,200/month in salesperson time and vehicle costs
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="2px" borderColor="#F25C05">
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={1}>Sales Team Morale</Text>
              <Flex align="baseline" gap={3}>
                <Text fontSize="3xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">Transformed</Text>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                Salespeople go to estimates knowing the caller is qualified, budget-aware, and ready to move — not wondering if they&apos;re about to waste two hours
              </Text>
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
            <Box bg={highlightBg} p={6} borderRadius="xl" borderWidth="1px" borderColor={highlightBorder}>
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={2}>Estimated Annual Savings</Text>
              <Text fontSize="4xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">$182,400</Text>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                From eliminated wasted site visits, recovered salesperson time, and higher close rates on qualified leads
              </Text>
            </Box>
            <Box bg={highlightBg} p={6} borderRadius="xl" borderWidth="1px" borderColor={highlightBorder}>
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={2}>ROI on NovaVoice</Text>
              <Text fontSize="4xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">23:1</Text>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                At $639/month, NovaVoice delivers $23 in value for every $1 spent — just from lead qualification alone
              </Text>
            </Box>
          </SimpleGrid>

          <Box bg={highlightBg} p={6} borderRadius="xl" borderWidth="1px" borderColor={highlightBorder} mb={8}>
            <Text fontSize="lg" color={bodyTextColor} fontStyle="italic" mb={3}>
              &quot;Before NovaVoice, my guys were driving to three or four estimates a day and coming back empty-handed half the time. Now every lead in our CRM is someone who knows what the project costs, has the budget or the insurance to cover it, and is ready to make a decision. Our close rate almost doubled. My best salesperson told me it&apos;s the first time in years he actually looks forward to going to estimates. That alone was worth it.&quot;
            </Text>
            <Text fontWeight={700} color={headingColor}>
              — Mike Callahan, Owner, Summit Roofing &amp; Exteriors
            </Text>
          </Box>
        </Box>

        {/* Industry Statistics */}
        <Box mb={16} bg={problemBg} mx={{ base: 0, md: -8 }} px={{ base: 4, md: 8 }} py={10} borderRadius="xl">
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Home Services Phone Calls — By the Numbers
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">62%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of inbound calls to home service companies go unanswered. When you&apos;re on a roof or under a sink, the phone is the last thing you can reach — and every missed call is a missed job.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">$1,200</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                lost per missed call in home services — the highest of any industry. A single unanswered roofing inquiry could represent a $15,000+ job that went to your competitor.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">74.1%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of calls to home service businesses went completely unanswered in a study of 13,175 calls by NextPhone. Nearly three out of four potential customers heard nothing but ringing.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">10-15x</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                higher conversion rate from phone calls versus web leads. Inbound callers are ready to buy — they&apos;ve already searched, compared, and picked up the phone. Qualifying them correctly is the difference between a closed job and a wasted estimate.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">37%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of phone leads convert during the call itself. When a homeowner calls about a leaking roof, they want to book the estimate right now — not leave a voicemail and hope someone calls back.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">47 hours</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                is the average business response time to inbound leads. Only 27% of leads are ever contacted at all. With NovaVoice, every caller gets an immediate response and qualified leads are in your CRM within seconds.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">21x</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                less effective when you call a lead back after 30 minutes versus within 5 minutes (Harvard Business Review). Pre-qualification during the initial call eliminates the callback problem entirely.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">85%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of callers who reach voicemail never call back. For home service businesses spending thousands on ads to generate those calls, every one that goes to voicemail is ad spend down the drain.
              </Text>
            </Box>
          </SimpleGrid>
          <Text fontSize="xs" color={mutedText} mt={4}>
            Sources: Invoca 2024 (60M+ calls), Sift Digital, NextPhone (13,175 calls analyzed), Harvard Business Review, BrightLocal 2025
          </Text>
        </Box>

        {/* Qualification Framework */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            The Qualification Framework
          </Heading>
          <Text fontSize="md" color={bodyTextColor} mb={6}>
            Summit&apos;s NovaVoice agent scores every caller across five dimensions before deciding whether to push the lead to the sales CRM or the nurture list:
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Flex align="center" gap={3} mb={3}>
                <Flex w={8} h={8} borderRadius="full" bg="rgba(242, 92, 5, 0.1)" align="center" justify="center">
                  <Text fontSize="sm" fontWeight={900} color="#F25C05">1</Text>
                </Flex>
                <Heading as="h3" size="sm" color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                  Scope Fit
                </Heading>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor}>
                Is the project something Summit does? Roof replacements, repairs, gutters, siding — yes. Interior painting, landscaping — politely redirect. The agent also estimates project size to prioritize higher-value jobs.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Flex align="center" gap={3} mb={3}>
                <Flex w={8} h={8} borderRadius="full" bg="rgba(242, 92, 5, 0.1)" align="center" justify="center">
                  <Text fontSize="sm" fontWeight={900} color="#F25C05">2</Text>
                </Flex>
                <Heading as="h3" size="sm" color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                  Budget Alignment
                </Heading>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor}>
                Does the caller&apos;s budget expectation match the realistic cost of the project? The agent provides transparent pricing ranges and gauges the caller&apos;s reaction — not to screen out, but to ensure alignment before sending a salesperson.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Flex align="center" gap={3} mb={3}>
                <Flex w={8} h={8} borderRadius="full" bg="rgba(242, 92, 5, 0.1)" align="center" justify="center">
                  <Text fontSize="sm" fontWeight={900} color="#F25C05">3</Text>
                </Flex>
                <Heading as="h3" size="sm" color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                  Ownership &amp; Authority
                </Heading>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor}>
                Does the caller own the property? Are they the decision-maker (or is the decision-maker aligned)? Renters, property managers shopping for owners, and callers whose spouses haven&apos;t agreed yet are deferred until the situation is clear.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Flex align="center" gap={3} mb={3}>
                <Flex w={8} h={8} borderRadius="full" bg="rgba(242, 92, 5, 0.1)" align="center" justify="center">
                  <Text fontSize="sm" fontWeight={900} color="#F25C05">4</Text>
                </Flex>
                <Heading as="h3" size="sm" color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                  Timeline &amp; Urgency
                </Heading>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor}>
                Is the caller looking to move now, within a few weeks, or &quot;maybe next year?&quot; Active leaks and storm damage are hot. Spring cleaning research is warm. &quot;Just curious what it would cost&quot; is cold. Each gets a different follow-up path.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor} gridColumn={{ md: "span 2" }}>
              <Flex align="center" gap={3} mb={3}>
                <Flex w={8} h={8} borderRadius="full" bg="rgba(242, 92, 5, 0.1)" align="center" justify="center">
                  <Text fontSize="sm" fontWeight={900} color="#F25C05">5</Text>
                </Flex>
                <Heading as="h3" size="sm" color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                  Insurance Status
                </Heading>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor}>
                Storm damage calls get special treatment. The agent asks about insurance claims, adjustor visits, and coverage status. Insurance-backed projects are automatically scored higher because budget is less of a barrier. The agent also notes whether Summit should help facilitate the claim, which is a value-add that builds trust and increases close rates.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* CTA */}
        <Box textAlign="center" py={10} px={4} bg={cardBg} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
          <Heading
            as="h2"
            size="lg"
            mb={4}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Stop Sending Your Sales Team to Dead-End Estimates
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6} maxW="600px" mx="auto">
            Home service businesses miss 62% of calls and waste thousands on unqualified leads. NovaVoice answers every call, qualifies every lead, and only passes the real opportunities to your team.
          </Text>
          <Flex gap={4} justify="center" direction={{ base: "column", sm: "row" }}>
            <Button
              as={Link}
              href="/products/novavoice#get-started"
              bg="#F25C05"
              color="#fff"
              _hover={{ bg: "#d94e04" }}
              fontWeight={700}
              borderRadius="6px"
              size="lg"
            >
              Get NovaVoice for Your Business
            </Button>
            <Button
              as={Link}
              href="/products/novavoice"
              variant="outline"
              borderColor="#F25C05"
              color="#F25C05"
              _hover={{ bg: "rgba(242, 92, 5, 0.1)" }}
              fontWeight={700}
              borderRadius="6px"
              size="lg"
            >
              Learn More About NovaVoice
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
