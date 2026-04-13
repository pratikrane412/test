import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar, ChevronRight } from 'lucide-react';

const BLOG_POSTS = [
    {
        id: 1,
        category: "Performance Marketing",
        title: "How Neural Networks are Redefining ROAS",
        excerpt: "AI-driven bidding strategies helping brands scale effectively.",
        date: "March 10, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
        id: 2,
        category: "SEO Strategy",
        title: "The Era of Semantic Search",
        excerpt: "Optimize for user intent and authority, not just keywords.",
        date: "March 08, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
        id: 3,
        category: "Social Growth",
        title: "Why Content Goes Viral",
        excerpt: "Understanding psychology behind engagement & shares.",
        date: "March 05, 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113"
    }
];

const BlogSection = () => {
    return (
        <section className="bg-[#fafafa] py-24 px-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <h2 className="text-4xl md:text-6xl text-slate-900 leading-tight">
                        Latest <span className="italic text-indigo-600">Insights</span>
                    </h2>

                    <button className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition">
                        View All <ChevronRight size={16} />
                    </button>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group"
                        >

                            {/* Image */}
                            <div className="relative h-[200px] overflow-hidden">
                                <img
                                    src={post.image}
                                    className="w-full h-full object-cover group-hover:scale-105 transition"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition">
                                    {post.title}
                                </h3>

                                <p className="text-sm text-gray-500 mb-4">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-sm font-medium">
                                    <span className="text-gray-400 group-hover:text-indigo-600">
                                        Read More
                                    </span>
                                    <ArrowUpRight size={16} className="group-hover:translate-x-1 transition" />
                                </div>

                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BlogSection;