import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import { YinYang } from "../../UI/AllSvgs";
import { BigTitle } from "../../UI/BigTitlte";
import { LogoComponent } from "../../UI/LogoComponent";
import { SocialIcons } from "../../UI/SocialIcons";
import { PowerButton } from "../../UI/PowerButton";
import { SoundBar } from "../../UI/SoundBar";
import { LanguageButton } from "../../UI/LanguageButton";
import ParticleComponent from "../../UI/ParticleComponent/ParticleComponent";
import { SkillCard } from "../../UI/SkillCard";
import { Wrapper, Main, Rotate } from "./MySkillsPage.styles";
import { useSkillData } from "./MySkillsPage.const";

export const MySkillsPage: React.FC = () => {
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
      <LogoComponent themeMode="light" />
      <SocialIcons themeMode="light" />
      <PowerButton />
      <ParticleComponent themeMode="light" />
      <SoundBar themeMode="light" />
      <LanguageButton themeMode="light" />

      <Main>
        <Grid container spacing={3} alignItems="stretch">
          {useSkillData().map((category) => (
            <Grid
              key={category.title}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{ display: "flex" }}
            >
              <SkillCard category={category} />
            </Grid>
          ))}
        </Grid>
      </Main>

      <BigTitle text="SKILLS" top="80%" right="30%" themeMode="light" />

      <Rotate ref={yinyang}>
        <YinYang width="100%" color="black" />
      </Rotate>
    </Wrapper>
  );
};
