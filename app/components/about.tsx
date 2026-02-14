"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Database, Cloud, Brain, Sparkles } from "lucide-react";

export default function AboutSection() {
    const highlights = [
        { icon: <Code2 className="w-6 h-6" />, text: "Fullstack Development", color: "cyan" },
        { icon: <Database className="w-6 h-6" />, text: "Backend Specialist", color: "teal" },
        { icon: <Brain className="w-6 h-6" />, text: "AI & Data Science", color: "emerald" },
        { icon: <Cloud className="w-6 h-6" />, text: "Cloud Infrastructure", color: "cyan" },
    ];

    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center py-28 px-6 md:px-16"
        >
            {/* Animated Grid Background */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                }}
            />

            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* LEFT: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        {/* Header */}
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-sm font-mono text-cyan-400 tracking-widest uppercase"
                            >
                                Get to know me
                            </motion.span>

                            <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
                                About Me
                            </h2>

                            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full" />
                        </div>

                        {/* Story */}
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="relative pl-6 border-l-2 border-cyan-500/30 hover:border-cyan-400 transition-colors"
                            >
                                Hi, I'm <span className="text-cyan-400 font-semibold">Ahmed Chikh Salah</span>, a Junior Fullstack Developer with a strong passion for{" "}
                                <span className="text-teal-400 font-semibold">backend development</span>. I love designing scalable APIs, managing databases efficiently, and optimizing application performance.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="relative pl-6 border-l-2 border-teal-500/30 hover:border-teal-400 transition-colors"
                            >
                                That said, I also work on the{" "}
                                <span className="text-emerald-400 font-semibold">frontend</span>, exploring modern UI libraries and frameworks to create smooth user experiences that users love.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="relative pl-6 border-l-2 border-emerald-500/30 hover:border-emerald-400 transition-colors"
                            >
                                Beyond web development, I'm diving into{" "}
                                <span className="text-cyan-400 font-semibold">Data Science</span> and{" "}
                                <span className="text-teal-400 font-semibold">AI</span>, exploring machine learning with PyTorch and TensorFlow. I'm also expanding my skills in{" "}
                                <span className="text-emerald-400 font-semibold">cloud technologies</span> like AWS to build scalable, modern solutions.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-gray-400"
                            >
                                I'm always eager to learn, experiment with new technologies, and refine my development workflow, making sure my work remains efficient, clean, and maintainable.
                            </motion.p>
                        </div>

                        {/* Highlight Pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap gap-3"
                        >
                            {highlights.map((item, i) => (
                                <div
                                    key={i}
                                    className={`group flex items-center gap-2 px-4 py-2 bg-${item.color}-500/10 border border-${item.color}-500/30 rounded-full hover:bg-${item.color}-500/20 hover:border-${item.color}-400 transition-all duration-300 cursor-default`}
                                >
                                    <div className={`text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="relative max-w-md mx-auto">
                            {/* Floating Particles */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0.2, 0.8, 0.2],
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                    }}
                                />
                            ))}

                            {/* Main Image Container */}
                            <div className="relative group">
                                {/* Glow Effect */}
                                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-3xl opacity-20 blur-3xl group-hover:opacity-30 transition-opacity" />

                                {/* Image Card */}
                                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-500 shadow-2xl shadow-cyan-500/20">
                                    {/* Image */}
                                    <div className="relative aspect-[4/3]">
                                        <Image
                                            src="/code.jpg"
                                            alt="Coding Illustration"
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-teal-500/20 mix-blend-overlay" />

                                        {/* Scan Line Effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
                                            animate={{
                                                y: ["-100%", "200%"],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />

                                        {/* Corner Accents */}
                                        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg" />
                                        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-teal-400 rounded-br-lg" />
                                    </div>

                                    {/* Info Badge */}
                                    <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-lg p-4">
                                        <div className="flex items-center gap-3">
                                            <Sparkles className="w-5 h-5 text-cyan-400" />
                                            <div>
                                                <div className="text-white font-semibold">Always Learning</div>
                                                <div className="text-sm text-gray-400">Exploring new tech daily</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Stats */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute -left-8 top-1/4 bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-4 hidden lg:block"
                                >
                                    <div className="text-2xl font-black text-cyan-400">3+</div>
                                    <div className="text-xs text-gray-400">Years Coding</div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 }}
                                    className="absolute -right-8 bottom-1/4 bg-teal-500/10 backdrop-blur-xl border border-teal-500/30 rounded-xl p-4 hidden lg:block"
                                >
                                    <div className="text-2xl font-black text-teal-400">10+</div>
                                    <div className="text-xs text-gray-400">Projects Done</div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}