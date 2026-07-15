import type { Product } from "../types";

/**
 * EduStream — a scalable, streaming-ready e-learning platform for universities
 * and academies. A live product rendered by the data-driven
 * ProductDetailTemplate (`hero` + `sections`). Linked to the new
 * `education-elearning` industry via `industries`. Authored from the delivered
 * "Zidni Academy" case study (WebRTC live + recorded lectures, multi-university
 * hosting, course evaluation, chat/collaboration, bilingual EN/AR). Listed under
 * a distinct product name per the client's request (no "iWebwiser" prefix).
 */
export const eduStream: Product = {
  slug: "edustream",
  name: "EduStream",
  tagline: "Host every course and live lecture on one streaming-ready campus.",
  category: "E-Learning Platform",
  status: "live",
  icon: "GraduationCap",
  accent: { from: "#0B57D0", to: "#00C2FF" },
  featured: true,
  productImg: "/assets/images/eduStream/01.png",
  shortDescription:
    "A scalable e-learning platform that lets multiple institutions host courses, run buffer-free live and recorded lectures over WebRTC, evaluate content before publishing, and keep students engaged with built-in chat and collaboration — in English and Arabic.",
  industries: ["education-elearning"],
  keyBenefits: [
    {
      icon: "MonitorPlay",
      title: "Live & Recorded Lectures",
      description:
        "WebRTC-powered streaming delivers buffer-free live classes and an on-demand recording library at scale.",
    },
    {
      icon: "Building2",
      title: "Multi-Institution Hosting",
      description:
        "Host courses from many universities and academies on one unified platform, each with its own programs.",
    },
    {
      icon: "BadgeCheck",
      title: "Evaluation & Quality Control",
      description:
        "Every course is reviewed and approved before publishing, protecting academic quality across the platform.",
    },
    {
      icon: "MessagesSquare",
      title: "Built-In Collaboration",
      description:
        "Group discussions, one-to-one chat, document sharing, and student support keep learning interactive.",
    },
    {
      icon: "Award",
      title: "Diplomas & Certificates",
      description:
        "Run credit-hour diploma and certificate programs with structured academic tracking and events.",
    },
    {
      icon: "Globe2",
      title: "Bilingual & Global",
      description:
        "Full English and Arabic support reaches learners across regions on web and mobile.",
    },
  ],
  hero: {
    eyebrow: "E-Learning Platform",
    headline: "Every course, live lecture, and learner — on one campus",
    subheadline:
      "EduStream gives universities and academies a streaming-ready learning platform: host diverse courses, deliver live and recorded lectures without buffering, and keep students engaged with real-time collaboration.",
    highlights: [
      "WebRTC live streaming and recorded lectures, no buffering",
      "Multi-university hosting with course evaluation",
      "Built-in chat with English and Arabic support",
    ],
    primaryCta: { label: "Request a Demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Talk to Sales", href: "/contact?intent=sales" },
  },
  sections: [
    {
      type: "split-feature",
      eyebrow: "Streaming",
      productImgSecond: "/assets/images/eduStream/01.png",
      title: "Live & On-Demand Lectures",
      description:
        "Built on WebRTC, EduStream streams live classes without buffering or quality loss and turns every session into an on-demand recording — so students learn live or catch up later.",
      bullets: [
        "Real-time live lectures with reliable, low-latency streaming",
        "Automatic recorded library for replay and revision",
        "Scheduled and ad-hoc sessions with attendance visibility",
        "Engineered to overcome streaming complexity at scale",
      ],
      metrics: [
        { value: "WebRTC", label: "Streaming engine" },
        { value: "Live + VOD", label: "Lecture delivery" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Institutions",
      productImgSecond: "/assets/images/eduStream/02.png",
      title: "One Platform, Many Universities",
      description:
        "EduStream hosts varied courses from multiple universities under one roof. Each institution runs its own diploma and certificate programs, evaluated for quality before they ever reach a student.",
      reverse: true,
      bullets: [
        "Multi-university hosting with per-institution programs",
        "Credit-hour diploma and certificate offerings",
        "Course evaluation and approval before publishing",
        "Event management for programs, intakes, and scheduling",
      ],
      metrics: [
        { value: "Multi-Tenant", label: "University hosting" },
        { value: "Evaluated", label: "Before publishing" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Engagement",
      productImgSecond: "/assets/images/eduStream/03.png",
      title: "Interactive, Connected Learning",
      description:
        "Learning is more than watching video. EduStream keeps students engaged with group discussions, direct messaging, document sharing, and built-in support — all in English and Arabic.",
      bullets: [
        "Group discussions and one-to-one student messaging",
        "Document sharing for materials and assignments",
        "Built-in student support channels",
        "Full English and Arabic language support",
      ],
      metrics: [
        { value: "EN + AR", label: "Bilingual experience" },
        { value: "Real-Time", label: "Chat & discussions" },
      ],
    },
    {
      type: "feature-grid",
      eyebrow: "What's Inside",
      title: "Built for Modern Academic Delivery",
      description:
        "From streaming to certification, every part of the learning journey lives on one platform.",
      features: [
        {
          icon: "MonitorPlay",
          title: "Live & Recorded Streaming",
          description:
            "WebRTC live classes plus an automatic on-demand recording library.",
        },
        {
          icon: "Building2",
          title: "Multi-University Hosting",
          description:
            "Many institutions and their courses on one unified, scalable platform.",
        },
        {
          icon: "BookOpen",
          title: "Courses & Programs",
          description:
            "Credit-hour diplomas, certificates, and structured course catalogs.",
        },
        {
          icon: "BadgeCheck",
          title: "Evaluation & QA",
          description:
            "Course review and approval workflows that protect academic quality.",
        },
        {
          icon: "MessagesSquare",
          title: "Chat & Collaboration",
          description:
            "Group discussions, one-to-one messaging, document sharing, and support.",
        },
        {
          icon: "CalendarClock",
          title: "Events & Scheduling",
          description:
            "Manage academic programs, intakes, and live-session schedules.",
        },
      ],
    },
    {
      type: "stat-band",
      eyebrow: "By the Numbers",
      stats: [
        { value: "WebRTC", label: "Buffer-free streaming core" },
        { value: "Multi-University", label: "Hosted on one platform" },
        { value: "EN + AR", label: "Bilingual learning experience" },
        { value: "Live + VOD", label: "Lecture delivery modes" },
      ],
    },
    {
      type: "comparison",
      eyebrow: "Why EduStream",
      title: "EduStream vs. Generic Video Tools",
      description:
        "How a purpose-built e-learning platform compares to stitching together a video tool and a basic LMS.",
      columns: ["EduStream", "Generic Video Tools", "Basic LMS"],
      rows: [
        { label: "Buffer-free live streaming (WebRTC)", values: [true, "Varies", false] },
        { label: "Automatic recorded library", values: [true, "Manual", "Limited"] },
        { label: "Multi-university hosting", values: [true, false, "Limited"] },
        { label: "Course evaluation before publishing", values: [true, false, "Partial"] },
        { label: "Built-in chat & collaboration", values: [true, "Limited", "Partial"] },
        { label: "English & Arabic support", values: [true, "Varies", "Varies"] },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What is EduStream?",
          a: "EduStream is a scalable e-learning platform that lets multiple universities and academies host their courses, deliver live and recorded lectures over WebRTC without buffering, evaluate content before publishing, and keep students engaged with built-in chat — in both English and Arabic.",
        },
        {
          q: "How does the live streaming work?",
          a: "EduStream uses WebRTC to deliver low-latency, buffer-free live lectures. Every live session can be recorded automatically and added to an on-demand library, so students can attend live or revise later.",
        },
        {
          q: "Can multiple institutions use one platform?",
          a: "Yes. EduStream is multi-tenant: several universities and academies can host their own courses, diploma and certificate programs, and events on the same platform, each managed independently.",
        },
        {
          q: "How is course quality maintained?",
          a: "Courses pass through an evaluation and approval step before they're published, so academic quality is checked before any content reaches students.",
        },
        {
          q: "Does it support Arabic?",
          a: "Yes. EduStream supports both English and Arabic across the learning and collaboration experience, making it suitable for regional and bilingual institutions.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Launch Your Online Campus?",
      description:
        "See how EduStream streams live lectures, hosts every program, and keeps learners engaged — on one scalable platform.",
      primary: { label: "Schedule a Demo", href: "/contact?intent=demo" },
      secondary: { label: "Contact Sales", href: "/contact?intent=sales" },
    },
  ],
  metrics: [
    { value: "WebRTC", label: "Buffer-free streaming" },
    { value: "Multi-University", label: "On one platform" },
    { value: "Live + VOD", label: "Lecture delivery" },
    { value: "EN + AR", label: "Bilingual support" },
  ],
  seo: {
    title: "EduStream - E-Learning & Live Lecture Streaming Platform",
    description:
      "EduStream is a scalable e-learning platform with WebRTC live and recorded lectures, multi-university hosting, course evaluation, and built-in collaboration — in English and Arabic.",
    keywords: [
      "e-learning platform",
      "online learning management system",
      "live lecture streaming",
      "WebRTC education platform",
      "multi-university LMS",
    ],
  },
};
