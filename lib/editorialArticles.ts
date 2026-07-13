import { siteUrl } from "@/components/seo";

export type EditorialFaq = {
  question: string;
  answer: string;
};

export type EditorialSection = {
  heading: string;
  paragraphs: string[];
};

export type EditorialArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  summary: string;
  published: string;
  updated: string;
  category: string;
  readingTime: string;
  keyword: string;
  imageAlt: string;
  sections: EditorialSection[];
  faqs: EditorialFaq[];
  relatedServiceHrefs: string[];
  relatedArticleSlugs: string[];
  facebookPost: string;
};

export const editorialArticles: EditorialArticle[] = [
  {
    slug: "how-to-register-a-company-in-china",
    title: "How to Register a Company in China",
    metaTitle: "How to Register a Company in China | Foreign Investor Guide",
    description:
      "A practical guide for foreign investors registering a company in China, covering structure, documents, business scope, registration steps, tax setup and post-registration compliance.",
    summary:
      "Foreign investors should treat China company registration as a business setup and compliance project, not only a filing task. The right preparation connects ownership, business scope, registered address, tax setup, banking readiness and ongoing accounting before operations begin.",
    published: "2026-07-13",
    updated: "2026-07-13",
    category: "China Market Entry",
    readingTime: "10 min read",
    keyword: "China company registration",
    imageAlt:
      "ZYS Advisory featured image for foreign investors registering a company in China",
    relatedServiceHrefs: [
      "/services/company-registration-in-china",
      "/services/wfoe-registration",
      "/services/accounting-services",
      "/services/tax-consulting"
    ],
    relatedArticleSlugs: [
      "china-company-registration-timeline",
      "china-company-formation-checklist",
      "china-business-scope-planning"
    ],
    facebookPost: `New Insight from ZYS Advisory

How to Register a Company in China

Foreign investors should plan China company registration as an operating and compliance project, not just a paperwork exercise. This guide explains the decisions, documents and post-registration steps to prepare before launch.

Read the full article:
${siteUrl}/blog/how-to-register-a-company-in-china

#ChinaBusiness #CompanyRegistration #ForeignInvestment #CrossBorderBusiness #ZYSAdvisory`,
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Registering a company in China is often the first formal step toward hiring staff, signing local contracts, issuing invoices, applying for business licenses, sponsoring work permits or building a long-term operating presence. For many foreign investors, the registration process looks simple from a distance: choose a name, submit documents and receive a business license. In practice, the decisions made before filing usually matter more than the filing itself.",
          "The company structure, shareholder documents, business scope, registered address, tax setup, finance workflow and banking preparation all influence how smoothly the new entity can operate after approval. A registration that is completed quickly but poorly planned can create later friction with invoicing, tax filings, payroll, licensing, work permits or contract execution.",
          "Investors should also think about who will make decisions after the company is formed. A China entity needs clear internal responsibility for signing authority, chop custody, bank communication, invoice approval, expense review, payroll information and document storage. These controls are easier to set up before transactions begin than to repair after several months of informal handling.",
          "This guide is written for foreign founders, overseas management teams and international SMEs that need a practical understanding of the China company registration process. It does not replace legal, tax or accounting advice for a specific case. Requirements vary by city, business activity, shareholder type and document readiness, so investors should confirm the final filing path before committing to deadlines or public launch plans."
        ]
      },
      {
        heading: "Who this article is for",
        paragraphs: [
          "This article is for foreign shareholders preparing to establish a mainland China company, international SMEs comparing China with other Asian structures, overseas finance teams that need to understand post-registration compliance, and founders who want to connect company setup with future visas, licensing, invoicing and accounting.",
          "It is also useful for Chinese entrepreneurs advising foreign partners, regional headquarters planning a local subsidiary, and overseas service providers that need a China entity to contract with local customers or suppliers. If the intended business is regulated, involves import and export, education, food, medical devices, online services, employment dispatch or other sensitive activities, the registration plan should be reviewed with extra care before documents are submitted."
        ]
      },
      {
        heading: "Practical business context",
        paragraphs: [
          "The most common China company used by foreign investors is a foreign-invested limited liability company, often described in international business discussions as a WFOE when it is wholly foreign-owned. The company receives a business license and becomes the legal platform for local contracts, hiring, tax registration, accounting records and operational filings.",
          "Before registration, investors should clarify what the company will actually do in China. A consulting company, trading company, technology service company and manufacturing company may face different address expectations, business scope wording, license exposure, VAT invoice needs, customs considerations and staffing plans. A generic structure may be easy to describe in English but too vague for practical local execution.",
          "The registered city also matters. Local review practice, address availability, banking convenience, tax bureau communication, talent access and client location can all affect implementation. Investors should avoid choosing a city only because it sounds familiar. The better question is where the company can operate, hire, invoice, meet clients and maintain compliance in a realistic way."
        ]
      },
      {
        heading: "Information and documents to prepare",
        paragraphs: [
          "The exact document list depends on shareholder type, nationality, business scope, city and whether special licenses are involved. As a planning baseline, foreign individual shareholders normally prepare identity documents, contact information, signatures and supporting information requested for local filings. Corporate shareholders normally prepare registration documents, authorized signatory information, ownership details and documents that may need notarization, legalization, translation or other formal handling depending on the jurisdiction and local requirements.",
          "Investors should also prepare the proposed company name, business scope description, registered capital plan, registered address materials, legal representative and senior officer information, supervisor or governance contact information, articles of association, phone and email contact details, and a clear explanation of the business model.",
          "For practical operations, the team should prepare more than the minimum filing package. It is helpful to collect lease or address information, planned contract templates, expected revenue model, supplier or customer profile, employee plan, bank account expectations, invoice needs, software or data activity, import and export plans, and whether foreign staff may need work permits. These details help identify risks before the company is approved.",
          "Overseas finance and management teams should also prepare internal approvals. If the new entity will need funding from a parent company, intercompany service agreements, director resolutions, treasury controls or management reporting, those items should be aligned with the registration plan. A company can be legally registered while still being operationally unready if the parent group has not prepared these internal steps."
        ]
      },
      {
        heading: "Step-by-step registration process",
        paragraphs: [
          "The first step is a consultation and feasibility review. The investor confirms the business activity, ownership structure, target city, timeline, shareholder document status and any licensing exposure. This stage should produce a practical route rather than a generic checklist.",
          "The second step is name and scope planning. The company name and business scope should reflect the intended activity while remaining acceptable for local filing. Business scope wording can affect invoicing, licensing, tax treatment and customer expectations, so it should not be treated as a formality.",
          "The third step is document preparation. Shareholder documents, officer information, registered address materials, articles of association and signatures are organized according to local requirements. If overseas corporate documents are involved, investors should allow time for document formalities and translation where required.",
          "The fourth step is filing submission and review. The local authority reviews the application, may request clarification and, if approved, issues the business license. Timelines vary depending on city, document readiness, name review, address review and whether the activity creates additional questions.",
          "The fifth step is post-registration setup. After receiving the business license, the company typically needs chops or seals, tax-related setup, accounting file creation, bank account preparation, invoice planning, employment registration steps where relevant and internal document archiving. This is where many new entities discover that registration was only the beginning.",
          "The sixth step is ongoing compliance. Monthly or periodic bookkeeping, tax filings, annual reporting, payroll filings, license renewals and audit preparation should be planned before the first invoice or salary payment. A clean first year is easier than reconstructing records later.",
          "A useful final check is to walk through the first real transaction. Ask how the company will sign the contract, receive payment, issue an invoice, record revenue, pay any supplier, reimburse expenses and report the transaction to management. If the team cannot answer those questions, the registration plan needs more operational detail before launch."
        ]
      },
      {
        heading: "Compliance considerations",
        paragraphs: [
          "China companies are expected to maintain accounting records, supporting vouchers, tax filing records and corporate documents that match their real activity. Even if a company has limited revenue at the beginning, it should not ignore bookkeeping or tax filing obligations. Dormant or low-activity entities still need a compliance plan.",
          "Business scope should match actual operations. If the company later changes activity, adds regulated services, begins trading goods, hires staff or applies for permits, it may need amendments or additional registrations. Investors should review changes before signing contracts that exceed the company’s approved scope or practical compliance capacity.",
          "Foreign staff planning also requires coordination. A China company may become the sponsor for work permit and residence permit matters, but sponsorship depends on the company’s status, role, documents, employee eligibility and local review. Visa planning should not be left until after the foreign employee has already committed to a start date."
        ]
      },
      {
        heading: "Common mistakes",
        paragraphs: [
          "A common mistake is choosing the cheapest or fastest registration path without checking whether the address, scope and tax setup support the real business. Another mistake is copying a business scope from another company without understanding licensing or invoicing implications.",
          "Some investors underestimate overseas document preparation time. If shareholder documents require formal handling, translation or additional verification, the schedule can change quickly. Others focus on the business license but delay accounting setup, which creates pressure when the first invoice, bank transaction or salary payment arrives.",
          "Investors also sometimes separate registration, tax, accounting, payroll and visa planning across disconnected providers. This can lead to inconsistent assumptions. The registration advisor may approve one scope, the accountant may discover invoice limitations, and the visa advisor may later request documents that were not considered at setup."
        ]
      },
      {
        heading: "Practical next steps",
        paragraphs: [
          "Before registering, prepare a one-page business plan that explains what the China company will do, where it will operate, who owns it, who manages it, how it earns revenue, whether it hires staff, whether it imports or exports goods, and whether any foreign employees need visas. This does not need to be a marketing document. It should be clear enough for advisors to test assumptions.",
          "Next, confirm the document status of each shareholder and officer. If overseas corporate documents are involved, check formal document requirements early. Then review registered address options, business scope wording, tax and invoice needs, and post-registration accounting responsibilities.",
          "Finally, plan the first 90 days after the business license is issued. Decide who will maintain accounting records, who will communicate with banks and tax authorities, who will manage chops and corporate documents, and who will track annual compliance. A strong registration plan ends with an operating handover, not just a certificate."
        ]
      }
    ],
    faqs: [
      {
        question: "Can a foreign investor register a company in China?",
        answer:
          "Yes, many foreign investors can register a China company, subject to business scope, industry access, shareholder documents, registered address and local filing requirements. The exact route should be confirmed before filing."
      },
      {
        question: "How long does China company registration take?",
        answer:
          "Timing depends on the city, shareholder document readiness, business scope, address review, name approval and whether special licenses are involved. Investors should avoid relying on a fixed timeline until documents are reviewed."
      },
      {
        question: "What documents are usually needed?",
        answer:
          "Common planning items include shareholder identity or corporate registration documents, officer information, proposed name, business scope, registered address materials, articles of association, signatures and tax setup information."
      },
      {
        question: "Does the company need accounting after registration?",
        answer:
          "Yes. A China company normally needs accounting records, tax filings and organized supporting documents after registration, even when early activity is limited."
      },
      {
        question: "Can the company sponsor a work permit?",
        answer:
          "A registered China company may be able to sponsor foreign employees, but eligibility depends on the company, role, applicant documents and local review. Work permit planning should be reviewed early."
      }
    ]
  },
  {
    slug: "wfoe-registration-guide",
    title: "China WFOE Registration Guide",
    metaTitle: "China WFOE Registration Guide | Foreign-Owned Company Setup",
    description:
      "A practical WFOE registration guide for foreign investors in China, covering structure, documents, business scope, registered address, filings and post-registration compliance.",
    summary:
      "A WFOE can give foreign investors direct control over a China operating company, but registration should be planned around real business activity, document readiness, tax setup, employment needs and ongoing compliance.",
    published: "2026-07-13",
    updated: "2026-07-13",
    category: "China Market Entry",
    readingTime: "11 min read",
    keyword: "WFOE registration China",
    imageAlt:
      "ZYS Advisory featured image for China WFOE registration planning and compliance",
    relatedServiceHrefs: [
      "/services/wfoe-registration",
      "/services/foreign-investment",
      "/services/company-registration-in-china",
      "/services/tax-consulting"
    ],
    relatedArticleSlugs: [
      "wfoe-vs-representative-office-in-china",
      "china-representative-office-vs-wfoe",
      "foreign-invested-enterprise-setup"
    ],
    facebookPost: `New Insight from ZYS Advisory

China WFOE Registration Guide

A WFOE can be a strong structure for foreign investors that need direct control in China, but the setup should connect ownership, scope, tax, accounting, banking and employment planning from the start.

Read the full article:
${siteUrl}/blog/wfoe-registration-guide

#ChinaBusiness #ForeignInvestment #CompanyRegistration #CrossBorderBusiness #ZYSAdvisory`,
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "A wholly foreign-owned enterprise, commonly called a WFOE in international business discussions, is one of the most familiar structures for foreign investors entering mainland China. It can allow an overseas shareholder to establish a local company, contract with customers, hire employees, issue invoices, maintain accounting records and build a long-term operating presence.",
          "The term WFOE is useful, but it can also create a false sense of simplicity. Investors sometimes treat WFOE registration as a standard package, when the actual setup depends on business activity, city, shareholder documents, registered address, business scope, tax registration, banking readiness and post-registration compliance. A consulting WFOE, trading WFOE, technology service WFOE and manufacturing WFOE may have very different practical requirements.",
          "The quality of the setup also affects how quickly the WFOE can move from approval to real business. A company may hold a business license but still be unable to operate efficiently if bank preparation, tax handling, invoice planning, expense controls and employment records are not ready. For foreign investors, the practical goal is not only formation. The goal is a company that can transact, report and remain compliant.",
          "This guide explains WFOE registration from a business planning perspective. It is intended to help decision makers prepare the right questions before filing. It does not provide formal legal, tax, accounting or immigration advice for any specific investor. Local requirements and review practice can change, and investors should confirm the current filing path before committing to operational deadlines."
        ]
      },
      {
        heading: "Who this article is for",
        paragraphs: [
          "This article is for foreign companies, entrepreneurs and international management teams that want a China company under foreign ownership. It is also relevant for regional headquarters comparing a WFOE with a representative office, joint venture or distributor model.",
          "Finance leaders can use it to understand why post-registration accounting and tax setup should be planned before approval. Founders can use it to prepare shareholder and officer information. HR teams can use it to understand how the WFOE may connect with future work permit sponsorship. Business development teams can use it to test whether the proposed scope supports the contracts and invoices they expect to issue."
        ]
      },
      {
        heading: "Practical business context",
        paragraphs: [
          "A WFOE is often chosen when foreign investors want direct ownership and operational control in China. Compared with a representative office, a WFOE is generally used for more substantive commercial activity. Compared with relying only on agents or distributors, it can create a local platform for staff, local contracts, tax registration and customer relationships.",
          "That control also brings responsibility. A WFOE is expected to maintain corporate records, accounting books, tax filings, employment documents, bank records and annual compliance. Investors should not register a WFOE unless they are ready to maintain it as a real operating company.",
          "The right structure depends on the business model. If the China activity is limited to market research or liaison work, a different structure may need to be considered. If the company will sell services, trade goods, develop software, manufacture products, hire local staff or apply for licenses, the WFOE plan should be reviewed around those practical activities rather than a generic template.",
          "Investors should also decide how the WFOE will fit into the wider group. Some WFOEs operate as revenue-generating subsidiaries. Others provide local support, sourcing, consulting, research or service functions for overseas affiliates. These differences can affect contract flows, transfer pricing discussions, expense allocation, reporting responsibilities and the evidence that finance teams should keep."
        ]
      },
      {
        heading: "Information and documents to prepare",
        paragraphs: [
          "For a WFOE, the shareholder is usually an overseas company or foreign individual. Corporate shareholders should prepare registration documents, authorized signatory details, ownership or control information and documents that may need formal handling depending on jurisdiction and local requirements. Individual shareholders should prepare identity documents and personal information required for filing.",
          "The filing package normally requires the proposed company name, registered address materials, business scope, registered capital plan, articles of association, legal representative information, supervisor or governance information and contact details. The company may also need information about finance contacts, tax handling personnel and future bank account arrangements.",
          "Beyond the filing documents, investors should prepare an operating plan. This should include the target customers, supplier relationships, contract model, expected invoices, staffing plan, whether foreign employees need work permits, whether import and export activity is expected, whether special licenses may apply, and how accounting records will be maintained after launch."
        ]
      },
      {
        heading: "Step-by-step WFOE registration process",
        paragraphs: [
          "The first step is structure confirmation. The investor confirms whether a WFOE is the right vehicle, who the shareholder will be, where the company should be registered, what activity it will conduct and whether any licenses or industry restrictions may affect the plan.",
          "The second step is document and name preparation. The proposed Chinese company name, registered address, business scope, officer information and shareholder documents are prepared. If overseas documents require formal handling, this should be started early because it can affect the whole schedule.",
          "The third step is application filing. The application is submitted for local review. The authority may ask for clarification on name, business scope, address, shareholder documents or other filing details. Investors should be ready to respond quickly and consistently.",
          "The fourth step is business license issuance. Once approved, the WFOE receives its business license and becomes a legal China company. This is an important milestone but not the end of setup.",
          "The fifth step is post-registration implementation. The company should complete practical setup steps such as chops or seals, tax-related setup, accounting file creation, bank account preparation, invoice planning and internal document custody. Where employment or visas are relevant, the company should prepare the required HR and sponsor documentation.",
          "The sixth step is operating compliance. The WFOE should maintain bookkeeping, tax filing, payroll records, annual reporting, license renewals where relevant and audit-ready supporting documents. A WFOE without a compliance workflow can become difficult to manage even if registration itself was successful.",
          "Before the first commercial activity, the investor should confirm who can approve contracts, who controls company chops, who communicates with the bank, who reviews supplier invoices, who prepares payroll information and who provides records to the accountant. These responsibilities are part of WFOE setup because they determine whether the company can operate with control after approval."
        ]
      },
      {
        heading: "Compliance considerations",
        paragraphs: [
          "Business scope is a central planning point. It should describe what the WFOE will do in a way that supports practical operations, contracts and invoices. If the business later changes, the company may need to review whether amendments or additional approvals are required.",
          "Registered address should be selected carefully. Address arrangements can affect registration, tax communication, bank review, license applications and credibility with counterparties. Investors should understand what the address can and cannot support before using it for a WFOE.",
          "Accounting and tax setup should be ready before transactions begin. Bank receipts, invoices, expenses, payroll records, contracts and supporting documents should be organized from the start. Rebuilding records months later can create avoidable risk and management cost.",
          "If foreign employees or founders will work in China, work permit and residence permit planning should be connected with WFOE setup. The company’s status, role descriptions, applicant documents and local review practice can all affect the process.",
          "Intercompany arrangements should also be documented carefully. If the WFOE will receive funding, pay overseas service fees, recharge costs or provide services to related parties, the finance team should keep contracts, invoices, payment evidence and management explanations consistent with the actual business. This helps the company answer future accounting, banking or tax questions more clearly."
        ]
      },
      {
        heading: "Common mistakes",
        paragraphs: [
          "One common mistake is assuming that every WFOE is the same. A WFOE is a broad ownership concept, not a full operating plan. The real work is aligning scope, address, tax, licenses, hiring and accounting with the business model.",
          "Another mistake is delaying tax and accounting setup until after revenue begins. A WFOE may need to issue invoices, pay vendors, hire staff or receive funds soon after approval. Without accounting workflows, early transactions can become messy quickly.",
          "Some investors also choose registered capital, address or business scope wording without understanding future implications. These decisions should be commercially realistic and consistent with the expected operation. They should not be copied from another company without review.",
          "A final mistake is treating WFOE registration and visa planning separately. If a founder or employee needs to work in China, the WFOE setup timeline and the immigration timeline should be coordinated from the beginning."
        ]
      },
      {
        heading: "Practical next steps",
        paragraphs: [
          "Before starting WFOE registration, prepare a short decision memo. It should state why a WFOE is needed, who will own it, what it will do, where it will be registered, who will manage it, whether it will hire staff, what invoices it expects to issue and whether any licenses or work permits may be involved.",
          "Next, review shareholder documents and identify whether formal document handling or translation may be required. Confirm the proposed registered address and business scope before filing. Check whether the first six months of transactions, payroll, accounting and tax filings can be handled cleanly.",
          "Finally, create a post-registration handover plan. Assign responsibility for corporate documents, chops, bank communication, accounting records, tax filing calendar, payroll information and annual compliance. A well-managed WFOE registration should leave the company ready to operate, not just legally formed."
        ]
      }
    ],
    faqs: [
      {
        question: "What is a WFOE in China?",
        answer:
          "In international business usage, a WFOE usually refers to a wholly foreign-owned China company. It is commonly used when foreign investors want a local operating company under foreign ownership."
      },
      {
        question: "Is a WFOE always the right structure?",
        answer:
          "No. The right structure depends on the business activity, commercial goals, compliance duties, cost tolerance and whether the investor needs a full local operating company. A representative office, joint venture or distributor model may be considered in some situations."
      },
      {
        question: "What documents are needed for WFOE registration?",
        answer:
          "Common planning items include shareholder documents, proposed company name, business scope, registered address materials, officer information, articles of association, signatures and tax setup details. The exact list depends on the investor and city."
      },
      {
        question: "Can a WFOE hire employees in China?",
        answer:
          "A properly established WFOE can generally be used as a local employer, but employment, payroll, social insurance, tax withholding and foreign employee permits should be planned carefully."
      },
      {
        question: "What happens after the WFOE business license is issued?",
        answer:
          "The company still needs practical setup such as chops, tax-related setup, accounting records, bank account preparation, invoice planning and ongoing compliance workflows."
      },
      {
        question: "Can ZYS support WFOE registration and ongoing compliance?",
        answer:
          "ZYS supports WFOE planning, registration coordination, accounting, tax, payroll, visa planning, business licenses and ongoing compliance for international clients."
      }
    ]
  }
];
