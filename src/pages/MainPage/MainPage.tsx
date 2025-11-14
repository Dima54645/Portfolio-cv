import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { YinYang } from "../../UI/AllSvgs/AllSvgs";
import { Intro } from "../Intro/Intro";
import { PowerButton } from "../../UI/PowerButton";

import { SocialIcons } from "../../UI/SocialIcons";
import { SoundBar } from "../../UI/SoundBar";
import {
  BottomLinks,
  CenterButton,
  DarkOverlay,
  MainContainer,
  MotionLink,
} from "./MainPage.styles";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "../../UI/LanguageButton";
import { LogoComponent } from "../../UI/LogoComponent";

export const MainPage: React.FC = () => {
  const [click, setClick] = useState(false);

  const { t } = useTranslation();

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkOverlay click={click} />

      <Box sx={{ p: 2, position: "relative", width: "100%", height: "100%" }}>
        <PowerButton />
        <LogoComponent themeMode={click ? "dark" : "light"} />
        <SoundBar themeMode={click ? "dark" : "light"} />
        <SocialIcons themeMode={click ? "dark" : "light"} />

        <CenterButton onClick={handleClick} disableRipple click={click}>
          <YinYang width={click ? "100%" : "70%"} fill="currentColor" />
          <span>{t("ClickMe")}</span>
        </CenterButton>

        <LanguageButton />

        <NavLink
          to="/gamePage"
          style={{
            color: "black",
            position: "absolute",
            top: "50%",
            right: "calc(1rem + 2vw)",
            transform: "rotate(90deg) translate(-50%, -50%)",
            textDecoration: "none",
            zIndex: 1,
          }}
        >
          <MotionLink
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Typography variant="h5">{t("GamePage")}</Typography>
          </MotionLink>
        </NavLink>

        <NavLink
          to="/experiencePage"
          style={{
            color: click ? "white" : "black",
            position: "absolute",
            top: "50%",
            left: "calc(1rem + 2vw)",
            transform: "translate(-50%, -50%) rotate(-90deg)",
            textDecoration: "none",
            zIndex: 1,
          }}
        >
          <MotionLink
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Typography variant="h5">{t("MyExperiencePage")}</Typography>
          </MotionLink>
        </NavLink>

        <BottomLinks>
          <NavLink
            to="/aboutPage"
            style={{
              color: click ? "white" : "black",
              textDecoration: "none",
              zIndex: 1,
            }}
          >
            <MotionLink
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 1.5, delay: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Typography variant="h5">{t("AboutPage")}</Typography>
            </MotionLink>
          </NavLink>

          <NavLink
            to="/skillsPage"
            style={{
              color: "black",
              textDecoration: "none",
              zIndex: 1,
            }}
          >
            <MotionLink
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 1.5, delay: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Typography variant="h5">{t("SkillsPage")}</Typography>
            </MotionLink>
          </NavLink>
        </BottomLinks>
      </Box>

      {click && <Intro />}
    </MainContainer>
  );
};
