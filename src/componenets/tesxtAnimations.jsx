"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const WordByWord = ({ text, className, state }) => {
  const container = useRef();
  const words = text.split("");

  useGSAP(() => {});

  useEffect(() => {
    if (state) {
      const tl = gsap.timeline();

      words.forEach((_, i) => {
        tl.to(
          `.word-${i + 1}`,
          {
            opacity: 0,
            y: 5,
            duration: 0.15,
            ease: "power3.in",
          },
          "-=0.1",
        );

        tl.set(`.word-${i + 1}`, { y: -5, opacity: 0 });
      });
    } else {
      const tl = gsap.timeline({ delay: 0.5 });

      words.forEach((_, i) => {
        tl.to(
          `.word-${i + 1}`,
          {
            opacity: 1,
            y: 0,
            duration: 0.15,
            ease: "power3.out",
          },
          "-=0.1",
        );
      });
    }
  }, [state, words]);

  return (
    <div ref={container} className={`flex ${className}`}>
      {state &&
        words.map((word, i) => (
          <p
            key={i}
            className={`word-${i + 1} opacity-0 -translate-y-5 ${word === ":" ? "ml-6 mr-2" : "-ml-1"}`}>
            {word}
          </p>
        ))}
    </div>
  );
};
