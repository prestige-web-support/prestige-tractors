/* ==========================================================================
   PRESTIGE TRACTORS — GSAP entrance, scroll, text-mask, SVG & hover FX
   --------------------------------------------------------------------------
   Loaded after GSAP + ScrollTrigger + SplitText + DrawSVGPlugin (CDN) and
   after site.js. Exposes window.PTanimate(), which boot() in site.js calls
   once header/footer and page content exist. If the GSAP CDN failed to
   load, this file no-ops and site.js falls back to its own CSS/
   IntersectionObserver reveal — the site never depends on the CDN.

   Sections:
     1. Setup / plugin registration
     2. Header slide-down + hero/page-header load-in (with line-mask heading)
     3. Section heading line-mask reveals (scroll-triggered)
     4. Card / grid staggered scroll reveals
     5. Icon SVG stroke-draw reveals
     6. Background parallax (scrub)
     7. Hover FX — magnetic buttons/nav links, tilting cards
   ========================================================================== */
(function (w, d) {
  "use strict";
  if (!w.gsap) return;

  var gsap = w.gsap;
  var hasScrollTrigger = !!w.ScrollTrigger;
  var hasSplitText = !!w.SplitText;
  var hasDrawSVG = !!w.DrawSVGPlugin;
  if (hasScrollTrigger) gsap.registerPlugin(w.ScrollTrigger);
  if (hasSplitText) gsap.registerPlugin(w.SplitText);
  if (hasDrawSVG) gsap.registerPlugin(w.DrawSVGPlugin);

  var reduceMotion = w.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fineHover = w.matchMedia("(hover: hover) and (pointer: fine)").matches;
  gsap.defaults({ ease: "power2.out" });

  function showInstantly(els) {
    gsap.set(els, { clearProps: "opacity,transform" });
    els.forEach(function (e) { e.classList.add("is-visible"); });
  }

  /* --------------------- shared: line-mask heading reveal ------------------ */
  /* Splits a heading into lines and masks each one (overflow-hidden wrapper,
     GSAP 3.13's SplitText `mask` option) so the text slides up into view like
     a blind opening — the "premium editorial" reveal. Falls back to a plain
     fade+rise if SplitText didn't load. Pass `scrollTriggerVars` for a
     scroll-triggered heading, or `extraVars` (e.g. `{ delay: 0.4 }`) for a
     load-time heading — see the comment on `onSplit` below for why this
     can't be a tween paused-and-spliced into an external timeline. */
  function revealHeading(el, scrollTriggerVars, extraVars) {
    if (!el) return null;
    if (!hasSplitText) {
      var fallbackVars = Object.assign({ opacity: 0, y: 24, duration: 0.9, ease: "power2.out" }, extraVars);
      if (scrollTriggerVars) fallbackVars.scrollTrigger = scrollTriggerVars;
      return gsap.from(el, fallbackVars);
    }
    var tween = null;
    w.SplitText.create(el, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: function (self) {
        // Self-contained on purpose: `autoSplit` reverts and re-splits on
        // font-swap/resize, which kills whatever tween was created by the
        // previous split. A tween spliced into an external master timeline
        // would be orphaned by that revert (the timeline keeps pointing at
        // the dead tween while the fresh one never gets played — lines stay
        // stuck at opacity:0 forever). Giving each heading its own `delay`
        // or `scrollTrigger` means every re-split reliably reanimates itself.
        var vars = Object.assign({ yPercent: 110, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.09 }, extraVars);
        if (scrollTriggerVars) vars.scrollTrigger = scrollTriggerVars;
        tween = gsap.from(self.lines, vars);
        return tween;
      }
    });
    return tween;
  }

  /* ------------------------- header: subtle slide-down -------------------- */
  function animateHeader() {
    var header = d.getElementById("site-header");
    if (!header || reduceMotion) return;
    gsap.set(header, { y: -32, opacity: 0 });
    gsap.to(header, { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.1 });
  }

  /* ------------------- hero / page-header: page-load entrance ------------- */
  /* Each piece animates on its own explicit `delay` rather than being
     spliced into one master timeline — the heading in particular must stay
     self-contained (see the note in revealHeading's onSplit). The delays
     below are just hand-tuned to read as one sequence: pill/breadcrumb
     first, heading overlapping in shortly after, sub/CTA/stats trailing. */
  function animateIntro() {
    var intro = d.querySelector(".hero, .page-header");
    if (!intro || reduceMotion) return;
    var pill = intro.querySelector(".hero__pill");
    var crumb = intro.querySelector(".breadcrumb");
    var eyebrow = intro.querySelector(".eyebrow");
    var h1 = intro.querySelector("h1");
    var sub = intro.querySelector(".hero__sub, .page-header__desc");
    var cta = intro.querySelector(".hero__cta, .page-header__actions");
    var stats = intro.querySelector(".hero__stats");

    var lead = [pill, crumb, eyebrow].filter(Boolean);
    var tail = [sub, cta, stats].filter(Boolean);

    if (lead.length) {
      gsap.from(lead, { opacity: 0, y: 20, duration: 0.7, ease: "power3.out", stagger: 0.08, delay: 0.15 });
    }
    if (h1) {
      revealHeading(h1, null, { delay: lead.length ? 0.4 : 0.15 });
    }
    if (tail.length) {
      gsap.from(tail, {
        opacity: 0, y: 22, duration: 0.9, ease: "power3.out", stagger: 0.1,
        delay: h1 ? 1.05 : (lead.length ? 0.7 : 0.15)
      });
    }
  }

  /* --------------- section headings: scroll-triggered line-mask ----------- */
  function animateSectionHeadings() {
    if (reduceMotion) return;
    var heads = d.querySelectorAll(".section-head__main h2, .band h2");
    heads.forEach(function (h2) {
      if (h2.closest(".hero, .page-header")) return; // already handled by the intro
      revealHeading(h2, { trigger: h2, start: "top 85%", once: true });
    });
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

  /* ------------------------ icon SVGs: stroke-draw reveal ------------------ */
  /* Every inline icon in the codebase (site.js's ICONS map) is stroke-only —
     fill:none — which makes drawSVG a natural fit: the icon looks sketched in
     as its card scrolls into view. Scoped to icons that sit inside content
     that's already part of the scroll-reveal system (trust cards, service
     feature icons, category tiles, the service-band media badge and
     testimonial quote marks) rather than icons hidden inside menus/drawers. */
  function animateIconDraws() {
    if (!hasDrawSVG) return;
    var selector = ".icon-chip svg, .fl-icon svg, .cat-icon svg, .mb-icon svg, .quote-mark svg";
    var icons = Array.prototype.slice.call(d.querySelectorAll(selector));
    if (!icons.length) return;
    var shapeSelector = "path, circle, ellipse, polyline, line, rect";

    if (reduceMotion || !hasScrollTrigger) {
      icons.forEach(function (svg) { gsap.set(svg.querySelectorAll(shapeSelector), { drawSVG: "100%" }); });
      return;
    }

    icons.forEach(function (svg) { gsap.set(svg.querySelectorAll(shapeSelector), { drawSVG: "0%" }); });
    w.ScrollTrigger.batch(icons, {
      start: "top 88%",
      once: true,
      onEnter: function (batch) {
        batch.forEach(function (svg, i) {
          gsap.to(svg.querySelectorAll(shapeSelector), {
            drawSVG: "100%", duration: 0.9, ease: "power2.inOut", delay: i * 0.04, stagger: 0.03
          });
        });
      }
    });
  }

  /* --------------------------- background parallax ------------------------- */
  /* Cinematic, restrained scrub-linked drift on full-bleed background images
     (hero, page-header, finance band). Pre-scaled so the ±6% vertical travel
     never exposes an edge. */
  function animateParallax() {
    if (reduceMotion || !hasScrollTrigger) return;
    var bgs = d.querySelectorAll(".hero__bg, .page-header__bg, .band__bg");
    bgs.forEach(function (bg) {
      var section = bg.closest(".hero, .page-header, .band") || bg.parentElement;
      gsap.set(bg, { scale: 1.15, transformOrigin: "50% 50%" });
      gsap.fromTo(bg, { yPercent: -6 }, {
        yPercent: 6,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 0.6 }
      });
    });
  }

  /* ------------------------------- hover FX --------------------------------- */
  /* Skipped entirely on touch/coarse-pointer devices — magnetic pull and 3D
     tilt are mouse-only affordances and would just add dead listeners on
     mobile. `.gsap-hover` (added here) tells the CSS in section 7 to drop
     `transform` from that element's CSS transition so it doesn't fight the
     per-frame values GSAP's quickTo is writing. */
  function initHoverFX() {
    if (!fineHover || reduceMotion) return;

    // Delegated magnetic pull for buttons/nav links — robust to dynamic
    // content (catalogue.js re-renders .product-card, and with it every
    // "Request Quote" button, on each filter change; the checkout overlay's
    // own submit button lives in static markup but this keeps one code path
    // for all of it rather than binding some buttons directly and others not).
    var magSelector = ".btn, .nav__link";
    var magCtrls = new WeakMap();
    function getMagCtrls(el) {
      var c = magCtrls.get(el);
      if (!c) {
        el.classList.add("gsap-hover");
        c = {
          x: gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" }),
          y: gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" })
        };
        magCtrls.set(el, c);
      }
      return c;
    }
    d.addEventListener("mousemove", function (e) {
      var el = e.target.closest(magSelector);
      if (!el) return;
      var r = el.getBoundingClientRect();
      var strength = el.classList.contains("nav__link") ? 0.22 : 0.3;
      var c = getMagCtrls(el);
      c.x((e.clientX - r.left - r.width / 2) * strength);
      c.y((e.clientY - r.top - r.height / 2) * strength);
    });
    d.addEventListener("mouseout", function (e) {
      var el = e.target.closest(magSelector);
      if (!el || (e.relatedTarget && el.contains(e.relatedTarget))) return;
      var c = magCtrls.get(el);
      if (!c) return;
      c.x(0); c.y(0);
    });

    // Delegated tilt for cards — robust to catalogue.js re-rendering
    // .product-card on every filter change (direct per-element listeners
    // would go stale and silently stop working on the new nodes).
    var tiltSelector = ".product-card, .cat-tile, .feature-card, .trust-card, .article-card";
    var maxTilt = 5, hoverScale = 1.02;
    var ctrls = new WeakMap();
    function getCtrls(el) {
      var c = ctrls.get(el);
      if (!c) {
        el.classList.add("gsap-hover");
        gsap.set(el, { transformPerspective: 800 });
        c = {
          rx: gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" }),
          ry: gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" }),
          sc: gsap.quickTo(el, "scale", { duration: 0.5, ease: "power3" })
        };
        ctrls.set(el, c);
      }
      return c;
    }
    d.addEventListener("mousemove", function (e) {
      var el = e.target.closest(tiltSelector);
      if (!el) return;
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      var c = getCtrls(el);
      c.ry(gsap.utils.mapRange(0, 1, -maxTilt, maxTilt, px));
      c.rx(gsap.utils.mapRange(0, 1, maxTilt, -maxTilt, py));
      c.sc(hoverScale);
    });
    d.addEventListener("mouseout", function (e) {
      var el = e.target.closest(tiltSelector);
      if (!el || (e.relatedTarget && el.contains(e.relatedTarget))) return;
      var c = ctrls.get(el);
      if (!c) return;
      c.rx(0); c.ry(0); c.sc(1);
    });
  }

  /* SplitText computes line breaks from rendered layout, so it needs the
     real webfont metrics (Archivo/Inter load async from Google Fonts here) —
     splitting too early just means autoSplit immediately re-splits once the
     font swaps in, which still works (see revealHeading) but causes a
     visible re-play glitch. Waiting for fonts avoids that for the common
     case; everything else doesn't depend on text layout, so it runs right away. */
  function whenFontsReady(cb) {
    if (d.fonts && d.fonts.status !== "loaded") d.fonts.ready.then(cb, cb);
    else cb();
  }

  w.PTanimate = function () {
    animateHeader();
    animateReveals();
    animateIconDraws();
    animateParallax();
    initHoverFX();
    whenFontsReady(function () {
      animateIntro();
      animateSectionHeadings();
    });
  };
})(window, document);
