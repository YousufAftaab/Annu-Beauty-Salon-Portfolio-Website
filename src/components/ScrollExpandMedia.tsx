import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * ScrollExpandMedia
 * -----------------
 * A premium, scroll-driven section where the media element (image)
 * smoothly scales from a contained card to full-width as the user scrolls.
 *
 * Animation stack:
 *  - scale:   0.55 → 1.0  (driven by scroll progress)
 *  - borderRadius: 2rem → 0  (softens the full-bleed landing)
 *  - content: fades + slides up once scroll progress hits ~60%
 *
 * No manual event listeners, no preventDefault, no scroll locking.
 * Framer Motion + CSS transforms = fully GPU-accelerated.
 */
export function ScrollExpandMedia() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Start animation when section top hits viewport bottom,
    // finish when section bottom hits viewport top
    offset: ['start end', 'end start'],
  });

  // Use a spring for extra smoothness / no jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Media element transforms — scale from 55% to 100%
  const scale = useTransform(smoothProgress, [0, 0.55], [0.55, 1]);
  const borderRadius = useTransform(smoothProgress, [0, 0.55], ['2rem', '0rem']);

  // Content (below media) fades in at ~60–70% scroll progress
  const contentOpacity = useTransform(smoothProgress, [0.55, 0.78], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.55, 0.78], ['24px', '0px']);

  // Subtle overlay that lightens as image expands
  const overlayOpacity = useTransform(smoothProgress, [0, 0.55], [0.45, 0.15]);

  // Heading subtle fade-in from left
  const headingX = useTransform(smoothProgress, [0.55, 0.78], ['-16px', '0px']);
  const headingOpacity = useTransform(smoothProgress, [0.55, 0.78], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FDFBF7]"
      style={{ minHeight: '220vh' }} // tall section = slow, luxurious scroll
    >
      {/* Sticky container — media stays centered while page scrolls */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* ── Expanding Media Element ── */}
        <motion.div
          className="relative w-full h-screen will-change-transform overflow-hidden"
          style={{
            scale,
            borderRadius,
            boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
          }}
        >
          <img
            src="/images/bridal-south-indian.jpg"
            alt="Signature bridal transformation by Annu Beauty Salon"
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Subtle dark overlay that fades away as image expands */}
          <motion.div
            className="absolute inset-0 bg-[#1a1a1a]"
            style={{ opacity: overlayOpacity }}
          />

          {/* Centered label visible while image is still small */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
            style={{
              opacity: useTransform(smoothProgress, [0, 0.45], [1, 0]),
            }}
          >
            <p className="text-[#EFE6DA]/70 text-sm font-medium tracking-[0.25em] uppercase mb-3">
              Scroll to explore
            </p>
            <div className="w-px h-12 bg-gradient-to-b from-[#C9A961]/80 to-transparent" />
          </motion.div>
        </motion.div>

        {/* ── Content Overlay (fades in at ~60% scroll) ── */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20 pb-12 md:pb-20 pointer-events-none"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <motion.p
                style={{ opacity: headingOpacity, x: headingX }}
                className="text-[#C9A961] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              >
                Signature Work
              </motion.p>

              {/* Heading */}
              <motion.h2
                style={{ opacity: headingOpacity, x: headingX }}
                className="text-3xl md:text-5xl font-serif text-white leading-tight mb-4"
              >
                Every look tells <br className="hidden md:block" />
                <span className="italic text-[#C9A961]">a story</span>
              </motion.h2>

              {/* Subtext */}
              <motion.p
                style={{
                  opacity: useTransform(smoothProgress, [0.65, 0.82], [0, 1]),
                  y: useTransform(smoothProgress, [0.65, 0.82], ['12px', '0px']),
                }}
                className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed"
              >
                From intimate ceremonies to grand celebrations — each
                transformation is crafted with precision, artistry, and heart.
              </motion.p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
