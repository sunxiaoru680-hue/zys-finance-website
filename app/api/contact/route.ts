import { NextResponse } from "next/server";
import { createOrUpdateHubSpotContact, type ContactSubmission } from "@/lib/hubspot";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactRequestBody = Partial<ContactSubmission> & {
  website?: string;
  submittedAt?: string;
};

const submissions = new Map<string, number[]>();
const requiredFields: Array<keyof ContactSubmission> = ["firstName", "lastName", "email", "serviceInterested", "message"];

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function getClientKey(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(clientKey: string) {
  const now = Date.now();
  const windowStart = now - 15 * 60 * 1000;
  const recent = (submissions.get(clientKey) || []).filter((timestamp) => timestamp > windowStart);

  if (recent.length >= 5) {
    submissions.set(clientKey, recent);
    return true;
  }

  recent.push(now);
  submissions.set(clientKey, recent);
  return false;
}

function validateSubmission(body: ContactRequestBody) {
  const submittedAt = Number(body.submittedAt || 0);
  const elapsed = Date.now() - submittedAt;

  if (body.website) {
    return "Unable to accept this submission.";
  }

  if (!submittedAt || elapsed < 3000 || elapsed > 30 * 60 * 1000) {
    return "Please refresh the page and submit the form again.";
  }

  const email = clean(body.email, 254);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid business email address.";
  }

  const message = clean(body.message, 4000);
  const urlCount = (message.match(/https?:\/\//gi) || []).length;
  if (urlCount > 2) {
    return "Please remove extra links from your message.";
  }

  for (const field of requiredFields) {
    if (!clean(body[field], field === "message" ? 4000 : 200)) {
      return "Please complete all required fields.";
    }
  }

  return "";
}

function normalizeSubmission(body: ContactRequestBody): ContactSubmission {
  return {
    firstName: clean(body.firstName, 100),
    lastName: clean(body.lastName, 100),
    company: clean(body.company, 160),
    country: clean(body.country, 100),
    email: clean(body.email, 254).toLowerCase(),
    whatsapp: clean(body.whatsapp, 80),
    serviceInterested: clean(body.serviceInterested, 160),
    budget: clean(body.budget, 100),
    message: clean(body.message, 4000)
  };
}

export async function POST(request: Request) {
  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  let body: ContactRequestBody;
  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Request body must be valid JSON." }, { status: 400 });
  }

  const validationError = validateSubmission(body);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  try {
    const result = await createOrUpdateHubSpotContact(normalizeSubmission(body));
    return NextResponse.json({
      ok: true,
      action: result.action,
      contactId: result.contactId
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to submit contact form.";
    return NextResponse.json({ ok: false, error: message }, { status: 502 });
  }
}
