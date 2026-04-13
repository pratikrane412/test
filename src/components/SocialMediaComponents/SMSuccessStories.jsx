import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, MoveRight } from 'lucide-react';

const stories = [
    {
        num: "01",
        title: "TripXOXO: 300% Engagement Growth",
        desc: "Transforming a travel brand into a social-first community through data-backed storytelling.",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600",
        tag: "Travel & Tourism"
    },
    {
        num: "02",
        title: "India's Premier Luxury Fashion Hub",
        desc: "Establishing a high-end digital identity for a luxury fashion house, driving 4x revenue.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600",
        tag: "Elite E-commerce"
    },
    {
        num: "03",
        title: "Scaling Modern SaaS Ecosystems",
        desc: "How we leveraged social channels to convert cold traffic into loyal brand advocates.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        tag: "Strategic Growth"
    }
];

const SMSuccessStories = () => {
    return (
        <section className="py-32 px-6 bg-[#fcfcfc] relative overflow-hidden">

            {/* ════ BACKGROUND ELEMENTS (For liveliness) ════ */}
            <div className="absolute top-20 left-10 text-[15vw] font-black text-slate-900/[0.02] pointer-events-none select-none uppercase tracking-tighter">
                Success
            </div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0072BC]/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Sparkles className="text-[#F58220]" size={20} />
                            <span className="font-jakarta font-bold text-xs uppercase tracking-[0.4em] text-slate-400">Our Portfolio</span>
                        </div>
                        <h2 className="font-lora text-5xl md:text-7xl leading-[1.1] text-slate-900">
                            Inspiring <span className="italic text-[#0072BC]">Success</span> <br />
                            through social.
                        </h2>
                    </motion.div>

                    <motion.button
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-3 font-jakarta font-bold text-[#0072BC] hover:text-[#F58220] transition-colors border-b-2 border-slate-100 pb-2"
                    >
                        View All Stories <MoveRight size={20} />
                    </motion.button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Numbering (Professional Touch) */}
                            <div className="absolute -top-10 left-0 text-5xl font-lora font-light italic text-[#0072BC]/10 group-hover:text-[#F58220]/20 transition-colors">
                                {story.num}
                            </div>

                            {/* Image Container */}
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-4 border-white group-hover:shadow-2xl transition-all duration-500">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0072BC] shadow-sm">
                                    {story.tag}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="px-2">
                                <h3 className="font-jakarta font-extrabold text-2xl text-slate-900 leading-tight mb-4 group-hover:text-[#0072BC] transition-colors">
                                    {story.title}
                                </h3>
                                <p className="font-jakarta text-slate-500 text-base leading-relaxed mb-6 line-clamp-2">
                                    {story.desc}
                                </p>

                                {/* Professional Button Link */}
                                <div className="flex items-center gap-3 text-[#F58220] font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
                                    Explore Case <ArrowUpRight size={20} className="p-1 bg-[#F58220]/10 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Refined Indicator Dot */}
                <div className="flex justify-center mt-24">
                    <div className="relative">
                        <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ x: [-50, 50, -50] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="w-1/2 h-full bg-[#0072BC]"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SMSuccessStories;