import { IconButton, type IconButtonProps } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/material/styles";
import type { ThemeModeProps } from "../../types";
import { type NavLinkProps } from "react-router-dom";
export const ToReturnIconButton = styled(IconButton)<
  IconButtonProps & ThemeModeProps & NavLinkProps
>(({ themeMode }) => ({
  position: "fixed",
  top: "2rem",
  left: "50%",
  zIndex: 10,
  backgroundColor: themeMode === "dark" ? "#303030ff" : "#eeececff",
  borderRadius: "12px",
  "&:focus": {
    outline: "none",
  },
  "&.Mui-focusVisible": {
    outline: "none",
    boxShadow: "none",
  },
  "&:hover": {
    backgroundColor: themeMode === "dark" ? "#303030ff" : "#eeececff",
  },
}));

export const ToReturnIcon = styled(ArrowBackIcon, {
  shouldForwardProp: (prop) => prop !== "themeMode",
})<{ themeMode: "light" | "dark" }>(({ themeMode }) => ({
  color: themeMode === "dark" ? "white" : "black",
}));
