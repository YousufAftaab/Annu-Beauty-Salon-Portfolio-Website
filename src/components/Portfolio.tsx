import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const categories = [
  'Bridal Makeup',
  'Soft Glam',
  'Pregnancy Makeup',
  'Nail Art',
];

const portfolioItems = [
  {
    id: 11,
    category: 'Bridal Makeup',
    label: 'Traditional Bridal Elegance',
    image: '/images/bridal-detail-new-1.jpg',
  },
  {
    id: 12,
    category: 'Bridal Makeup',
    label: 'Royal Bridal Veil',
    image: '/images/bridal-detail-new-2.jpg',
  },
  {
    id: 1,
    category: 'Pregnancy Makeup',
    label: 'Traditional Maternity Glam',
    image: '/images/pregnancy-maternity-glam.jpg',
  },
  {
    id: 2,
    category: 'Bridal Makeup',
    label: 'Bridal Prep Glow',
    image: '/images/bridal-prep-glow.jpg',
  },
  {
    id: 3,
    category: 'Bridal Makeup',
    label: 'South Indian Bridal',
    image: '/images/bridal-south-indian.jpg',
  },
  {
    id: 4,
    category: 'Soft Glam',
    label: 'Elegant Event Look',
    image: '/images/casual-event-look.jpg',
  },
  {
    id: 10,
    category: 'Soft Glam',
    label: 'Pink Reception Glam',
    image: '/images/soft-glam-pink.jpg',
  },
  {
    id: 13,
    category: 'Soft Glam',
    label: 'Natural Evening Glow',
    image: '/images/casual-event-look.jpg',
  },
  {
    id: 14,
    category: 'Soft Glam',
    label: 'Golden Hour Radiance',
    image: '/images/soft-glam-pink.jpg',
  },
  {
    id: 15,
    category: 'Soft Glam',
    label: 'Dewy Finish Look',
    image: '/images/casual-event-look.jpg',
  },
  {
    id: 5,
    category: 'Bridal Makeup',
    label: 'Radiant South Indian',
    image: '/images/bridal-south-indian-detail.jpg',
  },
  {
    id: 6,
    category: 'Bridal Makeup',
    label: 'Spotlight Glam',
    image: '/images/bridal-spotlight-glam.jpg',
  },
  {
    id: 7,
    category: 'Nail Art',
    label: 'Ruby Red Glam',
    image: '/images/nail-art-red-glam.jpg',
  },
  {
    id: 8,
    category: 'Nail Art',
    label: 'Chocolate & Pink Ombre',
    image: '/images/nail-art-pink-brown.jpg',
  },
  {
    id: 9,
    category: 'Nail Art',
    label: 'Pink Glitter Stardust',
    image: '/images/nail-art-pink-glitter.jpg',
  },
  {
    id: 16,
    category: 'Nail Art',
    label: 'French Classic',
    image: '/images/nail-art-red-glam.jpg',
  },
  {
    id: 17,
    category: 'Nail Art',
    label: 'Chrome Finish',
    image: '/images/nail-art-pink-brown.jpg',
  },
  {
    id: 18,
    category: 'Nail Art',
    label: 'Matte Elegance',
    image: '/images/nail-art-pink-glitter.jpg',
  },
];



// Sophisticated image reveal: a colored overlay wipes away
const imageRevealVariants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};

const overlayRevealVariants = {
  hidden: { scaleX: 1 },
  visible: {
    scaleX: 0,
    transition: {
      duration: 0.7,
      ease: [0.77, 0, 0.175, 1],
      delay: 0.15,
    },
  },
};

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Bridal Makeup');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6); // Default to desktop (5 + 1)

  // Determine initial count based on screen size (simulated via visibleCount)
  // We will slice the array to (visibleCount - 1) and add the "Load More" card
  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory);
  
  // Use a different count for mobile vs desktop
  // On mobile: 3 images + 1 card = 4
  // On PC: 5 images + 1 card = 6
  // Since we use Tailwind for responsive layout, we can just handle the slice logic here
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const initialLimit = isMobile ? 3 : 5;
  const showLoadMore = filteredItems.length > initialLimit && visibleCount <= initialLimit + 1;

  const displayItems = showLoadMore 
    ? filteredItems.slice(0, initialLimit) 
    : filteredItems;

  return (
    <section id="work" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-[#1a1a1a]">
            Transformations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through some of my favorite recent works and client
            transformations.
          </p>
        </div>

        {/* Filters with micro-interactions */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(isMobile ? 4 : 6); // Reset on category change
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#E8B4B0] text-white shadow-md shadow-[#E8B4B0]/30'
                  : 'bg-[#FDFBF7] text-gray-600 hover:bg-[#EFE6DA]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grid with Sophisticated Image Reveals */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={imageRevealVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, margin: '-50px' }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-square overflow-hidden rounded-2xl relative mb-3 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <motion.div
                    variants={overlayRevealVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="absolute inset-0 bg-gradient-to-r from-[#EFE6DA] to-[#C9A961]/60 z-20 origin-right"
                  />
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                </div>
                <h4 className="font-serif text-lg text-[#1a1a1a]">
                  {item.label}
                </h4>
                <p className="text-sm text-[#C9A961]">{item.category}</p>
              </motion.div>
            ))}

            {/* The 6th card (or 4th on mobile) acting as Load More */}
            {showLoadMore && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square rounded-2xl bg-[#FDFBF7] border-2 border-dashed border-[#EFE6DA] flex flex-col items-center justify-center text-center p-6 group cursor-pointer hover:bg-[#EFE6DA]/30 transition-colors duration-300"
                onClick={() => setVisibleCount(999)} // Show all
              >
                <div className="w-16 h-16 rounded-full bg-[#E8B4B0] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#E8B4B0]/20">
                  <span className="text-2xl">+</span>
                </div>
                <h4 className="font-serif text-xl text-[#1a1a1a] mb-1">View More</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  {filteredItems.length - initialLimit} transformations
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-[#C9A961] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged portfolio piece"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}