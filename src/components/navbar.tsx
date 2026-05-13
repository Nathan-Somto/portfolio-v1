import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section";
import { navLinks, resumeUrl } from "../data";
import type { SectionName } from "../context/active-section";
import { useSoundContext } from "../context/sound";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const { play } = useSoundContext();

  return (
    <nav className="fixed top-0 inset-x-0 z-[99999] bg-space-950/80 backdrop-blur-md border-b border-hud-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
        {/* Ship designation */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-hud-cyan text-[10px] tracking-mission uppercase hidden sm:block animate-pulse-hud"
        >
          ◆ NS-001
        </motion.span>

        {/* Navigation links */}
        <ul className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map(({ name, hash, isRoute }, i) => {
            const isActive = isRoute
              ? location.pathname.startsWith(hash)
              : activeSection === name;

            return (
              <motion.li
                key={name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
              >
                {isRoute ? (
                  <Link
                    to={hash}
                    onClick={() => play("click")}
                    className={clsx(
                      "relative font-mono text-[10px] sm:text-[11px] tracking-hud uppercase px-2 sm:px-3 py-2 transition-colors block",
                      isActive
                        ? "text-hud-cyan"
                        : "text-ship-muted hover:text-ship-text"
                    )}
                    data-blobity-invert="false"
                    data-blobity-magnetic="false"
                  >
                    <span className="text-hud-cyan/40 mr-1">0{i + 1}</span>
                    {name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute bottom-0 inset-x-0 h-px bg-hud-cyan"
                      />
                    )}
                  </Link>
                ) : (
                  <a
                    href={isHome ? hash : `/home${hash}`}
                    className={clsx(
                      "relative font-mono text-[10px] sm:text-[11px] tracking-hud uppercase px-2 sm:px-3 py-2 transition-colors block",
                      isActive
                        ? "text-hud-cyan"
                        : "text-ship-muted hover:text-ship-text"
                    )}
                    data-blobity-invert="false"
                    data-blobity-magnetic="false"
                    onClick={() => {
                      play("click");
                      setActiveSection(name as SectionName);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    <span className="text-hud-cyan/40 mr-1">0{i + 1}</span>
                    {name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute bottom-0 inset-x-0 h-px bg-hud-cyan"
                      />
                    )}
                  </a>
                )}
              </motion.li>
            );
          })}
        </ul>

        {/* Dossier / Resume */}
        <motion.a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => play("click")}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] tracking-mission uppercase border border-hud-cyan/30 text-hud-cyan hover:bg-hud-cyan/10 px-3 py-1.5 transition-colors"
          data-blobity-invert="false"
          data-blobity-magnetic="false"
        >
          Resume
        </motion.a>
      </div>
    </nav>
  );
}

