export type ProjectIntroBlock = {
  title: string;
  body: string;
};

export type ProjectImageCard = {
  title: string;
  image: string;
  description?: string;
};

export type ProjectTextCard = {
  title: string;
  body: string;
};

export type ProjectResultCard = {
  title: string;
  bullets: string[];
};

export type ProjectProcessBlock = {
  title: string;
  bullets: string[];
};

export type MicrositesSolutionGroup = {
  title: string;
  items: string[];
  goal: string;
  cards: ProjectImageCard[];
};

export type MicrositesProjectDetail = {
  kind: "microsites";
  title: string;
  heroLaptopImage: string;
  heroPhoneImage?: string;
  introBlocks: ProjectIntroBlock[];
  solutionTitle: string;
  solutionBody: string;
  solutionGroups: MicrositesSolutionGroup[];
  strategyTitle: string;
  strategyItems: string[];
  hypothesisTitle: string;
  hypothesisBody: string;
  processBlocks: ProjectProcessBlock[];
  results: string[];
};

export type StandardProjectDetail = {
  kind: "standard";
  title: string;
  heroLaptopImage: string;
  introBlocks: ProjectIntroBlock[];
  ctaLabel?: string;
  ctaHref?: string;
  solutionTitle: string;
  solutionBody: string;
  solutionImage: string;
  featureCards?: ProjectImageCard[];
  secondaryFeatureHeading?: string;
  secondaryFeatureImage?: string;
  secondaryFeatureCards?: ProjectImageCard[];
  hypothesisTitle: string;
  hypothesisBody: string;
  strategyTitle: string;
  strategyItems: string[];
  processBlocks: ProjectProcessBlock[];
  results: string[];
};

export type AnalysisProjectDetail = {
  kind: "analysis";
  title: string;
  heroLaptopImage: string;
  introBlocks: ProjectIntroBlock[];
  problemTitle?: string;
  problemBullets?: string[];
  hypothesisTitle: string;
  hypothesisBody: string;
  strategyTitle?: string;
  strategyBody?: string;
  strategicApproachTitle: string;
  strategicCards: ProjectTextCard[];
  secondaryStrategicCards?: ProjectTextCard[];
  expectedImpactTitle: string;
  expectedImpactItems: string[];
  summaryTitle: string;
  summaryParagraphs: string[];
  summaryBullets?: string[];
  summaryPromptTitle?: string;
  summaryPromptItems?: string[];
  resultCards?: ProjectResultCard[];
  results: string[];
};

export type BuilderProjectDetail = {
  kind: "builder";
  title: string;
  heroLaptopImage: string;
  introBlocks: ProjectIntroBlock[];
  ctaLabel?: string;
  ctaHref?: string;
  splitBandTitleLeft: string;
  splitBandBodyLeft: string;
  splitBandTitleRight: string;
  splitBandBodyRight: string;
  strategicApproachTitle: string;
  strategicCards: ProjectTextCard[];
  secondaryStrategicCards?: ProjectTextCard[];
  expectedImpactTitle: string;
  expectedImpactBody: string;
  summaryTitle: string;
  summaryParagraphs: string[];
  results: string[];
};

export type ProjectDetail =
  | MicrositesProjectDetail
  | StandardProjectDetail
  | AnalysisProjectDetail
  | BuilderProjectDetail;

export const projectDetails: Record<string, ProjectDetail> = {
  "pts-microsites": {
    kind: "microsites",
    title: "Microsites For Pain Treatment Specialists",
    heroLaptopImage: "/Projects/Group%2065.png",
    introBlocks: [
      {
        title: "The Problem",
        body:
          "In PTS countless numbers of pain conditions are treated for which there are at least two or three treatments for each one, the result is less bookings due to the analysis paralysis of so much information since it confuses the brain."
      },
      {
        title: "The Objective",
        body:
          "Creating geolocated and segmented iterations of the same digital product, changing its brand and content to adequately reach the target based on their needs, avoiding analysis paralysis."
      }
    ],
    solutionTitle: "The Solution",
    solutionBody:
      "Create microsites having PTS as umbrella brand. Each microsite will be based on the specific needs of possible the patients, segmenting treatments, conditions and locations (combined with SEO strategy).",
    solutionGroups: [
      {
        title: "Neck pain geo-targeted audience:",
        items: [
          "Neck Center New York (Key words on main URL)",
          "Neck Center New Jersey (Key words on main URL)"
        ],
        goal: "Only neck pain searches related (SEO analysis)",
        cards: [
          {
            title: "Neck Center New Jersey",
            image: "/Projects/Projects/Group%205.png"
          },
          {
            title: "Neck Center New York",
            image: "/Projects/Projects/Rectangle%205.png"
          }
        ]
      },
      {
        title: "Back pain geo-targeted audience:",
        items: [
          "Back Center New York (Key words on main URL)",
          "Back Center New Jersey (Key words on main URL)"
        ],
        goal: "Only back pain searches related (SEO analysis)",
        cards: [
          {
            title: "Back Center New York",
            image: "/Projects/Projects/Rectangle%205-1.png"
          },
          {
            title: "Back Center New Jersey",
            image: "/Projects/Projects/Rectangle%205-2.png"
          }
        ]
      },
      {
        title: "Lead generation through free services offering",
        items: ["Spineline: Free call to receive pain expert advice for your symptoms"],
        goal: "Lead generation page to attrack new patients to the clinics",
        cards: [
          {
            title: "Spineline - Lead form",
            image: "/Projects/Projects/Group%205-1.png"
          },
          {
            title: "Free services (Insurance verification + Spine pain medical advice)",
            image: "/Projects/Rectangle%205-6.png"
          }
        ]
      },
      {
        title: "Lead generation through symptoms search",
        items: ["Spine & Joint: Key word on url + related content"],
        goal: "Back & knee pain related (Most popular keywords) Address symptoms in an easy-understandable way",
        cards: [
          {
            title: "Spineline - Lead form",
            image: "/Projects/Projects/Group%205-2.png"
          },
          {
            title: "Free services (Insurance verification + Spine pain medical advice)",
            image: "/Projects/Rectangle%205-6.png"
          }
        ]
      }
    ],
    hypothesisTitle: "Hypothesis",
    hypothesisBody:
      "The brain is lazy and the fewer options to choose from, the better. First, it can choose faster, and second, the more likely it is that when it comes to a purchase it will be done (Cognitive Biases). If we divide the information we make the cognitive load lighter to the brain.",
    strategyTitle: "The Strategy",
    strategyItems: [
      "Maintain the same value proposition",
      "Different brands with the same purpose",
      "Sales train for the call center force to answer calls and book appointments with the new brands",
      "SEO strategy to create the content"
    ],
    processBlocks: [
      {
        title: "Research",
        bullets: ["SEO Research", "Brainstorming", "Data analysis"]
      },
      {
        title: "Ideation",
        bullets: [
          "Concept iteration",
          "Buyer persona conception",
          "Content creation (SEO based)",
          "Information architecture"
        ]
      },
      {
        title: "Product",
        bullets: ["Wireframing", "Brand creation", "Visual exploration", "Production"]
      }
    ],
    results: [
      "Bounce Rate between 63.7% and 72.8%",
      "New users between 1500 and 2800 approx. per month",
      "New leads 20% conversion rate"
    ]
  },
  "vein-doctor-for-women": {
    kind: "standard",
    title: "Vein Doctor For Women",
    heroLaptopImage: "/Projects/Vein%20Doctor%20For%20Women/Group%2066.png",
    introBlocks: [
      {
        title: "The Opportunity",
        body:
          "In the United States there are approximately 25 million women who suffer from vascular diseases in the legs that, without being asymptomatic, are often misdiagnosed as a simple cosmetic problem."
      },
      {
        title: "The Objective",
        body:
          "Create a digital product that allows women to feel identified not only with the content but with the medical staff (Use cognitive bias to help the purchase decision)."
      }
    ],
    solutionTitle: "The Solution",
    solutionBody:
      "A medical platform by women for women where they can find educational content specialized in them and their bodies. As well as an e-commerce-type experience to increase the online bookings and reduce the percentage of no-shows in the initial appointments.",
    solutionImage: "/Projects/Vein%20Doctor%20For%20Women/Projects/Content%20card%20-%20Desktop.png",
    featureCards: [
      {
        title: "1. Women who treat and understand the patient",
        description: "Showing female doctors to emphasize the value proposition",
        image: "/Projects/Vein%20Doctor%20For%20Women/Projects/Rectangle%205.png"
      },
      {
        title: "2. Relevant data",
        description: "Showing how the user could be part of the numbers to increase the engagement",
        image: "/Projects/Vein%20Doctor%20For%20Women/Projects/Rectangle%205-1.png"
      },
      {
        title: "3. What makes the user unique",
        description: "Varicose veins can come with pregnancy, something that only women can relate",
        image: "/Projects/Vein%20Doctor%20For%20Women/Projects/Group%205.png"
      }
    ],
    hypothesisTitle: "Hypothesis",
    hypothesisBody:
      "Medical content can also be segmented and promoted based on the demographic and psychological characteristics of the target, not separated by only physiological needs.",
    strategyTitle: "The Strategy",
    strategyItems: [
      "Evergreen content",
      "Doctor’s testimonials as patients",
      "E-commerce experience as booking form"
    ],
    processBlocks: [
      { title: "Research", bullets: ["Brainstorming", "Market research", "User research", "Trending research"] },
      { title: "Ideation", bullets: ["Data analysis", "Buyer persona", "Customer journey"] },
      { title: "Product", bullets: ["Wireframing", "Visual exploration", "Testing", "Production"] }
    ],
    results: [
      "Bounce rate under 52%",
      "New users 2226 (Different devices)",
      "Goal completison of 1000 direct leads"
    ]
  },
  "insurance-coverage-online": {
    kind: "standard",
    title: "Insurance Coverage Online (For PTS & VTC)",
    heroLaptopImage: "/Projects/Insurance%20Coverage%20Online/Group%2062.png",
    introBlocks: [
      {
        title: "The Problem",
        body:
          "Sometimes the call center force type a wrong number from the insurance ID of the new lead, making the process of starting the treatment slow and starting the experience with a bad and avoidable situation."
      },
      {
        title: "The Objective",
        body:
          "Give a single online space for the user to enter the insurance information and confirm it themself, making the insurance verification process faster to start the treatment."
      }
    ],
    solutionTitle: "The Solution",
    solutionBody:
      "Create a simple 3-step form for the user to enter the insurance information and confirm it themself. This information will pass to the call center team to start the booking process and get the user an appointment as soon as possible.",
    solutionImage: "/Projects/Rectangle%205-6.png",
    hypothesisTitle: "Hypothesis",
    hypothesisBody:
      "Giving the user the responsibility of entering the information themself simulating an online booking/purchase, we will make sure the information will be correct when entering the call center.",
    strategyTitle: "The Strategy",
    strategyItems: [
      "Quick 3-step form",
      "Data feeding the call center systems the whole day",
      "Making the user accountable for their experience"
    ],
    processBlocks: [
      { title: "Research", bullets: ["Brainstorming", "Market research", "User research", "Trending research"] },
      { title: "Ideation", bullets: ["Data analysis", "Buyer persona", "Customer journey"] },
      { title: "Product", bullets: ["Wireframing", "Visual exploration", "Testing", "Production"] }
    ],
    results: ["Less than 3 mistakes in 100 new leads", "Increase in first appointments 13%"]
  },
  "vein-treatment-clinic": {
    kind: "standard",
    title: "Vein Treatment Clinic Main Website Redesign",
    heroLaptopImage: "/Projects/Vein%20Treatment%20Clinic%20Main%20Website%20Redesign/Group%2063.png",
    introBlocks: [
      {
        title: "The Problem",
        body:
          "Medical content can be boring, especially when it comes to educating an audience that often does not know what they suffer from and only knows a few symptoms. How do we educate and engage them?"
      },
      {
        title: "The Objective",
        body:
          "Create a digital product that improves the user experience to increase online booking without leaving medical content behind."
      }
    ],
    solutionTitle: "The Solution",
    solutionBody:
      "Redesign of the homepage and general restructuring of the site using cognitive biases and bases of behavioral economics to create a space to teach patients about their condition and encourage them do online bookings.",
    solutionImage: "/Projects/Rectangle%205-4.png",
    hypothesisTitle: "Hypothesis",
    hypothesisBody:
      "Through a deep knowledge of our client not only as a patient but as a user and consumer of multiple information, we can transform the brand's communication to be more attractive and communicative.",
    strategyTitle: "The Strategy",
    strategyItems: [
      "Show in a simple way our value proposition with call to actions such as free Insurance verification, IVY league Doctors & results",
      "Testimonials as storytelling",
      "Minimize the temporal perception of the results with before & after pictures"
    ],
    processBlocks: [
      { title: "Research", bullets: ["Brainstorming", "Market research", "User research", "Trending research"] },
      {
        title: "Ideation",
        bullets: ["Conceptualization", "Buyer persona building", "Information architecture", "Patient storytelling"]
      },
      { title: "Product", bullets: ["Wireframing", "Visual exploration", "Testing", "Production"] }
    ],
    results: [
      "Bounce rate under 65% (New design) vs 85.4% (Old design)",
      "Increase of online booking 207% more vs old design"
    ]
  },
  "clear-vision-for-you": {
    kind: "standard",
    title: "Clear Vision For You",
    heroLaptopImage: "/Projects/Clear%20Vision%20For%20You/Group%2064.png",
    introBlocks: [
      {
        title: "The Opportunity",
        body:
          "Connecting the disconnected: Our eye health journey starts when we are kids and remains until we are +80 years old. How can we create a site where the user can find each step of this journey to understand the next step to take related to their eye health?"
      },
      {
        title: "The Objective",
        body:
          "Connect in a single website myopia, dry eye, contact lenses, laser surgery and cataracts as a coherent journey for the user to understand each stage of their visual health and increase the brand recognition through the services J&J has to offer."
      }
    ],
    solutionTitle: "The Solution",
    solutionBody:
      "Create a single-source-of-truth website with all the information a user could need, no matter what stage they are experiencing and present how J&J could be their special partner in each step with the brand services that solve every eye health need.",
    solutionImage: "/Projects/Clear%20Vision%20For%20You/Projects/Content%20card%20-%20Desktop.png",
    featureCards: [
      {
        title: "1. Navigation experience that unifies all topics",
        image: "/Projects/Clear%20Vision%20For%20You/Projects/Rectangle%205.png"
      },
      {
        title: "2. Doctor finder if anyone needs to be diagnosed or needs a new prescription",
        image: "/Projects/Clear%20Vision%20For%20You/Projects/Rectangle%205-1.png"
      },
      {
        title: "3. Presenting all J&J services to help the user understand how we can be there in every step",
        image: "/Projects/Clear%20Vision%20For%20You/Projects/Group%205.png"
      }
    ],
    hypothesisTitle: "Hypothesis",
    hypothesisBody:
      "Medical content can also be segmented and promoted based on the demographic and psychological characteristics of the target, not separated by only physiological needs.",
    strategyTitle: "The Strategy",
    strategyItems: [
      "Evergreen content",
      "Conditions and treatment at the same place",
      "Digital experience to make easier to find a doctor"
    ],
    processBlocks: [
      { title: "Research", bullets: ["Brainstorming", "Market research", "User research", "Trending research"] },
      { title: "Ideation", bullets: ["Data analysis", "Buyer persona", "Customer journey"] },
      { title: "Product", bullets: ["Wireframing", "Visual exploration", "Testing", "Production"] }
    ],
    results: ["Maintain the unified journey across services", "Strengthen brand recognition through interconnected care paths"]
  },
  "acuvue-contact-lenses": {
    kind: "standard",
    title: "ACUVUE Contact Lenses",
    heroLaptopImage: "/Projects/ACUVUE%20Contact%20Lenses/Group%2051.png",
    introBlocks: [
      {
        title: "The Opportunity",
        body:
          "Connecting the disconnected: A brand with a worldwide presence (+60 countries and territories) could gather all the efforts to have a visual consistency around the world and improve its visual recognition and give all the regions the needed tools to improve the local goals without being disconnected from the global team/goals."
      },
      {
        title: "The Objective",
        body:
          "Connect with a single design system all the ACUVUE websites to create a visual coherency so all the users around the world could recognise the brand easily."
      }
    ],
    solutionTitle: "The Solution",
    solutionBody:
      "Create a single-source-of-truth design system with all the components needed to satisfy all markets needs. Examples with ACUVUE in Japan, Colombia and USA.",
    solutionImage: "/Projects/ACUVUE%20Contact%20Lenses/Projects/Rectangle%20143531.png",
    secondaryFeatureHeading: "Flexible Design System",
    secondaryFeatureImage: "/Projects/ACUVUE%20Contact%20Lenses/Projects/Content%20card%20-%20Desktop%202.png",
    featureCards: [
      {
        title: "1. Basic components: foundational, building block design elements",
        description: "Examples: Buttons, input fields, tabs",
        image: "/Projects/ACUVUE%20Contact%20Lenses/Projects/Rectangle%205.png"
      },
      {
        title: "2. Content providing components: highlight copy, media, and key information",
        description: "Examples: Hero banners, cards, text content block",
        image: "/Projects/ACUVUE%20Contact%20Lenses/Projects/Rectangle%205-1.png"
      },
      {
        title: "3. Global page components: used universally for key functions, such as navigation",
        description: "Examples: Global navigation, breadcrumbs, surveys",
        image: "/Projects/ACUVUE%20Contact%20Lenses/Projects/Group%205.png"
      }
    ],
    secondaryFeatureCards: [
      {
        title: "4. Experience-specific components: unique, non-universal specific use-case components",
        description: "Examples: Professional fitting calculators, Laser Vision cost calculator",
        image: "/Projects/ACUVUE%20Contact%20Lenses/Projects/Rectangle%205-2.png"
      },
      {
        title: "5. Doctor finder experience: lead the user to continue the experience outside the website and finish the purchase intent",
        image: "/Projects/ACUVUE%20Contact%20Lenses/Projects/Group%205-1.png"
      },
      {
        title: "6. Creating new interactivity tools like product quiz to increase the user engagement (Gen Z and Alpha)",
        image: "/Projects/ACUVUE%20Contact%20Lenses/Projects/Rectangle%205-3.png"
      }
    ],
    hypothesisTitle: "Hypothesis",
    hypothesisBody:
      "Even with all the different needs across the markets, with the correct components, we can unify all ACUVUE around the world. This design system needs to be dynamic and flexible but visually coherent at the same time.",
    strategyTitle: "The Strategy",
    strategyItems: [
      "Evergreen content components",
      "Tools to increase the interactivity with the new website",
      "Digital experience to make easier to find a doctor that prescribes ACUVUE (Global strategy)"
    ],
    processBlocks: [
      { title: "Research", bullets: ["Market research", "Brainstorming", "User research", "Trending research"] },
      { title: "Ideation", bullets: ["Data analysis", "Buyer persona", "Customer journey"] },
      { title: "Product", bullets: ["Wireframing", "Visual exploration", "Testing", "Production"] }
    ],
    results: ["75% reduced design time and costs", "50% less design defects", "2x faster time to market"]
  },
  "geo-optimization-acuvue": {
    kind: "analysis",
    title: "GEO optimization for ACUVUE",
    heroLaptopImage: "/Projects/GEO%20optimization%20for%20ACUVUE/Group%2052.png",
    introBlocks: [
      {
        title: "The Opportunity",
        body:
          "As AI assistants become a primary entry point for product discovery, ACUVUE faced a critical visibility gap. When testing real user queries like “best contact lenses for screen time” and “contacts for dry eyes all day”, competitors were consistently surfaced first, despite ACUVUE’s strong product innovation. This exposed a key issue: ACUVUE product pages were optimized for traditional SEO, but not for how AI systems interpret, prioritize, and retrieve information."
      },
      {
        title: "The Objective",
        body:
          "To improve ACUVUE’s share of voice in AI-driven discovery by optimizing product pages for generative search, enabling the brand to capture non-branded, problem-based queries and drive measurable growth in engagement and trial conversion."
      }
    ],
    problemTitle: "The problem:",
    problemBullets: [
      "Product content relied heavily on technical, branded terminology",
      "Pages lacked direct answers to real user questions",
      "Information was not structured for AI retrieval",
      "Benefits were not mapped to user intent like screen fatigue, dryness, and long wear discomfort"
    ],
    hypothesisTitle: "Hypothesis & Strategy",
    hypothesisBody:
      "If we redesign ACUVUE product pages using Generative Engine Optimization principles, aligning content with real user language, structuring it for AI retrieval, and embedding it within UX components, then AI assistants will prioritize ACUVUE as a source, increasing visibility and influencing early-stage decisions.",
    strategicApproachTitle: "Strategic Approach",
    strategicCards: [
      {
        title: "1. From Brand Language → User Language",
        body:
          "We translated technical features into human, intent-driven benefits so pages align with how users naturally search and how AI systems respond."
      },
      {
        title: "2. Answer-First Content Design",
        body:
          "We restructured pages to directly match high-intent queries with clear, scannable answer blocks instead of burying information."
      },
      {
        title: "3. Semantic Structure for LLMs",
        body:
          "We introduced question-based headings, stronger hierarchy, and shorter meaningful blocks that AI systems can reliably extract."
      }
    ],
    secondaryStrategicCards: [
      {
        title: "4. UX + GEO Integration",
        body:
          "Content was connected to educational sections, FAQ-style answers, and guided next steps to improve both clarity and conversion."
      },
      {
        title: "5. Early Funnel Optimization",
        body:
          "We captured broad, non-branded intent around dry eyes, screen fatigue, and long wear discomfort before users searched for a specific brand."
      }
    ],
    expectedImpactTitle: "Expected Impact",
    expectedImpactItems: [
      "Increased visibility in AI-generated search results",
      "Higher ranking for conversational, problem-based queries",
      "Improved engagement and scroll depth",
      "Stronger conversion from awareness to trial",
      "Better alignment across SEO + GEO + UX"
    ],
    summaryTitle: "Summary of the process:",
    summaryParagraphs: [
      "We re-structured the content into semantic, answer-ready blocks and rewrote paragraphs in plain language so AI can summarize them accurately.",
      "We added “who it’s for,” “how it works,” and “benefits” sections aligned with common AI query intent and transformed marketing claims into informational descriptions that LLMs can trust."
    ],
    summaryBullets: [
      "Added multiple H2/H3 question-match headings AI models often use",
      "Ensured clarity, hierarchy, and completeness across all content"
    ],
    summaryPromptTitle: "This makes the page far more likely to be referenced when users ask:",
    summaryPromptItems: [
      "Best contact lenses for digital eye strain",
      "What contact lenses filter blue light?",
      "Are ACUVUE MAX 1-Day good for dry eyes?",
      "Which daily contacts are best for screen use?"
    ],
    results: [
      "AI Answer Inclusion Rate: 18% → 52%",
      "Top 3 mentions in AI responses: Rare (<10%) → 41%",
      "Query coverage (problem-based searches): ~25 queries → ~60 queries",
      "Organic traffic from non-branded queries: +28%",
      "New users on page: +22%",
      "Scroll depth to GEO sections: 46% → 71%",
      "Time on page: 1m 12s → 1m 32s",
      "FAQ / answer block interaction: +38%",
      "CTA clicks (trial / find a doctor): +17%",
      "Conversion rate (page → action): 2.8% → 3.4%"
    ]
    ,
    resultCards: [
      {
        title: "1. AI Answer Inclusion Rate",
        bullets: ["Before: 18%", "After: 52%", "Impact: +34 pts ^"]
      },
      {
        title: "2. Top 3 Mentions in AI Responses",
        bullets: ["Before: Rare (<10%)", "After: 41%", "Impact: Major gain ^"]
      },
      {
        title: "3. Query Coverage (Problem-based searches)",
        bullets: ["Before: ~25 queries", "After: ~60 queries", "Impact: +140% ^"]
      },
      {
        title: "4. Organic Traffic (Non-branded queries)",
        bullets: ["Before: Baseline", "After: +28%", "Impact: Increase ^"]
      },
      {
        title: "5. New Users on Page",
        bullets: ["Before: --", "After: +22%", "Impact: Increase ^"]
      },
      {
        title: "6. Scroll Depth (to GEO sections)",
        bullets: ["Before: 46%", "After: 71%", "Impact: +25 pts ^"]
      },
      {
        title: "7. Time on Page",
        bullets: ["Before: 1m 12s", "After: 1m 32s", "Impact: +28% ^"]
      },
      {
        title: "8. FAQ / Answer Block Interaction",
        bullets: ["Before: Minimal", "After: +38%", "Impact: Strong engagement ^"]
      },
      {
        title: "9. CTA Clicks (Trial / Find a Doctor)",
        bullets: ["Before: Baseline", "After: +17%", "Impact: Increase"]
      },
      {
        title: "10. Conversion Rate (Page -> Action)",
        bullets: ["Before: 2.8%", "After: 3.4%", "Impact: +21%"]
      }
    ]
  },
  "geo-optimization-jjv-pro": {
    kind: "analysis",
    title: "GEO optimization for JJV PRO",
    heroLaptopImage: "/Projects/GEO%20optimization%20for%20JJV%20PRO/Group%2053.png",
    introBlocks: [
      {
        title: "The Opportunity",
        body:
          "PureSee One had strong product value, but low discoverability in AI-driven search environments. When testing queries like “comfortable daily contact lenses”, “best contacts for sensitive eyes”, and “easy to wear contact lenses for beginners”, the brand was rarely surfaced in AI-generated responses."
      },
      {
        title: "The Objective",
        body:
          "To increase PureSee One’s visibility and engagement by transforming its product page into a GEO-optimized, user-intent-driven experience, aligning content with real search behavior, improving AI discoverability, and driving higher trial and conversion rates."
      }
    ],
    problemTitle: "The problem:",
    problemBullets: [
      "Content focused on product description vs. user problems",
      "Limited alignment with conversational queries",
      "No answer-ready sections for AI retrieval",
      "Weak differentiation in early funnel discovery",
      "UX did not guide users clearly from exploration to action"
    ],
    hypothesisTitle: "Hypothesis & Strategy",
    hypothesisBody:
      "If PureSee One’s product page is redesigned using GEO principles, prioritizing simplicity, accessibility, and user-friendly language, then the brand will improve its presence in AI-driven discovery and increase engagement among new users.",
    strategicApproachTitle: "Strategic Approach",
    strategicCards: [
      {
        title: "1. Problem-First Positioning",
        body:
          "Shift from product-led to user-led entry points around comfort for sensitive eyes, ease of use for beginners, and everyday convenience."
      },
      {
        title: "2. Simplified, Human Language",
        body:
          "PureSee One benefits were reframed into clear, approachable messaging focused on comfort, simplicity, and confidence for new users."
      },
      {
        title: "3. Answer-Ready Content",
        body:
          "We introduced sections aligned with real queries such as whether the lenses are good for sensitive eyes, easy for beginners, and comfortable all day."
      }
    ],
    secondaryStrategicCards: [
      {
        title: "4. GEO-Friendly Structure",
        body:
          "Question-based headings, clear scannable sections, and short meaningful paragraphs improved both UX readability and AI extraction."
      },
      {
        title: "5. UX Integration",
        body:
          "Content was aligned with trial CTAs, educational sections, and guided next steps to reduce friction for first-time users."
      }
    ],
    expectedImpactTitle: "Expected Impact",
    expectedImpactItems: [
      "Increased visibility in AI-generated search results",
      "Higher ranking for conversational, problem-based queries",
      "Improved engagement and scroll depth",
      "Stronger conversion from awareness → trial",
      "Better alignment across SEO + GEO + UX"
    ],
    summaryTitle: "Summary of the process:",
    summaryParagraphs: [
      "We redesigned the PureSee One product page using Generative Engine Optimization principles, aligning content with real user queries and structuring it for both AI retrieval and human readability."
    ],
    summaryBullets: [
      "Shifted from product-led to problem-first messaging",
      "Simplified technical language into clear, user-friendly benefits",
      "Introduced answer-ready content blocks based on real search queries",
      "Restructured content using question-based headings and semantic hierarchy",
      "Integrated content with UX components and conversion flows"
    ],
    results: [
      "+32 pts AI answer inclusion",
      "+150% query coverage",
      "+24% non-branded traffic",
      "+26 pts scroll depth",
      "+30% time on page",
      "+15% CTA clicks",
      "+25% conversion rate"
    ],
    resultCards: [
      {
        title: "1. AI Answer Inclusion",
        bullets: ["Before: Limited visibility", "After: +32 pts", "Impact: stronger AI surfacing"]
      },
      {
        title: "2. Query Coverage",
        bullets: ["Before: narrow intent match", "After: +150%", "Impact: broader discovery reach"]
      },
      {
        title: "3. Non-branded Traffic",
        bullets: ["Before: low acquisition", "After: +24%", "Impact: better early-funnel capture"]
      },
      {
        title: "4. Scroll Depth",
        bullets: ["Before: weaker engagement", "After: +26 pts", "Impact: deeper content interaction"]
      },
      {
        title: "5. Time on Page",
        bullets: ["Before: shorter sessions", "After: +30%", "Impact: stronger sustained attention"]
      },
      {
        title: "6. CTA Clicks",
        bullets: ["Before: lower action rate", "After: +15%", "Impact: more trial intent"]
      },
      {
        title: "7. Conversion Rate",
        bullets: ["Before: baseline conversion", "After: +25%", "Impact: better page-to-action flow"]
      }
    ]
  },
  "japanese-learning-app": {
    kind: "builder",
    title: "Japanese learning app",
    heroLaptopImage: "/Projects/Japanese%20learning%20app/Group%2054.png",
    ctaLabel: "Check the app here",
    ctaHref: "https://japaneselearningapp.onrender.com/",
    introBlocks: [
      {
        title: "The Opportunity",
        body:
          "Learning Japanese (especially kanji) can feel overwhelming for beginners. Most apps prioritize memorization over understanding and progression, lack visual clarity and motivation loops, and feel repetitive and not engaging over time. At the same time, new tools like Codex unlock the ability to build products without traditional engineering workflows."
      },
      {
        title: "The Objective",
        body:
          "To design and build a Japanese learning app from scratch using AI-assisted development (vibe coding), creating an engaging and structured learning experience while exploring how designers can collaborate with AI to rapidly prototype and ship functional products."
      }
    ],
    splitBandTitleLeft: "Key Opportunity",
    splitBandBodyLeft:
      "Combine UX thinking + AI-assisted coding to create a learning experience that is both engaging for users and efficient to build.",
    splitBandTitleRight: "Hypothesis & Strategy",
    splitBandBodyRight:
      "If we leverage AI (Codex) as a development partner while applying UX principles to structure the experience, we can rapidly build a functional, user-friendly learning app that improves engagement and reduces friction for beginners.",
    strategicApproachTitle: "Strategic Approach",
    strategicCards: [
      {
        title: "1. Learning Experience First",
        body:
          "Designed the app around how people actually learn with progressive difficulty, reinforcement through practice and repetition, and a clear sense of progress."
      },
      {
        title: "2. Engagement Through Simplicity",
        body:
          "Used a clean minimal UI, friendly low-pressure interactions, and visual clarity over complexity to reduce cognitive overload."
      },
      {
        title: "3. Modular System Design",
        body:
          "Structured the app into clear sections such as All Kanji, Levels, Practice, and Lessons to support both exploration and guided learning."
      }
    ],
    secondaryStrategicCards: [
      {
        title: "4. AI-Assisted Development (Vibe Coding)",
        body:
          "Used Codex to generate and iterate on code, translated design ideas into functional components quickly, and iterated through prompting plus testing loops."
      },
      {
        title: "5. Iterative Build Process",
        body:
          "Designed, prompted, tested, and refined continuously, adjusting the UI based on real interaction feedback."
      }
    ],
    expectedImpactTitle: "Expected Impact",
    expectedImpactBody:
      "AI-Assisted (Vibe Coding) product development decreasing the production time from weeks to days.",
    summaryTitle: "Summary of the process:",
    summaryParagraphs: [
      "By leveraging AI-assisted development (vibe coding with Codex), I was able to significantly reduce the time required to design, build, prototype, and test a functional product, operating as a team of one across design and development.",
      "This approach transformed a traditionally multi-week, cross-functional workflow into a rapid, iterative, end-to-end process."
    ],
    results: [
      "End-to-end product built by a single designer",
      "No dependency on engineering handoffs",
      "~60–70% reduction in time to MVP",
      "From weeks to days (4 days in total vs 2–3 weeks in traditional workflow)",
      "Real-time iteration loop: Design → prompt → test → refine",
      "Faster decision-making through immediate validation with functional output",
      "Increased experimentation capacity with more ideas tested in less time"
    ]
  }
};
