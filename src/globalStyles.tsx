import React from "react";
import { GlobalStyles } from "@mui/material";

export const AppGlobalStyles: React.FC = () => {
  return (
    <GlobalStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        "*::before": {
          boxSizing: "inherit",
        },
        "*::after": {
          boxSizing: "inherit",
        },
        "h1, h2, h3, h4, h5, h6": {
          display: "inline-block",
          margin: 0,
          padding: 0,
        },
        body: {
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "scroll",
          scrollbarGutter: "stable",
          fontFamily: "'Source Sans Pro', sans-serif",
          transition: "background-color 0.3s ease, color 0.3s ease",
        },
      }}
    />
  );
};
