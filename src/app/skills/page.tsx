import React from "react";
import type { Metadata } from "next";
import SkillsPage from "./SkillsPage";
import defaultSeoConfig from "@/utils/seo.json";

const pageMetadata = {
  title: "Skills | Daffa Kurnia Fatah | Dafkur.com",
  description:
    "Discover Daffa Kurnia Fatah's skills in JavaScript, TypeScript, Python, PHP, React, Vue, and Next.js.",
  authors: { name: "Daffa Kurnia Fatah", url: "https://dafkur.com" },
  keywords:
    "Daffa Kurnia Fatah, Skills, Programming Languages, Tech Stacks, JavaScript, TypeScript, Python, PHP, React, Vue, Next.js, Node.js, Django, Laravel, Frontend Developer, Full-stack Web Developer, Web Development, Sidoarjo, East Java, Indonesia",
};

export const metadata: Metadata = { ...defaultSeoConfig, ...pageMetadata };

export default function Skills() {
  return <SkillsPage />;
}
