export interface SoundContextType {
  playing: boolean;
  togglePlay: () => void;
  volume: number;
  setVolume: (v: number) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}