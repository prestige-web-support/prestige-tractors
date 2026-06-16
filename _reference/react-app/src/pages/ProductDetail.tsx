import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/equipment/ProductCard";
import { getProduct, relatedProducts } from "@/data/equipment";
import { getBrand } from "@/data/brands";
import { getCategory } from "@/data/categories";
import { ROUTES } from "@/data/navigation";
import { formatPrice } from "@/lib/utils";

const availabilityMap = {
  "in-stock": { label: "In Stock", tone: "success" as const },
  enquire: { label: "Enquiry Only", tone: "brand" as const },
  arriving: { label: "Arriving Soon", tone: "gold" as const },
};

const assurances = [
  { icon: "ShieldCheck", text: "Genuine parts & warranty" },
  { icon: "Wrench", text: "Factory-trained servicing" },
  { icon: "Banknote", text: "Competitive finance available" },
] as const;

export default function ProductDetail() {
  const { slug = "" } = useParams();
  const product = getProduct(slug);
  if (!product) return <Navigate to={ROUTES.equipment} replace />;

  const brand = getBrand(product.brand);
  const category = getCategory(product.category);
  const related = relatedProducts(product);
  const avail = availabilityMap[product.availability];

  return (
    <>
      {/* Detail hero */}
      <div className="relative isolate overflow-hidden pt-28">
        <div className="pointer-events-none absolute -right-40 top-0 -z-10 size-[36rem] glow-brand opacity-25" />
        <Container className="py-10">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-ink-300">
            <Link to="/" className="hover:text-fg">Home</Link>
            <Icon name="ChevronRight" className="size-3.5 text-ink-500" />
            <Link to={ROUTES.equipment} className="hover:text-fg">Equipment</Link>
            <Icon name="ChevronRight" className="size-3.5 text-ink-500" />
            {category && (
              <>
                <Link to={ROUTES.category(category.slug)} className="hover:text-fg">{category.name}</Link>
                <Icon name="ChevronRight" className="size-3.5 text-ink-500" />
              </>
            )}
            <span className="text-ink-100">{product.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
              className="relative"
            >
              <Media
                photoId={product.photoId}
                alt={product.name}
                width={1100}
                priority
                className="aspect-[4/3] rounded-2xl border border-ink-700"
              />
              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <Badge tone={avail.tone}>{avail.label}</Badge>
                {product.badges?.map((b) => <Badge key={b} tone="neutral">{b}</Badge>)}
              </div>
              {/* spec quick-stats */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {product.specs.slice(0, 3).map((s) => (
                  <div key={s.label} className="surface rounded-xl p-4 text-center">
                    <p className="font-display text-base font-bold text-fg">{s.value}</p>
                    <p className="mt-1 text-xs text-ink-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3">
                {brand && (
                  <Link to={ROUTES.brand(brand.slug)} className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-400 hover:text-brand-300">
                    {brand.name}
                  </Link>
                )}
                <span className="text-ink-600">·</span>
                <span className="text-sm capitalize text-ink-400">{product.condition} {category?.name?.toLowerCase()}</span>
              </div>

              <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-fg sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-ink-200">{product.summary}</p>

              {/* Price */}
              <div className="mt-7 flex items-end gap-4 border-y border-ink-700 py-5">
                {product.priceFrom != null ? (
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-ink-400">Priced from</span>
                    <span className="font-display text-3xl font-extrabold text-fg">{formatPrice(product.priceFrom)}</span>
                    {product.priceNote && <span className="ml-2 text-sm text-ink-400">{product.priceNote}</span>}
                  </div>
                ) : (
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-ink-400">Pricing</span>
                    <span className="font-display text-2xl font-extrabold text-fg">Contact for best price</span>
                  </div>
                )}
              </div>

              {/* Highlights */}
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-ink-100">
                    <Icon name="CircleCheck" className="mt-0.5 size-4 shrink-0 text-brand-400" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to={`/contact?enquiry=${encodeURIComponent(product.name)}`} size="lg" icon="ArrowRight" fullWidth>
                  Enquire about this model
                </Button>
                <Button to={ROUTES.finance} size="lg" variant="secondary" icon="Banknote" iconPosition="left" fullWidth>
                  Finance options
                </Button>
              </div>

              {/* Assurances */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {assurances.map((a) => (
                  <span key={a.text} className="flex items-center gap-2 text-sm text-ink-300">
                    <Icon name={a.icon} className="size-4 text-brand-400" /> {a.text}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Overview + Specs */}
      <Section className="border-t border-fg/5 bg-ink-900/40">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-fg">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-200">{product.description}</p>

            <h3 className="mt-10 font-display text-xl font-bold text-fg">Key features</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="surface flex items-start gap-3 rounded-xl p-4 text-sm text-ink-100">
                  <Icon name="Check" className="mt-0.5 size-4 shrink-0 text-brand-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Specs table */}
          <div>
            <h2 className="font-display text-2xl font-bold text-fg">Specifications</h2>
            <dl className="surface mt-4 divide-y divide-ink-700 rounded-2xl">
              {product.specs.map((s) => (
                <div key={s.label} className="flex items-center justify-between px-5 py-3.5">
                  <dt className="text-sm text-ink-300">{s.label}</dt>
                  <dd className="text-sm font-semibold text-fg">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-ink-500">
              Specifications are indicative and may vary by configuration. Confirm details with our sales team.
            </p>
          </div>
        </div>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section className="bg-ink-950">
          <SectionHeading
            eyebrow="You may also like"
            title="Related equipment"
            action={<Button to={ROUTES.equipment} variant="secondary" icon="ArrowRight">View all</Button>}
          />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </StaggerGroup>
        </Section>
      )}
    </>
  );
}
