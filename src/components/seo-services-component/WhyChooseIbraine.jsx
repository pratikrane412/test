import React from "react";
import { motion } from "framer-motion";

const WhyChooseIbraine = () => {
    return (
        <section className="relative py-20 md:py-28 px-4 bg-[#fafbfc] overflow-hidden">

            {/* Grid Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Soft Gradient Glow */}
            <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-[#1872BA]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#FB8C32]/10 blur-[120px] rounded-full" />

            <div className="max-w-[1200px] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h2 className="text-3xl md:text-5xl font-semibold text-[#323232] leading-tight mb-6">
                        Why Brands Trust{" "}
                        <span className="bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
                            iBraine
                        </span>{" "}
                        for Growth
                    </h2>

                    <p className="text-[#323232]/70 text-sm md:text-base mb-5">
                        At iBraine, we don’t just run campaigns — we build scalable growth
                        systems. Our performance-driven strategies combine data, creativity,
                        and automation to deliver consistent and measurable results.
                    </p>

                    <p className="text-[#323232]/70 text-sm md:text-base mb-8">
                        From real-time optimization to deep analytics, we ensure every
                        marketing decision is backed by insights — helping you scale faster,
                        smarter, and sustainably.
                    </p>
                    <p className="text-[#323232]/70 text-sm md:text-base mb-8">
                        Our focus is on delivering long-term value by continuously testing, refining, and adapting strategies to changing market trends, ensuring your brand stays ahead of the competition.
                    </p>


                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#FB8C32] to-[#1872BA] text-white text-sm font-medium shadow-lg hover:shadow-xl transition"
                    >
                        Get Free Strategy →
                    </motion.button>

                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] border border-[#323232]/10">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200"
                            alt="SEO Growth"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 mt-6">

                        {[
                            { num: "₹20Cr+", label: "Revenue Generated" },
                            { num: "1000+", label: "Campaigns Executed" },
                            { num: "30+", label: "Experts Team" },
                            { num: "3x+", label: "Average ROI" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white/80 backdrop-blur-xl border border-[#323232]/10 rounded-xl p-4 shadow-md"
                            >
                                <p className="text-lg font-semibold text-[#323232]">
                                    {item.num}
                                </p>
                                <p className="text-xs text-[#323232]/60">
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </motion.div>

            </div>

            {/* Bottom Stats Strip */}
            <div className="max-w-[1100px] mx-auto mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">

                {[
                    { num: "170+", label: "Successful Campaigns" },
                    { num: "2000+", label: "Keywords Ranked" },
                    { num: "90 Days", label: "Avg. Time to Results" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#323232]">
                            {item.num}
                        </h3>
                        <p className="text-sm text-[#323232]/60 mt-1">
                            {item.label}
                        </p>
                    </motion.div>
                ))}

            </div>

        </section>
    );
};

export default WhyChooseIbraine;