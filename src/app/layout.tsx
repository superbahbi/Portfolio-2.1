import { AnimatedBackground } from "@/components/background";
import { ProfileViews } from "@/components/profile-views";
import { ReactQueryProvider } from "@/components/react-query-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bobby Lee",
  description:
    "Bobby Lee is a full-time wanderer and AI-native developer. He builds small useful things with TypeScript, React, and Expo.",
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
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative h-screen w-screen overflow-hidden">
              <AnimatedBackground />
              <div>
                <div className="absolute right-4 top-4">
                  <ProfileViews />
                </div>
              </div>
              <div className="absolute left-0 top-0 flex w-screen flex-col items-center">
                <ScrollArea className="mx-auto flex h-screen max-w-4xl lg:flex-row">
                  <div className="px-6 py-16 lg:px-8">{children}</div>
                </ScrollArea>
              </div>
            </div>
          </ThemeProvider>
        </ReactQueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
