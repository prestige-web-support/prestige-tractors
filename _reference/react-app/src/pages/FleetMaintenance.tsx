import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { PHOTO_IDS } from "@/lib/images";
import { fleetServices } from "@/data/team";
import { site } from "@/data/site";
import { ROUTES } from "@/data/navigation";

export default function FleetMaintenance() {
  return (
    <>
      <PageHeader
        eyebrow="Prestige Fleet Maintenance"
        title="Trucks, fleet & commercial vehicle servicing"
        description="Beyond ag machinery, our Ballarat workshop services trucks, heavy and commercial vehicles — including breakdowns, roadworthy certificates and classic cars."
        photoId={PHOTO_IDS.oilService}
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: ROUTES.about }, { label: "Fleet Maintenance" }]}
        actions={
          <>
            <Button to={`${ROUTES.contact}?enquiry=Fleet maintenance`} icon="ArrowRight">Enquire Now</Button>
            <Button href={site.phoneHref} variant="glass" icon="PhoneCall" iconPosition="left">{site.phone}</Button>
          </>
        }
      />

      <Section className="bg-ink-950">
        <SectionHeading
          eyebrow="Our services"
          title="Keeping Ballarat's vehicles on the road"
          description="From routine servicing to roadside breakdowns, our team keeps trucks, light commercials and classics running reliably."
        />
        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fleetServices.map((s) => (
            <motion.div key={s} variants={staggerItem} className="surface flex items-center gap-4 rounded-2xl p-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                <Icon name="Truck" className="size-6" />
              </span>
              <span className="font-display text-lg font-bold text-fg">{s}</span>
            </motion.div>
          ))}
        </StaggerGroup>
      </Section>

      <Section className="border-t border-fg/5 bg-ink-900/40">
        <Reveal className="surface flex flex-col items-start gap-6 rounded-3xl p-8 text-left sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-extrabold text-fg sm:text-3xl">Need a vehicle looked at?</h2>
            <p className="mt-3 text-ink-200">
              Talk to our fleet maintenance team about servicing, repairs, RWC inspections or breakdown support across Ballarat and surrounding areas.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button to={`${ROUTES.contact}?enquiry=Fleet maintenance`} icon="ArrowRight">Enquire</Button>
            <Button href={site.phoneHref} variant="secondary" icon="PhoneCall" iconPosition="left">Call us</Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
