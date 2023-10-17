import logo from "@/assets/rk-logo.png";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <div className="relative h-screen w-screen bg-slate-900">
          <div className="bg-radial-gradient fixed left-0 top-0 h-screen w-screen brightness-50"></div>
          <BackgroundCanvas className="fixed left-0 top-0" />
          <div className="absolute left-0 top-0">
            <div className="relative flex h-screen w-screen items-center justify-center">
              <div className="grid h-96 max-w-4xl grid-cols-12 gap-4 text-white">
                <div className="col-span-3">
                  <Image
                    src={logo}
                    alt="Robert Kugler"
                    height="64"
                    width="64"
                  />
                </div>
                <header className="col-span-3 mt-4">
                  <header>
                    <div className="flex flex-col gap-12">
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
                          <span className="invisible">0.3 #technology</span>
                          <span className="absolute left-0 top-0 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
                            0.3 #technology
                          </span>
                          <span className="absolute left-0 top-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
                            0.3 #technology
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

                      <Link
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
                      </Link>
                    </div>
                  </header>
                </header>
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
