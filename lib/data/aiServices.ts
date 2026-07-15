import type { IconName } from "@/lib/icons";

export type AICapability = {
  icon: IconName;
  title: string;
  description: string;
  imgAI?: string;
};

export type AICategory = {
  slug: string;
  name: string;
  icon: IconName;
  /** Tailwind gradient classes used for icon tiles in this category. */
  accent: string;
  tagline: string;
  description: string;
  capabilities: AICapability[];
};

export type AIStat = { value: string; label: string };

export const aiCategories: AICategory[] = [
  {
    slug: "ai-solutions",
    name: "Artificial Intelligence Solutions",
    icon: "brainCircuit",
    accent: "from-blurple-500 to-sky-500",
    tagline: "Intelligence, engineered into your products",
    description:
      "Strategy, custom builds, and generative AI — engineered to put intelligence at the core of your products and operations, with the security and governance enterprises require.",
    capabilities: [
      {
        icon: "compass",
        title: "AI Strategy & Consulting",
        description:
          "Readiness audits, use-case discovery, and roadmaps that turn AI ambition into a costed, prioritised plan.",
        imgAI: "/assets/aiSolutions/AIStrategyConsulting.svg",
      },
      {
        icon: "code",
        title: "Custom AI Application Development",
        description:
          "Bespoke AI products and copilots engineered around your data, your workflows, and your users.",
        imgAI: "/assets/aiSolutions/CustomAIApplicationDevelopment.svg",
      },
      {
        icon: "wand",
        title: "Generative AI Solutions",
        description:
          "LLM apps, RAG pipelines, and content engines built on the latest Claude and foundation models.",
        imgAI: "/assets/aiSolutions/GenerativeAISolutions.svg",
      },
      {
        icon: "plug",
        title: "AI Integration Services",
        description:
          "Embed AI into your existing stack, CRMs, and tools through robust, secure, well-documented APIs.",
        imgAI: "/assets/aiSolutions/AIIntegrationServices.svg",
      },
      {
        icon: "zap",
        title: "AI-Powered Automation",
        description:
          "Intelligent agents that handle complex, multi-step work end to end — without constant human oversight.",
        imgAI: "/assets/aiSolutions/AIPoweredAutomation.svg",
      },
      {
        icon: "message",
        title: "AI Chatbots & Virtual Assistants",
        description:
          "Conversational assistants that resolve queries, qualify leads, and support customers around the clock.",
        imgAI: "/assets/aiSolutions/AIChatbotsVirtualAssistants.svg",
      },
      {
        icon: "building",
        title: "Enterprise AI Solutions",
        description:
          "Governed, scalable AI platforms with security, compliance, and observability built in from day one.",
        imgAI: "/assets/aiSolutions/EnterpriseAISolutions.svg",
      },
      {
        icon: "scanText",
        title: "Intelligent Document Processing",
        description:
          "Extract, classify, and understand documents at scale with combined vision and language models.",
        imgAI: "/assets/aiSolutions/IntelligentDocumentProcessing.svg",
      },
      {
        icon: "lineChart",
        title: "Predictive Analytics",
        description:
          "Forecasting and decision models that turn historical data into a confident, forward-looking view.",
        imgAI: "/assets/aiSolutions/PredictiveAnalytics.svg",
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    icon: "bot",
    accent: "from-sky-500 to-mintx-500",
    tagline: "Work that runs itself",
    description:
      "Autonomous agents and workflows that take repetitive work off your team's plate — connecting your tools and running reliably, end to end.",
    capabilities: [
      {
        icon: "workflow",
        title: "Workflow Automation",
        description:
          "Connect apps and orchestrate end-to-end workflows that run themselves, with humans in the loop only where it matters.",
      },
      {
        icon: "cog",
        title: "Process Automation",
        description:
          "Replace repetitive back-office processes with reliable, auditable automation that scales with you.",
      },
      {
        icon: "headset",
        title: "Customer Support Automation",
        description:
          "Deflect tickets and resolve issues instantly with an AI-first support layer that knows your product.",
      },
      {
        icon: "target",
        title: "Sales Automation",
        description:
          "Automate outreach, lead scoring, and pipeline hygiene so your reps spend their time actually selling.",
      },
      {
        icon: "megaphone",
        title: "Marketing Automation",
        description:
          "Personalised campaigns, content, and lifecycle journeys that adapt and optimise themselves.",
      },
    ],
  },
];

// NOTE: illustrative outcome figures — replace with verified metrics before launch.
export const aiStats: AIStat[] = [
  { value: "70%", label: "less manual effort" },
  { value: "24/7", label: "autonomous agents" },
  { value: "10×", label: "faster document processing" },
  { value: "99%", label: "extraction accuracy" },
];

export function getAICategory(slug: string): AICategory | undefined {
  return aiCategories.find((c) => c.slug === slug);
}
