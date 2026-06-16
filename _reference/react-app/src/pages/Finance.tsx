import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { Accordion, type QA } from "@/components/ui/Accordion";
import { FinanceEnquiryForm } from "@/components/forms/FinanceEnquiryForm";
import { motion } from "framer-motion";
import { PHOTO_IDS } from "@/lib/images";
import { site } from "@/data/site";

const options: { icon: IconName; title: string; body: string }[] = [
  { icon: "FileText", title: "Chattel Mortgage", body: "Own the machine from day one with potential GST and depreciation benefits — a popular choice for businesses." },
  { icon: "Banknote", title: "Equipment Loan", body: "Straightforward finance for new or used machinery with competitive fixed rates and flexible terms." },
  { icon: "Handshake", title: "Finance Lease", body: "Use the equipment with structured payments and end-of-term options to suit your cash flow." },
  { icon: "Gauge", title: "Seasonal Structures", body: "Repayments aligned to your income cycle — ideal for farming and seasonal operations." },
];

const steps = [
  { n: "01", title: "Tell us your needs", body: "Share the equipment, amount and your operation via our quick enquiry." },
  { n: "02", title: "We structure options", body: "We work with lenders to find competitive rates and terms that fit." },
  { n: "03", title: "Approval", body: "Provide a few details and we guide the application through to approval." },
  { n: "04", title: "Get to work", body: "Drive away in your new machine with finance sorted and payments that suit." },
];

const faqs: QA[] = [
  { q: "Can you finance both new and used machinery?", a: "Yes. We can arrange finance for both new and used machinery at competitive interest rates, tailored to your situation." },
  { q: "Which sectors do you finance?", a: "We provide and finance machinery for government, farming, horticulture, contracting, viticulture and lifestyle properties." },
  { q: "How are repayments structured?", a: "Repayments can be structured around your cash flow — including seasonal options that align with farming income cycles." },
  { q: "Is finance approval guaranteed?", a: "Finance is subject to lender approval and your circumstances. We'll help present your application in the best light." },
];

export default function Finance() {
  return (
    <>
      <PageHeader
        eyebrow="Finance"
        title="Finance to suit your season"
        description="We can arrange finance for both new and used machinery with competitive interest rates — structured around your cash flow and seasonal income."
        photoId={PHOTO_IDS.financeChart}
        crumbs={[{ label: "Home", href: "/" }, { label: "Finance" }]}
      />

      {/* Options */}
      <Section className="bg-ink-950">
        <SectionHeading
          eyebrow="Finance options"
          title="Flexible ways to fund your machinery"
          description="From chattel mortgages to seasonal repayment structures, we'll match you to the right solution."
        />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((o) => (
            <motion.div key={o.title} variants={staggerItem} className="surface rounded-2xl p-7">
              <span className="flex size-12 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                <Icon name={o.icon} className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-fg">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{o.body}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </Section>

      {/* Sectors */}
      <Section className="border-y border-fg/5 bg-ink-900/40">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow mb-4">Who we help</span>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-fg sm:text-4xl">
              Machinery & finance for every operation
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-200">
              We provide machinery for a broad range of sectors and structure finance to match how each one earns.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {site.sectorsServed.map((s) => (
                <div key={s} className="surface flex items-center gap-3 rounded-xl p-4">
                  <Icon name="CircleCheck" className="size-5 shrink-0 text-brand-400" />
                  <span className="font-medium text-fg">{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-ink-950">
        <SectionHeading eyebrow="How it works" title="Finance in four simple steps" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Reveal key={s.n}>
              <div className="h-full rounded-2xl border border-ink-700 bg-ink-850 p-7">
                <span className="font-display text-4xl font-extrabold text-brand-500/30">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-fg">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-300">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Enquiry + FAQ */}
      <Section id="enquiry" className="border-t border-fg/5 bg-ink-900/40">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <span className="eyebrow mb-4">Finance enquiry</span>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-fg sm:text-4xl">
              Get a finance quote
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-200">
              Tell us about the machine and your operation. We'll come back with competitive options — no obligation.
            </p>
            <div className="mt-8">
              <h3 className="mb-4 font-display text-xl font-bold text-fg">Common questions</h3>
              <Accordion items={faqs} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <FinanceEnquiryForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
