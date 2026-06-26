import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../data/blogPosts";
import { formatBlogDate } from "../data/blogPosts";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-media">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 340px"
          style={{ objectFit: post.imageFit ?? "cover" }}
        />
      </div>
      <div className="blog-card-body">
        <time className="blog-card-date" dateTime={post.publishedAt}>
          {formatBlogDate(post.publishedAt)}
        </time>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <span className="blog-card-read">
          Read story
          <span aria-hidden="true"> →</span>
        </span>
      </div>
    </Link>
  );
}
