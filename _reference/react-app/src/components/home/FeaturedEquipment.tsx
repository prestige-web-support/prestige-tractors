import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StaggerGroup } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/equipment/ProductCard";
import { featuredProducts } from "@/data/equipment";
import { ROUTES } from "@/data/navigation";

export function FeaturedEquipment() {
  return (
    <Section className="border-y border-fg/5 bg-ink-900/40">
      <SectionHeading
        eyebrow="Featured machinery"
        title="In demand right now"
        description="A selection of our most popular machines — ready to work, with finance and servicing sorted."
        action={<Button to={ROUTES.equipment} variant="secondary" icon="ArrowRight">Browse catalogue</Button>}
      />
      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </StaggerGroup>
    </Section>
  );
}
