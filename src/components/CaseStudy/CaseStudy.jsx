import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const WORK_DATA = [
    {
        id: 1,
        client: "Mentos",
        title: "Gen-Z comeback & 36M+ reach",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853",
        category: "Campaign"
    },
    {
        id: 2,
        client: "Pune Police",
        title: "76% seatbelt compliance achieved",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
        category: "Social Impact"
    },
    {
        id: 3,
        client: "Skybags",
        title: "Repositioned as adventure identity",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        category: "Branding"
    },
    {
        id: 4,
        client: "Centerfruit",
        title: "Gamified website experience",
        image: "https://images.unsplash.com/photo-1582050041567-9cfdd330d545",
        category: "Web Design"
    },
    {
        id: 5,
        client: "Nuego",
        title: "Electric mobility breakthrough",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
        category: "E-Mobility"
    },
    {
        id: 6,
        client: "Happydent",
        title: "Minimal impact campaign success",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
        category: "Campaign"
    }
];

const CaseStudy = () => {
    const [activeTab, setActiveTab] = useState('Case Study');

    return (
        <section className="bg-[#030712] py-24 px-6 text-white">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
                    <div>
                        <div className="flex items-center gap-2 text-indigo-400 text-xs uppercase mb-4">
                            <Sparkles size={14} /> Portfolio
                        </div>

                        <h2 className="text-4xl md:text-6xl font-medium leading-tight">
                            Explore Our <br />
                            <span className="text-gray-500 italic">Latest Work</span>
                        </h2>
                    </div>

                    {/* Tabs */}
                    <div className="flex bg-white/10 rounded-full p-1">
                        {['Case Study', 'Creativity'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-xs font-semibold transition ${activeTab === tab ? 'bg-white text-black' : 'text-gray-400'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {WORK_DATA.map((work, i) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >

                            <div className="relative rounded-2xl overflow-hidden mb-6">
                                <img
                                    src={work.image}
                                    className="w-full h-[220px] object-cover group-hover:scale-105 transition"
                                />

                                <div className="absolute top-4 left-4 text-xs bg-black/50 px-3 py-1 rounded-full">
                                    {work.category}
                                </div>

                                <div className="absolute top-4 right-4 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>

                            <h4 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition">
                                {work.client}
                            </h4>

                            <p className="text-gray-400 text-sm">
                                {work.title}
                            </p>

                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-20 flex justify-between items-center border-t border-white/10 pt-6">
                    <p className="text-gray-500">Ready to grow your business?</p>

                    <button className="flex items-center gap-2 text-sm font-semibold hover:translate-x-2 transition">
                        View More
                        <ArrowUpRight size={16} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CaseStudy;