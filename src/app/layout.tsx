import logo from "@/assets/rk-logo.png";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { GeistSans } from "geist/font";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robert Kugler | Portofilio",
  description:
    "Robert Kugler is a software engineer based in San Luis Obispo, CA.",
};

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
          <div className="absolute left-0 top-0">
            <div className="relative flex h-screen w-screen items-center justify-center">
              <div className="flex px-6 lg:mx-auto lg:flex-row lg:px-8">
                <div className="grid h-72 max-w-xl grid-cols-1 gap-4 space-y-8 lg:w-[900px] lg:max-w-none lg:grid-cols-8 lg:space-y-0">
                  <div className="col-span-1 flex max-w-xs flex-col lg:col-span-2">
                    <Image
                      src={logo}
                      alt="Robert Kugler"
                      height="64"
                      width="64"
                    />
                  </div>

                  <header className="col-span-1 flex flex-row gap-2 sm:gap-16 lg:col-span-2 lg:flex-col">
                    <Link
                      href="/"
                      className="gap-2 text-slate-400 hover:text-slate-200"
                    >
                      <div className="group relative overflow-hidden">
                        <span className="invisible">0.1 #intro</span>
                        <span className="absolute left-0 top-0 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
                          0.1 #intro
                        </span>
                        <span className="absolute left-0 top-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
                          0.1 #intro
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/projects"
                      className="text-slate-400 hover:text-slate-200"
                    >
                      <div className="group relative overflow-hidden">
                        <span className="invisible">0.2 #projects</span>
                        <span className="absolute left-0 top-0 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
                          0.2 #projects
                        </span>
                        <span className="absolute left-0 top-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
                          0.2 #projects
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/technology"
                      className="text-slate-400 hover:text-slate-200"
                    >
                      <div className="group relative overflow-hidden">
                        <span className="invisible">0.3 #tech</span>
                        <span className="absolute left-0 top-0 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
                          0.3 #tech
                        </span>
                        <span className="absolute left-0 top-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
                          0.3 #tech
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/contact"
                      className="text-slate-400 hover:text-slate-200"
                    >
                      <div className="group relative overflow-hidden">
                        <span className="invisible">0.4 #contact</span>
                        <span className="absolute left-0 top-0 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
                          0.4 #contact
                        </span>
                        <span className="absolute left-0 top-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
                          0.4 #contact
                        </span>
                      </div>
                    </Link>

                    {/* <Link
                          href="/blog"
                          className="text-slate-400 hover:text-slate-200"
                        >
                          <div className="group relative overflow-hidden">
                            <span className="invisible">0.5 #blog</span>
                            <span className="absolute left-0 top-0 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
                              0.5 #blog
                            </span>
                            <span className="absolute left-0 top-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
                              0.5 #blog
                            </span>
                          </div>
                        </Link> */}
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
