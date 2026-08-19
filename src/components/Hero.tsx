import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useLenis } from 'lenis/react';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const lenis = useLenis();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#services');
    if (target && lenis) {
      lenis.scrollTo(target as HTMLElement, { duration: 1.4, offset: -24 });
    }
  };

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#book');
    if (target && lenis) {
      lenis.scrollTo(target as HTMLElement, { duration: 1.4, offset: -24 });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[90vh] w-full rounded-island bg-navy overflow-hidden text-white flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-20 border border-lightblue/15 shadow-2xl"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{ y: bgY }}
      >
        <img
          src="/images/bridal-royal-red.jpg"
          alt="Haute Bridal Couture by Shabana Anjum"
          className="w-full h-[120%] object-cover object-center opacity-30 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/85 to-navy/70 mix-blend-multiply" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-royal/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-teal/25 rounded-full blur-[120px]" />
      </motion.div>

      {/* Top Heritage Line */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-14 md:pt-4 border-b border-white/10 pb-5 text-xs text-ghost/80"
      >
        <span className="font-medium tracking-wide">
          Bridal Makeovers • Hair Artistry • Beauty Academy
        </span>
        <span>
          Mancherial, Telangana
        </span>
      </motion.div>

      {/* Main Editorial Title & Subtitle */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 my-auto py-10 max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title-clamp font-black uppercase text-white tracking-tighter leading-[0.92] mb-6"
        >
          ANNU BEAUTY <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-ghost to-lightblue">
            SALON & ACADEMY
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-ghost/90 font-normal leading-relaxed max-w-3xl mb-8"
        >
          Bespoke bridal transformations, traditional hair artistry, and certified cosmetology training led by Shabana Anjum with over 23 years of celebrated mastery.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#book"
            onClick={scrollToBooking}
            className="group px-8 py-4 rounded-full bg-white text-navy font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-lightblue hover:text-white transition-all duration-300 flex items-center gap-2.5 shadow-xl shadow-black/30 hover:scale-105"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#services"
            onClick={scrollToServices}
            className="px-7 py-4 rounded-full bg-white/5 border border-white/15 text-ghost hover:text-white hover:bg-white/10 hover:border-lightblue/40 text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-200 flex items-center gap-2"
          >
            <span>Explore Services</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Heritage Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-ghost/70"
      >
        <span>Master Artist Shabana Anjum</span>
        <span>23+ Years of Excellence in Mancherial • Est. 2001</span>
      </motion.div>
    </section>
  );
}
