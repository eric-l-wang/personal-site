"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const birdsData = [
  { containerClass: "bird-container--one" },
  { containerClass: "bird-container--two" },
  { containerClass: "bird-container--three" },
  { containerClass: "bird-container--four" },
];

export default function Birds() {
  // Show birds for 10s every 20s
  const [showBirds, setShowBirds] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBirds(true);
      setTimeout(() => setShowBirds(false), 10000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!showBirds) return null;

  return (
    <div>
      {birdsData.map((bird, idx) => (
        <div key={idx} className={cn("bird-container", bird.containerClass)}>
          <div className="bird dark:invert" />
        </div>
      ))}
    </div>
  );
}
