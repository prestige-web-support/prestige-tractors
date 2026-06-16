import { photo } from "@/lib/images";
import { cn } from "@/lib/utils";

type MediaProps = {
  /** Raw Unsplash photo id (from PHOTO_IDS). */
  photoId: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  /** Gradient scrim overlay for legible text on top. */
  overlay?: "none" | "bottom" | "full" | "left";
  priority?: boolean;
  children?: React.ReactNode;
};

// Scrims darken photos for legible overlaid text — kept dark in BOTH themes.
const overlays = {
  none: "",
  bottom:
    "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:via-black/40 after:to-transparent",
  full: "after:absolute after:inset-0 after:bg-black/55",
  left: "after:absolute after:inset-0 after:bg-gradient-to-r after:from-black after:via-black/60 after:to-transparent",
};

/**
 * Cinematic image wrapper. Sits on a dark gradient base so the layout stays
 * premium even if a photo is slow or unavailable, with an optional scrim
 * for overlaid text.
 */
export function Media({
  photoId,
  alt,
  className,
  imgClassName,
  width = 1600,
  overlay = "none",
  priority = false,
  children,
}: MediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-ink-800 to-ink-950",
        overlays[overlay],
        className,
      )}
    >
      <img
        src={photo(photoId, { w: width })}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "relative z-0 h-full w-full object-cover",
          imgClassName,
        )}
      />
      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </div>
  );
}
