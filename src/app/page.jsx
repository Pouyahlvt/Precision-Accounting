/* eslint-disable @next/next/no-img-element */
"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Footer from "../componenets/foorter";
import { useThemeContext } from "../context/themeContext";
import Link from "next/link";

export default function Home() {
  const { theme, toggleTheme } = useThemeContext();
  const [mounted, setMounted] = useState(false);
  const [hoverAnim, setHoverAnim] = useState(null);
  const [section, setSection] = useState("one");

  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observers = [];

    const observe = (ref, name) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSection(name);
          }
        },
        {
          // Trigger when at least 50% of the section is visible
          threshold: 0.5,
        },
      );
      observer.observe(ref.current);
      observers.push(observer);
    };

    observe(sectionOneRef, "one");
    observe(sectionTwoRef, "two");
    observe(sectionThreeRef, "three");

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div
        className="w-full flex justify-center items-center h-screen bg-sky-blue"
        suppressHydrationWarning>
        <div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div suppressHydrationWarning>
      {/* Theme toggle */}
      <div className="fixed w-full flex z-50">
        <div className="fixed right-14 top-4 ">
          <div onClick={toggleTheme}>
            <SunIcon
              className={`absolute w-10 h-10 transition-all duration-200 ease-in-out text-strong-blue
              ${theme === "light" ? "hover:rotate-20" : "-rotate-180 opacity-0 scale-0"}`}
            />
          </div>
          <div onClick={toggleTheme}>
            <MoonIcon
              className={`absolute w-10 h-10 transition-all duration-200 ease-in-out text-soft-line
              ${theme === "dark" ? "hover:rotate-20" : "-rotate-180 opacity-0 scale-0"}`}
            />
          </div>
        </div>
      </div>

      {/* Section One */}
      <div id="sectionOne" ref={sectionOneRef} className="w-full h-screen">
        <div className="absolute w-full h-full overflow-hidden -z-5">
          <img
            src={
              theme === "light"
                ? "/Images/day_sky.png"
                : "/Images/night_sky.png"
            }
            alt="bg-image"
            className="w-full h-full object-cover select-none"
          />
        </div>

        <h1
          className={`inset-0 mx-auto font-oswald tracking-tight w-fit py-2 bg-clip-text text-transparent
          select-none transition-all duration-300 ease-in-out h-fit
          ${section === "one" ? "fixed text-6xl top-30" : "top-2 text-3xl z-5 opacity-0 absolute"}
          ${
            theme === "dark"
              ? "bg-linear-to-bl from-dusk-blue to-sky-blue"
              : "bg-linear-to-br from-strong-blue from-30% to-real-blue"
          }`}>
          Precision Accounting
        </h1>

        <div
          className={`top-55 w-full flex justify-center transition-all duration-300 ease-in-out
          ${section === "one" ? "fixed" : "absolute opacity-0 -translate-y-40"}`}>
          <p
            className={`font-ubuntu tracking-tight text-[17px] text-center leading-tight
            ${theme === "light" ? "text-strong-blue" : "text-sky-blue"}`}>
            This is a web site for your Bookkeeping , here you can manage your
            customers &<br />
            make invoice and manage invoices and <br />
            see Sales purchase statistics .
          </p>
        </div>

        <div
          className={`mt-90 w-full flex justify-center transition-all duration-200 ease-in-out
          ${section === "one" ? "fixed" : "absolute -translate-y-70 opacity-0"}`}>
          <Link href={`/Login`}>
            <button
              onMouseEnter={() => setHoverAnim("buttonLog")}
              onMouseLeave={() => setHoverAnim(null)}
              className={`w-80 py-6 text-3xl font-poppins border-[0.05rem] shadow-xl/90 cursor-pointer tracking-tighter
            backdrop-blur-xs rounded-2xl flex justify-center border-white overflow-hidden select-none
            ${theme === "light" ? "text-strong-blue" : "text-sky-blue"}`}>
              <p
                className={`transition-all duration-200 ease-in-out ${
                  hoverAnim === "buttonLog" ? "" : "-mr-8"
                }`}>
                Start Using
              </p>
              <span
                className={`text-3xl ml-4 transition-all duration-200 ease-in-out
              ${hoverAnim === "buttonLog" ? "" : "translate-y-2 -translate-x-2 opacity-0"}`}>
                ↗
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Section Two */}
      <div id="sectionTwo" ref={sectionTwoRef} className="w-full h-screen flex">
        <div className="absolute w-full h-full flex -z-5">
          <img
            src={
              theme === "light"
                ? "/Images/day_sky2.png"
                : "/Images/night_sky2.png"
            }
            alt="Dark2"
            className="w-full h-full select-none object-cover"
          />
        </div>

        <div
          className={`h-full flex items-center ml-10 w-[40%] transition-all duration-500 ease-out
          ${section === "two" ? "" : "-translate-x-100 opacity-0"}`}>
          {/* Section Two - animated paragraph */}
          <motion.p
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            animate={section === "two" ? "visible" : "hidden"}
            className={`text-[1.5rem] tracking-tighter font-ubuntu leading-tight
    ${theme === "light" ? "text-strong-blue" : "text-green-blue"}`}>
            {[
              "You can Start at top ;",
              "This web site maked just for learning next.js",
              "in this web you can cotrol your web",
              "at this time this web dont have any backend",
              "dont have database :(",
              "at feuter we add these and Probebly AI .",
            ].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: "110%", opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.p>
        </div>

        <div className="h-full flex items-center justify-center w-[60%] overflow-hidden">
          <div
            className={`w-[70%] h-[60vh] border-[0.05rem] cursor-pointer mt-20 select-none
            border-white rounded-2xl backdrop-blur-md flex justify-center items-center
            transition-all duration-500 ease-out
            ${section === "two" ? "" : "translate-y-30 opacity-0"}`}>
            <img
              src="/Images/night_sky.png"
              alt="App_Image"
              className="w-[80%] rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Section Three anchor for Footer detection */}
      <div ref={sectionThreeRef}>
        <Footer theme={theme} />
      </div>
    </div>
  );
}
