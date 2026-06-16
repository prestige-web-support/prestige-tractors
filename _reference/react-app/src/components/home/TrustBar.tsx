import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { trustPoints } from "@/data/site";

export function TrustBar() {
  return (
    <section className="relative border-b border-fg/5 bg-ink-950 py-16">
      <Container>
        <StaggerGroup className="grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((t) => (
            <motion.div
              key={t.title}
              variants={staggerItem}
              className="group flex flex-col gap-4 bg-ink-900 p-7 transition-colors hover:bg-ink-850"
            >
              <span className="flex size-12 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <Icon name={t.icon as IconName} className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold leading-snug text-fg">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{t.body}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
