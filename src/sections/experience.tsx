import SectionHeading from "../components/section-heading";
import { experiencesData } from "../data";
import { useSectionInView } from "../hooks";
import { motion } from "framer-motion";
import React from "react";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="relative scroll-mt-28 mb-28 sm:mb-40 px-6 sm:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading text="Experience" label="03 — SERVICE RECORD" />

        <div className="relative">
          {/* Vertical timeline rail */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-hud-cyan/60 via-hud-cyan/20 to-transparent" />

          <div className="flex flex-col gap-0">
            {experiencesData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.33, 1, 0.68, 1] }}
                className="relative pl-10 pb-14 last:pb-0"
              >
                {/* Node dot */}
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-hud-cyan shadow-[0_0_8px_rgba(0,229,255,0.6)] -translate-x-[3.5px]" />
                {/* Horizontal connector */}
                <div className="absolute left-2 top-2 w-6 h-px bg-hud-cyan/30" />

                {/* Card */}
                <div className="hud-bracket bg-space-900 border border-space-700 hover:border-hud-cyan/25 transition-colors p-6 sm:p-8">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">{item.image}</div>
                      <div>
                        <p className="font-mono text-[10px] tracking-mission uppercase text-hud-cyan/70 mb-0.5">
                          DESIGNATION
                        </p>
                        <h3 className="font-display text-xl uppercase tracking-wider text-ship-text">
                          {item.company}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[10px] tracking-hud uppercase text-ship-faint">
                        STARDATE
                      </p>
                      <p className="font-mono text-xs text-ship-muted mt-0.5">{item.date}</p>
                    </div>
                  </div>

                  {/* Role + Location */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="font-mono text-[10px] tracking-hud uppercase bg-space-800 border border-hud-cyan/20 text-hud-cyan px-2.5 py-1">
                      {item.title}
                    </span>
                    <span className="font-mono text-[10px] tracking-hud uppercase bg-space-800 border border-space-700 text-ship-faint px-2.5 py-1">
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="text-ship-muted text-sm leading-relaxed space-y-1.5">
                    {item.description.split('\n').filter(Boolean).map((line, i) => (
                      <p key={i}>{line.trim()}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
