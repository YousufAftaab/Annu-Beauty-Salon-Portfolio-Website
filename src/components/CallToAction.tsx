import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export function CallToAction() {
  return (
    <section id="book" className="py-32 relative overflow-hidden bg-[#121212]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cta-bg.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-transparent to-[#121212]"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A961]/10 border border-[#C9A961]/30 text-[#C9A961] mb-8"
            >
              <Sparkles size={16} />
              <span className="text-xs uppercase tracking-widest font-semibold">Available for Bookings</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-serif mb-6 text-white leading-tight">
              Let's Create Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A961] via-[#EFE6DA] to-[#C9A961]">
                Masterpiece
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Every bride deserves a unique glow. Whether it's your big day or a special event, 
              I'm here to bring your vision to life with precision and passion.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <MagneticButton
                href="https://wa.me/917075997545"
                className="group relative w-full md:w-auto flex items-center justify-center gap-3 bg-[#C9A961] text-white px-10 py-5 rounded-full font-medium transition-all duration-500 overflow-hidden shadow-2xl shadow-[#C9A961]/20 hover:scale-105"
                strength={0.2}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <Calendar size={22} className="relative z-10" />
                <span className="relative z-10 text-lg">Schedule Session</span>
              </MagneticButton>

              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <MagneticButton
                  href="https://wa.me/917075997545"
                  className="flex-1 flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-5 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
                  strength={0.2}
                >
                  <MessageCircle size={20} className="text-[#25D366]" />
                  <span>WhatsApp</span>
                </MagneticButton>

                <MagneticButton
                  href="tel:+917075997545"
                  className="flex-1 flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-5 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
                  strength={0.2}
                >
                  <Phone size={20} className="text-[#C9A961]" />
                  <span>Call Us</span>
                </MagneticButton>
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 text-sm text-gray-500 uppercase tracking-[0.2em]"
            >
              Mancherial • Hyderabad • Available Worldwide
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      {/* Animated accent lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A961]/20 to-transparent -rotate-12 blur-sm"></div>
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8B4B0]/10 to-transparent rotate-12 blur-sm"></div>
    </section>
  );
}