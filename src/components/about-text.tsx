import React from 'react'
import Paragraph from './paragraph'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
interface AboutTextProps {
    index: number
    text: string
    len: number,
    title: string
    currentIndex: number
}
export default function AboutText({ index, len, text, title, currentIndex }: AboutTextProps) {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.95", "start 0.45"],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    return (
        <div
            ref={containerRef}
            key={index}
            style={{ zIndex: (index * 2) + 1 }}
            className={` md:text-left text-center ${index === len ? 'md:h-screen md:top-20 md:sticky' : 'md:h-screen md:sticky top-28'}  pt-5 bg-black`}
        >
            <motion.h3
                style={{ opacity }}
                transition={{ duration: 0.54, delay: 0.12 }}
                className="text-2xl font-bold mb-4">{title}</motion.h3>
            <Paragraph
                currentIndex={currentIndex}
                sectionIndex={index}
                paragraph={text}
                container={containerRef} />
        </div>
    )
}
