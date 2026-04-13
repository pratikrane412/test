import React from "react";
import { motion } from "framer-motion";

const stats = [
    {
        number: "01",
        value: "₹20Cr+",
        label: "Revenue Generated",
        sub: "Across performance campaigns",
    },
    {
        number: "02",
        value: "1000+",
        label: "Campaigns Executed",
        sub: "Across multiple industries",
    },
    {
        number: "03",
        value: "30+",
        label: "Marketing Experts",
        sub: "Google & Meta certified team",
    },
    {
        number: "04",
        value: "3x+",
        label: "Average ROI",
        sub: "With data-driven scaling",
    },
];

const WhyChooseIbraine = () => {
    return (
        <section className="py-16 md:py-24 px-4 bg-[#fafbfc] font-sans">
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-start">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#323232] leading-tight mb-6">
                        Why Brands Trust <br />
                        <span className="bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
                            iBraine for Performance Growth
                        </span>
                    </h2>

                    <p className="text-[#323232]/70 text-sm md:text-base mb-6 leading-relaxed">
                        Performance marketing isn’t just about running ads — it’s about building
                        scalable systems that drive consistent revenue. At iBraine, we combine
                        data, creativity, and strategy to deliver measurable results.
                    </p>


                    <p className="text-[#323232]/70 text-sm md:text-base mb-8 leading-relaxed">
                        We also emphasize deep audience insights and performance tracking, allowing us to refine campaigns in real time and maximize ROI. By leveraging the right mix of platforms, automation tools, and data-driven decision-making, we ensure your marketing efforts remain efficient, adaptable, and aligned with your long-term business objectives.</p>

                    {/* CTA */}
                    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FB8C32] to-[#1872BA] text-white font-medium shadow-md hover:scale-[1.05] transition">
                        Get a Free Strategy →
                    </button>

                </motion.div>

                {/* RIGHT STATS */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >

                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="flex items-start gap-5 p-5 bg-white border border-[#323232]/10 rounded-xl hover:shadow-lg transition"
                        >

                            {/* Number */}
                            <div className="text-2xl md:text-3xl font-semibold text-[#FB8C32] min-w-[40px]">
                                {item.number}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-[#323232]">
                                    {item.value}
                                </h3>

                                <p className="text-[#323232] font-medium text-sm">
                                    {item.label}
                                </p>

                                <p className="text-[#323232]/60 text-sm">
                                    {item.sub}
                                </p>
                            </div>

                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
};

export default WhyChooseIbraine;