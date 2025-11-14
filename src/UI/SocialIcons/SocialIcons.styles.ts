import { styled } from "@mui/material/styles";
import { Box, Link } from "@mui/material";
import { motion } from "framer-motion";

export const MotionBox = motion.create(Box);
export const MotionLine = motion.create(Box);

export const SocialContainer = styled(Box)(() => ({
  position: "fixed",
  bottom: 0,
  left: "2rem",
  zIndex: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > *:not(:last-child)": {
    marginBottom: "0.5rem",
  },
}));

export const SocialLink = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  "&:hover": {
    opacity: 0.8,
  },
}));

export const VerticalLine = styled(MotionLine)(() => ({
  width: "2px",
}));
