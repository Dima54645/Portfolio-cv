import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";

import { PowerBtn } from "../AllSvgs/AllSvgs";
import { PowerButtonContainer } from "./PowerButton.styles";

export const PowerButton: React.FC = () => {
  return (
    <PowerButtonContainer>
      <IconButton component={NavLink} to="/" sx={{ p: 0 }}>
        <PowerBtn width={30} height={30} style={{ color: "black" }} />
      </IconButton>
    </PowerButtonContainer>
  );
};
