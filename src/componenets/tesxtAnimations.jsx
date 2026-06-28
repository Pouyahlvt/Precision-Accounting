"use client";

import { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const WordByWord = ({ text, className, state }) => {
  const container = useRef();
  const words = useMemo(() => text.split(""), [text]);

  useGSAP(() => {});

  useEffect(() => {
    if (state) {
      const tl = gsap.timeline();

      tl.to(
        `.word`,
        {
          opacity: 1,
          y: 0,
          duration: 0.15,
          ease: "power3.in",
          stagger: 0.05,
        },
        { scope: container },
      );
    } else {
      const tl = gsap.timeline();

      tl.to(
        `.word`,
        {
          opacity: 0,
          y: 5,
          duration: 0.15,
          ease: "power3.in",
          stagger: 0.05,
        },
        { scope: container },
      );

      tl.set(`.word`, { y: -5, opacity: 0 });
    }
  }, [state, words]);

  return (
    <div ref={container} className={`flex ${className}`}>
      {words.map((word, i) => (
        <p
          key={i}
          className={`word opacity-0 -translate-y-10 ${word === ":" ? "ml-6 mr-2" : "-ml-1"}`}>
          {word}
        </p>
      ))}
    </div>
  );
};
