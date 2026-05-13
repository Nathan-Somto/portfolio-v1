import { Variants, motion } from "framer-motion";

type SectionHeadingProps = {
  text: string;
  label?: string;
  animate?: boolean;
  className?: string;
  textClassName?: string;
  textStyle?: React.CSSProperties;
};

export default function SectionHeading({ text, label, className, textClassName, textStyle }: SectionHeadingProps) {
  const animation: Variants = {
    initial: { y: "110%", opacity: 0 },
    enter: (i: number) => ({
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.06 * i,
      },
    }),
  };

  return (
    <div className={`mb-12 md:mb-16 lg:mb-20 overflow-visible ${className ?? ""}`}>
      {label && (
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-hud-cyan text-[10px] tracking-mission uppercase mb-3 block"
        >
          ◆ {label}
        </motion.p>
      )}
      <motion.h2
        aria-label={text}
        role="heading"
        className={`font-display text-[clamp(2.8rem,7vw,6.5rem)] uppercase tracking-wider leading-none text-ship-text pb-1 ${textClassName ?? ""}`}
        style={textStyle}
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="overflow-hidden inline-block mr-3 last:mr-0">
            {word}
           {/*  <motion.span
              custom={i}
              initial="initial"
              whileInView="enter"
              variants={animation}
              viewport={{ once: true }}
              className="inline-block"
            >
            </motion.span> */}
          </span>
        ))}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
        className="h-px bg-gradient-to-r from-hud-cyan/50 to-transparent mt-4"
      />
    </div>
  );
}
