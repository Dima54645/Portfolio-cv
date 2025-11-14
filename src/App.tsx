import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { AppGlobalStyles } from "./globalStyles";
import { MainPage } from "./pages/MainPage";
import { LoaderScreen } from "./UI/LoaderScreen";
import { useState } from "react";
import { ExperiencePage } from "./pages/ExperiencePage";
import { SoundProvider } from "./сontext/SoundContext/SoundContext";
import { AboutPage } from "./pages/AboutPage";
import { GamePage } from "./pages/GamePage";
import { MySkillsPage } from "./pages/MySkillsPage";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  return (
    <SoundProvider>
      <AppGlobalStyles />
      <>
        {loading && <LoaderScreen onFinish={() => setLoading(false)} />}
        {!loading && (
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<MainPage />} />
              <Route path="/aboutPage" element={<AboutPage />} />
              <Route path="/gamePage" element={<GamePage />} />
              <Route path="/experiencePage" element={<ExperiencePage />} />
              <Route path="/skillsPage" element={<MySkillsPage />} />
              <Route path="*" element={<MainPage />} />
            </Routes>
          </AnimatePresence>
        )}
      </>
    </SoundProvider>
  );
};

export default App;
