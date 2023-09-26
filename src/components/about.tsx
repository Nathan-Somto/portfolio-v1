import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       
       
        <span className="italic"> Hi there 👋,  </span>  
        I'm Somto but you could call me Nathan,
        Front-end engineer with a solid background in current web technologies
        such as . <span className="font-medium">
        React, JavaScript, TypeScript, Tailwind CSS and Next.js
        </span> I also
        build mobile apps too with <span className="font-medium">React Native</span>. My love for web development
        started in the year 2021 when i first signed up on a little bird app
        called twitter or x. The way the interface was structured just made me
        fall in love. I wanted to know how to build such a thing, so after a few
        years of self learning i believe i am on track. If you love my passion
        why don't we connect and build something great together.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
