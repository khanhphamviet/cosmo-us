import type { MetadataRoute } from "next";

const BASE = "https://cosmo-us.lecien.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Main pages ──
    { url: BASE,                          lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/floss`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/freepatterns`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/wholesale`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/company`,             lastModified: new Date(), changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE}/faire`,               lastModified: new Date(), changeFrequency: "yearly",  priority: 0.4 },

    // ── Floss detail pages ──
    { url: `${BASE}/floss/cosmo`,         lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/floss/seasons`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/floss/nishikiito`,    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/floss/hidamari`,      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },

    // ── Legal pages ──
    { url: `${BASE}/terms`,               lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/returns`,             lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/privacy`,             lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];
}
