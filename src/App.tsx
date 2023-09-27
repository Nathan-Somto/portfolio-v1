import "./App.css";
import ActiveSectionContextProvider from "./context/active-section";
import ThemeContextProvider from "./context/theme";
import { Toaster } from "react-hot-toast";
import Loader from "./components/loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
function App() {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Loader />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
          <Toaster position="top-right" />
        </>
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
