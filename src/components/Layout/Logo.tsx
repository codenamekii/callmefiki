"use client";

import BrailleLetter from "@/app/braille/BrailleLetter";
import React, { useEffect, useState } from "react";

export default function Logo() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [letter, setLetter] = useState<string>("");
  const wordInput = "DAFFA";

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < wordInput.length) {
        if (!letter || letter === "space") {
          setLetter(wordInput[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setLetter("space");
        }
      } else {
        setCurrentIndex(0);
        setLetter("space");
        clearInterval(interval);
      }
    }, 750);

    return () => clearInterval(interval);
  }, [currentIndex, letter]);

  return (
    <div className="absolute top-0 left-0 px-6 py-4">
      <BrailleLetter letter={letter} />
    </div>
  );
}
