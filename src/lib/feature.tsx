import { ButtonLink } from "@/components/button-link";
import { CardCarousel } from "@/components/card-carousel";
import { JobItem } from "@/components/job-item";
import { Like } from "@/components/like-book";
import { ModeToggle } from "@/components/mode-toggle";
import { NowPlaying } from "@/components/now-playing";
import { TechStackItem } from "@/components/tech-stack-item";
import { Skeleton } from "@/components/ui/skeleton";
import { projects } from "@/lib/project";
import { ButtonLinkProps } from "@/lib/types";
import * as Icons from "@icons-pack/react-simple-icons";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

const buttonData: ButtonLinkProps[] = [
  { href: "https://dub.sh/rkrs", icon: LucideIcons.File, label: "Resume" },
  {
    href: "https://dub.sh/rklinkedin",
    icon: Icons.SiLinkedin,
    label: "LinkedIn",
  },
  { href: "https://git.new/rkgit", icon: Icons.SiGithub, label: "Github" },
  {
    href: "https://dub.sh/rkcal",
    icon: LucideIcons.Calendar,
    label: "Book a Meeting",
  },
];

const features = [
  {
    Icon: LucideIcons.Terminal,
    name: "Robert (Bobby Lee) Kugler",
    description: `Full Stack Software Engineer, San Luis Obispo, CA.`,
    className: "col-span-3 md:col-span-1 flex justify-between",
    background: (
      <div className=" rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_bottom,transparent_1%,#000_100%)] group-hover:scale-105">
        <Image
          src="/me.jpg"
          alt="Robert Kugler"
          width={614}
          height={819}
          className="rounded-md object-cover"
        />
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
    className: "col-span-3 md:col-span-2 pb-2",
    background: (
      <div className="flex flex-col gap-2 px-4 py-4 sm:px-6">
        <p className="text-justify tracking-tighter  sm:text-left">
          I am Robert Kugler, a full-stack software engineer based in San Luis
          Obispo, California. I specialize in building and enhancing
          applications using Typescript, React, and React Native. My dedication
          to continuous learning and improvement is evident in my active GitHub
          repositories, where I consistently update my latest projects.
        </p>
        <p className="text-justify tracking-tighter sm:text-left">
          I am currently developing Juke, a platform that connects artists and
          venues, offering features and benefits for users, performers, and
          venues. Artists can manage their fan base and venue connections,
          venues can track potential talent, and fans can follow their favorite
          artists and discover new venues.
        </p>
        <p className="text-justify tracking-tighter sm:text-left">
          As a dedicated software engineering professional, I strive to leverage
          my skills to provide innovative and effective solutions. For
          questions, collaborations, or more information about my projects and
          professional journey, please feel free to reach out.
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
          <div className="flex flex-col gap-2 sm:gap-1">
            {[
              {
                role: "Cofounder",
                company: "Juke",
                period: "July '24 - Present",
                color: "bg-green-400",
              },
              // {
              //   role: "Founder",
              //   company: "Myere",
              //   period: "Apr '24 - Present",
              //   color: "bg-green-400",
              // },
              {
                role: "Technical Producer",
                company: "YesChef Production",
                period: "Apr '24 - Present",
                color: "bg-green-400",
              },
              {
                role: "Software Engineer",
                company: "CheddrSuite",
                period: "Dec '22 - Present",
                color: "bg-green-400",
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
    Icon: LucideIcons.Link,
    name: "Link",
    description: "Quick access to my resume, email, and GitHub profiles.",
    className: "col-span-3 lg:col-span-1 pb-2",

    background: (
      <div className="px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-2">
          {buttonData.map((button) => (
            <ButtonLink key={button.label} {...button} />
          ))}
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
  {
    Icon: LucideIcons.Menu,
    name: "Tech Stack",
    description: "Current stack I am working with.",
    className: "col-span-3 lg:col-span-2 pb-2",
    background: (
      <div className="px-4 py-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          />
        </div>
      </div>
    ),
  },
  {
    Icon: LucideIcons.Music,
    name: "Now Playing",
    description: "What I am currently listening to.",
    className: "col-span-3 lg:col-span-1 pb-2",
    background: (
      <div className="px-4 py-4 sm:px-6">
        <Suspense fallback={<div>Loading...</div>}>
          <NowPlaying />
        </Suspense>
      </div>
    ),
  },
];

export { features };
