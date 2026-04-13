import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden font-sans">

      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f6efe8] via-[#f3f5f9] to-[#eaf2fb]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1872BA]/20 text-[#1872BA] text-xs mb-6 shadow-sm">
              ✦ RESULT-ORIENTED AGENCY
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-[52px] font-semibold leading-[1.1] text-[#323232] mb-5">
              Scale Profit <br />
              <span className="bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
                With Precision.
              </span>
            </h1>

            {/* Text */}
            <p className="text-[#323232]/70 text-base mb-8 max-w-lg">
              The fastest-growing performance marketing agency. We drive
              unparalleled growth through data-driven testing and math-based scaling.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <button className="px-6 py-3 rounded-xl bg-[#FB8C32] text-white font-medium shadow-md hover:scale-[1.03] transition">
                Optimize Success
              </button>

              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#323232]/10 shadow-sm hover:bg-[#fafbfc] transition">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1872BA]/10 text-[#1872BA]">
                  <Play size={12} />
                </span>
                Watch Results
              </button>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="bg-white rounded-[2rem] shadow-xl border border-[#323232]/5 p-6 md:p-8">

              {/* Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#323232]/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#1872BA] to-[#FB8C32]" />
                  <div>
                    <div className="w-20 h-2 bg-[#323232]/10 rounded mb-1" />
                    <div className="w-12 h-2 bg-[#323232]/5 rounded" />
                  </div>
                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-[#1872BA]/10 text-[#1872BA]">
                  +248% ROAS
                </span>
              </div>

              {/* Chart */}
              <div className="flex items-end gap-3 h-40 mt-6">
                {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-[#1872BA]/20 to-[#1872BA] rounded-t-lg"
                  />
                ))}
              </div>

              {/* Floating Card */}
              <div className="absolute right-4 top-1/2 translate-y-[-50%] bg-white p-4 rounded-xl shadow-lg border border-[#323232]/10">
                <p className="text-xs text-[#323232]/50 mb-1">CPA REDUCED</p>
                <p className="text-lg font-semibold text-[#323232]">-42.5%</p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;