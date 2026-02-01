"use client";

import { Box, Flex, Heading, Text, List, ListItem, ListIcon, useColorModeValue, Button, Image } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Hero from "@/components/Hero";

export default function ProductsPage() {
  const headingColor = useColorModeValue('#181f2a', '#fff');
  const bodyTextColor = useColorModeValue('#222', '#d1d5db');
  const cardBg = useColorModeValue('white', '#232b39');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      <Hero
        image="/hero-services.webp"
        heading="Our Products"
        subheading="These aren't side projects. They're production software serving real clients. And they're proof of what we can build for you."
        buttonText="Let's Talk"
        buttonLink="/contact"
      />
      <Box maxW="1000px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>

        {/* FlowForge */}
        <Box mb={16}>
          <Heading as="h2" size="xl" mb={2} color="#F25C05" fontWeight={900} fontFamily="Montserrat, Arial, sans-serif">
            FlowForge
          </Heading>
          <Text fontSize="lg" fontStyle="italic" color={bodyTextColor} mb={6}>
            Encode your expertise. Scale your practice.
          </Text>

          {/* Hero screenshot */}
          <Image
            src="/products/flowforge-hero.png"
            alt="FlowForge platform — leadership archetype results"
            borderRadius="lg"
            objectFit="cover"
            w="100%"
            mb={8}
            boxShadow="xl"
          />

          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            FlowForge is an AI-driven conversation platform built for management consultants, coaches, and educators. It runs structured interviews and assessments in parallel using AI agents — then synthesizes everything into professional, actionable reports.
          </Text>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            Instead of spending hours in back-to-back stakeholder interviews, your AI agents handle the conversations simultaneously. You get synthesized insights across all perspectives, ready for analysis and delivery.
          </Text>

          {/* Secondary screenshots */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={8}>
            <Box flex={1}>
              <Image
                src="/products/flowforge-interview.png"
                alt="FlowForge AI interview conversation"
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                boxShadow="md"
              />
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">AI-facilitated stakeholder interview</Text>
            </Box>
            <Box flex={1}>
              <Image
                src="/products/flowforge-archetypes.png"
                alt="FlowForge coaching results — leadership archetype discovery"
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                boxShadow="md"
              />
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">Synthesized coaching results — white-labeled</Text>
            </Box>
          </Flex>

          <List spacing={3} color={bodyTextColor} pl={2} mb={6}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Parallel AI Interviews:</b> Run structured conversations with multiple stakeholders at the same time. No more calendar bottlenecks.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Automated Synthesis:</b> AI compiles and cross-references responses into coherent, professional reports.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Multiple Methodologies:</b> Leadership coaching, organizational assessments, strategic discovery — bring your framework, FlowForge runs it.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>White-Label Ready:</b> Brand it as your own. Your clients see your name, your logo, your platform.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>No Login Required for Stakeholders:</b> Token-based access means zero friction for participants.
            </ListItem>
          </List>
          <Button
            as="a"
            href="https://flowforge.innovaas.co"
            target="_blank"
            rel="noopener noreferrer"
            bg="#F25C05"
            color="#fff"
            _hover={{ bg: "#d94e04" }}
            fontWeight={700}
            borderRadius="6px"
            size="md"
          >
            Visit FlowForge →
          </Button>
        </Box>

        {/* NovaCRM */}
        <Box mb={16}>
          <Heading as="h2" size="xl" mb={2} color="#F25C05" fontWeight={900} fontFamily="Montserrat, Arial, sans-serif">
            NovaCRM
          </Heading>
          <Text fontSize="lg" fontStyle="italic" color={bodyTextColor} mb={6}>
            AI where it counts — not where it&apos;s trendy.
          </Text>

          <Image
            src="/products/novacrm-dashboard.png"
            alt="NovaCRM sales dashboard with pipeline metrics"
            borderRadius="lg"
            objectFit="cover"
            w="100%"
            mb={8}
            boxShadow="xl"
          />

          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            NovaCRM is an AI-first CRM we built because every CRM we tried bolted AI on as an afterthought. Ours has it at the foundation — from composite deal health scoring that weighs activity recency, pipeline stage, close dates, and AI insights to flag at-risk deals before you lose them, to multi-provider AI (Anthropic, OpenAI, Gemini) powering everything from email copy to marketing collateral.
          </Text>
          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            Full marketing suite built in: brand management, email template builder, campaign orchestration with click tracking and analytics, AI image generation, and collateral management. Plus project tracking, proposal generation with e-signatures via DocuSign, and a client portal so your customers can self-serve.
          </Text>

          {/* Secondary screenshots */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={8}>
            <Box flex={1}>
              <Image
                src="/products/novacrm-contacts.png"
                alt="NovaCRM contact management"
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                boxShadow="md"
              />
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">Contact management with campaign tracking</Text>
            </Box>
            <Box flex={1}>
              <Image
                src="/products/novacrm-deals.png"
                alt="NovaCRM deal pipeline and tracking"
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                boxShadow="md"
              />
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">Deal pipeline with AI health scoring</Text>
            </Box>
          </Flex>

          <Text fontSize="sm" color={bodyTextColor} mb={6} fontStyle="italic">
            NovaCRM is currently in private beta. Interested in early access? Get in touch.
          </Text>
          <List spacing={3} color={bodyTextColor} pl={2} mb={6}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>AI Deal Health Scoring:</b> Composite scoring algorithm weighing activity recency, pipeline stage, close dates, probability, and AI insights — flags at-risk deals automatically.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Full Marketing Suite:</b> Brand management, email template builder, campaign orchestration with send tracking, click analytics, AI image generation, and collateral management.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Multi-Provider AI:</b> Anthropic, OpenAI, and Gemini — choose the right model for each task. AI writes email copy, generates images, and scores deal health.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Proposals &amp; E-Signatures:</b> Generate proposals, send for signing via DocuSign, track analytics — all without leaving the CRM.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Client Portal &amp; Projects:</b> Customer self-service portal with project tracking, document sharing, and preference management.
            </ListItem>
          </List>
          <Button
            as="a"
            href="https://novacrm.innovaas.co"
            target="_blank"
            rel="noopener noreferrer"
            bg="#F25C05"
            color="#fff"
            _hover={{ bg: "#d94e04" }}
            fontWeight={700}
            borderRadius="6px"
            size="md"
          >
            Visit NovaCRM →
          </Button>
        </Box>

        {/* CTA Section */}
        <Box textAlign="center" py={10} px={4} bg={cardBg} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Need Something Custom?
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6} maxW="600px" mx="auto">
            FlowForge and NovaCRM started as solutions to real problems. If your business has a problem that off-the-shelf software can&apos;t solve, let&apos;s talk about building something that can.
          </Text>
          <Button
            as={Link}
            href="/contact"
            bg="#F25C05"
            color="#fff"
            _hover={{ bg: "#d94e04" }}
            fontWeight={700}
            borderRadius="6px"
            size="lg"
          >
            Let&apos;s Talk
          </Button>
        </Box>
      </Box>
    </>
  );
}
