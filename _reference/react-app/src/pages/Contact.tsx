import { useSearchParams } from "react-router-dom";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ContactForm } from "@/components/forms/ContactForm";
import { LocationBlock } from "@/components/shared/LocationBlock";
import { PHOTO_IDS } from "@/lib/images";
import { site } from "@/data/site";

const quickContacts: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "PhoneCall", label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: "Mail", label: "Email", value: site.email, href: site.emailHref },
  { icon: "MapPin", label: "Address", value: site.addressLine },
];

export default function Contact() {
  const [params] = useSearchParams();
  const enquiry = params.get("enquiry") ?? undefined;

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's talk machinery"
        description="Buying, financing, servicing or sourcing parts — our local Wendouree team is here to help. Send a message and we'll be in touch."
        photoId={PHOTO_IDS.greenFieldSunset}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section className="bg-ink-950">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-bold text-fg">Get in touch</h2>
            <p className="text-ink-200">
              Reach the team directly, or use the form and we'll route your enquiry to the right department.
            </p>
            {quickContacts.map((c) => {
              const inner = (
                <div className="surface flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-ink-500">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                    <Icon name={c.icon} className="size-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">{c.label}</p>
                    <p className="mt-0.5 font-display text-lg font-bold text-fg">{c.value}</p>
                  </div>
                </div>
              );
              return c.href ? <a key={c.label} href={c.href}>{inner}</a> : <div key={c.label}>{inner}</div>;
            })}
            <div className="surface rounded-2xl p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                <Icon name="Clock" className="size-4 text-brand-400" /> Opening hours
              </p>
              <dl className="mt-3 space-y-2">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between text-sm">
                    <dt className="text-ink-300">{h.days}</dt>
                    <dd className="font-medium text-fg">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm prefillEnquiry={enquiry} />
          </Reveal>
        </div>
      </Section>

      <LocationBlock withHeading />
    </>
  );
}
