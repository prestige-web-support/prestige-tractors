import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Media } from "./Media";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  photoId?: string;
  crumbs?: Crumb[];
  align?: "left" | "center";
  actions?: ReactNode;
  /** Compact height variant for utility pages. */
  size?: "default" | "tall";
  children?: ReactNode;
};

export function PageHeader({
  eyebrow, title, description, photoId, crumbs, align = "left", actions, size = "default", children,
}: Props) {
  return (
    <header
      data-theme="dark"
      className={cn(
        "relative isolate flex items-end overflow-hidden bg-ink-950",
        size === "tall" ? "min-h-[72vh]" : "min-h-[56vh]",
      )}
    >
      {photoId ? (
        <Media photoId={photoId} alt="" priority width={2000} className="absolute inset-0 -z-10 h-full w-full" overlay="none" />
      ) : (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-850 to-ink-950" />
      )}
      {/* Scrims for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/90 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 size-[32rem] glow-brand opacity-40" />

      <Container className="relative w-full pb-14 pt-32 sm:pb-20 sm:pt-40">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {crumbs && (
            <nav aria-label="Breadcrumb" className={cn("mb-6 flex items-center gap-2 text-sm text-ink-300", align === "center" && "justify-center")}>
              {crumbs.map((c, i) => (
                <span key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link to={c.href} className="hover:text-fg">{c.label}</Link>
                  ) : (
                    <span className="text-ink-100">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <Icon name="ChevronRight" className="size-3.5 text-ink-500" />}
                </span>
              ))}
            </nav>
          )}

          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className={cn("eyebrow mb-4", align === "center" && "justify-center")}
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-4xl font-extrabold leading-[1.02] text-fg sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
              className={cn("mt-6 max-w-2xl text-lg leading-relaxed text-ink-200", align === "center" && "mx-auto")}
            >
              {description}
            </motion.p>
          )}

          {actions && (
            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className={cn("mt-9 flex flex-wrap gap-4", align === "center" && "justify-center")}
            >
              {actions}
            </motion.div>
          )}

          {children}
        </div>
      </Container>
    </header>
  );
}
