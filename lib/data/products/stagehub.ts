import type { Product } from "../types";

/**
 * StageHub — a one-stop platform for musicians and performing artists. A live
 * product rendered by the data-driven ProductDetailTemplate (`hero` + `sections`).
 * Linked to the new `media-entertainment` industry via `industries`. Authored
 * from the delivered "Jubal Talents" case study (global gig marketplace,
 * direct-to-fan instrument sales, creative community, income stabilization).
 * Listed under a distinct product name per the client's request (no "iWebwiser"
 * prefix).
 */
export const stageHub: Product = {
  slug: "stagehub",
  name: "StageHub",
  tagline: "Where musicians find gigs, fans, and steady income.",
  category: "Creator & Talent Marketplace",
  status: "live",
  icon: "Music",
  accent: { from: "#0B57D0", to: "#00C2FF" },
  featured: true,
  shortDescription:
    "A one-stop platform for musicians and performing artists — a global gig marketplace, direct-to-fan instrument sales, a collaborative community, and income tools that turn one-off bookings into steady, diversified revenue.",
  industries: ["media-entertainment"],
  keyBenefits: [
    {
      icon: "Briefcase",
      title: "Global Gig Marketplace",
      description:
        "Discover and book performances, studio sessions, and teaching gigs across borders — not just the local scene.",
    },
    {
      icon: "Wallet",
      title: "Steady, Diversified Income",
      description:
        "Recurring opportunities and multiple revenue streams smooth out the volatility of an artist's earnings.",
    },
    {
      icon: "Store",
      title: "Sell Directly to Fans",
      description:
        "Artists list and sell their instruments and gear straight to fans, deepening the connection and adding income.",
    },
    {
      icon: "Users",
      title: "Creative Community",
      description:
        "Connect, collaborate, and learn alongside a network of fellow artists who share resources and support.",
    },
    {
      icon: "Globe2",
      title: "Worldwide Reach",
      description:
        "Access international jobs and audiences from one profile instead of being limited to a single market.",
    },
    {
      icon: "Music",
      title: "Built for Performers",
      description:
        "Purpose-built around musicians' professional needs — not a generic job board bolted onto a social feed.",
    },
  ],
  hero: {
    eyebrow: "Creator & Talent Marketplace",
    headline: "More than gigs — a livelihood for artists",
    subheadline:
      "StageHub connects musicians with global gigs, fans, and collaborators — combining a performance marketplace, direct-to-fan instrument sales, and income tools into one community-driven platform.",
    highlights: [
      "Global marketplace for performances, sessions, and teaching",
      "Direct instrument sales from artists to fans",
      "Community collaboration and steadier income",
    ],
    primaryCta: { label: "Request a Demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Talk to Sales", href: "/contact?intent=sales" },
  },
  sections: [
    {
      type: "split-feature",
      eyebrow: "Marketplace",
      title: "Gigs Across Every Discipline",
      description:
        "StageHub opens up global opportunities for artists — live performances, studio recording, and teaching — in one searchable marketplace built around how musicians actually work.",
      bullets: [
        "Performance, studio-session, and teaching gigs in one place",
        "Global opportunities beyond a single local market",
        "Profiles that showcase an artist's skills and availability",
        "Booking flows designed for performing artists",
      ],
      metrics: [
        { value: "Global", label: "Opportunity reach" },
        { value: "3-in-1", label: "Perform · record · teach" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Commerce",
      title: "Sell Instruments Directly to Fans",
      description:
        "StageHub is more than jobs. Artists can sell their instruments and gear directly to the fans who follow them — turning a fan base into a marketplace and creating an extra, recurring income stream.",
      reverse: true,
      bullets: [
        "Artist-to-fan instrument and gear sales",
        "Strengthens the direct artist–fan relationship",
        "An additional income stream beyond performances",
        "Listings tied to the artist's profile and following",
      ],
      metrics: [
        { value: "Artist→Fan", label: "Direct sales" },
        { value: "+Income", label: "Beyond gigs" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Community",
      title: "A Network Built for Artists",
      description:
        "Musicians do their best work together. StageHub gives artists a collaborative community to connect, share resources, and learn — while income tools help reduce the revenue volatility that comes with the craft.",
      bullets: [
        "Connect and collaborate with fellow artists",
        "Share resources, knowledge, and opportunities",
        "Income-stabilization tools to smooth earnings",
        "A support network that grows with the artist",
      ],
      metrics: [
        { value: "Collaborative", label: "Artist community" },
        { value: "Stable", label: "Income tooling" },
      ],
    },
    {
      type: "feature-grid",
      eyebrow: "What's Inside",
      title: "Everything an Artist's Career Needs",
      description:
        "Gigs, commerce, and community in one platform built specifically for performing artists.",
      features: [
        {
          icon: "Briefcase",
          title: "Gig Marketplace",
          description:
            "Global performances, studio sessions, and teaching opportunities in one place.",
        },
        {
          icon: "Store",
          title: "Instrument Sales",
          description:
            "Direct artist-to-fan sales of instruments and gear from the artist's profile.",
        },
        {
          icon: "Users",
          title: "Community & Collaboration",
          description:
            "A network for artists to connect, collaborate, and share resources.",
        },
        {
          icon: "Wallet",
          title: "Income Tools",
          description:
            "Multiple revenue streams and stabilization features that steady earnings.",
        },
        {
          icon: "Globe2",
          title: "Global Reach",
          description:
            "Access to international jobs and audiences from a single profile.",
        },
        {
          icon: "Music",
          title: "Artist Profiles",
          description:
            "Showcase skills, availability, gear, and offerings to gig posters and fans.",
        },
      ],
    },
    {
      type: "stat-band",
      eyebrow: "By the Numbers",
      stats: [
        { value: "3-in-1", label: "Perform, record, and teach gigs" },
        { value: "Artist→Fan", label: "Direct instrument commerce" },
        { value: "Global", label: "Opportunities and audiences" },
        { value: "1", label: "Platform for an artist's livelihood" },
      ],
    },
    {
      type: "comparison",
      eyebrow: "Why StageHub",
      title: "StageHub vs. Generic Gig Apps",
      description:
        "How a platform built for musicians compares to generic gig apps and social media.",
      columns: ["StageHub", "Generic Gig Apps", "Social Media"],
      rows: [
        { label: "Music-specific gig marketplace", values: [true, "Generic", false] },
        { label: "Performances, sessions & teaching", values: [true, "Limited", false] },
        { label: "Direct instrument sales to fans", values: [true, false, "Manual"] },
        { label: "Artist community & collaboration", values: [true, false, "Unstructured"] },
        { label: "Income-stabilization tools", values: [true, false, false] },
        { label: "Global reach for artists", values: [true, "Varies", true] },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What is StageHub?",
          a: "StageHub is a one-stop platform for musicians and performing artists. It combines a global gig marketplace, direct-to-fan instrument sales, a collaborative artist community, and income tools — so artists can find work, build their audience, and earn more steadily, all in one place.",
        },
        {
          q: "What kinds of gigs can artists find?",
          a: "Artists can discover and book live performances, studio recording sessions, and teaching opportunities — across borders, not just in their local scene.",
        },
        {
          q: "How do instrument sales work?",
          a: "Artists can list and sell their instruments and gear directly to fans from their profile. It turns a following into a marketplace, strengthens the artist–fan connection, and adds an extra income stream beyond gigs.",
        },
        {
          q: "How does StageHub help with unstable income?",
          a: "By bringing together recurring gigs, teaching, and direct sales, StageHub helps artists build multiple income streams. Income-stabilization features are designed to reduce the revenue volatility that musicians typically face.",
        },
        {
          q: "Who is StageHub for?",
          a: "Professional and emerging musicians, performers, instructors, and recording artists who want global opportunities, a direct connection to fans, and a community to collaborate with.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Build a Stage for Your Artists?",
      description:
        "See how StageHub turns gigs, fans, and community into one platform that grows an artist's livelihood.",
      primary: { label: "Schedule a Demo", href: "/contact?intent=demo" },
      secondary: { label: "Contact Sales", href: "/contact?intent=sales" },
    },
  ],
  metrics: [
    { value: "Global", label: "Gig marketplace reach" },
    { value: "Artist→Fan", label: "Direct instrument sales" },
    { value: "Community", label: "Collaboration network" },
    { value: "+Income", label: "Diversified revenue streams" },
  ],
  seo: {
    title: "StageHub - Gig Marketplace & Community for Musicians",
    description:
      "StageHub is a one-stop platform for musicians — a global gig marketplace for performances, sessions, and teaching, direct-to-fan instrument sales, a collaborative community, and income tools.",
    keywords: [
      "musician gig platform",
      "gig marketplace for artists",
      "music talent marketplace",
      "sell instruments online",
      "artist community platform",
    ],
  },
};
