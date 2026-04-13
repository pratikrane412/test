import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star, BarChart3, Heart, MessageCircle, Sparkles } from 'lucide-react';

const HeroSection = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX / rect.width - 0.5);
        y.set(e.clientY / rect.height - 0.5);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen bg-[#fafafa] overflow-hidden pt-16 pb-20"
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-100/40 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-amber-50/50 blur-[100px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Header */}
            <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mb-16">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                        <Sparkles className="w-3 h-3 text-indigo-600" />
                        <span className="text-xs font-bold uppercase text-indigo-600">
                            The New Standard
                        </span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-7xl leading-tight text-slate-900 mb-6">
                        AI-Driven Conversion <br />
                        <span className="italic text-indigo-600">Growth Right Away</span>
                    </h1>

                    <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-10">
                        Automate high-performing influencer ads through our neural marketing ecosystem.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 transition">
                            Request a Quote
                        </button>
                        <button className="bg-white border px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                            Call Now
                        </button>
                    </div>

                </motion.div>
            </div>

            {/* 3D Section */}
            <div className="relative max-w-5xl mx-auto h-[600px] flex items-center justify-center">
                <motion.div
                    style={{ perspective: 1200, rotateX, rotateY }}
                    className="relative w-full h-full flex items-center justify-center"
                >

                    {/* Phone */}
                    <div className="relative w-[280px] aspect-[9/18] bg-black rounded-[3rem] p-3 shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                            className="w-full h-full object-cover rounded-[2rem]"
                            alt=""
                        />
                    </div>

                    {/* Floating Cards */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        className="absolute left-10 top-20 bg-white p-4 rounded-2xl shadow-lg"
                    >
                        <Star className="text-yellow-400" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 6 }}
                        className="absolute right-10 bottom-20 bg-yellow-400 p-4 rounded-2xl shadow-lg"
                    >
                        <BarChart3 />
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;