export type ContactSubmission = {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  email: string;
  whatsapp: string;
  serviceInterested: string;
  budget: string;
  message: string;
};

type HubSpotObjectResponse = {
  id?: string;
  properties?: Record<string, string>;
  message?: string;
  category?: string;
};

type HubSpotSearchResponse = {
  total?: number;
  results?: HubSpotObjectResponse[];
  message?: string;
  category?: string;
};

export function getHubSpotConfig() {
  return {
    privateAppToken: process.env.HUBSPOT_PRIVATE_APP_TOKEN || "",
    serviceInterestedProperty: process.env.HUBSPOT_SERVICE_INTERESTED_PROPERTY || "zys_service_interested",
    budgetProperty: process.env.HUBSPOT_BUDGET_PROPERTY || "zys_budget",
    messageProperty: process.env.HUBSPOT_MESSAGE_PROPERTY || "zys_message",
    sourceProperty: process.env.HUBSPOT_SOURCE_PROPERTY || "zys_lead_source"
  };
}

function safeHubSpotError(status: number, payload: HubSpotObjectResponse | HubSpotSearchResponse) {
  const message = payload.message || "HubSpot request failed.";
  const category = payload.category ? ` ${payload.category}.` : "";
  return `HubSpot API error ${status}.${category} ${message}`;
}

function cleanProperties(properties: Record<string, string>) {
  return Object.fromEntries(Object.entries(properties).filter(([, value]) => value.trim().length > 0));
}

async function hubSpotFetch<T>(path: string, init: RequestInit) {
  const { privateAppToken } = getHubSpotConfig();

  if (!privateAppToken) {
    throw new Error("HUBSPOT_PRIVATE_APP_TOKEN is not configured.");
  }

  const response = await fetch(`https://api.hubapi.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${privateAppToken}`,
      "Content-Type": "application/json",
      ...init.headers
    },
    cache: "no-store"
  });
  const payload = (await response.json()) as T & HubSpotObjectResponse & HubSpotSearchResponse;

  if (!response.ok) {
    throw new Error(safeHubSpotError(response.status, payload));
  }

  return payload as T;
}

export function buildHubSpotContactProperties(submission: ContactSubmission) {
  const config = getHubSpotConfig();

  return cleanProperties({
    firstname: submission.firstName,
    lastname: submission.lastName,
    company: submission.company,
    country: submission.country,
    email: submission.email,
    phone: submission.whatsapp,
    [config.serviceInterestedProperty]: submission.serviceInterested,
    [config.budgetProperty]: submission.budget,
    [config.messageProperty]: submission.message,
    [config.sourceProperty]: "ZYS Advisory website contact form"
  });
}

async function findContactByEmail(email: string) {
  const result = await hubSpotFetch<HubSpotSearchResponse>("/crm/v3/objects/contacts/search", {
    method: "POST",
    body: JSON.stringify({
      filterGroups: [
        {
          filters: [
            {
              propertyName: "email",
              operator: "EQ",
              value: email
            }
          ]
        }
      ],
      properties: ["email"],
      limit: 1
    })
  });

  return result.results?.[0] || null;
}

export async function createOrUpdateHubSpotContact(submission: ContactSubmission) {
  const properties = buildHubSpotContactProperties(submission);
  const existing = await findContactByEmail(submission.email);

  if (existing?.id) {
    const updated = await hubSpotFetch<HubSpotObjectResponse>(`/crm/v3/objects/contacts/${existing.id}`, {
      method: "PATCH",
      body: JSON.stringify({ properties })
    });

    return {
      action: "updated" as const,
      contactId: updated.id || existing.id
    };
  }

  const created = await hubSpotFetch<HubSpotObjectResponse>("/crm/v3/objects/contacts", {
    method: "POST",
    body: JSON.stringify({ properties })
  });

  return {
    action: "created" as const,
    contactId: created.id || ""
  };
}
