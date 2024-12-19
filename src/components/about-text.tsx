import React from 'react'
import Paragraph from './paragraph'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
interface AboutTextProps {
    index: number
    text: string
    len: number,
    title: string
    currentIndex: number,
}
export default function AboutText({ index, len, text, title, currentIndex }: AboutTextProps) {
    const targetRef = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start 0.7", 'start start'],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [0.05, 1])
    return (
        <div
            key={index}
            ref={targetRef}
            style={{ zIndex: (index * 2) + 1 }}
            className={`md:min-h-[50vh] md:text-left md:bg-gradient-to-b md:via-transparent md:px-6 md:from-[#060606] md:to-black/10  bg-black text-center ${index === len ? 'md:!pt-10 md:!top-20 md:z-[12]' : ' md:sticky  top-28'}  pt-5 `}
        >
            <h3
                className="text-2xl font-bold mb-4 relative flex justify-center text-center md:text-left md:justify-start">
                <motion.span style={{ opacity }}>{title}</motion.span>
                <span className="absolute opacity-5">{title}</span>
            </h3>
            <Paragraph
                currentIndex={currentIndex}
                sectionIndex={index}
                paragraph={text}
            />
        </div>
    )
}
