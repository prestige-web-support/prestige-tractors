import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({ rating = 5, className }: { rating?: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < rating ? "fill-gold-400 text-gold-400" : "text-ink-500",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
