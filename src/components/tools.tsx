import SectionHeading from "./section-heading";
import { toolsData } from "../data";
import { useSectionInView } from "../hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="tools"
      ref={ref}
      className="mb-28 px-12 max-w-3xl mx-auto sticky top-20 scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading text="Tools" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {toolsData.map((tool, index) => (
          <motion.li
            className="size-6"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            data-blobity-tooltip={tool.tooltip}
            data-blobity-offset-x={3}
            data-blobity-offset-y={0}
            data-blobity-magnetic="false"
          >
            <img src={tool.icon} alt={`${tool.tooltip} logo`} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}