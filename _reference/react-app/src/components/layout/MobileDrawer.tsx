import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { ROUTES } from "@/data/navigation";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";

type Group = { id: string; label: string; links: { label: string; href: string }[] };

const groups: Group[] = [
  {
    id: "equipment",
    label: "Equipment",
    links: [
      { label: "All Equipment", href: ROUTES.equipment },
      ...categories.map((c) => ({ label: c.name, href: ROUTES.category(c.slug) })),
    ],
  },
  {
    id: "brands",
    label: "Brands",
    links: brands.map((b) => ({ label: b.name, href: ROUTES.brand(b.slug) })),
  },
  {
    id: "sales",
    label: "Sales & Service",
    links: [
      { label: "Service Centre", href: ROUTES.service },
      { label: "Book a Service", href: `${ROUTES.service}#book` },
      { label: "Spare Parts", href: ROUTES.parts },
      { label: "Finance", href: ROUTES.finance },
      { label: "Fleet Maintenance", href: ROUTES.fleet },
    ],
  },
];

const simpleLinks = [
  { label: "About", href: ROUTES.about },
  { label: "News & Specials", href: ROUTES.news },
  { label: "Contact", href: ROUTES.contact },
];

export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>("equipment");

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm xl:hidden"
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-[88%] max-w-sm flex-col border-l border-fg/10 bg-ink-900 xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex items-center justify-between border-b border-fg/5 px-5 py-4">
              <Logo onClick={onClose} />
              <button
                type="button"
                onClick={onClose}
                className="flex size-10 items-center justify-center rounded-full border border-fg/10 text-fg hover:bg-fg/5"
                aria-label="Close menu"
              >
                <Icon name="X" className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {groups.map((g) => {
                  const isOpen = expanded === g.id;
                  return (
                    <div key={g.id} className="border-b border-fg/5">
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : g.id)}
                        className="flex w-full items-center justify-between py-3.5 text-left font-display text-lg font-bold text-fg"
                        aria-expanded={isOpen}
                      >
                        {g.label}
                        <Icon
                          name="ChevronDown"
                          className={cn("size-5 text-ink-400 transition-transform", isOpen && "rotate-180 text-brand-400")}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-0.5 pb-3 pl-1">
                              {g.links.map((l) => (
                                <Link
                                  key={l.href}
                                  to={l.href}
                                  onClick={onClose}
                                  className="rounded-lg px-3 py-2 text-ink-200 hover:bg-fg/5 hover:text-fg"
                                >
                                  {l.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {simpleLinks.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={onClose}
                    className="border-b border-fg/5 py-3.5 font-display text-lg font-bold text-fg"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="border-t border-fg/5 px-5 py-5">
              <ThemeToggle variant="full" className="mb-4" />
              <Button to="/service#book" fullWidth icon="Calendar" iconPosition="left">
                Book a Service
              </Button>
              <a
                href={site.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-ink-100"
              >
                <Icon name="PhoneCall" className="size-4 text-brand-400" />
                {site.phone}
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
