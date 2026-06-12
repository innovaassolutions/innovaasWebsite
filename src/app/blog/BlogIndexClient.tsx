"use client";
import Link from "next/link";
import Image from "next/image";

interface BlogPostMeta {
  title: string;
  date: string;
  author: string;
  image?: string;
  slug: string;
}

export default function BlogIndexClient({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <div className="bg-ink-950 text-ink-100">
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="mb-6 font-mono text-xs tracking-[0.28em] text-signal-500">
            05 / FIELD NOTES
          </p>
          <h1
            className="m-0 uppercase leading-[0.95] tracking-tight text-ink-50"
            style={{ fontFamily: "var(--font-anton)", fontWeight: 400 }}
          >
            <span className="text-[clamp(2.4rem,6vw,4.6rem)]">
              Signal, <span className="text-signal-500">not noise.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
            Working notes from the field — unified namespaces, AI in
            operations, and what we learn building and shipping technology
            across Southeast Asia.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-ink-900 transition-colors hover:bg-ink-850"
              >
                {post.image && (
                  <div className="relative h-44 w-full overflow-hidden border-b border-line">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="opacity-80 transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-7">
                  <p className="m-0 font-mono text-[11px] tracking-[0.18em] text-ink-400">
                    {post.date.toUpperCase()} — {post.author.toUpperCase()}
                  </p>
                  <h2
                    className="mt-3 flex-1 text-lg font-semibold leading-snug !text-ink-50"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {post.title}
                  </h2>
                  <p className="m-0 mt-5 text-sm font-semibold text-signal-400 group-hover:text-signal-500">
                    Read →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
