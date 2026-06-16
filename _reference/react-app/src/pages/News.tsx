import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { articles, type Article } from "@/data/news";
import { PHOTO_IDS } from "@/lib/images";

const filters = ["All", "Special", "News", "Event"] as const;

function ArticleCard({ a }: { a: Article }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-850 transition-all hover:border-ink-500 hover:shadow-[0_40px_80px_-32px_rgba(0,0,0,0.9)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Media photoId={a.photoId} alt={a.title} width={800} className="h-full transition-transform duration-700 group-hover:scale-105" overlay="bottom" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Badge tone={a.type === "Special" ? "brand" : "neutral"}>{a.type}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs text-ink-400">{a.dateLabel}</span>
        <h3 className="mt-2 font-display text-xl font-bold text-fg">{a.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-300">{a.excerpt}</p>
        {a.cta && (
          <Link to={a.cta.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-transform group-hover:translate-x-1">
            {a.cta.label} <Icon name="ArrowRight" className="size-4" />
          </Link>
        )}
      </div>
    </motion.article>
  );
}

export default function News() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [feature, ...rest] = articles;
  const list = filter === "All" ? rest : rest.filter((a) => a.type === filter);

  return (
    <>
      <PageHeader
        eyebrow="Latest News & Specials"
        title="What's new at Prestige"
        description="Limited-time deals, seasonal advice and the latest from our showroom and workshop floor."
        photoId={PHOTO_IDS.cropRowsGolden}
        crumbs={[{ label: "Home", href: "/" }, { label: "News & Specials" }]}
      />

      {/* Featured */}
      <Section className="bg-ink-950">
        <motion.article
          initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
          className="group relative grid overflow-hidden rounded-3xl border border-ink-700 lg:grid-cols-2"
        >
          <Media photoId={feature.photoId} alt={feature.title} width={1100} className="min-h-[18rem] lg:min-h-full" overlay="full" />
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <div className="flex items-center gap-3">
              <Badge tone="brand">{feature.type}</Badge>
              <span className="text-sm text-ink-400">{feature.dateLabel}</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-fg sm:text-4xl">{feature.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-200">{feature.excerpt}</p>
            {feature.cta && <Button to={feature.cta.href} className="mt-7 self-start" icon="ArrowRight">{feature.cta.label}</Button>}
          </div>
        </motion.article>
      </Section>

      {/* Filter + grid */}
      <Section className="border-t border-fg/5 bg-ink-900/40 !pt-0">
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${filter === f ? "border-brand-500 bg-brand-500 text-white" : "border-ink-600 text-ink-200 hover:border-ink-400"}`}
            >
              {f}
            </button>
          ))}
        </div>
        {list.length > 0 ? (
          <StaggerGroup key={filter} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => <ArticleCard key={a.id} a={a} />)}
          </StaggerGroup>
        ) : (
          <p className="text-ink-300">No {filter.toLowerCase()} items right now — check back soon.</p>
        )}
      </Section>
    </>
  );
}
