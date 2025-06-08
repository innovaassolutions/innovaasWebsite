import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';

interface BlogPostProps {
  params: { slug: string };
}

function getPostBySlug(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { ...data, content } as { [key: string]: any; content: string };
}

function truncateText(text: string, wordLimit: number) {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>{post.title}</h1>
      <p>
        <strong>{post.author}</strong> {post.date && `— ${post.date}`}
      </p>
      {post.image && (
        <img src={post.image} alt={post.title} style={{ width: '100%', maxHeight: 400, objectFit: 'cover', marginBottom: 24 }} />
      )}
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
} 