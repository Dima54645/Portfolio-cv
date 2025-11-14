import { motion } from "framer-motion";
import { Box, Button, styled } from "@mui/material";

export const MainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  position: "relative",
  fontFamily: "'Karla', sans-serif",
}));

export const DarkOverlay = styled(Box, {
  shouldForwardProp: (prop) => prop !== "click",
})<{ click: boolean }>(({ click }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: "50%",
  backgroundColor: "#000",
  width: click ? "50%" : "0%",
  height: click ? "100%" : "0%",
  zIndex: 1,
  transition: "height 0.5s ease, width 1s ease 0.5s",
}));

export const CenterButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "click",
})<{ click: boolean }>(({ click, theme }) => ({
  position: "absolute",
  top: click ? "85%" : "50%",
  left: click ? "92%" : "50%",
  transform: "translate(-50%, -50%)",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  display: "flex",
  color: "black",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 1s ease",
  "&:focus": {
    outline: "none",
  },
  "&.Mui-focusVisible": {
    outline: "none",
    boxShadow: "none",
  },
  "& svg": {
    animation: "spin 1.5s linear infinite",
  },
  "& span": {
    display: click ? "none" : "inline-block",
    paddingTop: "1rem",
    color: theme.palette.text.primary,
  },
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
}));

export const MotionLink = motion.create(
  styled("div")({
    display: "inline-block",
  })
);

export const BottomLinks = styled(Box)({
  position: "absolute",
  bottom: "1rem",
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
});
