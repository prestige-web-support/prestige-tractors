import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { photo, PHOTO_IDS } from "@/lib/images";
import { site } from "@/data/site";
import { ROUTES } from "@/data/navigation";

const stats = [
  { value: "20+", label: "Years experience" },
  { value: "9", label: "Premium brands" },
  { value: "100%", label: "Genuine parts" },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section data-theme="dark" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink-950">
      {/* Cinematic background */}
      <img
        src={photo(PHOTO_IDS.tractorHarvest, { w: 2400 })}
        alt="Tractor working a field at golden hour"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      {/* Gradient scrims */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 size-[40rem] glow-brand opacity-50" />

      <Container className="relative w-full pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.div {...fade(0)} className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-fg/10 bg-fg/5 px-4 py-1.5 backdrop-blur">
            <span className="size-2 animate-pulse rounded-full bg-brand-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-100">
              Ballarat · Wendouree · {site.parentGroup}
            </span>
          </motion.div>

          <motion.h1 {...fade(0.1)} className="font-display text-[2.75rem] font-extrabold uppercase leading-[0.95] text-fg sm:text-6xl lg:text-7xl">
            Victoria's Trusted
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              Agricultural
            </span>{" "}
            Equipment Partner
          </motion.h1>

          <motion.p {...fade(0.2)} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-200 sm:text-xl">
            Premium tractors, machinery, finance, genuine parts and factory-trained servicing — supporting Australian farms, contractors and rural businesses.
          </motion.p>

          <motion.div {...fade(0.3)} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to={ROUTES.equipment} size="lg" icon="ArrowRight">Explore Equipment</Button>
            <Button to="/service#book" size="lg" variant="glass" icon="Calendar" iconPosition="left">
              Book a Service
            </Button>
          </motion.div>

          {/* Stat strip */}
          <motion.dl {...fade(0.45)} className="mt-14 flex max-w-lg divide-x divide-fg/10 rounded-2xl border border-fg/10 bg-fg/[0.03] backdrop-blur">
            {stats.map((s) => (
              <div key={s.label} className="flex-1 px-5 py-4 text-center sm:px-6">
                <dt className="font-display text-2xl font-extrabold text-fg sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-ink-300 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        {...fade(0.7)}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-400 lg:flex"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-ink-500 pt-1.5">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-brand-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
