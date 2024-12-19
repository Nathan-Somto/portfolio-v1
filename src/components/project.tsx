import { projectsData } from "../data";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  github,
  comingSoon,
  index,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.65, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="group mb-5 md:mb-10 last:mb-0 "
    >
      <section className="bg-gray-100 gap-y-12 md:gap-y-0 gap-x-0 md:gap-x-6 grid md:grid-cols-2 max-w-4xl border border-black/20 rounded-lg overflow-hidden md:px-8 py-7 px-5 md:py-12 relative min-h-[24rem] hover:bg-gray-200 transition  dark:text-white bg-white/10 hover:bg-white/20 mx-auto">
        <div className="justify-start  flex flex-col h-full">
          <div className={`flex gap-x-3 md:gap-x-5 mb-5 md:mb-10 ${index % 2 != 1 ? 'justify-end' : ''}`}>

            {comingSoon ? (
              <a className=" flex rounded-xl items-center text-gray-950  bg-white px-2 md:px-5 md:py-1.5 lg:px-6 lg:py-2">
                <h3 className="text-md md:text-[15.5px] ">
                  Coming soon
                </h3>
              </a>
            ) : <a
              href={link ?? ''}
              target="_blank"
              className="bg-gray-400 rounded-full z-[10] flex items-center justify-center h-10 w-10 md:h-14 md:w-14"
            >
              <FaLink size="28" className="text-gray-950 md:h-7 md:w-7 w-5 h-5" />
            </a>
            }
            <a
              href={github ?? ''}
              target="_blank"
              className="bg-gray-400 rounded-full z-[10] flex items-center justify-center h-10 w-10 md:h-14 md:w-14"
            >
              <FaGithub className="text-gray-950 md:h-7 md:w-7 w-5 h-5" />
            </a>
          </div>
          <motion.h3
            className="text-2xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="mt-2 leading-relaxed text-gray-700 w-11/12 md:w-full dark:text-white/70"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          <motion.ul
            className="flex flex-wrap mt-5 gap-2"
          >
            {tags.map((tag, index) => (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (0.13 * index),
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <img
          src={imageUrl}
          alt={`${title} preview`}
          className={`block  md:mb-8  overflow-hidden  self-end max-h-[25rem] object-contain object-center w-[95%] max-w-lg md:w-full  md:max-w-[28.25rem] rounded-lg 
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3 ${index % 2 != 1 ? 'order-first md:mr-8' : ''}`}
        />
      </section>
    </motion.div>
  );
}
