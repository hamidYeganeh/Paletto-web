"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const next = theme === "dark" ? "light" : theme === "light" ? "system" : "dark";
  return (
    <button onClick={() => setTheme(next)} aria-label="Toggle theme">
      {theme}
    </button>
  );
}

