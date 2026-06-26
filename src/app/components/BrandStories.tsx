import Link from "next/link";
import BlogCard from "./BlogCard";
import { BLOG_POSTS } from "../data/blogPosts";

export default function BrandStories() {
  const latest = [...BLOG_POSTS]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  return (
    <section className="brand-stories" aria-labelledby="stories-title">
      <div className="brand-stories-header">
        <div className="brand-stories-heading-group">
          <h2 className="brand-stories-heading" id="stories-title">
            Stories
          </h2>
          <p className="brand-stories-lead">
            Techniques, brand stories, and ideas from COSMO.
          </p>
        </div>
        <Link href="/blog" className="brand-stories-view-all">
          View all
          <span className="brand-stories-view-all-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      {latest.length > 0 ? (
        <div className="brand-stories-grid">
          {latest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
