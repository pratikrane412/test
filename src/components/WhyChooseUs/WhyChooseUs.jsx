import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Globe, Layout, Sparkles, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section className="relative bg-[#fafafa] py-20 px-6 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 blur-[120px]" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[40%] bg-cyan-50 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-2 text-indigo-600 text-xs uppercase font-bold">
                        <Sparkles size={14} /> Agency Excellence
                    </div>

                    <h2 className="text-3xl md:text-5xl text-slate-900 leading-tight">
                        From Big Thinking <br />
                        <span className="italic text-indigo-600">to Solid Execution</span>
                    </h2>

                    <p className="text-slate-500 max-w-lg">
                        iBraine is among the top digital marketing agencies in Mumbai.
                        We deliver result-oriented strategies that help businesses grow and outperform competition.
                    </p>

                    {/* Certifications */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                        {[
                            { title: "Google", subtitle: "Certified Partner", icon: Globe, color: "blue" },
                            { title: "Shopify", subtitle: "Certified Partner", icon: Layout, color: "green" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border shadow-sm">
                                <div className="p-3 bg-gray-100 rounded-lg">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase">{item.title}</p>
                                    <p className="text-sm font-semibold text-slate-800">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <button className="bg-slate-900 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition">
                        Get in touch
                        <ArrowUpRight size={18} />
                    </button>
                </motion.div>

                {/* RIGHT */}
                <div className="relative h-[500px] flex items-center justify-center">

                    {/* Chart Card */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 6 }}
                        className="absolute top-10 right-10 bg-white p-6 rounded-2xl shadow-lg"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="text-indigo-600" size={16} />
                            <span className="text-xs font-bold">Growth</span>
                        </div>

                        <div className="flex gap-2 h-24">
                            {[40, 60, 80, 50, 90].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="w-2 bg-indigo-400 rounded" />
                            ))}
                        </div>
                    </motion.div>

                    {/* Main Card */}
                    <div className="absolute bottom-10 left-10 w-60 bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
                        <div className="mb-4 space-y-2">
                            <div className="h-2 bg-white/20 rounded" />
                            <div className="h-2 bg-white/20 rounded w-3/4" />
                        </div>

                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center gap-2 mt-2">
                                <CheckCircle2 size={14} className="text-indigo-400" />
                                <div className="h-1 bg-white/10 flex-1 rounded" />
                            </div>
                        ))}
                    </div>

                    {/* Badge */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute bottom-20 right-0 bg-cyan-400 p-6 rounded-2xl shadow-lg text-center"
                    >
                        <h3 className="text-3xl font-bold text-black">5Cr+</h3>
                        <p className="text-xs font-bold">Revenue Generated</p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;