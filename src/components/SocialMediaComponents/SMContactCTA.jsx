import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';

const SMContactCTA = () => {
    return (
        <section className="py-20 px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto rounded-[3rem] bg-gradient-to-br from-[#0072BC] to-[#29ABE2] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-200"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">
                        <MessageSquare size={16} /> Get in touch
                    </div>

                    <h2 className="font-lora text-4xl lg:text-6xl text-white font-medium mb-8 leading-tight">
                        Ready to dominate the <br className="hidden md:block" />
                        <span className="italic">social landscape?</span>
                    </h2>

                    <p className="font-jakarta text-blue-50 text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-90">
                        Partner with Mumbai's leading digital agency to transform your social presence into a high-performance sales engine.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="w-full sm:w-auto bg-[#F58220] hover:bg-white hover:text-[#0072BC] text-white px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group shadow-xl">
                            Start Your Growth Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto border border-white/30 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold transition-all">
                            View Our Services
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Final Subtle Footer Link */}
            <div className="mt-20 text-center border-t border-slate-100 pt-10">
                <p className="font-jakarta text-slate-400 text-sm">
                    © 2024 iBraine Digital Marketing. All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default SMContactCTA;