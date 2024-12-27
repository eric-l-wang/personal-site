"use client";

import React, { useEffect, useRef, useMemo } from "react";

interface PixelTrailProps {
  pixelSize?: number;
  fadeDuration?: number;
  pixelClassName?: string;
}

const PixelTrail: React.FC<PixelTrailProps> = ({
  pixelSize = 20,
  fadeDuration = 200,
  pixelClassName = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const trailColors = useMemo(
    () => [
      "#ff8a8a", // Light Red
      "#7fe7d1", // Light Teal
      "#ffb59c", // Light Orange
    ],
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastX: number | null = null;
    let lastY: number | null = null;

    const createPixel = (x: number, y: number) => {
      if (Math.random() > 0.33) return; // This will create pixels roughly 1/3 of the time
      const pixel = document.createElement("div");
      const colorIndex = Math.floor(Math.random() * trailColors.length);
      pixel.className = `absolute ${pixelClassName}`;
      pixel.style.width = `${pixelSize}px`;
      pixel.style.height = `${pixelSize}px`;
      pixel.style.left = `${x}px`;
      pixel.style.top = `${y}px`;
      pixel.style.opacity = "1";
      pixel.style.transition = `opacity ${fadeDuration}ms linear`;
      pixel.style.backgroundColor = trailColors[colorIndex];

      container.appendChild(pixel);

      setTimeout(() => {
        pixel.style.opacity = "0";
      }, 10);

      setTimeout(() => {
        container.removeChild(pixel);
      }, fadeDuration + 10);
    };

    const handleMouseMove = (e: MouseEvent) => {
      createPixel(e.clientX - pixelSize / 2, e.clientY - pixelSize / 2);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevent default only for the container
      const touch = e.touches[0];
      if (touch) {
        const x = touch.clientX - pixelSize / 2;
        const y = touch.clientY - pixelSize / 2;

        // Only create a pixel if the touch has moved significantly
        if (
          lastX === null ||
          lastY === null ||
          Math.abs(x - lastX) > pixelSize ||
          Math.abs(y - lastY) > pixelSize
        ) {
          createPixel(x, y);
          lastX = x;
          lastY = y;
        }
      }
    };

    const handleTouchStart = () => {
      lastX = null;
      lastY = null;
    };

    document.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    container.addEventListener("touchstart", handleTouchStart);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchstart", handleTouchStart);
    };
  }, [pixelSize, fadeDuration, pixelClassName, trailColors]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 50 }}
    />
  );
};

export default PixelTrail;
