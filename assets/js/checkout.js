/* ==========================================================================
   PRESTIGE TRACTORS — Request-a-Quote checkout overlay (equipment.html)
   --------------------------------------------------------------------------
   Single reusable overlay instance (markup lives in equipment.html, right
   before </main>) that catalogue.js opens per-product via
   window.PTopenCheckout(product) when a card's "Request Quote" button is
   clicked. No payment gateway — this is a Contact Form 7-shaped enquiry
   form; see the CF7 shortcode comments beside each field in the HTML.
   ========================================================================== */
(function (w, d) {
  "use strict";
  var shell = d.getElementById("checkout-shell");
  if (!shell) return; // only present on equipment.html

  var backdrop = d.getElementById("checkout-backdrop");
  var panel = d.getElementById("checkout-panel");
  var card = d.getElementById("checkout-card");
  var closeBtn = d.getElementById("checkout-close");
  var form = d.getElementById("checkout-form");
  var successBox = d.getElementById("checkout-success");
  var successCloseBtn = d.getElementById("checkout-success-close");
  var PT = w.PT;
  var lastFocused = null;

  function fill(id, text) { var el = d.getElementById(id); if (el) el.textContent = text || ""; }

  function openCheckout(p) {
    if (!p) return;
    var brand = PT && PT.getBrand ? PT.getBrand(p.brand) : null;

    var img = d.getElementById("quote-img");
    img.src = PT.img(p.photoId, 300);
    img.alt = p.name;
    fill("quote-brand", brand ? brand.name : p.brand);
    fill("quote-name", p.name);
    fill("quote-tagline", p.tagline || "");
    fill("quote-condition", p.condition ? (p.condition.charAt(0).toUpperCase() + p.condition.slice(1)) : "—");
    var hpRow = d.getElementById("quote-hp-row");
    if (p.hp != null) { hpRow.hidden = false; fill("quote-hp", p.hp + " hp"); } else { hpRow.hidden = true; }
    fill("quote-price", p.priceFrom != null ? "From " + PT.formatPrice(p.priceFrom) : "Contact for price");
    fill("quote-success-name", p.name);

    // Singleton overlay reused across every product — always start from a
    // clean slate so a prior submission (or a different model) never lingers.
    form.reset();
    form.hidden = false;
    successBox.hidden = true;
    d.getElementById("q-model").value = p.name;
    d.getElementById("q-slug").value = p.slug;

    lastFocused = d.activeElement;
    shell.setAttribute("aria-hidden", "false");
    panel.classList.add("is-open");
    backdrop.classList.add("is-active");
    d.body.style.overflow = "hidden";

    if (w.gsap) {
      w.gsap.killTweensOf(card);
      w.gsap.fromTo(card, { opacity: 0, y: 26, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" });
    } else {
      card.style.opacity = 1;
    }

    var nameField = d.getElementById("q-name");
    if (nameField) setTimeout(function () { nameField.focus(); }, 350);
  }

  function closeCheckout() {
    function finish() {
      panel.classList.remove("is-open");
      backdrop.classList.remove("is-active");
      shell.setAttribute("aria-hidden", "true");
      d.body.style.overflow = "";
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }
    if (w.gsap) {
      w.gsap.killTweensOf(card);
      w.gsap.to(card, { opacity: 0, y: 16, scale: 0.98, duration: 0.28, ease: "power2.in", onComplete: finish });
    } else {
      card.style.opacity = 0;
      finish();
    }
  }

  closeBtn.addEventListener("click", closeCheckout);
  backdrop.addEventListener("click", closeCheckout);
  successCloseBtn.addEventListener("click", closeCheckout);
  d.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && panel.classList.contains("is-open")) closeCheckout();
  });

  // No backend here — swap the form for a success state in place rather
  // than replacing DOM nodes (site.js's generic data-success handler does
  // a permanent form.replaceWith(), which would break this overlay after
  // its first use since it's reused for every product).
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.hidden = true;
    successBox.hidden = false;
  });

  w.PTopenCheckout = openCheckout;
})(window, document);
