import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "pt-theme";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/** Resolve the initial theme: stored preference → system preference → dark. */
export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // The inline boot script (index.html) sets data-theme before paint to avoid
  // a flash; mirror that here so React state matches the DOM.
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof document !== "undefined") {
      const attr = document.documentElement.dataset.theme;
      if (attr === "dark" || attr === "light") return attr;
    }
    return getInitialTheme();
  });

  const firstRun = useRef(true);

  useEffect(() => {
    const root = document.documentElement;

    // Smooth 300ms transition only while switching (not on first paint).
    if (!firstRun.current) {
      root.classList.add("theme-transition");
      const t = window.setTimeout(() => root.classList.remove("theme-transition"), 320);
      root.dataset.theme = theme;
      localStorage.setItem(STORAGE_KEY, theme);
      return () => window.clearTimeout(t);
    }

    firstRun.current = false;
    root.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Follow system changes only if the user hasn't explicitly chosen.
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(STORAGE_KEY)) setThemeState(e.matches ? "light" : "dark");
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(() => setThemeState((p) => (p === "dark" ? "light" : "dark")), []);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}
