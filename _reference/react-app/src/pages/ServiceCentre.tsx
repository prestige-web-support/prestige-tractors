import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { ServiceBookingForm } from "@/components/forms/ServiceBookingForm";
import { PHOTO_IDS } from "@/lib/images";
import { site } from "@/data/site";
import { ROUTES } from "@/data/navigation";
import { motion } from "framer-motion";

const benefits: { icon: IconName; title: string; body: string }[] = [
  { icon: "Wrench", title: "Factory-trained technicians", body: "Brand-certified knowledge across every machine we sell and beyond." },
  { icon: "Settings", title: "Genuine spare parts", body: "Fitted with genuine components for reliability and warranty cover." },
  { icon: "Truck", title: "Field & mobile service", body: "On-farm support to minimise downtime during critical windows." },
  { icon: "Gauge", title: "Diagnostics & repairs", body: "Modern diagnostics to pinpoint issues fast and fix them right." },
  { icon: "Calendar", title: "Scheduled maintenance", body: "Planned servicing programmes that head off costly breakdowns." },
  { icon: "Headset", title: "Local support team", body: "Real people who know your machine and pick up the phone." },
];

const steps = [
  { n: "01", title: "Book it in", body: "Request a booking online or call the workshop. Tell us the machine and the job." },
  { n: "02", title: "Assess & quote", body: "We diagnose, confirm the work required and provide a clear quote." },
  { n: "03", title: "Service & repair", body: "Factory-trained techs carry out the work with genuine parts." },
  { n: "04", title: "Back to work", body: "We test, hand back and keep records for your next scheduled service." },
];

export default function ServiceCentre() {
  return (
    <>
      <PageHeader
        eyebrow="Service Centre"
        title="Keep your equipment working hard"
        description="Excellent product knowledge, workmanship and support is the backbone of Prestige Tractors. Book factory-trained servicing, repairs and genuine parts."
        photoId={PHOTO_IDS.welderSparks}
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Centre" }]}
        actions={
          <>
            <Button to="#book" icon="Calendar" iconPosition="left">Book a Service</Button>
            <Button href={site.phoneHref} variant="glass" icon="PhoneCall" iconPosition="left">{site.phone}</Button>
          </>
        }
      />

      {/* Benefits */}
      <Section className="bg-ink-950">
        <SectionHeading
          align="center"
          eyebrow="Why our workshop"
          title="Servicing you can rely on"
          description="From scheduled maintenance to major repairs, our workshop keeps your machinery performing at its peak."
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <motion.div key={b.title} variants={staggerItem} className="surface group rounded-2xl p-7 transition-colors hover:border-ink-500">
              <span className="flex size-12 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <Icon name={b.icon} className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-fg">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{b.body}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </Section>

      {/* Process */}
      <Section className="border-y border-fg/5 bg-ink-900/40">
        <SectionHeading eyebrow="How it works" title="A simple path to peak performance" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Reveal key={s.n}>
              <div className="relative h-full rounded-2xl border border-ink-700 bg-ink-850 p-7">
                <span className="font-display text-4xl font-extrabold text-brand-500/30">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-fg">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-300">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Booking */}
      <Section id="book" className="bg-ink-950">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="eyebrow mb-4">Book a service</span>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-fg sm:text-4xl">
              Request your booking
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-200">
              Tell us about your machine and what needs attention. Our workshop team will confirm a time that works for you.
            </p>

            <Media photoId={PHOTO_IDS.oilService} alt="Technician servicing a machine" width={900} className="mt-8 aspect-[16/10] rounded-2xl border border-ink-700" overlay="full" />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="surface rounded-xl p-5">
                <Icon name="Clock" className="size-5 text-brand-400" />
                <p className="mt-3 text-sm font-semibold text-fg">Workshop hours</p>
                {site.hours.map((h) => (
                  <p key={h.days} className="text-sm text-ink-300">{h.days}: {h.time}</p>
                ))}
              </div>
              <div className="surface rounded-xl p-5">
                <Icon name="PhoneCall" className="size-5 text-brand-400" />
                <p className="mt-3 text-sm font-semibold text-fg">Prefer to call?</p>
                <a href={site.phoneHref} className="text-sm text-brand-300 hover:text-brand-200">{site.phone}</a>
                <a href={site.emailHref} className="mt-1 block text-sm text-ink-300 hover:text-fg">{site.email}</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ServiceBookingForm />
          </Reveal>
        </div>
      </Section>

      {/* Cross-sell */}
      <Section className="border-t border-fg/5 bg-ink-900/40">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="surface flex flex-col justify-between gap-6 rounded-2xl p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-bold text-fg">Need genuine parts?</h3>
              <p className="mt-2 text-ink-300">Our parts department supports every brand we stock.</p>
            </div>
            <Button to={ROUTES.parts} variant="secondary" icon="ArrowRight">Spare Parts</Button>
          </div>
          <div className="surface flex flex-col justify-between gap-6 rounded-2xl p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-bold text-fg">Trucks & fleet?</h3>
              <p className="mt-2 text-ink-300">Prestige Fleet Maintenance covers heavy & commercial vehicles.</p>
            </div>
            <Button to={ROUTES.fleet} variant="secondary" icon="ArrowRight">Fleet Maintenance</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
