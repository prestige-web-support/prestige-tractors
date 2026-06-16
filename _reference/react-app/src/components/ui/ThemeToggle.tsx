import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/theme/ThemeProvider";
import { cn } from "@/lib/utils";

/**
 * Dark/Light theme switch. `variant="icon"` is a compact round button for the
 * navbar; `variant="full"` is a labelled control for the mobile drawer.
 */
export function ThemeToggle({
  variant = "icon",
  className,
}: {
  variant?: "icon" | "full";
  className?: string;
}) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const next = isDark ? "light" : "dark";

  const iconSwap = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={theme}
        initial={{ y: 8, opacity: 0, rotate: -30 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -8, opacity: 0, rotate: 30 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center"
      >
        {isDark ? <Moon className="size-[1.05rem]" /> : <Sun className="size-[1.05rem]" />}
      </motion.span>
    </AnimatePresence>
  );

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${next} mode`}
        className={cn(
          "flex w-full items-center justify-between rounded-xl border border-ink-700 bg-ink-800/60 px-4 py-3 text-sm font-semibold text-fg transition-colors hover:border-ink-500",
          className,
        )}
      >
        <span className="flex items-center gap-3">
          {iconSwap}
          {isDark ? "Dark mode" : "Light mode"}
        </span>
        <span
          className={cn(
            "relative h-6 w-11 rounded-full transition-colors",
            isDark ? "bg-ink-600" : "bg-brand-500",
          )}
          aria-hidden="true"
        >
          <motion.span
            className="absolute top-0.5 size-5 rounded-full bg-white shadow"
            animate={{ left: isDark ? "0.125rem" : "1.375rem" }}
            transition={{ type: "spring", stiffness: 500, damping: 32 }}
          />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={cn(
        "flex size-10 items-center justify-center rounded-full border border-ink-600 text-fg transition-colors hover:border-brand-500 hover:text-brand-400",
        className,
      )}
    >
      {iconSwap}
    </button>
  );
}
