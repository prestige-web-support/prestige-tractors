import { useParams, Navigate, Link } from "react-router-dom";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { StaggerGroup } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/equipment/ProductCard";
import { getCategory, categories } from "@/data/categories";
import { productsByCategory } from "@/data/equipment";
import { getBrand } from "@/data/brands";
import { ROUTES } from "@/data/navigation";

export default function CategoryPage() {
  const { slug = "" } = useParams();
  const category = getCategory(slug);
  if (!category) return <Navigate to={ROUTES.equipment} replace />;

  const items = productsByCategory(slug);
  const categoryBrands = category.brands.map(getBrand).filter(Boolean);
  const otherCategories = categories.filter((c) => c.slug !== slug);

  return (
    <>
      <PageHeader
        eyebrow="Equipment Category"
        title={category.name}
        description={category.description}
        photoId={category.photoId}
        crumbs={[{ label: "Home", href: "/" }, { label: "Equipment", href: ROUTES.equipment }, { label: category.name }]}
        actions={
          <>
            <Button to={ROUTES.equipment} icon="ArrowRight">Full catalogue</Button>
            <Button to="/contact" variant="glass" icon="PhoneCall" iconPosition="left">Enquire</Button>
          </>
        }
      />

      {/* Brands in this category */}
      {categoryBrands.length > 0 && (
        <div className="border-b border-fg/5 bg-ink-900/50">
          <Section className="!py-8">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">Brands</span>
              {categoryBrands.map((b) => (
                <Link key={b!.slug} to={ROUTES.brand(b!.slug)} className="font-display text-lg font-bold text-ink-200 transition-colors hover:text-fg">
                  {b!.name}
                </Link>
              ))}
            </div>
          </Section>
        </div>
      )}

      <Section className="bg-ink-950">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold text-fg">
            {items.length} machine{items.length !== 1 && "s"} available
          </h2>
        </div>
        {items.length > 0 ? (
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => <ProductCard key={p.id} product={p} />)}
          </StaggerGroup>
        ) : (
          <p className="text-ink-300">No items currently listed — please <Link to="/contact" className="text-brand-400">contact us</Link> for availability.</p>
        )}
      </Section>

      {/* Explore other categories */}
      <Section className="border-t border-fg/5 bg-ink-900/40">
        <h2 className="mb-8 font-display text-2xl font-bold text-fg">Explore other categories</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherCategories.map((c) => (
            <Link
              key={c.slug}
              to={ROUTES.category(c.slug)}
              className="surface group flex items-center justify-between rounded-xl p-5 transition-colors hover:border-ink-500"
            >
              <span className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                  <Icon name={c.icon as never} className="size-5" />
                </span>
                <span className="font-display font-bold text-fg">{c.name}</span>
              </span>
              <Icon name="ArrowRight" className="size-4 text-ink-500 transition-colors group-hover:text-brand-400" />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
