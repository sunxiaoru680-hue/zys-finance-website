"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-md border border-line bg-white p-6 shadow-soft"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Full name
          <input
            required
            name="name"
            className="focus-ring min-h-11 rounded-md border border-line px-3 font-normal"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email
          <input
            required
            type="email"
            name="email"
            className="focus-ring min-h-11 rounded-md border border-line px-3 font-normal"
            placeholder="name@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Mobile / WhatsApp / WeChat / Facebook
          <input
            name="phone"
            className="focus-ring min-h-11 rounded-md border border-line px-3 font-normal"
            placeholder="+86 18055161721 or your preferred contact"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Service interest
          <select
            name="service"
            className="focus-ring min-h-11 rounded-md border border-line px-3 font-normal"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>China company registration</option>
            <option>Overseas company registration</option>
            <option>Accounting & bookkeeping</option>
            <option>Tax advisory</option>
            <option>Tax planning</option>
            <option>Audit services</option>
            <option>Business license application</option>
            <option>Work visa</option>
            <option>Foreign investment consulting</option>
          </select>
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-ink">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="focus-ring resize-y rounded-md border border-line px-3 py-3 font-normal"
          placeholder="Tell us about your business goals, timeline, and location."
        />
      </label>
      <button
        type="submit"
        className="focus-ring mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-evergreen bg-evergreen px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        Send Inquiry
      </button>
      {submitted ? (
        <p className="mt-4 rounded-md bg-paper p-3 text-sm font-medium text-evergreen">
          Thank you. Your inquiry has been captured locally for this demo. We will reply through your preferred contact channel as soon as possible.
        </p>
      ) : null}
    </form>
  );
}
