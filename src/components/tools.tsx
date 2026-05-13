import SectionHeading from "./section-heading";
import { toolsData } from "../data";
import { useSectionInView } from "../hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="tools"
      ref={ref}
      className="relative mb-28 px-6 sm:px-12 max-w-5xl mx-auto scroll-mt-28 sm:mb-40"
    >
      <SectionHeading text="Systems" label="04 — TECH STACK" />

      <ul className="flex flex-wrap gap-4">
        {toolsData.map((tool, index) => (
          <motion.li
            className="relative group"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.03 * index, duration: 0.4 }}
            data-blobity-tooltip={tool.tooltip}
            data-blobity-offset-x={3}
            data-blobity-offset-y={0}
            data-blobity-magnetic="false"
          >
            <div className="w-10 h-10 border border-space-700 group-hover:border-hud-cyan/40 bg-space-900 p-1.5 transition-colors duration-200">
              <img
                src={tool.icon}
                alt={`${tool.tooltip} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
