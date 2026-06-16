import type { Brand } from "@/data/brands";
import { cn } from "@/lib/utils";

const trackingMap = {
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-[0.18em]",
} as const;

const weightMap: Record<number, string> = {
  400: "font-normal",
  500: "font-medium",
  600: "font-semibold",
  700: "font-bold",
  800: "font-extrabold",
  900: "font-black",
};

/**
 * Renders a brand as a clean typographic wordmark (no logo image assets).
 * Styling is driven by each brand's `wordmark` hints in data/brands.ts.
 */
export function BrandWordmark({
  brand,
  className,
}: {
  brand: Brand;
  className?: string;
}) {
  const { wordmark, name } = brand;
  return (
    <span
      className={cn(
        "font-display select-none whitespace-nowrap leading-none",
        weightMap[wordmark.weight],
        trackingMap[wordmark.tracking],
        wordmark.case === "upper" && "uppercase",
        wordmark.italic && "italic",
        className,
      )}
    >
      {name}
    </span>
  );
}
