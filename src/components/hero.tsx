import { useScroll, useTransform } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'
import profilePic from '../assets/userpic.jpg'
import { useSectionInView } from '../hooks'
export default function Header() {
  const { ref } = useSectionInView('Home')
  const targetRef = React.useRef<HTMLBodyElement | null>(null)
  const { scrollY } = useScroll({
    offset: ['start end', 'end start'],
    target: targetRef,
  })
  const containerY = useTransform(scrollY, [0, 300], ['0%', '35%'])
  const brightnessValue = useTransform(scrollY, [0, 350], [1, 0.12]);
  const containerScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const textX = useTransform(scrollY, [0, 250], ['0%', '-150%']);
  const figureHeight = useTransform(scrollY, [0, 250], [350, window.innerHeight]);
  const figureWidth = useTransform(scrollY, [0, 250], [300, window.innerWidth]);
  return (
    <div id="home" className=' ' ref={ref}>
      <motion.header
        style={{
          y: containerY,
          opacity: brightnessValue,
          scale: containerScale,
          willChange: 'transform filter',
        }}
        className=' px-2  h-screen z-[10] top-0  bg-[#202020] pt-20 relative w-full text-white justify-between flex flex-col overflow-hidden'>
        <div className="bg-[#202020]/30 backdrop-blur-lg absolute inset-0 pointer-events-auto z-[2] h-full w-full"></div>
        <motion.h2
          data-blobity-radius={70}
          data-blobity-size={100}
          style={{
            x: textX,
            willChange: 'transform'
          }} className='uppercase text-[clamp(2rem,10vw,10rem)] text-center  flex-shrink-0 absolute top-20 font-medium tracking-tighter w-full z-[10] whitespace-nowrap'>Nathan Somto</motion.h2>
        <motion.figure style={{
          height: figureHeight,
          width: figureWidth,
        }}
          data-blobity-tooltip="Agba Dev"
          data-blobity-offset-x={20}
          data-blobity-offset-y={4}
          className=' h-[300px] w-[250px] lg:h-[400px] lg:w-[300px] object-cover rounded-md absolute top-40  grayscale hover:grayscale-0 ease-in transition-all overflow-hidden inset-x-0 mx-auto z-[8]'>
          <img
            src={profilePic}
            alt="Nathan Somto"
            className='w-full h-full object-cover absolute object-center'

          />
          <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-[9]"></div>
        </motion.figure>
        <div className="flex flex-col z-[3] absolute bottom-0 text-left lg:flex-row lg:justify-between items-center h-20 w-full px-4">
          <p className="text-sm sm:text-lg font-light">Full-Stack Developer based in Lagos, Nigeria.</p>
          <p className="text-sm sm:text-lg font-light">Focuses on web and mobile applications</p>
        </div>
      </motion.header>
    </div>
  )
}
