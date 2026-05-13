import { motion } from "framer-motion";

interface IntroVeilProps {
  onDone: () => void;
}

export default function IntroVeil({ onDone }: IntroVeilProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-white pointer-events-none z-[49]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={onDone}
    />
  );
}
