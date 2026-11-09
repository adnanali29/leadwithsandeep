"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { playSoftTone } from "./sound";

export type ThemeName = "navy-cognac" | "charcoal-terracotta" | "royal-bronze";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "navy-cognac",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>("navy-cognac");

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("leadwithsandeep_theme") as ThemeName) ||
      "navy-cognac";
    if (
      ["navy-cognac", "charcoal-terracotta", "royal-bronze"].includes(
        savedTheme
      )
    ) {
      setThemeState(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
    try {
      localStorage.setItem("leadwithsandeep_theme", newTheme);
    } catch {
      // ignore
    }
    playSoftTone();
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
