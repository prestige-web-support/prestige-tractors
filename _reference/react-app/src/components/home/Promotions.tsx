import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { articles } from "@/data/news";
import { ROUTES } from "@/data/navigation";

export function Promotions() {
  const [feature, ...rest] = articles;

  return (
    <Section className="bg-ink-950">
      <SectionHeading
        eyebrow="Latest news & specials"
        title="Deals worth getting in quick for"
        description="Limited-time offers, seasonal advice and the latest from the Prestige Tractors workshop and showroom."
        action={<Button to={ROUTES.news} variant="secondary" icon="ArrowRight">All news</Button>}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Feature promo */}
        <motion.article
          data-theme="dark"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex min-h-[24rem] flex-col justify-end overflow-hidden rounded-2xl border border-ink-700"
        >
          <Media photoId={feature.photoId} alt={feature.title} width={1100} overlay="bottom" className="absolute inset-0 h-full transition-transform duration-700 group-hover:scale-105" />
          <div className="relative z-10 p-8">
            <Badge tone="brand">{feature.type}</Badge>
            <h3 className="mt-4 font-display text-2xl font-bold text-fg sm:text-3xl">{feature.title}</h3>
            <p className="mt-3 max-w-lg text-ink-200">{feature.excerpt}</p>
            <Button to={feature.cta?.href ?? ROUTES.news} className="mt-6" icon="ArrowRight">
              {feature.cta?.label ?? "Read more"}
            </Button>
          </div>
        </motion.article>

        {/* Secondary list */}
        <StaggerGroup className="flex flex-col gap-6">
          {rest.slice(0, 3).map((a) => (
            <motion.article key={a.id} variants={staggerItem}>
              <Link
                to={a.cta?.href ?? ROUTES.news}
                className="surface group flex items-center gap-5 rounded-2xl p-4 transition-colors hover:border-ink-500"
              >
                <Media photoId={a.photoId} alt={a.title} width={300} className="size-24 shrink-0 rounded-xl sm:size-28" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <Badge tone={a.type === "Special" ? "brand" : "neutral"}>{a.type}</Badge>
                    <span className="text-xs text-ink-400">{a.dateLabel}</span>
                  </div>
                  <h4 className="mt-2 truncate font-display text-lg font-bold text-fg">{a.title}</h4>
                  <p className="mt-1 line-clamp-2 text-sm text-ink-300">{a.excerpt}</p>
                </div>
                <Icon name="ArrowUpRight" className="size-5 shrink-0 text-ink-500 transition-colors group-hover:text-brand-400" />
              </Link>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}
