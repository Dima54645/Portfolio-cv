import { IconButton } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import { styled } from "@mui/material/styles";

export const LanguageIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "themeMode",
})<{ themeMode: "light" | "dark" }>(({ themeMode }) => ({
  position: "fixed",
  top: "2rem",
  right: "2rem",
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

export const LanguageIcon = styled(TranslateIcon, {
  shouldForwardProp: (prop) => prop !== "themeMode",
})<{ themeMode: "light" | "dark" }>(({ themeMode }) => ({
  color: themeMode === "dark" ? "white" : "black",
}));
