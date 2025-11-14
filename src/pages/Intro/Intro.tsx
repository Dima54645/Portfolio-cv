import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Me from "../../assets/Images/profile-img.png";

import { MuiBox, SubBox, TextIntro } from "./Intro.styles";
import { GradientText } from "./GradientName";
import { HiSpan } from "./HiSpan/HiSpan";
import { useTranslation } from "react-i18next";

export const Intro: React.FC = () => {
  const { t } = useTranslation();
  return (
    <MuiBox
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <TextIntro>
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: "calc(1em + 1.5vw)" }}
          >
            {t("Hi")}
            {HiSpan},
          </Typography>
          <GradientText />
          <Typography variant="h6" component="h6">
            {t("MiniAbout")}
          </Typography>
        </TextIntro>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </MuiBox>
  );
};
