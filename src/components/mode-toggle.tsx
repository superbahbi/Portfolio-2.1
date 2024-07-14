"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center rounded-md border border-border p-2 text-muted-foreground">
      <input
        type="checkbox"
        id="theme-toggle"
        className="hidden"
        onChange={handleChange}
      />
      <label
        htmlFor="theme-toggle"
        className="group flex cursor-pointer items-center"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 group-hover:rotate-[360deg] dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 group-hover:rotate-[360deg] dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </label>
    </div>
  );
}
