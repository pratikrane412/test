import React from 'react';
import { motion } from 'framer-motion';
import {
    FiChevronDown, FiFacebook, FiTwitter, FiLinkedin,
    FiYoutube, FiInstagram
} from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

const IbraineContactPage = () => {
    return (
        <main className="w-full bg-white font-serif text-[#1a1a1a] selection:bg-[#0072BC] selection:text-white">

            {/* ════ FONT CONFIGURATION ════ */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-serif { font-family: 'Lora', serif; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

            {/* ════ SECTION 1: HERO & FORM ════ */}
            <section className="relative pt-12 md:pt-20 pb-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative">

                    {/* Header Area */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 text-[11px] font-sans font-bold text-slate-400 uppercase tracking-widest mb-4">
                            <span>iBraine Digital</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="text-slate-900">Contact us</span>
                        </div>
                        <h1 className="text-[42px] md:text-[64px] leading-tight text-slate-900 mb-6 font-medium">Contact us</h1>
                        <p className="max-w-2xl mx-auto text-slate-500 text-[16px] md:text-[18px] leading-relaxed italic">
                            Get in touch and ask us anything. The difference between performance and
                            growth, how to scale your brand from Mumbai to the world—we answer it all.
                        </p>
                    </div>

                    {/* PLAYFUL ILLUSTRATIONS */}
                    <div className="hidden xl:block absolute left-[-2%] top-[35%] pointer-events-none w-64">
                        <motion.img
                            animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            src="https://img.freepik.com/free-vector/creative-character-design-with-line-art_23-2148464177.jpg"
                            className="w-full h-auto mix-blend-multiply opacity-80 grayscale"
                        />
                    </div>
                    <div className="hidden xl:block absolute right-[-2%] top-[38%] pointer-events-none w-72">
                        <motion.img
                            animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            src="https://img.freepik.com/free-vector/hand-drawn-business-character_23-2148464175.jpg"
                            className="w-full h-auto mix-blend-multiply opacity-80 grayscale"
                        />
                    </div>

                    {/* CENTERED FORM BLOCK */}
                    <div className="max-w-[700px] mx-auto relative z-10 font-sans">
                        <form className="space-y-4">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your name *" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 focus:border-[#0072BC] outline-none transition-all text-sm placeholder:text-slate-400" />
                                <input type="email" placeholder="Email address *" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 focus:border-[#0072BC] outline-none transition-all text-sm placeholder:text-slate-400" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2 px-4 py-4 rounded-xl border border-slate-200 bg-white cursor-pointer hover:bg-slate-50">
                                        <span className="text-xl">🇮🇳</span>
                                        <FiChevronDown className="text-slate-400" />
                                    </div>
                                    <input type="tel" placeholder="+91 999 9999999 *" className="flex-1 px-5 py-4 rounded-xl border border-slate-200 focus:border-[#0072BC] outline-none transition-all text-sm" />
                                </div>
                                <div className="relative">
                                    <select className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 focus:border-[#0072BC] outline-none transition-all text-sm appearance-none text-slate-500 cursor-pointer">
                                        <option>Interested in</option>
                                        <option>Performance Marketing</option>
                                        <option>Social Media Strategy</option>
                                        <option>Global Branding</option>
                                    </select>
                                    <FiChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                            </div>

                            <textarea rows="5" placeholder="How can we help? *" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 focus:border-[#0072BC] outline-none transition-all text-sm resize-none placeholder:text-slate-400"></textarea>

                            <div className="text-center pt-8">
                                <motion.button
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    className="bg-[#0072BC] text-white px-14 py-4 rounded-full font-bold text-[15px] shadow-xl shadow-blue-100 hover:bg-[#F58220] transition-all font-sans"
                                >
                                    Send your message
                                </motion.button>
                                <div className="mt-8 text-[11px] text-slate-400 max-w-[400px] mx-auto leading-relaxed italic font-serif">
                                    By clicking, you agree to our <span className="underline cursor-pointer hover:text-slate-600">Terms & Conditions</span>,
                                    <br /> Privacy and Data Protection Policy.
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* ════ SECTION 2: MAP & CONTACT INFO ════ */}
            <section className="py-24 bg-[#fafafa] px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <p className="text-[11px] font-sans font-bold text-slate-400 uppercase tracking-[0.4em] mb-4">India Headquarters</p>
                        <h2 className="text-[36px] md:text-[54px] text-slate-900 leading-tight">Get in touch with iBraine</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                        <div className="lg:col-span-8 rounded-[2rem] overflow-hidden border border-white shadow-lg relative h-[450px] lg:h-auto">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.954605988299!2d72.84650637502747!3d19.11072995092044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c919018e6907%3A0xc3f8e6c79a1f26a1!2siBraine%20-%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1715860000000!5m2!1sen!2sin"
                                className="w-full h-full grayscale-[0.8]"
                                loading="lazy"
                            />
                        </div>

                        <div className="lg:col-span-4 bg-[#f2ede4] p-10 md:p-14 rounded-[2.5rem] flex flex-col justify-between relative shadow-sm">
                            <div className="space-y-12">
                                <div>
                                    <p className="text-[10px] font-sans font-bold text-slate-500 uppercase tracking-widest mb-4">Address</p>
                                    <p className="font-medium text-slate-800 text-[18px] md:text-[20px] leading-relaxed">
                                        Office No. 2, Chandra Niwas CHS,<br />
                                        Off Old Police Lane, Andheri East,<br />
                                        Mumbai – 400069
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] font-sans font-bold text-slate-500 uppercase tracking-widest mb-4">Email</p>
                                    <a href="mailto:hi@ibraine.com" className="font-medium text-slate-800 text-[18px] md:text-[20px] hover:text-[#0072BC] transition-colors underline decoration-slate-300 underline-offset-4">hi@ibraine.com</a>
                                </div>

                                <div>
                                    <p className="text-[10px] font-sans font-bold text-slate-500 uppercase tracking-widest mb-4">Phone</p>
                                    <p className="font-medium text-slate-800 text-[18px] md:text-[20px]">+91 9892 854 892</p>
                                </div>
                            </div>

                            <div className="pt-16 flex flex-wrap gap-4">
                                {[
                                    { icon: <FiFacebook />, href: '#' },
                                    { icon: <FaXTwitter />, href: '#' },
                                    { icon: <FiLinkedin />, href: '#' },
                                    { icon: <FiYoutube />, href: '#' },
                                    { icon: <FiInstagram />, href: '#' },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-slate-700 hover:bg-[#0072BC] hover:text-white transition-all shadow-sm"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <footer className="py-12 border-t border-slate-100 text-center">
                <p className="text-[10px] font-sans font-bold text-slate-300 uppercase tracking-[0.6em]">
                    © 2024 iBraine Digital Marketing. All rights reserved.
                </p>
            </footer>
        </main>
    );
};

export default IbraineContactPage;