import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * SmoothSection
 * ─────────────
 * A scroll-driven cinematic reveal placed between Hero and About.
 * Uses Framer Motion's useScroll / useTransform — zero custom listeners.
 * Lenis handles the smooth-scroll behavior at the app root level.
 *
 * Animations:
 *  • Image: subtle scale 0.92 → 1.02 driven by scroll progress
 *  • Text:  fade-in + upward slide once 30-65% of section is scrolled
 *  • All transforms are GPU-accelerated (will-change-transform)
 */
export function SmoothSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // ── Image: subtle scale ──
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1.04]);

  // ── Text: fade + slide up ──
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.25, 0.55], [40, 0]);

  // ── Eyebrow line: staggered fade ──
  const eyebrowOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const eyebrowY = useTransform(scrollYProgress, [0.2, 0.45], [20, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[140vh] w-full items-center justify-center bg-[#FDFBF7] overflow-hidden"
    >
      <div className="flex flex-col items-center gap-10 px-6 text-center max-w-4xl mx-auto">

        {/* ── IMAGE ── */}
        <motion.div
          style={{ scale }}
          className="overflow-hidden rounded-3xl shadow-2xl shadow-black/10 will-change-transform"
        >
          <img
            src="/images/bridal-south-indian.jpg"
            alt="Signature bridal transformation"
            className="w-full max-w-[520px] aspect-[4/5] object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* ── TEXT ── */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="will-change-transform"
        >
          {/* Eyebrow */}
          <motion.p
            style={{ opacity: eyebrowOpacity, y: eyebrowY }}
            className="text-[#C9A961] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          >
            Signature Work
          </motion.p>

          <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] leading-tight mb-4">
            Meet the Artist
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
            Professional bridal makeup artist creating elegant,
            long-lasting looks for your special day. Every face is a
            unique canvas — crafted with precision, artistry, and heart.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
