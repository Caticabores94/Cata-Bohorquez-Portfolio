export type ExperienceSummary = {
  slug: string;
  title: string;
  role: string;
  years: string;
  logo?: string;
  textLogo?: string;
  subLogo?: string;
};

export type ExperienceSection = {
  title: string;
  body?: string;
  bullets?: string[];
};

export type LiveSiteItem = {
  title: string;
  subtitle: string;
  href: string;
  image: string;
};

export type ExperienceDetail = ExperienceSummary & {
  heroTitle: string;
  heroBody?: string;
  heroVisual?: string;
  heroVisualAlt?: string;
  heroVisualClassName?: string;
  tags: string[];
  sections: ExperienceSection[];
  showcase?: {
    title?: string;
    description?: string;
    image: string;
    alt: string;
    className?: string;
  };
  liveSitesTitle?: string;
  liveSitesDescription?: string;
  liveSites?: LiveSiteItem[];
};

const siteAcuvueUs = "/Experience images/Experience/Johnson/Rectangle 5.png";
const siteOasysMax = "/Experience images/Experience/Johnson/Rectangle 5-1.png";
const siteCv4u = "/Experience images/Experience/Johnson/Rectangle 5-2.png";
const siteFindDoctor = "/Experience images/Experience/Johnson/Rectangle 5-3.png";
const siteAcuvueBrazil = "/Experience images/Experience/Johnson/Rectangle 5-4.png";
const siteAcuvueMexico = "/Experience images/Experience/Johnson/Rectangle 5-5.png";

const vipSiteVtc = "/Experience images/Experience/VIP/Experience/Big Content card.png";
const vipSitePts = "/Experience images/Experience/VIP/Experience/Big Content card-1.png";
const vipSiteVeinDoctor = "/Experience images/Experience/VIP/Experience/Big Content card-2.png";
const vipSiteVip = "/Experience images/Experience/VIP/Experience/Big Content card-3.png";
const vipSiteNeck = "/Experience images/Experience/VIP/Experience/Big Content card-4.png";
const vipSiteBack = "/Experience images/Experience/VIP/Experience/Big Content card-5.png";

const camaraOutcome = "/Experience images/Experience/Cámara de comercio/Experience/Rectangle 5.png";

const visitWebsite = "/Experience images/Experience/Visit/Experience/Rectangle 5.png";
const visitInstagram = "/Experience images/Experience/Visit/Experience/Rectangle 5-1.png";

const lccMesa = "/Experience images/Experience/Low Carbon City/Experience/Rectangle 5.png";
const lccForum = "/Experience images/Experience/Low Carbon City/Experience/Rectangle 5-1.png";
const lccWebsite = "/Experience images/Experience/Low Carbon City/Experience/Rectangle 5-2.png";

const alestraShowcase = "/Experience images/Alestra image.png";

export const experienceSummaries: readonly ExperienceSummary[] = [
  {
    slug: "johnson-and-johnson",
    title: "Johnson & Johnson",
    role: "Senior UI|UX designer",
    years: "2023 - Current",
    logo: "/logos/Johnson & Johnson Logo color.png"
  },
  {
    slug: "alestra-movil",
    title: "Alestra Móvil",
    role: "Product Designer",
    years: "2025",
    logo: "/logos/Alestra logo color.png"
  },
  {
    slug: "vip-medical-group",
    title: "VIP Medical Group",
    role: "Product Designer & Colombian Marketing Manager",
    years: "2020 - 2023",
    logo: "/logos/vip.png"
  },
  {
    slug: "camara-de-comercio",
    title: "Cámara de Comercio",
    role: "Brand consultant",
    years: "2020",
    logo: "/logos/VTC.png"
  },
  {
    slug: "visit-santa-marta",
    title: "Visit Santa Marta",
    role: "Brand Consultant",
    years: "2020",
    textLogo: "VISIT",
    subLogo: "SANTA MARTA"
  },
  {
    slug: "low-carbon-city",
    title: "Low Carbon City",
    role: "Official of communications",
    years: "2019",
    textLogo: "LowCarbonCity"
  },
  {
    slug: "aiesec",
    title: "AIESEC",
    role: "Vice President of External Relationships",
    years: "2015 - 2018",
    textLogo: "AIESEC"
  }
] as const;

export const experienceDetails: Record<string, ExperienceDetail> = {
  "johnson-and-johnson": {
    slug: "johnson-and-johnson",
    title: "Johnson & Johnson",
    role: "Senior UI|UX designer",
    years: "2023 - Current",
    heroTitle: "Senior UI|UX Designer at Johnson & Johnson",
    heroBody:
      "At Johnson & Johnson, I’m part of the experience standards team as a member of the UI|UX squad. My official title is Senior UI|UX Designer, while my current scope also includes product design functions such as research, testing, and QA.",
    tags: ["UI|UX", "Ai Driven Content", "QA"],
    sections: [
      {
        title: "Core Responsibilities",
        bullets: [
          "Contributed to the development of a scalable global design system across multicultural markets.",
          "Designed and QA’d key ACUVUE and CV4U experiences, improving usability and consistency.",
          "Collaborated cross-functionally to align design, business, and marketing goals.",
          "Adapted components to local market needs while maintaining system integrity.",
          "Delivered strategic design insights through testing and performance evaluation."
        ]
      },
      {
        title: "AI & GEO Impact",
        bullets: [
          "Led Generative Engine Optimization initiatives to improve visibility across AI assistants and LLM-driven search.",
          "Redesigned content using AI-friendly structures, including question-based hierarchy and answer-ready blocks.",
          "Conducted competitive benchmarking to improve AI discoverability for ACUVUE.",
          "Used AI-assisted workflows with ChatGPT, Codex, GitHub, and Render to accelerate prototyping and iteration."
        ]
      }
    ],
    liveSitesTitle: "Live sites",
    liveSitesDescription:
      "These are some live projects I have helped with. For non-disclosure reasons, I can’t show the rest of them.",
    liveSites: [
      { title: "ACUVUE Mexico", subtitle: "Design support, testing and QA", href: "https://www.acuvue.com/es-mx/new-wearer/contact-lens-cleaning-and-care/", image: siteAcuvueUs },
      { title: "OASYS MAX Landing Page", subtitle: "Design support, testing and QA", href: "https://www.acuvue.com/en-us/oasys-max/", image: siteOasysMax },
      { title: "Clear Vision For You", subtitle: "Design support, testing and QA", href: "https://www.clearvisionforyou.com/en-us/", image: siteCv4u },
      { title: "ACUVUE Brazil", subtitle: "Design support, testing and QA", href: "https://www.acuvue.com/pt-br/new-wearer/new-wearer-guide/", image: siteAcuvueMexico },
      { title: "Find A Doctor CV4U", subtitle: "Design support, testing and QA", href: "https://www.clearvisionforyou.com/en-us/find-a-doctor/?filters=%7B%22distance%22%3A%2210%22%2C%22search%22%3A%22%22%7D", image: siteFindDoctor },
      { title: "ACUVUE LATAM Experience", subtitle: "Design support, testing and QA", href: "https://www.acuvue.com/pt-br/new-wearer/new-wearer-guide/", image: siteAcuvueBrazil }
    ]
  },
  "alestra-movil": {
    slug: "alestra-movil",
    title: "Alestra Móvil",
    role: "Product Designer",
    years: "2025",
    heroTitle: "Product Designer at Alestra Móvil",
    tags: ["Product Design", "Self-service Portal", "Telecom"],
    sections: [
      {
        title: "Goals as Product Designer",
        bullets: [
          "Create a seamless, intuitive, and accessible self-management portal for telecommunications customers.",
          "Enable users to request new lines, explore products, add gigabytes, and simplify account management overall.",
          "Reduce friction across key journeys and improve clarity in decision-making.",
          "Deliver a modern visual system that scales efficiently across diverse user needs.",
          "Increase customer satisfaction while reducing support dependency through stronger self-service experiences."
        ]
      }
    ],
    showcase: {
      title: "Live site",
      description: "I cannot post the live site yet as it is still under construction, but here is a sneak peek:",
      image: alestraShowcase,
      alt: "Alestra Móvil portal preview",
      className: "laptop"
    }
  },
  "vip-medical-group": {
    slug: "vip-medical-group",
    title: "VIP Medical Group",
    role: "Product Designer & Colombian Marketing Manager",
    years: "2020 - 2023",
    heroTitle: "Product Designer and Colombian MKT Manager at VIP Medical Group",
    tags: ["Product Design", "UX Leadership", "Marketing"],
    sections: [
      {
        title: "Goals as Product Designer",
        bullets: [
          "Hired and trained a multifunctional team of 7 people and led them to meet the area’s objectives through a stronger understanding of the brand.",
          "Collaborated across multiple teams to align work and meet business goals.",
          "Increased organic new-lead traffic on social networks by 76.1% through redesign and restructuring of the communication strategy.",
          "Reduced the cost of new SEM leads by 19.8% in Q3 and 52% in Q4 through a redesigned communication strategy.",
          "Surpassed the new-leads goal for microsites by delivering 671 more leads than originally planned."
        ]
      },
      {
        title: "Goals as UX Lead",
        bullets: [
          "Planned the creation of the creative area as an in-house agency program to reduce freelance costs and avoid information leakage.",
          "Structured the marketing action plan and yearly goals for 2022.",
          "Increased appointment requests by redesigning web pages based on research into design trends and consumer psychology.",
          "Improved conversion of new users to patients through microsites built around geolocated audiences and clearer value propositions."
        ]
      },
      {
        title: "Goals as UI|UX Designer",
        bullets: [
          "Increased appointment requests by redesigning the company’s web pages using insights from design trends and consumer psychology.",
          "Improved conversion of new users into patients with microsites tailored to specific audience needs and value propositions."
        ]
      }
    ],
    liveSitesTitle: "Live sites",
    liveSitesDescription:
      "These are some live projects I have helped with. For non-disclosure reasons, I can’t show the rest of them.",
    liveSites: [
      { title: "Vein Treatment Clinic", subtitle: "Product Designer", href: "https://www.veintreatmentclinic.com/", image: vipSiteVtc },
      { title: "Pain Treatment Specialists", subtitle: "Product Designer", href: "https://www.paintreatmentspecialists.com/", image: vipSitePts },
      { title: "Vein Doctor For Women", subtitle: "Product Designer", href: "https://www.veindoctor.com/", image: vipSiteVeinDoctor },
      { title: "VIP Medical Group", subtitle: "Product Designer", href: "https://www.vipmedicalgroup.com/", image: vipSiteVip },
      { title: "Neck Center NY", subtitle: "Product Designer", href: "https://neckcenterny.com/", image: vipSiteNeck },
      { title: "Back Center NY", subtitle: "Product Designer", href: "https://www.backcenterny.com/", image: vipSiteBack }
    ]
  },
  "camara-de-comercio": {
    slug: "camara-de-comercio",
    title: "Cámara de Comercio",
    role: "Brand consultant",
    years: "2020",
    heroTitle: "Branding Consultant at Cámara de Comercio",
    tags: ["Brand Strategy", "Design Systems", "Consulting"],
    sections: [
      {
        title: "Goals",
        bullets: [
          "Led brand-consulting work focused on clarifying the program narrative and making the initiative easier to communicate across stakeholders.",
          "Translated research findings into clear visual and messaging directions for presentations, communication assets, and activation moments.",
          "Supported strategic storytelling for ESCALA Magdalena so the closing experience felt coherent, persuasive, and aligned with the program’s goals.",
          "Created design support materials that helped the team present outcomes with more clarity and consistency.",
          "Worked across research, messaging, and visual communication to make the initiative more understandable for partners and audiences."
        ]
      }
    ],
    liveSitesTitle: "Outcome",
    liveSitesDescription: "The program was successful and closed. This is the video of the closing experience.",
    liveSites: [
      { title: "ESCALA Magdalena", subtitle: "Market research, testing, design support", href: "https://www.youtube.com/watch?v=hX-MoZnMoJk", image: camaraOutcome }
    ]
  },
  "visit-santa-marta": {
    slug: "visit-santa-marta",
    title: "Visit Santa Marta",
    role: "Brand Consultant",
    years: "2020",
    heroTitle: "Branding Consultant at Visit Santa Marta",
    tags: ["Brand Strategy", "Storytelling", "Research"],
    sections: [
      {
        title: "Goals",
        bullets: [
          "Led a communicational redesign for Brand Colombia, the agency in charge of advertising and selling Visit Santa Marta, to align internal perceptions with target expectations and improve results.",
          "Delivered a complete brand-book guide including archetype, enneatype, style and tone, keywords, and possible applications.",
          "Delivered a full storytelling analysis and plan based on internal research, including wow moments in the customer journey and the communicational style of the brand."
        ]
      }
    ],
    liveSitesTitle: "Live sites",
    liveSitesDescription: "These are some live projects I have helped with.",
    liveSites: [
      { title: "Website", subtitle: "Market research, testing, design support", href: "https://visitsantamarta.com/en", image: visitWebsite },
      { title: "Instagram", subtitle: "Market research, testing, design support", href: "https://www.instagram.com/visitsantamarta/", image: visitInstagram }
    ]
  },
  "low-carbon-city": {
    slug: "low-carbon-city",
    title: "Low Carbon City",
    role: "Official of communications",
    years: "2019",
    heroTitle: "Official of Communications at Low Carbon City",
    tags: ["Communications", "Events", "Design Support"],
    sections: [
      {
        title: "Goals",
        bullets: [
          "Executed the full communications plan for the IV Low Carbon City World Forum, a global event led by citizens to spread knowledge and promote innovative solutions for resilient low-carbon cities.",
          "Executed the full communications plan for La Mesa Latina in Medellín, an event led by Ciudad Emergente that connected Venezuelan and Colombian communities through cultural understanding."
        ]
      }
    ],
    liveSitesTitle: "Live sites",
    liveSitesDescription: "These are some live projects I have helped with.",
    liveSites: [
      { title: "La Mesa Latina", subtitle: "Design support", href: "https://ciudademergente.org/kit-la-mesa-latina", image: lccMesa },
      { title: "4th Low Carbon City World Forum", subtitle: "Design Support", href: "https://costarica.lowcarbon.city/en/", image: lccForum },
      { title: "Low Carbon City - Official Website", subtitle: "Design support", href: "https://lowcarboncity.org/", image: lccWebsite }
    ]
  },
  aiesec: {
    slug: "aiesec",
    title: "AIESEC",
    role: "Vice President of External Relationships",
    years: "2015 - 2018",
    heroTitle: "Vice President of External Relationships at AIESEC",
    tags: ["Leadership", "Partnerships", "Growth"],
    sections: [
      {
        title: "Goals",
        bullets: [
          "Led a goal-oriented team of 10 people focused on finding candidates who wanted to develop leadership skills through volunteering experiences.",
          "Achieved a goal of 1000 new leads as prospects for outgoing volunteering or professional programs within one year.",
          "Developed a pipeline of three new leaders for the upcoming 2018 executive board.",
          "Participated in the Congress Committee for the AIESEC International Congress in Cartagena, helping shape the future of the organization through value-based leadership and cultural understanding."
        ]
      }
    ]
  }
};
