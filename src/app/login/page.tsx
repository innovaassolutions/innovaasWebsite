"use client";
import { useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { handleAuthError } from "@/utils/auth";
import { useRouter } from "next/navigation";

// Force dynamic rendering to prevent build-time errors when Supabase is not configured
export const dynamic = 'force-dynamic';

import {
  Box,
  VStack,
  Input,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Colors for light/dark mode
  const boxBg = useColorModeValue("white", "#232b39");
  const boxShadow = useColorModeValue("lg", "dark-lg");
  const headingColor = useColorModeValue("#181f2a", "#fff");

  async function handleLogin() {
    setError("");
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
      setError(handleAuthError(error));
    } else {
      router.refresh();
      router.push("/team");
    }
    
    setLoading(false);
  }

  return (
    <Flex minH="100vh" align="center" justify="center" bg="transparent">
      <Box
        bg={boxBg}
        boxShadow={boxShadow}
        borderRadius="xl"
        p={{ base: 6, md: 10 }}
        minW={{ base: "90vw", sm: "400px", md: "400px" }}
        maxW="400px"
      >
        <VStack spacing={6}>
          <Heading color={headingColor} size="lg" mb={2}>
            Team Innovaas Login
          </Heading>
          <Input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            size="lg"
            variant="filled"
            type="email"
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            size="lg"
            variant="filled"
          />
          <Button
            bg="#F25C05"
            color="#fff"
            size="lg"
            w="100%"
            _hover={{ bg: "#d94e04" }}
            onClick={handleLogin}
            isLoading={loading}
            loadingText="Signing in..."
          >
            Login
          </Button>
          {error && <Text color="red.500" textAlign="center">{error}</Text>}
        </VStack>
      </Box>
    </Flex>
  );
}
