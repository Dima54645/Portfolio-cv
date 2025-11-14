import React from "react";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@mui/material";

import type { ThemeModeProps } from "../../types";
import { LanguageIcon, LanguageIconButton } from "./LanguageButton.styles";

export const LanguageButton: React.FC<ThemeModeProps> = ({
  themeMode = "light",
}) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
  };

  return (
    <Tooltip title={`Current: ${i18n.language.toUpperCase()}`} arrow>
      <LanguageIconButton
        onClick={toggleLanguage}
        size="large"
        themeMode={themeMode}
      >
        <LanguageIcon themeMode={themeMode} />
      </LanguageIconButton>
    </Tooltip>
  );
};
