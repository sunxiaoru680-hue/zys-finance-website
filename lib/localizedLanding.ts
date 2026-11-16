export const internationalLocales = ["de", "fr", "es", "pt", "ru", "vi", "th", "id", "ar", "ja", "ko"] as const;

export type InternationalLocale = (typeof internationalLocales)[number];

type LocalizedService = {
  title: string;
  text: string;
};

type LocalizedFaq = {
  question: string;
  answer: string;
};

export type LocalizedLandingContent = {
  htmlLang: string;
  direction?: "ltr" | "rtl";
  locale: string;
  languageName: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  title: string;
  introduction: string;
  primaryCta: string;
  secondaryCta: string;
  trustPoints: string[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesIntro: string;
  services: LocalizedService[];
  approachEyebrow: string;
  approachTitle: string;
  approachText: string;
  steps: { title: string; text: string }[];
  whyTitle: string;
  reasons: string[];
  faqTitle: string;
  faqs: LocalizedFaq[];
  finalTitle: string;
  finalText: string;
  contactCta: string;
};

export const localizedLandingContent: Record<InternationalLocale, LocalizedLandingContent> = {
  de: {
    htmlLang: "de",
    locale: "de_DE",
    languageName: "Deutsch",
    seoTitle: "Firmengründung in China, Buchhaltung & Steuerberatung | ZYS Advisory",
    metaDescription:
      "Deutschsprachige Beratung für Firmengründung in China, WFOE-Gründung, Buchhaltung, Steuern, Geschäftsvisa, Arbeitserlaubnis und laufende Compliance.",
    keywords: [
      "Firmengründung China",
      "WFOE gründen China",
      "Buchhaltung China",
      "Steuerberatung China",
      "Arbeitserlaubnis China",
      "Unternehmen in China gründen"
    ],
    eyebrow: "China Business Advisory für internationale Unternehmen",
    title: "Ihr Partner für Firmengründung, Steuern und Compliance in China",
    introduction:
      "ZYS Advisory unterstützt ausländische Investoren, mittelständische Unternehmen und internationale Managementteams beim Aufbau und Betrieb einer Gesellschaft in China. Wir koordinieren Gesellschaftsgründung, Buchhaltung, Steuerregistrierung, Lizenzen, Arbeitsgenehmigungen und die laufende Compliance in einem klaren Projektplan.",
    primaryCta: "Beratung anfragen",
    secondaryCta: "Leistungen ansehen",
    trustPoints: [
      "Direkte Kommunikation auf Englisch und Chinesisch",
      "Klare Dokumentenlisten, Zuständigkeiten und nächste Schritte",
      "Unterstützung von der Gründung bis zur laufenden Compliance"
    ],
    servicesEyebrow: "Leistungen in China",
    servicesTitle: "Praktische Unterstützung über den gesamten Unternehmenszyklus",
    servicesIntro:
      "Eine Gründung ist nur der Anfang. Struktur, Geschäftszweck, Kapital, Adresse, Steuerstatus, Personal und Berichtsprozesse müssen von Beginn an zusammenpassen.",
    services: [
      { title: "Firmengründung und WFOE", text: "Prüfung der Struktur, Vorbereitung der Gesellschafterunterlagen, Geschäftsgegenstand, Registrierung, Geschäftslizenz und Übergabe nach der Gründung." },
      { title: "Buchhaltung und Finanzberichte", text: "Monatliche Buchführung, Belegprüfung, Abstimmungen, Finanzberichte und geordnete Unterlagen für Management, Steuerprüfung und Audit." },
      { title: "Steuern und laufende Meldungen", text: "Unterstützung bei Umsatzsteuer, Körperschaftsteuer, Quellensteuer, Individualsteuer, Rechnungsstellung und Kommunikation mit den zuständigen Behörden." },
      { title: "Arbeitserlaubnis und Aufenthalt", text: "Planung und Dokumentenkoordination für ausländische Gründer, Führungskräfte, Mitarbeiter und berechtigte Familienangehörige." },
      { title: "Lizenzen und rechtliche Koordination", text: "Prüfung genehmigungspflichtiger Tätigkeiten, Lizenzanträge, Änderungen, Verlängerungen, Governance und Koordination mit spezialisierten Rechtsberatern." },
      { title: "Internationale Expansion", text: "Struktur- und Dokumentenplanung für Hongkong, Singapur, die USA und Dubai mit Blick auf China-bezogene Steuer- und Compliance-Fragen." }
    ],
    approachEyebrow: "Unser Vorgehen",
    approachTitle: "Ein nachvollziehbarer Prozess statt isolierter Einzelleistungen",
    approachText:
      "Wir beginnen mit dem tatsächlichen Geschäftsmodell und den Zielen der Gesellschafter. Erst danach werden Struktur, Unterlagen, Zeitplan und Folgeverpflichtungen festgelegt. Zeit- und Kostenangaben bleiben projektbezogen, weil Stadt, Branche, Dokumente und Genehmigungen den Ablauf beeinflussen.",
    steps: [
      { title: "Analyse", text: "Geschäftsmodell, Eigentümer, Zielstadt, Personalbedarf, Umsatzmodell und Zeitplan verstehen." },
      { title: "Planung", text: "Struktur, Geschäftszweck, Unterlagen, Lizenzen, Steuer- und Buchhaltungsanforderungen abstimmen." },
      { title: "Umsetzung", text: "Anträge, Registrierungen und Kommunikation mit Banken, Behörden und weiteren Beteiligten koordinieren." },
      { title: "Betrieb", text: "Buchhaltung, Steuerkalender, Personalthemen, Verlängerungen und jährliche Compliance organisieren." }
    ],
    whyTitle: "Warum internationale Unternehmen mit ZYS arbeiten",
    reasons: [
      "Lokale Ausführung in China mit international verständlicher Kommunikation",
      "Ein Ansprechpartner für miteinander verbundene Registrierungs- und Compliance-Themen",
      "Transparente Abgrenzung von Leistungsumfang, Annahmen und Kundenpflichten",
      "Praxisorientierte Beratung ohne pauschale Genehmigungs- oder Zeitgarantien"
    ],
    faqTitle: "Häufige Fragen zur Firmengründung in China",
    faqs: [
      { question: "Können ausländische Investoren eine Gesellschaft in China gründen?", answer: "In vielen Branchen ist eine vollständig ausländisch gehaltene Gesellschaft möglich. Die geeignete Struktur hängt jedoch von Tätigkeit, Investoren, Standort, Negativliste und möglichen Sondergenehmigungen ab." },
      { question: "Wie lange dauert eine Firmengründung in China?", answer: "Es gibt keinen verlässlichen Einheitstermin. Die Dauer hängt unter anderem von Stadt, Geschäftsgegenstand, registrierter Adresse, Beglaubigung der Gesellschafterdokumente, Lizenzen und Bankprüfung ab." },
      { question: "Braucht eine neue Gesellschaft sofort Buchhaltung und Steuererklärungen?", answer: "Nach der Registrierung sollten Steuer-Onboarding, Buchführung, Rechnungsprozesse und Meldekalender früh eingerichtet werden, auch wenn das Unternehmen noch wenig oder keinen Umsatz erzielt." },
      { question: "Unterstützt ZYS auch nach Erteilung der Geschäftslizenz?", answer: "Ja. Je nach Auftrag unterstützen wir bei Steuerregistrierung, Buchhaltung, Payroll-Koordination, Arbeitserlaubnissen, Lizenzen, Jahrespflichten und Änderungen der Gesellschaftsdaten." }
    ],
    finalTitle: "Planen Sie einen Markteintritt oder eine bestehende China-Gesellschaft?",
    finalText: "Schildern Sie uns Geschäftsmodell, Investorenstruktur, Zielstadt und gewünschten Zeitplan. Wir erläutern die sinnvollen nächsten Schritte und welche Unterlagen zuerst benötigt werden.",
    contactCta: "Projekt besprechen"
  },
  fr: {
    htmlLang: "fr",
    locale: "fr_FR",
    languageName: "Français",
    seoTitle: "Création d’entreprise en Chine, comptabilité et fiscalité | ZYS Advisory",
    metaDescription:
      "Accompagnement des investisseurs étrangers pour la création d’entreprise en Chine, WFOE, comptabilité, fiscalité, permis de travail, visas et conformité.",
    keywords: ["création entreprise Chine", "créer une WFOE en Chine", "comptabilité Chine", "fiscalité Chine", "permis de travail Chine", "implantation en Chine"],
    eyebrow: "Conseil en implantation et conformité en Chine",
    title: "Votre partenaire pour créer et exploiter une entreprise en Chine",
    introduction:
      "ZYS Advisory accompagne les investisseurs étrangers, les PME internationales et leurs équipes de direction dans la création et l’exploitation d’une société en Chine. Nous coordonnons la constitution, la comptabilité, les obligations fiscales, les licences, les permis de travail et la conformité continue dans un plan d’action cohérent.",
    primaryCta: "Demander une consultation",
    secondaryCta: "Découvrir nos services",
    trustPoints: ["Communication directe en anglais et en chinois", "Liste claire des documents et prochaines étapes", "Accompagnement de la création à la conformité courante"],
    servicesEyebrow: "Services en Chine",
    servicesTitle: "Un accompagnement pratique pendant tout le cycle de vie de l’entreprise",
    servicesIntro: "La création n’est que la première étape. La structure, l’objet social, le capital, l’adresse, la fiscalité, les salariés et les processus financiers doivent être pensés ensemble.",
    services: [
      { title: "Création de société et WFOE", text: "Choix de la structure, documents des actionnaires, objet social, immatriculation, licence commerciale et organisation des étapes postérieures à la création." },
      { title: "Comptabilité et reporting", text: "Tenue comptable mensuelle, contrôle des pièces, rapprochements, états financiers et dossiers structurés pour la direction, la fiscalité et l’audit." },
      { title: "Fiscalité et déclarations", text: "Assistance pour la TVA, l’impôt sur les sociétés, les retenues à la source, l’impôt individuel, la facturation et les échanges avec l’administration." },
      { title: "Permis de travail et séjour", text: "Préparation et coordination des dossiers pour fondateurs, dirigeants, salariés étrangers et membres de famille éligibles." },
      { title: "Licences et coordination juridique", text: "Analyse des activités réglementées, demandes et renouvellements de licences, gouvernance et coordination avec des conseils juridiques spécialisés." },
      { title: "Expansion internationale", text: "Planification de structures à Hong Kong, Singapour, aux États-Unis ou à Dubaï, avec prise en compte des enjeux fiscaux et réglementaires liés à la Chine." }
    ],
    approachEyebrow: "Notre méthode",
    approachTitle: "Un processus coordonné plutôt qu’une succession de démarches isolées",
    approachText: "Nous partons du modèle économique réel et des objectifs des actionnaires. La structure, les documents, le calendrier et les obligations futures sont ensuite définis de manière cohérente. Les délais et coûts restent propres à chaque projet, car la ville, le secteur et les autorisations peuvent modifier le parcours.",
    steps: [
      { title: "Analyse", text: "Comprendre l’activité, l’actionnariat, la ville cible, les recrutements, les flux de revenus et le calendrier." },
      { title: "Planification", text: "Définir la structure, l’objet social, les documents, les licences et le dispositif comptable et fiscal." },
      { title: "Mise en œuvre", text: "Coordonner les dépôts, les inscriptions et les échanges avec les autorités, banques et autres intervenants." },
      { title: "Exploitation", text: "Organiser la comptabilité, le calendrier fiscal, les renouvellements, les salariés et la conformité annuelle." }
    ],
    whyTitle: "Pourquoi les entreprises internationales choisissent ZYS",
    reasons: ["Exécution locale en Chine avec une communication adaptée aux décideurs internationaux", "Un interlocuteur pour les sujets interdépendants de création et de conformité", "Périmètre, hypothèses et responsabilités expliqués avant le démarrage", "Conseils pratiques sans promesse irréaliste de délai ou d’autorisation"],
    faqTitle: "Questions fréquentes sur la création d’entreprise en Chine",
    faqs: [
      { question: "Un investisseur étranger peut-il créer une société en Chine ?", answer: "Une société entièrement détenue par des investisseurs étrangers est possible dans de nombreux secteurs. La solution dépend toutefois de l’activité, du lieu, des investisseurs, de la liste négative et des licences applicables." },
      { question: "Combien de temps faut-il pour créer une société ?", answer: "Il n’existe pas de délai unique garanti. La ville, l’objet social, l’adresse enregistrée, la légalisation des documents, les licences et l’examen bancaire influencent le calendrier." },
      { question: "La comptabilité commence-t-elle dès la création ?", answer: "Après l’immatriculation, il convient d’organiser rapidement l’enregistrement fiscal, la comptabilité, la facturation et le calendrier déclaratif, même si l’activité est encore limitée." },
      { question: "ZYS intervient-il après l’obtention de la licence ?", answer: "Oui. Selon la mission, nous pouvons accompagner l’enregistrement fiscal, la comptabilité, la paie, les permis de travail, les licences, les obligations annuelles et les modifications de la société." }
    ],
    finalTitle: "Vous préparez une implantation ou gérez déjà une société en Chine ?",
    finalText: "Présentez-nous votre activité, l’actionnariat envisagé, la ville cible et le calendrier. Nous vous indiquerons les prochaines étapes pertinentes et les premiers documents à préparer.",
    contactCta: "Discuter de votre projet"
  },
  es: {
    htmlLang: "es",
    locale: "es_ES",
    languageName: "Español",
    seoTitle: "Constitución de empresas en China, contabilidad e impuestos | ZYS Advisory",
    metaDescription: "Asesoramiento para constituir empresas en China, registrar una WFOE, llevar la contabilidad, cumplir obligaciones fiscales y tramitar visados y permisos de trabajo.",
    keywords: ["crear empresa en China", "registro WFOE China", "contabilidad en China", "impuestos en China", "permiso de trabajo China", "invertir en China"],
    eyebrow: "Asesoría empresarial y fiscal en China",
    title: "Su socio para constituir y operar una empresa en China",
    introduction: "ZYS Advisory ayuda a inversores extranjeros, pymes internacionales y equipos directivos a crear y gestionar empresas en China. Coordinamos constitución, contabilidad, registro fiscal, licencias, permisos de trabajo y cumplimiento continuo mediante un plan claro y conectado.",
    primaryCta: "Solicitar una consulta",
    secondaryCta: "Ver servicios",
    trustPoints: ["Comunicación directa en inglés y chino", "Listas claras de documentos, responsables y próximos pasos", "Apoyo desde la constitución hasta el cumplimiento recurrente"],
    servicesEyebrow: "Servicios en China",
    servicesTitle: "Apoyo práctico durante todo el ciclo de vida empresarial",
    servicesIntro: "La constitución es solo el comienzo. La estructura, el objeto social, el capital, el domicilio, los impuestos, el personal y los procesos financieros deben planificarse conjuntamente.",
    services: [
      { title: "Constitución y registro WFOE", text: "Revisión de estructura, documentos de socios, objeto social, registro, licencia comercial y coordinación de las obligaciones posteriores." },
      { title: "Contabilidad e informes", text: "Contabilidad mensual, revisión documental, conciliaciones, estados financieros e información organizada para dirección, fiscalidad y auditoría." },
      { title: "Fiscalidad y declaraciones", text: "Asistencia en IVA, impuesto sobre sociedades, retenciones, impuesto individual, facturación y comunicación con las autoridades fiscales." },
      { title: "Permisos de trabajo y residencia", text: "Planificación y coordinación documental para fundadores, directivos, empleados extranjeros y familiares que cumplan los requisitos." },
      { title: "Licencias y coordinación legal", text: "Evaluación de actividades reguladas, solicitudes, modificaciones y renovaciones de licencias, gobierno corporativo y coordinación jurídica especializada." },
      { title: "Expansión internacional", text: "Planificación de estructuras en Hong Kong, Singapur, Estados Unidos y Dubái considerando los vínculos fiscales y regulatorios con China." }
    ],
    approachEyebrow: "Cómo trabajamos",
    approachTitle: "Un proceso coordinado en lugar de trámites aislados",
    approachText: "Empezamos por el modelo de negocio real y los objetivos de los socios. Después definimos estructura, documentos, calendario y obligaciones futuras. Los plazos y costes dependen del proyecto, porque la ciudad, el sector, la documentación y las licencias pueden cambiar el proceso.",
    steps: [
      { title: "Análisis", text: "Entender actividad, accionistas, ciudad, contratación, flujos de ingresos y calendario." },
      { title: "Planificación", text: "Definir estructura, objeto social, documentos, licencias y requisitos contables y fiscales." },
      { title: "Ejecución", text: "Coordinar solicitudes, registros y comunicación con autoridades, bancos y otros participantes." },
      { title: "Operación", text: "Organizar contabilidad, calendario fiscal, personal, renovaciones y cumplimiento anual." }
    ],
    whyTitle: "Por qué empresas internacionales trabajan con ZYS",
    reasons: ["Ejecución local en China con comunicación comprensible para equipos internacionales", "Un punto de coordinación para registro, impuestos, contabilidad, licencias y visados", "Alcance, supuestos y responsabilidades explicados antes de iniciar", "Orientación práctica sin promesas infundadas de aprobación o plazo"],
    faqTitle: "Preguntas frecuentes sobre crear una empresa en China",
    faqs: [
      { question: "¿Puede un extranjero crear una empresa en China?", answer: "En muchos sectores es posible establecer una sociedad de propiedad totalmente extranjera. La estructura adecuada depende de la actividad, la ubicación, los inversores, la lista negativa y las licencias aplicables." },
      { question: "¿Cuánto tarda el registro?", answer: "No existe un plazo único garantizado. Influyen la ciudad, el objeto social, el domicilio registrado, la legalización de documentos, las licencias y la revisión bancaria." },
      { question: "¿La empresa necesita contabilidad desde el inicio?", answer: "Tras el registro conviene establecer cuanto antes el alta fiscal, la contabilidad, la facturación y el calendario de declaraciones, incluso si todavía hay poca actividad." },
      { question: "¿ZYS presta servicios después de obtener la licencia?", answer: "Sí. Según el encargo, apoyamos el registro fiscal, la contabilidad, la coordinación de nóminas, los permisos de trabajo, las licencias, el cumplimiento anual y los cambios societarios." }
    ],
    finalTitle: "¿Está preparando su entrada en China o gestionando una empresa existente?",
    finalText: "Comparta su modelo de negocio, estructura de socios, ciudad objetivo y calendario. Le explicaremos los siguientes pasos razonables y la documentación que debe preparar primero.",
    contactCta: "Hablar sobre el proyecto"
  },
  pt: {
    htmlLang: "pt",
    locale: "pt_BR",
    languageName: "Português",
    seoTitle: "Abertura de empresa na China, contabilidade e impostos | ZYS Advisory",
    metaDescription: "Assessoria para abrir empresa na China, registrar WFOE, organizar contabilidade, obrigações fiscais, licenças, visto e autorização de trabalho.",
    keywords: ["abrir empresa na China", "registro WFOE China", "contabilidade na China", "impostos na China", "visto de trabalho China", "investir na China"],
    eyebrow: "Assessoria empresarial e tributária na China",
    title: "Seu parceiro para constituir e operar uma empresa na China",
    introduction: "A ZYS Advisory apoia investidores estrangeiros, pequenas e médias empresas internacionais e equipes de gestão na constituição e operação de empresas na China. Coordenamos registro societário, contabilidade, tributação, licenças, autorizações de trabalho e conformidade contínua em um plano de execução integrado.",
    primaryCta: "Solicitar uma consulta",
    secondaryCta: "Conhecer os serviços",
    trustPoints: ["Comunicação direta em inglês e chinês", "Documentos, responsabilidades e próximos passos claramente definidos", "Suporte desde a constituição até a conformidade recorrente"],
    servicesEyebrow: "Serviços na China",
    servicesTitle: "Suporte prático durante todo o ciclo de vida da empresa",
    servicesIntro: "A constituição é apenas o início. Estrutura societária, objeto social, capital, endereço, tributação, equipe e controles financeiros precisam ser planejados em conjunto.",
    services: [
      { title: "Constituição de empresa e WFOE", text: "Análise da estrutura, documentos dos sócios, objeto social, registro, licença comercial e coordenação das etapas posteriores à constituição." },
      { title: "Contabilidade e relatórios", text: "Escrituração mensal, revisão de documentos, conciliações, demonstrações financeiras e arquivos organizados para gestão, tributação e auditoria." },
      { title: "Tributação e declarações", text: "Apoio relacionado a VAT, imposto de renda corporativo, retenções, imposto individual, faturamento e comunicação com as autoridades fiscais." },
      { title: "Autorização de trabalho e residência", text: "Planejamento e coordenação documental para fundadores, executivos, funcionários estrangeiros e familiares elegíveis." },
      { title: "Licenças e coordenação jurídica", text: "Avaliação de atividades reguladas, pedidos, alterações e renovações de licenças, governança e coordenação com assessores jurídicos especializados." },
      { title: "Expansão internacional", text: "Planejamento de estruturas em Hong Kong, Singapura, Estados Unidos e Dubai considerando questões fiscais e regulatórias relacionadas à China." }
    ],
    approachEyebrow: "Como trabalhamos",
    approachTitle: "Um processo coordenado, não uma sequência de tarefas isoladas",
    approachText: "Começamos pelo modelo de negócios real e pelos objetivos dos sócios. Depois definimos estrutura, documentos, cronograma e obrigações futuras. Prazos e custos dependem de cada projeto, pois cidade, setor, documentação e licenças podem alterar o processo.",
    steps: [
      { title: "Diagnóstico", text: "Entender a atividade, os sócios, a cidade, a contratação, os fluxos de receita e o cronograma." },
      { title: "Planejamento", text: "Definir estrutura, objeto social, documentos, licenças e requisitos contábeis e fiscais." },
      { title: "Implementação", text: "Coordenar pedidos, registros e comunicação com autoridades, bancos e demais participantes." },
      { title: "Operação", text: "Organizar contabilidade, calendário fiscal, pessoal, renovações e conformidade anual." }
    ],
    whyTitle: "Por que empresas internacionais trabalham com a ZYS",
    reasons: ["Execução local na China com comunicação adequada a equipes internacionais", "Um ponto de coordenação para registro, contabilidade, impostos, licenças e vistos", "Escopo, premissas e responsabilidades explicados antes do início", "Orientação prática sem promessas infundadas de aprovação ou prazo"],
    faqTitle: "Perguntas frequentes sobre abertura de empresa na China",
    faqs: [
      { question: "Estrangeiros podem abrir uma empresa na China?", answer: "Em muitos setores é possível constituir uma empresa integralmente estrangeira. A estrutura adequada depende da atividade, localização, investidores, lista negativa e licenças aplicáveis." },
      { question: "Quanto tempo leva o registro?", answer: "Não existe um prazo único garantido. Cidade, objeto social, endereço registrado, autenticação dos documentos, licenças e análise bancária influenciam o cronograma." },
      { question: "A empresa precisa de contabilidade desde o início?", answer: "Após o registro, é importante organizar rapidamente cadastro fiscal, escrituração, faturamento e calendário de declarações, mesmo quando a atividade inicial é limitada." },
      { question: "A ZYS presta suporte após a emissão da licença?", answer: "Sim. Conforme o escopo contratado, apoiamos cadastro fiscal, contabilidade, coordenação de folha, autorizações de trabalho, licenças, obrigações anuais e alterações societárias." }
    ],
    finalTitle: "Está planejando entrar na China ou administrar uma empresa já existente?",
    finalText: "Compartilhe o modelo de negócios, a estrutura societária, a cidade pretendida e o cronograma. Explicaremos os próximos passos e os primeiros documentos a preparar.",
    contactCta: "Falar sobre o projeto"
  },
  ru: {
    htmlLang: "ru",
    locale: "ru_RU",
    languageName: "Русский",
    seoTitle: "Регистрация компании в Китае, бухгалтерия и налоги | ZYS Advisory",
    metaDescription: "Сопровождение иностранных инвесторов: регистрация компании и WFOE в Китае, бухгалтерия, налоги, лицензии, рабочие визы и разрешения на работу.",
    keywords: ["регистрация компании в Китае", "регистрация WFOE Китай", "бухгалтерия в Китае", "налоги в Китае", "разрешение на работу Китай", "бизнес в Китае"],
    eyebrow: "Деловой и налоговый консалтинг в Китае",
    title: "Ваш партнер по регистрации и ведению бизнеса в Китае",
    introduction: "ZYS Advisory помогает иностранным инвесторам, международным компаниям и управленческим командам создавать и вести бизнес в Китае. Мы объединяем регистрацию, бухгалтерский учет, налоги, лицензии, разрешения на работу и постоянный комплаенс в единый план действий.",
    primaryCta: "Запросить консультацию",
    secondaryCta: "Посмотреть услуги",
    trustPoints: ["Прямая коммуникация на английском и китайском языках", "Понятные списки документов, обязанностей и следующих шагов", "Поддержка от регистрации до текущего комплаенса"],
    servicesEyebrow: "Услуги в Китае",
    servicesTitle: "Практическая поддержка на всем жизненном цикле компании",
    servicesIntro: "Регистрация — только первый этап. Структура, вид деятельности, капитал, адрес, налоги, персонал и финансовые процессы должны быть согласованы с самого начала.",
    services: [
      { title: "Регистрация компании и WFOE", text: "Анализ структуры, документы акционеров, формулировка деятельности, регистрация, бизнес-лицензия и организация действий после создания компании." },
      { title: "Бухгалтерия и отчетность", text: "Ежемесячный учет, проверка первичных документов, сверки, финансовая отчетность и систематизация материалов для руководства, налогов и аудита." },
      { title: "Налоги и декларации", text: "Поддержка по НДС, корпоративному и индивидуальному подоходному налогу, удержаниям, счетам-фапяо и взаимодействию с налоговыми органами." },
      { title: "Разрешение на работу и проживание", text: "Планирование и подготовка документов для иностранных учредителей, руководителей, сотрудников и членов семьи, отвечающих требованиям." },
      { title: "Лицензии и юридическая координация", text: "Проверка регулируемых видов деятельности, оформление и продление лицензий, вопросы корпоративного управления и координация со специализированными юристами." },
      { title: "Международное расширение", text: "Планирование компаний в Гонконге, Сингапуре, США и Дубае с учетом связанных с Китаем налоговых и регуляторных вопросов." }
    ],
    approachEyebrow: "Наш подход",
    approachTitle: "Согласованный проект вместо набора разрозненных процедур",
    approachText: "Сначала мы изучаем реальную бизнес-модель и цели акционеров. Затем определяем структуру, документы, график и будущие обязанности. Сроки и стоимость зависят от конкретного проекта, поскольку город, отрасль, документы и лицензии могут менять процесс.",
    steps: [
      { title: "Анализ", text: "Изучить деятельность, акционеров, целевой город, персонал, модель доходов и сроки." },
      { title: "Планирование", text: "Определить структуру, сферу деятельности, документы, лицензии, бухгалтерские и налоговые требования." },
      { title: "Реализация", text: "Координировать заявления, регистрации и взаимодействие с органами, банками и другими участниками." },
      { title: "Операционная поддержка", text: "Организовать бухгалтерию, налоговый календарь, кадровые вопросы, продления и ежегодный комплаенс." }
    ],
    whyTitle: "Почему международные компании работают с ZYS",
    reasons: ["Практическая работа в Китае и понятная коммуникация для международных команд", "Единый координатор по регистрации, учету, налогам, лицензиям и визам", "Прозрачное определение объема, допущений и обязанностей до начала работ", "Практические рекомендации без необоснованных гарантий сроков или одобрения"],
    faqTitle: "Частые вопросы о регистрации компании в Китае",
    faqs: [
      { question: "Может ли иностранец открыть компанию в Китае?", answer: "Во многих отраслях возможна компания со 100% иностранным участием. Подходящая структура зависит от деятельности, инвесторов, города, негативного списка и специальных лицензий." },
      { question: "Сколько времени занимает регистрация?", answer: "Единого гарантированного срока нет. На график влияют город, вид деятельности, зарегистрированный адрес, легализация документов, лицензии и банковская проверка." },
      { question: "Нужна ли бухгалтерия сразу после регистрации?", answer: "После регистрации следует своевременно настроить налоговый учет, бухгалтерию, работу с фапяо и календарь отчетности, даже если операций пока немного." },
      { question: "Работает ли ZYS после получения бизнес-лицензии?", answer: "Да. В зависимости от договора мы поддерживаем налоговую регистрацию, бухгалтерию, расчет зарплаты, разрешения на работу, лицензии, ежегодные обязанности и корпоративные изменения." }
    ],
    finalTitle: "Планируете выход на рынок Китая или управляете действующей компанией?",
    finalText: "Расскажите о бизнес-модели, структуре акционеров, целевом городе и сроках. Мы объясним разумные следующие шаги и перечень первоочередных документов.",
    contactCta: "Обсудить проект"
  },
  vi: {
    htmlLang: "vi",
    locale: "vi_VN",
    languageName: "Tiếng Việt",
    seoTitle: "Thành lập công ty tại Trung Quốc, kế toán và thuế | ZYS Advisory",
    metaDescription: "Hỗ trợ nhà đầu tư nước ngoài thành lập công ty và WFOE tại Trung Quốc, kế toán, thuế, giấy phép kinh doanh, thị thực và giấy phép lao động.",
    keywords: ["thành lập công ty tại Trung Quốc", "đăng ký WFOE Trung Quốc", "kế toán Trung Quốc", "thuế Trung Quốc", "giấy phép lao động Trung Quốc", "đầu tư vào Trung Quốc"],
    eyebrow: "Tư vấn kinh doanh và thuế tại Trung Quốc",
    title: "Đối tác hỗ trợ thành lập và vận hành doanh nghiệp tại Trung Quốc",
    introduction: "ZYS Advisory hỗ trợ nhà đầu tư nước ngoài, doanh nghiệp quốc tế và đội ngũ quản lý thành lập, vận hành công ty tại Trung Quốc. Chúng tôi phối hợp đăng ký doanh nghiệp, kế toán, thuế, giấy phép, giấy phép lao động và tuân thủ thường xuyên trong một kế hoạch triển khai thống nhất.",
    primaryCta: "Yêu cầu tư vấn",
    secondaryCta: "Xem dịch vụ",
    trustPoints: ["Trao đổi trực tiếp bằng tiếng Anh và tiếng Trung", "Danh mục hồ sơ, trách nhiệm và bước tiếp theo rõ ràng", "Hỗ trợ từ khi thành lập đến tuân thủ định kỳ"],
    servicesEyebrow: "Dịch vụ tại Trung Quốc",
    servicesTitle: "Hỗ trợ thực tế trong toàn bộ vòng đời doanh nghiệp",
    servicesIntro: "Thành lập chỉ là bước đầu. Cơ cấu, phạm vi kinh doanh, vốn, địa chỉ đăng ký, thuế, nhân sự và quy trình tài chính cần được hoạch định đồng bộ.",
    services: [
      { title: "Thành lập công ty và WFOE", text: "Rà soát cơ cấu, hồ sơ cổ đông, phạm vi kinh doanh, đăng ký, giấy phép kinh doanh và phối hợp các công việc sau thành lập." },
      { title: "Kế toán và báo cáo", text: "Ghi sổ hàng tháng, kiểm tra chứng từ, đối chiếu, báo cáo tài chính và sắp xếp hồ sơ phục vụ quản lý, thuế và kiểm toán." },
      { title: "Thuế và kê khai", text: "Hỗ trợ về VAT, thuế thu nhập doanh nghiệp, thuế khấu trừ, thuế thu nhập cá nhân, hóa đơn fapiao và làm việc với cơ quan thuế." },
      { title: "Giấy phép lao động và cư trú", text: "Lập kế hoạch và phối hợp hồ sơ cho nhà sáng lập, quản lý, nhân viên nước ngoài và người thân đủ điều kiện." },
      { title: "Giấy phép và phối hợp pháp lý", text: "Đánh giá ngành nghề có điều kiện, xin mới, thay đổi và gia hạn giấy phép, quản trị doanh nghiệp và phối hợp với tư vấn pháp lý chuyên môn." },
      { title: "Mở rộng quốc tế", text: "Lập kế hoạch cơ cấu tại Hồng Kông, Singapore, Hoa Kỳ và Dubai, đồng thời xem xét vấn đề thuế và tuân thủ liên quan đến Trung Quốc." }
    ],
    approachEyebrow: "Cách chúng tôi làm việc",
    approachTitle: "Một quy trình phối hợp thay vì các thủ tục rời rạc",
    approachText: "Chúng tôi bắt đầu từ mô hình kinh doanh thực tế và mục tiêu của cổ đông, sau đó xác định cơ cấu, hồ sơ, lịch trình và nghĩa vụ về sau. Thời gian và chi phí phụ thuộc từng dự án vì thành phố, ngành nghề, hồ sơ và giấy phép có thể làm thay đổi quy trình.",
    steps: [
      { title: "Đánh giá", text: "Tìm hiểu hoạt động, cổ đông, thành phố, kế hoạch nhân sự, dòng doanh thu và thời gian dự kiến." },
      { title: "Lập kế hoạch", text: "Xác định cơ cấu, phạm vi kinh doanh, hồ sơ, giấy phép và yêu cầu kế toán, thuế." },
      { title: "Triển khai", text: "Phối hợp hồ sơ, đăng ký và trao đổi với cơ quan nhà nước, ngân hàng và các bên liên quan." },
      { title: "Vận hành", text: "Tổ chức kế toán, lịch thuế, nhân sự, gia hạn và tuân thủ hàng năm." }
    ],
    whyTitle: "Vì sao doanh nghiệp quốc tế làm việc với ZYS",
    reasons: ["Năng lực triển khai tại Trung Quốc với cách trao đổi rõ ràng cho đội ngũ quốc tế", "Một đầu mối phối hợp đăng ký, kế toán, thuế, giấy phép và thị thực", "Phạm vi, giả định và trách nhiệm được giải thích trước khi bắt đầu", "Tư vấn thực tế, không đưa ra cam kết phê duyệt hoặc thời hạn thiếu căn cứ"],
    faqTitle: "Câu hỏi thường gặp về thành lập công ty tại Trung Quốc",
    faqs: [
      { question: "Người nước ngoài có thể thành lập công ty tại Trung Quốc không?", answer: "Trong nhiều ngành, nhà đầu tư có thể thành lập công ty 100% vốn nước ngoài. Cơ cấu phù hợp còn phụ thuộc hoạt động, nhà đầu tư, địa điểm, danh mục hạn chế và giấy phép chuyên ngành." },
      { question: "Thời gian đăng ký mất bao lâu?", answer: "Không có một thời hạn cố định được bảo đảm. Thành phố, phạm vi kinh doanh, địa chỉ đăng ký, chứng nhận hồ sơ cổ đông, giấy phép và kiểm tra ngân hàng đều ảnh hưởng lịch trình." },
      { question: "Công ty có cần làm kế toán ngay sau khi thành lập?", answer: "Sau đăng ký, doanh nghiệp nên sớm hoàn tất đăng ký thuế, tổ chức ghi sổ, quy trình fapiao và lịch kê khai, kể cả khi hoạt động ban đầu còn ít." },
      { question: "ZYS có hỗ trợ sau khi cấp giấy phép kinh doanh không?", answer: "Có. Tùy phạm vi dịch vụ, chúng tôi hỗ trợ đăng ký thuế, kế toán, phối hợp tiền lương, giấy phép lao động, giấy phép chuyên ngành, nghĩa vụ hàng năm và thay đổi doanh nghiệp." }
    ],
    finalTitle: "Bạn đang chuẩn bị vào thị trường Trung Quốc hay quản lý một công ty hiện có?",
    finalText: "Hãy chia sẻ mô hình kinh doanh, cơ cấu cổ đông, thành phố dự kiến và lịch trình. Chúng tôi sẽ giải thích các bước tiếp theo phù hợp và hồ sơ cần chuẩn bị trước.",
    contactCta: "Trao đổi về dự án"
  },
  th: {
    htmlLang: "th",
    locale: "th_TH",
    languageName: "ไทย",
    seoTitle: "จดทะเบียนบริษัทในจีน บัญชี ภาษี และใบอนุญาต | ZYS Advisory",
    metaDescription: "บริการสำหรับนักลงทุนต่างชาติในการจดทะเบียนบริษัทและ WFOE ในจีน งานบัญชี ภาษี ใบอนุญาต วีซ่า และใบอนุญาตทำงาน",
    keywords: ["จดทะเบียนบริษัทในจีน", "จดทะเบียน WFOE จีน", "บัญชีในจีน", "ภาษีจีน", "ใบอนุญาตทำงานจีน", "ลงทุนในจีน"],
    eyebrow: "ที่ปรึกษาธุรกิจและภาษีในประเทศจีน",
    title: "พันธมิตรสำหรับการจัดตั้งและดำเนินธุรกิจในประเทศจีน",
    introduction: "ZYS Advisory สนับสนุนนักลงทุนต่างชาติ บริษัทระหว่างประเทศ และทีมผู้บริหารในการจัดตั้งและดำเนินบริษัทในจีน เราประสานงานการจดทะเบียน บัญชี ภาษี ใบอนุญาต ใบอนุญาตทำงาน และการปฏิบัติตามกฎระเบียบอย่างต่อเนื่องภายใต้แผนงานเดียวกัน",
    primaryCta: "ขอคำปรึกษา",
    secondaryCta: "ดูบริการ",
    trustPoints: ["สื่อสารโดยตรงเป็นภาษาอังกฤษและภาษาจีน", "รายการเอกสาร ความรับผิดชอบ และขั้นตอนถัดไปที่ชัดเจน", "ดูแลตั้งแต่การจัดตั้งจนถึงงานกำกับดูแลประจำ"],
    servicesEyebrow: "บริการธุรกิจในจีน",
    servicesTitle: "การสนับสนุนเชิงปฏิบัติตลอดวงจรชีวิตของบริษัท",
    servicesIntro: "การจัดตั้งเป็นเพียงจุดเริ่มต้น โครงสร้าง ขอบเขตธุรกิจ ทุน ที่อยู่จดทะเบียน ภาษี บุคลากร และกระบวนการทางการเงินควรวางแผนให้สอดคล้องกันตั้งแต่ต้น",
    services: [
      { title: "จัดตั้งบริษัทและจดทะเบียน WFOE", text: "ตรวจสอบโครงสร้าง เอกสารผู้ถือหุ้น ขอบเขตธุรกิจ การจดทะเบียน ใบอนุญาตประกอบธุรกิจ และงานหลังการจัดตั้ง" },
      { title: "บัญชีและรายงานทางการเงิน", text: "บันทึกบัญชีรายเดือน ตรวจสอบเอกสาร กระทบยอด จัดทำงบการเงิน และจัดระบบข้อมูลสำหรับฝ่ายบริหาร ภาษี และการตรวจสอบ" },
      { title: "ภาษีและการยื่นแบบ", text: "สนับสนุนด้าน VAT ภาษีเงินได้นิติบุคคล ภาษีหัก ณ ที่จ่าย ภาษีบุคคล การออก fapiao และการติดต่อหน่วยงานภาษี" },
      { title: "ใบอนุญาตทำงานและพำนัก", text: "วางแผนและประสานเอกสารสำหรับผู้ก่อตั้ง ผู้บริหาร พนักงานต่างชาติ และสมาชิกครอบครัวที่มีคุณสมบัติ" },
      { title: "ใบอนุญาตและการประสานงานด้านกฎหมาย", text: "ประเมินกิจการที่อยู่ภายใต้การกำกับ ขอ แก้ไข และต่ออายุใบอนุญาต รวมถึงประสานงานที่ปรึกษากฎหมายเฉพาะด้าน" },
      { title: "การขยายธุรกิจระหว่างประเทศ", text: "วางแผนโครงสร้างในฮ่องกง สิงคโปร์ สหรัฐอเมริกา และดูไบ โดยคำนึงถึงภาษีและกฎระเบียบที่เชื่อมโยงกับจีน" }
    ],
    approachEyebrow: "วิธีการทำงาน",
    approachTitle: "บริหารเป็นโครงการเดียว ไม่ใช่ชุดขั้นตอนที่แยกออกจากกัน",
    approachText: "เราเริ่มจากรูปแบบธุรกิจจริงและเป้าหมายของผู้ถือหุ้น จากนั้นจึงกำหนดโครงสร้าง เอกสาร กำหนดเวลา และภาระผูกพันในอนาคต ระยะเวลาและค่าใช้จ่ายขึ้นอยู่กับแต่ละโครงการ เพราะเมือง อุตสาหกรรม เอกสาร และใบอนุญาตอาจเปลี่ยนกระบวนการได้",
    steps: [
      { title: "ประเมิน", text: "ทำความเข้าใจกิจกรรม ผู้ถือหุ้น เมืองเป้าหมาย แผนบุคลากร รายได้ และกรอบเวลา" },
      { title: "วางแผน", text: "กำหนดโครงสร้าง ขอบเขตธุรกิจ เอกสาร ใบอนุญาต และข้อกำหนดด้านบัญชีและภาษี" },
      { title: "ดำเนินการ", text: "ประสานคำขอ การจดทะเบียน และการสื่อสารกับหน่วยงาน ธนาคาร และผู้เกี่ยวข้อง" },
      { title: "การดำเนินงาน", text: "จัดระบบบัญชี ปฏิทินภาษี บุคลากร การต่ออายุ และการปฏิบัติตามกฎประจำปี" }
    ],
    whyTitle: "เหตุผลที่บริษัทต่างชาติร่วมงานกับ ZYS",
    reasons: ["การดำเนินงานในจีนพร้อมการสื่อสารที่ชัดเจนสำหรับทีมระหว่างประเทศ", "จุดประสานงานเดียวสำหรับการจดทะเบียน บัญชี ภาษี ใบอนุญาต และวีซ่า", "อธิบายขอบเขต สมมติฐาน และหน้าที่ของลูกค้าก่อนเริ่มงาน", "คำแนะนำตามความเป็นจริงโดยไม่รับประกันการอนุมัติหรือระยะเวลาเกินจริง"],
    faqTitle: "คำถามที่พบบ่อยเกี่ยวกับการจัดตั้งบริษัทในจีน",
    faqs: [
      { question: "ชาวต่างชาติสามารถจัดตั้งบริษัทในจีนได้หรือไม่?", answer: "ในหลายอุตสาหกรรมสามารถจัดตั้งบริษัทที่ต่างชาติถือหุ้นทั้งหมดได้ แต่โครงสร้างที่เหมาะสมขึ้นอยู่กับกิจกรรม นักลงทุน สถานที่ รายการข้อจำกัด และใบอนุญาตเฉพาะ" },
      { question: "การจดทะเบียนใช้เวลานานเท่าใด?", answer: "ไม่มีระยะเวลามาตรฐานที่รับประกันได้ เมือง ขอบเขตธุรกิจ ที่อยู่จดทะเบียน การรับรองเอกสารผู้ถือหุ้น ใบอนุญาต และการตรวจสอบของธนาคารล้วนมีผลต่อกำหนดเวลา" },
      { question: "ต้องเริ่มทำบัญชีทันทีหลังจดทะเบียนหรือไม่?", answer: "หลังจดทะเบียนควรจัดการขึ้นทะเบียนภาษี การบันทึกบัญชี ระบบ fapiao และปฏิทินการยื่นแบบโดยเร็ว แม้กิจกรรมในช่วงแรกจะยังมีไม่มาก" },
      { question: "ZYS ให้บริการหลังได้รับใบอนุญาตประกอบธุรกิจหรือไม่?", answer: "ให้บริการ ตามขอบเขตงาน เราสามารถสนับสนุนการขึ้นทะเบียนภาษี บัญชี เงินเดือน ใบอนุญาตทำงาน ใบอนุญาตเฉพาะ การปฏิบัติตามกฎประจำปี และการเปลี่ยนแปลงบริษัท" }
    ],
    finalTitle: "กำลังวางแผนเข้าสู่ตลาดจีนหรือบริหารบริษัทที่มีอยู่แล้ว?",
    finalText: "แจ้งรูปแบบธุรกิจ โครงสร้างผู้ถือหุ้น เมืองเป้าหมาย และกรอบเวลาให้เรา เราจะอธิบายขั้นตอนถัดไปและเอกสารที่ควรเตรียมก่อน",
    contactCta: "พูดคุยเกี่ยวกับโครงการ"
  },
  id: {
    htmlLang: "id",
    locale: "id_ID",
    languageName: "Bahasa Indonesia",
    seoTitle: "Pendirian perusahaan di Tiongkok, akuntansi dan pajak | ZYS Advisory",
    metaDescription: "Dukungan bagi investor asing untuk mendirikan perusahaan dan WFOE di Tiongkok, akuntansi, pajak, perizinan, visa dan izin kerja.",
    keywords: ["mendirikan perusahaan di Tiongkok", "registrasi WFOE Tiongkok", "akuntansi Tiongkok", "pajak Tiongkok", "izin kerja Tiongkok", "investasi di Tiongkok"],
    eyebrow: "Konsultasi bisnis dan pajak di Tiongkok",
    title: "Mitra Anda untuk mendirikan dan menjalankan perusahaan di Tiongkok",
    introduction: "ZYS Advisory membantu investor asing, perusahaan internasional, dan tim manajemen mendirikan serta mengoperasikan perusahaan di Tiongkok. Kami mengoordinasikan registrasi, akuntansi, pajak, perizinan, izin kerja, dan kepatuhan berkelanjutan dalam satu rencana pelaksanaan yang terintegrasi.",
    primaryCta: "Minta konsultasi",
    secondaryCta: "Lihat layanan",
    trustPoints: ["Komunikasi langsung dalam bahasa Inggris dan Mandarin", "Daftar dokumen, tanggung jawab, dan langkah berikutnya yang jelas", "Dukungan dari pendirian hingga kepatuhan berkala"],
    servicesEyebrow: "Layanan bisnis di Tiongkok",
    servicesTitle: "Dukungan praktis sepanjang siklus hidup perusahaan",
    servicesIntro: "Pendirian hanyalah tahap awal. Struktur, ruang lingkup usaha, modal, alamat terdaftar, pajak, tenaga kerja, dan proses keuangan perlu direncanakan secara terpadu.",
    services: [
      { title: "Pendirian perusahaan dan WFOE", text: "Peninjauan struktur, dokumen pemegang saham, ruang lingkup usaha, registrasi, izin usaha, dan koordinasi pekerjaan setelah pendirian." },
      { title: "Akuntansi dan pelaporan", text: "Pembukuan bulanan, pemeriksaan dokumen, rekonsiliasi, laporan keuangan, dan arsip teratur untuk manajemen, pajak, dan audit." },
      { title: "Pajak dan pelaporan berkala", text: "Dukungan terkait VAT, pajak penghasilan badan, pemotongan pajak, pajak individu, fapiao, dan komunikasi dengan otoritas pajak." },
      { title: "Izin kerja dan izin tinggal", text: "Perencanaan dan koordinasi dokumen bagi pendiri, eksekutif, karyawan asing, dan anggota keluarga yang memenuhi syarat." },
      { title: "Perizinan dan koordinasi hukum", text: "Penilaian kegiatan yang diatur, permohonan, perubahan dan perpanjangan izin, tata kelola, serta koordinasi dengan penasihat hukum khusus." },
      { title: "Ekspansi internasional", text: "Perencanaan struktur di Hong Kong, Singapura, Amerika Serikat, dan Dubai dengan mempertimbangkan aspek pajak dan regulasi yang terkait dengan Tiongkok." }
    ],
    approachEyebrow: "Cara kami bekerja",
    approachTitle: "Satu proses terkoordinasi, bukan rangkaian tugas terpisah",
    approachText: "Kami memulai dari model bisnis nyata dan tujuan pemegang saham. Setelah itu kami menentukan struktur, dokumen, jadwal, dan kewajiban berikutnya. Waktu dan biaya bergantung pada setiap proyek karena kota, industri, dokumen, dan izin dapat mengubah proses.",
    steps: [
      { title: "Penilaian", text: "Memahami kegiatan, pemegang saham, kota tujuan, rencana tenaga kerja, aliran pendapatan, dan jadwal." },
      { title: "Perencanaan", text: "Menentukan struktur, ruang lingkup usaha, dokumen, izin, serta kebutuhan akuntansi dan pajak." },
      { title: "Pelaksanaan", text: "Mengoordinasikan permohonan, registrasi, dan komunikasi dengan otoritas, bank, serta pihak terkait." },
      { title: "Operasional", text: "Mengatur akuntansi, kalender pajak, tenaga kerja, perpanjangan, dan kepatuhan tahunan." }
    ],
    whyTitle: "Mengapa perusahaan internasional bekerja sama dengan ZYS",
    reasons: ["Pelaksanaan lokal di Tiongkok dengan komunikasi yang jelas bagi tim internasional", "Satu titik koordinasi untuk registrasi, akuntansi, pajak, izin, dan visa", "Ruang lingkup, asumsi, dan tanggung jawab dijelaskan sebelum pekerjaan dimulai", "Saran praktis tanpa janji persetujuan atau waktu yang tidak berdasar"],
    faqTitle: "Pertanyaan umum tentang pendirian perusahaan di Tiongkok",
    faqs: [
      { question: "Apakah orang asing dapat mendirikan perusahaan di Tiongkok?", answer: "Di banyak sektor, perusahaan yang sepenuhnya dimiliki investor asing dapat didirikan. Struktur yang sesuai tetap bergantung pada kegiatan, investor, lokasi, daftar negatif, dan izin khusus." },
      { question: "Berapa lama proses registrasi?", answer: "Tidak ada waktu tunggal yang dapat dijamin. Kota, ruang lingkup usaha, alamat terdaftar, legalisasi dokumen, izin, dan pemeriksaan bank memengaruhi jadwal." },
      { question: "Apakah akuntansi diperlukan segera setelah pendirian?", answer: "Setelah registrasi, perusahaan sebaiknya segera mengatur registrasi pajak, pembukuan, proses fapiao, dan kalender pelaporan meskipun kegiatan awal masih terbatas." },
      { question: "Apakah ZYS mendukung perusahaan setelah izin usaha terbit?", answer: "Ya. Sesuai ruang lingkup layanan, kami mendukung registrasi pajak, akuntansi, koordinasi penggajian, izin kerja, perizinan, kewajiban tahunan, dan perubahan perusahaan." }
    ],
    finalTitle: "Sedang merencanakan masuk ke Tiongkok atau mengelola perusahaan yang sudah ada?",
    finalText: "Sampaikan model bisnis, struktur pemegang saham, kota tujuan, dan jadwal Anda. Kami akan menjelaskan langkah berikutnya dan dokumen yang perlu disiapkan terlebih dahulu.",
    contactCta: "Diskusikan proyek Anda"
  },
  ar: {
    htmlLang: "ar",
    direction: "rtl",
    locale: "ar_AE",
    languageName: "العربية",
    seoTitle: "تأسيس شركة في الصين والمحاسبة والضرائب | ZYS Advisory",
    metaDescription: "دعم المستثمرين الأجانب في تأسيس الشركات وWFOE في الصين، والمحاسبة والضرائب والتراخيص وتأشيرات العمل وتصاريح الإقامة.",
    keywords: ["تأسيس شركة في الصين", "تسجيل WFOE في الصين", "المحاسبة في الصين", "الضرائب في الصين", "تصريح العمل في الصين", "الاستثمار في الصين"],
    eyebrow: "استشارات الأعمال والضرائب في الصين",
    title: "شريكك لتأسيس وتشغيل شركة في الصين",
    introduction: "تدعم ZYS Advisory المستثمرين الأجانب والشركات الدولية وفرق الإدارة في تأسيس الشركات وتشغيلها في الصين. ننسق تسجيل الشركة والمحاسبة والضرائب والتراخيص وتصاريح العمل والامتثال المستمر ضمن خطة تنفيذ مترابطة وواضحة.",
    primaryCta: "اطلب استشارة",
    secondaryCta: "استعرض الخدمات",
    trustPoints: ["تواصل مباشر باللغتين الإنجليزية والصينية", "قوائم واضحة للمستندات والمسؤوليات والخطوات التالية", "دعم من مرحلة التأسيس إلى الامتثال الدوري"],
    servicesEyebrow: "خدمات الأعمال في الصين",
    servicesTitle: "دعم عملي خلال دورة حياة الشركة كاملة",
    servicesIntro: "التأسيس هو الخطوة الأولى فقط. يجب تنسيق الهيكل والنشاط ورأس المال والعنوان المسجل والضرائب والموظفين والإجراءات المالية منذ البداية.",
    services: [
      { title: "تأسيس الشركة وتسجيل WFOE", text: "مراجعة الهيكل ومستندات المساهمين ونطاق النشاط والتسجيل والرخصة التجارية وتنسيق الإجراءات اللاحقة للتأسيس." },
      { title: "المحاسبة والتقارير المالية", text: "مسك الدفاتر شهرياً ومراجعة المستندات والمطابقات والقوائم المالية وتنظيم الملفات للإدارة والضرائب والتدقيق." },
      { title: "الضرائب والإقرارات", text: "دعم ضريبة القيمة المضافة وضريبة دخل الشركات والاستقطاع وضريبة الأفراد والفواتير والتواصل مع الجهات الضريبية." },
      { title: "تصاريح العمل والإقامة", text: "تخطيط وتنسيق المستندات للمؤسسين والمديرين والموظفين الأجانب وأفراد الأسرة المؤهلين." },
      { title: "التراخيص والتنسيق القانوني", text: "تقييم الأنشطة المنظمة وطلبات التراخيص وتعديلها وتجديدها والحوكمة والتنسيق مع المستشارين القانونيين المتخصصين." },
      { title: "التوسع الدولي", text: "تخطيط هياكل الشركات في هونغ كونغ وسنغافورة والولايات المتحدة ودبي مع مراعاة الجوانب الضريبية والتنظيمية المرتبطة بالصين." }
    ],
    approachEyebrow: "آلية عملنا",
    approachTitle: "مشروع منسق بدلاً من إجراءات منفصلة",
    approachText: "نبدأ بنموذج العمل الفعلي وأهداف المساهمين، ثم نحدد الهيكل والمستندات والجدول الزمني والالتزامات المستقبلية. تختلف المدة والتكلفة حسب المشروع لأن المدينة والقطاع والمستندات والتراخيص قد تغير مسار التنفيذ.",
    steps: [
      { title: "التقييم", text: "فهم النشاط والمساهمين والمدينة المستهدفة وخطة التوظيف ونموذج الإيرادات والجدول الزمني." },
      { title: "التخطيط", text: "تحديد الهيكل ونطاق النشاط والمستندات والتراخيص ومتطلبات المحاسبة والضرائب." },
      { title: "التنفيذ", text: "تنسيق الطلبات والتسجيلات والتواصل مع الجهات الحكومية والبنوك والأطراف الأخرى." },
      { title: "التشغيل", text: "تنظيم المحاسبة والتقويم الضريبي والموظفين والتجديدات والامتثال السنوي." }
    ],
    whyTitle: "لماذا تتعاون الشركات الدولية مع ZYS",
    reasons: ["تنفيذ محلي في الصين مع تواصل واضح لفرق الإدارة الدولية", "جهة تنسيق واحدة للتسجيل والمحاسبة والضرائب والتراخيص والتأشيرات", "شرح نطاق العمل والافتراضات ومسؤوليات العميل قبل البدء", "استشارات عملية دون وعود غير واقعية بالموافقة أو المدة"],
    faqTitle: "أسئلة شائعة حول تأسيس شركة في الصين",
    faqs: [
      { question: "هل يستطيع المستثمر الأجنبي تأسيس شركة في الصين؟", answer: "يمكن في قطاعات عديدة تأسيس شركة مملوكة بالكامل لمستثمرين أجانب. يعتمد الهيكل المناسب على النشاط والمستثمرين والموقع والقائمة السلبية والتراخيص الخاصة." },
      { question: "كم تستغرق عملية التسجيل؟", answer: "لا توجد مدة موحدة مضمونة. تؤثر المدينة ونطاق النشاط والعنوان المسجل وتصديق مستندات المساهمين والتراخيص ومراجعة البنك على الجدول الزمني." },
      { question: "هل تحتاج الشركة إلى المحاسبة فور التأسيس؟", answer: "بعد التسجيل ينبغي تنظيم التسجيل الضريبي ومسك الدفاتر والفواتير وجدول الإقرارات مبكراً، حتى إذا كان النشاط في بدايته محدوداً." },
      { question: "هل تقدم ZYS الدعم بعد إصدار الرخصة التجارية؟", answer: "نعم. حسب نطاق التكليف، ندعم التسجيل الضريبي والمحاسبة وتنسيق الرواتب وتصاريح العمل والتراخيص والالتزامات السنوية وتغييرات الشركة." }
    ],
    finalTitle: "هل تخطط لدخول السوق الصينية أو تدير شركة قائمة؟",
    finalText: "شارك معنا نموذج العمل وهيكل المساهمين والمدينة المستهدفة والجدول الزمني. سنوضح الخطوات العملية التالية والمستندات التي ينبغي إعدادها أولاً.",
    contactCta: "ناقش مشروعك معنا"
  },
  ja: {
    htmlLang: "ja",
    locale: "ja_JP",
    languageName: "日本語",
    seoTitle: "中国会社設立・会計・税務・就労許可サポート | ZYS Advisory",
    metaDescription: "外国企業向けの中国会社設立、WFOE登記、記帳・会計、税務申告、営業許可、就労許可・居留許可を一体的に支援します。",
    keywords: ["中国会社設立", "中国WFOE設立", "中国会計", "中国税務", "中国就労許可", "中国進出支援"],
    eyebrow: "海外企業向け中国ビジネスアドバイザリー",
    title: "中国での会社設立と継続的なコンプライアンスを支援します",
    introduction: "ZYS Advisoryは、海外投資家、中小企業、国際的な経営チームに対し、中国法人の設立から運営までを支援します。会社登記、会計、税務、許認可、就労許可、日常的なコンプライアンスを一つの実行計画として調整します。",
    primaryCta: "相談を申し込む",
    secondaryCta: "サービスを見る",
    trustPoints: ["英語・中国語による直接コミュニケーション", "必要書類、担当範囲、次の手順を明確に提示", "設立後の会計・税務・許認可まで継続支援"],
    servicesEyebrow: "中国ビジネスサービス",
    servicesTitle: "会社のライフサイクル全体を見据えた実務支援",
    servicesIntro: "会社設立は最初の一歩にすぎません。事業範囲、資本金、登記住所、税務、雇用、経理体制を初期段階から整合させることが重要です。",
    services: [
      { title: "会社設立・WFOE登記", text: "投資形態の確認、株主書類、事業範囲、登記申請、営業許可証、設立後の手続を一貫して調整します。" },
      { title: "記帳・会計・財務報告", text: "月次記帳、証憑確認、銀行照合、財務諸表、経営報告および監査に備えた資料管理を支援します。" },
      { title: "税務登録・申告", text: "増値税、企業所得税、源泉税、個人所得税、発票管理、税務当局との連絡に関する実務を支援します。" },
      { title: "就労許可・居留許可", text: "外国人創業者、役員、従業員および要件を満たす家族の申請計画と書類準備を調整します。" },
      { title: "許認可・法務調整", text: "規制業種の確認、許可申請・更新・変更、ガバナンス、契約や専門法律事務所との連携を支援します。" },
      { title: "海外法人設立", text: "香港、シンガポール、米国、ドバイでの法人設立を、中国に関連する税務・管理上の論点と合わせて検討します。" }
    ],
    approachEyebrow: "支援の進め方",
    approachTitle: "個別手続ではなく、相互に関連する工程として管理します",
    approachText: "実際の事業モデルと株主の目的を確認したうえで、組織形態、必要書類、スケジュール、設立後の義務を整理します。都市、業種、書類、許認可によって工程が変わるため、固定的な承認期限や結果は保証しません。",
    steps: [
      { title: "ヒアリング", text: "事業内容、株主、進出都市、採用計画、収益モデル、希望時期を確認します。" },
      { title: "設計", text: "組織形態、事業範囲、書類、許認可、会計・税務体制を整理します。" },
      { title: "実行", text: "申請、登記、当局・銀行・関係者との連絡を調整します。" },
      { title: "継続管理", text: "月次会計、税務カレンダー、人事、更新、年次コンプライアンスを支援します。" }
    ],
    whyTitle: "海外企業がZYSを選ぶ理由",
    reasons: ["中国現地での実行力と国際チーム向けの明確な説明", "登記、会計、税務、許認可、ビザを横断する窓口", "業務範囲、前提条件、顧客側の役割を開始前に明確化", "根拠のない承認保証を行わない実務的なアドバイス"],
    faqTitle: "中国会社設立に関するよくある質問",
    faqs: [
      { question: "外国投資家は中国で会社を設立できますか？", answer: "多くの業種では外資100％の会社を設立できます。ただし、事業内容、投資家、地域、外商投資ネガティブリスト、個別許認可を確認する必要があります。" },
      { question: "会社設立にはどのくらい時間がかかりますか？", answer: "一律の保証期間はありません。都市、事業範囲、登記住所、株主書類の認証、許認可、銀行審査などによって変わります。" },
      { question: "設立直後から会計・税務対応が必要ですか？", answer: "登記後は、売上が少ない場合でも、税務登録、記帳、発票管理、申告スケジュールを早期に整えることが重要です。" },
      { question: "営業許可証取得後も支援できますか？", answer: "はい。契約内容に応じて、税務登録、会計、給与計算の調整、就労許可、許認可、年次手続、会社変更を支援します。" }
    ],
    finalTitle: "中国進出または既存中国法人の運営をご検討ですか？",
    finalText: "事業内容、株主構成、進出都市、希望時期をお知らせください。必要な次の手順と、最初に準備すべき書類をご案内します。",
    contactCta: "プロジェクトを相談する"
  },
  ko: {
    htmlLang: "ko",
    locale: "ko_KR",
    languageName: "한국어",
    seoTitle: "중국 법인 설립·회계·세무·취업허가 지원 | ZYS Advisory",
    metaDescription: "외국인 투자자를 위한 중국 법인 설립, WFOE 등록, 회계·세무 신고, 영업허가, 취업허가 및 거류허가 서비스를 제공합니다.",
    keywords: ["중국 법인 설립", "중국 WFOE 등록", "중국 회계", "중국 세무", "중국 취업허가", "중국 진출 컨설팅"],
    eyebrow: "글로벌 기업을 위한 중국 비즈니스 자문",
    title: "중국 법인 설립부터 운영 컴플라이언스까지 함께합니다",
    introduction: "ZYS Advisory는 외국인 투자자, 해외 중소기업 및 글로벌 경영진이 중국 법인을 설립하고 안정적으로 운영할 수 있도록 지원합니다. 법인 등록, 회계, 세무, 인허가, 취업허가와 지속적인 컴플라이언스를 하나의 실행 계획으로 조율합니다.",
    primaryCta: "상담 신청",
    secondaryCta: "서비스 보기",
    trustPoints: ["영어와 중국어로 직접 소통", "필요 서류, 역할 및 다음 단계를 명확히 안내", "설립 이후 회계·세무·인허가까지 지속 지원"],
    servicesEyebrow: "중국 비즈니스 서비스",
    servicesTitle: "기업의 전체 라이프사이클을 고려한 실무 지원",
    servicesIntro: "법인 설립은 시작에 불과합니다. 사업 범위, 등록자본, 등록주소, 세무, 인력 및 재무 프로세스를 초기부터 함께 설계해야 합니다.",
    services: [
      { title: "법인 설립 및 WFOE 등록", text: "투자 구조 검토, 주주 서류, 사업 범위, 설립 신청, 영업집조 및 설립 후 후속 업무를 조율합니다." },
      { title: "회계·기장·재무보고", text: "월별 기장, 증빙 검토, 계정 조정, 재무제표 및 경영진·세무·감사를 위한 자료 관리를 지원합니다." },
      { title: "세무 등록 및 신고", text: "증치세, 기업소득세, 원천징수, 개인소득세, 발票 관리 및 세무기관 커뮤니케이션을 지원합니다." },
      { title: "취업허가 및 거류허가", text: "외국인 창업자, 임원, 직원과 요건을 충족하는 가족을 위한 신청 계획 및 서류 준비를 조율합니다." },
      { title: "인허가 및 법무 조율", text: "규제 업종 검토, 허가 신청·변경·갱신, 기업 지배구조 및 전문 법률 자문 연계를 지원합니다." },
      { title: "해외 법인 설립", text: "홍콩, 싱가포르, 미국, 두바이 법인 설립을 중국 관련 세무 및 컴플라이언스 이슈와 함께 검토합니다." }
    ],
    approachEyebrow: "업무 방식",
    approachTitle: "개별 절차가 아니라 연결된 프로젝트로 관리합니다",
    approachText: "실제 사업 모델과 주주의 목표를 먼저 확인한 후 구조, 필요 서류, 일정 및 설립 후 의무를 정리합니다. 도시, 업종, 문서 및 인허가에 따라 절차가 달라지므로 획일적인 승인 기간이나 결과를 보장하지 않습니다.",
    steps: [
      { title: "진단", text: "사업 내용, 주주, 진출 도시, 채용 계획, 수익 구조 및 목표 일정을 확인합니다." },
      { title: "설계", text: "법인 구조, 사업 범위, 서류, 인허가, 회계 및 세무 체계를 정리합니다." },
      { title: "실행", text: "신청, 등록, 정부기관·은행·관련 기관과의 커뮤니케이션을 조율합니다." },
      { title: "운영", text: "월별 회계, 세무 일정, 인사, 갱신 및 연간 컴플라이언스를 지원합니다." }
    ],
    whyTitle: "글로벌 기업이 ZYS와 협력하는 이유",
    reasons: ["중국 현지 실행력과 글로벌 의사결정자를 위한 명확한 설명", "등록, 회계, 세무, 인허가, 비자를 연결하는 단일 조율 창구", "업무 범위, 전제조건 및 고객 책임을 시작 전에 명확히 안내", "근거 없는 승인 또는 일정 보장 없이 실무 중심으로 자문"],
    faqTitle: "중국 법인 설립 자주 묻는 질문",
    faqs: [
      { question: "외국인이 중국에 회사를 설립할 수 있나요?", answer: "많은 업종에서 외국인 100% 소유 법인 설립이 가능합니다. 다만 사업 활동, 투자자, 지역, 외상투자 네거티브리스트 및 별도 인허가를 검토해야 합니다." },
      { question: "중국 법인 설립 기간은 얼마나 걸리나요?", answer: "일률적인 보장 기간은 없습니다. 도시, 사업 범위, 등록주소, 주주 서류 인증, 인허가 및 은행 심사에 따라 달라집니다." },
      { question: "설립 직후부터 회계와 세무 신고가 필요한가요?", answer: "등록 후에는 매출이 많지 않더라도 세무 등록, 기장, 발票 프로세스 및 신고 일정을 조기에 구축하는 것이 중요합니다." },
      { question: "영업집조 발급 이후에도 지원하나요?", answer: "네. 계약 범위에 따라 세무 등록, 회계, 급여 조율, 취업허가, 인허가, 연간 의무 및 법인 변경 업무를 지원합니다." }
    ],
    finalTitle: "중국 진출 또는 기존 중국 법인 운영을 준비하고 계신가요?",
    finalText: "사업 모델, 주주 구조, 진출 도시와 목표 일정을 알려주시면 합리적인 다음 단계와 우선 준비 서류를 안내해 드립니다.",
    contactCta: "프로젝트 상담"
  }
};

export function isInternationalLocale(value: string): value is InternationalLocale {
  return internationalLocales.includes(value as InternationalLocale);
}
