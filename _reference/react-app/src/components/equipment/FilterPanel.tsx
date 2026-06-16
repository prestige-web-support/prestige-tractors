import { Icon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Form";
import { cn } from "@/lib/utils";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { formatPrice } from "@/lib/utils";

export type Filters = {
  q: string;
  categories: string[];
  brands: string[];
  conditions: string[];
  maxPrice: number;
};

export const PRICE_CEILING = 60000;

const conditionsList = [
  { id: "new", label: "New" },
  { id: "used", label: "Used" },
];

function toggle(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function CheckRow({
  checked, label, count, onChange,
}: {
  checked: boolean; label: string; count?: number; onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="group flex w-full items-center gap-3 py-1.5 text-left"
    >
      <span
        className={cn(
          "flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors",
          checked ? "border-brand-500 bg-brand-500 text-white" : "border-ink-500 group-hover:border-ink-300",
        )}
      >
        {checked && <Icon name="Check" className="size-3.5" />}
      </span>
      <span className={cn("flex-1 text-sm", checked ? "text-fg" : "text-ink-200 group-hover:text-fg")}>
        {label}
      </span>
      {count != null && <span className="text-xs text-ink-500">{count}</span>}
    </button>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-ink-700 py-5 first:border-t-0 first:pt-0">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">{title}</h3>
      {children}
    </div>
  );
}

export function FilterPanel({
  filters, setFilters, counts,
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
  counts: { categories: Record<string, number>; brands: Record<string, number> };
}) {
  return (
    <div className="surface rounded-2xl p-6">
      <div className="relative mb-2">
        <Icon name="Search" className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-400" />
        <Input
          value={filters.q}
          onChange={(e) => setFilters({ ...filters, q: e.target.value })}
          placeholder="Search equipment…"
          className="pl-10"
          aria-label="Search equipment"
        />
      </div>

      <Group title="Category">
        {categories.map((c) => (
          <CheckRow
            key={c.slug}
            checked={filters.categories.includes(c.slug)}
            label={c.name}
            count={counts.categories[c.slug] ?? 0}
            onChange={() => setFilters({ ...filters, categories: toggle(filters.categories, c.slug) })}
          />
        ))}
      </Group>

      <Group title="Brand">
        {brands.map((b) => (
          <CheckRow
            key={b.slug}
            checked={filters.brands.includes(b.slug)}
            label={b.name}
            count={counts.brands[b.slug] ?? 0}
            onChange={() => setFilters({ ...filters, brands: toggle(filters.brands, b.slug) })}
          />
        ))}
      </Group>

      <Group title="Condition">
        {conditionsList.map((c) => (
          <CheckRow
            key={c.id}
            checked={filters.conditions.includes(c.id)}
            label={c.label}
            onChange={() => setFilters({ ...filters, conditions: toggle(filters.conditions, c.id) })}
          />
        ))}
      </Group>

      <Group title="Max price">
        <input
          type="range"
          min={1000}
          max={PRICE_CEILING}
          step={1000}
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full accent-brand-500"
          aria-label="Maximum price"
        />
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-ink-400">Up to</span>
          <span className="font-semibold text-fg">
            {filters.maxPrice >= PRICE_CEILING ? `${formatPrice(PRICE_CEILING)}+` : formatPrice(filters.maxPrice)}
          </span>
        </div>
      </Group>
    </div>
  );
}

export const emptyFilters: Filters = {
  q: "",
  categories: [],
  brands: [],
  conditions: [],
  maxPrice: PRICE_CEILING,
};
