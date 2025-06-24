import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full transition-colors duration-300",
        "focus:outline-none hover:scale-110 active:scale-95",
        "bg-background/80 dark:bg-background/70 shadow-md"
      )}
      aria-label="Toggle Theme"
      title="Toggle Light / Dark Mode"
    >
      {isDarkMode ? (
        <Sun className="h-8 w-8 text-yellow-400" />
      ) : (
        <Moon className="h-8 w-8 text-blue-900" />
      )}
    </button>
  );
};
