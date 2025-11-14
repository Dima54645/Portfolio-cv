import { keyframes, styled } from "@mui/material/styles";
import { Slider } from "@mui/material";

export const playAnimation = keyframes`
  0% { transform: scaleY(1); }
  50% { transform: scaleY(2); }
  100% { transform: scaleY(1); }
`;

// ✅ Не пробрасываем isSmall в DOM
export const SoundBarContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isSmall",
})<{ isSmall: boolean }>(({ isSmall }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "fixed",
  left: isSmall ? "1rem" : "8rem",
  top: isSmall ? "6rem" : "3rem",
  zIndex: 10,
  gap: "0.5rem",
}));

export const BarsWrapper = styled("div")({
  display: "flex",
  cursor: "pointer",
  "& > *:nth-of-type(1)": { animationDelay: "0.2s" },
  "& > *:nth-of-type(2)": { animationDelay: "0.3s" },
  "& > *:nth-of-type(3)": { animationDelay: "0.4s" },
  "& > *:nth-of-type(4)": { animationDelay: "0.5s" },
  "& > *:nth-of-type(5)": { animationDelay: "0.8s" },
});


export const SoundBarLine = styled("div", {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "playing",
})<{ color: string; playing: boolean }>(({ color, playing }) => ({
  backgroundColor: color,
  height: "1rem",
  width: "2px",
  margin: "0 0.1rem",
  animation: `${playAnimation} 1s ease infinite`,
  animationPlayState: playing ? "running" : "paused",
}));


export const VolumeSlider = styled(Slider, {
  shouldForwardProp: (prop) => prop !== "isSmall" && prop !== "colorMode",
})<{ isSmall: boolean; colorMode: string }>(({ isSmall, colorMode }) => ({
  width: isSmall ? 2 : 100,
  height: isSmall ? 80 : "auto",
  color: colorMode,
  "& .MuiSlider-thumb": {
    width: 12,
    height: 12,
  },
}));
