/* Category page — populated from ?cat=slug */
window.PTpage = function () {
  var PT = window.PT, U = window.PTUI, d = document, icon = U.icon, R = U.ROUTES;
  var slug = new URLSearchParams(location.search).get("cat");
  var cat = PT.getCategory(slug);
  if (!cat) { location.replace("equipment.html"); return; }

  d.title = cat.name + " | Prestige Tractors Ballarat";
  var items = PT.byCategory(cat.slug);
  var catBrands = cat.brands.map(PT.getBrand).filter(Boolean);
  var others = PT.categories.filter(function (c) { return c.slug !== cat.slug; });

  var header =
    '<header class="page-header" data-theme="dark"><img class="page-header__bg" src="' + PT.img(cat.photoId, 2000) + '" alt="">' +
      '<div class="container"><div class="page-header__inner">' +
        '<nav class="breadcrumb"><a href="index.html">Home</a>' + icon("chevron-right") + '<a href="equipment.html">Equipment</a>' + icon("chevron-right") + '<span class="current">' + cat.name + "</span></nav>" +
        '<span class="eyebrow">Equipment Category</span><h1>' + cat.name + "</h1>" +
        '<p class="page-header__desc">' + cat.description + "</p>" +
        '<div class="page-header__actions"><a class="btn btn--primary" href="equipment.html">Full catalogue ' + icon("arrow-right", "arrow") + '</a><a class="btn btn--glass" href="contact.html">' + icon("phone") + " Enquire</a></div>" +
      "</div></div></header>";

  var brandsBar = catBrands.length
    ? '<div class="section--alt"><div class="container" style="padding-block:2rem"><div style="display:flex;flex-wrap:wrap;align-items:center;gap:.75rem 1.5rem"><span class="eyebrow">Brands</span>' +
        catBrands.map(function (b) { return '<a href="' + R.brand(b.slug) + '" style="' + U.wm(b) + ';font-size:1.125rem;color:var(--ink-200)">' + b.name + "</a>"; }).join("") + "</div></div></div>"
    : "";

  var grid = items.length
    ? '<div class="grid-cards cols-3">' + items.map(U.productCard).join("") + "</div>"
    : '<p class="subtle">No items currently listed — please <a href="contact.html" style="color:var(--brand-400)">contact us</a> for availability.</p>';

  var otherCats = '<div class="cards-grid cols-4" style="margin-top:0">' + others.map(function (c) {
    return '<a class="feature-card surface reveal" href="' + R.category(c.slug) + '" style="display:flex;align-items:center;justify-content:space-between"><span style="display:flex;align-items:center;gap:.75rem"><span class="icon-chip" style="width:2.5rem;height:2.5rem">' + icon(U.CAT_ICON[c.slug]) + '</span><b style="font-family:var(--font-display);color:var(--fg)">' + c.name + "</b></span>" + icon("arrow-right") + "</a>";
  }).join("") + "</div>";

  d.getElementById("cat-main").innerHTML =
    header +
    brandsBar +
    '<section class="section section--canvas"><div class="container"><h2 style="font-size:1.5rem;margin-bottom:2rem">' + items.length + " machine" + (items.length !== 1 ? "s" : "") + ' available</h2>' + grid + "</div></section>" +
    '<section class="section section--alt"><div class="container"><h2 style="font-size:1.5rem;margin-bottom:2rem">Explore other categories</h2>' + otherCats + "</div></section>";
};
