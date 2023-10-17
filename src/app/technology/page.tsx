import technology from "@/assets/technology";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="col-span-6 flex w-full flex-row flex-wrap">
      <div className="flex flex-row flex-wrap gap-2">
        {technology.map((tech) => (
          <Button
            key={tech.name}
            variant="outline"
            className="flex gap-2 transition-transform duration-200 ease-in-out hover:scale-110"
          >
            <span className="hover:text-black">{tech.icon}</span>
            <span className="font-light">{tech.name}</span>
          </Button>
        ))}
      </div>
    </main>
  );
}
