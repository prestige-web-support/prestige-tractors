import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

/**
 * Prestige Tractors logo lockup — three red speed-bars + "PRESTIGE" wordmark
 * with a "BALLARAT" subline. Pure CSS/SVG, no image asset required.
 */
export function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Prestige Tractors Ballarat — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      {/* Speed bars */}
      <span className="flex flex-col gap-[3px]" aria-hidden="true">
        <span className="block h-[3px] w-7 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-8" />
        <span className="block h-[3px] w-5 rounded-full bg-brand-500/80 transition-all duration-300 group-hover:w-7" />
        <span className="block h-[3px] w-3.5 rounded-full bg-brand-500/60 transition-all duration-300 group-hover:w-6" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold uppercase tracking-tight text-fg sm:text-[1.4rem]">
          Prestige
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.42em] text-ink-300">
          Ballarat
        </span>
      </span>
    </Link>
  );
}
