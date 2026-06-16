import { useState } from "react";
import { Field, Input, Textarea, Select } from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "./FormSuccess";

const conditions = ["New machinery", "Used machinery", "Not sure yet"];
const sectors = ["Farming", "Horticulture", "Contracting", "Viticulture", "Government", "Lifestyle / hobby farm", "Other"];

export function FinanceEnquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <FormSuccess
        title="Finance enquiry received"
        body="We'll be in touch to discuss competitive rates and structure finance to suit your cash flow. For a fast chat, call (03) 5339 2056."
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
        <Field label="Full name" htmlFor="f-name" required>
          <Input id="f-name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Business name" htmlFor="f-business">
          <Input id="f-business" name="business" autoComplete="organization" />
        </Field>
        <Field label="Email" htmlFor="f-email" required>
          <Input id="f-email" name="email" type="email" autoComplete="email" required />
        </Field>
        <Field label="Phone" htmlFor="f-phone" required>
          <Input id="f-phone" name="phone" type="tel" autoComplete="tel" required />
        </Field>
        <Field label="Machinery condition" htmlFor="f-condition">
          <Select id="f-condition" name="condition" defaultValue="">
            <option value="" disabled>Select condition</option>
            {conditions.map((c) => <option key={c} value={c}>{c}</option>)}
          </Select>
        </Field>
        <Field label="Sector" htmlFor="f-sector">
          <Select id="f-sector" name="sector" defaultValue="">
            <option value="" disabled>Select sector</option>
            {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
          </Select>
        </Field>
        <Field label="Estimated amount (AUD)" htmlFor="f-amount">
          <Input id="f-amount" name="amount" inputMode="numeric" placeholder="e.g. 45,000" />
        </Field>
        <Field label="Equipment of interest" htmlFor="f-equipment">
          <Input id="f-equipment" name="equipment" placeholder="e.g. Bobcat CT4055" />
        </Field>
        <Field label="Anything else?" htmlFor="f-notes" className="sm:col-span-2">
          <Textarea id="f-notes" name="notes" placeholder="Tell us about your operation and timing…" />
        </Field>
      </div>
      <Button type="submit" icon="ArrowRight" className="mt-6" fullWidth>Submit Finance Enquiry</Button>
      <p className="mt-3 text-center text-xs text-ink-400">
        Indicative only and subject to lender approval. Demo form — connect to your finance broker workflow to go live.
      </p>
    </form>
  );
}
