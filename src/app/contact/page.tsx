"use client";
import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, useColorModeValue, Heading, Text, Stack } from "@chakra-ui/react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };
  const bg = useColorModeValue("white", "#181f2a");
  const border = useColorModeValue("#e2e8f0", "#2d3748");
  const text = useColorModeValue("#181f2a", "#fff");
  return (
    <Box maxW="500px" mx="auto" mt={12} p={8} bg={bg} borderRadius="lg" boxShadow="lg" borderWidth="1px" borderColor={border}>
      <Heading as="h1" size="lg" mb={6} color={text}>Contact Us</Heading>
      {submitted ? (
        <Text color={text} fontSize="lg">Thank you for reaching out! We'll get back to you soon.</Text>
      ) : (
        <form onSubmit={handleSubmit}>
          <Stack spacing={5}>
            <FormControl isRequired>
              <FormLabel color={text}>Name</FormLabel>
              <Input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" bg={bg} color={text} borderColor={border} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color={text}>Email</FormLabel>
              <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" bg={bg} color={text} borderColor={border} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color={text}>Message</FormLabel>
              <Textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" rows={5} bg={bg} color={text} borderColor={border} />
            </FormControl>
            <Button
              type="submit"
              size="lg"
              fontWeight={700}
              bg="#F25C05"
              color="#fff"
              _hover={{ bg: "#d94e04" }}
            >
              Send Message
            </Button>
          </Stack>
        </form>
      )}
    </Box>
  );
} 