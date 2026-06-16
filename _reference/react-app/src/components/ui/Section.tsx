import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Render without the inner container (full-bleed content). */
  bleed?: boolean;
  id?: string;
  as?: "section" | "div";
};

/** Vertical rhythm wrapper with consistent section padding. */
export function Section({
  children,
  className,
  containerClassName,
  bleed = false,
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={cn("relative py-20 sm:py-24 lg:py-28", className)}>
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </Tag>
  );
}
