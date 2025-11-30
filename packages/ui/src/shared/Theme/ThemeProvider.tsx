"use client";
import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark" | "system";

export const ThemeContext = createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({ theme: "system", setTheme: () => {} });

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");

  const applyTheme = useCallback((value: Theme) => {
    const root = document.documentElement;
    const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const effective = value === "system" ? (systemDark ? "dark" : "light") : value;
    root.setAttribute("data-theme", effective);
  }, []);

  useEffect(() => {
    const saved = (typeof localStorage !== "undefined" && (localStorage.getItem("paletto_theme") as Theme)) || "system";
    setTheme(saved);
  }, []);

  useEffect(() => {
    applyTheme(theme);
    if (typeof localStorage !== "undefined") localStorage.setItem("paletto_theme", theme);
  }, [theme, applyTheme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

