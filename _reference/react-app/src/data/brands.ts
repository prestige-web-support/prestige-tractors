/**
 * Brand partners represented by Prestige Tractors.
 * The 7 `featured` brands appear in the homepage brand showcase; all 9 appear
 * on the About page and in the Brands mega-menu. Wordmark styling is rendered
 * typographically by <BrandWordmark/> (no third-party logo assets required).
 */

export type Brand = {
  id: string;
  name: string;
  slug: string;
  origin: string;
  category: string;
  tagline: string;
  description: string;
  featured: boolean;
  /** Typographic treatment hints for the wordmark component. */
  wordmark: {
    weight: 400 | 500 | 600 | 700 | 800 | 900;
    case: "upper" | "normal";
    tracking: "tight" | "normal" | "wide";
    italic?: boolean;
  };
};

export const brands: Brand[] = [
  {
    id: "mccormick",
    name: "McCormick",
    slug: "mccormick",
    origin: "Italy",
    category: "Tractors",
    tagline: "Heritage horsepower, engineered in Italy.",
    description:
      "Italian-built utility and high-horsepower tractors with a heritage stretching back over a century. The X7, D-MAX and S-MAX ranges pair refined cab comfort with serious pulling power for broadacre and mixed farming.",
    featured: true,
    wordmark: { weight: 800, case: "upper", tracking: "tight" },
  },
  {
    id: "bobcat",
    name: "Bobcat",
    slug: "bobcat",
    origin: "USA",
    category: "Compact Tractors",
    tagline: "Compact power that finishes the job.",
    description:
      "American-engineered compact tractors built to move from one chore to the next. The CT range comes standard with four-wheel drive and rear PTO — ideal for properties, contractors and hobby farms alike.",
    featured: true,
    wordmark: { weight: 800, case: "normal", tracking: "tight", italic: true },
  },
  {
    id: "mahindra",
    name: "Mahindra",
    slug: "mahindra",
    origin: "India",
    category: "Tractors",
    tagline: "The world's highest-selling tractor brand.",
    description:
      "Globally the number-one selling tractor by volume — renowned for rugged reliability, simple serviceability and exceptional value across utility and small-farm applications.",
    featured: true,
    wordmark: { weight: 700, case: "normal", tracking: "normal" },
  },
  {
    id: "dakenag",
    name: "DakenAg",
    slug: "dakenag",
    origin: "Australia",
    category: "Implements & Attachments",
    tagline: "Australian-made, paddock-proven.",
    description:
      "Australian-manufactured implements and attachments engineered for local conditions — slashers, carry-alls, post-hole diggers and 3-point-linkage gear built tough for our soils.",
    featured: true,
    wordmark: { weight: 700, case: "upper", tracking: "normal" },
  },
  {
    id: "enorossi",
    name: "Enorossi",
    slug: "enorossi",
    origin: "Italy",
    category: "Hay & Forage Equipment",
    tagline: "A world leader in hay equipment.",
    description:
      "Italian hay and forage specialists positioned as a worldwide leader in their field. The range spans mowers, rakes, tedders, balers and bale wrappers for efficient, clean forage handling.",
    featured: true,
    wordmark: { weight: 600, case: "normal", tracking: "normal", italic: true },
  },
  {
    id: "rapidspray",
    name: "RapidSpray",
    slug: "rapidspray",
    origin: "Australia",
    category: "Sprayers & Pumps",
    tagline: "Australian spraying & water-handling specialists.",
    description:
      "Australian-made spray tanks, pumps, field sprayers and liquid-handling solutions trusted for spot spraying, boom application and on-farm water cartage.",
    featured: true,
    wordmark: { weight: 700, case: "normal", tracking: "tight" },
  },
  {
    id: "grasshopper",
    name: "Grasshopper",
    slug: "grasshopper",
    origin: "USA",
    category: "Zero-Turn Mowers",
    tagline: "The original zero-turn mower.",
    description:
      "American-built zero-turn mowers engineered for professional-grade cut quality, manoeuvrability and all-day operator comfort on acreage and commercial grounds.",
    featured: true,
    wordmark: { weight: 800, case: "upper", tracking: "tight", italic: true },
  },
  {
    id: "orsi",
    name: "Orsi",
    slug: "orsi",
    origin: "Italy",
    category: "Mulchers & Flail Mowers",
    tagline: "Italian mulching & verge-mowing engineering.",
    description:
      "Italian manufacturer of flail mowers, mulchers and verge-mowing equipment for roadside, orchard and heavy vegetation management.",
    featured: false,
    wordmark: { weight: 700, case: "upper", tracking: "wide" },
  },
  {
    id: "muratori",
    name: "Muratori",
    slug: "muratori",
    origin: "Italy",
    category: "Rotary Tillers & Cultivation",
    tagline: "Precision soil preparation since 1968.",
    description:
      "Italian specialists in rotary tillers, power harrows and seedbed-preparation equipment — precision cultivation tooling for horticulture and broadacre alike.",
    featured: false,
    wordmark: { weight: 600, case: "normal", tracking: "normal", italic: true },
  },
];

export const featuredBrands = brands.filter((b) => b.featured);

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
