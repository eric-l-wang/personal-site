import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface BounceCardsProps {
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Array of image URLs to display
   */
  images?: string[];
  /**
   * Width of the container in pixels
   */
  containerWidth?: number;
  /**
   * Height of the container in pixels
   */
  containerHeight?: number;
  /**
   * Delay before animation starts (in seconds)
   */
  animationDelay?: number;
  /**
   * Delay between each card animation (in seconds)
   */
  animationStagger?: number;
  /**
   * GSAP easing function
   */
  easeType?: string;
  /**
   * Array of transform styles for each card
   */
  transformStyles: {
    desktop: string[];
    mobile: string[];
  };

  startAnimation: boolean;
}

/**
 * A component that displays a group of cards with a bouncing animation effect.
 * Uses GSAP for smooth animations and supports custom positioning and timing.
 */
export function BounceCards({
  className = "",
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = {
    desktop: [
      "rotate(10deg) translate(-170px)",
      "rotate(5deg) translate(-85px)",
      "rotate(-3deg)",
      "rotate(-10deg) translate(85px)",
      "rotate(2deg) translate(170px)",
    ],
    mobile: [
      "translate(0, -120px) rotate(0deg)",
      "translate(0, -60px) rotate(0deg)",
      "translate(0, 0px) rotate(0deg)",
      "translate(0, 60px) rotate(0deg)",
      "translate(0, 120px) rotate(0deg)",
    ],
  },
  startAnimation,
}: BounceCardsProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (startAnimation) {
      gsap.fromTo(
        ".bounce-animate", // Changed from .card to .bounce-animate
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
        }
      );
    } else {
      gsap.set(".bounce-animate", { scale: 0 });
    }
  }, [animationStagger, easeType, animationDelay, startAnimation]);

  return (
    <div
      className={cn(
        "relative flex pt-20 justify-center overflow-hidden",
        className
      )}
      style={{
        width: containerWidth,
        height: isMobile ? containerHeight : containerHeight * 0.6,
      }}
    >
      <div className="relative w-[150px] h-[150px]">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={cn(
              "bounce-animate absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] aspect-square"
            )}
            style={{
              transform: `${
                isMobile
                  ? transformStyles.mobile[idx]
                  : transformStyles.desktop[idx]
              } translate(-50%, -50%)`,
            }}
          >
            <div
              className={cn(
                "w-full h-full rounded-[20px] overflow-hidden",
                "border-4 border-white dark:border-white/90",
                "shadow-lg dark:shadow-black/20",
                "bg-white dark:bg-white",
                "cursor-pointer transition-transform duration-300 ease-out hover:scale-110"
              )}
            >
              <img
                className="w-full h-full object-cover"
                src={src}
                alt={`card-${idx}`}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
