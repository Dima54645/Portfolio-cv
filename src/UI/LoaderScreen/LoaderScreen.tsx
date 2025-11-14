import React, { useEffect, useState } from "react";

import { YinYang } from "../AllSvgs/AllSvgs";
import type { LoaderScreenProps } from "./LoaderScreen.types";
import {
  LoaderContent,
  LoaderWrapper,
  NameText,
  ProgressText,
  ProgressWrapper,
  Spinner,
  StyledLinearProgress,
  Subtitle,
} from "./LoaderScreen.styles";
import { useTranslation } from "react-i18next";

export const LoaderScreen: React.FC<LoaderScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 400);
          setTimeout(() => onFinish?.(), 1400);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <LoaderWrapper
      animate={{
        y: isLoaded ? "-100vh" : "0vh",
        opacity: isLoaded ? 0 : 1,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <LoaderContent>
        <NameText variant="h4">{t("loader.name")}</NameText>
        <Subtitle variant="subtitle1">{t("loader.role")}</Subtitle>

        <ProgressWrapper>
          <StyledLinearProgress variant="determinate" value={progress} />
          <ProgressText variant="body2">{progress}%</ProgressText>
        </ProgressWrapper>

        <Spinner
          animate={
            isLoaded ? { scale: [1, 1.1, 1], rotate: 0 } : { rotate: 360 }
          }
          transition={
            isLoaded
              ? { duration: 0.6, ease: "easeInOut" }
              : { repeat: Infinity, duration: 1.5, ease: "linear" }
          }
        >
          <YinYang width="100%" height="100%" fill="#fff" />
        </Spinner>
      </LoaderContent>
    </LoaderWrapper>
  );
};
