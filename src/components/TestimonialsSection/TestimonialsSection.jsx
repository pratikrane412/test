import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Sparkles } from 'lucide-react';

const testimonials = [
    {
        name: "Meera Rai",
        role: "Aditya Birla Capital",
        quote: "A proactive team delivering innovative solutions.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
        name: "Pradeep Singhvi",
        role: "Houseome",
        quote: "40% increase in sales. Great team to work with.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        featured: true
    },
    {
        name: "Aman Chowdary",
        role: "Luxulo",
        quote: "Exceptional service and great guidance throughout.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    }
];

const TestimonialsSection = () => {
    return (
        <section className="bg-[#fafafa] py-24 px-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="flex justify-center items-center gap-2 text-indigo-600 text-xs uppercase mb-4">
                        <Sparkles size={14} /> Client Stories
                    </div>

                    <h2 className="text-4xl md:text-6xl text-slate-900 leading-tight">
                        Trusted by <span className="italic text-indigo-600">30k+</span> companies
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition ${item.featured ? 'lg:mt-10' : ''
                                }`}
                        >

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-slate-600 mb-6 italic">
                                "{item.quote}"
                            </p>

                            {/* User */}
                            <div className="flex items-center gap-3">
                                <img src={item.image} className="w-12 h-12 rounded-lg object-cover" />
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-900">
                                        {item.name}
                                    </h4>
                                    <p className="text-xs text-slate-400">
                                        {item.role}
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSection;