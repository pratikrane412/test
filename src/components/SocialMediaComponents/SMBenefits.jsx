import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap } from 'lucide-react';

const SMBenefits = () => {
    return (
        <section className="py-24 bg-[#fafafa]/50 px-6 relative overflow-hidden">

            {/* Background Decorative Blob */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#0072BC]/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                {/* ════ VISUAL SIDE (LEFT) ════ */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-start">

                    {/* Main Image - Now Smaller & Styled */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-[85%] md:w-[70%] lg:w-full max-w-sm aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10 border-4 border-white"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                            alt="Marketing Results"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0072BC]/20 to-transparent" />
                    </motion.div>

                    {/* FLOATING STAT CARD (The Megaphone Graphic replacement) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            initial: { duration: 0.5 },
                            animate: { repeat: Infinity, duration: 5, ease: "easeInOut" }
                        }}
                        className="absolute -bottom-6 -right-4 md:-right-8 bg-white p-6 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-50 min-w-[220px] z-20"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 bg-[#0072BC]/10 rounded-lg text-[#0072BC]">
                                <TrendingUp size={16} />
                            </div>
                            <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Growth Metric</span>
                        </div>
                        <div className="text-3xl font-black text-slate-900 mb-1">11,756</div>
                        <div className="text-[#29ABE2] font-bold text-[10px] mb-4 flex items-center gap-1">
                            <Zap size={10} fill="currentColor" /> +24% increase this month
                        </div>

                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }} whileInView={{ width: '75%' }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-[#0072BC] to-[#29ABE2]"
                            />
                        </div>
                    </motion.div>

                    {/* Secondary Micro-Floating Element (Live Engagement) */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                        className="absolute -top-6 -left-4 bg-white px-4 py-3 rounded-2xl shadow-lg border border-slate-50 flex items-center gap-3 z-20"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                </div>
                            ))}
                        </div>
                        <div className="text-[10px] font-bold text-slate-600">Active Engagement</div>
                    </motion.div>
                </div>


                {/* ════ TEXT SIDE (RIGHT) ════ */}
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[1px] bg-[#F58220]" />
                            <span className="text-[#F58220] font-bold text-xs uppercase tracking-[0.3em]">Agency Impact</span>
                        </div>

                        <h2 className="font-lora text-4xl md:text-6xl leading-[1.1] text-slate-900 mb-8 tracking-tight">
                            Great brands are built through <br />
                            <span className="text-gradient-blue italic">social media mastery.</span>
                        </h2>

                        <div className="space-y-6 mb-10">
                            <p className="font-jakarta text-slate-500 text-lg md:text-xl leading-relaxed">
                                Social Media Marketing is no longer an option—it’s your <span className="text-slate-900 font-semibold">digital storefront</span>. We help brands discover their voice and project it to the right audience.
                            </p>

                            {/* Feature Mini-grid for liveliness */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="text-[#0072BC]"><Users size={20} /></div>
                                    <span className="font-jakarta font-bold text-sm text-slate-800">Targeted Reach</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="text-[#F58220]"><TrendingUp size={20} /></div>
                                    <span className="font-jakarta font-bold text-sm text-slate-800">Data-Driven ROI</span>
                                </div>
                            </div>
                        </div>

                        <button className="group relative overflow-hidden bg-slate-900 text-white px-10 py-5 rounded-full font-bold transition-all hover:bg-[#F58220] shadow-xl active:scale-95">
                            <span className="relative z-10 flex items-center gap-2">
                                Learn Our Process <Zap size={18} fill="currentColor" />
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SMBenefits;