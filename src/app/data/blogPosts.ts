import { FAIRE_STORE_URL } from "./site";
import type { WholesaleInfoCard } from "./wholesale";

export type BlogTable = {
  headers: string[];
  rows: string[][];
};

export type BlogFigure = {
  src: string;
  alt: string;
  caption?: string;
  description?: string;
  fit?: "cover" | "contain";
  width?: number;
  height?: number;
  href?: string;
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
    position?: "aside" | "center";
  };
  figure?: BlogFigure;
  figurePosition?: "below" | "aside";
  gallery?: BlogFigure[];
  galleryVariant?: "row" | "comparison" | "patterns" | "aside" | "hero" | "pillars" | "before-after";
  galleryPosition?: "below" | "aside";
  galleryZoom?: boolean;
  /** Keep low-resolution gallery images smaller on the page */
  galleryCompact?: boolean;
  mediaPosition?: "top" | "bottom";
  timeline?: BlogTimelineStep[];
  table?: BlogTable;
  subsections?: BlogSubsection[];
  /** Visual info cards (same icons/layout as /wholesale). */
  infoCards?: WholesaleInfoCard[];
  infoCardsPosition?: "top" | "bottom";
  linkCta?: {
    label: string;
    href: string;
  };
  /** Shared product UI blocks rendered inside blog sections. */
  embed?: "seasons-series";
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
    slug: "folk-wall-hangings",
    title: "Folk Wall Hangings: Stories Woven in Thread",
    excerpt:
      "Turn cloth into wall art—folk-inspired motifs, balanced composition, and COSMO® No. 25, Seasons, Nishikiito®, and hidamari® for textile hangings that tell a story.",
    publishedAt: "2026-07-29",
    image: "/images/blog-folk-wall-hangings-hero-20260729.jpg",
    imageAlt:
      "Four folk-inspired embroidered wall hangings displayed on a textured white wall",
    heroAspectRatio: "1079 / 1080",
    imageFit: "contain",
    sections: [
      {
        paragraphs: [
          "Textile Art That Brings Tradition to the Wall",
          "Embroidery has always been more than decoration. Across cultures and generations, stitched textiles have carried stories—symbols of nature, seasons, community, and identity.",
          "While many embroidery projects are created to be worn or used, wall hangings offer a different way to experience thread. Freed from the demands of daily handling, fabric becomes a canvas for color, texture, and storytelling.",
          "With COSMO® threads, traditional motifs and contemporary designs come together in textile pieces designed to be displayed, appreciated, and passed on.",
        ],
      },
      {
        heading: "From Cloth to Wall Art",
        paragraphs: [
          "A stitched wall hanging transforms fabric into a piece of artwork. Unlike smaller functional projects, larger textile pieces allow makers to explore pattern, color, and imagination as a complete composition.",
          "A wall hanging does not simply show what was stitched. It shows how the maker interpreted color, pattern, and imagination.",
        ],
        figure: {
          src: "/images/blog-folk-wall-hangings-hero-20260729.jpg",
          alt: "Four embroidered fabric hangings with domestic and nature motifs on wooden magnetic bars",
          caption:
            "Cloth on the wall—folk motifs, wooden bars, and a quiet gallery of handmade textiles.",
          fit: "contain",
          width: 1079,
          height: 1080,
        },
        bulletsLabel: "Larger pieces invite",
        bullets: [
          "Repeating patterns and borders",
          "Layered colors and textures",
          "Decorative motifs inspired by nature and tradition",
          "Movement created by thread direction and stitch rhythm",
        ],
      },
      {
        heading: "Patterns That Carry Stories",
        paragraphs: [
          "Folk embroidery traditions often use motifs that appear simple at first glance but carry deeper meaning. Flowers may represent growth and renewal. Geometric patterns may reflect balance and harmony. Animals, plants, and symbolic designs can connect textiles to landscapes, seasons, and memories.",
          "Today, these ideas continue to inspire modern embroidery. The beauty of folk-inspired work lies in making these patterns your own.",
        ],
        gallery: [
          {
            src: "/images/blog-folk-wall-hangings-rabbits-20260729.jpg",
            alt: "Taupe hanging with two white rabbits among red flowers on a wooden magnetic bar",
            caption: "Rabbits and flowers—a symmetrical folk scene as wall textile",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-folk-wall-hangings-breakfast-20260729.jpg",
            alt: "Dusty pink wall hanging with whimsical breakfast embroidery motifs",
            caption: "Domestic storytelling—breakfast motifs as quiet wall art",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-folk-wall-hangings-stamp-duo-20260729.jpg",
            alt: "Teal stamp-frame hanging beside a gray rabbit folk hanging on the wall",
            caption: "Stamp vignettes and folk symmetry side by side",
            fit: "contain",
            width: 1156,
            height: 1157,
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
        bulletsLabel: "A single motif can become",
        bullets: [
          "A botanical centerpiece",
          "A geometric textile panel",
          "A decorative wall hanging",
          "A personal interpretation of folk-inspired art",
        ],
      },
      {
        heading: "Building a Textile Landscape",
        paragraphs: [
          "Wall hangings create opportunities to think beyond individual stitches and consider the entire textile. A balanced composition often combines a focal motif, supporting details, and careful contrast of texture and thread.",
          "The result is a textile that changes as light moves across the surface.",
        ],
        gallery: [
          {
            src: "/images/blog-folk-wall-hangings-duo-20260729.jpg",
            alt: "Blue stamp-panel hanging beside gray rabbit folk hanging",
            caption: "Focal motif plus supporting rhythm—two hangings, one conversation",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-folk-wall-hangings-domestic-pair-20260729.jpg",
            alt: "Pink breakfast hanging and entryway closet hanging laid on a wood table",
            caption: "Domestic landscapes—breakfast table and entryway scenes",
            fit: "contain",
            width: 1168,
            height: 1168,
          },
          {
            src: "/images/blog-folk-wall-hangings-lifestyle-pair-20260729.jpg",
            alt: "Breakfast and entryway hangings styled flat with spools and bird figurine",
            caption: "Composition on cloth before it meets the wall",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
        bulletsLabel: "Balance often combines",
        bullets: [
          "A focal motif—the main design that draws the eye",
          "Supporting details—smaller shapes, borders, and repeated elements",
          "Texture and contrast—smooth cotton, variegation, metallic light, or thicker matte lines",
        ],
      },
      {
        heading: "Threads for Storytelling",
        paragraphs: [
          "Different COSMO threads create different visual effects. Choosing the right thread helps bring the character of a design forward.",
        ],
      },
      {
        heading: "COSMO® No. 25 Cotton Floss",
        paragraphs: [
          "A versatile foundation for detailed embroidery. Made from 100% extra-long staple cotton, No. 25 offers a smooth surface with soft sheen and fine detail capability for outlines, flowers, and decorative elements. Its polished appearance creates clean lines and refined filled areas.",
        ],
        bullets: [
          "Over 500 solid colors",
          "Smooth surface with soft sheen",
          "Fine detail for outlines, flowers, and decorative elements",
        ],
      },
      {
        heading: "COSMO® Seasons Variegated Floss",
        paragraphs: [
          "Color movement is built directly into the thread. With 140 self-shading colors, Seasons creates natural transitions—landscapes, leaves and flowers, skies and water, and folk-inspired motifs with organic shading. Instead of changing colors repeatedly, the thread creates gentle variation as you stitch.",
        ],
      },
      {
        heading: "COSMO® Nishikiito® Metallic Thread",
        paragraphs: [
          "Small accents can transform a design. Nishikiito® adds highlights for decorative borders, stars and light effects, special motifs, and traditional-inspired embellishments. A small amount of metallic thread creates contrast against matte cotton and adds movement when light reflects across the surface.",
        ],
        bullets: [
          "33 specialty colors across five finishes",
          "Use sparingly where light should catch",
        ],
      },
      {
        heading: "COSMO® hidamari® Sashiko Thread",
        paragraphs: [
          "With its soft matte texture, hidamari® brings a more tactile quality to textile art. Available in 40 colors on signature mini cones, it works beautifully for bold running stitches, geometric patterns, and textured background elements—adding a handmade, woven feeling to larger textile pieces.",
        ],
      },
      {
        heading: "Creating Depth Through Stitch and Texture",
        paragraphs: [
          "Wall hangings are an opportunity to combine different embroidery approaches. A single piece can include fine embroidered details alongside bold stitched lines, smooth areas beside textured sections, and solid colors balanced with shifting gradients.",
          "The contrast between threads gives the artwork dimension and allows each area of the design to feel intentional.",
        ],
        gallery: [
          {
            src: "/images/blog-folk-wall-hangings-rabbit-detail-20260729.jpg",
            alt: "Close-up of white outline rabbit with checkered cape among red folk flowers",
            caption: "Fine outlines and small fills—detail that rewards a closer look",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-folk-wall-hangings-flowers-detail-20260729.jpg",
            alt: "Close-up of red floral motifs and rabbits with blue checkered fabric accents",
            caption: "Texture in the motif—knots, fills, and cloth accents",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-folk-wall-hangings-breakfast-detail-a-20260729.jpg",
            alt: "Close-up of embroidered toaster, jam jar, and fruit on pink fabric",
            caption: "Domestic detail in cotton—clear shapes with quiet character",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-folk-wall-hangings-breakfast-detail-b-20260729.jpg",
            alt: "Close-up of embroidered teapot, mug, and breakfast plate motifs",
            caption: "Smooth fills and outline work side by side",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
        bulletsLabel: "For example",
        bullets: [
          "Use No. 25 for delicate flowers and outlines",
          "Add Seasons for natural shading",
          "Introduce Nishikiito® where light would naturally catch",
          "Use hidamari® for stronger textile texture",
        ],
      },
      {
        heading: "Displaying Embroidery as Art",
        paragraphs: [
          "Once complete, a wall hanging becomes part of the space around it. Unlike smaller framed pieces, larger textile artworks need thoughtful preparation so the fabric, stitches, and composition remain beautiful over time.",
        ],
        figure: {
          src: "/images/blog-folk-wall-hangings-display-bars-20260729.jpg",
          alt: "Wooden magnetic wall bars in 13 cm and 18 cm sizes on a light wood surface",
          caption:
            "Magnetic wooden bars—a clean hanging edge for cloth ready to become wall art.",
          fit: "contain",
          width: 1080,
          height: 1080,
        },
      },
      {
        heading: "Stabilize Heavy Stitching",
        paragraphs: [
          "Large folk-inspired pieces often combine multiple stitch styles and thread weights. Dense embroidery, layered fills, or thicker threads such as COSMO® hidamari® Sashiko Thread can add visual richness, but they also add weight to the fabric.",
          "A stable foundation allows detailed patterns and textured stitches to remain smooth rather than pulling the fabric out of shape.",
        ],
        bulletsLabel: "For larger wall hangings",
        bullets: [
          "Consider a medium-weight fusible stabilizer or backing layer behind the base fabric before stitching",
          "Choose a fabric with enough structure to support the embroidery",
          "Keep the fabric grain aligned to prevent distortion during stitching and display",
        ],
      },
      {
        heading: "Mounting & Weight Distribution",
        paragraphs: [
          "The way a textile hangs affects how it ages. For pieces displayed on wooden rods, dowels, or textile hangers, a weighted bottom helps the textile hang naturally—preventing lower corners from curling inward due to gravity, humidity, or uneven stitch tension.",
        ],
        bullets: [
          "Ensure the top edge follows a straight horizontal grain line",
          "Distribute weight evenly across the hanging edge",
          "Consider adding a concealed weighted dowel or weighted hem at the bottom edge",
        ],
      },
      {
        heading: "Protection and Placement",
        paragraphs: [
          "The display method becomes part of the artwork—supporting the textile while allowing the stitches, colors, and textures to remain the focus.",
        ],
        bulletsLabel: "To help preserve colors and fibers",
        bullets: [
          "Avoid placing embroidered textiles in direct sunlight for long periods",
          "Keep pieces away from excessive moisture or humidity",
          "Handle finished textiles with clean hands when mounting or adjusting",
        ],
      },
      {
        heading: "From Studio to Wall",
        paragraphs: [
          "Supporting scenes—work in progress, small vignettes, and framed companions—remind us that a hanging begins at the needle long before it meets the peg.",
        ],
        gallery: [
          {
            src: "/images/blog-folk-wall-hangings-vignettes-20260729.jpg",
            alt: "Embroidered tote, framed bunny wreath, picnic rabbits, and small accessories on a wood table",
            caption: "Folk motifs beyond the banner—frames, bags, and small textiles",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
          {
            src: "/images/blog-folk-wall-hangings-wip-20260729.jpg",
            alt: "Hands stitching a floral wreath beside a finished framed bunny embroidery",
            caption: "Composition takes shape stitch by stitch",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
          {
            src: "/images/blog-folk-wall-hangings-framed-20260729.jpg",
            alt: "Framed picnic rabbits and scooter motif embroidery by a window with floss and tools",
            caption: "Line work and storybook scenes as display companions",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
          {
            src: "/images/blog-folk-wall-hangings-outline-20260729.jpg",
            alt: "White line embroidery of rabbits and botanical sprigs on medium grey fabric",
            caption: "Outline simplicity—folk forms with room for the cloth to breathe",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
      },
      {
        heading: "Tips for Creating Folk-Inspired Wall Hangings",
        paragraphs: [
          "A few calm choices keep large textiles balanced—on the needle and on the wall.",
        ],
        bullets: [
          "Choose the right foundation—select fabric with enough structure for density and weight; larger pieces may benefit from stabilizing layers before stitching.",
          "Balance color and empty space—not every area needs to be filled; open fabric helps stitched areas stand out.",
          "Mix thread personalities—No. 25 for detail, Seasons for organic movement, Nishikiito® for light-catching accents, hidamari® for tactile texture.",
          "Think about the final display—consider hanging method, mounting style, and surrounding space before choosing final size and palette.",
        ],
      },
      {
        heading: "Project Ideas",
        paragraphs: [
          "Start with a story you want to hang—then let motif, palette, and thread personalities follow.",
        ],
        bullets: [
          "Botanical Folk Panel — floral motifs with layered leaves and textured backgrounds.",
          "Seasonal Story Textile — spring blossoms, summer skies, autumn harvest, or winter landscapes.",
          "Geometric Heritage Design — repeating shapes and borders inspired by traditional folk patterns.",
          "Personal Story Hanging — textiles based on meaningful places, memories, or symbols.",
        ],
      },
      {
        heading: "Product Recommendations",
        paragraphs: [
          "Build a hanging palette from solids, self-shading color, metallic light, and matte sashiko weight.",
        ],
        figure: {
          src: "/images/blog-folk-wall-hangings-products-20260729.jpg",
          alt: "COSMO embroidery floss skeins and craft materials arranged for project planning",
          caption:
            "No. 25, Seasons, Nishikiito®, and hidamari®—four personalities for one textile story.",
          fit: "contain",
          width: 1671,
          height: 2089,
        },
        bullets: [
          "COSMO® No. 25 Cotton Floss — over 500 solid colors for detailed embroidery and rich color expression.",
          "COSMO® Seasons Variegated Floss — 140 self-shading colors for natural transitions and depth.",
          "COSMO® Nishikiito® Metallic Thread — 33 specialty colors across five finishes for metallic highlights and decorative accents.",
          "COSMO® hidamari® Sashiko Thread — 40 soft matte colors on mini cones for bold stitched lines and textured patterns.",
        ],
      },
      {
        heading: "Final Note",
        paragraphs: [
          "A folk wall hanging is more than fabric and thread. It is a collection of choices—colors selected, patterns repeated, and stitches placed by hand.",
          "From traditional inspirations to modern interpretations, every textile carries the story of the person who created it.",
          "With COSMO threads, those stories can move from the needle to the wall, creating artwork that brings warmth, texture, and handmade beauty into everyday spaces.",
        ],
      },
    ],
    ctaLabel: "Explore COSMO Threads",
    ctaDescription:
      "Shop COSMO® No. 25 floss, Seasons variegated colors, Nishikiito® metallic thread, and hidamari® sashiko cotton—for folk hangings and textile art.",
    cta: {
      label: "Shop COSMO Floss",
      href: "/floss",
    },
  },

  {
    slug: "sashiko-soft-goods",
    title: "Sashiko Soft Goods: Stitching Everyday Cloth with hidamari®",
    excerpt:
      "Bring sashiko into pouches, coasters, and cloths you use every day—construction tips, relaxed tension, and COSMO® hidamari® for matte running-stitch rhythm.",
    publishedAt: "2026-07-28",
    image: "/images/blog-sashiko-soft-goods-hero-20260728.jpg",
    imageAlt:
      "Collection of sashiko-stitched pouches and mini bags arranged on a mustard corduroy chair",
    heroAspectRatio: "1080 / 1350",
    imageFit: "contain",
    sections: [
      {
        paragraphs: [
          "Traditional Rhythm, Everyday Objects",
          "Sashiko has always been connected to the life of cloth. Originally developed as a way to reinforce and repair fabric, its repeated running stitches created strength, warmth, and beauty at the same time.",
          "Today, sashiko can move beyond the sampler or framed textile and become part of the objects we use every day—a pouch carried in a bag, a coaster placed on the table, or a small cloth resting quietly at home.",
          "With its soft matte texture and smooth stitching rhythm, COSMO® hidamari® Sashiko Thread brings the traditional character of sashiko into modern soft goods: practical pieces shaped by both function and the maker’s hand.",
        ],
      },
      {
        heading: "Soft Goods, Made to Be Used",
        paragraphs: [
          "Unlike embroidery created only to be displayed, soft goods are touched, carried, opened, folded, and used. This changes the way we think about stitching—the thread must not only look beautiful, but also work together with the structure of the fabric.",
          "The result is embroidery that does not simply decorate an object—it becomes part of the object itself.",
        ],
        figure: {
          src: "/images/blog-sashiko-soft-goods-overview-20260728.jpg",
          alt: "Sashiko pouches and mini totes on a mustard chair with antique books",
          caption:
            "A collection of sashiko pouches, small bags, and textile pieces—traditional stitching for everyday life.",
          fit: "contain",
          width: 1080,
          height: 1350,
        },
        bulletsLabel: "What sashiko brings to usable cloth",
        bullets: [
          "Repeated patterns that create rhythm and balance",
          "Raised stitches that add quiet texture",
          "Strong visual contrast between thread and cloth",
          "A handmade quality that becomes richer through use",
        ],
      },
      {
        heading: "What Everyday Cloth Asks For",
        paragraphs: [
          "Soft goods require a different approach from framed embroidery. Pouches, bags, and cloth accessories experience friction, movement, and repeated handling, so thoughtful preparation helps preserve the stitching.",
        ],
        bulletsLabel: "Choosing fabric and managing tension",
        bullets: [
          "Keep stitches slightly relaxed on denser fabrics such as cotton canvas or heavier cloth so the fabric remains flat",
          "Avoid pulling too tightly, which can cause puckering",
          "Allow the natural texture of the matte thread to remain visible—a relaxed stitch creates the calm, even rhythm that defines sashiko",
        ],
      },
      {
        heading: "Pre-Wash Your Fabrics",
        paragraphs: [
          "Natural fabrics such as linen and cotton canvas can shrink slightly during their first wash.",
          "Always pre-wash and press base fabrics before transferring sashiko patterns. This prevents the fabric from contracting around the stitches later, helping finished soft goods remain flat and smooth after laundering.",
        ],
      },
      {
        heading: "Protecting the Inside of Soft Goods",
        paragraphs: [
          "Functional pieces such as pouches, zip bags, and coin purses need protection on the reverse side. Before assembling your finished item:",
        ],
        bullets: [
          "Apply a lightweight fusible interfacing to the back of the stitched panel",
          "Or add a full interior lining to cover thread tails",
          "Either approach helps prevent thread ends from catching on keys, pens, cosmetics, or other items inside the bag while adding stability to the finished piece",
        ],
      },
      {
        heading: "Planning for Seams",
        paragraphs: [
          "Sashiko patterns should be planned with construction in mind. Leave at least a ½-inch (1.5 cm standard seam allowance) unstitched around fabric panels so running stitches are not caught, cut, or weakened when seams are sewn.",
          "This small planning step helps preserve both the appearance and durability of the finished object.",
        ],
      },
      {
        heading: "A Family of Forms",
        paragraphs: [
          "Pouches, cloths, and small accessories share one idea: sashiko that lives with you, not only on the wall.",
        ],
      },
      {
        heading: "Pouches and Mini Totes",
        paragraphs: [
          "Small bags are one of the most natural ways to bring sashiko into daily life. Their surfaces provide enough space for repeating patterns while remaining approachable projects for exploring stitch rhythm and composition.",
          "A simple pouch becomes something personal—a small object carrying both function and the memory of making.",
        ],
        gallery: [
          {
            src: "/images/blog-sashiko-soft-goods-pouches-20260728.jpg",
            alt: "Close arrangement of sashiko pouches with geometric and wheat motifs",
            caption: "Geometric borders and textured fills on usable bags",
            fit: "contain",
            width: 1080,
            height: 1350,
          },
          {
            src: "/images/blog-sashiko-soft-goods-floral-pouch-20260728.jpg",
            alt: "Cream drawstring pouch with multicolor circular floral wreath embroidery",
            caption: "Circular floral motifs on a drawstring pouch",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-sashiko-soft-goods-floral-pouch-b-20260728.jpg",
            alt: "Sage drawstring pouch with cream blooms and navy French-knot berries",
            caption: "Soft florals with tactile knot accents",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
        bulletsLabel: "Using COSMO® hidamari® Sashiko Thread, makers can create",
        bullets: [
          "Geometric borders",
          "Repeating floral motifs",
          "Circular patterns",
          "Textured background fills",
        ],
      },
      {
        heading: "Cloth, Coasters, and Table Accents",
        paragraphs: [
          "Sashiko has a natural place in the home. Coasters, folded cloths, and small textile pieces bring handmade texture into everyday moments.",
          "A stitched coaster placed beneath a cup or a folded cloth displayed in a basket transforms ordinary household objects into quiet expressions of craftsmanship. The beauty of sashiko often appears through repetition—even simple running stitches create depth as light moves across the raised thread surface.",
        ],
        gallery: [
          {
            src: "/images/blog-sashiko-soft-goods-table-20260728.jpg",
            alt: "Indigo and cream sashiko coasters and rolled cloths in a basket with tea glass",
            caption: "Tea-table soft goods—stitched, stacked, and used",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-sashiko-soft-goods-cloth-20260728.jpg",
            alt: "Cream kaki-no-hana sashiko cloth draped on a basket",
            caption: "Repetition on cloth—depth as light moves across raised stitches",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
      },
      {
        heading: "Coin Purses and Decorative Closures",
        paragraphs: [
          "Small accessories offer the perfect scale for experimenting with detailed motifs. Floral patterns, French knots, and contrasting thread accents create focal points while keeping the overall design balanced.",
          "The combination of different thread personalities creates depth without losing the traditional feeling of sashiko.",
        ],
        figure: {
          src: "/images/blog-sashiko-soft-goods-coin-purse-20260728.jpg",
          alt: "Navy kiss-lock coin purse with white floral French-knot embroidery",
          caption:
            "Keep hidamari® as the main sashiko thread; reach for No. 25 when fine floral accents belong.",
          fit: "contain",
          width: 1000,
          height: 1000,
        },
        bulletsLabel: "For additional details",
        bullets: [
          "Use COSMO® No. 25 Embroidery Floss for smaller decorative motifs",
          "Add fine floral accents or outlined elements",
          "Keep hidamari® as the main sashiko thread for the characteristic texture and weight",
        ],
      },
      {
        heading: "Botanical Zip Pouches",
        paragraphs: [
          "A zip pouch combines beauty and practicality. Botanical vines, flowers, and repeating motifs work naturally with sashiko’s calm, structured rhythm.",
          "Good construction allows the embroidery to remain beautiful through everyday use.",
        ],
        figure: {
          src: "/images/blog-sashiko-soft-goods-zip-pouch-20260728.jpg",
          alt: "Gray zip pouch with dense white botanical vine embroidery and empty hoop prop",
          caption:
            "Reinforce the reverse, protect tails, and plan placement around seams and closures.",
          fit: "contain",
          width: 600,
          height: 750,
        },
        bulletsLabel: "When creating pieces that will be handled frequently",
        bullets: [
          "Reinforce the reverse side",
          "Protect thread tails with lining or interfacing",
          "Consider how pattern placement interacts with seams and closures",
        ],
      },
      {
        heading: "Choosing the Right Thread and Needle",
        paragraphs: [
          "The character of sashiko comes from the relationship between the fabric and the thread.",
        ],
        bulletsLabel: "COSMO® hidamari® Sashiko Thread",
        bullets: [
          "40 colors — 20 solid colors in the No. 88 series and 20 multi-color / variegated colors in the No. 89 series",
          "Signature mini-cone winding",
          "Soft matte cotton texture suited to sashiko stitching",
          "Smooth, non-divisible construction for the full, even appearance associated with sashiko",
        ],
      },
      {
        heading: "Pairing hidamari® with the Right Needle",
        paragraphs: [
          "Because hidamari® is a thicker, non-divisible sashiko thread, needle choice affects stitching comfort. The correct needle helps the thread pass through the fabric without unnecessary friction or fraying.",
        ],
        bulletsLabel: "Use a long sashiko needle with",
        bullets: [
          "An elongated eye for easier threading",
          "A sturdy shaft that moves smoothly through fabric",
          "A size appropriate for the fabric thickness",
        ],
      },
      {
        heading: "COSMO® No. 25 Embroidery Floss",
        paragraphs: [
          "No. 25 can complement sashiko projects as an accent thread. Made from 100% extra-long staple cotton, it offers a smooth surface with soft sheen and fine detail capability for small motifs and decorative accents.",
          "Together, hidamari® and No. 25 allow makers to combine sashiko texture with embroidery detail.",
        ],
        bullets: [
          "Over 500 solid colors",
          "Smooth surface with soft sheen",
          "Fine detail for small motifs and decorative accents beside sashiko weight",
        ],
      },
      {
        heading: "Keeping Tools Close",
        paragraphs: [
          "A peaceful stitching practice begins with an organized workspace. Because sashiko is built on repetition, keeping materials accessible encourages the simple habit of stitching a little at a time.",
        ],
        figure: {
          src: "/images/blog-sashiko-soft-goods-tools-20260728.jpg",
          alt: "Wooden shaker box with COSMO mini cones and a white sashiko pincushion",
          caption:
            "hidamari® cones by color, needles ready, and a pincushion nearby—tools that invite the next few stitches.",
          fit: "contain",
          width: 1080,
          height: 1080,
        },
        bulletsLabel: "A small sewing box with",
        bullets: [
          "hidamari® cones arranged by color",
          "Needles ready for the next project",
          "A pincushion nearby",
          "Essential tools kept together",
        ],
      },
      {
        heading: "Tips for Sashiko Soft Goods",
        paragraphs: [
          "A few calm habits keep usable pieces flat, lasting, and true to sashiko’s rhythm.",
        ],
        bullets: [
          "Plan a small palette—choose a focused color group so stitch pattern and fabric texture stay the main feature.",
          "Use the right needle—pair hidamari® with a long, sturdy sashiko needle so matte cotton can glide without dragging or fraying.",
          "Pre-wash and press fabrics before transferring patterns so soft goods stay smooth after laundering.",
          "Mind the seam allowance—leave at least a ½-inch (1.5 cm) unstitched border around fabric panels so sashiko stitches remain clear and protected during assembly.",
          "Protect the reverse side—for pouches, bags, and other functional items, use lightweight fusible interfacing or a lining.",
          "Relax thread tension—especially on heavier fabrics such as canvas, slightly relaxed stitches help soft goods remain supple and lie flat when folded or zipped.",
        ],
      },
      {
        heading: "Product Recommendations",
        paragraphs: [
          "Start with sashiko weight; add No. 25 only where fine detail belongs.",
        ],
        figure: {
          src: "/images/blog-sashiko-soft-goods-products-20260728.jpg",
          alt: "COSMO embroidery floss and cotton cloth stacks with gold scissors on a wooden table",
          caption:
            "hidamari® for running-stitch body; No. 25 when a small accent needs finer lines.",
          fit: "contain",
          width: 1671,
          height: 2089,
        },
        bullets: [
          "COSMO® hidamari® Sashiko Thread — 40 soft, matte colors on mini cones for traditional running stitches and textured textile projects.",
          "COSMO® No. 25 Cotton Floss — over 500 solid colors for embroidery accents, fine details, and decorative stitching.",
        ],
      },
      {
        heading: "Final Note",
        paragraphs: [
          "Sashiko began as a way to strengthen and care for cloth. Today, that same spirit continues through objects designed to be used, touched, and loved.",
          "A stitched pouch. A coaster on the table. A folded cloth resting in a basket. Each carries the rhythm of the maker’s hands.",
          "With COSMO® hidamari®, sashiko becomes more than a pattern—it becomes a quiet form of everyday beauty woven into the objects around us.",
        ],
      },
    ],
    ctaLabel: "Explore COSMO Threads",
    ctaDescription:
      "Shop COSMO® hidamari® sashiko cotton and No. 25 floss—for soft goods made to be carried, opened, and used.",
    cta: {
      label: "Shop hidamari® Sashiko",
      href: "/sashiko/hidamari-thread",
    },
  },

  {
    slug: "embroidery-lesson-eight-stitches",
    title: "Embroidery Lesson: Eight Essential Stitches with COSMO® Threads",
    excerpt:
      "Learn eight foundation stitches on a COSMO lesson sampler—then turn the same habits into a small finished motif, with an optional bridge to cross-stitch.",
    publishedAt: "2026-07-27",
    image: "/images/blog-embroidery-lesson-hero-20260727.jpg",
    imageAlt:
      "COSMO Embroidery Lesson flat lay with stitch sampler cloth, geometric flower hoop, cream teal and yellow floss, needle, and gold scissors",
    heroAspectRatio: "1 / 1",
    sections: [
      {
        paragraphs: [
          "Learn the Basics, Create Something Beautiful",
          "Embroidery begins with the simplest motions. A single line, a tiny knot, a looping curve—mastered one stitch at a time, these movements build the foundation for work you can wear, gift, or hang. COSMO threads give you a clear alphabet to practice: from a quiet sampler to a small finished motif.",
          "Start with a calm kit and a short palette. Three complementary No. 25 shades—cream, teal, and yellow—teach control, tension, and consistency without distraction.",
        ],
      },
      {
        heading: "A Calm Kit to Begin",
        paragraphs: [
          "A lesson cloth, a few skeins, needles, and a wooden hoop are enough. The point is not to own every color—it is to see each stitch clearly.",
        ],
        gallery: [
          {
            src: "/images/blog-embroidery-lesson-hero-20260727.jpg",
            alt: "Embroidery Lesson sampler with finished geometric flower hoop and three COSMO floss skeins",
            caption: "Lesson cloth beside a finished motif—practice, then apply",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-embroidery-lesson-kit-20260727.jpg",
            alt: "COSMO Embroidery Lesson kit contents: sampler fabric, dark motif cloth, floss 110 2019 2009, hoop, and needles",
            caption: "Kit overview — sampler, motif cloth, and a three-color palette",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
        bulletsLabel: "Keep the first palette small",
        bullets: [
          "COSMO® No. 25 solids in cream, teal, and yellow (or a similar quiet trio)",
          "A medium-weight lesson cloth so stitch structure stays visible",
          "A 4–6 inch wooden hoop and embroidery needles (often sizes 5–7)",
        ],
      },
      {
        heading: "The Eight Essential Stitches",
        paragraphs: [
          "Each stitch has a job—drawing a line, filling a shape, or adding texture. Work them on one lesson cloth so the page becomes a reference you keep.",
        ],
        figure: {
          src: "/images/blog-embroidery-lesson-sampler-20260727.jpg",
          alt: "COSMO Embroidery Lesson cloth showing eight labeled stitches in teal and yellow",
          caption:
            "Straight, running, back, outline, lazy daisy, chain, satin, French knot—one cloth, eight foundations.",
          fit: "contain",
          width: 1080,
          height: 1080,
        },
        bulletsLabel: "What each stitch does",
        bullets: [
          "Straight stitch — short structural lines, rays, or geometric accents; keep lengths even and tension gentle.",
          "Running stitch — dashed borders and sashiko-like rhythm; equal stitch and space for a calm beat.",
          "Backstitch — continuous crisp lines for stems, lettering, and outlines; come up one stitch ahead, then go back into the previous end.",
          "Outline stitch — smooth curves and plant stems; keep the working thread on the same side of the needle for a clean rope-like line.",
          "Lazy daisy (detached chain) — petals and teardrops; anchor each loop with a tiny stitch and avoid overtightening.",
          "Chain stitch — borders and textured lines; insert into the exact exit point so loops stay the same size.",
          "Satin stitch — solid fills with sheen; lay No. 25 strands flat, side by side, without overlap.",
          "French knot — centers, seeds, and raised dots; wrap once or twice and keep gentle off-hand tension as the needle goes through.",
        ],
      },
      {
        heading: "Sampler as Reference",
        paragraphs: [
          "As you fill the lesson cloth, watch how length, spacing, and strand count change the line. That observation becomes your personal library for later projects.",
        ],
        gallery: [
          {
            src: "/images/blog-embroidery-lesson-practice-20260727.jpg",
            alt: "Beginner embroidery practice samples with COSMO orange pink and green skeins",
            caption: "Small practice strips — tension and spacing before a finished motif",
            fit: "contain",
            width: 1000,
            height: 1250,
          },
          {
            src: "/images/blog-embroidery-lesson-tension-20260727.jpg",
            alt: "Close-up of hand stitching parallel rainbow running stitches on blue fabric",
            caption: "Even rhythm — stitch length and spacing working together",
            fit: "contain",
            width: 850,
            height: 1508,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
      },
      {
        heading: "From Sampler to Finished Motif",
        paragraphs: [
          "Carry the same habits into a small completed piece—a flower on dark cloth in a hoop, or a hand-stitched brooch. Outline for stems, lazy daisy for petals, French knots for centers: the sampler already taught the grammar.",
        ],
        gallery: [
          {
            src: "/images/blog-embroidery-lesson-brooch-20260727.jpg",
            alt: "Circular brooch with yellow and teal geometric flower embroidery on dark purple cloth",
            caption: "Finished brooch — sampler stitches at wearable scale",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-embroidery-lesson-finished-hoop-20260727.jpg",
            alt: "Wooden hoop with geometric yellow and teal flower embroidery on dark fabric",
            caption: "Hoop motif — the same stitch set, ready to display",
            fit: "contain",
            width: 1080,
            height: 720,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
        bulletsLabel: "Layer with intention",
        bullets: [
          "Structure first — outlines and stems in No. 25 solids",
          "Petals and fills — lazy daisy, satin, or chain where the design asks",
          "Accents last — French knots; optional Seasons for soft shifts, or Nishikiito® for a single gleam",
          "Scale & tension — muscle memory from the sampler keeps small motifs even",
        ],
      },
      {
        heading: "Optional: A Cross-Stitch Companion",
        paragraphs: [
          "The same discipline—consistent tension, a small palette, sample before project—transfers to counted work on Aida. A second starter path practices cross-stitch, French knot, and double cross before a tiny floral grid.",
        ],
        gallery: [
          {
            src: "/images/blog-embroidery-lesson-crossstitch-20260727.jpg",
            alt: "Cross-stitch sampler with French knot and double cross labels beside a small floral hoop and COSMO floss",
            caption: "Counted companion — sample stitches, then a small flower grid",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-embroidery-lesson-crossstitch-detail-20260727.jpg",
            alt: "Close-up of Aida sampler labeled CROSS STITCH, FRENCH KNOT, and DOUBLE CROSS",
            caption: "Labeled practice — cross, knot, and double cross on grid cloth",
            fit: "contain",
            width: 720,
            height: 777,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
      },
      {
        heading: "Materials & Tools",
        paragraphs: [
          "A short, honest kit is enough for the whole lesson arc.",
        ],
        gallery: [
          {
            src: "/images/blog-embroidery-lesson-palette-20260727.jpg",
            alt: "COSMO cross-stitch starter kit packaging with white teal and ochre No. 25 floss",
            caption: "Starter-ready — No. 25 solids, hoop, needles, and practice cloth",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-embroidery-lesson-in-progress-20260727.jpg",
            alt: "Aida cloth stack with COSMO floss skeins 100, 577A, and 536A plus hoop and needles",
            caption: "Counted kit layout — grid cloth and a three-color path",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
        bullets: [
          "COSMO® No. 25 Cotton Floss — extra-long staple cotton; smooth, soft, and easy to separate into strands",
          "COSMO® Seasons (5000 / 8000 / 9000) — self-shading variegated floss when you are ready for soft gradients",
          "COSMO® Nishikiito® Metallic Thread — optional shimmer for a single highlight after the solids are clear",
          "Hoop & needles — 4–6 inch wooden hoop; embroidery needles sized to your cloth",
          "Lesson cloth — medium-weight cotton or linen for surface practice; Aida when you bridge to counted work",
        ],
      },
      {
        heading: "Tips for a Clear Lesson",
        paragraphs: [
          "Good habits on the sampler save time on every motif that follows.",
        ],
        bullets: [
          "Limit the first palette to three or four No. 25 solids so stitch structure stays readable.",
          "Match strand count to the job—fewer strands for fine lines, more for satin fills.",
          "Press finished pieces from the back on low heat with a cloth if you add Nishikiito® later.",
          "Keep a photo or the physical sampler nearby; it is faster than relearning a stitch mid-project.",
        ],
      },
      {
        heading: "Product Recommendations",
        paragraphs: [
          "Build from solids; add variegation and metallic only when the foundation feels natural.",
        ],
        figure: {
          src: "/images/blog-embroidery-lesson-products-20260727.jpg",
          alt: "Floral heart embroidery hoop with COSMO Seasons floss skeins and ornate scissors on a wood tray",
          caption:
            "After the lesson—Seasons and specialty finishes expand what the eight stitches can say.",
          fit: "contain",
          width: 1080,
          height: 1080,
        },
        bullets: [
          "COSMO® No. 25 Cotton Floss — 500+ solid colors for clear lines, fills, and sampler work.",
          "COSMO® Seasons Variegated Floss — 140 self-shading colors across series with different change rhythms (5000 / 8000 / 9000).",
          "COSMO® Nishikiito® Metallic Thread — 33 specialty colors across five finishes for quiet sparkle.",
          "Starter and lesson kits — sampler cloth, motif fabric, hoop, and needles in one calm set.",
        ],
      },
      {
        heading: "Final Note",
        paragraphs: [
          "One lesson, eight stitches, one finished motif. COSMO threads help you build confidence, explore texture, and make something you are proud to display or wear. Master the foundation, and every later project—surface or counted—becomes more intuitive, controlled, and beautiful.",
        ],
      },
    ],
    ctaLabel: "Explore COSMO Threads",
    ctaDescription:
      "Shop COSMO® No. 25 floss, Seasons variegated colors, and Nishikiito® metallic thread—for lessons that become finished pieces.",
    cta: {
      label: "Shop COSMO Floss",
      href: "/floss",
    },
  },

  {
    slug: "framed-botanical-gallery",
    title:
      "Framed Botanical Gallery: Bringing Flowers to Your Walls with COSMO Threads",
    excerpt:
      "Turn floral embroidery into wall décor—wreaths, single blooms, herbarium labels, and landscape florals framed with COSMO® No. 25, Seasons, Nishikiito®, and hidamari®.",
    publishedAt: "2026-07-24",
    image: "/images/blog-botanical-gallery-hero-20260723.jpg",
    imageAlt:
      "Twelve wood-framed floral embroidery pieces arranged as a gallery wall of wreaths and bouquets",
    heroAspectRatio: "1 / 1",
    sections: [
      {
        paragraphs: [
          "Nature, Color, and Threaded Artistry",
          "Flowers don’t just bloom in gardens—with COSMO threads, they can thrive on your walls all year. A framed botanical gallery turns petals, herbs, and seasonal blooms into enduring artwork you can hang, rotate, and live with.",
          "From individual stems to lush wreaths and a full-season wall, the right finishes capture color, texture, and botanical detail in stitches meant to be seen.",
        ],
      },
      {
        heading: "A Gallery Wall of Blooms",
        paragraphs: [
          "Twelve frames, one idea: floral embroidery as décor. Matching wood and a calm wall let thread color and stitch texture do the talking.",
        ],
        figure: {
          src: "/images/blog-botanical-gallery-hero-20260723.jpg",
          alt: "Gallery wall of twelve matching wood-framed floral embroideries",
          caption:
            "Wreaths and bouquets in concert—solids for structure, variegation for breath, metallic only where light would catch.",
          fit: "contain",
          width: 1440,
          height: 1440,
        },
        bulletsLabel: "What a botanical wall can hold",
        bullets: [
          "Seasonal wreaths — spring roses through winter poinsettia",
          "Bouquet sets — carnations, sunflowers, morning glories, and more",
          "Single blooms — desktop frames, shelf clusters, or small gifts",
          "Herbarium & landscapes — labeled plants and floral scenery",
        ],
      },
      {
        heading: "Seasonal & Wreath Sets",
        paragraphs: [
          "Wreaths read clearly from across a room. Group a few by season—or hang a full spring-to-winter set—so the wall keeps a quiet calendar of color.",
        ],
        gallery: [
          {
            src: "/images/blog-botanical-gallery-wreaths-20260723.jpg",
            alt: "Four framed floral wreaths including roses, harvest fruit, daisies, and poinsettia",
            caption: "Season wreaths — one palette per frame",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
          {
            src: "/images/blog-botanical-gallery-bouquets-20260723.jpg",
            alt: "Four framed floral bouquet embroideries including carnations, roses, sunflowers, and morning glories",
            caption: "Bouquet set — fuller stems, same wall language",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
          {
            src: "/images/blog-botanical-gallery-winter-20260723.jpg",
            alt: "Framed winter poinsettia and pinecone wreath on a shelf with dried botanicals",
            caption: "Winter accent — poinsettia and evergreen weight",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
        bulletsLabel: "Try pairing",
        bullets: [
          "COSMO® No. 25 — crisp petal and leaf outlines",
          "COSMO® Seasons — soft shading across petals, berries, or leaves",
          "COSMO® Nishikiito® — subtle highlights for pollen, dew, or light",
          "Optional hidamari® — coarser texture for background lattice or foliage fills",
          "Display tip — neutral mats and even spacing let thread texture pop across the set",
        ],
      },
      {
        heading: "Single Blooms",
        paragraphs: [
          "One flower, one frame: ideal for a desk, a tight wall cluster, or a gift that still feels complete.",
        ],
        gallery: [
          {
            src: "/images/blog-botanical-gallery-roses-20260723.jpg",
            alt: "Framed pink and yellow rose bouquet embroidery in a pale wood frame",
            caption: "Roses — clear solids with soft Seasons breath",
            fit: "contain",
            width: 1639,
            height: 2048,
          },
          {
            src: "/images/blog-botanical-gallery-daisies-20260723.jpg",
            alt: "Framed white daisy and blue forget-me-not bouquet on blue-grey cloth",
            caption: "Daisies & forget-me-nots — fine stems, open air",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
        bulletsLabel: "Try pairing",
        bullets: [
          "No. 25 (often 2–3 strands) — fine veins, stems, and outlines",
          "Seasons — natural transitions across petals",
          "Nishikiito® — a glimmer on pollen or dew only where the eye should land",
          "Rotate singles seasonally, or mix them into a wreath wall for rhythm",
        ],
      },
      {
        heading: "Herbarium & Landscape Embroidery",
        paragraphs: [
          "Labeled herbs, meadows, and scenic florals turn a gallery into a small garden of places—structure in solids, shading in Seasons, sparkle held back for sky or frost.",
        ],
        gallery: [
          {
            src: "/images/blog-botanical-gallery-herbarium-20260723.jpg",
            alt: "Herbarium-style embroidery with Japanese plant name labels",
            caption: "Herbarium — named plants, quiet study",
            fit: "contain",
            width: 1080,
            height: 1350,
          },
          {
            src: "/images/blog-botanical-gallery-sakura-20260723.jpg",
            alt: "Framed cherry blossom landscape embroidery with arched bridge",
            caption: "Sakura landscape — bloom as place",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-botanical-gallery-fuji-20260723.jpg",
            alt: "Framed Mount Fuji and autumn maple landscape cross-stitch",
            caption: "Fuji & maple — floral scenery at landscape scale",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-botanical-gallery-meadow-20260723.jpg",
            alt: "Framed wildflower meadow with mountains under a cloudy sky",
            caption: "Meadow — wild color under open sky",
            fit: "contain",
            width: 641,
            height: 641,
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
        bulletsLabel: "Stems, scale & cloth",
        bullets: [
          "No. 25 (2–3 strands) for delicate leaf veins and fine stems",
          "hidamari® on medium-to-heavy linen or cotton canvas for woody branches or textured fills—pair with a larger needle so the cloth stays smooth",
          "Seasons for meadow and sky gradients; Nishikiito® only for a single light point if needed",
        ],
      },
      {
        heading: "Framing & Display Best Practices",
        paragraphs: [
          "How you mount the cloth matters as much as how you stitch it—especially when glass, light, and time share the wall.",
        ],
        bullets: [
          "Mount with care: stretch finished embroidery over acid-free foam board (lacing keeps tension even and avoids adhesive on stitches).",
          "Give stitches room: use a mat or frame spacers so glass does not press the thread—texture stays intact and air can move.",
          "Choose protective glass: UV-filtering glazing helps colors hold under indoor light.",
          "Place thoughtfully: keep pieces out of direct sun; rotate seasonal frames if a wall gets strong light for part of the year.",
        ],
      },
      {
        heading: "Tips for Botanical Wall Décor",
        paragraphs: [
          "A calm palette and matched thread weight keep a multi-frame wall reading as one composition.",
        ],
        bullets: [
          "Plan the palette: No. 25 for structure, Seasons for shading, Nishikiito® for rare highlights.",
          "Layer thoughtfully: hidamari® behind florals for lattice or foliage texture—not in every petal.",
          "Match scale to cloth: finer strands on tight weaves; heavier sashiko weight on more open grounds.",
          "Protect metallic: handle Nishikiito® gently; press from the back on low heat with a cloth.",
        ],
      },
      {
        heading: "Practical Display Ideas",
        paragraphs: [
          "Start with one strong frame—or build the wall in seasons.",
        ],
        gallery: [
          {
            src: "/images/blog-botanical-gallery-wreaths-b-20260723.jpg",
            alt: "Detail of framed floral wreath embroidery",
            caption: "Add frames over time",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
          {
            src: "/images/blog-botanical-gallery-bouquets-b-20260723.jpg",
            alt: "Detail of framed floral bouquet embroidery",
            caption: "Or rotate a single slot by season",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
        bullets: [
          "Gallery walls — group matching frames for a botanical exhibition",
          "Seasonal rotation — swap wreaths or singles for fresh impact",
          "Room themes — echo a framed bloom on a coaster, pillow, or tote nearby",
          "Gifting — small framed florals make personal, finished presents",
        ],
      },
      {
        heading: "Product Recommendations",
        paragraphs: [
          "A clear floral stash makes it easier to answer each bloom as you hang the next frame.",
        ],
        figure: {
          src: "/images/blog-botanical-gallery-products-20260723.jpg",
          alt: "Diagonal arrangement of COSMO Seasons variegated floss skeins in a pink-to-red gradient",
          caption:
            "Solids for structure, Seasons for petal breath, metallic for a single gleam, sashiko weight for textured fills.",
          fit: "contain",
          width: 1080,
          height: 1350,
        },
        bullets: [
          "COSMO® No. 25 Cotton Floss — 500+ solid colors for crisp lines and botanical detail.",
          "COSMO® Seasons Variegated Floss — 140 colors for soft shading and natural gradients.",
          "COSMO® Nishikiito® Metallic Thread — 33 specialty colors across five finishes for quiet sparkle.",
          "COSMO® hidamari® Sashiko Thread — 40 soft, matte colors on mini cones for lattice fills and heavier texture.",
        ],
      },
      {
        heading: "Final Note",
        paragraphs: [
          "Transform a love of flowers into lasting wall art. COSMO threads give every bloom, leaf, and herb the color, depth, and texture it deserves. Curate a gallery, combine wreaths and single stems, and let embroidery bloom year-round in your home.",
        ],
      },
    ],
    ctaLabel: "Explore COSMO Threads",
    ctaDescription:
      "Shop COSMO® No. 25 floss, Seasons variegated colors, Nishikiito® metallic thread, and hidamari® sashiko cotton—for botanicals meant to hang.",
    cta: {
      label: "Shop COSMO Floss",
      href: "/floss",
    },
  },

  {
    slug: "japanese-festival-stitching",
    title:
      "Japanese Festival Stitching (四季の祝い): Celebrating the Seasons with COSMO Threads",
    excerpt:
      "From Hina Matsuri and Children’s Day to Tanabata and Tsukimi—stitch Japan’s festival calendar with COSMO® No. 25, Seasons, Nishikiito®, and hidamari®.",
    publishedAt: "2026-07-23",
    image: "/images/blog-festival-stitching-hero-20260723.jpg",
    imageAlt:
      "Four Japanese festival embroidery hangings—Hina dolls, Tanabata bamboo, Tsukimi moon rabbits, and koinobori—with floss and gold scissors on a wooden table",
    heroAspectRatio: "640 / 547",
    imageFit: "contain",
    sections: [
      {
        paragraphs: [
          "Thread, Tradition, and the Rhythm of the Festivals",
          "Japan’s festivals are as much a celebration of color, pattern, and craft as they are of culture and community. From spring peach blossoms to summer stars, autumn moonlight, and carp streamers in the May breeze, each season carries its own symbols—and COSMO threads let you bring those traditions into embroidery you can hang, gift, or live with.",
          "Whether you’re stitching a Hina doll motif for Girls’ Day, capturing koinobori in motion, wishing under Tanabata bamboo, or marking Tsukimi’s full moon, the right finishes make every festival feel vibrant, textured, and meaningful.",
        ],
      },
      {
        heading: "A Year of Festival Motifs",
        paragraphs: [
          "One cohesive set can hold the whole calendar: Hina Matsuri, Tanabata, Tsukimi (moon viewing), and Children’s Day—four hangings, four seasons, one thread story.",
        ],
        figure: {
          src: "/images/blog-festival-stitching-hero-20260723.jpg",
          alt: "Four festival wall hangings displayed together with embroidery supplies",
          caption:
            "Hina, Tanabata, Tsukimi, and koinobori—seasonal symbols stitched to hang as a set or one festival at a time.",
          fit: "contain",
          width: 640,
          height: 547,
        },
        bulletsLabel: "The festivals in this story",
        bullets: [
          "Hina Matsuri (Girls’ Day — March 3) — dolls, peach blossoms, spring pastels",
          "Children’s Day (May 5) — koinobori carp streamers and iris",
          "Tanabata (Star Festival — July 7) — bamboo, tanzaku wishes, night sky",
          "Tsukimi (moon viewing) — full moon, rabbits, autumn grasses",
        ],
      },
      {
        heading: "Spring: Hina Matsuri (Girls’ Day)",
        paragraphs: [
          "Celebrate the blossoming of spring with delicate Hina dolls and peach blossoms. Pastels stay soft; outlines stay clear—so the courtly pair reads from across the room.",
        ],
        figure: {
          src: "/images/blog-festival-stitching-hina-20260723.jpg",
          alt: "Cross-stitch Hina dolls wall hanging with peach blossoms beside a real blossom branch",
          caption:
            "March 3—emperor and empress, lanterns, and peach blossom air in cotton and a touch of light.",
          fit: "contain",
          width: 1440,
          height: 1440,
        },
        bulletsLabel: "Try pairing",
        bullets: [
          "COSMO® No. 25 — crisp shapes for dolls, faces, and petal edges",
          "COSMO® Seasons — gentle color transitions across blossoms and kimono folds",
          "COSMO® Nishikiito® — highlights on hair ornaments, miniature crowns, or floral centers",
          "Optional hidamari® — soft running-stitch texture for a quiet background fill",
        ],
      },
      {
        heading: "Late Spring: Children’s Day (Koinobori)",
        paragraphs: [
          "Children’s Day (May 5) celebrates growth and vitality with carp streamers—koinobori—that seem to swim through the sky. Stitch for movement: bold scales, clear outlines, and a little light where water or sun would catch.",
        ],
        figure: {
          src: "/images/blog-festival-stitching-koinobori-20260723.jpg",
          alt: "Cross-stitch Children’s Day hanging with colorful koinobori carp streamers and iris",
          caption:
            "Carp in the May breeze—saturated color for scales, softer shifts for sky and cloth.",
          fit: "contain",
          width: 1440,
          height: 1440,
        },
        bulletsLabel: "Try pairing",
        bullets: [
          "No. 25 — bold, saturated scales and streamer outlines",
          "Seasons — subtle body transitions along each carp",
          "Nishikiito® — small accents for water glints or sunlight on fins",
          "Project ideas — mini wall hangings, coasters, or tote panels inspired by the festival",
        ],
      },
      {
        heading: "Summer: Tanabata (Star Festival)",
        paragraphs: [
          "On July 7, Tanabata remembers the reunion of Orihime and Hikoboshi—bamboo hung with tanzaku wish strips under a sky of stars. Deep night shades, bright paper wishes, and a sparing metallic glimmer bring Amanogawa (the Milky Way) into cloth.",
        ],
        figure: {
          src: "/images/blog-festival-stitching-tanabata-20260723.jpg",
          alt: "Cross-stitch Tanabata hanging with bamboo, colorful tanzaku wish strips, and stars on blue cloth",
          caption:
            "Bamboo, wishes, and starlight—layer solids for structure, variegation for sky, metallic for a few bright points.",
          fit: "contain",
          width: 1440,
          height: 1440,
        },
        bulletsLabel: "Try pairing",
        bullets: [
          "No. 25 — night-sky shades, bamboo outlines, and crisp tanzaku edges",
          "Seasons — soft gradients through sky or leaf",
          "Nishikiito® — glimmering stars and Milky Way highlights (use sparingly)",
          "Optional hidamari® — running-stitch texture on banners or sky pattern bands",
        ],
      },
      {
        heading: "Autumn Light: Tsukimi & Festival Nightscapes",
        paragraphs: [
          "Tsukimi (moon viewing) turns the calendar toward autumn—full moon, rabbits, and pampas grass. Pair that quiet glow with deeper night scenes: lanterns, canals, and windows lit from within.",
        ],
        figure: {
          src: "/images/blog-festival-stitching-nightscape-20260723.jpg",
          alt: "Framed nightscape cross-stitch of a snowy canal with glowing lamps and terracotta buildings",
          caption:
            "Season of light—deep night tones, then a few warm points where illumination belongs.",
          fit: "contain",
          width: 1440,
          height: 1440,
        },
        bulletsLabel: "For moon and night",
        bullets: [
          "No. 25 — moon discs, silhouettes, and architectural lines",
          "Seasons — soft shifts in sky, water, or autumn grasses",
          "Nishikiito® — lantern glow, frost, or a single star over the canal",
        ],
      },
      {
        heading: "Sashiko & Lucky Motifs",
        paragraphs: [
          "Beyond dated festivals, sashiko and folk textiles carry prosperity into the year—fans, geometry, and Shichifukujin (Seven Lucky Gods) motifs stitched in matte rhythm.",
        ],
        gallery: [
          {
            src: "/images/blog-festival-stitching-sashiko-20260723.jpg",
            alt: "White cloth with red sashiko fan motif and hanging red thread",
            caption: "Fan geometry in hidamari®",
            fit: "contain",
            width: 709,
            height: 886,
          },
          {
            src: "/images/blog-festival-stitching-sashiko-detail-20260723.jpg",
            alt: "Detail of indigo sashiko cloth with traditional lucky motifs",
            caption: "Lucky motifs on indigo",
            fit: "contain",
            width: 800,
            height: 1000,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
        bulletsLabel: "In practice",
        bullets: [
          "hidamari® for running-stitch backgrounds and clear geometric beats",
          "Nishikiito® only where a motif needs a quiet metallic highlight",
          "Ideal for wall cloths, small hangings, or festival-adjacent home décor",
        ],
      },
      {
        heading: "Temari & Thread as Celebration",
        paragraphs: [
          "Temari balls and carefully chosen palettes make festival color tangible—radial geometry, layered gradients, and skeins that already feel like a season.",
        ],
        gallery: [
          {
            src: "/images/blog-festival-stitching-temari-20260723.jpg",
            alt: "Colorful temari ball nestled in a wooden masu box",
            caption: "Temari — geometry you can hold",
            fit: "contain",
            width: 1638,
            height: 2048,
          },
          {
            src: "/images/blog-festival-stitching-temari-floss-20260723.jpg",
            alt: "COSMO floss skeins beside a temari ball in a wooden box",
            caption: "Palette beside the finished sphere",
            fit: "contain",
            width: 1638,
            height: 2048,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
        bulletsLabel: "Try pairing",
        bullets: [
          "No. 25 and Seasons for subtle color shifts across wraps and motifs",
          "Nishikiito® to accentuate edges or a single highlight ring",
        ],
      },
      {
        heading: "Practical Project Ideas",
        paragraphs: [
          "Start with one festival hanging—or stitch the year as a set.",
        ],
        bullets: [
          "Mini wall hangings for Hina, Children’s Day, Tanabata, and Tsukimi",
          "Functional décor — tote panels, pillows, or coasters with a single festival motif",
          "Gift sets — small hangings, bookmarks, or pouches tied to a date on the calendar",
          "Sashiko cloths and lucky-motif panels for year-round display",
        ],
      },
      {
        heading: "Tips for Festival Stitching",
        paragraphs: [
          "Display pieces and small gifts ask for calm planning—especially when metallic light and sashiko rhythm share the same season.",
        ],
        bullets: [
          "Plan your palette: keep No. 25 solids, Seasons gradients, hidamari® textures, and Nishikiito® accents in one cohesive festival scheme.",
          "Hang with care: magnetic hangers and even tension keep Aida panels flat on the wall.",
          "Mind the heat: press from the back on low heat with a cloth to protect Nishikiito® shine.",
          "Metallic sparingly: one or two glints read as starlight or crown light; too many compete with the motif.",
          "Sashiko tension: keep running stitches slightly relaxed on denser cloth so the fabric stays smooth.",
        ],
      },
      {
        heading: "Product Recommendations",
        paragraphs: [
          "A clear stash makes it easier to answer each festival as it arrives.",
        ],
        figure: {
          src: "/images/blog-festival-stitching-products-20260723.jpg",
          alt: "COSMO embroidery floss with cotton cloth stacks, gold scissors, and flowers on a wooden table",
          caption:
            "Solids, variegated color, metallic light, and sashiko weight—finishes for a full festival year.",
          fit: "contain",
          width: 1080,
          height: 1350,
        },
        bullets: [
          "COSMO® No. 25 Cotton Floss — 500+ solid colors for clear motifs and outlines.",
          "COSMO® Seasons Variegated Floss — 140 colors for soft gradients across sky, blossom, and scale.",
          "COSMO® Nishikiito® Metallic Thread — 33 specialty colors across five finishes for stars, crowns, and quiet sparkle.",
          "COSMO® hidamari® Sashiko Thread — 40 soft, matte colors on mini cones for geometric texture and lucky motifs.",
        ],
      },
      {
        heading: "Final Note",
        paragraphs: [
          "Japanese festivals are a celebration of color, movement, and tradition. With COSMO threads, you can capture the spirit of each season in hangings, gifts, and home pieces—one festival, one motif, one stitch at a time. Bring the rhythm of the four seasons into your hands.",
        ],
      },
    ],
    ctaLabel: "Explore COSMO Threads",
    ctaDescription:
      "Shop COSMO® No. 25 floss, Seasons variegated colors, Nishikiito® metallic thread, and hidamari® sashiko cotton—for festival motifs through the year.",
    cta: {
      label: "Shop COSMO Floss",
      href: "/floss",
    },
  },

  {
    slug: "wearable-art-home-decor",
    title: "Wearable Art & Home Décor: Bringing COSMO Threads into Everyday Life",
    excerpt:
      "Move embroidery beyond the frame—tote bags, denim sashiko, pillows, coasters, and small accessories stitched with COSMO® No. 25, Seasons, Nishikiito®, and hidamari®.",
    publishedAt: "2026-07-21",
    image: "/images/blog-wearable-decor-hero-20260721.jpg",
    imageAlt:
      "Linen tote bags and a zip pouch with black-line fashion embroidery and small accent stitches",
    heroAspectRatio: "1 / 1",
    sections: [
      {
        paragraphs: [
          "Thread, Texture, and Style Beyond the Frame",
          "Embroidery is no longer just for samplers or framed art. With COSMO threads, you can transform everyday items—fashion accessories, home accents, and functional décor—into personal, hand-stitched statements. From denim sashiko shirts to coasters and tote bags, every thread carries texture, depth, and a touch of artistry into daily life.",
          "Whether you’re adding delicate motifs, bold surface embroidery, or metallic highlights, the right threads can make ordinary objects extraordinary.",
        ],
      },
      {
        heading: "Everyday Projects, Elevated",
        paragraphs: [
          "COSMO threads are made for pieces you wear, use, and live with—not only pieces you hang. A few directions open the door:",
        ],
        figure: {
          src: "/images/blog-wearable-decor-totes-20260721.jpg",
          alt: "Embroidered linen tote with fashion-line motif and small floral accents",
          caption:
            "Functional cloth, finished with intention—embroidery that leaves the wall and enters the day.",
          fit: "contain",
          width: 1440,
          height: 1440,
        },
        bulletsLabel: "Start here",
        bullets: [
          "Fashion totes — floral, geometric, or playful motifs on cotton or linen bags.",
          "Denim sashiko — matte hidamari® running stitches on collars, cuffs, or yokes.",
          "Pillows & cushions — geometric or natural motifs with tactile depth.",
          "Coasters, pouches & small accessories — quick projects that still see everyday use.",
        ],
      },
      {
        heading: "Fashion Totes",
        paragraphs: [
          "Durable cotton or linen bags become wearable canvases. Solid shapes stay clear in No. 25; Seasons adds soft shading; Nishikiito® sparks a highlight where light should catch.",
        ],
        figure: {
          src: "/images/blog-wearable-decor-project-tote-20260721.jpg",
          alt: "Close view of embroidered fashion-figure tote with accent stitching",
          caption:
            "Layer solids for structure, variegation for breath, and metallic only where the eye should land.",
          fit: "contain",
          width: 1440,
          height: 1440,
        },
        bulletsLabel: "Try pairing",
        bullets: [
          "No. 25 for outlines, petals, and defined motifs",
          "Seasons variegated floss for gentle shading across larger shapes",
          "Nishikiito® for dew-like dots, lettering, or small sparkle accents",
        ],
      },
      {
        heading: "Denim Sashiko Shirts",
        paragraphs: [
          "Thick, matte hidamari® Sashiko thread lays traditional running-stitch rhythm across denim. Bold lines on collars, cuffs, or yokes add pattern and contemporary flair without losing the calm of sashiko’s beat.",
        ],
        figure: {
          src: "/images/blog-wearable-decor-denim-20260721.jpg",
          alt: "Denim shirt shoulder with white sashiko geometric embroidery beside blue thread spools",
          caption:
            "Sashiko on denim—geometry you can wear, stitched for rhythm as much as for look.",
          fit: "contain",
          width: 1000,
          height: 1250,
        },
        bulletsLabel: "In practice",
        bullets: [
          "Use hidamari® for soft, matte running stitches that read clearly on indigo.",
          "Keep tension slightly relaxed on heavy cloth so the fabric stays flat after washing.",
          "Optional: a whisper of Nishikiito® for evening shimmer on a cuff or yoke line.",
        ],
      },
      {
        heading: "Pillows & Cushions",
        paragraphs: [
          "Home décor asks for texture you can feel. Geometric sashiko grounds or surface motifs in No. 25 and Seasons turn a pillow into a small landscape of stitch.",
        ],
        figure: {
          src: "/images/blog-wearable-decor-pillow-20260721.jpg",
          alt: "Mustard-yellow pillow with white sashiko fan and geometric motifs on a woven chair",
          caption:
            "Background rhythm in hidamari®, motifs in solids or Seasons—depth you sit with every day.",
          fit: "contain",
          width: 800,
          height: 1000,
        },
        bulletsLabel: "Try pairing",
        bullets: [
          "hidamari® for sashiko-style background texture",
          "No. 25 solids for clear main motifs",
          "Seasons for soft gradients across larger filled areas",
        ],
      },
      {
        heading: "Coasters, Pouches & Small Accessories",
        paragraphs: [
          "Quick, functional projects let you explore color and technique while making things that leave the project bag. Coasters, mini pouches, and small sets are ideal for gifts—or for testing a palette before a larger piece.",
        ],
        gallery: [
          {
            src: "/images/blog-wearable-decor-coasters-20260721.jpg",
            alt: "Blue fabric coasters with white sashiko grid and circle patterns beside a teapot",
            caption: "Sashiko coasters — everyday geometry",
            fit: "contain",
            width: 825,
            height: 825,
          },
          {
            src: "/images/blog-wearable-decor-pouch-20260721.jpg",
            alt: "Pink and green sashiko-stitched fabric envelope pouch with tassel",
            caption: "Mini pouch — stitched and carried",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
        bulletsLabel: "Why they work",
        bullets: [
          "Small scale = faster finish and clearer learning",
          "Functional use keeps color and tension honest",
          "Perfect for gifting or for sampling a new thread finish",
        ],
      },
      {
        heading: "Bag & Hoop Sets",
        paragraphs: [
          "Display a motif on a small hoop for hanging, then echo it on a matching bag—so the same stitch story lives on the wall and on the shoulder.",
        ],
        figure: {
          src: "/images/blog-wearable-decor-bag-hoop-20260721.jpg",
          alt: "Floral and fern embroidery in a hoop resting on a matching purple embroidered bag",
          caption:
            "One motif, two lives—hoop for display, bag for daily use.",
          fit: "contain",
          width: 720,
          height: 1280,
        },
      },
      {
        heading: "Threads that Make Functional Pieces Shine",
        paragraphs: [
          "Each COSMO finish plays a different role when cloth has to move, wash, and work hard:",
        ],
        figure: {
          src: "/images/blog-wearable-decor-threads-20260721.jpg",
          alt: "Hidamari sashiko variegated thread cards scattered with colorful stitching samples",
          caption:
            "Solids for clarity, variegation for breath, sashiko weight for rhythm, metallic for a single spark.",
          fit: "contain",
          width: 1440,
          height: 1440,
        },
        bulletsLabel: "What each finish does",
        bullets: [
          "COSMO® No. 25 Cotton Floss — 500+ solid colors for clear outlines and defined motifs.",
          "COSMO® Seasons Variegated Floss — 140 self-shading colors for soft transitions and natural gradients.",
          "COSMO® Nishikiito® Metallic Thread — 33 specialty colors across five finishes for accents on lettering or highlights.",
          "COSMO® hidamari® Sashiko Thread — 40 soft, matte colors on mini cones for running-stitch geometry and texture.",
        ],
      },
      {
        heading: "Project Inspiration",
        paragraphs: [
          "Four directions keep the learning clear—and the finished piece useful.",
        ],
        gallery: [
          {
            src: "/images/blog-wearable-decor-project-tote-20260721.jpg",
            alt: "Embroidered fashion tote with line-art motif",
            caption: "1. Tote with floral or fashion motifs",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
          {
            src: "/images/blog-wearable-decor-project-denim-20260721.jpg",
            alt: "Detail of white sashiko stitching on a denim shirt",
            caption: "2. Denim sashiko shirt",
            fit: "contain",
            width: 1000,
            height: 1250,
          },
          {
            src: "/images/blog-wearable-decor-project-pillow-20260721.jpg",
            alt: "Mustard sashiko pillow with geometric motifs",
            caption: "3. Sashiko pillow",
            fit: "contain",
            width: 600,
            height: 750,
          },
          {
            src: "/images/blog-wearable-decor-project-pouch-20260721.jpg",
            alt: "Sage linen drawstring pouch with circular white-flower embroidery",
            caption: "4. Coaster, pouch, or small set",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
        bulletsLabel: "Project ideas",
        bullets: [
          "Tote bags — No. 25 petals with Seasons shading and Nishikiito® light.",
          "Denim sashiko — bold hidamari® lines on yokes or cuffs.",
          "Pillows — hidamari® ground with No. 25 or Seasons motifs.",
          "Coasters & mini pouches — small, giftable, technique-friendly.",
        ],
      },
      {
        heading: "Tips for Success",
        paragraphs: [
          "Wearable and home pieces ask for a little more planning than a hoop you never wash.",
        ],
        bullets: [
          "Plan your palette: keep No. 25 solids, Seasons gradients, hidamari® textures, and Nishikiito® accents in one cohesive scheme.",
          "Secure the back: on clothing and totes, a lightweight fusible interfacing can protect thread tails and keep the reverse comfortable against skin.",
          "Mind the heat: press finished pieces from the back on low heat with a cloth to protect Nishikiito® shine.",
          "Tension on heavy fabrics: keep sashiko stitches slightly relaxed on denim or canvas so the cloth stays flat after laundering.",
        ],
      },
      {
        heading: "Practical Storage & Tools",
        paragraphs: [
          "Keep finishes separated so wearable and home projects stay easy to pick up again.",
        ],
        bullets: [
          "Floss boxes or bobbins for No. 25 and Seasons",
          "Mini cones or small bins for hidamari® Sashiko thread",
          "Spool racks for Nishikiito® metallic threads",
          "Zip pouches for project-specific threads or small accessories",
        ],
      },
      {
        heading: "Product Recommendations",
        paragraphs: [
          "A clear stash makes everyday stitching easier to start—and easier to finish.",
        ],
        figure: {
          src: "/images/blog-wearable-decor-products-20260721.jpg",
          alt: "COSMO embroidery floss in a clear retail rack showing red and orange shades",
          caption:
            "Solids, variegated, metallic, and sashiko cotton—finishes ready for cloth you live with.",
          fit: "contain",
          width: 1080,
          height: 1440,
        },
        bullets: [
          "COSMO® No. 25 Cotton Floss — 500+ solid colors for clear motifs on bags, linens, and apparel.",
          "COSMO® Seasons Variegated Floss — 140 subtle color shifts for gradient and shading effects.",
          "COSMO® Nishikiito® Metallic Thread — 33 specialty colors across five finishes for quiet sparkle on wearable accents.",
          "COSMO® hidamari® Sashiko Thread — 40 soft, matte colors on mini cones for denim, pillows, and geometric texture.",
          "Storage accessories — bobbins, boxes, and cone-friendly organizers for mixed-finish projects.",
        ],
      },
      {
        heading: "Final Note",
        paragraphs: [
          "Every stitch is an opportunity to turn the ordinary into something personal. With COSMO threads, you can create functional, beautiful items that carry color, texture, and artistry into daily life—whether on your shoulder, at your table, or displayed in your home. Threads that are used, loved, and seen: that is wearable art and practical beauty in one.",
        ],
      },
    ],
    ctaLabel: "Explore COSMO Threads",
    ctaDescription:
      "Shop COSMO® No. 25 floss, Seasons variegated colors, Nishikiito® metallic thread, and hidamari® sashiko cotton—for pieces you wear, use, and live with.",
    cta: {
      label: "Shop COSMO Floss",
      href: "/floss",
    },
  },

  {
    slug: "patterns-from-the-past",
    title:
      "Patterns from the Past: Historical Embroidery Traditions That Inspire Today",
    excerpt:
      "From sashiko and Hardanger to Tatreez and folk cross-stitch—explore how historical techniques still shape modern stitching, and how COSMO® threads help you reinterpret them today.",
    publishedAt: "2026-07-20",
    image: "/images/blog-patterns-past-hero-20260720.jpg",
    imageAlt:
      "Framed wildflower embroidery sampler grid with botanical motifs on a gallery wall",
    heroAspectRatio: "1 / 1",
    sections: [
      {
        paragraphs: [
          "Timeless Techniques, Modern Threads",
          "Embroidery is a thread through history—literally. Across continents and centuries, stitchers have developed unique techniques, patterns, and motifs that express culture, skill, and creativity. Today, COSMO threads let you bring these historical traditions into your own projects, blending ancient inspiration with modern color, texture, and materials.",
          "Whether you’re exploring counted stitches, decorative motifs, or sashiko-style running stitches, the threads you choose can bring centuries of craftsmanship alive in your hands.",
        ],
      },
      {
        heading: "A Global Tapestry of Stitch Traditions",
        paragraphs: [
          "From Japan to Northern and Eastern Europe to the Middle East, traditional embroidery styles vary widely—but all share one thing: the love of thread, texture, and storytelling.",
        ],
        figure: {
          src: "/images/blog-patterns-past-tapestry-20260720.jpg",
          alt: "Circular floral wreath embroidery with pink and purple blooms in a wooden hoop",
          caption:
            "Across cultures, stitch traditions turn thread into story—on cloth meant to be lived with, mended, and passed on.",
          fit: "contain",
          width: 1080,
          height: 1080,
        },
      },
      {
        heading: "Japan — Sashiko and Hitomezashi",
        paragraphs: [
          "Thick, matte cotton running stitches create geometric patterns on cotton or linen. Often used for mending or decoration, sashiko emphasizes repetition and rhythm.",
        ],
        figure: {
          src: "/images/blog-patterns-past-japan-20260720.jpg",
          alt: "Pair of sashiko wall hangings with crane, fan, and geometric motifs",
          caption:
            "Sashiko’s beauty is in the beat of the stitch—geometry born from patience, not haste.",
          fit: "contain",
          width: 815,
          height: 815,
        },
        bulletsLabel: "In practice",
        bullets: [
          "Use COSMO® hidamari® Sashiko Thread—40 soft, matte colors on mini cones—for classic geometric textures.",
          "Keep tension steady so the matte cotton line stays even across the cloth.",
          "Let repetition do the work: rhythm matters more than speed.",
        ],
      },
      {
        heading: "Northern & Eastern Europe — Hardanger and Folk Cross-Stitch",
        paragraphs: [
          "Norwegian Hardanger (Northern Europe / Scandinavia) features geometric cutwork and pulled-thread motifs, while Hungarian and Slavic traditions are famous for bold, repeated folk cross-stitch patterns.",
        ],
        figure: {
          src: "/images/blog-patterns-past-europe-20260720.jpg",
          alt: "Quilted patchwork shoulder bag with embroidered village scene, birds, and floral wreath",
          caption:
            "Folk embroidery thrives on story and repetition—motifs that feel like memory made visible.",
          fit: "contain",
          width: 1080,
          height: 1080,
        },
        bulletsLabel: "In practice",
        bullets: [
          "Reach for COSMO® No. 25 Floss when counted solids need clear color blocks.",
          "Add Nishikiito® Metallic Thread sparingly for shimmer once reserved for gilded borders.",
          "Keep Hardanger geometry crisp; let folk repeats stay bold and readable.",
        ],
      },
      {
        heading: "Middle East — Counted Motifs and Metallic Couching",
        paragraphs: [
          "Traditional Middle Eastern embroidery, such as Palestinian Tatreez, relies on symbolic geometric motifs and rich threadwork—ornament and language in the same stitch.",
        ],
        figure: {
          src: "/images/blog-patterns-past-middle-east-20260720.jpg",
          alt: "Beige drawstring bag with black diamond geometric embroidery worn over a blue dress",
          caption:
            "Counted geometry—diamonds, grids, and repeats—carries meaning the way Tatreez motifs do on cloth.",
          fit: "contain",
          width: 1080,
          height: 1350,
        },
        bulletsLabel: "In practice",
        bullets: [
          "COSMO® Seasons Variegated Floss can suggest the organic color shifts of historically dyed threads.",
          "Nishikiito® Metallic Threads add gold-couched elegance on borders, lettering, or central motifs.",
          "Let placement carry meaning—color and shape are part of the story.",
        ],
      },
      {
        heading: "Bringing Historical Patterns into Modern Projects",
        paragraphs: [
          "Using COSMO threads, historical stitches can be adapted for contemporary work—walls, linens, and small wearable pieces alike.",
        ],
        figure: {
          src: "/images/blog-patterns-past-modern-20260720.jpg",
          alt: "Raised botanical rose and bee embroidery on a yellow wall",
          caption:
            "Old techniques, new settings—motifs that once lived in samplers can inhabit rooms and everyday objects.",
          fit: "contain",
          width: 1440,
          height: 1440,
        },
        bulletsLabel: "Try this",
        bullets: [
          "Sampler walls: Combine motifs from different traditions—Blackwork florals beside Hardanger-inspired geometry—using coordinating COSMO colors.",
          "Home décor accents: Apply Tatreez-inspired or Hardanger-inspired techniques on table linens, pillow covers, or wall hangings with hidamari® or Seasons.",
          "Mini motifs & jewelry: Tiny cross-stitch or surface embroidery can become pendants, brooches, or charms, with Nishikiito® for historical sparkle.",
        ],
      },
      {
        heading: "Thread Pairing Tips",
        paragraphs: [
          "Historical textures often came from mixing finishes—matte cotton beside a glint of metal, solid color beside a soft shift in dye.",
        ],
        figure: {
          src: "/images/blog-patterns-past-pairing-20260720.jpg",
          alt: "Six COSMO Seasons variegated floss skeins on floral print fabrics",
          caption:
            "Solids for structure, variegation for breath—pair finishes the way historical cloth paired dye and light.",
          fit: "contain",
          width: 1080,
          height: 1349,
        },
        bulletsLabel: "Pairing tips",
        bullets: [
          "Layer No. 25 solids with Seasons variegated for depth in geometric or floral motifs.",
          "Use Nishikiito® metallic threads sparingly to highlight borders, lettering, or central motifs.",
          "Add hidamari® behind or beneath patterns for texture reminiscent of traditional sashiko, or as a subtle background fill.",
        ],
      },
      {
        heading: "Project Ideas",
        paragraphs: [
          "Start small when a tradition is new to your hands. These four directions keep the learning clear—and the finished piece useful.",
        ],
        bulletsLabel: "Project ideas",
        bullets: [
          "Japanese sashiko coaster set — hidamari® on small linens with repeating geometry.",
          "Blackwork-inspired sampler bookmark — a small motif in vibrant No. 25 for a modern twist.",
          "Hardanger-inspired table runner — pulled-thread-inspired structure with Seasons shading and metallic light.",
          "Jewelry and miniatures — amulet-scale embroidery with Nishikiito® accents.",
        ],
        gallery: [
          {
            src: "/images/blog-patterns-past-project-sashiko-20260720.jpg",
            alt: "Hand-stitched sashiko fabric coasters with geometric motifs",
            caption: "Sashiko coasters — hidamari® geometry",
            fit: "contain",
            width: 720,
            height: 720,
          },
          {
            src: "/images/blog-patterns-past-project-blackwork-20260720.jpg",
            alt: "Multicolor geometric mandala embroidery in a hoop",
            caption: "Sampler motif — counted clarity in No. 25",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-patterns-past-project-hardanger-20260720.jpg",
            alt: "Gray zippered pouch with white botanical vine embroidery",
            caption: "Linen accent — décor-scale historical texture",
            fit: "contain",
            width: 600,
            height: 600,
          },
          {
            src: "/images/blog-patterns-past-project-jewelry-20260720.jpg",
            alt: "Embroidery hoop with line-art girl holding a crochet flower beside a crochet daisy in a wooden pot",
            caption: "Wearable & mini scale — small motifs with historic sparkle",
            fit: "contain",
            width: 1638,
            height: 2048,
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
      },
      {
        heading: "Practical Advice",
        paragraphs: [
          "New techniques reward patience more than perfection. A few habits keep historical styles readable—and enjoyable—on modern cloth.",
        ],
        bullets: [
          "Start with a small motif if you are exploring a new historical technique.",
          "Use even-weave or Aida fabric for counted styles to maintain accuracy.",
          "Separate metallic strands for fine details to prevent snagging.",
          "Keep threads organized by color and finish—COSMO storage solutions help when you mix traditions.",
        ],
      },
      {
        heading: "Product Recommendations",
        paragraphs: [
          "When tradition meets a modern stash, clarity of finish matters as much as color.",
        ],
        figure: {
          src: "/images/blog-patterns-past-products-20260720.jpg",
          alt: "Retail bins filled with color-sorted COSMO embroidery floss skeins",
          caption:
            "A clear palette—solids, variegated, metallic, sashiko—makes historical mixing feel intentional.",
          fit: "contain",
          width: 1080,
          height: 1350,
        },
        bullets: [
          "COSMO® No. 25 Cotton Floss — 500+ solid colors for counted stitches and sampler work.",
          "COSMO® Seasons Variegated Floss — 140 subtle color shifts for gradient and shading effects.",
          "COSMO® Nishikiito® Metallic Thread — 33 specialty colors across five finishes for historical sparkle and quiet accents.",
          "COSMO® hidamari® Sashiko Thread — 40 soft, matte colors (solids and variegated) on mini cones for traditional Japanese geometric textures.",
          "Storage accessories — bobbins, boxes, and cone-friendly organizers to keep mixed traditions tidy.",
        ],
      },
      {
        heading: "Final Note",
        paragraphs: [
          "Historical embroidery traditions are more than patterns; they are stories woven into thread and cloth. COSMO threads allow you to recreate, reinterpret, and modernize these techniques, bringing centuries of craft into contemporary projects. One thread, one stitch, one motif at a time—the past can live again in your hands.",
        ],
      },
    ],
    ctaLabel: "Explore COSMO Threads",
    ctaDescription:
      "Shop COSMO® No. 25 floss, Seasons variegated colors, Nishikiito® metallic thread, and hidamari® sashiko cotton—tools for bringing historical stitch languages into modern work.",
    cta: {
      label: "Shop COSMO Floss",
      href: "/floss",
    },
  },

  {
    slug: "thread-care",
    title: "Thread Care: Keeping Your COSMO Threads Beautiful",
    excerpt:
      "Preserve color, strength, and shine in every skein. Simple habits for storing, handling, and protecting COSMO® No. 25, Seasons, Nishikiito®, and hidamari® so they stay ready for your next project.",
    publishedAt: "2026-07-17",
    image: "/images/blog-thread-care-hero-v2-20260717.jpg",
    imageAlt:
      "Hands stitching a mimosa embroidery with yellow French knots, scissors, and botanical pieces nearby",
    heroAspectRatio: "1038 / 1297",
    sections: [
      {
        paragraphs: [
          "Preserve Color, Strength, and Shine in Every Skein",
          "Embroidery and thread projects are made to last, but even the finest thread needs care. COSMO threads—No. 25 cotton, variegated Seasons, Nishikiito metallic, and hidamari® Sashiko—are crafted in Japan for longevity and beauty. With proper storage, handling, and maintenance, your threads can stay vibrant, tangle-free, and ready for your next creative project.",
        ],
      },
      {
        heading: "Why Thread Care Matters",
        paragraphs: [
          "Threads can suffer from fading, fraying, tangles, and the quiet wear of dust or moisture. A few thoughtful habits keep every skein, cone, and metallic spool as beautiful as the day it came out of the box—so finished pieces can stay bright on the wall for years.",
        ],
        bullets: [
          "Fading or color change from sunlight or improper storage",
          "Fraying or splitting during stitching, especially with fine strands",
          "Tangles and knots that slow stitching and damage fibers",
          "Dust or moisture that affects sheen and hand feel",
        ],
        figure: {
          src: "/images/blog-thread-care-why-care-v3-20260717.jpg",
          alt: "Gallery wall of framed botanical embroideries including daisy, helleborus, viola, clover, and poppy",
          caption:
            "Well-kept threads keep color true—so finished work stays vivid long after the last stitch.",
          fit: "contain",
          width: 1500,
          height: 1875,
        },
      },
      {
        heading: "Organizing and Storing Threads",
        paragraphs: [
          "COSMO threads come in a variety of formats—skeins, pre-cut lengths, cones, and metallic spools. Each deserves a slightly different approach.",
        ],
      },
      {
        heading: "No. 25 Floss",
        paragraphs: [
          "Solid No. 25 is the workhorse of most stitch baskets. Keep it sorted, labeled, and protected from light so color families stay clear and skeins stay neat.",
        ],
        bulletsLabel: "Care tips",
        bullets: [
          "Storage: Wind skeins onto bobbins or keep in original packaging.",
          "Organization: Use a floss box or labeled divider for easy selection.",
          "Tip: Keep skeins separated by color family to avoid tangling and color confusion.",
        ],
        figure: {
          src: "/images/blog-thread-care-no25-v2-20260717.jpg",
          alt: "COSMO No. 25 embroidery floss color chart showing rows of solid colors",
          caption: "No. 25 — bobbins, boxes, and clear color groups keep solids ready to stitch.",
          fit: "contain",
          width: 4000,
          height: 1463,
        },
      },
      {
        heading: "COSMO Seasons Variegated Floss",
        paragraphs: [
          "Subtle color gradations are part of what makes Seasons special. Avoid tightly compressing skeins so the strand stays smooth and the shading easy to read.",
        ],
        bulletsLabel: "Care tips",
        bullets: [
          "Storage: Because subtle color gradations matter, avoid tightly compressing skeins.",
          "Tip: Store flat or loosely coiled to prevent flattening and preserve smooth shading.",
        ],
        figure: {
          src: "/images/blog-thread-care-seasons-20260717.jpg",
          alt: "COSMO Seasons variegated embroidery floss skeins showing soft color shifts",
          caption:
            "Seasons — store flat or loosely coiled so variegation stays clear and uncompressed.",
          fit: "contain",
          width: 1000,
          height: 1000,
        },
      },
      {
        heading: "Nishikiito Metallic Thread",
        paragraphs: [
          "Metallic finishes love gentle handling. Keep spools secure, away from rough edges, and use only the strands you need.",
        ],
        bulletsLabel: "Care tips",
        bullets: [
          "Storage: Spools should remain in original packaging or thread holders to prevent unravelling.",
          "Tip: Metallic finishes can snag; always keep away from rough surfaces or abrasive containers.",
          "Strand handling: Some finishes are fine and delicate—use only the number of strands needed and handle gently.",
        ],
        figure: {
          src: "/images/blog-thread-care-nishikiito-v2-20260717.jpg",
          alt: "COSMO Nishikiito metallic embroidery thread spools in a full product arrangement",
          caption:
            "Nishikiito — protect spools from snags so metallic shine stays clean and bright.",
          fit: "contain",
          width: 3337,
          height: 5000,
        },
      },
      {
        heading: "hidamari® Sashiko Thread",
        paragraphs: [
          "Cone-wound sashiko cotton wants steady tension and upright storage so the soft matte finish stays intact from the first yard to the last.",
        ],
        bulletsLabel: "Care tips",
        bullets: [
          "Storage: Cones are best stored vertically or in small bins to keep threads from unwinding.",
          "Tip: Avoid pulling too aggressively; smooth, steady tension preserves the soft matte finish.",
        ],
        figure: {
          src: "/images/blog-thread-care-hidamari-v2-20260717.jpg",
          alt: "COSMO hidamari sashiko thread cards in pink shades on white retail packaging",
          caption:
            "hidamari — keep cones upright and pull with steady tension to protect the matte hand.",
          fit: "contain",
          width: 1440,
          height: 1800,
        },
      },
      {
        heading: "Maintaining Threads During Use",
        paragraphs: [
          "How you handle thread at the needle matters as much as how you store it on the shelf.",
        ],
        figure: {
          src: "/images/blog-thread-care-handling-v2-20260717.jpg",
          alt: "Finished floral embroidery boards and a work-in-progress with a loop of variegated thread on a wooden table",
          caption:
            "Clean hands, gentle tension, and short working lengths keep fibers smooth while you stitch.",
          fit: "contain",
          width: 1080,
          height: 1350,
        },
        bulletsLabel: "Handling tips",
        bullets: [
          "Wash hands before stitching to prevent oils or dirt transferring to threads.",
          "Avoid pulling threads too hard—this can stretch or distort fibers.",
          "For metallic threads (Nishikiito), consider threading a needle through a threader to reduce friction.",
        ],
      },
      {
        heading: "Preventing Tangling",
        paragraphs: [
          "Most tangles start with too much length or too much twist. Keep working lengths short and strands calm.",
        ],
        bullets: [
          "Pull only the length needed for each project.",
          "For long threads, gently loop or coil before use.",
          "Keep threads separated and avoid twisting multiple strands together unnecessarily.",
        ],
      },
      {
        heading: "Preserving Color and Luster",
        paragraphs: [
          "Light, moisture, and dust are the quiet enemies of color and shine. A cool, dry, dark home for your stash does most of the work.",
        ],
        bullets: [
          "Store threads in a cool, dry, dark place away from direct sunlight.",
          "Avoid exposure to moisture or high humidity, especially for cotton threads.",
          "Metallic threads benefit from storage in dust-free containers to maintain shine.",
        ],
        figure: {
          src: "/images/blog-thread-care-preserve-v2-20260717.jpg",
          alt: "Framed botanical embroidery of pansy, viola, asperula, and hesperis with small stitched bees",
          caption:
            "Protect color from light and humidity so fine detail—and soft sheen—stay true over time.",
          fit: "contain",
          width: 1471,
          height: 1839,
        },
      },
      {
        heading: "Advanced Tips for Multi-Thread Projects",
        paragraphs: [
          "Layering No. 25, Seasons, Nishikiito, and hidamari opens texture and depth—if each thread is handled on its own terms until it meets the needle.",
        ],
        bullets: [
          "Layer No. 25 cotton, Seasons variegated, and Nishikiito metallic to create texture, depth, and shimmer.",
          "When combining threads, keep metallic strands separate until ready to stitch, to avoid fraying.",
          "Use hidamari® behind or beneath other threads for subtle texture in sashiko or large motifs.",
        ],
      },
      {
        heading: "Practical Storage Solutions",
        paragraphs: [
          "The best storage is the setup you’ll actually use—clear labels, separated finishes, and a place for every format.",
        ],
        bullets: [
          "Floss boxes and dividers: perfect for organizing multiple skeins.",
          "Thread cone bins: vertical storage to keep cones upright.",
          "Spool racks: ideal for Nishikiito and other metallic threads.",
          "Zip pouches or small containers: convenient for kits or project-specific thread sets.",
        ],
        figure: {
          src: "/images/blog-thread-care-storage-v3-20260717.jpg",
          alt: "Framed embroidery of a wildflower bouquet in a stitched pitcher outline with a small bee",
          caption:
            "Label by color, finish, and type—it speeds setup and keeps every project ready to stitch.",
          fit: "contain",
          width: 1239,
          height: 1549,
        },
      },
      {
        heading: "Preserve Your Threads, Enhance Your Work",
        paragraphs: [
          "Every COSMO thread is designed to last—but thoughtful care and organization ensure that the thread you love today will still stitch beautifully tomorrow. By storing properly, handling gently, and protecting from light, moisture, and tangling, you maintain the vibrant color, soft texture, and smooth stitching experience COSMO threads are known for.",
        ],
      },
      {
        heading: "Product Recommendations",
        paragraphs: [
          "Build a stash that is easy to care for—and easy to reach when you are ready to stitch.",
        ],
        bullets: [
          "COSMO® No. 25 Cotton Floss — over 500 colors, ideal for cross-stitch, surface embroidery, and thread crochet.",
          "COSMO® Seasons Variegated Floss — 140 shades for subtle color shifts and shading effects.",
          "COSMO® Nishikiito® Metallic Thread — 48 colors across five finishes for sparkle and highlights.",
          "COSMO® hidamari® Sashiko Thread — 60 colors on cones for texture and sashiko applications.",
          "Storage accessories — floss boxes, bobbins, thread racks, and zip pouches for organized stitching.",
        ],
        figure: {
          src: "/images/blog-thread-care-products-v2-20260717.jpg",
          alt: "Small crocheted bunny in a woven nest with flowers, made with fine COSMO thread",
          caption:
            "From embroidery to thread crochet—cared-for COSMO cotton stays soft, strong, and ready to stitch.",
          fit: "contain",
          width: 1639,
          height: 2048,
        },
      },
      {
        heading: "Final Note",
        paragraphs: [
          "Caring for your threads is more than a habit—it’s part of the artistry. Threads that are well-maintained allow your projects to shine, create less frustration, and last for years. With COSMO threads, every skein, cone, and spool is an opportunity to make something beautiful—and keep it beautiful.",
        ],
      },
    ],
    ctaLabel: "Explore COSMO Threads",
    ctaDescription:
      "Shop COSMO® No. 25 floss, Seasons variegated colors, Nishikiito metallic thread, hidamari sashiko cotton, and the tools that help you keep every skein ready to stitch.",
    cta: {
      label: "Shop COSMO Floss",
      href: "/floss",
    },
  },

  {
    slug: "seasonal-projects",
    title: "Seasonal Projects: Bringing COSMO Threads to Life",
    excerpt:
      "Each season carries its own palette and mood. Discover how COSMO® No. 25, Seasons, Nishikiito®, and hidamari® help you stitch spring blossoms, summer light, autumn warmth, and winter sparkle.",
    publishedAt: "2026-07-16",
    image: "/images/blog-seasonal-projects-hero-v3-20260716.jpg",
    imageAlt:
      "Framed COSMO embroidery of cherry blossoms and a bridge over water in spring",
    heroAspectRatio: "1 / 1",
    sections: [
      {
        paragraphs: [
          "Color, Texture, and Tradition in Every Stitch",
          "Each season carries its own palette, mood, and inspiration. From spring blossoms to winter frost, COSMO threads let you translate the look of the year into handmade projects—cross-stitch, surface embroidery, sashiko, and small crochet accents alike.",
          "Whether you're stitching a delicate floral, working a sashiko square, or adding shine to a festive motif, the right thread brings a seasonal vision into the work.",
        ],
      },
      {
        heading: "Threads that Celebrate the Seasons",
        paragraphs: [
          "COSMO threads give you different kinds of seasonal expression—solid color, self-shading variegation, metallic light, and sashiko-weight cotton—each made in Japan and designed to play well together.",
        ],
        bullets: [
          "COSMO® No. 25 cotton floss — 500 solid colors for petals, foliage, summer skies, fruit, frost, and everything in between.",
          "COSMO® Seasons variegated floss — 140 self-shading colors whose gentle shifts suggest changing leaves, dawn skies, water, and soft gradients.",
          "COSMO® Nishikiito® metallic thread — 48 colors across five finishes for snow highlights, stars, lettering, and festive sparkle.",
          "COSMO® hidamari® Sashiko thread — 60 colors of soft, smooth cotton on cones for sashiko texture, coasters, and warm or bright seasonal accents.",
        ],
        gallery: [
          {
            src: "/images/blog-seasonal-projects-floss-chart-v3-20260716.jpg",
            alt: "Hands holding a bouquet-like bundle of multicolor COSMO embroidery floss skeins",
            caption: "No. 25 — a full-year palette in your hands",
            fit: "contain",
            width: 987,
            height: 987,
          },
          {
            src: "/images/blog-seasonal-projects-seasons-v3-20260716.jpg",
            alt: "COSMO botanical embroidery kits with solid and variegated floss skeins on cream and tan fabric",
            caption: "Seasons — variegation beside solid No. 25",
            fit: "contain",
            width: 1080,
            height: 1350,
          },
          {
            src: "/images/blog-seasonal-projects-nishikiito-v3-20260716.jpg",
            alt: "Crocheted sakura blossom earrings with green beads and gold findings",
            caption: "Small accents — sakura in thread",
            fit: "contain",
            width: 1224,
            height: 1530,
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
      },
      {
        paragraphs: [
          "Each thread works on its own. Layered together—solid floss with Seasons, a touch of Nishikiito, or hidamari for sashiko weight—they add depth, texture, and seasonal flair.",
        ],
        figure: {
          src: "/images/blog-seasonal-projects-hidamari-v3-20260716.jpg",
          alt: "Small linen gift wrap embroidered with yellow mimosa and tied with a brown cord bow",
          caption:
            "Finished seasonal pieces—small gifts and accessories that carry color through the year.",
          fit: "contain",
          width: 1454,
          height: 1818,
        },
      },
      {
        heading: "Spring: Blooming Gardens",
        paragraphs: [
          "Bring flowers and greenery forward with fresh pinks, soft greens, and a little variegation. Solid No. 25 defines petals and leaves; Seasons adds gentle color transitions; Nishikiito sparks centers, dew, and script accents; hidamari can carry sashiko texture beside floral work.",
        ],
        bulletsLabel: "Try pairing",
        bullets: [
          "No. 25 floss for petals, stems, and leaves",
          "Seasons variegated floss for soft blossom-to-bud transitions",
          "Nishikiito for metallic centers or shimmer on lettering",
          "hidamari for sashiko texture behind or beside floral work",
        ],
        gallery: [
          {
            src: "/images/blog-seasonal-projects-spring-a-v3-20260716.jpg",
            alt: "Close-up cross-stitch of cherry blossoms on a branch against a bright blue sky",
            caption: "Spring blossoms — sakura detail in No. 25",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
          {
            src: "/images/blog-seasonal-projects-spring-b-v3-20260716.jpg",
            alt: "Framed embroidery of a girl stitching pansies among garden flowers and birds on navy fabric",
            caption: "Garden frame — spring story on the wall",
            fit: "contain",
            width: 1638,
            height: 2048,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
      },
      {
        heading: "Summer: Sun, Sky, and Sea",
        paragraphs: [
          "Summer asks for clearer, brighter color—wildflowers, sunflowers, open skies, and garden light. Reach for vivid No. 25 solids and Seasons blues and greens for water or cloud shading.",
        ],
        bulletsLabel: "Project ideas",
        bullets: [
          "Bright floral embroidery and summer garden motifs",
          "Alpine and meadow color stories in solid No. 25",
          "Sunflower frames and high-summer florals",
          "Sea- and sky-inspired shading with Seasons",
        ],
        gallery: [
          {
            src: "/images/blog-seasonal-projects-summer-a-v3-20260716.jpg",
            alt: "Landscape embroidery of alpine wildflowers under open summer sky",
            caption: "Summer light — wildflowers and open air",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
          {
            src: "/images/blog-seasonal-projects-summer-b-v3-20260716.jpg",
            alt: "Framed cross-stitch bouquet of bright yellow sunflowers with purple accents",
            caption: "Sunflower frame — high summer color",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
      },
      {
        heading: "Autumn: Falling Leaves and Cozy Warmth",
        paragraphs: [
          "Autumn is depth—maple reds, pumpkin orange, and landscapes that lean into gold and rust. Start from a warm No. 25 palette; Seasons variegated floss is especially useful for leaf shading that turns as you stitch.",
        ],
        bulletsLabel: "Project ideas",
        bullets: [
          "Warm autumn floss palettes for maple and harvest motifs",
          "Landscape embroidery with turning leaves",
          "Variegated leaf shading with Seasons",
          "Gift-tag and packaging embellishments",
        ],
        gallery: [
          {
            src: "/images/blog-seasonal-projects-autumn-a-v3-20260716.jpg",
            alt: "COSMO No. 25 floss skeins in yellow through burgundy arranged with maple leaves and a pumpkin",
            caption: "Autumn palette — gold to burgundy in No. 25",
            fit: "contain",
            width: 1638,
            height: 2047,
          },
          {
            src: "/images/blog-seasonal-projects-autumn-b-v3-20260716.jpg",
            alt: "Framed cross-stitch of Mount Fuji with red maple leaves against a pale blue sky",
            caption: "Maple over Fuji — autumn landscape stitching",
            fit: "contain",
            width: 1080,
            height: 1080,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
      },
      {
        heading: "Winter: Frost, Snow, and Festivities",
        paragraphs: [
          "Winter invites festive reds, evergreen greens, and ornament- or tree-scale embroidery you can hang or gift. Outline stitch captures detail; Nishikiito adds optional sparkle on lettering or snow accents.",
        ],
        bulletsLabel: "Project ideas",
        bullets: [
          "Holiday ornament embroidery for gifts and trees",
          "Christmas-tree wall hangings and festive frames",
          "Festive metallic accents on cotton floss",
          "Small frames and ornaments for cold-season color",
        ],
        gallery: [
          {
            src: "/images/blog-seasonal-projects-winter-a-v3-20260716.jpg",
            alt: "Two embroidered holiday ornaments hanging from a small evergreen beside metallic thread",
            caption: "Winter ornaments — festive figures on linen",
            fit: "contain",
            width: 960,
            height: 960,
          },
          {
            src: "/images/blog-seasonal-projects-winter-b-v3-20260716.jpg",
            alt: "Cross-stitch Christmas tree wall hanging above books, milk, and fairy lights",
            caption: "Tree hanging — festive color for the wall",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
      },
      {
        heading: "Tips for Seasonal Success",
        paragraphs: [
          "A few habits make seasonal stitching look intentional—without turning the palette into a puzzle.",
        ],
        figure: {
          src: "/images/blog-seasonal-projects-supplies-v3-20260716.jpg",
          alt: "COSMO embroidery floss cards with figures and a threaded needle",
          caption: "Start simple: thread, needle, and a small seasonal motif.",
          fit: "contain",
          width: 721,
          height: 716,
        },
        bullets: [
          "Combine threads: solid No. 25 for structure, Seasons for movement, Nishikiito for light, hidamari when you want sashiko weight and texture.",
          "Use complementary palettes: Seasons is designed to sit beside COSMO solid No. 25, and Nishikiito is meant as an accent alongside cotton floss.",
          "Vary stitch types: cross-stitch for detail, running stitch or sashiko for texture, and small thread-crochet accents when you want dimension.",
          "Start from a kit when you want a curated path: COSMO Flower's Calendar kits, Sparkling Japanese Seasons cross-stitch kits, and hidamari sashiko kits package colors and instructions for finished seasonal pieces.",
        ],
      },
      {
        heading: "Bring the Seasons to Your Hands",
        paragraphs: [
          "Every COSMO thread can help capture the feeling of a season in your work. Pick a palette, choose your stitches, and make pieces that celebrate the colors, light, and textures of the year—one season at a time, or all four on the wall.",
        ],
      },
    ],
    ctaLabel: "Explore COSMO Threads",
    ctaDescription:
      "Shop COSMO® No. 25 floss, Seasons variegated colors, Nishikiito metallic thread, hidamari sashiko cotton, and project kits for seasonal stitching.",
    cta: {
      label: "Shop COSMO Floss",
      href: "/floss",
    },
  },

  {
    slug: "crochet-with-floss",
    title: "Crochet with Floss: Lace and Color from a Single Skein",
    excerpt:
      "Six strands of cotton, one small hook. Discover how COSMO® No. 25 floss becomes fine thread crochet—delicate lace, motifs, and miniatures drawn from a line of over 500 solid colors.",
    publishedAt: "2026-07-14",
    image: "/images/blog-crochet-with-floss-hero-20260714.jpg",
    imageAlt:
      "Six food-themed mini pouches crocheted with COSMO embroidery floss, arranged in pink boxes on vintage books",
    heroAspectRatio: "1 / 1",
    sections: [
      {
        paragraphs: [
          "Most people meet crochet as a yarn craft—blankets, hats, chunky stitches on a large hook. But long before acrylic yarn, crocheters worked in thread: fine cotton on a slim steel hook, turning a single strand into lace, edgings, and motifs no wider than a coin.",
          "That tradition is very much alive, and it starts with something you may already have in your basket—a skein of COSMO® embroidery floss.",
        ],
      },
      {
        heading: "What \"Crochet with Floss\" Means",
        paragraphs: [
          "Thread crochet uses the same stitches as regular crochet—chain, single, double, treble—worked at a much finer scale. Instead of a plump yarn, you work with embroidery floss and a small steel crochet hook (the kind sized in numbers, where a higher number means a finer hook).",
          "The result is delicate, detailed, and surprisingly sturdy: lacy motifs, appliqués, jewelry, bookmarks, and tiny pouches and amigurumi.",
          "Full COSMO® No. 25 skeins are six-strand cotton threads, which can be separated to adjust thickness. Work with all six strands for a fuller, quicker stitch, or crochet with three or two for finer, more delicate work. One skein, several possible gauges.",
          "COSMO No. 25 floss offers over 500 solid colors across the full line; each Crochet with Floss kit includes a selection of these colors appropriate for the project. Each skein in the kit contains enough floss to complete the project.",
        ],
        figure: {
          src: "/images/blog-crochet-with-floss-hands-fruit-20260714.jpg",
          alt: "Tomato, orange, and chocolate pouches crocheted with COSMO embroidery floss, held in cupped hands",
          caption:
            "Palm-sized work with COSMO No. 25 floss—the same six-strand cotton used for embroidery, worked on a small hook.",
          fit: "contain",
          width: 1440,
          height: 1440,
        },
      },
      {
        heading: "Why COSMO Floss Works Beautifully with a Hook",
        paragraphs: [
          "The qualities that make COSMO floss a pleasure to stitch translate directly to the hook.",
        ],
        bullets: [
          "Extra-long staple cotton gives the thread strength and a smooth surface, so it glides through loops instead of catching—important when every stitch is small.",
          "A natural silk-like luster means finished motifs catch the light the way fine threadwork should.",
          "Over 500 solid colors across the full No. 25 line—designed in Kyoto with roots going back to 1924—so you can shade petals, blend a gradient, match floss from another project, or expand beyond the colors in a kit.",
        ],
        figure: {
          src: "/images/blog-crochet-with-floss-palette-20260714.jpg",
          alt: "A wide arrangement of COSMO No. 25 embroidery floss skeins across over 500 solid colors",
          caption:
            "Over 500 solid colors across the full line—made in Japan, ready for needle or hook.",
          fit: "contain",
          width: 2400,
          height: 1597,
        },
      },
      {
        heading: "What You Can Make",
        paragraphs: [
          "Thread crochet rewards small, finished objects. COSMO's own Crochet with Floss kits lean into playful miniatures—food and animal pouches you can wear, gift, or rearrange into brooches and bag charms.",
          "The same approach also opens up classic thread-crochet projects: lace motifs and snowflakes, appliqué flowers, jewelry, and fine edgings for linens.",
        ],
        bulletsLabel: "Ideas to try",
        bullets: [
          "Tiny pouches and amigurumi-style motifs (food, animals, and more)",
          "Appliqués and flowers to sew onto embroidery, clothing, or bags",
          "Accessories—brooches, bag charms, and beaded or tasseled jewelry",
          "Lace motifs, snowflakes, and fine edgings for handkerchiefs and hems",
        ],
        gallery: [
          {
            src: "/images/blog-crochet-with-floss-hands-dessert-20260714.jpg",
            alt: "Cake, macaron, and hamburger pouches crocheted with COSMO embroidery floss, stacked on an open palm",
            caption: "Cake, macaron, and hamburger",
            fit: "contain",
            width: 1212,
            height: 1212,
          },
          {
            src: "/images/blog-crochet-with-floss-cake-open-20260714.jpg",
            alt: "Open strawberry-cake pouch crocheted with COSMO embroidery floss, pink lining and red zipper visible",
            caption: "Cake pouch, open",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
          {
            src: "/images/blog-crochet-with-floss-orange-open-20260714.jpg",
            alt: "Open orange pouch crocheted with COSMO embroidery floss, segment lining and zipper visible",
            caption: "Orange pouch, open",
            fit: "contain",
            width: 1440,
            height: 1440,
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
      },
      {
        heading: "Getting Started",
        paragraphs: [
          "You need very little: floss, a steel crochet hook, and a pattern or motif to follow. COSMO Crochet with Floss kits include step-by-step instructions plus a project-ready selection of No. 25 colors—each skein in the kit contains enough floss to complete the project.",
        ],
        bulletsLabel: "A few tips for your first piece",
        bullets: [
          "Start gently on difficulty. Try all six strands and a mid-size steel hook for your first motif; separate strands for a finer gauge once the rhythm is there.",
          "Keep tension relaxed. Thread crochet tightens fast; loose loops are easier to work into.",
          "Work in good light. Small stitches reward it, and floss's luster makes stitches easier to read.",
        ],
      },
      {
        heading: "Wear It, Gift It, Rearrange It",
        paragraphs: [
          "Finished pouches aren't only for display. Add a pin back for a brooch, clip one to a bag with a ball chain, or rearrange motifs into jewelry—small projects that travel well and show off COSMO color.",
          "Change floss colors on the same pattern for a completely different look—cake to chocolate, bear to a new colorway—drawing from the full No. 25 line of over 500 solid colors.",
        ],
        gallery: [
          {
            src: "/images/blog-crochet-with-floss-cake-20260714.jpg",
            alt: "Cake pouch crocheted with COSMO embroidery floss",
            caption: "Cake pouch",
            fit: "contain",
            width: 1400,
            height: 1400,
          },
          {
            src: "/images/blog-crochet-with-floss-bear-20260714.jpg",
            alt: "Bear pouch crocheted with COSMO embroidery floss",
            caption: "Bear pouch",
            fit: "contain",
            width: 1400,
            height: 1400,
          },
        ],
        galleryVariant: "comparison",
        galleryZoom: true,
      },
      {
        heading: "From Needle to Hook",
        paragraphs: [
          "If you already embroider with COSMO, you're closer to thread crochet than you think—same thread, same colors, just a hook instead of a needle.",
          "Crochet with floss sits naturally alongside the rest of the COSMO family: the same No. 25 skeins you reach for in cross-stitch and surface embroidery, put to a different, equally old use. It's a small, portable, endlessly colorful way to make something finished—one hook, one skein, and over 500 solid colors across the full line to choose from.",
        ],
      },
    ],
    ctaLabel: "Explore Crochet with Floss",
    ctaDescription:
      "See COSMO® Crochet with Floss kits—project-ready color selections—and the full No. 25 embroidery floss range of over 500 solid colors.",
    cta: {
      label: "Shop Crochet with Floss",
      href: "/crochet",
    },
  },
  {
    slug: "embroidery-fabric-types",
    title: "Aida, Evenweave, and Beyond: How Embroidery Fabrics Differ",
    excerpt:
      "Count, weave, and fiber shape every stitch. Learn how Aida, evenweave, Congress cloth, huck, and surface fabrics differ—and how to match cloth to technique.",
    publishedAt: "2026-07-13",
    image: "/images/blog-embroidery-fabrics-hero-count-20260713.jpg",
    imageAlt:
      "The same floral cross-stitch motif worked on six embroidery cloth counts, shown on covered buttons",
    heroAspectRatio: "16 / 10",
    sections: [
      {
        paragraphs: [
          "The same pattern can look delicate on one fabric and bold on another.",
          "That difference begins long before the first stitch. It begins with the cloth.",
          "Embroidery fabrics are designed to support different stitching techniques. Some provide an easy-to-read grid for counted embroidery. Others offer a smooth surface for freehand work. Still others are woven specifically for traditional techniques.",
          "Once you understand how embroidery fabrics differ, choosing the right cloth becomes less about guesswork—and more about matching the fabric to the way you want to stitch.",
        ],
      },
      {
        heading: "A Practical Way to Compare Embroidery Fabrics",
        paragraphs: [
          "For practical comparison, it helps to think about embroidery fabric from three perspectives.",
        ],
        bulletsLabel: "Three perspectives",
        bullets: [
          "Fiber — What is the fabric made from? Cotton, linen, or a blend.",
          "Weave structure — How are the yarns woven together? Plain weave, Oxford weave, huck weave, and other fabric structures each create a different surface.",
          "Embroidery category — What stitching technique is the fabric designed to support? Aida, evenweave, Congress cloth, huck fabric, or surface embroidery fabric.",
        ],
      },
      {
        paragraphs: [
          "These three perspectives work together. Fiber influences softness and texture. Weave determines the appearance and feel of the cloth. The embroidery category tells stitchers how the fabric is intended to be used.",
          "The same fiber can appear in more than one category—cotton may be woven as Aida or as evenweave. An Oxford weave may still be classified as evenweave for counted work. Keeping these three perspectives separate makes comparisons clearer.",
        ],
      },
      {
        heading: "Counted Embroidery: Working with a Grid",
        paragraphs: [
          "Counted embroidery depends on a consistent grid. Instead of drawing freely onto fabric, stitchers count either visible openings or the fabric threads themselves to place each stitch accurately.",
          "In cross-stitch retail and everyday stitching language, Aida and non-Aida evenweave are usually treated as separate categories—even though both support counted work.",
          "Aida uses a grouped-thread structure that creates clearly defined stitch blocks and openings. Evenweave is counted by the individual threads of a more uniform weave, usually without those larger, pre-formed blocks.",
        ],
      },
      {
        heading: "Aida: Clear Holes for Easy Counting",
        paragraphs: [
          "Aida’s grouped-thread structure forms regularly spaced openings that make an easy-to-read stitching grid. Each opening naturally guides the needle, which is why Aida is often the first counted fabric many stitchers use when learning cross stitch.",
          "On Aida, count refers to the number of stitch blocks per inch. Higher counts produce smaller stitches and finer finished designs, while lower counts create larger, more open motifs.",
          "COSMO® also offers Lamé Aida, which keeps the same easy-to-count grid while metallic threads add a soft sparkle—bringing extra brilliance without changing how you stitch.",
          "The sample below shows the same motif stitched on different fabric counts. The design remains identical; only the scale changes.",
        ],
        figure: {
          src: "/images/blog-embroidery-fabrics-count-comparison-labeled-20260713-v4.jpg",
          alt: "Same red flower motif on 6 ct, 9 ct, 11 ct, 14 ct, and 16 ct Aida, and on 13 ct cotton evenweave, each labeled",
          caption:
            "The same pattern stitched on different counts. Higher counts create smaller, finer designs.",
          width: 1024,
          height: 620,
        },
      },
      {
        heading: "Evenweave: Smooth Surface, Flexible Technique",
        paragraphs: [
          "Evenweave fabrics are woven with evenly spaced threads in both directions. Rather than stitching into visible Aida blocks, stitchers usually count the fabric threads themselves—often working over two threads for each cross stitch.",
          "Because the surface is smoother than traditional Aida, evenweave supports many counted techniques, including cross stitch, blackwork, pulled-thread work, and drawn-thread embroidery.",
          "On evenweave, count refers to individual fabric threads per inch—not stitch blocks. As a general guide, stitching over two threads on 28-count evenweave produces approximately the same finished design size as stitching over one block on 14-count Aida.",
          "Within the COSMO® range, 13-count cotton evenweave offers an open, graphic appearance, while 22–23 count Oxford evenweave fabrics support finer counted work and can also be used for freehand embroidery. The 34-count linen evenweave is suited to highly detailed counted stitching.",
          "Some COSMO® counted fabrics use a basket-like Oxford weave that adds subtle texture while maintaining a regular grid for counted stitching.",
        ],
        gallery: [
          {
            src: "/images/cloth-cotton-evenweave-13ct-20260713.jpg",
            alt: "COSMO Cotton Evenweave Fabric – 13 ct",
            caption: "Cotton evenweave",
            width: 354,
            height: 354,
          },
          {
            src: "/images/cloth-cotton-oxford-lecien-20260611.jpg",
            alt: "COSMO Cotton Oxford Evenweave Fabric – 23 ct",
            caption: "Cotton Oxford evenweave",
            width: 369,
            height: 241,
          },
          {
            src: "/images/cloth-comb-lecien-20260611.jpg",
            alt: "COSMO Linen Evenweave Fabric – 34 ct",
            caption: "Linen evenweave",
            width: 369,
            height: 241,
          },
        ],
        galleryVariant: "row",
      },
      {
        heading: "Congress Cloth: A Stable Ground for Dense Counted Work",
        paragraphs: [
          "Congress cloth is a firm, fine counted ground commonly used for detailed needlepoint and other dense counted work. It is not simply a finer version of evenweave. Its firmness and the way it supports dense stitching give it its own character.",
          "COSMO® Congress Cloth is offered in an 18-count version with a firm, regular grid. Its stable structure supports needlepoint and other dense counted techniques, and COSMO® also recommends it for kogin embroidery.",
        ],
        figure: {
          src: "/images/cloth-congress-70-cosmo-floss-20260713.jpg",
          alt: "COSMO Congress Cloth – 18 ct with COSMO embroidery floss",
          caption:
            "COSMO® Congress Cloth (18 ct)—a firm grid for dense counted work, including kogin.",
          width: 1024,
          height: 768,
        },
      },
      {
        heading: "Surface Embroidery Fabrics",
        paragraphs: [
          "Not every embroidery project begins by counting. Surface embroidery follows a transferred design or freehand drawing, and makers may choose many different stable fabrics depending on the project.",
          "Cotton and linen remain among the most popular choices because they provide dependable foundations for decorative stitching. COSMO® surface embroidery fabrics are designed for free stitch, traditional embroidery, cutwork, and related techniques.",
          "When a pattern depends on a counted grid, however, Aida or evenweave is the more appropriate choice.",
        ],
        gallery: [
          {
            src: "/images/cloth-free-cotton-lecien-20260611.jpg",
            alt: "COSMO Cotton Surface Embroidery Fabric",
            caption: "Cotton surface embroidery fabric",
            width: 369,
            height: 241,
            fit: "contain",
          },
          {
            src: "/images/cloth-linen-classy-lecien-20260611.jpg",
            alt: "COSMO Linen Classy Fabric for Surface Embroidery",
            caption: "Linen Classy",
            width: 369,
            height: 241,
            fit: "contain",
          },
        ],
        galleryVariant: "comparison",
        galleryCompact: true,
      },
      {
        heading: "Choosing the Right Fabric",
        paragraphs: [
          "A simple way to begin is to choose your stitching technique first, then select a fabric commonly used for that style of embroidery.",
        ],
        table: {
          headers: ["Technique", "Common fabric choices"],
          rows: [
            ["Counted cross stitch", "Aida, evenweave, or linen"],
            ["Blackwork & fine counted work", "Evenweave or linen"],
            ["Needlepoint / canvaswork", "Needlepoint canvas or Congress cloth"],
            ["Kogin", "Kogin cloth or another suitable evenly woven fabric"],
            ["Swedish weaving", "Huck fabric"],
            [
              "Surface embroidery",
              "Stable cotton, linen, or another suitable ground",
            ],
            ["Cutwork & whitework", "Firm, evenly woven cotton or linen"],
          ],
        },
      },
      {
        heading: "How COSMO Names Its Embroidery Fabrics",
        paragraphs: [
          "On the COSMO US website, fabrics are introduced using the names English-speaking stitchers already search for—Aida, evenweave, Congress cloth, huck fabric, and surface embroidery fabric—followed by fiber and count where they matter.",
          "Many of these fabrics have long histories in Japan under names such as Java Cloth, Indian Cloth, Oxford, Comb, Congress 70, and Swedish Cloth. Those names remain part of COSMO®’s heritage, while the English descriptions help stitchers quickly choose the fabric best suited to their projects.",
        ],
        table: {
          headers: ["English name", "Category", "Traditional Japanese name"],
          rows: [
            ["COSMO Aida Fabric – 6 / 9 / 11 / 14 / 16 ct", "Aida", "Java Cloth"],
            ["COSMO Lamé Aida Fabric – 14 ct", "Aida", "Lamé Java Cloth"],
            [
              "COSMO Cotton Evenweave Fabric – 13 ct",
              "Evenweave",
              "Indian Cloth",
            ],
            [
              "COSMO Cotton Oxford Evenweave Fabric – 23 ct",
              "Evenweave (Oxford)",
              "Cotton Oxford",
            ],
            [
              "COSMO Linen Oxford Evenweave Fabric – 22 ct",
              "Evenweave (Oxford)",
              "Linen Oxford",
            ],
            [
              "COSMO Linen Evenweave Fabric – 34 ct",
              "Evenweave",
              "Comb",
            ],
            ["COSMO Congress Cloth – 18 ct", "Congress cloth", "Congress 70"],
            [
              "COSMO Cotton Surface Embroidery Fabric",
              "Surface",
              "Cotton for free stitch",
            ],
            [
              "COSMO Linen Classy Fabric for Surface Embroidery",
              "Surface",
              "Linen Classy",
            ],
          ],
        },
      },
      {
        heading: "Let the Fabric Guide the Stitch",
        paragraphs: [
          "Beautiful embroidery begins before the first stitch.",
          "When fabric, thread, needle, and technique work together, stitching becomes more comfortable, designs stay true to scale, and every stitch feels more natural.",
          "Choose Aida when you want an easy-to-read grid. Choose evenweave when you prefer a smoother counted surface. Choose a firm counted ground when the work is dense. Choose huck fabric when the design depends on surface floats. Choose a stable cotton or linen ground when you want the freedom of freehand embroidery.",
          "The right fabric does not draw attention to itself. It simply helps every stitch find its place.",
        ],
      },
    ],
    ctaLabel: "Explore COSMO® Embroidery Fabrics",
    ctaDescription:
      "Discover Japanese-made embroidery fabrics for counted cross stitch, surface embroidery, Swedish weaving, and more—and find the cloth that matches the way you love to stitch.",
    cta: {
      label: "View Embroidery Fabric",
      href: "/fabric",
    },
  },
  {
    slug: "seasons-variegated-floss",
    title: "COSMO® Seasons: Variegated Floss That Shades as You Stitch",
    excerpt:
      "One length of thread, many tones. COSMO Seasons is a 100% cotton variegated floss that shifts color on its own—three series, each with a different rhythm of change.",
    publishedAt: "2026-07-10",
    image: "/images/blog-seasons-variegated-floss-hero-20260710.jpg",
    imageAlt:
      "COSMO Seasons variegated embroidery floss skeins in blues, greens, purples, and pinks",
    heroAspectRatio: "3 / 2",
    sections: [
      {
        paragraphs: [
          "Most embroidery floss holds a single, steady color. Seasons does something different—it changes as you stitch.",
          "COSMO® Seasons is a variegated embroidery floss whose color shifts gently along the strand, moving through a range of related tones. With one thread you can suggest a fading sky, a bank of blossoms, or the turn of autumn leaves—no swapping colors, no re-threading.",
        ],
      },
      {
        heading: "What Is Variegated Floss?",
        paragraphs: [
          "Variegated—or self-shading—floss is dyed so its color changes at intervals along the thread. Instead of one flat shade, a single strand travels through several tones: light to dark, or one hue into the next.",
          "That built-in gradation does a lot of work for you. Rows of simple stitches take on depth and movement on their own, and you get smooth transitions that would otherwise mean stopping to change threads again and again.",
        ],
        figure: {
          src: "/images/blog-seasons-variegated-floss-self-shading-20260710.jpg",
          alt: "COSMO Seasons variegated floss in blues and greens with clear color gradation along each strand",
          caption: "Self-shading color shifts gently along the strand.",
          width: 1440,
          height: 1080,
        },
      },
      {
        heading: "Meet COSMO Seasons",
        asideImage: {
          src: "/images/blog-seasons-variegated-floss-sakura-skeins-20260710.jpg",
          alt: "COSMO Seasons variegated floss skeins in soft pink and white gradations",
        },
        paragraphs: [
          "Seasons is COSMO's variegated take on its signature No. 25 embroidery floss. It shares the same foundation—six separable strands of 100% cotton, made in Japan—so it stitches with the same smooth hand and soft luster COSMO is known for.",
          "The palette is designed to sit alongside COSMO's solid No. 25 colors, so you can blend self-shading and solid threads in the same piece and trust that they'll feel like a family.",
        ],
        bulletsLabel: "What makes it special",
        bullets: [
          "Six separable strands of 100% cotton—use one strand or several",
          "Gentle, self-shading color that changes along the thread",
          "Designed to complement COSMO's solid No. 25 palette",
          "A wide range of variegated colors across three series",
          "Made in Japan",
        ],
      },
      {
        heading: "Three Series, Three Ways to Shade",
        paragraphs: [
          "Seasons comes in three series that differ by how quickly the color changes. That rhythm of change is what makes each one suited to a different kind of stitching.",
        ],
        embed: "seasons-series",
      },
      {
        heading: "One thread, many possibilities",
        paragraphs: [
          "Because the color moves along the strand, Seasons opens up more than traditional embroidery. Stitch on fabric or paper, wrap tassels and pom-poms, braid friendship bracelets, or add a few strands to jewelry—the same No. 25 cotton works across techniques, and each series brings a different rhythm of change.",
        ],
        bullets: [
          "Embroidery and cross-stitch with built-in shading",
          "Tassels, pom-poms, and fringe for accessories and décor",
          "Jewelry, knotwork, and paper crafts",
          "Mix with solid No. 25 floss for contrast and structure",
        ],
        gallery: [
          {
            src: "/images/floss-seasons-works-embroidered-envelopes-20260710-v2.jpg",
            alt: "Embroidered envelope flaps stitched with COSMO Seasons variegated floss",
            width: 1024,
            height: 1024,
          },
          {
            src: "/images/floss-seasons-works-earrings-20260710-v2.jpg",
            alt: "Handmade earrings with Seasons variegated floss tassels on gold wire frames",
            width: 1000,
            height: 1000,
          },
          {
            src: "/images/floss-seasons-works-tassels-20260710-v2.jpg",
            alt: "Colorful handmade tassels made with Seasons variegated embroidery floss",
            width: 1024,
            height: 1024,
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
      },
      {
        heading: "Pairs Beautifully with Solid No. 25",
        paragraphs: [
          "Seasons and COSMO's solid No. 25 floss share the same weight, fiber, and finish, so they mix effortlessly. Use a solid color for steady areas and a Seasons thread where you want the color to breathe—together they open up a fuller palette than either could alone.",
        ],
        figure: {
          src: "/images/blog-seasons-variegated-floss-cool-palette-20260710.jpg",
          alt: "Row of COSMO Seasons variegated floss skeins in blues, greens, and purples",
          caption: "Seasons variegated colors designed to complement COSMO solid No. 25.",
          fit: "contain",
          width: 1000,
          height: 1000,
        },
      },
      {
        heading: "Product Specifications",
        table: {
          headers: ["", ""],
          rows: [
            ["Product", "COSMO® Seasons Variegated Embroidery Floss"],
            ["Type", "Variegated No. 25 floss — six separable strands, 100% cotton"],
            ["Series", "Seasons 5000, Seasons 8000, Seasons 9000"],
            ["Color change", "5000: about 8 cm (3.1 in), even · 8000: about 30 cm (11.8 in), gradual · 9000: short, random"],
            ["Colors", "140 variegated colors"],
            ["Made in", "Japan"],
          ],
        },
      },
      {
        heading: "Let Your Color Move",
        paragraphs: [
          "If you've ever wished a row of stitches could carry a little more life, Seasons is a simple way to get there. Pick a series, thread your needle, and let the color do the rest.",
        ],
        figure: {
          src: "/images/blog-seasons-variegated-floss-color-of-sea-20260710.jpg",
          alt: "COSMO Seasons variegated floss skeins arranged with seashells and star-shaped beads",
          caption: "Color of the sea—Seasons variegated floss in cool blues and greens.",
          width: 1440,
          height: 960,
        },
      },
    ],
    ctaLabel: "Explore Seasons",
    ctaDescription:
      "Discover COSMO® Seasons variegated floss and the rest of the COSMO thread family to bring color and movement to your next project.",
    cta: {
      label: "Shop Seasons",
      href: "/floss/seasons",
    },
  },
  {
    slug: "embroidery-floss-qualities",
    title: "The Qualities Behind Every Thread: COSMO® Embroidery Floss",
    excerpt:
      "What lies behind every skein of Made in Japan COSMO® No. 25 Embroidery Floss—from extra-long staple cotton and silk-like luster to a palette of 500 colors, designed in Kyoto since 1924.",
    publishedAt: "2026-07-03",
    image:
      "/images/blog-embroidery-floss-qualities-hero-lce200214-671-20260708.jpg",
    imageAlt:
      "Close-up of colorful COSMO embroidery floss skeins piled together",
    heroAspectRatio: "3 / 2",
    sections: [
      {
        paragraphs: [
          "Embroidery thread may appear simple.",
          "Yet every skein reflects countless decisions—from selecting the cotton to spinning, dyeing, finishing, and quality control. Those decisions influence not only how the thread looks, but also how it behaves in the needle, through the fabric, and throughout an entire project.",
          "The best embroidery thread does not draw attention to itself. It simply allows every stitch to feel natural.",
          "For more than a century, COSMO® has refined those details to create embroidery threads that combine Japanese craftsmanship with an enjoyable stitching experience.",
        ],
      },
      {
        heading: "Designed in Kyoto, Crafted with Care in Japan",
        paragraphs: [
          "COSMO®'s embroidery heritage began in 1924.",
          "Designed in Kyoto and crafted with care in Japan—Made in Japan embroidery floss rooted in Kyoto—COSMO® Embroidery Floss has continued to evolve while remaining rooted in the belief that beautiful embroidery begins with beautiful materials.",
          "That philosophy continues today in every skein.",
        ],
      },
      {
        heading: "The Qualities Behind Every Thread",
        paragraphs: [
          "Three qualities define COSMO® No. 25 Embroidery Floss.",
          "Together, they influence how the thread feels in the hand, catches the light, and brings embroidery to life.",
        ],
        bullets: [
          "Premium Cotton",
          "Silk-like Luster",
          "Lasting Color",
        ],
      },
      {
        heading: "Carefully Selected Extra-Long Staple Cotton",
        paragraphs: [
          "Everything begins with the fiber.",
          "COSMO® Embroidery Floss is made from carefully selected extra-long staple cotton, valued for its strength, softness, and naturally smooth surface.",
          "LECIEN carefully blends selected cotton fibers to achieve the balance embroidery requires. The longer fibers create a smoother strand that passes comfortably through fabric and needle while maintaining consistency from the first stitch to the last.",
        ],
        gallery: [
          {
            src: "/images/pillar-premium-cotton.jpg",
            alt: "Close-up of extra-long staple cotton fibers",
            caption: "Premium Cotton",
          },
        ],
        galleryVariant: "pillars",
        galleryPosition: "aside",
      },
      {
        heading: "Smooth Construction for Comfortable Stitching",
        paragraphs: [
          "Comfort depends on more than the cotton itself.",
          "Spinning, strand consistency, finishing, and careful inspection all contribute to how the thread behaves during stitching.",
          "COSMO® No. 25 Embroidery Floss consists of six easily separable strands that adapt to different fabrics and techniques. They separate cleanly, pass smoothly through fabric, and help stitchers focus on the embroidery rather than the thread.",
        ],
        gallery: [
          {
            src: "/images/blog-embroidery-floss-qualities-construction-20260707-v3.jpg",
            alt: "COSMO embroidery floss skeins in purple and navy with one strand separated into six plies",
            caption: "Smooth Construction",
          },
        ],
        galleryVariant: "pillars",
        galleryPosition: "aside",
      },
      {
        heading: "A Natural Silk-Like Luster",
        paragraphs: [
          "Beautiful embroidery begins long before the first stitch.",
          "The naturally smooth surface of extra-long staple cotton, combined with careful finishing, gives COSMO® Embroidery Floss its characteristic silk-like luster.",
          "Rather than creating an overly glossy appearance, this refined sheen adds depth and dimension while allowing the embroidery itself to remain the focus.",
        ],
        gallery: [
          {
            src: "/images/pillar-silk-luster.jpg",
            alt: "COSMO embroidery floss with a silky sheen",
            caption: "Silk-like Luster",
          },
        ],
        galleryVariant: "pillars",
        galleryPosition: "aside",
      },
      {
        heading: "Colors Designed for Creative Expression",
        paragraphs: [
          "Color does more than decorate. It creates depth, texture, light, and shadow.",
          "Introduced with 195 colors around 1950, the COSMO® palette has grown to include 500 embroidery floss colors, offering stitchers the freedom to create subtle transitions and expressive combinations across a wide variety of embroidery styles.",
          "From botanical embroidery and landscapes to portraits, traditional motifs, and counted cross-stitch, closely related shades help create natural-looking gradations that bring designs to life.",
          "The goal is not simply to offer more colors. It is to help makers find the right color when inspiration strikes.",
        ],
        figure: {
          src: "/images/blog-embroidery-floss-qualities-colors-20260707.jpg",
          alt: "Rows of COSMO embroidery floss skeins in reds, pinks, purples, blues, greens, and yellows",
          caption:
            "500 colors—closely related shades for gradations, contrasts, and every style of embroidery.",
        },
      },
      {
        heading: "Color That Remains Consistent",
        paragraphs: [
          "Embroidery projects are often completed over days, weeks, or even months.",
          "Carefully controlled dyeing and quality control help maintain consistent color from skein to skein, making it easier to continue a project with confidence.",
          "That consistency becomes especially valuable when replacing a skein, expanding an existing project, or returning to work after time away.",
        ],
        figure: {
          src: "/images/blog-embroidery-floss-qualities-consistency-20260707.jpg",
          alt: "Autumn leaves embroidered in closely matched COSMO floss shades on sheer fabric in a wooden hoop",
          caption:
            "Consistent color from skein to skein—so a project can grow over weeks without losing its balance.",
        },
      },
      {
        heading: "More Than Color",
        paragraphs: [
          "A skein of embroidery floss carries more than color.",
          "It carries generations of Japanese craftsmanship, thoughtful material selection, and continuous refinement.",
          "Every embroidery project begins with an idea. The thread should never stand in its way.",
        ],
      },
    ],
    ctaLabel: "Explore COSMO® Embroidery Floss",
    ctaDescription:
      "Discover 500 solid colors and the full COSMO® No. 25 Embroidery Floss collection.",
    cta: {
      label: "Shop Embroidery Floss",
      href: "/floss/cosmo",
    },
  },
  {
    slug: "100-ladies-embroidery-fabric",
    title: "100 Ladies®: Design Your Own Fashion Story",
    excerpt:
      "Like a coloring book—with needle and thread. Discover 100 Ladies®, the COSMO® fabric series where every figure is a blank canvas for embroidery, appliqué, and your own sense of style.",
    publishedAt: "2026-07-07",
    image: "/images/blog-100-ladies-story-stitching-flatlay-20260707.jpg",
    imageAlt:
      "Hands stitching a 100 Ladies figure in a hoop, surrounded by COSMO embroidery floss, fabric markers, and beads",
    heroAspectRatio: "16 / 10",
    sections: [
      {
        paragraphs: [
          "Some embroidery projects guide every stitch.",
          "100 Ladies® is a printed embroidery fabric designed to let every stitcher become the designer.",
          "Printed across the fabric are one hundred illustrated figures, each waiting to become someone entirely new.",
          "Their clothes, colors, and stories are yours to imagine.",
          "It feels a little like a coloring book—only your pencil is a needle, and your colors are embroidery thread.",
        ],
      },
      {
        heading: "One Hundred Figures, One Hundred Possibilities",
        paragraphs: [
          "100 Ladies® is an embroidery fabric series created in collaboration with textile artist Kazue Nakajima and produced by LECIEN.",
          "Its name reflects the idea behind the collection: one hundred illustrated ladies, and many ways to bring them to life.",
          "Look closely and you'll find figures with different poses, hairstyles, and expressions. Each is approximately 5 cm (2 in.) tall—small enough to finish quickly, yet open to endless creativity.",
          "Rather than prescribing colors or decorative details, the printed outlines leave the creative decisions to the maker.",
          "Every finished figure becomes uniquely yours.",
        ],
      },
      {
        gallery: [
          {
            src: "/images/ladies100-before-20260617.png",
            alt: "100 Ladies fabric before stitching, showing uncolored line-drawn figures",
          },
          {
            src: "/images/ladies100-after-20260617.png",
            alt: "100 Ladies fabric after stitching with colorful embroidered outfits and details",
          },
        ],
        galleryVariant: "before-after",
      },
      {
        heading: "Dress Them Your Way",
        paragraphs: [
          "The joy of 100 Ladies® comes from designing each character.",
          "Choose colors, create patterned clothing, and add appliqué, beads, lace, ribbon, or fabric pens.",
          "There is no single correct combination.",
          "Every stitch adds personality.",
          "Because the printed outlines are simple and open-ended, even basic embroidery stitches can completely transform each figure.",
        ],
        figure: {
          src: "/images/blog-100-ladies-story-dress-them-20260707.jpg",
          alt: "100 Ladies fabric with embroidered figures in colorful outfits, alongside COSMO embroidery floss skeins",
          fit: "contain",
        },
      },
      {
        heading: "Perfect for Beginners—Rewarding for Experienced Stitchers",
        paragraphs: [
          "100 Ladies® grows with you.",
          "Beginners can complete a single figure using only a few basic stitches, while experienced makers can continue exploring new color palettes, textures, and techniques.",
          "With 500 colors available in COSMO® No. 25 Embroidery Floss, subtle differences in clothing, hair, accessories, and shading become part of each character's story.",
          "The fabric encourages creativity without demanding perfection.",
        ],
      },
      {
        heading: "From Fabric to Everyday Projects",
        paragraphs: [
          "Once your ladies are stitched, the possibilities continue.",
          "Display the full fabric as wall art, or transform individual figures into charms, gift tags, patches, pouches, bags, notebook covers, and other handmade accessories.",
          "Project kits and pre-sewn items make it easy to explore the series in different ways—whether creating your first embroidery piece or adding a personal touch to something you use every day.",
        ],
        gallery: [
          {
            src: "/images/ladies100-gallery-gamaguchi-20260617.png",
            alt: "100 Ladies gamaguchi pouch with embroidered figures",
            caption: "Stitched accessories",
          },
          {
            src: "/images/ladies100-gallery-fireworks-20260617.png",
            alt: "100 Ladies figures in yukata with fireworks embroidery",
            caption: "Seasonal styling",
          },
          {
            src: "/images/ladies100-gallery-05-20260616.jpg",
            alt: "Creative styling on 100 Ladies fabric with mixed embroidery techniques",
            caption: "Creative variations",
          },
        ],
        galleryVariant: "row",
      },
      {
        heading: "A Fabric That Celebrates Individual Creativity",
        paragraphs: [
          "Every maker begins with the same fabric.",
          "Every finished piece becomes one of a kind.",
          "Like fashion itself, embroidery becomes a form of personal expression.",
          "One fabric.",
          "One hundred figures.",
          "Countless stories.",
          "Pick up a needle, choose your colors, and begin creating your own.",
        ],
      },
    ],
    ctaLabel: "Explore 100 Ladies®",
    ctaDescription:
      "Discover embroidery fabric, sample kits, charm kits, and project bases—plus curated COSMO® floss to bring every figure to life.",
    cta: {
      label: "Explore 100 Ladies",
      href: "/100-ladies",
    },
  },
  {
    slug: "nishikiito-metallic-thread",
    title: "COSMO® Nishikiito®: A Little Sparkle, Made in Japan",
    excerpt:
      "Meet Nishikiito—COSMO's Japanese-made metallic embroidery thread, crafted using techniques inspired by Kyoto's kimono gold-thread tradition. Five distinctive finishes and 48 colors to add light and dimension to your stitching.",
    publishedAt: "2026-07-02",
    image: "/images/nishikiito-20260610.jpg",
    imageAlt:
      "A scattered arrangement of colorful COSMO Nishikiito metallic thread spools in gold, magenta, teal, and green",
    heroAspectRatio: "1 / 1",
    sections: [
      {
        paragraphs: [
          "Some threads are made to blend in. Nishikiito is made to catch the light.",
          "COSMO® Nishikiito® is a Japanese-made metallic embroidery thread whose roots lie in Kyoto's kimono gold-thread (kinshi) tradition. That heritage carries into a thread built for modern hand embroidery—one that adds shimmer, depth, and a quiet sense of occasion to whatever you stitch.",
        ],
      },
      {
        heading: "What Is Nishikiito?",
        paragraphs: [
          "Nishikiito (にしきいと) takes its name from nishiki, the luxurious brocade woven with gold and silver threads in traditional Japanese dress. COSMO reimagined that centuries-old craft as an accessible metallic embroidery thread, made in Japan and neatly wound on compact spools.",
          "It's a specialty accent thread rather than an everyday floss. Sometimes only a few stitches are enough to transform an entire design.",
        ],
        asideImage: {
          src: "/images/blog-nishikiito-kinshi-brocade-20260715.jpg",
          alt: "Traditional Kyoto gold-thread brocade (nishiki) with woven floral motifs — the heritage that inspired Nishikiito",
        },
        bulletsLabel: "What makes it special",
        bullets: [
          "Heritage rooted in Kyoto's gold-thread kimono craft",
          "Five distinctive finishes, each reflecting light differently",
          "48 colors—from soft pastels to vivid fluorescents and rich jewel tones",
          "Compact spools (approx. 20 m each) for easy storage",
          "Made in Japan",
        ],
      },
      {
        heading: "Five Finishes, Five Distinctive Expressions",
        paragraphs: [
          "Every metallic finish reflects light differently. Choosing the right one is less about quality and more about the visual effect you want—quiet shimmer or bold sparkle, shifting color or vivid neon.",
        ],
        gallery: [
          {
            src: "/images/floss-nishikiito-nishiki-spools-20260715.jpg",
            alt: "Nishiki round-twist metallic embroidery thread spools — 18 colors",
            width: 1024,
            height: 768,
            caption: "Nishiki",
          },
          {
            src: "/images/floss-nishikiito-mirror-spools-20260715.jpg",
            alt: "Mirror tasuki-twisted metallic embroidery thread spools — 6 colors",
            width: 1024,
            height: 768,
            caption: "Mirror",
          },
          {
            src: "/images/floss-nishikiito-iridescent-spools-20260715.jpg",
            alt: "Iridescent tasuki-twisted metallic embroidery thread spools — 12 colors",
            width: 1024,
            height: 767,
            caption: "Iridescent",
          },
          {
            src: "/images/floss-nishikiito-champagni-spools-20260715.jpg",
            alt: "Champagni tasuki-twisted metallic embroidery thread spools in pastel tones — 6 colors",
            width: 1024,
            height: 768,
            caption: "Champagni",
          },
          {
            src: "/images/floss-nishikiito-neoni-spools-20260715.jpg",
            alt: "Neoni tasuki-twisted metallic embroidery thread in vivid fluorescent colors — 6 colors",
            width: 1024,
            height: 768,
            caption: "Neoni",
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
        bullets: [
          "Nishiki — refined, understated sheen. The most traditional finish, with a calm metallic glow suited to tatting, tassels, and embroidery accents. 18 colors.",
          "Mirror — brilliant, high-impact sparkle. The brightest finish in the collection, designed to stand out in cross stitch and dense stitching. 6 colors.",
          "Iridescent — soft, shifting color. Semi-transparent film creates opal-like reflections that change with the viewing angle. 12 colors.",
          "Champagni — gentle pastel shimmer. Fine sparkles scattered through soft tones, with a silky cupro-blend hand that feels smooth during extended stitching. 6 colors.",
          "Neoni — vivid fluorescent intensity. Maximum visibility even in small amounts; ultra-fine strands can be combined freely to adjust weight. 6 colors.",
        ],
      },
      {
        heading: "A Little Sparkle Goes a Long Way",
        paragraphs: [
          "Because Nishikiito catches light so readily, a little goes a long way. Use it as an accent—the frost on a snowflake, the shimmer on a festive ornament, or the flourish on decorative lettering. COSMO's Sparkling Japanese Seasons cross-stitch kits are a good example: gold Nishikiito adds the finishing sparkle to seasonal motifs without overwhelming the cotton palette.",
          "It pairs naturally with COSMO No. 25 embroidery floss in cross stitch and surface embroidery, layered wherever you want a metallic highlight. Several finishes are very fine, so you can combine strands to adjust weight and intensity to suit your project.",
        ],
        bullets: [
          "Metallic highlights in cross stitch and freestyle embroidery",
          "Seasonal and festive motifs—stars, snow, ornaments, holiday designs",
          "Decorative lettering, monograms, and borders",
          "Tatting lace and tassels",
        ],
        bulletsLabel: "Best for",
        gallery: [
          {
            src: "/images/blog-nishikiito-tassels-flatlay-20260715.jpg",
            alt: "Handmade metallic tassels in gold, silver, blue, purple, rose, and green — made with Nishiki thread",
            width: 600,
            height: 600,
          },
          {
            src: "/images/blog-nishikiito-accessories-20260715.jpg",
            alt: "Cross-stitch accessories with gold Nishikiito accents: pill case, earrings, keychain, and tassel doll",
            width: 600,
            height: 600,
          },
          {
            src: "/images/blog-nishikiito-xmas-ornaments-20260715.jpg",
            alt: "Three cross-stitch Christmas ornaments with gold Nishikiito borders and colorful metallic tassels",
            width: 600,
            height: 600,
          },
        ],
        galleryVariant: "row",
        galleryZoom: true,
      },
      {
        heading: "Add a Little Light",
        paragraphs: [
          "Whether you're finishing a keepsake, dressing up a holiday ornament, or simply love the way light moves across a stitch, Nishikiito is a small luxury that makes a visible difference.",
          "Five finishes, 48 colors, one philosophy: sometimes all it takes is a thread or two to bring a whole design to life.",
        ],
        figure: {
          src: "/images/blog-nishikiito-tamamushi-detail-20260715.jpg",
          alt: "Close-up of butterfly embroidery with COSMO Nishikiito Iridescent metallic thread accents and gold leaf details",
          caption: "Iridescent Nishikiito accents in a butterfly embroidery by Miyata-sensei.",
          width: 810,
          height: 1080,
        },
      },
    ],
    ctaLabel: "Explore Nishikiito",
    ctaDescription:
      "See all five finishes, compare colors, and browse the complete collection.",
    cta: {
      label: "View Nishikiito",
      href: "/floss/nishikiito",
    },
  },
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
          "COSMO No. 25 embroidery floss is a six-strand cotton thread: you gently separate the strands and use as many as your fabric count calls for—often two for everyday Aida. A long-established COSMO embroidery floss line developed in Japan, it comes in 500 solid colors, plus variegated multi-color shades that shift softly from one tone to the next as you stitch.",
          "Cotton floss is the everyday choice, but cross-stitch welcomes other threads too—variegated cotton for gentle color shifts, thicker pearl (perlé) cotton for texture, and metallic threads such as COSMO Nishikiito, used for decorative accents.",
          "For the cloth, COSMO offers even-weave embroidery fabrics, including Java cloth-type fabrics, in several counts, so you can choose bold and quick or fine and detailed.",
        ],
        figure: {
          src: "/images/floss-cosmo-20260610.jpg",
          alt: "Colorful skeins of COSMO No. 25 six-strand embroidery floss",
          caption:
            "COSMO No. 25 floss—500 solid colors of Japanese-made cotton, plus variegated multi-color shades.",
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
    title: "The Story Behind COSMO®",
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
          src: "/images/cosmo-wordmark-trimmed-20260703.png",
          alt: "COSMO wordmark logo",
          position: "center",
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
      "Discover 500 beautifully balanced colors, premium cotton embroidery floss, and accessories designed to inspire every project.",
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
    image: "/images/blog-needle-history-hero-215510-20260708.jpg",
    imageAlt:
      "Cross-stitch needle and golden thread on white Aida cloth with small blue floral stitches",
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
          "Around the same time, COSMO Embroidery Floss was introduced with an assortment of 195 colors. Over the decades, the collection expanded to include embroidery fabrics, needles, tools, and today 500 embroidery floss colors.",
          "Today, COSMO products are available to makers throughout North America, Europe, Asia, Australia, and Japan.",
        ],
        timeline: [
          { period: "1924", title: "COSMO embroidery heritage begins in Japan" },
          { period: "1933", title: "LECIEN founded in Kyoto" },
          {
            period: "1950",
            title: "American quilt imports and COSMO Embroidery Floss (195 colors)",
          },
          { period: "Today", title: "500 floss colors and a global maker community" },
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
        mediaPosition: "top",
        infoCardsPosition: "top",
        figure: {
          src: "/images/blog-cosmo-us-faire-storefront-20260708.jpg",
          alt: "COSMO Embroidery brand storefront on Faire, showing colorful floss skeins and the Fort Lee, New Jersey wholesale profile",
          caption:
            "Official COSMO Embroidery brand storefront on Faire (operated by TANAAKK INC.).",
          fit: "contain",
          width: 1024,
          height: 517,
          href: FAIRE_STORE_URL,
        },
        infoCards: [
          {
            id: "availability",
            title: "Official COSMO store on Faire since May 2026",
            body: `Retailers can order LECIEN COSMO through our official [Faire](${FAIRE_STORE_URL}) brand store—operated by TANAAKK INC., authorized U.S. seller for LECIEN COSMO.`,
          },
          {
            id: "warehouse",
            title: "Ships from New Jersey",
            body: "Selected inventory ships from New Jersey. International delivery depends on Faire destination support at checkout.",
          },
          {
            id: "restocking",
            title: "Made in Japan, restocked from LECIEN",
            body: "Out-of-stock items continue to be replenished from Japan on a rolling basis—craftsmanship stays with LECIEN.",
          },
        ],
        paragraphs: [
          "In May 2026, COSMO opened its first official U.S. warehouse in New Jersey—operated by TANAAKK INC., the authorized U.S. seller for LECIEN COSMO—and began offering wholesale ordering through Faire.",
          "The warehouse and Faire storefront changed how products move. They did not change what makers receive: Japanese craftsmanship, consistent quality, and the independent retailers and wholesale partners who helped introduce COSMO to North America.",
          "The goal is simpler access to the same trusted products—for shops that stock them, and for stitchers who rely on them.",
        ],
        linkCta: {
          label: "Shop on Faire",
          href: FAIRE_STORE_URL,
        },
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
