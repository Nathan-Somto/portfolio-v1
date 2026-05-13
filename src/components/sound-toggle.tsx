import { motion } from "framer-motion";
import { useSoundContext } from "../context/sound";

export default function SoundToggle() {
  const { soundEnabled, toggle } = useSoundContext();

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-4 z-[99998] flex items-center gap-1.5 font-mono text-[10px] tracking-mission uppercase bg-space-900/80 backdrop-blur-md border border-hud-cyan/30 px-3 py-1.5 transition-colors hover:bg-hud-dim/60 cursor-pointer"
      data-blobity-invert="false"
      data-blobity-magnetic="false"
      aria-label={soundEnabled ? "Mute sounds" : "Enable sounds"}
      title={soundEnabled ? "Mute sounds" : "Enable sounds"}
    >
      <motion.span
        animate={soundEnabled ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
        transition={soundEnabled ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" } : {}}
        className={soundEnabled ? "text-hud-cyan" : "text-ship-faint"}
      >
        {soundEnabled ? "◈" : "◇"}
      </motion.span>
      <span className={soundEnabled ? "text-hud-cyan" : "text-ship-muted"}>
        SND {soundEnabled ? "ON" : "OFF"}
      </span>
    </motion.button>
  );
}
