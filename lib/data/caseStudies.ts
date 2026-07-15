// Real Spark Business Technology projects (titles, summaries & imagery migrated from the
// legacy site). Supporting detail (challenge/approach/results/quotes) is illustrative —
// replace with approved, verified figures before launch.

export type CaseResult = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  industry: string;
  year: string;
  services: string[];
  tech: string[];
  image: string;
  summary: string;
  challenge: string;
  approach: string[];
  solution: string;
  results: CaseResult[];
  quote: { text: string; author: string; role: string };
  accent: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "diversion-facility-management",
    client: "Diversion FMS",
    title: "Facility management software that drives unmatched efficiency",
    industry: "Facilities Management",
    year: "2024",
    services: ["Custom Software", "Digital Transformation", "UI & UX Design"],
    tech: ["Laravel", "React", "PostgreSQL", "AWS"],
    image: "/assets/work/diversion-facility.webp",
    summary:
      "Optimising operations and resources to drive unmatched efficiency — revolutionising the way facilities are run, day to day.",
    challenge:
      "Operations were spread across spreadsheets, email, and disconnected tools. Scheduling, resourcing, and reporting all took manual effort, and leadership had no single, real-time view of how facilities were performing.",
    approach: [
      "Mapped the full operational workflow with the team to find where time and resources were leaking.",
      "Designed a clear, role-based interface that suits both field staff and managers.",
      "Built a centralised platform for scheduling, resourcing, and live reporting.",
      "Rolled out with training and support so the team owns the system day to day.",
    ],
    solution:
      "A single facility-management platform that streamlines operations, allocates resources intelligently, and gives leadership a real-time view of everything that matters.",
    results: [
      { value: "-40%", label: "admin time" },
      { value: "+30%", label: "resource utilisation" },
      { value: "1", label: "source of truth" },
    ],
    quote: {
      text: "Operations and resources are now optimised end to end — efficiency we didn't think was possible.",
      author: "Operations lead",
      role: "Diversion Facility Management",
    },
    accent: "from-electric-500 to-iris",
  },
  {
    slug: "aged-care-quality-management",
    client: "Aged Care QMS",
    title: "A quality management system built for aged-care compliance",
    industry: "Healthcare & Aged Care",
    year: "2024",
    services: ["Custom Software", "Digital Transformation", "Support & Maintenance"],
    tech: ["Laravel", "Vue", "MySQL", "Azure"],
    image: "/assets/work/aged-care-qms.webp",
    summary:
      "Ensuring regulatory compliance and enhancing care experiences — empowering the organisation with unparalleled excellence and resident satisfaction.",
    challenge:
      "Meeting aged-care regulatory standards meant juggling audits, documentation, and incident tracking across paper and disconnected systems — slow, error-prone, and stressful at inspection time.",
    approach: [
      "Translated the regulatory framework into clear, trackable digital workflows.",
      "Designed simple capture forms so care staff spend less time on paperwork.",
      "Built audit trails, alerts, and dashboards for continuous compliance.",
      "Hardened, monitored, and supported the platform post-launch.",
    ],
    solution:
      "A quality-management system that keeps the organisation audit-ready year round, surfaces risks early, and frees staff to focus on resident care.",
    results: [
      { value: "100%", label: "audit readiness" },
      { value: "-50%", label: "compliance admin" },
      { value: "24/7", label: "monitoring" },
    ],
    quote: {
      text: "Compliance went from a scramble to a system. Our teams can finally focus on care.",
      author: "Quality & compliance lead",
      role: "Aged-care provider",
    },
    accent: "from-electric-400 to-aqua",
  },
  {
    slug: "realisupply-sums",
    title: "SUMS: record-setting speed of product delivery",
    client: "RealiSupply",
    industry: "Logistics & Supply Chain",
    year: "2024",
    services: ["Custom Software", "Systems Integration", "Mobile App Development"],
    tech: ["Node.js", "React", "PostgreSQL", "AWS"],
    image: "/assets/work/realisupply-sums.webp",
    summary:
      "With seamless integration and optimised business processes, RealiSupply achieves unparalleled speed of product delivery — setting new records in customer satisfaction.",
    challenge:
      "Disconnected supply systems and manual hand-offs were slowing fulfilment. Every integration gap added delay, and the team lacked visibility across the order lifecycle.",
    approach: [
      "Audited the order-to-delivery pipeline to find the slowest links.",
      "Designed SUMS to unify ordering, inventory, and fulfilment in one flow.",
      "Integrated existing systems so data moves automatically, not by hand.",
      "Optimised processes and instrumented the pipeline end to end.",
    ],
    solution:
      "SUMS — a unified supply platform that automates hand-offs, gives full pipeline visibility, and pushes products to customers faster than ever.",
    results: [
      { value: "2.4×", label: "delivery speed" },
      { value: "-35%", label: "manual hand-offs" },
      { value: "+22%", label: "customer satisfaction" },
    ],
    quote: {
      text: "Seamless integration set new records for how fast we get product to customers.",
      author: "Supply chain director",
      role: "RealiSupply",
    },
    accent: "from-iris to-electric-500",
  },
  {
    slug: "data-security-framework",
    client: "Gov. Talent Program",
    title: "A tailor-made data-security framework for government",
    industry: "Government & Public Sector",
    year: "2023",
    services: ["Security Engineering", "Digital Transformation", "Support & Maintenance"],
    tech: ["Laravel", "PostgreSQL", "Azure", "Zero-Trust"],
    image: "/assets/work/data-security.webp",
    summary:
      "A state-of-the-art data-security framework — tailor-made and in active use supporting a government-operated talent-identification program.",
    challenge:
      "A government talent program handled sensitive personal data and needed a security posture that met strict public-sector standards without slowing the program down.",
    approach: [
      "Assessed data flows, threats, and compliance obligations end to end.",
      "Designed a zero-trust framework with least-privilege access throughout.",
      "Implemented encryption, auditing, and continuous monitoring.",
      "Operationalised the framework with ongoing support and review.",
    ],
    solution:
      "A bespoke, standards-aligned security framework that protects sensitive data, satisfies government requirements, and runs quietly in production.",
    results: [
      { value: "0", label: "data breaches" },
      { value: "100%", label: "compliance" },
      { value: "24/7", label: "monitoring" },
    ],
    quote: {
      text: "A security framework built precisely for our standards — and trusted in production.",
      author: "Program technical lead",
      role: "Government talent program",
    },
    accent: "from-electric-500 to-iris",
  },
  {
    slug: "legal-b2c-application",
    client: "Australian Legal Co.",
    title: "Automating customer communication for a legal firm",
    industry: "Legal Services",
    year: "2023",
    services: ["Custom Software", "UI & UX Design", "Digital Transformation"],
    tech: ["Laravel", "React", "MySQL", "AWS"],
    image: "/assets/work/legal-b2c.webp",
    summary:
      "An Australian legal company transformed its customer communication through a tailor-made business-to-customer application — automating processes, minimising errors, and maximising efficiency.",
    challenge:
      "Client communication ran on manual, repetitive steps that were slow and error-prone. The firm needed to scale client service without scaling headcount.",
    approach: [
      "Analysed and evaluated the firm's communication and case workflows.",
      "Designed an intuitive B2C application around how clients actually engage.",
      "Automated routine communication and document steps to cut errors.",
      "Streamlined the end-to-end process for maximum efficiency.",
    ],
    solution:
      "A tailor-made business-to-customer application that automates client communication, removes manual error, and lets the firm serve more clients with less effort.",
    results: [
      { value: "-45%", label: "manual effort" },
      { value: "-60%", label: "communication errors" },
      { value: "3×", label: "faster responses" },
    ],
    quote: {
      text: "Automating client communication removed the errors and freed our people to do legal work.",
      author: "Practice manager",
      role: "Australian legal firm",
    },
    accent: "from-electric-400 to-aqua",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
