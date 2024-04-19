import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PatAppImg from "@/public/advinow.png";
import CoreLibraryImg from "@/public/core.png";
import DemandIQImg from "@/public/demandiq.png";
import EpcFinderImg from "@/public/epcfinder.png";
import DoctorAppImg from "@/public/moreMD.png";
import SquiblerImg from "@/public/squibler.png";

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
    title: "Software Developer",
    location: "Shanghai, China",
    description:
      "I graduated after 4 years of studying with bachelor's degree.",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
  },
  {
    title: "Software Developer ( Intern )",
    location: "Beijing, China",
    description:
      "I worked as a software developer ( intern ) for 1 year at this company. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2015",
  },
  {
    title: "Full Stack Engineer ( Intern ) - Facebook",
    location: "Beijing, China",
    description:
      "I decided to join Facebook as a intern and i was a full-stack developer working as a freelancer. My stack included Node.js · Next.js · MongoDB · TypeScript · React.js · Socketio · PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2016",
  },
  {
    title: "Full Stack Engineer ( Contract ) - Thumbstack",
    location: "Beijing, China",
    description:
      "I joined Thumbstack as a full stack engineer. and i was a strong contributor to this agile team. I developed the main module API related to the flight simulators with NodeJS and developed the route and area management dashboard using Vue.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2019",
  },
  {
    title: "Full Stack Engineer ( Contract ) - WarnerMedia",
    location: "Beijing, China",
    description:
      "The Global Sports Platform (GSP) is the core platform for WarnerMedia's digital sports products. I rebuilt GSP dashboard UI from Angular to React and developed components using Material UI.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Full Stack Engineer - Demand IQ",
    location: "Beijing, China",
    description:
      "First peak moment of my career. I enjoyed this moment. I was involved in development of Sass project for Solar industry.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Senior Frontend Engineer - Advinow",
    location: "Beijing, China",
    description:
      "Another peak moment of my career. I managed to resolve 200+ critical bugs in production. My collaboration and communication skill has been improved a lot in this period.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Software Engineer - Open to New Opportunities",
    location: "Beijing, China",
    description:
      "Currently, I'm open to new opportunities. I'm currently learning coding courses to improve my work quality.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Advinow Patient Survey App",
    description:
      "I worked as a senior frontend engineer on this project for 2 years. Patients can go through medical survey session.",
    tags: [
      "React",
      "Next.js",
      "Redux",
      "Ant Design",
      "Mantine",
      "React-pdf",
      "Axios",
    ],
    imageUrl: PatAppImg,
  },
  {
    title: "Advinow Doctor App",
    description:
      "Dashboard for patients registerd via Patient Survey App. Patient Survey Data is parsed and analyzed by AI and doctor can get advice for patients.",
    tags: ["Angular", "TypeScript", "Bootstrap", "React"],
    imageUrl: DoctorAppImg,
  },
  {
    title: "Advinow Core Library",
    description: "Package of reusable components. They are built by React.js.",
    tags: ["React", "Mantine", "Chakra UI", "Formik", "React-dnd"],
    imageUrl: CoreLibraryImg,
  },
  {
    title: "DemandIQ Stella",
    description:
      "Saas project for solar industry. Each business can setup their own survey app and it can be done in Portal APP. User can go through business's survey app to register the appointment to setup solar panels over their houses.",
    tags: ["React", "Python", "Django", "PostgreSQL", "Twilio", "AWS"],
    imageUrl: DemandIQImg,
  },
  {
    title: "EPCFinder",
    description:
      "A web app to connect Solar Panel Installers to Solar Panel sellers. Each sides can get reviews, overviews from this webapp and can communicate via this webapp.",
    tags: ["React", "Next.js", "Python", "Django"],
    imageUrl: EpcFinderImg,
  },
  {
    title: "Squibler IO",
    description:
      "A public web app for authors to write various type of stories.",
    tags: ["Angular", "PostgreSQL", "Google Cloud Platform"],
    imageUrl: SquiblerImg,
  },
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
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Flask",
  "Php",
  "Laravel",
  "Wordpress",
  "Shopify",
  "Magento",
  "Docker",
  "Terraform",
  "AWS",
  "GCP",
  "Azure",
  "Framer Motion",
] as const;
