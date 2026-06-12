"use client";

import { useState } from "react";
import NextImage from "next/image";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Alert,
  AlertIcon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Badge,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

type FormState = {
  name: string;
  company: string;
  email: string;
  role: string;
  inquiryType: string;
  message: string;
};

type SpecSheetFormState = {
  name: string;
  email: string;
  company: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function DataCenterConnectivityPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HeroSection onSpecSheetOpen={onOpen} />
      <StatsStrip />
      <CategoryCards />
      <ProductCatalog onSpecSheetOpen={onOpen} />
      <SolutionsSection />
      <WhyInnovaasSection />
      <LeadFormSection />
      <SpecSheetModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────────

function HeroSection({ onSpecSheetOpen }: { onSpecSheetOpen: () => void }) {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      minH={{ base: "auto", md: "92vh" }}
      display="flex"
      alignItems="center"
    >
      {/* Flat ink background with dot grid (design system) */}
      <Box position="absolute" inset={0} bg="#05080e" />
      <Box
        position="absolute"
        inset={0}
        style={{
          backgroundImage:
            "radial-gradient(rgba(182,193,212,0.13) 1.2px, transparent 1.2px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse at 75% 40%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 75% 40%, black 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <Box
        position="relative"
        zIndex={1}
        w="full"
        maxW="1200px"
        mx="auto"
        px={{ base: 5, md: 10 }}
        py={{ base: 28, md: 0 }}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 12, lg: 16 }}
        >
          {/* Left — copy */}
          <Box flex="1" maxW={{ lg: "560px" }}>
            {/* System kicker */}
            <Flex align="center" gap={3} mb={8}>
              <Box
                w="7px"
                h="7px"
                borderRadius="full"
                bg="#F25C05"
                flexShrink={0}
                style={{ animation: "hero-pulse 2.5s ease-in-out infinite" }}
              />
              <Text
                fontFamily="var(--font-mono)"
                fontSize="12px"
                letterSpacing="0.28em"
                textTransform="uppercase"
                color="#F25C05"
                lineHeight={1}
              >
                01 / DISTRIBUTION — AUTHORIZED RESELLER · BLACK SEA TECHNOLOGY
              </Text>
            </Flex>

            <Heading
              as="h1"
              color="#f4f6fa"
              fontFamily="var(--font-anton)"
              fontWeight={400}
              textTransform="uppercase"
              fontSize={{ base: "2.8rem", md: "3.8rem", lg: "4.4rem" }}
              lineHeight={0.95}
              letterSpacing="-0.01em"
              mb={6}
            >
              The interconnect
              <br />
              behind tomorrow&apos;s
              <br />
              <Box as="span" color="#F25C05">
                AI infrastructure.
              </Box>
            </Heading>

            <Text
              color="rgba(255,255,255,0.72)"
              fontSize={{ base: "1rem", md: "1.1rem" }}
              lineHeight={1.8}
              maxW="500px"
              mb={10}
            >
              Innovaas is an authorized reseller of Black Sea Technology&apos;s
              400G&thinsp;/&thinsp;800G&thinsp;/&thinsp;1.6T optical modules,
              copper cables, and fiber solutions — for AI clusters, hyperscale
              data centers, and HPC environments worldwide.
            </Text>

            <Flex wrap="wrap" gap={3}>
              <Box
                as="a"
                href="#inquiry"
                display="inline-block"
                bg="#F25C05"
                color="white"
                px={8}
                py={4}
                borderRadius="8px"
                fontFamily="var(--font-display)"
                fontWeight={700}
                fontSize="0.95rem"
                textDecoration="none"
                letterSpacing="0.2px"
                transition="all 0.2s"
                _hover={{ bg: "#d94e04", transform: "translateY(-1px)" }}
              >
                Request a Quote →
              </Box>
              <Box
                as="button"
                onClick={onSpecSheetOpen}
                display="inline-block"
                border="1px solid rgba(255,255,255,0.3)"
                color="white"
                px={8}
                py={4}
                borderRadius="8px"
                fontFamily="var(--font-display)"
                fontWeight={700}
                fontSize="0.95rem"
                cursor="pointer"
                style={{ background: "rgba(255,255,255,0.06)" }}
                transition="all 0.2s"
                _hover={{
                  background: "rgba(255,255,255,0.12)",
                  borderColor: "rgba(255,255,255,0.5)",
                }}
              >
                ↓ Spec Sheet
              </Box>
            </Flex>
          </Box>

          {/* Right — product showcase */}
          <Box
            flex="1"
            maxW={{ base: "100%", lg: "480px" }}
            position="relative"
          >
            {/* Radial orange glow behind the card */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              w="110%"
              h="110%"
              style={{
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(ellipse at center, rgba(242,92,5,0.22) 0%, transparent 68%)",
                pointerEvents: "none",
              }}
            />
            {/* Glass card */}
            <Box
              position="relative"
              borderRadius="10px"
              border="1px solid rgba(255,255,255,0.08)"
              style={{ background: "#0a0f18" }}
              p={{ base: 8, md: 10 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={6}
            >
              {/* Product image */}
              <Box position="relative" w="full" h={{ base: "180px", md: "220px" }}>
                <NextImage
                  src="/blackseatech/optical-1600g.png"
                  alt="1.6T OSFP DR8 IHS Optical Transceiver"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>

              {/* Product label row */}
              <Flex
                w="full"
                justify="space-between"
                align="center"
                borderTop="1px solid rgba(255,255,255,0.1)"
                pt={5}
              >
                <Box>
                  <Text
                    color="rgba(255,255,255,0.5)"
                    fontSize="10px"
                    fontWeight={700}
                    letterSpacing="1.5px"
                    textTransform="uppercase"
                    mb={1}
                  >
                    Featured Product
                  </Text>
                  <Text
                    color="white"
                    fontFamily="var(--font-display)"
                    fontWeight={800}
                    fontSize="0.95rem"
                  >
                    1.6T OSFP DR8 IHS
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text
                    color="rgba(255,255,255,0.5)"
                    fontSize="10px"
                    fontWeight={700}
                    letterSpacing="1.5px"
                    textTransform="uppercase"
                    mb={1}
                  >
                    Max Throughput
                  </Text>
                  <Text
                    color="#F25C05"
                    fontFamily="var(--font-display)"
                    fontWeight={700}
                    fontSize="1.3rem"
                  >
                    1600 Gbps
                  </Text>
                </Box>
              </Flex>

              {/* Spec pills */}
              <Flex w="full" gap={2} wrap="wrap">
                {["PAM4", "OSFP DR8", "≤25W", "500m SMF", "DDMI"].map((s) => (
                  <Box
                    key={s}
                    px={3}
                    py={1}
                    borderRadius="full"
                    border="1px solid rgba(255,255,255,0.15)"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  >
                    <Text
                      color="rgba(255,255,255,0.7)"
                      fontSize="11px"
                      fontFamily="monospace"
                      fontWeight={600}
                    >
                      {s}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>

      <style>{`
        @keyframes hero-pulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stats Strip
// ─────────────────────────────────────────────────────────────────────────────

function StatsStrip() {
  const stats = [
    { value: "40+",      label: "SKUs across 6 categories" },
    { value: "1.6T",     label: "Peak bandwidth per port"  },
    { value: "ISO 9001", label: "Quality certified"        },
    { value: "2-Year",   label: "Product warranty"         },
    { value: "7 × 24",   label: "Technical support"        },
  ];

  return (
    <Box
      bg="#0a0f18"
      borderTop="1px solid rgba(255,255,255,0.06)"
      borderBottom="1px solid rgba(255,255,255,0.06)"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          wrap="wrap"
          justify={{ sm: "space-between" }}
          align="center"
        >
          {stats.map((s, i) => (
            <>
              {i > 0 && (
                <Box
                  key={`div-${i}`}
                  display={{ base: "none", sm: "block" }}
                  h="36px"
                  w="1px"
                  bg="rgba(255,255,255,0.08)"
                  flexShrink={0}
                />
              )}
              <Box
                key={s.label}
                py={6}
                px={{ base: 0, sm: 6 }}
                textAlign="center"
                flex="1"
              >
                <Text
                  color="#F25C05"
                  fontFamily="var(--font-mono)"
                  fontWeight={500}
                  fontSize={{ base: "1.5rem", md: "1.9rem" }}
                  lineHeight={1}
                  mb={1.5}
                >
                  {s.value}
                </Text>
                <Text
                  color="#b6c1d4"
                  fontFamily="var(--font-mono)"
                  fontSize="0.7rem"
                  fontWeight={600}
                  letterSpacing="1px"
                  textTransform="uppercase"
                >
                  {s.label}
                </Text>
              </Box>
            </>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Category Cards
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    id: "optical",
    speeds: "400G · 800G · 1.6T",
    title: "Optical Transceivers",
    body: "Single-mode and multimode OSFP / QSFP modules from 400G to 1.6T. PAM4 modulation, DDMI diagnostics, hot-pluggable. Built for spine-leaf, AI fabrics, and DCI.",
    image: "/blackseatech/optical-1600g.png",
    imageAlt: "1.6T OSFP optical transceiver",
    imageBg: "linear-gradient(135deg, #f0f4ff 0%, #ffffff 55%, rgba(0,102,255,0.06) 100%)",
  },
  {
    id: "copper",
    speeds: "100G · 400G · 800G · 1.6T",
    title: "Copper Cables",
    body: "DAC, ACC, and AEC assemblies for cost-effective short-reach interconnect. Breakout variants for flexible rack topology. The right cable for every reach and power budget.",
    image: "/blackseatech/copper-dac.png",
    imageAlt: "800G passive DAC cable",
    imageBg: "linear-gradient(135deg, #f5f5f5 0%, #ffffff 55%, rgba(50,50,50,0.04) 100%)",
  },
  {
    id: "fiber",
    speeds: "Single-mode & Multimode",
    title: "Fiber Patch Cords & AOC",
    body: "MPO-MPO and MPO-LC patch cords, active optical cables from 25G to 800G. Single-mode and multimode. Custom assemblies built to your wavelength, length, and connector spec.",
    image: "/blackseatech/fiber-aoc.png",
    imageAlt: "Active optical cable assembly",
    imageBg: "linear-gradient(135deg, #f0fdf8 0%, #ffffff 55%, rgba(13,148,136,0.06) 100%)",
  },
];

function CategoryCards() {
  const headingColor = "#f4f6fa";
  const bodyColor    = "#d4dbe6";
  const cardBg       = "#0a0f18";
  const cardBorder   = "rgba(255,255,255,0.08)";

  return (
    <Box
      as="section"
      bg="#05080e"
      py={{ base: 16, md: 24 }}
    >
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
        <Box mb={14} maxW="600px">
          <Text
            color="#F25C05"
            fontSize="11px"
            fontWeight={700}
            letterSpacing="2px"
            fontFamily="var(--font-mono)"
            textTransform="uppercase"
            mb={3}
          >
            Product Portfolio
          </Text>
          <Heading
            as="h2"
            color={headingColor}
            fontFamily="var(--font-display)"
            fontWeight={700}
            fontSize={{ base: "2rem", md: "2.75rem" }}
            letterSpacing="-1.5px"
            lineHeight={1.1}
            mb={4}
          >
            The Complete
            <br />
            Interconnect Stack
          </Heading>
          <Text color={bodyColor} fontSize="1.05rem" lineHeight={1.75}>
            From 25G legacy to 1.6T next-generation AI fabric — a single
            source for every data center interconnect requirement.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {CATEGORIES.map((cat) => (
            <Box
              key={cat.id}
              bg={cardBg}
              border="1px solid"
              borderColor={cardBorder}
              borderRadius="10px"
              overflow="hidden"
              display="flex"
              flexDirection="column"
              transition="transform 0.2s, box-shadow 0.2s"
              _hover={{
                transform: "translateY(-4px)",
                borderColor: "rgba(242,92,5,0.45)",
                boxShadow: "0 0 50px rgba(242,92,5,0.08)",
              }}
              boxShadow="none"
            >
              {/* Image area */}
              <Box
                h="220px"
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{ background: cat.imageBg }}
                p={8}
              >
                <NextImage
                  src={cat.image}
                  alt={cat.imageAlt}
                  width={300}
                  height={180}
                  style={{ objectFit: "contain", maxHeight: "160px", width: "auto" }}
                />
              </Box>

              {/* Content */}
              <Box p={7} flex={1} display="flex" flexDirection="column">
                <Text
                  color="#F25C05"
                  fontSize="10px"
                  fontWeight={700}
                  letterSpacing="1.5px"
                  textTransform="uppercase"
                  mb={2}
                  fontFamily="monospace"
                >
                  {cat.speeds}
                </Text>
                <Heading
                  as="h3"
                  color={headingColor}
                  fontFamily="var(--font-display)"
                  fontWeight={800}
                  fontSize="1.2rem"
                  mb={3}
                  letterSpacing="-0.3px"
                >
                  {cat.title}
                </Heading>
                <Text
                  color={bodyColor}
                  fontSize="0.875rem"
                  lineHeight={1.75}
                  flex={1}
                  mb={6}
                >
                  {cat.body}
                </Text>
                <Box
                  as="a"
                  href="#catalogue"
                  display="inline-flex"
                  alignItems="center"
                  gap={1.5}
                  color="#F25C05"
                  fontWeight={700}
                  fontSize="0.875rem"
                  textDecoration="none"
                  _hover={{ gap: "10px" }}
                  transition="all 0.2s"
                >
                  View specs <Box as="span">→</Box>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Product Catalog (tabbed)
// ─────────────────────────────────────────────────────────────────────────────

const CATALOG_TABS = [
  {
    label: "1.6T Optical",
    image: "/blackseatech/optical-1600g.png",
    imageAlt: "1.6T OSFP DR8 IHS Transceiver",
    imageBg: "linear-gradient(135deg, #eef2ff, #fff, rgba(0,102,255,0.05))",
    eyebrow: "1.6T Optical Module Series",
    title: "Single-port 1600 Gbps for next-generation AI fabrics",
    description:
      "The flagship 1.6T module adopts an OSFP DR8 IHS package and PAM4 modulation for high-density data centers and AI training clusters. Hot-pluggable with DDMI digital diagnostics and full RoHS 2.0 compliance.",
    specs: [
      { label: "Transmission Rate",  value: "1600 Gbps · 8 × 106.25 GBd PAM4" },
      { label: "Form Factor",        value: "OSFP DR8 IHS · Hot-pluggable"     },
      { label: "Power Consumption",  value: "≤ 25 W"                           },
      { label: "Operating Temp",     value: "0 – 70 °C"                        },
      { label: "Reach",              value: "500 m on G.652 SMF"               },
      { label: "Diagnostics",        value: "DDMI"                             },
    ],
    applications: ["AI training & inference clusters", "Supercomputing / HPC", "High-density data centers", "1600G Ethernet"],
    groups: [],
  },
  {
    label: "800G Optical",
    image: "/blackseatech/optical-800g-dr4.png",
    imageAlt: "800G OSFP DR4 Transceiver",
    imageBg: "linear-gradient(135deg, #eef2ff, #fff, rgba(0,102,255,0.05))",
    eyebrow: "800G Optical Module Series",
    title: "High-density 800G for spine, leaf, and GPU interconnect",
    description:
      "Two OSFP form factors — DR4 and DR8 — with PAM4 modulation, hot-plug support, and DDMI diagnostics. Target short-to-medium reach across AI compute centers and large cloud data centers.",
    specs: [
      { label: "DR4 Rate",  value: "850 Gbps · 4 × 106.25 GBd PAM4" },
      { label: "DR8 Rate",  value: "850 Gbps · 8 × 53.125 GBd PAM4" },
      { label: "DR4 Power", value: "≤ 18 W"                         },
      { label: "DR8 Power", value: "≤ 16 W"                         },
      { label: "Reach",     value: "500 m on G.652 SMF"             },
      { label: "Diagnostics", value: "DDMI · Hot-pluggable"         },
    ],
    applications: ["AI intelligent computing centers", "Supercomputing / HPC", "Large cloud data centers", "Inter-switch & GPU cluster interconnect"],
    groups: [
      { label: "Multimode SR",    items: ["800G OSFP SR8"] },
      { label: "Active Optical",  items: ["800G OSFP AOC (1 – 50 m)"] },
    ],
  },
  {
    label: "400G Optical",
    image: "/blackseatech/optical-400g.png",
    imageAlt: "400G optical transceiver",
    imageBg: "linear-gradient(135deg, #eef2ff, #fff, rgba(0,102,255,0.05))",
    eyebrow: "400G Optical Module Series",
    title: "Comprehensive 400G — SM, MM, AOC, and breakouts",
    description:
      "Full 400G coverage across QSFP112, QSFP-DD, OSFP-RHS, and OSFP form factors. Single-mode DR4, multimode SR4/SR8, AOC variants, and breakouts down to 100G QSFP28 or 200G QSFP56.",
    specs: [],
    applications: [],
    groups: [
      { label: "Single-Mode",      items: ["400G QSFP112 DR4", "400G OSFP-RHS DR4", "400G QSFP-DD DR4"] },
      { label: "Multimode SR",     items: ["400G QSFP-DD SR8", "400G QSFP112 SR4", "400G OSFP SR4"] },
      { label: "Active Optical",   items: ["400G QSFP-DD AOC", "400G QSFP112 AOC", "400G OSFP AOC"] },
      { label: "Breakouts",        items: ["400G QSFP-DD → 4 × 100G QSFP28", "400G QSFP-DD → 2 × 200G QSFP56"] },
    ],
  },
  {
    label: "25G – 200G",
    image: "/blackseatech/optical-800g-dr8.png",
    imageAlt: "Multimode optical transceiver",
    imageBg: "linear-gradient(135deg, #eef2ff, #fff, rgba(0,102,255,0.05))",
    eyebrow: "25G – 200G Legacy Multimode",
    title: "Field-proven optics for established infrastructure",
    description:
      "25G SFP28, 40G QSFP+, 100G QSFP28, and 200G QSFP56 transceivers and AOC assemblies with breakouts for legacy fan-out.",
    specs: [],
    applications: [],
    groups: [
      { label: "SR Transceivers",  items: ["25G SFP28 SR", "40G QSFP+ SR", "100G QSFP28 SR4", "200G QSFP56 SR4"] },
      { label: "Active Optical",   items: ["25G SFP28 AOC", "40G QSFP+ AOC", "100G QSFP28 AOC", "200G QSFP56 AOC"] },
      { label: "Breakouts",        items: ["40G QSFP+ → 4 × 10G SFP+", "100G QSFP28 → 4 × 25G SFP28", "200G QSFP56 → 2 × 100G QSFP28", "200G QSFP56 → 8 × 25G SFP28"] },
    ],
  },
  {
    label: "Copper Cables",
    image: "/blackseatech/copper-dac.png",
    imageAlt: "800G passive DAC cable",
    imageBg: "linear-gradient(135deg, #f5f5f5, #ffffff, rgba(30,30,30,0.04))",
    eyebrow: "High-Speed Copper Interconnect",
    title: "DAC, ACC, and AEC from 100G to 1.6T",
    description:
      "Passive DAC for the lowest power and cost, linear active ACC for short reach, retimed AEC for up to 5 m. All in straight and breakout configurations.",
    specs: [
      { label: "AEC Reach",   value: "1 – 5 m · 12 W per end"   },
      { label: "ACC Reach",   value: "0.5 – 2.5 m · 1.2 W"      },
      { label: "DAC Reach",   value: "0.5 – 1.5 m · 0.005 W"    },
      { label: "AOC Reach",   value: "1 – 50 m · 12 W per end"  },
      { label: "Form Factor", value: "OSFP throughout"           },
    ],
    applications: ["Top-of-rack interconnect", "GPU cluster wiring", "High-density cabinet layout"],
    groups: [
      { label: "DAC (Passive)",        items: ["100G DAC", "100G Breakout DAC", "200G DAC", "200G Breakout DAC", "400G DAC", "400G Breakout DAC", "800G DAC"] },
      { label: "ACC (Active Copper)",  items: ["800G ACC", "800G Breakout ACC", "1.6T ACC", "1.6T Breakout ACC"] },
      { label: "AEC (Active Electrical)", items: ["400G AEC", "800G AEC", "800G Breakout AEC", "1.6T AEC", "1.6T Breakout AEC"] },
    ],
  },
  {
    label: "Fiber Patch Cords",
    image: "/blackseatech/fiber-aoc.png",
    imageAlt: "Fiber patch cord assemblies",
    imageBg: "linear-gradient(135deg, #f0fdf8, #ffffff, rgba(13,148,136,0.05))",
    eyebrow: "Fiber Patch Cord Portfolio",
    title: "Single-mode and multimode, customizable to spec",
    description:
      "MPO ↔ MPO and MPO ↔ LC patch cords in single-mode and multimode variants, plus custom assemblies built to your wavelength, length, and connector specification.",
    specs: [],
    applications: [],
    groups: [
      { label: "Single-Mode",      items: ["Single-mode MPO ↔ MPO", "Single-mode MPO ↔ LC"] },
      { label: "Multimode OM3/OM4",items: ["Multimode MPO ↔ MPO", "Multimode MPO ↔ LC"] },
      { label: "Custom Assemblies",items: ["Custom wavelength, length, and connector to spec"] },
    ],
  },
];

function ProductCatalog({ onSpecSheetOpen }: { onSpecSheetOpen: () => void }) {
  const headingColor  = "#f4f6fa";
  const bodyColor     = "#d4dbe6";
  const cardBg        = "#0a0f18";
  const borderColor   = "rgba(255,255,255,0.08)";
  const specRowAlt    = "rgba(255,255,255,0.03)";
  const specLabelClr  = "#b6c1d4";
  const groupBg       = "#0a0f18";
  const itemBorderClr = "rgba(255,255,255,0.06)";

  return (
    <Box
      as="section"
      id="catalogue"
      bg="#05080e"
      py={{ base: 16, md: 24 }}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
        <Tabs colorScheme="orange" variant="line" isLazy>
          <Box overflowX="auto" borderBottom="1px solid" borderColor={borderColor}>
            <TabList border="none" gap={1}>
              {CATALOG_TABS.map((t) => (
                <Tab
                  key={t.label}
                  color="#b6c1d4"
                  fontFamily="var(--font-display)"
                  fontWeight={700}
                  fontSize="0.82rem"
                  letterSpacing="0.2px"
                  whiteSpace="nowrap"
                  px={4}
                  py={3.5}
                  _selected={{
                    color: "#F25C05",
                    borderBottomColor: "#F25C05",
                    borderBottomWidth: "2px",
                  }}
                  _hover={{ color: headingColor }}
                >
                  {t.label}
                </Tab>
              ))}
            </TabList>
          </Box>

          <TabPanels>
            {CATALOG_TABS.map((tab) => (
              <TabPanel key={tab.label} px={0} pt={10} pb={0}>
                {/* Header: image + identity + specs */}
                <Box
                  display="grid"
                  gridTemplateColumns={{ base: "1fr", lg: "1fr 1.4fr" }}
                  gap={8}
                  mb={tab.groups.length > 0 ? 12 : 0}
                >
                  {/* Image */}
                  <Box
                    borderRadius="10px"
                    overflow="hidden"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p={10}
                    minH="280px"
                    style={{ background: tab.imageBg }}
                    position="relative"
                  >
                    <NextImage
                      src={tab.image}
                      alt={tab.imageAlt}
                      width={380}
                      height={240}
                      style={{ objectFit: "contain", maxHeight: "220px", width: "auto" }}
                    />
                  </Box>

                  {/* Content */}
                  <Box display="flex" flexDirection="column" justifyContent="center">
                    <Text
                      color="#F25C05"
                      fontSize="11px"
                      fontWeight={700}
                      letterSpacing="1.8px"
                      textTransform="uppercase"
                      mb={2}
                    >
                      {tab.eyebrow}
                    </Text>
                    <Heading
                      as="h3"
                      color={headingColor}
                      fontFamily="var(--font-display)"
                      fontWeight={800}
                      fontSize={{ base: "1.4rem", md: "1.7rem" }}
                      letterSpacing="-0.5px"
                      lineHeight={1.2}
                      mb={4}
                    >
                      {tab.title}
                    </Heading>
                    <Text
                      color={bodyColor}
                      fontSize="0.9rem"
                      lineHeight={1.8}
                      mb={tab.specs.length > 0 ? 6 : 4}
                    >
                      {tab.description}
                    </Text>

                    {/* Spec table */}
                    {tab.specs.length > 0 && (
                      <Box
                        border="1px solid"
                        borderColor={borderColor}
                        borderRadius="10px"
                        overflow="hidden"
                        mb={tab.applications.length > 0 ? 5 : 0}
                      >
                        {tab.specs.map((row, i) => (
                          <Flex
                            key={row.label}
                            px={4}
                            py={2.5}
                            bg={i % 2 === 1 ? specRowAlt : "transparent"}
                            gap={4}
                            align="center"
                          >
                            <Text
                              w="130px"
                              flexShrink={0}
                              color={specLabelClr}
                              fontSize="10px"
                              fontWeight={700}
                              letterSpacing="1.2px"
                              textTransform="uppercase"
                            >
                              {row.label}
                            </Text>
                            <Text
                              color={headingColor}
                              fontFamily="monospace"
                              fontSize="0.8rem"
                              fontWeight={600}
                            >
                              {row.value}
                            </Text>
                          </Flex>
                        ))}
                      </Box>
                    )}

                    {/* Application tags */}
                    {tab.applications.length > 0 && (
                      <Flex wrap="wrap" gap={2} mb={5}>
                        {tab.applications.map((app) => (
                          <Badge
                            key={app}
                            variant="outline"
                            colorScheme="gray"
                            fontWeight={500}
                            fontSize="0.68rem"
                            borderRadius="full"
                            px={3}
                            py={1}
                          >
                            {app}
                          </Badge>
                        ))}
                      </Flex>
                    )}

                    <Box
                      as="a"
                      href="#inquiry"
                      display="inline-flex"
                      alignItems="center"
                      gap={1.5}
                      color="#F25C05"
                      fontWeight={700}
                      fontSize="0.875rem"
                      textDecoration="none"
                      _hover={{ color: "#d94e04" }}
                      transition="color 0.2s"
                      w="fit-content"
                    >
                      Inquire about this product →
                    </Box>
                  </Box>
                </Box>

                {/* SKU groups */}
                {tab.groups.length > 0 && (
                  <Box
                    borderTop="1px solid"
                    borderColor={borderColor}
                    pt={10}
                    pb={4}
                  >
                    <Text
                      color={specLabelClr}
                      fontSize="10px"
                      fontWeight={700}
                      letterSpacing="1.8px"
                      textTransform="uppercase"
                      mb={6}
                    >
                      Additional SKUs in this category
                    </Text>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                      {tab.groups.map((group) => (
                        <Box
                          key={group.label}
                          bg={groupBg}
                          border="1px solid"
                          borderColor={borderColor}
                          borderRadius="10px"
                          p={6}
                        >
                          <Text
                            color="#F25C05"
                            fontSize="10px"
                            fontWeight={700}
                            letterSpacing="1.5px"
                            textTransform="uppercase"
                            mb={4}
                          >
                            {group.label}
                          </Text>
                          <List spacing={0}>
                            {group.items.map((item) => (
                              <ListItem
                                key={item}
                                py={2.5}
                                borderBottom="1px solid"
                                borderColor={itemBorderClr}
                                _last={{ borderBottom: "none" }}
                              >
                                <Text
                                  color={headingColor}
                                  fontSize="0.85rem"
                                  fontWeight={500}
                                >
                                  {item}
                                </Text>
                              </ListItem>
                            ))}
                          </List>
                          <Box
                            as="a"
                            href="#inquiry"
                            display="inline-block"
                            mt={5}
                            color="#F25C05"
                            fontWeight={700}
                            fontSize="0.8rem"
                            textDecoration="none"
                            _hover={{ color: "#d94e04" }}
                          >
                            Request specs →
                          </Box>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Box>
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>

        <Flex
          mt={12}
          pt={8}
          borderTop="1px solid"
          borderColor={borderColor}
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={4}
        >
          <Text color={bodyColor} fontSize="0.9rem">
            Need full datasheets, compatibility matrices, or custom BoM generation?
          </Text>
          <Flex align="center" gap={5} wrap="wrap">
            <Box
              as="button"
              onClick={onSpecSheetOpen}
              display="inline-flex"
              alignItems="center"
              gap={2}
              bg="#F25C05"
              color="white"
              px={5}
              py={2.5}
              borderRadius="8px"
              fontFamily="var(--font-display)"
              fontWeight={700}
              fontSize="0.8rem"
              cursor="pointer"
              whiteSpace="nowrap"
              _hover={{ bg: "#d94e04" }}
              transition="all 0.2s"
            >
              ↓ Request Spec Sheet
            </Box>
            <Box
              as="a"
              href="https://blacksea.sg/en/products"
              target="_blank"
              rel="noopener noreferrer"
              color="#F25C05"
              fontWeight={700}
              fontSize="0.875rem"
              textDecoration="none"
              whiteSpace="nowrap"
              _hover={{ color: "#d94e04" }}
            >
              Full catalogue at blacksea.sg ↗
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Solutions / Use Cases
// ─────────────────────────────────────────────────────────────────────────────

function SolutionsSection() {
  const cases = [
    {
      number: "01",
      title: "AI Training & Inference Clusters",
      body: "Large-scale model training demands GPU clusters with lossless, ultra-low-latency interconnect. 800G and 1.6T optical modules with RoCEv2 eliminate the network bottleneck — keeping GPUs fully fed and training runs on schedule.",
      tags: ["800G / 1.6T Optical", "RoCE Lossless Fabric", "GPU Cluster Interconnect"],
    },
    {
      number: "02",
      title: "Cloud & Hyperscale Data Centers",
      body: "High-density leaf-spine architectures need interconnect that scales without exploding power budgets. Copper DAC and AEC for short-reach rack connections; transceiver modules for longer fabric runs. Right product for every hop.",
      tags: ["Leaf-Spine Architecture", "DAC / ACC / AEC", "High-Density Deployment"],
    },
    {
      number: "03",
      title: "HPC & Supercomputing",
      body: "Simulations, genomics, and financial modelling require deterministic low latency and maximum sustained throughput. Our 800G optical modules and AOC cables are proven in demanding HPC environments across the globe.",
      tags: ["Supercomputing / HPC", "Active Optical Cables", "Low-Latency Fabric"],
    },
  ];

  return (
    <Box as="section" bg="#05080e" py={{ base: 16, md: 24 }} position="relative" overflow="hidden">
      {/* Subtle grid */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.06}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }} position="relative" zIndex={1}>
        <Box mb={14} maxW="560px">
          <Text
            color="#F25C05"
            fontSize="11px"
            fontWeight={700}
            letterSpacing="2px"
            fontFamily="var(--font-mono)"
            textTransform="uppercase"
            mb={3}
          >
            Use Cases
          </Text>
          <Heading
            as="h2"
            color="white"
            fontFamily="var(--font-display)"
            fontWeight={700}
            fontSize={{ base: "2rem", md: "2.75rem" }}
            letterSpacing="-1.5px"
            lineHeight={1.1}
          >
            Built for the Most
            <br />
            Demanding Environments
          </Heading>
        </Box>

        {/* Diagram */}
        <Box
          borderRadius="10px"
          overflow="hidden"
          mb={12}
          border="1px solid rgba(255,255,255,0.07)"
        >
          <RoCEDiagram />
        </Box>

        {/* Use case rows */}
        <Box display="flex" flexDirection="column" gap={0}>
          {cases.map((c, i) => (
            <Box
              key={c.number}
              display="grid"
              gridTemplateColumns={{ base: "1fr", md: "80px 1fr" }}
              gap={{ base: 4, md: 8 }}
              py={8}
              borderTop="1px solid rgba(255,255,255,0.07)"
              _last={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              alignItems="start"
            >
              <Text
                color="rgba(255,255,255,0.15)"
                fontFamily="var(--font-display)"
                fontWeight={700}
                fontSize="2rem"
                lineHeight={1}
                display={{ base: "none", md: "block" }}
              >
                {c.number}
              </Text>
              <Box>
                <Heading
                  as="h3"
                  color="white"
                  fontFamily="var(--font-display)"
                  fontWeight={700}
                  fontSize={{ base: "1.1rem", md: "1.25rem" }}
                  mb={3}
                  letterSpacing="-0.3px"
                >
                  {c.title}
                </Heading>
                <Text
                  color="rgba(255,255,255,0.6)"
                  fontSize="0.9rem"
                  lineHeight={1.8}
                  mb={4}
                  maxW="700px"
                >
                  {c.body}
                </Text>
                <Flex wrap="wrap" gap={2}>
                  {c.tags.map((tag) => (
                    <Box
                      key={tag}
                      px={3}
                      py={1}
                      borderRadius="full"
                      border="1px solid rgba(242,92,5,0.35)"
                      style={{ background: "rgba(242,92,5,0.08)" }}
                    >
                      <Text
                        color="rgba(242,92,5,0.9)"
                        fontSize="11px"
                        fontWeight={700}
                        letterSpacing="0.4px"
                      >
                        {tag}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// ─── RoCE Diagram (adapted from Black Sea Technology's RoCEDiagram.tsx) ───────

function RoCEDiagram() {
  const SPINES = [150, 300, 450];
  const LEAVES = [80, 200, 320, 440, 540];
  const RACKS  = [60, 140, 220, 300, 380, 460, 540];

  return (
    <svg
      role="img"
      aria-label="800G RoCE Lossless Network — spine-leaf topology diagram"
      viewBox="0 0 600 380"
      style={{ display: "block", width: "100%", height: "auto", background: "#0a0f1a" }}
    >
      <style>{`
        @keyframes roce-dash { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -36; } }
        @keyframes roce-pulse { 0%, 100% { opacity: 0.35; } 50% { opacity: 0.85; } }
        @keyframes roce-badge { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }
      `}</style>

      <defs>
        <radialGradient id="roce-glow-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(242,92,5,0.08)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="roce-glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feComposite in="SourceGraphic" in2="b" operator="over" />
        </filter>
        <linearGradient id="roce-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3388ff" />
          <stop offset="100%" stopColor="#0066ff" />
        </linearGradient>
        <linearGradient id="roce-orange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F25C05" />
          <stop offset="100%" stopColor="#ff8c42" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <rect width="600" height="380" fill="url(#roce-glow-bg)" />

      {/* Base links */}
      {SPINES.map((sx, si) =>
        LEAVES.map((lx, li) => (
          <line key={`b-${si}-${li}`} x1={sx} y1="72" x2={lx} y2="185" stroke="#1a2a40" strokeWidth="1" />
        ))
      )}

      {/* Animated flows */}
      {[
        { d: "M 60 280 L 80 185 L 150 72 L 300 72 L 320 185 L 380 280", g: "url(#roce-blue)",   delay: "0s",   dur: "4s"   },
        { d: "M 220 280 L 200 185 L 300 72 L 450 72 L 440 185 L 540 280", g: "url(#roce-orange)", delay: "0.9s", dur: "5s"   },
        { d: "M 460 280 L 440 185 L 450 72 L 150 72 L 80 185 L 60 280",   g: "url(#roce-blue)",   delay: "1.8s", dur: "4.5s" },
      ].map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill="none"
          stroke={p.g}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="14 10"
          filter="url(#roce-glow)"
          style={{ animation: `roce-dash ${p.dur} linear infinite`, animationDelay: p.delay }}
        />
      ))}

      {/* Spine switches */}
      {SPINES.map((cx, i) => (
        <g key={`sp-${i}`}>
          <rect x={cx - 44} y="46" width="88" height="30" rx="6" fill="rgba(242,92,5,0.12)" stroke="#F25C05" strokeWidth="1.5" filter="url(#roce-glow)" />
          <text x={cx} y="66" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#F25C05">SPINE</text>
        </g>
      ))}

      {/* Leaf switches */}
      {LEAVES.map((cx, i) => (
        <g key={`lf-${i}`}>
          <rect x={cx - 34} y="172" width="68" height="26" rx="5" fill="rgba(51,136,255,0.12)" stroke="#3388ff" strokeWidth="1.5" filter="url(#roce-glow)" />
          <text x={cx} y="190" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#3388ff">LEAF</text>
        </g>
      ))}

      {/* GPU racks */}
      {RACKS.map((cx, i) => (
        <g key={`rk-${i}`}>
          <rect x={cx - 22} y="276" width="44" height="68" rx="4" fill="#0a0f1a" stroke="#3388ff" strokeOpacity="0.3" strokeWidth="1" />
          {[0, 1, 2, 3].map((row) => (
            <rect
              key={row}
              x={cx - 18} y={283 + row * 14} width="36" height="10" rx="1.5"
              fill="#3388ff"
              style={{ animation: "roce-pulse 3s ease-in-out infinite", animationDelay: `${(i * 4 + row) * 0.14}s` }}
            />
          ))}
          <text x={cx} y="358" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#4a5568">GPU</text>
        </g>
      ))}

      {/* Badge */}
      <g filter="url(#roce-glow)">
        <rect x="200" y="108" width="200" height="26" rx="13" fill="rgba(242,92,5,0.15)" stroke="#F25C05" strokeWidth="1.5" style={{ animation: "roce-badge 3s ease-in-out infinite" }} />
        <text x="300" y="126" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#ffffff">800G · LOSSLESS · RoCEv2</text>
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Why Innovaas
// ─────────────────────────────────────────────────────────────────────────────

function WhyInnovaasSection() {
  const points = [
    { n: "01", title: "Authorized Reseller Status",                    body: "Innovaas holds formal authorized reseller rights to Black Sea Technology's full portfolio. You get direct access to validated products, accurate roadmap visibility, and priority allocation on next-generation SKUs before the broader channel." },
    { n: "02", title: "Shorter Lead Times",                           body: "Local inventory and regional logistics eliminate trans-Pacific shipping delays. When you're building AI infrastructure on a deadline, lead time is a competitive advantage." },
    { n: "03", title: "Solution Architecture Consulting",              body: "Selecting a transceiver SKU is the easy part. Designing the right fabric topology for your specific AI workload, power envelope, and scale-out roadmap is where we add real value. Included at no extra cost." },
    { n: "04", title: "2-Year Warranty + 7 × 24 Support",             body: "Every product ships with a full manufacturer warranty backed by Black Sea Technology's around-the-clock engineering team. Non-human damage is covered — free repair or advance replacement." },
    { n: "05", title: "Global Reach, Local Expertise",                 body: "We ship internationally and work across time zones — no region is out of scope. Whether you're building in North America, Europe, or Asia, our team engages directly to support procurement, compliance, and technical onboarding." },
    { n: "06", title: "The Broader Innovaas Ecosystem",               body: "Building AI infrastructure and need custom AI software alongside it? Innovaas designs and builds data platforms, ML pipelines, and AI applications. Your hardware partner is also your technology partner." },
  ];

  return (
    <Box as="section" bg="#0a0f18" py={{ base: 16, md: 24 }} borderTop="1px solid rgba(255,255,255,0.08)">
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", lg: "320px 1fr" }}
          gap={{ base: 12, lg: 20 }}
          alignItems="start"
        >
          {/* Sticky left label */}
          <Box position={{ lg: "sticky" }} top={{ lg: "120px" }}>
            <Text
              color="#F25C05"
              fontSize="11px"
              fontWeight={700}
              letterSpacing="2px"
              textTransform="uppercase"
              mb={3}
            >
              Why Partner With Us
            </Text>
            <Heading
              as="h2"
              color="#f4f6fa"
              fontFamily="var(--font-display)"
              fontWeight={700}
              fontSize={{ base: "2rem", md: "2.6rem" }}
              letterSpacing="-1.5px"
              lineHeight={1.1}
              mb={5}
            >
              Why Buy
              <br />
              Through
              <br />
              Innovaas
            </Heading>
            <Box
              as="a"
              href="#inquiry"
              display="inline-block"
              bg="#F25C05"
              color="white"
              px={7}
              py={3.5}
              borderRadius="8px"
              fontFamily="var(--font-display)"
              fontWeight={700}
              fontSize="0.9rem"
              textDecoration="none"
              transition="all 0.2s"
              _hover={{ bg: "#d94e04", transform: "translateY(-1px)" }}
            >
              Talk to Us →
            </Box>
          </Box>

          {/* Right: numbered list */}
          <Box>
            {points.map((p, i) => (
              <Box
                key={p.n}
                display="grid"
                gridTemplateColumns="48px 1fr"
                gap={6}
                py={8}
                borderTop="1px solid rgba(255,255,255,0.08)"
                _last={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                role="group"
                transition="all 0.2s"
                _hover={{ pl: 2 }}
              >
                <Text
                  color="rgba(255,255,255,0.22)"
                  fontFamily="var(--font-display)"
                  fontWeight={700}
                  fontSize="1.4rem"
                  lineHeight={1.2}
                  mt={0.5}
                >
                  {p.n}
                </Text>
                <Box>
                  <Heading
                    as="h3"
                    color="#f4f6fa"
                    fontFamily="var(--font-display)"
                    fontWeight={800}
                    fontSize={{ base: "1.05rem", md: "1.15rem" }}
                    mb={2.5}
                    letterSpacing="-0.2px"
                  >
                    {p.title}
                  </Heading>
                  <Text
                    color="#d4dbe6"
                    fontSize="0.9rem"
                    lineHeight={1.8}
                  >
                    {p.body}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Lead Form
// ─────────────────────────────────────────────────────────────────────────────

function LeadFormSection() {
  const [form, setForm] = useState<FormState>({
    name: "", company: "", email: "", role: "", inquiryType: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const msg = [
        `Company: ${form.company}`,
        form.role         ? `Role: ${form.role}`                    : null,
        form.inquiryType  ? `Inquiry type: ${form.inquiryType}`     : null,
        "",
        form.message,
      ].filter(Boolean).join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: msg }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", company: "", email: "", role: "", inquiryType: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Box as="section" id="inquiry" bg="#05080e" py={{ base: 16, md: 24 }} position="relative" overflow="hidden">
      {/* Glow accent */}
      <Box
        position="absolute"
        top="-20%"
        left="-10%"
        w="500px"
        h="500px"
        borderRadius="full"
        style={{ background: "radial-gradient(circle, rgba(242,92,5,0.1) 0%, transparent 65%)" }}
        aria-hidden
      />

      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }} position="relative" zIndex={1}>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1.1fr" }}
          gap={{ base: 12, lg: 16 }}
          alignItems="start"
        >
          {/* Left */}
          <Box>
            <Text
              color="#F25C05"
              fontSize="11px"
              fontWeight={700}
              letterSpacing="2px"
              textTransform="uppercase"
              mb={3}
            >
              Get in Touch
            </Text>
            <Heading
              as="h2"
              color="white"
              fontFamily="var(--font-display)"
              fontWeight={700}
              fontSize={{ base: "2rem", md: "2.75rem" }}
              letterSpacing="-1.5px"
              lineHeight={1.1}
              mb={6}
            >
              Talk to an
              <br />
              Interconnect
              <br />
              Specialist
            </Heading>
            <Text
              color="rgba(255,255,255,0.6)"
              fontSize="1rem"
              lineHeight={1.8}
              mb={10}
              maxW="420px"
            >
              Speccing a new AI cluster. Upgrading an existing fabric. Exploring what 800G
              looks like in your environment. Wherever you are — our team can help.
            </Text>

            <List spacing={4} mb={10}>
              {[
                "Product selection & compatibility advice",
                "Solution architecture review",
                "Pricing & lead time estimates",
                "Technical specification questions",
                "Sample / evaluation unit requests",
              ].map((item) => (
                <ListItem key={item} display="flex" alignItems="center" gap={3}>
                  <CheckCircleIcon color="#F25C05" flexShrink={0} />
                  <Text color="rgba(255,255,255,0.7)" fontSize="0.9rem">{item}</Text>
                </ListItem>
              ))}
            </List>

            <Box
              p={5}
              borderRadius="10px"
              border="1px solid rgba(255,255,255,0.08)"
              style={{ background: "rgba(255,255,255,0.04)" }}
              display="inline-block"
            >
              <Text color="rgba(255,255,255,0.4)" fontSize="10px" fontWeight={700} letterSpacing="1.5px" textTransform="uppercase" mb={1.5}>
                Direct Contact
              </Text>
              <Box
                as="a"
                href="mailto:sales@innovaas.co"
                color="#F25C05"
                fontWeight={700}
                fontSize="0.95rem"
                textDecoration="none"
                _hover={{ color: "#ff7a3d" }}
              >
                sales@innovaas.co
              </Box>
            </Box>
          </Box>

          {/* Right — form */}
          <Box
            borderRadius="24px"
            border="1px solid rgba(255,255,255,0.09)"
            style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)" }}
            p={{ base: 7, md: 9 }}
          >
            {status === "success" ? (
              <Box textAlign="center" py={14}>
                <Box
                  w="52px" h="52px"
                  borderRadius="full"
                  border="1px solid rgba(242,92,5,0.3)"
                  style={{ background: "rgba(242,92,5,0.1)" }}
                  display="flex" alignItems="center" justifyContent="center"
                  mx="auto" mb={5}
                >
                  <CheckCircleIcon color="#F25C05" boxSize={6} />
                </Box>
                <Heading
                  as="h3"
                  color="white"
                  fontFamily="var(--font-display)"
                  fontWeight={800}
                  fontSize="1.25rem"
                  mb={3}
                >
                  Message Received
                </Heading>
                <Text color="rgba(255,255,255,0.6)" fontSize="0.9rem" lineHeight={1.7}>
                  We&apos;ll be in touch within one business day.{" "}
                  <Box as="a" href="mailto:sales@innovaas.co" color="#F25C05" fontWeight={700}>
                    sales@innovaas.co
                  </Box>{" "}
                  for urgent enquiries.
                </Text>
              </Box>
            ) : (
              <Box as="form" onSubmit={handleSubmit}>
                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4} mb={4}>
                  <FormControl isRequired>
                    <FormLabel color="rgba(255,255,255,0.5)" fontSize="0.72rem" fontWeight={700} letterSpacing="1px" textTransform="uppercase" mb={1.5}>Name</FormLabel>
                    <Input name="name" value={form.name} onChange={handleChange} placeholder="Your name"
                      borderColor="rgba(255,255,255,0.1)" color="white" _placeholder={{ color: "rgba(255,255,255,0.25)" }}
                      bg="rgba(255,255,255,0.05)" _hover={{ borderColor: "rgba(255,255,255,0.2)" }}
                      _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                      borderRadius="10px" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel color="rgba(255,255,255,0.5)" fontSize="0.72rem" fontWeight={700} letterSpacing="1px" textTransform="uppercase" mb={1.5}>Company</FormLabel>
                    <Input name="company" value={form.company} onChange={handleChange} placeholder="Organisation"
                      borderColor="rgba(255,255,255,0.1)" color="white" _placeholder={{ color: "rgba(255,255,255,0.25)" }}
                      bg="rgba(255,255,255,0.05)" _hover={{ borderColor: "rgba(255,255,255,0.2)" }}
                      _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                      borderRadius="10px" />
                  </FormControl>
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4} mb={4}>
                  <FormControl isRequired>
                    <FormLabel color="rgba(255,255,255,0.5)" fontSize="0.72rem" fontWeight={700} letterSpacing="1px" textTransform="uppercase" mb={1.5}>Work Email</FormLabel>
                    <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com"
                      borderColor="rgba(255,255,255,0.1)" color="white" _placeholder={{ color: "rgba(255,255,255,0.25)" }}
                      bg="rgba(255,255,255,0.05)" _hover={{ borderColor: "rgba(255,255,255,0.2)" }}
                      _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                      borderRadius="10px" />
                  </FormControl>
                  <FormControl>
                    <FormLabel color="rgba(255,255,255,0.5)" fontSize="0.72rem" fontWeight={700} letterSpacing="1px" textTransform="uppercase" mb={1.5}>Role</FormLabel>
                    <Input name="role" value={form.role} onChange={handleChange} placeholder="e.g. Network Architect"
                      borderColor="rgba(255,255,255,0.1)" color="white" _placeholder={{ color: "rgba(255,255,255,0.25)" }}
                      bg="rgba(255,255,255,0.05)" _hover={{ borderColor: "rgba(255,255,255,0.2)" }}
                      _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                      borderRadius="10px" />
                  </FormControl>
                </SimpleGrid>

                <FormControl mb={4}>
                  <FormLabel color="rgba(255,255,255,0.5)" fontSize="0.72rem" fontWeight={700} letterSpacing="1px" textTransform="uppercase" mb={1.5}>Inquiry Type</FormLabel>
                  <Select name="inquiryType" value={form.inquiryType} onChange={handleChange} placeholder="Select one"
                    borderColor="rgba(255,255,255,0.1)" color="white"
                    bg="rgba(255,255,255,0.05)" _hover={{ borderColor: "rgba(255,255,255,0.2)" }}
                    _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                    borderRadius="10px"
                    sx={{ option: { background: "#1a2233", color: "white" } }}>
                    <option>Product availability &amp; pricing</option>
                    <option>Solution architecture consulting</option>
                    <option>Technical specifications</option>
                    <option>Sample / evaluation unit request</option>
                    <option>General enquiry</option>
                  </Select>
                </FormControl>

                <FormControl isRequired mb={6}>
                  <FormLabel color="rgba(255,255,255,0.5)" fontSize="0.72rem" fontWeight={700} letterSpacing="1px" textTransform="uppercase" mb={1.5}>Message</FormLabel>
                  <Textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Describe your environment, topology, target speeds, or questions..."
                    rows={5}
                    borderColor="rgba(255,255,255,0.1)" color="white" _placeholder={{ color: "rgba(255,255,255,0.25)" }}
                    bg="rgba(255,255,255,0.05)" _hover={{ borderColor: "rgba(255,255,255,0.2)" }}
                    _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                    borderRadius="10px" />
                </FormControl>

                {status === "error" && (
                  <Alert status="error" borderRadius="10px" mb={4} bg="rgba(220,38,38,0.15)" color="white" border="1px solid rgba(220,38,38,0.3)">
                    <AlertIcon color="#ef4444" />
                    Something went wrong. Email us at sales@innovaas.co
                  </Alert>
                )}

                <Button
                  type="submit"
                  isLoading={status === "loading"}
                  loadingText="Sending..."
                  w="full"
                  size="lg"
                  bg="#F25C05"
                  color="white"
                  borderRadius="full"
                  fontFamily="var(--font-display)"
                  fontWeight={700}
                  fontSize="0.95rem"
                  _hover={{ bg: "#d94e04", transform: "translateY(-1px)" }}
                  transition="all 0.2s"
                  h="52px"
                >
                  Send Inquiry →
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Spec Sheet Gated Modal
// ─────────────────────────────────────────────────────────────────────────────

const NOVACRM_URL =
  process.env.NEXT_PUBLIC_NOVACRM_API_URL || "https://novacrm.innovaas.co";
const COLLATERAL_URL = process.env.NEXT_PUBLIC_BST_SPEC_SHEET_URL || "";

function SpecSheetModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<SpecSheetFormState>({
    name: "",
    email: "",
    company: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${NOVACRM_URL}/api/leads/capture`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organization_name: form.company,
          page_slug: "solutions/data-center-connectivity",
          source: "spec-sheet-request",
          interest: "High-Speed Interconnect — Spec Sheet Request",
          collateral_url: COLLATERAL_URL,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", company: "" });
    }, 300);
  };

  const inputStyles = {
    borderColor: "rgba(255,255,255,0.12)",
    color: "white",
    bg: "rgba(255,255,255,0.06)",
    _placeholder: { color: "rgba(255,255,255,0.28)" },
    _hover: { borderColor: "rgba(255,255,255,0.25)" },
    _focus: { borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" },
    borderRadius: "10px",
  } as const;

  const labelStyles = {
    color: "rgba(255,255,255,0.5)",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "1px",
    textTransform: "uppercase" as const,
    mb: 1.5,
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered size="md">
      <ModalOverlay backdropFilter="blur(6px)" bg="rgba(8,12,22,0.75)" />
      <ModalContent
        bg="#0a0f18"
        border="1px solid rgba(255,255,255,0.1)"
        borderRadius="10px"
        mx={4}
      >
        <ModalHeader
          color="white"
          fontFamily="var(--font-display)"
          fontWeight={800}
          fontSize="1.15rem"
          pt={7}
          pb={1}
          px={7}
        >
          Request Spec Sheet
        </ModalHeader>
        <ModalCloseButton color="rgba(255,255,255,0.4)" top={5} right={5} />

        <ModalBody px={7} pb={7} pt={2}>
          {status === "success" ? (
            <Box textAlign="center" py={8}>
              <Box
                w="52px"
                h="52px"
                borderRadius="full"
                border="1px solid rgba(242,92,5,0.3)"
                style={{ background: "rgba(242,92,5,0.1)" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mx="auto"
                mb={5}
              >
                <CheckCircleIcon color="#F25C05" boxSize={6} />
              </Box>
              <Heading
                as="h3"
                color="white"
                fontFamily="var(--font-display)"
                fontWeight={800}
                fontSize="1.1rem"
                mb={3}
              >
                Check your inbox
              </Heading>
              <Text color="rgba(255,255,255,0.55)" fontSize="0.88rem" lineHeight={1.7}>
                The spec sheet is on its way to{" "}
                <Box as="span" color="#F25C05" fontWeight={600}>
                  {form.email}
                </Box>
                . Check your spam folder if it doesn&apos;t arrive within a few minutes.
              </Text>
            </Box>
          ) : (
            <Box as="form" onSubmit={handleSubmit}>
              <Text
                color="rgba(255,255,255,0.45)"
                fontSize="0.83rem"
                mb={6}
                lineHeight={1.6}
              >
                We&apos;ll email the PDF directly to you — covering our full 400G / 800G / 1.6T
                product range.
              </Text>

              <FormControl isRequired mb={4}>
                <FormLabel {...labelStyles}>Full Name</FormLabel>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  {...inputStyles}
                />
              </FormControl>

              <FormControl isRequired mb={4}>
                <FormLabel {...labelStyles}>Work Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  {...inputStyles}
                />
              </FormControl>

              <FormControl isRequired mb={6}>
                <FormLabel {...labelStyles}>Company</FormLabel>
                <Input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Organisation name"
                  {...inputStyles}
                />
              </FormControl>

              {status === "error" && (
                <Alert
                  status="error"
                  borderRadius="10px"
                  mb={4}
                  bg="rgba(220,38,38,0.15)"
                  color="white"
                  border="1px solid rgba(220,38,38,0.3)"
                >
                  <AlertIcon color="#ef4444" />
                  Something went wrong. Email us at{" "}
                  <Box as="a" href="mailto:sales@innovaas.co" color="#F25C05" ml={1}>
                    sales@innovaas.co
                  </Box>
                </Alert>
              )}

              <Button
                type="submit"
                isLoading={status === "loading"}
                loadingText="Sending..."
                w="full"
                size="lg"
                bg="#F25C05"
                color="white"
                borderRadius="full"
                fontFamily="var(--font-display)"
                fontWeight={700}
                fontSize="0.9rem"
                _hover={{ bg: "#d94e04", transform: "translateY(-1px)" }}
                transition="all 0.2s"
                h="50px"
              >
                Send Me the Spec Sheet →
              </Button>

              <Text
                color="rgba(255,255,255,0.25)"
                fontSize="0.72rem"
                textAlign="center"
                mt={4}
              >
                No account required. We won&apos;t share your details.
              </Text>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
