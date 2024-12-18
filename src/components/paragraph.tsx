import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React from "react";
interface ParagraphProps {
    paragraph: string;
    container: React.RefObject<HTMLDivElement | null>;
    currentIndex: number
    sectionIndex: number
}
export default function Paragraph({ paragraph, container, currentIndex, sectionIndex }: ParagraphProps) {
    // console.log("the container is", container);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.95", "start 0.25"],
    });
    // console.log("the scrollYProgress is", scrollY);
    const words = paragraph.split(" ");
    return (
        <p className="flex flex-wrap justify-center text-center md:text-left md:justify-start text-lg leading-none max-w-2xl text-white">
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                const isActive = currentIndex === sectionIndex;
                return (
                    <Word key={i} isActive={isActive} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}

interface WordProps {
    children: string;
    progress: MotionValue<number>;
    range: number[];
    isActive: boolean;
}
function Word({ children, progress, range, isActive }: WordProps) {
    const opacity = useTransform(progress, range, isActive ? [0, 1] : [0, 0]);
    return (
        <span className="relative mr-3 mt-3">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity }} transition={{
                duration: 0.35,
                delay: 0.1,
                ease: 'easeIn'
            }}>{children}</motion.span>
        </span>
    );
}
