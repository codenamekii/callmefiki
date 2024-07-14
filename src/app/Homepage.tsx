"use client";

import Typography from "@/components/Typography";
import { useMobileHook } from "@/hooks/Mobile.hook";
import { FeatureListType, pagesList } from "@/utils/menu";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const FirstRow = ({ children }: { children?: React.ReactNode }) => (
  <div className="sm:block hidden shrink-0 w-[85px]">{children}</div>
);

const SecondRow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-1 w-full">{children}</div>
);

export default function Homepage() {
  const [list, setList] = useState<FeatureListType[]>([]);

  function createGridReorderedList() {
    const numRows = window.innerWidth < 640 ? 2 : 3;
    const numCols = Math.ceil(pagesList.length / numRows);
    const reorderedList = [];

    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows; row++) {
        const index = col + row * numCols;
        if (index < pagesList.length) {
          reorderedList.push(pagesList[index]);
        }
      }
    }
    setList(reorderedList);
  }

  useEffect(() => {
    createGridReorderedList();
  }, []);

  return (
    <section className="container mx-auto flex justify-center">
      <div className="max-w-[750px] flex-1 px-6">
        <div className="flex gap-5 mb-4">
          <FirstRow />
          <SecondRow>
            <TypeAnimation
              className="font-semibold text-xl text-green-light"
              sequence={[
                "Hello World!",
                1000,
                "Hello Fellas!",
                1000,
                "Hello Everyone!",
                1000,
                "Hello Guys!",
                1000,
              ]}
              speed={20}
              repeat={Infinity}
              wrapper="h1"
            />
          </SecondRow>
        </div>
        <div className="flex gap-5 mb-4 min-h-[145px]">
          <FirstRow>
            <Typography.Paragraph className="text-green-primary text-end">
              Greetings.
            </Typography.Paragraph>
          </FirstRow>
          <SecondRow>
            <TypeAnimation
              className="font-normal text-base text-green-light"
              sequence={[
                `
                Fellow wanderers of the digital domain! I'm Daffa Kurnia Fatah
                - think of me as your trusty coding bard from the sun-kissed lands
                of Sidoarjo, East Java, Indonesia. With Next.js and React as my trusty instruments
                since 2021, I craft not only code but also wield the art of design, conjuring up
                web magic through Figma and weaving interactive spells of user
                experience and animation. Your wish is my code!
                `,
              ]}
              speed={99}
              cursor={false}
            />
          </SecondRow>
        </div>
        <div className="flex gap-5 mb-4 min-h-[76px]">
          <FirstRow>
            <Typography.Paragraph className="text-green-primary text-end">
              Pages.
            </Typography.Paragraph>
          </FirstRow>
          <SecondRow>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-0.5">
              {list.map((page: FeatureListType, index: number) => (
                <div className="flex gap-2 items-center" key={index}>
                  <TypeAnimation
                    className="text-base text-green-primary"
                    sequence={[index * 200, page.number]}
                    speed={30}
                    cursor={false}
                  />
                  <Link href={page.link!}>
                    <TypeAnimation
                      className="text-base text-green-light underline"
                      sequence={[(index + 1) * 200, page.label]}
                      speed={30}
                      cursor={false}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </SecondRow>
        </div>
      </div>
    </section>
  );
}
