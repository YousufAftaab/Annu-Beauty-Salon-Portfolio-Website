import React from 'react';
import { motion } from 'framer-motion';

const featuredLooks = [
  {
    id: 1,
    title: 'South Indian Bridal',
    desc: 'Vibrant traditional bridal makeup with stunning jewelry and mehndi.',
    image: '/images/bridal-south-indian.jpg',
  },
  {
    id: 2,
    title: 'Maternity Glow',
    desc: 'Radiant pregnancy makeup celebrating the beauty of motherhood.',
    image: '/images/pregnancy-maternity-glam.jpg',
  },
];

// Reveal animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const imageOverlayVariants = {
  hidden: { scaleY: 1 },
  visible: {
    scaleY: 0,
    transition: {
      duration: 0.8,
      ease: [0.77, 0, 0.175, 1],
      delay: 0.3,
    },
  },
};

export function FeaturedLooks() {
  return (
    <section className="py-24 bg-[#EFE6DA]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-[#1a1a1a]">
            Signature Looks
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated styles that define my aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {featuredLooks.map((look, index) => (
            <motion.div
              key={look.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-sm relative">
                {/* Reveal overlay */}
                <motion.div
                  variants={imageOverlayVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-gradient-to-b from-[#C9A961]/50 to-[#EFE6DA] z-10 origin-bottom"
                />
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-serif text-[#1a1a1a] mb-2">
                {look.title}
              </h3>
              <p className="text-gray-600">{look.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}