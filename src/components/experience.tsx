import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../data";
import { useSectionInView } from "../hooks";
import { useTheme } from "../context/theme";
import React from "react";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading text="Experience" />
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.9rem solid rgba(230, 230, 230, 0.095)",
              }}
              date={item.date}
              icon={item.image}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
              iconClassName="items-center flex h-10 w-10"

            >
              <h1 className="font-semibold capitalize text-xl">{item.company}</h1>
              <h3 className="font-medium text-[17px] text-black/80 dark:text-white/70" >{item.title}</h3>
              <p className="font-normal !text-sm !mt-0 text-gray-700  dark:text-white/75">{item.location}</p>
              <p className="!mt-1 !text-sm !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}