import type { ExperienceDataType } from "@/types/Content";
import { TypeAnimation } from "react-type-animation";
import { useExperiencesContext } from "../_context/ExperiencesProvider";
import ExperienceItem from "./ExperienceItem";

import organizations from "@/data/organizations.json";

export default function OrgExperiences() {
  const { nextView } = useExperiencesContext();

  return (
    <section
      ref={nextView}
      className="container mx-auto snap-always snap-start max-w-full sm:max-w-5xl pb-8"
    >
      <div className="flex flex-col items-center justify-start sm:justify-center pt-12 pb-24 sm:py-20">
        <div className="w-full">
          <TypeAnimation
            className="text-xl text-green-light text-center font-semibold"
            sequence={["Organizations"]}
            speed={60}
            cursor={false}
            wrapper="h1"
          />

          <div className="pt-4 flex flex-col items-center gap-6 mt-4 w-full">
            {organizations.map((data: ExperienceDataType, key: number) => (
              <ExperienceItem key={key} index={key} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
