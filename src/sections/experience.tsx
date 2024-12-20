import SectionHeading from "../components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../data";
import { useSectionInView } from "../hooks";
import React from "react";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading text="Experience" />
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.9rem solid rgba(230, 230, 230, 0.25)",
              }}
              date={item.date}
              icon={item.image}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
              iconClassName="items-center flex h-10 w-10"

            >
              <h1 className="font-semibold capitalize text-[21px]/[34px]">{item.company}</h1>
              <h3 className="font-medium text-lg text-white/70" >{item.title}</h3>
              <p className="font-normal !text-sm !mt-0 text-white/75">{item.location}</p>
              <p className="!mt-1.5 !text-sm !font-normal opacity-75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}