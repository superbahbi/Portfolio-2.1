import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-4 md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

function BentoCard({
  label,
  Icon,
  action,
  className,
  children,
}: {
  label?: string;
  Icon?: LucideIcon;
  action?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border",
        "bg-card/80 text-card-foreground backdrop-blur-sm",
        "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_28px_-16px_rgba(0,0,0,0.18)]",
        "transition-colors duration-300 hover:border-foreground/25",
        "dark:bg-card/70 dark:shadow-[0_-20px_60px_-30px_#ffffff1f_inset]",
        className,
      )}
    >
      <header className="flex items-center justify-between gap-3 px-5 pt-4">
        <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {Icon ? <Icon className="size-3.5" strokeWidth={1.6} /> : null}
          {label}
        </span>
        {action}
      </header>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-3">{children}</div>
    </section>
  );
}

export { BentoCard, BentoGrid };
