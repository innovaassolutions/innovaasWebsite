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
        heading="We Build the AI Tools Your Business Actually Needs"
        subheading="Not another consulting deck. We build custom AI-powered software that solves real problems — from strategy through deployment."
        buttonText="Let's Talk"
        buttonLink="/contact"
      />
      <Box maxW="1200px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
        {/* What We Do Section */}
        <Heading as="h2" size="xl" mb={2} color={headingColor} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif" textAlign="center">
          What We Do
        </Heading>
        <Text fontSize="lg" color={bodyTextColor} textAlign="center" mb={10} maxW="700px" mx="auto">
          We take you from &quot;we should probably use AI&quot; to running custom software that makes your team faster.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={16}>
          <Box bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Understand Your Business
            </Heading>
            <Text color={bodyTextColor}>
              We start by figuring out where AI actually makes sense for you — not where it sounds impressive. Real assessment, real priorities.
            </Text>
          </Box>
          <Box bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Design the Solution
            </Heading>
            <Text color={bodyTextColor}>
              We architect software that fits your workflows, your team, and your budget. No off-the-shelf compromises.
            </Text>
          </Box>
          <Box bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Build &amp; Deploy
            </Heading>
            <Text color={bodyTextColor}>
              We write the code, ship the product, and make sure it works in the real world. Then we stick around to make sure it keeps working.
            </Text>
          </Box>
        </SimpleGrid>

        {/* Products Proof Section */}
        <Heading as="h2" size="xl" mb={2} color={headingColor} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif" textAlign="center">
          Built by Us. Used by Real Businesses.
        </Heading>
        <Text fontSize="lg" color={bodyTextColor} textAlign="center" mb={10} maxW="700px" mx="auto">
          We don&apos;t just talk about building software. Here&apos;s proof.
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
              AI-driven platform that runs structured interviews and assessments in parallel — then synthesizes everything into professional reports. Built for consultants, coaches, and educators.
            </Text>
            <Text fontSize="sm" color={bodyTextColor} fontStyle="italic">&quot;A Junior Consultant in your Browser&quot;</Text>
          </Box>
          <Box flex={1} bg={cardBg} borderRadius="xl" p={8} borderWidth="1px" borderColor={borderColor} boxShadow="md">
            <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              NovaCRM
            </Heading>
            <Text color={bodyTextColor} mb={3}>
              AI-first CRM for contact management, deal tracking, and pipeline visualization. Built for businesses that want AI baked in, not bolted on.
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
              We Build, Not Just Advise
            </Heading>
            <Text color={bodyTextColor}>
              FlowForge and NovaCRM are production software serving real clients. That&apos;s not a pitch — it&apos;s a portfolio. We build what we recommend.
            </Text>
          </Box>
          <Box textAlign="center" p={6}>
            <Icon as={FaBrain} w={10} h={10} color="#F25C05" mb={4} />
            <Heading as="h3" size="md" mb={3} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              AI-First Approach
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
              The people in your strategy meetings are the same people building your software. No junior handoffs. No lost context between teams.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
