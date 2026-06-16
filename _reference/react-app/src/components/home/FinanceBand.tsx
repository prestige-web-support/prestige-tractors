import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PHOTO_IDS } from "@/lib/images";
import { site } from "@/data/site";
import { ROUTES } from "@/data/navigation";

export function FinanceBand() {
  return (
    <section data-theme="dark" className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-28">
      <Media photoId={PHOTO_IDS.greenFieldSunset} alt="" width={2000} className="absolute inset-0 -z-10 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
      <Container>
        <Reveal className="max-w-2xl">
          <span className="eyebrow mb-4">Finance</span>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.05] text-fg sm:text-4xl lg:text-5xl">
            Finance to suit your season
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-100">
            We can arrange finance for both new and used machinery at competitive interest rates — structured around your cash flow and seasonal income.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {site.sectorsServed.map((s) => (
              <li key={s} className="inline-flex items-center gap-1.5 rounded-full border border-fg/15 bg-fg/5 px-3.5 py-1.5 text-sm text-ink-100 backdrop-blur">
                <Icon name="Check" className="size-3.5 text-brand-400" /> {s}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to={ROUTES.finance} size="lg" icon="ArrowRight">Finance Enquiry</Button>
            <Button href={site.phoneHref} size="lg" variant="glass" icon="PhoneCall" iconPosition="left">
              {site.phone}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
