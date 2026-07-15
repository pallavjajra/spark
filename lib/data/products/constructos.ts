import type { Product } from "../types";

/**
 * ConstructOS — the construction-management platform. A live product rendered
 * by the data-driven ProductDetailTemplate (`hero` + `sections`), so no bespoke
 * component is needed. Linked to the `construction` industry via `industries`,
 * which powers the product <-> industry cross-link graph.
 */
export const constructos: Product = {
  slug: "constructos",
  name: "iWebwiser ConstructOS",
  tagline: "One Platform. Complete Construction Control.",
  category: "Construction Management Platform",
  status: "live",
  icon: "Building",
  accent: { from: "#0B57D0", to: "#00C2FF" },
  featured: true,
  productImg: "/assets/images/constructor management/01.png",
  shortDescription:
    "Unified web and mobile platform enabling construction companies to manage the complete project lifecycle from planning through execution, billing, and analytics.",
  industries: ["construction"],
  keyBenefits: [
    {
      icon: "Layers",
      title: "Unified Web & Mobile Ecosystem",
      description:
        "Single platform connecting office management and field execution with real-time synchronization across all teams.",
    },
    {
      icon: "Workflow",
      title: "Complete Project Lifecycle",
      description:
        "Manage procurement, planning, site execution, quality control, billing, and reporting from one system.",
    },
    {
      icon: "Users",
      title: "Enterprise-Grade Access Control",
      description:
        "Role-based permissions and multi-tenant architecture supporting any organizational structure.",
    },
    {
      icon: "Sparkles",
      title: "AI-Powered Insights & Reporting",
      description:
        "Intelligent analytics and decision-support recommendations built into every project milestone.",
    },
    {
      icon: "Clock",
      title: "Real-Time Site Communication",
      description:
        "Push notifications, live updates, and instant photo/video documentation from the field.",
    },
    {
      icon: "Building2",
      title: "Flexible Deployment Options",
      description:
        "Multi-tenant SaaS, single-tenant, on-premise, and white-label configurations available.",
    },
  ],
  hero: {
    eyebrow: "Construction Management Platform",
    headline: "One Platform for Complete Construction Control",
    subheadline:
      "Connect management, field operations, and project execution through a single intelligent platform designed for construction companies.",
    highlights: [
      "Web and mobile integration",
      "Complete project lifecycle",
      "Real-time site collaboration",
    ],
    primaryCta: { label: "See a Demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Talk to Sales", href: "/contact?intent=sales" },
  },
  sections: [
    {
      type: "split-feature",
      title: "Unified Web & Mobile Ecosystem",
      description:
        "ConstructOS connects office and site through a single platform, eliminating data silos and enabling real-time collaboration across your entire team.",
      bullets: [
        "Centralized ERP for management, procurement, and finance teams",
        "Mobile site execution app for field engineers and supervisors",
        "Unified data model and authentication across all surfaces",
        "Real-time synchronization and push notifications",
        "Single source of truth for all project data",
      ],
      metrics: [
        { value: "2", label: "Integrated Application Surfaces" },
        { value: "Real-Time", label: "Data Synchronization" },
      ],
    },
    {
      type: "split-feature",
      title: "Complete Project Lifecycle Management",
      description:
        "Manage every phase of construction from planning through final handover, with specialized tools for procurement, execution, quality, and billing.",
      reverse: true,
      bullets: [
        "Planning & Scheduling with activities, milestones, and baseline tracking",
        "Procurement management and inventory control",
        "QA/QC inspection records and compliance tracking",
        "Quantity Surveying and earned value billing",
        "HSE incident tracking and safety workflows",
        "Document management with approval chains and version control",
      ],
      metrics: [
        { value: "9", label: "Core Construction Capabilities" },
        { value: "3", label: "Integrated Surfaces" },
      ],
    },
    {
      type: "split-feature",
      title: "AI-Powered Insights & Reporting",
      description:
        "Move beyond static reports with intelligent analytics that surface trends, flag risks, and support data-driven decision-making across every project.",
      bullets: [
        "Rule-based AI engine analyzing project data in real time",
        "Automated variance analysis and performance tracking",
        "Customizable dashboards and analytics reports",
        "Decision support recommendations at key milestones",
        "Audit and compliance tracking across all workflows",
        "Scalable deployment options for any organization",
      ],
      metrics: [
        { value: "Custom", label: "Reporting & Analytics" },
        { value: "Flexible", label: "Deployment Models" },
      ],
    },
    {
      type: "feature-grid",
      title: "Core Capabilities",
      description: "Everything you need to manage modern construction projects.",
      features: [
        {
          icon: "Package",
          title: "Procurement Management",
          description:
            "Manage purchase orders, vendor relationships, and procurement workflows with full audit trails.",
        },
        {
          icon: "Boxes",
          title: "Inventory & Materials",
          description:
            "Track materials on site, manage stock levels, and optimize procurement timing.",
        },
        {
          icon: "FileCheck",
          title: "QA/QC Management",
          description:
            "Record inspections, track defects, and ensure quality compliance across all phases.",
        },
        {
          icon: "HeartPulse",
          title: "HSE Management",
          description:
            "Log incidents, record safety observations, and conduct toolbox talks with full traceability.",
        },
        {
          icon: "BadgeDollarSign",
          title: "Quantity Surveying & Billing",
          description:
            "Create measurement sheets, manage variations, and track earned value for accurate billing.",
        },
        {
          icon: "CalendarClock",
          title: "Planning & Scheduling",
          description:
            "Define activities, set milestones, manage baselines, and track schedule performance.",
        },
      ],
    },
    {
      type: "comparison",
      title: "ConstructOS vs. Traditional Construction Management",
      description:
        "How ConstructOS simplifies operations compared to spreadsheets, email, and disconnected tools.",
      columns: ["ConstructOS", "Spreadsheets & Email", "Legacy Systems"],
      rows: [
        { label: "Real-Time Site Updates", values: [true, false, false] },
        { label: "Single Source of Truth", values: [true, false, false] },
        { label: "Mobile Field Access", values: [true, false, false] },
        { label: "Automated Reporting", values: [true, false, false] },
        { label: "AI-Powered Insights", values: [true, false, false] },
        { label: "Enterprise RBAC", values: [true, false, "Limited"] },
        { label: "Audit & Compliance Tracking", values: [true, false, false] },
        { label: "Flexible Deployment", values: [true, false, false] },
      ],
    },
    {
      type: "faq",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Which teams use ConstructOS?",
          a: "Project managers, planners, procurement teams, QS engineers, site engineers, supervisors, HSE officers, QA/QC teams, finance teams, and project administrators all use ConstructOS. It serves both office-based and field-based roles seamlessly.",
        },
        {
          q: "Does ConstructOS work on mobile?",
          a: "Yes. ConstructOS Site Execution is a dedicated mobile app for field teams, enabling daily progress updates, material requests, inspection records, and photo/video documentation. The main ERP is also accessible on tablets via the web app.",
        },
        {
          q: "Can we deploy ConstructOS on-premise or white-label it?",
          a: "Yes. ConstructOS supports multi-tenant SaaS, single-tenant, on-premise, and white-label deployments to match your organizational structure and compliance requirements.",
        },
        {
          q: "How does ConstructOS ensure data security?",
          a: "ConstructOS uses enterprise-grade role-based access control (RBAC), encryption, authentication, and authorization. All actions are audit-logged and the platform is designed to meet construction industry compliance standards.",
        },
        {
          q: "Can ConstructOS integrate with other systems?",
          a: "Yes. The backend API is built for third-party integrations. We provide API documentation and support custom integrations to connect with your existing tools and workflows.",
        },
        {
          q: "How does the AI Insights feature work?",
          a: "AI Insights uses rule-based analysis of your project data to surface trends, flag variances, and provide decision-support recommendations. It powers dashboards, alerts, and reports to support better project decisions across the platform.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Transform Your Construction Operations?",
      description:
        "See how ConstructOS connects your entire team, simplifies project management, and drives better outcomes.",
      primary: { label: "Schedule a Demo", href: "/contact?intent=demo" },
      secondary: { label: "Contact Sales", href: "/contact?intent=sales" },
    },
  ],
  seo: {
    title: "ConstructOS - Construction Management Platform",
    description:
      "Unified construction management platform connecting office, site, and field teams. Manage procurement, execution, quality, billing, HSE, and reporting in one intelligent system.",
    keywords: [
      "construction management software",
      "construction ERP platform",
      "project management system",
      "construction field execution app",
    ],
  },
};
