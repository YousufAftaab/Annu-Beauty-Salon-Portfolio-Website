import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.2, ease: 'easeInOut' },
      opacity: { duration: 0.3 },
    },
  },
};

export function CallToAction() {
  return (
    <section id="book" className="py-24 bg-[#E8B4B0] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A961]/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <motion.svg
        viewBox="0 0 1200 400"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <motion.path
          d="M 200 250 C 400 150, 800 150, 1000 250"
          fill="none"
          strokeWidth="2"
          stroke="rgba(0,0,0,0.2)"
          variants={draw}
        />
      </motion.svg>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl p-10 md:p-16 text-center shadow-xl"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#1a1a1a]">
            Book Your Transformation
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Ready to elevate your look? Secure your spot today. For bridal
            inquiries, please book at least 3 months in advance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <MagneticButton
              href="https://wa.me/917893256626"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#C9A961] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#C9A961]/25"
              strength={0.3}
            >
              <Calendar size={20} />
              Book Appointment
            </MagneticButton>
            <MagneticButton
              href="https://wa.me/917893256626"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#128C7E] transition-all duration-300 shadow-md hover:shadow-lg"
              strength={0.3}
            >
              <MessageCircle size={20} />
              WhatsApp Now
            </MagneticButton>
            <MagneticButton
              href="tel:+917893256626"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 rounded-full font-medium hover:bg-[#EFE6DA] transition-all duration-300"
              strength={0.3}
            >
              <Phone size={20} />
              Call Now
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}