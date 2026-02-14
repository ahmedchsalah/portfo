"use client";

import { useEffect, useRef, useState } from "react";
import NavBar from "@/app/components/NavBar";
import AboutSection from "@/app/components/about";
import SkillsSection from "@/app/components/skills";
import { Projects } from "@/app/components/projects";
import ContactSection from "@/app/components/contact";
import CertificatesSection from "@/app/components/certificates";

// Starfield Background Effect
const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Star {
      x: number;
      y: number;
      z: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.z = Math.random() * canvas.width;
        this.size = 0;
      }

      update(speed: number) {
        this.z -= speed;
        if (this.z <= 0) {
          this.z = canvas.width;
          this.x = Math.random() * canvas.width - canvas.width / 2;
          this.y = Math.random() * canvas.height - canvas.height / 2;
        }
      }

      draw() {
        const x = (this.x / this.z) * canvas.width + canvas.width / 2;
        const y = (this.y / this.z) * canvas.height + canvas.height / 2;
        const size = (1 - this.z / canvas.width) * 2;

        const brightness = 1 - this.z / canvas.width;
        const hue = 180 + brightness * 30;

        ctx.fillStyle = `hsla(${hue}, 70%, ${50 + brightness * 50}%, ${brightness})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        if (size > 0.5) {
          ctx.strokeStyle = `hsla(${hue}, 70%, ${50 + brightness * 50}%, ${brightness * 0.3})`;
          ctx.lineWidth = size / 2;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(
              (this.x / (this.z + 5)) * canvas.width + canvas.width / 2,
              (this.y / (this.z + 5)) * canvas.height + canvas.height / 2
          );
          ctx.stroke();
        }
      }
    }

    const stars: Star[] = [];
    for (let i = 0; i < 800; i++) {
      stars.push(new Star());
    }

    let speed = 2;

    const animate = () => {
      ctx.fillStyle = "rgba(5, 10, 20, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update(speed);
        star.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
      <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ background: "#050A14" }}
      />
  );
};

// Nebula Cloud Effect
const NebulaEffect = () => {
  return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="nebula nebula-1" />
        <div className="nebula nebula-2" />
        <div className="nebula nebula-3" />

        <style jsx>{`
          .nebula {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            opacity: 0.15;
            mix-blend-mode: screen;
            animation: float 30s ease-in-out infinite;
          }

          .nebula-1 {
            width: 800px;
            height: 800px;
            background: radial-gradient(circle, #0ea5e9 0%, #06b6d4 40%, transparent 70%);
            top: -20%;
            right: -10%;
            animation-delay: 0s;
          }

          .nebula-2 {
            width: 1000px;
            height: 1000px;
            background: radial-gradient(circle, #14b8a6 0%, #0ea5e9 40%, transparent 70%);
            bottom: -30%;
            left: -20%;
            animation-delay: -10s;
          }

          .nebula-3 {
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, #06b6d4 0%, #14b8a6 40%, transparent 70%);
            top: 40%;
            left: 30%;
            animation-delay: -20s;
          }

          @keyframes float {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(50px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-30px, 30px) scale(0.9);
            }
          }
        `}</style>
      </div>
  );
};

// Hexagon Grid Overlay
const HexagonGrid = () => {
  return (
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern
                id="hexagons"
                width="50"
                height="43.4"
                patternUnits="userSpaceOnUse"
                patternTransform="scale(2)"
            >
              <polygon
                  points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
                  fill="none"
                  stroke="url(#hexGradient)"
                  strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
  );
};

// Energy Lines Effect
const EnergyLines = () => {
  return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(5)].map((_, i) => (
            <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{
                  top: `${20 + i * 15}%`,
                  left: "-100%",
                  width: "200%",
                  animation: `scanline ${3 + i * 0.5}s linear infinite`,
                  animationDelay: `${i * 0.7}s`,
                }}
            />
        ))}
        <style jsx>{`
          @keyframes scanline {
            0% {
              transform: translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateX(50%);
              opacity: 0;
            }
          }
        `}</style>
      </div>
  );
};

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
      <div className="bg-[#050A14] min-h-screen">
        <NavBar />

        <div className="relative flex flex-col">
          {/* EPIC HERO SECTION */}
          <div className="relative min-h-screen overflow-hidden">
            {/* Layered Backgrounds */}
            <StarfieldBackground />
            <NebulaEffect />
            <HexagonGrid />
            <EnergyLines />

            {/* Mouse-following spotlight */}
            <div
                className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
                style={{
                  background: `radial-gradient(circle 800px at ${mousePos.x}% ${mousePos.y}%, rgba(6, 182, 212, 0.08), transparent 60%)`,
                }}
            />

            {/* Vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                      "radial-gradient(ellipse at center, transparent 0%, rgba(5, 10, 20, 0.8) 100%)",
                }}
            />

            {/* HERO CONTENT */}
            <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 min-h-screen py-20 gap-16">

              {/* LEFT: Text Content */}
              <div className="flex-1 text-left space-y-8 max-w-2xl">
                {/* Status Badge */}
                <div
                    className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 backdrop-blur-xl rounded-full border border-cyan-500/20 animate-fadeInUp"
                    style={{ animationDelay: "0.1s" }}
                >
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </div>
                  <span className="text-sm font-medium text-cyan-300">
                  Available for freelance work
                </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h2
                      className="text-xl md:text-2xl font-light text-gray-400 tracking-wide animate-fadeInUp"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        animationDelay: "0.2s",
                      }}
                  >
                    {"<Hello, I'm />"}
                  </h2>

                  <h1
                      className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none animate-fadeInUp"
                      style={{
                        fontFamily: "'Cabinet Grotesk', 'Outfit', sans-serif",
                        animationDelay: "0.3s",
                      }}
                  >
                    <span className="block text-white">Ahmed</span>
                    <span
                        className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 animate-shimmer"
                        style={{ backgroundSize: "200% auto" }}
                    >
                    Fullstack
                  </span>
                    <span
                        className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 animate-shimmer"
                        style={{ backgroundSize: "200% auto", animationDelay: "0.5s" }}
                    >
                    Developer
                  </span>
                  </h1>
                </div>

                {/* Description */}
                <p
                    className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl animate-fadeInUp"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      animationDelay: "0.5s",
                    }}
                >
                  Crafting pixel-perfect, high-performance web experiences with
                  cutting-edge technologies. Specializing in React, Next.js, and modern
                  full-stack development.
                </p>

                {/* Tech Stack Pills */}
                <div
                    className="flex flex-wrap gap-3 animate-fadeInUp"
                    style={{ animationDelay: "0.6s" }}
                >
                  {[
                    { name: "Vue", color: "from-blue-500 to-cyan-500" },
                    { name: "Next.js", color: "from-gray-700 to-gray-900" },
                    { name: "TypeScript", color: "from-blue-600 to-blue-800" },
                    { name: "Laravel", color: "from-green-600 to-green-800" },
                    { name: "Tailwind", color: "from-cyan-500 to-blue-500" },
                  ].map((tech, i) => (
                      <div
                          key={tech.name}
                          className="group relative px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-default overflow-hidden"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                        <span className="relative text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                      </div>
                  ))}
                </div>

                {/* CTA Buttons - FIXED TO SCROLL TO SECTIONS */}
                <div
                    className="flex flex-col sm:flex-row gap-4 pt-6 animate-fadeInUp"
                    style={{ animationDelay: "0.7s" }}
                >
                  <button
                      onClick={() => scrollToSection('projects')}
                      className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl font-bold text-white overflow-hidden shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
                  >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Projects
                    <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>

                  <button
                      onClick={() => scrollToSection('contact')}
                      className="group px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-cyan-500/50 rounded-xl font-bold text-white transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2"
                  >
                    <span>Let's Talk</span>
                    <svg
                        className="w-5 h-5 group-hover:rotate-12 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* RIGHT: Creative Photo Treatment */}
              <div
                  className="flex-shrink-0 relative animate-fadeInUp"
                  style={{ animationDelay: "0.4s" }}
              >
                <div className="relative group">
                  {/* Holographic Frame */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-3xl opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse" />

                  {/* Rotating Rings */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 border-t-cyan-500 border-r-teal-500" style={{ animation: "spin 8s linear infinite" }} />
                  </div>
                  <div className="absolute inset-4 animate-spin-reverse">
                    <div className="absolute inset-0 rounded-full border-2 border-teal-500/20 border-b-teal-500 border-l-emerald-500" style={{ animation: "spin 10s linear infinite reverse" }} />
                  </div>

                  {/* Main Photo Container */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                    {/* Hexagon Clip Path Container */}
                    <div
                        className="relative w-full h-full transform-gpu transition-all duration-700 group-hover:scale-105"
                        style={{
                          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                    >
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 p-[3px] bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 animate-shimmer" style={{ backgroundSize: "200% 200%" }}>
                        <div
                            className="w-full h-full bg-[#050A14]"
                            style={{
                              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                            }}
                        />
                      </div>

                      {/* Image with Overlay */}
                      <div className="absolute inset-[3px] overflow-hidden" style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}>
                        <img
                            src="/ahmed.jpg"
                            alt="Ahmed"
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Cyberpunk Scan Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 animate-scan pointer-events-none" />

                        {/* Grid Overlay */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage: `
                            linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, .2) 25%, rgba(6, 182, 212, .2) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .2) 75%, rgba(6, 182, 212, .2) 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, .2) 25%, rgba(6, 182, 212, .2) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .2) 75%, rgba(6, 182, 212, .2) 76%, transparent 77%, transparent)
                          `,
                              backgroundSize: "50px 50px",
                            }}
                        />

                        {/* Color Glitch Effect on Hover */}
                        <div className="absolute inset-0 mix-blend-screen opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/50 to-teal-500/50" />
                      </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400 animate-pulse" />
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-teal-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-teal-400 animate-pulse" style={{ animationDelay: "1s" }} />
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-400 animate-pulse" style={{ animationDelay: "1.5s" }} />
                  </div>

                  {/* Floating Data Points */}
                  <div className="absolute -right-12 top-20 px-4 py-3 bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg animate-float">
                    <div className="text-xs text-cyan-400 font-mono">Lines: 10k+</div>
                  </div>
                  <div className="absolute -left-12 bottom-32 px-4 py-3 bg-teal-500/10 backdrop-blur-xl border border-teal-500/30 rounded-lg animate-float" style={{ animationDelay: "1s" }}>
                    <div className="text-xs text-teal-400 font-mono">Projects: 10+</div>
                  </div>
                  <div className="absolute -right-16 bottom-12 px-4 py-3 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/30 rounded-lg animate-float" style={{ animationDelay: "2s" }}>
                    <div className="text-xs text-emerald-400 font-mono">Exp: 3yr</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
              <div className="flex flex-col items-center gap-3 text-cyan-400/60 hover:text-cyan-400 transition-colors cursor-pointer group">
                <span className="text-xs font-mono tracking-widest">SCROLL</span>
                <div className="w-6 h-10 border-2 border-current rounded-full p-1">
                  <div className="w-1.5 h-3 bg-current rounded-full mx-auto animate-scrollDown" />
                </div>
              </div>
            </div>
          </div>

          {/* Other Sections with Dark Theme */}
          <div className="relative w-full bg-gradient-to-b from-[#050A14] to-[#0A1525]">
            <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />
            <AboutSection />
          </div>

          <div className="relative w-full bg-[#0A1525]">
            <SkillsSection />
          </div>

          {/* CERTIFICATES SECTION - Placeholder for you to fill in later */}
          <div className="relative w-full bg-gradient-to-b from-[#0A1525] to-[#050A14]">
            <CertificatesSection />
          </div>

          <div className="relative w-full bg-[#050A14]">
            <Projects />
          </div>

          <div className="relative w-full bg-gradient-to-b from-[#050A14] to-[#0A1525]">
            <ContactSection />
          </div>
        </div>

        {/* Global Styles */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap');

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes scan {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100%);
            }
          }

          @keyframes scrollDown {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(20px);
              opacity: 0;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out backwards;
          }

          .animate-shimmer {
            animation: shimmer 5s ease infinite;
          }

          .animate-scan {
            animation: scan 4s ease-in-out infinite;
          }

          .animate-scrollDown {
            animation: scrollDown 2s ease-in-out infinite;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }

          .animate-spin-reverse {
            animation: spin 10s linear infinite reverse;
          }

          html {
            scroll-behavior: smooth;
            scroll-padding-top: 80px;
          }

          ::-webkit-scrollbar {
            width: 12px;
          }

          ::-webkit-scrollbar-track {
            background: #050A14;
            border-left: 1px solid rgba(6, 182, 212, 0.1);
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #06b6d4, #14b8a6);
            border-radius: 6px;
            border: 2px solid #050A14;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #0ea5e9, #06b6d4);
          }

          h1, h2, h3 {
            font-feature-settings: "ss01", "ss02", "cv01", "cv02";
          }
        `}</style>
      </div>
  );
}