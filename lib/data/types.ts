/**
 * Product content schema (ported from the Ecommerce reference project).
 *
 * The product catalog is fully data-driven: pages render from these typed
 * objects. Adding a product means adding one typed entry in
 * lib/data/products/<slug>.ts and registering it in lib/data/products/index.ts —
 * no UI or routing changes required.
 *
 * Icons are referenced by their lucide-react name as a string (e.g. "ShoppingCart")
 * and resolved at render time by <ProductIcon name="..." /> (components/products/ProductIcon.tsx).
 */

/** A lucide-react icon name. See components/products/ProductIcon.tsx for supported values. */
export type IconName = string;

export type CTA = {
  label: string;
  href: string;
};

export type Benefit = {
  icon: IconName;
  title: string;
  description: string;
};

export type Metric = {
  value: string;
  label: string;
};

/** Ordered, typed content blocks that compose a product detail page. */
export type ProductSection =
  | {
    type: "feature-grid";
    eyebrow?: string;
    title: string;
    description?: string;
    features: Benefit[];
  }
  | {
    type: "split-feature";
    eyebrow?: string;
    productImgSecond?: string;
    title: string;
    description: string;
    bullets?: string[];
    metrics?: Metric[];
    reverse?: boolean;
  }
  | {
    type: "stat-band";
    eyebrow?: string;
    title?: string;
    stats: Metric[];
  }
  | {
    type: "comparison";
    eyebrow?: string;
    title: string;
    description?: string;
    columns: string[];
    rows: { label: string; values: (boolean | string)[] }[];
  }
  | {
    type: "faq";
    eyebrow?: string;
    title?: string;
    items: { q: string; a: string }[];
  }
  | {
    type: "cta";
    title: string;
    description?: string;
    primary: CTA;
    secondary?: CTA;
  };

export type Product = {
  /** URL segment: /products/<slug> */
  slug: string;
  /** Product image URL. */
  productImg?: string;

  productImgThird?: string;
  name: string;
  /** One-line positioning statement, shown on cards and detail hero. */
  tagline: string;
  /** Grouping label used by listing filters, e.g. "Commerce Infrastructure". */
  category: string;
  status: "live" | "coming-soon";
  /** lucide icon name for the product mark. */
  icon: IconName;
  /** Optional per-product accent gradient. */
  accent?: { from: string; to: string };
  /** Surfaced in the homepage Featured Products section when true. */
  featured: boolean;
  /** Card-length description. */
  shortDescription: string;
  /** Industry slugs this product serves. */
  industries: string[];
  /** 3–6 headline benefits, shown on cards and the detail page. */
  keyBenefits: Benefit[];
  /** Detail page hero. Optional for coming-soon products. */
  hero?: {
    eyebrow?: string;
    headline: string;
    subheadline: string;
    highlights: string[];
    primaryCta: CTA;
    secondaryCta?: CTA;
  };
  /** Data-driven detail page body. */
  sections?: ProductSection[];
  metrics?: Metric[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  /** Escape hatch from the reference project; rendered via the data-driven template here. */
  customDetailComponent?: string;
};
