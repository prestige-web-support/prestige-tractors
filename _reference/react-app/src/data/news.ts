import { PHOTO_IDS } from "@/lib/images";

/**
 * Latest News & Specials. The Bobcat package promotion is sourced from the
 * live site's Latest News & Specials page; the remainder are representative
 * dealership news/specials entries.
 */
export type Article = {
  id: string;
  slug: string;
  type: "Special" | "News" | "Event";
  title: string;
  excerpt: string;
  body: string[];
  date: string; // ISO
  dateLabel: string;
  photoId: string;
  cta?: { label: string; href: string };
  featured?: boolean;
  sourced?: boolean;
};

export const articles: Article[] = [
  {
    id: "bobcat-package-special",
    slug: "bobcat-package-special",
    type: "Special",
    title: "Limited-Time Bobcat Package — $30,250 inc GST",
    excerpt:
      "Our partners at Bobcat are offering a remarkable deal on a complete tractor + implement package. Get in quick — this won't last.",
    body: [
      "Our partners at Bobcat are currently offering a remarkable deal on a complete compact tractor and implement package.",
      "Take on everything from mowing and slashing to lifting, towing and general property maintenance — all in one ready-to-work bundle, ideal for hobby farms and lifestyle blocks.",
      "All this for only $30,250 inc GST. Get in quick — contact our sales team today to secure yours while stock lasts.",
    ],
    date: "2026-05-20",
    dateLabel: "20 May 2026",
    photoId: PHOTO_IDS.tractorHarvest,
    cta: { label: "Enquire Now", href: "/equipment/product/26hp-hobby-farm-hero" },
    featured: true,
    sourced: true,
  },
  {
    id: "hay-season-ready",
    slug: "get-hay-season-ready",
    type: "News",
    title: "Get Hay Season Ready with Enorossi",
    excerpt:
      "Mowers, rakes, balers and wrappers in stock now. Book a pre-season service and walk into the season with confidence.",
    body: [
      "Hay season waits for no one. Our Enorossi range — mowers, rakes, balers and wrappers — is in stock and ready to go.",
      "Book a pre-season service for your existing gear now to avoid the rush, and talk to our team about completing your hay chain with the world-leading Enorossi forage range.",
    ],
    date: "2026-04-28",
    dateLabel: "28 Apr 2026",
    photoId: PHOTO_IDS.cropRowsGolden,
    cta: { label: "Shop Hay Equipment", href: "/equipment/category/hay-equipment" },
  },
  {
    id: "finance-offer",
    slug: "competitive-finance-new-used",
    type: "Special",
    title: "Competitive Finance on New & Used Machinery",
    excerpt:
      "We can arrange finance for both new and used machinery at competitive interest rates — tailored to farming, horticulture, government and business.",
    body: [
      "We can arrange finance for both new and used machinery with competitive interest rates.",
      "Whether you're a farmer, contractor, horticulturalist, government department or business, our team can structure finance to suit your cash flow and seasonal income.",
      "Talk to us about chattel mortgage, equipment loans and end-of-financial-year opportunities.",
    ],
    date: "2026-04-10",
    dateLabel: "10 Apr 2026",
    photoId: PHOTO_IDS.financeChart,
    cta: { label: "Finance Enquiry", href: "/finance" },
  },
  {
    id: "factory-trained-service",
    slug: "factory-trained-servicing",
    type: "News",
    title: "Keep Your Equipment Working Hard",
    excerpt:
      "Our factory-trained technicians keep your equipment in peak operating condition — scheduled servicing, genuine parts and mobile support.",
    body: [
      "Excellent product knowledge, workmanship and support is the backbone of Prestige Tractors.",
      "Our factory-trained technicians understand the importance of knowing how your machine operates. From scheduled servicing to genuine parts and field support, we keep your equipment working hard.",
    ],
    date: "2026-03-15",
    dateLabel: "15 Mar 2026",
    photoId: PHOTO_IDS.welderSparks,
    cta: { label: "Book a Service", href: "/service" },
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
