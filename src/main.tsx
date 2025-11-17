import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./i18next.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/Portfolio-cv">
      <App />
    </BrowserRouter>
  </StrictMode>
);
