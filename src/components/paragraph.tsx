import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React from "react";
interface ParagraphProps {
    paragraph: string;
    //container: React.RefObject<HTMLDivElement | null>;
    currentIndex: number
    sectionIndex: number
}
export default function Paragraph({ paragraph, currentIndex, sectionIndex }: ParagraphProps) {
    // console.log("the container is", container);
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        //container,
        offset: ["start 0.9", "start 0.32"],
    });
    // console.log("the scrollYProgress is", scrollY);
    const words = paragraph.split(" ");
    return (
        <p ref={ref} className="flex relative flex-wrap mx-auto md:mx-0 justify-center text-center md:text-left md:justify-start text-lg leading-none max-w-2xl">
            {words.map((word, i) => {
                const start = i / words.length;
                const end = (start + 1 / words.length);
                //console.log(`for word : ${word} index : ${i} start : ${start} end: ${end}`)
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
        <span className="relative mr-2 mt-3">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity }} /* transition={{
                duration: 0.35,
                delay: 0.1,
                ease: 'easeIn'
            }} */>{children}</motion.span>
        </span>
    );
}
