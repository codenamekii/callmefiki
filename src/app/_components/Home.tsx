"use client";

import Typography from "@/components/Typography";
import { useGtag } from "@/hooks/useGtag.hook";
import type { PagesListType } from "@/types/Content";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useHome } from "../_hooks/useHome.hook";
import { FirstRow, SecondRow } from "./HomeRow";

export default function Home() {
  const { list } = useHome();
  const { event } = useGtag();

  React.useEffect(() => {
    event("page_view", {
      page_name: "home",
    });
  }, [event]);

  return (
    <section className="pt-[100px] pb-[80px] min-h-dvh container mx-auto flex justify-center items-center">
      <div className="max-w-[327px] sm:max-w-[750px] h-full flex-1 sm:px-6">
        <div className="flex gap-5 mb-4">
          <FirstRow />
          <SecondRow>
            <TypeAnimation
              className="font-semibold text-xl text-green-light"
              sequence={[
                "こんにちは、友達!",
                1000,
                "Wassup MotherF*ckers!",
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
        <div className="flex gap-5 mb-4">
          <FirstRow>
            <Typography.Paragraph className="text-green-primary text-end">
              Greetings.
            </Typography.Paragraph>
          </FirstRow>
          <SecondRow>
            <Typography.Typing
              sequence={[
                "Hey there, I`m Fiki — a web developer and lecturer from South Sulawesi, Indonesia. I work mostly with Laravel and ReactJS, and sometimes I mess around with ESP32 and IoT projects for monitoring and automation. For me, coding is not just work — it`s a way to build stuff that actually helps people. If you need something that works and makes sense, let`s talk.",
              ]}
              speed={99}
              cursor={false}
            />
          </SecondRow>
        </div>
        <div className="flex gap-5 mb-4 min-h-[102px] sm:min-h-[76px]">
          <FirstRow>
            <Typography.Paragraph className="text-green-primary text-end">
              Pages.
            </Typography.Paragraph>
          </FirstRow>
          <SecondRow>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-0.5">
              {list.map((page: PagesListType, index: number) => (
                <div className="flex gap-2 items-center" key={index}>
                  <TypeAnimation
                    className="text-base text-green-primary"
                    sequence={[index * 200, page.number]}
                    speed={60}
                    cursor={false}
                  />
                  <Link
                    href={page.link!}
                    target={page.link?.startsWith("/") ? "_self" : "_blank"}
                  >
                    <TypeAnimation
                      className="text-base text-green-light underline"
                      sequence={[(index + 1) * 200, page.label]}
                      speed={60}
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
