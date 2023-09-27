import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 my-24 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{  height: 0 }}
      whileInView={{ height: 64 }}
      transition={{ delay: 0.25, duration:0.55 }}
      viewport={{once:true}}
    ></motion.div>
  );
}