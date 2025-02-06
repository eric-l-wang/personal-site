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
    <nav className="sticky top-0 w-full bg-white lg:backdrop-blur-sm lg:bg-white/80 dark:bg-[#0F1117] lg:dark:bg-[#0F1117]/80 z-50 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 py-4 pt-8">
        <div className="flex justify-between items-center relative z-50">
          <Link
            href="/"
            className={`text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-all cursor-pointer p-2 -ml-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-[110%] ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            <Home className="text-[#0F1117] dark:text-white w-5 h-5 scale-[1.1]" />
            <span className="sr-only">Home</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex gap-4 sm:gap-6 mr-4">
              <Link
                href="https://www.linkedin.com/in/eric-l-wang/"
                className={`text-[110%] ${isActive("/writing")}`}
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleSound}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-colors rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label={isSoundEnabled ? "Mute sound" : "Unmute sound"}
              >
                {isSoundEnabled ? (
                  <Volume2 className="text-[#0F1117] dark:text-white w-5 h-5 scale-[1.1]" />
                ) : (
                  <VolumeX className="text-[#0F1117] dark:text-white w-5 h-5 scale-[1.1]" />
                )}
              </button>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={toggleSound}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-colors rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={isSoundEnabled ? "Mute sound" : "Unmute sound"}
            >
              {isSoundEnabled ? (
                <Volume2 className="text-[#0F1117] dark:text-white w-6 h-6 scale-[1.1]" />
              ) : (
                <VolumeX className="text-[#0F1117] dark:text-white w-6 h-6 scale-[1.1]" />
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
                className="fixed inset-0 bg-black/50 lg:hidden backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
                style={{ zIndex: 40 }}
              />
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 left-0 right-0 bg-white dark:bg-[#0F1117] shadow-xl lg:hidden flex flex-col px-6 pt-24"
                style={{ zIndex: 45 }}
              >
                <div className="flex flex-col space-y-6 pb-8">
                  <Link
                    href="/"
                    className={`${isActive("/")} ml-1`}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/writing"
                    className={`${isActive("/writing")} ml-1`}
                    onClick={() => setIsOpen(false)}
                  >
                    Writing
                  </Link>
                  <Link
                    href="/about"
                    className={`${isActive("/about")} ml-1`}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/eric-l-wang/"
                    className={`${isActive("/")} ml-1`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
