import React from 'react';
import { Link } from 'react-router-dom';
import {
    BarChart3, Search, TrendingUp, Users, Share2, Mail,
    Layout, Monitor, Code, PieChart, MousePointerClick,
    PenTool, Palette, Video
} from 'lucide-react';

const sections = [
    {
        title: "Marketing Solutions",
        items: [
            { name: "Performance Marketing", slug: "performance-marketing", desc: "Data-driven strategies", icon: TrendingUp, tag: "HOT", color: "emerald" },
            { name: "SEM Experts", slug: "sem", desc: "Search, Display, Shopping", icon: Search, color: "orange" },
            { name: "SEO Services", slug: "seo", desc: "Rank higher on search", icon: BarChart3, color: "yellow" },
            { name: "Social Media", slug: "social-media", desc: "Grow your presence", icon: Users, color: "blue" },
            { name: "Influencer Marketing", slug: "influencer", desc: "Boost brand trust", icon: Share2, color: "lime" },
            { name: "Email Marketing", slug: "email", desc: "Generate leads & sales", icon: Mail, color: "zinc" },
        ]
    },
    {
        title: "Website Solutions",
        items: [
            { name: "Website Design", slug: "website-design", desc: "Build trust online", icon: Layout, color: "rose" },
            { name: "UX/UI Design", slug: "ui-ux", desc: "Better user experience", icon: Monitor, color: "slate" },
            { name: "GTM Integration", slug: "gtm", desc: "Manage tracking easily", icon: Code, color: "purple" },
            { name: "Analytics Audit", slug: "analytics", desc: "Understand your data", icon: PieChart, color: "amber" },
            { name: "CRO", slug: "cro", desc: "Improve conversions", icon: MousePointerClick, color: "stone" },
        ]
    },
    {
        title: "Creative Solutions",
        items: [
            { name: "Content Writing", slug: "content", desc: "Generate leads", icon: PenTool, color: "red" },
            { name: "Graphic Design", slug: "design", desc: "Visual identity", icon: Palette, color: "sky" },
            { name: "Reels/Videos", slug: "video", desc: "Engaging content", icon: Video, tag: "NEW", color: "slate" },
        ]
    }
];

const colorMap = {
    emerald: "bg-emerald-50 text-emerald-600",
    orange: "bg-orange-50 text-orange-600",
    yellow: "bg-yellow-50 text-yellow-600",
    blue: "bg-blue-50 text-blue-600",
    lime: "bg-lime-50 text-lime-600",
    zinc: "bg-zinc-100 text-zinc-600",
    rose: "bg-rose-50 text-rose-600",
    slate: "bg-slate-50 text-slate-600",
    purple: "bg-purple-50 text-purple-600",
    amber: "bg-amber-50 text-amber-600",
    stone: "bg-stone-100 text-stone-600",
    red: "bg-red-50 text-red-600",
    sky: "bg-sky-50 text-sky-600",
};

const tagStyle = (tag) =>
    tag === "HOT"
        ? "bg-pink-100 text-pink-600"
        : "bg-indigo-100 text-indigo-600";

const ServicesDropdown = () => {
    return (
        <div className="absolute top-full left-0 w-full max-w-[1200px] bg-white shadow-xl border rounded-b-2xl p-8 grid grid-cols-3 gap-10 z-50">

            {sections.map((section, idx) => (
                <div key={idx}>
                    <h4 className="text-sm font-bold text-gray-900 border-b pb-3 mb-6">
                        {section.title}
                    </h4>

                    <div className="space-y-5">
                        {section.items.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={i}
                                    to={`/services/${item.slug}`}
                                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 group"
                                >
                                    {/* Icon */}
                                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${colorMap[item.color]}`}>
                                        <Icon size={18} />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600">
                                                {item.name}
                                            </span>

                                            {item.tag && (
                                                <span className={`text-[9px] px-1.5 py-0.5 rounded ${tagStyle(item.tag)}`}>
                                                    {item.tag}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-xs text-gray-500 mt-1">
                                            {item.desc}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            ))}

        </div>
    );
};

export default ServicesDropdown;