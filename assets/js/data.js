/* ==========================================================================
   PRESTIGE TRACTORS — site data (single source of truth, framework-free)
   Exposed as a global `PT`. In WordPress this maps to CPTs / options:
   products → CPT, brands/categories → taxonomies, site → theme options.

   NOTE: `products`, `brands`, `categories` etc. below are generated from the
   dealership's supplied product folders and specification PDFs. Local image
   and brochure paths are URL-encoded at render time by `img()` / `asset()`,
   so folder names with spaces and special characters resolve correctly.
   ========================================================================== */
(function (w) {
  "use strict";

  var IMG = "https://images.unsplash.com/photo-";
  function enc(p) { return p.split("/").map(encodeURIComponent).join("/"); }
  function img(id, width) {
    if (/^https?:/.test(id)) return id;
    if (/[/.]/.test(id)) return enc(id);
    return IMG + id + "?auto=format&fit=crop&w=" + (width || 1200) + "&q=72";
  }

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
  "name": "Prestige Tractors",
  "fullName": "Prestige Tractors Ballarat",
  "tagline": "Victoria's Trusted Agricultural Equipment Partner",
  "phone": "(03) 5339 2056",
  "phoneHref": "tel:+61353392056",
  "mobile": "0435 905 150",
  "mobileHref": "tel:+61435905150",
  "mobileLabel": "Danny — 7 days",
  "email": "danny@prestigetractors.com.au",
  "emailHref": "mailto:danny@prestigetractors.com.au",
  "addressLine": "206 Burnbank Street, Wendouree, Victoria 3355",
  "mapsQuery": "206+Burnbank+Street+Wendouree+VIC+3355",
  "hours": [
    {
      "days": "Monday – Friday",
      "time": "8:00 AM – 5:00 PM"
    },
    {
      "days": "Saturday – Sunday",
      "time": "Closed"
    }
  ],
  "sectors": [
    "Government",
    "Farming",
    "Horticulture",
    "Contracting",
    "Viticulture",
    "Lifestyle & Hobby Farms"
  ],
  "social": {
    "facebook": "#",
    "instagram": "#",
    "youtube": "#",
    "linkedin": "#"
  }
};

  var trust = [
  {
    "icon": "award",
    "title": "20+ Years Industry Experience",
    "body": "Decades of hands-on knowledge supporting local Australian farming and business."
  },
  {
    "icon": "wrench",
    "title": "Factory Trained Technicians",
    "body": "Brand-certified expertise keeping your equipment performing at its peak."
  },
  {
    "icon": "shield",
    "title": "Genuine Spare Parts",
    "body": "We carry and stock genuine parts for reliability and complete peace of mind."
  },
  {
    "icon": "pin",
    "title": "Local Victorian Support",
    "body": "A dedicated local team and after-sales support team right when you need it."
  }
];

  var brands = [
  {
    "slug": "mccormick",
    "name": "McCormick",
    "origin": "Italy",
    "category": "Tractors",
    "wm": {
      "w": 800,
      "up": true,
      "it": false
    },
    "description": "Italian-built utility and high-horsepower tractors with a heritage stretching back over a century. The X7, X8, S-MAX, B-MAX and G-MAX ranges pair refined cab comfort with serious pulling power.",
    "featured": true
  },
  {
    "slug": "landini",
    "name": "Landini",
    "origin": "Italy",
    "category": "Tractors",
    "wm": {
      "w": 800,
      "up": true,
      "it": false
    },
    "description": "One of the world's oldest tractor makers, Landini builds rugged, versatile tractors — from specialist orchard and vineyard models to high-clearance and utility ranges.",
    "featured": true
  },
  {
    "slug": "bobcat",
    "name": "Bobcat",
    "origin": "USA",
    "category": "Compact Tractors",
    "wm": {
      "w": 800,
      "up": false,
      "it": true
    },
    "description": "American-engineered compact and utility tractors, utility vehicles and turf equipment built to move from one chore to the next — with standard four-wheel drive across the tractor range.",
    "featured": true
  },
  {
    "slug": "mahindra",
    "name": "Mahindra",
    "origin": "India",
    "category": "Tractors",
    "wm": {
      "w": 700,
      "up": false,
      "it": false
    },
    "description": "Globally the number-one selling tractor by volume — renowned for rugged reliability, simple serviceability and exceptional value, from the modern OJA range to utility workhorses.",
    "featured": true
  },
  {
    "slug": "dakenag",
    "name": "DakenAg",
    "origin": "Australia",
    "category": "Implements & Attachments",
    "wm": {
      "w": 700,
      "up": true,
      "it": false
    },
    "description": "Australian-manufactured implements and attachments engineered for local conditions — slashers, carry-alls, post-hole diggers, rippers, blades and 3-point-linkage gear.",
    "featured": true
  },
  {
    "slug": "enorossi",
    "name": "Enorossi",
    "origin": "Italy",
    "category": "Hay & Forage Equipment",
    "wm": {
      "w": 600,
      "up": false,
      "it": true
    },
    "description": "Italian hay and forage specialists and a worldwide leader in their field — mowers, rakes, tedders, balers and bale wrappers for clean, efficient harvest.",
    "featured": true
  },
  {
    "slug": "rapidspray",
    "name": "RapidSpray",
    "origin": "Australia",
    "category": "Sprayers & Pumps",
    "wm": {
      "w": 700,
      "up": false,
      "it": false
    },
    "description": "Australian-made spray tanks, pumps, field sprayers, water cartage and fire-fighting solutions for spot spraying, boom application and on-farm liquid handling.",
    "featured": true
  },
  {
    "slug": "grasshopper",
    "name": "Grasshopper",
    "origin": "USA",
    "category": "Zero-Turn Mowers",
    "wm": {
      "w": 800,
      "up": true,
      "it": true
    },
    "description": "American-built zero-turn mowers engineered for professional-grade cut quality, manoeuvrability and all-day operator comfort — in gas, diesel and stand-on models.",
    "featured": true
  },
  {
    "slug": "orsi",
    "name": "Orsi",
    "origin": "Italy",
    "category": "Mulchers & Flail Mowers",
    "wm": {
      "w": 700,
      "up": true,
      "it": false
    },
    "description": "Italian manufacturer of flail mowers, mulchers, forestry mulchers and verge-mowing equipment for roadside, orchard and heavy vegetation management.",
    "featured": false
  },
  {
    "slug": "muratori",
    "name": "Muratori",
    "origin": "Italy",
    "category": "Rotary Tillers & Cultivation",
    "wm": {
      "w": 600,
      "up": false,
      "it": true
    },
    "description": "Italian specialists in rotary tillers, power harrows, stone buriers and seedbed-preparation equipment — precision cultivation for horticulture and broadacre.",
    "featured": false
  }
];

  var categories = [
  {
    "slug": "tractors",
    "name": "Tractors",
    "icon": "tractor",
    "blurb": "Compact, utility & high-horsepower",
    "photoId": "assets/images/McCormick Tractors/Random Tractor Photos/687684101_1410971207739072_4516664925661053912_n.jpg",
    "brands": [
      "bobcat",
      "mccormick",
      "mahindra",
      "landini"
    ],
    "highlight": "Italian-built McCormick & Landini, 60–310 hp — plus American Bobcat & value-driven Mahindra",
    "description": "From 25hp sub-compacts to 310hp broadacre workhorses. Italian-built McCormick and Landini power, American Bobcat compact and utility tractors, and value-driven Mahindra — all backed by local parts and servicing."
  },
  {
    "slug": "hay-equipment",
    "name": "Hay Equipment",
    "icon": "wheat",
    "blurb": "Mowers, rakes, balers & wrappers",
    "photoId": "1560493676-04071c5f467b",
    "brands": [
      "enorossi"
    ],
    "layout": "collage",
    "highlight": "Italian built — the Ferrari of the hay & forage world",
    "description": "Make better hay with Enorossi's world-leading Italian forage range — disc and sickle mowers, rotary rakes, tedders, round and square balers and bale wrappers. Browse the range below and enquire about the machine you need."
  },
  {
    "slug": "sprayers",
    "name": "Spraying Equipment",
    "icon": "spray",
    "blurb": "Sprayers, tanks, pumps & fire units",
    "photoId": "1620200423727-8127f75d7f53",
    "brands": [
      "rapidspray"
    ],
    "highlight": "Australian made — spraying, water cartage & fire units",
    "description": "Australian-made RapidSpray tanks, pumps, field sprayers, water cartage and fire-fighting units for spot spraying, boom application, water transport and property protection."
  },
  {
    "slug": "attachments",
    "name": "Attachments",
    "icon": "cog",
    "blurb": "Implements & 3-point linkage gear",
    "photoId": "assets/images/DakenAg - Implements/Slashers.jpg",
    "brands": [
      "dakenag",
      "muratori"
    ],
    "highlight": "Australian & Italian-built implements for every job",
    "description": "Match your tractor to the task with DakenAg and Muratori implements — slashers, post-hole diggers, rippers, blades, rotary hoes, bale handling, spreaders and loader attachments."
  },
  {
    "slug": "mulchers",
    "name": "Mulchers",
    "icon": "settings",
    "blurb": "Flail mowers & forestry mulchers",
    "photoId": "assets/images/Orsi Mulchers/Orsi MUSCLE Mulcher.jpg",
    "brands": [
      "orsi"
    ],
    "highlight": "Italian built — flail & forestry mulching",
    "description": "Orsi flail mowers and mulchers for verge, orchard, vineyard and forestry work — from inter-row and side-reach mulchers to heavy-duty forestry machines that clear scrub and saplings."
  },
  {
    "slug": "utility",
    "name": "Zero Turn Mowers",
    "icon": "mountain",
    "blurb": "Gas, diesel & stand-on mowers",
    "photoId": "assets/images/Grasshopper Zero-Turn Mowers/Grasshopper 900D.jpg",
    "brands": [
      "grasshopper"
    ],
    "highlight": "American-built Grasshopper zero-turn mowers",
    "description": "Keep acreage and commercial grounds immaculate with Grasshopper zero-turn mowers — gas, diesel and stand-on models built for professional cut quality and all-day comfort."
  },
  {
    "slug": "utility-vehicles",
    "name": "Utility Vehicles & Toolcats",
    "icon": "truck",
    "blurb": "Side-by-sides & Toolcat carriers",
    "photoId": "assets/images/Bobcat Utility Vehicles/Bobcat UV34 XL.jpg",
    "brands": [
      "bobcat"
    ],
    "highlight": "Premium American-built Bobcat quality",
    "description": "Move people, tools and loads across the property with Bobcat utility vehicles and the versatile UW56 Toolcat — a tractor-cross-UTV hybrid with a front loader. Rugged, capable and premium American build."
  },
  {
    "slug": "turf-care",
    "name": "Turf Care & Renovation",
    "icon": "leaf",
    "blurb": "Aerators, dethatchers & sod cutters",
    "photoId": "assets/images/Bobcat Turf Renovation/Bobcat AE30S Stand-On Aerator.jpg",
    "brands": [
      "bobcat"
    ],
    "highlight": "Premium American-built Bobcat turf equipment",
    "description": "Professional Bobcat turf renovation equipment — core aerators, dethatchers, overseeders and sod cutters for parks, sports fields, estates and turf contractors."
  },
  {
    "slug": "woods-equipment",
    "name": "Woods Equipment",
    "icon": "package",
    "blurb": "USA-built slashers & cutting gear",
    "photoId": "assets/images/Woods Equipment/1.png",
    "brands": [],
    "layout": "gallery",
    "highlight": "USA built — premium American cutting equipment",
    "gallery": [
      "assets/images/Woods Equipment/1.png",
      "assets/images/Woods Equipment/2.png",
      "assets/images/Woods Equipment/3.png",
      "assets/images/Woods Equipment/4.png",
      "assets/images/Woods Equipment/5.png",
      "assets/images/Woods Equipment/6.png",
      "assets/images/Woods Equipment/7.png",
      "assets/images/Woods Equipment/8.png",
      "assets/images/Woods Equipment/Slasher-diagram-2.jpg"
    ],
    "description": "American-built Woods cutting and land-management equipment — rotary cutters, finishing mowers and land-clearing gear, engineered so there's no windrow mess. Superior US build. See the range below and email us about the machine you're after."
  }
];

  var products = [
  {
    "slug": "bobcat-ct4055-55hp",
    "name": "Bobcat CT4055",
    "brand": "bobcat",
    "category": "tractors",
    "hp": 55,
    "priceFrom": 42990,
    "condition": "new",
    "availability": "in-stock",
    "badges": [
      "Best Seller"
    ],
    "featured": true,
    "photoId": "assets/bobcat-ct4055.jpeg",
    "tagline": "Heavy-duty compact, ready for the next chore.",
    "summary": "The CT4055 compact tractor allows operators to finish one chore after the next. A heavy-duty work companion that comes standard with rear PTO and four-wheel drive.",
    "description": "Built for operators who never stop moving, the Bobcat CT4055 is a heavy-duty compact tractor engineered to take on loader work, mowing, slashing, tilling and towing without breaking stride. Standard four-wheel drive and a rear PTO mean it's ready to work the moment it arrives — and with genuine parts and factory-trained servicing through Prestige Tractors, it stays that way.",
    "highlights": [
      "55hp turbo-diesel engine",
      "Four-wheel drive standard",
      "Rear PTO standard",
      "Heavy-duty front loader ready"
    ],
    "specs": [
      [
        "Engine Power",
        "55 hp"
      ],
      [
        "Drivetrain",
        "4WD (standard)"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Transmission",
        "Hydrostatic, 3-range"
      ],
      [
        "Lift Capacity",
        "1,200 kg (rear)"
      ],
      [
        "Category",
        "Compact utility tractor"
      ]
    ],
    "features": [
      "Spacious operator platform with ergonomic controls",
      "Quick-attach front-end loader compatibility",
      "Category 1 three-point linkage",
      "Tight turning radius for confined work"
    ]
  },
  {
    "slug": "bobcat-ct2035-35hp",
    "name": "Bobcat CT2035",
    "brand": "bobcat",
    "category": "tractors",
    "hp": 35,
    "priceFrom": 31490,
    "condition": "new",
    "availability": "in-stock",
    "featured": true,
    "photoId": "assets/bobcat-ct2035-scaled.jpeg",
    "tagline": "The performance and power to tackle any task.",
    "summary": "The CT2035 delivers the performance and power you need to tackle loader and implement work. Standard four-wheel drive makes this a confident all-rounder.",
    "description": "The Bobcat CT2035 hits the sweet spot for properties and small farms that need genuine capability without the bulk. With standard four-wheel drive and strong hydraulics, it handles loader duties, implement work and day-to-day property maintenance with ease.",
    "highlights": [
      "35hp diesel engine",
      "Four-wheel drive standard",
      "Loader & implement ready",
      "Compact, manoeuvrable footprint"
    ],
    "specs": [
      [
        "Engine Power",
        "35 hp"
      ],
      [
        "Drivetrain",
        "4WD (standard)"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Transmission",
        "Hydrostatic, 3-range"
      ],
      [
        "Lift Capacity",
        "900 kg (rear)"
      ],
      [
        "Category",
        "Compact utility tractor"
      ]
    ],
    "features": [
      "Easy-operate hydrostatic transmission",
      "Loader-ready hydraulics",
      "Comfortable, low-vibration operator station",
      "Excellent visibility to implement"
    ]
  },
  {
    "slug": "26hp-hobby-farm-hero",
    "name": "26hp Hobby Farm Hero",
    "brand": "bobcat",
    "category": "tractors",
    "hp": 26,
    "priceFrom": 30250,
    "priceNote": "Package price inc GST",
    "condition": "new",
    "availability": "in-stock",
    "badges": [
      "Package Deal"
    ],
    "featured": true,
    "photoId": "assets/26hp-hobby.png",
    "tagline": "The ideal package for lifestyle blocks.",
    "summary": "Take on everything from mowing and slashing to lifting, towing and general property maintenance with the 26hp Bobcat Tractor + Implement Package — the ideal hobby-farm all-rounder.",
    "description": "Purpose-built for lifestyle blocks and hobby farms, the 26hp Hobby Farm Hero bundles a capable Bobcat compact tractor with the essential implements to get started straight away. Mow, slash, lift, tow and maintain your property with one machine — sold as a value-driven, ready-to-work package.",
    "highlights": [
      "26hp Bobcat tractor + implement package",
      "Front-end loader included",
      "Slasher & implements bundled",
      "Ideal for hobby & lifestyle farms"
    ],
    "specs": [
      [
        "Engine Power",
        "26 hp"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Package",
        "Tractor + loader + implements"
      ],
      [
        "Best For",
        "Hobby & lifestyle farms"
      ],
      [
        "Transmission",
        "Hydrostatic"
      ]
    ],
    "features": [
      "Complete start-to-work implement bundle",
      "Easy operation for new operators",
      "Compact and easy to store",
      "Genuine parts & local servicing included"
    ]
  },
  {
    "slug": "mccormick-s-max-60",
    "name": "McCormick S-MAX 60",
    "brand": "mccormick",
    "category": "tractors",
    "hp": 60,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/1st - McCormick S-MAX 60/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/1st - McCormick S-MAX 60/1.jpg",
      "assets/images/McCormick Tractors/1st - McCormick S-MAX 60/2.jpg",
      "assets/images/McCormick Tractors/1st - McCormick S-MAX 60/3.jpg",
      "assets/images/McCormick Tractors/1st - McCormick S-MAX 60/4.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/1st - McCormick S-MAX 60/Tractor_Specifications.pdf",
    "tagline": "Compact utility power with genuine capability.",
    "summary": "The McCormick S-MAX 60 is a nimble utility tractor built for mixed farms, livestock and property work — comfortable, easy to operate and Italian-engineered.",
    "description": "The S-MAX 60 delivers dependable everyday capability in a compact, manoeuvrable package. Ideal for loader work, mowing and general farm duties, it pairs a responsive driveline with an easy-shift transmission and the reliability McCormick is known for.",
    "highlights": [
      "60hp class performance",
      "Loader & implement ready",
      "Compact, easy to manoeuvre",
      "Comfortable operator environment"
    ],
    "specs": [
      [
        "Engine Power",
        "60 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Synchro shuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "ROPS / cab options"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Easy-shift shuttle transmission",
      "Loader-ready hydraulics",
      "Tight turning for yards and sheds",
      "Low cost of ownership"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-s-max-75",
    "name": "McCormick S-MAX 75",
    "brand": "mccormick",
    "category": "tractors",
    "hp": 75,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/2nd - McCormick S-MAX 75/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/2nd - McCormick S-MAX 75/1.jpg",
      "assets/images/McCormick Tractors/2nd - McCormick S-MAX 75/2.jpg",
      "assets/images/McCormick Tractors/2nd - McCormick S-MAX 75/3.jpg",
      "assets/images/McCormick Tractors/2nd - McCormick S-MAX 75/4.jpg"
    ],
    "tagline": "Versatile mid-utility for the working farm.",
    "summary": "The McCormick S-MAX 75 steps up horsepower and hydraulic capacity for busy mixed-farming operations, while staying compact and simple to run.",
    "description": "With more grunt for loader and implement work, the S-MAX 75 is a versatile all-rounder for farms that need to do a bit of everything. A comfortable cab, strong hydraulics and proven McCormick driveline make it a dependable daily workhorse.",
    "highlights": [
      "75hp class performance",
      "Strong hydraulic capacity",
      "Loader & implement ready",
      "Comfortable, quiet operation"
    ],
    "specs": [
      [
        "Engine Power",
        "75 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Synchro shuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "ROPS / cab options"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "High-capacity hydraulics",
      "Loader-ready configuration",
      "Comfortable operator station",
      "Proven, serviceable driveline"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-b-max-85",
    "name": "McCormick B-MAX 85",
    "brand": "mccormick",
    "category": "tractors",
    "hp": 85,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/3rd - McCormick B-MAX 85/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/3rd - McCormick B-MAX 85/1.jpg",
      "assets/images/McCormick Tractors/3rd - McCormick B-MAX 85/2.jpg",
      "assets/images/McCormick Tractors/3rd - McCormick B-MAX 85/3.jpg",
      "assets/images/McCormick Tractors/3rd - McCormick B-MAX 85/4.jpg",
      "assets/images/McCormick Tractors/3rd - McCormick B-MAX 85/5.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/3rd - McCormick B-MAX 85/Tractor_Specifications.pdf",
    "tagline": "Specialist compact for orchards & vineyards.",
    "summary": "The McCormick B-MAX 85 is a narrow, agile specialist tractor built for orchard, vineyard and horticultural rows where width and turning circle matter.",
    "description": "Engineered for confined rows and specialty crops, the B-MAX 85 combines a slim profile with real working capability. Its tight turning circle, low centre of gravity and responsive hydraulics make light work of spraying, mowing and cultivation between rows.",
    "highlights": [
      "85hp class performance",
      "Narrow specialist profile",
      "Tight turning circle",
      "Ideal for orchards & vineyards"
    ],
    "specs": [
      [
        "Engine Power",
        "85 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Synchro / powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "Low-profile cab / ROPS"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Slim frame for narrow rows",
      "Low centre of gravity",
      "High-flow hydraulics for sprayers",
      "Excellent manoeuvrability"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-s-max-90r",
    "name": "McCormick S-MAX 90R",
    "brand": "mccormick",
    "category": "tractors",
    "hp": 90,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/4th - McCormick S-MAX 90R/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/4th - McCormick S-MAX 90R/1.jpg",
      "assets/images/McCormick Tractors/4th - McCormick S-MAX 90R/2.jpg",
      "assets/images/McCormick Tractors/4th - McCormick S-MAX 90R/3.jpg",
      "assets/images/McCormick Tractors/4th - McCormick S-MAX 90R/4.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/4th - McCormick S-MAX 90R/Tractor_Specifications.pdf",
    "tagline": "90hp all-rounder, open-station value.",
    "summary": "The McCormick S-MAX 90R pairs 90hp-class performance with a robust ROPS open-station configuration for operators who want capability without a cab.",
    "description": "The S-MAX 90R is a genuine working tractor for farms and contractors who prefer an open station. Strong hydraulics, a comfortable platform and a proven driveline deliver reliable performance across loader work, tillage and transport.",
    "highlights": [
      "90hp class performance",
      "ROPS open-station",
      "Strong hydraulics",
      "Great value all-rounder"
    ],
    "specs": [
      [
        "Engine Power",
        "90 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Synchro shuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "ROPS (open station)"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Foldable ROPS for low clearance",
      "Loader-ready hydraulics",
      "Robust, field-proven build",
      "Low running costs"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-s-max-90c",
    "name": "McCormick S-MAX 90C",
    "brand": "mccormick",
    "category": "tractors",
    "hp": 90,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/5th - McCormick S-MAX 90C/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/5th - McCormick S-MAX 90C/1.jpg",
      "assets/images/McCormick Tractors/5th - McCormick S-MAX 90C/2.jpg",
      "assets/images/McCormick Tractors/5th - McCormick S-MAX 90C/3.jpg",
      "assets/images/McCormick Tractors/5th - McCormick S-MAX 90C/4.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/5th - McCormick S-MAX 90C/Tractor_Specifications.pdf",
    "tagline": "90hp with all-day cab comfort.",
    "summary": "The McCormick S-MAX 90C brings 90hp-class performance together with a quiet, climate-comfortable cab for longer days in the seat.",
    "description": "The cab-equipped S-MAX 90C is built for operators who spend serious hours working. A quiet, well-appointed cab, strong hydraulics and a smooth driveline make it an ideal mid-range tractor for mixed farming and contracting.",
    "highlights": [
      "90hp class performance",
      "Comfortable enclosed cab",
      "Strong hydraulic capacity",
      "Smooth, quiet driveline"
    ],
    "specs": [
      [
        "Engine Power",
        "90 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "Enclosed comfort cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Climate-controlled cab option",
      "High-capacity hydraulics",
      "Loader & implement ready",
      "Excellent all-round visibility"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-b-max-110",
    "name": "McCormick B-MAX 110",
    "brand": "mccormick",
    "category": "tractors",
    "hp": 110,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/6th - McCormick B-MAX 110/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/6th - McCormick B-MAX 110/1.jpg",
      "assets/images/McCormick Tractors/6th - McCormick B-MAX 110/2.jpg",
      "assets/images/McCormick Tractors/6th - McCormick B-MAX 110/3.jpg",
      "assets/images/McCormick Tractors/6th - McCormick B-MAX 110/4.jpg",
      "assets/images/McCormick Tractors/6th - McCormick B-MAX 110/5.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/6th - McCormick B-MAX 110/Tractor_Specifications.pdf",
    "tagline": "Specialist power for demanding rows.",
    "summary": "The McCormick B-MAX 110 delivers specialist tractor agility with the extra horsepower needed for heavier orchard, vineyard and horticultural work.",
    "description": "The B-MAX 110 brings serious capability to specialty crops. Its narrow build and tight turning circle keep it working in tight rows, while extra horsepower and hydraulic flow handle heavier spraying, mowing and cultivation tasks with ease.",
    "highlights": [
      "110hp class performance",
      "Narrow specialist profile",
      "High hydraulic flow",
      "Built for orchards & vineyards"
    ],
    "specs": [
      [
        "Engine Power",
        "110 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "Low-profile cab / ROPS"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Slim frame for narrow rows",
      "High-flow hydraulics",
      "Tight turning circle",
      "Comfortable specialist cab"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-f-110",
    "name": "McCormick F.110",
    "brand": "mccormick",
    "category": "tractors",
    "hp": 110,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/7th - McCormick F.110/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/7th - McCormick F.110/1.jpg",
      "assets/images/McCormick Tractors/7th - McCormick F.110/2.jpg",
      "assets/images/McCormick Tractors/7th - McCormick F.110/3.jpg",
      "assets/images/McCormick Tractors/7th - McCormick F.110/4.jpg",
      "assets/images/McCormick Tractors/7th - McCormick F.110/5.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/7th - McCormick F.110/Tractor_Specifications.pdf",
    "tagline": "Purpose-built fruit & vineyard specialist.",
    "summary": "The McCormick F.110 is a dedicated fruit and vineyard tractor — narrow, low and agile, with the power and hydraulics for intensive specialty-crop work.",
    "description": "The F-series F.110 is engineered specifically for orchards and vineyards, combining a compact, low-profile chassis with strong performance. It threads through the tightest rows while delivering the hydraulic capacity and comfort needed for long, productive days.",
    "highlights": [
      "110hp class performance",
      "Dedicated fruit/vineyard design",
      "Low, narrow profile",
      "Strong hydraulic capacity"
    ],
    "specs": [
      [
        "Engine Power",
        "110 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "Low-profile cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Purpose-built specialist chassis",
      "Excellent row clearance",
      "High-flow hydraulics for sprayers",
      "Agile turning circle"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-x4-120tm",
    "name": "McCormick X4.120TM",
    "brand": "mccormick",
    "category": "tractors",
    "hp": 120,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/8th - McCormick X4.120TM/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/8th - McCormick X4.120TM/1.jpg",
      "assets/images/McCormick Tractors/8th - McCormick X4.120TM/2.jpg",
      "assets/images/McCormick Tractors/8th - McCormick X4.120TM/3.jpg",
      "assets/images/McCormick Tractors/8th - McCormick X4.120TM/4.jpg",
      "assets/images/McCormick Tractors/8th - McCormick X4.120TM/5.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/8th - McCormick X4.120TM/Tractor_Specifications.pdf",
    "tagline": "Compact-class power with premium comfort.",
    "summary": "The McCormick X4.120TM delivers up to 120hp-class performance in a compact, versatile chassis with a refined operator environment.",
    "description": "The X4.120TM bridges utility and mid-horsepower, offering strong pulling power, high-capacity hydraulics and a comfortable cab in an easy-to-manoeuvre package. A capable all-rounder for mixed farming, livestock and contracting.",
    "highlights": [
      "120hp class performance",
      "Compact, versatile chassis",
      "High-capacity hydraulics",
      "Refined operator comfort"
    ],
    "specs": [
      [
        "Engine Power",
        "120 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershuttle / powershift"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "Comfort cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Strong pulling power",
      "Loader & implement ready",
      "Comfortable, well-appointed cab",
      "Efficient turbo-diesel engine"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-d-max-125",
    "name": "McCormick D-MAX 125",
    "brand": "mccormick",
    "category": "tractors",
    "hp": null,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/9th - McCormick D-MAX 125/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/9th - McCormick D-MAX 125/1.jpg",
      "assets/images/McCormick Tractors/9th - McCormick D-MAX 125/2.jpg",
      "assets/images/McCormick Tractors/9th - McCormick D-MAX 125/3.jpg",
      "assets/images/McCormick Tractors/9th - McCormick D-MAX 125/4.jpg",
      "assets/images/McCormick Tractors/9th - McCormick D-MAX 125/6.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/9th - McCormick D-MAX 125/Tractor_Specifications.pdf",
    "tagline": "Versatile utility, Italian-engineered.",
    "summary": "The McCormick D-MAX 125 is a versatile utility tractor suited to a wide range of everyday farm and property tasks.",
    "description": "Compact yet capable, the McCormick D-MAX 125 delivers dependable utility performance for orchards, livestock and mixed properties. Easy to operate and built to last, it's an ideal everyday workhorse — enquire with our team for specification and pricing.",
    "highlights": [
      "Versatile utility performance",
      "Compact, manoeuvrable design",
      "Simple, reliable operation",
      "Loader-ready"
    ],
    "specs": [
      [
        "Engine Power",
        "Utility class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Mechanical / powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "ROPS / cab options"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Easy-shift transmission",
      "Tight turning for confined spaces",
      "Loader-ready hydraulics",
      "Low running costs"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-g-max-135",
    "name": "McCormick G-MAX 135",
    "brand": "mccormick",
    "category": "tractors",
    "hp": null,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/10th - McCormick G-MAX 135/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/10th - McCormick G-MAX 135/1.jpg",
      "assets/images/McCormick Tractors/10th - McCormick G-MAX 135/2.jpg",
      "assets/images/McCormick Tractors/10th - McCormick G-MAX 135/3.jpg",
      "assets/images/McCormick Tractors/10th - McCormick G-MAX 135/4.jpg",
      "assets/images/McCormick Tractors/10th - McCormick G-MAX 135/5.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/10th - McCormick G-MAX 135/Tractor_Specifications.pdf",
    "tagline": "Broadacre-ready mid-to-high horsepower.",
    "summary": "The McCormick G-MAX 135 brings higher-horsepower performance and cab comfort to broadacre and mixed farming operations.",
    "description": "The G-MAX 135 is built for operators who demand more power and productivity. With a strong six-cylinder-class driveline, high-capacity hydraulics and a spacious cab, it's ready for heavy tillage, transport and demanding implement work.",
    "highlights": [
      "High-horsepower performance",
      "Spacious comfort cab",
      "High-capacity hydraulics",
      "Built for broadacre & mixed farming"
    ],
    "specs": [
      [
        "Engine Power",
        "Mid-high horsepower"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershift options"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "Premium comfort cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Powerful, efficient driveline",
      "High-flow hydraulics",
      "Front linkage & PTO options",
      "All-day operator comfort"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-x6-415",
    "name": "McCormick X6.415",
    "brand": "mccormick",
    "category": "tractors",
    "hp": null,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/11th - McCormick X6.415/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/11th - McCormick X6.415/1.jpg",
      "assets/images/McCormick Tractors/11th - McCormick X6.415/2.jpg",
      "assets/images/McCormick Tractors/11th - McCormick X6.415/3.jpg",
      "assets/images/McCormick Tractors/11th - McCormick X6.415/4.jpg",
      "assets/images/McCormick Tractors/11th - McCormick X6.415/5.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/11th - McCormick X6.415/Tractor_Specifications.pdf",
    "tagline": "Efficient four-cylinder power, premium feel.",
    "summary": "The McCormick X6.415 delivers efficient four-cylinder horsepower with premium transmission and cab options for productive mixed-farming work.",
    "description": "The X6-series X6.415 combines a compact four-cylinder footprint with high-horsepower output, advanced transmission choices and a refined cab. A productive, efficient tractor for farms that want power without excess weight.",
    "highlights": [
      "High-output four-cylinder engine",
      "Advanced transmission options",
      "Premium suspended cab",
      "Efficient, productive design"
    ],
    "specs": [
      [
        "Engine Power",
        "High horsepower (4-cyl)"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershift / CVT options"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "Premium suspended cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Compact high-output driveline",
      "High-flow hydraulics",
      "Precision-farming ready",
      "Front linkage & PTO options"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-g-max-165",
    "name": "McCormick G-MAX 165",
    "brand": "mccormick",
    "category": "tractors",
    "hp": null,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/12th - McCormick G-MAX 165/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/12th - McCormick G-MAX 165/1.jpg",
      "assets/images/McCormick Tractors/12th - McCormick G-MAX 165/2.jpg",
      "assets/images/McCormick Tractors/12th - McCormick G-MAX 165/3.png",
      "assets/images/McCormick Tractors/12th - McCormick G-MAX 165/4.jpg",
      "assets/images/McCormick Tractors/12th - McCormick G-MAX 165/5.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/12th - McCormick G-MAX 165/Tractor_Specifications.pdf",
    "tagline": "High-horsepower muscle for heavy work.",
    "summary": "The McCormick G-MAX 165 is a high-horsepower workhorse for heavy tillage, transport and broadacre operations that demand serious pulling power.",
    "description": "Built for the heaviest jobs, the G-MAX 165 pairs a powerful six-cylinder-class engine with robust transmission and hydraulics. A spacious, comfortable cab keeps operators productive through long days of demanding work.",
    "highlights": [
      "High-horsepower performance",
      "Heavy-duty driveline",
      "High-capacity hydraulics",
      "Spacious comfort cab"
    ],
    "specs": [
      [
        "Engine Power",
        "High horsepower (6-cyl class)"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershift options"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "Premium comfort cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Serious pulling power",
      "High-flow hydraulics for big implements",
      "Front linkage & PTO options",
      "All-day cab comfort"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-x7-616",
    "name": "McCormick X7.616",
    "brand": "mccormick",
    "category": "tractors",
    "hp": null,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/13th - McCormick X7.616/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/13th - McCormick X7.616/1.jpg",
      "assets/images/McCormick Tractors/13th - McCormick X7.616/2.jpg",
      "assets/images/McCormick Tractors/13th - McCormick X7.616/3.jpg",
      "assets/images/McCormick Tractors/13th - McCormick X7.616/4.jpg",
      "assets/images/McCormick Tractors/13th - McCormick X7.616/5.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/13th - McCormick X7.616/Tractor_Specifications.pdf",
    "tagline": "Premium six-cylinder performance.",
    "summary": "The McCormick X7.616 brings refined six-cylinder power, advanced transmission technology and premium cab comfort to serious farming operations.",
    "description": "The X7-series X7.616 is a true premium performer — six-cylinder power, a sophisticated transmission and a suspended, climate-controlled cab. Built for broadacre, contracting and demanding mixed-farming operations that never compromise on productivity.",
    "highlights": [
      "Premium six-cylinder power",
      "Advanced transmission options",
      "Suspended climate cab",
      "Precision-farming ready"
    ],
    "specs": [
      [
        "Engine Power",
        "High horsepower (6-cyl)"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershift / P6-Drive / CVT"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "Premium suspended cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Spacious climate-controlled cab",
      "High-flow load-sensing hydraulics",
      "Front linkage & PTO options",
      "GPS / precision-farming ready"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-x7-660",
    "name": "McCormick X7.660",
    "brand": "mccormick",
    "category": "tractors",
    "hp": null,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/14th - McCormick X7.660/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/14th - McCormick X7.660/1.jpg",
      "assets/images/McCormick Tractors/14th - McCormick X7.660/2.jpg",
      "assets/images/McCormick Tractors/14th - McCormick X7.660/3.jpg",
      "assets/images/McCormick Tractors/14th - McCormick X7.660/4.jpg",
      "assets/images/McCormick Tractors/14th - McCormick X7.660/5.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/14th - McCormick X7.660/Tractor_Specifications.pdf",
    "tagline": "Flagship six-cylinder power & refinement.",
    "summary": "The McCormick X7.660 sits near the top of the X7 range, delivering high six-cylinder horsepower with premium comfort and technology for the most demanding operations.",
    "description": "The X7.660 is built for operators who demand maximum productivity. With high six-cylinder output, an advanced transmission and a fully-featured suspended cab, it delivers the power, comfort and precision needed for heavy tillage, transport and contracting.",
    "highlights": [
      "High six-cylinder horsepower",
      "Advanced transmission technology",
      "Fully-featured suspended cab",
      "Precision-farming ready"
    ],
    "specs": [
      [
        "Engine Power",
        "High horsepower (6-cyl)"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershift / P6-Drive / CVT"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "Premium suspended cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Maximum pulling power",
      "High-flow load-sensing hydraulics",
      "Front linkage & PTO options",
      "GPS / precision-farming ready"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-x7-623",
    "name": "McCormick X7.623",
    "brand": "mccormick",
    "category": "tractors",
    "hp": null,
    "featured": false,
    "photoId": "assets/images/McCormick Tractors/15th - McCormick X7.623/1.png",
    "gallery": [
      "assets/images/McCormick Tractors/15th - McCormick X7.623/1.png",
      "assets/images/McCormick Tractors/15th - McCormick X7.623/2.png",
      "assets/images/McCormick Tractors/15th - McCormick X7.623/3.png",
      "assets/images/McCormick Tractors/15th - McCormick X7.623/4.jpg",
      "assets/images/McCormick Tractors/15th - McCormick X7.623/5.png"
    ],
    "brochure": "assets/images/McCormick Tractors/15th - McCormick X7.623/Tractor_Specifications.pdf",
    "tagline": "VT-Drive continuously variable performance.",
    "summary": "The McCormick X7.623 pairs premium six-cylinder power with continuously variable transmission technology for smooth, efficient, all-day productivity.",
    "description": "The X7.623 brings continuously variable transmission refinement to the premium X7 range. Seamless power delivery, high-capacity hydraulics and a premium suspended cab make it exceptionally efficient and comfortable across heavy fieldwork and transport.",
    "highlights": [
      "Premium six-cylinder power",
      "Continuously variable transmission",
      "Suspended climate cab",
      "Smooth, efficient operation"
    ],
    "specs": [
      [
        "Engine Power",
        "High horsepower (6-cyl)"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "VT-Drive CVT"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "Premium suspended cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Seamless CVT power delivery",
      "High-flow load-sensing hydraulics",
      "Front linkage & PTO options",
      "GPS / precision-farming ready"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "mccormick-x8-680",
    "name": "McCormick X8.680",
    "brand": "mccormick",
    "category": "tractors",
    "hp": null,
    "featured": true,
    "photoId": "assets/images/McCormick Tractors/16th - McCormick X8.680/1.jpg",
    "gallery": [
      "assets/images/McCormick Tractors/16th - McCormick X8.680/1.jpg",
      "assets/images/McCormick Tractors/16th - McCormick X8.680/2.jpg",
      "assets/images/McCormick Tractors/16th - McCormick X8.680/3.jpg",
      "assets/images/McCormick Tractors/16th - McCormick X8.680/4.jpg",
      "assets/images/McCormick Tractors/16th - McCormick X8.680/5.jpg"
    ],
    "brochure": "assets/images/McCormick Tractors/16th - McCormick X8.680/Tractor_Specifications.pdf",
    "tagline": "The flagship — maximum power & technology.",
    "summary": "The McCormick X8.680 is the flagship of the range, delivering top-tier horsepower, premium technology and exceptional comfort for the largest broadacre operations.",
    "description": "The X8-series X8.680 represents the pinnacle of McCormick engineering — high output, advanced continuously variable transmission, load-sensing hydraulics and a premium suspended cab. Built for the heaviest tillage, seeding and transport work on large-scale operations.",
    "highlights": [
      "Flagship high-horsepower output",
      "Advanced CVT transmission",
      "Load-sensing hydraulics",
      "Premium suspended cab"
    ],
    "specs": [
      [
        "Engine Power",
        "Flagship horsepower (6-cyl)"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "VT-Drive CVT"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E rpm"
      ],
      [
        "Cab",
        "Premium suspended cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Maximum pulling & PTO power",
      "High-flow load-sensing hydraulics",
      "Front linkage & PTO",
      "Full GPS / precision-farming suite"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire"
  },
  {
    "slug": "bobcat-ct1025",
    "name": "Bobcat CT1025",
    "brand": "bobcat",
    "category": "tractors",
    "hp": 25,
    "photoId": "assets/images/Bobcat Tractors/CT1025/1.jpg",
    "gallery": [
      "assets/images/Bobcat Tractors/CT1025/1.jpg",
      "assets/images/Bobcat Tractors/CT1025/2.jpg",
      "assets/images/Bobcat Tractors/CT1025/3.jpg",
      "assets/images/Bobcat Tractors/CT1025/4.jpg",
      "assets/images/Bobcat Tractors/CT1025/5.jpg"
    ],
    "brochure": "assets/images/Bobcat Tractors/CT1025/Tractor_Specifications.pdf",
    "tagline": "Sub-compact power for smaller properties.",
    "summary": "The Bobcat CT1025 is a sub-compact tractor that packs genuine capability into an easy-to-operate, easy-to-store package for smaller acreage.",
    "description": "Ideal for lifestyle blocks and smaller properties, the CT1025 sub-compact tractor handles mowing, loader work and light implement duties with ease. Standard four-wheel drive and simple hydrostatic operation make it approachable for any operator.",
    "highlights": [
      "25hp class engine",
      "Sub-compact, easy to store",
      "Four-wheel drive standard",
      "Loader & mower ready"
    ],
    "specs": [
      [
        "Engine Power",
        "25 hp class"
      ],
      [
        "Drivetrain",
        "4WD (standard)"
      ],
      [
        "Transmission",
        "Hydrostatic"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Sub-compact tractor"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Easy hydrostatic operation",
      "Quick-attach loader compatible",
      "Compact footprint",
      "Ideal first tractor"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "bobcat-ct2040",
    "name": "Bobcat CT2040",
    "brand": "bobcat",
    "category": "tractors",
    "hp": 40,
    "photoId": "assets/images/Bobcat Tractors/CT2040/1.jpg",
    "gallery": [
      "assets/images/Bobcat Tractors/CT2040/1.jpg",
      "assets/images/Bobcat Tractors/CT2040/2.jpg",
      "assets/images/Bobcat Tractors/CT2040/3.jpg",
      "assets/images/Bobcat Tractors/CT2040/4.jpg",
      "assets/images/Bobcat Tractors/CT2040/5.jpg"
    ],
    "brochure": "assets/images/Bobcat Tractors/CT2040/Tractor_Specifications.pdf",
    "tagline": "Compact capability for properties & farms.",
    "summary": "The Bobcat CT2040 compact tractor delivers dependable power for loader work, mowing and implements on properties and small farms.",
    "description": "The CT2040 steps up capability for owners who need to do more. With standard four-wheel drive, strong hydraulics and a comfortable operator station, it takes on loader duties, slashing and implement work day in, day out.",
    "highlights": [
      "40hp class engine",
      "Four-wheel drive standard",
      "Loader & implement ready",
      "Comfortable operator station"
    ],
    "specs": [
      [
        "Engine Power",
        "40 hp class"
      ],
      [
        "Drivetrain",
        "4WD (standard)"
      ],
      [
        "Transmission",
        "Hydrostatic"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Compact utility tractor"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Loader-ready hydraulics",
      "Easy hydrostatic transmission",
      "Category 1 three-point linkage",
      "Excellent implement visibility"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "bobcat-ct2045",
    "name": "Bobcat CT2045",
    "brand": "bobcat",
    "category": "tractors",
    "hp": 45,
    "photoId": "assets/images/Bobcat Tractors/CT2045/1.jpg",
    "gallery": [
      "assets/images/Bobcat Tractors/CT2045/1.jpg",
      "assets/images/Bobcat Tractors/CT2045/2.jpg",
      "assets/images/Bobcat Tractors/CT2045/3.jpg",
      "assets/images/Bobcat Tractors/CT2045/4.jpg",
      "assets/images/Bobcat Tractors/CT2045/5.jpg"
    ],
    "brochure": "assets/images/Bobcat Tractors/CT2045/Tractor_Specifications.pdf",
    "tagline": "Mid-compact power with strong hydraulics.",
    "summary": "The Bobcat CT2045 brings extra horsepower and hydraulic capacity for owners tackling heavier loader and implement work.",
    "description": "With more power on tap, the CT2045 handles demanding property and small-farm tasks confidently. Standard four-wheel drive, strong hydraulics and a robust build make it a capable, long-serving all-rounder.",
    "highlights": [
      "45hp class engine",
      "Four-wheel drive standard",
      "Strong hydraulic capacity",
      "Heavy loader ready"
    ],
    "specs": [
      [
        "Engine Power",
        "45 hp class"
      ],
      [
        "Drivetrain",
        "4WD (standard)"
      ],
      [
        "Transmission",
        "Hydrostatic"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Compact utility tractor"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "High-capacity hydraulics",
      "Quick-attach loader compatible",
      "Comfortable operator platform",
      "Robust, durable build"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "bobcat-ct2055",
    "name": "Bobcat CT2055",
    "brand": "bobcat",
    "category": "tractors",
    "hp": 55,
    "photoId": "assets/images/Bobcat Tractors/CT2055/1.jpg",
    "gallery": [
      "assets/images/Bobcat Tractors/CT2055/1.jpg",
      "assets/images/Bobcat Tractors/CT2055/2.jpg",
      "assets/images/Bobcat Tractors/CT2055/3.jpg",
      "assets/images/Bobcat Tractors/CT2055/4.jpg",
      "assets/images/Bobcat Tractors/CT2055/5.jpg"
    ],
    "brochure": "assets/images/Bobcat Tractors/CT2055/Tractor_Specifications.pdf",
    "tagline": "Top-of-range compact muscle.",
    "summary": "The Bobcat CT2055 tops the compact CT range with 55hp-class power for the heaviest loader, mowing and implement tasks.",
    "description": "The CT2055 is the strongest of the compact CT series, built for owners who need maximum capability without moving up to a utility tractor. Standard four-wheel drive, high hydraulic flow and a comfortable station make heavy work easy.",
    "highlights": [
      "55hp class engine",
      "Four-wheel drive standard",
      "High hydraulic flow",
      "Heavy-duty loader ready"
    ],
    "specs": [
      [
        "Engine Power",
        "55 hp class"
      ],
      [
        "Drivetrain",
        "4WD (standard)"
      ],
      [
        "Transmission",
        "Hydrostatic"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Compact utility tractor"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "High-flow hydraulics",
      "Heavy-duty loader capability",
      "Comfortable operator platform",
      "Rugged, reliable driveline"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "bobcat-ut6070",
    "name": "Bobcat UT6070",
    "brand": "bobcat",
    "category": "tractors",
    "hp": 70,
    "photoId": "assets/images/Bobcat Tractors/UT6070/1.jpg",
    "gallery": [
      "assets/images/Bobcat Tractors/UT6070/1.jpg",
      "assets/images/Bobcat Tractors/UT6070/2.jpg",
      "assets/images/Bobcat Tractors/UT6070/3.jpg"
    ],
    "brochure": "assets/images/Bobcat Tractors/UT6070/Tractor_Specifications.pdf",
    "tagline": "Utility-class power for serious work.",
    "summary": "The Bobcat UT6070 utility tractor delivers 70hp-class performance for farms and contractors needing genuine daily capability.",
    "description": "Stepping into the utility class, the UT6070 offers strong horsepower, robust hydraulics and a comfortable operating environment for heavier loader work, tillage and transport across working farms.",
    "highlights": [
      "70hp class engine",
      "Utility-class capability",
      "Strong hydraulics",
      "Loader & implement ready"
    ],
    "specs": [
      [
        "Engine Power",
        "70 hp class"
      ],
      [
        "Drivetrain",
        "4WD (standard)"
      ],
      [
        "Transmission",
        "Synchro / hydrostatic options"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Utility tractor"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Robust utility driveline",
      "High-capacity hydraulics",
      "Comfortable cab / ROPS options",
      "Heavy loader capability"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "bobcat-ut6080",
    "name": "Bobcat UT6080",
    "brand": "bobcat",
    "category": "tractors",
    "hp": 80,
    "photoId": "assets/images/Bobcat Tractors/UT6080/1.jpg",
    "gallery": [
      "assets/images/Bobcat Tractors/UT6080/1.jpg",
      "assets/images/Bobcat Tractors/UT6080/2.jpg",
      "assets/images/Bobcat Tractors/UT6080/3.jpg"
    ],
    "brochure": "assets/images/Bobcat Tractors/UT6080/Tractor_Specifications.pdf",
    "tagline": "Higher-horsepower utility workhorse.",
    "summary": "The Bobcat UT6080 brings 80hp-class utility performance for demanding farm and contracting operations.",
    "description": "The UT6080 is a genuine working utility tractor built for farms that need more power and hydraulic capacity. Strong, reliable and comfortable, it takes on the heaviest daily tasks with confidence.",
    "highlights": [
      "80hp class engine",
      "Utility-class capability",
      "High hydraulic capacity",
      "Loader & implement ready"
    ],
    "specs": [
      [
        "Engine Power",
        "80 hp class"
      ],
      [
        "Drivetrain",
        "4WD (standard)"
      ],
      [
        "Transmission",
        "Synchro / hydrostatic options"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Utility tractor"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Powerful utility driveline",
      "High-flow hydraulics",
      "Comfortable cab / ROPS options",
      "Heavy-duty loader capability"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "bobcat-ut6570",
    "name": "Bobcat UT6570",
    "brand": "bobcat",
    "category": "tractors",
    "hp": 70,
    "photoId": "assets/images/Bobcat Tractors/UT6570/1.jpg",
    "gallery": [
      "assets/images/Bobcat Tractors/UT6570/1.jpg",
      "assets/images/Bobcat Tractors/UT6570/2.jpg",
      "assets/images/Bobcat Tractors/UT6570/3.jpg",
      "assets/images/Bobcat Tractors/UT6570/4.jpg",
      "assets/images/Bobcat Tractors/UT6570/5.jpg"
    ],
    "brochure": "assets/images/Bobcat Tractors/UT6570/Tractor_Specifications.pdf",
    "tagline": "Premium utility with enhanced comfort.",
    "summary": "The Bobcat UT6570 pairs 70hp-class utility power with an enhanced operator environment for longer, more productive days.",
    "description": "The UT6570 delivers utility-class capability with added comfort and refinement. Strong hydraulics, a robust driveline and a well-appointed cab make it an ideal daily workhorse for mixed farming and contracting.",
    "highlights": [
      "70hp class engine",
      "Enhanced operator comfort",
      "Strong hydraulics",
      "Loader & implement ready"
    ],
    "specs": [
      [
        "Engine Power",
        "70 hp class"
      ],
      [
        "Drivetrain",
        "4WD (standard)"
      ],
      [
        "Transmission",
        "Synchro / powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Utility tractor"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Well-appointed cab option",
      "High-capacity hydraulics",
      "Robust utility driveline",
      "Heavy loader capability"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "bobcat-ut6580",
    "name": "Bobcat UT6580",
    "brand": "bobcat",
    "category": "tractors",
    "hp": 80,
    "photoId": "assets/images/Bobcat Tractors/UT6580/1.jpg",
    "gallery": [
      "assets/images/Bobcat Tractors/UT6580/1.jpg",
      "assets/images/Bobcat Tractors/UT6580/2.jpg",
      "assets/images/Bobcat Tractors/UT6580/3.jpg",
      "assets/images/Bobcat Tractors/UT6580/4.jpg",
      "assets/images/Bobcat Tractors/UT6580/5.jpg"
    ],
    "brochure": "assets/images/Bobcat Tractors/UT6580/Tractor_Specifications.pdf",
    "tagline": "Flagship utility power & comfort.",
    "summary": "The Bobcat UT6580 tops the utility range with 80hp-class performance and premium comfort for the most demanding operations.",
    "description": "The UT6580 is the strongest, most refined tractor in the Bobcat utility line-up. High horsepower, robust hydraulics and a premium cab combine to deliver serious productivity across the heaviest farm and contracting tasks.",
    "highlights": [
      "80hp class engine",
      "Premium operator comfort",
      "High hydraulic capacity",
      "Heavy-duty loader ready"
    ],
    "specs": [
      [
        "Engine Power",
        "80 hp class"
      ],
      [
        "Drivetrain",
        "4WD (standard)"
      ],
      [
        "Transmission",
        "Synchro / powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Utility tractor"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Premium cab environment",
      "High-flow hydraulics",
      "Powerful, reliable driveline",
      "Heavy-duty loader capability"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "mahindra-oja-1123",
    "name": "Mahindra OJA 1123 HST",
    "brand": "mahindra",
    "category": "tractors",
    "hp": 24,
    "photoId": "assets/images/Mahindra Tractors/1st - OJA 1123 HST/1123-active.jpg",
    "gallery": [
      "assets/images/Mahindra Tractors/1st - OJA 1123 HST/1123-active.jpg",
      "assets/images/Mahindra Tractors/1st - OJA 1123 HST/Mahindra-OJA-1123.jpg",
      "assets/images/Mahindra Tractors/1st - OJA 1123 HST/Screenshot 2026-07-02 141656.png"
    ],
    "tagline": "Next-gen sub-compact, packed with technology.",
    "summary": "The Mahindra OJA 1123 HST is a modern sub-compact tractor combining lightweight agility with smart features and easy hydrostatic operation.",
    "description": "Part of Mahindra's advanced OJA range, the 1123 HST delivers surprising capability in a compact, tech-forward package. Ideal for lifestyle blocks, it makes mowing, loader work and light tasks effortless with hydrostatic drive and modern ergonomics.",
    "highlights": [
      "~24hp sub-compact",
      "Hydrostatic transmission",
      "Four-wheel drive",
      "Smart, modern features"
    ],
    "specs": [
      [
        "Engine Power",
        "~24 hp"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Hydrostatic (HST)"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Sub-compact tractor"
      ],
      [
        "Origin",
        "India"
      ]
    ],
    "features": [
      "Easy hydrostatic operation",
      "Loader & mower ready",
      "Compact, manoeuvrable",
      "Modern operator ergonomics"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "mahindra-oja-1126",
    "name": "Mahindra OJA 1126 HST",
    "brand": "mahindra",
    "category": "tractors",
    "hp": 26,
    "photoId": "assets/images/Mahindra Tractors/2nd - OJA 1126 HST/1126-active.jpg",
    "gallery": [
      "assets/images/Mahindra Tractors/2nd - OJA 1126 HST/1126-active.jpg",
      "assets/images/Mahindra Tractors/2nd - OJA 1126 HST/Mahindra-OJA-1126.jpg",
      "assets/images/Mahindra Tractors/2nd - OJA 1126 HST/Screenshot 2026-07-02 142035.png"
    ],
    "tagline": "Compact capability with smart technology.",
    "summary": "The Mahindra OJA 1126 HST offers a step up in capability within the modern OJA sub-compact family, with hydrostatic ease and smart features.",
    "description": "The OJA 1126 HST brings a little more power to Mahindra's advanced sub-compact range. With hydrostatic drive, four-wheel drive and modern ergonomics, it's an easy, capable choice for property owners and hobby farmers.",
    "highlights": [
      "~26hp sub-compact",
      "Hydrostatic transmission",
      "Four-wheel drive",
      "Smart, modern features"
    ],
    "specs": [
      [
        "Engine Power",
        "~26 hp"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Hydrostatic (HST)"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Sub-compact tractor"
      ],
      [
        "Origin",
        "India"
      ]
    ],
    "features": [
      "Easy hydrostatic operation",
      "Loader & mower ready",
      "Compact, manoeuvrable",
      "Modern operator ergonomics"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "mahindra-oja-2126",
    "name": "Mahindra OJA 2126 HST",
    "brand": "mahindra",
    "category": "tractors",
    "hp": 26,
    "photoId": "assets/images/Mahindra Tractors/3rd - OJA 2126 HST/2126-active.jpg",
    "gallery": [
      "assets/images/Mahindra Tractors/3rd - OJA 2126 HST/2126-active.jpg",
      "assets/images/Mahindra Tractors/3rd - OJA 2126 HST/Mahindra-OJA-2126.jpg",
      "assets/images/Mahindra Tractors/3rd - OJA 2126 HST/Screenshot 2026-07-02 144724.png"
    ],
    "tagline": "Compact-class OJA with added versatility.",
    "summary": "The Mahindra OJA 2126 HST moves into the compact class of the OJA range, offering more versatility for property and small-farm work.",
    "description": "The OJA 2126 HST steps up to the compact class, blending modern technology with genuine working capability. Hydrostatic drive, four-wheel drive and strong hydraulics make it a versatile all-rounder for acreage owners.",
    "highlights": [
      "~26hp compact class",
      "Hydrostatic transmission",
      "Four-wheel drive",
      "Versatile capability"
    ],
    "specs": [
      [
        "Engine Power",
        "~26 hp"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Hydrostatic (HST)"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Compact tractor"
      ],
      [
        "Origin",
        "India"
      ]
    ],
    "features": [
      "Easy hydrostatic operation",
      "Loader & implement ready",
      "Compact, manoeuvrable",
      "Modern operator ergonomics"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "mahindra-jivo-245",
    "name": "Mahindra Jivo",
    "brand": "mahindra",
    "category": "tractors",
    "hp": 24,
    "photoId": "assets/images/Mahindra Tractors/4th - Jivo/JIVO.jpg",
    "gallery": [
      "assets/images/Mahindra Tractors/4th - Jivo/JIVO.jpg",
      "assets/images/Mahindra Tractors/4th - Jivo/JIVO-790x580-with-Sprayer-1.jpg",
      "assets/images/Mahindra Tractors/4th - Jivo/Jivo-1.jpg",
      "assets/images/Mahindra Tractors/4th - Jivo/Jivo-2.jpg"
    ],
    "tagline": "Lightweight 4WD for orchards & small farms.",
    "summary": "The Mahindra Jivo is a compact, lightweight four-wheel-drive tractor purpose-built for orchards, vineyards and small-farm work.",
    "description": "The nimble Jivo is designed for tight, specialty applications. Its narrow build, low weight and four-wheel drive make it ideal for orchard spraying, mowing and light haulage where a bigger tractor simply won't fit.",
    "highlights": [
      "~24hp compact",
      "Narrow, lightweight design",
      "Four-wheel drive",
      "Ideal for orchards & vineyards"
    ],
    "specs": [
      [
        "Engine Power",
        "~24 hp"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Hydrostatic / synchro"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Compact specialty tractor"
      ],
      [
        "Origin",
        "India"
      ]
    ],
    "features": [
      "Slim profile for tight rows",
      "Loader-ready configuration",
      "Low centre of gravity",
      "Fuel-efficient operation"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "mahindra-max-28",
    "name": "Mahindra Max 28",
    "brand": "mahindra",
    "category": "tractors",
    "hp": 28,
    "photoId": "assets/images/Mahindra Tractors/5th - Max28/1.jpg",
    "gallery": [
      "assets/images/Mahindra Tractors/5th - Max28/1.jpg",
      "assets/images/Mahindra Tractors/5th - Max28/2.jpg",
      "assets/images/Mahindra Tractors/5th - Max28/3.jpg",
      "assets/images/Mahindra Tractors/5th - Max28/4.jpg"
    ],
    "tagline": "Compact all-rounder for everyday work.",
    "summary": "The Mahindra Max 28 is a versatile compact tractor built for mowing, loader work and general property maintenance.",
    "description": "The Max 28 packs dependable four-wheel-drive capability into a compact, easy-to-run package. With loader-ready hydraulics and simple operation, it's a practical choice for acreage owners and hobby farmers.",
    "highlights": [
      "~28hp compact",
      "Four-wheel drive",
      "Loader & mower ready",
      "Simple, reliable operation"
    ],
    "specs": [
      [
        "Engine Power",
        "~28 hp"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Hydrostatic / synchro"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Compact tractor"
      ],
      [
        "Origin",
        "India"
      ]
    ],
    "features": [
      "Loader-ready hydraulics",
      "Easy operation",
      "Compact, manoeuvrable",
      "Rugged Mahindra reliability"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "mahindra-4025",
    "name": "Mahindra 4025",
    "brand": "mahindra",
    "category": "tractors",
    "hp": 41,
    "photoId": "assets/images/Mahindra Tractors/6th - 4025/1.jpg",
    "gallery": [
      "assets/images/Mahindra Tractors/6th - 4025/1.jpg",
      "assets/images/Mahindra Tractors/6th - 4025/2.jpg",
      "assets/images/Mahindra Tractors/6th - 4025/3.jpg",
      "assets/images/Mahindra Tractors/6th - 4025/4.jpg"
    ],
    "tagline": "Rugged, no-nonsense utility value.",
    "summary": "The Mahindra 4025 is a rugged, straightforward utility tractor delivering exceptional value and Mahindra's renowned reliability.",
    "description": "Built simple and built tough, the 4025 is a dependable utility tractor for farms that value reliability and low running costs. Its robust driveline and easy serviceability make it a proven daily workhorse.",
    "highlights": [
      "~41hp utility",
      "Rugged, simple design",
      "Four-wheel drive option",
      "Exceptional value"
    ],
    "specs": [
      [
        "Engine Power",
        "~41 hp"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Synchro shuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Utility tractor"
      ],
      [
        "Origin",
        "India"
      ]
    ],
    "features": [
      "Robust, serviceable driveline",
      "Loader-ready",
      "Low cost of ownership",
      "Proven Mahindra reliability"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "mahindra-3650",
    "name": "Mahindra 3650",
    "brand": "mahindra",
    "category": "tractors",
    "hp": 50,
    "photoId": "assets/images/Mahindra Tractors/7th - 3650/1.jpg",
    "gallery": [
      "assets/images/Mahindra Tractors/7th - 3650/1.jpg",
      "assets/images/Mahindra Tractors/7th - 3650/2.png",
      "assets/images/Mahindra Tractors/7th - 3650/3.jpg",
      "assets/images/Mahindra Tractors/7th - 3650/4.jpg"
    ],
    "tagline": "Dependable mid-utility workhorse.",
    "summary": "The Mahindra 3650 is a capable mid-utility tractor built for mixed farming, livestock and everyday property work.",
    "description": "The 3650 delivers reliable 50hp-class performance with the rugged simplicity Mahindra is famous for. Strong hydraulics and an easy-to-operate driveline make it a versatile, cost-effective all-rounder.",
    "highlights": [
      "~50hp utility",
      "Rugged, reliable build",
      "Four-wheel drive option",
      "Loader & implement ready"
    ],
    "specs": [
      [
        "Engine Power",
        "~50 hp"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Synchro shuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Utility tractor"
      ],
      [
        "Origin",
        "India"
      ]
    ],
    "features": [
      "Strong hydraulic capacity",
      "Loader-ready configuration",
      "Easy to operate and service",
      "Low running costs"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "mahindra-6060",
    "name": "Mahindra 6060",
    "brand": "mahindra",
    "category": "tractors",
    "hp": 60,
    "photoId": "assets/images/Mahindra Tractors/8th - 6060/1.png",
    "gallery": [
      "assets/images/Mahindra Tractors/8th - 6060/1.png",
      "assets/images/Mahindra Tractors/8th - 6060/2.jpg",
      "assets/images/Mahindra Tractors/8th - 6060/3.png",
      "assets/images/Mahindra Tractors/8th - 6060/4.jpg",
      "assets/images/Mahindra Tractors/8th - 6060/5.jpg"
    ],
    "tagline": "60hp value with genuine capability.",
    "summary": "The Mahindra 6060 delivers 60hp-class performance and strong hydraulics at outstanding value for working farms.",
    "description": "The 6060 is a robust utility tractor that punches above its price. With 60hp-class power, capable hydraulics and Mahindra's proven reliability, it's ready for loader work, tillage and daily farm duties.",
    "highlights": [
      "~60hp utility",
      "Strong hydraulics",
      "Four-wheel drive",
      "Outstanding value"
    ],
    "specs": [
      [
        "Engine Power",
        "~60 hp"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Synchro shuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Utility tractor"
      ],
      [
        "Origin",
        "India"
      ]
    ],
    "features": [
      "High-capacity hydraulics",
      "Loader & implement ready",
      "Comfortable operator platform",
      "Proven, serviceable driveline"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "mahindra-6075",
    "name": "Mahindra 6075",
    "brand": "mahindra",
    "category": "tractors",
    "hp": 75,
    "photoId": "assets/images/Mahindra Tractors/9th - 6075/1.jpg",
    "gallery": [
      "assets/images/Mahindra Tractors/9th - 6075/1.jpg",
      "assets/images/Mahindra Tractors/9th - 6075/2.jpg",
      "assets/images/Mahindra Tractors/9th - 6075/Mahindra-6075-Tractor-hero.png"
    ],
    "tagline": "75hp utility power, built tough.",
    "summary": "The Mahindra 6075 brings 75hp-class capability to farms needing more power for loader and implement work.",
    "description": "The 6075 steps up horsepower and hydraulic capacity while retaining Mahindra's rugged simplicity and value. A dependable choice for mixed farming, livestock and contracting.",
    "highlights": [
      "~75hp utility",
      "Higher hydraulic capacity",
      "Four-wheel drive",
      "Rugged, reliable build"
    ],
    "specs": [
      [
        "Engine Power",
        "~75 hp"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Synchro shuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Utility tractor"
      ],
      [
        "Origin",
        "India"
      ]
    ],
    "features": [
      "Strong loader capability",
      "High-capacity hydraulics",
      "Comfortable cab / ROPS options",
      "Low cost of ownership"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "mahindra-6080",
    "name": "Mahindra 6080",
    "brand": "mahindra",
    "category": "tractors",
    "hp": 80,
    "photoId": "assets/images/Mahindra Tractors/10th - 6080/6080_780_0342.jpg",
    "gallery": [
      "assets/images/Mahindra Tractors/10th - 6080/6080_780_0342.jpg",
      "assets/images/Mahindra Tractors/10th - 6080/6080_780_0388.jpg"
    ],
    "tagline": "80hp workhorse for demanding farms.",
    "summary": "The Mahindra 6080 delivers 80hp-class utility performance with the strength and value Mahindra is known for.",
    "description": "The 6080 is a serious utility tractor built for demanding daily work. Strong power, robust hydraulics and proven reliability make it an excellent-value choice for farms that need capability without the premium price tag.",
    "highlights": [
      "~80hp utility",
      "Strong hydraulic capacity",
      "Four-wheel drive",
      "Excellent value"
    ],
    "specs": [
      [
        "Engine Power",
        "~80 hp"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Synchro shuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Utility tractor"
      ],
      [
        "Origin",
        "India"
      ]
    ],
    "features": [
      "Powerful, reliable driveline",
      "Heavy loader capability",
      "Comfortable cab / ROPS options",
      "Low running costs"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "mahindra-7590",
    "name": "Mahindra 7590",
    "brand": "mahindra",
    "category": "tractors",
    "hp": null,
    "photoId": "assets/images/Mahindra Tractors/11th - 7590/Mahindra-Tractor129.jpg",
    "gallery": [
      "assets/images/Mahindra Tractors/11th - 7590/Mahindra-Tractor129.jpg",
      "assets/images/Mahindra Tractors/11th - 7590/7580.png",
      "assets/images/Mahindra Tractors/11th - 7590/Mahindra-Tractor131.jpg",
      "assets/images/Mahindra Tractors/11th - 7590/Mahindra-Tractor1601.jpg"
    ],
    "tagline": "High-horsepower value flagship.",
    "summary": "The Mahindra 7590 sits at the top of the utility range, delivering high-horsepower capability and cab comfort at outstanding value.",
    "description": "The 7590 brings serious horsepower and hydraulic capacity to large properties and contracting operations. With a comfortable cab and Mahindra's proven durability, it's a high-value option for demanding, high-hour work.",
    "highlights": [
      "High-horsepower utility",
      "Comfortable cab",
      "Four-wheel drive",
      "Outstanding value"
    ],
    "specs": [
      [
        "Engine Power",
        "High horsepower"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540 rpm"
      ],
      [
        "Category",
        "Utility tractor"
      ],
      [
        "Origin",
        "India"
      ]
    ],
    "features": [
      "High-capacity hydraulics",
      "Heavy-duty loader capability",
      "Comfortable enclosed cab",
      "Proven Mahindra reliability"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "landini-rex-90",
    "name": "Landini REX 90",
    "brand": "landini",
    "category": "tractors",
    "hp": 90,
    "photoId": "assets/images/Landini Tractors/Landini REX 90/Landini_REX_90_ROPS_Gallery_Image1.jpg",
    "gallery": [
      "assets/images/Landini Tractors/Landini REX 90/Landini_REX_90_ROPS_Gallery_Image1.jpg",
      "assets/images/Landini Tractors/Landini REX 90/Landini_REX_90_ROPS_Gallery_Image2.jpg",
      "assets/images/Landini Tractors/Landini REX 90/Landini_REX_90_ROPS_Gallery_Image6.jpg",
      "assets/images/Landini Tractors/Landini REX 90/Landini_REX_90_ROPS_Gallery_Image8.jpg"
    ],
    "tagline": "Specialist agility for orchards & vineyards.",
    "summary": "The Landini REX 90 is a versatile specialist tractor built for orchards, vineyards and horticulture, combining a compact profile with genuine capability.",
    "description": "Italian-built for specialty crops, the REX 90 threads through the tightest rows while delivering the power and hydraulics needed for spraying, mowing and cultivation. Available in ROPS configuration for low-clearance work.",
    "highlights": [
      "90hp class performance",
      "Narrow specialist profile",
      "Tight turning circle",
      "ROPS configuration"
    ],
    "specs": [
      [
        "Engine Power",
        "90 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E"
      ],
      [
        "Cab",
        "ROPS (open station)"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Slim frame for narrow rows",
      "High-flow hydraulics for sprayers",
      "Low centre of gravity",
      "Agile and manoeuvrable"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "landini-rex-110",
    "name": "Landini REX 110",
    "brand": "landini",
    "category": "tractors",
    "hp": 110,
    "photoId": "assets/images/Landini Tractors/Landini REX 110/Landini_REX_110_CAB_Gallery_Image1.jpg",
    "gallery": [
      "assets/images/Landini Tractors/Landini REX 110/Landini_REX_110_CAB_Gallery_Image1.jpg"
    ],
    "tagline": "Premium specialist power with cab comfort.",
    "summary": "The Landini REX 110 pairs 110hp-class specialist capability with a comfortable enclosed cab for demanding orchard and vineyard work.",
    "description": "The cab-equipped REX 110 brings premium comfort to specialty-crop farming. Its narrow build and tight turning circle keep it productive in confined rows, while strong hydraulics and horsepower handle heavier tasks with ease.",
    "highlights": [
      "110hp class performance",
      "Enclosed comfort cab",
      "Narrow specialist profile",
      "High hydraulic flow"
    ],
    "specs": [
      [
        "Engine Power",
        "110 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E"
      ],
      [
        "Cab",
        "Enclosed low-profile cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Comfortable specialist cab",
      "High-flow hydraulics",
      "Tight turning circle",
      "Excellent row clearance"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "landini-rex-3-080-lp",
    "name": "Landini REX 3-080 LP",
    "brand": "landini",
    "category": "tractors",
    "hp": 80,
    "photoId": "assets/images/Landini Tractors/Landini REX 3-080 LP/Landini_REX_3-080_CAB_LP_Gallery_Image4 (1).jpg",
    "gallery": [
      "assets/images/Landini Tractors/Landini REX 3-080 LP/Landini_REX_3-080_CAB_LP_Gallery_Image4 (1).jpg",
      "assets/images/Landini Tractors/Landini REX 3-080 LP/Landini_REX_3-080_CAB_LP_Gallery_Image5.jpg",
      "assets/images/Landini Tractors/Landini REX 3-080 LP/Landini_REX_3-080_CAB_LP_Gallery_Image6.jpg",
      "assets/images/Landini Tractors/Landini REX 3-080 LP/Landini_REX_3-080_CAB_LP_Gallery_Image7.jpg"
    ],
    "tagline": "Ultra-low profile for the tightest work.",
    "summary": "The Landini REX 3-080 LP is an ultra-low-profile specialist tractor designed for low-clearance orchard, vineyard and tunnel applications.",
    "description": "The Low Profile REX 3-080 sits especially low to work beneath canopies and in tunnels where height is critical. Compact and agile, it delivers dependable specialist performance without compromising on capability.",
    "highlights": [
      "80hp class performance",
      "Ultra-low profile design",
      "Narrow specialist build",
      "Ideal for low-clearance work"
    ],
    "specs": [
      [
        "Engine Power",
        "80 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E"
      ],
      [
        "Cab",
        "Low-profile cab / platform"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Exceptional low clearance",
      "Slim frame for narrow rows",
      "High-flow hydraulics",
      "Agile turning circle"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "landini-rex-4-120gt",
    "name": "Landini REX 4-120GT",
    "brand": "landini",
    "category": "tractors",
    "hp": 120,
    "photoId": "assets/images/Landini Tractors/Landini REX 4-120GT/Landini_REX_4-120GT_CAB_Gallery_Image1.jpg",
    "gallery": [
      "assets/images/Landini Tractors/Landini REX 4-120GT/Landini_REX_4-120GT_CAB_Gallery_Image1.jpg",
      "assets/images/Landini Tractors/Landini REX 4-120GT/Landini_REX_4-120GT_CAB_Gallery_Image3.jpg",
      "assets/images/Landini Tractors/Landini REX 4-120GT/Landini_REX_4-120GT_CAB_Gallery_Image8.jpg",
      "assets/images/Landini Tractors/Landini REX 4-120GT/Landini_REX_4-120GT_CAB_Gallery_Image9.jpg"
    ],
    "tagline": "Green Tech specialist muscle.",
    "summary": "The Landini REX 4-120GT delivers 120hp-class specialist power with the technology and comfort for intensive orchard and vineyard operations.",
    "description": "The GT (Green Tech) version of the REX 4 range brings extra horsepower and refinement to specialty farming. Strong hydraulics, a comfortable cab and a compact profile make it a productive choice for demanding row-crop work.",
    "highlights": [
      "120hp class performance",
      "Specialist narrow profile",
      "High hydraulic capacity",
      "Comfortable cab"
    ],
    "specs": [
      [
        "Engine Power",
        "120 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E"
      ],
      [
        "Cab",
        "Enclosed comfort cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "High-flow hydraulics",
      "Tight turning circle",
      "Comfortable specialist cab",
      "Strong pulling power"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "landini-rex-4-120s",
    "name": "Landini REX 4-120S",
    "brand": "landini",
    "category": "tractors",
    "hp": 120,
    "photoId": "assets/images/Landini Tractors/Landini REX 4-120S/Landini_REX_4-120S_CAB_Gallery_Image2.jpg",
    "gallery": [
      "assets/images/Landini Tractors/Landini REX 4-120S/Landini_REX_4-120S_CAB_Gallery_Image2.jpg",
      "assets/images/Landini Tractors/Landini REX 4-120S/Landini_REX_4-120S_CAB_Gallery_Image4.jpg",
      "assets/images/Landini Tractors/Landini REX 4-120S/Landini_REX_4-120S_CAB_Gallery_Image5.jpg",
      "assets/images/Landini Tractors/Landini REX 4-120S/Landini_REX_4-120S_CAB_Gallery_Image6.jpg",
      "assets/images/Landini Tractors/Landini REX 4-120S/Landini_REX_4-120S_CAB_Gallery_Image7.jpg"
    ],
    "tagline": "Refined 120hp specialist all-rounder.",
    "summary": "The Landini REX 4-120S combines 120hp-class specialist capability with refined comfort for productive orchard, vineyard and mixed work.",
    "description": "The REX 4-120S is a versatile specialist tractor that balances power, comfort and manoeuvrability. Its strong hydraulics and comfortable cab make long days in confined rows efficient and comfortable.",
    "highlights": [
      "120hp class performance",
      "Specialist narrow profile",
      "Strong hydraulics",
      "Refined operator comfort"
    ],
    "specs": [
      [
        "Engine Power",
        "120 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E"
      ],
      [
        "Cab",
        "Enclosed comfort cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "High-flow hydraulics",
      "Agile turning circle",
      "Comfortable specialist cab",
      "Versatile capability"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "landini-super-85",
    "name": "Landini SUPER 85",
    "brand": "landini",
    "category": "tractors",
    "hp": 85,
    "photoId": "assets/images/Landini Tractors/Landini SUPER 85/Landini_SUPER_85_ROPS.jpg",
    "gallery": [
      "assets/images/Landini Tractors/Landini SUPER 85/Landini_SUPER_85_ROPS.jpg",
      "assets/images/Landini Tractors/Landini SUPER 85/Landini_SUPER_100_CAB_Gallery_Image3.jpg",
      "assets/images/Landini Tractors/Landini SUPER 85/Landini_SUPER_85_ROPS 1.jpg",
      "assets/images/Landini Tractors/Landini SUPER 85/Landini_SUPER_85_ROPS 4.jpg",
      "assets/images/Landini Tractors/Landini SUPER 85/Landini_SUPER_85_ROPS 5.jpg"
    ],
    "tagline": "Rugged utility for mixed farms.",
    "summary": "The Landini SUPER 85 is a robust utility tractor built for mixed farming, livestock and everyday property work.",
    "description": "The SUPER series delivers dependable, straightforward capability. The SUPER 85 pairs 85hp-class power with strong hydraulics and an easy-to-operate driveline, available in ROPS form for practical, value-focused work.",
    "highlights": [
      "85hp class performance",
      "Rugged utility build",
      "Strong hydraulics",
      "ROPS configuration"
    ],
    "specs": [
      [
        "Engine Power",
        "85 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Synchro shuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E"
      ],
      [
        "Cab",
        "ROPS (open station)"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Robust, reliable driveline",
      "Loader-ready hydraulics",
      "Easy to operate",
      "Low cost of ownership"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "landini-super-90-hc",
    "name": "Landini SUPER 90 HC",
    "brand": "landini",
    "category": "tractors",
    "hp": 90,
    "photoId": "assets/images/Landini Tractors/Landini SUPER 90 HC/Landini_SUPER_90_ROPS_HC_Gallery_Image1.jpg",
    "gallery": [
      "assets/images/Landini Tractors/Landini SUPER 90 HC/Landini_SUPER_90_ROPS_HC_Gallery_Image1.jpg"
    ],
    "tagline": "High-clearance utility for specialty crops.",
    "summary": "The Landini SUPER 90 HC is a high-clearance utility tractor built to work above row crops and specialty plantings.",
    "description": "The High Clearance SUPER 90 lifts the operator and driveline above tall crops, making it ideal for vegetable, tobacco and specialty row-crop work. Rugged and capable, it delivers 90hp-class performance where standard tractors can't reach.",
    "highlights": [
      "90hp class performance",
      "High-clearance design",
      "Rugged utility build",
      "Ideal for row crops"
    ],
    "specs": [
      [
        "Engine Power",
        "90 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Synchro shuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E"
      ],
      [
        "Cab",
        "ROPS high-clearance"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Elevated crop clearance",
      "Strong hydraulics",
      "Robust driveline",
      "Purpose-built for specialty crops"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "landini-super-100",
    "name": "Landini SUPER 100",
    "brand": "landini",
    "category": "tractors",
    "hp": 100,
    "photoId": "assets/images/Landini Tractors/Landini SUPER 100/Landini_SUPER_100_CAB_Gallery_Image1.jpg",
    "gallery": [
      "assets/images/Landini Tractors/Landini SUPER 100/Landini_SUPER_100_CAB_Gallery_Image1.jpg",
      "assets/images/Landini Tractors/Landini SUPER 100/Landini_SUPER_100_CAB_Gallery_Image3.jpg",
      "assets/images/Landini Tractors/Landini SUPER 100/Landini_SUPER_100_CAB_Gallery_Image4.jpg",
      "assets/images/Landini Tractors/Landini SUPER 100/Landini_SUPER_100_CAB_Gallery_Image5.jpg"
    ],
    "tagline": "100hp utility with cab comfort.",
    "summary": "The Landini SUPER 100 delivers 100hp-class utility performance with an enclosed cab for comfortable, all-day productivity.",
    "description": "The cab-equipped SUPER 100 brings comfort and capability to working farms. Strong hydraulics, a robust driveline and a quiet cab make it a dependable all-rounder for mixed farming and contracting.",
    "highlights": [
      "100hp class performance",
      "Enclosed comfort cab",
      "Strong hydraulics",
      "Robust utility build"
    ],
    "specs": [
      [
        "Engine Power",
        "100 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E"
      ],
      [
        "Cab",
        "Enclosed comfort cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Comfortable enclosed cab",
      "High-capacity hydraulics",
      "Loader & implement ready",
      "Reliable, serviceable driveline"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "landini-super-110-hc",
    "name": "Landini SUPER 110 HC",
    "brand": "landini",
    "category": "tractors",
    "hp": 110,
    "photoId": "assets/images/Landini Tractors/Landini SUPER 110 HC/Landini_SUPER_110_CAB_HC_Gallery_Image1.jpg",
    "gallery": [
      "assets/images/Landini Tractors/Landini SUPER 110 HC/Landini_SUPER_110_CAB_HC_Gallery_Image1.jpg",
      "assets/images/Landini Tractors/Landini SUPER 110 HC/Landini_SUPER_110_CAB_HC_Gallery_Image2.jpg",
      "assets/images/Landini Tractors/Landini SUPER 110 HC/Landini_SUPER_110_CAB_HC_Gallery_Image4.jpg",
      "assets/images/Landini Tractors/Landini SUPER 110 HC/Landini_SUPER_110_CAB_HC_Gallery_Image7.jpg",
      "assets/images/Landini Tractors/Landini SUPER 110 HC/Landini_SUPER_110_CAB_HC_Gallery_Image9.jpg"
    ],
    "tagline": "High-clearance power with premium comfort.",
    "summary": "The Landini SUPER 110 HC combines 110hp-class high-clearance capability with an enclosed cab for demanding specialty row-crop operations.",
    "description": "The flagship of the SUPER HC range, the 110 HC lifts serious horsepower above tall crops while keeping the operator in comfort. Ideal for intensive vegetable and specialty row-crop work that demands both reach and power.",
    "highlights": [
      "110hp class performance",
      "High-clearance design",
      "Enclosed comfort cab",
      "Strong hydraulics"
    ],
    "specs": [
      [
        "Engine Power",
        "110 hp class"
      ],
      [
        "Drivetrain",
        "4WD"
      ],
      [
        "Transmission",
        "Powershuttle"
      ],
      [
        "PTO",
        "Rear PTO, 540/540E"
      ],
      [
        "Cab",
        "Enclosed high-clearance cab"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Elevated crop clearance",
      "Comfortable enclosed cab",
      "High-capacity hydraulics",
      "Purpose-built for row crops"
    ],
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "enorossi-disc-mower",
    "name": "Enorossi Disc Mower",
    "brand": "enorossi",
    "category": "hay-equipment",
    "photoId": "assets/images/Enorossi Hay Equipment/Hay Mowers/Disc Mower.jpg",
    "tagline": "Clean, fast cutting from a world hay leader.",
    "summary": "Italian-built disc mower delivering clean, fast, low-maintenance cutting for efficient first-pass hay harvest.",
    "description": "Enorossi's disc mowers are engineered for clean cutting, high ground speed and minimal maintenance. A dependable first step in the hay chain from a recognised worldwide leader in forage equipment.",
    "highlights": [
      "Fast, clean cutting action",
      "Low-maintenance disc design",
      "Robust Italian build",
      "Compact-tractor compatible"
    ],
    "specs": [
      [
        "Type",
        "Disc mower"
      ],
      [
        "Working Width",
        "1.6 – 2.8 m"
      ],
      [
        "Min. PTO Power",
        "35+ hp"
      ],
      [
        "Linkage",
        "3-point hitch"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Breakaway protection",
      "Quick blade replacement",
      "Even, clean cut height",
      "Minimal moving parts"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "enorossi-disc-mower-conditioner",
    "name": "Enorossi Disc Mower Conditioner",
    "brand": "enorossi",
    "category": "hay-equipment",
    "photoId": "assets/images/Enorossi Hay Equipment/Hay Mowers/Disc Mower with Conditioner.jpg",
    "tagline": "Cut and condition in a single pass.",
    "summary": "Disc mower with integrated conditioner that crimps the crop as it cuts, accelerating dry-down for faster baling.",
    "description": "Combining a proven disc cutterbar with a conditioning system, this Enorossi mower conditions the crop the moment it's cut — speeding dry-down and improving forage quality in a single, efficient pass.",
    "highlights": [
      "Cut and condition in one pass",
      "Faster crop dry-down",
      "Improved forage quality",
      "Robust Italian build"
    ],
    "specs": [
      [
        "Type",
        "Mower conditioner"
      ],
      [
        "Working Width",
        "2.4 – 3.2 m"
      ],
      [
        "Min. PTO Power",
        "55+ hp"
      ],
      [
        "Linkage",
        "3-point hitch"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Integrated crop conditioner",
      "Adjustable conditioning intensity",
      "Even, clean cut",
      "Breakaway protection"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "enorossi-front-disc-mower",
    "name": "Enorossi Front Disc Mower",
    "brand": "enorossi",
    "category": "hay-equipment",
    "photoId": "assets/images/Enorossi Hay Equipment/Hay Mowers/Front Disc Mower.jpg",
    "tagline": "Front-mounted cutting for butterfly setups.",
    "summary": "Front-mounted disc mower designed to pair with rear units for high-output butterfly mowing combinations.",
    "description": "Mounted on the front linkage, this Enorossi disc mower boosts output and coverage — ideal as part of a front-and-rear butterfly combination for large-area, high-productivity mowing.",
    "highlights": [
      "Front-linkage mounted",
      "Butterfly-combo ready",
      "High-output coverage",
      "Clean, even cut"
    ],
    "specs": [
      [
        "Type",
        "Front disc mower"
      ],
      [
        "Working Width",
        "2.8 – 3.2 m"
      ],
      [
        "Min. PTO Power",
        "60+ hp"
      ],
      [
        "Linkage",
        "3-point hitch"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Front-mount configuration",
      "Pairs with rear mowers",
      "Ground-following cutterbar",
      "Breakaway protection"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "enorossi-sickle-bar-mower",
    "name": "Enorossi Sickle Bar Mower",
    "brand": "enorossi",
    "category": "hay-equipment",
    "photoId": "assets/images/Enorossi Hay Equipment/Hay Mowers/Sickle Bar Mower (Three-Point Linkage).jpg",
    "tagline": "Simple, economical finger-bar cutting.",
    "summary": "Three-point-linkage sickle bar mower offering a simple, economical and gentle cut for small farms and hobby operations.",
    "description": "The classic finger-bar design delivers a clean, gentle cut at low power and cost. Ideal for smaller properties, uneven ground and operators who value simplicity and easy maintenance.",
    "highlights": [
      "Economical, simple design",
      "Gentle, clean cut",
      "Low power requirement",
      "Easy to maintain"
    ],
    "specs": [
      [
        "Type",
        "Sickle bar mower"
      ],
      [
        "Working Width",
        "1.5 – 2.1 m"
      ],
      [
        "Min. PTO Power",
        "20+ hp"
      ],
      [
        "Linkage",
        "3-point hitch"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Three-point linkage mount",
      "Low horsepower operation",
      "Simple, serviceable design",
      "Breakaway safety"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "enorossi-rr-320-rake",
    "name": "Enorossi Single Rotor Rake RR 320",
    "brand": "enorossi",
    "category": "hay-equipment",
    "photoId": "assets/images/Enorossi Hay Equipment/Rotary Rakes/Single rotor rakes RR 320-350.jpg",
    "tagline": "Consistent, fluffy windrows every pass.",
    "summary": "Single-rotor rake producing clean, consistent windrows for faster drying and efficient baling.",
    "description": "Form clean, well-shaped windrows for faster drying and smoother baling with Enorossi's single-rotor RR rake. Gentle tine action protects leaf quality and keeps your hay clean.",
    "highlights": [
      "Consistent windrow formation",
      "Gentle on leaf quality",
      "Adjustable working width",
      "Durable tine arms"
    ],
    "specs": [
      [
        "Type",
        "Single rotor rake"
      ],
      [
        "Working Width",
        "3.2 – 3.5 m"
      ],
      [
        "Min. PTO Power",
        "30+ hp"
      ],
      [
        "Linkage",
        "3-point hitch"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Cam-track tine control",
      "Height-adjustable raking",
      "Transport-friendly design",
      "Low-maintenance gearbox"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "enorossi-enoduo-780-rake",
    "name": "Enorossi Double Rotor Rake ENODUO 780",
    "brand": "enorossi",
    "category": "hay-equipment",
    "photoId": "assets/images/Enorossi Hay Equipment/Rotary Rakes/Double rotary rakes ENODUO 780.jpg",
    "tagline": "High-output centre-delivery raking.",
    "summary": "Twin-rotor centre-delivery rake covering wide working widths for high-output windrow formation.",
    "description": "The ENODUO 780 twin-rotor rake delivers exceptional output, forming a clean central windrow across a wide working width. Ideal for larger operations and contractors chasing productivity without sacrificing hay quality.",
    "highlights": [
      "Twin-rotor high output",
      "Wide working width",
      "Clean central windrow",
      "Gentle leaf handling"
    ],
    "specs": [
      [
        "Type",
        "Double rotary rake"
      ],
      [
        "Working Width",
        "up to 7.8 m"
      ],
      [
        "Min. PTO Power",
        "70+ hp"
      ],
      [
        "Linkage",
        "3-point hitch"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Centre-delivery windrowing",
      "Individual rotor height control",
      "Transport-friendly fold",
      "Robust cam-track design"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "enorossi-vortex-g4-tedder",
    "name": "Enorossi Tedder VORTEX G4",
    "brand": "enorossi",
    "category": "hay-equipment",
    "photoId": "assets/images/Enorossi Hay Equipment/Hay Tedders/Tedders VORTEX G4.jpg",
    "tagline": "Fast, even tedding for faster dry-down.",
    "summary": "Four-rotor tedder spreading and aerating the crop evenly to accelerate drying across the paddock.",
    "description": "The VORTEX G4 tedder lifts and spreads cut forage evenly, exposing it to air and sun for faster, more uniform drying. Robust build and adjustable spread angle deliver excellent results across varied conditions.",
    "highlights": [
      "Even crop spreading",
      "Faster, uniform drying",
      "Adjustable spread angle",
      "Robust four-rotor design"
    ],
    "specs": [
      [
        "Type",
        "Rotary tedder"
      ],
      [
        "Working Width",
        "4 rotor / ~5.2 m"
      ],
      [
        "Min. PTO Power",
        "40+ hp"
      ],
      [
        "Linkage",
        "3-point hitch"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Adjustable spreading angle",
      "Ground-following rotors",
      "Durable tine arms",
      "Transport-friendly fold"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "enorossi-rb-120-baler",
    "name": "Enorossi Round Baler RB 120",
    "brand": "enorossi",
    "category": "hay-equipment",
    "photoId": "assets/images/Enorossi Hay Equipment/Balers/Round balers fixed chamber RB 120.jpg",
    "tagline": "Dense, well-shaped bales with reliable pickup.",
    "summary": "Fixed-chamber round baler producing dense, well-shaped 1.2m bales with a smooth, wide pickup.",
    "description": "The RB 120 combines a wide pickup with a proven fixed-chamber design to produce dense, weather-resistant round bales. Built to handle a long season with minimal downtime and reliable net or twine wrapping.",
    "highlights": [
      "Wide, clean pickup",
      "Dense uniform bales",
      "Net & twine wrap",
      "Season-long durability"
    ],
    "specs": [
      [
        "Type",
        "Fixed-chamber round baler"
      ],
      [
        "Working Width",
        "1.2 m bale"
      ],
      [
        "Min. PTO Power",
        "55+ hp"
      ],
      [
        "Linkage",
        "3-point hitch"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Heavy-duty pickup tines",
      "Reliable wrap system",
      "In-cab monitor ready",
      "Hardened chamber rollers"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "enorossi-enopack-baler",
    "name": "Enorossi Square Baler ENOPACK",
    "brand": "enorossi",
    "category": "hay-equipment",
    "photoId": "assets/images/Enorossi Hay Equipment/Balers/Small square balers ENOPACK 800-900.jpg",
    "tagline": "Classic small squares, dependably tied.",
    "summary": "Small square baler producing consistent, well-tied conventional bales ideal for horse hay and retail markets.",
    "description": "The ENOPACK small square baler forms neat, consistent bales perfect for the hobby, equine and retail hay markets. A reliable knotter and proven pickup keep it working smoothly through the season.",
    "highlights": [
      "Consistent small squares",
      "Reliable knotter system",
      "Ideal for horse & retail hay",
      "Proven pickup"
    ],
    "specs": [
      [
        "Type",
        "Small square baler"
      ],
      [
        "Working Width",
        "Conventional bale"
      ],
      [
        "Min. PTO Power",
        "40+ hp"
      ],
      [
        "Linkage",
        "3-point hitch"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Dependable twine knotter",
      "Adjustable bale length",
      "Smooth crop pickup",
      "Robust flywheel drive"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "enorossi-bw-150-wrapper",
    "name": "Enorossi Bale Wrapper BW 150 EVO",
    "brand": "enorossi",
    "category": "hay-equipment",
    "photoId": "assets/images/Enorossi Hay Equipment/Bale wrappers/Mounted bale wrappers BW 150 EVO.jpg",
    "tagline": "Airtight silage wrapping, every bale.",
    "summary": "Mounted round-bale wrapper delivering airtight, high-quality silage wrapping for superior forage preservation.",
    "description": "Lock in feed quality with the BW 150 EVO — fast, consistent film application for airtight silage every time. Designed for smooth operation, minimal film waste and gentle bale handling.",
    "highlights": [
      "Airtight silage wrap",
      "Fast cycle times",
      "Low film waste",
      "Gentle bale handling"
    ],
    "specs": [
      [
        "Type",
        "Mounted bale wrapper"
      ],
      [
        "Working Width",
        "up to 1.2 m bale"
      ],
      [
        "Min. PTO Power",
        "40+ hp"
      ],
      [
        "Linkage",
        "3-point hitch"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Consistent film overlap",
      "Smooth wrap cycle",
      "Gentle tip-off discharge",
      "Robust, reliable build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "enorossi-cr-850-rake",
    "name": "Enorossi Basket Bar Rake CR 850",
    "brand": "enorossi",
    "category": "hay-equipment",
    "photoId": "assets/images/Enorossi Hay Equipment/Wheel rakes -Basket Bar Rakes/Basket bar rake CR 850.jpg",
    "tagline": "Simple, gentle, high-speed raking.",
    "summary": "Basket bar rake offering simple, gentle, high-capacity raking that protects leaf quality at speed.",
    "description": "The CR 850 basket rake uses ground-driven reels to gently gather the crop into clean windrows at pace. Low maintenance and gentle on the forage, it's a productive, cost-effective raking solution.",
    "highlights": [
      "Gentle, high-speed raking",
      "Protects leaf quality",
      "Low maintenance",
      "Wide working width"
    ],
    "specs": [
      [
        "Type",
        "Basket / bar rake"
      ],
      [
        "Working Width",
        "up to 8.5 m"
      ],
      [
        "Min. PTO Power",
        "40+ hp"
      ],
      [
        "Linkage",
        "3-point hitch"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Ground-driven reels",
      "Adjustable windrow width",
      "Simple, robust design",
      "Transport-friendly fold"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "grasshopper-124v",
    "name": "Grasshopper 124V",
    "brand": "grasshopper",
    "category": "utility",
    "hp": 22,
    "availability": "in-stock",
    "featured": false,
    "photoId": "assets/images/Grasshopper Zero-Turn Mowers/Grasshopper 124V.jpg",
    "tagline": "Nimble mid-mount, professional cut.",
    "summary": "The Grasshopper 124V is an agile gas-powered mid-mount zero-turn delivering professional cut quality for acreage and grounds.",
    "description": "The 124V pairs a responsive gas V-twin with Grasshopper's precision twin-lever control and a premium mid-mount deck. Manoeuvrable and comfortable, it makes quick, clean work of trimming and open mowing alike.",
    "highlights": [
      "Gas V-twin power",
      "Mid-mount deck",
      "Professional cut quality",
      "Agile zero-turn control"
    ],
    "specs": [
      [
        "Engine",
        "Gas V-twin, ~22 hp"
      ],
      [
        "Deck",
        "Mid / rear-mount options"
      ],
      [
        "Drive",
        "Dual hydrostatic"
      ],
      [
        "Steering",
        "Zero-turn twin lever"
      ],
      [
        "Origin",
        "USA"
      ],
      [
        "Use",
        "Acreage / grounds"
      ]
    ],
    "features": [
      "DuraMax cutting deck",
      "Comfortable operator seat",
      "Easy-service design",
      "Tight zero-turn manoeuvrability"
    ],
    "priceFrom": null,
    "condition": "new"
  },
  {
    "slug": "grasshopper-125v",
    "name": "Grasshopper 125V",
    "brand": "grasshopper",
    "category": "utility",
    "hp": 22,
    "availability": "in-stock",
    "featured": false,
    "photoId": "assets/images/Grasshopper Zero-Turn Mowers/Grasshopper 125V.jpg",
    "tagline": "Reliable gas performance, clean results.",
    "summary": "The Grasshopper 125V delivers dependable gas-powered mid-mount mowing with the cut quality Grasshopper is known for.",
    "description": "A versatile gas zero-turn, the 125V combines responsive power with a premium deck and precise control for consistently clean results across lawns and acreage.",
    "highlights": [
      "Gas V-twin power",
      "Mid-mount deck",
      "Consistent cut quality",
      "Comfortable all-day operation"
    ],
    "specs": [
      [
        "Engine",
        "Gas V-twin, ~22 hp"
      ],
      [
        "Deck",
        "Mid / rear-mount options"
      ],
      [
        "Drive",
        "Dual hydrostatic"
      ],
      [
        "Steering",
        "Zero-turn twin lever"
      ],
      [
        "Origin",
        "USA"
      ],
      [
        "Use",
        "Acreage / grounds"
      ]
    ],
    "features": [
      "DuraMax cutting deck",
      "Suspension operator seat",
      "Easy-service design",
      "Precise twin-lever steering"
    ],
    "priceFrom": null,
    "condition": "new"
  },
  {
    "slug": "grasshopper-127v",
    "name": "Grasshopper 127V",
    "brand": "grasshopper",
    "category": "utility",
    "hp": 24,
    "availability": "in-stock",
    "featured": false,
    "photoId": "assets/images/Grasshopper Zero-Turn Mowers/Grasshopper 127V.jpg",
    "tagline": "Extra power for bigger jobs.",
    "summary": "The Grasshopper 127V steps up gas power for larger properties needing more capacity without losing manoeuvrability.",
    "description": "With extra horsepower on tap, the 127V handles bigger areas and taller grass with ease while retaining the precise control and premium cut quality of the Grasshopper mid-mount range.",
    "highlights": [
      "Higher-output gas V-twin",
      "Mid-mount deck",
      "Larger-area capacity",
      "Precise zero-turn control"
    ],
    "specs": [
      [
        "Engine",
        "Gas V-twin, ~24 hp"
      ],
      [
        "Deck",
        "Mid / rear-mount options"
      ],
      [
        "Drive",
        "Dual hydrostatic"
      ],
      [
        "Steering",
        "Zero-turn twin lever"
      ],
      [
        "Origin",
        "USA"
      ],
      [
        "Use",
        "Larger acreage"
      ]
    ],
    "features": [
      "DuraMax cutting deck",
      "Suspension operator seat",
      "Easy-service design",
      "Optional grass collection"
    ],
    "priceFrom": null,
    "condition": "new"
  },
  {
    "slug": "grasshopper-226v",
    "name": "Grasshopper 226V",
    "brand": "grasshopper",
    "category": "utility",
    "hp": 22,
    "availability": "in-stock",
    "featured": false,
    "photoId": "assets/images/Grasshopper Zero-Turn Mowers/Grasshopper 226V.jpg",
    "tagline": "Balanced power and manoeuvrability.",
    "summary": "The Grasshopper 226V is a well-balanced gas zero-turn built for productive, comfortable mowing across mixed grounds.",
    "description": "The 226V blends responsive gas power with a durable deck and precise control, making it a productive, comfortable choice for property owners and grounds crews alike.",
    "highlights": [
      "Gas V-twin power",
      "Durable cutting deck",
      "Balanced performance",
      "Comfortable operation"
    ],
    "specs": [
      [
        "Engine",
        "Gas V-twin, ~22 hp"
      ],
      [
        "Deck",
        "Mid / rear-mount options"
      ],
      [
        "Drive",
        "Dual hydrostatic"
      ],
      [
        "Steering",
        "Zero-turn twin lever"
      ],
      [
        "Origin",
        "USA"
      ],
      [
        "Use",
        "Acreage / grounds"
      ]
    ],
    "features": [
      "DuraMax cutting deck",
      "Suspension operator seat",
      "Easy-service design",
      "Tight zero-turn manoeuvrability"
    ],
    "priceFrom": null,
    "condition": "new"
  },
  {
    "slug": "grasshopper-325d",
    "name": "Grasshopper 325D",
    "brand": "grasshopper",
    "category": "utility",
    "hp": 25,
    "availability": "in-stock",
    "featured": false,
    "photoId": "assets/images/Grasshopper Zero-Turn Mowers/Grasshopper 325D.jpg",
    "tagline": "Diesel efficiency, professional finish.",
    "summary": "The Grasshopper 325D brings fuel-efficient diesel power to the mid-range zero-turn line for productive, economical mowing.",
    "description": "The 325D pairs an economical diesel engine with Grasshopper's precision control and premium deck. Efficient and durable, it's an excellent choice for owners who mow large areas regularly.",
    "highlights": [
      "Efficient diesel power",
      "Professional cut quality",
      "Durable commercial deck",
      "Precise zero-turn control"
    ],
    "specs": [
      [
        "Engine",
        "Diesel, ~25 hp"
      ],
      [
        "Deck",
        "Mid / rear-mount options"
      ],
      [
        "Drive",
        "Dual hydrostatic"
      ],
      [
        "Steering",
        "Zero-turn twin lever"
      ],
      [
        "Origin",
        "USA"
      ],
      [
        "Use",
        "Large acreage"
      ]
    ],
    "features": [
      "DuraMax cutting deck",
      "Suspension operator seat",
      "Fuel-efficient diesel",
      "Easy-service design"
    ],
    "priceFrom": null,
    "condition": "new"
  },
  {
    "slug": "grasshopper-400d",
    "name": "Grasshopper 400D",
    "brand": "grasshopper",
    "category": "utility",
    "hp": 25,
    "availability": "in-stock",
    "featured": false,
    "photoId": "assets/images/Grasshopper Zero-Turn Mowers/Grasshopper 400D.jpg",
    "tagline": "The original zero-turn, professional cut.",
    "summary": "Diesel zero-turn mower delivering professional cut quality, manoeuvrability and all-day operator comfort.",
    "description": "Grasshopper invented the zero-turn — and the 400D shows why it's still the benchmark. A durable diesel powerplant, precise twin-lever control and a premium cutting deck make light work of acreage and commercial grounds.",
    "highlights": [
      "Diesel zero-turn power",
      "Professional cut quality",
      "All-day operator comfort",
      "Tight zero-turn manoeuvrability"
    ],
    "specs": [
      [
        "Engine",
        "Diesel, ~25 hp"
      ],
      [
        "Deck",
        "Mid / rear-mount options"
      ],
      [
        "Drive",
        "Dual hydrostatic"
      ],
      [
        "Steering",
        "Zero-turn twin lever"
      ],
      [
        "Origin",
        "USA"
      ],
      [
        "Deck",
        "61\" / 72\" options"
      ]
    ],
    "features": [
      "DuraMax cutting deck",
      "Suspension operator seat",
      "Easy-service design",
      "Optional grass collection"
    ],
    "priceFrom": null,
    "condition": "new"
  },
  {
    "slug": "grasshopper-623t",
    "name": "Grasshopper 623T",
    "brand": "grasshopper",
    "category": "utility",
    "hp": 23,
    "availability": "in-stock",
    "featured": false,
    "photoId": "assets/images/Grasshopper Zero-Turn Mowers/Grasshopper 623T.jpg",
    "tagline": "Compact commercial-grade performer.",
    "summary": "The Grasshopper 623T is a compact, manoeuvrable zero-turn built for productive commercial and large-property mowing.",
    "description": "The 623T delivers commercial-grade cut quality in a compact, agile package. Responsive power and precise control make it ideal for grounds with tight obstacles and detailed trimming.",
    "highlights": [
      "Commercial-grade cut",
      "Compact & manoeuvrable",
      "Responsive power",
      "Precise zero-turn control"
    ],
    "specs": [
      [
        "Engine",
        "Gas, ~23 hp"
      ],
      [
        "Deck",
        "Mid / rear-mount options"
      ],
      [
        "Drive",
        "Dual hydrostatic"
      ],
      [
        "Steering",
        "Zero-turn twin lever"
      ],
      [
        "Origin",
        "USA"
      ],
      [
        "Use",
        "Commercial / grounds"
      ]
    ],
    "features": [
      "DuraMax cutting deck",
      "Suspension operator seat",
      "Easy-service design",
      "Tight zero-turn manoeuvrability"
    ],
    "priceFrom": null,
    "condition": "new"
  },
  {
    "slug": "grasshopper-900d",
    "name": "Grasshopper 900D",
    "brand": "grasshopper",
    "category": "utility",
    "hp": 35,
    "availability": "arriving",
    "featured": false,
    "photoId": "assets/images/Grasshopper Zero-Turn Mowers/Grasshopper 900D.jpg",
    "tagline": "Commercial-grade output, all day long.",
    "summary": "High-output diesel mid-mount zero-turn built for large acreage and commercial mowing contracts.",
    "description": "For large properties and commercial contracts, the Grasshopper 900D pairs serious diesel output with a wide deck and rugged build for productive, comfortable, all-day mowing.",
    "highlights": [
      "High-output diesel",
      "Wide commercial deck",
      "Built for big acreage",
      "Rugged commercial build"
    ],
    "specs": [
      [
        "Engine",
        "Diesel, ~35 hp"
      ],
      [
        "Deck",
        "Mid / rear-mount options"
      ],
      [
        "Drive",
        "Dual hydrostatic"
      ],
      [
        "Steering",
        "Zero-turn twin lever"
      ],
      [
        "Origin",
        "USA"
      ],
      [
        "Deck",
        "72\" mid-mount"
      ]
    ],
    "features": [
      "Heavy-duty deck spindles",
      "High-back suspension seat",
      "Quick-tilt deck service",
      "Optional cab & attachments"
    ],
    "priceFrom": null,
    "condition": "new"
  },
  {
    "slug": "grasshopper-so26",
    "name": "Grasshopper SO26 Stand-On",
    "brand": "grasshopper",
    "category": "utility",
    "hp": 26,
    "availability": "in-stock",
    "featured": false,
    "photoId": "assets/images/Grasshopper Zero-Turn Mowers/Grasshopper SO26.jpg",
    "tagline": "Stand-on agility for tight, busy sites.",
    "summary": "The Grasshopper SO26 is a stand-on zero-turn offering exceptional agility and quick on-off convenience for busy commercial crews.",
    "description": "The stand-on SO26 delivers a compact footprint, superb visibility and fast on-off operation — ideal for commercial crews working sites with lots of gates, obstacles and trailer transitions.",
    "highlights": [
      "Stand-on platform",
      "Exceptional agility",
      "Quick on-off operation",
      "Compact footprint"
    ],
    "specs": [
      [
        "Engine",
        "Gas, ~26 hp"
      ],
      [
        "Deck",
        "Mid / rear-mount options"
      ],
      [
        "Drive",
        "Dual hydrostatic"
      ],
      [
        "Steering",
        "Zero-turn twin lever"
      ],
      [
        "Origin",
        "USA"
      ],
      [
        "Platform",
        "Stand-on"
      ]
    ],
    "features": [
      "Compact, agile design",
      "Excellent operator visibility",
      "Durable commercial deck",
      "Fast site-to-site transitions"
    ],
    "priceFrom": null,
    "condition": "new"
  },
  {
    "slug": "orsi-eagle-plus",
    "name": "Orsi Eagle Plus Mulcher",
    "brand": "orsi",
    "category": "mulchers",
    "photoId": "assets/images/Orsi Mulchers/Orsi EAGLE PLUS Mulcher.jpg",
    "tagline": "Versatile verge and vegetation control.",
    "summary": "The Orsi Eagle Plus is a versatile side-shift flail mulcher for verge, roadside and general vegetation management.",
    "description": "Italian-built for reliable verge and vegetation work, the Eagle Plus combines hydraulic side-shift reach with a robust flail rotor to tackle grass, brush and light scrub cleanly and efficiently.",
    "highlights": [
      "Hydraulic side-shift reach",
      "Robust flail rotor",
      "Versatile vegetation control",
      "Heavy-duty Italian build"
    ],
    "specs": [
      [
        "Type",
        "Side-shift flail mulcher"
      ],
      [
        "Mounting",
        "3-point / side-shift options"
      ],
      [
        "Rotor",
        "Hammer / Y-blade flails"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Hydraulic side-shift frame",
      "Interchangeable flail options",
      "Reinforced rotor housing",
      "Adjustable working height"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "orsi-flail-d",
    "name": "Orsi Flail-D Inter-Row Disc",
    "brand": "orsi",
    "category": "mulchers",
    "photoId": "assets/images/Orsi Mulchers/Orsi FLAIL-D Inter-Row Disc.jpg",
    "tagline": "Precision mulching between the rows.",
    "summary": "The Orsi Flail-D inter-row mulcher features a sensing disc to mulch cleanly between vines and trees while protecting trunks.",
    "description": "Purpose-built for orchards and vineyards, the Flail-D uses a feeler-controlled retracting head to mulch right up to the trunk line without damaging plants — keeping inter-row and under-vine areas clean.",
    "highlights": [
      "Inter-row / under-vine mulching",
      "Feeler-controlled retracting head",
      "Protects trunks & vines",
      "Precise, clean finish"
    ],
    "specs": [
      [
        "Type",
        "Inter-row flail mulcher"
      ],
      [
        "Mounting",
        "3-point / side-shift options"
      ],
      [
        "Rotor",
        "Hammer / Y-blade flails"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Automatic sensing disc",
      "Retracting mulching head",
      "Adjustable working depth",
      "Robust orchard-grade build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "orsi-hulk-forrest-ftl",
    "name": "Orsi Hulk Forrest FTL Mulcher",
    "brand": "orsi",
    "category": "mulchers",
    "photoId": "assets/images/Orsi Mulchers/Orsi HULK FORREST FTL Forestry Mulcher.jpg",
    "tagline": "Heavy forestry mulching muscle.",
    "summary": "The Orsi Hulk Forrest FTL is a heavy-duty forestry mulcher built to clear scrub, saplings and standing timber.",
    "description": "Engineered for the toughest land-clearing work, the Hulk Forrest FTL features a reinforced rotor and housing to mulch heavy scrub and small trees, turning overgrown land into clean, workable ground.",
    "highlights": [
      "Heavy forestry capability",
      "Reinforced rotor & housing",
      "Clears scrub & saplings",
      "Extreme-duty build"
    ],
    "specs": [
      [
        "Type",
        "Forestry mulcher"
      ],
      [
        "Mounting",
        "3-point / side-shift options"
      ],
      [
        "Rotor",
        "Hammer / Y-blade flails"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Forestry-grade rotor",
      "Hardened cutting tools",
      "Reinforced skid frame",
      "High-flow hydraulic drive option"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "orsi-king-extra",
    "name": "Orsi King Extra Mulcher",
    "brand": "orsi",
    "category": "mulchers",
    "photoId": "assets/images/Orsi Mulchers/Orsi KING EXTRA Mulcher.jpg",
    "tagline": "Premium heavy-duty mulching.",
    "summary": "The Orsi King Extra is a premium heavy-duty flail mulcher for demanding grass, brush and crop-residue work.",
    "description": "The King Extra pairs a heavy flail rotor with a robust, well-finished chassis for reliable performance in tough conditions. A premium choice for contractors and larger properties.",
    "highlights": [
      "Heavy-duty flail rotor",
      "Premium robust chassis",
      "Handles grass to brush",
      "Reliable, low-maintenance"
    ],
    "specs": [
      [
        "Type",
        "Heavy-duty flail mulcher"
      ],
      [
        "Mounting",
        "3-point / side-shift options"
      ],
      [
        "Rotor",
        "Hammer / Y-blade flails"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Heavy flail rotor",
      "Reinforced housing",
      "Adjustable rear roller",
      "Interchangeable flail tools"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "orsi-magnum-plus-gs",
    "name": "Orsi Magnum Plus GS Side Mulcher",
    "brand": "orsi",
    "category": "mulchers",
    "photoId": "assets/images/Orsi Mulchers/Orsi MAGNUM PLUS GS Side Mulcher.jpg",
    "tagline": "Reach mulching for banks and verges.",
    "summary": "The Orsi Magnum Plus GS is a side-arm reach mulcher for banks, ditches, verges and hard-to-reach vegetation.",
    "description": "With an articulated side arm, the Magnum Plus GS extends the mulching head out and over banks, ditches and verges — ideal for roadside and boundary vegetation management that a standard mulcher can't reach.",
    "highlights": [
      "Articulated reach arm",
      "Mulches banks & ditches",
      "Roadside / verge control",
      "Robust hydraulic system"
    ],
    "specs": [
      [
        "Type",
        "Side-arm flail mulcher"
      ],
      [
        "Mounting",
        "3-point / side-shift options"
      ],
      [
        "Rotor",
        "Hammer / Y-blade flails"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Multi-position reach arm",
      "Float & follow control",
      "Robust flail head",
      "Safety break-back protection"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "orsi-muscle",
    "name": "Orsi Muscle Mulcher",
    "brand": "orsi",
    "category": "mulchers",
    "photoId": "assets/images/Orsi Mulchers/Orsi MUSCLE Mulcher.jpg",
    "tagline": "Serious muscle for tough vegetation.",
    "summary": "The Orsi Muscle is a robust flail mulcher built for heavy grass, brush and residue in demanding conditions.",
    "description": "Living up to its name, the Muscle mulcher delivers heavy-duty flail performance for tough vegetation. Reinforced construction keeps it working reliably where lighter machines struggle.",
    "highlights": [
      "Heavy flail performance",
      "Reinforced construction",
      "Tough vegetation capable",
      "Reliable in demanding work"
    ],
    "specs": [
      [
        "Type",
        "Heavy flail mulcher"
      ],
      [
        "Mounting",
        "3-point / side-shift options"
      ],
      [
        "Rotor",
        "Hammer / Y-blade flails"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Heavy-duty rotor",
      "Reinforced body",
      "Adjustable rear roller",
      "Interchangeable flails"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "orsi-pro",
    "name": "Orsi Pro Mulcher",
    "brand": "orsi",
    "category": "mulchers",
    "photoId": "assets/images/Orsi Mulchers/Orsi PRO Mulcher.jpg",
    "tagline": "Contractor-grade all-rounder.",
    "summary": "The Orsi Pro is a professional-grade flail mulcher balancing capability, finish quality and durability for everyday contracting.",
    "description": "A versatile workhorse, the Pro mulcher delivers a clean finish across grass, pasture-topping and light brush. Well-built and dependable, it's an ideal all-rounder for contractors and larger properties.",
    "highlights": [
      "Professional-grade build",
      "Clean, consistent finish",
      "Versatile across tasks",
      "Durable and dependable"
    ],
    "specs": [
      [
        "Type",
        "Professional flail mulcher"
      ],
      [
        "Mounting",
        "3-point / side-shift options"
      ],
      [
        "Rotor",
        "Hammer / Y-blade flails"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Balanced flail rotor",
      "Adjustable working height",
      "Rear roller finish control",
      "Serviceable drive system"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "orsi-ss-forrest",
    "name": "Orsi SS-Forrest Forestry Mulcher",
    "brand": "orsi",
    "category": "mulchers",
    "photoId": "assets/images/Orsi Mulchers/Orsi SS-FORREST Forestry Mulcher.jpg",
    "tagline": "Compact forestry clearing power.",
    "summary": "The Orsi SS-Forrest is a forestry mulcher built to clear scrub, saplings and heavy undergrowth on smaller tractors.",
    "description": "The SS-Forrest brings forestry mulching capability to mid-size tractors. A reinforced rotor and protective housing let it clear scrub and small trees, restoring overgrown land efficiently.",
    "highlights": [
      "Forestry mulching capability",
      "Reinforced rotor & housing",
      "Clears scrub & undergrowth",
      "Mid-tractor compatible"
    ],
    "specs": [
      [
        "Type",
        "Forestry mulcher"
      ],
      [
        "Mounting",
        "3-point / side-shift options"
      ],
      [
        "Rotor",
        "Hammer / Y-blade flails"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Forestry-grade tools",
      "Protective front & rear guards",
      "Reinforced skids",
      "Hydraulic drive option"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "orsi-wpr",
    "name": "Orsi WPR Mulcher",
    "brand": "orsi",
    "category": "mulchers",
    "photoId": "assets/images/Orsi Mulchers/Orsi WPR Mulcher.jpg",
    "tagline": "Compact mulching for smaller tractors.",
    "summary": "The Orsi WPR is a compact, economical flail mulcher matched to smaller tractors for grass and light vegetation.",
    "description": "The WPR delivers reliable Orsi mulching quality in a compact, affordable package. Ideal for smaller properties and lower-horsepower tractors handling grass and light brush.",
    "highlights": [
      "Compact, economical design",
      "Matched to smaller tractors",
      "Grass & light vegetation",
      "Reliable Orsi quality"
    ],
    "specs": [
      [
        "Type",
        "Compact flail mulcher"
      ],
      [
        "Mounting",
        "3-point / side-shift options"
      ],
      [
        "Rotor",
        "Hammer / Y-blade flails"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Compact flail rotor",
      "Adjustable rear roller",
      "Interchangeable flails",
      "Simple, serviceable design"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-slashers",
    "name": "DakenAg Slashers",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Slashers.jpg",
    "tagline": "Rugged pasture & property slashing.",
    "summary": "Australian-made DakenAg rotary slashers built to knock down pasture, weeds and light scrub on farms and properties.",
    "description": "Engineered for Australian conditions, DakenAg slashers deliver dependable pasture-topping and property maintenance. Heavy-duty decks and driveline handle long grass and light scrub season after season.",
    "highlights": [
      "Australian-made & tough",
      "Heavy-duty deck & driveline",
      "Pasture, weed & scrub capable",
      "Multiple widths available"
    ],
    "specs": [
      [
        "Type",
        "Rotary slasher"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Reinforced deck",
      "Slip-clutch or shear-bolt PTO protection",
      "Adjustable cutting height",
      "Replaceable blades"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-contractor-slasher",
    "name": "DakenAg Contractor Slasher",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Contractor Slasher.jpg",
    "tagline": "Built for contractors and big acreage.",
    "summary": "The DakenAg Contractor Slasher is a heavy-duty, high-output slasher built for contractors and large-property work.",
    "description": "For operators clearing serious acreage, the Contractor Slasher steps up deck strength, driveline capacity and width. Built to work hard and last, it's ideal for contract slashing and roadside pasture management.",
    "highlights": [
      "Heavy-duty contractor build",
      "High-output wide deck",
      "Handles tall grass & scrub",
      "Long-life driveline"
    ],
    "specs": [
      [
        "Type",
        "Heavy-duty slasher"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Reinforced heavy-gauge deck",
      "Heavy-duty gearbox",
      "Adjustable cutting height",
      "CV or slip-clutch driveline"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-post-hole-diggers",
    "name": "DakenAg Post Hole Diggers",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Post Hole Diggers.jpg",
    "tagline": "Fast, clean holes for fencing & posts.",
    "summary": "DakenAg post hole diggers make quick, clean work of fencing, decking and planting holes across a range of auger sizes.",
    "description": "Matched to your tractor's PTO, DakenAg post hole diggers drill fast, clean holes for fencing, posts and planting. A robust gearbox and range of auger diameters cover everything from small posts to large footings.",
    "highlights": [
      "Fast, clean drilling",
      "Range of auger sizes",
      "Robust PTO gearbox",
      "Fencing & planting ready"
    ],
    "specs": [
      [
        "Type",
        "Post hole digger"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Heavy-duty gearbox",
      "Interchangeable augers",
      "Shear-bolt protection",
      "Three-point linkage mount"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-rotary-hoes",
    "name": "DakenAg Rotary Hoes",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Daken Rotary Hoes.jpg",
    "tagline": "Seedbed preparation made easy.",
    "summary": "DakenAg rotary hoes till and prepare fine, even seedbeds for cropping, horticulture and pasture renovation.",
    "description": "Turn rough ground into a fine, level seedbed with DakenAg rotary hoes. Robust blades and gearbox work the soil in a single pass, ideal for horticulture, small cropping and pasture establishment.",
    "highlights": [
      "Fine, even seedbed",
      "Single-pass cultivation",
      "Robust blades & gearbox",
      "Multiple widths"
    ],
    "specs": [
      [
        "Type",
        "Rotary hoe / tiller"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Heavy-duty tine blades",
      "Adjustable working depth",
      "Rear levelling board",
      "Side gear or chain drive"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-single-tyne-ripper",
    "name": "DakenAg Single Tyne Ripper",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Daken Single Tyne Ripper.jpg",
    "tagline": "Break up compaction, deep and clean.",
    "summary": "The DakenAg Single Tyne Ripper breaks up hardpan and compaction to improve drainage and root penetration.",
    "description": "A simple, effective tool for breaking compacted soil, the single tyne ripper penetrates deep to shatter hardpan, improve water infiltration and open ground for planting or drainage lines.",
    "highlights": [
      "Deep compaction relief",
      "Improves drainage",
      "Simple, robust design",
      "Ideal for drainage lines"
    ],
    "specs": [
      [
        "Type",
        "Ripper"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Heavy-duty shank",
      "Replaceable point",
      "Adjustable working depth",
      "Three-point linkage mount"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-sub-soil-ripper",
    "name": "DakenAg Sub-Soil Ripper",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Daken Sub-Soil Ripper.jpg",
    "tagline": "Multi-tyne deep soil renovation.",
    "summary": "The DakenAg Sub-Soil Ripper uses multiple tynes to shatter compaction across a wide width in a single pass.",
    "description": "For larger-scale soil renovation, the multi-tyne sub-soil ripper opens compacted ground across a full working width, improving aeration, drainage and root development ahead of cropping or pasture work.",
    "highlights": [
      "Multi-tyne wide coverage",
      "Deep compaction relief",
      "Improves aeration & drainage",
      "Heavy-duty frame"
    ],
    "specs": [
      [
        "Type",
        "Multi-tyne sub-soiler"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Multiple heavy-duty shanks",
      "Replaceable points",
      "Adjustable depth",
      "Reinforced toolbar"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-grader-blades",
    "name": "DakenAg Grader Blades",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Grader Blades.jpg",
    "tagline": "Level, grade and maintain tracks.",
    "summary": "DakenAg grader blades level ground, maintain tracks and spread material with adjustable angle and tilt.",
    "description": "A versatile property tool, the DakenAg grader blade levels, grades and shapes driveways, tracks and yards. Adjustable angle, offset and tilt make it easy to cut, spread and finish material.",
    "highlights": [
      "Level & grade tracks",
      "Adjustable angle & tilt",
      "Spreads & shapes material",
      "Heavy-duty construction"
    ],
    "specs": [
      [
        "Type",
        "Grader / angle blade"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Reversible cutting edge",
      "Multi-position angle",
      "Offset capability",
      "Three-point linkage mount"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-box-blades",
    "name": "DakenAg Box Blades",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Box Blades.jpg",
    "tagline": "Cut, carry and level in one pass.",
    "summary": "DakenAg box blades cut, carry and level material for driveway, track and site preparation work.",
    "description": "The box blade is the go-to tool for levelling and site prep — scarifier tynes loosen ground while the box cuts, carries and spreads material to a smooth, even finish.",
    "highlights": [
      "Cut, carry & level",
      "Scarifier tynes included",
      "Driveway & site prep",
      "Heavy-duty build"
    ],
    "specs": [
      [
        "Type",
        "Box scraper"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Front & rear cutting edges",
      "Adjustable rippers",
      "Reinforced box frame",
      "Three-point linkage mount"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-carryall",
    "name": "DakenAg CarryAll",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/CarryAll.jpg",
    "tagline": "Simple, sturdy load carrying.",
    "summary": "The DakenAg CarryAll is a robust three-point-linkage tray for transporting tools, feed and materials around the property.",
    "description": "A farm essential, the CarryAll tray mounts to the three-point linkage to carry tools, feed, fencing supplies and materials safely around the property — turning your tractor into a capable load carrier.",
    "highlights": [
      "Sturdy load platform",
      "Three-point linkage mount",
      "Transport tools & materials",
      "Simple and durable"
    ],
    "specs": [
      [
        "Type",
        "Carry-all tray"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Heavy-duty steel tray",
      "Load restraint points",
      "Compact transport footprint",
      "Easy hitch-on/off"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-pallet-forks",
    "name": "DakenAg Pallet Forks",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Pallet Forks.jpg",
    "tagline": "Lift and shift with your loader.",
    "summary": "DakenAg pallet forks let your loader or three-point linkage lift and move pallets, bales and bulk materials.",
    "description": "Turn your tractor into a materials handler with DakenAg pallet forks. Built strong for lifting pallets, feed, fertiliser and bulk materials, with options to suit loaders and three-point linkage.",
    "highlights": [
      "Lift pallets & materials",
      "Loader or linkage mount",
      "Heavy lifting capacity",
      "Adjustable tine spacing"
    ],
    "specs": [
      [
        "Type",
        "Pallet forks"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Forged fork tines",
      "Reinforced frame",
      "Adjustable tine width",
      "Loader / linkage options"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-3pl-balespike",
    "name": "DakenAg 3PL Bale Spike",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/3PL Balespike.jpg",
    "tagline": "Move round bales with ease.",
    "summary": "The DakenAg 3PL Bale Spike mounts to the three-point linkage to safely lift and transport round bales.",
    "description": "A simple, essential hay tool, the three-point-linkage bale spike spears and lifts round bales for easy transport and stacking around the farm.",
    "highlights": [
      "Lift & move round bales",
      "Three-point linkage mount",
      "Hardened spear tine",
      "Simple and reliable"
    ],
    "specs": [
      [
        "Type",
        "Bale spike"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Forged main spike",
      "Stabiliser spikes",
      "Reinforced frame",
      "Easy hitch mounting"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-bale-fork",
    "name": "DakenAg Bale Fork",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Daken Bale Fork.jpg",
    "tagline": "Loader-mounted bale handling.",
    "summary": "The DakenAg Bale Fork attaches to your loader for fast, secure round and square bale handling.",
    "description": "Handle hay quickly and safely with the loader-mounted DakenAg bale fork. Strong tines and a reinforced frame make light work of moving and stacking round and square bales.",
    "highlights": [
      "Loader-mounted design",
      "Handles round & square bales",
      "Strong forged tines",
      "Fast, secure handling"
    ],
    "specs": [
      [
        "Type",
        "Bale fork"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Forged fork tines",
      "Reinforced backing frame",
      "Loader-bracket options",
      "Heavy lifting capacity"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-bale-grab",
    "name": "DakenAg Bale Grab",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Daken Bale Grab.jpg",
    "tagline": "Grip and move wrapped bales.",
    "summary": "The DakenAg Bale Grab hydraulically grips round bales — including wrapped silage — without damaging the wrap.",
    "description": "Perfect for silage, the hydraulic bale grab clamps round bales securely for transport and stacking without piercing or damaging plastic wrap, protecting feed quality.",
    "highlights": [
      "Hydraulic gripping arms",
      "Handles wrapped silage",
      "Protects bale wrap",
      "Secure transport & stacking"
    ],
    "specs": [
      [
        "Type",
        "Bale grab"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Hydraulic clamp arms",
      "Wrap-friendly contact",
      "Loader-bracket options",
      "Robust pivot construction"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-spreaders",
    "name": "DakenAg Spreaders",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Spreaders.jpg",
    "tagline": "Even spreading of fert and seed.",
    "summary": "DakenAg spreaders broadcast fertiliser, seed and lime evenly across paddocks and pasture.",
    "description": "Get even, efficient coverage with DakenAg three-point-linkage spreaders. Ideal for fertiliser, seed and lime, with adjustable spread width and rate to suit the job.",
    "highlights": [
      "Even broadcast coverage",
      "Fertiliser, seed & lime",
      "Adjustable width & rate",
      "Three-point linkage mount"
    ],
    "specs": [
      [
        "Type",
        "Fertiliser / seed spreader"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Corrosion-resistant hopper",
      "Adjustable spread rate",
      "PTO-driven spinner",
      "Agitator for flow"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-rondini-spreaders",
    "name": "Rondini Twin Spinner Spreaders",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Rondini Twin Spinner Spreaders.jpg",
    "tagline": "High-capacity twin-spinner spreading.",
    "summary": "Rondini twin-spinner spreaders deliver wide, even, high-capacity broadcasting of fertiliser and seed.",
    "description": "For larger areas, the Italian-built Rondini twin-spinner spreader covers a wide working width with even, accurate distribution — boosting productivity for fertiliser and seed application.",
    "highlights": [
      "Twin-spinner wide coverage",
      "High-capacity hopper",
      "Even, accurate spread",
      "Productive for large areas"
    ],
    "specs": [
      [
        "Type",
        "Twin-spinner spreader"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Twin spinner discs",
      "Large-capacity hopper",
      "Adjustable spread pattern",
      "PTO-driven"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-stick-rakes",
    "name": "DakenAg Stick Rakes",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Stick Rakes.jpg",
    "tagline": "Clear sticks, roots and debris.",
    "summary": "DakenAg stick rakes clear sticks, roots, rocks and debris for land clearing and paddock cleanup.",
    "description": "Ideal for land clearing and cleanup, the stick rake gathers sticks, roots and debris while letting soil fall through the tynes — leaving cleaner ground behind without stripping topsoil.",
    "highlights": [
      "Clears sticks & debris",
      "Retains topsoil",
      "Land clearing & cleanup",
      "Heavy-duty tynes"
    ],
    "specs": [
      [
        "Type",
        "Stick / blade rake"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Heavy-gauge tynes",
      "Reinforced frame",
      "Loader or blade mount options",
      "Durable construction"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-disc-harrows",
    "name": "DakenAg Disc Harrows",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Disc Harrows.jpg",
    "tagline": "Cultivate and prepare ground fast.",
    "summary": "DakenAg disc harrows cut, mix and level soil for fast seedbed preparation and stubble incorporation.",
    "description": "A cultivation staple, DakenAg disc harrows slice through stubble and clods, mixing residue and levelling ground to prepare seedbeds quickly across a range of soil types.",
    "highlights": [
      "Fast cultivation",
      "Stubble incorporation",
      "Levels & mixes soil",
      "Adjustable disc angle"
    ],
    "specs": [
      [
        "Type",
        "Disc harrow"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Notched & plain disc options",
      "Adjustable gang angle",
      "Greasable bearings",
      "Heavy-duty frame"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-cultivators",
    "name": "DakenAg Cultivators",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Cultivators.jpg",
    "tagline": "Break, aerate and weed the seedbed.",
    "summary": "DakenAg cultivators break, aerate and weed soil to prepare and maintain productive seedbeds.",
    "description": "Versatile tyne cultivators loosen and aerate soil while controlling weeds between crops. Adjustable tynes and widths suit everything from horticulture to broadacre seedbed maintenance.",
    "highlights": [
      "Break & aerate soil",
      "Inter-row weed control",
      "Adjustable tynes & width",
      "Robust toolbar"
    ],
    "specs": [
      [
        "Type",
        "Tyne cultivator"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Spring or rigid tynes",
      "Replaceable points",
      "Adjustable spacing",
      "Reinforced frame"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-finishing-mowers",
    "name": "DakenAg Finishing Mowers",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Finishing Mowers.jpg",
    "tagline": "Manicured finish for lawns & parks.",
    "summary": "DakenAg finishing mowers deliver a clean, manicured cut for lawns, parks and acreage grounds.",
    "description": "For a tidy, professional finish, the DakenAg finishing mower mounts to your tractor's PTO to cut lawns, parklands and acreage evenly and cleanly — ideal where a slasher is too coarse.",
    "highlights": [
      "Clean, manicured finish",
      "Lawns, parks & acreage",
      "Multiple deck widths",
      "Rear-roller striping"
    ],
    "specs": [
      [
        "Type",
        "Finishing mower"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Multi-blade deck",
      "Adjustable cutting height",
      "Rear roller for finish",
      "Side or rear discharge"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-backhoes",
    "name": "DakenAg Backhoes",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/DakenAg Backhoes.jpg",
    "tagline": "Add digging power to your tractor.",
    "summary": "DakenAg backhoes attach to your tractor to dig trenches, footings and drainage with real excavating power.",
    "description": "Turn your tractor into a digger with a DakenAg backhoe attachment. Ideal for trenching, footings, drainage and general excavation on farms and properties, with a range of bucket sizes.",
    "highlights": [
      "Tractor-mounted digging",
      "Trenches, footings & drainage",
      "Range of bucket sizes",
      "Robust boom & dipper"
    ],
    "specs": [
      [
        "Type",
        "3PL backhoe"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Three-point linkage mount",
      "Independent stabilisers",
      "Interchangeable buckets",
      "Smooth hydraulic control"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "daken-ballast-boxes",
    "name": "DakenAg Ballast Boxes",
    "brand": "dakenag",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Ballast Boxes.jpg",
    "tagline": "Rear counterweight for loader work.",
    "summary": "DakenAg ballast boxes add rear counterweight for safe, stable loader operation.",
    "description": "Essential for loader safety, the DakenAg ballast box mounts to the three-point linkage to counterbalance front loader loads — improving traction, stability and steering control.",
    "highlights": [
      "Rear counterweight",
      "Improves loader stability",
      "Better traction & steering",
      "Fillable for extra weight"
    ],
    "specs": [
      [
        "Type",
        "Ballast box"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Fillable steel box",
      "Three-point linkage mount",
      "Compact profile",
      "Durable construction"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "muratori-rotary-hoes",
    "name": "Muratori Rotary Hoes",
    "brand": "muratori",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Muratori Rotary Hoes.jpg",
    "tagline": "Precision Italian cultivation.",
    "summary": "Muratori rotary hoes deliver precise, fine seedbed preparation for horticulture and cropping.",
    "description": "Italian specialists in cultivation, Muratori rotary hoes produce a fine, even tilth in a single pass. Precision engineering and robust build make them ideal for horticulture, viticulture and seedbed prep.",
    "highlights": [
      "Fine, even tilth",
      "Precision Italian build",
      "Single-pass cultivation",
      "Horticulture & cropping"
    ],
    "specs": [
      [
        "Type",
        "Rotary hoe / tiller"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Heavy-duty rotor blades",
      "Adjustable working depth",
      "Rear levelling hood",
      "Reinforced side drive"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "muratori-stone-buriers",
    "name": "Muratori Stone Buriers",
    "brand": "muratori",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Muratori Stone Buriers.jpg",
    "tagline": "Bury stones, create perfect seedbeds.",
    "summary": "Muratori stone buriers bury stones and debris while creating a fine, level seedbed in a single pass.",
    "description": "The ultimate seedbed tool, the Muratori stone burier lifts and buries stones and clods beneath a finely tilled surface — producing an immaculate, stone-free seedbed ideal for turf, horticulture and precision planting.",
    "highlights": [
      "Buries stones & debris",
      "Immaculate level seedbed",
      "Single-pass finish",
      "Ideal for turf & horticulture"
    ],
    "specs": [
      [
        "Type",
        "Stone burier"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Counter-rotating rotor",
      "Rear roller for level finish",
      "Adjustable burying depth",
      "Robust Italian build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "muratori-mulchers",
    "name": "Muratori Mulchers",
    "brand": "muratori",
    "category": "attachments",
    "photoId": "assets/images/DakenAg - Implements/Muratori Mulchers.jpg",
    "tagline": "Fine finish flail mulching.",
    "summary": "Muratori flail mulchers deliver a fine, even mulch of grass, prunings and crop residue.",
    "description": "Muratori mulchers combine Italian build quality with an efficient flail rotor for a fine, clean mulch. Ideal for orchards, vineyards and pasture-topping where finish quality matters.",
    "highlights": [
      "Fine, even mulch",
      "Grass, prunings & residue",
      "Quality Italian build",
      "Orchard & vineyard ready"
    ],
    "specs": [
      [
        "Type",
        "Flail mulcher"
      ],
      [
        "Mounting",
        "3-point linkage / tractor mount"
      ],
      [
        "Build",
        "Heavy-duty steel"
      ],
      [
        "Compatibility",
        "Matched to your tractor"
      ],
      [
        "Origin",
        "Italy"
      ]
    ],
    "features": [
      "Balanced flail rotor",
      "Interchangeable flails",
      "Adjustable rear roller",
      "Side-shift options"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "rapidspray-spray-tanks",
    "name": "RapidSpray Spray Tanks",
    "brand": "rapidspray",
    "category": "sprayers",
    "availability": "in-stock",
    "photoId": "assets/images/Rapid Spray/Spray Tanks.webp",
    "tagline": "Durable poly tanks for spraying.",
    "summary": "Australian-made RapidSpray poly spray tanks built tough for chemical mixing, storage and application.",
    "description": "RapidSpray's UV-stabilised poly spray tanks are engineered for Australian conditions — chemical-resistant, durable and available in a range of sizes for spot spraying through to boom application.",
    "highlights": [
      "UV-stabilised poly build",
      "Chemical-resistant",
      "Range of capacities",
      "Australian-made"
    ],
    "specs": [
      [
        "Type",
        "Spray tank"
      ],
      [
        "Construction",
        "UV-stabilised poly / steel"
      ],
      [
        "Application",
        "Farm / property / industrial"
      ],
      [
        "Options",
        "Range of sizes & configs"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Heavy-duty poly construction",
      "Moulded mounting points",
      "Wide fill openings",
      "Compatible with RapidSpray pumps"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "rapidspray-water-cartage",
    "name": "RapidSpray Water Cartage Tanks",
    "brand": "rapidspray",
    "category": "sprayers",
    "availability": "in-stock",
    "photoId": "assets/images/Rapid Spray/Water Cartage Tanks.webp",
    "tagline": "Transport water anywhere on-farm.",
    "summary": "RapidSpray water cartage tanks safely transport water for stock, spraying and fire-fighting around the property.",
    "description": "Built for on-farm water transport, RapidSpray cartage tanks feature baffled, UV-stabilised poly construction for safe, stable carting of water for stock, spraying and emergency use.",
    "highlights": [
      "Safe water transport",
      "Baffled for stability",
      "UV-stabilised poly",
      "Multiple capacities"
    ],
    "specs": [
      [
        "Type",
        "Water cartage tank"
      ],
      [
        "Construction",
        "UV-stabilised poly / steel"
      ],
      [
        "Application",
        "Farm / property / industrial"
      ],
      [
        "Options",
        "Range of sizes & configs"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Baffled tank design",
      "Skid or trailer mount options",
      "Durable poly build",
      "Fitting & outlet options"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "rapidspray-3pl-sprayers",
    "name": "RapidSpray 3PL Sprayers",
    "brand": "rapidspray",
    "category": "sprayers",
    "availability": "enquire",
    "photoId": "assets/images/Rapid Spray/3pl Sprayers.webp",
    "tagline": "Three-point-linkage spraying power.",
    "summary": "RapidSpray 3PL linkage sprayers mount to your tractor for efficient boom and spot spraying.",
    "description": "Mounted on the three-point linkage, RapidSpray 3PL sprayers combine a poly tank, quality pump and boom options for efficient paddock and pasture spraying, tailored to your tractor.",
    "highlights": [
      "Tractor-mounted spraying",
      "Tank, pump & boom package",
      "Efficient paddock coverage",
      "Australian-made"
    ],
    "specs": [
      [
        "Type",
        "Linkage sprayer"
      ],
      [
        "Construction",
        "UV-stabilised poly / steel"
      ],
      [
        "Application",
        "Farm / property / industrial"
      ],
      [
        "Options",
        "Range of sizes & configs"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "UV-stabilised poly tank",
      "Quality diaphragm pump",
      "Boom & handgun options",
      "Three-point linkage mount"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "rapidspray-spray-booms",
    "name": "RapidSpray Spray Booms",
    "brand": "rapidspray",
    "category": "sprayers",
    "availability": "enquire",
    "photoId": "assets/images/Rapid Spray/Spray Booms.webp",
    "tagline": "Even, wide-width chemical coverage.",
    "summary": "RapidSpray spray booms deliver even, accurate chemical coverage across a wide working width.",
    "description": "Add wide, even coverage to your sprayer with RapidSpray booms. Available in a range of widths with quality nozzles for accurate, consistent application across pasture and crops.",
    "highlights": [
      "Wide, even coverage",
      "Quality nozzles",
      "Range of boom widths",
      "Accurate application"
    ],
    "specs": [
      [
        "Type",
        "Spray boom"
      ],
      [
        "Construction",
        "UV-stabilised poly / steel"
      ],
      [
        "Application",
        "Farm / property / industrial"
      ],
      [
        "Options",
        "Range of sizes & configs"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Durable boom frame",
      "Even-spacing nozzles",
      "Breakaway boom ends",
      "Compatible with RapidSpray tanks"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "rapidspray-12v-sprayers",
    "name": "RapidSpray 12V Sprayers",
    "brand": "rapidspray",
    "category": "sprayers",
    "availability": "in-stock",
    "photoId": "assets/images/Rapid Spray/12v Sparyers.webp",
    "tagline": "Portable powered spraying.",
    "summary": "RapidSpray 12V sprayers offer convenient powered spraying from ute, trailer or ATV.",
    "description": "Compact and self-contained, RapidSpray 12V sprayers run off your vehicle battery for powered spot and area spraying — ideal for weeds, fences and small paddocks from a ute, trailer or ATV.",
    "highlights": [
      "12V powered spraying",
      "Ute / ATV / trailer mount",
      "Self-contained unit",
      "Handgun & hose included"
    ],
    "specs": [
      [
        "Type",
        "12V sprayer"
      ],
      [
        "Construction",
        "UV-stabilised poly / steel"
      ],
      [
        "Application",
        "Farm / property / industrial"
      ],
      [
        "Options",
        "Range of sizes & configs"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "12V diaphragm pump",
      "UV-stabilised poly tank",
      "Handgun & hose kit",
      "Compact, portable design"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "rapidspray-12v-spot-sprayers",
    "name": "RapidSpray 12V Spot Sprayers",
    "brand": "rapidspray",
    "category": "sprayers",
    "availability": "in-stock",
    "photoId": "assets/images/Rapid Spray/12v Spot Sprayers.webp",
    "tagline": "Targeted weed control on the go.",
    "summary": "RapidSpray 12V spot sprayers deliver targeted weed and pest control from a compact, portable unit.",
    "description": "Purpose-built for spot spraying, these compact 12V units make targeted weed and pest control easy — mount to an ATV, ute or trailer and treat weeds precisely wherever you find them.",
    "highlights": [
      "Targeted spot spraying",
      "Compact 12V unit",
      "ATV / ute mount",
      "Precise handgun control"
    ],
    "specs": [
      [
        "Type",
        "12V spot sprayer"
      ],
      [
        "Construction",
        "UV-stabilised poly / steel"
      ],
      [
        "Application",
        "Farm / property / industrial"
      ],
      [
        "Options",
        "Range of sizes & configs"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "12V pump & handgun",
      "Compact poly tank",
      "Easy mounting",
      "Portable and self-contained"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "rapidspray-backpack-sprayers",
    "name": "RapidSpray Backpack Sprayers",
    "brand": "rapidspray",
    "category": "sprayers",
    "availability": "in-stock",
    "photoId": "assets/images/Rapid Spray/Backpack Sprayers.webp",
    "tagline": "Go-anywhere manual spraying.",
    "summary": "RapidSpray backpack sprayers provide comfortable, go-anywhere manual spraying for spot treatment.",
    "description": "For access-anywhere spot spraying, RapidSpray backpack units offer comfortable carrying, reliable pump action and durable construction for weeds, pests and garden treatment.",
    "highlights": [
      "Go-anywhere spraying",
      "Comfortable to carry",
      "Reliable pump action",
      "Durable build"
    ],
    "specs": [
      [
        "Type",
        "Backpack sprayer"
      ],
      [
        "Construction",
        "UV-stabilised poly / steel"
      ],
      [
        "Application",
        "Farm / property / industrial"
      ],
      [
        "Options",
        "Range of sizes & configs"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Padded shoulder straps",
      "Chemical-resistant tank",
      "Adjustable nozzle",
      "Serviceable pump"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "rapidspray-motorised-sprayers",
    "name": "RapidSpray Motorised Sprayers",
    "brand": "rapidspray",
    "category": "sprayers",
    "availability": "enquire",
    "photoId": "assets/images/Rapid Spray/Moterised Sprayers.webp",
    "tagline": "High-pressure engine-driven spraying.",
    "summary": "RapidSpray motorised sprayers use a petrol engine and pump for high-pressure, high-volume spraying.",
    "description": "For bigger jobs, RapidSpray motorised units pair a reliable petrol engine with a high-pressure pump — delivering the volume and reach needed for larger areas, tall crops and heavy applications.",
    "highlights": [
      "Petrol engine-driven",
      "High-pressure output",
      "High-volume capacity",
      "Long-reach spraying"
    ],
    "specs": [
      [
        "Type",
        "Motorised sprayer"
      ],
      [
        "Construction",
        "UV-stabilised poly / steel"
      ],
      [
        "Application",
        "Farm / property / industrial"
      ],
      [
        "Options",
        "Range of sizes & configs"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Reliable petrol engine",
      "High-pressure pump",
      "Long hose & handgun",
      "Durable frame & tank"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "rapidspray-fire-fighting-units",
    "name": "RapidSpray Compact Fire Fighting Units",
    "brand": "rapidspray",
    "category": "sprayers",
    "availability": "in-stock",
    "photoId": "assets/images/Rapid Spray/Compact Fire Fighting Units.webp",
    "tagline": "Property fire protection, ready to go.",
    "summary": "RapidSpray compact fire-fighting units combine tank, pump and hose for rapid property fire response.",
    "description": "Be ready for fire season with a RapidSpray compact fire-fighting unit — a self-contained tank, pump and hose package that mounts to a ute or trailer for fast first response and asset protection.",
    "highlights": [
      "Self-contained fire unit",
      "Ute / trailer mount",
      "Pump, tank & hose",
      "Rapid fire response"
    ],
    "specs": [
      [
        "Type",
        "Fire-fighting unit"
      ],
      [
        "Construction",
        "UV-stabilised poly / steel"
      ],
      [
        "Application",
        "Farm / property / industrial"
      ],
      [
        "Options",
        "Range of sizes & configs"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Fire-fighting pump",
      "UV-stabilised poly tank",
      "Hose reel & nozzle",
      "Compact, portable design"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "rapidspray-fire-fighting-trailers",
    "name": "RapidSpray Fire Fighting Trailers",
    "brand": "rapidspray",
    "category": "sprayers",
    "availability": "enquire",
    "photoId": "assets/images/Rapid Spray/Fire Fighting Trailers.webp",
    "tagline": "Mobile fire protection on tow.",
    "summary": "RapidSpray fire-fighting trailers deliver larger-capacity, towable fire protection for farms and properties.",
    "description": "For greater capacity and reach, RapidSpray fire-fighting trailers carry a larger water supply, pump and hose on a towable chassis — ready to protect assets and respond fast across the property.",
    "highlights": [
      "Towable fire protection",
      "Larger water capacity",
      "Pump, tank & hose reel",
      "Farm & property ready"
    ],
    "specs": [
      [
        "Type",
        "Fire-fighting trailer"
      ],
      [
        "Construction",
        "UV-stabilised poly / steel"
      ],
      [
        "Application",
        "Farm / property / industrial"
      ],
      [
        "Options",
        "Range of sizes & configs"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "Robust trailer chassis",
      "Fire-fighting pump",
      "Large poly tank",
      "Hose reel & nozzle"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "rapidspray-diesel-pods",
    "name": "RapidSpray Diesel Pods",
    "brand": "rapidspray",
    "category": "sprayers",
    "availability": "in-stock",
    "photoId": "assets/images/Rapid Spray/Diesel Pods.webp",
    "tagline": "Safe on-farm diesel storage & transport.",
    "summary": "RapidSpray diesel pods provide safe, portable diesel storage and refuelling around the property.",
    "description": "Keep machinery fuelled anywhere with a RapidSpray diesel pod — durable, portable diesel storage with pump and hose for convenient on-farm refuelling of tractors and equipment.",
    "highlights": [
      "Portable diesel storage",
      "On-farm refuelling",
      "Pump & hose included",
      "Durable poly build"
    ],
    "specs": [
      [
        "Type",
        "Diesel fuel pod"
      ],
      [
        "Construction",
        "UV-stabilised poly / steel"
      ],
      [
        "Application",
        "Farm / property / industrial"
      ],
      [
        "Options",
        "Range of sizes & configs"
      ],
      [
        "Origin",
        "Australia"
      ]
    ],
    "features": [
      "UV-stabilised poly tank",
      "12V or manual pump options",
      "Delivery hose & nozzle",
      "Skid or ute mounting"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "bobcat-ae19-aerator",
    "name": "Bobcat AE19 Walk-Behind Aerator",
    "brand": "bobcat",
    "category": "turf-care",
    "availability": "enquire",
    "photoId": "assets/images/Bobcat Turf Renovation/Bobcat AE19 Walk-Behind Aerator.jpg",
    "tagline": "Compact walk-behind lawn aeration.",
    "summary": "The Bobcat AE19 walk-behind aerator relieves compaction and improves turf health on smaller lawns and grounds.",
    "description": "Ideal for smaller turf areas, the AE19 core aerator relieves soil compaction, improves water and nutrient penetration and promotes healthy root growth — in a compact, easy-to-manoeuvre walk-behind design.",
    "highlights": [
      "Compact walk-behind",
      "Relieves compaction",
      "Improves turf health",
      "Easy to manoeuvre"
    ],
    "specs": [
      [
        "Type",
        "Walk-behind aerator"
      ],
      [
        "Class",
        "Professional turf equipment"
      ],
      [
        "Application",
        "Turf renovation & maintenance"
      ],
      [
        "Build",
        "Commercial-grade"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Core aeration tines",
      "Compact working width",
      "Simple operation",
      "Commercial-grade build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "bobcat-ae26-aerator",
    "name": "Bobcat AE26 Walk-Behind Aerator",
    "brand": "bobcat",
    "category": "turf-care",
    "availability": "enquire",
    "photoId": "assets/images/Bobcat Turf Renovation/Bobcat AE26 Walk-Behind Aerator.jpg",
    "tagline": "Productive mid-size turf aeration.",
    "summary": "The Bobcat AE26 walk-behind aerator covers more ground for productive aeration of medium turf areas.",
    "description": "Stepping up working width, the AE26 delivers efficient core aeration for parks, sports fields and larger lawns — relieving compaction and boosting turf health with each pass.",
    "highlights": [
      "Wider working width",
      "Efficient core aeration",
      "Parks & sports turf",
      "Relieves compaction"
    ],
    "specs": [
      [
        "Type",
        "Walk-behind aerator"
      ],
      [
        "Class",
        "Professional turf equipment"
      ],
      [
        "Application",
        "Turf renovation & maintenance"
      ],
      [
        "Build",
        "Commercial-grade"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Core aeration tines",
      "Increased coverage",
      "Robust drive system",
      "Commercial-grade build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "bobcat-ae30s-aerator",
    "name": "Bobcat AE30S Stand-On Aerator",
    "brand": "bobcat",
    "category": "turf-care",
    "availability": "enquire",
    "photoId": "assets/images/Bobcat Turf Renovation/Bobcat AE30S Stand-On Aerator.jpg",
    "tagline": "Ride-on speed for large turf areas.",
    "summary": "The Bobcat AE30S stand-on aerator brings ride-on speed and productivity to large-area turf aeration.",
    "description": "Built for productivity, the stand-on AE30S lets operators aerate large turf areas quickly and comfortably. Ideal for contractors and grounds crews managing sports fields, parks and estates.",
    "highlights": [
      "Stand-on productivity",
      "Large-area coverage",
      "Fast, comfortable operation",
      "Contractor-grade"
    ],
    "specs": [
      [
        "Type",
        "Stand-on aerator"
      ],
      [
        "Class",
        "Professional turf equipment"
      ],
      [
        "Application",
        "Turf renovation & maintenance"
      ],
      [
        "Build",
        "Commercial-grade"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Ride-on platform",
      "High-output aeration",
      "Agile manoeuvrability",
      "Commercial-grade build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "bobcat-ae36-aerator",
    "name": "Bobcat AE36 Tow-Behind Aerator",
    "brand": "bobcat",
    "category": "turf-care",
    "availability": "enquire",
    "photoId": "assets/images/Bobcat Turf Renovation/Bobcat AE36 Tow-Behind Aerator.jpg",
    "tagline": "Wide-width towed aeration.",
    "summary": "The Bobcat AE36 tow-behind aerator covers wide areas fast when towed behind a mower or utility vehicle.",
    "description": "For the largest turf areas, the AE36 tows behind a ride-on mower or utility vehicle to aerate wide swaths quickly — an efficient solution for expansive parks, fields and estates.",
    "highlights": [
      "Wide-width coverage",
      "Tow-behind convenience",
      "Fast large-area aeration",
      "Low operating effort"
    ],
    "specs": [
      [
        "Type",
        "Tow-behind aerator"
      ],
      [
        "Class",
        "Professional turf equipment"
      ],
      [
        "Application",
        "Turf renovation & maintenance"
      ],
      [
        "Build",
        "Commercial-grade"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Tow-behind hitch",
      "Wide aeration width",
      "Weight tray for penetration",
      "Durable construction"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "bobcat-dt18-dethatcher",
    "name": "Bobcat DT18 Push Dethatcher",
    "brand": "bobcat",
    "category": "turf-care",
    "availability": "enquire",
    "photoId": "assets/images/Bobcat Turf Renovation/Bobcat DT18 Push Dethatcher.jpg",
    "tagline": "Remove thatch, revive the lawn.",
    "summary": "The Bobcat DT18 push dethatcher removes built-up thatch to restore turf health on smaller lawns.",
    "description": "Thatch buildup chokes healthy turf — the compact DT18 push dethatcher removes it efficiently, letting water, air and nutrients reach the roots for a healthier, greener lawn.",
    "highlights": [
      "Removes thatch buildup",
      "Restores turf health",
      "Compact push design",
      "Easy to operate"
    ],
    "specs": [
      [
        "Type",
        "Push dethatcher"
      ],
      [
        "Class",
        "Professional turf equipment"
      ],
      [
        "Application",
        "Turf renovation & maintenance"
      ],
      [
        "Build",
        "Commercial-grade"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Spring-tine dethatching",
      "Compact working width",
      "Simple operation",
      "Commercial-grade build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "bobcat-dt19-dethatcher",
    "name": "Bobcat DT19 Self-Propelled Dethatcher",
    "brand": "bobcat",
    "category": "turf-care",
    "availability": "enquire",
    "photoId": "assets/images/Bobcat Turf Renovation/Bobcat DT19 Self-Propelled Dethatcher.jpg",
    "tagline": "Powered dethatching productivity.",
    "summary": "The Bobcat DT19 self-propelled dethatcher powers through thatch removal for faster, less-fatiguing work.",
    "description": "Self-propelled for productivity, the DT19 makes dethatching larger areas quick and comfortable — removing thatch efficiently to revitalise turf across lawns, parks and sports grounds.",
    "highlights": [
      "Self-propelled operation",
      "Efficient thatch removal",
      "Larger-area productivity",
      "Less operator fatigue"
    ],
    "specs": [
      [
        "Type",
        "Self-propelled dethatcher"
      ],
      [
        "Class",
        "Professional turf equipment"
      ],
      [
        "Application",
        "Turf renovation & maintenance"
      ],
      [
        "Build",
        "Commercial-grade"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Powered drive system",
      "Spring-tine dethatching",
      "Adjustable depth",
      "Commercial-grade build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "bobcat-dt20-dethatcher",
    "name": "Bobcat DT20 Dethatcher & Overseeder",
    "brand": "bobcat",
    "category": "turf-care",
    "availability": "enquire",
    "photoId": "assets/images/Bobcat Turf Renovation/Bobcat DT20 Self-Propelled Dethatcher & Overseeder.jpg",
    "tagline": "Dethatch and overseed in one pass.",
    "summary": "The Bobcat DT20 combines self-propelled dethatching with overseeding to renovate turf in a single pass.",
    "description": "A true renovation machine, the DT20 dethatches and overseeds together — removing thatch and dropping seed into optimal soil contact for fast, even turf establishment and repair.",
    "highlights": [
      "Dethatch & overseed together",
      "Single-pass renovation",
      "Optimal seed-soil contact",
      "Self-propelled"
    ],
    "specs": [
      [
        "Type",
        "Dethatcher & overseeder"
      ],
      [
        "Class",
        "Professional turf equipment"
      ],
      [
        "Application",
        "Turf renovation & maintenance"
      ],
      [
        "Build",
        "Commercial-grade"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Integrated seed hopper",
      "Spring-tine dethatching",
      "Adjustable seed rate",
      "Commercial-grade build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "bobcat-sc12-sod-cutter",
    "name": "Bobcat SC12 Mechanical Sod Cutter",
    "brand": "bobcat",
    "category": "turf-care",
    "availability": "enquire",
    "photoId": "assets/images/Bobcat Turf Renovation/Bobcat SC12 Mechanical Sod Cutter.jpg",
    "tagline": "Clean sod removal, compact size.",
    "summary": "The Bobcat SC12 mechanical sod cutter cleanly cuts and lifts sod for turf removal and renovation.",
    "description": "For clean, efficient sod removal, the compact SC12 mechanical sod cutter slices turf at a consistent depth — ideal for renovations, garden bed creation and repair work on smaller sites.",
    "highlights": [
      "Clean sod cutting",
      "Consistent depth",
      "Compact & manoeuvrable",
      "Renovation ready"
    ],
    "specs": [
      [
        "Type",
        "Mechanical sod cutter"
      ],
      [
        "Class",
        "Professional turf equipment"
      ],
      [
        "Application",
        "Turf renovation & maintenance"
      ],
      [
        "Build",
        "Commercial-grade"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Adjustable cutting depth",
      "Reliable mechanical drive",
      "Compact footprint",
      "Commercial-grade build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "bobcat-sc18-sod-cutter",
    "name": "Bobcat SC18 Mechanical Sod Cutter",
    "brand": "bobcat",
    "category": "turf-care",
    "availability": "enquire",
    "photoId": "assets/images/Bobcat Turf Renovation/Bobcat SC18 Mechanical Sod Cutter.jpg",
    "tagline": "Wider mechanical sod cutting.",
    "summary": "The Bobcat SC18 mechanical sod cutter offers a wider cut for faster turf removal on medium sites.",
    "description": "The SC18 widens the cut for greater productivity, cleanly slicing and lifting sod at a consistent depth — an efficient choice for landscapers and grounds crews handling medium renovation jobs.",
    "highlights": [
      "Wider cutting width",
      "Clean, consistent sod",
      "Faster turf removal",
      "Landscaper-ready"
    ],
    "specs": [
      [
        "Type",
        "Mechanical sod cutter"
      ],
      [
        "Class",
        "Professional turf equipment"
      ],
      [
        "Application",
        "Turf renovation & maintenance"
      ],
      [
        "Build",
        "Commercial-grade"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Adjustable cutting depth",
      "Reliable mechanical drive",
      "Robust construction",
      "Commercial-grade build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "bobcat-sc18h-sod-cutter",
    "name": "Bobcat SC18H Hydrostatic Sod Cutter",
    "brand": "bobcat",
    "category": "turf-care",
    "availability": "enquire",
    "photoId": "assets/images/Bobcat Turf Renovation/Bobcat SC18H Hydrostatic Sod Cutter.jpg",
    "tagline": "Smooth hydrostatic sod cutting.",
    "summary": "The Bobcat SC18H hydrostatic sod cutter delivers smooth, controllable sod removal with hydrostatic drive.",
    "description": "Hydrostatic drive gives the SC18H smooth, precise speed control for clean, efficient sod cutting — reducing operator fatigue and improving finish on medium to larger renovation projects.",
    "highlights": [
      "Hydrostatic drive control",
      "Smooth, precise operation",
      "Clean sod removal",
      "Reduced operator fatigue"
    ],
    "specs": [
      [
        "Type",
        "Hydrostatic sod cutter"
      ],
      [
        "Class",
        "Professional turf equipment"
      ],
      [
        "Application",
        "Turf renovation & maintenance"
      ],
      [
        "Build",
        "Commercial-grade"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Hydrostatic transmission",
      "Adjustable cutting depth",
      "Comfortable controls",
      "Commercial-grade build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "bobcat-sc24h-sod-cutter",
    "name": "Bobcat SC24H Hydrostatic Sod Cutter",
    "brand": "bobcat",
    "category": "turf-care",
    "availability": "enquire",
    "photoId": "assets/images/Bobcat Turf Renovation/Bobcat SC24H Hydrostatic Sod Cutter.jpg",
    "tagline": "Wide hydrostatic sod cutting power.",
    "summary": "The Bobcat SC24H hydrostatic sod cutter combines a wide cut with smooth hydrostatic control for large jobs.",
    "description": "The top of the sod-cutter range, the SC24H pairs a wide cutting width with smooth hydrostatic drive — delivering high-productivity, clean sod removal for large-scale renovation and turf-farm work.",
    "highlights": [
      "Wide hydrostatic cutting",
      "High productivity",
      "Clean, consistent sod",
      "Large-scale renovation"
    ],
    "specs": [
      [
        "Type",
        "Hydrostatic sod cutter"
      ],
      [
        "Class",
        "Professional turf equipment"
      ],
      [
        "Application",
        "Turf renovation & maintenance"
      ],
      [
        "Build",
        "Commercial-grade"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Hydrostatic transmission",
      "Wide cutting width",
      "Adjustable depth",
      "Commercial-grade build"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "featured": false
  },
  {
    "slug": "bobcat-uv33-std",
    "name": "Bobcat UV33 Utility Vehicle",
    "brand": "bobcat",
    "category": "utility-vehicles",
    "photoId": "assets/images/Bobcat Utility Vehicles/Bobcat UV33 STD.jpg",
    "tagline": "Rugged, go-anywhere property workhorse.",
    "summary": "The Bobcat UV33 utility vehicle carries people, tools and loads across farms, properties and worksites with ease.",
    "description": "Built tough for the property, the UV33 combines a capable drivetrain, comfortable seating and a practical cargo bed to move people, tools and materials wherever the job takes you.",
    "highlights": [
      "Capable 4x4 drivetrain",
      "Practical cargo bed",
      "Comfortable seating",
      "Rugged Bobcat build"
    ],
    "specs": [
      [
        "Type",
        "Utility vehicle"
      ],
      [
        "Drivetrain",
        "4x4 selectable"
      ],
      [
        "Class",
        "Utility vehicle"
      ],
      [
        "Use",
        "Property, farm & site work"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Selectable four-wheel drive",
      "Tipping cargo bed",
      "Towing capacity",
      "Durable chassis"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "bobcat-uv33-dlx",
    "name": "Bobcat UV33 DLX Utility Vehicle",
    "brand": "bobcat",
    "category": "utility-vehicles",
    "photoId": "assets/images/Bobcat Utility Vehicles/Bobcat UV33 DLX.jpg",
    "tagline": "Deluxe comfort, same tough capability.",
    "summary": "The Bobcat UV33 DLX adds deluxe operator comfort and features to the capable UV33 utility platform.",
    "description": "The DLX version of the UV33 brings upgraded comfort and features to the rugged utility platform — ideal for owners who spend long days moving people, tools and loads around the property.",
    "highlights": [
      "Deluxe comfort features",
      "Capable 4x4 drivetrain",
      "Practical cargo bed",
      "Rugged Bobcat build"
    ],
    "specs": [
      [
        "Type",
        "Utility vehicle (deluxe)"
      ],
      [
        "Drivetrain",
        "4x4 selectable"
      ],
      [
        "Class",
        "Utility vehicle"
      ],
      [
        "Use",
        "Property, farm & site work"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Upgraded operator comfort",
      "Selectable four-wheel drive",
      "Tipping cargo bed",
      "Towing capacity"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "bobcat-uv34-std",
    "name": "Bobcat UV34 Utility Vehicle",
    "brand": "bobcat",
    "category": "utility-vehicles",
    "photoId": "assets/images/Bobcat Utility Vehicles/Bobcat UV34 STD.jpg",
    "tagline": "More capacity for demanding work.",
    "summary": "The Bobcat UV34 utility vehicle steps up capacity and capability for demanding farm and worksite tasks.",
    "description": "The UV34 delivers greater payload and capability for busy properties and worksites — a rugged, comfortable, do-it-all utility vehicle for transporting people, tools and materials.",
    "highlights": [
      "Increased payload capacity",
      "Capable 4x4 drivetrain",
      "Comfortable seating",
      "Rugged Bobcat build"
    ],
    "specs": [
      [
        "Type",
        "Utility vehicle"
      ],
      [
        "Drivetrain",
        "4x4 selectable"
      ],
      [
        "Class",
        "Utility vehicle"
      ],
      [
        "Use",
        "Property, farm & site work"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Selectable four-wheel drive",
      "Larger tipping cargo bed",
      "Strong towing capacity",
      "Durable chassis"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "bobcat-uv34-xl",
    "name": "Bobcat UV34 XL Utility Vehicle",
    "brand": "bobcat",
    "category": "utility-vehicles",
    "photoId": "assets/images/Bobcat Utility Vehicles/Bobcat UV34 XL.jpg",
    "tagline": "Extended capacity for bigger loads.",
    "summary": "The Bobcat UV34 XL offers extended capacity for owners who need to carry more people and bigger loads.",
    "description": "The XL version of the UV34 maximises carrying capacity — extra seating and cargo space make it ideal for larger crews and heavier loads on farms, estates and worksites.",
    "highlights": [
      "Extended carrying capacity",
      "Extra seating & cargo",
      "Capable 4x4 drivetrain",
      "Rugged Bobcat build"
    ],
    "specs": [
      [
        "Type",
        "Utility vehicle (extended)"
      ],
      [
        "Drivetrain",
        "4x4 selectable"
      ],
      [
        "Class",
        "Utility vehicle"
      ],
      [
        "Use",
        "Property, farm & site work"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Extended cargo & seating",
      "Selectable four-wheel drive",
      "Strong towing capacity",
      "Durable chassis"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  },
  {
    "slug": "bobcat-uw56-toolcat",
    "name": "Bobcat UW56 Toolcat",
    "brand": "bobcat",
    "category": "utility-vehicles",
    "photoId": "assets/images/Bobcat Toolcats/Bobcat UW56 - 1.jpg",
    "tagline": "One machine, endless attachments.",
    "summary": "The Bobcat UW56 Toolcat utility work machine combines the ride and capacity of a utility vehicle with the versatility of a loader and attachment carrier.",
    "description": "The UW56 Toolcat is a category of its own — part utility vehicle, part compact loader. It carries operators and a cargo bed like a UTV, but adds a powered lift arm and quick-attach system to run buckets, forks, augers, mowers and dozens of other attachments. One machine that hauls, lifts, digs and works all day.",
    "highlights": [
      "Utility vehicle + loader in one",
      "Quick-attach attachment system",
      "Lift, haul, dig & carry",
      "All-wheel drive capability"
    ],
    "specs": [
      [
        "Type",
        "Utility work machine"
      ],
      [
        "Attachment System",
        "Bob-Tach quick-attach"
      ],
      [
        "Drivetrain",
        "All-wheel drive"
      ],
      [
        "Cargo",
        "Tipping cargo bed"
      ],
      [
        "Use",
        "Property, farm & site work"
      ],
      [
        "Origin",
        "USA"
      ]
    ],
    "features": [
      "Runs loader attachments",
      "Cargo bed for hauling",
      "Comfortable cab option",
      "Powered front lift arm"
    ],
    "hp": null,
    "priceFrom": null,
    "condition": "new",
    "availability": "enquire",
    "featured": false
  }
];

  var testimonials = [
  {
    "quote": "The team's product knowledge made buying our first tractor easy. The after-sales support has been genuinely excellent — they pick up the phone and actually help.",
    "name": "Michael R.",
    "role": "Lifestyle farmer",
    "location": "Ballarat, VIC",
    "rating": 5
  },
  {
    "quote": "Booked our McCormick in for a service and it was back working the same week. Factory-trained, genuine parts, no fuss. Exactly what you want from a local dealer.",
    "name": "Sarah T.",
    "role": "Mixed farming",
    "location": "Creswick, VIC",
    "rating": 5
  },
  {
    "quote": "Sound advice and great support. They understood our contracting workload and matched us to the right machine and finance. Highly recommend Prestige.",
    "name": "David P.",
    "role": "Agricultural contractor",
    "location": "Buninyong, VIC",
    "rating": 5
  },
  {
    "quote": "Genuine parts in stock when I needed them and a workshop that knows these machines inside out. The local support team is the reason we keep coming back.",
    "name": "Janet M.",
    "role": "Cattle & hay",
    "location": "Daylesford, VIC",
    "rating": 5
  }
];

  var articles = [
  {
    "slug": "bobcat-package-special",
    "type": "Special",
    "title": "Limited-Time Bobcat Package — $30,250 inc GST",
    "date": "20 May 2026",
    "photoId": "1530267981375-f0de937f5f13",
    "featured": true,
    "excerpt": "Our partners at Bobcat are offering a remarkable deal on a complete tractor + implement package. Get in quick — this won't last.",
    "cta": {
      "label": "Enquire Now",
      "href": "product.html?slug=26hp-hobby-farm-hero"
    }
  },
  {
    "slug": "get-hay-season-ready",
    "type": "News",
    "title": "Get Hay Season Ready with Enorossi",
    "date": "28 Apr 2026",
    "photoId": "1560493676-04071c5f467b",
    "excerpt": "Mowers, rakes, balers and wrappers in stock now. Book a pre-season service and walk into the season with confidence.",
    "cta": {
      "label": "Shop Hay Equipment",
      "href": "category.html?cat=hay-equipment"
    }
  },
  {
    "slug": "competitive-finance-new-used",
    "type": "Special",
    "title": "Competitive Finance on New & Used Machinery",
    "date": "10 Apr 2026",
    "photoId": "1591696205602-2f950c417cb9",
    "excerpt": "We can arrange finance for both new and used machinery at competitive interest rates — tailored to farming, horticulture, government and business.",
    "cta": {
      "label": "Finance Enquiry",
      "href": "finance.html"
    }
  },
  {
    "slug": "factory-trained-servicing",
    "type": "News",
    "title": "Keep Your Equipment Working Hard",
    "date": "15 Mar 2026",
    "photoId": "1504328345606-18bbc8c9d7d1",
    "excerpt": "Our factory-trained technicians keep your equipment in peak operating condition — scheduled servicing, genuine parts and mobile support.",
    "cta": {
      "label": "Book a Service",
      "href": "service.html#book"
    }
  }
];

  var team = [
  {
    "name": "Danny",
    "role": "The Tractor Guy — Owner",
    "initials": "D",
    "bio": "A local Ballarat tractor bloke who's been on the land himself. Danny personally knows every machine on the lot and will talk you through the right one for your place — 7 days a week."
  },
  {
    "name": "Sales Team",
    "role": "New & Used Machinery",
    "initials": "S",
    "bio": "Matching farmers, contractors and businesses with the right machine and the right finance — across McCormick, Landini, Bobcat, Mahindra and the full implement range."
  },
  {
    "name": "Parts Department",
    "role": "Genuine Spare Parts",
    "initials": "P",
    "bio": "Fully equipped to assist with all enquiries for McCormick, Daken, Grasshopper, Enorossi and Bobcat spare parts — genuine components, expert advice."
  },
  {
    "name": "Service Workshop",
    "role": "Factory-Trained Technicians",
    "initials": "W",
    "bio": "Excellent product knowledge, workmanship and support — the backbone of Prestige Tractors. Scheduled servicing, repairs and field support."
  }
];

  w.PT = {
    img: img, asset: enc, PHOTO: PHOTO, site: site, trust: trust, brands: brands, categories: categories,
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
