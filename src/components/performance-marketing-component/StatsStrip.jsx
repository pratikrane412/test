import React from "react";
import { motion } from "framer-motion";
import { Wallet, Target, TrendingUp } from "lucide-react";

const data = [
  {
    icon: <Wallet size={32} />,
    value: "₹4.6Cr+",
    label: "Ad Spend Managed",
  },
  {
    icon: <Target size={32} />,
    value: "3.3x",
    label: "Avg ROAS",
  },
  {
    icon: <TrendingUp size={32} />,
    value: "₹15Cr+",
    label: "Revenue Generated",
  },
];

const StatsStrip = () => {
  return (
    <div className="relative py-8 px-4 bg-[#030712] font-sans">

      <div className="max-w-[1100px] mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:border-[#1872BA]/40 transition"
            >

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#1872BA] to-[#FB8C32] text-white shadow-md">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.value}
                </h3>
                <p className="text-white/60 text-sm">
                  {item.label}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default StatsStrip;