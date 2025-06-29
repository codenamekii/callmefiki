import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import works from "@/data/works.json";
import { useGtag } from "@/hooks/useGtag.hook";
import { useMobile } from "@/hooks/useMobile.hook";
import type { ExperienceDataType } from "@/types/Content";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useExperiencesContext } from "../_context/ExperiencesProvider";
import ExperienceItem from "./ExperienceItem";

export default function WorkExperiences() {
  useMobile();
  const { nextView } = useExperiencesContext();
  const { event } = useGtag();

  const tracking = () => {
    event("button_click", {
      page_name: "experiences",
      component_name: "work_experiences",
      button_name: "see_others_button",
    });
  };

  return (
    <section className="container mx-auto snap-always snap-start max-w-[300px] sm:max-w-full sm:px-0">
      <div className="flex flex-col items-center justify-start sm:justify-center pt-24 pb-32 sm:py-24">
        <div className="w-full">
          <TypeAnimation
            className="text-xl text-green-light text-center font-semibold"
            sequence={["Grindin' and Hustlin' 仕!"]}
            speed={60}
            cursor={false}
            wrapper="h1"
          />

          <div className="pt-2 flex flex-col items-center gap-6 mt-4 w-full">
            {works.map((data: ExperienceDataType, key: number) => (
              <ExperienceItem key={key} index={key} {...data} />
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.2 }}
              className="mt-8 sm:mt-12 flex justify-start sm:justify-center"
            >
              <button
                className="w-fit flex flex-row sm:flex-col items-center justify-center gap-2 group"
                onClick={() => {
                  tracking();
                  nextView.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="w-7 h-7 rounded-full border border-solid border-green-primary bg-green-primary z-10 group-hover:bg-black transition duration-300 flex items-center justify-center">
                  <Icon
                    icon="arrow-down-double-line"
                    size={20}
                    className="text-white"
                  />
                </div>
                <Typography.Paragraph className="text-green-light text-center">
                  See Others
                </Typography.Paragraph>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
