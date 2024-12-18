import { AnimatePresence, motion, Variants } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Loader() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const opacity: Variants = {
    initial: {
      opacity: 1
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 3,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 3,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 1.5
      }
    },
  }
  // stairs animation
  const stairs: Variants = {
    initial: {
      left: 0,
      width: 0
    },
    enter: (i) => ({
      width: '100vw',
      transition: {
        duration: 0.5,
        delay: 0.25 * i,
        ease: [0.22, 1, 0.36, 1]
      },
    }),
    exit: (i) => ({
      width: 0,
      left: '100vw',
      transition: {
        duration: 0.5,
        delay: 0.95 + (0.25 * i),
        ease: [0.22, 1, 0.36, 1]
      },

    })

  };
  const text = [
    'Developer,',
    'Sports aficionado,',
    'Film Theorist.'
  ]
  React.useEffect(() => {
    // set open to false after 3 seconds
    setTimeout(() => {
      setOpen(false)
    }, 3000)
    // after 6 seconds change to home screen
    setTimeout(() => {
      navigate('/home')
    }, 6000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <AnimatePresence>
      {
        open && (<motion.div
          variants={opacity}
          initial="initial"
          animate="enter"
          exit="exit"
          key={location.pathname}
          className="fixed inset-0 bg-black z-50 flex flex-col h-screen"
        //onAnimationComplete={() => navigate("/home")}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} custom={i}
              style={{ height: "calc(100vh/6)" }}
              variants={stairs} className="bg-white w-full relative" />
          ))}
          <motion.div
            className="absolute top-1/2 overflow-hidden h-[50px] justify-center  flex items-center left-1/2 transform w-full text-center -translate-x-1/2 -translate-y-1/2"
          >
            {text.map((t, i) => (
              <motion.div
                key={i}
                className="text-black text-lg md:text-xl lg:text-3xl font-bold mx-1 lg:mx-2"
                initial={{ y: 100, skewY: -25 }}
                animate={{
                  y: 0, skewY: 0,
                  transition: {
                    duration: 0.5,
                    delay: 1.5 + i * 0.25,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
                exit={{
                  y: -120, skewY: 30,
                  transition: {
                    duration: 0.45,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
              >
                {t}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>)
      }
    </AnimatePresence>
  );
}
