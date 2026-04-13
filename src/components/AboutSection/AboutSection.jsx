import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react';

const features = [
    { label: "SEO Experts", icon: <Target className="w-5 h-5 text-orange-400" /> },
    { label: "Performance", icon: <Zap className="w-5 h-5 text-orange-400" /> },
    { label: "Social Growth", icon: <Sparkles className="w-5 h-5 text-orange-400" /> }
];

const AboutSection = () => {
    return (
        <section className="relative bg-[#030712] py-24 px-6 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <Sparkles className="w-4 h-4 text-orange-400" />
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                            About iBraine
                        </span>
                    </div>

                    <h2 className="text-white text-4xl md:text-6xl leading-tight">
                        Scaling Businesses with{" "}
                        <span className="italic text-orange-400">
                            Data-Driven Digital Marketing
                        </span>
                    </h2>
                </motion.div>

                {/* Content */}
                <div className="grid lg:grid-cols-12 gap-10">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-7 bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl"
                    >
                        <p className="text-gray-100 text-lg md:text-2xl leading-relaxed mb-8">
                            We don’t just run ads; we build full-spectrum digital ecosystems across{" "}
                            <span className="font-bold underline decoration-orange-400">
                                Social, Search, and Performance
                            </span>{" "}
                            designed to scale your revenue.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                            {features.map((item, i) => (
                                <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    {item.icon}
                                    <p className="text-xs font-bold text-gray-300 mt-2 uppercase">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our goal is simple: turn your digital presence into a revenue-generating asset.
                            We do this using performance-driven strategies that:
                        </p>

                        <ul className="text-gray-400 text-lg space-y-3">
                            <li><strong>Influence Buyers:</strong> Engage your ideal audience.</li>
                            <li><strong>Drive Traffic:</strong> Dominate search & social.</li>
                            <li><strong>Generate Revenue:</strong> Convert users into customers.</li>
                        </ul>

                        <div className="mt-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="inline-flex items-center gap-3 bg-orange-400 px-8 py-4 rounded-full font-bold text-black"
                            >
                                GET A FREE AUDIT
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;