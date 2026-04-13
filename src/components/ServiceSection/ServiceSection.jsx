import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Globe, Smartphone, Search, TrendingUp, Share2, BarChart, Palette } from 'lucide-react';

const services = [
    {
        title: "Website Design",
        description: "Creative, responsive, user-focused websites built for performance.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
        bgColor: "bg-[#435375]",
        icon: Globe
    },
    {
        title: "App Development",
        description: "Custom mobile apps designed for performance and scalability.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        bgColor: "bg-[#2d2d2d]",
        icon: Smartphone
    },
    {
        title: "SEO",
        description: "Increase visibility and trust across search engines.",
        image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9",
        bgColor: "bg-[#8a755f]",
        icon: Search
    },
    {
        title: "Performance Marketing",
        description: "Drive traffic and maximize ROI with data strategies.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        bgColor: "bg-[#4a418a]",
        icon: TrendingUp
    },
    {
        title: "Social Media",
        description: "Build brand presence and audience engagement.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
        bgColor: "bg-[#1a2029]",
        icon: Share2
    },
    {
        title: "Analytics",
        description: "Track and optimize performance using data insights.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        bgColor: "bg-[#0f172a]",
        icon: BarChart
    },
    {
        title: "Creative Design",
        description: "Modern visuals to elevate your brand identity.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
        bgColor: "bg-[#fcb680]",
        icon: Palette
    }
];

const ServiceSection = () => {
    const scrollRef = useRef(null);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        if (pause) return;

        const interval = setInterval(() => {
            const el = scrollRef.current;
            if (!el) return;

            const maxScroll = el.scrollWidth - el.clientWidth;

            if (el.scrollLeft >= maxScroll - 10) {
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                el.scrollBy({ left: 350, behavior: 'smooth' });
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [pause]);

    const scroll = (dir) => {
        const el = scrollRef.current;
        if (!el) return;

        const amount = window.innerWidth < 768 ? 300 : 450;
        el.scrollBy({
            left: dir === 'left' ? -amount : amount,
            behavior: 'smooth'
        });
    };

    return (
        <section
            className="bg-[#030712] py-20 px-6 overflow-hidden"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
        >

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">

                <div>
                    <div className="flex items-center gap-2 mb-4 text-orange-400 text-xs uppercase">
                        <Sparkles size={14} /> Services
                    </div>

                    <h2 className="text-4xl md:text-6xl text-white leading-tight">
                        Digital design <br />
                        <span className="italic text-indigo-400">solutions</span>
                    </h2>
                </div>

                <div className="flex gap-3">
                    <button onClick={() => scroll('left')} className="p-3 border rounded-full text-white hover:bg-white hover:text-black">
                        <ChevronLeft />
                    </button>
                    <button onClick={() => scroll('right')} className="p-3 border rounded-full text-white hover:bg-white hover:text-black">
                        <ChevronRight />
                    </button>
                </div>

            </div>

            {/* Slider */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto no-scrollbar"
            >
                {services.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={`min-w-[300px] md:min-w-[400px] h-[500px] rounded-3xl p-8 ${item.bgColor} relative group`}
                    >
                        <h3 className="text-white text-2xl mb-3">{item.title}</h3>
                        <p className="text-white/70 text-sm mb-6">{item.description}</p>

                        {/* Image */}
                        <div className="absolute bottom-0 left-0 w-full h-[50%] overflow-hidden rounded-t-2xl">
                            <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition" />
                        </div>

                        {/* Arrow */}
                        <div className="absolute bottom-6 right-6 p-3 bg-white/10 rounded-xl group-hover:bg-orange-400 group-hover:text-black transition">
                            <ArrowUpRight />
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default ServiceSection;