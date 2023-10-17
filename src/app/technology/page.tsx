import technology from "@/assets/technology";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="col-span-6 flex flex-row w-full flex-wrap">
      <div className="flex flex-row gap-2 flex-wrap">
        {technology.map((tech) => (
          <Button
            key={tech.name}
            variant="outline"
            className="flex gap-2 hover:scale-110 transition-transform ease-in-out duration-200"
          >
            <span className="hover:text-black">{tech.icon}</span>
            <span className="font-light">{tech.name}</span>
          </Button>
        ))}
      </div>
    </main>
  );
}
