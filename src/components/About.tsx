import { motion } from 'framer-motion';
import { Palette, GraduationCap, Scissors, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section
      id="artist"
      className="relative w-full rounded-island bg-white overflow-hidden p-6 sm:p-10 md:p-14 lg:p-20 border border-hairline shadow-sm"
    >
      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Artist Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden bg-offwhite border border-hairline shadow-lg">
            <img
              src="/images/artist-new.png"
              alt="Shabana Anjum - Master Makeup Artist & Educator"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            {/* Elegant Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-navy/90 backdrop-blur-md text-white border border-lightblue/20 flex items-center justify-between">
              <div>
                <span className="text-base sm:text-lg font-bold font-sans tracking-tight block">Shabana Anjum</span>
                <span className="text-xs text-lightblue">23+ Years Master Artistry</span>
              </div>
              <span className="text-xs text-ghost/80">Mancherial</span>
            </div>
          </div>
        </div>

        {/* Right Column: Story & Specialties */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="section-title-clamp font-black uppercase text-navy tracking-tight mb-4">
              MEET SHABANA ANJUM.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-ink font-medium leading-relaxed tracking-tight">
              “Every bride possesses a distinct aura. My goal is simple: to make you feel confident, radiant, and the most captivating version of yourself on your most cherished day.”
            </p>
          </div>

          <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
            With over 23 years of dedicated mastery in Mancherial, Mrs. Shabana Anjum has crafted thousands of unforgettable bridal looks, grand reception styles, and maternity celebrations. As founder of Annu Beauty Salon & Academy, she combines traditional South Indian aesthetic elegance with modern high-definition techniques.
          </p>

          {/* Specialties 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="mobile-card-target p-5 rounded-2xl bg-offwhite border border-hairline space-y-2 hover:border-royal/30 hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 rounded-xl bg-navy/5 flex items-center justify-center text-royal">
                <Palette className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                Bridal & Airbrush Makeovers
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Custom contouring and shade matching tailored to natural undertones, jewellery, and lighting.
              </p>
            </div>

            <div className="mobile-card-target p-5 rounded-2xl bg-offwhite border border-hairline space-y-2 hover:border-royal/30 hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 rounded-xl bg-navy/5 flex items-center justify-center text-royal">
                <Scissors className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                Hair Styling & Braids
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Intricate floral braids, beaded jasmine plaits, bridal buns, and precision feather layer cuts.
              </p>
            </div>

            <div className="mobile-card-target p-5 rounded-2xl bg-offwhite border border-hairline space-y-2 hover:border-royal/30 hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 rounded-xl bg-navy/5 flex items-center justify-center text-royal">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                Bespoke Nail Artistry
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Handcrafted rhinestone adornments, ombré gradients, and durable bridal gel extensions.
              </p>
            </div>

            <div className="mobile-card-target p-5 rounded-2xl bg-offwhite border border-hairline space-y-2 hover:border-royal/30 hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 rounded-xl bg-navy/5 flex items-center justify-center text-royal">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                Academy Training
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Certified 1-on-1 practical diploma courses empowering aspiring makeup artists across Telangana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
