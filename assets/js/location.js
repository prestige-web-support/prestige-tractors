/* Location + contact block — reused on Home and Contact. */
(function (w, d) {
  "use strict";
  w.PTrenderLocation = function (containerId, withHeading) {
    var mount = d.getElementById(containerId); if (!mount) return;
    var PT = w.PT, U = w.PTUI, s = PT.site;
    var cards = [
      ["pin", "Visit us", s.addressLine, null],
      ["phone", "Call us", s.phone, s.phoneHref],
      ["mail", "Email us", s.email, s.emailHref]
    ].map(function (c) {
      var inner = '<div class="contact-card surface"><span class="cc-icon">' + U.icon(c[0]) + '</span><div><p class="cc-label">' + c[1] + '</p><p class="cc-value">' + c[2] + "</p></div></div>";
      return c[3] ? '<a href="' + c[3] + '">' + inner + "</a>" : inner;
    }).join("");
    var hours = s.hours.map(function (h) { return '<div class="hours-row"><dt>' + h.days + "</dt><dd>" + h.time + "</dd></div>"; }).join("");

    var head = withHeading
      ? '<div class="section-head"><div class="section-head__main reveal"><span class="eyebrow">Find us</span><h2>Visit the Wendouree showroom</h2><p>Drop in to see the range, talk machinery and meet the team that backs every sale with local support.</p></div></div>'
      : "";

    mount.innerHTML =
      '<div class="container">' + head +
        '<div class="location-grid">' +
          '<div class="map-frame reveal"><iframe title="Map to ' + s.fullName + '" src="https://www.google.com/maps?q=' + s.mapsQuery + '&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>' +
          '<div class="reveal" data-delay="1" style="display:flex;flex-direction:column;gap:1rem">' + cards +
            '<div class="contact-card surface" style="display:block"><p class="cc-label" style="display:flex;align-items:center;gap:.5rem">' + U.icon("clock") + ' Opening hours</p><dl style="margin-top:.75rem">' + hours + "</dl></div>" +
            '<a class="btn btn--primary btn--full" href="contact.html">Send an enquiry ' + U.icon("arrow-right", "arrow") + "</a>" +
          "</div>" +
        "</div>" +
      "</div>";
  };
})(window, document);
