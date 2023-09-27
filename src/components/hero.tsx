import { Variants, motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "../hooks";
import { useActiveSectionContext } from "../context/active-section";
import ProfileImg from "../assets/profile_image.jpeg"
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.13,
        delayChildren:0.2,
        duration:0.65
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 200 },
    show: { opacity: 1, y: 0 , transition:{
      duration:0.85,
      ease:'easeIn'
    }}
  }
  return (
    <motion.section
      variants={container}
      initial={'hidden'}
      animate={'show'}
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center  sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.65,
              delay:0.35
            }}
          >
            <img
              src={ProfileImg}
              alt="Somtochi Mkparu"
              className="sm:h-48 sm:w-48 h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0  block text-4xl sm:text-5xl"
            initial={{rotate: 0 }}
            animate={{ rotate: [0,60,0] }}
            transition={{
              delay: 1.2,
              duration: 0.7,
              ease:'easeIn'
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        variants={item}
      >
        <span className="font-bold">Hello, I'm Somto</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> I love
        building <span className="italic">websites & mobile apps</span>. My primary focus is{" "}
        <span className="underline">React</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        variants={item}
      >
        <a
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/somtochi-mkparu-elnathan/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Nathan-Somto"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </motion.section>
  );
}