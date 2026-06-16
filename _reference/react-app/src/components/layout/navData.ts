import { ROUTES } from "@/data/navigation";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { PHOTO_IDS } from "@/lib/images";
import type { IconName } from "@/components/ui/Icon";

export type MenuKind = "equipment" | "brands" | "sales" | null;

export type SimpleLink = { label: string; href: string };

export type TopNavItem = {
  label: string;
  href: string;
  menu?: MenuKind;
};

/** Desktop / mobile top-level navigation. */
export const topNav: TopNavItem[] = [
  { label: "Equipment", href: ROUTES.equipment, menu: "equipment" },
  { label: "Brands", href: ROUTES.equipment, menu: "brands" },
  { label: "Sales & Service", href: ROUTES.service, menu: "sales" },
  { label: "Finance", href: ROUTES.finance },
  { label: "About", href: ROUTES.about },
  { label: "News", href: ROUTES.news },
  { label: "Contact", href: ROUTES.contact },
];

/** Equipment mega — categories + a featured promo tile. */
export const equipmentMenu = {
  categories: categories.map((c) => ({
    label: c.name,
    href: ROUTES.category(c.slug),
    blurb: c.blurb,
    icon: c.icon as IconName,
  })),
  feature: {
    eyebrow: "Featured",
    title: "Browse the full catalogue",
    body: "Filter by category, brand, horsepower and price across our complete range.",
    href: ROUTES.equipment,
    cta: "View all equipment",
    photoId: PHOTO_IDS.tractorHarvest,
  },
};

/** Brands mega — grid of brand quick links. */
export const brandsMenu = brands.map((b) => ({
  label: b.name,
  href: ROUTES.brand(b.slug),
  category: b.category,
  origin: b.origin,
}));

/** Sales & Service mega — two columns + feature. */
export const salesMenu: { columns: { heading: string; links: (SimpleLink & { icon: IconName })[] }[]; feature: { eyebrow: string; title: string; body: string; href: string; cta: string; photoId: string } } = {
  columns: [
    {
      heading: "Sales",
      links: [
        { label: "New & Used Machinery", href: ROUTES.equipment, icon: "Tractor" },
        { label: "Finance Options", href: ROUTES.finance, icon: "Banknote" },
        { label: "Latest Specials", href: ROUTES.news, icon: "Sparkles" },
      ],
    },
    {
      heading: "Service & Parts",
      links: [
        { label: "Service Centre", href: ROUTES.service, icon: "Wrench" },
        { label: "Book a Service", href: `${ROUTES.service}#book`, icon: "Calendar" },
        { label: "Spare Parts", href: ROUTES.parts, icon: "Settings" },
        { label: "Fleet Maintenance", href: ROUTES.fleet, icon: "Truck" },
      ],
    },
  ],
  feature: {
    eyebrow: "Workshop",
    title: "Factory-trained servicing",
    body: "Keep your equipment working hard with genuine parts and expert technicians.",
    href: `${ROUTES.service}#book`,
    cta: "Book a service",
    photoId: PHOTO_IDS.welderSparks,
  },
};
