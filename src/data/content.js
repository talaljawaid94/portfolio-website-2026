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
    id: "case-study-five",
    company: "DXWand",
    companyInitial: "D",
    // longer label shown on the Home card (the short `company` name is still
    // used everywhere else: the password page, end-of-page cards, analytics)
    cardLabel: "DXWAND - Builds enterprise AI products",
    tag: "CLIENT PROJECT",
    title:
      "A no-code platform where teams build, test and ship AI customer-support agents on an open canvas, designed end to end.",
    year: "2025",
    locked: true,
    // Under NDA: the Home card isn't a link (nothing opens) and its hover pill
    // reads "Under NDA" instead of "View Case Study".
    underNda: true,
    password: "letmein", // cosmetic gate, same as the others; set null to open it
    color: "#1B1D1F",
    gradient: "linear-gradient(160deg, #0d1a4a 0%, #2f5cff 55%, #e9fa7b 100%)",
    // Home-page card media — a looping video per breakpoint instead of `images`
    // (the gradient above shows until the video loads). Sizes match each crop.
    // flat colour the videos' own backgrounds end in — fills the sides where a
    // video is shown whole inside the card instead of cropped (tablet)
    videoBg: "#f4f6fa",
    videos: {
      phone: "/Placeholder/DXWand/Animation/protoverse-test-run-mobile-553x530.mp4",
      tablet: "/Placeholder/DXWand/Animation/protoverse-test-run-tablet-516x420.mp4",
      desktop: "/Placeholder/DXWand/Animation/protoverse-test-run-website-1296x680.mp4",
    },

    meta: {
      role: "Product Designer",
      team: "You + 1 engineer",
      duration: "2 months",
      hideLiveProject: true,
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
    id: "case-study-two",
    company: "INVYGO",
    companyInitial: "I",
    // longer label shown on the Home card only
    cardLabel: "INVYGO - Flexible car ownership, without the traditional complexity.",
    // white-fill logo — shown on the accent-colored badge in the case study header
    logo: "/Logos/invygo.svg",
    // real visible bounds of the artwork inside its viewBox (same technique as
    // `testimonials[].ink`) — used to crop the baked-in whitespace so the mark
    // sits flush-left instead of centered with padding on both sides
    logoInk: [234, 102, 26, 31.8, 181.5, 38.3],
    tag: "CLIENT PROJECT",
    title: "Reducing billing confusion to recover $52K+/month and cut billing support by ~23%",
    year: "2024",
    locked: false, // temporarily open — was gated, set back to true when ready
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
      role: "Senior Product Designer",
      team: "Subscribe to Own",
      duration: "3.5 months",
      // hides the "Live project" row in the case study header (the link below
      // is still used elsewhere, e.g. the Home card's external preview)
      hideLiveProject: true,
      liveUrl:
        "https://www.figma.com/proto/UILRkfjepNAkkBkSO0Fmyc/invygo---Billing-Clarification?page-id=0%3A1&node-id=0-269&viewport=105%2C148%2C0.49&t=4Svdm1GI12oF9J33-1&scaling=contain&content-scaling=fixed",
    },
    contributions: ["Product Design", "Design System", "Prototyping"],

    // Overview section removed — the same context now opens The Challenge
    // below instead. Set this back to a string to bring the section back.
    overview: null,
    challenge: {
      intro:
        "Invygo's Subscribe-to-Own (STO) product was scaling rapidly, but the post-booking experience had become a major source of friction. Immediately after booking, users frequently reached out to customer support (CX) teams for clarification around:",
      // rendered as three icon boxes instead of a bullet list — see
      // `.cs-challenge-boxes` in CaseStudy.css
      highlights: [
        { icon: "receipt", text: "Billing and add-on charges" },
        { icon: "alert", text: "Returns and force collection" },
        { icon: "documents", text: "Booking confirmation and government processes" },
      ],
    },
    // Intro copy shown under the "The Challenge" heading (the `solved`
    // section), above the numbered solutions list.
    solutionsIntro:
      "What looked like a usability issue had become a business risk. Gaps in clarity after booking were directly affecting revenue, operations, and support capacity.",
    // 3-stat grid shown under solutionsIntro, same icon/label/value style as
    // the Home page's quickStats — reuses the headline numbers from the title.
    impactStats: [
      { icon: "loss", value: "~$120K/month", label: "LOST REVENUE FROM DELAYS & CANCELLATIONS" },
      { icon: "support", value: "~62%", label: "SUPPORT CONTACTS AFTER BOOKING" },
      { icon: "clock", value: "~10,300 hours", label: "MONTHLY SUPPORT HOURS SPENT" },
    ],
    // Body copy shown below the impact stats grid
    solutionsClosing:
      "Billing confusion caused delays, disputes, and force collection escalations, eroding trust, because the system prioritized charging over clarity.",
    // Placeholder "The Process / The Result" list removed — set this back to
    // an array of { heading, body } to bring it back.
    solutions: null,
    myRole:
      "I led this initiative from problem to delivery, aligning teams around one clear goal → reduce confusion before payment.",
    myRoleGrid: [
      {
        icon: "others-1",
        heading: "Collaboration",
        body: "Worked closely with Data, CX, Ops, Finance, and Engineering to understand the full impact across the business.",
      },
      {
        icon: "sun",
        heading: "Clarity",
        body: "Used contact data, billing trends, and support logs to clearly define the real problem.",
      },
      {
        icon: "achievement",
        heading: "Opportunity",
        body: "Identified billing as the highest-impact opportunity to solve first.",
      },
      {
        icon: "strategy",
        heading: "Strategy",
        body: "Defined the experience principles and solution direction to enable clarity at scale.",
      },
      {
        icon: "goal",
        heading: "Delivery",
        body: "Aligned teams and drove execution from concept through launch.",
      },
    ],
    // Research section — CR/billing breakdown dashboards referenced during
    // discovery, shown above the body text.
    researchImages: [
      {
        src: "/Placeholder/bayzat/1.png",
        alt: "Dashboard showing monthly support contact volume for the STO product, broken down by reason — billing, returns, booking support and more",
      },
      {
        src: "/Placeholder/bayzat/2.png",
        alt: "Dashboard drilling into Billing & Invoicing contact reasons, showing outstanding payment clarification as the largest sub-category",
      },
      {
        src: "/Placeholder/bayzat/3.png",
        alt: "Detailed breakdown of every Billing & Invoicing ticket reason and its volume",
      },
      {
        src: "/Placeholder/bayzat/5.png",
        alt: "Dashboard breaking down Booking Support contact reasons, with booking confirmation status as the largest category",
      },
    ],
    research:
      "Six months of CX data revealed that post-booking confusion was concentrated in a small number of experience gaps.",
    // Shown after the research images — the highlighted phrase uses the same
    // gold serif-italic treatment as the hero's name on Home.
    researchClosing: {
      before: "These three areas alone ",
      highlight: "generated ~62%",
      after: " of total CX demand, highlighting a clear, high-leverage opportunity for intervention.",
    },
    businessImpactHeadline: "$2.3M+ trapped in outstanding add-on charges",
    businessImpactImage: {
      src: "/Placeholder/bayzat/4.png",
      alt: "Spreadsheet of pending vs. received add-on charge amounts by month and type — damage, mileage, fuel, insurance and traffic — showing over $2M pending in several months",
    },
    businessImpactClosing:
      "Low payment realization meant the majority of post-booking charges remained unpaid or delayed, turning billing confusion into a recurring revenue-recovery problem.",
    businessImpactHeadline2: "$30K+/month spent explaining billing issues",
    businessImpactClosing2:
      "Repetitive billing clarification consumed 2,000+ CX and Ops hours every month — roughly $30K+ in avoidable operating cost.",
    // Prioritization section — the criteria used to rank which problem areas
    // to tackle first, shown as a bullet list beside the radar chart below.
    prioritizationLead:
      "Billing & Invoicing offered the strongest combination of customer pain, commercial impact, and product solvability.",
    prioritizationIntro:
      "I prioritized opportunities based on customer impact, business impact, root-cause clarity, and product feasibility.",
    prioritizationEvaluation: {
      label: "Evaluation criteria",
      theme: "grey",
      points: [
        "How often it drove support contacts",
        "Its impact on revenue",
        "How clearly we understood the root cause",
        "Whether it could be solved through product",
      ],
    },
    // Radar/spider chart plotting the three problem areas against the
    // criteria above — the original research artifact
    // (Framework-1.svg), recoloured to the site's palette as
    // Framework-1-brand.svg (same geometry, just swapped hex values).
    prioritizationRadarImage: {
      src: "/Placeholder/bayzat/Invygo/Billing/Framework-1-brand.svg",
      alt: "Radar chart scoring Returns & Force Collection, Billing & Invoicing, and Booking Support against Business Impact, Technical Effort & Feasibility, and Contribution %",
    },
    // Third column, right of the radar chart — why Billing & Invoicing came
    // out on top, in the same order as the evaluation criteria above.
    prioritizationResult: {
      label: "Billing & Invoicing:",
      theme: "lime",
      points: [
        "It drove a large share of support tickets",
        "It directly affected revenue collection",
        "The issues followed repeatable patterns",
        "The solution could be built and scaled within the product",
      ],
    },
    // User Research section — follows Prioritization. Laid out as a heading +
    // intro, then two cards side by side (questions | what this caused + root
    // cause), then a full-width design-insight card. See `.cs-ur-*` in
    // CaseStudy.css.
    userResearch: {
      heading: "We spoke with customers to understand why billing issues kept turning into disputes.",
      intro:
        "The data showed us where the problem was. Customer conversations helped us understand why it was happening.",
      questionsTitle: "Four questions kept coming up",
      questions: [
        {
          heading: "What happened?",
          body: "Users struggled to understand what event triggered the charge.",
        },
        {
          heading: "Why was I charged?",
          body: "The reason a fee applied was often unclear.",
        },
        {
          heading: "How was the amount calculated?",
          body: "Users lacked visibility into how the final amount was derived.",
        },
        {
          heading: "What evidence supports it?",
          body: "Supporting proof often surfaced too late or only after contacting CX.",
        },
      ],
      causedLabel: "What this caused",
      caused: [
        { text: "Users disputed charges before they understood them.", color: "var(--accent-gold)" },
        { text: "CX became the explanation layer for the product.", color: "#5b86ff" },
        { text: "Collection teams often became the first point where the full charge was explained.", color: "#4ade80" },
      ],
      rootCauseLabel: "Root cause",
      rootCause: "The problem wasn’t the amount. It was the lack of clarity before payment.",
      insightLabel: "Design insight",
      insight: "The system was designed to collect payments, not to build understanding.",
    },
    // "How might we" section — one big centered statement after User Research.
    howMightWe: "Enable understanding before payment at scale, without CX dependency.",
    // Solution section — follows "How might we": a large heading + body copy.
    solutionSection: {
      heading: "Designing for understanding before payment",
      body: [
        "The legacy invoice showed what users owed, but gave little context around why the charge existed or what evidence supported it.",
        "The redesign turned the invoice into a structured explanation combining charge context, violation details, proof, payment breakdown, and action in one place.",
      ],
      // Before/after slider shown under the body copy (see <BeforeAfter>).
      // Both screens are full iPhone 14 Pro mockups (bezel included). Text in
      // {curly braces} in the notes renders in the lime serif-italic
      // highlight style.
      compare: {
        before: {
          src: "/Placeholder/invygo/invygo-before-1.svg",
          alt: "Legacy invoice details screen, before the redesign",
        },
        after: {
          src: "/Placeholder/invygo/invygo-after-1.svg",
          alt: "Redesigned traffic fine screen with violation details, proof and payment breakdown",
        },
        beforeNotes: [
          "Amount and invoice details only",
          "Limited explanation of the charge",
          "No supporting evidence",
          "Users relied on CX for clarification",
        ],
        afterNotes: [
          "Explains what happened and why",
          "Surfaces date, location, and violation details",
          "Shows proof directly in the flow",
          "Breaks down the total before payment",
          "Gives users a clear next action",
        ],
      },
      // Scroll-driven walkthrough shown below the slider: one sticky phone on
      // the left cycles through each step's screen as its copy (on the right)
      // scrolls into the middle of the viewport. `image` is optional ({ src,
      // alt }); steps without one show a phone-shaped placeholder.
      features: [
        {
          number: "01",
          label: "Context before payment",
          heading: "Explain before asking",
          body: [
            "Before showing the amount due, we clearly notify users what happened and direct them to the relevant details.",
          ],
          image: {
            src: "/Placeholder/invygo/notification.svg",
            alt: "Invygo notification screen explaining a new traffic fine and linking to its details",
          },
        },
        {
          number: "02",
          label: "My Booking screen",
          heading: "Bring billing into the booking journey",
          body: [
            "Users can see outstanding dues in context, alongside their booking and ownership progress.",
          ],
          image: {
            src: "/Placeholder/invygo/home.svg",
            alt: "My Booking screen showing outstanding dues alongside booking and ownership progress",
          },
        },
        {
          number: "03",
          label: "Billing & Invoices Hub",
          heading: "Make charges easy to find",
          body: [
            "A central billing hub helps users scan unpaid, upcoming, and paid invoices without searching across the app.",
          ],
          image: {
            src: "/Placeholder/invygo/billing.svg",
            alt: "Billing and invoices hub listing unpaid, upcoming and paid invoices",
          },
        },
        {
          number: "04",
          label: "Charge detail screen",
          heading: "From amount to understanding",
          body: [
            "Each charge now includes the reason, date, location, evidence, and payment breakdown in one place.",
          ],
          image: {
            src: "/Placeholder/invygo/fine.svg",
            alt: "Charge detail screen with violation details, proof and payment breakdown",
          },
        },
        {
          number: "05",
          label: "Proof of violation screen",
          heading: "Make evidence visible",
          body: [
            "Users can review supporting proof directly in the flow, reducing doubt and unnecessary support contact.",
          ],
          image: {
            src: "/Placeholder/invygo/evidence.svg",
            alt: "Proof of violation screen showing supporting evidence",
          },
        },
        {
          number: "06",
          label: "Support entry screen",
          heading: "Offer the right next step",
          body: [
            "Instead of immediately routing users to CX, we give them a clearer path to either get help or dispute the charge.",
          ],
          image: {
            src: "/Placeholder/invygo/get%20help.svg",
            alt: "Support entry screen offering to get help or dispute the charge",
          },
        },
        {
          number: "07",
          label: "File dispute screen",
          heading: "Guide the dispute",
          body: [
            "Users can explain the issue through a structured flow, making disputes easier to submit and faster to resolve.",
          ],
          image: {
            src: "/Placeholder/invygo/raise%20dispute.svg",
            alt: "File dispute screen with a structured flow for explaining the issue",
          },
        },
        {
          number: "08",
          label: "Payment success screen",
          heading: "Close the loop clearly",
          body: [
            "A clear confirmation screen reassures users that payment is complete and keeps the invoice accessible afterward.",
          ],
          image: {
            src: "/Placeholder/invygo/Payment%20done.svg",
            alt: "Payment success screen confirming the payment is complete",
          },
        },
      ],
    },
    // Impact section — follows Solution. Rendered in the same merged-cell grid
    // style as the Home page's "intentions" block (see <ImpactGrid>): up to 4
    // metrics in a 2x2 between a bare row above and below, with body copy above it.
    impactSection: {
      body: "The redesign reduced support dependency, improved payment recovery, and helped users resolve billing issues with far less manual intervention.",
      metrics: [
        {
          label: "Receivables recovered",
          value: "42% of $2.3M",
          description:
            "Recovered 42% of previously outstanding add-on charges by giving users clearer context, evidence, and payment options.",
        },
        {
          label: "Billing support",
          value: "~23% reduction",
          description:
            "Fewer users needed to contact CX because they could understand charges and next steps directly in the product.",
        },
        {
          label: "CX & Ops effort",
          value: "2,000+ hours/month freed",
          description:
            "Teams spent less time repeating billing explanations and more time handling higher-value exceptions.",
        },
        {
          label: "Collection rate",
          value: "23% \u2192 51%",
          description:
            "Add-on collection improved significantly, contributing $52K+ in additional monthly collections over the latest three months.",
        },
      ],
    },
  },
  {
    id: "case-study-three",
    company: "BAYZAT",
    companyInitial: "B",
    // longer label shown on the Home card only
    cardLabel: "BAYZAT - HR, payroll and benefits built for the GCC.",
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
    // longer label shown on the Home card only
    cardLabel: "CAREEM - Middle East’s Everything App for mobility, delivery and payments.",
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
  eyebrow: "Exploring AI through practical product experiments.",
  spanning: "2019 – Present",
  intro: "Things I made when no one was watching.",
  // Cards use the same markup/styles as the Home case study cards. `url` is
  // optional: with one the card links out, without it the card is static.
  projects: [
    {
      name: "Papyr",
      year: "2026",
      url: "https://papyr-eta.vercel.app/",
      title: "Papyr was built as a small experiment to explore how simple PDF editing can be when unnecessary friction is removed.",
      // optional second paragraph under the title
      description:
        "Edit your document, add a signature, and download it, all in one place, without creating an account, hitting unnecessary limits, or running into a paywall at the end.",
      color: "#1B1D1F",
      // one crop per breakpoint, same scheme as the case study banners
      images: {
        phone: "/Placeholder/AI Experiment/Papyr/Mobile.png",
        tablet: "/Placeholder/AI Experiment/Papyr/Tablet.png",
        desktop: "/Placeholder/AI Experiment/Papyr/Website.png",
      },
    },
    {
      name: "Katana — A Scroll-Driven Three.js Experience",
      year: "2026",
      url: "https://katana-claude-three-js-website.vercel.app/",
      title:
        "Katana is an interactive Three.js web experience exploring the anatomy and craftsmanship of the Japanese sword. I designed a scroll-driven journey where the katana unsheathes, rotates and reveals its individual components through 3D animation. The experience combines cinematic motion, interactive storytelling and Japanese-inspired visual details to turn a simple informational website into an immersive digital experience.",
      color: "#1B1D1F",
      images: {
        phone: "/Placeholder/AI Experiment/Katana/Mobile.png",
        tablet: "/Placeholder/AI Experiment/Katana/Tablet.png",
        desktop: "/Placeholder/AI Experiment/Katana/Website.png",
      },
    },
  ],
};

// About and Contact are still fully built (routes, pages, the Contact section
// on Home) — this just hides their nav links while those inner pages get
// finished. Flip SHOW_INNER_PAGES back to `true` to bring them back into the
// nav with no other changes needed. Home and AI Experiments are always shown.
const SHOW_INNER_PAGES = false;

const aiExperimentsLink = { label: "AI Experiments", to: "/ai-experiments" };
const innerNavLinks = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/#contact" },
];
const innerMobileNavLinks = [
  { label: "About Me", to: "/about" },
  { label: "Let's Connect", to: "/#contact" },
];

export const nav = [{ label: "Home", to: "/" }, aiExperimentsLink, ...(SHOW_INNER_PAGES ? innerNavLinks : [])];
export const mobileNav = [
  { label: "Home", to: "/" },
  aiExperimentsLink,
  ...(SHOW_INNER_PAGES ? innerMobileNavLinks : []),
];
