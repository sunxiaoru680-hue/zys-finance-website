# HubSpot CRM integration

The ZYS Advisory contact form submits to the server-side route:

`POST /api/contact`

The API validates the inquiry, applies basic spam controls, and sends the lead to HubSpot CRM using the official CRM Contacts API. The HubSpot Private App Token must only be stored in Vercel Environment Variables.

## Required Vercel Environment Variable

- `HUBSPOT_PRIVATE_APP_TOKEN`

## Recommended HubSpot Contact Properties

Create these custom contact properties in HubSpot, or change the matching environment variables to the internal names used in your HubSpot portal:

- `zys_service_interested`
- `zys_budget`
- `zys_message`
- `zys_lead_source`

Optional environment variable overrides:

- `HUBSPOT_SERVICE_INTERESTED_PROPERTY`
- `HUBSPOT_BUDGET_PROPERTY`
- `HUBSPOT_MESSAGE_PROPERTY`
- `HUBSPOT_SOURCE_PROPERTY`

## Field Mapping

- First Name -> `firstname`
- Last Name -> `lastname`
- Company -> `company`
- Country -> `country`
- Email -> `email`
- WhatsApp -> `phone`
- Service Interested -> `zys_service_interested` or `HUBSPOT_SERVICE_INTERESTED_PROPERTY`
- Budget -> `zys_budget` or `HUBSPOT_BUDGET_PROPERTY`
- Message -> `zys_message` or `HUBSPOT_MESSAGE_PROPERTY`
- Lead Source -> `zys_lead_source` or `HUBSPOT_SOURCE_PROPERTY`

## Spam Controls

- Honeypot field
- Minimum form completion time
- Maximum form age
- Basic per-IP rate limiting
- Email validation
- Message link-count validation
- Server-side required-field validation

## Behavior

If a contact with the same email already exists, the API updates that contact instead of creating a duplicate record.
