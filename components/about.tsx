"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="underline">With over 10 years of experience</span> in
        the IT industry, I've embarked on a journey that began during my
        university days, where I interned at numerous local companies.
        Transitioning into my professional career, I've spent over 8 years
        navigating the dynamic landscape of IT, particularly as{" "}
        <span className="font-medium">a full stack engineer</span>. This journey
        has been anything but straightforward; it's been marked by{" "}
        <span className="italic">challenges</span>,{" "}
        <span className="italic">complexities</span>, and moments of{" "}
        <span className="italic">disappointment</span>. Yet, amidst the
        difficulties, I've found{" "}
        <span className="underline">immense value</span> and{" "}
        <span className="underline">growth</span>. Along the way, I've been
        fortunate to encounter exceptional mentors and colleagues whose
        influence has shaped my professional development. From them, I've
        gleaned not only their strengths but also their vulnerabilities,
        incorporating these lessons into my own approach. Through these
        experiences, <span className="font-medium">my confidence</span> has{" "}
        <span className="font-medium">flourished</span>,{" "}
        <span className="font-medium">bolstered</span> by a deepened
        understanding of both technology and interpersonal dynamics. Colleagues
        often commend me for my{" "}
        <span className="font-medium">strong communication skills</span>,{" "}
        <span className="font-medium">efficient problem-solving abilities</span>
        , and <span className="font-medium">collaborative nature</span>. Yet, I
        recognize that success is best achieved alongside humble and talented
        individuals. Looking ahead, I'm eager to continue this journey,
        embracing new technologies and forging meaningful relationships along
        the way.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        soccer, reading, and playing Fifa. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">history and soccer</span>.
      </p>
    </motion.section>
  );
}
