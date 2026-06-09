import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

/* ── Data ─────────────────────────────────────────────────────── */

const FLOSS_DATA = {
  cosmo: {
    title: "COSMO Size 25 & 5 Floss",
    img: "/images/floss-cosmo.jpg",
    intro:
      "In 1950, COSMO Embroidery Floss was launched with a wide assortment of 195 colors. Since then, our collection has been expanded to 501 beautiful colors. COSMO products are renowned and beloved in Japan and all over the world including North America, Asia, Europe and Australia.",
    sections: [
      {
        heading: "COSMO Size 25 Floss",
        body: "One of our basic COSMO Embroidery flosses, Size 25 is made exclusively out of Extra-long staple cotton of top quality.",
        specs: [
          { label: "Material",       value: "100% Cotton" },
          { label: "Length",         value: "8.75 yard / 8 meter" },
          { label: "Colors",         value: "501 solid colors" },
          { label: "Per box",        value: "6 skeins" },
          { label: "Strands",        value: "6" },
          { label: "Yarn count",     value: "30 cotton, 2 ply" },
        ],
      },
      {
        heading: "COSMO Size 5 Floss",
        body: "This floss is best suited not only for embroidering but also quilting, making TEMARI (Japanese traditional handballs) as well as hair of country dolls.",
        specs: [
          { label: "Material",       value: "100% Cotton" },
          { label: "Length",         value: "27.3 yard / 25 meter" },
          { label: "Colors",         value: "63 solid colors" },
          { label: "Per box",        value: "6 skeins" },
          { label: "Strands",        value: "1" },
          { label: "Yarn count",     value: "5.7 cotton, 2 ply" },
        ],
      },
    ],
    features: [
      {
        heading: "① Quality Cotton",
        body: "We use only the highest quality Extra-long staple cotton — just 1.8% of global cotton production — blended in our own original ratio for the best quality texture and resilience.",
      },
      {
        heading: "② Elegant Luster",
        body: "The vivid silky shine of COSMO Embroidery Floss brings out brighter and eye-catching color in every stitch.",
      },
      {
        heading: "③ Long-lasting Colors",
        body: "Our 501 colors all resist fading and discoloring due to the advanced craftsmanship of our special processing techniques.",
      },
      {
        heading: "④ Quality You Can Trust",
        body: "Through our strict inspection and testing processes, our customers are guaranteed consistently high quality products.",
      },
    ],
  },

  seasons: {
    title: "Seasons",
    img: "/images/floss-seasons.jpg",
    intro:
      "COSMO 25 floss with beautiful gradation colors. Seasons makes a complete color palette with solid COSMO 25 floss. Three styles with different types of gradation add a wider variety of expressions in your needlework.",
    sections: [
      {
        heading: "Seasons 5000",
        body: "Color-change every 8 cm / 3.14 inch — fun to pick for embroidery as well as non-stitching use. Well-balanced colorway with gradation in similar color ranges and multi-colored variations.",
        specs: [
          { label: "Colors",  value: "40 colors" },
          { label: "Feature", value: "Color-change every 8 cm" },
        ],
      },
      {
        heading: "Seasons 8000",
        body: "Gentle color-gradation: colors change every 30 cm / 11.81 inch, ideal for full-scale embroidery and large patterns. More naturally and beautifully embroider the sceneries of the four seasons.",
        specs: [
          { label: "Colors",  value: "80 colors" },
          { label: "Feature", value: "Color-change every 30 cm" },
        ],
      },
      {
        heading: "Seasons 9000",
        body: "Short and random color-pitches produce dynamic gradation in small motifs. Eye-catching vivid colorway also suited for one-point stitching.",
        specs: [
          { label: "Colors",  value: "20 colors" },
          { label: "Feature", value: "Random color-change pitch" },
        ],
      },
    ],
    specs: [
      { label: "Material",   value: "100% Cotton" },
      { label: "Length",     value: "8.75 yard / 8 meter" },
      { label: "Total colors", value: "140 variegated colors" },
      { label: "Per box",    value: "6 skeins" },
      { label: "Strands",    value: "6" },
      { label: "Yarn count", value: "30 cotton, 2 ply" },
    ],
    features: [],
  },

  nishikiito: {
    title: "nishikiito",
    img: "/images/nishikiito.jpg",
    intro:
      '"nishikiito" is the COSMO brand metallic thread for hand embroidery. This thread is crafted with the same technique used to produce gold thread in traditional Japanese clothing in the former capital of Japan, Kyoto.',
    sections: [
      {
        heading: "Nishiki",
        body: 'The type often used for Obi belts of Japanese traditional clothing (Kimono). Subtle metallic colors, resistant to friction — good for stitching, tatting lace, and tassels.',
        specs: [{ label: "Length", value: "Approx. 20 m per spool / equiv. No. 5–6 count" }],
      },
      {
        heading: "Kagami",
        body: "Sparklier presence thanks to its twisting technique and abundant glitter. Soft touch feeling is best for both cross-stitching and embroidery.",
        specs: [{ label: "Length", value: "Approx. 20 m per spool / equiv. No. 14 count" }],
      },
      {
        heading: "Opali",
        body: "Film-like smooth texture with multi-color reflection like Opal stones. Semi-transparent look allows light to faintly pass through, creating a unique nuance.",
        specs: [{ label: "Length", value: "Approx. 20 m per spool / equiv. No. 11 count" }],
      },
      {
        heading: "Champagni",
        body: "Pastel-colored gentle sparkles like bubbles in champagne. Soft and smooth hand feeling is comfortable for long stitching sessions.",
        specs: [{ label: "Length", value: "Approx. 20 m per spool / equiv. No. 10 count" }],
      },
      {
        heading: "Neoni",
        body: "Eye-catching bright color series. These threads give dramatic impact to your needlework even with just a small amount. Each strand is extra-fine, so use as many as needed.",
        specs: [{ label: "Length", value: "Approx. 50 m per spool / equiv. No. 25 count" }],
      },
    ],
    specs: [
      { label: "Materials",        value: "Cupro / Polyester / Nylon" },
      { label: "Country of Origin", value: "Japan" },
    ],
    features: [],
  },

  hidamari: {
    title: "hidamari",
    img: "/images/hidamari.jpg",
    intro:
      '"hidamari" is COSMO sashiko thread meaning "sunny spot". Our hidamari thread brings you a fun, bright, warm and happy experience. It is 100% cotton, all made in Japan, smooth and not easily frayed.',
    sections: [],
    specs: [
      { label: "Material",        value: "100% Cotton" },
      { label: "Colors",          value: "40 colors (20 solids + 20 multicolors)" },
      { label: "Country of Origin", value: "Japan" },
      { label: "Uses",            value: "Sashiko stitching, mending, knitting, crocheting, knotting, decorating" },
    ],
    features: [
      {
        heading: "Traditional Japanese Sashiko",
        body: "Enjoy traditional Japanese sashiko stitching with authentic Japanese-made thread. The smooth texture prevents fraying through repeated stitching.",
      },
      {
        heading: "Mini Winding Cones",
        body: "hidamari comes on COSMO original mini winding cones for a tangle-free embroidery experience.",
      },
      {
        heading: "40 Colors",
        body: "A total of 40 colors available — 20 solid colors and 20 multicolors in four variations.",
      },
    ],
  },
};

type Slug = keyof typeof FLOSS_DATA;

export function generateStaticParams() {
  return (Object.keys(FLOSS_DATA) as Slug[]).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = FLOSS_DATA[slug as Slug];
  if (!data) return {};
  return {
    title: data.title,
    description: data.intro,
    alternates: { canonical: `/floss/${slug}` },
    openGraph: {
      title: `${data.title} | COSMO Embroidery US`,
      description: data.intro,
      url: `/floss/${slug}`,
      images: [{ url: data.img, alt: data.title }],
    },
  };
}

/* ── Spec table ────────────────────────────────────────────────── */

function SpecTable({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <table className="company-table" style={{ marginTop: "16px", marginBottom: "8px" }}>
      <tbody>
        {specs.map((s) => (
          <tr key={s.label}>
            <th>{s.label}</th>
            <td>{s.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export default async function FlossDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = FLOSS_DATA[slug as Slug];
  if (!data) notFound();

  const hasTopSpecs = "specs" in data && data.specs && data.specs.length > 0;

  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link href="/">HOME</Link> / <Link href="/floss">Floss</Link> / {data.title}
        </div>
        <h1>{data.title}</h1>
      </div>

      <div className="page-container">

        {/* Hero image + intro */}
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", marginBottom: "56px", alignItems: "flex-start" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: "420px", aspectRatio: "4/3", flexShrink: 0, background: "var(--bg-light)", border: "1px solid var(--border)", overflow: "hidden" }}>
            <Image src={data.img} alt={data.title} fill sizes="(max-width:640px) 100vw, 420px" style={{ objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1, minWidth: "240px" }}>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>{data.intro}</p>
            {hasTopSpecs && <SpecTable specs={(data as { specs: { label: string; value: string }[] }).specs} />}
          </div>
        </div>

        {/* Sub-sections */}
        {data.sections.length > 0 && (
          <div style={{ marginBottom: "56px" }}>
            {data.sections.map((sec) => (
              <div key={sec.heading} className="company-block">
                <h2>{sec.heading}</h2>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>{sec.body}</p>
                {sec.specs.length > 0 && <SpecTable specs={sec.specs} />}
              </div>
            ))}
          </div>
        )}

        {/* Features / quality points */}
        {data.features.length > 0 && (
          <div style={{ marginBottom: "56px" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 400, letterSpacing: ".08em", marginBottom: "28px", paddingBottom: "14px", borderBottom: "2px solid #1a1a1a" }}>
              {slug === "cosmo" ? "Secrets of Success" : "Features"}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "28px" }}>
              {data.features.map((f) => (
                <div key={f.heading} style={{ borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
                  <h3 style={{ fontSize: "14px", fontWeight: 500, marginBottom: "10px", letterSpacing: ".04em" }}>{f.heading}</h3>
                  <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, margin: 0 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", borderTop: "1px solid var(--border)", paddingTop: "40px" }}>
          <Link href="/floss" className="btn-outline">← Back to Floss</Link>
        </div>

      </div>
    </>
  );
}
