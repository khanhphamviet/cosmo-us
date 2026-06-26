import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogArticle from "../../components/BlogArticle";
import { BLOG_POSTS, getBlogPost } from "../../data/blogPosts";
import { SITE_URL } from "../../data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: `${SITE_URL}${post.image}`,
    author: {
      "@type": "Organization",
      name: "LECIEN Corporation",
    },
    publisher: {
      "@type": "Organization",
      name: "LECIEN Corporation",
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="page-hero page-hero--compact">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/blog">Stories</Link> / Article
        </div>
      </div>
      <div className="page-container page-container--blog">
        <BlogArticle post={post} />
      </div>
    </>
  );
}
