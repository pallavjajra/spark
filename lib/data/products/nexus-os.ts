import type { Product } from "../types";

/**
 * NexusOS — the unified, modular ERP for multi-site enterprises. A live product
 * rendered by the data-driven ProductDetailTemplate (`hero` + `sections`), so no
 * bespoke component is needed. Linked to the `enterprise-operations` industry
 * via `industries`. Authored from the ERP System Client Overview document
 * (seven modules: HR, Attendance, Payroll, Supply Chain, Finance, Site/Project,
 * Tasks & Notifications). Product name recommended for an enterprise-ready,
 * scalable, modular ERP — kept within the iWebwiser "OS" family.
 */
export const nexusOs: Product = {
  slug: "nexus-os",
  name: "iWebwiser NexusOS",
  tagline: "Run your entire multi-site operation on one ERP.",
  category: "Enterprise Resource Planning",
  status: "live",
  icon: "Network",
  accent: { from: "#0B57D0", to: "#00C2FF" },
  featured: true,
  productImg: "/assets/images/nexus os/01.png",
  shortDescription:
    "A unified, modular ERP that brings HR, attendance, payroll, supply chain, finance, and site operations onto one approval-driven platform — giving multi-site enterprises real-time visibility and a complete audit trail.",
  industries: ["enterprise-operations"],
  keyBenefits: [
    {
      icon: "Layers",
      title: "One Unified Platform",
      description:
        "HR, payroll, supply chain, finance, and site operations run from one shared database — no more disconnected spreadsheets and email approvals.",
    },
    {
      icon: "Workflow",
      title: "Approval-Driven Workflows",
      description:
        "No purchase, payment, or salary is processed without passing through the right approval chain, enforced by your live org hierarchy.",
    },
    {
      icon: "MapPin",
      title: "Multi-Site Operations",
      description:
        "Manage large workforces and budgets across every project and O&M site, with geofenced attendance and per-site cost centres.",
    },
    {
      icon: "Wallet",
      title: "Real-Time Budget Control",
      description:
        "Budgets freeze on PO approval and release on payment, so leaders see live utilisation across every site and expense category.",
    },
    {
      icon: "ScrollText",
      title: "Full Audit Trail",
      description:
        "Every action is logged with user, timestamp, and reason — approvals, payments, TDS, and ledgers all traceable for compliance.",
    },
    {
      icon: "Smartphone",
      title: "Self-Service & Mobile",
      description:
        "Employees mark attendance, apply for leave, view payslips, and submit requests from a mobile-first self-service portal.",
    },
  ],
  hero: {
    eyebrow: "Enterprise Resource Planning",
    headline: "Run your entire multi-site operation on one platform",
    subheadline:
      "NexusOS unifies HR, attendance, payroll, supply chain, finance, and site management into one approval-driven ERP — giving leadership real-time visibility and employees a seamless experience.",
    highlights: [
      "Seven connected modules, one source of truth",
      "Approval-driven, role-based, audit-ready",
      "Built for multi-site workforces and projects",
    ],
    primaryCta: { label: "Request a Demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Talk to Sales", href: "/contact?intent=sales" },
  },
  sections: [
    {
      type: "split-feature",
      eyebrow: "Workforce",
      title: "People: HR, Attendance & Payroll",
      description:
        "Manage the full employee lifecycle — onboarding, org structure, leave, transfers — with geofenced attendance that flows straight into automated, error-free payroll.",
      bullets: [
        "Digital onboarding with role-based access provisioned automatically",
        "Mobile, geofenced check-in/out with shift and overtime tracking",
        "Leave, attendance regularization, and outdoor-duty approval chains",
        "Attendance lock before payroll, then automatic salary calculation",
        "Digital payslips, reimbursements, and site-specific pay structures",
      ],
      metrics: [
        { value: "Geofenced", label: "Mobile attendance" },
        { value: "Automated", label: "Payroll from attendance" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Spend Control",
      title: "Procurement & Finance",
      description:
        "Every purchase is justified, approved, and within budget before a single rupee is committed. Procurement, inventory, and finance share one ledger and one budget engine.",
      reverse: true,
      bullets: [
        "PR → multi-level approval → PO → GRN → payment, fully tracked",
        "Real-time budgets that freeze on PO approval and release on payment",
        "Stock ledger, inter-site transfers, and asset/machinery tracking",
        "Payment ticketing for POs, expenses, reimbursements, and salaries",
        "Vendor, customer, and TDS ledgers with automated tax tracking",
      ],
      metrics: [
        { value: "7-Step", label: "Procure-to-pay journey" },
        { value: "Real-Time", label: "Budget freeze & release" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Visibility",
      title: "Sites, Projects & Tasks",
      description:
        "Each site is a command centre linking workforce, procurement, and finance into one view — with cost-centre reporting that shows exactly what every site earns versus spends.",
      bullets: [
        "O&M and Project site profiles with Google Maps and team hierarchy",
        "Per-site Supply, Staff, and Expense budgets with live utilisation",
        "Budget requests routed through the right financial authority",
        "Cost-centre reporting per customer and company",
        "Built-in task management and an automatic notification engine",
      ],
      metrics: [
        { value: "Per-Site", label: "Cost-centre profitability" },
        { value: "Live", label: "Budget utilisation alerts" },
      ],
    },
    {
      type: "feature-grid",
      eyebrow: "What's Inside",
      title: "Seven Connected Modules",
      description: "One platform, one database — every department working from the same source of truth.",
      features: [
        {
          icon: "Users",
          title: "Human Resources",
          description:
            "Onboarding, org structure, leave, transfers, and HR configuration in one place.",
        },
        {
          icon: "Clock",
          title: "Attendance & Time",
          description:
            "Geofenced mobile check-in, shifts, overtime, regularization, and attendance lock.",
        },
        {
          icon: "BadgeDollarSign",
          title: "Payroll & Salary",
          description:
            "Structure-based salary calculation, finance-approved disbursement, and digital payslips.",
        },
        {
          icon: "Package",
          title: "Supply Chain",
          description:
            "PR-to-PO procurement, GRN, stock ledger, inter-site transfers, and vendor master.",
        },
        {
          icon: "Landmark",
          title: "Finance & Accounts",
          description:
            "Payment ticketing, budget control, ledgers, automated TDS, and customer invoicing.",
        },
        {
          icon: "MapPin",
          title: "Site & Project Mgmt",
          description:
            "Site profiles, budgets, cost-centre reporting, tasks, and a notification engine.",
        },
      ],
    },
    {
      type: "stat-band",
      eyebrow: "By the Numbers",
      stats: [
        { value: "7", label: "Integrated modules on one platform" },
        { value: "1", label: "Shared database — single source of truth" },
        { value: "100%", label: "Approvals enforced by org hierarchy" },
        { value: "Real-Time", label: "Budget, attendance & financial visibility" },
      ],
    },
    {
      type: "comparison",
      eyebrow: "Why NexusOS",
      title: "NexusOS vs. Disconnected Tools",
      description:
        "How a unified ERP compares to spreadsheets, email approvals, and disconnected HR, finance, and procurement systems.",
      columns: ["NexusOS", "Spreadsheets & Email", "Point Solutions"],
      rows: [
        { label: "Single source of truth", values: [true, false, false] },
        { label: "Enforced approval workflows", values: [true, false, "Limited"] },
        { label: "Real-time budget control", values: [true, false, "Partial"] },
        { label: "Geofenced mobile attendance", values: [true, false, "Add-on"] },
        { label: "Automated payroll from attendance", values: [true, false, "Partial"] },
        { label: "Per-site cost-centre reporting", values: [true, "Manual", false] },
        { label: "Complete audit trail", values: [true, false, "Limited"] },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What does NexusOS cover?",
          a: "NexusOS is a unified ERP with seven connected modules: Human Resources, Attendance & Time Tracking, Payroll, Supply Chain Management, Finance & Accounts, Site & Project Management, and Task Management & Notifications — all operating from one shared database.",
        },
        {
          q: "Who uses NexusOS?",
          a: "Everyone from leadership and finance to HR, procurement, site managers, and field employees. Role-based access means each user sees only what's relevant to their role and department — from cross-department reports for admins to personal payslips for field staff.",
        },
        {
          q: "How does attendance connect to payroll?",
          a: "Employees mark geofenced attendance from the mobile app. Before payroll runs, HR locks the month's attendance; the system then calculates each employee's gross and net pay automatically, generates a salary ticket for finance approval, and issues digital payslips.",
        },
        {
          q: "How does budget control work?",
          a: "Every site has budgets by category. When a purchase order is approved, the budget amount is frozen; when payment is processed, the frozen amount is released and the actual expense is recorded. Leaders see real-time utilisation across all sites, and additional funds require an approved budget request.",
        },
        {
          q: "Can it handle multiple sites and projects?",
          a: "Yes. NexusOS is built for multi-site operations. It supports both O&M and Project sites, each with its own profile, team hierarchy, budgets, and cost-centre reporting linked to a specific customer and company — plotted on an interactive map.",
        },
        {
          q: "Is every action auditable?",
          a: "Yes. Every approval, payment, and correction is logged with the user's identity, timestamp, and reason. Approval workflows follow the live organisational hierarchy and cannot skip levels, and financial controls (attendance lock, budget freeze, payment tickets, automated TDS) are enforced by the system.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Unify Your Operations?",
      description:
        "See how NexusOS connects HR, finance, supply chain, and site operations on one platform built for multi-site enterprises.",
      primary: { label: "Schedule a Demo", href: "/contact?intent=demo" },
      secondary: { label: "Contact Sales", href: "/contact?intent=sales" },
    },
  ],
  metrics: [
    { value: "7", label: "Connected modules (HR to finance)" },
    { value: "1", label: "Shared database & source of truth" },
    { value: "Multi-Site", label: "Workforce, budgets & projects" },
    { value: "Audit-Ready", label: "Every action logged & traceable" },
  ],
  seo: {
    title: "NexusOS - Enterprise Resource Planning (ERP) Platform",
    description:
      "NexusOS is a unified, modular ERP for multi-site enterprises — HR, attendance, payroll, supply chain, finance, and site management on one approval-driven, audit-ready platform.",
    keywords: [
      "ERP software",
      "enterprise resource planning",
      "multi-site ERP",
      "HR payroll procurement software",
      "site and project management ERP",
    ],
  },
};
