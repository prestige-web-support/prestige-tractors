import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

const sections = [
  {
    h: "General information",
    p: `The information contained in this website is for general information purposes only. The information is provided by ${site.fullName} and, while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.`,
  },
  {
    h: "Specifications & pricing",
    p: "Equipment specifications, features, pricing and availability are indicative only and subject to change without notice. Images may depict optional equipment or overseas models. Please confirm all details, current pricing and availability with our sales team before purchase.",
  },
  {
    h: "Finance",
    p: "Any finance information is general in nature and does not constitute financial advice. Finance is subject to lender approval, terms, conditions and your individual circumstances. Speak with our team for tailored options.",
  },
  {
    h: "External links",
    p: "Through this website you may be able to link to other websites which are not under our control. We have no control over the nature, content and availability of those sites and the inclusion of any links does not necessarily imply a recommendation or endorsement.",
  },
  {
    h: "Limitation of liability",
    p: "In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.",
  },
];

export default function Disclaimer() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Disclaimer"
        description="Important information about the use of this website and the content it contains."
        crumbs={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
        size="default"
      />
      <Section className="bg-ink-950">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-display text-xl font-bold text-fg">{s.h}</h2>
                <p className="mt-3 leading-relaxed text-ink-300">{s.p}</p>
              </div>
            ))}
            <p className="border-t border-ink-700 pt-8 text-sm text-ink-500">
              {site.fullName} · {site.addressLine} · {site.phone} · A {site.parentGroup} company.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
