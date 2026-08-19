import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2, ArrowRight, Award } from 'lucide-react';

const courses = [
  {
    title: 'Bridal Makeup Diploma',
    desc: 'Comprehensive practical training covering skin undertone analysis, HD airbrush application, contouring, eye glam, and high-precision saree draping.',
    highlights: ['1-on-1 Personalized Mentorship', 'Live Model Hands-on Practice', 'Professional Kit Selection Guidance']
  },
  {
    title: 'Hair Couture & Styling',
    desc: 'Mastering traditional South Indian bridal braids, floral weaving, modern updos, volume padding, and thermal tool techniques for long-lasting hold.',
    highlights: ['Jasmine & Garland Pinning Techniques', 'Extension Integration', 'Feather & Layer Hair Cutting']
  },
  {
    title: 'Beauty Therapy & Skincare',
    desc: 'Deep scientific understanding of skin types, facial massage therapies, clean hygiene standards, and customized bridal glow treatment protocols.',
    highlights: ['Skin Analysis & Diagnosis', 'Facial & Cleanup Regimes', 'Sterilization & Hygiene Standards']
  },
  {
    title: 'Salon Career & Business',
    desc: 'Equipping graduates with portfolio development skills, bride consultation mastery, client pricing models, and business growth strategies in Mancherial.',
    highlights: ['Portfolio Photoshoot Guidance', 'Client Relationship Mastery', 'Official Annu Academy Certification']
  }
];

export function SmoothSection() {
  const openAcademyEnquiry = () => {
    const message = encodeURIComponent('Hi Shabana Ji, I am interested in enrolling in Annu Beauty Academy courses. Please share details regarding course syllabus and batch timings.');
    window.open(`https://wa.me/917075997545?text=${message}`, '_blank');
  };

  return (
    <section
      id="academy"
      className="relative w-full rounded-island bg-navy overflow-hidden p-6 sm:p-10 md:p-14 lg:p-20 text-white border border-lightblue/20 shadow-2xl"
    >
      {/* Section Header */}
      <div className="relative z-10 max-w-4xl mb-12">
        <h2 className="section-title-clamp font-black uppercase text-white tracking-tight">
          ANNU BEAUTY ACADEMY.
        </h2>
        <p className="text-sm sm:text-base text-ghost/80 mt-3 max-w-2xl font-normal leading-relaxed">
          Over 23 years of salon expertise condensed into intensive, hands-on certification diplomas designed to turn passionate students into independent, successful beauty artists.
        </p>
      </div>

      {/* 4 Course Modules Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {courses.map((course) => (
          <div
            key={course.title}
            className="mobile-dark-card-target p-7 sm:p-9 rounded-[1.75rem] bg-navy-deep/80 border border-white/10 hover:border-lightblue/40 hover:bg-navy-deep/95 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                  {course.title}
                </h3>
                <div className="w-8 h-8 rounded-lg bg-royal/20 flex items-center justify-center text-lightblue">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ghost/80 leading-relaxed mb-6 font-normal">
                {course.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs text-ghost/90">
              {course.highlights.map((h, hIdx) => (
                <div key={hIdx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lightblue flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Academy Callout Bar */}
      <div className="relative z-10 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
            Ready to launch your professional beauty career?
          </h4>
          <p className="text-xs text-ghost/80 max-w-2xl font-normal leading-relaxed">
            Limited batch seats ensuring personal attention by Shabana Anjum at our Mancherial studio.
          </p>
        </div>

        <button
          onClick={openAcademyEnquiry}
          className="px-7 py-3.5 rounded-full bg-white hover:bg-lightblue text-navy hover:text-white font-bold text-xs uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0 shadow-lg"
        >
          <span>Enquire About Batches</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}


