// ExpandableList.tsx
import React from "react";
import { AccordionDetails, Typography, List } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  NestedAccordion,
  NestedSummary,
  StyledListItem,
} from "../ExperienceCard.styles";
import type { ExpandableListProps } from "./ExpandableList.types";

export const ExpandableList: React.FC<ExpandableListProps> = ({
  title,
  items,
  icon,
  panelId,
  expanded,
  onChange,
}) => {
  if (!items?.length) return null;

  return (
    <NestedAccordion
      expanded={expanded === panelId}
      onChange={onChange(panelId)}
    >
      <NestedSummary
        expandIcon={
          <ArrowForwardIosIcon sx={{ color: "#e0e0e0", fontSize: "0.9rem" }} />
        }
      >
        <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
      </NestedSummary>

      <AccordionDetails>
        <List sx={{ p: 0 }}>
          {items.map((item, i) => (
            <StyledListItem key={i}>
              {icon}
              {item}
            </StyledListItem>
          ))}
        </List>
      </AccordionDetails>
    </NestedAccordion>
  );
};

