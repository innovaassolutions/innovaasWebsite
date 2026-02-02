"use client";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import Hero from "@/components/Hero";

const INTEREST_OPTIONS = [
  { value: "", label: "Select what you're interested in…" },
  { value: "digital-readiness", label: "Digital Readiness Assessment" },
  { value: "consulting", label: "Consulting & Advisory Services" },
  { value: "custom-software", label: "Custom AI-Powered Software" },
  { value: "novacrm", label: "NovaCRM — Custom CRM Deployment" },
  { value: "flowforge", label: "FlowForge — AI Assessment Platform" },
  { value: "systems-integration", label: "Systems Integration & Data Infrastructure" },
  { value: "other", label: "Something else" },
];

const NOVACRM_API_URL =
  process.env.NEXT_PUBLIC_NOVACRM_API_URL || "https://nova-cyan-mu.vercel.app";
const NOVACRM_API_KEY =
  process.env.NEXT_PUBLIC_NOVACRM_LEAD_API_KEY || "";

interface FormData {
  name: string;
  email: string;
  organization_name: string;
  role: string;
  interest: string;
  notes: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    organization_name: "",
    role: "",
    interest: "",
    notes: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const bg = useColorModeValue("white", "#1e2533");
  const cardBg = useColorModeValue("white", "#232b39");
  const border = useColorModeValue("#e2e8f0", "#2d3748");
  const text = useColorModeValue("#181f2a", "#fff");
  const mutedText = useColorModeValue("#555", "#a0aec0");
  const inputBg = useColorModeValue("white", "#181f2a");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          interest: form.interest || undefined,
          notes: form.notes || undefined,
          page_slug: "innovaas-website",
          source: "innovaas-contact",
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
        heading="Let's Talk"
        subheading="Tell us what you're working on. We'll figure out together whether we can help."
        buttonText=""
        buttonLink=""
      />
      <Box maxW="600px" mx="auto" mt={-8} mb={16} px={4}>
        <Box
          bg={cardBg}
          borderRadius="xl"
          boxShadow="xl"
          borderWidth="1px"
          borderColor={border}
          p={{ base: 6, md: 10 }}
          position="relative"
          zIndex={1}
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
                We&apos;ve received your message and will reach out within one business day.
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

                {/* Interest */}
                <FormControl>
                  <FormLabel color={text} fontSize="sm" fontWeight={600}>
                    What are you interested in?
                  </FormLabel>
                  <Select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    bg={inputBg}
                    color={form.interest ? text : mutedText}
                    borderColor={border}
                    _focus={{ borderColor: "#F25C05", boxShadow: "0 0 0 1px #F25C05" }}
                    size="lg"
                  >
                    {INTEREST_OPTIONS.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        disabled={opt.value === ""}
                        style={{ color: "#181f2a" }}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                {/* Message */}
                <FormControl>
                  <FormLabel color={text} fontSize="sm" fontWeight={600}>
                    Tell us more
                  </FormLabel>
                  <Textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="What challenges are you facing? What does your team look like? Anything helps."
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
                  Send Message
                </Button>

                <Text fontSize="xs" color={mutedText} textAlign="center">
                  We respect your privacy and will never share your information.
                </Text>
              </Stack>
            </form>
          )}
        </Box>
      </Box>
    </>
  );
}
