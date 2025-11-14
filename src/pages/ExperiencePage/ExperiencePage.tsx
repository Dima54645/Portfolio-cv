import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { SocialIcons } from "../../UI/SocialIcons";
import { YinYang } from "../../UI/AllSvgs";
import { BigTitle } from "../../UI/BigTitlte";
import { SoundBar } from "../../UI/SoundBar";
import { LanguageButton } from "../../UI/LanguageButton";
import { ExperienceCard } from "../../UI/ExperienceCard";
import { LogoComponent } from "../../UI/LogoComponent";
import { PowerButton } from "../../UI/PowerButton";
import { containerVariants } from "./ExperiencePage.const";
import { Main, Rotate, Wrapper } from "./ExperiencePage.styles";

export const ExperiencePage: React.FC = () => {
  const { t } = useTranslation();
  const yinyang = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      if (yinyang.current) {
        yinyang.current.style.transform = `rotate(${-scrollY}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <LogoComponent themeMode="dark" />
      <SocialIcons themeMode="dark" />
      <SoundBar themeMode="dark" />
      <PowerButton />
      <LanguageButton themeMode="dark" />

      <Main variants={containerVariants} initial="hidden" animate="show">
        <ExperienceCard
          company={t("experience.techCrew.company")}
          role={t("experience.techCrew.role")}
          period={t("experience.techCrew.period")}
          description={t("experience.techCrew.description")}
          team={t("experience.techCrew.team")}
          technologies={
            t("experience.techCrew.technologies", {
              returnObjects: true,
            }) as string[]
          }
          responsibilities={
            t("experience.techCrew.responsibilities", {
              returnObjects: true,
            }) as string[]
          }
          achievements={
            t("experience.techCrew.achievements", {
              returnObjects: true,
            }) as string[]
          }
        />

        <ExperienceCard
          company={t("experience.lifeChanger.company")}
          role={t("experience.lifeChanger.role")}
          period={t("experience.lifeChanger.period")}
          description={t("experience.lifeChanger.description")}
          team={t("experience.lifeChanger.team")}
          technologies={
            t("experience.lifeChanger.technologies", {
              returnObjects: true,
            }) as string[]
          }
          responsibilities={
            t("experience.lifeChanger.responsibilities", {
              returnObjects: true,
            }) as string[]
          }
          achievements={
            t("experience.lifeChanger.achievements", {
              returnObjects: true,
            }) as string[]
          }
        />
      </Main>

      <Rotate ref={yinyang}>
        <YinYang width="100%" />
      </Rotate>

      <BigTitle text={t("experienceTitle")} top="5%" right="10%" />
    </Wrapper>
  );
};
