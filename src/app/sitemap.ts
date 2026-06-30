import type { MetadataRoute } from "next";
import { SITE_URL } from "./data/site";
import { BLOG_POSTS } from "./data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/stories/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    // ── Main pages ──
    { url: SITE_URL,                          lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/floss`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/wholesale`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/stories`,             lastModified: new Date(), changeFrequency: "weekly",  priority: 0.75 },
    { url: `${SITE_URL}/company`,             lastModified: new Date(), changeFrequency: "yearly",  priority: 0.5 },

    // ── Floss detail pages ──
    { url: `${SITE_URL}/cloth`,                lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${SITE_URL}/floss/cosmo`,         lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${SITE_URL}/floss/seasons`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${SITE_URL}/floss/nishikiito`,    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${SITE_URL}/sashiko`,               lastModified: new Date(), changeFrequency: "yearly",  priority: 0.8 },
    { url: `${SITE_URL}/100-ladies`,            lastModified: new Date(), changeFrequency: "yearly",  priority: 0.8 },
    { url: `${SITE_URL}/crochet`,               lastModified: new Date(), changeFrequency: "yearly",  priority: 0.8 },
    { url: `${SITE_URL}/tools-supplies`,        lastModified: new Date(), changeFrequency: "yearly",  priority: 0.8 },

    // ── Legal pages ──
    { url: `${SITE_URL}/terms`,               lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE_URL}/privacy`,             lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },

    // ── Stories ──
    ...blogPosts,
  ];
}
