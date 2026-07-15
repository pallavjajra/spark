export type TechGroup = {
  category: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Java", "Python", ".NET"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    category: "Commerce",
    items: ["Shopify", "BigCommerce"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Snowflake"],
  },
];

// Flattened marquee set for compact strips.
export const techMarquee: string[] = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "Node.js",
  "Java",
  "Shopify",
  "React Native",
  "Flutter",
  "AWS",
  "Azure",
  "Kubernetes",
  "PostgreSQL",
];
