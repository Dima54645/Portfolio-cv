import React, { createContext, useRef, useState, useEffect } from "react";
import music from "../../assets/audio/Good Kid - Mimi's Delivery Service.mp3";
import type { SoundContextType } from "./SoundContext.types";

const SoundContext = createContext<SoundContextType | null>(null);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <SoundContext.Provider
      value={{ playing, togglePlay, volume, setVolume, audioRef }}
    >
      <audio src={music} ref={audioRef} loop />
      {children}
    </SoundContext.Provider>
  );
};

export default SoundContext;
