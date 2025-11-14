// src/pages/BlogPage.tsx
import React from "react";

import { LogoComponent } from "../../UI/LogoComponent";
import { SocialIcons } from "../../UI/SocialIcons";
import { PowerButton } from "../../UI/PowerButton";

import { SoundBar } from "../../UI/SoundBar";
import { LanguageButton } from "../../UI/LanguageButton";
import SnakeGame from "./Game/SnakeGame";
import { Center, Container, MainContainer } from "./GamePage.styled";
import { containerVariants } from "./GamePage.const";

// --- Component ---
export const GamePage: React.FC = () => {
  return (
    <MainContainer
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <LogoComponent themeMode="light" />
        <SocialIcons themeMode="light" />
        <PowerButton />
        <SoundBar themeMode="light" />
        <LanguageButton themeMode="light" />
        <Center>
          <SnakeGame />
        </Center>
      </Container>
    </MainContainer>
  );
};
