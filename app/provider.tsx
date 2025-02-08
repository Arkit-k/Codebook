"use client"; // Ensure it's a client component

import { useTheme } from "./theme-switcher";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg transition"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
