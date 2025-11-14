import React from "react";
import { useMediaQuery } from "@mui/material";

import type { ThemeModeProps } from "../../types";
import { LogoText, LogoWrapper } from "./LogoComponent.styles";

export const LogoComponent: React.FC<ThemeModeProps> = ({
  themeMode = "light",
}) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return (
    <LogoWrapper isSmallScreen={isSmallScreen}>
      <LogoText variant="h4" themeMode={themeMode}>
        ДЧ
      </LogoText>
    </LogoWrapper>
  );
};
