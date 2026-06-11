# GA4 & Bing Webmaster Tools — cosmo-us.lecien.com

Both services are **free**. No paid subscription required.

---

## Google Analytics 4 (GA4)

### Step 1 — Create a property (one-time, ~5 min)

1. Open [Google Analytics](https://analytics.google.com)
2. **Admin** (gear) → **Create** → **Property**
3. Property name: `COSMO US` (or similar)
4. Time zone: US, currency: USD
5. **Web** data stream → URL: `https://cosmo-us.lecien.com`
6. Copy the **Measurement ID** (`G-XXXXXXXXXX`)

### Step 2 — Add to Vercel

1. Vercel → project **cosmo-us** → **Settings** → **Environment Variables**
2. Add:
   - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: your `G-XXXXXXXXXX`
   - Environments: Production (and Preview if desired)
3. **Redeploy** the site (Deployments → … → Redeploy)

The site already includes `GoogleAnalytics.tsx`. Tracking starts after the env var is set and deployed.

### Step 3 — Confirm data

1. Visit `https://cosmo-us.lecien.com`
2. GA4 → **Reports** → **Realtime** — you should see 1 active user within ~30 seconds

---

## Bing Webmaster Tools (recommended: import from GSC)

**No code changes required** if you import from Google Search Console.

### Steps (~3 min)

1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Sign in (Microsoft or Google account)
3. **Add a site** → choose **Import from Google Search Console**
4. Select `https://cosmo-us.lecien.com` (must match GSC property)
5. Confirm import — ownership carries over from GSC
6. **Sitemaps** → submit: `https://cosmo-us.lecien.com/sitemap.xml`

### Alternative — HTML meta tag

If import is unavailable:

1. Bing → Add site → URL prefix → `https://cosmo-us.lecien.com`
2. Choose **HTML meta tag**, copy the `content` value
3. Set Vercel env var: `NEXT_PUBLIC_BING_SITE_VERIFICATION`
4. Redeploy — the tag is injected via `layout.tsx` `metadata.verification`

---

## Privacy

Privacy Policy already mentions analytics cookies. Google Analytics is listed under third-party service providers after GA4 is enabled.

---

## Related files

| File | Purpose |
|------|---------|
| `src/app/components/GoogleAnalytics.tsx` | GA4 gtag loader |
| `src/app/layout.tsx` | Includes analytics + optional Bing verification |
| `.env.example` | Local dev env var template |

---

*Created: 2026-06-11*
