import { Typography } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { motion } from "framer-motion";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const GradientTypography = styled(Typography)(() => ({
  position: "relative",
  fontSize: "calc(0.8em + 0.8vw)",
  display: "inline-block",
  fontWeight: 800,
  background: `linear-gradient(
    90deg,
    #6fffd2,
    #4dd0e1,
    #81d4fa,
    #9575cd,
    #f48fb1,
    #ffb74d,
    #fff176
  )`,
  backgroundSize: "400% 400%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: `${gradientAnimation} 6s ease infinite`,
  letterSpacing: "2px",
  lineHeight: 1,
  margin: 0,
}));

export const MotionUnderline = styled(motion.div)(() => ({
  height: "3px",
  width: "100%",
  marginTop: "3px",
  borderRadius: "2px",
  background:
    "linear-gradient(90deg, #6fffd2, #4dd0e1, #81d4fa, #9575cd, #f48fb1, #ffb74d, #fff176)",
  transformOrigin: "left center",
}));
