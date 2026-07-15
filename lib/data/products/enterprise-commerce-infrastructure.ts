import type { Product } from "../types";

/**
 * The flagship, live product. Its detail page is rendered by the bespoke
 * EnterpriseCommerceInfrastructure component (the original hand-built layout),
 * so `sections` is intentionally omitted. The fields below drive its product
 * card, listing entry, industry cross-links, and SEO.
 */
export const enterpriseCommerceInfrastructure: Product = {
  slug: "enterprise-commerce-infrastructure",
  name: "Enterprise Commerce Infrastructure",
  tagline: "Run your own white-label commerce & delivery business — not someone else's.",
  category: "Commerce Infrastructure",
  status: "live",
  icon: "Boxes",
  accent: { from: "#0B57D0", to: "#00C2FF" },
  featured: true,
  productImg: "/assets/images/enterprise-e-com/02.png",
  shortDescription:
    "A complete white-label commerce and delivery ecosystem — your brand, your customers, your economics. Built for grocery, food, pharmacy, cloud kitchens, and multi-branch retail at enterprise scale.",
  industries: [
    "retail-ecommerce",
    "grocery-quick-commerce",
    "food-restaurants",
    "pharmacy-healthcare",
    "logistics-delivery",
    "cloud-kitchens",
    "franchise-multi-branch",
    "hyperlocal-marketplaces",
  ],
  keyBenefits: [
    { icon: "ShieldCheck", title: "COD safety", description: "Cash reconciliation and verification that eliminate field leakage." },
    { icon: "Boxes", title: "Inventory locking", description: "Hard stock locks prevent oversell across every store and dark store." },
    { icon: "FileCheck", title: "Immutable ledgers", description: "Audit-grade records for every order, refund, and settlement." },
    { icon: "Smartphone", title: "White-label apps", description: "Customer, driver, and store apps under your brand — never ours." },
    { icon: "Wallet", title: "Settlements engine", description: "Automated payouts, commissions, and reconciliation at scale." },
    { icon: "Globe2", title: "Any market", description: "Multi-region, language, currency, and tax models out of the box." },
  ],
  hero: {
    eyebrow: "Enterprise commerce infrastructure",
    headline: "Run your own delivery business. Not someone else's.",
    subheadline:
      "A complete white-label commerce and delivery ecosystem — your brand, your customers, your economics — built for enterprise scale.",
    highlights: ["Launch in weeks", "100% your brand & data", "Any region & currency"],
    primaryCta: { label: "Book a private demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Talk to sales", href: "/contact?intent=sales" },
  },
  metrics: [
    { value: "Weeks", label: "To launch your branded delivery business" },
    { value: "100%", label: "Yours — brand, customers, and data" },
    { value: "Any", label: "Region, language, currency, and tax model" },
    { value: "7+", label: "Verticals running on one backbone" },
  ],
  seo: {
    title: "Enterprise Commerce Infrastructure — White-Label Commerce & Delivery",
    description:
      "Launch your own branded multi-store commerce and delivery business in weeks. Enterprise-grade operations, COD safety, immutable ledgers, and white-label apps for grocery, food, pharmacy, cloud kitchens, and franchise retail.",
    keywords: [
      "white-label commerce platform",
      "delivery infrastructure",
      "hyperlocal delivery software",
      "multi-store SaaS",
      "enterprise commerce",
    ],
  },
  customDetailComponent: "EnterpriseCommerceInfrastructure",
};
