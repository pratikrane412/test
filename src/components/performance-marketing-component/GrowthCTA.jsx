import React from "react";
import { motion } from "framer-motion";

const GrowthCTA = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden font-sans">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f6efe8] via-[#f3f5f9] to-[#eaf2fb]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[900px] mx-auto text-center relative z-10">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#323232] leading-tight mb-6"
        >
          Reach Your First{" "}
          <span className="bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
            1000 Customers
          </span>{" "}
          in 90 Days — <br className="hidden md:block" />
          or We Work for Free.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#323232]/70 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          At iBraine, we don’t just run ads — we build scalable growth systems.
          Our performance-first strategy combines creative testing, data intelligence,
          and precision targeting to deliver predictable and measurable results.
        </motion.p>

        {/* Highlight Points */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-[#323232]/60">
          <span className="px-4 py-2 bg-white border border-[#323232]/10 rounded-full shadow-sm">
            Data-Driven Scaling
          </span>
          <span className="px-4 py-2 bg-white border border-[#323232]/10 rounded-full shadow-sm">
            ROI Focused Campaigns
          </span>
          <span className="px-4 py-2 bg-white border border-[#323232]/10 rounded-full shadow-sm">
            Proven Framework
          </span>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FB8C32] to-[#1872BA] text-white font-medium text-sm md:text-base shadow-lg hover:shadow-xl transition"
        >
          Start Driving Conversions →
        </motion.button>

        {/* Trust Line */}
        <p className="text-xs text-[#323232]/50 mt-4">
          No long-term contracts • Results-focused execution • Transparent reporting
        </p>

      </div>
    </section>
  );
};

export default GrowthCTA;