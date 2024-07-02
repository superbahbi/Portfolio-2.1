import { BackgroundCanvas } from "@/components/background-canvas";
import Meteors from "@/components/meteors";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { Metadata } from "next/types";
import "./globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Robert Kugler | Portofilio",
  description:
    "Robert Kugler is a software engineer based in San Luis Obispo, CA. He specializes in building web applications with React, TypeScript, and Node.js.",
};

const NavigationLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="text-neutral-400 hover:text-neutral-200">
    <div className="group relative overflow-hidden">
      <span className="invisible">{label}</span>
      <span className="absolute left-0 top-0 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute left-0 top-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
        {label}
      </span>
    </div>
  </Link>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <div className="relative h-screen w-screen overflow-hidden">
          <BackgroundCanvas className="fixed left-0 top-0" />
          <Meteors number={20} />
          <div className="absolute left-0 top-0 flex w-screen flex-col items-center">
            <ScrollArea className="scrollbar-hide mx-auto flex h-screen max-w-4xl overflow-auto lg:flex-row">
              <div className="px-6 py-16 lg:px-8">{children}</div>
            </ScrollArea>
          </div>
        </div>
      </body>
    </html>
  );
}
