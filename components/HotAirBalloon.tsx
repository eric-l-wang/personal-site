"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Balloon = ({
  position,
  color,
  delay,
}: {
  position: "left" | "right";
  color: "red" | "blue";
  delay: number;
}) => {
  const progress = useMotionValue(0);
  const yValue = useTransform(progress, (v) => `${100 - 200 * v}%`);
  const opacityValue = useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const controls = animate(progress, 1, {
        duration: 6,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 10,
      });
      return controls.stop;
    }, delay);

    return () => clearTimeout(timeout);
  }, [progress, delay]);

  return (
    <motion.div
      className={`absolute ${
        position === "right" ? "right-[30%]" : "left-[30%]"
      } top-0`}
      style={{
        y: yValue,
        opacity: opacityValue,
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 512 512"
        className={`fill-current ${
          color === "red"
            ? "text-gray-600 dark:text-gray-600"
            : "text-gray-600 dark:text-gray-600"
        }`}
      >
        <path d="M256,0C166.155,0,93.32,72.834,93.32,162.68c0,56.943,22.091,111.667,61.622,152.652l25.931,26.885 c6.44,6.675,15.316,10.446,24.592,10.446H306.54c9.276,0,18.153-3.771,24.593-10.448l25.925-26.881 c39.53-40.987,61.62-95.71,61.62-152.654C418.68,72.834,345.845,0,256,0z" />
        <path
          className={
            color === "red"
              ? "text-red-400 dark:text-red-400"
              : "text-blue-400 dark:text-blue-400"
          }
          d="M256,0C162.371,93.628,150.941,241.521,229.072,348.423l3.099,4.24h47.658l3.099-4.24 C361.059,241.521,349.629,93.628,256,0z"
        />
        <path
          className="text-gray-600 dark:text-gray-600"
          d="M207.413,352.67h16.741v60.216h-16.741zM287.837,352.67h16.741v60.216h-16.741z"
        />
        <path
          className="text-gray-600 dark:text-gray-600"
          d="M190.947,448.53v52.297c0,6.171,5.587,11.172,12.48,11.172h105.147c6.892,0,12.48-5.002,12.48-11.172 V448.53H190.947z"
        />
      </svg>
    </motion.div>
  );
};

export default function HotAirBalloon() {
  return (
    <>
      <Balloon position="right" color="red" delay={1000} />
      <Balloon position="left" color="blue" delay={3000} />
    </>
  );
}
