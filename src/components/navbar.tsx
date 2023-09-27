import { motion } from "framer-motion";
import { links } from "../data";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
      <nav className="flex 
        fixed
        left-1/2 
        h-14
        w-full  
        border 
        border-white border-opacity-40 bg-white
         bg-opacity-80 top-0
         rounded-none  
         shadow-lg shadow-black/[0.04] backdrop-blur-[0.5rem] 
         sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
          dark:bg-gray-950 dark:border-black/40
           dark:bg-opacity-75  
           sm:text-base
           text-sm  
           -translate-x-1/2 py-2 sm:px-4 z-[99999]  sm:py-0">
        <ul className="flex w-full justify-evenly  flex-wrap items-center sm:justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500  sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <a
                className={clsx(
                  "flex w-full items-center justify-center px-[0.35rem] sm:px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-white":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
  );
}
