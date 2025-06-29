import type { ExperienceDataType } from "@/types/Content";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

interface Props extends ExperienceDataType {
  index: number;
}

export default function ExperienceItem({ index, ...data }: Props) {
  return (
    <div className="relative flex flex-col sm:flex-row items-start w-full gap-2 sm:gap-5 px-2 sm:px-0">
      {/* Kolom kiri: tanggal */}
      <div className="w-full sm:w-1/2 text-left sm:text-right pr-6 sm:pr-8">
        <TypeAnimation
          className="text-sm text-green-secondary block"
          sequence={[index * 300, `${data.start} - ${data.end ?? "Present"}`]}
          speed={80}
          cursor={false}
          wrapper="span"
        />
      </div>

      {/* Kolom kanan: isi pengalaman */}
      <div className="w-full sm:w-1/2 pl-6 sm:pl-8">
        <TypeAnimation
          className="text-green-light text-base font-medium"
          sequence={[index * 300, `${data.position}`]}
          speed={80}
          cursor={false}
          wrapper="p"
        />
        <TypeAnimation
          className="block text-sm text-green-secondary"
          sequence={[index * 300, `${data.company}`]}
          speed={80}
          cursor={false}
          wrapper="span"
        />
        <TypeAnimation
          className="block text-sm text-green-secondary"
          sequence={[index * 300, `${data.place}`]}
          speed={80}
          cursor={false}
          wrapper="span"
        />
      </div>

      {/* Titik dan garis pendek */}
      <div className="absolute top-0 sm:top-1/2 left-[28px] sm:left-1/2 -translate-x-1/2">
        {/* Titik */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 1 + index * 0.2,
          }}
          className="block w-2 h-2 bg-green-primary rounded-full"
        />
        {/* Garis pendek */}
        <div className="w-px h-16 bg-green-primary mx-auto mt-1" />
      </div>
    </div>
  );
}