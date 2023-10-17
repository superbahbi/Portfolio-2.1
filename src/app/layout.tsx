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
          <div className="w-screen h-screen bg-radial-gradient brightness-50 fixed top-0 left-0"></div>
          <BackgroundCanvas className="fixed top-0 left-0" />
          <div className="absolute top-0 left-0">
            <div className="relative w-screen h-screen flex items-center justify-center">
              <div className="grid grid-cols-12 text-white max-w-4xl gap-4 h-96">
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
                        className="text-slate-400 hover:text-slate-200 gap-2"
                      >
                        <div className="relative overflow-hidden group">
                          <span className="invisible">0.1 #intro</span>
                          <span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
                            0.1 #intro
                          </span>
                          <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
                            0.1 #intro
                          </span>
                        </div>
                      </Link>

                      <Link
                        href="/projects"
                        className="text-slate-400 hover:text-slate-200"
                      >
                        <div className="relative overflow-hidden group">
                          <span className="invisible">0.2 #projects</span>
                          <span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
                            0.2 #projects
                          </span>
                          <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
                            0.2 #projects
                          </span>
                        </div>
                      </Link>

                      <Link
                        href="/technology"
                        className="text-slate-400 hover:text-slate-200"
                      >
                        <div className="relative overflow-hidden group">
                          <span className="invisible">0.3 #technology</span>
                          <span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
                            0.3 #technology
                          </span>
                          <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
                            0.3 #technology
                          </span>
                        </div>
                      </Link>
                      <Link
                        href="/contact"
                        className="text-slate-400 hover:text-slate-200"
                      >
                        <div className="relative overflow-hidden group">
                          <span className="invisible">0.4 #contact</span>
                          <span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
                            0.4 #contact
                          </span>
                          <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
                            0.4 #contact
                          </span>
                        </div>
                      </Link>

                      <Link
                        href="/blog"
                        className="text-slate-400 hover:text-slate-200"
                      >
                        <div className="relative overflow-hidden group">
                          <span className="invisible">0.5 #blog</span>
                          <span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
                            0.5 #blog
                          </span>
                          <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
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
