import Typography from "@/components/Typography";
import { TypeAnimation } from "react-type-animation";

export default function AboutBody() {
  return (
    <>
      <div className="flex flex-col gap-0 mb-4">
        <TypeAnimation
          className="text-green-primary text-base"
          sequence={["About"]}
          speed={80}
          cursor={false}
          wrapper="h2"
        />
        <TypeAnimation
          className="text-green-light text-xl font-bold"
          sequence={[
            "Taufiqurrahman",
            1000,
            "callmefiki",
            1000,
            "kiifiki",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="h1"
        />
      </div>
      <div className="flex flex-col gap-2 text-justify">
        <Typography.Typing
          sequence={[
            "Hey! I’m Fiki — a part-time web dev and ungraduated student from South Sulawesi, Indonesia. Lately, I spend most of my time messing around with Laravel, React, and sometimes ESP32 stuff for IoT projects.",
          ]}
          cursor={false}
          speed={90}
        />
        <Typography.Typing
          sequence={[
            200,
            "I started coding seriously back in 2020 during a college final project. That project got me into web dev, and from there I just kept learning — mostly from YouTube, building random projects, and debugging with the help of Google and Stack Overflow (a lot of it).",
          ]}
          cursor={false}
          speed={95}
        />
        <Typography.Typing
          sequence={[
            400,
            "I usually learn by doing. I like building real stuff, breaking it, then figuring out how to fix it. These days, I’m focused on frontend stuff with React and Laravel, and slowly picking up React Native to try out mobile dev.",
          ]}
          cursor={false}
          speed={95}
        />
        <Typography.Typing
          sequence={[
            600,
            "I enjoy learning new things, chatting about tech, and helping people figure stuff out. This site’s just my spot to share what I’ve built and what I’ve learned — no big deal.",
          ]}
          cursor={false}
          speed={90}
        />
        <Typography.Typing
          sequence={[
            800,
            "This website is a platform for me to showcase my works, projects, and skills in web development.",
          ]}
          cursor={false}
          speed={90}
        />
      </div>
    </>
  );
}
