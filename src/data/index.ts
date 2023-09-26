// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
/* import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu"; */
import House from '../assets/houseMarketplace.png';
import Insta from '../assets/instagramRn.png';
import X from '../assets/X.png';
import Eri from '../assets/erilearn_website.png';
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
  /* {
    name: "Experience",
    hash: "#experience",
  }, */
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

/* export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const; */

export const projectsData = [
  {
    title: "Instagram React Native Clone",
    description:
      "Developed a mobile app using React Native and Expo that closely replicates the functionality of Instagram.   Developed with React Native, Expo, Firebase.",
    tags: ["React", "React Native", "Firebase", "Expo", "Typescript"],
   imageUrl: Insta,
   link: 'https://github.com/Nathan-Somto/Instagram-rn-clone'
  },
  {
    title: "House Marketplace",
    description:
      "Developed a web app using Firebase, Next.js, and TypeScript that allows for buying, renting, and selling houses. ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Zustand", "Firebase"],
     imageUrl: House,
   link: 'https://house-marketplace-topaz-sigma.vercel.app/'
  },
  {
    title: "Twitter Clone",
    description:
      "Developed a fullstack MERN Twitter(X) clone with Next js as the fullstack framework.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Next-Auth"],
    imageUrl: X,
    link: 'https://github.com/Nathan-Somto/Twitter-Clone'
  },
  {
    title: 'Erilearn Website',
    description:
    "Developed a website for a career accelarator program called Erilearn.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: Eri,
    link: 'https://erilearn-website.vercel.app/home'
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