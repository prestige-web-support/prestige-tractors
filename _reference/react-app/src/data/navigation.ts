/**
 * Navigation model — drives the desktop navbar, mega menu and mobile drawer.
 * `mega` items render an expanded panel; `links` render simple dropdowns or
 * top-level links. Routes here are the canonical URL map for the whole app.
 */

export type MegaColumn = {
  heading: string;
  links: { label: string; href: string; note?: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  /** Rich mega-menu panel (Equipment, Brands, Sales & Service). */
  mega?: {
    columns: MegaColumn[];
    feature?: {
      eyebrow: string;
      title: string;
      body: string;
      href: string;
      cta: string;
      image: string;
    };
  };
};

export const ROUTES = {
  home: "/",
  equipment: "/equipment",
  category: (slug: string) => `/equipment/category/${slug}`,
  product: (slug: string) => `/equipment/product/${slug}`,
  brand: (slug: string) => `/equipment?brand=${slug}`,
  service: "/service",
  parts: "/parts",
  finance: "/finance",
  about: "/about",
  contact: "/contact",
  news: "/news",
  fleet: "/fleet-maintenance",
  disclaimer: "/disclaimer",
} as const;
