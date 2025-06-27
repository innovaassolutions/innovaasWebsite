import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postPath = path.join(process.cwd(), 'posts', `${slug}.md`);
  let source;
  try {
    source = await fs.readFile(postPath, 'utf8');
  } catch {
    notFound();
  }
  const { data, content } = matter(source);

  return (
    <Box maxW="900px" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      {data.image && (
        <Image src={data.image} alt={data.title} borderRadius="lg" mb={6} w="100%" h="300px" objectFit="cover" />
      )}
      <Heading as="h1" size="xl" mb={2} fontWeight={900} fontFamily="Montserrat, Arial, sans-serif">
        {data.title}
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={4}>
        {data.date} &mdash; {data.author}
      </Text>
      <Box className="markdown-body" fontSize="lg">
        <ReactMarkdown>{content}</ReactMarkdown>
      </Box>
    </Box>
  );
} 