import React from "react";
import Icon from "@/components/Icon";
import classNames from "classnames";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectDataType } from "@/types/Content";
import { useProjectMockup } from "../_hooks/useProjectMockup.hook";

export default function ProjectMockup({ data }: { data: ProjectDataType }) {
  const { mockupType, setMockupType, imageExists } = useProjectMockup(data);

  return (
    <div className="w-full lg:aspect-square lg:mb-20">
      <div className="w-full flex justify-center">
        <div className="h-fit w-fit border border-solid border-green-dark rounded-[8px] flex relative overflow-hidden mb-4">
          <div
            className={classNames(
              "absolute top-0 bottom-0 h-[40px] w-[44px] transition duration-300 bg-green-dark left-0",
              mockupType === "laptop" ? "translate-x-0" : "translate-x-full"
            )}
          ></div>
          <button
            onClick={() => setMockupType("laptop")}
            className={classNames(
              "h-[40px] w-[44px] flex justify-center items-center relative z-10 transition duration-300",
              mockupType === "laptop"
                ? "text-green-light"
                : "bg-transparent text-green-dark"
            )}
          >
            <Icon size={24} icon="laptop" />
          </button>
          {imageExists && (
            <button
              onClick={() => setMockupType("mobile")}
              className={classNames(
                "h-[40px] w-[44px] flex justify-center items-center relative z-10 transition duration-300",
                mockupType === "mobile"
                  ? "text-green-light"
                  : "bg-transparent text-green-dark"
              )}
            >
              <Icon size={24} icon="phone" />
            </button>
          )}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {mockupType === "laptop" ? (
          <motion.div
            key={"laptop"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src={`/mockup/${data.id}/laptop.png`}
              alt={`Mockup of ${data.name} Project`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="lg:scale-[1.75] origin-left lg:-translate-x-[50px]"
            />
          </motion.div>
        ) : (
          <motion.div
            key={"mobile"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:w-full h-[400px] lg:h-full flex items-center justify-center relative -z-[1]"
          >
            <Image
              src={`/mockup/${data.id}/mobile-portrait.png`}
              alt={`Mockup of ${data.name} Project`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
            />
            <Image
              src={`/mockup/${data.id}/mobile-portrait.png`}
              alt={`Mockup of ${data.name} Project`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
              className="absolute -z-[1] top-1/4 left-1/4 -translate-x-1/4 -rotate-[20deg] origin-bottom scale-90 -translate-y-1/3"
            />
            <Image
              src={`/mockup/${data.id}/mobile-portrait.png`}
              alt={`Mockup of ${data.name} Project`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
              className="absolute -z-[1] top-1/4 right-1/4 translate-x-1/4 rotate-[20deg] origin-bottom scale-90 -translate-y-1/3"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
