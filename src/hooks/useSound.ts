import { useContext } from "react";
import SoundContext from "../сontext/SoundContext/SoundContext";

export const useSound = () => {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within a SoundProvider");
  return ctx;
};
