"use client";

import { Box, Flex, Heading, Text, useColorModeValue, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaCode, FaBrain, FaUserTie } from 'react-icons/fa';
import Link from 'next/link';
import Hero from "@/components/Hero";
import FlowForgeDashboard from "@/components/mockups/FlowForgeDashboard";

export default function HomePage() {
  const headingColor = useColorModeValue('#181f2a', '#fff');
  const bodyTextColor = useColorModeValue('#222', '#d1d5db');
  const cardBg = useColorModeValue('white', '#232b39');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      <Hero
        image="/home-hero.webp"
        heading="You Know Your Business Needs to Modernize. You're Just Not Sure Where to Start."
        subheading="You're not alone. Most growing businesses are in the same place — juggling disconnected systems, manual processes, and too many tools that don't talk to each other. We help you figure out where you actually stand, what to fix first, and then we do the work."
        buttonText="Let's Figure It Out Together"
        buttonLink="/contact"
      />
      <Box maxW="1200px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
        {/* What We Do Section */}
        <Heading as="h2" size="xl" mb={2} color={headingColor} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif" textAlign="center">
          Sound Familiar?
        </Heading>
        <Text fontSize="lg" color={bodyTextColor} textAlign="center" mb={10} maxW="700px" mx="auto">
          Your team wastes hours on things that should be automated. Your systems don&apos;t talk to each other. You know AI could help but you&apos;re not sure where — or who to trust. We&apos;ve helped businesses just like yours figure it out.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={16}>
          <Box bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              We Listen First
            </Heading>
            <Text color={bodyTextColor}>
              We talk to your people — across departments, across roles — to understand how your business actually runs. Not how an org chart says it should. That&apos;s where the real gaps show up.
            </Text>
          </Box>
          <Box bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              We Give You a Clear Plan
            </Heading>
            <Text color={bodyTextColor}>
              No 200-page strategy deck that sits on a shelf. You get a prioritized roadmap — what to fix first, what it&apos;ll take, and what the payoff looks like. Honest, practical, no fluff.
            </Text>
          </Box>
          <Box bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              We Build What You Need
            </Heading>
            <Text color={bodyTextColor}>
              Most consultants hand you a plan and wish you luck. We stick around and build the solution — custom software, AI tools, system integrations — whatever your business actually needs.
            </Text>
          </Box>
        </SimpleGrid>

        {/* Products Proof Section */}
        <Heading as="h2" size="xl" mb={2} color={headingColor} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif" textAlign="center">
          We Don&apos;t Just Advise — We Build
        </Heading>
        <Text fontSize="lg" color={bodyTextColor} textAlign="center" mb={10} maxW="700px" mx="auto">
          Anyone can write a report. We build real software that solves real problems. These are platforms we built and run ourselves — the same team that would work on your project.
        </Text>
        <Box mb={10} borderRadius="lg" overflow="hidden" boxShadow="xl">
          <FlowForgeDashboard />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={16}>
          <Box bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              FlowForge
            </Heading>
            <Text color={bodyTextColor} mb={3}>
              This is how we run your digital readiness assessment. It interviews your team in parallel using AI, finds the patterns humans miss, and delivers a clear report — in days, not months.
            </Text>
            <Text fontSize="sm" color={bodyTextColor} fontStyle="italic">The engine behind every assessment we deliver.</Text>
          </Box>
          <Box bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              NovaCRM
            </Heading>
            <Text color={bodyTextColor} mb={3}>
              We built our own CRM from scratch — AI-first contact management, deal tracking, and pipeline visualization. We can build yours too.
            </Text>
            <Text fontSize="sm" color={bodyTextColor} fontStyle="italic">AI where it counts — not where it&apos;s trendy.</Text>
          </Box>
          <Box bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              NovaKMS
            </Heading>
            <Text color={bodyTextColor} mb={3}>
              An AI-powered knowledge management system that processes documents, videos, and audio — then lets your team search and chat with your entire knowledge base in plain English.
            </Text>
            <Text fontSize="sm" color={bodyTextColor} fontStyle="italic">Your team&apos;s knowledge shouldn&apos;t walk out the door.</Text>
          </Box>
        </SimpleGrid>
        <Box textAlign="center" mb={16}>
          <Link href="/products" style={{ color: '#F25C05', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'underline' }}>
            See our products →
          </Link>
        </Box>

        {/* Companies We've Worked With */}
        <Heading as="h2" size="xl" mb={2} color={headingColor} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif" textAlign="center">
          Companies We&apos;ve Worked With
        </Heading>
        <Text fontSize="lg" color={bodyTextColor} textAlign="center" mb={10} maxW="600px" mx="auto">
          From precision manufacturing to smart irrigation — we work with companies that make real things.
        </Text>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={8} mb={16}>
          <Box
            bg="white"
            borderRadius="xl"
            p={8}
            borderWidth="1px"
            borderColor={borderColor}
            boxShadow="md"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box mb={4} h="60px" display="flex" alignItems="center" justifyContent="center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/clients/jazeera-paints.jpg" alt="Jazeera Paints" style={{ maxHeight: '55px', maxWidth: '55px' }} />
            </Box>
            <Heading as="h3" size="sm" mb={1} color="#181f2a" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Jazeera Paints
            </Heading>
            <Text fontSize="sm" color="#555">
              Paints &amp; Coatings Manufacturer · Saudi Arabia · 46+ Years
            </Text>
          </Box>
          <Box
            bg="white"
            borderRadius="xl"
            p={8}
            borderWidth="1px"
            borderColor={borderColor}
            boxShadow="md"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box mb={4} h="60px" display="flex" alignItems="center" justifyContent="center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/clients/alimex.jpg" alt="Alimex" style={{ maxHeight: '50px', maxWidth: '180px' }} />
            </Box>
            <Heading as="h3" size="sm" mb={1} color="#181f2a" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Alimex
            </Heading>
            <Text fontSize="sm" color="#555">
              Aluminium Cast Plate Manufacturing · Germany &amp; Malaysia · 50+ Years
            </Text>
          </Box>
          <Box
            bg="white"
            borderRadius="xl"
            p={8}
            borderWidth="1px"
            borderColor={borderColor}
            boxShadow="md"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box mb={4} h="60px" display="flex" alignItems="center" justifyContent="center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/clients/tamawira.svg" alt="Tamawira Enterprise" style={{ maxHeight: '50px', maxWidth: '180px' }} />
            </Box>
            <Heading as="h3" size="sm" mb={1} color="#181f2a" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Tamawira Enterprise
            </Heading>
            <Text fontSize="sm" color="#555">
              Precision Springs &amp; Wire-Forming · Automotive &amp; Electronics · Est. 1995
            </Text>
          </Box>
          <Box
            bg="white"
            borderRadius="xl"
            p={8}
            borderWidth="1px"
            borderColor={borderColor}
            boxShadow="md"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box mb={4} h="60px" display="flex" alignItems="center" justifyContent="center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/clients/cisgenics.png" alt="Cisgenics" style={{ maxHeight: '50px', maxWidth: '50px' }} />
            </Box>
            <Heading as="h3" size="sm" mb={1} color="#181f2a" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Cisgenics
            </Heading>
            <Text fontSize="sm" color="#555">
              AI-Powered Irrigation Control Systems · Agriculture &amp; Landscaping · 45+ Years
            </Text>
          </Box>
          <Box
            bg="white"
            borderRadius="xl"
            p={8}
            borderWidth="1px"
            borderColor={borderColor}
            boxShadow="md"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box mb={4} h="60px" display="flex" alignItems="center" justifyContent="center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/clients/jpi-solutions.jpg" alt="JPI Solutions" style={{ maxHeight: '55px', maxWidth: '180px' }} />
            </Box>
            <Heading as="h3" size="sm" mb={1} color="#181f2a" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              JPI Solutions
            </Heading>
            <Text fontSize="sm" color="#555">
              Industrial Automation &amp; SCADA Systems · Canada
            </Text>
          </Box>
          <Box
            bg="white"
            borderRadius="xl"
            p={8}
            borderWidth="1px"
            borderColor={borderColor}
            boxShadow="md"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box mb={4} h="60px" display="flex" alignItems="center" justifyContent="center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/clients/leading-with-meaning.png" alt="Leading With Meaning" style={{ maxHeight: '55px', maxWidth: '180px' }} />
            </Box>
            <Heading as="h3" size="sm" mb={1} color="#181f2a" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Leading With Meaning
            </Heading>
            <Text fontSize="sm" color="#555">
              Leadership Coaching &amp; Development · USA
            </Text>
          </Box>
        </SimpleGrid>

        {/* Why Innovaas */}
        <Heading as="h2" size="xl" mb={10} color={headingColor} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif" textAlign="center">
          Why Innovaas
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
          <Box textAlign="center" p={6}>
            <Icon as={FaCode} w={10} h={10} color="#F25C05" mb={4} />
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              We Build What We Recommend
            </Heading>
            <Text color={bodyTextColor}>
              FlowForge, NovaCRM, and NovaKMS are production software serving real users. That&apos;s not a pitch — it&apos;s a portfolio. We build what we recommend.
            </Text>
          </Box>
          <Box textAlign="center" p={6}>
            <Icon as={FaBrain} w={10} h={10} color="#F25C05" mb={4} />
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              AI-First, Not AI-Hype
            </Heading>
            <Text color={bodyTextColor}>
              Every solution we design starts with one question: where does AI create real value here? We use it where it matters, skip it where it doesn&apos;t.
            </Text>
          </Box>
          <Box textAlign="center" p={6}>
            <Icon as={FaUserTie} w={10} h={10} color="#F25C05" mb={4} />
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Senior People, Start to Finish
            </Heading>
            <Text color={bodyTextColor}>
              The people in your assessment meetings are the same people building your software. No junior handoffs. No lost context between teams.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
