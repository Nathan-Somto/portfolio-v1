import House from "../assets/houseMarketplace.png";
import Insta from "../assets/instagramRn.png";
import X from "../assets/X.png";
import Eri from "../assets/erilearn_website.png";
import zuri from "../assets/zuri.jpeg";
import gdscu from "../assets/gdsc.jpeg";
import eridan from "../assets/eridan.jpeg";
import SmStore from '../assets/smstore.png';
import React from "react";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    company: "GDSCU (Google Developer Student's Club)",
    title: "Front-End Developer Intern",
    location: "Ogun, NGA",
    description: `As a member of the Google developer students club at Covenant university, I was tasked with daily projects based on the React library for 30 days.
the various challenges improved my frontend skills significantly.`,
    image: React.createElement("img", {
      src: gdscu,
      alt: "gdscu",
      className: "max-h-10 max-w-10 h-full w-[80%] object-contain m-auto block",
    }),
    date: "Oct 2022 - Present",
  },
  {
    company: "Eridan Group",
    title: "Front-End Developer Intern",
    location: "Lagos, NGA",
    description: `Worked on web-based projects using React, Next.js, and Tailwind CSS.\n
Developed skills through practical application and real-world projects.\n
Contributed to the creation of the Erilearn website using Next.js and TypeScript.`,
    date: "Mar 2023 - Sep 2023(6mos)",
    image: React.createElement("img", {
      src: eridan,
      alt: "eridan",
      className: "max-h-10 max-w-10 h-full w-[80%] object-contain m-auto block",
    }),
  },
  {
    company: "Zuri Inc.",
    title: "Front-End Developer Intern",
    location: "Remote",
    description: `Introduced to front-end development through Zuri's training program.\n
       Completed weekly tasks in HTML, CSS, and JavaScript.\n
      Mastered UI design with HTML, styling with CSS, and interactivity with JavaScript.\n
      Acquired practical skills for crafting engaging user interface`,
    date: "Jun 2022 - Aug 2022(3mos)",
    image: React.createElement("img", {
      src: zuri,
      alt: "zuri",
      className: "max-h-10 max-w-10 h-full w-[80%] object-contain m-auto block",
    }),
  },
] as const;

export const projectsData = [
  {
    title: "Instagram React Native Clone",
    description:
      "Developed a mobile app using React Native and Expo that closely replicates the functionality of Instagram.   Developed with React Native, Expo, Firebase.",
    tags: ["React", "React Native", "Firebase", "Expo", "Typescript"],
    imageUrl: Insta,
    link: "https://github.com/Nathan-Somto/Instagram-rn-clone",
  },
  {
    title: "House Marketplace",
    description:
      "Developed a web app using Firebase, Next.js, and TypeScript that allows for buying, renting, and selling houses. ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Zustand", "Firebase"],
    imageUrl: House,
    link: "https://house-marketplace-topaz-sigma.vercel.app/",
  },
  {
    title: "Twitter Clone",
    description:
      "Developed a fullstack MERN Twitter(X) clone with Next js as the fullstack framework.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Next-Auth"],
    imageUrl: X,
    link: "https://github.com/Nathan-Somto/Twitter-Clone",
  },
  {
    title: "Erilearn Website",
    description:
      "Developed a website for a career accelarator program called Erilearn.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: Eri,
    link: "https://erilearn-website.vercel.app/home",
  },{
    title: "SmStore",
    description: "Developed an Ecommerce Front-End for a fictional store called SmStore.",
    tags: ["React", "TypeScript", "Redux", "Tailwind",'Redux Toolkit','React-Router-Dom'],
    imageUrl:SmStore,
    link: "https://fake-store-blond-pi.vercel.app/"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Mongoose",
  "MongoDB",
  "Redux",
  "Redux Toolkit",
  "Firebase",
  "React Native",
  "Express",
  "Framer Motion",
] as const;
