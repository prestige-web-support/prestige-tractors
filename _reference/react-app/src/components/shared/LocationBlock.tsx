import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

const contactCards: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "MapPin", label: "Visit us", value: site.addressLine },
  { icon: "PhoneCall", label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: "Mail", label: "Email us", value: site.email, href: site.emailHref },
];

export function LocationBlock({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <Section className="bg-ink-950">
      {withHeading && (
        <SectionHeading
          eyebrow="Find us"
          title="Visit the Wendouree showroom"
          description="Drop in to see the range, talk machinery and meet the team that backs every sale with local support."
        />
      )}

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="overflow-hidden rounded-2xl border border-ink-700">
          <iframe
            title={`Map to ${site.fullName}`}
            src={`https://www.google.com/maps?q=${site.mapsQuery}&output=embed`}
            className="h-full min-h-[24rem] w-full grayscale-[0.3] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-4">
          {contactCards.map((c) => {
            const inner = (
              <div className="surface flex items-start gap-4 rounded-2xl p-6 transition-colors hover:border-ink-500">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                  <Icon name={c.icon} className="size-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">{c.label}</p>
                  <p className="mt-1 font-display text-lg font-bold text-fg">{c.value}</p>
                </div>
              </div>
            );
            return c.href ? <a key={c.label} href={c.href}>{inner}</a> : <div key={c.label}>{inner}</div>;
          })}

          <div className="surface rounded-2xl p-6">
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

          <Button to="/contact" fullWidth icon="ArrowRight">Send an enquiry</Button>
        </Reveal>
      </div>
    </Section>
  );
}
