import { experience } from "@/lib/experience";

export function ExperienceList() {
  return (
    <ul className="space-y-5">
      {experience.map((job) => (
        <li
          key={`${job.role}-${job.place}`}
          className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
        >
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-sm">{job.role}</span>
            <span className="text-sm text-muted-foreground">
              at {job.place}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
              {job.kind}
            </span>
          </div>
          <span className="text-xs tabular-nums text-muted-foreground">
            {job.period}
          </span>
        </li>
      ))}
    </ul>
  );
}
