import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "10rem",
  paddingBottom: "10rem",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    paddingTop: "8rem",
    paddingBottom: "8rem",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "6rem",
    paddingBottom: "6rem",
  },
}));

export const Main = styled(motion.div)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  listStyle: "none",
  padding: 0,
  marginLeft: "20px",
  width: "100%",
  maxWidth: "1000px",
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    maxWidth: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "70%",
  },
}));

export const Rotate = styled("div")(({ theme }) => ({
  position: "fixed",
  right: "1rem",
  bottom: "1rem",
  width: 80,
  height: 80,
  zIndex: 3,
  [theme.breakpoints.down("sm")]: {
    width: 60,
    height: 60,
  },
}));
