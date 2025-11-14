import React from "react";
import { Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import type { ExperienceCardProps } from "./ExperienceCard.types";
import {
  Bullet,
  CheckMark,
  CompanyInfo,
  ContainerCard,
  Details,
  Period,
  RootAccordion,
  Summary,
  Tags,
  Team,
  TechChip,
} from "./ExperienceCard.styles";
import { ExpandableList } from "./ExpandableList";

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  period,
  description,
  team,
  responsibilities,
  achievements,
  technologies,
}) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <RootAccordion disableGutters>
      <Summary
        expandIcon={
          <ArrowForwardIosIcon sx={{ color: "#e0e0e0", fontSize: "1rem" }} />
        }
      >
        <ContainerCard>
          <CompanyInfo>
            <BusinessIcon fontSize="small" />
            <Typography variant="subtitle1">{company}</Typography>
          </CompanyInfo>

          <Typography variant="h6" sx={{ mt: 0.5, fontWeight: 600 }}>
            {role}
          </Typography>

          <Period>
            <CalendarMonthIcon fontSize="small" /> {period}
          </Period>

          <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.9 }}>
            {description}
          </Typography>

          <Tags>
            {technologies.map((tech, i) => (
              <TechChip key={i} label={tech} size="small" variant="outlined" />
            ))}
          </Tags>
        </ContainerCard>
      </Summary>

      <Details>
        {team && (
          <Team>
            <PeopleAltIcon fontSize="small" />
            <Typography variant="body2">{team}</Typography>
          </Team>
        )}

        <ExpandableList
          title="📘 Обязанности"
          items={responsibilities}
          icon={<Bullet />}
          panelId="panel1"
          expanded={expanded}
          onChange={handleChange}
        />

        <ExpandableList
          title="🏆 Достижения"
          items={achievements}
          icon={<CheckMark />}
          panelId="panel2"
          expanded={expanded}
          onChange={handleChange}
        />
      </Details>
    </RootAccordion>
  );
};
