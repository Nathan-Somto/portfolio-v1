import React from "react";
import rocketBlastSrc from "../assets/audio/rocket-blast.mp3";
import continuousSrc from "../assets/audio/continuous-sound.mp3";
import clickSrc from "../assets/audio/click-sound.mp3";
import glitchTextSrc from "../assets/audio/glitch-text.wav";
let lightspeedSrc: string | null = null;
try {
  lightspeedSrc = new URL("../assets/audio/lightspeed.mp3", import.meta.url).href;
} catch {
  lightspeedSrc = null;
}

export type SoundKey = "rocketBlast" | "atmosphereBreak" | "lightspeed" | "click" | "glitch-text";

interface SoundContextValue {
  soundEnabled: boolean;
  toggle: () => void;
  play: (key: SoundKey) => void;
  startContinuousSound: () => void;
  stopContinuousSound: () => void;
}

const SoundContext = React.createContext<SoundContextValue | null>(null);

export function SoundContextProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const continuousRef = React.useRef<HTMLAudioElement | null>(null);

  const toggle = React.useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      if (continuousRef.current) {
        if (next) {
          continuousRef.current.play().catch(() => {});
        } else {
          continuousRef.current.pause();
        }
      }
      return next;
    });
  }, []);

  const play = React.useCallback(
    (key: SoundKey) => {
      if (!soundEnabled) return;
      let src: string | null = null;
      let volume = 1;
      switch (key) {
        case "rocketBlast":
          src = rocketBlastSrc;
          volume = 0.8;
          break;
        case 'glitch-text':
            src = glitchTextSrc;
            volume = 0.5;
            break;
        case "atmosphereBreak":
          src = rocketBlastSrc;
          volume = 0.4;
          break;
        case "lightspeed":
          src = lightspeedSrc;
          volume = 0.9;
          break;
        case "click":
          src = clickSrc;
          volume = 0.6;
          break;
      }
      if (!src) return;
      try {
        const audio = new Audio(src);
        audio.volume = volume;
        audio.play().catch(() => {});
      } catch {
        // ignore
      }
    },
    [soundEnabled]
  );

  const startContinuousSound = React.useCallback(() => {
    if (!continuousRef.current) {
      continuousRef.current = new Audio(continuousSrc);
      continuousRef.current.loop = true;
      continuousRef.current.volume = 0.15;
    }
    if (soundEnabled) {
      continuousRef.current.play().catch(() => {});
    }
  }, [soundEnabled]);

  const stopContinuousSound = React.useCallback(() => {
    if (continuousRef.current) {
      continuousRef.current.pause();
      continuousRef.current.currentTime = 0;
    }
  }, []);

  return (
    <SoundContext.Provider value={{ soundEnabled, toggle, play, startContinuousSound, stopContinuousSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundContext() {
  const ctx = React.useContext(SoundContext);
  if (!ctx) throw new Error("useSoundContext must be used inside SoundContextProvider");
  return ctx;
}
