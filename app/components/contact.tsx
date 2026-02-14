"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
    const socialLinks = [
        {
            title: "GitHub",
            href: "https://github.com/ahmedchsalah",
            icon: <FaGithub className="w-full h-full" />,
            color: "hover:bg-gray-700",
            textColor: "group-hover:text-gray-900",
        },
        {
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/ahmed-chikh-salah-6226b3268",
            icon: <FaLinkedin className="w-full h-full" />,
            color: "hover:bg-blue-600",
            textColor: "group-hover:text-blue-600",
        },
        {
            title: "Instagram",
            href: "https://www.instagram.com/ahmedchs22?igsh=MWVwdjc0Mm1sc3czag==",
            icon: <FaInstagram className="w-full h-full" />,
            color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600",
            textColor: "group-hover:text-pink-500",
        },
        {
            title: "Facebook",
            href: "https://www.facebook.com/share/1A4AiNPufm/",
            icon: <FaFacebook className="w-full h-full" />,
            color: "hover:bg-blue-700",
            textColor: "group-hover:text-blue-700",
        },
        {
            title: "Email",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=ahmed.ckikhsalah@univ-constantine2.dz",
            icon: <FaEnvelope className="w-full h-full" />,
            color: "hover:bg-red-600",
            textColor: "group-hover:text-red-600",
        },
    ];

    return (
        <section className="relative py-28 px-6 md:px-12" id="contact">
            {/* Animated Background Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.5) 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-mono text-cyan-400 tracking-widest uppercase"
                    >
                        Let's Connect
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Have a project in mind or just want to chat? Feel free to reach out through any of these platforms!
                    </motion.p>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Left: Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Email Card */}
                        <div className="group relative p-6 bg-gradient-to-br from-cyan-500/10 to-teal-500/5 border border-cyan-500/20 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-teal-500/0 group-hover:from-cyan-500/10 group-hover:to-teal-500/5 transition-all duration-500" />

                            <div className="relative flex items-start gap-4">
                                <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Email Me</h3>
                                    <a
                                        href="mailto:ahmed.ckikhsalah@univ-constantine2.dz"
                                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm break-all"
                                    >
                                        ahmed.ckikhsalah@univ-constantine2.dz
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="group relative p-6 bg-gradient-to-br from-teal-500/10 to-emerald-500/5 border border-teal-500/20 rounded-2xl hover:border-teal-400/50 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-emerald-500/0 group-hover:from-teal-500/10 group-hover:to-emerald-500/5 transition-all duration-500" />

                            <div className="relative flex items-start gap-4">
                                <div className="p-3 bg-teal-500/20 rounded-xl group-hover:scale-110 transition-transform">
                                    <MapPin className="w-6 h-6 text-teal-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Location</h3>
                                    <p className="text-gray-400 text-sm">Constantine, Algeria</p>
                                </div>
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div className="group relative p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20 rounded-2xl hover:border-emerald-400/50 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/5 transition-all duration-500" />

                            <div className="relative flex items-start gap-4">
                                <div className="p-3 bg-emerald-500/20 rounded-xl group-hover:scale-110 transition-transform">
                                    <Send className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1 flex items-center gap-2">
                                        Availability
                                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                    </h3>
                                    <p className="text-gray-400 text-sm">Open for freelance opportunities</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                Connect With Me
                            </h3>

                            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 gap-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`group relative aspect-square flex flex-col items-center justify-center gap-2 p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl ${link.color} transition-all duration-300 overflow-hidden`}
                                    >
                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-teal-500/0 group-hover:from-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-300" />

                                        {/* Icon */}
                                        <div className={`relative w-10 h-10 text-white ${link.textColor} transition-colors duration-300`}>
                                            {link.icon}
                                        </div>

                                        {/* Label */}
                                        <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                      {link.title}
                    </span>

                                        {/* Shine Effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: "100%" }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    </motion.a>
                                ))}
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl" />
                            <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-2xl" />
                        </div>

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative p-6 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-2xl text-center overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-teal-500/5 to-emerald-500/0" />

                            <div className="relative">
                                <p className="text-gray-300 mb-4">
                                    Ready to start a project together?
                                </p>
                                <a
                                    href="mailto:ahmed.ckikhsalah@univ-constantine2.dz"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                                >
                                    <Mail className="w-4 h-4" />
                                    Send Message
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}