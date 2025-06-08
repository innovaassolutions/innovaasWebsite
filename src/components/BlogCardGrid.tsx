"use client";
import { Box, SimpleGrid, Image, Text, Heading, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export default function BlogCardGrid({ posts }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} p={4}>
      {posts.map(post => (
        <Box
          key={post.slug}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg="white"
          _dark={{ bg: "gray.800" }}
          boxShadow="md"
        >
          <Link href={`/blog/${post.slug}`} passHref>
            <ChakraLink _hover={{ textDecoration: "none" }}>
              <Image src={post.image} alt={post.title} width="100%" height="200px" objectFit="cover" />
              <Box p={4}>
                <Text fontSize="sm" color="gray.500">{post.author}</Text>
                <Heading as="h3" size="md" mb={2}>{post.title}</Heading>
                <Text fontSize="sm" color="gray.600" noOfLines={3}>{post.excerpt}</Text>
                <Text fontSize="xs" color="gray.400" mt={2}>{post.date}</Text>
              </Box>
            </ChakraLink>
          </Link>
        </Box>
      ))}
    </SimpleGrid>
  );
}
