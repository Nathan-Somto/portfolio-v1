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
      className="group mb-5 lg:mb-10 last:mb-0 "
    >
      <section className="bg-gray-100 gap-y-12 lg:gap-y-0 gap-x-0 lg:gap-x-6 grid lg:grid-cols-2 max-w-4xl border border-black/20 rounded-lg overflow-hidden lg:px-8 py-7 px-5 lg:py-12 relative min-h-[24rem]  transition   bg-white/10 hover:bg-white/20 mx-auto">
        <div className="justify-start  flex flex-col h-full">
          <div className={`flex gap-x-3 lg:gap-x-5 mb-5 lg:mb-10 ${index % 2 != 1 ? 'justify-end' : ''}`}>

            {comingSoon || link === null ? (
              <a className=" flex rounded-xl items-center text-gray-950  bg-white px-2 lg:px-3 text-[0.8rem] lg:text-[0.9rem] font-medium">
                Coming soon
              </a>
            ) : <a
              href={link}
              target="_blank"
              className="bg-gray-400 rounded-full z-[10] flex items-center justify-center h-10 w-10 lg:h-14 lg:w-14"
            >
              <FaLink size="28" className="text-gray-950 lg:h-7 lg:w-7 w-5 h-5" />
            </a>
            }
            <a
              href={github}
              target="_blank"
              className="bg-gray-400 rounded-full z-[10] flex items-center justify-center h-10 w-10 lg:h-14 lg:w-14"
            >
              <FaGithub className="text-gray-950 lg:h-7 lg:w-7 w-5 h-5" />
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
            className="mt-2 leading-relaxed  w-11/12 lg:w-full text-white/70"
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
                className="bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white/70"
                key={index}
              >
                {tag}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <figure className={`block  lg:mb-8 relative group/image h-full  self-end max-h-[25rem]  w-[95%] max-w-lg lg:w-full  lg:max-w-[28.25rem] rounded-lg 
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3 ${index % 2 != 1 ? 'order-first lg:mr-8' : ''}`}>
          <img
            id={`${title}-image`}
            src={imageUrl}
            alt={`${title} preview`}
            className={'h-full w-full object-contain  object-center'}
          />
        </figure>
      </section>
    </motion.div>
  );
}
