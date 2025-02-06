"use client";

import { motion } from "framer-motion";

const DiscoBall = () => {
  const springTransition = {
    type: "spring",
    stiffness: 150,
    damping: 12,
    mass: 0.5,
  };

  return (
    <motion.div
      className="w-16 h-16"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={springTransition}
    >
      <motion.div
        className="w-16 h-16 rounded-full relative"
        style={{
          background:
            "linear-gradient(-45deg, #60A5FA, #22D3EE, #F472B6, #A78BFA, #E5E7EB)",
          backgroundSize: "200% 200%", // Increased back to make transitions smoother
          animation: "gradientFlow 1.044s ease infinite", // Doubled from 0.522s to 1.044s
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <style jsx global>{`
          @keyframes gradientFlow {
            0% {
              background-position: 0% 0%;
              filter: brightness(0.9) saturate(1);
            }
            50% {
              background-position: 100% 100%;
              filter: brightness(0.92) saturate(1.1);
            }
            100% {
              background-position: 0% 0%;
              filter: brightness(0.9) saturate(1);
            }
          }
        `}</style>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ transformOrigin: "center" }}
        >
          <defs>
            <linearGradient
              id="discoBallGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#3478ff", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#1e54cc", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#3478ff", stopOpacity: 1 }}
              />
            </linearGradient>
            <pattern
              id="gridPattern"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <motion.line
                x1="0"
                y1="0"
                x2="0"
                y2="8"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="0.5"
                className="dark:stroke-blue-200/50"
                animate={{
                  x: [0, 8],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
              />
              <line
                x1="0"
                y1="0"
                x2="10"
                y2="0"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="0.5"
                className="dark:stroke-blue-200/50"
              />
            </pattern>
            <clipPath id="ballClip">
              <circle cx="50" cy="50" r="45" />
            </clipPath>
            <radialGradient id="shineFacets" cx="35%" cy="35%" r="60%">
              <stop
                offset="0%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.9 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#4488ff", stopOpacity: 0.1 }}
              />
            </radialGradient>
          </defs>

          {/* Base sphere */}
          <circle
            cx="50"
            cy="50"
            r="50"
            fill="url(#discoBallGradient)"
            className="dark:opacity-90"
          />

          {/* Grid pattern with clip path */}
          <g clipPath="url(#ballClip)">
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="url(#gridPattern)"
              className="dark:opacity-70"
              animate={{
                x: [-4, 4],
              }}
              transition={{
                duration: 0.0,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          </g>

          {/* Shine effect */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="url(#shineFacets)"
            className="mix-blend-overlay"
          />
        </svg>

        {/* Restore original light beam animation */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
              style={{
                left: "50%",
                top: "50%",
                transform: `rotate(${i * 45}deg) translateX(100%)`,
                transformOrigin: "0 50%",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DiscoBall;
