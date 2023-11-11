import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image
      width={29}
      height={42}
      src={"/logo.svg"}
      alt="Dafkur Logo"
      className="position-absolute top-0 start-0 m-4"
    />
  );
}
