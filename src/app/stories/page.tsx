import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "../components/BlogCard";
import { BLOG_POSTS } from "../data/blogPosts";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Techniques, brand stories, and ideas from LECIEN COSMO embroidery — news and articles for stitchers in the United States.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  const posts = [...BLOG_POSTS].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  return (
    <>
      <div className="page-hero page-hero--compact">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / Stories
        </div>
        <h1>Stories</h1>
        <p className="page-hero-sub">
          Techniques, brand stories, and ideas from COSMO.
        </p>
      </div>

      <div className="page-container page-container--blog">
        <div className="blog-list">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
