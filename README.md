# Prestige Tractors Ballarat — Premium Dealership Website

A world-class, conversion-focused website for **Prestige Tractors Ballarat** (a Goad Group company) —
your local dealer for McCormick, Bobcat & Mahindra tractors, Enorossi hay equipment, DakenAg,
RapidSpray, Grasshopper, Orsi and Muratori machinery.

**Tech stack: plain HTML, CSS and JavaScript — no frameworks, no build step.**
Built this way so it can be migrated into **WordPress** cleanly (see *WordPress migration* below).

Premium **dark-luxury** aesthetic with a clean **light theme** (toggle persists to `localStorage`),
cinematic photography, Prestige-red accents, glassmorphism, a sticky transparent navbar with a
**mega menu**, advanced equipment **filtering**, and **service / finance / contact** forms.

---

## Run it

No tooling required — it's static. Serve the folder with any static web server, e.g.:

```bash
# Python (built in)
python3 -m http.server 8080
# or Node
npx serve .
# or VS Code "Live Server"
```

Then open <http://localhost:8080>. (Open via a server rather than `file://` so the Google Maps
embed and relative links behave correctly.)

---

## Structure

```
/
├── index.html              Home
├── equipment.html          Equipment catalogue (filter + sort)
├── category.html           Category page        (?cat=<slug>)
├── product.html            Equipment detail     (?slug=<slug>)
├── service.html            Service Centre + booking form (#book)
├── parts.html              Spare Parts
├── finance.html            Finance + enquiry form + FAQ (#enquiry)
├── about.html              About Us
├── contact.html            Contact + form + map (prefill via ?enquiry=)
├── news.html               Latest News & Specials
├── fleet-maintenance.html  Prestige Fleet Maintenance
├── disclaimer.html         Legal
├── 404.html                Not found
└── assets/
    ├── css/styles.css      All styling + design tokens + dark/light themes
    ├── favicon.svg
    └── js/
        ├── data.js         Single source of truth (brands, categories, products, news, site)
        ├── site.js         Header/footer render, theme toggle, nav, drawer, mega menu,
        │                   reveal animations, forms, icons, shared render helpers (PTUI)
        ├── location.js     Reusable map + contact block (Home & Contact)
        ├── catalogue.js    Equipment catalogue filtering/sorting
        ├── category.js     Category page (reads ?cat=)
        └── product.js      Product detail (reads ?slug=)

_reference/                 Source brief + the previous React build (reference only)
```

### How it fits together
- **No duplication of the header/footer:** every page includes empty `<header id="site-header">`
  and `<footer id="site-footer">` placeholders; `site.js` renders the shared chrome into them.
- **Icons:** inline SVGs. In static markup use `<i data-icon="name"></i>` (auto-injected); in JS use
  `PTUI.icon("name")`.
- **Data-driven lists** (product grids, category tiles, brand strip, news) are rendered from
  `data.js` so content lives in one place.
- **Theme:** an inline boot script in each `<head>` sets `data-theme` before paint (no flash);
  all colours are CSS variables redefined under `[data-theme="dark"|"light"]`.

---

## Editing content

| Want to change… | Edit |
|---|---|
| Business details, hours, phone, sectors | `assets/js/data.js` → `site` |
| Brands / categories / equipment / news / testimonials | `assets/js/data.js` |
| Photography | `assets/js/data.js` → `PHOTO` ids (Unsplash) or `<img src>` in the HTML |
| Colours, fonts, spacing | token blocks at the top of `assets/css/styles.css` |
| Dark / light palettes | `[data-theme="dark"]` / `[data-theme="light"]` in `assets/css/styles.css` |
| Navigation / mega menu | `topNav` + `megaHtml()` in `assets/js/site.js` |

---

## WordPress migration

The structure maps cleanly onto a classic WordPress theme:

| Static | WordPress |
|---|---|
| `<header id="site-header">` + `renderHeader()` | `header.php` (template part) |
| `<footer id="site-footer">` + `renderFooter()` | `footer.php` |
| `assets/css/styles.css` tokens | `:root` in the theme stylesheet / `theme.json` |
| `data.js` `products` | a `product` custom post type |
| `data.js` `brands` / `categories` | taxonomies |
| `product.html?slug=` | `single-product.php` |
| `category.html?cat=` | `taxonomy-category.php` / `archive` |
| `news.html` + `articles` | the Posts loop |
| `catalogue.js` filtering | server-side query + the same JS for client filtering |
| forms (`data-success`) | wire to Contact Form 7 / Gravity Forms / a REST handler |

The CSS, icons and behaviour (theme toggle, mega menu, drawer, reveal) carry over unchanged as an
enqueued stylesheet + script.

## Notes for go-live
1. **Photography** — royalty-free Unsplash placeholders, verified for agricultural subject matter;
   replace the ids/URLs with the dealership's own images.
2. **Brand logos** — rendered as typographic wordmarks (no trademark assets bundled).
3. **Forms** — client-side demos with a success state; connect to an email service or CRM.
4. **Content** — names, NAP, the real product models and the Bobcat special are sourced from the
   live site; expanded specs and secondary items are representative — confirm before publishing.

---

*A Goad Group company · 206 Burnbank Street, Wendouree, Victoria 3355 · (03) 5339 2056*
