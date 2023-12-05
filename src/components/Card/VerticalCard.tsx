import React from "react";
import Image from "next/image";
import type { ProjectContentProps } from "./type";
import { ArrowButton } from "../Button";
import Scramble from "../Scramble";

export function VerticalCard(props: ProjectContentProps) {
  const { isHover, name, description, tech, image, link } = props;
  return (
    <>
      <div className="project-content">
        <div className="position-absolute bottom-0 start-0 mb-4 mx-4">
          {link && <ArrowButton isHover={isHover!} className="mb-2" />}
          <h2>
            <Scramble className="text-heading-5 text-light-green">
              {name}
            </Scramble>
          </h2>
          <p className="mt-2">
            <Scramble className="text-body text-light-green">
              {description}
            </Scramble>
          </p>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {tech &&
              tech.map((techstack: string, key: number) => (
                <Scramble
                  key={key}
                  className="project-techstack d-block text-small text-light-green"
                >
                  {techstack}
                </Scramble>
              ))}
          </div>
        </div>
        <div className="position-absolute project-image">
          <Image
            src={`/project/${image}`}
            alt="Project Image"
            width={400}
            height={800}
          />
          <Image
            src={`/project/${image}`}
            alt="Project Image"
            width={400}
            height={800}
          />
        </div>
      </div>
    </>
  );
}
