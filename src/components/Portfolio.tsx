import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Eye, ChevronLeft, ChevronRight, ArrowDown, ArrowUp } from 'lucide-react';

export type CategoryType =
  | 'BRIDAL MAKEUP'
  | 'SOFT GLAM'
  | 'MATERNITY GLOW'
  | 'HAIRSTYLES'
  | 'NAIL ART';

export interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  categories: CategoryType[];
  heightClass: string;
}

const workCategories: CategoryType[] = [
  'BRIDAL MAKEUP',
  'SOFT GLAM',
  'MATERNITY GLOW',
  'HAIRSTYLES',
  'NAIL ART',
];

const allWorkItems: WorkItem[] = [
  // 1. BRIDAL MAKEUP (8 Photos)
  {
    id: 'bridal-1',
    title: 'Golden Hour Bridal',
    subtitle: 'High Definition South Indian Bride',
    image: '/images/bridal-gold-jewelry.jpg',
    categories: ['BRIDAL MAKEUP'],
    heightClass: 'h-[300px] sm:h-[320px]',
  },
  {
    id: 'bridal-2',
    title: 'Royal Red Bridal',
    subtitle: 'Airbrush Veil & Velvet Zari Setting',
    image: '/images/bridal-royal-red.jpg',
    categories: ['BRIDAL MAKEUP'],
    heightClass: 'h-[340px] sm:h-[360px]',
  },
  {
    id: 'bridal-3',
    title: 'Traditional Bridal Elegance',
    subtitle: 'Macro Bridal Contouring & Pearl Nath',
    image: '/images/bridal-detail-new-1.jpg',
    categories: ['BRIDAL MAKEUP'],
    heightClass: 'h-[320px] sm:h-[340px]',
  },
  {
    id: 'bridal-4',
    title: 'Royal Bridal Veil',
    subtitle: 'Intricate Henna & Embroidered Veil Framing',
    image: '/images/bridal-hq-1.jpg',
    categories: ['BRIDAL MAKEUP'],
    heightClass: 'h-[330px] sm:h-[350px]',
  },
  {
    id: 'bridal-5',
    title: 'Bridal Prep Glow',
    subtitle: 'Airbrush Prep & Crystal Headpiece Setting',
    image: '/images/bridal-prep-glow.jpg',
    categories: ['BRIDAL MAKEUP'],
    heightClass: 'h-[310px] sm:h-[330px]',
  },
  {
    id: 'bridal-6',
    title: 'South Indian Bridal',
    subtitle: 'Temple Jewellery & Classic Elegance',
    image: '/images/bridal-south-indian.jpg',
    categories: ['BRIDAL MAKEUP'],
    heightClass: 'h-[320px] sm:h-[340px]',
  },
  {
    id: 'bridal-7',
    title: 'Radiant South Indian',
    subtitle: 'Intricate Blouse Embroidery & Glass Bangles',
    image: '/images/bridal-south-indian-detail.jpg',
    categories: ['BRIDAL MAKEUP'],
    heightClass: 'h-[340px] sm:h-[360px]',
  },
  {
    id: 'bridal-8',
    title: 'Spotlight Glam',
    subtitle: 'Lavender Zari Draping & Studio Drama',
    image: '/images/bridal-spotlight-glam.jpg',
    categories: ['BRIDAL MAKEUP'],
    heightClass: 'h-[320px] sm:h-[340px]',
  },

  // 2. SOFT GLAM (2 Photos)
  {
    id: 'soft-1',
    title: 'Elegant Event Look',
    subtitle: 'Natural Radiance for Special Occasions',
    image: '/images/casual-event-look.jpg',
    categories: ['SOFT GLAM'],
    heightClass: 'h-[300px] sm:h-[320px]',
  },
  {
    id: 'soft-2',
    title: 'Pink Reception Glam',
    subtitle: 'Evening Glamour & Gloss Finish',
    image: '/images/soft-glam-pink.jpg',
    categories: ['SOFT GLAM'],
    heightClass: 'h-[330px] sm:h-[350px]',
  },

  // 3. MATERNITY GLOW (1 Photo)
  {
    id: 'maternity-1',
    title: 'Traditional Reception Glam',
    subtitle: 'Radiant Glow & Saree Draping',
    image: '/images/pregnancy-maternity-glam.jpg',
    categories: ['MATERNITY GLOW'],
    heightClass: 'h-[340px] sm:h-[360px]',
  },

  // 4. HAIRSTYLES (6 Photos)
  {
    id: 'hair-1',
    title: 'Traditional Floral Braid',
    subtitle: 'Dense Jasmine & Rose Garland Weave',
    image: '/images/hairstyle-1.jpg',
    categories: ['HAIRSTYLES'],
    heightClass: 'h-[340px] sm:h-[360px]',
  },
  {
    id: 'hair-2',
    title: 'Intricate Beaded Braid',
    subtitle: 'Pearl & Gold Metallic Threadwork',
    image: '/images/hairstyle-2.jpg',
    categories: ['HAIRSTYLES'],
    heightClass: 'h-[300px] sm:h-[320px]',
  },
  {
    id: 'hair-3',
    title: 'Butterfly Bloom Braid',
    subtitle: 'Cascading Botanical Floral Pins',
    image: '/images/hairstyle-3.jpg',
    categories: ['HAIRSTYLES'],
    heightClass: 'h-[320px] sm:h-[340px]',
  },
  {
    id: 'hair-4',
    title: 'Royal Jasmine Braid',
    subtitle: 'Symmetric Classic Floral Alignment',
    image: '/images/hairstyle-4.jpg',
    categories: ['HAIRSTYLES'],
    heightClass: 'h-[310px] sm:h-[330px]',
  },
  {
    id: 'hair-5',
    title: 'Divine Temple Braid',
    subtitle: 'Antique Billa Embedding',
    image: '/images/hairstyle-5.jpg',
    categories: ['HAIRSTYLES'],
    heightClass: 'h-[330px] sm:h-[350px]',
  },
  {
    id: 'hair-6',
    title: 'Jeweled Ribbon Braid',
    subtitle: 'Structured Volume & Ribbon Interweave',
    image: '/images/hairstyle-6.jpg',
    categories: ['HAIRSTYLES'],
    heightClass: 'h-[310px] sm:h-[330px]',
  },

  // 5. NAIL ART (4 Photos)
  {
    id: 'nails-1',
    title: 'Ruby Red Royal Glam',
    subtitle: 'Crystal Rhinestone Bridal Gel Set',
    image: '/images/nail-art-red-glam.jpg',
    categories: ['NAIL ART'],
    heightClass: 'h-[290px] sm:h-[310px]',
  },
  {
    id: 'nails-2',
    title: 'Chocolate & Soft Pink Ombré',
    subtitle: 'Delicate Geometric Line Art',
    image: '/images/nail-art-pink-brown.jpg',
    categories: ['NAIL ART'],
    heightClass: 'h-[290px] sm:h-[310px]',
  },
  {
    id: 'nails-3',
    title: 'Pink Glitter Stardust',
    subtitle: 'Gold Foil Flakes & Micro-Diamond Coat',
    image: '/images/nail-art-pink-glitter.jpg',
    categories: ['NAIL ART'],
    heightClass: 'h-[290px] sm:h-[310px]',
  },
  {
    id: 'nails-4',
    title: 'Blush & Champagne Shimmer',
    subtitle: 'Almond Extension with Gold Dust Tips',
    image: '/images/nail-art-pink-gold.jpg',
    categories: ['NAIL ART'],
    heightClass: 'h-[290px] sm:h-[310px]',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('BRIDAL MAKEUP');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isExpanded = !!expandedCategories[activeCategory];

  const toggleExpand = () => {
    setExpandedCategories((prev) => ({
      ...prev,
      [activeCategory]: !prev[activeCategory],
    }));
  };

  const filteredItems = allWorkItems.filter((item) =>
    item.categories.includes(activeCategory)
  );

  const totalImages = filteredItems.length;
  const remainingImages = totalImages - 3;
  const hasMore = remainingImages > 0;

  // Render first 3 if collapsed, or all if expanded
  const displayedItems = isExpanded || !hasMore ? filteredItems : filteredItems.slice(0, 3);
  const currentSelectedImage = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => ((prev! + 1) % filteredItems.length));
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
    }
  };

  // Keyboard navigation for enlarged photo lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'Escape') setSelectedIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  return (
    <section
      id="work"
      className="relative w-full rounded-island bg-navy overflow-hidden p-6 sm:p-10 md:p-12 lg:p-16 text-white border border-lightblue/20 shadow-2xl"
    >
      {/* Container Header */}
      <div className="relative z-10 max-w-4xl mb-7">
        <h2 className="section-title-clamp font-black uppercase text-white tracking-tight mb-2">
          THE WORK
        </h2>
        <p className="text-sm sm:text-base text-ghost/80 max-w-2xl font-normal leading-relaxed">
          A curated look at the work created at Annu Beauty Salon.
        </p>
      </div>

      {/* Category Filter Navigation */}
      <div className="relative z-10 flex flex-wrap gap-2 sm:gap-2.5 mb-8 pb-4 border-b border-white/10">
        {workCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                isActive
                  ? 'bg-white text-navy shadow-lg shadow-black/25 scale-105'
                  : 'bg-white/5 text-ghost hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <span>{cat}</span>
              {isActive && (
                <motion.span
                  layoutId="activeFilterPill"
                  className="absolute inset-0 rounded-full border-2 border-white pointer-events-none"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Dynamic In-Place Gallery Grid */}
      <motion.div
        layout
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-start"
      >
        <AnimatePresence mode="popLayout">
          {displayedItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.35, delay: index * 0.02 }}
              onClick={() => setSelectedIndex(index)}
              className="group mobile-hover-target cursor-pointer rounded-2xl overflow-hidden bg-navy-deep/90 border border-white/10 hover:border-lightblue/40 hover:shadow-xl transition-all duration-400 flex flex-col justify-between"
            >
              {/* Compact Image Container */}
              <div className={`${item.heightClass} overflow-hidden relative w-full`}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent opacity-30 group-hover:opacity-75 transition-opacity" />

                {/* Hover Eye Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Clean Small Caption */}
              <div className="p-4 sm:p-4.5 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-white group-hover:text-lightblue transition-colors truncate">
                    {item.title}
                  </h3>
                  <span className="text-xs text-ghost/70 block truncate mt-0.5 font-normal">
                    {item.subtitle}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-ghost/60 group-hover:border-lightblue group-hover:text-lightblue group-hover:bg-lightblue/10 transition-all flex-shrink-0">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* In-Place "+{remainingImages} MORE" Trigger (Expands directly in the same section) */}
      {!isExpanded && hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 mt-6 sm:mt-8 flex justify-center"
        >
          <button
            onClick={toggleExpand}
            className="group px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-navy font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-lightblue hover:text-white transition-all duration-300 flex items-center gap-3 shadow-xl shadow-black/25 hover:scale-105"
          >
            <span className="w-6 h-6 rounded-full bg-navy text-white group-hover:bg-white group-hover:text-navy flex items-center justify-center text-xs font-bold transition-colors">
              +{remainingImages}
            </span>
            <span>+{remainingImages} MORE</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      )}

      {/* In-Place "SHOW LESS ↑" Trigger (Collapses back to 3 images) */}
      {isExpanded && hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 mt-8 flex justify-center"
        >
          <button
            onClick={toggleExpand}
            className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 backdrop-blur-md hover:scale-105"
          >
            <span>SHOW LESS</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {/* Enlarged Photo Lightbox Modal (Only when clicking an individual photo) */}
      <AnimatePresence>
        {currentSelectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Top Close Button */}
            <button
              className="absolute top-6 right-6 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Prev Arrow */}
            {filteredItems.length > 1 && (
              <button
                className="absolute left-4 sm:left-8 z-30 p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md hover:scale-110"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Next Arrow */}
            {filteredItems.length > 1 && (
              <button
                className="absolute right-4 sm:right-8 z-30 p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md hover:scale-110"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Central Media Card */}
            <div
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentSelectedImage.id}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25 }}
                src={currentSelectedImage.image}
                alt={currentSelectedImage.title}
                className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />

              {/* Caption Overlay */}
              <div className="mt-4 text-center">
                <div className="text-xs text-lightblue font-semibold uppercase tracking-wider mb-1">
                  {activeCategory} • {selectedIndex! + 1} of {filteredItems.length}
                </div>
                <h3 className="text-base sm:text-xl font-bold uppercase tracking-tight text-white">
                  {currentSelectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-ghost/70 font-normal">
                  {currentSelectedImage.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}