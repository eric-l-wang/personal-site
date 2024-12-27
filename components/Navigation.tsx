"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Volume2, VolumeX } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useSound } from "@/contexts/SoundContext";
import Hamburger from "./Hamburger";
import { AnimatePresence, motion } from "framer-motion";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isSoundEnabled, toggleSound } = useSound();

  const isActive = (path: string) => {
    return pathname === path
      ? "text-gray-900 dark:text-white rounded-md p-2 font-mono"
      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-mono";
  };

  return (
    <nav className="w-full max-w-3xl mx-auto px-4 py-4 pt-8 bg-white dark:bg-[#0F1117] relative z-50">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-colors cursor-pointer p-2 -ml-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Home className="w-5 h-5" />
          <span className="sr-only">Home</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex gap-4 sm:gap-6 mr-4">
            <Link href="/writing" className={isActive("/writing")}>
              Writing
            </Link>
            {/* <Link href="/work" className={isActive("/work")}>
              Work
            </Link> */}
            <Link href="/about" className={isActive("/about")}>
              About
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSound}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-colors rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={isSoundEnabled ? "Mute sound" : "Unmute sound"}
            >
              {isSoundEnabled ? (
                <Volume2 className="w-5 h-5" />
              ) : (
                <VolumeX className="w-5 h-5" />
              )}
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={toggleSound}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-colors rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={isSoundEnabled ? "Mute sound" : "Unmute sound"}
          >
            {isSoundEnabled ? (
              <Volume2 className="w-6 h-6" />
            ) : (
              <VolumeX className="w-6 h-6" />
            )}
          </button>
          <ThemeToggle />
          <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black lg:hidden"
              onClick={() => setIsOpen(false)}
              style={{ zIndex: 40 }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 bottom-0 w-[75%] max-w-[300px] bg-white dark:bg-[#0F1117] shadow-xl lg:hidden flex flex-col px-6"
              style={{ zIndex: 50 }}
            >
              <div className="flex justify-end pt-8">
                <Hamburger isOpen={isOpen} toggle={() => setIsOpen(false)} />
              </div>
              <div className="flex flex-col space-y-6 pt-16">
                <Link
                  href="/writing"
                  className={isActive("/writing")}
                  onClick={() => setIsOpen(false)}
                >
                  Writing
                </Link>
                {/* <Link
                  href="/work"
                  className={isActive("/work")}
                  onClick={() => setIsOpen(false)}
                >
                  Work
                </Link> */}
                <Link
                  href="/about"
                  className={isActive("/about")}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
