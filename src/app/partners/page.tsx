"use client";

import { Box, Flex, Heading, Text, useColorModeValue, Image } from '@chakra-ui/react';

export default function PartnersPage() {
  const headingColor = useColorModeValue('#181f2a', '#fff');
  const bodyTextColor = useColorModeValue('#222', '#d1d5db');
  const boxBg = useColorModeValue('#232b39', '#151922');

  return (
    <Box maxW="1000px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      <Heading as="h1" size="2xl" mb={8} color={headingColor} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif">
        Our Partners
      </Heading>

      {/* Tulip Interfaces */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={10}>
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={2} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Tulip Interfaces
          </Heading>
          <Text color={bodyTextColor}>
            Tulip Interfaces sets the Industry Standard for frontline operations platforms. Tulip is enterprise ready, No-Code, human centric, and cloud native...
          </Text>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '250px' }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={boxBg}
            borderRadius="lg"
            p={4}
            w="100%"
            h={{ base: '140px', md: '180px' }}
          >
            <Image src="partners/Tulip/Tulip White Logo.png" alt="Tulip Interfaces" objectFit="contain" w="100%" h="100%" />
          </Box>
        </Box>
      </Flex>

      {/* UMH Integrated Platform */}
      <Flex direction={{ base: 'column', md: 'row-reverse' }} align="center" gap={8} mb={10}>
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={2} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            UMH Integrated Platform
          </Heading>
          <Text color={bodyTextColor}>
            The UMH Integrated Platform is a cloud-based application engineered to manage your company&apos;s IIoT infrastructure. It equips your engineers with the necessary tools to set up and oversee all data streams and applications (Data Infrastructure), devices (Device & Container Infrastructure), while also automating management in a user-friendly interface (Management Console).
          </Text>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '250px' }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={boxBg}
            borderRadius="lg"
            p={4}
            w="100%"
            h={{ base: '140px', md: '180px' }}
          >
            <Image src="/partners/UnitedManufacturingHub/UMH_WhiteTransparent.png" alt="UMH Integrated Platform" objectFit="contain" w="100%" h="100%" />
          </Box>
        </Box>
      </Flex>

      
      {/* Litmus */}
      <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} mb={10}>
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={2} color={headingColor} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif">
            Litmus
          </Heading>
          <Text color={bodyTextColor}>
            Litmus was founded because they experienced first&#39;hand there was a better and easier way to harness the power of industrial data. In fact, it was essential to make the promise of Industry 4.0 more attainable.
          </Text>
        </Box>
        <Box flex={1} minW={{ base: '100%', md: '250px' }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={boxBg}
            borderRadius="lg"
            p={4}
            w="100%"
            h={{ base: '140px', md: '180px' }}
          >
            <Image src="/partners/Litmus/Litmus White Logo.webp" alt="Litmus" objectFit="contain" w="100%" h="100%" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
} 