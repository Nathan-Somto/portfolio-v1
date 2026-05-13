import React from "react";
import SectionHeading from "../components/section-heading";
import { projectsData } from "../data";
import Project from "../components/project";
import { useSectionInView } from "../hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative scroll-mt-28 flex flex-col px-6 sm:px-12 justify-center w-full mb-28 mt-20 z-[50] bg-space-950"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 hud-grid opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <SectionHeading text="Projects" label="02 — MISSION FILES" />
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} index={index} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
