import React from 'react';
import { motion } from 'framer-motion';

const nails = [
  {
    id: 1,
    title: 'Ruby Red Glam',
    desc: 'Deep crimson with elegant rhinestone accents.',
    image: '/images/nail-art-red-glam.jpg',
  },
  {
    id: 2,
    title: 'Chocolate & Pink Ombre',
    desc: 'Sophisticated brown and soft pink with delicate line work.',
    image: '/images/nail-art-pink-brown.jpg',
  },
  {
    id: 3,
    title: 'Pink Glitter Stardust',
    desc: 'Dreamy pink gradient with shimmering gold glitter.',
    image: '/images/nail-art-pink-glitter.jpg',
  },
];

export function NailArt() {
  return (
    <section id="nails" className="py-24 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif mb-6 text-[#EFE6DA]"
            >
              Nail Artistry
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg"
            >
              Beyond makeup, we offer bespoke nail designs that complement your overall look. 
              From classic elegance to modern trends.
            </motion.p>
          </div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="hidden md:block"
          >
            <div className="px-8 py-4 border border-[#C9A961]/30 rounded-full text-[#C9A961] font-medium hover:bg-[#C9A961]/10 transition-colors cursor-pointer">
              Explore All Designs
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nails.map((nail, index) => (
            <motion.div
              key={nail.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <img
                  src={nail.image}
                  alt={nail.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif text-white mb-2">{nail.title}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {nail.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
