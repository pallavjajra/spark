import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/data/services";
import { caseStudies } from "@/lib/data/caseStudies";
import { products } from "@/lib/data/products";

// Required for `output: "export"` — generate this as a static file at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const cf = "monthly" as const;

  const staticPaths = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.8 },
    { path: "/ai", priority: 0.9 },
    { path: "/products", priority: 0.8 },
    { path: "/work", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  return [
    ...staticPaths.map(({ path, priority }) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: cf,
      priority,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified,
      changeFrequency: cf,
      priority: 0.6,
    })),
    ...products.map((p) => ({
      url: `${site.url}/products/${p.slug}`,
      lastModified,
      changeFrequency: cf,
      priority: 0.7,
    })),
    ...caseStudies.map((c) => ({
      url: `${site.url}/work/${c.slug}`,
      lastModified,
      changeFrequency: cf,
      priority: 0.6,
    })),
  ];
}
