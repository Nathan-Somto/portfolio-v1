import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "../data";
import Project from "./project";
import { useSectionInView } from "../hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 flex flex-col px-12 justify-center w-full mb-28 mt-20 z-[50] bg-black">
      <SectionHeading text="Projects" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} index={index} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}