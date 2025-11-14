import React from "react";
import {
  SocialContainer,
  MotionBox,
  VerticalLine,
  SocialLink,
} from "./SocialIcons.styles";

import type { ThemeModeProps } from "../../types";
import { icons } from "./SocialIcons.const";

export const SocialIcons: React.FC<ThemeModeProps> = ({
  themeMode = "light",
}) => {
  const iconColor = themeMode === "dark" ? "white" : "black";

  return (
    <SocialContainer>
      {icons.map(({ Icon, href, delay }, index) => (
        <MotionBox
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 0.8,
            delay,
          }}
        >
          <SocialLink
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: iconColor }}
          >
            <Icon sx={{ fontSize: 25 }} />
          </SocialLink>
        </MotionBox>
      ))}

      <VerticalLine
        sx={{ backgroundColor: iconColor }}
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </SocialContainer>
  );
};
