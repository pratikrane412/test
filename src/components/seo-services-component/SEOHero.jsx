import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* COUNTER COMPONENT */
const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const SEOHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafbfc] pt-20 md:pt-28 pb-10 px-4 font-sans">

      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Gradient Blobs */}
      <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-[#1872BA]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#FB8C32]/10 blur-[120px] rounded-full" />

      <div className="max-w-[1200px] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-5xl lg:text-[56px] leading-tight font-semibold text-[#323232] mb-6">
            Dominate Search Results <br />
            with{" "}
            <span className="bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
              iBraine SEO Experts
            </span>
          </h1>

          <p className="text-[#323232]/70 text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-8">
            We help brands rank higher, attract high-intent traffic, and generate
            consistent leads with data-driven SEO strategies.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#FB8C32] to-[#1872BA] text-white text-sm md:text-base font-medium shadow-lg"
          >
            Get Free SEO Audit →
          </motion.button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] border border-[#323232]/10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
              alt="SEO Growth"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 bg-white border rounded-xl p-4 shadow-lg"
          >
            <p className="text-xs text-[#323232]/50">Organic Traffic</p>
            <p className="text-lg font-semibold text-[#323232]">+320%</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-white border rounded-xl p-4 shadow-lg"
          >
            <p className="text-xs text-[#323232]/50">Keyword Ranking</p>
            <p className="text-lg font-semibold text-[#323232]">Top #3</p>
          </motion.div>
        </motion.div>

      </div>

      {/* ✅ COUNTER STRIP (JUST BELOW HERO) */}
      <div className="max-w-[1100px] mx-auto mt-14">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-[26px] overflow-hidden bg-gradient-to-r from-[#1f2937] via-[#2c2f36] to-[#1e3a5f] shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">

            <div className="py-8 px-6">
              <h3 className="text-3xl md:text-4xl text-white font-semibold">
                <Counter target={170} suffix="+" />
              </h3>
              <p className="text-white/60 text-xs uppercase mt-1">
                Successful Campaigns
              </p>
            </div>

            <div className="py-8 px-6">
              <h3 className="text-3xl md:text-4xl text-[#FB8C32] font-semibold">
                <Counter target={2000} suffix="+" />
              </h3>
              <p className="text-white/60 text-xs uppercase mt-1">
                Keywords Ranked #1
              </p>
            </div>

            <div className="py-8 px-6">
              <h3 className="text-3xl md:text-4xl text-white font-semibold">
                <Counter target={90} suffix=" Days" />
              </h3>
              <p className="text-white/60 text-xs uppercase mt-1">
                Avg. Time to Results
              </p>
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default SEOHero;