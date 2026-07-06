export type CityRegistrationPageData = {
  key: string;
  city: string;
  province: string;
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  localPosition: string;
  districts: string[];
  industries: string[];
  addressNote: string;
  licenseNote: string;
  taxNote: string;
  hiringNote: string;
  timeline: string;
  costFactors: string[];
  faqFocus: string;
  localTaxPolicies: string;
  localAdvantages: string;
  industryRecommendations: string;
  officeRentalInfo: string;
  bankAccountOpening: string;
  vatRegistration: string;
  accountingRequirements: string;
  annualCompliance: string;
  localProcess: string[];
  comparisonRows: { factor: string; recommended: string; caution: string }[];
};

export const cityRegistrationPages: CityRegistrationPageData[] = [
  {
    key: "shanghai",
    city: "Shanghai",
    province: "Shanghai",
    path: "/register-company-in-shanghai",
    title: "Register Company in Shanghai | China Business Setup for Foreign Investors",
    metaDescription: "Register a company in Shanghai with guidance on WFOE setup, business scope, registered address, licenses, tax registration, accounting, visa planning, timeline, costs, and documents.",
    h1: "Register a company in Shanghai with a compliant China market-entry plan.",
    intro: "Shanghai is often the first choice for international headquarters, trading companies, professional service firms, technology businesses, import-export operators, and regional management teams entering mainland China.",
    localPosition: "The city is commercially sophisticated, documentation standards are high, and banks, tax bureaus, market regulation authorities, and district-level investment teams usually expect a clear explanation of business activity, funding source, office use, staffing plans, and post-registration compliance.",
    districts: ["Pudong New Area", "Huangpu", "Xuhui", "Jing'an", "Minhang", "Hongkou"],
    industries: ["regional headquarters", "trading and distribution", "professional consulting", "technology services", "import and export", "brand management"],
    addressNote: "Shanghai address review can be detailed because many foreign investors use serviced offices, incubators, or district-supported commercial addresses. The address should support the proposed business scope, invoice activity, tax bureau administration, and bank account opening story.",
    licenseNote: "Shanghai businesses in food, education, medical devices, human resources, online services, import-export, and regulated consulting fields should confirm licensing exposure before submitting the company scope.",
    taxNote: "Shanghai tax registration should be planned around VAT taxpayer status, invoice type, cross-border service revenue, withholding tax exposure, management fees, payroll, and monthly bookkeeping responsibilities.",
    hiringNote: "Shanghai is practical for foreign executives and specialist staff, but work permit and residence permit planning should be connected with the registered entity, office address, role description, salary level, and company tax records.",
    timeline: "Most standard Shanghai company registration projects require several weeks after documents are ready, but timing can change when notarized shareholder documents, address review, special license checks, bank onboarding, or foreign staff visa steps are involved.",
    costFactors: ["district and address solution", "business scope complexity", "registered capital planning", "translation and notarization", "bank onboarding support", "tax and accounting setup", "license or permit review"],
    faqFocus: "Shanghai registration is best handled as a full operating setup, not only a license filing, because local tax, invoicing, banking, office, and hiring decisions affect the company immediately after approval.",
    localTaxPolicies: "Shanghai tax administrators usually look for a coherent link between the registered address, contract flow, revenue model, VAT invoice requests, cross-border payments, and staff payroll. Service companies should plan VAT treatment for consulting or technology income, while trading companies should review input invoices, import-export records, and general taxpayer timing before large supplier contracts begin.",
    localAdvantages: "Shanghai gives foreign investors strong access to international banks, professional landlords, customs brokers, finance talent, multinational customers, and regional headquarters infrastructure. It is especially helpful when a company needs a credible mainland presence for enterprise sales, investor due diligence, senior hiring, or coordination with Hong Kong and overseas group companies.",
    industryRecommendations: "Shanghai is usually strongest for regional headquarters, consulting, brand management, high-value trading, technology services, import-export management, and finance-facing professional services. Investors with heavy warehousing or production needs may still use Shanghai for management while placing operational facilities in nearby Yangtze River Delta cities.",
    officeRentalInfo: "Office rental in Shanghai should be chosen with bank review and tax administration in mind. Grade A offices, serviced offices, district incubators, and compliant commercial addresses can all work, but the lease file should support the business scope and explain where staff, contracts, company chops, and original records will be maintained.",
    bankAccountOpening: "Shanghai banks often expect the legal representative or authorized signatory to explain the shareholder background, expected customers, transaction currencies, invoice needs, and source of funds. A strong bank file includes the business license, chops, articles, lease materials, tax registration evidence, contact details, and a simple transaction narrative.",
    vatRegistration: "Shanghai VAT registration should be planned early if the company expects enterprise clients to request special VAT invoices or if supplier input VAT is material. General taxpayer status can be useful for trading and larger service businesses, but it also increases bookkeeping discipline, invoice controls, and filing expectations.",
    accountingRequirements: "Shanghai companies should keep monthly vouchers, bank slips, fapiao records, payroll support, contracts, import-export documents where relevant, and management explanations for related-party charges. Foreign shareholders usually benefit from bilingual reporting because Shanghai banks, auditors, and tax officers may ask for clear transaction support.",
    annualCompliance: "Shanghai annual compliance includes market supervision reporting, tax filing continuity, accounting record retention, corporate income tax reconciliation, license maintenance, and review of any registered address, director, shareholder, capital, or scope changes. Headquarters-style companies should also monitor related-party payments and transfer pricing support.",
    localProcess: [
      "Confirm whether Shanghai should be the operating company, headquarters vehicle, trading entity, or management office before selecting the district.",
      "Match Pudong, Huangpu, Xuhui, Jing'an, Minhang, or another district with the intended address, tax bureau, banking story, and hiring plan.",
      "Draft a business scope that supports contracts, VAT invoice requests, import-export activity, consulting revenue, and any future license needs.",
      "Prepare overseas shareholder documents, Chinese translations, officer information, lease materials, articles, and signing arrangements before filing.",
      "After license approval, coordinate chops, bank account opening, tax registration, VAT invoice access, accounting setup, and work permit planning."
    ],
    comparisonRows: [
      { factor: "Best fit", recommended: "Regional headquarters, consulting, trading, technology services, and brand operations.", caution: "Pure low-cost back-office setups may find Shanghai more expensive than nearby cities." },
      { factor: "Office choice", recommended: "Use a credible office or serviced office that supports bank and tax review.", caution: "Very cheap addresses can create questions during bank account opening or fapiao setup." },
      { factor: "Tax focus", recommended: "Plan VAT invoice type, cross-border payments, payroll, and related-party charges early.", caution: "Waiting until invoices are needed can delay customer onboarding." }
    ]
  },
  {
    key: "beijing",
    city: "Beijing",
    province: "Beijing",
    path: "/register-company-in-beijing",
    title: "Register Company in Beijing | China Company Setup and Compliance Guide",
    metaDescription: "Register a company in Beijing with practical guidance for foreign investors on documents, business scope, licensing, registered address, tax, accounting, visa planning, costs, and timeline.",
    h1: "Register a company in Beijing with clear business scope and compliance planning.",
    intro: "Beijing is a strong location for consulting firms, technology companies, education-related businesses, culture and media projects, representative management teams, and organizations that need proximity to national institutions and major clients.",
    localPosition: "Because Beijing has a dense regulatory environment, investors should prepare a precise business model, clean shareholder documents, a credible registered address, and a conservative scope that matches the activity the company will actually perform.",
    districts: ["Chaoyang", "Haidian", "Dongcheng", "Xicheng", "Fengtai", "Daxing"],
    industries: ["technology consulting", "management consulting", "culture and media", "education support", "research services", "professional services"],
    addressNote: "Beijing address suitability is important for company setup, tax bureau assignment, invoicing, lease consistency, and later inspections. A low-cost address that does not match the business model can create delays or follow-up compliance questions.",
    licenseNote: "Beijing projects involving education, publishing, media, internet information, food, medical, travel, human resources, or data-heavy technology services should review licensing and filing requirements before the registration plan is finalized.",
    taxNote: "Beijing tax and accounting setup should cover VAT classification, corporate income tax filings, individual income tax withholding, fapiao issuance, expense documentation, cross-border payments, and management reporting for overseas shareholders.",
    hiringNote: "Foreign employee planning in Beijing should connect the job title, work permit category, employment contract, office location, salary, social insurance, and the company registration timeline.",
    timeline: "A Beijing registration can move efficiently when the scope and address are straightforward, but timeline risk increases when shareholders are overseas, documents need legalization, or the activity touches licensing-sensitive sectors.",
    costFactors: ["registered address quality", "scope drafting and regulatory review", "shareholder document legalization", "special license assessment", "tax bureau onboarding", "bookkeeping handover", "foreign work permit planning"],
    faqFocus: "Beijing registration requires attention to scope wording and regulatory sensitivity, especially when the company will provide technology, consulting, education, culture, or internet-related services.",
    localTaxPolicies: "Beijing tax review often emphasizes contract substance, invoice consistency, payroll withholding, deductible expense support, and whether the company activity matches the approved scope. Consulting, research, culture, technology, and education-adjacent businesses should document service deliverables carefully so VAT, corporate income tax, and cross-border payments can be supported.",
    localAdvantages: "Beijing is valuable for companies that need access to national decision makers, public institutions, major technology groups, research universities, embassies, chambers, policy-facing clients, and senior talent. It can strengthen credibility for firms selling advisory, technology, culture, education support, or professional services to large organizations.",
    industryRecommendations: "Beijing is best for management consulting, technology research, software services, policy advisory, culture and media support, education services that are properly scoped, professional services, and representative sales teams. Regulated online, publishing, education, and medical activities need cautious licensing review before registration.",
    officeRentalInfo: "Beijing office rental should be practical and defensible. Chaoyang may fit international client service, Haidian may fit technology and research, and central districts may fit advisory teams. Lease materials, landlord qualifications, site use, and correspondence handling should be clear before submitting the registration.",
    bankAccountOpening: "Beijing banks may ask detailed questions about shareholder background, client type, expected transaction size, related-party payments, and why the company is located in Beijing. Prepare a concise operating memo, lease evidence, tax contact details, and bilingual explanations for overseas group structures.",
    vatRegistration: "Beijing VAT registration should reflect the service type and invoice needs. Consulting and technology firms usually focus on service VAT, while culture, training, software, and cross-border service arrangements require closer review of invoice descriptions, contract wording, and exemption or zero-rating assumptions.",
    accountingRequirements: "Beijing accounting records should preserve contracts, deliverables, meeting records, fapiao, travel approvals, payroll files, and proof of service completion. This is especially important for consulting, research, culture, and technology businesses where intangible deliverables must be tied to revenue and deductible costs.",
    annualCompliance: "Beijing annual compliance should include annual market supervision reporting, corporate income tax reconciliation, bookkeeping review, scope and license checks, payroll and social insurance reconciliation, and a review of cross-border service fees or shareholder charges before year-end filings are closed.",
    localProcess: [
      "Confirm whether Beijing is needed for client access, policy proximity, technology talent, research cooperation, or national-level business development.",
      "Choose Chaoyang, Haidian, Dongcheng, Xicheng, Fengtai, Daxing, or another district based on client location, license sensitivity, and office credibility.",
      "Draft a conservative but useful business scope for consulting, technology, culture, education support, or professional services without triggering unnecessary restrictions.",
      "Prepare legalized shareholder materials, officer documents, address files, Chinese forms, and explanatory notes for any sensitive service model.",
      "Complete license issuance, chops, bank account opening, tax registration, VAT invoice setup, bookkeeping onboarding, and any work permit steps."
    ],
    comparisonRows: [
      { factor: "Best fit", recommended: "Consulting, technology, research, culture support, and policy-facing services.", caution: "Highly regulated education, media, internet, and medical activities need early license review." },
      { factor: "Office choice", recommended: "Select a district that matches client access and tax administration expectations.", caution: "An address chosen only for price can undermine bank and tax credibility." },
      { factor: "Tax focus", recommended: "Document deliverables, payroll, service contracts, and cross-border payments carefully.", caution: "Weak service evidence can create corporate income tax and VAT risk." }
    ]
  },
  {
    key: "shenzhen",
    city: "Shenzhen",
    province: "Guangdong",
    path: "/register-company-in-shenzhen",
    title: "Register Company in Shenzhen | WFOE Setup, Tax and Business License Guide",
    metaDescription: "Register a company in Shenzhen with guidance on WFOE setup, trading, technology business scope, documents, registered address, tax registration, accounting, visa support, timeline, and costs.",
    h1: "Register a company in Shenzhen for technology, trade, and Greater Bay Area operations.",
    intro: "Shenzhen is attractive for technology companies, hardware teams, e-commerce sellers, cross-border trading businesses, supply chain operators, product development groups, and founders building around the Greater Bay Area.",
    localPosition: "The city is commercially fast-moving, but foreign investors still need a disciplined registration plan that links the business scope, address, import-export needs, tax status, bank account, invoicing model, and hiring plan.",
    districts: ["Nanshan", "Futian", "Luohu", "Bao'an", "Longgang", "Qianhai"],
    industries: ["technology services", "hardware development", "cross-border e-commerce", "trading", "supply chain management", "software services"],
    addressNote: "Shenzhen address choices should be reviewed carefully when a company plans to trade, store goods, hire staff, apply for export-related registrations, or use a district incentive policy. Address credibility affects tax, banking, and routine compliance.",
    licenseNote: "Shenzhen businesses involving import-export, e-commerce platforms, food, medical devices, logistics, value-added telecom, software, or regulated online services should identify permits and filings before registration.",
    taxNote: "Shenzhen tax planning should cover VAT invoice needs, export rebate eligibility, customs and foreign exchange registrations, software or technology revenue treatment, payroll taxes, and monthly bookkeeping from the first operating month.",
    hiringNote: "Shenzhen work permit planning is often relevant for founders, technical managers, product specialists, and sales leaders. The company role, registered address, salary, and tax filings should support the visa application.",
    timeline: "Shenzhen setup timing depends on document readiness, address confirmation, business scope review, bank onboarding, and whether import-export or technology-related filings are needed after the business license is issued.",
    costFactors: ["commercial address and district choice", "import-export registration needs", "customs or foreign exchange steps", "technology scope drafting", "bank onboarding", "accounting and VAT setup", "visa support for founders"],
    faqFocus: "Shenzhen registration should be planned around the operating model, especially when the company will trade goods, issue VAT invoices, hire technical staff, or connect with Hong Kong and Greater Bay Area structures.",
    localTaxPolicies: "Shenzhen tax planning often centers on VAT invoices, export rebate eligibility, customs records, software or technology revenue, cross-border service fees, and payments involving Hong Kong. Companies should align contract terms, logistics records, supplier fapiao, bank settlements, and bookkeeping from the first month.",
    localAdvantages: "Shenzhen offers fast access to hardware supply chains, product teams, e-commerce platforms, technology talent, manufacturers, Hong Kong banking relationships, and Greater Bay Area partners. It is attractive when founders need speed, supplier proximity, cross-border movement, and a practical base for product commercialization.",
    industryRecommendations: "Shenzhen is recommended for technology services, hardware design, cross-border e-commerce, import-export trading, supply chain management, software, product sourcing, and Greater Bay Area regional operations. Businesses involving warehousing, food, medical devices, telecom, or platform operations should check permits early.",
    officeRentalInfo: "Shenzhen office rental should match the company activity. Nanshan suits technology and software teams, Futian suits finance and professional services, Luohu can support trading, Bao'an and Longgang may fit supply chain access, and Qianhai may be considered for cross-border positioning.",
    bankAccountOpening: "Shenzhen banks often focus on transaction purpose, Hong Kong connections, supplier relationships, online sales channels, and expected foreign currency flows. Prepare shareholder documents, lease proof, tax registration, contracts or business plan, and a clear explanation of platform or trading revenue.",
    vatRegistration: "Shenzhen VAT registration is critical for trading, export, software, and e-commerce models. General taxpayer status, special VAT invoices, export rebate filings, input VAT matching, and customs data should be reviewed before the company signs high-volume supplier or customer contracts.",
    accountingRequirements: "Shenzhen accounting should track purchase fapiao, logistics records, platform statements, customs declarations, bank settlements, inventory movement, software revenue, payroll, and owner reimbursements. Fast-growth e-commerce and hardware businesses need bookkeeping controls before transaction volume rises.",
    annualCompliance: "Shenzhen annual compliance should review market supervision reporting, tax filings, customs and foreign exchange registrations, export rebate support, VAT invoice records, payroll filings, address validity, and any changes in shareholders, directors, capital, or business scope.",
    localProcess: [
      "Decide whether Shenzhen is being used for technology development, sourcing, cross-border e-commerce, trading, or Greater Bay Area coordination.",
      "Select Nanshan, Futian, Luohu, Bao'an, Longgang, Qianhai, or another district based on talent, supplier access, address credibility, and tax needs.",
      "Prepare a business scope that supports product development, trading, online sales, software, import-export, or supply chain activity without overreaching.",
      "Coordinate shareholder documents, address materials, officer information, articles, registration forms, and any import-export or technology filing review.",
      "After licensing, complete chops, bank setup, tax registration, VAT invoice access, bookkeeping, customs or foreign exchange steps, and visa support."
    ],
    comparisonRows: [
      { factor: "Best fit", recommended: "Technology, hardware, trading, e-commerce, supply chain, and Hong Kong-linked operations.", caution: "Platform, telecom, food, medical device, and logistics models can trigger extra permits." },
      { factor: "Office choice", recommended: "Match district to technology talent, suppliers, bank access, or cross-border needs.", caution: "Virtual-style addresses may be weak for bank review and customs-related activity." },
      { factor: "Tax focus", recommended: "Coordinate VAT invoices, export rebate records, customs data, and platform statements.", caution: "Poor input invoice matching can damage rebate and deduction positions." }
    ]
  },
  {
    key: "guangzhou",
    city: "Guangzhou",
    province: "Guangdong",
    path: "/register-company-in-guangzhou",
    title: "Register Company in Guangzhou | China Trading and Service Company Setup",
    metaDescription: "Register a company in Guangzhou with local guidance on business scope, WFOE setup, trading licenses, registered address, documents, tax registration, accounting, visa planning, timeline, and costs.",
    h1: "Register a company in Guangzhou for South China trade and service operations.",
    intro: "Guangzhou is a long-established commercial hub for trading businesses, sourcing teams, logistics coordination, wholesale activity, professional services, food-related businesses, and companies serving South China clients.",
    localPosition: "Foreign investors should treat Guangzhou company registration as an operating design project because address selection, business scope, import-export needs, supplier contracts, fapiao issuance, and tax filings shape the company from the start.",
    districts: ["Tianhe", "Yuexiu", "Haizhu", "Baiyun", "Panyu", "Nansha"],
    industries: ["trading", "sourcing", "logistics support", "wholesale", "professional services", "food and consumer goods"],
    addressNote: "Guangzhou registered addresses should be aligned with the activity, especially for trading, warehousing, food, wholesale, and logistics-related models. A practical address strategy reduces tax bureau and bank account friction.",
    licenseNote: "Guangzhou companies in food distribution, import-export, logistics, medical devices, education, travel, human resources, or online services should review licensing before the articles and business scope are submitted.",
    taxNote: "Guangzhou tax registration should address VAT invoice type, general taxpayer needs, supplier invoice control, import-export accounting, withholding tax on overseas payments, and monthly bookkeeping routines.",
    hiringNote: "Foreign founders and managers in Guangzhou should connect work permit planning with the company role, office address, salary level, employment contract, social insurance, and the first months of tax compliance.",
    timeline: "Guangzhou company setup can be straightforward for ordinary consulting or trading scopes, but timing expands when address review, import-export registrations, licenses, bank interviews, or overseas document legalization are required.",
    costFactors: ["address and district choice", "trading or import-export scope", "license review", "shareholder document preparation", "bank setup", "monthly accounting", "visa or payroll support"],
    faqFocus: "Guangzhou registration is strongest when investors plan the trading, tax, supplier, and invoice model before the business license application is filed.",
    localTaxPolicies: "Guangzhou tax work often focuses on VAT invoice management, supplier fapiao control, import-export accounting, wholesale margins, food or consumer product licensing, and payroll withholding. Trading companies should confirm how purchase invoices, customs documents, logistics costs, and customer invoices will be reconciled.",
    localAdvantages: "Guangzhou gives investors access to South China trade fairs, wholesale markets, sourcing networks, logistics providers, consumer product suppliers, food and retail channels, and Greater Bay Area customers. It is useful for businesses that need commercial depth without putting every function in Shenzhen or Hong Kong.",
    industryRecommendations: "Guangzhou is recommended for trading, sourcing, consumer goods, wholesale, logistics coordination, food-related businesses, professional services, and regional sales support. Companies handling regulated goods should confirm food, medical device, import, labeling, storage, and distribution requirements.",
    officeRentalInfo: "Guangzhou office choices vary by activity. Tianhe suits services and corporate sales, Yuexiu and Haizhu can support commercial teams, Baiyun may fit logistics-related activity, Panyu can support broader operating space, and Nansha may interest cross-border or port-linked projects.",
    bankAccountOpening: "Guangzhou banks usually want to understand supplier relationships, customer geography, import-export plans, expected cash flow, and who controls the company. A practical bank pack includes lease materials, business license, chops, tax status, contracts or supplier summaries, and shareholder background.",
    vatRegistration: "Guangzhou VAT registration should be connected with fapiao use, wholesale sales, input invoice collection, import VAT, export services, and general taxpayer needs. Businesses selling goods should establish invoice and inventory controls before the first large customer order.",
    accountingRequirements: "Guangzhou accounting should preserve purchase invoices, sales invoices, logistics bills, warehouse documents, customs forms, supplier contracts, payroll files, bank slips, and expense approvals. Consumer goods and wholesale teams should track inventory and margin support carefully.",
    annualCompliance: "Guangzhou annual compliance should include market supervision reporting, tax reconciliation, license renewal checks, import-export record review, bookkeeping quality control, payroll filings, address status review, and updates for shareholder, scope, capital, or officer changes.",
    localProcess: [
      "Confirm whether Guangzhou is the right location for sourcing, wholesale, regional sales, food activity, professional services, or logistics coordination.",
      "Compare Tianhe, Yuexiu, Haizhu, Baiyun, Panyu, Nansha, and other districts by customer access, address suitability, license needs, and bank convenience.",
      "Draft the company scope around trading, sourcing, services, food, import-export, or logistics support while checking permit exposure.",
      "Prepare shareholder documents, address files, officer details, articles, registration applications, and licensing notes before submission.",
      "After approval, arrange chops, bank account, tax registration, VAT invoice setup, bookkeeping, import-export steps, payroll, and visa planning."
    ],
    comparisonRows: [
      { factor: "Best fit", recommended: "Trading, sourcing, wholesale, consumer goods, food, and South China sales.", caution: "Regulated product distribution should not begin before license and labeling review." },
      { factor: "Office choice", recommended: "Choose an address that matches office, showroom, warehouse, or logistics needs.", caution: "A simple office address may not support storage or regulated product activity." },
      { factor: "Tax focus", recommended: "Control supplier fapiao, VAT invoices, customs records, and inventory evidence.", caution: "Weak purchase documentation can reduce deductions and increase tax questions." }
    ]
  },
  {
    key: "suzhou",
    city: "Suzhou",
    province: "Jiangsu",
    path: "/register-company-in-suzhou",
    title: "Register Company in Suzhou | Manufacturing, Trading and WFOE Setup Guide",
    metaDescription: "Register a company in Suzhou with guidance for foreign investors on WFOE setup, manufacturing or trading scope, documents, registered address, licenses, tax, accounting, timeline, and costs.",
    h1: "Register a company in Suzhou for manufacturing, trade, and Yangtze River Delta operations.",
    intro: "Suzhou is a practical choice for manufacturers, trading companies, supply chain businesses, engineering service providers, research teams, and foreign investors that need access to the Yangtze River Delta industrial base.",
    localPosition: "The local registration plan should connect the proposed activity with industrial park requirements, registered address use, environmental or production questions, VAT invoice needs, customs matters, payroll, and accounting controls.",
    districts: ["Suzhou Industrial Park", "Gusu", "Wuzhong", "Xiangcheng", "Wujiang", "Kunshan"],
    industries: ["manufacturing support", "trading", "engineering services", "supply chain", "R&D services", "industrial consulting"],
    addressNote: "Suzhou address review is especially important for businesses connected with manufacturing, warehousing, testing, repair, or industrial services. The address should support the actual operation and any district or park-level expectations.",
    licenseNote: "Suzhou projects involving production, environmental impact, food, medical devices, import-export, warehousing, or specialized industrial services should review approvals and filings before the registration documents are finalized.",
    taxNote: "Suzhou tax setup should cover VAT status, supplier invoice control, export rebate questions, fixed asset accounting, inventory records, payroll taxes, and management reporting for overseas headquarters.",
    hiringNote: "Foreign technical managers, plant leaders, engineers, and commercial directors may need work permit planning tied to the new entity, employment contract, location, salary, and China tax records.",
    timeline: "Suzhou registration timing is influenced by address confirmation, activity type, park-level coordination, shareholder document readiness, bank onboarding, and whether production or export-related registrations are required.",
    costFactors: ["industrial park or district selection", "address and facility use", "production or environmental review", "import-export needs", "accounting setup", "bank account support", "foreign staff visa planning"],
    faqFocus: "Suzhou registration should be evaluated together with industrial park expectations, VAT invoice needs, production risks, and long-term accounting controls.",
    localTaxPolicies: "Suzhou tax planning often involves VAT invoices, manufacturing or engineering cost allocation, fixed asset records, inventory accounting, export rebate support, related-party service charges, and payroll for technical staff. Industrial companies should connect tax setup with plant, warehouse, or engineering activity from the beginning.",
    localAdvantages: "Suzhou offers access to industrial parks, manufacturing suppliers, engineering talent, Yangtze River Delta customers, logistics networks, and foreign-invested company experience. It can be more practical than a first-tier city for businesses that need operating space, technical staff, and supplier proximity.",
    industryRecommendations: "Suzhou is recommended for manufacturing support, engineering services, R&D support, industrial consulting, trading, supply chain management, quality inspection, and export-oriented operations. Projects involving production, testing, repair, or storage need early review of facility and permit requirements.",
    officeRentalInfo: "Suzhou office or facility rental should reflect whether the company is a pure service entity, trading office, engineering center, warehouse user, or production-related operation. Industrial park addresses can be useful, but lease terms and permitted use should match the registration and license plan.",
    bankAccountOpening: "Suzhou banks may ask about industrial customers, supplier contracts, registered capital plan, facility lease, expected equipment purchases, foreign currency needs, and group-company transactions. Prepare a business plan, lease evidence, shareholder materials, tax records, and explanations for manufacturing or export flows.",
    vatRegistration: "Suzhou VAT registration should consider whether the company needs special VAT invoices, input VAT deduction on equipment or materials, export rebate treatment, or general taxpayer status. Manufacturing-adjacent companies need tight invoice matching between purchases, production records, sales, and bank receipts.",
    accountingRequirements: "Suzhou accounting should include contracts, purchase invoices, inventory records, fixed asset ledgers, engineering project files, payroll records, bank slips, customs documents, and management reports for overseas headquarters. Industrial companies should document cost allocation and asset use carefully.",
    annualCompliance: "Suzhou annual compliance should include annual reporting, corporate income tax reconciliation, asset and inventory review, license and environmental status checks where relevant, payroll filings, audit preparation, export record review, and updates for address or scope changes.",
    localProcess: [
      "Confirm whether Suzhou will host manufacturing support, engineering, R&D, trading, supply chain, or a broader Yangtze River Delta operating team.",
      "Compare Suzhou Industrial Park, Gusu, Wuzhong, Xiangcheng, Wujiang, Kunshan, and other locations by facility needs and tax administration.",
      "Draft a business scope that reflects service, trading, engineering, production support, or export activity while screening environmental and license issues.",
      "Prepare shareholder documents, address or facility materials, officer information, articles, registration forms, and any park-level explanations.",
      "After approval, complete chops, bank setup, tax registration, VAT invoice access, accounting controls, export-related steps, payroll, and work permits."
    ],
    comparisonRows: [
      { factor: "Best fit", recommended: "Manufacturing support, engineering, R&D, trading, supply chain, and export operations.", caution: "Production, warehousing, or testing activity may need facility and environmental review." },
      { factor: "Office choice", recommended: "Use an address or facility that supports the actual industrial activity.", caution: "A simple serviced office may not fit production-adjacent operations." },
      { factor: "Tax focus", recommended: "Track fixed assets, inventory, input VAT, export records, and cost allocation.", caution: "Weak asset and inventory records can create audit and tax risk." }
    ]
  },
  {
    key: "hangzhou",
    city: "Hangzhou",
    province: "Zhejiang",
    path: "/register-company-in-hangzhou",
    title: "Register Company in Hangzhou | China Technology and E-commerce Setup",
    metaDescription: "Register a company in Hangzhou with guidance on WFOE setup, e-commerce and technology scope, required documents, registered address, tax registration, accounting, visa support, timeline, and costs.",
    h1: "Register a company in Hangzhou for technology, e-commerce, and service businesses.",
    intro: "Hangzhou is a leading location for digital commerce, software services, brand operations, creative businesses, online marketing, consulting, and technology-enabled companies serving domestic and international markets.",
    localPosition: "Foreign investors should prepare a registration strategy that explains the online or service model, revenue flow, data and platform exposure, fapiao needs, address arrangement, staffing, and monthly tax compliance.",
    districts: ["Xihu", "Shangcheng", "Gongshu", "Binjiang", "Yuhang", "Qiantang"],
    industries: ["e-commerce", "software services", "digital marketing", "brand operations", "technology consulting", "creative services"],
    addressNote: "Hangzhou address selection should support the company business model, especially when the business is online, platform-based, creative, or technology-driven. Address documents should be consistent for registration, tax, and banking.",
    licenseNote: "Hangzhou companies involving online platforms, value-added telecom services, food sales, education, culture, advertising, medical devices, or cross-border e-commerce should check licensing and filing requirements early.",
    taxNote: "Hangzhou tax setup should address VAT treatment for services or goods, platform revenue, deductible expenses, cross-border service fees, individual income tax, and bookkeeping discipline for fast-growing digital teams.",
    hiringNote: "Foreign founders and technical employees should align work permit planning with the company role, registered address, salary, employment contract, and the company tax record after setup.",
    timeline: "Hangzhou registration timing depends on shareholder documentation, address confirmation, business scope review, whether online business filings are needed, and the speed of bank and tax onboarding.",
    costFactors: ["technology or e-commerce scope review", "address suitability", "platform filing assessment", "shareholder documents", "VAT and invoice setup", "bookkeeping support", "visa planning"],
    faqFocus: "Hangzhou registration should connect the online revenue model with tax, invoicing, licensing, data, and accounting requirements before the company begins issuing contracts.",
    localTaxPolicies: "Hangzhou tax planning often turns on digital revenue, platform statements, service VAT, advertising or marketing expenses, software income, cross-border service fees, and deductible technology costs. E-commerce and online service companies should make platform data, bank receipts, fapiao, and contracts reconcile cleanly.",
    localAdvantages: "Hangzhou gives investors access to e-commerce ecosystems, platform talent, digital marketing teams, software developers, brand operators, Zhejiang suppliers, and fast-growing consumer companies. It is attractive when the China entity will manage online revenue, technology services, or brand operations.",
    industryRecommendations: "Hangzhou is recommended for e-commerce, software, digital marketing, brand management, creative services, technology consulting, online operations, and cross-border commerce support. Platform, telecom, food sales, education, data, and advertising models should be reviewed for filings or permits.",
    officeRentalInfo: "Hangzhou office rental should match the company's digital or service model. Xihu and Shangcheng may suit professional teams, Binjiang and Yuhang often fit technology or platform-related teams, and Qiantang can fit broader operating space. Address documents should be consistent for registration, tax, and banks.",
    bankAccountOpening: "Hangzhou banks may ask how platform revenue is collected, whether the company sells goods or services, where customers are located, and how overseas shareholder funding enters China. Prepare platform summaries, service descriptions, lease evidence, tax contacts, and expected transaction explanations.",
    vatRegistration: "Hangzhou VAT registration should be planned around service invoices, digital platform receipts, e-commerce goods, software revenue, and customer invoice requirements. General taxpayer status can help larger B2B businesses but requires disciplined platform and fapiao reconciliation.",
    accountingRequirements: "Hangzhou accounting should include platform statements, service contracts, advertising invoices, software development costs, bank receipts, payroll records, fapiao, refund records, and cross-border service support. Digital businesses need monthly reconciliation between online data and statutory accounts.",
    annualCompliance: "Hangzhou annual compliance should review annual market reporting, corporate income tax reconciliation, VAT filing records, platform revenue matching, license or filing changes, payroll compliance, address status, and any changes to shareholders, scope, or online business activity.",
    localProcess: [
      "Confirm whether Hangzhou is being used for e-commerce, software, online marketing, creative services, brand operations, or Zhejiang market development.",
      "Select Xihu, Shangcheng, Gongshu, Binjiang, Yuhang, Qiantang, or another district based on talent, platform access, office needs, and tax administration.",
      "Draft a business scope that supports online services, software, e-commerce support, marketing, consulting, or brand operations while checking filings.",
      "Prepare shareholder documents, officer details, address materials, articles, registration forms, and explanations for platform or digital revenue.",
      "After approval, arrange chops, bank setup, tax registration, VAT invoice access, bookkeeping, platform data controls, payroll, and visa support."
    ],
    comparisonRows: [
      { factor: "Best fit", recommended: "E-commerce, software, digital marketing, brand management, and online services.", caution: "Platform, telecom, food, education, and data-heavy models may need extra filings." },
      { factor: "Office choice", recommended: "Choose districts near digital talent, platform partners, or Zhejiang suppliers.", caution: "An address that cannot support bank review can delay revenue collection." },
      { factor: "Tax focus", recommended: "Reconcile platform data, service contracts, VAT invoices, refunds, and bank receipts.", caution: "Unmatched online revenue can create VAT and income tax issues." }
    ]
  },
  {
    key: "nanjing",
    city: "Nanjing",
    province: "Jiangsu",
    path: "/register-company-in-nanjing",
    title: "Register Company in Nanjing | Jiangsu WFOE Setup and Compliance Guide",
    metaDescription: "Register a company in Nanjing with Jiangsu-focused guidance on WFOE setup, business scope, registered address, required documents, tax, accounting, visa planning, timeline, costs, and FAQs.",
    h1: "Register a company in Nanjing with Jiangsu-focused registration and compliance support.",
    intro: "Nanjing is a practical base for foreign investors serving Jiangsu, the Yangtze River Delta, education and research networks, technology parks, service companies, trading firms, and regional management operations.",
    localPosition: "A Nanjing registration plan should connect business scope, shareholder documents, registered address, district selection, tax bureau onboarding, bank account preparation, accounting handover, and any foreign staff requirements.",
    districts: ["Xuanwu", "Qinhuai", "Jianye", "Gulou", "Jiangning", "Pukou"],
    industries: ["professional services", "technology services", "trading", "education support", "regional management", "research collaboration"],
    addressNote: "Nanjing address selection should match the company activity and expected local administration. The address needs to be workable for market regulation registration, tax bureau records, bank account opening, and ongoing correspondence.",
    licenseNote: "Nanjing businesses in education, food, medical devices, import-export, human resources, culture, technology platforms, or regulated services should identify license exposure before filing the business scope.",
    taxNote: "Nanjing tax setup should cover monthly filings, VAT invoice planning, bookkeeping standards, corporate income tax, payroll withholding, deductible expense records, and communication with local tax administrators.",
    hiringNote: "Foreign founders and employees in Nanjing should plan work permits and residence permits around the registered entity, role, employment contract, salary, office address, and payroll compliance.",
    timeline: "Nanjing company registration timing is usually manageable when documents are ready, but the schedule can change because of overseas shareholder legalization, address confirmation, bank onboarding, or license review.",
    costFactors: ["district and address selection", "scope drafting", "shareholder document preparation", "bank setup", "tax and accounting onboarding", "license assessment", "work permit support"],
    faqFocus: "Nanjing registration benefits from local coordination across registration, tax, banking, bookkeeping, and visa matters because those steps are connected after the license is issued.",
    localTaxPolicies: "Nanjing tax administration usually focuses on filing continuity, VAT invoice discipline, payroll withholding, deductible expense support, and whether contracts match the company scope. Jiangsu operating companies should also consider regional service revenue, supplier fapiao, related-party payments, and annual corporate income tax reconciliation.",
    localAdvantages: "Nanjing offers a balanced base for Jiangsu and Yangtze River Delta operations, with access to universities, technology parks, government services, professional talent, regional customers, and lower operating pressure than some first-tier locations. It is practical for companies that want local coordination and manageable costs.",
    industryRecommendations: "Nanjing is recommended for professional services, technology services, education support, trading, regional management, research collaboration, and Jiangsu market development. Regulated education, food, medical device, human resources, culture, and import-export activities should be screened before filing.",
    officeRentalInfo: "Nanjing office rental should be selected by activity and district administration. Jianye can fit corporate service teams, Gulou and Xuanwu may suit professional or education-linked operations, Jiangning can support technology and broader office needs, and Pukou may interest regional expansion projects.",
    bankAccountOpening: "Nanjing banks typically review the shareholder background, address documents, intended customers, expected transaction volume, and tax registration status. A clear bank pack should include the business license, chops, articles, lease materials, contact details, and a practical explanation of revenue and payment flows.",
    vatRegistration: "Nanjing VAT registration should address whether the company needs ordinary or special VAT invoices, whether it will sell services or goods, and how supplier input invoices will be collected. General taxpayer status should be timed with customer invoice needs and bookkeeping readiness.",
    accountingRequirements: "Nanjing accounting should maintain monthly vouchers, fapiao, contracts, bank slips, payroll records, reimbursement approvals, tax filing confirmations, and management reports. Companies serving Jiangsu customers should keep evidence linking local services, invoices, and payment records.",
    annualCompliance: "Nanjing annual compliance should cover market supervision annual reporting, tax filing review, corporate income tax reconciliation, accounting records, license status, payroll records, and updates for registered address, scope, shareholders, directors, or registered capital changes.",
    localProcess: [
      "Confirm whether Nanjing is the right base for Jiangsu customers, technology services, research cooperation, trading, education support, or regional management.",
      "Compare Xuanwu, Qinhuai, Jianye, Gulou, Jiangning, Pukou, and other districts by client access, address suitability, bank convenience, and tax administration.",
      "Draft the business scope around services, trading, technology, education support, or regional operations while checking license exposure.",
      "Prepare shareholder documents, address materials, officer details, articles, registration forms, and local filing explanations before submission.",
      "After approval, arrange chops, bank account, tax registration, VAT invoice setup, bookkeeping, payroll, annual compliance routines, and visa support."
    ],
    comparisonRows: [
      { factor: "Best fit", recommended: "Professional services, technology, trading, education support, and Jiangsu regional management.", caution: "Education, food, medical device, HR, and import-export models need license review." },
      { factor: "Office choice", recommended: "Match district to customer access, staff hiring, tax bureau, and bank convenience.", caution: "An address chosen only for low cost may be poor for ongoing administration." },
      { factor: "Tax focus", recommended: "Maintain monthly filings, VAT invoice controls, payroll records, and expense evidence.", caution: "Late or zero filings without support can create future bank and visa issues." }
    ]
  },
  {
    key: "chengdu",
    city: "Chengdu",
    province: "Sichuan",
    path: "/register-company-in-chengdu",
    title: "Register Company in Chengdu | Western China Business Setup Guide",
    metaDescription: "Register a company in Chengdu with guidance on local business registration, WFOE setup, documents, registered address, licenses, tax registration, accounting, visa planning, costs, timeline, and FAQs.",
    h1: "Register a company in Chengdu for Western China market development.",
    intro: "Chengdu is a strong base for businesses entering Western China, including consulting firms, technology services, consumer brands, food and beverage concepts, trading companies, logistics support teams, and regional sales offices.",
    localPosition: "Foreign investors should prepare a registration plan that explains the commercial model, target district, address use, staffing needs, local customer base, tax registration, invoice flow, and any regulated activity before filing.",
    districts: ["Jinjiang", "Qingyang", "Wuhou", "Chenghua", "High-Tech Zone", "Tianfu New Area"],
    industries: ["regional sales", "technology services", "consumer brands", "food and beverage", "consulting", "logistics support"],
    addressNote: "Chengdu address planning should consider whether the company will use a conventional office, serviced office, commercial address, storefront, warehouse, or district-supported address. Each option affects registration, licensing, tax, and bank review.",
    licenseNote: "Chengdu businesses in food service, retail, import-export, education, travel, medical devices, human resources, or online services should review local license requirements before the company scope is submitted.",
    taxNote: "Chengdu tax and accounting setup should cover VAT taxpayer status, invoice issuance, expense controls, corporate income tax, payroll, local filings, and reporting routines for shareholders outside Sichuan or overseas.",
    hiringNote: "Foreign staff in Chengdu need work permit planning tied to the registered entity, role, salary, education and experience documents, social insurance, and residence permit schedule.",
    timeline: "Chengdu registration timing depends on document readiness, target district, address documents, scope review, license checks, bank account opening, and post-registration tax onboarding.",
    costFactors: ["district and address model", "storefront or food license needs", "business scope review", "shareholder document legalization", "tax and accounting setup", "bank support", "work permit assistance"],
    faqFocus: "Chengdu registration should include a realistic local operating plan, especially for businesses with storefronts, regional hiring, food-related activity, or Western China sales expansion.",
    localTaxPolicies: "Chengdu tax planning should connect VAT invoices, local sales, storefront or service revenue, payroll, social insurance, deductible rent and fit-out costs, and any payments to overseas shareholders. Businesses entering Western China should keep contract and invoice evidence for regional customer development.",
    localAdvantages: "Chengdu gives investors a strong Western China base with access to consumer markets, technology parks, logistics corridors, lower operating costs than coastal hubs, and a deep local talent pool. It is useful for companies testing inland sales, regional support, food concepts, and technology services.",
    industryRecommendations: "Chengdu is recommended for regional sales, consulting, technology services, consumer brands, food and beverage, logistics support, education support where properly scoped, and Western China market development. Storefront, food, travel, medical, and retail models need license review before launch.",
    officeRentalInfo: "Chengdu office rental depends on whether the company needs a client office, technology workspace, storefront, warehouse, or district-supported address. High-Tech Zone and Tianfu New Area can fit technology or growth teams, while Jinjiang, Qingyang, Wuhou, and Chenghua may fit service and consumer-facing businesses.",
    bankAccountOpening: "Chengdu banks may ask about local customer plans, shareholder funding, expected revenue, storefront use, and whether the company will hire employees quickly. Prepare the license, chops, lease, tax materials, shareholder records, and a simple explanation of the Western China operating model.",
    vatRegistration: "Chengdu VAT registration should reflect whether the company sells services, goods, food-related products, or regional support packages. General taxpayer status should be considered when B2B customers require special VAT invoices or when supplier input VAT is material.",
    accountingRequirements: "Chengdu accounting should track rent, fit-out costs, supplier invoices, sales fapiao, payroll, social insurance, bank receipts, food or retail license records where relevant, and expense approvals. Consumer and storefront businesses need careful cash and inventory controls.",
    annualCompliance: "Chengdu annual compliance should include market supervision reporting, tax reconciliation, license renewal or inspection checks, payroll and social insurance review, accounting record retention, address status, and changes to officers, shareholders, scope, or registered capital.",
    localProcess: [
      "Confirm whether Chengdu is the best base for Western China sales, technology services, food or retail activity, logistics support, or regional management.",
      "Compare Jinjiang, Qingyang, Wuhou, Chenghua, High-Tech Zone, Tianfu New Area, and other districts by customers, staff, address, and license needs.",
      "Draft the business scope around sales, consulting, technology, food, retail, or logistics support while identifying permit and storefront issues.",
      "Prepare shareholder documents, address or lease files, officer information, articles, registration forms, and any food or retail license notes.",
      "After approval, complete chops, bank account opening, tax registration, VAT invoice access, bookkeeping, payroll, license follow-up, and visa steps."
    ],
    comparisonRows: [
      { factor: "Best fit", recommended: "Western China sales, technology services, consumer brands, food, consulting, and logistics support.", caution: "Storefront, food, travel, and medical activities should not start before permit review." },
      { factor: "Office choice", recommended: "Choose between office, storefront, warehouse, or technology workspace based on actual operations.", caution: "A registration-only address may not support licensing or customer-facing use." },
      { factor: "Tax focus", recommended: "Track rent, payroll, VAT invoices, supplier records, and local sales evidence.", caution: "Cash-heavy or storefront models need stronger bookkeeping controls." }
    ]
  },
  {
    key: "tianjin",
    city: "Tianjin",
    province: "Tianjin",
    path: "/register-company-in-tianjin",
    title: "Register Company in Tianjin | North China WFOE and Trading Setup",
    metaDescription: "Register a company in Tianjin with North China guidance on WFOE setup, trading scope, registered address, documents, licenses, tax registration, accounting, visa support, timeline, and cost factors.",
    h1: "Register a company in Tianjin for North China trade, services, and operations.",
    intro: "Tianjin is a useful location for trading businesses, port-related services, logistics coordination, manufacturing support, professional services, and companies that need a North China base near Beijing and major transport infrastructure.",
    localPosition: "The registration plan should align the business scope, address, port or logistics needs, supplier contracts, import-export steps, tax status, accounting controls, and hiring plans before the company begins operations.",
    districts: ["Heping", "Hexi", "Nankai", "Binhai New Area", "Dongli", "Wuqing"],
    industries: ["trading", "logistics support", "port-related services", "manufacturing support", "professional services", "regional operations"],
    addressNote: "Tianjin address suitability matters for ordinary registration, bank account opening, tax administration, import-export registration, and any operation connected with logistics, warehousing, or port services.",
    licenseNote: "Tianjin businesses involving import-export, customs matters, logistics, warehousing, food, medical devices, human resources, or regulated technical services should confirm permits and filings before registration.",
    taxNote: "Tianjin tax setup should cover VAT status, import-export invoice flow, customs-related accounting, corporate income tax, payroll withholding, deductible expenses, and monthly bookkeeping from the start.",
    hiringNote: "Foreign managers and specialists should plan work permits around the registered entity, job duties, salary, office address, employment documentation, and residence permit timing.",
    timeline: "Tianjin company setup timing changes with address confirmation, overseas document legalization, import-export registration, bank onboarding, license checks, and the completeness of post-license tax materials.",
    costFactors: ["address and district selection", "port or logistics scope", "import-export registration", "license assessment", "bank account setup", "accounting onboarding", "foreign staff visa planning"],
    faqFocus: "Tianjin registration should be evaluated together with port, logistics, import-export, VAT, and accounting requirements when the company will trade goods or support North China operations.",
    localTaxPolicies: "Tianjin tax planning often involves VAT invoices, import-export records, port-related service fees, logistics costs, customs data, payroll, and deductible supplier expenses. Companies using Tianjin for North China trade should align contracts, customs documents, bank settlements, and accounting records from the first shipment.",
    localAdvantages: "Tianjin offers port access, North China logistics infrastructure, proximity to Beijing, manufacturing networks, and practical operating costs for trading and service companies. It can work well when a business needs logistics capability without placing the full operating team in Beijing.",
    industryRecommendations: "Tianjin is recommended for trading, logistics support, port-related services, manufacturing support, professional services, regional sales, and import-export coordination. Warehousing, customs, food, medical device, human resources, and specialized technical services need early permit review.",
    officeRentalInfo: "Tianjin office rental should consider whether the company needs central client access, Binhai port proximity, warehousing links, or a North China sales office. Heping, Hexi, Nankai, Binhai New Area, Dongli, and Wuqing can serve different operating and logistics goals.",
    bankAccountOpening: "Tianjin banks may ask about port activity, customs flows, supplier contracts, expected foreign currency payments, and why the address fits the business. Prepare lease documents, business plan, shareholder materials, tax evidence, and explanations for import-export or logistics transactions.",
    vatRegistration: "Tianjin VAT registration should be planned around special VAT invoices, import VAT, export records, logistics service invoices, input VAT deductions, and general taxpayer status. Trading businesses should set up invoice and customs reconciliation before regular shipments begin.",
    accountingRequirements: "Tianjin accounting should preserve customs declarations, logistics invoices, purchase fapiao, sales invoices, bank receipts, warehouse records, payroll files, and contract evidence. Port-linked companies need tight matching among goods movement, invoices, and settlement records.",
    annualCompliance: "Tianjin annual compliance should include market supervision reporting, corporate income tax reconciliation, VAT filing review, customs and foreign exchange record checks, license status review, payroll compliance, address validity, and updates for company changes.",
    localProcess: [
      "Confirm whether Tianjin is being used for port access, trading, logistics support, manufacturing services, North China sales, or a Beijing-adjacent office.",
      "Compare Heping, Hexi, Nankai, Binhai New Area, Dongli, Wuqing, and other locations by port access, customer reach, tax administration, and address suitability.",
      "Draft the business scope around trading, logistics, port services, professional services, or manufacturing support while checking permit exposure.",
      "Prepare shareholder documents, address files, officer information, articles, registration forms, and import-export or logistics notes before filing.",
      "After approval, complete chops, bank account, tax registration, VAT invoice access, bookkeeping, customs or foreign exchange steps, payroll, and visa support."
    ],
    comparisonRows: [
      { factor: "Best fit", recommended: "Trading, logistics, port services, manufacturing support, and North China regional operations.", caution: "Warehousing, customs, food, and medical device activities can require extra approvals." },
      { factor: "Office choice", recommended: "Choose central, port-adjacent, or logistics-oriented addresses based on transaction flow.", caution: "An address far from real operations can complicate bank and customs explanations." },
      { factor: "Tax focus", recommended: "Match VAT invoices, customs records, logistics costs, and bank settlements.", caution: "Poor shipment and invoice matching can create VAT and deduction risks." }
    ]
  }
];

export function getCityRegistrationPage(key: string) {
  return cityRegistrationPages.find((page) => page.key === key);
}
