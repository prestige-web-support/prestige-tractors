import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Select } from "@/components/ui/Form";
import { StaggerGroup } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/equipment/ProductCard";
import { FilterPanel, emptyFilters, PRICE_CEILING, type Filters } from "@/components/equipment/FilterPanel";
import { products } from "@/data/equipment";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { PHOTO_IDS } from "@/lib/images";

type Sort = "featured" | "price-asc" | "price-desc" | "hp-desc" | "name";

const sortLabels: Record<Sort, string> = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  "hp-desc": "Horsepower: High to Low",
  name: "Name: A–Z",
};

export default function EquipmentCatalogue() {
  const [params, setParams] = useSearchParams();
  const [filters, setFilters] = useState<Filters>(() => ({
    ...emptyFilters,
    brands: params.get("brand") ? [params.get("brand")!] : [],
    categories: params.get("category") ? [params.get("category")!] : [],
  }));
  const [sort, setSort] = useState<Sort>("featured");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Keep brand/category reflected in the URL for shareable links.
  useEffect(() => {
    const next = new URLSearchParams(params);
    filters.brands.length === 1 ? next.set("brand", filters.brands[0]) : next.delete("brand");
    filters.categories.length === 1 ? next.set("category", filters.categories[0]) : next.delete("category");
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.brands, filters.categories]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    const b: Record<string, number> = {};
    for (const p of products) {
      c[p.category] = (c[p.category] ?? 0) + 1;
      b[p.brand] = (b[p.brand] ?? 0) + 1;
    }
    return { categories: c, brands: b };
  }, []);

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    const list = products.filter((p) => {
      if (filters.categories.length && !filters.categories.includes(p.category)) return false;
      if (filters.brands.length && !filters.brands.includes(p.brand)) return false;
      if (filters.conditions.length && !filters.conditions.includes(p.condition)) return false;
      if (p.priceFrom != null && p.priceFrom > filters.maxPrice && filters.maxPrice < PRICE_CEILING) return false;
      if (q) {
        const hay = `${p.name} ${p.brand} ${p.tagline} ${p.summary}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    const sorted = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc": return (a.priceFrom ?? Infinity) - (b.priceFrom ?? Infinity);
        case "price-desc": return (b.priceFrom ?? -1) - (a.priceFrom ?? -1);
        case "hp-desc": return (b.hp ?? -1) - (a.hp ?? -1);
        case "name": return a.name.localeCompare(b.name);
        default: return Number(b.featured ?? false) - Number(a.featured ?? false);
      }
    });
    return sorted;
  }, [filters, sort]);

  const activeCount =
    filters.categories.length + filters.brands.length + filters.conditions.length +
    (filters.q ? 1 : 0) + (filters.maxPrice < PRICE_CEILING ? 1 : 0);

  return (
    <>
      <PageHeader
        eyebrow="Equipment Catalogue"
        title="The full range, ready to work"
        description="Browse our complete multi-brand inventory — filter by category, brand, condition and price to find the right machine for your operation."
        photoId={PHOTO_IDS.tractorPaddy}
        crumbs={[{ label: "Home", href: "/" }, { label: "Equipment" }]}
      />

      {/* Quick category chips */}
      <div className="border-b border-fg/5 bg-ink-900/50">
        <Container className="flex gap-2 overflow-x-auto py-4">
          <button
            onClick={() => setFilters({ ...filters, categories: [] })}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${filters.categories.length === 0 ? "border-brand-500 bg-brand-500 text-white" : "border-ink-600 text-ink-200 hover:border-ink-400"}`}
          >
            All
          </button>
          {categories.map((c) => {
            const active = filters.categories.length === 1 && filters.categories[0] === c.slug;
            return (
              <button
                key={c.slug}
                onClick={() => setFilters({ ...filters, categories: [c.slug] })}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${active ? "border-brand-500 bg-brand-500 text-white" : "border-ink-600 text-ink-200 hover:border-ink-400"}`}
              >
                {c.name}
              </button>
            );
          })}
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-lg font-bold text-fg">Filters</h2>
                {activeCount > 0 && (
                  <button onClick={() => setFilters(emptyFilters)} className="text-sm text-brand-400 hover:text-brand-300">
                    Clear all
                  </button>
                )}
              </div>
              <FilterPanel filters={filters} setFilters={setFilters} counts={counts} />
            </div>
          </aside>

          {/* Results */}
          <div>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-ink-300">
                <span className="font-semibold text-fg">{filtered.length}</span> result{filtered.length !== 1 && "s"}
                {activeCount > 0 && " · filtered"}
              </p>
              <div className="flex items-center gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  icon="SlidersHorizontal"
                  iconPosition="left"
                  className="lg:hidden"
                  onClick={() => setMobileOpen(true)}
                >
                  Filters{activeCount > 0 && ` (${activeCount})`}
                </Button>
                <label className="flex items-center gap-2 text-sm text-ink-300">
                  <span className="hidden sm:inline">Sort</span>
                  <Select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="py-2 text-sm" aria-label="Sort by">
                    {(Object.keys(sortLabels) as Sort[]).map((s) => (
                      <option key={s} value={s}>{sortLabels[s]}</option>
                    ))}
                  </Select>
                </label>
              </div>
            </div>

            {filtered.length > 0 ? (
              <StaggerGroup key={filtered.map((p) => p.id).join()} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
              </StaggerGroup>
            ) : (
              <div className="surface flex flex-col items-center rounded-2xl px-6 py-20 text-center">
                <Icon name="Search" className="size-10 text-ink-500" />
                <h3 className="mt-4 font-display text-xl font-bold text-fg">No equipment matches</h3>
                <p className="mt-2 max-w-sm text-ink-300">Try widening your filters or clearing them to see the full range.</p>
                <Button onClick={() => setFilters(emptyFilters)} className="mt-6" variant="secondary">Clear filters</Button>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed inset-x-0 bottom-0 z-[70] max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-fg/10 bg-ink-900 p-5 lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-lg font-bold text-fg">Filters</h2>
                <button onClick={() => setMobileOpen(false)} className="flex size-10 items-center justify-center rounded-full border border-fg/10 text-fg">
                  <Icon name="X" className="size-5" />
                </button>
              </div>
              <FilterPanel filters={filters} setFilters={setFilters} counts={counts} />
              <div className="mt-5 flex gap-3">
                <Button variant="secondary" fullWidth onClick={() => setFilters(emptyFilters)}>Clear</Button>
                <Button fullWidth onClick={() => setMobileOpen(false)}>Show {filtered.length}</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Brand quick links */}
      <Container className="pb-20">
        <div className="surface rounded-2xl p-8 text-center">
          <h3 className="font-display text-xl font-bold text-fg">Shop by brand</h3>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {brands.map((b) => (
              <button
                key={b.slug}
                onClick={() => { setFilters({ ...emptyFilters, brands: [b.slug] }); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="rounded-full border border-ink-600 px-4 py-2 text-sm font-medium text-ink-200 transition-colors hover:border-brand-500 hover:text-fg"
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
