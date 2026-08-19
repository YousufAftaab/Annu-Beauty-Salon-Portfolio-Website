import { Instagram, ArrowRight, Play } from 'lucide-react';

const igPosts = [
  {
    type: 'video',
    url: '/videos/mallu-1.mp4',
  },
  {
    type: 'video',
    url: '/videos/mallu-2.mp4',
  },
  {
    type: 'video',
    url: '/videos/mallu-3.mp4',
  },
  {
    type: 'video',
    url: '/videos/Video-523.mp4',
  },
  {
    type: 'video',
    url: '/videos/Video-711.mp4',
  },
  {
    type: 'video',
    url: '/videos/mallu-4.mp4',
  },
];

export function InstagramGrid() {
  return (
    <section
      id="reels"
      className="relative w-full rounded-island bg-white overflow-hidden p-6 sm:p-10 md:p-14 lg:p-20 border border-hairline shadow-sm"
    >
      {/* Section Header with Instagram Profile CTA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-3xl">
          <h2 className="section-title-clamp font-black uppercase text-navy tracking-tight">
            CAPTURED IN MOTION.
          </h2>
          <p className="text-sm sm:text-base text-muted mt-3 font-normal leading-relaxed">
            Watch live bridal reveals, saree draping precision, and behind-the-scenes artistry from our Mancherial studio.
          </p>
        </div>

        <a
          href="https://instagram.com/salon_annu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-navy hover:bg-royal text-white font-semibold text-xs uppercase tracking-wide transition-all duration-300 shadow-md flex-shrink-0 hover:scale-105"
        >
          <Instagram className="w-4 h-4" />
          <span>Follow @salon_annu</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 6-Video Reels Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {igPosts.map((post, idx) => (
          <div
            key={idx}
            className="group mobile-reel-target relative aspect-[9/16] overflow-hidden rounded-2xl block bg-navy-dark shadow-sm border border-hairline"
          >
            <video
              src={post.url}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 brightness-[1.02]"
            />
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />

            {/* Play Indicator */}
            <div className="absolute bottom-3 right-3">
              <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80">
                <Play className="w-3.5 h-3.5 fill-white/80" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
