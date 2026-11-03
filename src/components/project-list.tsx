import { projects } from "@/lib/project";
import { ArrowUpRight } from "lucide-react";

export function ProjectList() {
  return (
    <ul className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
      {projects.map((project) => (
        <li key={project.id}>
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-lg leading-tight">
              {project.title}
            </h3>
            <span className="shrink-0 text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              {project.kind}
            </span>
          </div>
          <p className="mt-1.5 line-clamp-2 text-[13px] leading-5 text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground/80">
            <span>{project.technology.slice(0, 4).join(" · ")}</span>
            {project.links.map((link) => (
              <a
                key={`${project.id}-${link.label}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
              >
                {link.label}
                <ArrowUpRight className="size-3" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
