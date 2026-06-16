import { useState } from "react";
import { Field, Input, Textarea, Select } from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "./FormSuccess";

const enquiryTypes = ["General enquiry", "Equipment / sales", "Service booking", "Spare parts", "Finance", "Fleet maintenance"];

export function ContactForm({ prefillEnquiry }: { prefillEnquiry?: string } = {}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <FormSuccess
        title="Thanks — we've got your message"
        body="A member of the Prestige Tractors team will be in touch shortly. For urgent enquiries, call us on (03) 5339 2056."
      />
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="surface rounded-2xl p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" htmlFor="c-first" required>
          <Input id="c-first" name="firstName" autoComplete="given-name" required />
        </Field>
        <Field label="Last name" htmlFor="c-last" required>
          <Input id="c-last" name="lastName" autoComplete="family-name" required />
        </Field>
        <Field label="Email" htmlFor="c-email" required>
          <Input id="c-email" name="email" type="email" autoComplete="email" required />
        </Field>
        <Field label="Phone" htmlFor="c-phone">
          <Input id="c-phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
        <Field label="Enquiry type" htmlFor="c-type" className="sm:col-span-2">
          <Select id="c-type" name="enquiryType" defaultValue={prefillEnquiry ? "Equipment / sales" : ""}>
            <option value="" disabled>Select an option</option>
            {enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </Select>
        </Field>
        <Field label="Message" htmlFor="c-message" className="sm:col-span-2" required>
          <Textarea
            id="c-message"
            name="message"
            placeholder="Tell us how we can help…"
            defaultValue={prefillEnquiry ? `I'd like more information about the ${prefillEnquiry}.` : undefined}
            required
          />
        </Field>
      </div>
      <Button type="submit" icon="Send" className="mt-6" fullWidth>Send Message</Button>
      <p className="mt-3 text-center text-xs text-ink-400">
        We'll never share your details. Demo form — connect to your CRM or email service to go live.
      </p>
    </form>
  );
}
