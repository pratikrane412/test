import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const data = [
  {
    title: "Predictable Growth Systems",
    content:
      "We don’t rely on guesswork. iBraine builds scalable marketing systems backed by data, testing, and performance insights to deliver consistent growth.",
  },
  {
    title: "Measurable ROI Focus",
    content:
      "Every campaign is optimized around ROI. From tracking to attribution, we ensure every rupee spent contributes to real business outcomes.",
  },
  {
    title: "Real-Time Optimization",
    content:
      "We continuously analyze performance and tweak campaigns in real-time to maximize conversions and reduce wasted spend.",
  },
  {
    title: "Multi-Channel Strategy",
    content:
      "From Meta to Google to emerging platforms, we create a unified strategy that reaches your audience at every touchpoint.",
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-24 px-4 bg-[#fafbfc] font-sans">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#323232] leading-tight mb-4">
            How iBraine Drives <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
              Performance Marketing Success
            </span>
          </h2>

          <p className="text-[#323232]/60 text-sm md:text-base max-w-2xl mx-auto">
            We combine strategy, data, and execution to create high-performing campaigns that scale your business with measurable impact.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#323232]/10">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
                alt="performance marketing dashboard"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-6 bg-white px-4 py-3 rounded-xl shadow-md border border-[#323232]/10">
              <p className="text-sm text-[#323232]/60">Avg Growth</p>
              <p className="text-lg font-semibold text-[#323232]">3.5x ROI</p>
            </div>
          </motion.div>

          {/* RIGHT ACCORDION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >

            {data.map((item, i) => (
              <div
                key={i}
                className="border border-[#323232]/10 rounded-xl bg-white overflow-hidden"
              >

                {/* Header */}
                <button
                  onClick={() => setActive(i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="text-[#323232] font-medium">
                    {i + 1}. {item.title}
                  </span>

                  <ChevronDown
                    className={`transition ${
                      active === i ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>

                {/* Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: active === i ? "auto" : 0,
                    opacity: active === i ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-[#323232]/60 leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>

              </div>
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;