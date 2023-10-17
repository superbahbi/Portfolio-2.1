import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import technology from "@/assets/technology";
// const technology = [
//   {
//     name: "Html5",
//   },
//   {
//     name: "Css3",
//   },
//   {
//     name: "JavaScript",
//   },
//   {
//     name: "TypeScript",
//   },
//   {
//     name: "Git",
//   },
//   {
//     name: "React",
//   },
//   {
//     name: "Nextdotjs",
//     actual: "Next.js",
//   },
//   {
//     name: "ReactRouter",
//   },
//   {
//     name: "React",
//     actual: "React Native",
//   },
//   {
//     name: "Expo",
//   },
//   { name: "Angular" },
//   {
//     name: "Express",
//   },
//   {
//     name: "Nodejs",
//   },
//   { name: "MySQL" },
//   {
//     name: "PostgreSQL",
//   },
//   {
//     name: "MongoDB",
//   },
//   {
//     name: "SocketdotIO",
//     actual: "Socket.io",
//   },
//   {
//     name: "Passport",
//   },
//   {
//     name: "Firebase",
//   },
//   {
//     name: "Stripe",
//   },
//   {
//     name: "Spotify",
//   },
//   {
//     name: "Bootstrap",
//   },
//   {
//     name: "ChakraUI",
//   },
//   {
//     name: "StyledComponents",
//   },
//   {
//     name: "TailwindCSS",
//   },
//   {
//     name: "EsLint",
//   },
//   {
//     name: "Webpack",
//   },
// ];

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
