import { PHOTO_IDS } from "@/lib/images";

/**
 * The five equipment categories surfaced on the homepage and used to organise
 * the catalogue. `icon` maps to a lucide-react icon name resolved in the UI.
 */
export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  blurb: string;
  description: string;
  photoId: string;
  brands: string[];
};

export const categories: Category[] = [
  {
    id: "tractors",
    name: "Tractors",
    slug: "tractors",
    icon: "Tractor",
    blurb: "Compact, utility & high-horsepower",
    description:
      "From 26hp lifestyle machines to 200+hp broadacre workhorses. Compact Bobcat tractors, value-driven Mahindra utility models and Italian-built McCormick power — all backed by local parts and servicing.",
    photoId: PHOTO_IDS.tractorHarvest,
    brands: ["bobcat", "mccormick", "mahindra"],
  },
  {
    id: "hay-equipment",
    name: "Hay Equipment",
    slug: "hay-equipment",
    icon: "Wheat",
    blurb: "Mowers, rakes, balers & wrappers",
    description:
      "Make better hay with Enorossi's world-leading forage range — disc and drum mowers, rotary rakes, tedders, round balers and bale wrappers engineered for clean, efficient harvest.",
    photoId: PHOTO_IDS.cropRowsGolden,
    brands: ["enorossi"],
  },
  {
    id: "sprayers",
    name: "Spraying Equipment",
    slug: "sprayers",
    icon: "SprayCan",
    blurb: "Sprayers, tanks & pumps",
    description:
      "Australian-made RapidSpray tanks, pumps and field sprayers for spot spraying, boom application and water cartage — built for reliable chemical and liquid handling on any property.",
    photoId: PHOTO_IDS.greenFieldSunset,
    brands: ["rapidspray"],
  },
  {
    id: "attachments",
    name: "Attachments",
    slug: "attachments",
    icon: "Cog",
    blurb: "Implements & 3-point linkage gear",
    description:
      "Match your tractor to the task with DakenAg implements, Muratori cultivation tooling and Orsi mulchers — slashers, tillers, post-hole diggers, carry-alls and front-end loaders.",
    photoId: PHOTO_IDS.engineBelts,
    brands: ["dakenag", "muratori", "orsi"],
  },
  {
    id: "utility",
    name: "Utility Equipment",
    slug: "utility",
    icon: "Mountain",
    blurb: "Mowers & property maintenance",
    description:
      "Keep acreage and commercial grounds immaculate with Grasshopper zero-turn mowers and utility packages for mowing, slashing, towing and all-round property maintenance.",
    photoId: PHOTO_IDS.soilScoop,
    brands: ["grasshopper", "dakenag"],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
