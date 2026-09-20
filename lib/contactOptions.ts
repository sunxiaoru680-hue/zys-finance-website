export const contactServiceOptions = [
  { label: "China company registration", value: "China Company Registration" },
  { label: "Overseas company registration", value: "Overseas Company Registration" },
  { label: "Accounting & bookkeeping", value: "VAccounting & bookkeeping" },
  { label: "Tax advisory", value: "Tax Consulting" },
  { label: "Tax planning", value: "Tax planning" },
  { label: "Audit services", value: "Accounting Service" },
  { label: "Business license application", value: "Other" },
  { label: "Work visa", value: "Visa Service" },
  { label: "Foreign investment consulting", value: "Other" }
] as const;

export const contactBudgetOptions = [
  { label: "Under USD 1,000", value: "Under USD 1,000" },
  { label: "USD 1,000 - 3,000", value: "USD 1,000 - 3,000" },
  { label: "USD 3,000 - 5,000", value: "USD 3,000 - 5,000" },
  { label: "USD 5,000 - 10,000", value: "USD 5,000 - 10,000" },
  { label: "USD 10,000+", value: "USD 10,000+" },
  { label: "Not sure yet", value: "Not Sure Yet" }
] as const;

const serviceValueByNormalizedInput = new Map(
  contactServiceOptions.flatMap((option) => [
    [normalizeServiceInput(option.label), option.value],
    [normalizeServiceInput(option.value), option.value]
  ])
);

const budgetValueByNormalizedInput = new Map(
  contactBudgetOptions.flatMap((option) => [
    [normalizeServiceInput(option.label), option.value],
    [normalizeServiceInput(option.value), option.value]
  ])
);

export function normalizeServiceInput(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function mapServiceInterestedToHubSpotValue(value: string) {
  return serviceValueByNormalizedInput.get(normalizeServiceInput(value)) || "";
}

export function mapBudgetToHubSpotValue(value: string) {
  const normalized = normalizeServiceInput(value);
  return normalized ? budgetValueByNormalizedInput.get(normalized) || "" : "";
}
