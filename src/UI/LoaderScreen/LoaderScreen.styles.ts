import { Box, Typography, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const LoaderWrapper = styled(motion.div)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "#353535ff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1500,
});

export const LoaderContent = styled(Box)({
  textAlign: "center",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const NameText = styled(Typography)({
  marginBottom: "8px",
  fontWeight: 700,
});

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  marginBottom: "24px",
}));

export const ProgressWrapper = styled(Box)({
  width: 280,
  marginBottom: 24,
});

export const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 8,
  backgroundColor: theme.palette.grey[800],
  "& .MuiLinearProgress-bar": {
    backgroundColor: theme.palette.grey[300],
  },
}));

export const ProgressText = styled(Typography)(({ theme }) => ({
  marginTop: 8,
  color: theme.palette.grey[500],
  textAlign: "center",
}));

export const Spinner = styled(motion.div)({
  width: 40,
  height: 40,
  marginTop: 10,
});
