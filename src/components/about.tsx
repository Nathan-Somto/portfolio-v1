import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/";
import Arsenal from "../assets/arsenal.svg";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.025, duration: 0.35 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeIn", delay: 0.25 }}
        className="mb-5"
      >
        <span className="italic"> Hi there 👋, </span>
        I'm Somto but you could call me Nathan, Front-end engineer with a solid
        background in current web technologies such as: {" "}
        <span className="font-medium">
          React, JavaScript, TypeScript, Tailwind CSS and Next.js
        </span>{" "}
        I also build mobile apps too with{" "}
        <span className="font-medium">React Native.</span>
      </motion.p>
      <motion.p
        className="mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeIn", delay: 0.45 }}
      >
        My love for web development started in the{" "}
        <span className="font-medium">year 2021</span> when i first signed up on
        a little bird app called <span className="font-medium">twitter(x).</span> The
        way the interface was structured just made me fall in love. I wanted to
        know how to build such a thing, so after a few years of self learning i
        believe i am on track. If you love my passion why don't we connect and
        build something great together.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeIn", delay: 0.65 }}
      >
        <span className="italic">When I'm not coding, </span>
        you can find me watching{" "}
        <span className="font-medium">
          {" "}
          sport games or analyzing film theory.{" "}
        </span>{" "}
        I am also a Die hard Arsenal Fan{" "}
        <img
          src={Arsenal}
          alt="arsenal logo"
          className="h-6 w-6 inline-block"
        />
        <a href="#contact" className="font-semibold underline">
          {" "}
          Let's connect{" "}
        </a>{" "}
        and collaborate on some exciting projects together!
      </motion.p>
    </motion.section>
  );
}
