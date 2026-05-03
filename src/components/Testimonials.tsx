import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'ravali rao',
    text: "Had a great experience recently at this parlour. Kudos to the beautician for her skill, calm composed nature. She does it all by herself yet diligently. I would recommend this place for a clean, neat and lovely beauty makeover 😀.",
    avatar: 'https://ui-avatars.com/api/?name=ravali+rao&background=EFE6DA&color=1a1a1a',
  },
  {
    id: 2,
    name: 'amaravathi Bashavathini',
    text: "Mrs shabana did my makeup for my wedding day. She did a phenomenal job. She made me look stunning and the look was natural that I wanted. She is very professional and arrived on time. I would highly recommend her services.",
    avatar: 'https://ui-avatars.com/api/?name=amaravathi+Bashavathini&background=F5D5D0&color=1a1a1a',
  },
  {
    id: 3,
    name: 'Agasthya - THE JOY Channel',
    text: "It is the best beauty parlour in mancherial... I went to this parlour for feather haircut.. Its really amazing.. Iam too much satisfied.. She had patience..good maintaining.. I want to become regular customer.. Thank u annu sis....",
    avatar: 'https://ui-avatars.com/api/?name=Agasthya&background=EFE6DA&color=1a1a1a',
  },
  {
    id: 4,
    name: 'Zakira Begum',
    text: "I have done bridal makeup and all services here for my wedding, she is professional makeup artist and trainer in mancherial. I have done courses in makeup and beauty therapist courses in this academy, mam is well experienced 23+ years.",
    avatar: 'https://ui-avatars.com/api/?name=Zakira+Begum&background=F5D5D0&color=1a1a1a',
  },
  {
    id: 5,
    name: 'T spandana',
    text: "My saree draping, makeup and hairstyling done by Shabana Anjum @Annu beauty salon... she is Very professional and excellent make-up artist... highly recommend her services for any occasion",
    avatar: 'https://ui-avatars.com/api/?name=T+spandana&background=EFE6DA&color=1a1a1a',
  },
  {
    id: 6,
    name: 'Balasetty Bhavana',
    text: "Got my Engagement look by Shabana, saree draping & hair & makeup was well turned out. Very satisfied with the service.",
    avatar: 'https://ui-avatars.com/api/?name=Balasetty+Bhavana&background=F5D5D0&color=1a1a1a',
  },
  {
    id: 7,
    name: 'Sathvika Bhupathi',
    text: "Have done layer haircut and it was awesome... really loved her work😍 highly recommended.. I'm super happy with her work❤️",
    avatar: 'https://ui-avatars.com/api/?name=Sathvika+Bhupathi&background=EFE6DA&color=1a1a1a',
  },
  {
    id: 8,
    name: 'Chandu Ramya',
    text: "Best academy in mancherial, I am one of the students of this annu beauty salon and academy. If anyone wants professional training for hair beauty and makeup this is the best place friends.",
    avatar: 'https://ui-avatars.com/api/?name=Chandu+Ramya&background=F5D5D0&color=1a1a1a',
  },
  {
    id: 9,
    name: 'Joshna Dagam',
    text: "Good makeup skills she has. She is a professional makeup artist, keep it up. I felt very good when I visited for my engagement makeup. Definitely I must give 5 stars.",
    avatar: 'https://ui-avatars.com/api/?name=Joshna+Dagam&background=EFE6DA&color=1a1a1a',
  },
  {
    id: 10,
    name: 'nishitha bandi',
    text: "She is very good at makeup and skin treatments. She did according to my skin tone very perfectly. Highly recommended. 🤗",
    avatar: 'https://ui-avatars.com/api/?name=nishitha+bandi&background=F5D5D0&color=1a1a1a',
  },
  {
    id: 11,
    name: 'Abdul Shebaaz',
    text: "She's well trained and very experienced beautician I had ever met... I would have rated more than 5 stars if I could.",
    avatar: 'https://ui-avatars.com/api/?name=Abdul+Shebaaz&background=EFE6DA&color=1a1a1a',
  },
];

function useCardsPerView() {
  const [cardsPerView, setCardsPerView] = useState(3);
  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return cardsPerView;
}

export function Testimonials() {
  const cardsPerView = useCardsPerView();
  const totalPages = Math.ceil(testimonials.length / cardsPerView);
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const dragRef = useRef<HTMLDivElement>(null);

  // Auto-scroll every 4 seconds, pause on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, totalPages]);

  const goTo = useCallback(
    (page: number) => {
      setDirection(page > currentPage ? 1 : -1);
      setCurrentPage(page);
    },
    [currentPage]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Current visible testimonials
  const startIdx = currentPage * cardsPerView;
  const visibleTestimonials = testimonials.slice(
    startIdx,
    startIdx + cardsPerView
  );

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  // Handle drag end for swipe
  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -200) {
      goNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 200) {
      goPrev();
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-[#1a1a1a]">
            Client Love
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real words from beautiful people.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-[#EFE6DA]/60 flex items-center justify-center text-[#1a1a1a] hover:bg-[#EFE6DA] hover:text-[#C9A961] transition-all duration-300 hover:shadow-xl"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-[#EFE6DA]/60 flex items-center justify-center text-[#1a1a1a] hover:bg-[#EFE6DA] hover:text-[#C9A961] transition-all duration-300 hover:shadow-xl"
            aria-label="Next reviews"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slides */}
          <div className="overflow-hidden px-2 py-2">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'tween', duration: 0.45, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                ref={dragRef}
                className={`grid gap-5 md:gap-6 cursor-grab active:cursor-grabbing ${
                  cardsPerView === 1
                    ? 'grid-cols-1'
                    : cardsPerView === 2
                    ? 'grid-cols-2'
                    : 'grid-cols-3'
                }`}
              >
                {visibleTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white p-7 md:p-8 rounded-3xl shadow-sm border border-[#EFE6DA]/50 flex flex-col justify-between select-none hover:shadow-md transition-shadow duration-300"
                  >
                    <div>
                      <div className="flex text-[#C9A961] mb-5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic leading-relaxed text-sm md:text-base line-clamp-4">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-auto pt-2">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        draggable={false}
                      />
                      <h4 className="font-serif font-medium text-[#1a1a1a] text-sm">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to review page ${idx + 1}`}
                className="group p-1"
              >
                <motion.div
                  animate={{
                    width: idx === currentPage ? 28 : 8,
                    backgroundColor:
                      idx === currentPage ? '#C9A961' : '#EFE6DA',
                  }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="h-2 rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}