import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, BadgeDollarSign, ArrowUpRight } from "lucide-react";

const data = [
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    desc: "Drive consistent organic traffic with long-term SEO strategies built for scalable growth — not temporary spikes.",
  },
  {
    icon: BarChart3,
    title: "Higher Search Visibility",
    desc: "Rank higher on Google and get discovered by high-intent users actively searching for your services.",
  },
  {
    icon: BadgeDollarSign,
    title: "Cost-Effective Scaling",
    desc: "Achieve better ROI with SEO compared to paid ads by building a strong organic acquisition engine.",
  },
];

const SEOHighlights = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 bg-white overflow-hidden font-sans">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Gradient Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-[#1872BA]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-[#FB8C32]/10 blur-[120px] rounded-full" />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Top Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight text-[#323232]"
          >
            Best SEO Company <br />
            <span className="bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
              for Growth in Mumbai
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#323232]/70 text-sm md:text-base leading-relaxed"
          >
            At iBraine, we combine data, strategy, and execution to deliver
            measurable SEO results. From technical optimization to content
            authority — we help your brand dominate search rankings and drive
            consistent business growth.
          </motion.p>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white border border-[#323232]/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
              >

                {/* Glow Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#FB8C32]/10 to-[#1872BA]/10 rounded-2xl blur-xl" />

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FB8C32] to-[#1872BA] text-white mb-5">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#323232] mb-2">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-[#323232]/60 leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-[#323232]/60 group-hover:text-[#1872BA] transition">
                  <span className="text-sm">Learn more</span>
                  <ArrowUpRight size={16} />
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default SEOHighlights;