"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const BlogPost = ({ title, date, excerpt, slug }: BlogPostProps) => {
  const [mounted, setMounted] = useState(false);
  const [hoverColor, setHoverColor] = useState<string | null>(null);
  const { theme } = useTheme();

  const colors =
    theme === "dark"
      ? ["#ff8a8a", "#7fe7d1", "#ffb59c"] // Original colors for dark mode
      : ["#e06666", "#50b3a1", "#e88e70"]; // Darker versions for light mode

  useEffect(() => {
    setMounted(true);
  }, []);

  const titleColor = () => {
    if (!mounted) return "inherit";
    if (hoverColor) return hoverColor;
    return theme === "dark" ? "white" : "#111827";
  };

  return (
    <article>
      <Link href={`/writing/${slug}`}>
        <div className="mb-4">
          <div
            className="rounded-md md:hover:bg-gray-100 dark:md:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-800 transition-colors -mx-4"
            onMouseEnter={() => {
              if (window.innerWidth >= 768) {
                setHoverColor(
                  colors[Math.floor(Math.random() * colors.length)]
                );
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 768) {
                setHoverColor(null);
              }
            }}
            onTouchStart={() => {
              if (window.innerWidth < 768) {
                setHoverColor(
                  colors[Math.floor(Math.random() * colors.length)]
                );
              }
            }}
            onTouchEnd={() => {
              if (window.innerWidth < 768) {
                setTimeout(() => setHoverColor(null), 150); // Small delay to make the effect visible
              }
            }}
          >
            <div className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3
                  className="text-xl font-semibold transition-colors font-mono"
                  style={{ color: titleColor() }}
                >
                  {title}
                </h3>
                <time
                  className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-1 sm:mt-0"
                  suppressHydrationWarning
                >
                  {date}
                </time>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                {excerpt}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPost;
