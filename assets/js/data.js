/* ==========================================================================
   PRESTIGE TRACTORS — site data (single source of truth, framework-free)
   Exposed as a global `PT`. In WordPress this maps to CPTs / options:
   products → CPT, brands/categories → taxonomies, site → theme options.
   ========================================================================== */
(function (w) {
  "use strict";

  var IMG = "https://images.unsplash.com/photo-";
  function img(id, width) { if (/[/.]/.test(id)) return id; return IMG + id + "?auto=format&fit=crop&w=" + (width || 1200) + "&q=72"; }

  var PHOTO = {
    goldenFieldSunset: "1500382017468-9049fed747ef",
    tractorHarvest: "1530267981375-f0de937f5f13",
    tractorPaddy: "1574943320219-553eb213f72d",
    greenFieldSunset: "1620200423727-8127f75d7f53",
    cropRowsGolden: "1560493676-04071c5f467b",
    aerialCrops: "1592982537447-7440770cbfc9",
    welderSparks: "1504328345606-18bbc8c9d7d1",
    oilService: "1487754180451-c456f719a1fc",
    toolWall: "1530124566582-a618bc2615dc",
    engineBelts: "1486262715619-67b85e0b08d3",
    fieldWorkers: "1605000797499-95a51c5269ae",
    cornSeedlings: "1625246333195-78d9c38ad449",
    vegetables: "1464226184884-fa280b87c399",
    sheepAerial: "1517022812141-23620dba5c23",
    soilScoop: "1416879595882-3373a0480b5b",
    forestRoad: "1473773508845-188df298d2d1",
    financeChart: "1591696205602-2f950c417cb9",
    teamMeeting: "1572021335469-31706a17aaef"
  };

  var site = {
    name: "Prestige Tractors",
    fullName: "Prestige Tractors Ballarat",
    tagline: "Victoria's Trusted Agricultural Equipment Partner",
    parentGroup: "Goad Group",
    phone: "(03) 5339 2056",
    phoneHref: "tel:+61353392056",
    email: "sales@goadgroup.com.au",
    emailHref: "mailto:sales@goadgroup.com.au",
    addressLine: "206 Burnbank Street, Wendouree, Victoria 3355",
    mapsQuery: "206+Burnbank+Street+Wendouree+VIC+3355",
    hours: [
      { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
      { days: "Saturday – Sunday", time: "Closed" }
    ],
    sectors: ["Government", "Farming", "Horticulture", "Contracting", "Viticulture", "Lifestyle & Hobby Farms"],
    social: { facebook: "#", instagram: "#", youtube: "#", linkedin: "#" }
  };

  var trust = [
    { icon: "award", title: "20+ Years Industry Experience", body: "Decades of hands-on knowledge supporting local Australian farming and business." },
    { icon: "wrench", title: "Factory Trained Technicians", body: "Brand-certified expertise keeping your equipment performing at its peak." },
    { icon: "shield", title: "Genuine Spare Parts", body: "We carry and stock genuine parts for reliability and complete peace of mind." },
    { icon: "pin", title: "Local Victorian Support", body: "A dedicated local team and after-sales support team right when you need it." }
  ];

  var brands = [
    { slug: "mccormick", name: "McCormick", origin: "Italy", category: "Tractors", wm: { w: 800, up: true, it: false }, description: "Italian-built utility and high-horsepower tractors with a heritage stretching back over a century. The X7, D-MAX and S-MAX ranges pair refined cab comfort with serious pulling power.", featured: true },
    { slug: "bobcat", name: "Bobcat", origin: "USA", category: "Compact Tractors", wm: { w: 800, up: false, it: true }, description: "American-engineered compact tractors built to move from one chore to the next — standard four-wheel drive and rear PTO for properties, contractors and hobby farms.", featured: true },
    { slug: "mahindra", name: "Mahindra", origin: "India", category: "Tractors", wm: { w: 700, up: false, it: false }, description: "Globally the number-one selling tractor by volume — renowned for rugged reliability, simple serviceability and exceptional value.", featured: true },
    { slug: "dakenag", name: "DakenAg", origin: "Australia", category: "Implements & Attachments", wm: { w: 700, up: true, it: false }, description: "Australian-manufactured implements and attachments engineered for local conditions — slashers, carry-alls, post-hole diggers and 3-point-linkage gear.", featured: true },
    { slug: "enorossi", name: "Enorossi", origin: "Italy", category: "Hay & Forage Equipment", wm: { w: 600, up: false, it: true }, description: "Italian hay and forage specialists and a worldwide leader in their field — mowers, rakes, tedders, balers and bale wrappers for clean, efficient harvest.", featured: true },
    { slug: "rapidspray", name: "RapidSpray", origin: "Australia", category: "Sprayers & Pumps", wm: { w: 700, up: false, it: false }, description: "Australian-made spray tanks, pumps, field sprayers and liquid-handling solutions for spot spraying, boom application and on-farm water cartage.", featured: true },
    { slug: "grasshopper", name: "Grasshopper", origin: "USA", category: "Zero-Turn Mowers", wm: { w: 800, up: true, it: true }, description: "American-built zero-turn mowers engineered for professional-grade cut quality, manoeuvrability and all-day operator comfort.", featured: true },
    { slug: "orsi", name: "Orsi", origin: "Italy", category: "Mulchers & Flail Mowers", wm: { w: 700, up: true, it: false }, description: "Italian manufacturer of flail mowers, mulchers and verge-mowing equipment for roadside, orchard and heavy vegetation management.", featured: false },
    { slug: "muratori", name: "Muratori", origin: "Italy", category: "Rotary Tillers & Cultivation", wm: { w: 600, up: false, it: true }, description: "Italian specialists in rotary tillers, power harrows and seedbed-preparation equipment — precision cultivation for horticulture and broadacre.", featured: false }
  ];

  var categories = [
    { slug: "tractors", name: "Tractors", icon: "tractor", blurb: "Compact, utility & high-horsepower", photoId: PHOTO.tractorHarvest, brands: ["bobcat", "mccormick", "mahindra"], description: "From 26hp lifestyle machines to 200+hp broadacre workhorses. Compact Bobcat tractors, value-driven Mahindra utility models and Italian-built McCormick power — all backed by local parts and servicing." },
    { slug: "hay-equipment", name: "Hay Equipment", icon: "wheat", blurb: "Mowers, rakes, balers & wrappers", photoId: PHOTO.cropRowsGolden, brands: ["enorossi"], description: "Make better hay with Enorossi's world-leading forage range — disc and drum mowers, rotary rakes, tedders, round balers and bale wrappers engineered for clean, efficient harvest." },
    { slug: "sprayers", name: "Spraying Equipment", icon: "spray", blurb: "Sprayers, tanks & pumps", photoId: PHOTO.greenFieldSunset, brands: ["rapidspray"], description: "Australian-made RapidSpray tanks, pumps and field sprayers for spot spraying, boom application and water cartage — built for reliable chemical and liquid handling." },
    { slug: "attachments", name: "Attachments", icon: "cog", blurb: "Implements & 3-point linkage gear", photoId: PHOTO.engineBelts, brands: ["dakenag", "muratori", "orsi"], description: "Match your tractor to the task with DakenAg implements, Muratori cultivation tooling and Orsi mulchers — slashers, tillers, post-hole diggers, carry-alls and loaders." },
    { slug: "utility", name: "Utility Equipment", icon: "mountain", blurb: "Mowers & property maintenance", photoId: PHOTO.soilScoop, brands: ["grasshopper", "dakenag"], description: "Keep acreage and commercial grounds immaculate with Grasshopper zero-turn mowers and utility packages for mowing, slashing, towing and all-round property maintenance." }
  ];

  function P(o) { return o; }
  var products = [
    P({ slug: "bobcat-ct4055-55hp", name: "Bobcat CT4055", brand: "bobcat", category: "tractors", hp: 55, priceFrom: 42990, condition: "new", availability: "in-stock", badges: ["Best Seller"], featured: true, photoId: "assets/bobcat-ct4055.jpeg",
      tagline: "Heavy-duty compact, ready for the next chore.",
      summary: "The CT4055 compact tractor allows operators to finish one chore after the next. A heavy-duty work companion that comes standard with rear PTO and four-wheel drive.",
      description: "Built for operators who never stop moving, the Bobcat CT4055 is a heavy-duty compact tractor engineered to take on loader work, mowing, slashing, tilling and towing without breaking stride. Standard four-wheel drive and a rear PTO mean it's ready to work the moment it arrives — and with genuine parts and factory-trained servicing through Prestige Tractors, it stays that way.",
      highlights: ["55hp turbo-diesel engine", "Four-wheel drive standard", "Rear PTO standard", "Heavy-duty front loader ready"],
      specs: [["Engine Power", "55 hp"], ["Drivetrain", "4WD (standard)"], ["PTO", "Rear PTO, 540 rpm"], ["Transmission", "Hydrostatic, 3-range"], ["Lift Capacity", "1,200 kg (rear)"], ["Category", "Compact utility tractor"]],
      features: ["Spacious operator platform with ergonomic controls", "Quick-attach front-end loader compatibility", "Category 1 three-point linkage", "Tight turning radius for confined work"] }),
    P({ slug: "bobcat-ct2035-35hp", name: "Bobcat CT2035", brand: "bobcat", category: "tractors", hp: 35, priceFrom: 31490, condition: "new", availability: "in-stock", featured: true, photoId: "assets/bobcat-ct2035-scaled.jpeg",
      tagline: "The performance and power to tackle any task.",
      summary: "The CT2035 delivers the performance and power you need to tackle loader and implement work. Standard four-wheel drive makes this a confident all-rounder.",
      description: "The Bobcat CT2035 hits the sweet spot for properties and small farms that need genuine capability without the bulk. With standard four-wheel drive and strong hydraulics, it handles loader duties, implement work and day-to-day property maintenance with ease.",
      highlights: ["35hp diesel engine", "Four-wheel drive standard", "Loader & implement ready", "Compact, manoeuvrable footprint"],
      specs: [["Engine Power", "35 hp"], ["Drivetrain", "4WD (standard)"], ["PTO", "Rear PTO, 540 rpm"], ["Transmission", "Hydrostatic, 3-range"], ["Lift Capacity", "900 kg (rear)"], ["Category", "Compact utility tractor"]],
      features: ["Easy-operate hydrostatic transmission", "Loader-ready hydraulics", "Comfortable, low-vibration operator station", "Excellent visibility to implement"] }),
    P({ slug: "26hp-hobby-farm-hero", name: "26hp Hobby Farm Hero", brand: "bobcat", category: "tractors", hp: 26, priceFrom: 30250, priceNote: "Package price inc GST", condition: "new", availability: "in-stock", badges: ["Package Deal"], featured: true, photoId: "assets/26hp-hobby.png",
      tagline: "The ideal package for lifestyle blocks.",
      summary: "Take on everything from mowing and slashing to lifting, towing and general property maintenance with the 26hp Bobcat® Tractor + Implement Package — the ideal hobby-farm all-rounder.",
      description: "Purpose-built for lifestyle blocks and hobby farms, the 26hp Hobby Farm Hero bundles a capable Bobcat compact tractor with the essential implements to get started straight away. Mow, slash, lift, tow and maintain your property with one machine — sold as a value-driven, ready-to-work package.",
      highlights: ["26hp Bobcat tractor + implement package", "Front-end loader included", "Slasher & implements bundled", "Ideal for hobby & lifestyle farms"],
      specs: [["Engine Power", "26 hp"], ["Drivetrain", "4WD"], ["PTO", "Rear PTO, 540 rpm"], ["Package", "Tractor + loader + implements"], ["Best For", "Hobby & lifestyle farms"], ["Transmission", "Hydrostatic"]],
      features: ["Complete start-to-work implement bundle", "Easy operation for new operators", "Compact and easy to store", "Genuine parts & local servicing included"] }),
    P({ slug: "mccormick-x7", name: "McCormick X7", brand: "mccormick", category: "tractors", hp: 175, priceFrom: null, condition: "new", availability: "enquire", badges: ["Enquire"], featured: true, photoId: "assets/mccormick-x7.png",
      tagline: "Italian high-horsepower for serious work.",
      summary: "The McCormick X7 brings refined cab comfort and high-horsepower performance to broadacre and mixed farming. Contact Prestige Tractors Ballarat for details.",
      description: "The McCormick X7 series is built for operators who demand power, efficiency and all-day comfort. With a premium cab, advanced transmission options and the pulling power for heavy tillage and transport, the X7 is a true broadacre performer. Pricing and configuration are tailored to your operation — enquire with our team today.",
      highlights: ["High-horsepower 6-cylinder power", "Premium suspended cab comfort", "Advanced transmission options", "Built for broadacre & mixed farming"],
      specs: [["Engine Power", "150–175 hp class"], ["Engine", "6-cylinder turbo-diesel"], ["Drivetrain", "4WD"], ["Transmission", "Powershift / CVT options"], ["Cab", "Premium suspended cab"], ["Origin", "Italy"]],
      features: ["Spacious climate-controlled cab", "High-flow hydraulics for demanding implements", "Front linkage & PTO options", "Precision-farming ready"] }),
    P({ slug: "mccormick-d-max", name: "McCormick D-MAX", brand: "mccormick", category: "tractors", hp: 45, priceFrom: null, condition: "new", availability: "enquire", badges: ["Enquire"], photoId: "assets/mccormick-d-max.png",
      tagline: "Versatile utility, Italian-engineered.",
      summary: "The McCormick D-MAX is a versatile utility tractor suited to a wide range of tasks. Contact Prestige Tractors Ballarat for more information.",
      description: "Compact yet capable, the McCormick D-MAX delivers dependable utility performance for orchards, livestock and mixed properties. Easy to operate and built to last, it's an ideal everyday workhorse. Enquire with our team for specification and pricing.",
      highlights: ["Versatile utility performance", "Compact, manoeuvrable design", "Simple, reliable operation", "Orchard & livestock friendly"],
      specs: [["Engine Power", "40–50 hp class"], ["Drivetrain", "4WD"], ["PTO", "Rear PTO, 540 rpm"], ["Transmission", "Mechanical shuttle"], ["Origin", "Italy"], ["Category", "Utility tractor"]],
      features: ["Easy-shift transmission", "Tight turning for confined spaces", "Loader-ready", "Low running costs"] }),
    P({ slug: "mccormick-s-max", name: "McCormick S-MAX", brand: "mccormick", category: "tractors", hp: 75, priceFrom: null, condition: "new", availability: "enquire", badges: ["Enquire"], photoId: "assets/mccormick-s-max.png",
      tagline: "The dependable mid-range all-rounder.",
      summary: "The McCormick S-MAX is a dependable mid-range tractor for mixed farming and contracting. Contact Prestige Tractors Ballarat for more information.",
      description: "The McCormick S-MAX bridges utility and horsepower, offering a comfortable cab, strong hydraulics and the versatility to handle loader work, tillage and transport. A dependable mid-range all-rounder for working farms.",
      highlights: ["Mid-range horsepower", "Comfortable operator cab", "Strong hydraulic performance", "Loader & implement ready"],
      specs: [["Engine Power", "70–80 hp class"], ["Drivetrain", "4WD"], ["PTO", "Rear PTO, 540/540E"], ["Transmission", "Synchro shuttle"], ["Origin", "Italy"], ["Category", "Mid-range tractor"]],
      features: ["Quiet, comfortable cab", "High-capacity hydraulics", "Versatile across tasks", "Proven McCormick driveline"] }),
    P({ slug: "mccormick-s-max-60-rops", name: "McCormick S-MAX 60 ROPS", brand: "mccormick", category: "tractors", hp: 60, priceFrom: null, condition: "new", availability: "enquire", badges: ["Enquire"], photoId: "assets/mccormick-s-max-60-rops.png",
      tagline: "Open-station value with serious capability.",
      summary: "The McCormick S-MAX 60 ROPS is an open-station tractor that pairs value with capability. Contact Prestige Tractors Ballarat for more information.",
      description: "The S-MAX 60 ROPS delivers genuine working capability in a simple, value-focused open-station (Roll-Over Protective Structure) configuration. Ideal for operators who want McCormick reliability without the cab. Enquire for pricing.",
      highlights: ["60hp class performance", "ROPS open-station configuration", "Excellent value", "Simple, robust driveline"],
      specs: [["Engine Power", "60 hp"], ["Cab", "ROPS (open station)"], ["Drivetrain", "4WD"], ["PTO", "Rear PTO, 540 rpm"], ["Transmission", "Synchro shuttle"], ["Origin", "Italy"]],
      features: ["Foldable ROPS for low-clearance work", "Loader-ready hydraulics", "Low cost of ownership", "Robust, field-proven build"] }),
   
  
    P({ slug: "enorossi-drum-mower", name: "Enorossi Drum Mower", brand: "enorossi", category: "hay-equipment", hp: null, priceFrom: 8990, condition: "new", availability: "in-stock", photoId: "assets/enorossi-drum-mower.webp",
      tagline: "Clean, fast cutting from a world hay leader.",
      summary: "Italian-built drum mower delivering clean, fast cutting and low maintenance for efficient first-pass hay harvest.",
      description: "Enorossi's drum mowers are engineered for clean cutting, high ground speed and minimal maintenance. A dependable first step in the hay chain from a recognised worldwide leader in forage equipment.",
      highlights: ["Fast, clean cutting action", "Low maintenance design", "Robust Italian build", "Compact-tractor compatible"],
      specs: [["Type", "Drum mower"], ["Cutting Width", "1.65 m"], ["Min. PTO Power", "35 hp"], ["Linkage", "3-point, Cat 1/2"], ["Origin", "Italy"], ["Drive", "PTO 540 rpm"]],
      features: ["Breakaway protection", "Quick blade replacement", "Even, clean cut height", "Minimal moving parts"] }),
    P({ slug: "enorossi-rotary-rake", name: "Enorossi Rotary Rake", brand: "enorossi", category: "hay-equipment", hp: null, priceFrom: 7490, condition: "new", availability: "in-stock", photoId: "assets/enorossi-rotary-rake.webp",
      tagline: "Consistent, fluffy windrows every pass.",
      summary: "Rotary rake producing clean, consistent windrows for faster drying and efficient baling.",
      description: "Form clean, well-shaped windrows for faster drying and smoother baling with Enorossi's rotary rake. Adjustable working width and gentle tine action protect leaf quality and keep your hay clean.",
      highlights: ["Consistent windrow formation", "Gentle on leaf quality", "Adjustable working width", "Durable tine arms"],
      specs: [["Type", "Rotary rake"], ["Working Width", "3.4 m"], ["Min. PTO Power", "30 hp"], ["Tine Arms", "10"], ["Origin", "Italy"], ["Linkage", "3-point hitch"]],
      features: ["Cam-track tine control", "Height-adjustable raking", "Transport-friendly fold", "Low-maintenance gearbox"] }),
    P({ slug: "enorossi-round-baler", name: "Enorossi Round Baler", brand: "enorossi", category: "hay-equipment", hp: null, priceFrom: 24990, condition: "new", availability: "enquire", photoId: "assets/enorossi-round-baler.webp",
      tagline: "Dense, well-shaped bales with reliable pickup.",
      summary: "Reliable fixed-chamber round baler producing dense, well-shaped bales with a smooth, wide pickup.",
      description: "Enorossi round balers combine a wide pickup with a proven fixed-chamber design to produce dense, weather-resistant bales. Built to handle a long season with minimal downtime.",
      highlights: ["Wide, clean pickup", "Dense uniform bales", "Net & twine wrap", "Season-long durability"],
      specs: [["Type", "Fixed-chamber round baler"], ["Bale Size", "1.2 m diameter"], ["Min. PTO Power", "55 hp"], ["Wrap", "Net + twine"], ["Origin", "Italy"], ["Pickup Width", "1.8 m"]],
      features: ["Heavy-duty pickup tines", "Reliable wrap system", "In-cab monitor ready", "Hardened chamber rollers"] }),
    P({ slug: "enorossi-bale-wrapper", name: "Enorossi Bale Wrapper", brand: "enorossi", category: "hay-equipment", hp: null, priceFrom: 16990, condition: "new", availability: "in-stock", photoId: "assets/enorossi-bale-wrapper.webp",
      tagline: "Airtight silage wrapping, every bale.",
      summary: "Efficient bale wrapper delivering airtight, high-quality silage wrapping for superior forage preservation.",
      description: "Lock in feed quality with Enorossi's bale wrapper — fast, consistent film application for airtight silage every time. Designed for smooth operation and minimal film waste.",
      highlights: ["Airtight silage wrap", "Fast cycle times", "Low film waste", "Smooth, reliable operation"],
      specs: [["Type", "Round bale wrapper"], ["Bale Size", "Up to 1.2 m"], ["Film Width", "750 mm"], ["Control", "Automatic cycle"], ["Origin", "Italy"], ["Min. PTO Power", "40 hp"]],
      features: ["Automatic wrap cycle", "Gentle bale handling", "Adjustable overlap", "Tip-off discharge"] }),
    
  
    P({ slug: "grasshopper-400d", name: "Grasshopper 400D Zero-Turn", brand: "grasshopper", category: "utility", hp: 25, priceFrom: 21990, condition: "new", availability: "in-stock", featured: true, photoId: "assets/grasshopper-400d.jpg",
      tagline: "The original zero-turn, professional cut.",
      summary: "Diesel zero-turn mower delivering professional cut quality, manoeuvrability and all-day operator comfort.",
      description: "Grasshopper invented the zero-turn — and the 400D shows why it's still the benchmark. A durable diesel powerplant, precise twin-lever control and a premium cutting deck make light work of acreage and commercial grounds.",
      highlights: ["Diesel zero-turn power", "Professional cut quality", "All-day operator comfort", "Tight zero-turn manoeuvrability"],
      specs: [["Engine", "Diesel, ~25 hp"], ["Deck", "61\" / 72\" options"], ["Drive", "Dual hydrostatic"], ["Steering", "Zero-turn twin lever"], ["Origin", "USA"], ["Use", "Acreage / commercial"]],
      features: ["DuraMax cutting deck", "Suspension operator seat", "Easy-service design", "Optional grass collection"] }),
    P({ slug: "grasshopper-900d-midmount", name: "Grasshopper 900D MidMount", brand: "grasshopper", category: "utility", hp: 35, priceFrom: 32990, condition: "new", availability: "arriving", photoId: "assets/grasshopper-900d.jpg",
      tagline: "Commercial-grade output, all day long.",
      summary: "High-output diesel mid-mount zero-turn built for large acreage and commercial mowing contracts.",
      description: "For large properties and commercial contracts, the Grasshopper 900D MidMount pairs serious diesel output with a wide deck and rugged build for productive, comfortable, all-day mowing.",
      highlights: ["High-output diesel", "Wide commercial deck", "Built for big acreage", "Rugged commercial build"],
      specs: [["Engine", "Diesel, ~35 hp"], ["Deck", "72\" mid-mount"], ["Drive", "Dual hydrostatic"], ["Steering", "Zero-turn twin lever"], ["Origin", "USA"], ["Use", "Commercial mowing"]],
      features: ["Heavy-duty deck spindles", "High-back suspension seat", "Quick-tilt deck service", "Optional cab & attachments"] })
  ];

  var testimonials = [
    { quote: "The team's product knowledge made buying our first tractor easy. The after-sales support has been genuinely excellent — they pick up the phone and actually help.", name: "Michael R.", role: "Lifestyle farmer", location: "Ballarat, VIC", rating: 5 },
    { quote: "Booked our McCormick in for a service and it was back working the same week. Factory-trained, genuine parts, no fuss. Exactly what you want from a local dealer.", name: "Sarah T.", role: "Mixed farming", location: "Creswick, VIC", rating: 5 },
    { quote: "Sound advice and great support. They understood our contracting workload and matched us to the right machine and finance. Highly recommend Prestige.", name: "David P.", role: "Agricultural contractor", location: "Buninyong, VIC", rating: 5 },
    { quote: "Genuine parts in stock when I needed them and a workshop that knows these machines inside out. The local support team is the reason we keep coming back.", name: "Janet M.", role: "Cattle & hay", location: "Daylesford, VIC", rating: 5 }
  ];

  var articles = [
    { slug: "bobcat-package-special", type: "Special", title: "Limited-Time Bobcat Package — $30,250 inc GST", date: "20 May 2026", photoId: PHOTO.tractorHarvest, featured: true,
      excerpt: "Our partners at Bobcat are offering a remarkable deal on a complete tractor + implement package. Get in quick — this won't last.",
      cta: { label: "Enquire Now", href: "product.html?slug=26hp-hobby-farm-hero" } },
    { slug: "get-hay-season-ready", type: "News", title: "Get Hay Season Ready with Enorossi", date: "28 Apr 2026", photoId: PHOTO.cropRowsGolden,
      excerpt: "Mowers, rakes, balers and wrappers in stock now. Book a pre-season service and walk into the season with confidence.",
      cta: { label: "Shop Hay Equipment", href: "category.html?cat=hay-equipment" } },
    { slug: "competitive-finance-new-used", type: "Special", title: "Competitive Finance on New & Used Machinery", date: "10 Apr 2026", photoId: PHOTO.financeChart,
      excerpt: "We can arrange finance for both new and used machinery at competitive interest rates — tailored to farming, horticulture, government and business.",
      cta: { label: "Finance Enquiry", href: "finance.html" } },
    { slug: "factory-trained-servicing", type: "News", title: "Keep Your Equipment Working Hard", date: "15 Mar 2026", photoId: PHOTO.welderSparks,
      excerpt: "Our factory-trained technicians keep your equipment in peak operating condition — scheduled servicing, genuine parts and mobile support.",
      cta: { label: "Book a Service", href: "service.html#book" } }
  ];

  var team = [
    { name: "Neale", role: "Fleet Maintenance Manager", initials: "N", bio: "Leads Prestige Fleet Maintenance — truck & heavy-vehicle servicing, light & commercial vehicle servicing, breakdown support, roadworthy certificates and classic cars across Ballarat." },
    { name: "Sales Team", role: "New & Used Machinery", initials: "S", bio: "Matching farmers, contractors and businesses with the right machine and the right finance — across McCormick, Bobcat, Mahindra and the full implement range." },
    { name: "Parts Department", role: "Genuine Spare Parts", initials: "P", bio: "Fully equipped to assist with all enquiries for McCormick, Daken, Grasshopper, Enorossi and Bobcat spare parts — genuine components, expert advice." },
    { name: "Service Workshop", role: "Factory-Trained Technicians", initials: "W", bio: "Excellent product knowledge, workmanship and support — the backbone of Prestige Tractors. Scheduled servicing, repairs and field support." }
  ];

  w.PT = {
    img: img, PHOTO: PHOTO, site: site, trust: trust, brands: brands, categories: categories,
    products: products, testimonials: testimonials, articles: articles, team: team,
    fleetServices: ["Truck & heavy-vehicle servicing", "Light & commercial vehicle servicing", "Breakdown services", "Roadworthy Certificates (RWC)", "Older & classic car servicing"],
    getProduct: function (slug) { return products.filter(function (p) { return p.slug === slug; })[0]; },
    getCategory: function (slug) { return categories.filter(function (c) { return c.slug === slug; })[0]; },
    getBrand: function (slug) { return brands.filter(function (b) { return b.slug === slug; })[0]; },
    byCategory: function (slug) { return products.filter(function (p) { return p.category === slug; }); },
    byBrand: function (slug) { return products.filter(function (p) { return p.brand === slug; }); },
    formatPrice: function (n) { return "$" + Number(n).toLocaleString("en-AU"); }
  };
})(window);
