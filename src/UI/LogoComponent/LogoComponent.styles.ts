import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const LogoWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isSmallScreen",
})<{ isSmallScreen: boolean }>(({ isSmallScreen }) => ({
  position: "fixed",
  left: isSmallScreen ? "1rem" : "2rem",
  top: "2rem",
  zIndex: 3,
  display: "inline-block",
}));

export const LogoText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "themeMode",
})<{ themeMode: "light" | "dark" }>(({ themeMode }) => ({
  fontFamily: `'Pacifico', cursive`,
  color: themeMode === "dark" ? "white" : "black",
  userSelect: "none",
}));
