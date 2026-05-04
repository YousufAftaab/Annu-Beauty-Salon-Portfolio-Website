import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { MagneticButton } from './MagneticButton';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const lenis = useLenis();

  // Parallax: track section scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const handleScroll = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id, {
        offset: 0,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  // Background moves at 50% speed (parallax)
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  // Content floats up slightly
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: bgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&h=900&fit=crop"
          alt="Salon interior"
          className="w-full h-[120%] object-cover"
        />
        {/* Soft overlay to ensure text readability while keeping it bright */}
        <div className="absolute inset-0 bg-[#FDFBF7]/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </motion.div>

      {/* Content with counter-parallax */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center mt-16"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto bg-[#FDFBF7]/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-sm"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1a1a1a] mb-4 leading-tight">
            Real Transformations <br className="hidden md:block" />
            <span className="italic text-[#C9A961]">by Shabana Anjum</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-light">
            Hair, makeup & skincare crafted with care
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('#work');
              }}
              className="w-full sm:w-auto bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#C9A961] transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A961]/25 inline-block text-center cursor-pointer"
              strength={0.35}
            >
              View Work
            </MagneticButton>
            <MagneticButton
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('#book');
              }}
              className="w-full sm:w-auto border border-[#1a1a1a] text-[#1a1a1a] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#EFE6DA] transition-all duration-300 inline-block text-center cursor-pointer"
              strength={0.35}
            >
              Book Appointment
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}