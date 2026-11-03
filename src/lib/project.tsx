import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "mugai",
    title: "Mugai",
    kind: "App",
    description:
      "A meditation app that blends AI with mindfulness to make personalized practices for stress, focus, and sleep.",
    technology: [
      "Expo",
      "TypeScript",
      "Supabase",
      "OpenAI",
      "Socket.io",
      "PostHog",
      "Sentry",
    ],
    links: [{ label: "Website", href: "https://www.mindfulwithmugai.com/" }],
  },
  {
    id: "chatstars",
    title: "ChatStars AI",
    kind: "App",
    description:
      "A mobile app for chatting with AI, powered by Gemini.",
    technology: [
      "Expo",
      "TypeScript",
      "Supabase",
      "Gemini",
      "PostHog",
      "Sentry",
    ],
    links: [{ label: "Website", href: "https://www.chatstars.ai/" }],
  },
  {
    id: "juke-app",
    title: "Juke",
    kind: "App",
    description:
      "A social music discovery app connecting venues, artists, and fans with real-time song requests and live venue feeds.",
    technology: [
      "Expo",
      "React Native",
      "TypeScript",
      "NativeWind",
      "Supabase",
      "Socket.io",
      "PostHog",
      "Sentry",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/juke-discover-enjoy-connect/id6670796137",
      },
    ],
  },
  {
    id: "juke-web",
    title: "Juke — website",
    kind: "Website",
    description:
      "The marketing site for Juke: features, download links, and resources for venues, artists, and fans.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    links: [{ label: "Website", href: "https://www.joinjuke.app" }],
  },
  {
    id: "myere",
    title: "Myere",
    kind: "Website",
    description:
      "An AI tool that reviews subscriptions and recurring bills to find savings and negotiate better rates.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    links: [{ label: "Website", href: "https://myeremoney.com" }],
  },
  {
    id: "cadena",
    title: "Cadena Restaurant Group",
    kind: "Website",
    description:
      "A site that gives restaurant operators insight into their business and automates routine tasks.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [{ label: "Website", href: "https://www.cadenarg.com/" }],
  },
  {
    id: "yeschef-marketplace",
    title: "YesChef Marketplace",
    kind: "Website",
    description:
      "A curated collection of restaurant software for restaurants, cafes, and bars.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    links: [
      {
        label: "Website",
        href: "https://yeschefmarketplace-website.vercel.app/",
      },
    ],
  },
  {
    id: "rds",
    title: "RD Solutions, Inc.",
    kind: "Website",
    description:
      "Data-driven insights for restaurants, built to improve operations and the customer experience.",
    technology: ["Astro", "TypeScript", "Tailwind CSS"],
    links: [{ label: "Website", href: "https://www.getrds.com/" }],
  },
  {
    id: "yeschef",
    title: "YesChef Productions",
    kind: "Website",
    description:
      "A home for culinary podcasts that blend storytelling, industry insight, and kitchen tales.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [{ label: "Website", href: "https://www.yeschef.productions/" }],
  },
  {
    id: "cheddrsuite",
    title: "CheddrSuite",
    kind: "Website",
    description:
      "Restaurant and food retail management software that replaces paper and disconnected apps.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [{ label: "Website", href: "https://cheddrsuite.com" }],
  },
  {
    id: "twitter-clone",
    title: "Twitter Clone",
    kind: "Experiment",
    description:
      "A real-time Twitter clone with Socket.io, MongoDB, and Cloudinary media storage.",
    technology: [
      "React",
      "TypeScript",
      "React Router",
      "Socket.io",
      "Styled Components",
    ],
    links: [
      { label: "Demo", href: "https://twitter.bahbi.net" },
      { label: "Code", href: "https://github.com/superbahbi/twitter-clone-web" },
    ],
  },
  {
    id: "wordle",
    title: "Wordle",
    kind: "Experiment",
    description:
      "An interactive word-guessing game built with React.",
    technology: ["React", "CSS", "HTML"],
    links: [
      { label: "Demo", href: "https://wordle.bahbi.net/" },
      { label: "Code", href: "https://github.com/superbahbi/wordle" },
    ],
  },
  {
    id: "memory-game",
    title: "Memory Game",
    kind: "Experiment",
    description:
      "A small matching-pairs game built with React.",
    technology: ["React", "CSS", "HTML"],
    links: [
      { label: "Demo", href: "https://memory.bahbi.net/" },
      { label: "Code", href: "https://github.com/superbahbi/barbarian-memory" },
    ],
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe Online",
    kind: "Experiment",
    description:
      "An online Tic Tac Toe game with real-time play over Socket.io.",
    technology: ["React", "CSS", "HTML", "Socket.io"],
    links: [
      { label: "Demo", href: "https://ttt-online.bahbi.net/" },
      {
        label: "Code",
        href: "https://github.com/superbahbi/tictactoe-online",
      },
    ],
  },
  {
    id: "discoverify",
    title: "Discoverify",
    kind: "Experiment",
    description:
      "A small Spotify app for exploring music through a simple, focused interface.",
    technology: ["React", "CSS", "HTML", "Spotify API"],
    links: [
      { label: "Demo", href: "https://discoverify.bahbi.net/" },
      {
        label: "Code",
        href: "https://github.com/superbahbi/discoverify",
      },
    ],
  },
  {
    id: "corkify",
    title: "Corkify",
    kind: "Experiment",
    description:
      "A wine flash store built with React Native, Firebase, and Stripe.",
    technology: ["React Native", "Expo", "Firebase", "Stripe"],
    links: [
      { label: "Demo", href: "https://expo.dev/@superbahbi/Corkify" },
      { label: "Code", href: "https://github.com/superbahbi/corkify" },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    kind: "Website",
    description:
      "This site. Built with Next.js, TypeScript, and Tailwind CSS.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      {
        label: "Code",
        href: "https://github.com/superbahbi/portfolio-2.1",
      },
    ],
  },
];
