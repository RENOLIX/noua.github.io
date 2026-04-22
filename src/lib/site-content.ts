export type Locale = "fr" | "en" | "ar" | "ru";
export type Direction = "ltr" | "rtl";

export type LanguageOption = {
  value: Locale;
  label: string;
  dir: Direction;
};

type NavLink = {
  label: string;
  href: string;
};

type GalleryText = {
  alt: string;
  title: string;
};

type GalleryItem = GalleryText & {
  src: string;
};

type PoleText = {
  title: string;
  tag: string;
  points: string[];
};

type PoleItem = PoleText & {
  image: string;
};

type InfoCard = {
  title: string;
  text: string;
};

type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

type StatItem = {
  value: string;
  label: string;
};

type LocaleDefinition = {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: {
    links: NavLink[];
    cta: string;
    languageLabel: string;
    brandSubline: string;
  };
  hero: {
    locationLabel: string;
    titleSuffix: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    scrollLabel: string;
  };
  intro: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    additionalText: string;
    cardDescription: string;
    button: string;
  };
  categories: {
    eyebrow: string;
    heading: string;
    description: string;
    moreTitle: string;
    moreDescription: string;
  };
  whyUs: {
    eyebrow: string;
    heading: string;
    paragraphOne: string;
    paragraphTwo: string;
    brandTagline: string;
  };
  testimonials: {
    eyebrow: string;
    heading: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    directorEyebrow: string;
    directorDescription: string;
    formEyebrow: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    phoneLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    requiredError: string;
    genericError: string;
    success: string;
    subject: string;
  };
  footer: {
    description: string;
    mapLink: string;
    polesHeading: string;
    companyHeading: string;
    contactHeading: string;
    readMore: string;
    legalPrivacy: string;
    legalNotice: string;
    legalTerms: string;
    copyrightSuffix: string;
    links: NavLink[];
  };
  aboutPage: {
    eyebrow: string;
    heading: string;
    mapLink: string;
    galleryEyebrow: string;
    galleryHeading: string;
    capabilitiesEyebrow: string;
    capabilitiesHeading: string;
    commitmentsEyebrow: string;
    commitmentsHeading: string;
    advantagesEyebrow: string;
    advantagesHeading: string;
    phoneLabel: string;
    emailLabel: string;
  };
  notFound: {
    eyebrow: string;
    heading: string;
    description: string;
    cta: string;
  };
  president: {
    name: string;
    title: string;
    summary: string;
  };
  aboutPreview: string;
  aboutParagraphs: string[];
  aboutGalleryTexts: GalleryText[];
  poles: PoleText[];
  competitiveAdvantages: InfoCard[];
  exportCommitments: InfoCard[];
  tradeCapabilities: string[];
  companyHighlights: string[];
  statItems: StatItem[];
  contactItemLabels: {
    headquarters: string;
    president: string;
    phone: string;
    email: string;
  };
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: LocaleDefinition["nav"];
  hero: LocaleDefinition["hero"];
  intro: LocaleDefinition["intro"];
  categories: LocaleDefinition["categories"];
  whyUs: LocaleDefinition["whyUs"];
  testimonials: LocaleDefinition["testimonials"];
  contact: LocaleDefinition["contact"];
  footer: LocaleDefinition["footer"];
  aboutPage: LocaleDefinition["aboutPage"];
  notFound: LocaleDefinition["notFound"];
  locationUrl: string;
  contactPhone: string;
  contactEmail: string;
  president: LocaleDefinition["president"];
  aboutPreview: string;
  aboutParagraphs: string[];
  aboutGallery: GalleryItem[];
  excellencePoles: PoleItem[];
  competitiveAdvantages: InfoCard[];
  exportCommitments: InfoCard[];
  tradeCapabilities: string[];
  contactItems: ContactItem[];
  companyHighlights: string[];
  statItems: StatItem[];
};

export const defaultLocale: Locale = "fr";

export const languageOptions: readonly LanguageOption[] = [
  { value: "fr", label: "Français", dir: "ltr" },
  { value: "en", label: "English", dir: "ltr" },
  { value: "ar", label: "العربية", dir: "rtl" },
  { value: "ru", label: "Русский", dir: "ltr" },
] as const;

export const locationUrl = "https://www.google.com/maps/search/?api=1&query=Tiaret%2C+Algerie";
export const contactPhone = "+213671037103";
export const contactEmail = "nouaouriaexport@gmail.com";

const galleryImagePaths = [
  `${import.meta.env.BASE_URL}images/stock/hero-logistics.jpg`,
  `${import.meta.env.BASE_URL}images/stock/cement-construction.jpg`,
  `${import.meta.env.BASE_URL}images/stock/marble-tiles.jpg`,
  `${import.meta.env.BASE_URL}images/stock/workwear.jpg`,
  `${import.meta.env.BASE_URL}images/stock/drywall-wood.jpg`,
] as const;

const poleImagePaths = [
  `${import.meta.env.BASE_URL}images/stock/avicole-carne.jpg`,
  `${import.meta.env.BASE_URL}images/stock/fresh-fruits-vegetables.jpg`,
  `${import.meta.env.BASE_URL}images/stock/dairy-products.jpg`,
  `${import.meta.env.BASE_URL}images/stock/beverages-juice.jpg`,
  `${import.meta.env.BASE_URL}images/stock/biscuits-grocery.jpg`,
  `${import.meta.env.BASE_URL}images/stock/detergents-hygiene.jpg`,
  `${import.meta.env.BASE_URL}images/stock/cement-construction.jpg`,
  `${import.meta.env.BASE_URL}images/stock/marble-tiles.jpg`,
  `${import.meta.env.BASE_URL}images/stock/workwear.jpg`,
  `${import.meta.env.BASE_URL}images/stock/car-batteries.jpg`,
  `${import.meta.env.BASE_URL}images/stock/fashion-footwear.jpg`,
  `${import.meta.env.BASE_URL}images/stock/drywall-wood.jpg`,
] as const;

const POLE_COUNT = poleImagePaths.length;

const localeDefinitions: Record<Locale, LocaleDefinition> = {
  fr: {
    meta: {
      title: "Nouaouria Export | Hub export multi-secteurs",
      description:
        "Nouaouria Export, basée à Tiaret, développe une offre export multi-secteurs pour l'agroalimentaire, l'hygiène, la construction, les finitions et l'équipement.",
      ogLocale: "fr_DZ",
    },
    nav: {
      links: [
        { label: "Accueil", href: "#home" },
        { label: "Nos pôles", href: "#products" },
        { label: "À propos", href: "/about" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Contact commercial",
      languageLabel: "Langue",
      brandSubline: "Export - Tiaret",
    },
    hero: {
      locationLabel: "Tiaret, Algérie",
      titleSuffix: "Multi-secteurs",
      description:
        "Depuis Tiaret, nous développons une offre export complète autour de l'agroalimentaire, de l'hygiène, de la construction, des finitions, des équipements professionnels, du textile, de la chaussure et des batteries automobile.",
      primaryCta: "Découvrir nos pôles",
      secondaryCta: "Lire plus",
      scrollLabel: "Défiler",
    },
    intro: {
      eyebrow: "À propos de nous",
      titleStart: "Votre partenaire",
      titleAccent: "export multi-secteurs",
      titleEnd: "depuis Tiaret",
      additionalText:
        "Sous l'impulsion de Mr Nouaouria, nous structurons une offre export lisible, sérieuse et modulable pour les distributeurs, importateurs, acheteurs projets et partenaires internationaux.",
      cardDescription:
        "Direction stratégique de la société et pilotage des opérations commerciales multi-secteurs.",
      button: "Lire plus",
    },
    categories: {
      eyebrow: `Nos ${POLE_COUNT} pôles d'excellence`,
      heading: "Une offre export complète",
      description:
        "Agroalimentaire, hygiène, matériaux, finitions, workwear, automobile, mode et aménagement : nous consolidons plusieurs univers produits dans une même stratégie d'exportation.",
      moreTitle: "Vous voulez autre chose ?",
      moreDescription:
        "Contactez-nous pour une demande sur mesure, un autre produit ou un devis personnalisé.",
    },
    whyUs: {
      eyebrow: "Nos avantages compétitifs",
      heading: "Un partenaire fiable pour vos achats",
      paragraphOne:
        "Basée à Tiaret, Nouaouria Export combine lecture commerciale, coordination logistique et souplesse produit pour servir des marchés variés avec une exécution claire.",
      paragraphTwo:
        "Notre approche repose sur la consolidation multi-secteurs, la préparation export et une relation B2B simple à piloter, même lorsque les besoins couvrent plusieurs familles de produits.",
      brandTagline: "Tiaret, Algérie - Export multi-secteurs",
    },
    testimonials: {
      eyebrow: "Engagements logistiques et commerciaux",
      heading: "Une organisation au service de l'export",
    },
    contact: {
      eyebrow: "Contact commercial",
      heading: "Vous voulez autre chose ? Contactez-nous",
      description:
        "Vous cherchez un produit spécifique, plusieurs familles dans une même commande ou un approvisionnement B2B sur mesure ? Envoyez-nous votre demande et notre équipe commerciale vous répondra rapidement.",
      directorEyebrow: "Direction générale",
      directorDescription:
        "Pour les demandes de partenariat, de distribution ou de consolidation multi-produits, nous vous accompagnons de la préparation jusqu'à l'expédition.",
      formEyebrow: "Formulaire de demande",
      formTitle: "Parlez-nous de votre besoin",
      nameLabel: "Nom complet *",
      emailLabel: "Email *",
      companyLabel: "Société / Entreprise",
      phoneLabel: "Téléphone / WhatsApp",
      messageLabel: "Message *",
      namePlaceholder: "Ahmed Benali",
      companyPlaceholder: "Nom de votre entreprise",
      messagePlaceholder:
        "Décrivez les produits souhaités, les volumes, la destination, le type de chantier ou tout autre besoin spécifique...",
      submit: "Envoyer la demande",
      submitting: "Envoi en cours...",
      requiredError: "Veuillez remplir les champs obligatoires avant l'envoi.",
      genericError: "Une erreur est survenue pendant l'envoi du message.",
      success: "Demande envoyée avec succès. Nous revenons vers vous très vite.",
      subject: "Nouvelle demande commerciale - Nouaouria Export",
    },
    footer: {
      description:
        "Une base export multi-secteurs pour l'agroalimentaire, l'hygiène, la construction, l'aménagement, l'équipement, l'automobile et le textile.",
      mapLink: "Voir Nouaouria Export sur Google Maps",
      polesHeading: "Nos pôles",
      companyHeading: "Entreprise",
      contactHeading: "Contact commercial",
      readMore: "Lire plus",
      legalPrivacy: "Politique de confidentialité",
      legalNotice: "Mentions légales",
      legalTerms: "CGV",
      copyrightSuffix: "Nouaouria Export. Tous droits réservés.",
      links: [
        { label: "Accueil", href: "#home" },
        { label: "Nos pôles", href: "#products" },
        { label: "Avantages", href: "#advantages" },
        { label: "Contact", href: "#contact" },
      ],
    },
    aboutPage: {
      eyebrow: "À propos",
      heading: "Nouaouria Export, une base multi-secteurs au service de vos approvisionnements",
      mapLink: "Voir Nouaouria Export sur la carte",
      galleryEyebrow: "Galerie de la société",
      galleryHeading: "Nouaouria Export en images",
      capabilitiesEyebrow: "Nos capacités produit",
      capabilitiesHeading: "Une offre pensée pour les achats professionnels",
      commitmentsEyebrow: "Engagements",
      commitmentsHeading: "Logistique et exécution",
      advantagesEyebrow: "Avantages compétitifs",
      advantagesHeading: "Ce qui fait notre différence",
      phoneLabel: "Tél",
      emailLabel: "Email",
    },
    notFound: {
      eyebrow: "Erreur 404",
      heading: "Cette page n'existe pas.",
      description:
        "Revenez à l'accueil pour découvrir les produits et services de Nouaouria Export.",
      cta: "Retour à l'accueil",
    },
    president: {
      name: "Mr Nouaouria",
      title: "Président Directeur Général",
      summary:
        "À la tête de Nouaouria Export, Mr Nouaouria porte une vision claire : structurer depuis Tiaret une offre export multi-secteurs, sérieuse, lisible et adaptable aux besoins des importateurs, distributeurs et partenaires B2B.",
    },
    aboutPreview:
      "Basée à Tiaret, Nouaouria Export développe une offre diversifiée qui rassemble agroalimentaire, hygiène, construction, finitions, équipements de travail, textile, batteries et solutions d'aménagement pour les marchés professionnels.",
    aboutParagraphs: [
      "Nouaouria Export est une entreprise de négoce et d'export basée à Tiaret, spécialisée dans la mise en relation entre l'offre algérienne et les besoins concrets des acheteurs internationaux. Sous l'impulsion de Mr Nouaouria, la société construit une gamme multi-secteurs capable de répondre à des commandes variées, régulières et évolutives.",
      "Notre force réside dans une sélection pragmatique de familles de produits à forte demande : avicole, fruits et légumes, produits laitiers, boissons, épicerie, hygiène, mais aussi ciment, finitions, vêtements d'ouvrier, batteries automobile, textile mode, chaussures, placo plâtre et panneaux bois. Chaque pôle est pensé pour servir aussi bien le commerce de gros que les projets d'approvisionnement terrain.",
      "Depuis Tiaret, nous organisons la préparation commerciale, le conditionnement, la palettisation et la coordination logistique avec une approche orientée exécution. L'objectif est simple : offrir à nos partenaires une base export souple, professionnelle et capable de consolider plusieurs univers produits, de l'alimentaire au non-alimentaire, dans une même dynamique.",
    ],
    aboutGalleryTexts: [
      {
        alt: "Conteneurs logistiques prêts pour l'export",
        title: "Logistique export et consolidation",
      },
      {
        alt: "Matériaux de construction préparés pour l'export",
        title: "Construction et fournitures chantier",
      },
      {
        alt: "Sélection de marbre, faïence et dalles",
        title: "Marbre, faïence et dalles",
      },
      {
        alt: "Gammes de vêtements d'ouvrier et équipements terrain",
        title: "Vêtements d'ouvrier",
      },
      {
        alt: "Placo plâtre, panneaux et planches en bois",
        title: "Placo plâtre et planches en bois",
      },
    ],
    poles: [
      {
        title: "Pôle avicole & carne",
        tag: "Avicole",
        points: [
          "Poulet de chair : volailles entières ou découpes de précision.",
          "Œufs de consommation : fraîcheur garantie, mirage et calibrage aux normes.",
          "Charcuterie : produits transformés certifiés Halal (pâtés, saucissons, etc.).",
        ],
      },
      {
        title: "Pôle frais : fruits & légumes",
        tag: "Frais",
        points: [
          "Primeurs : tomates, poivrons, pommes de terre.",
          "Fruits : agrumes, dattes Deglet Nour de qualité supérieure, grenades.",
          "Conditionnement : emballages export garantissant la protection et l'aération des produits.",
        ],
      },
      {
        title: "Pôle produits laitiers",
        tag: "Laitier",
        points: [
          "Fromagerie : fromages fondus, pâtes pressées et spécialités locales.",
          "Lait & dérivés : lait UHT, yaourts et crèmes dessert longue conservation.",
        ],
      },
      {
        title: "Pôle boissons & jus",
        tag: "Boissons",
        points: [
          "Jus de fruits : nectars et jus 100 % naturels aux saveurs méditerranéennes.",
          "Boissons gazeuses : gammes variées de sodas et eaux minérales.",
        ],
      },
      {
        title: "Pôle biscuiterie & épicerie",
        tag: "Épicerie",
        points: [
          "Biscuiterie : gaufrettes, biscuits secs et fourrés.",
          "Confiserie : produits sucrés adaptés aux goûts internationaux.",
          "Épicerie sèche : références de base pour la distribution et la revente.",
        ],
      },
      {
        title: "Pôle détergents & hygiène",
        tag: "Hygiène",
        points: [
          "Détergents : lessives liquides et poudres pour usage domestique et professionnel.",
          "Produits ménagers : nettoyants multi-usages, javel et solutions d'entretien.",
          "Conditionnement export : formats adaptés à la distribution et aux commandes en volume.",
        ],
      },
      {
        title: "Pôle ciment & construction",
        tag: "Construction",
        points: [
          "Ciment, sacs et références pour chantiers de gros œuvre.",
          "Briques, acier et fournitures de base pour approvisionnement régulier.",
          "Conditionnement adapté aux commandes en lot, palette ou conteneur.",
        ],
      },
      {
        title: "Pôle marbre, faïence & dalles",
        tag: "Finition",
        points: [
          "Marbre décoratif et plaques pour projets résidentiels et commerciaux.",
          "Faïence murale et dalles de sol pour showrooms, chantiers et réseaux de distribution.",
          "Gammes sélectionnées selon l'esthétique, la résistance et le format demandé.",
        ],
      },
      {
        title: "Pôle vêtements d'ouvrier",
        tag: "Workwear",
        points: [
          "Tenues de travail, gilets, vestes et ensembles pour usage intensif.",
          "Équipements visibles et pratiques pour ateliers, logistique et chantier.",
          "Approvisionnement adapté aux entreprises, revendeurs et donneurs d'ordre.",
        ],
      },
      {
        title: "Pôle batteries automobile",
        tag: "Auto",
        points: [
          "Batteries de voiture pour usages quotidiens et professionnels.",
          "Solutions de démarrage et d'énergie pour réseaux de pièces auto et garages.",
          "Lots préparés pour grossistes, magasins spécialisés et distributeurs.",
        ],
      },
      {
        title: "Pôle chaussures & textile mode",
        tag: "Mode",
        points: [
          "Chaussures et textile homme pour distribution et commerce détail.",
          "Collections femme, basics, accessoires et références saisonnières.",
          "Sélection orientée volume, présentation retail et rotation commerciale.",
        ],
      },
      {
        title: "Pôle placo plâtre & panneaux bois",
        tag: "Aménagement",
        points: [
          "Placo plâtre pour cloisonnement, rénovation et finition intérieure.",
          "Panneaux, planches et supports bois pour ameublement et aménagement.",
          "Offre pensée pour les projets, les professionnels du bâtiment et la revente.",
        ],
      },
    ],
    competitiveAdvantages: [
      {
        title: "Offre multi-secteurs",
        text: "Une même structure commerciale pour sourcer plusieurs familles de produits dans un seul circuit.",
      },
      {
        title: "Sélection pragmatique",
        text: "Nous priorisons des références exportables, utiles au terrain et faciles à réapprovisionner.",
      },
      {
        title: "Préparation export",
        text: "Conditionnement, regroupement des lots et coordination documentaire avant expédition.",
      },
      {
        title: "Souplesse commerciale",
        text: "Possibilité d'adapter l'offre selon les volumes, la saison et le profil du client.",
      },
      {
        title: "Pilotage logistique",
        text: "Organisation des flux depuis Tiaret avec une vision claire des délais et des priorités.",
      },
      {
        title: "Partenariat B2B",
        text: "Approche orientée grossistes, importateurs, distributeurs et projets d'approvisionnement.",
      },
    ],
    exportCommitments: [
      {
        title: "Consolidation multi-produits",
        text: "Regrouper plusieurs pôles dans une même commande pour fluidifier les achats et simplifier l'expédition.",
      },
      {
        title: "Protection de la marchandise",
        text: "Préparation adaptée à la nature de chaque produit avec emballage, séparation et palettisation maîtrisés.",
      },
      {
        title: "Suivi commercial réactif",
        text: "Coordination continue entre la demande client, la préparation des lots et la mise en route logistique.",
      },
    ],
    tradeCapabilities: [
      "Agroalimentaire et produits d'hygiène : avicole, fruits et légumes, laitiers, boissons, épicerie et détergents permettent de répondre à des besoins de distribution rapide, de commerce de gros et de circuits marchands déjà établis.",
      "Matériaux et aménagement : ciment, finitions, marbre, faïence, placo plâtre et panneaux bois composent une base solide pour les projets de construction, de rénovation et de revente professionnelle.",
      "Équipement et distribution : vêtements d'ouvrier, batteries automobile, chaussures et textile mode ouvrent la porte à des circuits commerciaux différents, du point de vente spécialisé à l'approvisionnement B2B multi-catégories.",
    ],
    companyHighlights: [
      "Direction assurée par Mr Nouaouria",
      "Basée à Tiaret",
      "Export multi-secteurs structuré",
      "Approche B2B souple et réactive",
    ],
    statItems: [
      { value: `${POLE_COUNT}`, label: "Pôles d'excellence" },
      { value: "Tiaret", label: "Base opérationnelle" },
      { value: "B2B", label: "Orientation commerciale" },
      { value: "Sur mesure", label: "Réponse produit" },
    ],
    contactItemLabels: {
      headquarters: "Siège social",
      president: "Président Directeur Général",
      phone: "WhatsApp / Tél",
      email: "Email",
    },
  },
  en: {
    meta: {
      title: "Nouaouria Export | Multi-sector export hub",
      description:
        "Nouaouria Export, based in Tiaret, develops a multi-sector export offer covering food, hygiene, construction, finishing materials and equipment.",
      ogLocale: "en_US",
    },
    nav: {
      links: [
        { label: "Home", href: "#home" },
        { label: "Our divisions", href: "#products" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Sales contact",
      languageLabel: "Language",
      brandSubline: "Export - Tiaret",
    },
    hero: {
      locationLabel: "Tiaret, Algeria",
      titleSuffix: "Multi-sector",
      description:
        "From Tiaret, we build a complete export offer around food products, hygiene, construction, finishing materials, professional equipment, textiles, footwear and car batteries.",
      primaryCta: "Discover our divisions",
      secondaryCta: "Read more",
      scrollLabel: "Scroll",
    },
    intro: {
      eyebrow: "About us",
      titleStart: "Your",
      titleAccent: "multi-sector export partner",
      titleEnd: "from Tiaret",
      additionalText:
        "Under the leadership of Mr Nouaouria, we structure a clear, reliable and flexible export offer for distributors, importers, project buyers and international partners.",
      cardDescription:
        "Strategic leadership of the company and coordination of multi-sector commercial operations.",
      button: "Read more",
    },
    categories: {
      eyebrow: `${POLE_COUNT} excellence divisions`,
      heading: "A complete export offer",
      description:
        "Food, hygiene, materials, finishing solutions, workwear, automotive, fashion and interior products: we consolidate several product worlds into one export strategy.",
      moreTitle: "Looking for something else?",
      moreDescription:
        "Contact us for a tailored request, another product or a personalized quotation.",
    },
    whyUs: {
      eyebrow: "Our competitive advantages",
      heading: "A reliable partner for your sourcing",
      paragraphOne:
        "Based in Tiaret, Nouaouria Export combines commercial insight, logistics coordination and product flexibility to serve diverse markets with clear execution.",
      paragraphTwo:
        "Our approach is built on multi-sector consolidation, export preparation and an easy-to-manage B2B relationship, even when needs cover several product families.",
      brandTagline: "Tiaret, Algeria - Multi-sector export",
    },
    testimonials: {
      eyebrow: "Logistics and commercial commitments",
      heading: "An organization built for export",
    },
    contact: {
      eyebrow: "Sales contact",
      heading: "Need something else? Contact us",
      description:
        "Are you looking for a specific product, several product families in one shipment or a tailored B2B supply plan? Send us your request and our commercial team will reply quickly.",
      directorEyebrow: "General management",
      directorDescription:
        "For partnership, distribution or multi-product consolidation requests, we support you from preparation to shipment.",
      formEyebrow: "Request form",
      formTitle: "Tell us what you need",
      nameLabel: "Full name *",
      emailLabel: "Email *",
      companyLabel: "Company / Business",
      phoneLabel: "Phone / WhatsApp",
      messageLabel: "Message *",
      namePlaceholder: "Ahmed Benali",
      companyPlaceholder: "Your company name",
      messagePlaceholder:
        "Describe the products you need, volumes, destination, project type or any other requirement...",
      submit: "Send request",
      submitting: "Sending...",
      requiredError: "Please fill in the required fields before sending.",
      genericError: "An error occurred while sending your message.",
      success: "Your request has been sent successfully. We will get back to you very soon.",
      subject: "New business inquiry - Nouaouria Export",
    },
    footer: {
      description:
        "A multi-sector export base for food products, hygiene, construction, interior solutions, equipment, automotive and textiles.",
      mapLink: "View Nouaouria Export on Google Maps",
      polesHeading: "Our divisions",
      companyHeading: "Company",
      contactHeading: "Sales contact",
      readMore: "Read more",
      legalPrivacy: "Privacy policy",
      legalNotice: "Legal notice",
      legalTerms: "Terms & conditions",
      copyrightSuffix: "Nouaouria Export. All rights reserved.",
      links: [
        { label: "Home", href: "#home" },
        { label: "Divisions", href: "#products" },
        { label: "Advantages", href: "#advantages" },
        { label: "Contact", href: "#contact" },
      ],
    },
    aboutPage: {
      eyebrow: "About",
      heading: "Nouaouria Export, a multi-sector base serving your sourcing needs",
      mapLink: "View Nouaouria Export on the map",
      galleryEyebrow: "Company gallery",
      galleryHeading: "Nouaouria Export in pictures",
      capabilitiesEyebrow: "Our product capabilities",
      capabilitiesHeading: "An offer designed for professional purchasing",
      commitmentsEyebrow: "Commitments",
      commitmentsHeading: "Logistics and execution",
      advantagesEyebrow: "Competitive advantages",
      advantagesHeading: "What makes us different",
      phoneLabel: "Phone",
      emailLabel: "Email",
    },
    notFound: {
      eyebrow: "Error 404",
      heading: "This page does not exist.",
      description:
        "Go back to the homepage to discover Nouaouria Export products and services.",
      cta: "Back to home",
    },
    president: {
      name: "Mr Nouaouria",
      title: "Chairman & CEO",
      summary:
        "At the head of Nouaouria Export, Mr Nouaouria carries a clear vision: to structure from Tiaret a serious, readable and adaptable multi-sector export offer for importers, distributors and B2B partners.",
    },
    aboutPreview:
      "Based in Tiaret, Nouaouria Export develops a diversified offer bringing together food products, hygiene, construction, finishing materials, work equipment, textiles, batteries and fit-out solutions for professional markets.",
    aboutParagraphs: [
      "Nouaouria Export is a trading and export company based in Tiaret, specialized in connecting Algerian supply with the concrete needs of international buyers. Under the leadership of Mr Nouaouria, the company builds a multi-sector range capable of serving varied, recurring and evolving orders.",
      "Our strength lies in a pragmatic selection of high-demand product families: poultry, fruits and vegetables, dairy products, beverages, grocery, hygiene, but also cement, finishing materials, workwear, automotive batteries, fashion textiles, footwear, drywall and wood panels. Each division is designed to serve both wholesale trade and on-the-ground supply projects.",
      "From Tiaret, we organize commercial preparation, packaging, palletization and logistics coordination with an execution-driven approach. The goal is simple: to offer our partners a flexible, professional export base able to consolidate several product universes, from food to non-food, within the same business flow.",
    ],
    aboutGalleryTexts: [
      {
        alt: "Logistics containers ready for export",
        title: "Export logistics and consolidation",
      },
      {
        alt: "Construction materials prepared for export",
        title: "Construction and jobsite supplies",
      },
      {
        alt: "Selection of marble, tiles and slabs",
        title: "Marble, tiles and slabs",
      },
      {
        alt: "Workwear ranges and field equipment",
        title: "Workwear",
      },
      {
        alt: "Drywall, panels and wooden boards",
        title: "Drywall and wooden boards",
      },
    ],
    poles: [
      {
        title: "Poultry & meat division",
        tag: "Poultry",
        points: [
          "Broiler chicken: whole birds or precision cuts.",
          "Table eggs: guaranteed freshness, candling and grading to standards.",
          "Processed meats: Halal-certified products (pâtés, sausages, etc.).",
        ],
      },
      {
        title: "Fresh produce division: fruits & vegetables",
        tag: "Fresh",
        points: [
          "Market vegetables: tomatoes, peppers, potatoes.",
          "Fruits: citrus, premium Deglet Nour dates, pomegranates.",
          "Packaging: export packaging that protects and ventilates the products.",
        ],
      },
      {
        title: "Dairy products division",
        tag: "Dairy",
        points: [
          "Cheese making: processed cheeses, pressed cheeses and local specialties.",
          "Milk & dairy: UHT milk, yogurts and long-life dessert creams.",
        ],
      },
      {
        title: "Beverages & juices division",
        tag: "Beverages",
        points: [
          "Fruit juices: nectars and 100% natural juices with Mediterranean flavors.",
          "Carbonated drinks: varied ranges of sodas and mineral water.",
        ],
      },
      {
        title: "Biscuits & grocery division",
        tag: "Grocery",
        points: [
          "Biscuits: wafers, dry biscuits and filled biscuits.",
          "Confectionery: sweet products adapted to international tastes.",
          "Dry grocery: core references for distribution and resale.",
        ],
      },
      {
        title: "Detergents & hygiene division",
        tag: "Hygiene",
        points: [
          "Detergents: liquid and powder laundry solutions for home and professional use.",
          "Household products: multi-purpose cleaners, bleach and maintenance solutions.",
          "Export packaging: formats adapted to distribution and volume orders.",
        ],
      },
      {
        title: "Cement & construction division",
        tag: "Construction",
        points: [
          "Cement, bagged materials and references for structural worksites.",
          "Bricks, steel and core supplies for recurring procurement.",
          "Packaging adapted to lot, pallet or container orders.",
        ],
      },
      {
        title: "Marble, tiles & slabs division",
        tag: "Finishing",
        points: [
          "Decorative marble and slabs for residential and commercial projects.",
          "Wall tiles and floor slabs for showrooms, jobsites and distribution networks.",
          "Ranges selected for aesthetics, resistance and requested format.",
        ],
      },
      {
        title: "Workwear division",
        tag: "Workwear",
        points: [
          "Work uniforms, vests, jackets and sets for intensive use.",
          "Visible and practical equipment for workshops, logistics and jobsites.",
          "Supply adapted to companies, resellers and contractors.",
        ],
      },
      {
        title: "Car batteries division",
        tag: "Auto",
        points: [
          "Car batteries for everyday and professional uses.",
          "Starting and power solutions for auto-parts networks and garages.",
          "Batches prepared for wholesalers, specialized shops and distributors.",
        ],
      },
      {
        title: "Footwear & fashion textile division",
        tag: "Fashion",
        points: [
          "Men's footwear and textiles for distribution and retail.",
          "Women's collections, basics, accessories and seasonal references.",
          "A volume-focused selection designed for retail presentation and turnover.",
        ],
      },
      {
        title: "Drywall & wood panels division",
        tag: "Fit-out",
        points: [
          "Drywall for partitioning, renovation and interior finishing.",
          "Panels, boards and wood supports for furniture and fit-out projects.",
          "An offer designed for projects, building professionals and resale.",
        ],
      },
    ],
    competitiveAdvantages: [
      {
        title: "Multi-sector offer",
        text: "One commercial structure to source several product families through a single channel.",
      },
      {
        title: "Pragmatic selection",
        text: "We prioritize exportable references that are useful in the field and easy to restock.",
      },
      {
        title: "Export preparation",
        text: "Packaging, batch consolidation and document coordination before shipment.",
      },
      {
        title: "Commercial flexibility",
        text: "Ability to adapt the offer according to volume, season and customer profile.",
      },
      {
        title: "Logistics steering",
        text: "Flow organization from Tiaret with a clear view of lead times and priorities.",
      },
      {
        title: "B2B partnership",
        text: "An approach focused on wholesalers, importers, distributors and supply projects.",
      },
    ],
    exportCommitments: [
      {
        title: "Multi-product consolidation",
        text: "Combine several divisions in one order to streamline purchasing and simplify shipping.",
      },
      {
        title: "Goods protection",
        text: "Preparation adapted to each product with controlled packaging, separation and palletization.",
      },
      {
        title: "Responsive commercial follow-up",
        text: "Continuous coordination between customer demand, batch preparation and logistics launch.",
      },
    ],
    tradeCapabilities: [
      "Food and hygiene products: poultry, fruits and vegetables, dairy, beverages, grocery and detergents meet the needs of fast distribution, wholesale trade and established retail channels.",
      "Materials and fit-out: cement, finishing materials, marble, tiles, drywall and wood panels create a strong base for construction, renovation and professional resale projects.",
      "Equipment and distribution: workwear, car batteries, footwear and fashion textiles open the door to different sales channels, from specialized retail to multi-category B2B supply.",
    ],
    companyHighlights: [
      "Led by Mr Nouaouria",
      "Based in Tiaret",
      "Structured multi-sector export",
      "Flexible and responsive B2B approach",
    ],
    statItems: [
      { value: `${POLE_COUNT}`, label: "Excellence divisions" },
      { value: "Tiaret", label: "Operational base" },
      { value: "B2B", label: "Business focus" },
      { value: "Tailored", label: "Product response" },
    ],
    contactItemLabels: {
      headquarters: "Head office",
      president: "Chairman & CEO",
      phone: "WhatsApp / Phone",
      email: "Email",
    },
  },
  ar: {
    meta: {
      title: "Nouaouria Export | منصة تصدير متعددة القطاعات",
      description:
        "Nouaouria Export، ومقرها تيارت، تطور عرضاً تصديرياً متعدد القطاعات يشمل المواد الغذائية والنظافة ومواد البناء والتجهيز.",
      ogLocale: "ar_DZ",
    },
    nav: {
      links: [
        { label: "الرئيسية", href: "#home" },
        { label: "أقطابنا", href: "#products" },
        { label: "من نحن", href: "/about" },
        { label: "اتصل بنا", href: "#contact" },
      ],
      cta: "اتصال تجاري",
      languageLabel: "اللغة",
      brandSubline: "تصدير - تيارت",
    },
    hero: {
      locationLabel: "تيارت، الجزائر",
      titleSuffix: "متعدد القطاعات",
      description:
        "من تيارت نطور عرضاً تصديرياً متكاملاً يشمل المواد الغذائية، النظافة، البناء، مواد التشطيب، التجهيزات المهنية، النسيج، الأحذية وبطاريات السيارات.",
      primaryCta: "اكتشف أقطابنا",
      secondaryCta: "اقرأ المزيد",
      scrollLabel: "مرر للأسفل",
    },
    intro: {
      eyebrow: "من نحن",
      titleStart: "شريككم",
      titleAccent: "التصديري متعدد القطاعات",
      titleEnd: "من تيارت",
      additionalText:
        "تحت قيادة السيد نواورية، ننظم عرضاً تصديرياً واضحاً وموثوقاً ومرناً للموزعين والمستوردين ومشتري المشاريع والشركاء الدوليين.",
      cardDescription:
        "قيادة استراتيجية للشركة وإدارة العمليات التجارية متعددة القطاعات.",
      button: "اقرأ المزيد",
    },
    categories: {
      eyebrow: `${POLE_COUNT} أقطاب تميز`,
      heading: "عرض تصديري متكامل",
      description:
        "غذاء، نظافة، مواد بناء، تشطيبات، لباس مهني، سيارات، موضة وتجهيز داخلي: نجمع عدة عوالم من المنتجات ضمن استراتيجية تصدير واحدة.",
      moreTitle: "تبحث عن شيء آخر؟",
      moreDescription:
        "تواصل معنا لطلب مخصص أو منتج آخر أو عرض سعر مناسب.",
    },
    whyUs: {
      eyebrow: "مزايا تنافسية",
      heading: "شريك موثوق لعمليات الشراء والتوريد",
      paragraphOne:
        "انطلاقاً من تيارت، تجمع Nouaouria Export بين الرؤية التجارية والتنسيق اللوجستي ومرونة العرض لخدمة أسواق متعددة بتنفيذ واضح.",
      paragraphTwo:
        "تعتمد مقاربتنا على تجميع المنتجات من عدة قطاعات، والتحضير للتصدير، وعلاقة B2B سهلة الإدارة حتى عندما تشمل الاحتياجات عدة عائلات من المنتجات.",
      brandTagline: "تيارت، الجزائر - تصدير متعدد القطاعات",
    },
    testimonials: {
      eyebrow: "التزامات لوجستية وتجارية",
      heading: "تنظيم مخصص لخدمة التصدير",
    },
    contact: {
      eyebrow: "اتصال تجاري",
      heading: "هل تحتاج شيئاً آخر؟ تواصل معنا",
      description:
        "هل تبحث عن منتج محدد، أو عدة عائلات من المنتجات في شحنة واحدة، أو تموين B2B مفصل حسب الطلب؟ أرسل طلبك وسيجيبك فريقنا التجاري بسرعة.",
      directorEyebrow: "الإدارة العامة",
      directorDescription:
        "لطلبات الشراكة أو التوزيع أو تجميع عدة منتجات، نرافقكم من التحضير إلى الشحن.",
      formEyebrow: "استمارة الطلب",
      formTitle: "أخبرنا باحتياجك",
      nameLabel: "الاسم الكامل *",
      emailLabel: "البريد الإلكتروني *",
      companyLabel: "الشركة / المؤسسة",
      phoneLabel: "الهاتف / واتساب",
      messageLabel: "الرسالة *",
      namePlaceholder: "Ahmed Benali",
      companyPlaceholder: "اسم شركتكم",
      messagePlaceholder:
        "صف المنتجات المطلوبة، الكميات، الوجهة، نوع المشروع أو أي حاجة أخرى...",
      submit: "إرسال الطلب",
      submitting: "جارٍ الإرسال...",
      requiredError: "يرجى ملء الحقول الإلزامية قبل الإرسال.",
      genericError: "حدث خطأ أثناء إرسال الرسالة.",
      success: "تم إرسال الطلب بنجاح. سنعود إليكم في أقرب وقت.",
      subject: "طلب تجاري جديد - Nouaouria Export",
    },
    footer: {
      description:
        "قاعدة تصدير متعددة القطاعات للمواد الغذائية، النظافة، البناء، التجهيز الداخلي، المعدات، السيارات والنسيج.",
      mapLink: "عرض Nouaouria Export على خرائط Google",
      polesHeading: "أقطابنا",
      companyHeading: "الشركة",
      contactHeading: "اتصال تجاري",
      readMore: "اقرأ المزيد",
      legalPrivacy: "سياسة الخصوصية",
      legalNotice: "إشعارات قانونية",
      legalTerms: "الشروط والأحكام",
      copyrightSuffix: "Nouaouria Export. جميع الحقوق محفوظة.",
      links: [
        { label: "الرئيسية", href: "#home" },
        { label: "الأقطاب", href: "#products" },
        { label: "المزايا", href: "#advantages" },
        { label: "اتصل بنا", href: "#contact" },
      ],
    },
    aboutPage: {
      eyebrow: "من نحن",
      heading: "Nouaouria Export، قاعدة متعددة القطاعات لخدمة احتياجاتكم التموينية",
      mapLink: "عرض Nouaouria Export على الخريطة",
      galleryEyebrow: "معرض الشركة",
      galleryHeading: "Nouaouria Export بالصور",
      capabilitiesEyebrow: "قدراتنا المنتجية",
      capabilitiesHeading: "عرض مصمم لعمليات الشراء المهنية",
      commitmentsEyebrow: "التزامات",
      commitmentsHeading: "اللوجستيك والتنفيذ",
      advantagesEyebrow: "مزايا تنافسية",
      advantagesHeading: "ما الذي يميزنا",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
    },
    notFound: {
      eyebrow: "خطأ 404",
      heading: "هذه الصفحة غير موجودة.",
      description: "العودة إلى الصفحة الرئيسية لاكتشاف منتجات وخدمات Nouaouria Export.",
      cta: "العودة إلى الرئيسية",
    },
    president: {
      name: "Mr Nouaouria",
      title: "الرئيس المدير العام",
      summary:
        "يقود Mr Nouaouria شركة Nouaouria Export برؤية واضحة تتمثل في بناء عرض تصديري متعدد القطاعات من تيارت، يتميز بالجدية والوضوح والقدرة على التكيف مع احتياجات المستوردين والموزعين وشركاء B2B.",
    },
    aboutPreview:
      "تطوّر Nouaouria Export، انطلاقاً من تيارت، عرضاً متنوعاً يجمع بين المواد الغذائية، النظافة، البناء، التشطيبات، تجهيزات العمل، النسيج، البطاريات وحلول التهيئة لفائدة الأسواق المهنية.",
    aboutParagraphs: [
      "Nouaouria Export شركة تجارة وتصدير مقرها تيارت، متخصصة في الربط بين العرض الجزائري والاحتياجات الفعلية للمشترين الدوليين. وتحت قيادة Mr Nouaouria، تبني الشركة مجموعة متعددة القطاعات قادرة على تلبية طلبات متنوعة ومنتظمة ومتطورة.",
      "تكمن قوتنا في اختيار عملي لعائلات منتجات ذات طلب مرتفع: الدواجن، الفواكه والخضر، منتجات الألبان، المشروبات، البقالة، النظافة، إضافة إلى الإسمنت، مواد التشطيب، ملابس العمال، بطاريات السيارات، النسيج الموضوي، الأحذية، الجبس بورد والألواح الخشبية. وقد صُمم كل قطب لخدمة تجارة الجملة وكذلك مشاريع التموين الميداني.",
      "من تيارت ننظم التحضير التجاري، والتغليف، والتوضيب على المنصات، والتنسيق اللوجستي بمنهجية موجهة نحو التنفيذ. والهدف بسيط: توفير قاعدة تصدير مرنة ومهنية لشركائنا، قادرة على تجميع عدة عوالم من المنتجات، الغذائية وغير الغذائية، ضمن ديناميكية واحدة.",
    ],
    aboutGalleryTexts: [
      {
        alt: "حاويات لوجستية جاهزة للتصدير",
        title: "لوجستيك التصدير والتجميع",
      },
      {
        alt: "مواد بناء مجهزة للتصدير",
        title: "البناء ولوازم الورشات",
      },
      {
        alt: "تشكيلة من الرخام والبلاط والدالات",
        title: "رخام وبلاط ودالات",
      },
      {
        alt: "تشكيلات من ملابس العمال وتجهيزات الميدان",
        title: "ملابس العمال",
      },
      {
        alt: "جبس بورد وألواح وخشب",
        title: "جبس بورد وألواح خشبية",
      },
    ],
    poles: [
      {
        title: "قطب الدواجن واللحوم",
        tag: "دواجن",
        points: [
          "دجاج التسمين: دواجن كاملة أو تقطيع دقيق.",
          "بيض المائدة: طزاجة مضمونة مع الفحص والتدريج وفق المعايير.",
          "لحوم مصنعة: منتجات معتمدة حلال مثل الباتيه والسجق وغيرها.",
        ],
      },
      {
        title: "قطب الطازج: فواكه وخضر",
        tag: "طازج",
        points: [
          "خضر موسمية: طماطم، فلفل، بطاطا.",
          "فواكه: حمضيات، تمر دقلة نور ممتاز، رمان.",
          "تغليف: عبوات تصدير تضمن حماية المنتجات وتهويتها.",
        ],
      },
      {
        title: "قطب منتجات الألبان",
        tag: "ألبان",
        points: [
          "أجبان: أجبان مطبوخة، أجبان مضغوطة وتخصصات محلية.",
          "الحليب ومشتقاته: حليب UHT، ياغورت وكريمات تحلية طويلة الحفظ.",
        ],
      },
      {
        title: "قطب المشروبات والعصائر",
        tag: "مشروبات",
        points: [
          "عصائر الفواكه: نكتار وعصائر طبيعية 100% بنكهات متوسطية.",
          "مشروبات غازية: تشكيلات متنوعة من الصودا والمياه المعدنية.",
        ],
      },
      {
        title: "قطب البسكويت والبقالة",
        tag: "بقالة",
        points: [
          "بسكويت: وافرات وبسكويت جاف ومحشو.",
          "حلويات: منتجات سكرية ملائمة للأذواق الدولية.",
          "بقالة جافة: مراجع أساسية للتوزيع وإعادة البيع.",
        ],
      },
      {
        title: "قطب المنظفات والنظافة",
        tag: "نظافة",
        points: [
          "منظفات: مساحيق وغسائل سائلة للاستعمال المنزلي والمهني.",
          "منتجات منزلية: منظفات متعددة الاستعمالات، جافيل وحلول صيانة.",
          "تعبئة للتصدير: صيغ مناسبة للتوزيع والطلبات الكبيرة.",
        ],
      },
      {
        title: "قطب الإسمنت ومواد البناء",
        tag: "بناء",
        points: [
          "إسمنت وأكياس ومواد موجهة لورشات الأشغال الكبرى.",
          "آجر وحديد ولوازم أساسية للتموين المنتظم.",
          "تغليف مناسب للطلبات بالدفعات أو الطبليات أو الحاويات.",
        ],
      },
      {
        title: "قطب الرخام والبلاط والدالات",
        tag: "تشطيب",
        points: [
          "رخام زخرفي وألواح للمشاريع السكنية والتجارية.",
          "بلاط جداري ودالات أرضية لصالات العرض والورشات وشبكات التوزيع.",
          "تشكيلات منتقاة حسب الجمالية والمتانة والمقاس المطلوب.",
        ],
      },
      {
        title: "قطب ملابس العمال",
        tag: "ميداني",
        points: [
          "ملابس عمل، سترات، صدريات وأطقم للاستعمال المكثف.",
          "تجهيزات واضحة وعملية للورشات واللوجستيك ومواقع العمل.",
          "تموين مناسب للشركات والبائعين والمقاولين.",
        ],
      },
      {
        title: "قطب بطاريات السيارات",
        tag: "سيارات",
        points: [
          "بطاريات سيارات للاستعمال اليومي والمهني.",
          "حلول تشغيل وطاقة لشبكات قطع الغيار والمرائب.",
          "دفعات مجهزة لتجار الجملة والمتاجر المتخصصة والموزعين.",
        ],
      },
      {
        title: "قطب الأحذية والنسيج الموضوي",
        tag: "موضة",
        points: [
          "أحذية ونسيج رجالي للتوزيع والبيع بالتجزئة.",
          "تشكيلات نسائية، أساسيات، إكسسوارات ومراجع موسمية.",
          "اختيار موجه للحجم، والعرض داخل المتاجر، والدوران التجاري.",
        ],
      },
      {
        title: "قطب الجبس بورد والألواح الخشبية",
        tag: "تهيئة",
        points: [
          "جبس بورد للتقسيم، الترميم والتشطيب الداخلي.",
          "ألواح وخشب ودعامات للأثاث وأعمال التهيئة.",
          "عرض مخصص للمشاريع ولمهنيي البناء ولإعادة البيع.",
        ],
      },
    ],
    competitiveAdvantages: [
      {
        title: "عرض متعدد القطاعات",
        text: "هيكل تجاري واحد لتوريد عدة عائلات من المنتجات عبر قناة واحدة.",
      },
      {
        title: "اختيار عملي",
        text: "نركز على المراجع القابلة للتصدير والمفيدة ميدانياً وسهلة إعادة التموين.",
      },
      {
        title: "تحضير للتصدير",
        text: "تغليف وتجميع الدفعات والتنسيق الوثائقي قبل الشحن.",
      },
      {
        title: "مرونة تجارية",
        text: "إمكانية تكييف العرض حسب الأحجام والمواسم وملف العميل.",
      },
      {
        title: "إدارة لوجستية",
        text: "تنظيم التدفقات من تيارت مع رؤية واضحة للآجال والأولويات.",
      },
      {
        title: "شراكة B2B",
        text: "مقاربة موجهة لتجار الجملة والمستوردين والموزعين ومشاريع التموين.",
      },
    ],
    exportCommitments: [
      {
        title: "تجميع متعدد المنتجات",
        text: "دمج عدة أقطاب في طلبية واحدة لتسهيل الشراء وتبسيط الشحن.",
      },
      {
        title: "حماية البضاعة",
        text: "تحضير ملائم لطبيعة كل منتج مع تغليف وفصل وتوضيب محكم.",
      },
      {
        title: "متابعة تجارية سريعة",
        text: "تنسيق مستمر بين طلب العميل وتحضير الدفعات والانطلاق اللوجستي.",
      },
    ],
    tradeCapabilities: [
      "المواد الغذائية ومنتجات النظافة: الدواجن، الفواكه والخضر، الألبان، المشروبات، البقالة والمنظفات تستجيب لحاجات التوزيع السريع وتجارة الجملة والقنوات التجارية القائمة.",
      "المواد والتهيئة: الإسمنت، التشطيبات، الرخام، البلاط، الجبس بورد والألواح الخشبية تشكل قاعدة قوية لمشاريع البناء والترميم وإعادة البيع المهني.",
      "التجهيز والتوزيع: ملابس العمال، بطاريات السيارات، الأحذية والنسيج الموضوي تفتح المجال لقنوات تجارية مختلفة من نقاط البيع المتخصصة إلى التموين B2B متعدد الفئات.",
    ],
    companyHighlights: [
      "تحت إدارة Mr Nouaouria",
      "مقرها تيارت",
      "تصدير متعدد القطاعات منظم",
      "مقاربة B2B مرنة وسريعة",
    ],
    statItems: [
      { value: `${POLE_COUNT}`, label: "أقطاب التميز" },
      { value: "تيارت", label: "القاعدة التشغيلية" },
      { value: "B2B", label: "التوجه التجاري" },
      { value: "حسب الطلب", label: "الاستجابة للمنتج" },
    ],
    contactItemLabels: {
      headquarters: "المقر الرئيسي",
      president: "الرئيس المدير العام",
      phone: "واتساب / هاتف",
      email: "البريد الإلكتروني",
    },
  },
  ru: {
    meta: {
      title: "Nouaouria Export | Многопрофильный экспортный хаб",
      description:
        "Nouaouria Export, базирующаяся в Тиарете, развивает многопрофильное экспортное предложение в сфере продуктов питания, гигиены, строительства и оснащения.",
      ogLocale: "ru_RU",
    },
    nav: {
      links: [
        { label: "Главная", href: "#home" },
        { label: "Наши направления", href: "#products" },
        { label: "О нас", href: "/about" },
        { label: "Контакты", href: "#contact" },
      ],
      cta: "Коммерческий контакт",
      languageLabel: "Язык",
      brandSubline: "Экспорт - Тиарет",
    },
    hero: {
      locationLabel: "Тиарет, Алжир",
      titleSuffix: "Многопрофильный экспорт",
      description:
        "Из Тиарета мы развиваем комплексное экспортное предложение в сферах продуктов питания, гигиены, строительства, отделочных материалов, профессионального оснащения, текстиля, обуви и автомобильных аккумуляторов.",
      primaryCta: "Посмотреть направления",
      secondaryCta: "Подробнее",
      scrollLabel: "Прокрутить",
    },
    intro: {
      eyebrow: "О нас",
      titleStart: "Ваш",
      titleAccent: "многопрофильный экспортный партнёр",
      titleEnd: "из Тиарета",
      additionalText:
        "Под руководством Mr Nouaouria мы выстраиваем понятное, надёжное и гибкое экспортное предложение для дистрибьюторов, импортёров, проектных закупщиков и международных партнёров.",
      cardDescription:
        "Стратегическое руководство компанией и координация коммерческих операций по нескольким направлениям.",
      button: "Подробнее",
    },
    categories: {
      eyebrow: `${POLE_COUNT} направлений экспертизы`,
      heading: "Комплексное экспортное предложение",
      description:
        "Продукты питания, гигиена, материалы, отделка, спецодежда, авто, мода и решения для обустройства: мы объединяем несколько товарных миров в одной экспортной стратегии.",
      moreTitle: "Нужно что-то ещё?",
      moreDescription:
        "Свяжитесь с нами для индивидуального запроса, другого товара или персонального коммерческого предложения.",
    },
    whyUs: {
      eyebrow: "Наши конкурентные преимущества",
      heading: "Надёжный партнёр для ваших закупок",
      paragraphOne:
        "Работая из Тиарета, Nouaouria Export сочетает коммерческое понимание рынка, логистическую координацию и гибкость продуктового предложения для обслуживания разных рынков с чётким исполнением.",
      paragraphTwo:
        "Наш подход строится на многопрофильной консолидации, подготовке к экспорту и простой в управлении B2B-модели даже тогда, когда потребности охватывают несколько товарных категорий.",
      brandTagline: "Тиарет, Алжир - Многопрофильный экспорт",
    },
    testimonials: {
      eyebrow: "Логистические и коммерческие обязательства",
      heading: "Организация, созданная для экспорта",
    },
    contact: {
      eyebrow: "Коммерческий контакт",
      heading: "Нужно что-то ещё? Свяжитесь с нами",
      description:
        "Ищете конкретный товар, несколько товарных групп в одной поставке или индивидуальное B2B-снабжение? Отправьте запрос, и наша коммерческая команда быстро ответит вам.",
      directorEyebrow: "Общее руководство",
      directorDescription:
        "По вопросам партнёрства, дистрибуции или консолидации нескольких товаров мы сопровождаем вас от подготовки до отгрузки.",
      formEyebrow: "Форма запроса",
      formTitle: "Расскажите о вашей потребности",
      nameLabel: "Полное имя *",
      emailLabel: "Email *",
      companyLabel: "Компания / Бизнес",
      phoneLabel: "Телефон / WhatsApp",
      messageLabel: "Сообщение *",
      namePlaceholder: "Ahmed Benali",
      companyPlaceholder: "Название вашей компании",
      messagePlaceholder:
        "Опишите нужные товары, объёмы, страну назначения, тип проекта или любую другую потребность...",
      submit: "Отправить запрос",
      submitting: "Отправка...",
      requiredError: "Пожалуйста, заполните обязательные поля перед отправкой.",
      genericError: "Во время отправки сообщения произошла ошибка.",
      success: "Ваш запрос успешно отправлен. Мы свяжемся с вами очень скоро.",
      subject: "Новый коммерческий запрос - Nouaouria Export",
    },
    footer: {
      description:
        "Многопрофильная экспортная база для продуктов питания, гигиены, строительства, внутреннего обустройства, оборудования, автомобильного сектора и текстиля.",
      mapLink: "Открыть Nouaouria Export в Google Maps",
      polesHeading: "Наши направления",
      companyHeading: "Компания",
      contactHeading: "Коммерческий контакт",
      readMore: "Подробнее",
      legalPrivacy: "Политика конфиденциальности",
      legalNotice: "Правовая информация",
      legalTerms: "Условия продажи",
      copyrightSuffix: "Nouaouria Export. Все права защищены.",
      links: [
        { label: "Главная", href: "#home" },
        { label: "Направления", href: "#products" },
        { label: "Преимущества", href: "#advantages" },
        { label: "Контакты", href: "#contact" },
      ],
    },
    aboutPage: {
      eyebrow: "О нас",
      heading: "Nouaouria Export - многопрофильная база для ваших закупок и снабжения",
      mapLink: "Посмотреть Nouaouria Export на карте",
      galleryEyebrow: "Галерея компании",
      galleryHeading: "Nouaouria Export в фотографиях",
      capabilitiesEyebrow: "Наши товарные возможности",
      capabilitiesHeading: "Предложение для профессиональных закупок",
      commitmentsEyebrow: "Обязательства",
      commitmentsHeading: "Логистика и исполнение",
      advantagesEyebrow: "Конкурентные преимущества",
      advantagesHeading: "Что отличает нас",
      phoneLabel: "Телефон",
      emailLabel: "Email",
    },
    notFound: {
      eyebrow: "Ошибка 404",
      heading: "Эта страница не существует.",
      description:
        "Вернитесь на главную, чтобы ознакомиться с товарами и услугами Nouaouria Export.",
      cta: "Вернуться на главную",
    },
    president: {
      name: "Mr Nouaouria",
      title: "Президент - генеральный директор",
      summary:
        "Во главе Nouaouria Export Mr Nouaouria реализует чёткое видение: из Тиарета выстраивать серьёзное, понятное и адаптируемое многопрофильное экспортное предложение для импортёров, дистрибьюторов и B2B-партнёров.",
    },
    aboutPreview:
      "Базирующаяся в Тиарете компания Nouaouria Export развивает диверсифицированное предложение, объединяющее продукты питания, гигиену, строительство, отделочные материалы, рабочее оснащение, текстиль, аккумуляторы и решения для обустройства профессионального рынка.",
    aboutParagraphs: [
      "Nouaouria Export - торгово-экспортная компания из Тиарета, специализирующаяся на соединении алжирского предложения с конкретными потребностями международных покупателей. Под руководством Mr Nouaouria компания формирует многопрофильную линейку, способную обслуживать разнообразные, регулярные и растущие заказы.",
      "Наша сила - в прагматичном подборе товарных категорий с высоким спросом: птицеводство, фрукты и овощи, молочная продукция, напитки, бакалея, гигиена, а также цемент, отделочные материалы, рабочая одежда, автомобильные аккумуляторы, модный текстиль, обувь, гипсокартон и древесные панели. Каждое направление рассчитано как на оптовую торговлю, так и на снабжение проектов на местах.",
      "Из Тиарета мы организуем коммерческую подготовку, упаковку, паллетизацию и логистическую координацию с ориентацией на исполнение. Цель проста: предложить партнёрам гибкую и профессиональную экспортную базу, способную объединять несколько товарных миров - от продовольствия до непродовольственных товаров - в одном потоке.",
    ],
    aboutGalleryTexts: [
      {
        alt: "Логистические контейнеры, готовые к экспорту",
        title: "Экспортная логистика и консолидация",
      },
      {
        alt: "Строительные материалы, подготовленные к экспорту",
        title: "Строительство и снабжение объектов",
      },
      {
        alt: "Подборка мрамора, плитки и плит",
        title: "Мрамор, плитка и плиты",
      },
      {
        alt: "Линейки спецодежды и полевого оснащения",
        title: "Рабочая одежда",
      },
      {
        alt: "Гипсокартон, панели и деревянные доски",
        title: "Гипсокартон и древесные панели",
      },
    ],
    poles: [
      {
        title: "Птицеводство и мясная продукция",
        tag: "Птица",
        points: [
          "Бройлерная курица: целые тушки или точная разделка.",
          "Столовые яйца: гарантированная свежесть, овоскопирование и калибровка по стандартам.",
          "Мясная гастрономия: продукция Halal, включая паштеты, колбасы и другие изделия.",
        ],
      },
      {
        title: "Свежая продукция: фрукты и овощи",
        tag: "Свежие",
        points: [
          "Овощи: томаты, перец, картофель.",
          "Фрукты: цитрусовые, финики Deglet Nour премиального качества, гранаты.",
          "Упаковка: экспортная тара, обеспечивающая защиту и вентиляцию продукции.",
        ],
      },
      {
        title: "Молочная продукция",
        tag: "Молочные",
        points: [
          "Сыры: плавленые сыры, прессованные сыры и местные специалитеты.",
          "Молоко и производные: UHT-молоко, йогурты и десертные кремы длительного хранения.",
        ],
      },
      {
        title: "Напитки и соки",
        tag: "Напитки",
        points: [
          "Фруктовые соки: нектары и 100% натуральные соки со средиземноморскими вкусами.",
          "Газированные напитки: широкий ассортимент содовых и минеральной воды.",
        ],
      },
      {
        title: "Печенье и бакалея",
        tag: "Бакалея",
        points: [
          "Печенье: вафли, сухое и начинённое печенье.",
          "Кондитерские изделия: сладкая продукция, адаптированная к международным вкусам.",
          "Сухая бакалея: базовые позиции для дистрибуции и перепродажи.",
        ],
      },
      {
        title: "Моющие средства и гигиена",
        tag: "Гигиена",
        points: [
          "Моющие средства: жидкие и порошковые составы для бытового и профессионального использования.",
          "Бытовая химия: универсальные чистящие средства, отбеливатель и решения для ухода.",
          "Экспортная упаковка: форматы, адаптированные для дистрибуции и объёмных заказов.",
        ],
      },
      {
        title: "Цемент и строительные материалы",
        tag: "Строительство",
        points: [
          "Цемент, мешки и позиции для крупных строительных работ.",
          "Кирпич, сталь и базовые материалы для регулярного снабжения.",
          "Упаковка, адаптированная под партии, паллеты и контейнеры.",
        ],
      },
      {
        title: "Мрамор, плитка и плиты",
        tag: "Отделка",
        points: [
          "Декоративный мрамор и плиты для жилых и коммерческих проектов.",
          "Настенная плитка и напольные плиты для шоурумов, строек и дистрибьюторских сетей.",
          "Ассортимент, подобранный по эстетике, прочности и нужному формату.",
        ],
      },
      {
        title: "Рабочая одежда",
        tag: "Workwear",
        points: [
          "Рабочая форма, жилеты, куртки и комплекты для интенсивного использования.",
          "Практичное и заметное оснащение для мастерских, логистики и стройплощадок.",
          "Снабжение, адаптированное для компаний, реселлеров и подрядчиков.",
        ],
      },
      {
        title: "Автомобильные аккумуляторы",
        tag: "Авто",
        points: [
          "Аккумуляторы для повседневного и профессионального использования.",
          "Решения для запуска и энергообеспечения сетей автозапчастей и сервисов.",
          "Партии для оптовиков, специализированных магазинов и дистрибьюторов.",
        ],
      },
      {
        title: "Обувь и модный текстиль",
        tag: "Мода",
        points: [
          "Мужская обувь и текстиль для дистрибуции и розничной торговли.",
          "Женские коллекции, базовые позиции, аксессуары и сезонные артикулы.",
          "Подборка, ориентированная на объём, retail-презентацию и коммерческую оборачиваемость.",
        ],
      },
      {
        title: "Гипсокартон и древесные панели",
        tag: "Обустройство",
        points: [
          "Гипсокартон для перегородок, ремонта и внутренней отделки.",
          "Панели, доски и древесные материалы для мебели и интерьерных работ.",
          "Предложение для проектов, строительных специалистов и перепродажи.",
        ],
      },
    ],
    competitiveAdvantages: [
      {
        title: "Многопрофильное предложение",
        text: "Одна коммерческая структура для закупки нескольких товарных семейств через единый канал.",
      },
      {
        title: "Прагматичный отбор",
        text: "Мы отдаём приоритет экспортируемым позициям, востребованным на практике и удобным для пополнения запасов.",
      },
      {
        title: "Подготовка к экспорту",
        text: "Упаковка, консолидация партий и документальное сопровождение до отгрузки.",
      },
      {
        title: "Коммерческая гибкость",
        text: "Возможность адаптировать предложение под объёмы, сезонность и профиль клиента.",
      },
      {
        title: "Логистическое управление",
        text: "Организация потоков из Тиарета с ясным пониманием сроков и приоритетов.",
      },
      {
        title: "B2B-партнёрство",
        text: "Подход, ориентированный на оптовиков, импортёров, дистрибьюторов и проекты снабжения.",
      },
    ],
    exportCommitments: [
      {
        title: "Консолидация нескольких товаров",
        text: "Объединение нескольких направлений в одном заказе для упрощения закупок и отправки.",
      },
      {
        title: "Защита товара",
        text: "Подготовка с учётом природы каждого продукта: упаковка, разделение и контролируемая паллетизация.",
      },
      {
        title: "Оперативное коммерческое сопровождение",
        text: "Постоянная координация между запросом клиента, подготовкой партий и запуском логистики.",
      },
    ],
    tradeCapabilities: [
      "Продукты питания и гигиена: птицеводство, фрукты и овощи, молочная продукция, напитки, бакалея и моющие средства закрывают потребности быстрой дистрибуции, оптовой торговли и уже действующих торговых каналов.",
      "Материалы и обустройство: цемент, отделочные материалы, мрамор, плитка, гипсокартон и древесные панели формируют прочную базу для строительных, ремонтных и профессиональных проектов перепродажи.",
      "Оснащение и дистрибуция: рабочая одежда, автомобильные аккумуляторы, обувь и модный текстиль открывают разные коммерческие каналы - от специализированной розницы до многокатегорийного B2B-снабжения.",
    ],
    companyHighlights: [
      "Под руководством Mr Nouaouria",
      "Базируется в Тиарете",
      "Структурированный многопрофильный экспорт",
      "Гибкий и быстрый B2B-подход",
    ],
    statItems: [
      { value: `${POLE_COUNT}`, label: "Направления экспертизы" },
      { value: "Тиарет", label: "Операционная база" },
      { value: "B2B", label: "Коммерческий фокус" },
      { value: "Под запрос", label: "Товарное решение" },
    ],
    contactItemLabels: {
      headquarters: "Головной офис",
      president: "Президент - генеральный директор",
      phone: "WhatsApp / Телефон",
      email: "Email",
    },
  },
};

function buildContent(locale: Locale): SiteContent {
  const data = localeDefinitions[locale];
  const localizedAddress = `${"Nouaouria Export"} - ${data.hero.locationLabel}`;

  return {
    meta: data.meta,
    nav: data.nav,
    hero: data.hero,
    intro: data.intro,
    categories: data.categories,
    whyUs: data.whyUs,
    testimonials: data.testimonials,
    contact: data.contact,
    footer: data.footer,
    aboutPage: data.aboutPage,
    notFound: data.notFound,
    locationUrl,
    contactPhone,
    contactEmail,
    president: data.president,
    aboutPreview: data.aboutPreview,
    aboutParagraphs: data.aboutParagraphs,
    aboutGallery: data.aboutGalleryTexts.map((item, index) => ({
      ...item,
      src: galleryImagePaths[index],
    })),
    excellencePoles: data.poles.map((item, index) => ({
      ...item,
      image: poleImagePaths[index],
    })),
    competitiveAdvantages: data.competitiveAdvantages,
    exportCommitments: data.exportCommitments,
    tradeCapabilities: data.tradeCapabilities,
    contactItems: [
      {
        label: data.contactItemLabels.headquarters,
        value: localizedAddress,
        href: locationUrl,
      },
      {
        label: data.contactItemLabels.president,
        value: data.president.name,
      },
      {
        label: data.contactItemLabels.phone,
        value: contactPhone,
        href: `tel:${contactPhone}`,
      },
      {
        label: data.contactItemLabels.email,
        value: contactEmail,
        href: `mailto:${contactEmail}`,
      },
    ],
    companyHighlights: data.companyHighlights,
    statItems: data.statItems,
  };
}

export const siteContent: Record<Locale, SiteContent> = {
  fr: buildContent("fr"),
  en: buildContent("en"),
  ar: buildContent("ar"),
  ru: buildContent("ru"),
};
