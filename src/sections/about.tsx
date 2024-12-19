import SectionHeading from "../components/section-heading";
import { motion, useScroll, useMotionValue, useMotionValueEvent } from "framer-motion";
import { info } from "../data";
import React from "react";
import AboutText from "../components/about-text";


export default function About() {
  const containerRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end 0.15"],
  });
  const backgroundColour = useMotionValue('rgb(0 0 0 0.3)');
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionHeight = 1 / info.length;
    const index = Math.floor(latest / sectionHeight);
    //console.log("the index: ", index);
    if (index !== currentIndex) {
      setCurrentIndex(Math.max(0, Math.min(index, info.length - 1)));
    }
    if (latest > window.innerHeight * 1.3) {
      backgroundColour.set('rgb(0 0 0)');
    }
    if (latest <= window.innerHeight * 1.3) {
      backgroundColour.set('rgb(0 0 0 0.3)');
    }
  });
  return (
    <motion.section
      style={{ backgroundColor: backgroundColour }}
      ref={containerRef}
      className="relative mb-32 w-full pt-10 z-[8] text-center bg-black  leading-8"
      id="about"
      transition={{ duration: 0.45, ease: 'easeIn' }}
    >
      <SectionHeading
        text='Who Am I?'
        animate={false}
      />
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, delay: 0.15 }}
        /*  viewport={{ amount: 'all' }} */
        className="flex flex-col md:flex-row z-[4] relative max-w-4xl mx-auto gap-10 mt-40">
        {/* Image Section */}
        <div className="md:sticky hidden md:block overflow-hidden  md:top-28 flex-shrink-0 w-72 h-72">
          <motion.img
            key={currentIndex === 0 || currentIndex === 1 ? 0 : currentIndex}
            src={info[currentIndex]?.image}
            alt={info[currentIndex]?.title}
            className="object-contain w-full h-full rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="flex flex-col gap-10 md:gap-0">
          {info.map(({ title, text, image }, index) => (
            <React.Fragment
              key={text + title}
            >
              {
                index != 1 && (
                  <motion.img
                    src={image}
                    alt={title}
                    className="object-contain w-60 h-60 mx-auto md:hidden block"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.12 }}
                  />
                )
              }
              <AboutText
                currentIndex={currentIndex}
                index={index}
                len={info.length - 1}
                text={text}
                title={title}
              />
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
