import type { Product } from "../types";

/**
 * NAS Neuron — an Identity & Access Management (IAM) automation tool. A live
 * product rendered by the data-driven ProductDetailTemplate (`hero` +
 * `sections`), so no bespoke component is needed. Linked to the
 * `security-compliance` industry via `industries`. Authored from the NAS Neuron
 * IAM Tool Developer Specification (v1.0). Per the client's branding, the name
 * is "NAS Neuron" with no "iWebwiser" prefix.
 */
export const nasNeuron: Product = {
  slug: "nas-neuron",
  name: "NAS Neuron",
  tagline: "Automate access reviews and onboarding. Prove compliance on demand.",
  category: "Identity & Access Management",
  status: "live",
  icon: "Fingerprint",
  accent: { from: "#0B57D0", to: "#00C2FF" },
  featured: true,
  productImg: "/assets/images/NasNeuron/01.png",
  shortDescription:
    "An IAM automation platform that runs access recertification campaigns, digitizes joiner onboarding, and records every action in an immutable, audit-ready trail — built for ADHICS v2 and UAE PDPL compliance.",
  industries: ["security-compliance"],
  keyBenefits: [
    {
      icon: "RefreshCw",
      title: "Automated Access Recertification",
      description:
        "Scheduled campaigns ask managers to certify or revoke each user's access — quarterly for standard users, monthly for privileged — with no manual triggers.",
    },
    {
      icon: "UserCheck",
      title: "Digital Joiner Onboarding",
      description:
        "Replace paper new-starter forms with an automated workflow: HR submits, managers pick access packages, IT receives a structured provisioning ticket.",
    },
    {
      icon: "Bell",
      title: "Reminders & Escalations",
      description:
        "Automatic Day 3 reminders, Day 5 escalation to senior managers, and Day 7 CISO escalation — overdue reviews never slip through the cracks.",
    },
    {
      icon: "ScrollText",
      title: "Immutable Audit Trail",
      description:
        "Every campaign, email, decision, and ticket is written to an append-only audit log — exportable as a professional PDF report for DoH/DHA auditors.",
    },
    {
      icon: "Plug",
      title: "Microsoft 365 & App Connectors",
      description:
        "Reads identities from Active Directory and SharePoint via Microsoft Graph, plus external partner users from nTouch, PBM, JetPortal, and Qlik.",
    },
    {
      icon: "ShieldCheck",
      title: "ADHICS v2 & PDPL Compliance",
      description:
        "Built for UAE governance — role-scoped reviewers, configurable policies, append-only logging, and data residency in the UAE Azure region.",
    },
  ],
  hero: {
    eyebrow: "Identity & Access Management",
    headline: "Automate access governance. Prove compliance on demand.",
    subheadline:
      "NAS Neuron runs recertification campaigns, digitizes new-starter onboarding, and records every decision in an immutable audit trail — so the right people have the right access, and you can prove it.",
    highlights: [
      "Access recertification + joiner automation",
      "Microsoft Graph / Active Directory integration",
      "ADHICS v2 & UAE PDPL audit-ready",
    ],
    primaryCta: { label: "Request a Demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Talk to Sales", href: "/contact?intent=sales" },
  },
  sections: [
    {
      type: "split-feature",
      eyebrow: "Module 1 — Recertification",
      productImgSecond: "/assets/images/NasNeuron/01.png",
      title: "Internal & External Access Recertification",
      description:
        "On a regular schedule, NAS Neuron asks each manager to confirm their team still needs the access they have. Standard users are reviewed quarterly, privileged users monthly. Internal staff come from Active Directory; external partner users come from your custom applications.",
      bullets: [
        "Auto-classify privileged users from configurable AD security groups",
        "Group users by manager so each reviewer gets one consolidated task",
        "One-click Certify / Revoke per user, with mandatory action on every row",
        "Revocations raise a structured IT helpdesk ticket automatically",
        "External reviewers routed via a configurable Relationship Owner table",
      ],
      metrics: [
        { value: "Quarterly / Monthly", label: "Two-tier review cadence" },
        { value: "Token-Link", label: "No login required for reviewers" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Module 2 — Joiner Process",
      productImgSecond: "/assets/images/NasNeuron/02.png",
      title: "Digital Joiner Onboarding",
      description:
        "Replace paper new-starter forms with a fully tracked digital workflow. HR submits a New Starter form, the line manager picks the access package, and NAS Neuron raises a complete provisioning ticket for IT — with reminders and audit at every step.",
      reverse: true,
      bullets: [
        "HR New Starter form triggers the workflow automatically",
        "Managers confirm access from pre-configured department packages",
        "Structured helpdesk ticket lists every system, access level, and asset",
        "Reminders at 24h / 48h and escalation 72h before the start date",
        "Confirmation to HR and manager with expected completion date",
      ],
      metrics: [
        { value: "3 Days", label: "Manager SLA before start date" },
        { value: "2 Minutes", label: "From HR submit to manager email" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Control & Visibility",
      productImgSecond: "/assets/images/NasNeuron/03.png",
      title: "Live CISO Dashboard & Auto-Escalation",
      description:
        "A live operational view of both modules — not a static report. The CISO sees every active campaign, overdue review, pending revocation, and joiner in flight, while automatic chasers and escalations run in the background.",
      bullets: [
        "Campaign overview: % complete, submitted vs. outstanding reviewers",
        "Overdue reviews highlighted in red past five days",
        "Pending revocations tracked until the helpdesk ticket is confirmed",
        "Joiner tracker from HR submission through to IT completion",
        "Configurable policies, reviewers, templates, and escalations — no code changes",
      ],
      metrics: [
        { value: "Day 3 / 5 / 7", label: "Reminder & escalation cadence" },
        { value: "Real-Time", label: "Operational dashboard" },
      ],
    },
    {
      type: "feature-grid",
      eyebrow: "Foundation",
      title: "Built for Enterprise IAM",
      description: "An architecture designed for security, auditability, and configuration without code.",
      features: [
        {
          icon: "Plug",
          title: "Microsoft Graph Integration",
          description:
            "App-only service-principal auth with read-only access to Active Directory groups, roles, and the manager field.",
        },
        {
          icon: "Database",
          title: "Append-Only Audit Log",
          description:
            "PostgreSQL or SQL Server with an immutable audit table — no UPDATE or DELETE permitted once written.",
        },
        {
          icon: "Mail",
          title: "Configurable Email Engine",
          description:
            "Database-stored templates with tokens like {{manager_name}}, sent from a named mailbox via Graph or SendGrid.",
        },
        {
          icon: "Settings",
          title: "CISO Admin Panel",
          description:
            "Edit frequencies, reviewers, privileged groups, relationship owners, and escalation addresses — no developer involvement.",
        },
        {
          icon: "Smartphone",
          title: "Mobile Reviewer Portal",
          description:
            "Managers review and submit from a tokenised link on iOS Safari or Android Chrome — no separate login.",
        },
        {
          icon: "Cloud",
          title: "Azure UAE Hosting",
          description:
            "Deployed on Azure in the UAE region for data residency, with scheduled jobs driving every campaign.",
        },
      ],
    },
    {
      type: "comparison",
      eyebrow: "Why NAS Neuron",
      title: "NAS Neuron vs. Manual Access Reviews",
      description:
        "How automated governance compares to spreadsheets, email chains, and paper joiner forms.",
      columns: ["NAS Neuron", "Spreadsheets & Email", "Manual / Paper"],
      rows: [
        { label: "Scheduled recertification campaigns", values: [true, false, false] },
        { label: "Automatic reminders & escalations", values: [true, false, false] },
        { label: "Immutable, append-only audit log", values: [true, false, false] },
        { label: "Privileged-user auto-classification", values: [true, "Manual", false] },
        { label: "Digital joiner onboarding", values: [true, "Partial", false] },
        { label: "Auditor-ready PDF export", values: [true, "Manual", false] },
        { label: "ADHICS v2 / UAE PDPL alignment", values: [true, false, false] },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What does NAS Neuron do?",
          a: "NAS Neuron is an IAM automation tool with two modules: access recertification (regular reviews where managers certify or revoke their team's access) and a joiner process (digital new-starter onboarding). Every action is recorded in an immutable audit trail for compliance.",
        },
        {
          q: "How does it connect to our identity sources?",
          a: "It reads internal staff accounts from Active Directory and SharePoint via the Microsoft Graph API using read-only, app-only authentication. External partner users (in apps like nTouch, PBM, JetPortal, and Qlik) are read via secure database views. NAS Neuron never writes back to these systems in Phase 2 — revocations are raised as helpdesk tickets.",
        },
        {
          q: "How are privileged users handled?",
          a: "Privileged users (IT admins, super-users, and anyone with elevated rights) are auto-classified from configurable AD security groups and reviewed monthly, while standard users are reviewed quarterly. The privileged-group list is configurable by the CISO — never hardcoded.",
        },
        {
          q: "What happens if a reviewer misses the deadline?",
          a: "NAS Neuron chases automatically: a reminder on Day 3, escalation to the senior manager on Day 5, and escalation to the SLT/CISO on Day 7. The campaign closes on Day 14, flagging any unreviewed access for the CISO to action — access is never auto-revoked.",
        },
        {
          q: "Is it compliant with UAE healthcare regulations?",
          a: "Yes. The append-only audit log is the primary evidence for ADHICS v2 and UAE PDPL audits, exportable as a professional PDF filtered by date, campaign, user, or reviewer — the report shown to DoH or DHA auditors. Hosting is in the UAE Azure region for data residency.",
        },
        {
          q: "Can managers review access on their phones?",
          a: "Yes. Reviewers open their task from a secure tokenised link — no separate login — and the portal is built to work on mobile browsers (tested on iOS Safari and Android Chrome). The CISO admin portal uses Azure AD SSO.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Take Control of Access Governance?",
      description:
        "See how NAS Neuron automates recertification, onboarding, and audit — and proves compliance on demand.",
      primary: { label: "Schedule a Demo", href: "/contact?intent=demo" },
      secondary: { label: "Contact Sales", href: "/contact?intent=sales" },
    },
  ],
  metrics: [
    { value: "2", label: "Modules (recertification + joiner)" },
    { value: "Monthly / Quarterly", label: "Privileged & standard review cadence" },
    { value: "100%", label: "Actions captured in an append-only audit log" },
    { value: "ADHICS v2", label: "& UAE PDPL compliance-ready" },
  ],
  seo: {
    title: "NAS Neuron - Identity & Access Management Automation Tool",
    description:
      "Automate access recertification and joiner onboarding with NAS Neuron. Microsoft Graph / Active Directory integration, immutable audit trail, and ADHICS v2 & UAE PDPL compliance-ready reporting.",
    keywords: [
      "identity and access management",
      "access recertification software",
      "IAM automation",
      "access governance",
      "ADHICS PDPL compliance",
    ],
  },
};
