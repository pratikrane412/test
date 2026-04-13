import React from "react";
import { motion } from "framer-motion";
import { Wallet, Target, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: <Wallet size={36} />,
    title: "Ads Spend",
    sub: "Last 12 Months",
    value: "₹4.6 Cr+",
  },
  {
    icon: <Target size={36} />,
    title: "Average",
    sub: "ROAS",
    value: "3.3x",
  },
  {
    icon: <TrendingUp size={36} />,
    title: "Revenue",
    sub: "Last 12 Months",
    value: "₹15 Cr+",
  },
];

const StatsStrip = () => {
  return (
    <div className="py-8 px-4 bg-[#030712] font-sans">
      <div className="max-w-[1100px] mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FB8C32]/40 transition"
            >

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1872BA] to-[#FB8C32] text-white shadow-md shrink-0">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <p className="text-white text-sm leading-tight">
                  {item.title} <br />
                  <span className="text-white/60">{item.sub}</span>
                </p>

                <h3 className="text-xl md:text-2xl font-semibold text-[#FB8C32] mt-1">
                  {item.value}
                </h3>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default StatsStrip;