"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { WordByWord } from "@/src/componenets/tesxtAnimations";

const EnterPage = () => {
  const [logIn, setLogIn] = useState(true);
  const [hover, setHover] = useState(null);
  const loginRef = useRef(null);
  const signinRef = useRef(null);

  useEffect(() => {
    if (!signinRef.current || !loginRef.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    if (logIn) {
      tl.to(signinRef.current, { x: "100%" }).to(loginRef.current, {
        x: 0,
      });
    } else {
      tl.to(loginRef.current, { x: "100%" }).to(signinRef.current, {
        x: 0,
      });
    }
  }, [logIn]);

  return (
    <div className="overflow-hidden">
      <div className="relative w-full h-screen bg-noir-black">
        <WordByWord
          textOne={"Hi~again~:)"}
          textTwo={"Wellcome~:)"}
          state={logIn}
          className={"text-cotton text-6xl font-ubuntu font-bold"}
          divClass={` top-15 w-[55%] flex justify-center `}
        />

        <div
          ref={loginRef}
          className="absolute right-0 w-[45%] h-screen rounded-l-4xl bg-cotton ">
          <h1
            className="w-full mt-6 flex justify-center text-4xl font-poppins 
          tracking-tighter font-semibold text-real-blue">
            Log In
          </h1>
          <div className="flex w-full justify-center mt-20">
            <input
              id="UsernameLogIn"
              placeholder="Username"
              type="text"
              className="border-[0.1rem] w-[80%] h-10 border-noir-black rounded-xl px-4 py-2 
              font-poppins text-noir-black tracking-tight outline-0 focus:border-[0.2rem] transition-all duration-0 ease-in-out"
            />
          </div>
          <div className="flex w-full justify-center mt-8">
            <input
              placeholder="Password "
              type="text"
              className="border-[0.1rem] w-[80%] h-10 border-noir-black rounded-xl px-4 py-2 
              font-poppins text-noir-black tracking-tight outline-0 focus:border-[0.2rem] transition-all duration-0 ease-in-out"
            />
          </div>
          <div className="flex w-full justify-center mt-8">
            <button
              onMouseEnter={(e) => {
                (e.preventDefault(), setHover("login-button"));
              }}
              onMouseLeave={(e) => {
                (e.preventDefault(), setHover(null));
              }}
              className="border-[0.1rem] w-[80%] cursor-pointer border-noir-black rounded-xl px-4 py-2 
              font-poppins font-semibold text-2xl text-noir-black tracking-tighter active:scale-98 
              transition-all duration-200 ease-in-out">
              Log In
              <span
                className={`${hover === "login-button" ? "ml-6" : "ml-2"} transition-all duration-200 ease-out`}>
                →
              </span>
            </button>
          </div>
          <p
            className="text-[0.8rem] text-noir-black font-poppins tracking-tight 
          absolute bottom-2 w-full flex justify-center cursor-default">
            {`don't have an accoount ? `}
            <span
              onClick={() => setLogIn(!logIn)}
              className="text-real-blue cursor-pointer ml-1">
              {" "}
              Sign up
            </span>
          </p>
        </div>
        <div
          ref={signinRef}
          className="absolute right-0 w-[45%] h-screen rounded-l-4xl bg-cotton translate-x-full">
          <h1
            className="w-full mt-6 flex justify-center text-4xl font-poppins 
          tracking-tighter font-semibold text-real-blue">
            Sign up
          </h1>
          <div className="flex w-full justify-center mt-20">
            <input
              placeholder="Username "
              type="text"
              className="border-[0.1rem] w-[80%] h-10 border-noir-black rounded-xl px-4 py-2 
              font-poppins text-noir-black tracking-tight outline-0 focus:border-[0.2rem] transition-all duration-0 ease-in-out"
            />
          </div>
          <div className="flex w-full justify-center mt-8">
            <input
              placeholder="Email address "
              type="text"
              className="border-[0.1rem] w-[80%] h-10 border-noir-black rounded-xl px-4 py-2 
              font-poppins text-noir-black tracking-tight outline-0 focus:border-[0.2rem] transition-all duration-0 ease-in-out"
            />
          </div>
          <div className="flex w-full justify-center mt-8">
            <input
              placeholder="Password "
              type="text"
              className="border-[0.1rem] w-[80%] h-10 border-noir-black rounded-xl px-4 py-2 
              font-poppins text-noir-black tracking-tight outline-0 focus:border-[0.2rem] transition-all duration-0 ease-in-out"
            />
          </div>
          <div className="flex w-full justify-center mt-8">
            <input
              placeholder="company name"
              type="text"
              className="border-[0.1rem] w-[80%] h-10 border-noir-black rounded-xl px-4 py-2 
              font-poppins text-noir-black tracking-tight outline-0 focus:border-[0.2rem] transition-all duration-0 ease-in-out"
            />
          </div>
          <div className="flex w-full justify-center mt-8">
            <button
              onMouseEnter={() => setHover("login-button")}
              onMouseLeave={() => setHover(null)}
              className="border-[0.1rem] w-[80%] cursor-pointer border-noir-black rounded-xl px-4 py-2 
              font-poppins font-semibold text-2xl text-noir-black tracking-tighter active:scale-98 
              transition-all duration-200 ease-in-out">
              Sign up
              <span
                className={`${hover === "login-button" ? "ml-6" : "ml-2"} transition-all duration-200 ease-out`}>
                →
              </span>
            </button>
          </div>
          <p
            className="text-[0.8rem] text-noir-black font-poppins tracking-tight 
          absolute bottom-2 w-full flex justify-center cursor-default">
            {`have an accoount ? `}
            <span
              onClick={() => setLogIn(!logIn)}
              className="text-real-blue cursor-pointer ml-1">
              {" "}
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnterPage;
