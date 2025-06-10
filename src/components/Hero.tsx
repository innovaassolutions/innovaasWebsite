"use client";

import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";

export default function Hero({ image }: { image: string }) {
  return (
    <Box
      as="section"
      minH="60vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={8}
      bgImage={`url(${image})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: 'rgba(242,92,5,0.60)', // orange overlay for contrast
        zIndex: 0,
        borderRadius: 'inherit',
      }}
    >
      <Stack
        spacing={8}
        maxW="3xl"
        position="relative"
        zIndex={1}
        bg="rgba(24,31,42,0.7)" // dark overlay
        p={8}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Heading as="h1" size="2xl" fontWeight="bold" color="#fff">
          Everything and Everyone: <br /> <Box as="span" color="white">Connected</Box>
        </Heading>
        <Text fontSize="xl" color="#fff">
          Digital transformation services, enabling Industrial businesses to connect every machine, sensor, human activity, and business transaction into one single source of truth.
        </Text>
        <Button
          as={Link}
          href="/contact"
          size="lg"
          fontWeight={700}
          bg="#F25C05"
          color="#fff"
          _hover={{ bg: "#d94e04" }}
          borderRadius="6px"
          fontSize="1.25rem"
          boxShadow="lg"
          alignSelf="flex-start"
        >
          Get Started
        </Button>
      </Stack>
    </Box>
  );
}
