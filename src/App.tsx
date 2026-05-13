import "./App.css";
import ActiveSectionContextProvider from "./context/active-section";
import ThemeContextProvider from "./context/theme";
import { SoundContextProvider } from "./context/sound";
import { Toaster } from "react-hot-toast";
import Loader from "./pages/loader";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import MissionLog from "./pages/mission-log";
import MissionLogPost from "./pages/mission-log-post";
import { AnimatePresence } from "framer-motion";
import SoundToggle from "./components/sound-toggle";

function SoundToggleGlobal() {

  const location = useLocation();
  if (location.pathname === "/") return null;
  return <SoundToggle />;
}

function App() {
  return (
    <BrowserRouter>
      <SoundContextProvider>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <AnimatePresence>
              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Loader  />} />
                <Route path="/home" element={<Home />} />
                <Route path="/log" element={<MissionLog />} />
                <Route path="/log/:slug" element={<MissionLogPost />} />
              </Routes>
            </AnimatePresence>
            <SoundToggleGlobal />
            <Toaster
              position="top-right"
              containerStyle={{ zIndex: 99999999999999 }}
              toastOptions={{
                style: {
                  background: '#060d1a',
                  color: '#d4e5f4',
                  border: '1px solid rgba(0,229,255,0.2)',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                },
              }}
            />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </SoundContextProvider>
    </BrowserRouter>
  );
}

export default App;

