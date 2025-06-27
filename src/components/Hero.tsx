"use client";

import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";

interface HeroProps {
  image: string;
  heading: string;
  subheading: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function Hero({
  image,
  heading,
  subheading,
  buttonText,
  buttonLink,
}: HeroProps) {
  return (
    <Box
      as="section"
      minH="30vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
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
        spacing={4}
        maxW="2xl"
        position="relative"
        zIndex={1}
        bg="rgba(24,31,42,0.7)" // dark overlay
        p={4}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Heading as="h1" size="xl" fontWeight="bold" color="#fff">
          {heading}
        </Heading>
        <Text fontSize="lg" color="#fff">
          {subheading}
        </Text>
        {buttonText && buttonLink && (
        <Button
          as={Link}
            href={buttonLink}
            size="md"
          fontWeight={700}
          bg="#F25C05"
          color="#fff"
          _hover={{ bg: "#d94e04" }}
          borderRadius="6px"
            fontSize="1rem"
          boxShadow="lg"
          alignSelf="flex-start"
        >
            {buttonText}
        </Button>
        )}
      </Stack>
    </Box>
  );
}
