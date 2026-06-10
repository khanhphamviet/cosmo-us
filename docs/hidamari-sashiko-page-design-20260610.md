# Hidamari Sashiko Thread — Page Design (Draft)

**Status:** Proposal only — not yet implemented  
**Date:** 2026-06-10 (updated with confirmed decisions)  
**References:** [Lecien JP — Sashiko](https://www.lecien.co.jp/embroidery/sashiko) · `cosmo_en_2026_0526.pdf`  
**Target site:** cosmo-us (English)

---

## Confirmed decisions

| Item | Decision |
|------|----------|
| **URL** | `/sashiko` (canonical) |
| **Color lineup** | **Solid — 40 colors** · **Variegated — 20 colors** (60 total) |
| **Variegated types** | Speckle · Melange · Multicolor · Gradation (within the 20-color variegated range) |
| **Display boards** | **All three** retail display versions shown on the page |
| **Retail / shop links** | No Faire or shop CTAs — product information only |
| **Redirect** | `/floss/hidamari` → `/sashiko` when implemented |

---

## 1. Goal

Replace the current minimal `/floss/hidamari` placeholder with a dedicated **Hidamari Sashiko Thread** page at `/sashiko` that:

1. Explains **what sashiko is** (accessible to US beginners)
2. Shows **what you can make** (lifestyle inspiration)
3. Presents the **hidamari product line** (Solid + Variegated, specs, needles)
4. Shows **all three retail display boards**
5. Matches existing COSMO US patterns (Cloth, Seasons, Nishikiito)

---

## 2. URL & routing

**Canonical path:** `/sashiko`

- Update `productNav.ts` and `BrandCategoryGrid` href: `/floss/hidamari` → `/sashiko`
- Add redirect from `/floss/hidamari` → `/sashiko`
- Breadcrumb: `HOME / Embroidery / Sashiko`

**Files to add (when approved):**

- `src/app/sashiko/page.tsx` — metadata + shell
- `src/app/components/HidamariSashikoContent.tsx` — page body
- `src/app/globals.css` — `.sashiko-*` block
- `public/images/sashiko-*-20260610.jpg` — optimized copies of attached assets

---

## 3. Page structure (wireframe)

```
┌─────────────────────────────────────────────────────────┐
│  PAGE HERO                                              │
│  HOME / Embroidery / Sashiko                            │
│  H1: Hidamari Sashiko Thread                            │
│  Sub: Bright, warm Japanese cotton thread for sashiko   │
│       — and so much more                                │
├─────────────────────────────────────────────────────────┤
│  BANNER                                                 │
│  → Display ① 1211_142 (SASHIKO — English intro board)  │
├─────────────────────────────────────────────────────────┤
│  BRAND INTRO (centered lead + 2–3 lines)                │
│  hidamari = “a sunny spot” · 60 colors · Made in Japan  │
├─────────────────────────────────────────────────────────┤
│  § WHAT IS SASHIKO?                                     │
│  Text + 3 mini-columns (Technique · Origins · Today)    │
├─────────────────────────────────────────────────────────┤
│  § WHAT CAN YOU MAKE?                                   │
│  3×2 lifestyle grid + captions                          │
├─────────────────────────────────────────────────────────┤
│  § MORE THAN SASHIKO                                    │
│  Tagline + uses chips (Stitch · Sew · Knit · …)         │
├─────────────────────────────────────────────────────────┤
│  § SOLID & VARIEGATED                                   │
│  Two-column overview: 40 solid + 20 variegated          │
│  + 4 variegated type cards (Speckle · Melange · …)      │
├─────────────────────────────────────────────────────────┤
│  § PRODUCT LINEUP — THREE DISPLAYS                      │
│  3-up grid (contain, white bg):                         │
│    ① 1211_142  SASHIKO        (hero / overview)        │
│    ② 1211_140  SASHIKO        (solid 40-color board)   │
│    ③ 1211_138  SASHIKO &      (variegated 20-color board)│
├─────────────────────────────────────────────────────────┤
│  SPECS TABLE + footnotes                                │
├─────────────────────────────────────────────────────────┤
│  § SASHIKO NEEDLES (brief)                              │
├─────────────────────────────────────────────────────────┤
│  ← Back to Floss                                        │
└─────────────────────────────────────────────────────────┘
```

**In-page nav:**  
`What is Sashiko` · `Projects` · `Colors` · `Lineup` · `Specs`

---

## 4. Visual design

### Typography
- **H1 / section titles:** `var(--brand-serif)` (Georgia)
- **Body:** Helvetica Neue stack, `#555` body / `var(--foreground)` headings
- **Lead paragraph:** slightly larger serif, centered under banner

### Layout
- Max width: `var(--max-w)` (1080px)
- Lifestyle grid: 3 columns → 2 → 1
- **Three display boards:** 3-column grid desktop → 1 column mobile; all `object-fit: contain`, white background
- Preserve Lecien’s airy, cream-and-white feel

### Image treatment
- **Display boards (all 3):** `.sashiko-display-media--preserve` — no crop, white letterbox
- **Lifestyle:** square or 4:5 crop, `object-fit: cover`

---

## 5. Image asset map

### Display boards (all three required)

| # | Proposed filename | Source asset | Label on page |
|---|-------------------|--------------|---------------|
| ① | `sashiko-display-overview-20260610.jpg` | `1211_142-e444e235-…png` | **hidamari SASHIKO** — overview (English copy, needles shown) |
| ② | `sashiko-display-solid-20260610.jpg` | `1211_140-63850f9d-…png` | **hidamari SASHIKO** — Solid (40 colors) |
| ③ | `sashiko-display-variegated-20260610.jpg` | `1211_138-6f4cb789-…png` | **hidamari SASHIKO &** — Variegated (20 colors) |

Display ① doubles as the **page banner** (top of page). Displays ② and ③ appear together in the **Product Lineup** section below the Solid / Variegated copy.

### Lifestyle (What Can You Make)

| Proposed filename | Source asset | Caption |
|-------------------|--------------|---------|
| `sashiko-project-mending-20260610.jpg` | `_______-a3e61a55-…png` | Decorative mending on a T-shirt |
| `sashiko-project-pincushions-20260610.jpg` | `________-06a82f97-…png` | Sashiko pincushions |
| `sashiko-project-pouch-20260610.jpg` | `____-52314def-…png` | Zippered pouch with shippo pattern |
| `sashiko-project-tote-20260610.jpg` | `hidamari_i24-0cd0e3c3-…png` | Cross-stitch initial on a mini tote |
| `sashiko-project-notebook-20260610.jpg` | `hidamari_i30-5f2dd2f6-…png` | Notebook cover with shippo-tsunagi |

---

## 6. English copy (draft)

### 6.1 Page metadata

```yaml
title: Hidamari Sashiko Thread
description: >
  COSMO hidamari sashiko thread — 100% Japanese cotton in 60 colors
  (40 solid + 20 variegated). Smooth, low-fuzz thread for sashiko, mending, knitting, and more.
canonical: /sashiko
```

### 6.2 Hero subtitle

> Bright, warm, handmade — Japanese cotton sashiko thread for stitching and beyond.

### 6.3 Brand intro

**Lead (serif):**  
Like sunlight through a window — *hidamari* (“a sunny spot”) is COSMO’s sashiko thread line designed for bright, warm, satisfying handwork.

**Supporting lines:**
- Smooth handling and minimal fuzz make long stitching sessions comfortable.
- 100% cotton, made in Japan — **60 colors: 40 solid and 20 variegated.**
- Variegated colors include speckle, melange, multicolor, and gradation finishes.

*“hidamari” is a registered trademark of Lecien Corporation.*

---

### 6.4 What is Sashiko?

**Heading:** What is Sashiko?

**Body:**

Sashiko (刺し子) is a Japanese needlework tradition built on simple running stitches. Historically used to reinforce and repair workwear, sashiko turned functional mending into decorative pattern — geometric motifs stitched in repeating rows across indigo and natural fabrics.

Today, sashiko spans a wide range of styles: classic hitomezashi patterns on traditional cloth, visible mending on everyday garments, and modern free-form stitching on bags, pouches, and home accessories. The common thread is the running stitch — even, rhythmic, and meditative.

| **Technique** | **Origins** | **Today** |
|---|---|---|
| Running stitch, often in grids or repeating motifs | Northern Japan; reinforcement, warmth, and repair | Traditional patterns, boro-style mending, and contemporary craft |

---

### 6.5 What Can You Make?

**Heading:** What Can You Make?

**Intro:**  
hidamari thread is made for sashiko — but it is equally at home in sewing, knitting, gift wrapping, tassels, and decorative details. Here are just a few ideas.

| Project | Caption |
|---------|---------|
| Decorative mending | Add color and texture to worn favorites with woven or sashiko-style patches. |
| Pincushions | Small motifs — asanoha, cross patterns, or your own designs — finished with colorful tassels. |
| Pouches & cases | Traditional patterns like shippo-tsunagi (linked circles) on zippered pouches and notebook covers. |
| Bags & accessories | Cross-stitch letters, accents, and charms on totes and everyday carry. |
| Tassels & trim | Speckle and melange variegated colors are especially popular for tassels, fringe, and pom-poms. |
| Knitting & wrapping | Multicolor and gradation threads add accent stripes to knitwear and package ties. |

---

### 6.6 More Than Sashiko

**Heading:** More Than Sashiko

**Body:**

Not just for stitching — this cotton thread offers excellent performance for sashiko, with smooth handling and minimal fuzz. In addition to traditional sashiko colors, the lineup includes vibrant pop tones and nuanced smoky shades. Use it for sewing, knitting, crocheting, decorating, and tying.

**Uses row:** Stitch · Sew · Knit · Crochet · Decorate · Tie

---

### 6.7 Solid & Variegated

**Heading:** 60 Colors — Solid & Variegated

**Intro:**  
The hidamari range spans **40 solid colors** and **20 variegated colors**, giving you a full palette for traditional sashiko and contemporary craft.

#### Solid — 40 colors

Classic sashiko colors plus vibrant pop brights and smoky neutrals. The go-to choice for hitomezashi patterns, mending, and everyday stitching.

*Display reference: board ② (`1211_140`)*

#### Variegated — 20 colors

Four variegated finishes within the 20-color range:

| Type | Copy |
|------|------|
| **Speckle** | A white base with colorful spray-dyed speckles. Candy-like and perfect for tassels. |
| **Melange** | Speck-dyed thread that evokes indigo fading and soft variation — ideal for denim repair, fashion accents, fringe, and pom-poms. |
| **Multicolor** | Four colors blended in a single strand — suited to knitted accessories and gift-wrap accents. |
| **Gradation** | One hue that shifts through long and short repeats — works in both Japanese and Western styles. |

*Display reference: board ③ (`1211_138` — hidamari SASHIKO &)*

**Note:** Due to a special dyeing process, some melange colors (e.g. No. 122302) may show slight variation between skeins.

---

### 6.8 Product Lineup (three displays)

**Heading:** Product Lineup

**Intro:**  
Three retail display formats showcase the full hidamari range.

| Display | Caption |
|---------|---------|
| ① Overview | hidamari SASHIKO — the complete introduction to the thread line |
| ② Solid | 40 solid colors — pop brights, smoky neutrals, and classic sashiko tones |
| ③ Variegated | hidamari SASHIKO & — 20 variegated colors in speckle, melange, multicolor, and gradation |

*(All three boards rendered at equal width in a responsive grid; `object-fit: contain`.)*

---

### 6.9 Specifications

| Spec | Value |
|------|-------|
| Product | Hidamari Sashiko Thread (No. 122301 series) |
| Material | 100% cotton |
| Length | Approx. 30 m (32.8 yd) per spool |
| Colors | 60 (40 solid + 20 variegated) |
| Country of origin | Japan |
| Package size | Approx. 12.5 × 5 × 2 cm (4.9 × 2.0 × 0.8 in) |
| Packaging | Reduced plastic and paper (eco-conscious design) |

**Footnote:** Thread colors may differ slightly from screen images due to printing and dye variation.

---

### 6.10 Sashiko Needles

**Heading:** Sashiko Needles

**Body:**

Everyone has their own sashiko rhythm — some stitch continuously, others one stitch at a time, and some pull the needle out every two or three stitches. To suit different styles, COSMO offers sashiko needles in a range of lengths. Each needle has a long, open eye for easy threading and includes a threader.

| Spec | Value |
|------|-------|
| Country of origin | Japan |
| Pack | 5 needles per package |

*(Needle pack visible on display board ① — no separate product link.)*

---

## 7. Component sketch (React)

```tsx
export default function HidamariSashikoContent() {
  return (
    <div className="sashiko-page">
      <DisplayBanner image="overview" />     {/* 1211_142 */}
      <IntroBlock />
      <SectionNav />
      <Section id="about" title="What is Sashiko?" />
      <ProjectGrid id="projects" title="What Can You Make?" />
      <UsesBlock id="uses" title="More Than Sashiko" />
      <ColorOverview id="colors" title="60 Colors — Solid & Variegated" />
      <DisplayGrid id="lineup" title="Product Lineup" />  {/* 142 + 140 + 138 */}
      <SpecTable id="specs" />
      <NeedlesBlock />
    </div>
  );
}
```

**Display grid note:** Banner uses board ①; Product Lineup section shows all three (① may repeat at smaller size, or Lineup shows ② + ③ only to avoid duplication — **recommend: banner = ① only; Lineup grid = ② + ③** with caption referencing ① above).

**Revised display usage (no duplicate banner in grid):**

| Placement | Boards shown |
|-----------|--------------|
| Top banner | ① `1211_142` only |
| Product Lineup section | ② `1211_140` + ③ `1211_138` (2-up grid) |

All three appear on the page; ① is not repeated in the grid below.

---

## 8. Differences from current `/floss/hidamari`

| Current | Proposed |
|---------|----------|
| Generic floss template | Full custom layout at `/sashiko` |
| Title “hidamari” | **Hidamari Sashiko Thread** |
| “40 colors (20 solid + 20 multicolors)” | **40 solid + 20 variegated** (60 total) |
| No sashiko education | **What is Sashiko?** + **What Can You Make?** |
| Single product image | 3 display boards + 5 lifestyle images |
| No thread-type breakdown | Solid + 4 variegated types |
| No needles | **Sashiko Needles** callout |

---

## 9. Remaining open question

1. **Trademark line:** Keep in brand intro only, or also in page footer?

---

## 10. Implementation checklist

- [ ] Copy assets to `public/images/sashiko-*-20260610.jpg`
- [ ] Create `HidamariSashikoContent.tsx` with copy from §6
- [ ] Add `/sashiko/page.tsx` + metadata
- [ ] Add `.sashiko-*` styles to `globals.css`
- [ ] Update `productNav.ts`, `BrandCategoryGrid`, `sitemap.ts` → `/sashiko`
- [ ] Redirect `/floss/hidamari` → `/sashiko`
- [ ] Slim or remove hidamari from `FLOSS_DATA` (keep floss index card linking to `/sashiko` if desired)

---

*End of draft — ready for implementation when approved.*
