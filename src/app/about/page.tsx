"use client";

import { Box, Flex, Heading, Text, useColorModeValue, Image, Stack, Icon } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import Hero from "@/components/Hero";

const teamMembers = [
  {
    name: 'Todd Abraham, Founder & CEO',
    image: 'InnovaasToddOrange.png',
    alt: 'Todd Abraham',
    description: 'Founder and chief visionary, Todd is the driving force behind the company. He loves to keep his hands full by participating in direct customer engagements, marketing, and customer experience strategies.'
  },
  {
    name: 'Robert Rae, Chief Technical Advisor',
    image: '',
    alt: 'Robert Rae',
    description: 'Rob brings decades of software development experience to the team. He mentors our in-house team of developers ensuring we adhere to the highest standards of quality for our customers.'
  },
  {
    name: 'Collin Tan, Advisor',
    image: '',
    alt: 'Collin Tan',
    description: 'Collin brings decades of experience holding senior business development and strategic alliance roles with some of the largest technology vendors on the planet.'
  },
  {
    name: 'Mohammed Sami Rehman, Integration Architect and Project Lead',
    image: 'InnovaasSamiOrange.png',
    alt: 'Mohammed Sami Rehman',
    description: 'Sami brings an electrical engineering eduction, combined with practical experience in software development and project management to the team, working with a consulting firm managing projects with over 100 developers, in the financial services sector.'
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
        subheading="Guided by expertise gained over 20 years of achieving success for clients, we practice with passion and strategic focus on the future."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    <Box maxW="900px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      <Heading as="h1" size="2xl" mb={8} color={headingColor} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif">
        About us
      </Heading>
      {/* Results Section */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={10}>
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            We care about results
          </Heading>
          <Text color={bodyTextColor}>
            Guided by expertise gained over 20 years of achieving success for clients, we practice with passion and strategic focus on the future.
          </Text>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '250px' }}>
          <Image src="SpaceShip.webp" alt="Results" borderRadius="lg" objectFit="cover" w="100%" h={{ base: '140px', md: '180px' }} fallbackSrc="https://via.placeholder.com/250x180?text=Results" />
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