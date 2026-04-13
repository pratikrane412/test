import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "200+", label: "Industries Impacted" },
    { value: "93%", label: "Client Retention Rate" },
    { value: "7x", label: "Revenue Growth" },
];

const StatsSection = () => {
    return (
        <section className="bg-[#0a0a0a] py-24 px-6 text-white">

            <div className="max-w-7xl mx-auto text-center">

                {/* Header */}
                <div className="mb-16">
                    <div className="flex justify-center items-center gap-2 text-sm text-gray-400 uppercase mb-4">
                        <Sparkles size={14} /> Our Impact
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        15+ Years of Experience
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto">
                        A decade of transforming brands through data-driven strategies and digital innovation.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 className="text-4xl md:text-6xl font-bold mb-2">
                                {item.value}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StatsSection;