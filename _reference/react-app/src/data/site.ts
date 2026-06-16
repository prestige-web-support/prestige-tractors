/**
 * Business facts — sourced verbatim from the Prestige Tractors site crawl.
 * Single source of truth for NAP (name / address / phone), hours and group.
 */
export const site = {
  name: "Prestige Tractors",
  locality: "Ballarat",
  fullName: "Prestige Tractors Ballarat",
  tagline: "Victoria's Trusted Agricultural Equipment Partner",
  parentGroup: "Goad Group",
  phone: "(03) 5339 2056",
  phoneHref: "tel:+61353392056",
  email: "sales@goadgroup.com.au",
  emailHref: "mailto:sales@goadgroup.com.au",
  address: {
    street: "206 Burnbank Street",
    suburb: "Wendouree",
    state: "Victoria",
    stateShort: "VIC",
    postcode: "3355",
    country: "Australia",
  },
  addressLine: "206 Burnbank Street, Wendouree, Victoria 3355",
  mapsQuery: "206+Burnbank+Street+Wendouree+VIC+3355",
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  yearsExperience: 20,
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#",
  },
  sectorsServed: [
    "Government",
    "Farming",
    "Horticulture",
    "Contracting",
    "Viticulture",
    "Lifestyle & Hobby Farms",
  ],
} as const;

/** Trust signals surfaced repeatedly across the site. */
export const trustPoints = [
  {
    icon: "Award",
    title: "20+ Years Industry Experience",
    body: "Decades of hands-on knowledge supporting local Australian farming and business.",
  },
  {
    icon: "Wrench",
    title: "Factory Trained Technicians",
    body: "Brand-certified expertise keeping your equipment performing at its peak.",
  },
  {
    icon: "ShieldCheck",
    title: "Genuine Spare Parts",
    body: "We carry and stock genuine parts for reliability and complete peace of mind.",
  },
  {
    icon: "MapPin",
    title: "Local Victorian Support",
    body: "A dedicated local team and after-sales support team right when you need it.",
  },
] as const;
