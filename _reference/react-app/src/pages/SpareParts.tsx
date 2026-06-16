import { Link } from "react-router-dom";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { PHOTO_IDS } from "@/lib/images";
import { brands } from "@/data/brands";
import { site } from "@/data/site";
import { ROUTES } from "@/data/navigation";

// Brands explicitly named on the live Spare Parts page.
const partsBrands = ["mccormick", "dakenag", "grasshopper", "enorossi", "bobcat"];

const benefits: { icon: IconName; title: string; body: string }[] = [
  { icon: "ShieldCheck", title: "Genuine components", body: "Manufacturer-genuine parts engineered to fit and last — protecting performance and warranty." },
  { icon: "Package", title: "Wide stock holding", body: "Common service and wear parts kept on hand to get you back to work fast." },
  { icon: "Headset", title: "Expert advice", body: "Our parts department helps you identify exactly the right part, first time." },
  { icon: "Truck", title: "Order & dispatch", body: "Can't make it in? We'll source and dispatch the parts you need." },
];

const checklist = [
  "Machine make & model",
  "Serial / VIN number (if known)",
  "Part name or number",
  "A photo of the part or area",
];

export default function SpareParts() {
  return (
    <>
      <PageHeader
        eyebrow="Spare Parts"
        title="Genuine parts, expertly matched"
        description="Our parts department is fully equipped to assist with all enquiries for McCormick, Daken, Grasshopper, Enorossi and Bobcat spare parts — and more."
        photoId={PHOTO_IDS.toolWall}
        crumbs={[{ label: "Home", href: "/" }, { label: "Spare Parts" }]}
        actions={
          <>
            <Button to={`${ROUTES.contact}?enquiry=Spare parts`} icon="ArrowRight">Request Parts</Button>
            <Button href={site.phoneHref} variant="glass" icon="PhoneCall" iconPosition="left">{site.phone}</Button>
          </>
        }
      />

      {/* Why genuine */}
      <Section className="bg-ink-950">
        <SectionHeading
          eyebrow="Parts department"
          title="The right part, the first time"
          description="Genuine parts keep your machinery reliable, safe and covered. Our team makes sourcing them simple."
        />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <motion.div key={b.title} variants={staggerItem} className="surface rounded-2xl p-7">
              <span className="flex size-12 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                <Icon name={b.icon} className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-fg">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{b.body}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </Section>

      {/* Brands supported */}
      <Section className="border-y border-fg/5 bg-ink-900/40">
        <SectionHeading eyebrow="Brands we stock" title="Parts support across every brand" />
        <div className="mt-10 flex flex-wrap gap-3">
          {brands.map((b) => {
            const named = partsBrands.includes(b.slug);
            return (
              <Link
                key={b.slug}
                to={ROUTES.brand(b.slug)}
                className={`rounded-xl border px-5 py-3 transition-colors ${named ? "border-brand-500/40 bg-brand-500/5 hover:border-brand-500" : "border-ink-700 hover:border-ink-500"}`}
              >
                <BrandWordmark brand={b} className="text-lg text-fg" />
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Request parts */}
      <Section className="bg-ink-950">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Media photoId={PHOTO_IDS.engineBelts} alt="Genuine machinery parts" width={900} className="aspect-[16/11] rounded-2xl border border-ink-700" overlay="full" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow mb-4">Request a part</span>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-fg sm:text-4xl">
              Tell us what you need
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-200">
              To help us find the exact part quickly, have the following handy when you get in touch:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {checklist.map((c) => (
                <li key={c} className="surface flex items-center gap-3 rounded-xl p-4 text-sm text-ink-100">
                  <Icon name="CircleCheck" className="size-5 shrink-0 text-brand-400" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={`${ROUTES.contact}?enquiry=Spare parts`} icon="ArrowRight">Request Parts</Button>
              <Button to={ROUTES.service} variant="secondary" icon="Wrench" iconPosition="left">Book a Service</Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
