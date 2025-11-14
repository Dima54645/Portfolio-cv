import { styled } from "@mui/material/styles";

export const StyledTitle = styled("h1")<{
  top?: string;
  left?: string;
  right?: string;
  themeMode?: string;
}>(({ theme, top, left, right, themeMode }) => ({
  position: "fixed",
  top: top || "10%",
  left: left || "auto",
  right: right || "auto",
  color:
    themeMode === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.25)",
  fontSize: "calc(5rem + 5vw)",
  zIndex: 0,
  fontWeight: 700,
  userSelect: "none",
  pointerEvents: "none",

  [theme.breakpoints.down("md")]: {
    fontSize: "calc(3rem + 4vw)",
    top: "8%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "calc(2rem + 3vw)",
    top: "12%",
  },
}));
