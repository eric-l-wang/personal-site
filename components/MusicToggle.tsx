"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "@/contexts/SoundContext";
import { isMobileOrTablet } from "@/utils/deviceDetection";

export function MusicToggle() {
  const { isSoundEnabled, toggleSound } = useSound();

  const handleToggle = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    toggleSound();
  };

  return (
    <button
      onClick={handleToggle}
      onTouchEnd={handleToggle}
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-colors touch-none"
      aria-label={isSoundEnabled ? "Mute sound" : "Unmute sound"}
    >
      {isSoundEnabled ? (
        <Volume2 className="w-6 h-6" />
      ) : (
        <VolumeX className="w-6 h-6" />
      )}
    </button>
  );
}
