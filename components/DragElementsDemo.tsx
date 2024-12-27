"use client";

import React, { useState, useEffect } from "react";
import DragElements from "@/components/DragElements";
import Image from "next/image";
import useScreenSize from "@/hooks/use-screen-size";

const DragElementsDemo: React.FC = () => {
  const screenSize = useScreenSize();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getPhotoStyles = (index: number) => {
    if (!mounted) {
      return {
        width: "120px",
        height: "150px",
        transform: "rotate(0deg)",
      };
    }

    const rotation = -12 + index * 5;
    const width = screenSize.lessThan("md") ? 110 : 135;
    const height = screenSize.lessThan("md") ? 130 : 165;

    return {
      width: `${width}px`,
      height: `${height}px`,
      transform: `rotate(${rotation}deg)`,
    };
  };

  return (
    <div
      className="w-full h-full relative overflow-visible"
      style={{ zIndex: 50 }}
    >
      <DragElements dragMomentum={false}>
        {Array.from({ length: 6 }).map((_, index) => {
          const styles = getPhotoStyles(index);

          return (
            <div
              key={index}
              className="flex items-start justify-center bg-white shadow-xl p-4"
              style={styles}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  width: `${parseInt(styles.width) - 32}px`,
                  height: `${parseInt(styles.height) - 32}px`,
                }}
              >
                <Image
                  src={`/images/photo${index + 1}.jpg`}
                  fill={false}
                  width={135}
                  height={165}
                  alt={`Analog photo ${index + 1}`}
                  className="object-cover w-full h-full"
                  draggable={false}
                  sizes="(max-width: 768px) 110px, 135px"
                  quality={85}
                />
              </div>
            </div>
          );
        })}
      </DragElements>
    </div>
  );
};

export default DragElementsDemo;
