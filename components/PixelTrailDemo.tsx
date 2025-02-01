"use client";

import Link from "next/link";
import Float from "@/components/Float";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import confetti from "canvas-confetti";
import useSound from "use-sound";
import { useSound as useSoundContext } from "@/contexts/SoundContext";
import DiscoBall from "@/components/DiscoBall";

const RainDrop = ({ startX, startY }: { startX: number; startY: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: startY, x: startX }}
      animate={{ opacity: [0, 1, 0], y: startY + 100 }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
      className="absolute w-0.5 h-2 bg-blue-300 dark:bg-blue-400 rounded-full"
    />
  );
};

const CloudRain = ({ cloudX, cloudY }: { cloudX: number; cloudY: number }) => {
  const [raindrops, setRaindrops] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        setRaindrops((prev) => [...prev, Date.now()]);
        setTimeout(() => {
          setRaindrops((prev) => prev.slice(1));
        }, 1000);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {raindrops.map((id) => (
        <RainDrop
          key={id}
          startX={cloudX + Math.random() * 40 - 20}
          startY={cloudY + 20}
        />
      ))}
    </>
  );
};

const SkyVisuals = ({ isPartyPlaying }: { isPartyPlaying: boolean }) => {
  return (
    <div className="fixed w-full h-32 -z-6 top-40 sm:top-48">
      <div className="relative max-w-[500px] mx-auto">
        {/* Sun/Moon */}
        <div className="absolute left-[50%] -translate-x-1/2">
          {isPartyPlaying ? (
            <DiscoBall />
          ) : (
            <motion.div
              className="w-16 h-16 rounded-full bg-[#FFD700] dark:bg-[#FFF4BD]"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </div>

        {/* Clouds */}
        <div className="relative">
          <motion.div
            className="absolute top-10 left-[30%] -translate-x-1/2 opacity-70"
            animate={{
              x: [-5, 5, -5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-16 h-8 bg-gray-200 dark:bg-gray-600 rounded-full ml-4" />
            <div className="w-24 h-8 bg-gray-200 dark:bg-gray-600 rounded-full -mt-4" />
            <CloudRain cloudX={55} cloudY={8} />
          </motion.div>

          <motion.div
            className="absolute top-6 left-[53%] -translate-x-1/2 opacity-70"
            animate={{
              x: [10, -10, 10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-12 h-6 bg-gray-200 dark:bg-gray-600 rounded-full ml-3" />
            <div className="w-20 h-6 bg-gray-200 dark:bg-gray-600 rounded-full -mt-3" />
            <CloudRain cloudX={45} cloudY={6} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const MusicNote = ({ startX, startY }: { startX: number; startY: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: startY, x: startX }}
      animate={{
        opacity: [0, 1, 0],
        y: startY - 40,
        rotate: [0, 15, -15],
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
      className="absolute text-gray-900 dark:text-pink-300 text-lg"
    >
      ♪
    </motion.div>
  );
};

const NoteBurst = ({ isActive }: { isActive: boolean }) => {
  const [notes, setNotes] = useState<number[]>([]);

  useEffect(() => {
    if (!isActive) {
      setNotes([]);
      return;
    }

    const interval = setInterval(() => {
      setNotes((prev) => [...prev, Date.now()]);
      setTimeout(() => {
        setNotes((prev) => prev.slice(1));
      }, 2000);
    }, 500);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="absolute -top-8 left-[60%] w-48 h-32 pointer-events-none">
      {notes.map((id) => (
        <MusicNote key={id} startX={Math.random() * 60 - 30} startY={0} />
      ))}
    </div>
  );
};

const PixelTrailDemo: React.FC = () => {
  const [playClick] = useSound("/Creamy Keyboard Press.mp3", {volume: 3});
  const { isSoundEnabled, isPartyPlaying, toggleParty } = useSoundContext();

  const handlePartyClick = () => {
    if (isSoundEnabled) {
      playClick();
    }
    toggleParty();
    if (!isPartyPlaying) {
      triggerConfetti();
    }
  };

  const triggerConfetti = () => {
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };

  const handleResumeClick = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-[800px] max-h-screen bg-white dark:bg-[#0F1117] text-gray-900 dark:text-white flex flex-col items-center font-azeretMono">
      <SkyVisuals isPartyPlaying={isPartyPlaying} />
      <div className="flex-grow flex flex-col justify-center -translate-y-20 items-center p-4 relative">
        <h2 className="font-VT323 text-4xl sm:text-5xl md:text-5xl uppercase text-center cursor-default z-20">
          Eric Wang
        </h2>
        <h3 className="pt-0.5 sm:pt-2 text-sm sm:text-base text-center font-bold font-mono cursor-default z-20 pb-12">
          Founder, Engineer, Designer.
        </h3>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 relative">
          <Float
            speed={0.7}
            amplitude={[8, 12, 15]}  // Reduced from [15, 25, 35]
            rotationRange={[5, 6, 3]}  // Reduced from [10, 12, 5]
            timeOffset={0}
          >
            <div className="relative hover:scale-105 transition-transform">
              <motion.button
                onClick={handleResumeClick}
                className="bg-[#ff8a8a] text-gray-900 px-6 py-3 rounded-full font-mono text-lg sm:text-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.21, 1.02, 0.73, 0.97],
                  opacity: { duration: 0.4 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Work
              </motion.button>
            </div>
          </Float>
          <Float
            speed={0.6}
            amplitude={[10, 15, 12]}  // Reduced from [20, 30, 25]
            rotationRange={[4, 7, 3]}  // Reduced from [8, 15, 7]
            timeOffset={2.1}
          >
            <div className="relative hover:scale-105 transition-transform">
              <Link href="/writing" passHref legacyBehavior>
                <motion.button
                  className="bg-[#7fe7d1] text-gray-900 px-6 py-3 rounded-full font-mono text-lg sm:text-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.21, 1.02, 0.73, 0.97],
                    opacity: { duration: 0.4 },
                    delay: 0.1,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Writing
                </motion.button>
              </Link>
            </div>
          </Float>
          <Float
            speed={1}
            amplitude={[10, 15, 12]}  // Reduced from [20, 30, 25]
            rotationRange={[5, 7, 3]}  // Reduced from [10, 15, 7]
            timeOffset={0}
          >
            <div className="relative hover:scale-105 transition-transform">
              <NoteBurst isActive={isPartyPlaying} />
              <motion.button
                className="bg-[#0F1117] dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full font-mono text-lg sm:text-xl font-bold relative overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.21, 1.02, 0.73, 0.97],
                  opacity: { duration: 0.4 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePartyClick}
              >
                <span className="relative z-10">
                  {isPartyPlaying ? "Chill" : "Party"}
                </span>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #ff8a8a, #7fe7d1, #ffb59c, #ff8a8a)",
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="absolute inset-[3px] bg-[#0F1117] dark:bg-white rounded-full" />
              </motion.button>
            </div>
          </Float>
          <Float
            speed={0.8}
            amplitude={[12, 10, 15]}  // Reduced from [25, 20, 30]
            rotationRange={[6, 5, 4]}  // Reduced from [12, 10, 8]
            timeOffset={4.2}
          >
            <div className="relative hover:scale-105 transition-transform">
            <Link href="/about" passHref legacyBehavior>
                <motion.button
                  className="bg-[#ffb59c] text-gray-900 px-6 py-3 rounded-full font-mono text-lg sm:text-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.21, 1.02, 0.73, 0.97],
                    opacity: { duration: 0.4 },
                    delay: 0.2,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.button>
</Link      >
            </div>
          </Float>
        </div>
      </div>
    </div>
  );
};

export { PixelTrailDemo as default };
