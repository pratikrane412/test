import React from "react";
import { motion } from "framer-motion";
import { Rocket, Users, Download, Megaphone } from "lucide-react";

const campaigns = [
  {
    icon: <Rocket size={28} />,
    title: "Ecommerce Growth",
    desc: "Scale your online store with high-converting campaigns focused on revenue, AOV, and repeat purchases.",
    color: "from-[#34D399] to-[#10B981]",
  },
  {
    icon: <Users size={28} />,
    title: "Lead Generation",
    desc: "Capture high-quality leads using data-driven targeting and conversion-optimized funnels.",
    color: "from-[#FB8C32] to-[#F97316]",
  },
  {
    icon: <Download size={28} />,
    title: "App Install Campaigns",
    desc: "Drive installs and in-app engagement with performance-focused mobile acquisition strategies.",
    color: "from-[#FACC15] to-[#EAB308]",
  },
  {
    icon: <Megaphone size={28} />,
    title: "Brand Awareness",
    desc: "Build strong brand recall and reach the right audience with impactful storytelling campaigns.",
    color: "from-[#60A5FA] to-[#3B82F6]",
  },
];

const CampaignTypes = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#fafbfc] font-sans">

      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#323232] mb-4 leading-tight">
            Campaigns That Drive <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
              Real Business Growth
            </span>
          </h2>

          <p className="text-[#323232]/60 text-sm md:text-base max-w-xl mx-auto">
            At iBraine, we design performance-first campaigns that turn clicks into customers and scale your business with measurable impact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {campaigns.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group relative p-6 rounded-2xl bg-white border border-[#323232]/10 hover:shadow-xl transition-all duration-300"
            >

              {/* Icon */}
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white mb-5 shadow-md group-hover:scale-110 transition`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#323232] mb-2">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-[#323232]/60 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#1872BA]/5 to-[#FB8C32]/5" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CampaignTypes;