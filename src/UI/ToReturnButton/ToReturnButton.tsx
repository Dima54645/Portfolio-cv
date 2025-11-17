import React from "react";
import { NavLink } from "react-router-dom";

import { ToReturnIcon, ToReturnIconButton } from "./ToReturnButton.styles";
import type { ThemeModeProps } from "../../types";

export const ToReturnButton: React.FC<ThemeModeProps> = ({
  themeMode = "light",
}) => {
  return (
    <ToReturnIconButton
      component={NavLink}
      to="/"
      size="large"
      themeMode={themeMode}
    >
      <ToReturnIcon themeMode={themeMode} />
    </ToReturnIconButton>
  );
};
