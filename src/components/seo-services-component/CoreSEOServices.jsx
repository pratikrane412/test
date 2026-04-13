import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    title: "Competitor Analysis",
    content:
      "We analyze your competitors, market trends, and keyword gaps to uncover growth opportunities and build a winning SEO strategy.",
  },
  {
    title: "Technical SEO",
    content:
      "From site speed to crawlability, we fix technical issues that impact rankings and ensure your website performs flawlessly.",
  },
  {
    title: "On-Page Optimization",
    content:
      "We optimize your content, structure, and keywords to maximize visibility and improve user engagement.",
  },
  {
    title: "Link Building",
    content:
      "High-quality backlinks and authority signals to strengthen your domain and boost rankings sustainably.",
  },
  {
    title: "Local SEO",
    content:
      "Rank higher in local search and Google Maps to attract high-intent nearby customers.",
  },
];

const CoreSEOServices = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden bg-[#f8fafc]">

      {/* GRID BG */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* SOFT DARK EFFECT */}
      <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-[#1872BA]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#FB8C32]/10 blur-[120px] rounded-full" />

      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg border border-[#323232]/10"
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
            alt="SEO Growth"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2 custom-scroll">

          {tabs.map((tab, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActive(i)}
              className={`cursor-pointer p-5 rounded-xl border transition-all ${
                active === i
                  ? "bg-white shadow-md border-[#1872BA]/30"
                  : "bg-white/60 border-[#323232]/10 hover:shadow-sm"
              }`}
            >

              {/* TITLE */}
              <h3 className="text-sm md:text-base font-semibold text-[#323232]">
                {tab.title}
              </h3>

              {/* CONTENT */}
              {active === i && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-sm text-[#323232]/60 leading-relaxed"
                >
                  {tab.content}
                </motion.p>
              )}
            </motion.div>
          ))}

        </div>

      </div>

      {/* CUSTOM SCROLLBAR */}
      <style>
        {`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #FB8C32, #1872BA);
          border-radius: 10px;
        }
        `}
      </style>

    </section>
  );
};

export default CoreSEOServices;