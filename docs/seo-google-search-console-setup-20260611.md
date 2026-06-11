# Google Search Console Setup — cosmo-us.lecien.com

This guide walks through registering **https://cosmo-us.lecien.com** in Google Search Console (GSC) so Google can index the site and you can monitor queries such as **LECIEN COSMO**, **COSMO Faire**, and **COSMO wholesale**.

---

## Prerequisites

- Access to DNS or hosting for `cosmo-us.lecien.com` (or a Google account with permission to verify the domain)
- The site is live and returns **200 OK** for `/`, `/wholesale`, and `/sitemap.xml`
- Sitemap is generated at: **https://cosmo-us.lecien.com/sitemap.xml**

---

## Step 1 — Open Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with the Google account that should own the property (e.g. TANAAKK or LECIEN marketing)

---

## Step 2 — Add a property

Choose one of these approaches:

### Option A — URL prefix (recommended for this site)

1. Click **Add property**
2. Select **URL prefix**
3. Enter: `https://cosmo-us.lecien.com`
4. Click **Continue**

### Option B — Domain property (covers all subdomains)

1. Select **Domain**
2. Enter: `lecien.com`
3. Requires a **DNS TXT record** at the domain registrar

For a single US microsite, **URL prefix** is usually enough.

---

## Step 3 — Verify ownership

Google will offer several verification methods. Pick the one you can complete fastest:

| Method | What to do |
|--------|------------|
| **HTML file upload** | Download the verification file and place it in `public/` so it is served at the site root, then deploy |
| **HTML meta tag** | Add the meta tag to `src/app/layout.tsx` in the `<head>` (Next.js `metadata.verification.google`) |
| **DNS TXT** | Add the TXT record at your DNS provider for `cosmo-us.lecien.com` or `lecien.com` |
| **Google Analytics / Tag Manager** | Use if the same GA/GTM property is already on the site |

After deploying or saving DNS changes, click **Verify** in Search Console.

---

## Step 4 — Submit the sitemap

1. In GSC, open the property for `https://cosmo-us.lecien.com`
2. Go to **Sitemaps** (left menu)
3. Under **Add a new sitemap**, enter: `sitemap.xml`
4. Click **Submit**

Expected URL: `https://cosmo-us.lecien.com/sitemap.xml`

Priority pages included in the sitemap:

- `/` (homepage)
- `/wholesale` (COSMO Faire wholesale — priority 0.85)
- Product category pages (`/floss`, `/sashiko`, `/100-ladies`, etc.)

---

## Step 5 — Request indexing for key URLs

For faster discovery of new SEO copy and JSON-LD:

1. Go to **URL inspection** (top search bar)
2. Enter each URL and click **Request indexing**:

   - `https://cosmo-us.lecien.com/`
   - `https://cosmo-us.lecien.com/wholesale`
   - `https://cosmo-us.lecien.com/floss`
   - `https://cosmo-us.lecien.com/sashiko`

Use sparingly — a few important URLs after a deploy is enough.

---

## Step 6 — Monitor performance

After 1–4 weeks, check:

- **Performance → Search results** — filter queries containing `COSMO`, `LECIEN`, `Faire`
- **Pages** — confirm `/wholesale` is indexed
- **Enhancements** — no critical errors on structured data (Organization / WebSite JSON-LD)

Brand terms often take **1–3+ months** to rank; GSC shows impressions before clicks improve.

---

## Manual SEO tasks outside Search Console

These cannot be done in code but help Google associate **LECIEN COSMO** with this site:

1. **lecien.co.jp** — Add a link from the embroidery section to `https://cosmo-us.lecien.com` (US official site)
2. **Faire store** (`https://lecien.faire.com`) — Add the US website URL in the brand bio / external links
3. **Instagram** (`@lecien_cosmo`) — Ensure profile website points to `https://cosmo-us.lecien.com`
4. **Press / retailer emails** — Use consistent wording: “LECIEN COSMO official US website” and “COSMO wholesale on Faire”

---

## Optional — Bing Webmaster Tools

1. [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Import from Google Search Console or verify the same domain
3. Submit the same sitemap URL

---

## Troubleshooting

| Issue | Action |
|-------|--------|
| Sitemap “Couldn’t fetch” | Confirm `/sitemap.xml` loads in a browser; check deployment and robots.txt |
| Page not indexed | Inspect URL in GSC; ensure no `noindex` and canonical points to itself |
| Wrong canonical | Wholesale page should canonical to `/wholesale`; homepage to `/` |
| Structured data | View page source; confirm `application/ld+json` blocks from `SiteJsonLd` and `WholesaleJsonLd` |

---

## Related files in this repo

| File | Purpose |
|------|---------|
| `src/app/data/site.ts` | `SITE_URL`, `FAIRE_STORE_URL`, organization IDs |
| `src/app/layout.tsx` | Global metadata + `SiteJsonLd` |
| `src/app/wholesale/page.tsx` | Wholesale metadata + `WholesaleJsonLd` |
| `src/app/sitemap.ts` | Sitemap generation |

---

*Document created: 2026-06-11*
