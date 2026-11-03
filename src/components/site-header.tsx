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
      <nav className="flex items-center gap-5 text-sm text-muted-foreground">
        <Link className="transition-colors hover:text-foreground" href="#about">
          About
        </Link>
        <Link className="transition-colors hover:text-foreground" href="#work">
          Work
        </Link>
        <Link
          className="transition-colors hover:text-foreground"
          href="#contact"
        >
          Contact
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
