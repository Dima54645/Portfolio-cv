import React from "react";
import { useMediaQuery } from "@mui/material";

import { useSound } from "../../hooks/useSound";
import {
  BarsWrapper,
  SoundBarContainer,
  SoundBarLine,
  VolumeSlider,
} from "./SoundBar.styles";

export const SoundBar: React.FC<{ themeMode?: "light" | "dark" }> = ({
  themeMode = "light",
}) => {
  const { playing, togglePlay, volume, setVolume } = useSound();
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const color = themeMode === "dark" ? "white" : "black";

  const handleVolumeChange = (_event: Event, newValue: number | number[]) => {
    const newVolume = Array.isArray(newValue) ? newValue[0] : newValue;
    setVolume(newVolume);
  };

  return (
    <SoundBarContainer isSmall={isSmallScreen}>
      <BarsWrapper onClick={togglePlay}>
        {[...Array(5)].map((_, i) => (
          <SoundBarLine key={i} color={color} playing={playing} />
        ))}
      </BarsWrapper>

      <VolumeSlider
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleVolumeChange}
        orientation={isSmallScreen ? "vertical" : "horizontal"}
        isSmall={isSmallScreen}
        colorMode={color}
      />
    </SoundBarContainer>
  );
};
