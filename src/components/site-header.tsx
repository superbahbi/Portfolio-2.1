import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-b border-border py-5">
      <Link
        href="#top"
        className="font-serif text-lg tracking-tight transition-colors hover:text-muted-foreground"
      >
        Bobby Lee
      </Link>
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <span className="hidden sm:inline">Wanderer</span>
        <ModeToggle />
      </div>
    </header>
  );
}
