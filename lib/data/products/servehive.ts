import type { Product } from "../types";

/**
 * ServeHive — a complete local-services marketplace (customer app + provider app
 * + centralized admin panel) connecting customers with verified local
 * professionals. A live product rendered by the data-driven
 * ProductDetailTemplate (`hero` + `sections`). Linked to the `local-services`
 * industry via `industries`.
 *
 * Re-themed from the earlier "ShineRoute" field-service slot (originally the
 * solar-panel-cleaning "Cozzy Wash" engagement): per the client's request the
 * product was merged into the broader Local Service Marketplace Platform spec
 * (discovery → quotation → booking → fulfilment → feedback across home
 * maintenance, plumbing, electrical, HVAC, cleaning, carpentry, painting,
 * appliance repair, gardening, and pest control). Listed under a distinct
 * recommended name (no "iWebwiser" prefix).
 */
export const serveHive: Product = {
  slug: "servehive",
  name: "ServeHive",
  tagline: "The marketplace that connects customers with trusted local pros.",
  category: "Local Service Marketplace",
  status: "live",
  icon: "Handshake",
  accent: { from: "#0B57D0", to: "#00C2FF" },
  featured: true,
  shortDescription:
    "A complete local-services marketplace — a customer app, a provider app, and a centralized admin panel — that connects customers with verified local professionals to discover, quote, book, track, and review services end to end, across home maintenance, plumbing, electrical, cleaning, and more.",
  industries: ["local-services"],
  keyBenefits: [
    {
      icon: "Handshake",
      title: "Two-Sided Marketplace",
      description:
        "Connects customers and verified local professionals through dedicated apps, backed by one centralized admin panel.",
    },
    {
      icon: "Search",
      title: "Discover & Compare",
      description:
        "Customers search and filter pros by category, ratings, and availability, post requests, and compare quotes.",
    },
    {
      icon: "Quote",
      title: "Quotation Engine",
      description:
        "Providers submit competitive quotes and customers compare and negotiate before booking — no guesswork on price.",
    },
    {
      icon: "CalendarClock",
      title: "Bookings & Live Tracking",
      description:
        "Book, reschedule, or cancel appointments and track service progress in real time, from request to completion.",
    },
    {
      icon: "BadgeCheck",
      title: "Verified & Trusted",
      description:
        "Provider onboarding approvals and business-document verification keep the marketplace trustworthy and compliant.",
    },
    {
      icon: "Star",
      title: "Ratings & Reviews",
      description:
        "Post-service ratings and reviews build provider reputation and drive repeat business across the platform.",
    },
  ],
  hero: {
    eyebrow: "Local Service Marketplace Platform",
    headline: "Connect customers with trusted local pros",
    subheadline:
      "ServeHive is a complete local-services marketplace — a customer app, a provider app, and a centralized admin panel — that digitizes the entire service lifecycle from discovery and quotation to booking, fulfilment, and feedback.",
    highlights: [
      "Customer app, provider app, and admin panel in one ecosystem",
      "Discovery, quotations, bookings, live tracking, and reviews",
      "Verified providers, subscriptions, and full operational oversight",
    ],
    primaryCta: { label: "Request a Demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Talk to Sales", href: "/contact?intent=sales" },
  },
  sections: [
    {
      type: "split-feature",
      eyebrow: "For Customers",
      title: "Find, compare, and hire with confidence",
      description:
        "Customers discover verified local professionals in seconds, post exactly what they need, and choose the best offer — then stay informed from booking to completion.",
      bullets: [
        "Search and filter providers by category, ratings, and availability",
        "Post service requests with descriptions, images, and preferred schedules",
        "Receive and compare multiple quotations before deciding",
        "Book, reschedule, or cancel, and track service progress in real time",
        "Rate and review providers, with instant notifications and in-app chat",
      ],
      metrics: [
        { value: "Multi-Quote", label: "Compare before you book" },
        { value: "Real-Time", label: "Service tracking" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "For Providers",
      title: "Win more jobs and grow your business",
      description:
        "Professionals turn the platform into a steady pipeline — qualified leads, fast quoting, organized bookings, and the analytics to see what's working.",
      reverse: true,
      bullets: [
        "Create and manage a professional business profile",
        "Receive qualified leads by service category and location",
        "Submit competitive quotations and track their status",
        "Manage bookings, appointment schedules, and customer chat",
        "Monitor ratings and performance, with subscription plans to match growth",
      ],
      metrics: [
        { value: "Qualified", label: "Category & location leads" },
        { value: "Subscriptions", label: "Plans that scale with you" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "For Administrators",
      title: "Complete control of your marketplace",
      description:
        "A centralized admin panel governs the whole ecosystem — onboarding, verification, categories, and oversight — so the marketplace stays trustworthy and runs smoothly at scale.",
      bullets: [
        "Manage customers, providers, and service categories from one dashboard",
        "Review and approve provider onboarding requests",
        "Verify business documents and compliance requirements",
        "Manage trades and services, and monitor bookings platform-wide",
        "Role-based access control with advanced search, filtering, and reporting",
      ],
      metrics: [
        { value: "Centralized", label: "Admin dashboard" },
        { value: "Role-Based", label: "Access & oversight" },
      ],
    },
    {
      type: "feature-grid",
      eyebrow: "What's Inside",
      title: "One platform, three connected apps",
      description:
        "Customer app, provider app, and admin panel working as a single ecosystem across the full service lifecycle.",
      features: [
        {
          icon: "Search",
          title: "Provider Discovery",
          description:
            "Search and filter verified pros by category, ratings, and availability.",
        },
        {
          icon: "Quote",
          title: "Quotes & Negotiation",
          description:
            "Request, compare, and negotiate multiple quotations before booking.",
        },
        {
          icon: "CalendarClock",
          title: "Bookings & Tracking",
          description:
            "Book, reschedule, or cancel, with real-time service progress tracking.",
        },
        {
          icon: "BadgeCheck",
          title: "Provider Verification",
          description:
            "Onboarding approvals and document verification keep the marketplace trusted.",
        },
        {
          icon: "CreditCard",
          title: "Subscriptions & Plans",
          description:
            "Provider subscription plans tailored to different business needs.",
        },
        {
          icon: "SlidersHorizontal",
          title: "Admin Control & RBAC",
          description:
            "Centralized management, role-based access, analytics, and reporting.",
        },
      ],
    },
    {
      type: "stat-band",
      eyebrow: "By the Numbers",
      stats: [
        { value: "3", label: "Connected apps: customer, provider, admin" },
        { value: "End-to-End", label: "Discovery to feedback lifecycle" },
        { value: "Verified", label: "Onboarded, document-checked providers" },
        { value: "Real-Time", label: "Tracking, chat, and notifications" },
      ],
    },
    {
      type: "comparison",
      eyebrow: "Why ServeHive",
      title: "ServeHive vs. Classifieds & Phone Calls",
      description:
        "How a purpose-built local-services marketplace compares to directory listings and word-of-mouth hiring.",
      columns: ["ServeHive", "Classifieds & Listings", "Phone & Word-of-Mouth"],
      rows: [
        { label: "Verified, approved providers", values: [true, false, false] },
        { label: "Compare multiple quotes", values: [true, "Manual", false] },
        { label: "In-app booking & rescheduling", values: [true, false, false] },
        { label: "Real-time service tracking", values: [true, false, false] },
        { label: "Ratings & reviews", values: [true, "Limited", "Informal"] },
        { label: "Provider leads & subscriptions", values: [true, "Pay-per-ad", false] },
        { label: "Central admin oversight", values: [true, false, false] },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What is ServeHive?",
          a: "ServeHive is a complete local-services marketplace that connects customers with trusted local service professionals. It spans a customer mobile app, a provider mobile app, and a centralized admin panel — digitizing the entire service lifecycle from discovery and quotation to booking, fulfilment, and feedback.",
        },
        {
          q: "What are the three apps?",
          a: "A Customer App to discover pros, post requests, compare quotes, book, track, and review; a Service Provider App to manage profiles, receive leads, submit quotes, handle bookings, and track performance; and a centralized Admin Management Panel to onboard and verify providers, manage categories, monitor activity, and oversee the whole platform.",
        },
        {
          q: "How do quotations work?",
          a: "Customers post a service request with details, images, and a preferred schedule. Matching providers submit competitive quotations, and the customer compares and negotiates before choosing one — so pricing is transparent and there are no surprises.",
        },
        {
          q: "How do providers get business?",
          a: "Providers receive qualified job leads based on their service category and location, submit quotes, and manage bookings — all from one app. Subscription plans tailored to business needs let them increase visibility and grow on the platform.",
        },
        {
          q: "How is trust maintained?",
          a: "Administrators review and approve provider onboarding, verify business documents and compliance, and manage trades, services, and categories. Combined with customer ratings and reviews, this keeps the marketplace trustworthy and high quality.",
        },
        {
          q: "Which services can it support?",
          a: "ServeHive adapts to a wide range of local services — home maintenance, plumbing, electrical, HVAC, cleaning, carpentry, painting, appliance repair, gardening & landscaping, and pest control — as well as general local-service marketplaces.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Launch Your Local-Service Marketplace?",
      description:
        "See how ServeHive connects customers, providers, and administrators on one platform built for the full service lifecycle.",
      primary: { label: "Schedule a Demo", href: "/contact?intent=demo" },
      secondary: { label: "Contact Sales", href: "/contact?intent=sales" },
    },
  ],
  metrics: [
    { value: "3", label: "Connected apps in one ecosystem" },
    { value: "End-to-End", label: "Service lifecycle digitized" },
    { value: "Verified", label: "Trusted, approved providers" },
    { value: "Multi-Quote", label: "Compare before booking" },
  ],
  seo: {
    title: "ServeHive - Local Service Marketplace Platform",
    description:
      "ServeHive is a complete local-services marketplace — customer app, provider app, and admin panel — connecting customers with verified local professionals to discover, quote, book, track, and review services across home maintenance, plumbing, electrical, cleaning, and more.",
    keywords: [
      "local service marketplace",
      "on-demand services platform",
      "service provider marketplace app",
      "home services booking platform",
      "quotation and booking marketplace",
    ],
  },
};
