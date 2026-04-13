import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

const points = [
    "Laser-Focused KPIs",
    "Data-Backed Strategies",
    "Precision Targeting",
    "Transparent Reporting",
    "Customised Marketing Strategies"
];

const MarketingPlan = () => {
    return (
        <section className="relative bg-[#fafafa] py-24 overflow-hidden">

            {/* Background */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-50 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT */}
                <div className="relative order-2 lg:order-1">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="rounded-3xl overflow-hidden shadow-xl border-4 border-white"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                            alt="Marketing"
                            className="w-full h-[400px] md:h-[500px] object-cover"
                        />
                    </motion.div>

                    {/* Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, y: 30 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg"
                    >
                        <TrendingUp className="text-indigo-600 mb-2" />
                        <h4 className="text-2xl font-bold text-slate-900">1200+</h4>
                        <p className="text-xs text-slate-500 uppercase">Brands Scaled</p>
                    </motion.div>

                </div>

                {/* RIGHT */}
                <div className="order-1 lg:order-2">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase mb-6">
                            <Sparkles size={14} /> What we do
                        </span>

                        <h2 className="text-3xl md:text-5xl text-slate-900 mb-6">
                            Everything starts with a{" "}
                            <span className="italic text-indigo-600">
                                roadmap to ROI
                            </span>
                        </h2>

                        <p className="text-slate-500 mb-8 max-w-lg">
                            We build customized marketing systems that focus on measurable growth,
                            helping brands scale efficiently and consistently.
                        </p>
                    </motion.div>

                    {/* Points */}
                    <ul className="space-y-4 mb-10">
                        {points.map((text, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-3 text-slate-700 font-medium"
                            >
                                <CheckCircle2 className="text-indigo-600" size={18} />
                                {text}
                            </motion.li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-slate-900 text-white px-8 py-3 rounded-full flex items-center gap-2 font-semibold"
                    >
                        Let's Build Your Roadmap
                        <ArrowRight size={18} />
                    </motion.button>

                </div>

            </div>
        </section>
    );
};

export default MarketingPlan;