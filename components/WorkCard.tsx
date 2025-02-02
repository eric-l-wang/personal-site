"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface WorkCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  index: number; // Add this
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  link,
  tags,
  index, // Add this
}) => {
  return (
    <Link href={link}>
      <motion.div
        className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-100 cursor-pointer"
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
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default WorkCard;
