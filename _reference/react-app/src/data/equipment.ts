import { PHOTO_IDS } from "@/lib/images";

/**
 * Equipment catalogue.
 *
 * Products marked `sourced: true` are taken directly from the live Prestige
 * Tractors site (names, hp and headline copy verified from the crawl). The
 * remaining models represent a realistic multi-brand dealership inventory so
 * the catalogue, filtering and category pages are fully populated — their
 * detailed specifications are representative and should be confirmed against
 * current supplier data before publishing.
 */

export type Condition = "new" | "used";
export type Availability = "in-stock" | "enquire" | "arriving";

export type Spec = { label: string; value: string };

export type Product = {
  id: string;
  name: string;
  slug: string;
  brand: string; // brand slug
  category: string; // category slug
  hp: number | null;
  priceFrom: number | null;
  priceNote?: string;
  condition: Condition;
  availability: Availability;
  tagline: string;
  summary: string;
  description: string;
  highlights: string[];
  specs: Spec[];
  features: string[];
  photoId: string;
  badges?: string[];
  featured?: boolean;
  sourced?: boolean;
};

export const products: Product[] = [
  // ───────────────────────────── TRACTORS ─────────────────────────────
  {
    id: "bobcat-ct4055",
    name: "Bobcat CT4055",
    slug: "bobcat-ct4055-55hp",
    brand: "bobcat",
    category: "tractors",
    hp: 55,
    priceFrom: 42990,
    condition: "new",
    availability: "in-stock",
    tagline: "Heavy-duty compact, ready for the next chore.",
    summary:
      "The CT4055 compact tractor allows operators to finish one chore after the next. A heavy-duty work companion that comes standard with rear PTO and four-wheel drive.",
    description:
      "Built for operators who never stop moving, the Bobcat CT4055 is a heavy-duty compact tractor engineered to take on loader work, mowing, slashing, tilling and towing without breaking stride. Standard four-wheel drive and a rear PTO mean it's ready to work the moment it arrives — and with genuine parts and factory-trained servicing through Prestige Tractors, it stays that way.",
    highlights: [
      "55hp turbo-diesel engine",
      "Four-wheel drive standard",
      "Rear PTO standard",
      "Heavy-duty front loader ready",
    ],
    specs: [
      { label: "Engine Power", value: "55 hp" },
      { label: "Drivetrain", value: "4WD (standard)" },
      { label: "PTO", value: "Rear PTO, 540 rpm" },
      { label: "Transmission", value: "Hydrostatic, 3-range" },
      { label: "Lift Capacity", value: "1,200 kg (rear)" },
      { label: "Category", value: "Compact utility tractor" },
    ],
    features: [
      "Spacious operator platform with ergonomic controls",
      "Quick-attach front-end loader compatibility",
      "Category 1 three-point linkage",
      "Tight turning radius for confined work",
    ],
    photoId: PHOTO_IDS.tractorHarvest,
    badges: ["Best Seller"],
    featured: true,
    sourced: true,
  },
  {
    id: "bobcat-ct2035",
    name: "Bobcat CT2035",
    slug: "bobcat-ct2035-35hp",
    brand: "bobcat",
    category: "tractors",
    hp: 35,
    priceFrom: 31490,
    condition: "new",
    availability: "in-stock",
    tagline: "The performance and power to tackle any task.",
    summary:
      "The CT2035 delivers the performance and power you need to tackle loader and implement work. Standard four-wheel drive makes this a confident all-rounder.",
    description:
      "The Bobcat CT2035 hits the sweet spot for properties and small farms that need genuine capability without the bulk. With standard four-wheel drive and strong hydraulics, it handles loader duties, implement work and day-to-day property maintenance with ease.",
    highlights: [
      "35hp diesel engine",
      "Four-wheel drive standard",
      "Loader & implement ready",
      "Compact, manoeuvrable footprint",
    ],
    specs: [
      { label: "Engine Power", value: "35 hp" },
      { label: "Drivetrain", value: "4WD (standard)" },
      { label: "PTO", value: "Rear PTO, 540 rpm" },
      { label: "Transmission", value: "Hydrostatic, 3-range" },
      { label: "Lift Capacity", value: "900 kg (rear)" },
      { label: "Category", value: "Compact utility tractor" },
    ],
    features: [
      "Easy-operate hydrostatic transmission",
      "Loader-ready hydraulics",
      "Comfortable, low-vibration operator station",
      "Excellent visibility to implement",
    ],
    photoId: PHOTO_IDS.tractorPaddy,
    featured: true,
    sourced: true,
  },
  {
    id: "bobcat-26hp-hobby-farm-hero",
    name: "26hp Hobby Farm Hero",
    slug: "26hp-hobby-farm-hero",
    brand: "bobcat",
    category: "tractors",
    hp: 26,
    priceFrom: 30250,
    priceNote: "Package price inc GST",
    condition: "new",
    availability: "in-stock",
    tagline: "The ideal package for lifestyle blocks.",
    summary:
      "Take on everything from mowing and slashing to lifting, towing and general property maintenance with the 26hp Bobcat® Tractor + Implement Package — the ideal hobby-farm all-rounder.",
    description:
      "Purpose-built for lifestyle blocks and hobby farms, the 26hp Hobby Farm Hero bundles a capable Bobcat compact tractor with the essential implements to get started straight away. Mow, slash, lift, tow and maintain your property with one machine — sold as a value-driven, ready-to-work package.",
    highlights: [
      "26hp Bobcat tractor + implement package",
      "Front-end loader included",
      "Slasher & implements bundled",
      "Ideal for hobby & lifestyle farms",
    ],
    specs: [
      { label: "Engine Power", value: "26 hp" },
      { label: "Drivetrain", value: "4WD" },
      { label: "PTO", value: "Rear PTO, 540 rpm" },
      { label: "Package", value: "Tractor + loader + implements" },
      { label: "Best For", value: "Hobby & lifestyle farms" },
      { label: "Transmission", value: "Hydrostatic" },
    ],
    features: [
      "Complete start-to-work implement bundle",
      "Easy operation for new operators",
      "Compact and easy to store",
      "Genuine parts & local servicing included",
    ],
    photoId: PHOTO_IDS.soilScoop,
    badges: ["Package Deal"],
    featured: true,
    sourced: true,
  },
  {
    id: "mccormick-x7",
    name: "McCormick X7",
    slug: "mccormick-x7",
    brand: "mccormick",
    category: "tractors",
    hp: 175,
    priceFrom: null,
    condition: "new",
    availability: "enquire",
    tagline: "Italian high-horsepower for serious work.",
    summary:
      "The McCormick X7 brings refined cab comfort and high-horsepower performance to broadacre and mixed farming. Contact Prestige Tractors Ballarat for details.",
    description:
      "The McCormick X7 series is built for operators who demand power, efficiency and all-day comfort. With a premium cab, advanced transmission options and the pulling power for heavy tillage and transport, the X7 is a true broadacre performer. Pricing and configuration are tailored to your operation — enquire with our team today.",
    highlights: [
      "High-horsepower 6-cylinder power",
      "Premium suspended cab comfort",
      "Advanced transmission options",
      "Built for broadacre & mixed farming",
    ],
    specs: [
      { label: "Engine Power", value: "150–175 hp class" },
      { label: "Engine", value: "6-cylinder turbo-diesel" },
      { label: "Drivetrain", value: "4WD" },
      { label: "Transmission", value: "Powershift / CVT options" },
      { label: "Cab", value: "Premium suspended cab" },
      { label: "Origin", value: "Italy" },
    ],
    features: [
      "Spacious climate-controlled cab",
      "High-flow hydraulics for demanding implements",
      "Front linkage & PTO options",
      "Precision-farming ready",
    ],
    photoId: PHOTO_IDS.goldenFieldSunset,
    badges: ["Enquire"],
    featured: true,
    sourced: true,
  },
  {
    id: "mccormick-d-max",
    name: "McCormick D-MAX",
    slug: "mccormick-d-max",
    brand: "mccormick",
    category: "tractors",
    hp: 45,
    priceFrom: null,
    condition: "new",
    availability: "enquire",
    tagline: "Versatile utility, Italian-engineered.",
    summary:
      "The McCormick D-MAX is a versatile utility tractor suited to a wide range of tasks. Contact Prestige Tractors Ballarat for more information.",
    description:
      "Compact yet capable, the McCormick D-MAX delivers dependable utility performance for orchards, livestock and mixed properties. Easy to operate and built to last, it's an ideal everyday workhorse. Enquire with our team for specification and pricing.",
    highlights: [
      "Versatile utility performance",
      "Compact, manoeuvrable design",
      "Simple, reliable operation",
      "Orchard & livestock friendly",
    ],
    specs: [
      { label: "Engine Power", value: "40–50 hp class" },
      { label: "Drivetrain", value: "4WD" },
      { label: "PTO", value: "Rear PTO, 540 rpm" },
      { label: "Transmission", value: "Mechanical shuttle" },
      { label: "Origin", value: "Italy" },
      { label: "Category", value: "Utility tractor" },
    ],
    features: [
      "Easy-shift transmission",
      "Tight turning for confined spaces",
      "Loader-ready",
      "Low running costs",
    ],
    photoId: PHOTO_IDS.greenFieldSunset,
    badges: ["Enquire"],
    sourced: true,
  },
  {
    id: "mccormick-s-max",
    name: "McCormick S-MAX",
    slug: "mccormick-s-max",
    brand: "mccormick",
    category: "tractors",
    hp: 75,
    priceFrom: null,
    condition: "new",
    availability: "enquire",
    tagline: "The dependable mid-range all-rounder.",
    summary:
      "The McCormick S-MAX is a dependable mid-range tractor for mixed farming and contracting. Contact Prestige Tractors Ballarat for more information.",
    description:
      "The McCormick S-MAX bridges utility and horsepower, offering a comfortable cab, strong hydraulics and the versatility to handle loader work, tillage and transport. A dependable mid-range all-rounder for working farms.",
    highlights: [
      "Mid-range horsepower",
      "Comfortable operator cab",
      "Strong hydraulic performance",
      "Loader & implement ready",
    ],
    specs: [
      { label: "Engine Power", value: "70–80 hp class" },
      { label: "Drivetrain", value: "4WD" },
      { label: "PTO", value: "Rear PTO, 540/540E" },
      { label: "Transmission", value: "Synchro shuttle" },
      { label: "Origin", value: "Italy" },
      { label: "Category", value: "Mid-range tractor" },
    ],
    features: [
      "Quiet, comfortable cab",
      "High-capacity hydraulics",
      "Versatile across tasks",
      "Proven McCormick driveline",
    ],
    photoId: PHOTO_IDS.cropRowsGolden,
    badges: ["Enquire"],
    sourced: true,
  },
  {
    id: "mccormick-s-max-60-rops",
    name: "McCormick S-MAX 60 ROPS",
    slug: "mccormick-s-max-60-rops",
    brand: "mccormick",
    category: "tractors",
    hp: 60,
    priceFrom: null,
    condition: "new",
    availability: "enquire",
    tagline: "Open-station value with serious capability.",
    summary:
      "The McCormick S-MAX 60 ROPS is an open-station tractor that pairs value with capability. Contact Prestige Tractors Ballarat for more information.",
    description:
      "The S-MAX 60 ROPS delivers genuine working capability in a simple, value-focused open-station (Roll-Over Protective Structure) configuration. Ideal for operators who want McCormick reliability without the cab. Enquire for pricing.",
    highlights: [
      "60hp class performance",
      "ROPS open-station configuration",
      "Excellent value",
      "Simple, robust driveline",
    ],
    specs: [
      { label: "Engine Power", value: "60 hp" },
      { label: "Cab", value: "ROPS (open station)" },
      { label: "Drivetrain", value: "4WD" },
      { label: "PTO", value: "Rear PTO, 540 rpm" },
      { label: "Transmission", value: "Synchro shuttle" },
      { label: "Origin", value: "Italy" },
    ],
    features: [
      "Foldable ROPS for low-clearance work",
      "Loader-ready hydraulics",
      "Low cost of ownership",
      "Robust, field-proven build",
    ],
    photoId: PHOTO_IDS.aerialCrops,
    badges: ["Enquire"],
    sourced: true,
  },
  {
    id: "mahindra-1626",
    name: "Mahindra 1626",
    slug: "mahindra-1626-hst",
    brand: "mahindra",
    category: "tractors",
    hp: 26,
    priceFrom: 27990,
    condition: "new",
    availability: "in-stock",
    tagline: "Rugged value from the world's #1 tractor brand.",
    summary:
      "A rugged, easy-to-own 26hp compact from the world's highest-selling tractor brand — ideal for acreage, loader work and everyday property tasks.",
    description:
      "Backed by Mahindra's reputation for bulletproof reliability and value, the 1626 is a hard-working compact tractor with hydrostatic transmission and loader capability. Simple to operate and economical to run.",
    highlights: [
      "26hp diesel",
      "Hydrostatic transmission",
      "Loader ready",
      "Outstanding value",
    ],
    specs: [
      { label: "Engine Power", value: "26 hp" },
      { label: "Drivetrain", value: "4WD" },
      { label: "PTO", value: "Rear PTO, 540 rpm" },
      { label: "Transmission", value: "Hydrostatic" },
      { label: "Origin", value: "India" },
      { label: "Warranty", value: "Long-coverage powertrain" },
    ],
    features: [
      "Easy hydrostatic operation",
      "Strong loader lift",
      "Comfortable platform",
      "Low cost of ownership",
    ],
    photoId: PHOTO_IDS.fieldWorkers,
  },
  {
    id: "mahindra-6075",
    name: "Mahindra 6075 Cab",
    slug: "mahindra-6075-cab",
    brand: "mahindra",
    category: "tractors",
    hp: 75,
    priceFrom: 58990,
    condition: "new",
    availability: "arriving",
    tagline: "Cabin comfort and dependable utility horsepower.",
    summary:
      "A 75hp utility tractor with air-conditioned cab and strong hydraulics — dependable horsepower for mixed farming at exceptional value.",
    description:
      "The Mahindra 6075 brings air-conditioned cab comfort to genuine utility horsepower. With strong hydraulics and a proven driveline, it's a value-led choice for livestock, hay and mixed-farming operations.",
    highlights: [
      "75hp diesel",
      "Air-conditioned cab",
      "Strong hydraulics",
      "Great value horsepower",
    ],
    specs: [
      { label: "Engine Power", value: "75 hp" },
      { label: "Cab", value: "Air-conditioned cab" },
      { label: "Drivetrain", value: "4WD" },
      { label: "PTO", value: "540/540E rpm" },
      { label: "Transmission", value: "Synchro shuttle" },
      { label: "Origin", value: "India" },
    ],
    features: [
      "Climate-controlled cab",
      "High lift capacity",
      "Loader & implement ready",
      "Economical operation",
    ],
    photoId: PHOTO_IDS.tractorHarvest,
  },

  // ─────────────────────────── HAY EQUIPMENT ───────────────────────────
  {
    id: "enorossi-bfs-mower",
    name: "Enorossi Drum Mower",
    slug: "enorossi-drum-mower",
    brand: "enorossi",
    category: "hay-equipment",
    hp: null,
    priceFrom: 8990,
    condition: "new",
    availability: "in-stock",
    tagline: "Clean, fast cutting from a world hay leader.",
    summary:
      "Italian-built drum mower delivering clean, fast cutting and low maintenance for efficient first-pass hay harvest.",
    description:
      "Enorossi's drum mowers are engineered for clean cutting, high ground speed and minimal maintenance. A dependable first step in the hay chain from a recognised worldwide leader in forage equipment.",
    highlights: [
      "Fast, clean cutting action",
      "Low maintenance design",
      "Robust Italian build",
      "Compact-tractor compatible",
    ],
    specs: [
      { label: "Type", value: "Drum mower" },
      { label: "Cutting Width", value: "1.65 m" },
      { label: "Min. PTO Power", value: "35 hp" },
      { label: "Linkage", value: "3-point, Cat 1/2" },
      { label: "Origin", value: "Italy" },
      { label: "Drive", value: "PTO 540 rpm" },
    ],
    features: [
      "Breakaway protection",
      "Quick blade replacement",
      "Even, clean cut height",
      "Minimal moving parts",
    ],
    photoId: PHOTO_IDS.cropRowsGolden,
  },
  {
    id: "enorossi-rake",
    name: "Enorossi Rotary Rake",
    slug: "enorossi-rotary-rake",
    brand: "enorossi",
    category: "hay-equipment",
    hp: null,
    priceFrom: 7490,
    condition: "new",
    availability: "in-stock",
    tagline: "Consistent, fluffy windrows every pass.",
    summary:
      "Rotary rake producing clean, consistent windrows for faster drying and efficient baling.",
    description:
      "Form clean, well-shaped windrows for faster drying and smoother baling with Enorossi's rotary rake. Adjustable working width and gentle tine action protect leaf quality and keep your hay clean.",
    highlights: [
      "Consistent windrow formation",
      "Gentle on leaf quality",
      "Adjustable working width",
      "Durable tine arms",
    ],
    specs: [
      { label: "Type", value: "Rotary rake" },
      { label: "Working Width", value: "3.4 m" },
      { label: "Min. PTO Power", value: "30 hp" },
      { label: "Tine Arms", value: "10" },
      { label: "Origin", value: "Italy" },
      { label: "Linkage", value: "3-point hitch" },
    ],
    features: [
      "Cam-track tine control",
      "Height-adjustable raking",
      "Transport-friendly fold",
      "Low-maintenance gearbox",
    ],
    photoId: PHOTO_IDS.cornSeedlings,
  },
  {
    id: "enorossi-round-baler",
    name: "Enorossi Round Baler",
    slug: "enorossi-round-baler",
    brand: "enorossi",
    category: "hay-equipment",
    hp: null,
    priceFrom: 24990,
    condition: "new",
    availability: "enquire",
    tagline: "Dense, well-shaped bales with reliable pickup.",
    summary:
      "Reliable fixed-chamber round baler producing dense, well-shaped bales with a smooth, wide pickup.",
    description:
      "Enorossi round balers combine a wide pickup with a proven fixed-chamber design to produce dense, weather-resistant bales. Built to handle a long season with minimal downtime.",
    highlights: [
      "Wide, clean pickup",
      "Dense uniform bales",
      "Net & twine wrap",
      "Season-long durability",
    ],
    specs: [
      { label: "Type", value: "Fixed-chamber round baler" },
      { label: "Bale Size", value: "1.2 m diameter" },
      { label: "Min. PTO Power", value: "55 hp" },
      { label: "Wrap", value: "Net + twine" },
      { label: "Origin", value: "Italy" },
      { label: "Pickup Width", value: "1.8 m" },
    ],
    features: [
      "Heavy-duty pickup tines",
      "Reliable wrap system",
      "In-cab monitor ready",
      "Hardened chamber rollers",
    ],
    photoId: PHOTO_IDS.aerialCrops,
  },
  {
    id: "enorossi-bale-wrapper",
    name: "Enorossi Bale Wrapper",
    slug: "enorossi-bale-wrapper",
    brand: "enorossi",
    category: "hay-equipment",
    hp: null,
    priceFrom: 16990,
    condition: "new",
    availability: "in-stock",
    tagline: "Airtight silage wrapping, every bale.",
    summary:
      "Efficient bale wrapper delivering airtight, high-quality silage wrapping for superior forage preservation.",
    description:
      "Lock in feed quality with Enorossi's bale wrapper — fast, consistent film application for airtight silage every time. Designed for smooth operation and minimal film waste.",
    highlights: [
      "Airtight silage wrap",
      "Fast cycle times",
      "Low film waste",
      "Smooth, reliable operation",
    ],
    specs: [
      { label: "Type", value: "Round bale wrapper" },
      { label: "Bale Size", value: "Up to 1.2 m" },
      { label: "Film Width", value: "750 mm" },
      { label: "Control", value: "Automatic cycle" },
      { label: "Origin", value: "Italy" },
      { label: "Min. PTO Power", value: "40 hp" },
    ],
    features: [
      "Automatic wrap cycle",
      "Gentle bale handling",
      "Adjustable overlap",
      "Tip-off discharge",
    ],
    photoId: PHOTO_IDS.greenFieldSunset,
  },

  // ──────────────────────────── SPRAYERS ───────────────────────────────
  {
    id: "rapidspray-linkage-600",
    name: "RapidSpray Linkage Sprayer 600L",
    slug: "rapidspray-linkage-600l",
    brand: "rapidspray",
    category: "sprayers",
    hp: null,
    priceFrom: 4290,
    condition: "new",
    availability: "in-stock",
    tagline: "Australian-made 3-point linkage spraying.",
    summary:
      "600-litre 3-point linkage sprayer with boom options — Australian-made for reliable broadacre and pasture application.",
    description:
      "RapidSpray's 600L linkage sprayer mounts directly to your tractor's three-point linkage for efficient pasture and broadacre spraying. Australian-made with quality pump and boom options to suit your property.",
    highlights: [
      "600L UV-stabilised tank",
      "Boom & handgun options",
      "Quality diaphragm pump",
      "Australian-made",
    ],
    specs: [
      { label: "Type", value: "3-point linkage sprayer" },
      { label: "Tank", value: "600 L" },
      { label: "Boom", value: "6–8 m options" },
      { label: "Pump", value: "Diaphragm, PTO/12V" },
      { label: "Origin", value: "Australia" },
      { label: "Linkage", value: "Cat 1/2" },
    ],
    features: [
      "UV-stabilised poly tank",
      "Agitation for even mixing",
      "Pressure regulation",
      "Optional handgun reel",
    ],
    photoId: PHOTO_IDS.greenFieldSunset,
  },
  {
    id: "rapidspray-trailed-1000",
    name: "RapidSpray Trailed Field Sprayer 1000L",
    slug: "rapidspray-trailed-1000l",
    brand: "rapidspray",
    category: "sprayers",
    hp: null,
    priceFrom: 9990,
    condition: "new",
    availability: "enquire",
    tagline: "High-capacity trailed boom spraying.",
    summary:
      "1000-litre trailed field sprayer with wide boom for efficient, high-capacity broadacre coverage.",
    description:
      "Cover more ground per fill with RapidSpray's 1000L trailed field sprayer. A wide, stable boom and high-output pump make light work of broadacre application — Australian-built for local conditions.",
    highlights: [
      "1000L capacity",
      "Wide stable boom",
      "High-output pump",
      "Trailed for big areas",
    ],
    specs: [
      { label: "Type", value: "Trailed field sprayer" },
      { label: "Tank", value: "1,000 L" },
      { label: "Boom", value: "10–12 m" },
      { label: "Pump", value: "High-output diaphragm" },
      { label: "Origin", value: "Australia" },
      { label: "Hitch", value: "Drawbar" },
    ],
    features: [
      "Break-back boom ends",
      "Rinse tank included",
      "Pressure control console",
      "Heavy-duty chassis",
    ],
    photoId: PHOTO_IDS.aerialCrops,
  },
  {
    id: "rapidspray-spotpro",
    name: "RapidSpray SpotPro 100L",
    slug: "rapidspray-spotpro-100l",
    brand: "rapidspray",
    category: "sprayers",
    hp: null,
    priceFrom: 1190,
    condition: "new",
    availability: "in-stock",
    tagline: "12V spot spraying for utes & quads.",
    summary:
      "Compact 100-litre 12V spot sprayer with handgun and hose reel — perfect for ute trays, quads and trailers.",
    description:
      "The SpotPro 100L is a go-anywhere 12V spot sprayer for weed control around the property. Mounts to ute trays, trailers and quads with a quality pump, handgun and hose reel ready to work.",
    highlights: [
      "100L compact tank",
      "12V on-demand pump",
      "Handgun + hose reel",
      "Ute / quad / trailer mount",
    ],
    specs: [
      { label: "Type", value: "Spot sprayer" },
      { label: "Tank", value: "100 L" },
      { label: "Pump", value: "12V on-demand" },
      { label: "Hose", value: "15 m on reel" },
      { label: "Origin", value: "Australia" },
      { label: "Mount", value: "Tray / trailer / quad" },
    ],
    features: [
      "Quick-connect handgun",
      "Lockable lid",
      "Sturdy moulded base",
      "Easy-fill design",
    ],
    photoId: PHOTO_IDS.fieldWorkers,
  },

  // ─────────────────────────── ATTACHMENTS ─────────────────────────────
  {
    id: "dakenag-slasher",
    name: "DakenAg Heavy-Duty Slasher",
    slug: "dakenag-slasher",
    brand: "dakenag",
    category: "attachments",
    hp: null,
    priceFrom: 3290,
    condition: "new",
    availability: "in-stock",
    tagline: "Australian-made slashing, paddock-proven.",
    summary:
      "Heavy-duty 3-point linkage slasher built in Australia for pasture topping and property maintenance.",
    description:
      "DakenAg's heavy-duty slasher is built tough for Australian conditions — ideal for pasture topping, weed control and general property maintenance. Robust deck, replaceable blades and reliable gearbox.",
    highlights: [
      "Heavy-duty Australian build",
      "Replaceable swinging blades",
      "Reinforced deck",
      "Reliable gearbox",
    ],
    specs: [
      { label: "Type", value: "Rotary slasher" },
      { label: "Cutting Width", value: "1.8 m" },
      { label: "Min. PTO Power", value: "30 hp" },
      { label: "Linkage", value: "3-point, Cat 1/2" },
      { label: "Origin", value: "Australia" },
      { label: "Gearbox", value: "Heavy-duty PTO" },
    ],
    features: [
      "Swinging blade safety",
      "Adjustable cut height",
      "Slip-clutch protection",
      "Skid runners",
    ],
    photoId: PHOTO_IDS.soilScoop,
  },
  {
    id: "dakenag-post-hole-digger",
    name: "DakenAg Post Hole Digger",
    slug: "dakenag-post-hole-digger",
    brand: "dakenag",
    category: "attachments",
    hp: null,
    priceFrom: 1490,
    condition: "new",
    availability: "in-stock",
    tagline: "Fast, clean post holes for fencing.",
    summary:
      "PTO-driven post hole digger with auger options for fast, clean fencing and planting holes.",
    description:
      "Make short work of fencing and planting with DakenAg's PTO post hole digger. Multiple auger sizes, a robust gearbox and shear-bolt protection make it a reliable property essential.",
    highlights: [
      "PTO-driven auger",
      "Multiple auger sizes",
      "Shear-bolt protection",
      "Robust gearbox",
    ],
    specs: [
      { label: "Type", value: "Post hole digger" },
      { label: "Auger Sizes", value: "200 / 300 / 450 mm" },
      { label: "Min. PTO Power", value: "20 hp" },
      { label: "Linkage", value: "3-point, Cat 1" },
      { label: "Origin", value: "Australia" },
      { label: "Drive", value: "PTO 540 rpm" },
    ],
    features: [
      "Quick auger change",
      "Down-pressure assist",
      "Hardened auger teeth",
      "Shear-bolt safety",
    ],
    photoId: PHOTO_IDS.engineBelts,
  },
  {
    id: "muratori-rotary-tiller",
    name: "Muratori Rotary Tiller",
    slug: "muratori-rotary-tiller",
    brand: "muratori",
    category: "attachments",
    hp: null,
    priceFrom: 5490,
    condition: "new",
    availability: "enquire",
    tagline: "Italian precision seedbed preparation.",
    summary:
      "Italian-engineered rotary tiller for fine, even seedbed preparation in horticulture and broadacre.",
    description:
      "Muratori rotary tillers deliver a fine, even tilth for precise seedbed preparation. Italian-engineered with hardened blades and a robust gearbox for season after season of reliable cultivation.",
    highlights: [
      "Fine, even tilth",
      "Hardened blades",
      "Robust gearbox",
      "Adjustable working depth",
    ],
    specs: [
      { label: "Type", value: "Rotary tiller" },
      { label: "Working Width", value: "1.8 m" },
      { label: "Min. PTO Power", value: "40 hp" },
      { label: "Linkage", value: "3-point, Cat 2" },
      { label: "Origin", value: "Italy" },
      { label: "Rotor", value: "Hardened C-blades" },
    ],
    features: [
      "Side gear drive",
      "Adjustable rear levelling bar",
      "Skid depth control",
      "Slip-clutch driveline",
    ],
    photoId: PHOTO_IDS.cornSeedlings,
  },
  {
    id: "orsi-flail-mulcher",
    name: "Orsi Flail Mulcher",
    slug: "orsi-flail-mulcher",
    brand: "orsi",
    category: "attachments",
    hp: null,
    priceFrom: 6990,
    condition: "new",
    availability: "in-stock",
    tagline: "Heavy vegetation, finely mulched.",
    summary:
      "Italian flail mulcher for verge, orchard and heavy vegetation management with a fine, even finish.",
    description:
      "Orsi flail mulchers handle heavy grass, prunings and verge vegetation with a fine, even mulch finish. Built in Italy for roadside, orchard and vineyard management.",
    highlights: [
      "Heavy vegetation capable",
      "Fine mulch finish",
      "Hydraulic side-shift options",
      "Italian build quality",
    ],
    specs: [
      { label: "Type", value: "Flail mulcher" },
      { label: "Working Width", value: "1.6 m" },
      { label: "Min. PTO Power", value: "45 hp" },
      { label: "Rotor", value: "Hammer flails" },
      { label: "Origin", value: "Italy" },
      { label: "Linkage", value: "3-point, Cat 2" },
    ],
    features: [
      "Balanced flail rotor",
      "Hydraulic offset option",
      "Rear roller depth control",
      "Belt drive with tensioner",
    ],
    photoId: PHOTO_IDS.forestRoad,
  },

  // ────────────────────── UTILITY EQUIPMENT ────────────────────────────
  {
    id: "grasshopper-400d",
    name: "Grasshopper 400D Zero-Turn",
    slug: "grasshopper-400d",
    brand: "grasshopper",
    category: "utility",
    hp: 25,
    priceFrom: 21990,
    condition: "new",
    availability: "in-stock",
    tagline: "The original zero-turn, professional cut.",
    summary:
      "Diesel zero-turn mower delivering professional cut quality, manoeuvrability and all-day operator comfort.",
    description:
      "Grasshopper invented the zero-turn — and the 400D shows why it's still the benchmark. A durable diesel powerplant, precise twin-lever control and a premium cutting deck make light work of acreage and commercial grounds.",
    highlights: [
      "Diesel zero-turn power",
      "Professional cut quality",
      "All-day operator comfort",
      "Tight zero-turn manoeuvrability",
    ],
    specs: [
      { label: "Engine", value: "Diesel, ~25 hp" },
      { label: "Deck", value: '61" / 72" options' },
      { label: "Drive", value: "Dual hydrostatic" },
      { label: "Steering", value: "Zero-turn twin lever" },
      { label: "Origin", value: "USA" },
      { label: "Use", value: "Acreage / commercial" },
    ],
    features: [
      "DuraMax cutting deck",
      "Suspension operator seat",
      "Easy-service design",
      "Optional grass collection",
    ],
    photoId: PHOTO_IDS.cropRowsGolden,
    featured: true,
  },
  {
    id: "grasshopper-900d",
    name: "Grasshopper 900D MidMount",
    slug: "grasshopper-900d-midmount",
    brand: "grasshopper",
    category: "utility",
    hp: 35,
    priceFrom: 32990,
    condition: "new",
    availability: "arriving",
    tagline: "Commercial-grade output, all day long.",
    summary:
      "High-output diesel mid-mount zero-turn built for large acreage and commercial mowing contracts.",
    description:
      "For large properties and commercial contracts, the Grasshopper 900D MidMount pairs serious diesel output with a wide deck and rugged build for productive, comfortable, all-day mowing.",
    highlights: [
      "High-output diesel",
      "Wide commercial deck",
      "Built for big acreage",
      "Rugged commercial build",
    ],
    specs: [
      { label: "Engine", value: "Diesel, ~35 hp" },
      { label: "Deck", value: '72" mid-mount' },
      { label: "Drive", value: "Dual hydrostatic" },
      { label: "Steering", value: "Zero-turn twin lever" },
      { label: "Origin", value: "USA" },
      { label: "Use", value: "Commercial mowing" },
    ],
    features: [
      "Heavy-duty deck spindles",
      "High-back suspension seat",
      "Quick-tilt deck service",
      "Optional cab & attachments",
    ],
    photoId: PHOTO_IDS.sheepAerial,
  },
];

// ── Selectors ──────────────────────────────────────────────────────────
export const featuredProducts = products.filter((p) => p.featured);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function productsByBrand(brandSlug: string): Product[] {
  return products.filter((p) => p.brand === brandSlug);
}

export function relatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.brand === product.brand))
    .filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i)
    .slice(0, limit);
}
