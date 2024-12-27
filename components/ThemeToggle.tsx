"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import { useSound as useSoundContext } from "@/contexts/SoundContext";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [playClick] = useSound("/Creamy Keyboard Press.mp3");
  const { isSoundEnabled } = useSoundContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        if (isSoundEnabled) {
          playClick();
        }
      }}
      className={`rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-blue-500" />
      )}
    </button>
  );
}
