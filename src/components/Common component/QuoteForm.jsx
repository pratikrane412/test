import { motion } from "framer-motion";

const QuoteForm = () => {
  return (
    <section className="relative py-16 px-4 bg-[#fafbfc] overflow-hidden font-[Montserrat]">

      {/* Background Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#1872BA]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#FB8C32]/20 blur-[120px] rounded-full" />

      <div className="max-w-[1100px] mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-xl border border-[#323232]/10 rounded-2xl md:rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] p-6 md:p-10"
        >

          {/* Heading */}
          <h2 className="text-center font-semibold text-2xl md:text-3xl text-[#323232] mb-2 tracking-tight">
            Request A Free Quote Now!
          </h2>

          <p className="text-center text-sm text-[#323232]/60 mb-6 max-w-md mx-auto">
            Fill in your details and our team will get back to you with a tailored strategy.
          </p>

          {/* Form */}
          <form className="space-y-5">

            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3.5 rounded-xl bg-[#fafbfc] border border-[#323232]/10 text-sm font-medium outline-none focus:border-[#1872BA] focus:ring-2 focus:ring-[#1872BA]/20 transition-all"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full p-3.5 rounded-xl bg-[#fafbfc] border border-[#323232]/10 text-sm font-medium outline-none focus:border-[#1872BA] focus:ring-2 focus:ring-[#1872BA]/20 transition-all"
                />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3.5 rounded-xl bg-[#fafbfc] border border-[#323232]/10 text-sm font-medium outline-none focus:border-[#1872BA] focus:ring-2 focus:ring-[#1872BA]/20 transition-all"
                />
              </div>

            </div>

            {/* Textarea */}
            <div className="relative">
              <textarea
                placeholder="Tell us about your project..."
                rows="4"
                className="w-full p-3.5 rounded-xl bg-[#fafbfc] border border-[#323232]/10 text-sm font-medium outline-none focus:border-[#1872BA] focus:ring-2 focus:ring-[#1872BA]/20 transition-all resize-none"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FB8C32] to-[#1872BA] text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all"
            >
              Submit Request →
            </motion.button>

          </form>

        </motion.div>

      </div>
    </section>
  );
};

export default QuoteForm;