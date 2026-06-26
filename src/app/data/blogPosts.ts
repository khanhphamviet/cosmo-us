export type BlogTable = {
  headers: string[];
  rows: string[][];
};

export type BlogSubsection = {
  heading: string;
  paragraphs: string[];
  table?: BlogTable;
};

export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  bulletsLabel?: string;
  asideImage?: {
    src: string;
    alt: string;
  };
  table?: BlogTable;
  subsections?: BlogSubsection[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  sections: BlogSection[];
  cta: {
    label: string;
    href: string;
  };
  ctaLabel?: string;
  ctaDescription?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "embroidery-thread-brand-history",
    title: "The Story Behind COSMO® Embroidery Thread",
    excerpt:
      "For more than a century, COSMO® has stood for color, craftsmanship, and creativity. Discover how Kyoto helped shape the thread trusted by generations of makers.",
    publishedAt: "2026-06-26",
    image: "/images/blog-embroidery-brand-history-hero-20260627.jpg",
    imageAlt: "Hands holding a bouquet of multicolored COSMO embroidery floss skeins",
    sections: [
      {
        paragraphs: [
          "For more than a century, the name COSMO® has represented color, craftsmanship, and creativity.",
          "Discover how the brand began—and how Kyoto helped shape the embroidery thread trusted by generations of makers.",
        ],
      },
      {
        heading: "1924: The Beginning",
        paragraphs: [
          "The COSMO® story began in 1924 with the founding of Cosmo Co., Ltd. in Osaka, Japan.",
          "LECIEN founder Naozo Nomura established Nomura Shoten in Kyoto in 1933, continuing an existing business relationship with Cosmo Co., Ltd.",
          "In 1945, LECIEN acquired the COSMO® brand and its production equipment, bringing its production to Kyoto.",
        ],
      },
      {
        heading: "1968: A New Chapter",
        paragraphs: [
          "In September 1968, LECIEN officially acquired the COSMO® trademark and introduced four British-made KDG processing machines.",
          "For the first time, winding, labeling, and packaging became one continuous production line.",
          "The result was consistent quality in every skein, setting the standard that continues to define COSMO® today.",
        ],
      },
      {
        heading: 'Why "COSMO"?',
        asideImage: {
          src: "/images/cosmo-lecien-logo-cropped.png",
          alt: "COSMO LECIEN CORPORATION logo",
        },
        paragraphs: [
          'The word "COSMO" comes from cosmos—an orderly universe.',
          "Like the night sky, COSMO® offers hundreds of carefully balanced colors, giving makers the freedom to bring every idea to life.",
          "For many makers, the perfect shade is already waiting in the COSMO® color palette.",
          'The stylized "M" in the COSMO® logo was introduced in 2020. More than a letter, it represents the connections embroidery creates—between makers, generations, and cultures through the simple act of stitching.',
          "Together with the name COSMO®, it reflects the brand's vision: a universe of beautifully balanced colors and a global community united, one stitch at a time.",
        ],
      },
      {
        heading: "1979: Sharing Creativity",
        paragraphs: [
          "Inspired by American patchwork quilts, LECIEN opened LECIEN Arts in Kyoto in 1979.",
          "Built on the philosophy of Community, Culture, and Creativity, it became a place where makers could learn, share ideas, and celebrate the joy of stitching.",
          "That spirit continues to inspire COSMO® today.",
        ],
      },
      {
        heading: "Every Skein Tells a Story",
        paragraphs: [
          "Every skein of COSMO® carries more than thread—it carries a story.",
          "It carries over a century of craftsmanship, innovation, and creativity—from Kyoto to makers around the world.",
          "With every stitch, the story continues.",
        ],
      },
    ],
    ctaLabel: "Explore COSMO® Embroidery Floss",
    ctaDescription:
      "Discover over 500 beautifully balanced colors, premium cotton embroidery floss, and accessories designed to inspire every project.",
    cta: {
      label: "Shop Embroidery Floss",
      href: "/floss/cosmo",
    },
  },
  {
    slug: "sashiko",
    title: "What Is Sashiko? Japan's Traditional SASHIKO Craft",
    excerpt:
      "Sashiko began as practical wisdom for warmth and mending. Learn how it differs from embroidery, its regional styles, and why SASHIKO resonates worldwide.",
    publishedAt: "2026-06-26",
    image: "/images/category-jp-sashiko-20260610.jpg",
    imageAlt: "COSMO sashiko thread and fabric",
    sections: [
      {
        paragraphs: [
          "Sashiko is a Japanese hand-stitching tradition worked with a long, thick sashiko needle through large needle holes. It uses softly twisted, matte 100% cotton sashiko thread — distinct from machine thread, hand-sewing thread, or embroidery floss — on plain cotton cloth, building geometric patterns one stitch at a time.",
        ],
      },
      {
        heading: "Sashiko vs. Embroidery",
        paragraphs: [
          "Both involve needle and thread, but their origins, purposes, and techniques are different.",
        ],
        table: {
          headers: ["Aspect", "Sashiko", "Embroidery (Western styles)"],
          rows: [
            [
              "Origin",
              "Japan (among common people in northern regions)",
              "Worldwide (ancient Egypt, European courts, and beyond)",
            ],
            [
              "Primary purpose",
              "Practical — warmth, reinforcement, and mending with a spirit of waste-not",
              "Decorative — beauty, ritual, rank, and ornament",
            ],
            [
              "Core technique",
              "Running stitch along the weave of the cloth",
              "Satin stitch, chain stitch, and other stitches that fill surfaces for dimension",
            ],
            [
              "Thread & fabric",
              "Softly twisted matte cotton sashiko thread + coarse cotton cloth",
              "Lustrous silk or size 25 embroidery floss + varied fabrics",
            ],
          ],
        },
      },
      {
        heading: "History: From Survival to Traditional Craft",
        paragraphs: [
          "Sashiko dates to the Edo period (from the 1600s). Cherished today as a beautiful hobby, it was born first as practical wisdom for daily life.",
        ],
        subsections: [
          {
            heading: "1. Cold Weather and Reinforcing Cloth",
            paragraphs: [
              "Sashiko developed mainly in cold northern Japan — Tsugaru and Nanbu in Aomori Prefecture, and the Shonai region of Yamagata Prefecture.",
              "Cotton was scarce: cotton did not grow easily in the north, and most people wore hemp. Hemp breathes well but offers little warmth in harsh winters.",
              "Women layered hemp fabrics, tucked in scraps of cotton or rags, and stitched them closely together. That raised insulation, strengthened fragile hemp against wear, and became the root of sashiko.",
            ],
          },
          {
            heading: "2. Japan's Three Great Sashiko Styles",
            paragraphs: [
              "As techniques refined over time, distinctive regional patterns emerged. Three are especially well known.",
            ],
            table: {
              headers: ["Name", "Main region", "Characteristics"],
              rows: [
                [
                  "Tsugaru kogin-zashi",
                  "Tsugaru, Aomori",
                  "Indigo-dyed hemp stitched with white cotton, lifting odd warp threads into geometric patterns that resemble woven cloth.",
                ],
                [
                  "Nanbu hishizashi",
                  "Nanbu, Aomori",
                  "Similar to kogin, but even warp threads are lifted, creating elongated diamond shapes. Colorful wool yarn was used later.",
                ],
                [
                  "Shonai sashiko",
                  "Shonai, Yamagata",
                  "Grew from fishermen's workwear. Beyond reinforcement, patterns carried wishes for safety and a good catch.",
                ],
              ],
            },
          },
          {
            heading: "3. Firefighters' Protective Coats",
            paragraphs: [
              "In Edo-period cities, sashiko took another form: the heavily stitched cotton hanten worn by firefighters.",
              "Thick cotton packed with sashiko stitching could absorb large amounts of water, protecting wearers from sparks and heat — a practical form of protective gear.",
            ],
          },
          {
            heading: '4. From Utility to "Art You Show"',
            paragraphs: [
              "From Meiji through Showa, factory-made clothing grew common and functional sashiko on everyday garments declined.",
              "Yet the beauty of useful things — yo no bi — and the warmth of handwork were rediscovered. Today sashiko ranges from classic geometry to playful color and illustration-like designs, loved worldwide as art and hobby.",
              "Traditional hemp and bleached cotton were common in the past; today makers often use bleached cotton, cotton-linen blends, or indigo-dyed cloth. Because sashiko repeats straight stitches, easy needle passage and a weave that is not too tight matter. Coarse cotton with an open weave works best.",
            ],
          },
        ],
      },
      {
        heading: "Why Is Sashiko Uniquely Japanese?",
        paragraphs: [
          "Techniques for joining and layering cloth exist worldwide — knitting, quilting, and more — but Japanese sashiko reflects three particular conditions.",
          "Cotton arrived late: cotton spread widely among common people only from the mid-Edo period. Until then, northern families had only stiff, open-weave hemp. The need to fill gaps in cloth to survive winter pushed sashiko to an extraordinary level.",
          "Utility met aesthetics: Japan has a long habit of repairing worn cloth again and again. Rather than simple patching alone, the idea that mending should also be beautiful — even auspicious — turned reinforcement into art.",
        ],
      },
      {
        heading: "Knitting, Quilting, and Sashiko Compared",
        table: {
          headers: ["Aspect", "Knitting", "Quilting", "Sashiko"],
          rows: [
            [
              "Structure",
              "A fabric made by looping a single yarn",
              "A three-layer sandwich of fabric, batting, and fabric",
              "Stitching on cloth for reinforcement and decoration (usually one or two layers)",
            ],
            [
              "Main materials",
              "Wool, cotton yarn, and blends",
              "Scrap fabrics, batting, and thread",
              "Cotton cloth and softly twisted thick sashiko thread",
            ],
            [
              "Character",
              "Stretchy and soft",
              "Thick, cushioned, and warm",
              "Non-stretch; cloth becomes strong and durable",
            ],
            [
              "Roots",
              "Ancient Egypt to Europe (warm clothing, socks)",
              "Egypt, Europe, and America (warmth and scrap reuse)",
              "Japan (warmth and reinforcement in the north)",
            ],
          ],
        },
      },
      {
        heading: "From Daily Clothing to Regional Treasure",
        paragraphs: [
          "What began as everyday work clothing stitched by unnamed farm women became recognized after Showa for its skill and beauty. Many regional styles are now designated traditional crafts or intangible cultural assets.",
          "Tsugaru kogin-zashi and Nanbu hishizashi from Aomori are celebrated Japanese textile arts today, appearing on bags, card cases, and interior pieces as high-quality craft goods.",
        ],
      },
      {
        heading: 'The World Embraces "SASHIKO"',
        paragraphs: [
          "Sashiko is now a global movement — known internationally as SASHIKO.",
          "As sustainability and upcycling gain importance in fashion and craft, sashiko has long embodied both. Designers add sashiko to denim jackets; makers in France and the United States use it for visible mending. A cool, sustainable tradition from Japan earns respect worldwide.",
          "Born from hardship and cold as wisdom for living, shaped by Japanese aesthetics into traditional craft, sashiko has become a shared language of sustainable making — a culture Japan can proudly offer the world.",
        ],
      },
    ],
    cta: {
      label: "Explore COSMO Sashiko",
      href: "/sashiko",
    },
    ctaLabel: "Products featured in this story",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function formatBlogDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
