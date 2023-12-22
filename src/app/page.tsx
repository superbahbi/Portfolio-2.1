import { TextEncrypted } from "@/components/TextEncrypted";
import { Button } from "@/components/ui/button";
import { AtSign, File, Github, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="col-span-1 lg:col-span-4">
      <div className="flex h-full flex-col space-y-4">
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
          <div className="flex flex-row gap-4">
            <a
              href="https://user.fm/files/v2-22603ccf3ccacce1889f78df895d2b84/Robert_Kugler_Resume.pdf"
              target="_blank"
              className="group relative transition-transform duration-200 ease-in-out hover:scale-110"
            >
              <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur brightness-50 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <Button className="relative flex gap-1 rounded-lg bg-slate-200 text-black hover:bg-white">
                <File className="h-4 w-4" />
                <span>Resume</span>
              </Button>
            </a>
            <a
              href="mailto:superbahbi@gmail.com"
              className="group relative transition-transform duration-200 ease-in-out hover:scale-110"
            >
              <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur brightness-50 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <Button className="relative flex gap-1 rounded-lg bg-slate-200 text-black hover:bg-white">
                <AtSign className="h-4 w-4" />
                <span>Email</span>
              </Button>
            </a>
            <a
              href="https://www.github.com/superbahbi"
              target="_blank"
              className="relative transition-transform duration-200 ease-in-out hover:scale-110"
            >
              <div className="opacity50 animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 blur brightness-50 transition duration-1000 group-hover:opacity-0 group-hover:duration-200"></div>
              <Button className="relative flex gap-1 rounded-lg bg-slate-200 text-black hover:bg-white">
                <Github className="h-4 w-4" />
                <span>Github</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
