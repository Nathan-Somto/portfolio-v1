import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Tools from "../components/tools";
import StarParticles from "../components/stars";
import { motion } from 'framer-motion'
import useBlobity from "blobity/lib/react/useBlobity";
import GithubStats from "../components/github-stats";
import React from "react";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import SpotifyStats from "../components/spotify-stats";
export default function Home() {
  React.useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.2,
      syncTouch: true,
      duration: 0.3
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useBlobity({
    color: '#fff',
    dotColor: '#444',
    dotSize: 7,
    zIndex: 300,
    focusableElementsOffsetX: 8,
    focusableElementsOffsetY: 3,
    licenseKey: 'opensource',
    magnetic: true,
    invert: true,
    mode: 'bouncy',
    radius: 15,
    focusableElements:
      "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
    fontSize: 14,
    size: 40,
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
        delay: 0.25,
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
