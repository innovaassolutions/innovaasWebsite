"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Button,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import Hero from "@/components/Hero";
import NovaKMSDashboard from "@/components/mockups/NovaKMSDashboard";
import NovaKMSSearch from "@/components/mockups/NovaKMSSearch";
import NovaKMSChat from "@/components/mockups/NovaKMSChat";
import Link from "next/link";

const NOVACRM_API_URL =
  process.env.NEXT_PUBLIC_NOVACRM_API_URL || "https://nova-cyan-mu.vercel.app";
const NOVACRM_API_KEY =
  process.env.NEXT_PUBLIC_NOVACRM_LEAD_API_KEY || "";

interface FormData {
  name: string;
  email: string;
  organization_name: string;
  role: string;
  notes: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function NovaKMSPage() {
  const headingColor = useColorModeValue("#181f2a", "#fff");
  const bodyTextColor = useColorModeValue("#222", "#d1d5db");
  const cardBg = useColorModeValue("white", "#232b39");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const mutedText = useColorModeValue("#555", "#a0aec0");
  const inputBg = useColorModeValue("white", "#181f2a");
  const border = useColorModeValue("#e2e8f0", "#2d3748");
  const text = useColorModeValue("#181f2a", "#fff");
  const problemBg = useColorModeValue("gray.50", "#1a2130");

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    organization_name: "",
    role: "",
    notes: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(`${NOVACRM_API_URL}/api/leads/capture`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(NOVACRM_API_KEY ? { "X-Api-Key": NOVACRM_API_KEY } : {}),
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organization_name: form.organization_name || undefined,
          role: form.role || undefined,
          interest: "novakms",
          notes: form.notes || undefined,
          page_slug: "novakms-landing",
          source: "novakms-landing",
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        throw new Error(body || `Request failed (${res.status})`);
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      <Hero
        image="/hero-services.webp"
        heading="NovaKMS"
        subheading="AI-Powered Knowledge Management. Your team's institutional knowledge — searchable, conversational, and always available."
        buttonText="See How It Works"
        buttonLink="#overview"
      />

      <Box maxW="1000px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
        {/* Product Overview */}
        <Box id="overview" mb={16}>
          <Heading
            as="h2"
            size="xl"
            mb={2}
            color="#F25C05"
            fontWeight={900}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            NovaKMS
          </Heading>
          <Text fontSize="lg" fontStyle="italic" color={bodyTextColor} mb={6}>
            Stop losing knowledge when people leave. Start finding answers in seconds.
          </Text>

          <Box borderRadius="lg" overflow="hidden" boxShadow="xl" mb={8}>
            <NovaKMSDashboard />
          </Box>

          <Text fontSize="lg" color={bodyTextColor} mb={4}>
            NovaKMS is an enterprise-grade, AI-powered Knowledge Management System built on RAG (Retrieval-Augmented Generation) technology. Upload your SOPs, training videos, process documents, meeting recordings, and technical manuals — NovaKMS processes them all and makes your entire knowledge base searchable through natural language.
          </Text>
          <Text fontSize="lg" color={bodyTextColor} mb={6}>
            New employees ask questions in plain English and get accurate, cited answers drawn from your actual documents. No more &quot;ask Bob, he&apos;s been here 20 years.&quot; Your institutional knowledge is finally captured, organized, and accessible to everyone.
          </Text>
        </Box>

        {/* The Problem */}
        <Box mb={16} bg={problemBg} mx={-8} px={8} py={10} borderRadius="xl">
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            The Problem
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" mb={3}>🧠</Text>
              <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Knowledge Walks Out the Door
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                When experienced employees leave, decades of institutional knowledge goes with them. Critical processes exist only in people&apos;s heads.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" mb={3}>⏱️</Text>
              <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Onboarding Takes Months
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                New hires spend weeks hunting for answers, interrupting colleagues, and piecing together processes from scattered documents, Slack threads, and tribal knowledge.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Text fontSize="2xl" mb={3}>📁</Text>
              <Heading as="h3" size="md" mb={2} color={headingColor} fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Information Is Scattered
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                SOPs in SharePoint, training videos on a shared drive, policies in email attachments, meeting notes in Notion. Nobody knows where anything is.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Key Features */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Key Features
          </Heading>
          <List spacing={3} color={bodyTextColor} pl={2} mb={6}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Multi-Modal Document Processing:</b> Upload PDFs, DOCX, audio recordings, and video files up to 5GB. NovaKMS processes them all — extracting text, transcribing audio, and analyzing video frames.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>AI-Powered Semantic Search:</b> Go beyond keyword matching. Search across all content types with natural language queries and get results ranked by semantic relevance with similarity scores.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>RAG Chat Assistant:</b> Ask questions in plain English and get accurate answers synthesized from your knowledge base — complete with source citations linking back to specific documents, pages, and timestamps.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Video Intelligence:</b> Automatic scene detection, frame extraction, and Claude Vision analysis turn training videos into searchable, referenceable content.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Intelligent Document Chunking:</b> Context-preserving chunking ensures answers maintain accuracy. No more losing meaning when documents are split.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#F25C05" />
              <b>Background Processing Pipeline:</b> Upload and forget. Documents are processed asynchronously with automatic retry and recovery — no babysitting required.
            </ListItem>
          </List>
        </Box>

        {/* Secondary Mockups */}
        <Box mb={16}>
          <Flex direction={{ base: "column", md: "row" }} gap={6} mb={8}>
            <Box flex={1}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <NovaKMSSearch />
              </Box>
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">
                Semantic search across documents, videos, and audio with similarity scoring
              </Text>
            </Box>
            <Box flex={1}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <NovaKMSChat />
              </Box>
              <Text fontSize="sm" color={bodyTextColor} mt={2} textAlign="center">
                RAG-powered chat assistant with source citations
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Use Cases */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={6}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Use Cases
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Employee Onboarding
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                New hires get instant answers about processes, policies, and procedures. Reduce onboarding time from months to weeks. Every employee gets a patient, always-available mentor who knows everything.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                SOP Management
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                Upload all your Standard Operating Procedures and make them instantly searchable. AI identifies outdated SOPs and highlights gaps in documentation coverage.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Training &amp; Development
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                Turn training videos and materials into an on-demand learning resource. Employees search for specific skills or processes and get relevant video clips, documents, and step-by-step guides.
              </Text>
            </Box>
            <Box bg={cardBg} p={6} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={2} color="#F25C05" fontWeight={700} fontFamily="Montserrat, Arial, sans-serif">
                Cross-Team Knowledge Sharing
              </Heading>
              <Text fontSize="md" color={bodyTextColor}>
                Break down silos between departments. Engineering, HR, Operations, and Finance all contribute to and benefit from a unified knowledge base that everyone can query.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Lead Capture Form */}
        <Box mb={16} id="get-started">
          <Heading
            as="h2"
            size="lg"
            mb={2}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
            textAlign="center"
          >
            Interested in NovaKMS?
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={8} textAlign="center" maxW="600px" mx="auto">
            Tell us about your knowledge management challenges. We&apos;ll show you how NovaKMS can help.
          </Text>

          <Box
            maxW="600px"
            mx="auto"
            bg={cardBg}
            borderRadius="xl"
            boxShadow="xl"
            borderWidth="1px"
            borderColor={border}
            p={{ base: 6, md: 10 }}
          >
            {status === "success" ? (
              <Flex direction="column" align="center" py={10}>
                <Flex
                  w={16}
                  h={16}
                  borderRadius="full"
                  bg="rgba(242, 92, 5, 0.1)"
                  align="center"
                  justify="center"
                  mb={4}
                >
                  <Icon as={CheckCircleIcon} w={8} h={8} color="#F25C05" />
                </Flex>
                <Heading as="h3" size="lg" mb={2} color={text} textAlign="center">
                  Thanks! We&apos;ll be in touch shortly.
                </Heading>
                <Text color={mutedText} textAlign="center" maxW="400px">
                  We&apos;ve received your inquiry and will reach out within one business day to discuss your knowledge management needs.
                </Text>
              </Flex>
            ) : (
              <form onSubmit={handleSubmit}>
                <Stack spacing={5}>
                  {/* Name & Email */}
                  <Flex direction={{ base: "column", sm: "row" }} gap={4}>
                    <FormControl isRequired flex={1}>
                      <FormLabel color={text} fontSize="sm" fontWeight={600}>
                        Full Name
                      </FormLabel>
                      <Input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        bg={inputBg}
                        color={text}
                        borderColor={border}
                        _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                        size="lg"
                      />
                    </FormControl>
                    <FormControl isRequired flex={1}>
                      <FormLabel color={text} fontSize="sm" fontWeight={600}>
                        Work Email
                      </FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        bg={inputBg}
                        color={text}
                        borderColor={border}
                        _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                        size="lg"
                      />
                    </FormControl>
                  </Flex>

                  {/* Company & Role */}
                  <Flex direction={{ base: "column", sm: "row" }} gap={4}>
                    <FormControl flex={1}>
                      <FormLabel color={text} fontSize="sm" fontWeight={600}>
                        Company Name
                      </FormLabel>
                      <Input
                        name="organization_name"
                        value={form.organization_name}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        bg={inputBg}
                        color={text}
                        borderColor={border}
                        _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                        size="lg"
                      />
                    </FormControl>
                    <FormControl flex={1}>
                      <FormLabel color={text} fontSize="sm" fontWeight={600}>
                        Job Title / Role
                      </FormLabel>
                      <Input
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        placeholder="VP of Operations"
                        bg={inputBg}
                        color={text}
                        borderColor={border}
                        _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                        size="lg"
                      />
                    </FormControl>
                  </Flex>

                  {/* Challenge */}
                  <FormControl>
                    <FormLabel color={text} fontSize="sm" fontWeight={600}>
                      What&apos;s your biggest knowledge management challenge?
                    </FormLabel>
                    <Textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="e.g., New hires take 3+ months to get up to speed, critical processes are only documented in people's heads, training videos are unwatched because they're not searchable..."
                      rows={4}
                      bg={inputBg}
                      color={text}
                      borderColor={border}
                      _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                      size="lg"
                    />
                  </FormControl>

                  {/* Error */}
                  {status === "error" && (
                    <Flex
                      align="center"
                      gap={2}
                      bg="rgba(220, 38, 38, 0.1)"
                      borderRadius="lg"
                      px={4}
                      py={3}
                    >
                      <Icon as={WarningIcon} color="red.400" w={4} h={4} />
                      <Text fontSize="sm" color="red.400">
                        {errorMsg}
                      </Text>
                    </Flex>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    isLoading={status === "submitting"}
                    loadingText="Sending…"
                    size="lg"
                    fontWeight={700}
                    bg="#F25C05"
                    color="#fff"
                    _hover={{ bg: "#d94e04" }}
                    w="100%"
                    py={7}
                    fontSize="lg"
                  >
                    Get Early Access
                  </Button>

                  <Text fontSize="xs" color={mutedText} textAlign="center">
                    We respect your privacy and will never share your information.
                  </Text>
                </Stack>
              </form>
            )}
          </Box>
        </Box>

        {/* CTA Section */}
        <Box textAlign="center" py={10} px={4} bg={cardBg} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
          <Heading
            as="h2"
            size="lg"
            mb={4}
            color={headingColor}
            fontWeight={800}
            fontFamily="Montserrat, Arial, sans-serif"
          >
            Ready to Capture Your Team&apos;s Knowledge?
          </Heading>
          <Text fontSize="lg" color={bodyTextColor} mb={6} maxW="600px" mx="auto">
            Stop losing institutional knowledge. Start giving every employee instant access to everything your organization knows.
          </Text>
          <Flex gap={4} justify="center" direction={{ base: "column", sm: "row" }}>
            <Button
              as="a"
              href="#get-started"
              bg="#F25C05"
              color="#fff"
              _hover={{ bg: "#d94e04" }}
              fontWeight={700}
              borderRadius="6px"
              size="lg"
            >
              Get Started
            </Button>
            <Button
              as={Link}
              href="/contact"
              variant="outline"
              borderColor="#F25C05"
              color="#F25C05"
              _hover={{ bg: "rgba(242, 92, 5, 0.1)" }}
              fontWeight={700}
              borderRadius="6px"
              size="lg"
            >
              Talk to Us
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
