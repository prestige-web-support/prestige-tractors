import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { cn } from "@/lib/utils";
import {
  equipmentMenu,
  brandsMenu,
  salesMenu,
  type MenuKind,
} from "./navData";

const panelMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
};

function FeatureTile({
  eyebrow, title, body, href, cta, photoId, onNavigate,
}: {
  eyebrow: string; title: string; body: string; href: string; cta: string; photoId: string; onNavigate: () => void;
}) {
  return (
    <Link
      to={href}
      onClick={onNavigate}
      data-theme="dark"
      className="group relative col-span-4 overflow-hidden rounded-xl border border-fg/10"
    >
      <Media photoId={photoId} alt={title} width={700} overlay="left" className="absolute inset-0 h-full" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <span className="eyebrow mb-2">{eyebrow}</span>
        <h4 className="text-lg font-bold text-fg">{title}</h4>
        <p className="mt-2 max-w-xs text-sm text-ink-200">{body}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-transform group-hover:translate-x-1">
          {cta} <Icon name="ArrowRight" className="size-4" />
        </span>
      </div>
    </Link>
  );
}

export function MegaMenu({ kind, onNavigate }: { kind: MenuKind; onNavigate: () => void }) {
  if (!kind) return null;

  return (
    <motion.div {...panelMotion} className="w-full">
      <div className="glass rounded-2xl border border-fg/10 p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
        {kind === "equipment" && (
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 grid grid-cols-2 gap-2">
              {equipmentMenu.categories.map((c) => (
                <Link
                  key={c.href}
                  to={c.href}
                  onClick={onNavigate}
                  className="group flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-fg/5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-fg/10 bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Icon name={c.icon} className="size-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-fg">{c.label}</span>
                    <span className="mt-0.5 block text-sm text-ink-300">{c.blurb}</span>
                  </span>
                </Link>
              ))}
            </div>
            <FeatureTile {...equipmentMenu.feature} onNavigate={onNavigate} />
          </div>
        )}

        {kind === "brands" && (
          <div className="grid grid-cols-3 gap-2">
            {brandsMenu.map((b) => (
              <Link
                key={b.href}
                to={b.href}
                onClick={onNavigate}
                className="group flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-fg/5"
              >
                <span>
                  <span className="block font-display text-base font-bold text-fg">{b.label}</span>
                  <span className="mt-0.5 block text-xs text-ink-300">{b.category}</span>
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-ink-400">
                  {b.origin}
                </span>
              </Link>
            ))}
          </div>
        )}

        {kind === "sales" && (
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 grid grid-cols-2 gap-8">
              {salesMenu.columns.map((col) => (
                <div key={col.heading}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                    {col.heading}
                  </p>
                  <div className="flex flex-col gap-1">
                    {col.links.map((l) => (
                      <Link
                        key={l.href}
                        to={l.href}
                        onClick={onNavigate}
                        className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-fg/5"
                      >
                        <Icon name={l.icon} className={cn("size-4 text-brand-400")} />
                        <span className="font-medium text-ink-100 group-hover:text-fg">{l.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <FeatureTile {...salesMenu.feature} onNavigate={onNavigate} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
