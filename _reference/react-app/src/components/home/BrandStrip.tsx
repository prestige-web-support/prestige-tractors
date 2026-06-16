import { Container } from "@/components/ui/Container";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { featuredBrands } from "@/data/brands";

export function BrandStrip() {
  const row = [...featuredBrands, ...featuredBrands];
  return (
    <section className="border-y border-fg/5 bg-ink-900/60 py-10" aria-label="Brands we represent">
      <Container>
        <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.32em] text-ink-400">
          Our Premium Brands
        </p>
      </Container>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 px-8 group-hover:[animation-play-state:paused]">
          {row.map((b, i) => (
            <BrandWordmark
              key={`${b.id}-${i}`}
              brand={b}
              className="text-2xl text-ink-300 transition-colors duration-300 hover:text-fg sm:text-3xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
