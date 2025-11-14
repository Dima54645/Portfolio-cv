// GradientText.tsx
import React from "react";

import { motion } from "framer-motion";
import { GradientTypography, MotionUnderline } from "./GradientText.styles";
import { textVariants, underlineVariants } from "./GradientText.const";
import { useTranslation } from "react-i18next";

export const GradientText: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
    >
      <motion.div variants={textVariants}>
        <GradientTypography variant="h3">
          {t("IAmDmitryChichev")}
        </GradientTypography>
      </motion.div>

      <MotionUnderline variants={underlineVariants} />
    </motion.div>
  );
};
