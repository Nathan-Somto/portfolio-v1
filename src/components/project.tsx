import { projectsData } from "../data";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  index,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.65, ease: "easeIn" }}
      viewport={{once:true}}
      className="group mb-5 sm:mb-6 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative min-h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 w-11/12 sm:w-full dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-5 gap-2 ">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={imageUrl}
          alt="Project I worked on"
          className="sm:absolute block max-h-[20rem] object-contain bottom-0 sm:top-8 sm:bottom-0 w-[20rem] -right-40 sm:w-[28.25rem] rounded-t-lg 
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
        <a
          href={link}
          target="_blank"
          className="bg-gray-300 rounded-full absolute top-6 right-6 z-[10] flex items-center justify-center h-10 w-10"
        >
          <FaLink size="20" className="text-gray-900" />
        </a>
      </section>
    </motion.div>
  );
}
