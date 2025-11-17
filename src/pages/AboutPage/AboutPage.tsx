import React from "react";
import { motion } from "framer-motion";

import astronaut from "../../assets/Images/spaceman.png";
import { LogoComponent } from "../../UI/LogoComponent";
import { SocialIcons } from "../../UI/SocialIcons";
import { ToReturnButton } from "../../UI/PowerButton";
import { BigTitle } from "../../UI/BigTitlte";
import ParticleComponent from "../../UI/ParticleComponent/ParticleComponent";
import { SoundBar } from "../../UI/SoundBar";
import { LanguageButton } from "../../UI/LanguageButton";
import { Main, StyledBox } from "./AboutPage.styles";
import { useTranslation } from "react-i18next";

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledBox>
      <LogoComponent themeMode="dark" />
      <SocialIcons themeMode="dark" />
      <ToReturnButton themeMode="dark" />
      <ParticleComponent themeMode="dark" />
      <SoundBar themeMode="dark" />
      <LanguageButton themeMode="dark" />

      {/* Анимация космонавта */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "20vw",
        }}
        animate={{
          y: [-10, 15, -10],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <img
          src={astronaut}
          alt="spaceman"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Main>
          {t("about.text1")}
          <br />
          <br />
          {t("about.text2")}
          <br />
          <br />
          {t("about.text3")}
          <br />
          <br />
          {t("about.text4")}
        </Main>
      </motion.div>

      <BigTitle text={t("about.title")} top="10%" left="5%" />
    </StyledBox>
  );
};
