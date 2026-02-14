"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { name: "Home", icon: "🏠" },
        { name: "About", icon: "👤" },
        { name: "Skills", icon: "⚡" },
        { name: "Certificates", icon: "🎓" },
        { name: "Projects", icon: "💼" },
        { name: "Contact", icon: "📧" },
    ];

    // Detect scroll for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map((item) => item.name.toLowerCase());
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Holographic Top Border */}
            <motion.div
                className="fixed top-0 left-0 w-full h-[2px] z-50"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, #06b6d4, #14b8a6, #10b981, transparent)",
                    backgroundSize: "200% 100%",
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "200% 0%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
                    scrolled
                        ? "bg-gradient-to-b from-[#050A14]/95 to-[#050A14]/80 backdrop-blur-2xl shadow-lg shadow-cyan-500/5"
                        : "bg-transparent"
                }`}
            >
                {/* Ambient Background Particles */}
                <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.2, 0.6, 0.2],
                                scale: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: 2.5 + Math.random() * 1.5,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-center py-5">
                        {/* Logo with Holographic Effect */}
                        <motion.a
                            href="#home"
                            className="relative group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="relative">
                                {/* Main Text */}
                                <h1 className="text-3xl md:text-4xl font-black tracking-tighter relative z-10">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white">
                    AHMED
                  </span>
                                </h1>

                                {/* Holographic Layers */}
                                <div className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute inset-0 text-3xl md:text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 translate-x-0.5 translate-y-0.5">
                    AHMED
                  </span>
                                    <span className="absolute inset-0 text-3xl md:text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 -translate-x-0.5 -translate-y-0.5">
                    AHMED
                  </span>
                                </div>

                                {/* Glow */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-full" />

                                {/* Underline Animation */}
                                <motion.div
                                    className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400"
                                    initial={{ width: "0%" }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.a>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-2">
                            {navItems.map((item, index) => {
                                const isActive = activeSection === item.name.toLowerCase();
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index, type: "spring" }}
                                    >
                                        <a
                                            href={`#${item.name.toLowerCase()}`}
                                            className="relative group px-4 py-2.5 rounded-xl overflow-hidden"
                                        >
                                            {/* Animated Background */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-teal-500/0"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: "100%" }}
                                                transition={{ duration: 0.6 }}
                                            />

                                            {/* Glass Background */}
                                            <div
                                                className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                                                    isActive
                                                        ? "bg-gradient-to-r from-cyan-500/20 to-teal-500/20 backdrop-blur-sm"
                                                        : "bg-white/0 group-hover:bg-white/5"
                                                }`}
                                            />

                                            {/* Border */}
                                            <div
                                                className={`absolute inset-0 rounded-xl border transition-all duration-300 ${
                                                    isActive
                                                        ? "border-cyan-400/60 shadow-lg shadow-cyan-500/20"
                                                        : "border-white/10 group-hover:border-cyan-400/30"
                                                }`}
                                            />

                                            {/* Content */}
                                            <div className="relative z-10 flex items-center gap-2">
                                                <span className="text-lg">{item.icon}</span>
                                                <span
                                                    className={`font-semibold text-sm transition-colors duration-300 ${
                                                        isActive
                                                            ? "text-cyan-300"
                                                            : "text-gray-300 group-hover:text-white"
                                                    }`}
                                                >
                          {item.name}
                        </span>
                                            </div>

                                            {/* Dot Indicator */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="navDot"
                                                    className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 380,
                                                        damping: 30,
                                                    }}
                                                >
                                                    <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping" />
                                                </motion.div>
                                            )}
                                        </a>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden relative p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 backdrop-blur-sm group overflow-hidden"
                        >
                            {/* Animated Background on Hover */}
                            <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -180, scale: 0 }}
                                        animate={{ rotate: 0, scale: 1 }}
                                        exit={{ rotate: 180, scale: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative z-10"
                                    >
                                        <X className="w-6 h-6 text-cyan-400" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 180, scale: 0 }}
                                        animate={{ rotate: 0, scale: 1 }}
                                        exit={{ rotate: -180, scale: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative z-10"
                                    >
                                        <Menu className="w-6 h-6 text-cyan-400" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Ripple Effect */}
                            <motion.div
                                className="absolute inset-0 rounded-xl border-2 border-cyan-400/50"
                                animate={{
                                    scale: [1, 1.5],
                                    opacity: [0.5, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden border-t border-cyan-500/20 overflow-hidden"
                        >
                            <div className="relative bg-gradient-to-b from-[#050A14]/98 to-[#0A1525]/98 backdrop-blur-2xl">
                                {/* Circuit Pattern Background */}
                                <div
                                    className="absolute inset-0 opacity-5"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.5) 1px, transparent 0)`,
                                        backgroundSize: "32px 32px",
                                    }}
                                />

                                <div className="relative px-6 py-8 space-y-3">
                                    {navItems.map((item, index) => {
                                        const isActive = activeSection === item.name.toLowerCase();
                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <a
                                                    href={`#${item.name.toLowerCase()}`}
                                                    onClick={() => setIsOpen(false)}
                                                    className="relative block group"
                                                >
                                                    <div
                                                        className={`relative px-6 py-4 rounded-xl overflow-hidden transition-all duration-300 ${
                                                            isActive ? "bg-cyan-500/10" : ""
                                                        }`}
                                                    >
                                                        {/* Hover Effect */}
                                                        <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"
                                                            initial={{ x: "-100%" }}
                                                            whileHover={{ x: "100%" }}
                                                            transition={{ duration: 0.6 }}
                                                        />

                                                        {/* Border */}
                                                        <div
                                                            className={`absolute inset-0 rounded-xl border transition-colors ${
                                                                isActive
                                                                    ? "border-cyan-400/50"
                                                                    : "border-transparent group-hover:border-cyan-400/30"
                                                            }`}
                                                        />

                                                        {/* Content */}
                                                        <div className="relative flex items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-2xl">{item.icon}</span>
                                                                <span
                                                                    className={`text-lg font-semibold transition-colors ${
                                                                        isActive
                                                                            ? "text-cyan-300"
                                                                            : "text-gray-300 group-hover:text-white"
                                                                    }`}
                                                                >
                                  {item.name}
                                </span>
                                                            </div>

                                                            {/* Arrow */}
                                                            <motion.span
                                                                className="text-cyan-400"
                                                                animate={isActive ? { x: [0, 5, 0] } : { x: 0 }}
                                                                transition={{
                                                                    duration: 1.5,
                                                                    repeat: isActive ? Infinity : 0,
                                                                }}
                                                            >
                                                                →
                                                            </motion.span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}