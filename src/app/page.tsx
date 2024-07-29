import React, { Suspense } from "react";
import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/bento-grid";
import { CardCarousel } from "@/components/card-carousel";
import { Like } from "@/components/like-book";
import { ModeToggle } from "@/components/mode-toggle";
import { NowPlaying } from "@/components/now-playing";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import * as Icons from "@icons-pack/react-simple-icons";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as LucideIcons from "lucide-react";
import { ButtonLinkProps, IProject, JobItemProps, TechStackItemProps } from "@/lib/types";

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, icon: Icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex">
    <Button className="flex w-full gap-1" variant="outline" size="sm">
      <Icon className="size-4" />
      <span className="text-sm">{label}</span>
    </Button>
  </a>
);

const JobItem: React.FC<JobItemProps> = ({ job }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 sm:items-center">
    <div className="order-1 col-span-1 flex items-center gap-2 sm:order-none">
      <span className={`size-2 rounded-full ${job.color}`}></span>
      <span className="overflow-hidden truncate whitespace-nowrap">{job.role}</span>
    </div>
    <div className="order-3 col-span-2 flex justify-normal pl-4 sm:order-none sm:col-span-1 sm:pl-0">
      {job.company}
    </div>
    <div className="order-2 flex justify-end sm:order-none sm:col-start-3">
      {job.period}
    </div>
  </div>
);

const TechStackItem: React.FC<TechStackItemProps> = ({ Icon, name, description }) => (
  <div className="flex gap-2">
    <div className="flex rounded-md border border-dashed border-border bg-transparent p-3">
      <Icon className="size-5" />
    </div>
    <div className="flex flex-col justify-center">
      <span>{name}</span>
      <p className="text-left text-xs tracking-tighter text-muted-foreground">
        {description}
      </p>
    </div>
  </div>
);

const buttonData: ButtonLinkProps[] = [
  { href: "https://dub.sh/rkrs", icon: LucideIcons.File, label: "Resume" },
  { href: "mailto:superbahbi@gmail.com", icon: LucideIcons.AtSign, label: "Email" },
  { href: "https://git.new/rkgit", icon: LucideIcons.Github, label: "Github" },
  { href: "https://dub.sh/rkcal", icon: LucideIcons.Calendar, label: "Book a Meeting" },
]

const projects: IProject[] = [
  {
    id: "juke",
    title: "Juke",
    technology: [
      { name: "NextJs", icon: <Icons.SiNextdotjs size={16} /> },
      { name: "Typescript", icon: <Icons.SiTypescript size={16} /> },
      { name: "Tailwindcss", icon: <Icons.SiTailwindcss size={16} /> },
      { name: "Supabase", icon: <Icons.SiSupabase size={16} /> },
      { name: "Expo", icon: <Icons.SiExpo size={16} /> },
    ],
    description:
      "Juke is a music social app built for venues, artists, and fans. It features a sleek and modern design, with a focus on user experience and ease of use. Juke is built using Expo, which allows for cross-platform compatibility and seamless integration with the Apple App Store and Google Play Store. Developed using NextJs, Typescript, Tailwindcss, and Supabase.",
    website_link: "https://www.joinjuke.app",
    website_label: "Website",
  },
  {
    id: "myere",
    title: "Myere",
    technology: [
      { name: "NextJs", icon: <Icons.SiNextdotjs size={16} /> },
      { name: "Typescript", icon: <Icons.SiTypescript size={16} /> },
      { name: "Tailwindcss", icon: <Icons.SiTailwindcss size={16} /> },
      { name: "Supabase", icon: <Icons.SiSupabase size={16} /> },
    ],
    description:
      "Myere leverages advanced AI to scrutinize your subscriptions and recurring bills, uncovering potential savings and negotiating better rates. Streamline your financial management and enhance your savings with Myere. Developed using NextJs, Typescript, Tailwindcss, and Supabase.",
    website_link: "https://myeremoney.com",
    website_label: "Website",
  },
  {
    id: "cadenarg",
    title: "Cadena Restaurant Group",
    technology: [
      { name: "NextJs", icon: <Icons.SiNextdotjs size={16} /> },
      { name: "Typescript", icon: <Icons.SiTypescript size={16} /> },
      { name: "Tailwindcss", icon: <Icons.SiTailwindcss size={16} /> },
    ],
    description:
      "Cadena Restaurant Group provides comprehensive insights into your business operations and automates routine tasks, allowing you to focus on your core passions. Developed using NextJs, Typescript, and Tailwindcss.",
    website_link: "https://www.cadenarg.com/",
    website_label: "Website",
  },
  {
    id: "yeschefmarketplace",
    title: "YesChef Marketplace",
    technology: [
      { name: "NextJs", icon: <Icons.SiNextdotjs size={16} /> },
      { name: "Typescript", icon: <Icons.SiTypescript size={16} /> },
      { name: "Tailwindcss", icon: <Icons.SiTailwindcss size={16} /> },
      { name: "Supabase", icon: <Icons.SiSupabase size={16} /> },
    ],
    description:
      "YesChef Marketplace is a curated collection of top-rated restaurant software from around the web. Discover the best tools for your restaurant, cafe, or bar. Developed using NextJs, Typescript, Tailwindcss, and Supabase.",
    website_link: "https://yeschefmarketplace-website.vercel.app/",
    website_label: "Website",
  },
  {
    id: "getrds",
    title: "Cadena Restaurant Group",
    technology: [
      { name: "Astro", icon: <Icons.SiAstro size={16} /> },
      { name: "Typescript", icon: <Icons.SiTypescript size={16} /> },
      { name: "Tailwindcss", icon: <Icons.SiTailwindcss size={16} /> },
    ],
    description:
      "Transforming eateries with data-driven insights to optimize operations and enhance customer experiences. Developed using Astro, Typescript, and Tailwindcss.",
    website_link: "https://www.getrds.com/",
    website_label: "Website",
  },
  {
    id: "yeschef",
    title: "YesChef Productions",
    technology: [
      { name: "Nextjs", icon: <Icons.SiNextdotjs size={16} /> },
      { name: "Typescript", icon: <Icons.SiTypescript size={16} /> },
      { name: "Tailwindcss", icon: <Icons.SiTailwindcss size={16} /> },
    ],
    description:
      "Explore the culinary world with YesChef Productions. Our podcasts seamlessly blend storytelling, industry insights, and inspiring kitchen tales. Immerse yourself in the flavors behind the scenes, crafted using Nextjs, Typescript, and Tailwindcss.",
    website_link: "https://www.yeschef.productions/",
    website_label: "Website",
  },
  {
    id: "cheddrsuite",
    title: "CheddrSuite",
    technology: [
      { name: "Nextjs", icon: <Icons.SiNextdotjs size={16} /> },
      { name: "Typescript", icon: <Icons.SiTypescript size={16} /> },
      { name: "Tailwindcss", icon: <Icons.SiTailwindcss size={16} /> },
    ],
    description:
      "CheddrSuite is a comprehensive software solution for restaurant and food retail management. It simplifies your business operations by eliminating paper clutter, reducing the need for multiple apps, and providing access from anywhere at any time. Developed using Nextjs, Typescript, and Tailwindcss.",
    website_link: "https://cheddrsuite.com",
    website_label: "Website",
  },
  {
    id: "twitter-clone-web",
    title: "Twitter Clone",
    technology: [
      { name: "Reactjs", icon: <Icons.SiReact size={16} /> },
      { name: "Typescript", icon: <Icons.SiTypescript size={16} /> },
      { name: "React Router", icon: <Icons.SiReactrouter size={16} /> },
      { name: "Socket.io", icon: <Icons.SiSocketdotio size={16} /> },
      { name: "Styled Components", icon: <Icons.SiStyledcomponents size={16} /> },
    ],
    description:
      "This Twitter clone is built using the ReactJS framework, Typescript, and various other modern web technologies. It features real-time updates with Socket.io, and utilizes MongoDB for the database and Cloudinary for media storage. Styled Components ensures a polished and responsive design.",
    website_link: "https://twitter.bahbi.net",
    website_label: "Demo",
    code: "https://github.com/superbahbi/twitter-clone-web",
  },
  {
    id: "wordle",
    title: "Wordle",
    technology: [
      { name: "Reactjs", icon: <Icons.SiReact size={16} /> },
      { name: "CSS3", icon: <Icons.SiCss3 size={16} /> },
      { name: "HTML5", icon: <Icons.SiHtml5 size={16} /> },
    ],
    description:
      "A Wordle clone built using the React framework, offering an engaging and interactive word-guessing experience. Designed with modern web technologies for a smooth and responsive gameplay.",
    website_link: "https://wordle.bahbi.net/",
    website_label: "Demo",
    code: "https://github.com/superbahbi/wordle",
  },
  {
    id: "memory-game",
    title: "Memory Game",
    technology: [
      { name: "Reactjs", icon: <Icons.SiReact size={16} /> },
      { name: "CSS3", icon: <Icons.SiCss3 size={16} /> },
      { name: "HTML5", icon: <Icons.SiHtml5 size={16} /> },
    ],
    description:
      "A fun and engaging memory game built with ReactJS. Test your memory by matching pairs to win the game, all designed with modern web technologies for a seamless experience.",
    website_link: "https://memory.bahbi.net/",
    website_label: "Demo",
    code: "https://github.com/superbahbi/barbarian-memory",
  },
  {
    id: "tictactoe-online",
    title: "Tic Tac Toe Online",
    technology: [
      { name: "Reactjs", icon: <Icons.SiReact size={16} /> },
      { name: "CSS3", icon: <Icons.SiCss3 size={16} /> },
      { name: "HTML5", icon: <Icons.SiHtml5 size={16} /> },
      { name: "Socket.io", icon: <Icons.SiSocketdotio size={16} /> },
    ],
    description:
      "An online Tic Tac Toe game built with ReactJS and Socket.io. Challenge your friends and enjoy seamless, real-time gameplay.",
    website_link: "https://ttt-online.bahbi.net/",
    website_label: "Demo",
    code: "https://github.com/superbahbi/tictactoe-online",
  },
  {
    id: "discoverify",
    title: "Discoverify",
    technology: [
      { name: "Reactjs", icon: <Icons.SiReact size={16} /> },
      { name: "CSS3", icon: <Icons.SiCss3 size={16} /> },
      { name: "HTML5", icon: <Icons.SiHtml5 size={16} /> },
      { name: "Spotify API", icon: <Icons.SiSpotify size={16} /> },
    ],
    description:
      "Discoverify is a Spotify app built using the React framework. Explore and enjoy your favorite music with a smooth and intuitive interface powered by the Spotify API.",
    website_link: "https://discoverify.bahbi.net/",
    website_label: "Demo",
    code: "https://github.com/superbahbi/discoverify",
  },
  {
    id: "corkify",
    title: "Corkify",
    technology: [
      { name: "React Native", icon: <Icons.SiReact size={16} /> },
      { name: "Expo", icon: <Icons.SiExpo size={16} /> },
      { name: "Firebase", icon: <Icons.SiFirebase size={16} /> },
      { name: "Stripe", icon: <Icons.SiStripe size={16} /> },
    ],
    description:
      "Corkify is a wine flash store built with the React Native framework. It leverages Firebase for authentication, real-time database, and storage, along with Stripe for secure payment processing.",
    website_link: "https://expo.dev/@superbahbi/Corkify",
    website_label: "Demo",
    code: "https://github.com/superbahbi/corkify",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    technology: [
      { name: "NextJs", icon: <Icons.SiNextdotjs size={16} /> },
      { name: "Typescript", icon: <Icons.SiTypescript size={16} /> },
      { name: "Tailwindcss", icon: <Icons.SiTailwindcss size={16} /> },
    ],
    description:
      "This is my personal portfolio, built using the Next.js framework with TypeScript and styled with Tailwind CSS. Explore my projects, skills, and professional journey.",
    website_link: "https://robertkugler.dev/",
    website_label: "Demo",
    code: "https://github.com/superbahbi/portfolio-2.1",
  },
];

;
const features = [
  {
    Icon: LucideIcons.Terminal,
    name: "Robert Kugler",
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
    className: "col-span-3 md:col-span-2",
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
          I am currently developing Myere, a finance management tool designed to
          simplify budgeting and expense tracking. Myere automates budgeting
          tasks, manages subscriptions, provides automated money-saving
          insights, and features an effortless setup process for streamlined
          savings. With support for over 100 bank integrations for importing
          financial documents and a calendar view for transactions, Myere is
          dedicated to making budgeting easy and stress-free. Learn more and
          join our waitlist on the{" "}
          <a href="https://myeremoney.com" className="underline">
            Myere website
          </a>
          .
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
    className: "col-span-3 lg:col-span-2",
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
    Icon: LucideIcons.BookOpen,
    name: "Currently Reading",
    description: "Books I am currently reading.",
    className: "col-span-3 md:col-span-1",
    background: (
      <div className="px-4 py-4 sm:px-6">
        <h3 className="text-left tracking-tighter">Philanthropic Wanderlust</h3>
        <span className="text-left text-sm tracking-tighter">
          by: Danell Lynn
        </span>
        <div className="relative py-2">
          <div className="absolute bottom-3 right-1 z-10">
            <Suspense
              fallback={
                <Skeleton className="h-8 w-16 flex-col items-center px-6" />
              }
            >
              <Like id="book:philanthropic-wanderlust" />
            </Suspense>
          </div>
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
    Icon: LucideIcons.ProjectorIcon,
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
    Icon: LucideIcons.Menu,
    name: "Tech Stack",
    description: "Current stack I am working with.",
    className: "col-span-3 lg:col-span-2",
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
          <TechStackItem Icon={Icons.SiMysql} name="Mysql" description="Database" />
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
          <TechStackItem Icon={Icons.SiSpotify} name="Spotify" description="Music" />
          <TechStackItem Icon={Icons.SiStripe} name="Stripe" description="Payments" />
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
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="px-4 py-4 sm:px-6">
        <Suspense fallback={<div>Loading...</div>}>
          <NowPlaying />
        </Suspense>
      </div>
    ),
  },
];

const Page: React.FC = () => {
  return (
    <main className="col-span-1 lg:col-span-3">
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </main>
  );
};

export default Page;