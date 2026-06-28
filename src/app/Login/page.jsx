"use client";

import { Eye, EyeOff } from "lucide-react";
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
          {<InputMaker label={"Username or Email"} divClass={"mt-25"} />}
          {<InputMaker label={"Password"} type="password" divClass={"mt-4"} />}
          <div className="flex w-full justify-center mt-6">
            <button
              onMouseEnter={(e) => {
                (e.preventDefault(), setHover("login-button"));
              }}
              onMouseLeave={(e) => {
                (e.preventDefault(), setHover(null));
              }}
              className="border-[0.1rem]  w-[80%] cursor-pointer border-noir-black rounded-2xl px-4 py-2 
              font-poppins font-semibold text-3xl text-noir-black tracking-tighter active:scale-98 
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
          {<InputMaker label={"Email"} divClass={"mt-15"} />}
          {<InputMaker label={"Username"} />}
          {<InputMaker label={"Password"} type="password" />}
          {<InputMaker label={"Company Name"} />}
          <div className="flex w-full justify-center mt-6">
            <button
              onMouseEnter={() => setHover("login-button")}
              onMouseLeave={() => setHover(null)}
              className="border-[0.1rem] w-[80%] cursor-pointer border-noir-black rounded-2xl px-4 py-2 
              font-poppins font-semibold text-3xl text-noir-black tracking-tighter active:scale-98 
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
              className="text-real-blue cursor-pointer ml-1 ">
              {" "}
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const InputMaker = ({ label, type = "text", className, divClass = "mt-2" }) => {
  const [state, setState] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleBlur = (e) => {
    if (e.target.value === "") setState(false);
  };
  return (
    <div
      id={`${label}`}
      className={`${divClass} relative  flex w-full justify-center pt-8`}>
      <p
        className={`absolute font-poppins font-thin text-noir-black tracking-tight text-xl -z-1
         ${state ? "top-0 left-18" : "top-10.5 left-20"} transition-all duration-500 ease-out`}>
        {label}
      </p>
      <input
        onFocus={() => setState(true)}
        onBlur={handleBlur}
        type={visible ? "text" : type}
        className={`${className} w-full mx-15 py-2 font border-[0.1rem] border-noir-black rounded-2xl px-4
              font-poppins text-noir-black tracking-tight text-xl outline-0 focus:shadow-xl/20 
               transition-all duration-500 ease-out`}
      />

      <div
        onClick={() => setVisible(!visible)}
        className={`${type.toUpperCase() !== "PASSWORD" ? "hidden" : ""}`}>
        <Eye
          className={`absolute right-18 mt-3 cursor-pointer transition-all duration-300 ease-in-out ${visible ? "" : "opacity-0 scale-0"}`}
        />
        <EyeOff
          className={`absolute right-18 mt-3 cursor-pointer transition-all duration-300 ease-in-out ${!visible ? "" : "opacity-0 scale-0"}`}
        />
      </div>
    </div>
  );
};

export default EnterPage;
