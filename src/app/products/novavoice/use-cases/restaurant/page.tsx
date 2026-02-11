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

export default function RestaurantUseCasePage() {
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
        heading="NovaVoice for Restaurants"
        subheading="How Bella Cucina doubled their takeout capacity without adding a single staff member."
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
            <Text fontSize="xs" fontWeight={700} color="#F25C05">RESTAURANT</Text>
          </Box>
          <Box bg={highlightBg} px={3} py={1} borderRadius="full" borderWidth="1px" borderColor={highlightBorder}>
            <Text fontSize="xs" fontWeight={700} color="#F25C05">TAKEOUT &amp; DELIVERY</Text>
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
          Bella Cucina Italian Kitchen
        </Heading>
        <Text fontSize="lg" fontStyle="italic" color={mutedText} mb={8}>
          A family-owned Italian restaurant with 45 seats, a busy takeout operation, and a phone that never stopped ringing during the dinner rush.
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
            Bella Cucina&apos;s takeout business was growing fast — but their ability to handle phone orders wasn&apos;t keeping up. During peak hours (5-8 PM), the restaurant was receiving 30-40 takeout calls alongside a full dining room. The result was predictable: long hold times, rushed orders, frequent mistakes, and frustrated customers who gave up and ordered from a competitor instead.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="3xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif" mb={2}>38%</Text>
              <Text fontSize="md" color={bodyTextColor}>
                of takeout calls went unanswered during peak hours, with callers abandoning after 45+ seconds on hold
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="3xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif" mb={2}>1 in 5</Text>
              <Text fontSize="md" color={bodyTextColor}>
                phone orders contained errors — wrong items, missing modifications, incorrect sizes — leading to remakes and refunds
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="3xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif" mb={2}>$4,200</Text>
              <Text fontSize="md" color={bodyTextColor}>
                estimated monthly revenue lost from missed calls, order errors, and customers who switched to competitors
              </Text>
            </Box>
          </SimpleGrid>
          <Text fontSize="md" color={bodyTextColor} mt={6}>
            The owner, Maria, tried third-party delivery apps but the 30% commission fees were eating into already thin margins. She needed a way to handle more phone orders without the commission hit — and without pulling her staff away from the dining room during the busiest hours.
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
            We built a custom NovaVoice agent trained specifically on Bella Cucina&apos;s menu, pricing, daily specials, and ordering workflow — then integrated it directly into their existing order management system via API.
          </Text>

          <Heading
            as="h3"
            size="md"
            mb={4}
            color="#F25C05"
            fontWeight={700}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            A Voice Agent That Actually Understands Food Orders
          </Heading>
          <Text fontSize="md" color={bodyTextColor} mb={6}>
            Restaurant phone orders are messy. Customers change their minds mid-sentence, add items after you&apos;ve read back the order, ask about allergens, swap out sides, and request modifications that aren&apos;t on the menu. A generic AI agent can&apos;t handle this. Bella Cucina&apos;s NovaVoice agent was built from the ground up to handle the unpredictable, conversational reality of food ordering.
          </Text>

          <List spacing={4} color={bodyTextColor} pl={2} mb={8}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Variable-Capable Voice Agent:</b> The agent handles complex, multi-item orders with modifications at every level — &quot;large Margherita with extra basil, a small Caesar with dressing on the side, and actually make that Margherita a medium instead.&quot; It tracks every variable (size, toppings, sides, dressings, cooking preferences) across every item in real time.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Mid-Order Changes &amp; Additions:</b> Customers constantly change their minds. The agent gracefully handles &quot;wait, can I switch that to penne instead of rigatoni?&quot; or &quot;oh, and add garlic bread&quot; at any point in the conversation — without losing track of the rest of the order. It confirms changes back naturally: &quot;Got it — I&apos;ve switched your rigatoni to penne and added garlic bread. Your updated total is $47.50.&quot;
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Direct API Integration to Order Management:</b> Every completed order is pushed directly into Bella Cucina&apos;s kitchen order management system in real time. No manual re-entry, no handwritten tickets, no miscommunication between the phone and the kitchen. The order appears on the kitchen display the moment the caller confirms — with accurate prep time estimates and pickup scheduling.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Full Menu Intelligence:</b> The agent knows every item, every price, every available modification, every daily special, and every allergen. It can answer &quot;is the pesto gluten-free?&quot; or &quot;what&apos;s the soup today?&quot; without escalating to a human. Menu changes are synced automatically — when the kitchen 86s an item, the agent knows immediately.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Dynamic Pricing &amp; Upselling:</b> The agent accurately calculates pricing with all modifications, applies active promotions (&quot;our family meal deal is $39.99 tonight — would you like to hear about it?&quot;), and makes natural upsell suggestions based on the order (&quot;would you like to add a side of garlic knots with that? They pair great with the marinara&quot;).
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
            What a Typical Call Sounds Like
          </Heading>
          <Box bg={transcriptBg} borderRadius="xl" borderWidth="1px" borderColor={transcriptBorder} p={{ base: 4, md: 8 }} fontSize="md">
            <Flex direction="column" gap={4}>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Thanks for calling Bella Cucina! I can help you place a takeout order. What can I get started for you?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Customer</Text>
                <Text color={bodyTextColor}>Yeah, I&apos;d like a large pepperoni pizza, a Caesar salad — make it a large — and uh, let me get the chicken parm.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Great choices! I&apos;ve got a large pepperoni pizza, a large Caesar salad, and the chicken parmesan. The chicken parm comes with a side of spaghetti — would you like to keep that or swap it for a different side?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Customer</Text>
                <Text color={bodyTextColor}>Can I do penne instead? And actually, add mushrooms to the pizza too.</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Absolutely — I&apos;ve switched your side to penne and added mushrooms to the large pepperoni pizza. That brings the pizza to $19.50. By the way, we have a tiramisu special tonight for $8.99 — want me to add one?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#22c55e" fontSize="sm" mb={1}>Customer</Text>
                <Text color={bodyTextColor}>Oh yeah, throw one of those on. What&apos;s my total?</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color="#F25C05" fontSize="sm" mb={1}>NovaVoice Agent</Text>
                <Text color={bodyTextColor}>Your order total is $52.47 with tax. That&apos;s a large pepperoni and mushroom pizza, a large Caesar salad, chicken parm with penne, and a tiramisu. I&apos;ve sent this to the kitchen — it&apos;ll be ready for pickup in about 25 minutes. Can I get a name for the order?</Text>
              </Box>
              <Box bg={highlightBg} p={3} borderRadius="lg" borderWidth="1px" borderColor={highlightBorder}>
                <Text fontSize="sm" color="#F25C05" fontWeight={600}>
                  Order automatically pushed to kitchen display system via API — prep timer started, pickup slot reserved.
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
            Within the first 60 days of going live, Bella Cucina saw measurable improvements across every takeout metric:
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="2px" borderColor="#F25C05">
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={1}>Missed Calls During Peak</Text>
              <Flex align="baseline" gap={3}>
                <Text fontSize="2xl" fontWeight={900} color="#ef4444" textDecoration="line-through" fontFamily="Montserrat, Arial, sans-serif">38%</Text>
                <Text fontSize="3xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">Under 2%</Text>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                Virtually every call answered within 2 rings, even during the Friday night rush
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="2px" borderColor="#F25C05">
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={1}>Order Accuracy</Text>
              <Flex align="baseline" gap={3}>
                <Text fontSize="2xl" fontWeight={900} color="#ef4444" textDecoration="line-through" fontFamily="Montserrat, Arial, sans-serif">80%</Text>
                <Text fontSize="3xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">97.5%</Text>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                Direct API integration eliminated manual transcription errors — orders go straight from caller to kitchen
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="2px" borderColor="#F25C05">
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={1}>Monthly Takeout Revenue</Text>
              <Flex align="baseline" gap={3}>
                <Text fontSize="lg" fontWeight={700} color={mutedText} fontFamily="Montserrat, Arial, sans-serif">up</Text>
                <Text fontSize="3xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">+34%</Text>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                More calls answered + higher accuracy + smart upselling = significantly more takeout revenue per month
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="2px" borderColor="#F25C05">
              <Text fontSize="sm" color={mutedText} fontWeight={600} mb={1}>Average Order Value</Text>
              <Flex align="baseline" gap={3}>
                <Text fontSize="lg" fontWeight={700} color={mutedText} fontFamily="Montserrat, Arial, sans-serif">up</Text>
                <Text fontSize="3xl" fontWeight={900} color="#22c55e" fontFamily="Montserrat, Arial, sans-serif">+$8.40</Text>
              </Flex>
              <Text fontSize="sm" color={bodyTextColor} mt={2}>
                Natural upselling suggestions (desserts, sides, specials) increased average ticket by 22% per order
              </Text>
            </Box>
          </SimpleGrid>

          <Box bg={highlightBg} p={6} borderRadius="xl" borderWidth="1px" borderColor={highlightBorder} mb={8}>
            <Text fontSize="lg" color={bodyTextColor} fontStyle="italic" mb={3}>
              &quot;I was skeptical at first — how could an AI take a food order the way my staff does? But honestly, it handles the modifications and changes better than most of my team. It never forgets the extra basil. It never misheard &apos;penne&apos; as &apos;pesto.&apos; And when someone changes their mind three times, it doesn&apos;t get flustered. My cooks love it because the tickets are always right.&quot;
            </Text>
            <Text fontWeight={700} color={headingColor}>
              — Maria Rossi, Owner, Bella Cucina Italian Kitchen
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
            The Restaurant Phone Problem — By the Numbers
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">$1,500/month</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                Revenue lost by restaurants missing just five calls per day — from unfilled reservations, lost catering inquiries, and takeout orders that went to a competitor.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">69%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of all business inquiries still come through the phone. For restaurants, phone calls remain essential for reservations, catering, and complex or large group orders.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">80%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of callers sent to voicemail hang up without leaving a message. When a hungry customer can&apos;t reach you, they don&apos;t wait — they order from whoever answers first.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">391%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                more conversions when businesses respond within one minute. For restaurants, every second of hold time increases the chance the caller hangs up and orders elsewhere.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">85%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                of callers who reach voicemail never call back. In the restaurant industry, a lost call at 6 PM on a Friday is a lost customer — potentially for life.
              </Text>
            </Box>
            <Box bg={cardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">30%</Text>
              <Text fontSize="sm" color={bodyTextColor}>
                commission charged by third-party delivery apps — eating into already thin restaurant margins. Handling phone orders directly preserves the full margin on every takeout sale.
              </Text>
            </Box>
          </SimpleGrid>
          <Text fontSize="xs" color={mutedText} mt={4}>
            Sources: BrightLocal 2025 Consumer Survey, Invoca 2024 Call Analytics, Industry research aggregated from 60M+ calls
          </Text>
        </Box>

        {/* Key Technical Details */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Technical Implementation
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="sm" mb={3} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Order Management Integration
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                NovaVoice connects to Bella Cucina&apos;s order management system via a real-time REST API. Completed orders are submitted with full item details, modifications, pricing, and estimated prep times. The kitchen sees the order on their display within seconds of the caller confirming.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="sm" mb={3} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Menu Sync
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                The agent&apos;s menu knowledge stays current via automated sync with the restaurant&apos;s menu database. Daily specials, 86&apos;d items, seasonal changes, and price updates all propagate to the agent immediately — no manual retraining needed.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="sm" mb={3} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Stateful Conversation Engine
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                The agent maintains a running order state throughout the call — tracking items, modifications, additions, removals, and price changes. Mid-order changes don&apos;t break the flow. The agent can read back the full order at any point with accurate running totals.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="sm" mb={3} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Setup &amp; Training
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                Full implementation took two weeks from kickoff to live calls. This included menu ingestion, API integration with their order management system, voice personality tuning, and a week of parallel testing where the agent handled calls alongside staff before going fully live.
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
            Your Restaurant Deserves a Better Phone Experience
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6} maxW="600px" mx="auto">
            Restaurants lose up to $1,500/month from just five missed calls daily. NovaVoice handles your takeout orders perfectly — every time, every call, every night.
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
              Get NovaVoice for Your Restaurant
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
