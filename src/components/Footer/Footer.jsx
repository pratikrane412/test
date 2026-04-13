import React from 'react';
import { ArrowUpRight, Globe, Mail, Phone } from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#030712] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Top */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <h3 className="text-3xl md:text-4xl mb-4">
                            Let’s build your <span className="italic text-indigo-400">brand.</span>
                        </h3>

                        <p className="text-gray-400 mb-6">
                            A digital agency focused on performance, growth and design.
                        </p>

                        {/* Email */}
                        <div className="flex">
                            <input
                                placeholder="Enter email"
                                className="flex-1 p-3 rounded-l-lg bg-white/10 text-sm outline-none"
                            />
                            <button className="bg-indigo-600 px-4 rounded-r-lg">
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm text-gray-500 uppercase mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Performance Marketing</li>
                            <li>SEO</li>
                            <li>Social Media</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm text-gray-500 uppercase mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>About</li>
                            <li>Case Studies</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Social */}
                    <div className="flex gap-4">
                        {[Globe, Mail, Phone].map((Icon, i) => (
                            <Icon
                                key={i}
                                className="text-gray-400 hover:text-white cursor-pointer"
                                size={20}
                            />
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-500 text-sm text-center">
                        © {year} iBraine. All rights reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;