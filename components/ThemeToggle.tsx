"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import { useSound as useSoundContext } from "@/contexts/SoundContext";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  // resolvedTheme, not theme: theme is the literal "system" until the visitor
  // picks a side, which would otherwise desync the icon and the toggle.
  const { resolvedTheme, setTheme } = useTheme();
  const { isSoundEnabled } = useSoundContext();
  const [playClick] = useSound("/Creamy Keyboard Press.mp3", {
    volume: 3  // Increased from default (usually 0.25 or 0.3)
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const toggleTheme = () => {
    if (isSoundEnabled) {
      playClick();
    }
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-blue-500" />
      )}
    </button>
  );
}
