"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // layout.tsx resolves the saved theme onto <html data-theme> before
  // first paint; start React state from it to avoid a hydration flash.
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";
    return document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";
  });


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("dq-theme", theme);
  }, [theme]);

  const toggle = () => setTheme(t => t === "light" ? "dark" : "light");
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
