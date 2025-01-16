import { Project } from "./types";
import * as Icons from "@icons-pack/react-simple-icons";

const projects: Project[] = [
  {
    id: "juke",
    title: "Juke",
    tags: ["mobile app"],
    technology: [
      { name: "Expo", icon: <Icons.SiExpo size={16} /> },
      { name: "Typescript", icon: <Icons.SiTypescript size={16} /> },
      { name: "NativeWind", icon: <Icons.SiTailwindcss size={16} /> },
      { name: "Supabase", icon: <Icons.SiSupabase size={16} /> },
      { name: "Socket.io", icon: <Icons.SiSocketdotio size={16} /> },
      { name: "PostHog", icon: <Icons.SiPosthog size={16} /> },
      { name: "Sentry", icon: <Icons.SiSentry size={16} /> },
    ],
    description:
      "Juke is a social music discovery app that connects venues, artists, and music fans. The mobile app features real-time song requests, live venue music feeds, and artist discovery. Built with Expo and React Native for cross-platform compatibility, it uses Socket.io for real-time features, PostHog for analytics, and Sentry for monitoring.",
    website_link:
      "https://apps.apple.com/us/app/juke-discover-enjoy-connect/id6670796137",
    website_label: "App",
  },
  {
    id: "juke",
    title: "Juke",
    tags: ["website"],
    technology: [
      { name: "NextJs", icon: <Icons.SiNextdotjs size={16} /> },
      { name: "Typescript", icon: <Icons.SiTypescript size={16} /> },
      { name: "Tailwindcss", icon: <Icons.SiTailwindcss size={16} /> },
      { name: "Supabase", icon: <Icons.SiSupabase size={16} /> },
    ],
    description:
      "The marketing website for Juke showcases the app's features and benefits for venues, artists, and music fans. It provides information about the platform, download links, and resources for potential users. The website is optimized for performance and SEO using Next.js and modern web technologies.",
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
    title: "RD Solutions, Inc.",
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
      {
        name: "Styled Components",
        icon: <Icons.SiStyledcomponents size={16} />,
      },
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

export { projects };
