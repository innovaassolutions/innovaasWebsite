"use client";
import { useColorModeValue } from "@chakra-ui/react";

export default function BlogList({ posts }) {
  const bodyTextColor = useColorModeValue('#222', '#d1d5db');
  const headingColor = useColorModeValue('#181f2a', '#fff');
  return (
    <div>
      {posts.map(post => (
        <div key={post.slug} style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: headingColor }}>{post.title}</h3>
          <div style={{ color: "#F25C05", fontWeight: 600, marginBottom: "0.5rem" }}>
            {post.author}{post.date && ` — ${post.date}`}
          </div>
          <p style={{ color: bodyTextColor }}>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
