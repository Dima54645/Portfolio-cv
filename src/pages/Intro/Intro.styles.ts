import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

export const MuiBox = motion.create(
  styled(motion.div)(({ theme }) => ({
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "65vw",
    height: "55vh",
    display: "flex",
    background: `linear-gradient(
    to right,

    ${theme.palette.background.default} 50%,
    ${theme.palette.text.primary} 50%) bottom,
    linear-gradient(
    to right,
    ${theme.palette.background.default} 50%,
    ${theme.palette.text.primary} 50%) top`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 2px",
    borderLeft: `2px solid ${theme.palette.background.default}`,
    borderRight: `2px solid ${theme.palette.text.primary}`,
    zIndex: 1,
  }))
);

export const SubBox = styled(Box)(({ theme }) => ({
  width: "50%",
  position: "relative",
  display: "flex",
  "& .pic": {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 0%)",
    width: "80%",
    height: "auto",

    [theme.breakpoints.down("md")]: {
      width: "120%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150%",
    },
  },
}));

export const TextIntro = styled(Box)(({ theme }) => ({
  fontSize: "calc(1em + 1.5vw)",
  color: theme.palette.background.default,
  padding: "calc(1rem + 1vw)",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  "& > *:last-child": {
    color:
      theme.palette.mode !== "dark"
        ? "rgba(255, 255, 255, 0.6)"
        : "rgba(0, 0, 0, 0.6)",
    fontSize: "calc(0.5rem + 1.5vw)",
    fontWeight: 300,
  },
}));
