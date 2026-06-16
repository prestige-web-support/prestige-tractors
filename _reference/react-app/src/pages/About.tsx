import { Link } from "react-router-dom";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { motion } from "framer-motion";
import { PHOTO_IDS } from "@/lib/images";
import { site } from "@/data/site";
import { brands } from "@/data/brands";
import { team } from "@/data/team";
import { ROUTES } from "@/data/navigation";

const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "9", label: "Premium brands" },
  { value: "100%", label: "Genuine parts" },
  { value: "VIC", label: "Local support" },
];

const values: { icon: IconName; title: string; body: string }[] = [
  { icon: "Award", title: "Deep product knowledge", body: "Decades of hands-on experience across tractors, hay, spraying and attachments." },
  { icon: "ShieldCheck", title: "Genuine parts & warranty", body: "We stock and fit genuine components so your machine stays reliable and covered." },
  { icon: "Headset", title: "Local support that answers", body: "A dedicated Victorian team that knows your machine and picks up the phone." },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Your local agricultural equipment partner"
        description={`${site.fullName} is your local dealer for the world's leading farm machinery brands — backed by genuine parts, factory-trained servicing and a support team that's part of the ${site.parentGroup}.`}
        photoId={PHOTO_IDS.greenFieldSunset}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <Section className="bg-ink-950">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow mb-4">Our story</span>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-fg sm:text-4xl">
              Built on knowledge, trust and local support
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-200">
              <p>
                From our Wendouree base in Ballarat, Prestige Tractors has spent over two decades supporting Australian farmers, contractors and rural businesses with the machinery they depend on.
              </p>
              <p>
                We represent the world's most respected brands — McCormick, Bobcat, Mahindra, Enorossi, DakenAg, RapidSpray, Grasshopper, Orsi and Muratori — and we stand behind every machine with genuine parts and factory-trained servicing.
              </p>
              <p>
                Excellent product knowledge, workmanship and support is the backbone of everything we do. As part of the {site.parentGroup}, we combine the resources of a larger group with the personal service of a local dealer.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={ROUTES.equipment} icon="ArrowRight">Explore equipment</Button>
              <Button to={ROUTES.contact} variant="secondary">Get in touch</Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <Media photoId={PHOTO_IDS.tractorHarvest} alt="Tractor at work" width={600} className="aspect-[3/4] rounded-2xl border border-ink-700" />
            <Media photoId={PHOTO_IDS.teamMeeting} alt="The Prestige Tractors team" width={600} className="mt-8 aspect-[3/4] rounded-2xl border border-ink-700" />
          </Reveal>
        </div>
      </Section>

      {/* Stats */}
      <section className="border-y border-fg/5 bg-ink-900/50 py-14">
        <Container>
          <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <motion.div key={s.label} variants={staggerItem} className="text-center">
                <p className="font-display text-4xl font-extrabold text-fg sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm text-ink-300">{s.label}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Values */}
      <Section className="bg-ink-950">
        <SectionHeading align="center" eyebrow="What sets us apart" title="The Prestige difference" />
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <motion.div key={v.title} variants={staggerItem} className="surface rounded-2xl p-8 text-center">
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                <Icon name={v.icon} className="size-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-fg">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{v.body}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </Section>

      {/* Brands */}
      <Section className="border-y border-fg/5 bg-ink-900/40">
        <SectionHeading
          eyebrow="Brands we represent"
          title="The world's leading machinery, locally supported"
          description="Nine premium brands across tractors, hay, spraying, cultivation and grounds care — all under one roof."
        />
        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <motion.div key={b.id} variants={staggerItem}>
              <Link
                to={ROUTES.brand(b.slug)}
                className="surface group flex h-full flex-col rounded-2xl p-7 transition-colors hover:border-ink-500"
              >
                <div className="flex items-center justify-between">
                  <BrandWordmark brand={b} className="text-2xl text-fg" />
                  <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-ink-400">{b.origin}</span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-400">{b.category}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">{b.description}</p>
                <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-fg opacity-0 transition-opacity group-hover:opacity-100">
                  View range <Icon name="ArrowRight" className="size-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </StaggerGroup>
      </Section>

      {/* Team */}
      <Section className="bg-ink-950">
        <SectionHeading eyebrow="Our team" title="The people behind Prestige" description="Sales, parts, workshop and fleet — local experts ready to help." />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <motion.div key={m.name} variants={staggerItem} className="surface rounded-2xl p-7">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-xl font-extrabold text-fg">
                {m.initials}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-fg">{m.name}</h3>
              <p className="text-sm font-semibold text-brand-400">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">{m.bio}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </Section>

      {/* Fleet teaser */}
      <Section className="border-t border-fg/5 bg-ink-900/40">
        <div className="surface flex flex-col items-start gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-2xl">
            <span className="eyebrow mb-3">Also from Prestige</span>
            <h3 className="font-display text-2xl font-bold text-fg">Prestige Fleet Maintenance</h3>
            <p className="mt-2 text-ink-300">
              Beyond ag machinery, our team services trucks, heavy and commercial vehicles — including breakdowns, roadworthy certificates and classic cars across Ballarat.
            </p>
          </div>
          <Button to={ROUTES.fleet} icon="ArrowRight" className="shrink-0">Learn more</Button>
        </div>
      </Section>
    </>
  );
}
