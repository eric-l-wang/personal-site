"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BentoWorkGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoWorkCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  index: number;
}

export const BentoWorkGrid = ({ children, className }: BentoWorkGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 gap-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoWorkCard = ({
  title,
  description,
  link,
  tags,
  index,
}: BentoWorkCardProps) => {
  return (
    <Link href={link}>
      <motion.div
        className="group relative overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-900 hover:scale-[1.02] transition-transform duration-100 cursor-pointer h-full"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.1 }}
      >
        <div className="aspect-video relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src={`/work/${index % 2 === 0 ? "demo" : "demo2"}.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="p-4">
          <h3 className="font-mono text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* <div className="absolute bottom-4 left-4 opacity-0 transform translate-y-4 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
            <Button variant="ghost" size="sm" className="font-mono">
              View Project
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </motion.div>
    </Link>
  );
};
