import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "SEO Audit & Market Intelligence",
    desc: "We analyze your website, competitors, and search landscape to uncover high-impact growth opportunities.",
    img: "https://cdn-icons-png.flaticon.com/512/4149/4149650.png",
  },
  {
    title: "Keyword Strategy & Mapping",
    desc: "We identify high-intent keywords and map them strategically to maximize visibility and conversions.",
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    title: "Technical & On-Page Optimization",
    desc: "We optimize speed, structure, and on-page elements to improve rankings and user experience.",
    img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  },
  {
    title: "Content Strategy & Scaling",
    desc: "We create SEO content that ranks, engages, and drives consistent organic growth.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Authority & Link Building",
    desc: "We build strong backlinks and authority signals to boost trust and rankings.",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
  },
  {
    title: "Tracking & Continuous Growth",
    desc: "We track performance, optimize campaigns, and scale results using real-time data.",
    img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  },
];

const SEOProcess = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 bg-[#fafbfc] overflow-hidden">

      {/* Soft BG Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[260px] h-[260px] bg-[#1872BA]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#FB8C32]/10 blur-[120px] rounded-full" />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#323232] leading-tight">
            Our SEO Process <br />
            <span className="bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
              Designed for Scalable Growth
            </span>
          </h2>

          <p className="text-[#323232]/60 mt-3 max-w-xl mx-auto text-sm md:text-base">
            A proven, data-driven SEO framework that helps your business grow consistently with measurable results.
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-[#323232]/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
            >

              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-r from-[#FB8C32] to-[#1872BA] flex items-center justify-center">
                <img src={step.img} alt="" className="w-7 h-7" />
              </div>

              <h3 className="text-lg font-semibold text-[#323232] mb-2">
                {step.title}
              </h3>

              <p className="text-[#323232]/60 text-sm">
                {step.desc}
              </p>

              <div className="mt-4 text-xs text-[#323232]/40">
                Step {i + 1}
              </div>

            </motion.div>
          ))}

        </div>

        {/* MOBILE SCROLL (ONLY X AXIS) */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-2">

          {steps.map((step, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white border border-[#323232]/10 rounded-xl p-5 shadow-sm"
            >
              <div className="w-12 h-12 mb-3 rounded-lg bg-gradient-to-r from-[#FB8C32] to-[#1872BA] flex items-center justify-center">
                <img src={step.img} alt="" className="w-6 h-6" />
              </div>

              <h3 className="text-sm font-semibold text-[#323232] mb-1">
                {step.title}
              </h3>

              <p className="text-xs text-[#323232]/60">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SEOProcess;