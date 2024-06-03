import { TextEncrypted } from "@/components/TextEncrypted";
import { Button } from "@/components/ui/button";
import { AtSign, File, Github, Terminal } from "lucide-react";

const ButtonLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) => (
  <a href={href} target="_blank" className="w-full">
    <Button className="relative flex w-full gap-1 rounded-lg bg-slate-200 text-black hover:bg-white">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Button>
  </a>
);

const buttonData = [
  {
    href: "https://user.fm/files/v2-c7a35c4662d7b1de7c5f6fe844a83772/Robert%20Kugler%20Resume%202024.pdf",
    icon: File,
    label: "Resume",
  },
  {
    href: "mailto:superbahbi@gmail.com",
    icon: AtSign,
    label: "Email",
  },
  {
    href: "https://www.github.com/superbahbi",
    icon: Github,
    label: "Github",
  },
];

export default function Home() {
  return (
    <main className="col-span-1 lg:col-span-4">
      <div className="flex   h-full flex-col space-y-4">
        <h1 className="font-mono text-2xl font-semibold tracking-wider text-slate-100">
          <div className="flex flex-row gap-1">
            <Terminal className="h-8 w-8" />
            <TextEncrypted interval={100} text="Robert Kugler" />
          </div>
        </h1>
        <h2 className="flex gap-2 text-xl font-medium tracking-wide text-slate-200">
          {`<Full Stack Software Engineer />`}
        </h2>
        <div className="flex justify-start gap-2">
          <p className="text-left tracking-tighter text-slate-200">
            Hi, my name is Robert Kugler, and I&apos;m a full-stack software
            engineer based in San Luis Obispo, California. I&apos;m currently
            learning Typescript, React, and React Native, and am actively
            updating my GitHub repositories with the projects I&apos;m
            developing. If you have any questions, feel free to reach out to me
            through the links provided below. I&apos;m passionate about
            continuing to expand my knowledge and abilities in software
            engineering and am looking forward to the opportunities that I can
            provide for others.
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
            {buttonData.map((button) => (
              <ButtonLink key={button.label} {...button} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
