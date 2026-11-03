import { BentoCard, BentoGrid } from "@/components/bento-grid";
import { ExperienceList } from "@/components/experience-list";
import { ProjectList } from "@/components/project-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import {
  ArrowUpRight,
  Briefcase,
  FileText,
  FolderGit2,
  Link2,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div
      id="top"
      className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 sm:px-8"
    >
      <SiteHeader />

      <main className="flex-1 py-8 sm:py-12">
        <BentoGrid>
          <BentoCard label="Hello" Icon={Terminal} className="md:col-span-1">
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/me.jpg"
                  alt="Bobby Lee"
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover grayscale-[0.15]"
                  priority
                />
              </div>
              <div>
                <h1 className="font-serif text-3xl leading-none tracking-[-0.02em]">
                  Bobby Lee
                </h1>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {site.tagline}
                </p>
              </div>
            </div>
          </BentoCard>

          <BentoCard label="About" Icon={FileText} className="md:col-span-2">
            <div className="space-y-4 text-sm leading-7">
              {site.about.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </BentoCard>

          <BentoCard
            label="Older projects"
            Icon={FolderGit2}
            className="md:col-span-3"
          >
            <p className="mb-5 max-w-xl text-xs text-muted-foreground">
              Things I built and mostly finished. Poke around.
            </p>
            <ProjectList />
          </BentoCard>

          <BentoCard
            label="Previously"
            Icon={Briefcase}
            className="md:col-span-2"
          >
            <p className="mb-4 text-xs text-muted-foreground">
              Over a decade in wine, and a good stretch of software alongside
              it.
            </p>
            <ExperienceList />
          </BentoCard>

          <BentoCard label="Links" Icon={Link2} className="md:col-span-1">
            <div className="flex flex-1 flex-col justify-center gap-2">
              {site.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group/link flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm transition-colors hover:border-foreground/30 hover:bg-secondary/60"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-colors group-hover/link:text-foreground"
                    strokeWidth={1.6}
                  />
                </Link>
              ))}
            </div>
          </BentoCard>
        </BentoGrid>
      </main>

      <SiteFooter />
    </div>
  );
}
