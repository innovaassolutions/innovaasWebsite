"use client";

import { Box, Flex, Heading, Text, Image, useColorModeValue } from '@chakra-ui/react';
import Hero from "@/components/Hero";

export default function HomePage() {
  const headingColor = useColorModeValue('#181f2a', '#fff');
  const bodyTextColor = useColorModeValue('#222', '#d1d5db');

  return (
    <>
      <Hero
        image="/home-hero.webp"
        heading="Everything and Everyone: Connected"
        subheading="Digital transformation services, enabling Industrial businesses to connect every machine, sensor, human activity, and business transaction into one single source of truth."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    <Box maxW="1200px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      {/* Mission Section */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={12}>
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Our Mission
          </Heading>
          <Text fontSize="lg" color={bodyTextColor}>
            Our mission is to empower our customers to unlock new opportunities for innovation by providing seamless access to unified data from any source. We strive to enhance their business decisions, streamline operations, and drive digital transformation, fostering continuous growth and innovation.
          </Text>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '350px' }}>
          <Image
            src="AsianBusinessTeam.webp"
            alt="Mission illustration"
            borderRadius="lg"
            objectFit="cover"
            w="100%"
            h={{ base: '200px', md: '350px' }}
            fallbackSrc="https://via.placeholder.com/350x350?text=Mission"
          />
        </Box>
      </Flex>

      {/* Transforming Manufacturing Section */}
      <Flex direction={{ base: 'column', md: 'row-reverse' }} align="center" gap={8}>
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={4} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Transforming Manufacturing with Unified Data Solutions
          </Heading>
          <Text fontSize="lg" color={bodyTextColor}>
            Our customers unlock new opportunities for innovation by accessing unified data from any source, enhancing their business decisions. By harnessing the full potential of their data, they streamline operations and drive digital transformation, fostering continuous growth and innovation.
          </Text>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '350px' }}>
          <Image
            src="UnifiedData.webp"
            alt="Manufacturing illustration"
            borderRadius="lg"
            objectFit="cover"
            w="100%"
            h={{ base: '200px', md: '350px' }}
            fallbackSrc="https://via.placeholder.com/350x350?text=Manufacturing"
          />
        </Box>
      </Flex>
    </Box>
    </>
  );
}
