import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  justifyContent: "center",
  alignItems: "flex-start",
  padding: theme.spacing(4),
  minHeight: "50vh",
  background: "rgba(0,0,0,0.6)",
  borderRadius: 20,
  color: "#fff",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
    gap: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

export const GameCard = styled(Card)(({ theme }) => ({
  width: "min(500px, 75vw)",
  aspectRatio: "3 / 4",
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const SidePanel = styled(Box)(({ theme }) => ({
  minWidth: 260,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),

  [theme.breakpoints.down("md")]: {
    width: "100%",
    minWidth: "unset",
    gap: theme.spacing(1),
  },
}));

export const PanelCard = styled(Card)(({ theme }) => ({
  background: "rgba(20,20,20,0.8)",
  borderRadius: 12,
  padding: theme.spacing(2),
  color: "#fff",
  boxShadow: "0 0 10px rgba(0,0,0,0.3)",

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
  },
}));

export const MobileControls = styled(Box)(() => ({
  marginTop: 12,
  display: "flex",
  gap: 8,
  flexDirection: "column",
}));

export const ControlRow = styled(Box)(() => ({
  display: "flex",
  gap: 8,
  justifyContent: "center",
}));
