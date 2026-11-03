export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  kind: "App" | "Website" | "Experiment";
  description: string;
  technology: string[];
  links: ProjectLink[];
}
