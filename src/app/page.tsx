import { ExperienceList } from "@/components/experience-list";
import { ProjectList } from "@/components/project-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import Image from "next/image";
import type { ReactNode } from "react";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
      {children}
    </h2>
  );
}

export default function Page() {
  return (
    <div
      id="top"
      className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 sm:px-8"
    >
      <SiteHeader />

      <main className="flex-1">
        <section className="grid gap-10 pb-16 pt-12 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-14 sm:pt-20">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Currently wandering
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.92] tracking-[-0.03em] sm:text-7xl">
              Bobby Lee
            </h1>
            <p className="mt-6 max-w-md text-lg leading-7 text-muted-foreground">
              {site.tagline}
            </p>
          </div>
          <div className="relative aspect-[3/4] w-full max-w-[210px] overflow-hidden rounded-sm bg-muted sm:justify-self-end">
            <Image
              src="/me.jpg"
              alt="Bobby Lee"
              fill
              sizes="(min-width: 640px) 210px, 60vw"
              className="object-cover grayscale-[0.15]"
              priority
            />
          </div>
        </section>

        <section id="about" className="border-t border-border py-14">
          <SectionLabel>About</SectionLabel>
          <div className="mt-6 max-w-2xl space-y-5 text-[17px] leading-8">
            {site.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="work" className="border-t border-border py-14">
          <SectionLabel>Older projects</SectionLabel>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
            Things I built and mostly finished. Poke around.
          </p>
          <div className="mt-8">
            <ProjectList />
          </div>
        </section>

        <section id="previously" className="border-t border-border py-14">
          <SectionLabel>Previously</SectionLabel>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
            Over a decade in wine, and a good stretch of software alongside it.
          </p>
          <div className="mt-8">
            <ExperienceList />
          </div>
        </section>

        <section id="contact" className="border-t border-border py-14">
          <SectionLabel>Links</SectionLabel>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
            No newsletter, no feed. Just a few places to say hi.
          </p>
          <ul className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
            {site.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group inline-flex items-baseline gap-2 font-serif text-2xl transition-colors hover:text-muted-foreground"
                >
                  {link.label}
                  <span className="font-sans text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
