import type { Product } from "../types";

/**
 * PropertyOS — the enterprise property-management platform. A live product
 * rendered by the data-driven ProductDetailTemplate (`hero` + `sections`), so
 * no bespoke component is needed. Linked to the `property-management` industry
 * via `industries`, which powers the product <-> industry cross-link graph.
 */
export const propertyOs: Product = {
  slug: "property-os",
  name: "iWebwiser PropertyOS",
  tagline: "Enterprise property management for the Kingdom of Global Companies",
  category: "Property Management Platform",
  status: "live",
  icon: "Building2",
  accent: { from: "#0B57D0", to: "#00C2FF" },
  featured: true,
  productImg: "/assets/images/propertyManagement/01.png",
  shortDescription:
    "A comprehensive multi-tenant property management platform with lease administration, billing, finance, maintenance, and tenant self-service—built for Global Companies.",
  industries: ["property-management"],
  keyBenefits: [
    {
      icon: "Building2",
      title: "Complete Portfolio Control",
      description:
        "Manage properties, units, leases, and tenants from a single unified platform with real-time insights and drill-down reporting.",
    },
    {
      icon: "CreditCard",
      title: "Automated Billing & Collections",
      description:
        "Invoice generation, payment capture via BenefitPay, dunning workflows, and bank reconciliation—all built-in.",
    },
    {
      icon: "Workflow",
      title: "Workflow & Approvals",
      description:
        "Configurable approval chains for leases, purchases, and policy changes with audit trail and delegation.",
    },
    {
      icon: "Users",
      title: "Tenant Self-Service Portal",
      description:
        "Tenants browse, apply, pay invoices, request maintenance, and sign leases via a Progressive Web App.",
    },
    {
      icon: "Sparkles",
      title: "AI-Native Operations",
      description:
        "Document classification, churn risk prediction, and rent-optimization suggestions to guide decision-making.",
    },
    {
      icon: "Languages",
      title: "Bilingual & Global Companies-Ready",
      description:
        "Full Arabic + English support, RTL layout, NBR VAT compliance, CPR identity, and WhatsApp notifications.",
    },
  ],
  hero: {
    eyebrow: "Enterprise Property Management",
    headline: "Run your entire property business in one platform",
    subheadline:
      "From lease signing to tenant payment to maintenance dispatch—PropertyOS gives you real-time control, AI insights, and compliance out of the box.",
    highlights: [
      "Four web apps (admin, operations, tenant portal, vendor portal)",
      "Multi-tenant, RBAC, audit-everything architecture",
      "Global Companies-specific: BenefitPay, VAT, WhatsApp, bilingual UI",
    ],
    primaryCta: { label: "Request a Demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Get a Quote", href: "/contact?intent=sales" },
  },
  sections: [
    {
      type: "split-feature",
      eyebrow: "Operations",
      title: "The Digital Backbone for Property Teams",
      description:
        "PropertyOS consolidates every operational domain—leasing, billing, maintenance, HR, procurement, finance—into one modular platform. No more silos or spreadsheets.",
      bullets: [
        "Lease lifecycle from draft to activation to renewal management",
        "Tenant relationship management with application workflows and document vault",
        "Invoice generation from lease terms, payment reconciliation, credit notes, and dunning",
        "General ledger, chart of accounts, period close, VAT reporting",
        "Work orders, inspections, vendor dispatch, SLA tracking",
      ],
      metrics: [
        { value: "17", label: "Operational modules in P2 alone" },
        { value: "9", label: "Domain-bounded contexts" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Control & Visibility",
      title: "Audit, Compliance, and Real-Time Reporting",
      description:
        "Every state-changing action is logged. Full audit trail, role-based access control with 13+ roles, and drill-down analytics for decision-makers.",
      bullets: [
        "Audit log with actor, timestamp, before-after values, and hash-chain integrity",
        "Role-based permissions (RBAC) configurable per organization",
        "Real-time dashboards and custom reports via Power BI integration",
        "Multi-tenant isolation enforced at the database row level",
        "Idempotent writes and conflict resolution for data safety",
      ],
      metrics: [
        { value: "100%", label: "Actions logged and auditable" },
        { value: "13+", label: "Predefined roles with scoping" },
      ],
      reverse: true,
    },
    {
      type: "split-feature",
      eyebrow: "Channels",
      title: "Four Apps, One Backend",
      description:
        "A tailored experience for every stakeholder—admins, staff, tenants, and vendors—all backed by a single modular NestJS monolith.",
      bullets: [
        "P1 Super Admin Console: platform-wide configuration, branding, security, integrations",
        "P2 Company Admin: full operational control (properties, leases, billing, HR, procurement)",
        "P3 Tenant Portal (PWA): apply, view lease terms, pay invoices, request maintenance, sign documents",
        "P4 Vendor & Field Staff (PWA): work orders, check-in, photo evidence, invoicing",
      ],
      metrics: [
        { value: "REST + WebSockets", label: "Real-time synchronization" },
        { value: "Offline-first", label: "PWAs work offline, sync on reconnect" },
      ],
    },
    {
      type: "feature-grid",
      eyebrow: "Built For Enterprise",
      title: "Enterprise-Grade Foundation",
      features: [
        {
          icon: "Database",
          title: "PostgreSQL + Prisma",
          description:
            "Row-level multi-tenancy, migrations, and type-safe ORM with soft-delete and audit middleware.",
        },
        {
          icon: "Cloud",
          title: "Cloud-Ready Architecture",
          description:
            "Stateless backend, Redis cache + BullMQ queues, signed storage URLs, and blue-green deployments.",
        },
        {
          icon: "FileCheck",
          title: "Document Vault",
          description:
            "Upload, virus scan, OCR, e-signature binding, and versioned storage for leases, contracts, and evidence.",
        },
        {
          icon: "Bell",
          title: "Omnichannel Notifications",
          description:
            "WhatsApp, SMS, Email templates with Global Companies-specific providers; realtime via WebSocket and async via BullMQ.",
        },
        {
          icon: "Plug",
          title: "Integration Hub",
          description:
            "BenefitPay (payments), Bank Feeds, NBR VAT, EWA (utilities), Power BI, Microsoft 365, Maps, KYC.",
        },
        {
          icon: "Shield",
          title: "Security & Compliance",
          description:
            "JWT + OIDC, MFA, step-up authentication, PDPL alignment, request signing, secrets rotation.",
        },
      ],
    },
    {
      type: "stat-band",
      eyebrow: "Scale & Reliability",
      stats: [
        { value: "30+", label: "API entities (Organization, Property, Lease, Invoice, etc.)" },
        { value: "200+", label: "REST endpoints fully documented in OpenAPI" },
        { value: "1000+", label: "Audit-enabled workflows across all modules" },
        { value: "99%", label: "Test coverage target across backend and frontend" },
      ],
    },
    {
      type: "comparison",
      eyebrow: "Why PropertyOS",
      title: "PropertyOS vs. Spreadsheets & Legacy Tools",
      columns: ["PropertyOS", "Spreadsheets", "Legacy Systems"],
      rows: [
        {
          label: "Multi-tenant (SaaS-ready)",
          values: [true, false, "Per-organization"],
        },
        {
          label: "Real-time collaboration",
          values: [true, "Version conflicts", false],
        },
        {
          label: "Audit trail",
          values: [true, "Manual", "Limited"],
        },
        { label: "Mobile-first PWAs", values: [true, false, "Native only"] },
        {
          label: "Global Companies compliance (VAT, BenefitPay)",
          values: [true, "Manual", "Outdated"],
        },
        {
          label: "AI-powered insights",
          values: [true, false, false],
        },
        {
          label: "API-first integrations",
          values: [true, false, "Custom"],
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: "Frequently Asked",
      items: [
        {
          q: "Is PropertyOS built for Global Companies or can it work elsewhere?",
          a: "Phase 1 is built for Global Companies with NBR VAT, BenefitPay, EWA, WhatsApp, CPR/Passport, and Global Companiesi labor law. Phase 2 will add multi-country GAAP support and localized integrations.",
        },
        {
          q: "Can tenants use PropertyOS on mobile?",
          a: "Yes. P3 (Tenant Portal) and P4 (Vendor Portal) are delivered as Progressive Web Apps that work offline and sync when reconnected. Native Expo mobile apps are Phase 2.",
        },
        {
          q: "How does multi-tenancy work? Is my data isolated?",
          a: "Yes. Every record carries an organization_id and belongs to one tenant. Database-level row security enforces isolation. Every API request includes an X-Tenant header validated by middleware.",
        },
        {
          q: "What's the backup and disaster recovery plan?",
          a: "PostgreSQL is the single source of truth with automated backups; Redis is cache (not critical) and BullMQ queues (replayed on recovery). See docs/06-deployment for runbook.",
        },
        {
          q: "How do I connect PropertyOS to our existing tools?",
          a: "PropertyOS has a built-in Integration Hub with BenefitPay, Bank Feeds, NBR, EWA, Power BI, Microsoft 365, and Maps. REST API and webhooks enable custom integrations.",
        },
        {
          q: "Can I customize workflows and approvals?",
          a: "Yes. Approval chains are configurable per organization via the admin console. The Workflow Module allows delegation and multi-step sign-off with full audit.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Transform Your Property Business?",
      description: "Talk to our team about your operations and see PropertyOS in action.",
      primary: { label: "Schedule a Demo", href: "/contact?intent=demo" },
      secondary: { label: "Speak with Sales", href: "/contact?intent=sales" },
    },
  ],
  metrics: [
    { value: "4", label: "Web applications (admin, ops, tenant, vendor)" },
    { value: "1", label: "NestJS backend powering all four" },
    { value: "13+", label: "Roles with fine-grained permissions" },
    { value: "0", label: "Spreadsheets needed (full digital)" },
  ],
  seo: {
    title: "PropertyOS - Enterprise Property Management for Global Companies",
    description:
      "Manage leases, billing, maintenance, and tenants in one platform. Multi-tenant, audit-ready, Global Companies-compliant, and mobile-first.",
    keywords: [
      "property management software",
      "lease management",
      "tenant billing",
      "maintenance tracking",
      "Global Companies real estate",
    ],
  },
};
