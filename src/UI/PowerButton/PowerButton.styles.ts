import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const PowerButtonContainer = styled(Box)(() => ({
  position: "fixed",
  top: "2rem",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#FCF6F4",
  padding: "0.3rem",
  borderRadius: "50%",
  border: "1px solid #000",
  width: "2.5rem",
  height: "2.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 3,
  cursor: "pointer",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "rgba(0,255,0,0.4)",
    boxShadow: "0 0 8px 6px rgba(0,255,0,0.2)",
  },

  "& a": {
    textDecoration: "none",
    color: "inherit",
  },
}));
