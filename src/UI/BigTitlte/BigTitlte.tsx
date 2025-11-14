import React from "react";
import type { BigTitleProps } from "./BigTitlte.types";
import { StyledTitle } from "./BigTitlte.styles";

export const BigTitle: React.FC<BigTitleProps> = ({
  text,
  top,
  left,
  right,
  themeMode = "dark",
}) => {
  return (
    <StyledTitle top={top} left={left} right={right} themeMode={themeMode}>
      {text}
    </StyledTitle>
  );
};
