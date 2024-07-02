import { BackgroundCanvas } from "@/components/background-canvas";
import { Meteors } from "@/components/meteor";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robert Kugler | Portofilio",
  description:
    "Robert Kugler is a software engineer based in San Luis Obispo, CA. He specializes in building web applications with React, TypeScript, and Node.js.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("antialiased", GeistSans.className)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative h-screen w-screen overflow-hidden">
            <BackgroundCanvas className="fixed left-0 top-0" />
            <Meteors number={20} />
            <div className="absolute left-0 top-0 flex w-screen flex-col items-center">
              <ScrollArea className="mx-auto flex h-screen max-w-4xl lg:flex-row">
                <div className="px-6 py-16 lg:px-8">{children}</div>
              </ScrollArea>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
