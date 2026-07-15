import type { Product } from "../types";
import { enterpriseCommerceInfrastructure } from "./enterprise-commerce-infrastructure";
import { propertyOs } from "./property-os";
import { constructos } from "./constructos";
import { healthaxis } from "./healthaxis";
import { nasNeuron } from "./nas-neuron";
import { nexusOs } from "./nexus-os";
import { freightLedger } from "./freight-ledger";
import { eduStream } from "./edustream";
import { stageHub } from "./stagehub";
import { retailNest } from "./retailnest";
import { serveHive } from "./servehive";

/**
 * The product registry — the single ordered list of products on the site.
 *
 * TO ADD A PRODUCT:
 *   1. Create content/products/<slug>.ts exporting a Product object.
 *   2. Import it here and add it to this array (order = display order).
 * That's it. The homepage Featured section, the /products listing, every
 * relevant industry page, the sitemap, and a fully generated detail page all
 * pick it up automatically — no UI or routing changes.
 *
 * For a bespoke (hand-built) detail page, set `customDetailComponent` on the
 * product and register the component in components/product/customDetail.ts.
 * Otherwise the data-driven ProductDetailTemplate renders `hero` + `sections`.
 */
export const products: Product[] = [
  enterpriseCommerceInfrastructure,
  propertyOs,
  constructos,
  healthaxis,
  nasNeuron,
  nexusOs,
  freightLedger,
  eduStream,
  stageHub,
  retailNest,
  serveHive,
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function allProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function liveProducts(): Product[] {
  return products.filter((p) => p.status === "live");
}

export function featuredProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function productsByIndustry(industrySlug: string): Product[] {
  return products.filter((p) => p.industries.includes(industrySlug));
}

export function allCategories(): string[] {
  return Array.from(new Set(products.map((p) => p.category)));
}
