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
