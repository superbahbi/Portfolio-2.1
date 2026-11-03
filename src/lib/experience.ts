export interface Experience {
  role: string;
  place: string;
  period: string;
  kind: "wine" | "software";
}

export const experience: Experience[] = [
  {
    role: "Cellar Hand",
    place: "Whitehaven Wine Co.",
    period: "2026",
    kind: "wine",
  },
  {
    role: "Software Engineer",
    place: "CheddrSuite",
    period: "2022 — 2025",
    kind: "software",
  },
  {
    role: "Cofounder",
    place: "Juke",
    period: "2024 — 2025",
    kind: "software",
  },
  {
    role: "Technical Producer",
    place: "YesChef Productions",
    period: "2024 — 2025",
    kind: "software",
  },
  {
    role: "Cellar Master",
    place: "Paris Valley Road",
    period: "2019 — 2022",
    kind: "wine",
  },
  {
    role: "Cellar Tech",
    place: "Justin Vineyard & Winery",
    period: "2016 — 2019",
    kind: "wine",
  },
  {
    role: "Assistant Winemaker",
    place: "Ave Winery",
    period: "2014 — 2016",
    kind: "wine",
  },
];
