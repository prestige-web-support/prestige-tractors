/* Product detail — populated from ?slug=slug */
window.PTpage = function () {
  var PT = window.PT, U = window.PTUI, d = document, icon = U.icon, R = U.ROUTES;
  var slug = new URLSearchParams(location.search).get("slug");
  var p = PT.getProduct(slug);
  if (!p) { location.replace("equipment.html"); return; }

  var brand = PT.getBrand(p.brand), cat = PT.getCategory(p.category);
  var av = U.AVAIL[p.availability];
  d.title = p.name + " | Prestige Tractors Ballarat";

  var tags = U.badge(p.availability === "enquire" ? "Enquiry Only" : av[0], av[1]) + (p.badges || []).map(function (x) { return U.badge(x, "neutral"); }).join("");
  var statCards = p.specs.slice(0, 3).map(function (s) { return '<div class="sc surface"><b>' + s[1] + "</b><span>" + s[0] + "</span></div>"; }).join("");
  var price = p.priceFrom != null
    ? '<small>Priced from</small><b>' + PT.formatPrice(p.priceFrom) + "</b>" + (p.priceNote ? "<em>" + p.priceNote + "</em>" : "")
    : '<small>Pricing</small><b style="font-size:1.25rem">Contact for best price</b>';
  var highlights = p.highlights.map(function (h) { return "<li>" + icon("circle-check") + h + "</li>"; }).join("");
  var assurances = [["shield", "Genuine parts & warranty"], ["wrench", "Factory-trained servicing"], ["banknote", "Competitive finance available"]]
    .map(function (a) { return "<span>" + icon(a[0]) + a[1] + "</span>"; }).join("");

  var breadcrumb = '<nav class="breadcrumb"><a href="index.html">Home</a>' + icon("chevron-right") + '<a href="equipment.html">Equipment</a>' + icon("chevron-right") +
    (cat ? '<a href="' + R.category(cat.slug) + '">' + cat.name + "</a>" + icon("chevron-right") : "") + '<span class="current">' + p.name + "</span></nav>";

  var hero =
    '<div class="container" style="padding-block:2.5rem">' + breadcrumb +
      '<div class="detail" style="margin-top:2rem">' +
        '<div class="detail__media reveal"><div class="media-frame ratio-43" data-theme="dark"><img src="' + PT.img(p.photoId, 1100) + '" alt="' + p.name + '"><span class="detail__tags">' + tags + '</span></div><div class="stat-cards">' + statCards + "</div></div>" +
        '<div class="reveal" data-delay="1">' +
          '<div style="display:flex;align-items:center;gap:.75rem"><a class="detail__brand" href="' + R.brand(p.brand) + '">' + (brand ? brand.name : p.brand) + '</a><span class="subtle">·</span><span class="subtle" style="text-transform:capitalize">' + p.condition + " " + (cat ? cat.name.toLowerCase() : "") + "</span></div>" +
          "<h1>" + p.name + "</h1>" +
          '<p class="detail__summary">' + p.summary + "</p>" +
          '<div class="detail__price">' + price + "</div>" +
          '<ul class="detail__highlights">' + highlights + "</ul>" +
          '<div class="detail__cta"><a class="btn btn--primary btn--lg" href="contact.html?enquiry=' + encodeURIComponent(p.name) + '">Enquire about this model ' + icon("arrow-right", "arrow") + '</a><a class="btn btn--secondary btn--lg" href="finance.html">' + icon("banknote") + " Finance options</a></div>" +
          '<div class="assurances">' + assurances + "</div>" +
        "</div>" +
      "</div></div>";

  var features = p.features.map(function (f) { return '<li class="surface">' + icon("check") + f + "</li>"; }).join("");
  var specs = p.specs.map(function (s) { return '<div class="row"><dt>' + s[0] + "</dt><dd>" + s[1] + "</dd></div>"; }).join("");

  var overview =
    '<section class="section section--alt"><div class="container"><div class="split" style="align-items:flex-start;grid-template-columns:1fr">' +
      '<div class="detail-overview" style="display:grid;gap:2.5rem;grid-template-columns:1fr">' +
        '<div><div class="reveal"><h2 style="font-size:1.5rem">Overview</h2><p class="lead" style="margin-top:1rem">' + p.description + '</p>' +
          '<h3 style="font-size:1.25rem;margin-top:2.5rem">Key features</h3><ul class="kv-list">' + features + "</ul></div></div>" +
        '<div class="reveal"><h2 style="font-size:1.5rem">Specifications</h2><div class="spec-table surface">' + specs + '</div><p class="subtle" style="font-size:.75rem;margin-top:1rem">Specifications are indicative and may vary by configuration. Confirm details with our sales team.</p></div>' +
      "</div></div></div></section>";

  var related = PT.byCategory(p.category).concat(PT.byBrand(p.brand)).filter(function (x, i, arr) { return x.slug !== p.slug && arr.findIndex(function (y) { return y.slug === x.slug; }) === i; }).slice(0, 3);
  var relatedHtml = related.length
    ? '<section class="section section--canvas"><div class="container"><div class="section-head has-action"><div class="section-head__main reveal"><span class="eyebrow">You may also like</span><h2>Related equipment</h2></div><div class="reveal"><a class="btn btn--secondary" href="equipment.html">View all ' + icon("arrow-right", "arrow") + '</a></div></div><div class="grid-cards cols-3" style="margin-top:3rem">' + related.map(U.productCard).join("") + "</div></div></section>"
    : "";

  // make overview two-column on desktop
  d.getElementById("product-main").innerHTML = hero + overview + relatedHtml;
  var ov = d.querySelector(".detail-overview");
  if (ov && window.matchMedia("(min-width:1024px)").matches) { ov.style.gridTemplateColumns = "1.2fr 1fr"; }
};
