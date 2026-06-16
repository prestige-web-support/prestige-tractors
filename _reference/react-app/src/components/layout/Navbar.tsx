import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { topNav, type MenuKind } from "./navData";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKind>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  // Transparent only at the very top of the homepage.
  const overHero = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  useEffect(() => {
    setOpenMenu(null);
    setDrawerOpen(false);
  }, [location.pathname]);

  const handleEnter = (menu: MenuKind) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMenu(menu ?? null);
  };
  const handleLeave = () => {
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <>
      <header
        data-theme={overHero ? "dark" : undefined}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          overHero
            ? "bg-transparent"
            : "border-b border-fg/5 bg-ink-950/85 backdrop-blur-xl",
        )}
        onMouseLeave={handleLeave}
      >
        <Container className="flex h-[var(--nav-h,5rem)] items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {topNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleEnter(item.menu ?? null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold tracking-tight transition-colors",
                    openMenu && item.menu === openMenu
                      ? "text-fg"
                      : "text-ink-100 hover:text-fg",
                  )}
                >
                  {item.label}
                  {item.menu && (
                    <Icon
                      name="ChevronDown"
                      className={cn(
                        "size-3.5 text-ink-400 transition-transform duration-300",
                        openMenu === item.menu && "rotate-180 text-brand-400",
                      )}
                    />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-ink-100 transition-colors hover:text-fg lg:flex"
            >
              <Icon name="PhoneCall" className="size-4 text-brand-400" />
              {site.phone}
            </a>
            <ThemeToggle />
            <Button to="/service#book" size="sm" icon="Calendar" iconPosition="left" className="hidden sm:inline-flex">
              Book Service
            </Button>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="flex size-11 items-center justify-center rounded-full border border-fg/10 text-fg transition-colors hover:bg-fg/5 xl:hidden"
              aria-label="Open menu"
            >
              <Icon name="Menu" className="size-5" />
            </button>
          </div>
        </Container>

        {/* Mega menu drop area */}
        <AnimatePresence>
          {openMenu && (
            <div
              className="absolute inset-x-0 top-full hidden xl:block"
              onMouseEnter={() => handleEnter(openMenu)}
            >
              <Container className="pt-2 pb-4">
                <MegaMenu kind={openMenu} onNavigate={() => setOpenMenu(null)} />
              </Container>
            </div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop dim behind open mega menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 hidden bg-black/60 backdrop-blur-[2px] xl:block"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
