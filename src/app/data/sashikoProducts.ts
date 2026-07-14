export type SashikoProduct = {
  slug: string;
  title: string;
  shortTitle: string;
  lead: string;
  description: string;
  img: string;
  alt: string;
  cardBody: string;
  overview: string[];
  highlights: { heading: string; body: string }[];
  specs: { label: string; value: string }[];
  galleryTitle?: string;
  gallery?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  }[];
  relatedStory?: { label: string; href: string };
};

export const SASHIKO_PRODUCTS: SashikoProduct[] = [
  {
    slug: "hidamari-thread",
    title: "Hidamari Sashiko Thread",
    shortTitle: "Hidamari Thread",
    lead: "The thread for modern sashiko — 60 colors of smooth, low-fuzz Japanese cotton.",
    description:
      "COSMO® hidamari® Sashiko Thread — smooth, low-fuzz Japanese cotton for sashiko, mending, sewing, knitting, decorating, and tying. 60 colors including solids, speckle, melange, multicolor, and gradation. Approx. 30 m (32.8 yd) per spool. Made in Japan.",
    img: "/images/sashiko-hidamari-thread-packs-20260714.jpg",
    alt: "COSMO hidamari sashiko thread packs in multiple colors",
    cardBody:
      "Smooth, low-fuzz Japanese cotton for sashiko — and for sewing, knitting, decorating, and tying. 60 colors including solids, speckle, melange, multicolor, and gradation. Approx. 30 m (32.8 yd) per spool.",
    overview: [
      "In Japanese, hidamari (ひだまり) means “a sunny spot”—that warm pool of light where you’d happily settle in and stitch for hours.",
      "COSMO® hidamari® Sashiko Thread is cone-wound 100% cotton, made in Japan for the rhythm of sashiko running stitches—and versatile enough for visible mending, sewing, knitting accents, decorating, and knotwork.",
      "Instead of a traditional skein, each cone lets you pull exactly the length you need with less tangling. The palette reaches far beyond indigo and white, with clear brights and nuanced, smoky tones for both classic and contemporary work.",
    ],
    highlights: [
      {
        heading: "Smooth, low-fuzz cotton",
        body: "Designed to glide through fabric for long-running sashiko stitches with a clean, even look.",
      },
      {
        heading: "60 colors",
        body: "Solids, speckle, melange, multicolor, and gradation—ready for traditional patterns and modern color stories.",
      },
      {
        heading: "Cone-wound convenience",
        body: "Pull the length you need without separating strands. Approx. 30 m (32.8 yd) per spool.",
      },
      {
        heading: "Beyond sashiko",
        body: "Strong enough for mending and flexible enough for sewing, knitting accents, decorating, and tying.",
      },
    ],
    specs: [
      { label: "Product", value: "COSMO® hidamari® Sashiko Thread" },
      { label: "Fiber", value: "100% cotton" },
      { label: "Origin", value: "Made in Japan" },
      { label: "Colors", value: "60 (solid & patterned families)" },
      { label: "Length", value: "Approx. 30 m (32.8 yd) per spool" },
      { label: "Form", value: "Cone-wound on retail card" },
      {
        label: "Best with",
        value: "COSMO® Hidamari Sashiko Assorted Needle Set (No. 4345)",
      },
    ],
    galleryTitle: "Retail Color Displays",
    gallery: [
      {
        src: "/images/sashiko-hidamari-display-141-20260714.jpg",
        alt: "Hidamari sashiko thread solid colors 1–20 — display No. 141",
        width: 529,
        height: 1024,
        caption: "Solid colors 1–20",
      },
      {
        src: "/images/sashiko-hidamari-display-143-20260714.jpg",
        alt: "Hidamari sashiko thread solid colors 21–40 — display No. 143",
        width: 531,
        height: 1024,
        caption: "Solid colors 21–40",
      },
      {
        src: "/images/sashiko-hidamari-display-139-20260714.jpg",
        alt: "Hidamari sashiko thread patterned colors 101–405 — display No. 139",
        width: 524,
        height: 1024,
        caption: "101–405 Speckle, melange, multicolor & gradation",
      },
    ],
    relatedStory: {
      label: "Read the hidamari Stories article",
      href: "/stories/hidamari-sashiko-thread",
    },
  },
  {
    slug: "pair-coasters-kit",
    title: "Sashiko Pair Coasters Kit",
    shortTitle: "Pair Coasters Kit",
    lead: "A complete beginner-friendly kit to stitch and finish a matching pair of sashiko coasters.",
    description:
      "COSMO Sashiko Pair Coasters Kit with pre-printed fabric, hidamari thread, finishing thread, cotton tape, sashiko and sewing needles, threader, and English instructions. Finished size approx. 10 × 10 cm. Made in Japan.",
    img: "/images/sashiko-lineup-pair-coasters-20260616.png",
    alt: "Finished sashiko pair coasters with glass of water",
    cardBody:
      "Complete kit with pre-printed fabric, hidamari thread, finishing thread, cotton tape, sashiko and sewing needles, threader, and English instructions. Finished size approx. 10 × 10 cm.",
    overview: [
      "This kit brings together everything you need to stitch a pair of coasters—from pre-printed fabric to hidamari thread and finishing materials.",
      "Wash-away patterning and English instructions make it approachable if you are new to sashiko, while the finished coasters make a practical gift or everyday table accent.",
    ],
    highlights: [
      {
        heading: "All-in-one kit",
        body: "Fabric, thread, needles, tape, threader, and instructions included—ready to start without hunting supplies.",
      },
      {
        heading: "Wash-away pattern",
        body: "Follow the printed guides as you stitch; the markings wash away when the work is finished.",
      },
      {
        heading: "Finish-ready materials",
        body: "Cotton tape and finishing thread help you turn stitched squares into usable coasters.",
      },
    ],
    specs: [
      { label: "Product", value: "Sashiko Pair Coasters Kit" },
      { label: "Contents", value: "Pre-printed fabric, hidamari thread, finishing thread, cotton tape, sashiko & sewing needles, threader, English instructions" },
      { label: "Finished size", value: "Approx. 10 × 10 cm (each coaster)" },
      { label: "Skill level", value: "Beginner-friendly" },
      { label: "Origin", value: "Made in Japan" },
    ],
    gallery: [
      {
        src: "/images/sashiko-about-coasters-20260611.jpg",
        alt: "Sashiko-stitched coasters with a cup on a wooden table",
        width: 900,
        height: 900,
      },
    ],
  },
  {
    slug: "fabric-coasters",
    title: "Sashiko Fabric for Coasters",
    shortTitle: "Fabric for Coasters",
    lead: "Pre-printed cotton to stitch four coasters—add your own hidamari thread and needles.",
    description:
      "COSMO Sashiko Fabric for Coasters — pre-printed 100% cotton to make four coasters. Wash-away pattern and English instructions included. Thread and needles not included. Finished size approx. 10 × 10 cm.",
    img: "/images/sashiko-about-coasters-20260611.jpg",
    alt: "Sashiko fabric for coasters",
    cardBody:
      "Pre-printed 100% cotton fabric to make four coasters. Wash-away pattern and English instructions included. Thread and needles not included. Finished size approx. 10 × 10 cm.",
    overview: [
      "Choose your own hidamari colors and stitch four coasters from one pre-printed cotton panel.",
      "Ideal when you already have thread and needles on hand, or want to customize the palette for gifts and home use.",
    ],
    highlights: [
      {
        heading: "Four coasters per panel",
        body: "One fabric pack yields four finished coasters at approx. 10 × 10 cm each.",
      },
      {
        heading: "Wash-away pattern",
        body: "Printed guides support even spacing; markings wash away after stitching.",
      },
      {
        heading: "Pair with hidamari",
        body: "Thread and needles sold separately—choose solid or variegated hidamari to match your table.",
      },
    ],
    specs: [
      { label: "Product", value: "Sashiko Fabric for Coasters" },
      { label: "Fiber", value: "100% cotton" },
      { label: "Includes", value: "Pre-printed fabric, English instructions" },
      { label: "Not included", value: "Thread and needles" },
      { label: "Finished size", value: "Approx. 10 × 10 cm (each coaster)" },
      { label: "Yield", value: "4 coasters" },
      { label: "Origin", value: "Made in Japan" },
    ],
  },
  {
    slug: "fabric",
    title: "Sashiko Fabric",
    shortTitle: "Sashiko Fabric",
    lead: "Cotton/linen cloth with wash-away geometric patterns for larger sashiko projects.",
    description:
      "COSMO Sashiko Fabric — cotton/linen with wash-away printed patterns in circle, kasuri, cross, and chevron designs. Finished size approx. 32 × 32 cm. English instructions included; thread and needle not included.",
    img: "/images/sashiko-lineup-sashiko-fabric-20260616.png",
    alt: "Sashiko-stitched cotton-linen fabric with geometric pattern",
    cardBody:
      "Cotton/linen fabric with wash-away printed patterns in circle, kasuri, cross, and chevron designs. Finished size approx. 32 × 32 cm. English instructions included; thread and needle not included.",
    overview: [
      "This cotton/linen ground is sized for statement sashiko squares—perfect for framing, pouches, cushion fronts, or stitched display pieces.",
      "Wash-away printed motifs (circle, kasuri, cross, and chevron) give a clear path for running stitches while keeping the finished cloth free of permanent guidelines.",
    ],
    highlights: [
      {
        heading: "Geometric pattern options",
        body: "Circle, kasuri, cross, and chevron designs support classic sashiko rhythm and modern layouts.",
      },
      {
        heading: "Project-ready size",
        body: "Approx. 32 × 32 cm finished size suits panels, bags, and home accents.",
      },
      {
        heading: "Pair with hidamari",
        body: "Use COSMO hidamari thread and long sashiko needles for smooth, even running stitches.",
      },
    ],
    specs: [
      { label: "Product", value: "Sashiko Fabric" },
      { label: "Fiber", value: "Cotton / linen" },
      { label: "Patterns", value: "Circle, kasuri, cross, chevron" },
      { label: "Includes", value: "Pre-printed fabric, English instructions" },
      { label: "Not included", value: "Thread and needle" },
      { label: "Finished size", value: "Approx. 32 × 32 cm" },
      { label: "Origin", value: "Made in Japan" },
    ],
    gallery: [
      {
        src: "/images/sashiko-gallery-pincushions-20260612.jpg",
        alt: "Sashiko pincushions with geometric patterns",
        width: 1024,
        height: 1024,
      },
      {
        src: "/images/sashiko-gallery-notebook-20260612.jpg",
        alt: "Fabric notebook cover with shippo sashiko pattern",
        width: 1024,
        height: 1024,
      },
    ],
  },
  {
    slug: "celebratory-fabric",
    title: "Celebratory Sashiko Fabric",
    shortTitle: "Celebratory Fabric",
    lead: "Auspicious motifs hand-drawn by sashiko artist chiebaa and hand-printed in Japan.",
    description:
      "COSMO Celebratory Sashiko Fabric — hand-drawn designs by sashiko artist chiebaa, hand-printed in Japan. Stitch auspicious motifs and sew celebratory wishes into the fabric. English instructions included.",
    img: "/images/sashiko-lineup-celebratory-fabric-20260616.png",
    alt: "Celebratory sashiko fabric wall hangings with auspicious motifs",
    cardBody:
      "Hand-drawn designs by sashiko artist chiebaa, hand-printed in Japan. Stitch auspicious motifs and sew celebratory wishes into the fabric. English instructions included.",
    overview: [
      "Celebratory Sashiko Fabric brings festive, auspicious imagery to your stitching—motifs chosen for gifts, seasonal décor, and meaningful keepsakes.",
      "Each design is hand-drawn by sashiko artist chiebaa and hand-printed in Japan, then ready for you to stitch with hidamari thread and finish as wall hangings or small textile objects.",
    ],
    highlights: [
      {
        heading: "Artist collaboration",
        body: "Hand-drawn by sashiko artist chiebaa—distinctive motifs with a personal, celebratory voice.",
      },
      {
        heading: "Hand-printed in Japan",
        body: "Printed with care for clear stitch paths and a finished look that feels special.",
      },
      {
        heading: "Gift-ready storytelling",
        body: "Stitch wishes and auspicious symbols into fabric for seasons, milestones, and home display.",
      },
    ],
    specs: [
      { label: "Product", value: "Celebratory Sashiko Fabric" },
      { label: "Design", value: "Hand-drawn by sashiko artist chiebaa" },
      { label: "Printing", value: "Hand-printed in Japan" },
      { label: "Includes", value: "Pre-printed fabric, English instructions" },
      { label: "Suggested use", value: "Wall hangings, gifts, celebratory décor" },
      { label: "Origin", value: "Made in Japan" },
    ],
  },
];

export function getSashikoProduct(slug: string): SashikoProduct | undefined {
  return SASHIKO_PRODUCTS.find((product) => product.slug === slug);
}

export function getSashikoProductSlugs(): string[] {
  return SASHIKO_PRODUCTS.map((product) => product.slug);
}
