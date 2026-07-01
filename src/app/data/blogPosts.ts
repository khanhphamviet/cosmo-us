import { FAIRE_STORE_URL } from "./site";

export type BlogTable = {
  headers: string[];
  rows: string[][];
};

export type BlogFigure = {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
  width?: number;
  height?: number;
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
  figurePosition?: "below" | "aside";
  gallery?: BlogFigure[];
  galleryVariant?: "row" | "comparison" | "patterns" | "aside";
  galleryPosition?: "below" | "aside";
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
  heroAspectRatio?: string;
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
    slug: "cross-stitch",
    title: "What Is Cross-Stitch?",
    excerpt:
      "Cross-stitch turns one simple X-shaped stitch into letters, patterns, and detailed pictures. Here's how counted cross-stitch works, what you need to start, and how COSMO floss and cloth fit in.",
    publishedAt: "2026-07-01",
    image: "/images/blog-crossstitch-fuji-20260701.jpg",
    imageAlt:
      "Framed cross-stitch of Mount Fuji and cherry blossoms stitched in COSMO floss",
    heroAspectRatio: "1 / 1",
    sections: [
      {
        paragraphs: [
          "One of the World's Most Beloved Stitching Crafts",
          "Cross-stitch is a form of counted embroidery built from a single, simple stitch: two short diagonal stitches that cross to form a small X. Repeat those X's across a gridded fabric and they add up into letters, borders, and surprisingly detailed pictures.",
          "Because every stitch lands on a regular grid, cross-stitch is famously easy to pick up—relaxing, rhythmic, and hard to put down. It's stitched by absolute beginners and lifelong makers alike, all around the world.",
        ],
      },
      {
        heading: "How Is Cross-Stitch Different from Other Embroidery?",
        paragraphs: [
          "Cross-stitch is actually a type of embroidery—but it works differently from the free, painterly stitching many people picture. Instead of drawing shapes with thread, you count squares and fill them in.",
        ],
        gallery: [
          {
            src: "/images/blog-crossstitch-sea-20260701.jpg",
            alt: "Framed cross-stitch of sea creatures—turtle, fish, and coral—worked in COSMO floss",
            caption: "Cross-stitch",
          },
          {
            src: "/images/blog-sashiko-compare-embroidery-floral-20260628b.jpg",
            alt: "Colorful floral surface embroidery with satin and stem stitches on cream fabric",
            caption: "Surface embroidery",
          },
        ],
        galleryVariant: "comparison",
        table: {
          headers: ["Cross-Stitch", "Surface Embroidery"],
          rows: [
            ["Counted onto a fabric grid", "Stitched freely onto the fabric"],
            ["Built from one X-shaped stitch", "Uses many different stitches"],
            ["Worked from a chart", "Worked from a drawn design or freehand"],
            ["Even-weave (Aida) cloth", "Almost any fabric"],
            ["Crisp, geometric, pixel-like", "Fluid, painterly shapes"],
          ],
        },
      },
      {
        heading: "How It Works: Counting the Grid",
        paragraphs: [
          "The secret to cross-stitch is the fabric. It's woven as an even-weave—the same number of threads running each way—so the surface forms a tidy grid of little squares.",
          "You follow a chart, where each colored square tells you which color to stitch in the matching square on the cloth. Count the squares, place your X's, and the design appears one stitch at a time. Outlines and small details are often added afterward with backstitch or French knots.",
          "Fabric is measured by its \u201ccount\u201d—the number of squares (or threads) per inch. A higher count means smaller squares and finer detail; a lower count means bigger, faster stitches. The very same chart comes out larger on a low-count cloth and smaller on a high-count one.",
        ],
        figure: {
          src: "/images/blog-crossstitch-aida-20260701.jpg",
          alt: "Hands cross-stitching a sampler on cream Aida cloth with COSMO floss",
          caption:
            "Each X is counted onto the fabric's grid; backstitch and French knots add the finishing details.",
        },
      },
      {
        heading: "Floss, Fabric, and a Blunt Needle",
        paragraphs: [
          "One of cross-stitch's quiet joys is how little you need to begin. At heart it's just floss, cloth, and a blunt-tipped needle.",
          "COSMO No. 25 embroidery floss is a six-strand cotton thread: you gently separate the strands and use as many as your fabric count calls for—often two for everyday Aida. A long-established COSMO embroidery floss line developed in Japan, it comes in over 500 solid colors, plus variegated multi-color shades that shift softly from one tone to the next as you stitch.",
          "Cotton floss is the everyday choice, but cross-stitch welcomes other threads too—variegated cotton for gentle color shifts, thicker pearl (perlé) cotton for texture, and metallic threads such as COSMO Nishikiito, used for decorative accents.",
          "For the cloth, COSMO offers even-weave embroidery fabrics, including Java cloth-type fabrics, in several counts, so you can choose bold and quick or fine and detailed.",
        ],
        figure: {
          src: "/images/floss-cosmo-20260610.jpg",
          alt: "Colorful skeins of COSMO No. 25 six-strand embroidery floss",
          caption:
            "COSMO No. 25 floss—over 500 solid colors of Japanese-made cotton, plus variegated multi-color shades.",
        },
      },
      {
        heading: "A Craft with Global Roots",
        paragraphs: [
          "Unlike some regional needlework, cross-stitch belongs to the whole world. Simple counted crosses appear in folk textiles across Europe, the Middle East, and Asia—worked onto clothing, linens, and household cloths.",
          "For centuries it was also a teaching craft. Young stitchers made \u201csamplers\u201d—rows of letters, numbers, and motifs—to practice their skills and record patterns, many of which survive in museums today.",
          "Cross-stitch has faded and returned with fashion over the years, and it's thriving again now—part of a wider love of slow, screen-free, mindful making.",
        ],
        timeline: [
          { period: "Ancient–1500s", title: "Folk Origins Worldwide" },
          { period: "1600s–1700s", title: "The Age of Samplers" },
          { period: "1800s–1900s", title: "A Household Craft" },
          { period: "Today", title: "Modern Revival" },
        ],
      },
      {
        heading: "From Simple Samplers to Detailed Scenes",
        paragraphs: [
          "With enough little X's, cross-stitch can capture landscapes, seasons, and stories. COSMO's own Sparkling Japanese Seasons kits show just how much detail—and shimmer—counted stitching can hold.",
        ],
        gallery: [
          {
            src: "/images/blog-crossstitch-summer-20260701.jpg",
            alt: "Framed cross-stitch of goldfish and water ripples worked in COSMO floss",
            caption: "Goldfish in summer water.",
          },
          {
            src: "/images/blog-crossstitch-kyoto-20260701.jpg",
            alt: "Framed cross-stitch of a figure in kimono on a red bridge among autumn leaves",
            caption: "Autumn in Kyoto.",
          },
          {
            src: "/images/blog-crossstitch-winter-20260701.jpg",
            alt: "Framed cross-stitch of a festive holiday wreath with ornaments",
            caption: "A winter holiday wreath.",
          },
        ],
        galleryVariant: "patterns",
      },
      {
        heading: "Start Your Cross-Stitch Journey",
        bulletsLabel: "To begin, you only need a few things",
        mediaPosition: "top",
        figure: {
          src: "/images/blog-crossstitch-supplies-20260701.jpg",
          alt: "Embroidery hoop, stork scissors, and COSMO floss skeins on a white surface",
          caption:
            "A hoop, a blunt needle, scissors, and COSMO floss—simple tools to begin.",
        },
        bullets: [
          "Six-strand cotton floss (COSMO No. 25)",
          "Even-weave or Aida cloth",
          "A blunt tapestry needle",
          "A chart or pattern to follow",
          "An embroidery hoop (optional, but handy)",
        ],
        paragraphs: [
          "Pick a small chart, thread your needle, and place your first X. From there it's simply one stitch at a time—an easy, absorbing rhythm that turns a blank grid into something you made by hand.",
        ],
      },
    ],
    ctaLabel: "Start Your Cross-Stitch Journey",
    ctaDescription:
      "Explore COSMO® embroidery floss, even-weave cloth, and cross-stitch kits to begin your own stitching journey.",
    cta: {
      label: "Explore COSMO Floss",
      href: "/floss",
    },
  },
  {
    slug: "hidamari-sashiko-thread",
    title: "COSMO® hidamari® Sashiko Thread: A Sunlit Take on a Timeless Craft",
    excerpt:
      "Meet hidamari—COSMO's cone-wound sashiko thread in 60 cotton colors. Smooth, fray-resistant, and made in Japan for stitching, mending, and creative making far beyond sashiko.",
    publishedAt: "2026-06-30",
    image: "/images/blog-hidamari-cones-cover-20260630.jpg",
    imageAlt:
      "Close-up of colorful COSMO hidamari sashiko thread packs in pink, orange, and yellow",
    heroAspectRatio: "1 / 1",
    sections: [
      {
        paragraphs: [
          "Not Just for Stitching.",
          "In Japanese, hidamari (ひだまり) means \"a sunny spot\"—that warm pool of light where you'd happily settle in and stitch for hours.",
          "Introduced by LECIEN under the COSMO brand in March 2019, hidamari® Sashiko Thread was made to carry that same warmth into your hands: a smooth, 100% cotton thread, neatly wound on a cone, crafted in Japan for sashiko—and for so much more.",
        ],
      },
      {
        heading: "A Modern Thread Rooted in Tradition",
        paragraphs: [
          "Classic sashiko is worked with a thick, low-sheen cotton thread, so each running stitch sits proud of the cloth. hidamari builds on that heritage and brings it gently up to date.",
          "Instead of the classic skein, hidamari comes wound on a tidy cone, so you can pull exactly the length you need without tangling. And rather than limiting the palette to traditional indigo and white, COSMO expanded it into vibrant hues and nuanced, smoky tones—colors that feel right at home in both classic and contemporary work.",
        ],
        figure: {
          src: "/images/blog-hidamari-cone-lineup-hd-20260630.jpg",
          alt: "A lineup of cone-wound COSMO hidamari sashiko thread packs in solid, speckled, and heather colors",
          caption:
            "Neatly cone-wound rather than skeined—pull exactly the length you need, with no tangling.",
        },
      },
      {
        heading: "What Makes hidamari Different",
        paragraphs: [
          "Every detail of hidamari is designed around the rhythm of sashiko—long, flowing running stitches loaded several at a time before the thread is pulled through.",
        ],
        bullets: [
          "Cone-wound format—pull exactly the length you need, with no tangling",
          "Softly twisted 100% cotton with a low-sheen, matte look",
          "A medium-weight sashiko thread—thicker and more structured than standard embroidery floss strands, and ready to use straight off the cone with no separating",
          "A smooth surface that resists fraying as you stitch",
          "Made in Japan by LECIEN, maker of COSMO®—a Kyoto-born brand with roots dating back to 1924",
        ],
      },
      {
        heading: "Sixty Colors, From Soft to Smoky",
        paragraphs: [
          "hidamari spans 60 cotton colors across solid and patterned color families—far beyond the indigo-and-white of traditional sashiko. Alongside clear, vibrant brights you'll find muted, smoky shades that add quiet depth to a piece.",
          "Because the color does the talking, many makers like to match the thread to the mood of a project: crisp solids for graphic geometric patterns, or shifting, multi-tonal threads that paint themselves as you stitch. The palette is organized into several distinct families:",
        ],
        gallery: [
          {
            src: "/images/sashiko-display-solid-20260610.jpg",
            alt: "Display board of hidamari solid-color sashiko thread cones in blues, reds, pinks, and greens",
            caption: "Solid colors",
          },
          {
            src: "/images/sashiko-display-variegated-20260610.jpg",
            alt: "Display board of hidamari variegated and multi-color sashiko thread cones",
            caption: "Variegated & multi-color",
          },
        ],
        galleryVariant: "comparison",
        bullets: [
          "Solid—vibrant single colors plus nuanced, smoky tones",
          "Dot Kasuri—speckled colors with a playful, candy-like look",
          "Heather—softly mottled, melange-style shades",
          "Variegated—colors that shift gently along the length of the thread",
          "Multi-Color—lively blends that change as you stitch",
        ],
      },
      {
        heading: "Not Just for Sashiko",
        paragraphs: [
          "hidamari's guiding idea is simple: a sashiko thread that isn't only for sashiko. Its strength, smoothness, and rich color make it just as much at home in everyday making.",
          "Use it wherever a bold cotton thread can add texture, durability, or a pop of color:",
        ],
        bullets: [
          "Traditional sashiko and hitomezashi patterns",
          "Visible mending and boro-inspired repairs",
          "Big-stitch quilting",
          "Hand sewing and decorative stitching",
          "Knitting, crochet accents, tassels, and tying",
        ],
      },
      {
        heading: "Pairs Naturally with the Sashiko Needle Set",
        paragraphs: [
          "COSMO® hidamari® Sashiko Thread pairs naturally with the COSMO® Sashiko Needle Set No. 4345, whose long eyes make threading easy.",
          "Each pack also includes a threader, so you can start stitching right away.",
        ],
        figure: {
          src: "/images/blog-hidamari-needles-stitching-hd2-20260630.jpg",
          alt: "Hands stitching a circular sashiko pattern in orange hidamari thread, surrounded by COSMO thread spools and tassels",
          caption:
            "hidamari thread and the No. 4345 needle set, made to work together—shown here mid-stitch.",
        },
      },
      {
        heading: "Product Specifications",
        table: {
          headers: ["", ""],
          rows: [
            ["Product", "COSMO® hidamari® Sashiko Thread"],
            ["Item No.", "122301 (Solid) / 122302 (Patterned)"],
            ["Material", "100% cotton"],
            ["Weight", "Medium-weight sashiko thread"],
            ["Length", "Approx. 32.81 yd (30 m) per cone"],
            ["Colors", "60 colors across several families"],
            ["Made in", "Japan"],
          ],
        },
      },
      {
        heading: "Find Your Sunny Spot",
        paragraphs: [
          "Whether you're drawn to the meditative rhythm of traditional sashiko, the creative freedom of visible mending, or simply the joy of a beautiful color in your hands, hidamari is made to make the moment feel warm and easy.",
          "Pick a shade that speaks to you, settle into your own sunny spot, and let the stitching begin.",
        ],
      },
    ],
    ctaLabel: "Start Stitching with hidamari",
    ctaDescription:
      "Explore COSMO® hidamari® Sashiko Thread, needles, fabric, and kits to begin—or deepen—your sashiko journey.",
    cta: {
      label: "Explore COSMO Sashiko",
      href: "/sashiko",
    },
  },
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
  {
    slug: "hidamari-sashiko-needles-4345",
    title: "COSMO® Hidamari Sashiko Assorted Needle Set",
    excerpt:
      "Four needle sizes in one Japanese-made set—designed for the running-stitch rhythm of sashiko and made to pair naturally with COSMO® Hidamari Sashiko Thread.",
    publishedAt: "2026-06-28",
    image: "/images/blog-hidamari-needles-4345-hero-20260628.jpg",
    imageAlt:
      "COSMO Hidamari sashiko assorted needle set No. 4345 retail package with six needles and gold-plated eyes",
    sections: [
      {
        paragraphs: [
          "Designed for the Natural Rhythm of Sashiko",
          "Every sashiko stitch begins with a simple tool: the needle.",
          "While it may appear similar to a standard sewing needle, a true sashiko needle is designed for a very different purpose. Its length, eye shape, and balance are carefully engineered to support the long, flowing running stitches that define traditional sashiko.",
          "The COSMO® Hidamari Sashiko Assorted Needle Set (No. 4345) was developed with that purpose in mind. Made in Japan by Lecien, the set combines four carefully selected needle sizes with an elongated eye and a sharp, durable point—helping stitchers find the rhythm that feels most natural to them.",
        ],
      },
      {
        heading: "A Needle Designed for the Way Sashiko Is Stitched",
        paragraphs: [
          "Unlike ordinary hand sewing, sashiko often involves loading multiple stitches onto the needle before pulling the thread through the fabric.",
          "To support this technique, the COSMO® Hidamari Sashiko Assorted Needle Set features:",
        ],
        bullets: [
          "Four needle lengths for different stitching styles",
          "Sharp points for smooth penetration through cotton and layered fabrics",
          "Elongated eyes for easier threading of sashiko thread",
          "A balanced profile that supports continuous running stitches",
        ],
      },
      {
        paragraphs: [
          "Rather than offering only one size, the assortment allows stitchers to discover which needle best suits their hands, fabrics, and preferred technique.",
        ],
      },
      {
        heading: "Four Sizes for Different Stitching Styles",
        paragraphs: [
          "Every stitcher develops a unique rhythm.",
          "Some prefer a longer needle for loading many stitches in a single motion, while others prefer a shorter needle for detailed patterns or layered fabrics.",
          "The assortment includes six needles across four sizes.",
        ],
        table: {
          headers: ["Size", "Thickness", "Length", "Qty", "Recommended Use"],
          rows: [
            ["S1", "0.84 mm", "41.3 mm", "1", "Curves, smaller motifs, detailed work"],
            ["S2", "0.84 mm", "51.0 mm", "1", "Long running stitches and straight rows"],
            ["S3", "0.99 mm", "44.5 mm", "2", "Heavier fabrics and layered cloth"],
            ["S4", "0.97 mm", "54.0 mm", "2", "Hitomezashi and wide geometric patterns"],
          ],
        },
      },
      {
        paragraphs: [
          "For many beginners, trying several lengths is the easiest way to discover which needle feels most comfortable.",
        ],
      },
      {
        heading: "Designed to Pair with COSMO® Hidamari Sashiko Thread",
        paragraphs: [
          "The needle set and COSMO® Hidamari Sashiko Thread were developed as part of the same product series.",
          "The eye size and needle dimensions are designed to work naturally with Hidamari thread, helping achieve smooth threading while maintaining the strength of the needle.",
          "Every pack also includes a threader, making it even easier to get started.",
        ],
        gallery: [
          {
            src: "/images/sashiko-display-overview-20260610.jpg",
            alt: "COSMO Hidamari sashiko thread display with needle pack hanging at top right",
            caption: "Hidamari thread and needles, designed as one series.",
          },
          {
            src: "/images/category-jp-sashiko-20260610.jpg",
            alt: "COSMO Hidamari sashiko thread spools in multiple colors",
            caption: "COSMO® Hidamari Sashiko Thread—the natural pairing for this needle set.",
          },
        ],
        galleryVariant: "comparison",
      },
      {
        heading: "Built for Everyday Stitching",
        paragraphs: [
          "Sashiko today extends well beyond traditional geometric patterns.",
          "The same needle may be used for:",
        ],
        bullets: [
          "Traditional sashiko",
          "Boro-inspired repairs",
          "Visible mending",
          "Big-stitch quilting",
          "Decorative hand stitching",
        ],
      },
      {
        paragraphs: [
          "Because these projects often involve multiple layers of cotton or denim, the needle is designed to pass through fabric smoothly while maintaining precise control.",
        ],
        figure: {
          src: "/images/blog-hidamari-needles-stitching-20260628.jpg",
          alt: "Hands sashiko stitching an orange geometric pattern with Hidamari thread",
          caption:
            "From single layers to layered cotton and denim—the needle is built for smooth, controlled stitching.",
        },
      },
      {
        heading: "What Stitchers Appreciate",
        paragraphs: [
          "The design of the needle is supported by the experiences shared by stitchers around the world.",
          "Customer reviews from international retailers often highlight several qualities:",
        ],
        bullets: [
          "Smooth stitching through cotton, denim, and layered fabrics",
          "Sharp points that help maintain an even stitching rhythm",
          "An elongated eye that makes sashiko thread easier to thread",
          "The convenience of having four different needle lengths in one package",
          "Strong overall value for everyday stitching",
        ],
      },
      {
        paragraphs: [
          "Many experienced stitchers describe the set as one they continue to reach for, while beginners often appreciate being able to explore different needle lengths before settling on a favorite.",
          "Although individual preferences naturally vary, the consistency of these reviews reflects the design goals behind the product.",
        ],
      },
      {
        heading: "Product Specifications",
        table: {
          headers: ["", ""],
          rows: [
            ["Product", "COSMO® Hidamari Sashiko Assorted Needle Set"],
            ["Item No.", "4345"],
            ["Made in", "Japan"],
            ["Series", "COSMO® Hidamari Sashiko"],
            ["Contents", "6 needles (4 sizes) + threader"],
            ["Recommended for", "Sashiko, boro, visible mending, quilting"],
          ],
        },
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          {
            heading: "Is this needle only for sashiko?",
            paragraphs: [
              "No. While it was designed for sashiko, many makers also use it for visible mending, boro-inspired projects, big-stitch quilting, and other forms of decorative hand stitching.",
            ],
          },
          {
            heading: "Which needle should beginners start with?",
            paragraphs: [
              "Many stitchers begin with one of the longer needles (S2 or S4) for straight running stitches, then experiment with the other sizes to discover which best matches their personal stitching style.",
            ],
          },
          {
            heading: "Can I use threads other than COSMO® Hidamari?",
            paragraphs: [
              "Yes. However, the needle was developed alongside COSMO® Hidamari Sashiko Thread, making this combination the most natural pairing.",
            ],
          },
        ],
      },
      {
        heading: "Discover Your Natural Stitching Rhythm",
        paragraphs: [
          "Every stitcher develops their own rhythm over time.",
          "The COSMO® Hidamari Sashiko Assorted Needle Set was created to support that journey—offering multiple needle sizes, thoughtful Japanese design, and dependable performance in a single set.",
          "Whether you are learning your first sashiko pattern or returning to a familiar favorite, the right needle helps every stitch feel smoother, more comfortable, and more enjoyable.",
        ],
      },
    ],
    ctaLabel: "Shop COSMO® Sashiko",
    ctaDescription:
      "Explore Hidamari sashiko thread, needles, fabric, and kits to start—or continue—your stitching journey.",
    cta: {
      label: "Explore COSMO Sashiko",
      href: "/sashiko",
    },
  },
  {
    slug: "needle-history-embroidery-cross-stitch",
    title: "The History of the Needle: The Small Tool Behind Every Beautiful Stitch",
    excerpt:
      "Thread and color draw the eye, but every stitch begins with a needle. From Paleolithic bone tools to modern steel, explore how this enduring design still shapes embroidery, cross-stitch, and sashiko today.",
    publishedAt: "2026-06-30",
    image: "/images/blog-needle-history-harmony-flatlay-20260630.jpg",
    imageAlt:
      "A sewing needle with a needle threader passing through the eye, alongside a spool of thread and thimble on grey fabric",
    sections: [
      {
        paragraphs: [
          "When we admire a beautiful piece of embroidery, our eyes are naturally drawn to the thread, the colors, and the finished design.",
          "Yet every stitch begins with something much smaller.",
          "A needle.",
          "Simple in appearance, the sewing needle has remained one of humanity's most enduring tools. For tens of thousands of years, it has connected thread to fabric, transforming practical sewing into decoration, craftsmanship, and self-expression.",
          "Although the materials used to make needles have evolved dramatically over time, their essential design has remained remarkably consistent.",
          "Sometimes, the simplest ideas are the ones that last the longest.",
        ],
      },
      {
        heading: "More Than a Tool for Survival",
        paragraphs: [
          "For much of human history, clothing existed primarily to protect people from the environment.",
          "Recent archaeological research suggests that the invention of the eyed needle may also have marked an important turning point in human creativity.",
          "A 2024 review published in Science Advances argues that eyed needles—first documented in the archaeological record of Siberia around 40,000 years ago—enabled finer sewing and the decoration of clothing with beads and other ornaments. The authors suggest that this innovation contributed to clothing becoming not only functional protection, but also a medium for cultural identity and personal expression.",
          "Whether repairing, decorating, or creating something entirely new, every stitch carries a story.",
        ],
        figurePosition: "aside",
        figure: {
          src: "/images/blog-needle-history-bone-needle-20260630.jpg",
          alt: "An ancient eyed bone needle on a neutral background",
          caption:
            "Early eyed bone needles show that the essential design of the sewing needle was already established thousands of years ago.",
          fit: "contain",
          width: 900,
          height: 1200,
        },
      },
      {
        heading: "A Design That Has Endured for Thousands of Years",
        paragraphs: [
          "The earliest sewing needles were crafted from bone, ivory, antler, and horn.",
          "As metallurgy advanced, those materials gradually gave way to copper, bronze, iron, and eventually hardened steel.",
          "The material evolved. The design hardly did.",
          "Even today, nearly every hand-sewing needle still shares the same three essential elements:",
        ],
        bullets: [
          "A sharp point",
          "A slender shaft",
          "An eye that carries the thread",
        ],
      },
      {
        paragraphs: [
          "Industrial manufacturing in the eighteenth and nineteenth centuries did not reinvent the needle—it refined it. Advances in steelmaking and precision manufacturing produced needles that were smoother, stronger, more consistent, and accessible to stitchers around the world.",
        ],
      },
      {
        heading: "Needle Quality",
        paragraphs: [
          "A needle may appear simple, but it is a precision tool.",
          "Small differences become noticeable after hundreds—or even thousands—of stitches.",
        ],
        bulletsLabel: "A well-made needle should",
        bullets: [
          "Enter fabric smoothly",
          "Help reduce abrasion on the thread",
          "Maintain consistent dimensions",
          "Provide sufficient strength for extended stitching",
          "Remain comfortable throughout long stitching sessions",
        ],
      },
      {
        paragraphs: [
          "One of the most overlooked features is the eye.",
          "Every time thread passes through it, friction is created. A smoothly finished eye helps reduce abrasion, allowing delicate fibers to retain their strength, softness, and luster throughout a project.",
          "A good needle doesn't simply pass through fabric. It helps protect the thread.",
        ],
      },
      {
        heading: "Different Crafts, Different Needles",
        paragraphs: [
          "Although the basic structure of a needle has remained largely unchanged, different stitching techniques have inspired specialized designs.",
          "Embroidery needles feature a sharp point and an eye suited to stranded cotton and decorative stitching.",
          "Cross-stitch needles—often tapestry needles—have a rounded tip that slips naturally between the woven threads of Aida and even-weave fabrics without splitting them.",
          "Sashiko needles are longer, making it easier to load multiple running stitches before drawing the thread through the fabric—a technique that gives sashiko its distinctive rhythm.",
          "Each design reflects the unique movement of its craft.",
        ],
        gallery: [
          {
            src: "/images/blog-needle-history-cross-stitch-4306-aside-20260630.jpg",
            alt: "COSMO No. 4306 cross-stitch needle set with gold-plated eyes in three sizes",
            caption: "Cross-stitch needles — rounded tips for counted even-weave",
            fit: "contain",
            width: 365,
            height: 1024,
          },
          {
            src: "/images/blog-needle-history-sashiko-4345-aside-20260630.jpg",
            alt: "COSMO Hidamari sashiko assorted needle set No. 4345 retail package",
            caption: "Sashiko needles — longer shafts for running-stitch rhythm",
            fit: "contain",
            width: 373,
            height: 1024,
          },
        ],
        galleryPosition: "aside",
        galleryVariant: "aside",
      },
      {
        heading: "Choosing the Right Needle",
        paragraphs: [
          "There is no single \"best\" needle for every project.",
          "The right choice depends on your technique, fabric, and thread.",
          "When selecting a needle, consider:",
        ],
        bullets: [
          "The type of fabric",
          "The thickness of the thread",
          "The stitching technique",
          "The length of your project",
        ],
      },
      {
        paragraphs: [
          "Using the appropriate needle not only improves the finished result—it also helps make long stitching sessions more comfortable and enjoyable.",
          "Sometimes, the smallest tool makes the biggest difference.",
        ],
      },
      {
        heading: "The Harmony of Thread, Fabric, and Needle",
        paragraphs: [
          "COSMO® is widely known for embroidery thread, but beautiful stitching has never depended on thread alone.",
          "No matter how beautiful a thread may be, it can only perform at its best when paired with the right fabric and the right needle.",
          "Every successful project rests on the harmony of three elements: thread, fabric, and needle. Each supports the others.",
          "A beautifully finished thread deserves a needle that helps preserve its fibers. A carefully woven fabric deserves a needle that passes through it cleanly.",
          "When these three elements work together, stitching feels smoother, more comfortable, and more enjoyable.",
          "LECIEN develops COSMO needles—including embroidery, cross-stitch, and sashiko assortments—to complement both the technique and the thread, so the smallest tool in your basket helps every fiber perform at its best.",
        ],
        figure: {
          src: "/images/blog-needle-history-stitching-20260630.jpg",
          alt: "Hands sashiko stitching with Hidamari thread and a long sashiko needle",
          caption:
            "Thread, fabric, and needle work together—the smallest tool carries every stitch.",
        },
      },
      {
        heading: "Every Beautiful Stitch Begins with a Needle",
        paragraphs: [
          "The history of embroidery is often told through extraordinary textiles, beautiful colors, and intricate patterns.",
          "Yet behind every finished piece is one remarkably humble tool.",
          "For thousands of years, the sewing needle has connected human hands to fabric—first for survival, then for craftsmanship, and today for creativity and self-expression.",
          "Its design has changed very little. Its importance never has.",
          "The next time you begin a new project, take a moment to appreciate the smallest tool in your stitching basket.",
          "Every beautiful stitch begins with a needle. Choosing the right one is one of the simplest ways to make every stitch smoother, more enjoyable, and more rewarding.",
        ],
      },
      {
        heading: "Reference",
        subsections: [
          {
            heading: "Further reading",
            paragraphs: [
              "Gilligan I, d'Errico F, Doyon L, Wang W, Kuzmin YV. Paleolithic eyed needles and the evolution of dress. Science Advances. 2024;10(26):eadp2887. DOI: 10.1126/sciadv.adp2887",
            ],
          },
        ],
      },
    ],
    ctaLabel: "Continue Exploring",
    ctaDescription:
      "When you are ready to match thread, fabric, and tool, browse COSMO needles, hoops, and counted-work supplies.",
    cta: {
      label: "Explore Tools & Supplies",
      href: "/tools-supplies",
    },
  },
  {
    slug: "japan-to-american-stitchers",
    title: "From Japan to American Stitchers: COSMO's Next Chapter",
    excerpt:
      "COSMO's U.S. warehouse in New Jersey is not the brand's first chapter in America—it is the next one. How decades of independent shops, teachers, and stitchers built a community, and what changed in 2026.",
    publishedAt: "2026-07-02",
    image: "/images/blog-cosmo-us-next-chapter-hero-tamamushi-20260702.jpg",
    imageAlt:
      "Embroidered butterflies and flowers with beads on white linen, showcasing COSMO thread craftsmanship",
    sections: [
      {
        heading: "COSMO Wasn't New to America",
        paragraphs: [
          "When COSMO opened its official U.S. warehouse in New Jersey in May 2026, it was not the brand's first step into the American market.",
          "For many years, COSMO embroidery products had already found homes in independent needlework shops, quilt stores, and specialty retailers across the United States. Stitchers discovered the brand through trusted local shops, teachers, designers, online communities, and recommendations from fellow makers—gradually building a loyal following for its smooth stitching, refined colors, and Japanese craftsmanship.",
          "In other words, America was never a new market for COSMO.",
          "What changed in 2026 was not the relationship between the brand and American stitchers—it was how that relationship could be supported.",
          "The opening of a U.S. warehouse marked an important new chapter.",
          "It marked the beginning of domestic fulfillment from within the United States.",
        ],
      },
      {
        heading: "A Century of Embroidery Heritage",
        paragraphs: [
          "COSMO's embroidery story began in 1924, laying the foundation for more than a century of embroidery heritage.",
          "LECIEN was founded in Kyoto in 1933, bringing together European textile traditions and Japanese craftsmanship to create products for generations of makers.",
          "COSMO's connection with America also reaches back to 1950. According to LECIEN's company history, the company's handmade division began by importing American quilt products into Japan. That early exchange reflects a longstanding relationship between American quilting culture and Japanese needlework—one that continues today.",
          "Around the same time, COSMO Embroidery Floss was introduced with an assortment of 195 colors. Over the decades, the collection expanded to include embroidery fabrics, needles, tools, and today more than 500 embroidery floss colors.",
          "Today, COSMO products are available to makers throughout North America, Europe, Asia, Australia, and Japan.",
        ],
        timeline: [
          { period: "1924", title: "COSMO embroidery heritage begins in Japan" },
          { period: "1933", title: "LECIEN founded in Kyoto" },
          {
            period: "1950",
            title: "American quilt imports and COSMO Embroidery Floss (195 colors)",
          },
          { period: "Today", title: "500+ floss colors and a global maker community" },
        ],
      },
      {
        heading: "Growing One Stitch at a Time",
        paragraphs: [
          "Unlike many consumer brands that entered the U.S. through national retail chains, COSMO grew gradually.",
          "Independent needlework and quilt shops introduced carefully selected COSMO products to their local communities.",
          "Teachers recommended COSMO threads in workshops and classes.",
          "Designers incorporated them into patterns.",
          "Stitchers shared finished projects with friends and online communities.",
          "One recommendation led to another.",
          "One project inspired the next.",
          "Together with long-standing wholesale partners, independent retailers helped build a community that existed long before COSMO established domestic fulfillment in the United States.",
        ],
      },
      {
        heading: "What Changed in 2026",
        paragraphs: [
          `In May 2026, COSMO began shipping from its first official U.S. warehouse in New Jersey, operated by TANAAKK INC., the U.S. Seller of Record. Official wholesale ordering also became available through [Faire](${FAIRE_STORE_URL}).`,
          "For American retailers and stitchers, this means:",
        ],
        bullets: [
          "Faster domestic shipping",
          "Improved inventory availability",
          `Easier wholesale ordering through [Faire](${FAIRE_STORE_URL})`,
          "Continued manufacturing by LECIEN in Japan",
        ],
        bulletsLabel: "What changed in 2026",
      },
      {
        paragraphs: [
          "What changed was the supply chain.",
          "What did not change was COSMO's commitment to Japanese craftsmanship, quality, and the independent retailers and wholesale partners who helped build the brand's presence in North America.",
          "The goal is simple: to make it easier for American retailers and stitchers to access the same trusted products while preserving the craftsmanship developed in Japan.",
        ],
      },
      {
        heading: "Supporting Independent Needlework Shops",
        paragraphs: [
          "Independent shops have always been at the heart of COSMO's story in North America.",
          "The new U.S. warehouse was created not to replace those relationships, but to strengthen them—providing more reliable inventory, shorter delivery times, and a more responsive supply chain for the retailers who have introduced COSMO to generations of American makers.",
          "Local shops remain places where stitchers discover new techniques, share ideas, and build creative communities. Supporting those creative communities remains an important part of COSMO's long-term commitment to North America.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "A skein of embroidery floss carries more than color.",
          "It carries generations of craftsmanship, thousands of finished projects, and the creativity of makers around the world.",
          "The opening of a U.S. warehouse is not the beginning of COSMO in America.",
          "It is the beginning of its next chapter.",
          "A warehouse is, ultimately, a logistics decision.",
          "For stitchers, however, it means something much simpler:",
          "Easier access to the threads, fabrics, and tools they already love.",
          "COSMO's story in America did not begin in 2026.",
          "It simply became easier to carry forward.",
        ],
      },
    ],
    ctaLabel: "LECIEN COSMO Wholesale on Faire",
    ctaDescription:
      `U.S. retailers can order through our official [Faire](${FAIRE_STORE_URL}) store with New Jersey fulfillment and restocking from Japan.`,
    cta: {
      label: "Shop on Faire",
      href: FAIRE_STORE_URL,
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
