import About from "../sections/about";
import Contact from "../sections/contact";
import Experience from "../sections/experience";
import Footer from "../components/footer";
import Hero from "../sections/hero";
import Navbar from "../components/navbar";
import Projects from "../sections/projects";
import Tools from "../components/tools";
import StarParticles from "../components/stars";
import { motion } from 'framer-motion'
import useBlobity from "blobity/lib/react/useBlobity";
import GithubStats from "../sections/github-stats";
import React from "react";
import SpotifyStats from "../sections/spotify-stats";
export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useBlobity({
    color: '#fff',
    dotColor: '#555',
    dotSize: 10,
    zIndex: 5000000,
    focusableElementsOffsetX: 5,
    focusableElementsOffsetY: 3,
    licenseKey: 'opensource',
    magnetic: true,
    invert: true,
    mode: 'bouncy',
    radius: 25,
    focusableElements:
      "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
    fontSize: 14,
    size: 40,
    kineticMorphing: true
  })
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 0.65,
        ease: 'easeIn'
      }}
    >
      <StarParticles />
      <Navbar />
      <Hero />
      <main>
        <About />
        <Projects />
        <Experience />
        <Tools />
        <GithubStats />
        <SpotifyStats />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
