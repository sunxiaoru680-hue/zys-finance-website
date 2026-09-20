import { NextResponse } from "next/server";
import { contactServiceOptions } from "@/lib/contactOptions";
import { assertAuthorizedRequest } from "@/lib/facebook-publishing";
import { createOrUpdateHubSpotContact } from "@/lib/hubspot";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const authorization = assertAuthorizedRequest(request);

  if (!authorization.ok) {
    return NextResponse.json({ ok: false, error: authorization.error }, { status: authorization.status });
  }

  const timestamp = Date.now();
  const results = await Promise.all(
    contactServiceOptions.map(async (option, index) => {
      try {
        const result = await createOrUpdateHubSpotContact({
          firstName: "QA",
          lastName: `Service ${index + 1}`,
          company: "ZYS Advisory Website QA",
          country: "Test",
          email: `qa-service-${timestamp}-${index + 1}@zysadvisory.com`,
          whatsapp: "+86 18055161721",
          serviceInterested: option.value,
          budget: "Not Sure Yet",
          message: `Automated QA contact form submission for service option: ${option.label}.`
        });

        return {
          label: option.label,
          hubspotValue: option.value,
          ok: true,
          action: result.action,
          contactIdPresent: Boolean(result.contactId)
        };
      } catch {
        return {
          label: option.label,
          hubspotValue: option.value,
          ok: false,
          action: "",
          contactIdPresent: false
        };
      }
    })
  );

  return NextResponse.json({
    ok: results.every((result) => result.ok),
    tested: results.length,
    results
  });
}
