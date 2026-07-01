/* Equipment catalogue — filtering, sorting, mobile sheet. */
window.PTpage = function () {
  var PT = window.PT, U = window.PTUI, d = document, icon = U.icon;
  var PRICE_MAX = 60000;
  var params = new URLSearchParams(location.search);

  var state = {
    q: "",
    categories: params.get("category") ? [params.get("category")] : [],
    brands: params.get("brand") ? [params.get("brand")] : [],
    conditions: [],
    maxPrice: PRICE_MAX,
    sort: "featured"
  };

  var counts = { categories: {}, brands: {} };
  PT.products.forEach(function (p) {
    counts.categories[p.category] = (counts.categories[p.category] || 0) + 1;
    counts.brands[p.brand] = (counts.brands[p.brand] || 0) + 1;
  });

  function toggle(arr, v) { var i = arr.indexOf(v); if (i > -1) arr.splice(i, 1); else arr.push(v); }

  function filterPanelHtml() {
    function group(title, body) { return '<div class="filter-group"><h3>' + title + "</h3>" + body + "</div>"; }
    function check(on, label, count, attr) {
      return '<button class="check ' + (on ? "is-on" : "") + '" ' + attr + '><span class="box">' + icon("check") + '</span><span class="label">' + label + "</span>" + (count != null ? '<span class="count">' + count + "</span>" : "") + "</button>";
    }
    var cats = PT.categories.map(function (c) { return check(state.categories.indexOf(c.slug) > -1, c.name, counts.categories[c.slug] || 0, 'data-f="cat" data-v="' + c.slug + '"'); }).join("");
    var brs = PT.brands.map(function (b) { return check(state.brands.indexOf(b.slug) > -1, b.name, counts.brands[b.slug] || 0, 'data-f="brand" data-v="' + b.slug + '"'); }).join("");
    var conds = [["new", "New"], ["used", "Used"]].map(function (c) { return check(state.conditions.indexOf(c[0]) > -1, c[1], null, 'data-f="cond" data-v="' + c[0] + '"'); }).join("");
    var priceLabel = state.maxPrice >= PRICE_MAX ? PT.formatPrice(PRICE_MAX) + "+" : PT.formatPrice(state.maxPrice);
    return '<div class="filter-search">' + icon("search") + '<input class="input" id="f-search" placeholder="Search equipment…" value="' + state.q.replace(/"/g, "&quot;") + '" aria-label="Search equipment"></div>' +
      group("Category", cats) + group("Brand", brs) + group("Condition", conds) +
      group("Max price", '<input class="range" type="range" min="1000" max="' + PRICE_MAX + '" step="1000" value="' + state.maxPrice + '" id="f-price" aria-label="Maximum price"><div style="margin-top:.5rem;display:flex;justify-content:space-between;font-size:.875rem"><span class="subtle">Up to</span><b style="color:var(--fg)">' + priceLabel + "</b></div>");
  }

  function getFiltered() {
    var q = state.q.trim().toLowerCase();
    var list = PT.products.filter(function (p) {
      if (state.categories.length && state.categories.indexOf(p.category) < 0) return false;
      if (state.brands.length && state.brands.indexOf(p.brand) < 0) return false;
      if (state.conditions.length && state.conditions.indexOf(p.condition) < 0) return false;
      if (p.priceFrom != null && p.priceFrom > state.maxPrice && state.maxPrice < PRICE_MAX) return false;
      if (q) { if ((p.name + " " + p.brand + " " + p.tagline + " " + p.summary).toLowerCase().indexOf(q) < 0) return false; }
      return true;
    });
    list.sort(function (a, b) {
      switch (state.sort) {
        case "price-asc": return (a.priceFrom == null ? Infinity : a.priceFrom) - (b.priceFrom == null ? Infinity : b.priceFrom);
        case "price-desc": return (b.priceFrom == null ? -1 : b.priceFrom) - (a.priceFrom == null ? -1 : a.priceFrom);
        case "hp-desc": return (b.hp || -1) - (a.hp || -1);
        case "name": return a.name.localeCompare(b.name);
        default: return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
    return list;
  }

  function activeCount() {
    return state.categories.length + state.brands.length + state.conditions.length + (state.q ? 1 : 0) + (state.maxPrice < PRICE_MAX ? 1 : 0);
  }

  function renderPanels() {
    d.getElementById("filter-panel").innerHTML = filterPanelHtml();
    d.getElementById("filter-panel-mobile").innerHTML = filterPanelHtml();
    d.querySelectorAll('.filter-panel [data-f]').forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.dataset.f, v = btn.dataset.v;
        if (f === "cat") toggle(state.categories, v);
        else if (f === "brand") toggle(state.brands, v);
        else if (f === "cond") toggle(state.conditions, v);
        syncUrl(); update();
      });
    });
    d.querySelectorAll('.filter-panel #f-search').forEach(function (inp) {
      inp.addEventListener("input", function () { state.q = inp.value; renderResults(); updateMeta(); });
    });
    d.querySelectorAll('.filter-panel #f-price').forEach(function (r) {
      r.addEventListener("input", function () { state.maxPrice = Number(r.value); renderResults(); updateMeta(); refreshPriceLabels(); });
    });
  }
  function refreshPriceLabels() {
    var label = state.maxPrice >= PRICE_MAX ? PT.formatPrice(PRICE_MAX) + "+" : PT.formatPrice(state.maxPrice);
    d.querySelectorAll('.filter-panel .filter-group b').forEach(function (b) { b.textContent = label; });
    d.querySelectorAll('.filter-panel #f-price').forEach(function (r) { r.value = state.maxPrice; });
  }

  function renderChips() {
    var all = '<button class="chip ' + (state.categories.length === 0 ? "is-active" : "") + '" data-cat="">All</button>';
    var chips = PT.categories.map(function (c) {
      var active = state.categories.length === 1 && state.categories[0] === c.slug;
      return '<button class="chip ' + (active ? "is-active" : "") + '" data-cat="' + c.slug + '">' + c.name + "</button>";
    }).join("");
    d.getElementById("chips").innerHTML = all + chips;
    d.querySelectorAll("#chips .chip").forEach(function (ch) {
      ch.addEventListener("click", function () {
        state.categories = ch.dataset.cat ? [ch.dataset.cat] : [];
        syncUrl(); update();
      });
    });
  }

  function renderResults() {
    var list = getFiltered();
    var wrap = d.getElementById("results"), empty = d.getElementById("empty");
    if (list.length) {
      wrap.classList.remove("hidden"); empty.classList.add("hidden");
      wrap.innerHTML = list.map(U.productCard).join("");
      addQuoteButtons(wrap, list);
      window.PTinjectIcons(wrap);
      requestAnimationFrame(function () { wrap.querySelectorAll(".reveal").forEach(function (e) { e.classList.add("is-visible"); }); });
    } else {
      wrap.classList.add("hidden"); empty.classList.remove("hidden");
    }
    return list.length;
  }

  // "Request Quote" opens the checkout overlay (assets/js/checkout.js)
  // pre-filled with this exact card's product. Added here rather than in
  // U.productCard (site.js) since that template is shared by pages that
  // don't have the checkout overlay in their DOM.
  function addQuoteButtons(wrap, list) {
    wrap.querySelectorAll(".product-card").forEach(function (card, i) {
      var p = list[i];
      var body = card.querySelector(".product-card__body");
      if (!p || !body) return;
      var btn = d.createElement("button");
      btn.type = "button";
      btn.className = "btn btn--secondary btn--sm btn--full product-card__quote";
      btn.innerHTML = icon("send") + " Request Quote";
      btn.addEventListener("click", function () {
        if (window.PTopenCheckout) window.PTopenCheckout(p);
      });
      body.appendChild(btn);
    });
  }
  function updateMeta() {
    var n = getFiltered().length, ac = activeCount();
    d.getElementById("result-count").textContent = n;
    d.getElementById("result-word").textContent = (n === 1 ? "result" : "results") + (ac ? " · filtered" : "");
    d.getElementById("clear-all").style.display = ac ? "block" : "none";
    var of = d.getElementById("open-filters");
    of.innerHTML = icon("sliders") + " Filters" + (ac ? " (" + ac + ")" : "");
  }
  function update() { renderChips(); renderPanels(); renderResults(); updateMeta(); }

  function syncUrl() {
    var u = new URLSearchParams();
    if (state.brands.length === 1) u.set("brand", state.brands[0]);
    if (state.categories.length === 1) u.set("category", state.categories[0]);
    var qs = u.toString();
    history.replaceState(null, "", location.pathname + (qs ? "?" + qs : ""));
  }
  function clearAll() { state.q = ""; state.categories = []; state.brands = []; state.conditions = []; state.maxPrice = PRICE_MAX; state.sort = "featured"; d.getElementById("sort").value = "featured"; syncUrl(); update(); }

  // Brand quick links
  d.getElementById("brand-links").innerHTML = PT.brands.map(function (b) {
    return '<button class="chip" data-brand="' + b.slug + '">' + b.name + "</button>";
  }).join("");
  d.querySelectorAll("#brand-links .chip").forEach(function (ch) {
    ch.addEventListener("click", function () { clearAll(); state.brands = [ch.dataset.brand]; syncUrl(); update(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  });

  // Sort
  d.getElementById("sort").addEventListener("change", function (e) { state.sort = e.target.value; renderResults(); });
  d.getElementById("clear-all").addEventListener("click", clearAll);
  d.getElementById("empty-clear").addEventListener("click", clearAll);

  // Mobile sheet
  var sheet = d.getElementById("filter-sheet"), sb = d.getElementById("sheet-backdrop");
  function openSheet() { sheet.classList.add("is-open"); sb.classList.add("is-active"); d.body.style.overflow = "hidden"; }
  function closeSheet() { sheet.classList.remove("is-open"); sb.classList.remove("is-active"); d.body.style.overflow = ""; }
  d.getElementById("open-filters").addEventListener("click", openSheet);
  d.getElementById("sheet-close").addEventListener("click", closeSheet);
  sb.addEventListener("click", closeSheet);
  d.getElementById("sheet-apply").addEventListener("click", closeSheet);
  d.getElementById("sheet-clear").addEventListener("click", clearAll);

  // show mobile filter button under lg
  var mq = window.matchMedia("(max-width:1023px)");
  function syncFilterBtn() { d.getElementById("open-filters").style.display = mq.matches ? "inline-flex" : "none"; }
  syncFilterBtn(); mq.addEventListener("change", syncFilterBtn);

  update();
};
