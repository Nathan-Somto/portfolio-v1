import "./App.css";
import ActiveSectionContextProvider from "./context/active-section";
import ThemeContextProvider from "./context/theme";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { Toaster } from "react-hot-toast";
import SectionDivider from "./components/section-divider";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import ThemeSwitch from './components/theme-switch';
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      <ThemeContextProvider>
        <ActiveSectionContextProvider>
        <>
          <Navbar />
          <main  className="flex flex-col items-center px-4 pt-[100px]">
            <Hero />
            <SectionDivider/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
          </main>
           <Footer />

          <Toaster position="top-right" />
          <ThemeSwitch />
        </>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
