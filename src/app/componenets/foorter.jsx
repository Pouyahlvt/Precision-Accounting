/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";

const skills = ["React", "Next.js", "javaScript", "Tailwind CSS", "framer motion"];

const highlights = [
  {
    year: "2023",
    title: "UI System Overhaul",
    desc: "Rebuilt the entire component library from scratch using atomic design principles, reducing design debt by 60%.",
  },
  {
    year: "2024",
    title: "Performance Sprint",
    desc: "Optimized bundle size and render cycles, bringing Lighthouse scores from 54 to 97 across all pages.",
  },
];

const members = [
  { initials: "PH", name: "Pouya Halavat", role: "Lead Developer" },
];

const ContactLink = ({ href, label, theme }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center text-sm font-ubuntu tracking-tight transition-all duration-200 w-fit
      ${theme === "light" ? "text-strong-blue hover:text-blue-700" : "text-sky-blue hover:text-white"}
    `}
  >
    <span className="group-hover:underline underline-offset-2">{label}</span>
  </a>
);

const Footer = ({ theme }) => {
  const [visible, setVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeHighlight, setActiveHighlight] = useState(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const textColor = theme === "light" ? "text-strong-blue" : "text-sky-blue";
  const mutedColor = theme === "light" ? "text-blue-600/70" : "text-sky-blue/60";
  const borderColor = theme === "light" ? "border-strong-blue/20" : "border-sky-blue/20";
  const cardBg = theme === "light" ? "bg-white/25 hover:bg-white/40 border-strong-blue/15" : "bg-white/5 hover:bg-white/10 border-sky-blue/15";
  const cardBgActive = theme === "light" ? "bg-white/50 border-strong-blue/30" : "bg-white/15 border-sky-blue/30";

  return (
    <footer
      ref={footerRef}
      className="relative w-full h-auto border-t-2 border-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={theme === "light" ? "/Images/mountain-light.png" : "/Images/mountain-dark.png"}
          alt="mountains"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        

        {/* LEFT: Contact */}
        <div
          className={`transition-all duration-700 delay-150 ease-out
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <p className={`text-xs uppercase tracking-widest mb-2 ${mutedColor}`}>About this project</p>
          <h2 className={`text-4xl font-ubuntu font-thin tracking-tighter mb-6 ${textColor}`}>
            About Web
          </h2>

          <div className={`w-12 h-px mb-8 ${theme === "light" ? "bg-strong-blue/40" : "bg-sky-blue/40"}`} />

          {/* Stack */}
          <div className="mb-8">
            <p className={`text-xs uppercase tracking-widest mb-3 ${mutedColor}`}>Stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <button
                  key={skill}
                  onMouseEnter={() => setActiveSkill(i)}
                  onMouseLeave={() => setActiveSkill(null)}
                  style={{ transitionDelay: visible ? `${i * 60}ms` : "0ms" }}
                  className={`px-3 py-1 rounded-full text-sm font-ubuntu border transition-all duration-300
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                    ${activeSkill === i
                      ? theme === "light"
                        ? "bg-strong-blue text-white border-strong-blue scale-105"
                        : "bg-sky-blue text-gray-900 border-sky-blue scale-105"
                      : theme === "light"
                        ? "border-strong-blue/30 text-strong-blue hover:border-strong-blue/60"
                        : "border-sky-blue/30 text-sky-blue hover:border-sky-blue/60"
                    }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* Project highlights — replaces "problems we solve" */}
          <div className="mb-8">
            <p className={`text-xs uppercase tracking-widest mb-3 ${mutedColor}`}>Project highlights</p>
            <div className="flex flex-col gap-2">
              {highlights.map((h, i) => (
                <div
                  key={h.year}
                  onMouseEnter={() => setActiveHighlight(i)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  style={{ transitionDelay: visible ? `${200 + i * 90}ms` : "0ms" }}
                  className={`p-4 rounded-lg border backdrop-blur-sm cursor-default transition-all duration-400
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    ${activeHighlight === i ? cardBgActive : cardBg}`}
                >
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className={`text-xs font-ubuntu font-semibold tracking-widest ${mutedColor}`}>{h.year}</span>
                    <span className={`text-sm font-ubuntu font-medium tracking-tight ${textColor}`}>{h.title}</span>
                  </div>
                  <p className={`text-xs font-ubuntu leading-relaxed transition-all duration-300
                    ${activeHighlight === i ? `${mutedColor} opacity-100 max-h-10` : `${mutedColor} opacity-60 max-h-10`}`}>
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our group */}
          <div>
            <p className={`text-xs uppercase tracking-widest mb-3 ${mutedColor}`}>Our group</p>
            <div className="flex flex-col gap-2">
              {members.map((m, i) => (
                <div
                  key={m.name}
                  style={{ transitionDelay: visible ? `${450 + i * 100}ms` : "0ms" }}
                  className={`flex items-center gap-3 transition-all duration-500
                    ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-ubuntu font-semibold 
                    ${theme === "light" ? "bg-strong-blue/10 text-strong-blue" : "bg-sky-blue/15 text-sky-blue"}`}>
                    {m.initials}
                  </div>
                  <div>
                    <p className={`text-sm font-ubuntu font-medium leading-tight ${textColor}`}>{m.name}</p>
                    <p className={`text-xs font-ubuntu ${mutedColor}`}>{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        

        {/* RIGHT: About Web */}
        <div
          className={`transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <p className={`text-xs uppercase tracking-widest mb-2 ${mutedColor}`}>Get in touch</p>
          <h2 className={`text-4xl font-ubuntu font-thin tracking-tighter mb-6 ${textColor}`}>
            Contact Me
          </h2>

          <div className={`w-12 h-px mb-8 ${theme === "light" ? "bg-strong-blue/40" : "bg-sky-blue/40"}`} />

          <div className="flex flex-col gap-2">
            <ContactLink href="mailto:pouyahalavat@gmail.com" label="pouyahalavat@gmail.com" theme={theme} />
            <ContactLink href="https://www.linkedin.com/in/pouya-halavat-phlvt" label="LinkedIn — Pouya Halavat" theme={theme} />
            <ContactLink href="https://github.com/Pouyahlvt" label="GitHub — pouya-halavat" theme={theme} />
            <ContactLink href="https://portfolio-pouyahalavat.vercel.app" label="Portfolio — pouya.dev" theme={theme} />
          </div>

          {/* Availability card */}
          <div className={`mt-10 p-5 rounded-xl border backdrop-blur-sm
            ${theme === "light" ? "border-strong-blue/20 bg-white/30" : "border-sky-blue/20 bg-white/5"}`}
          >
            <p className={`text-xs uppercase tracking-widest mb-1 ${mutedColor}`}>Status</p>
            <p className={`text-base font-ubuntu tracking-tight ${textColor}`}>
              Open for freelance projects and full-time roles.
            </p>
          </div>
        </div>
        
      </div>

      {/* Bottom bar */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-8 pb-6 pt-4 flex items-center justify-between
          border-t transition-all duration-700 delay-500
          ${borderColor}
          ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <p className={`text-xs font-ubuntu ${mutedColor}`}>
          © {new Date().getFullYear()} Pouya Halavat. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Pouyahlvt" target="_blank" rel="noopener noreferrer"
            className={`text-xs font-ubuntu transition-opacity duration-150 hover:opacity-100 opacity-60 ${textColor}`}>
            GitHub
          </a>
          <a href="www.linkedin.com/in/pouya-halavat-phlvt" target="_blank" rel="noopener noreferrer"
            className={`text-xs font-ubuntu transition-opacity duration-150 hover:opacity-100 opacity-60 ${textColor}`}>
            LinkedIn
          </a>
          <a href="https://portfolio-pouyahalavat.vercel.app" target="_blank" rel="noopener noreferrer"
            className={`text-xs font-ubuntu transition-opacity duration-150 hover:opacity-100 opacity-60 ${textColor}`}>
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;