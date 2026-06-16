import { Section } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PHOTO_IDS } from "@/lib/images";
import { ROUTES } from "@/data/navigation";

const benefits = [
  { icon: "Wrench", title: "Factory-trained technicians", body: "Brand-certified expertise across every machine we sell." },
  { icon: "Settings", title: "Genuine spare parts", body: "Stocked and fitted for reliability and warranty peace of mind." },
  { icon: "Truck", title: "Field & mobile support", body: "On-site service to keep you moving when it matters most." },
  { icon: "Calendar", title: "Scheduled servicing", body: "Stay ahead of breakdowns with planned maintenance." },
] as const;

export function ServiceBand() {
  return (
    <Section className="bg-ink-950">
      <div className="grid items-stretch gap-10 lg:grid-cols-2">
        {/* Image */}
        <Reveal className="relative">
          <Media
            photoId={PHOTO_IDS.welderSparks}
            alt="Factory-trained technician at work in the Prestige Tractors workshop"
            width={1100}
            className="aspect-[4/3] h-full rounded-2xl border border-ink-700 lg:aspect-auto"
            overlay="full"
          />
          <div data-theme="dark" className="glass absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-xl p-5 sm:left-6 sm:right-auto sm:max-w-xs">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
              <Icon name="Gauge" className="size-6" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-fg">Peak performance</p>
              <p className="text-sm text-ink-200">Maintained, season after season.</p>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={0.1} className="flex flex-col justify-center">
          <span className="eyebrow mb-4">Service Centre</span>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.05] text-fg sm:text-4xl lg:text-[2.75rem]">
            Keep your equipment working hard
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-200">
            Excellent product knowledge, workmanship and support is the backbone of Prestige Tractors. Our team understands the importance of knowing exactly how your machine operates.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-ink-600 bg-ink-850 text-brand-400">
                  <Icon name={b.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-fg">{b.title}</h3>
                  <p className="mt-1 text-sm text-ink-300">{b.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/service#book" icon="Calendar" iconPosition="left">Book a Service</Button>
            <Button to={ROUTES.parts} variant="secondary" icon="ArrowRight">Spare Parts</Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
