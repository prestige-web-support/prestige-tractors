/* Category page — populated from ?cat=slug. Supports three layouts:
   default "grid" (product cards), "collage" (image mosaic, e.g. Enorossi hay),
   and "gallery" (simple photo grid + enquiry, e.g. Woods equipment). */
window.PTpage = function () {
  var PT = window.PT, U = window.PTUI, d = document, icon = U.icon, R = U.ROUTES;
  var slug = new URLSearchParams(location.search).get("cat");
  var cat = PT.getCategory(slug);
  if (!cat) { location.replace("equipment.html"); return; }

  d.title = cat.name + " | Prestige Tractors Ballarat";
  var items = PT.byCategory(cat.slug);
  var catBrands = (cat.brands || []).map(PT.getBrand).filter(Boolean);
  var others = PT.categories.filter(function (c) { return c.slug !== cat.slug; });
  var enquiryHref = "contact.html?enquiry=" + encodeURIComponent(cat.name);

  var header =
    '<header class="page-header"><img class="page-header__bg" src="' + PT.img(cat.photoId, 2000) + '" alt="">' +
      '<div class="container"><div class="page-header__inner">' +
        '<nav class="breadcrumb"><a href="index.html">Home</a>' + icon("chevron-right") + '<a href="equipment.html">Equipment</a>' + icon("chevron-right") + '<span class="current">' + cat.name + "</span></nav>" +
        '<span class="eyebrow">Equipment Category</span><h1>' + cat.name + "</h1>" +
        (cat.highlight ? '<p class="cat-highlight">' + icon("circle-check") + cat.highlight + "</p>" : "") +
        '<p class="page-header__desc">' + cat.description + "</p>" +
        '<div class="page-header__actions"><a class="btn btn--primary" href="' + (PT.site.mobileHref || PT.site.phoneHref) + '">' + icon("phone") + ' Call Danny Now</a><a class="btn btn--secondary" href="' + enquiryHref + '">' + icon("mail") + ' Enquire</a></div>' +
      "</div></div></header>";

  var brandsBar = catBrands.length
    ? '<div class="section--alt"><div class="container" style="padding-block:2rem"><div style="display:flex;flex-wrap:wrap;align-items:center;gap:.75rem 1.5rem"><span class="eyebrow">Brands</span>' +
        catBrands.map(function (b) { return '<a href="' + R.brand(b.slug) + '" style="' + U.wm(b) + ';font-size:1.125rem;color:var(--ink-200)">' + b.name + "</a>"; }).join("") + "</div></div></div>"
    : "";

  var body, heading;

  if (cat.layout === "gallery") {
    // Simple photo gallery (no per-product folders) + single enquiry CTA
    var gimgs = (cat.gallery && cat.gallery.length ? cat.gallery : items.map(function (p) { return p.photoId; }));
    heading = "The range";
    body = '<div class="collage">' + gimgs.map(function (src) {
      return '<figure class="collage__item"><img src="' + PT.img(src, 700) + '" alt="' + cat.name + '" loading="lazy"></figure>';
    }).join("") + "</div>" +
    '<div class="cta-row" style="justify-content:center;margin-top:2.5rem"><a class="btn btn--primary btn--lg" href="' + enquiryHref + '">' + icon("mail") + " Email us about " + cat.name + "</a><a class=\"btn btn--secondary btn--lg\" href=\"" + (PT.site.mobileHref || PT.site.phoneHref) + "\">" + icon("phone") + " Call Danny Now</a></div>";
  } else if (cat.layout === "collage") {
    // Image-forward mosaic of the range — tiles link to the model page
    heading = "The range";
    body = items.length
      ? '<div class="collage">' + items.map(function (p) {
          return '<a class="collage__item collage__item--link" href="' + R.product(p.slug) + '"><img src="' + PT.img(p.photoId, 700) + '" alt="' + p.name + '" loading="lazy"><figcaption class="collage__cap">' + p.name + "</figcaption></a>";
        }).join("") + "</div>"
      : '<p class="subtle">Please <a href="' + enquiryHref + '" style="color:var(--brand-400)">contact us</a> for availability.</p>';
  } else {
    // Default product-card grid
    heading = items.length + " machine" + (items.length !== 1 ? "s" : "") + " available";
    body = items.length
      ? '<div class="grid-cards cols-3">' + items.map(U.productCard).join("") + "</div>"
      : '<p class="subtle">No items currently listed — please <a href="' + enquiryHref + '" style="color:var(--brand-400)">contact us</a> for availability.</p>';
  }

  var otherCats = '<div class="cards-grid cols-4" style="margin-top:0">' + others.map(function (c) {
    return '<a class="feature-card surface reveal" href="' + R.category(c.slug) + '" style="display:flex;align-items:center;justify-content:space-between"><span style="display:flex;align-items:center;gap:.75rem"><span class="icon-chip" style="width:2.5rem;height:2.5rem">' + icon(U.CAT_ICON[c.slug]) + '</span><b style="font-family:var(--font-display);color:var(--fg)">' + c.name + "</b></span>" + icon("arrow-right") + "</a>";
  }).join("") + "</div>";

  d.getElementById("cat-main").innerHTML =
    header +
    brandsBar +
    '<section class="section section--canvas"><div class="container"><h2 style="font-size:1.5rem;margin-bottom:2rem">' + heading + "</h2>" + body + "</div></section>" +
    '<section class="section section--alt"><div class="container"><h2 style="font-size:1.5rem;margin-bottom:2rem">Explore other categories</h2>' + otherCats + "</div></section>";
};
