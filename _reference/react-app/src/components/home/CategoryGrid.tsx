import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { categories } from "@/data/categories";
import { ROUTES } from "@/data/navigation";
import { cn } from "@/lib/utils";

function CategoryTile({
  category, className, large = false,
}: {
  category: (typeof categories)[number]; className?: string; large?: boolean;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      <Link
        to={ROUTES.category(category.slug)}
        data-theme="dark"
        className="group relative flex h-full min-h-[15rem] flex-col justify-end overflow-hidden rounded-2xl border border-ink-700"
      >
        <Media
          photoId={category.photoId}
          alt={category.name}
          width={large ? 1200 : 700}
          overlay="bottom"
          className="absolute inset-0 h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="relative z-10 flex items-end justify-between gap-4 p-6">
          <div>
            <span className="mb-3 flex size-11 items-center justify-center rounded-xl border border-fg/15 bg-fg/10 text-fg backdrop-blur transition-colors group-hover:border-brand-500 group-hover:bg-brand-500">
              <Icon name={category.icon as IconName} className="size-5" />
            </span>
            <h3 className={cn("font-display font-bold text-fg", large ? "text-2xl sm:text-3xl" : "text-xl")}>
              {category.name}
            </h3>
            <p className="mt-1 text-sm text-ink-200">{category.blurb}</p>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-fg opacity-0 transition-all duration-300 group-hover:opacity-100">
            View Range <Icon name="ArrowRight" className="size-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function CategoryGrid() {
  const [tractors, hay, sprayers, attachments, utility] = categories;
  return (
    <Section className="bg-ink-950">
      <SectionHeading
        eyebrow="Explore our equipment"
        title="Built for every job on the property"
        description="From compact hobby-farm tractors to broadacre horsepower, hay tools, sprayers and attachments — all backed by local parts and servicing."
        action={<Button to={ROUTES.equipment} variant="secondary" icon="ArrowRight">View all equipment</Button>}
      />

      <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-6">
        <CategoryTile category={tractors} large className="sm:col-span-4" />
        <CategoryTile category={hay} className="sm:col-span-2" />
        <CategoryTile category={sprayers} className="sm:col-span-2" />
        <CategoryTile category={attachments} className="sm:col-span-2" />
        <CategoryTile category={utility} className="sm:col-span-2" />
      </StaggerGroup>
    </Section>
  );
}
