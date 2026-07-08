import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../data/blogPosts";
import { BLOG_POSTS } from "../data/blogPosts";

function StoryTile({ post }: { post: BlogPost }) {
  const compactTitle = post.title.length > 28;

  return (
    <Link href={`/stories/${post.slug}`} className="brand-category-tile">
      <div className="brand-category-media">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width:640px) 50vw, 33vw"
          style={{ objectFit: post.imageFit ?? "cover" }}
        />
      </div>
      <div className="brand-category-caption">
        <span
          className={`brand-category-title${compactTitle ? " brand-category-title--compact" : ""}`}
        >
          {post.title}
        </span>
        <span className="brand-category-arrow" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}

export default function BrandStories() {
  const latest = [...BLOG_POSTS]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section className="brand-categories" aria-labelledby="stories-title">
      <h2 className="brand-categories-heading" id="stories-title">
        Stories
      </h2>
      <div className="brand-categories-inner">
        {latest.map((post) => (
          <StoryTile key={post.slug} post={post} />
        ))}
      </div>
      <div className="brand-categories-more">
        <Link href="/stories" className="brand-categories-more-link">
          View all Stories
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
