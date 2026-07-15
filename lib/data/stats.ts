export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const impactStats: Stat[] = [
  { value: 150, suffix: "+", label: "Clients worldwide" },
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 5, suffix: "", label: "Global regions" },
  { value: 98, suffix: "%", label: "Client retention" },
];
