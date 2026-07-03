# Prestige Tractors Ballarat — Design System & Experience Blueprint

> A premium, dark-luxury agricultural-machinery dealership experience.
> Benchmarked against John Deere, CASE IH, Kubota, New Holland, Caterpillar, Tesla & Rivian.
> Built as **plain HTML, CSS & JavaScript — no frameworks, no build step** — for clean migration
> into WordPress. (The prior React + Tailwind v4 build is archived under `_reference/react-app/`.)

This document is the single reference for the brand system, information architecture,
user journeys, wireframes, component library and page specifications. Everything
described here is **implemented in the codebase** — file references are included throughout.

---

## 1. Brand Strategy & Design Objective

Prestige Tractors is a multi-brand dealership in Wendouree, Ballarat,
representing nine premium brands across tractors, hay, spraying, attachments and grounds care, plus
sales, finance, genuine parts, a service centre and a fleet-maintenance arm.

**Positioning line:** *"Victoria's Trusted Agricultural Equipment Partner."*

**Design pillars**

| Pillar | Expression |
|---|---|
| **Premium & expensive** | Deep charcoal/ink canvas, cinematic full-bleed photography, generous negative space, restrained red accents, glassmorphism. |
| **Trustworthy** | NAP always reachable, trust bar (20+ yrs, factory-trained, genuine parts, local), testimonials, transparent enquiry flows. |
| **Modern & enterprise** | Sticky transparent nav + mega menu, motion on scroll, code-split routes, accessible & responsive. |
| **Conversion-focused** | Dual primary CTAs everywhere (Explore Equipment / Book Service), persistent phone + Book Service, enquiry forms on every commercial page. |

---

## 2. Complete Sitemap

```
Home  (/)
├── Equipment Catalogue  (/equipment)                         ← filter by category/brand/condition/price + sort
│   ├── Category  (/equipment/category/:slug)                 ← tractors · hay-equipment · sprayers · attachments · utility
│   └── Product Detail  (/equipment/product/:slug)            ← 20 models across 7 brands
│       └── (brand filter)  (/equipment?brand=:slug)
├── Sales & Service  ▾
│   ├── Service Centre  (/service)  ·  Book a Service  (/service#book)
│   ├── Spare Parts  (/parts)
│   ├── Finance  (/finance)  ·  Finance Enquiry  (/finance#enquiry)
│   └── Fleet Maintenance  (/fleet-maintenance)               ← Prestige Fleet Maintenance
├── Brands  ▾  (mega menu → /equipment?brand=:slug)
│   └── McCormick · Bobcat · Mahindra · DakenAg · Enorossi · RapidSpray · Grasshopper · Orsi · Muratori
├── About  (/about)
├── News & Specials  (/news)
├── Contact  (/contact)
└── Disclaimer  (/disclaimer)            +  404 / Not Found  (*)
```

Primary nav (desktop): **Equipment · Brands · Sales & Service · Finance · About · News · Contact**
Persistent right cluster: **Phone (03) 5339 2056 · Book Service**.

---

## 3. Information Architecture

The IA reorganises the legacy site (flat `/parts-sales-and-service/*` + `/product-category/*` + `/ag-machinery/*`)
into three intent-led clusters:

| Cluster | User intent | Pages |
|---|---|---|
| **Discover & Buy** | "Find the right machine" | Equipment Catalogue → Category → Product Detail; Brands; News/Specials; Finance |
| **Own & Maintain** | "Keep it running" | Service Centre (+ booking), Spare Parts, Fleet Maintenance |
| **Trust & Contact** | "Who are they, how do I reach them" | About, Contact, Location, Disclaimer |

**Content model** (`src/data/`) — a single source of truth so the whole UI is data-driven:

```
site.ts          NAP, hours, sectors, trust points, parent group
navigation.ts    ROUTES map + nav/mega types
brands.ts        9 brands (origin, category, description, wordmark style)
categories.ts    5 equipment categories (icon, blurb, photo, member brands)
equipment.ts     20 products (specs, highlights, price, availability) + selectors
testimonials.ts  customer reviews
news.ts          specials & news articles
team.ts          team + Fleet Maintenance service lines
```

---

## 4. User Journey Mapping

**A. Prospective buyer (farmer / contractor)**
```
Home (hero) → Explore Equipment → Catalogue (filter: brand=McCormick, category=tractors)
→ Product Detail (specs, price) → "Enquire about this model" → Contact (pre-filled) ✅ lead
                                 ↘ "Finance options" → Finance → Finance Enquiry ✅ lead
```

**B. Existing owner needing service**
```
Any page → "Book Service" (persistent) → Service Centre #book → Service Booking form ✅ booking
                                        ↘ Spare Parts → Request Parts → Contact (parts) ✅ lead
```

**C. Researching the dealership (trust)**
```
Home → About (story, 9 brands, team, stats) → Testimonials → Contact / Location (map, NAP, hours)
```

**D. Deal-seeker**
```
Home (Promotions) → News & Specials → Bobcat package special → Product Detail / Enquire ✅ lead
```

Every journey terminates in a **measurable conversion**: enquiry, booking, or a call/email tap.

---

## 5. Wireframes (low-fidelity, per page)

Legend: `[btn]` button · `▤` image/photo · `▦` card · `≡` form · `★` rating

**Home** (`pages/Home.tsx`)
```
┌ NAV (transparent) ───────────── logo · links · ☎ · [Book Service] ┐
│ HERO ▤ fullscreen tractor  | eyebrow · H1 · sub · [Explore][Book] |
│                            | stat strip (20+ · 9 · 100%)          |
├ BRAND STRIP ── McCormick · Bobcat · Mahindra · … (marquee) ───────┤
├ TRUST BAR ── ▦ 20+yrs  ▦ factory-trained  ▦ genuine  ▦ local ─────┤
├ CATEGORIES (bento) ── ▤Tractors(2x)  ▤Hay | ▤Spray ▤Attach ▤Util ─┤
├ FEATURED ── ▦ ▦ ▦ ▦  product cards ──────────────── [Browse] ─────┤
├ SERVICE BAND ── ▤ workshop | H2 + benefits(2x2) + [Book][Parts] ──┤
├ FINANCE BAND ▤ ── H2 · sector pills · [Enquiry][☎] ───────────────┤
├ TESTIMONIALS ── ★▦ ★▦ ★▦ ★▦ ───────────────────────────────────────┤
├ PROMOTIONS ── ▤ feature | list ▦▦▦ ─────────────── [All news] ────┤
├ LOCATION ── 🗺 map | contact cards + hours + [Enquire] ────────────┤
└ FOOTER ── CTA band · 4 link cols · NAP · social · legal ──────────┘
```

**Equipment Catalogue** (`pages/EquipmentCatalogue.tsx`)
```
[PageHeader ▤]  ·  category chips ───────────────────────────
┌ FILTER RAIL ─────┬ RESULTS ──────────────────────────────┐
│ search           │ N results · [mobile filters] · [sort▾] │
│ ▢ Category       │ ▦ ▦ ▦                                   │
│ ▢ Brand          │ ▦ ▦ ▦   (responsive 1/2/3 cols)        │
│ ▢ Condition      │ ▦ ▦ ▦                                   │
│ ── price slider  │                                         │
└──────────────────┴─────────────────────────────────────────┘
shop-by-brand chips
```
Mobile: filter rail collapses into a bottom-sheet drawer triggered by **Filters (n)**.

**Product Detail** (`pages/ProductDetail.tsx`)
```
breadcrumb
┌ ▤ gallery + badges + 3 spec stat cards ┬ brand · H1 · summary ┐
│                                        │ PRICE block          │
│                                        │ highlights ✓✓✓✓       │
│                                        │ [Enquire][Finance]   │
│                                        │ assurances · · ·     │
└────────────────────────────────────────┴──────────────────────┘
Overview + Key features (2col)  |  Specifications table
Related equipment ▦ ▦ ▦
```

**Service Centre** (`pages/ServiceCentre.tsx`)
```
[PageHeader ▤ welder] [Book][☎]
benefits grid ▦×6
process 01→02→03→04
#book: ≡ booking form  | ▤ + hours + call card
cross-sell: Parts | Fleet
```

**Finance** (`pages/Finance.tsx`)
```
[PageHeader ▤] · options ▦×4 · sectors ✓grid · process 01-04 · #enquiry: FAQ accordion | ≡ finance form
```

**About** (`pages/About.tsx`)
```
[PageHeader] · story 2col + ▤▤ · stats ×4 · values ▦×3 · 9 brand cards · team ▦×4 · fleet teaser
```

**Spare Parts** (`pages/SpareParts.tsx`)
```
[PageHeader ▤ tools] · why-genuine ▦×4 · brand chips · request: ▤ | checklist + CTAs
```

**News** (`pages/News.tsx`) — feature split + type filter + article grid ▦×3
**Fleet Maintenance** (`pages/FleetMaintenance.tsx`) — header + service grid ▦×6 + CTA band
**Contact** (`pages/Contact.tsx`) — contact cards + ≡ form + map block
**Disclaimer** — legal long-form. **404** — oversized 4·0·4 + CTAs.

---

## 6. Design Tokens — Color Palette

Defined as Tailwind v4 `@theme` tokens in `src/index.css` (usable as `bg-ink-900`, `text-brand-500`, …).

**Ink / charcoal (canvas & surfaces)**
| Token | Hex | Use |
|---|---|---|
| `ink-950` | `#08080a` | Page background |
| `ink-900` | `#0c0c0f` | Footer / alt sections |
| `ink-850` | `#121216` | Card surface (top of gradient) |
| `ink-800` | `#17171c` | Card surface |
| `ink-700` | `#1f1f26` | Borders / hairlines |
| `ink-600`–`ink-400` | `#2a2a32`→`#565663` | Dividers, muted controls |
| `ink-300`/`ink-200`/`ink-100` | `#7b7b88`→`#d2d2da` | Tertiary→primary body text |
| `ink-50` | `#f1f1f4` | Near-white |

**Prestige Red (primary accent)**
| Token | Hex | Use |
|---|---|---|
| `brand-300` | `#ff7079` | On-dark text accent |
| `brand-400` | `#ff3d4d` | Hover, gradient end |
| `brand-500` | `#e0192b` | **Primary** — buttons, active, glows |
| `brand-600` | `#c20f20` | Pressed |
| `brand-700/800` | `#990a18`/`#6b0810` | Deep gradient |

**Support:** `gold-400/500` (ratings, premium tags only), `success #2faf6a` (in-stock), `warning #e3a008`.

**Usage ratio:** ~80% ink neutrals, ~12% white text, ~8% red. Red is reserved for action and emphasis — never decoration.

---

## 6b. Theme System — Dark + Light

The site ships with a premium **dark/light theme system**. Dark remains the primary/default
experience; light is a clean, high-contrast premium dealership aesthetic. The Prestige red
(`brand-*`) is **identical in both themes**.

**How it works (no component duplication):**
- The `ink-*` neutral scale and the `fg` foreground token are **theme-adaptive CSS variables**.
  Their values are redefined under `[data-theme="light"]` / `[data-theme="dark"]` in `index.css`,
  so every existing `bg-ink-*`, `text-ink-*`, `border-ink-*`, `text-fg`, `bg-fg/x` utility flips
  automatically — one variable layer, zero duplicated components.
- White-on-dark overlays were converted to `*-fg/x` opacity utilities, which adapt in both themes
  (subtle white raise on dark, subtle dark raise on light).
- Genuinely-dark regions (hero, page headers, image cards, finance band, the transparent navbar)
  carry a **local `data-theme="dark"`** so they stay cinematic-dark in *both* themes, with light
  text — exactly like premium automotive sites that pair a dark hero with a light body.
- Photo scrims (`Media` overlays) and modal backdrops use fixed dark values so images stay legible
  and dialogs dim correctly regardless of theme.

| Token | Dark | Light |
|---|---|---|
| `ink-950` (canvas) | `#08080a` | `#f4f4f7` |
| `ink-900` (raised / footer) | `#0c0c0f` | `#ffffff` |
| `ink-850` (card) | `#121216` | `#ffffff` |
| `ink-700` (border) | `#1f1f26` | `#e3e3e9` |
| `ink-200` (secondary text) | `#a6a6b2` | `#43434b` |
| `ink-100` (body text) | `#d2d2da` | `#1b1b21` |
| `fg` (headings/primary) | `#ffffff` | `#0c0c0f` |
| `brand-ink` (small red text) | `#ff3d4d` | `#c20f20` |
| `--glass-*` | white translucency | white translucency + dark hairline |

**Implementation:**
- `src/theme/ThemeProvider.tsx` — React context. Resolves initial theme (stored → system →
  dark), applies `data-theme` to `<html>`, persists to `localStorage` (`pt-theme`), follows system
  changes until the user chooses, and adds a `.theme-transition` class for a **300ms** colour
  transition only during a switch (no interference with hovers / no flash on load).
- `index.html` — a tiny inline boot script sets `data-theme` **before paint** to prevent FOUC.
- `src/components/ui/ThemeToggle.tsx` — `variant="icon"` (round button, desktop navbar) and
  `variant="full"` (labelled switch, mobile drawer). Animated Sun/Moon swap.
- Toggling is **instant, no reload**, and consistent across every page and component.

---

## 7. Typography System

Loaded in `index.html` (Google Fonts, preconnected).

| Role | Family | Weights | Notes |
|---|---|---|---|
| **Display / headings** | `Archivo` (`--font-display`) | 700–900 | Industrial-modern, often UPPERCASE with tight tracking for hero/section titles. |
| **Body / UI** | `Inter` (`--font-sans`) | 400–700 | Highly legible, enterprise-grade. |

**Type scale (fluid via Tailwind):**
```
Hero H1      text-[2.75rem] → sm:6xl → lg:7xl   font-extrabold uppercase leading-[0.95]
Page H1      text-4xl → lg:6xl                  font-extrabold
Section H2   text-3xl → lg:[2.75rem]            font-extrabold
Card title   text-xl / text-lg                  font-bold (font-display)
Body L       text-lg leading-relaxed            ink-200
Body         text-base / text-sm                ink-200 / ink-300
Eyebrow      text-xs uppercase tracking-[0.22em] brand-400  (.eyebrow utility)
```
`text-wrap: balance` on headings; `::selection` is Prestige red.

---

## 8. Tokens — Spacing, Radius, Elevation, Motion

- **Container:** `.container-px` — max-width `84rem`, responsive inline padding (1.25 → 2 → 2.5rem).
- **Section rhythm:** `<Section>` = `py-20 sm:py-24 lg:py-28`.
- **Radius:** `xs .25` · `sm .5` · `md .75` · `lg 1` · `xl 1.5` · `2xl 2rem`. Cards use `rounded-2xl`; buttons `rounded-full`.
- **Elevation:** `--shadow-card`, `--shadow-lift`, `--shadow-glow` (red). Hover = lift + soften.
- **Motion:** easing `cubic-bezier(0.22,1,0.36,1)`. Scroll reveals (fade + 24px rise, stagger 0.08s). Marquee 38s. All wrapped by `prefers-reduced-motion` reset.
- **Glass:** `.glass` (blur 18px + saturate + white hairline) for menus, overlays, stat strips.

---

## 9. Component Library

Reusable primitives in `src/components/ui/`:

| Component | File | Key props |
|---|---|---|
| `Button` | `Button.tsx` | `variant` primary/secondary/ghost/glass · `size` sm/md/lg · `icon` · `iconPosition` · polymorphic (`to` Link / `href` anchor / `button`) · `fullWidth` |
| `Container` | `Container.tsx` | width wrapper |
| `Section` | `Section.tsx` | `bleed` · `id` · vertical rhythm |
| `SectionHeading` | `SectionHeading.tsx` | `eyebrow` · `title` · `description` · `align` · `action` |
| `PageHeader` | `PageHeader.tsx` | interior hero: `eyebrow` `title` `description` `photoId` `crumbs` `actions` `size` |
| `Media` | `Media.tsx` | cinematic image + gradient base + `overlay` scrim (none/bottom/full/left) |
| `Badge` | `Badge.tsx` | `tone` brand/neutral/success/gold/outline |
| `Icon` | `Icon.tsx` | name-based lucide registry (`IconName`) |
| `Stars` | `Stars.tsx` | rating 0–5 |
| `BrandWordmark` | `BrandWordmark.tsx` | typographic brand logo from `wordmark` hints |
| `Logo` | `Logo.tsx` | Prestige speed-bars + wordmark lockup |
| `Reveal` / `StaggerGroup` | `Reveal.tsx` | scroll-in motion wrappers |
| `Accordion` | `Accordion.tsx` | FAQ disclosure |
| `Form` set | `Form.tsx` | `Field` `Input` `Textarea` `Select` `Label` |

Composite components:
- **Layout:** `Navbar` (+ `MegaMenu`, `MobileDrawer`, `navData`), `Footer`, `Layout`, `ScrollManager`.
- **Equipment:** `ProductCard`, `FilterPanel`.
- **Forms:** `ContactForm`, `ServiceBookingForm`, `FinanceEnquiryForm`, `FormSuccess`.
- **Home sections:** `Hero`, `BrandStrip`, `TrustBar`, `CategoryGrid`, `FeaturedEquipment`, `ServiceBand`, `FinanceBand`, `Testimonials`, `Promotions`.
- **Shared:** `LocationBlock` (map + NAP, reused on Home & Contact).

---

## 10. Responsive Strategy

Mobile-first. Tailwind breakpoints: `sm 640` · `md 768` · `lg 1024` · `xl 1280`.

| Surface | Mobile (<768) | Tablet (768–1024) | Desktop (≥1024) |
|---|---|---|---|
| Nav | Hamburger → right drawer w/ accordions | Hamburger (mega hidden <xl) | Full nav + hover mega menu (≥xl) |
| Hero | Stacked, `min-h-100svh`, scaled type | Same, larger type | Left-aligned, stat strip inline |
| Category bento | 1 col | 2–3 cols | 6-col asymmetric bento |
| Product grids | 1 col | 2 col | 3–4 col |
| Catalogue filters | Bottom-sheet drawer | Bottom-sheet | Sticky left rail |
| Forms | 1 col fields | 2 col | 2 col |
| Footer | Stacked | 2-col link grid | brand + 4-col grid |

Touch targets ≥ 44px; `100svh` used for hero to avoid mobile URL-bar jump.

---

## 11. Architecture (vanilla HTML / CSS / JS)

```
Stack:   Static HTML + one CSS file + vanilla ES5-safe JavaScript. No bundler,
         no framework, no dependencies. Just open via any static server.

Pages:   One .html file per route. Dynamic routes use query params
         (category.html?cat=, product.html?slug=) — mirrors WP archive/single.

Chrome:  Header + footer are NOT duplicated. Each page has empty
         <header id="site-header"> / <footer id="site-footer"> mount points;
         site.js renders them (→ header.php / footer.php in WordPress).

Styling: assets/css/styles.css. Design tokens are CSS custom properties under
         :root / [data-theme]; components are semantic classes (.btn, .card,
         .product-card, .nav, …). No utility framework.

Data:    assets/js/data.js exposes a global PT object (site, brands, categories,
         products, news, testimonials, team) — the single source of truth.

Icons:   Inline SVG. Static markup: <i data-icon="name">. JS: PTUI.icon("name").

Images:  Centralised via PT.img(id,w) (verified-agricultural Unsplash) — swap
         the PHOTO ids in data.js for the dealership's own photography.
```

**File structure**
```
/  *.html (13 pages)
└── assets/
    ├── css/styles.css      tokens + dark/light themes + all components
    ├── favicon.svg
    └── js/
        ├── data.js         content model (PT global)
        ├── site.js         header/footer render · theme · nav · drawer · mega ·
        │                   reveal · forms · icons · PTUI render helpers
        ├── location.js     reusable map + contact block
        ├── catalogue.js    equipment filtering / sorting
        ├── category.js     category page (?cat=)
        └── product.js      product detail (?slug=)
```

See **§11b** of the README for the static → WordPress mapping (template parts,
CPTs, taxonomies, forms).

---

## 12. Accessibility, SEO & Performance

- **A11y:** semantic landmarks, `aria-label`s on nav/icon buttons, visible focus ring (`:focus-visible` red), labelled form fields, `aria-expanded` on disclosures, alt text, `prefers-reduced-motion` honoured, colour contrast on dark surfaces meets AA for text sizes used.
- **SEO:** descriptive `<title>`/meta/OG in `index.html`, semantic headings (one H1 per page), breadcrumbs, clean canonical URL structure, `lang="en-AU"`. (Per-route meta is ready to wire via a head manager.)
- **Performance:** route-level code splitting, lazy images (`loading="lazy"`, hero `fetchPriority=high`), responsive widths, font preconnect + `display=swap`, no heavy UI libs. Production bundle ≈ 107 kB gzip vendor + small per-route chunks.

---

## 13. Page-by-Page Specifications (summary)

| Page | Route | Goal | Primary CTA | Key sections |
|---|---|---|---|---|
| Home | `/` | Orient + route to intent | Explore Equipment / Book Service | Hero, brands, trust, categories, featured, service, finance, testimonials, promos, location |
| Catalogue | `/equipment` | Browse & filter | Open product | PageHeader, chips, filter rail, sorted grid, brand chips |
| Category | `/equipment/category/:slug` | Narrowed browse | Full catalogue / Enquire | Hero, brands-in-category, grid, other categories |
| Product | `/equipment/product/:slug` | Convert interest | Enquire / Finance | Gallery+stats, info+price+highlights, overview, specs, related |
| Service | `/service` | Drive bookings | Book a Service | Benefits, process, booking form, cross-sell |
| Parts | `/parts` | Parts leads | Request Parts | Why-genuine, brand chips, request checklist |
| Finance | `/finance` | Finance leads | Finance Enquiry | Options, sectors, process, FAQ + form |
| About | `/about` | Build trust | Explore / Contact | Story, stats, values, 9 brands, team, fleet |
| News | `/news` | Surface offers | Read/Enquire | Feature, type filter, article grid |
| Fleet | `/fleet-maintenance` | Vehicle-service leads | Enquire / Call | Services grid, CTA |
| Contact | `/contact` | Capture enquiries | Send Message | Contact cards, form (prefill), map |
| Disclaimer | `/disclaimer` | Legal | — | Long-form legal |
| 404 | `*` | Recover | Home / Equipment | Oversized 404 |

---

## 14. Content Fidelity & Handover Notes

- **Verbatim from source:** NAP, hours, the 9 brands, the 7 sourced products (CT4055, CT2035, 26hp Hobby Farm Hero, McCormick X7/D-MAX/S-MAX/S-MAX 60 ROPS), the Bobcat **$30,250 inc GST** special, parts brands (McCormick, Daken, Grasshopper, Enorossi, Bobcat), finance/sectors copy, Service positioning, and the Prestige Fleet Maintenance line.
- **Representative (clearly flagged in data + UI):** expanded inventory specs/prices, additional brand models, testimonials, secondary news items, team roles. Confirm against live supplier data before publishing (`sourced: true` flags the verbatim items in `equipment.ts` / `news.ts`).
- **To go live:** (1) replace image IDs in `lib/images.ts` with real photography; (2) wire the three forms to email/CRM; (3) add per-route meta via a head manager; (4) connect the map to the verified Google Place; (5) add real brand logo SVGs if preferred over wordmarks.
