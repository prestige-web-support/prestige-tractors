import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "brand" | "neutral" | "success" | "gold" | "outline";

const tones: Record<Tone, string> = {
  brand: "bg-brand-500/15 text-brand-300 border-brand-500/30",
  neutral: "bg-fg/5 text-ink-200 border-fg/10",
  success: "bg-[color:var(--color-success)]/15 text-[color:var(--color-success)] border-[color:var(--color-success)]/30",
  gold: "bg-gold-500/15 text-gold-400 border-gold-500/30",
  outline: "bg-transparent text-ink-200 border-ink-500",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
