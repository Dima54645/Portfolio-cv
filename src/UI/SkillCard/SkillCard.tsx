import React from "react";
import { CardContent, Chip } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import type { SkillCardProps } from "./SkillCard.types";
import { cardVariants } from "./SkillCard.const";
import {
  StyledCard,
  StyledTypography,
  ChipContainer,
} from "./SkillCard.styles";

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <motion.div
      custom={category.title}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <StyledCard>
        <CardContent>
          <StyledTypography variant="h6" gutterBottom>
            {category.title}
          </StyledTypography>
          <ChipContainer>
            <AnimatePresence>
              {category.skills.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
              ))}
            </AnimatePresence>
          </ChipContainer>
        </CardContent>
      </StyledCard>
    </motion.div>
  );
};
