import House from "../assets/houseMarketplace.png";
import Insta from "../assets/instagramRn.png";
import X from "../assets/X.png";
import Eri from "../assets/erilearn_website.png";
import zuri from "../assets/zuri.jpeg";
import eridan from "../assets/eridan.jpeg";
import Chatly from '../assets/chatly.png';
import Me from "../assets/about.jpeg";
import ForgeGen from '../assets/forge-gen.png';
import designr from '../assets/designr.png';
import fpl from '../assets/fpl.png'
//import simplify from '../assets/simplify.png';
import euphoria from '../assets/euphoria.png'
import rivva_ui from '../assets/rivva-ui.webp';
//import lectureDeck from '../assets/lectureDeck.png';
import rivva from '../assets/rivva.svg';
import softalliance from '../assets/soft_alliance.jpeg';
import React from "react";
import { FaFilePdf, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const githubBaseUrl = 'https://github.com/Nathan-Somto'

export const resumeUrl = 'https://drive.google.com/file/d/1YqQ6Dd_lCfEqWmTugW7L9zfHJhVdPp5r/view?usp=drive_link';

export const navLinks = [
  { name: "Home",       hash: "#home",       isRoute: false },
  { name: "Projects",   hash: "#projects",   isRoute: false },
  { name: "Experience", hash: "#experience", isRoute: false },
  /* { name: "Log",        hash: "/log",        isRoute: true  }, */
  { name: "Contact",    hash: "#contact",    isRoute: false },
] as const;

export const links = [
  {
    name: 'Download Resume',
    Icon: FaFilePdf,
    hash: resumeUrl,
  },
  { name: "Home",       hash: "#home" },
  { name: "Projects",   hash: "#projects" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact",    hash: "#contact" },
];

export const experiencesData = [
  {
    company: "Soft Alliance",
    title: "Frontend Engineer",
    location: "Hybrid",
    // Worked on products such as Soft Pay which is a payment management platform that helps businesses manage their payments, track transactions, and generate financial reports. 
    // I was responsible for maintaining and improving the customer facing dashboard and the internal admin panel.
    // Key features Implemented include: Revamping of our in-built settlement service which improved the speed of settlements by 30%, Developing the business onboarding flow which led to a 20% increase in user signups and improving the performance of the dashboard by fixing issues and optimizing code.
    description: `At Soft Alliance, I worked on products such as Soft Pay, a payment management platform that helps businesses manage their payments, track transactions, and generate financial reports.\n
I was responsible for maintaining and improving the customer-facing dashboard and the internal admin panel.\n
Key features I implemented include: Revamping our in-built settlement service, which improved the speed of settlements by 30%; developing the business onboarding flow, which led to a 20% increase in user signups; and improving the performance of the dashboard by fixing issues and optimizing code.`,
    date: "May 2025 - Present",
    image: React.createElement("img", {
      src: softalliance,
      alt: "Soft Alliance",
      className: "h-10 w-10 rounded-full object-cover object-center m-auto block",
    }),
  },
  {
    company: "RIVVA",
    title: "Frontend Engineer (Contract)",
    location: "Remote",
    //Rivva is an ai daily planner that helps users manage thier tasks and boost productivity through smart scheduling, task tracking and energy level monitoring.
    // I developed and maintained the frontend of Rivva web application using Next.js, Typescript and Tailwind CSS. I collaborated with the design and backend teams to implement key features such as: Smart Scheduling, Energy Tracking and Inbox monitoring I was also in charge of developing and maintaing their website.
    description: `Rivva is an AI-powered daily planner that helps users manage their tasks and boost productivity through smart scheduling, task tracking, and energy level monitoring.\n
I developed and maintained the frontend of Rivva's web application using Next.js, TypeScript, and Tailwind CSS. I collaborated with the design and backend teams to implement key features such as Smart Scheduling, Energy Tracking, and Inbox Monitoring. I was also responsible for developing and maintaining their website.`,
    date: "Jan 2025 - Apr 2025 (4mos)",
    image: React.createElement("img", {
      src: rivva,
      alt: "rivva",
      className: "h-10 w-10 rounded-full object-cover object-center m-auto block",
    }),
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
      className: "h-10 w-10  rounded-full object-cover object-center m-auto block",
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
      className: "h-10 w-10 rounded-full   object-cover object-center m-auto block",
      "data-blobity-size": 100
    }),
  },
] as const;

export const projectsData = [
  {
    title: 'Rivva',
    link: 'https://rivva.app',
    description: 'Rivva is an AI-powered daily planner that helps users manage their tasks and boost productivity through smart scheduling, task tracking, and energy level monitoring.',
    tags: ['Next.js', 'Zustand', 'TanStack Query', 'ShadCN UI', 'Tailwind CSS', 'Typescript', 'OpenAI', 'Vercel', 'Framer Motion', 'Convex'],
    github: null,
    imageUrl: rivva_ui
  },
  {
     title: 'FPL AI Assitant',
    description:"An AI-first Fantasy Premier League assistant that has context of users teams, fixtures and latest news to help you make informed decisions on transfers, captaincy and team selection.",
    tags: ['React', 'Typescript', 'Next.js', 'Tailwind', 'Zustand', 'Claude', 'Clerk', 'Convex', 'FPL API'],
    github: `${githubBaseUrl}/fpl-ai-assistant`,
    //link: "https://fpl-ai-assistant.vercel.app/",
    imageUrl: fpl
  },
  /* {
    title: 'Soft Pay',
    description: 'Soft Pay is a payment management platform that helps businesses manage their payments, track transactions, and generate financial reports.',
    tags: ['Typescript', 'Vue.js', 'Sass', 'Pinia'],
    github: null,
    link: null,
    imageUrl: null
  }, */
  {
    title: "Euphoria Ecommerce Site",
    description: 'An Ecommerce Website with a custom Admin-Panel for managing products, orders, and users. equipped with a custom payment flow using Stripe.',
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Zustand", "MongoDB", "Prisma", "Stripe", 'Auth.js'],
    link: 'https://euphoria-ecommerce-store.vercel.app',
    github: `${githubBaseUrl}/euphoria-ecommerce-store`,
    imageUrl: euphoria
  },
  {
    title: "House Marketplace",
    description:
      "A web application that provides an online marketplace for renting, buying and selling of houses.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Zustand", "Firebase", 'Leaflet'],
    imageUrl: House,
    link: "https://house-marketplace-topaz-sigma.vercel.app/",
    github: `${githubBaseUrl}/house-marketplace`
  },
  {
    title: "Twitter Clone",
    description:
      "A Full-Stack (MERN) clone of the popular social media app X(formerly twitter), equipped with features such as tweeting, follow, unfollow, likes, profile management and real-time notifications.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Next-Auth", 'Uploadthing'],
    imageUrl: X,
    github: `${githubBaseUrl}/Twitter-Clone`,
    link: "https://x-clone-six.vercel.app/"
  },
  {
    title: "Instagram React Native Clone",
    description:
      "An Instagram Clone that offers a subset of features such as posting, commenting, reels, realtime feed and likes.  Firebase and Expo power this app.",
    tags: ["React", "React Native", "Firebase", "Expo", "Typescript"],
    imageUrl: Insta,
    github: `${githubBaseUrl}/Instagram-rn-clone`,
    link: null
  },
  /* {
    title: "Lecture Deck",
    description:
      "A community-based AI-powered platform developed for Hebron Startup Lab that generates flashcards from lecture notes to boost knowledge retention. Led a team of 12 engineers across Frontend, Backend, and AI.",
    tags: ["React", "MySQL", "Prisma", "OpenAI", "Agile", "Jira"],
    imageUrl: lectureDeck,
    github: "https://github.com/hslcreators/lecturedeck-fe",
    link: null,
  }, */
  {
    title: 'Designr',
    description: 'An AI powered graphic design editor, with live collaborative features and offline editing developed to help creatives bootstrap ideas.',
    tags: ['React', 'Typescript', 'Neon', 'Postgres SQL', 'Drizzle Orm', 'Better Auth', 'Live Blocks', 'Open Ai', 'Next.js', 'Shadcn-ui', 'Fabric.js', 'Turbo-Repo', 'Zustand', 'TailwindCSS', 'Stripe'],
    comingSoon: true,
    link: null,
    github: `${githubBaseUrl}/designr`,
    imageUrl: designr
  },
  {
    title: "Chatly",
    description: "A full-stack chat application that helps users connect with friends and family through group chats, direct messages and live video chats.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind", 'Zustand', 'React-Router-Dom', 'Clerk', 'Socket.io', 'MongoDB', 'Live-Kit'],
    imageUrl: Chatly,
    link: "https://chatly-rkui.onrender.com/",
    github: `${githubBaseUrl}/Chatly`
  },
  {
    title: 'Forge Gen',
    description: "Forge-Gen is an AI-Powered Image Transformation Mobile App that aids users in transforming their images using AI.",
    tags: ['React', 'React-Native', 'Typescript', 'Expo', 'Appwrite', 'Cloudinary', 'Vercel-Functions'],
    imageUrl: ForgeGen,
    github: `${githubBaseUrl}/Forge-Gen/`,
    link: 'https://expo.dev/accounts/nathansomto/projects/forge-gen/builds/bd22832f-9039-48d6-815d-c3ad16413d54'
  },

  {
    title: "Erilearn Website",
    description:
      "Erilearn is a career accelator program that aims to aid the transition of novices into tech in less than 6 months through their rigourous training program.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", 'Framer-Motion'],
    imageUrl: Eri,
    link: "https://erilearn-website.vercel.app/home",
    github: `${githubBaseUrl}/erilearn-website`
  },
  /* {
    title: "Simplify",
    description: "Simplify is a Design Agency that aims to make crafting designs as easy as possible.",
    tags: ["React", "Tailwind", "Framer Motion"],
    imageUrl: simplify,
    link: "https://simplify-plum.vercel.app/",
    github: `${githubBaseUrl}/simplify`
  } */
];


export const toolsData = [
  {
    icon: 'https://skillicons.dev/icons?i=git&theme=dark',
    tooltip: 'git'
  },
  {
    icon: 'https://skillicons.dev/icons?i=express&theme=dark',
    tooltip: 'express'
  },
  {
    icon: 'https://skillicons.dev/icons?i=redux&theme=dark',
    tooltip: 'redux'
  },
  {
    icon: 'https://skillicons.dev/icons?i=react&theme=dark',
    tooltip: 'react'
  },
  {
    icon: 'https://skillicons.dev/icons?i=nextjs&theme=dark',
    tooltip: 'nextjs'
  },
  {
    icon: 'https://skillicons.dev/icons?i=tailwindcss&theme=dark',
    tooltip: 'tailwindcss'
  },
  {
    icon: 'https://skillicons.dev/icons?i=typescript&theme=dark',
    tooltip: 'typescript'
  },
  {
    icon: 'https://skillicons.dev/icons?i=javascript&theme=dark',
    tooltip: 'javascript'
  },
  {
    icon: 'https://skillicons.dev/icons?i=html&theme=dark',
    tooltip: 'html5'
  },
  {
    icon: 'https://skillicons.dev/icons?i=css&theme=dark',
    tooltip: 'css3'
  },
  {
    icon: 'https://skillicons.dev/icons?i=firebase&theme=dark',
    tooltip: 'firebase'
  },
  {
    icon: 'https://skillicons.dev/icons?i=mongodb&theme=dark',
    tooltip: 'mongodb'
  },
  {
    icon: 'https://skillicons.dev/icons?i=nodejs&theme=dark',
    tooltip: 'nodejs'
  },
  {
    icon: 'https://skillicons.dev/icons?i=figma&theme=dark',
    tooltip: 'figma'
  }, {
    icon: 'https://skillicons.dev/icons?i=sass&theme=dark',
    tooltip: 'sass'
  },
  // docker, postgres, vue.js nuxt.js vite, turborepo, nest js, drizzle, prisma
  {
    icon: 'https://skillicons.dev/icons?i=docker&theme=dark',
    tooltip: 'docker'
  },
  {
    icon: 'https://skillicons.dev/icons?i=postgres&theme=dark',
    tooltip: 'postgres'
  },
  {
    icon: 'https://skillicons.dev/icons?i=vue&theme=dark',
    tooltip: 'vue.js'
  },
  {
    icon: 'https://skillicons.dev/icons?i=nuxt&theme=dark',
    tooltip: 'nuxt.js'
  },
  {
    icon: 'https://skillicons.dev/icons?i=vite&theme=dark',
    tooltip: 'vite'
  },
  {
    icon: 'https://skillicons.dev/icons?i=vercel&theme=dark',
    tooltip: 'vercel'
  },
  {
    icon: 'https://skillicons.dev/icons?i=nest&theme=dark',
    tooltip: 'nestjs'
  },
  {
    icon: 'https://skillicons.dev/icons?i=github&theme=dark',
    tooltip: 'github'
  },
  {
    icon: 'https://skillicons.dev/icons?i=prisma&theme=dark',
    tooltip: 'prisma'
  },
  {
    icon: 'https://skillicons.dev/icons?i=appwrite&theme=dark',
    tooltip: 'appwrite'
  },
  {
    icon: 'https://skillicons.dev/icons?i=bun&theme=dark',
    tooltip: 'bun'
  }
]
export const socials = [
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/nathan_somto/",
    tooltip: 'Follow me on Instagram'
  },
  {
    icon: FaGithub,
    link: "https://www.github.com/Nathan-Somto",
    tooltip: 'View My Github'
  },
  {
    icon: FaTwitter,
    link: "https://x.com/Nathan_Somto",
    tooltip: 'Follow me on Twitter'
  },
  {
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/somtochi-mkparu-elnathan/',
    tooltip: 'Connect with me on LinkedIn'
  }
]
export const info = [
  {
    title: "About Me",
    text: `My name is Somtochi Mkparu, but most people call me Nathan Somto. I’m a Full-Stack Developer based in Lagos, Nigeria, and a graduate of Computer Science from Covenant University. I enjoy building web and mobile applications, solving problems, and learning new things.`,
    image: Me,
  },
  {
    title: "My Journey",
    text: `I started my journey in tech back in 2021. What got me into tech was my curiosity about how applications we use every day are built. Over time, I’ve worked on various projects and picked up skills in different technologies. It's been a challenging but rewarding experience.`,
    image: Me,
  }
];
