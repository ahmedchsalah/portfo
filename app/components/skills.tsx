"use client";

import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaLaravel, FaAws } from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiNestjs,
    SiDjango,
    SiSpringboot,
    SiPytorch,
    SiTensorflow,
} from "react-icons/si";

const skills = [
    { name: "React.js", icon: <FaReact className="group-hover:text-[#61DAFB]" />, percentage: 75 },
    { name: "Vue.js", icon: <FaVuejs className="group-hover:text-[#42b883]" />, percentage: 75 },
    { name: "Next.js", icon: <SiNextdotjs className="group-hover:text-white" />, percentage: 65 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="group-hover:text-[#38bdf8]" />, percentage: 80 },
    { name: "Bootstrap", icon: <SiBootstrap className="group-hover:text-[#7952B3]" />, percentage: 50 },
    { name: "Laravel", icon: <FaLaravel className="group-hover:text-[#FF2D20]" />, percentage: 80 },
    { name: "NestJS", icon: <SiNestjs className="group-hover:text-[#E0234E]" />, percentage: 70 },
    { name: "Django", icon: <SiDjango className="group-hover:text-[#092E20]" />, percentage: 65 },
    { name: "Spring Boot", icon: <SiSpringboot className="group-hover:text-[#6DB33F]" />, percentage: 65 },
    { name: "AWS Cloud", icon: <FaAws className="group-hover:text-[#FF9900]" />, percentage: 80 },
    { name: "PyTorch", icon: <SiPytorch className="group-hover:text-[#EE4C2C]" />, percentage: 65 },
    { name: "TensorFlow", icon: <SiTensorflow className="group-hover:text-[#FF6F00]" />, percentage: 65 },
];

export default function SkillsSection() {
    return (
        <div className="w-full text-white py-28 px-6" id="skills">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block"
                    >
            <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase">
              What I Can Do
            </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Technical Arsenal
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        From frontend magic to backend power, cloud infrastructure to AI/ML
                    </motion.p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-500/20 p-6 transition-all duration-500 hover:border-cyan-400/50">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-teal-500/0 to-emerald-500/0 group-hover:from-cyan-500/10 group-hover:via-teal-500/5 group-hover:to-emerald-500/10 transition-all duration-500 rounded-2xl" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon Container */}
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="relative text-7xl grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                                            {skill.icon}
                                        </div>
                                    </div>

                                    {/* Skill Name */}
                                    <h3 className="text-xl font-bold text-center mb-4 text-white group-hover:text-cyan-300 transition-colors">
                                        {skill.name}
                                    </h3>

                                    {/* Progress Section - FIXED! */}
                                    <div className="mt-auto space-y-2">
                                        {/* Percentage Display - NOW PROPERLY SHOWN */}
                                        <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                        Proficiency
                      </span>
                                            <span className="text-lg font-bold text-cyan-400 font-mono">
                        {skill.percentage}%
                      </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                                                viewport={{ once: true }}
                                                className="h-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-full relative"
                                            >
                                                {/* Shine Effect */}
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                    animate={{
                                                        x: ["-100%", "200%"],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                        delay: index * 0.2,
                                                    }}
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { label: "Frontend", count: "3+", icon: "🎨" },
                        { label: "Backend", count: "2+", icon: "⚙️" },
                        { label: "Cloud & AI", count: "1+", icon: "☁️" },
                        { label: "Years Exp", count: "3+", icon: "🚀" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative p-6 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 border border-cyan-500/20 rounded-xl text-center group cursor-default overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-teal-500/0 group-hover:from-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-500" />

                            <div className="relative">
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-3xl font-black text-cyan-400 mb-1">{stat.count}</div>
                                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}