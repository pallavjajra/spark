import type { IconName } from "@/lib/icons";

export type Capability = { title: string; description: string };
export type Outcome = { value: string; label: string };

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  icon: IconName;
  summary: string;
  description: string;
  capabilities: Capability[];
  deliverables: string[];
  outcomes: Outcome[];
  accent: string;
  image?: string;
  imgNew?: string;
};

export const services: Service[] = [
  {
    slug: "ui-ux-design",
    image: "/assets/services/ui-ux.webp",
    imgNew: "/assets/services/newServices/UIUXDesign.svg",
    title: "UI & UX Design",
    tagline: "Interfaces people love to use",
    icon: "penTool",
    summary:
      "Research-led product design that turns complex workflows into intuitive, beautiful experiences.",
    description:
      "Great products start with great decisions. We pair user research with sharp visual craft to design interfaces that feel effortless — reducing friction, lifting conversion, and giving your team a design system that scales.",
    capabilities: [
      { title: "Product discovery", description: "Stakeholder workshops, user research, and journey mapping to frame the right problem." },
      { title: "Information architecture", description: "We structure complex flows into clear, learnable navigation and content models." },
      { title: "Prototyping", description: "Clickable, testable prototypes that de-risk decisions before a line of code." },
      { title: "Design systems", description: "Scalable component libraries and tokens that keep product teams fast and consistent." },
      { title: "Usability testing", description: "Moderated and unmoderated testing to validate and refine real behaviour." },
      { title: "Accessibility", description: "WCAG 2.2 AA built in, so your product works for everyone." },
    ],
    deliverables: [
      "Research synthesis & personas",
      "Interactive prototype",
      "Design system & UI kit",
      "Usability audit & roadmap",
    ],
    outcomes: [
      { value: "+38%", label: "task completion" },
      { value: "-24%", label: "support tickets" },
      { value: "2×", label: "faster onboarding" },
    ],
    accent: "from-electric-500 to-iris",
  },
  {
    slug: "mobile-app-development",
    image: "/assets/services/mobile-app.webp",
    imgNew: "/assets/services/newServices/MobileAppDevelopment.svg",
    title: "Mobile App Development",
    tagline: "Native-grade apps, iOS & Android",
    icon: "smartphone",
    summary:
      "Cutting-edge native and cross-platform apps that deliver seamless experiences and drive growth.",
    description:
      "From a single idea to millions of sessions, we engineer mobile apps that feel fast, look stunning, and stay reliable. Native or cross-platform, we build the full stack — interface, backend, and the launch that follows.",
    capabilities: [
      { title: "Native iOS", description: "Swift and SwiftUI apps engineered for performance and the latest Apple platforms." },
      { title: "Native Android", description: "Kotlin and Jetpack Compose builds tuned for the Android ecosystem." },
      { title: "Cross-platform", description: "React Native and Flutter for one codebase across iOS and Android." },
      { title: "Backend & APIs", description: "Scalable services, real-time sync, and secure authentication." },
      { title: "Offline-first", description: "Resilient experiences that keep working with poor or no connectivity." },
      { title: "Launch & growth", description: "App Store and Play Store release, ASO, and post-launch iteration." },
    ],
    deliverables: [
      "Technical architecture",
      "Production iOS & Android apps",
      "Backend & API layer",
      "Store launch & monitoring",
    ],
    outcomes: [
      { value: "4.8★", label: "avg. store rating" },
      { value: "<1.5s", label: "cold start" },
      { value: "99.9%", label: "crash-free sessions" },
    ],
    accent: "from-electric-400 to-aqua",
  },
  {
    slug: "digital-transformation",
    image: "/assets/services/digital-transformation.png",
    imgNew: "/assets/services/newServices/DigitalTransformation.svg",
    title: "Digital Transformation",
    tagline: "Modernise, automate, scale",
    icon: "workflow",
    summary:
      "Assess, roadmap, and execute — modernising legacy systems and automating the work that slows you down.",
    description:
      "Transformation should change something real. Our consultants assess your current state, build an actionable roadmap, and deliver it — migrating to the cloud, integrating systems, and automating processes so your business moves faster at lower cost.",
    capabilities: [
      { title: "Legacy modernisation", description: "Replatform aging systems without disrupting the business." },
      { title: "Cloud migration", description: "Move to AWS, Azure, or GCP with cost and resilience in mind." },
      { title: "Process automation", description: "Automate manual workflows to cut errors and free up teams." },
      { title: "Systems integration", description: "Connect ERP, CRM, and bespoke tools into one source of truth." },
      { title: "Data & analytics", description: "Turn scattered data into dashboards leaders actually use." },
      { title: "Change enablement", description: "Bring people along with training and adoption support." },
    ],
    deliverables: [
      "Current-state assessment",
      "Transformation roadmap",
      "Migrated, integrated platform",
      "Automation & dashboards",
    ],
    outcomes: [
      { value: "-52%", label: "operating cost" },
      { value: "99.99%", label: "uptime" },
      { value: "6 wks", label: "to first release" },
    ],
    accent: "from-iris to-electric-500",
  },
  {
    slug: "digital-marketing",
    image: "/assets/services/digital-marketing.webp",
    imgNew: "/assets/services/newServices/DigitalMarketing.svg",
    title: "Digital Marketing",
    tagline: "Growth you can measure",
    icon: "megaphone",
    summary:
      "SEO, paid media, content, and CRO — a full-funnel growth engine wired to your revenue.",
    description:
      "We treat marketing like engineering: hypotheses, experiments, and compounding results. From search and paid media to content and conversion optimisation, every channel is wired to outcomes you can see in the numbers.",
    capabilities: [
      { title: "SEO", description: "Technical, content, and authority SEO that compounds over time." },
      { title: "Paid media", description: "Google, Meta, and LinkedIn campaigns engineered for ROAS." },
      { title: "Content & social", description: "Editorial and social programmes that build an audience." },
      { title: "Conversion optimisation", description: "Experiment-led CRO to lift revenue from existing traffic." },
      { title: "Marketing analytics", description: "Attribution and reporting you can make decisions on." },
      { title: "Lifecycle & email", description: "Automated journeys that nurture and retain customers." },
    ],
    deliverables: [
      "Growth audit & strategy",
      "Campaign setup & management",
      "Content calendar",
      "Analytics & reporting",
    ],
    outcomes: [
      { value: "3.4×", label: "avg. ROAS" },
      { value: "+212%", label: "organic traffic" },
      { value: "-31%", label: "cost per lead" },
    ],
    accent: "from-aqua to-electric-500",
  },
  {
    slug: "support-maintenance",
    // image: "/assets/services/support-maintenance.webp",
    imgNew: "/assets/services/newServices/SupportMaintenance.svg",
    title: "Support & Maintenance",
    tagline: "Always-on peace of mind",
    icon: "lifeBuoy",
    summary:
      "Proactive monitoring, rapid incident response, and SLA-backed support that keeps you running.",
    description:
      "Software is never finished. Our support teams monitor, patch, and tune your systems around the clock — and when something breaks, we respond fast. Clear SLAs, real engineers, and a team that knows your stack.",
    capabilities: [
      { title: "24/7 monitoring", description: "Proactive monitoring and alerting across your entire stack." },
      { title: "Emergency response", description: "Rapid incident response to get you back online fast." },
      { title: "Backup & restore", description: "Tested backups and disaster recovery you can rely on." },
      { title: "Security & patching", description: "Continuous patching and vulnerability management." },
      { title: "Performance tuning", description: "Ongoing optimisation for speed and cloud cost." },
      { title: "SLA-backed support", description: "Clear response times and a dedicated support desk." },
    ],
    deliverables: [
      "Monitoring & alerting setup",
      "Runbooks & DR plan",
      "Monthly health reports",
      "SLA-backed support desk",
    ],
    outcomes: [
      { value: "24/7", label: "coverage" },
      { value: "<15 min", label: "response time" },
      { value: "99.95%", label: "availability" },
    ],
    accent: "from-electric-500 to-iris",
  },
  {
    slug: "graphic-design",
    // image: "/assets/services/graphic-design.webp",
    imgNew: "/assets/services/newServices/GraphicDesign.svg",
    title: "Graphic Design",
    tagline: "Brands that get remembered",
    icon: "palette",
    summary:
      "Identity, collateral, and motion that elevate your brand and communicate your message with clarity.",
    description:
      "Design is how your business is felt before it's understood. Our designers craft identities and creative that are distinctive, consistent, and built to scale across every channel your brand shows up in.",
    capabilities: [
      { title: "Brand identity", description: "Logos, palettes, and guidelines that make you recognisable." },
      { title: "Marketing collateral", description: "Decks, brochures, and ads that stay perfectly on-brand." },
      { title: "Motion graphics", description: "Animation and video that bring your story to life." },
      { title: "Illustration", description: "Custom illustration and iconography with personality." },
      { title: "Social creative", description: "Scroll-stopping assets sized for every channel." },
      { title: "Pitch decks", description: "Investor and sales decks designed to win the room." },
    ],
    deliverables: [
      "Brand identity system",
      "Asset library",
      "Templates & guidelines",
      "Campaign creative",
    ],
    outcomes: [
      { value: "3 wks", label: "to brand launch" },
      { value: "+47%", label: "engagement" },
      { value: "1", label: "source of truth" },
    ],
    accent: "from-iris to-aqua",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
