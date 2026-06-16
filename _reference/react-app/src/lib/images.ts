/**
 * Centralised image library.
 *
 * Every photographic asset on the site is referenced from here so the
 * dealership can swap in its own professional photography in one place.
 * URLs point at the Unsplash CDN (royalty-free) and were hand-verified for
 * agricultural subject matter. The `photo()` helper applies consistent
 * sizing / quality / crop parameters and lets us request responsive widths.
 *
 * → To use real Prestige Tractors photography, replace the IDs below (or
 *   swap `photo()` to return `/images/...` local paths).
 */

const BASE = "https://images.unsplash.com/photo-";

type PhotoOpts = { w?: number; h?: number; q?: number };

export function photo(id: string, { w = 1600, h, q = 72 }: PhotoOpts = {}): string {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(w),
    q: String(q),
  });
  if (h) params.set("h", String(h));
  return `${BASE}${id}?${params.toString()}`;
}

/** Raw verified Unsplash IDs, grouped by intent. */
export const PHOTO_IDS = {
  // Cinematic / hero
  goldenFieldSunset: "1500382017468-9049fed747ef",
  tractorHarvest: "1530267981375-f0de937f5f13",
  tractorPaddy: "1574943320219-553eb213f72d",
  greenFieldSunset: "1620200423727-8127f75d7f53",
  cropRowsGolden: "1560493676-04071c5f467b",
  aerialCrops: "1592982537447-7440770cbfc9",

  // Workshop / service / parts
  welderSparks: "1504328345606-18bbc8c9d7d1",
  oilService: "1487754180451-c456f719a1fc",
  toolWall: "1530124566582-a618bc2615dc",
  engineBelts: "1486262715619-67b85e0b08d3",

  // Crops / sectors
  fieldWorkers: "1605000797499-95a51c5269ae",
  cornSeedlings: "1625246333195-78d9c38ad449",
  vegetables: "1464226184884-fa280b87c399",
  sheepAerial: "1517022812141-23620dba5c23",
  soilScoop: "1416879595882-3373a0480b5b",
  forestRoad: "1473773508845-188df298d2d1",

  // Finance / team
  financeChart: "1591696205602-2f950c417cb9",
  teamMeeting: "1572021335469-31706a17aaef",
} as const;

export type PhotoKey = keyof typeof PHOTO_IDS;

/** Convenience: resolve a named photo to a sized URL. */
export function img(key: PhotoKey, opts?: PhotoOpts): string {
  return photo(PHOTO_IDS[key], opts);
}
