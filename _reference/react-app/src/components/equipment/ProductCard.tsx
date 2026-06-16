import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/data/equipment";
import { getBrand } from "@/data/brands";
import { Media } from "@/components/ui/Media";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/data/navigation";
import { formatPrice } from "@/lib/utils";

const availabilityMap = {
  "in-stock": { label: "In Stock", tone: "success" as const },
  "enquire": { label: "Enquire", tone: "brand" as const },
  "arriving": { label: "Arriving Soon", tone: "gold" as const },
};

export function ProductCard({ product }: { product: Product }) {
  const brand = getBrand(product.brand);
  const avail = availabilityMap[product.availability];

  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-850 transition-all duration-500 hover:border-ink-500 hover:shadow-[0_40px_80px_-32px_rgba(0,0,0,0.9)]"
    >
      <Link to={ROUTES.product(product.slug)} data-theme="dark" className="relative block aspect-[4/3] overflow-hidden">
        <Media
          photoId={product.photoId}
          alt={product.name}
          width={700}
          className="h-full transition-transform duration-700 group-hover:scale-105"
          overlay="bottom"
        />
        <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">
          <Badge tone={avail.tone}>{avail.label}</Badge>
          {product.badges?.map((b) => <Badge key={b} tone="neutral">{b}</Badge>)}
        </div>
        {product.hp != null && (
          <div className="absolute right-4 top-4 z-20 rounded-full bg-ink-950/70 px-3 py-1 text-xs font-bold text-fg backdrop-blur">
            {product.hp} hp
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-400">
            {brand?.name ?? product.brand}
          </span>
          <span className="text-xs text-ink-400">{brand?.category}</span>
        </div>

        <h3 className="mt-2 font-display text-xl font-bold text-fg">
          <Link to={ROUTES.product(product.slug)} className="after:absolute after:inset-0">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-300">{product.tagline}</p>

        <div className="mt-5 flex items-end justify-between border-t border-ink-700 pt-4">
          <div>
            {product.priceFrom != null ? (
              <>
                <span className="block text-[0.7rem] uppercase tracking-wider text-ink-400">From</span>
                <span className="font-display text-lg font-bold text-fg">{formatPrice(product.priceFrom)}</span>
                {product.priceNote && <span className="block text-[0.7rem] text-ink-400">{product.priceNote}</span>}
              </>
            ) : (
              <span className="font-display text-lg font-bold text-fg">Contact for price</span>
            )}
          </div>
          <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-ink-600 text-brand-400 transition-all duration-300 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
            <Icon name="ArrowUpRight" className="size-5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
