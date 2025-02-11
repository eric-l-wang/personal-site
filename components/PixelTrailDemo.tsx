"use client";

import Link from "next/link";
import Float from "@/components/Float";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import confetti from "canvas-confetti";
import useSound from "use-sound";
import { useSound as useSoundContext } from "@/contexts/SoundContext";
import DiscoBall from "@/components/DiscoBall";
import HotAirBalloon from "./HotAirBalloon";
import SimpleBirds from "./SimpleBirds";

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
  const springTransition = {
    type: "spring",
    stiffness: 150,
    damping: 12,
    mass: 0.5,
  };

  return (
    <div className="fixed w-full h-40 -z-6 top-44 sm:top-52">
      <div className="relative max-w-[550px] mx-auto pb-24">
        {/* Sun/Moon */}
        <div className="absolute left-[50%] -translate-x-1/2">
          <AnimatePresence mode="wait">
            {isPartyPlaying ? (
              <DiscoBall key="disco" />
            ) : (
              <motion.div
                key="sun"
                className="w-16 h-16 rounded-full bg-[#FFD700] dark:bg-[#FFF4BD] shadow-[0_0_35px_rgba(255,215,0,0.3)] dark:shadow-[0_0_35px_rgba(255,244,189,0.2)]"
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  scale: { ...springTransition, delay: 0.2 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Hot Air Balloon */}
        <HotAirBalloon />

        {/* Airplane */}
        <SimpleBirds />

        {/* Clouds */}
        <div className="relative">
          <motion.div
            className="absolute top-10 left-[30%] -translate-x-1/2 opacity-70"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ...springTransition,
              delay: 0.4,
            }}
          >
            <div className="w-16 h-8 bg-gray-200 dark:bg-gray-600 rounded-full ml-4" />
            <div className="w-24 h-8 bg-gray-200 dark:bg-gray-600 rounded-full -mt-4" />
            <CloudRain cloudX={55} cloudY={8} />
          </motion.div>

          <motion.div
            className="absolute top-6 left-[53%] -translate-x-1/2 opacity-70"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ...springTransition,
              delay: 0.6,
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
  const [playClick] = useSound("/Creamy Keyboard Press.mp3", { volume: 3 });
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

  const buttonVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };

  const springTransition = {
    type: "spring",
    stiffness: 150,
    damping: 12,
    mass: 0.5,
  };

  return (
    <div className="min-h-[660px] pt-56 max-h-screen bg-white dark:bg-[#0F1117] text-gray-900 dark:text-white flex flex-col items-center font-azeretMono">
      <SkyVisuals isPartyPlaying={isPartyPlaying} />
      <div className="flex-grow flex flex-col justify-center -translate-y-24 items-center p-4 relative">
        <h2 className="font-VT323 text-5xl sm:text-6xl md:text-6xl uppercase text-center cursor-default z-20">
          Eric Wang
        </h2>
        <h3 className="pt-1 sm:pt-3 text-base sm:text-lg text-center font-bold font-mono cursor-default z-20 pb-14">
          Founder, Engineer, Designer.
        </h3>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-8 relative">
          <Float
            speed={0.7}
            amplitude={[8, 12, 15]} // Reduced from [15, 25, 35]
            rotationRange={[5, 6, 3]} // Reduced from [10, 12, 5]
            timeOffset={0}
          >
            <div className="relative hover:scale-105 transition-transform">
              <motion.a
                href="https://cv.ericwang.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#ff8a8a] text-gray-900 px-6 py-3 rounded-full font-mono text-lg sm:text-xl"
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                transition={{
                  ...springTransition,
                  delay: 0.2, // First button
                }}
                whileTap={{ scale: 0.95 }}
              >
                Work
              </motion.a>
            </div>
          </Float>
          <Float
            speed={0.6}
            amplitude={[10, 15, 12]} // Reduced from [20, 30, 25]
            rotationRange={[4, 7, 3]} // Reduced from [8, 15, 7]
            timeOffset={2.1}
          >
            <div className="relative hover:scale-105 transition-transform">
              <Link href="/writing" passHref legacyBehavior>
                <motion.button
                  className="bg-[#7fe7d1] text-gray-900 px-6 py-3 rounded-full font-mono text-lg sm:text-xl"
                  variants={buttonVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    ...springTransition,
                    delay: 0.4, // Second button
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Writing
                </motion.button>
              </Link>
            </div>
          </Float>
          <Float
            speed={1}
            amplitude={[10, 15, 12]} // Reduced from [20, 30, 25]
            rotationRange={[5, 7, 3]} // Reduced from [10, 15, 7]
            timeOffset={0}
          >
            <div className="relative hover:scale-105 transition-transform">
              <NoteBurst isActive={isPartyPlaying} />
              <motion.button
                className="bg-[#0F1117] dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full font-mono text-lg sm:text-xl font-bold relative overflow-hidden"
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                transition={{
                  ...springTransition,
                  delay: 0.6, // Third button
                }}
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
            amplitude={[12, 10, 15]} // Reduced from [25, 20, 30]
            rotationRange={[6, 5, 4]} // Reduced from [12, 10, 8]
            timeOffset={4.2}
          >
            <div className="relative hover:scale-105 transition-transform">
              <Link href="/about" passHref legacyBehavior>
                <motion.button
                  className="bg-[#ffb59c] text-gray-900 px-6 py-3 rounded-full font-mono text-lg sm:text-xl"
                  variants={buttonVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    ...springTransition,
                    delay: 0.8, // Fourth button
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.button>
              </Link>
            </div>
          </Float>
        </div>
      </div>
    </div>
  );
};

export { PixelTrailDemo as default };
