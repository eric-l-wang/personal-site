"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { isMobileOrTablet } from "@/utils/deviceDetection";

type SoundContextType = {
  isSoundEnabled: boolean;
  toggleSound: () => void;
  isPartyPlaying: boolean;
  toggleParty: () => void;
  volume: number;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isPartyPlaying, setIsPartyPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(
      "/DSC_NGL_115_songstarter_sample_this_Emaj.wav"
    );
    audioRef.current.loop = true;

    // Set initial volume based on sound preference
    const savedSoundPreference = localStorage.getItem("soundPreference");
    if (savedSoundPreference !== null) {
      const enabled = JSON.parse(savedSoundPreference);
      setIsSoundEnabled(enabled);
      setVolume(enabled ? 1 : 0);
    }

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleSound = () => {
    const newSoundState = !isSoundEnabled;
    setIsSoundEnabled(newSoundState);

    if (audioRef.current) {
      if (isMobileOrTablet()) {
        // On mobile: stop everything and reset party state
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        if (isPartyPlaying) {
          setIsPartyPlaying(false);
        }
      } else {
        // On desktop: just adjust volume
        audioRef.current.volume = newSoundState ? 1 : 0;
      }
    }

    localStorage.setItem("soundPreference", JSON.stringify(newSoundState));
  };

  const toggleParty = () => {
    if (!isPartyPlaying) {
      if (isSoundEnabled || !isMobileOrTablet()) {
        audioRef.current?.play();
      }
      setIsPartyPlaying(true);
    } else {
      audioRef.current?.pause();
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
      setIsPartyPlaying(false);
    }
  };

  return (
    <SoundContext.Provider
      value={{
        isSoundEnabled,
        toggleSound,
        isPartyPlaying,
        toggleParty,
        volume,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
