"use client";

import { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";

export const WordByWord = ({
  textOne,
  textTwo,
  className,
  state,
  divClass,
}) => {
  const container = useRef();
  const wordsOne = useMemo(() => textOne.split(""), [textOne]);
  const wordsTwo = useMemo(() => textTwo.split(""), [textTwo]);

  useEffect(() => {
    if (state) {
      const tl = gsap.timeline();

      tl.to(".wordTwo", {
        opacity: 0,
        y: 5,
        duration: 0.15,
        ease: "power3.in",
        stagger: 0.05,
      })
        .fromTo(
          ".wordOne",
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.15,
            ease: "power3.in",
            stagger: 0.05,
          },
        )
        .to(".wordTwo", { y: -10 });
    } else {
      const tl = gsap.timeline();

      tl.to(".wordOne", {
        opacity: 0,
        y: 5,
        duration: 0.15,
        ease: "power3.in",
        stagger: 0.05,
      }).to(".wordTwo", {
        opacity: 1,
        y: 0,
        duration: 0.15,
        ease: "power3.in",
        stagger: 0.05,
      });
    }
  }, [state, wordsOne, wordsTwo]);

  return (
    <div ref={container} className={`relative flex ${divClass}`}>
      <div className={`absolute flex ${className}`}>
        {wordsOne.map((word, i) => (
          <p
            key={`word-${i}`}
            className={`wordOne  ${word === "~" ? "text-transparent" : ""}`}>
            {word}
          </p>
        ))}
      </div>
      {wordsTwo && (
        <div className={`absolute flex ${className}`}>
          {wordsTwo.map((word, i) => (
            <p
              key={`wordT-${i}`}
              className={`wordTwo opacity-0 ${word === "~" ? "text-transparent" : ""}`}>
              {word}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
