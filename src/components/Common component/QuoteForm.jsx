import { motion } from "framer-motion";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

const QuoteForm = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 bg-[#fafbfc] overflow-hidden font-sans">

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#1872BA]/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#FB8C32]/20 blur-[140px] rounded-full" />

      <div className="max-w-[1100px] mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl md:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] p-6 md:p-10"
        >

          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FB8C32]/20 to-[#1872BA]/20 blur-xl opacity-30 -z-10" />

          {/* Heading */}
          <h2 className="text-center font-semibold text-2xl md:text-3xl text-[#323232] mb-2">
            Get Your Free Growth Strategy
          </h2>

          <p className="text-center text-sm text-[#323232]/60 mb-8 max-w-md mx-auto">
            Tell us about your business — we’ll create a custom performance plan to scale your results.
          </p>

          {/* Form */}
          <form className="space-y-5">

            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Input Field */}
              {[
                { placeholder: "Full Name", icon: <User size={16} /> },
                { placeholder: "Business Email", icon: <Mail size={16} /> },
                { placeholder: "Phone Number", icon: <Phone size={16} /> },
              ].map((field, i) => (
                <div key={i} className="relative group">
                  
                  {/* Icon */}
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#323232]/40 group-focus-within:text-[#1872BA] transition">
                    {field.icon}
                  </span>

                  {/* Input */}
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="w-full pl-10 pr-3 py-3.5 rounded-xl bg-white border border-[#323232]/10 text-sm outline-none focus:border-[#1872BA] focus:ring-2 focus:ring-[#1872BA]/20 transition-all"
                  />

                </div>
              ))}

            </div>

            {/* Textarea */}
            <div className="relative group">
              <span className="absolute left-3 top-4 text-[#323232]/40 group-focus-within:text-[#1872BA] transition">
                <MessageSquare size={16} />
              </span>

              <textarea
                placeholder="Tell us about your project..."
                rows="4"
                className="w-full pl-10 pr-3 py-3.5 rounded-xl bg-white border border-[#323232]/10 text-sm outline-none focus:border-[#1872BA] focus:ring-2 focus:ring-[#1872BA]/20 transition-all resize-none"
              />
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FB8C32] to-[#1872BA] text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all"
            >
              Get Free Strategy →
            </motion.button>

            {/* Trust Line */}
            <p className="text-center text-xs text-[#323232]/50 mt-2">
              No spam • No commitments • 100% performance focused
            </p>

          </form>

        </motion.div>

      </div>
    </section>
  );
};

export default QuoteForm;