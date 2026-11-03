import { experience } from "@/lib/experience";
import { cn } from "@/lib/utils";

export function ExperienceList() {
  return (
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {experience.map((job) => (
        <li
          key={`${job.role}-${job.place}`}
          className="flex items-baseline justify-between gap-4"
        >
          <div className="flex items-baseline gap-2">
            <span
              className={cn(
                "size-1.5 shrink-0 self-center rounded-full",
                job.kind === "wine" ? "bg-amber-500" : "bg-emerald-500",
              )}
            />
            <span className="text-sm">{job.role}</span>
            <span className="text-xs text-muted-foreground">
              at {job.place}
            </span>
          </div>
          <span className="shrink-0 text-[11px] tabular-nums text-muted-foreground">
            {job.period}
          </span>
        </li>
      ))}
    </ul>
  );
}
