/* ==========================================================================
   PRESTIGE TRACTORS — shared site behaviour (vanilla JS, no frameworks)
   Renders header/footer, runs nav, drawer, mega menu, reveal
   animations and form handling. Exposes PTUI render helpers for page scripts.
   In WordPress: renderHeader/renderFooter → header.php/footer.php; the
   behaviour below becomes an enqueued script.
   ========================================================================== */
(function (w, d) {
  "use strict";
  var PT = w.PT;

  /* ----------------------------- ICONS ---------------------------------- */
  var P = { vb: 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"' };
  var ICONS = {
    "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
    "arrow-up-right": '<path d="M7 17 17 7M8 7h9v9"/>',
    "arrow-left": '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    "chevron-down": '<path d="m6 9 6 6 6-6"/>',
    "chevron-right": '<path d="m9 6 6 6-6 6"/>',
    "check": '<path d="M20 6 9 17l-5-5"/>',
    "circle-check": '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    "menu": '<path d="M4 6h16M4 12h16M4 18h16"/>',
    "x": '<path d="M18 6 6 18M6 6l12 12"/>',
    "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>',
    "mail": '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>',
    "pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    "clock": '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    "calendar": '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    "wrench": '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18l3 3 6.4-6.3a4 4 0 0 0 5.3-5.4l-2.3 2.3-2.6-.7-.7-2.6 2.3-2.3Z"/>',
    "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    "award": '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1"/>',
    "cog": '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 15a1.6 1.6 0 0 0-1.5-1H1a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 3 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 9 3a1.6 1.6 0 0 0 1-1.5V1a2 2 0 1 1 4 0v.1A1.6 1.6 0 0 0 15 3a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.6 1.6 0 0 0 21 9h.1a2 2 0 1 1 0 4H21a1.6 1.6 0 0 0-1.6 1Z"/>',
    "settings": '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 15a1.6 1.6 0 0 0-1.5-1H1a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 3 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 9 3a1.6 1.6 0 0 0 1-1.5V1a2 2 0 1 1 4 0v.1A1.6 1.6 0 0 0 15 3a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.6 1.6 0 0 0 21 9h.1a2 2 0 1 1 0 4H21a1.6 1.6 0 0 0-1.6 1Z"/>',
    "truck": '<path d="M10 17h4V5H2v12h2"/><path d="M14 9h4l4 4v4h-4"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    "gauge": '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    "headset": '<path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M21 16a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2ZM3 16a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2Z"/>',
    "banknote": '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
    "file": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>',
    "handshake": '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 16 2.5 2.5a1 1 0 1 0 3-3l-4-4"/><path d="M18 14 8 4 2 10l4 4"/><path d="m2 10 4 4 4-4-4-4Z"/>',
    "sparkles": '<path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3Z"/>',
    "search": '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    "sliders": '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    "plus": '<path d="M12 5v14M5 12h14"/>',
    "send": '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4Z"/>',
    "quote": '<path d="M3 21c3 0 7-1 7-8V5H3v7h4c0 4-2 5-4 5Zm11 0c3 0 7-1 7-8V5h-7v7h4c0 4-2 5-4 5Z"/>',
    "star": '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z"/>',
    "sun": '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M5 5l1.5 1.5M17.5 17.5 19 19M2 12h2M20 12h2M5 19l1.5-1.5M17.5 6.5 19 5"/>',
    "moon": '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>',
    "facebook": '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>',
    "instagram": '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    "youtube": '<path d="M22 8.6a3 3 0 0 0-2.1-2.1C18 6 12 6 12 6s-6 0-7.9.5A3 3 0 0 0 2 8.6 31 31 0 0 0 2 12a31 31 0 0 0 .1 3.4A3 3 0 0 0 4.1 17.5C6 18 12 18 12 18s6 0 7.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.1-3.4Z"/><path d="m10 15 5-3-5-3Z"/>',
    "linkedin": '<path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="11"/><circle cx="4" cy="4" r="2"/>',
    "package": '<path d="m7.5 4.3 9 5.2M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
    "tractor": '<path d="M4 4h6l1 7"/><circle cx="7" cy="15" r="4"/><circle cx="18" cy="17" r="3"/><path d="M11 11h7l2 5M7 11V4M11 15h4"/>',
    "wheat": '<path d="M12 22V8M6 9c0-2 1.5-3 3-3 0 2-1.5 3-3 3Zm0 4c0-2 1.5-3 3-3 0 2-1.5 3-3 3Zm0 4c0-2 1.5-3 3-3 0 2-1.5 3-3 3Zm12-8c0-2-1.5-3-3-3 0 2 1.5 3 3 3Zm0 4c0-2-1.5-3-3-3 0 2 1.5 3 3 3Zm0 4c0-2-1.5-3-3-3 0 2 1.5 3 3 3Z"/>',
    "spray": '<path d="M3 3h.01M7 5h.01M5 9h.01M11 5h.01M9 9h.01M13 9h.01"/><path d="M12 4h4v4h-4ZM12 8v3a2 2 0 0 0 2 2h0a2 2 0 0 1 2 2v6H10v-6a2 2 0 0 1 2-2"/>',
    "mountain": '<path d="m8 3 4 8 5-5 5 14H2L8 3Z"/>',
    "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    "leaf": '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
    "droplet": '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>'
  };
  function icon(name, cls) {
    var p = ICONS[name]; if (!p) return "";
    return '<svg ' + P.vb + (cls ? ' class="' + cls + '"' : "") + ' aria-hidden="true">' + p + "</svg>";
  }
  w.PTicon = icon;

  /* ------------------------------ HELPERS -------------------------------- */
  function el(html) { var t = d.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function wm(b) { // brand wordmark styling — uniform across all brands (client request: match RapidSpray, no per-brand weight/uppercase/italic)
    return "font-family:var(--font-display);white-space:nowrap;font-weight:700;";
  }
  function starsHtml(n) { var s = ""; for (var i = 0; i < 5; i++) s += '<svg viewBox="0 0 24 24" fill="' + (i < n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="2">' + ICONS.star + "</svg>"; return '<span class="stars">' + s + "</span>"; }

  /* --------------------------- NAV / MEGA DATA --------------------------- */
  var ROUTES = {
    home: "index.html", equipment: "equipment.html", service: "service.html", parts: "parts.html",
    finance: "finance.html", about: "about.html", contact: "contact.html", news: "news.html",
    disclaimer: "disclaimer.html", privacy: "privacy.html",
    category: function (s) { return "category.html?cat=" + s; },
    product: function (s) { return "product.html?slug=" + s; },
    brand: function (s) { return "equipment.html?brand=" + s; }
  };
  w.PTROUTES = ROUTES;

  var topNav = [
    { label: "Home", href: ROUTES.home },
    { label: "Equipment", href: ROUTES.equipment, menu: "equipment" },
    { label: "Brands", href: ROUTES.equipment, menu: "brands" },
    { label: "Sales & Service", href: ROUTES.service, menu: "sales" },
    { label: "Finance", href: ROUTES.finance },
    { label: "About", href: ROUTES.about },
    { label: "News", href: ROUTES.news },
    { label: "Contact", href: ROUTES.contact }
  ];
  var CAT_ICON = { tractors: "tractor", "hay-equipment": "wheat", sprayers: "spray", attachments: "cog", mulchers: "settings", utility: "mountain", "utility-vehicles": "truck", "turf-care": "leaf", "woods-equipment": "package" };

  /* ------------------------------ HEADER --------------------------------- */
  function megaHtml(kind) {
    if (kind === "equipment") {
      var cats = PT.categories.map(function (c) {
        return '<a class="mega-cat" href="' + ROUTES.category(c.slug) + '"><span class="mc-icon">' + icon(CAT_ICON[c.slug]) + '</span><span><b>' + c.name + "</b><span>" + c.blurb + "</span></span></a>";
      }).join("");
      cats += featureHtml("Now available", "Used Tractors & Equipment", "Inspected pre-owned machinery, ready to work.", ROUTES.equipment + "?condition=used", "Browse used stock", PT.PHOTO.usedMachinery, "mega-feature--cat");
      return '<div class="mega glass"><div class="mega-grid"><div class="mega-cats">' + cats + "</div>" + featureHtml("Featured", "Browse the full catalogue", "Filter by category, brand, horsepower and price across our complete range.", ROUTES.equipment, "View all equipment", PT.PHOTO.tractorHarvest) + "</div></div>";
    }
    if (kind === "brands") {
      var bs = PT.brands.map(function (b) {
        return '<a class="mega-brand" href="' + ROUTES.brand(b.slug) + '"><span><b style="' + wm(b) + '">' + b.name + "</b><small>" + b.category + '</small></span><span class="origin">' + b.origin + "</span></a>";
      }).join("");
      return '<div class="mega glass"><div class="mega-brands">' + bs + "</div></div>";
    }
    if (kind === "sales") {
      var c1 = [["New & Used Machinery", ROUTES.equipment, "tractor"], ["Finance Options", ROUTES.finance, "banknote"], ["Latest Specials", ROUTES.news, "sparkles"]];
      var c2 = [["Service Centre", ROUTES.service, "wrench"], ["Book a Service", ROUTES.service + "#book", "calendar"], ["Spare Parts", ROUTES.parts, "settings"]];
      function col(h, arr) { return '<div class="mega-col"><h4>' + h + "</h4>" + arr.map(function (l) { return '<a href="' + l[1] + '">' + icon(l[2]) + "<span>" + l[0] + "</span></a>"; }).join("") + "</div>"; }
      return '<div class="mega glass"><div class="mega-grid"><div class="mega-cols">' + col("Sales", c1) + col("Service & Parts", c2) + "</div>" + featureHtml("Workshop", "Factory-trained servicing", "Keep your equipment working hard with genuine parts and expert technicians.", ROUTES.service + "#book", "Book a service", PT.PHOTO.mccormickService) + "</div></div>";
    }
    return "";
  }
  function featureHtml(eyebrow, title, body, href, cta, photoId, mod) {
    return '<a class="mega-feature' + (mod ? " " + mod : "") + '" href="' + href + '"><img src="' + PT.img(photoId, 700) + '" alt="" loading="lazy"><span class="mf-body"><span class="eyebrow">' + eyebrow + "</span><h4>" + title + "</h4><p>" + body + '</p><span class="mf-cta">' + cta + " " + icon("arrow-right") + "</span></span></a>";
  }

  function renderHeader() {
    var mount = d.getElementById("site-header"); if (!mount) return;
    var s = PT.site;
    var navItems = topNav.map(function (it) {
      var caret = it.menu ? icon("chevron-down") : "";
      var mega = it.menu ? '<div class="mega-wrap">' + megaHtml(it.menu) + "</div>" : "";
      return '<div class="nav__item" data-menu="' + (it.menu || "") + '"><a class="nav__link" href="' + it.href + '">' + it.label + caret + "</a>" + mega + "</div>";
    }).join("");

    mount.className = "site-header";
    mount.innerHTML =
      '<div class="topbar"><div class="container topbar__row">' +
        '<a class="topbar__item" href="' + s.emailHref + '">' + icon("mail") + s.email + "</a>" +
        '<div class="topbar__phones">' +
          '<a class="topbar__item" href="' + s.phoneHref + '">' + icon("phone") + s.phone + "</a>" +
          '<a class="topbar__item topbar__item--accent" href="' + (s.mobileHref || s.phoneHref) + '">' + icon("phone") + (s.mobile || s.phone) +
            (s.mobileLabel ? '<span class="topbar__note">' + s.mobileLabel + "</span>" : "") + "</a>" +
        "</div>" +
      "</div></div>" +
      '<div class="container"><div class="nav">' +
        logoHtml() +
        '<nav class="nav__menu" aria-label="Primary">' + navItems + "</nav>" +
        '<div class="nav__right">' +
          '<a class="nav__phone" href="' + s.phoneHref + '">' + icon("phone") + s.phone + "</a>" +
          '<a class="btn btn--primary btn--sm" href="' + ROUTES.service + '#book" style="display:none">' + icon("calendar") + "Book Service</a>" +
          '<button class="nav__burger" type="button" aria-label="Open menu" id="js-burger">' + icon("menu") + "</button>" +
        "</div>" +
      "</div></div>";
    // show Book Service button on >=sm
    var bookBtn = mount.querySelector(".btn--primary");
    var mq = w.matchMedia("(min-width:640px)");
    function syncBook() { bookBtn.style.display = mq.matches ? "inline-flex" : "none"; }
    syncBook(); mq.addEventListener("change", syncBook);

    renderDrawer();
    wireHeader();
  }

function logoHtml() {
  return `
    <a class="logo" href="${ROUTES.home}" aria-label="Prestige Tractors Ballarat — home">

      <img
        src="assets/images/prestige-white-no-bg.png"
        alt="Prestige Tractors Ballarat"
        class="logo__image logo__image--light"
      >

      <img
        src="assets/images/prestige-no-bg.png"
        alt="Prestige Tractors Ballarat"
        class="logo__image logo__image--dark"
      >

    </a>
  `;
}
  /* ------------------------------ DRAWER --------------------------------- */
  function renderDrawer() {
    if (d.getElementById("site-drawer")) return;
    var s = PT.site;
    var groups = [
      { id: "equipment", label: "Equipment", links: [["All Equipment", ROUTES.equipment], ["Used Tractors & Equipment", ROUTES.equipment + "?condition=used"]].concat(PT.categories.map(function (c) { return [c.name, ROUTES.category(c.slug)]; })) },
      { id: "brands", label: "Brands", links: PT.brands.map(function (b) { return [b.name, ROUTES.brand(b.slug)]; }) },
      { id: "sales", label: "Sales & Service", links: [["Service Centre", ROUTES.service], ["Book a Service", ROUTES.service + "#book"], ["Spare Parts", ROUTES.parts], ["Finance", ROUTES.finance]] }
    ];
    var groupsHtml = groups.map(function (g) {
      var links = g.links.map(function (l) { return '<a href="' + l[1] + '">' + l[0] + "</a>"; }).join("");
      return '<div class="drawer__group" data-group="' + g.id + '"><button class="drawer__toggle" type="button">' + g.label + icon("chevron-down") + '</button><div class="drawer__sub">' + links + "</div></div>";
    }).join("");
    var simple = [["About", ROUTES.about], ["News & Specials", ROUTES.news], ["Contact", ROUTES.contact]]
      .map(function (l) { return '<a class="drawer__link" href="' + l[1] + '">' + l[0] + "</a>"; }).join("");

    var backdrop = el('<div class="backdrop" id="drawer-backdrop"></div>');
    var drawer = el(
      '<aside class="drawer" id="site-drawer" role="dialog" aria-modal="true" aria-label="Site menu">' +
        '<div class="drawer__head">' + logoHtml() + '<button class="drawer__close" id="js-drawer-close" aria-label="Close menu">' + icon("x") + "</button></div>" +
        '<div class="drawer__body"><nav aria-label="Mobile">' + groupsHtml + simple + "</nav></div>" +
        '<div class="drawer__foot">' +
          '<a class="btn btn--primary btn--full" href="' + ROUTES.service + '#book">' + icon("calendar") + "Book a Service</a>" +
          '<a class="drawer__phone" href="' + s.phoneHref + '">' + icon("phone") + s.phone + "</a>" +
        "</div>" +
      "</aside>");
    var shell = el('<div class="overlay-shell" id="drawer-shell"></div>');
    shell.appendChild(backdrop); shell.appendChild(drawer);
    d.body.appendChild(shell);

    drawer.querySelectorAll(".drawer__group").forEach(function (g) {
      if (g.dataset.group === "equipment") g.classList.add("is-open");
      g.querySelector(".drawer__toggle").addEventListener("click", function () { g.classList.toggle("is-open"); });
    });
    function close() { drawer.classList.remove("is-open"); backdrop.classList.remove("is-active"); d.body.style.overflow = ""; }
    function open() { drawer.classList.add("is-open"); backdrop.classList.add("is-active"); d.body.style.overflow = "hidden"; }
    w.PTopenDrawer = open;
    backdrop.addEventListener("click", close);
    d.getElementById("js-drawer-close").addEventListener("click", close);
    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
  }

  /* ------------------------------ FOOTER --------------------------------- */
  function renderFooter() {
    var mount = d.getElementById("site-footer"); if (!mount) return;
    var s = PT.site;
    var cols = [
      { h: "Equipment", links: [["All Equipment", ROUTES.equipment]].concat(PT.categories.map(function (c) { return [c.name, ROUTES.category(c.slug)]; })) },
      { h: "Brands", links: PT.brands.filter(function (b) { return b.featured; }).map(function (b) { return [b.name, ROUTES.brand(b.slug)]; }) },
      { h: "Sales & Service", links: [["Service Centre", ROUTES.service], ["Spare Parts", ROUTES.parts], ["Finance", ROUTES.finance], ["Latest News", ROUTES.news]] },
      { h: "Company", links: [["About Us", ROUTES.about], ["Contact Us", ROUTES.contact], ["Privacy Policy", ROUTES.privacy], ["Disclaimer", ROUTES.disclaimer]] }
    ];
    var colsHtml = cols.map(function (c) {
      return "<div><h4>" + c.h + "</h4><ul>" + c.links.map(function (l) { return '<li><a href="' + l[1] + '">' + l[0] + "</a></li>"; }).join("") + "</ul></div>";
    }).join("");
    var socials = [["facebook", s.social.facebook], ["instagram", s.social.instagram], ["youtube", s.social.youtube], ["linkedin", s.social.linkedin]]
      .map(function (x) { return '<a href="' + x[1] + '" aria-label="' + x[0] + '">' + icon(x[0]) + "</a>"; }).join("");
    var hours = s.hours.map(function (h) { return "<span style='display:block'>" + h.days + ": <span style='color:var(--fg)'>" + h.time + "</span></span>"; }).join("");

    mount.className = "site-footer";
    mount.innerHTML =
      '<div class="container">' +
        '<div class="footer-cta surface"><div><span class="eyebrow" style="margin-bottom:.75rem">Ready when you are</span><h3>Talk to Victoria\'s trusted equipment team</h3><p>Whether you\'re buying, financing, servicing or sourcing parts — our local team is here to help your operation keep moving.</p></div>' +
          '<div class="footer-cta__actions"><a class="btn btn--primary btn--full" href="' + ROUTES.contact + '">Enquire Now ' + icon("arrow-right", "arrow") + '</a><a class="btn btn--secondary btn--full" href="' + s.phoneHref + '">' + icon("phone") + s.phone + "</a></div>" +
        "</div>" +
        '<div class="footer-main"><div class="footer-about">' + logoHtml() +
          "<p>" + s.fullName + " — your local dealer for McCormick, Landini, Bobcat & Mahindra tractors, Enorossi hay equipment, DakenAg, RapidSpray and Grasshopper. Proudly serving Victorian farms, contractors and businesses.</p>" +
          '<ul class="footer-nap">' +
            "<li>" + icon("pin") + s.addressLine + "</li>" +
            '<li><a href="' + s.phoneHref + '">' + icon("phone") + s.phone + "</a></li>" +
            '<li><a href="' + (s.mobileHref || s.phoneHref) + '">' + icon("phone") + "Mobile: " + (s.mobile || s.phone) + "</a></li>" +
            '<li><a href="' + s.emailHref + '">' + icon("mail") + s.email + "</a></li>" +
            "<li>" + icon("clock") + "<span>" + hours + "</span></li>" +
          "</ul>" +
          '<div class="socials">' + socials + "</div>" +
        '</div><div class="footer-cols">' + colsHtml + "</div></div>" +
        '<div class="hairline" style="margin-block:2.5rem"></div>' +
        '<div class="footer-legal"><p>© 2026 ' + s.fullName + '. All rights reserved.</p><p class="fine">Specifications, pricing and availability are indicative and subject to change. Images may include optional equipment. E&amp;OE.</p></div>' +
      "</div>";
  }

  /* ------------------------- HEADER INTERACTIONS ------------------------- */
  function wireHeader() {
    var header = d.getElementById("site-header");
    var isHome = d.body.dataset.page === "home";
    header.classList.add("is-solid"); // always solid — never transparent, even at first paint over the hero
    function update() {
      header.removeAttribute("data-theme"); // always light — no dark theme site-wide
    }
    update();
    w.addEventListener("scroll", update, { passive: true });

    d.getElementById("js-burger").addEventListener("click", function () { if (w.PTopenDrawer) w.PTopenDrawer(); });

    // Mega menu hover (desktop)
    var items = header.querySelectorAll(".nav__item[data-menu]");
    var closeTimer;
    items.forEach(function (it) {
      if (!it.dataset.menu) return;
      it.addEventListener("mouseenter", function () { w.clearTimeout(closeTimer); items.forEach(function (x) { x.classList.remove("is-open"); }); it.classList.add("is-open"); });
    });
    header.addEventListener("mouseleave", function () { closeTimer = w.setTimeout(function () { items.forEach(function (x) { x.classList.remove("is-open"); }); }, 120); });
  }

  /* --------------------------- REVEAL ON SCROLL -------------------------- */
  function initReveal() {
    var els = d.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in w) || w.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(function (e) { e.classList.add("is-visible"); }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { rootMargin: "-60px" });
    els.forEach(function (e) { io.observe(e); });
  }
  w.PTobserveReveal = function (node) { node.querySelectorAll && node.querySelectorAll(".reveal").forEach(function (e) { e.classList.add("is-visible"); }); };

  /* ------------------------------- FORMS --------------------------------- */
  function initForms() {
    d.querySelectorAll("form[data-success]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var msg = form.getAttribute("data-success") || "Thanks — we'll be in touch shortly.";
        var title = form.getAttribute("data-success-title") || "Message received";
        var box = el('<div class="form-success reveal is-visible"><span class="fs-icon">' + icon("circle-check") + "</span><h3>" + title + "</h3><p>" + msg + "</p></div>");
        form.replaceWith(box);
        box.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });
  }

  /* ------------------------------ ACCORDION ------------------------------ */
  function initAccordion() {
    d.querySelectorAll(".accordion").forEach(function (acc) {
      acc.querySelectorAll(".accordion__item").forEach(function (item, i) {
        if (i === 0) item.classList.add("is-open");
        item.querySelector(".accordion__q").addEventListener("click", function () {
          var open = item.classList.contains("is-open");
          acc.querySelectorAll(".accordion__item").forEach(function (x) { x.classList.remove("is-open"); });
          if (!open) item.classList.add("is-open");
        });
      });
    });
  }

  /* ----------------------- PUBLIC RENDER HELPERS ------------------------- */
  var AVAIL = { "in-stock": ["In Stock", "success"], enquire: ["Enquire", "brand"], arriving: ["Arriving Soon", "gold"] };
  function badge(text, tone) { return '<span class="badge badge--' + tone + '">' + text + "</span>"; }

  function productCard(p) {
    var b = PT.getBrand(p.brand);
    var av = AVAIL[p.availability];
    var tags = badge(av[0], av[1]) + (p.badges || []).map(function (x) { return badge(x, "neutral"); }).join("");
    var hp = p.hp != null ? '<span class="product-card__hp">' + p.hp + " hp</span>" : "";
    var price = p.priceFrom != null
      ? "<small>From</small><b>" + PT.formatPrice(p.priceFrom) + "</b>" + (p.priceNote ? "<em>" + p.priceNote + "</em>" : "")
      : "<b>Contact for price</b>";
    return '<article class="product-card reveal">' +
      '<a class="product-card__media" href="' + ROUTES.product(p.slug) + '"><img src="' + PT.img(p.photoId, 700) + '" alt="' + p.name + '" loading="lazy">' +
        '<span class="product-card__tags">' + tags + "</span>" + hp + "</a>" +
      '<div class="product-card__body"><div class="product-card__top"><span class="product-card__brand">' + (b ? b.name : p.brand) + '</span><span class="product-card__cat">' + (b ? b.category : "") + "</span></div>" +
        '<h3><a href="' + ROUTES.product(p.slug) + '">' + p.name + "</a></h3>" +
        '<p class="product-card__tagline">' + p.tagline + "</p>" +
        '<div class="product-card__foot"><div class="product-card__price">' + price + "</div>" +
        '<span class="product-card__arrow">' + icon("arrow-up-right") + "</span></div></div></article>";
  }
  w.PTUI = {
    icon: icon, badge: badge, wm: wm, starsHtml: starsHtml, productCard: productCard, AVAIL: AVAIL, ROUTES: ROUTES, CAT_ICON: CAT_ICON,
    articleCard: function (a) {
      return '<article class="article-card reveal"><div class="article-card__media"><img src="' + PT.img(a.photoId, 800) + '" alt="' + a.title + '" loading="lazy"><span class="article-card__tags">' + badge(a.type, a.type === "Special" ? "brand" : "neutral") + "</span></div>" +
        '<div class="article-card__body"><time>' + a.date + "</time><h3>" + a.title + "</h3><p>" + a.excerpt + "</p>" +
        (a.cta ? '<a class="article-card__cta" href="' + a.cta.href + '">' + a.cta.label + " " + icon("arrow-right") + "</a>" : "") + "</div></article>";
    }
  };

  /* ------------------------------- BOOT ---------------------------------- */
  function injectIcons(scope) {
    (scope || d).querySelectorAll("[data-icon]").forEach(function (node) {
      node.innerHTML = icon(node.getAttribute("data-icon"));
      node.removeAttribute("data-icon");
    });
  }
  w.PTinjectIcons = injectIcons;

  /* --------------------------- HERO VIDEO -------------------------------- */
  function initHeroVideo() {
    var v = d.getElementById("hero-video");
    if (!v) return;
    // Respect reduced-motion and data-saver: keep the static poster, download
    // zero video bytes (the <source> has no src until we opt in below).
    var reduce = w.matchMedia && w.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var saveData = w.navigator && w.navigator.connection && w.navigator.connection.saveData;
    if (reduce || saveData) return;
    var src = v.querySelector("source[data-src]");
    if (src && !src.getAttribute("src")) { src.setAttribute("src", src.getAttribute("data-src")); v.load(); }
    var p = v.play();
    if (p && typeof p.catch === "function") p.catch(function () {}); // autoplay blocked → poster stays
  }

  function boot() {
    renderHeader();
    renderFooter();
    initHeroVideo();
    // page-specific rendering first, so dynamic content gets wired below
    if (w.PTpage) w.PTpage();
    injectIcons();
    if (w.PTanimate) w.PTanimate(); else initReveal();
    initForms();
    initAccordion();
    var y = d.getElementById("js-year"); if (y) y.textContent = "2026";
    // smooth-scroll to #book etc. on load if hash present
    if (location.hash) { var t = d.getElementById(location.hash.slice(1)); if (t) setTimeout(function () { t.scrollIntoView({ behavior: "smooth" }); }, 300); }
  }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", boot); else boot();
})(window, document);
