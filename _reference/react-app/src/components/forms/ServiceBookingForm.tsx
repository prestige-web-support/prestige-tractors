import { useState } from "react";
import { Field, Input, Textarea, Select } from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "./FormSuccess";

const serviceTypes = [
  "Scheduled service",
  "Repair / diagnostics",
  "Pre-season check",
  "Warranty work",
  "Field / mobile service",
  "Fleet maintenance",
];

export function ServiceBookingForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <FormSuccess
        title="Service request received"
        body="Our workshop team will confirm your booking and preferred time by phone or email. Need it sooner? Call (03) 5339 2056."
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
        <Field label="Full name" htmlFor="s-name" required>
          <Input id="s-name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Phone" htmlFor="s-phone" required>
          <Input id="s-phone" name="phone" type="tel" autoComplete="tel" required />
        </Field>
        <Field label="Email" htmlFor="s-email" required>
          <Input id="s-email" name="email" type="email" autoComplete="email" required />
        </Field>
        <Field label="Preferred date" htmlFor="s-date">
          <Input id="s-date" name="date" type="date" />
        </Field>
        <Field label="Service type" htmlFor="s-type" required>
          <Select id="s-type" name="serviceType" defaultValue="" required>
            <option value="" disabled>Select service type</option>
            {serviceTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </Select>
        </Field>
        <Field label="Machine make / model" htmlFor="s-machine">
          <Input id="s-machine" name="machine" placeholder="e.g. McCormick X7" />
        </Field>
        <Field label="What needs attention?" htmlFor="s-notes" className="sm:col-span-2">
          <Textarea id="s-notes" name="notes" placeholder="Describe the work, symptoms or service due…" />
        </Field>
      </div>
      <Button type="submit" icon="Calendar" iconPosition="left" className="mt-6" fullWidth>Request Booking</Button>
      <p className="mt-3 text-center text-xs text-ink-400">
        Demo form — connect to your booking system or email service to go live.
      </p>
    </form>
  );
}
