import { projects } from "@/lib/project";

export function ProjectList() {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {projects.map((project, index) => (
        <li
          key={project.id}
          className="grid gap-4 py-7 sm:grid-cols-[2.5rem_1fr] sm:gap-6"
        >
          <span className="pt-1 text-xs tabular-nums text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-serif text-xl leading-tight">
                {project.title}
              </h3>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {project.kind}
              </span>
            </div>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span>{project.technology.join(" · ")}</span>
              {project.links.map((link) => (
                <a
                  key={`${project.id}-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
