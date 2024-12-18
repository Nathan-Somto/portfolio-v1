import { Variants, motion } from "framer-motion";
import React from "react";

type SectionHeadingProps = {
  text: string
  animate?: boolean;
  className?: string;
};

export default function SectionHeading({ text, className }: SectionHeadingProps) {
  const animation: Variants = {

    initial: { y: "100%" },

    enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })

  }
  return (
    <motion.h2 className={`lg:text-8xl md:text-7xl text-5xl font-medium capitalize lg:mb-20 md:mb-16 mb-12 lg:leading-[80px] text-center overflow-hidden py-1 , ${className && className}`}>
      {
        text.split(' ').map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            initial="initial"
            whileInView="enter"
            variants={animation}
            className="inline-block mr-2 md:mr-4 lg:mr-5 last:!mr-0"
          >
            {word + ' '}
          </motion.span>
        ))
      }
    </motion.h2>
  );
}