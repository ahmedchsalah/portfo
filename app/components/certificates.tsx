"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";

// YOUR ACTUAL CERTIFICATES - Add your certificate images to /public/certificates/
const certificates = [
    {
        title: "Machine Learning Specialization",
        issuer: "DeepLearning.AI",
        date: "2025",
        description: "Comprehensive specialization covering supervised learning, neural networks, and best practices in machine learning",
        image: "/ML.png", // ADD YOUR IMAGE HERE
        verifyLink: "https://coursera.org/verify/specialization/6FEEYI0MJ1ND",
        skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Deep Learning Specialization",
        issuer: "DeepLearning.AI",
        date: "2025",
        description: "Advanced deep learning specialization covering CNNs, RNNs, LSTMs, GRUs, transformers, Attention mechanisms, and deployment strategies",
        image: "/DL.png", // ADD YOUR IMAGE HERE
        verifyLink: "https://coursera.org/verify/specialization/4KEFB6VJB750",
        skills: ["Deep Learning", "CNNs", "RNNs", "PyTorch", "Computer Vision"],
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "AWS Cloud Foundations",
        issuer: "Amazon Web Services",
        date: "2025",
        description: "Foundational AWS certification covering cloud concepts, core services, security, and pricing",
        image: "/AWS.png", // ADD YOUR IMAGE HERE
        verifyLink: "https://www.credly.com/go/2ocpkP3u",
        skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM"],
        color: "from-orange-500 to-yellow-500",
    },
];

export default function CertificatesSection() {
    const [selectedCert, setSelectedCert] = useState<number | null>(null);

    return (
        <div className="w-full py-28 px-6" id="certificates">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-mono text-cyan-400 tracking-widest uppercase"
                    >
                        Professional Growth
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Certificates & Achievements
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Continuous learning through recognized certifications from industry leaders
                    </motion.p>
                </div>

                {/* Certificates Grid - FIXED HEIGHT */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative flex"
                        >
                            {/* Card - FIXED: Added flex flex-col to make all cards same height */}
                            <div className="relative w-full flex flex-col rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                {/* Certificate Image - MAIN FEATURE */}
                                <div className="relative h-64 overflow-hidden cursor-pointer flex-shrink-0" onClick={() => setSelectedCert(index)}>
                                    {/* Image */}
                                    <img
                                        src={cert.image}
                                        alt={`${cert.title} Certificate`}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-500 flex items-center justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1 }}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <div className="px-6 py-3 bg-black/80 backdrop-blur-sm border border-cyan-400 rounded-lg flex items-center gap-2 text-cyan-400 font-semibold">
                                                <Sparkles className="w-5 h-5" />
                                                <span>Click to Enlarge</span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/80 backdrop-blur-sm border border-cyan-500/50 rounded-full">
                                        <div className="flex items-center gap-2">
                                            <Award className="w-4 h-4 text-cyan-400" />
                                            <span className="text-xs font-mono text-cyan-400">CERTIFIED</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content - FIXED: Added flex-1 to fill remaining space */}
                                <div className="relative p-6 space-y-4 flex-1 flex flex-col">
                                    {/* Title & Issuer */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                                            {cert.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <CheckCircle className="w-4 h-4 text-teal-400" />
                                            <span>{cert.issuer}</span>
                                            <span className="text-gray-600">•</span>
                                            <span>{cert.date}</span>
                                        </div>
                                    </div>

                                    {/* Description - FIXED: Added flex-1 to push content down */}
                                    <p className="text-gray-400 text-sm leading-relaxed flex-1">
                                        {cert.description}
                                    </p>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 cursor-default"
                                            >
                        {skill}
                      </span>
                                        ))}
                                    </div>

                                    {/* Verify Button - FIXED: Now at bottom due to flex layout */}
                                    <a
                                        href={cert.verifyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-lg text-sm font-medium text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 w-full justify-center"
                                    >
                                        <span>Verify Credential</span>
                                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>

                                {/* Floating Particles */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60"
                                        style={{
                                            top: `${20 + i * 25}%`,
                                            right: `${8 + i * 4}%`,
                                        }}
                                        animate={{
                                            y: [0, -12, 0],
                                            opacity: [0.3, 0.7, 0.3],
                                        }}
                                        transition={{
                                            duration: 2.5 + i * 0.5,
                                            repeat: Infinity,
                                            delay: i * 0.4,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Image Modal for Enlarged View */}
                {selectedCert !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute -top-12 right-0 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all"
                            >
                                Close ✕
                            </button>

                            {/* Certificate Image */}
                            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl">
                                <img
                                    src={certificates[selectedCert].image}
                                    alt={certificates[selectedCert].title}
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Certificate Info Below */}
                            <div className="mt-6 p-6 bg-gray-900/90 backdrop-blur-sm border border-cyan-500/20 rounded-xl">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {certificates[selectedCert].title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {certificates[selectedCert].issuer} • {certificates[selectedCert].date}
                                </p>
                                <a
                                    href={certificates[selectedCert].verifyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Verify on Official Website
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}