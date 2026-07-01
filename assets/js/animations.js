/* ==========================================================================
   PRESTIGE TRACTORS — GSAP entrance & scroll-triggered animations
   --------------------------------------------------------------------------
   Loaded after GSAP + ScrollTrigger (CDN) and after site.js. Exposes
   window.PTanimate(), which boot() in site.js calls once header/footer and
   page content exist. If the GSAP CDN failed to load, this file no-ops and
   site.js falls back to its own CSS/IntersectionObserver reveal — the site
   never depends on the CDN being reachable.
   ========================================================================== */
(function (w, d) {
  "use strict";
  if (!w.gsap) return;

  var gsap = w.gsap;
  var hasScrollTrigger = !!w.ScrollTrigger;
  if (hasScrollTrigger) gsap.registerPlugin(w.ScrollTrigger);

  var reduceMotion = w.matchMedia("(prefers-reduced-motion: reduce)").matches;
  gsap.defaults({ ease: "power2.out" });

  function showInstantly(els) {
    gsap.set(els, { clearProps: "opacity,transform" });
    els.forEach(function (e) { e.classList.add("is-visible"); });
  }

  /* ------------------------- header: subtle slide-down -------------------- */
  function animateHeader() {
    var header = d.getElementById("site-header");
    if (!header || reduceMotion) return;
    gsap.set(header, { y: -32, opacity: 0 });
    gsap.to(header, { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.1 });
  }

  /* ------------------- hero / page-header: page-load entrance ------------- */
  function animateIntro() {
    var intro = d.querySelector(".hero, .page-header");
    if (!intro || reduceMotion) return;
    var targets = [
      intro.querySelector(".hero__pill"),
      intro.querySelector(".breadcrumb"),
      intro.querySelector(".eyebrow"),
      intro.querySelector("h1"),
      intro.querySelector(".hero__sub, .page-header__desc"),
      intro.querySelector(".hero__cta, .page-header__actions"),
      intro.querySelector(".hero__stats")
    ].filter(Boolean);
    if (!targets.length) return;
    gsap.set(targets, { opacity: 0, y: 28 });
    gsap.to(targets, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.2 });
  }

  /* ------------------- cards / grids: staggered scroll reveal ------------- */
  function animateReveals() {
    var els = Array.prototype.slice.call(d.querySelectorAll(".reveal"));
    if (!els.length) return;
    if (reduceMotion || !hasScrollTrigger) { showInstantly(els); return; }

    // Group siblings so cards belonging to the same row/grid stagger together.
    var groups = [];
    var seen = new Map();
    els.forEach(function (el) {
      var parent = el.parentElement;
      var group = seen.get(parent);
      if (!group) { group = []; seen.set(parent, group); groups.push(group); }
      group.push(el);
    });

    groups.forEach(function (group) {
      group.forEach(function (el) { el.classList.add("gsap-managed"); });
      gsap.set(group, { opacity: 0, y: 28 });
      w.ScrollTrigger.batch(group, {
        start: "top 87%",
        once: true,
        onEnter: function (batch) {
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", stagger: 0.12 });
        }
      });
    });
  }

  w.PTanimate = function () {
    animateHeader();
    animateIntro();
    animateReveals();
  };
})(window, document);
