export type BlogTable = {
  headers: string[];
  rows: string[][];
};

export type BlogFigure = {
  src: string;
  alt: string;
  caption?: string;
};

export type BlogTimelineStep = {
  period: string;
  title: string;
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
  figure?: BlogFigure;
  gallery?: BlogFigure[];
  galleryVariant?: "row" | "comparison" | "patterns";
  mediaPosition?: "top" | "bottom";
  timeline?: BlogTimelineStep[];
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
    title: "What Is Sashiko?",
    excerpt:
      "Discover Japan's timeless art of stitching—from practical repair to a craft loved worldwide for visible mending, quilting, and slow stitching.",
    publishedAt: "2026-06-26",
    image: "/images/blog-sashiko-hero-20260611.jpg",
    imageAlt:
      "Indigo sashiko fabric with white geometric stitching, sashiko needle, and COSMO thread on a wooden work surface",
    sections: [
      {
        paragraphs: [
          "Discover Japan's Timeless Art of Stitching",
          "Sashiko (刺し子) is a traditional Japanese stitching technique that began as a practical way to reinforce and repair clothing before evolving into one of Japan's most admired textile arts.",
          "Using a long sashiko needle, softly twisted 100% cotton thread, and simple running stitches, makers create striking geometric patterns that combine beauty, durability, and mindfulness.",
          "Today, sashiko is practiced around the world—not only as a traditional craft, but also as a modern form of visible mending, quilting, and slow stitching.",
        ],
      },
      {
        heading: "Why Is Sashiko Different from Embroidery?",
        paragraphs: [
          "Although both use needle and thread, sashiko and embroidery developed with different purposes.",
        ],
        gallery: [
          {
            src: "/images/blog-sashiko-compare-sashiko-birds-20260628.jpg",
            alt: "Close-up of red sashiko running stitches forming bird motifs on white fabric",
            caption: "Sashiko",
          },
          {
            src: "/images/blog-sashiko-compare-embroidery-floral-20260628b.jpg",
            alt: "Colorful floral embroidery with satin and stem stitches on cream fabric",
            caption: "Embroidery",
          },
        ],
        galleryVariant: "comparison",
        table: {
          headers: ["Sashiko", "Embroidery"],
          rows: [
            ["Originated in Japan", "Practiced around the world"],
            ["Running stitch", "Many decorative stitches"],
            [
              "Originally used to reinforce and repair clothing",
              "Primarily decorative",
            ],
            [
              "Thick, softly twisted matte cotton thread",
              "Embroidery floss or silk",
            ],
            [
              "Geometric patterns",
              "Floral, pictorial, and decorative designs",
            ],
          ],
        },
      },
      {
        paragraphs: [
          "Unlike embroidery, sashiko celebrates the beauty of simplicity. Every stitch follows the rhythm of the fabric, creating beauty through repetition rather than filling shapes with color.",
        ],
        gallery: [
          {
            src: "/images/category-jp-sashiko-20260610.jpg",
            alt: "COSMO hidamari sashiko thread spools in pink shades on retail cards",
            caption: "Sashiko thread",
          },
          {
            src: "/images/floss-cosmo-20260610.jpg",
            alt: "Colorful COSMO six-strand embroidery floss skeins",
            caption: "Embroidery floss",
          },
        ],
        galleryVariant: "comparison",
      },
      {
        heading: "A Craft Born from Necessity",
        paragraphs: [
          "Sashiko developed during the Edo period (1603–1868) and spread throughout Japan. Some of its best-known regional traditions emerged in the cold northern regions, where durable, insulated clothing was essential.",
          "Cotton became widely available to ordinary people only during the Edo period, and in northern Japan it remained scarce because of the climate. Families layered hemp fabrics, added pieces of cotton where available, and reinforced them with rows of running stitches to create garments that were warmer, stronger, and longer lasting.",
          "Over generations, these practical stitches evolved into beautiful geometric patterns, transforming everyday clothing into works of craftsmanship.",
        ],
        timeline: [
          { period: "1603–1868", title: "Edo Period" },
          { period: "", title: "Regional Development" },
          { period: "", title: "Modern Revival" },
          { period: "", title: "Worldwide Popularity" },
        ],
      },
      {
        heading: "Classic Sashiko Patterns",
        paragraphs: [
          "From simple grids to interlocking geometry, repeating motifs give sashiko its rhythm. Look for these classics as you explore the craft.",
        ],
        figure: {
          src: "/images/sashiko-about-coasters-20260611.jpg",
          alt: "Sashiko coasters showing cross, interlocking, and wave geometric patterns in indigo and white",
          caption: "Asanoha, Shippo, Seigaiha, and other geometric motifs on finished coasters.",
        },
      },
      {
        heading: "More Than Mending",
        paragraphs: [
          "Sashiko reflects a unique combination of Japanese history, climate, and craftsmanship.",
          "Rather than simply repairing worn clothing, each stitch added both strength and beauty. This philosophy—finding beauty in useful objects—helped transform practical reinforcement into a respected textile art.",
          "Even Edo-period firefighters wore heavily stitched cotton coats that could be soaked with water before fighting fires, helping protect them from heat and sparks.",
          "Today, sashiko appears on clothing, quilts, bags, home décor, and contemporary textile art while remaining deeply connected to its traditional roots.",
        ],
      },
      {
        gallery: [
          {
            src: "/images/blog-sashiko-mending-tradition-20260611.jpg",
            alt: "Stack of denim garments repaired with indigo sashiko patches and running stitches",
            caption:
              "Repair and reinforcement remain at the heart of sashiko—on traditional workwear and modern denim alike.",
          },
          {
            src: "/images/blog-sashiko-modern-mending-20260611.jpg",
            alt: "Light-wash denim jeans with colorful visible sashiko mending patches",
            caption:
              "Visible mending on denim connects traditional stitching with slow fashion and sustainability.",
          },
        ],
        galleryVariant: "comparison",
      },
      {
        heading: "Why the World Loves Sashiko",
        paragraphs: [
          "Today, sashiko is practiced by textile artists, quilters, embroiderers, and visible menders around the world.",
          "Its philosophy naturally aligns with sustainability, slow fashion, and mindful making. Rather than hiding signs of wear, sashiko celebrates repair as part of an object's story.",
          "From denim jackets and quilts to contemporary home textiles, sashiko demonstrates that repairing something can make it even more beautiful than before.",
        ],
      },
      {
        heading: "Start Your Sashiko Journey",
        bulletsLabel: "Beginning sashiko requires only a few simple tools",
        mediaPosition: "top",
        figure: {
          src: "/images/sashiko-intro-supplies-20260611.jpg",
          alt: "Flat lay of COSMO sashiko thread, needles, fabric, template, and finished coasters",
          caption:
            "COSMO® sashiko thread, needles, fabric, and templates to begin stitching.",
        },
        bullets: [
          "A sashiko needle",
          "Sashiko thread",
          "Cotton fabric",
          "A simple geometric pattern",
        ],
        paragraphs: [
          "Whether you're discovering sashiko for the first time or continuing a lifelong passion, every stitch connects you to centuries of Japanese craftsmanship.",
        ],
      },
    ],
    ctaLabel: "Start Your Sashiko Journey",
    ctaDescription:
      "Explore COSMO® Sashiko Threads, Needles, and Kits to begin your own stitching journey.",
    cta: {
      label: "Explore COSMO Sashiko",
      href: "/sashiko",
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
