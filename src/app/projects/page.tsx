"use client";
import { TextEncrypted } from "@/components/TextEncrypted";
import { Terminal } from "lucide-react";
import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import CardSpotlight from "@/components/CardSpotlight";
import {
  SiCss3,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPassport,
  SiReact,
  SiReactrouter,
  SiSocketdotio,
  SiSpotify,
  SiStripe,
  SiStyledcomponents,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

export interface IProject {
  id: number;
  title: string;
  description: string;
  technology: {
    name: string;
    icon: React.ReactNode;
  }[];
  code: string;
  demo: string;
}

const projects: IProject[] = [
  {
    id: 0,
    title: "Twitter Clone App",
    technology: [
      { name: "React Native", icon: <SiReact size={16} /> },
      { name: "Expo", icon: <SiExpo size={16} /> },
    ],
    description:
      "A twitter clone built in react native framework using mongodb database and cloudinary storage.",
    demo: "https://twitter.bahbi.net/",
    code: "https://github.com/superbahbi/twitter-clone-app",
  },
  {
    id: 1,
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
    demo: "https://twitter.bahbi.net",
    code: "https://github.com/superbahbi/twitter-clone-web",
  },
  {
    id: 2,
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
    demo: "https://twitter-clone-server2.herokuapp.com/",
    code: "https://github.com/superbahbi/twitter-clone-server",
  },
  {
    id: 3,
    title: "Wordle",
    technology: [
      { name: "Reactjs", icon: <SiReact size={16} /> },
      { name: "CSS3", icon: <SiCss3 size={16} /> },
      { name: "HTML5", icon: <SiHtml5 size={16} /> },
    ],
    description: "A worlde clone built in react framework",
    demo: "https://wordle.bahbi.net/",
    code: "https://github.com/superbahbi/wordle",
  },
  {
    id: 4,
    title: "Memory Game",
    technology: [
      { name: "Reactjs", icon: <SiReact size={16} /> },
      { name: "CSS3", icon: <SiCss3 size={16} /> },
      { name: "HTML5", icon: <SiHtml5 size={16} /> },
    ],
    description: "A game built in reactjs. Match and win the game.",
    demo: "https://memory.bahbi.net/",
    code: "https://github.com/superbahbi/barbarian-memory",
  },
  {
    id: 5,
    title: "Tic Tac Toe Online",
    technology: [
      { name: "Reactjs", icon: <SiReact size={16} /> },
      { name: "CSS3", icon: <SiCss3 size={16} /> },
      { name: "HTML5", icon: <SiHtml5 size={16} /> },
      { name: "Socket.io", icon: <SiSocketdotio size={16} /> },
    ],
    description:
      "A tic tac toe game built in reactjs and socket.io. Play with your friends.",
    demo: "https://ttt-online.bahbi.net/",
    code: "https://github.com/superbahbi/tictactoe-online",
  },
  {
    id: 6,
    title: "Discoverify",
    technology: [
      { name: "Reactjs", icon: <SiReact size={16} /> },
      { name: "CSS3", icon: <SiCss3 size={16} /> },
      { name: "HTML5", icon: <SiHtml5 size={16} /> },
      { name: "Spotify API", icon: <SiSpotify size={16} /> },
    ],
    description: "A spotify app built in react framework.",
    demo: "https://discoverify.bahbi.net/",
    code: "https://github.com/superbahbi/discoverify",
  },
  {
    id: 7,
    title: "Corkify",
    technology: [
      { name: "React Native", icon: <SiReact size={16} /> },
      { name: "Expo", icon: <SiExpo size={16} /> },
      { name: "Firebase", icon: <SiFirebase size={16} /> },
      { name: "Stripe", icon: <SiStripe size={16} /> },
    ],
    description:
      "A wine flash store built in react native framework using firebase auth, real time database, and storage.",
    demo: "https://expo.dev/@superbahbi/Corkify",
    code: "https://github.com/superbahbi/corkify",
  },
  {
    id: 8,
    title: "Portfolio",
    technology: [
      { name: "Reactjs", icon: <SiReact size={16} /> },
      { name: "CSS3", icon: <SiCss3 size={16} /> },
      { name: "HTML5", icon: <SiHtml5 size={16} /> },
      { name: "Animation", icon: <SiCss3 size={16} /> },
    ],
    description: "My personal portfolio built in react framework. ",
    demo: "https://bahbi.net/",
    code: "https://github.com/superbahbi/portfolio",
  },
];
export default function Page() {
  return (
    <main className="col-span-1 h-full lg:col-span-4">
      <h1 className="mb-4 flex flex-row gap-1 font-mono text-2xl font-semibold tracking-wider text-neutral-100">
        <Terminal className="h-8 w-8" />
        <TextEncrypted interval={100} text="Projects" />
      </h1>
      <ScrollArea className="h-full w-full pr-4 sm:h-[250px]">
        <div className="space-y-4">
          {projects.map((project) => {
            return <CardSpotlight key={project.title} project={project} />;
          })}
        </div>
      </ScrollArea>
    </main>
  );
}
