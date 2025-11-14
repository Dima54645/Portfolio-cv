import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

import img from "../../assets/Images/striking-art-rurouni-kenshin-swordsman-in-the-moonlight-bpmz1w15hceq7gee.jpg";

export const MainContainer = styled(motion.div)(() => ({
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
}));

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: `rgba(252, 246, 244, 0.8)`,
  minWidth: "100%",
  minHeight: "100%",
  position: "relative",
  paddingBottom: "5rem",
  paddingTop: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Center = styled(motion.div)(() => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  paddingTop: "6rem",
}));
