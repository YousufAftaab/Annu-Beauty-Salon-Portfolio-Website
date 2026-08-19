import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Ravali Rao',
    rating: 5,
    text: 'Had a great experience recently at this parlour. Kudos to the beautician for her skill, calm composed nature. She does it all by herself yet diligently. I would recommend this place for a clean, neat and lovely beauty makeover.',
  },
  {
    id: 2,
    name: 'Amaravathi Bashavathini',
    rating: 5,
    text: 'Mrs Shabana did my makeup for my wedding day. She did a phenomenal job. She made me look stunning and the look was natural that I wanted. She is very professional and arrived on time. I would highly recommend her services.',
  },
  {
    id: 3,
    name: 'Zakira Begum',
    rating: 5,
    text: 'I have done bridal makeup and all services here for my wedding, she is professional makeup artist and trainer in Mancherial. I have also done beauty therapist courses in this academy. Mam is well experienced 23+ years and her work is amazing.',
  },
  {
    id: 4,
    name: 'Harika Chintala',
    rating: 5,
    text: 'One of the best MUAs in Mancherial. I hired her for my brother-in-law’s wedding and was really impressed by the makeup. Thanks Shabana ji and team for such graceful work.',
  },
  {
    id: 5,
    name: 'Sreejasri Bandi',
    rating: 5,
    text: 'Thank you for being so professional and calming on the big day. The makeup looked amazing both in person and in photos—just the right balance of glam and grace.',
  },
  {
    id: 6,
    name: 'Nikitha Nikitha',
    rating: 5,
    text: 'Did my wedding nails and absolutely loved it! The intricate rhinestone placement and long-lasting gel finish received so many compliments.',
  },
];

export function ScrollExpandMedia() {
  return (
    <section
      id="reviews"
      className="relative w-full rounded-island bg-white overflow-hidden p-6 sm:p-10 md:p-14 lg:p-20 border border-hairline shadow-sm"
    >
      {/* Section Header */}
      <div className="max-w-4xl mb-12">
        <h2 className="section-title-clamp font-black uppercase text-navy tracking-tight">
          CLIENT EXPERIENCES.
        </h2>
        <p className="text-sm sm:text-base text-muted mt-3 max-w-2xl font-normal leading-relaxed">
          Over 23 years of delivering bridal transformations and salon experiences in Mancherial, backed by genuine client love.
        </p>
      </div>

      {/* 6-Review Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="mobile-card-target p-7 sm:p-8 rounded-[1.75rem] bg-offwhite border border-hairline hover:border-royal/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-royal/30" />
              </div>

              <p className="text-xs sm:text-sm text-ink leading-relaxed font-normal mb-6">
                “{review.text}”
              </p>
            </div>

            {/* Author Info */}
            <div className="pt-4 border-t border-hairline/70 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-tight text-navy">
                  {review.name}
                </h4>
              </div>
              <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


