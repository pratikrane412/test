import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    title: "Competitor Analysis",
    content: {
      heading: "Outsmart Your Competition",
      text: "We deeply analyze your competitors to uncover hidden opportunities and gaps. Our insights help you dominate search rankings with smarter strategies.",
      points: [
        "Keyword gap analysis",
        "Traffic & ranking insights",
        "Backlink strategy comparison",
        "Market positioning clarity",
      ],
    },
  },
  {
    title: "Technical SEO",
    content: {
      heading: "Build a Strong SEO Foundation",
      text: "We fix the technical backbone of your website to ensure search engines can crawl, index, and rank your site effectively.",
      points: [
        "Core Web Vitals optimization",
        "Site speed improvements",
        "Mobile-first optimization",
        "Schema & structured data",
      ],
    },
  },
  {
    title: "On-Page SEO",
    content: {
      heading: "Optimize Every Page for Growth",
      text: "We optimize your content, structure, and keywords to maximize visibility and conversions.",
      points: [
        "Keyword optimization",
        "Meta tags & headings",
        "Internal linking strategy",
        "Content structure improvement",
      ],
    },
  },
  {
    title: "Off-Page SEO",
    content: {
      heading: "Build Authority That Ranks",
      text: "We strengthen your domain authority through high-quality backlinks and brand signals.",
      points: [
        "High-quality backlinks",
        "Digital PR campaigns",
        "Guest posting",
        "Brand mentions & citations",
      ],
    },
  },
  {
    title: "Local SEO",
    content: {
      heading: "Dominate Local Search",
      text: "Get discovered by nearby customers with optimized local SEO strategies.",
      points: [
        "Google Business optimization",
        "Local citations",
        "Review strategy",
        "Location-based keywords",
      ],
    },
  },
  {
    title: "E-Commerce SEO",
    content: {
      heading: "Boost Online Store Sales",
      text: "We optimize your product pages and shopping funnels for higher visibility and conversions.",
      points: [
        "Product page optimization",
        "Category SEO",
        "Conversion optimization",
        "Shopping schema",
      ],
    },
  },
  {
    title: "Content Strategy",
    content: {
      heading: "Content That Ranks & Converts",
      text: "We create high-quality SEO content that drives traffic and builds authority.",
      points: [
        "SEO blogs & articles",
        "Evergreen content",
        "Content calendar",
        "Topic clustering",
      ],
    },
  },
];

const SEOServicesTabs = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-16 md:py-24 px-4 font-sans bg-[#0f172a] text-white overflow-hidden">

      {/* Glow BG */}
      <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-[#1872BA]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#FB8C32]/20 blur-[120px] rounded-full" />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-[#FB8C32] mb-2">iBraine SEO Services</p>
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
            Growth-Focused SEO Solutions <br />
            <span className="bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
              Built to Scale Your Business
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT TABS */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">

            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`min-w-max lg:w-full text-left px-4 py-3 rounded-xl text-sm transition ${
                  active === i
                    ? "bg-gradient-to-r from-[#FB8C32] to-[#1872BA] text-white shadow-md"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

         {/* RIGHT CONTENT */}
<motion.div
  key={active}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="lg:col-span-2 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl"
>

  <div className="grid lg:grid-cols-2 gap-8 items-center">

    {/* LEFT TEXT */}
    <div>

      <h3 className="text-xl md:text-2xl font-semibold mb-3">
        {tabs[active].content.heading}
      </h3>

      <p className="text-white/70 text-sm md:text-base mb-6">
        {tabs[active].content.text}
      </p>

      {/* LIST */}
      <div className="grid sm:grid-cols-2 gap-4">
        {tabs[active].content.points.map((point, idx) => (
          <div key={idx} className="flex items-center gap-3">

            <span className="w-2.5 h-2.5 bg-[#FB8C32] rounded-full" />

            <p className="text-white/80 text-sm">{point}</p>

          </div>
        ))}
      </div>

    </div>

    {/* RIGHT VECTOR (DESKTOP ONLY) */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden lg:flex justify-center"
    >

      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FB8C32]/20 to-[#1872BA]/20 blur-3xl rounded-full" />

        <img
          src="https://cdn-icons-png.flaticon.com/512/4149/4149647.png"
          alt="SEO Illustration"
          className="relative w-[200px] drop-shadow-xl"
        />

      </div>

    </motion.div>

  </div>

</motion.div>

        </div>

      </div>
    </section>
  );
};

export default SEOServicesTabs;