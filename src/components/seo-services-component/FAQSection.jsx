import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
{
q: "What is SEO and why is it important?",
a: "SEO helps your website rank higher on Google, driving organic traffic, quality leads, and long-term business growth without relying on ads.",
},
{
q: "How long does SEO take to show results?",
a: "SEO usually takes 2–4 months to show visible results depending on competition and website condition.",
},
{
q: "Which SEO services does iBraine offer?",
a: "We provide technical SEO, on-page optimization, content strategy, link building, and complete growth solutions.",
},
{
q: "Can SEO increase my revenue?",
a: "Yes, SEO brings high-intent traffic that converts better, helping generate consistent revenue.",
},
{
q: "Do you provide real-time optimization?",
a: "Yes, we continuously monitor and optimize campaigns based on live data.",
},
{
q: "Is SEO better than paid ads?",
a: "SEO is long-term and sustainable, while ads give quick results. Best results come from combining both.",
},
{
q: "Do you work with startups?",
a: "Yes, we create scalable strategies for startups, SMBs, and enterprises.",
},
{
q: "How do you measure success?",
a: "We track rankings, traffic, conversions, CTR, and ROI.",
},
{
q: "Why choose iBraine?",
a: "We focus on real growth, not vanity metrics — everything is performance-driven.",
},
{
q: "Do you provide content strategy?",
a: "Yes, we build SEO content strategies aligned with user intent and business goals.",
},
];

const FAQSection = () => {
const [active, setActive] = useState(null);

const toggle = (i) => {
setActive((prev) => (prev === i ? null : i));
};

return ( <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-[#0f172a]">

```
  {/* GRID BG */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

  {/* GRADIENT GLOW */}
  <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-[#1872BA]/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#FB8C32]/20 blur-[120px] rounded-full" />

  <div className="max-w-[1100px] mx-auto relative z-10">

    {/* HEADING */}
    <div className="text-center mb-12">
      <p className="text-sm text-[#FB8C32] mb-2 font-medium">
        SEO FAQs
      </p>

      <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
        Got Questions?{" "}
        <span className="bg-gradient-to-r from-[#FB8C32] to-[#1872BA] bg-clip-text text-transparent">
          We’ve Got Answers
        </span>
      </h2>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-4">

      {faqs.map((faq, i) => (
        <motion.div
          layout
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className={`rounded-xl border transition-all ${
            active === i
              ? "bg-white text-[#323232]"
              : "bg-white/5 text-white border-white/10"
          }`}
        >

          {/* QUESTION */}
          <button
            onClick={() => toggle(i)}
            className="w-full flex justify-between items-center p-4 md:p-5 text-left"
          >
            <span className="font-medium text-sm md:text-base">
              {faq.q}
            </span>

            <Plus
              size={18}
              className={`transition-transform duration-300 ${
                active === i
                  ? "rotate-45 text-[#FB8C32]"
                  : "text-white"
              }`}
            />
          </button>

          {/* ANSWER */}
          <AnimatePresence initial={false}>
            {active === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-4 md:px-5 pb-4 md:pb-5 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      ))}

    </div>

  </div>
</section>


);
};

export default FAQSection;
