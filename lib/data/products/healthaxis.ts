import type { Product } from "../types";

/**
 * HealthAxis — the AI-powered, ADHICS-compliant healthcare ecosystem. A live
 * product rendered by the data-driven ProductDetailTemplate (`hero` +
 * `sections`), so no bespoke component is needed. Linked to the
 * `healthcare-insurance` industry via `industries`, which powers the product
 * <-> industry cross-link graph. Authored from the HealthAxis project brief.
 */
export const healthaxis: Product = {
  slug: "healthaxis",
  name: "iWebwiser HealthAxis",
  tagline: "One connected, insurance-aware healthcare ecosystem.",
  category: "Healthcare Management Platform",
  status: "live",
  icon: "HeartPulse",
  accent: { from: "#0B57D0", to: "#00C2FF" },
  featured: true,
  productImg: "/assets/images/iwebwiser health axis/01.png",
  shortDescription:
    "An AI-powered, ADHICS-compliant healthcare ecosystem connecting patients, providers, and insurers — with insurance-aware provider discovery, eligibility checks, appointment booking, and real-time records in one platform.",
  industries: ["healthcare-insurance"],
  keyBenefits: [
    {
      icon: "BadgeCheck",
      title: "Insurance-Aware Access",
      description:
        "Patients verify eligibility, understand what's covered, and find in-network doctors and clinics before they book.",
    },
    {
      icon: "Network",
      title: "Provider Discovery",
      description:
        "Search and discover doctors, clinics, and hospitals — filtered by specialty and insurance network.",
    },
    {
      icon: "CalendarClock",
      title: "Appointments & Consultations",
      description:
        "Book and manage appointments, handle patient queues, and capture consultation and treatment records end to end.",
    },
    {
      icon: "Sparkles",
      title: "AI-Powered & Real-Time",
      description:
        "Intelligent insights with live updates, notifications, and healthcare record access across the entire care journey.",
    },
    {
      icon: "ShieldCheck",
      title: "ADHICS-Compliant Security",
      description:
        "Enterprise-grade security, governance, and role-based access control aligned to ADHICS healthcare compliance.",
    },
    {
      icon: "Languages",
      title: "Mobile-First & Bilingual",
      description:
        "A bilingual, mobile-first patient experience that makes healthcare access faster and more transparent.",
    },
  ],
  hero: {
    eyebrow: "Healthcare Management Platform",
    headline: "One connected platform for patients, providers, and insurers",
    subheadline:
      "From finding an in-network doctor and verifying insurance eligibility to booking, consultation, and real-time records — HealthAxis simplifies the entire healthcare journey.",
    highlights: [
      "Insurance-aware patient access",
      "Patient app, provider panel, and super admin",
      "AI-powered, ADHICS-compliant, real-time",
    ],
    primaryCta: { label: "See a Demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Talk to Sales", href: "/contact?intent=sales" },
  },
  sections: [
    {
      type: "split-feature",
      eyebrow: "Patient Access",
      title: "Insurance-Aware Patient Access",
      description:
        "HealthAxis is more than booking — it's an insurance-aware access system that helps patients understand coverage, find in-network providers, and book the right service without delays or confusion.",
      bullets: [
        "Check insurance eligibility and coverage status in real time",
        "Discover doctors and clinics included in your insurance network",
        "Avoid incorrect bookings and time lost on manual support calls",
        "Book and manage appointments with confidence",
        "Access prescriptions and consultation records anytime",
      ],
      metrics: [
        { value: "Real-Time", label: "Eligibility & Coverage Checks" },
        { value: "In-Network", label: "Provider Discovery" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "One Ecosystem",
      title: "Three Apps, One HealthAxis Data Flow",
      description:
        "Patients, providers, and administrators each get a tailored surface, all working together on one shared, real-time data flow.",
      reverse: true,
      bullets: [
        "Patient App — mobile-first, bilingual provider search, eligibility, booking, and records",
        "Provider Panel — desktop dashboard for scheduling, queues, consultations, and prescriptions",
        "Super Admin Platform — onboarding, roles, permissions, insurance/network config, and oversight",
        "Shared data model and authentication across every surface",
        "Real-time updates and notifications across the ecosystem",
      ],
      metrics: [
        { value: "3", label: "Integrated Applications" },
        { value: "1", label: "Unified Data Flow" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Governance & Compliance",
      title: "Secure, Compliant, and Centrally Governed",
      description:
        "A centralized Super Admin layer keeps the ecosystem scalable, secure, and compliant — governing every organization, provider, and insurance network from one place.",
      bullets: [
        "Organization and provider onboarding",
        "User, role, and permission management (RBAC)",
        "Insurance and network configuration",
        "Platform monitoring and compliance management",
        "ADHICS-aligned security and governance with full audit oversight",
      ],
      metrics: [
        { value: "ADHICS", label: "Compliance-Aligned" },
        { value: "RBAC", label: "Role-Based Access Control" },
      ],
    },
    {
      type: "feature-grid",
      eyebrow: "What's Inside",
      title: "Core Capabilities",
      description: "Everything you need to connect the complete healthcare journey.",
      features: [
        {
          icon: "Stethoscope",
          title: "Provider Discovery",
          description:
            "Search doctors, clinics, and hospitals — filtered by specialty and insurance network.",
        },
        {
          icon: "BadgeCheck",
          title: "Eligibility Verification",
          description:
            "Real-time insurance eligibility and coverage checks before every booking.",
        },
        {
          icon: "CalendarClock",
          title: "Appointment Management",
          description:
            "Book, reschedule, and manage appointments with live availability and patient queue handling.",
        },
        {
          icon: "ClipboardList",
          title: "Consultations & Prescriptions",
          description:
            "Capture consultation records, post-consultation updates, and digital prescriptions.",
        },
        {
          icon: "Bell",
          title: "Real-Time Updates",
          description:
            "Push notifications and live healthcare updates for patients and providers alike.",
        },
        {
          icon: "KeyRound",
          title: "Roles & Access Control",
          description:
            "Centralized user, role, and permission management across all connected organizations.",
        },
      ],
    },
    {
      type: "comparison",
      eyebrow: "Why HealthAxis",
      title: "HealthAxis vs. Traditional Healthcare Booking",
      description:
        "How HealthAxis removes insurance friction compared to phone calls, manual checks, and disconnected booking tools.",
      columns: ["HealthAxis", "Manual / Phone Booking", "Generic Booking Apps"],
      rows: [
        { label: "Real-time insurance eligibility", values: [true, false, false] },
        { label: "In-network provider discovery", values: [true, "Manual", false] },
        {
          label: "Patient, provider & admin in one platform",
          values: [true, false, "Partial"],
        },
        {
          label: "Consultation records & e-prescriptions",
          values: [true, false, "Limited"],
        },
        { label: "AI-powered insights", values: [true, false, false] },
        { label: "ADHICS-aligned compliance", values: [true, "Manual", false] },
        { label: "Bilingual, mobile-first access", values: [true, false, "Limited"] },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What is HealthAxis?",
          a: "HealthAxis is an AI-powered, ADHICS-compliant healthcare ecosystem that connects patients, providers, insurers, and operational teams in one platform — from finding an in-network doctor and verifying insurance eligibility to booking, consultation, prescriptions, and real-time records.",
        },
        {
          q: "How is HealthAxis different from a normal booking app?",
          a: "HealthAxis is an insurance-aware patient access system. Beyond booking, it helps patients understand their coverage, find doctors and clinics in their insurance network, and book the right service — reducing delays, incorrect bookings, and manual support calls.",
        },
        {
          q: "Who uses HealthAxis?",
          a: "Patients use the mobile Patient App; hospitals, clinics, doctors, and staff use the Provider Panel; and platform operators use the Super Admin Platform for onboarding, governance, and compliance. All three work on one shared, real-time data flow.",
        },
        {
          q: "Is the Patient App available on mobile?",
          a: "Yes. The Patient App is mobile-first and bilingual, designed for a simple, transparent healthcare experience — provider search, eligibility checks, booking, prescriptions, and real-time notifications.",
        },
        {
          q: "How does HealthAxis handle security and compliance?",
          a: "HealthAxis is built ADHICS-compliant with enterprise-grade security, role-based access control, and centralized governance. The Super Admin Platform manages permissions, monitoring, and compliance across all connected stakeholders.",
        },
        {
          q: "Can providers manage their full daily operations in HealthAxis?",
          a: "Yes. The Provider Panel is a desktop-focused dashboard for appointment and schedule management, patient queues, consultation and treatment records, post-consultation updates, and prescriptions — the primary workspace for clinical and operational teams.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Connect Your Healthcare Ecosystem?",
      description:
        "See how HealthAxis links patients, providers, and insurers on one secure, insurance-aware platform.",
      primary: { label: "Schedule a Demo", href: "/contact?intent=demo" },
      secondary: { label: "Contact Sales", href: "/contact?intent=sales" },
    },
  ],
  metrics: [
    { value: "3", label: "Connected apps (patient, provider, admin)" },
    { value: "Real-Time", label: "Insurance eligibility & coverage checks" },
    { value: "ADHICS", label: "Healthcare compliance-aligned" },
    { value: "Bilingual", label: "Mobile-first patient experience" },
  ],
  seo: {
    title: "HealthAxis - AI-Powered, Insurance-Aware Healthcare Platform",
    description:
      "Connect patients, providers, and insurers on one ADHICS-compliant platform. Verify insurance eligibility, discover in-network doctors, book appointments, and manage consultations and records.",
    keywords: [
      "healthcare platform",
      "insurance eligibility verification",
      "doctor appointment booking",
      "healthcare provider management",
      "ADHICS compliant healthcare software",
    ],
  },
};
