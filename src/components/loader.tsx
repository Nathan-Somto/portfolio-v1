import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Loader() {
    const navigate = useNavigate();
  return (
    <motion.div
      initial={{  height:"100%", opacity:1 }}
      animate={{ height:"0%", opacity:0 }}
      transition={{ duration: 0.45, delay: 3.5, ease:"easeIn" }}
      onAnimationComplete={() => navigate('/home')}
      className="inset-0 grid place-items-center overflow-hidden fixed text-2xl  z-[99999]   bg-gray-50 h-full w-full backdrop-blur-md"
    >
      <motion.div
        initial={{ height: "0%", borderRadius: 8, width: "0%" }}
        animate={{
           height: ["0%", "15%", "30%", "50%", "100%"],
          width: ["0%", "15%", "50%", "50%", "100%" ],
          borderRadius: ["2%", "8%", "8%", "10%", "0%"]
        }}
        transition={{
          duration: 2.5,
          ease: "easeIn",
          times: [0.1, 0.2, 0.35, 0.6, 1] ,
        }}
        className="h-8 bg-gray-800 overflow-hidden flex items-center justify-center"
      >
        <motion.p
          initial={{ opacity: 0, color: "#efefef" }}
          animate={{ opacity: 1, color: "#fff" }}
          transition={{ delay: 2.5, duration: 0.5, ease:"easeIn" }}
          className="text-[30px]  md:text-[60px]"
        >
          Hi, There
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
