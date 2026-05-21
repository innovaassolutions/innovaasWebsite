"use client";

import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

const ORANGE = "#F25C05";
const TEAL = "#00b4c8";

const solutions = [
  {
    href: "/solutions/data-center-connectivity",
    accent: ORANGE,
    label: "Data Center Connectivity",
    partner: "Black Sea Technology",
    tagline: "High-Speed Interconnect",
    description:
      "400G, 800G, and 1.6T transceivers, DAC/ACC/AEC copper cables, fiber patch cords, and AOCs for AI clusters, HPC, and hyper-scale data centers.",
    highlights: [
      "1.6T OSFP-DD DR8 transceivers",
      "800G QSFP-DD SR8 / DR4 / FR4",
      "400G QSFP-DD & QSFP28 full range",
      "Custom-length fiber & AOC assemblies",
    ],
    cta: "Explore Connectivity",
  },
  {
    href: "/solutions/data-center-power",
    accent: TEAL,
    label: "Data Center Power",
    partner: "PDUMind",
    tagline: "Intelligent Rack PDU Management",
    description:
      "Metered, switched, and 3-phase intelligent rack PDUs with per-outlet monitoring, remote switching, and SNMP/iOS management for AI infrastructure worldwide.",
    highlights: [
      "CPDU series — metered & switched",
      "CM-V 3-phase distribution PDUs",
      "Per-outlet kWh ±1% accuracy",
      "Cascade up to 16 PDUs per port",
    ],
    cta: "Explore Power",
  },
];

export default function SolutionsPage() {
  const bg = useColorModeValue("#f5f5f0", "#0f1623");
  const cardBg = useColorModeValue("#ffffff", "#181f2a");
  const borderColor = useColorModeValue("#e8e4da", "#2a3444");
  const textMuted = useColorModeValue("#71706B", "#9ca3af");
  const headingColor = useColorModeValue("#171614", "#f3f4f6");
  const bodyText = useColorModeValue("#3d3b35", "#d1d5db");

  return (
    <Box bg={bg} minH="100vh">
      {/* Hero */}
      <Box
        bg="#181f2a"
        pt={{ base: 14, md: 20 }}
        pb={{ base: 12, md: 16 }}
        px={{ base: 6, md: 8 }}
        textAlign="center"
      >
        <Text
          fontSize={{ base: "11px", md: "12px" }}
          fontWeight={700}
          letterSpacing="0.18em"
          color={ORANGE}
          textTransform="uppercase"
          mb={3}
        >
          Solutions
        </Text>
        <Heading
          as="h1"
          fontSize={{ base: "2.2rem", md: "3rem" }}
          fontWeight={800}
          color="#f3f4f6"
          lineHeight={1.15}
          mb={4}
          fontFamily="Montserrat, Arial, sans-serif"
        >
          Infrastructure Built for<br />
          <Box as="span" color={ORANGE}>
            What&apos;s Next
          </Box>
        </Heading>
        <Text
          fontSize={{ base: "1rem", md: "1.15rem" }}
          color="#9ca3af"
          maxW="560px"
          mx="auto"
          lineHeight={1.7}
        >
          Innovaas partners with best-in-class manufacturers to deliver complete
          data center solutions — from high-speed interconnect to intelligent
          power management.
        </Text>
      </Box>

      {/* Cards */}
      <Box maxW="1100px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {solutions.map((sol) => (
            <Box
              key={sol.href}
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              borderRadius="16px"
              overflow="hidden"
              transition="box-shadow 0.2s, transform 0.2s"
              _hover={{ boxShadow: `0 0 0 2px ${sol.accent}40`, transform: "translateY(-2px)" }}
            >
              {/* Accent bar */}
              <Box h="4px" bg={sol.accent} />

              <Box p={{ base: 6, md: 8 }}>
                {/* Partner badge */}
                <Flex align="center" gap={2} mb={4}>
                  <Box
                    px={2.5}
                    py={0.5}
                    borderRadius="full"
                    bg={`${sol.accent}18`}
                    border="1px solid"
                    borderColor={`${sol.accent}40`}
                  >
                    <Text fontSize="11px" fontWeight={700} color={sol.accent} letterSpacing="0.1em" textTransform="uppercase">
                      {sol.partner}
                    </Text>
                  </Box>
                  <Text fontSize="11px" color={textMuted} fontWeight={600} letterSpacing="0.12em" textTransform="uppercase">
                    {sol.tagline}
                  </Text>
                </Flex>

                <Heading
                  as="h2"
                  fontSize={{ base: "1.4rem", md: "1.6rem" }}
                  fontWeight={800}
                  color={headingColor}
                  mb={3}
                  fontFamily="Montserrat, Arial, sans-serif"
                >
                  {sol.label}
                </Heading>

                <Text fontSize="0.95rem" color={bodyText} lineHeight={1.7} mb={6}>
                  {sol.description}
                </Text>

                {/* Highlights */}
                <Box mb={8}>
                  {sol.highlights.map((h) => (
                    <Flex key={h} align="center" gap={2.5} mb={2}>
                      <Box
                        w="6px"
                        h="6px"
                        borderRadius="full"
                        bg={sol.accent}
                        flexShrink={0}
                      />
                      <Text fontSize="0.875rem" color={bodyText}>
                        {h}
                      </Text>
                    </Flex>
                  ))}
                </Box>

                {/* CTA */}
                <Link href={sol.href} style={{ textDecoration: "none" }}>
                  <Box
                    as="span"
                    display="inline-flex"
                    alignItems="center"
                    gap={1.5}
                    px={5}
                    py={2.5}
                    borderRadius="full"
                    bg={sol.accent}
                    color="#fff"
                    fontSize="0.875rem"
                    fontWeight={700}
                    transition="opacity 0.15s"
                    _hover={{ opacity: 0.88 }}
                  >
                    {sol.cta} →
                  </Box>
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* Bottom copy */}
        <Box textAlign="center" mt={14}>
          <Text fontSize="0.95rem" color={textMuted} maxW="520px" mx="auto" lineHeight={1.7}>
            All solutions are available globally. Contact our team to discuss
            requirements, pricing, and lead times.
          </Text>
          <Link href="/about#contact" style={{ textDecoration: "none" }}>
            <Box
              as="span"
              display="inline-flex"
              mt={5}
              px={6}
              py={3}
              borderRadius="full"
              border="2px solid"
              borderColor={ORANGE}
              color={ORANGE}
              fontSize="0.9rem"
              fontWeight={700}
              transition="background 0.15s, color 0.15s"
              _hover={{ bg: ORANGE, color: "#fff" }}
            >
              Get in Touch
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
