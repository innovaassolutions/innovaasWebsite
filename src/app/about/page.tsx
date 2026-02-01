"use client";

import { Box, Flex, Heading, Text, useColorModeValue, Image, SimpleGrid } from '@chakra-ui/react';
import Hero from "@/components/Hero";

export default function AboutPage() {
  const headingColor = useColorModeValue('#181f2a', '#fff');
  const bodyTextColor = useColorModeValue('#222', '#d1d5db');
  const cardBg = useColorModeValue('white', '#232b39');
  const cardBg2 = useColorModeValue('gray.50', '#1a202c');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const accentColor = '#F25C05';

  return (
    <>
      <Hero
        image="/hero-about.webp"
        heading="About Innovaas"
        subheading="We assess your digital readiness, build the roadmap, and deliver the solutions. From first interview to working software."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    <Box maxW="900px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>

      {/* Origin Story */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={14}>
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Why We Exist
          </Heading>
          <Text color={bodyTextColor} mb={3}>
            Too many businesses know they need to modernize but have no idea where to start. They get generic advice, expensive consulting decks, and recommendations nobody follows through on.
          </Text>
          <Text color={bodyTextColor} mb={3}>
            Innovaas was founded to close that gap. We assess where you actually stand, build a roadmap that makes sense, and then do the work — custom software, AI tools, system integrations. No handoffs between firms. No lost context. No finger-pointing.
          </Text>
          <Text color={bodyTextColor}>
            We built FlowForge to power our own assessment process and NovaCRM to prove we practice what we preach. They&apos;re the same standard we bring to every client engagement.
          </Text>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '250px' }}>
          <Image src="SpaceShip.webp" alt="About Innovaas" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '160px', md: '220px' }} fallbackSrc="https://via.placeholder.com/250x220?text=About" />
        </Box>
      </Flex>

      {/* What Sets Us Apart */}
      <Box mb={14}>
        <Heading as="h2" size="lg" mb={8} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif" textAlign="center">
          What Sets Us Apart
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Box bg={cardBg} p={6} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
            <Text fontSize="2xl" mb={2}>🔧</Text>
            <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Builders, Not Just Advisors
            </Heading>
            <Text color={bodyTextColor} fontSize="md">
              We write code, ship products, and maintain production software. When we say we can build something, we mean our team has already done it — repeatedly.
            </Text>
          </Box>

          <Box bg={cardBg2} p={6} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
            <Text fontSize="2xl" mb={2}>🤖</Text>
            <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              AI Where It Counts
            </Heading>
            <Text color={bodyTextColor} fontSize="md">
              We don&apos;t bolt AI onto everything and call it innovation. We assess where artificial intelligence creates genuine value for your business, then we build purpose-fit solutions around it.
            </Text>
          </Box>

          <Box bg={cardBg2} p={6} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
            <Text fontSize="2xl" mb={2}>🌍</Text>
            <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              Global Experience, Practical Approach
            </Heading>
            <Text color={bodyTextColor} fontSize="md">
              Our team has delivered projects across financial services, education, marine, manufacturing, and technology — spanning multiple countries. We bring broad perspective but stay grounded in what actually works.
            </Text>
          </Box>

          <Box bg={cardBg} p={6} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
            <Text fontSize="2xl" mb={2}>🏗️</Text>
            <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
              End-to-End Ownership
            </Heading>
            <Text color={bodyTextColor} fontSize="md">
              One team from assessment through go-live. We don&apos;t hand you a document and wish you luck. We design it, build it, deploy it, and make sure it keeps working.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* How We Work */}
      <Flex direction={{ base: 'column', md: 'row-reverse' }} align="center" gap={8} mb={14}>
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            How We Work
          </Heading>
          <Text color={bodyTextColor} mb={3}>
            Every engagement starts with a digital readiness assessment — not a sales pitch. We interview your stakeholders, analyze where you stand across technology, process, and people, and give you an honest picture.
          </Text>
          <Text color={bodyTextColor} mb={3}>
            From there, we build the roadmap and the solutions. We work in tight cycles, ship early, and iterate based on what actually happens when real people use the software.
          </Text>
          <Text color={bodyTextColor}>
            Senior people are involved throughout — not just at the pitch meeting. The people who understand your problem are the same people writing the code.
          </Text>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '250px' }}>
          <Image src="BoardRoomMeeting.webp" alt="How we work" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '160px', md: '220px' }} fallbackSrc="https://via.placeholder.com/250x220?text=How+We+Work" />
        </Box>
      </Flex>

      {/* Our Products = Our Proof */}
      <Box mb={10} textAlign="center">
        <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
          Our Products Are Our Proof
        </Heading>
        <Text color={bodyTextColor} maxW="700px" mx="auto" mb={6}>
          We don&apos;t just build software for clients — we build and maintain our own. FlowForge and NovaCRM are production platforms serving real users. They represent the same engineering standards, design thinking, and AI integration we bring to every client project.
        </Text>
        <Flex justify="center" gap={4} flexWrap="wrap">
          <Box
            as="a"
            href="/products"
            bg={accentColor}
            color="white"
            px={6}
            py={3}
            borderRadius="md"
            fontWeight={700}
            fontFamily="Montserrat, Arial, sans-serif"
            _hover={{ bg: '#d94e04' }}
            transition="background 0.2s"
          >
            See Our Products
          </Box>
          <Box
            as="a"
            href="/contact"
            bg="transparent"
            color={headingColor}
            px={6}
            py={3}
            borderRadius="md"
            fontWeight={700}
            fontFamily="Montserrat, Arial, sans-serif"
            borderWidth="2px"
            borderColor={borderColor}
            _hover={{ borderColor: accentColor }}
            transition="border-color 0.2s"
          >
            Start a Conversation
          </Box>
        </Flex>
      </Box>
    </Box>
    </>
  );
}
