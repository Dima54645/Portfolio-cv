import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const Wrapper = styled(Box)(() => ({
  backgroundColor: "#0d0d0d",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "10rem",
  paddingBottom: "10rem",
}));

export const Rotate = styled("div")(({ theme }) => ({
  position: "fixed",
  right: "1rem",
  bottom: "1rem",
  width: 80,
  height: 80,
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    width: 60,
    height: 60,
  },
}));

export const Main = styled(motion.ul)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  listStyle: "none",
  padding: 0,
  margin: "0 auto",
  gap: "3rem",
  width: "80%",
  maxWidth: "800px",

  [theme.breakpoints.down("md")]: {
    maxWidth: "600px",
    gap: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "70%",
    gap: "1.5rem",
  },
}));
