import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const SMImportance = () => {
    const features = [
        { title: "Dedicated Resource", desc: "Experienced managers for your brand" },
        { title: "Customized Design", desc: "Unique visual storytelling" },
        { title: "Data-Driven Strategy", desc: "ROI focused growth" },
        { title: "Platform Expertise", desc: "Meta, LinkedIn, Instagram & X" }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">

            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F58220]/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Image Side with Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Decorative Shape behind image */}
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0072BC]/10 rounded-full blur-2xl animate-pulse" />

                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                            alt="Why it's important"
                            className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                        />
                    </div>

                    {/* Floating Accent */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50"
                    >
                        <div className="bg-[#F58220] p-2 rounded-lg text-white">
                            <Sparkles size={20} />
                        </div>
                        <div className="text-sm font-bold text-slate-800">Visual Excellence</div>
                    </motion.div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="font-lora text-4xl lg:text-5xl leading-tight text-slate-900 mb-8"
                    >
                        Why social media marketing is <span className="text-[#0072BC] italic">important</span> for your business?
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="font-jakarta text-slate-500 text-lg leading-relaxed mb-10"
                    >
                        Social media marketing presents a great opportunity for businesses to create brand awareness. It plays a crucial role when customers make decisions.
                    </motion.p>

                    <div className="space-y-6">
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                                className="flex items-start gap-5 group cursor-default p-4 rounded-2xl hover:bg-[#0072BC]/5 transition-colors"
                            >
                                <div className="text-[#0072BC] flex-shrink-0 mt-1">
                                    <CheckCircle2 size={28} fill="#0072BC" className="text-white group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h4 className="font-jakarta font-bold text-slate-900 text-xl mb-1">{item.title}</h4>
                                    <p className="font-jakarta text-slate-500 text-base">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SMImportance;