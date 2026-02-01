"use client";

import { Box, Flex, Heading, Text, List, ListItem, ListIcon, useColorModeValue, Image } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Hero from "@/components/Hero";

export default function ServicesPage() {
  const headingColor = useColorModeValue('#181f2a', '#fff');
  const bodyTextColor = useColorModeValue('#222', '#d1d5db');
  const whyTextColor = useColorModeValue('#222', '#fff');

  return (
    <>
      <Hero
        image="/hero-services.webp"
        heading="Our Services"
        subheading="It starts with understanding where you stand. Our Digital Readiness Assessment is the entry point — from there, we build what you need."
        buttonText="Book Your Assessment"
        buttonLink="/contact"
      />
    <Box maxW="1000px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>

      {/* Digital Readiness Assessment */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={10}>
        <Box flex={1} pr={{ md: 6 }}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Digital Readiness Assessment
          </Heading>
          <Text color={bodyTextColor} mb={2}>
            Most companies know they need to modernize. Few know where to start. That&apos;s what this assessment tells you. We use AI-facilitated interviews to talk to stakeholders across your organization — in parallel, not sequentially — and synthesize everything into a clear picture of where you stand.
          </Text>
          <List spacing={2} color={bodyTextColor} pl={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>AI-Facilitated Interviews:</b> Your team talks to our platform on their own time. No scheduling nightmares, no six-week engagement just to gather input.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Multi-Dimensional Analysis:</b> Technology maturity, process efficiency, team readiness, data infrastructure, and AI opportunities — all in one assessment.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Professional Report &amp; Roadmap:</b> A prioritized plan with realistic timelines. Not a shelf document — a working blueprint for what to do next.</ListItem>
          </List>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '300px' }}>
          <Image src="DigitalTransformationService.webp" alt="Digital readiness assessment" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '180px', md: '220px' }} fallbackSrc="https://via.placeholder.com/300x220?text=Assessment" />
        </Box>
      </Flex>

      {/* Digital Transformation Strategy */}
      <Flex direction={{ base: 'column', md: 'row-reverse' }} align="center" gap={8} mb={10}>
        <Box flex={1} pl={{ md: 6 }}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Digital Transformation Strategy
          </Heading>
          <Text color={bodyTextColor} mb={2}>
            Once you know where you stand, the next step is a detailed plan to get where you need to be. We work with your leadership team to turn assessment findings into a transformation strategy — with clear priorities, realistic budgets, and a timeline your team can actually execute.
          </Text>
          <List spacing={2} color={bodyTextColor} pl={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Assessment-Informed:</b> Built on real data from your organization, not generic frameworks.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Prioritized Roadmap:</b> Clear plan with realistic timelines. No 200-page strategy decks that sit on a shelf.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Implementation-Ready:</b> Every recommendation comes with a clear path to execution — because we&apos;re the ones who&apos;ll build it.</ListItem>
          </List>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '300px' }}>
          <Image src="MatrixScreen.webp" alt="Digital transformation strategy" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '180px', md: '220px' }} fallbackSrc="https://via.placeholder.com/300x220?text=Strategy" />
        </Box>
      </Flex>

      {/* Custom AI-Powered Software Development */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={10}>
        <Box flex={1} pr={{ md: 6 }}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Custom AI-Powered Software Development
          </Heading>
          <Text color={bodyTextColor} mb={2}>
            Most businesses don&apos;t need another SaaS subscription. They need software built around how they actually work. We design and build custom AI-powered tools — from internal dashboards to client-facing platforms — tailored to your specific workflows.
          </Text>
          <List spacing={2} color={bodyTextColor} pl={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Bespoke Solutions:</b> Software built for your business, not adapted from someone else&apos;s template.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>AI Where It Counts:</b> We embed AI into the parts of your workflow where it creates real efficiency gains.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Full Ownership:</b> You own the code. No vendor lock-in, no surprise licensing fees down the road.</ListItem>
          </List>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '300px' }}>
          <Image src="advancedAnalytics.webp" alt="Custom AI software development" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '180px', md: '220px' }} fallbackSrc="https://via.placeholder.com/300x220?text=Custom+AI" />
        </Box>
      </Flex>

      {/* Advanced Analytics and AI */}
      <Flex direction={{ base: 'column', md: 'row-reverse' }} align="center" gap={8} mb={10}>
        <Box flex={1} pl={{ md: 6 }}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Advanced Analytics and AI
          </Heading>
          <Text color={bodyTextColor} mb={2}>
            You&apos;re sitting on data you&apos;re not using. We help you turn it into something actionable — whether that&apos;s predictive models, automated reporting, or AI agents that handle repetitive decisions so your team can focus on work that matters.
          </Text>
          <List spacing={2} color={bodyTextColor} pl={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Actionable Insights:</b> Go from raw data to decisions that move the needle.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Machine Learning:</b> Deploy models that learn from your data and improve over time.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>AI Agents:</b> Automate repetitive analysis and decision-making with purpose-built AI.</ListItem>
          </List>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '300px' }}>
          <Image src="implementationServices.webp" alt="Analytics and AI" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '180px', md: '220px' }} fallbackSrc="https://via.placeholder.com/300x220?text=Analytics+AI" />
        </Box>
      </Flex>

      {/* Systems Integration & Data Infrastructure */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={10}>
        <Box flex={1} pr={{ md: 6 }}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Systems Integration &amp; Data Infrastructure
          </Heading>
          <Text color={bodyTextColor} mb={2}>
            Your CRM doesn&apos;t talk to your ERP. Your spreadsheets live in three different places. Sound familiar? We connect your systems into a single source of truth so your team stops wasting time hunting for information.
          </Text>
          <List spacing={2} color={bodyTextColor} pl={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Data Integration:</b> Connect your existing tools and data sources into one unified system.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Clean Architecture:</b> Organized, well-documented data infrastructure that scales with your business.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>No Rip-and-Replace:</b> We work with your existing tools where possible. No unnecessary migrations.</ListItem>
          </List>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '300px' }}>
          <Image src="Data Cloud.webp" alt="Systems integration" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '180px', md: '220px' }} fallbackSrc="https://via.placeholder.com/300x220?text=Integration" />
        </Box>
      </Flex>

      {/* Cloud Migration Services */}
      <Flex direction={{ base: 'column', md: 'row-reverse' }} align="center" gap={8} mb={10}>
        <Box flex={1} pl={{ md: 6 }}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Cloud Migration Services
          </Heading>
          <Text color={bodyTextColor} mb={2}>
            Still running critical systems on aging hardware or local servers? We move your data and applications to the cloud — securely, with minimal disruption, and without the sticker shock that comes from over-provisioning.
          </Text>
          <List spacing={2} color={bodyTextColor} pl={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Assessment &amp; Planning:</b> Evaluate what should move to the cloud and what shouldn&apos;t.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Seamless Migration:</b> Move data, applications, and workloads with minimal downtime.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Cost Optimization:</b> Right-size your cloud setup so you&apos;re not paying for resources you don&apos;t use.</ListItem>
          </List>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '300px' }}>
          <Image src="advancedAnalytics.webp" alt="Cloud migration" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '180px', md: '220px' }} fallbackSrc="https://via.placeholder.com/300x220?text=Cloud+Migration" />
        </Box>
      </Flex>

      {/* Data Governance & Security */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={10}>
        <Box flex={1} pr={{ md: 6 }}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Data Governance &amp; Security
          </Heading>
          <Text color={bodyTextColor} mb={2}>
            AI is only as good as the data you feed it. We help you get your data house in order — clean, secure, compliant, and ready to power the tools your business needs.
          </Text>
          <List spacing={2} color={bodyTextColor} pl={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Policy &amp; Process:</b> Clear data governance policies your team can actually follow.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Compliance:</b> Meet regulatory requirements without grinding your operations to a halt.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Security:</b> Protect your data from threats with practical, proportionate security measures.</ListItem>
          </List>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '300px' }}>
          <Image src="dataGovernance.webp" alt="Data governance" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '180px', md: '220px' }} fallbackSrc="https://via.placeholder.com/300x220?text=Governance" />
        </Box>
      </Flex>

      {/* Why Choose Innovaas Solutions? */}
      <Heading as="h3" size="2xl" mb={2} color={headingColor} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif" textAlign="center">
        Why Innovaas?
      </Heading>
      <Box
        mt={16}
        mb={8}
        px={0}
        py={0}
        position="relative"
        borderRadius="xl"
        overflow="hidden"
        bg="transparent"
      >
        <Box
          position="absolute"
          inset={0}
          zIndex={0}
          bgImage="url('/images/why-choose-bg.jpg')"
          bgSize="cover"
          bgPosition="center"
          opacity={0.25}
          filter="brightness(0.7)"
        />
        <Box position="relative" zIndex={1} maxW="1100px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 2, md: 8 }}>
          <Box
            display="grid"
            gridTemplateColumns={{ base: '1fr', md: '1fr 1px 1fr' }}
            gridTemplateRows={{ base: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={{ base: 8, md: 0 }}
            alignItems="center"
            justifyItems="center"
            minH="350px"
          >
            {/* Left column */}
            <Box w="100%" display="flex" flexDirection="column" alignItems="center" gap={12} gridRow={{ base: '1/3', md: '1/3' }}>
              <Box textAlign="center" w="100%">
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  <Box as="span" color="#F25C05" fontSize="2xl" mr={2}>
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </Box>
                  <Heading as="h3" size="lg" color={whyTextColor} fontWeight={800}>
                    We Build What We Recommend
                  </Heading>
                </Box>
                <Text color={whyTextColor} fontSize="lg">
                  FlowForge and NovaCRM are production software we built and maintain. When we say we can build custom AI tools, we have the receipts.
                </Text>
              </Box>
              <Box textAlign="center" w="100%">
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  <Box as="span" color="#F25C05" fontSize="2xl" mr={2}>
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M16.53 11.06l-4.24-4.24c-.39-.39-1.02-.39-1.41 0l-4.24 4.24c-.39.39-.39 1.02 0 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l4.24-4.24c.39-.39.39-1.02 0-1.41z"/></svg>
                  </Box>
                  <Heading as="h3" size="lg" color={whyTextColor} fontWeight={800}>
                    Assessment to Deployment
                  </Heading>
                </Box>
                <Text color={whyTextColor} fontSize="lg">
                  One team from your first assessment through go-live. No handoffs between firms, no lost context, no finger-pointing.
                </Text>
              </Box>
            </Box>
            {/* Vertical divider */}
            <Box display={{ base: 'none', md: 'block' }} h="80%" w="1px" bg="whiteAlpha.400" mx={8} gridRow="1/3" />
            {/* Right column */}
            <Box w="100%" display="flex" flexDirection="column" alignItems="center" gap={12} gridRow={{ base: '3/5', md: '1/3' }}>
              <Box textAlign="center" w="100%">
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  <Box as="span" color="#F25C05" fontSize="2xl" mr={2}>
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                  </Box>
                  <Heading as="h3" size="lg" color={whyTextColor} fontWeight={800}>
                    AI-First, Not AI-Hype
                  </Heading>
                </Box>
                <Text color={whyTextColor} fontSize="lg">
                  We use AI where it creates real value and skip it where it doesn&apos;t. No buzzword padding. No AI for AI&apos;s sake.
                </Text>
              </Box>
              <Box textAlign="center" w="100%">
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  <Box as="span" color="#F25C05" fontSize="2xl" mr={2}>
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 10z"/></svg>
                  </Box>
                  <Heading as="h3" size="lg" color={whyTextColor} fontWeight={800}>
                    Senior Team, Every Project
                  </Heading>
                </Box>
                <Text color={whyTextColor} fontSize="lg">
                  The people who understand your problem are the same people writing the code. No junior handoffs. No learning on your dime.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}
