import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import BlogIndexClient from './BlogIndexClient';

interface BlogPostMeta {
  title: string;
  date: string;
  author: string;
  image?: string;
  slug: string;
}

export default async function BlogIndexPage() {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = await fs.readdir(postsDir);
  const posts: BlogPostMeta[] = await Promise.all(
    files.filter(f => f.endsWith('.md')).map(async (file) => {
      const filePath = path.join(postsDir, file);
      const source = await fs.readFile(filePath, 'utf8');
      const { data } = matter(source);
      return {
        title: data.title,
        date: data.date,
        author: data.author,
        image: data.image,
        slug: data.slug || file.replace(/\.md$/, ''),
      };
    })
  );
  // Sort by date descending
  posts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  return <BlogIndexClient posts={posts} />;
} 