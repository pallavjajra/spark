import type { Product } from "../types";

/**
 * FreightLedger — an all-in-one logistics management system for trucking and
 * transport companies. A live product rendered by the data-driven
 * ProductDetailTemplate (`hero` + `sections`). Linked to the `logistics-delivery`
 * industry via `industries`. Authored from the delivered "MyBilty" case study
 * (digital consignment notes / bilty, invoicing, multi-branch operations, and
 * built-in accounting with a driver app + manager web console). Listed under a
 * distinct product name per the client's request (no "iWebwiser" prefix).
 */
export const freightLedger: Product = {
  slug: "freight-ledger",
  name: "FreightLedger",
  tagline: "Run your transport operation from truck receipt to balance sheet.",
  category: "Logistics & Freight Management",
  status: "live",
  icon: "Truck",
  accent: { from: "#0B57D0", to: "#00C2FF" },
  featured: true,
  shortDescription:
    "An all-in-one logistics management system for trucking and transport companies — digital consignment notes (bilty/LR), automated invoicing, multi-branch coordination, and built-in accounting, with a driver mobile app and a manager web console.",
  industries: ["logistics-delivery"],
  keyBenefits: [
    {
      icon: "FileCheck",
      title: "Digital Consignment Notes",
      description:
        "Create, store, and track every truck receipt (bilty/LR) digitally — no lost paperwork and a complete, searchable record.",
    },
    {
      icon: "CreditCard",
      title: "Automated Invoicing",
      description:
        "Generate invoices straight from receipts and track collections, creditors, and debtors without manual data entry.",
    },
    {
      icon: "Building2",
      title: "Multi-Branch Control",
      description:
        "Coordinate operations, subscriptions, and employee task assignments across every branch from one dashboard.",
    },
    {
      icon: "Landmark",
      title: "Built-In Accounting",
      description:
        "Creditor and debtor ledgers, profit & loss, and balance sheets generated automatically from daily operations.",
    },
    {
      icon: "Smartphone",
      title: "Driver App + Manager Web",
      description:
        "Drivers update trips and receipts from an Android app; managers run the entire operation from the web.",
    },
    {
      icon: "BarChart3",
      title: "Real-Time Reporting",
      description:
        "Live visibility into receipts, invoices, branches, employees, and accounts for faster, data-backed decisions.",
    },
  ],
  hero: {
    eyebrow: "Logistics & Freight Management",
    headline: "From truck receipt to balance sheet, on one platform",
    subheadline:
      "FreightLedger digitizes the entire transport workflow — consignment notes, invoicing, multi-branch operations, and accounting — so carriers, drivers, and managers all work from one accurate source of truth.",
    highlights: [
      "Digital bilty/LR, invoicing, and accounting in one system",
      "Driver mobile app and manager web console",
      "Multi-branch operations with real-time reporting",
    ],
    primaryCta: { label: "Request a Demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Talk to Sales", href: "/contact?intent=sales" },
  },
  sections: [
    {
      type: "split-feature",
      eyebrow: "Documents",
      title: "Consignment Notes & Receipts",
      description:
        "Replace the paper register with a secure digital ledger of every truck receipt. Each bilty (lorry receipt) is created, stored, and tracked in one place — with no lost documents and full traceability from pickup to delivery.",
      bullets: [
        "Secure creation, storage, and tracking of every truck receipt",
        "Searchable history across trips, trucks, and branches",
        "Linked to the customer, route, and invoice it belongs to",
        "Eliminates manual paperwork and re-keying errors",
      ],
      metrics: [
        { value: "Paperless", label: "Receipt management" },
        { value: "100%", label: "Traceable trips" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Billing",
      title: "Invoicing & Collections",
      description:
        "Turn receipts into invoices in a click and keep collections under control. FreightLedger tracks what every customer owes and every vendor is owed, so cash flow is always visible.",
      reverse: true,
      bullets: [
        "Generate invoices systematically from booked receipts",
        "Track creditors, debtors, and outstanding collections",
        "Consolidated billing across branches and customers",
        "Fewer disputes thanks to receipt-linked invoices",
      ],
      metrics: [
        { value: "1-Click", label: "Receipt to invoice" },
        { value: "Live", label: "Creditor & debtor view" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Finance",
      title: "Built-In Accounting & Reporting",
      description:
        "Every receipt and invoice rolls up into real accounts. Profit & loss, balance sheets, and party ledgers are generated automatically from daily operations — no separate bookkeeping software required.",
      bullets: [
        "Automated profit & loss and balance-sheet statements",
        "Creditor/debtor ledgers updated from live operations",
        "Per-branch and consolidated financial reporting",
        "Account reconciliation that keeps the books audit-clean",
      ],
      metrics: [
        { value: "Auto", label: "P&L and balance sheet" },
        { value: "Per-Branch", label: "Financial reporting" },
      ],
    },
    {
      type: "feature-grid",
      eyebrow: "What's Inside",
      title: "Everything a Transport Business Runs On",
      description:
        "One system for documents, billing, branches, and books — so nothing lives in a separate spreadsheet.",
      features: [
        {
          icon: "FileCheck",
          title: "Receipt Management",
          description:
            "Digital bilty/LR creation, storage, and tracking with a complete searchable history.",
        },
        {
          icon: "CreditCard",
          title: "Invoicing",
          description:
            "Systematic invoice generation from receipts, with collections and outstanding tracking.",
        },
        {
          icon: "Building2",
          title: "Multi-Branch",
          description:
            "Coordinate operations, subscriptions, and tasks across every location from one console.",
        },
        {
          icon: "Landmark",
          title: "Accounting & Ledgers",
          description:
            "Creditors, debtors, P&L, and balance sheets generated automatically from operations.",
        },
        {
          icon: "Users",
          title: "Employees & Roles",
          description:
            "Assign responsibilities and tasks to staff with clear accountability across branches.",
        },
        {
          icon: "BarChart3",
          title: "Reporting & Dashboard",
          description:
            "A unified dashboard over receipts, invoices, branches, employees, and accounts.",
        },
      ],
    },
    {
      type: "stat-band",
      eyebrow: "By the Numbers",
      stats: [
        { value: "1", label: "System for documents, billing & books" },
        { value: "Multi-Branch", label: "Operations from one dashboard" },
        { value: "Web + App", label: "Manager console and driver app" },
        { value: "Real-Time", label: "Receipts, invoices & accounts" },
      ],
    },
    {
      type: "comparison",
      eyebrow: "Why FreightLedger",
      title: "FreightLedger vs. Paper & Spreadsheets",
      description:
        "How a purpose-built logistics system compares to manual registers and generic accounting tools.",
      columns: ["FreightLedger", "Paper & Registers", "Generic Accounting"],
      rows: [
        { label: "Digital consignment notes (bilty/LR)", values: [true, false, false] },
        { label: "Receipt-linked invoicing", values: [true, false, "Manual"] },
        { label: "Multi-branch operations", values: [true, false, "Limited"] },
        { label: "Built-in transport accounting", values: [true, false, true] },
        { label: "Driver mobile app", values: [true, false, false] },
        { label: "Real-time operational dashboard", values: [true, false, "Partial"] },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What is FreightLedger?",
          a: "FreightLedger is an all-in-one logistics management system for trucking and transport companies. It digitizes consignment notes (bilty/LR), automates invoicing, coordinates multi-branch operations, and includes built-in accounting — all from one platform with a manager web console and a driver mobile app.",
        },
        {
          q: "Who uses it?",
          a: "Trucking company managers and business operators run the web console, while drivers and branch employees use the mobile app to update trips and receipts. Role-based access keeps each user focused on their responsibilities across every branch.",
        },
        {
          q: "How does a receipt become an invoice?",
          a: "Every truck receipt is created and stored digitally. When it's time to bill, FreightLedger generates the invoice directly from those receipts, then tracks the collection against the customer's ledger — so billing stays accurate and disputes drop.",
        },
        {
          q: "Does it replace our accounting software?",
          a: "For transport operations, yes. Receipts and invoices roll up automatically into creditor/debtor ledgers, profit & loss, and balance sheets, with per-branch and consolidated reporting — so the books stay current without separate bookkeeping.",
        },
        {
          q: "Can it handle multiple branches?",
          a: "Yes. FreightLedger is built for multi-branch operators, coordinating operations, subscriptions, employee tasks, and accounts across every location from one unified dashboard.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Digitize Your Transport Operation?",
      description:
        "See how FreightLedger turns paperwork, billing, and bookkeeping into one connected logistics platform.",
      primary: { label: "Schedule a Demo", href: "/contact?intent=demo" },
      secondary: { label: "Contact Sales", href: "/contact?intent=sales" },
    },
  ],
  metrics: [
    { value: "Paperless", label: "Digital consignment notes" },
    { value: "1-Click", label: "Receipt to invoice" },
    { value: "Multi-Branch", label: "Operations & accounting" },
    { value: "Web + App", label: "Manager and driver access" },
  ],
  seo: {
    title: "FreightLedger - Logistics & Transport Management System",
    description:
      "FreightLedger is an all-in-one logistics management system for trucking and transport companies — digital consignment notes, invoicing, multi-branch operations, and built-in accounting with a driver app and manager web console.",
    keywords: [
      "logistics management system",
      "transport management software",
      "trucking software",
      "consignment note software",
      "freight invoicing and accounting",
    ],
  },
};
