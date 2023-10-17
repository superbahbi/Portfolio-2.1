import { TextEncrypted } from "@/components/TextEncrypted";
import { Button } from "@/components/ui/button";
import { AtSign, File, Github, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="col-span-6 flex flex-row w-full flex-wrap">
      <h1 className="text-4xl font-mono font-semibold tracking-wider text-slate-100">
        <div className="flex flex-row gap-2">
          <Terminal className="h-10 w-10" />
          <TextEncrypted interval={100} text="Robert Kugler" />
        </div>
      </h1>
      <h2 className="text-2xl font-medium tracking-wide gap-2 text-slate-200">
        {`<Full Stack Software Engineer />`}
      </h2>
      <div className="flex flex-col gap-2">
        <p className="text-slate-200 [text-wrap:balance] tracking-tighter">
          Hi, my name is Robert Kugler, and I&apos;m a full-stack software
          engineer based in San Luis Obispo, California. I&apos;m currently
          learning Typescript, React, and React Native, and am actively updating
          my GitHub repositories with the projects I&apos;m developing. If you
          have any questions, feel free to reach out to me through the links
          provided below. I&apos;m passionate about continuing to expand my
          knowledge and abilities in software engineering and am looking forward
          to the opportunities that I can provide for others.
        </p>
      </div>
      <div>
        <div className="flex flex-row gap-4">
          <a
            href="https://user.fm/files/v2-22603ccf3ccacce1889f78df895d2b84/Robert_Kugler_Resume.pdf"
            target="_blank"
            className="relative group hover:scale-110 transition-transform ease-in-out duration-200"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 brightness-50 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Button className="relative bg-slate-200 text-black rounded-lg flex gap-1 hover:bg-white">
              <File className="h-4 w-4" />
              <span>Resume</span>
            </Button>
          </a>
          <a
            href="mailto:superbahbi@gmail.com"
            className="relative group hover:scale-110 transition-transform ease-in-out duration-200"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 brightness-50 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Button className="relative bg-slate-200 text-black rounded-lg flex gap-1 hover:bg-white">
              <AtSign className="h-4 w-4" />
              <span>Email</span>
            </Button>
          </a>
          <a
            href="https://www.github.com/superbahbi"
            target="_blank"
            className="relative hover:scale-110 transition-transform ease-in-out duration-200"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 brightness-50 rounded-lg blur opacity50 group-hover:opacity-0 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Button className="relative bg-slate-200 text-black rounded-lg flex gap-1 hover:bg-white">
              <Github className="h-4 w-4" />
              <span>Github</span>
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
}
