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
    faqFocus: "Shanghai registration is best handled as a full operating setup, not only a license filing, because local tax, invoicing, banking, office, and hiring decisions affect the company immediately after approval."
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
    faqFocus: "Beijing registration requires attention to scope wording and regulatory sensitivity, especially when the company will provide technology, consulting, education, culture, or internet-related services."
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
    faqFocus: "Shenzhen registration should be planned around the operating model, especially when the company will trade goods, issue VAT invoices, hire technical staff, or connect with Hong Kong and Greater Bay Area structures."
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
    faqFocus: "Guangzhou registration is strongest when investors plan the trading, tax, supplier, and invoice model before the business license application is filed."
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
    faqFocus: "Suzhou registration should be evaluated together with industrial park expectations, VAT invoice needs, production risks, and long-term accounting controls."
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
    faqFocus: "Hangzhou registration should connect the online revenue model with tax, invoicing, licensing, data, and accounting requirements before the company begins issuing contracts."
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
    faqFocus: "Nanjing registration benefits from local coordination across registration, tax, banking, bookkeeping, and visa matters because those steps are connected after the license is issued."
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
    faqFocus: "Chengdu registration should include a realistic local operating plan, especially for businesses with storefronts, regional hiring, food-related activity, or Western China sales expansion."
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
    faqFocus: "Tianjin registration should be evaluated together with port, logistics, import-export, VAT, and accounting requirements when the company will trade goods or support North China operations."
  }
];

export function getCityRegistrationPage(key: string) {
  return cityRegistrationPages.find((page) => page.key === key);
}
