import technology from "@/assets/technology";
import { TextEncrypted } from "@/components/TextEncrypted";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export default function Page() {
  return (
    <main className="col-span-1 lg:col-span-4">
      <h1 className="mb-4 font-mono text-2xl font-semibold tracking-wider text-slate-100">
        <div className="flex flex-row gap-1">
          <Terminal className="h-8 w-8" />
          <TextEncrypted interval={100} text="Technology" />
        </div>
      </h1>
      <div className="flex flex-row flex-wrap gap-2">
        {technology.map((tech) => (
          <Button
            key={tech.name}
            variant="outline"
            className="flex gap-2 text-white transition-transform duration-200 ease-in-out hover:scale-110 hover:text-black"
          >
            <span>{tech.icon}</span>
            <span className="font-light">{tech.name}</span>
          </Button>
        ))}
      </div>
    </main>
  );
}
