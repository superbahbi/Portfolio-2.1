import logo from "@/assets/rk-logo.png";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import Meteors from "@/components/Meteors";
import { GeistSans } from 'geist/font/sans';
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Robert Kugler | Portofilio",
  description:
    "Robert Kugler is a software engineer based in San Luis Obispo, CA.",
};

const NavigationLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="text-slate-400 hover:text-slate-200">
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
        <div className="relative h-screen w-screen ">
          <div className="bg-radial-gradient fixed left-0 top-0 h-screen w-screen brightness-50"></div>
          <BackgroundCanvas className="fixed left-0 top-0" />
          <Meteors number={20} />
          <div className="absolute left-0 top-0">
            <div className="relative flex  sm:h-screen w-screen items-center justify-center">
              <div className="flex px-6 py-4 mx-auto lg:flex-row lg:px-8">
                <div className="grid sm:h-72 max-w-xl grid-cols-1 gap-4 space-y-8 lg:w-[900px] lg:max-w-none lg:grid-cols-8 lg:space-y-0">
                  <div className="col-span-1 flex max-w-xs flex-col lg:col-span-2">
                    <Image
                      src={logo}
                      alt="Robert Kugler"
                      height="64"
                      width="64"
                    />
                  </div>

                  <header className="col-span-1 flex flex-row gap-2 sm:gap-16 lg:col-span-2 lg:flex-col">
                    <NavigationLink href="/" label="0.1 #intro" />
                    <NavigationLink href="/projects" label="0.2 #projects" />
                    <NavigationLink href="/technology" label="0.3 #tech" />
                    <NavigationLink href="/contact" label="0.4 #contact" />
                  </header>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}