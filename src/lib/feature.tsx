import { CardCarousel } from "@/components/card-carousel";
import { JobItem } from "@/components/job-item";
import { Like } from "@/components/like-book";
import { ModeToggle } from "@/components/mode-toggle";
import { TechStackItem } from "@/components/tech-stack-item";
import { Skeleton } from "@/components/ui/skeleton";
import { projects } from "@/lib/project";
import * as Icons from "@icons-pack/react-simple-icons";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

const features = [
  {
    Icon: LucideIcons.Terminal,
    name: "Bobby Lee",
    description: `Full-time wanderer · AI-native developer.`,
    className: "col-span-3 md:col-span-1 flex justify-between",
    background: (
      <div className="rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_bottom,transparent_1%,#000_100%)] group-hover:scale-105">
        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-md">
          <Image
            src="/me.jpg"
            alt="Bobby Lee"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover object-bottom"
          />
        </div>
      </div>
    ),
    right: (
      <div className="block md:hidden">
        <ModeToggle />
      </div>
    ),
  },
  {
    Icon: LucideIcons.FileTextIcon,
    name: "About Me",
    description: "Learn more about me.",
    className: "col-span-3 md:col-span-2 pb-2 justify-start",
    background: (
      <div className="flex flex-col gap-2 px-4 py-4 sm:px-6">
        <p className="text-justify tracking-tighter  sm:text-left">
          I’m Bobby Lee, a full-time wanderer. I don’t know where I’ll be next
          month, and I’m learning to like that.
        </p>
        <p className="text-justify tracking-tighter sm:text-left">
          I spent over a decade making wine and wrote software on the side for
          much of it. Now I build full time again as an AI-native developer. I
          work with Claude and other models every day, mostly in TypeScript,
          React, and Expo, and I’d rather ship small useful things than big
          clever ones.
        </p>
        <p className="text-justify tracking-tighter sm:text-left">
          Have a look around, and say hi if something catches your eye.
        </p>
      </div>
    ),
    right: (
      <div className="hidden md:block">
        <ModeToggle />
      </div>
    ),
  },
  {
    Icon: LucideIcons.Briefcase,
    name: "Experience",
    description: "I have experience in a variety of fields.",
    className: "col-span-3 lg:col-span-2 pb-2",
    background: (
      <div className="px-4 py-4 sm:px-6">
        <div className="w-full text-sm tracking-tighter">
          <div className="flex flex-col gap-2 sm:gap-2.5">
            {[
              {
                role: "Cellar Hand",
                company: "Whitehaven Wine Co.",
                period: "Feb '26 - Apr '26",
                color: "bg-red-400",
              },
              {
                role: "Software Engineer",
                company: "CheddrSuite",
                period: "Dec '22 - Apr '25",
                color: "bg-red-400",
              },
              {
                role: "Cofounder",
                company: "Juke",
                period: "Jul '24 - Feb '25",
                color: "bg-red-400",
              },
              {
                role: "Technical Producer",
                company: "YesChef Production",
                period: "Apr '24 - Jan '25",
                color: "bg-red-400",
              },
              {
                role: "Cellar Master",
                company: "Paris Valley Road",
                period: "May '19 - Nov '22",
                color: "bg-red-400",
              },
              {
                role: "Cellar Tech",
                company: "Justin Vineyard & Winery",
                period: "Sep '16 - May '19",
                color: "bg-red-400",
              },
              {
                role: "Assistant Winemaker",
                company: "Ave Winery",
                period: "Jan '14 - Sep '16",
                color: "bg-red-400",
              },
            ].map((job, index) => (
              <JobItem key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: LucideIcons.Menu,
    name: "Tech Stack",
    description: "Current stack I am working with.",
    className: "col-span-3 lg:col-span-1 pb-2",
    background: (
      <div className="px-4 py-4 sm:px-6">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-2 lg:gap-1.5">
          <TechStackItem
            Icon={Icons.SiNextdotjs}
            name="Next.js"
            description="Frontend"
          />
          <TechStackItem
            Icon={Icons.SiAngular}
            name="Angular"
            description="Frontend"
          />
          <TechStackItem Icon={Icons.SiExpo} name="Expo" description="Mobile" />
          <TechStackItem
            Icon={Icons.SiNodedotjs}
            name="Node.js"
            description="Backend"
          />
          <TechStackItem
            Icon={Icons.SiTailwindcss}
            name="Tailwind"
            description="CSS"
          />
          <TechStackItem
            Icon={Icons.SiMysql}
            name="Mysql"
            description="Database"
          />
          <TechStackItem
            Icon={Icons.SiPostgresql}
            name="Postgres"
            description="Database"
          />
          <TechStackItem
            Icon={Icons.SiSupabase}
            name="Supabase"
            description="Database and Auth"
          />
          <TechStackItem
            Icon={Icons.SiSpotify}
            name="Spotify"
            description="Music"
          />
          <TechStackItem
            Icon={Icons.SiStripe}
            name="Stripe"
            description="Payments"
          />
          <TechStackItem
            Icon={Icons.SiSocketdotio}
            name="Socket.io"
            description="Realtime"
          />
          <TechStackItem
            Icon={LucideIcons.MoreHorizontal}
            name=""
            description="and many more..."
            className="lg:col-span-2"
          />
        </div>
      </div>
    ),
  },
  {
    Icon: LucideIcons.BookOpen,
    name: "Currently Reading",
    description: "Books I am currently reading.",
    className: "col-span-3 md:col-span-1 pb-2",
    background: (
      <div className="px-4 py-4 sm:px-6">
        <div className="flex flex-col">
          <h3 className="text-left text-lg tracking-tighter">Meditation</h3>
          <span className="text-left text-xs tracking-tighter">
            Marcus Aurelius
          </span>
        </div>
        <div className="relative py-2">
          <div className="absolute bottom-3 right-1 z-10">
            <Suspense
              fallback={
                <Skeleton className="h-8 w-16 flex-col items-center px-6" />
              }
            >
              <Like id="book:meditation-by-ma" />
            </Suspense>
          </div>
          <a href="https://www.goodreads.com/book/show/30659" target="_blank">
            <img
              src="/meditation_by-ma.jpg"
              alt="Meditation by Marcus Aurelius"
              className="rounded-md grayscale [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
            />
          </a>
        </div>
      </div>
    ),
  },
  {
    Icon: LucideIcons.ProjectorIcon,
    name: "Projects",
    description: "Projects I have worked on.",
    className: "col-span-3 md:col-span-2 pb-2",
    background: (
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-center">
          <CardCarousel projects={projects} />
        </div>
      </div>
    ),
  },
];

export { features };
