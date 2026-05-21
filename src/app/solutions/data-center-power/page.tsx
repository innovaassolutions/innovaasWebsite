"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  List,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Alert,
  AlertIcon,
  Badge,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
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

const TEAL = "#00b4c8";
const ORANGE = "#F25C05";

type LeadFormState = {
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

const NOVACRM_URL =
  process.env.NEXT_PUBLIC_NOVACRM_API_URL || "https://novacrm.innovaas.co";
const COLLATERAL_URL =
  process.env.NEXT_PUBLIC_PDUMIND_SPEC_SHEET_URL ||
  "https://rklmklzzkzntdgcsuuma.supabase.co/storage/v1/object/public/ai-generated-images/f0cb83cb-f863-46d7-93cb-83935a91cd08/1779369774393_PDUMind-Product-Specifications.pdf";

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function DataCenterPowerPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HeroSection onSpecSheetOpen={onOpen} />
      <StatsStrip />
      <CategoryCards />
      <ProductCatalog onSpecSheetOpen={onOpen} />
      <CapabilitiesSection />
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
      minH={{ base: "auto", md: "88vh" }}
      display="flex"
      alignItems="center"
      bg="#080c16"
    >
      {/* Teal gradient glow */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="600px"
        h="600px"
        borderRadius="full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,180,200,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <Box
        position="absolute"
        bottom="-20%"
        left="-10%"
        w="500px"
        h="500px"
        borderRadius="full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,180,200,0.10) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      {/* Grid overlay */}
      <Box
        position="absolute"
        inset={0}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,180,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,200,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: 5, md: 10 }}
        py={{ base: 20, md: 0 }}
        position="relative"
        zIndex={1}
        w="full"
      >
        <Box maxW={{ base: "100%", lg: "680px" }}>
          {/* Badge */}
          <Flex align="center" gap={3} mb={6} wrap="wrap">
            <Box
              display="inline-flex"
              alignItems="center"
              gap={2}
              px={4}
              py={1.5}
              borderRadius="full"
              border={`1px solid ${TEAL}40`}
              style={{ background: `${TEAL}15` }}
            >
              <Box w="7px" h="7px" borderRadius="full" bg={TEAL} />
              <Text
                color={TEAL}
                fontSize="11px"
                fontWeight={700}
                letterSpacing="1.5px"
                textTransform="uppercase"
              >
                Authorized Reseller
              </Text>
            </Box>
            <Box
              display="inline-flex"
              px={3}
              py={1}
              borderRadius="full"
              border="1px solid rgba(255,255,255,0.1)"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <Text
                color="rgba(255,255,255,0.5)"
                fontSize="11px"
                fontWeight={600}
                letterSpacing="0.5px"
              >
                PDUMind · Intelligent Power Solutions
              </Text>
            </Box>
          </Flex>

          <Heading
            as="h1"
            color="white"
            fontFamily="Montserrat, Arial, sans-serif"
            fontWeight={900}
            fontSize={{ base: "2.6rem", md: "3.75rem" }}
            letterSpacing="-2px"
            lineHeight={1.05}
            mb={6}
          >
            Intelligent Power
            <br />
            <Box as="span" color={TEAL}>
              Management
            </Box>{" "}
            for
            <br />
            Modern Data Centers
          </Heading>

          <Text
            color="rgba(255,255,255,0.6)"
            fontSize={{ base: "1rem", md: "1.1rem" }}
            lineHeight={1.8}
            mb={10}
            maxW="560px"
          >
            Metered, switched, and 3-phase intelligent rack PDUs with ±1% kWh
            accuracy, per-outlet remote control, DCIM integration, and
            cascading management for up to 16 units from a single IP.
          </Text>

          <Flex gap={4} wrap="wrap">
            <Box
              as="a"
              href="#inquiry"
              display="inline-block"
              bg={ORANGE}
              color="white"
              px={8}
              py={4}
              borderRadius="full"
              fontFamily="Montserrat, Arial, sans-serif"
              fontWeight={700}
              fontSize="0.95rem"
              textDecoration="none"
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
              borderRadius="full"
              fontFamily="Montserrat, Arial, sans-serif"
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

          {/* Spec callouts */}
          <Flex gap={6} mt={12} wrap="wrap">
            {[
              ["16", "PDUs per IP"],
              ["±1%", "kWh Accuracy"],
              ["63A / 80A", "Max Input"],
              ["256-bit AES", "Encrypted"],
            ].map(([val, label]) => (
              <Box key={label}>
                <Text
                  color={TEAL}
                  fontFamily="Montserrat, Arial, sans-serif"
                  fontWeight={900}
                  fontSize="1.3rem"
                  letterSpacing="-0.5px"
                  lineHeight={1}
                  mb={0.5}
                >
                  {val}
                </Text>
                <Text
                  color="rgba(255,255,255,0.4)"
                  fontSize="0.72rem"
                  fontWeight={600}
                  letterSpacing="0.5px"
                  textTransform="uppercase"
                >
                  {label}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stats Strip
// ─────────────────────────────────────────────────────────────────────────────

function StatsStrip() {
  const stats = [
    { value: "16", label: "PDUs Cascaded from One IP" },
    { value: "±1%", label: "Billing-Grade kWh Accuracy" },
    { value: "36+", label: "Outlets per PDU" },
    { value: "48", label: "Max Monitored Outlets" },
    { value: "0–3,000m", label: "Altitude Rating" },
  ];

  return (
    <Box bg="#0d1421" borderTop="1px solid rgba(0,180,200,0.15)" borderBottom="1px solid rgba(0,180,200,0.15)" py={6}>
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
        <Flex
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={6}
        >
          {stats.map((stat, i) => (
            <Flex key={stat.label} align="center" gap={6}>
              <Box textAlign="center">
                <Text
                  color={TEAL}
                  fontFamily="Montserrat, Arial, sans-serif"
                  fontWeight={900}
                  fontSize={{ base: "1.4rem", md: "1.75rem" }}
                  letterSpacing="-1px"
                  lineHeight={1}
                  mb={1}
                >
                  {stat.value}
                </Text>
                <Text
                  color="rgba(255,255,255,0.45)"
                  fontSize="0.7rem"
                  fontWeight={600}
                  letterSpacing="0.8px"
                  textTransform="uppercase"
                  whiteSpace="nowrap"
                >
                  {stat.label}
                </Text>
              </Box>
              {i < stats.length - 1 && (
                <Box
                  display={{ base: "none", lg: "block" }}
                  w="1px"
                  h="32px"
                  bg="rgba(0,180,200,0.2)"
                />
              )}
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Category Cards
// ─────────────────────────────────────────────────────────────────────────────

function CategoryCards() {
  const cards = [
    {
      title: "Metered PDUs",
      subtitle: "CPDU-M Series",
      desc: "Real-time monitoring of voltage, current, power, and kWh at the inlet and branch level. ±1% billing-grade accuracy with live OLED/TFT display.",
      tags: ["Monitoring", "kWh Metering", "SNMP", "DCIM"],
    },
    {
      title: "Switched PDUs",
      subtitle: "CPDU-S Series",
      desc: "Per-outlet remote on/off control and timed reboot from any network interface — browser, SNMP, or the IECView iOS app.",
      tags: ["Outlet Control", "Remote Reboot", "iOS App", "Scheduling"],
    },
    {
      title: "3-Phase PDUs",
      subtitle: "CM-V Series",
      desc: "High-capacity 3-phase distribution for enterprise data halls. Alternate-phase layout balances load across circuits. Schneider breaker protection standard.",
      tags: ["3-Phase", "11.5 kW", "36× C39", "Schneider"],
    },
    {
      title: "Environmental Monitoring",
      subtitle: "Sensor Cascade",
      desc: "Cascade up to 8 EMD sensors per PDU for temperature, humidity, water leakage, door contact, motion, vibration, and smoke detection.",
      tags: ["Temperature", "Humidity", "Water Leakage", "Cascade"],
    },
  ];

  return (
    <Box bg="#080c16" py={{ base: 14, md: 20 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
        <Text
          color={TEAL}
          fontSize="11px"
          fontWeight={700}
          letterSpacing="2px"
          textTransform="uppercase"
          mb={3}
          textAlign="center"
        >
          Product Range
        </Text>
        <Heading
          as="h2"
          color="white"
          fontFamily="Montserrat, Arial, sans-serif"
          fontWeight={900}
          fontSize={{ base: "1.8rem", md: "2.4rem" }}
          letterSpacing="-1px"
          textAlign="center"
          mb={3}
        >
          Every PDU Use Case Covered
        </Heading>
        <Text
          color="rgba(255,255,255,0.5)"
          fontSize="0.95rem"
          textAlign="center"
          mb={12}
          maxW="520px"
          mx="auto"
        >
          From monitoring-only to fully switched, single-phase to 3-phase enterprise
          distribution — available through Innovaas.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={5}>
          {cards.map((card) => (
            <Box
              key={card.title}
              borderRadius="18px"
              border="1px solid rgba(0,180,200,0.15)"
              p={6}
              style={{ background: "rgba(0,180,200,0.04)", backdropFilter: "blur(8px)" }}
              transition="all 0.2s"
              _hover={{ borderColor: `${TEAL}50`, transform: "translateY(-2px)" }}
            >
              <Text
                color={TEAL}
                fontSize="10px"
                fontWeight={700}
                letterSpacing="1.5px"
                textTransform="uppercase"
                mb={1}
              >
                {card.subtitle}
              </Text>
              <Heading
                as="h3"
                color="white"
                fontFamily="Montserrat, Arial, sans-serif"
                fontWeight={800}
                fontSize="1rem"
                mb={3}
              >
                {card.title}
              </Heading>
              <Text
                color="rgba(255,255,255,0.55)"
                fontSize="0.82rem"
                lineHeight={1.7}
                mb={4}
              >
                {card.desc}
              </Text>
              <Flex wrap="wrap" gap={1.5}>
                {card.tags.map((tag) => (
                  <Badge
                    key={tag}
                    px={2}
                    py={0.5}
                    borderRadius="full"
                    bg="rgba(0,180,200,0.1)"
                    color={TEAL}
                    fontSize="0.65rem"
                    fontWeight={700}
                    letterSpacing="0.3px"
                    textTransform="none"
                    border={`1px solid ${TEAL}30`}
                  >
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Product Catalog
// ─────────────────────────────────────────────────────────────────────────────

function ProductCatalog({ onSpecSheetOpen }: { onSpecSheetOpen: () => void }) {
  const borderColor = useColorModeValue(
    "rgba(0,180,200,0.15)",
    "rgba(0,180,200,0.15)"
  );

  const cpdmSpecs = [
    ["Input Voltage", "176–264 VAC, 1-phase or 3-phase"],
    ["Max Input Current", "63A / 80A"],
    ["Max Outlets", "Up to 48"],
    ["Display", "TFT Colour Screen"],
    ["Communication", "Ethernet, RS485 ×2, USB"],
    ["Cascade", "Up to 16 PDUs via RS485"],
    ["Metering Accuracy", "±1% kWh billing grade"],
    ["Temp / Humidity", "Integrated sensors, 0.1°C resolution"],
    ["Alarm Modes", "Buzzer, LCD flash, email, SNMP"],
    ["Security", "SNMP v1/v2c/v3, HTTPS, 256-bit AES"],
    ["Mobile App", "iOS — IECView"],
    ["Operating Temp", "-10° to +50°C"],
    ["Humidity", "5–95% RH"],
    ["Altitude", "0–3,000 m"],
    ["Certifications", "CE, RoHS"],
  ];

  const cmvSpecs = [
    ["Model", "CM-V-3P16A-36C39-3M"],
    ["Input Voltage", "380–433 Vac"],
    ["Input Current", "16A 3-phase"],
    ["Input Plug", "IEC60309 16A 3-phase industrial"],
    ["Frequency", "50/60 Hz"],
    ["Max Power Capacity", "11.5 kW"],
    ["Output Voltage", "220–250 Vac"],
    ["Output Receptacles", "36× C39"],
    ["Max Circuit Current", "16A"],
    ["Overload Protection", "Schneider 1P 16A breaker"],
    ["Dimensions (W×D×H)", "1910 × 56 × 44.5 mm"],
    ["Material", "Aluminium — Black"],
    ["Operating Temp", "0–55°C"],
    ["Humidity", "5–95%"],
    ["Altitude", "0–3,000 m"],
    ["Certifications", "CE, RoHS"],
  ];

  return (
    <Box bg="#0a0f1a" py={{ base: 14, md: 22 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
        <Text
          color={TEAL}
          fontSize="11px"
          fontWeight={700}
          letterSpacing="2px"
          textTransform="uppercase"
          mb={3}
          textAlign="center"
        >
          Product Specifications
        </Text>
        <Heading
          as="h2"
          color="white"
          fontFamily="Montserrat, Arial, sans-serif"
          fontWeight={900}
          fontSize={{ base: "1.8rem", md: "2.4rem" }}
          letterSpacing="-1px"
          textAlign="center"
          mb={12}
        >
          Select a Product Line
        </Heading>

        <Tabs variant="unstyled" colorScheme="teal">
          <TabList
            bg="rgba(255,255,255,0.03)"
            borderRadius="14px"
            p={1.5}
            border="1px solid rgba(255,255,255,0.07)"
            display="inline-flex"
            mb={10}
            flexWrap="wrap"
            gap={1}
          >
            {[
              { label: "CPDU Smart PDU", sub: "Metered / Switched" },
              { label: "CM-V 3-Phase PDU", sub: "36× C39 Distribution" },
            ].map(({ label, sub }) => (
              <Tab
                key={label}
                px={5}
                py={3}
                borderRadius="10px"
                fontFamily="Montserrat, Arial, sans-serif"
                fontWeight={700}
                fontSize="0.82rem"
                color="rgba(255,255,255,0.45)"
                _selected={{
                  bg: TEAL,
                  color: "white",
                }}
                transition="all 0.15s"
              >
                <Box>
                  <Text>{label}</Text>
                  <Text
                    fontSize="0.65rem"
                    fontWeight={500}
                    opacity={0.75}
                    display={{ base: "none", md: "block" }}
                  >
                    {sub}
                  </Text>
                </Box>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {/* CPDU Smart PDU */}
            <TabPanel p={0}>
              <Box
                borderRadius="20px"
                border={`1px solid ${borderColor}`}
                overflow="hidden"
                style={{ background: "rgba(0,180,200,0.03)" }}
              >
                <Box p={{ base: 6, md: 8 }} borderBottom={`1px solid ${borderColor}`}>
                  <Flex align="flex-start" justify="space-between" wrap="wrap" gap={4}>
                    <Box>
                      <Text color={TEAL} fontSize="10px" fontWeight={700} letterSpacing="1.5px" textTransform="uppercase" mb={1}>
                        CPDU Series
                      </Text>
                      <Heading as="h3" color="white" fontFamily="Montserrat, Arial, sans-serif" fontWeight={800} fontSize="1.3rem" mb={2}>
                        Smart Metered / Switched PDU
                      </Heading>
                      <Text color="rgba(255,255,255,0.55)" fontSize="0.85rem" lineHeight={1.7} maxW="560px">
                        SUM (Sustainable, Upgradable, Maintainable) design with field-replaceable controllers.
                        Single-phase and 3-phase variants. Active metering for energy optimisation and circuit protection
                        across IDC, banking, government, and enterprise data halls.
                      </Text>
                    </Box>
                    <Flex gap={3} wrap="wrap">
                      {["Metered", "Switched", "1PH / 3PH", "CE"].map((t) => (
                        <Badge key={t} px={2.5} py={1} borderRadius="full" bg={`${TEAL}18`} color={TEAL} fontSize="0.7rem" fontWeight={700} border={`1px solid ${TEAL}30`}>{t}</Badge>
                      ))}
                    </Flex>
                  </Flex>
                </Box>

                <Box overflowX="auto" p={{ base: 6, md: 8 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: "left", padding: "10px 16px", color: "rgba(255,255,255,0.35)", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase", borderBottom: "1px solid rgba(0,180,200,0.15)", width: "40%" }}>Parameter</th>
                        <th style={{ textAlign: "left", padding: "10px 16px", color: "rgba(255,255,255,0.35)", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase", borderBottom: "1px solid rgba(0,180,200,0.15)" }}>Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cpdmSpecs.map(([param, spec], i) => (
                        <tr key={param} style={{ background: i % 2 === 0 ? "rgba(0,180,200,0.04)" : "transparent" }}>
                          <td style={{ padding: "9px 16px", color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: "0.82rem" }}>{param}</td>
                          <td style={{ padding: "9px 16px", color: "white", fontWeight: 500, fontSize: "0.82rem" }}>{spec}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
              </Box>
            </TabPanel>

            {/* CM-V 3-Phase */}
            <TabPanel p={0}>
              <Box
                borderRadius="20px"
                border={`1px solid ${borderColor}`}
                overflow="hidden"
                style={{ background: "rgba(0,180,200,0.03)" }}
              >
                <Box p={{ base: 6, md: 8 }} borderBottom={`1px solid ${borderColor}`}>
                  <Flex align="flex-start" justify="space-between" wrap="wrap" gap={4}>
                    <Box>
                      <Text color={TEAL} fontSize="10px" fontWeight={700} letterSpacing="1.5px" textTransform="uppercase" mb={1}>
                        CM-V Series
                      </Text>
                      <Heading as="h3" color="white" fontFamily="Montserrat, Arial, sans-serif" fontWeight={800} fontSize="1.3rem" mb={2}>
                        3-Phase Monitoring PDU — 36× C39
                      </Heading>
                      <Text color="rgba(255,255,255,0.55)" fontSize="0.85rem" lineHeight={1.7} maxW="560px">
                        High-capacity 3-phase distribution for enterprise data halls and colocation racks.
                        Alternate-phase layout balances load across circuits. Aluminium chassis, Schneider circuit
                        breaker protection, IEC60309 industrial input. 1U profile fits any standard 19″ rack.
                      </Text>
                    </Box>
                    <Flex gap={3} wrap="wrap">
                      {["3-Phase", "11.5 kW", "36× C39", "Schneider"].map((t) => (
                        <Badge key={t} px={2.5} py={1} borderRadius="full" bg={`${TEAL}18`} color={TEAL} fontSize="0.7rem" fontWeight={700} border={`1px solid ${TEAL}30`}>{t}</Badge>
                      ))}
                    </Flex>
                  </Flex>
                </Box>

                <Box overflowX="auto" p={{ base: 6, md: 8 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: "left", padding: "10px 16px", color: "rgba(255,255,255,0.35)", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase", borderBottom: "1px solid rgba(0,180,200,0.15)", width: "40%" }}>Parameter</th>
                        <th style={{ textAlign: "left", padding: "10px 16px", color: "rgba(255,255,255,0.35)", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase", borderBottom: "1px solid rgba(0,180,200,0.15)" }}>Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cmvSpecs.map(([param, spec], i) => (
                        <tr key={param} style={{ background: i % 2 === 0 ? "rgba(0,180,200,0.04)" : "transparent" }}>
                          <td style={{ padding: "9px 16px", color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: "0.82rem" }}>{param}</td>
                          <td style={{ padding: "9px 16px", color: "white", fontWeight: 500, fontSize: "0.82rem" }}>{spec}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* Catalog footer */}
        <Flex
          mt={12}
          pt={8}
          borderTop={`1px solid ${borderColor}`}
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={4}
        >
          <Text color="rgba(255,255,255,0.5)" fontSize="0.9rem">
            Need full datasheets, compatibility matrices, or a custom BoM?
          </Text>
          <Flex align="center" gap={5} wrap="wrap">
            <Box
              as="button"
              onClick={onSpecSheetOpen}
              display="inline-flex"
              alignItems="center"
              gap={2}
              bg={ORANGE}
              color="white"
              px={5}
              py={2.5}
              borderRadius="full"
              fontFamily="Montserrat, Arial, sans-serif"
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
              href="#inquiry"
              color={TEAL}
              fontWeight={700}
              fontSize="0.875rem"
              textDecoration="none"
              whiteSpace="nowrap"
              _hover={{ color: "#33c8da" }}
            >
              Talk to a specialist ↗
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Capabilities Section
// ─────────────────────────────────────────────────────────────────────────────

function CapabilitiesSection() {
  const capabilities = [
    {
      num: "01",
      title: "Bi-Stable Latching Relays",
      desc: "70% less energy than standard relays. Outlets retain their state through a PDU power cycle — no mass restart on recovery.",
    },
    {
      num: "02",
      title: "PDU Cascading",
      desc: "Chain up to 16 PDUs from a single Primary/Master over RS485, reducing IP address overhead and simplifying subnet management.",
    },
    {
      num: "03",
      title: "±1% kWh Metering",
      desc: "Billing-grade accuracy enables precise charge-back, capacity planning, and PUE reporting without additional metering hardware.",
    },
    {
      num: "04",
      title: "IEX Universal Socket",
      desc: "C13/C19 combo IEX socket accepts any C14 or C20 plug — no adapters, no hardware swaps when changing server generations.",
    },
    {
      num: "05",
      title: "DCIM Interoperability",
      desc: "Native SNMP v1/v2c/v3, Modbus, HTTP/HTTPS, and email alarm integration with third-party DCIM platforms.",
    },
    {
      num: "06",
      title: "Dual GbE Network",
      desc: "Two independent Gigabit Ethernet ports allow simultaneous access by data centre management and end clients on separate networks.",
    },
    {
      num: "07",
      title: "RCM Residual Current Monitoring",
      desc: "BENDER residual current monitoring dramatically reduces the risk of electric shock and regulatory audit burden.",
    },
    {
      num: "08",
      title: "Hydraulic-Magnetic Breakers",
      desc: "Temperature-independent circuit breakers monitor breaker status proactively and alert on high-load risk before a trip occurs.",
    },
  ];

  return (
    <Box bg="#080c16" py={{ base: 14, md: 22 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
        <Text
          color={TEAL}
          fontSize="11px"
          fontWeight={700}
          letterSpacing="2px"
          textTransform="uppercase"
          mb={3}
          textAlign="center"
        >
          Key Capabilities
        </Text>
        <Heading
          as="h2"
          color="white"
          fontFamily="Montserrat, Arial, sans-serif"
          fontWeight={900}
          fontSize={{ base: "1.8rem", md: "2.4rem" }}
          letterSpacing="-1px"
          textAlign="center"
          mb={12}
        >
          Built for High-Demand Environments
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={5}>
          {capabilities.map((cap) => (
            <Box
              key={cap.num}
              borderRadius="16px"
              border="1px solid rgba(255,255,255,0.07)"
              p={6}
              style={{ background: "rgba(255,255,255,0.02)" }}
              transition="all 0.2s"
              _hover={{ borderColor: `${TEAL}40`, transform: "translateY(-2px)" }}
            >
              <Text
                color={TEAL}
                fontFamily="Montserrat, Arial, sans-serif"
                fontWeight={900}
                fontSize="1.5rem"
                opacity={0.4}
                lineHeight={1}
                mb={3}
              >
                {cap.num}
              </Text>
              <Text
                color="white"
                fontWeight={700}
                fontSize="0.88rem"
                mb={2}
                lineHeight={1.4}
              >
                {cap.title}
              </Text>
              <Text
                color="rgba(255,255,255,0.45)"
                fontSize="0.8rem"
                lineHeight={1.7}
              >
                {cap.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Why Innovaas Section
// ─────────────────────────────────────────────────────────────────────────────

function WhyInnovaasSection() {
  const reasons = [
    {
      num: "01",
      title: "Authorized Reseller Status",
      desc: "Innovaas is an authorized PDUMind reseller — direct access to the full product range, official documentation, and manufacturer warranty.",
    },
    {
      num: "02",
      title: "Data Center Infrastructure Expertise",
      desc: "Our team understands the full rack stack. We pair PDUMind power management with BST high-speed interconnects to deliver complete infrastructure solutions.",
    },
    {
      num: "03",
      title: "Pre-Sales Engineering Support",
      desc: "Load calculations, phase balancing, cascade topology planning, and DCIM integration advice before any purchase order is raised.",
    },
    {
      num: "04",
      title: "Competitive Pricing & Lead Times",
      desc: "Direct reseller relationships mean no distributor markup. We provide upfront pricing and realistic lead time estimates from day one.",
    },
    {
      num: "05",
      title: "Global Reach, Local Expertise",
      desc: "Headquartered in Singapore with the ability to supply data center operators across the Asia-Pacific region and beyond.",
    },
  ];

  return (
    <Box bg="#0a0f1a" py={{ base: 14, md: 22 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1.5fr" }}
          gap={{ base: 12, lg: 16 }}
          alignItems="start"
        >
          <Box>
            <Text
              color={TEAL}
              fontSize="11px"
              fontWeight={700}
              letterSpacing="2px"
              textTransform="uppercase"
              mb={3}
            >
              Why Innovaas
            </Text>
            <Heading
              as="h2"
              color="white"
              fontFamily="Montserrat, Arial, sans-serif"
              fontWeight={900}
              fontSize={{ base: "1.8rem", md: "2.4rem" }}
              letterSpacing="-1px"
              lineHeight={1.1}
              mb={5}
            >
              The Right Partner
              <br />
              for Intelligent Power
            </Heading>
            <Text
              color="rgba(255,255,255,0.5)"
              fontSize="0.95rem"
              lineHeight={1.8}
            >
              Power management isn&apos;t just a hardware purchase. It affects
              uptime, energy costs, regulatory compliance, and operational
              complexity. We help data center teams get it right.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, sm: 2 }} gap={5}>
            {reasons.map((r) => (
              <Box
                key={r.num}
                borderRadius="16px"
                border="1px solid rgba(255,255,255,0.07)"
                p={5}
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <Text
                  color={TEAL}
                  fontFamily="Montserrat, Arial, sans-serif"
                  fontWeight={900}
                  fontSize="1.1rem"
                  opacity={0.5}
                  mb={2}
                >
                  {r.num}
                </Text>
                <Text color="white" fontWeight={700} fontSize="0.85rem" mb={2}>
                  {r.title}
                </Text>
                <Text
                  color="rgba(255,255,255,0.45)"
                  fontSize="0.78rem"
                  lineHeight={1.7}
                >
                  {r.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Lead Form Section
// ─────────────────────────────────────────────────────────────────────────────

function LeadFormSection() {
  const [form, setForm] = useState<LeadFormState>({
    name: "",
    company: "",
    email: "",
    role: "",
    inquiryType: "",
    message: "",
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
        form.role ? `Role: ${form.role}` : null,
        form.inquiryType ? `Inquiry type: ${form.inquiryType}` : null,
        "",
        form.message,
      ]
        .filter(Boolean)
        .join("\n");

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

  const inputStyles = {
    borderColor: "rgba(255,255,255,0.1)",
    color: "white",
    bg: "rgba(255,255,255,0.05)",
    _placeholder: { color: "rgba(255,255,255,0.25)" },
    _hover: { borderColor: "rgba(255,255,255,0.2)" },
    _focus: { borderColor: TEAL, boxShadow: `0 0 0 1px ${TEAL}` },
    borderRadius: "10px",
  } as const;

  const labelStyles = {
    color: "rgba(255,255,255,0.5)",
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "1px",
    textTransform: "uppercase" as const,
    mb: 1.5,
  };

  return (
    <Box as="section" id="inquiry" bg="#080c16" py={{ base: 16, md: 24 }} position="relative" overflow="hidden">
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="500px"
        h="500px"
        borderRadius="full"
        style={{ background: `radial-gradient(circle, ${TEAL}15 0%, transparent 65%)` }}
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
            <Text color={TEAL} fontSize="11px" fontWeight={700} letterSpacing="2px" textTransform="uppercase" mb={3}>
              Get in Touch
            </Text>
            <Heading
              as="h2"
              color="white"
              fontFamily="Montserrat, Arial, sans-serif"
              fontWeight={900}
              fontSize={{ base: "2rem", md: "2.75rem" }}
              letterSpacing="-1.5px"
              lineHeight={1.1}
              mb={6}
            >
              Talk to a
              <br />
              Power
              <br />
              Specialist
            </Heading>
            <Text color="rgba(255,255,255,0.6)" fontSize="1rem" lineHeight={1.8} mb={10} maxW="420px">
              Planning a new data hall. Upgrading an aging PDU fleet. Evaluating
              intelligent power monitoring for compliance. Our team can help.
            </Text>

            <List spacing={4} mb={10}>
              {[
                "PDU selection & phase balancing advice",
                "Load calculation & capacity planning",
                "Cascade topology design",
                "DCIM integration guidance",
                "Pricing & lead time estimates",
              ].map((item) => (
                <ListItem key={item} display="flex" alignItems="center" gap={3}>
                  <CheckCircleIcon color={TEAL} flexShrink={0} />
                  <Text color="rgba(255,255,255,0.7)" fontSize="0.9rem">{item}</Text>
                </ListItem>
              ))}
            </List>

            <Box
              p={5}
              borderRadius="14px"
              border="1px solid rgba(255,255,255,0.08)"
              style={{ background: "rgba(255,255,255,0.04)" }}
              display="inline-block"
            >
              <Text color="rgba(255,255,255,0.4)" fontSize="10px" fontWeight={700} letterSpacing="1.5px" textTransform="uppercase" mb={1.5}>
                Direct Contact
              </Text>
              <Box as="a" href="mailto:sales@innovaas.co" color={TEAL} fontWeight={700} fontSize="0.95rem" textDecoration="none" _hover={{ color: "#33c8da" }}>
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
                <Box w="52px" h="52px" borderRadius="full" border={`1px solid ${TEAL}50`} style={{ background: `${TEAL}15` }} display="flex" alignItems="center" justifyContent="center" mx="auto" mb={5}>
                  <CheckCircleIcon color={TEAL} boxSize={6} />
                </Box>
                <Heading as="h3" color="white" fontFamily="Montserrat, Arial, sans-serif" fontWeight={800} fontSize="1.25rem" mb={3}>
                  Message Received
                </Heading>
                <Text color="rgba(255,255,255,0.6)" fontSize="0.9rem" lineHeight={1.7}>
                  We&apos;ll be in touch within one business day.{" "}
                  <Box as="a" href="mailto:sales@innovaas.co" color={TEAL} fontWeight={700}>
                    sales@innovaas.co
                  </Box>{" "}
                  for urgent enquiries.
                </Text>
              </Box>
            ) : (
              <Box as="form" onSubmit={handleSubmit}>
                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4} mb={4}>
                  <FormControl isRequired>
                    <FormLabel {...labelStyles}>Name</FormLabel>
                    <Input name="name" value={form.name} onChange={handleChange} placeholder="Your name" {...inputStyles} />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel {...labelStyles}>Company</FormLabel>
                    <Input name="company" value={form.company} onChange={handleChange} placeholder="Organisation" {...inputStyles} />
                  </FormControl>
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4} mb={4}>
                  <FormControl isRequired>
                    <FormLabel {...labelStyles}>Work Email</FormLabel>
                    <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" {...inputStyles} />
                  </FormControl>
                  <FormControl>
                    <FormLabel {...labelStyles}>Role</FormLabel>
                    <Input name="role" value={form.role} onChange={handleChange} placeholder="e.g. Data Center Manager" {...inputStyles} />
                  </FormControl>
                </SimpleGrid>

                <FormControl mb={4}>
                  <FormLabel {...labelStyles}>Inquiry Type</FormLabel>
                  <Select name="inquiryType" value={form.inquiryType} onChange={handleChange} placeholder="Select one" {...inputStyles} sx={{ option: { background: "#1a2233", color: "white" } }}>
                    <option>Product selection & phase balancing</option>
                    <option>Load calculation & capacity planning</option>
                    <option>DCIM integration</option>
                    <option>Pricing & availability</option>
                    <option>Sample / evaluation unit request</option>
                    <option>General enquiry</option>
                  </Select>
                </FormControl>

                <FormControl isRequired mb={6}>
                  <FormLabel {...labelStyles}>Message</FormLabel>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your rack count, power capacity, monitoring requirements, or questions..."
                    rows={5}
                    {...inputStyles}
                  />
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
                  bg={ORANGE}
                  color="white"
                  borderRadius="full"
                  fontFamily="Montserrat, Arial, sans-serif"
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

function SpecSheetModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<SpecSheetFormState>({ name: "", email: "", company: "" });
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
          page_slug: "solutions/data-center-power",
          source: "spec-sheet-request",
          interest: "Intelligent Rack PDU — Spec Sheet Request",
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
    _focus: { borderColor: TEAL, boxShadow: `0 0 0 1px ${TEAL}` },
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
      <ModalContent bg="#0d1421" border="1px solid rgba(255,255,255,0.1)" borderRadius="20px" mx={4}>
        <ModalHeader color="white" fontFamily="Montserrat, Arial, sans-serif" fontWeight={800} fontSize="1.15rem" pt={7} pb={1} px={7}>
          Request Spec Sheet
        </ModalHeader>
        <ModalCloseButton color="rgba(255,255,255,0.4)" top={5} right={5} />

        <ModalBody px={7} pb={7} pt={2}>
          {status === "success" ? (
            <Box textAlign="center" py={8}>
              <Box w="52px" h="52px" borderRadius="full" border={`1px solid ${TEAL}50`} style={{ background: `${TEAL}18` }} display="flex" alignItems="center" justifyContent="center" mx="auto" mb={5}>
                <CheckCircleIcon color={TEAL} boxSize={6} />
              </Box>
              <Heading as="h3" color="white" fontFamily="Montserrat, Arial, sans-serif" fontWeight={800} fontSize="1.1rem" mb={3}>
                Check your inbox
              </Heading>
              <Text color="rgba(255,255,255,0.55)" fontSize="0.88rem" lineHeight={1.7}>
                The spec sheet is on its way to{" "}
                <Box as="span" color={TEAL} fontWeight={600}>{form.email}</Box>.
              </Text>
            </Box>
          ) : (
            <Box as="form" onSubmit={handleSubmit}>
              <Text color="rgba(255,255,255,0.45)" fontSize="0.83rem" mb={6} lineHeight={1.6}>
                We&apos;ll email the PDUMind product brochure and datasheet directly to you.
              </Text>

              <FormControl isRequired mb={4}>
                <FormLabel {...labelStyles}>Full Name</FormLabel>
                <Input name="name" value={form.name} onChange={handleChange} placeholder="Your name" {...inputStyles} />
              </FormControl>

              <FormControl isRequired mb={4}>
                <FormLabel {...labelStyles}>Work Email</FormLabel>
                <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" {...inputStyles} />
              </FormControl>

              <FormControl isRequired mb={6}>
                <FormLabel {...labelStyles}>Company</FormLabel>
                <Input name="company" value={form.company} onChange={handleChange} placeholder="Organisation name" {...inputStyles} />
              </FormControl>

              {status === "error" && (
                <Alert status="error" borderRadius="10px" mb={4} bg="rgba(220,38,38,0.15)" color="white" border="1px solid rgba(220,38,38,0.3)">
                  <AlertIcon color="#ef4444" />
                  Something went wrong. Email{" "}
                  <Box as="a" href="mailto:sales@innovaas.co" color={TEAL} ml={1}>sales@innovaas.co</Box>
                </Alert>
              )}

              <Button
                type="submit"
                isLoading={status === "loading"}
                loadingText="Sending..."
                w="full"
                size="lg"
                bg={ORANGE}
                color="white"
                borderRadius="full"
                fontFamily="Montserrat, Arial, sans-serif"
                fontWeight={700}
                fontSize="0.9rem"
                _hover={{ bg: "#d94e04", transform: "translateY(-1px)" }}
                transition="all 0.2s"
                h="50px"
              >
                Send Me the Spec Sheet →
              </Button>

              <Text color="rgba(255,255,255,0.25)" fontSize="0.72rem" textAlign="center" mt={4}>
                No account required. We won&apos;t share your details.
              </Text>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
