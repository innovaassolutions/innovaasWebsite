"use client";

import { Box, Flex, Heading, Text, useColorModeValue, Image, Stack, Icon } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import Hero from "@/components/Hero";

const teamMembers = [
  {
    name: 'Todd Abraham, Founder & CEO',
    image: 'InnovaasToddOrange.png',
    alt: 'Todd Abraham',
    description: 'Todd founded Innovaas to bridge the gap between strategy and execution. He writes code, sits in client meetings, and makes technical decisions — often in the same day. He built FlowForge and NovaCRM from the ground up, and brings experience spanning multiple countries and industries including financial services, marine, education, and technology. When you work with Innovaas, Todd is in the room.'
  },
  {
    name: 'Robert Rae, Chief Technical Advisor',
    image: '',
    alt: 'Robert Rae',
    description: 'Rob brings decades of software architecture and engineering leadership to the team. He sets the quality standards for everything we ship — from code review practices to system design decisions. His deep experience across enterprise software ensures our solutions are built to last, not just built to demo.'
  },
  {
    name: 'Collin Tan, Advisor',
    image: '',
    alt: 'Collin Tan',
    description: 'Collin brings decades of experience in senior business development and strategic alliance roles across major enterprise technology vendors. His network and expertise in building partnerships help Innovaas navigate complex technology ecosystems and deliver solutions that integrate with the platforms our clients already use.'
  },
  {
    name: 'Mohammed Sami Rehman, Integration Architect & Project Lead',
    image: 'InnovaasSamiOrange.png',
    alt: 'Mohammed Sami Rehman',
    description: 'Sami combines an electrical engineering foundation with hands-on software development and project management experience. He previously managed projects with over 100 developers in the financial services sector at a major consulting firm. At Innovaas, he leads integration architecture and project delivery — making sure complex technical work stays on track and on budget.'
  }
];

export default function AboutPage() {
  const headingColor = useColorModeValue('#181f2a', '#fff');
  const bodyTextColor = useColorModeValue('#222', '#d1d5db');
  const boxBg1 = useColorModeValue('white', '#232b39');
  const boxBg2 = useColorModeValue('gray.50', '#1a202c');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      <Hero
        image="/hero-about.webp"
        heading="About Us"
        subheading="A builder-first company. We don't just advise — we design, build, and ship custom AI-powered software."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    <Box maxW="900px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      <Heading as="h1" size="2xl" mb={8} color={headingColor} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif">
        About Us
      </Heading>
      {/* Intro Section */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={10}>
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            We Build Things That Work
          </Heading>
          <Text color={bodyTextColor} mb={3}>
            Innovaas is a hands-on, founder-led company that builds custom AI-powered software for businesses. We started because we saw too many companies paying for strategy decks that never became real products.
          </Text>
          <Text color={bodyTextColor}>
            So we do both. We help you figure out where AI creates real value, then we build the software to capture it. FlowForge and NovaCRM are products we built and maintain ourselves — they&apos;re proof that we practice what we preach.
          </Text>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '250px' }}>
          <Image src="SpaceShip.webp" alt="About Innovaas" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '140px', md: '180px' }} fallbackSrc="https://via.placeholder.com/250x180?text=About" />
        </Box>
      </Flex>

      {/* Team Section */}
      <Box mb={10}>
        <Heading as="h2" size="lg" mb={6} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
          Our Team
        </Heading>
        <Stack spacing={8}>
          {teamMembers.map((member, idx) => (
            <Flex
              key={member.name}
              direction="row"
              align="center"
              bg={idx % 2 === 0 ? boxBg1 : boxBg2}
              borderRadius="2xl"
              boxShadow="lg"
              borderWidth="1px"
              borderColor={borderColor}
              px={{ base: 4, md: 8 }}
              py={6}
              gap={6}
              flexDirection={{ base: 'column', md: 'row' }}
              width="100%"
              ml={{ md: idx % 2 === 0 ? 0 : '50%' }}
              mr={0}
              transition="box-shadow 0.2s"
            >
              <Box flexShrink={0} minW="120px" display="flex" alignItems="center" justifyContent="center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.alt}
                    borderRadius="full"
                    objectFit="cover"
                    w="120px"
                    h="120px"
                    fallbackSrc={`https://via.placeholder.com/120?text=${encodeURIComponent(member.alt.split(' ')[0])}`}
                  />
                ) : (
                  <Icon as={FaUser} w="80px" h="80px" color="#F25C05" bg="white" borderRadius="full" p={4} />
                )}
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={1} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                  {member.name}
                </Heading>
                <Text color={bodyTextColor}>{member.description}</Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      </Box>
    </Box>
    </>
  );
}
