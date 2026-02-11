"use client";

import { useState } from "react";
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
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import Hero from "@/components/Hero";
import NovaVoiceDashboard from "@/components/mockups/NovaVoiceDashboard";
import NovaVoiceCallFlow from "@/components/mockups/NovaVoiceCallFlow";
import NovaVoiceAnalytics from "@/components/mockups/NovaVoiceAnalytics";
import Link from "next/link";

const NOVACRM_API_URL =
  process.env.NEXT_PUBLIC_NOVACRM_API_URL || "https://nova-cyan-mu.vercel.app";
const NOVACRM_API_KEY =
  process.env.NEXT_PUBLIC_NOVACRM_LEAD_API_KEY || "";

interface FormData {
  name: string;
  email: string;
  organization_name: string;
  role: string;
  notes: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function NovaVoicePage() {
  const headingColor = useColorModeValue("#181f2a", "#fff");
  const bodyTextColor = useColorModeValue("#222", "#d1d5db");
  const cardBg = useColorModeValue("white", "#232b39");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const mutedText = useColorModeValue("#555", "#a0aec0");
  const inputBg = useColorModeValue("white", "#181f2a");
  const border = useColorModeValue("#e2e8f0", "#2d3748");
  const text = useColorModeValue("#181f2a", "#fff");
  const problemBg = useColorModeValue("gray.50", "#1a2130");
  const novaVoiceLogo = useColorModeValue("/products/novavoice-logo-light.png", "/products/novavoice-logo-dark.png");
  const statCardBg = useColorModeValue("#fff5ed", "#2a1f14");
  const statBorder = useColorModeValue("#fed7aa", "#5c3a1a");

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    organization_name: "",
    role: "",
    notes: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(`${NOVACRM_API_URL}/api/leads/capture`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(NOVACRM_API_KEY ? { "X-Api-Key": NOVACRM_API_KEY } : {}),
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organization_name: form.organization_name || undefined,
          role: form.role || undefined,
          interest: "novavoice",
          notes: form.notes || undefined,
          page_slug: "novavoice-landing",
          source: "novavoice-landing",
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        throw new Error(body || `Request failed (${res.status})`);
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      <Hero
        image="/hero-services.webp"
        heading="NovaVoice"
        subheading="AI Phone Agents that answer every call, book appointments, and never miss a business opportunity — 24/7/365."
        buttonText="See How It Works"
        buttonLink="#overview"
      />

      <Box maxW="1000px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>

        {/* Stat Banner */}
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={16}>
          <Box bg={statCardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={statBorder} textAlign="center">
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">
              $126K
            </Text>
            <Text fontSize="sm" color={bodyTextColor}>
              lost per year from unanswered calls
            </Text>
          </Box>
          <Box bg={statCardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={statBorder} textAlign="center">
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">
              85%
            </Text>
            <Text fontSize="sm" color={bodyTextColor}>
              of callers never call back after voicemail
            </Text>
          </Box>
          <Box bg={statCardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={statBorder} textAlign="center">
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">
              62%
            </Text>
            <Text fontSize="sm" color={bodyTextColor}>
              of calls to service businesses go unanswered
            </Text>
          </Box>
          <Box bg={statCardBg} p={5} borderRadius="lg" borderWidth="1px" borderColor={statBorder} textAlign="center">
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={900} color="#F25C05" fontFamily="Montserrat, Arial, sans-serif">
              10-15x
            </Text>
            <Text fontSize="sm" color={bodyTextColor}>
              higher conversion from phone vs. web leads
            </Text>
          </Box>
        </SimpleGrid>

        {/* Product Overview */}
        <Box id="overview" mb={16}>
          <Flex align="center" gap={4} mb={2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={novaVoiceLogo} alt="NovaVoice" style={{ width: '56px', height: '56px', borderRadius: '50%' }} />
            <Heading
              as="h2"
              size="xl"
              color="#F25C05"
              fontWeight={900}
              fontFamily="Montserrat, Arial, sans-serif"
            >
              NovaVoice
            </Heading>
          </Flex>
          <Text fontSize="lg" fontStyle="italic" color={bodyTextColor} mb={6}>
            Every missed call is a missed opportunity. NovaVoice makes sure you never miss one again.
          </Text>

          <Box borderRadius="lg" overflow="hidden" boxShadow="xl" mb={8}>
            <NovaVoiceDashboard />
          </Box>

          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            NovaVoice is a custom-built AI phone agent that answers your business calls with the intelligence of a trained receptionist and the availability of a machine. It understands why callers are reaching out, books appointments directly into your calendar, answers questions about your services and pricing, and routes complex issues to the right person on your team.
          </Text>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            Unlike robotic IVR menus or generic chatbots, NovaVoice holds natural conversations. Callers get real answers, not &quot;press 1 for sales.&quot; Your business captures every lead, books every appointment, and never sends another customer to voicemail — whether it&apos;s 2 PM on a Tuesday or 2 AM on a Sunday.
          </Text>
        </Box>

        {/* The Problem */}
        <Box mb={16} bg={problemBg} mx={{ base: 0, md: -8 }} px={{ base: 4, md: 8 }} py={10} borderRadius="xl">
          <Heading
            as="h2"
            size="lg"
            mb={3}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            The Problem
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            Phone calls drive 69% of all business inquiries. But most small businesses can&apos;t answer them all.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="3xl" mb={3} lineHeight="1">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="#F25C05" opacity="0.12"/><path d="M18 8C12.48 8 8 12.48 8 18s4.48 10 10 10 10-4.48 10-10S23.52 8 18 8zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4.5-2.67V13z" fill="#F25C05"/></svg>
              </Text>
              <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                You Can&apos;t Always Be There
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                You&apos;re with a customer, on the road, at lunch, or it&apos;s after hours. The phone rings and nobody picks up. That caller moves on to your competitor — and 85% won&apos;t call back.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="3xl" mb={3} lineHeight="1">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="#F25C05" opacity="0.12"/><path d="M20 12V8H16V12H20ZM22 12H26V8H22V12ZM14 12V8H10V12H14ZM8 14V28H28V14H8ZM26 26H10V18H26V26Z" fill="#F25C05"/></svg>
              </Text>
              <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Hiring Is Expensive
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                A full-time receptionist costs $50,000–$61,000/year including benefits. For many small businesses, that&apos;s not feasible — and you still only get coverage during business hours.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="3xl" mb={3} lineHeight="1">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="#F25C05" opacity="0.12"/><path d="M18 8C12.48 8 8 12.48 8 18s4.48 10 10 10 10-4.48 10-10S23.52 8 18 8zm-2 15l-5-5 1.41-1.41L16 20.17l7.59-7.59L25 14l-9 9z" fill="#F25C05"/></svg>
              </Text>
              <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Voicemail Doesn&apos;t Work
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                80% of callers sent to voicemail hang up without leaving a message. Of those who do, 67% of voicemails are ignored. Your voicemail isn&apos;t a safety net — it&apos;s a dead end.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* How It Works */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            How It Works
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box textAlign="center">
              <Flex
                w={16}
                h={16}
                borderRadius="full"
                bg="rgba(242, 92, 5, 0.1)"
                align="center"
                justify="center"
                mx="auto"
                mb={4}
              >
                <Text fontSize="2xl" fontWeight={900} color="#F25C05">1</Text>
              </Flex>
              <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                We Build Your Agent
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                We learn your business — services, pricing, hours, FAQs, booking rules — and build a custom AI agent trained to sound and respond exactly the way you want.
              </Text>
            </Box>
            <Box textAlign="center">
              <Flex
                w={16}
                h={16}
                borderRadius="full"
                bg="rgba(242, 92, 5, 0.1)"
                align="center"
                justify="center"
                mx="auto"
                mb={4}
              >
                <Text fontSize="2xl" fontWeight={900} color="#F25C05">2</Text>
              </Flex>
              <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Connect Your Phone
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                We integrate with your existing phone number. Calls forward to NovaVoice when you can&apos;t answer — or all the time if you prefer. No hardware, no new numbers.
              </Text>
            </Box>
            <Box textAlign="center">
              <Flex
                w={16}
                h={16}
                borderRadius="full"
                bg="rgba(242, 92, 5, 0.1)"
                align="center"
                justify="center"
                mx="auto"
                mb={4}
              >
                <Text fontSize="2xl" fontWeight={900} color="#F25C05">3</Text>
              </Flex>
              <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Never Miss a Call Again
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                Your AI agent answers calls 24/7, books appointments, answers questions, captures leads, and escalates when needed. You get a full dashboard with transcripts and analytics.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Live Call Mockup */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={2}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Natural, Human-Like Conversations
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            NovaVoice doesn&apos;t sound like a robot. It holds real conversations — understanding context, remembering caller history, and taking action in real time.
          </Text>
          <Box borderRadius="lg" overflow="hidden" boxShadow="xl" mb={4}>
            <NovaVoiceCallFlow />
          </Box>
          <Text fontSize="sm" color={mutedText} textAlign="center">
            Live call transcript showing real-time intent detection, caller history, and automated appointment booking
          </Text>
        </Box>

        {/* Key Features */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Key Features
          </Heading>
          <List spacing={3} color={bodyTextColor} pl={2} mb={6}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>24/7 Call Answering:</b> Your AI agent never sleeps, never calls in sick, and never puts a caller on hold. Every call is answered within seconds — day or night.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Appointment Booking:</b> Integrated with your calendar system. The agent checks availability, books appointments, sends confirmations, and handles rescheduling — all during the call.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Custom-Trained on Your Business:</b> Your agent knows your services, pricing, hours, policies, and FAQs. It&apos;s not generic — it sounds like it works for you because it does.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Intelligent Escalation:</b> Complex issues, complaints, or high-value opportunities are automatically routed to the right person on your team with full context and a call summary.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Real-Time Transcripts &amp; Analytics:</b> Every call is transcribed, analyzed for sentiment, and logged with outcomes. See exactly what your callers want and how your agent performs.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Lead Capture &amp; Follow-Up:</b> Caller information is captured automatically and can be pushed to your CRM, email, or any tool you use. No lead falls through the cracks.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Multilingual Support:</b> Serve your entire customer base — NovaVoice can handle calls in English, Spanish, French, and more.
            </ListItem>
          </List>
        </Box>

        {/* Analytics Mockup */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={2}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Full Visibility Into Every Call
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            Know exactly what your customers are calling about, when they call, and how every interaction ends. Data-driven insights to grow your business.
          </Text>
          <Box borderRadius="lg" overflow="hidden" boxShadow="xl" mb={4}>
            <NovaVoiceAnalytics />
          </Box>
          <Text fontSize="sm" color={mutedText} textAlign="center">
            Monthly analytics with call reasons, peak hours, sentiment analysis, and cost savings breakdown
          </Text>
        </Box>

        {/* Industries */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={2}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Built for Businesses That Live and Die by the Phone
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            NovaVoice is designed for industries where every missed call has a direct cost.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Healthcare &amp; Dental
              </Heading>
              <Text fontSize="md" color={bodyTextColor} mb={3}>
                Schedule appointments, handle prescription refill inquiries, confirm insurance details, and send appointment reminders. 36% of healthcare consumers prefer voice calls over any other channel.
              </Text>
              <Link href="/products/novavoice/use-cases/veterinarian" style={{ color: '#F25C05', fontWeight: 700, fontSize: '0.9rem' }}>
                See Case Study: Veterinary Clinic →
              </Link>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Home Services
              </Heading>
              <Text fontSize="md" color={bodyTextColor} mb={3}>
                Plumbers, electricians, HVAC, and contractors miss 62% of inbound calls — at $1,200 lost per missed call. NovaVoice captures every lead and books service appointments on the spot.
              </Text>
              <Link href="/products/novavoice/use-cases/home-services" style={{ color: '#F25C05', fontWeight: 700, fontSize: '0.9rem' }}>
                See Case Study: Roofing Company →
              </Link>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Legal Services
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                Phone leads are worth 5-10x more than form fills for law firms. NovaVoice qualifies potential clients, captures case details, and schedules consultations — so no high-value lead is lost.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Real Estate
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                Phone calls drive 38% of all real estate conversions. NovaVoice answers property inquiries, schedules showings, and captures buyer/seller information while you&apos;re at the closing table.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Auto Repair &amp; Dealerships
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                Book service appointments, provide repair status updates, answer parts availability questions, and capture new customer leads — all without pulling a technician off the floor.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Restaurants &amp; Hospitality
              </Heading>
              <Text fontSize="md" color={bodyTextColor} mb={3}>
                Handle reservations, answer menu questions, take catering inquiries, and manage event bookings. Restaurants lose up to $1,500/month from just five missed calls daily.
              </Text>
              <Link href="/products/novavoice/use-cases/restaurant" style={{ color: '#F25C05', fontWeight: 700, fontSize: '0.9rem' }}>
                See Case Study: Italian Restaurant →
              </Link>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Pricing */}
        <Box mb={16} id="pricing">
          <Heading
            as="h2"
            size="lg"
            mb={2}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
            textAlign="center"
          >
            Simple, Transparent Pricing
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={8} textAlign="center" maxW="600px" mx="auto">
            No per-minute charges. No hidden fees. One setup cost, one monthly price — that&apos;s it.
          </Text>

          <Box
            maxW="520px"
            mx="auto"
            bg={cardBg}
            borderRadius="xl"
            boxShadow="xl"
            borderWidth="2px"
            borderColor="#F25C05"
            overflow="hidden"
          >
            <Box bg="#F25C05" py={4} px={8} textAlign="center">
              <Heading as="h3" size="lg" color="#fff" fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
                NovaVoice AI Phone Agent
              </Heading>
            </Box>
            <Box p={{ base: 6, md: 8 }}>
              <Flex direction={{ base: "column", sm: "row" }} gap={6} mb={6}>
                <Box flex={1} textAlign="center" p={4} bg={problemBg} borderRadius="lg">
                  <Text fontSize="sm" color={mutedText} mb={1} fontWeight={600}>One-Time Setup</Text>
                  <Text fontSize="3xl" fontWeight={900} color={headingColor} fontFamily="Montserrat, Arial, sans-serif">
                    $1,000
                  </Text>
                  <Text fontSize="xs" color={mutedText}>custom agent build</Text>
                </Box>
                <Box flex={1} textAlign="center" p={4} bg={problemBg} borderRadius="lg">
                  <Text fontSize="sm" color={mutedText} mb={1} fontWeight={600}>Monthly</Text>
                  <Text fontSize="3xl" fontWeight={900} color={headingColor} fontFamily="Montserrat, Arial, sans-serif">
                    $639
                  </Text>
                  <Text fontSize="xs" color={mutedText}>per month</Text>
                </Box>
              </Flex>

              <List spacing={3} color={bodyTextColor} pl={2} mb={6}>
                <ListItem fontSize="sm">
                  <ListIcon as={CheckCircleIcon} color="#F25C05" />
                  Custom AI agent trained on your business
                </ListItem>
                <ListItem fontSize="sm">
                  <ListIcon as={CheckCircleIcon} color="#F25C05" />
                  24/7 call answering — unlimited calls
                </ListItem>
                <ListItem fontSize="sm">
                  <ListIcon as={CheckCircleIcon} color="#F25C05" />
                  Appointment booking &amp; calendar integration
                </ListItem>
                <ListItem fontSize="sm">
                  <ListIcon as={CheckCircleIcon} color="#F25C05" />
                  Real-time transcripts &amp; analytics dashboard
                </ListItem>
                <ListItem fontSize="sm">
                  <ListIcon as={CheckCircleIcon} color="#F25C05" />
                  Lead capture &amp; CRM integration
                </ListItem>
                <ListItem fontSize="sm">
                  <ListIcon as={CheckCircleIcon} color="#F25C05" />
                  Intelligent escalation to your team
                </ListItem>
                <ListItem fontSize="sm">
                  <ListIcon as={CheckCircleIcon} color="#F25C05" />
                  Ongoing updates &amp; optimization
                </ListItem>
              </List>

              <Box bg={problemBg} p={4} borderRadius="lg" mb={6}>
                <Text fontSize="sm" color={bodyTextColor} textAlign="center">
                  <b>That&apos;s 85-95% less</b> than a full-time receptionist — with 24/7 coverage, zero sick days, and every call answered.
                </Text>
              </Box>

              <Button
                as="a"
                href="#get-started"
                bg="#F25C05"
                color="#fff"
                _hover={{ bg: "#d94e04" }}
                fontWeight={700}
                borderRadius="6px"
                size="lg"
                w="100%"
                py={7}
                fontSize="lg"
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Lead Capture Form */}
        <Box mb={16} id="get-started">
          <Heading
            as="h2"
            size="lg"
            mb={2}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
            textAlign="center"
          >
            Ready to Stop Missing Calls?
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={8} textAlign="center" maxW="600px" mx="auto">
            Tell us about your business and we&apos;ll show you how NovaVoice can start answering your phones.
          </Text>

          <Box
            maxW="600px"
            mx="auto"
            bg={cardBg}
            borderRadius="xl"
            boxShadow="xl"
            borderWidth="1px"
            borderColor={border}
            p={{ base: 6, md: 10 }}
          >
            {status === "success" ? (
              <Flex direction="column" align="center" py={10}>
                <Flex
                  w={16}
                  h={16}
                  borderRadius="full"
                  bg="rgba(242, 92, 5, 0.1)"
                  align="center"
                  justify="center"
                  mb={4}
                >
                  <Icon as={CheckCircleIcon} w={8} h={8} color="#F25C05" />
                </Flex>
                <Heading as="h3" size="lg" mb={2} color={text} textAlign="center">
                  Thanks! We&apos;ll be in touch shortly.
                </Heading>
                <Text color={mutedText} textAlign="center" maxW="400px">
                  We&apos;ve received your inquiry and will reach out within one business day to discuss your AI phone agent.
                </Text>
              </Flex>
            ) : (
              <form onSubmit={handleSubmit}>
                <Stack spacing={5}>
                  <Flex direction={{ base: "column", sm: "row" }} gap={4}>
                    <FormControl isRequired flex={1}>
                      <FormLabel color={text} fontSize="sm" fontWeight={600}>
                        Full Name
                      </FormLabel>
                      <Input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        bg={inputBg}
                        color={text}
                        borderColor={border}
                        _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                        size="lg"
                      />
                    </FormControl>
                    <FormControl isRequired flex={1}>
                      <FormLabel color={text} fontSize="sm" fontWeight={600}>
                        Work Email
                      </FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        bg={inputBg}
                        color={text}
                        borderColor={border}
                        _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                        size="lg"
                      />
                    </FormControl>
                  </Flex>

                  <Flex direction={{ base: "column", sm: "row" }} gap={4}>
                    <FormControl flex={1}>
                      <FormLabel color={text} fontSize="sm" fontWeight={600}>
                        Business Name
                      </FormLabel>
                      <Input
                        name="organization_name"
                        value={form.organization_name}
                        onChange={handleChange}
                        placeholder="Riverside Dental"
                        bg={inputBg}
                        color={text}
                        borderColor={border}
                        _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                        size="lg"
                      />
                    </FormControl>
                    <FormControl flex={1}>
                      <FormLabel color={text} fontSize="sm" fontWeight={600}>
                        Industry
                      </FormLabel>
                      <Input
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        placeholder="e.g., Dental, HVAC, Legal"
                        bg={inputBg}
                        color={text}
                        borderColor={border}
                        _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                        size="lg"
                      />
                    </FormControl>
                  </Flex>

                  <FormControl>
                    <FormLabel color={text} fontSize="sm" fontWeight={600}>
                      How many calls does your business get per day?
                    </FormLabel>
                    <Textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="e.g., About 20-30 calls/day. We miss a lot during lunch and after 5 PM. Most calls are appointment requests and pricing questions..."
                      rows={4}
                      bg={inputBg}
                      color={text}
                      borderColor={border}
                      _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                      size="lg"
                    />
                  </FormControl>

                  {status === "error" && (
                    <Flex
                      align="center"
                      gap={2}
                      bg="rgba(220, 38, 38, 0.1)"
                      borderRadius="lg"
                      px={4}
                      py={3}
                    >
                      <Icon as={WarningIcon} color="red.400" w={4} h={4} />
                      <Text fontSize="sm" color="red.400">
                        {errorMsg}
                      </Text>
                    </Flex>
                  )}

                  <Button
                    type="submit"
                    isLoading={status === "submitting"}
                    loadingText="Sending..."
                    size="lg"
                    fontWeight={700}
                    bg="#F25C05"
                    color="#fff"
                    _hover={{ bg: "#d94e04" }}
                    w="100%"
                    py={7}
                    fontSize="lg"
                  >
                    Get Your AI Phone Agent
                  </Button>

                  <Text fontSize="xs" color={mutedText} textAlign="center">
                    We respect your privacy and will never share your information.
                  </Text>
                </Stack>
              </form>
            )}
          </Box>
        </Box>

        {/* Final CTA */}
        <Box textAlign="center" py={10} px={4} bg={cardBg} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
          <Heading
            as="h2"
            size="lg"
            mb={4}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Every Missed Call Is Money Lost
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6} maxW="600px" mx="auto">
            Small businesses lose an average of $126,000 per year from unanswered calls. NovaVoice makes sure your phone is always answered — so you can focus on running your business.
          </Text>
          <Flex gap={4} justify="center" direction={{ base: "column", sm: "row" }}>
            <Button
              as="a"
              href="#get-started"
              bg="#F25C05"
              color="#fff"
              _hover={{ bg: "#d94e04" }}
              fontWeight={700}
              borderRadius="6px"
              size="lg"
            >
              Get Started
            </Button>
            <Button
              as={Link}
              href="/contact"
              variant="outline"
              borderColor="#F25C05"
              color="#F25C05"
              _hover={{ bg: "rgba(242, 92, 5, 0.1)" }}
              fontWeight={700}
              borderRadius="6px"
              size="lg"
            >
              Talk to Us
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
