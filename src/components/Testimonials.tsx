import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const salonServices = [
  {
    title: 'Bridal & Reception Makeovers',
    description:
      'High-Definition (HD) and Airbrush bridal transformations, traditional South Indian bridal looks, reception glam, maternity photo-sessions, and pre-wedding rituals.',
    highlight: 'Includes custom shade blending, sweat-resistant long-wear formula, saree draping & jewelry placement.',
  },
  {
    title: 'Hair Styling & Traditional Braids',
    description:
      'Master hair styling encompassing traditional floral braids, beaded jasmine plaits, butterfly bloom braids, jeweled ribbon designs, bridal buns, and precision feather layer cuts.',
    highlight: 'Includes fresh flower adornment, hair extension setting, and humidity-proof hold.',
  },
  {
    title: 'Nail Art & Gel Extensions',
    description:
      'Bespoke nail artistry tailored to bridal ensembles. Handcrafted ruby red glam, chocolate & pink ombré, glittering stardust finishes, and durable gel overlays.',
    highlight: 'Featuring rhinestone placement, zero-damage removal, and high-gloss gel seal.',
  },
  {
    title: 'Skincare & Glow Facials',
    description:
      'Deep cellular hydration facials, bridal radiance peel rituals, skin tone harmonization, and relaxing botanical massage therapy for effortless wedding glow.',
    highlight: 'Formulated with premium skincare suitable for sensitive skin tones.',
  }
];


export function Testimonials() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const openWhatsAppBooking = (serviceName: string) => {
    const message = encodeURIComponent(`Hi Shabana Ji, I would like to enquire about booking "${serviceName}" at Annu Beauty Salon.`);
    window.open(`https://wa.me/917075997545?text=${message}`, '_blank');
  };

  return (
    <section
      id="services"
      className="relative w-full rounded-island bg-white overflow-hidden p-6 sm:p-10 md:p-14 lg:p-20 border border-hairline shadow-sm"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="max-w-3xl">
          <h2 className="section-title-clamp font-black uppercase text-navy tracking-tight">
            CURATED SALON SERVICES & ENQUIRIES.
          </h2>
          <p className="text-sm sm:text-base text-muted mt-3 max-w-2xl font-normal leading-relaxed">
            Every service is customized with precision and artistic care. Click any service row to enquire and check date availability directly on WhatsApp.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Click to Enquire on WhatsApp</span>
        </div>
      </div>

      {/* Interactive Editorial Rows */}
      <div className="divide-y divide-hairline border-t border-b border-hairline">
        {salonServices.map((item, index) => {
          return (
            <div
              key={item.title}
              onMouseEnter={() => setActiveRow(index)}
              onMouseLeave={() => setActiveRow(null)}
              onClick={() => openWhatsAppBooking(item.title)}
              className="interactive-row py-6 sm:py-8 px-4 sm:px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer rounded-2xl group transition-all hover:bg-royal/5"
            >
              {/* Left Info: Title */}
              <div className="lg:w-5/12">
                <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-tight text-navy group-hover:text-royal transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Middle: Description & Highlight */}
              <div className="lg:w-5/12">
                <p className="text-xs sm:text-sm text-muted group-hover:text-ink transition-colors leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-royal flex-shrink-0" />
                  <span className="font-medium text-navy/80">{item.highlight}</span>
                </div>
              </div>

              {/* Right: Booking Action */}
              <div className="flex items-center justify-between sm:justify-end lg:w-2/12 gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-hairline/60">
                <span className="text-xs text-royal font-bold uppercase tracking-wider group-hover:underline flex items-center gap-1">
                  Enquire Now
                </span>
                <div className="w-9 h-9 rounded-full border border-hairline group-hover:border-royal group-hover:bg-royal group-hover:text-white transition-all flex items-center justify-center flex-shrink-0 shadow-xs">
                  <ArrowRight className="row-arrow w-4 h-4 text-muted group-hover:text-white transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
