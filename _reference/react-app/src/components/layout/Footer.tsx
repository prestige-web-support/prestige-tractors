import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { ROUTES } from "@/data/navigation";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Equipment",
    links: [
      { label: "All Equipment", href: ROUTES.equipment },
      ...categories.slice(0, 5).map((c) => ({ label: c.name, href: ROUTES.category(c.slug) })),
    ],
  },
  {
    heading: "Brands",
    links: brands.slice(0, 7).map((b) => ({ label: b.name, href: ROUTES.brand(b.slug) })),
  },
  {
    heading: "Sales & Service",
    links: [
      { label: "Service Centre", href: ROUTES.service },
      { label: "Spare Parts", href: ROUTES.parts },
      { label: "Finance", href: ROUTES.finance },
      { label: "Fleet Maintenance", href: ROUTES.fleet },
      { label: "Latest News & Specials", href: ROUTES.news },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: ROUTES.about },
      { label: "Contact Us", href: ROUTES.contact },
      { label: "Disclaimer", href: ROUTES.disclaimer },
    ],
  },
];

const socials: { icon: IconName; href: string; label: string }[] = [
  { icon: "Facebook", href: site.social.facebook, label: "Facebook" },
  { icon: "Instagram", href: site.social.instagram, label: "Instagram" },
  { icon: "Youtube", href: site.social.youtube, label: "YouTube" },
  { icon: "Linkedin", href: site.social.linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-fg/5 bg-ink-900">
      <div className="pointer-events-none absolute -left-40 top-0 size-[28rem] glow-brand opacity-30" />

      {/* CTA band */}
      <Container>
        <div className="surface relative -mb-px grid gap-8 rounded-2xl border-fg/10 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center"
          style={{ marginTop: "-5rem" }}
        >
          <div>
            <span className="eyebrow mb-3">Ready when you are</span>
            <h3 className="text-2xl font-extrabold text-fg sm:text-3xl">
              Talk to Victoria's trusted equipment team
            </h3>
            <p className="mt-3 max-w-xl text-ink-200">
              Whether you're buying, financing, servicing or sourcing parts — our local team is here to help your operation keep moving.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button to={ROUTES.contact} icon="ArrowRight" fullWidth>Enquire Now</Button>
            <Button href={site.phoneHref} variant="secondary" icon="PhoneCall" iconPosition="left" fullWidth>
              {site.phone}
            </Button>
          </div>
        </div>
      </Container>

      <Container className="pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2.5fr]">
          {/* Brand + NAP */}
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              {site.fullName} — your local dealer for McCormick, Bobcat & Mahindra tractors, Enorossi hay equipment, DakenAg, RapidSpray and Grasshopper. Proudly part of the {site.parentGroup}.
            </p>

            <ul className="mt-7 space-y-3 text-sm">
              <li className="flex items-start gap-3 text-ink-200">
                <Icon name="MapPin" className="mt-0.5 size-4 shrink-0 text-brand-400" />
                {site.addressLine}
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 text-ink-200 hover:text-fg">
                  <Icon name="PhoneCall" className="size-4 shrink-0 text-brand-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-center gap-3 text-ink-200 hover:text-fg">
                  <Icon name="Mail" className="size-4 shrink-0 text-brand-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink-200">
                <Icon name="Clock" className="mt-0.5 size-4 shrink-0 text-brand-400" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: <span className="text-ink-100">{h.time}</span>
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            <div className="mt-7 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full border border-fg/10 text-ink-300 transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  <Icon name={s.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-fg">{col.heading}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.href} className="text-sm text-ink-300 transition-colors hover:text-fg">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-4 pb-10 text-center text-xs text-ink-400 sm:flex-row sm:text-left">
          <p>
            © {2026} {site.fullName}. A {site.parentGroup} company. All rights reserved.
          </p>
          <p className="max-w-xl text-ink-500">
            Specifications, pricing and availability are indicative and subject to change. Images may include optional equipment. E&amp;OE.
          </p>
        </div>
      </Container>
    </footer>
  );
}
