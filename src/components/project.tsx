import { projectsData } from "../data";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  github,
  comingSoon,
  index,
}: ProjectProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
      viewport={{ once: true }}
      className="hud-bracket group mb-8 lg:mb-12 last:mb-0"
    >
      <div className="relative bg-space-900 border border-space-700 hover:border-hud-cyan/30 transition-colors duration-300 overflow-hidden grid lg:grid-cols-2 gap-0 max-w-5xl mx-auto">
        {/* Grid overlay */}
        <div className="absolute inset-0 hud-grid opacity-50 pointer-events-none" />

        {/* Left — info panel */}
        <div className="relative z-10 p-6 lg:p-10 flex flex-col justify-between min-h-[22rem]">
          {/* Designation */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[10px] tracking-mission uppercase text-hud-cyan/60">
              MISSION-{num}
            </span>
            <div className="flex gap-2">
              {comingSoon ? (
                <span className="font-mono text-[9px] tracking-hud uppercase border border-ship-faint text-ship-faint px-2 py-1">
                  COMING SOON
                </span>
              ) : link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-space-600 hover:border-hud-cyan/50 text-ship-muted hover:text-hud-cyan transition-colors p-2"
                  aria-label="Live site"
                >
                  <FaLink className="h-3 w-3" />
                </a>
              ) : null}
              {
                github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-space-600 hover:border-hud-cyan/50 text-ship-muted hover:text-hud-cyan transition-colors p-2"
                aria-label="GitHub repository"
              >
                <FaGithub className="h-3 w-3" />
              </a>
                )
              }
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-wider text-ship-text mb-3 group-hover:text-hud-cyan transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-ship-muted text-sm leading-relaxed mb-6 flex-1">
            {description}
          </p>

          {/* Tags */}
          <ul className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="font-mono text-[9px] tracking-hud uppercase px-2 py-1 bg-space-800 text-ship-faint border border-space-700"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — image panel */}
        <div className="relative overflow-hidden min-h-[16rem] lg:min-h-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-space-900 via-space-900/60 to-transparent lg:via-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
