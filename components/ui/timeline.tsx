"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  heading?: string;
  description?: React.ReactNode;
}

export const Timeline = ({ data, heading, description }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Remeasure on resize/reflow so the progress line keeps matching the content
  // once fonts land and the layout settles.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      setHeight(el.getBoundingClientRect().height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white dark:bg-[#0F1117]" ref={containerRef}>
      {(heading || description) && (
        <div className="max-w-5xl mx-auto pt-16 pb-10 px-4">
          {heading && (
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 font-mono cursor-default">
              {heading}
            </h1>
          )}
          {description && (
            <div className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              {description}
            </div>
          )}
        </div>
      )}

      <div ref={ref} className="relative max-w-5xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* 40px dot, centered on the 26px rail axis (see the rail below) */}
              <div className="h-10 absolute left-[6px] w-10 rounded-full bg-white dark:bg-[#0F1117] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold font-mono text-gray-400 dark:text-gray-600">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-bold font-mono text-gray-400 dark:text-gray-600">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute left-[25px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-200 dark:via-gray-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#ff8a8a] via-[#7fe7d1] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
