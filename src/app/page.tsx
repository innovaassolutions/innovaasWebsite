"use client";

import { Box, Flex, Heading, Text, Image, useColorModeValue, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaCode, FaBrain, FaUserTie } from 'react-icons/fa';
import Link from 'next/link';
import Hero from "@/components/Hero";

export default function HomePage() {
  const headingColor = useColorModeValue('#181f2a', '#fff');
  const bodyTextColor = useColorModeValue('#222', '#d1d5db');
  const cardBg = useColorModeValue('white', '#232b39');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      <Hero
        image="/home-hero.webp"
        heading="Find Out Where Your Business Really Stands — Then Fix It"
        subheading="Our digital readiness assessment shows you exactly where you are. Then we build the roadmap and the solutions to get you where you need to be. We don't just tell you what's wrong — we fix it."
        buttonText="Book Your Assessment"
        buttonLink="/contact"
      />
      <Box maxW="1200px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
        {/* What We Do Section */}
        <Heading as="h2" size="xl" mb={2} color={headingColor} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif" textAlign="center">
          What We Do
        </Heading>
        <Text fontSize="lg" color={bodyTextColor} textAlign="center" mb={10} maxW="700px" mx="auto">
          We figure out where you actually stand digitally, build a plan to close the gaps, and then do the work to get you there.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={16}>
          <Box bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Assess
            </Heading>
            <Text color={bodyTextColor}>
              We interview your stakeholders using AI to understand where you stand digitally. Technology, process, people — across the whole organization.
            </Text>
          </Box>
          <Box bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Roadmap
            </Heading>
            <Text color={bodyTextColor}>
              We synthesize findings into a prioritized roadmap. Not a 200-page deck — a clear plan with realistic timelines.
            </Text>
          </Box>
          <Box bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Build
            </Heading>
            <Text color={bodyTextColor}>
              We design and deploy the solutions your assessment revealed. Custom software, AI tools, system integrations — whatever moves the needle.
            </Text>
          </Box>
        </SimpleGrid>

        {/* Products Proof Section */}
        <Heading as="h2" size="xl" mb={2} color={headingColor} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif" textAlign="center">
          Powered by Our Own Technology
        </Heading>
        <Text fontSize="lg" color={bodyTextColor} textAlign="center" mb={10} maxW="700px" mx="auto">
          We don&apos;t just build for clients — we build and run our own platforms. Here&apos;s what powers our work.
        </Text>
        <Box mb={10}>
          <Image
            src="/products/flowforge-hero.png"
            alt="FlowForge AI platform"
            borderRadius="lg"
            objectFit="cover"
            w="100%"
            boxShadow="xl"
          />
        </Box>
        <Flex direction={{ base: 'column', md: 'row' }} gap={8} mb={16}>
          <Box flex={1} bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              FlowForge
            </Heading>
            <Text color={bodyTextColor} mb={3}>
              Our AI assessment platform interviews your team in parallel, synthesizes insights across all perspectives, and delivers professional reports — in days, not months.
            </Text>
            <Text fontSize="sm" color={bodyTextColor} fontStyle="italic">Our assessment methodology, encoded in software.</Text>
          </Box>
          <Box flex={1} bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              NovaCRM
            </Heading>
            <Text color={bodyTextColor} mb={3}>
              We built our own CRM from scratch — AI-first contact management, deal tracking, and pipeline visualization. We can build yours too.
            </Text>
            <Text fontSize="sm" color={bodyTextColor} fontStyle="italic">AI where it counts — not where it&apos;s trendy.</Text>
          </Box>
        </Flex>
        <Box textAlign="center" mb={16}>
          <Link href="/products" style={{ color: '#F25C05', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'underline' }}>
            See our products →
          </Link>
        </Box>

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
              FlowForge and NovaCRM are production software serving real users. That&apos;s not a pitch — it&apos;s a portfolio. We build what we recommend.
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
