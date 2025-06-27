"use client";
import { Box, Heading, Text, Image, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

interface BlogPostMeta {
  title: string;
  date: string;
  author: string;
  image?: string;
  slug: string;
}

export default function BlogIndexClient({ posts }: { posts: BlogPostMeta[] }) {
  const cardBg = useColorModeValue('white', '#232b39');
  const cardText = useColorModeValue('#181f2a', 'white');
  const titleColor = useColorModeValue('#181f2a', 'white');
  const metaColor = useColorModeValue('gray.500', 'gray.300');

  return (
    <Box maxW="900px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      <Heading as="h1" size="2xl" mb={8} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif" color={titleColor}>
        Blog
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {posts.map(post => (
          <Box key={post.slug} borderRadius="xl" boxShadow="lg" bg={cardBg} p={6} color={cardText}>
            {post.image && (
              <Image src={post.image} alt={post.title} borderRadius="lg" mb={4} w="100%" h="180px" objectFit="cover" />
            )}
            <Heading as="h2" size="md" mb={2} fontWeight={800} fontFamily="Montserrat, Arial, sans-serif" color={cardText}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </Heading>
            <Text fontSize="sm" color={metaColor} mb={2}>
              {post.date} &mdash; {post.author}
            </Text>
            <Link href={`/blog/${post.slug}`} style={{ color: '#F25C05', fontWeight: 700 }}>
              Read More
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
} 