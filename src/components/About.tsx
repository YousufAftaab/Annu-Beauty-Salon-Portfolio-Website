import { motion } from 'framer-motion';
export function About() {
  return (
    <section id="about" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="w-full md:w-1/2 relative">
            
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10">
              <img
                src="/images/artist-new.png"
                alt="Shabana Anjum - Beauty Artist"
                className="w-full h-full object-cover" />
              
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#EFE6DA] rounded-3xl z-0"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="w-full md:w-1/2">
            
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-[#1a1a1a]">
              Meet the Artist
            </h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Hi, I’m Shabana Anjum, a professional makeup artist passionate about enhancing natural beauty for every occasion.
            </p>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              From bridal transformations to casual, glossy looks, and complete salon services including nails and styling, I focus on creating looks that suit each individual’s style and personality.
            </p>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              With years of experience, my goal is simple: to make you feel confident, radiant, and the best version of yourself, no matter the occasion.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-[#EFE6DA]/50 p-6 rounded-2xl">
                <h3 className="text-3xl font-serif text-[#C9A961] mb-2">23+</h3>
                <p className="text-sm font-medium text-gray-800 uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
              <div className="bg-[#F5D5D0]/30 p-6 rounded-2xl">
                <h3 className="text-xl font-serif text-[#1a1a1a] mb-2">
                  Specialties
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Bridal Makeup</li>
                  <li>Advanced Hair Styling</li>
                  <li>Nail Care</li>
                  <li>Skincare</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}