import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const categories = [
  'Bridal Makeup',
  'Soft Glam',
  'Maternity Glam',
  'Hairstyles',
  'Nail Art',
];

const portfolioItems = [
  {
    id: 14,
    category: 'Bridal Makeup',
    label: 'Golden Hour Bridal',
    image: '/images/bridal-gold-jewelry.jpg',
  },
  {
    id: 13,
    category: 'Bridal Makeup',
    label: 'Royal Red Bridal',
    image: '/images/bridal-royal-red.jpg',
  },
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
    category: 'Maternity Glam',
    label: 'Traditional Reception Glam',
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
    category: 'Hairstyles',
    label: 'Intricate Beaded Braid',
    image: '/images/hairstyle-2.jpg',
  },
  {
    id: 18,
    category: 'Hairstyles',
    label: 'Butterfly Bloom Braid',
    image: '/images/hairstyle-3.jpg',
  },
  {
    id: 19,
    category: 'Hairstyles',
    label: 'Royal Jasmine Braid',
    image: '/images/hairstyle-4.jpg',
  },
  {
    id: 15,
    category: 'Hairstyles',
    label: 'Traditional Floral Braid',
    image: '/images/hairstyle-1.jpg',
  },
  {
    id: 20,
    category: 'Hairstyles',
    label: 'Divine Temple Braid',
    image: '/images/hairstyle-5.jpg',
  },
  {
    id: 21,
    category: 'Hairstyles',
    label: 'Jeweled Ribbon Braid',
    image: '/images/hairstyle-6.jpg',
  },
  {
    id: 17,
    category: 'Nail Art',
    label: 'Pink & Gold Shimmer',
    image: '/images/nail-art-pink-gold.jpg',
  },
];



// Sophisticated image reveal: "Taking out cards" (expand) and "Shuffle cards" (collapse)
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.98,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory);
  
  const initialLimit = isMobile ? 3 : 5;
  const showLoadMore = filteredItems.length > initialLimit && !isExpanded;

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
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setIsExpanded(false); // Reset on category change
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-lg shadow-black/10'
                  : 'bg-white text-gray-600 border-[#EFE6DA] hover:border-[#E8B4B0] hover:text-[#E8B4B0]'
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
            {displayItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                exit="exit"
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-[3/4] overflow-hidden rounded-xl relative mb-4 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <motion.div
                    variants={overlayRevealVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] to-[#EFE6DA] z-20 origin-right"
                  />
                  <img
                    src={item.image}
                    alt={item.label}
                    className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${item.category === 'Hairstyles' ? 'object-top' : 'object-center'}`}
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                </div>
                <h4 className="font-serif text-xl font-bold text-[#111111] mb-1">
                  {item.label}
                </h4>
                <p className="text-xs uppercase tracking-widest text-[#C9A961] font-medium">{item.category}</p>
              </motion.div>
            ))}

            {/* The 6th card (or 4th on mobile) acting as Load More */}
            {showLoadMore && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className="aspect-[3/4] rounded-xl bg-white border border-[#EFE6DA] flex flex-col items-center justify-center text-center p-6 group cursor-pointer hover:border-[#E8B4B0] hover:bg-[#FDFBF7] transition-all duration-500 shadow-sm hover:shadow-xl"
                onClick={() => setIsExpanded(true)} // Show all
              >
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center mb-6 group-hover:bg-[#E8B4B0] transition-colors duration-500 shadow-lg shadow-black/10">
                  <ArrowRight className="w-8 h-8 transition-transform duration-500 group-hover:translate-x-1" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-2">View More</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">
                  {filteredItems.length - initialLimit} transformations
                </p>
                <div className="mt-4 w-8 h-1 bg-[#E8B4B0] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            )}
            {/* The Load Less card, shown only when expanded */}
            {isExpanded && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-[3/4] rounded-2xl bg-[#FDFBF7] border-2 border-dashed border-[#EFE6DA] flex flex-col items-center justify-center text-center p-6 group cursor-pointer hover:bg-[#EFE6DA]/30 transition-colors duration-300"
                onClick={() => {
                  setIsExpanded(false);
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/5">
                  <span className="text-2xl">−</span>
                </div>
                <h4 className="font-serif text-xl text-[#1a1a1a] mb-1">View Less</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Collapse list
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