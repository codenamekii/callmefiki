import React from "react";
import type { Metadata } from "next";
import ExperiencePage from "./ExperiencePage";
import Seo from "@/components/Seo";

const pageMetadata = {
  title: "Experience | Daffa Kurnia Fatah | Dafkur.com",
  description:
    "Explore the professional and organizational experiences of Daffa Kurnia Fatah, a Full-stack Web Developer. Learn about his roles as a Front-end Developer at Itsavirus, Full-stack Developer at LnData Indonesia, Engineer Intern at Unilever Indonesia, and various other positions and contributions in different organizations.",
  authors: { name: "Daffa Kurnia Fatah", url: "https://dafkur.com" },
  keywords:
    "Daffa Kurnia Fatah, Experiences, Professional Experience, Organizational Experience, Full-stack Web Developer, Front-end Developer, Itsavirus, LnData Indonesia, Unilever Indonesia, Bangkit Academy, Breakpoint Indonesia, SMAN 1 Sidoarjo, Coordinator of Laboratory Assistant, Coordinator of Web Development, IT Manager, Head of Web Development, Web Development, East Java, Indonesia",
};

export const metadata: Metadata = pageMetadata;

export default function Experience() {
  return (
    <>
      <Seo
        title={pageMetadata.title}
        description={pageMetadata.description}
        additionalMetaTags={[
          {
            name: "keywords",
            content: pageMetadata.keywords,
          },
          {
            name: "author",
            content: pageMetadata.authors.name,
          },
        ]}
      />
      <ExperiencePage />
    </>
  );
}
