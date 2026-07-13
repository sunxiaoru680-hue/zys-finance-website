"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { trackConsultationRequest } from "@/components/analytics";

export function ContactForm() {
  const router = useRouter();
  const [submittedAt] = useState(() => Date.now().toString());
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  return (
    <form
      className="rounded-md border border-line bg-white p-6 shadow-soft"
      onSubmit={async (event) => {
        event.preventDefault();
        setStatus("submitting");
        setError("");

        const formData = new FormData(event.currentTarget);
        const payload = {
          firstName: String(formData.get("firstName") || ""),
          lastName: String(formData.get("lastName") || ""),
          company: String(formData.get("company") || ""),
          country: String(formData.get("country") || ""),
          email: String(formData.get("email") || ""),
          whatsapp: String(formData.get("whatsapp") || ""),
          serviceInterested: String(formData.get("serviceInterested") || ""),
          budget: String(formData.get("budget") || ""),
          message: String(formData.get("message") || ""),
          website: String(formData.get("website") || ""),
          submittedAt
        };

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });
          const result = (await response.json()) as { ok?: boolean; error?: string };

          if (!response.ok || !result.ok) {
            throw new Error(result.error || "Unable to submit the form.");
          }

          trackConsultationRequest("contact_form");
          router.push("/contact/thank-you");
        } catch (submitError) {
          setStatus("error");
          setError(submitError instanceof Error ? submitError.message : "Unable to submit the form.");
        }
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          First Name
          <input
            required
            name="firstName"
            autoComplete="given-name"
            className="focus-ring min-h-11 rounded-md border border-line px-3 font-normal"
            placeholder="First name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Last Name
          <input
            required
            name="lastName"
            autoComplete="family-name"
            className="focus-ring min-h-11 rounded-md border border-line px-3 font-normal"
            placeholder="Last name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="focus-ring min-h-11 rounded-md border border-line px-3 font-normal"
            placeholder="name@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Company
          <input
            name="company"
            autoComplete="organization"
            className="focus-ring min-h-11 rounded-md border border-line px-3 font-normal"
            placeholder="Company name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Country
          <input
            name="country"
            autoComplete="country-name"
            className="focus-ring min-h-11 rounded-md border border-line px-3 font-normal"
            placeholder="Country or region"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          WhatsApp
          <input
            name="whatsapp"
            autoComplete="tel"
            className="focus-ring min-h-11 rounded-md border border-line px-3 font-normal"
            placeholder="+86 18055161721"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Service Interested
          <select
            required
            name="serviceInterested"
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
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Budget
          <select
            name="budget"
            className="focus-ring min-h-11 rounded-md border border-line px-3 font-normal"
            defaultValue=""
          >
            <option value="">Select a budget range</option>
            <option>Under USD 1,000</option>
            <option>USD 1,000 - 3,000</option>
            <option>USD 3,000 - 5,000</option>
            <option>USD 5,000 - 10,000</option>
            <option>USD 10,000+</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label className="hidden" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
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
        disabled={status === "submitting"}
        className="focus-ring mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-evergreen bg-evergreen px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>
      {status === "error" ? (
        <p className="mt-4 rounded-md bg-red-50 p-3 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </form>
  );
}
