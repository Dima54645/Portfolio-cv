import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

const float = keyframes`
  0% { transform: translateY(-10px); }
  50% { transform: translateY(15px) translateX(15px); }
  100% { transform: translateY(-10px); }
`;

export const StyledBox = styled(Box)(() => ({
  backgroundColor: "#0d0d0d",
  width: "100vw",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
}));

export const Spaceman = styled("div")(() => ({
  position: "absolute",
  top: "10%",
  right: "5%",
  width: "20vw",
  animation: `${float} 4s ease-in-out infinite`,
  "& img": {
    width: "100%",
    height: "auto",
  },
}));

export const Main = styled("div")(() => ({
  border: `2px solid white`,
  color: "white",
  padding: "1.7rem",
  width: "60vw",
  height: "60vh",
  zIndex: 3,
  lineHeight: 1.5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "calc(0.5rem + 1vw)",
  backdropFilter: "blur(4px)",
  position: "absolute",
  left: "calc(5rem + 5vw)",
  top: "10rem",
  fontFamily: '"Ubuntu Mono", monospace',
  fontStyle: "italic",
}));
