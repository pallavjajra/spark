export const site = {
  name: "Spark Business Technology",
  shortName: "Spark",
  tagline: "Ignite Innovation, Empower Growth",
  description:
    "Spark Business Technology is a global software engineering, AI, and digital transformation partner. We design, build, and scale software, AI solutions, and intelligent automation for startups, SMEs, and enterprises across five regions.",
  url: "https://sparkbusinesstechnology.com.au",
  email: "hello@sparkbusinesstechnology.com.au",
  phone: {
    au: "+61404408958",
  },
  offices: [
    {
      region: "Australia",
      label: "Global branch",
      city: "Newmarket, QLD",
      address: "PO BOX 2150, Newmarket QLD 4051",
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/spark-business-technology",
    twitter: "https://twitter.com/SparkTechAu",
    twitterHandle: "@SparkTechAu",
    facebook: "https://www.facebook.com/sparkbusinesstechnology",
  },
  stats: {
    clients: "150+",
    projects: "500+",
    regions: "5",
    founded: "2018",
  },
} as const;

export type Site = typeof site;
