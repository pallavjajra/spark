import type { IconName } from "@/lib/icons";

export type ProcessStep = {
  num: string;
  title: string;
  icon: IconName;
  description: string;
};

export const process: ProcessStep[] = [
  {
    num: "01",
    title: "Discover",
    icon: "compass",
    description:
      "We immerse in your business, users, and goals — aligning on the problem worth solving before a line of code is written.",
  },
  {
    num: "02",
    title: "Design",
    icon: "penTool",
    description:
      "Strategy becomes tangible: architecture, prototypes, and a design system, all validated with real users.",
  },
  {
    num: "03",
    title: "Build",
    icon: "code",
    description:
      "Senior engineers ship in tight iterations — automated testing, code review, and a working demo every sprint.",
  },
  {
    num: "04",
    title: "Scale",
    icon: "trendingUp",
    description:
      "We launch, measure, and optimise — then evolve the product as your business grows, backed by ongoing support.",
  },
];
