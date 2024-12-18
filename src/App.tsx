import "./App.css";
import ActiveSectionContextProvider from "./context/active-section";
import ThemeContextProvider from "./context/theme";
import { Toaster } from "react-hot-toast";
import Loader from "./components/loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <AnimatePresence >
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Loader />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </AnimatePresence>
          <Toaster position="top-right" containerStyle={{
            zIndex: 99999999999999
          }} />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
