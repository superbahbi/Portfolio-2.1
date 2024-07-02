"use client";
import { BentoCard, BentoGrid } from "@/components/bento-grid";
import { CardCarousel } from "@/components/card-carousel";
import { Button } from "@/components/ui/button";
import {
  SiAngular,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPassport,
  SiPostgresql,
  SiReact,
  SiReactrouter,
  SiSocketdotio,
  SiSpotify,
  SiStripe,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  AtSign,
  BookOpen,
  Briefcase,
  Calendar,
  File,
  FileTextIcon,
  Github,
  Link,
  MoreHorizontal,
  ProjectorIcon,
  Terminal,
} from "lucide-react";
import Image from "next/image";

const buttonData = [
  {
    href: "https://dub.sh/rkrs",
    icon: File,
    label: "Resume",
  },
  {
    href: "mailto:superbahbi@gmail.com",
    icon: AtSign,
    label: "Email",
  },
  {
    href: "https://git.new/rkgit",
    icon: Github,
    label: "Github",
  },
  {
    href: "https://dub.sh/rkcal",
    icon: Calendar,
    label: "Book a Call",
  },
];

const ButtonLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) => (
  <a href={href} target="_blank" className="flex">
    <Button
      className="flex w-full gap-1 text-white"
      variant="outline"
      size="sm"
    >
      <Icon className="size-4" />
      <span className="text-sm">{label}</span>
    </Button>
  </a>
);

export interface IProject {
  id: string;
  title: string;
  description: string;
  technology: {
    name: string;
    icon: React.ReactNode;
  }[];
  code?: string;
  website_link: string;
  website_label: string;
}

const projects: IProject[] = [
  {
    id: "myere",
    title: "Myere",
    technology: [
      { name: "NextJs", icon: <SiNextdotjs size={16} /> },
      { name: "Typescript", icon: <SiTypescript size={16} /> },
      { name: "Tailwindcss", icon: <SiTailwindcss size={16} /> },
      { name: "Supabase", icon: <SiSupabase size={16} /> },
    ],
    description:
      "A platform for budgeting and tracking expenses. Built with NextJs, Typescript, Tailwindcss, and Supabase.",
    website_link: "https://myere.com",
    website_label: "Website",
  },
  {
    id: "twitter-clone-app",
    title: "Twitter Clone App",
    technology: [
      { name: "React Native", icon: <SiReact size={16} /> },
      { name: "Expo", icon: <SiExpo size={16} /> },
    ],
    description:
      "A twitter clone built in react native framework using mongodb database and cloudinary storage.",
    website_link: "https://twitter.bahbi.net/",
    website_label: "Demo",
    code: "https://github.com/superbahbi/twitter-clone-app",
  },
  {
    id: "twitter-clone-web",
    title: "Twitter Clone Web",
    technology: [
      { name: "Reactjs", icon: <SiReact size={16} /> },
      { name: "Typescript", icon: <SiTypescript size={16} /> },
      { name: "HTML5", icon: <SiHtml5 size={16} /> },
      { name: "CSS3", icon: <SiCss3 size={16} /> },
      { name: "React Router", icon: <SiReactrouter size={16} /> },
      { name: "Socket.io", icon: <SiSocketdotio size={16} /> },
      { name: "Styled Components", icon: <SiStyledcomponents size={16} /> },
    ],
    description:
      "A twitter clone built in reactjs framework using mongodb database and cloudinary storage.",
    website_link: "https://twitter.bahbi.net",
    website_label: "Demo",
    code: "https://github.com/superbahbi/twitter-clone-web",
  },
  {
    id: "twitter-clone-server",
    title: "Twitter Clone Server",
    technology: [
      { name: "Nodejs", icon: <SiNodedotjs size={16} /> },
      { name: "MongoDB", icon: <SiMongodb size={16} /> },
      { name: "Express", icon: <SiExpress size={16} /> },
      { name: "Socket.io", icon: <SiSocketdotio size={16} /> },
      { name: "Passport", icon: <SiPassport size={16} /> },
    ],
    description:
      "A backend service for twitter clone web and app, written in nodejs, expressjs, mongodb.",
    website_link: "https://twitter-clone-server2.herokuapp.com/",
    website_label: "Demo",
    code: "https://github.com/superbahbi/twitter-clone-server",
  },
  {
    id: "wordle",
    title: "Wordle",
    technology: [
      { name: "Reactjs", icon: <SiReact size={16} /> },
      { name: "CSS3", icon: <SiCss3 size={16} /> },
      { name: "HTML5", icon: <SiHtml5 size={16} /> },
    ],
    description: "A worlde clone built in react framework",
    website_link: "https://wordle.bahbi.net/",
    website_label: "Demo",
    code: "https://github.com/superbahbi/wordle",
  },
  {
    id: "memory-game",
    title: "Memory Game",
    technology: [
      { name: "Reactjs", icon: <SiReact size={16} /> },
      { name: "CSS3", icon: <SiCss3 size={16} /> },
      { name: "HTML5", icon: <SiHtml5 size={16} /> },
    ],
    description: "A game built in reactjs. Match and win the game.",
    website_link: "https://memory.bahbi.net/",
    website_label: "Demo",
    code: "https://github.com/superbahbi/barbarian-memory",
  },
  {
    id: "tictactoe-online",
    title: "Tic Tac Toe Online",
    technology: [
      { name: "Reactjs", icon: <SiReact size={16} /> },
      { name: "CSS3", icon: <SiCss3 size={16} /> },
      { name: "HTML5", icon: <SiHtml5 size={16} /> },
      { name: "Socket.io", icon: <SiSocketdotio size={16} /> },
    ],
    description:
      "A tic tac toe game built in reactjs and socket.io. Play with your friends.",
    website_link: "https://ttt-online.bahbi.net/",
    website_label: "Demo",
    code: "https://github.com/superbahbi/tictactoe-online",
  },
  {
    id: "discoverify",
    title: "Discoverify",
    technology: [
      { name: "Reactjs", icon: <SiReact size={16} /> },
      { name: "CSS3", icon: <SiCss3 size={16} /> },
      { name: "HTML5", icon: <SiHtml5 size={16} /> },
      { name: "Spotify API", icon: <SiSpotify size={16} /> },
    ],
    description: "A spotify app built in react framework.",
    website_link: "https://discoverify.bahbi.net/",
    website_label: "Demo",
    code: "https://github.com/superbahbi/discoverify",
  },
  {
    id: "corkify",
    title: "Corkify",
    technology: [
      { name: "React Native", icon: <SiReact size={16} /> },
      { name: "Expo", icon: <SiExpo size={16} /> },
      { name: "Firebase", icon: <SiFirebase size={16} /> },
      { name: "Stripe", icon: <SiStripe size={16} /> },
    ],
    description:
      "A wine flash store built in react native framework using firebase auth, real time database, and storage.",
    website_link: "https://expo.dev/@superbahbi/Corkify",
    website_label: "Demo",
    code: "https://github.com/superbahbi/corkify",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    technology: [
      { name: "Reactjs", icon: <SiReact size={16} /> },
      { name: "CSS3", icon: <SiCss3 size={16} /> },
      { name: "HTML5", icon: <SiHtml5 size={16} /> },
      { name: "Animation", icon: <SiCss3 size={16} /> },
    ],
    description: "My personal portfolio built in react framework. ",
    website_link: "https://robertkugler/dev/",
    website_label: "Demo",
    code: "https://github.com/superbahbi/portfolio-2.1",
  },
];

const JobItem = ({
  job,
}: {
  job: { role: string; company: string; period: string; color: string };
}) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 sm:items-center">
    <div className="order-1 col-span-1 flex items-center gap-2 sm:order-none">
      <span className={`size-2 rounded-full ${job.color}`}></span>
      <span className="overflow-hidden truncate whitespace-nowrap">
        {job.role}
      </span>
    </div>
    <div className="order-3 col-span-2 flex justify-normal pl-4 sm:order-none sm:col-start-2 sm:pl-0">
      {job.company}
    </div>
    <div className="order-2 flex justify-end sm:order-none sm:col-start-3">
      {job.period}
    </div>
  </div>
);

const TechStackItem = ({
  Icon,
  name,
  description,
}: {
  Icon: any;
  name: string;
  description: string;
}) => (
  <div className="flex gap-2">
    <div className="flex rounded-md border border-dashed border-border bg-transparent p-3">
      <Icon className="size-5 text-white" />
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-white">{name}</span>
      <p className="text-left text-xs tracking-tighter text-neutral-400">
        {description}
      </p>
    </div>
  </div>
);

const features = [
  {
    Icon: Terminal,
    name: "Robert Kugler",
    description: "Full Stack Software Engineer",
    className: "col-span-3 md:col-span-1 flex justify-between",
    background: (
      <div className=" rounded-md grayscale transition-all duration-300 ease-out [mask-image:linear-gradient(to_bottom,transparent_10%,#000_100%)] group-hover:scale-105">
        <Image
          src="/me.jpg"
          alt="Robert Kugler"
          width={614}
          height={819}
          className="rounded-md object-cover"
        />
      </div>
    ),
  },

  {
    Icon: FileTextIcon,
    name: "About Me",
    description: "Learn more about me.",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="flex flex-col gap-2 px-4 py-4 sm:px-6">
        <p className="text-left tracking-tighter text-neutral-400">
          I am Robert Kugler, a full-stack software engineer based in San Luis
          Obispo, California. I specialize in building and enhancing
          applications using Typescript, React, and React Native. My dedication
          to continuous learning and improvement is evident in my active GitHub
          repositories, where I consistently update my latest projects.
        </p>
        <p className="text-left tracking-tighter text-neutral-400">
          I am currently developing Myere, a finance management tool designed to
          simplify budgeting and expense tracking. Myere automates budgeting
          tasks, manages subscriptions, provides automated money-saving
          insights, and features an effortless setup process for streamlined
          savings. With support for over 100 bank integrations for importing
          financial documents and a calendar view for transactions, Myere is
          dedicated to making budgeting easy and stress-free. Learn more and
          join our waitlist on the{" "}
          <a href="https://myere.com" className="underline">
            Myere website
          </a>
          .
        </p>
        <p className="text-left tracking-tighter text-neutral-400">
          As a dedicated software engineering professional, I strive to leverage
          my skills to provide innovative and effective solutions. For
          questions, collaborations, or more information about my projects and
          professional journey, please feel free to reach out.
        </p>
      </div>
    ),
  },
  {
    Icon: Briefcase,
    name: "Experience",
    description: "I have experience in a variety of fields.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="px-4 py-4 sm:px-6">
        <div className="w-full text-sm tracking-tighter text-neutral-400">
          <div className="flex flex-col gap-2 sm:gap-1">
            {[
              {
                role: "Founder",
                company: "Myere",
                period: "Apr '24 - Present",
                color: "bg-green-400",
              },
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
    Icon: Link,
    name: "Link",
    description: "Check out my resume, email me, or book a call.",
    className: "col-span-3 lg:col-span-1",

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
    Icon: BookOpen,
    name: "Currently Reading",
    description: "Books I am currently reading.",
    className: "col-span-3 md:col-span-1",
    background: (
      <div className="px-4 py-4 sm:px-6">
        <h3 className="text-left tracking-tighter text-neutral-200">
          Philanthropic Wanderlust
        </h3>
        <span className="text-left text-sm tracking-tighter text-neutral-400">
          by: Danell Lynn
        </span>
        <div className="py-2 ">
          <a href="https://www.goodreads.com/book/show/27393058-philanthropic-wanderlust">
            <img
              src="/pw_by_dl.jpg"
              alt="Philanthropic Wanderlust"
              className="rounded-md grayscale [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
            />
          </a>
        </div>
      </div>
    ),
  },
  {
    Icon: ProjectorIcon,
    name: "Projects",
    description: "Projects I have worked on.",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-center">
          <CardCarousel projects={projects} />
        </div>
      </div>
    ),
  },
  {
    Icon: HamburgerMenuIcon,
    name: "Tech Stack",
    description: "Current stack I am working with.",
    className: "col-span-3 lg:col-span-3",
    background: (
      <div className="px-4 py-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 text-white sm:grid-cols-2 lg:grid-cols-3">
          <TechStackItem
            Icon={SiNextdotjs}
            name="Next.js"
            description="Frontend"
          />
          <TechStackItem
            Icon={SiAngular}
            name="Angular"
            description="Frontend"
          />
          <TechStackItem Icon={SiExpo} name="Expo" description="Mobile" />
          <TechStackItem
            Icon={SiNodedotjs}
            name="Node.js"
            description="Backend"
          />
          <TechStackItem
            Icon={SiTailwindcss}
            name="Tailwind"
            description="CSS"
          />
          <TechStackItem Icon={SiMysql} name="Mysql" description="Database" />
          <TechStackItem
            Icon={SiPostgresql}
            name="Postgres"
            description="Database"
          />
          <TechStackItem
            Icon={SiSupabase}
            name="Supabase"
            description="Database and Auth"
          />
          <TechStackItem
            Icon={MoreHorizontal}
            name=""
            description="and many more..."
          />
        </div>
      </div>
    ),
  },
];

export default function Page() {
  return (
    <main className="col-span-1 lg:col-span-3">
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </main>
  );
}
