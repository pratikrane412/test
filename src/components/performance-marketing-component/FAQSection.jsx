import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { question: "What is performance marketing?", answer: "Performance marketing focuses on measurable results like leads, sales, and ROI. At iBraine, every campaign is optimized using real-time data." },
  { question: "How much does performance marketing cost?", answer: "It depends on your goals. We create flexible, ROI-focused strategies based on your budget." },
  { question: "Which services does iBraine offer?", answer: "Meta Ads, Google Ads, CRO, funnel building, landing pages, and complete performance systems." },
  { question: "Can you help improve conversions?", answer: "Yes, we optimize creatives, funnels, and landing pages to boost conversions." },
  { question: "Who should use performance marketing?", answer: "Startups, SaaS, eCommerce, and service-based businesses looking to scale revenue." },
  { question: "How do you measure success?", answer: "Using KPIs like ROAS, CPA, ROI, and conversion rates." },
  { question: "Do you provide real-time optimization?", answer: "Yes, we continuously monitor and optimize campaigns daily." },
  { question: "Why choose iBraine?", answer: "We focus on revenue growth, not vanity metrics." },
  { question: "How fast can I see results?", answer: "Initial traction can be seen in weeks, scaling happens over consistent optimization." },
  { question: "Do you handle creative strategy?", answer: "Yes, we design high-converting creatives backed by data insights." },
];

const FAQSection = () => {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive((prev) => (prev === i ? null : i));
  };

  // 🔥 Split into 2 columns
  const leftFAQs = faqs.filter((_, i) => i % 2 === 0);
  const rightFAQs = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="relative py-12 md:py-16 px-4 overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 bg-[#fafbfc]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="max-w-[1100px] mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm text-[#1872BA] mb-2 font-medium">
            Frequently Asked Questions
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#323232]">
            Got Questions?
            <span className="block bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
              We’ve Got Answers
            </span>
          </h2>
        </div>

        {/* 🔥 FLEX FIXED LAYOUT */}
        <div className="flex flex-col md:flex-row gap-4">

          {/* LEFT COLUMN */}
          <div className="flex-1 space-y-4">
            {leftFAQs.map((faq, index) => {
              const actualIndex = index * 2;
              return (
                <div key={actualIndex} className={`rounded-xl border transition ${
                  active === actualIndex
                    ? "bg-white shadow-lg border-[#1872BA]/30"
                    : "bg-white border-[#323232]/10"
                }`}>

                  <button
                    onClick={() => toggle(actualIndex)}
                    className="w-full flex justify-between items-center p-4"
                  >
                    <span className="text-sm md:text-base font-medium text-[#323232]">
                      {faq.question}
                    </span>

                    <Plus className={`transition ${
                      active === actualIndex ? "rotate-45 text-[#FB8C32]" : ""
                    }`} />
                  </button>

                  <AnimatePresence>
                    {active === actualIndex && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <p className="px-4 pb-4 text-sm text-[#323232]/60">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1 space-y-4">
            {rightFAQs.map((faq, index) => {
              const actualIndex = index * 2 + 1;
              return (
                <div key={actualIndex} className={`rounded-xl border transition ${
                  active === actualIndex
                    ? "bg-white shadow-lg border-[#1872BA]/30"
                    : "bg-white border-[#323232]/10"
                }`}>

                  <button
                    onClick={() => toggle(actualIndex)}
                    className="w-full flex justify-between items-center p-4"
                  >
                    <span className="text-sm md:text-base font-medium text-[#323232]">
                      {faq.question}
                    </span>

                    <Plus className={`transition ${
                      active === actualIndex ? "rotate-45 text-[#FB8C32]" : ""
                    }`} />
                  </button>

                  <AnimatePresence>
                    {active === actualIndex && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <p className="px-4 pb-4 text-sm text-[#323232]/60">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQSection;