// ---------------------------------------------------------------------------
// EDIT ME: every piece of copy, stat, and project on the site lives here.
// Components just render this data — change your content without touching
// component/CSS files.
// ---------------------------------------------------------------------------

// Cycled quickly by the loading-screen greeting, landing on the last word.
export const loaderGreetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Hallo",
  "こんにちは",
  "안녕하세요",
  "Namaste",
  "As-salamu alaykum",
];

export const profile = {
  name: "Talal Jawaid",
  initials: "TJ",
  role: "Senior Product & Service Designer",
  currentActivity: "Designing Experience",
  currentCompany: "RAKBANK",
  location: "Dubai, U.A.E",
  availableForWork: true,
  email: "talal.jawaid94@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/18FdtYvNjDv0KrE8LDlTzZVNO-G4qnA1c/view?usp=sharing",
  socials: [
    { label: "MEDIUM", href: "#" },
    { label: "CONTRA", href: "#" },
    { label: "LINKEDIN", href: "#" },
    { label: "TWITTER", href: "#" },
  ],
  tagline: "I designed and coded this website from scratch.",
};

export const heroContent = {
  headline: ["Lead Product", "with"],
  highlightWord: "Designer",
  // Blue italic text: the first part continues line 2 right after "with",
  // the rest sits on line 3.
  headlineItalicInline: "8+ Years of",
  headlineItalicNext: "Experience",
  // The name is rendered in the logo yellow + serif italic (see .hero-name).
  introBefore: "I'm ",
  introName: "Talal Jawaid",
  // Rest of line 1, then lines 2 and 3 (each is one line on desktop).
  introAfter: ", I work across strategy, systems and craft.",
  introLines: [
    "Helping teams navigate ambiguity, align around the right problem",
    "and ship scalable experiences across banking, SaaS, lifestyle and AI.",
  ],
};

// Odometer-style stats shown on the Home page
export const homeStats = [
];

// Simple stat cards (Home "intentions" section)
export const quickStats = [
  { icon: "clock", value: "8.8", label: "YEARS OF EXPERIENCE" },
  { icon: "achievement", currency: "dirham", value: "200M+", label: "REVENUE IMPACTED" },
  { icon: "handshake", value: "30%", label: "FASTER GO-TO MARKET" },
  { icon: "Users", value: "100K+", label: "USER RESEARCH" },
];

export const intentions = {
  eyebrow: "LEADERSHIP ✱ PRACTICE",
  headingBefore: "I turn ambiguity into direction",
  headingHighlight: "teams can build on",
  body: [
    "I work across product, engineering, operations and business to frame complex problems, align teams around what matters and create systems that scale.",
    "My role doesn’t stop at strategy. I stay close to the craft moving from service models and product flows into interaction details, prototypes and polished experiences that teams can confidently take to market.",
  ],
};

// Split across the two marquee rows on the Home page (first half / second half).
export const skills = [
  "UI DESIGN",
  "UX DESIGN",
  "PRODUCT STRATEGY",
  "EXPERIENCE STRATEGY",
  "COMPLEX PROBLEM FRAMING",
  "CROSS-FUNCTIONAL LEADERSHIP",
  "STAKEHOLDER MANAGEMENT",
  "SYSTEMS THINKING",
  "SERVICE DESIGN",
  "END-TO-END PRODUCT DESIGN",
  "UX RESEARCH & DISCOVERY",
  "INTERACTION DESIGN",
  "DESIGN SYSTEMS",
  "PRODUCT & UX AUDITS",
  "WORKSHOP FACILITATION",
  "DESIGN CRITIQUE & QUALITY",
  "MENTORING & DESIGN LEADERSHIP",
  "DATA-INFORMED DESIGN",
  "AI-ASSISTED DESIGN WORKFLOWS",
  "RAPID PROTOTYPING",
  "DESIGN-TO-CODE COLLABORATION",
  "REGULATED & ENTERPRISE UX",
  "ALIGNING CROSS-FUNCTIONAL TEAMS",
  "CONNECTING SYSTEMS & JOURNEYS",
  "FIGMA",
  "FRAMER",
  "PROTOTYPING",
  "CLAUDE",
  "COPILOT",
];

// Each case study drives both its Home-page card AND its full /case-study/:id
// page (see src/pages/CaseStudy.jsx). Every field below is a placeholder —
// swap in your own project's details. Fields you leave out just don't
// render (e.g. skip `keyFact`, `keyChallenges`, or `liveUrl` if you don't
// have one for a given project).
export const caseStudies = [
  {
    id: "case-study-one",
    // Hidden from the home page list, hero teaser, and "next case study"
    // suggestions while the write-up is still in progress — the page itself
    // still works at /case-study/case-study-one. Remove this line to bring
    // it back everywhere.
    hidden: true,
    company: "RAKBANK",
    companyInitial: "R",
    tag: "RECENTLY ADDED",
    title: "Transformed a 14-day, 30-document Business Titanium Card application into a 4-minute digital approval journey",
    year: "2026",
    locked: true,
    // Cosmetic-only gate (matches the reference site's NDA pattern) — this is
    // NOT real security, the password ships in the JS bundle. Set to null to
    // leave a case study open, or wire this up to a real backend later.
    password: "letmein",
    color: "#1d136b", // card frame + lock frame colour
    gradient: "linear-gradient(160deg, #1c2b6b 0%, #2f5cff 45%, #f0c14b 100%)",

    // Per-project accent palette — swap these to give each case study its
    // own flavor. Falls back to the site's default blue/gold if omitted.
    accent: {
      heading: "#699cff",
      quote: "#69ffca",
      points: "#e7ff7c",
    },

    meta: {
      role: "Lead Product Designer",
      team: "You + 1 engineer",
      duration: "3 months",
      liveUrl: null,
    },
    keyFact:
      "One line stating the standout fact about this product or client — scale, reach, or what makes it notable.",
    contributions: ["Product Design", "Product Strategy", "User Research"],

    overview:
      "A short summary of the problem, who the product was for, and the impact you had — two or three sentences that set up the rest of the case study.",
    challenge: {
      intro: "What was broken or missing before you got involved? Name the constraints that made this hard.",
      points: [
        "Constraint one: a short bold label, then the detail — technical, business, or user-facing.",
        "Constraint two: another named limitation and why it mattered.",
        "Constraint three: what the old system failed to do, in one line.",
      ],
    },
    solutions: [
      {
        heading: "Understanding the problem",
        body: "How you framed the problem — research, stakeholder conversations, data you pulled together before designing anything.",
      },
      {
        heading: "Exploring the solution space",
        body: "The directions you explored, what you tested, and why you converged on the approach you shipped.",
      },
      {
        heading: "Shipping and iterating",
        body: "How the solution rolled out — phased release, A/B test, or straight to production — and what you adjusted after real usage data came in.",
      },
    ],
    keyChallenges: [
      {
        problem: "A specific obstacle you ran into (technical constraint, conflicting stakeholder needs, etc).",
        solution: "How you resolved it, in one or two sentences.",
      },
      {
        problem: "A second obstacle worth calling out.",
        solution: "How you resolved it.",
      },
    ],
    outcomes: [
      "A measurable result — a percentage, a time saved, an adoption number.",
      "A second measurable or qualitative result.",
      "A third outcome, if you have one — otherwise delete this line.",
    ],
    lessons:
      "What you'd take into the next project — a principle, a process change, or something that surprised you.",
    conclusion:
      "A closing paragraph tying the problem, your approach, and the outcome together.",
  },
  {
    id: "case-study-two",
    company: "INVYGO",
    companyInitial: "I",
    tag: "CLIENT PROJECT",
    title: "Reducing billing Confusion to recover $100K+/month and cut contact rate by ~23%",
    year: "2024",
    locked: false, // temporarily open — was gated, set back to true when ready
    useExternalPreview: true, // opens meta.liveUrl in a new tab instead of the inner page — remove once the write-up is ready
    password: "letmein", // same cosmetic gate as case one; set null to open it
    color: "#1B1D1F",
    gradient: "linear-gradient(160deg, #2b1406 0%, #7a3b12 55%, #f0c14b 100%)",
    // Home-page card image — one crop per breakpoint (falls back to `gradient`
    // above if omitted). See the sizes/aspect ratios each was designed for in
    // the comment above the `images` block in Home.jsx.
    images: {
      phone: "/Banner/invygo/mobile.png",
      tablet: "/Banner/invygo/tablet.png",
      desktop: "/Banner/invygo/website.png",
    },

    meta: {
      role: "Product Designer",
      team: "Solo",
      duration: "2 months",
      liveUrl:
        "https://www.figma.com/proto/UILRkfjepNAkkBkSO0Fmyc/invygo---Billing-Clarification?page-id=0%3A1&node-id=0-269&viewport=105%2C148%2C0.49&t=4Svdm1GI12oF9J33-1&scaling=contain&content-scaling=fixed",
    },
    contributions: ["Product Design", "Design System", "Prototyping"],

    overview:
      "Redesigned the billing experience to make charges easier to understand, reduce avoidable support contacts, and improve revenue recovery.",
    challenge: { intro: "Describe the friction or business problem you were solving." },
    solutions: [
      { heading: "The Process", body: "Walk through discovery, iterations, and key decisions." },
      { heading: "The Result", body: "Share the shipped outcome and the metrics that moved." },
    ],
    outcomes: ["A measurable result worth highlighting."],
    conclusion: "A closing paragraph tying it all together.",
  },
  {
    id: "case-study-three",
    company: "BAYZAT",
    companyInitial: "B",
    tag: "CLIENT PROJECT",
    title: "From churn risk to conversion driver, preventing AED 500K in churn at Bayzat",
    year: "2023",
    locked: false, // temporarily open — was gated, set back to true when ready
    useExternalPreview: true, // opens meta.liveUrl in a new tab instead of the inner page — remove once the write-up is ready
    password: "letmein", // cosmetic gate; set null to open it
    color: "#1B1D1F",
    gradient: "linear-gradient(160deg, #0a2a20 0%, #1f7a5a 55%, #f0c14b 100%)",
    // Home-page card image — one crop per breakpoint (falls back to `gradient`
    // above if omitted).
    images: {
      phone: "/Banner/Bayzat/mobile.png",
      tablet: "/Banner/Bayzat/tablet.png",
      desktop: "/Banner/Bayzat/website.png",
    },

    meta: {
      role: "Product Designer",
      team: "You + 1 engineer",
      duration: "2 months",
      liveUrl:
        "https://www.figma.com/proto/76CXoJbP1YLfavjm2e5KRU/Enhancing-attendance-configuration-feature-on-BAYZAT---2025?node-id=1-19422&p=f&t=UEPDX4KGTJpYGsd4-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A19422",
    },
    contributions: ["Product Design", "Design System", "Prototyping"],

    overview:
      "A short summary of the problem, who the product was for, and the impact you had.",
    challenge: { intro: "Describe the friction or business problem you were solving." },
    solutions: [
      { heading: "The Process", body: "Walk through discovery, iterations, and key decisions." },
      { heading: "The Result", body: "Share the shipped outcome and the metrics that moved." },
    ],
    outcomes: ["A measurable result worth highlighting."],
    conclusion: "A closing paragraph tying it all together.",
  },
  {
    id: "case-study-four",
    company: "Careem",
    companyInitial: "C",
    tag: "CLIENT PROJECT",
    title: "Redesigning Incentives to Increase Captain Retention by 17.3% and Weekly Earnings by 24%",
    year: "2021",
    locked: false, // temporarily open — was gated, set back to true when ready
    useExternalPreview: true, // opens meta.liveUrl in a new tab instead of the inner page — remove once the write-up is ready
    password: "letmein", // cosmetic gate; set null to open it
    color: "#1B1D1F", // same darker grey as the INVYGO and BAYZAT cards above
    gradient: "linear-gradient(160deg, #2a0a1f 0%, #a3306f 55%, #f0c14b 100%)",
    // Home-page card image — one crop per breakpoint (falls back to `gradient`
    // above if omitted).
    images: {
      phone: "/Banner/Careem/mobile.png",
      tablet: "/Banner/Careem/tablet.png",
      desktop: "/Banner/Careem/website.png",
    },

    meta: {
      role: "Product Designer",
      team: "You + 1 engineer",
      duration: "2 months",
      liveUrl:
        "https://www.figma.com/proto/uxRn3LUDyhu2g0WnZQzmYG/Case-study-1?page-id=15%3A1301&node-id=15-1302&starting-point-node-id=15%3A1302&scaling=scale-down&content-scaling=fixed&t=9djHmStj8HrwuRWT-1",
    },
    contributions: ["Product Design", "Design System", "Prototyping"],

    overview:
      "A short summary of the problem, who the product was for, and the impact you had.",
    challenge: { intro: "Describe the friction or business problem you were solving." },
    solutions: [
      { heading: "The Process", body: "Walk through discovery, iterations, and key decisions." },
      { heading: "The Result", body: "Share the shipped outcome and the metrics that moved." },
    ],
    outcomes: ["A measurable result worth highlighting."],
    conclusion: "A closing paragraph tying it all together.",
  },
];

// Everywhere a case study is *listed* (home page cards, hero teaser, the
// "next case study" suggestion) reads from this instead of `caseStudies`
// directly, so a `hidden: true` entry disappears from all of them at once.
// The study's own page still works at its direct URL either way.
export const visibleCaseStudies = caseStudies.filter((cs) => !cs.hidden);

// "Proud to have worked with" grid on the Home page. Each entry is one logo cell;
// entries with a `quote` are clickable and swap the testimonial card. Leave
// `quote` out for a logo-only cell. `logo` is a path under public/ (SVG or PNG).
// An entry with no `logo` renders as an empty cell.
// `ink` = [naturalW, naturalH, inkX, inkY, inkW, inkH] — the logo's real visible
// bounds, used to scale every logo to the same visual size even when an SVG has
// empty padding. Omit it and the logo is simply fitted (object-fit: contain).
export const testimonials = [
  { company: "RAKBANK", logo: "/Logos/rakbank.svg", ink: [232, 45, 0, 0, 231.5, 44.3] },
  {
    company: "Careem",
    logo: "/Logos/Careem.svg", ink: [192, 40, 1.8, 0.3, 187.5, 36.5],
    quote:
      "From his very first day at Careem (placed via VentureDive), it was clear Talal would drive step-change improvements in Careem’s design-led outcomes. He is user-centric by nature, has strong critical thinking, and engages actively in team critiques and reviews — always driving for bar-raising across the board. His contributions to the design team, and Careem product experiences still live on to this day! A great designer to add to any design team!",
    name: "Tiago Cabaço",
    role: "VP DESIGN · CAREEM",
  },
  {
    company: "Motive",
    logo: "/Logos/Motive.svg", boost: 1.15, ink: [155, 58, 0, 0, 154, 57],
    quote:
      "Talal is a talented product designer with a bright future ahead of him. He consistently delivers high-quality work and has a knack for finding creative solutions to complex design detail documentation problems. I have no doubt that he has a lot of upside and would be an asset to any team.",
    name: "Zain Adeel",
    role: "DIRECTOR, PRODUCT DESIGN · MOTIVE",
  },
  {
    company: "Bayzat",
    logo: "/Logos/Bayzat.svg", ink: [254, 112, 57.3, 40.5, 139.3, 30.3],
    quote:
      "Talal is a creative out of the box thinker. He easily reflects his ideas to his designs and experiences he comes up with. You can communicate with him openly. He always welcomes the feedback and acts upon it. His approaches while discussing with engineers were always to the point and constructive. He tries to understand the foundations and impact of the problem space and comes up with intuitive solutions. I recommend him to any company.",
    name: "Emre Barış Baki",
    role: "SENIOR ENGINEERING MANAGER · BAYZAT",
  },
  { company: "Simplifi", logo: "/Logos/Simplifi.svg", boost: 1.3, ink: [157, 73, 0.5, 0.5, 155, 70.8] },
  {
    company: "VentureDive",
    logo: "/Logos/VentureDive.svg", ink: [225, 46, 0, 0, 224, 45.5],
    quote:
      "During my tenure at VentureDive, I worked with Talal for around 2.5 years and I found him as an amazing UX Designer with a high level of user empathy and attention to detail. Since the very beginning of his tenure, Talal proved to be a team player and a dedicated designer who always try to exceed client expectations by delivering exceptional design solutions. He has the ability to provide multiple design solutions for any given user problem and this ability distinguishes him from other designers. While working upon several products ranging from fintech to health tech he has always lead a product's design in an amazing way while displaying excellent client communication skills and presenting designs with a proper rationale. I had the pleasure to work with Talal on couple of projects and it was always an amazing experience to work with such a dedicated designer with a team-player mindset. I would highly recommend Talal to all the product companies who are looking for an amazing addition for their design teams.",
    name: "Munir Ahmed",
    role: "LEAD UX DESIGNER · VENTUREDIVE",
  },
  {
    company: "Invygo",
    logo: "/Logos/invygo.svg", ink: [234, 102, 26, 31.8, 181.5, 38.3],
    quote:
      "Talal is a strong combination of design craft, product thinking, and reliability. I had the opportunity to manage him directly, and he consistently proved himself to be a thoughtful and dependable contributor across a range of product work. While he has a sharp eye for detail and a high standard for execution, what stood out most was his ability to approach design problems with care, research depth, and commercial awareness. He doesn’t just design interfaces, he truly thinks through the customer problem, the context, and the broader business impact. Talal is also great to work with. He’s collaborative, low-ego, adaptable, and someone who brings a steady, positive presence to the team, especially in fast-moving environments where priorities shift and ambiguity is high. He earns my strong recommendation for any Senior Product Design / Lead UX role.",
    name: "Mahesh Kalain",
    role: "PRODUCT & EXPERIENCE STRATEGY LEAD · INVYGO",
  },
  { company: "TEZ", logo: "/Logos/TEZ.png", boost: 1.6, ink: [140, 100, 0, 0.5, 139.8, 99.3] },
  { company: "Nafa", logo: "/Logos/nafa.svg", ink: [192, 40, 5, 3, 180.5, 33] },
];

export const timeline = [
  {
    role: "Lead Product Designer",
    company: "Your Company",
    dates: "OCT 2025 – PRESENT",
  },
  {
    role: "Product Designer",
    company: "Previous Company",
    dates: "JAN 2024 – OCT 2025",
  },
  {
    role: "UX Designer",
    company: "Earlier Company",
    dates: "JAN 2023 – JAN 2024",
  },
  {
    role: "Junior Designer",
    company: "First Company",
    dates: "OCT 2020 – DEC 2023",
  },
];

export const aboutStats = [
  { icon: "🧑‍🤝‍🧑", value: "13+", label: "SATISFIED\nCLIENT" },
  { icon: "🗓️", value: "30+", label: "COMPLETED\nPROJECTS" },
  { icon: "🧘", value: "0 Days", label: "DAYS WITHOUT A\nCREATIVE CRISIS" },
];

export const aboutSpanning = { from: 2020, to: 2026 };

export const aboutHero = {
  eyebrowBlue: "Helping brands",
  eyebrowWhite: "thrive in the digital world",
  quote:
    "\"I always used to think that my ideas weren't good enough, but then I realized that if I don't try it, I have no clue how it will turn out. If an idea or a concept doesn't come alive like I imagined, it's not the end of the world.\"",
};

export const aboutBio = {
  eyebrow: "More than a",
  highlightWord: "Designer",
  spec: "180 × 48",
  body: "A person who loves nature, music, exercise, sports, and general well-being. I do my best to live the most balanced life possible. Life is a gift that we must not take for granted. Nothing is more important to me than the peace of mind of my loved ones and the being in the best mental and physical shape possible.",
  highlightPhrases: ["loves nature, music, exercise, sports, and general well-being", "peace of mind"],
};

export const photoStrip = [
  { caption: null },
  { caption: "sit around." },
  { caption: null },
  { caption: "just surrender." },
  { caption: "grateful, hopeful." },
];

export const archives = {
  eyebrow: "PROJECTS AND EXPLORATIONS WORTH MENTIONING",
  spanning: "2019 – Present",
  intro: "Things I made when no one was watching.",
  projects: [
    { title: "Side Project One", tag: "AI TOOL", date: "March 2026", color: "#E9FA7B" },
    { title: "Side Project Two", tag: "WEB APP", date: "2025", color: "#E9FA7B" },
    { title: "Side Project Three", tag: "MOBILE APP", date: "2025", color: "#E9FA7B" },
    { title: "Side Project Four", tag: "MICRO INTERACTION", date: "July 2022", color: "#E9FA7B" },
  ],
};

// Archives, About and Contact are still fully built (routes, pages, the
// Contact section on Home) — this just hides their nav links while those
// inner pages get finished. Flip back to `true` to bring them back into the
// nav with no other changes needed.
const SHOW_INNER_PAGES = false;

const allNavLinks = [
  { label: "Archives", to: "/archives" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/#contact" },
];

const allMobileNavLinks = [
  { label: "Home", to: "/" },
  { label: "Archives", to: "/archives" },
  { label: "About Me", to: "/about" },
  { label: "Let's Connect", to: "/#contact" },
];

export const nav = SHOW_INNER_PAGES ? allNavLinks : [];
export const mobileNav = SHOW_INNER_PAGES ? allMobileNavLinks : [allMobileNavLinks[0]];
