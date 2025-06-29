import defaultSeoConfig from "@/data/seo.json";
import type { Metadata } from "next";
import Experiences from "./_components/Experiences";

const pageMetadata = {
  title: "Experience | Taufiqurrahman | callmefiki",
  description:
    "Explore the professional experiences of Taufiqurrahman, Full-stack Web Developer.",
  authors: { name: "Taufiqurrahman", url: "https://callmefiki.com" },
  keywords:
    "Taufiqurrahman, Experiences, Professional Experience, Organizational Experience, Full-stack Web Developer, Front-end Developer, Itsavirus, LnData Indonesia, Unilever Indonesia, Bangkit Academy, Breakpoint Indonesia, SMAN 1 Sidoarjo, Coordinator of Laboratory Assistant, Coordinator of Web Development, IT Manager, Head of Web Development, Web Development, East Java, Indonesia",
};

export const metadata: Metadata = { ...defaultSeoConfig, ...pageMetadata };

export default function ExperiencesPage() {
  return <Experiences />;
}
