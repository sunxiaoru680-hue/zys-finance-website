import { NextResponse } from "next/server";
import { assertAuthorizedRequest } from "@/lib/facebook-publishing";
import { getHubSpotConfig } from "@/lib/hubspot";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type HubSpotPropertyResponse = {
  name?: string;
  label?: string;
  options?: Array<{
    label?: string;
    value?: string;
    hidden?: boolean;
  }>;
  message?: string;
  category?: string;
};

export async function GET(request: Request) {
  const authorization = assertAuthorizedRequest(request);

  if (!authorization.ok) {
    return NextResponse.json({ ok: false, error: authorization.error }, { status: authorization.status });
  }

  const { privateAppToken, serviceInterestedProperty } = getHubSpotConfig();

  if (!privateAppToken) {
    return NextResponse.json({ ok: false, error: "HUBSPOT_PRIVATE_APP_TOKEN is not configured." }, { status: 500 });
  }

  const response = await fetch(
    `https://api.hubapi.com/crm/v3/properties/contacts/${encodeURIComponent(serviceInterestedProperty)}`,
    {
      headers: {
        Authorization: `Bearer ${privateAppToken}`,
        "Content-Type": "application/json"
      },
      cache: "no-store"
    }
  );
  const payload = (await response.json()) as HubSpotPropertyResponse;

  if (!response.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to read HubSpot service options.",
        status: response.status,
        category: payload.category || ""
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    property: payload.name || serviceInterestedProperty,
    label: payload.label || "",
    options: (payload.options || []).map((option) => ({
      label: option.label || "",
      value: option.value || "",
      hidden: Boolean(option.hidden)
    }))
  });
}
