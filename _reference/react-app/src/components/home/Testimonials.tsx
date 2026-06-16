import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { Icon } from "@/components/ui/Icon";
import { StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section className="border-y border-fg/5 bg-ink-900/40">
      <SectionHeading
        align="center"
        eyebrow="What our customers say"
        title="Trusted by Victorian farmers & businesses"
        description="Real support, sound advice and service that keeps customers coming back."
      />

      <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((t) => (
          <motion.figure
            key={t.name}
            variants={staggerItem}
            className="surface relative flex flex-col rounded-2xl p-6"
          >
            <Icon name="Quote" className="size-8 text-brand-500/40" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-100">
              "{t.quote}"
            </blockquote>
            <Stars rating={t.rating} className="mt-6" />
            <figcaption className="mt-4 border-t border-ink-700 pt-4">
              <span className="block font-display font-bold text-fg">{t.name}</span>
              <span className="block text-sm text-ink-400">{t.role} · {t.location}</span>
            </figcaption>
          </motion.figure>
        ))}
      </StaggerGroup>
    </Section>
  );
}
