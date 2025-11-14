import { styled } from "@mui/material/styles";
import { Card, Box, Typography } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  width: 260,
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
  display: "flex",
  flexDirection: "column",
  height: "100%",
  transition: "0.3s ease",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,

  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "translateY(-4px)",
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,

    ".MuiChip-root": {
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white,
    },
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
}));

export const ChipContainer = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
}));
