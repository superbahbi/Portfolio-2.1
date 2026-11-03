"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";

interface BackgroundTheme {
  color: string;
  opacity: number;
}

/**
 * Resolves the current theme color for a background layer.
 *
 * The initial value is read from the document class next-themes sets before
 * hydration, so the first WebGL frame matches the page instead of flashing.
 */
const readInitialDark = () =>
  typeof document === "undefined"
    ? true
    : document.documentElement.classList.contains("dark");

const useBackgroundTheme = (dark: BackgroundTheme, light: BackgroundTheme) => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(readInitialDark);

  useEffect(() => {
    if (resolvedTheme === "dark" || resolvedTheme === "light") {
      setIsDark(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  const theme = isDark ? dark : light;
  const color = useMemo(() => new THREE.Color(theme.color), [theme.color]);

  return { color, opacity: theme.opacity };
};

export { readInitialDark, useBackgroundTheme };
