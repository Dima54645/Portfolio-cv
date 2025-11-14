import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  ListItem,
  styled,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const RootAccordion = styled(Accordion)({
  backgroundColor: "#3b3b3bff",
  color: "#e0e0e0",
  borderRadius: "16px !important",
  boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
  "&:before": { display: "none" },
  marginBottom: "1rem",
});

export const Summary = styled(AccordionSummary)({
  position: "relative",
  "& .MuiAccordionSummary-expandIconWrapper": {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    transition: "transform 0.2s ease",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "&:focus": { outline: "none" },
  "&.Mui-focusVisible": { outline: "none", boxShadow: "none" },
});

export const ContainerCard = styled(Box)({
  padding: "1.5rem 1rem",
});

export const CompanyInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.95rem",
  fontWeight: 500,
  opacity: 0.9,
});

export const Period = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  fontSize: "0.9rem",
  opacity: 0.7,
});

export const Team = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.9rem",
  opacity: 0.8,
});

export const Tags = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  marginTop: "0.75rem",
});

export const TechChip = styled(Chip)({
  borderRadius: "999px",
  fontSize: "0.8rem",
  fontWeight: 500,
  opacity: 0.85,
  color: "white",
});

export const NestedAccordion = styled(Accordion)({
  backgroundColor: "#353535",
  color: "#e0e0e0",
  borderRadius: "12px !important",
  boxShadow: "none",
  "&:before": { display: "none" },
  marginTop: "0.75rem",
});

export const NestedSummary = styled(AccordionSummary)({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "&:focus": { outline: "none" },
  "&.Mui-focusVisible": { outline: "none", boxShadow: "none" },
});

export const StyledListItem = styled(ListItem)({
  display: "flex",
  alignItems: "flex-start",
  gap: "0.6rem",
  fontSize: "0.9rem",
  lineHeight: 1.6,
  color: "#d5d5d5",
  padding: "0.3rem 0",
});

export const Bullet = styled(Box)({
  width: 5,
  height: 5,
  marginTop: "0.45rem",
  borderRadius: "50%",
  backgroundColor: "#2a4ff1ff",
  flexShrink: 0,
});

export const CheckMark = styled(CheckIcon)({
  fontSize: "1rem",
  marginTop: "0.25rem",
  color: "#03f00fff",
  flexShrink: 0,
});

export const Details = styled(AccordionDetails)({
  backgroundColor: "#2c2c2cff",
  borderRadius: "0 0 16px 16px",
  padding: "1.5rem",
});
