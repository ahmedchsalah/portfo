"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
    {
        title: "Food Delivery Website",
        description: "Modern frontend website for food delivery using Vite + React with smooth animations and responsive design",
        liveUrl: "https://food-website-sooty-xi.vercel.app/",
        githubUrl: null,
        image: "/food.png",
        tech: ["React", "Vite", "CSS3"],
        color: "from-orange-500 to-red-500",
        hasLive: true,
    },
    {
        title: "Alfenart Project",
        description: "Full-stack artisan marketplace with Laravel backend and React admin panel for seamless management",
        liveUrl: "https://www.alfenart.com",
        githubUrl: null,
        image: "/alfenart.png",
        tech: ["Laravel", "React", "MySQL"],
        color: "from-purple-500 to-pink-500",
        hasLive: true,
    },
    {
        title: "Travel Website",
        description: "Next.js powered travel platform with Tailwind CSS featuring modern UI and optimal performance",
        liveUrl: "https://travel-website-rho-amber.vercel.app/",
        githubUrl: null,
        image: "/travel.png",
        tech: ["Next.js", "Tailwind", "TypeScript"],
        color: "from-blue-500 to-cyan-500",
        hasLive: true,
    },
    {
        title: "Booking Platform",
        description: "Full-stack booking system built with NestJS backend and Vue.js frontend for seamless reservations",
        liveUrl: null,
        githubUrl: "https://github.com/ahmedchsalah/booking",
        image: "/booking.png",
        tech: ["NestJS", "Vue.js", "PostgreSQL"],
        color: "from-green-500 to-emerald-500",
        hasLive: false,
    },
    {
        title: "Real time dashboard for green house IoT/AWS",
        description: "Dashboard to display iot sensors captured data with connecting to AWS iot core and hosted backend in AWS ECS",
        liveUrl: null,
        githubUrl: "https://github.com/ahmedchsalah/iot-project",
        image: "/iot.png", // ADD YOUR IMAGE
        tech: ["AWS", "EC2", "S3", "CloudFormation"],
        color: "from-yellow-500 to-orange-500",
        hasLive: false,
    },
    {
        title: "RAG AI chatbot",
        description: "Retrieval-Augmented Generation chatbot using LangChain and vector databases for personal courses ",
        liveUrl: null,
        githubUrl: "https://github.com/ahmedchsalah/Rag_project",
        image: "/RAG.png", // ADD YOUR IMAGE
        tech: ["Python", "LangChain", "React", "FastAPI"],
        color: "from-cyan-500 to-blue-500",
        hasLive: false,
    },
];

export function Projects() {
    return (
        <div className="w-full py-28 px-6" id="projects">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-mono text-cyan-400 tracking-widest uppercase"
                    >
                        My Work
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Featured Projects
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        A selection of projects showcasing full-stack development, cloud infrastructure, and AI/ML capabilities
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative flex"
                        >
                            {/* Card - FIXED: Added flex flex-col to make all cards same height */}
                            <div className="relative w-full flex flex-col rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                                {/* Background Gradient on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden flex-shrink-0">
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10" />

                                    {/* Project Image */}
                                    <img
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        {project.hasLive ? (
                                            <div className="px-3 py-1.5 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/50 rounded-full flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                                <span className="text-xs font-mono text-emerald-400">LIVE</span>
                                            </div>
                                        ) : (
                                            <div className="px-3 py-1.5 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-full flex items-center gap-2">
                                                <Code2 className="w-3 h-3 text-cyan-400" />
                                                <span className="text-xs font-mono text-cyan-400">CODE</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Tech Badges */}
                                    <div className="absolute top-4 right-4 flex flex-wrap gap-2 z-20 max-w-[60%] justify-end">
                                        {project.tech.slice(0, 2).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded text-xs font-mono text-cyan-400"
                                            >
                        {tech}
                      </span>
                                        ))}
                                        {project.tech.length > 2 && (
                                            <span className="px-2 py-1 bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded text-xs font-mono text-cyan-400">
                        +{project.tech.length - 2}
                      </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content - FIXED: Added flex-1 to fill remaining space */}
                                <div className="relative p-6 space-y-4 z-10 flex-1 flex flex-col">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Description - FIXED: Added flex-1 to push buttons down */}
                                    <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    {/* All Tech Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-xs font-mono text-cyan-400"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons - FIXED: Now at bottom due to flex layout */}
                                    <div className="flex gap-3 pt-4">
                                        {project.hasLive && project.liveUrl ? (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                                            >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                            </a>
                                        ) : null}

                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`${project.hasLive ? '' : 'flex-1'} px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-semibold text-sm text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2`}
                                            >
                                                <Github className="w-4 h-4" />
                                                {project.hasLive ? 'Code' : 'View Code'}
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <a
                        href="https://github.com/ahmedchsalah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border-2 border-cyan-500/30 rounded-xl font-bold text-white hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                    >
                        <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        <span>View All Projects on GitHub</span>
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
                    </a>
                </motion.div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Demo Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-cyan-400" />
                        <span>Source Code Only</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
