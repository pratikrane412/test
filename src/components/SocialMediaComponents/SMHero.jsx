import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Share2, Twitter, Sparkles } from 'lucide-react';

const SMHero = () => {
    return (
        <section className="relative pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <motion.div 
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                    className="lg:col-span-7 z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm text-[#0072BC] font-bold text-[10px] uppercase tracking-widest mb-6">
                        <Sparkles size={12} className="text-[#F58220]" /> Social Media Experts
                    </div>
                    
                    <h1 className="font-lora text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-slate-900 mb-6 tracking-tighter">
                        Building <span className="text-gradient-blue italic">Vibrant</span> <br /> 
                        Digital Ecosystems.
                    </h1>
                    
                    <p className="font-jakarta text-slate-500 text-sm md:text-lg max-w-lg leading-relaxed mb-8">
                        We turn static profiles into revenue-generating communities through data-driven storytelling and creative mastery.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="bg-[#F58220] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-transform">
                            Let's get started
                        </button>
                        <button className="px-8 py-3.5 rounded-full font-bold text-sm border border-slate-200 hover:bg-slate-50 transition-all">
                            View Portfolio
                        </button>
                    </div>
                </motion.div>

                <div className="lg:col-span-5 relative h-[350px] md:h-[500px]">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                        <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800" className="w-full h-full object-cover" alt="hero" />
                    </motion.div>
                    
                    {/* Floating Lively Elements */}
                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -left-4 top-10 p-4 bg-white rounded-2xl shadow-xl text-[#0072BC]">
                        <Instagram size={24} />
                    </motion.div>
                    <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -right-4 bottom-10 p-4 bg-[#F58220] rounded-2xl shadow-xl text-white">
                        <Share2 size={24} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SMHero;