import type { Product } from "../types";

/**
 * RetailNest — a retail management CMS for home-furnishings and home-goods
 * brands. A live product rendered by the data-driven ProductDetailTemplate
 * (`hero` + `sections`). Linked to the existing `retail-ecommerce` industry via
 * `industries` (a home-goods retailer fits the multi-store retail segment).
 * Authored from the delivered "F&F / Floor & Furnishing" case study (centralized
 * operations CMS: inventory control, employee activity monitoring + task
 * assignment, and a searchable storefront with rich product detail, wishlist,
 * and cart). Listed under a distinct product name per the client's request
 * (no "iWebwiser" prefix).
 */
export const retailNest: Product = {
  slug: "retailnest",
  name: "RetailNest",
  tagline: "Run your home-furnishings store from stockroom to storefront.",
  category: "Retail Management & Storefront CMS",
  status: "live",
  icon: "Sofa",
  accent: { from: "#0B57D0", to: "#00C2FF" },
  featured: true,
  productImg: "/assets/images/retail nest/01.png",
  shortDescription:
    "A retail management CMS for home-furnishings and home-goods brands — centralizing inventory accuracy, staff task management, and a rich, searchable storefront with detailed product specs, wishlists, and cart, so operations and customer experience finally run as one.",
  industries: ["retail-ecommerce"],
  keyBenefits: [
    {
      icon: "Boxes",
      title: "Accurate Inventory",
      description:
        "Real-time stock tracking eliminates variances, stock loss, and the delayed orders that frustrate customers.",
    },
    {
      icon: "UserCheck",
      title: "Staff Accountability",
      description:
        "Monitor employee activity and performance with transparent, trackable task assignment across the team.",
    },
    {
      icon: "ClipboardList",
      title: "Task Management",
      description:
        "Assign, track, and close tasks so responsibilities are clear and nothing falls through the cracks.",
    },
    {
      icon: "Search",
      title: "Smart Product Search",
      description:
        "Feature- and category-based search helps shoppers find the right piece fast, by fabric, size, or style.",
    },
    {
      icon: "ShoppingCart",
      title: "Storefront, Cart & Wishlist",
      description:
        "A polished buying experience with rich product detail, wishlists, and a smooth cart and checkout.",
    },
    {
      icon: "TrendingUp",
      title: "Lower Costs, Happier Customers",
      description:
        "Streamlined operations cut labor and inventory waste while lifting customer satisfaction and loyalty.",
    },
  ],
  hero: {
    eyebrow: "Retail Management & Storefront CMS",
    headline: "One system for your store's people, stock, and shoppers",
    subheadline:
      "RetailNest brings a home-furnishings retailer's entire operation under one roof — inventory control, staff task management, and a rich, searchable storefront — so workflows stop breaking and customers keep coming back.",
    highlights: [
      "Centralized inventory with real-time accuracy",
      "Employee activity monitoring and task assignment",
      "Rich storefront with feature search, wishlist, and cart",
    ],
    primaryCta: { label: "Request a Demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Talk to Sales", href: "/contact?intent=sales" },
  },
  sections: [
    {
      type: "split-feature",
      eyebrow: "Operations",
      title: "Inventory & Staff, Under Control",
      description:
        "Without a central system, home-goods retailers lose stock and stall orders. RetailNest gives managers one place to track inventory accurately, monitor employee activity, and assign tasks with full accountability.",
      bullets: [
        "Accurate, real-time inventory that eliminates variances",
        "Employee activity and performance monitoring",
        "Transparent task assignment with accountability tracking",
        "Fewer stock-outs, losses, and delayed orders",
      ],
      metrics: [
        { value: "Real-Time", label: "Inventory accuracy" },
        { value: "Tracked", label: "Staff tasks & activity" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Storefront",
      title: "A Buying Experience Built for Home Goods",
      description:
        "Furniture and furnishings are detail-driven purchases. RetailNest pairs a clean, easy-to-navigate storefront with the rich product information shoppers need — fabric quality, dimensions, thread count — plus wishlist and cart.",
      reverse: true,
      bullets: [
        "Feature- and category-based product search",
        "Detailed specs: fabric quality, size, thread count, and more",
        "Wishlist and shopping cart for a smooth path to purchase",
        "Simplified navigation and a clean, modern interface",
      ],
      metrics: [
        { value: "Detailed", label: "Product information" },
        { value: "Search-First", label: "Product discovery" },
      ],
    },
    {
      type: "split-feature",
      eyebrow: "Outcomes",
      title: "Efficiency That Customers Feel",
      description:
        "When operations and the storefront run on one system, the whole business improves — faster fulfillment, fewer losses, lower costs, and a shopping experience that builds loyalty.",
      bullets: [
        "Faster order fulfillment from accurate stock",
        "Reduced inventory losses and operational cost",
        "Streamlined HR and staffing oversight",
        "Higher customer satisfaction and brand loyalty",
      ],
      metrics: [
        { value: "Faster", label: "Order fulfillment" },
        { value: "Loyal", label: "Repeat customers" },
      ],
    },
    {
      type: "feature-grid",
      eyebrow: "What's Inside",
      title: "Operations and Storefront, Together",
      description:
        "One CMS that runs the back office and the buying experience as a single, connected system.",
      features: [
        {
          icon: "Boxes",
          title: "Inventory Management",
          description:
            "Real-time stock tracking that eliminates variances and prevents delayed orders.",
        },
        {
          icon: "UserCheck",
          title: "Staff Performance",
          description:
            "Employee activity monitoring with accountability across the team.",
        },
        {
          icon: "ClipboardList",
          title: "Task Assignment",
          description:
            "Assign, track, and close tasks so responsibilities stay clear.",
        },
        {
          icon: "Search",
          title: "Product Search",
          description:
            "Feature- and category-based search that helps shoppers find the right item.",
        },
        {
          icon: "ShoppingCart",
          title: "Cart & Wishlist",
          description:
            "Wishlist, cart, and checkout for a smooth path from browse to buy.",
        },
        {
          icon: "Store",
          title: "Storefront CMS",
          description:
            "Rich product detail and easy navigation, managed without code.",
        },
      ],
    },
    {
      type: "stat-band",
      eyebrow: "By the Numbers",
      stats: [
        { value: "1", label: "System for operations and storefront" },
        { value: "Real-Time", label: "Inventory accuracy" },
        { value: "Search-First", label: "Product discovery" },
        { value: "Lower", label: "Cost, loss, and fulfillment delays" },
      ],
    },
    {
      type: "comparison",
      eyebrow: "Why RetailNest",
      title: "RetailNest vs. Off-the-Shelf Tools",
      description:
        "How a connected retail CMS compares to running operations on spreadsheets and a generic webstore.",
      columns: ["RetailNest", "Spreadsheets", "Generic Webstore"],
      rows: [
        { label: "Real-time inventory accuracy", values: [true, "Manual", "Partial"] },
        { label: "Employee activity monitoring", values: [true, false, false] },
        { label: "Task assignment & accountability", values: [true, "Manual", false] },
        { label: "Rich home-goods product detail", values: [true, false, "Limited"] },
        { label: "Feature & category search", values: [true, false, "Basic"] },
        { label: "Operations + storefront in one", values: [true, false, false] },
      ],
    },
    {
      type: "faq",
      eyebrow: "Questions",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What is RetailNest?",
          a: "RetailNest is a retail management CMS built for home-furnishings and home-goods brands. It centralizes inventory control, employee task management, and a rich, searchable storefront — so a retailer's operations and customer experience run on one connected system.",
        },
        {
          q: "Who uses it?",
          a: "Managers and HR use it to monitor staff performance and assign tasks; operations teams use it to keep inventory accurate; and customers use the storefront to search, browse, wishlist, and buy.",
        },
        {
          q: "How does it improve inventory?",
          a: "RetailNest tracks stock accurately in real time, eliminating the variances and mismanagement that cause stock loss and delayed orders — so the right products are available and orders ship faster.",
        },
        {
          q: "What makes the storefront suited to home goods?",
          a: "Furnishings are detail-driven purchases. The storefront surfaces rich product information — fabric quality, size, thread count, and more — with feature- and category-based search, wishlists, and a simple, clean interface that helps shoppers decide.",
        },
        {
          q: "Does it handle staff management?",
          a: "Yes. RetailNest monitors employee activity and performance and supports transparent task assignment with accountability tracking, streamlining HR oversight and reducing operational cost.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to Run Your Store on One System?",
      description:
        "See how RetailNest connects inventory, staff, and a rich storefront so your home-furnishings business runs smoother.",
      primary: { label: "Schedule a Demo", href: "/contact?intent=demo" },
      secondary: { label: "Contact Sales", href: "/contact?intent=sales" },
    },
  ],
  metrics: [
    { value: "Real-Time", label: "Inventory accuracy" },
    { value: "Tracked", label: "Staff tasks & performance" },
    { value: "Search-First", label: "Product discovery" },
    { value: "1", label: "System: ops + storefront" },
  ],
  seo: {
    title: "RetailNest - Retail Management & Storefront CMS",
    description:
      "RetailNest is a retail management CMS for home-furnishings brands — centralized inventory control, employee task management, and a rich, searchable storefront with detailed product specs, wishlist, and cart.",
    keywords: [
      "retail management software",
      "home furnishings retail CMS",
      "inventory management system",
      "retail storefront cms",
      "home goods ecommerce platform",
    ],
  },
};
