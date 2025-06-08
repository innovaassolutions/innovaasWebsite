import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogCardGrid from '@/components/BlogCardGrid';

interface PostMeta {
  title: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  excerpt?: string;
}

function truncateText(text: string, charLimit: number) {
  if (text.length <= charLimit) return text;
  // Remove trailing punctuation and whitespace before adding ...
  return text.slice(0, charLimit).replace(/[.,;:!?\s]+$/, '') + '...';
}

function getPosts(): PostMeta[] {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const excerptSource = data.excerpt || content.split('\n').find(line => line.trim()) || '';
    const excerpt = truncateText(excerptSource, 180); // 180 characters max
    return {
      title: data.title,
      date: data.date,
      author: data.author,
      image: data.image,
      slug: data.slug || filename.replace(/\.md$/, ''),
      excerpt,
    };
  });
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const posts = getPosts();
  return (
    <main>
      <BlogCardGrid posts={posts} />
    </main>
  );
} 