"use client";

import { Box, Flex, Heading, Text, List, ListItem, ListIcon, useColorModeValue, Image } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function ServicesPage() {
  const headingColor = useColorModeValue('#181f2a', '#fff');
  const bodyTextColor = useColorModeValue('#222', '#d1d5db');

  return (
    <Box maxW="1000px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      {/* Digital Transformation Strategy */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={10}>
        <Box flex={1} pr={{ md: 6 }}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Digital Transformation Strategy
          </Heading>
          <Text color={bodyTextColor} mb={2}>
            We help you develop a comprehensive digital transformation strategy tailored to your specific needs. Our expertise ensures that your transition to digital operations is smooth, efficient, and aligned with your business goals.
          </Text>
          <List spacing={2} color={bodyTextColor} pl={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Current State Assessment:</b> Evaluate your existing processes and technology landscape.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Future State Vision:</b> Define the desired future state with clear objectives and milestones.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Roadmap Development:</b> Create a detailed roadmap for implementation, including timelines and resource allocation.</ListItem>
          </List>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '300px' }}>
          <Image src="DigitalTransformationService.webp" alt="Digital strategy" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '180px', md: '220px' }} fallbackSrc="https://via.placeholder.com/300x220?text=Strategy" />
        </Box>
      </Flex>

      {/* Unified Namespace Implementation */}
      <Flex direction={{ base: 'column', md: 'row-reverse' }} align="center" gap={8} mb={10}>
        <Box flex={1} pl={{ md: 6 }}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Unified Namespace Implementation
          </Heading>
          <Text color={bodyTextColor} mb={2}>
            A unified namespace is the cornerstone of an effective digital transformation. We assist in building a centralized repository where data from any machine, sensor, or human activity is contextualized and stored.
          </Text>
          <List spacing={2} color={bodyTextColor} pl={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Data Integration:</b> Connect diverse data sources into a unified system.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Contextualization:</b> Ensure data is appropriately tagged and organized for easy access and analysis.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Scalability:</b> Design the system to scale with your business growth and data needs.</ListItem>
          </List>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '300px' }}>
          <Image src="ImplementationServices.webp" alt="Unified namespace" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '180px', md: '220px' }} fallbackSrc="https://via.placeholder.com/300x220?text=Namespace" />
        </Box>
      </Flex>

      {/* Cloud Migration Services */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={10}>
        <Box flex={1} pr={{ md: 6 }}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Cloud Migration Services
          </Heading>
          <Text color={bodyTextColor} mb={2}>
            Move your data securely and efficiently from on-premises systems to the cloud. Our cloud migration services ensure minimal disruption to your operations.
          </Text>
          <List spacing={2} color={bodyTextColor} pl={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Assessment and Planning:</b> Evaluate the current environment and plan the migration process.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Data Migration:</b> Execute the migration of data, applications, and workloads to the cloud.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Optimization:</b> Optimize your cloud environment for performance, security, and cost efficiency.</ListItem>
          </List>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '300px' }}>
          <Image src="Data Cloud.webp" alt="Cloud migration" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '180px', md: '220px' }} fallbackSrc="https://via.placeholder.com/300x220?text=Cloud+Migration" />
        </Box>
      </Flex>

      {/* Data Governance & Security */}
      <Flex direction={{ base: 'column', md: 'row-reverse' }} align="center" gap={8} mb={10}>
        <Box flex={1} pl={{ md: 6 }}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Data Governance & Security
          </Heading>
          <Text color={bodyTextColor} mb={2}>
            Ensure your data is managed securely and in compliance with industry standards. Our data governance services help you maintain the integrity, availability, and confidentiality of your data.
          </Text>
          <List spacing={2} color={bodyTextColor} pl={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Policy Development:</b> Create data governance policies and procedures.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Compliance:</b> Ensure compliance with relevant regulations and standards.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Security:</b> Implement robust security measures to protect your data from threats.</ListItem>
          </List>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '300px' }}>
          <Image src="dataGovernance.webp" alt="Data governance" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '180px', md: '220px' }} fallbackSrc="https://via.placeholder.com/300x220?text=Governance" />
        </Box>
      </Flex>

      {/* Advanced Analytics and AI */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={10}>
        <Box flex={1} pr={{ md: 6 }}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Advanced Analytics and AI
          </Heading>
          <Text color={bodyTextColor} mb={2}>
            Unlock the full potential of your data with advanced analytics and artificial intelligence. We provide solutions to derive actionable insights from your data.
          </Text>
          <List spacing={2} color={bodyTextColor} pl={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Data Analytics:</b> Use advanced analytical techniques to interpret your data.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>Machine Learning:</b> Develop and deploy machine learning models to automate decision-making.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="#F25C05" /><b>AI Solutions:</b> Integrate AI capabilities to enhance operational efficiency and innovation.</ListItem>
          </List>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '300px' }}>
          <Image src="advancedAnalytics.webp" alt="Analytics and AI" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '180px', md: '220px' }} fallbackSrc="https://via.placeholder.com/300x220?text=Analytics+AI" />
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
        {/* Background image overlay */}
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
              {/* Expertise */}
              <Box textAlign="center" w="100%">
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  <Box as="span" color="#F25C05" fontSize="2xl" mr={2}>
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </Box>
                  <Heading as="h3" size="lg" color="white" fontWeight={800}>
                    Expertise
                  </Heading>
                </Box>
                <Text color="white" fontSize="lg">
                  Our team has extensive experience in digital transformation and data management.
                </Text>
              </Box>
              {/* End-to-End Support */}
              <Box textAlign="center" w="100%">
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  <Box as="span" color="#F25C05" fontSize="2xl" mr={2}>
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M16.53 11.06l-4.24-4.24c-.39-.39-1.02-.39-1.41 0l-4.24 4.24c-.39.39-.39 1.02 0 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l4.24-4.24c.39-.39.39-1.02 0-1.41z"/></svg>
                  </Box>
                  <Heading as="h3" size="lg" color="white" fontWeight={800}>
                    End-to-End Support
                  </Heading>
                </Box>
                <Text color="white" fontSize="lg">
                  From strategy development to implementation and optimization, we provide comprehensive support.
                </Text>
              </Box>
            </Box>
            {/* Vertical divider */}
            <Box display={{ base: 'none', md: 'block' }} h="80%" w="1px" bg="whiteAlpha.400" mx={8} gridRow="1/3" />
            {/* Right column */}
            <Box w="100%" display="flex" flexDirection="column" alignItems="center" gap={12} gridRow={{ base: '3/5', md: '1/3' }}>
              {/* Customization */}
              <Box textAlign="center" w="100%">
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  <Box as="span" color="#F25C05" fontSize="2xl" mr={2}>
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                  </Box>
                  <Heading as="h3" size="lg" color="white" fontWeight={800}>
                    Customization
                  </Heading>
                </Box>
                <Text color="white" fontSize="lg">
                  We tailor our services to meet the unique needs of your business.
                </Text>
              </Box>
              {/* Proven Track Record */}
              <Box textAlign="center" w="100%">
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  <Box as="span" color="#F25C05" fontSize="2xl" mr={2}>
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 10z"/></svg>
                  </Box>
                  <Heading as="h3" size="lg" color="white" fontWeight={800}>
                    Proven Track Record
                  </Heading>
                </Box>
                <Text color="white" fontSize="lg">
                  Our successful projects demonstrate our ability to deliver impactful results.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
} 