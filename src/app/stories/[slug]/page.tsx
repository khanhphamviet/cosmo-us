import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogArticle from "../../components/BlogArticle";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";
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
    alternates: { canonical: `/stories/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/stories/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function StoryPostPage({ params }: Props) {
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
    mainEntityOfPage: `${SITE_URL}/stories/${post.slug}`,
  };

  const faqSection = post.sections?.find(
    (s) => s.heading?.toLowerCase().includes("frequently asked")
  );
  const faqJsonLd =
    faqSection?.subsections?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqSection.subsections.map((sub) => ({
            "@type": "Question",
            name: sub.heading,
            acceptedAnswer: {
              "@type": "Answer",
              text: sub.paragraphs.join(" "),
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Stories", href: "/stories" },
          { name: post.title },
        ]}
      />
      <div className="page-hero page-hero--compact">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/stories">Stories</Link> / Article
        </div>
      </div>
      <div className="page-container page-container--blog">
        <BlogArticle post={post} />
      </div>
    </>
  );
}
