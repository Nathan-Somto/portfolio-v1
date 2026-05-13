import { socials } from "../data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-space-700 bg-space-950 px-6 sm:px-16 py-12">
      {/* Grid overlay */}
      <div className="absolute inset-0 hud-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-8">
        {/* Left — identity */}
        <div>
          <p className="font-mono text-hud-cyan text-[10px] tracking-mission uppercase mb-2">◆ NS-001</p>
          <p className="font-display text-2xl uppercase tracking-wider text-ship-text">
            Nathan Somto
          </p>
          <p className="font-mono text-ship-muted text-xs tracking-hud mt-1">
            Full-Stack · AI Automation · DevOps
          </p>
        </div>

        {/* Centre — socials */}
        <div className="flex gap-5">
          {socials.map(({ icon: Icon, link, tooltip }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-ship-faint hover:text-hud-cyan transition-colors"
              data-blobity-tooltip={tooltip}
              data-blobity-offset-x={0}
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>

        {/* Right — copyright */}
        <p className="font-mono text-ship-faint text-[10px] tracking-hud uppercase">
          &copy; {new Date().getFullYear()} Mkparu Somtochi
        </p>
      </div>
    </footer>
  );
}
