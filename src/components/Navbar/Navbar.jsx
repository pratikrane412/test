import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, ChevronDown, TrendingUp, Search, Megaphone,
    Monitor, Laptop, Settings, PenTool,
    Palette, Video, BarChart4, Network, ArrowUpRight
} from 'lucide-react';

const SERVICES = {
    marketing: [
        { name: "Performance Marketing", slug: "performance-marketing", icon: <TrendingUp size={16} /> },
        { name: "SEO Services", slug: "seo-services", icon: <Search size={16} /> },
        { name: "Social Media", slug: "social-media-marketing", icon: <Megaphone size={16} /> },
        { name: "Google Analytics", slug: "google-analytics", icon: <BarChart4 size={16} /> },
        { name: "Affiliate Marketing", slug: "affiliate-marketing", icon: <Network size={16} /> },
    ],
    web: [
        { name: "Website Design", slug: "website-design", icon: <Monitor size={16} /> },
        { name: "UI/UX Design", slug: "ui-ux", icon: <Laptop size={16} /> },
        { name: "GTM Integration", slug: "gtm", icon: <Settings size={16} /> },
    ],
    creative: [
        { name: "Content Writing", slug: "content-writing", icon: <PenTool size={16} /> },
        { name: "Graphic Design", slug: "graphic-design", icon: <Palette size={16} /> },
        { name: "Video Production", slug: "video", icon: <Video size={16} /> },
    ]
};

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">

            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">

                {/* Logo */}
                <Link to="/">
                    <img src="/images/logo.png" className="h-10" />
                </Link>

                {/* Desktop */}
                <div className="hidden lg:flex items-center gap-6 text-sm font-medium">

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>

                    {/* Services */}
                    <div
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                        className="relative"
                    >
                        <button className="flex items-center gap-1">
                            Services <ChevronDown size={14} />
                        </button>

                        <AnimatePresence>
                            {dropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute top-10 left-0 bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6"
                                >
                                    {Object.values(SERVICES).map((group, i) => (
                                        <div key={i} className="space-y-3">
                                            {group.map(item => (
                                                <Link
                                                    key={item.slug}
                                                    to={`/services/${item.slug}`}
                                                    className="flex items-center gap-2 hover:text-indigo-600"
                                                >
                                                    {item.icon}
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link to="/clientele">Clientele</Link>
                    <Link to="/case-studies">Case Studies</Link>
                    <Link to="/contact">Contact</Link>

                    {/* CTA */}
                    <button className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-2">
                        Quote <ArrowUpRight size={16} />
                    </button>

                </div>

                {/* Mobile Button */}
                <button onClick={() => setMenu(!menu)} className="lg:hidden">
                    {menu ? <X /> : <Menu />}
                </button>

            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menu && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        className="fixed inset-0 bg-white p-6 flex flex-col gap-6 text-2xl"
                    >
                        <Link to="/" onClick={() => setMenu(false)}>Home</Link>
                        <Link to="/about" onClick={() => setMenu(false)}>About</Link>
                        <Link to="/clientele" onClick={() => setMenu(false)}>Clientele</Link>
                        <Link to="/case-studies" onClick={() => setMenu(false)}>Case Studies</Link>
                        <Link to="/contact" onClick={() => setMenu(false)}>Contact</Link>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
};

export default Navbar;